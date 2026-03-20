// ══════════════════════════════════════════════════════
//  Curiosita — Memory Beginner Games
//  Simon, Paires, Objet manquant, Suite de chiffres,
//  Grille eclair — 5 fun progressive memory exercises
// ══════════════════════════════════════════════════════

var MemoryBeginner = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_membeginner';

  // ── Emoji pools ──
  var PAIRS_EMOJIS = ['🍎','🌟','🎵','🚗','🌙','🎨','🦋','🌺','🎯','🍕'];
  var MISSING_EMOJIS = ['🍎','🚗','⭐','🎵','🌙','🎨','🦋','🌺','🎯','🍕','📚','🎸','🌈','🏀','🎪'];

  // ── Encouraging messages ──
  var MSG_GREAT = ['Bravo !', 'Bien joué !', 'Excellent !', 'Super !', 'Parfait !'];
  var MSG_OK = ['Pas mal !', 'Continue !', 'Tu progresses !'];
  var MSG_RETRY = ['Essaie encore !', 'Tu feras mieux !', 'Courage !'];

  function pickMsg(ratio) {
    var pool = ratio >= 0.8 ? MSG_GREAT : ratio >= 0.5 ? MSG_OK : MSG_RETRY;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // ── Persistence ──
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

  // ── Utilities ──
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function formatTime(ms) {
    var s = Math.round(ms / 1000);
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }

  function getBestForType(type) {
    var data = loadData();
    if (!data.history) return null;
    var best = null;
    data.history.forEach(function (h) {
      if (h.type === type && (best === null || h.score > best.score)) best = h;
    });
    return best;
  }

  // ── CSS injection ──
  var cssInjected = false;
  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;
    var s = document.createElement('style');
    s.textContent =
      '.mb-panel{max-width:700px;margin:0 auto}' +
      '.mb-title{font-size:1.3rem;font-weight:700;color:var(--text,#f0ede8);margin-bottom:4px}' +
      '.mb-desc{color:var(--muted,#7a7870);font-size:.9rem;margin-bottom:18px}' +
      '.mb-games{display:flex;flex-direction:column;gap:10px;margin-bottom:20px}' +
      '.mb-game-card{display:flex;align-items:center;gap:14px;background:var(--surface,#141418);border:1px solid var(--border,rgba(240,237,232,.08));border-radius:10px;padding:14px 16px;cursor:pointer;transition:background .15s,border-color .15s}' +
      '.mb-game-card:hover{background:var(--surface2,#1c1c22);border-color:rgba(232,201,122,.2)}' +
      '.mb-game-icon{font-size:1.7rem;flex-shrink:0;width:44px;text-align:center}' +
      '.mb-game-info{flex:1;min-width:0}' +
      '.mb-game-name{font-weight:600;color:var(--text,#f0ede8);font-size:.95rem}' +
      '.mb-game-sub{color:var(--muted,#7a7870);font-size:.8rem;margin-top:2px}' +
      '.mb-game-arrow{color:var(--muted,#7a7870);font-size:1.3rem}' +

      '.mb-ex{background:var(--surface,#141418);border-radius:12px;padding:24px;margin-top:16px;animation:mb-fadeIn .3s ease}' +
      '@keyframes mb-fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}' +
      '.mb-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}' +
      '.mb-badge{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--accent,#e8c97a);background:rgba(232,201,122,.1);padding:4px 10px;border-radius:6px}' +
      '.mb-timer{font-size:.85rem;color:var(--muted,#7a7870);font-variant-numeric:tabular-nums}' +
      '.mb-instr{color:var(--muted,#7a7870);font-size:.9rem;margin-bottom:16px}' +
      '.mb-btn{border:none;cursor:pointer;padding:12px 24px;border-radius:8px;font-size:.95rem;font-weight:600;transition:opacity .15s,transform .1s;min-width:60px;min-height:48px}' +
      '.mb-btn:active{transform:scale(.96)}' +
      '.mb-primary{background:var(--accent,#e8c97a);color:#0c0c0e}' +
      '.mb-secondary{background:var(--surface2,#1c1c22);color:var(--text,#f0ede8);border:1px solid var(--border,rgba(240,237,232,.08))}' +
      '.mb-actions{display:flex;gap:10px;margin-top:18px;flex-wrap:wrap}' +

      /* Level select */
      '.mb-levels{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px}' +
      '.mb-lvl-btn{padding:10px 20px;border-radius:8px;border:1px solid var(--border,rgba(240,237,232,.08));background:var(--surface2,#1c1c22);color:var(--text,#f0ede8);cursor:pointer;font-size:.9rem;font-weight:600;transition:background .15s,border-color .15s;min-height:48px}' +
      '.mb-lvl-btn:hover{border-color:var(--accent,#e8c97a);background:rgba(232,201,122,.08)}' +

      /* Score screen */
      '.mb-score{text-align:center;font-size:2.2rem;font-weight:700;color:var(--accent,#e8c97a);margin:16px 0 4px}' +
      '.mb-score-sub{text-align:center;color:var(--muted,#7a7870);font-size:.9rem;margin-bottom:6px}' +
      '.mb-msg{text-align:center;font-size:1.15rem;color:var(--green,#69f0ae);font-weight:600;margin-bottom:14px}' +

      /* Simon */
      '.mb-simon-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:280px;margin:0 auto 18px}' +
      '.mb-simon-btn{width:100%;aspect-ratio:1;border-radius:14px;border:none;cursor:pointer;font-size:1.5rem;transition:filter .15s,transform .1s;opacity:.7}' +
      '.mb-simon-btn.mb-lit{opacity:1;filter:brightness(1.5);transform:scale(1.08)}' +
      '.mb-simon-btn:active{transform:scale(.95)}' +
      '.mb-simon-btn[disabled]{cursor:default}' +

      /* Pairs */
      '.mb-pairs-grid{display:grid;gap:10px;margin:0 auto 18px;max-width:400px}' +
      '.mb-card-cell{perspective:600px}' +
      '.mb-card{width:100%;aspect-ratio:1;border-radius:10px;cursor:pointer;position:relative;transform-style:preserve-3d;transition:transform .4s ease}' +
      '.mb-card.mb-flipped{transform:rotateY(180deg)}' +
      '.mb-card-face{position:absolute;inset:0;border-radius:10px;display:flex;align-items:center;justify-content:center;backface-visibility:hidden}' +
      '.mb-card-back{background:var(--surface2,#1c1c22);border:2px solid var(--border,rgba(240,237,232,.08));font-size:1.4rem;color:var(--muted,#7a7870);font-weight:700}' +
      '.mb-card-front{background:var(--surface,#141418);border:2px solid var(--accent,#e8c97a);transform:rotateY(180deg);font-size:1.8rem}' +
      '.mb-card.mb-matched .mb-card-front{border-color:var(--green,#69f0ae);background:rgba(105,240,174,.08)}' +

      /* Missing object */
      '.mb-obj-display{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin:16px 0;min-height:80px}' +
      '.mb-obj-item{font-size:2.4rem;padding:10px;background:var(--surface2,#1c1c22);border-radius:10px;min-width:60px;min-height:60px;display:flex;align-items:center;justify-content:center;transition:opacity .3s,transform .3s}' +
      '.mb-choices{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:16px}' +
      '.mb-choice-btn{font-size:2rem;padding:10px 16px;border-radius:10px;border:2px solid var(--border,rgba(240,237,232,.08));background:var(--surface2,#1c1c22);cursor:pointer;min-width:60px;min-height:60px;transition:border-color .15s,background .15s}' +
      '.mb-choice-btn:hover{border-color:var(--accent,#e8c97a)}' +
      '.mb-choice-btn.mb-correct{border-color:var(--green,#69f0ae);background:rgba(105,240,174,.1)}' +
      '.mb-choice-btn.mb-wrong{border-color:var(--accent2,#c97a7a);background:rgba(201,122,122,.1)}' +

      /* Number sequence */
      '.mb-big-num{font-size:3.5rem;font-weight:700;color:var(--accent,#e8c97a);text-align:center;margin:30px 0;animation:mb-fadeIn .3s ease;font-variant-numeric:tabular-nums}' +
      '.mb-seq-input{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:16px 0}' +
      '.mb-seq-box{width:48px;height:56px;border-radius:8px;border:2px solid var(--border,rgba(240,237,232,.08));background:var(--surface2,#1c1c22);color:var(--text,#f0ede8);font-size:1.4rem;text-align:center;font-weight:600;outline:none;transition:border-color .15s}' +
      '.mb-seq-box:focus{border-color:var(--accent,#e8c97a)}' +
      '.mb-seq-box.mb-correct{border-color:var(--green,#69f0ae)}' +
      '.mb-seq-box.mb-wrong{border-color:var(--accent2,#c97a7a)}' +

      /* Flash grid */
      '.mb-grid-wrap{display:flex;justify-content:center;margin:16px 0}' +
      '.mb-grid{display:inline-grid;gap:6px}' +
      '.mb-grid-cell{width:52px;height:52px;border-radius:8px;border:2px solid var(--border,rgba(240,237,232,.08));background:var(--surface2,#1c1c22);cursor:pointer;transition:background .2s,border-color .2s}' +
      '.mb-grid-cell.mb-highlight{background:var(--accent,#e8c97a);border-color:var(--accent,#e8c97a)}' +
      '.mb-grid-cell.mb-selected{background:rgba(232,201,122,.3);border-color:var(--accent,#e8c97a)}' +
      '.mb-grid-cell.mb-correct-cell{background:var(--green,#69f0ae);border-color:var(--green,#69f0ae)}' +
      '.mb-grid-cell.mb-wrong-cell{background:var(--accent2,#c97a7a);border-color:var(--accent2,#c97a7a)}' +
      '.mb-grid-cell.mb-missed-cell{background:rgba(232,201,122,.15);border-color:var(--accent,#e8c97a)}' +
      '.mb-grid-cell[disabled]{cursor:default}' +

      /* Flash effects */
      '.mb-flash-green{animation:mb-flashG .5s}' +
      '@keyframes mb-flashG{0%{box-shadow:0 0 0 0 rgba(105,240,174,.5)}50%{box-shadow:0 0 20px 4px rgba(105,240,174,.3)}100%{box-shadow:none}}' +
      '.mb-flash-red{animation:mb-flashR .5s}' +
      '@keyframes mb-flashR{0%{box-shadow:0 0 0 0 rgba(201,122,122,.5)}50%{box-shadow:0 0 20px 4px rgba(201,122,122,.3)}100%{box-shadow:none}}' +

      /* Responsive */
      '@media(max-width:480px){' +
        '.mb-simon-grid{max-width:220px;gap:8px}' +
        '.mb-big-num{font-size:2.6rem}' +
        '.mb-grid-cell{width:42px;height:42px}' +
        '.mb-obj-item{font-size:1.8rem;min-width:48px;min-height:48px}' +
        '.mb-choice-btn{font-size:1.6rem;min-width:48px;min-height:48px}' +
      '}';
    document.head.appendChild(s);
  }

  // ══════════════════════════════
  //  GAME CONFIGS
  // ══════════════════════════════

  var GAMES = [
    { id: 'simon', icon: '🔴', name: 'Simon', desc: 'Reproduis la sequence de couleurs', actions: ['simon'] },
    { id: 'pairs', icon: '🃏', name: 'Paires', desc: 'Retrouve les paires de cartes identiques', actions: ['pairs'] },
    { id: 'missing', icon: '❓', name: 'Objet manquant', desc: 'Quel objet a disparu ?', actions: ['missing'] },
    { id: 'sequence', icon: '🔢', name: 'Suite de chiffres', desc: 'Memorise une suite de chiffres', actions: ['sequence'] },
    { id: 'flashGrid', icon: '⚡', name: 'Grille eclair', desc: 'Reproduis le motif affiche brievement', actions: ['flashGrid'] }
  ];

  var LEVEL_LABELS = { easy: 'Facile', normal: 'Normal', hard: 'Difficile', expert: 'Expert' };

  // ══════════════════════════════
  //  LEVEL SELECT SCREEN
  // ══════════════════════════════

  function renderLevelSelect(container, gameName, instruction, levels, onSelect) {
    var html = '<div class="mb-ex">' +
      '<div class="mb-header"><span class="mb-badge">' + gameName + '</span></div>' +
      '<p class="mb-instr">' + instruction + '</p>' +
      '<div class="mb-levels">';
    levels.forEach(function (lv) {
      html += '<button class="mb-lvl-btn" data-lv="' + lv + '">' + LEVEL_LABELS[lv] + '</button>';
    });
    html += '</div></div>';
    container.innerHTML = html;
    container.querySelectorAll('.mb-lvl-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { onSelect(btn.getAttribute('data-lv')); });
    });
  }

  function renderScore(container, badge, score, total, timeMs, gameAction, level, nextLevel) {
    var pct = total > 0 ? Math.round(score / total * 100) : 0;
    var msg = pickMsg(total > 0 ? score / total : 0);
    var html = '<div class="mb-ex">' +
      '<div class="mb-header"><span class="mb-badge">' + badge + '</span></div>' +
      '<div class="mb-msg">' + msg + '</div>' +
      '<div class="mb-score">' + score + ' / ' + total + '</div>' +
      '<div class="mb-score-sub">' + pct + '% — ' + formatTime(timeMs) + '</div>' +
      '<div class="mb-actions">' +
        '<button class="mb-btn mb-primary" data-act="replay">Rejouer</button>';
    if (nextLevel) {
      html += '<button class="mb-btn mb-secondary" data-act="next">Niveau suivant</button>';
    }
    html += '</div></div>';
    container.innerHTML = html;
    container.querySelector('[data-act="replay"]').addEventListener('click', function () {
      launch(gameAction, level);
    });
    if (nextLevel) {
      container.querySelector('[data-act="next"]').addEventListener('click', function () {
        launch(gameAction, nextLevel);
      });
    }
  }

  function nextLevelAfter(level, available) {
    var idx = available.indexOf(level);
    return idx >= 0 && idx < available.length - 1 ? available[idx + 1] : null;
  }

  // ══════════════════════════════
  //  1. SIMON
  // ══════════════════════════════

  var SIMON_COLORS = [
    { bg: '#d94040', lit: '#ff6666' },
    { bg: '#3070d0', lit: '#66a0ff' },
    { bg: '#30a050', lit: '#60e080' },
    { bg: '#d0a030', lit: '#ffe060' }
  ];
  var SIMON_LEVELS = {
    easy:   { flash: 600, pause: 300 },
    normal: { flash: 400, pause: 200 },
    hard:   { flash: 250, pause: 150 }
  };

  function simon(container, level) {
    level = level || 'easy';
    var cfg = SIMON_LEVELS[level] || SIMON_LEVELS.easy;
    var allLevels = ['easy', 'normal', 'hard'];
    var sequence = [];
    var playerIdx = 0;
    var accepting = false;
    var startTime = Date.now();

    function addToSequence() {
      sequence.push(Math.floor(Math.random() * 4));
    }

    function render() {
      container.innerHTML = '<div class="mb-ex">' +
        '<div class="mb-header">' +
          '<span class="mb-badge">Simon — ' + LEVEL_LABELS[level] + '</span>' +
          '<span class="mb-timer">Sequence : ' + sequence.length + '</span>' +
        '</div>' +
        '<p class="mb-instr">Observe la sequence, puis reproduis-la dans le meme ordre.</p>' +
        '<div class="mb-simon-grid">' +
          SIMON_COLORS.map(function (c, i) {
            return '<button class="mb-simon-btn" data-idx="' + i + '" style="background:' + c.bg + '" disabled></button>';
          }).join('') +
        '</div>' +
        '<p class="mb-instr" id="mb-simon-status" style="text-align:center"></p>' +
      '</div>';
    }

    function lightBtn(idx, duration, cb) {
      var btn = container.querySelector('[data-idx="' + idx + '"]');
      if (!btn) return;
      btn.classList.add('mb-lit');
      btn.style.background = SIMON_COLORS[idx].lit;
      setTimeout(function () {
        btn.classList.remove('mb-lit');
        btn.style.background = SIMON_COLORS[idx].bg;
        if (cb) setTimeout(cb, cfg.pause);
      }, duration);
    }

    function playSequence() {
      accepting = false;
      var status = container.querySelector('#mb-simon-status');
      if (status) status.textContent = 'Observe...';
      var btns = container.querySelectorAll('.mb-simon-btn');
      btns.forEach(function (b) { b.disabled = true; });

      var i = 0;
      function step() {
        if (i >= sequence.length) {
          accepting = true;
          playerIdx = 0;
          if (status) status.textContent = 'A toi !';
          btns.forEach(function (b) { b.disabled = false; });
          return;
        }
        lightBtn(sequence[i], cfg.flash, function () { i++; step(); });
      }
      setTimeout(step, 400);
    }

    function onPlayerClick(idx) {
      if (!accepting) return;
      lightBtn(idx, 150, null);

      if (idx === sequence[playerIdx]) {
        playerIdx++;
        if (playerIdx >= sequence.length) {
          // success — next round
          accepting = false;
          var status = container.querySelector('#mb-simon-status');
          if (status) status.textContent = '';
          var timer = container.querySelector('.mb-timer');
          setTimeout(function () {
            addToSequence();
            if (timer) timer.textContent = 'Sequence : ' + sequence.length;
            playSequence();
          }, 600);
        }
      } else {
        // game over
        accepting = false;
        var elapsed = Date.now() - startTime;
        var score = sequence.length - 1; // longest correct
        saveResult('simon-' + level, score, score, Math.round(elapsed / 1000));
        renderScore(container, 'Simon', score, score, elapsed, 'simon', level, nextLevelAfter(level, allLevels));
      }
    }

    render();
    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.mb-simon-btn');
      if (btn && !btn.disabled) onPlayerClick(parseInt(btn.getAttribute('data-idx')));
    });

    addToSequence();
    playSequence();
  }

  // ══════════════════════════════
  //  2. PAIRES (Memory Match)
  // ══════════════════════════════

  var PAIRS_LEVELS = {
    easy:   { cols: 3, rows: 2 },
    normal: { cols: 4, rows: 3 },
    hard:   { cols: 4, rows: 4 },
    expert: { cols: 5, rows: 4 }
  };

  function pairs(container, level) {
    level = level || 'easy';
    var cfg = PAIRS_LEVELS[level] || PAIRS_LEVELS.easy;
    var allLevels = ['easy', 'normal', 'hard', 'expert'];
    var total = cfg.cols * cfg.rows;
    var numPairs = total / 2;
    var emojis = shuffle(PAIRS_EMOJIS).slice(0, numPairs);
    var deck = shuffle(emojis.concat(emojis));

    var flipped = [];
    var matched = [];
    var moves = 0;
    var locked = false;
    var startTime = Date.now();

    function render() {
      container.innerHTML = '<div class="mb-ex">' +
        '<div class="mb-header">' +
          '<span class="mb-badge">Paires — ' + LEVEL_LABELS[level] + '</span>' +
          '<span class="mb-timer" id="mb-pairs-info">Coups : 0</span>' +
        '</div>' +
        '<p class="mb-instr">Retourne les cartes pour trouver les ' + numPairs + ' paires.</p>' +
        '<div class="mb-pairs-grid" style="grid-template-columns:repeat(' + cfg.cols + ',1fr);max-width:' + (cfg.cols * 75) + 'px">' +
          deck.map(function (emoji, i) {
            return '<div class="mb-card-cell"><div class="mb-card" data-idx="' + i + '">' +
              '<div class="mb-card-face mb-card-back">?</div>' +
              '<div class="mb-card-face mb-card-front">' + emoji + '</div>' +
            '</div></div>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    function flipCard(idx) {
      var card = container.querySelector('.mb-card[data-idx="' + idx + '"]');
      if (card) card.classList.add('mb-flipped');
    }

    function unflipCard(idx) {
      var card = container.querySelector('.mb-card[data-idx="' + idx + '"]');
      if (card) card.classList.remove('mb-flipped');
    }

    function markMatched(idx) {
      var card = container.querySelector('.mb-card[data-idx="' + idx + '"]');
      if (card) card.classList.add('mb-matched');
    }

    function updateInfo() {
      var el = container.querySelector('#mb-pairs-info');
      if (el) el.textContent = 'Coups : ' + moves;
    }

    function onCardClick(idx) {
      if (locked) return;
      if (matched.indexOf(idx) >= 0) return;
      if (flipped.indexOf(idx) >= 0) return;

      flipped.push(idx);
      flipCard(idx);

      if (flipped.length === 2) {
        moves++;
        updateInfo();
        locked = true;
        var a = flipped[0], b = flipped[1];

        if (deck[a] === deck[b]) {
          matched.push(a, b);
          markMatched(a);
          markMatched(b);
          flipped = [];
          locked = false;

          if (matched.length === total) {
            // all found
            var elapsed = Date.now() - startTime;
            var bestMoves = numPairs; // theoretical best
            var score = Math.max(0, Math.round((1 - (moves - bestMoves) / (bestMoves * 3)) * numPairs));
            saveResult('pairs-' + level, score, numPairs, Math.round(elapsed / 1000));
            setTimeout(function () {
              renderPairsScore(container, moves, numPairs, elapsed, level, allLevels);
            }, 500);
          }
        } else {
          setTimeout(function () {
            unflipCard(a);
            unflipCard(b);
            flipped = [];
            locked = false;
          }, 800);
        }
      }
    }

    render();
    container.addEventListener('click', function (e) {
      var card = e.target.closest('.mb-card');
      if (card) onCardClick(parseInt(card.getAttribute('data-idx')));
    });
  }

  // Override renderScore for pairs (custom display)
  function renderPairsScore(container, moves, numPairs, elapsed, level, allLevels) {
    var ratio = Math.max(0, 1 - (moves - numPairs) / (numPairs * 3));
    var msg = pickMsg(ratio);
    var html = '<div class="mb-ex">' +
      '<div class="mb-header"><span class="mb-badge">Paires — ' + LEVEL_LABELS[level] + '</span></div>' +
      '<div class="mb-msg">' + msg + '</div>' +
      '<div class="mb-score">' + moves + ' coups</div>' +
      '<div class="mb-score-sub">' + numPairs + ' paires trouvees en ' + formatTime(elapsed) + '</div>' +
      '<div class="mb-actions">' +
        '<button class="mb-btn mb-primary" data-act="replay">Rejouer</button>';
    var nxt = nextLevelAfter(level, allLevels);
    if (nxt) html += '<button class="mb-btn mb-secondary" data-act="next">Niveau suivant</button>';
    html += '</div></div>';
    container.innerHTML = html;
    container.querySelector('[data-act="replay"]').addEventListener('click', function () { launch('pairs', level); });
    if (nxt) container.querySelector('[data-act="next"]').addEventListener('click', function () { launch('pairs', nxt); });
  }

  // ══════════════════════════════
  //  3. OBJET MANQUANT
  // ══════════════════════════════

  var MISSING_LEVELS = {
    easy:   { count: 4, viewTime: 5000 },
    normal: { count: 6, viewTime: 4000 },
    hard:   { count: 8, viewTime: 3000 },
    expert: { count: 10, viewTime: 3000 }
  };

  function missing(container, level) {
    level = level || 'easy';
    var cfg = MISSING_LEVELS[level] || MISSING_LEVELS.easy;
    var allLevels = ['easy', 'normal', 'hard', 'expert'];
    var rounds = 5;
    var currentRound = 0;
    var correctCount = 0;
    var startTime = Date.now();

    function playRound() {
      currentRound++;
      var pool = shuffle(MISSING_EMOJIS).slice(0, cfg.count);
      var missingIdx = Math.floor(Math.random() * pool.length);
      var missingEmoji = pool[missingIdx];

      // Show all objects
      container.innerHTML = '<div class="mb-ex">' +
        '<div class="mb-header">' +
          '<span class="mb-badge">Objet manquant — ' + LEVEL_LABELS[level] + '</span>' +
          '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
        '</div>' +
        '<p class="mb-instr">Memorise ces objets...</p>' +
        '<div class="mb-obj-display">' +
          pool.map(function (e) { return '<div class="mb-obj-item">' + e + '</div>'; }).join('') +
        '</div>' +
        '<div class="mb-score-sub" id="mb-miss-countdown"></div>' +
      '</div>';

      // Countdown
      var remaining = Math.round(cfg.viewTime / 1000);
      var cd = container.querySelector('#mb-miss-countdown');
      if (cd) cd.textContent = remaining + 's';
      var countdownTimer = setInterval(function () {
        remaining--;
        if (cd) cd.textContent = remaining > 0 ? remaining + 's' : '';
        if (remaining <= 0) clearInterval(countdownTimer);
      }, 1000);

      setTimeout(function () {
        clearInterval(countdownTimer);
        // Remove one, shuffle remaining, show choices
        var remaining2 = pool.filter(function (_, i) { return i !== missingIdx; });
        var shuffledRemaining = shuffle(remaining2);

        // Build 4 choices: the correct one + 3 random from MISSING_EMOJIS not in pool
        var distractors = shuffle(MISSING_EMOJIS.filter(function (e) { return pool.indexOf(e) < 0; })).slice(0, 3);
        var choices = shuffle([missingEmoji].concat(distractors));

        container.innerHTML = '<div class="mb-ex">' +
          '<div class="mb-header">' +
            '<span class="mb-badge">Objet manquant — ' + LEVEL_LABELS[level] + '</span>' +
            '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
          '</div>' +
          '<p class="mb-instr">Lequel a disparu ?</p>' +
          '<div class="mb-obj-display">' +
            shuffledRemaining.map(function (e) { return '<div class="mb-obj-item">' + e + '</div>'; }).join('') +
          '</div>' +
          '<div class="mb-choices">' +
            choices.map(function (e) { return '<button class="mb-choice-btn" data-emoji="' + e + '">' + e + '</button>'; }).join('') +
          '</div>' +
        '</div>';

        var answered = false;
        container.querySelectorAll('.mb-choice-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            if (answered) return;
            answered = true;
            var picked = btn.getAttribute('data-emoji');
            if (picked === missingEmoji) {
              correctCount++;
              btn.classList.add('mb-correct');
            } else {
              btn.classList.add('mb-wrong');
              // highlight correct
              container.querySelectorAll('.mb-choice-btn').forEach(function (b) {
                if (b.getAttribute('data-emoji') === missingEmoji) b.classList.add('mb-correct');
              });
            }
            setTimeout(function () {
              if (currentRound < rounds) {
                playRound();
              } else {
                var elapsed = Date.now() - startTime;
                saveResult('missing-' + level, correctCount, rounds, Math.round(elapsed / 1000));
                renderScore(container, 'Objet manquant', correctCount, rounds, elapsed, 'missing', level, nextLevelAfter(level, allLevels));
              }
            }, 1000);
          });
        });
      }, cfg.viewTime);
    }

    playRound();
  }

  // ══════════════════════════════
  //  4. SUITE DE CHIFFRES
  // ══════════════════════════════

  var SEQUENCE_LEVELS = {
    easy:   { digits: 3, showTime: 1500 },
    normal: { digits: 4, showTime: 1000 },
    hard:   { digits: 5, showTime: 800 },
    expert: { digits: 7, showTime: 600 }
  };

  function sequence(container, level) {
    level = level || 'easy';
    var cfg = SEQUENCE_LEVELS[level] || SEQUENCE_LEVELS.easy;
    var allLevels = ['easy', 'normal', 'hard', 'expert'];
    var rounds = 5;
    var currentRound = 0;
    var correctCount = 0;
    var startTime = Date.now();

    function playRound() {
      currentRound++;
      var digits = [];
      for (var i = 0; i < cfg.digits; i++) digits.push(Math.floor(Math.random() * 10));

      // Show digits one at a time
      container.innerHTML = '<div class="mb-ex">' +
        '<div class="mb-header">' +
          '<span class="mb-badge">Suite de chiffres — ' + LEVEL_LABELS[level] + '</span>' +
          '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
        '</div>' +
        '<p class="mb-instr">Memorise les chiffres...</p>' +
        '<div class="mb-big-num" id="mb-seq-display">&nbsp;</div>' +
      '</div>';

      var display = container.querySelector('#mb-seq-display');
      var idx = 0;

      function showNext() {
        if (idx >= digits.length) {
          // Ask for recall
          setTimeout(showRecall, 300);
          return;
        }
        if (display) {
          display.textContent = digits[idx];
          display.style.animation = 'none';
          display.offsetHeight; // reflow
          display.style.animation = 'mb-fadeIn .25s ease';
        }
        idx++;
        setTimeout(showNext, cfg.showTime);
      }

      function showRecall() {
        var inputsHtml = '';
        for (var i = 0; i < cfg.digits; i++) {
          inputsHtml += '<input type="tel" maxlength="1" class="mb-seq-box" data-pos="' + i + '" autocomplete="off">';
        }
        container.innerHTML = '<div class="mb-ex">' +
          '<div class="mb-header">' +
            '<span class="mb-badge">Suite de chiffres — ' + LEVEL_LABELS[level] + '</span>' +
            '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
          '</div>' +
          '<p class="mb-instr">Saisis les chiffres dans l\'ordre :</p>' +
          '<div class="mb-seq-input">' + inputsHtml + '</div>' +
          '<div class="mb-actions" style="justify-content:center">' +
            '<button class="mb-btn mb-primary" id="mb-seq-check">Verifier</button>' +
          '</div>' +
        '</div>';

        var boxes = container.querySelectorAll('.mb-seq-box');
        if (boxes.length > 0) boxes[0].focus();

        // Auto-advance on input
        boxes.forEach(function (box, i) {
          box.addEventListener('input', function () {
            if (box.value.length === 1 && i < boxes.length - 1) {
              boxes[i + 1].focus();
            }
          });
          box.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && box.value === '' && i > 0) {
              boxes[i - 1].focus();
            }
            if (e.key === 'Enter') {
              container.querySelector('#mb-seq-check').click();
            }
          });
        });

        container.querySelector('#mb-seq-check').addEventListener('click', function () {
          var allCorrect = true;
          boxes.forEach(function (box, i) {
            var val = parseInt(box.value);
            if (val === digits[i]) {
              box.classList.add('mb-correct');
            } else {
              box.classList.add('mb-wrong');
              box.value = digits[i];
              allCorrect = false;
            }
            box.disabled = true;
          });

          if (allCorrect) correctCount++;

          setTimeout(function () {
            if (currentRound < rounds) {
              playRound();
            } else {
              var elapsed = Date.now() - startTime;
              saveResult('sequence-' + level, correctCount, rounds, Math.round(elapsed / 1000));
              renderScore(container, 'Suite de chiffres', correctCount, rounds, elapsed, 'sequence', level, nextLevelAfter(level, allLevels));
            }
          }, 1200);
        });
      }

      setTimeout(showNext, 500);
    }

    playRound();
  }

  // ══════════════════════════════
  //  5. GRILLE ECLAIR
  // ══════════════════════════════

  var GRID_LEVELS = {
    easy:   { size: 3, cells: 3, viewTime: 3000 },
    normal: { size: 4, cells: 4, viewTime: 2500 },
    hard:   { size: 4, cells: 6, viewTime: 2000 },
    expert: { size: 5, cells: 8, viewTime: 1500 }
  };

  function flashGrid(container, level) {
    level = level || 'easy';
    var cfg = GRID_LEVELS[level] || GRID_LEVELS.easy;
    var allLevels = ['easy', 'normal', 'hard', 'expert'];
    var rounds = 5;
    var currentRound = 0;
    var totalScore = 0;
    var totalPossible = 0;
    var startTime = Date.now();

    function playRound() {
      currentRound++;
      var totalCells = cfg.size * cfg.size;

      // Pick random cells to highlight
      var indices = [];
      for (var i = 0; i < totalCells; i++) indices.push(i);
      indices = shuffle(indices);
      var highlighted = indices.slice(0, cfg.cells);
      var highlightSet = {};
      highlighted.forEach(function (idx) { highlightSet[idx] = true; });

      // Show phase
      var gridHtml = '';
      for (var c = 0; c < totalCells; c++) {
        var cls = highlightSet[c] ? ' mb-highlight' : '';
        gridHtml += '<div class="mb-grid-cell' + cls + '" data-cell="' + c + '" disabled></div>';
      }

      container.innerHTML = '<div class="mb-ex">' +
        '<div class="mb-header">' +
          '<span class="mb-badge">Grille eclair — ' + LEVEL_LABELS[level] + '</span>' +
          '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
        '</div>' +
        '<p class="mb-instr">Memorise les cases colorees...</p>' +
        '<div class="mb-grid-wrap"><div class="mb-grid" style="grid-template-columns:repeat(' + cfg.size + ',1fr)">' +
          gridHtml +
        '</div></div>' +
      '</div>';

      setTimeout(function () {
        // Recall phase
        var recallHtml = '';
        for (var c = 0; c < totalCells; c++) {
          recallHtml += '<div class="mb-grid-cell" data-cell="' + c + '"></div>';
        }

        container.innerHTML = '<div class="mb-ex">' +
          '<div class="mb-header">' +
            '<span class="mb-badge">Grille eclair — ' + LEVEL_LABELS[level] + '</span>' +
            '<span class="mb-timer">Tour ' + currentRound + ' / ' + rounds + '</span>' +
          '</div>' +
          '<p class="mb-instr">Clique sur les ' + cfg.cells + ' cases qui etaient colorees.</p>' +
          '<div class="mb-grid-wrap"><div class="mb-grid" style="grid-template-columns:repeat(' + cfg.size + ',1fr)">' +
            recallHtml +
          '</div></div>' +
          '<div class="mb-actions" style="justify-content:center">' +
            '<button class="mb-btn mb-primary" id="mb-grid-check">Verifier</button>' +
          '</div>' +
        '</div>';

        var selected = {};
        var selectCount = 0;
        container.querySelectorAll('.mb-grid-cell').forEach(function (cell) {
          cell.addEventListener('click', function () {
            var idx = parseInt(cell.getAttribute('data-cell'));
            if (selected[idx]) {
              delete selected[idx];
              selectCount--;
              cell.classList.remove('mb-selected');
            } else if (selectCount < cfg.cells) {
              selected[idx] = true;
              selectCount++;
              cell.classList.add('mb-selected');
            }
          });
        });

        container.querySelector('#mb-grid-check').addEventListener('click', function () {
          var correct = 0;
          var falsePos = 0;
          container.querySelectorAll('.mb-grid-cell').forEach(function (cell) {
            var idx = parseInt(cell.getAttribute('data-cell'));
            var wasHighlighted = !!highlightSet[idx];
            var wasSelected = !!selected[idx];
            cell.style.pointerEvents = 'none';

            if (wasHighlighted && wasSelected) {
              cell.classList.add('mb-correct-cell');
              correct++;
            } else if (!wasHighlighted && wasSelected) {
              cell.classList.add('mb-wrong-cell');
              falsePos++;
            } else if (wasHighlighted && !wasSelected) {
              cell.classList.add('mb-missed-cell');
            }
          });

          var roundScore = Math.max(0, correct - falsePos);
          totalScore += roundScore;
          totalPossible += cfg.cells;

          setTimeout(function () {
            if (currentRound < rounds) {
              playRound();
            } else {
              var elapsed = Date.now() - startTime;
              saveResult('flashGrid-' + level, totalScore, totalPossible, Math.round(elapsed / 1000));
              renderScore(container, 'Grille eclair', totalScore, totalPossible, elapsed, 'flashGrid', level, nextLevelAfter(level, allLevels));
            }
          }, 1200);
        });
      }, cfg.viewTime);
    }

    playRound();
  }

  // ══════════════════════════════
  //  PANEL RENDERING
  // ══════════════════════════════

  function renderPanel(el) {
    injectCSS();

    var data = loadData();
    var hist = data.history || [];

    function statsFor(prefix) {
      var matching = hist.filter(function (h) { return h.type.indexOf(prefix) === 0; });
      if (matching.length === 0) return null;
      return { sessions: matching.length, last: matching[matching.length - 1] };
    }

    var cardsHtml = GAMES.map(function (g) {
      var st = statsFor(g.id);
      var sub = g.desc;
      if (st) sub += ' — ' + st.sessions + ' session' + (st.sessions > 1 ? 's' : '');

      return '<div class="mb-game-card" data-game="' + g.id + '">' +
        '<div class="mb-game-icon">' + g.icon + '</div>' +
        '<div class="mb-game-info">' +
          '<div class="mb-game-name">' + g.name + '</div>' +
          '<div class="mb-game-sub">' + sub + '</div>' +
        '</div>' +
        '<span class="mb-game-arrow">\u203A</span>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div class="mb-panel">' +
        '<h3 class="mb-title">Jeux de memoire</h3>' +
        '<p class="mb-desc">Des exercices ludiques pour entrainer ta memoire. Commence par le niveau facile et progresse !</p>' +
        '<div class="mb-games">' + cardsHtml + '</div>' +
        '<div id="mb-active"></div>' +
      '</div>';

    el.querySelectorAll('.mb-game-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var gameId = card.getAttribute('data-game');
        var active = document.getElementById('mb-active');
        if (!active) return;

        var levels;
        var instruction;
        switch (gameId) {
          case 'simon':
            levels = ['easy', 'normal', 'hard'];
            instruction = 'Reproduis des sequences de couleurs de plus en plus longues.';
            break;
          case 'pairs':
            levels = ['easy', 'normal', 'hard', 'expert'];
            instruction = 'Retourne les cartes et retrouve toutes les paires.';
            break;
          case 'missing':
            levels = ['easy', 'normal', 'hard', 'expert'];
            instruction = 'Memorise les objets, puis trouve celui qui a disparu.';
            break;
          case 'sequence':
            levels = ['easy', 'normal', 'hard', 'expert'];
            instruction = 'Memorise une suite de chiffres et restitue-la dans l\'ordre.';
            break;
          case 'flashGrid':
            levels = ['easy', 'normal', 'hard', 'expert'];
            instruction = 'Memorise le motif affiche sur la grille, puis reproduis-le.';
            break;
          default: return;
        }

        renderLevelSelect(active, GAMES.filter(function (g) { return g.id === gameId; })[0].name, instruction, levels, function (lv) {
          launch(gameId, lv);
        });

        active.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // ══════════════════════════════
  //  LAUNCH
  // ══════════════════════════════

  function launch(action, arg) {
    injectCSS();
    var container = document.getElementById('mb-active');
    if (!container) {
      // Create container if needed
      var panel = document.querySelector('.mb-panel');
      if (panel) {
        var div = document.createElement('div');
        div.id = 'mb-active';
        panel.appendChild(div);
        container = div;
      } else {
        return;
      }
    }
    container.scrollIntoView({ behavior: 'smooth' });

    switch (action) {
      case 'simon':    simon(container, arg); break;
      case 'pairs':    pairs(container, arg); break;
      case 'missing':  missing(container, arg); break;
      case 'sequence': sequence(container, arg); break;
      case 'flashGrid': flashGrid(container, arg); break;
    }
  }

  return {
    renderPanel: renderPanel,
    launch: launch
  };
})();
