// ══════════════════════════════════════════════════════
//  Curiosita — Memory Events (WMC disciplines)
//  Speed Words, Historical Dates, Binary Numbers
//  3 additional World Memory Championship events
// ══════════════════════════════════════════════════════

var MemoryEvents = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_memevents';
  var cssInjected = false;

  // ══════════════════════════════
  //  DATA: French concrete nouns
  // ══════════════════════════════

  var FRENCH_WORDS = [
    'chat','maison','arbre','soleil','montagne','riviere','pont','etoile','chateau','jardin',
    'oiseau','fleur','nuage','lune','foret','bateau','chapeau','cle','feu','neige',
    'cheval','table','chaise','lampe','horloge','livre','fenetre','porte','tapis','miroir',
    'bougie','couteau','assiette','verre','cuillere','fourchette','panier','sac','ceinture','bague',
    'collier','montre','lunettes','parapluie','valise','echelle','marteau','clou','corde','ancre',
    'voile','roue','moteur','volant','phare','balcon','toit','chemine','escalier','cave',
    'grenier','mur','plafond','plancher','rideau','coussin','oreiller','drap','couverture','serviette',
    'savon','brosse','peigne','rasoir','ciseaux','aiguille','fil','bouton','fermeture','poche',
    'col','manche','cravate','echarpe','gant','botte','sandale','talon','semelle','lacet',
    'herbe','mousse','racine','branche','feuille','tronc','ecorce','graine','fruit','pomme',
    'poire','cerise','raisin','fraise','orange','citron','banane','peche','prune','melon',
    'carotte','tomate','oignon','pomme de terre','haricot','chou','salade','radis','navet','poireau',
    'pain','beurre','fromage','lait','oeuf','farine','sucre','sel','poivre','vinaigre',
    'huile','miel','confiture','gateau','tarte','biscuit','bonbon','chocolat','glace','creme',
    'soupe','riz','pates','viande','poisson','poulet','agneau','canard','lapin','saucisse',
    'fontaine','statue','colonne','arcade','clocher','dome','tour','rempart','douves','herse',
    'drapeau','tambour','trompette','violon','piano','guitare','harpe','flute','cloche','orgue',
    'crayon','stylo','gomme','regle','cahier','enveloppe','timbre','carte','globe','boussole',
    'telescope','loupe','balance','thermometre','sablier','cadran','pendule','ressort','levier','poulie',
    'rocher','falaise','grotte','volcan','glacier','desert','oasis','ile','presquile','cap',
    'plage','vague','maree','ecume','corail','coquillage','algue','meduse','dauphin','baleine',
    'requin','tortue','crabe','hippocampe','etoile de mer','poulpe','mouette','pelican','phoque','morse'
  ];

  // ══════════════════════════════
  //  DATA: Historical dates
  // ══════════════════════════════

  var HISTORICAL_DATES = [
    { event: "Prise de la Bastille", year: 1789 },
    { event: "Decouverte de l'Amerique par Colomb", year: 1492 },
    { event: "Bataille de Marignan", year: 1515 },
    { event: "Sacre de Charlemagne", year: 800 },
    { event: "Bataille de Hastings", year: 1066 },
    { event: "Chute de Constantinople", year: 1453 },
    { event: "Debut de la Revolution francaise", year: 1789 },
    { event: "Couronnement de Napoleon", year: 1804 },
    { event: "Bataille de Waterloo", year: 1815 },
    { event: "Abolition de l'esclavage en France", year: 1848 },
    { event: "Debut de la Premiere Guerre mondiale", year: 1914 },
    { event: "Armistice de la Premiere Guerre mondiale", year: 1918 },
    { event: "Debut de la Seconde Guerre mondiale", year: 1939 },
    { event: "Debarquement en Normandie", year: 1944 },
    { event: "Fin de la Seconde Guerre mondiale", year: 1945 },
    { event: "Declaration universelle des droits de l'homme", year: 1948 },
    { event: "Traite de Rome (CEE)", year: 1957 },
    { event: "Premier pas sur la Lune", year: 1969 },
    { event: "Chute du mur de Berlin", year: 1989 },
    { event: "Reunification allemande", year: 1990 },
    { event: "Invention de l'imprimerie par Gutenberg", year: 1454 },
    { event: "Publication de l'Encyclopedie de Diderot", year: 1751 },
    { event: "Revolution americaine (Declaration d'independance)", year: 1776 },
    { event: "Invention de la machine a vapeur par Watt", year: 1769 },
    { event: "Decouverte de la radioactivite par Becquerel", year: 1896 },
    { event: "Publication de la theorie de la relativite", year: 1905 },
    { event: "Decouverte de la penicilline par Fleming", year: 1928 },
    { event: "Premiere bombe atomique (Hiroshima)", year: 1945 },
    { event: "Lancement du satellite Spoutnik", year: 1957 },
    { event: "Invention du telephone par Bell", year: 1876 },
    { event: "Premiere projection cinematographique des Lumiere", year: 1895 },
    { event: "Bapteme de Clovis", year: 496 },
    { event: "Edit de Nantes par Henri IV", year: 1598 },
    { event: "Revocation de l'edit de Nantes", year: 1685 },
    { event: "Mort de Louis XIV", year: 1715 },
    { event: "Prise de la Bastille", year: 1789 },
    { event: "Execution de Louis XVI", year: 1793 },
    { event: "Coup d'Etat du 18 Brumaire", year: 1799 },
    { event: "Bataille d'Austerlitz", year: 1805 },
    { event: "Commune de Paris", year: 1871 },
    { event: "Loi de separation de l'Eglise et de l'Etat", year: 1905 },
    { event: "Front populaire en France", year: 1936 },
    { event: "Appel du 18 juin (de Gaulle)", year: 1940 },
    { event: "Creation de l'ONU", year: 1945 },
    { event: "Independance de l'Inde", year: 1947 },
    { event: "Revolution cubaine", year: 1959 },
    { event: "Assassination de Kennedy", year: 1963 },
    { event: "Mai 68 en France", year: 1968 },
    { event: "Mort de Mao Zedong", year: 1976 },
    { event: "Election de Mandela en Afrique du Sud", year: 1994 },
    { event: "Attentats du 11 septembre", year: 2001 },
    { event: "Decouverte du boson de Higgs", year: 2012 },
    { event: "Invention du World Wide Web par Berners-Lee", year: 1989 },
    { event: "Premiere greffe du coeur par Barnard", year: 1967 },
    { event: "Eruption du Vesuve (destruction de Pompei)", year: 79 },
    { event: "Fondation de Rome (traditionnelle)", year: -753 },
    { event: "Mort de Socrate", year: -399 },
    { event: "Conquete de la Gaule par Cesar", year: -52 }
  ];

  // ══════════════════════════════
  //  CSS injection
  // ══════════════════════════════

  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;

    var css = [
      '.me-center { margin-top: 0.5rem; }',
      '.me-exercises { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }',
      '.me-exercise-card { display:flex; align-items:center; gap:0.75rem; padding:0.75rem 1rem; border-radius:10px; border:1px solid var(--border); background:var(--surface); cursor:pointer; transition:border-color .2s, background .2s; }',
      '.me-exercise-card:hover { border-color: var(--accent); background: rgba(240,237,232,0.06); }',
      '.me-exercise-icon { font-size: 1.8rem; flex-shrink: 0; }',
      '.me-exercise-info { flex: 1; }',
      '.me-exercise-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 0.15rem; color: var(--text); }',
      '.me-exercise-desc { font-size: 0.78rem; color: var(--muted); }',
      '.me-exercise-stat { font-size: 0.7rem; color: var(--accent); margin-top: 0.3rem; }',
      '.me-exercise-arrow { font-size: 1.2rem; color: var(--muted); }',
      '.me-container { min-height: 0; }',

      // Exercise layout
      '.me-exercise { background: var(--surface); border-radius: 12px; padding: 1.5rem; border: 1px solid var(--border); }',
      '.me-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }',
      '.me-badge { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); font-weight: 600; background: rgba(232,201,122,0.1); padding: 0.2rem 0.6rem; border-radius: 20px; }',
      '.me-timer { font-size: 0.85rem; color: var(--muted); font-variant-numeric: tabular-nums; }',
      '.me-instruction { font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.5; }',

      // Buttons
      '.me-btn { padding: 0.55rem 1.2rem; border-radius: 8px; border: none; cursor: pointer; font-size: 0.82rem; font-weight: 500; transition: background .2s, opacity .2s; font-family: inherit; }',
      '.me-primary { background: var(--accent); color: #0c0c0e; }',
      '.me-primary:hover { opacity: 0.85; }',
      '.me-secondary { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }',
      '.me-secondary:hover { background: rgba(240,237,232,0.08); }',
      '.me-actions { display: flex; gap: 0.5rem; margin-top: 1.2rem; flex-wrap: wrap; }',

      // Difficulty selector
      '.me-difficulty { display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }',
      '.me-diff-btn { padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid var(--border); background: var(--surface2); color: var(--text); cursor: pointer; font-size: 0.8rem; font-family: inherit; transition: all .2s; }',
      '.me-diff-btn:hover, .me-diff-btn.active { border-color: var(--accent); background: rgba(232,201,122,0.12); color: var(--accent); }',

      // Score
      '.me-score { font-size: 2.4rem; font-weight: 700; text-align: center; color: var(--text); margin: 0.5rem 0 0.2rem; }',
      '.me-score-pct { text-align: center; font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; }',

      // Word grid (Speed Words)
      '.me-word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 0.5rem; margin-bottom: 1.2rem; }',
      '.me-word-cell { background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 0.5rem 0.7rem; text-align: center; font-size: 0.85rem; color: var(--text); font-weight: 500; }',
      '.me-word-cell.me-highlight { border-color: var(--accent); background: rgba(232,201,122,0.08); }',

      // Recall inputs (Speed Words)
      '.me-recall-list { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }',
      '.me-recall-row { display: flex; align-items: center; gap: 0.5rem; }',
      '.me-recall-num { font-size: 0.75rem; color: var(--muted); min-width: 1.5rem; text-align: right; }',
      '.me-recall-input { flex: 1; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.4rem 0.6rem; color: var(--text); font-size: 0.85rem; font-family: inherit; outline: none; transition: border-color .2s; }',
      '.me-recall-input:focus { border-color: var(--accent); }',

      // Result words
      '.me-result-row { display: flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0; font-size: 0.82rem; border-bottom: 1px solid var(--border); }',
      '.me-result-row:last-child { border-bottom: none; }',
      '.me-result-row.correct { color: var(--green); }',
      '.me-result-row.partial { color: var(--accent); }',
      '.me-result-row.wrong { color: var(--accent2); }',
      '.me-result-num { min-width: 1.5rem; text-align: right; color: var(--muted); font-size: 0.75rem; }',
      '.me-result-expected { color: var(--muted); font-size: 0.75rem; margin-left: auto; }',
      '.me-results-list { max-height: 350px; overflow-y: auto; margin-bottom: 1rem; padding-right: 0.3rem; }',

      // Dates table
      '.me-dates-grid { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.2rem; }',
      '.me-date-row { display: flex; align-items: center; gap: 0.75rem; background: var(--surface2); border-radius: 8px; padding: 0.55rem 0.8rem; border: 1px solid var(--border); }',
      '.me-date-event { flex: 1; font-size: 0.83rem; color: var(--text); }',
      '.me-date-year { font-weight: 700; font-size: 0.9rem; color: var(--accent); min-width: 3.5rem; text-align: right; font-variant-numeric: tabular-nums; }',
      '.me-date-input { width: 5rem; background: var(--surface2); border: 1px solid var(--border); border-radius: 6px; padding: 0.35rem 0.5rem; color: var(--text); font-size: 0.85rem; font-family: inherit; text-align: center; outline: none; font-variant-numeric: tabular-nums; }',
      '.me-date-input:focus { border-color: var(--accent); }',

      // Binary digits
      '.me-binary-display { display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center; margin-bottom: 1.2rem; }',
      '.me-binary-group { font-family: "JetBrains Mono", monospace; font-size: 1.3rem; letter-spacing: 0.15em; color: var(--text); background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 0.5rem 0.7rem; }',
      '.me-binary-input { width: 100%; max-width: 500px; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; padding: 0.6rem 0.8rem; color: var(--text); font-family: "JetBrains Mono", monospace; font-size: 1.1rem; letter-spacing: 0.15em; outline: none; text-align: center; margin: 0 auto 1rem; display: block; }',
      '.me-binary-input:focus { border-color: var(--accent); }',
      '.me-binary-result { display: flex; flex-wrap: wrap; gap: 0.15rem; justify-content: center; margin-bottom: 1rem; font-family: "JetBrains Mono", monospace; font-size: 1.1rem; letter-spacing: 0.1em; }',
      '.me-binary-char { padding: 0.15rem 0.2rem; }',
      '.me-binary-char.correct { color: var(--green); }',
      '.me-binary-char.wrong { color: var(--accent2); }',
      '.me-binary-sep { width: 0.5rem; }',

      // Responsive
      '@media (max-width: 768px) {',
      '  .me-word-grid { grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); }',
      '  .me-binary-group { font-size: 1rem; }',
      '  .me-binary-input { font-size: 0.95rem; }',
      '}'
    ].join('\n');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ══════════════════════════════
  //  PERSISTENCE
  // ══════════════════════════════

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
  //  UTILS
  // ══════════════════════════════

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ══════════════════════════════════════════
  //  EVENT 1: SPEED WORDS (Mots Rapides)
  // ══════════════════════════════════════════

  function speedWords(container, count) {
    count = count || 20;
    var pool = shuffle(FRENCH_WORDS);
    var words = pool.slice(0, count);

    var startTime = Date.now();
    var timerInterval;

    function updateTimer() {
      var el = document.getElementById('me-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var s = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = formatTime(s);
    }

    function renderDifficultyPicker() {
      var levels = [5, 8, 15, 20, 30];
      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Mots Rapides</span>' +
          '</div>' +
          '<p class="me-instruction">Choisis le nombre de mots a memoriser :</p>' +
          '<div class="me-difficulty">' +
            levels.map(function (n) {
              return '<button class="me-diff-btn' + (n === count ? ' active' : '') + '" data-n="' + n + '">' + n + ' mots</button>';
            }).join('') +
          '</div>' +
          '<button class="me-btn me-primary" id="me-start">Commencer</button>' +
        '</div>';

      container.querySelectorAll('.me-diff-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          container.querySelectorAll('.me-diff-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          count = parseInt(btn.dataset.n);
          pool = shuffle(FRENCH_WORDS);
          words = pool.slice(0, count);
        });
      });

      container.querySelector('#me-start').addEventListener('click', function () {
        renderMemorize();
      });
    }

    function renderMemorize() {
      startTime = Date.now();

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Mots Rapides</span>' +
            '<span class="me-timer" id="me-timer">0:00</span>' +
          '</div>' +
          '<p class="me-instruction">Memorise ces ' + count + ' mots dans l\u2019ordre :</p>' +
          '<div class="me-word-grid">' +
            words.map(function (w, i) {
              return '<div class="me-word-cell"><span style="color:var(--muted);font-size:0.7rem;margin-right:0.3rem">' + (i + 1) + '</span>' + w + '</div>';
            }).join('') +
          '</div>' +
          '<button class="me-btn me-primary" id="me-ready">J\u2019ai memorise \u2192</button>' +
        '</div>';

      timerInterval = setInterval(updateTimer, 1000);

      container.querySelector('#me-ready').addEventListener('click', function () {
        clearInterval(timerInterval);
        renderRecall();
      });
    }

    function renderRecall() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);

      var inputsHtml = '';
      for (var i = 0; i < count; i++) {
        inputsHtml +=
          '<div class="me-recall-row">' +
            '<span class="me-recall-num">' + (i + 1) + '.</span>' +
            '<input type="text" class="me-recall-input" data-idx="' + i + '" autocomplete="off" spellcheck="false">' +
          '</div>';
      }

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Mots Rapides</span>' +
            '<span class="me-timer">Memorise en ' + elapsed + 's</span>' +
          '</div>' +
          '<p class="me-instruction">Ecris les mots dans l\u2019ordre :</p>' +
          '<div class="me-recall-list">' + inputsHtml + '</div>' +
          '<button class="me-btn me-primary" id="me-check">Verifier \u2192</button>' +
        '</div>';

      var inputs = container.querySelectorAll('.me-recall-input');
      inputs.forEach(function (inp, idx) {
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' && idx < inputs.length - 1) {
            e.preventDefault();
            inputs[idx + 1].focus();
          }
        });
      });
      if (inputs.length) inputs[0].focus();

      container.querySelector('#me-check').addEventListener('click', function () {
        var answers = [];
        inputs.forEach(function (inp) { answers.push(inp.value.trim().toLowerCase()); });
        showWordResult(answers, elapsed);
      });
    }

    function showWordResult(answers, memTime) {
      var score = 0;
      var detailHtml = '';
      var wordsLower = words.map(function (w) { return w.toLowerCase(); });

      answers.forEach(function (ans, i) {
        var expected = wordsLower[i];
        var cls = '';
        var pts = '';

        if (ans === expected) {
          score += 1;
          cls = 'correct';
          pts = '+1';
        } else if (ans && wordsLower.indexOf(ans) !== -1) {
          score += 0.5;
          cls = 'partial';
          pts = '+0.5';
        } else {
          cls = 'wrong';
          pts = '0';
        }

        detailHtml +=
          '<div class="me-result-row ' + cls + '">' +
            '<span class="me-result-num">' + (i + 1) + '.</span>' +
            '<span>' + (ans || '\u2014') + '</span>' +
            '<span style="margin-left:0.5rem;font-size:0.7rem;opacity:0.7">' + pts + '</span>' +
            (cls !== 'correct' ? '<span class="me-result-expected">\u2192 ' + words[i] + '</span>' : '') +
          '</div>';
      });

      var pct = Math.round(score / count * 100);
      saveResult('speed-words', score, count, memTime);

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header"><span class="me-badge">Mots Rapides</span></div>' +
          '<div class="me-score">' + score + ' / ' + count + '</div>' +
          '<div class="me-score-pct">' + pct + '% \u2014 memorise en ' + memTime + 's</div>' +
          '<div class="me-results-list">' + detailHtml + '</div>' +
          '<div class="me-actions">' +
            '<button class="me-btn me-primary" onclick="MemoryEvents.launch(\'speedWords\',' + count + ')">Recommencer</button>' +
            (count < 30 ? '<button class="me-btn me-secondary" onclick="MemoryEvents.launch(\'speedWords\',' + Math.min(count + 5, 30) + ')">+5 mots</button>' : '') +
          '</div>' +
        '</div>';
    }

    renderDifficultyPicker();
  }

  // ══════════════════════════════════════════
  //  EVENT 2: HISTORICAL DATES
  // ══════════════════════════════════════════

  function historicalDates(container, count) {
    count = count || 10;
    var pool = shuffle(HISTORICAL_DATES);
    // Deduplicate by event name
    var seen = {};
    var events = [];
    for (var i = 0; i < pool.length && events.length < count; i++) {
      if (!seen[pool[i].event]) {
        seen[pool[i].event] = true;
        events.push(pool[i]);
      }
    }

    var startTime = Date.now();
    var timerInterval;

    function updateTimer() {
      var el = document.getElementById('me-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var s = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = formatTime(s);
    }

    function renderDifficultyPicker() {
      var levels = [5, 8, 10, 15, 20];
      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Dates Historiques</span>' +
          '</div>' +
          '<p class="me-instruction">Choisis le nombre d\u2019evenements a memoriser :</p>' +
          '<div class="me-difficulty">' +
            levels.map(function (n) {
              return '<button class="me-diff-btn' + (n === count ? ' active' : '') + '" data-n="' + n + '">' + n + ' dates</button>';
            }).join('') +
          '</div>' +
          '<button class="me-btn me-primary" id="me-start">Commencer</button>' +
        '</div>';

      container.querySelectorAll('.me-diff-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          container.querySelectorAll('.me-diff-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          count = parseInt(btn.dataset.n);
          pool = shuffle(HISTORICAL_DATES);
          seen = {};
          events = [];
          for (var i = 0; i < pool.length && events.length < count; i++) {
            if (!seen[pool[i].event]) {
              seen[pool[i].event] = true;
              events.push(pool[i]);
            }
          }
        });
      });

      container.querySelector('#me-start').addEventListener('click', function () {
        renderMemorize();
      });
    }

    function formatYear(y) {
      if (y < 0) return Math.abs(y) + ' av. J.-C.';
      return String(y);
    }

    function renderMemorize() {
      startTime = Date.now();

      var rowsHtml = events.map(function (ev) {
        return '<div class="me-date-row">' +
          '<span class="me-date-event">' + ev.event + '</span>' +
          '<span class="me-date-year">' + formatYear(ev.year) + '</span>' +
        '</div>';
      }).join('');

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Dates Historiques</span>' +
            '<span class="me-timer" id="me-timer">0:00</span>' +
          '</div>' +
          '<p class="me-instruction">Memorise la date de chaque evenement :</p>' +
          '<div class="me-dates-grid">' + rowsHtml + '</div>' +
          '<button class="me-btn me-primary" id="me-ready">J\u2019ai memorise \u2192</button>' +
        '</div>';

      timerInterval = setInterval(updateTimer, 1000);

      container.querySelector('#me-ready').addEventListener('click', function () {
        clearInterval(timerInterval);
        renderRecall();
      });
    }

    function renderRecall() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);

      var rowsHtml = events.map(function (ev, i) {
        return '<div class="me-date-row">' +
          '<span class="me-date-event">' + ev.event + '</span>' +
          '<input type="text" class="me-date-input" data-idx="' + i + '" placeholder="annee" inputmode="numeric" autocomplete="off">' +
        '</div>';
      }).join('');

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Dates Historiques</span>' +
            '<span class="me-timer">Memorise en ' + elapsed + 's</span>' +
          '</div>' +
          '<p class="me-instruction">Indique l\u2019annee de chaque evenement :</p>' +
          '<div class="me-dates-grid">' + rowsHtml + '</div>' +
          '<button class="me-btn me-primary" id="me-check">Verifier \u2192</button>' +
        '</div>';

      var inputs = container.querySelectorAll('.me-date-input');
      inputs.forEach(function (inp, idx) {
        inp.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' && idx < inputs.length - 1) {
            e.preventDefault();
            inputs[idx + 1].focus();
          }
        });
      });
      if (inputs.length) inputs[0].focus();

      container.querySelector('#me-check').addEventListener('click', function () {
        var answers = [];
        inputs.forEach(function (inp) {
          var val = inp.value.trim().replace(/\s/g, '');
          // Handle "av" or negative input
          var neg = false;
          if (val.match(/av/i) || val.charAt(0) === '-') {
            neg = true;
            val = val.replace(/[-]/g, '').replace(/av\.?\s*(j\.?-?c\.?)?/i, '').trim();
          }
          var num = parseInt(val);
          if (isNaN(num)) {
            answers.push(null);
          } else {
            answers.push(neg ? -num : num);
          }
        });
        showDateResult(answers, elapsed);
      });
    }

    function showDateResult(answers, memTime) {
      var score = 0;
      var detailHtml = '';

      events.forEach(function (ev, i) {
        var ans = answers[i];
        var expected = ev.year;
        var cls = '';
        var pts = '';

        if (ans === expected) {
          score += 1;
          cls = 'correct';
          pts = '+1';
        } else if (ans !== null && Math.abs(ans - expected) <= 10) {
          score += 0.5;
          cls = 'partial';
          pts = '+0.5';
        } else {
          cls = 'wrong';
          pts = '0';
        }

        var ansDisplay = ans !== null ? formatYear(ans) : '\u2014';

        detailHtml +=
          '<div class="me-result-row ' + cls + '">' +
            '<span class="me-result-num">' + (i + 1) + '.</span>' +
            '<span style="flex:1">' + ev.event + '</span>' +
            '<span style="min-width:4rem;text-align:right">' + ansDisplay + '</span>' +
            '<span style="margin-left:0.4rem;font-size:0.7rem;opacity:0.7">' + pts + '</span>' +
            (cls !== 'correct' ? '<span class="me-result-expected">\u2192 ' + formatYear(expected) + '</span>' : '') +
          '</div>';
      });

      var pct = Math.round(score / events.length * 100);
      saveResult('historical-dates', score, events.length, memTime);

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header"><span class="me-badge">Dates Historiques</span></div>' +
          '<div class="me-score">' + score + ' / ' + events.length + '</div>' +
          '<div class="me-score-pct">' + pct + '% \u2014 memorise en ' + memTime + 's</div>' +
          '<div class="me-results-list">' + detailHtml + '</div>' +
          '<div class="me-actions">' +
            '<button class="me-btn me-primary" onclick="MemoryEvents.launch(\'historicalDates\',' + count + ')">Recommencer</button>' +
            (count < 20 ? '<button class="me-btn me-secondary" onclick="MemoryEvents.launch(\'historicalDates\',' + Math.min(count + 5, 20) + ')">+5 dates</button>' : '') +
          '</div>' +
        '</div>';
    }

    renderDifficultyPicker();
  }

  // ══════════════════════════════════════════
  //  EVENT 3: BINARY NUMBERS
  // ══════════════════════════════════════════

  function binaryNumbers(container, count) {
    count = count || 20;
    var digits = [];
    for (var i = 0; i < count; i++) digits.push(Math.random() < 0.5 ? 0 : 1);

    var startTime = Date.now();
    var timerInterval;

    function updateTimer() {
      var el = document.getElementById('me-timer');
      if (!el) { clearInterval(timerInterval); return; }
      var s = Math.floor((Date.now() - startTime) / 1000);
      el.textContent = formatTime(s);
    }

    function renderDifficultyPicker() {
      var levels = [8, 12, 20, 40, 60];
      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Nombres Binaires</span>' +
          '</div>' +
          '<p class="me-instruction">Choisis le nombre de chiffres binaires a memoriser :</p>' +
          '<div class="me-difficulty">' +
            levels.map(function (n) {
              return '<button class="me-diff-btn' + (n === count ? ' active' : '') + '" data-n="' + n + '">' + n + ' chiffres</button>';
            }).join('') +
          '</div>' +
          '<button class="me-btn me-primary" id="me-start">Commencer</button>' +
        '</div>';

      container.querySelectorAll('.me-diff-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
          container.querySelectorAll('.me-diff-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          count = parseInt(btn.dataset.n);
          digits = [];
          for (var i = 0; i < count; i++) digits.push(Math.random() < 0.5 ? 0 : 1);
        });
      });

      container.querySelector('#me-start').addEventListener('click', function () {
        renderMemorize();
      });
    }

    function renderMemorize() {
      startTime = Date.now();

      // Group by 4
      var groups = [];
      for (var i = 0; i < digits.length; i += 4) {
        groups.push(digits.slice(i, i + 4).join(''));
      }

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Nombres Binaires</span>' +
            '<span class="me-timer" id="me-timer">0:00</span>' +
          '</div>' +
          '<p class="me-instruction">Memorise cette sequence de ' + count + ' chiffres binaires :</p>' +
          '<div class="me-binary-display">' +
            groups.map(function (g) {
              return '<span class="me-binary-group">' + g + '</span>';
            }).join('') +
          '</div>' +
          '<button class="me-btn me-primary" id="me-ready">J\u2019ai memorise \u2192</button>' +
        '</div>';

      timerInterval = setInterval(updateTimer, 1000);

      container.querySelector('#me-ready').addEventListener('click', function () {
        clearInterval(timerInterval);
        renderRecall();
      });
    }

    function renderRecall() {
      var elapsed = Math.round((Date.now() - startTime) / 1000);

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header">' +
            '<span class="me-badge">Nombres Binaires</span>' +
            '<span class="me-timer">Memorise en ' + elapsed + 's</span>' +
          '</div>' +
          '<p class="me-instruction">Ecris la sequence binaire (' + count + ' chiffres, uniquement 0 et 1) :</p>' +
          '<input type="text" class="me-binary-input" id="me-binary-input" maxlength="' + (count + 20) + '" autocomplete="off" placeholder="Tape les ' + count + ' chiffres binaires...">' +
          '<button class="me-btn me-primary" id="me-check">Verifier \u2192</button>' +
        '</div>';

      var inp = container.querySelector('#me-binary-input');
      inp.focus();

      // Filter to only 0 and 1
      inp.addEventListener('input', function () {
        inp.value = inp.value.replace(/[^01]/g, '');
      });

      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          container.querySelector('#me-check').click();
        }
      });

      container.querySelector('#me-check').addEventListener('click', function () {
        var answer = inp.value.replace(/[^01]/g, '');
        showBinaryResult(answer, elapsed);
      });
    }

    function showBinaryResult(answer, memTime) {
      var correct = 0;
      var detailHtml = '';

      for (var i = 0; i < digits.length; i++) {
        var expected = String(digits[i]);
        var given = i < answer.length ? answer[i] : '';
        var ok = given === expected;
        if (ok) correct++;

        detailHtml += '<span class="me-binary-char ' + (ok ? 'correct' : 'wrong') + '">' +
          (given || '_') + '</span>';
        if ((i + 1) % 4 === 0 && i < digits.length - 1) {
          detailHtml += '<span class="me-binary-sep"></span>';
        }
      }

      var pct = Math.round(correct / count * 100);
      saveResult('binary-numbers', correct, count, memTime);

      container.innerHTML =
        '<div class="me-exercise">' +
          '<div class="me-header"><span class="me-badge">Nombres Binaires</span></div>' +
          '<div class="me-score">' + correct + ' / ' + count + '</div>' +
          '<div class="me-score-pct">' + pct + '% \u2014 memorise en ' + memTime + 's</div>' +
          '<div class="me-binary-result">' + detailHtml + '</div>' +
          '<p style="text-align:center;font-size:0.78rem;color:var(--muted);margin-bottom:1rem;">Attendu : ' +
            digits.join('').replace(/(.{4})/g, '$1 ').trim() +
          '</p>' +
          '<div class="me-actions">' +
            '<button class="me-btn me-primary" onclick="MemoryEvents.launch(\'binaryNumbers\',' + count + ')">Recommencer</button>' +
            (count < 60 ? '<button class="me-btn me-secondary" onclick="MemoryEvents.launch(\'binaryNumbers\',' + Math.min(count + 20, 60) + ')">+20 chiffres</button>' : '') +
          '</div>' +
        '</div>';
    }

    renderDifficultyPicker();
  }

  // ══════════════════════════════════════════
  //  PANEL RENDER + LAUNCH
  // ══════════════════════════════════════════

  function renderPanel(el) {
    if (!el) return;
    injectCSS();

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
      {
        id: 'speed-words',
        name: 'Mots Rapides',
        icon: '\uD83D\uDCDD',
        desc: 'Memorise une liste de mots dans l\u2019ordre',
        action: 'speedWords',
        arg: 20
      },
      {
        id: 'historical-dates',
        name: 'Dates Historiques',
        icon: '\uD83D\uDCC5',
        desc: 'Associe des evenements a leurs dates',
        action: 'historicalDates',
        arg: 10
      },
      {
        id: 'binary-numbers',
        name: 'Nombres Binaires',
        icon: '\uD83D\uDCBB',
        desc: 'Memorise des sequences de 0 et de 1',
        action: 'binaryNumbers',
        arg: 20
      }
    ];

    var cardsHtml = exercises.map(function (ex) {
      var s = stats[ex.id] || {};
      return '<div class="me-exercise-card" onclick="MemoryEvents.launch(\'' + ex.action + '\',' + (ex.arg || 'null') + ')">' +
        '<div class="me-exercise-icon">' + ex.icon + '</div>' +
        '<div class="me-exercise-info">' +
          '<div class="me-exercise-name">' + ex.name + '</div>' +
          '<div class="me-exercise-desc">' + ex.desc + '</div>' +
          (s.sessions ? '<div class="me-exercise-stat">' + s.sessions + ' session' + (s.sessions > 1 ? 's' : '') + ' \u2014 record : ' + s.best + '%</div>' : '') +
        '</div>' +
        '<span class="me-exercise-arrow">\u203A</span>' +
      '</div>';
    }).join('');

    el.innerHTML =
      '<div class="me-center">' +
        '<h3 class="sr-p-title">Epreuves de memoire</h3>' +
        '<p class="sr-p-desc">Trois disciplines inspirees des Championnats du Monde de Memoire. Progresse a ton rythme.</p>' +
        '<div class="me-exercises">' + cardsHtml + '</div>' +
        '<div class="me-container" id="me-active"></div>' +
      '</div>';
  }

  function launch(action, arg) {
    injectCSS();
    var container = document.getElementById('me-active');
    if (!container) return;
    container.scrollIntoView({ behavior: 'smooth' });

    switch (action) {
      case 'speedWords': speedWords(container, arg); break;
      case 'historicalDates': historicalDates(container, arg); break;
      case 'binaryNumbers': binaryNumbers(container, arg); break;
    }
  }

  // ══════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════

  return {
    renderPanel: renderPanel,
    launch: launch,
    speedWords: speedWords,
    historicalDates: historicalDates,
    binaryNumbers: binaryNumbers
  };
})();
