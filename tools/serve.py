#!/usr/bin/env python3
"""
serve.py — Curiosità dev server with in-memory search API.

Builds a search index on startup from courses-index.json (if available)
or by scanning filenames in assets/content/. Provides:

  /api/search?q=xxx&limit=20  — text search
  /api/stats                   — article counts per category
  /api/random?n=1              — random article(s)

Usage:
    python tools/serve.py
    python tools/serve.py --port 3001
"""

import http.server
import json
import os
import random
import sys
import time
import re
import unicodedata
import urllib.parse
import io
from collections import defaultdict

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')
INDEX_PATH = os.path.join(PROJECT_DIR, 'assets', 'courses-index.json')
CATEGORIES_PATH = os.path.join(CONTENT_DIR, '_categories.json')


def normalize(text):
    """Strip accents and lowercase for fuzzy matching."""
    s = unicodedata.normalize('NFD', text)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return s.lower()


def format_slug(slug):
    """Convert slug back to a readable title."""
    return slug.replace('-', ' ').replace('  ', ' ').strip().title()


# ══════════════════════════════════════════════════════
#  Search Engine — in-memory prefix-indexed search
# ══════════════════════════════════════════════════════

class SearchEngine:
    def __init__(self):
        self.entries = []       # [(slug, title, norm_title, disc)]
        self.prefix_idx = {}    # norm_word[:3] -> [entry_indices]
        self.stats = {}         # {disc_key: count}
        self.total = 0
        self.ready = False
        self.source = ''        # 'json' or 'filenames'

    def load_from_json(self, path):
        """Load index from courses-index.json."""
        print('  Loading %s...' % os.path.basename(path), flush=True)
        t0 = time.time()
        try:
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            print('  Parsed %d entries (%.1fs)' % (len(data), time.time() - t0), flush=True)
            raw = [(d['id'], d.get('t', d['id']), d.get('disc', '')) for d in data]
            self._build(raw)
            self.source = 'json'
            return True
        except Exception as e:
            print('  Failed: %s' % e, flush=True)
            return False

    def scan_filenames(self, content_dir):
        """Build quick index from filenames (no file reads)."""
        print('  Scanning content filenames...', flush=True)
        t0 = time.time()
        raw = []
        count = 0
        for entry in os.scandir(content_dir):
            name = entry.name
            if name.endswith('.json') and not name.startswith('_') and entry.is_file():
                slug = name[:-5]
                raw.append((slug, format_slug(slug), ''))
                count += 1
                if count % 500000 == 0:
                    print('    %dk files (%.1fs)' % (count // 1000, time.time() - t0), flush=True)
        print('  Scanned %d files (%.1fs)' % (count, time.time() - t0), flush=True)
        self._build(raw)
        self.source = 'filenames'

    def _build(self, raw):
        """Build prefix index from (slug, title, disc) tuples."""
        t0 = time.time()
        entries = []
        prefix_idx = defaultdict(list)
        stats = defaultdict(int)

        for i, (slug, title, disc) in enumerate(raw):
            norm = normalize(title)
            entries.append((slug, title, norm, disc))
            if disc:
                stats[disc] += 1

            # Index each word by its first 2-3 chars
            seen = set()
            for word in norm.split():
                if len(word) >= 2:
                    p2 = word[:2]
                    if p2 not in seen:
                        prefix_idx[p2].append(i)
                        seen.add(p2)
                if len(word) >= 3:
                    p3 = word[:3]
                    if p3 not in seen:
                        prefix_idx[p3].append(i)
                        seen.add(p3)

        self.entries = entries
        self.prefix_idx = dict(prefix_idx)
        self.stats = dict(stats)
        self.total = len(entries)
        self.ready = True

        elapsed = time.time() - t0
        print('  Index ready: %d entries, %d prefixes (%.1fs)'
              % (self.total, len(self.prefix_idx), elapsed), flush=True)

    def search(self, query, limit=20):
        """Search entries, return list of result dicts."""
        if not self.ready:
            return []

        qn = normalize(query.strip())
        if not qn:
            return []

        words = qn.split()
        if not words:
            return []

        # Gather candidate indices from prefix index
        candidates = set()
        for w in words:
            p3 = w[:3] if len(w) >= 3 else w[:2] if len(w) >= 2 else w
            if p3 in self.prefix_idx:
                candidates.update(self.prefix_idx[p3])
            p2 = w[:2]
            if len(p2) >= 2 and p2 in self.prefix_idx:
                candidates.update(self.prefix_idx[p2])

        if not candidates:
            return []

        # Score candidates
        scored = []
        for idx in candidates:
            slug, title, norm, disc = self.entries[idx]
            score = 0
            matched_words = 0
            for w in words:
                if w in norm:
                    score += 10
                    matched_words += 1
            if matched_words == 0:
                continue
            if norm == qn:
                score += 50
            elif norm.startswith(qn):
                score += 20
            # Prefer shorter titles (more specific matches)
            # e.g. "Napoleon Ier" over "Napoleon Alexandre Berthier"
            length_penalty = len(norm) / 10.0
            scored.append((score - length_penalty, idx))

        scored.sort(key=lambda x: -x[0])

        return [{
            'id': self.entries[i][0],
            't': self.entries[i][1],
            'disc': self.entries[i][3],
        } for _, i in scored[:limit]]


# Global instances
ENGINE = SearchEngine()
CAT_LABELS = {}
CAT_ICONS = {}


# ══════════════════════════════════════════════════════
#  HTTP Handler
# ══════════════════════════════════════════════════════

class Handler(http.server.SimpleHTTPRequestHandler):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_DIR, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/search':
            self._api_search(parsed.query)
        elif parsed.path == '/api/stats':
            self._api_stats()
        elif parsed.path == '/api/random':
            self._api_random(parsed.query)
        else:
            super().do_GET()

    def _json_response(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def _api_search(self, qs):
        params = urllib.parse.parse_qs(qs)
        q = params.get('q', [''])[0]
        limit = min(int(params.get('limit', ['20'])[0]), 100)

        results = ENGINE.search(q, limit)
        # Enrich with category labels and icons
        for r in results:
            r['cat'] = CAT_LABELS.get(r['disc'], '')
            r['icon'] = CAT_ICONS.get(r['disc'], '')
        self._json_response(results)

    def _api_stats(self):
        cat_stats = {}
        for disc, count in ENGINE.stats.items():
            cat_stats[disc] = {
                'count': count,
                'label': CAT_LABELS.get(disc, disc),
            }
        self._json_response({
            'total': ENGINE.total,
            'ready': ENGINE.ready,
            'source': ENGINE.source,
            'categories': cat_stats,
        })

    def _api_random(self, qs):
        params = urllib.parse.parse_qs(qs)
        n = min(int(params.get('n', ['1'])[0]), 20)
        if not ENGINE.ready or not ENGINE.entries:
            self._json_response([])
            return
        picks = random.sample(ENGINE.entries, min(n, len(ENGINE.entries)))
        results = [{
            'id': e[0],
            't': e[1],
            'disc': e[3],
            'cat': CAT_LABELS.get(e[3], ''),
            'icon': CAT_ICONS.get(e[3], ''),
        } for e in picks]
        self._json_response(results)

    def log_message(self, format, *args):
        # Only log API requests, suppress static file noise
        msg = args[0] if args else ''
        if '/api/' in str(msg):
            super().log_message(format, *args)


# ══════════════════════════════════════════════════════
#  Main
# ══════════════════════════════════════════════════════

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Curiosità dev server with search')
    parser.add_argument('--port', '-p', type=int, default=3001)
    args = parser.parse_args()

    global CAT_LABELS, CAT_ICONS

    print('', flush=True)
    print('=' * 50, flush=True)
    print('  Curiosità Dev Server', flush=True)
    print('=' * 50, flush=True)

    # Load category metadata
    if os.path.exists(CATEGORIES_PATH):
        with open(CATEGORIES_PATH, 'r', encoding='utf-8') as f:
            raw = json.load(f)
        tree = raw.get('tree', raw)
        for key, cat in tree.items():
            CAT_LABELS[key] = cat.get('label', key.title())
            CAT_ICONS[key] = cat.get('icon', '')

    # Build search index
    loaded = False
    if os.path.exists(INDEX_PATH):
        loaded = ENGINE.load_from_json(INDEX_PATH)
    if not loaded:
        ENGINE.scan_filenames(CONTENT_DIR)

    # Start threaded server
    server = http.server.ThreadingHTTPServer(('', args.port), Handler)

    print('', flush=True)
    print('  http://localhost:%d' % args.port, flush=True)
    print('  %s articles indexed (source: %s)' % (
        '{:,}'.format(ENGINE.total).replace(',', ' '), ENGINE.source), flush=True)
    print('  API: /api/search?q=xxx  /api/stats', flush=True)
    print('', flush=True)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nStopping.', flush=True)
        server.shutdown()


if __name__ == '__main__':
    main()
