// ══════════════════════════════════════════════════════
//  Curiosità — Memory Association Tools
//  Tool 1: PAO System (Person-Action-Object)
//  Tool 2: Link/Chain Method (Méthode des Liens)
//  Exposes: MemoryAssoc.renderPanel(el), MemoryAssoc.launch(action, arg)
// ══════════════════════════════════════════════════════

const MemoryAssoc = (function () {
  'use strict';

  const STORAGE_KEY = 'curiosita_memassoc';
  let state = null;
  let rootEl = null;
  let cssInjected = false;

  // ── Persistence ──

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) { state = JSON.parse(raw); return; }
    } catch (_) {}
    state = { pao: {}, chains: [], paoStats: { correct: 0, total: 0 } };
    seedPAO();
    save();
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
  }

  // ── Default PAO entries (20 spread across 00-99) ──

  const DEFAULT_PAO = {
    '00': { p: 'Zidane', a: 'jongle', o: 'ballon' },
    '01': { p: 'De Gaulle', a: 'salue', o: 'drapeau' },
    '05': { p: 'Napoléon', a: 'chevauche', o: 'canon' },
    '10': { p: 'Astérix', a: 'boit', o: 'potion' },
    '11': { p: 'Tintin', a: 'enquête', o: 'loupe' },
    '15': { p: 'Molière', a: 'déclame', o: 'plume' },
    '20': { p: 'Édith Piaf', a: 'chante', o: 'micro' },
    '22': { p: 'Victor Hugo', a: 'écrit', o: 'manuscrit' },
    '25': { p: 'Marie Curie', a: 'analyse', o: 'éprouvette' },
    '30': { p: 'Jean Dujardin', a: 'mime', o: 'chapeau' },
    '33': { p: 'Coluche', a: 'rigole', o: 'nez rouge' },
    '40': { p: 'Jeanne d\'Arc', a: 'brandit', o: 'épée' },
    '44': { p: 'Louis XIV', a: 'danse', o: 'couronne' },
    '50': { p: 'Cézanne', a: 'peint', o: 'toile' },
    '55': { p: 'Cousteau', a: 'plonge', o: 'palmes' },
    '60': { p: 'Voltaire', a: 'débat', o: 'livre' },
    '66': { p: 'Descartes', a: 'réfléchit', o: 'compas' },
    '70': { p: 'Bardot', a: 'pose', o: 'caméra' },
    '80': { p: 'Pasteur', a: 'observe', o: 'microscope' },
    '99': { p: 'Le Petit Prince', a: 'dessine', o: 'mouton' }
  };

  function seedPAO() {
    for (const k in DEFAULT_PAO) {
      if (!state.pao[k]) state.pao[k] = { ...DEFAULT_PAO[k] };
    }
  }

  // ── Word bank for Link Method (150+ concrete French nouns) ──

  const WORD_BANK = [
    'chat','arbre','clé','montagne','guitare','robot','fusée','parapluie','couronne','dragon',
    'bibliothèque','éléphant','pont','diamant','volcan','horloge','trésor','piranha','château','étoile',
    'locomotive','papillon','marteau','trompette','baleine','pyramide','cerise','lunettes','ancre','fantôme',
    'hélicoptère','cactus','tigre','piano','fontaine','skateboard','pieuvre','télescope','bougie','épée',
    'perroquet','grotte','violon','sablier','crocodile','champignon','éclair','statue','plume','toboggan',
    'kangourou','coffre','phare','dinosaure','pendule','tortue','parachute','araignée','boussole','trapèze',
    'cheminée','scarabée','harpe','glacier','lanterne','poulpe','cathédrale','girafe','moulin','trident',
    'balançoire','licorne','aquarium','avalanche','tonneau','méduse','forteresse','caméléon','orgue','cascade',
    'grenouille','cathédrale','baguette','navire','labyrinthe','cigogne','cristal','tamtam','girouette','requin',
    'accordéon','palmier','momie','ambulance','gargouille','ruche','boomerang','pégase','cathédrale','oasis',
    'tournesol','morse','bicyclette','chaudron','orchidée','sphinx','toboggan','colibri','drapeau','igloo',
    'mandoline','rhinocéros','trampoline','oiseau','cabane','phoque','hamac','lézard','volant','criquet',
    'escalier','cerf','miroir','coquillage','pingouin','roulotte','hibou','sirène','moustache','roseau',
    'chandelier','caribou','pendentif','voilier','éventail','gazelle','harmonica','iguane','jardin','koala',
    'lampadaire','mouette','nénuphar','orchestre','pagode','quartz','raquette','saxophone','tandem','urne',
    'viaduc','wagon','xylophone','yourte','zeppelin'
  ];

  // ── CSS injection ──

  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;
    const style = document.createElement('style');
    style.textContent = `
/* Memory Association Tools */
.ma-container { max-width: 900px; margin: 0 auto; }
.ma-nav { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.ma-nav-btn {
  padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border);
  background: var(--surface); color: var(--text); cursor: pointer;
  font-size: .85rem; transition: all .2s;
}
.ma-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
.ma-nav-btn.active { background: var(--accent); color: #0c0c0e; border-color: var(--accent); font-weight: 600; }

.ma-section { animation: maFadeIn .3s ease; }
@keyframes maFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }

.ma-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--text); margin-bottom: 16px; }
.ma-subtitle { font-size: .95rem; color: var(--muted); margin-bottom: 12px; }

/* PAO Table */
.ma-pao-table { width: 100%; border-collapse: collapse; font-size: .82rem; }
.ma-pao-table th { text-align: left; padding: 6px 8px; color: var(--muted); border-bottom: 1px solid var(--border); font-weight: 500; }
.ma-pao-table td { padding: 4px 6px; border-bottom: 1px solid var(--border); }
.ma-pao-table tr:hover { background: var(--surface); }
.ma-pao-num { font-family: 'JetBrains Mono', monospace; color: var(--accent); font-weight: 600; width: 36px; }
.ma-pao-input {
  background: transparent; border: 1px solid transparent; color: var(--text);
  padding: 3px 6px; border-radius: 4px; width: 100%; font-size: .82rem;
  transition: border-color .2s;
}
.ma-pao-input:focus { border-color: var(--accent); outline: none; background: var(--surface); }
.ma-pao-input::placeholder { color: var(--muted); opacity: .5; }

.ma-progress-bar { height: 6px; background: var(--surface2); border-radius: 3px; overflow: hidden; margin: 8px 0 16px; }
.ma-progress-fill { height: 100%; background: var(--accent); border-radius: 3px; transition: width .3s; }

.ma-filter { padding: 6px 10px; background: var(--surface); border: 1px solid var(--border); color: var(--text); border-radius: 6px; font-size: .82rem; margin-bottom: 12px; width: 220px; }
.ma-filter:focus { border-color: var(--accent); outline: none; }

/* Quiz & practice */
.ma-card {
  background: var(--surface); border: 1px solid var(--border); border-radius: 12px;
  padding: 24px; text-align: center; margin-bottom: 16px;
}
.ma-card-big { font-family: 'JetBrains Mono', monospace; font-size: 2.5rem; color: var(--accent); margin: 12px 0; }
.ma-card-label { font-size: .8rem; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
.ma-answer-input {
  padding: 10px 14px; font-size: 1rem; background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); border-radius: 8px; text-align: center; width: 200px;
}
.ma-answer-input:focus { border-color: var(--accent); outline: none; }

.ma-btn {
  padding: 8px 20px; border-radius: 8px; border: none; cursor: pointer;
  font-size: .85rem; font-weight: 600; transition: all .2s;
}
.ma-btn-primary { background: var(--accent); color: #0c0c0e; }
.ma-btn-primary:hover { filter: brightness(1.1); }
.ma-btn-secondary { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }
.ma-btn-secondary:hover { border-color: var(--accent); }

.ma-score { display: inline-flex; gap: 16px; margin: 12px 0; font-size: .9rem; color: var(--muted); }
.ma-score b { color: var(--text); }

.ma-result-correct { color: var(--green); font-weight: 600; }
.ma-result-wrong { color: var(--accent2); font-weight: 600; }

.ma-options { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin: 12px 0; }
.ma-option-btn {
  padding: 8px 16px; border-radius: 8px; background: var(--surface2); border: 1px solid var(--border);
  color: var(--text); cursor: pointer; font-size: .85rem; transition: all .15s;
}
.ma-option-btn:hover { border-color: var(--accent); }
.ma-option-btn.correct { background: rgba(105,240,174,.15); border-color: var(--green); color: var(--green); }
.ma-option-btn.wrong { background: rgba(201,122,122,.15); border-color: var(--accent2); color: var(--accent2); }

/* Digit groups */
.ma-digit-group { display: inline-flex; gap: 4px; margin: 0 6px; }
.ma-digit {
  display: inline-block; width: 28px; height: 36px; line-height: 36px; text-align: center;
  font-family: 'JetBrains Mono', monospace; font-size: 1.2rem; font-weight: 700;
  background: var(--surface2); border-radius: 4px; color: var(--accent);
}
.ma-pao-image { font-size: .85rem; color: var(--muted); margin: 4px 0; font-style: italic; }

/* Chain / Link method */
.ma-chain { display: flex; flex-wrap: wrap; gap: 4px; align-items: center; margin: 16px 0; }
.ma-chain-item {
  padding: 6px 14px; border-radius: 20px; font-size: .85rem; font-weight: 500;
  background: var(--surface); border: 1px solid var(--border); color: var(--text);
}
.ma-chain-item.revealed { background: rgba(232,201,122,.1); border-color: var(--accent); color: var(--accent); }
.ma-chain-item.blank { background: var(--surface2); color: transparent; min-width: 70px; cursor: pointer; border-style: dashed; }
.ma-chain-item.blank:hover { border-color: var(--accent); }
.ma-chain-item.correct-reveal { background: rgba(105,240,174,.12); border-color: var(--green); color: var(--green); }
.ma-chain-item.wrong-reveal { background: rgba(201,122,122,.12); border-color: var(--accent2); color: var(--accent2); }
.ma-chain-arrow { color: var(--muted); font-size: .7rem; }

.ma-tips {
  background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
  padding: 16px; margin: 16px 0; font-size: .82rem; color: var(--muted); line-height: 1.6;
}
.ma-tips strong { color: var(--text); }

.ma-saved-list { display: flex; flex-direction: column; gap: 8px; }
.ma-saved-item {
  display: flex; justify-content: space-between; align-items: center;
  padding: 10px 14px; background: var(--surface); border: 1px solid var(--border);
  border-radius: 8px; cursor: pointer; transition: border-color .2s;
}
.ma-saved-item:hover { border-color: var(--accent); }
.ma-saved-name { font-weight: 600; color: var(--text); }
.ma-saved-meta { font-size: .78rem; color: var(--muted); }
.ma-saved-actions { display: flex; gap: 6px; }
.ma-del-btn { background: none; border: none; color: var(--muted); cursor: pointer; font-size: .85rem; }
.ma-del-btn:hover { color: var(--accent2); }

.ma-textarea {
  width: 100%; min-height: 80px; padding: 10px; background: var(--surface); border: 1px solid var(--border);
  color: var(--text); border-radius: 8px; font-size: .85rem; resize: vertical;
}
.ma-textarea:focus { border-color: var(--accent); outline: none; }

.ma-flex { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.ma-mt { margin-top: 12px; }
.ma-mb { margin-bottom: 12px; }
.ma-gap { gap: 8px; }
`;
    document.head.appendChild(style);
  }

  // ══════════════════════════════
  //  RENDER PANEL (main entry)
  // ══════════════════════════════

  let currentView = 'home';

  function renderPanel(el) {
    injectCSS();
    if (!state) load();
    rootEl = el;
    renderView();
  }

  function renderView() {
    if (!rootEl) return;
    const views = {
      home: renderHome,
      'pao-table': renderPAOTable,
      'pao-quiz': renderPAOQuiz,
      'pao-apply': renderPAOApply,
      'link-exercise': renderLinkExercise,
      'link-free': renderLinkFree,
      'link-saved': renderLinkSaved
    };
    (views[currentView] || renderHome)();
  }

  function nav(view) { currentView = view; renderView(); }

  function renderHome() {
    const paoCount = Object.keys(state.pao).filter(k => state.pao[k].p || state.pao[k].a || state.pao[k].o).length;
    rootEl.innerHTML = `<div class="ma-container">
      <div class="ma-title">Outils d'association mémoire</div>
      <div class="ma-subtitle">Deux techniques puissantes pour ancrer l'information dans la mémoire à long terme.</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px">
        <div class="ma-card" style="text-align:left;cursor:pointer" data-ma-goto="pao-table">
          <div style="font-size:1.6rem;margin-bottom:8px">🔢</div>
          <div style="font-weight:700;color:var(--text);margin-bottom:4px">Système PAO</div>
          <div style="font-size:.8rem;color:var(--muted)">Personne-Action-Objet : mémorisez des séquences de chiffres grâce à des images mentales.</div>
          <div style="margin-top:10px;font-size:.78rem;color:var(--accent)">${paoCount}/100 entrées</div>
        </div>
        <div class="ma-card" style="text-align:left;cursor:pointer" data-ma-goto="link-exercise">
          <div style="font-size:1.6rem;margin-bottom:8px">🔗</div>
          <div style="font-weight:700;color:var(--text);margin-bottom:4px">Méthode des Liens</div>
          <div style="font-size:.8rem;color:var(--muted)">Créez des histoires visuelles pour retenir des listes dans l'ordre.</div>
          <div style="margin-top:10px;font-size:.78rem;color:var(--accent)">${state.chains.length} chaîne${state.chains.length !== 1 ? 's' : ''} sauvegardée${state.chains.length !== 1 ? 's' : ''}</div>
        </div>
      </div>
    </div>`;
    rootEl.querySelectorAll('[data-ma-goto]').forEach(el => {
      el.addEventListener('click', () => nav(el.dataset.maGoto));
    });
  }

  // ══════════════════════════════
  //  PAO TABLE
  // ══════════════════════════════

  function renderPAOTable() {
    const paoCount = Object.keys(state.pao).filter(k => {
      const e = state.pao[k]; return e && (e.p || e.a || e.o);
    }).length;
    let filterVal = '';

    function build() {
      let rows = '';
      for (let i = 0; i < 100; i++) {
        const k = String(i).padStart(2, '0');
        const e = state.pao[k] || { p: '', a: '', o: '' };
        if (filterVal && !k.includes(filterVal) &&
            !(e.p && e.p.toLowerCase().includes(filterVal)) &&
            !(e.a && e.a.toLowerCase().includes(filterVal)) &&
            !(e.o && e.o.toLowerCase().includes(filterVal))) continue;
        rows += `<tr>
          <td class="ma-pao-num">${k}</td>
          <td><input class="ma-pao-input" data-k="${k}" data-f="p" value="${esc(e.p || '')}" placeholder="Personne"></td>
          <td><input class="ma-pao-input" data-k="${k}" data-f="a" value="${esc(e.a || '')}" placeholder="Action"></td>
          <td><input class="ma-pao-input" data-k="${k}" data-f="o" value="${esc(e.o || '')}" placeholder="Objet"></td>
        </tr>`;
      }
      return rows;
    }

    rootEl.innerHTML = `<div class="ma-container">
      ${backNav('home')}
      <div class="ma-title">Table PAO (Personne-Action-Objet)</div>
      <div class="ma-subtitle">Remplissez votre table pour les chiffres 00 à 99. Chaque entrée associe un nombre à une Personne, une Action et un Objet.</div>
      <div class="ma-flex ma-mb">
        <input class="ma-filter" id="ma-pao-filter" placeholder="Rechercher…">
        <span style="color:var(--muted);font-size:.82rem"><b style="color:var(--accent)">${paoCount}</b>/100 remplis</span>
        <button class="ma-btn ma-btn-secondary" id="ma-pao-quiz-btn">Quiz</button>
        <button class="ma-btn ma-btn-secondary" id="ma-pao-app-btn">Application</button>
      </div>
      <div class="ma-progress-bar"><div class="ma-progress-fill" style="width:${paoCount}%"></div></div>
      <table class="ma-pao-table"><thead><tr><th>#</th><th>Personne</th><th>Action</th><th>Objet</th></tr></thead>
        <tbody id="ma-pao-body">${build()}</tbody>
      </table>
    </div>`;

    rootEl.querySelector('#ma-pao-filter').addEventListener('input', function () {
      filterVal = this.value.toLowerCase();
      document.getElementById('ma-pao-body').innerHTML = build();
      bindInputs();
    });
    rootEl.querySelector('#ma-pao-quiz-btn').addEventListener('click', () => nav('pao-quiz'));
    rootEl.querySelector('#ma-pao-app-btn').addEventListener('click', () => nav('pao-apply'));
    bindInputs();

    function bindInputs() {
      rootEl.querySelectorAll('.ma-pao-input').forEach(inp => {
        inp.addEventListener('change', function () {
          const k = this.dataset.k, f = this.dataset.f;
          if (!state.pao[k]) state.pao[k] = { p: '', a: '', o: '' };
          state.pao[k][f] = this.value.trim();
          save();
        });
      });
    }
  }

  // ══════════════════════════════
  //  PAO QUIZ
  // ══════════════════════════════

  function renderPAOQuiz() {
    const filled = Object.keys(state.pao).filter(k => {
      const e = state.pao[k]; return e.p && e.a && e.o;
    });
    if (filled.length < 5) {
      rootEl.innerHTML = `<div class="ma-container">${backNav('pao-table')}
        <div class="ma-card"><div class="ma-subtitle">Remplissez au moins 5 entrées PAO complètes pour lancer le quiz.</div>
        <button class="ma-btn ma-btn-primary" id="ma-go-table">Compléter la table</button></div></div>`;
      rootEl.querySelector('#ma-go-table').addEventListener('click', () => nav('pao-table'));
      return;
    }

    let mode = 1; // 1=digits→PAO, 2=PAO→digits
    let questions = [];
    let qi = 0, score = 0;

    function generateQuestions() {
      const shuffled = shuffle([...filled]).slice(0, 10);
      const fields = ['p', 'a', 'o'];
      const fieldLabels = { p: 'Personne', a: 'Action', o: 'Objet' };
      questions = shuffled.map(k => {
        const field = fields[Math.floor(Math.random() * 3)];
        const correct = state.pao[k][field];
        // Build options: correct + 3 distractors
        const distractors = shuffle(filled.filter(x => x !== k))
          .slice(0, 3).map(x => state.pao[x][field]).filter(Boolean);
        const options = shuffle([correct, ...distractors]).slice(0, 4);
        if (!options.includes(correct)) options[0] = correct;
        return { k, field, fieldLabel: fieldLabels[field], correct, options, mode };
      });
      if (mode === 2) {
        questions = shuffled.map(k => {
          const e = state.pao[k];
          const distractors = shuffle(filled.filter(x => x !== k)).slice(0, 3);
          const options = shuffle([k, ...distractors]);
          return { k, display: `${e.p} — ${e.a} — ${e.o}`, correct: k, options, mode: 2 };
        });
      }
    }

    function showQuestion() {
      if (qi >= questions.length) { showResult(); return; }
      const q = questions[qi];
      let html = `<div class="ma-card">
        <div class="ma-score">Question <b>${qi + 1}</b>/${questions.length} — Score : <b>${score}</b></div>`;
      if (q.mode === 1) {
        html += `<div class="ma-card-label">Quel est le/la <b>${q.fieldLabel}</b> pour :</div>
          <div class="ma-card-big">${q.k}</div>
          <div class="ma-options">${q.options.map(o =>
            `<button class="ma-option-btn" data-val="${esc(o)}">${esc(o)}</button>`).join('')}</div>`;
      } else {
        html += `<div class="ma-card-label">Quel nombre correspond à :</div>
          <div style="font-size:1.1rem;color:var(--text);margin:12px 0;font-weight:600">${esc(q.display)}</div>
          <div class="ma-options">${q.options.map(o =>
            `<button class="ma-option-btn" data-val="${esc(o)}">${o}</button>`).join('')}</div>`;
      }
      html += '</div>';
      rootEl.querySelector('#ma-quiz-area').innerHTML = html;

      rootEl.querySelectorAll('.ma-option-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const val = this.dataset.val;
          const isCorrect = val === q.correct;
          if (isCorrect) { score++; this.classList.add('correct'); }
          else {
            this.classList.add('wrong');
            rootEl.querySelectorAll('.ma-option-btn').forEach(b => {
              if (b.dataset.val === q.correct) b.classList.add('correct');
            });
          }
          state.paoStats.total++;
          if (isCorrect) state.paoStats.correct++;
          save();
          rootEl.querySelectorAll('.ma-option-btn').forEach(b => b.style.pointerEvents = 'none');
          setTimeout(() => { qi++; showQuestion(); }, 1000);
        });
      });
    }

    function showResult() {
      rootEl.querySelector('#ma-quiz-area').innerHTML = `<div class="ma-card">
        <div class="ma-card-label">Résultat</div>
        <div class="ma-card-big">${score}/${questions.length}</div>
        <div class="ma-subtitle">${score >= 8 ? 'Excellent !' : score >= 5 ? 'Pas mal !' : 'Continuez à pratiquer !'}</div>
        <div class="ma-flex" style="justify-content:center;margin-top:14px">
          <button class="ma-btn ma-btn-primary" id="ma-quiz-retry">Recommencer</button>
        </div>
      </div>`;
      rootEl.querySelector('#ma-quiz-retry').addEventListener('click', () => { qi = 0; score = 0; generateQuestions(); showQuestion(); });
    }

    rootEl.innerHTML = `<div class="ma-container">${backNav('pao-table')}
      <div class="ma-title">Quiz PAO</div>
      <div class="ma-flex ma-mb">
        <button class="ma-btn ${mode === 1 ? 'ma-btn-primary' : 'ma-btn-secondary'}" data-mode="1">Chiffres → PAO</button>
        <button class="ma-btn ${mode === 2 ? 'ma-btn-primary' : 'ma-btn-secondary'}" data-mode="2">PAO → Chiffres</button>
      </div>
      <div id="ma-quiz-area"></div>
    </div>`;

    rootEl.querySelectorAll('[data-mode]').forEach(btn => {
      btn.addEventListener('click', function () {
        mode = parseInt(this.dataset.mode);
        renderPAOQuiz();
      });
    });
    generateQuestions();
    showQuestion();
  }

  // ══════════════════════════════
  //  PAO APPLICATION
  // ══════════════════════════════

  function renderPAOApply() {
    const filled = Object.keys(state.pao).filter(k => {
      const e = state.pao[k]; return e.p && e.a && e.o;
    });
    if (filled.length < 10) {
      rootEl.innerHTML = `<div class="ma-container">${backNav('pao-table')}
        <div class="ma-card"><div class="ma-subtitle">Remplissez au moins 10 entrées PAO pour utiliser l'application.</div>
        <button class="ma-btn ma-btn-primary" id="ma-go-table2">Compléter la table</button></div></div>`;
      rootEl.querySelector('#ma-go-table2').addEventListener('click', () => nav('pao-table'));
      return;
    }

    let digitCount = 6;
    let digits = '';
    let phase = 'choose'; // choose, memorize, recall

    function generate() {
      const pairs = [];
      const count = digitCount / 2;
      const available = [...filled];
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * available.length);
        pairs.push(available[idx]);
      }
      digits = pairs.join('');
    }

    function render() {
      let html = `<div class="ma-container">${backNav('pao-table')}<div class="ma-title">Application PAO</div>`;

      if (phase === 'choose') {
        html += `<div class="ma-card">
          <div class="ma-subtitle">Combien de chiffres souhaitez-vous mémoriser ?</div>
          <div class="ma-flex" style="justify-content:center;margin-top:14px">
            ${[6, 8, 10, 12].map(n =>
              `<button class="ma-btn ${n === digitCount ? 'ma-btn-primary' : 'ma-btn-secondary'}" data-len="${n}">${n} chiffres</button>`).join('')}
          </div>
          <div style="margin-top:16px"><button class="ma-btn ma-btn-primary" id="ma-app-start">Commencer</button></div>
        </div>`;
      } else if (phase === 'memorize') {
        const pairs = [];
        for (let i = 0; i < digits.length; i += 2) pairs.push(digits.substr(i, 2));

        html += `<div class="ma-card">
          <div class="ma-card-label">Mémorisez cette séquence</div>
          <div style="margin:16px 0;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            ${pairs.map(p => `<span class="ma-digit-group"><span class="ma-digit">${p[0]}</span><span class="ma-digit">${p[1]}</span></span>`).join('')}
          </div>
          <div style="margin-top:12px;text-align:left">
            <div class="ma-card-label" style="margin-bottom:8px">Images PAO à former :</div>`;

        // Group by 3 pairs for PAO images
        for (let i = 0; i < pairs.length; i += 3) {
          const group = pairs.slice(i, i + 3);
          const p = state.pao[group[0]] ? state.pao[group[0]].p : '?';
          const a = group[1] && state.pao[group[1]] ? state.pao[group[1]].a : (state.pao[group[0]] ? state.pao[group[0]].a : '?');
          const o = group[2] && state.pao[group[2]] ? state.pao[group[2]].o : (group[1] && state.pao[group[1]] ? state.pao[group[1]].o : '?');
          html += `<div class="ma-pao-image">Image ${Math.floor(i / 3) + 1} : <b style="color:var(--text)">${esc(p)}</b> ${esc(a)} un(e) <b style="color:var(--text)">${esc(o)}</b></div>`;
        }

        html += `<div style="margin-top:16px;text-align:center">
            <button class="ma-btn ma-btn-primary" id="ma-app-recall">Je suis prêt(e) !</button>
          </div></div>`;
      } else if (phase === 'recall') {
        const pairs = [];
        for (let i = 0; i < digits.length; i += 2) pairs.push(digits.substr(i, 2));

        html += `<div class="ma-card">
          <div class="ma-card-label">Restituez la séquence</div>
          <div style="margin:16px 0;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
            ${pairs.map((_, idx) => `<input class="ma-answer-input" style="width:56px" data-idx="${idx}" maxlength="2" placeholder="??">`).join('')}
          </div>
          <div style="margin-top:14px"><button class="ma-btn ma-btn-primary" id="ma-app-check">Vérifier</button></div>
          <div id="ma-app-result"></div>
        </div>`;
      }

      html += '</div>';
      rootEl.innerHTML = html;
      bindPhase();
    }

    function bindPhase() {
      if (phase === 'choose') {
        rootEl.querySelectorAll('[data-len]').forEach(btn => {
          btn.addEventListener('click', function () {
            digitCount = parseInt(this.dataset.len);
            render();
          });
        });
        const startBtn = rootEl.querySelector('#ma-app-start');
        if (startBtn) startBtn.addEventListener('click', () => { generate(); phase = 'memorize'; render(); });
      } else if (phase === 'memorize') {
        rootEl.querySelector('#ma-app-recall').addEventListener('click', () => { phase = 'recall'; render(); });
      } else if (phase === 'recall') {
        // Auto-advance focus
        rootEl.querySelectorAll('.ma-answer-input').forEach((inp, i, all) => {
          inp.addEventListener('input', function () {
            if (this.value.length === 2 && all[i + 1]) all[i + 1].focus();
          });
        });
        rootEl.querySelector('#ma-app-check').addEventListener('click', () => {
          const pairs = [];
          for (let i = 0; i < digits.length; i += 2) pairs.push(digits.substr(i, 2));
          let correct = 0;
          rootEl.querySelectorAll('.ma-answer-input').forEach((inp, i) => {
            const val = inp.value.padStart(2, '0');
            if (val === pairs[i]) {
              correct++;
              inp.style.borderColor = 'var(--green)';
              inp.style.color = 'var(--green)';
            } else {
              inp.style.borderColor = 'var(--accent2)';
              inp.style.color = 'var(--accent2)';
            }
            inp.disabled = true;
          });
          const res = rootEl.querySelector('#ma-app-result');
          res.innerHTML = `<div style="margin-top:14px">
            <span class="${correct === pairs.length ? 'ma-result-correct' : 'ma-result-wrong'}">${correct}/${pairs.length} paires correctes</span>
            <div style="margin-top:8px;font-size:.82rem;color:var(--muted)">Séquence : <b style="color:var(--accent)">${digits.match(/.{2}/g).join(' ')}</b></div>
            <div style="margin-top:10px">
              <button class="ma-btn ma-btn-primary" id="ma-app-again">Recommencer</button>
            </div>
          </div>`;
          res.querySelector('#ma-app-again').addEventListener('click', () => { phase = 'choose'; render(); });
        });
        const first = rootEl.querySelector('.ma-answer-input');
        if (first) first.focus();
      }
    }

    render();
  }

  // ══════════════════════════════
  //  LINK METHOD — GUIDED EXERCISE
  // ══════════════════════════════

  function renderLinkExercise() {
    let wordCount = 10;
    let words = [];
    let phase = 'choose'; // choose, memorize, recall, result

    function pickWords(n) { return shuffle([...WORD_BANK]).slice(0, n); }

    function render() {
      let html = `<div class="ma-container">${backNav('home')}
        <div class="ma-nav">
          <button class="ma-nav-btn active">Exercice guidé</button>
          <button class="ma-nav-btn" data-ma-goto="link-free">Création libre</button>
          <button class="ma-nav-btn" data-ma-goto="link-saved">Chaînes sauvegardées</button>
        </div>
        <div class="ma-title">Méthode des Liens — Exercice guidé</div>`;

      html += tipsPanel();

      if (phase === 'choose') {
        html += `<div class="ma-card">
          <div class="ma-subtitle">Combien de mots souhaitez-vous mémoriser ?</div>
          <div class="ma-flex" style="justify-content:center;margin-top:10px">
            ${[10, 15, 20].map(n =>
              `<button class="ma-btn ${n === wordCount ? 'ma-btn-primary' : 'ma-btn-secondary'}" data-wc="${n}">${n} mots</button>`).join('')}
          </div>
          <div style="margin-top:14px"><button class="ma-btn ma-btn-primary" id="ma-link-go">Commencer</button></div>
        </div>`;
      } else if (phase === 'memorize') {
        html += `<div class="ma-card">
          <div class="ma-card-label">Créez une histoire reliant ces mots dans l'ordre</div>
          <div class="ma-chain">${words.map((w, i) =>
            `<span class="ma-chain-item revealed">${esc(w)}</span>${i < words.length - 1 ? '<span class="ma-chain-arrow">→</span>' : ''}`).join('')}
          </div>
          <div style="margin-top:16px"><button class="ma-btn ma-btn-primary" id="ma-link-recall">Je suis prêt(e) !</button></div>
        </div>`;
      } else if (phase === 'recall') {
        html += renderRecallUI(words);
      } else if (phase === 'result') {
        html += `<div style="margin-top:12px"><button class="ma-btn ma-btn-primary" id="ma-link-retry">Nouvel exercice</button>
          <button class="ma-btn ma-btn-secondary" id="ma-link-save-ex" style="margin-left:8px">Sauvegarder</button></div>`;
      }

      html += '</div>';
      rootEl.innerHTML = html;
      bindNav();

      if (phase === 'choose') {
        rootEl.querySelectorAll('[data-wc]').forEach(btn => {
          btn.addEventListener('click', function () { wordCount = parseInt(this.dataset.wc); render(); });
        });
        rootEl.querySelector('#ma-link-go').addEventListener('click', () => { words = pickWords(wordCount); phase = 'memorize'; render(); });
      } else if (phase === 'memorize') {
        rootEl.querySelector('#ma-link-recall').addEventListener('click', () => { phase = 'recall'; render(); });
      } else if (phase === 'recall') {
        bindRecallUI(words, () => { phase = 'result'; render(); });
      } else if (phase === 'result') {
        rootEl.querySelector('#ma-link-retry').addEventListener('click', () => { phase = 'choose'; render(); });
        rootEl.querySelector('#ma-link-save-ex').addEventListener('click', () => {
          saveChain('Exercice ' + new Date().toLocaleDateString('fr-FR'), words);
          nav('link-saved');
        });
      }
    }

    render();
  }

  // ══════════════════════════════
  //  LINK METHOD — FREE CREATION
  // ══════════════════════════════

  function renderLinkFree() {
    let words = [];
    let phase = 'input'; // input, memorize, recall, result

    function render() {
      let html = `<div class="ma-container">${backNav('home')}
        <div class="ma-nav">
          <button class="ma-nav-btn" data-ma-goto="link-exercise">Exercice guidé</button>
          <button class="ma-nav-btn active">Création libre</button>
          <button class="ma-nav-btn" data-ma-goto="link-saved">Chaînes sauvegardées</button>
        </div>
        <div class="ma-title">Méthode des Liens — Création libre</div>`;

      html += tipsPanel();

      if (phase === 'input') {
        html += `<div class="ma-card" style="text-align:left">
          <div class="ma-subtitle">Entrez les éléments à mémoriser (un par ligne ou séparés par des virgules) :</div>
          <textarea class="ma-textarea" id="ma-free-input" placeholder="pomme, vélo, montagne, dragon…"></textarea>
          <div style="margin-top:10px"><input class="ma-filter" id="ma-free-name" placeholder="Nom de la chaîne (optionnel)" style="width:100%"></div>
          <div class="ma-flex ma-mt">
            <button class="ma-btn ma-btn-primary" id="ma-free-start">Commencer la mémorisation</button>
          </div>
        </div>`;
      } else if (phase === 'memorize') {
        html += `<div class="ma-card">
          <div class="ma-card-label">Créez une histoire vivante reliant ces éléments</div>
          <div class="ma-chain">${words.map((w, i) =>
            `<span class="ma-chain-item revealed">${esc(w)}</span>${i < words.length - 1 ? '<span class="ma-chain-arrow">→</span>' : ''}`).join('')}
          </div>
          <div style="margin-top:16px"><button class="ma-btn ma-btn-primary" id="ma-free-recall">Tester le rappel</button></div>
        </div>`;
      } else if (phase === 'recall') {
        html += renderRecallUI(words);
      } else if (phase === 'result') {
        html += `<div style="margin-top:12px">
          <button class="ma-btn ma-btn-primary" id="ma-free-retry">Recommencer</button>
          <button class="ma-btn ma-btn-secondary" id="ma-free-save" style="margin-left:8px">Sauvegarder</button>
        </div>`;
      }

      html += '</div>';
      rootEl.innerHTML = html;
      bindNav();

      if (phase === 'input') {
        rootEl.querySelector('#ma-free-start').addEventListener('click', () => {
          const raw = rootEl.querySelector('#ma-free-input').value;
          words = raw.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
          if (words.length < 3) { alert('Entrez au moins 3 éléments.'); return; }
          phase = 'memorize';
          render();
        });
      } else if (phase === 'memorize') {
        rootEl.querySelector('#ma-free-recall').addEventListener('click', () => { phase = 'recall'; render(); });
      } else if (phase === 'recall') {
        bindRecallUI(words, () => { phase = 'result'; render(); });
      } else if (phase === 'result') {
        rootEl.querySelector('#ma-free-retry').addEventListener('click', () => { phase = 'input'; render(); });
        rootEl.querySelector('#ma-free-save').addEventListener('click', () => {
          saveChain('Chaîne libre ' + new Date().toLocaleDateString('fr-FR'), words);
          nav('link-saved');
        });
      }
    }

    render();
  }

  // ══════════════════════════════
  //  LINK METHOD — SAVED CHAINS
  // ══════════════════════════════

  function renderLinkSaved() {
    let practiceChain = null;
    let phase = 'list'; // list, memorize, recall, result

    function render() {
      let html = `<div class="ma-container">${backNav('home')}
        <div class="ma-nav">
          <button class="ma-nav-btn" data-ma-goto="link-exercise">Exercice guidé</button>
          <button class="ma-nav-btn" data-ma-goto="link-free">Création libre</button>
          <button class="ma-nav-btn active">Chaînes sauvegardées</button>
        </div>
        <div class="ma-title">Chaînes sauvegardées</div>`;

      if (phase === 'list') {
        if (state.chains.length === 0) {
          html += `<div class="ma-card"><div class="ma-subtitle">Aucune chaîne sauvegardée. Créez-en une via l'exercice guidé ou la création libre.</div></div>`;
        } else {
          html += '<div class="ma-saved-list">';
          state.chains.forEach((ch, i) => {
            html += `<div class="ma-saved-item" data-idx="${i}">
              <div><div class="ma-saved-name">${esc(ch.name)}</div>
                <div class="ma-saved-meta">${ch.items.length} éléments — ${ch.date}</div></div>
              <div class="ma-saved-actions">
                <button class="ma-btn ma-btn-secondary ma-practice-btn" data-idx="${i}" style="padding:4px 12px;font-size:.78rem">Pratiquer</button>
                <button class="ma-del-btn" data-del="${i}" title="Supprimer">✕</button>
              </div>
            </div>`;
          });
          html += '</div>';
        }
      } else if (phase === 'memorize') {
        html += `<div class="ma-card">
          <div class="ma-card-label">${esc(practiceChain.name)}</div>
          <div class="ma-chain">${practiceChain.items.map((w, i) =>
            `<span class="ma-chain-item revealed">${esc(w)}</span>${i < practiceChain.items.length - 1 ? '<span class="ma-chain-arrow">→</span>' : ''}`).join('')}
          </div>
          <div style="margin-top:16px"><button class="ma-btn ma-btn-primary" id="ma-saved-recall">Tester le rappel</button></div>
        </div>`;
      } else if (phase === 'recall') {
        html += renderRecallUI(practiceChain.items);
      } else if (phase === 'result') {
        html += `<div style="margin-top:12px"><button class="ma-btn ma-btn-primary" id="ma-saved-back">Retour aux chaînes</button></div>`;
      }

      html += '</div>';
      rootEl.innerHTML = html;
      bindNav();

      if (phase === 'list') {
        rootEl.querySelectorAll('.ma-practice-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            practiceChain = state.chains[parseInt(btn.dataset.idx)];
            phase = 'memorize';
            render();
          });
        });
        rootEl.querySelectorAll('.ma-del-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm('Supprimer cette chaîne ?')) {
              state.chains.splice(parseInt(btn.dataset.del), 1);
              save();
              render();
            }
          });
        });
      } else if (phase === 'memorize') {
        rootEl.querySelector('#ma-saved-recall').addEventListener('click', () => { phase = 'recall'; render(); });
      } else if (phase === 'recall') {
        bindRecallUI(practiceChain.items, () => { phase = 'result'; render(); });
      } else if (phase === 'result') {
        rootEl.querySelector('#ma-saved-back').addEventListener('click', () => { phase = 'list'; practiceChain = null; render(); });
      }
    }

    render();
  }

  // ══════════════════════════════
  //  SHARED RECALL UI
  // ══════════════════════════════

  function renderRecallUI(words) {
    // Show first word, rest as blanks
    return `<div class="ma-card" id="ma-recall-card">
      <div class="ma-card-label">Restituez les éléments dans l'ordre</div>
      <div class="ma-chain" id="ma-recall-chain">
        <span class="ma-chain-item revealed">${esc(words[0])}</span>
        ${words.slice(1).map((_, i) =>
          `<span class="ma-chain-arrow">→</span><span class="ma-chain-item blank" data-ri="${i + 1}">&nbsp;</span>`).join('')}
      </div>
      <div style="margin-top:14px" class="ma-flex" style="justify-content:center">
        <input class="ma-answer-input" id="ma-recall-input" placeholder="Mot suivant…" style="width:200px" autocomplete="off">
        <button class="ma-btn ma-btn-primary" id="ma-recall-submit">Valider</button>
      </div>
      <div id="ma-recall-feedback" style="margin-top:8px"></div>
      <div class="ma-score" id="ma-recall-score"></div>
    </div>`;
  }

  function bindRecallUI(words, onDone) {
    let ri = 1;
    let correct = 0;
    const input = rootEl.querySelector('#ma-recall-input');
    const submitBtn = rootEl.querySelector('#ma-recall-submit');
    if (!input || !submitBtn) return;
    input.focus();

    function submit() {
      if (ri >= words.length) return;
      const val = input.value.trim().toLowerCase();
      const expected = words[ri].toLowerCase();
      const item = rootEl.querySelector(`[data-ri="${ri}"]`);
      const isCorrect = val === expected;

      if (item) {
        item.textContent = words[ri];
        item.classList.remove('blank');
        item.classList.add(isCorrect ? 'correct-reveal' : 'wrong-reveal');
      }
      if (isCorrect) correct++;

      const fb = rootEl.querySelector('#ma-recall-feedback');
      if (fb) fb.innerHTML = isCorrect
        ? `<span class="ma-result-correct">Correct !</span>`
        : `<span class="ma-result-wrong">C'était : ${esc(words[ri])}</span>`;

      ri++;
      input.value = '';
      input.focus();

      const sc = rootEl.querySelector('#ma-recall-score');
      if (sc) sc.innerHTML = `Score : <b>${correct}</b>/${ri - 1}`;

      if (ri >= words.length) {
        input.disabled = true;
        submitBtn.disabled = true;
        const fb2 = rootEl.querySelector('#ma-recall-feedback');
        if (fb2) fb2.innerHTML = `<div style="margin-top:10px;font-size:1rem;font-weight:700;color:${correct >= words.length - 2 ? 'var(--green)' : 'var(--accent2)'}">
          Résultat final : ${correct}/${words.length - 1}</div>`;
        if (onDone) setTimeout(onDone, 100);
      }
    }

    submitBtn.addEventListener('click', submit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
  }

  // ══════════════════════════════
  //  HELPERS
  // ══════════════════════════════

  function backNav(target) {
    return `<button class="ma-btn ma-btn-secondary" style="margin-bottom:14px;font-size:.78rem" data-ma-back="${target}">← Retour</button>`;
  }

  function bindNav() {
    rootEl.querySelectorAll('[data-ma-goto]').forEach(el => {
      el.addEventListener('click', () => nav(el.dataset.maGoto));
    });
    rootEl.querySelectorAll('[data-ma-back]').forEach(el => {
      el.addEventListener('click', () => nav(el.dataset.maBack));
    });
  }

  function tipsPanel() {
    return `<div class="ma-tips">
      <strong>Conseils pour des images mémorables :</strong><br>
      • <b>Exagérez</b> — rendez les images gigantesques ou minuscules<br>
      • <b>Mouvement</b> — les scènes animées se retiennent mieux<br>
      • <b>Absurdité</b> — plus c'est bizarre, plus ça colle<br>
      • <b>Émotions</b> — associez des sentiments forts (humour, peur, dégoût)<br>
      • <b>Sens</b> — imaginez les sons, odeurs, textures
    </div>`;
  }

  function saveChain(name, items) {
    state.chains.push({ name, items: [...items], date: new Date().toLocaleDateString('fr-FR') });
    save();
  }

  function esc(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ══════════════════════════════
  //  LAUNCH (external entry point)
  // ══════════════════════════════

  function launch(action, arg) {
    if (!state) load();
    if (action === 'pao') nav('pao-table');
    else if (action === 'pao-quiz') nav('pao-quiz');
    else if (action === 'pao-apply') nav('pao-apply');
    else if (action === 'link' || action === 'link-exercise') nav('link-exercise');
    else if (action === 'link-free') nav('link-free');
    else if (action === 'link-saved') nav('link-saved');
    else nav('home');
  }

  // ── Public API ──
  return { renderPanel, launch };
})();
