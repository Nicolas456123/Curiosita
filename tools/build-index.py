#!/usr/bin/env python3
"""
build-index.py — Rebuild courses-index.json from content files.

Optimized for 2M+ articles:
- Parallel file reading with multiprocessing
- Minimal fields (id, title, discipline, truncated description)
- Streaming JSON output
- Progress reporting

Usage:
    python tools/build-index.py
    python tools/build-index.py --workers 24
"""

import json
import os
import sys
import time
import argparse
import re

# Fix Windows console encoding
if sys.platform == 'win32':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')
INDEX_PATH = os.path.join(PROJECT_DIR, 'assets', 'courses-index.json')
CATEGORIES_PATH = os.path.join(CONTENT_DIR, '_categories.json')


def load_disciplines():
    """Load category metadata from _categories.json."""
    if not os.path.exists(CATEGORIES_PATH):
        return {}
    with open(CATEGORIES_PATH, 'r', encoding='utf-8') as f:
        raw = json.load(f)
    return raw.get('tree', raw)


# ── Worker for parallel reading ──
_content_dir = None
_disc_labels = None

def _worker_init(content_dir, disc_labels):
    global _content_dir, _disc_labels
    _content_dir = content_dir
    _disc_labels = disc_labels

def _read_entry(fname):
    """Read a single file and extract minimal index data."""
    slug = fname[:-5]
    fpath = os.path.join(_content_dir, fname)
    try:
        # Fast partial read: extract title + discipline from first 1KB
        with open(fpath, 'r', encoding='utf-8') as f:
            head = f.read(2000)

        # Quick regex extraction (faster than full JSON parse for large files)
        title = slug
        desc = ''
        disc_key = ''
        tp = 'lesson'

        m = re.search(r'"title"\s*:\s*"((?:[^"\\]|\\.)*)"', head)
        if m:
            title = m.group(1).replace('\\"', '"').replace('\\\\', '\\')

        m = re.search(r'"description"\s*:\s*"((?:[^"\\]|\\.)*)"', head)
        if m:
            desc = m.group(1).replace('\\"', '"').replace('\\\\', '\\')
            if len(desc) > 120:
                desc = desc[:120]

        m = re.search(r'"discipline"\s*:\s*"((?:[^"\\]|\\.)*)"', head)
        if m:
            disc_key = m.group(1)

        m = re.search(r'"type"\s*:\s*"((?:[^"\\]|\\.)*)"', head)
        if m:
            tp = m.group(1)

        cat_label = _disc_labels.get(disc_key, disc_key.capitalize() if disc_key else '')

        return (slug, title, desc, tp, disc_key, cat_label)
    except Exception:
        return None


def main():
    import multiprocessing as mp

    parser = argparse.ArgumentParser(description='Build search index')
    parser.add_argument('--workers', '-w', type=int, default=0,
                        help='Number of workers (default: cpu_count - 2)')
    args = parser.parse_args()

    num_workers = args.workers if args.workers > 0 else max(1, (os.cpu_count() or 4) - 2)

    print('Building search index (%d workers)...' % num_workers, flush=True)
    disciplines = load_disciplines()

    disc_labels = {}
    for key, meta in disciplines.items():
        disc_labels[key] = meta.get('label', key.capitalize())

    # Scan files
    print('  Scanning content directory...', flush=True)
    t0 = time.time()
    files = []
    for entry in os.scandir(CONTENT_DIR):
        if entry.name.endswith('.json') and not entry.name.startswith('_') and entry.is_file():
            files.append(entry.name)
    files.sort()
    print('  Found %d files (%.1fs)' % (len(files), time.time() - t0), flush=True)

    # Parallel read
    print('  Reading articles with %d workers...' % num_workers, flush=True)
    t0 = time.time()
    results = []
    count = 0
    errors = 0
    last_report = t0

    pool = mp.Pool(processes=num_workers, initializer=_worker_init,
                   initargs=(CONTENT_DIR, disc_labels))

    try:
        for result in pool.imap_unordered(_read_entry, files, chunksize=500):
            if result is not None:
                results.append(result)
                count += 1
            else:
                errors += 1

            now = time.time()
            if now - last_report >= 15:
                elapsed = now - t0
                total = count + errors
                rate = total / elapsed if elapsed > 0 else 0
                pct = total / len(files) * 100
                print('  [%.0f%%] %dk / %dk (%.0f/s, %d errors)'
                      % (pct, count // 1000, len(files) // 1000, rate, errors), flush=True)
                last_report = now
    finally:
        pool.close()
        pool.join()

    print('  Read complete: %d entries, %d errors (%.0fs)'
          % (count, errors, time.time() - t0), flush=True)

    # Sort
    print('  Sorting...', flush=True)
    results.sort(key=lambda r: r[0])

    # Write index (streaming)
    print('  Writing index...', flush=True)
    t0 = time.time()
    with open(INDEX_PATH, 'w', encoding='utf-8') as out:
        out.write('[\n')
        for i, (slug, title, desc, tp, disc_key, cat_label) in enumerate(results):
            entry = {
                'id': slug,
                't': title,
                'd': desc,
                'tp': tp,
                'disc': disc_key,
                'cat': cat_label,
            }
            if i > 0:
                out.write(',\n')
            json.dump(entry, out, ensure_ascii=False, separators=(',', ':'))
        out.write('\n]')

    size_mb = os.path.getsize(INDEX_PATH) / (1024 * 1024)
    print('  Written: %.1f MB (%.0fs)' % (size_mb, time.time() - t0), flush=True)
    print('Wrote %d entries to courses-index.json' % count, flush=True)


if __name__ == '__main__':
    main()
