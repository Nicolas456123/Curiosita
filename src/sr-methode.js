// ══════════════════════════════════════════════════════
//  Curiosita — SR Méthode (Apprendre à apprendre)
//  Onglet Méthode : 12 techniques de mémorisation,
//  exercices interactifs, recommandations personnalisées
//  Depends: sr-engine.js (SR)
// ══════════════════════════════════════════════════════

const SRMethode = (function () {
  'use strict';

  // ── 12 techniques de mémorisation ──
  const techniques = [
    {
      id: 'repetition-espacee',
      emoji: '🔄',
      name: 'Répétition espacée',
      theory: 'Revoir l\'information à des intervalles de plus en plus longs renforce la mémoire à long terme. C\'est le principe fondamental derrière ce système : chaque révision réussie repousse la prochaine un peu plus loin.',
      steps: [
        'Après un cours, crée ou extrais des flashcards sur les notions clés.',
        'Révise le jour même pour un premier ancrage.',
        'Laisse le système calculer le prochain intervalle optimal.',
        'Reviens chaque jour pour tes révisions planifiées.',
        'Avec le temps, les intervalles s\'allongent : 1 jour, 6 jours, 15 jours, 1 mois…'
      ],
      when: 'Pour tout apprentissage factuel que tu veux retenir sur le long terme : vocabulaire, dates, définitions, formules, concepts.',
      exercise: null,
      link: '#review'
    },
    {
      id: 'rappel-actif',
      emoji: '🎯',
      name: 'Rappel actif (Active Recall)',
      theory: 'Se forcer à retrouver une information en mémoire est bien plus efficace que la relire passivement. Chaque effort de rappel renforce la trace mnésique.',
      steps: [
        'Après avoir lu un cours, ferme-le.',
        'Essaie de te remémorer les points clés sans regarder.',
        'Note ce dont tu te souviens sur une feuille ou mentalement.',
        'Vérifie ensuite ce que tu as oublié et reconcentre-toi dessus.',
        'Utilise les flashcards : voir le recto et chercher la réponse AVANT de retourner.'
      ],
      when: 'À chaque session d\'étude. C\'est la technique la plus puissante selon la recherche en sciences cognitives.',
      exercise: { type: 'prompt', text: 'Ferme les yeux 10 secondes. Sans regarder cette page, combien de techniques de mémorisation peux-tu citer ?' }
    },
    {
      id: 'palais-memoire',
      emoji: '🏛️',
      name: 'Palais de la mémoire (Méthode des loci)',
      theory: 'Technique antique utilisée par les orateurs grecs et romains. On associe chaque information à un lieu précis d\'un endroit familier, puis on "parcourt" mentalement ce lieu pour retrouver les informations.',
      steps: [
        'Choisis un lieu que tu connais parfaitement (ta maison, ton trajet quotidien).',
        'Identifie 5 à 10 emplacements distincts dans cet espace, dans un ordre logique.',
        'Associe chaque information à mémoriser à un emplacement, en créant une image mentale vivante et exagérée.',
        'Pour te rappeler, "parcours" mentalement ton lieu et visualise chaque scène.',
        'Plus les images sont absurdes, drôles ou choquantes, mieux tu les retiens !'
      ],
      when: 'Idéal pour mémoriser des listes ordonnées, des séquences, des discours, ou des points clés d\'un cours.',
      exercise: { type: 'loci' }
    },
    {
      id: 'chunking',
      emoji: '🧩',
      name: 'Chunking (Regroupement)',
      theory: 'La mémoire de travail ne retient que 7±2 éléments. Le chunking consiste à regrouper les informations en "blocs" signifiants pour en retenir davantage.',
      steps: [
        'Face à une grande quantité d\'informations, cherche des motifs ou catégories.',
        'Regroupe les éléments similaires en blocs de 3 à 5.',
        'Donne un nom ou une étiquette à chaque groupe.',
        'Mémorise les groupes plutôt que les éléments individuels.',
        'Exemple : 0-6-1-4-7-8-9-5-2-3 → 06 14 78 95 23 (5 blocs au lieu de 10 chiffres).'
      ],
      when: 'Quand tu dois mémoriser des séries (numéros, listes, vocabulaire), ou structurer un cours dense.',
      exercise: { type: 'prompt', text: 'Essaie de regrouper cette série en blocs : M-A-T-H-E-M-A-T-I-Q-U-E-S. Combien de blocs significatifs trouves-tu ? (indice : MATH-ÉMA-TIQUES)' }
    },
    {
      id: 'elaboration',
      emoji: '🔗',
      name: 'Élaboration',
      theory: 'Plus tu relies une information à ce que tu sais déjà, plus elle s\'ancre profondément. Poser des questions "pourquoi ?" et "comment ?" crée des connexions riches en mémoire.',
      steps: [
        'Face à un nouveau concept, demande-toi "Pourquoi est-ce ainsi ?"',
        'Cherche des liens avec des connaissances que tu possèdes déjà.',
        'Crée des analogies : "C\'est comme…"',
        'Explique les causes et conséquences de ce que tu apprends.',
        'Relie les concepts entre eux pour construire un réseau de connaissances.'
      ],
      when: 'Pour tout sujet complexe (sciences, histoire, philosophie). Transforme un apprentissage superficiel en compréhension profonde.',
      exercise: { type: 'prompt', text: 'Choisis un concept que tu apprends en ce moment. Pose-toi 3 questions "pourquoi ?" à son sujet. Par exemple : Pourquoi la photosynthèse est-elle essentielle ? → Pourquoi les plantes utilisent-elles la lumière ? → Pourquoi ce processus produit-il de l\'oxygène ?' }
    },
    {
      id: 'double-codage',
      emoji: '🎨',
      name: 'Double codage (Dual Coding)',
      theory: 'Le cerveau traite les images et les mots par deux canaux distincts. Combiner les deux (texte + image, schéma + explication) double les chances de rétention.',
      steps: [
        'Pour chaque concept important, crée un schéma ou un dessin simple.',
        'Associe une image mentale vivante à chaque terme.',
        'Utilise des mind maps pour relier visuellement les idées.',
        'Ajoute des couleurs et des icônes à tes notes.',
        'Quand tu révises, visualise le schéma en même temps que tu rappelles les mots.'
      ],
      when: 'Pour les matières visuelles (biologie, géographie, anatomie) et pour tout concept abstrait que tu peux représenter.',
      exercise: { type: 'prompt', text: 'Choisis un concept de ton cours actuel. Dessine-le mentalement en 30 secondes : quelle forme, quelle couleur, quels éléments ? L\'image n\'a pas besoin d\'être réaliste, juste mémorable.' }
    },
    {
      id: 'entrelacement',
      emoji: '🔀',
      name: 'Entrelacement (Interleaving)',
      theory: 'Alterner entre différents sujets pendant une session est plus efficace que de se concentrer sur un seul sujet (pratique en bloc). Le cerveau apprend à distinguer les concepts et à choisir la bonne stratégie.',
      steps: [
        'Au lieu d\'étudier un seul sujet pendant 2 heures, alterne entre 2 ou 3 sujets.',
        'Par exemple : 30 min de maths, 30 min d\'histoire, 30 min de biologie.',
        'Dans les révisions, mélange les types de cartes plutôt que de réviser un seul deck.',
        'C\'est plus difficile (et c\'est normal !), mais les résultats à long terme sont meilleurs.',
        'Attention : garde quand même une logique, ne change pas toutes les 5 minutes.'
      ],
      when: 'En préparation d\'examens, quand tu révises plusieurs matières. Aussi pour les résolutions de problèmes (maths, physique).',
      exercise: null,
      link: '#decks'
    },
    {
      id: 'feynman',
      emoji: '👨‍🏫',
      name: 'Technique de Feynman',
      theory: 'Richard Feynman, prix Nobel de physique, disait : "Si tu ne peux pas l\'expliquer simplement, c\'est que tu ne le comprends pas assez bien." Expliquer un sujet dans un langage simple révèle tes lacunes.',
      steps: [
        'Choisis un concept que tu veux maîtriser.',
        'Explique-le comme si tu parlais à un enfant de 10 ans.',
        'Utilise un langage simple, pas de jargon.',
        'Quand tu bloques ou que tu utilises des termes techniques, retourne au cours.',
        'Simplifie et retente jusqu\'à ce que l\'explication soit fluide.'
      ],
      when: 'Pour vérifier ta compréhension profonde de n\'importe quel sujet. Si tu peux l\'enseigner, tu le maîtrises.',
      exercise: { type: 'feynman' }
    },
    {
      id: 'pomodoro',
      emoji: '🍅',
      name: 'Technique Pomodoro',
      theory: 'Développée par Francesco Cirillo dans les années 80. On travaille en blocs concentrés de 25 minutes, suivis de 5 minutes de pause. Après 4 blocs, une pause longue de 15-30 minutes.',
      steps: [
        'Choisis une tâche précise d\'étude.',
        'Règle un minuteur sur 25 minutes.',
        'Travaille avec une concentration totale — pas de téléphone, pas de distractions.',
        'Quand le minuteur sonne, prends 5 minutes de vraie pause (lève-toi, bouge).',
        'Après 4 pomodoros, fais une pause de 15 à 30 minutes.'
      ],
      when: 'Pour toute session d\'étude, surtout quand tu as du mal à te concentrer. Le cadre temporel crée de l\'urgence positive.',
      exercise: { type: 'pomodoro' }
    },
    {
      id: 'mnemotechniques',
      emoji: '🔤',
      name: 'Associations mnémotechniques',
      theory: 'Créer des acronymes, des rimes, des histoires ou des phrases absurdes pour encoder une information. Le cerveau retient mieux ce qui est ludique, émotionnel ou surprenant.',
      steps: [
        'Pour une liste : crée un acronyme avec les premières lettres (ex: "Mais Où Est Donc Or Ni Car" pour les conjonctions).',
        'Pour des chiffres : transforme-les en mots (système majeur) ou en images.',
        'Pour un processus : invente une petite histoire reliant les étapes.',
        'Utilise des rimes pour les dates ou formules.',
        'Plus c\'est absurde ou drôle, mieux c\'est !'
      ],
      when: 'Pour tout ce qui est arbitraire et difficile à retenir par la logique seule : listes, dates, noms, ordres séquentiels.',
      exercise: { type: 'prompt', text: 'Les planètes du système solaire : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune. Invente une phrase où chaque mot commence par la bonne lettre. Exemple : "Mon Vieux Toutou Mange Joyeusement Sept Uniformes Neufs."' }
    },
    {
      id: 'courbe-oubli',
      emoji: '📉',
      name: 'Courbe de l\'oubli (Ebbinghaus)',
      theory: 'Hermann Ebbinghaus a démontré en 1885 que sans révision, on oublie 56% d\'une information en 1 heure, 66% en 1 jour, et 75% en 6 jours. Mais chaque révision aplatit la courbe et augmente la durée de rétention.',
      steps: [
        'Comprends que l\'oubli est naturel — ce n\'est pas un échec.',
        'La première révision est la plus critique : fais-la dans les 24 heures.',
        'Chaque révision augmente la "stabilité" de la mémoire.',
        'Après 4-5 révisions bien espacées, l\'information est en mémoire à long terme.',
        'Consulte l\'onglet "Progrès" pour voir ta courbe personnelle.'
      ],
      when: 'C\'est le fondement théorique de la répétition espacée. Comprendre cette courbe motive à réviser régulièrement.',
      exercise: null,
      link: '#progress'
    },
    {
      id: 'metacognition',
      emoji: '🪞',
      name: 'Métacognition',
      theory: 'Apprendre à apprendre, c\'est réfléchir sur sa propre façon d\'apprendre. Identifier ce qui fonctionne pour toi, évaluer honnêtement ta compréhension, et ajuster tes stratégies.',
      steps: [
        'Avant d\'étudier, demande-toi : "Qu\'est-ce que je sais déjà sur ce sujet ?"',
        'Pendant l\'étude, vérifie régulièrement : "Est-ce que je comprends vraiment ?"',
        'Après, évalue : "Qu\'est-ce que je retiens ? Qu\'est-ce qui me manque ?"',
        'Identifie les techniques qui fonctionnent le mieux pour TOI.',
        'Tiens un journal d\'apprentissage pour suivre tes progrès et tes difficultés.'
      ],
      when: 'Tout le temps. La métacognition est la compétence qui améliore toutes les autres. C\'est le "super-pouvoir" des apprenants efficaces.',
      exercise: { type: 'prompt', text: 'Auto-évaluation rapide : Sur une échelle de 1 à 5, comment juges-tu ta concentration aujourd\'hui ? Ta motivation ? Ta compréhension du dernier cours étudié ? Note mentalement tes réponses et identifie un point à améliorer.' }
    }
  ];

  let contentBuilt = false;
  let cachedHTML = '';

  // ── Render ──
  function render() {
    const el = document.querySelector('#methode-content');
    if (!el) return;

    if (!contentBuilt) {
      cachedHTML = buildStaticContent();
      contentBuilt = true;
    }

    el.innerHTML = cachedHTML + buildRecommendations();
    attachInteractions(el);
  }

  // ── Static content ──
  function buildStaticContent() {
    let html = `
      <div class="sr-m-intro">
        <h2 class="sr-m-heading">Apprendre à apprendre</h2>
        <p class="sr-m-intro-text">
          La science cognitive a identifié des stratégies d'apprentissage dont l'efficacité est prouvée.
          Pourtant, la plupart des étudiants s'en tiennent à relire leurs notes — une méthode parmi les moins efficaces.
          Explore les 12 techniques ci-dessous pour transformer ta façon d'apprendre.
          Chaque technique est accompagnée d'exercices pratiques que tu peux essayer immédiatement.
        </p>
      </div>
      <div class="sr-m-techniques">`;

    techniques.forEach((tech, i) => {
      html += buildTechniqueCard(tech, i);
    });

    html += '</div>';
    return html;
  }

  function buildTechniqueCard(tech, index) {
    let exerciseHTML = '';
    if (tech.exercise) {
      exerciseHTML = buildExercise(tech.exercise, tech.id);
    }

    let linkHTML = '';
    if (tech.link) {
      linkHTML = `<a class="sr-m-tech-link" href="${tech.link}">Essayer maintenant →</a>`;
    }

    return `
      <div class="sr-m-tech" id="tech-${tech.id}">
        <div class="sr-m-tech-header" data-toggle="tech-body-${index}">
          <span class="sr-m-tech-emoji">${tech.emoji}</span>
          <div class="sr-m-tech-info">
            <h3 class="sr-m-tech-name">${tech.name}</h3>
            <p class="sr-m-tech-theory">${truncate(tech.theory, 100)}</p>
          </div>
          <span class="sr-m-tech-chevron">▾</span>
        </div>
        <div class="sr-m-tech-body" id="tech-body-${index}" style="display:none">
          <p style="margin-bottom:0.5rem;">${tech.theory}</p>
          <h4>Comment faire</h4>
          <ol>${tech.steps.map(s => `<li>${s}</li>`).join('')}</ol>
          <h4>Quand l'utiliser</h4>
          <p>${tech.when}</p>
          ${exerciseHTML}
          ${linkHTML}
        </div>
      </div>`;
  }

  // ── Exercises ──
  function buildExercise(exercise, techId) {
    if (exercise.type === 'prompt') {
      return `
        <div class="sr-m-exercise">
          <h4>Mini-exercice</h4>
          <p>${exercise.text}</p>
        </div>`;
    }

    if (exercise.type === 'loci') {
      return `
        <div class="sr-m-exercise sr-m-loci" data-tech="loci">
          <h4>Mini-exercice : Palais de la mémoire</h4>
          <div class="sr-m-loci-steps">
            <div class="sr-m-loci-step active" data-step="0">
              <p>Pense à un lieu que tu connais parfaitement (ta maison, ton école, ton trajet quotidien). Visualise l'entrée.</p>
              <button class="sr-btn sr-btn-secondary sr-m-loci-next" style="margin-top:0.5rem;">Suivant →</button>
            </div>
            <div class="sr-m-loci-step" data-step="1">
              <p>Choisis <strong>5 emplacements</strong> distincts dans ce lieu, dans un ordre logique. Par exemple : l'entrée, le salon, la cuisine, la chambre, la salle de bain.</p>
              <button class="sr-btn sr-btn-secondary sr-m-loci-next" style="margin-top:0.5rem;">Suivant →</button>
            </div>
            <div class="sr-m-loci-step" data-step="2">
              <p>Maintenant, mémorise cette liste de 5 mots en plaçant chacun dans un de tes emplacements :</p>
              <p style="color:var(--sr-new);font-weight:600;font-size:1rem;margin:0.5rem 0;">Soleil — Violon — Éléphant — Diamant — Fusée</p>
              <p>Crée des images vivantes et absurdes ! Ex: un soleil géant brûle dans ton entrée, un éléphant joue du violon dans la cuisine…</p>
              <button class="sr-btn sr-btn-secondary sr-m-loci-next" style="margin-top:0.5rem;">J'ai placé les 5 mots →</button>
            </div>
            <div class="sr-m-loci-step" data-step="3">
              <p>Ferme les yeux et "parcours" mentalement ton lieu. Retrouves-tu les 5 mots dans l'ordre ?</p>
              <p style="color:var(--sr-success);margin-top:0.8rem;font-weight:500;">✅ Bravo ! Tu viens d'utiliser la technique des champions de mémoire. Avec de la pratique, tu peux retenir des dizaines d'éléments de cette façon.</p>
            </div>
          </div>
        </div>`;
    }

    if (exercise.type === 'feynman') {
      return `
        <div class="sr-m-exercise" data-tech="feynman">
          <h4>Mini-exercice : Technique de Feynman</h4>
          <p style="font-size:0.85rem;color:var(--muted);margin-bottom:0.8rem;">Choisis un concept que tu apprends en ce moment et explique-le comme si tu parlais à un enfant de 10 ans :</p>
          <textarea class="sr-form-textarea sr-m-feynman-input" rows="4" placeholder="Écris ton explication ici... Utilise des mots simples, des images, des comparaisons."></textarea>
          <p class="sr-m-feynman-tip" style="display:none;margin-top:0.5rem;font-size:0.82rem;color:var(--sr-new);">💡 Si tu as du mal à expliquer simplement, c'est que tu dois revoir le sujet. Les vrais experts savent toujours simplifier !</p>
        </div>`;
    }

    if (exercise.type === 'pomodoro') {
      return `
        <div class="sr-m-exercise sr-m-pomodoro" data-tech="pomodoro">
          <h4>Mini Pomodoro</h4>
          <p style="font-size:0.82rem;color:var(--muted);margin-bottom:0.5rem;">Lance un minuteur de 25 minutes pour une session de travail concentré.</p>
          <div class="sr-m-pomodoro-time" id="pomodoro-display">25:00</div>
          <div class="sr-m-pomodoro-btns">
            <button class="sr-btn sr-btn-primary" id="pomodoro-start">Démarrer</button>
            <button class="sr-btn sr-btn-secondary" id="pomodoro-pause" style="display:none">Pause</button>
            <button class="sr-btn sr-btn-secondary" id="pomodoro-reset" style="display:none">Réinitialiser</button>
          </div>
        </div>`;
    }

    return '';
  }

  // ── Personalized Recommendations ──
  function buildRecommendations() {
    let stats, dist, ret;
    try {
      stats = SR.getStats();
      dist = SR.getMaturityDistribution();
      ret = SR.getRetentionEstimate();
    } catch (e) {
      return '';
    }

    const tips = [];

    if (stats.total === 0) {
      tips.push({ emoji: '🚀', text: 'Commence par extraire des cartes depuis un cours dans l\'onglet "Ajouter", puis reviens ici pour optimiser tes stratégies d\'apprentissage !', tech: null });
    } else {
      if (ret.atRisk > 10) {
        tips.push({ emoji: '⚠️', text: `${ret.atRisk} cartes sont en danger d'oubli (rétention <50%). Une session de révision urgente s'impose ! La répétition espacée est ta meilleure alliée.`, tech: 'repetition-espacee' });
      }
      if (dist.mature > 30) {
        tips.push({ emoji: '🔀', text: `Tu as ${dist.mature} cartes matures — excellent ! Pour consolider, essaie l'entrelacement : mélange les sujets pendant tes révisions.`, tech: 'entrelacement' });
      }
      if (stats.streakDays >= 7) {
        tips.push({ emoji: '🔥', text: `${stats.streakDays} jours de suite — ta régularité est impressionnante ! Structure tes sessions avec la technique Pomodoro pour maximiser ta concentration.`, tech: 'pomodoro' });
      }
      if (dist.new > 20) {
        tips.push({ emoji: '🧩', text: `${dist.new} nouvelles cartes à découvrir. Utilise le chunking pour les regrouper par thème et les aborder par blocs plutôt que toutes d'un coup.`, tech: 'chunking' });
      }
      if (stats.total > 50 && ret.overall >= 80) {
        tips.push({ emoji: '👨‍🏫', text: `Ta rétention est à ${ret.overall}% — essaie la technique de Feynman : explique tes sujets les plus difficiles dans un langage simple pour solidifier ta maîtrise.`, tech: 'feynman' });
      }
      if (stats.total > 0 && stats.streakDays === 0) {
        tips.push({ emoji: '📉', text: 'Tu n\'as pas révisé aujourd\'hui. Rappelle-toi la courbe de l\'oubli : chaque jour sans révision accélère l\'oubli. Même 5 minutes font une différence !', tech: 'courbe-oubli' });
      }
    }

    if (tips.length === 0) return '';

    let html = `
      <div class="sr-m-reco">
        <h3 class="sr-m-heading">Recommandations personnalisées</h3>`;

    tips.forEach(tip => {
      html += `
        <div class="sr-m-reco-item">
          <span class="sr-m-reco-emoji">${tip.emoji}</span>
          <p>${tip.text}</p>
          ${tip.tech ? `<a class="sr-m-reco-link" href="#tech-${tip.tech}">Voir la technique →</a>` : ''}
        </div>`;
    });

    html += '</div>';
    return html;
  }

  // ── Event Handlers ──
  function attachInteractions(el) {
    // Accordion toggle
    el.querySelectorAll('.sr-m-tech-header').forEach(header => {
      header.addEventListener('click', () => {
        const targetId = header.dataset.toggle;
        const body = document.getElementById(targetId);
        const chevron = header.querySelector('.sr-m-tech-chevron');
        if (body) {
          const isOpen = body.style.display !== 'none';
          body.style.display = isOpen ? 'none' : '';
          if (chevron) chevron.textContent = isOpen ? '▾' : '▴';
        }
      });
    });

    // Loci walkthrough
    el.querySelectorAll('.sr-m-loci-next').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentStep = btn.closest('.sr-m-loci-step');
        const nextStep = currentStep.nextElementSibling;
        if (nextStep && nextStep.classList.contains('sr-m-loci-step')) {
          currentStep.classList.remove('active');
          currentStep.style.display = 'none';
          nextStep.classList.add('active');
          nextStep.style.display = 'block';
        }
      });
    });

    // Feynman textarea hint
    el.querySelectorAll('.sr-m-feynman-input').forEach(textarea => {
      textarea.addEventListener('input', () => {
        const tip = textarea.parentElement.querySelector('.sr-m-feynman-tip');
        if (tip && textarea.value.length > 20) {
          tip.style.display = '';
        }
      });
    });

    // Pomodoro timer
    initPomodoro(el);

    // Recommendation links → scroll to technique
    el.querySelectorAll('.sr-m-reco-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#tech-')) {
          e.preventDefault();
          const techEl = document.getElementById(href.replace('#', ''));
          if (techEl) {
            techEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Auto-open the accordion
            const header = techEl.querySelector('.sr-m-tech-header');
            const bodyId = header ? header.dataset.toggle : null;
            if (bodyId) {
              const body = document.getElementById(bodyId);
              if (body && body.style.display === 'none') {
                body.style.display = '';
                const chevron = header.querySelector('.sr-m-tech-chevron');
                if (chevron) chevron.textContent = '▴';
              }
            }
          }
        }
      });
    });
  }

  // ── Pomodoro Timer ──
  let pomodoroInterval = null;
  let pomodoroSeconds = 25 * 60;
  let pomodoroRunning = false;

  function initPomodoro(el) {
    const display = el.querySelector('#pomodoro-display');
    const startBtn = el.querySelector('#pomodoro-start');
    const pauseBtn = el.querySelector('#pomodoro-pause');
    const resetBtn = el.querySelector('#pomodoro-reset');

    if (!display || !startBtn) return;

    // Clear any previous interval
    if (pomodoroInterval) { clearInterval(pomodoroInterval); pomodoroInterval = null; }

    function updateDisplay() {
      const m = Math.floor(pomodoroSeconds / 60);
      const s = pomodoroSeconds % 60;
      display.textContent = m.toString().padStart(2, '0') + ':' + s.toString().padStart(2, '0');

      // Color change when <5 min
      if (pomodoroSeconds <= 300 && pomodoroSeconds > 0) {
        display.style.color = 'var(--sr-hard)';
      } else if (pomodoroSeconds === 0) {
        display.style.color = 'var(--sr-success)';
      } else {
        display.style.color = 'var(--sr-new)';
      }
    }

    function tick() {
      if (pomodoroSeconds <= 0) {
        clearInterval(pomodoroInterval);
        pomodoroInterval = null;
        pomodoroRunning = false;
        display.textContent = 'Terminé !';
        display.style.color = 'var(--sr-success)';
        startBtn.style.display = 'none';
        pauseBtn.style.display = 'none';
        resetBtn.style.display = '';
        return;
      }
      pomodoroSeconds--;
      updateDisplay();
    }

    startBtn.addEventListener('click', () => {
      if (pomodoroRunning) return;
      pomodoroRunning = true;
      pomodoroInterval = setInterval(tick, 1000);
      startBtn.style.display = 'none';
      pauseBtn.style.display = '';
      resetBtn.style.display = '';
    });

    pauseBtn.addEventListener('click', () => {
      if (!pomodoroRunning) return;
      pomodoroRunning = false;
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
      pauseBtn.style.display = 'none';
      startBtn.textContent = 'Reprendre';
      startBtn.style.display = '';
    });

    resetBtn.addEventListener('click', () => {
      pomodoroRunning = false;
      if (pomodoroInterval) { clearInterval(pomodoroInterval); pomodoroInterval = null; }
      pomodoroSeconds = 25 * 60;
      updateDisplay();
      startBtn.textContent = 'Démarrer';
      startBtn.style.display = '';
      pauseBtn.style.display = 'none';
      resetBtn.style.display = 'none';
    });

    updateDisplay();
  }

  // ── Helpers ──
  function truncate(text, max) {
    if (text.length <= max) return text;
    return text.substring(0, max).replace(/\s+\S*$/, '') + '…';
  }

  return { render };
})();
