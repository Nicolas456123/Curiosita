// ══════════════════════════════════════════════════════
//  Curiosita — SR Highlight + Extract
//  Highlights key terms that have a flashcard
//  + extraction button at the bottom of each content page
//  Bundled in sr-course.min.js with sr-engine.js + sr-extract.js
// ══════════════════════════════════════════════════════

(function () {
  'use strict';

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

  /** Insert extract banner at the bottom of the course page */
  function insertExtractButton() {
    const main = document.querySelector('.main');
    if (!main) return;

    // Avoid duplicate
    if (document.querySelector('.sr-extract-banner')) return;

    const courseUrl = window.location.pathname;
    const heroH1 = document.querySelector('.hero h1') || document.querySelector('h1');
    const courseTitle = heroH1 ? heroH1.textContent.trim() : document.title.split('—')[0].trim();
    const existingCards = SR.getCardsBySource(courseUrl);

    const countText = existingCards.length > 0
      ? existingCards.length + ' carte' + (existingCards.length > 1 ? 's' : '') + ' extraite' + (existingCards.length > 1 ? 's' : '')
      : 'Aucune carte extraite';

    const container = document.createElement('div');
    container.className = 'sr-extract-banner';
    container.innerHTML =
      '<div class="sr-extract-banner-inner">' +
        '<div class="sr-extract-banner-info">' +
          '<span class="sr-extract-banner-icon">🧠</span>' +
          '<span class="sr-extract-banner-text">' + countText + '</span>' +
        '</div>' +
        '<button class="sr-extract-banner-btn" id="sr-course-extract">' +
          'Extraire les cartes' +
        '</button>' +
      '</div>' +
      '<div class="sr-extract-banner-result" id="sr-course-extract-result"></div>';

    // Insert before .course-nav if it exists, otherwise at end of main
    const courseNav = main.querySelector('.course-nav');
    if (courseNav) {
      courseNav.parentNode.insertBefore(container, courseNav);
    } else {
      main.appendChild(container);
    }

    // Click handler
    container.querySelector('#sr-course-extract').addEventListener('click', function () {
      var btn = this;
      btn.disabled = true;
      btn.textContent = 'Extraction…';

      try {
        var result = SRExtract.extractFromDocument(document, courseUrl, courseTitle);

        btn.textContent = 'Extraire les cartes';
        btn.disabled = false;

        var resultEl = container.querySelector('#sr-course-extract-result');
        if (result.newCount > 0) {
          resultEl.innerHTML =
            '<div class="sr-extract-result success">' +
            '✅ ' + result.newCount + ' nouvelle' + (result.newCount > 1 ? 's' : '') +
            ' carte' + (result.newCount > 1 ? 's' : '') + ' ajoutée' + (result.newCount > 1 ? 's' : '') +
            (result.existingCount > 0 ? ' · ' + result.existingCount + ' déjà existante' + (result.existingCount > 1 ? 's' : '') : '') +
            '</div>';
        } else {
          resultEl.innerHTML =
            '<div class="sr-extract-result info">' +
            'Aucune nouvelle carte — ' + result.existingCount + ' déjà extraite' + (result.existingCount > 1 ? 's' : '') +
            '</div>';
        }

        // Update count display
        var updated = SR.getCardsBySource(courseUrl);
        container.querySelector('.sr-extract-banner-text').textContent =
          updated.length + ' carte' + (updated.length > 1 ? 's' : '') + ' extraite' + (updated.length > 1 ? 's' : '');

        // Re-annotate keywords (color new extractions)
        annotate();

        // Auto-hide result after 6 seconds
        setTimeout(function () { resultEl.innerHTML = ''; }, 6000);
      } catch (e) {
        btn.textContent = 'Extraire les cartes';
        btn.disabled = false;
        console.warn('[SR Extract] Error:', e);
      }
    });
  }

  function init() {
    if (typeof SR === 'undefined' || typeof SRExtract === 'undefined') {
      console.warn('[SR Highlight] SR or SRExtract not available');
      return;
    }
    annotate();
    insertExtractButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
