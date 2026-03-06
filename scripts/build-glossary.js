/**
 * build-glossary.js — Generate glossary.json from multiple sources
 *
 * Sources:
 *   1. cards-db.json     — definition, highlight, formula, memo flashcards
 *   2. courses-index.json — course titles + descriptions (lessons & hubs)
 *   3. content/*.json     — person detection (date patterns) + sibling cross-refs
 *
 * Output: assets/glossary.json (v2, with entry types)
 *
 * Usage: node scripts/build-glossary.js
 */

const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
const ASSETS = path.join(BASE, 'assets');
const CARDS_PATH = path.join(ASSETS, 'cards-db.json');
const COURSES_INDEX_PATH = path.join(ASSETS, 'courses-index.json');
const CONTENT_DIR = path.join(ASSETS, 'content');
const OUT_PATH = path.join(ASSETS, 'glossary.json');

// ── Helpers ──

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function slugFromSource(s) {
  // "cours/philosophie/antiquite/aristote.html" → "philosophie/antiquite/aristote"
  return s.replace(/^cours\//, '').replace(/\.html$/, '');
}

// Lazy content file loader with cache
const contentCache = {};
function loadContentFile(disc) {
  if (contentCache[disc] !== undefined) return contentCache[disc];
  const p = path.join(CONTENT_DIR, disc + '.json');
  contentCache[disc] = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf-8')) : null;
  return contentCache[disc];
}

// Boilerplate fronts to exclude (generic headers, not real terms)
const BOILERPLATE = new Set([
  'essentiel', "l'idee fondamentale", "l'idee fondamentale",
  'pour aller plus loin', 'repere', 'repere', 'question centrale',
  'le principe fondamental', 'principe fondamental', "regle d'or", "regle d'or",
  'point cle', 'point cle', 'methode', 'methode', 'principe',
  'attention', 'important', 'remarque', 'note', 'astuce', 'conseil',
  'rappel', 'resume', 'resume', 'definition', 'definition',
  'exemple', 'exemples', 'application', 'applications',
  'en bref', 'a retenir', 'a retenir', 'synthese', 'synthese',
  'regle', 'regle', 'formule', 'propriete', 'propriete',
  'analyse', 'modelisation', 'modelisation', 'calcul', 'verification', 'verification',
  'education', 'education',
  // Common single-word French terms that cause false matches cross-discipline
  'physique', 'structure', 'situation', 'classique', 'universel', 'convention',
  'tradition', 'pratique', 'technique', 'esthetique', 'esthetique', 'fonction',
  'relation', 'condition', 'position', 'question', 'probleme', 'probleme',
  'materiel', 'materiel', 'politique', 'economie', 'economie', 'programme',
  'systeme', 'systeme', 'histoire', 'religion', 'creation', 'creation',
  'produit', 'solution', 'distance', 'intensite', 'intensite', 'influence',
  'heredite', 'heredite', 'organisme', 'sommaire', 'commande', 'heritage',
  'heritage', 'mutation', 'fraction', 'equation', 'equation', 'inversion',
  'evolution', 'evolution', 'argument', 'croissance', 'variation',
  'operation', 'operation', 'extension', 'dimension', 'reference', 'reference',
  'harmonie', 'melodie', 'melodie', 'sequence', 'sequence', 'frequence', 'frequence',
  // Course titles that are too generic
  'introduction', 'conclusion', 'perspectives', 'fondements', 'generalites',
  'ressources', 'bibliographie', 'chronologie', 'index'
]);

// Person detection: <strong>Name</strong> (year–year [av. J.-C.])
const PERSON_RE = /<strong>([^<]{2,50})<\/strong>\s*\(\s*~?\s*\d{2,4}(?:\/\d{2,4})?\s*[–\-—]\s*~?\s*\d{2,4}(?:\/\d{2,4})?\s*(?:av\.\s*J\.\s*-?\s*C\.?)?\s*\)/;

// Words that indicate NOT a person (used in person detection)
const NON_PERSON_RE = /guerre|revolution|musique|baroque|classique|romantisme|realisme|naturalisme|moderne|periode|mouvement|ecole|decolonisation|impressionnisme|siecle/i;

// Common French words that are also parts of person names but too ambiguous
const PERSON_COMMON_WORDS = new Set(['premiere', 'seconde', 'grande', 'petit', 'monde',
  'francaise', 'francais', 'moderne', 'ancien', 'nouvelle', 'fontaine', 'pierre',
  'charles', 'michel', 'jean', 'emmanuel', 'rene', 'georg', 'friedrich', 'wilhelm',
  'edmund', 'sigmund', 'baptiste']);

// ── Main ──

console.log('\n  Building glossary (v2) from multiple sources...\n');

// Load data sources
if (!fs.existsSync(CARDS_PATH)) {
  console.error('  ✗ cards-db.json not found');
  process.exit(1);
}
const cards = JSON.parse(fs.readFileSync(CARDS_PATH, 'utf-8'));
console.log('  Cards loaded: ' + cards.length);

const coursesIndex = fs.existsSync(COURSES_INDEX_PATH)
  ? JSON.parse(fs.readFileSync(COURSES_INDEX_PATH, 'utf-8'))
  : [];
console.log('  Courses index loaded: ' + coursesIndex.length);

// ═══════════════════════════════════════════════════════════════════
// STEP 1: Extract from flashcards (definition + highlight + formula + memo)
// ═══════════════════════════════════════════════════════════════════

const candidates = cards.filter(c =>
  c.t === 'definition' || c.t === 'highlight' || c.t === 'formula' || c.t === 'memo'
);
console.log('  Candidates (definition + highlight + formula + memo): ' + candidates.length);

// Count disciplines per normalized front (detect cross-discipline boilerplate)
const frontDiscs = {};
candidates.forEach(c => {
  const key = normalize(c.f);
  if (!frontDiscs[key]) frontDiscs[key] = new Set();
  if (c.tg && c.tg[0]) frontDiscs[key].add(c.tg[0]);
});

// Build term entries with quality filters
const terms = {};
let skippedBoilerplate = 0, skippedLength = 0, skippedPhrase = 0;
let skippedMultiDisc = 0, skippedShortDef = 0;

candidates.forEach(c => {
  const front = c.f.trim();
  const back = c.b.trim();
  const key = normalize(front);

  if (BOILERPLATE.has(key)) { skippedBoilerplate++; return; }
  if (key.length < 4 || key.length > 60) { skippedLength++; return; }

  // Single-word terms must be at least 8 chars
  if (!key.includes(' ') && key.length < 8) { skippedLength++; return; }

  // Skip fronts appearing in >3 disciplines (generic terms)
  if (frontDiscs[key] && frontDiscs[key].size > 3) { skippedMultiDisc++; return; }

  // Skip long phrases starting with articles
  if (front.length > 35 && /^(les |la |le |l'|un |une |des |du |au |aux )/i.test(front)) {
    skippedPhrase++; return;
  }

  if (back.length < 15) { skippedShortDef++; return; }
  if (/\?$/.test(front)) { skippedPhrase++; return; }

  const slug = c.s ? slugFromSource(c.s) : '';
  const sourceTitle = c.st || '';
  const disc = (c.tg && c.tg[0]) || '';

  // Deduplicate: keep longest definition
  if (terms[key]) {
    if (back.length > terms[key].d.length) {
      terms[key].d = back.substring(0, 220);
    }
    if (slug && terms[key].s !== slug && !terms[key]._sources.includes(slug)) {
      terms[key]._sources.push(slug);
    }
    return;
  }

  terms[key] = {
    n: front,
    d: back.substring(0, 220),
    s: slug,
    st: sourceTitle,
    tg: disc,
    _sources: [slug],
    _cardType: c.t   // Track card type for later classification
  };
});

const cardTermCount = Object.keys(terms).length;
console.log('\n  Card-based terms: ' + cardTermCount);
console.log('    Skipped boilerplate: ' + skippedBoilerplate);
console.log('    Skipped length: ' + skippedLength);
console.log('    Skipped multi-discipline: ' + skippedMultiDisc);
console.log('    Skipped phrases/questions: ' + skippedPhrase);
console.log('    Skipped short definitions: ' + skippedShortDef);

// ═══════════════════════════════════════════════════════════════════
// STEP 2: Add course-based entries (lessons + hubs from courses-index)
// ═══════════════════════════════════════════════════════════════════

let addedFromCourses = 0, skippedCourseDupe = 0, skippedCourseQuality = 0;

for (const course of coursesIndex) {
  // Only lessons and hubs (skip themes/disciplines — too broad)
  if (course.tp !== 'lesson' && course.tp !== 'hub') continue;

  // Must have a meaningful description
  if (!course.d || course.d.length < 20) { skippedCourseQuality++; continue; }

  const key = normalize(course.t);
  if (BOILERPLATE.has(key)) continue;
  if (key.length < 4) { skippedCourseQuality++; continue; }

  // Card-based entries take priority (more detailed definitions)
  if (terms[key]) {
    // But enhance short card definitions with course descriptions
    if (terms[key].d.length < 40 && course.d.length > terms[key].d.length) {
      terms[key].d = course.d.substring(0, 220);
    }
    skippedCourseDupe++;
    continue;
  }

  const slug = course.id;
  const disc = course.disc || '';

  terms[key] = {
    n: course.t,
    d: course.d.substring(0, 220),
    s: slug,
    st: course.t,
    tg: disc,
    _sources: [slug],
    _cardType: null,
    _fromCourse: true,
    _courseType: course.tp  // 'lesson' or 'hub'
  };
  addedFromCourses++;
}

console.log('\n  Course-based terms added: ' + addedFromCourses);
console.log('    Skipped (card exists): ' + skippedCourseDupe);
console.log('    Skipped (quality): ' + skippedCourseQuality);

// ═══════════════════════════════════════════════════════════════════
// STEP 3: Classify entry types (person, domain, concept, formula, def)
// ═══════════════════════════════════════════════════════════════════

// 3a. Build person name set by scanning ALL content pages
const personNames = new Set();   // Full normalized names
const personWords = new Set();   // Individual name components (≥5 chars)

const contentFiles = fs.existsSync(CONTENT_DIR)
  ? fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.json'))
  : [];

for (const file of contentFiles) {
  const data = JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8'));
  if (!data.pages) continue;
  for (const pageKey in data.pages) {
    const first800 = data.pages[pageKey].content.substring(0, 800);
    const match = first800.match(PERSON_RE);
    if (match) {
      const fullName = normalize(match[1]);
      // Skip non-person matches (eras, movements, events)
      if (NON_PERSON_RE.test(match[1])) continue;
      if (BOILERPLATE.has(fullName)) continue;

      personNames.add(fullName);
      // Also add individual name words (≥5 chars) for partial matching
      // Skip common French words that aren't distinctive name parts
      fullName.split(/\s+/).forEach(w => {
        if (w.length >= 5 && !PERSON_COMMON_WORDS.has(w)) personWords.add(w);
      });
    }
  }
}
console.log('\n  Person names detected from content: ' + personNames.size);

// 3b. Classify all entries
const typeCounts = { p: 0, d: 0, c: 0, f: 0, def: 0 };

for (const key in terms) {
  const entry = terms[key];

  // Hub pages → domain
  if (entry._courseType === 'hub') {
    entry.tp = 'd';
    typeCounts.d++;
    continue;
  }

  // Formula cards → formula
  if (entry._cardType === 'formula') {
    entry.tp = 'f';
    typeCounts.f++;
    continue;
  }

  // Person detection: check if entry name matches a known person name
  if (!NON_PERSON_RE.test(key)) {  // test against normalized key (no accents)
    let isPerson = false;

    // Full name match (e.g., "aristote", "rene descartes")
    if (personNames.has(key)) {
      isPerson = true;
    }
    // Single-word match against person name components (≥5 chars)
    else if (!key.includes(' ') && key.length >= 5 && personWords.has(key)) {
      isPerson = true;
    }
    // Check if any person full name contains entry key as a word part
    // e.g., "kant" matches "emmanuel kant", "epicure" matches "epicure"
    else if (!key.includes(' ') && key.length >= 4 && !PERSON_COMMON_WORDS.has(key)) {
      for (const pn of personNames) {
        if (pn.split(/\s+/).includes(key)) {
          isPerson = true;
          break;
        }
      }
    }

    if (isPerson) {
      entry.tp = 'p';
      typeCounts.p++;
      continue;
    }
  }

  // Course lessons → concept, card entries → definition
  if (entry._fromCourse) {
    entry.tp = 'c';
    typeCounts.c++;
  } else {
    entry.tp = 'def';
    typeCounts.def++;
  }
}

console.log('\n  Type classification:');
console.log('    Personnages (p): ' + typeCounts.p);
console.log('    Domaines (d): ' + typeCounts.d);
console.log('    Concepts (c): ' + typeCounts.c);
console.log('    Formules (f): ' + typeCounts.f);
console.log('    Definitions (def): ' + typeCounts.def);

// ═══════════════════════════════════════════════════════════════════
// STEP 4: Build cross-references (definition text + sibling courses)
// ═══════════════════════════════════════════════════════════════════

const termKeys = Object.keys(terms);
console.log('\n  Total terms: ' + termKeys.length);
console.log('  Building cross-references...');

// 4a. Definition-based cross-refs (existing logic)
const sortedKeys = termKeys.slice().sort((a, b) => b.length - a.length);
let defRefs = 0;

for (const key of termKeys) {
  const entry = terms[key];
  const defNorm = normalize(entry.d);
  const related = [];

  for (const otherKey of sortedKeys) {
    if (otherKey === key) continue;
    if (otherKey.length < 7) continue;
    if (related.length >= 5) break;

    const idx = defNorm.indexOf(otherKey);
    if (idx !== -1) {
      const before = idx > 0 ? defNorm[idx - 1] : ' ';
      const after = idx + otherKey.length < defNorm.length ? defNorm[idx + otherKey.length] : ' ';
      if (/\W/.test(before) && /\W/.test(after)) {
        related.push(otherKey);
      }
    }
  }

  if (related.length > 0) {
    entry.r = related;
    defRefs += related.length;
  }
}

// 4b. Sibling-based cross-refs from content files
let sibRefs = 0;

for (const key of termKeys) {
  const entry = terms[key];
  if (!entry.s) continue;

  const parts = entry.s.split('/');
  const disc = parts[0];
  const pageKey = parts.slice(1).join('/');

  const contentFile = loadContentFile(disc);
  if (!contentFile || !contentFile.pages || !contentFile.pages[pageKey]) continue;

  const page = contentFile.pages[pageKey];
  if (!page.nav || !page.nav.siblings) continue;

  if (!entry.r) entry.r = [];

  for (const sib of page.nav.siblings) {
    if (entry.r.length >= 5) break;

    // Strip leading arrow ("← Antiquité" → "Antiquité")
    const sibTitle = sib.title.replace(/^[←→]\s*/, '');
    const sibKey = normalize(sibTitle);

    // Only add if sibling exists in glossary and isn't already referenced
    if (terms[sibKey] && sibKey !== key && !entry.r.includes(sibKey)) {
      entry.r.push(sibKey);
      sibRefs++;
    }
  }
}

const totalRefs = defRefs + sibRefs;
console.log('  Definition cross-refs: ' + defRefs);
console.log('  Sibling cross-refs: ' + sibRefs);
console.log('  Total cross-refs: ' + totalRefs);

// ═══════════════════════════════════════════════════════════════════
// STEP 5: Clean up temp fields and write output
// ═══════════════════════════════════════════════════════════════════

for (const key of termKeys) {
  delete terms[key]._sources;
  delete terms[key]._cardType;
  delete terms[key]._fromCourse;
  delete terms[key]._courseType;
}

const output = {
  v: 2,
  count: termKeys.length,
  terms: terms
};

fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
const fileSize = (fs.statSync(OUT_PATH).size / 1024).toFixed(1);

// Stats by discipline
const discCounts = {};
for (const key of termKeys) {
  const disc = terms[key].tg || 'unknown';
  discCounts[disc] = (discCounts[disc] || 0) + 1;
}

console.log('\n  ═══ Glossary Report (v2) ═══\n');
console.log('  ✓ ' + termKeys.length + ' terms (' + cardTermCount + ' cards + ' + addedFromCourses + ' courses)');
console.log('  ✓ ' + totalRefs + ' cross-references (' + defRefs + ' def + ' + sibRefs + ' sibling)');
console.log('  ✓ Types: ' + typeCounts.p + ' person, ' + typeCounts.d + ' domain, ' + typeCounts.c + ' concept, ' + typeCounts.f + ' formula, ' + typeCounts.def + ' definition');
console.log('  ✓ glossary.json: ' + fileSize + ' KB\n');
console.log('  By discipline:');
Object.entries(discCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([disc, count]) => {
    console.log('    ' + disc + ': ' + count + ' terms');
  });

console.log('\n  Done!\n');
