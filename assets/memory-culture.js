// ══════════════════════════════════════════════════════
//  Curiosità — Memory Culture & Knowledge Module
//  Interactive quizzes for fun & useful knowledge
//  10 domains: multiplication, presidents, greek, solar,
//  roman, proverbs, inventions, units, expressions, records
// ══════════════════════════════════════════════════════

var MemoryCulture = (function () {
  'use strict';

  // ── Constants ──
  var LS_KEY = 'curiosita_memculture';
  var MASTERY_MAX = 3;
  var QUIZ_LENGTH = 10;
  var SPRINT_DURATION = 60;
  var CSS_INJECTED = false;

  // ── State ──
  var state = {
    mastery: {},   // { domainKey: { itemIndex: level } }
    history: []    // { type, score, total, time, date }
  };

  // ══════════════════════════════════════════
  //  DATA — 10 Knowledge Domains
  // ══════════════════════════════════════════

  // Helper: generate multiplication table data
  function generateMultiplicationData() {
    var items = [];
    var seen = {};
    for (var a = 2; a <= 12; a++) {
      for (var b = a; b <= 12; b++) {
        if (a === 1 || b === 1 || a === 10 || b === 10) continue;
        var key = a + 'x' + b;
        if (!seen[key]) {
          seen[key] = true;
          items.push({ a: a, b: b, product: a * b });
        }
      }
    }
    return items;
  }

  var DOMAINS = {
    multiplication: {
      key: 'multiplication',
      name: 'Tables de multiplication',
      icon: '\u00D7',
      description: '60 produits essentiels (2\u00D72 \u00E0 12\u00D712)',
      filterKey: null,
      data: generateMultiplicationData(),
      getQuestion: function (item) { return item.a + ' \u00D7 ' + item.b + ' = ?'; },
      getAnswer: function (item) { return String(item.product); },
      getDistractors: function (item, allData) {
        var correct = item.product;
        var distractors = [];
        var offsets = [-2, -1, 1, 2, -3, 3, -item.a, item.a, -item.b, item.b];
        for (var i = 0; i < offsets.length && distractors.length < 8; i++) {
          var val = correct + offsets[i];
          if (val > 0 && val !== correct && distractors.indexOf(String(val)) === -1) {
            distractors.push(String(val));
          }
        }
        return distractors;
      },
      formatLearn: function (item) {
        return '<strong>' + item.a + ' \u00D7 ' + item.b + '</strong> = <span style="color:var(--accent)">' + item.product + '</span>';
      }
    },

    presidents: {
      key: 'presidents',
      name: 'Pr\u00E9sidents fran\u00E7ais',
      icon: '\uD83C\uDDEB\uD83C\uDDF7',
      description: 'Les 8 pr\u00E9sidents de la Ve R\u00E9publique',
      filterKey: null,
      data: [
        { name: 'Charles de Gaulle', years: '1959\u20131969', number: 1, fact: 'Fondateur de la Ve R\u00E9publique' },
        { name: 'Georges Pompidou', years: '1969\u20131974', number: 2, fact: 'Centre Pompidou porte son nom' },
        { name: 'Val\u00E9ry Giscard d\'Estaing', years: '1974\u20131981', number: 3, fact: 'Majorit\u00E9 \u00E0 18 ans, IVG' },
        { name: 'Fran\u00E7ois Mitterrand', years: '1981\u20131995', number: 4, fact: 'Abolition peine de mort, 2 septennats' },
        { name: 'Jacques Chirac', years: '1995\u20132007', number: 5, fact: 'Dissolution 1997, quinquennat' },
        { name: 'Nicolas Sarkozy', years: '2007\u20132012', number: 6, fact: 'Trait\u00E9 de Lisbonne' },
        { name: 'Fran\u00E7ois Hollande', years: '2012\u20132017', number: 7, fact: 'Mariage pour tous' },
        { name: 'Emmanuel Macron', years: '2017\u20132027', number: 8, fact: 'Plus jeune pr\u00E9sident \u00E9lu' }
      ],
      getQuestion: function (item) { return 'Pr\u00E9sident n\u00B0' + item.number + ' : ' + item.name; },
      getAnswer: function (item) { return item.years; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.years !== item.years; })
          .map(function (d) { return d.years; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.number + '. ' + item.name + '</strong> <span class="mc-muted">(' + item.years + ')</span><br><span class="mc-muted">' + item.fact + '</span>';
      }
    },

    greek: {
      key: 'greek',
      name: 'Alphabet grec',
      icon: '\u03A9',
      description: '24 lettres de l\'alphabet grec',
      filterKey: null,
      data: [
        { letter: '\u0391 \u03B1', name: 'Alpha', usage: 'Angle, premier' },
        { letter: '\u0392 \u03B2', name: 'B\u00EAta', usage: 'Deuxi\u00E8me, version test' },
        { letter: '\u0393 \u03B3', name: 'Gamma', usage: 'Rayonnement, troisi\u00E8me' },
        { letter: '\u0394 \u03B4', name: 'Delta', usage: 'Variation, diff\u00E9rence' },
        { letter: '\u0395 \u03B5', name: 'Epsilon', usage: 'Tr\u00E8s petit nombre' },
        { letter: '\u0396 \u03B6', name: 'Z\u00EAta', usage: 'Fonction de Riemann' },
        { letter: '\u0397 \u03B7', name: '\u00CAta', usage: 'Rendement' },
        { letter: '\u0398 \u03B8', name: 'Th\u00EAta', usage: 'Angle' },
        { letter: '\u0399 \u03B9', name: 'Iota', usage: 'Tr\u00E8s petite chose' },
        { letter: '\u039A \u03BA', name: 'Kappa', usage: 'Constante' },
        { letter: '\u039B \u03BB', name: 'Lambda', usage: 'Longueur d\'onde' },
        { letter: '\u039C \u03BC', name: 'Mu', usage: 'Micro-, moyenne' },
        { letter: '\u039D \u03BD', name: 'Nu', usage: 'Fr\u00E9quence' },
        { letter: '\u039E \u03BE', name: 'Xi', usage: 'Variable' },
        { letter: '\u039F \u03BF', name: 'Omicron', usage: 'Petit O' },
        { letter: '\u03A0 \u03C0', name: 'Pi', usage: '3.14159..., produit' },
        { letter: '\u03A1 \u03C1', name: 'Rh\u00F4', usage: 'Densit\u00E9, r\u00E9sistivit\u00E9' },
        { letter: '\u03A3 \u03C3/\u03C2', name: 'Sigma', usage: 'Somme, \u00E9cart-type' },
        { letter: '\u03A4 \u03C4', name: 'Tau', usage: 'Constante de temps' },
        { letter: '\u03A5 \u03C5', name: 'Upsilon', usage: 'Variable' },
        { letter: '\u03A6 \u03C6', name: 'Phi', usage: 'Nombre d\'or, flux' },
        { letter: '\u03A7 \u03C7', name: 'Chi', usage: 'Test du chi\u00B2, distribution' },
        { letter: '\u03A8 \u03C8', name: 'Psi', usage: 'Fonction d\'onde, psychologie' },
        { letter: '\u03A9 \u03C9', name: 'Om\u00E9ga', usage: 'Ohm, dernier' }
      ],
      getQuestion: function (item) { return item.letter; },
      getAnswer: function (item) { return item.name; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.name !== item.name; })
          .map(function (d) { return d.name; });
      },
      questionClass: 'mc-greek-big',
      formatLearn: function (item) {
        return '<span style="font-size:1.6rem;font-family:serif">' + item.letter + '</span> <strong>' + item.name + '</strong> \u2014 <span class="mc-muted">' + item.usage + '</span>';
      }
    },

    solar: {
      key: 'solar',
      name: 'Syst\u00E8me solaire',
      icon: '\uD83E\uDE90',
      description: '8 plan\u00E8tes et leurs caract\u00E9ristiques',
      filterKey: null,
      data: [
        { name: 'Mercure', order: 1, distance: '58 M km', diameter: '4 879 km', fact: 'Plus petite plan\u00E8te, pas d\'atmosph\u00E8re' },
        { name: 'V\u00E9nus', order: 2, distance: '108 M km', diameter: '12 104 km', fact: 'Plus chaude (462\u00B0C), rotation invers\u00E9e' },
        { name: 'Terre', order: 3, distance: '150 M km', diameter: '12 756 km', fact: 'Seule plan\u00E8te avec vie connue' },
        { name: 'Mars', order: 4, distance: '228 M km', diameter: '6 792 km', fact: 'Plan\u00E8te rouge, Olympus Mons' },
        { name: 'Jupiter', order: 5, distance: '778 M km', diameter: '142 984 km', fact: 'Plus grande, Grande Tache Rouge' },
        { name: 'Saturne', order: 6, distance: '1 427 M km', diameter: '120 536 km', fact: 'Anneaux spectaculaires' },
        { name: 'Uranus', order: 7, distance: '2 871 M km', diameter: '51 118 km', fact: 'Axe inclin\u00E9 \u00E0 98\u00B0' },
        { name: 'Neptune', order: 8, distance: '4 495 M km', diameter: '49 528 km', fact: 'Vents les plus rapides (2 100 km/h)' }
      ],
      getQuestion: function (item) { return 'Plan\u00E8te n\u00B0' + item.order + ' ?'; },
      getAnswer: function (item) { return item.name; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.name !== item.name; })
          .map(function (d) { return d.name; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.order + '. ' + item.name + '</strong> \u2014 ' + item.distance + ', \u00F8 ' + item.diameter + '<br><span class="mc-muted">' + item.fact + '</span>';
      }
    },

    roman: {
      key: 'roman',
      name: 'Chiffres romains',
      icon: 'VII',
      description: '30 conversions essentielles',
      filterKey: null,
      data: [
        { arabic: 4, roman: 'IV' },
        { arabic: 9, roman: 'IX' },
        { arabic: 14, roman: 'XIV' },
        { arabic: 19, roman: 'XIX' },
        { arabic: 24, roman: 'XXIV' },
        { arabic: 40, roman: 'XL' },
        { arabic: 49, roman: 'XLIX' },
        { arabic: 50, roman: 'L' },
        { arabic: 76, roman: 'LXXVI' },
        { arabic: 90, roman: 'XC' },
        { arabic: 99, roman: 'XCIX' },
        { arabic: 100, roman: 'C' },
        { arabic: 144, roman: 'CXLIV' },
        { arabic: 250, roman: 'CCL' },
        { arabic: 400, roman: 'CD' },
        { arabic: 500, roman: 'D' },
        { arabic: 666, roman: 'DCLXVI' },
        { arabic: 900, roman: 'CM' },
        { arabic: 1000, roman: 'M' },
        { arabic: 1066, roman: 'MLXVI' },
        { arabic: 1453, roman: 'MCDLIII' },
        { arabic: 1492, roman: 'MCDXCII' },
        { arabic: 1515, roman: 'MDXV' },
        { arabic: 1789, roman: 'MDCCLXXXIX' },
        { arabic: 1815, roman: 'MDCCCXV' },
        { arabic: 1900, roman: 'MCM' },
        { arabic: 1918, roman: 'MCMXVIII' },
        { arabic: 1945, roman: 'MCMXLV' },
        { arabic: 2000, roman: 'MM' },
        { arabic: 2024, roman: 'MMXXIV' }
      ],
      getQuestion: function (item) { return String(item.arabic) + ' = ?'; },
      getAnswer: function (item) { return item.roman; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.roman !== item.roman; })
          .map(function (d) { return d.roman; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.arabic + '</strong> = <span style="color:var(--accent);font-family:\'Playfair Display\',serif">' + item.roman + '</span>';
      }
    },

    proverbs: {
      key: 'proverbs',
      name: 'Proverbes fran\u00E7ais',
      icon: '\uD83D\uDCDC',
      description: '40 proverbes et leur signification',
      filterKey: null,
      data: [
        { start: 'Qui s\u00E8me le vent...', end: 'r\u00E9colte la temp\u00EAte', meaning: 'Les mauvaises actions ont des cons\u00E9quences' },
        { start: 'Pierre qui roule...', end: 'n\'amasse pas mousse', meaning: 'L\'instabilit\u00E9 emp\u00EAche de s\'enrichir' },
        { start: 'L\'habit ne fait pas...', end: 'le moine', meaning: 'Les apparences sont trompeuses' },
        { start: 'Mieux vaut tard...', end: 'que jamais', meaning: 'Il vaut mieux agir en retard que pas du tout' },
        { start: 'Apr\u00E8s la pluie...', end: 'le beau temps', meaning: 'Les moments difficiles sont suivis de meilleurs' },
        { start: 'Qui ne risque rien...', end: 'n\'a rien', meaning: 'Il faut oser pour r\u00E9ussir' },
        { start: 'Chat \u00E9chaud\u00E9...', end: 'craint l\'eau froide', meaning: 'Une exp\u00E9rience malheureuse rend prudent' },
        { start: 'Tel p\u00E8re...', end: 'tel fils', meaning: 'Les enfants ressemblent \u00E0 leurs parents' },
        { start: 'Qui dort...', end: 'd\u00EEne', meaning: 'Le sommeil fait oublier la faim' },
        { start: 'Rira bien...', end: 'qui rira le dernier', meaning: 'La victoire finale compte plus que les succ\u00E8s provisoires' },
        { start: 'Tout ce qui brille...', end: 'n\'est pas or', meaning: 'Les apparences peuvent \u00EAtre trompeuses' },
        { start: 'Qui vole un \u0153uf...', end: 'vole un b\u0153uf', meaning: 'Un petit larcin m\u00E8ne \u00E0 un plus grand' },
        { start: 'Un tiens vaut mieux...', end: 'que deux tu l\'auras', meaning: 'Mieux vaut avoir peu mais s\u00FBr que beaucoup mais incertain' },
        { start: 'L\'app\u00E9tit vient...', end: 'en mangeant', meaning: 'Plus on a, plus on veut' },
        { start: 'Qui vivra...', end: 'verra', meaning: 'L\'avenir nous le dira' },
        { start: 'La nuit porte...', end: 'conseil', meaning: 'Il faut r\u00E9fl\u00E9chir avant de d\u00E9cider' },
        { start: 'Il ne faut pas mettre la charrue...', end: 'avant les b\u0153ufs', meaning: 'Il ne faut pas br\u00FBler les \u00E9tapes' },
        { start: 'Petit \u00E0 petit, l\'oiseau fait...', end: 'son nid', meaning: 'La pers\u00E9v\u00E9rance finit par payer' },
        { start: 'Il n\'y a pas de fum\u00E9e...', end: 'sans feu', meaning: 'Toute rumeur a un fond de v\u00E9rit\u00E9' },
        { start: 'C\'est en forgeant...', end: 'qu\'on devient forgeron', meaning: 'C\'est par la pratique qu\'on progresse' },
        { start: 'Loin des yeux...', end: 'loin du c\u0153ur', meaning: 'L\'\u00E9loignement affaiblit les sentiments' },
        { start: 'Les murs ont...', end: 'des oreilles', meaning: 'On peut \u00EAtre entendu m\u00EAme en secret' },
        { start: 'A beau mentir...', end: 'qui vient de loin', meaning: 'On peut raconter n\'importe quoi si personne ne peut v\u00E9rifier' },
        { start: 'On ne fait pas d\'omelette...', end: 'sans casser des \u0153ufs', meaning: 'Tout succ\u00E8s demande des sacrifices' },
        { start: 'Vouloir, c\'est...', end: 'pouvoir', meaning: 'La volont\u00E9 est la cl\u00E9 du succ\u00E8s' },
        { start: 'Il faut battre le fer...', end: 'tant qu\'il est chaud', meaning: 'Il faut agir au bon moment' },
        { start: 'Les absents ont toujours...', end: 'tort', meaning: 'On reproche facilement \u00E0 ceux qui ne sont pas l\u00E0' },
        { start: 'Aide-toi...', end: 'le ciel t\'aidera', meaning: 'Il faut faire des efforts pour \u00EAtre aid\u00E9' },
        { start: 'Il ne faut pas vendre la peau de l\'ours...', end: 'avant de l\'avoir tu\u00E9', meaning: 'Il ne faut pas se r\u00E9jouir trop t\u00F4t' },
        { start: 'Rome ne s\'est pas faite...', end: 'en un jour', meaning: 'Les grandes choses demandent du temps' },
        { start: 'Qui se ressemble...', end: 's\'assemble', meaning: 'On s\'entoure de gens qui nous ressemblent' },
        { start: 'La parole est d\'argent...', end: 'le silence est d\'or', meaning: 'Il vaut parfois mieux se taire' },
        { start: 'Tant va la cruche \u00E0 l\'eau...', end: 'qu\'\u00E0 la fin elle se casse', meaning: '\u00C0 force de prendre des risques, on finit par \u00E9chouer' },
        { start: 'Nul n\'est proph\u00E8te...', end: 'en son pays', meaning: 'On est rarement reconnu chez soi' },
        { start: 'La vengeance est un plat...', end: 'qui se mange froid', meaning: 'Mieux vaut attendre pour se venger' },
        { start: 'Il n\'est pire sourd...', end: 'que celui qui ne veut pas entendre', meaning: 'On ne peut convaincre qui refuse d\'\u00E9couter' },
        { start: 'Quand le chat n\'est pas l\u00E0...', end: 'les souris dansent', meaning: 'Sans surveillance, on fait ce qu\'on veut' },
        { start: 'Mieux vaut pr\u00E9venir...', end: 'que gu\u00E9rir', meaning: 'Il est pr\u00E9f\u00E9rable d\'\u00E9viter un probl\u00E8me que de le r\u00E9soudre' },
        { start: 'La curiosit\u00E9 est un vilain...', end: 'd\u00E9faut', meaning: 'Il ne faut pas \u00EAtre trop curieux (ironie: Curiosit\u00E0 !)' },
        { start: 'Qui aime bien...', end: 'ch\u00E2tie bien', meaning: 'Les reproches viennent parfois de l\'affection' }
      ],
      getQuestion: function (item) { return item.start; },
      getAnswer: function (item) { return item.end; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.end !== item.end; })
          .map(function (d) { return d.end; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.start + '</strong> ' + item.end + '<br><span class="mc-muted">' + item.meaning + '</span>';
      }
    },

    inventions: {
      key: 'inventions',
      name: 'Inventions & Inventeurs',
      icon: '\uD83D\uDCA1',
      description: '40 inventions majeures de l\'histoire',
      filterKey: null,
      data: [
        { invention: 'Imprimerie', inventor: 'Gutenberg', year: 1440, country: '\uD83C\uDDE9\uD83C\uDDEA' },
        { invention: 'T\u00E9lescope', inventor: 'Hans Lippershey', year: 1608, country: '\uD83C\uDDF3\uD83C\uDDF1' },
        { invention: 'Machine \u00E0 vapeur', inventor: 'James Watt', year: 1769, country: '\uD83C\uDDEC\uD83C\uDDE7' },
        { invention: 'Vaccin (variole)', inventor: 'Edward Jenner', year: 1796, country: '\uD83C\uDDEC\uD83C\uDDE7' },
        { invention: 'Photographie', inventor: 'Nic\u00E9phore Ni\u00E9pce', year: 1826, country: '\uD83C\uDDEB\uD83C\uDDF7' },
        { invention: 'T\u00E9l\u00E9graphe', inventor: 'Samuel Morse', year: 1837, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Anesth\u00E9sie', inventor: 'William Morton', year: 1846, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Dynamite', inventor: 'Alfred Nobel', year: 1867, country: '\uD83C\uDDF8\uD83C\uDDEA' },
        { invention: 'T\u00E9l\u00E9phone', inventor: 'Alexander Graham Bell', year: 1876, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Ampoule \u00E9lectrique', inventor: 'Thomas Edison', year: 1879, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Automobile', inventor: 'Carl Benz', year: 1886, country: '\uD83C\uDDE9\uD83C\uDDEA' },
        { invention: 'Cin\u00E9ma', inventor: 'Fr\u00E8res Lumi\u00E8re', year: 1895, country: '\uD83C\uDDEB\uD83C\uDDF7' },
        { invention: 'Rayons X', inventor: 'Wilhelm R\u00F6ntgen', year: 1895, country: '\uD83C\uDDE9\uD83C\uDDEA' },
        { invention: 'Radioactivit\u00E9', inventor: 'Marie Curie', year: 1898, country: '\uD83C\uDDEB\uD83C\uDDF7' },
        { invention: 'Avion', inventor: 'Fr\u00E8res Wright', year: 1903, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Relativit\u00E9 restreinte', inventor: 'Albert Einstein', year: 1905, country: '\uD83C\uDDE9\uD83C\uDDEA' },
        { invention: 'P\u00E9nicilline', inventor: 'Alexander Fleming', year: 1928, country: '\uD83C\uDDEC\uD83C\uDDE7' },
        { invention: 'T\u00E9l\u00E9vision', inventor: 'Philo Farnsworth', year: 1927, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Nylon', inventor: 'Wallace Carothers', year: 1935, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Bombe atomique', inventor: 'Robert Oppenheimer', year: 1945, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Transistor', inventor: 'Bardeen, Brattain, Shockley', year: 1947, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'ADN (structure)', inventor: 'Watson & Crick', year: 1953, country: '\uD83C\uDDEC\uD83C\uDDE7' },
        { invention: 'Pilule contraceptive', inventor: 'Gregory Pincus', year: 1960, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Laser', inventor: 'Theodore Maiman', year: 1960, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Internet (ARPANET)', inventor: 'DARPA', year: 1969, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Microprocesseur', inventor: 'Intel (Ted Hoff)', year: 1971, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'T\u00E9l\u00E9phone portable', inventor: 'Martin Cooper', year: 1973, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'PC (ordinateur personnel)', inventor: 'IBM', year: 1981, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'World Wide Web', inventor: 'Tim Berners-Lee', year: 1989, country: '\uD83C\uDDEC\uD83C\uDDE7' },
        { invention: 'GPS (civil)', inventor: 'D\u00E9partement de la D\u00E9fense US', year: 1995, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Cl\u00E9 USB', inventor: 'Dov Moran', year: 2000, country: '\uD83C\uDDEE\uD83C\uDDF1' },
        { invention: 'iPod', inventor: 'Apple (Steve Jobs)', year: 2001, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Facebook', inventor: 'Mark Zuckerberg', year: 2004, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'iPhone', inventor: 'Apple (Steve Jobs)', year: 2007, country: '\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Bitcoin', inventor: 'Satoshi Nakamoto', year: 2009, country: '\uD83C\uDF10' },
        { invention: 'CRISPR-Cas9', inventor: 'Charpentier & Doudna', year: 2012, country: '\uD83C\uDDEB\uD83C\uDDF7/\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Vaccin ARNm (COVID)', inventor: 'Katalin Karik\u00F3', year: 2020, country: '\uD83C\uDDED\uD83C\uDDFA/\uD83C\uDDFA\uD83C\uDDF8' },
        { invention: 'Boussole', inventor: 'Chinois (anonyme)', year: 1100, country: '\uD83C\uDDE8\uD83C\uDDF3' },
        { invention: 'Poudre \u00E0 canon', inventor: 'Chinois (anonyme)', year: 850, country: '\uD83C\uDDE8\uD83C\uDDF3' },
        { invention: 'Thermom\u00E8tre', inventor: 'Galil\u00E9e', year: 1593, country: '\uD83C\uDDEE\uD83C\uDDF9' }
      ],
      getQuestion: function (item) { return item.invention; },
      getAnswer: function (item) { return item.inventor + ' (' + item.year + ')'; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.inventor !== item.inventor; })
          .map(function (d) { return d.inventor + ' (' + d.year + ')'; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.invention + '</strong> ' + item.country + ' \u2014 ' + item.inventor + ', ' + item.year;
      }
    },

    units: {
      key: 'units',
      name: 'Unit\u00E9s & Conversions',
      icon: '\uD83D\uDCCF',
      description: '30 conversions essentielles',
      filterKey: 'category',
      filterLabel: 'Cat\u00E9gorie',
      data: [
        { from: '1 mile', to: '1,609 km', category: 'distance' },
        { from: '1 pouce (inch)', to: '2,54 cm', category: 'distance' },
        { from: '1 pied (foot)', to: '30,48 cm', category: 'distance' },
        { from: '1 yard', to: '91,44 cm', category: 'distance' },
        { from: '1 mille nautique', to: '1,852 km', category: 'distance' },
        { from: '1 ann\u00E9e-lumi\u00E8re', to: '9 461 milliards km', category: 'distance' },
        { from: '1 livre (pound)', to: '453,6 g', category: 'masse' },
        { from: '1 once (oz)', to: '28,35 g', category: 'masse' },
        { from: '1 stone', to: '6,35 kg', category: 'masse' },
        { from: '1 tonne US (short ton)', to: '907,2 kg', category: 'masse' },
        { from: '1 carat', to: '0,2 g', category: 'masse' },
        { from: '\u00B0F \u2192 \u00B0C', to: '(\u00B0F \u2212 32) \u00D7 5/9', category: 'temp\u00E9rature' },
        { from: '0 \u00B0C', to: '32 \u00B0F / 273,15 K', category: 'temp\u00E9rature' },
        { from: '100 \u00B0C', to: '212 \u00B0F / 373,15 K', category: 'temp\u00E9rature' },
        { from: '1 gallon US', to: '3,785 litres', category: 'volume' },
        { from: '1 gallon UK', to: '4,546 litres', category: 'volume' },
        { from: '1 pinte US', to: '0,473 litre', category: 'volume' },
        { from: '1 fl oz (US)', to: '29,57 ml', category: 'volume' },
        { from: '1 baril de p\u00E9trole', to: '159 litres', category: 'volume' },
        { from: '1 hectare', to: '10 000 m\u00B2', category: 'surface' },
        { from: '1 acre', to: '4 047 m\u00B2', category: 'surface' },
        { from: '1 n\u0153ud', to: '1,852 km/h', category: 'vitesse' },
        { from: '1 Mach', to: '1 235 km/h (dans l\'air)', category: 'vitesse' },
        { from: '1 bar', to: '100 000 Pa', category: 'pression' },
        { from: '1 atm', to: '101 325 Pa', category: 'pression' },
        { from: '1 calorie', to: '4,184 joules', category: '\u00E9nergie' },
        { from: '1 kWh', to: '3 600 000 joules', category: '\u00E9nergie' },
        { from: '1 cheval-vapeur (CV)', to: '735,5 watts', category: '\u00E9nergie' },
        { from: '1 \u00E9lectronvolt (eV)', to: '1,602 \u00D7 10\u207B\u00B9\u2079 J', category: '\u00E9nergie' },
        { from: '1 ann\u00E9e', to: '365,25 jours / 8 766 h', category: 'temps' }
      ],
      getQuestion: function (item) { return item.from + ' = ?'; },
      getAnswer: function (item) { return item.to; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.to !== item.to; })
          .map(function (d) { return d.to; });
      },
      quizChoices: 3,
      formatLearn: function (item) {
        return '<strong>' + item.from + '</strong> = ' + item.to + ' <span class="mc-muted">(' + item.category + ')</span>';
      }
    },

    expressions: {
      key: 'expressions',
      name: 'Expressions anglaises',
      icon: '\uD83C\uDDEC\uD83C\uDDE7',
      description: '40 expressions idiomatiques',
      filterKey: null,
      data: [
        { en: 'Break a leg', fr: 'Bonne chance (au th\u00E9\u00E2tre)', context: 'Pour souhaiter bonne chance' },
        { en: 'It\'s raining cats and dogs', fr: 'Il pleut des cordes', context: 'Pluie tr\u00E8s forte' },
        { en: 'Piece of cake', fr: 'C\'est du g\u00E2teau', context: 'Tr\u00E8s facile' },
        { en: 'Once in a blue moon', fr: 'Tous les 36 du mois', context: 'Tr\u00E8s rarement' },
        { en: 'The ball is in your court', fr: 'C\'est \u00E0 ton tour de jouer', context: 'C\'est ta d\u00E9cision' },
        { en: 'Hit the nail on the head', fr: 'Mettre le doigt dessus', context: 'Trouver exactement la bonne r\u00E9ponse' },
        { en: 'Bite the bullet', fr: 'Serrer les dents', context: 'Affronter une situation difficile' },
        { en: 'Costs an arm and a leg', fr: 'Co\u00FBter les yeux de la t\u00EAte', context: 'Tr\u00E8s cher' },
        { en: 'Let the cat out of the bag', fr: 'Vendre la m\u00E8che', context: 'R\u00E9v\u00E9ler un secret' },
        { en: 'Kill two birds with one stone', fr: 'Faire d\'une pierre deux coups', context: 'R\u00E9soudre deux probl\u00E8mes en une action' },
        { en: 'A penny for your thoughts', fr: '\u00C0 quoi tu penses ?', context: 'Demander ce que quelqu\'un pense' },
        { en: 'Under the weather', fr: 'Pas dans son assiette', context: 'Se sentir malade' },
        { en: 'Burning the midnight oil', fr: 'Travailler tard dans la nuit', context: 'Veiller pour travailler' },
        { en: 'Speak of the devil', fr: 'Quand on parle du loup', context: 'Quand la personne dont on parle arrive' },
        { en: 'The best of both worlds', fr: 'Le meilleur des deux mondes', context: 'Avoir tous les avantages' },
        { en: 'When pigs fly', fr: 'Quand les poules auront des dents', context: 'Jamais' },
        { en: 'Spill the beans', fr: 'Cracher le morceau', context: 'R\u00E9v\u00E9ler un secret' },
        { en: 'A blessing in disguise', fr: 'Un mal pour un bien', context: 'Quelque chose de mauvais qui s\'av\u00E8re positif' },
        { en: 'Beat around the bush', fr: 'Tourner autour du pot', context: '\u00C9viter de parler directement' },
        { en: 'Better late than never', fr: 'Mieux vaut tard que jamais', context: 'Il vaut mieux agir en retard que pas du tout' },
        { en: 'Call it a day', fr: 'S\'arr\u00EAter l\u00E0 pour aujourd\'hui', context: 'D\u00E9cider de finir' },
        { en: 'Cut to the chase', fr: 'Aller droit au but', context: 'Aller \u00E0 l\'essentiel' },
        { en: 'Easy as pie', fr: 'Simple comme bonjour', context: 'Tr\u00E8s facile' },
        { en: 'Get out of hand', fr: '\u00C9chapper \u00E0 tout contr\u00F4le', context: 'Devenir incontr\u00F4lable' },
        { en: 'Hang in there', fr: 'Tiens bon', context: 'Encourager quelqu\'un' },
        { en: 'Hit the sack', fr: 'Aller au lit', context: 'Aller dormir' },
        { en: 'It takes two to tango', fr: 'Il faut \u00EAtre deux pour danser le tango', context: 'La responsabilit\u00E9 est partag\u00E9e' },
        { en: 'Miss the boat', fr: 'Rater le coche', context: 'Manquer une opportunit\u00E9' },
        { en: 'No pain, no gain', fr: 'On n\'a rien sans rien', context: 'L\'effort est n\u00E9cessaire pour r\u00E9ussir' },
        { en: 'Pull someone\'s leg', fr: 'Faire marcher quelqu\'un', context: 'Plaisanter' },
        { en: 'So far so good', fr: 'Jusqu\'ici tout va bien', context: 'Pour l\'instant, \u00E7a va' },
        { en: 'The elephant in the room', fr: 'Le probl\u00E8me que tout le monde ignore', context: 'Sujet \u00E9vident mais tabou' },
        { en: 'Time flies', fr: 'Le temps passe vite', context: 'Le temps file' },
        { en: 'Under no circumstances', fr: 'En aucun cas', context: 'Absolument pas' },
        { en: 'You can\'t judge a book by its cover', fr: 'L\'habit ne fait pas le moine', context: 'Ne pas juger sur les apparences' },
        { en: 'Back to square one', fr: 'Retour \u00E0 la case d\u00E9part', context: 'Recommencer depuis le d\u00E9but' },
        { en: 'Cry over spilt milk', fr: 'Pleurer sur le lait renvers\u00E9', context: 'Regretter ce qui ne peut \u00EAtre chang\u00E9' },
        { en: 'Every cloud has a silver lining', fr: 'Apr\u00E8s la pluie le beau temps', context: 'Il y a toujours du positif' },
        { en: 'In a nutshell', fr: 'En r\u00E9sum\u00E9 / en bref', context: 'R\u00E9sumer rapidement' },
        { en: 'Actions speak louder than words', fr: 'Les actes valent mieux que les paroles', context: 'Ce qu\'on fait compte plus que ce qu\'on dit' }
      ],
      getQuestion: function (item) { return item.en; },
      getAnswer: function (item) { return item.fr; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.fr !== item.fr; })
          .map(function (d) { return d.fr; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.en + '</strong><br>' + item.fr + ' <span class="mc-muted">\u2014 ' + item.context + '</span>';
      }
    },

    records: {
      key: 'records',
      name: 'Records du monde',
      icon: '\uD83C\uDFC6',
      description: '30 records \u00E9tonnants',
      filterKey: 'category',
      filterLabel: 'Cat\u00E9gorie',
      data: [
        { record: 'Plus haute montagne', answer: 'Everest, 8 849 m', category: 'g\u00E9ographie' },
        { record: 'Plus grand oc\u00E9an', answer: 'Pacifique, 165,25 M km\u00B2', category: 'g\u00E9ographie' },
        { record: 'Plus long fleuve', answer: 'Nil, 6 650 km', category: 'g\u00E9ographie' },
        { record: 'Plus grand d\u00E9sert', answer: 'Sahara, 9,2 M km\u00B2', category: 'g\u00E9ographie' },
        { record: 'Plus petite pays', answer: 'Vatican, 0,44 km\u00B2', category: 'g\u00E9ographie' },
        { record: 'Plus grand lac', answer: 'Mer Caspienne, 371 000 km\u00B2', category: 'g\u00E9ographie' },
        { record: 'Plus profonde fosse oc\u00E9anique', answer: 'Fosse des Mariannes, 10 994 m', category: 'g\u00E9ographie' },
        { record: 'Pays le plus peupl\u00E9', answer: 'Inde, ~1,4 milliard', category: 'population' },
        { record: 'Plus grande ville (agglo)', answer: 'Tokyo, ~37 millions', category: 'population' },
        { record: 'Pays le plus vaste', answer: 'Russie, 17,1 M km\u00B2', category: 'population' },
        { record: 'Langue la plus parl\u00E9e (natifs)', answer: 'Mandarin, ~920 millions', category: 'population' },
        { record: 'Animal le plus rapide', answer: 'Faucon p\u00E8lerin, 390 km/h', category: 'nature' },
        { record: 'Plus grand animal', answer: 'Baleine bleue, 30 m, 170 tonnes', category: 'nature' },
        { record: 'Plus vieil arbre', answer: 'Pin Bristlecone, ~5 000 ans', category: 'nature' },
        { record: 'Plus grand arbre', answer: 'S\u00E9quoia Hyperion, 115,92 m', category: 'nature' },
        { record: 'Animal terrestre le plus rapide', answer: 'Gu\u00E9pard, 120 km/h', category: 'nature' },
        { record: 'Plus petit mammif\u00E8re', answer: 'Chauve-souris bourdon, 2 g', category: 'nature' },
        { record: 'Temp\u00E9rature la plus haute enregistr\u00E9e', answer: '56,7\u00B0C, Vall\u00E9e de la Mort', category: 'extr\u00EAmes' },
        { record: 'Temp\u00E9rature la plus basse enregistr\u00E9e', answer: '\u221289,2\u00B0C, Antarctique (Vostok)', category: 'extr\u00EAmes' },
        { record: 'Endroit le plus pluvieux', answer: 'Mawsynram (Inde), 11 871 mm/an', category: 'extr\u00EAmes' },
        { record: 'Endroit le plus sec', answer: 'D\u00E9sert d\'Atacama, quasi 0 mm/an', category: 'extr\u00EAmes' },
        { record: 'Plus haut b\u00E2timent', answer: 'Burj Khalifa, 828 m', category: 'architecture' },
        { record: 'Plus long pont', answer: 'Danyang-Kunshan (Chine), 164,8 km', category: 'architecture' },
        { record: 'Plus long tunnel', answer: 'Tunnel de base du Saint-Gothard, 57,1 km', category: 'architecture' },
        { record: 'Plus grande plan\u00E8te du syst\u00E8me solaire', answer: 'Jupiter, 142 984 km de diam\u00E8tre', category: 'espace' },
        { record: '\u00C9toile la plus proche (hors Soleil)', answer: 'Proxima du Centaure, 4,24 a.l.', category: 'espace' },
        { record: 'Vitesse de la lumi\u00E8re', answer: '299 792 458 m/s (~300 000 km/s)', category: 'espace' },
        { record: 'Os le plus long du corps', answer: 'F\u00E9mur', category: 'corps' },
        { record: 'Organe le plus grand du corps', answer: 'La peau (~2 m\u00B2)', category: 'corps' },
        { record: 'Nombre d\'os du corps adulte', answer: '206 os', category: 'corps' }
      ],
      getQuestion: function (item) { return item.record + ' ?'; },
      getAnswer: function (item) { return item.answer; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.answer !== item.answer; })
          .map(function (d) { return d.answer; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.record + '</strong><br>' + item.answer + ' <span class="mc-muted">(' + item.category + ')</span>';
      }
    }
  };

  // ══════════════════════════════════════════
  //  PERSISTENCE
  // ══════════════════════════════════════════

  function loadState() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        state.mastery = parsed.mastery || {};
        state.history = parsed.history || [];
      }
    } catch (e) { /* ignore */ }
  }

  function saveState() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch (e) { /* ignore */ }
  }

  function saveResult(type, score, total, time) {
    state.history.push({
      type: type,
      score: score,
      total: total,
      time: time,
      date: new Date().toISOString()
    });
    saveState();
  }

  function getMastery(domainKey, index) {
    if (!state.mastery[domainKey]) return 0;
    return state.mastery[domainKey][index] || 0;
  }

  function setMastery(domainKey, index, level) {
    if (!state.mastery[domainKey]) state.mastery[domainKey] = {};
    state.mastery[domainKey][index] = Math.min(level, MASTERY_MAX);
    saveState();
  }

  function getDomainProgress(domainKey) {
    var domain = DOMAINS[domainKey];
    if (!domain) return { mastered: 0, total: 0 };
    var total = domain.data.length;
    var mastered = 0;
    for (var i = 0; i < total; i++) {
      if (getMastery(domainKey, i) >= MASTERY_MAX) mastered++;
    }
    return { mastered: mastered, total: total };
  }

  // ══════════════════════════════════════════
  //  UTILITIES
  // ══════════════════════════════════════════

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function pickRandom(arr, n, exclude) {
    var pool = exclude ? arr.filter(function (x) { return x !== exclude; }) : arr.slice();
    return shuffle(pool).slice(0, n);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function masteryDots(level) {
    var dots = '';
    for (var i = 0; i < MASTERY_MAX; i++) {
      dots += i < level ? '<span class="mc-dot mc-dot-filled"></span>' : '<span class="mc-dot"></span>';
    }
    return '<span class="mc-dots">' + dots + '</span>';
  }

  function getFilterValues(domain) {
    if (!domain.filterKey) return [];
    var seen = {};
    var values = [];
    domain.data.forEach(function (item) {
      var val = item[domain.filterKey];
      if (val && !seen[val]) {
        seen[val] = true;
        values.push(val);
      }
    });
    return values;
  }

  // ══════════════════════════════════════════
  //  CSS INJECTION
  // ══════════════════════════════════════════

  function injectCSS() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var style = document.createElement('style');
    style.textContent = [
      '/* Memory Culture & Knowledge Module */',

      // Domain selection grid
      '.mc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; padding: 8px 0; }',
      '.mc-card { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 12px; padding: 20px; cursor: pointer; transition: all .2s ease; }',
      '.mc-card:hover { border-color: var(--accent, #e8c97a); transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,.3); }',
      '.mc-card-icon { font-size: 2rem; margin-bottom: 8px; }',
      '.mc-card-name { font-family: "Playfair Display", serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #f0ede8); margin-bottom: 4px; }',
      '.mc-card-desc { font-size: .85rem; color: var(--muted, #7a7870); margin-bottom: 12px; }',
      '.mc-progress-bar { height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; margin-bottom: 6px; }',
      '.mc-progress-fill { height: 100%; background: var(--accent, #e8c97a); border-radius: 2px; transition: width .3s ease; }',
      '.mc-progress-text { font-size: .75rem; color: var(--muted, #7a7870); }',

      // Header
      '.mc-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }',
      '.mc-back { background: none; border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--text, #f0ede8); border-radius: 8px; padding: 6px 14px; cursor: pointer; font-size: .9rem; transition: border-color .2s; }',
      '.mc-back:hover { border-color: var(--accent, #e8c97a); }',
      '.mc-title { font-family: "Playfair Display", serif; font-size: 1.4rem; font-weight: 600; color: var(--text, #f0ede8); }',
      '.mc-title-icon { font-size: 1.6rem; }',

      // Tabs
      '.mc-tabs { display: flex; gap: 4px; background: var(--surface, #141418); border-radius: 10px; padding: 4px; margin-bottom: 20px; border: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.mc-tab { flex: 1; padding: 10px 16px; text-align: center; border-radius: 8px; font-size: .9rem; color: var(--muted, #7a7870); cursor: pointer; transition: all .2s; border: none; background: none; font-family: inherit; }',
      '.mc-tab:hover { color: var(--text, #f0ede8); }',
      '.mc-tab.active { background: var(--surface2, #1c1c22); color: var(--accent, #e8c97a); font-weight: 500; }',

      // Filter bar
      '.mc-filter { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }',
      '.mc-filter-btn { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--muted, #7a7870); border-radius: 20px; padding: 5px 14px; font-size: .8rem; cursor: pointer; transition: all .2s; font-family: inherit; }',
      '.mc-filter-btn:hover { color: var(--text, #f0ede8); border-color: var(--muted, #7a7870); }',
      '.mc-filter-btn.active { background: var(--accent-dim, rgba(232,201,122,0.1)); border-color: var(--accent, #e8c97a); color: var(--accent, #e8c97a); }',

      // Learn mode
      '.mc-learn-list { display: flex; flex-direction: column; gap: 8px; }',
      '.mc-learn-item { display: flex; align-items: flex-start; gap: 12px; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 16px; font-size: .9rem; line-height: 1.5; color: var(--content-color, rgba(240,237,232,0.85)); }',
      '.mc-learn-item.mc-unmastered { border-left: 3px solid var(--accent, #e8c97a); }',
      '.mc-dots { display: inline-flex; gap: 3px; flex-shrink: 0; margin-top: 4px; }',
      '.mc-dot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid var(--muted, #7a7870); display: inline-block; }',
      '.mc-dot-filled { background: var(--accent, #e8c97a); border-color: var(--accent, #e8c97a); }',
      '.mc-learn-content { flex: 1; }',
      '.mc-muted { color: var(--muted, #7a7870); }',

      // Quiz mode
      '.mc-quiz-container { max-width: 600px; margin: 0 auto; }',
      '.mc-quiz-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: .85rem; color: var(--muted, #7a7870); }',
      '.mc-quiz-bar { flex: 1; height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; }',
      '.mc-quiz-bar-fill { height: 100%; background: var(--accent, #e8c97a); transition: width .3s ease; border-radius: 2px; }',
      '.mc-question { font-family: "Playfair Display", serif; font-size: 1.3rem; text-align: center; color: var(--text, #f0ede8); margin-bottom: 24px; padding: 20px; min-height: 80px; display: flex; align-items: center; justify-content: center; }',
      '.mc-greek-big { font-size: 2.5rem; font-family: serif; }',
      '.mc-choices { display: flex; flex-direction: column; gap: 10px; }',
      '.mc-choice { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 18px; color: var(--text, #f0ede8); font-size: .95rem; cursor: pointer; transition: all .2s; text-align: left; font-family: inherit; line-height: 1.4; }',
      '.mc-choice:hover:not(.mc-disabled) { border-color: var(--accent, #e8c97a); background: var(--surface2, #1c1c22); }',
      '.mc-choice.mc-correct { border-color: var(--green, #69f0ae); background: var(--green-dim, rgba(105,240,174,0.1)); color: var(--green, #69f0ae); }',
      '.mc-choice.mc-wrong { border-color: var(--red, #ff5252); background: var(--red-dim, rgba(255,82,82,0.1)); color: var(--red-text, #ff8a80); }',
      '.mc-choice.mc-disabled { cursor: default; opacity: 0.6; }',
      '.mc-choice.mc-reveal { border-color: var(--green, #69f0ae); opacity: 1; }',

      // Quiz results
      '.mc-results { text-align: center; padding: 30px 0; }',
      '.mc-results-score { font-family: "Playfair Display", serif; font-size: 2.5rem; font-weight: 700; color: var(--accent, #e8c97a); margin-bottom: 8px; }',
      '.mc-results-label { font-size: 1rem; color: var(--muted, #7a7870); margin-bottom: 24px; }',
      '.mc-results-detail { font-size: .9rem; color: var(--content-color, rgba(240,237,232,0.85)); margin-bottom: 6px; }',
      '.mc-btn { background: var(--accent, #e8c97a); color: var(--bg, #0c0c0e); border: none; border-radius: 10px; padding: 12px 28px; font-size: 1rem; font-weight: 600; cursor: pointer; font-family: inherit; transition: opacity .2s; margin-top: 20px; }',
      '.mc-btn:hover { opacity: .85; }',
      '.mc-btn-secondary { background: var(--surface2, #1c1c22); color: var(--text, #f0ede8); border: 1px solid var(--border, rgba(240,237,232,0.08)); margin-left: 10px; }',
      '.mc-btn-secondary:hover { border-color: var(--accent, #e8c97a); opacity: 1; }',

      // Sprint mode
      '.mc-sprint-hud { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 12px 16px; background: var(--surface, #141418); border-radius: 10px; border: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.mc-sprint-timer { font-family: "JetBrains Mono", monospace; font-size: 1.6rem; font-weight: 700; color: var(--accent, #e8c97a); }',
      '.mc-sprint-timer.mc-urgent { color: var(--red, #ff5252); }',
      '.mc-sprint-score { font-size: 1.1rem; color: var(--text, #f0ede8); }',
      '.mc-sprint-score span { color: var(--accent, #e8c97a); font-weight: 600; }',
      '.mc-sprint-start { text-align: center; padding: 40px 0; }',
      '.mc-sprint-start p { color: var(--muted, #7a7870); font-size: 1rem; margin-bottom: 24px; }',
      '.mc-sprint-feedback { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 3rem; font-weight: 700; pointer-events: none; opacity: 0; transition: opacity .15s; z-index: 9999; }',
      '.mc-sprint-feedback.mc-show { opacity: 1; }',

      // Section title
      '.mc-section-title { font-family: "Playfair Display", serif; font-size: 1.1rem; color: var(--text, #f0ede8); margin-bottom: 16px; }',

      // Mnémotechnique banner
      '.mc-mnemonic { background: var(--accent-dim, rgba(232,201,122,0.1)); border: 1px solid rgba(232,201,122,0.2); border-radius: 10px; padding: 12px 16px; margin-bottom: 16px; font-size: .9rem; color: var(--accent, #e8c97a); text-align: center; }',

      // Responsive
      '@media (max-width: 600px) {',
      '  .mc-grid { grid-template-columns: 1fr; }',
      '  .mc-tabs { flex-wrap: wrap; }',
      '  .mc-question { font-size: 1.1rem; padding: 14px; }',
      '  .mc-greek-big { font-size: 2rem; }',
      '  .mc-header { gap: 8px; }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ══════════════════════════════════════════
  //  RENDER — Domain Selection Panel
  // ══════════════════════════════════════════

  var rootEl = null;

  function renderPanel(el) {
    injectCSS();
    loadState();
    rootEl = el;
    renderDomainGrid();
  }

  function renderDomainGrid() {
    var html = '<div class="mc-section-title">Culture g\u00E9n\u00E9rale & connaissances</div>';
    html += '<div class="mc-grid">';
    var keys = Object.keys(DOMAINS);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var domain = DOMAINS[key];
      var prog = getDomainProgress(key);
      var pct = prog.total > 0 ? Math.round(prog.mastered / prog.total * 100) : 0;
      html += '<div class="mc-card" data-domain="' + key + '">';
      html += '<div class="mc-card-icon">' + domain.icon + '</div>';
      html += '<div class="mc-card-name">' + escapeHtml(domain.name) + '</div>';
      html += '<div class="mc-card-desc">' + escapeHtml(domain.description) + '</div>';
      html += '<div class="mc-progress-bar"><div class="mc-progress-fill" style="width:' + pct + '%"></div></div>';
      html += '<div class="mc-progress-text">' + prog.mastered + '/' + prog.total + ' ma\u00EEtris\u00E9s</div>';
      html += '</div>';
    }
    html += '</div>';
    rootEl.innerHTML = html;

    // Bind clicks
    rootEl.querySelectorAll('.mc-card[data-domain]').forEach(function (card) {
      card.addEventListener('click', function () {
        renderDomainView(card.dataset.domain);
      });
    });
  }

  // ══════════════════════════════════════════
  //  RENDER — Domain View (tabs)
  // ══════════════════════════════════════════

  var currentDomain = null;
  var currentTab = 'learn';
  var currentFilter = null;

  function renderDomainView(domainKey, tab) {
    currentDomain = domainKey;
    currentTab = tab || 'learn';
    currentFilter = null;
    var domain = DOMAINS[domainKey];
    if (!domain) return;

    var html = '';
    // Header
    html += '<div class="mc-header">';
    html += '<button class="mc-back" id="mc-back-btn">\u2190 Retour</button>';
    html += '<span class="mc-title-icon">' + domain.icon + '</span>';
    html += '<span class="mc-title">' + escapeHtml(domain.name) + '</span>';
    html += '</div>';

    // Tabs
    html += '<div class="mc-tabs">';
    html += '<button class="mc-tab' + (currentTab === 'learn' ? ' active' : '') + '" data-mc-tab="learn">Apprendre</button>';
    html += '<button class="mc-tab' + (currentTab === 'quiz' ? ' active' : '') + '" data-mc-tab="quiz">Quiz</button>';
    html += '<button class="mc-tab' + (currentTab === 'sprint' ? ' active' : '') + '" data-mc-tab="sprint">Sprint</button>';
    html += '</div>';

    // Mnemonic for solar system
    if (domainKey === 'solar') {
      html += '<div class="mc-mnemonic">\uD83D\uDCA1 Mn\u00E9motechnique : <strong>Mon Vieux Tu M\'as Jet\u00E9 Sur Une Navette</strong></div>';
    }

    // Content area
    html += '<div id="mc-tab-content"></div>';

    rootEl.innerHTML = html;

    // Bind back
    document.getElementById('mc-back-btn').addEventListener('click', function () {
      renderDomainGrid();
    });

    // Bind tabs
    rootEl.querySelectorAll('.mc-tab[data-mc-tab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.mc-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.dataset.mcTab;
        currentFilter = null;
        renderTabContent();
      });
    });

    renderTabContent();
  }

  function renderTabContent() {
    var container = document.getElementById('mc-tab-content');
    if (!container) return;
    if (currentTab === 'learn') renderLearnTab(container);
    else if (currentTab === 'quiz') renderQuizTab(container);
    else if (currentTab === 'sprint') renderSprintTab(container);
  }

  // ══════════════════════════════════════════
  //  LEARN TAB
  // ══════════════════════════════════════════

  function renderLearnTab(container) {
    var domain = DOMAINS[currentDomain];
    var html = '';

    // Filter: mastery state
    html += '<div class="mc-filter">';
    html += '<button class="mc-filter-btn' + (!currentFilter ? ' active' : '') + '" data-mc-learn-filter="all">Tous</button>';
    html += '<button class="mc-filter-btn' + (currentFilter === 'unmastered' ? ' active' : '') + '" data-mc-learn-filter="unmastered">\u00C0 apprendre</button>';
    html += '<button class="mc-filter-btn' + (currentFilter === 'mastered' ? ' active' : '') + '" data-mc-learn-filter="mastered">Ma\u00EEtris\u00E9s</button>';

    // Domain-specific filter
    if (domain.filterKey) {
      var filterValues = getFilterValues(domain);
      html += '<span style="width:1px;background:var(--border);margin:0 4px"></span>';
      filterValues.forEach(function (val) {
        html += '<button class="mc-filter-btn' + (currentFilter === 'cat:' + val ? ' active' : '') + '" data-mc-learn-filter="cat:' + escapeHtml(val) + '">' + escapeHtml(val) + '</button>';
      });
    }
    html += '</div>';

    // Items list
    html += '<div class="mc-learn-list">';
    domain.data.forEach(function (item, idx) {
      var level = getMastery(currentDomain, idx);
      var isMastered = level >= MASTERY_MAX;

      // Filter logic
      if (currentFilter === 'unmastered' && isMastered) return;
      if (currentFilter === 'mastered' && !isMastered) return;
      if (currentFilter && currentFilter.indexOf('cat:') === 0) {
        var catVal = currentFilter.substring(4);
        if (item[domain.filterKey] !== catVal) return;
      }

      var cls = isMastered ? 'mc-learn-item' : 'mc-learn-item mc-unmastered';
      html += '<div class="' + cls + '">';
      html += masteryDots(level);
      html += '<div class="mc-learn-content">' + domain.formatLearn(item) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    container.innerHTML = html;

    // Bind filter clicks
    container.querySelectorAll('.mc-filter-btn[data-mc-learn-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = btn.dataset.mcLearnFilter;
        if (val === 'all') currentFilter = null;
        else currentFilter = val;
        renderLearnTab(container);
      });
    });
  }

  // ══════════════════════════════════════════
  //  QUIZ TAB
  // ══════════════════════════════════════════

  var quizState = null;

  function renderQuizTab(container) {
    var domain = DOMAINS[currentDomain];
    var html = '';

    // Category filter before starting
    if (domain.filterKey) {
      html += '<div class="mc-filter" id="mc-quiz-filter">';
      html += '<button class="mc-filter-btn active" data-mc-quiz-cat="all">Tous</button>';
      var filterValues = getFilterValues(domain);
      filterValues.forEach(function (val) {
        html += '<button class="mc-filter-btn" data-mc-quiz-cat="' + escapeHtml(val) + '">' + escapeHtml(val) + '</button>';
      });
      html += '</div>';
    }

    html += '<div style="text-align:center;padding:30px 0">';
    html += '<p style="color:var(--muted);margin-bottom:20px">' + QUIZ_LENGTH + ' questions \u2014 Priorit\u00E9 aux items non ma\u00EEtris\u00E9s</p>';
    html += '<button class="mc-btn" id="mc-quiz-start">Commencer le quiz</button>';
    html += '</div>';
    html += '<div id="mc-quiz-area"></div>';

    container.innerHTML = html;

    var selectedCat = null;

    // Filter binding
    container.querySelectorAll('[data-mc-quiz-cat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-mc-quiz-cat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedCat = btn.dataset.mcQuizCat === 'all' ? null : btn.dataset.mcQuizCat;
      });
    });

    document.getElementById('mc-quiz-start').addEventListener('click', function () {
      startQuiz(selectedCat);
    });
  }

  function startQuiz(categoryFilter) {
    var domain = DOMAINS[currentDomain];
    var pool = [];
    domain.data.forEach(function (item, idx) {
      if (categoryFilter && domain.filterKey && item[domain.filterKey] !== categoryFilter) return;
      pool.push({ item: item, index: idx });
    });

    // Prioritize unmastered items
    var unmastered = pool.filter(function (p) { return getMastery(currentDomain, p.index) < MASTERY_MAX; });
    var mastered = pool.filter(function (p) { return getMastery(currentDomain, p.index) >= MASTERY_MAX; });

    var selected = [];
    var shuffledUn = shuffle(unmastered);
    var shuffledMa = shuffle(mastered);
    for (var i = 0; i < shuffledUn.length && selected.length < QUIZ_LENGTH; i++) {
      selected.push(shuffledUn[i]);
    }
    for (var j = 0; j < shuffledMa.length && selected.length < QUIZ_LENGTH; j++) {
      selected.push(shuffledMa[j]);
    }
    selected = shuffle(selected);

    if (selected.length === 0) return;

    quizState = {
      questions: selected,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    var area = document.getElementById('mc-quiz-area');
    if (!area || !quizState) return;
    var domain = DOMAINS[currentDomain];

    if (quizState.current >= quizState.questions.length) {
      renderQuizResults(area);
      return;
    }

    var q = quizState.questions[quizState.current];
    var numChoices = domain.quizChoices || 4;
    var questionText = domain.getQuestion(q.item);
    var correctAnswer = domain.getAnswer(q.item);
    var distractors = domain.getDistractors(q.item, domain.data);
    var wrongChoices = pickRandom(distractors, numChoices - 1, correctAnswer);
    var choices = shuffle(wrongChoices.concat([correctAnswer]));

    var html = '';
    html += '<div class="mc-quiz-container">';
    html += '<div class="mc-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="mc-quiz-bar"><div class="mc-quiz-bar-fill" style="width:' + ((quizState.current) / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' \u2713</span>';
    html += '</div>';

    var qClass = domain.questionClass ? ' ' + domain.questionClass : '';
    html += '<div class="mc-question' + qClass + '">' + escapeHtml(questionText) + '</div>';

    html += '<div class="mc-choices">';
    choices.forEach(function (choice) {
      html += '<button class="mc-choice" data-mc-answer="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</button>';
    });
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    // Bind answer clicks
    area.querySelectorAll('.mc-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleQuizAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleQuizAnswer(btn, correctAnswer, itemIndex) {
    var area = document.getElementById('mc-quiz-area');
    if (!area) return;
    var chosen = btn.dataset.mcAnswer;
    var isCorrect = chosen === correctAnswer;

    // Disable all buttons
    area.querySelectorAll('.mc-choice').forEach(function (b) {
      b.classList.add('mc-disabled');
      if (b.dataset.mcAnswer === correctAnswer) {
        b.classList.add('mc-correct');
        b.classList.add('mc-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('mc-correct');
      quizState.correct++;
      var currentLevel = getMastery(currentDomain, itemIndex);
      setMastery(currentDomain, itemIndex, currentLevel + 1);
    } else {
      btn.classList.add('mc-wrong');
      setMastery(currentDomain, itemIndex, 0);
    }

    quizState.current++;

    // Auto-advance after delay
    setTimeout(function () {
      renderQuizQuestion();
    }, 1200);
  }

  function renderQuizResults(area) {
    var elapsed = Math.round((Date.now() - quizState.startTime) / 1000);
    var pct = Math.round(quizState.correct / quizState.questions.length * 100);

    saveResult('quiz:' + currentDomain, quizState.correct, quizState.questions.length, elapsed);

    var html = '<div class="mc-results">';
    html += '<div class="mc-results-score">' + pct + '%</div>';
    html += '<div class="mc-results-label">Quiz termin\u00E9</div>';
    html += '<div class="mc-results-detail">' + quizState.correct + ' / ' + quizState.questions.length + ' r\u00E9ponses correctes</div>';
    html += '<div class="mc-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="mc-btn" id="mc-quiz-retry">Recommencer</button>';
    html += '<button class="mc-btn mc-btn-secondary" id="mc-quiz-back-to-learn">Voir les r\u00E9ponses</button>';
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    document.getElementById('mc-quiz-retry').addEventListener('click', function () {
      renderTabContent();
    });
    document.getElementById('mc-quiz-back-to-learn').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.mc-tab').forEach(function (t) { t.classList.remove('active'); });
      rootEl.querySelector('.mc-tab[data-mc-tab="learn"]').classList.add('active');
      renderTabContent();
    });
  }

  // ══════════════════════════════════════════
  //  SPRINT TAB
  // ══════════════════════════════════════════

  var sprintState = null;
  var sprintTimer = null;
  var feedbackEl = null;

  function renderSprintTab(container) {
    var html = '<div class="mc-sprint-start">';
    html += '<p>R\u00E9pondez \u00E0 un maximum de questions en ' + SPRINT_DURATION + ' secondes !</p>';
    html += '<button class="mc-btn" id="mc-sprint-start">Lancer le Sprint</button>';
    html += '</div>';
    html += '<div id="mc-sprint-area"></div>';
    container.innerHTML = html;

    document.getElementById('mc-sprint-start').addEventListener('click', function () {
      startSprint();
    });
  }

  function startSprint() {
    var domain = DOMAINS[currentDomain];
    sprintState = {
      correct: 0,
      total: 0,
      remaining: SPRINT_DURATION,
      startTime: Date.now(),
      pool: shuffle(domain.data.map(function (item, idx) { return { item: item, index: idx }; })),
      poolIdx: 0
    };

    // Create feedback element
    if (!feedbackEl) {
      feedbackEl = document.createElement('div');
      feedbackEl.className = 'mc-sprint-feedback';
      document.body.appendChild(feedbackEl);
    }

    renderSprintQuestion();
    sprintTimer = setInterval(function () {
      sprintState.remaining--;
      updateSprintHUD();
      if (sprintState.remaining <= 0) {
        endSprint();
      }
    }, 1000);
  }

  function renderSprintQuestion() {
    var area = document.getElementById('mc-sprint-area');
    if (!area || !sprintState) return;
    var domain = DOMAINS[currentDomain];

    // Cycle through pool
    if (sprintState.poolIdx >= sprintState.pool.length) {
      sprintState.pool = shuffle(sprintState.pool);
      sprintState.poolIdx = 0;
    }

    var q = sprintState.pool[sprintState.poolIdx];
    var numChoices = domain.quizChoices || 4;
    var questionText = domain.getQuestion(q.item);
    var correctAnswer = domain.getAnswer(q.item);
    var distractors = domain.getDistractors(q.item, domain.data);
    var wrongChoices = pickRandom(distractors, numChoices - 1, correctAnswer);
    var choices = shuffle(wrongChoices.concat([correctAnswer]));

    var html = '';
    html += '<div class="mc-sprint-hud">';
    html += '<div class="mc-sprint-timer' + (sprintState.remaining <= 10 ? ' mc-urgent' : '') + '" id="mc-sprint-time">' + sprintState.remaining + 's</div>';
    html += '<div class="mc-sprint-score">Score : <span id="mc-sprint-score">' + sprintState.correct + '</span></div>';
    html += '</div>';

    html += '<div class="mc-quiz-container">';
    var qClass = domain.questionClass ? ' ' + domain.questionClass : '';
    html += '<div class="mc-question' + qClass + '">' + escapeHtml(questionText) + '</div>';
    html += '<div class="mc-choices">';
    choices.forEach(function (choice) {
      html += '<button class="mc-choice" data-mc-sprint-answer="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</button>';
    });
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    area.querySelectorAll('.mc-choice[data-mc-sprint-answer]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleSprintAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleSprintAnswer(btn, correctAnswer, itemIndex) {
    if (!sprintState || sprintState.remaining <= 0) return;
    var chosen = btn.dataset.mcSprintAnswer;
    var isCorrect = chosen === correctAnswer;

    sprintState.total++;
    sprintState.poolIdx++;

    if (isCorrect) {
      sprintState.correct++;
      var currentLevel = getMastery(currentDomain, itemIndex);
      setMastery(currentDomain, itemIndex, currentLevel + 1);
      showSprintFeedback(true);
    } else {
      setMastery(currentDomain, itemIndex, 0);
      showSprintFeedback(false);
    }

    renderSprintQuestion();
  }

  function showSprintFeedback(correct) {
    if (!feedbackEl) return;
    feedbackEl.textContent = correct ? '\u2713' : '\u2717';
    feedbackEl.style.color = correct ? 'var(--green, #69f0ae)' : 'var(--red, #ff5252)';
    feedbackEl.classList.add('mc-show');
    setTimeout(function () {
      feedbackEl.classList.remove('mc-show');
    }, 300);
  }

  function updateSprintHUD() {
    var timerEl = document.getElementById('mc-sprint-time');
    var scoreEl = document.getElementById('mc-sprint-score');
    if (timerEl) {
      timerEl.textContent = sprintState.remaining + 's';
      if (sprintState.remaining <= 10) timerEl.classList.add('mc-urgent');
    }
    if (scoreEl) scoreEl.textContent = sprintState.correct;
  }

  function endSprint() {
    if (sprintTimer) {
      clearInterval(sprintTimer);
      sprintTimer = null;
    }
    if (!sprintState) return;

    var elapsed = SPRINT_DURATION;
    saveResult('sprint:' + currentDomain, sprintState.correct, sprintState.total, elapsed);

    var area = document.getElementById('mc-sprint-area');
    if (!area) return;

    var html = '<div class="mc-results">';
    html += '<div class="mc-results-score">' + sprintState.correct + '</div>';
    html += '<div class="mc-results-label">bonnes r\u00E9ponses en ' + SPRINT_DURATION + 's</div>';
    html += '<div class="mc-results-detail">' + sprintState.total + ' questions tent\u00E9es</div>';
    if (sprintState.total > 0) {
      html += '<div class="mc-results-detail">Pr\u00E9cision : ' + Math.round(sprintState.correct / sprintState.total * 100) + '%</div>';
    }
    html += '<div style="margin-top:24px">';
    html += '<button class="mc-btn" id="mc-sprint-retry">Recommencer</button>';
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    document.getElementById('mc-sprint-retry').addEventListener('click', function () {
      renderTabContent();
    });

    // Clean up feedback
    if (feedbackEl) {
      feedbackEl.classList.remove('mc-show');
    }
  }

  // ══════════════════════════════════════════
  //  HELPERS
  // ══════════════════════════════════════════

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    if (m > 0) return m + 'min ' + s + 's';
    return s + 's';
  }

  // ══════════════════════════════════════════
  //  LAUNCH (direct domain access)
  // ══════════════════════════════════════════

  function launch(action, arg) {
    if (!rootEl) return;
    if (DOMAINS[action]) {
      renderDomainView(action, arg || 'learn');
    }
  }

  // ══════════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════════

  return {
    renderPanel: renderPanel,
    launch: launch
  };

})();
