// ══════════════════════════════════════════════════════
//  Curiosita — Memory Visual Training
//  Noms & Visages (Names & Faces) + Images Abstraites
//  (Abstract Pattern Memory)
//  No external images — CSS/SVG/Unicode only
// ══════════════════════════════════════════════════════

var MemoryVisual = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_memvisual';

  // ── Data: French first names ──
  var PRENOMS = [
    'Alice', 'Antoine', 'Camille', 'Charlotte', 'Clara', 'Damien', 'Emma',
    'Etienne', 'Fanny', 'Gabriel', 'Hugo', 'Ines', 'Jade', 'Jules', 'Lea',
    'Louis', 'Lucie', 'Manon', 'Mathieu', 'Nathan', 'Noemie', 'Olivier',
    'Paul', 'Raphael', 'Sarah', 'Sophie', 'Thomas', 'Valentine', 'Victor',
    'Zoe', 'Adrien', 'Beatrice', 'Celine', 'Denis', 'Eloise', 'Florian',
    'Gaelle', 'Henri', 'Isabelle', 'Julien', 'Kevin', 'Laure', 'Marc',
    'Nathalie', 'Oceane', 'Pierre', 'Quentin', 'Rosalie', 'Sylvain',
    'Therese', 'Ulysse', 'Viviane', 'Xavier', 'Yasmine'
  ];

  // ── Data: French last names ──
  var NOMS = [
    'Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Moreau', 'Laurent',
    'Simon', 'Michel', 'Lefevre', 'Leroy', 'Roux', 'David', 'Bertrand',
    'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine',
    'Rousseau', 'Vincent', 'Muller', 'Lefevre', 'Faure', 'Andre', 'Mercier',
    'Blanc', 'Guerin', 'Boyer', 'Garnier', 'Chevalier', 'Francois', 'Legrand',
    'Gauthier', 'Garcia', 'Perrin', 'Robin', 'Clement', 'Morin', 'Nicolas',
    'Henry', 'Roussel', 'Mathieu', 'Gautier', 'Masson', 'Marchand', 'Duval',
    'Denis', 'Dumont', 'Marie', 'Lemaire', 'Noel'
  ];

  // ── Data: Trait descriptions ──
  var TRAITS = [
    'Cheveux blonds, courts', 'Cheveux bruns, boucles', 'Cheveux roux, longs',
    'Cheveux noirs, raides', 'Cheveux gris, mi-longs', 'Cheveux chatains, frises',
    'Lunettes rondes', 'Lunettes rectangulaires', 'Petites lunettes ovales',
    'Sourire large', 'Air serieux', 'Regard doux', 'Regard percant',
    'Taches de rousseur', 'Barbe fournie', 'Moustache fine', 'Bouc soigne',
    'Fossettes aux joues', 'Grain de beaute sur la joue', 'Nez retrousse',
    'Grandes oreilles', 'Menton carre', 'Pommettes hautes', 'Front large',
    'Sourcils epais', 'Sourcils fins', 'Cicatrice au menton',
    'Visage rond', 'Visage allonge', 'Visage anguleux', 'Visage ovale',
    'Yeux bleus', 'Yeux verts', 'Yeux noisette', 'Yeux marron fonce',
    'Peau claire', 'Peau mate', 'Teint bronze', 'Petite fossette au menton',
    'Levres fines', 'Levres pleines', 'Nez aquilin', 'Nez droit'
  ];

  // ── Data: Avatar colors ──
  var AVATAR_COLORS = [
    '#e8c97a', '#c97a7a', '#7ac9e8', '#7ae8a0', '#c97ae8', '#e8a07a',
    '#7a8ce8', '#e87aa0', '#a0e87a', '#e87a7a', '#7ae8d8', '#d8e87a',
    '#8c7ae8', '#e8d87a', '#7ae8b8', '#e87ac0'
  ];

  // ── Data: Pattern palette ──
  var PATTERN_PALETTES = {
    3: ['#e8c97a', '#7ac9e8', '#c97a7a'],
    4: ['#e8c97a', '#7ac9e8', '#c97a7a', '#7ae8a0'],
    5: ['#e8c97a', '#7ac9e8', '#c97a7a', '#7ae8a0', '#c97ae8'],
    6: ['#e8c97a', '#7ac9e8', '#c97a7a', '#7ae8a0', '#c97ae8', '#e8a07a']
  };

  // ── CSS injection ──
  var cssInjected = false;
  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;
    var style = document.createElement('style');
    style.textContent =
      '.mv-exercise{background:var(--surface,#141418);border-radius:12px;padding:24px;margin-top:16px}' +
      '.mv-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}' +
      '.mv-badge{font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--accent,#e8c97a);background:rgba(232,201,122,.1);padding:4px 10px;border-radius:6px}' +
      '.mv-timer{font-size:.85rem;color:var(--muted,#7a7870);font-variant-numeric:tabular-nums}' +
      '.mv-instruction{color:var(--muted,#7a7870);font-size:.9rem;margin-bottom:18px}' +
      '.mv-btn{border:none;cursor:pointer;padding:10px 22px;border-radius:8px;font-size:.9rem;font-weight:600;transition:opacity .15s}' +
      '.mv-btn:hover{opacity:.85}' +
      '.mv-primary{background:var(--accent,#e8c97a);color:#0c0c0e}' +
      '.mv-secondary{background:var(--surface2,#1c1c22);color:var(--text,#f0ede8);border:1px solid var(--border,rgba(240,237,232,.08))}' +
      '.mv-score{font-size:2.2rem;font-weight:700;text-align:center;color:var(--text,#f0ede8);margin:12px 0 4px}' +
      '.mv-score-sub{text-align:center;color:var(--muted,#7a7870);font-size:.85rem;margin-bottom:16px}' +
      '.mv-actions{display:flex;gap:10px;justify-content:center;margin-top:18px;flex-wrap:wrap}' +
      /* Noms & Visages */
      '.mv-avatar-card{display:flex;align-items:center;gap:18px;background:var(--surface2,#1c1c22);border-radius:10px;padding:18px 22px;margin-bottom:14px;border:1px solid var(--border,rgba(240,237,232,.08))}' +
      '.mv-avatar{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.3rem;font-weight:700;color:#0c0c0e;flex-shrink:0}' +
      '.mv-person-info{flex:1;min-width:0}' +
      '.mv-person-name{font-size:1.1rem;font-weight:600;color:var(--text,#f0ede8);margin-bottom:4px}' +
      '.mv-person-traits{font-size:.82rem;color:var(--muted,#7a7870)}' +
      '.mv-name-input{background:var(--surface,#141418);border:1px solid var(--border,rgba(240,237,232,.08));color:var(--text,#f0ede8);padding:8px 12px;border-radius:6px;font-size:.95rem;width:100%;max-width:220px;outline:none}' +
      '.mv-name-input:focus{border-color:var(--accent,#e8c97a)}' +
      '.mv-name-input.correct{border-color:var(--green,#69f0ae);color:var(--green,#69f0ae)}' +
      '.mv-name-input.wrong{border-color:var(--accent2,#c97a7a);color:var(--accent2,#c97a7a)}' +
      '.mv-result-name{font-size:.82rem;margin-top:3px}' +
      '.mv-correct-label{color:var(--green,#69f0ae)}' +
      '.mv-wrong-label{color:var(--accent2,#c97a7a)}' +
      '.mv-progress-bar{height:4px;background:var(--surface2,#1c1c22);border-radius:2px;margin-bottom:16px;overflow:hidden}' +
      '.mv-progress-fill{height:100%;background:var(--accent,#e8c97a);border-radius:2px;transition:width .3s}' +
      '.mv-card-counter{text-align:center;color:var(--muted,#7a7870);font-size:.8rem;margin-bottom:10px}' +
      /* Images Abstraites */
      '.mv-grid-wrap{display:flex;justify-content:center;margin:16px 0}' +
      '.mv-grid{display:inline-grid;gap:3px;background:var(--surface2,#1c1c22);padding:6px;border-radius:8px}' +
      '.mv-cell{border-radius:3px;transition:background .1s;aspect-ratio:1}' +
      '.mv-cell-empty{background:rgba(240,237,232,.04)}' +
      '.mv-cell-pick{cursor:pointer}' +
      '.mv-cell-pick:hover{opacity:.8}' +
      '.mv-palette{display:flex;gap:6px;justify-content:center;margin:12px 0;flex-wrap:wrap}' +
      '.mv-pal-swatch{width:32px;height:32px;border-radius:6px;cursor:pointer;border:2px solid transparent;transition:border-color .15s}' +
      '.mv-pal-swatch.active{border-color:var(--text,#f0ede8)}' +
      '.mv-pal-swatch.eraser{background:rgba(240,237,232,.04);position:relative;display:flex;align-items:center;justify-content:center;color:var(--muted,#7a7870);font-size:1rem}' +
      '.mv-compare{display:flex;gap:24px;justify-content:center;flex-wrap:wrap;align-items:flex-start}' +
      '.mv-compare-label{text-align:center;font-size:.75rem;color:var(--muted,#7a7870);margin-bottom:6px}' +
      '.mv-diff-cell{position:relative}' +
      '.mv-diff-cell.wrong::after{content:"";position:absolute;inset:0;border:2px solid var(--accent2,#c97a7a);border-radius:3px;pointer-events:none}' +
      '.mv-multi-dots{display:flex;gap:6px;justify-content:center;margin:10px 0}' +
      '.mv-dot{width:10px;height:10px;border-radius:50%;background:var(--surface2,#1c1c22);border:1px solid var(--border,rgba(240,237,232,.08))}' +
      '.mv-dot.active{background:var(--accent,#e8c97a);border-color:var(--accent,#e8c97a)}' +
      '.mv-dot.done{background:var(--green,#69f0ae);border-color:var(--green,#69f0ae)}' +
      '.mv-difficulty{display:flex;gap:8px;justify-content:center;margin:12px 0;flex-wrap:wrap}' +
      '.mv-diff-btn{padding:8px 16px;border-radius:6px;border:1px solid var(--border,rgba(240,237,232,.08));background:var(--surface2,#1c1c22);color:var(--text,#f0ede8);cursor:pointer;font-size:.85rem}' +
      '.mv-diff-btn:hover,.mv-diff-btn.active{border-color:var(--accent,#e8c97a);color:var(--accent,#e8c97a)}';
    document.head.appendChild(style);
  }

  // ── Persistence ──
  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveData(d) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch (e) {}
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

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function pickN(arr, n) { return shuffle(arr).slice(0, n); }

  function generatePeople(count) {
    var usedNames = {};
    var people = [];
    for (var i = 0; i < count; i++) {
      var prenom, nom, key;
      do {
        prenom = pick(PRENOMS);
        nom = pick(NOMS);
        key = prenom + ' ' + nom;
      } while (usedNames[key]);
      usedNames[key] = true;
      var traits = pickN(TRAITS, 2);
      var color = AVATAR_COLORS[i % AVATAR_COLORS.length];
      people.push({
        prenom: prenom,
        nom: nom,
        fullName: prenom + ' ' + nom,
        traits: traits.join(', '),
        color: color,
        initials: prenom[0] + nom[0]
      });
    }
    return people;
  }

  function avatarSVG(person, size) {
    size = size || 64;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">' +
      '<circle cx="32" cy="32" r="30" fill="' + person.color + '"/>' +
      '<text x="32" y="32" text-anchor="middle" dominant-baseline="central" font-size="22" font-weight="700" fill="#0c0c0e" font-family="DM Sans,sans-serif">' +
        person.initials +
      '</text></svg>';
  }

  function normalize(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '');
  }

  // ══════════════════════════════
  //  NOMS & VISAGES
  // ══════════════════════════════

  function nomsVisages(container, count) {
    count = count || 10;
    var people = generatePeople(count);
    var currentIdx = 0;
    var startTime = Date.now();
    var timerInterval;

    function updateTimer() {
      var el = container.querySelector('#mv-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var s = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
    }

    function renderMemorize() {
      var p = people[currentIdx];
      container.innerHTML =
        '<div class="mv-exercise">' +
          '<div class="mv-header">' +
            '<span class="mv-badge">Noms & Visages</span>' +
            '<span class="mv-timer" id="mv-timer">0:00</span>' +
          '</div>' +
          '<div class="mv-progress-bar"><div class="mv-progress-fill" style="width:' + ((currentIdx + 1) / count * 100) + '%"></div></div>' +
          '<div class="mv-card-counter">' + (currentIdx + 1) + ' / ' + count + '</div>' +
          '<div class="mv-avatar-card">' +
            '<div class="mv-avatar">' + avatarSVG(p) + '</div>' +
            '<div class="mv-person-info">' +
              '<div class="mv-person-name">' + p.fullName + '</div>' +
              '<div class="mv-person-traits">' + p.traits + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="mv-actions">' +
            (currentIdx > 0 ? '<button class="mv-btn mv-secondary" id="mv-prev">\u2190 Precedent</button>' : '') +
            '<button class="mv-btn mv-primary" id="mv-next">' +
              (currentIdx < count - 1 ? 'Suivant \u2192' : 'Passer au rappel \u2192') +
            '</button>' +
          '</div>' +
        '</div>';

      if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimer, 1000);
      }

      container.querySelector('#mv-next').addEventListener('click', function () {
        if (currentIdx < count - 1) { currentIdx++; renderMemorize(); }
        else { clearInterval(timerInterval); renderRecall(); }
      });
      var prev = container.querySelector('#mv-prev');
      if (prev) prev.addEventListener('click', function () { currentIdx--; renderMemorize(); });
    }

    function renderRecall() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);
      var shuffledPeople = shuffle(people);

      var html = shuffledPeople.map(function (p, i) {
        return '<div class="mv-avatar-card" data-idx="' + i + '">' +
          '<div class="mv-avatar">' + avatarSVG(p) + '</div>' +
          '<div class="mv-person-info">' +
            '<div class="mv-person-traits">' + p.traits + '</div>' +
            '<input class="mv-name-input" type="text" placeholder="Prenom Nom" data-answer="' + p.fullName + '" autocomplete="off">' +
          '</div>' +
        '</div>';
      }).join('');

      container.innerHTML =
        '<div class="mv-exercise">' +
          '<div class="mv-header">' +
            '<span class="mv-badge">Noms & Visages — Rappel</span>' +
            '<span class="mv-timer">Memorise en ' + elapsed + 's</span>' +
          '</div>' +
          '<p class="mv-instruction">Retrouve le nom complet de chaque personne :</p>' +
          html +
          '<div class="mv-actions">' +
            '<button class="mv-btn mv-primary" id="mv-check">Verifier \u2192</button>' +
          '</div>' +
        '</div>';

      var inputs = container.querySelectorAll('.mv-name-input');
      inputs.forEach(function (inp, i) {
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            if (i < inputs.length - 1) inputs[i + 1].focus();
            else container.querySelector('#mv-check').click();
          }
        });
      });
      if (inputs[0]) inputs[0].focus();

      container.querySelector('#mv-check').addEventListener('click', function () {
        showNVResult(shuffledPeople, elapsed);
      });
    }

    function showNVResult(shuffledPeople, memTime) {
      var inputs = container.querySelectorAll('.mv-name-input');
      var correct = 0;
      var detailHtml = '';

      shuffledPeople.forEach(function (p, i) {
        var inp = inputs[i];
        var userVal = (inp.value || '').trim();
        // Score: check prenom and nom separately, give partial credit
        var normUser = normalize(userVal);
        var normFull = normalize(p.fullName);
        var normPrenom = normalize(p.prenom);
        var normNom = normalize(p.nom);

        var prenomOk = normUser.indexOf(normPrenom) !== -1;
        var nomOk = normUser.indexOf(normNom) !== -1;
        var fullOk = prenomOk && nomOk;
        if (fullOk) correct++;

        var statusCls = fullOk ? 'correct' : 'wrong';
        inp.classList.add(statusCls);
        inp.readOnly = true;

        detailHtml += '<div class="mv-avatar-card">' +
          '<div class="mv-avatar">' + avatarSVG(p) + '</div>' +
          '<div class="mv-person-info">' +
            '<div class="mv-person-name">' + p.fullName + '</div>' +
            '<div class="mv-person-traits">' + p.traits + '</div>' +
            '<div class="mv-result-name ' + (fullOk ? 'mv-correct-label' : 'mv-wrong-label') + '">' +
              (fullOk ? '\u2713 Correct' : '\u2717 Reponse : ' + (userVal || '(vide)')) +
            '</div>' +
          '</div>' +
        '</div>';
      });

      var pct = Math.round(correct / count * 100);
      saveResult('noms-visages', correct, count, memTime);

      container.innerHTML =
        '<div class="mv-exercise">' +
          '<div class="mv-header"><span class="mv-badge">Noms & Visages</span></div>' +
          '<div class="mv-score">' + correct + ' / ' + count + '</div>' +
          '<div class="mv-score-sub">' + pct + '% correct \u2014 memorise en ' + memTime + 's</div>' +
          detailHtml +
          '<div class="mv-actions">' +
            '<button class="mv-btn mv-primary" onclick="MemoryVisual.launch(\'nomsVisages\',' + count + ')">Recommencer</button>' +
            (count < 20 ? '<button class="mv-btn mv-secondary" onclick="MemoryVisual.launch(\'nomsVisages\',' + (count + 5) + ')">+5 personnes</button>' : '') +
          '</div>' +
        '</div>';
    }

    renderMemorize();
  }

  // ══════════════════════════════
  //  IMAGES ABSTRAITES
  // ══════════════════════════════

  var DIFFICULTY = {
    easy:   { size: 4, colors: 3, time: 30, label: 'Facile' },
    medium: { size: 5, colors: 4, time: 30, label: 'Moyen' },
    hard:   { size: 6, colors: 5, time: 30, label: 'Difficile' }
  };

  function generatePattern(size, numColors) {
    var palette = PATTERN_PALETTES[numColors] || PATTERN_PALETTES[3];
    var grid = [];
    for (var r = 0; r < size; r++) {
      var row = [];
      for (var c = 0; c < size; c++) {
        // ~30% chance of empty cell for visual interest
        if (Math.random() < 0.3) row.push(null);
        else row.push(pick(palette));
      }
      row.push();
      grid.push(row);
    }
    return { grid: grid, palette: palette, size: size };
  }

  function renderGrid(grid, size, cellSize, opts) {
    opts = opts || {};
    var clickable = opts.clickable || false;
    var diffGrid = opts.diffGrid || null;

    var cells = '';
    for (var r = 0; r < size; r++) {
      for (var c = 0; c < size; c++) {
        var color = grid[r][c];
        var diffCls = '';
        if (diffGrid && diffGrid[r][c] !== grid[r][c]) diffCls = ' wrong';
        if (color) {
          cells += '<div class="mv-cell' + (clickable ? ' mv-cell-pick' : '') + diffCls +
            '" data-r="' + r + '" data-c="' + c +
            '" style="background:' + color + ';width:' + cellSize + 'px;height:' + cellSize + 'px"></div>';
        } else {
          cells += '<div class="mv-cell mv-cell-empty' + (clickable ? ' mv-cell-pick' : '') + diffCls +
            '" data-r="' + r + '" data-c="' + c +
            '" style="width:' + cellSize + 'px;height:' + cellSize + 'px"></div>';
        }
      }
    }

    return '<div class="mv-grid" style="grid-template-columns:repeat(' + size + ',' + cellSize + 'px)">' +
      cells + '</div>';
  }

  function imagesAbstraites(container, diff, multiCount) {
    diff = diff || 'easy';
    multiCount = multiCount || 1;
    var cfg = DIFFICULTY[diff] || DIFFICULTY.easy;
    var patterns = [];
    for (var i = 0; i < multiCount; i++) {
      patterns.push(generatePattern(cfg.size, cfg.colors));
    }
    var currentPattern = 0;
    var cellSize = Math.max(28, Math.min(48, Math.floor(260 / cfg.size)));
    var startTime;
    var countdown;

    function renderMemorize() {
      var pat = patterns[currentPattern];
      var remaining = cfg.time;
      startTime = Date.now();

      function buildUI() {
        var dotsHtml = '';
        if (multiCount > 1) {
          dotsHtml = '<div class="mv-multi-dots">';
          for (var i = 0; i < multiCount; i++) {
            var cls = i < currentPattern ? 'done' : (i === currentPattern ? 'active' : '');
            dotsHtml += '<div class="mv-dot ' + cls + '"></div>';
          }
          dotsHtml += '</div>';
        }

        container.innerHTML =
          '<div class="mv-exercise">' +
            '<div class="mv-header">' +
              '<span class="mv-badge">Images Abstraites' + (multiCount > 1 ? ' (' + (currentPattern + 1) + '/' + multiCount + ')' : '') + '</span>' +
              '<span class="mv-timer" id="mv-countdown">' + remaining + 's</span>' +
            '</div>' +
            dotsHtml +
            '<p class="mv-instruction">Memorise ce motif. Tu devras le reproduire.</p>' +
            '<div class="mv-grid-wrap">' + renderGrid(pat.grid, cfg.size, cellSize) + '</div>' +
            '<button class="mv-btn mv-primary" id="mv-skip">J\u2019ai memorise \u2192</button>' +
          '</div>';

        container.querySelector('#mv-skip').addEventListener('click', function () {
          clearInterval(countdown);
          advanceOrRecall();
        });
      }

      buildUI();

      countdown = setInterval(function () {
        remaining--;
        var el = container.querySelector('#mv-countdown');
        if (el) el.textContent = remaining + 's';
        if (remaining <= 0) {
          clearInterval(countdown);
          advanceOrRecall();
        }
      }, 1000);
    }

    function advanceOrRecall() {
      currentPattern++;
      if (currentPattern < multiCount) {
        renderMemorize();
      } else {
        currentPattern = 0;
        renderRecall();
      }
    }

    function renderRecall() {
      var pat = patterns[currentPattern];
      var userGrid = [];
      for (var r = 0; r < cfg.size; r++) {
        var row = [];
        for (var c = 0; c < cfg.size; c++) row.push(null);
        userGrid.push(row);
      }
      var selectedColor = pat.palette[0];

      function buildRecallUI() {
        var dotsHtml = '';
        if (multiCount > 1) {
          dotsHtml = '<div class="mv-multi-dots">';
          for (var i = 0; i < multiCount; i++) {
            var cls = i < currentPattern ? 'done' : (i === currentPattern ? 'active' : '');
            dotsHtml += '<div class="mv-dot ' + cls + '"></div>';
          }
          dotsHtml += '</div>';
        }

        var palHtml = '<div class="mv-palette">' +
          '<div class="mv-pal-swatch eraser' + (selectedColor === null ? ' active' : '') + '" data-color="null">\u2715</div>';
        pat.palette.forEach(function (c) {
          palHtml += '<div class="mv-pal-swatch' + (selectedColor === c ? ' active' : '') +
            '" data-color="' + c + '" style="background:' + c + '"></div>';
        });
        palHtml += '</div>';

        container.innerHTML =
          '<div class="mv-exercise">' +
            '<div class="mv-header">' +
              '<span class="mv-badge">Images Abstraites — Rappel' + (multiCount > 1 ? ' (' + (currentPattern + 1) + '/' + multiCount + ')' : '') + '</span>' +
            '</div>' +
            dotsHtml +
            '<p class="mv-instruction">Reproduis le motif en cliquant sur les cases :</p>' +
            palHtml +
            '<div class="mv-grid-wrap">' + renderGrid(userGrid, cfg.size, cellSize, { clickable: true }) + '</div>' +
            '<div class="mv-actions">' +
              '<button class="mv-btn mv-secondary" id="mv-clear">Effacer tout</button>' +
              '<button class="mv-btn mv-primary" id="mv-submit">Verifier \u2192</button>' +
            '</div>' +
          '</div>';

        // Palette selection
        container.querySelectorAll('.mv-pal-swatch').forEach(function (sw) {
          sw.addEventListener('click', function () {
            var val = sw.dataset.color;
            selectedColor = val === 'null' ? null : val;
            container.querySelectorAll('.mv-pal-swatch').forEach(function (s) { s.classList.remove('active'); });
            sw.classList.add('active');
          });
        });

        // Cell clicks
        container.querySelectorAll('.mv-cell-pick').forEach(function (cell) {
          cell.addEventListener('click', function () {
            var r = parseInt(cell.dataset.r);
            var c = parseInt(cell.dataset.c);
            userGrid[r][c] = selectedColor;
            if (selectedColor) {
              cell.style.background = selectedColor;
              cell.classList.remove('mv-cell-empty');
            } else {
              cell.style.background = '';
              cell.classList.add('mv-cell-empty');
            }
          });
        });

        container.querySelector('#mv-clear').addEventListener('click', function () {
          for (var r = 0; r < cfg.size; r++)
            for (var c = 0; c < cfg.size; c++) userGrid[r][c] = null;
          buildRecallUI();
        });

        container.querySelector('#mv-submit').addEventListener('click', function () {
          if (multiCount > 1 && currentPattern < multiCount - 1) {
            patterns[currentPattern]._userGrid = userGrid;
            currentPattern++;
            renderRecall();
          } else {
            patterns[currentPattern]._userGrid = userGrid;
            showPatternResult();
          }
        });
      }

      buildRecallUI();
    }

    function showPatternResult() {
      var totalCells = 0;
      var correctCells = 0;
      var elapsed = Math.round((Date.now() - startTime) / 1000);

      var comparisonsHtml = '';
      patterns.forEach(function (pat, idx) {
        var user = pat._userGrid || [];
        var patCorrect = 0;
        var patTotal = cfg.size * cfg.size;
        totalCells += patTotal;
        for (var r = 0; r < cfg.size; r++) {
          for (var c = 0; c < cfg.size; c++) {
            var orig = pat.grid[r][c] || null;
            var ans = (user[r] && user[r][c]) || null;
            if (orig === ans) patCorrect++;
          }
        }
        correctCells += patCorrect;

        comparisonsHtml +=
          '<div class="mv-compare">' +
            '<div><div class="mv-compare-label">Original' + (multiCount > 1 ? ' #' + (idx + 1) : '') + '</div>' +
              '<div class="mv-grid-wrap">' + renderGrid(pat.grid, cfg.size, cellSize) + '</div>' +
            '</div>' +
            '<div><div class="mv-compare-label">Ta reponse</div>' +
              '<div class="mv-grid-wrap">' + renderGrid(user, cfg.size, cellSize, { diffGrid: pat.grid }) + '</div>' +
            '</div>' +
          '</div>';
      });

      var pct = Math.round(correctCells / totalCells * 100);
      saveResult('images-abstraites-' + diff, correctCells, totalCells, elapsed);

      container.innerHTML =
        '<div class="mv-exercise">' +
          '<div class="mv-header"><span class="mv-badge">Images Abstraites</span></div>' +
          '<div class="mv-score">' + pct + '%</div>' +
          '<div class="mv-score-sub">' + correctCells + ' / ' + totalCells + ' cases correctes</div>' +
          comparisonsHtml +
          '<div class="mv-actions">' +
            '<button class="mv-btn mv-primary" onclick="MemoryVisual.launch(\'imagesAbstraites\',\'' + diff + '\',' + multiCount + ')">Recommencer</button>' +
            '<button class="mv-btn mv-secondary" onclick="MemoryVisual.launch(\'imagesAbstraites\',\'' + diff + '\',' + Math.min(multiCount + 1, 5) + ')">+1 motif</button>' +
          '</div>' +
        '</div>';
    }

    renderMemorize();
  }

  // ══════════════════════════════
  //  RENDER PANEL / LAUNCH
  // ══════════════════════════════

  function renderPanel(el) {
    if (!el) return;
    injectCSS();

    var data = loadData();
    var history = data.history || [];

    var stats = {};
    history.forEach(function (h) {
      if (!stats[h.type]) stats[h.type] = { best: 0, sessions: 0 };
      stats[h.type].sessions++;
      var pct = Math.round(h.score / h.total * 100);
      if (pct > stats[h.type].best) stats[h.type].best = pct;
    });

    var exercises = [
      { id: 'noms-visages', name: 'Noms & Visages', icon: '\uD83D\uDC64', desc: 'Memorise des noms associes a des visages', action: 'nomsVisages', arg: '10' },
      { id: 'images-abstraites-easy', name: 'Images Abstraites', icon: '\uD83C\uDFA8', desc: 'Reproduis des motifs colores de memoire', action: 'imagesAbstraites', arg: "'easy',1" }
    ];

    var cardsHtml = exercises.map(function (ex) {
      var s = stats[ex.id] || {};
      return '<div class="mv-diff-btn" style="flex:1;min-width:180px;padding:16px;cursor:pointer;text-align:left" onclick="MemoryVisual.launch(\'' + ex.action + '\',' + ex.arg + ')">' +
        '<div style="font-size:1.4rem;margin-bottom:6px">' + ex.icon + '</div>' +
        '<div style="font-weight:600;color:var(--text,#f0ede8);margin-bottom:4px">' + ex.name + '</div>' +
        '<div style="font-size:.8rem;color:var(--muted,#7a7870)">' + ex.desc + '</div>' +
        (s.sessions ? '<div style="font-size:.75rem;color:var(--accent,#e8c97a);margin-top:6px">' + s.sessions + ' session' + (s.sessions > 1 ? 's' : '') + ' \u2014 record : ' + s.best + '%</div>' : '') +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div class="mv-panel">' +
        '<h3 class="sr-p-title">Memoire visuelle</h3>' +
        '<p class="sr-p-desc">Entraine ta memoire visuelle : noms & visages, motifs abstraits.</p>' +
        '<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px">' + cardsHtml + '</div>' +
        '<div id="mv-active"></div>' +
      '</div>';
  }

  function launch(action, arg, arg2) {
    injectCSS();
    var container = document.getElementById('mv-active');
    if (!container) return;
    container.scrollIntoView({ behavior: 'smooth' });

    switch (action) {
      case 'nomsVisages':
        nomsVisages(container, arg || 10);
        break;
      case 'imagesAbstraites':
        imagesAbstraites(container, arg || 'easy', arg2 || 1);
        break;
      case 'imagesAbstraitesMenu':
        renderDifficultyMenu(container);
        break;
    }
  }

  function renderDifficultyMenu(container) {
    var html = '<div class="mv-exercise">' +
      '<div class="mv-header"><span class="mv-badge">Images Abstraites</span></div>' +
      '<p class="mv-instruction">Choisis la difficulte :</p>' +
      '<div class="mv-difficulty">';
    ['easy', 'medium', 'hard'].forEach(function (d) {
      var c = DIFFICULTY[d];
      html += '<button class="mv-diff-btn" onclick="MemoryVisual.launch(\'imagesAbstraites\',\'' + d + '\',1)">' +
        c.label + '<br><span style="font-size:.75rem;color:var(--muted)">' + c.size + 'x' + c.size + ', ' + c.colors + ' couleurs</span></button>';
    });
    html += '</div>' +
      '<p class="mv-instruction" style="margin-top:12px">Ou mode multi-motifs :</p>' +
      '<div class="mv-difficulty">';
    [3, 4, 5].forEach(function (n) {
      html += '<button class="mv-diff-btn" onclick="MemoryVisual.launch(\'imagesAbstraites\',\'medium\',' + n + ')">' +
        n + ' motifs</button>';
    });
    html += '</div></div>';
    container.innerHTML = html;
  }

  return {
    renderPanel: renderPanel,
    launch: launch,
    nomsVisages: nomsVisages,
    imagesAbstraites: imagesAbstraites
  };
})();
