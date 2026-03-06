#!/usr/bin/env node
// ══════════════════════════════════════════════════════
//  Curiosita — Build Content Database
//  Extracts ALL course content from HTML pages into JSON
//  Output: assets/courses-index.json + assets/content/*.json
//  Run: node scripts/build-content-db.js
// ══════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE = path.resolve(__dirname, '..');
const ASSETS = path.join(BASE, 'assets');
const CONTENT_DIR = path.join(ASSETS, 'content');
const COURS_DIR = path.join(BASE, 'cours');

// ── Theme → icon mapping (from index.html theme cards) ──

function loadThemeMap() {
  const html = fs.readFileSync(path.join(BASE, 'index.html'), 'utf-8');
  const $ = cheerio.load(html);
  const themes = {};  // { 'sciences-exactes': { icon: '🔬', name: 'Sciences exactes & Informatique' } }
  const discToTheme = {};  // { 'maths': { icon: '🔬', themeName: '...' } }

  // Parse theme cards
  $('.theme-card').each(function () {
    const href = $(this).attr('href') || '';
    const icon = $(this).find('.theme-icon').text().trim();
    const name = $(this).find('.theme-name').text().trim();
    if (href && name) {
      const slug = path.basename(href, '.html');
      themes[slug] = { icon, name };

      // Read theme page to find its disciplines
      const themePath = path.join(BASE, href);
      if (fs.existsSync(themePath)) {
        const themeHtml = fs.readFileSync(themePath, 'utf-8');
        const $t = cheerio.load(themeHtml);
        $t('.course-card').each(function () {
          const discHref = $t(this).attr('href') || '';
          // href like "maths/index.html" or "../maths/index.html"
          const m = discHref.match(/([\w-]+)\/index\.html/);
          if (m) {
            discToTheme[m[1]] = { icon, themeName: name };
          }
        });
      }
    }
  });

  return { themes, discToTheme };
}

// ── Categorize page type from relative path ──

function getPageType(relPath) {
  // relPath like "cours/sciences-exactes.html" or "cours/maths/index.html" etc.
  const parts = relPath.replace(/\\/g, '/').split('/');
  // parts[0] = 'cours', parts[1] = discipline or theme, ...

  if (parts.length === 2) {
    // cours/xxx.html — theme page or utility (cours.html, apprendre.html)
    return 'theme';
  }
  if (parts.length === 3 && parts[2] === 'index.html') {
    // cours/maths/index.html — discipline
    return 'discipline';
  }
  if (parts.length === 3) {
    // cours/maths/arithmetique.html — hub
    return 'hub';
  }
  if (parts.length === 4) {
    // cours/maths/arithmetique/nombres-premiers.html — lesson
    return 'lesson';
  }
  return 'unknown';
}

// ── Get discipline slug from path ──

function getDiscipline(relPath) {
  const parts = relPath.replace(/\\/g, '/').split('/');
  if (parts.length >= 2) return parts[1];
  return '_other';
}

// ── Get page key (unique within discipline) ──

function getPageKey(relPath) {
  const parts = relPath.replace(/\\/g, '/').split('/');
  // For themes: just the filename
  if (parts.length === 2) return parts[1].replace('.html', '');
  // For discipline index: 'index'
  if (parts.length === 3 && parts[2] === 'index.html') return 'index';
  // For hub: just the hub name
  if (parts.length === 3) return parts[2].replace('.html', '');
  // For lesson: hub/lesson
  if (parts.length === 4) return parts[2] + '/' + parts[3].replace('.html', '');
  return parts.slice(2).join('/').replace('.html', '');
}

// ── Resolve relative href to a page slug ──

function resolveHrefToSlug(href, currentRelPath) {
  if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('javascript')) return null;

  // Get directory of current file
  const dir = path.dirname(currentRelPath);
  // Resolve relative path
  let resolved = path.posix.normalize(path.posix.join(dir.replace(/\\/g, '/'), href));
  // Must start with cours/
  if (!resolved.startsWith('cours/')) return null;
  // Remove .html extension for slug
  const slug = resolved.replace(/^cours\//, '').replace(/\.html$/, '');
  return slug;
}

// ── Extract page data ──

