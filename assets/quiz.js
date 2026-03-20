// ══════════════════════════════════════════════════════
//  Curiosità — Quiz Engine (Multi-type)
//  Supports: qcm, vf, trou, assoc, ordre
//  Connects to SR for failed answers
// ══════════════════════════════════════════════════════

const QuizEngine = (function () {
  'use strict';

  var currentSlug = '';
  var currentTitle = '';

  // ── Init: detect and setup multi-type questions ──
  function init(container, slug) {
    if (!container) return;
    currentSlug = slug || '';
    currentTitle = '';

    var questions = container.querySelectorAll('.question-block');
    if (!questions.length) return;

    questions.forEach(function (q) {
      var type = q.dataset.type;
      if (!type) return; // QCM without data-type handled by existing initQuiz

      switch (type) {
        case 'vf':   setupVF(q); break;
        case 'trou': setupTrou(q); break;
        case 'assoc': setupAssoc(q); break;
        case 'ordre': setupOrdre(q); break;
      }
    });
  }

  // ── Vrai/Faux — same as QCM but styled differently ──
  function setupVF(q) {
    var opts = q.querySelector('.options');
    if (opts) opts.classList.add('vf-options');
    // VF uses the same click logic as QCM (handled by initQuiz in course-viewer.js)
  }

  // ── Texte à trous ──
  function setupTrou(q) {
    var blanks = q.querySelectorAll('.fill-blank');
    if (!blanks.length) return;

    blanks.forEach(function (blank) {
      var input = document.createElement('input');
      input.type = 'text';
      input.className = 'fill-input';
      input.placeholder = '\u2026';
      input.dataset.answer = blank.dataset.answer || '';
      input.dataset.accept = blank.dataset.accept || '';
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('spellcheck', 'false');
      blank.replaceWith(input);
    });

    // Add verify button
    var fillP = q.querySelector('.q-fill');
    if (!fillP) return;

    var btn = document.createElement('button');
    btn.className = 'btn-quiz btn-verify';
    btn.textContent = 'Vérifier';
    btn.addEventListener('click', function () { verifyTrou(q); });
    fillP.after(btn);

    // Allow Enter key to verify
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        verifyTrou(q);
      }
    });
  }

  function verifyTrou(q) {
    if (q.dataset.answered === '1') return;

    var allCorrect = true;
    var inputs = q.querySelectorAll('.fill-input');

    inputs.forEach(function (input) {
      if (input.disabled) return;

      var accepted = (input.dataset.accept || input.dataset.answer)
        .split(',')
        .map(function (s) { return normalize(s); });
      var userVal = normalize(input.value);

      if (accepted.indexOf(userVal) >= 0) {
        input.classList.add('correct');
      } else {
        input.classList.add('wrong');
        allCorrect = false;
        // Show correct answer
        var hint = document.createElement('span');
        hint.className = 'fill-answer';
        hint.textContent = input.dataset.answer;
        input.after(hint);
      }
      input.disabled = true;
    });

    q.dataset.answered = '1';

    // Show feedback
    var fb = q.querySelector('.q-feedback');
    if (fb) fb.classList.add('show', allCorrect ? 'good' : 'bad');

    // SR integration
    if (!allCorrect) addFailedToSR(q);

    // Trigger quiz navigation update
    triggerAnswered(q, allCorrect);
  }

  // ── Association (matching pairs) ──
  function setupAssoc(q) {
    var pairsEl = q.querySelector('.assoc-pairs');
    if (!pairsEl) return;

    var pairs;
    try { pairs = JSON.parse(pairsEl.dataset.pairs); } catch (e) { return; }
    if (!pairs || !pairs.length) return;

    // Build UI
    var lefts = pairs.map(function (p, i) { return { text: p.left, idx: i }; });
    var rights = shuffle(pairs.map(function (p, i) { return { text: p.right, idx: i }; }));

    var grid = document.createElement('div');
    grid.className = 'assoc-grid';

    var leftCol = document.createElement('div');
    leftCol.className = 'assoc-col';
    lefts.forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'assoc-item assoc-left';
      el.textContent = item.text;
      el.dataset.idx = item.idx;
      leftCol.appendChild(el);
    });

    var rightCol = document.createElement('div');
    rightCol.className = 'assoc-col';
    rights.forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'assoc-item assoc-right';
      el.textContent = item.text;
      el.dataset.idx = item.idx;
      rightCol.appendChild(el);
    });

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    pairsEl.innerHTML = '';
    pairsEl.appendChild(grid);

    // State
    var selectedLeft = null;
    var matchedCount = 0;

    grid.addEventListener('click', function (e) {
      var item = e.target.closest('.assoc-item');
      if (!item || item.classList.contains('matched')) return;

      if (item.classList.contains('assoc-left')) {
        // Select left
        leftCol.querySelectorAll('.assoc-left').forEach(function (el) {
          el.classList.remove('selected');
        });
        item.classList.add('selected');
        selectedLeft = item;
      } else if (item.classList.contains('assoc-right') && selectedLeft) {
        // Try match
        var leftIdx = parseInt(selectedLeft.dataset.idx);
        var rightIdx = parseInt(item.dataset.idx);

        if (leftIdx === rightIdx) {
          // Correct match
          selectedLeft.classList.remove('selected');
          selectedLeft.classList.add('matched');
          item.classList.add('matched');
          matchedCount++;
          selectedLeft = null;

          if (matchedCount === pairs.length) {
            q.dataset.answered = '1';
            var fb = q.querySelector('.q-feedback');
            if (fb) fb.classList.add('show', 'good');
            triggerAnswered(q, true);
          }
        } else {
          // Wrong match
          item.classList.add('wrong-flash');
          selectedLeft.classList.add('wrong-flash');
          var sl = selectedLeft;
          setTimeout(function () {
            item.classList.remove('wrong-flash');
            sl.classList.remove('wrong-flash');
            sl.classList.remove('selected');
          }, 600);
          selectedLeft = null;
        }
      }
    });
  }

  // ── Ordonnancement (drag & drop / click to reorder) ──
  function setupOrdre(q) {
    var itemsEl = q.querySelector('.ordre-items');
    if (!itemsEl) return;

    var correctOrder;
    try { correctOrder = JSON.parse(itemsEl.dataset.items); } catch (e) { return; }
    if (!correctOrder || !correctOrder.length) return;

    // Shuffle for display
    var shuffled = shuffle(correctOrder.map(function (text, i) {
      return { text: text, correctPos: i };
    }));

    var list = document.createElement('div');
    list.className = 'ordre-list';

    shuffled.forEach(function (item, i) {
      var el = document.createElement('div');
      el.className = 'ordre-item';
      el.dataset.correctPos = item.correctPos;
      el.draggable = true;
      el.innerHTML = '<span class="ordre-handle">\u2261</span><span class="ordre-text">' + escHtml(item.text) + '</span>' +
        '<span class="ordre-arrows">' +
        '<button class="ordre-up" title="Monter">\u25B2</button>' +
        '<button class="ordre-down" title="Descendre">\u25BC</button>' +
        '</span>';
      list.appendChild(el);
    });

    // Add verify button
    var btn = document.createElement('button');
    btn.className = 'btn-quiz btn-verify';
    btn.textContent = 'Vérifier l\u2019ordre';
    btn.addEventListener('click', function () { verifyOrdre(q, list); });

    itemsEl.innerHTML = '';
    itemsEl.appendChild(list);
    itemsEl.appendChild(btn);

    // Click arrows to reorder
    list.addEventListener('click', function (e) {
      var upBtn = e.target.closest('.ordre-up');
      var downBtn = e.target.closest('.ordre-down');
      if (!upBtn && !downBtn) return;

      var item = e.target.closest('.ordre-item');
      if (!item) return;

      if (upBtn && item.previousElementSibling) {
        list.insertBefore(item, item.previousElementSibling);
      } else if (downBtn && item.nextElementSibling) {
        list.insertBefore(item.nextElementSibling, item);
      }
    });

    // Drag and drop
    var dragItem = null;

    list.addEventListener('dragstart', function (e) {
      dragItem = e.target.closest('.ordre-item');
      if (dragItem) {
        dragItem.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
      }
    });

    list.addEventListener('dragover', function (e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      var target = e.target.closest('.ordre-item');
      if (target && target !== dragItem) {
        var rect = target.getBoundingClientRect();
        var mid = rect.top + rect.height / 2;
        if (e.clientY < mid) {
          list.insertBefore(dragItem, target);
        } else {
          list.insertBefore(dragItem, target.nextSibling);
        }
      }
    });

    list.addEventListener('dragend', function () {
      if (dragItem) dragItem.classList.remove('dragging');
      dragItem = null;
    });

    // Touch support
    var touchItem = null;
    var touchClone = null;

    list.addEventListener('touchstart', function (e) {
      var item = e.target.closest('.ordre-item');
      if (!item || e.target.closest('.ordre-arrows')) return;
      touchItem = item;
      touchItem.classList.add('dragging');
    }, { passive: true });

    list.addEventListener('touchmove', function (e) {
      if (!touchItem) return;
      e.preventDefault();
      var touch = e.touches[0];
      var target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target) target = target.closest('.ordre-item');
      if (target && target !== touchItem && target.parentElement === list) {
        var rect = target.getBoundingClientRect();
        var mid = rect.top + rect.height / 2;
        if (touch.clientY < mid) {
          list.insertBefore(touchItem, target);
        } else {
          list.insertBefore(touchItem, target.nextSibling);
        }
      }
    }, { passive: false });

    list.addEventListener('touchend', function () {
      if (touchItem) touchItem.classList.remove('dragging');
      touchItem = null;
    });
  }

  function verifyOrdre(q, list) {
    if (q.dataset.answered === '1') return;

    var items = list.querySelectorAll('.ordre-item');
    var allCorrect = true;

    items.forEach(function (item, i) {
      var correctPos = parseInt(item.dataset.correctPos);
      if (correctPos === i) {
        item.classList.add('correct');
      } else {
        item.classList.add('wrong');
        allCorrect = false;
      }
      // Disable dragging
      item.draggable = false;
      item.querySelector('.ordre-arrows').style.display = 'none';
    });

    q.dataset.answered = '1';

    var fb = q.querySelector('.q-feedback');
    if (fb) fb.classList.add('show', allCorrect ? 'good' : 'bad');

    if (!allCorrect) addFailedToSR(q);
    triggerAnswered(q, allCorrect);
  }

  // ── SR integration ──
  function addFailedToSR(q) {
    if (typeof SR === 'undefined') return;

    var qText = q.querySelector('.q-text');
    var fb = q.querySelector('.q-feedback');
    if (!qText) return;

    var front = qText.textContent;
    var back = fb ? fb.textContent : '';

    SR.addCard({
      front: front,
      back: back,
      type: 'quiz-failed',
      source: '/Curiosita/pages/' + currentSlug + '.html',
      sourceTitle: currentTitle,
      tags: ['quiz']
    });
  }

  // ── Trigger parent quiz nav update ──
  function triggerAnswered(q, correct) {
    q.dispatchEvent(new CustomEvent('quiz-answered', {
      bubbles: true,
      detail: { correct: correct }
    }));
  }

  // ── Utilities ──
  function normalize(s) {
    return (s || '').toLowerCase().replace(/\s+/g, '').replace(/['']/g, "'").replace(/[éèêë]/g, 'e').replace(/[àâä]/g, 'a').replace(/[ùûü]/g, 'u').replace(/[ôö]/g, 'o').replace(/[îï]/g, 'i').replace(/ç/g, 'c');
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function escHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  return { init: init };
})();
