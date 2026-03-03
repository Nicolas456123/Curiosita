// ══════════════════════════════════════════════════════
//  Curiosita — SR Widget
//  Widget flottant sur les pages de cours
//  Auto-injecté par mobile.js sur les pages avec sidebar
//  Depends: sr-engine.js, sr-extract.js
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Resolve base path for loading scripts ──
  const styleLink = document.querySelector('link[href*="style.css"]');
  let basePath = '';
  if (styleLink) {
    const href = styleLink.getAttribute('href');
    basePath = href.substring(0, href.lastIndexOf('/') + 1);
    // Navigate up to root from course pages (../../style.css -> ../../)
    if (basePath.startsWith('..')) {
      basePath = basePath; // keep relative path
    }
  }

  // ── Load dependencies if not present ──
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src*="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = basePath + src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function loadStyle(href) {
    if (document.querySelector(`link[href*="${href}"]`)) return;
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = basePath + href;
    document.head.appendChild(l);
  }

  // ── Get course info ──
  function getCourseUrl() {
    return window.location.pathname;
  }

  function getCourseTitle() {
    const h1 = document.querySelector('.hero h1, h1');
    return h1 ? h1.textContent.replace(/\s+/g, ' ').trim() : document.title.split('—')[0].trim();
  }

  // ── Toast ──
  function showToast(msg) {
    let toast = document.querySelector('.sr-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'sr-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._tid);
    toast._tid = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // ══════════════════════════════
  //  BUILD WIDGET
  // ══════════════════════════════

  function buildWidget() {
    const courseUrl = getCourseUrl();
    const courseTitle = getCourseTitle();

    // Container
    const widget = document.createElement('div');
    widget.className = 'sr-widget';

    // Panel
    const panel = document.createElement('div');
    panel.className = 'sr-widget-panel';
    panel.innerHTML = buildPanelHTML(courseUrl, courseTitle);

    // FAB button
    const btn = document.createElement('button');
    btn.className = 'sr-widget-btn';
    btn.innerHTML = '🧠';
    btn.title = 'Répétition espacée';

    // Badge
    const badge = document.createElement('span');
    badge.className = 'sr-widget-badge';
    badge.style.display = 'none';
    btn.appendChild(badge);

    widget.appendChild(panel);
    widget.appendChild(btn);
    document.body.appendChild(widget);

    // Update badge
    updateBadge(badge, courseUrl);

    // Annotate memorize elements if cards exist for this course
    annotateMemorizeElements(courseUrl);

    // Toggle panel
    btn.addEventListener('click', () => {
      const isOpen = panel.classList.contains('open');
      if (isOpen) {
        panel.classList.remove('open');
      } else {
        // Refresh content before opening
        panel.innerHTML = buildPanelHTML(courseUrl, courseTitle);
        attachPanelEvents(panel, courseUrl, courseTitle, badge);
        panel.classList.add('open');
      }
    });

    // Close on outside click (check composedPath for detached elements)
    document.addEventListener('click', (e) => {
      const path = e.composedPath ? e.composedPath() : [];
      const clickedInWidget = widget.contains(e.target) || path.includes(widget);
      if (!clickedInWidget) {
        panel.classList.remove('open');
      }
    });

    // Initial events
    attachPanelEvents(panel, courseUrl, courseTitle, badge);
  }

  function buildPanelHTML(courseUrl, courseTitle) {
    const cards = SR.getCardsBySource(courseUrl);
    const dueCards = cards.filter(c => c.nextReview <= Date.now());
    const totalDue = SR.getDueCount();

    return `
      <div class="sr-widget-header">🧠 ${escHtml(courseTitle)}</div>
      <div class="sr-widget-body">
        <div class="sr-widget-stat">
          <span>Cartes extraites</span>
          <strong>${cards.length}</strong>
        </div>
        <div class="sr-widget-stat">
          <span>À revoir (ce cours)</span>
          <strong style="color:${dueCards.length > 0 ? 'var(--sr-fail)' : 'var(--sr-success)'}">${dueCards.length}</strong>
        </div>
        <div class="sr-widget-stat">
          <span>À revoir (total)</span>
          <strong>${totalDue}</strong>
        </div>
        <div class="sr-widget-actions">
          <button class="sr-widget-action primary" id="sr-w-extract">
            ⚡ Extraire les cartes de ce cours
          </button>
          ${dueCards.length > 0 ? `<button class="sr-widget-action" id="sr-w-review">🎯 Réviser ce cours (${dueCards.length})</button>` : ''}
          <a class="sr-widget-action" href="${basePath}apprendre.html" id="sr-w-hub">📚 Aller sur Apprendre →</a>
        </div>
        ${cards.length > 0 ? `
        <label class="sr-toggle-markers">
          <input type="checkbox" id="sr-w-markers" ${getMarkersEnabled() ? 'checked' : ''}>
          Surligner les éléments à retenir
        </label>` : ''}
      </div>`;
  }

  function attachPanelEvents(panel, courseUrl, courseTitle, badge) {
    const extractBtn = panel.querySelector('#sr-w-extract');
    if (extractBtn) {
      extractBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const result = SRExtract.extractFromPage(courseUrl, courseTitle);
        if (result.newCount > 0) {
          showToast(`✅ ${result.newCount} nouvelle${result.newCount > 1 ? 's' : ''} carte${result.newCount > 1 ? 's' : ''} ajoutée${result.newCount > 1 ? 's' : ''}`);
        } else {
          showToast(`Aucune nouvelle carte (${result.existingCount} déjà extraites)`);
        }
        // Refresh panel
        panel.innerHTML = buildPanelHTML(courseUrl, courseTitle);
        attachPanelEvents(panel, courseUrl, courseTitle, badge);
        updateBadge(badge, courseUrl);
        // Refresh markers after extraction
        annotateMemorizeElements(courseUrl);
      });
    }

    const reviewBtn = panel.querySelector('#sr-w-review');
    if (reviewBtn) {
      reviewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        startMiniReview(courseUrl, panel, badge, courseTitle);
      });
    }

    const markersToggle = panel.querySelector('#sr-w-markers');
    if (markersToggle) {
      markersToggle.addEventListener('change', (e) => {
        e.stopPropagation();
        setMarkersEnabled(markersToggle.checked);
        if (markersToggle.checked) {
          annotateMemorizeElements(courseUrl);
        } else {
          clearMemorizeMarkers();
        }
      });
    }
  }

  function updateBadge(badge, courseUrl) {
    const cards = SR.getCardsBySource(courseUrl);
    const due = cards.filter(c => c.nextReview <= Date.now()).length;
    if (due > 0) {
      badge.textContent = due;
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }
  }

  // ══════════════════════════════
  //  MINI REVIEW (inline)
  // ══════════════════════════════

  function startMiniReview(courseUrl, panel, badge, courseTitle) {
    const cards = SR.getCardsBySource(courseUrl).filter(c => c.nextReview <= Date.now());
    if (cards.length === 0) {
      showToast('Aucune carte à revoir !');
      return;
    }

    let idx = 0;
    let flipped = false;

    function renderMiniCard() {
      if (idx >= cards.length) {
        // Done
        panel.innerHTML = buildPanelHTML(courseUrl, courseTitle);
        attachPanelEvents(panel, courseUrl, courseTitle, badge);
        panel.classList.add('open');
        showToast(`✅ ${cards.length} carte${cards.length > 1 ? 's' : ''} révisée${cards.length > 1 ? 's' : ''}`);
        updateBadge(badge, courseUrl);
        return;
      }

      const card = cards[idx];
      flipped = false;

      panel.innerHTML = `
        <div class="sr-widget-header">🎯 ${idx + 1}/${cards.length}</div>
        <div class="sr-widget-review">
          <div class="sr-widget-card" id="sr-mini-card">
            ${escHtml(card.front)}
          </div>
          <div class="sr-widget-rating" id="sr-mini-rating" style="display:none">
            <button data-q="1">À revoir</button>
            <button data-q="3">Difficile</button>
            <button data-q="4">Bien</button>
            <button data-q="5">Facile</button>
          </div>
        </div>`;

      panel.classList.add('open');

      const miniCard = panel.querySelector('#sr-mini-card');
      const ratingDiv = panel.querySelector('#sr-mini-rating');

      miniCard.addEventListener('click', () => {
        if (flipped) return;
        flipped = true;
        miniCard.textContent = card.back;
        miniCard.style.background = 'var(--sr-surface2)';
        ratingDiv.style.display = '';
      });

      ratingDiv.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          SR.reviewCard(card.id, parseInt(btn.dataset.q));
          idx++;
          renderMiniCard();
        });
      });
    }

    renderMiniCard();
  }

  // ── Helpers ──
  function escHtml(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ══════════════════════════════
  //  MEMORIZE MARKERS
  //  Color key terms in the course that are flashcard fronts
  // ══════════════════════════════

  const MARKERS_KEY = 'curiosita_sr_markers';

  function getMarkersEnabled() {
    const v = localStorage.getItem(MARKERS_KEY);
    return v === null ? true : v === '1';
  }

  function setMarkersEnabled(val) {
    localStorage.setItem(MARKERS_KEY, val ? '1' : '0');
  }

  /** Normalize text for matching */
  function normText(s) {
    return (s || '').toLowerCase().replace(/[\s:—–\-·]+/g, ' ').trim();
  }

  /**
   * Find the <strong> (or key text element) corresponding to a card's front.
   * Returns the inline element to color, not the container.
   */
  function findKeywordElement(card) {
    const front = normText(card.front);
    const doc = document;

    // Most card types: find the <strong> or title element that matches the front
    const selectors = {
      highlight:  '.highlight-box strong',
      formula:    '.formula-card .formula-name',
      timeline:   '.tl-item .tl-date, .tl-item .tl-title',
      biais:      '.biais-card .biais-name',
      theory:     '.theory-item .theory-title',
      concept:    '.concept-card .concept-title',
      memo:       '.memo-item strong',
      definition: 'li strong',
    };

    const sel = selectors[card.type];
    if (sel) {
      const candidates = doc.querySelectorAll(sel);
      for (const el of candidates) {
        const text = normText(el.textContent).replace(/[\s:«»"']+$/, '').replace(/^[\s:«»"']+/, '');
        if (text === front) {
          return el;
        }
      }
    }

    // Quiz: no inline element to color (they're already interactive)
    return null;
  }

  /**
   * Color all key terms in the course that have SR cards.
   */
  function annotateMemorizeElements(courseUrl) {
    clearMemorizeMarkers();
    if (!getMarkersEnabled()) return;

    const cards = SR.getCardsBySource(courseUrl);
    if (cards.length === 0) return;

    let marked = 0;
    cards.forEach(card => {
      const el = findKeywordElement(card);
      if (el && !el.classList.contains('sr-keyword')) {
        el.classList.add('sr-keyword');
        marked++;
      }
    });

    return marked;
  }

  /**
   * Remove all keyword markers from the page
   */
  function clearMemorizeMarkers() {
    document.querySelectorAll('.sr-keyword').forEach(el => {
      el.classList.remove('sr-keyword');
    });
  }

  // ══════════════════════════════
  //  INIT — load deps then build
  // ══════════════════════════════

  async function init() {
    loadStyle('sr-style.css');

    try {
      // Load engine first, then extract
      if (typeof SR === 'undefined') {
        await loadScript('sr-engine.js');
      }
      if (typeof SRExtract === 'undefined') {
        await loadScript('sr-extract.js');
      }
    } catch (e) {
      console.warn('[SR Widget] Failed to load dependencies:', e);
      return;
    }

    // Small delay to ensure scripts are executed
    setTimeout(buildWidget, 100);
  }

  // Wait for page to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
