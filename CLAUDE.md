# Curiosita

Educational website in French — "Tout ce qui peut être appris" (Everything that can be learned).

## Site Hierarchy

```
index.html (landing page — 7 grand themes)
├── sciences-exactes.html        🔬 Sciences exactes & Informatique
│   ├── maths-page.html              Mathématiques (16 hubs)
│   └── informatique-page.html       Informatique
│       └── python-page.html             Python (branche)
├── sciences-nature.html         🌱 Sciences de la nature
│   └── biologie-page.html           Biologie (14 hubs)
├── sciences-humaines.html       🌍 Sciences humaines & sociales
│   ├── histoire-page.html           Histoire (19 hubs)
│   ├── economie-page.html           Économie (13 hubs)
│   └── psychologie-page.html        Psychologie (14 hubs)
├── lettres-langues.html         📚 Lettres, Langues & Philosophie
│   ├── philosophie-page.html        Philosophie (12 hubs)
│   └── langues-page.html            Langues (16 hubs)
├── arts-culture.html            🎨 Arts & Culture
│   ├── arts-page.html               Arts visuels (13 hubs)
│   └── musique-page.html            Musique (18 hubs)
├── droit-politique.html         ⚖️ Droit, Politique & Société (placeholder)
└── savoir-faire.html            🔧 Savoir-faire & Vie pratique (placeholder)
```

Navigation: Landing → Grand thème → Discipline (`*-page.html`) → Hub → Cours

## Project Structure

- `index.html` — Main landing page (7 grand theme cards + dynamic search)
- `style.css` — Shared stylesheet for all pages (variables, layout, components)
- `mobile.js` — Mobile hamburger menu + sidebar drawer (included on all pages)
- Grand theme pages (`sciences-exactes.html`, etc.) — Intermediate pages listing disciplines
- `*-page.html` — Discipline pages (subject-specific accent color, sidebar, quiz, resources)
- `*/` — Course directories (e.g. `python/`, `maths/`, `biologie/`)

### Grand Theme Pages

| File | Theme | Accent Color | Disciplines |
|------|-------|-------------|-------------|
| `sciences-exactes.html` | Sciences exactes & Informatique | `#4fc3f7` (cyan) | Maths, Informatique |
| `sciences-nature.html` | Sciences de la nature | `#7ae8d8` (teal) | Biologie |
| `sciences-humaines.html` | Sciences humaines & sociales | `#7ae88a` (green) | Histoire, Économie, Psychologie |
| `lettres-langues.html` | Lettres, Langues & Philosophie | `#9b7ae8` (violet) | Philosophie, Langues |
| `arts-culture.html` | Arts & Culture | `#e87a7a` (pink) | Arts visuels, Musique |
| `droit-politique.html` | Droit, Politique & Société | `#e87a9b` (magenta) | Placeholder |
| `savoir-faire.html` | Savoir-faire & Vie pratique | `#8ae87a` (lime) | Placeholder |

### Discipline Pages

| File | Subject | Accent Color | Parent Theme |
|------|---------|-------------|--------------|
| `maths-page.html` | Mathématiques | `#c0392b` (red) | Sciences exactes |
| `informatique-page.html` | Informatique | `#4fc3f7` (cyan) | Sciences exactes |
| `python-page.html` | Python | `#4fc3f7` (cyan) | Informatique |
| `biologie-page.html` | Biologie | `#7ae8d8` (teal) | Sciences de la nature |
| `histoire-page.html` | Histoire | `#7ae88a` (green) | Sciences humaines |
| `economie-page.html` | Économie | `#c97ae8` (violet) | Sciences humaines |
| `psychologie-page.html` | Psychologie | `#b07fe8` (purple) | Sciences humaines |
| `philosophie-page.html` | Philosophie | `#9b7ae8` (purple) | Lettres & Langues |
| `langues-page.html` | Langues | `#e8c97a` (gold) | Lettres & Langues |
| `arts-page.html` | Arts visuels | `#e87a7a` (pink) | Arts & Culture |
| `musique-page.html` | Musique | `#e8b07a` (orange) | Arts & Culture |

## Tech Stack

- Pure HTML/CSS/JS — no build tools, no frameworks, no dependencies
- Google Fonts: Playfair Display (headings), DM Sans (body), Lora (formulas), JetBrains Mono (code)
- `style.css?v=2` — shared CSS with dark theme defaults and all components (cache-busted)
- `mobile.js` — sidebar toggle for mobile (hamburger menu + drawer)
- Each page's `<style>` block contains ONLY `:root` variable overrides and hero background

## CSS Architecture

- `style.css` defines `:root` with dark theme defaults and all CSS variables
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

- `index.html` has a dynamic search that builds an index by fetching pages at runtime
- Traverses the full tree: grand theme → discipline → hub → course
- Cached in `sessionStorage` for 10 minutes
- Search results show type badges: thème, matière, domaine, cours

## Language

- All user-facing content is in **French**
- Code comments and CSS class names are in English
