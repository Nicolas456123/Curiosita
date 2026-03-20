// ══════════════════════════════════════════════════════
//  Curiosità — Memorize Mode (Progressive Text Masking)
//  3 levels: mask bold words → mask sentences → mask paragraphs
//  User clicks to reveal, training active recall
// ══════════════════════════════════════════════════════

const MemorizeMode = (function () {
  'use strict';

  var active = false;
  var level = 0; // 0=off, 1=bold, 2=sentences, 3=paragraphs
  var masks = [];

  function toggle() {
    var content = document.getElementById('cvContent');
    if (!content) return;

    if (active) {
      deactivate(content);
    } else {
      level = 1;
      activate(content);
    }
  }

  function nextLevel() {
    var content = document.getElementById('cvContent');
    if (!content || !active) return;
    level = level >= 3 ? 1 : level + 1;
    deactivate(content);
    activate(content);
  }

  function activate(content) {
    active = true;
    masks = [];
    var contenu = content.querySelector('#contenu .course-content') ||
                  content.querySelector('#contenu') ||
                  content.querySelector('.course-content');
    if (!contenu) return;

    updateButton();

    if (level === 1) maskBold(contenu);
    else if (level === 2) maskSentences(contenu);
    else if (level === 3) maskParagraphs(contenu);
  }

  function deactivate(content) {
    active = false;
    level = 0;
    // Restore all masked elements
    masks.forEach(function (m) {
      if (m.wrapper && m.wrapper.parentNode) {
        m.wrapper.classList.add('mem-revealed');
      }
    });
    // Remove all mask wrappers
    var all = content.querySelectorAll('.mem-mask');
    all.forEach(function (el) {
      el.classList.add('mem-revealed');
    });
    masks = [];
    updateButton();
  }

  // Level 1: mask bold/strong text
  function maskBold(container) {
    var strongs = container.querySelectorAll('strong, b');
    strongs.forEach(function (el) {
      if (el.closest('.quiz-container') || el.closest('.elab-prompt') || el.closest('.ei-prompt') || el.closest('.mc-bar')) return;
      wrapMask(el);
    });
  }

  // Level 2: mask key sentences (first sentence of each paragraph)
  function maskSentences(container) {
    var paras = container.querySelectorAll('p');
    paras.forEach(function (p) {
      if (p.closest('.quiz-container') || p.closest('.ei-prompt') || p.closest('.mc-bar')) return;
      if (p.textContent.trim().length < 20) return;
      wrapMask(p);
    });
  }

  // Level 3: mask entire subsections
  function maskParagraphs(container) {
    var h3s = container.querySelectorAll('h3');
    h3s.forEach(function (h3) {
      // Collect all elements until next h3
      var els = [];
      var el = h3.nextElementSibling;
      while (el && el.tagName !== 'H3') {
        if (!el.classList.contains('mc-bar') && !el.classList.contains('ei-prompt') && !el.classList.contains('elab-prompt')) {
          els.push(el);
        }
        el = el.nextElementSibling;
      }
      if (els.length === 0) return;

      // Wrap group in a mask
      var wrapper = document.createElement('div');
      wrapper.className = 'mem-mask mem-group';
      wrapper.title = 'Cliquer pour r\u00e9v\u00e9ler';

      // Insert wrapper before first element
      els[0].parentNode.insertBefore(wrapper, els[0]);
      els.forEach(function (e) { wrapper.appendChild(e); });

      wrapper.addEventListener('click', function () {
        wrapper.classList.add('mem-revealed');
      });

      masks.push({ wrapper: wrapper });
    });
  }

  function wrapMask(el) {
    if (el.classList.contains('mem-mask')) return;
    el.classList.add('mem-mask');
    el.title = 'Cliquer pour r\u00e9v\u00e9ler';

    el.addEventListener('click', function handler() {
      el.classList.add('mem-revealed');
      el.removeEventListener('click', handler);
    });

    masks.push({ wrapper: el });
  }

  function updateButton() {
    var btn = document.getElementById('mem-toggle');
    if (!btn) return;

    if (!active) {
      btn.classList.remove('active');
      btn.title = 'Mode m\u00e9moriser';
      btn.querySelector('.mem-label').textContent = 'M\u00e9moriser';
    } else {
      btn.classList.add('active');
      var labels = ['', 'Niv. 1 : mots-cl\u00e9s', 'Niv. 2 : phrases', 'Niv. 3 : sections'];
      btn.querySelector('.mem-label').textContent = labels[level];
      btn.title = 'Cliquer pour changer de niveau (ou d\u00e9sactiver)';
    }
  }

  return { toggle: toggle, nextLevel: nextLevel, active: function () { return active; } };
})();
