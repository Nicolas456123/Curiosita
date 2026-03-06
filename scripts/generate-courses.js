#!/usr/bin/env node
/**
 * generate-courses.js — Bulk content generator for Curiosita
 * Generates content JSON, courses-index entries, and flashcards
 * for new disciplines, hubs, and lessons.
 *
 * Usage: node scripts/generate-courses.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');
const CONTENT_DIR = path.join(ASSETS, 'content');

// ── Load existing data ──
const coursesIndex = JSON.parse(fs.readFileSync(path.join(ASSETS, 'courses-index.json'), 'utf8'));
const cardsDb = JSON.parse(fs.readFileSync(path.join(ASSETS, 'cards-db.json'), 'utf8'));

// Track existing IDs to avoid duplicates
const existingIds = new Set(coursesIndex.map(e => e.id));
const existingCardIds = new Set(cardsDb.map(c => c.id));

let newLessons = 0, newHubs = 0, newCards = 0, newDiscs = 0;

// ── ID generator ──
function uid() {
  return 'sr_' + Math.random().toString(36).substring(2, 9);
}

function uniqueCardId() {
  let id;
  do { id = uid(); } while (existingCardIds.has(id));
  existingCardIds.add(id);
  return id;
}

// ── HTML builders ──

function section(num, id, title, subtitle, contentHtml) {
  return `<section class="content-section" id="${id}">
      <div class="section-header">
        <div class="section-num">${String(num).padStart(2, '0')}</div>
        <div class="section-info">
          <h2>${title}</h2>
          <p>${subtitle}</p>
        </div>
      </div>
      ${contentHtml}
    </section>`;
}

function p(text) { return `<p class="resume-text">${text}</p>`; }
function highlight(text) { return `<div class="highlight-box"><p>${text}</p></div>`; }
function h3(title) { return `<h3>${title}</h3>`; }

function quizHtml(questions) {
  const total = questions.length;
  return questions.map((q, i) => {
    const opts = q.opts.map((o, oi) =>
      `<button class="option" onclick="answer(this,${oi === q.correct ? 'true' : 'false'})">${o}</button>`
    ).join('\n              ');
    return `<div class="question-block${i === 0 ? ' active' : ''}" data-q="${i}">
            <p class="q-num">Question ${i + 1} / ${total}</p>
            <p class="q-text">${q.q}</p>
            <div class="options">
              ${opts}
            </div>
            <div class="q-feedback">${q.explanation}</div>
          </div>`;
  }).join('\n');
}

function buildLessonContent(lesson) {
  const parts = [];

  // 01 - Introduction
  parts.push(section('01', 'introduction', 'Introduction', lesson.introSub || 'Contexte et enjeux',
    p(`<strong>${lesson.title}</strong> — ${lesson.intro}`) +
    (lesson.introHighlight ? '\n      ' + highlight(`<strong>L'idée fondamentale :</strong> ${lesson.introHighlight}`) : '') +
    (lesson.intro2 ? '\n      ' + p(lesson.intro2) : '')
  ));

  // 02 - Main course
  let courseContent = '';
  lesson.sections.forEach(s => {
    courseContent += '\n      ' + h3(s.title);
    s.paragraphs.forEach(para => {
      courseContent += '\n      ' + p(para);
    });
    if (s.highlight) {
      courseContent += '\n      ' + highlight(s.highlight);
    }
  });
  parts.push(section('02', 'cours', 'Le cours', lesson.courseSub || 'Approfondissement', courseContent));

  // 03 - Quiz
  if (lesson.quiz && lesson.quiz.length > 0) {
    const quizContent = `<div class="quiz-container" data-total="${lesson.quiz.length}">
        <div class="quiz-header">
          <span class="quiz-score">Score : <span class="score-current">0</span>/<span class="score-total">${lesson.quiz.length}</span></span>
          <span class="q-dots">${lesson.quiz.map((_, i) => `<span class="q-dot" data-q="${i}"></span>`).join('')}</span>
        </div>
        ${quizHtml(lesson.quiz)}
        <div class="quiz-nav">
          <button class="quiz-prev" onclick="prevQ(this)">← Précédente</button>
          <button class="quiz-next" onclick="nextQ(this)">Suivante →</button>
        </div>
        <div class="quiz-result"></div>
      </div>`;
    parts.push(section('03', 'quiz', 'Quiz', 'Testez vos connaissances', quizContent));
  }

  return parts.join('\n\n');
}

function buildHubContent(hub, discSlug) {
  const courseLinks = hub.lessons.map(l =>
    `<a class="course-card" data-cv="${discSlug}/${hub.slug}/${l.slug}">
          <div class="course-card-title">${l.title}</div>
          <div class="course-card-desc">${l.description}</div>
          <div class="course-card-meta">
            <span class="tag-level">${l.level || 'Débutant → Intermédiaire'}</span>
            <span class="tag-time">${l.time || '⏱ ~35 min'}</span>
          </div>
        </a>`
  ).join('\n');

  const content = section('01', 'presentation', hub.title, 'Introduction et vue d\'ensemble',
    p(hub.introText) +
    (hub.introHighlight ? '\n      ' + highlight(`<strong>L'idée fondamentale :</strong> ${hub.introHighlight}`) : '')
  ) + '\n\n' +
  section('02', 'cours', 'Les cours', `${hub.lessons.length} cours disponibles`,
    `<div class="courses-grid">\n${courseLinks}\n      </div>`
  );

  return content;
}

function buildDiscContent(disc) {
  const hubLinks = disc.hubs.map(h =>
    `<a class="course-card" data-cv="${disc.slug}/${h.slug}">
          <div class="course-card-title">${h.title}</div>
          <div class="course-card-desc">${h.description}</div>
          <div class="course-card-meta">
            <span class="tag-level">${h.level || 'Débutant → Avancé'}</span>
            <span class="tag-time">⏱ ~${h.lessons.length * 35} min</span>
          </div>
        </a>`
  ).join('\n');

  return section('01', 'resume', disc.introTitle || `Qu'est-ce que ${disc.articleLow || 'la'} ${disc.title.toLowerCase()} ?`,
    'Définition et vue d\'ensemble',
    p(disc.introText) +
    (disc.introHighlight ? '\n      ' + highlight(disc.introHighlight) : '')
  ) + '\n\n' +
  section('02', 'domaines', 'Les domaines', `${disc.hubs.length} domaines à explorer`,
    `<div class="courses-grid">\n${hubLinks}\n      </div>`
  );
}

// ── Card generators ──

function generateCards(lesson, discSlug, hubSlug) {
  const cards = [];
  const source = `cours/${discSlug}/${hubSlug}/${lesson.slug}.html`;

  // Definition cards from key terms
  if (lesson.definitions) {
    lesson.definitions.forEach(d => {
      cards.push({
        id: uniqueCardId(),
        t: 'definition',
        f: d.term,
        b: d.def,
        s: source,
        st: lesson.title,
        disc: discSlug
      });
    });
  }

  // Highlight cards from sections
  lesson.sections.forEach(s => {
    if (s.highlight) {
      cards.push({
        id: uniqueCardId(),
        t: 'highlight',
        f: s.title,
        b: s.highlight.replace(/<[^>]+>/g, ''),
        s: source,
        st: lesson.title,
        disc: discSlug
      });
    }
  });

  // Memo cards
  if (lesson.memos) {
    lesson.memos.forEach(m => {
      cards.push({
        id: uniqueCardId(),
        t: 'memo',
        f: m.front,
        b: m.back,
        s: source,
        st: lesson.title,
        disc: discSlug
      });
    });
  }

  // Quiz cards
  if (lesson.quiz) {
    lesson.quiz.forEach(q => {
      cards.push({
        id: uniqueCardId(),
        t: 'quiz',
        f: q.q,
        b: q.opts[q.correct] + '\n' + q.explanation,
        s: source,
        st: lesson.title,
        disc: discSlug
      });
    });
  }

  return cards;
}

// ── Main processor ──

function processDiscipline(disc) {
  const contentFile = path.join(CONTENT_DIR, disc.slug + '.json');
  let contentDb;

  if (fs.existsSync(contentFile)) {
    contentDb = JSON.parse(fs.readFileSync(contentFile, 'utf8'));
  } else {
    contentDb = {
      disc: disc.slug,
      label: disc.title,
      accent: disc.accent || '#e87a7a',
      accent2: disc.accent2 || '#f09090',
      accentDim: disc.accentDim || 'rgba(232,122,122,0.1)',
      accentHero: disc.accentHero || 'rgba(232,122,122,0.08)',
      pages: {}
    };
    newDiscs++;
  }

  const themeIcon = disc.icon || '📖';
  const themeCat = disc.cat || disc.title;

  // Discipline index page (only if new)
  if (!contentDb.pages['index']) {
    contentDb.pages['index'] = {
      type: 'discipline',
      title: disc.title,
      content: buildDiscContent(disc),
      nav: {
        sections: ['resume', 'domaines'],
        sectionTitles: { resume: disc.title, domaines: 'Les domaines' },
        siblings: [{ slug: disc.themeSlug || '', title: '← Accueil' }]
      },
      description: disc.description,
      domain: themeIcon + ' ' + disc.title,
      level: 'Tous niveaux',
      time: `⏱ ~${disc.hubs.length * 5}h de lecture`,
      heroDesc: disc.description,
      heroVariant: 'discipline',
      heroH1: `<em>${disc.title}</em>`,
      accentHero: disc.accentHero || 'rgba(232,122,122,0.08)'
    };

    // Add to index if not exists
    const discId = disc.slug + '/index';
    if (!existingIds.has(discId)) {
      coursesIndex.push({
        id: discId,
        t: disc.title,
        d: disc.description.substring(0, 200),
        tp: 'discipline',
        disc: disc.slug,
        icon: themeIcon,
        cat: themeCat,
        level: 'Tous niveaux',
        time: `⏱ ~${disc.hubs.length * 5}h de lecture`
      });
      existingIds.add(discId);
    }
  }

  // Process each hub
  disc.hubs.forEach(hub => {
    const hubSiblings = disc.hubs.map(h => ({
      slug: disc.slug + '/' + h.slug,
      title: h.title
    }));
    hubSiblings.unshift({ slug: disc.slug + '/index', title: '← ' + disc.title });

    // Hub page
    const hubKey = hub.slug;
    if (!contentDb.pages[hubKey] || contentDb.pages[hubKey].content.length < 100) {
      contentDb.pages[hubKey] = {
        type: 'hub',
        title: hub.title,
        content: buildHubContent(hub, disc.slug),
        nav: {
          sections: ['presentation', 'cours'],
          sectionTitles: { presentation: hub.title, cours: 'Les cours' },
          siblings: hubSiblings
        },
        description: hub.description,
        domain: themeIcon + ' ' + disc.title,
        level: hub.level || 'Débutant → Avancé',
        time: `⏱ ~${hub.lessons.length * 35} min`,
        heroDesc: hub.description,
        heroVariant: 'hub',
        heroH1: `<em>${hub.title}</em>`,
        accentHero: disc.accentHero || 'rgba(232,122,122,0.08)'
      };
      newHubs++;
    }

    // Hub in index
    const hubId = disc.slug + '/' + hub.slug;
    if (!existingIds.has(hubId)) {
      coursesIndex.push({
        id: hubId,
        t: hub.title,
        d: hub.description.substring(0, 200),
        tp: 'hub',
        disc: disc.slug,
        icon: themeIcon,
        cat: disc.title,
        hub: hub.slug,
        level: hub.level || 'Débutant → Avancé',
        time: `⏱ ~${hub.lessons.length * 35} min`,
        cards: hub.lessons.length * 12
      });
      existingIds.add(hubId);
    }

    // Lessons
    hub.lessons.forEach((lesson, li) => {
      const lessonSiblings = [{ slug: disc.slug + '/' + hub.slug, title: '← ' + hub.title }];
      hub.lessons.forEach(l => {
        lessonSiblings.push({
          slug: disc.slug + '/' + hub.slug + '/' + l.slug,
          title: l.title
        });
      });

      const pageKey = hub.slug + '/' + lesson.slug;
      if (!contentDb.pages[pageKey]) {
        contentDb.pages[pageKey] = {
          type: 'course',
          title: lesson.title,
          content: buildLessonContent(lesson),
          nav: {
            sections: ['introduction', 'cours', 'quiz'],
            sectionTitles: {
              introduction: 'Introduction',
              cours: 'Le cours',
              quiz: 'Quiz'
            },
            siblings: lessonSiblings
          },
          description: lesson.description,
          domain: themeIcon + ' ' + hub.title,
          level: lesson.level || 'Débutant → Intermédiaire',
          time: lesson.time || '⏱ ~35 min',
          heroDesc: lesson.description,
          heroVariant: 'course',
          heroH1: `<em>${lesson.title}</em>`,
          accentHero: disc.accentHero || 'rgba(232,122,122,0.08)'
        };
        newLessons++;
      }

      // Lesson in index
      const lessonId = disc.slug + '/' + hub.slug + '/' + lesson.slug;
      if (!existingIds.has(lessonId)) {
        const lessonCards = generateCards(lesson, disc.slug, hub.slug);
        lessonCards.forEach(c => cardsDb.push(c));
        newCards += lessonCards.length;

        coursesIndex.push({
          id: lessonId,
          t: lesson.title,
          d: lesson.description.substring(0, 200),
          tp: 'lesson',
          disc: disc.slug,
          icon: themeIcon,
          cat: disc.title + ' › ' + hub.title,
          hub: hub.slug,
          level: lesson.level || 'Débutant → Intermédiaire',
          time: lesson.time || '⏱ ~35 min',
          cards: lessonCards.length
        });
        existingIds.add(lessonId);
      }
    });
  });

  // Write content file
  fs.writeFileSync(contentFile, JSON.stringify(contentDb, null, 2), 'utf8');
}

// ═══════════════════════════════════════════════════════════════
//  CONTENT DATA — All new disciplines, hubs, and lessons
// ═══════════════════════════════════════════════════════════════

const DISCIPLINES = [];

// Helper to make lesson with defaults
function L(slug, title, description, intro, introHighlight, sections, quiz, definitions, memos) {
  return {
    slug, title, description, intro,
    introHighlight: introHighlight || '',
    intro2: '',
    sections: sections || [],
    quiz: quiz || [],
    definitions: definitions || [],
    memos: memos || []
  };
}

function Q(q, opts, correct, explanation) {
  return { q, opts, correct, explanation };
}

function S(title, paragraphs, hl) {
  return { title, paragraphs, highlight: hl || '' };
}

// ═══════════════════════════════════════════════════════════════
//  Load content definitions from separate files
// ═══════════════════════════════════════════════════════════════

const CONTENT_DEFS = path.join(__dirname, 'content-data');
if (fs.existsSync(CONTENT_DEFS)) {
  fs.readdirSync(CONTENT_DEFS).filter(f => f.endsWith('.js')).sort().forEach(f => {
    const mod = require(path.join(CONTENT_DEFS, f));
    if (Array.isArray(mod)) {
      mod.forEach(d => DISCIPLINES.push(d));
    } else if (mod && mod.slug) {
      DISCIPLINES.push(mod);
    }
  });
}

// ── Process all ──

DISCIPLINES.forEach(d => processDiscipline(d));

// ── Save ──

// Sort courses index
coursesIndex.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(ASSETS, 'courses-index.json'), JSON.stringify(coursesIndex, null, 2), 'utf8');
fs.writeFileSync(path.join(ASSETS, 'cards-db.json'), JSON.stringify(cardsDb), 'utf8');

console.log(`\n✅ Generation complete:`);
console.log(`   ${newDiscs} new disciplines`);
console.log(`   ${newHubs} new/updated hubs`);
console.log(`   ${newLessons} new lessons`);
console.log(`   ${newCards} new flashcards`);
console.log(`   Total index: ${coursesIndex.length} entries`);
console.log(`   Total cards: ${cardsDb.length}`);
