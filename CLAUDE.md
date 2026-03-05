# Curiosita

Educational website in French — "Tout ce qui peut être appris" (Everything that can be learned).

## Site Hierarchy

```
index.html (landing page — 7 grand themes)
├── cours/sciences-exactes.html      🔬 Sciences exactes & Informatique
│   ├── cours/maths/index.html           Mathématiques (16 hubs)
│   └── cours/informatique/index.html    Informatique
├── cours/sciences-nature.html       🌱 Sciences de la nature
│   └── cours/biologie/index.html        Biologie (14 hubs)
├── cours/sciences-humaines.html     🌍 Sciences humaines & sociales
│   ├── cours/histoire/index.html        Histoire (19 hubs)
│   ├── cours/economie/index.html        Économie (13 hubs)
│   └── cours/psychologie/index.html     Psychologie (14 hubs)
├── cours/lettres-langues.html       📚 Lettres, Langues & Philosophie
│   ├── cours/philosophie/index.html     Philosophie (12 hubs)
│   └── cours/langues/index.html         Langues (16 hubs)
├── cours/arts-culture.html          🎨 Arts & Culture
│   ├── cours/arts/index.html            Arts visuels (13 hubs)
│   └── cours/musique/index.html         Musique (18 hubs)
├── cours/droit-politique.html       ⚖️ Droit, Politique & Société
├── cours/savoir-faire.html          🔧 Savoir-faire & Vie pratique
├── cours/cours.html                 Catalogue de tous les cours
└── cours/apprendre.html             Hub répétition espacée
```

Navigation: Landing → Grand thème (`cours/*.html`) → Discipline (`cours/*/index.html`) → Hub → Cours

## Project Structure

```
Curiosita/
├── assets/                       Deployed bundles, CSS, generated files
│   ├── curiosita.min.js          Bundle: utils + quiz + mobile
│   ├── sr-app.min.js             Bundle: full SR app (apprendre.html)
│   ├── sr-course.min.js          Bundle: SR engine + extract + highlight
│   ├── search.min.js             Search (index.html)
│   ├── memo.min.js               Memo download (course pages)
│   ├── style.min.css             Main CSS
│   ├── sr-style.min.css          SR styles
│   ├── search-index.json         Search index (compact keys)
│   ├── sr-courses.js             Auto-generated course URL list
│   └── favicon.svg               Site icon
├── cours/                        All HTML pages except landing
│   ├── sciences-exactes.html     Grand theme (×7)
│   ├── cours.html                Course catalog
│   ├── apprendre.html            Spaced repetition hub
│   ├── maths/                    Discipline (×33)
│   │   ├── index.html            Discipline page
│   │   ├── arithmetique.html     Hub page
│   │   └── arithmetique/         Course pages
│   │       └── nombres-premiers.html
│   └── ...
├── src/                          13 source files (JS + CSS)
│   ├── utils.js, quiz.js, mobile.js
│   ├── sr-engine.js, sr-extract.js, sr-highlight.js
│   ├── sr-ui.js, sr-progress.js, sr-methode.js
│   ├── search.js, memo.js
│   └── style.css, sr-style.css
├── scripts/                      Build scripts
│   ├── build.js                  Bundle + minify JS/CSS
│   ├── build-search-index.js     Generate search-index.json + sr-courses.js
│   └── _generate.js              Course page template generator
├── index.html                    Landing page (only HTML at root)
├── package.json
└── .gitignore
```

### Path Depth Reference

| Page type | Location | Asset prefix | Root ref | Example |
|-----------|----------|--------------|----------|---------|
| Landing | `index.html` | `assets/` | — | `assets/style.min.css?v=4` |
| Grand theme | `cours/*.html` | `../assets/` | `../index.html` | `../assets/style.min.css?v=4` |
| Discipline | `cours/*/index.html` | `../../assets/` | `../../index.html` | `../../assets/style.min.css?v=4` |
| Hub | `cours/*/*.html` | `../../assets/` | `../../index.html` | `../../assets/style.min.css?v=4` |
| Course | `cours/*/*/*.html` | `../../../assets/` | `../../../index.html` | `../../../assets/style.min.css?v=4` |

