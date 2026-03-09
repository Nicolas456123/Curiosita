// ══════════════════════════════════════════════════════
//  Curiosità — Page Viewer (standalone)
//  Reads ?s=slug from URL, loads article JSON, renders page
//  Lightweight: no SR, no cards, no overlay
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  var categoriesCache = null;

  function escHtml(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function $(id) { return document.getElementById(id); }

  // ── Get slug from URL ──

  function getSlug() {
    var params = new URLSearchParams(window.location.search);
    return params.get('s') || '';
  }

  // ── Load categories metadata ──

  function loadCategories() {
    return new Promise(function (resolve, reject) {
      if (categoriesCache) return resolve(categoriesCache);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'assets/content/_categories.json?v=2');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var raw = JSON.parse(xhr.responseText);
            categoriesCache = raw.tree || raw;
            resolve(categoriesCache);
          } catch (e) { reject(e); }
        } else { reject(new Error('HTTP ' + xhr.status)); }
      };
      xhr.onerror = function () { reject(new Error('Network error')); };
      xhr.send();
    });
  }

  // ── Load page JSON ──

  function loadPage(slug) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'assets/content/' + slug + '.json?v=1');
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (e) { reject(e); }
        } else { reject(new Error('HTTP ' + xhr.status)); }
      };
      xhr.onerror = function () { reject(new Error('Network error')); };
      xhr.send();
    });
  }

  // ── Render hero ──

  function renderHero(page) {
    var hero = $('pageHero');
    if (!hero) return;

    var variant = page.heroVariant || page.type || '';
    hero.className = 'page-hero hero';
    if (variant === 'discipline') hero.className += ' hero--discipline';
    else if (variant === 'hub') hero.className += ' hero--hub';
    else if (variant === 'course' || variant === 'lesson') hero.className += ' hero--course';

    var decoHtml = '';
    if (page.heroDeco) {
      decoHtml = '<div class="hero-deco">' + escHtml(page.heroDeco) + '</div>';
    }

    var meta = '';
    if (page.domain) meta += '<span class="tag-domain">' + escHtml(page.domain) + '</span>';
    if (page.level) meta += '<span class="tag-level">' + escHtml(page.level) + '</span>';
    if (page.time) meta += '<span class="tag-time">' + escHtml(page.time) + '</span>';

    var titleHtml = page.heroH1 || ('<em>' + escHtml(page.title) + '</em>');

    hero.innerHTML = decoHtml +
      (meta ? '<div class="hero-meta">' + meta + '</div>' : '') +
      '<h1>' + titleHtml + '</h1>' +
      (page.heroDesc ? '<p class="hero-desc">' + escHtml(page.heroDesc) + '</p>' : '');
  }

  // ── Render breadcrumb ──

  function renderBreadcrumb(page) {
    var el = $('pageBreadcrumb');
    if (!el) return;

    var nav = page.nav || {};
    var breadcrumb = nav.breadcrumb || [];
    var crumbs = [];

    for (var i = 0; i < breadcrumb.length; i++) {
      var b = breadcrumb[i];
      crumbs.push('<a href="page.html?s=' + encodeURIComponent(b.slug) + '">' + escHtml(b.title) + '</a>');
    }

    crumbs.push('<span>' + escHtml(page.title) + '</span>');

    el.innerHTML = crumbs.join(' <span class="page-sep">\u203a</span> ');
  }

  // ── Render sidebar ──

  function renderSidebar(page, slug) {
    var sidebar = $('pageSidebar');
    if (!sidebar) return;

    var html = '<button class="page-sidebar-close" onclick="this.parentElement.classList.remove(\'mobile-open\')">&#10005; Fermer</button>';

    var nav = page.nav || {};
    var breadcrumb = nav.breadcrumb || [];

    // Back link
    if (breadcrumb.length > 0) {
      var back = breadcrumb[breadcrumb.length - 1];
      html += '<a href="page.html?s=' + encodeURIComponent(back.slug) + '" class="page-sidebar-back">\u2190 ' + escHtml(back.title) + '</a>';
    } else {
      html += '<a href="index.html" class="page-sidebar-back">\u2190 Accueil</a>';
    }

    // Section nav
    var filteredSections = (nav.sections || []).filter(function (s) {
      return s !== 'quiz' && s !== 'exercices';
    });
    if (filteredSections.length > 1) {
      html += '<p class="page-sidebar-title">Cette page</p>';
      var sectionIcons = { introduction: '\ud83d\udcd6', cours: '\ud83d\udcdd', contenu: '\ud83d\udcdd', resume: '\ud83d\udcd6', presentation: '\ud83d\udcd6', memo: '\ud83d\udccc' };
      for (var i = 0; i < filteredSections.length; i++) {
        var secId = filteredSections[i];
        var secTitle = (nav.sectionTitles && nav.sectionTitles[secId]) || secId;
        var icon = sectionIcons[secId] || '\ud83d\udccc';
        html += '<a href="#' + secId + '" class="page-sidebar-link" data-section="' + secId + '">' + icon + ' ' + escHtml(secTitle) + '</a>';
      }
    }

    // Siblings
    if (nav.siblings && nav.siblings.length > 1) {
      html += '<p class="page-sidebar-title">Autres pages</p>';
      for (var j = 0; j < nav.siblings.length; j++) {
        var sib = nav.siblings[j];
        var isActive = (sib.slug === slug) ? ' active' : '';
        html += '<a href="page.html?s=' + encodeURIComponent(sib.slug) + '" class="page-sidebar-link' + isActive + '">' + escHtml(sib.title) + '</a>';
      }
    }

    sidebar.innerHTML = html;
  }

  // ── Scroll spy ──

  function initScrollSpy() {
    window.addEventListener('scroll', function () {
      var links = document.querySelectorAll('.page-sidebar-link[data-section]');
      if (!links.length) return;
      var current = null;
      links.forEach(function (l) {
        var sec = document.getElementById(l.dataset.section);
        if (sec && sec.getBoundingClientRect().top <= 150) current = l;
      });
      if (current) {
        links.forEach(function (l) { l.classList.remove('active'); });
        current.classList.add('active');
      }
    }, { passive: true });
  }

  // ── Intercept data-cv clicks → navigate to page.html?s= ──

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-cv]');
    if (!link) return;
    var slug = link.getAttribute('data-cv');
    if (slug) {
      e.preventDefault();
      window.location.href = 'page.html?s=' + encodeURIComponent(slug);
    }
  });

  // ── Main ──

  function init() {
    var slug = getSlug();
    if (!slug) {
      var content = $('pageContent');
      if (content) content.innerHTML = '<div class="page-loading">Aucun article sp\u00e9cifi\u00e9. <a href="index.html">Retour \u00e0 l\u2019accueil</a></div>';
      return;
    }

    Promise.all([loadCategories(), loadPage(slug)]).then(function (results) {
      var categories = results[0];
      var page = results[1];

      // Discipline theming
      var disc = page.discipline || '';
      var discMeta = categories[disc] || {};

      var root = document.documentElement;
      if (discMeta.accent) root.style.setProperty('--accent', discMeta.accent);
      if (discMeta.accent2) root.style.setProperty('--accent2', discMeta.accent2);
      if (discMeta.accentDim) root.style.setProperty('--accent-dim', discMeta.accentDim);
      var heroAccent = page.accentHero || discMeta.accentHero || '';
      if (heroAccent) root.style.setProperty('--accent-hero', heroAccent);

      // Page title
      document.title = (page.title || slug) + ' \u2014 Curiosità';

      // Render
      renderHero(page);

      var content = $('pageContent');
      if (content) content.innerHTML = page.content || '';

      // Remove quiz/exercices sections
      if (content) {
        ['quiz', 'exercices'].forEach(function (secId) {
          var sec = content.querySelector('#' + secId);
          if (sec) sec.remove();
        });
      }

      renderSidebar(page, slug);
      renderBreadcrumb(page);
      initScrollSpy();

      // Scroll to top
      window.scrollTo(0, 0);

      // Glossary annotation (non-blocking)
      if (typeof GL !== 'undefined' && content) {
        var doAnnotate = function () {
          GL.init(function () {
            GL.annotate(content, slug);
          });
        };
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(doAnnotate);
        } else {
          setTimeout(doAnnotate, 60);
        }
      }

    }).catch(function (e) {
      var content = $('pageContent');
      if (content) content.innerHTML = '<div class="page-loading">Erreur : ' + escHtml(e.message) + '<br><a href="index.html">Retour \u00e0 l\u2019accueil</a></div>';
    });
  }

  init();
})();
