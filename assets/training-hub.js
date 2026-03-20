// ══════════════════════════════════════════════════════
//  Curiosità — Training Hub (Centre d'Entraînement)
//  Unified dashboard for all memory training modules
//  Aggregates stats, records, and training programs
// ══════════════════════════════════════════════════════

var TrainingHub = (function () {
  'use strict';

  var PROGRAM_KEY = 'curiosita_training_program';
  var cssInjected = false;
  var rootEl = null;
  var currentView = 'dashboard'; // dashboard | records | program

  // ── Exercise registry ──────────────────────────────

  var CATEGORIES = [
    {
      id: 'speed', name: 'Épreuves de Rapidité', icon: '⚡',
      exercises: [
        { id: 'speed-numbers', name: 'Speed Numbers', icon: '🔢', desc: 'Mémorise des séquences de chiffres', module: 'MemoryTraining', action: 'speedNumbers', arg: 20, storageKey: 'curiosita_memtrain', type: 'speed-numbers' },
        { id: 'speed-cards', name: 'Speed Cards', icon: '🃁', desc: 'Mémorise un jeu de cartes dans l\u2019ordre', module: 'MemoryTraining', action: 'speedCards', arg: 10, storageKey: 'curiosita_memtrain', type: 'speed-cards' },
        { id: 'speed-words', name: 'Mots Rapides', icon: '💬', desc: 'Retiens un maximum de mots en ordre', module: 'MemoryEvents', action: 'speedWords', arg: 20, storageKey: 'curiosita_memevents', type: 'speed-words', containerId: 'me-active' },
        { id: 'binary-numbers', name: 'Nombres Binaires', icon: '0️⃣', desc: 'Mémorise des séquences binaires', module: 'MemoryEvents', action: 'binaryNumbers', arg: 30, storageKey: 'curiosita_memevents', type: 'binary-numbers', containerId: 'me-active' },
      ]
    },
    {
      id: 'techniques', name: 'Techniques de Mémorisation', icon: '🧠',
      exercises: [
        { id: 'memory-palace', name: 'Palais de la Mémoire', icon: '🏛️', desc: 'Construis et parcours tes palais mentaux', module: 'MemoryPalace', action: 'home', arg: null, storageKey: 'curiosita_palaces', type: 'palace', useRenderPanel: true, containerId: 'mp-root' },
        { id: 'pao-system', name: 'Système PAO', icon: '🎭', desc: 'Personne-Action-Objet pour chaque nombre', module: 'MemoryAssoc', action: 'pao', arg: null, storageKey: 'curiosita_memassoc', type: 'pao', useRenderPanel: true, containerId: 'ma-root' },
        { id: 'link-method', name: 'Méthode des Liens', icon: '🔗', desc: 'Enchaîne des images mentales en histoire', module: 'MemoryAssoc', action: 'link', arg: null, storageKey: 'curiosita_memassoc', type: 'links', useRenderPanel: true, containerId: 'ma-root' },
        { id: 'major-system', name: 'Système Majeur', icon: '🧩', desc: 'Convertis les chiffres en sons', module: 'MemoryTraining', action: 'majorSystem', arg: null, storageKey: 'curiosita_memtrain', type: 'major-system' },
      ]
    },
    {
      id: 'visual', name: 'Mémoire Visuelle', icon: '👁️',
      exercises: [
        { id: 'names-faces', name: 'Noms & Visages', icon: '👤', desc: 'Associe des noms à des visages', module: 'MemoryVisual', action: 'nomsVisages', arg: 10, storageKey: 'curiosita_memvisual', type: 'names-faces', containerId: 'mv-active', useRenderPanel: true },
        { id: 'abstract-images', name: 'Images Abstraites', icon: '🎨', desc: 'Mémorise des motifs abstraits', module: 'MemoryVisual', action: 'imagesAbstraitesMenu', arg: null, storageKey: 'curiosita_memvisual', type: 'abstract-images', containerId: 'mv-active', useRenderPanel: true },
      ]
    },
    {
      id: 'special', name: 'Épreuves Spéciales', icon: '🏆',
      exercises: [
        { id: 'historic-dates', name: 'Dates Historiques', icon: '📅', desc: 'Associe événements et dates de mémoire', module: 'MemoryEvents', action: 'historicalDates', arg: null, storageKey: 'curiosita_memevents', type: 'historic-dates', containerId: 'me-active' },
      ]
    }
  ];

  var ALL_EXERCISES = [];
  CATEGORIES.forEach(function (c) { ALL_EXERCISES = ALL_EXERCISES.concat(c.exercises); });

  // ── Storage helpers ────────────────────────────────

  function loadStorage(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { return {}; }
  }

  function loadProgram() { return loadStorage(PROGRAM_KEY); }

  function saveProgram(prog) {
    try { localStorage.setItem(PROGRAM_KEY, JSON.stringify(prog)); } catch (e) {}
  }

  function getHistory(storageKey) {
    var data = loadStorage(storageKey);
    return data.history || [];
  }

  function getAllHistory() {
    var keys = ['curiosita_memtrain', 'curiosita_memevents', 'curiosita_memassoc', 'curiosita_memvisual', 'curiosita_palaces'];
    var all = [];
    keys.forEach(function (k) { all = all.concat(getHistory(k)); });
    return all;
  }

  function getExerciseStats(ex) {
    var history = getHistory(ex.storageKey);
    var filtered = history.filter(function (h) { return h.type === ex.type; });
    if (!filtered.length) return { sessions: 0, best: 0, bestTime: 0, totalTime: 0 };
    var best = 0, bestTime = Infinity, totalTime = 0;
    filtered.forEach(function (h) {
      var pct = h.total ? Math.round(h.score / h.total * 100) : 0;
      if (pct > best) best = pct;
      if (h.time && h.time < bestTime) bestTime = h.time;
      totalTime += (h.time || 0);
    });
    return { sessions: filtered.length, best: best, bestTime: bestTime === Infinity ? 0 : bestTime, totalTime: totalTime };
  }

  // ── CSS injection ──────────────────────────────────

  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;
    var style = document.createElement('style');
    style.textContent =
      '.th-hub { max-width: 960px; margin: 0 auto; padding: 24px 16px; }' +
      '.th-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; flex-wrap: wrap; gap: 12px; }' +
      '.th-title { font-family: "Playfair Display", serif; font-size: 1.6rem; color: var(--text, #f0ede8); margin: 0; }' +
      '.th-tabs { display: flex; gap: 6px; }' +
      '.th-tab { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--muted, #7a7870); padding: 7px 16px; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: all 0.2s; }' +
      '.th-tab:hover { color: var(--text, #f0ede8); border-color: var(--accent, #e8c97a); }' +
      '.th-tab.th-active { background: var(--accent, #e8c97a); color: #0c0c0e; border-color: var(--accent, #e8c97a); font-weight: 600; }' +

      '.th-category { margin-bottom: 32px; }' +
      '.th-cat-header { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }' +
      '.th-cat-icon { font-size: 1.3rem; }' +
      '.th-cat-name { font-family: "Playfair Display", serif; font-size: 1.15rem; color: var(--text, #f0ede8); }' +
      '.th-cat-line { flex: 1; height: 1px; background: var(--border, rgba(240,237,232,0.08)); }' +

      '.th-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }' +
      '.th-card { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 12px; padding: 18px; cursor: pointer; transition: all 0.25s; display: flex; gap: 14px; align-items: flex-start; }' +
      '.th-card:hover { border-color: var(--accent, #e8c97a); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.3); }' +
      '.th-card-icon { font-size: 1.8rem; flex-shrink: 0; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; background: var(--surface2, #1c1c22); border-radius: 10px; }' +
      '.th-card-body { flex: 1; min-width: 0; }' +
      '.th-card-name { color: var(--text, #f0ede8); font-weight: 600; font-size: 0.95rem; margin-bottom: 3px; }' +
      '.th-card-desc { color: var(--muted, #7a7870); font-size: 0.8rem; line-height: 1.4; margin-bottom: 6px; }' +
      '.th-card-stats { display: flex; gap: 12px; font-size: 0.75rem; color: var(--accent, #e8c97a); }' +
      '.th-card-stats span { opacity: 0.85; }' +
      '.th-card.th-unavailable { opacity: 0.45; cursor: default; }' +
      '.th-card.th-unavailable:hover { border-color: var(--border, rgba(240,237,232,0.08)); transform: none; box-shadow: none; }' +
      '.th-badge-soon { background: var(--surface2, #1c1c22); color: var(--muted, #7a7870); font-size: 0.65rem; padding: 2px 8px; border-radius: 6px; margin-left: auto; flex-shrink: 0; align-self: center; }' +

      /* Records panel */
      '.th-records { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 14px; padding: 24px; }' +
      '.th-section-title { font-family: "Playfair Display", serif; font-size: 1.1rem; color: var(--text, #f0ede8); margin: 0 0 16px; }' +
      '.th-agg { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 28px; }' +
      '.th-agg-card { background: var(--surface2, #1c1c22); border-radius: 10px; padding: 16px; text-align: center; }' +
      '.th-agg-val { font-size: 1.5rem; font-weight: 700; color: var(--accent, #e8c97a); }' +
      '.th-agg-label { font-size: 0.78rem; color: var(--muted, #7a7870); margin-top: 4px; }' +

      '.th-table { width: 100%; border-collapse: collapse; margin-bottom: 28px; }' +
      '.th-table th { text-align: left; font-size: 0.75rem; color: var(--muted, #7a7870); text-transform: uppercase; letter-spacing: 0.5px; padding: 8px 10px; border-bottom: 1px solid var(--border, rgba(240,237,232,0.08)); }' +
      '.th-table td { font-size: 0.85rem; color: var(--text, #f0ede8); padding: 10px; border-bottom: 1px solid var(--border, rgba(240,237,232,0.08)); }' +
      '.th-table tr:last-child td { border-bottom: none; }' +

      '.th-weekly { margin-top: 8px; }' +
      '.th-weekly-bars { display: flex; align-items: flex-end; gap: 8px; height: 80px; padding-top: 8px; }' +
      '.th-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; }' +
      '.th-bar { width: 100%; min-height: 2px; background: var(--accent, #e8c97a); border-radius: 4px 4px 0 0; transition: height 0.3s; }' +
      '.th-bar-label { font-size: 0.65rem; color: var(--muted, #7a7870); }' +
      '.th-bar-count { font-size: 0.7rem; color: var(--text, #f0ede8); }' +

      /* Program panel */
      '.th-program { background: var(--surface, #141418); border: 1px solid var(--border, rgba(240,237,232,0.08)); border-radius: 14px; padding: 24px; }' +
      '.th-level-select { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }' +
      '.th-level-btn { background: var(--surface2, #1c1c22); border: 1px solid var(--border, rgba(240,237,232,0.08)); color: var(--muted, #7a7870); padding: 10px 18px; border-radius: 10px; cursor: pointer; transition: all 0.2s; font-size: 0.85rem; }' +
      '.th-level-btn:hover { border-color: var(--accent, #e8c97a); color: var(--text, #f0ede8); }' +
      '.th-level-btn.th-active { background: var(--accent, #e8c97a); color: #0c0c0e; border-color: var(--accent, #e8c97a); font-weight: 600; }' +
      '.th-prog-list { display: flex; flex-direction: column; gap: 10px; }' +
      '.th-prog-item { display: flex; align-items: center; gap: 12px; background: var(--surface2, #1c1c22); border-radius: 10px; padding: 14px 16px; transition: all 0.2s; }' +
      '.th-prog-item.th-done { opacity: 0.55; }' +
      '.th-prog-check { width: 24px; height: 24px; border-radius: 50%; border: 2px solid var(--muted, #7a7870); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; }' +
      '.th-prog-item.th-done .th-prog-check { background: var(--green, #69f0ae); border-color: var(--green, #69f0ae); color: #0c0c0e; }' +
      '.th-prog-name { flex: 1; color: var(--text, #f0ede8); font-size: 0.9rem; }' +
      '.th-prog-item.th-done .th-prog-name { text-decoration: line-through; }' +
      '.th-prog-cat { font-size: 0.72rem; color: var(--muted, #7a7870); }' +
      '.th-prog-launch { background: var(--accent, #e8c97a); color: #0c0c0e; border: none; padding: 6px 14px; border-radius: 7px; cursor: pointer; font-size: 0.8rem; font-weight: 600; transition: opacity 0.2s; }' +
      '.th-prog-launch:hover { opacity: 0.85; }' +
      '.th-prog-item.th-done .th-prog-launch { display: none; }' +

      '.th-empty { text-align: center; color: var(--muted, #7a7870); padding: 40px 20px; font-size: 0.9rem; }' +

      '.th-exercise-area { margin-top: 20px; }' +

      '@media (max-width: 600px) { .th-grid { grid-template-columns: 1fr; } .th-header { flex-direction: column; align-items: flex-start; } }';
    document.head.appendChild(style);
  }

  // ── Module availability check ──────────────────────

  function moduleAvailable(name) {
    return typeof window[name] !== 'undefined' && window[name] &&
      (typeof window[name].launch === 'function' || typeof window[name].renderPanel === 'function');
  }

  // ── Launch an exercise ─────────────────────────────

  function launchExercise(ex) {
    if (!moduleAvailable(ex.module)) return;
    var area = document.getElementById('th-exercise-area');
    if (!area) return;

    var cid = ex.containerId || 'mt-active';
    area.innerHTML = '<div id="' + cid + '"></div>';
    area.scrollIntoView({ behavior: 'smooth' });

    if (ex.useRenderPanel && typeof window[ex.module].renderPanel === 'function') {
      window[ex.module].renderPanel(document.getElementById(cid));
      if (ex.action && ex.action !== 'home') {
        window[ex.module].launch(ex.action, ex.arg);
      }
    } else {
      window[ex.module].launch(ex.action, ex.arg);
    }
  }

  // ── Dashboard view ─────────────────────────────────

  function renderDashboard() {
    var html = '';
    CATEGORIES.forEach(function (cat) {
      html += '<div class="th-category">' +
        '<div class="th-cat-header">' +
          '<span class="th-cat-icon">' + cat.icon + '</span>' +
          '<span class="th-cat-name">' + cat.name + '</span>' +
          '<span class="th-cat-line"></span>' +
        '</div>' +
        '<div class="th-grid">';

      cat.exercises.forEach(function (ex, idx) {
        var stats = getExerciseStats(ex);
        var available = moduleAvailable(ex.module);
        var cardClass = 'th-card' + (available ? '' : ' th-unavailable');

        html += '<div class="' + cardClass + '" data-ex-cat="' + cat.id + '" data-ex-idx="' + idx + '">' +
          '<div class="th-card-icon">' + ex.icon + '</div>' +
          '<div class="th-card-body">' +
            '<div class="th-card-name">' + ex.name + '</div>' +
            '<div class="th-card-desc">' + ex.desc + '</div>';

        if (stats.sessions > 0) {
          html += '<div class="th-card-stats">' +
            '<span>' + stats.sessions + ' session' + (stats.sessions > 1 ? 's' : '') + '</span>' +
            '<span>Record : ' + stats.best + '%</span>' +
          '</div>';
        }

        html += '</div>';
        if (!available) html += '<span class="th-badge-soon">Bientôt</span>';
        html += '</div>';
      });

      html += '</div></div>';
    });

    html += '<div class="th-exercise-area" id="th-exercise-area"></div>';
    return html;
  }

  // ── Records view ───────────────────────────────────

  function formatTime(ms) {
    if (!ms) return '—';
    var s = Math.round(ms / 1000);
    if (s < 60) return s + 's';
    return Math.floor(s / 60) + 'm ' + (s % 60) + 's';
  }

  function renderRecords() {
    var allHistory = getAllHistory();
    var totalSessions = allHistory.length;
    var totalTime = 0;
    var typeCounts = {};

    allHistory.forEach(function (h) {
      totalTime += (h.time || 0);
      typeCounts[h.type] = (typeCounts[h.type] || 0) + 1;
    });

    var favoriteType = '';
    var favMax = 0;
    Object.keys(typeCounts).forEach(function (t) {
      if (typeCounts[t] > favMax) { favMax = typeCounts[t]; favoriteType = t; }
    });

    var favoriteEx = ALL_EXERCISES.find(function (e) { return e.type === favoriteType; });
    var favoriteName = favoriteEx ? favoriteEx.name : '—';

    // Aggregate cards
    var html = '<div class="th-records">' +
      '<h3 class="th-section-title">Statistiques globales</h3>' +
      '<div class="th-agg">' +
        '<div class="th-agg-card"><div class="th-agg-val">' + totalSessions + '</div><div class="th-agg-label">Sessions totales</div></div>' +
        '<div class="th-agg-card"><div class="th-agg-val">' + formatTime(totalTime) + '</div><div class="th-agg-label">Temps total</div></div>' +
        '<div class="th-agg-card"><div class="th-agg-val">' + favoriteName + '</div><div class="th-agg-label">Exercice favori</div></div>' +
      '</div>';

    // Records table
    html += '<h3 class="th-section-title">Records personnels</h3>';
    var hasRecords = false;
    var tableRows = '';

    ALL_EXERCISES.forEach(function (ex) {
      var stats = getExerciseStats(ex);
      if (stats.sessions > 0) {
        hasRecords = true;
        tableRows += '<tr>' +
          '<td>' + ex.icon + ' ' + ex.name + '</td>' +
          '<td>' + stats.best + '%</td>' +
          '<td>' + formatTime(stats.bestTime) + '</td>' +
          '<td>' + stats.sessions + '</td>' +
        '</tr>';
      }
    });

    if (hasRecords) {
      html += '<table class="th-table">' +
        '<thead><tr><th>Exercice</th><th>Meilleur score</th><th>Meilleur temps</th><th>Sessions</th></tr></thead>' +
        '<tbody>' + tableRows + '</tbody>' +
      '</table>';
    } else {
      html += '<div class="th-empty">Aucun record pour le moment. Lance un exercice pour commencer !</div>';
    }

    // Weekly activity
    html += '<h3 class="th-section-title">Activité de la semaine</h3>';
    var days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    var now = new Date();
    var dayCounts = [0, 0, 0, 0, 0, 0, 0];

    for (var d = 6; d >= 0; d--) {
      var target = new Date(now);
      target.setDate(target.getDate() - d);
      var dayStart = new Date(target.getFullYear(), target.getMonth(), target.getDate()).getTime();
      var dayEnd = dayStart + 86400000;
      allHistory.forEach(function (h) {
        if (h.date >= dayStart && h.date < dayEnd) dayCounts[6 - d]++;
      });
    }

    var maxCount = Math.max.apply(null, dayCounts) || 1;

    html += '<div class="th-weekly"><div class="th-weekly-bars">';
    for (var i = 0; i < 7; i++) {
      var dayIdx = (now.getDay() + i - 5) % 7;
      if (dayIdx < 0) dayIdx += 7;
      // Map JS day (0=Sun) to our array (0=Mon)
      var adjustedDay = new Date(now);
      adjustedDay.setDate(adjustedDay.getDate() - (6 - i));
      var jsDay = adjustedDay.getDay();
      var label = days[jsDay === 0 ? 6 : jsDay - 1];
      var h = Math.max(2, Math.round((dayCounts[i] / maxCount) * 64));

      html += '<div class="th-bar-col">' +
        '<span class="th-bar-count">' + (dayCounts[i] || '') + '</span>' +
        '<div class="th-bar" style="height:' + h + 'px;' + (dayCounts[i] === 0 ? 'opacity:0.2;' : '') + '"></div>' +
        '<span class="th-bar-label">' + label + '</span>' +
      '</div>';
    }
    html += '</div></div></div>';
    return html;
  }

  // ── Program view ───────────────────────────────────

  var PROGRAMS = {
    debutant: {
      name: 'Débutant', desc: '1 exercice par catégorie, réglages faciles',
      exercises: [
        { id: 'speed-numbers', settings: '10 chiffres', arg: 10 },
        { id: 'major-system', settings: 'Apprentissage libre', arg: null },
        { id: 'names-faces', settings: '5 visages', arg: 5 },
        { id: 'historic-dates', settings: 'Dates libres', arg: null },
      ]
    },
    intermediaire: {
      name: 'Intermédiaire', desc: '2 exercices par catégorie, réglages moyens',
      exercises: [
        { id: 'speed-numbers', settings: '20 chiffres', arg: 20 },
        { id: 'speed-cards', settings: '10 cartes', arg: 10 },
        { id: 'major-system', settings: 'Quiz intégré', arg: null },
        { id: 'pao-system', settings: 'Entraînement PAO', arg: null },
        { id: 'names-faces', settings: '10 visages', arg: 10 },
        { id: 'abstract-images', settings: '10 images', arg: 10 },
        { id: 'historic-dates', settings: 'Dates libres', arg: null },
      ]
    },
    champion: {
      name: 'Champion', desc: 'Tous les exercices, réglages avancés',
      exercises: [
        { id: 'speed-numbers', settings: '40 chiffres', arg: 40 },
        { id: 'speed-cards', settings: '26 cartes', arg: 26 },
        { id: 'speed-words', settings: '30 mots', arg: 30 },
        { id: 'binary-numbers', settings: '50 bits', arg: 50 },
        { id: 'memory-palace', settings: 'Parcours complet', arg: null },
        { id: 'pao-system', settings: 'Drill rapide', arg: null },
        { id: 'link-method', settings: '20 éléments', arg: 20 },
        { id: 'major-system', settings: 'Quiz avancé', arg: null },
        { id: 'names-faces', settings: '20 visages', arg: 20 },
        { id: 'abstract-images', settings: '20 images', arg: 20 },
        { id: 'historic-dates', settings: 'Toutes les dates', arg: null },
      ]
    }
  };

  function todayKey() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  function renderProgram() {
    var prog = loadProgram();
    var level = prog.level || 'debutant';
    var today = todayKey();
    var completed = (prog.date === today && prog.completed) ? prog.completed : [];

    var html = '<div class="th-program">' +
      '<h3 class="th-section-title">Programme d\u2019entraînement</h3>' +
      '<p style="color:var(--muted,#7a7870);font-size:0.85rem;margin:0 0 18px;">Choisis ton niveau et suis ta routine quotidienne.</p>' +
      '<div class="th-level-select">';

    Object.keys(PROGRAMS).forEach(function (key) {
      var p = PROGRAMS[key];
      var active = key === level ? ' th-active' : '';
      html += '<button class="th-level-btn' + active + '" data-level="' + key + '">' +
        '<strong>' + p.name + '</strong><br><span style="font-size:0.75rem;opacity:0.7;">' + p.desc + '</span></button>';
    });

    html += '</div>';

    var program = PROGRAMS[level];
    var doneCount = 0;

    html += '<div class="th-prog-list">';
    program.exercises.forEach(function (pe) {
      var ex = ALL_EXERCISES.find(function (e) { return e.id === pe.id; });
      if (!ex) return;
      var cat = CATEGORIES.find(function (c) { return c.exercises.indexOf(ex) !== -1; });
      var isDone = completed.indexOf(pe.id) !== -1;
      if (isDone) doneCount++;
      var available = moduleAvailable(ex.module);

      html += '<div class="th-prog-item' + (isDone ? ' th-done' : '') + '" data-prog-id="' + pe.id + '">' +
        '<div class="th-prog-check" data-check-id="' + pe.id + '">' + (isDone ? '✓' : '') + '</div>' +
        '<div style="flex:1">' +
          '<div class="th-prog-name">' + ex.icon + ' ' + ex.name + '</div>' +
          '<div class="th-prog-cat">' + (cat ? cat.name : '') + ' — ' + pe.settings + '</div>' +
        '</div>' +
        (available && !isDone ? '<button class="th-prog-launch" data-launch-id="' + pe.id + '">Lancer</button>' : '') +
        (!available ? '<span class="th-badge-soon">Bientôt</span>' : '') +
      '</div>';
    });
    html += '</div>';

    // Progress indicator
    var total = program.exercises.length;
    var pct = total ? Math.round((doneCount / total) * 100) : 0;
    html += '<div style="margin-top:20px;text-align:center;">' +
      '<div style="background:var(--surface2,#1c1c22);border-radius:8px;height:8px;overflow:hidden;margin-bottom:8px;">' +
        '<div style="width:' + pct + '%;height:100%;background:var(--green,#69f0ae);border-radius:8px;transition:width 0.3s;"></div>' +
      '</div>' +
      '<span style="font-size:0.8rem;color:var(--muted,#7a7870);">' + doneCount + '/' + total + ' exercices complétés aujourd\u2019hui (' + pct + '%)</span>' +
    '</div>';

    html += '<div class="th-exercise-area" id="th-exercise-area"></div>';
    html += '</div>';
    return html;
  }

  // ── Main render ────────────────────────────────────

  function render(el) {
    if (!el) return;
    rootEl = el;
    injectCSS();
    update();
  }

  function update() {
    if (!rootEl) return;

    var tabData = [
      { id: 'dashboard', label: 'Exercices' },
      { id: 'records', label: 'Records' },
      { id: 'program', label: 'Programme' },
    ];

    var html = '<div class="th-hub">' +
      '<div class="th-header">' +
        '<h2 class="th-title">Centre d\u2019Entraînement</h2>' +
        '<div class="th-tabs">';

    tabData.forEach(function (t) {
      html += '<button class="th-tab' + (currentView === t.id ? ' th-active' : '') + '" data-th-view="' + t.id + '">' + t.label + '</button>';
    });

    html += '</div></div>';

    if (currentView === 'dashboard') html += renderDashboard();
    else if (currentView === 'records') html += renderRecords();
    else if (currentView === 'program') html += renderProgram();

    html += '</div>';
    rootEl.innerHTML = html;
    bindEvents();
  }

  // ── Event binding ──────────────────────────────────

  function bindEvents() {
    if (!rootEl) return;

    // Tab switching
    rootEl.querySelectorAll('[data-th-view]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentView = btn.getAttribute('data-th-view');
        update();
      });
    });

    // Exercise card clicks (dashboard)
    rootEl.querySelectorAll('.th-card:not(.th-unavailable)').forEach(function (card) {
      card.addEventListener('click', function () {
        var catId = card.getAttribute('data-ex-cat');
        var idx = parseInt(card.getAttribute('data-ex-idx'), 10);
        var cat = CATEGORIES.find(function (c) { return c.id === catId; });
        if (cat && cat.exercises[idx]) launchExercise(cat.exercises[idx]);
      });
    });

    // Program level buttons
    rootEl.querySelectorAll('[data-level]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var prog = loadProgram();
        prog.level = btn.getAttribute('data-level');
        saveProgram(prog);
        update();
      });
    });

    // Program check toggles
    rootEl.querySelectorAll('[data-check-id]').forEach(function (el) {
      el.addEventListener('click', function () {
        var id = el.getAttribute('data-check-id');
        var prog = loadProgram();
        var today = todayKey();
        if (prog.date !== today) { prog.date = today; prog.completed = []; }
        if (!prog.completed) prog.completed = [];
        var idx = prog.completed.indexOf(id);
        if (idx === -1) prog.completed.push(id);
        else prog.completed.splice(idx, 1);
        saveProgram(prog);
        update();
      });
    });

    // Program launch buttons
    rootEl.querySelectorAll('[data-launch-id]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = btn.getAttribute('data-launch-id');
        var ex = ALL_EXERCISES.find(function (e) { return e.id === id; });
        if (ex) launchExercise(ex);
      });
    });
  }

  return {
    render: render
  };
})();
