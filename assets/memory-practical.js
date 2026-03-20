// ══════════════════════════════════════════════════════
//  Curiosità — Memory Practical Knowledge Module
//  Interactive quizzes for practical everyday knowledge
//  8 domains: capitals, flags, elements, english,
//  spanish, anatomy, firstaid, trivia
// ══════════════════════════════════════════════════════

var MemoryPractical = (function () {
  'use strict';

  // ── Constants ──
  var LS_KEY = 'curiosita_mempractical';
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
  //  DATA — 8 Knowledge Domains
  // ══════════════════════════════════════════

  var DOMAINS = {
    capitals: {
      key: 'capitals',
      name: 'Capitales du monde',
      icon: '🌍',
      description: '80 pays et leurs capitales',
      filterKey: 'continent',
      filterLabel: 'Continent',
      data: [
        // Europe (~25)
        { country: 'France', capital: 'Paris', continent: 'Europe' },
        { country: 'Allemagne', capital: 'Berlin', continent: 'Europe' },
        { country: 'Italie', capital: 'Rome', continent: 'Europe' },
        { country: 'Espagne', capital: 'Madrid', continent: 'Europe' },
        { country: 'Portugal', capital: 'Lisbonne', continent: 'Europe' },
        { country: 'Royaume-Uni', capital: 'Londres', continent: 'Europe' },
        { country: 'Belgique', capital: 'Bruxelles', continent: 'Europe' },
        { country: 'Suisse', capital: 'Berne', continent: 'Europe' },
        { country: 'Pays-Bas', capital: 'Amsterdam', continent: 'Europe' },
        { country: 'Autriche', capital: 'Vienne', continent: 'Europe' },
        { country: 'Pologne', capital: 'Varsovie', continent: 'Europe' },
        { country: 'Suède', capital: 'Stockholm', continent: 'Europe' },
        { country: 'Norvège', capital: 'Oslo', continent: 'Europe' },
        { country: 'Danemark', capital: 'Copenhague', continent: 'Europe' },
        { country: 'Finlande', capital: 'Helsinki', continent: 'Europe' },
        { country: 'Grèce', capital: 'Athènes', continent: 'Europe' },
        { country: 'Turquie', capital: 'Ankara', continent: 'Europe' },
        { country: 'Russie', capital: 'Moscou', continent: 'Europe' },
        { country: 'Ukraine', capital: 'Kiev', continent: 'Europe' },
        { country: 'Roumanie', capital: 'Bucarest', continent: 'Europe' },
        { country: 'Hongrie', capital: 'Budapest', continent: 'Europe' },
        { country: 'Tchéquie', capital: 'Prague', continent: 'Europe' },
        { country: 'Irlande', capital: 'Dublin', continent: 'Europe' },
        { country: 'Croatie', capital: 'Zagreb', continent: 'Europe' },
        { country: 'Serbie', capital: 'Belgrade', continent: 'Europe' },
        // Asie (~20)
        { country: 'Japon', capital: 'Tokyo', continent: 'Asie' },
        { country: 'Chine', capital: 'Pékin', continent: 'Asie' },
        { country: 'Inde', capital: 'New Delhi', continent: 'Asie' },
        { country: 'Corée du Sud', capital: 'Séoul', continent: 'Asie' },
        { country: 'Thaïlande', capital: 'Bangkok', continent: 'Asie' },
        { country: 'Vietnam', capital: 'Hanoï', continent: 'Asie' },
        { country: 'Indonésie', capital: 'Jakarta', continent: 'Asie' },
        { country: 'Philippines', capital: 'Manille', continent: 'Asie' },
        { country: 'Malaisie', capital: 'Kuala Lumpur', continent: 'Asie' },
        { country: 'Pakistan', capital: 'Islamabad', continent: 'Asie' },
        { country: 'Bangladesh', capital: 'Dacca', continent: 'Asie' },
        { country: 'Iran', capital: 'Téhéran', continent: 'Asie' },
        { country: 'Irak', capital: 'Bagdad', continent: 'Asie' },
        { country: 'Arabie saoudite', capital: 'Riyad', continent: 'Asie' },
        { country: 'Israël', capital: 'Jérusalem', continent: 'Asie' },
        { country: 'Émirats arabes unis', capital: 'Abou Dabi', continent: 'Asie' },
        { country: 'Afghanistan', capital: 'Kaboul', continent: 'Asie' },
        { country: 'Myanmar', capital: 'Naypyidaw', continent: 'Asie' },
        { country: 'Népal', capital: 'Katmandou', continent: 'Asie' },
        { country: 'Sri Lanka', capital: 'Sri Jayawardenepura', continent: 'Asie' },
        // Afrique (~15)
        { country: 'Maroc', capital: 'Rabat', continent: 'Afrique' },
        { country: 'Algérie', capital: 'Alger', continent: 'Afrique' },
        { country: 'Tunisie', capital: 'Tunis', continent: 'Afrique' },
        { country: 'Égypte', capital: 'Le Caire', continent: 'Afrique' },
        { country: 'Afrique du Sud', capital: 'Pretoria', continent: 'Afrique' },
        { country: 'Nigeria', capital: 'Abuja', continent: 'Afrique' },
        { country: 'Kenya', capital: 'Nairobi', continent: 'Afrique' },
        { country: 'Éthiopie', capital: 'Addis-Abeba', continent: 'Afrique' },
        { country: 'Sénégal', capital: 'Dakar', continent: 'Afrique' },
        { country: 'Côte d\'Ivoire', capital: 'Yamoussoukro', continent: 'Afrique' },
        { country: 'Ghana', capital: 'Accra', continent: 'Afrique' },
        { country: 'Cameroun', capital: 'Yaoundé', continent: 'Afrique' },
        { country: 'RD Congo', capital: 'Kinshasa', continent: 'Afrique' },
        { country: 'Tanzanie', capital: 'Dodoma', continent: 'Afrique' },
        { country: 'Madagascar', capital: 'Antananarivo', continent: 'Afrique' },
        // Amériques (~15)
        { country: 'États-Unis', capital: 'Washington D.C.', continent: 'Amériques' },
        { country: 'Canada', capital: 'Ottawa', continent: 'Amériques' },
        { country: 'Mexique', capital: 'Mexico', continent: 'Amériques' },
        { country: 'Brésil', capital: 'Brasilia', continent: 'Amériques' },
        { country: 'Argentine', capital: 'Buenos Aires', continent: 'Amériques' },
        { country: 'Colombie', capital: 'Bogota', continent: 'Amériques' },
        { country: 'Pérou', capital: 'Lima', continent: 'Amériques' },
        { country: 'Chili', capital: 'Santiago', continent: 'Amériques' },
        { country: 'Venezuela', capital: 'Caracas', continent: 'Amériques' },
        { country: 'Cuba', capital: 'La Havane', continent: 'Amériques' },
        { country: 'Haïti', capital: 'Port-au-Prince', continent: 'Amériques' },
        { country: 'Uruguay', capital: 'Montevideo', continent: 'Amériques' },
        { country: 'Équateur', capital: 'Quito', continent: 'Amériques' },
        { country: 'Bolivie', capital: 'Sucre', continent: 'Amériques' },
        { country: 'Costa Rica', capital: 'San José', continent: 'Amériques' },
        // Océanie (~5)
        { country: 'Australie', capital: 'Canberra', continent: 'Océanie' },
        { country: 'Nouvelle-Zélande', capital: 'Wellington', continent: 'Océanie' },
        { country: 'Fidji', capital: 'Suva', continent: 'Océanie' },
        { country: 'Papouasie-Nouvelle-Guinée', capital: 'Port Moresby', continent: 'Océanie' },
        { country: 'Samoa', capital: 'Apia', continent: 'Océanie' }
      ],
      getQuestion: function (item) { return item.country; },
      getAnswer: function (item) { return item.capital; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.capital !== item.capital; })
          .map(function (d) { return d.capital; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.country + '</strong> <span class="mk-muted">(' + item.continent + ')</span> → ' + item.capital;
      }
    },

    flags: {
      key: 'flags',
      name: 'Drapeaux d\'Europe',
      icon: '🏴',
      description: '30 drapeaux européens',
      filterKey: null,
      data: [
        { country: 'France', flag: '\u{1F1EB}\u{1F1F7}', colors: 'bleu, blanc, rouge (vertical)' },
        { country: 'Allemagne', flag: '\u{1F1E9}\u{1F1EA}', colors: 'noir, rouge, or (horizontal)' },
        { country: 'Italie', flag: '\u{1F1EE}\u{1F1F9}', colors: 'vert, blanc, rouge (vertical)' },
        { country: 'Espagne', flag: '\u{1F1EA}\u{1F1F8}', colors: 'rouge, jaune, rouge (horizontal)' },
        { country: 'Portugal', flag: '\u{1F1F5}\u{1F1F9}', colors: 'vert, rouge (vertical) + armoiries' },
        { country: 'Royaume-Uni', flag: '\u{1F1EC}\u{1F1E7}', colors: 'Union Jack : croix rouge, blanc, bleu' },
        { country: 'Belgique', flag: '\u{1F1E7}\u{1F1EA}', colors: 'noir, jaune, rouge (vertical)' },
        { country: 'Pays-Bas', flag: '\u{1F1F3}\u{1F1F1}', colors: 'rouge, blanc, bleu (horizontal)' },
        { country: 'Suisse', flag: '\u{1F1E8}\u{1F1ED}', colors: 'rouge avec croix blanche' },
        { country: 'Autriche', flag: '\u{1F1E6}\u{1F1F9}', colors: 'rouge, blanc, rouge (horizontal)' },
        { country: 'Pologne', flag: '\u{1F1F5}\u{1F1F1}', colors: 'blanc, rouge (horizontal)' },
        { country: 'Suède', flag: '\u{1F1F8}\u{1F1EA}', colors: 'bleu avec croix jaune' },
        { country: 'Norvège', flag: '\u{1F1F3}\u{1F1F4}', colors: 'rouge avec croix bleu-blanc' },
        { country: 'Danemark', flag: '\u{1F1E9}\u{1F1F0}', colors: 'rouge avec croix blanche' },
        { country: 'Finlande', flag: '\u{1F1EB}\u{1F1EE}', colors: 'blanc avec croix bleue' },
        { country: 'Grèce', flag: '\u{1F1EC}\u{1F1F7}', colors: 'bandes bleu et blanc + croix' },
        { country: 'Irlande', flag: '\u{1F1EE}\u{1F1EA}', colors: 'vert, blanc, orange (vertical)' },
        { country: 'Roumanie', flag: '\u{1F1F7}\u{1F1F4}', colors: 'bleu, jaune, rouge (vertical)' },
        { country: 'Hongrie', flag: '\u{1F1ED}\u{1F1FA}', colors: 'rouge, blanc, vert (horizontal)' },
        { country: 'Tchéquie', flag: '\u{1F1E8}\u{1F1FF}', colors: 'blanc, rouge (horizontal) + triangle bleu' },
        { country: 'Croatie', flag: '\u{1F1ED}\u{1F1F7}', colors: 'rouge, blanc, bleu + damier' },
        { country: 'Serbie', flag: '\u{1F1F7}\u{1F1F8}', colors: 'rouge, bleu, blanc (horizontal) + armoiries' },
        { country: 'Ukraine', flag: '\u{1F1FA}\u{1F1E6}', colors: 'bleu et jaune (horizontal)' },
        { country: 'Bulgarie', flag: '\u{1F1E7}\u{1F1EC}', colors: 'blanc, vert, rouge (horizontal)' },
        { country: 'Slovaquie', flag: '\u{1F1F8}\u{1F1F0}', colors: 'blanc, bleu, rouge + armoiries' },
        { country: 'Lituanie', flag: '\u{1F1F1}\u{1F1F9}', colors: 'jaune, vert, rouge (horizontal)' },
        { country: 'Lettonie', flag: '\u{1F1F1}\u{1F1FB}', colors: 'grenat, blanc, grenat (horizontal)' },
        { country: 'Estonie', flag: '\u{1F1EA}\u{1F1EA}', colors: 'bleu, noir, blanc (horizontal)' },
        { country: 'Islande', flag: '\u{1F1EE}\u{1F1F8}', colors: 'bleu avec croix rouge-blanc' },
        { country: 'Luxembourg', flag: '\u{1F1F1}\u{1F1FA}', colors: 'rouge, blanc, bleu clair (horizontal)' }
      ],
      getQuestion: function (item) { return item.flag; },
      getAnswer: function (item) { return item.country; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.country !== item.country; })
          .map(function (d) { return d.country; });
      },
      questionClass: 'mk-flag-big',
      formatLearn: function (item) {
        return '<span style="font-size:2rem">' + item.flag + '</span> <strong>' + item.country + '</strong> — ' + item.colors;
      }
    },

    elements: {
      key: 'elements',
      name: 'Table périodique',
      icon: '⚛️',
      description: '30 éléments chimiques essentiels',
      filterKey: 'category',
      filterLabel: 'Catégorie',
      data: [
        { symbol: 'H', name: 'Hydrogène', number: 1, category: 'Non-métal' },
        { symbol: 'He', name: 'Hélium', number: 2, category: 'Gaz noble' },
        { symbol: 'Li', name: 'Lithium', number: 3, category: 'Métal alcalin' },
        { symbol: 'Be', name: 'Béryllium', number: 4, category: 'Métal alcalino-terreux' },
        { symbol: 'B', name: 'Bore', number: 5, category: 'Métalloïde' },
        { symbol: 'C', name: 'Carbone', number: 6, category: 'Non-métal' },
        { symbol: 'N', name: 'Azote', number: 7, category: 'Non-métal' },
        { symbol: 'O', name: 'Oxygène', number: 8, category: 'Non-métal' },
        { symbol: 'F', name: 'Fluor', number: 9, category: 'Halogène' },
        { symbol: 'Ne', name: 'Néon', number: 10, category: 'Gaz noble' },
        { symbol: 'Na', name: 'Sodium', number: 11, category: 'Métal alcalin' },
        { symbol: 'Mg', name: 'Magnésium', number: 12, category: 'Métal alcalino-terreux' },
        { symbol: 'Al', name: 'Aluminium', number: 13, category: 'Métal pauvre' },
        { symbol: 'Si', name: 'Silicium', number: 14, category: 'Métalloïde' },
        { symbol: 'P', name: 'Phosphore', number: 15, category: 'Non-métal' },
        { symbol: 'S', name: 'Soufre', number: 16, category: 'Non-métal' },
        { symbol: 'Cl', name: 'Chlore', number: 17, category: 'Halogène' },
        { symbol: 'Ar', name: 'Argon', number: 18, category: 'Gaz noble' },
        { symbol: 'K', name: 'Potassium', number: 19, category: 'Métal alcalin' },
        { symbol: 'Ca', name: 'Calcium', number: 20, category: 'Métal alcalino-terreux' },
        { symbol: 'Fe', name: 'Fer', number: 26, category: 'Métal de transition' },
        { symbol: 'Cu', name: 'Cuivre', number: 29, category: 'Métal de transition' },
        { symbol: 'Zn', name: 'Zinc', number: 30, category: 'Métal de transition' },
        { symbol: 'Ag', name: 'Argent', number: 47, category: 'Métal de transition' },
        { symbol: 'Sn', name: 'Étain', number: 50, category: 'Métal pauvre' },
        { symbol: 'Au', name: 'Or', number: 79, category: 'Métal de transition' },
        { symbol: 'Hg', name: 'Mercure', number: 80, category: 'Métal de transition' },
        { symbol: 'Pb', name: 'Plomb', number: 82, category: 'Métal pauvre' },
        { symbol: 'Pt', name: 'Platine', number: 78, category: 'Métal de transition' },
        { symbol: 'U', name: 'Uranium', number: 92, category: 'Actinide' }
      ],
      getQuestion: function (item) { return item.symbol + ' (n°' + item.number + ')'; },
      getAnswer: function (item) { return item.name; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.name !== item.name; })
          .map(function (d) { return d.name; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.symbol + '</strong> — ' + item.name + ' <span class="mk-muted">(n°' + item.number + ', ' + item.category + ')</span>';
      }
    },

    english: {
      key: 'english',
      name: 'Vocabulaire anglais',
      icon: '🇬🇧',
      description: '100 mots essentiels FR → EN',
      filterKey: 'category',
      filterLabel: 'Catégorie',
      data: [
        // Salutations (10)
        { fr: 'bonjour', en: 'hello', category: 'salutations' },
        { fr: 'au revoir', en: 'goodbye', category: 'salutations' },
        { fr: 'merci', en: 'thank you', category: 'salutations' },
        { fr: 's\'il vous plaît', en: 'please', category: 'salutations' },
        { fr: 'excusez-moi', en: 'excuse me', category: 'salutations' },
        { fr: 'bonsoir', en: 'good evening', category: 'salutations' },
        { fr: 'bonne nuit', en: 'good night', category: 'salutations' },
        { fr: 'comment allez-vous', en: 'how are you', category: 'salutations' },
        { fr: 'bienvenue', en: 'welcome', category: 'salutations' },
        { fr: 'enchanté', en: 'nice to meet you', category: 'salutations' },
        // Nourriture (15)
        { fr: 'pain', en: 'bread', category: 'nourriture' },
        { fr: 'eau', en: 'water', category: 'nourriture' },
        { fr: 'lait', en: 'milk', category: 'nourriture' },
        { fr: 'viande', en: 'meat', category: 'nourriture' },
        { fr: 'poisson', en: 'fish', category: 'nourriture' },
        { fr: 'fromage', en: 'cheese', category: 'nourriture' },
        { fr: 'œuf', en: 'egg', category: 'nourriture' },
        { fr: 'pomme', en: 'apple', category: 'nourriture' },
        { fr: 'riz', en: 'rice', category: 'nourriture' },
        { fr: 'sucre', en: 'sugar', category: 'nourriture' },
        { fr: 'sel', en: 'salt', category: 'nourriture' },
        { fr: 'beurre', en: 'butter', category: 'nourriture' },
        { fr: 'légume', en: 'vegetable', category: 'nourriture' },
        { fr: 'fruit', en: 'fruit', category: 'nourriture' },
        { fr: 'boisson', en: 'drink', category: 'nourriture' },
        // Corps (10)
        { fr: 'tête', en: 'head', category: 'corps' },
        { fr: 'main', en: 'hand', category: 'corps' },
        { fr: 'pied', en: 'foot', category: 'corps' },
        { fr: 'œil', en: 'eye', category: 'corps' },
        { fr: 'bouche', en: 'mouth', category: 'corps' },
        { fr: 'cœur', en: 'heart', category: 'corps' },
        { fr: 'bras', en: 'arm', category: 'corps' },
        { fr: 'jambe', en: 'leg', category: 'corps' },
        { fr: 'dos', en: 'back', category: 'corps' },
        { fr: 'doigt', en: 'finger', category: 'corps' },
        // Maison (10)
        { fr: 'maison', en: 'house', category: 'maison' },
        { fr: 'porte', en: 'door', category: 'maison' },
        { fr: 'fenêtre', en: 'window', category: 'maison' },
        { fr: 'cuisine', en: 'kitchen', category: 'maison' },
        { fr: 'chambre', en: 'bedroom', category: 'maison' },
        { fr: 'salle de bain', en: 'bathroom', category: 'maison' },
        { fr: 'table', en: 'table', category: 'maison' },
        { fr: 'chaise', en: 'chair', category: 'maison' },
        { fr: 'lit', en: 'bed', category: 'maison' },
        { fr: 'escalier', en: 'stairs', category: 'maison' },
        // Travail (10)
        { fr: 'travail', en: 'work', category: 'travail' },
        { fr: 'bureau', en: 'office', category: 'travail' },
        { fr: 'ordinateur', en: 'computer', category: 'travail' },
        { fr: 'réunion', en: 'meeting', category: 'travail' },
        { fr: 'patron', en: 'boss', category: 'travail' },
        { fr: 'collègue', en: 'colleague', category: 'travail' },
        { fr: 'salaire', en: 'salary', category: 'travail' },
        { fr: 'entreprise', en: 'company', category: 'travail' },
        { fr: 'emploi', en: 'job', category: 'travail' },
        { fr: 'projet', en: 'project', category: 'travail' },
        // Voyages (15)
        { fr: 'aéroport', en: 'airport', category: 'voyages' },
        { fr: 'gare', en: 'train station', category: 'voyages' },
        { fr: 'hôtel', en: 'hotel', category: 'voyages' },
        { fr: 'billet', en: 'ticket', category: 'voyages' },
        { fr: 'valise', en: 'suitcase', category: 'voyages' },
        { fr: 'passeport', en: 'passport', category: 'voyages' },
        { fr: 'avion', en: 'airplane', category: 'voyages' },
        { fr: 'train', en: 'train', category: 'voyages' },
        { fr: 'voiture', en: 'car', category: 'voyages' },
        { fr: 'carte', en: 'map', category: 'voyages' },
        { fr: 'plage', en: 'beach', category: 'voyages' },
        { fr: 'montagne', en: 'mountain', category: 'voyages' },
        { fr: 'pays', en: 'country', category: 'voyages' },
        { fr: 'ville', en: 'city', category: 'voyages' },
        { fr: 'rue', en: 'street', category: 'voyages' },
        // Émotions (10)
        { fr: 'heureux', en: 'happy', category: 'émotions' },
        { fr: 'triste', en: 'sad', category: 'émotions' },
        { fr: 'en colère', en: 'angry', category: 'émotions' },
        { fr: 'fatigué', en: 'tired', category: 'émotions' },
        { fr: 'peur', en: 'fear', category: 'émotions' },
        { fr: 'amour', en: 'love', category: 'émotions' },
        { fr: 'surprise', en: 'surprise', category: 'émotions' },
        { fr: 'confiance', en: 'confidence', category: 'émotions' },
        { fr: 'joie', en: 'joy', category: 'émotions' },
        { fr: 'espoir', en: 'hope', category: 'émotions' },
        // Temps (10)
        { fr: 'aujourd\'hui', en: 'today', category: 'temps' },
        { fr: 'demain', en: 'tomorrow', category: 'temps' },
        { fr: 'hier', en: 'yesterday', category: 'temps' },
        { fr: 'maintenant', en: 'now', category: 'temps' },
        { fr: 'toujours', en: 'always', category: 'temps' },
        { fr: 'jamais', en: 'never', category: 'temps' },
        { fr: 'semaine', en: 'week', category: 'temps' },
        { fr: 'mois', en: 'month', category: 'temps' },
        { fr: 'année', en: 'year', category: 'temps' },
        { fr: 'heure', en: 'hour', category: 'temps' },
        // Nature (10)
        { fr: 'soleil', en: 'sun', category: 'nature' },
        { fr: 'lune', en: 'moon', category: 'nature' },
        { fr: 'étoile', en: 'star', category: 'nature' },
        { fr: 'arbre', en: 'tree', category: 'nature' },
        { fr: 'fleur', en: 'flower', category: 'nature' },
        { fr: 'rivière', en: 'river', category: 'nature' },
        { fr: 'mer', en: 'sea', category: 'nature' },
        { fr: 'ciel', en: 'sky', category: 'nature' },
        { fr: 'terre', en: 'earth', category: 'nature' },
        { fr: 'animal', en: 'animal', category: 'nature' }
      ],
      getQuestion: function (item) { return item.fr; },
      getAnswer: function (item) { return item.en; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.en !== item.en; })
          .map(function (d) { return d.en; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.fr + '</strong> → ' + item.en + ' <span class="mk-muted">(' + item.category + ')</span>';
      }
    },

    spanish: {
      key: 'spanish',
      name: 'Vocabulaire espagnol',
      icon: '🇪🇸',
      description: '80 mots essentiels FR → ES',
      filterKey: 'category',
      filterLabel: 'Catégorie',
      data: [
        // Saludos (10)
        { fr: 'bonjour', es: 'hola', category: 'saludos' },
        { fr: 'au revoir', es: 'adiós', category: 'saludos' },
        { fr: 'merci', es: 'gracias', category: 'saludos' },
        { fr: 's\'il vous plaît', es: 'por favor', category: 'saludos' },
        { fr: 'bonsoir', es: 'buenas tardes', category: 'saludos' },
        { fr: 'bonne nuit', es: 'buenas noches', category: 'saludos' },
        { fr: 'comment allez-vous', es: '¿cómo está usted?', category: 'saludos' },
        { fr: 'excusez-moi', es: 'perdone', category: 'saludos' },
        { fr: 'bienvenue', es: 'bienvenido', category: 'saludos' },
        { fr: 'enchanté', es: 'encantado', category: 'saludos' },
        // Comida (12)
        { fr: 'pain', es: 'pan', category: 'comida' },
        { fr: 'eau', es: 'agua', category: 'comida' },
        { fr: 'lait', es: 'leche', category: 'comida' },
        { fr: 'viande', es: 'carne', category: 'comida' },
        { fr: 'poisson', es: 'pescado', category: 'comida' },
        { fr: 'fromage', es: 'queso', category: 'comida' },
        { fr: 'œuf', es: 'huevo', category: 'comida' },
        { fr: 'pomme', es: 'manzana', category: 'comida' },
        { fr: 'riz', es: 'arroz', category: 'comida' },
        { fr: 'sucre', es: 'azúcar', category: 'comida' },
        { fr: 'sel', es: 'sal', category: 'comida' },
        { fr: 'légume', es: 'verdura', category: 'comida' },
        // Cuerpo (8)
        { fr: 'tête', es: 'cabeza', category: 'cuerpo' },
        { fr: 'main', es: 'mano', category: 'cuerpo' },
        { fr: 'pied', es: 'pie', category: 'cuerpo' },
        { fr: 'œil', es: 'ojo', category: 'cuerpo' },
        { fr: 'bouche', es: 'boca', category: 'cuerpo' },
        { fr: 'cœur', es: 'corazón', category: 'cuerpo' },
        { fr: 'bras', es: 'brazo', category: 'cuerpo' },
        { fr: 'jambe', es: 'pierna', category: 'cuerpo' },
        // Casa (10)
        { fr: 'maison', es: 'casa', category: 'casa' },
        { fr: 'porte', es: 'puerta', category: 'casa' },
        { fr: 'fenêtre', es: 'ventana', category: 'casa' },
        { fr: 'cuisine', es: 'cocina', category: 'casa' },
        { fr: 'chambre', es: 'habitación', category: 'casa' },
        { fr: 'salle de bain', es: 'baño', category: 'casa' },
        { fr: 'table', es: 'mesa', category: 'casa' },
        { fr: 'chaise', es: 'silla', category: 'casa' },
        { fr: 'lit', es: 'cama', category: 'casa' },
        { fr: 'escalier', es: 'escalera', category: 'casa' },
        // Trabajo (8)
        { fr: 'travail', es: 'trabajo', category: 'trabajo' },
        { fr: 'bureau', es: 'oficina', category: 'trabajo' },
        { fr: 'ordinateur', es: 'ordenador', category: 'trabajo' },
        { fr: 'réunion', es: 'reunión', category: 'trabajo' },
        { fr: 'patron', es: 'jefe', category: 'trabajo' },
        { fr: 'collègue', es: 'colega', category: 'trabajo' },
        { fr: 'salaire', es: 'salario', category: 'trabajo' },
        { fr: 'entreprise', es: 'empresa', category: 'trabajo' },
        // Viajes (12)
        { fr: 'aéroport', es: 'aeropuerto', category: 'viajes' },
        { fr: 'gare', es: 'estación', category: 'viajes' },
        { fr: 'hôtel', es: 'hotel', category: 'viajes' },
        { fr: 'billet', es: 'billete', category: 'viajes' },
        { fr: 'valise', es: 'maleta', category: 'viajes' },
        { fr: 'passeport', es: 'pasaporte', category: 'viajes' },
        { fr: 'avion', es: 'avión', category: 'viajes' },
        { fr: 'train', es: 'tren', category: 'viajes' },
        { fr: 'voiture', es: 'coche', category: 'viajes' },
        { fr: 'plage', es: 'playa', category: 'viajes' },
        { fr: 'montagne', es: 'montaña', category: 'viajes' },
        { fr: 'ville', es: 'ciudad', category: 'viajes' },
        // Emociones (10)
        { fr: 'heureux', es: 'feliz', category: 'emociones' },
        { fr: 'triste', es: 'triste', category: 'emociones' },
        { fr: 'en colère', es: 'enfadado', category: 'emociones' },
        { fr: 'fatigué', es: 'cansado', category: 'emociones' },
        { fr: 'peur', es: 'miedo', category: 'emociones' },
        { fr: 'amour', es: 'amor', category: 'emociones' },
        { fr: 'surprise', es: 'sorpresa', category: 'emociones' },
        { fr: 'confiance', es: 'confianza', category: 'emociones' },
        { fr: 'joie', es: 'alegría', category: 'emociones' },
        { fr: 'espoir', es: 'esperanza', category: 'emociones' },
        // Tiempo (10)
        { fr: 'aujourd\'hui', es: 'hoy', category: 'tiempo' },
        { fr: 'demain', es: 'mañana', category: 'tiempo' },
        { fr: 'hier', es: 'ayer', category: 'tiempo' },
        { fr: 'maintenant', es: 'ahora', category: 'tiempo' },
        { fr: 'toujours', es: 'siempre', category: 'tiempo' },
        { fr: 'jamais', es: 'nunca', category: 'tiempo' },
        { fr: 'semaine', es: 'semana', category: 'tiempo' },
        { fr: 'mois', es: 'mes', category: 'tiempo' },
        { fr: 'année', es: 'año', category: 'tiempo' },
        { fr: 'heure', es: 'hora', category: 'tiempo' }
      ],
      getQuestion: function (item) { return item.fr; },
      getAnswer: function (item) { return item.es; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.es !== item.es; })
          .map(function (d) { return d.es; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.fr + '</strong> → ' + item.es + ' <span class="mk-muted">(' + item.category + ')</span>';
      }
    },

    anatomy: {
      key: 'anatomy',
      name: 'Anatomie de base',
      icon: '🫀',
      description: '40 organes et leurs fonctions',
      filterKey: 'system',
      filterLabel: 'Système',
      data: [
        // Cardiovasculaire
        { name: 'Cœur', system: 'Cardiovasculaire', function: 'Pompe le sang dans tout le corps' },
        { name: 'Artères', system: 'Cardiovasculaire', function: 'Transportent le sang oxygéné du cœur vers les organes' },
        { name: 'Veines', system: 'Cardiovasculaire', function: 'Ramènent le sang désoxygéné vers le cœur' },
        { name: 'Capillaires', system: 'Cardiovasculaire', function: 'Échanges de nutriments et gaz entre sang et tissus' },
        { name: 'Rate', system: 'Cardiovasculaire', function: 'Filtre le sang et recycle les globules rouges usés' },
        { name: 'Moelle osseuse', system: 'Cardiovasculaire', function: 'Produit les cellules sanguines (globules, plaquettes)' },
        // Respiratoire
        { name: 'Poumons', system: 'Respiratoire', function: 'Échanges gazeux O\u2082/CO\u2082 avec le sang' },
        { name: 'Trachée', system: 'Respiratoire', function: 'Conduit l\'air entre le larynx et les bronches' },
        { name: 'Bronches', system: 'Respiratoire', function: 'Distribuent l\'air dans les poumons' },
        { name: 'Diaphragme', system: 'Respiratoire', function: 'Muscle principal de la respiration' },
        { name: 'Larynx', system: 'Respiratoire', function: 'Contient les cordes vocales, produit la voix' },
        { name: 'Alvéoles', system: 'Respiratoire', function: 'Petits sacs où se font les échanges gazeux' },
        // Digestif
        { name: 'Estomac', system: 'Digestif', function: 'Digestion chimique par l\'acide gastrique' },
        { name: 'Foie', system: 'Digestif', function: 'Détoxification, production de bile, métabolisme' },
        { name: 'Intestin grêle', system: 'Digestif', function: 'Absorption des nutriments dans le sang' },
        { name: 'Côlon', system: 'Digestif', function: 'Absorption d\'eau et formation des selles' },
        { name: 'Pancréas', system: 'Digestif', function: 'Produit enzymes digestives et insuline' },
        { name: 'Vésicule biliaire', system: 'Digestif', function: 'Stocke et concentre la bile du foie' },
        { name: 'Œsophage', system: 'Digestif', function: 'Transporte les aliments de la bouche à l\'estomac' },
        // Nerveux
        { name: 'Cerveau', system: 'Nerveux', function: 'Centre de contrôle : pensée, mémoire, mouvements' },
        { name: 'Cervelet', system: 'Nerveux', function: 'Coordination des mouvements et équilibre' },
        { name: 'Moelle épinière', system: 'Nerveux', function: 'Transmet les signaux entre cerveau et corps' },
        { name: 'Nerfs', system: 'Nerveux', function: 'Conduisent les influx nerveux vers/depuis le cerveau' },
        { name: 'Hypothalamus', system: 'Nerveux', function: 'Régule température, faim, soif, sommeil' },
        { name: 'Rétine', system: 'Nerveux', function: 'Capte la lumière et la transforme en signaux nerveux' },
        // Musculo-squelettique
        { name: 'Os (squelette)', system: 'Musculo-squelettique', function: 'Soutien structurel, protection des organes (206 os)' },
        { name: 'Muscles squelettiques', system: 'Musculo-squelettique', function: 'Permettent le mouvement volontaire du corps' },
        { name: 'Tendons', system: 'Musculo-squelettique', function: 'Relient les muscles aux os' },
        { name: 'Ligaments', system: 'Musculo-squelettique', function: 'Relient les os entre eux au niveau des articulations' },
        { name: 'Cartilage', system: 'Musculo-squelettique', function: 'Amortit les chocs et réduit la friction articulaire' },
        { name: 'Colonne vertébrale', system: 'Musculo-squelettique', function: 'Soutient le corps et protège la moelle épinière (33 vertèbres)' },
        // Endocrinien
        { name: 'Thyroïde', system: 'Endocrinien', function: 'Régule le métabolisme par les hormones T3/T4' },
        { name: 'Surrénales', system: 'Endocrinien', function: 'Produisent cortisol (stress) et adrénaline' },
        { name: 'Hypophyse', system: 'Endocrinien', function: 'Chef d\'orchestre hormonal, contrôle les autres glandes' },
        { name: 'Reins', system: 'Endocrinien', function: 'Filtrent le sang, produisent l\'urine, régulent la pression' },
        { name: 'Vessie', system: 'Endocrinien', function: 'Stocke l\'urine avant son élimination' },
        { name: 'Peau', system: 'Endocrinien', function: 'Protection, régulation thermique, sensation tactile' },
        { name: 'Ganglions lymphatiques', system: 'Endocrinien', function: 'Filtrent la lymphe et produisent des cellules immunitaires' },
        { name: 'Thymus', system: 'Endocrinien', function: 'Maturation des lymphocytes T (immunité)' },
        { name: 'Glandes salivaires', system: 'Digestif', function: 'Produisent la salive pour la digestion initiale' }
      ],
      getQuestion: function (item) { return item.name; },
      getAnswer: function (item) { return item.function; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.function !== item.function; })
          .map(function (d) { return d.function; });
      },
      quizChoices: 3,
      formatLearn: function (item) {
        return '<strong>' + item.name + '</strong> <span class="mk-muted">(' + item.system + ')</span><br>' + item.function;
      }
    },

    firstaid: {
      key: 'firstaid',
      name: 'Premiers secours',
      icon: '🚑',
      description: '20 gestes qui sauvent',
      filterKey: 'priority',
      filterLabel: 'Priorité',
      data: [
        { scenario: 'Une personne s\'étouffe', action: 'Claques dans le dos puis manœuvre de Heimlich', priority: 'urgent' },
        { scenario: 'Brûlure superficielle', action: 'Eau froide courante pendant 10-15 minutes, ne pas percer les cloques', priority: 'important' },
        { scenario: 'Saignement abondant (hémorragie)', action: 'Compression directe avec un linge propre, appeler le 15', priority: 'urgent' },
        { scenario: 'Suspicion de fracture', action: 'Immobiliser le membre, ne pas bouger la victime, appeler les secours', priority: 'important' },
        { scenario: 'Malaise cardiaque (douleur thoracique)', action: 'Appeler le 15, position semi-assise, desserrer les vêtements', priority: 'urgent' },
        { scenario: 'Signes d\'AVC (visage, bras, parole)', action: 'Appeler le 15 immédiatement, noter l\'heure des symptômes', priority: 'urgent' },
        { scenario: 'Réaction allergique sévère (anaphylaxie)', action: 'Appeler le 15, utiliser l\'auto-injecteur d\'adrénaline si disponible', priority: 'urgent' },
        { scenario: 'Début de noyade', action: 'Sortir la victime de l\'eau, alerter les secours, RCP si inconsciente', priority: 'urgent' },
        { scenario: 'Électrocution', action: 'Couper le courant d\'abord, ne pas toucher la victime, appeler le 15', priority: 'urgent' },
        { scenario: 'Morsure de serpent', action: 'Allonger la victime, immobiliser le membre, ne pas sucer le venin, appeler le 15', priority: 'important' },
        { scenario: 'Piqûre d\'insecte avec gonflement', action: 'Retirer le dard, appliquer du froid, surveiller signes allergiques', priority: 'important' },
        { scenario: 'Hypothermie (froid extrême)', action: 'Mettre à l\'abri, réchauffer progressivement, boisson chaude sucrée', priority: 'important' },
        { scenario: 'Coup de chaleur', action: 'Mettre à l\'ombre, refroidir avec eau, ventiler, appeler le 15', priority: 'urgent' },
        { scenario: 'Crise d\'épilepsie', action: 'Protéger la tête, ne rien mettre dans la bouche, PLS après la crise', priority: 'important' },
        { scenario: 'Intoxication (ingestion de produit)', action: 'Appeler le centre antipoison (01 40 05 48 48), ne pas faire vomir', priority: 'urgent' },
        { scenario: 'Plaie ouverte profonde', action: 'Nettoyer à l\'eau, comprimer, consulter pour points de suture', priority: 'important' },
        { scenario: 'Entorse de cheville', action: 'Protocole RICE : Repos, Ice (glace), Compression, Élévation', priority: 'courant' },
        { scenario: 'Personne inconsciente qui respire', action: 'Position latérale de sécurité (PLS), surveiller la respiration', priority: 'urgent' },
        { scenario: 'Numéros d\'urgence en France', action: '15 (SAMU), 18 (Pompiers), 112 (Urgences européen), 114 (SMS)', priority: 'essentiel' },
        { scenario: 'Arrêt cardiaque (personne inconsciente, ne respire pas)', action: 'Appeler le 15, massage cardiaque 30 compressions / 2 insufflations, utiliser un DAE', priority: 'urgent' }
      ],
      getQuestion: function (item) { return item.scenario; },
      getAnswer: function (item) { return item.action; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.action !== item.action; })
          .map(function (d) { return d.action; });
      },
      quizChoices: 3,
      formatLearn: function (item) {
        var badge = item.priority === 'urgent' ? 'mk-badge-urgent' :
                    item.priority === 'essentiel' ? 'mk-badge-essential' :
                    item.priority === 'important' ? 'mk-badge-important' : 'mk-badge-common';
        return '<span class="' + badge + '">' + item.priority + '</span> <strong>' + item.scenario + '</strong><br>' + item.action;
      }
    },

    trivia: {
      key: 'trivia',
      name: 'Culture générale',
      icon: '🧠',
      description: '50 questions de culture G',
      filterKey: 'category',
      filterLabel: 'Catégorie',
      data: [
        // Géographie (10)
        { question: 'Quel est le plus long fleuve du monde ?', answer: 'Le Nil (6 650 km)', category: 'géographie' },
        { question: 'Quel est le plus grand désert du monde ?', answer: 'Le Sahara (9,2 millions km²)', category: 'géographie' },
        { question: 'Quel est le plus haut sommet du monde ?', answer: 'L\'Everest (8 849 m)', category: 'géographie' },
        { question: 'Quel est le plus grand océan ?', answer: 'L\'océan Pacifique', category: 'géographie' },
        { question: 'Quel est le plus petit pays du monde ?', answer: 'Le Vatican (0,44 km²)', category: 'géographie' },
        { question: 'Quel est le pays le plus peuplé du monde ?', answer: 'L\'Inde (1,4 milliard d\'habitants)', category: 'géographie' },
        { question: 'Combien y a-t-il de continents ?', answer: '7 (Afrique, Antarctique, Asie, Europe, Amérique du Nord, Amérique du Sud, Océanie)', category: 'géographie' },
        { question: 'Quel fleuve traverse Paris ?', answer: 'La Seine', category: 'géographie' },
        { question: 'Quel est le plus grand lac d\'Afrique ?', answer: 'Le lac Victoria', category: 'géographie' },
        { question: 'Dans quel pays se trouve le Machu Picchu ?', answer: 'Au Pérou', category: 'géographie' },
        // Histoire (10)
        { question: 'En quelle année a eu lieu la Révolution française ?', answer: '1789', category: 'histoire' },
        { question: 'Qui a découvert l\'Amérique en 1492 ?', answer: 'Christophe Colomb', category: 'histoire' },
        { question: 'Quand a commencé la Première Guerre mondiale ?', answer: '1914', category: 'histoire' },
        { question: 'Quand a eu lieu la chute du mur de Berlin ?', answer: '9 novembre 1989', category: 'histoire' },
        { question: 'Qui était le premier empereur romain ?', answer: 'Auguste (27 av. J.-C.)', category: 'histoire' },
        { question: 'En quelle année Napoléon a-t-il été couronné empereur ?', answer: '1804', category: 'histoire' },
        { question: 'Quand a été signée la Déclaration universelle des droits de l\'homme ?', answer: '10 décembre 1948', category: 'histoire' },
        { question: 'Qui a inventé l\'imprimerie en Europe ?', answer: 'Johannes Gutenberg (vers 1450)', category: 'histoire' },
        { question: 'Quand l\'homme a-t-il marché sur la Lune pour la première fois ?', answer: '20 juillet 1969 (Apollo 11)', category: 'histoire' },
        { question: 'Quelle civilisation a construit les pyramides de Gizeh ?', answer: 'Les Égyptiens (vers 2560 av. J.-C.)', category: 'histoire' },
        // Sciences (10)
        { question: 'Quelle est la vitesse de la lumière ?', answer: '300 000 km/s (299 792 458 m/s)', category: 'sciences' },
        { question: 'Quelle est la formule chimique de l\'eau ?', answer: 'H₂O', category: 'sciences' },
        { question: 'Combien d\'os compte le squelette humain adulte ?', answer: '206 os', category: 'sciences' },
        { question: 'Quelle planète est surnommée la planète rouge ?', answer: 'Mars', category: 'sciences' },
        { question: 'Qui a formulé la théorie de la relativité ?', answer: 'Albert Einstein (1905 et 1915)', category: 'sciences' },
        { question: 'Quel est l\'élément chimique le plus abondant dans l\'univers ?', answer: 'L\'hydrogène', category: 'sciences' },
        { question: 'Combien de chromosomes possède l\'être humain ?', answer: '46 (23 paires)', category: 'sciences' },
        { question: 'Quelle est la température d\'ébullition de l\'eau au niveau de la mer ?', answer: '100 °C', category: 'sciences' },
        { question: 'Quel gaz les plantes absorbent-elles lors de la photosynthèse ?', answer: 'Le dioxyde de carbone (CO₂)', category: 'sciences' },
        { question: 'Quelle est la planète la plus grande du système solaire ?', answer: 'Jupiter', category: 'sciences' },
        // Art/culture (10)
        { question: 'Qui a peint la Joconde ?', answer: 'Léonard de Vinci', category: 'art' },
        { question: 'Qui a composé la Neuvième Symphonie ?', answer: 'Ludwig van Beethoven', category: 'art' },
        { question: 'Qui a écrit Les Misérables ?', answer: 'Victor Hugo', category: 'art' },
        { question: 'Dans quel musée se trouve la Joconde ?', answer: 'Le Louvre (Paris)', category: 'art' },
        { question: 'Qui a sculpté le David de Florence ?', answer: 'Michel-Ange', category: 'art' },
        { question: 'Qui a écrit Hamlet ?', answer: 'William Shakespeare', category: 'art' },
        { question: 'Quel mouvement artistique Monet représente-t-il ?', answer: 'L\'impressionnisme', category: 'art' },
        { question: 'Qui a peint La Nuit étoilée ?', answer: 'Vincent van Gogh', category: 'art' },
        { question: 'Quel est le roman le plus vendu de tous les temps ?', answer: 'Don Quichotte de Cervantès', category: 'art' },
        { question: 'Qui a composé Les Quatre Saisons ?', answer: 'Antonio Vivaldi', category: 'art' },
        // Nature (10)
        { question: 'Quel est l\'animal terrestre le plus rapide ?', answer: 'Le guépard (120 km/h)', category: 'nature' },
        { question: 'Quel est le plus grand animal vivant ?', answer: 'La baleine bleue (jusqu\'à 30 m)', category: 'nature' },
        { question: 'Combien de pattes a une araignée ?', answer: '8 pattes', category: 'nature' },
        { question: 'Quel est le plus grand arbre du monde ?', answer: 'Le séquoia géant (Hyperion, 115 m)', category: 'nature' },
        { question: 'Quel animal produit le miel ?', answer: 'L\'abeille', category: 'nature' },
        { question: 'Combien de temps dure la gestation d\'un éléphant ?', answer: 'Environ 22 mois', category: 'nature' },
        { question: 'Quel est le seul mammifère capable de voler ?', answer: 'La chauve-souris', category: 'nature' },
        { question: 'De quoi est principalement composée l\'atmosphère terrestre ?', answer: 'D\'azote (78 %) et d\'oxygène (21 %)', category: 'nature' },
        { question: 'Quel est l\'organe le plus grand du corps humain ?', answer: 'La peau', category: 'nature' },
        { question: 'Combien de litres de sang le corps humain contient-il environ ?', answer: 'Environ 5 litres', category: 'nature' }
      ],
      getQuestion: function (item) { return item.question; },
      getAnswer: function (item) { return item.answer; },
      getDistractors: function (item, allData) {
        return allData.filter(function (d) { return d.answer !== item.answer; })
          .map(function (d) { return d.answer; });
      },
      formatLearn: function (item) {
        return '<strong>' + item.question + '</strong><br>' + item.answer + ' <span class="mk-muted">(' + item.category + ')</span>';
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
      dots += i < level ? '<span class="mk-dot mk-dot-filled"></span>' : '<span class="mk-dot"></span>';
    }
    return '<span class="mk-dots">' + dots + '</span>';
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
      '/* Memory Practical Knowledge Module */',

      // Domain selection grid
      '.mk-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; padding: 8px 0; }',
      '.mk-card { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 12px; padding: 20px; cursor: pointer; transition: all .2s ease; }',
      '.mk-card:hover { border-color: var(--accent, #e8c97a); transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,.3); }',
      '.mk-card-icon { font-size: 2rem; margin-bottom: 8px; }',
      '.mk-card-name { font-family: "Playfair Display", serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #f0ede8); margin-bottom: 4px; }',
      '.mk-card-desc { font-size: .85rem; color: var(--muted, #7a7870); margin-bottom: 12px; }',
      '.mk-progress-bar { height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; margin-bottom: 6px; }',
      '.mk-progress-fill { height: 100%; background: var(--accent, #e8c97a); border-radius: 2px; transition: width .3s ease; }',
      '.mk-progress-text { font-size: .75rem; color: var(--muted, #7a7870); }',

      // Header
      '.mk-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }',
      '.mk-back { background: none; border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--text, #f0ede8); border-radius: 8px; padding: 6px 14px; cursor: pointer; font-size: .9rem; transition: border-color .2s; }',
      '.mk-back:hover { border-color: var(--accent, #e8c97a); }',
      '.mk-title { font-family: "Playfair Display", serif; font-size: 1.4rem; font-weight: 600; color: var(--text, #f0ede8); }',
      '.mk-title-icon { font-size: 1.6rem; }',

      // Tabs
      '.mk-tabs { display: flex; gap: 4px; background: var(--surface, #141418); border-radius: 10px; padding: 4px; margin-bottom: 20px; border: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.mk-tab { flex: 1; padding: 10px 16px; text-align: center; border-radius: 8px; font-size: .9rem; color: var(--muted, #7a7870); cursor: pointer; transition: all .2s; border: none; background: none; font-family: inherit; }',
      '.mk-tab:hover { color: var(--text, #f0ede8); }',
      '.mk-tab.active { background: var(--surface2, #1c1c22); color: var(--accent, #e8c97a); font-weight: 500; }',

      // Filter bar
      '.mk-filter { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }',
      '.mk-filter-btn { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--muted, #7a7870); border-radius: 20px; padding: 5px 14px; font-size: .8rem; cursor: pointer; transition: all .2s; font-family: inherit; }',
      '.mk-filter-btn:hover { color: var(--text, #f0ede8); border-color: var(--muted, #7a7870); }',
      '.mk-filter-btn.active { background: var(--accent-dim, rgba(232,201,122,0.1)); border-color: var(--accent, #e8c97a); color: var(--accent, #e8c97a); }',

      // Learn mode
      '.mk-learn-list { display: flex; flex-direction: column; gap: 8px; }',
      '.mk-learn-item { display: flex; align-items: flex-start; gap: 12px; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 16px; font-size: .9rem; line-height: 1.5; color: var(--content-color, rgba(240,237,232,0.85)); }',
      '.mk-learn-item.mk-unmastered { border-left: 3px solid var(--accent, #e8c97a); }',
      '.mk-dots { display: inline-flex; gap: 3px; flex-shrink: 0; margin-top: 4px; }',
      '.mk-dot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid var(--muted, #7a7870); display: inline-block; }',
      '.mk-dot-filled { background: var(--accent, #e8c97a); border-color: var(--accent, #e8c97a); }',
      '.mk-learn-content { flex: 1; }',
      '.mk-muted { color: var(--muted, #7a7870); }',

      // Quiz mode
      '.mk-quiz-container { max-width: 600px; margin: 0 auto; }',
      '.mk-quiz-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: .85rem; color: var(--muted, #7a7870); }',
      '.mk-quiz-bar { flex: 1; height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; }',
      '.mk-quiz-bar-fill { height: 100%; background: var(--accent, #e8c97a); transition: width .3s ease; border-radius: 2px; }',
      '.mk-question { font-family: "Playfair Display", serif; font-size: 1.3rem; text-align: center; color: var(--text, #f0ede8); margin-bottom: 24px; padding: 20px; min-height: 80px; display: flex; align-items: center; justify-content: center; }',
      '.mk-flag-big { font-size: 4rem; }',
      '.mk-choices { display: flex; flex-direction: column; gap: 10px; }',
      '.mk-choice { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 18px; color: var(--text, #f0ede8); font-size: .95rem; cursor: pointer; transition: all .2s; text-align: left; font-family: inherit; line-height: 1.4; }',
      '.mk-choice:hover:not(.mk-disabled) { border-color: var(--accent, #e8c97a); background: var(--surface2, #1c1c22); }',
      '.mk-choice.mk-correct { border-color: var(--green, #69f0ae); background: var(--green-dim, rgba(105,240,174,0.1)); color: var(--green, #69f0ae); }',
      '.mk-choice.mk-wrong { border-color: var(--red, #ff5252); background: var(--red-dim, rgba(255,82,82,0.1)); color: var(--red-text, #ff8a80); }',
      '.mk-choice.mk-disabled { cursor: default; opacity: 0.6; }',
      '.mk-choice.mk-reveal { border-color: var(--green, #69f0ae); opacity: 1; }',

      // Quiz results
      '.mk-results { text-align: center; padding: 30px 0; }',
      '.mk-results-score { font-family: "Playfair Display", serif; font-size: 2.5rem; font-weight: 700; color: var(--accent, #e8c97a); margin-bottom: 8px; }',
      '.mk-results-label { font-size: 1rem; color: var(--muted, #7a7870); margin-bottom: 24px; }',
      '.mk-results-detail { font-size: .9rem; color: var(--content-color, rgba(240,237,232,0.85)); margin-bottom: 6px; }',
      '.mk-btn { background: var(--accent, #e8c97a); color: var(--bg, #0c0c0e); border: none; border-radius: 10px; padding: 12px 28px; font-size: 1rem; font-weight: 600; cursor: pointer; font-family: inherit; transition: opacity .2s; margin-top: 20px; }',
      '.mk-btn:hover { opacity: .85; }',
      '.mk-btn-secondary { background: var(--surface2, #1c1c22); color: var(--text, #f0ede8); border: 1px solid var(--border, rgba(240,237,232,0.08)); margin-left: 10px; }',
      '.mk-btn-secondary:hover { border-color: var(--accent, #e8c97a); opacity: 1; }',

      // Sprint mode
      '.mk-sprint-hud { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 12px 16px; background: var(--surface, #141418); border-radius: 10px; border: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.mk-sprint-timer { font-family: "JetBrains Mono", monospace; font-size: 1.6rem; font-weight: 700; color: var(--accent, #e8c97a); }',
      '.mk-sprint-timer.mk-urgent { color: var(--red, #ff5252); }',
      '.mk-sprint-score { font-size: 1.1rem; color: var(--text, #f0ede8); }',
      '.mk-sprint-score span { color: var(--accent, #e8c97a); font-weight: 600; }',
      '.mk-sprint-start { text-align: center; padding: 40px 0; }',
      '.mk-sprint-start p { color: var(--muted, #7a7870); font-size: 1rem; margin-bottom: 24px; }',
      '.mk-sprint-feedback { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 3rem; font-weight: 700; pointer-events: none; opacity: 0; transition: opacity .15s; z-index: 9999; }',
      '.mk-sprint-feedback.mk-show { opacity: 1; }',

      // Badges for first aid
      '.mk-badge-urgent { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: .7rem; font-weight: 600; text-transform: uppercase; background: var(--red-dim, rgba(255,82,82,0.1)); color: var(--red, #ff5252); border: 1px solid var(--red-border, rgba(255,82,82,0.3)); margin-right: 6px; }',
      '.mk-badge-essential { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: .7rem; font-weight: 600; text-transform: uppercase; background: var(--accent-dim, rgba(232,201,122,0.1)); color: var(--accent, #e8c97a); border: 1px solid rgba(232,201,122,0.3); margin-right: 6px; }',
      '.mk-badge-important { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: .7rem; font-weight: 600; text-transform: uppercase; background: rgba(255,215,64,0.1); color: var(--yellow, #ffd740); border: 1px solid rgba(255,215,64,0.3); margin-right: 6px; }',
      '.mk-badge-common { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: .7rem; font-weight: 600; text-transform: uppercase; background: rgba(240,237,232,0.05); color: var(--muted, #7a7870); border: 1px solid var(--border, rgba(240,237,232,0.08)); margin-right: 6px; }',

      // Section title
      '.mk-section-title { font-family: "Playfair Display", serif; font-size: 1.1rem; color: var(--text, #f0ede8); margin-bottom: 16px; }',

      // Responsive
      '@media (max-width: 600px) {',
      '  .mk-grid { grid-template-columns: 1fr; }',
      '  .mk-tabs { flex-wrap: wrap; }',
      '  .mk-question { font-size: 1.1rem; padding: 14px; }',
      '  .mk-flag-big { font-size: 3rem; }',
      '  .mk-header { gap: 8px; }',
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
    var html = '<div class="mk-section-title">Connaissances pratiques</div>';
    html += '<div class="mk-grid">';
    var keys = Object.keys(DOMAINS);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var domain = DOMAINS[key];
      var prog = getDomainProgress(key);
      var pct = prog.total > 0 ? Math.round(prog.mastered / prog.total * 100) : 0;
      html += '<div class="mk-card" data-domain="' + key + '">';
      html += '<div class="mk-card-icon">' + domain.icon + '</div>';
      html += '<div class="mk-card-name">' + escapeHtml(domain.name) + '</div>';
      html += '<div class="mk-card-desc">' + escapeHtml(domain.description) + '</div>';
      html += '<div class="mk-progress-bar"><div class="mk-progress-fill" style="width:' + pct + '%"></div></div>';
      html += '<div class="mk-progress-text">' + prog.mastered + '/' + prog.total + ' maîtrisés</div>';
      html += '</div>';
    }
    html += '</div>';
    rootEl.innerHTML = html;

    // Bind clicks
    rootEl.querySelectorAll('.mk-card[data-domain]').forEach(function (card) {
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
    html += '<div class="mk-header">';
    html += '<button class="mk-back" id="mk-back-btn">\u2190 Retour</button>';
    html += '<span class="mk-title-icon">' + domain.icon + '</span>';
    html += '<span class="mk-title">' + escapeHtml(domain.name) + '</span>';
    html += '</div>';

    // Tabs
    html += '<div class="mk-tabs">';
    html += '<button class="mk-tab' + (currentTab === 'learn' ? ' active' : '') + '" data-mk-tab="learn">Apprendre</button>';
    html += '<button class="mk-tab' + (currentTab === 'quiz' ? ' active' : '') + '" data-mk-tab="quiz">Quiz</button>';
    html += '<button class="mk-tab' + (currentTab === 'sprint' ? ' active' : '') + '" data-mk-tab="sprint">Sprint</button>';
    html += '</div>';

    // Content area
    html += '<div id="mk-tab-content"></div>';

    rootEl.innerHTML = html;

    // Bind back
    document.getElementById('mk-back-btn').addEventListener('click', function () {
      renderDomainGrid();
    });

    // Bind tabs
    rootEl.querySelectorAll('.mk-tab[data-mk-tab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.mk-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.dataset.mkTab;
        currentFilter = null;
        renderTabContent();
      });
    });

    renderTabContent();
  }

  function renderTabContent() {
    var container = document.getElementById('mk-tab-content');
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
    html += '<div class="mk-filter">';
    html += '<button class="mk-filter-btn' + (!currentFilter ? ' active' : '') + '" data-mk-learn-filter="all">Tous</button>';
    html += '<button class="mk-filter-btn' + (currentFilter === 'unmastered' ? ' active' : '') + '" data-mk-learn-filter="unmastered">\u00C0 apprendre</button>';
    html += '<button class="mk-filter-btn' + (currentFilter === 'mastered' ? ' active' : '') + '" data-mk-learn-filter="mastered">Ma\u00EEtris\u00E9s</button>';

    // Domain-specific filter
    if (domain.filterKey) {
      var filterValues = getFilterValues(domain);
      html += '<span style="width:1px;background:var(--border);margin:0 4px"></span>';
      filterValues.forEach(function (val) {
        html += '<button class="mk-filter-btn' + (currentFilter === 'cat:' + val ? ' active' : '') + '" data-mk-learn-filter="cat:' + escapeHtml(val) + '">' + escapeHtml(val) + '</button>';
      });
    }
    html += '</div>';

    // Items list
    html += '<div class="mk-learn-list">';
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

      var cls = isMastered ? 'mk-learn-item' : 'mk-learn-item mk-unmastered';
      html += '<div class="' + cls + '">';
      html += masteryDots(level);
      html += '<div class="mk-learn-content">' + domain.formatLearn(item) + '</div>';
      html += '</div>';
    });
    html += '</div>';

    container.innerHTML = html;

    // Bind filter clicks
    container.querySelectorAll('.mk-filter-btn[data-mk-learn-filter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var val = btn.dataset.mkLearnFilter;
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
      html += '<div class="mk-filter" id="mk-quiz-filter">';
      html += '<button class="mk-filter-btn active" data-mk-quiz-cat="all">Tous</button>';
      var filterValues = getFilterValues(domain);
      filterValues.forEach(function (val) {
        html += '<button class="mk-filter-btn" data-mk-quiz-cat="' + escapeHtml(val) + '">' + escapeHtml(val) + '</button>';
      });
      html += '</div>';
    }

    html += '<div style="text-align:center;padding:30px 0">';
    html += '<p style="color:var(--muted);margin-bottom:20px">' + QUIZ_LENGTH + ' questions — Priorité aux items non maîtrisés</p>';
    html += '<button class="mk-btn" id="mk-quiz-start">Commencer le quiz</button>';
    html += '</div>';
    html += '<div id="mk-quiz-area"></div>';

    container.innerHTML = html;

    var selectedCat = null;

    // Filter binding
    container.querySelectorAll('[data-mk-quiz-cat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-mk-quiz-cat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedCat = btn.dataset.mkQuizCat === 'all' ? null : btn.dataset.mkQuizCat;
      });
    });

    document.getElementById('mk-quiz-start').addEventListener('click', function () {
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
    // Take up to QUIZ_LENGTH, prioritizing unmastered
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
    var area = document.getElementById('mk-quiz-area');
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
    html += '<div class="mk-quiz-container">';
    html += '<div class="mk-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="mk-quiz-bar"><div class="mk-quiz-bar-fill" style="width:' + ((quizState.current) / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' ✓</span>';
    html += '</div>';

    var qClass = domain.questionClass ? ' ' + domain.questionClass : '';
    html += '<div class="mk-question' + qClass + '">' + escapeHtml(questionText) + '</div>';

    html += '<div class="mk-choices">';
    choices.forEach(function (choice) {
      html += '<button class="mk-choice" data-mk-answer="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</button>';
    });
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    // Bind answer clicks
    area.querySelectorAll('.mk-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleQuizAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleQuizAnswer(btn, correctAnswer, itemIndex) {
    var area = document.getElementById('mk-quiz-area');
    if (!area) return;
    var chosen = btn.dataset.mkAnswer;
    var isCorrect = chosen === correctAnswer;

    // Disable all buttons
    area.querySelectorAll('.mk-choice').forEach(function (b) {
      b.classList.add('mk-disabled');
      if (b.dataset.mkAnswer === correctAnswer) {
        b.classList.add('mk-correct');
        b.classList.add('mk-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('mk-correct');
      quizState.correct++;
      var currentLevel = getMastery(currentDomain, itemIndex);
      setMastery(currentDomain, itemIndex, currentLevel + 1);
    } else {
      btn.classList.add('mk-wrong');
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

    var html = '<div class="mk-results">';
    html += '<div class="mk-results-score">' + pct + '%</div>';
    html += '<div class="mk-results-label">Quiz terminé</div>';
    html += '<div class="mk-results-detail">' + quizState.correct + ' / ' + quizState.questions.length + ' réponses correctes</div>';
    html += '<div class="mk-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="mk-btn" id="mk-quiz-retry">Recommencer</button>';
    html += '<button class="mk-btn mk-btn-secondary" id="mk-quiz-back-to-learn">Voir les réponses</button>';
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    document.getElementById('mk-quiz-retry').addEventListener('click', function () {
      renderTabContent();
    });
    document.getElementById('mk-quiz-back-to-learn').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.mk-tab').forEach(function (t) { t.classList.remove('active'); });
      rootEl.querySelector('.mk-tab[data-mk-tab="learn"]').classList.add('active');
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
    var html = '<div class="mk-sprint-start">';
    html += '<p>Répondez à un maximum de questions en ' + SPRINT_DURATION + ' secondes !</p>';
    html += '<button class="mk-btn" id="mk-sprint-start">Lancer le Sprint</button>';
    html += '</div>';
    html += '<div id="mk-sprint-area"></div>';
    container.innerHTML = html;

    document.getElementById('mk-sprint-start').addEventListener('click', function () {
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
      feedbackEl.className = 'mk-sprint-feedback';
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
    var area = document.getElementById('mk-sprint-area');
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
    html += '<div class="mk-sprint-hud">';
    html += '<div class="mk-sprint-timer' + (sprintState.remaining <= 10 ? ' mk-urgent' : '') + '" id="mk-sprint-time">' + sprintState.remaining + 's</div>';
    html += '<div class="mk-sprint-score">Score : <span id="mk-sprint-score">' + sprintState.correct + '</span></div>';
    html += '</div>';

    html += '<div class="mk-quiz-container">';
    var qClass = domain.questionClass ? ' ' + domain.questionClass : '';
    html += '<div class="mk-question' + qClass + '">' + escapeHtml(questionText) + '</div>';
    html += '<div class="mk-choices">';
    choices.forEach(function (choice) {
      html += '<button class="mk-choice" data-mk-sprint-answer="' + escapeHtml(choice) + '">' + escapeHtml(choice) + '</button>';
    });
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    area.querySelectorAll('.mk-choice[data-mk-sprint-answer]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleSprintAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleSprintAnswer(btn, correctAnswer, itemIndex) {
    if (!sprintState || sprintState.remaining <= 0) return;
    var chosen = btn.dataset.mkSprintAnswer;
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
    feedbackEl.textContent = correct ? '✓' : '✗';
    feedbackEl.style.color = correct ? 'var(--green, #69f0ae)' : 'var(--red, #ff5252)';
    feedbackEl.classList.add('mk-show');
    setTimeout(function () {
      feedbackEl.classList.remove('mk-show');
    }, 300);
  }

  function updateSprintHUD() {
    var timerEl = document.getElementById('mk-sprint-time');
    var scoreEl = document.getElementById('mk-sprint-score');
    if (timerEl) {
      timerEl.textContent = sprintState.remaining + 's';
      if (sprintState.remaining <= 10) timerEl.classList.add('mk-urgent');
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

    var area = document.getElementById('mk-sprint-area');
    if (!area) return;

    var html = '<div class="mk-results">';
    html += '<div class="mk-results-score">' + sprintState.correct + '</div>';
    html += '<div class="mk-results-label">bonnes réponses en ' + SPRINT_DURATION + 's</div>';
    html += '<div class="mk-results-detail">' + sprintState.total + ' questions tentées</div>';
    if (sprintState.total > 0) {
      html += '<div class="mk-results-detail">Précision : ' + Math.round(sprintState.correct / sprintState.total * 100) + '%</div>';
    }
    html += '<div style="margin-top:24px">';
    html += '<button class="mk-btn" id="mk-sprint-retry">Recommencer</button>';
    html += '</div>';
    html += '</div>';

    area.innerHTML = html;

    document.getElementById('mk-sprint-retry').addEventListener('click', function () {
      renderTabContent();
    });

    // Clean up feedback
    if (feedbackEl) {
      feedbackEl.classList.remove('mk-show');
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
