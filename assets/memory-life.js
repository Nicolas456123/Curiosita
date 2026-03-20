// ══════════════════════════════════════════════════════
//  Curiosita — Memory Life Module
//  Personal memory vault + French departments + phone codes + emergency numbers
//  Depends: none (standalone IIFE)
// ══════════════════════════════════════════════════════

var MemoryLife = (function () {
  'use strict';

  // ── Constants ──
  var LS_KEY = 'curiosita_memlife';
  var MASTERY_MAX = 3;
  var QUIZ_LENGTH = 10;
  var SPRINT_DURATION = 60;
  var CSS_INJECTED = false;
  var REVEAL_DURATION = 3000;

  // ── State ──
  var state = {
    mastery: {},   // { sectionKey: { itemKey: level } }
    history: [],   // { type, score, total, time, date }
    vault: []      // { id, category, label, value, hint, created, lastPracticed }
  };

  var rootEl = null;
  var currentSection = null;
  var currentTab = 'learn';
  var currentFilter = null;
  var quizState = null;
  var sprintState = null;
  var sprintTimer = null;
  var feedbackEl = null;

  // ══════════════════════════════════════════
  //  DATA — Categories for Vault
  // ══════════════════════════════════════════

  var VAULT_CATEGORIES = [
    { key: 'phone', icon: '\uD83D\uDCF1', label: 'Numéros de téléphone' },
    { key: 'codes', icon: '\uD83D\uDD10', label: 'Codes & mots de passe' },
    { key: 'important', icon: '\uD83C\uDFE5', label: 'Numéros importants' },
    { key: 'address', icon: '\uD83D\uDCCD', label: 'Adresses' },
    { key: 'dates', icon: '\uD83D\uDCC5', label: 'Dates importantes' },
    { key: 'other', icon: '\uD83D\uDD22', label: 'Autres' }
  ];

  // ══════════════════════════════════════════
  //  DATA — 101 French Departments
  // ══════════════════════════════════════════

  var DEPARTMENTS = [
    { number: '01', name: 'Ain', prefecture: 'Bourg-en-Bresse', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '02', name: 'Aisne', prefecture: 'Laon', region: 'Hauts-de-France' },
    { number: '03', name: 'Allier', prefecture: 'Moulins', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '04', name: 'Alpes-de-Haute-Provence', prefecture: 'Digne-les-Bains', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '05', name: 'Hautes-Alpes', prefecture: 'Gap', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '06', name: 'Alpes-Maritimes', prefecture: 'Nice', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '07', name: 'Ard\u00e8che', prefecture: 'Privas', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '08', name: 'Ardennes', prefecture: 'Charleville-M\u00e9zi\u00e8res', region: 'Grand Est' },
    { number: '09', name: 'Ari\u00e8ge', prefecture: 'Foix', region: 'Occitanie' },
    { number: '10', name: 'Aube', prefecture: 'Troyes', region: 'Grand Est' },
    { number: '11', name: 'Aude', prefecture: 'Carcassonne', region: 'Occitanie' },
    { number: '12', name: 'Aveyron', prefecture: 'Rodez', region: 'Occitanie' },
    { number: '13', name: 'Bouches-du-Rh\u00f4ne', prefecture: 'Marseille', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '14', name: 'Calvados', prefecture: 'Caen', region: 'Normandie' },
    { number: '15', name: 'Cantal', prefecture: 'Aurillac', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '16', name: 'Charente', prefecture: 'Angoul\u00eame', region: 'Nouvelle-Aquitaine' },
    { number: '17', name: 'Charente-Maritime', prefecture: 'La Rochelle', region: 'Nouvelle-Aquitaine' },
    { number: '18', name: 'Cher', prefecture: 'Bourges', region: 'Centre-Val de Loire' },
    { number: '19', name: 'Corr\u00e8ze', prefecture: 'Tulle', region: 'Nouvelle-Aquitaine' },
    { number: '2A', name: 'Corse-du-Sud', prefecture: 'Ajaccio', region: 'Corse' },
    { number: '2B', name: 'Haute-Corse', prefecture: 'Bastia', region: 'Corse' },
    { number: '21', name: 'C\u00f4te-d\'Or', prefecture: 'Dijon', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '22', name: 'C\u00f4tes-d\'Armor', prefecture: 'Saint-Brieuc', region: 'Bretagne' },
    { number: '23', name: 'Creuse', prefecture: 'Gu\u00e9ret', region: 'Nouvelle-Aquitaine' },
    { number: '24', name: 'Dordogne', prefecture: 'P\u00e9rigueux', region: 'Nouvelle-Aquitaine' },
    { number: '25', name: 'Doubs', prefecture: 'Besan\u00e7on', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '26', name: 'Dr\u00f4me', prefecture: 'Valence', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '27', name: 'Eure', prefecture: '\u00c9vreux', region: 'Normandie' },
    { number: '28', name: 'Eure-et-Loir', prefecture: 'Chartres', region: 'Centre-Val de Loire' },
    { number: '29', name: 'Finist\u00e8re', prefecture: 'Quimper', region: 'Bretagne' },
    { number: '30', name: 'Gard', prefecture: 'N\u00eemes', region: 'Occitanie' },
    { number: '31', name: 'Haute-Garonne', prefecture: 'Toulouse', region: 'Occitanie' },
    { number: '32', name: 'Gers', prefecture: 'Auch', region: 'Occitanie' },
    { number: '33', name: 'Gironde', prefecture: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
    { number: '34', name: 'H\u00e9rault', prefecture: 'Montpellier', region: 'Occitanie' },
    { number: '35', name: 'Ille-et-Vilaine', prefecture: 'Rennes', region: 'Bretagne' },
    { number: '36', name: 'Indre', prefecture: 'Ch\u00e2teauroux', region: 'Centre-Val de Loire' },
    { number: '37', name: 'Indre-et-Loire', prefecture: 'Tours', region: 'Centre-Val de Loire' },
    { number: '38', name: 'Is\u00e8re', prefecture: 'Grenoble', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '39', name: 'Jura', prefecture: 'Lons-le-Saunier', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '40', name: 'Landes', prefecture: 'Mont-de-Marsan', region: 'Nouvelle-Aquitaine' },
    { number: '41', name: 'Loir-et-Cher', prefecture: 'Blois', region: 'Centre-Val de Loire' },
    { number: '42', name: 'Loire', prefecture: 'Saint-\u00c9tienne', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '43', name: 'Haute-Loire', prefecture: 'Le Puy-en-Velay', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '44', name: 'Loire-Atlantique', prefecture: 'Nantes', region: 'Pays de la Loire' },
    { number: '45', name: 'Loiret', prefecture: 'Orl\u00e9ans', region: 'Centre-Val de Loire' },
    { number: '46', name: 'Lot', prefecture: 'Cahors', region: 'Occitanie' },
    { number: '47', name: 'Lot-et-Garonne', prefecture: 'Agen', region: 'Nouvelle-Aquitaine' },
    { number: '48', name: 'Loz\u00e8re', prefecture: 'Mende', region: 'Occitanie' },
    { number: '49', name: 'Maine-et-Loire', prefecture: 'Angers', region: 'Pays de la Loire' },
    { number: '50', name: 'Manche', prefecture: 'Saint-L\u00f4', region: 'Normandie' },
    { number: '51', name: 'Marne', prefecture: 'Ch\u00e2lons-en-Champagne', region: 'Grand Est' },
    { number: '52', name: 'Haute-Marne', prefecture: 'Chaumont', region: 'Grand Est' },
    { number: '53', name: 'Mayenne', prefecture: 'Laval', region: 'Pays de la Loire' },
    { number: '54', name: 'Meurthe-et-Moselle', prefecture: 'Nancy', region: 'Grand Est' },
    { number: '55', name: 'Meuse', prefecture: 'Bar-le-Duc', region: 'Grand Est' },
    { number: '56', name: 'Morbihan', prefecture: 'Vannes', region: 'Bretagne' },
    { number: '57', name: 'Moselle', prefecture: 'Metz', region: 'Grand Est' },
    { number: '58', name: 'Ni\u00e8vre', prefecture: 'Nevers', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '59', name: 'Nord', prefecture: 'Lille', region: 'Hauts-de-France' },
    { number: '60', name: 'Oise', prefecture: 'Beauvais', region: 'Hauts-de-France' },
    { number: '61', name: 'Orne', prefecture: 'Alen\u00e7on', region: 'Normandie' },
    { number: '62', name: 'Pas-de-Calais', prefecture: 'Arras', region: 'Hauts-de-France' },
    { number: '63', name: 'Puy-de-D\u00f4me', prefecture: 'Clermont-Ferrand', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '64', name: 'Pyr\u00e9n\u00e9es-Atlantiques', prefecture: 'Pau', region: 'Nouvelle-Aquitaine' },
    { number: '65', name: 'Hautes-Pyr\u00e9n\u00e9es', prefecture: 'Tarbes', region: 'Occitanie' },
    { number: '66', name: 'Pyr\u00e9n\u00e9es-Orientales', prefecture: 'Perpignan', region: 'Occitanie' },
    { number: '67', name: 'Bas-Rhin', prefecture: 'Strasbourg', region: 'Grand Est' },
    { number: '68', name: 'Haut-Rhin', prefecture: 'Colmar', region: 'Grand Est' },
    { number: '69', name: 'Rh\u00f4ne', prefecture: 'Lyon', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '70', name: 'Haute-Sa\u00f4ne', prefecture: 'Vesoul', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '71', name: 'Sa\u00f4ne-et-Loire', prefecture: 'M\u00e2con', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '72', name: 'Sarthe', prefecture: 'Le Mans', region: 'Pays de la Loire' },
    { number: '73', name: 'Savoie', prefecture: 'Chamb\u00e9ry', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '74', name: 'Haute-Savoie', prefecture: 'Annecy', region: 'Auvergne-Rh\u00f4ne-Alpes' },
    { number: '75', name: 'Paris', prefecture: 'Paris', region: '\u00cele-de-France' },
    { number: '76', name: 'Seine-Maritime', prefecture: 'Rouen', region: 'Normandie' },
    { number: '77', name: 'Seine-et-Marne', prefecture: 'Melun', region: '\u00cele-de-France' },
    { number: '78', name: 'Yvelines', prefecture: 'Versailles', region: '\u00cele-de-France' },
    { number: '79', name: 'Deux-S\u00e8vres', prefecture: 'Niort', region: 'Nouvelle-Aquitaine' },
    { number: '80', name: 'Somme', prefecture: 'Amiens', region: 'Hauts-de-France' },
    { number: '81', name: 'Tarn', prefecture: 'Albi', region: 'Occitanie' },
    { number: '82', name: 'Tarn-et-Garonne', prefecture: 'Montauban', region: 'Occitanie' },
    { number: '83', name: 'Var', prefecture: 'Toulon', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '84', name: 'Vaucluse', prefecture: 'Avignon', region: 'Provence-Alpes-C\u00f4te d\'Azur' },
    { number: '85', name: 'Vend\u00e9e', prefecture: 'La Roche-sur-Yon', region: 'Pays de la Loire' },
    { number: '86', name: 'Vienne', prefecture: 'Poitiers', region: 'Nouvelle-Aquitaine' },
    { number: '87', name: 'Haute-Vienne', prefecture: 'Limoges', region: 'Nouvelle-Aquitaine' },
    { number: '88', name: 'Vosges', prefecture: '\u00c9pinal', region: 'Grand Est' },
    { number: '89', name: 'Yonne', prefecture: 'Auxerre', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '90', name: 'Territoire de Belfort', prefecture: 'Belfort', region: 'Bourgogne-Franche-Comt\u00e9' },
    { number: '91', name: 'Essonne', prefecture: '\u00c9vry-Courcouronnes', region: '\u00cele-de-France' },
    { number: '92', name: 'Hauts-de-Seine', prefecture: 'Nanterre', region: '\u00cele-de-France' },
    { number: '93', name: 'Seine-Saint-Denis', prefecture: 'Bobigny', region: '\u00cele-de-France' },
    { number: '94', name: 'Val-de-Marne', prefecture: 'Cr\u00e9teil', region: '\u00cele-de-France' },
    { number: '95', name: 'Val-d\'Oise', prefecture: 'Cergy', region: '\u00cele-de-France' },
    { number: '971', name: 'Guadeloupe', prefecture: 'Basse-Terre', region: 'Guadeloupe' },
    { number: '972', name: 'Martinique', prefecture: 'Fort-de-France', region: 'Martinique' },
    { number: '973', name: 'Guyane', prefecture: 'Cayenne', region: 'Guyane' },
    { number: '974', name: 'La R\u00e9union', prefecture: 'Saint-Denis', region: 'La R\u00e9union' },
    { number: '976', name: 'Mayotte', prefecture: 'Mamoudzou', region: 'Mayotte' }
  ];

  // ══════════════════════════════════════════
  //  DATA — 30 International Phone Codes
  // ══════════════════════════════════════════

  var PHONE_CODES = [
    { country: 'France', code: '+33', flag: '\uD83C\uDDEB\uD83C\uDDF7' },
    { country: '\u00c9tats-Unis', code: '+1', flag: '\uD83C\uDDFA\uD83C\uDDF8' },
    { country: 'Royaume-Uni', code: '+44', flag: '\uD83C\uDDEC\uD83C\uDDE7' },
    { country: 'Allemagne', code: '+49', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
    { country: 'Espagne', code: '+34', flag: '\uD83C\uDDEA\uD83C\uDDF8' },
    { country: 'Italie', code: '+39', flag: '\uD83C\uDDEE\uD83C\uDDF9' },
    { country: 'Belgique', code: '+32', flag: '\uD83C\uDDE7\uD83C\uDDEA' },
    { country: 'Suisse', code: '+41', flag: '\uD83C\uDDE8\uD83C\uDDED' },
    { country: 'Canada', code: '+1', flag: '\uD83C\uDDE8\uD83C\uDDE6' },
    { country: 'Portugal', code: '+351', flag: '\uD83C\uDDF5\uD83C\uDDF9' },
    { country: 'Pays-Bas', code: '+31', flag: '\uD83C\uDDF3\uD83C\uDDF1' },
    { country: 'Japon', code: '+81', flag: '\uD83C\uDDEF\uD83C\uDDF5' },
    { country: 'Chine', code: '+86', flag: '\uD83C\uDDE8\uD83C\uDDF3' },
    { country: 'Australie', code: '+61', flag: '\uD83C\uDDE6\uD83C\uDDFA' },
    { country: 'Br\u00e9sil', code: '+55', flag: '\uD83C\uDDE7\uD83C\uDDF7' },
    { country: 'Mexique', code: '+52', flag: '\uD83C\uDDF2\uD83C\uDDFD' },
    { country: 'Inde', code: '+91', flag: '\uD83C\uDDEE\uD83C\uDDF3' },
    { country: 'Maroc', code: '+212', flag: '\uD83C\uDDF2\uD83C\uDDE6' },
    { country: 'Alg\u00e9rie', code: '+213', flag: '\uD83C\uDDE9\uD83C\uDDFF' },
    { country: 'Tunisie', code: '+216', flag: '\uD83C\uDDF9\uD83C\uDDF3' },
    { country: 'S\u00e9n\u00e9gal', code: '+221', flag: '\uD83C\uDDF8\uD83C\uDDF3' },
    { country: 'Russie', code: '+7', flag: '\uD83C\uDDF7\uD83C\uDDFA' },
    { country: 'Turquie', code: '+90', flag: '\uD83C\uDDF9\uD83C\uDDF7' },
    { country: 'Cor\u00e9e du Sud', code: '+82', flag: '\uD83C\uDDF0\uD83C\uDDF7' },
    { country: 'Pologne', code: '+48', flag: '\uD83C\uDDF5\uD83C\uDDF1' },
    { country: 'Su\u00e8de', code: '+46', flag: '\uD83C\uDDF8\uD83C\uDDEA' },
    { country: 'Gr\u00e8ce', code: '+30', flag: '\uD83C\uDDEC\uD83C\uDDF7' },
    { country: 'Irlande', code: '+353', flag: '\uD83C\uDDEE\uD83C\uDDEA' },
    { country: 'Autriche', code: '+43', flag: '\uD83C\uDDE6\uD83C\uDDF9' },
    { country: '\u00c9gypte', code: '+20', flag: '\uD83C\uDDEA\uD83C\uDDEC' }
  ];

  // ══════════════════════════════════════════
  //  DATA — Emergency & Useful Numbers
  // ══════════════════════════════════════════

  var EMERGENCY_NUMBERS = [
    { name: 'SAMU', number: '15', desc: 'Urgence m\u00e9dicale' },
    { name: 'Pompiers', number: '18', desc: 'Incendie, accident' },
    { name: 'Police', number: '17', desc: 'Police secours' },
    { name: 'Urgences europ\u00e9en', number: '112', desc: 'Num\u00e9ro universel UE' },
    { name: 'Enfance en danger', number: '119', desc: 'Maltraitance enfants' },
    { name: 'Violences femmes', number: '3919', desc: 'Violences conjugales' },
    { name: 'Suicide \u00e9coute', number: '3114', desc: 'Pr\u00e9vention suicide' },
    { name: 'SOS Amiti\u00e9', number: '09 72 39 40 50', desc: '\u00c9coute, solitude' },
    { name: 'Anti-poison', number: '01 40 05 48 48', desc: 'Centre antipoison Paris' },
    { name: 'Carte bancaire', number: '0 892 705 705', desc: 'Opposition carte' },
    { name: 'Gaz urgence', number: '0 800 47 33 33', desc: 'Fuite de gaz' },
    { name: '\u00c9lectricit\u00e9', number: '09 72 67 50 XX', desc: 'Coupure (\u00abXX\u00bb=d\u00e9partement)' },
    { name: 'M\u00e9t\u00e9o', number: '3250', desc: 'Pr\u00e9visions m\u00e9t\u00e9o' },
    { name: 'Horloge parlante', number: '3699', desc: 'Heure exacte' },
    { name: 'Non-surtax\u00e9', number: '0805 etc.', desc: 'Rep\u00e9rer les 0800-0805 = gratuit' }
  ];

  // ══════════════════════════════════════════
  //  DATA — Vault Tips
  // ══════════════════════════════════════════

  var VAULT_TIPS = {
    phone: {
      title: 'Num\u00e9ros de t\u00e9l\u00e9phone',
      tips: [
        'D\u00e9coupe le num\u00e9ro en groupes de 2 : 06 12 34 56 78',
        'Utilise le Syst\u00e8me Majeur pour convertir chaque paire en mot',
        'Cr\u00e9e une histoire avec ces mots',
        'Exemple : 06 48 \u2192 0=s, 6=ch, 4=r, 8=f \u2192 \u00abscharf\u00bb (tranchant en allemand) ou image de ciseaux'
      ]
    },
    codes: {
      title: 'Codes PIN / mots de passe',
      tips: [
        'Associe chaque chiffre \u00e0 une forme : 1=bougie, 2=cygne, 3=c\u0153ur, 4=voilier, 5=crochet, 6=cerise, 7=falaise, 8=sablier, 9=ballon, 0=roue',
        'Visualise une sc\u00e8ne avec ces objets',
        'Pour les codes \u00e0 4 chiffres : 2 images suffisent'
      ]
    },
    important: {
      title: 'Num\u00e9ro de s\u00e9cu et autres',
      tips: [
        'Structure s\u00e9cu : 1 sexe + 2 ann\u00e9e + 2 mois + 2 d\u00e9partement + 3 commune + 3 ordre + 2 cl\u00e9',
        'D\u00e9compose en blocs signifiants',
        'Exemple : 1 85 03 75 \u2192 Homme, n\u00e9 en 85, mars, Paris'
      ]
    },
    dates: {
      title: 'Dates importantes',
      tips: [
        'Jour : image du Syst\u00e8me Majeur',
        'Mois : association saisonni\u00e8re (1=neige, 6=soleil, 10=feuilles\u2026)',
        'Ann\u00e9e : d\u00e9compose en 2 paires de chiffres'
      ]
    },
    address: {
      title: 'Adresses',
      tips: [
        'Num\u00e9ro de rue \u2192 Syst\u00e8me Majeur',
        'Nom de rue \u2192 image mentale du mot',
        'Visualise-toi marchant vers cette adresse'
      ]
    },
    general: {
      title: 'Conseils g\u00e9n\u00e9raux',
      tips: [
        'R\u00e9vise tes donn\u00e9es tous les 2-3 jours au d\u00e9but',
        'Cr\u00e9e des images VIVANTES, EXAG\u00c9R\u00c9ES, en MOUVEMENT',
        'Place tes images dans un lieu que tu connais bien (Palais de la M\u00e9moire)'
      ]
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
        state.vault = parsed.vault || [];
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

  function getMastery(section, key) {
    if (!state.mastery[section]) return 0;
    return state.mastery[section][key] || 0;
  }

  function setMastery(section, key, level) {
    if (!state.mastery[section]) state.mastery[section] = {};
    state.mastery[section][key] = Math.min(Math.max(level, 0), MASTERY_MAX);
    saveState();
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
      dots += i < level ? '<span class="ml-dot ml-dot-filled"></span>' : '<span class="ml-dot"></span>';
    }
    return '<span class="ml-dots">' + dots + '</span>';
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m > 0 ? m + 'min ' + s + 's' : s + 's';
  }

  function normalize(str) {
    return str.replace(/[\s\-\.]/g, '').toLowerCase();
  }

  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
  }

  function getRegions() {
    var seen = {};
    var regions = [];
    DEPARTMENTS.forEach(function (d) {
      if (!seen[d.region]) {
        seen[d.region] = true;
        regions.push(d.region);
      }
    });
    return regions.sort();
  }

  function getVaultCategoryObj(key) {
    for (var i = 0; i < VAULT_CATEGORIES.length; i++) {
      if (VAULT_CATEGORIES[i].key === key) return VAULT_CATEGORIES[i];
    }
    return VAULT_CATEGORIES[VAULT_CATEGORIES.length - 1];
  }

  // ══════════════════════════════════════════
  //  CSS INJECTION
  // ══════════════════════════════════════════

  function injectCSS() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var style = document.createElement('style');
    style.textContent = [
      '/* Memory Life Module */',

      // Section selection grid
      '.ml-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; padding: 8px 0; }',
      '.ml-card { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 12px; padding: 20px; cursor: pointer; transition: all .2s ease; }',
      '.ml-card:hover { border-color: var(--accent, #e8c97a); transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,.3); }',
      '.ml-card-icon { font-size: 2rem; margin-bottom: 8px; }',
      '.ml-card-name { font-family: "Playfair Display", serif; font-size: 1.1rem; font-weight: 600; color: var(--text, #f0ede8); margin-bottom: 4px; }',
      '.ml-card-desc { font-size: .85rem; color: var(--muted, #7a7870); margin-bottom: 12px; }',
      '.ml-progress-bar { height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; margin-bottom: 6px; }',
      '.ml-progress-fill { height: 100%; background: var(--accent, #e8c97a); border-radius: 2px; transition: width .3s ease; }',
      '.ml-progress-text { font-size: .75rem; color: var(--muted, #7a7870); }',

      // Header
      '.ml-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }',
      '.ml-back { background: none; border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--text, #f0ede8); border-radius: 8px; padding: 6px 14px; cursor: pointer; font-size: .9rem; transition: border-color .2s; font-family: inherit; }',
      '.ml-back:hover { border-color: var(--accent, #e8c97a); }',
      '.ml-title { font-family: "Playfair Display", serif; font-size: 1.4rem; font-weight: 600; color: var(--text, #f0ede8); }',
      '.ml-title-icon { font-size: 1.6rem; }',

      // Tabs
      '.ml-tabs { display: flex; gap: 4px; background: var(--surface, #141418); border-radius: 10px; padding: 4px; margin-bottom: 20px; border: 1px solid var(--border, rgba(240,237,232,0.08)); flex-wrap: wrap; }',
      '.ml-tab { flex: 1; padding: 10px 12px; text-align: center; border-radius: 8px; font-size: .85rem; color: var(--muted, #7a7870); cursor: pointer; transition: all .2s; border: none; background: none; font-family: inherit; min-width: 0; white-space: nowrap; }',
      '.ml-tab:hover { color: var(--text, #f0ede8); }',
      '.ml-tab.active { background: var(--surface2, #1c1c22); color: var(--accent, #e8c97a); font-weight: 500; }',

      // Filter bar
      '.ml-filter { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; }',
      '.ml-filter-btn { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--muted, #7a7870); border-radius: 20px; padding: 5px 14px; font-size: .8rem; cursor: pointer; transition: all .2s; font-family: inherit; }',
      '.ml-filter-btn:hover { color: var(--text, #f0ede8); border-color: var(--muted, #7a7870); }',
      '.ml-filter-btn.active { background: var(--accent-dim, rgba(232,201,122,0.1)); border-color: var(--accent, #e8c97a); color: var(--accent, #e8c97a); }',

      // Learn mode
      '.ml-learn-list { display: flex; flex-direction: column; gap: 8px; }',
      '.ml-learn-item { display: flex; align-items: flex-start; gap: 12px; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 16px; font-size: .9rem; line-height: 1.5; color: var(--content-color, rgba(240,237,232,0.85)); }',
      '.ml-learn-item.ml-unmastered { border-left: 3px solid var(--accent, #e8c97a); }',
      '.ml-dots { display: inline-flex; gap: 3px; flex-shrink: 0; margin-top: 4px; }',
      '.ml-dot { width: 8px; height: 8px; border-radius: 50%; border: 1.5px solid var(--muted, #7a7870); display: inline-block; }',
      '.ml-dot-filled { background: var(--accent, #e8c97a); border-color: var(--accent, #e8c97a); }',
      '.ml-learn-content { flex: 1; }',
      '.ml-muted { color: var(--muted, #7a7870); }',

      // Quiz mode
      '.ml-quiz-container { max-width: 600px; margin: 0 auto; }',
      '.ml-quiz-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; font-size: .85rem; color: var(--muted, #7a7870); }',
      '.ml-quiz-bar { flex: 1; height: 4px; background: var(--surface2, #1c1c22); border-radius: 2px; overflow: hidden; }',
      '.ml-quiz-bar-fill { height: 100%; background: var(--accent, #e8c97a); transition: width .3s ease; border-radius: 2px; }',
      '.ml-question { font-family: "Playfair Display", serif; font-size: 1.3rem; text-align: center; color: var(--text, #f0ede8); margin-bottom: 24px; padding: 20px; min-height: 80px; display: flex; align-items: center; justify-content: center; }',
      '.ml-choices { display: flex; flex-direction: column; gap: 10px; }',
      '.ml-choice { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 18px; color: var(--text, #f0ede8); font-size: .95rem; cursor: pointer; transition: all .2s; text-align: left; font-family: inherit; line-height: 1.4; }',
      '.ml-choice:hover:not(.ml-disabled) { border-color: var(--accent, #e8c97a); background: var(--surface2, #1c1c22); }',
      '.ml-choice.ml-correct { border-color: var(--green, #69f0ae); background: rgba(105,240,174,0.1); color: var(--green, #69f0ae); }',
      '.ml-choice.ml-wrong { border-color: #ff5252; background: rgba(255,82,82,0.1); color: #ff8a80; }',
      '.ml-choice.ml-disabled { cursor: default; opacity: 0.6; }',
      '.ml-choice.ml-reveal { border-color: var(--green, #69f0ae); opacity: 1; }',

      // Results
      '.ml-results { text-align: center; padding: 30px 0; }',
      '.ml-results-score { font-family: "Playfair Display", serif; font-size: 2.5rem; font-weight: 700; color: var(--accent, #e8c97a); margin-bottom: 8px; }',
      '.ml-results-label { font-size: 1rem; color: var(--muted, #7a7870); margin-bottom: 24px; }',
      '.ml-results-detail { font-size: .9rem; color: var(--content-color, rgba(240,237,232,0.85)); margin-bottom: 6px; }',

      // Buttons
      '.ml-btn { background: var(--accent, #e8c97a); color: var(--bg, #0c0c0e); border: none; border-radius: 10px; padding: 12px 28px; font-size: 1rem; font-weight: 600; cursor: pointer; font-family: inherit; transition: opacity .2s; margin-top: 20px; }',
      '.ml-btn:hover { opacity: .85; }',
      '.ml-btn-secondary { background: var(--surface2, #1c1c22); color: var(--text, #f0ede8); border: 1px solid var(--border, rgba(240,237,232,0.08)); margin-left: 10px; }',
      '.ml-btn-secondary:hover { border-color: var(--accent, #e8c97a); opacity: 1; }',
      '.ml-btn-sm { padding: 6px 14px; font-size: .85rem; margin-top: 0; border-radius: 8px; }',
      '.ml-btn-danger { background: #ff5252; color: #fff; }',
      '.ml-btn-danger:hover { opacity: .85; }',

      // Sprint mode
      '.ml-sprint-hud { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding: 12px 16px; background: var(--surface, #141418); border-radius: 10px; border: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.ml-sprint-timer { font-family: "JetBrains Mono", monospace; font-size: 1.6rem; font-weight: 700; color: var(--accent, #e8c97a); }',
      '.ml-sprint-timer.ml-urgent { color: #ff5252; }',
      '.ml-sprint-score { font-size: 1.1rem; color: var(--text, #f0ede8); }',
      '.ml-sprint-score span { color: var(--accent, #e8c97a); font-weight: 600; }',
      '.ml-sprint-feedback { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: 3rem; font-weight: 700; pointer-events: none; opacity: 0; transition: opacity .15s; z-index: 9999; }',
      '.ml-sprint-feedback.ml-show { opacity: 1; }',

      // Section title
      '.ml-section-title { font-family: "Playfair Display", serif; font-size: 1.1rem; color: var(--text, #f0ede8); margin-bottom: 16px; }',

      // Input fields
      '.ml-input-group { margin-bottom: 16px; }',
      '.ml-label { display: block; font-size: .85rem; color: var(--muted, #7a7870); margin-bottom: 6px; }',
      '.ml-input { width: 100%; box-sizing: border-box; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 8px; padding: 10px 14px; color: var(--text, #f0ede8); font-size: .95rem; font-family: inherit; outline: none; transition: border-color .2s; }',
      '.ml-input:focus { border-color: var(--accent, #e8c97a); }',
      '.ml-input::placeholder { color: var(--muted, #7a7870); opacity: .6; }',
      '.ml-select { width: 100%; box-sizing: border-box; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 8px; padding: 10px 14px; color: var(--text, #f0ede8); font-size: .95rem; font-family: inherit; outline: none; cursor: pointer; appearance: none; -webkit-appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath d=\'M6 8L1 3h10z\' fill=\'%237a7870\'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; }',
      '.ml-select:focus { border-color: var(--accent, #e8c97a); }',

      // Search input
      '.ml-search { width: 100%; box-sizing: border-box; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 8px; padding: 10px 14px 10px 36px; color: var(--text, #f0ede8); font-size: .9rem; font-family: inherit; outline: none; transition: border-color .2s; margin-bottom: 16px; background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%237a7870\' stroke-width=\'2\'%3E%3Ccircle cx=\'11\' cy=\'11\' r=\'8\'/%3E%3Cpath d=\'M21 21l-4.35-4.35\'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: 10px center; }',
      '.ml-search:focus { border-color: var(--accent, #e8c97a); }',

      // Vault entry
      '.ml-vault-item { display: flex; align-items: center; gap: 12px; background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 16px; margin-bottom: 8px; }',
      '.ml-vault-icon { font-size: 1.4rem; flex-shrink: 0; }',
      '.ml-vault-info { flex: 1; min-width: 0; }',
      '.ml-vault-label { font-weight: 500; color: var(--text, #f0ede8); font-size: .95rem; margin-bottom: 2px; }',
      '.ml-vault-value { font-family: "JetBrains Mono", monospace; font-size: .9rem; color: var(--accent, #e8c97a); letter-spacing: .5px; cursor: pointer; }',
      '.ml-vault-value.ml-masked { color: var(--muted, #7a7870); letter-spacing: 2px; }',
      '.ml-vault-meta { font-size: .75rem; color: var(--muted, #7a7870); margin-top: 4px; }',
      '.ml-vault-actions { display: flex; gap: 6px; flex-shrink: 0; }',
      '.ml-vault-category-header { font-family: "Playfair Display", serif; font-size: 1rem; color: var(--text, #f0ede8); margin: 20px 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.ml-vault-category-header:first-child { margin-top: 0; }',

      // Vault practice
      '.ml-practice-input { width: 100%; box-sizing: border-box; background: var(--surface2, #1c1c22); border: 2px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 18px; color: var(--text, #f0ede8); font-size: 1.1rem; font-family: "JetBrains Mono", monospace; letter-spacing: 1px; text-align: center; outline: none; transition: border-color .2s; margin: 16px 0; }',
      '.ml-practice-input:focus { border-color: var(--accent, #e8c97a); }',
      '.ml-practice-input.ml-input-correct { border-color: var(--green, #69f0ae); background: rgba(105,240,174,0.05); }',
      '.ml-practice-input.ml-input-wrong { border-color: #ff5252; background: rgba(255,82,82,0.05); }',

      // Tips panel
      '.ml-tips-section { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 12px; padding: 20px; margin-bottom: 16px; }',
      '.ml-tips-title { font-family: "Playfair Display", serif; font-size: 1rem; color: var(--accent, #e8c97a); margin-bottom: 12px; }',
      '.ml-tips-list { list-style: none; padding: 0; margin: 0; }',
      '.ml-tips-list li { padding: 6px 0; font-size: .9rem; color: var(--content-color, rgba(240,237,232,0.85)); line-height: 1.5; padding-left: 20px; position: relative; }',
      '.ml-tips-list li::before { content: "\u2022"; position: absolute; left: 4px; color: var(--accent, #e8c97a); }',

      // Table
      '.ml-table-wrap { overflow-x: auto; }',
      '.ml-table { width: 100%; border-collapse: collapse; font-size: .9rem; }',
      '.ml-table th { text-align: left; padding: 10px 12px; color: var(--muted, #7a7870); font-weight: 500; font-size: .8rem; text-transform: uppercase; letter-spacing: .5px; border-bottom: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.ml-table td { padding: 10px 12px; color: var(--content-color, rgba(240,237,232,0.85)); border-bottom: 1px solid var(--border, rgba(240,237,232,0.08)); }',
      '.ml-table tr:hover td { background: var(--surface, #141418); }',
      '.ml-table .ml-num-col { font-family: "JetBrains Mono", monospace; font-weight: 600; color: var(--accent, #e8c97a); }',

      // Type quiz input
      '.ml-type-input { max-width: 300px; margin: 0 auto; }',
      '.ml-type-field { width: 100%; box-sizing: border-box; background: var(--surface, #141418); border: 2px solid var(--border, rgba(240,237,232,0.08)); border-radius: 10px; padding: 14px 18px; color: var(--text, #f0ede8); font-size: 1.2rem; font-family: "JetBrains Mono", monospace; text-align: center; outline: none; transition: border-color .2s; }',
      '.ml-type-field:focus { border-color: var(--accent, #e8c97a); }',
      '.ml-type-field.ml-correct { border-color: var(--green, #69f0ae); }',
      '.ml-type-field.ml-wrong { border-color: #ff5252; }',
      '.ml-type-answer { text-align: center; font-size: 1rem; margin-top: 10px; color: var(--green, #69f0ae); }',
      '.ml-type-answer.ml-wrong-answer { color: #ff8a80; }',

      // Empty state
      '.ml-empty { text-align: center; padding: 40px 20px; color: var(--muted, #7a7870); }',
      '.ml-empty-icon { font-size: 3rem; margin-bottom: 12px; }',

      // Responsive
      '@media (max-width: 600px) {',
      '  .ml-grid { grid-template-columns: 1fr; }',
      '  .ml-tabs { flex-wrap: wrap; }',
      '  .ml-tab { flex: none; padding: 8px 12px; font-size: .8rem; }',
      '  .ml-question { font-size: 1.1rem; padding: 14px; }',
      '  .ml-header { gap: 8px; }',
      '  .ml-vault-item { flex-wrap: wrap; }',
      '  .ml-vault-actions { width: 100%; justify-content: flex-end; }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ══════════════════════════════════════════
  //  RENDER — Main Panel (4 section cards)
  // ══════════════════════════════════════════

  function renderPanel(el) {
    injectCSS();
    loadState();
    rootEl = el;
    renderMainGrid();
  }

  function renderMainGrid() {
    currentSection = null;
    cleanupSprint();

    var vaultCount = state.vault.length;
    var deptProgress = getSectionProgress('departments', DEPARTMENTS.length);
    var phoneProgress = getSectionProgress('phonecodes', PHONE_CODES.length);
    var emergProgress = getSectionProgress('emergency', EMERGENCY_NUMBERS.length);

    var sections = [
      {
        key: 'vault',
        icon: '\uD83D\uDD10',
        name: 'Coffre-fort personnel',
        desc: 'M\u00e9morise tes donn\u00e9es importantes',
        progressText: vaultCount + ' entr\u00e9e' + (vaultCount !== 1 ? 's' : '') + ' enregistr\u00e9e' + (vaultCount !== 1 ? 's' : ''),
        pct: 0,
        hideBar: true
      },
      {
        key: 'departments',
        icon: '\uD83D\uDDFA\uFE0F',
        name: 'D\u00e9partements fran\u00e7ais',
        desc: '101 d\u00e9partements, pr\u00e9fectures et r\u00e9gions',
        progressText: deptProgress.mastered + '/' + deptProgress.total + ' ma\u00eetris\u00e9s',
        pct: deptProgress.total > 0 ? Math.round(deptProgress.mastered / deptProgress.total * 100) : 0
      },
      {
        key: 'phonecodes',
        icon: '\uD83D\uDCDE',
        name: 'Indicatifs internationaux',
        desc: '30 indicatifs t\u00e9l\u00e9phoniques',
        progressText: phoneProgress.mastered + '/' + phoneProgress.total + ' ma\u00eetris\u00e9s',
        pct: phoneProgress.total > 0 ? Math.round(phoneProgress.mastered / phoneProgress.total * 100) : 0
      },
      {
        key: 'emergency',
        icon: '\uD83D\uDEA8',
        name: 'Num\u00e9ros d\'urgence',
        desc: 'Les num\u00e9ros \u00e0 conna\u00eetre par c\u0153ur',
        progressText: emergProgress.mastered + '/' + emergProgress.total + ' ma\u00eetris\u00e9s',
        pct: emergProgress.total > 0 ? Math.round(emergProgress.mastered / emergProgress.total * 100) : 0
      }
    ];

    var html = '<div class="ml-section-title">M\u00e9morisation pratique</div>';
    html += '<div class="ml-grid">';
    sections.forEach(function (s) {
      html += '<div class="ml-card" data-ml-section="' + s.key + '">';
      html += '<div class="ml-card-icon">' + s.icon + '</div>';
      html += '<div class="ml-card-name">' + escapeHtml(s.name) + '</div>';
      html += '<div class="ml-card-desc">' + escapeHtml(s.desc) + '</div>';
      if (!s.hideBar) {
        html += '<div class="ml-progress-bar"><div class="ml-progress-fill" style="width:' + s.pct + '%"></div></div>';
      }
      html += '<div class="ml-progress-text">' + s.progressText + '</div>';
      html += '</div>';
    });
    html += '</div>';
    rootEl.innerHTML = html;

    rootEl.querySelectorAll('.ml-card[data-ml-section]').forEach(function (card) {
      card.addEventListener('click', function () {
        launch(card.dataset.mlSection);
      });
    });
  }

  function getSectionProgress(section, total) {
    var mastered = 0;
    if (state.mastery[section]) {
      var keys = Object.keys(state.mastery[section]);
      for (var i = 0; i < keys.length; i++) {
        if (state.mastery[section][keys[i]] >= MASTERY_MAX) mastered++;
      }
    }
    return { mastered: mastered, total: total };
  }

  // ══════════════════════════════════════════
  //  LAUNCH — Open a section
  // ══════════════════════════════════════════

  function launch(action, arg) {
    injectCSS();
    loadState();
    if (!rootEl) return;
    cleanupSprint();
    currentSection = action;
    currentTab = arg || 'learn';
    currentFilter = null;

    if (action === 'vault') renderVaultSection();
    else if (action === 'departments') renderDepartmentsSection();
    else if (action === 'phonecodes') renderPhoneCodesSection();
    else if (action === 'emergency') renderEmergencySection();
  }

  // ══════════════════════════════════════════════════════════════
  //  PART 1: COFFRE-FORT PERSONNEL
  // ══════════════════════════════════════════════════════════════

  var vaultTab = 'list';

  function renderVaultSection() {
    vaultTab = vaultTab || 'list';
    var html = '';
    html += '<div class="ml-header">';
    html += '<button class="ml-back" id="ml-back-main">\u2190 Retour</button>';
    html += '<span class="ml-title-icon">\uD83D\uDD10</span>';
    html += '<span class="ml-title">Coffre-fort personnel</span>';
    html += '</div>';

    html += '<div class="ml-tabs">';
    html += '<button class="ml-tab' + (vaultTab === 'list' ? ' active' : '') + '" data-ml-vtab="list">Mon coffre</button>';
    html += '<button class="ml-tab' + (vaultTab === 'add' ? ' active' : '') + '" data-ml-vtab="add">Ajouter</button>';
    html += '<button class="ml-tab' + (vaultTab === 'practice' ? ' active' : '') + '" data-ml-vtab="practice">S\'entra\u00eener</button>';
    html += '<button class="ml-tab' + (vaultTab === 'tips' ? ' active' : '') + '" data-ml-vtab="tips">Astuces</button>';
    html += '</div>';

    html += '<div id="ml-vault-content"></div>';

    rootEl.innerHTML = html;

    document.getElementById('ml-back-main').addEventListener('click', function () {
      vaultTab = 'list';
      renderMainGrid();
    });

    rootEl.querySelectorAll('.ml-tab[data-ml-vtab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        vaultTab = tab.dataset.mlVtab;
        renderVaultContent();
      });
    });

    renderVaultContent();
  }

  function renderVaultContent() {
    var container = document.getElementById('ml-vault-content');
    if (!container) return;
    if (vaultTab === 'list') renderVaultList(container);
    else if (vaultTab === 'add') renderVaultAdd(container);
    else if (vaultTab === 'practice') renderVaultPractice(container);
    else if (vaultTab === 'tips') renderVaultTips(container);
  }

  // -- Vault List --
  function renderVaultList(container) {
    if (state.vault.length === 0) {
      container.innerHTML = '<div class="ml-empty"><div class="ml-empty-icon">\uD83D\uDD12</div><p>Ton coffre-fort est vide.</p><p style="font-size:.85rem">Ajoute des donn\u00e9es \u00e0 m\u00e9moriser dans l\'onglet \u00abAjouter\u00bb.</p></div>';
      return;
    }

    // Group by category
    var grouped = {};
    VAULT_CATEGORIES.forEach(function (cat) { grouped[cat.key] = []; });
    state.vault.forEach(function (entry) {
      var key = entry.category || 'other';
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(entry);
    });

    var html = '';
    VAULT_CATEGORIES.forEach(function (cat) {
      var entries = grouped[cat.key];
      if (!entries || entries.length === 0) return;
      html += '<div class="ml-vault-category-header">' + cat.icon + ' ' + escapeHtml(cat.label) + '</div>';
      entries.forEach(function (entry) {
        var level = getMastery('vault', entry.id);
        var lastPrac = entry.lastPracticed ? new Date(entry.lastPracticed).toLocaleDateString('fr-FR') : 'jamais';
        html += '<div class="ml-vault-item" data-vault-id="' + entry.id + '">';
        html += '<div class="ml-vault-icon">' + cat.icon + '</div>';
        html += '<div class="ml-vault-info">';
        html += '<div class="ml-vault-label">' + escapeHtml(entry.label) + '</div>';
        html += '<div class="ml-vault-value ml-masked" data-vault-reveal="' + entry.id + '">\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022</div>';
        html += '<div class="ml-vault-meta">' + masteryDots(level) + ' \u00b7 Derni\u00e8re r\u00e9vision : ' + lastPrac + '</div>';
        html += '</div>';
        html += '<div class="ml-vault-actions">';
        html += '<button class="ml-btn ml-btn-sm ml-btn-secondary" data-vault-edit="' + entry.id + '">Modifier</button>';
        html += '<button class="ml-btn ml-btn-sm ml-btn-danger" data-vault-delete="' + entry.id + '">Suppr.</button>';
        html += '</div>';
        html += '</div>';
      });
    });

    container.innerHTML = html;

    // Reveal on click
    container.querySelectorAll('[data-vault-reveal]').forEach(function (el) {
      el.addEventListener('click', function () {
        var id = el.dataset.vaultReveal;
        var entry = findVaultEntry(id);
        if (!entry) return;
        if (el.classList.contains('ml-masked')) {
          el.textContent = entry.value;
          el.classList.remove('ml-masked');
          setTimeout(function () {
            el.textContent = '\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022';
            el.classList.add('ml-masked');
          }, REVEAL_DURATION);
        }
      });
    });

    // Edit
    container.querySelectorAll('[data-vault-edit]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        renderVaultEdit(container, btn.dataset.vaultEdit);
      });
    });

    // Delete
    container.querySelectorAll('[data-vault-delete]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.dataset.vaultDelete;
        if (confirm('Supprimer cette entr\u00e9e ?')) {
          state.vault = state.vault.filter(function (e) { return e.id !== id; });
          saveState();
          renderVaultList(container);
        }
      });
    });
  }

  // -- Vault Add --
  function renderVaultAdd(container, editEntry) {
    var isEdit = !!editEntry;
    var html = '<div style="max-width:500px">';
    html += '<div class="ml-input-group">';
    html += '<label class="ml-label">Cat\u00e9gorie</label>';
    html += '<select class="ml-select" id="ml-vault-cat">';
    VAULT_CATEGORIES.forEach(function (cat) {
      var selected = isEdit && editEntry.category === cat.key ? ' selected' : '';
      html += '<option value="' + cat.key + '"' + selected + '>' + cat.icon + ' ' + escapeHtml(cat.label) + '</option>';
    });
    html += '</select>';
    html += '</div>';

    html += '<div class="ml-input-group">';
    html += '<label class="ml-label">\u00c9tiquette</label>';
    html += '<input class="ml-input" type="text" id="ml-vault-label" placeholder="ex: T\u00e9l\u00e9phone maman, Code immeuble, N\u00b0 s\u00e9cu\u2026" value="' + (isEdit ? escapeHtml(editEntry.label) : '') + '">';
    html += '</div>';

    html += '<div class="ml-input-group">';
    html += '<label class="ml-label">Valeur \u00e0 m\u00e9moriser</label>';
    html += '<input class="ml-input" type="text" id="ml-vault-value" placeholder="La donn\u00e9e \u00e0 retenir" value="' + (isEdit ? escapeHtml(editEntry.value) : '') + '">';
    html += '</div>';

    html += '<div class="ml-input-group">';
    html += '<label class="ml-label">Astuce mn\u00e9motechnique <span class="ml-muted">(optionnel)</span></label>';
    html += '<input class="ml-input" type="text" id="ml-vault-hint" placeholder="Ton truc pour t\'en souvenir\u2026" value="' + (isEdit ? escapeHtml(editEntry.hint || '') : '') + '">';
    html += '</div>';

    html += '<button class="ml-btn" id="ml-vault-save">' + (isEdit ? 'Mettre \u00e0 jour' : 'Enregistrer') + '</button>';
    if (isEdit) {
      html += '<button class="ml-btn ml-btn-secondary" id="ml-vault-cancel">Annuler</button>';
    }
    html += '</div>';

    container.innerHTML = html;

    document.getElementById('ml-vault-save').addEventListener('click', function () {
      var cat = document.getElementById('ml-vault-cat').value;
      var label = document.getElementById('ml-vault-label').value.trim();
      var value = document.getElementById('ml-vault-value').value.trim();
      var hint = document.getElementById('ml-vault-hint').value.trim();

      if (!label || !value) {
        alert('Remplis au moins l\'\u00e9tiquette et la valeur.');
        return;
      }

      if (isEdit) {
        var entry = findVaultEntry(editEntry.id);
        if (entry) {
          entry.category = cat;
          entry.label = label;
          entry.value = value;
          entry.hint = hint;
        }
      } else {
        state.vault.push({
          id: generateId(),
          category: cat,
          label: label,
          value: value,
          hint: hint,
          created: new Date().toISOString(),
          lastPracticed: null
        });
      }
      saveState();

      // Switch to list
      vaultTab = 'list';
      renderVaultSection();
    });

    if (isEdit) {
      document.getElementById('ml-vault-cancel').addEventListener('click', function () {
        vaultTab = 'list';
        renderVaultSection();
      });
    }
  }

  function renderVaultEdit(container, id) {
    var entry = findVaultEntry(id);
    if (!entry) return;
    renderVaultAdd(container, entry);
  }

  // -- Vault Practice --
  var vaultPracticeState = null;

  function renderVaultPractice(container) {
    if (state.vault.length === 0) {
      container.innerHTML = '<div class="ml-empty"><div class="ml-empty-icon">\uD83C\uDFCB\uFE0F</div><p>Ajoute d\'abord des donn\u00e9es dans ton coffre-fort.</p></div>';
      return;
    }

    // Category filter
    var html = '<div class="ml-filter">';
    html += '<button class="ml-filter-btn active" data-ml-vpcat="all">Toutes les cat\u00e9gories</button>';
    VAULT_CATEGORIES.forEach(function (cat) {
      var count = state.vault.filter(function (e) { return e.category === cat.key; }).length;
      if (count > 0) {
        html += '<button class="ml-filter-btn" data-ml-vpcat="' + cat.key + '">' + cat.icon + ' ' + escapeHtml(cat.label) + '</button>';
      }
    });
    html += '</div>';
    html += '<div style="text-align:center;padding:20px 0">';
    html += '<p style="color:var(--muted);margin-bottom:16px">Rappelle-toi de chaque valeur en la tapant de m\u00e9moire.<br>Priorit\u00e9 aux entr\u00e9es non ma\u00eetris\u00e9es.</p>';
    html += '<button class="ml-btn" id="ml-vpractice-start">Commencer</button>';
    html += '</div>';
    html += '<div id="ml-vpractice-area"></div>';

    container.innerHTML = html;

    var selectedCat = null;
    container.querySelectorAll('[data-ml-vpcat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-ml-vpcat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedCat = btn.dataset.mlVpcat === 'all' ? null : btn.dataset.mlVpcat;
      });
    });

    document.getElementById('ml-vpractice-start').addEventListener('click', function () {
      startVaultPractice(selectedCat);
    });
  }

  function startVaultPractice(catFilter) {
    var pool = state.vault.filter(function (e) {
      return !catFilter || e.category === catFilter;
    });
    if (pool.length === 0) return;

    // Prioritize unmastered
    var unmastered = pool.filter(function (e) { return getMastery('vault', e.id) < MASTERY_MAX; });
    var mastered = pool.filter(function (e) { return getMastery('vault', e.id) >= MASTERY_MAX; });
    var ordered = shuffle(unmastered).concat(shuffle(mastered));

    vaultPracticeState = {
      items: ordered,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderVaultPracticeQuestion();
  }

  function renderVaultPracticeQuestion() {
    var area = document.getElementById('ml-vpractice-area');
    if (!area || !vaultPracticeState) return;

    if (vaultPracticeState.current >= vaultPracticeState.items.length) {
      renderVaultPracticeResults(area);
      return;
    }

    var entry = vaultPracticeState.items[vaultPracticeState.current];
    var cat = getVaultCategoryObj(entry.category);
    var level = getMastery('vault', entry.id);

    var html = '<div class="ml-quiz-container">';
    html += '<div class="ml-quiz-progress">';
    html += '<span>' + (vaultPracticeState.current + 1) + '/' + vaultPracticeState.items.length + '</span>';
    html += '<div class="ml-quiz-bar"><div class="ml-quiz-bar-fill" style="width:' + (vaultPracticeState.current / vaultPracticeState.items.length * 100) + '%"></div></div>';
    html += '<span>' + vaultPracticeState.correct + ' \u2713</span>';
    html += '</div>';

    html += '<div class="ml-question" style="flex-direction:column;gap:8px">';
    html += '<div style="font-size:.85rem;color:var(--muted)">' + cat.icon + ' ' + escapeHtml(cat.label) + '</div>';
    html += '<div>' + escapeHtml(entry.label) + '</div>';
    html += '<div>' + masteryDots(level) + '</div>';
    if (entry.hint) {
      html += '<div style="font-size:.8rem;color:var(--muted);font-family:inherit;font-style:italic">Astuce : ' + escapeHtml(entry.hint) + '</div>';
    }
    html += '</div>';

    html += '<input class="ml-practice-input" type="text" id="ml-vpractice-input" placeholder="Tape la valeur de m\u00e9moire\u2026" autocomplete="off">';
    html += '<div style="text-align:center">';
    html += '<button class="ml-btn" id="ml-vpractice-check">V\u00e9rifier</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-vpractice-skip">Passer</button>';
    html += '</div>';
    html += '<div id="ml-vpractice-feedback" style="text-align:center;margin-top:16px"></div>';
    html += '</div>';

    area.innerHTML = html;

    var input = document.getElementById('ml-vpractice-input');
    input.focus();

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        document.getElementById('ml-vpractice-check').click();
      }
    });

    document.getElementById('ml-vpractice-check').addEventListener('click', function () {
      checkVaultAnswer(entry);
    });

    document.getElementById('ml-vpractice-skip').addEventListener('click', function () {
      // Show answer, mark wrong
      setMastery('vault', entry.id, 0);
      var fb = document.getElementById('ml-vpractice-feedback');
      fb.innerHTML = '<div class="ml-type-answer ml-wrong-answer">R\u00e9ponse : <strong>' + escapeHtml(entry.value) + '</strong></div>';
      input.classList.add('ml-input-wrong');
      input.disabled = true;
      vaultPracticeState.current++;
      setTimeout(renderVaultPracticeQuestion, 2000);
    });
  }

  function checkVaultAnswer(entry) {
    var input = document.getElementById('ml-vpractice-input');
    var fb = document.getElementById('ml-vpractice-feedback');
    if (!input || !fb) return;

    var userVal = input.value.trim();
    var correctVal = entry.value;
    var isCorrect = normalize(userVal) === normalize(correctVal);

    if (isCorrect) {
      input.classList.add('ml-input-correct');
      fb.innerHTML = '<div class="ml-type-answer" style="color:var(--green)">\u2713 Correct !</div>';
      vaultPracticeState.correct++;
      var lvl = getMastery('vault', entry.id);
      setMastery('vault', entry.id, lvl + 1);
      entry.lastPracticed = new Date().toISOString();
      saveState();
    } else {
      input.classList.add('ml-input-wrong');
      fb.innerHTML = '<div class="ml-type-answer ml-wrong-answer">R\u00e9ponse : <strong>' + escapeHtml(correctVal) + '</strong></div>';
      setMastery('vault', entry.id, 0);
      entry.lastPracticed = new Date().toISOString();
      saveState();
    }

    input.disabled = true;
    vaultPracticeState.current++;
    setTimeout(renderVaultPracticeQuestion, 1800);
  }

  function renderVaultPracticeResults(area) {
    var elapsed = Math.round((Date.now() - vaultPracticeState.startTime) / 1000);
    var total = vaultPracticeState.items.length;
    var correct = vaultPracticeState.correct;
    var pct = Math.round(correct / total * 100);

    saveResult('vault', correct, total, elapsed);

    var html = '<div class="ml-results">';
    html += '<div class="ml-results-score">' + pct + '%</div>';
    html += '<div class="ml-results-label">Entra\u00eenement termin\u00e9</div>';
    html += '<div class="ml-results-detail">' + correct + ' / ' + total + ' r\u00e9ponses correctes</div>';
    html += '<div class="ml-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="ml-btn" id="ml-vp-retry">Recommencer</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-vp-back">Mon coffre</button>';
    html += '</div>';
    html += '</div>';
    area.innerHTML = html;

    document.getElementById('ml-vp-retry').addEventListener('click', function () {
      vaultTab = 'practice';
      renderVaultContent();
    });
    document.getElementById('ml-vp-back').addEventListener('click', function () {
      vaultTab = 'list';
      renderVaultSection();
    });
  }

  // -- Vault Tips --
  function renderVaultTips(container) {
    var html = '';
    var keys = Object.keys(VAULT_TIPS);
    keys.forEach(function (key) {
      var section = VAULT_TIPS[key];
      html += '<div class="ml-tips-section">';
      html += '<div class="ml-tips-title">' + escapeHtml(section.title) + '</div>';
      html += '<ul class="ml-tips-list">';
      section.tips.forEach(function (tip) {
        html += '<li>' + escapeHtml(tip) + '</li>';
      });
      html += '</ul>';
      html += '</div>';
    });
    container.innerHTML = html;
  }

  function findVaultEntry(id) {
    for (var i = 0; i < state.vault.length; i++) {
      if (state.vault[i].id === id) return state.vault[i];
    }
    return null;
  }

  // ══════════════════════════════════════════════════════════════
  //  PART 2: DÉPARTEMENTS FRANÇAIS
  // ══════════════════════════════════════════════════════════════

  function renderDepartmentsSection() {
    currentTab = currentTab || 'learn';
    var html = '';
    html += '<div class="ml-header">';
    html += '<button class="ml-back" id="ml-back-main">\u2190 Retour</button>';
    html += '<span class="ml-title-icon">\uD83D\uDDFA\uFE0F</span>';
    html += '<span class="ml-title">D\u00e9partements fran\u00e7ais</span>';
    html += '</div>';

    html += '<div class="ml-tabs">';
    var deptTabs = [
      { key: 'learn', label: 'Apprendre' },
      { key: 'num2name', label: 'N\u00b0 \u2192 D\u00e9pt' },
      { key: 'name2num', label: 'D\u00e9pt \u2192 N\u00b0' },
      { key: 'name2pref', label: 'D\u00e9pt \u2192 Pr\u00e9f.' },
      { key: 'sprint', label: 'Sprint' }
    ];
    deptTabs.forEach(function (t) {
      html += '<button class="ml-tab' + (currentTab === t.key ? ' active' : '') + '" data-ml-dtab="' + t.key + '">' + t.label + '</button>';
    });
    html += '</div>';

    html += '<div id="ml-dept-content"></div>';

    rootEl.innerHTML = html;

    document.getElementById('ml-back-main').addEventListener('click', function () {
      renderMainGrid();
    });

    rootEl.querySelectorAll('.ml-tab[data-ml-dtab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.dataset.mlDtab;
        currentFilter = null;
        renderDeptContent();
      });
    });

    renderDeptContent();
  }

  function renderDeptContent() {
    var container = document.getElementById('ml-dept-content');
    if (!container) return;
    if (currentTab === 'learn') renderDeptLearn(container);
    else if (currentTab === 'num2name') renderDeptQuiz(container, 'num2name');
    else if (currentTab === 'name2num') renderDeptTypeQuiz(container, 'name2num');
    else if (currentTab === 'name2pref') renderDeptQuiz(container, 'name2pref');
    else if (currentTab === 'sprint') renderDeptSprint(container);
  }

  // -- Departments Learn --
  function renderDeptLearn(container) {
    var regions = getRegions();

    var html = '';
    html += '<input class="ml-search" type="text" id="ml-dept-search" placeholder="Rechercher un d\u00e9partement\u2026">';
    html += '<div class="ml-filter">';
    html += '<button class="ml-filter-btn active" data-ml-dfilter="all">Toutes les r\u00e9gions</button>';
    regions.forEach(function (r) {
      html += '<button class="ml-filter-btn" data-ml-dfilter="' + escapeHtml(r) + '">' + escapeHtml(r) + '</button>';
    });
    html += '</div>';

    html += '<div class="ml-table-wrap"><table class="ml-table">';
    html += '<thead><tr><th>N\u00b0</th><th>D\u00e9partement</th><th>Pr\u00e9fecture</th><th>R\u00e9gion</th><th></th></tr></thead>';
    html += '<tbody id="ml-dept-tbody">';
    DEPARTMENTS.forEach(function (d, idx) {
      var level = getMastery('departments', idx);
      html += '<tr data-dept-idx="' + idx + '" data-dept-region="' + escapeHtml(d.region) + '">';
      html += '<td class="ml-num-col">' + escapeHtml(d.number) + '</td>';
      html += '<td>' + escapeHtml(d.name) + '</td>';
      html += '<td>' + escapeHtml(d.prefecture) + '</td>';
      html += '<td class="ml-muted">' + escapeHtml(d.region) + '</td>';
      html += '<td>' + masteryDots(level) + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';

    container.innerHTML = html;

    // Search
    document.getElementById('ml-dept-search').addEventListener('input', function () {
      filterDeptTable();
    });

    // Region filter
    container.querySelectorAll('[data-ml-dfilter]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-ml-dfilter]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentFilter = btn.dataset.mlDfilter === 'all' ? null : btn.dataset.mlDfilter;
        filterDeptTable();
      });
    });
  }

  function filterDeptTable() {
    var search = (document.getElementById('ml-dept-search') || {}).value || '';
    search = search.toLowerCase();
    var tbody = document.getElementById('ml-dept-tbody');
    if (!tbody) return;
    var rows = tbody.querySelectorAll('tr[data-dept-idx]');
    rows.forEach(function (row) {
      var idx = parseInt(row.dataset.deptIdx, 10);
      var d = DEPARTMENTS[idx];
      var matchRegion = !currentFilter || d.region === currentFilter;
      var matchSearch = !search ||
        d.number.toLowerCase().indexOf(search) !== -1 ||
        d.name.toLowerCase().indexOf(search) !== -1 ||
        d.prefecture.toLowerCase().indexOf(search) !== -1 ||
        d.region.toLowerCase().indexOf(search) !== -1;
      row.style.display = (matchRegion && matchSearch) ? '' : 'none';
    });
  }

  // -- Departments MCQ Quiz (num→name, name→pref) --
  function renderDeptQuiz(container, mode) {
    var regions = getRegions();
    var html = '<div class="ml-filter">';
    html += '<button class="ml-filter-btn active" data-ml-dqcat="all">Toutes les r\u00e9gions</button>';
    regions.forEach(function (r) {
      html += '<button class="ml-filter-btn" data-ml-dqcat="' + escapeHtml(r) + '">' + escapeHtml(r) + '</button>';
    });
    html += '</div>';
    html += '<div style="text-align:center;padding:20px 0">';
    html += '<p style="color:var(--muted);margin-bottom:16px">' + QUIZ_LENGTH + ' questions \u2014 Priorit\u00e9 aux items non ma\u00eetris\u00e9s</p>';
    html += '<button class="ml-btn" id="ml-dquiz-start">Commencer le quiz</button>';
    html += '</div>';
    html += '<div id="ml-dquiz-area"></div>';

    container.innerHTML = html;

    var selectedRegion = null;
    container.querySelectorAll('[data-ml-dqcat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-ml-dqcat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedRegion = btn.dataset.mlDqcat === 'all' ? null : btn.dataset.mlDqcat;
      });
    });

    document.getElementById('ml-dquiz-start').addEventListener('click', function () {
      startDeptQuiz(mode, selectedRegion);
    });
  }

  function startDeptQuiz(mode, regionFilter) {
    var pool = [];
    DEPARTMENTS.forEach(function (d, idx) {
      if (regionFilter && d.region !== regionFilter) return;
      pool.push({ dept: d, index: idx });
    });
    if (pool.length === 0) return;

    var unmastered = pool.filter(function (p) { return getMastery('departments', p.index) < MASTERY_MAX; });
    var mastered = pool.filter(function (p) { return getMastery('departments', p.index) >= MASTERY_MAX; });
    var selected = shuffle(unmastered).slice(0, QUIZ_LENGTH);
    if (selected.length < QUIZ_LENGTH) {
      selected = selected.concat(shuffle(mastered).slice(0, QUIZ_LENGTH - selected.length));
    }
    selected = shuffle(selected);
    if (selected.length === 0) return;

    quizState = {
      mode: mode,
      questions: selected,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderDeptQuizQuestion();
  }

  function renderDeptQuizQuestion() {
    var area = document.getElementById('ml-dquiz-area');
    if (!area || !quizState) return;

    if (quizState.current >= quizState.questions.length) {
      renderDeptQuizResults(area);
      return;
    }

    var q = quizState.questions[quizState.current];
    var d = q.dept;
    var mode = quizState.mode;

    var questionText, correctAnswer, allAnswers;
    if (mode === 'num2name') {
      questionText = 'D\u00e9partement n\u00b0 ' + d.number + ' ?';
      correctAnswer = d.name;
      allAnswers = DEPARTMENTS.map(function (x) { return x.name; });
    } else {
      questionText = d.name + ' \u2192 Pr\u00e9fecture ?';
      correctAnswer = d.prefecture;
      allAnswers = DEPARTMENTS.map(function (x) { return x.prefecture; });
    }

    var distractors = allAnswers.filter(function (a) { return a !== correctAnswer; });
    var wrong = pickRandom(distractors, 3, correctAnswer);
    var choices = shuffle(wrong.concat([correctAnswer]));

    var html = '<div class="ml-quiz-container">';
    html += '<div class="ml-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="ml-quiz-bar"><div class="ml-quiz-bar-fill" style="width:' + (quizState.current / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' \u2713</span>';
    html += '</div>';

    html += '<div class="ml-question">' + escapeHtml(questionText) + '</div>';
    html += '<div class="ml-choices">';
    choices.forEach(function (c) {
      html += '<button class="ml-choice" data-ml-danswer="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    });
    html += '</div></div>';

    area.innerHTML = html;

    area.querySelectorAll('.ml-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleDeptQuizAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleDeptQuizAnswer(btn, correctAnswer, itemIndex) {
    var area = document.getElementById('ml-dquiz-area');
    if (!area) return;
    var chosen = btn.dataset.mlDanswer;
    var isCorrect = chosen === correctAnswer;

    area.querySelectorAll('.ml-choice').forEach(function (b) {
      b.classList.add('ml-disabled');
      if (b.dataset.mlDanswer === correctAnswer) {
        b.classList.add('ml-correct');
        b.classList.add('ml-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('ml-correct');
      quizState.correct++;
      setMastery('departments', itemIndex, getMastery('departments', itemIndex) + 1);
    } else {
      btn.classList.add('ml-wrong');
      setMastery('departments', itemIndex, 0);
    }

    quizState.current++;
    setTimeout(renderDeptQuizQuestion, 1200);
  }

  function renderDeptQuizResults(area) {
    var elapsed = Math.round((Date.now() - quizState.startTime) / 1000);
    var pct = Math.round(quizState.correct / quizState.questions.length * 100);

    saveResult('dept:' + quizState.mode, quizState.correct, quizState.questions.length, elapsed);

    var html = '<div class="ml-results">';
    html += '<div class="ml-results-score">' + pct + '%</div>';
    html += '<div class="ml-results-label">Quiz termin\u00e9</div>';
    html += '<div class="ml-results-detail">' + quizState.correct + ' / ' + quizState.questions.length + ' r\u00e9ponses correctes</div>';
    html += '<div class="ml-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="ml-btn" id="ml-dq-retry">Recommencer</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-dq-learn">Voir le tableau</button>';
    html += '</div></div>';
    area.innerHTML = html;

    document.getElementById('ml-dq-retry').addEventListener('click', function () {
      renderDeptContent();
    });
    document.getElementById('ml-dq-learn').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
      var learnTab = rootEl.querySelector('.ml-tab[data-ml-dtab="learn"]');
      if (learnTab) learnTab.classList.add('active');
      renderDeptContent();
    });
  }

  // -- Departments Type Quiz (name→num) --
  function renderDeptTypeQuiz(container, mode) {
    var regions = getRegions();
    var html = '<div class="ml-filter">';
    html += '<button class="ml-filter-btn active" data-ml-dtqcat="all">Toutes les r\u00e9gions</button>';
    regions.forEach(function (r) {
      html += '<button class="ml-filter-btn" data-ml-dtqcat="' + escapeHtml(r) + '">' + escapeHtml(r) + '</button>';
    });
    html += '</div>';
    html += '<div style="text-align:center;padding:20px 0">';
    html += '<p style="color:var(--muted);margin-bottom:16px">' + QUIZ_LENGTH + ' questions \u2014 Tape le num\u00e9ro du d\u00e9partement</p>';
    html += '<button class="ml-btn" id="ml-dtquiz-start">Commencer</button>';
    html += '</div>';
    html += '<div id="ml-dtquiz-area"></div>';

    container.innerHTML = html;

    var selectedRegion = null;
    container.querySelectorAll('[data-ml-dtqcat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-ml-dtqcat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedRegion = btn.dataset.mlDtqcat === 'all' ? null : btn.dataset.mlDtqcat;
      });
    });

    document.getElementById('ml-dtquiz-start').addEventListener('click', function () {
      startDeptTypeQuiz(selectedRegion);
    });
  }

  function startDeptTypeQuiz(regionFilter) {
    var pool = [];
    DEPARTMENTS.forEach(function (d, idx) {
      if (regionFilter && d.region !== regionFilter) return;
      pool.push({ dept: d, index: idx });
    });
    if (pool.length === 0) return;

    var unmastered = pool.filter(function (p) { return getMastery('departments', p.index) < MASTERY_MAX; });
    var mastered = pool.filter(function (p) { return getMastery('departments', p.index) >= MASTERY_MAX; });
    var selected = shuffle(unmastered).slice(0, QUIZ_LENGTH);
    if (selected.length < QUIZ_LENGTH) {
      selected = selected.concat(shuffle(mastered).slice(0, QUIZ_LENGTH - selected.length));
    }
    selected = shuffle(selected);
    if (selected.length === 0) return;

    quizState = {
      mode: 'name2num',
      questions: selected,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderDeptTypeQuestion();
  }

  function renderDeptTypeQuestion() {
    var area = document.getElementById('ml-dtquiz-area');
    if (!area || !quizState) return;

    if (quizState.current >= quizState.questions.length) {
      renderDeptQuizResults(area);
      return;
    }

    var q = quizState.questions[quizState.current];
    var d = q.dept;

    var html = '<div class="ml-quiz-container">';
    html += '<div class="ml-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="ml-quiz-bar"><div class="ml-quiz-bar-fill" style="width:' + (quizState.current / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' \u2713</span>';
    html += '</div>';

    html += '<div class="ml-question">' + escapeHtml(d.name) + ' \u2192 N\u00b0 ?</div>';
    html += '<div class="ml-type-input">';
    html += '<input class="ml-type-field" type="text" id="ml-dtype-input" placeholder="N\u00b0" autocomplete="off" maxlength="4">';
    html += '</div>';
    html += '<div style="text-align:center;margin-top:12px">';
    html += '<button class="ml-btn" id="ml-dtype-check">V\u00e9rifier</button>';
    html += '</div>';
    html += '<div id="ml-dtype-feedback" style="text-align:center;margin-top:12px"></div>';
    html += '</div>';

    area.innerHTML = html;

    var input = document.getElementById('ml-dtype-input');
    input.focus();

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') document.getElementById('ml-dtype-check').click();
    });

    document.getElementById('ml-dtype-check').addEventListener('click', function () {
      var userVal = input.value.trim().toUpperCase();
      var correctVal = d.number.toUpperCase();
      var isCorrect = userVal === correctVal;
      var fb = document.getElementById('ml-dtype-feedback');

      if (isCorrect) {
        input.classList.add('ml-correct');
        fb.innerHTML = '<div class="ml-type-answer">\u2713 Correct !</div>';
        quizState.correct++;
        setMastery('departments', q.index, getMastery('departments', q.index) + 1);
      } else {
        input.classList.add('ml-wrong');
        fb.innerHTML = '<div class="ml-type-answer ml-wrong-answer">R\u00e9ponse : <strong>' + escapeHtml(d.number) + '</strong></div>';
        setMastery('departments', q.index, 0);
      }
      input.disabled = true;
      quizState.current++;
      setTimeout(renderDeptTypeQuestion, 1500);
    });
  }

  // -- Departments Sprint --
  function renderDeptSprint(container) {
    var regions = getRegions();
    var html = '<div class="ml-filter">';
    html += '<button class="ml-filter-btn active" data-ml-dscat="all">Toutes les r\u00e9gions</button>';
    regions.forEach(function (r) {
      html += '<button class="ml-filter-btn" data-ml-dscat="' + escapeHtml(r) + '">' + escapeHtml(r) + '</button>';
    });
    html += '</div>';
    html += '<div style="text-align:center;padding:30px 0">';
    html += '<p style="color:var(--muted);margin-bottom:20px">R\u00e9ponds \u00e0 un maximum de questions en ' + SPRINT_DURATION + ' secondes !</p>';
    html += '<button class="ml-btn" id="ml-dsprint-start">Lancer le Sprint</button>';
    html += '</div>';
    html += '<div id="ml-dsprint-area"></div>';

    container.innerHTML = html;

    var selectedRegion = null;
    container.querySelectorAll('[data-ml-dscat]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        container.querySelectorAll('[data-ml-dscat]').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        selectedRegion = btn.dataset.mlDscat === 'all' ? null : btn.dataset.mlDscat;
      });
    });

    document.getElementById('ml-dsprint-start').addEventListener('click', function () {
      startDeptSprint(selectedRegion);
    });
  }

  function startDeptSprint(regionFilter) {
    var pool = [];
    DEPARTMENTS.forEach(function (d, idx) {
      if (regionFilter && d.region !== regionFilter) return;
      pool.push({ dept: d, index: idx });
    });
    if (pool.length === 0) return;

    sprintState = {
      correct: 0,
      total: 0,
      remaining: SPRINT_DURATION,
      pool: shuffle(pool),
      poolIdx: 0
    };

    if (!feedbackEl) {
      feedbackEl = document.createElement('div');
      feedbackEl.className = 'ml-sprint-feedback';
      document.body.appendChild(feedbackEl);
    }

    renderDeptSprintQuestion();
    sprintTimer = setInterval(function () {
      sprintState.remaining--;
      var timerEl = document.getElementById('ml-dsprint-time');
      if (timerEl) {
        timerEl.textContent = sprintState.remaining + 's';
        if (sprintState.remaining <= 10) timerEl.classList.add('ml-urgent');
      }
      if (sprintState.remaining <= 0) endDeptSprint();
    }, 1000);
  }

  function renderDeptSprintQuestion() {
    var area = document.getElementById('ml-dsprint-area');
    if (!area || !sprintState) return;

    if (sprintState.poolIdx >= sprintState.pool.length) {
      sprintState.pool = shuffle(sprintState.pool);
      sprintState.poolIdx = 0;
    }

    var q = sprintState.pool[sprintState.poolIdx];
    var d = q.dept;
    var correctAnswer = d.name;
    var allNames = DEPARTMENTS.map(function (x) { return x.name; });
    var wrong = pickRandom(allNames.filter(function (n) { return n !== correctAnswer; }), 3);
    var choices = shuffle(wrong.concat([correctAnswer]));

    var html = '';
    html += '<div class="ml-sprint-hud">';
    html += '<div class="ml-sprint-timer' + (sprintState.remaining <= 10 ? ' ml-urgent' : '') + '" id="ml-dsprint-time">' + sprintState.remaining + 's</div>';
    html += '<div class="ml-sprint-score">Score : <span id="ml-dsprint-score">' + sprintState.correct + '</span></div>';
    html += '</div>';

    html += '<div class="ml-quiz-container">';
    html += '<div class="ml-question">D\u00e9partement n\u00b0 ' + escapeHtml(d.number) + ' ?</div>';
    html += '<div class="ml-choices">';
    choices.forEach(function (c) {
      html += '<button class="ml-choice" data-ml-dsanswer="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    });
    html += '</div></div>';

    area.innerHTML = html;

    area.querySelectorAll('.ml-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chosen = btn.dataset.mlDsanswer;
        var isCorrect = chosen === correctAnswer;
        sprintState.total++;

        if (isCorrect) {
          sprintState.correct++;
          setMastery('departments', q.index, getMastery('departments', q.index) + 1);
          showSprintFeedback('\u2713', 'var(--green, #69f0ae)');
        } else {
          setMastery('departments', q.index, 0);
          showSprintFeedback('\u2717', '#ff5252');
        }

        var scoreEl = document.getElementById('ml-dsprint-score');
        if (scoreEl) scoreEl.textContent = sprintState.correct;

        sprintState.poolIdx++;
        setTimeout(renderDeptSprintQuestion, 300);
      });
    });
  }

  function endDeptSprint() {
    cleanupSprint();
    var area = document.getElementById('ml-dsprint-area');
    if (!area) return;

    saveResult('dept:sprint', sprintState.correct, sprintState.total, SPRINT_DURATION);

    var html = '<div class="ml-results">';
    html += '<div class="ml-results-score">' + sprintState.correct + '</div>';
    html += '<div class="ml-results-label">points en ' + SPRINT_DURATION + 's</div>';
    html += '<div class="ml-results-detail">' + sprintState.correct + ' / ' + sprintState.total + ' r\u00e9ponses correctes</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="ml-btn" id="ml-ds-retry">Relancer</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-ds-back">Tableau</button>';
    html += '</div></div>';
    area.innerHTML = html;

    document.getElementById('ml-ds-retry').addEventListener('click', function () {
      renderDeptContent();
    });
    document.getElementById('ml-ds-back').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
      var learnTab = rootEl.querySelector('.ml-tab[data-ml-dtab="learn"]');
      if (learnTab) learnTab.classList.add('active');
      renderDeptContent();
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  PART 3: INDICATIFS TÉLÉPHONIQUES
  // ══════════════════════════════════════════════════════════════

  function renderPhoneCodesSection() {
    currentTab = currentTab || 'learn';
    var html = '';
    html += '<div class="ml-header">';
    html += '<button class="ml-back" id="ml-back-main">\u2190 Retour</button>';
    html += '<span class="ml-title-icon">\uD83D\uDCDE</span>';
    html += '<span class="ml-title">Indicatifs internationaux</span>';
    html += '</div>';

    html += '<div class="ml-tabs">';
    var pcTabs = [
      { key: 'learn', label: 'Apprendre' },
      { key: 'country2code', label: 'Pays \u2192 Code' },
      { key: 'code2country', label: 'Code \u2192 Pays' }
    ];
    pcTabs.forEach(function (t) {
      html += '<button class="ml-tab' + (currentTab === t.key ? ' active' : '') + '" data-ml-pctab="' + t.key + '">' + t.label + '</button>';
    });
    html += '</div>';

    html += '<div id="ml-pc-content"></div>';

    rootEl.innerHTML = html;

    document.getElementById('ml-back-main').addEventListener('click', function () {
      renderMainGrid();
    });

    rootEl.querySelectorAll('.ml-tab[data-ml-pctab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.dataset.mlPctab;
        renderPCContent();
      });
    });

    renderPCContent();
  }

  function renderPCContent() {
    var container = document.getElementById('ml-pc-content');
    if (!container) return;
    if (currentTab === 'learn') renderPCLearn(container);
    else if (currentTab === 'country2code') renderPCQuiz(container, 'country2code');
    else if (currentTab === 'code2country') renderPCQuiz(container, 'code2country');
  }

  function renderPCLearn(container) {
    var html = '<div class="ml-table-wrap"><table class="ml-table">';
    html += '<thead><tr><th></th><th>Pays</th><th>Indicatif</th><th></th></tr></thead>';
    html += '<tbody>';
    PHONE_CODES.forEach(function (pc, idx) {
      var level = getMastery('phonecodes', idx);
      html += '<tr>';
      html += '<td style="font-size:1.4rem">' + pc.flag + '</td>';
      html += '<td>' + escapeHtml(pc.country) + '</td>';
      html += '<td class="ml-num-col">' + escapeHtml(pc.code) + '</td>';
      html += '<td>' + masteryDots(level) + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  function renderPCQuiz(container, mode) {
    var html = '<div style="text-align:center;padding:20px 0">';
    html += '<p style="color:var(--muted);margin-bottom:16px">' + QUIZ_LENGTH + ' questions</p>';
    html += '<button class="ml-btn" id="ml-pcquiz-start">Commencer</button>';
    html += '</div>';
    html += '<div id="ml-pcquiz-area"></div>';

    container.innerHTML = html;

    document.getElementById('ml-pcquiz-start').addEventListener('click', function () {
      startPCQuiz(mode);
    });
  }

  function startPCQuiz(mode) {
    var pool = PHONE_CODES.map(function (pc, idx) { return { pc: pc, index: idx }; });
    var unmastered = pool.filter(function (p) { return getMastery('phonecodes', p.index) < MASTERY_MAX; });
    var mastered = pool.filter(function (p) { return getMastery('phonecodes', p.index) >= MASTERY_MAX; });
    var selected = shuffle(unmastered).slice(0, QUIZ_LENGTH);
    if (selected.length < QUIZ_LENGTH) {
      selected = selected.concat(shuffle(mastered).slice(0, QUIZ_LENGTH - selected.length));
    }
    selected = shuffle(selected);
    if (selected.length === 0) return;

    quizState = {
      mode: mode,
      questions: selected,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderPCQuizQuestion();
  }

  function renderPCQuizQuestion() {
    var area = document.getElementById('ml-pcquiz-area');
    if (!area || !quizState) return;

    if (quizState.current >= quizState.questions.length) {
      renderPCQuizResults(area);
      return;
    }

    var q = quizState.questions[quizState.current];
    var pc = q.pc;
    var mode = quizState.mode;

    var questionText, correctAnswer, allAnswers;
    if (mode === 'country2code') {
      questionText = pc.flag + ' ' + pc.country + ' \u2192 Indicatif ?';
      correctAnswer = pc.code;
      allAnswers = PHONE_CODES.map(function (x) { return x.code; });
    } else {
      questionText = 'Indicatif ' + pc.code + ' \u2192 Pays ?';
      correctAnswer = pc.country;
      allAnswers = PHONE_CODES.map(function (x) { return x.country; });
    }

    // Unique answers only
    var uniqueAnswers = [];
    var seen = {};
    allAnswers.forEach(function (a) {
      if (!seen[a]) { seen[a] = true; uniqueAnswers.push(a); }
    });

    var distractors = uniqueAnswers.filter(function (a) { return a !== correctAnswer; });
    var wrong = pickRandom(distractors, 3);
    var choices = shuffle(wrong.concat([correctAnswer]));

    var html = '<div class="ml-quiz-container">';
    html += '<div class="ml-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="ml-quiz-bar"><div class="ml-quiz-bar-fill" style="width:' + (quizState.current / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' \u2713</span>';
    html += '</div>';

    html += '<div class="ml-question">' + escapeHtml(questionText) + '</div>';
    html += '<div class="ml-choices">';
    choices.forEach(function (c) {
      html += '<button class="ml-choice" data-ml-pcanswer="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    });
    html += '</div></div>';

    area.innerHTML = html;

    area.querySelectorAll('.ml-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handlePCQuizAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handlePCQuizAnswer(btn, correctAnswer, itemIndex) {
    var area = document.getElementById('ml-pcquiz-area');
    if (!area) return;
    var chosen = btn.dataset.mlPcanswer;
    var isCorrect = chosen === correctAnswer;

    area.querySelectorAll('.ml-choice').forEach(function (b) {
      b.classList.add('ml-disabled');
      if (b.dataset.mlPcanswer === correctAnswer) {
        b.classList.add('ml-correct');
        b.classList.add('ml-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('ml-correct');
      quizState.correct++;
      setMastery('phonecodes', itemIndex, getMastery('phonecodes', itemIndex) + 1);
    } else {
      btn.classList.add('ml-wrong');
      setMastery('phonecodes', itemIndex, 0);
    }

    quizState.current++;
    setTimeout(renderPCQuizQuestion, 1200);
  }

  function renderPCQuizResults(area) {
    var elapsed = Math.round((Date.now() - quizState.startTime) / 1000);
    var pct = Math.round(quizState.correct / quizState.questions.length * 100);

    saveResult('phonecodes:' + quizState.mode, quizState.correct, quizState.questions.length, elapsed);

    var html = '<div class="ml-results">';
    html += '<div class="ml-results-score">' + pct + '%</div>';
    html += '<div class="ml-results-label">Quiz termin\u00e9</div>';
    html += '<div class="ml-results-detail">' + quizState.correct + ' / ' + quizState.questions.length + ' r\u00e9ponses correctes</div>';
    html += '<div class="ml-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="ml-btn" id="ml-pcq-retry">Recommencer</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-pcq-learn">Voir le tableau</button>';
    html += '</div></div>';
    area.innerHTML = html;

    document.getElementById('ml-pcq-retry').addEventListener('click', function () {
      renderPCContent();
    });
    document.getElementById('ml-pcq-learn').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
      var learnTab = rootEl.querySelector('.ml-tab[data-ml-pctab="learn"]');
      if (learnTab) learnTab.classList.add('active');
      renderPCContent();
    });
  }

  // ══════════════════════════════════════════════════════════════
  //  PART 4: NUMÉROS D'URGENCE
  // ══════════════════════════════════════════════════════════════

  function renderEmergencySection() {
    currentTab = currentTab || 'learn';
    var html = '';
    html += '<div class="ml-header">';
    html += '<button class="ml-back" id="ml-back-main">\u2190 Retour</button>';
    html += '<span class="ml-title-icon">\uD83D\uDEA8</span>';
    html += '<span class="ml-title">Num\u00e9ros d\'urgence & utiles</span>';
    html += '</div>';

    html += '<div class="ml-tabs">';
    html += '<button class="ml-tab' + (currentTab === 'learn' ? ' active' : '') + '" data-ml-etab="learn">Apprendre</button>';
    html += '<button class="ml-tab' + (currentTab === 'quiz' ? ' active' : '') + '" data-ml-etab="quiz">Quiz</button>';
    html += '</div>';

    html += '<div id="ml-emerg-content"></div>';

    rootEl.innerHTML = html;

    document.getElementById('ml-back-main').addEventListener('click', function () {
      renderMainGrid();
    });

    rootEl.querySelectorAll('.ml-tab[data-ml-etab]').forEach(function (tab) {
      tab.addEventListener('click', function () {
        rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentTab = tab.dataset.mlEtab;
        renderEmergContent();
      });
    });

    renderEmergContent();
  }

  function renderEmergContent() {
    var container = document.getElementById('ml-emerg-content');
    if (!container) return;
    if (currentTab === 'learn') renderEmergLearn(container);
    else if (currentTab === 'quiz') renderEmergQuiz(container);
  }

  function renderEmergLearn(container) {
    var html = '<div class="ml-table-wrap"><table class="ml-table">';
    html += '<thead><tr><th>Service</th><th>Num\u00e9ro</th><th>Description</th><th></th></tr></thead>';
    html += '<tbody>';
    EMERGENCY_NUMBERS.forEach(function (en, idx) {
      var level = getMastery('emergency', idx);
      html += '<tr>';
      html += '<td><strong>' + escapeHtml(en.name) + '</strong></td>';
      html += '<td class="ml-num-col">' + escapeHtml(en.number) + '</td>';
      html += '<td class="ml-muted">' + escapeHtml(en.desc) + '</td>';
      html += '<td>' + masteryDots(level) + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    container.innerHTML = html;
  }

  function renderEmergQuiz(container) {
    var html = '<div style="text-align:center;padding:20px 0">';
    html += '<p style="color:var(--muted);margin-bottom:16px">Quel num\u00e9ro pour quel service ?</p>';
    html += '<button class="ml-btn" id="ml-equiz-start">Commencer</button>';
    html += '</div>';
    html += '<div id="ml-equiz-area"></div>';

    container.innerHTML = html;

    document.getElementById('ml-equiz-start').addEventListener('click', function () {
      startEmergQuiz();
    });
  }

  function startEmergQuiz() {
    var pool = EMERGENCY_NUMBERS.map(function (en, idx) { return { en: en, index: idx }; });
    var unmastered = pool.filter(function (p) { return getMastery('emergency', p.index) < MASTERY_MAX; });
    var mastered = pool.filter(function (p) { return getMastery('emergency', p.index) >= MASTERY_MAX; });
    var selected = shuffle(unmastered).concat(shuffle(mastered));
    selected = selected.slice(0, Math.min(QUIZ_LENGTH, selected.length));
    selected = shuffle(selected);
    if (selected.length === 0) return;

    quizState = {
      mode: 'emergency',
      questions: selected,
      current: 0,
      correct: 0,
      startTime: Date.now()
    };

    renderEmergQuizQuestion();
  }

  function renderEmergQuizQuestion() {
    var area = document.getElementById('ml-equiz-area');
    if (!area || !quizState) return;

    if (quizState.current >= quizState.questions.length) {
      renderEmergQuizResults(area);
      return;
    }

    var q = quizState.questions[quizState.current];
    var en = q.en;
    var questionText = en.name + ' (' + en.desc + ')';
    var correctAnswer = en.number;
    var allNumbers = EMERGENCY_NUMBERS.map(function (x) { return x.number; });
    var distractors = allNumbers.filter(function (n) { return n !== correctAnswer; });
    var wrong = pickRandom(distractors, 3);
    var choices = shuffle(wrong.concat([correctAnswer]));

    var html = '<div class="ml-quiz-container">';
    html += '<div class="ml-quiz-progress">';
    html += '<span>' + (quizState.current + 1) + '/' + quizState.questions.length + '</span>';
    html += '<div class="ml-quiz-bar"><div class="ml-quiz-bar-fill" style="width:' + (quizState.current / quizState.questions.length * 100) + '%"></div></div>';
    html += '<span>' + quizState.correct + ' \u2713</span>';
    html += '</div>';

    html += '<div class="ml-question">' + escapeHtml(questionText) + '</div>';
    html += '<div class="ml-choices">';
    choices.forEach(function (c) {
      html += '<button class="ml-choice" data-ml-eanswer="' + escapeHtml(c) + '">' + escapeHtml(c) + '</button>';
    });
    html += '</div></div>';

    area.innerHTML = html;

    area.querySelectorAll('.ml-choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleEmergQuizAnswer(btn, correctAnswer, q.index);
      });
    });
  }

  function handleEmergQuizAnswer(btn, correctAnswer, itemIndex) {
    var area = document.getElementById('ml-equiz-area');
    if (!area) return;
    var chosen = btn.dataset.mlEanswer;
    var isCorrect = chosen === correctAnswer;

    area.querySelectorAll('.ml-choice').forEach(function (b) {
      b.classList.add('ml-disabled');
      if (b.dataset.mlEanswer === correctAnswer) {
        b.classList.add('ml-correct');
        b.classList.add('ml-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('ml-correct');
      quizState.correct++;
      setMastery('emergency', itemIndex, getMastery('emergency', itemIndex) + 1);
    } else {
      btn.classList.add('ml-wrong');
      setMastery('emergency', itemIndex, 0);
    }

    quizState.current++;
    setTimeout(renderEmergQuizQuestion, 1200);
  }

  function renderEmergQuizResults(area) {
    var elapsed = Math.round((Date.now() - quizState.startTime) / 1000);
    var pct = Math.round(quizState.correct / quizState.questions.length * 100);

    saveResult('emergency', quizState.correct, quizState.questions.length, elapsed);

    var html = '<div class="ml-results">';
    html += '<div class="ml-results-score">' + pct + '%</div>';
    html += '<div class="ml-results-label">Quiz termin\u00e9</div>';
    html += '<div class="ml-results-detail">' + quizState.correct + ' / ' + quizState.questions.length + ' r\u00e9ponses correctes</div>';
    html += '<div class="ml-results-detail">Temps : ' + formatTime(elapsed) + '</div>';
    html += '<div style="margin-top:24px">';
    html += '<button class="ml-btn" id="ml-eq-retry">Recommencer</button>';
    html += '<button class="ml-btn ml-btn-secondary" id="ml-eq-learn">Voir le tableau</button>';
    html += '</div></div>';
    area.innerHTML = html;

    document.getElementById('ml-eq-retry').addEventListener('click', function () {
      renderEmergContent();
    });
    document.getElementById('ml-eq-learn').addEventListener('click', function () {
      currentTab = 'learn';
      rootEl.querySelectorAll('.ml-tab').forEach(function (t) { t.classList.remove('active'); });
      var learnTab = rootEl.querySelector('.ml-tab[data-ml-etab="learn"]');
      if (learnTab) learnTab.classList.add('active');
      renderEmergContent();
    });
  }

  // ══════════════════════════════════════════
  //  SPRINT HELPERS
  // ══════════════════════════════════════════

  function showSprintFeedback(text, color) {
    if (!feedbackEl) return;
    feedbackEl.textContent = text;
    feedbackEl.style.color = color;
    feedbackEl.classList.add('ml-show');
    setTimeout(function () {
      feedbackEl.classList.remove('ml-show');
    }, 250);
  }

  function cleanupSprint() {
    if (sprintTimer) {
      clearInterval(sprintTimer);
      sprintTimer = null;
    }
  }

  // ══════════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════════

  return {
    renderPanel: renderPanel,
    launch: function (action, arg) {
      if (!rootEl) return;
      launch(action, arg);
    }
  };

})();