## Tech Stack

- Pure HTML/CSS/JS — no frameworks, no runtime dependencies
- Build tools: `terser` (JS minification), `clean-css` (CSS minification) — devDependencies only
- Google Fonts: Playfair Display (headings), DM Sans (body), Lora (formulas), JetBrains Mono (code)
- All assets use cache-busted versions (`?v=4`)
- Each page's `<style>` block contains ONLY `:root` variable overrides (`--accent`, `--accent2`, `--accent-dim`, `--accent-hero`)

### Build Pipeline

```
npm run build        → Bundles + minifies JS and CSS (src/ → assets/)
npm run index        → Generates search-index.json + sr-courses.js (→ assets/)
npm run all          → Both above
```

- `scripts/build.js` — Reads sources from `src/`, concatenates JS IIFEs into bundles, minifies with terser/clean-css, outputs to `assets/`
- `scripts/build-search-index.js` — Crawls HTML pages to generate `assets/search-index.json` (compact keys: `n,c,u,t,i`)
- `scripts/_generate.js` — Course page generator (template with current conventions)

### JS Bundles

| Bundle | Sources (in src/) | Purpose |
|--------|---------|---------|
| `curiosita.min.js` | utils.js + quiz.js + mobile.js | All regular pages |
| `sr-app.min.js` | sr-engine + sr-extract + sr-courses + sr-ui + sr-progress + sr-methode | apprendre.html (full SR app) |
| `sr-course.min.js` | sr-engine + sr-extract + sr-highlight | Course pages (SR annotation) |
| `search.min.js` | search.js | index.html (search + tree) |
| `memo.min.js` | memo.js | Course pages with downloadable memo |

Note: `sr-courses.js` is auto-generated by `build-search-index.js` and lives in `assets/` (not src/)

### Spaced Repetition System

- `cours/apprendre.html` — Hub page: review cards, manage decks, view progress, study method
- `src/sr-engine.js` — SM-2 algorithm, CRUD cartes, localStorage persistence, migration
- `src/sr-extract.js` — Auto-extraction de flashcards depuis le contenu HTML des cours
- `src/sr-highlight.js` — Colore les termes-clés des cours, bouton d'extraction (bundled in sr-course.min.js)
- `src/sr-ui.js` — Interface de révision (flip cards, rating, deck browser)
- `src/sr-progress.js` — Onglet Progrès (charts, forecast, retention)
- `src/sr-methode.js` — Onglet Méthode (techniques de mémorisation, Pomodoro)
- `src/sr-style.css` — Tous les styles SR préfixés `sr-`

## CSS Architecture

- `src/style.css` defines `:root` with dark theme defaults and all CSS variables
- Each page overrides only `--accent`, `--accent2`, `--accent-dim` + hero background
- Psychologie overrides the full palette (different dark base: `#0f0d14`)
- Landing page (`index.html`) uses `style.css` for reset/base + its own inline styles
- Grand theme pages reuse the same CSS classes as discipline pages

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
- Subject pages: hero + sidebar (220px) + centered main content (max-width 860px)
- Grand theme pages: same layout but simplified (no quiz, no memo, no resources)
- Responsive: `@media (max-width: 900px)` hides sidebar, shows hamburger menu
- Animations: `@keyframes fadeUp` for entrance effects

## Search

- `index.html` uses `search.min.js` which loads `assets/search-index.json?v=4` (pre-built, compact keys: `n,c,u,t,i`)
- Fallback: if `search-index.json` fails, builds index dynamically by fetching pages
- Cached in `sessionStorage` for 10 minutes
- Search results show type badges: thème, matière, domaine, cours
- `npm run index` regenerates `search-index.json` from HTML pages

## Language

- All user-facing content is in **French**
- Code comments and CSS class names are in English
