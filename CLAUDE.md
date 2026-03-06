# Curiosita

Encyclopedic website in French — "Tout ce qui peut être appris" (Everything that can be learned).

## Architecture Overview

The site uses a **JSON-powered course viewer (CV) overlay** system. All content (themes, disciplines, hubs, pages) is stored in `assets/content/*.json` and rendered dynamically via `course-viewer.js`. There are no static HTML files for individual pages — only `index.html` (landing) and `pages/apprendre.html` (spaced repetition hub).

## Site Hierarchy

```
index.html (landing page — 7 grand themes)
└── Course Viewer (CV) overlay — loads content from assets/content/*.json
    ├── Themes (7)          — sciences-exactes, sciences-nature, etc.
    ├── Disciplines (44)    — maths, physique, histoire, philosophie, etc.
    ├── Hubs (198)          — sub-domains within each discipline
    └── Pages (959)         — individual encyclopedia articles
```

Navigation: Landing → Grand thème → Discipline → Hub (domaine) → Page

Content hierarchy in JSON: `assets/content/{discipline}.json` → `pages[key]` where key is:
- `index` — discipline landing page
- `{hub-slug}` — hub page
- `{hub-slug}/{page-slug}` — individual article page

## Project Structure

```
Curiosita/
├── assets/                       Deployed bundles, CSS, generated data
│   ├── curiosita.min.js          Bundle: utils + quiz + mobile
│   ├── sr-app.min.js             Bundle: full SR app (apprendre.html)
│   ├── sr-course.min.js          Bundle: SR engine + extract + highlight
│   ├── sr-review.min.js          Bundle: SR review component
│   ├── search.min.js             Search + tree navigation (index.html)
│   ├── card-browser.min.js       Flashcard catalog browser
│   ├── course-viewer.min.js      CV overlay system
│   ├── glossary.min.js           Glossary popover system
│   ├── memo.min.js               Memo download
│   ├── style.min.css             Main CSS
│   ├── sr-style.min.css          SR styles
│   ├── courses-index.json        Primary search/navigation index (1208 entries)
│   ├── search-index.json         Fallback search index (compact keys)
│   ├── cards-db.json             Flashcard database (~15000 cards)
│   ├── glossary.json             Glossary terms
│   ├── target-structure.json     Coverage targets for audit
│   ├── sr-courses.js             Auto-generated course URL list
│   ├── content/                  Content JSON files (one per discipline)
│   │   ├── _themes.json          Theme pages content
│   │   ├── maths.json            Mathematics (16 hubs, ~30 pages)
│   │   ├── histoire.json         History (19 hubs, ~20 pages)
│   │   └── ...                   44 discipline files total
│   └── favicon.svg               Site icon
├── pages/                        HTML pages (only apprendre.html remains)
│   └── apprendre.html            Spaced repetition hub
├── src/                          Source files (JS + CSS)
│   ├── utils.js, quiz.js, mobile.js
│   ├── course-viewer.js          CV overlay: loads content JSON, renders pages
│   ├── card-browser.js           Flashcard catalog browser
│   ├── glossary.js               Glossary popover with trie-based matching
│   ├── sr-engine.js, sr-extract.js, sr-highlight.js
│   ├── sr-ui.js, sr-progress.js, sr-methode.js
│   ├── search.js, memo.js
│   └── style.css, sr-style.css
├── scripts/                      Build & generation scripts
│   ├── build.js                  Bundle + minify JS/CSS
│   ├── build-search-index.js     Generate search-index.json + sr-courses.js
│   ├── build-content-db.js       Extract content from HTML to JSON
│   ├── build-cards-db.js         Build flashcard database
│   ├── build-glossary.js         Generate glossary.json
│   ├── generate-all.js           Content generator (reads content-data/*.js)
│   ├── audit-coverage.js         Coverage report vs target-structure
│   ├── content-data/             Discipline definitions for generator
│   │   ├── 01-mythologie.js
│   │   ├── 02-histoire-art.js
│   │   └── ...                   11 definition files
│   └── _archive/                 Deprecated scripts (kept for reference)
│       ├── _generate.js          Old static HTML template generator
│       └── generate-courses.js   Old bulk content generator
├── index.html                    Landing page (only HTML at root)
├── package.json
└── .gitignore
```

## Tech Stack

- Pure HTML/CSS/JS — no frameworks, no runtime dependencies
- Build tools: `terser` (JS minification), `clean-css` (CSS minification) — devDependencies only
- Google Fonts: Playfair Display (headings), DM Sans (body), Lora (formulas), JetBrains Mono (code)
- All assets use cache-busted versions (`?v=4`)
- Content stored as JSON, rendered dynamically via course-viewer overlay

### Build Pipeline

```
npm run build        → Bundles + minifies JS and CSS (src/ → assets/)
npm run index        → Generates search-index.json + sr-courses.js
npm run generate     → Generates content JSONs from content-data definitions
npm run cards        → Builds cards-db.json
npm run glossary     → Builds glossary.json
npm run audit        → Coverage report comparing actual vs target content
npm run all          → build + index
```

