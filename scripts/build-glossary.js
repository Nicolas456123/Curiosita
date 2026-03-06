/**
 * build-glossary.js — Generate glossary.json from cards-db.json
 *
 * Reads the flashcard database and extracts quality term/definition pairs
 * for the runtime glossary annotation system.
 *
 * Usage: node scripts/build-glossary.js
 * Output: assets/glossary.json
 */

const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
const ASSETS = path.join(BASE, 'assets');
const CARDS_PATH = path.join(ASSETS, 'cards-db.json');
const OUT_PATH = path.join(ASSETS, 'glossary.json');

// ── Helpers ──

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function slugFromSource(s) {
  // "cours/philosophie/antiquite/aristote.html" → "philosophie/antiquite/aristote"
  return s.replace(/^cours\//, '').replace(/\.html$/, '');
}

// Boilerplate fronts to exclude (generic headers, not real terms)
const BOILERPLATE = new Set([
  'essentiel', "l'idee fondamentale", "l'idée fondamentale",
  'pour aller plus loin', 'repere', 'repère', 'question centrale',
  'le principe fondamental', 'principe fondamental', "regle d'or", "règle d'or",
  'point cle', 'point clé', 'methode', 'méthode', 'principe',
  'attention', 'important', 'remarque', 'note', 'astuce', 'conseil',
  'rappel', 'resume', 'résumé', 'definition', 'définition',
  'exemple', 'exemples', 'application', 'applications',
  'en bref', 'a retenir', 'à retenir', 'synthese', 'synthèse',
  'regle', 'règle', 'formule', 'propriete', 'propriété',
  'analyse', 'modelisation', 'modélisation', 'calcul', 'verification', 'vérification',
  'education', 'éducation',
  // Common single-word French terms that cause false matches cross-discipline
  'physique', 'structure', 'situation', 'classique', 'universel', 'convention',
  'tradition', 'pratique', 'technique', 'esthetique', 'esthétique', 'fonction',
  'relation', 'condition', 'position', 'question', 'probleme', 'problème',
  'materiel', 'matériel', 'politique', 'economie', 'économie', 'programme',
  'systeme', 'système', 'histoire', 'religion', 'creation', 'création',
  'produit', 'solution', 'distance', 'intensite', 'intensité', 'influence',
  'heredite', 'hérédité', 'organisme', 'sommaire', 'commande', 'heritage',
  'héritage', 'mutation', 'fraction', 'equation', 'équation', 'inversion',
  'evolution', 'évolution', 'argument', 'croissance', 'variation',
  'operation', 'opération', 'extension', 'dimension', 'reference', 'référence',
  'harmonie', 'melodie', 'mélodie', 'sequence', 'séquence', 'frequence', 'fréquence'
]);

// ── Main ──

console.log('\n  Building glossary from cards-db.json...\n');

if (!fs.existsSync(CARDS_PATH)) {
  console.error('  ✗ cards-db.json not found at ' + CARDS_PATH);
  process.exit(1);
}

const cards = JSON.parse(fs.readFileSync(CARDS_PATH, 'utf-8'));
console.log('  Cards loaded: ' + cards.length);

// Step 1: Filter to definition + highlight + formula types
const candidates = cards.filter(c =>
  c.t === 'definition' || c.t === 'highlight' || c.t === 'formula'
);
console.log('  Candidates (definition + highlight + formula): ' + candidates.length);

// Step 2: Count disciplines per normalized front (detect boilerplate)
const frontDiscs = {};
candidates.forEach(c => {
  const key = normalize(c.f);
  if (!frontDiscs[key]) frontDiscs[key] = new Set();
  if (c.tg && c.tg[0]) frontDiscs[key].add(c.tg[0]);
});

// Step 3: Build term entries with quality filters
const terms = {};
let skippedBoilerplate = 0, skippedLength = 0, skippedPhrase = 0, skippedMultiDisc = 0, skippedShortDef = 0;

candidates.forEach(c => {
  const front = c.f.trim();
  const back = c.b.trim();
  const key = normalize(front);

  // Skip boilerplate
  if (BOILERPLATE.has(key)) { skippedBoilerplate++; return; }

  // Skip too short or too long
  if (key.length < 4 || key.length > 60) { skippedLength++; return; }

  // Single-word terms must be at least 8 chars (avoid common French words)
  var isSingleWord = !key.includes(' ');
  if (isSingleWord && key.length < 8) { skippedLength++; return; }

  // Skip fronts appearing in >3 disciplines (generic terms)
  if (frontDiscs[key] && frontDiscs[key].size > 3) { skippedMultiDisc++; return; }

  // Skip long phrases starting with articles (not real terms)
  if (front.length > 35 && /^(les |la |le |l'|un |une |des |du |au |aux )/i.test(front)) {
    skippedPhrase++;
    return;
  }

  // Skip if definition is too short
  if (back.length < 15) { skippedShortDef++; return; }

  // Skip fronts that look like questions
  if (/\?$/.test(front)) { skippedPhrase++; return; }

  // Build slug from source
  const slug = c.s ? slugFromSource(c.s) : '';
  const sourceTitle = c.st || '';
  const disc = (c.tg && c.tg[0]) || '';

  // Deduplicate: keep longest definition
  if (terms[key]) {
    if (back.length > terms[key].d.length) {
      terms[key].d = back.substring(0, 220);
    }
    // Add alternative source if different
    if (slug && terms[key].s !== slug && !terms[key]._sources.includes(slug)) {
      terms[key]._sources.push(slug);
    }
    return;
  }

  terms[key] = {
    n: front,                       // Display name
    d: back.substring(0, 220),      // Definition (max 220 chars)
    s: slug,                        // Primary source slug
    st: sourceTitle,                // Source page title
    tg: disc,                       // Primary discipline tag
    _sources: [slug]                // Temp: all sources (for cross-ref)
  };
});

console.log('\n  Filtering:');
console.log('    Skipped boilerplate: ' + skippedBoilerplate);
console.log('    Skipped length (<4 or >60): ' + skippedLength);
console.log('    Skipped multi-discipline (>5): ' + skippedMultiDisc);
console.log('    Skipped phrases/questions: ' + skippedPhrase);
console.log('    Skipped short definitions (<15): ' + skippedShortDef);

// Step 4: Build cross-references (related terms)
const termKeys = Object.keys(terms);
console.log('\n  Terms after filtering: ' + termKeys.length);
console.log('  Building cross-references...');

// Sort by length descending so longer terms match first
const sortedKeys = termKeys.slice().sort((a, b) => b.length - a.length);

let totalRefs = 0;
for (const key of termKeys) {
  const entry = terms[key];
  const defNorm = normalize(entry.d);
  const related = [];

  for (const otherKey of sortedKeys) {
    if (otherKey === key) continue;
    if (otherKey.length < 7) continue; // Skip short terms for cross-ref (avoid generic words)
    if (related.length >= 5) break;

    // Check if the other term appears in this definition
    const idx = defNorm.indexOf(otherKey);
    if (idx !== -1) {
      // Verify word boundary
      const before = idx > 0 ? defNorm[idx - 1] : ' ';
      const after = idx + otherKey.length < defNorm.length ? defNorm[idx + otherKey.length] : ' ';
      if (/\W/.test(before) && /\W/.test(after)) {
        related.push(otherKey);
      }
    }
  }

  if (related.length > 0) {
    entry.r = related;
    totalRefs += related.length;
  }

  // Clean up temp field
  delete entry._sources;
}

console.log('  Cross-references found: ' + totalRefs);

// Step 5: Write output
const output = {
  v: 1,
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

console.log('\n  ═══ Glossary Report ═══\n');
console.log('  ✓ ' + termKeys.length + ' terms extracted');
console.log('  ✓ ' + totalRefs + ' cross-references');
console.log('  ✓ glossary.json: ' + fileSize + ' KB\n');
console.log('  By discipline:');
Object.entries(discCounts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([disc, count]) => {
    console.log('    ' + disc + ': ' + count + ' terms');
  });

console.log('\n  Done!\n');
