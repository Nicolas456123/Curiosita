#!/usr/bin/env python3
"""
categorize.py — Auto-categorize articles using Wikipedia portail links.

Reads the ZIM file to extract portail names from raw HTML, then maps them
to Curiosità categories using _portail-map.json. Updates the 'discipline'
and 'portails' fields in existing article JSON files.

Usage:
    python tools/categorize.py --zim wikipedia_fr_all_maxi_2026-02.zim
    python tools/categorize.py --zim wiki.zim --limit 1000   # test
    python tools/categorize.py --zim wiki.zim --dry-run       # preview only
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


def main():
    parser = argparse.ArgumentParser(description='Auto-categorize articles using ZIM portail data')
    parser.add_argument('--zim', '-z', required=True, help='Path to Wikipedia ZIM file')
    parser.add_argument('--limit', type=int, default=0, help='Max articles to process (0=all)')
    parser.add_argument('--dry-run', action='store_true', help='Preview changes without writing')
    args = parser.parse_args()

    # Load portail map
    pmap = wi.load_portail_map()
    if not pmap:
        print('ERROR: _portail-map.json not found')
        sys.exit(1)
    print('Loaded portail map: %d categories' % (len(pmap) - 1))  # -1 for _meta

    # Build set of existing article slugs → file paths
    print('Scanning existing articles...')
    article_files = {}
    for fname in os.listdir(CONTENT_DIR):
        if fname.endswith('.json') and not fname.startswith('_'):
            article_files[fname[:-5]] = os.path.join(CONTENT_DIR, fname)
    print('  Found %d article files' % len(article_files))

    # Open ZIM
    print('Opening ZIM file...')
    archive = wi.open_zim(args.zim)
    print('  %d entries, %d articles' % (archive.entry_count, archive.article_count))

    # Build title → slug lookup for matching ZIM entries to JSON files
    # We iterate through the ZIM and try to match each entry to an existing JSON file
    print('\nStarting categorization...')
    print('=' * 60)

    updated = 0
    skipped = 0
    no_match = 0
    no_portails = 0
    unchanged = 0
    t0 = time.time()
    last_report = t0
    processed_slugs = set()

    for idx in range(archive.entry_count):
        try:
            entry = archive._get_entry_by_id(idx)
        except Exception:
            continue

        if entry.is_redirect:
            continue

        try:
            item = entry.get_item()
        except Exception:
            continue

        if 'text/html' not in item.mimetype:
            continue

        title = entry.title
        if not title:
            continue

        # Skip namespace pages
        if any(title.startswith(ns) for ns in [
            'Wikipédia:', 'Portail:', 'Projet:', 'Catégorie:',
            'Aide:', 'Modèle:', 'Fichier:', 'Module:',
            'Discussion', 'Utilisateur:', 'Spécial:', 'MediaWiki:'
        ]):
            continue

        slug = slugify(title)
        if not slug or slug in processed_slugs:
            continue

        # Check if we have this article
        if slug not in article_files:
            no_match += 1
            continue

        processed_slugs.add(slug)

        # Read raw HTML and extract portails
        try:
            html = bytes(item.content).decode('utf-8')
        except Exception:
            skipped += 1
            continue

        portails = wi.extract_portails_from_html(html)

        if not portails:
            no_portails += 1
            continue

        # Auto-categorize
        category, matched = wi.auto_categorize(portails, pmap)

        # Read existing JSON, check if update needed
        fpath = article_files[slug]
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                data = json.load(f)
        except Exception:
            skipped += 1
            continue

        old_disc = data.get('discipline', '')
        old_portails = data.get('portails', [])

        if old_disc == category and old_portails == portails:
            unchanged += 1
            continue

        # Update
        data['discipline'] = category
        data['portails'] = portails
        # Update domain label from category metadata
        disciplines = wi.load_disciplines()
        disc_meta = disciplines.get(category, {})
        data['domain'] = disc_meta.get('label', category.capitalize())
        data['accentHero'] = disc_meta.get('accentHero', data.get('accentHero', ''))

        if not args.dry_run:
            try:
                with open(fpath, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
                updated += 1
            except Exception:
                skipped += 1
                continue
        else:
            updated += 1

        # Check limit
        if args.limit > 0 and updated >= args.limit:
            print('\n  Limit reached (%d)' % args.limit)
            break

        # Progress report
        now = time.time()
        if now - last_report >= 10:
            elapsed = now - t0
            rate = (updated + unchanged + no_portails) / elapsed if elapsed > 0 else 0
            print('  %d updated | %d unchanged | %d no-portails | %d no-match | %.0f/s | %s'
                  % (updated, unchanged, no_portails, no_match, rate,
                     '%dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60)),
                  flush=True)
            last_report = now

    elapsed = time.time() - t0
    prefix = '[DRY RUN] ' if args.dry_run else ''
    print()
    print('=' * 60)
    print('  %sCATEGORIZATION COMPLETE' % prefix)
    print('  Time:        %dm%02ds' % (int(elapsed) // 60, int(elapsed) % 60))
    print('  Updated:     %d' % updated)
    print('  Unchanged:   %d' % unchanged)
    print('  No portails: %d' % no_portails)
    print('  No match:    %d (ZIM entry without JSON file)' % no_match)
    print('  Skipped:     %d (errors)' % skipped)
    print('=' * 60)

    # Rebuild index after update
    if not args.dry_run and updated > 0:
        print('\nRebuilding search index...')
        import subprocess
        build_index = os.path.join(SCRIPT_DIR, 'build-index.py')
        subprocess.run([sys.executable, build_index], cwd=PROJECT_DIR)


if __name__ == '__main__':
    main()
