#!/usr/bin/env node
// ══════════════════════════════════════════════════════
//  Curiosita — Build Search Index + SR Courses
//  Generates: search-index.json, sr-courses.js
//  Run: node build-search-index.js
// ══════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const BASE = __dirname;

// ── HTML parsing helpers (regex-based, no dependencies) ──

function readHtml(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    return null;
  }
}

function extractAttr(tag, attr) {
  const m = tag.match(new RegExp(attr + '=["\']([^"\']*)["\']'));
  return m ? m[1] : '';
}

function extractText(html, selector) {
  // Simple: extract text content from first matching element
  let pattern;
  if (selector.includes('#')) {
    const parts = selector.split('#');
    const tag = parts[0] || '[a-z]+';
    const id = parts[1];
    pattern = new RegExp('<' + tag + '[^>]*id="' + id + '"[^>]*>([\\s\\S]*?)</' + tag + '>', 'i');
  } else if (selector.includes('.')) {
    const parts = selector.split('.');
    const tag = parts[0] || '[a-z]+';
    const cls = parts[1];
    pattern = new RegExp('<' + tag + '[^>]*class="[^"]*' + cls + '[^"]*"[^>]*>([\\s\\S]*?)</' + tag + '>', 'i');
  } else {
    pattern = new RegExp('<' + selector + '[^>]*>([\\s\\S]*?)</' + selector + '>', 'i');
  }
  const m = html.match(pattern);
  if (!m) return '';
  return m[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!m) return '';
  return m[1].split('—')[0].replace(/<[^>]*>/g, '').trim();
}

/**
 * Extract course-card links from an HTML page
 * Returns: [{ name, desc, href }]
 */
function extractCourseCards(html) {
  const cards = [];
  // Match <a> with class containing "course-card" — href and class may be in any order
  const cardPattern = /<a\s[^>]*class="[^"]*course-card[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = cardPattern.exec(html)) !== null) {
    const fullTag = match[0];
    const inner = match[1];
    const hrefMatch = fullTag.match(/href="([^"]*)"/);
    const href = hrefMatch ? hrefMatch[1] : '';
    const h3Match = inner.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
    const pMatch = inner.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const name = h3Match ? h3Match[1].replace(/<[^>]*>/g, '').trim() : '';
    const desc = pMatch ? pMatch[1].replace(/<[^>]*>/g, '').trim() : '';
    if (name && href) {
      cards.push({ name, desc, href });
    }
  }
  return cards;
}

/**
 * Extract theme-card links from index.html
 * Returns: [{ href, icon, themeName }]
 */
function extractThemeCards(html) {
  const themes = [];
  // Match <a> with class containing "theme-card" — href and style may be in any order
  const pattern = /<a\s[^>]*class="[^"]*theme-card[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const fullTag = match[0];
    const inner = match[1];
    const hrefMatch = fullTag.match(/href="([^"]*)"/);
    const href = hrefMatch ? hrefMatch[1] : '';
    // Icon/name can be <span> or <div>
    const iconMatch = inner.match(/class="[^"]*theme-icon[^"]*"[^>]*>([\s\S]*?)<\//i);
    const nameMatch = inner.match(/class="[^"]*theme-name[^"]*"[^>]*>([\s\S]*?)<\//i);
    const icon = iconMatch ? iconMatch[1].trim() : '';
    const themeName = nameMatch ? nameMatch[1].replace(/<[^>]*>/g, '').trim() : '';
    if (href && themeName) {
      themes.push({ href, icon, themeName });
    }
  }
  return themes;
}

function resolveUrl(href, basePath) {
  if (href.startsWith('/') || href.startsWith('http')) return href;
  const dir = basePath.includes('/') ? basePath.substring(0, basePath.lastIndexOf('/') + 1) : '';
  return dir + href;
}

// ── Main build ──

function build() {
  console.log('Building search index...');

  const indexHtml = readHtml(path.join(BASE, 'index.html'));
  if (!indexHtml) {
    console.error('ERROR: Cannot read index.html');
    process.exit(1);
  }

  const index = [];
  const courseUrls = [];

  // 1. Theme pages
  const themeCards = extractThemeCards(indexHtml);
  console.log(`  Found ${themeCards.length} themes`);

  for (const theme of themeCards) {
    index.push({
      name: theme.themeName,
      cat: 'Curiosita',
      url: theme.href,
      type: 'thème',
      icon: theme.icon,
      keywords: theme.themeName
    });

    // 2. Subject pages (from theme page)
    const themeHtml = readHtml(path.join(BASE, theme.href));
    if (!themeHtml) continue;

    const subjectCards = extractCourseCards(themeHtml);
    for (const subject of subjectCards) {
      const subjectUrl = resolveUrl(subject.href, theme.href);
      const subjectFile = path.join(BASE, subjectUrl);
      const subjectHtml = readHtml(subjectFile);
      const subjectName = subject.name || (subjectHtml ? extractTitle(subjectHtml) : '');

      if (subjectUrl.endsWith('-page.html')) {
        index.push({
          name: subjectName,
          cat: theme.themeName,
          url: subjectUrl,
          type: 'matière',
          icon: theme.icon,
          keywords: `${theme.themeName} ${subjectName}`
        });

        // 3. Hub pages (from subject page)
        if (!subjectHtml) continue;
        const hubCards = extractCourseCards(subjectHtml);

        for (const hub of hubCards) {
          const hubUrl = resolveUrl(hub.href, subjectUrl);
          courseUrls.push('/Curiosita/' + hubUrl);

          index.push({
            name: hub.name,
            cat: subjectName,
            url: hubUrl,
            type: 'domaine',
            icon: theme.icon,
            keywords: `${subjectName} ${hub.name} ${hub.desc}`
          });

          // 4. Course pages (from hub page)
          const hubHtml = readHtml(path.join(BASE, hubUrl));
          if (!hubHtml) continue;

          const courseCards = extractCourseCards(hubHtml);
          for (const course of courseCards) {
            const courseUrl = resolveUrl(course.href, hubUrl);
            courseUrls.push('/Curiosita/' + courseUrl);

            index.push({
              name: course.name,
              cat: `${subjectName} › ${hub.name}`,
              url: courseUrl,
              type: 'cours',
              icon: theme.icon,
              keywords: `${subjectName} ${hub.name} ${course.name} ${course.desc}`
            });
          }
        }
      }
    }
  }

  // Write search-index.json
  const jsonPath = path.join(BASE, 'search-index.json');
  fs.writeFileSync(jsonPath, JSON.stringify(index, null, 0), 'utf-8');
  console.log(`  search-index.json: ${index.length} entries (${(fs.statSync(jsonPath).size / 1024).toFixed(1)} KB)`);

  // Write sr-courses.js (auto-generated)
  const uniqueUrls = [...new Set(courseUrls)].sort();
  const coursesContent = `// AUTO-GENERATED by build-search-index.js — ne pas modifier manuellement\n// Run: node build-search-index.js\nconst SR_COURSE_URLS = [\n${uniqueUrls.map(u => `  '${u}'`).join(',\n')}\n];\n`;
  fs.writeFileSync(path.join(BASE, 'sr-courses.js'), coursesContent, 'utf-8');
  console.log(`  sr-courses.js: ${uniqueUrls.length} URLs`);

  console.log('Done!');
}

build();
