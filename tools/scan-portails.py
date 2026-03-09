#!/usr/bin/env python3
"""
scan-portails.py — Extract ALL unique portails from the ZIM and their frequencies.
Outputs a JSON file with portail → count mapping.
"""

import json, os, sys, re, io, time
from collections import Counter

if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)

def extract_portails(html):
    """Extract portail names from Wikipedia HTML."""
    portails = []
    for m in re.finditer(r'portail-texte["\s>]*>([^<]+)', html):
        text = m.group(1).strip()
        text = re.sub(r'^Portail\s+(de |du |des |de la |de l[\'\u2019])', '', text)
        text = text.strip()
        if text and len(text) > 1:
            portails.append(text)
    return portails

def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--zim', '-z', required=True)
    parser.add_argument('--limit', type=int, default=0)
    args = parser.parse_args()

    from libzim.reader import Archive
    archive = Archive(args.zim)
    print('ZIM: %d entries, %d articles' % (archive.entry_count, archive.article_count))

    portail_counter = Counter()
    articles_with = 0
    articles_total = 0
    t0 = time.time()
    last_report = t0

    for idx in range(archive.entry_count):
        try:
            entry = archive._get_entry_by_id(idx)
        except: continue
        if entry.is_redirect: continue
        try:
            item = entry.get_item()
        except: continue
        if 'text/html' not in item.mimetype: continue

        title = entry.title
        if not title: continue
        if any(title.startswith(ns) for ns in [
            'Wikipédia:', 'Portail:', 'Projet:', 'Catégorie:',
            'Aide:', 'Modèle:', 'Fichier:', 'Module:',
            'Discussion', 'Utilisateur:', 'Spécial:', 'MediaWiki:'
        ]): continue

        try:
            html = bytes(item.content).decode('utf-8')
        except: continue

        if len(html) < 3000: continue

        portails = extract_portails(html)
        if portails:
            articles_with += 1
            for p in portails:
                portail_counter[p] += 1

        articles_total += 1
        if args.limit and articles_total >= args.limit:
            break

        now = time.time()
        if now - last_report >= 15:
            elapsed = now - t0
            print('  %d articles scanned | %d with portails | %d unique portails | %.0f/s | %dm%02ds'
                  % (articles_total, articles_with, len(portail_counter),
                     articles_total/elapsed, int(elapsed)//60, int(elapsed)%60), flush=True)
            last_report = now

    elapsed = time.time() - t0
    print()
    print('SCAN COMPLETE: %d articles, %d with portails, %d unique portails (%.0fm%02ds)'
          % (articles_total, articles_with, len(portail_counter), elapsed//60, elapsed%60))

    # Save full results
    out = os.path.join(PROJECT_DIR, 'tools', '_all-portails.json')
    data = {
        '_stats': {
            'articles_scanned': articles_total,
            'articles_with_portails': articles_with,
            'unique_portails': len(portail_counter),
        },
        'portails': dict(portail_counter.most_common())
    }
    with open(out, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print('Saved to %s' % out)

    # Print top 100
    print('\nTop 100 portails:')
    for name, count in portail_counter.most_common(100):
        print('  %6d  %s' % (count, name))

if __name__ == '__main__':
    main()
