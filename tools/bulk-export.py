#!/usr/bin/env python3
"""
bulk-export.py — Fast parallel export of Wikipedia articles from ZIM to Curiosità JSON.

Uses multiprocessing to fully utilize all CPU cores for HTML parsing.
Saves progress (last ZIM entry ID) so restarts skip already-scanned entries.

Usage:
    python tools/bulk-export.py --zim wiki.zim
    python tools/bulk-export.py --zim wiki.zim --workers 24
    python tools/bulk-export.py --zim wiki.zim --limit 5000
"""

import json
import os
import sys
import re
import io
import time
import unicodedata
import argparse

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')
PROGRESS_PATH = os.path.join(CONTENT_DIR, '_export-progress.json')

# ── Shared globals for workers ──
_wi = None
_disciplines = None
_portail_map = None


def _import_wiki_module():
    """Import wiki-import.py as a module without side effects."""
    import importlib.util
    wi_path = os.path.join(SCRIPT_DIR, 'wiki-import.py')
    spec = importlib.util.spec_from_file_location('_wi', wi_path)
    mod = importlib.util.module_from_spec(spec)
    _orig_platform = sys.platform
    sys.platform = 'skip_encoding_fix'
    try:
        spec.loader.exec_module(mod)
    finally:
        sys.platform = _orig_platform
    return mod


def slugify(text):
    """Convert a title to a URL-safe slug."""
    s = text.lower().strip()
    s = unicodedata.normalize('NFD', s)
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    s = re.sub(r'[^a-z0-9]+', '-', s)
    s = s.strip('-')
    if len(s) > 120:
        s = s[:120].rstrip('-')
    return s


# ── Worker functions ──

def worker_init(script_dir):
    """Initialize each worker process: load wiki module + data."""
    global _wi, _disciplines, _portail_map
    import importlib.util
    wi_path = os.path.join(script_dir, 'wiki-import.py')
    spec = importlib.util.spec_from_file_location('_wi_worker', wi_path)
    mod = importlib.util.module_from_spec(spec)
    _orig = sys.platform
    sys.platform = 'skip_encoding_fix'
    try:
        spec.loader.exec_module(mod)
    finally:
        sys.platform = _orig
    _wi = mod
    _disciplines = _wi.load_disciplines()
    _portail_map = _wi.load_portail_map()


def worker_process(args):
    """Process one article in a worker. Returns (status, slug)."""
    html, title, slug, out_path = args
    try:
        summary = _wi.extract_summary_from_html(html)
        portails = _wi.extract_portails_from_html(html)
        clean_html, raw_categories = _wi.clean_wikipedia_html(html, keep_images=False)
        sections = _wi.split_into_sections(clean_html)
        if len(sections) == 0:
            return ('empty', slug)
        categories = _wi.filter_categories(raw_categories)
        if _portail_map and portails:
            discipline, _ = _wi.auto_categorize(portails, _portail_map)
        else:
            discipline = 'sciences'
        output = _wi.build_output_json(
            title=title, sections=sections, categories=categories,
            summary=summary, discipline=discipline,
            disciplines_data=_disciplines, portails=portails,
        )
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(output, f, ensure_ascii=False, separators=(',', ':'))
        return ('ok', slug)
    except Exception:
        return ('fail', slug)


# ── Namespace filter ──
_SKIP_PREFIXES = (
    'Wikipédia:', 'Portail:', 'Projet:', 'Catégorie:',
    'Aide:', 'Modèle:', 'Fichier:', 'Module:',
    'Discussion', 'Utilisateur:', 'Spécial:', 'MediaWiki:',
)


