// ══════════════════════════════════════════════════════
//  Curiosità — Memory Palace (Palais de la Mémoire)
//  Create virtual palaces with loci, place items,
//  and practice recall with guided/free/reverse journeys
// ══════════════════════════════════════════════════════

const MemoryPalace = (function () {
  'use strict';

  var STORAGE_KEY = 'curiosita_palaces';
  var CSS_INJECTED = false;
  var rootEl = null;

  var TEMPLATES = [
    {
      name: 'Maison classique',
      emoji: '\uD83C\uDFE0',
      loci: [
        { name: 'Entrée', desc: 'Le paillasson et le porte-manteau', emoji: '\uD83D\uDEAA' },
        { name: 'Salon', desc: 'Le canapé face à la télévision', emoji: '\uD83D\uDECB' },
        { name: 'Cuisine', desc: 'Le plan de travail et l\u2019évier', emoji: '\uD83C\uDF73' },
        { name: 'Salle à manger', desc: 'La grande table avec les chaises', emoji: '\uD83C\uDF7D' },
        { name: 'Escalier', desc: 'Les marches qui montent à l\u2019étage', emoji: '\uD83E\uDEDC' },
        { name: 'Chambre', desc: 'Le lit et la table de nuit', emoji: '\uD83D\uDECF' },
        { name: 'Bureau', desc: 'Le bureau avec l\u2019ordinateur', emoji: '\uD83D\uDCBB' },
        { name: 'Salle de bain', desc: 'Le miroir au-dessus du lavabo', emoji: '\uD83D\uDEC1' },
        { name: 'Balcon', desc: 'La vue depuis le balcon', emoji: '\uD83C\uDF05' },
        { name: 'Garage', desc: 'La voiture et les outils', emoji: '\uD83D\uDE97' }
      ]
    },
    {
      name: 'Rue principale',
      emoji: '\uD83D\uDEE3',
      loci: [
        { name: 'Boulangerie', desc: 'L\u2019odeur du pain chaud', emoji: '\uD83E\uDD50' },
        { name: 'Pharmacie', desc: 'La croix verte clignotante', emoji: '\uD83D\uDC8A' },
        { name: 'Parc', desc: 'Le banc sous le grand chêne', emoji: '\uD83C\uDF33' },
        { name: 'Fontaine', desc: 'L\u2019eau qui coule au centre de la place', emoji: '\u26F2' },
        { name: 'Librairie', desc: 'La vitrine pleine de livres', emoji: '\uD83D\uDCDA' },
        { name: 'Café', desc: 'Les tables en terrasse', emoji: '\u2615' },
        { name: 'Église', desc: 'Le clocher et le portail', emoji: '\u26EA' },
        { name: 'Marché', desc: 'Les étals de fruits colorés', emoji: '\uD83C\uDF4E' },
        { name: 'Pont', desc: 'Le pont en pierre sur la rivière', emoji: '\uD83C\uDF09' },
        { name: 'Gare', desc: 'Le quai et l\u2019horloge', emoji: '\uD83D\uDE89' }
      ]
    },
    {
      name: 'Corps humain',
      emoji: '\uD83E\uDDBE',
      loci: [
        { name: 'Pieds', desc: 'Les orteils sur le sol', emoji: '\uD83E\uDDB6' },
        { name: 'Genoux', desc: 'Les rotules qui plient', emoji: '\uD83E\uDDB5' },
        { name: 'Hanches', desc: 'La ceinture autour de la taille', emoji: '\uD83E\uDD3C' },
        { name: 'Ventre', desc: 'Le nombril au centre', emoji: '\uD83E\uDEB1' },
        { name: 'Poitrine', desc: 'Le cœur qui bat', emoji: '\u2764' },
        { name: 'Mains', desc: 'Les doigts ouverts', emoji: '\u270B' },
        { name: 'Épaules', desc: 'Les épaules larges et solides', emoji: '\uD83D\uDCAA' },
        { name: 'Cou', desc: 'La gorge et la nuque', emoji: '\uD83E\uDDE3' },
        { name: 'Bouche', desc: 'Les lèvres et les dents', emoji: '\uD83D\uDC44' },
        { name: 'Sommet du crâne', desc: 'Le haut de la tête', emoji: '\uD83E\uDDE0' }
      ]
    }
  ];

  // ── Persistence ──────────────────────────────────

  function loadData() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch (e) { return {}; }
  }

  function saveData(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function getPalaces() {
    var d = loadData();
    return d.palaces || [];
  }

  function savePalaces(palaces) {
    var d = loadData();
    d.palaces = palaces;
    saveData(d);
  }

  function genId() {
    return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }

  // ── CSS Injection ────────────────────────────────

  function injectCSS() {
    if (CSS_INJECTED) return;
    CSS_INJECTED = true;
    var style = document.createElement('style');
    style.textContent =
      '.mp-home{display:flex;flex-direction:column;gap:16px}' +
      '.mp-section-title{font-size:1.05rem;color:var(--muted);margin:8px 0 4px;font-weight:500}' +
      '.mp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}' +
      '.mp-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;cursor:pointer;transition:border-color .2s,transform .15s}' +
      '.mp-card:hover{border-color:var(--accent);transform:translateY(-2px)}' +
      '.mp-card-icon{font-size:1.8rem;margin-bottom:6px}' +
      '.mp-card-name{font-size:1.05rem;font-weight:600;color:var(--text)}' +
      '.mp-card-meta{font-size:.82rem;color:var(--muted);margin-top:4px}' +
      '.mp-card-stat{font-size:.78rem;color:var(--accent);margin-top:6px}' +
      '.mp-card.mp-add{border-style:dashed;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:120px;color:var(--muted)}' +
      '.mp-card.mp-add:hover{color:var(--accent)}' +
      '.mp-card.mp-tpl{border-color:rgba(232,201,122,.15);background:rgba(232,201,122,.04)}' +

      '.mp-back{background:none;border:none;color:var(--muted);cursor:pointer;font-size:.9rem;padding:4px 0;margin-bottom:8px;display:inline-flex;align-items:center;gap:4px}' +
      '.mp-back:hover{color:var(--accent)}' +

      '.mp-form{display:flex;flex-direction:column;gap:12px;max-width:480px}' +
      '.mp-label{font-size:.85rem;color:var(--muted);margin-bottom:2px}' +
      '.mp-input{background:var(--surface2);border:1px solid var(--border);border-radius:8px;padding:10px 12px;color:var(--text);font-size:.95rem;outline:none}' +
      '.mp-input:focus{border-color:var(--accent)}' +
      '.mp-input-sm{width:60px;text-align:center}' +
      '.mp-row{display:flex;gap:8px;align-items:center}' +

      '.mp-btn{padding:9px 20px;border-radius:8px;border:none;cursor:pointer;font-size:.9rem;font-weight:500;transition:background .2s,transform .1s}' +
      '.mp-btn:active{transform:scale(.97)}' +
      '.mp-primary{background:var(--accent);color:#111}' +
      '.mp-primary:hover{background:#d4b462}' +
      '.mp-secondary{background:var(--surface2);color:var(--text);border:1px solid var(--border)}' +
      '.mp-secondary:hover{background:var(--surface)}' +
      '.mp-danger{background:rgba(201,122,122,.15);color:var(--accent2)}' +
      '.mp-danger:hover{background:rgba(201,122,122,.25)}' +
      '.mp-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}' +

      '.mp-path{display:flex;flex-direction:column;gap:0;margin:16px 0}' +
      '.mp-locus{display:flex;align-items:flex-start;gap:12px;position:relative;padding:10px 0}' +
      '.mp-locus-line{position:absolute;left:17px;top:36px;bottom:-2px;width:2px;background:var(--border)}' +
      '.mp-locus:last-child .mp-locus-line{display:none}' +
      '.mp-locus-dot{width:36px;height:36px;border-radius:50%;background:var(--surface2);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;position:relative;z-index:1;transition:border-color .2s,background .2s}' +
      '.mp-locus.mp-active .mp-locus-dot{border-color:var(--accent);background:rgba(232,201,122,.12)}' +
      '.mp-locus.mp-correct .mp-locus-dot{border-color:var(--green);background:rgba(105,240,174,.12)}' +
      '.mp-locus.mp-wrong .mp-locus-dot{border-color:var(--accent2);background:rgba(201,122,122,.12)}' +
      '.mp-locus-body{flex:1;min-width:0}' +
      '.mp-locus-name{font-weight:600;font-size:.95rem;color:var(--text)}' +
      '.mp-locus-desc{font-size:.82rem;color:var(--muted);margin-top:2px}' +
      '.mp-locus-item{margin-top:6px;padding:8px 10px;background:rgba(232,201,122,.06);border-radius:8px;border:1px solid rgba(232,201,122,.1);font-size:.9rem;color:var(--text)}' +
      '.mp-locus-image{font-size:.8rem;color:var(--accent);font-style:italic;margin-top:3px}' +
      '.mp-locus-actions{display:flex;gap:4px;margin-top:4px}' +
      '.mp-locus-btn{background:none;border:none;color:var(--muted);cursor:pointer;font-size:.8rem;padding:2px 6px;border-radius:4px}' +
      '.mp-locus-btn:hover{color:var(--accent);background:var(--surface2)}' +
      '.mp-empty{color:var(--muted);font-size:.85rem;font-style:italic;margin-top:4px}' +

      '.mp-score{font-size:2.2rem;font-weight:700;color:var(--accent);text-align:center;margin:12px 0 4px}' +
      '.mp-score-sub{text-align:center;color:var(--muted);font-size:.9rem;margin-bottom:12px}' +

      '.mp-practice-input{width:100%;margin-top:8px}' +
      '.mp-free-area{width:100%;min-height:120px;resize:vertical}' +
      '.mp-reveal{padding:10px 12px;background:var(--surface2);border-radius:8px;margin-top:8px;font-size:.9rem;color:var(--text);border:1px solid var(--border)}' +
      '.mp-reveal b{color:var(--accent)}' +

      '@media(max-width:600px){.mp-grid{grid-template-columns:1fr}.mp-locus{gap:8px}}';
    document.head.appendChild(style);
  }

  // ── Views ────────────────────────────────────────

  function renderPanel(el) {
    if (!el) return;
    rootEl = el;
    injectCSS();
    renderHome();
  }

  function renderHome() {
    var palaces = getPalaces();

    var myCards = palaces.map(function (p, i) {
      var lociCount = p.loci ? p.loci.length : 0;
      var itemCount = (p.loci || []).filter(function (l) { return l.item; }).length;
      var stat = p.stats ? p.stats.sessions + ' session' + (p.stats.sessions !== 1 ? 's' : '') +
        (p.stats.best > 0 ? ' — record : ' + p.stats.best + '%' : '') : '';
      return '<div class="mp-card" data-action="view" data-idx="' + i + '">' +
        '<div class="mp-card-icon">' + (p.emoji || '\uD83C\uDFDB') + '</div>' +
        '<div class="mp-card-name">' + esc(p.name) + '</div>' +
        '<div class="mp-card-meta">' + lociCount + ' lieux · ' + itemCount + ' éléments placés</div>' +
        (stat ? '<div class="mp-card-stat">' + stat + '</div>' : '') +
      '</div>';
    }).join('');

    myCards += '<div class="mp-card mp-add" data-action="create">' +
      '<div style="font-size:2rem">+</div>' +
      '<div>Créer un palais</div>' +
    '</div>';

    var tplCards = TEMPLATES.map(function (t, i) {
      return '<div class="mp-card mp-tpl" data-action="template" data-idx="' + i + '">' +
        '<div class="mp-card-icon">' + t.emoji + '</div>' +
        '<div class="mp-card-name">' + t.name + '</div>' +
        '<div class="mp-card-meta">' + t.loci.length + ' lieux prédéfinis</div>' +
      '</div>';
    }).join('');

    rootEl.innerHTML =
      '<div class="mp-home">' +
        '<h3 class="sr-p-title">Palais de la Mémoire</h3>' +
        '<p class="sr-p-desc">Crée des parcours mentaux et place-y des éléments à mémoriser. ' +
          'La méthode des lieux est l\u2019une des plus anciennes et puissantes techniques de mémoire.</p>' +
        (palaces.length ? '<div class="mp-section-title">Mes palais</div><div class="mp-grid">' + myCards + '</div>' :
          '<div class="mp-grid">' + myCards + '</div>') +
        '<div class="mp-section-title">Modèles prêts à l\u2019emploi</div>' +
        '<div class="mp-grid">' + tplCards + '</div>' +
      '</div>';

    rootEl.querySelectorAll('[data-action]').forEach(function (el) {
      el.addEventListener('click', function () {
        var action = el.dataset.action;
        if (action === 'view') renderPalaceView(parseInt(el.dataset.idx));
        else if (action === 'create') renderCreateForm();
        else if (action === 'template') importTemplate(parseInt(el.dataset.idx));
      });
    });
  }

  // ── Create Palace ────────────────────────────────

  function renderCreateForm(existing, idx) {
    var isEdit = existing !== undefined;
    var p = existing || { name: '', emoji: '\uD83C\uDFDB', loci: [] };

    rootEl.innerHTML =
      '<div>' +
        '<button class="mp-back" id="mp-back">\u2190 Retour</button>' +
        '<h3 class="sr-p-title">' + (isEdit ? 'Modifier le palais' : 'Nouveau palais') + '</h3>' +
        '<div class="mp-form">' +
          '<div>' +
            '<div class="mp-label">Nom du palais</div>' +
            '<input class="mp-input" id="mp-name" placeholder="Ex : Ma maison" value="' + esc(p.name) + '">' +
          '</div>' +
          '<div>' +
            '<div class="mp-label">Emoji</div>' +
            '<input class="mp-input mp-input-sm" id="mp-emoji" value="' + esc(p.emoji) + '">' +
          '</div>' +
          '<div class="mp-actions">' +
            '<button class="mp-btn mp-primary" id="mp-save">' + (isEdit ? 'Enregistrer' : 'Créer') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    rootEl.querySelector('#mp-back').addEventListener('click', function () {
      if (isEdit) renderPalaceView(idx); else renderHome();
    });

    rootEl.querySelector('#mp-save').addEventListener('click', function () {
      var name = rootEl.querySelector('#mp-name').value.trim();
      if (!name) return;
      var emoji = rootEl.querySelector('#mp-emoji').value.trim() || '\uD83C\uDFDB';
      var palaces = getPalaces();
      if (isEdit) {
        palaces[idx].name = name;
        palaces[idx].emoji = emoji;
      } else {
        palaces.push({ id: genId(), name: name, emoji: emoji, loci: [], stats: { sessions: 0, best: 0 } });
      }
      savePalaces(palaces);
      if (isEdit) renderPalaceView(idx); else renderPalaceView(palaces.length - 1);
    });
  }

  function importTemplate(tplIdx) {
    var t = TEMPLATES[tplIdx];
    var palaces = getPalaces();
    var p = {
      id: genId(),
      name: t.name,
      emoji: t.emoji,
      loci: t.loci.map(function (l) { return { name: l.name, desc: l.desc, emoji: l.emoji, item: '', image: '' }; }),
      stats: { sessions: 0, best: 0 }
    };
    palaces.push(p);
    savePalaces(palaces);
    renderPalaceView(palaces.length - 1);
  }

  // ── Palace View (main detail) ────────────────────

  function renderPalaceView(idx) {
    var palaces = getPalaces();
    var p = palaces[idx];
    if (!p) { renderHome(); return; }

    var lociHtml = (p.loci || []).map(function (l, i) {
      var hasItem = l.item && l.item.trim();
      return '<div class="mp-locus">' +
        '<div class="mp-locus-line"></div>' +
        '<div class="mp-locus-dot">' + (l.emoji || (i + 1)) + '</div>' +
        '<div class="mp-locus-body">' +
          '<div class="mp-locus-name">' + esc(l.name) + '</div>' +
          '<div class="mp-locus-desc">' + esc(l.desc) + '</div>' +
          (hasItem ? '<div class="mp-locus-item">' + esc(l.item) + '</div>' : '') +
          (hasItem && l.image ? '<div class="mp-locus-image">\uD83C\uDFA8 ' + esc(l.image) + '</div>' : '') +
          '<div class="mp-locus-actions">' +
            '<button class="mp-locus-btn" data-act="edit-locus" data-i="' + i + '">\u270F Modifier</button>' +
            '<button class="mp-locus-btn" data-act="place" data-i="' + i + '">\uD83D\uDCCC ' + (hasItem ? 'Changer' : 'Placer') + '</button>' +
            (i > 0 ? '<button class="mp-locus-btn" data-act="up" data-i="' + i + '">\u2191</button>' : '') +
            (i < p.loci.length - 1 ? '<button class="mp-locus-btn" data-act="down" data-i="' + i + '">\u2193</button>' : '') +
            '<button class="mp-locus-btn" data-act="del-locus" data-i="' + i + '">\u2715</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    if (!p.loci || !p.loci.length) {
      lociHtml = '<div class="mp-empty">Aucun lieu. Ajoute ton premier lieu ci-dessous.</div>';
    }

    var itemCount = (p.loci || []).filter(function (l) { return l.item && l.item.trim(); }).length;
    var canPractice = itemCount >= 2;
    var st = p.stats || {};

    rootEl.innerHTML =
      '<div>' +
        '<button class="mp-back" id="mp-back">\u2190 Mes palais</button>' +
        '<h3 class="sr-p-title">' + (p.emoji || '') + ' ' + esc(p.name) + '</h3>' +
        (st.sessions ? '<div class="mp-card-stat" style="margin-bottom:12px">' + st.sessions + ' session' + (st.sessions !== 1 ? 's' : '') + (st.best > 0 ? ' — record : ' + st.best + '%' : '') + '</div>' : '') +
        '<div class="mp-path">' + lociHtml + '</div>' +
        '<div class="mp-form" style="margin-top:12px">' +
          '<div class="mp-section-title">Ajouter un lieu</div>' +
          '<div class="mp-row">' +
            '<input class="mp-input mp-input-sm" id="mp-le" placeholder="\uD83D\uDCCD" title="Emoji">' +
            '<input class="mp-input" id="mp-ln" placeholder="Nom du lieu" style="flex:1">' +
          '</div>' +
          '<input class="mp-input" id="mp-ld" placeholder="Brève description (optionnel)">' +
          '<div class="mp-actions">' +
            '<button class="mp-btn mp-secondary" id="mp-add-locus">Ajouter le lieu</button>' +
          '</div>' +
        '</div>' +
        (canPractice ? '<div class="mp-section-title" style="margin-top:20px">Pratiquer</div>' +
          '<div class="mp-actions">' +
            '<button class="mp-btn mp-primary" data-pract="guided">Parcours guidé</button>' +
            '<button class="mp-btn mp-secondary" data-pract="free">Rappel libre</button>' +
            '<button class="mp-btn mp-secondary" data-pract="reverse">Parcours inversé</button>' +
          '</div>' : '') +
        '<div class="mp-actions" style="margin-top:20px">' +
          '<button class="mp-btn mp-secondary" id="mp-edit-palace">\u270F Modifier</button>' +
          '<button class="mp-btn mp-danger" id="mp-del-palace">\u2715 Supprimer</button>' +
        '</div>' +
      '</div>';

    // Back
    rootEl.querySelector('#mp-back').addEventListener('click', renderHome);

    // Add locus
    rootEl.querySelector('#mp-add-locus').addEventListener('click', function () {
      var n = rootEl.querySelector('#mp-ln').value.trim();
      if (!n) return;
      var palaces = getPalaces();
      if (!palaces[idx].loci) palaces[idx].loci = [];
      palaces[idx].loci.push({
        name: n,
        desc: rootEl.querySelector('#mp-ld').value.trim(),
        emoji: rootEl.querySelector('#mp-le').value.trim() || '',
        item: '',
        image: ''
      });
      savePalaces(palaces);
      renderPalaceView(idx);
    });

    // Locus actions
    rootEl.querySelectorAll('[data-act]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var act = btn.dataset.act;
        var i = parseInt(btn.dataset.i);
        var palaces = getPalaces();
        var loci = palaces[idx].loci;
        if (act === 'del-locus') {
          loci.splice(i, 1);
          savePalaces(palaces);
          renderPalaceView(idx);
        } else if (act === 'up' && i > 0) {
          var tmp = loci[i]; loci[i] = loci[i - 1]; loci[i - 1] = tmp;
          savePalaces(palaces);
          renderPalaceView(idx);
        } else if (act === 'down' && i < loci.length - 1) {
          var tmp2 = loci[i]; loci[i] = loci[i + 1]; loci[i + 1] = tmp2;
          savePalaces(palaces);
          renderPalaceView(idx);
        } else if (act === 'edit-locus') {
          renderEditLocus(idx, i);
        } else if (act === 'place') {
          renderPlaceItem(idx, i);
        }
      });
    });

    // Practice buttons
    rootEl.querySelectorAll('[data-pract]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var mode = btn.dataset.pract;
        if (mode === 'guided') practiceGuided(idx, false);
        else if (mode === 'reverse') practiceGuided(idx, true);
        else if (mode === 'free') practiceFree(idx);
      });
    });

    // Edit / Delete palace
    rootEl.querySelector('#mp-edit-palace').addEventListener('click', function () {
      renderCreateForm(getPalaces()[idx], idx);
    });
    rootEl.querySelector('#mp-del-palace').addEventListener('click', function () {
      if (!confirm('Supprimer ce palais et tous ses lieux ?')) return;
      var palaces = getPalaces();
      palaces.splice(idx, 1);
      savePalaces(palaces);
      renderHome();
    });
  }

  // ── Edit Locus ───────────────────────────────────

  function renderEditLocus(palaceIdx, locusIdx) {
    var p = getPalaces()[palaceIdx];
    var l = p.loci[locusIdx];

    rootEl.innerHTML =
      '<div>' +
        '<button class="mp-back" id="mp-back">\u2190 Retour au palais</button>' +
        '<h3 class="sr-p-title">Modifier le lieu</h3>' +
        '<div class="mp-form">' +
          '<div><div class="mp-label">Emoji</div><input class="mp-input mp-input-sm" id="mp-le" value="' + esc(l.emoji || '') + '"></div>' +
          '<div><div class="mp-label">Nom</div><input class="mp-input" id="mp-ln" value="' + esc(l.name) + '"></div>' +
          '<div><div class="mp-label">Description</div><input class="mp-input" id="mp-ld" value="' + esc(l.desc || '') + '"></div>' +
          '<div class="mp-actions"><button class="mp-btn mp-primary" id="mp-save">Enregistrer</button></div>' +
        '</div>' +
      '</div>';

    rootEl.querySelector('#mp-back').addEventListener('click', function () { renderPalaceView(palaceIdx); });
    rootEl.querySelector('#mp-save').addEventListener('click', function () {
      var name = rootEl.querySelector('#mp-ln').value.trim();
      if (!name) return;
      var palaces = getPalaces();
      palaces[palaceIdx].loci[locusIdx].name = name;
      palaces[palaceIdx].loci[locusIdx].desc = rootEl.querySelector('#mp-ld').value.trim();
      palaces[palaceIdx].loci[locusIdx].emoji = rootEl.querySelector('#mp-le').value.trim();
      savePalaces(palaces);
      renderPalaceView(palaceIdx);
    });
  }

  // ── Place Item ───────────────────────────────────

  function renderPlaceItem(palaceIdx, locusIdx) {
    var p = getPalaces()[palaceIdx];
    var l = p.loci[locusIdx];

    rootEl.innerHTML =
      '<div>' +
        '<button class="mp-back" id="mp-back">\u2190 Retour au palais</button>' +
        '<h3 class="sr-p-title">' + (l.emoji || '\uD83D\uDCCC') + ' ' + esc(l.name) + '</h3>' +
        '<p class="sr-p-desc">' + esc(l.desc || '') + '</p>' +
        '<div class="mp-form">' +
          '<div><div class="mp-label">Élément à mémoriser</div>' +
            '<input class="mp-input" id="mp-item" placeholder="Ex : H\u2082O = eau" value="' + esc(l.item || '') + '"></div>' +
          '<div><div class="mp-label">Image mentale (optionnel)</div>' +
            '<input class="mp-input" id="mp-image" placeholder="Ex : Un torrent d\u2019eau qui jaillit du robinet" value="' + esc(l.image || '') + '"></div>' +
          '<div class="mp-actions">' +
            '<button class="mp-btn mp-primary" id="mp-save">Placer</button>' +
            (l.item ? '<button class="mp-btn mp-danger" id="mp-clear">Retirer</button>' : '') +
          '</div>' +
        '</div>' +
      '</div>';

    rootEl.querySelector('#mp-back').addEventListener('click', function () { renderPalaceView(palaceIdx); });
    rootEl.querySelector('#mp-save').addEventListener('click', function () {
      var palaces = getPalaces();
      palaces[palaceIdx].loci[locusIdx].item = rootEl.querySelector('#mp-item').value.trim();
      palaces[palaceIdx].loci[locusIdx].image = rootEl.querySelector('#mp-image').value.trim();
      savePalaces(palaces);
      renderPalaceView(palaceIdx);
    });
    var clr = rootEl.querySelector('#mp-clear');
    if (clr) clr.addEventListener('click', function () {
      var palaces = getPalaces();
      palaces[palaceIdx].loci[locusIdx].item = '';
      palaces[palaceIdx].loci[locusIdx].image = '';
      savePalaces(palaces);
      renderPalaceView(palaceIdx);
    });
  }

  // ── Practice: Guided / Reverse ───────────────────

  function practiceGuided(palaceIdx, reverse) {
    var p = getPalaces()[palaceIdx];
    var loci = (p.loci || []).filter(function (l) { return l.item && l.item.trim(); });
    if (reverse) loci = loci.slice().reverse();
    var current = 0;
    var results = [];

    function renderStep() {
      var l = loci[current];
      rootEl.innerHTML =
        '<div>' +
          '<div class="mp-row" style="justify-content:space-between;margin-bottom:12px">' +
            '<span class="mp-section-title">' + (reverse ? 'Parcours inversé' : 'Parcours guidé') + '</span>' +
            '<span style="color:var(--muted);font-size:.85rem">' + (current + 1) + ' / ' + loci.length + '</span>' +
          '</div>' +
          '<div class="mp-locus mp-active" style="padding:12px 0">' +
            '<div class="mp-locus-dot">' + (l.emoji || (current + 1)) + '</div>' +
            '<div class="mp-locus-body">' +
              '<div class="mp-locus-name">' + esc(l.name) + '</div>' +
              '<div class="mp-locus-desc">' + esc(l.desc || '') + '</div>' +
              '<input class="mp-input mp-practice-input" id="mp-answer" placeholder="Quel élément est ici ?" autocomplete="off">' +
              '<div id="mp-feedback"></div>' +
            '</div>' +
          '</div>' +
          '<div class="mp-actions">' +
            '<button class="mp-btn mp-primary" id="mp-check">Vérifier</button>' +
            '<button class="mp-btn mp-secondary" id="mp-show">Voir la réponse</button>' +
          '</div>' +
        '</div>';

      var inp = rootEl.querySelector('#mp-answer');
      inp.focus();
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') checkAnswer(); });
      rootEl.querySelector('#mp-check').addEventListener('click', checkAnswer);
      rootEl.querySelector('#mp-show').addEventListener('click', function () { reveal(false); });

      function checkAnswer() {
        var ans = inp.value.trim().toLowerCase();
        var correct = l.item.trim().toLowerCase();
        var isCorrect = ans === correct || (ans.length > 3 && correct.includes(ans));
        reveal(isCorrect);
      }

      function reveal(isCorrect) {
        results.push(isCorrect);
        var fb = rootEl.querySelector('#mp-feedback');
        fb.innerHTML = '<div class="mp-reveal">' +
          (isCorrect ? '<b>\u2713 Correct !</b> ' : '<b>\u2717 Réponse :</b> ') +
          esc(l.item) +
          (l.image ? '<br><em style="color:var(--muted)">\uD83C\uDFA8 ' + esc(l.image) + '</em>' : '') +
        '</div>';
        var acts = rootEl.querySelector('.mp-actions');
        acts.innerHTML = current < loci.length - 1
          ? '<button class="mp-btn mp-primary" id="mp-next">Suivant \u2192</button>'
          : '<button class="mp-btn mp-primary" id="mp-finish">Voir les résultats</button>';
        var next = rootEl.querySelector('#mp-next');
        if (next) next.addEventListener('click', function () { current++; renderStep(); });
        var fin = rootEl.querySelector('#mp-finish');
        if (fin) fin.addEventListener('click', function () { showResults(palaceIdx, loci, results, reverse ? 'inversé' : 'guidé'); });
      }
    }

    renderStep();
  }

  // ── Practice: Free Recall ────────────────────────

  function practiceFree(palaceIdx) {
    var p = getPalaces()[palaceIdx];
    var loci = (p.loci || []).filter(function (l) { return l.item && l.item.trim(); });

    rootEl.innerHTML =
      '<div>' +
        '<div class="mp-section-title">Rappel libre</div>' +
        '<p class="sr-p-desc">Écris tous les éléments dont tu te souviens, un par ligne. L\u2019ordre compte !</p>' +
        '<textarea class="mp-input mp-free-area" id="mp-free" placeholder="Un élément par ligne..."></textarea>' +
        '<div class="mp-actions" style="margin-top:12px">' +
          '<button class="mp-btn mp-primary" id="mp-check">Vérifier</button>' +
          '<button class="mp-btn mp-secondary" id="mp-cancel">Annuler</button>' +
        '</div>' +
      '</div>';

    rootEl.querySelector('#mp-free').focus();
    rootEl.querySelector('#mp-cancel').addEventListener('click', function () { renderPalaceView(palaceIdx); });
    rootEl.querySelector('#mp-check').addEventListener('click', function () {
      var lines = rootEl.querySelector('#mp-free').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
      var results = [];
      var correctItems = loci.map(function (l) { return l.item.trim().toLowerCase(); });

      // Score: check each answer against expected order
      for (var i = 0; i < loci.length; i++) {
        if (i < lines.length) {
          var ans = lines[i].toLowerCase();
          var expected = correctItems[i];
          results.push(ans === expected || (ans.length > 3 && expected.includes(ans)));
        } else {
          results.push(false);
        }
      }

      showResults(palaceIdx, loci, results, 'libre');
    });
  }

  // ── Results ──────────────────────────────────────

  function showResults(palaceIdx, loci, results, modeName) {
    var correct = results.filter(Boolean).length;
    var total = loci.length;
    var pct = Math.round(correct / total * 100);

    // Save stats
    var palaces = getPalaces();
    if (!palaces[palaceIdx].stats) palaces[palaceIdx].stats = { sessions: 0, best: 0 };
    palaces[palaceIdx].stats.sessions++;
    if (pct > palaces[palaceIdx].stats.best) palaces[palaceIdx].stats.best = pct;
    savePalaces(palaces);

    var detailHtml = loci.map(function (l, i) {
      var cls = results[i] ? 'mp-correct' : 'mp-wrong';
      return '<div class="mp-locus ' + cls + '">' +
        '<div class="mp-locus-line"></div>' +
        '<div class="mp-locus-dot">' + (results[i] ? '\u2713' : '\u2717') + '</div>' +
        '<div class="mp-locus-body">' +
          '<div class="mp-locus-name">' + esc(l.name) + '</div>' +
          '<div class="mp-locus-item">' + esc(l.item) + '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    rootEl.innerHTML =
      '<div>' +
        '<div class="mp-section-title">Résultat — ' + modeName + '</div>' +
        '<div class="mp-score">' + correct + ' / ' + total + '</div>' +
        '<div class="mp-score-sub">' + pct + '% correct</div>' +
        '<div class="mp-path">' + detailHtml + '</div>' +
        '<div class="mp-actions">' +
          '<button class="mp-btn mp-primary" id="mp-retry">Recommencer</button>' +
          '<button class="mp-btn mp-secondary" id="mp-back-palace">Retour au palais</button>' +
        '</div>' +
      '</div>';

    rootEl.querySelector('#mp-retry').addEventListener('click', function () {
      if (modeName === 'libre') practiceFree(palaceIdx);
      else if (modeName === 'inversé') practiceGuided(palaceIdx, true);
      else practiceGuided(palaceIdx, false);
    });
    rootEl.querySelector('#mp-back-palace').addEventListener('click', function () { renderPalaceView(palaceIdx); });
  }

  // ── Utility ──────────────────────────────────────

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // ── Public API ───────────────────────────────────

  function launch(action, arg) {
    if (!rootEl) return;
    if (action === 'home') renderHome();
    else if (action === 'view') renderPalaceView(arg);
    else if (action === 'create') renderCreateForm();
  }

  return {
    renderPanel: renderPanel,
    launch: launch
  };
})();
