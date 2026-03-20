// ══════════════════════════════════════════════════════
//  Curiosità — Memory Training Center
//  Speed Numbers, Speed Cards, Major System trainer
//  Inspired by World Memory Championships techniques
// ══════════════════════════════════════════════════════

const MemoryTraining = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_memtrain';
  var SUITS = ['\u2660', '\u2665', '\u2666', '\u2663'];
  var RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'V', 'D', 'R'];
  var SUIT_COLORS = { '\u2660': '#aaa', '\u2665': '#e55', '\u2666': '#e55', '\u2663': '#aaa' };

  // Major System table (French version)
  var MAJOR_TABLE = {
    0: { sons: 's, z', examples: 'seau, zoo, os' },
    1: { sons: 't, d', examples: 'th\u00e9, d\u00e9, pied' },
    2: { sons: 'n', examples: 'noeud, Anne, \u00e2ne' },
    3: { sons: 'm', examples: 'moi, ami, amas' },
    4: { sons: 'r', examples: 'roi, art, or' },
    5: { sons: 'l', examples: 'lit, aile, \u00eele' },
    6: { sons: 'j, ch, g doux', examples: 'chat, jeu, agir' },
    7: { sons: 'k, g dur, q', examples: 'cas, gai, \u00e9cho' },
    8: { sons: 'f, v', examples: 'feu, vie, chef' },
    9: { sons: 'p, b', examples: 'pas, b\u00e9, aube' }
  };

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function saveResult(type, score, total, time) {
    var data = loadData();
    if (!data.history) data.history = [];
    data.history.push({ type: type, score: score, total: total, time: time, date: Date.now() });
    if (data.history.length > 200) data.history = data.history.slice(-200);
    saveData(data);
  }

  // ══════════════════════════════
  //  SPEED NUMBERS
  // ══════════════════════════════

  function speedNumbers(container, count) {
    count = count || 20;
    var digits = [];
    for (var i = 0; i < count; i++) digits.push(Math.floor(Math.random() * 10));

    var phase = 'memorize'; // memorize → recall → result
    var startTime = Date.now();
    var timerInterval;

    function renderMemorize() {
      var groups = [];
      for (var i = 0; i < digits.length; i += 4) {
        groups.push(digits.slice(i, i + 4).join(''));
      }

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header">' +
            '<span class="mt-badge">Speed Numbers</span>' +
            '<span class="mt-timer" id="mt-timer">0:00</span>' +
          '</div>' +
          '<p class="mt-instruction">M\u00e9morise ces ' + count + ' chiffres. Clique quand tu es pr\u00eat.</p>' +
          '<div class="mt-digits">' + groups.map(function (g) {
            return '<span class="mt-digit-group">' + g + '</span>';
          }).join('') + '</div>' +
          '<button class="mt-btn mt-primary" id="mt-ready">J\u2019ai m\u00e9moris\u00e9 \u2192</button>' +
        '</div>';

      startTime = Date.now();
      timerInterval = setInterval(updateTimer, 1000);

      container.querySelector('#mt-ready').addEventListener('click', function () {
        clearInterval(timerInterval);
        phase = 'recall';
        renderRecall();
      });
    }

    function updateTimer() {
      var el = document.getElementById('mt-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var s = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
    }

    function renderRecall() {
      var inputsHtml = '';
      for (var i = 0; i < count; i++) {
        if (i > 0 && i % 4 === 0) inputsHtml += '<span class="mt-digit-sep"></span>';
        inputsHtml += '<input type="text" class="mt-digit-input" maxlength="1" data-idx="' + i + '" inputmode="numeric" autocomplete="off">';
      }

      var elapsed = Math.round((Date.now() - startTime) / 1000);

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header">' +
            '<span class="mt-badge">Speed Numbers</span>' +
            '<span class="mt-timer">M\u00e9moris\u00e9 en ' + elapsed + 's</span>' +
          '</div>' +
          '<p class="mt-instruction">\u00c9cris les chiffres dans l\u2019ordre :</p>' +
          '<div class="mt-recall-grid">' + inputsHtml + '</div>' +
          '<button class="mt-btn mt-primary" id="mt-check">V\u00e9rifier \u2192</button>' +
        '</div>';

      // Auto-advance inputs
      var inputs = container.querySelectorAll('.mt-digit-input');
      inputs.forEach(function (inp, idx) {
        inp.addEventListener('input', function () {
          if (inp.value.length === 1 && idx < inputs.length - 1) {
            inputs[idx + 1].focus();
          }
        });
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Backspace' && !inp.value && idx > 0) {
            inputs[idx - 1].focus();
          }
        });
      });
      inputs[0].focus();

      container.querySelector('#mt-check').addEventListener('click', function () {
        var answers = [];
        inputs.forEach(function (inp) { answers.push(inp.value); });
        showResult(answers, elapsed);
      });
    }

    function showResult(answers, memTime) {
      var correct = 0;
      var detailHtml = '';
      digits.forEach(function (d, i) {
        var userVal = answers[i] || '';
        var isCorrect = userVal === String(d);
        if (isCorrect) correct++;
        detailHtml += '<span class="mt-result-digit ' + (isCorrect ? 'correct' : 'wrong') + '">' +
          (isCorrect ? d : (userVal || '_')) + '</span>';
        if (i > 0 && (i + 1) % 4 === 0) detailHtml += '<span class="mt-digit-sep"></span>';
      });

      var pct = Math.round(correct / count * 100);
      saveResult('speed-numbers', correct, count, memTime);

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header"><span class="mt-badge">Speed Numbers</span></div>' +
          '<div class="mt-score">' + correct + ' / ' + count + '</div>' +
          '<div class="mt-score-pct">' + pct + '% correct \u2014 m\u00e9moris\u00e9 en ' + memTime + 's</div>' +
          '<div class="mt-result-digits">' + detailHtml + '</div>' +
          '<p class="mt-expected">Attendu : ' + digits.join('') + '</p>' +
          '<div class="mt-actions">' +
            '<button class="mt-btn mt-primary" onclick="MemoryTraining.speedNumbers(this.closest(\'.mt-container\'),' + count + ')">Recommencer</button>' +
            '<button class="mt-btn mt-secondary" onclick="MemoryTraining.speedNumbers(this.closest(\'.mt-container\'),' + Math.min(count + 10, 100) + ')">+10 chiffres</button>' +
          '</div>' +
        '</div>';
    }

    renderMemorize();
  }

  // ══════════════════════════════
  //  SPEED CARDS
  // ══════════════════════════════

  function speedCards(container, count) {
    count = count || 10;
    var deck = [];
    // Build and shuffle deck
    SUITS.forEach(function (s) {
      RANKS.forEach(function (r) {
        deck.push({ suit: s, rank: r });
      });
    });
    // Fisher-Yates shuffle
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = deck[i]; deck[i] = deck[j]; deck[j] = t;
    }
    deck = deck.slice(0, count);

    var currentCard = 0;
    var startTime = Date.now();

    function cardHtml(card, small) {
      var color = SUIT_COLORS[card.suit] || '#aaa';
      var cls = small ? 'mt-card mt-card-sm' : 'mt-card';
      return '<div class="' + cls + '" style="color:' + color + '">' +
        '<span class="mt-card-rank">' + card.rank + '</span>' +
        '<span class="mt-card-suit">' + card.suit + '</span>' +
      '</div>';
    }

    function renderMemorize() {
      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header">' +
            '<span class="mt-badge">Speed Cards</span>' +
            '<span class="mt-timer">' + (currentCard + 1) + ' / ' + count + '</span>' +
          '</div>' +
          '<p class="mt-instruction">M\u00e9morise chaque carte dans l\u2019ordre.</p>' +
          '<div class="mt-card-display">' + cardHtml(deck[currentCard]) + '</div>' +
          '<div class="mt-card-nav">' +
            (currentCard > 0 ? '<button class="mt-btn mt-secondary" id="mt-prev">\u2190</button>' : '<span></span>') +
            '<button class="mt-btn mt-primary" id="mt-next">' +
              (currentCard < count - 1 ? 'Suivante \u2192' : 'Rappel \u2192') +
            '</button>' +
          '</div>' +
        '</div>';

      container.querySelector('#mt-next').addEventListener('click', function () {
        if (currentCard < count - 1) {
          currentCard++;
          renderMemorize();
        } else {
          renderRecall();
        }
      });
      var prev = container.querySelector('#mt-prev');
      if (prev) prev.addEventListener('click', function () {
        currentCard--;
        renderMemorize();
      });
    }

    function renderRecall() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);
      // Show all available cards to drag/select
      var allCards = deck.slice();
      // Shuffle for selection
      var shuffled = allCards.slice();
      for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = t;
      }

      var selected = [];

      function renderRecallUI() {
        var availableHtml = shuffled.filter(function (c) {
          return !selected.some(function (s) { return s.rank === c.rank && s.suit === c.suit; });
        }).map(function (c, i) {
          return '<div class="mt-card-pick" data-ridx="' + i + '" data-rank="' + c.rank + '" data-suit="' + c.suit + '">' +
            cardHtml(c, true) + '</div>';
        }).join('');

        var selectedHtml = selected.map(function (c, i) {
          return '<div class="mt-card-selected">' +
            '<span class="mt-card-pos">' + (i + 1) + '</span>' +
            cardHtml(c, true) +
          '</div>';
        }).join('');
        if (selected.length < count) {
          selectedHtml += '<div class="mt-card-placeholder">' + (selected.length + 1) + '</div>';
        }

        container.innerHTML =
          '<div class="mt-exercise">' +
            '<div class="mt-header"><span class="mt-badge">Speed Cards</span><span class="mt-timer">' + elapsed + 's</span></div>' +
            '<p class="mt-instruction">S\u00e9lectionne les cartes dans l\u2019ordre (' + selected.length + '/' + count + ') :</p>' +
            '<div class="mt-selected-row">' + selectedHtml + '</div>' +
            '<div class="mt-available-row">' + availableHtml + '</div>' +
            '<div class="mt-actions">' +
              (selected.length > 0 ? '<button class="mt-btn mt-secondary" id="mt-undo">Annuler</button>' : '') +
              (selected.length === count ? '<button class="mt-btn mt-primary" id="mt-verify">V\u00e9rifier \u2192</button>' : '') +
            '</div>' +
          '</div>';

        container.querySelectorAll('.mt-card-pick').forEach(function (el) {
          el.addEventListener('click', function () {
            var rank = el.dataset.rank;
            var suit = el.dataset.suit;
            selected.push({ rank: rank, suit: suit });
            renderRecallUI();
          });
        });

        var undo = container.querySelector('#mt-undo');
        if (undo) undo.addEventListener('click', function () { selected.pop(); renderRecallUI(); });

        var verify = container.querySelector('#mt-verify');
        if (verify) verify.addEventListener('click', function () { showCardResult(selected, elapsed); });
      }

      renderRecallUI();
    }

    function showCardResult(selected, memTime) {
      var correct = 0;
      var html = '';
      deck.forEach(function (card, i) {
        var picked = selected[i] || {};
        var ok = picked.rank === card.rank && picked.suit === card.suit;
        if (ok) correct++;
        html += '<div class="mt-card-result ' + (ok ? 'correct' : 'wrong') + '">' +
          '<span class="mt-card-pos">' + (i + 1) + '</span>' +
          cardHtml(card, true) +
          (!ok ? '<span class="mt-card-yours">\u2192 ' + (picked.rank || '?') + (picked.suit || '') + '</span>' : '') +
        '</div>';
      });

      saveResult('speed-cards', correct, count, memTime);

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header"><span class="mt-badge">Speed Cards</span></div>' +
          '<div class="mt-score">' + correct + ' / ' + count + '</div>' +
          '<div class="mt-score-pct">M\u00e9moris\u00e9 en ' + memTime + 's</div>' +
          '<div class="mt-card-results">' + html + '</div>' +
          '<div class="mt-actions">' +
            '<button class="mt-btn mt-primary" onclick="MemoryTraining.speedCards(this.closest(\'.mt-container\'),' + count + ')">Recommencer</button>' +
            '<button class="mt-btn mt-secondary" onclick="MemoryTraining.speedCards(this.closest(\'.mt-container\'),' + Math.min(count + 5, 52) + ')">+5 cartes</button>' +
          '</div>' +
        '</div>';
    }

    renderMemorize();
  }

  // ══════════════════════════════
  //  MAJOR SYSTEM TRAINER
  // ══════════════════════════════

  function majorSystem(container) {
    var mode = 'learn'; // learn → quiz

    function renderLearn() {
      var tableHtml = '';
      for (var d = 0; d <= 9; d++) {
        var entry = MAJOR_TABLE[d];
        tableHtml += '<div class="mt-major-row">' +
          '<span class="mt-major-digit">' + d + '</span>' +
          '<span class="mt-major-sons">' + entry.sons + '</span>' +
          '<span class="mt-major-examples">' + entry.examples + '</span>' +
        '</div>';
      }

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header"><span class="mt-badge">Syst\u00e8me Majeur</span></div>' +
          '<p class="mt-instruction">Le syst\u00e8me majeur convertit chaque chiffre en sons consonantiques. Les voyelles servent de remplissage pour former des mots.</p>' +
          '<div class="mt-major-table">' + tableHtml + '</div>' +
          '<button class="mt-btn mt-primary" onclick="MemoryTraining.majorQuiz(this.closest(\'.mt-container\'))">S\u2019entra\u00eener \u2192</button>' +
        '</div>';
    }

    renderLearn();
  }

  function majorQuiz(container) {
    var digits = Object.keys(MAJOR_TABLE);
    var shuffled = digits.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = t;
    }

    var currentQ = 0;
    var correct = 0;

    function renderQ() {
      var d = parseInt(shuffled[currentQ]);
      var entry = MAJOR_TABLE[d];
      // Generate options (correct + 2 random wrong)
      var options = [entry.sons];
      while (options.length < 3) {
        var rand = MAJOR_TABLE[Math.floor(Math.random() * 10)].sons;
        if (options.indexOf(rand) === -1) options.push(rand);
      }
      // Shuffle options
      for (var i = options.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = options[i]; options[i] = options[j]; options[j] = t;
      }

      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header"><span class="mt-badge">Syst\u00e8me Majeur — Quiz</span><span class="mt-timer">' + (currentQ + 1) + '/10</span></div>' +
          '<p class="mt-instruction">Quel son correspond au chiffre :</p>' +
          '<div class="mt-major-quiz-digit">' + d + '</div>' +
          '<div class="mt-options">' + options.map(function (o) {
            return '<button class="mt-quiz-opt" data-val="' + o + '">' + o + '</button>';
          }).join('') + '</div>' +
        '</div>';

      container.querySelectorAll('.mt-quiz-opt').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var isCorrect = btn.dataset.val === entry.sons;
          if (isCorrect) correct++;
          btn.classList.add(isCorrect ? 'correct' : 'wrong');
          if (!isCorrect) {
            container.querySelectorAll('.mt-quiz-opt').forEach(function (b) {
              if (b.dataset.val === entry.sons) b.classList.add('correct');
            });
          }
          container.querySelectorAll('.mt-quiz-opt').forEach(function (b) { b.disabled = true; });

          setTimeout(function () {
            currentQ++;
            if (currentQ < 10) renderQ();
            else showMajorResult();
          }, 1000);
        });
      });
    }

    function showMajorResult() {
      saveResult('major-system', correct, 10, 0);
      container.innerHTML =
        '<div class="mt-exercise">' +
          '<div class="mt-header"><span class="mt-badge">Syst\u00e8me Majeur</span></div>' +
          '<div class="mt-score">' + correct + ' / 10</div>' +
          '<div class="mt-actions">' +
            '<button class="mt-btn mt-primary" onclick="MemoryTraining.majorQuiz(this.closest(\'.mt-container\'))">Recommencer</button>' +
            '<button class="mt-btn mt-secondary" onclick="MemoryTraining.majorSystem(this.closest(\'.mt-container\'))">Revoir la table</button>' +
          '</div>' +
        '</div>';
    }

    renderQ();
  }

  // ══════════════════════════════
  //  RENDER TRAINING CENTER
  // ══════════════════════════════

  function renderCenter(el) {
    if (!el) return;

    var data = loadData();
    var history = data.history || [];

    // Stats by type
    var stats = {};
    history.forEach(function (h) {
      if (!stats[h.type]) stats[h.type] = { best: 0, sessions: 0, lastPct: 0 };
      stats[h.type].sessions++;
      var pct = Math.round(h.score / h.total * 100);
      stats[h.type].lastPct = pct;
      if (pct > stats[h.type].best) stats[h.type].best = pct;
    });

    var exercises = [
      { id: 'speed-numbers', name: 'Speed Numbers', icon: '\uD83D\uDD22', desc: 'M\u00e9morise des s\u00e9quences de chiffres', action: 'speedNumbers', arg: 20 },
      { id: 'speed-cards', name: 'Speed Cards', icon: '\uD83C\uDCA1', desc: 'M\u00e9morise un jeu de cartes dans l\u2019ordre', action: 'speedCards', arg: 10 },
      { id: 'major-system', name: 'Syst\u00e8me Majeur', icon: '\uD83E\uDDE0', desc: 'Apprends \u00e0 convertir les chiffres en sons', action: 'majorSystem', arg: null },
    ];

    var cardsHtml = exercises.map(function (ex) {
      var s = stats[ex.id] || {};
      return '<div class="mt-exercise-card" onclick="MemoryTraining.launch(\'' + ex.action + '\',' + (ex.arg || 'null') + ')">' +
        '<div class="mt-exercise-icon">' + ex.icon + '</div>' +
        '<div class="mt-exercise-info">' +
          '<div class="mt-exercise-name">' + ex.name + '</div>' +
          '<div class="mt-exercise-desc">' + ex.desc + '</div>' +
          (s.sessions ? '<div class="mt-exercise-stat">' + s.sessions + ' session' + (s.sessions > 1 ? 's' : '') + ' \u2014 record : ' + s.best + '%</div>' : '') +
        '</div>' +
        '<span class="mt-exercise-arrow">\u203A</span>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div class="mt-center">' +
        '<h3 class="sr-p-title">Entra\u00eenement m\u00e9moire</h3>' +
        '<p class="sr-p-desc">Techniques utilis\u00e9es aux Championnats du Monde de M\u00e9moire. Entra\u00eene-toi progressivement.</p>' +
        '<div class="mt-exercises">' + cardsHtml + '</div>' +
        '<div class="mt-container" id="mt-active"></div>' +
      '</div>';
  }

  function launch(action, arg) {
    var container = document.getElementById('mt-active');
    if (!container) return;
    container.scrollIntoView({ behavior: 'smooth' });

    switch (action) {
      case 'speedNumbers': speedNumbers(container, arg); break;
      case 'speedCards': speedCards(container, arg); break;
      case 'majorSystem': majorSystem(container); break;
      case 'majorQuiz': majorQuiz(container); break;
    }
  }

  return {
    renderCenter: renderCenter,
    launch: launch,
    speedNumbers: speedNumbers,
    speedCards: speedCards,
    majorSystem: majorSystem,
    majorQuiz: majorQuiz
  };
})();
