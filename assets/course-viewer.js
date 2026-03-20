// ══════════════════════════════════════════════════════
//  Curiosità — Course Viewer
//  Full-screen overlay to read pages from individual JSON files
//  Depends: style.css (content classes), SR (optional)
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  var pageCache = {};          // { slug: pageData }
  var cardsDb = null;          // lazy-loaded from cards-db.json
  var currentSlug = null;
  var currentDisc = null;
  var skipNextPush = false;    // flag to avoid pushing state on popstate-triggered open

  // ── Discipline → theme mapping ──
  var DISC_THEME = {
    'maths':'sciences-exactes','informatique':'sciences-exactes','physique':'sciences-exactes',
    'chimie':'sciences-exactes','statistiques':'sciences-exactes','logique':'sciences-exactes',
    'python':'sciences-exactes',
    'biologie':'sciences-nature','terre':'sciences-nature','astronomie':'sciences-nature',
    'ecologie':'sciences-nature','environnement':'sciences-nature','agriculture':'sciences-nature',
    'botanique-zoologie':'sciences-nature',
    'histoire':'sciences-humaines','economie':'sciences-humaines','psychologie':'sciences-humaines',
    'sociologie':'sciences-humaines','geographie':'sciences-humaines','anthropologie':'sciences-humaines',
    'relations-internationales':'sciences-humaines','communication':'sciences-humaines',
    'neurosciences':'sciences-humaines',
    'philosophie':'lettres-langues','langues':'lettres-langues','linguistique':'lettres-langues',
    'litterature-fr':'lettres-langues','litterature-monde':'lettres-langues','rhetorique':'lettres-langues',
    'mythologie':'lettres-langues',
    'arts':'arts-culture','musique':'arts-culture','cinema':'arts-culture','spectacle':'arts-culture',
    'design':'arts-culture','histoire-art':'arts-culture',
    'droit':'droit-politique','sciences-po':'droit-politique','civique':'droit-politique',
    'artisanat':'savoir-faire','cuisine':'savoir-faire','sante':'savoir-faire',
    'gestion':'savoir-faire','ingenierie':'savoir-faire'
  };

  // ── Helpers ──

  function escHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function $(id) { return document.getElementById(id); }

  // ── Resolve slug → file URL ──
  // Slug format: "disc[/hub[/page]]" or "disc/index"
  // Theme pages: "sciences-exactes", etc.
  function slugToUrl(slug) {
    var parts = slug.split('/');
    var disc = parts[0];
    var theme = DISC_THEME[disc];

    // Grand theme index page (e.g. slug = "sciences-exactes")
    if (!theme) {
      return 'assets/content/' + disc + '/index.json';
    }

    // Discipline index page: "disc" or "disc/index"
    if (parts.length === 1 || (parts.length === 2 && parts[1] === 'index')) {
      return 'assets/content/' + theme + '/' + disc + '/index.json';
    }

    var hub = parts[1];

    // Hub index page: "disc/hub"
    if (parts.length === 2) {
      return 'assets/content/' + theme + '/' + disc + '/' + hub + '/index.json';
    }

    // Article page: "disc/hub/page"
    var page = parts[2];
    return 'assets/content/' + theme + '/' + disc + '/' + hub + '/' + page + '.json';
  }

  // ── Load individual page JSON ──

  function loadPage(slug) {
    return new Promise(function (resolve, reject) {
      if (pageCache[slug]) return resolve(pageCache[slug]);
      var xhr = new XMLHttpRequest();
      var url = slugToUrl(slug);
      xhr.open('GET', url + '?v=2');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            pageCache[slug] = data;
            resolve(data);
          } catch (e) { reject(e); }
        } else { reject(new Error('HTTP ' + xhr.status)); }
      };
      xhr.onerror = function () { reject(new Error('Network error')); };
      xhr.send();
    });
  }

  // ── Load cards DB (lazy, for sidebar cards) ──

  function loadCards() {
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

  // ── Open course viewer ──

  function open(slug, pushHistory) {
    if (!slug) return;
    var overlay = $('courseViewerOverlay');
    if (!overlay) return;

    currentSlug = slug;

    // Push browser history state (unless triggered by popstate)
    if (pushHistory !== false && !skipNextPush) {
      history.pushState({ cv: slug }, '', '#/' + slug);
    }
    skipNextPush = false;

    // Show overlay with loading state
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    var content = $('cvContent');
    if (content) content.innerHTML = '<div class="cv-loading">Chargement\u2026</div>';

    // Load page data
    loadPage(slug).then(function (page) {
      // Read discipline from slug or page JSON
      var disc = slug.split('/')[0];
      currentDisc = disc;

      // Apply accent colors embedded in page JSON (set by restructure script)
      var root = document.documentElement;
      if (page.accent) root.style.setProperty('--accent', page.accent);
      if (page.accent2) root.style.setProperty('--accent2', page.accent2);
      if (page.accentDim) root.style.setProperty('--accent-dim', page.accentDim);
      var heroAccent = page.accentHero || '';
      if (heroAccent) root.style.setProperty('--accent-hero', heroAccent);

      // Build hero
      renderHero(page);

      // Inject content
      if (content) content.innerHTML = page.content || '';

      // Remove quiz and exercises sections from rendered content
      if (content) {
        ['quiz', 'exercices'].forEach(function (secId) {
          var sec = content.querySelector('#' + secId);
          if (sec) sec.remove();
        });
      }

      // Build sidebar
      renderSidebar(page, {}, slug);

      // Build breadcrumb
      renderBreadcrumb(page);

      // Scroll to top
      var main = $('cvMain');
      if (main) main.scrollTop = 0;

      // Load cards for sidebar (non-blocking)
      loadCards().then(function () {
        renderSidebarCards(slug, disc);
      }).catch(function () {});

      // Glossary annotation (non-blocking)
      if (typeof GL !== 'undefined' && content) {
        var annotateSlug = slug;
        var annotateTarget = content;
        var doAnnotate = function () {
          GL.init(function () {
            GL.annotate(annotateTarget, annotateSlug);
          });
        };
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(doAnnotate);
        } else {
          setTimeout(doAnnotate, 60);
        }
      }

    }).catch(function (e) {
      content.innerHTML = '<div class="cv-loading">Erreur : ' + escHtml(e.message) + '</div>';
    });
  }

  // ── Render hero ──

  function renderHero(page) {
    var hero = $('cvHero');
    if (!hero) return;

    // Apply variant class (discipline, hub, course)
    var variant = page.heroVariant || page.type || '';
    hero.className = 'cv-hero hero';
    if (variant === 'discipline') hero.className += ' hero--discipline';
    else if (variant === 'hub') hero.className += ' hero--hub';
    else if (variant === 'course' || variant === 'lesson') hero.className += ' hero--course';

    // Hero decoration (large background character for disciplines)
    var decoHtml = '';
    if (page.heroDeco) {
      decoHtml = '<div class="hero-deco">' + escHtml(page.heroDeco) + '</div>';
    }

    // Hero meta tags
    var meta = '';
    if (page.domain) meta += '<span class="tag-domain">' + escHtml(page.domain) + '</span>';
    if (page.level) meta += '<span class="tag-level">' + escHtml(page.level) + '</span>';
    if (page.time) meta += '<span class="tag-time">' + escHtml(page.time) + '</span>';

    // Title: use raw heroH1 if available (preserves <br><em> formatting)
    var titleHtml = page.heroH1 || ('<em>' + escHtml(page.title) + '</em>');

    hero.innerHTML = decoHtml +
      (meta ? '<div class="hero-meta">' + meta + '</div>' : '') +
      '<h1>' + titleHtml + '</h1>' +
      (page.heroDesc ? '<p class="hero-desc">' + escHtml(page.heroDesc) + '</p>' : '');
  }

  // ── Render breadcrumb ──

  function renderBreadcrumb(page) {
    var el = $('cvBreadcrumb');
    if (!el) return;

    var nav = page.nav || {};
    var breadcrumb = nav.breadcrumb || [];
    var crumbs = [];

    // Ancestor links from page.nav.breadcrumb
    for (var i = 0; i < breadcrumb.length; i++) {
      var b = breadcrumb[i];
      crumbs.push('<a href="#" onclick="CV.navigate(\'' + b.slug + '\');return false">' + escHtml(b.title) + '</a>');
    }

    // Current page
    crumbs.push('<span>' + escHtml(page.title) + '</span>');

    el.innerHTML = crumbs.join(' <span class="cv-sep">\u203a</span> ');
  }

  // ── Render sidebar ──

  function renderSidebar(page, discMeta, slug) {
    var sidebar = $('cvSidebar');
    if (!sidebar) return;

    var html = '<button class="cv-sidebar-close" onclick="this.parentElement.classList.remove(\'mobile-open\')">\u2715 Fermer</button>';

    // Back link from breadcrumb
    var nav = page.nav || {};
    var breadcrumb = nav.breadcrumb || [];
    if (breadcrumb.length > 0) {
      var back = breadcrumb[breadcrumb.length - 1]; // closest ancestor
      html += '<a href="#" class="cv-sidebar-back" onclick="CV.navigate(\'' + back.slug + '\');return false">\u2190 ' + escHtml(back.title) + '</a>';
    }

    // Section nav (exclude quiz and exercices)
    var filteredSections = (nav.sections || []).filter(function (s) {
      return s !== 'quiz' && s !== 'exercices';
    });
    if (filteredSections.length > 1) {
      html += '<p class="cv-sidebar-title">Cette page</p>';
      var sectionIcons = { introduction: '\ud83d\udcd6', cours: '\ud83d\udcdd', contenu: '\ud83d\udcdd', resume: '\ud83d\udcd6', presentation: '\ud83d\udcd6', memo: '\ud83d\udccc' };
      for (var i = 0; i < filteredSections.length; i++) {
        var secId = filteredSections[i];
        var secTitle = (nav.sectionTitles && nav.sectionTitles[secId]) || secId;
        var icon = sectionIcons[secId] || '\ud83d\udccc';
        html += '<a href="#' + secId + '" class="cv-sidebar-link" data-section="' + secId + '" onclick="CV.scrollTo(\'' + secId + '\');return false">' + icon + ' ' + escHtml(secTitle) + '</a>';
      }
    }

    // Siblings
    if (nav.siblings && nav.siblings.length > 1) {
      html += '<p class="cv-sidebar-title">Autres pages</p>';
      for (var j = 0; j < nav.siblings.length; j++) {
        var sib = nav.siblings[j];
        var isActive = (sib.slug === slug) ? ' active' : '';
        html += '<a href="#" class="cv-sidebar-link' + isActive + '" onclick="CV.navigate(\'' + sib.slug + '\');return false">' + escHtml(sib.title) + '</a>';
      }
    }

    // Cards section placeholder
    html += '<div id="cvSidebarCards"></div>';

    sidebar.innerHTML = html;
  }

  // ── Render sidebar cards ──

  function renderSidebarCards(slug, disc) {
    var el = $('cvSidebarCards');
    if (!el || !cardsDb) return;

    // Find cards matching this page's source
    var sourcePath = 'pages/' + slug + '.html';
    var matching = cardsDb.filter(function (c) { return c.s === sourcePath; });

    if (matching.length === 0) return;

    // Get user cards
    var userCardIds = {};
    if (typeof SR !== 'undefined') {
      SR.getAllCards().forEach(function (c) { userCardIds[c.id] = true; });
    }

    var html = '<p class="cv-sidebar-title">\ud83c\udccf Cartes (' + matching.length + ')</p>';
    html += '<div class="cv-cards-list">';

    var shown = matching.slice(0, 20); // Show max 20
    for (var i = 0; i < shown.length; i++) {
      var card = shown[i];
      var isAdded = !!userCardIds[card.id];
      html += '<div class="cv-card-item' + (isAdded ? ' added' : '') + '">' +
        '<span class="cv-card-front">' + escHtml(card.f) + '</span>' +
        '<button class="cv-card-btn' + (isAdded ? ' active' : '') + '" onclick="CV.toggleCard(\'' + card.id + '\',this)">' +
        (isAdded ? '\u2713' : '+') + '</button></div>';
    }
    if (matching.length > 20) {
      html += '<div class="cv-cards-more">' + (matching.length - 20) + ' autres cartes\u2026</div>';
    }
    html += '</div>';

    // Add all button
    var notAdded = matching.filter(function (c) { return !userCardIds[c.id]; }).length;
    if (notAdded > 0) {
      html += '<button class="cv-cards-add-all" onclick="CV.addAllCards()">+ Ajouter les ' + matching.length + ' cartes</button>';
    }

    el.innerHTML = html;
  }

  // ── Toggle card ──

  function toggleCard(id, btn) {
    if (typeof SR === 'undefined' || !cardsDb) return;

    var userCards = {};
    SR.getAllCards().forEach(function (c) { userCards[c.id] = true; });

    if (userCards[id]) {
      SR.removeCard(id);
      if (btn) { btn.classList.remove('active'); btn.textContent = '+'; btn.parentElement.classList.remove('added'); }
    } else {
      var card = null;
      for (var i = 0; i < cardsDb.length; i++) {
        if (cardsDb[i].id === id) { card = cardsDb[i]; break; }
      }
      if (card) {
        SR.addCard({
          front: card.f,
          back: card.b,
          type: card.t,
          source: '/Curiosita/' + card.s,
          sourceTitle: card.st,
          tags: card.tg
        });
        if (btn) { btn.classList.add('active'); btn.textContent = '\u2713'; btn.parentElement.classList.add('added'); }
      }
    }
  }

  // ── Add all cards for current page ──

  function addAllCards() {
    if (typeof SR === 'undefined' || !cardsDb || !currentSlug) return;
    var sourcePath = 'pages/' + currentSlug + '.html';
    var matching = cardsDb.filter(function (c) { return c.s === sourcePath || c.s === 'cours/' + currentSlug + '.html'; });
    var added = 0;

    var userCards = {};
    SR.getAllCards().forEach(function (c) { userCards[c.id] = true; });

    matching.forEach(function (card) {
      if (!userCards[card.id]) {
        SR.addCard({
          front: card.f,
          back: card.b,
          type: card.t,
          source: '/Curiosita/' + card.s,
          sourceTitle: card.st,
          tags: card.tg
        });
        added++;
      }
    });

    // Refresh sidebar cards display
    if (currentDisc) renderSidebarCards(currentSlug, currentDisc);
  }

  // ── Quiz initialization ──

  function initQuiz(container) {
    if (!container) return;
    var questions = container.querySelectorAll('.question-block');
    if (!questions.length) return;

    var currentQ = 0, score = 0;
    var answered = new Array(questions.length).fill(false);

    // Reset all questions
    questions.forEach(function (q, i) {
      q.classList.toggle('active', i === 0);
      q.querySelectorAll('.option').forEach(function (o) { o.className = 'option'; });
      q.querySelectorAll('.q-feedback').forEach(function (f) { f.className = 'q-feedback'; });
    });

    // Dots
    var dotsContainer = container.querySelector('#qDots');
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      questions.forEach(function (_, i) {
        var d = document.createElement('div');
        d.className = 'q-dot' + (i === 0 ? ' current' : '');
        dotsContainer.appendChild(d);
      });
    }

    function updateDots() {
      container.querySelectorAll('.q-dot').forEach(function (d, i) {
        d.className = 'q-dot';
        if (answered[i]) d.classList.add('done');
        if (i === currentQ) d.classList.add('current');
      });
    }

    // Event delegation for option clicks
    container.addEventListener('click', function handler(e) {
      var optionEl = e.target.closest('.option');
      if (!optionEl) return;
      if (answered[currentQ]) return;

      var isCorrect = optionEl.getAttribute('data-correct') === '1';
      answered[currentQ] = true;

      // Disable all options in this question
      optionEl.closest('.question-block').querySelectorAll('.option').forEach(function (o) {
        o.classList.add('disabled');
      });

      // Mark correct/wrong
      optionEl.classList.add(isCorrect ? 'correct' : 'wrong');
      if (!isCorrect) {
        optionEl.closest('.question-block').querySelectorAll('.option[data-correct="1"]').forEach(function (o) {
          o.classList.add('correct');
        });
      } else {
        score++;
        var sd = container.querySelector('#scoreDisplay');
        if (sd) sd.textContent = score;
      }

      // Show feedback
      var fb = optionEl.closest('.question-block').querySelector('.q-feedback');
      if (fb) fb.classList.add('show', isCorrect ? 'good' : 'bad');

      // Enable next button
      var btnNext = container.querySelector('#btnNext');
      if (btnNext) btnNext.disabled = false;

      updateDots();
    });

    // Next/Prev buttons via event delegation
    container.addEventListener('click', function (e) {
      if (e.target.id === 'btnNext' || e.target.closest('#btnNext')) {
        var btnNext = container.querySelector('#btnNext');
        var btnPrev = container.querySelector('#btnPrev');
        if (currentQ < questions.length - 1) {
          questions[currentQ].classList.remove('active');
          currentQ++;
          questions[currentQ].classList.add('active');
          if (btnPrev) btnPrev.disabled = false;
          if (btnNext) btnNext.disabled = !answered[currentQ];
          if (currentQ === questions.length - 1 && btnNext) btnNext.textContent = 'Terminer';
          updateDots();
        } else {
          // Show result
          var quizBody = container.querySelector('#quizBody');
          var quizResult = container.querySelector('#quizResult');
          var resultScore = container.querySelector('#resultScore');
          var resultMsg = container.querySelector('#resultMsg');
          if (quizBody) quizBody.style.display = 'none';
          if (quizResult) quizResult.style.display = 'block';
          if (resultScore) resultScore.textContent = score + '/' + questions.length;
          if (resultMsg) {
            var pct = score / questions.length;
            resultMsg.textContent = pct < 0.4 ? 'Continue !' : pct < 0.6 ? 'Pas mal !' : pct < 0.8 ? 'Bien !' : pct < 1 ? 'Très bien !' : 'Parfait !';
          }
        }
      }

      if (e.target.id === 'btnPrev' || e.target.closest('#btnPrev')) {
        var btnNext2 = container.querySelector('#btnNext');
        var btnPrev2 = container.querySelector('#btnPrev');
        if (currentQ > 0) {
          questions[currentQ].classList.remove('active');
          currentQ--;
          questions[currentQ].classList.add('active');
          if (btnPrev2) btnPrev2.disabled = currentQ === 0;
          if (btnNext2) { btnNext2.disabled = !answered[currentQ]; btnNext2.textContent = 'Suivant \u2192'; }
          updateDots();
        }
      }

      if (e.target.id === 'btnReset' || e.target.closest('#btnReset')) {
        score = 0; currentQ = 0;
        answered = new Array(questions.length).fill(false);
        var sd = container.querySelector('#scoreDisplay');
        if (sd) sd.textContent = 0;
        var quizBody2 = container.querySelector('#quizBody');
        var quizResult2 = container.querySelector('#quizResult');
        if (quizBody2) quizBody2.style.display = 'block';
        if (quizResult2) quizResult2.style.display = 'none';
        questions.forEach(function (q, i) {
          q.classList.toggle('active', i === 0);
          q.querySelectorAll('.option').forEach(function (o) { o.className = 'option'; });
          q.querySelectorAll('.q-feedback').forEach(function (f) { f.className = 'q-feedback'; });
        });
        var btnPrev3 = container.querySelector('#btnPrev');
        var btnNext3 = container.querySelector('#btnNext');
        if (btnPrev3) btnPrev3.disabled = true;
        if (btnNext3) { btnNext3.disabled = true; btnNext3.textContent = 'Suivant \u2192'; }
        updateDots();
      }
    });
  }

  // ── Scroll to section ──

  function scrollToSection(id) {
    var main = $('cvMain');
    var target = main ? main.querySelector('#' + id) : null;
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── Close ──

  function close(pushHistory) {
    var overlay = $('courseViewerOverlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    currentSlug = null;
    currentDisc = null;

    // Update browser history (unless triggered by popstate)
    if (pushHistory !== false && !skipNextPush) {
      history.pushState({ cv: null }, '', window.location.pathname);
    }
    skipNextPush = false;

    // Hide glossary popover
    if (typeof GL !== 'undefined') GL.hidePopover();

    // Restore default accent colors
    var root = document.documentElement;
    root.style.removeProperty('--accent');
    root.style.removeProperty('--accent2');
    root.style.removeProperty('--accent-dim');
    root.style.removeProperty('--accent-hero');

    // Refresh dashboard
    if (typeof hydrateDashboard === 'function') hydrateDashboard();
  }

  // ── Navigate (internal) ──

  function navigate(slug) {
    open(slug); // pushes history by default
  }

  // ── Handle browser back/forward ──

  window.addEventListener('popstate', function (e) {
    var state = e.state;
    if (state && state.cv) {
      // Navigate to a CV page without pushing another history entry
      skipNextPush = true;
      open(state.cv, false);
    } else {
      // Back to main page — close overlay without pushing
      var overlay = $('courseViewerOverlay');
      if (overlay && overlay.classList.contains('open')) {
        skipNextPush = true;
        close(false);
      }
    }
  });

  // ── Event: intercept data-cv clicks inside viewer ──

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-cv]');
    if (!link) return;

    // Only intercept if inside the viewer or on the main page
    var slug = link.getAttribute('data-cv');
    if (slug) {
      e.preventDefault();
      open(slug);
    }
  });

  // ── Event: Escape to close ──

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var overlay = $('courseViewerOverlay');
      if (overlay && overlay.classList.contains('open')) {
        history.back();
      }
    }
  });

  // ── Scroll spy for sidebar sections ──

  (function () {
    var main = $('cvMain');
    if (!main) return;
    main.addEventListener('scroll', function () {
      var links = document.querySelectorAll('.cv-sidebar-link[data-section]');
      if (!links.length) return;
      var current = null;
      links.forEach(function (l) {
        var sec = main.querySelector('#' + l.dataset.section);
        if (sec && sec.getBoundingClientRect().top <= 150) current = l;
      });
      if (current) {
        links.forEach(function (l) { l.classList.remove('active'); });
        current.classList.add('active');
      }
    }, { passive: true });
  })();

  // ── Open page from hash on initial load ──

  (function () {
    var hash = window.location.hash;
    if (hash && hash.indexOf('#/') === 0) {
      var slug = hash.substring(2); // remove "#/"
      if (slug) {
        // Replace current history entry (don't push a new one)
        history.replaceState({ cv: slug }, '', '#/' + slug);
        open(slug, false);
      }
    }
  })();

  // ── Public API ──

  window.CV = {
    open: open,
    close: close,
    navigate: navigate,
    scrollTo: scrollToSection,
    toggleCard: toggleCard,
    addAllCards: addAllCards
  };

})();
