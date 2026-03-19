#!/usr/bin/env python3
"""
Restructure assets/content/{discipline}.json
→ assets/content/{theme}/{discipline}/index.json
→ assets/content/{theme}/{discipline}/{hub}/index.json
→ assets/content/{theme}/{discipline}/{hub}/{page}.json

Each output file contains the page data + discipline-level metadata (colors).
"""
import json
import os
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_DIR = os.path.join(BASE, 'assets', 'content')

# Theme → list of discipline slugs
THEME_MAP = {
    'sciences-exactes':  ['maths', 'informatique', 'physique', 'chimie',
                          'statistiques', 'logique', 'python'],
    'sciences-nature':   ['biologie', 'terre', 'astronomie', 'ecologie',
                          'environnement', 'agriculture', 'botanique-zoologie'],
    'sciences-humaines': ['histoire', 'economie', 'psychologie', 'sociologie',
                          'geographie', 'anthropologie', 'relations-internationales',
                          'communication', 'neurosciences'],
    'lettres-langues':   ['philosophie', 'langues', 'linguistique',
                          'litterature-fr', 'litterature-monde', 'rhetorique', 'mythologie'],
    'arts-culture':      ['arts', 'musique', 'cinema', 'spectacle', 'design', 'histoire-art'],
    'droit-politique':   ['droit', 'sciences-po', 'civique'],
    'savoir-faire':      ['artisanat', 'cuisine', 'sante', 'gestion', 'ingenierie'],
}

def sanitize(obj):
    """Recursively sanitize strings to remove surrogate chars."""
    if isinstance(obj, str):
        return obj.encode('utf-8', errors='replace').decode('utf-8')
    if isinstance(obj, dict):
        return {k: sanitize(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [sanitize(i) for i in obj]
    return obj

def write_json(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(sanitize(data), f, ensure_ascii=False, indent=2)

def restructure_discipline(theme, disc_slug):
    src = os.path.join(CONTENT_DIR, f'{disc_slug}.json')
    if not os.path.exists(src):
        print(f'  [SKIP] {disc_slug}.json not found')
        return 0

    try:
        with open(src, encoding='utf-8') as f:
            data = json.load(f)
    except UnicodeDecodeError:
        with open(src, encoding='latin-1') as f:
            data = json.load(f)

    # Metadata to carry into each file
    meta = {
        'disc':       data.get('disc', disc_slug),
        'label':      data.get('label', ''),
        'theme':      theme,
        'accent':     data.get('accent', ''),
        'accent2':    data.get('accent2', ''),
        'accentDim':  data.get('accentDim', ''),
        'accentHero': data.get('accentHero', ''),
    }

    pages = data.get('pages', {})
    dest_base = os.path.join(CONTENT_DIR, theme, disc_slug)
    count = 0

    for key, page in pages.items():
        parts = key.split('/')

        if key == 'index' or len(parts) == 1 and parts[0] == 'index':
            # Discipline index page
            dest = os.path.join(dest_base, 'index.json')
        elif len(parts) == 1:
            # Hub page: {hub}
            hub = parts[0]
            dest = os.path.join(dest_base, hub, 'index.json')
        elif len(parts) == 2:
            # Article page: {hub}/{page}
            hub, page_slug = parts
            dest = os.path.join(dest_base, hub, f'{page_slug}.json')
        else:
            print(f'  [WARN] Unexpected key depth: {key}')
            continue

        payload = {**meta, **page}
        write_json(dest, payload)
        count += 1

    print(f'  {disc_slug}: {count} files written → {os.path.relpath(dest_base, BASE)}')
    return count

def main():
    total = 0
    for theme, disciplines in THEME_MAP.items():
        print(f'\n=== {theme} ===')
        for disc in disciplines:
            total += restructure_discipline(theme, disc)

    # Also handle _themes.json — split into per-theme files
    themes_src = os.path.join(CONTENT_DIR, '_themes.json')
    if os.path.exists(themes_src):
        with open(themes_src, encoding='utf-8') as f:
            themes_data = json.load(f)
        pages = themes_data.get('pages', {})
        for theme_key, page in pages.items():
            dest = os.path.join(CONTENT_DIR, theme_key, '_index.json')
            write_json(dest, page)
            total += 1
        print(f'\n_themes.json: {len(pages)} theme index files written')

    print(f'\nTotal files created: {total}')

if __name__ == '__main__':
    main()
