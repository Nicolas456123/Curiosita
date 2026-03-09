#!/usr/bin/env python3
"""
batch-import.py — Batch import archived articles from Wikipedia ZIM.

Opens the ZIM once, then for each archived article:
1. Tries to find a matching Wikipedia article by title
2. If found, imports it using wiki-import functions
3. If not found, logs it as failed

Usage:
    python tools/batch-import.py --zim wikipedia_fr_all_maxi_2026-02.zim [--limit N] [--start N]
"""

import json
import os
import sys
import re
import io
import time

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
ARCHIVE_DIR = os.path.join(PROJECT_DIR, 'archives', 'content')
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')

# Add tools/ to path so we can import wiki-import functions
sys.path.insert(0, SCRIPT_DIR)

# Map old discipline slugs to new Wikipedia categories
DISC_MAP = {
    # Sciences
    'maths': 'sciences', 'physique': 'sciences', 'chimie': 'sciences',
    'biologie': 'sciences', 'astronomie': 'sciences', 'terre': 'sciences',
    'ecologie': 'sciences', 'environnement': 'sciences',
    'neurosciences': 'sciences', 'botanique-zoologie': 'sciences',
    'statistiques': 'sciences', 'logique': 'sciences',
    # Sciences humaines -> sciences (as per Wikipedia FR)
    'histoire': 'sciences', 'geographie': 'sciences', 'philosophie': 'sciences',
    'psychologie': 'sciences', 'sociologie': 'sciences', 'anthropologie': 'sciences',
    'economie': 'sciences', 'linguistique': 'sciences',
    # Arts
    'arts': 'arts', 'musique': 'arts', 'cinema': 'arts', 'spectacle': 'arts',
    'design': 'arts', 'histoire-art': 'arts', 'artisanat': 'arts',
    'litterature-fr': 'arts', 'litterature-monde': 'arts', 'langues': 'arts',
    'mythologie': 'arts',
    # Société
    'droit': 'societe', 'sciences-po': 'societe', 'civique': 'societe',
    'relations-internationales': 'societe', 'communication': 'societe',
    'sante': 'societe', 'rhetorique': 'societe', 'cuisine': 'societe',
    # Technologies
    'informatique': 'technologies', 'python': 'technologies',
    'ingenierie': 'technologies', 'agriculture': 'technologies',
    'gestion': 'technologies',
}


def collect_articles():
    """Scan archives and collect article info."""
    articles = []
    for root, dirs, files in os.walk(ARCHIVE_DIR):
        dirs[:] = [d for d in dirs if not d.startswith('_')]
        for f in files:
            if f.startswith('_') or not f.endswith('.json'):
                continue
            fpath = os.path.join(root, f)
            try:
                with open(fpath, 'r', encoding='utf-8') as fp:
                    data = json.load(fp)
                t = data.get('type', '')
                title = data.get('title', '')
                slug = f[:-5]
                if t == 'lesson' and slug != 'index':
                    rel = os.path.relpath(root, ARCHIVE_DIR)
                    old_disc = rel.split(os.sep)[0] if rel != '.' else ''
                    new_disc = DISC_MAP.get(old_disc, 'sciences')
                    articles.append({
                        'title': title,
                        'slug': slug,
                        'old_disc': old_disc,
                        'new_disc': new_disc,
                    })
            except Exception:
                pass
    return sorted(articles, key=lambda a: a['title'])


