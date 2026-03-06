#!/usr/bin/env node
/**
 * audit-coverage.js — Compare current courses-index.json against target-structure.json
 * Outputs a coverage report with percentages per theme, discipline, and overall.
 *
 * Usage: npm run audit
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const index = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/courses-index.json'), 'utf8'));
const target = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/target-structure.json'), 'utf8'));

// ── Build current state maps ──

const currentLessons = {};   // disc → hub → count
const currentHubs = {};      // disc → Set of hub slugs
const currentDiscs = new Set();
const totalCards = { count: 0 };

index.forEach(entry => {
  if (!entry.disc || entry.disc === '_themes') return;

  if (entry.tp === 'lesson') {
    const parts = entry.id.split('/');
    const disc = parts[0];
    const hub = parts[1];
    if (!currentLessons[disc]) currentLessons[disc] = {};
    if (!currentLessons[disc][hub]) currentLessons[disc][hub] = 0;
    currentLessons[disc][hub]++;
    totalCards.count += (entry.cards || 0);
  }

  if (entry.tp === 'hub') {
    const disc = entry.disc;
    if (!currentHubs[disc]) currentHubs[disc] = new Set();
    currentHubs[disc].add(entry.hub);
  }

  if (entry.tp === 'discipline') {
    currentDiscs.add(entry.disc);
  }
});

// ── ANSI colors ──

const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  white: '\x1b[37m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgRed: '\x1b[41m',
};

function pct(current, total) {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
}

function bar(current, total, width) {
  width = width || 20;
  var p = total > 0 ? current / total : 0;
  var filled = Math.round(p * width);
  var empty = width - filled;
  var color = p >= 0.8 ? C.green : p >= 0.4 ? C.yellow : C.red;
  return color + '█'.repeat(filled) + C.dim + '░'.repeat(empty) + C.reset;
}

function padR(str, len) {
  while (str.length < len) str += ' ';
  return str;
}

function padL(str, len) {
  while (str.length < len) str = ' ' + str;
  return str;
}

// ── Analyze ──

var globalDisc = { current: 0, target: 0 };
var globalHubs = { current: 0, target: 0 };
var globalLessons = { current: 0, target: 0 };
var missingDiscs = [];
var missingHubs = [];
var emptyHubs = [];

console.log('');
console.log(C.bold + '╔══════════════════════════════════════════════════════════════════╗' + C.reset);
console.log(C.bold + '║         CURIOSITA — Rapport de couverture encyclopédique        ║' + C.reset);
console.log(C.bold + '╚══════════════════════════════════════════════════════════════════╝' + C.reset);
console.log('');

target.themes.forEach(function (theme) {
  var themeLessons = { current: 0, target: 0 };
  var themeHubs = { current: 0, target: 0 };
  var themeDiscs = { current: 0, target: 0 };

  console.log(C.bold + C.cyan + theme.icon + ' ' + theme.name + C.reset);
  console.log(C.dim + '─'.repeat(60) + C.reset);

  theme.disciplines.forEach(function (disc) {
    themeDiscs.target++;
    globalDisc.target++;

    var discExists = currentDiscs.has(disc.disc);
    // Python merged into informatique — check if python exists
    if (disc.disc === 'informatique') {
      discExists = currentDiscs.has('informatique') || currentDiscs.has('python');
    }

    if (discExists || disc.status === 'existing' || disc.status === 'reorganized') {
      themeDiscs.current++;
      globalDisc.current++;
    } else {
      missingDiscs.push({ name: disc.name, theme: theme.name });
    }

    var discCurrentLessons = 0;
    var discTargetLessons = 0;
    var discCurrentHubs = 0;

    disc.hubs.forEach(function (hub) {
      themeHubs.target++;
      globalHubs.target++;
      discTargetLessons += hub.lessons;

      // Check if hub exists and has lessons
      var hubDisc = disc.disc;
      // For python hubs absorbed into informatique
      if (disc.disc === 'informatique' && hub.hub === 'python') {
        // Check python discipline hubs
        var pyLessons = 0;
        if (currentLessons['python']) {
          Object.values(currentLessons['python']).forEach(function (c) { pyLessons += c; });
        }
        if (pyLessons > 0) {
          discCurrentHubs++;
          themeHubs.current++;
          globalHubs.current++;
          discCurrentLessons += pyLessons;
        } else if (hub.status !== 'new') {
          emptyHubs.push({ disc: disc.name, hub: hub.name });
        }
        return;
      }

      var hubLessons = (currentLessons[hubDisc] && currentLessons[hubDisc][hub.hub]) || 0;
      if (hubLessons > 0) {
        discCurrentHubs++;
        themeHubs.current++;
        globalHubs.current++;
        discCurrentLessons += hubLessons;
      } else if (hub.status === 'empty') {
        emptyHubs.push({ disc: disc.name, hub: hub.name });
      } else if (hub.status === 'existing') {
        // Hub exists in index but has 0 lessons (shouldn't happen normally)
        themeHubs.current++;
        globalHubs.current++;
      } else if (hub.status === 'new') {
        missingHubs.push({ disc: disc.name, hub: hub.name });
      }
    });

    themeLessons.current += discCurrentLessons;
    themeLessons.target += discTargetLessons;
    globalLessons.current += discCurrentLessons;
    globalLessons.target += discTargetLessons;

    var statusIcon = disc.status === 'new' ? C.red + '✗' + C.reset
      : disc.status === 'reorganized' ? C.yellow + '↻' + C.reset
        : C.green + '✓' + C.reset;

    var p = pct(discCurrentLessons, discTargetLessons);
    console.log(
      '  ' + statusIcon + ' ' +
      padR(disc.name, 32) +
      bar(discCurrentLessons, discTargetLessons, 15) + ' ' +
      padL(String(discCurrentLessons), 3) + '/' + padL(String(discTargetLessons), 3) +
      ' pages  ' +
      padL(String(discCurrentHubs), 2) + '/' + padL(String(disc.hubs.length), 2) + ' hubs' +
      '  ' + C.bold + padL(String(p) + '%', 4) + C.reset
    );
  });

  var tp = pct(themeLessons.current, themeLessons.target);
  console.log(
    C.dim + '  ' + padR('', 34) +
    'Total: ' +
    padL(String(themeLessons.current), 3) + '/' + padL(String(themeLessons.target), 3) + ' pages  ' +
    padL(String(themeHubs.current), 2) + '/' + padL(String(themeHubs.target), 2) + ' hubs  ' +
    C.bold + padL(String(tp) + '%', 4) + C.reset
  );
  console.log('');
});

// ── Global summary ──

console.log(C.bold + '══════════════════════════════════════════════════════════════════' + C.reset);
console.log(C.bold + '  RÉSUMÉ GLOBAL' + C.reset);
console.log(C.bold + '══════════════════════════════════════════════════════════════════' + C.reset);
console.log('');

var metrics = [
  { label: 'Disciplines', current: globalDisc.current, target: globalDisc.target },
  { label: 'Hubs', current: globalHubs.current, target: globalHubs.target },
  { label: 'Pages', current: globalLessons.current, target: globalLessons.target },
  { label: 'Flashcards', current: totalCards.count, target: target.targets.cards },
];

metrics.forEach(function (m) {
  var p = pct(m.current, m.target);
  console.log(
    '  ' + padR(m.label, 14) +
    bar(m.current, m.target, 25) + ' ' +
    padL(String(m.current), 6) + ' / ' + padL(String(m.target), 6) +
    '  ' + C.bold + padL(String(p) + '%', 5) + C.reset
  );
});

var overallPct = pct(globalLessons.current, globalLessons.target);
console.log('');
console.log(C.bold + '  Complétion globale : ' +
  (overallPct >= 80 ? C.green : overallPct >= 40 ? C.yellow : C.red) +
  overallPct + '%' + C.reset);
console.log('');

// ── Missing items ──

if (missingDiscs.length > 0) {
  console.log(C.bold + C.red + '  Disciplines manquantes (' + missingDiscs.length + ') :' + C.reset);
  missingDiscs.forEach(function (d) {
    console.log('    • ' + d.name + C.dim + ' (' + d.theme + ')' + C.reset);
  });
  console.log('');
}

if (emptyHubs.length > 0) {
  console.log(C.bold + C.yellow + '  Hubs vides — contenu à créer (' + emptyHubs.length + ') :' + C.reset);
  emptyHubs.forEach(function (h) {
    console.log('    • ' + h.disc + ' › ' + h.hub);
  });
  console.log('');
}

// Summary counts for new hubs
var newHubCount = missingHubs.length;
if (newHubCount > 0) {
  console.log(C.dim + '  ' + newHubCount + ' nouveaux hubs à créer pour atteindre 100%' + C.reset);
  console.log(C.dim + '  ' + (globalLessons.target - globalLessons.current) + ' nouvelles pages nécessaires' + C.reset);
  console.log(C.dim + '  ' + (target.targets.cards - totalCards.count) + ' nouvelles flashcards nécessaires' + C.reset);
}

console.log('');
