#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
wiki-import.py — Import a Wikipedia FR article from a ZIM file into Curiosità format.

Usage:
    python tools/wiki-import.py --zim path/to/wikipedia.zim "Photosynthèse" -d biologie -s photosynthese
    python tools/wiki-import.py --zim wiki.zim "ADN" -d biologie --hub cellule -s adn
    python tools/wiki-import.py --zim wiki.zim "ADN" -d biologie -s adn --images
"""

import argparse
import io
import json
import os
import re
import sys
from html.parser import HTMLParser

# Fix Windows console encoding
if sys.platform == 'win32':
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

# ── Paths ──

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
CONTENT_DIR = os.path.join(PROJECT_DIR, 'assets', 'content')
CATEGORIES_PATH = os.path.join(CONTENT_DIR, '_categories.json')
IMAGES_DIR = os.path.join(PROJECT_DIR, 'assets', 'img', 'wiki')

# ── Constants ──

# Sections to skip (case-insensitive comparison)
SKIP_SECTIONS = {
    'notes et références', 'notes', 'références', 'voir aussi',
    'liens externes', 'bibliographie', 'articles connexes',
    'sources', 'annexes', 'notes et sources', 'références et notes',
    'pour approfondir', 'compléments', 'dans la fiction',
    'dans la culture populaire', 'dans les arts',
}

# Category prefixes to filter out
ADMIN_CAT_PREFIXES = (
    'Article', 'Portail:', 'Projet:', 'Wikipédia:',
    'Page utilisant', 'Page avec', 'Catégorie avec',
    'Page pointant', 'Maintenance', 'Admissibilité',
    'Recension temporaire', 'CS1', 'Bon article',
    'Article de qualité',
)


# ── ZIM Reading ──

def open_zim(zim_path):
    """Open a ZIM archive and return the Archive object."""
    from libzim.reader import Archive
    if not os.path.exists(zim_path):
        print('ERROR: ZIM file not found: %s' % zim_path)
        sys.exit(1)
    return Archive(zim_path)


def read_article_html(archive, title):
    """Read an article's HTML content from a ZIM archive.

    Tries several path patterns used by different ZIM builds.
    Returns (html_string, resolved_path) or raises KeyError.
    """
    # ZIM path patterns to try (varies by ZIM version)
    candidates = [
        title,                              # new namespace: direct title
        title.replace(' ', '_'),            # underscores
        'A/' + title,                       # old namespace A/
        'A/' + title.replace(' ', '_'),
    ]

    for path in candidates:
        if archive.has_entry_by_path(path):
            entry = archive.get_entry_by_path(path)
            # Follow redirects
            while entry.is_redirect:
                entry = entry.get_redirect_entry()
            item = entry.get_item()
            if 'text/html' in item.mimetype:
                html = bytes(item.content).decode('utf-8')
                return html, entry.path
            else:
                print('  WARNING: entry "%s" is not HTML (mimetype: %s)' % (path, item.mimetype))

    # Try by title instead of path
    if archive.has_entry_by_title(title):
        entry = archive.get_entry_by_title(title)
        while entry.is_redirect:
            entry = entry.get_redirect_entry()
        item = entry.get_item()
        if 'text/html' in item.mimetype:
            html = bytes(item.content).decode('utf-8')
            return html, entry.path

    raise KeyError('Article not found in ZIM: "%s"' % title)


def extract_image_from_zim(archive, img_path, article_path):
    """Extract an image from ZIM, trying various path resolutions.

    Returns (image_bytes, mimetype) or (None, None) if not found.
    """
    # Resolve relative path from article's directory
    if img_path.startswith('../') or img_path.startswith('./'):
        base_dir = '/'.join(article_path.split('/')[:-1])
        # Resolve relative
        parts = (base_dir + '/' + img_path).split('/')
        resolved = []
        for p in parts:
            if p == '..':
                if resolved:
                    resolved.pop()
            elif p != '.':
                resolved.append(p)
        img_path = '/'.join(resolved)

    # Remove leading /
    img_path = img_path.lstrip('/')

    # Try candidates
    candidates = [
        img_path,
        'I/' + img_path.split('/')[-1],  # old I/ namespace
        img_path.replace(' ', '_'),
    ]

    for path in candidates:
        if archive.has_entry_by_path(path):
            entry = archive.get_entry_by_path(path)
            while entry.is_redirect:
                entry = entry.get_redirect_entry()
            item = entry.get_item()
            return bytes(item.content), item.mimetype

    return None, None


# ── HTML Cleaning ──

class TagStripper(HTMLParser):
    """HTML parser that removes specific elements entirely."""

    def __init__(self, tags_to_remove, classes_to_remove=None):
        super().__init__(convert_charrefs=True)
        self.tags_to_remove = set(tags_to_remove)
        self.classes_to_remove = set(classes_to_remove or [])
        self.result = []
        self.skip_depth = 0
        self.skip_tag_stack = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        cls = attrs_dict.get('class', '')

        should_skip = False
        if tag in self.tags_to_remove:
            should_skip = True
        if cls:
            for c in self.classes_to_remove:
                if c in cls:
                    should_skip = True
                    break

        if should_skip or self.skip_depth > 0:
            # Never push void elements — they have no closing tag
            if not self._is_void(tag):
                self.skip_depth += 1
                self.skip_tag_stack.append(tag)
            return

        # Remove data-* and style attributes
        clean_attrs = []
        for name, value in attrs:
            if name.startswith('data-') or name in ('style', 'typeof', 'about',
                                                      'role', 'aria-label'):
                continue
            clean_attrs.append((name, value))

        attr_str = ''
        for name, value in clean_attrs:
            if value is None:
                attr_str += ' ' + name
            else:
                attr_str += ' %s="%s"' % (name, value.replace('"', '&quot;'))

        self.result.append('<%s%s>' % (tag, attr_str))

    def handle_endtag(self, tag):
        if self.skip_depth > 0:
            if self.skip_tag_stack and self.skip_tag_stack[-1] == tag:
                self.skip_tag_stack.pop()
                self.skip_depth -= 1
            return
        if not self._is_void(tag):
            self.result.append('</%s>' % tag)

    def handle_data(self, data):
        if self.skip_depth == 0:
            self.result.append(data)

    def handle_entityref(self, name):
        if self.skip_depth == 0:
            self.result.append('&%s;' % name)

    def handle_charref(self, name):
        if self.skip_depth == 0:
            self.result.append('&#%s;' % name)

    def _is_void(self, tag):
        return tag in ('br', 'hr', 'img', 'input', 'meta', 'link', 'col',
                       'area', 'base', 'embed', 'source', 'track', 'wbr')

    def get_result(self):
        return ''.join(self.result)


def extract_categories_from_html(html):
    """Extract categories from the catlinks div in Wikipedia HTML.

    Returns list of category name strings.
    """
    # Find the catlinks div
    match = re.search(r'<div\s+[^>]*id="catlinks"[^>]*>(.*?)</div>\s*$',
                      html, re.DOTALL)
    if not match:
        # Try alternate pattern
        match = re.search(r'class="catlinks[^"]*"[^>]*>(.*?)</div>',
                          html, re.DOTALL)
    if not match:
        return []

    catlinks_html = match.group(1)
    # Extract category names from links
    cats = re.findall(r'title="Catégorie:([^"]+)"', catlinks_html)
    if not cats:
        # Alternate pattern — text of links within the catlinks section
        cats = re.findall(r'>([^<]+)</a>', catlinks_html)

    return cats


def extract_portails_from_html(html):
    """Extract portail (portal) names from Wikipedia HTML.

    Portails appear near the bottom of articles in bandeau-portail divs.
    Returns list of normalized portail strings (e.g., 'physique', 'cinéma américain').
    """
    portails = []
    # Pattern 1: <span class="portail-texte">Portail de la physique</span>
    for m in re.finditer(r'portail-texte["\s>]*>([^<]+)', html):
        text = m.group(1).strip()
        # Normalize: remove "Portail de la/du/des/de l'" prefix
        text = re.sub(r'^Portail\s+(de |du |des |de la |de l[\'\u2019])', '', text)
        text = text.strip()
        if text and len(text) > 1:
            portails.append(text)
    # Pattern 2: data-portail or portal-bar alternate formats
    for m in re.finditer(r'title="Portail:([^"]+)"', html):
        text = m.group(1).replace('_', ' ').strip()
        if text and text not in portails:
            portails.append(text)
    return portails


def auto_categorize(portails, portail_map):
    """Determine the best category from portail names using _portail-map.json.

    Args:
        portails: list of portail strings extracted from article HTML
        portail_map: dict mapping category_key -> [keyword_list]

    Returns:
        (category_key, matched_portails) or ('sciences', []) as default
    """
    if not portails or not portail_map:
        return 'sciences', []

    scores = {}
    matches = {}
    for cat_key, keywords in portail_map.items():
        if cat_key == '_meta':
            continue
        scores[cat_key] = 0
        matches[cat_key] = []
        for portail in portails:
            portail_lower = portail.lower()
            for kw in keywords:
                if kw.lower() in portail_lower:
                    scores[cat_key] += 1
                    matches[cat_key].append(portail)
                    break  # Don't double-count same portail

    if not any(scores.values()):
        return 'sciences', []

    best = max(scores, key=scores.get)
    return best, matches[best]


def load_portail_map():
    """Load _portail-map.json for auto-categorization."""
    pmap_path = os.path.join(CONTENT_DIR, '_portail-map.json')
    if not os.path.exists(pmap_path):
        return {}
    with open(pmap_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def extract_summary_from_html(html):
    """Extract the first meaningful paragraph as a summary."""
    # Find first <p> with substantial text
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
    for p in paragraphs:
        # Strip HTML tags and clean entities
        text = re.sub(r'<[^>]+>', '', p).strip()
        text = text.replace('&nbsp;', ' ').replace('&#160;', ' ')
        text = re.sub(r'\s+', ' ', text)
        # Skip very short or empty paragraphs
        if len(text) > 60:
            # Truncate to ~200 chars on sentence boundary
            if len(text) > 200:
                # Try to cut at a period
                cut = text[:200].rfind('.')
                if cut > 100:
                    text = text[:cut + 1]
                else:
                    text = text[:197] + '...'
            return text
    return ''


def clean_wikipedia_html(html, keep_images=False):
    """Clean Wikipedia HTML for Curiosità use."""

    # Step 0: Extract categories BEFORE cleaning (they'll be removed)
    categories = extract_categories_from_html(html)

    # Step 0b: Unwrap headings from mw-heading divs BEFORE stripping.
    # Wikipedia wraps <h2> in <div class="mw-heading mw-heading2"><h2>...</h2></div>
    html = re.sub(
        r'<div\s+class="mw-heading\s+mw-heading[234]"[^>]*>\s*(<h[234][^>]*>.*?</h[234]>)\s*</div>',
        r'\1', html, flags=re.DOTALL
    )

    # Step 0c: Remove <body> wrapper if present (ZIM often includes full HTML page)
    body_match = re.search(r'<body[^>]*>(.*)</body>', html, re.DOTALL)
    if body_match:
        html = body_match.group(1)

    # Build list of tags to strip (these tags AND their content are removed)
    tags_to_remove = ['style', 'link', 'script', 'noscript', 'header', 'footer',
                      'nav', 'aside']
    if not keep_images:
        tags_to_remove.extend(['figure', 'img', 'picture', 'source'])

    # Step 1: Remove elements via parser
    stripper = TagStripper(
        tags_to_remove=tags_to_remove,
        classes_to_remove=[
            'reference', 'mw-editsection', 'toc', 'infobox',
            'bandeau-container', 'bandeau-section', 'bandeau-article',
            'metadata', 'navbox', 'catlinks', 'mw-empty-elt',
            'noprint', 'gallery', 'thumb', 'thumbinner',
            'mw-references-wrap', 'reflist', 'references',
            'wikitable', 'sidebar', 'plainlinks', 'sistersitebox',
            'mw-authority-control',
        ]
    )
    stripper.feed(html)
    html = stripper.get_result()

    # Step 2: Remove <sup> reference tags that may remain
    html = re.sub(r'<sup[^>]*class="[^"]*reference[^"]*"[^>]*>.*?</sup>', '', html, flags=re.DOTALL)
    html = re.sub(r'<sup>\[\d+\]</sup>', '', html)
    html = re.sub(r'<sup>\[réf\.\s*[^\]]*\]</sup>', '', html, flags=re.IGNORECASE)

    # Step 3: Strip links — keep text content, remove <a> tags
    # Internal wiki links (API format: /wiki/...)
    html = re.sub(r'<a\s+[^>]*href="/wiki/[^"]*"[^>]*>(.*?)</a>', r'\1', html, flags=re.DOTALL)
    # ZIM relative links (no /wiki/ prefix, no protocol)
    html = re.sub(r'<a\s+[^>]*href="(?!https?://|#)[^"]*"[^>]*>(.*?)</a>', r'\1', html, flags=re.DOTALL)
    # Anchor links (#section)
    html = re.sub(r'<a\s+[^>]*href="#[^"]*"[^>]*>(.*?)</a>', r'\1', html, flags=re.DOTALL)
    # External links — also strip (just keep text)
    html = re.sub(r'<a\s+[^>]*href="https?://[^"]*"[^>]*>(.*?)</a>', r'\1', html, flags=re.DOTALL)

    # Step 4: Remove empty elements
    html = re.sub(r'<p>\s*</p>', '', html)
    html = re.sub(r'<p\s+[^>]*>\s*</p>', '', html)
    html = re.sub(r'<div[^>]*>\s*</div>', '', html)

    # Step 5: Remove edit markers
    html = re.sub(r'\[modifier[^\]]*\]', '', html)

    # Step 6: Remove all remaining wrapper tags (content preserved)
    html = re.sub(r'<div[^>]*>', '', html)
    html = re.sub(r'</div>', '', html)
    html = re.sub(r'<main[^>]*>', '', html)
    html = re.sub(r'</main>', '', html)
    html = re.sub(r'<section[^>]*>', '', html)
    html = re.sub(r'</section>', '', html)
    # Remove standalone anchor tags with just an id (ZIM navigation markers)
    html = re.sub(r'<a\s+id="[^"]*"[^>]*>\s*</a>', '', html)

    # Step 7: Clean spans — keep content, remove wrapper
    html = re.sub(r'<span\s+id="[^"]*"[^>]*>\s*</span>', '', html)
    html = re.sub(r'<span\s+class="mw-[^"]*"[^>]*>(.*?)</span>', r'\1', html, flags=re.DOTALL)
    # Language spans: <span class="lang-grc" lang="grc">text</span> → text
    html = re.sub(r'<span\s+class="lang-[^"]*"[^>]*>(.*?)</span>', r'\1', html, flags=re.DOTALL)
    # nowrap spans
    html = re.sub(r'<span\s+class="nowrap"[^>]*>(.*?)</span>', r'\1', html, flags=re.DOTALL)
    # Any remaining spans with only class
    html = re.sub(r'<span\s+class="[^"]*"[^>]*>(.*?)</span>', r'\1', html, flags=re.DOTALL)
    html = re.sub(r'<span>\s*</span>', '', html)
    html = re.sub(r'<span[^>]*>\s*</span>', '', html)

    # Step 7b: Clean <abbr> — keep title attribute text if useful, otherwise keep content
    html = re.sub(r'<abbr[^>]*>(.*?)</abbr>', r'\1', html, flags=re.DOTALL)

    # Step 7c: Remove empty <sub> and consecutive empty sub tags
    html = re.sub(r'<sub>\s*</sub>', '', html)

    # Step 8: Strip id attributes from headings (we use our own section IDs)
    html = re.sub(r'(<h[234])\s+id="[^"]*"', r'\1', html)

    # Step 8b: Remove legacy HTML presentation attributes
    html = re.sub(r'\s+bgcolor="[^"]*"', '', html)
    html = re.sub(r'\s+align="[^"]*"', '', html)
    html = re.sub(r'\s+valign="[^"]*"', '', html)
    html = re.sub(r'\s+width="[^"]*"', '', html)
    html = re.sub(r'\s+height="[^"]*"', '', html)
    html = re.sub(r'\s+cellpadding="[^"]*"', '', html)
    html = re.sub(r'\s+cellspacing="[^"]*"', '', html)
    html = re.sub(r'\s+border="[^"]*"', '', html)
    html = re.sub(r'\s+colspan="[^"]*"', '', html)
    html = re.sub(r'\s+rowspan="[^"]*"', '', html)

    # Step 8c: Remove <dl>/<dd> wrappers (used for indentation in Wikipedia)
    html = re.sub(r'<dl>', '', html)
    html = re.sub(r'</dl>', '', html)
    html = re.sub(r'<dd>', '', html)
    html = re.sub(r'</dd>', '', html)
    html = re.sub(r'<dt>', '', html)
    html = re.sub(r'</dt>', '', html)

    # Step 8d: Remove remaining <table>/<tr>/<td> — convert to simple text
    # Tables in Wikipedia content (reaction formulas, data) don't render well
    # Keep the text content but remove the table structure
    html = re.sub(r'<table[^>]*>', '', html)
    html = re.sub(r'</table>', '', html)
    html = re.sub(r'<tbody[^>]*>', '', html)
    html = re.sub(r'</tbody>', '', html)
    html = re.sub(r'<thead[^>]*>', '', html)
    html = re.sub(r'</thead>', '', html)
    html = re.sub(r'<tr[^>]*>', '', html)
    html = re.sub(r'</tr>', '\n', html)
    html = re.sub(r'<td[^>]*>', ' ', html)
    html = re.sub(r'</td>', '', html)
    html = re.sub(r'<th[^>]*>', ' ', html)
    html = re.sub(r'</th>', '', html)

    # Step 9: Clean excessive whitespace
    html = re.sub(r'\n{3,}', '\n\n', html)
    html = re.sub(r'[ \t]+\n', '\n', html)

    return html.strip(), categories


# ── Image Processing ──

def find_image_refs(html):
    """Find all image src references in the HTML.

    Returns list of src attribute values.
    """
    return re.findall(r'<img[^>]+src="([^"]+)"', html)


def process_images(html, archive, article_path, slug):
    """Extract images from ZIM, save locally, and rewrite src paths.

    Returns (modified_html, num_images_saved).
    """
    img_refs = find_image_refs(html)
    if not img_refs:
        return html, 0

    img_dir = os.path.join(IMAGES_DIR, slug)
    os.makedirs(img_dir, exist_ok=True)

    saved = 0
    for src in img_refs:
        # Skip data: URIs and external URLs
        if src.startswith('data:') or src.startswith('http'):
            continue

        # Extract filename
        filename = src.split('/')[-1]
        # Clean filename (remove query params, decode)
        filename = filename.split('?')[0]
        if not filename:
            continue

        # Try to extract from ZIM
        img_bytes, mimetype = extract_image_from_zim(archive, src, article_path)
        if img_bytes:
            # Save image
            local_path = os.path.join(img_dir, filename)
            with open(local_path, 'wb') as f:
                f.write(img_bytes)

            # Rewrite src in HTML (relative to index.html)
            new_src = 'assets/img/wiki/%s/%s' % (slug, filename)
            html = html.replace('src="%s"' % src, 'src="%s"' % new_src)
            saved += 1

    return html, saved


# ── Section Splitting ──

def slugify(text):
    """Convert a section title to a URL-friendly slug."""
    text = text.lower().strip()
    text = re.sub(r'<[^>]+>', '', text)
    # Normalize common French accented characters
    replacements = {
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'à': 'a', 'â': 'a', 'ä': 'a',
        'ô': 'o', 'ö': 'o',
        'ù': 'u', 'û': 'u', 'ü': 'u',
        'î': 'i', 'ï': 'i',
        'ç': 'c',
        'œ': 'oe', 'æ': 'ae',
        'ñ': 'n',
    }
    for fr, en in replacements.items():
        text = text.replace(fr, en)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    text = text.strip('-')
    return text or 'section'


def split_into_sections(html):
    """Split cleaned HTML into sections based on <h2> headings.

    Returns a list of dicts: { title, slug, content, is_intro }
    """
    h2_pattern = re.compile(r'<h2[^>]*>(.*?)</h2>', re.DOTALL)
    matches = list(h2_pattern.finditer(html))

    sections = []

    if not matches:
        # No h2 found — entire content is the introduction
        sections.append({
            'title': 'Introduction',
            'slug': 'introduction',
            'content': html,
            'is_intro': True,
        })
        return sections

    # Text before first h2 → introduction
    intro_content = html[:matches[0].start()].strip()
    if intro_content:
        sections.append({
            'title': 'Introduction',
            'slug': 'introduction',
            'content': intro_content,
            'is_intro': True,
        })

    for i, match in enumerate(matches):
        raw_title = match.group(1)
        clean_title = re.sub(r'<[^>]+>', '', raw_title).strip()

        # Skip sections in the skip list
        if clean_title.lower() in SKIP_SECTIONS:
            continue

        # Section content: from after this h2 to before next h2
        start = match.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(html)
        content = html[start:end].strip()

        if not content:
            continue

        sections.append({
            'title': clean_title,
            'slug': slugify(clean_title),
            'content': content,
            'is_intro': False,
        })

    return sections


def build_curiosita_section(section, num):
    """Build a Curiosità-formatted section HTML."""
    num_str = '%02d' % num
    section_id = section['slug']
    title = section['title']
    content = section['content']

    if section.get('is_intro'):
        content = re.sub(r'<p(?=[> ])', '<p class="resume-text"', content)
        return (
            '<section class="content-section" id="{id}">\n'
            '      <div class="section-header">\n'
            '        <div class="section-num">{num}</div>\n'
            '        <div class="section-info">\n'
            '          <h2>{title}</h2>\n'
            '        </div>\n'
            '      </div>\n'
            '      {content}\n'
            '    </section>'
        ).format(id=section_id, num=num_str, title=esc_html(title), content=content)
    else:
        return (
            '<section class="content-section" id="{id}">\n'
            '      <div class="section-header">\n'
            '        <div class="section-num">{num}</div>\n'
            '        <div class="section-info">\n'
            '          <h2>{title}</h2>\n'
            '        </div>\n'
            '      </div>\n'
            '      <div class="course-content">\n'
            '        {content}\n'
            '      </div>\n'
            '    </section>'
        ).format(id=section_id, num=num_str, title=esc_html(title), content=content)


def esc_html(s):
    """Escape HTML special characters."""
    return (s or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')


# ── Categories ──

def filter_categories(categories):
    """Filter Wikipedia categories, keeping only content-relevant ones."""
    result = []
    seen = set()
    for name in categories:
        if isinstance(name, dict):
            name = name.get('*', str(name))

        # Decode underscores
        name = name.replace('_', ' ')

        # Skip admin categories
        skip = False
        for prefix in ADMIN_CAT_PREFIXES:
            if name.startswith(prefix):
                skip = True
                break
        if skip:
            continue

        # Deduplicate
        if name.lower() in seen:
            continue
        seen.add(name.lower())

        result.append(name)

    return result


# ── JSON Assembly ──

def load_disciplines():
    """Load category metadata from _categories.json."""
    with open(CATEGORIES_PATH, 'r', encoding='utf-8') as f:
        raw = json.load(f)
    return raw.get('tree', raw)


def build_output_json(title, sections, categories, summary, discipline, disciplines_data, portails=None):
    """Assemble the final Curiosità JSON output."""
    disc_meta = disciplines_data.get(discipline, {})
    label = disc_meta.get('label', discipline.capitalize())
    accent_hero = disc_meta.get('accentHero', 'rgba(232,201,122,0.04)')

    section_htmls = []
    nav_sections = []
    nav_section_titles = {}

    for i, section in enumerate(sections):
        html = build_curiosita_section(section, i + 1)
        section_htmls.append(html)
        nav_sections.append(section['slug'])
        nav_section_titles[section['slug']] = section['title']

    content = '\n\n    '.join(section_htmls)

    # Truncate description
    description = summary
    if len(description) > 200:
        description = description[:197] + '...'

    return {
        'type': 'lesson',
        'discipline': discipline,
        'title': title,
        'content': content,
        'nav': {
            'sections': nav_sections,
            'sectionTitles': nav_section_titles,
            'breadcrumb': [],
        },
        'categories': categories,
        'portails': portails or [],
        'description': description,
        'domain': label,
        'level': '',
        'time': '',
        'heroDesc': description,
        'heroVariant': 'course',
        'heroH1': '<em>' + esc_html(title) + '</em>',
        'accentHero': accent_hero,
    }


# ── Main ──

def main():
    parser = argparse.ArgumentParser(
        description='Import a Wikipedia FR article from a ZIM file into Curiosità format.'
    )
    parser.add_argument('title', help='Wikipedia article title (e.g., "Photosynthèse")')
    parser.add_argument('--zim', '-z', required=True,
                        help='Path to the Wikipedia ZIM file')
    parser.add_argument('--discipline', '-d', default='auto',
                        help='Curiosità discipline key (e.g., sciences, arts) or "auto" for portail-based detection')
    parser.add_argument('--slug', '-s', required=True,
                        help='Output slug for the JSON file (e.g., photosynthese)')
    parser.add_argument('--images', action='store_true',
                        help='Extract and include images from ZIM')
    parser.add_argument('--dry-run', action='store_true',
                        help='Print output to stdout instead of writing file')

    args = parser.parse_args()

    print('═══════════════════════════════════════════════')
    print('  Wiki → Curiosità : "%s"' % args.title)
    print('═══════════════════════════════════════════════')

    # 1. Open ZIM
    print('\n[1/6] Opening ZIM file...')
    archive = open_zim(args.zim)
    print('       %d articles in archive' % archive.article_count)

    # 2. Read article HTML from ZIM
    print('[2/6] Reading article "%s"...' % args.title)
    try:
        raw_html, article_path = read_article_html(archive, args.title)
    except KeyError as e:
        print('  ERROR: %s' % e)
        sys.exit(1)
    print('       Path: %s (%d bytes)' % (article_path, len(raw_html)))

    # 3. Extract summary + portails from intro paragraph BEFORE cleaning
    summary = extract_summary_from_html(raw_html)
    print('       Summary: %s' % (summary[:80] + '...' if len(summary) > 80 else summary))

    # 3b. Extract portails BEFORE cleaning (they get removed)
    portails = extract_portails_from_html(raw_html)
    if portails:
        print('       Portails: %s' % ', '.join(portails[:6]))

    # 4. Clean HTML (also extracts categories from catlinks)
    print('[3/6] Cleaning HTML...')
    clean_html, raw_categories = clean_wikipedia_html(raw_html, keep_images=args.images)

    # 5. Handle images if requested
    if args.images:
        print('[3b]  Extracting images...')
        clean_html, num_img = process_images(clean_html, archive, article_path, args.slug)
        print('       Saved %d images to assets/img/wiki/%s/' % (num_img, args.slug))

    # 6. Split into sections
    print('[4/6] Splitting into sections...')
    sections = split_into_sections(clean_html)
    print('       Found %d sections:' % len(sections))
    for s in sections:
        print('         - %s' % s['title'])

    # 7. Filter categories
    print('[5/6] Processing categories...')
    categories = filter_categories(raw_categories)
    print('       %d content categories (from %d raw):' % (len(categories), len(raw_categories)))
    for c in categories:
        print('         - %s' % c)

    # 8. Load disciplines and build JSON
    print('[6/6] Building Curiosità JSON...')
    disciplines = load_disciplines()

    # Auto-categorize from portails if discipline is 'auto' or not specified
    discipline = args.discipline
    if discipline == 'auto':
        pmap = load_portail_map()
        discipline, matched = auto_categorize(portails, pmap)
        print('       Auto-category: %s (matched: %s)' % (discipline, ', '.join(matched[:4])))

    if discipline not in disciplines:
        print('  WARNING: discipline "%s" not found in _categories.json' % discipline)

    output = build_output_json(
        title=args.title,
        sections=sections,
        categories=categories,
        summary=summary,
        discipline=discipline,
        disciplines_data=disciplines,
        portails=portails,
    )

    # 9. Write output — flat structure: assets/content/{slug}.json
    out_path = os.path.join(CONTENT_DIR, args.slug + '.json')

    if args.dry_run:
        print('\n--- DRY RUN ---')
        # Print first 3000 chars of content for inspection
        j = json.dumps(output, ensure_ascii=False, indent=2)
        if len(j) > 3000:
            print(j[:3000])
            print('\n... (%d more chars)' % (len(j) - 3000))
        else:
            print(j)
        print('--- Would write to: %s ---' % out_path)
    else:
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, 'w', encoding='utf-8') as f:
            json.dump(output, f, ensure_ascii=False, indent=2)
        print('\n  ✓ Saved: %s' % out_path)
        print('  ✓ Title: %s' % output['title'])
        print('  ✓ Sections: %d' % len(output['nav']['sections']))
        print('  ✓ Categories: %d' % len(output['categories']))

        # 10. Auto-rebuild search index
        import subprocess
        build_script = os.path.join(SCRIPT_DIR, 'build-index.py')
        if os.path.exists(build_script):
            print('\n  Rebuilding search index...')
            result = subprocess.run(
                [sys.executable, build_script],
                cwd=PROJECT_DIR,
                capture_output=True, text=True
            )
            if result.returncode == 0:
                last_line = result.stdout.strip().split('\n')[-1] if result.stdout.strip() else ''
                print('  ✓ %s' % last_line)
            else:
                print('  WARNING: Index rebuild failed:')
                print('  ' + result.stderr.strip()[:200])

    print('\n═══════════════════════════════════════════════')


if __name__ == '__main__':
    main()
