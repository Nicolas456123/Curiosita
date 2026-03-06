#!/usr/bin/env node
/**
 * generate-all.js — Generates ALL new discipline content for Curiosita
 * Directly writes to content JSONs, courses-index, and cards-db.
 * Usage: node scripts/generate-all.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const CONTENT_DIR = path.join(ASSETS, 'content');

// Load existing data
const coursesIndex = JSON.parse(fs.readFileSync(path.join(ASSETS, 'courses-index.json'), 'utf8'));
const cardsDb = JSON.parse(fs.readFileSync(path.join(ASSETS, 'cards-db.json'), 'utf8'));
const existingIds = new Set(coursesIndex.map(e => e.id));
const existingCardIds = new Set(cardsDb.map(c => c.id));

let stats = { discs: 0, hubs: 0, lessons: 0, cards: 0 };

function uid() { return 'sr_' + Math.random().toString(36).substring(2, 9); }
function cardId() { let id; do { id = uid(); } while (existingCardIds.has(id)); existingCardIds.add(id); return id; }

// ── HTML builders ──
function sec(num, id, title, sub, html) {
  return `<section class="content-section" id="${id}"><div class="section-header"><div class="section-num">${String(num).padStart(2,'0')}</div><div class="section-info"><h2>${title}</h2><p>${sub}</p></div></div>${html}</section>`;
}
function P(t) { return `<p class="resume-text">${t}</p>`; }
function HL(t) { return `<div class="highlight-box"><p>${t}</p></div>`; }
function H3(t) { return `<h3>${t}</h3>`; }

function quizHtml(qs) {
  return qs.map((q, i) => {
    const opts = q.o.map((o, oi) =>
      `<button class="option" onclick="answer(this,${oi === q.c ? 'true' : 'false'})">${o}</button>`
    ).join('\n');
    return `<div class="question-block${i===0?' active':''}" data-q="${i}"><p class="q-num">Question ${i+1} / ${qs.length}</p><p class="q-text">${q.q}</p><div class="options">${opts}</div><div class="q-feedback">${q.e}</div></div>`;
  }).join('\n');
}

function buildLesson(l) {
  let parts = [];
  // Intro
  parts.push(sec('01','introduction','Introduction','Contexte et enjeux',
    P(`<strong>${l.title}</strong> — ${l.intro}`) +
    (l.hl ? HL(`<strong>L'idée fondamentale :</strong> ${l.hl}`) : '')
  ));
  // Course sections
  let body = '';
  l.secs.forEach(s => {
    body += H3(s.t);
    s.p.forEach(pp => { body += P(pp); });
    if (s.hl) body += HL(s.hl);
  });
  parts.push(sec('02','contenu','En détail','Approfondissement', body));
  // Quiz
  if (l.quiz && l.quiz.length > 0) {
    const qc = `<div class="quiz-container" data-total="${l.quiz.length}"><div class="quiz-header"><span class="quiz-score">Score : <span class="score-current">0</span>/<span class="score-total">${l.quiz.length}</span></span><span class="q-dots">${l.quiz.map((_,i)=>`<span class="q-dot" data-q="${i}"></span>`).join('')}</span></div>${quizHtml(l.quiz)}<div class="quiz-nav"><button class="quiz-prev" onclick="prevQ(this)">← Précédente</button><button class="quiz-next" onclick="nextQ(this)">Suivante →</button></div><div class="quiz-result"></div></div>`;
    parts.push(sec('03','quiz','Quiz','Testez vos connaissances', qc));
  }
  return parts.join('\n\n');
}

function buildHub(hub, discSlug) {
  const links = hub.lessons.map(l =>
    `<a class="course-card" data-cv="${discSlug}/${hub.slug}/${l.slug}"><div class="course-card-title">${l.title}</div><div class="course-card-desc">${l.desc}</div><div class="course-card-meta"><span class="tag-level">Débutant → Intermédiaire</span><span class="tag-time">⏱ ~35 min</span></div></a>`
  ).join('\n');
  return sec('01','presentation',hub.title,'Introduction et vue d\'ensemble',
    P(hub.intro) + (hub.hl ? HL(`<strong>L'idée fondamentale :</strong> ${hub.hl}`) : '')
  ) + '\n\n' +
  sec('02','contenu','Les pages',`${hub.lessons.length} pages disponibles`,
    `<div class="courses-grid">${links}</div>`
  );
}

function buildDisc(disc) {
  const links = disc.hubs.map(h =>
    `<a class="course-card" data-cv="${disc.slug}/${h.slug}"><div class="course-card-title">${h.title}</div><div class="course-card-desc">${h.desc}</div><div class="course-card-meta"><span class="tag-level">Débutant → Avancé</span><span class="tag-time">⏱ ~${h.lessons.length*35} min</span></div></a>`
  ).join('\n');
  return sec('01','resume', disc.introTitle || disc.title, 'Définition et vue d\'ensemble',
    P(disc.intro) + (disc.introHl ? HL(disc.introHl) : '')
  ) + '\n\n' +
  sec('02','domaines','Les domaines',`${disc.hubs.length} domaines à explorer`,
    `<div class="courses-grid">${links}</div>`
  );
}

function makeCards(l, discSlug, hubSlug) {
  const cards = [];
  const src = `pages/${discSlug}/${hubSlug}/${l.slug}.html`;
  if (l.defs) l.defs.forEach(d => {
    cards.push({ id: cardId(), t: 'definition', f: d[0], b: d[1], s: src, st: l.title, disc: discSlug });
  });
  l.secs.forEach(s => {
    if (s.hl) cards.push({ id: cardId(), t: 'highlight', f: s.t, b: s.hl.replace(/<[^>]+>/g,''), s: src, st: l.title, disc: discSlug });
  });
  if (l.memos) l.memos.forEach(m => {
    cards.push({ id: cardId(), t: 'memo', f: m[0], b: m[1], s: src, st: l.title, disc: discSlug });
  });
  if (l.quiz) l.quiz.forEach(q => {
    cards.push({ id: cardId(), t: 'quiz', f: q.q, b: q.o[q.c] + ' — ' + q.e, s: src, st: l.title, disc: discSlug });
  });
  return cards;
}

function processDiscipline(disc) {
  const contentFile = path.join(CONTENT_DIR, disc.slug + '.json');
  let db;
  if (fs.existsSync(contentFile)) {
    db = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
  } else {
    db = { disc: disc.slug, label: disc.title, accent: disc.accent, accent2: disc.accent2, accentDim: disc.accentDim, accentHero: disc.accentHero, pages: {} };
    stats.discs++;
  }

  // Disc index
  if (!db.pages['index']) {
    db.pages['index'] = {
      type: 'discipline', title: disc.title, content: buildDisc(disc),
      nav: { sections: ['resume','domaines'], sectionTitles: { resume: disc.title, domaines: 'Les domaines' }, siblings: [{ slug: disc.themeSlug || '', title: '← Accueil' }] },
      description: disc.desc, domain: disc.icon + ' ' + disc.title,
      level: 'Tous niveaux', time: '⏱ ~' + disc.hubs.length * 5 + 'h',
      heroDesc: disc.desc, heroVariant: 'discipline', heroH1: '<em>' + disc.title + '</em>', accentHero: disc.accentHero
    };
    if (!existingIds.has(disc.slug + '/index')) {
      coursesIndex.push({ id: disc.slug + '/index', t: disc.title, d: disc.desc.substring(0,200), tp: 'discipline', disc: disc.slug, icon: disc.icon, cat: disc.title, level: 'Tous niveaux', time: '⏱ ~' + disc.hubs.length * 5 + 'h' });
      existingIds.add(disc.slug + '/index');
    }
  }

  disc.hubs.forEach(hub => {
    const hubSiblings = [{ slug: disc.slug + '/index', title: '← ' + disc.title }];
    disc.hubs.forEach(h => hubSiblings.push({ slug: disc.slug + '/' + h.slug, title: h.title }));

    // Hub page
    if (!db.pages[hub.slug] || (db.pages[hub.slug].content || '').length < 100) {
      db.pages[hub.slug] = {
        type: 'hub', title: hub.title, content: buildHub(hub, disc.slug),
        nav: { sections: ['presentation','contenu'], sectionTitles: { presentation: hub.title, contenu: 'Les pages' }, siblings: hubSiblings },
        description: hub.desc, domain: disc.icon + ' ' + disc.title,
        level: 'Débutant → Avancé', time: '⏱ ~' + hub.lessons.length * 35 + ' min',
        heroDesc: hub.desc, heroVariant: 'hub', heroH1: '<em>' + hub.title + '</em>', accentHero: disc.accentHero
      };
      stats.hubs++;
    }
    if (!existingIds.has(disc.slug + '/' + hub.slug)) {
      coursesIndex.push({ id: disc.slug + '/' + hub.slug, t: hub.title, d: hub.desc.substring(0,200), tp: 'hub', disc: disc.slug, icon: disc.icon, cat: disc.title, hub: hub.slug, level: 'Débutant → Avancé', time: '⏱ ~' + hub.lessons.length * 35 + ' min', cards: hub.lessons.length * 12 });
      existingIds.add(disc.slug + '/' + hub.slug);
    }

    // Lessons
    hub.lessons.forEach(lesson => {
      const lessonSiblings = [{ slug: disc.slug + '/' + hub.slug, title: '← ' + hub.title }];
      hub.lessons.forEach(ll => lessonSiblings.push({ slug: disc.slug + '/' + hub.slug + '/' + ll.slug, title: ll.title }));

      const pageKey = hub.slug + '/' + lesson.slug;
      if (!db.pages[pageKey]) {
        db.pages[pageKey] = {
          type: 'course', title: lesson.title, content: buildLesson(lesson),
          nav: { sections: ['introduction','contenu','quiz'], sectionTitles: { introduction: 'Introduction', contenu: 'En détail', quiz: 'Quiz' }, siblings: lessonSiblings },
          description: lesson.desc, domain: disc.icon + ' ' + hub.title,
          level: 'Débutant → Intermédiaire', time: '⏱ ~35 min',
          heroDesc: lesson.desc, heroVariant: 'course', heroH1: '<em>' + lesson.title + '</em>', accentHero: disc.accentHero
        };
        stats.lessons++;
      }
      const lessonId = disc.slug + '/' + hub.slug + '/' + lesson.slug;
      if (!existingIds.has(lessonId)) {
        const cards = makeCards(lesson, disc.slug, hub.slug);
        cards.forEach(c => cardsDb.push(c));
        stats.cards += cards.length;
        coursesIndex.push({ id: lessonId, t: lesson.title, d: lesson.desc.substring(0,200), tp: 'lesson', disc: disc.slug, icon: disc.icon, cat: disc.title + ' › ' + hub.title, hub: hub.slug, level: 'Débutant → Intermédiaire', time: '⏱ ~35 min', cards: cards.length });
        existingIds.add(lessonId);
      }
    });
  });

  fs.writeFileSync(contentFile, JSON.stringify(db, null, 2), 'utf8');
}

// ═══════════════════════════════════════════════════════════════
//  Normalize data from agent-generated format to generator format
// ═══════════════════════════════════════════════════════════════
function normalize(disc) {
  // Disc level
  disc.desc = disc.desc || disc.description || '';
  disc.intro = disc.intro || disc.introText || '';
  disc.introHl = disc.introHl || disc.introHighlight || '';

  disc.hubs.forEach(hub => {
    hub.desc = hub.desc || hub.description || '';
    hub.intro = hub.intro || hub.introText || '';
    hub.hl = hub.hl || hub.introHighlight || '';

    hub.lessons.forEach(l => {
      l.desc = l.desc || l.description || '';
      l.hl = l.hl || l.introHighlight || '';
      // sections -> secs with normalized keys
      const rawSecs = l.secs || l.sections || [];
      l.secs = rawSecs.map(s => ({
        t: s.t || s.title || '',
        p: s.p || s.paragraphs || [],
        hl: s.hl || s.highlight || ''
      }));
      // quiz normalization
      if (l.quiz) {
        l.quiz = l.quiz.map(q => ({
          q: q.q,
          o: q.o || q.opts || [],
          c: q.c !== undefined ? q.c : q.correct !== undefined ? q.correct : 0,
          e: q.e || q.explanation || ''
        }));
      }
      // defs normalization: {term,def} -> [term,def]
      if (l.defs) {
        l.defs = l.defs.map(d => Array.isArray(d) ? d : [d.term || d[0] || '', d.def || d[1] || '']);
      } else if (l.definitions) {
        l.defs = l.definitions.map(d => Array.isArray(d) ? d : [d.term || '', d.def || '']);
      }
      // memos normalization: {front,back} -> [front,back]
      if (l.memos) {
        l.memos = l.memos.map(m => Array.isArray(m) ? m : [m.front || m[0] || '', m.back || m[1] || '']);
      }
    });
  });
  return disc;
}

// ═══════════════════════════════════════════════════════════════
//  Load all discipline definitions from content-data/*.js
// ═══════════════════════════════════════════════════════════════
const DEFS = path.join(__dirname, 'content-data');
const DISCIPLINES = [];
if (fs.existsSync(DEFS)) {
  fs.readdirSync(DEFS).filter(f => f.endsWith('.js')).sort().forEach(f => {
    const mod = require(path.join(DEFS, f));
    if (Array.isArray(mod)) mod.forEach(d => DISCIPLINES.push(normalize(d)));
    else if (mod && mod.slug) DISCIPLINES.push(normalize(mod));
  });
}

console.log(`\nLoaded ${DISCIPLINES.length} discipline definitions`);
DISCIPLINES.forEach(d => {
  console.log(`  Processing: ${d.title} (${d.hubs.length} hubs, ${d.hubs.reduce((s,h) => s + h.lessons.length, 0)} lessons)...`);
  processDiscipline(d);
});

// Save
coursesIndex.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(ASSETS, 'courses-index.json'), JSON.stringify(coursesIndex, null, 2), 'utf8');
fs.writeFileSync(path.join(ASSETS, 'cards-db.json'), JSON.stringify(cardsDb), 'utf8');

console.log(`\n✅ Generation complete:`);
console.log(`   ${stats.discs} new disciplines`);
console.log(`   ${stats.hubs} new/updated hubs`);
console.log(`   ${stats.lessons} new lessons`);
console.log(`   ${stats.cards} new flashcards`);
console.log(`   Total index: ${coursesIndex.length} entries`);
console.log(`   Total cards: ${cardsDb.length}\n`);
