#!/usr/bin/env node
// ══════════════════════════════════════════════════════
//  Curiosita — Build Cards Database
//  Extracts ALL flashcards from course HTML pages
//  Port of src/sr-extract.js to Node.js + cheerio
//  Output: assets/cards-db.json
// ══════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const BASE = path.resolve(__dirname, '..');
const ASSETS = path.join(BASE, 'assets');
const MAX_BACK = 220;

// ══════════════════════════════
//  ID Generation (exact port of sr-engine.js)
// ══════════════════════════════

function djb2(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
  }
  return 'sr_' + Math.abs(hash).toString(36);
}

function generateId(source, type, frontText) {
  const key = (source || '') + '|' + (type || '') + '|' + (frontText || '').substring(0, 80);
  return djb2(key);
}

// ══════════════════════════════
//  Helpers (port of sr-extract.js)
// ══════════════════════════════

function cleanText($el) {
  if (!$el || !$el.length) return '';
  return $el.text().replace(/\s+/g, ' ').trim();
}

function truncate(text, max) {
  if (!text) return '';
  max = max || MAX_BACK;
  if (text.length <= max) return text;
  const cut = text.lastIndexOf(' ', max);
  return text.substring(0, cut > max * 0.6 ? cut : max) + '\u2026';
}

function isMathExpr(text) {
  if (!text) return true;
  const letters = (text.match(/[a-zA-Z\u00C0-\u00FF]/g) || []).length;
  const total = text.replace(/\s/g, '').length;
  return total > 0 && (letters / total) < 0.3;
}

