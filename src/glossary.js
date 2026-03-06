(function () {
  'use strict';

  // ── State ──
  var glossary = null;    // Loaded glossary data
  var trie = null;        // Word trie for matching
  var ready = false;
  var loading = false;
  var popoverEl = null;
  var showTimer = null;
  var hideTimer = null;
  var currentSlug = '';
  var annotatedKeys = {}; // Track first-occurrence per page

  // ── Constants ──
  var MAX_ANNOTATIONS = 30;
  var SHOW_DELAY = 200;
  var HIDE_DELAY = 200;
  var EXCLUDED_TAGS = { H1: 1, H2: 1, H3: 1, H4: 1, A: 1, CODE: 1, PRE: 1, BUTTON: 1 };
  var EXCLUDED_CLASSES = ['highlight-box', 'gl-term', 'quiz-container', 'option',
    'q-feedback', 'q-text', 'formula-math', 'memo-item', 'hero-meta', 'tag-domain',
    'tag-level', 'tag-time', 'section-num', 'quiz-header', 'quiz-score', 'q-num',
    'q-dots', 'quiz-result', 'quiz-nav'];

  // ── Helpers ──

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }

  function isExcluded(node) {
    var el = node.nodeType === 3 ? node.parentElement : node;
    while (el && el.id !== 'cvContent') {
      if (EXCLUDED_TAGS[el.tagName]) return true;
      if (el.className && typeof el.className === 'string') {
        for (var i = 0; i < EXCLUDED_CLASSES.length; i++) {
          if (el.className.indexOf(EXCLUDED_CLASSES[i]) !== -1) return true;
        }
      }
      el = el.parentElement;
    }
    return false;
  }

  // ── Trie ──

  function buildTrie() {
    trie = {};
    var terms = glossary.terms;
    for (var key in terms) {
      if (!terms.hasOwnProperty(key)) continue;
      var words = key.split(/\s+/);
      if (words.length === 0) continue;
      var node = trie;
      for (var i = 0; i < words.length; i++) {
        var w = words[i];
        if (!node[w]) node[w] = {};
        node = node[w];
      }
      node['$'] = key; // Terminal: stores glossary key
    }
  }

  // ── Loading ──

  function init(cb) {
    if (ready) { if (cb) cb(); return; }
    if (loading) return;
    loading = true;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/glossary.json?v=2');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          glossary = JSON.parse(xhr.responseText);
          buildTrie();
          ready = true;
          if (cb) cb();
        } catch (e) {
          console.warn('GL: parse error', e);
        }
      }
      loading = false;
    };
    xhr.onerror = function () { loading = false; };
    xhr.send();
  }

  // ── Annotation ──

  function annotate(container, slug) {
    if (!ready || !trie || !container) return;
    currentSlug = slug || '';
    annotatedKeys = {};
    var count = 0;

    // Collect text nodes via TreeWalker
    var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    var node;
    while ((node = walker.nextNode())) {
      if (node.textContent.trim().length > 2 && !isExcluded(node)) {
        textNodes.push(node);
      }
    }

    // Process each text node
    for (var i = 0; i < textNodes.length && count < MAX_ANNOTATIONS; i++) {
      var processed = processTextNode(textNodes[i]);
      count += processed;
    }
  }

  function processTextNode(textNode) {
    var text = textNode.textContent;
    if (text.length < 4) return 0;

    // Split original text on word boundaries, track positions
    // Each entry: { word: normalized, orig: original, start: pos, end: pos }
    var tokens = [];
    var re = /[a-zA-ZÀ-ÿ'']+/g;
    var m;
    while ((m = re.exec(text)) !== null) {
      tokens.push({
        word: normalize(m[0]),
        orig: m[0],
        start: m.index,
        end: m.index + m[0].length
      });
    }

    if (tokens.length === 0) return 0;

    // Find matches using trie on normalized words
    var matches = [];
    for (var wi = 0; wi < tokens.length; wi++) {
      var match = trieMatchTokens(tokens, wi);
      if (match) {
        // Check first-occurrence and not self-reference
        if (annotatedKeys[match.key]) continue;
        var entry = glossary.terms[match.key];
        if (!entry) continue;
        if (entry.s === currentSlug) continue;

        // Get original text span from first to last matched token
        var firstToken = tokens[wi];
        var lastToken = tokens[wi + match.len - 1];

        matches.push({
          key: match.key,
          start: firstToken.start,
          end: lastToken.end,
          text: text.substring(firstToken.start, lastToken.end)
        });

        annotatedKeys[match.key] = true;
        wi += match.len - 1;
      }
    }

    if (matches.length === 0) return 0;

    // Build replacement fragment
    var frag = document.createDocumentFragment();
    var lastEnd = 0;

    for (var m = 0; m < matches.length; m++) {
      var ma = matches[m];
      // Text before match
      if (ma.start > lastEnd) {
        frag.appendChild(document.createTextNode(text.substring(lastEnd, ma.start)));
      }
      // Wrapped match
      var span = document.createElement('span');
      span.className = 'gl-term';
      span.setAttribute('data-gl', ma.key);
      span.textContent = ma.text;
      frag.appendChild(span);
      lastEnd = ma.end;
    }

    // Text after last match
    if (lastEnd < text.length) {
      frag.appendChild(document.createTextNode(text.substring(lastEnd)));
    }

    textNode.parentNode.replaceChild(frag, textNode);
    return matches.length;
  }

  function trieMatchTokens(tokens, startIdx) {
    var node = trie;
    var lastMatch = null;

    for (var i = startIdx; i < tokens.length && i < startIdx + 6; i++) {
      var w = tokens[i].word;
      if (!w) break;
      if (!node[w]) break;
      node = node[w];
      if (node['$']) {
        lastMatch = { key: node['$'], len: i - startIdx + 1 };
        // Don't break — keep looking for longer match
      }
    }

    return lastMatch;
  }

  // ── Popover ──

  function ensurePopover() {
    if (popoverEl) return;
    popoverEl = document.getElementById('glPopover');
    if (!popoverEl) return;

    // Desktop: hover on popover keeps it open
    popoverEl.addEventListener('mouseenter', function () {
      clearTimeout(hideTimer);
    });
    popoverEl.addEventListener('mouseleave', function () {
      hideTimer = setTimeout(hidePopover, HIDE_DELAY);
    });

    // Click on related terms
    popoverEl.addEventListener('click', function (e) {
      var rel = e.target.closest('.gl-popover-rel');
      if (rel) {
        e.preventDefault();
        var key = rel.getAttribute('data-gl');
        showPopoverForKey(key);
      }
    });
  }

  function showPopover(termEl) {
    ensurePopover();
    if (!popoverEl) return;

    var key = termEl.getAttribute('data-gl');
    if (!key || !glossary.terms[key]) return;
    var entry = glossary.terms[key];

    // Populate
    var termSpan = popoverEl.querySelector('.gl-popover-term');
    var tagSpan = popoverEl.querySelector('.gl-popover-tag');
    var bodyDiv = popoverEl.querySelector('.gl-popover-body');
    var relDiv = popoverEl.querySelector('.gl-popover-related');
    var footerDiv = popoverEl.querySelector('.gl-popover-footer');
    var linkEl = popoverEl.querySelector('.gl-popover-link');

    populatePopover(entry);

    // Position
    positionPopover(termEl);
    popoverEl.classList.add('visible');
  }

  function showPopoverForKey(key) {
    // Show popover for a key (from related term click)
    if (!glossary.terms[key]) return;
    populatePopover(glossary.terms[key]);
  }

  // Type labels for badges
  var TYPE_LABELS = {
    'p': '\ud83d\udc64 Personnage',
    'd': '\ud83d\udcda Domaine',
    'c': '\ud83d\udca1 Concept',
    'f': '\ud83d\udcd0 Formule'
  };

  function populatePopover(entry) {
    var termSpan = popoverEl.querySelector('.gl-popover-term');
    var typeSpan = popoverEl.querySelector('.gl-popover-type');
    var tagSpan = popoverEl.querySelector('.gl-popover-tag');
    var bodyDiv = popoverEl.querySelector('.gl-popover-body');
    var relDiv = popoverEl.querySelector('.gl-popover-related');
    var footerDiv = popoverEl.querySelector('.gl-popover-footer');
    var linkEl = popoverEl.querySelector('.gl-popover-link');

    if (termSpan) termSpan.textContent = entry.n;
    if (tagSpan) tagSpan.textContent = entry.tg || '';
    if (bodyDiv) bodyDiv.textContent = entry.d;

    // Type badge (person, domain, concept, formula — not shown for plain definitions)
    if (typeSpan) {
      var label = entry.tp ? TYPE_LABELS[entry.tp] || '' : '';
      if (label) {
        typeSpan.textContent = label;
        typeSpan.style.display = '';
      } else {
        typeSpan.style.display = 'none';
      }
    }

    // Related terms
    if (relDiv) {
      if (entry.r && entry.r.length > 0) {
        var html = '';
        for (var i = 0; i < Math.min(entry.r.length, 5); i++) {
          var rk = entry.r[i];
          var re = glossary.terms[rk];
          if (re) {
            html += '<span class="gl-popover-rel" data-gl="' + rk + '">' + escHtml(re.n) + '</span>';
          }
        }
        relDiv.innerHTML = html;
        relDiv.style.display = '';
      } else {
        relDiv.style.display = 'none';
      }
    }

    // Source link
    if (linkEl && footerDiv) {
      if (entry.s && entry.s !== currentSlug) {
        linkEl.textContent = (entry.st || 'Voir la page') + ' \u2192';
        linkEl.setAttribute('data-cv', entry.s);
        linkEl.href = '#';
        footerDiv.style.display = '';
      } else {
        footerDiv.style.display = 'none';
      }
    }
  }

  function hidePopover() {
    if (popoverEl) {
      popoverEl.classList.remove('visible');
    }
  }

  function positionPopover(termEl) {
    if (!popoverEl) return;

    // Mobile: bottom sheet
    if (window.innerWidth <= 600) {
      popoverEl.removeAttribute('style');
      popoverEl.className = 'gl-popover mobile';
      return;
    }

    var rect = termEl.getBoundingClientRect();
    var pw = 320;

    // Center horizontally, clamp to viewport
    var left = rect.left + (rect.width / 2) - (pw / 2);
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));

    // Prefer above, fallback below
    // Need to measure popover height first
    popoverEl.style.visibility = 'hidden';
    popoverEl.style.display = 'block';
    popoverEl.style.left = left + 'px';
    popoverEl.style.top = '0';
    var ph = popoverEl.offsetHeight;
    popoverEl.style.visibility = '';
    popoverEl.style.display = '';

    var arrow;
    var top;
    if (rect.top - ph - 10 > 0) {
      top = rect.top - ph - 8;
      arrow = 'below';
    } else {
      top = rect.bottom + 8;
      arrow = 'above';
    }

    popoverEl.style.left = left + 'px';
    popoverEl.style.top = top + 'px';
    popoverEl.className = 'gl-popover arrow-' + arrow;
  }

  function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── Event Delegation ──

  function setupEvents() {
    var content = document.getElementById('cvContent');
    if (!content) return;

    // Desktop: hover
    content.addEventListener('mouseenter', function (e) {
      var term = e.target.closest('.gl-term');
      if (!term) return;
      clearTimeout(hideTimer);
      clearTimeout(showTimer);
      showTimer = setTimeout(function () { showPopover(term); }, SHOW_DELAY);
    }, true);

    content.addEventListener('mouseleave', function (e) {
      var term = e.target.closest('.gl-term');
      if (!term) return;
      clearTimeout(showTimer);
      hideTimer = setTimeout(hidePopover, HIDE_DELAY);
    }, true);

    // Mobile: click
    content.addEventListener('click', function (e) {
      var term = e.target.closest('.gl-term');
      if (term) {
        e.preventDefault();
        e.stopPropagation();
        showPopover(term);
        return;
      }
    });

    // Dismiss on scroll
    var main = document.getElementById('cvMain');
    if (main) {
      main.addEventListener('scroll', function () {
        hidePopover();
      }, { passive: true });
    }

    // Dismiss on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hidePopover();
    });

    // Dismiss on click outside (mobile)
    document.addEventListener('click', function (e) {
      if (popoverEl && popoverEl.classList.contains('visible')) {
        if (!popoverEl.contains(e.target) && !e.target.closest('.gl-term')) {
          hidePopover();
        }
      }
    });

    // Source link navigation
    if (popoverEl) {
      var link = popoverEl.querySelector('.gl-popover-link');
      if (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          var slug = this.getAttribute('data-cv');
          if (slug && window.CV) {
            hidePopover();
            CV.navigate(slug);
          }
        });
      }
    }
  }

  var eventsSetup = false;

  // ── Public API ──

  window.GL = {
    init: init,
    annotate: function (container, slug) {
      if (!eventsSetup) {
        ensurePopover();
        setupEvents();
        eventsSetup = true;
      }
      annotate(container, slug);
    },
    hidePopover: hidePopover
  };

})();
