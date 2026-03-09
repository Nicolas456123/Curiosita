(function () {
  'use strict';

  // ── State ──
  var index = null;       // courses-index.json data
  var lookupMap = {};     // normalizedTitle → [entries]
  var idToEntry = {};     // pageId → entry
  var ready = false;
  var loading = false;
  var popoverEl = null;
  var showTimer = null;
  var hideTimer = null;
  var currentSlug = '';
  var currentDisc = '';
  var annotatedIds = {};  // Track first-occurrence per page load

  // ── Constants ──
  var MAX_ANNOTATIONS = 30;
  var SHOW_DELAY = 200;
  var HIDE_DELAY = 200;
  var SINGLE_WORD_CROSS_DISC_MIN = 14; // Single-word must be ≥ this length for cross-discipline
  var MAX_MATCH_WORDS = 7;             // Max multi-word sequence to try

  var EXCLUDED_TAGS = { H1: 1, H2: 1, H3: 1, H4: 1, A: 1, CODE: 1, PRE: 1, BUTTON: 1 };
  var EXCLUDED_CLASSES = ['highlight-box', 'gl-term', 'quiz-container', 'option',
    'q-feedback', 'q-text', 'formula-math', 'memo-item', 'hero-meta', 'tag-domain',
    'tag-level', 'tag-time', 'section-num', 'quiz-header', 'quiz-score', 'q-num',
    'q-dots', 'quiz-result', 'quiz-nav'];

  // French articles to strip for matching
  var ARTICLE_RE = /^(l'|l'|le |la |les |un |une |du |des |d'|d'|au |aux )/i;

  // Discipline affinity groups — disciplines that are conceptually close
  // Single-word matches allowed across disciplines in the same group
  var AFFINITY_GROUPS = [
    ['biologie', 'botanique-zoologie', 'ecologie', 'environnement', 'neurosciences', 'sante', 'agriculture'],
    ['histoire', 'histoire-art', 'arts', 'litterature-fr', 'litterature-monde', 'mythologie'],
    ['physique', 'chimie', 'astronomie', 'terre', 'ingenierie'],
    ['maths', 'statistiques', 'logique', 'informatique', 'python'],
    ['philosophie', 'psychologie', 'sociologie', 'anthropologie'],
    ['droit', 'sciences-po', 'civique', 'relations-internationales', 'economie', 'geographie'],
    ['langues', 'linguistique', 'rhetorique', 'communication'],
    ['cinema', 'spectacle', 'musique', 'design']
  ];

  // Build fast lookup: disc → set of affiliated discs
  var affiliatedDiscs = {};
  for (var gi = 0; gi < AFFINITY_GROUPS.length; gi++) {
    var group = AFFINITY_GROUPS[gi];
    for (var gj = 0; gj < group.length; gj++) {
      if (!affiliatedDiscs[group[gj]]) affiliatedDiscs[group[gj]] = {};
      for (var gk = 0; gk < group.length; gk++) {
        affiliatedDiscs[group[gj]][group[gk]] = true;
      }
    }
  }

  function isAffiliated(disc1, disc2) {
    if (disc1 === disc2) return true;
    return affiliatedDiscs[disc1] && affiliatedDiscs[disc1][disc2];
  }

  // ── Helpers ──

  function normalize(str) {
    return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }

  function stripArticle(str) {
    return str.replace(ARTICLE_RE, '').trim();
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

  // ── Build Lookup Map ──

  function buildLookup() {
    lookupMap = {};
    idToEntry = {};

    for (var i = 0; i < index.length; i++) {
      var entry = index[i];
      // Only index lessons and hubs (not themes or disciplines)
      if (entry.tp !== 'lesson' && entry.tp !== 'hub') continue;

      idToEntry[entry.id] = entry;

      // Index by normalized full title
      var normTitle = normalize(entry.t);
      if (!lookupMap[normTitle]) lookupMap[normTitle] = [];
      lookupMap[normTitle].push(entry);

      // Also index without French article prefix
      var stripped = normalize(stripArticle(entry.t));
      if (stripped !== normTitle && stripped.length > 2) {
        if (!lookupMap[stripped]) lookupMap[stripped] = [];
        lookupMap[stripped].push(entry);
      }
    }
  }

  // ── Loading ──

  function init(cb) {
    if (ready) { if (cb) cb(); return; }
    if (loading) return;
    loading = true;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/courses-index.json?v=6');
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          index = JSON.parse(xhr.responseText);
          buildLookup();
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
    if (!ready || !container) return;
    currentSlug = slug || '';
    currentDisc = slug ? slug.split('/')[0] : '';
    annotatedIds = {};
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

    // Tokenize: extract word positions
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

    // Find matches: try sequences of MAX_MATCH_WORDS→1 tokens at each position
    var matches = [];
    for (var wi = 0; wi < tokens.length; wi++) {
      var match = findBestMatch(tokens, wi);
      if (match) {
        var firstToken = tokens[wi];
        var lastToken = tokens[wi + match.wordCount - 1];

        // For multi-word matches, ensure tokens are close together (no large gaps)
        var spanOk = true;
        if (match.wordCount > 1) {
          for (var ti = wi; ti < wi + match.wordCount - 1; ti++) {
            var gap = tokens[ti + 1].start - tokens[ti].end;
            if (gap > 3) { spanOk = false; break; } // max 3 chars between words (space, apostrophe, hyphen)
          }
        }

        if (spanOk) {
          matches.push({
            id: match.entry.id,
            start: firstToken.start,
            end: lastToken.end,
            text: text.substring(firstToken.start, lastToken.end)
          });
          annotatedIds[match.entry.id] = true;
        }
        wi += match.wordCount - 1; // Skip matched tokens
      }
    }

    if (matches.length === 0) return 0;

    // Build replacement fragment
    var frag = document.createDocumentFragment();
    var lastEnd = 0;

    for (var mi = 0; mi < matches.length; mi++) {
      var ma = matches[mi];
      // Text before match
      if (ma.start > lastEnd) {
        frag.appendChild(document.createTextNode(text.substring(lastEnd, ma.start)));
      }
      // Wrapped match
      var span = document.createElement('span');
      span.className = 'gl-term';
      span.setAttribute('data-gl-id', ma.id);
      frag.appendChild(span);
      span.textContent = ma.text;
      lastEnd = ma.end;
    }

    // Text after last match
    if (lastEnd < text.length) {
      frag.appendChild(document.createTextNode(text.substring(lastEnd)));
    }

    textNode.parentNode.replaceChild(frag, textNode);
    return matches.length;
  }

  // Find the best matching page title starting at token index `startIdx`
  function findBestMatch(tokens, startIdx) {
    var bestMatch = null;

    // Try sequences from longest (MAX_MATCH_WORDS) to shortest (1)
    var maxLen = Math.min(MAX_MATCH_WORDS, tokens.length - startIdx);

    for (var len = maxLen; len >= 1; len--) {
      // Build candidate string from tokens
      var parts = [];
      for (var j = startIdx; j < startIdx + len; j++) {
        parts.push(tokens[j].word);
      }
      var candidate = parts.join(' ');

      // Look up in map
      var entries = lookupMap[candidate];
      if (!entries || entries.length === 0) continue;

      // Disambiguate: pick best entry
      var best = disambiguate(entries, candidate, len);
      if (!best) continue;

      // Check not already annotated and not self-reference
      if (annotatedIds[best.id]) continue;
      if (best.id === currentSlug) continue;

      bestMatch = { entry: best, wordCount: len };
      break; // Longest match wins
    }

    return bestMatch;
  }

  // Pick the best entry from candidates, considering discipline context
  function disambiguate(entries, candidate, wordCount) {
    // Filter out self-references
    var valid = [];
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].id !== currentSlug) valid.push(entries[i]);
    }
    if (valid.length === 0) return null;

    // Single-word titles → require same or affiliated discipline unless very long/specific
    // This avoids "Kant" in biology, "esthétique" in ecology, etc.
    if (wordCount === 1 && candidate.length < SINGLE_WORD_CROSS_DISC_MIN) {
      var affiliated = [];
      for (var j = 0; j < valid.length; j++) {
        if (isAffiliated(valid[j].disc, currentDisc)) affiliated.push(valid[j]);
      }
      // If no affiliated match for single words, skip entirely
      if (affiliated.length === 0) return null;
      valid = affiliated;
    }

    // Prefer same discipline
    var sameDiscEntries = [];
    for (var k = 0; k < valid.length; k++) {
      if (valid[k].disc === currentDisc) sameDiscEntries.push(valid[k]);
    }
    if (sameDiscEntries.length > 0) {
      valid = sameDiscEntries;
    }

    // Among remaining, prefer lessons over hubs (more specific)
    var lessons = [];
    for (var l = 0; l < valid.length; l++) {
      if (valid[l].tp === 'lesson') lessons.push(valid[l]);
    }
    if (lessons.length > 0) return lessons[0];

    return valid[0];
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
  }

  function showPopover(termEl) {
    ensurePopover();
    if (!popoverEl) return;

    var id = termEl.getAttribute('data-gl-id');
    if (!id) return;
    var entry = idToEntry[id];
    if (!entry) return;

    populatePopover(entry);
    positionPopover(termEl);
    popoverEl.classList.add('visible');
  }

  function populatePopover(entry) {
    var termSpan = popoverEl.querySelector('.gl-popover-term');
    var tagSpan = popoverEl.querySelector('.gl-popover-tag');
    var bodyDiv = popoverEl.querySelector('.gl-popover-body');
    var footerDiv = popoverEl.querySelector('.gl-popover-footer');
    var linkEl = popoverEl.querySelector('.gl-popover-link');

    if (termSpan) termSpan.textContent = entry.t;
    if (tagSpan) {
      tagSpan.textContent = (entry.icon || '') + ' ' + (entry.cat || entry.disc || '');
    }
    if (bodyDiv) {
      // Show description, truncated to ~200 chars
      var desc = entry.d || '';
      if (desc.length > 200) desc = desc.substring(0, 197) + '…';
      bodyDiv.textContent = desc;
    }

    // Source link
    if (linkEl && footerDiv) {
      if (entry.id && entry.id !== currentSlug) {
        linkEl.textContent = 'Voir la page \u2192';
        linkEl.href = 'page.html?s=' + encodeURIComponent(entry.id);
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

    // Measure popover height
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
          hidePopover();
          // Normal link navigation to page.html?s=slug
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