function isBadFront(text) {
  if (!text || text.length < 4) return true;
  if (/^exemples?\s*:?$/i.test(text)) return true;
  if (isMathExpr(text)) return true;
  if (/^\d[\d\s]*[÷×=+\-]/.test(text)) return true;
  if (/^\d+\s+(composantes?|éléments?|points?|étapes?|parties?|types?|cas|axes?)$/i.test(text)) return true;
  if (/^(pourquoi|comment|qu['e]est[- ]ce|quel(le)?s?|faut[- ]il|doit[- ]on|peut[- ]on|est[- ]ce\s+que|comment\s+)\s*/i.test(text)) return true;
  if (/^(règle|note|remarque|attention|astuce|conseil|résultat|principe\s*clé|frontière\s*actuelle|en\s*résumé|important|définition|rappel|à\s*retenir|vocabulaire|objectif|chiffre\s*clé|chiffres?\s*clés?|propriétés?\s*(essentielles?|importantes?|fondamentales?)?|mauvaise\s*utilisation|erreurs?\s*d['']implémentation|perdants?|gagnants?|conclusion|introduction|contexte|bilan|synthèse|héritage\s*durable)$/i.test(text)) return true;
  return false;
}

function cleanLabel(text) {
  return text.replace(/[\s:—–\-]+$/, '').trim();
}

function isInExercises($, el) {
  const $el = $(el);
  // Check closest element with id
  const $section = $el.closest('[id]');
  if ($section.length && /exercice|exo/i.test($section.attr('id') || '')) return true;

  // Check content-section heading
  const $contentSection = $el.closest('.content-section');
  if ($contentSection.length) {
    const $h = $contentSection.find('.section-info h2, .section-info p').first();
    if ($h.length && /exercice|^application|^exemple/i.test(cleanText($h))) return true;
  }

  // Check nearest heading (h3/h4) above for "Applications" context
  let $node = $el.parent();
  while ($node.length && $node[0].type !== 'root') {
    const $prev = $node.prev();
    if ($prev.length) {
      const tag = ($prev[0].tagName || '').toLowerCase();
      if (/^h[34]$/.test(tag) && /^(applications?|exemples?\s*d['']|cas\s+pratiques?)$/i.test(cleanText($prev))) {
        return true;
      }
    }
    $node = $node.parent();
  }
  return false;
}

function getTextAfterStrong($, el) {
  const $el = $(el);
  const $strong = $el.find('strong').first();
  if (!$strong.length) return cleanText($el);
  const full = cleanText($el);
  const term = cleanText($strong);
  const idx = full.indexOf(term);
  if (idx < 0) return full;
  return full.substring(idx + term.length).replace(/^[\s:—–\-·]+/, '').trim();
}

function getPageTitle($) {
  const $h1 = $('.hero h1, h1').first();
  if ($h1.length) return cleanText($h1);
  const title = $('title').text() || '';
  return title.split('—')[0].trim();
}

function getPageTags($) {
  const tags = [];
  $('.breadcrumb a, .breadcrumb span').each(function () {
    const t = cleanText($(this));
    if (t && t !== '›') tags.push(t.toLowerCase());
  });
  return tags;
}

// ══════════════════════════════
//  EXTRACTORS (port of sr-extract.js)
// ══════════════════════════════

// 1. Highlight boxes
function extractHighlights($, source, title, tags) {
  const cards = [];
  $('.highlight-box').each(function () {
    if (isInExercises($, this)) return;
    const $strong = $(this).find('strong').first();
    if (!$strong.length) return;
    const label = cleanLabel(cleanText($strong));
    if (isBadFront(label)) return;
    const explanation = getTextAfterStrong($, this);
    if (explanation.length < 15) return;
    cards.push({ front: label, back: truncate(explanation), type: 'highlight', source, sourceTitle: title, tags });
  });
  return cards;
}

// 2. Formula cards
function extractFormulas($, source, title, tags) {
  const cards = [];
  $('.formula-card').each(function () {
    const name = cleanText($(this).find('.formula-name'));
    const math = cleanText($(this).find('.formula-math, .formula-expr'));
    const desc = cleanText($(this).find('.formula-desc'));
    if (!name || (!math && !desc)) return;
    let back = '';
    if (math) back += math;
    if (desc) back += (back ? '\n' : '') + desc;
    cards.push({ front: name, back: truncate(back, 250), type: 'formula', source, sourceTitle: title, tags });
  });
  return cards;
}

// 3. Timeline items
function extractTimeline($, source, title, tags) {
  const cards = [];
  $('.tl-item').each(function () {
    const date = cleanText($(this).find('.tl-date'));
    const tlTitle = cleanText($(this).find('.tl-title'));
    const desc = cleanText($(this).find('.tl-desc'));
    if (!tlTitle) return;
    cards.push({
      front: date ? date : tlTitle,
      back: truncate((tlTitle ? tlTitle + '. ' : '') + (desc || '')),
      type: 'timeline', source, sourceTitle: title, tags
    });
  });
  return cards;
}

// 4. Biais cards
function extractBiais($, source, title, tags) {
  const cards = [];
  $('.biais-card').each(function () {
    const name = cleanText($(this).find('.biais-name'));
    const desc = cleanText($(this).find('.biais-desc'));
    const example = cleanText($(this).find('.biais-example'));
    if (!name || !desc) return;
    let back = desc;
    if (example) back += '\nEx : ' + example;
    cards.push({ front: name, back: truncate(back), type: 'biais', source, sourceTitle: title, tags });
  });
  return cards;
}

// 5. Theory items
function extractTheories($, source, title, tags) {
  const cards = [];
  $('.theory-item').each(function () {
    const theoryTitle = cleanText($(this).find('.theory-title'));
    const year = cleanText($(this).find('.theory-year'));
    const author = cleanText($(this).find('.theory-author'));
    const desc = cleanText($(this).find('.theory-desc'));
    if (!theoryTitle || !desc) return;
    const meta = [author, year].filter(Boolean).join(', ');
    cards.push({
      front: theoryTitle + (meta ? ' (' + meta + ')' : ''),
      back: truncate(desc),
      type: 'theory', source, sourceTitle: title, tags
    });
  });
  return cards;
}

// 6. Concept cards
function extractConcepts($, source, title, tags) {
  const cards = [];
  $('.concept-card').each(function () {
    const name = cleanText($(this).find('.concept-title'));
    const desc = cleanText($(this).find('.concept-desc'));
    if (!name || !desc) return;
    cards.push({ front: name, back: truncate(desc), type: 'concept', source, sourceTitle: title, tags });
  });
  return cards;
}

// 7. Memo items
function extractMemo($, source, title, tags) {
  const cards = [];
  $('.memo-item').each(function () {
    const text = cleanText($(this));
    if (text.length < 8) return;
    let front, back;
    const separators = [' \u2014 ', ' : ', ' = ', ' \u2192 '];
    let found = false;
    for (const sep of separators) {
      const idx = text.indexOf(sep);
      if (idx > 2 && idx < text.length - 3) {
        front = text.substring(0, idx).trim();
        back = text.substring(idx + sep.length).trim();
        found = true;
        break;
      }
    }
    if (!found) {
      const $section = $(this).closest('.memo-section');
      const sTitle = $section.length ? cleanText($section.find('.memo-section-title')) : '';
      front = sTitle || 'Mémo';
      back = text;
    }
    cards.push({ front, back: truncate(back), type: 'memo', source, sourceTitle: title, tags });
  });
  return cards;
}

// 8. Quiz questions (two formats)
function extractQuiz($, source, title, tags) {
  const cards = [];

  // Format A: answer(this,true/false) in DOM
  $('.question-block').each(function () {
    const qText = cleanText($(this).find('.q-text'));
    if (!qText) return;
    const $correctOption = $(this).find('.option[onclick*="true"]').first();
    if (!$correctOption.length) return;
    const answer = cleanText($correctOption);
    const $feedback = $(this).find('.q-feedback');
    const feedbackText = $feedback.length ? cleanText($feedback) : '';
    cards.push({
      front: qText,
      back: truncate(answer + (feedbackText ? '\n' + feedbackText : ''), 280),
      type: 'quiz', source, sourceTitle: title, tags
    });
  });

  // Format B: {q:"...",opts:[...],ans:N,expl:"..."} in script
  $('script').each(function () {
    const code = $(this).html() || '';
    if (!code) return;
    const regex = /\{q:\s*["'](.+?)["']\s*,\s*opts:\s*\[([^\]]+)\]\s*,\s*ans:\s*(\d+)\s*,\s*expl:\s*["'](.+?)["']\s*\}/g;
    let match;
    while ((match = regex.exec(code)) !== null) {
      const question = match[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
      const optsStr = match[2];
      const ansIdx = parseInt(match[3]);
      const expl = match[4].replace(/\\'/g, "'").replace(/\\"/g, '"');
      const optRegex = /["'](.+?)["']/g;
      const opts = [];
      let optMatch;
      while ((optMatch = optRegex.exec(optsStr)) !== null) {
        opts.push(optMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"'));
      }
      const answer = opts[ansIdx] || '';
      if (!question || !answer) continue;
      if (cards.some(c => c.front === question)) continue;
      cards.push({
        front: question,
        back: truncate(answer + (expl ? '\n' + expl : ''), 280),
        type: 'quiz', source, sourceTitle: title, tags
      });
    }
  });

  return cards;
}

// 9. Definitions — <li> with <strong>
function extractDefinitions($, source, title, tags) {
  const cards = [];
  const seenTerms = new Set();

  $('li').each(function () {
    const $strong = $(this).find('strong').first();
    if (!$strong.length) return;
    const term = cleanLabel(cleanText($strong));
    if (!term || term.length < 4 || term.length > 60) return;
    if (isBadFront(term)) return;
    if (isInExercises($, this)) return;
    // Skip if inside other card containers
    if ($(this).closest('.highlight-box, .formula-card, .biais-card, .theory-item, .concept-card, .memo-item, .question-block, .quiz-container, .options').length) return;
    const back = getTextAfterStrong($, this);
    if (back.length < 15) return;
    if (isMathExpr(back)) return;
    if ((term.match(/[a-zA-Z\u00C0-\u00FF]/g) || []).length < 3) return;
    const key = term.toLowerCase();
    if (seenTerms.has(key)) return;
    seenTerms.add(key);
    cards.push({ front: term, back: truncate(back), type: 'definition', source, sourceTitle: title, tags });
  });
  return cards;
}

// ══════════════════════════════
//  MAIN BUILD
// ══════════════════════════════

function build() {
  console.log('Building cards database...\n');

  // Load course URLs from sr-courses.js
  const coursesPath = path.join(ASSETS, 'sr-courses.js');
  if (!fs.existsSync(coursesPath)) {
    console.error('ERROR: assets/sr-courses.js not found. Run `npm run index` first.');
    process.exit(1);
  }

  const coursesContent = fs.readFileSync(coursesPath, 'utf-8');
  const urlMatch = coursesContent.match(/\[[\s\S]*\]/);
  if (!urlMatch) {
    console.error('ERROR: Could not parse sr-courses.js');
    process.exit(1);
  }
  const urls = JSON.parse(urlMatch[0].replace(/'/g, '"'));
  console.log(`Found ${urls.length} course URLs in sr-courses.js`);

  const allCards = [];
  const stats = { pages: 0, skipped: 0, byType: {} };

  const extractors = [
    extractHighlights, extractFormulas, extractTimeline,
    extractBiais, extractTheories, extractConcepts,
    extractMemo, extractQuiz, extractDefinitions
  ];

  for (const url of urls) {
    // Convert /Curiosita/cours/... to local file path
    const relPath = url.replace(/^\/Curiosita\//, '');
    const filePath = path.join(BASE, relPath);

    if (!fs.existsSync(filePath)) {
      stats.skipped++;
      continue;
    }

    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);
    const title = getPageTitle($);
    const tags = getPageTags($);

    // Use compact source path (without /Curiosita/ prefix) for JSON
    // But generate ID with original source for compatibility
    const source = url;

    extractors.forEach(fn => {
      fn($, source, title, tags).forEach(cardData => {
        const id = generateId(source, cardData.type, cardData.front);
        allCards.push({
          id,
          f: cardData.front,
          b: cardData.back,
          t: cardData.type,
          s: relPath,
          st: cardData.sourceTitle,
          tg: cardData.tags
        });
        stats.byType[cardData.type] = (stats.byType[cardData.type] || 0) + 1;
      });
    });

    stats.pages++;
  }

  // Deduplicate by ID
  const seen = new Set();
  const unique = allCards.filter(c => {
    if (seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });

  // Write output
  const output = JSON.stringify(unique);
  const outPath = path.join(ASSETS, 'cards-db.json');
  fs.writeFileSync(outPath, output, 'utf-8');

  const sizeKB = (Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1);

  console.log(`\n${'='.repeat(50)}`);
  console.log(`  cards-db.json generated`);
  console.log(`  ${unique.length} unique cards from ${stats.pages} pages`);
  console.log(`  ${allCards.length - unique.length} duplicates removed`);
  console.log(`  ${stats.skipped} pages skipped (file not found)`);
  console.log(`  Size: ${sizeKB} KB`);
  console.log(`${'='.repeat(50)}`);
  console.log('\nCards by type:');
  Object.entries(stats.byType)
    .sort((a, b) => b[1] - a[1])
    .forEach(([type, count]) => {
      console.log(`  ${type.padEnd(12)} ${count}`);
    });
}

build();