def try_find_article(archive, title):
    """Try to find an article in the ZIM by its title.
    Returns (html, path) or (None, None) if not found."""
    candidates = [
        title,
        title.replace(' ', '_'),
        'A/' + title,
        'A/' + title.replace(' ', '_'),
    ]
    for path in candidates:
        if archive.has_entry_by_path(path):
            entry = archive.get_entry_by_path(path)
            while entry.is_redirect:
                entry = entry.get_redirect_entry()
            item = entry.get_item()
            if 'text/html' in item.mimetype:
                html = bytes(item.content).decode('utf-8')
                return html, entry.path

    # Try by title search
    if archive.has_entry_by_title(title):
        entry = archive.get_entry_by_title(title)
        while entry.is_redirect:
            entry = entry.get_redirect_entry()
        item = entry.get_item()
        if 'text/html' in item.mimetype:
            html = bytes(item.content).decode('utf-8')
            return html, entry.path

    return None, None


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Batch import archived articles from ZIM')
    parser.add_argument('--zim', '-z', required=True, help='Path to Wikipedia ZIM file')
    parser.add_argument('--start', type=int, default=0, help='Start from article N (skip first N)')
    parser.add_argument('--limit', type=int, default=0, help='Max articles to import (0=all)')
    args = parser.parse_args()

    # Import wiki-import functions
    # We import the module dynamically to reuse its functions
    import importlib.util
    spec = importlib.util.spec_from_file_location('wiki_import', os.path.join(SCRIPT_DIR, 'wiki-import.py'))
    wi = importlib.util.module_from_spec(spec)
    # Prevent wiki-import from running main()
    sys.modules['wiki_import'] = wi
    spec.loader.exec_module(wi)

    articles = collect_articles()
    total = len(articles)

    # Open ZIM once
    print('Opening ZIM file...')
    archive = wi.open_zim(args.zim)
    print('  %d articles in archive' % archive.article_count)

    # Load disciplines once
    disciplines = wi.load_disciplines()

    # Check existing
    existing = set()
    for f in os.listdir(CONTENT_DIR):
        if f.endswith('.json') and not f.startswith('_'):
            existing.add(f[:-5])

    to_import = [a for a in articles if a['slug'] not in existing]
    if args.start > 0:
        to_import = to_import[args.start:]
    if args.limit > 0:
        to_import = to_import[:args.limit]

    already = len(existing)
    print()
    print('=' * 60)
    print('  Batch Import: %d articles in archives' % total)
    print('  Already imported: %d' % already)
    print('  To import: %d' % len(to_import))
    print('=' * 60)
    print()

    success = 0
    failed = 0
    failed_list = []
    t0 = time.time()

    for i, article in enumerate(to_import):
        num = i + 1
        pct = int(num / len(to_import) * 100)
        elapsed = time.time() - t0
        rate = num / elapsed if elapsed > 0 else 0
        eta = int((len(to_import) - num) / rate) if rate > 0 else 0
        eta_str = '%dm%02ds' % (eta // 60, eta % 60) if num > 1 else '...'

        print('[%d/%d %d%% ETA %s] %s ...' % (num, len(to_import), pct, eta_str, article['title']),
              end=' ', flush=True)

        try:
            # 1. Find article in ZIM
            raw_html, article_path = try_find_article(archive, article['title'])
            if raw_html is None:
                failed += 1
                failed_list.append((article['title'], article['slug'], 'Not found in ZIM'))
                print('NOT FOUND')
                continue

            # 2. Extract summary
            summary = wi.extract_summary_from_html(raw_html)

            # 3. Clean HTML
            clean_html, raw_categories = wi.clean_wikipedia_html(raw_html, keep_images=False)

            # 4. Split sections
            sections = wi.split_into_sections(clean_html)
            if len(sections) == 0:
                failed += 1
                failed_list.append((article['title'], article['slug'], 'No sections found'))
                print('NO SECTIONS')
                continue

            # 5. Filter categories
            categories = wi.filter_categories(raw_categories)

            # 6. Build output JSON
            output = wi.build_output_json(
                title=article['title'],
                sections=sections,
                categories=categories,
                summary=summary,
                discipline=article['new_disc'],
                disciplines_data=disciplines,
            )

            # 7. Write file
            out_path = os.path.join(CONTENT_DIR, article['slug'] + '.json')
            with open(out_path, 'w', encoding='utf-8') as f:
                json.dump(output, f, ensure_ascii=False, indent=2)

            success += 1
            print('OK (%d sections)' % len(sections))

        except Exception as e:
            failed += 1
            failed_list.append((article['title'], article['slug'], str(e)[:100]))
            print('ERROR: %s' % str(e)[:60])

    # Rebuild index once at end
    print()
    print('Rebuilding search index...')
    import subprocess
    build_index = os.path.join(SCRIPT_DIR, 'build-index.py')
    subprocess.run([sys.executable, build_index], cwd=PROJECT_DIR)

    elapsed = time.time() - t0
    print()
    print('=' * 60)
    print('  BATCH IMPORT COMPLETE (%.0fs)' % elapsed)
    print('  Success: %d' % success)
    print('  Failed:  %d' % failed)
    content_count = len([f for f in os.listdir(CONTENT_DIR) if f.endswith('.json') and not f.startswith('_')])
    print('  Total in content/: %d' % content_count)
    print('=' * 60)

    if failed_list:
        print('\n  Failed articles:')
        for title, slug, reason in failed_list:
            print('    - [%s] %s: %s' % (slug, title, reason))

        # Save failed list to file
        failed_path = os.path.join(PROJECT_DIR, 'tools', 'batch-failed.txt')
        with open(failed_path, 'w', encoding='utf-8') as f:
            for title, slug, reason in failed_list:
                f.write('%s\t%s\t%s\n' % (slug, title, reason))
        print('\n  Failed list saved to: %s' % failed_path)


if __name__ == '__main__':
    main()