- `scripts/build.js` — Reads `src/`, concatenates JS IIFEs into bundles, minifies, outputs to `assets/`
- `scripts/generate-all.js` — Reads discipline definitions from `scripts/content-data/*.js`, generates `assets/content/*.json`, `assets/courses-index.json`, and `assets/cards-db.json`

### JS Bundles

| Bundle | Sources (in src/) | Purpose |
|--------|---------|---------|
| `curiosita.min.js` | utils.js + quiz.js + mobile.js | All regular pages |
| `sr-app.min.js` | sr-engine + sr-extract + sr-courses + sr-ui + sr-progress + sr-methode | apprendre.html (full SR app) |
| `sr-course.min.js` | sr-engine + sr-extract + sr-highlight | Pages (SR annotation via CV) |
| `sr-review.min.js` | sr-review component | SR review widget |
| `search.min.js` | search.js | index.html (search + tree navigation) |
| `course-viewer.min.js` | course-viewer.js | CV overlay system |
| `card-browser.min.js` | card-browser.js | Flashcard catalog |
| `glossary.min.js` | glossary.js | Glossary popovers |
| `memo.min.js` | memo.js | Downloadable memo |

Note: `sr-courses.js` is auto-generated by `build-search-index.js` and lives in `assets/` (not src/)

### Course Viewer (CV) System

The CV is a full-page overlay that loads content from `assets/content/{discipline}.json`. It is triggered by `data-cv` attributes on links (e.g., `data-cv="maths/algebre/equations"`).

- `src/course-viewer.js` — Main CV controller: routing, content loading, sidebar, hero, navigation
- Content JSON structure per page: `{ type, title, content (HTML), nav, description, domain, level, time, heroDesc, heroVariant, heroH1, accentHero }`
- Nav structure: `{ sections: ['introduction','contenu','quiz'], sectionTitles: {...}, siblings: [...] }`
- Section IDs in content HTML: `introduction`, `contenu` (main content), `quiz`

### Content Generation Pipeline

```
scripts/content-data/*.js  →  scripts/generate-all.js  →  assets/content/*.json
                                                        →  assets/courses-index.json
                                                        →  assets/cards-db.json
```

Each content-data file exports discipline definitions with hubs and lessons. The generator normalizes the data, builds HTML content, creates flashcards, and writes the JSON files.

### Spaced Repetition System

- `pages/apprendre.html` — Hub page: review cards, manage decks, view progress, study method
- `src/sr-engine.js` — SM-2 algorithm, CRUD cards, localStorage persistence, path migration (cours→pages)
- `src/sr-extract.js` — Auto-extraction of flashcards from page HTML content
- `src/sr-highlight.js` — Highlights key terms on pages, extraction button (bundled in sr-course.min.js)
- `src/sr-ui.js` — Review interface (flip cards, rating, deck browser)
- `src/sr-progress.js` — Progress tab (charts, forecast, retention)
- `src/sr-methode.js` — Method tab (memorization techniques, Pomodoro)
- `src/sr-style.css` — All SR styles prefixed with `sr-`

## CSS Architecture

- `src/style.css` defines `:root` with dark theme defaults and all CSS variables
- Each discipline's content JSON includes accent color overrides
- Landing page (`index.html`) uses `style.css` for reset/base + its own inline styles

### Key CSS Variables

| Variable | Purpose |
|----------|---------|
| `--accent` | Primary brand color per page |
| `--accent2` | Lighter variant for hover states |
| `--accent-dim` | Semi-transparent for backgrounds |
| `--nav-bg` | Nav bar background with opacity |
| `--content-color` | Body text in content areas |
| `--green-dim`, `--red-dim` | Quiz feedback backgrounds |

## Design Conventions

- **All pages**: Dark theme (`--bg: #0c0c0e`)
- Each page uses CSS custom properties (`:root` variables) for accent theming
- Landing page has noise texture overlay (`body::before` with SVG filter)
- Fixed nav with backdrop blur
- CV overlay: hero + sidebar (220px) + centered main content (max-width 860px)
- Responsive: `@media (max-width: 900px)` hides sidebar, shows hamburger menu
- Animations: `@keyframes fadeUp` for entrance effects
- CSS class names use "course" internally (e.g., `.course-card`, `.courses-grid`) — these are NOT renamed

## Search

- `index.html` uses `search.min.js` which loads `assets/courses-index.json` (primary, 1208 entries with CV IDs)
- Fallback: `assets/search-index.json` (compact keys: `n,c,u,t,i`)
- Last resort: builds index dynamically by fetching pages
- Cached in `sessionStorage` for 10 minutes
- Search results show type badges: thème, matière, domaine, page
- `npm run index` regenerates `search-index.json` from HTML pages

## Terminology

| French (user-facing) | English (internal) | Description |
|---|---|---|
| Page | lesson | Individual encyclopedia article |
| Domaine / Hub | hub | Sub-domain grouping within a discipline |
| Discipline / Matière | discipline | Major subject area (e.g., Mathématiques) |
| Thème | theme | Grand theme grouping disciplines (e.g., Sciences exactes) |

Note: The site was renamed from "cours" (courses) to "pages" (encyclopedia articles). Internal code may still use "course" in CSS class names and some variable names for backward compatibility.

## Language

- All user-facing content is in **French**
- Code comments and CSS class names are in English
