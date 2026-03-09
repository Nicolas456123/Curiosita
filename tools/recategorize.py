#!/usr/bin/env python3
"""
recategorize.py — Re-categorize articles using stored portails and the new _portail-map.json.

Unlike categorize.py (which requires a ZIM file), this script works entirely from
the existing JSON files. It re-runs auto_categorize() on each article's stored
'portails' field using the updated _portail-map.json.

Usage:
    python tools/recategorize.py
    python tools/recategorize.py --dry-run      # preview changes
    python tools/recategorize.py --limit 100    # test on 100 articles
"""

import json
import os
import sys
import io
import time
import argparse

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')

# Import wiki-import functions
def _import_wiki_module():
    import importlib.util
    wi_path = os.path.join(SCRIPT_DIR, 'wiki-import.py')
    spec = importlib.util.spec_from_file_location('_wi', wi_path)
    mod = importlib.util.module_from_spec(spec)
    _orig = sys.platform
    sys.platform = 'skip_encoding_fix'
    try:
        spec.loader.exec_module(mod)
    finally:
        sys.platform = _orig
    return mod

wi = _import_wiki_module()


def main():
    parser = argparse.ArgumentParser(description='Re-categorize articles from stored portails')
    parser.add_argument('--dry-run', action='store_true', help='Preview changes without writing')
    parser.add_argument('--limit', type=int, default=0, help='Max articles to process (0=all)')
    args = parser.parse_args()

    # Load portail map and disciplines
    pmap = wi.load_portail_map()
    if not pmap:
        print('ERROR: _portail-map.json not found')
        sys.exit(1)
    print('Loaded portail map: %d categories' % (len(pmap) - 1))

    disciplines = wi.load_disciplines()
    print('Loaded disciplines: %d categories' % len(disciplines))

    # List all article files
    print('Scanning articles...')
    article_files = []
    for fname in os.listdir(CONTENT_DIR):
        if fname.endswith('.json') and not fname.startswith('_'):
            article_files.append(fname)
    print('  Found %d article files' % len(article_files))

    print()
    print('=' * 60)
    print('  Starting re-categorization...')
    print('=' * 60)
    print()

    updated = 0
    unchanged = 0
    no_portails = 0
    errors = 0
    t0 = time.time()
    last_report = t0
    processed = 0

    for fname in article_files:
        fpath = os.path.join(CONTENT_DIR, fname)

        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except Exception:
            errors += 1
            continue

        portails = data.get('portails', [])
        if not portails:
            no_portails += 1
            processed += 1
            continue

        # Re-categorize with new portail map
        new_disc, matched = wi.auto_categorize(portails, pmap)
        old_disc = data.get('discipline', '')

        if old_disc == new_disc:
            unchanged += 1
            processed += 1
        else:
            # Update
            data['discipline'] = new_disc
            disc_meta = disciplines.get(new_disc, {})
            data['domain'] = disc_meta.get('label', new_disc.capitalize())
            data['accentHero'] = disc_meta.get('accentHero', data.get('accentHero', ''))

            if not args.dry_run:
                try:
                    with open(fpath, 'w', encoding='utf-8') as f:
                        json.dump(data, f, ensure_ascii=False, indent=2)
                except Exception:
                    errors += 1
                    continue

            updated += 1
            processed += 1

        # Check limit
        if args.limit > 0 and processed >= args.limit:
            print('  Limit reached (%d)' % args.limit)
            break

        # Progress report every 10 seconds
        now = time.time()
        if now - last_report >= 10:
            elapsed = now - t0
            rate = processed / elapsed if elapsed > 0 else 0
            pct = processed / len(article_files) * 100
            print('  [%.1f%%] %d updated | %d unchanged | %d no-portails | %d errors | %.0f/s | %s'
                  % (pct, updated, unchanged, no_portails, errors, rate,
                     '%dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60)),
                  flush=True)
            last_report = now

    elapsed = time.time() - t0
    prefix = '[DRY RUN] ' if args.dry_run else ''

    print()
    print('=' * 60)
    print('  %sRE-CATEGORIZATION COMPLETE' % prefix)
    print('  Time:        %dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60))
    print('  Updated:     %d' % updated)
    print('  Unchanged:   %d' % unchanged)
    print('  No portails: %d' % no_portails)
    print('  Errors:      %d' % errors)
    print('  Total:       %d / %d' % (processed, len(article_files)))
    print('=' * 60)

    # Rebuild index after update
    if not args.dry_run and updated > 0:
        print('\nRebuilding search index...')
        import subprocess
        build_index = os.path.join(SCRIPT_DIR, 'build-index.py')
        subprocess.run([sys.executable, build_index], cwd=PROJECT_DIR)


if __name__ == '__main__':
    main()
