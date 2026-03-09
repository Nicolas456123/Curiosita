# Curiosità

Encyclopedic website in French — "Tout ce qui peut être appris" (Everything that can be learned).

## Architecture Overview

Single-page app with **4 main tabs** (Explorer, Réviser, Collection, Progrès) and a **CV overlay** for reading content pages. All content stored in `assets/content/*.json`, rendered dynamically. Single HTML file: `index.html`.

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
├── assets/                       All JS, CSS, data, and content
│   ├── style.css                 Main CSS
│   ├── sr-style.css              SR styles
│   ├── sr-engine.js              SR engine (SM-2 algorithm)
│   ├── sr-extract.js             SR flashcard extraction
│   ├── sr-ui.js                  SR review interface
│   ├── sr-progress.js            SR progress tab
│   ├── sr-methode.js             SR method tab
│   ├── search.js                 Search + tree navigation
│   ├── card-browser.js           Flashcard catalog browser
│   ├── course-viewer.js          CV overlay system
│   ├── glossary.js               Glossary: Wikipedia-style page links
│   ├── courses-index.json        Search/navigation index (1208 entries)
│   ├── cards-db.json             Flashcard database (~15000 cards)
│   ├── target-structure.json     Coverage targets for audit
│   ├── favicon.svg               Site icon
│   └── content/                  Content JSON files (one per discipline)
│       ├── _themes.json          Theme pages content
│       ├── maths.json            Mathematics (16 hubs, ~30 pages)
│       ├── histoire.json         History (19 hubs, ~20 pages)
│       └── ...                   44 discipline files total
├── index.html                    Single HTML file (SPA: 4 tabs + CV overlay)
├── CLAUDE.md
└── .gitignore
```

No build step — all JS/CSS are source files loaded directly by the HTML.

## Tech Stack

- Pure HTML/CSS/JS — no frameworks, no dependencies, no build step
- Google Fonts: Playfair Display (headings), DM Sans (body), Lora (formulas), JetBrains Mono (code)
- Content stored as JSON, rendered dynamically via course-viewer overlay

### Course Viewer (CV) System

The CV is a full-page overlay that loads content from `assets/content/{discipline}.json`. It is triggered by `data-cv` attributes on links (e.g., `data-cv="maths/algebre/equations"`).

- `assets/course-viewer.js` — Main CV controller: routing, content loading, sidebar, hero, navigation
- Content JSON structure per page: `{ type, title, content (HTML), nav, description, domain, level, time, heroDesc, heroVariant, heroH1, accentHero }`
- Nav structure: `{ sections: ['introduction','contenu'], sectionTitles: {...}, siblings: [...] }`
- Section IDs in content HTML: `introduction`, `contenu` (main content)

### Content Data

All content lives in `assets/content/*.json` (one file per discipline, 44 total + `_themes.json`). These JSON files are the single source of truth — edited directly.

Supporting data files:
- `assets/courses-index.json` — search/navigation index (1208 entries)
- `assets/cards-db.json` — flashcard database (~15000 cards)

### UI Architecture — Tab-based SPA

The main interface uses `switchPanel(panelId)` to switch between 4 main panels:

| Tab | Panel ID | Content |
|-----|----------|---------|
| Explorer | `panel-explorer` | Dashboard, search, themes, coverage |
| Réviser | `panel-reviser` | Stats row, filter, review cards (managed by sr-ui.js) |
| Collection | `panel-collection` | Sub-tabs: Mes decks, Bibliothèque, Ajouter, Paramètres |
| Progrès | `panel-progres` | Sub-tabs: Progression, Méthode |

Sub-tabs use `data-tab-group` attribute for scoped tab switching (handled by `initTabs()` in sr-ui.js).

**Overlays (still used):**
- CV overlay (`#courseViewerOverlay`) — content page viewer
- Welcome modal (`#welcomeOverlay`) — first visit only
- SR edit modal (`#sr-modal`) — inline card editing

### Spaced Repetition System

- SR features are distributed across main tabs (Réviser, Collection, Progrès) — no overlay
- `assets/sr-engine.js` — SM-2 algorithm, CRUD cards, localStorage persistence
- `assets/sr-extract.js` — Auto-extraction of flashcards from page HTML content
- `assets/sr-ui.js` — Review interface, tab management, deck browser; exposes `initReviewPanel()`
- `assets/sr-progress.js` — Progress charts (renders into `#progress-content`)
- `assets/sr-methode.js` — Method content (renders into `#methode-content`)
- `assets/card-browser.js` — Card catalog (inline in Collection > Bibliothèque); exposes `CB.ensureLoaded()`

## CSS Architecture

- `assets/style.css` defines `:root` with dark theme defaults and all CSS variables
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

## Design Conventions

- **All pages**: Dark theme (`--bg: #0c0c0e`)
- Each page uses CSS custom properties (`:root` variables) for accent theming
- Landing page has noise texture overlay (`body::before` with SVG filter)
- Fixed nav with backdrop blur and 4 main tabs (hamburger menu on mobile)
- CV overlay: hero + sidebar (220px) + centered main content (max-width 860px)
- Main panels: `.main-panel` toggled by `switchPanel()`, sub-tabs scoped via `data-tab-group`
- Responsive: `@media (max-width: 768px)` hides main tabs behind hamburger, stacks layouts
- Animations: `@keyframes fadeUp` for entrance effects
- CSS class names use "course" internally (e.g., `.course-card`, `.courses-grid`) — these are NOT renamed

## Search

- `index.html` uses `assets/search.js` which loads `assets/courses-index.json` (1208 entries with CV IDs)
- Cached in `sessionStorage` for 10 minutes
- Search results show type badges: thème, matière, domaine, page

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