function extractPage(filePath, relPath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html, { decodeEntities: false });

  // --- Metadata ---
  const rawTitle = $('title').text() || '';
  const title = rawTitle.split('—')[0].trim();
  const description = $('meta[name="description"]').attr('content') || '';

  // Colors from inline <style>
  let accent = '', accent2 = '', accentDim = '', accentHero = '';
  const styleText = $('style').first().html() || '';
  const accentMatch = styleText.match(/--accent\s*:\s*([^;]+)/);
  const accent2Match = styleText.match(/--accent2\s*:\s*([^;]+)/);
  const accentDimMatch = styleText.match(/--accent-dim\s*:\s*([^;]+)/);
  const accentHeroMatch = styleText.match(/--accent-hero\s*:\s*([^;]+)/);
  if (accentMatch) accent = accentMatch[1].trim();
  if (accent2Match) accent2 = accent2Match[1].trim();
  if (accentDimMatch) accentDim = accentDimMatch[1].trim();
  if (accentHeroMatch) accentHero = accentHeroMatch[1].trim();

  // Hero metadata
  const domain = $('.tag-domain').text().trim();
  const level = $('.tag-level').text().trim();
  const time = $('.tag-time').text().trim();
  const heroTitle = $('h1').first().text().trim();
  const heroDesc = $('.hero-desc').text().trim();
  const heroDeco = $('.hero-deco').text().trim();
  // Detect hero variant class
  const heroEl = $('.hero');
  let heroVariant = '';
  if (heroEl.hasClass('hero--course')) heroVariant = 'course';
  else if (heroEl.hasClass('hero--hub')) heroVariant = 'hub';
  else if (heroEl.hasClass('hero--discipline')) heroVariant = 'discipline';
  // Hero h1 raw HTML (preserves <br><em> structure)
  const heroH1 = $('h1').first().html() || '';

  // --- Content: raw innerHTML of <main class="main"> ---
  const mainEl = $('main.main');
  let content = '';

  if (mainEl.length) {
    // Process quiz options: convert onclick="answer(this,true/false)" to data-correct
    mainEl.find('.option[onclick]').each(function () {
      const onclick = $(this).attr('onclick') || '';
      if (onclick.includes('true')) {
        $(this).attr('data-correct', '1');
      }
      $(this).removeAttr('onclick');
    });

    // Convert relative href links to data-cv slugs for internal navigation
    mainEl.find('a[href]').each(function () {
      const href = $(this).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('javascript') && !href.startsWith('mailto')) {
        const slug = resolveHrefToSlug(href, relPath);
        if (slug) {
          $(this).attr('data-cv', slug);
          $(this).removeAttr('href');
          $(this).attr('href', '#');
        }
      }
    });

    // Remove script tags from main content
    mainEl.find('script').remove();

    content = mainEl.html().trim();
  }

  // --- Navigation ---
  const sections = [];
  mainEl.find('.content-section[id]').each(function () {
    sections.push($(this).attr('id'));
  });

  // Section titles (for sidebar display)
  const sectionTitles = {};
  mainEl.find('.content-section[id]').each(function () {
    const id = $(this).attr('id');
    const h2 = $(this).find('.section-info h2').text().trim() || $(this).find('h2').first().text().trim();
    if (id && h2) sectionTitles[id] = h2;
  });

  // Prev/Next
  let prev = null, next = null;
  const courseNav = mainEl.find('.course-nav');
  if (!courseNav.length) {
    // Try outside main
    const outerNav = $('.course-nav');
    if (outerNav.length) {
      const prevLink = outerNav.find('.prev, a').first();
      const nextLink = outerNav.find('.next, a').last();
      if (prevLink.length && prevLink.attr('href')) {
        const slug = resolveHrefToSlug(prevLink.attr('href'), relPath);
        const t = prevLink.find('.course-nav-title').text().trim() || prevLink.text().trim();
        if (slug) prev = { slug, title: t.replace(/[←→]/g, '').trim() };
      }
      if (nextLink.length && nextLink.attr('href') && nextLink.attr('href') !== prevLink.attr('href')) {
        const slug = resolveHrefToSlug(nextLink.attr('href'), relPath);
        const t = nextLink.find('.course-nav-title').text().trim() || nextLink.text().trim();
        if (slug) next = { slug, title: t.replace(/[←→]/g, '').trim() };
      }
    }
  }

  // Siblings from sidebar
  const siblings = [];
  $('aside.sidebar .sidebar-link[href]').each(function () {
    const href = $(this).attr('href');
    if (href && href !== '#' && !href.startsWith('javascript')) {
      const slug = resolveHrefToSlug(href, relPath);
      const t = $(this).text().replace(/^[📖📝🎯✏️🔬🧬📊🎵🎨⚖️🔧•·]+\s*/, '').trim();
      if (slug && t) siblings.push({ slug, title: t });
    }
  });

  const nav = {
    sections,
    sectionTitles
  };
  if (prev) nav.prev = prev;
  if (next) nav.next = next;
  if (siblings.length) nav.siblings = siblings;

  return {
    title,
    description,
    accent, accent2, accentDim, accentHero,
    domain, level, time,
    heroTitle: heroTitle || title,
    heroDesc,
    heroDeco,
    heroVariant,
    heroH1,
    content,
    nav
  };
}

