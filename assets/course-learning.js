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
    },

'philosophie/antiquite/aristote': {
  title: 'Aristote',
  intro: 'Un philosophe encyclopédique : logique, métaphysique, éthique, politique, biologie. Plusieurs méthodes complémentaires pour maîtriser sa pensée.',
  activities: [
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'Les 4 causes d\'Aristote',
      description: 'Retiens les quatre causes dans l\'ordre, de la matière à la finalité.',
      tip: 'Imagine une STATUE : le MARBRE (matière), la FORME sculptée (formelle), le SCULPTEUR qui travaille (efficiente), la BEAUTÉ recherchée (finale). Matière → Forme → Sculpteur → But.',
      items: [
        'Cause matérielle — de quoi la chose est faite (le marbre de la statue)',
        'Cause formelle — ce que la chose est, sa structure (la forme de la statue)',
        'Cause efficiente — ce qui produit la chose (le sculpteur)',
        'Cause finale — le but, la fin poursuivie (la beauté, l\'hommage)'
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Concepts fondamentaux d\'Aristote',
      description: 'Les notions essentielles à maîtriser.',
      cards: [
        { front: 'Qu\'est-ce que l\'Organon ?', back: 'L\'ensemble des traités logiques d\'Aristote (« instrument »). Il y établit les règles du raisonnement valide, dont le syllogisme.' },
        { front: 'Qu\'est-ce qu\'un syllogisme ?', back: 'Un raisonnement en trois propositions : prémisse majeure + prémisse mineure → conclusion. Ex. : Tous les hommes sont mortels / Socrate est un homme / Donc Socrate est mortel.' },
        { front: 'Qu\'est-ce que l\'hylémorphisme ?', back: 'La théorie selon laquelle tout être est composé de matière (hylè) et de forme (morphè). La forme est dans la chose même, non dans un monde séparé (contre Platon).' },
        { front: 'Qu\'est-ce que l\'eudaimonia ?', back: 'Le bonheur selon Aristote — non un plaisir passager, mais l\'accomplissement de la nature humaine par l\'exercice des vertus dans la durée d\'une vie.' },
        { front: 'Qu\'est-ce que la phronèsis ?', back: 'La sagesse pratique — la capacité de discerner le juste milieu dans chaque situation concrète. Elle s\'acquiert par l\'expérience, non par des formules.' },
        { front: 'Que signifie « zoon politikon » ?', back: 'Littéralement « animal politique » : l\'être humain est par nature fait pour vivre en cité. Seul un dieu ou une bête peut vivre isolé.' },
        { front: 'Qu\'est-ce que la politeia ?', back: 'Le régime politique mixte privilégié par Aristote, gouverné par une large classe moyenne. Il évite les dérives de l\'oligarchie et de la démagogie.' },
        { front: 'Quels sont les trois types d\'amitié selon Aristote ?', back: 'L\'amitié fondée sur l\'utilité, celle fondée sur le plaisir, et l\'amitié vertueuse (la plus haute) — où chacun aime l\'autre pour ce qu\'il est vraiment.' },
        { front: 'Qu\'est-ce que la puissance et l\'acte ?', back: 'Le gland est un chêne en puissance ; le chêne est le gland en acte. Tout être tend vers la réalisation de sa nature propre (son telos).' },
        { front: 'Qui a redécouvert Aristote au Moyen Âge ?', back: 'Les philosophes arabes Avicenne et Averroès, puis Thomas d\'Aquin qui l\'a intégré à la théologie chrétienne.' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Le lexique aristotélicien',
      description: 'Les termes grecs et concepts clés à connaître.',
      items: [
        { term: 'Organon', def: '« Instrument » — recueil des traités de logique d\'Aristote, fondation de la logique formelle' },
        { term: 'Syllogisme', def: 'Raisonnement déductif en trois propositions (majeure, mineure, conclusion)' },
        { term: 'Hylémorphisme', def: 'Théorie : tout être = matière (hylè) + forme (morphè), unies dans la chose même' },
        { term: 'Eudaimonia', def: 'Bonheur-accomplissement : activité de l\'âme conforme à la vertu sur une vie entière' },
        { term: 'Phronèsis', def: 'Sagesse pratique — art du jugement permettant de trouver le juste milieu en situation' },
        { term: 'Telos', def: 'La finalité naturelle d\'un être, ce vers quoi il tend par nature (vision téléologique)' },
        { term: 'Philia', def: 'L\'amitié au sens large — Aristote y consacre deux livres entiers de l\'Éthique à Nicomaque' },
        { term: 'Polis', def: 'La cité-État grecque — communauté politique qui permet à l\'homme de réaliser sa nature' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Concepts et exemples concrets',
      description: 'Associe chaque concept aristotélicien à son illustration.',
      pairs: [
        { left: 'Cause matérielle', right: 'Le marbre dont est faite la statue' },
        { left: 'Cause finale', right: 'La beauté visée par le sculpteur' },
        { left: 'Juste milieu de la vertu', right: 'Courage = entre lâcheté et témérité' },
        { left: 'Hylémorphisme', right: 'Matière + Forme unis dans la chose même' },
        { left: 'Puissance / Acte', right: 'Gland (puissance) → Chêne (acte)' },
        { left: 'Amitié vertueuse', right: 'Aimer l\'autre pour ce qu\'il est vraiment' },
        { left: 'Politeia', right: 'Régime mixte fondé sur la classe moyenne' },
        { left: 'Phronèsis', right: 'L\'expérience qui guide l\'action juste' }
      ]
    },
    {
      type: 'order', icon: '📅', method: 'Chronologie',
      title: 'La vie et l\'héritage d\'Aristote',
      description: 'Replace les étapes dans l\'ordre chronologique.',
      items: [
        { label: 'Naissance à Stagire (Macédoine)', detail: '384 av. J.-C.' },
        { label: 'Entrée à l\'Académie de Platon (20 ans d\'études)', detail: 'vers 367 av. J.-C.' },
        { label: 'Précepteur d\'Alexandre le Grand', detail: 'vers 343 av. J.-C.' },
        { label: 'Fondation du Lycée à Athènes', detail: '335 av. J.-C.' },
        { label: 'Mort d\'Aristote', detail: '322 av. J.-C.' },
        { label: 'Redécouverte par Avicenne et Averroès', detail: 'XIe–XIIe siècle' },
        { label: 'Intégration par Thomas d\'Aquin à la théologie chrétienne', detail: 'XIIIe siècle' }
      ]
    },
    {
      type: 'numbers', icon: '📐', method: 'Chiffres clés',
      title: 'Les chiffres d\'Aristote',
      description: 'Les nombres essentiels de la philosophie aristotélicienne.',
      items: [
        { label: 'Années passées à l\'Académie de Platon', value: '20 ans', hint: 'De ~367 à 347 av. J.-C.' },
        { label: 'Espèces animales classifiées par Aristote', value: '500+', hint: 'Premier grand naturaliste de l\'histoire' },
        { label: 'Principes logiques fondamentaux', value: '3', hint: 'Identité, non-contradiction, tiers exclu' },
        { label: 'Causes pour expliquer un être', value: '4', hint: 'Matérielle, formelle, efficiente, finale' },
        { label: 'Types d\'amitié distingués', value: '3', hint: 'Utilité, plaisir, vertu' },
        { label: 'Régimes politiques analysés (+ leurs déviations)', value: '6', hint: 'Monarchie/tyrannie, aristocratie/oligarchie, démocratie/démagogie' },
        { label: 'Livres de l\'Éthique à Nicomaque consacrés à l\'amitié', value: '2', hint: 'Livres VIII et IX — l\'amitié comme nécessité à la vie bonne' }
      ]
    }
  ]
},

'histoire/moderne/revolution-industrielle': {
  title: 'Révolution industrielle',
  intro: 'Un cours dense en dates, inventeurs, inventions et chiffres. Idéal pour les dates, les associations et les nombres.',
  activities: [
    {
      type: 'order', icon: '📅', method: 'Chronologie',
      title: 'Les grandes étapes de l\'industrialisation',
      description: 'Replace ces événements fondateurs dans le bon ordre chronologique.',
      items: [
        { label: 'Spinning jenny de Hargreaves', detail: '1764 — mécanise le filage du coton' },
        { label: 'Machine à vapeur de James Watt', detail: '1769 — moteur de la Révolution industrielle' },
        { label: 'Procédé de puddlage de Henry Cort', detail: '1784 — fer de qualité en grande quantité' },
        { label: 'Première ligne de chemin de fer (Stockton-Darlington)', detail: '1825 — George Stephenson' },
        { label: 'Ligne Liverpool-Manchester (passagers)', detail: '1830 — locomotive « Rocket »' },
        { label: 'Procédé Bessemer (acier en masse)', detail: '1856 — révolutionne la construction' },
        { label: 'Chaîne de montage Ford', detail: '1913 — Ford T en 93 min au lieu de 12 h' }
      ]
    },
    {
      type: 'dates', icon: '🗓️', method: 'Dates historiques',
      title: 'Dates clés de la Révolution industrielle',
      description: 'Les dates incontournables à maîtriser.',
      items: [
        { event: 'Spinning jenny de James Hargreaves', date: '1764' },
        { event: 'Machine à vapeur de James Watt (brevet)', date: '1769' },
        { event: 'Water frame de Richard Arkwright', date: '1769' },
        { event: 'Procédé de puddlage de Henry Cort', date: '1784' },
        { event: 'Métier à tisser mécanique d\'Edmund Cartwright', date: '1785' },
        { event: 'Première ligne de chemin de fer (Stockton-Darlington)', date: '1825' },
        { event: 'Ligne Liverpool-Manchester (passagers)', date: '1830' },
        { event: 'Épidémie de choléra à Paris (18 000 morts)', date: '1832' },
        { event: 'Ligne Paris-Saint-Germain (premier chemin de fer français)', date: '1837' },
        { event: 'Manifeste du Parti communiste (Marx et Engels)', date: '1848' },
        { event: 'Procédé Bessemer (acier en masse)', date: '1856' },
        { event: 'Canal de Suez percé par Ferdinand de Lesseps', date: '1869' },
        { event: 'Chemin de fer transcontinental américain', date: '1869' },
        { event: 'Ampoule à incandescence de Thomas Edison', date: '1879' },
        { event: 'Loi Waldeck-Rousseau (légalisation des syndicats en France)', date: '1884' },
        { event: 'Automobile de Karl Benz (moteur à explosion)', date: '1886' },
        { event: 'Massacre de Haymarket / naissance du 1er mai', date: '1886' },
        { event: 'Chaîne de montage de Henry Ford', date: '1913' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Inventeurs et leurs inventions',
      description: 'Associe chaque inventeur à sa contribution décisive.',
      pairs: [
        { left: 'James Watt', right: 'Machine à vapeur perfectionnée (1769)' },
        { left: 'James Hargreaves', right: 'Spinning jenny — filage multiple (1764)' },
        { left: 'Richard Arkwright', right: 'Water frame + père du système usinier' },
        { left: 'George Stephenson', right: 'Première ligne de chemin de fer (1825)' },
        { left: 'Thomas Edison', right: 'Ampoule (1879) + centrale électrique (1882)' },
        { left: 'Henry Bessemer', right: 'Procédé de production d\'acier en masse (1856)' },
        { left: 'Henry Ford', right: 'Chaîne de montage (1913) — Ford T accessible' },
        { left: 'Frederick Taylor', right: 'Organisation scientifique du travail (taylorisme)' }
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Questions essentielles sur la Révolution industrielle',
      description: 'Les faits et mécanismes à bien comprendre.',
      cards: [
        { front: 'Pourquoi la Révolution industrielle commence-t-elle en Angleterre ?', back: 'Abondance de charbon et de fer, capitaux disponibles (commerce colonial), stabilité politique et esprit d\'entreprise.' },
        { front: 'Qu\'est-ce que le système usinier (factory system) ?', back: 'L\'usine regroupe des centaines d\'ouvriers sous un même toit, soumis à des horaires stricts et à la cadence des machines. Arkwright en est le père (années 1770).' },
        { front: 'Quelle était l\'espérance de vie d\'un ouvrier à Manchester au XIXe siècle ?', back: '17 ans — contre 38 ans dans les zones rurales. Les quartiers ouvriers étaient surpeuplés, insalubres et frappés par le choléra et le typhus.' },
        { front: 'Qu\'est-ce que le taylorisme ?', back: 'L\'organisation scientifique du travail de Frederick Taylor (1856-1915) : chaque tâche est décomposée, chronométrée et optimisée pour maximiser la productivité.' },
        { front: 'Quel était le prix de la Ford T avant et après la chaîne de montage ?', back: 'De 850 dollars à 260 dollars. Le temps d\'assemblage passe de 12 heures à 93 minutes (1913).' },
        { front: 'Qu\'est-ce que le canal de Suez et quand a-t-il été ouvert ?', back: 'Percé par Ferdinand de Lesseps en 1869, ce canal de 164 km relie la Méditerranée à la mer Rouge, réduisant le trajet Londres-Bombay de 11 000 km.' },
        { front: 'Que décrit Friedrich Engels dans son livre de 1845 ?', back: 'La Situation de la classe laborieuse en Angleterre — la misère des quartiers ouvriers, les conditions de travail déplorables dans les villes industrielles.' },
        { front: 'Pourquoi le 1er mai est-il la Fête du travail ?', back: 'En mémoire du massacre de Haymarket (Chicago, 1886) lors d\'une grève pour la journée de 8 heures. Choisi en 1889 par la Deuxième Internationale.' },
        { front: 'Quels pays rattrapent et dépassent l\'Angleterre lors de la 2e révolution industrielle ?', back: 'Les États-Unis (industrie électrique : General Electric, Westinghouse) et l\'Allemagne (chimie : colorants, engrais, médicaments).' },
        { front: 'Par combien la production mondiale est-elle multipliée entre 1850 et 1914 ?', back: 'Par 7 — grâce à l\'acier, à l\'électricité, au pétrole et à l\'organisation scientifique du travail.' }
      ]
    },
    {
      type: 'numbers', icon: '📐', method: 'Chiffres clés',
      title: 'Les chiffres de la Révolution industrielle',
      description: 'Mémorise les grandes mesures et statistiques.',
      items: [
        { label: 'Km de voies ferrées en Angleterre (1825→1850)', value: '0 → 10 000 km', hint: 'Croissance vertigineuse en 25 ans' },
        { label: 'Population de Manchester (1772→1850)', value: '25 000 → 300 000', hint: 'Multiplication par 12 en moins de 80 ans' },
        { label: 'Durée de travail journalière des ouvriers', value: '14 à 16 heures', hint: 'Enfants au travail dès l\'âge de 5 ans' },
        { label: 'Longueur du canal de Suez', value: '164 km', hint: 'Ouvert en 1869, économie de 11 000 km sur le trajet Londres-Bombay' },
        { label: 'Réduction du prix de la Ford T (1913)', value: '850 → 260 dollars', hint: 'Grâce à la chaîne de montage — la voiture devient accessible' },
        { label: 'Temps d\'assemblage d\'une Ford T avant/après', value: '12 h → 93 min', hint: 'Gain de productivité par la chaîne de montage Ford (1913)' },
        { label: 'Multiplication de la production mondiale (1850-1914)', value: '× 7', hint: 'Acier, électricité, pétrole, organisation scientifique du travail' },
        { label: 'Morts du choléra à Paris en 1832', value: '18 000', hint: 'L\'insalubrité des villes industrielles favorisait les épidémies' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Concepts et mouvements clés',
      description: 'Les termes essentiels de la période industrielle.',
      items: [
        { term: 'Puddlage', def: 'Procédé d\'Henry Cort (1784) permettant de produire du fer de qualité en grande quantité, en brassant la fonte en fusion' },
        { term: 'Taylorisme', def: 'Organisation scientifique du travail de Frederick Taylor : décomposition, chronométrage et optimisation de chaque tâche' },
        { term: 'Fordisme', def: 'Application par Henry Ford du taylorisme avec la chaîne de montage (1913) — production de masse à bas coût' },
        { term: 'Prolétariat', def: 'Classe ouvrière selon Marx — ceux qui ne possèdent que leur force de travail, opposés à la bourgeoisie capitaliste' },
        { term: 'Trade Unions', def: 'Syndicats britanniques, légalisés en 1824 — premières organisations de défense des droits ouvriers' },
        { term: 'Socialisme utopique', def: 'Courant de Saint-Simon, Fourier, Owen : proposer des communautés idéales comme alternative au capitalisme industriel' },
        { term: 'Procédé Bessemer', def: 'Technique (1856) transformant la fonte en acier rapidement et à moindre coût — rend possible la construction métallique moderne' }
      ]
    }
  ]
},

'cuisine/nutrition/equilibre': {
  title: 'Équilibre alimentaire',
  intro: 'Ce cours couvre les groupes alimentaires, les nutriments clés et les recommandations officielles. Voici les meilleures techniques pour consolider ces repères.',
  activities: [
    {
      type: 'chain', icon: '🍽️', method: 'Méthode des liens',
      title: 'Les 5 composantes d\'un repas équilibré',
      description: 'Retiens les 5 éléments d\'un repas complet dans leur ordre logique.',
      tip: 'Imagine une assiette qui se REMPLIT : on pose d\'abord les FÉCULENTS (base d\'énergie), puis les PROTÉINES (construction), puis les LÉGUMES (couleur), on ajoute un LAITAGE (calcium) et on croque un FRUIT (vitamine C) pour finir. Tout le monde BOIT de l\'eau.',
      items: [
        'Féculents — source d\'énergie longue durée (glucides complexes)',
        'Protéines — construction et réparation (viandes, œufs, légumineuses)',
        'Légumes — fibres, vitamines, minéraux à chaque repas',
        'Produit laitier — calcium et probiotiques',
        'Fruit — vitamine C et fibres'
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Nutriments et recommandations officielles',
      description: 'Les notions clés à maîtriser sur l\'équilibre alimentaire.',
      cards: [
        { front: 'Sur quelle période se juge l\'équilibre alimentaire ?', back: 'Sur la semaine entière — pas sur un seul repas. Un excès ponctuel peut être compensé les jours suivants.' },
        { front: 'Que recommande le PNNS pour les fruits et légumes ?', back: 'Au moins 5 portions par jour, variées, de saison, crues et cuites.' },
        { front: 'Quelle est la limite de sel recommandée par l\'OMS ?', back: '5 g par jour (environ 1 cuillère à café). La consommation moyenne en France est de 8-10 g.' },
        { front: 'Que signifie la règle des 80/20 en alimentation ?', back: 'Manger équilibré 80 % du temps, avec 20 % de liberté pour les plaisirs occasionnels — sans impact négatif sur la santé.' },
        { front: 'Qu\'est-ce que l\'orthorexie ?', back: 'Un trouble du comportement alimentaire lié au perfectionnisme alimentaire excessif.' },
        { front: 'Comment se répartit l\'assiette Harvard ?', back: '½ légumes et fruits, ¼ protéines de qualité, ¼ féculents complets — avec eau et bonnes graisses.' },
        { front: 'Qu\'est-ce que la classification NOVA groupe 4 ?', back: 'Les aliments ultra-transformés : produits industriels contenant des additifs introuvables dans une cuisine domestique.' },
        { front: 'Qu\'a montré l\'étude NutriNet (Inserm) sur les aliments ultra-transformés ?', back: '+10 % d\'AUT dans l\'alimentation = +12 % de risque de cancer et risques accrus de maladies cardiovasculaires, diabète et dépression.' },
        { front: 'Pourquoi la vitamine C améliore-t-elle l\'absorption du fer végétal ?', back: 'Elle transforme le fer non héminique (légumineuses, légumes verts) en une forme mieux absorbée par l\'intestin.' },
        { front: 'Que signifie Nutri-Score A ?', back: 'La meilleure qualité nutritionnelle globale pour un produit (vert foncé) — outil de comparaison intra-catégorie.' },
        { front: 'Qu\'est-ce que l\'alimentation intuitive ?', back: 'Écouter ses signaux de faim et satiété plutôt que des règles externes — réduit les comportements restrictifs et les compulsions.' },
        { front: 'Quels poissons sont riches en oméga-3 (EPA et DHA) ?', back: 'Sardine, maquereau, saumon, hareng — à consommer 2 fois par semaine.' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Concepts clés de la nutrition',
      description: 'Les termes essentiels à connaître.',
      items: [
        { term: 'Glucides complexes', def: 'Sucres à longue chaîne (féculents, céréales) fournissant une énergie durable à IG modéré' },
        { term: 'Fer héminique', def: 'Fer présent dans les viandes rouges et abats, bien mieux absorbé que le fer végétal' },
        { term: 'Oméga-3 (EPA/DHA)', def: 'Acides gras essentiels anti-inflammatoires, protecteurs du cœur et du cerveau — poissons gras' },
        { term: 'Chronobiologie nutritionnelle', def: 'Science étudiant l\'influence du timing des repas sur le métabolisme' },
        { term: 'Ghréline / Leptine', def: 'Hormones de la faim (ghréline) et de la satiété (leptine) régulant l\'appétit' },
        { term: 'NOVA', def: 'Classification en 4 groupes selon le degré de transformation industrielle des aliments' },
        { term: 'PNNS', def: 'Programme National Nutrition Santé — recommandations officielles françaises pour une alimentation saine' },
        { term: 'Vitamines liposolubles', def: 'Vitamines A, D, E, K — solubles dans les graisses, stockées dans les tissus adipeux et le foie' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Groupes alimentaires et leurs rôles',
      description: 'Associe chaque groupe d\'aliments à sa fonction principale dans l\'organisme.',
      pairs: [
        { left: 'Légumes et fruits', right: 'Vitamines, minéraux, fibres, antioxydants — OMS : +400 g/jour' },
        { left: 'Céréales et féculents', right: 'Énergie durable (glucides complexes) et fibres (version complète)' },
        { left: 'Protéines (viandes, légumineuses)', right: 'Construction et réparation des tissus — 1 à 2 portions/jour' },
        { left: 'Matières grasses (huile d\'olive, colza)', right: 'Vitamines liposolubles et acides gras essentiels — qualité avant quantité' },
        { left: 'Produits laitiers', right: 'Calcium et probiotiques — remplaçables par légumes verts et eaux calciques' },
        { left: 'Eau', right: 'Seule boisson indispensable — aucun besoin en boissons sucrées' }
      ]
    },
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les chiffres de l\'équilibre alimentaire',
      description: 'Les valeurs de référence à retenir.',
      items: [
        { label: 'Fruits et légumes recommandés (OMS)', value: '400 g/jour minimum', hint: 'Soit environ 5 portions — base du PNNS' },
        { label: 'Limite de sel (OMS)', value: '5 g/jour', hint: 'Environ 1 cuillère à café — moyenne française : 8-10 g' },
        { label: 'Vitamine D — supplémentation hivernale', value: '800-2000 UI/jour', hint: 'Rarement couverte par l\'alimentation seule en France' },
        { label: 'Augmentation du risque de cancer par +10 % d\'AUT', value: '+12 %', hint: 'Étude NutriNet (Inserm) sur les ultra-transformés' },
        { label: 'Règle des 80/20', value: '80 % équilibré, 20 % libre', hint: 'Liberté sans culpabilité pour les plaisirs occasionnels' },
        { label: 'Poissons gras (oméga-3)', value: '2 fois par semaine', hint: 'Sardine, maquereau, saumon, hareng' }
      ]
    },
    {
      type: 'order', icon: '📋', method: 'Séquence logique',
      title: 'Les 4 groupes NOVA dans l\'ordre',
      description: 'Replace les groupes de la classification NOVA du moins au plus transformé.',
      items: [
        { label: 'NOVA 1 — Aliments non transformés', detail: 'Légumes, fruits, viandes fraîches, œufs, lait — état naturel ou quasi-naturel' },
        { label: 'NOVA 2 — Ingrédients culinaires', detail: 'Huiles, beurre, farine, sel, sucre — servent à cuisiner, pas à consommer seuls' },
        { label: 'NOVA 3 — Aliments transformés', detail: 'Pain de boulangerie, conserves, fromage — peu d\'additifs, reconnaissables' },
        { label: 'NOVA 4 — Aliments ultra-transformés', detail: 'Nuggets, sodas, biscuits industriels — additifs introuvables en cuisine maison' }
      ]
    }
  ]
},

'environnement/solutions-durables/energies-renouvelables': {
  title: 'Les énergies renouvelables',
  intro: 'Ce cours regorge de chiffres spectaculaires, de technologies à distinguer et de records mondiaux. Voici les méthodes pour tout ancrer.',
  activities: [
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les chiffres spectaculaires des renouvelables',
      description: 'Les statistiques essentielles à retenir.',
      items: [
        { label: 'Chute du coût du solaire depuis 1976', value: '99 %', hint: 'La source d\'électricité la moins chère de l\'histoire selon l\'AIE' },
        { label: 'Chute du coût des batteries lithium-ion depuis 1991', value: '97 %', hint: 'Rend le stockage de court terme accessible à grande échelle' },
        { label: 'Part des renouvelables dans l\'électricité mondiale (2024)', value: '~30 %', hint: 'En croissance rapide — solaire multiplié par 20 en 10 ans' },
        { label: 'Part de l\'hydroélectricité dans l\'électricité mondiale', value: '15 %', hint: 'Première source renouvelable au monde' },
        { label: 'Capacité solaire installée en 2023 (record annuel)', value: '+400 GW', hint: 'La Chine a installé en 2023 autant qu\'en tout en 2022' },
        { label: 'Puissance d\'une éolienne offshore moderne', value: '15-20 MW', hint: 'Rotors de 220 m de diamètre — 60× plus qu\'une éolienne des années 1990' },
        { label: 'Part de l\'éolien dans l\'électricité du Danemark (2023)', value: '~88 %', hint: 'Modèle mondial — politique cohérente depuis les années 1970' },
        { label: 'STEP — part dans le stockage mondial', value: '94 % (ou 85 % selon passage)', hint: 'Technologie la plus mature : pompage-turbinage' },
        { label: 'Batterie Tesla Australie du Sud (2016)', value: '100 MW / 129 MWh', hint: 'Installée en 100 jours après le blackout de septembre 2016' },
        { label: 'Loi de Swanson — réduction par doublement de capacité PV', value: '~20 %', hint: 'Analogue à la loi de Moore pour les semi-conducteurs' }
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Technologies et concepts des renouvelables',
      description: 'Les notions fondamentales à maîtriser.',
      cards: [
        { front: 'Qu\'est-ce que l\'effet photovoltaïque ?', back: 'Conversion directe de la lumière du soleil en électricité — principe des panneaux solaires.' },
        { front: 'Qu\'est-ce que la loi de Swanson ?', back: 'Chaque doublement de la capacité solaire installée réduit le coût des modules PV d\'environ 20 %. Analogue à la loi de Moore.' },
        { front: 'Qu\'est-ce que l\'agrivoltaïsme ?', back: 'Combinaison de panneaux solaires et de cultures agricoles sur les mêmes parcelles — double usage des terres.' },
        { front: 'Qu\'est-ce que l\'hydrogène vert ?', back: 'Hydrogène produit par électrolyse de l\'eau à partir d\'électricité renouvelable — stockage saisonnier et décarbonation de l\'industrie lourde.' },
        { front: 'Qu\'est-ce qu\'une STEP ?', back: 'Station de Transfert d\'Énergie par Pompage — stocke l\'électricité en pompant l\'eau en hauteur, puis la turbine à la demande.' },
        { front: 'Qu\'est-ce que le V2G (Vehicle-to-Grid) ?', back: 'Utilisation des batteries des véhicules électriques comme source de stockage réinjectant de l\'électricité dans le réseau.' },
        { front: 'Quel pays produit 30 % de son électricité par géothermie ?', back: 'L\'Islande — la géothermie exploite la chaleur du sous-sol, disponible en permanence sans intermittence.' },
        { front: 'Quel est le principal défi du solaire et de l\'éolien ?', back: 'L\'intermittence — production dépendante du soleil ou du vent, pas toujours synchronisée avec la demande.' },
        { front: 'Qu\'est-ce que le solaire CSP (Concentré) ?', back: 'Miroirs concentrant le rayonnement solaire pour produire de la chaleur puis de l\'électricité via turbine — stockage thermique possible.' },
        { front: 'Qu\'est-ce que l\'éolien flottant ?', back: 'Éoliennes sur plateformes flottantes ancrées — accessibles en eaux profondes (>60 m), inaccessibles à l\'éolien posé.' },
        { front: 'Quel pays est leader mondial de l\'éolien offshore ?', back: 'Le Royaume-Uni — avec des parcs comme Hornsea Two (1,3 GW, 165 turbines, au large du Yorkshire).' },
        { front: 'Quels rendements compare-t-on entre cellules à pérovskite et silicium ?', back: 'Pérovskite : ~26 % — Silicium classique : ~22 % — la pérovskite promet plus pour un coût inférieur.' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Lexique des énergies renouvelables',
      description: 'Les termes techniques essentiels.',
      items: [
        { term: 'Photovoltaïque (PV)', def: 'Technologie convertissant la lumière en électricité via l\'effet photovoltaïque (cellules au silicium)' },
        { term: 'Éolien offshore', def: 'Parcs éoliens en mer, bénéficiant de vents plus forts et réguliers qu\'à terre' },
        { term: 'Géothermie', def: 'Exploitation de la chaleur du sous-sol terrestre — continue, sans intermittence' },
        { term: 'Électrolyse', def: 'Procédé de décomposition de l\'eau en hydrogène et oxygène par courant électrique — base de l\'hydrogène vert' },
        { term: 'Bifacial (panneau)', def: 'Panneau solaire captant la lumière des deux faces — augmente la production de 10 à 30 %' },
        { term: 'Demand response', def: 'Gestion intelligente de la demande électrique — modulation de la consommation selon la production disponible' },
        { term: 'Rooftop solar', def: 'Solaire photovoltaïque de toiture — démocratise la production en faisant de chaque bâtiment un producteur' },
        { term: 'Marémotrice / houlomotrice', def: 'Énergies exploitant les marées et les vagues — encore expérimentales' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Sources d\'énergie et leurs caractéristiques',
      description: 'Associe chaque source renouvelable à sa particularité principale.',
      pairs: [
        { left: 'Solaire photovoltaïque', right: 'Coût -99 % depuis 1976 — source la moins chère de l\'histoire' },
        { left: 'Éolien offshore', right: 'Vents plus réguliers en mer — éoliennes jusqu\'à 15-20 MW' },
        { left: 'Hydroélectricité', right: 'Première source renouvelable mondiale : 15 % de l\'électricité globale' },
        { left: 'Géothermie', right: 'Islande : 30 % de son électricité — disponibilité permanente, sans intermittence' },
        { left: 'Hydrogène vert', right: 'Stockage saisonnier et décarbonation de l\'industrie lourde et du transport' },
        { left: 'STEP (pompage-turbinage)', right: '94 % de la capacité mondiale de stockage d\'électricité installée' }
      ]
    },
    {
      type: 'order', icon: '📅', method: 'Chronologie',
      title: 'L\'essor du solaire en dates',
      description: 'Replace ces jalons dans l\'ordre chronologique de la révolution solaire.',
      items: [
        { label: 'Début de la baisse du coût du solaire', detail: 'À partir de 1976 — trajectoire de -99 % sur 50 ans' },
        { label: 'Chute de 97 % du coût des batteries lithium-ion', detail: 'Depuis 1991 — rend le stockage de court terme viable' },
        { label: 'Décennie de baisse de 90 % du coût PV', detail: '2010-2020 — accélération sans précédent dans l\'histoire de l\'énergie' },
        { label: 'Puissance solaire mondiale dépasse 1 000 GW', detail: '2022 — soit ~5 % de l\'électricité mondiale (contre <0,1 % en 2005)' },
        { label: 'Record mondial d\'installation annuelle : +400 GW solaire', detail: '2023 — la Chine installe en un an autant que la capacité mondiale totale de 2022' },
        { label: 'Les renouvelables atteignent 30 % de l\'électricité mondiale', detail: '2024 — croissance accélérée portée par le solaire et l\'éolien' }
      ]
    },
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'La chaîne du stockage et de l\'intégration',
      description: 'Retiens les 4 briques complémentaires qui permettent d\'intégrer les renouvelables variables dans les réseaux électriques.',
      tip: 'Imagine un réseau électrique comme une baignoire : les BATTERIES (lithium) bouchent le trou à court terme, le POMPAGE remonte l\'eau usée (STEP), l\'HYDROGÈNE la stocke en bouteille pour l\'hiver, et les VOITURES électriques la redistribuent en V2G.',
      items: [
        'Batteries lithium-ion — stockage de court terme (heures) — coût -97 % depuis 1991',
        'STEP (pompage-turbinage) — stockage à l\'échelle journalière/hebdomadaire — 94 % du stockage mondial',
        'Hydrogène vert — stockage saisonnier et transport longue distance — en pleine baisse de coût',
        'V2G et demand response — flexibilité de la demande et batteries mobiles pour lisser les pics'
      ]
    }
  ]
},

'botanique-zoologie/ethologie/cognition-animale': {
  title: 'La cognition animale',
  intro: 'Ce cours est riche en espèces, expériences fondatrices et concepts. Les flashcards, associations et la chaîne logique sont les meilleures méthodes pour tout retenir.',
  activities: [
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'La convergence cognitive : 3 lignées indépendantes',
      description: 'Retiens les 3 groupes qui ont développé des capacités cognitives complexes indépendamment, par convergence évolutive.',
      tip: 'Imagine trois chemins qui montent vers le même sommet : les PRIMATES grimpent par la forêt, les CORVIDÉS volent directement, les CÉPHALOPODES nagent par les abysses — trois routes, un même sommet : l\'intelligence.',
      items: [
        'Primates (grands singes) — utilisation d\'outils, théorie de l\'esprit, 40+ traditions culturelles',
        'Corvidés (corbeaux, geais) — fabrication d\'outils composites, mémoire épisodique, planification future',
        'Céphalopodes (pieuvres) — 500 millions de neurones, apprentissage par observation, durée de vie 1-2 ans'
      ]
    },
    {
      type: 'dates', icon: '🗓️', method: 'Dates historiques',
      title: 'Dates clés de la cognition animale',
      description: 'Les découvertes qui ont transformé notre regard sur l\'intelligence animale.',
      items: [
        { event: 'Jane Goodall documente l\'utilisation d\'outils par les chimpanzés', date: '1960' },
        { event: 'Test du miroir de Gallup (conscience de soi)', date: '1970' },
        { event: 'Règle de Morgan (C. Lloyd Morgan)', date: '1894' },
        { event: 'Cambridge Declaration on Consciousness', date: '2012' },
        { event: 'Thomas Nagel — "What is it like to be a bat?" (conscience subjective)', date: '1974' },
        { event: 'Rats libèrent un congénère piégé (empathie rongeurs)', date: '2007' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Les concepts clés de la cognition animale',
      description: 'Les termes fondamentaux à maîtriser.',
      items: [
        { term: 'Convergence évolutive', def: 'Apparition indépendante de traits similaires dans des lignées non apparentées (ex. intelligence chez primates, corvidés, céphalopodes)' },
        { term: 'Théorie de l\'esprit', def: 'Capacité d\'attribuer des états mentaux (croyances, désirs, intentions) à d\'autres individus' },
        { term: 'Test du miroir (mark test)', def: 'Évaluation de la conscience de soi : un animal remarque-t-il une marque sur son propre corps grâce au reflet ?' },
        { term: 'Mémoire épisodique', def: 'Mémoire du "quoi, où, quand" — rappel d\'événements spécifiques vécus dans le temps et l\'espace' },
        { term: 'Planification future', def: 'Capacité à préparer une action pour un besoin futur anticipé, indépendamment de l\'état actuel' },
        { term: 'Culture animale', def: 'Comportements appris socialement, variants entre populations de même espèce et transmis de génération en génération' },
        { term: 'Règle de Morgan', def: 'Principe méthodologique : ne pas invoquer une faculté mentale supérieure si une explication plus simple suffit (1894)' },
        { term: 'Biais anthropomorphique', def: 'Erreur consistant à attribuer des états mentaux humains aux animaux sans justification scientifique' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Espèces et leurs capacités cognitives remarquables',
      description: 'Associe chaque espèce à sa capacité cognitive signature.',
      pairs: [
        { left: 'Corbeau calédonien (Corvus moneduloides)', right: 'Fabrique des crochets en brindilles, résout des problèmes à 8 étapes séquentielles' },
        { left: 'Geai buissonnier (Aphelocoma californica)', right: 'Recache sa nourriture en secret s\'il a été observé — théorie de l\'esprit élémentaire' },
        { left: 'Dauphin du Shark Bay', right: 'Porte une éponge marine sur le rostre pour fouiller le fond — transmis culturellement de mère en fille' },
        { left: 'Loutre de mer (Enhydra lutris)', right: 'Utilise des pierres comme enclumes pour casser les coquillages, stocke l\'outil sous l\'aisselle' },
        { left: 'Orang-outan', right: 'Garde un outil pour une tâche à résoudre le lendemain — planification différée' },
        { left: 'Pie bavarde', right: 'Réussit le test du miroir — seul oiseau non-corvide confirmé' },
        { left: 'Pieuvre', right: '500 millions de neurones, 2/3 dans les bras ; utilise des coquilles de noix de coco comme abris mobiles' },
        { left: 'Suricates', right: 'Enseignent à leurs jeunes à manipuler des scorpions, progressivement plus dangereux' }
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Expériences et faits fondamentaux',
      description: 'Les expériences et découvertes essentielles à connaître.',
      cards: [
        { front: 'Qu\'a découvert Jane Goodall en 1960 qui a forcé Louis Leakey à redéfinir "l\'homme" ?', back: 'Les chimpanzés fabriquent des "pêches à termites" (baguettes façonnées pour extraire les termites) — l\'utilisation d\'outils n\'est pas un propre de l\'Homme.' },
        { front: 'Quels animaux réussissent le test du miroir de Gallup ?', back: 'Les grands singes, les éléphants, les dauphins, les pies bavardes et possiblement les raies Manta. Les chiens échouent malgré leur haute sociabilité.' },
        { front: 'Combien de traditions culturelles distinctes a-t-on identifiées chez les chimpanzés ?', back: 'Plus de 40 traditions culturelles (techniques de cassage de noix, pêche aux termites, danses de la pluie), variant entre communautés voisines.' },
        { front: 'Combien de neurones possède une pieuvre et comment sont-ils répartis ?', back: 'Environ 500 millions de neurones — dont les deux tiers dans ses huit bras (mini-cerveaux), et un tiers dans le cerveau central.' },
        { front: 'Qu\'est-ce que la "règle de Morgan" (1894) et quel est son danger si trop rigide ?', back: 'Ne pas invoquer une faculté mentale supérieure si une explication simple suffit. Appliquée trop rigidement, elle conduit à sous-estimer les capacités cognitives réelles.' },
        { front: 'Comment les geais buissonniers démontrent-ils une théorie de l\'esprit ?', back: 'Observés en train de cacher de la nourriture, ils reviennent secrètement déplacer leurs réserves — ils projettent leur expérience de voleur sur l\'observateur.' },
        { front: 'Quelle est la durée de vie d\'une pieuvre, et pourquoi rend-elle sa cognition remarquable ?', back: 'Seulement 1 à 2 ans — une intelligence complexe développée sans transmission culturelle multigénérationnelle, avec un plan cérébral radicalement différent des vertébrés.' },
        { front: 'Qu\'est-ce que l\'apprentissage par "émulation" vs "imitation" ?', back: 'Imitation : reproduire exactement l\'action observée. Émulation : atteindre le même résultat par un moyen propre. Les deux sont des formes d\'apprentissage social.' },
        { front: 'Quelle découverte de 2007 sur les rats a élargi la notion d\'empathie ?', back: 'Des rats libèrent spontanément un congénère piégé et lui partagent de la nourriture, sans récompense directe — comportement analogue à l\'empathie.' },
        { front: 'Que signifie la Cambridge Declaration on Consciousness (2012) ?', back: 'Les mammifères, les oiseaux et de nombreux autres animaux possèdent les substrats neurologiques nécessaires à la conscience — affirmation scientifique officielle.' }
      ]
    },
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les nombres de la cognition animale',
      description: 'Les chiffres et valeurs essentiels à retenir.',
      items: [
        { label: 'Neurones d\'une pieuvre', value: '500 millions', hint: '2/3 dans les bras, 1/3 dans le cerveau central' },
        { label: 'Traditions culturelles des chimpanzés', value: '40+', hint: 'Variants entre communautés voisines de même espèce' },
        { label: 'Étapes séquentielles résolues par les corbeaux calédoniens', value: 'jusqu\'à 8', hint: 'Niveau rival des grands singes' },
        { label: 'Durée de vie d\'une pieuvre', value: '1 à 2 ans', hint: 'Intelligence complexe sans héritage culturel multigénérationnel' },
        { label: 'Année du test du miroir de Gallup', value: '1970', hint: 'Première mesure scientifique de la conscience de soi animale' },
        { label: 'Année de la découverte de Goodall', value: '1960', hint: 'Chimpanzés fabriquant des outils — révolution en primatologie' }
      ]
    },
    {
      type: 'order', icon: '📋', method: 'Séquence logique',
      title: 'Niveaux de complexité cognitive animale',
      description: 'Replace ces capacités cognitives dans l\'ordre croissant de sophistication.',
      items: [
        { label: 'Apprentissage par renforcement', detail: 'Association stimulus-réponse par essais et erreurs — présent chez la plupart des animaux' },
        { label: 'Apprentissage social (émulation)', detail: 'Apprendre en observant un congénère atteindre un résultat — sans copie exacte du geste' },
        { label: 'Imitation vraie', detail: 'Copier précisément les actions d\'un congénère — plus rare, requiert une représentation de l\'autre' },
        { label: 'Utilisation d\'outils', detail: 'Employer un objet externe pour modifier l\'environnement — corbeaux, chimpanzés, loutres, dauphins' },
        { label: 'Fabrication et modification d\'outils', detail: 'Transformer une matière pour créer un outil adapté — chimpanzés, corbeaux calédoniens' },
        { label: 'Planification future et mémoire épisodique', detail: 'Agir selon un besoin futur anticipé, se souvenir du "quoi, où, quand" — geais, grands singes, corvidés' },
        { label: 'Théorie de l\'esprit', detail: 'Attribuer des états mentaux à autrui, anticiper ses croyances et intentions — geais buissonniers, chimpanzés' }
      ]
    }
  ]
},

'neurosciences/neurochimie/serotonine': {
  title: 'La sérotonine',
  intro: 'Ce cours est dense en mécanismes moléculaires, chiffres, dates de découverte et liens entre structures et fonctions. Flashcards et associations sont particulièrement efficaces.',
  activities: [
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'La synthèse de la sérotonine : 4 étapes',
      description: 'Retiens la chaîne de biosynthèse de la sérotonine, du repas au neurotransmetteur.',
      tip: 'Imagine un chemin : tu MANGES de la DINDE (tryptophane alimentaire) → l\'enzyme TPH la TRANSFORME en 5-HTP → la décarboxylase coupe le bout (décarboxylation) → la SÉROTONINE (5-HT) est prête dans le raphé.',
      items: [
        'Tryptophane alimentaire — acide aminé essentiel (dinde, noix, banane)',
        'Tryptophane hydroxylase (TPH) — enzyme limitante ; TPH1 dans l\'intestin, TPH2 dans le cerveau',
        '5-hydroxytryptophane (5-HTP) — intermédiaire',
        'Sérotonine (5-HT) — produite par la décarboxylase des acides aminés aromatiques'
      ]
    },
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les chiffres de la sérotonine',
      description: 'Les valeurs essentielles à mémoriser.',
      items: [
        { label: 'Sérotonine corporelle dans l\'intestin', value: '95 %', hint: 'Produite par les cellules entérochromaffines — ne traverse pas la barrière hémato-encéphalique' },
        { label: 'Sérotonine corporelle dans le cerveau', value: '5 %', hint: 'Mais exerce une influence modulatrice majeure sur tout le SNC' },
        { label: 'Neurones sérotoninergiques dans les noyaux du raphé', value: '200 000 à 300 000', hint: 'Projettent vers la quasi-totalité du cerveau et de la moelle épinière' },
        { label: 'Délai d\'action des ISRS', value: '2 à 4 semaines', hint: 'Malgré l\'augmentation immédiate de sérotonine synaptique — mécanismes adaptatifs en jeu' },
        { label: 'Rémissions après thérapie assistée par psilocybine', value: '50 à 70 %', hint: 'Après seulement 1-2 sessions supervisées (essais Imperial College, Johns Hopkins, NYU)' },
        { label: 'Augmentation des épines dendritiques après psilocybine (souris)', value: 'dans les 24h', hint: 'Effet persistant 1 mois — "plastogène" sérotoninergique' }
      ]
    },
    {
      type: 'dates', icon: '🗓️', method: 'Dates historiques',
      title: 'Dates clés de l\'histoire de la sérotonine',
      description: 'Les découvertes qui ont façonné notre compréhension de la sérotonine.',
      items: [
        { event: 'Albert Hofmann synthétise le LSD', date: '1938' },
        { event: 'Albert Hofmann découvre les effets psychédéliques du LSD', date: '1943' },
        { event: 'Betty Twarog et Irvine Page découvrent la sérotonine cérébrale', date: '1953' },
        { event: 'Alec Coppen formule l\'hypothèse sérotoninergique de la dépression', date: '1967' },
        { event: 'Lancement de la fluoxétine (Prozac)', date: '1987' },
        { event: 'Méta-analyse de Moncrieff remettant en question l\'hypothèse sérotoninergique', date: '2022' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Le vocabulaire de la neurochimie sérotoninergique',
      description: 'Les termes fondamentaux à maîtriser.',
      items: [
        { term: 'ISRS', def: 'Inhibiteur Sélectif de la Recapture de la Sérotonine — bloque le transporteur SERT, augmentant la 5-HT dans la fente synaptique' },
        { term: 'SERT', def: 'Transporteur de la sérotonine — protéine qui recapture la 5-HT dans le neurone présynaptique' },
        { term: 'Noyaux du raphé', def: 'Série de noyaux médians du tronc cérébral (raphé dorsal, médian, magnus) contenant les neurones sérotoninergiques' },
        { term: '5-HT2A', def: 'Récepteur sérotoninergique principal des psychédéliques classiques (LSD, psilocybine, DMT) dans le cortex' },
        { term: 'Axe intestin-cerveau', def: 'Voie de communication bidirectionnelle via le nerf vague entre microbiote intestinal et cerveau, modulée par la sérotonine' },
        { term: 'BDNF', def: 'Brain-Derived Neurotrophic Factor — facteur de croissance neuronale augmenté par les ISRS, lié à la neuroplasticité' },
        { term: 'Modèle REBUS', def: 'Robin Carhart-Harris : les psychédéliques "relaxent" les modèles prédictifs rigides du cerveau (Relaxed Beliefs Under Psychedelics)' },
        { term: '5-HIAA', def: 'Acide 5-hydroxyindolacétique — métabolite de la sérotonine ; taux plus élevé dans le LCR des mâles dominants chez les singes vervet' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Récepteurs sérotoninergiques et leurs fonctions',
      description: 'Associe chaque récepteur ou structure à son rôle physiologique.',
      pairs: [
        { left: '5-HT1A (hippocampe)', right: 'Régulation de l\'anxiété et neurogenèse' },
        { left: '5-HT2A (cortex préfrontal)', right: 'Cible des psychédéliques classiques — altérations de la conscience' },
        { left: '5-HT2C (hypothalamus)', right: 'Contrôle de l\'appétit (cible des anciens médicaments anti-obésité)' },
        { left: '5-HT3 (tronc cérébral et intestin)', right: 'Contrôle de la nausée — antagonistes (ondansétron) : antiémétiques en chimiothérapie' },
        { left: 'Raphé dorsal', right: 'Innerve cortex, striatum, amygdale et hippocampe' },
        { left: 'Raphé magnus', right: 'Projections descendantes vers la corne dorsale médullaire — module la douleur' },
        { left: 'Cellules entérochromaffines', right: 'Produisent 95 % de la sérotonine corporelle dans l\'intestin — régulent le péristaltisme' },
        { left: 'Glande pinéale', right: 'Convertit la sérotonine en mélatonine la nuit — régulation des rythmes circadiens' }
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Mécanismes et faits fondamentaux',
      description: 'Les questions essentielles sur la sérotonine.',
      cards: [
        { front: 'Pourquoi les ISRS mettent-ils 2 à 4 semaines à agir malgré une augmentation immédiate de sérotonine ?', back: 'L\'effet thérapeutique passe par des adaptations lentes : désensibilisation des autorécepteurs 5-HT1A, augmentation de la neurogenèse hippocampique et remodelage synaptique progressif.' },
        { front: 'Qu\'est-ce que l\'hypothèse sérotoninergique de la dépression et qui l\'a formulée ?', back: 'Alec Coppen (1967) : un déficit de sérotonine contribue à la dépression. Remise en question par la méta-analyse de Moncrieff et al. (2022) qui note l\'absence de preuves directes.' },
        { front: 'Pourquoi l\'augmentation du tryptophane alimentaire améliore-t-elle peu l\'humeur ?', back: 'Bien que le tryptophane soit précurseur de la sérotonine, la barrière hémato-encéphalique filtre sa disponibilité cérébrale — les effets comportementaux sont modestes.' },
        { front: 'Comment les psychédéliques classiques agissent-ils sur le cerveau selon le modèle REBUS ?', back: 'En agonisant les récepteurs 5-HT2A, ils "relaxent" les croyances prédictives rigides (top-down), désorganisent la hiérarchie corticale et permettent une réorganisation cognitive thérapeutique.' },
        { front: 'Que montre l\'appauvrissement expérimental en tryptophane chez des personnes saines ?', back: 'Augmentation de l\'agressivité et des comportements impulsifs — mesurée par des jeux économiques (rejet plus fréquent d\'offres injustes dans le jeu de l\'ultimatum).' },
        { front: 'Quel statut la FDA a-t-elle accordé à la psilocybine ?', back: '"Breakthrough Therapy" pour la dépression résistante — accélérant son développement clinique (essais Imperial College, Johns Hopkins, NYU).' },
        { front: 'Quel est le lien entre sérotonine et mélatonine ?', back: 'La sérotonine est le précurseur de la mélatonine, synthétisée dans la glande pinéale la nuit. Cette relation explique pourquoi certains ISRS perturbent le sommeil.' },
        { front: 'Quelle est l\'activité des neurones sérotoninergiques du raphé selon les états de conscience ?', back: 'Maximale pendant l\'éveil, réduite pendant le sommeil lent, quasi nulle pendant le sommeil paradoxal (REM).' },
        { front: 'Quel est le paradoxe des souris knock-out pour le transporteur SERT ?', back: 'Ces souris (équivalent d\'un traitement chronique aux ISRS) montrent une anxiété accrue — illustrant que les effets à long terme de l\'augmentation de 5-HT sont complexes et dépendants du développement.' },
        { front: 'Pourquoi la sérotonine intestinale n\'agit-elle pas directement sur l\'humeur ?', back: 'Elle ne traverse pas la barrière hémato-encéphalique. L\'influence sur l\'humeur passe indirectement via l\'axe intestin-cerveau et le nerf vague.' }
      ]
    }
  ]
},

'droit/international/humanitaire': {
  title: 'Droit humanitaire',
  intro: 'Ce cours est riche en conventions, dates clés, principes fondamentaux et acteurs institutionnels. Idéal pour les associations, les flashcards et la chronologie.',
  activities: [
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'Les 4 principes fondamentaux du DIH',
      description: 'Retiens dans l\'ordre les 4 principes coutumiers sur lesquels repose le droit international humanitaire.',
      tip: 'Imagine un soldat qui DISTINGUE les civils des combattants, puis PÈSE ses attaques (proportionnalité), PRÉCAUTE ses tirs (précaution), et évite les SOUFFRANCES inutiles (interdiction des maux superflus). D-P-P-S.',
      items: [
        'Principe de distinction — séparer civils/combattants et biens civils/objectifs militaires',
        'Principe de proportionnalité — pertes civiles incidentes non excessives vs. avantage militaire',
        'Principe de précaution — mesures pour minimiser les pertes civiles (choix des armes, avertissements)',
        'Interdiction des maux superflus — méthodes causant des souffrances inutiles interdites'
      ]
    },
    {
      type: 'order', icon: '📅', method: 'Chronologie',
      title: 'La construction du DIH : étapes clés',
      description: 'Replace les grandes étapes dans l\'ordre chronologique.',
      items: [
        { label: 'Bataille de Solferino — Henry Dunant', detail: '1859 — Dunant organise les soins aux blessés de toutes les parties' },
        { label: '« Un souvenir de Solferino »', detail: '1862 — livre de Dunant qui inspire la création du CICR' },
        { label: 'Création du CICR et 1ère Convention de Genève', detail: '1863-1864 — naissance du DIH moderne' },
        { label: 'Conventions de Genève (4 textes)', detail: '1949 — 196 États parties, universellement ratifiées' },
        { label: 'Protocoles additionnels I et II', detail: '1977 — conflits internationaux et non internationaux' },
        { label: 'Convention sur les armes chimiques', detail: '1993 — 193 États parties' },
        { label: 'Traité d\'Ottawa (mines antipersonnel)', detail: '1997 — interdiction des mines antipersonnel' },
        { label: 'Convention d\'Oslo (bombes à sous-munitions)', detail: '2008 — interdiction des sous-munitions' }
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Concepts et institutions du DIH',
      description: 'Les notions essentielles à maîtriser.',
      cards: [
        { front: 'Quelle est la différence entre jus ad bellum et jus in bello ?', back: 'Jus ad bellum : droit de faire la guerre (ONU). Jus in bello : règles sur la conduite de la guerre — c\'est le DIH, qui s\'applique indépendamment de la légitimité du conflit.' },
        { front: 'Que sont les deux grandes branches du DIH ?', back: 'Le droit de Genève (protection des victimes) et le droit de La Haye (limitation des méthodes et moyens de combat), largement fusionnés dans les Protocoles de 1977.' },
        { front: 'Qu\'est-ce que l\'article 3 commun aux Conventions de Genève ?', back: 'La « mini-convention » applicable aux conflits non internationaux (guerres civiles) : interdit exécutions sommaires, torture, traitements humiliants ; exige un tribunal régulier.' },
        { front: 'Que doit divulguer un prisonnier de guerre selon la CG III ?', back: 'Uniquement son nom, grade, date de naissance et numéro de matricule. Il ne peut être contraint à donner plus.' },
        { front: 'Quel est le rôle du CICR ?', back: 'Gardien du DIH : visite les prisonniers et détenus civils, organise les secours, recherche les disparus, sensibilise les forces armées. Mandat conféré par les Conventions de Genève.' },
        { front: 'Que protège la Convention de Genève IV ?', back: 'Les personnes civiles en temps de guerre : interdiction des déportations, prises d\'otages, punitions collectives et traitements inhumains.' },
        { front: 'Quelle juridiction est compétente pour juger les crimes de guerre ?', back: 'Les tribunaux nationaux et la Cour pénale internationale (CPI).' },
        { front: 'Qu\'est-ce que le Protocole additionnel I (1977) apporte ?', back: 'Renforce la protection des civils dans les conflits internationaux (distinction, proportionnalité, précaution) et reconnaît les mouvements de libération nationale comme combattants.' },
        { front: 'Quel prix Henry Dunant a-t-il reçu et quand ?', back: 'Le tout premier prix Nobel de la paix, en 1901.' },
        { front: 'Qu\'interdit la Convention sur les armes chimiques (1993) ?', back: 'La mise au point, la production, le stockage et l\'emploi des armes chimiques. 193 États parties.' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Le vocabulaire du DIH',
      description: 'Les termes techniques et sigles à connaître.',
      items: [
        { term: 'DIH', def: 'Droit international humanitaire — droit de la guerre, règles limitant les effets des conflits armés pour raisons humanitaires' },
        { term: 'Jus in bello', def: 'Le droit applicable pendant la guerre (comment on se bat), distinct du jus ad bellum (pourquoi on se bat)' },
        { term: 'CICR', def: 'Comité international de la Croix-Rouge — gardien du DIH, basé à Genève, neutre et impartial' },
        { term: 'CPI', def: 'Cour pénale internationale — compétente pour juger les crimes de guerre, crimes contre l\'humanité, génocide' },
        { term: 'POW', def: 'Prisonnier de guerre (Prisoner Of War) — protégé par la Convention de Genève III' },
        { term: 'Droit de Genève', def: 'Branche du DIH protégeant les victimes : blessés, prisonniers, civils' },
        { term: 'Droit de La Haye', def: 'Branche du DIH limitant les méthodes et moyens de combat : armes interdites, conduite des hostilités' },
        { term: 'Armes à laser aveuglantes', def: 'Armes interdites par le DIH contemporain car causant des maux superflus (cécité permanente)' },
        { term: 'Traité d\'Ottawa', def: 'Convention de 1997 interdisant les mines antipersonnel' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Conventions et leur objet',
      description: 'Associe chaque Convention de Genève à ce qu\'elle protège.',
      pairs: [
        { left: 'Convention de Genève I', right: 'Blessés et malades dans les forces armées en campagne' },
        { left: 'Convention de Genève II', right: 'Blessés, malades et naufragés des forces armées sur mer' },
        { left: 'Convention de Genève III', right: 'Traitement des prisonniers de guerre (POW)' },
        { left: 'Convention de Genève IV', right: 'Protection des personnes civiles en temps de guerre' },
        { left: 'Protocole additionnel I (1977)', right: 'Conflits armés internationaux — protection renforcée des civils' },
        { left: 'Protocole additionnel II (1977)', right: 'Conflits armés non internationaux — complément à l\'article 3 commun' },
        { left: 'Convention d\'Oslo (2008)', right: 'Interdiction des bombes à sous-munitions' },
        { left: 'Henry Dunant', right: 'Fondateur du CICR, premier prix Nobel de la paix (1901)' }
      ]
    },
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les chiffres du DIH',
      description: 'Les données quantitatives essentielles à mémoriser.',
      items: [
        { label: 'États parties aux Conventions de Genève', value: '196', hint: 'Universellement ratifiées — toutes les nations du monde' },
        { label: 'États parties à la Convention sur les armes chimiques', value: '193', hint: 'Adoptée en 1993' },
        { label: 'Nombre de Conventions de Genève', value: '4', hint: 'Toutes datent de 1949' },
        { label: 'Nombre de Protocoles additionnels (1977)', value: '2', hint: 'PA I (conflits internationaux) et PA II (conflits non internationaux)' },
        { label: 'Année de la bataille de Solferino', value: '1859', hint: 'Déclenche la prise de conscience d\'Henry Dunant' },
        { label: 'Année de création du CICR', value: '1863', hint: 'Un an après la publication d\'« Un souvenir de Solferino »' },
        { label: 'Année de la 1ère Convention de Genève', value: '1864', hint: 'Acte de naissance du DIH moderne' }
      ]
    }
  ]
},

'botanique-zoologie/botanique/anatomie-vegetale': {
  title: 'L\'anatomie végétale',
  intro: 'Ce cours est dense en vocabulaire spécialisé, mécanismes physiologiques et adaptations remarquables. Parfait pour les flashcards, associations et le vocabulaire technique.',
  activities: [
    {
      type: 'chain', icon: '🔗', method: 'Méthode des liens',
      title: 'Les 3 systèmes de tissus végétaux',
      description: 'Retiens les trois grands systèmes tissulaires des plantes vasculaires et leur rôle.',
      tip: 'Imagine une plante comme une maison : la PEAU (tissu dermique) protège, les MURS ET MEUBLES (tissu fondamental) structurent et stockent, les TUYAUX (tissu vasculaire) transportent tout ce qui circule.',
      items: [
        'Tissu dermique (épiderme, périderme) — couverture protectrice externe',
        'Tissu fondamental (parenchyme, collenchyme, sclérenchyme) — stockage, soutien, photosynthèse',
        'Tissu vasculaire (xylème et phloème) — transport de l\'eau, minéraux et sucres'
      ]
    },
    {
      type: 'flashcards', icon: '🃏', method: 'Flashcards',
      title: 'Mécanismes et structures végétaux',
      description: 'Les concepts essentiels à maîtriser.',
      cards: [
        { front: 'Comment monte la sève brute dans le xylème ?', back: 'Théorie de la cohésion-tension : l\'évapotranspiration foliaire crée une tension qui tire la colonne d\'eau, maintenue par la cohésion entre molécules d\'eau. Peut dépasser 100 mètres.' },
        { front: 'Quelle est la différence entre xylème et phloème ?', back: 'Xylème : sève brute (eau + minéraux), des racines vers les feuilles, cellules mortes lignifiées. Phloème : sève élaborée (saccharose, acides aminés), des feuilles vers les organes puits, cellules vivantes (tubes criblés).' },
        { front: 'Qu\'est-ce qu\'un méristème ?', back: 'Zone de division cellulaire active. Apicaux (extrémités des tiges/racines) → croissance en longueur. Latéraux (cambium, phellogène) → croissance en épaisseur chez les plantes ligneuses.' },
        { front: 'Qu\'est-ce que la dendrochronologie ?', back: 'L\'analyse des cernes annuels de xylème secondaire (bois) pour reconstituer le climat passé et dater des événements historiques.' },
        { front: 'Où se trouvent les stomates et quel est leur rôle ?', back: 'Principalement sur l\'épiderme inférieur des feuilles. Pores bordés de deux cellules de garde régulant les échanges de CO₂, O₂ et vapeur d\'eau.' },
        { front: 'Quel est le compromis vital de la régulation stomatique ?', back: 'Ouverture des stomates = entrée de CO₂ (photosynthèse) mais perte d\'eau (transpiration). Une plante de maïs transpire jusqu\'à 200 L d\'eau pour 1 kg de matière sèche.' },
        { front: 'Qu\'est-ce que l\'effet lotus ?', back: 'Propriété superhydrophobe des feuilles de lotus : microscopiques cires épiculaires nanostructurées font perler les gouttes d\'eau, emportant les salissures. Modèle pour surfaces autonettoyantes (biomimétisme).' },
        { front: 'Qu\'est-ce que l\'aérenchyme ?', back: 'Tissu spongieux des plantes aquatiques rempli de lacunes gazeuses, permettant la diffusion de l\'oxygène des parties aériennes vers les racines immergées en milieu anoxique.' },
        { front: 'Comment le phloème transporte-t-il la sève élaborée ?', back: 'Selon le modèle de Münch : gradient de pression osmotique entre organes sources (feuilles, haute pression) et organes puits (racines, fruits, basse pression).' },
        { front: 'Qu\'a montré l\'expérience de Gagliano (2014) sur Mimosa pudica ?', back: 'La mimosa peut apprendre par habituation : après des chocs répétés sans danger, elle cesse de refermer ses feuilles. Une forme de mémoire sans neurones.' }
      ]
    },
    {
      type: 'vocab', icon: '📖', method: 'Vocabulaire',
      title: 'Le vocabulaire de l\'anatomie végétale',
      description: 'Les termes techniques à maîtriser absolument.',
      items: [
        { term: 'Parenchyme', def: 'Tissu le plus répandu, cellules vivantes à paroi mince ; assure photosynthèse (chlorenchyme), stockage d\'amidon et cicatrisation' },
        { term: 'Collenchyme', def: 'Tissu de soutien aux parois épaissies inégalement, confère une résistance flexible aux organes en croissance' },
        { term: 'Sclérenchyme', def: 'Tissu de soutien rigide et permanent aux parois lignifiées (fibres et sclérites)' },
        { term: 'Méristème apical', def: 'Zone de division aux extrémités des tiges et racines, responsable de la croissance en longueur (croissance primaire)' },
        { term: 'Cambium vasculaire', def: 'Méristème latéral produisant xylème secondaire (bois) vers l\'intérieur et phloème secondaire (liber) vers l\'extérieur' },
        { term: 'Tubes criblés', def: 'Éléments conducteurs du phloème : cellules vivantes mais anucléées, associées à des cellules compagnes' },
        { term: 'Trachéides', def: 'Éléments conducteurs du xylème, cellules mortes aux parois lignifiées formant des tubes creux' },
        { term: 'Mésophylle', def: 'Tissu photosynthétique de la feuille : parenchyme palissadique (riche en chloroplastes) + parenchyme lacuneux (espaces pour diffusion des gaz)' },
        { term: 'Stomate', def: 'Pore épidermique bordé de deux cellules de garde régulant les échanges gazeux et la transpiration' },
        { term: 'Xérophyte', def: 'Plante adaptée aux milieux secs (ex. cactus, agaves) avec adaptations anatomiques anti-dessèchement' },
        { term: 'CAM', def: 'Crassulacean Acid Metabolism — stomates fermés le jour, ouverts la nuit pour capter le CO₂ sans perte d\'eau (Crassulacées, agaves, aloès)' }
      ]
    },
    {
      type: 'associations', icon: '🔀', method: 'Associations',
      title: 'Tissus et fonctions',
      description: 'Associe chaque tissu ou organe à sa fonction principale.',
      pairs: [
        { left: 'Xylème', right: 'Transport de la sève brute (eau + minéraux) des racines vers les feuilles' },
        { left: 'Phloème', right: 'Transport de la sève élaborée (saccharose) des feuilles vers les organes puits' },
        { left: 'Méristème apical', right: 'Croissance en longueur (primaire) aux extrémités' },
        { left: 'Cambium vasculaire', right: 'Croissance en épaisseur (secondaire) — produit le bois et le liber' },
        { left: 'Parenchyme palissadique', right: 'Photosynthèse — cellules allongées riches en chloroplastes sous l\'épiderme supérieur' },
        { left: 'Parenchyme lacuneux', right: 'Diffusion des gaz — cellules irrégulières séparées par de vastes espaces' },
        { left: 'Aérenchyme', right: 'Plantes aquatiques — diffuse O₂ vers les racines en milieu anoxique' },
        { left: 'Cernes de croissance', right: 'Xylème secondaire accumulé annuellement — base de la dendrochronologie' }
      ]
    },
    {
      type: 'numbers', icon: '📏', method: 'Chiffres clés',
      title: 'Les chiffres de la botanique',
      description: 'Les données quantitatives remarquables du cours.',
      items: [
        { label: 'Hauteur de montée de la sève dans le xylème', value: '> 100 m', hint: 'Grâce à la théorie de la cohésion-tension générée par la transpiration foliaire' },
        { label: 'Eau transpirée par un plant de maïs (par kg de MS)', value: '200 litres', hint: 'Compromis coûteux entre photosynthèse et conservation de l\'eau' },
        { label: 'Vitesse de propagation des signaux électriques végétaux', value: '0,5 à 3 cm/s', hint: 'Mis en évidence en 2022 lors de blessures — similaires aux potentiels d\'action nerveux' },
        { label: 'Hauteur d\'un arbre pour illustrer le système vasculaire', value: '30 m', hint: 'Exemple du cours : l\'eau monte des racines à la cime grâce au xylème' }
      ]
    },
    {
      type: 'order', icon: '📅', method: 'Séquence logique',
      title: 'La montée de la sève brute : étapes',
      description: 'Replace dans l\'ordre logique les étapes du mécanisme de montée de la sève brute.',
      items: [
        { label: 'Absorption de l\'eau par les racines', detail: 'Eau et sels minéraux absorbés depuis le sol via les poils racinaires' },
        { label: 'Entrée dans le xylème', detail: 'La sève brute entre dans les trachéides et éléments de vaisseau (cellules mortes lignifiées)' },
        { label: 'Évapotranspiration foliaire', detail: 'Les stomates s\'ouvrent, l\'eau s\'évapore depuis les feuilles' },
        { label: 'Création d\'une tension (cohésion-tension)', detail: 'L\'évaporation crée une dépression tirant la colonne d\'eau vers le haut' },
        { label: 'Montée de la colonne d\'eau', detail: 'La cohésion entre molécules d\'eau maintient la colonne continue sur plus de 100 m' }
      ]
    }
  ]
},

    // ── Course: Rome antique ──
    'histoire/antiquite/rome': {
      title: 'Rome antique',
      intro: 'Mille ans d\'histoire à travers trois grandes périodes, des dates clés, des personnages décisifs et un héritage omniprésent. Voici comment tout retenir efficacement.',
      activities: [
        {
          type: 'order', icon: '\u{1F4C5}', method: 'Chronologie',
          title: 'Les 3 grandes périodes de Rome',
          description: 'Replace les grandes phases de l\'histoire romaine dans le bon ordre.',
          items: [
            { label: 'La Royauté', detail: '753-509 av. J.-C. — fondation légendaire par Romulus, rois étrusques' },
            { label: 'La République', detail: '509-27 av. J.-C. — Sénat, consuls, conquête méditerranéenne' },
            { label: 'La Pax Romana', detail: '27 av. J.-C. - 180 apr. J.-C. — apogée impériale, 60 millions d\'habitants' },
            { label: 'La crise et les invasions', detail: '235-395 — instabilité politique, pression barbare, division de l\'Empire' },
            { label: 'La chute de l\'Empire d\'Occident', detail: '476 — Odoacre dépose Romulus Augustule, début du Moyen Âge' }
          ]
        },
        {
          type: 'dates', icon: '\u{1F5D3}\uFE0F', method: 'Dates historiques',
          title: 'Les dates clés de Rome',
          description: 'Les événements fondateurs et les tournants de l\'histoire romaine.',
          items: [
            { event: 'Fondation légendaire de Rome par Romulus', date: '753 av. J.-C.' },
            { event: 'Fondation de la République (renversement du dernier roi)', date: '509 av. J.-C.' },
            { event: 'Guerres puniques contre Carthage', date: '264-146 av. J.-C.' },
            { event: 'Défaite de Cannes face à Hannibal (50 000 Romains tués)', date: '216 av. J.-C.' },
            { event: 'Révolte de Spartacus', date: '73-71 av. J.-C.' },
            { event: 'César franchit le Rubicon', date: '49 av. J.-C.' },
            { event: 'Assassinat de Jules César (Ides de Mars)', date: '44 av. J.-C.' },
            { event: 'Bataille d\'Actium — victoire d\'Octave', date: '31 av. J.-C.' },
            { event: 'Octave devient Auguste — début de l\'Empire', date: '27 av. J.-C.' },
            { event: 'Inauguration du Colisée', date: '80 apr. J.-C.' },
            { event: 'Apogée territoriale sous Trajan', date: '117 apr. J.-C.' },
            { event: 'Édit de Milan — liberté de culte chrétien (Constantin)', date: '313' },
            { event: 'Christianisme religion officielle (Théodose)', date: '380' },
            { event: 'Division de l\'Empire (Occident / Orient)', date: '395' },
            { event: 'Chute de l\'Empire romain d\'Occident (Odoacre / Romulus Augustule)', date: '476' }
          ]
        },
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: 'Personnages et événements clés',
          description: 'Les figures et épisodes incontournables de l\'histoire romaine.',
          cards: [
            { front: 'Qui est le premier empereur romain et quand prend-il le pouvoir ?', back: 'Auguste (Octave), en 27 av. J.-C., après sa victoire à Actium. Il inaugure la Pax Romana.' },
            { front: 'Qu\'est-ce que la Pax Romana et combien dure-t-elle ?', back: 'Deux siècles de paix relative (27 av. J.-C. - 180 apr. J.-C.). L\'Empire compte 60 millions d\'habitants, 85 000 km de routes et de nombreux aqueducs.' },
            { front: 'Que signifie « passer le Rubicon » et d\'où vient cette expression ?', back: 'César franchit le Rubicon avec son armée en 49 av. J.-C., défiant le Sénat. L\'expression signifie franchir un point de non-retour.' },
            { front: 'Qui était Hannibal Barca et quelle est son exploit militaire ?', back: 'Général carthaginois (247-183 av. J.-C.) qui traversa les Alpes avec des éléphants de guerre. Il infligea à Rome sa pire défaite à Cannes (216 av. J.-C.) — 50 000 Romains tués en un jour.' },
            { front: 'Qui remporta la bataille de Zama et quelle en fut la conséquence ?', back: 'Scipion l\'Africain vainquit Hannibal à Zama en 202 av. J.-C. Rome triompha et en 146 av. J.-C. détruisit Carthage entièrement.' },
            { front: 'Quelle est la différence entre Constantin et Théodose vis-à-vis du christianisme ?', back: 'Constantin accorda la liberté de culte (édit de Milan, 313). Théodose fit du christianisme la religion officielle de l\'Empire (édit de Thessalonique, 380).' },
            { front: 'Comment les Romains appelaient-ils la Méditerranée et pourquoi ?', back: 'Mare Nostrum (« notre mer »), car après les guerres puniques ils en contrôlaient l\'intégralité du pourtour.' },
            { front: 'Qu\'est-ce que la res publica et qui l\'a inventée ?', back: 'Littéralement « la chose publique » — le concept d\'un pouvoir partagé entre magistrats élus et Sénat, fondé par les Romains en 509 av. J.-C.' },
            { front: 'Combien de temps l\'Empire romain d\'Orient survit-il après la chute de l\'Occident ?', back: 'Près de 1 000 ans — jusqu\'en 1453, date de la prise de Constantinople par les Ottomans.' },
            { front: 'Quel est l\'héritage du droit romain ?', back: 'Le Corpus Juris Civilis de Justinien est la base du droit civil dans la majorité des pays. Le droit romain distingue droit public et droit privé, structure les contrats et la propriété.' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Personnages et leur rôle clé',
          description: 'Associe chaque figure historique romaine à ce qui la définit.',
          pairs: [
            { left: 'Romulus', right: 'Fondateur légendaire de Rome (753 av. J.-C.)' },
            { left: 'Hannibal Barca', right: 'Traverse les Alpes avec des éléphants — défaite de Rome à Cannes' },
            { left: 'Scipion l\'Africain', right: 'Vainqueur d\'Hannibal à Zama (202 av. J.-C.)' },
            { left: 'Jules César', right: 'Conquiert la Gaule, franchit le Rubicon, assassiné le 15 mars 44 av. J.-C.' },
            { left: 'Auguste (Octave)', right: 'Premier empereur romain, inaugure la Pax Romana (27 av. J.-C.)' },
            { left: 'Constantin', right: 'Édit de Milan (313) — liberté de culte pour les chrétiens' },
            { left: 'Théodose', right: 'Fait du christianisme la religion officielle (380) et divise l\'Empire (395)' },
            { left: 'Odoacre', right: 'Chef barbare qui dépose Romulus Augustule en 476 — fin de l\'Empire d\'Occident' }
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'Méthode des liens',
          title: 'Pourquoi Rome est tombée — les 5 causes',
          description: 'Les grandes causes de l\'effondrement de l\'Empire romain d\'Occident, dans un ordre logique.',
          tip: 'Imagine un empire qui DÉBORDE (frontières trop étendues), s\'APPAUVRIT (crises économiques), se DÉCHIRE (guerres civiles), se DIVISE (395) et finit ENVAHI (barbares). Chaque étape aggrave la suivante.',
          items: [
            'Frontières trop étendues — impossible à défendre avec les légions disponibles',
            'Crise économique — inflation, dévaluation monétaire, pénuries',
            'Instabilité politique — 26 empereurs entre 235 et 284 (crise du IIIe siècle)',
            'Division de l\'Empire en 395 — Occident et Orient se séparent définitivement',
            'Invasions barbares — Wisigoths, Vandales, Huns submergent l\'Occident affaibli'
          ]
        },
        {
          type: 'numbers', icon: '\u{1F4CF}', method: 'Chiffres clés',
          title: 'Les grands chiffres de Rome',
          description: 'Les données quantitatives essentielles pour mesurer la grandeur de Rome.',
          items: [
            { label: 'Durée totale de l\'histoire romaine', value: 'Plus de 1 000 ans', hint: '753 av. J.-C. à 476 apr. J.-C. pour l\'Occident' },
            { label: 'Population de l\'Empire à son apogée', value: '~60 millions', hint: 'Pendant la Pax Romana (27 av. J.-C. - 180 apr. J.-C.)' },
            { label: 'Réseau routier romain', value: '85 000 km', hint: 'Reliant tout l\'Empire — base des routes européennes actuelles' },
            { label: 'Romains tués à Cannes en un seul jour', value: '50 000', hint: 'Pire défaite de Rome face à Hannibal (216 av. J.-C.)' },
            { label: 'Aide du plan Marshall (pour comparaison impériale)', value: '13 milliards $', hint: 'Non, ça c\'est la Guerre froide — Rome, c\'est le Colisée inauguré en 80 apr. J.-C.' },
            { label: 'Empereurs en 49 ans (crise du IIIe siècle)', value: '26 empereurs', hint: 'Entre 235 et 284 apr. J.-C. — instabilité totale' },
            { label: 'Survie de l\'Empire d\'Orient après 476', value: '~977 ans', hint: 'Constantinople tombe en 1453 seulement' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Le vocabulaire latin de Rome',
          description: 'Les termes latins et concepts politiques fondamentaux.',
          items: [
            { term: 'Res publica', def: 'La « chose publique » — le régime républicain où le pouvoir est partagé entre le Sénat et les magistrats élus' },
            { term: 'Mare Nostrum', def: '« Notre mer » — nom donné par les Romains à la Méditerranée qu\'ils dominaient entièrement' },
            { term: 'Pax Romana', def: 'Deux siècles de paix relative sous l\'Empire (27 av. J.-C. - 180 apr. J.-C.)' },
            { term: 'Triumvirat', def: 'Alliance de trois hommes politiques partageant le pouvoir (ex. : César, Pompée, Crassus)' },
            { term: 'Légion', def: 'Unité militaire romaine d\'environ 5 000 soldats — armée professionnelle disciplinée, clé de la conquête' },
            { term: 'Corpus Juris Civilis', def: 'Codification du droit romain par Justinien — base du droit civil dans la majorité des pays actuels' },
            { term: 'Calendrier julien', def: 'Calendrier introduit par César en 46 av. J.-C. — ancêtre direct de notre calendrier grégorien' },
            { term: 'Ides de Mars', def: 'Le 15 mars — date de l\'assassinat de Jules César en 44 av. J.-C. par Brutus et les sénateurs' }
          ]
        }
      ]
    },

    // ── Course: Guerre froide ──
    'histoire/contemporaine/guerre-froide': {
      title: 'Guerre froide',
      intro: 'Quarante-quatre ans de tensions entre deux superpuissances, avec des crises majeures, une course aux armements et un effondrement inattendu. Tout ce qu\'il faut retenir, méthode par méthode.',
      activities: [
        {
          type: 'order', icon: '\u{1F4C5}', method: 'Chronologie',
          title: 'Les grandes phases de la guerre froide',
          description: 'Replace les périodes de la guerre froide dans le bon ordre.',
          items: [
            { label: 'Formation des blocs', detail: '1945-1949 — plan Marshall, doctrine Truman, blocus de Berlin, création de l\'OTAN' },
            { label: 'Premières crises armées', detail: '1950-1962 — guerre de Corée, Budapest, mur de Berlin, Cuba' },
            { label: 'La Détente', detail: '1962-1979 — coexistence pacifique, Ostpolitik, accords d\'Helsinki' },
            { label: 'La Nouvelle guerre froide', detail: '1979-1985 — invasion soviétique de l\'Afghanistan, boycotts des JO' },
            { label: 'L\'effondrement du bloc soviétique', detail: '1985-1991 — Gorbatchev, révolutions de 1989, chute du mur, dissolution de l\'URSS' }
          ]
        },
        {
          type: 'dates', icon: '\u{1F5D3}\uFE0F', method: 'Dates historiques',
          title: 'Les dates clés de la guerre froide',
          description: 'Les événements fondateurs et les tournants du conflit.',
          items: [
            { event: 'Doctrine Truman — politique de containment', date: 'Mars 1947' },
            { event: 'Plan Marshall — aide économique américaine (13 milliards $)', date: 'Juin 1947' },
            { event: 'Doctrine Jdanov — réponse soviétique, création du Kominform', date: 'Septembre 1947' },
            { event: 'Blocus de Berlin par Staline — pont aérien américain', date: 'Juin 1948 - mai 1949' },
            { event: 'Création de l\'OTAN', date: '1949' },
            { event: 'Guerre de Corée', date: '1950-1953' },
            { event: 'Conférence de Bandung — mouvement des non-alignés', date: '1955' },
            { event: 'Pacte de Varsovie (réponse à l\'OTAN)', date: '1955' },
            { event: 'Insurrection de Budapest — écrasée par l\'URSS', date: '1956' },
            { event: 'Spoutnik — premier satellite artificiel (URSS)', date: '1957' },
            { event: 'Construction du mur de Berlin', date: '13 août 1961' },
            { event: 'Gagarine — premier homme dans l\'espace (URSS)', date: '1961' },
            { event: 'Crise des missiles de Cuba — 13 jours au bord de la guerre nucléaire', date: 'Octobre 1962' },
            { event: 'Mise en place du téléphone rouge Washington-Moscou', date: '1963' },
            { event: 'Apollo 11 — Armstrong marche sur la Lune (victoire américaine)', date: '1969' },
            { event: 'Accords d\'Helsinki (35 pays, droits de l\'homme)', date: '1975' },
            { event: 'Invasion soviétique de l\'Afghanistan — fin de la Détente', date: 'Décembre 1979' },
            { event: 'Gorbatchev au pouvoir — perestroïka et glasnost', date: '1985' },
            { event: 'Traité FNI — élimination des missiles intermédiaires en Europe', date: '1987' },
            { event: 'Chute du mur de Berlin', date: '9 novembre 1989' },
            { event: 'Réunification de l\'Allemagne', date: '3 octobre 1990' },
            { event: 'Dissolution de l\'URSS — Gorbatchev démissionne', date: '25 décembre 1991' }
          ]
        },
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: 'Crises, doctrines et concepts clés',
          description: 'Les notions et événements incontournables de la guerre froide.',
          cards: [
            { front: 'Qu\'est-ce que le « containment » (endiguement) et qui l\'a théorisé ?', back: 'Politique américaine visant à empêcher l\'expansion du communisme, formulée par le diplomate George Kennan et mise en œuvre par la doctrine Truman (1947).' },
            { front: 'Que signifie MAD et quel est son paradoxe ?', back: 'Mutual Assured Destruction — destruction mutuelle assurée. Paradoxe : posséder assez d\'armes pour se détruire mutuellement rend toute attaque suicidaire, contribuant ainsi à éviter le conflit direct.' },
            { front: 'Quel était l\'enjeu de la crise des missiles de Cuba (octobre 1962) ?', back: 'L\'URSS avait installé des missiles nucléaires à Cuba, à 150 km des côtes américaines. Kennedy imposa un blocus naval. Après 13 jours, Khrouchtchev retira les missiles contre le retrait des missiles américains de Turquie.' },
            { front: 'Qu\'est-ce que la perestroïka et la glasnost ?', back: 'Réformes de Gorbatchev (1985) : perestroïka = restructuration économique vers plus de marché ; glasnost = transparence et liberté d\'expression. Elles ont accéléré l\'effondrement qu\'elles voulaient éviter.' },
            { front: 'Pourquoi la construction du mur de Berlin en 1961 ?', back: 'La RDA a érigé le mur le 13 août 1961 pour stopper l\'exode massif de ses citoyens vers l\'Ouest — 3,5 millions d\'Allemands de l\'Est avaient fui depuis 1949.' },
            { front: 'Quelle victoire symbolique la course spatiale donne-t-elle aux États-Unis ?', back: 'Apollo 11 (1969) — Neil Armstrong et Buzz Aldrin marchent sur la Lune. L\'URSS avait d\'abord dominé (Spoutnik 1957, Gagarine 1961), mais la Lune donna l\'avantage final aux Américains.' },
            { front: 'Qu\'étaient les accords d\'Helsinki (1975) et quel fut leur effet inattendu ?', back: '35 pays signèrent des accords sur la sécurité en Europe et les droits de l\'homme. Les dissidents soviétiques s\'en emparèrent pour revendiquer leurs libertés, alimentant Solidarność et la Charte 77.' },
            { front: 'Qui étaient les dirigeants du mouvement des non-alignés à Bandung (1955) ?', back: 'Nehru (Inde), Nasser (Égypte) et Tito (Yougoslavie) — des pays refusant de choisir entre les deux blocs.' },
            { front: 'Quelle est la différence entre doctrine Truman et doctrine Jdanov ?', back: 'Truman (mars 1947) : soutenir les peuples libres contre le communisme — politique d\'endiguement. Jdanov (sept. 1947) : le monde est divisé entre le camp impérialiste (USA) et le camp anti-impérialiste (URSS). Les deux institutionnalisent la bipolarisation.' },
            { front: 'Quel bilan humain pour les conflits périphériques de la guerre froide ?', back: 'Corée (1950-1953) : ~3 millions de morts. Vietnam (1955-1975) : ~3 millions de morts. La dissuasion nucléaire évita la guerre directe mais pas les conflits sanglants par procuration.' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Acteurs, doctrines et événements',
          description: 'Associe chaque acteur ou concept à sa définition clé.',
          pairs: [
            { left: 'Doctrine Truman', right: 'Endiguement du communisme — soutien aux « peuples libres » (1947)' },
            { left: 'Plan Marshall', right: '13 milliards $ pour reconstruire l\'Europe occidentale et la préserver du communisme' },
            { left: 'Spoutnik', right: 'Premier satellite artificiel lancé par l\'URSS (1957) — choc technologique aux USA' },
            { left: 'Khrouchtchev', right: 'Dirigeant soviétique pendant Cuba (1962) et la déstalinisation' },
            { left: 'Gorbatchev', right: 'Perestroïka + glasnost — réformateur qui accéléra l\'effondrement de l\'URSS' },
            { left: 'Téléphone rouge', right: 'Ligne directe Washington-Moscou établie après la crise de Cuba (1963)' },
            { left: 'Solidarność', right: 'Syndicat polonais de Lech Walesa — mouvement dissident alimenté par les accords d\'Helsinki' },
            { left: 'MAD', right: 'Destruction mutuelle assurée — paradoxe de la dissuasion nucléaire' }
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'Méthode des liens',
          title: 'Pourquoi l\'URSS s\'est effondrée — 5 causes',
          description: 'Les causes internes et externes de l\'effondrement soviétique, dans un ordre logique.',
          tip: 'Imagine un édifice soviétique qui CÈDE sous le POIDS (économie planifiée inefficace), SAIGNE en Afghanistan (guerre coûteuse), CRAQUELLE sous Helsinki (droits de l\'homme), se FISSURE avec Gorbatchev (réformes non maîtrisées) et s\'EFFONDRE sous les nationalistes (républiques indépendantes en 1991).',
          items: [
            'Économie planifiée inefficace — pénuries, retard technologique, course aux armements insoutenable',
            'Guerre d\'Afghanistan (1979-1989) — « Vietnam soviétique », 15 000 morts, épuisement',
            'Accords d\'Helsinki (1975) — les dissidents s\'en emparent pour revendiquer des droits (Charte 77, Solidarność)',
            'Réformes de Gorbatchev (1985) — perestroïka et glasnost libèrent des forces incontrôlables',
            'Nationalismes des républiques — 15 républiques deviennent indépendantes, dissolution le 25 décembre 1991'
          ]
        },
        {
          type: 'numbers', icon: '\u{1F4CF}', method: 'Chiffres clés',
          title: 'Les grands chiffres de la guerre froide',
          description: 'Les données quantitatives qui donnent la mesure du conflit.',
          items: [
            { label: 'Durée de la guerre froide', value: '44 ans', hint: '1947-1991' },
            { label: 'Ogives nucléaires au pic de la course aux armements', value: 'Plus de 70 000', hint: 'De quoi détruire la planète plusieurs fois — principe MAD' },
            { label: 'Aide du plan Marshall à l\'Europe', value: '13 milliards $', hint: 'En 1947 — reconstruire et soustraire l\'Europe au communisme' },
            { label: 'Durée du blocus de Berlin', value: '11 mois', hint: 'Juin 1948 - mai 1949 — riposté par le pont aérien américain' },
            { label: 'Durée de la crise des missiles de Cuba', value: '13 jours', hint: 'Octobre 1962 — le moment le plus dangereux de la guerre froide' },
            { label: 'Morts en Corée (1950-1953)', value: '~3 millions', hint: 'Premier conflit armé de la guerre froide — division au 38e parallèle' },
            { label: 'Allemands de l\'Est ayant fui avant le mur', value: '3,5 millions', hint: 'Raison principale de la construction du mur le 13 août 1961' },
            { label: 'Républiques indépendantes à la dissolution de l\'URSS', value: '15', hint: '25 décembre 1991 — fin officielle de la guerre froide' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Le vocabulaire de la guerre froide',
          description: 'Les concepts et termes indispensables pour maîtriser le sujet.',
          items: [
            { term: 'Containment', def: 'Politique américaine d\'endiguement du communisme — empêcher son expansion sans attaque directe' },
            { term: 'Rideau de fer', def: 'Expression désignant la frontière idéologique et militaire séparant l\'Europe occidentale (bloc occidental) de l\'Europe orientale (bloc soviétique)' },
            { term: 'MAD', def: 'Mutual Assured Destruction — destruction mutuelle assurée : chaque camp peut anéantir l\'autre, rendant l\'attaque suicidaire' },
            { term: 'Perestroïka', def: 'Réforme économique lancée par Gorbatchev en 1985 — restructuration vers plus d\'économie de marché' },
            { term: 'Glasnost', def: 'Transparence politique lancée par Gorbatchev en 1985 — liberté d\'expression et d\'information' },
            { term: 'Détente', def: 'Période de réduction des tensions entre les deux blocs (1962-1979) après la crise de Cuba' },
            { term: 'Non-alignés', def: 'Pays du Tiers Monde refusant de choisir entre les deux blocs — conférence de Bandung (1955)' },
            { term: 'Ostpolitik', def: 'Politique étrangère du chancelier ouest-allemand Willy Brandt normalisant les relations avec la RDA et l\'Europe de l\'Est' }
          ]
        }
      ]
    },

    // ── Course: Énergie et travail ──
    'physique/mecanique/energie': {
      title: 'Énergie et travail',
      intro: 'Ce cours est riche en formules physiques, ordres de grandeur et conversions d\'énergie. Les flashcards et les chiffres clés sont les méthodes les plus efficaces.',
      activities: [
        {
          type: 'chain', icon: '\u{1F517}', method: 'Méthode des liens',
          title: 'Les 8 formes d\'énergie',
          description: 'Retiens les 8 formes d\'énergie dans un ordre logique, du mouvement à la lumière.',
          tip: 'Imagine un CAMION (cinétique) sur une MONTAGNE (potentielle gravité) qui REBONDIT sur un ressort (élastique), chauffe (thermique), brûle de l\'ESSENCE (chimique), fissure un ATOME (nucléaire), génère du COURANT (électrique) et émet de la LUMIÈRE (rayonnante).',
          items: [
            'Énergie cinétique — énergie du mouvement, Ec = ½mv²',
            'Énergie potentielle gravitationnelle — liée à la hauteur, Ep = mgh',
            'Énergie potentielle élastique — stockée dans un objet déformé, Ep = ½kx²',
            'Énergie thermique — agitation microscopique des molécules',
            'Énergie chimique — stockée dans les liaisons moléculaires',
            'Énergie nucléaire — contenue dans le noyau, libérée par fission ou fusion (E = mc²)',
            'Énergie électrique — mouvement de charges dans un circuit',
            'Énergie rayonnante — transportée par les ondes électromagnétiques'
          ]
        },
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: 'Formules et principes fondamentaux',
          description: 'Les formules et résultats essentiels de ce cours.',
          cards: [
            { front: 'Formule du travail d\'une force constante', back: 'W = F·d·cos(θ) — θ est l\'angle entre la force et le déplacement. Unité : le joule (J).' },
            { front: 'Formule de l\'énergie cinétique', back: 'Ec = ½mv² — dépend du carré de la vitesse. Doubler v quadruple Ec.' },
            { front: 'Théorème de l\'énergie cinétique', back: 'W_total = ΔEc = ½mv_f² − ½mv_i² — le travail total égale la variation d\'énergie cinétique.' },
            { front: 'Formule de l\'énergie potentielle de pesanteur', back: 'Ep = mgh — m = masse, g ≈ 9,81 m/s², h = hauteur. Indépendante du chemin suivi.' },
            { front: 'Formule de l\'énergie potentielle élastique', back: 'Ep = ½kx² — k = constante de raideur (N/m), x = allongement/compression (m).' },
            { front: 'Qu\'est-ce qu\'une force conservative ?', back: 'Une force dont le travail ne dépend que des positions initiale et finale, pas du chemin. Ex. : pesanteur, force élastique. Pas la friction.' },
            { front: 'Condition de conservation de l\'énergie mécanique', back: 'Em = Ec + Ep = constante, uniquement en l\'absence de forces non conservatives (pas de friction).' },
            { front: 'Premier principe de la thermodynamique', back: 'ΔU = W + Q — variation d\'énergie interne = travail reçu + chaleur reçue. Interdit le perpetuum mobile.' },
            { front: 'Formule de la puissance', back: 'P = W/t = F·v — unité : le watt (W) = 1 J/s. Nommé en hommage à James Watt.' },
            { front: 'Formule du rendement', back: 'η = E_utile / E_fournie = P_utile / P_fournie — toujours < 1 (pertes en chaleur).' },
            { front: 'Limite théorique de Carnot (1824)', back: 'η_max = 1 − T_froid/T_chaud (températures en kelvins) — aucune machine thermique ne peut dépasser cette limite.' },
            { front: 'Qu\'est-ce qu\'un kilowatt-heure (kWh) ?', back: 'Une unité d\'énergie (pas de puissance) : 1 kWh = 3,6 MJ. Un ménage français consomme ~4 700 kWh/an.' }
          ]
        },
        {
          type: 'numbers', icon: '\u{1F4CF}', method: 'Chiffres clés',
          title: 'Ordres de grandeur de l\'énergie et la puissance',
          description: 'Les valeurs essentielles pour avoir de l\'intuition physique.',
          tip: 'Ancre chaque valeur à un objet concret : une pomme levée d\'1 m = 1 J, une centrale nucléaire = 1 000 MW.',
          items: [
            { label: '1 joule (J)', value: 'Énergie pour soulever une pomme de 1 m', hint: 'Unité SI d\'énergie' },
            { label: '1 calorie alimentaire', value: '4 184 J', hint: 'Soit ~4,2 kJ' },
            { label: 'Barre de chocolat', value: '~500 kcal ≈ 2,1 MJ', hint: 'Énergie chimique stockée' },
            { label: '1 litre d\'essence', value: '~34 MJ', hint: 'Énergie chimique libérée par combustion' },
            { label: 'Fission de 1 kg d\'uranium', value: '~82 TJ', hint: 'Équivalent à 2 400 tonnes d\'essence' },
            { label: '1 kWh', value: '3,6 MJ', hint: 'Prix moyen en France : ~0,25 €/kWh' },
            { label: 'Corps humain au repos', value: '~80 W', hint: 'Métabolisme de base' },
            { label: 'Cycliste professionnel (sprint)', value: '1 500–2 000 W', hint: 'Pendant quelques secondes seulement' },
            { label: 'TGV', value: '~9 000 kW', hint: 'Soit ~12 000 ch' },
            { label: 'Centrale nucléaire (1 réacteur)', value: '900–1 450 MW', hint: 'Limitée par le théorème de Carnot à η ≈ 33 %' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Rendements des machines',
          description: 'Associe chaque machine à son rendement typique.',
          pairs: [
            { left: 'Moteur à combustion interne', right: 'η ≈ 25–35 % — deux tiers perdus en chaleur' },
            { left: 'Moteur électrique', right: 'η ≈ 85–95 % — peu de friction, très efficace' },
            { left: 'Panneau solaire photovoltaïque', right: 'η ≈ 15–22 % — majorité du rayonnement non convertie' },
            { left: 'Centrale nucléaire', right: 'η ≈ 33 % — limitée par le cycle de Carnot' },
            { left: 'Ampoule à incandescence', right: 'η ≈ 5 % — 95 % converti en chaleur' },
            { left: 'LED', right: 'η ≈ 30–50 % — bien supérieure à l\'incandescence' },
            { left: 'Corps humain (exercice)', right: 'η ≈ 20–25 % — reste dissipé par transpiration' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Concepts clés de l\'énergie',
          description: 'Les notions fondamentales à maîtriser.',
          items: [
            { term: 'Travail (W)', def: 'Transfert d\'énergie par une force : W = F·d·cos(θ). Positif si la force accélère, négatif si elle freine.' },
            { term: 'Énergie mécanique', def: 'Em = Ec + Ep — somme de l\'énergie cinétique et potentielle d\'un système.' },
            { term: 'Force conservative', def: 'Force dont le travail ne dépend pas du chemin (pesanteur, élastique). Permet de définir une énergie potentielle.' },
            { term: 'Puissance (P)', def: 'Taux de transfert d\'énergie : P = W/t = F·v. Unité : le watt (W).' },
            { term: 'Rendement (η)', def: 'Rapport énergie utile / énergie fournie. Toujours < 1 à cause des pertes en chaleur.' },
            { term: 'Perpetuum mobile de 1ère espèce', def: 'Machine qui produirait de l\'énergie à partir de rien — interdit par le 1er principe de la thermodynamique.' },
            { term: 'Théorème de Carnot', def: 'Limite maximale théorique du rendement d\'une machine thermique : η_max = 1 − T_froid/T_chaud.' },
            { term: 'Machine simple', def: 'Dispositif modifiant force ou direction (levier, plan incliné, poulie) sans créer d\'énergie — ce qu\'on gagne en force, on le perd en déplacement.' }
          ]
        },
        {
          type: 'order', icon: '\u{1F4C5}', method: 'Séquence logique',
          title: 'La chaîne de conversion énergétique d\'une centrale nucléaire',
          description: 'Replace les étapes dans le bon ordre, de l\'énergie primaire à l\'électricité.',
          items: [
            { label: 'Énergie nucléaire', detail: 'Fission de l\'uranium libère une énergie colossale sous forme de chaleur' },
            { label: 'Énergie thermique', detail: 'La chaleur chauffe de l\'eau jusqu\'à produire de la vapeur sous pression' },
            { label: 'Énergie cinétique (vapeur)', detail: 'La vapeur entraîne les pales d\'une turbine en rotation' },
            { label: 'Énergie mécanique (rotation)', detail: 'La turbine fait tourner le rotor d\'un alternateur' },
            { label: 'Énergie électrique', detail: 'L\'alternateur convertit la rotation en courant électrique (η ≈ 33 %)' }
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'Méthode des liens',
          title: 'Les machines simples',
          description: 'Retiens les 3 machines simples et leur principe commun.',
          tip: 'Imagine ARCHIMÈDE (levier) qui donne un coup sur une RAMPE (plan incliné) et hisse une caisse avec une CORDE et POULIE — dans les trois cas, ce qu\'on gagne en force, on le perd en déplacement.',
          items: [
            'Levier — bras autour d\'un point d\'appui : F₁×d₁ = F₂×d₂ (principe d\'Archimède)',
            'Plan incliné — rampe longue = force réduite, même travail total mgh',
            'Poulie — change la direction de la force ; système de moufle divise la force nécessaire'
          ]
        }
      ]
    },

    // ── Course: Astronomie amateur ──
    'astronomie/observation/astronomie-amateur': {
      title: 'Astronomie amateur',
      intro: 'Ce cours mêle vocabulaire technique, événements à connaître, instruments et science citoyenne. Les flashcards et les associations sont particulièrement adaptées.',
      activities: [
        {
          type: 'flashcards', icon: '\u{1F0CF}', method: 'Flashcards',
          title: 'L\'essentiel de l\'observation',
          description: 'Questions clés sur les instruments, le ciel et les techniques d\'observation.',
          cards: [
            { front: 'Qu\'est-ce que la magnitude visuelle ?', back: 'Mesure de l\'éclat apparent des objets célestes. Sirius = −1,46. L\'œil nu perçoit jusqu\'à magnitude 6. Une différence de 5 magnitudes = facteur 100 en brillance.' },
            { front: 'Quelles jumelles sont recommandées pour débuter en astronomie ?', back: '10×50 (grossissement 10, objectifs 50 mm) — bon compromis luminosité/grossissement/stabilité sans trépied.' },
            { front: 'Qu\'est-ce que le catalogue Messier ?', back: '110 objets de ciel profond (nébuleuses, amas) catalogués par Charles Messier (1730–1817) pour ne pas les confondre avec les comètes.' },
            { front: 'Pourquoi les planètes ne clignotent-elles pas ?', back: 'Contrairement aux étoiles (sources ponctuelles), les planètes ont un disque apparent visible — les turbulences se compensent.' },
            { front: 'Qu\'est-ce que le star-hopping ?', back: 'Technique consistant à sauter d\'étoile en étoile repérables à l\'œil nu pour pointer progressivement vers un objet cible à l\'oculaire.' },
            { front: 'Qu\'est-ce que les coordonnées célestes ?', back: 'Ascension droite (AD, analogue de la longitude) et déclinaison (Dec, analogue de la latitude) — identifient précisément chaque objet sur la sphère céleste.' },
            { front: 'Combien de constellations officielles existent ?', back: '88 constellations officielles, reconnues par l\'Union Astronomique Internationale.' },
            { front: 'Combien de temps faut-il pour adapter ses yeux à l\'obscurité ?', back: '20–30 minutes dans l\'obscurité totale pour que les bâtonnets rétiniens soient pleinement sensibilisés. Éviter toute lumière blanche.' },
            { front: 'Qu\'est-ce que le Messier Marathon ?', back: 'Défi consistant à observer les 110 objets Messier en une seule nuit — possible quelques nuits au début du printemps.' },
            { front: 'Qu\'est-ce que le lucky imaging en astrophotographie planétaire ?', back: 'Technique consistant à filmer des milliers d\'images à haute cadence et à ne retenir que les meilleures, pour compenser la turbulence atmosphérique.' }
          ]
        },
        {
          type: 'vocab', icon: '\u{1F4D6}', method: 'Vocabulaire',
          title: 'Le vocabulaire de l\'astronome amateur',
          description: 'Les termes techniques et noms d\'associations essentiels.',
          items: [
            { term: 'Magnitude', def: 'Mesure de l\'éclat apparent d\'un objet céleste. Plus la valeur est petite (ou négative), plus l\'objet est brillant.' },
            { term: 'Seeing', def: 'Qualité de la stabilité atmosphérique — un bon seeing permet des grossissements élevés sans image tremblante.' },
            { term: 'Monture alt-azimutale', def: 'Monture se déplaçant horizontalement et verticalement (azimut + altitude). Simple, idéale pour l\'observation visuelle (Dobson).' },
            { term: 'Monture équatoriale', def: 'Monture alignée sur l\'axe de rotation de la Terre. Indispensable pour l\'astrophotographie à longue pose.' },
            { term: 'Ascension droite (AD)', def: 'Coordonnée céleste analogue à la longitude terrestre, mesurée en heures (0h à 24h).' },
            { term: 'Déclinaison (Dec)', def: 'Coordonnée céleste analogue à la latitude terrestre, mesurée en degrés (−90° à +90°).' },
            { term: 'AAVSO', def: 'Association Américaine des Observateurs d\'Étoiles Variables — recueille les mesures photométriques d\'amateurs du monde entier.' },
            { term: 'SAF', def: 'Société Astronomique de France — fédère la communauté astronomique amateur nationale.' },
            { term: 'EAA', def: 'Electronically-Assisted Astronomy — astrophotographie par empilement de courtes poses en temps quasi-réel.' },
            { term: 'Pouvoir de résolution', def: 'Capacité à distinguer deux objets proches. Dépend directement du diamètre de l\'objectif.' }
          ]
        },
        {
          type: 'associations', icon: '\u{1F500}', method: 'Associations',
          title: 'Objets Messier célèbres',
          description: 'Associe chaque numéro Messier à l\'objet qu\'il désigne.',
          pairs: [
            { left: 'M1', right: 'Nébuleuse du Crabe — reste de supernova' },
            { left: 'M31', right: 'Galaxie d\'Andromède — visible à l\'œil nu comme une tache floue' },
            { left: 'M42', right: 'Grande Nébuleuse d\'Orion — nébuleuse de formation d\'étoiles' },
            { left: 'M45', right: 'Les Pléiades — amas ouvert brillant dans le Taureau' },
            { left: 'M57', right: 'Nébuleuse de l\'Anneau — nébuleuse planétaire dans la Lyre' },
            { left: 'M13', right: 'Grand amas globulaire d\'Hercule — des centaines de milliers d\'étoiles' }
          ]
        },
        {
          type: 'order', icon: '\u{1F4C5}', method: 'Séquence logique',
          title: 'La progression de l\'astronome amateur',
          description: 'Replace les étapes dans le bon ordre logique, du premier pas à la science citoyenne.',
          items: [
            { label: 'Observation à l\'œil nu', detail: 'Apprendre les constellations saisonnières, repérer les planètes, observer la Voie lactée' },
            { label: 'Utiliser des jumelles 10×50', detail: 'Lunes de Jupiter, cratères lunaires, Pléiades, nébuleuse d\'Andromède' },
            { label: 'Choisir un premier télescope', detail: 'Priorité au diamètre ; Dobson alt-az pour l\'observation visuelle' },
            { label: 'Maîtriser la navigation céleste', detail: 'Star-hopping, cartes célestes, applications mobiles (Stellarium), coordonnées célestes' },
            { label: 'Astrophotographie', detail: 'Paysage nocturne → planétaire (lucky imaging) → ciel profond (poses longues, empilement)' },
            { label: 'Science citoyenne', detail: 'AAVSO (étoiles variables), transits d\'exoplanètes, occultations, découverte de comètes' }
          ]
        },
        {
          type: 'chain', icon: '\u{1F517}', method: 'Méthode des liens',
          title: 'Les pluies de météores annuelles',
          description: 'Retiens les trois grandes pluies de météores et leur période.',
          tip: 'Imagine un PERSÉE en août qui LION-ce une flèche en novembre, et des JUMEAUX (Gémeaux) qui dansent en décembre — chacun avec un feu d\'artifice dans le ciel.',
          items: [
            'Perséides — pic 11–13 août, radiant dans Persée, débris de la comète Swift-Tuttle',
            'Léonides — pic 17–18 novembre, radiant dans le Lion, parfois tempêtes de météores',
            'Géminides — pic 13–15 décembre, radiant dans les Gémeaux, l\'une des plus riches'
          ]
        },
        {
          type: 'associations', icon: '\u{1F52D}', method: 'Associations',
          title: 'Instruments et leurs usages',
          description: 'Associe chaque instrument ou technique à son usage principal.',
          pairs: [
            { left: 'Jumelles 10×50', right: 'Premier instrument idéal — lunes de Jupiter, amas ouverts, M31' },
            { left: 'Dobson (alt-az)', right: 'Observation visuelle — grand diamètre à prix réduit, facile à utiliser' },
            { left: 'Monture équatoriale motorisée', right: 'Astrophotographie ciel profond — suit le mouvement apparent du ciel' },
            { left: 'Caméra vidéo haute cadence (ZWO)', right: 'Planétaire — lucky imaging pour Jupiter, Saturne, Lune' },
            { left: 'Caméra refroidie + empilement', right: 'Ciel profond (EAA) — révèle galaxies et nébuleuses invisibles à l\'œil nu' },
            { left: 'Siril / DeepSkyStacker', right: 'Logiciels de traitement — empilement, soustraction darks/flats, réduction bruit' }
          ]
        },
        {
          type: 'dates', icon: '\u{1F5D3}\uFE0F', method: 'Dates historiques',
          title: 'Dates et événements clés',
          description: 'Les dates importantes de l\'astronomie amateur et des grands événements observables.',
          items: [
            { event: 'Charles Messier commence son catalogue', date: '1758' },
            { event: 'Naissance de Charles Messier', date: '1730' },
            { event: 'Comète Hale-Bopp visible à l\'œil nu', date: '1997' },
            { event: 'Comète McNaught (la plus brillante depuis des décennies)', date: '2007' },
            { event: 'Comète NEOWISE visible à l\'œil nu', date: '2020' },
            { event: 'Aurores boréales visibles en France (Bretagne, Provence)', date: 'Mars 2024' }
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
