// ══════════════════════════════════════════════════════
//  Curiosita — SR Highlight
//  Colore les termes-clés du cours qui ont une flashcard
//  Léger, sans UI — injecté par mobile.js sur les cours
//  Depends: sr-engine.js, sr-style.css
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

  // ── Resolve base path from style.css link ──
  const styleLink = document.querySelector('link[href*="style.css"]');
  let basePath = '';
  if (styleLink) {
    const href = styleLink.getAttribute('href');
    basePath = href.substring(0, href.lastIndexOf('/') + 1);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src*="${src}"]`)) { resolve(); return; }
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

  /** Normalize text for comparison */
  function normText(s) {
    return (s || '').toLowerCase().replace(/[\s:—–\-·]+/g, ' ').trim();
  }

  /**
   * Find the inline element (strong, title, etc.) matching a card's front.
   * Uses exact matching to avoid false positives.
   */
  function findKeywordElement(card) {
    const front = normText(card.front);

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
    if (!sel) return null; // quiz: no inline element to color

    const candidates = document.querySelectorAll(sel);
    for (const el of candidates) {
      const text = normText(el.textContent)
        .replace(/[\s:«»"']+$/, '')
        .replace(/^[\s:«»"']+/, '');
      if (text === front) return el;
    }
    return null;
  }

  /** Color all key terms in the current course that have SR cards */
  function annotate() {
    const courseUrl = window.location.pathname;
    const cards = SR.getCardsBySource(courseUrl);
    if (cards.length === 0) return;

    cards.forEach(card => {
      const el = findKeywordElement(card);
      if (el && !el.classList.contains('sr-keyword')) {
        el.classList.add('sr-keyword');
      }
    });
  }

  async function init() {
    loadStyle('sr-style.css');
    try {
      if (typeof SR === 'undefined') await loadScript('sr-engine.js');
    } catch (e) {
      console.warn('[SR Highlight] Failed to load sr-engine.js:', e);
      return;
    }
    // Small delay to ensure the engine is fully initialized
    setTimeout(annotate, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