// ── Main build ──

function build() {
  console.log('Building content database...\n');

  // Ensure output directory
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });

  // Load theme → discipline mapping
  const { themes, discToTheme } = loadThemeMap();
  console.log(`  Theme map: ${Object.keys(discToTheme).length} disciplines mapped to ${Object.keys(themes).length} themes`);

  // Disc display labels (from search-index or extract from discipline index pages)
  const discLabels = {};

  // Find all HTML files
  const allFiles = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) allFiles.push(full);
    }
  }
  walk(COURS_DIR);

  console.log(`  Found ${allFiles.length} HTML files\n`);

  // Group pages by discipline
  const byDisc = {};       // { disc: { pageKey: pageData } }
  const discMeta = {};     // { disc: { accent, accent2, accentDim, label } }
  const coursesIndex = []; // flat index for search
  const stats = { themes: 0, disciplines: 0, hubs: 0, lessons: 0, errors: 0, skipped: 0 };

  // Load cards-db.json to count cards per page
  let cardsBySource = {};
  const cardsDbPath = path.join(ASSETS, 'cards-db.json');
  if (fs.existsSync(cardsDbPath)) {
    const cards = JSON.parse(fs.readFileSync(cardsDbPath, 'utf-8'));
    for (const card of cards) {
      const src = card.s; // 'cours/maths/arithmetique/nombres-premiers.html'
      cardsBySource[src] = (cardsBySource[src] || 0) + 1;
    }
    console.log(`  Cards DB loaded: ${cards.length} cards across ${Object.keys(cardsBySource).length} pages\n`);
  }

  for (const filePath of allFiles) {
    const relPath = path.relative(BASE, filePath).replace(/\\/g, '/');
    const pageType = getPageType(relPath);
    const disc = getDiscipline(relPath);
    const pageKey = getPageKey(relPath);

    // Skip utility pages
    if (['apprendre', 'cours'].includes(pageKey) && pageType === 'theme') {
      stats.skipped++;
      continue;
    }

    try {
      const data = extractPage(filePath, relPath);

      // Theme pages go to _themes
      if (pageType === 'theme') {
        if (!byDisc['_themes']) byDisc['_themes'] = {};
        byDisc['_themes'][pageKey] = {
          type: pageType,
          title: data.title,
          heroDesc: data.heroDesc,
          accent: data.accent,
          accent2: data.accent2,
          accentDim: data.accentDim,
          content: data.content,
          nav: data.nav
        };
        stats.themes++;

        // Add to index
        const themeInfo = themes[pageKey];
        coursesIndex.push({
          id: pageKey,
          t: data.title,
          d: data.heroDesc || data.description,
          tp: 'theme',
          disc: '_themes',
          icon: themeInfo ? themeInfo.icon : '📖',
          cat: 'Curiosita'
        });
        continue;
      }

      // Store discipline metadata from index page
      if (pageType === 'discipline') {
        discLabels[disc] = data.title;
        discMeta[disc] = {
          accent: data.accent,
          accent2: data.accent2,
          accentDim: data.accentDim,
          accentHero: data.accentHero
        };
        stats.disciplines++;
      } else if (pageType === 'hub') {
        stats.hubs++;
      } else if (pageType === 'lesson') {
        stats.lessons++;
      }

      // Store in disc group
      if (!byDisc[disc]) byDisc[disc] = {};
      const pageEntry = {
        type: pageType,
        title: data.title,
        content: data.content,
        nav: data.nav
      };
      // Only add non-empty optional fields
      if (data.description) pageEntry.description = data.description;
      if (data.domain) pageEntry.domain = data.domain;
      if (data.level) pageEntry.level = data.level;
      if (data.time) pageEntry.time = data.time;
      if (data.heroDesc) pageEntry.heroDesc = data.heroDesc;
      if (data.heroDeco) pageEntry.heroDeco = data.heroDeco;
      if (data.heroVariant) pageEntry.heroVariant = data.heroVariant;
      if (data.heroH1) pageEntry.heroH1 = data.heroH1;
      if (data.accentHero) pageEntry.accentHero = data.accentHero;

      byDisc[disc][pageKey] = pageEntry;

      // Build index entry
      const themeInfo = discToTheme[disc] || {};
      let cat = discLabels[disc] || disc;
      if (pageType === 'discipline') {
        // Category: theme name (for tree browser)
        cat = themeInfo.themeName || 'Curiosita';
      } else if (pageType === 'lesson') {
        // Category: "Discipline › Hub"
        const parts = relPath.split('/');
        const hubSlug = parts[2];
        const hubPage = byDisc[disc] && byDisc[disc][hubSlug];
        const hubTitle = hubPage ? hubPage.title : hubSlug;
        cat = (discLabels[disc] || disc) + ' › ' + hubTitle;
      } else if (pageType === 'hub') {
        // Category: discipline display name
        cat = discLabels[disc] || disc;
      }

      const cardCount = cardsBySource[relPath] || 0;
      const indexEntry = {
        id: disc + '/' + pageKey,
        t: data.title,
        d: data.description || data.heroDesc || '',
        tp: pageType,
        disc: disc,
        icon: themeInfo.icon || '📖',
        cat: cat
      };
      if (pageType === 'lesson' || pageType === 'hub') {
        const parts = relPath.split('/');
        if (parts.length >= 3) indexEntry.hub = parts[2].replace('.html', '');
      }
      if (data.level) indexEntry.level = data.level;
      if (data.time) indexEntry.time = data.time;
      if (cardCount > 0) indexEntry.cards = cardCount;

      coursesIndex.push(indexEntry);

    } catch (e) {
      console.error(`  ERROR processing ${relPath}: ${e.message}`);
      stats.errors++;
    }
  }

  // Fix categories in index entries (processing order may leave stale values)
  const hubTitles = {};
  for (const disc in byDisc) {
    for (const key in byDisc[disc]) {
      if (byDisc[disc][key].type === 'hub') {
        hubTitles[disc + '/' + key] = byDisc[disc][key].title;
      }
    }
  }
  for (const entry of coursesIndex) {
    if (entry.tp === 'discipline') {
      // Discipline cat = theme name
      const ti = discToTheme[entry.disc];
      if (ti) entry.cat = ti.themeName;
    } else if (entry.tp === 'hub') {
      // Hub cat = discipline display name
      entry.cat = discLabels[entry.disc] || entry.disc;
    } else if (entry.tp === 'lesson' && entry.hub) {
      // Lesson cat = "Discipline › Hub title"
      const hubKey = entry.disc + '/' + entry.hub;
      if (hubTitles[hubKey]) {
        entry.cat = (discLabels[entry.disc] || entry.disc) + ' \u203a ' + hubTitles[hubKey];
      }
    }
  }

  // ── Write output files ──

  // 1. courses-index.json
  const indexPath = path.join(ASSETS, 'courses-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(coursesIndex), 'utf-8');
  const indexSize = (fs.statSync(indexPath).size / 1024).toFixed(1);
  console.log(`  courses-index.json: ${coursesIndex.length} entries (${indexSize} KB)`);

  // 2. Per-discipline content files
  let totalContentSize = 0;
  const discReport = [];

  for (const disc in byDisc) {
    const meta = discMeta[disc] || {};
    const output = {
      disc: disc,
      label: discLabels[disc] || disc,
      accent: meta.accent || '',
      accent2: meta.accent2 || '',
      accentDim: meta.accentDim || '',
      accentHero: meta.accentHero || '',
      pages: byDisc[disc]
    };

    const outPath = path.join(CONTENT_DIR, disc + '.json');
    fs.writeFileSync(outPath, JSON.stringify(output), 'utf-8');
    const size = fs.statSync(outPath).size;
    totalContentSize += size;
    const pageCount = Object.keys(byDisc[disc]).length;
    discReport.push({ disc, pages: pageCount, sizeKB: (size / 1024).toFixed(0) });
  }

  // ── Report ──
  console.log('\n  ═══ Content Database Report ═══\n');
  console.log(`  ✓ ${allFiles.length} files read`);
  console.log(`  ✓ ${allFiles.length - stats.skipped - stats.errors} pages extracted (${stats.errors} errors, ${stats.skipped} skipped)`);
  console.log(`  ✓ ${stats.themes} themes, ${stats.disciplines} disciplines, ${stats.hubs} hubs, ${stats.lessons} lessons`);
  console.log(`  ✓ courses-index.json: ${coursesIndex.length} entries (${indexSize} KB)`);
  console.log('');

  discReport.sort((a, b) => b.pages - a.pages);
  for (const r of discReport) {
    console.log(`  ✓ content/${r.disc}.json: ${r.pages} pages (${r.sizeKB} KB)`);
  }

  console.log(`\n  ✓ Total content: ${(totalContentSize / 1024 / 1024).toFixed(1)} MB (${discReport.length} files)`);
  console.log('\nDone!');
}

build();
