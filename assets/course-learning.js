// ══════════════════════════════════════════════════════
//  Curiosità — Course Learning
//  Curated exercises linked to specific course pages
//  Renders inline at bottom of CV content
// ══════════════════════════════════════════════════════

var CourseLearning = (function () {
  'use strict';

  var LS_KEY = 'curiosita_courselearn';
  var cssInjected = false;

  // ── Persistence ──

  function loadState() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveState(s) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch (e) {}
  }
  function getScore(slug, idx) {
    var s = loadState();
    return (s[slug] && s[slug][idx]) || null;
  }
  function setScore(slug, idx, score) {
    var s = loadState();
    if (!s[slug]) s[slug] = {};
    s[slug][idx] = score;
    saveState(s);
  }

  // ── Helpers ──

  function esc(s) {
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickDistractors(correct, all, count) {
    var pool = all.filter(function (x) { return x !== correct; });
    var picked = shuffle(pool).slice(0, count);
    return shuffle(picked.concat([correct]));
  }
  function normalize(s) {
    return (s || '').replace(/\s+/g, ' ').trim().toLowerCase()
      .replace(/[~≈]/g, '').replace(/^environ\s+/i, '');
  }

  // ── CSS injection ──

  function injectCSS() {
    if (cssInjected) return;
    cssInjected = true;
    var style = document.createElement('style');
    style.textContent = [
      '.cl-wrap{margin-top:3rem;padding-top:2.5rem;border-top:1px solid var(--border)}',
      '.cl-header{text-align:center;margin-bottom:2rem}',
      '.cl-header h2{font-family:"Playfair Display",serif;font-size:1.6rem;color:var(--text);margin-bottom:0.4rem}',
      '.cl-header p{color:var(--muted);font-size:0.88rem;max-width:560px;margin:0 auto;line-height:1.6}',
      '.cl-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}',
      '@media(max-width:768px){.cl-grid{grid-template-columns:1fr}}',
      '.cl-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:1.2rem 1.3rem;cursor:pointer;transition:background .2s,border-color .2s;display:flex;align-items:flex-start;gap:1rem;position:relative}',
      '.cl-card:hover{background:var(--surface2);border-color:rgba(240,237,232,0.15)}',
      '.cl-card-icon{font-size:1.8rem;flex-shrink:0;line-height:1}',
      '.cl-card-body{flex:1;min-width:0}',
      '.cl-card-method{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--accent);margin-bottom:0.15rem}',
      '.cl-card-title{font-family:"Playfair Display",serif;font-size:1rem;color:var(--text);margin-bottom:0.3rem}',
      '.cl-card-desc{font-size:0.8rem;color:var(--muted);line-height:1.5;margin-bottom:0.5rem}',
      '.cl-card-meta{font-size:0.72rem;color:var(--muted)}',
      '.cl-card-arrow{color:var(--muted);font-size:1.1rem;align-self:center;flex-shrink:0}',
      '.cl-mastery{height:3px;background:var(--surface2);border-radius:2px;margin-top:0.6rem;overflow:hidden}',
      '.cl-mastery-fill{height:100%;background:var(--green);border-radius:2px;transition:width .3s}',

      /* Exercise view */
      '.cl-exercise{animation:clFadeIn .25s ease}',
      '@keyframes clFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
      '.cl-back{background:none;border:none;color:var(--accent);cursor:pointer;font-size:0.85rem;padding:0.4rem 0;margin-bottom:1.2rem;display:inline-flex;align-items:center;gap:0.4rem}',
      '.cl-back:hover{text-decoration:underline}',
      '.cl-ex-title{font-family:"Playfair Display",serif;font-size:1.3rem;color:var(--text);margin-bottom:0.5rem}',
      '.cl-ex-desc{color:var(--muted);font-size:0.85rem;margin-bottom:1.2rem;line-height:1.6}',
      '.cl-tip{background:var(--accent-dim);border:1px solid rgba(232,201,122,0.2);border-radius:8px;padding:0.8rem 1rem;margin-bottom:1.2rem;font-size:0.82rem;color:var(--text);line-height:1.6}',
      '.cl-tip strong{color:var(--accent)}',

      /* Flashcards */
      '.cl-fc-wrap{perspective:800px;margin-bottom:1rem}',
      '.cl-fc-card{position:relative;width:100%;min-height:180px;cursor:pointer;transform-style:preserve-3d;transition:transform .45s}',
      '.cl-fc-card.flipped{transform:rotateY(180deg)}',
      '.cl-fc-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:12px;padding:1.5rem;display:flex;align-items:center;justify-content:center;text-align:center;font-size:0.95rem;line-height:1.6}',
      '.cl-fc-front{background:var(--surface);border:1px solid var(--border);color:var(--text)}',
      '.cl-fc-back{background:var(--surface2);border:1px solid rgba(232,201,122,0.15);color:var(--text);transform:rotateY(180deg)}',
      '.cl-fc-nav{display:flex;gap:0.8rem;align-items:center;justify-content:center;margin-bottom:1rem}',
      '.cl-fc-nav button{background:var(--surface);border:1px solid var(--border);color:var(--text);padding:0.5rem 1.2rem;border-radius:8px;cursor:pointer;font-size:0.85rem;transition:background .15s}',
      '.cl-fc-nav button:hover{background:var(--surface2)}',
      '.cl-fc-counter{color:var(--muted);font-size:0.8rem}',
      '.cl-fc-judge{display:flex;gap:0.6rem;justify-content:center;margin-bottom:1rem}',
      '.cl-fc-judge button{padding:0.5rem 1.5rem;border-radius:8px;border:1px solid var(--border);cursor:pointer;font-size:0.85rem;transition:background .15s}',
      '.cl-btn-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border)}',
      '.cl-btn-correct:hover{background:rgba(105,240,174,0.18)}',
      '.cl-btn-wrong{background:var(--red-dim);color:var(--red-text);border-color:var(--red-border)}',
      '.cl-btn-wrong:hover{background:rgba(255,82,82,0.18)}',

      /* Chain / Order items */
      '.cl-chain-list{list-style:none;counter-reset:chain}',
      '.cl-chain-item{counter-increment:chain;padding:0.8rem 1rem 0.8rem 2.8rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;margin-bottom:0.5rem;position:relative;font-size:0.88rem;color:var(--text);line-height:1.5}',
      '.cl-chain-item::before{content:counter(chain);position:absolute;left:0.9rem;top:0.8rem;color:var(--accent);font-weight:600;font-size:0.85rem}',
      '.cl-chain-link{text-align:center;color:var(--accent);font-size:0.75rem;margin:-0.2rem 0 0.3rem;opacity:0.5}',

      /* Recall input */
      '.cl-recall-input{width:100%;background:var(--surface);border:1px solid var(--border);color:var(--text);padding:0.6rem 0.9rem;border-radius:8px;font-size:0.88rem;margin-bottom:0.5rem;font-family:inherit}',
      '.cl-recall-input:focus{outline:none;border-color:var(--accent)}',
      '.cl-recall-row{display:flex;gap:0.6rem;align-items:center;margin-bottom:0.6rem}',
      '.cl-recall-label{flex:1;font-size:0.85rem;color:var(--text)}',
      '.cl-recall-input-sm{flex:1;background:var(--surface);border:1px solid var(--border);color:var(--text);padding:0.5rem 0.7rem;border-radius:8px;font-size:0.85rem;font-family:inherit}',
      '.cl-recall-input-sm:focus{outline:none;border-color:var(--accent)}',

      /* Quiz choices */
      '.cl-choice{display:block;width:100%;text-align:left;background:var(--surface);border:1px solid var(--border);color:var(--text);padding:0.65rem 1rem;border-radius:8px;margin-bottom:0.5rem;cursor:pointer;font-size:0.85rem;transition:background .15s,border-color .15s}',
      '.cl-choice:hover{background:var(--surface2);border-color:rgba(240,237,232,0.15)}',
      '.cl-choice.cl-correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}',
      '.cl-choice.cl-wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red-text)}',
      '.cl-choice:disabled{cursor:default;opacity:0.85}',

      /* Order drag items */
      '.cl-order-item{padding:0.7rem 1rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;margin-bottom:0.4rem;cursor:grab;font-size:0.85rem;color:var(--text);user-select:none;transition:background .15s,transform .15s}',
      '.cl-order-item:active{cursor:grabbing;background:var(--surface2)}',
      '.cl-order-item.cl-dragging{opacity:0.5;transform:scale(0.97)}',
      '.cl-order-item.cl-drop-above{border-top:2px solid var(--accent)}',
      '.cl-order-correct{border-left:3px solid var(--green)}',
      '.cl-order-wrong{border-left:3px solid var(--red)}',

      /* Score / result */
      '.cl-score{text-align:center;padding:1.5rem;background:var(--surface);border:1px solid var(--border);border-radius:12px;margin-top:1.2rem}',
      '.cl-score-num{font-family:"Playfair Display",serif;font-size:2rem;color:var(--accent);margin-bottom:0.3rem}',
      '.cl-score-label{font-size:0.82rem;color:var(--muted)}',
      '.cl-next-btn{display:inline-block;margin-top:1rem;background:var(--accent-dim);border:1px solid rgba(232,201,122,0.2);color:var(--accent);padding:0.55rem 1.4rem;border-radius:8px;cursor:pointer;font-size:0.85rem;transition:background .15s}',
      '.cl-next-btn:hover{background:rgba(232,201,122,0.18)}',
      '.cl-phase-label{font-size:0.78rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--accent);margin-bottom:1rem}',
      '.cl-result-item{padding:0.5rem 0;border-bottom:1px solid var(--border);font-size:0.85rem;color:var(--text)}',
      '.cl-result-item:last-child{border-bottom:none}',
      '.cl-result-ok{color:var(--green)}',
      '.cl-result-ko{color:var(--red-text)}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ═══════════════════════════════════════════
  //  CURATED DATA
  // ═══════════════════════════════════════════

  var COURSE_DATA = {

    // ── Course 1: Architecture gothique ──
    'arts/architecture/gothique': {
      title: 'Architecture gothique',
      intro: 'Ce cours est riche en dates, vocabulaire technique et chiffres. Voici les meilleures techniques pour tout retenir.',
      activities: [
        {
          type: 'chain', icon: '\u{1F517}', method: 'M\u00e9thode des liens',
          title: 'Les 4 innovations techniques',
          description: 'Retiens les 4 inventions qui ont permis le gothique, dans l\'ordre logique.',
          tip: 'Cr\u00e9e une histoire : imagine une OGIVE (crois\u00e9e) qui se BRISE (arc bris\u00e9), puis BOUTE dehors (arc-boutant) et tombe sur un FORT (contrefort) avec un chapeau pointu (pinacle).',
          items: [
            'La crois\u00e9e d\'ogives \u2014 vo\u00fbte sur arcs diagonaux, pouss\u00e9es concentr\u00e9es sur les piliers',
            'L\'arc bris\u00e9 \u2014 deux arcs en pointe, couvre des trav\u00e9es de tailles diff\u00e9rentes',
            'L\'arc-boutant \u2014 arc ext\u00e9rieur reportant les pouss\u00e9es vers les contreforts',
            'Contreforts et pinacles \u2014 re\u00e7oivent les pouss\u00e9es, pinacles stabilisent par leur poids'
          ]
        },
        {
          type: 'order', icon: '\u{1F4C5}', method: 'Chronologie',
          title: 'Les 4 phases du gothique',
          description: 'Replace les phases dans le bon ordre chronologique.',
          items: [
            { label: 'Gothique primitif', detail: '1140-1200 \u2014 Saint-Denis, Sens, Noyon, Laon' },
            { label: 'Gothique classique', detail: '1200-1260 \u2014 Chartres, Reims, Amiens' },
            { label: 'Gothique rayonnant', detail: '1260-1380 \u2014 Sainte-Chapelle, remplages d\u00e9coratifs' },
            { label: 'Gothique flamboyant', detail: '1380-1520 \u2014 courbes en flammes, vo\u00fbtes complexes' }
          ]
        },
        {
          type: 'numbers', icon: '\u{1F4CF}', method: 'Chiffres cl\u00e9s',
          title: 'Les hauteurs des cath\u00e9drales',
          description: 'M\u00e9morise les hauteurs de vo\u00fbte gr\u00e2ce au Syst\u00e8me Majeur.',
          tip: 'Utilise le Syst\u00e8me Majeur : 33=MoMo (Monet? Non, MoMo pour Notre-DaMe), 37=MaK, 42.3=RaiN...',
          items: [
            { label: 'Notre-Dame de Paris', value: '33 m', hint: 'Commenc\u00e9e en 1163' },
            { label: 'Cath\u00e9drale de Chartres', value: '37 m', hint: '176 vitraux d\'origine' },
            { label: 'Cath\u00e9drale d\'Amiens', value: '42,3 m', hint: 'Plus vaste de France, 200 000 m\u00b3' },
            { label: 'Cath\u00e9drale de Beauvais (tentative)', value: '48 m', hint: 'Effondr\u00e9e en 1284 \u2014 la limite !' },
            { label: 'Rosace Notre-Dame de Paris', value: '13,1 m de diam\u00e8tre', hint: 'Rosace nord' },
            { label: 'Sainte-Chapelle \u2014 vitraux', value: '600 m\u00b2', hint: 'Murs presque 100% vitraux' },
            { label: 'Fl\u00e8ches de Cologne', value: '157 m', hint: 'Plus haut \u00e9difice du monde \u00e0 son ach\u00e8vement' }
          ]
        },
        {
          type: 'dates', icon: '\u{1F5D3}\uFE0F', method: 'Dates historiques',
          title: 'Dates cl\u00e9s du gothique',
          description: 'Les dates essentielles de l\'architecture gothique.',
          items: [
            { event: 'Basilique Saint-Denis (berceau du gothique)', date: '1140-1144' },
            { event: 'Notre-Dame de Paris (construction)', date: '1163-1345' },
            { event: 'Notre-Dame de Chartres', date: '1194-1220' },
            { event: 'Notre-Dame d\'Amiens', date: '1220-1270' },
            { event: 'Sainte-Chapelle de Paris', date: '1242-1248' },
            { event: 'Cath\u00e9drale de Cologne (d\u00e9but)', date: '1248' },
            { event: 'Effondrement de Beauvais', date: '1284' },
            { event: 'Fin du gothique flamboyant', date: '~1520' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Le vocabulaire du gothique',
          description: 'Les termes techniques essentiels.',
          items: [
            { term: 'Crois\u00e9e d\'ogives', def: 'Vo\u00fbte form\u00e9e de deux arcs diagonaux se croisant \u00e0 la clef de vo\u00fbte' },
            { term: 'Arc-boutant', def: 'Arc ext\u00e9rieur reportant les pouss\u00e9es vers des contreforts \u00e9loign\u00e9s' },
            { term: 'Arc bris\u00e9', def: 'Arc en pointe form\u00e9 de deux segments de cercle (vs. plein cintre roman)' },
            { term: 'Pinacle', def: 'Petite pyramide de pierre au sommet des contreforts, stabilisatrice' },
            { term: 'Remplage', def: 'R\u00e9seau de pierre d\u00e9coratif subdivisant une baie vitr\u00e9e' },
            { term: 'Rosace', def: 'Grande fen\u00eatre circulaire orn\u00e9e de vitraux' },
            { term: 'Triforium', def: 'Galerie \u00e9troite au-dessus des grandes arcades' },
            { term: 'Clef de vo\u00fbte', def: 'Pierre centrale au sommet de la vo\u00fbte, verrouillant la structure' },
            { term: 'Liernes et tiercerons', def: 'Nervures secondaires des vo\u00fbtes gothiques tardives' },
            { term: 'Contrefort', def: 'Pilier massif recevant les pouss\u00e9es transmises par l\'arc-boutant' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Cath\u00e9drales et leurs particularit\u00e9s',
          description: 'Associe chaque cath\u00e9drale \u00e0 ce qui la rend unique.',
          pairs: [
            { left: 'Saint-Denis', right: 'Berceau du gothique (abb\u00e9 Suger, 1140)' },
            { left: 'Notre-Dame de Paris', right: 'Rosace de 9,6m, arcs-boutants \u00e9lanc\u00e9s' },
            { left: 'Chartres', right: '176 vitraux d\'origine, bleu de Chartres' },
            { left: 'Amiens', right: 'Plus vaste de France, vo\u00fbte de 42,3m' },
            { left: 'Beauvais', right: 'Vo\u00fbte effondr\u00e9e en 1284 (tentative 48m)' },
            { left: 'Cologne', right: 'Fl\u00e8ches de 157m, achev\u00e9e au XIXe' },
            { left: 'Sainte-Chapelle', right: '600 m\u00b2 de vitraux, reliquaire de verre' },
            { left: 'S\u00e9ville', right: 'Plus grande cath\u00e9drale gothique au monde' }
          ]
        }
      ]
    },

    // ── Course 2: Impressionnisme ──
    'arts/peinture/impressionnisme': {
      title: 'L\'Impressionnisme',
      intro: 'Ce cours est centr\u00e9 sur des artistes, leurs \u0153uvres et des techniques picturales. Parfait pour les associations et les flashcards.',
      activities: [
        {
          type: 'chain', icon: '\u{1F517}', method: 'M\u00e9thode des liens',
          title: 'Les 4 principes fondamentaux',
          description: 'Les 4 innovations radicales de l\'impressionnisme.',
          tip: 'Imagine un peintre qui sort DEHORS (plein air), donne un coup de PINCEAU visible (touches), jette des pots de COULEURS PURES c\u00f4te \u00e0 c\u00f4te, puis regarde sa MONTRE (capture l\'instant).',
          items: [
            'Peinture en plein air \u2014 gr\u00e2ce au tube de peinture (vers 1840)',
            'Touches visibles \u2014 coups de pinceau apparents, vibration optique',
            'Couleurs pures juxtapos\u00e9es \u2014 m\u00e9lange optique plus lumineux',
            'Capture de l\'instant \u2014 la lumi\u00e8re \u00e0 un moment pr\u00e9cis'
          ]
        },
        {
          type: 'associations', icon: '\u{1F3A8}', method: 'Associations',
          title: 'Artistes et leur sp\u00e9cialit\u00e9',
          description: 'Chaque impressionniste avait sa signature unique.',
          pairs: [
            { left: 'Claude Monet (1840-1926)', right: 'S\u00e9ries (Nymph\u00e9as, Meules, Cath\u00e9drale de Rouen) \u2014 lumi\u00e8re pure' },
            { left: 'Pierre-Auguste Renoir (1841-1919)', right: 'Sc\u00e8nes de loisirs, joie de vivre \u2014 Bal du moulin de la Galette' },
            { left: 'Edgar Degas (1834-1917)', right: 'Ballet, courses de chevaux \u2014 cadrages audacieux' },
            { left: 'Camille Pissarro (1830-1903)', right: 'Paysages ruraux/urbains \u2014 mentor du groupe' },
            { left: 'Berthe Morisot (1841-1895)', right: 'Sc\u00e8nes intimistes \u2014 femme artiste pionni\u00e8re' },
            { left: '\u00c9douard Manet (1832-1883)', right: 'Pr\u00e9curseur \u2014 Le D\u00e9jeuner sur l\'herbe (scandale 1863)' }
          ]
        },
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: '\u0152uvres cl\u00e9s et leurs d\u00e9tails',
          description: 'Les \u0153uvres essentielles \u00e0 conna\u00eetre.',
          cards: [
            { front: 'Quel tableau a donn\u00e9 son nom au mouvement impressionniste ?', back: 'Impression, soleil levant de Monet (1872) \u2014 vue du port du Havre \u00e0 l\'aube' },
            { front: 'Qui a utilis\u00e9 le terme "impressionnisme" pour la premi\u00e8re fois et pourquoi ?', back: 'Le critique Louis Leroy en 1874, de mani\u00e8re moqueuse. Les artistes l\'ont adopt\u00e9 avec fiert\u00e9.' },
            { front: 'O\u00f9 a eu lieu la premi\u00e8re exposition impressionniste ?', back: 'Chez le photographe Nadar, en 1874. 8 expositions suivront jusqu\'en 1886.' },
            { front: 'Quelle invention technique a permis le plein air ?', back: 'Le tube de peinture en \u00e9tain (vers 1840)' },
            { front: 'Qu\'est-ce que le m\u00e9lange optique ?', back: 'Couleurs pures juxtapos\u00e9es sur la toile \u2014 c\'est l\'\u0153il qui les m\u00e9lange \u00e0 distance, plus vibrant que le m\u00e9lange physique.' },
            { front: 'Dimensions du Bal du moulin de la Galette (Renoir)', back: '131 x 175 cm \u2014 sc\u00e8ne de f\u00eate \u00e0 Montmartre (1876)' },
            { front: 'Combien d\'estampes japonaises Monet collectionnait-il ?', back: 'Plus de 200 estampes ukiyo-e' },
            { front: 'Que signifie "touche divis\u00e9e" ?', back: 'Petites touches de couleur pure pos\u00e9es c\u00f4te \u00e0 c\u00f4te, cr\u00e9ant une vibration lumineuse. Syst\u00e9matis\u00e9e ensuite par Seurat.' },
            { front: 'Quelle couleur dispara\u00eet de la palette impressionniste ?', back: 'Le noir pur \u2014 remplac\u00e9 par des bleus profonds et violets. Les ombres deviennent color\u00e9es.' },
            { front: 'Que pr\u00e9figurent les Nymph\u00e9as de Monet ?', back: 'L\'abstraction \u2014 ciel et eau se confondent, les rep\u00e8res spatiaux disparaissent. Panneaux de l\'Orangerie : ~100m de long.' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Post-impressionnistes et leur h\u00e9ritage',
          description: 'Trois artistes qui partent de l\'impressionnisme vers de nouvelles voies.',
          pairs: [
            { left: 'Paul C\u00e9zanne (1839-1906)', right: 'Volumes g\u00e9om\u00e9triques \u2192 pr\u00e9figure le cubisme \u2014 "cylindre, sph\u00e8re, c\u00f4ne"' },
            { left: 'Vincent van Gogh (1853-1890)', right: 'Couleur et \u00e9motion brutes \u2192 annonce l\'expressionnisme \u2014 La Nuit \u00e9toil\u00e9e' },
            { left: 'Paul Gauguin (1848-1903)', right: 'Couleurs plates, symbolisme \u2192 ouvre vers le fauvisme et le synth\u00e9tisme' }
          ]
        },
        {
          type: 'dates', icon: '\u{1F5D3}\uFE0F', method: 'Dates cl\u00e9s',
          title: 'Chronologie de l\'impressionnisme',
          description: 'Les moments charni\u00e8res du mouvement.',
          items: [
            { event: 'Invention du tube de peinture', date: '~1840' },
            { event: 'Le D\u00e9jeuner sur l\'herbe de Manet (Salon des Refus\u00e9s)', date: '1863' },
            { event: 'Impression, soleil levant de Monet', date: '1872' },
            { event: 'Premi\u00e8re exposition impressionniste chez Nadar', date: '1874' },
            { event: 'Bal du moulin de la Galette de Renoir', date: '1876' },
            { event: 'Derni\u00e8re exposition impressionniste', date: '1886' },
            { event: 'S\u00e9rie des Meules de Monet', date: '1890-1891' },
            { event: 'S\u00e9rie Cath\u00e9drale de Rouen de Monet', date: '1892-1894' },
            { event: 'D\u00e9but des Nymph\u00e9as de Monet', date: '1896' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Termes techniques',
          description: 'Le lexique de l\'impressionnisme.',
          items: [
            { term: 'Plein air', def: 'Peinture r\u00e9alis\u00e9e en ext\u00e9rieur, directement sur le motif' },
            { term: 'M\u00e9lange optique', def: 'Juxtaposition de couleurs pures que l\'\u0153il m\u00e9lange \u00e0 distance' },
            { term: 'Touche divis\u00e9e', def: 'Petites touches de couleur pure pos\u00e9es c\u00f4te \u00e0 c\u00f4te sur la toile' },
            { term: 'Japonisme', def: 'Influence des estampes japonaises ukiyo-e sur la composition occidentale' },
            { term: 'Salon des Refus\u00e9s', def: 'Exposition parall\u00e8le pour les artistes rejet\u00e9s par le Salon officiel (1863)' },
            { term: 'N\u00e9o-impressionnisme', def: 'Mouvement de Seurat et Signac syst\u00e9matisant la touche divis\u00e9e (pointillisme)' },
            { term: 'Sfumato', def: 'Technique de fondu progressif des contours \u2014 rejet\u00e9e par les impressionnistes' },
            { term: 'Synth\u00e9tisme', def: 'Style de Gauguin : grandes surfaces de couleurs plates, abandon du naturalisme' }
          ]
        }
      ]
    },

    // ── Course 3: ADN et ARN ──
    'chimie/biochimie/adn-arn': {
      title: 'ADN et ARN',
      intro: 'Ce cours est tr\u00e8s technique avec des processus s\u00e9quentiels, des chiffres pr\u00e9cis et beaucoup de vocabulaire sp\u00e9cialis\u00e9. La m\u00e9thode des liens et les flashcards sont id\u00e9ales.',
      activities: [
        {
          type: 'chain', icon: '\u{1F517}', method: 'M\u00e9thode des liens',
          title: 'Les \u00e9tapes de la r\u00e9plication',
          description: 'Les enzymes interviennent dans un ordre pr\u00e9cis.',
          tip: 'Imagine un H\u00c9LICOPT\u00c8RE (h\u00e9licase) qui D\u00c9ROULE une corde, une PRIMEUSE (primase) qui amorce un moteur, un POLYESTER III (polym\u00e9rase III) qui tisse un nouveau fil, et un LIGATURER (ligase) qui recoud les morceaux.',
          items: [
            'H\u00e9licase \u2014 d\u00e9roule la double h\u00e9lice en s\u00e9parant les brins',
            'Primase \u2014 synth\u00e9tise une courte amorce d\'ARN',
            'ADN polym\u00e9rase III \u2014 synth\u00e9tise le nouveau brin (5\'\u21923\')',
            'ADN ligase \u2014 relie les fragments d\'Okazaki'
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'M\u00e9thode des liens',
          title: 'Le dogme central : ADN \u2192 ARN \u2192 Prot\u00e9ine',
          description: 'Les 3 grands processus de l\'expression g\u00e9n\u00e9tique.',
          tip: 'Imagine une PHOTOCOPIEUSE (r\u00e9plication) qui copie un LIVRE (ADN), puis un SCRIBE (transcription) qui le traduit en MESSAGE (ARN), puis un CUISINIER (traduction) qui suit la RECETTE pour faire un PLAT (prot\u00e9ine).',
          items: [
            'R\u00e9plication \u2014 ADN \u2192 ADN (copie fid\u00e8le avant division cellulaire)',
            'Transcription \u2014 ADN \u2192 ARN messager (copie d\'un g\u00e8ne dans le noyau)',
            'Traduction \u2014 ARNm \u2192 Prot\u00e9ine (d\u00e9codage sur les ribosomes)'
          ]
        },
        {
          type: 'associations', icon: '\u{1F9EC}', method: 'Associations',
          title: 'Les types d\'ARN',
          description: 'Chaque ARN a un r\u00f4le sp\u00e9cifique.',
          pairs: [
            { left: 'ARNm (messager)', right: 'Copie du g\u00e8ne portant l\'info vers les ribosomes' },
            { left: 'ARNt (transfert)', right: 'Adaptateur : porte un acide amin\u00e9 + anticodon' },
            { left: 'ARNr (ribosomal)', right: 'Composant structural et catalytique des ribosomes' },
            { left: 'miARN (micro)', right: 'R\u00e9gule la traduction (~22 nucl\u00e9otides)' },
            { left: 'siARN (small interfering)', right: 'Silen\u00e7age de g\u00e8nes sp\u00e9cifiques' },
            { left: 'lncRNA (long non-codant)', right: 'R\u00f4les structuraux et de r\u00e9gulation (>200 nt)' }
          ]
        },
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: 'Concepts essentiels ADN/ARN',
          description: 'Les points cl\u00e9s \u00e0 ma\u00eetriser absolument.',
          cards: [
            { front: 'Quelles bases s\'apparient dans l\'ADN ?', back: 'A=T (2 liaisons H) et G\u2261C (3 liaisons H)' },
            { front: 'Quelle base remplace la thymine dans l\'ARN ?', back: 'L\'uracile (U) \u2014 s\'apparie avec A' },
            { front: 'Quel sucre dans l\'ADN vs l\'ARN ?', back: 'ADN : d\u00e9soxyribose / ARN : ribose (diff\u00e9rence = un -OH en position 2\')' },
            { front: 'Que signifie "r\u00e9plication semi-conservative" ?', back: 'Chaque mol\u00e9cule fille contient 1 brin ancien + 1 brin nouveau (Meselson & Stahl, 1958)' },
            { front: 'Dans quel sens l\'ADN polym\u00e9rase synth\u00e9tise ?', back: '5\' \u2192 3\' uniquement (c\'est pourquoi le brin retard\u00e9 a des fragments d\'Okazaki)' },
            { front: 'Codon d\'initiation de la traduction ?', back: 'AUG (code la m\u00e9thionine)' },
            { front: 'Codons stop ?', back: 'UAA, UAG, UGA (3 codons stop)' },
            { front: 'Pourquoi le code g\u00e9n\u00e9tique est "d\u00e9g\u00e9n\u00e9r\u00e9" ?', back: '61 codons pour 20 acides amin\u00e9s = plusieurs codons par AA. Mais non ambigu : 1 codon = 1 seul AA.' },
            { front: 'Qu\'est-ce que l\'\u00e9pissage ?', back: 'Excision des introns + jonction des exons \u2192 ARNm mature. L\'\u00e9pissage alternatif permet 1 g\u00e8ne \u2192 plusieurs prot\u00e9ines.' },
            { front: 'Qui a d\u00e9couvert la double h\u00e9lice et quand ?', back: 'Watson et Crick en 1953, gr\u00e2ce aux donn\u00e9es de diffraction X de Rosalind Franklin' }
          ]
        },
        {
          type: 'numbers', icon: '\u{1F522}', method: 'Chiffres cl\u00e9s',
          title: 'Les dimensions de l\'ADN',
          description: 'Les mesures essentielles \u00e0 retenir.',
          items: [
            { label: 'Diam\u00e8tre de la double h\u00e9lice', value: '2 nm' },
            { label: 'Pas de l\'h\u00e9lice (un tour complet)', value: '3,4 nm' },
            { label: 'Paires de bases par tour', value: '10' },
            { label: 'Liaisons H entre A-T', value: '2' },
            { label: 'Liaisons H entre G-C', value: '3' },
            { label: 'Nombre de codons sens', value: '61' },
            { label: 'Nombre de codons stop', value: '3' },
            { label: 'Nombre d\'acides amin\u00e9s cod\u00e9s', value: '20' },
            { label: 'Taille du g\u00e9nome humain', value: '3 milliards de paires de bases' },
            { label: 'Taux d\'erreur final de la r\u00e9plication', value: '~10\u207b\u2079 par nucl\u00e9otide' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Termes de biologie mol\u00e9culaire',
          description: 'Le lexique indispensable.',
          items: [
            { term: 'Nucl\u00e9otide', def: 'Unit\u00e9 de base : base azot\u00e9e + sucre + phosphate' },
            { term: 'Liaison phosphodiester', def: 'Liaison chimique reliant les nucl\u00e9otides entre eux (5\'\u21923\')' },
            { term: 'Codon', def: 'Triplet de nucl\u00e9otides sur l\'ARNm codant un acide amin\u00e9' },
            { term: 'Anticodon', def: 'Triplet compl\u00e9mentaire sur l\'ARNt, reconna\u00eet le codon' },
            { term: 'Exon', def: 'S\u00e9quence codante conserv\u00e9e dans l\'ARNm mature' },
            { term: 'Intron', def: 'S\u00e9quence non codante excis\u00e9e lors de l\'\u00e9pissage' },
            { term: 'Promoteur', def: 'S\u00e9quence d\'ADN o\u00f9 se fixe l\'ARN polym\u00e9rase (ex: TATA box)' },
            { term: 'Fragment d\'Okazaki', def: 'Court fragment d\'ADN synth\u00e9tis\u00e9 sur le brin retard\u00e9' },
            { term: '\u00c9pig\u00e9n\u00e9tique', def: 'Modifications de l\'expression g\u00e9nique sans changer la s\u00e9quence ADN' },
            { term: 'Ribozyme', def: 'ARN catalytique (ex: ARNr 23S qui forme la liaison peptidique)' }
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'M\u00e9thode des liens',
          title: 'Maturation de l\'ARNm eucaryote',
          description: '4 \u00e9tapes de la transcription \u00e0 l\'ARNm mature.',
          tip: 'Imagine un MESSAGE brut qu\'on habille : d\'abord un CHAPEAU (coiffe 5\'), puis on lui colle une QUEUE (poly-A), puis on COUPE les intrus (\u00e9pissage des introns), et il sort du NOYAU vers le RIBOSOME.',
          items: [
            'Coiffe 5\' (m7G) \u2014 prot\u00e8ge l\'ARNm de la d\u00e9gradation',
            'Queue poly-A en 3\' \u2014 stabilit\u00e9 et export nucl\u00e9aire',
            '\u00c9pissage \u2014 excision des introns, jonction des exons',
            'Export vers le cytoplasme \u2014 ARNm mature pr\u00eat pour la traduction'
          ]
        }
      ]
    }
  };

  // ═══════════════════════════════════════════
  //  RENDER: main panel
  // ═══════════════════════════════════════════

  function inject(slug) {
    if (!COURSE_DATA[slug]) return;
    injectCSS();

    var target = document.getElementById('cvContent');
    if (!target) return;

    // Remove previous if any
    var prev = target.querySelector('.cl-wrap');
    if (prev) prev.remove();

    var data = COURSE_DATA[slug];
    var wrap = el('div', 'cl-wrap');
    wrap.id = 'cl-section';

    // Header
    var hdr = el('div', 'cl-header',
      '<h2>\u{1F9E0} Apprendre ce cours</h2><p>' + esc(data.intro) + '</p>');
    wrap.appendChild(hdr);

    // Activity cards grid
    var grid = el('div', 'cl-grid');
    data.activities.forEach(function (act, idx) {
      var count = getItemCount(act);
      var saved = getScore(slug, idx);
      var card = el('div', 'cl-card');
      card.innerHTML =
        '<div class="cl-card-icon">' + act.icon + '</div>' +
        '<div class="cl-card-body">' +
          '<div class="cl-card-method">' + esc(act.method) + '</div>' +
          '<div class="cl-card-title">' + esc(act.title) + '</div>' +
          '<div class="cl-card-desc">' + esc(act.description) + '</div>' +
          '<div class="cl-card-meta">' + count + ' \u00e9l\u00e9ments</div>' +
          (saved ? '<div class="cl-mastery"><div class="cl-mastery-fill" style="width:' + saved.pct + '%"></div></div>' : '') +
        '</div>' +
        '<div class="cl-card-arrow">\u25B6</div>';
      card.onclick = function () { renderExercise(wrap, slug, data, idx); };
      grid.appendChild(card);
    });
    wrap.appendChild(grid);
    target.appendChild(wrap);
  }

  function getItemCount(act) {
    if (act.cards) return act.cards.length;
    if (act.pairs) return act.pairs.length;
    if (act.items) return act.items.length;
    return 0;
  }

  // ═══════════════════════════════════════════
  //  RENDER: exercise view
  // ═══════════════════════════════════════════

  function renderExercise(wrap, slug, data, idx) {
    var act = data.activities[idx];
    wrap.innerHTML = '';
    var exDiv = el('div', 'cl-exercise');

    // Back button
    var back = el('button', 'cl-back', '\u2190 Retour aux exercices');
    back.onclick = function () { inject(slug); };
    exDiv.appendChild(back);

    // Title + desc
    exDiv.appendChild(el('div', 'cl-ex-title', act.icon + ' ' + esc(act.title)));
    exDiv.appendChild(el('div', 'cl-ex-desc', esc(act.description)));

    // Tip
    if (act.tip) {
      exDiv.appendChild(el('div', 'cl-tip', '<strong>Astuce :</strong> ' + esc(act.tip)));
    }

    // Content area
    var content = el('div', 'cl-ex-content');
    exDiv.appendChild(content);
    wrap.appendChild(exDiv);

    // Dispatch to renderer
    var renderers = {
      flashcards: renderFlashcards,
      chain: renderChain,
      dates: renderDates,
      vocab: renderVocab,
      associations: renderAssociations,
      numbers: renderNumbers,
      order: renderOrder
    };
    if (renderers[act.type]) {
      renderers[act.type](content, act, slug, idx, data);
    }

    // Scroll to exercise
    wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showScore(container, correct, total, slug, idx, data) {
    var pct = Math.round((correct / total) * 100);
    setScore(slug, idx, { pct: pct, correct: correct, total: total, date: Date.now() });

    var sc = el('div', 'cl-score');
    sc.innerHTML =
      '<div class="cl-score-num">' + correct + ' / ' + total + '</div>' +
      '<div class="cl-score-label">' + pct + '% de bonnes r\u00e9ponses</div>';

    // Next suggestion
    var nextIdx = idx + 1;
    if (nextIdx < data.activities.length) {
      var btn = el('button', 'cl-next-btn', 'Exercice suivant \u2192 ' + esc(data.activities[nextIdx].title));
      btn.onclick = function () {
        var wrap = container.closest('.cl-wrap');
        renderExercise(wrap, slug, data, nextIdx);
      };
      sc.appendChild(btn);
    } else {
      var btnBack = el('button', 'cl-next-btn', '\u2190 Retour aux exercices');
      btnBack.onclick = function () { inject(slug); };
      sc.appendChild(btnBack);
    }

    container.appendChild(sc);
  }

  // ═══════════════════════════════════════════
  //  FLASHCARDS
  // ═══════════════════════════════════════════

  function renderFlashcards(container, act, slug, idx, data) {
    var cards = act.cards;
    var current = 0;
    var correctCount = 0;
    var flipped = false;
    var judged = false;

    var nav = el('div', 'cl-fc-nav');
    var prevBtn = el('button', '', '\u2190');
    var counter = el('span', 'cl-fc-counter');
    var nextBtn = el('button', '', '\u2192');
    nav.appendChild(prevBtn);
    nav.appendChild(counter);
    nav.appendChild(nextBtn);

    var fcWrap = el('div', 'cl-fc-wrap');
    var card = el('div', 'cl-fc-card');
    var front = el('div', 'cl-fc-face cl-fc-front');
    var back = el('div', 'cl-fc-face cl-fc-back');
    card.appendChild(front);
    card.appendChild(back);
    fcWrap.appendChild(card);

    var judgeDiv = el('div', 'cl-fc-judge');
    judgeDiv.style.display = 'none';
    var btnCorrect = el('button', 'cl-btn-correct', '\u2713 Correct');
    var btnWrong = el('button', 'cl-btn-wrong', '\u2717 Incorrect');
    judgeDiv.appendChild(btnWrong);
    judgeDiv.appendChild(btnCorrect);

    container.appendChild(nav);
    container.appendChild(fcWrap);
    container.appendChild(judgeDiv);

    function showCard() {
      flipped = false;
      judged = false;
      card.classList.remove('flipped');
      front.innerHTML = cards[current].front;
      back.innerHTML = cards[current].back;
      counter.textContent = (current + 1) + ' / ' + cards.length;
      judgeDiv.style.display = 'none';
      prevBtn.disabled = current === 0;
    }

    card.onclick = function () {
      flipped = !flipped;
      card.classList.toggle('flipped', flipped);
      if (flipped && !judged) judgeDiv.style.display = 'flex';
    };

    btnCorrect.onclick = function () {
      judged = true;
      correctCount++;
      judgeDiv.style.display = 'none';
      advanceOrFinish();
    };

    btnWrong.onclick = function () {
      judged = true;
      judgeDiv.style.display = 'none';
      advanceOrFinish();
    };

    function advanceOrFinish() {
      if (current < cards.length - 1) {
        current++;
        showCard();
      } else {
        container.innerHTML = '';
        showScore(container, correctCount, cards.length, slug, idx, data);
      }
    }

    prevBtn.onclick = function () {
      if (current > 0) { current--; showCard(); }
    };
    nextBtn.onclick = function () {
      if (!judged && flipped) return;
      if (current < cards.length - 1) { current++; showCard(); }
    };

    showCard();
  }

  // ═══════════════════════════════════════════
  //  CHAIN (méthode des liens)
  // ═══════════════════════════════════════════

  function renderChain(container, act, slug, idx, data) {
    // Phase 1: memorize
    var phase1 = el('div', '');
    phase1.appendChild(el('div', 'cl-phase-label', '\u{1F4D6} Phase 1 — M\u00e9morisation'));

    var list = el('ol', 'cl-chain-list');
    act.items.forEach(function (item, i) {
      list.appendChild(el('li', 'cl-chain-item', esc(item)));
      if (i < act.items.length - 1) {
        list.appendChild(el('div', 'cl-chain-link', '\u{1F517}'));
      }
    });
    phase1.appendChild(list);

    var startBtn = el('button', 'cl-next-btn', 'Passer au rappel \u2192');
    phase1.appendChild(startBtn);
    container.appendChild(phase1);

    startBtn.onclick = function () {
      container.innerHTML = '';
      renderChainRecall(container, act, slug, idx, data);
    };
  }

  function renderChainRecall(container, act, slug, idx, data) {
    container.appendChild(el('div', 'cl-phase-label', '\u{1F9E0} Phase 2 — Rappel'));
    container.appendChild(el('p', 'cl-ex-desc', 'Tape chaque \u00e9l\u00e9ment dans l\'ordre (le d\u00e9but suffit) :'));

    var inputs = [];
    act.items.forEach(function (item, i) {
      var row = el('div', 'cl-recall-row');
      row.innerHTML = '<span class="cl-recall-label" style="flex:0 0 2rem;text-align:center;color:var(--accent)">' + (i + 1) + '.</span>';
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'cl-recall-input-sm';
      inp.placeholder = 'Élément ' + (i + 1) + '...';
      inp.autocomplete = 'off';
      inputs.push(inp);
      row.appendChild(inp);
      container.appendChild(row);
    });

    var checkBtn = el('button', 'cl-next-btn', 'V\u00e9rifier');
    container.appendChild(checkBtn);

    checkBtn.onclick = function () {
      checkBtn.remove();
      var correct = 0;
      act.items.forEach(function (item, i) {
        var userVal = normalize(inputs[i].value);
        // Extract first meaningful word(s) from item for matching
        var itemNorm = normalize(item.split('\u2014')[0]);
        var match = userVal.length >= 3 && itemNorm.indexOf(userVal) !== -1;
        if (!match) {
          // Try if user typed a substantial portion
          var words = itemNorm.split(/\s+/);
          match = words.some(function (w) { return w.length >= 4 && userVal.indexOf(w) !== -1; });
        }
        inputs[i].disabled = true;
        if (match) {
          correct++;
          inputs[i].style.borderColor = 'var(--green)';
        } else {
          inputs[i].style.borderColor = 'var(--red)';
        }
        // Show answer
        var ans = el('div', 'cl-result-item ' + (match ? 'cl-result-ok' : 'cl-result-ko'),
          (match ? '\u2713 ' : '\u2717 ') + esc(item));
        inputs[i].parentElement.after(ans);
      });
      showScore(container, correct, act.items.length, slug, idx, data);
    };
  }

  // ═══════════════════════════════════════════
  //  DATES
  // ═══════════════════════════════════════════

  function renderDates(container, act, slug, idx, data) {
    // Phase 1: show all
    var phase1 = el('div', '');
    phase1.appendChild(el('div', 'cl-phase-label', '\u{1F4D6} Phase 1 — M\u00e9morisation'));

    act.items.forEach(function (item) {
      var row = el('div', 'cl-chain-item');
      row.innerHTML = '<strong style="color:var(--accent)">' + esc(item.date) + '</strong> — ' + esc(item.event);
      phase1.appendChild(row);
    });

    var startBtn = el('button', 'cl-next-btn', 'Passer au rappel \u2192');
    phase1.appendChild(startBtn);
    container.appendChild(phase1);

    startBtn.onclick = function () {
      container.innerHTML = '';
      renderDatesRecall(container, act, slug, idx, data);
    };
  }

  function renderDatesRecall(container, act, slug, idx, data) {
    container.appendChild(el('div', 'cl-phase-label', '\u{1F9E0} Phase 2 — Rappel'));
    container.appendChild(el('p', 'cl-ex-desc', 'Pour chaque \u00e9v\u00e9nement, tape la date :'));

    var shuffled = shuffle(act.items);
    var inputs = [];

    shuffled.forEach(function (item) {
      var row = el('div', 'cl-recall-row');
      var label = el('span', 'cl-recall-label');
      label.textContent = item.event;
      label.style.flex = '1.5';
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'cl-recall-input-sm';
      inp.placeholder = 'Date...';
      inp.autocomplete = 'off';
      inp.dataset.answer = item.date;
      inputs.push(inp);
      row.appendChild(label);
      row.appendChild(inp);
      container.appendChild(row);
    });

    var checkBtn = el('button', 'cl-next-btn', 'V\u00e9rifier');
    container.appendChild(checkBtn);

    checkBtn.onclick = function () {
      checkBtn.remove();
      var correct = 0;
      inputs.forEach(function (inp) {
        var answer = normalize(inp.dataset.answer);
        var user = normalize(inp.value);
        // Flexible: remove ~, accept partial
        var match = user === answer || answer.indexOf(user) !== -1 || user.indexOf(answer) !== -1;
        if (!match) {
          // Accept if numbers match
          var aNums = answer.match(/\d+/g) || [];
          var uNums = user.match(/\d+/g) || [];
          match = aNums.length > 0 && aNums[0] === uNums[0];
        }
        inp.disabled = true;
        if (match) {
          correct++;
          inp.style.borderColor = 'var(--green)';
        } else {
          inp.style.borderColor = 'var(--red)';
          inp.value = inp.value + ' \u2192 ' + inp.dataset.answer;
          inp.style.color = 'var(--red-text)';
        }
      });
      showScore(container, correct, inputs.length, slug, idx, data);
    };
  }

  // ═══════════════════════════════════════════
  //  VOCAB
  // ═══════════════════════════════════════════

  function renderVocab(container, act, slug, idx, data) {
    var items = shuffle(act.items.slice());
    var current = 0;
    var correct = 0;
    var allDefs = act.items.map(function (it) { return it.def; });

    function showQuestion() {
      container.innerHTML = '';
      if (current >= items.length) {
        showScore(container, correct, items.length, slug, idx, data);
        return;
      }
      var item = items[current];
      container.appendChild(el('div', 'cl-fc-counter', 'Question ' + (current + 1) + ' / ' + items.length));
      container.appendChild(el('div', 'cl-ex-title', esc(item.term)));
      container.appendChild(el('p', 'cl-ex-desc', 'Quelle est la bonne d\u00e9finition ?'));

      var choices = pickDistractors(item.def, allDefs, 3);
      choices.forEach(function (ch) {
        var btn = el('button', 'cl-choice', esc(ch));
        btn.onclick = function () {
          var btns = container.querySelectorAll('.cl-choice');
          for (var i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
            if (btns[i].textContent === item.def) btns[i].classList.add('cl-correct');
          }
          if (ch === item.def) {
            btn.classList.add('cl-correct');
            correct++;
          } else {
            btn.classList.add('cl-wrong');
          }
          setTimeout(function () { current++; showQuestion(); }, 1200);
        };
        container.appendChild(btn);
      });
    }
    showQuestion();
  }

  // ═══════════════════════════════════════════
  //  ASSOCIATIONS
  // ═══════════════════════════════════════════

  function renderAssociations(container, act, slug, idx, data) {
    var pairs = shuffle(act.pairs.slice());
    var current = 0;
    var correct = 0;
    var allRights = act.pairs.map(function (p) { return p.right; });

    function showQuestion() {
      container.innerHTML = '';
      if (current >= pairs.length) {
        showScore(container, correct, pairs.length, slug, idx, data);
        return;
      }
      var pair = pairs[current];
      container.appendChild(el('div', 'cl-fc-counter', 'Question ' + (current + 1) + ' / ' + pairs.length));
      container.appendChild(el('div', 'cl-ex-title', esc(pair.left)));
      container.appendChild(el('p', 'cl-ex-desc', 'Quelle est la bonne association ?'));

      var choices = pickDistractors(pair.right, allRights, 3);
      choices.forEach(function (ch) {
        var btn = el('button', 'cl-choice', esc(ch));
        btn.onclick = function () {
          var btns = container.querySelectorAll('.cl-choice');
          for (var i = 0; i < btns.length; i++) {
            btns[i].disabled = true;
            if (btns[i].textContent === pair.right) btns[i].classList.add('cl-correct');
          }
          if (ch === pair.right) {
            btn.classList.add('cl-correct');
            correct++;
          } else {
            btn.classList.add('cl-wrong');
          }
          setTimeout(function () { current++; showQuestion(); }, 1200);
        };
        container.appendChild(btn);
      });
    }
    showQuestion();
  }

  // ═══════════════════════════════════════════
  //  NUMBERS
  // ═══════════════════════════════════════════

  function renderNumbers(container, act, slug, idx, data) {
    // Phase 1: show all
    var phase1 = el('div', '');
    phase1.appendChild(el('div', 'cl-phase-label', '\u{1F4D6} Phase 1 — M\u00e9morisation'));

    act.items.forEach(function (item) {
      var row = el('div', 'cl-chain-item');
      row.innerHTML = esc(item.label) + ' : <strong style="color:var(--accent)">' + esc(item.value) + '</strong>' +
        (item.hint ? ' <span style="color:var(--muted);font-size:0.8rem">(' + esc(item.hint) + ')</span>' : '');
      phase1.appendChild(row);
    });

    var startBtn = el('button', 'cl-next-btn', 'Passer au rappel \u2192');
    phase1.appendChild(startBtn);
    container.appendChild(phase1);

    startBtn.onclick = function () {
      container.innerHTML = '';
      renderNumbersRecall(container, act, slug, idx, data);
    };
  }

  function renderNumbersRecall(container, act, slug, idx, data) {
    container.appendChild(el('div', 'cl-phase-label', '\u{1F9E0} Phase 2 — Rappel'));
    container.appendChild(el('p', 'cl-ex-desc', 'Pour chaque \u00e9l\u00e9ment, tape la valeur :'));

    var shuffled = shuffle(act.items);
    var inputs = [];

    shuffled.forEach(function (item) {
      var row = el('div', 'cl-recall-row');
      var label = el('span', 'cl-recall-label');
      label.textContent = item.label;
      label.style.flex = '1.5';
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'cl-recall-input-sm';
      inp.placeholder = 'Valeur...';
      inp.autocomplete = 'off';
      inp.dataset.answer = item.value;
      inputs.push(inp);
      row.appendChild(label);
      row.appendChild(inp);
      container.appendChild(row);
    });

    var checkBtn = el('button', 'cl-next-btn', 'V\u00e9rifier');
    container.appendChild(checkBtn);

    checkBtn.onclick = function () {
      checkBtn.remove();
      var correct = 0;
      inputs.forEach(function (inp) {
        var answer = inp.dataset.answer;
        var user = inp.value.trim();
        // Flexible number matching: extract digits, ignore units/spaces
        var ansNums = (answer.match(/[\d.,]+/g) || []).join('').replace(/,/g, '.');
        var userNums = (user.match(/[\d.,]+/g) || []).join('').replace(/,/g, '.');
        var match = ansNums && userNums && ansNums === userNums;
        if (!match) {
          // Also accept if the normalized strings roughly match
          match = normalize(user) === normalize(answer);
        }
        inp.disabled = true;
        if (match) {
          correct++;
          inp.style.borderColor = 'var(--green)';
        } else {
          inp.style.borderColor = 'var(--red)';
          inp.value = user + ' \u2192 ' + answer;
          inp.style.color = 'var(--red-text)';
        }
      });
      showScore(container, correct, inputs.length, slug, idx, data);
    };
  }

  // ═══════════════════════════════════════════
  //  ORDER
  // ═══════════════════════════════════════════

  function renderOrder(container, act, slug, idx, data) {
    container.appendChild(el('p', 'cl-ex-desc', 'Clique sur les \u00e9l\u00e9ments pour les r\u00e9ordonner par glisser-d\u00e9poser :'));

    var correctOrder = act.items.map(function (it) { return it.label; });
    var shuffled = shuffle(act.items.slice());
    var listEl = el('div', 'cl-order-list');
    var dragSrc = null;

    shuffled.forEach(function (item) {
      var itemEl = el('div', 'cl-order-item', esc(item.label));
      itemEl.draggable = true;
      itemEl.dataset.label = item.label;

      itemEl.addEventListener('dragstart', function (e) {
        dragSrc = this;
        this.classList.add('cl-dragging');
        e.dataTransfer.effectAllowed = 'move';
      });
      itemEl.addEventListener('dragend', function () {
        this.classList.remove('cl-dragging');
        var all = listEl.querySelectorAll('.cl-order-item');
        for (var i = 0; i < all.length; i++) all[i].classList.remove('cl-drop-above');
      });
      itemEl.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        this.classList.add('cl-drop-above');
      });
      itemEl.addEventListener('dragleave', function () {
        this.classList.remove('cl-drop-above');
      });
      itemEl.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('cl-drop-above');
        if (dragSrc && dragSrc !== this) {
          // Insert dragSrc before this
          listEl.insertBefore(dragSrc, this);
        }
      });

      // Touch support: tap to select, tap destination to move
      itemEl.addEventListener('click', function () {
        if (listEl._selected && listEl._selected !== this) {
          listEl.insertBefore(listEl._selected, this);
          listEl._selected.style.outline = '';
          listEl._selected = null;
        } else if (listEl._selected === this) {
          this.style.outline = '';
          listEl._selected = null;
        } else {
          if (listEl._selected) listEl._selected.style.outline = '';
          listEl._selected = this;
          this.style.outline = '2px solid var(--accent)';
        }
      });

      listEl.appendChild(itemEl);
    });

    container.appendChild(listEl);

    var checkBtn = el('button', 'cl-next-btn', 'V\u00e9rifier l\'ordre');
    container.appendChild(checkBtn);

    checkBtn.onclick = function () {
      checkBtn.remove();
      if (listEl._selected) {
        listEl._selected.style.outline = '';
        listEl._selected = null;
      }
      var items = listEl.querySelectorAll('.cl-order-item');
      var correct = 0;
      for (var i = 0; i < items.length; i++) {
        items[i].draggable = false;
        items[i].style.cursor = 'default';
        var isCorrect = items[i].dataset.label === correctOrder[i];
        if (isCorrect) {
          correct++;
          items[i].classList.add('cl-order-correct');
        } else {
          items[i].classList.add('cl-order-wrong');
        }
        // Show detail
        var detail = '';
        for (var j = 0; j < act.items.length; j++) {
          if (act.items[j].label === correctOrder[i]) {
            detail = act.items[j].detail || '';
            break;
          }
        }
        if (detail) {
          items[i].innerHTML += ' <span style="color:var(--muted);font-size:0.78rem;display:block;margin-top:0.2rem">' + esc(detail) + '</span>';
        }
        if (!isCorrect) {
          items[i].innerHTML += ' <span style="color:var(--red-text);font-size:0.78rem">\u2192 position correcte : ' + (correctOrder.indexOf(items[i].dataset.label) + 1) + '</span>';
        }
      }
      showScore(container, correct, items.length, slug, idx, data);
    };
  }

  // ═══════════════════════════════════════════
  //  PUBLIC API
  // ═══════════════════════════════════════════

  return {
    inject: inject,
    getProcessedSlugs: function () {
      return Object.keys(COURSE_DATA);
    }
  };

})();
