// ══════════════════════════════════════════════════════
//  Curiosita — Card Browser
//  Browse, search, and manage the full card catalog
//  Depends: sr-engine.js (SR global)
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  var cardsDb = null;
  var filteredCards = [];
  var userCardIds = {};
  var currentPage = 0;
  var PAGE_SIZE = 50;
  var activeFilters = { disciplines: [], courses: [], types: [], status: 'all', query: '' };
  var coursesByDisc = {};  // { disc: { slug: { label, count } } }
  var courseNames = {};    // { 'disc/slug': 'Display Name' }

  // French labels for card types
  var typeLabels = {
    highlight: 'Concept cl\u00e9',
    formula: 'Formule',
    timeline: 'Chronologie',
    biais: 'Biais',
    theory: 'Th\u00e9orie',
    concept: 'Concept',
    memo: 'M\u00e9mo',
    quiz: 'Quiz',
    definition: 'D\u00e9finition',
    manual: 'Manuelle'
  };

  // Discipline display names
  var discLabels = {
    anthropologie: 'Anthropologie',
    artisanat: 'Artisanat',
    arts: 'Arts visuels',
    astronomie: 'Astronomie',
    biologie: 'Biologie',
    chimie: 'Chimie',
    cinema: 'Cin\u00e9ma',
    civique: '\u00c9ducation civique',
    cuisine: 'Cuisine',
    design: 'Design',
    droit: 'Droit',
    ecologie: '\u00c9cologie',
    economie: '\u00c9conomie',
    geographie: 'G\u00e9ographie',
    gestion: 'Gestion',
    histoire: 'Histoire',
    informatique: 'Informatique',
    langues: 'Langues',
    'litterature-fr': 'Litt\u00e9rature FR',
    'litterature-monde': 'Litt\u00e9rature monde',
    maths: 'Math\u00e9matiques',
    musique: 'Musique',
    philosophie: 'Philosophie',
    physique: 'Physique',
    psychologie: 'Psychologie',
    rhetorique: 'Rh\u00e9torique',
    sante: 'Sant\u00e9',
    'sciences-po': 'Sciences politiques',
    sociologie: 'Sociologie',
    spectacle: 'Spectacle vivant',
    statistiques: 'Statistiques',
    terre: 'Sciences de la Terre'
  };

  // ── Helpers ──

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getDiscipline(card) {
    var m = card.s.match(/^cours\/([^/]+)\//);
    return m ? m[1] : 'autre';
  }

  function getCourse(card) {
    var parts = card.s.split('/');
    if (parts.length >= 3) return parts[2].replace('.html', '');
    return '';
  }

  function getCourseKey(card) {
    return getDiscipline(card) + '/' + getCourse(card);
  }

  // ── Sync user cards ──

  function syncUserCards() {
    userCardIds = {};
    if (typeof SR !== 'undefined') {
      SR.getAllCards().forEach(function (c) { userCardIds[c.id] = true; });
    }
  }

  // ── Load DB ──

  function loadCardsDb() {
    return new Promise(function (resolve, reject) {
      if (cardsDb) return resolve(cardsDb);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'assets/cards-db.json?v=4');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            cardsDb = JSON.parse(xhr.responseText);
            resolve(cardsDb);
          } catch (e) { reject(e); }
        } else { reject(new Error('HTTP ' + xhr.status)); }
      };
      xhr.onerror = function () { reject(new Error('Network error')); };
      xhr.send();
    });
  }

  // ── Build sidebar filters ──

  function buildFilters() {
    var disciplines = {};
    var types = {};
    coursesByDisc = {};
    courseNames = {};

    cardsDb.forEach(function (card) {
      var disc = getDiscipline(card);
      var course = getCourse(card);
      var courseKey = disc + '/' + course;

      disciplines[disc] = (disciplines[disc] || 0) + 1;
      types[card.t] = (types[card.t] || 0) + 1;

      // Build courses by discipline
      if (!coursesByDisc[disc]) coursesByDisc[disc] = {};
      if (!coursesByDisc[disc][course]) coursesByDisc[disc][course] = 0;
      coursesByDisc[disc][course]++;

      // Resolve course display name from hub pages (cours/disc/hub.html = 3 segments)
      if (!courseNames[courseKey] && card.s.split('/').length === 3) {
        courseNames[courseKey] = card.st;
      }
    });

    // Fallback: if no hub page found, prettify slug
    Object.keys(coursesByDisc).forEach(function (disc) {
      Object.keys(coursesByDisc[disc]).forEach(function (course) {
        var key = disc + '/' + course;
        if (!courseNames[key]) {
          courseNames[key] = course.charAt(0).toUpperCase() + course.slice(1).replace(/-/g, ' ');
        }
      });
    });

    // Discipline list
    var discEl = document.getElementById('cbDisciplineList');
    if (discEl) {
      var discEntries = Object.entries(disciplines).sort(function (a, b) { return b[1] - a[1]; });
      discEl.innerHTML = discEntries.map(function (e) {
        var label = discLabels[e[0]] || e[0];
        return '<label class="cb-filter-opt"><input type="checkbox" name="cbDisc" value="' + e[0] + '"> ' +
          escHtml(label) + ' <span class="cb-filter-count">' + e[1] + '</span></label>';
      }).join('');
    }

    // Type list
    var typeEl = document.getElementById('cbTypeList');
    if (typeEl) {
      var typeEntries = Object.entries(types).sort(function (a, b) { return b[1] - a[1]; });
      typeEl.innerHTML = typeEntries.map(function (e) {
        var label = typeLabels[e[0]] || e[0];
        return '<label class="cb-filter-opt"><input type="checkbox" name="cbType" value="' + e[0] + '"> ' +
          escHtml(label) + ' <span class="cb-filter-count">' + e[1] + '</span></label>';
      }).join('');
    }
  }

  // Rebuild course filter when disciplines change
  function updateCourseFilter() {
    var section = document.getElementById('cbCourseSection');
    var listEl = document.getElementById('cbCourseList');
    if (!section || !listEl) return;

    var selDiscs = activeFilters.disciplines;
    if (selDiscs.length === 0) {
      section.style.display = 'none';
      listEl.innerHTML = '';
      activeFilters.courses = [];
      return;
    }

    section.style.display = '';
    var courses = [];
    selDiscs.forEach(function (disc) {
      var discCourses = coursesByDisc[disc] || {};
      Object.keys(discCourses).forEach(function (slug) {
        courses.push({
          key: disc + '/' + slug,
          label: courseNames[disc + '/' + slug] || slug,
          count: discCourses[slug]
        });
      });
    });

    courses.sort(function (a, b) { return b.count - a.count; });

    listEl.innerHTML = courses.map(function (c) {
      return '<label class="cb-filter-opt"><input type="checkbox" name="cbCourse" value="' + c.key + '"> ' +
        escHtml(c.label) + ' <span class="cb-filter-count">' + c.count + '</span></label>';
    }).join('');
  }

  // ── Apply filters ──

  function getChecked(name) {
    var checks = document.querySelectorAll('input[name="' + name + '"]:checked');
    var vals = [];
    for (var i = 0; i < checks.length; i++) vals.push(checks[i].value);
    return vals;
  }

  function applyFilters() {
    var query = normalize(activeFilters.query);
    var selDisc = activeFilters.disciplines;
    var selCourses = activeFilters.courses;
    var selTypes = activeFilters.types;
    var status = activeFilters.status;

    filteredCards = cardsDb.filter(function (card) {
      // Discipline
      if (selDisc.length > 0 && selDisc.indexOf(getDiscipline(card)) < 0) return false;
      // Course (hub)
      if (selCourses.length > 0 && selCourses.indexOf(getCourseKey(card)) < 0) return false;
      // Type
      if (selTypes.length > 0 && selTypes.indexOf(card.t) < 0) return false;
      // Status
      var isAdded = !!userCardIds[card.id];
      if (status === 'added' && !isAdded) return false;
      if (status === 'not-added' && isAdded) return false;
      // Search
      if (query) {
        var text = normalize(card.f + ' ' + card.b + ' ' + card.st);
        if (text.indexOf(query) < 0) return false;
      }
      return true;
    });

    currentPage = 0;
    renderCardList();
    updateCounts();
  }

  // ── Update counts ──

  function updateCounts() {
    var countEl = document.getElementById('cbResultCount');
    if (countEl) countEl.textContent = filteredCards.length + ' carte' + (filteredCards.length !== 1 ? 's' : '');

    var addedCount = 0;
    for (var k in userCardIds) { if (userCardIds[k]) addedCount++; }
    var totalEl = document.getElementById('cbDeckCount');
    if (totalEl) totalEl.textContent = addedCount + ' dans le deck';

    // Dashboard library count
    var libCount = document.getElementById('dash-library-count');
    if (libCount && cardsDb) libCount.textContent = cardsDb.length;
  }

  // ── Render card list ──

  function renderCardList() {
    var container = document.getElementById('cbCardList');
    if (!container) return;

    var end = (currentPage + 1) * PAGE_SIZE;
    var visible = filteredCards.slice(0, end);

    if (visible.length === 0) {
      container.innerHTML = '<div class="cb-empty">Aucune carte ne correspond aux filtres.</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < visible.length; i++) {
      var card = visible[i];
      var isAdded = !!userCardIds[card.id];
      var tLabel = typeLabels[card.t] || card.t;
      html += '<div class="cb-item' + (isAdded ? ' added' : '') + '" data-id="' + card.id + '">' +
        '<div class="cb-item-content">' +
        '<div class="cb-item-front">' + escHtml(card.f) + '</div>' +
        '<div class="cb-item-back">' + escHtml(card.b) + '</div>' +
        '<div class="cb-item-meta">' +
        '<span class="cb-item-type">' + escHtml(tLabel) + '</span>' +
        '<span class="cb-item-source">' + escHtml(card.st) + '</span>' +
        '</div>' +
        '</div>' +
        '<button class="cb-item-btn' + (isAdded ? ' active' : '') + '" onclick="CB.toggle(\'' + card.id + '\')">' +
        (isAdded ? '\u2713' : '+') +
        '</button>' +
        '</div>';
    }

    if (end < filteredCards.length) {
      html += '<button class="cb-load-more" onclick="CB.more()">' +
        'Afficher plus (' + (filteredCards.length - end) + ' restantes)</button>';
    }

    container.innerHTML = html;
  }

  // ── Toggle card ──

  function toggleCard(id) {
    if (userCardIds[id]) {
      if (typeof SR !== 'undefined') SR.removeCard(id);
      delete userCardIds[id];
    } else {
      var card = null;
      for (var i = 0; i < cardsDb.length; i++) {
        if (cardsDb[i].id === id) { card = cardsDb[i]; break; }
      }
      if (card && typeof SR !== 'undefined') {
        SR.addCard({
          front: card.f,
          back: card.b,
          type: card.t,
          source: '/Curiosita/' + card.s,
          sourceTitle: card.st,
          tags: card.tg
        });
        userCardIds[id] = true;
      }
    }
    renderCardList();
    updateCounts();
  }

  // ── Add all filtered ──

  function addAllFiltered() {
    if (!cardsDb || typeof SR === 'undefined') return;
    var added = 0;
    filteredCards.forEach(function (card) {
      if (!userCardIds[card.id]) {
        SR.addCard({
          front: card.f,
          back: card.b,
          type: card.t,
          source: '/Curiosita/' + card.s,
          sourceTitle: card.st,
          tags: card.tg
        });
        userCardIds[card.id] = true;
        added++;
      }
    });
    renderCardList();
    updateCounts();
    // Show feedback
    var btn = document.getElementById('cbAddFiltered');
    if (btn && added > 0) {
      var original = btn.textContent;
      btn.textContent = '\u2713 ' + added + ' carte' + (added > 1 ? 's' : '') + ' ajout\u00e9e' + (added > 1 ? 's' : '');
      btn.classList.add('active');
      setTimeout(function () { btn.textContent = original; btn.classList.remove('active'); }, 2000);
    }
  }

  // ── Open / Close ──

  function open() {
    var overlay = document.getElementById('cardBrowserOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (!cardsDb) {
      document.getElementById('cbCardList').innerHTML = '<div class="cb-loading">Chargement de la biblioth\u00e8que\u2026</div>';
      loadCardsDb().then(function () {
        syncUserCards();
        buildFilters();
        applyFilters();
        bindFilterEvents();
      }).catch(function (e) {
        document.getElementById('cbCardList').innerHTML = '<div class="cb-empty">Erreur de chargement : ' + escHtml(e.message) + '</div>';
      });
    } else {
      syncUserCards();
      applyFilters();
    }
  }

  function close() {
    var overlay = document.getElementById('cardBrowserOverlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    // Refresh dashboard
    if (typeof hydrateDashboard === 'function') hydrateDashboard();
  }

  // ── Event binding for filters ──

  var filtersBound = false;
  function bindFilterEvents() {
    if (filtersBound) return;
    filtersBound = true;

    // Search input
    var searchInput = document.getElementById('cbSearch');
    if (searchInput) {
      var debounce = null;
      searchInput.addEventListener('input', function () {
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          activeFilters.query = searchInput.value;
          applyFilters();
        }, 200);
      });
    }

    // Filter checkboxes
    document.addEventListener('change', function (e) {
      if (e.target.name === 'cbDisc') {
        activeFilters.disciplines = getChecked('cbDisc');
        activeFilters.courses = []; // reset course selection when disciplines change
        updateCourseFilter();
        applyFilters();
      }
      if (e.target.name === 'cbCourse') {
        activeFilters.courses = getChecked('cbCourse');
        applyFilters();
      }
      if (e.target.name === 'cbType') {
        activeFilters.types = getChecked('cbType');
        applyFilters();
      }
      if (e.target.name === 'cbStatus') {
        activeFilters.status = e.target.value;
        applyFilters();
      }
    });

    // Add all button
    var addBtn = document.getElementById('cbAddFiltered');
    if (addBtn) addBtn.addEventListener('click', addAllFiltered);

    // Keyboard: Escape to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.getElementById('cardBrowserOverlay').classList.contains('open')) {
        close();
      }
    });
  }

  // ── Public API ──
  window.CB = {
    open: open,
    close: close,
    toggle: toggleCard,
    more: function () { currentPage++; renderCardList(); },
    getCount: function () { return cardsDb ? cardsDb.length : 0; }
  };

})();