def scan_existing(content_dir):
    """Fast scan of existing article slugs using os.scandir."""
    existing = set()
    if not os.path.isdir(content_dir):
        return existing
    t0 = time.time()
    count = 0
    for entry in os.scandir(content_dir):
        name = entry.name
        if name.endswith('.json') and not name.startswith('_'):
            existing.add(name[:-5])
            count += 1
            if count % 200000 == 0:
                print('  ... scanned %dk files (%.1fs)' % (count // 1000, time.time() - t0), flush=True)
    return existing


def load_progress():
    """Load progress file to resume from last ZIM entry ID."""
    if os.path.exists(PROGRESS_PATH):
        try:
            with open(PROGRESS_PATH, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {'last_entry_id': 0, 'exported': 0}


def save_progress(last_entry_id, exported):
    """Save progress for resume."""
    with open(PROGRESS_PATH, 'w', encoding='utf-8') as f:
        json.dump({'last_entry_id': last_entry_id, 'exported': exported}, f)


def main():
    import multiprocessing as mp

    parser = argparse.ArgumentParser(description='Fast parallel Wikipedia ZIM export')
    parser.add_argument('--zim', '-z', required=True, help='Path to Wikipedia ZIM file')
    parser.add_argument('--limit', type=int, default=0, help='Max NEW articles to export (0=all)')
    parser.add_argument('--min-size', type=int, default=5000,
                        help='Min HTML size in bytes (skip stubs, default 5000)')
    parser.add_argument('--workers', '-w', type=int, default=0,
                        help='Number of worker processes (default: cpu_count - 2)')
    parser.add_argument('--chunk', type=int, default=20,
                        help='Chunk size for pool.imap (default 20)')
    parser.add_argument('--restart', action='store_true',
                        help='Restart from entry 0 (ignore saved progress)')
    parser.add_argument('--start-entry', type=int, default=-1,
                        help='Start from specific ZIM entry ID (overrides progress file)')
    args = parser.parse_args()

    num_workers = args.workers if args.workers > 0 else max(1, (os.cpu_count() or 4) - 2)

    # Open ZIM
    print('Opening ZIM file...', flush=True)
    wi_main = _import_wiki_module()
    archive = wi_main.open_zim(args.zim)
    entry_count = archive.entry_count
    article_count = archive.article_count
    print('  %d entries, %d articles' % (entry_count, article_count), flush=True)
    print('  Workers: %d' % num_workers, flush=True)

    # Scan existing files
    print('  Scanning existing articles...', flush=True)
    existing = scan_existing(CONTENT_DIR)
    print('  Found %d existing articles on disk' % len(existing), flush=True)

    # Load progress for resume
    progress = load_progress()
    if args.start_entry >= 0:
        start_entry = args.start_entry
    elif args.restart:
        start_entry = 0
    else:
        start_entry = progress.get('last_entry_id', 0)
    if start_entry > 0:
        print('  Resuming from ZIM entry %d (%.1f%% of entries)' %
              (start_entry, start_entry / entry_count * 100), flush=True)

    os.makedirs(CONTENT_DIR, exist_ok=True)

    print(flush=True)
    print('=' * 60, flush=True)
    print('  Starting parallel bulk export (%d workers)...' % num_workers, flush=True)
    print('=' * 60, flush=True)
    print(flush=True)

    # ── Main loop: scan ZIM → batch → process ──
    BATCH_SIZE = 2000
    success = 0
    failed = 0
    empty = 0
    t0 = time.time()
    last_report = t0
    last_save = t0
    zim_idx = start_entry
    done = False

    pool = mp.Pool(processes=num_workers, initializer=worker_init, initargs=(SCRIPT_DIR,))

    try:
        while not done and zim_idx < entry_count:
            # ── Collect a batch from ZIM ──
            batch = []
            scan_start = time.time()
            scanned_in_batch = 0

            while len(batch) < BATCH_SIZE and zim_idx < entry_count:
                # Progress reporting every 10s during scan
                if scanned_in_batch % 10000 == 0 and scanned_in_batch > 0:
                    now = time.time()
                    if now - last_report >= 10:
                        pct = zim_idx / entry_count * 100
                        scan_rate = scanned_in_batch / (now - scan_start) if (now - scan_start) > 0 else 0
                        print('  [scan %.0f%%] entry %dk/%dk — %d in batch — %.0fk entries/s'
                              % (pct, zim_idx // 1000, entry_count // 1000,
                                 len(batch), scan_rate / 1000),
                              flush=True)
                        last_report = now

                try:
                    entry = archive._get_entry_by_id(zim_idx)
                except Exception:
                    zim_idx += 1
                    scanned_in_batch += 1
                    continue

                zim_idx += 1
                scanned_in_batch += 1

                if entry.is_redirect:
                    continue

                # Check title + slug BEFORE decompressing content (huge speedup)
                title = entry.title
                if not title or title.startswith(_SKIP_PREFIXES):
                    continue

                slug = slugify(title)
                if not slug or slug in existing:
                    continue

                # Only now decompress — this is expensive
                try:
                    item = entry.get_item()
                except Exception:
                    continue

                if 'text/html' not in item.mimetype:
                    continue

                try:
                    html = bytes(item.content).decode('utf-8')
                except Exception:
                    continue

                if len(html) < args.min_size:
                    continue

                out_path = os.path.join(CONTENT_DIR, slug + '.json')
                existing.add(slug)
                batch.append((html, title, slug, out_path))

                if args.limit > 0 and (success + len(batch)) >= args.limit:
                    done = True
                    break

            if not batch:
                if zim_idx >= entry_count:
                    done = True
                continue

            # ── Process batch in parallel ──
            for result in pool.imap_unordered(worker_process, batch, chunksize=min(args.chunk, len(batch))):
                status, slug = result
                if status == 'ok':
                    success += 1
                elif status == 'empty':
                    empty += 1
                else:
                    failed += 1

            # Progress report
            now = time.time()
            elapsed = now - t0
            rate = success / elapsed if elapsed > 0 else 0
            pct = zim_idx / entry_count * 100 if entry_count > 0 else 0
            print('  [%.0f%%] +%d new (%.0f/s) | %d total | %d empty | %d failed | %s'
                  % (pct, success, rate, len(existing), empty, failed,
                     '%dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60)),
                  flush=True)
            last_report = now

            # Save progress every 30 seconds
            if now - last_save >= 30:
                save_progress(zim_idx, len(existing))
                last_save = now

    except KeyboardInterrupt:
        print('\n  Interrupted! Saving progress...', flush=True)
        pool.terminate()
    finally:
        pool.close()
        pool.join()
        save_progress(zim_idx, len(existing))

    elapsed = time.time() - t0

    print(flush=True)
    print('=' * 60, flush=True)
    print('  BULK EXPORT COMPLETE', flush=True)
    print('  Time:      %dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60), flush=True)
    print('  Exported:  %d new articles' % success, flush=True)
    print('  Empty:     %d (no sections)' % empty, flush=True)
    print('  Failed:    %d' % failed, flush=True)
    print('  Total:     %d on disk' % len(existing), flush=True)
    print('  Rate:      %.1f articles/sec' % (success / elapsed if elapsed > 0 else 0), flush=True)
    print('  ZIM:       scanned to entry %d / %d (%.1f%%)'
          % (zim_idx, entry_count, zim_idx / entry_count * 100), flush=True)
    print('=' * 60, flush=True)

    # Rebuild search index
    if success > 0:
        print('\n  Rebuilding search index...', flush=True)
        import subprocess
        build_index = os.path.join(SCRIPT_DIR, 'build-index.py')
        subprocess.run([sys.executable, build_index], cwd=PROJECT_DIR)


if __name__ == '__main__':
    main()
