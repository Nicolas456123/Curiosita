// Discipline definition: Communication & Médias
// 5 hubs, 25 lessons — all content in French

module.exports = {
  slug: 'communication',
  title: 'Communication & Médias',
  description: 'Explorez la théorie de la communication, le journalisme, les médias numériques et les relations publiques.',
  icon: '📡',
  cat: 'Communication & Médias',
  themeSlug: 'sciences-humaines',
  accent: '#e07a5a',
  accent2: '#ed9a85',
  accentDim: 'rgba(224,122,90,0.1)',
  accentHero: 'rgba(224,122,90,0.08)',
  introTitle: 'Que sont les sciences de la communication ?',
  introText: 'Les sciences de la communication étudient les processus par lesquels les individus, les groupes et les sociétés échangent des informations, des idées et des émotions. De la rhétorique antique aux réseaux sociaux contemporains, la communication est au cœur de toute vie sociale, politique et économique.',
  introHighlight: 'De l\'invention de l\'imprimerie par Gutenberg (1450) à la naissance d\'Internet (1969), chaque révolution médiatique a transformé en profondeur les sociétés humaines et les rapports de pouvoir.',
  articleLow: 'la',
  hubs: [
    // ──────────────────────────────────────────────
    // HUB 1 — Théorie de la communication
    // ──────────────────────────────────────────────
    {
      slug: 'theorie-communication',
      title: 'Théorie de la communication',
      description: 'Modèles fondateurs, sémiologie, pragmatique et communication interpersonnelle.',
      lessons: [
        {
          slug: 'modeles-fondateurs',
          title: 'Modèles fondateurs',
          description: 'Shannon, Jakobson, Lasswell et les premiers modèles de la communication.',
          intro: 'Les <strong>modèles de la communication</strong> tentent de représenter schématiquement le processus de transmission d\'un message entre un émetteur et un récepteur. Ces modèles fondateurs, élaborés entre les années 1940 et 1960, constituent encore aujourd\'hui le socle de la discipline.',
          introHighlight: '<strong>Le modèle de Shannon et Weaver</strong> (1949), issu de la théorie de l\'information, est le premier modèle mathématique de la communication et reste la référence fondatrice du domaine.',
          intro2: '',
          sections: [
            {
              title: 'Le modèle de Shannon et Weaver',
              paragraphs: [
                'Claude <strong>Shannon</strong>, ingénieur aux laboratoires Bell, publia en 1948 A Mathematical Theory of Communication, fondant la théorie de l\'information. Son modèle linéaire décrit la communication comme un processus en cinq éléments : une source d\'information, un émetteur (qui encode le message), un canal de transmission, un récepteur (qui décode) et un destinataire. Le bruit, perturbation du signal, dégrade la communication.',
                'Warren <strong>Weaver</strong> élargit le modèle technique de Shannon aux problèmes de sens et d\'efficacité. Il distingua trois niveaux de communication : le niveau technique (la précision de la transmission des symboles), le niveau sémantique (la précision du sens transmis) et le niveau pragmatique (l\'efficacité du message à influencer le comportement). Ce modèle, bien que linéaire et unidirectionnel, reste fondamental en télécommunications, en informatique et en linguistique.'
              ],
              highlight: 'La théorie de l\'information de Shannon a introduit le « bit » (binary digit) comme unité de mesure de l\'information, fondant l\'ère numérique.'
            },
            {
              title: 'Les modèles linguistiques et fonctionnels',
              paragraphs: [
                'Roman <strong>Jakobson</strong> (1960) proposa un modèle à six fonctions du langage, chacune liée à un élément de la communication. La fonction référentielle (centrée sur le contexte) domine le discours informatif. La fonction émotive (centrée sur l\'émetteur) exprime les sentiments. La fonction conative (centrée sur le récepteur) cherche à influencer. La fonction phatique (centrée sur le canal) maintient le contact. La fonction métalinguistique porte sur le code lui-même. La fonction poétique porte sur la forme du message.',
                '<strong>Lasswell</strong> (1948) résuma la communication par cinq questions : « Qui dit Quoi, par Quel canal, à Qui, avec Quel effet ? » Ce modèle simple reste un outil d\'analyse puissant pour les médias et la communication politique. Chaque question ouvre un champ de recherche : l\'étude de l\'émetteur (sociologie des journalistes), du contenu (analyse de discours), du médium (médiologie), de l\'audience (études de réception) et des effets (persuasion, opinion publique).'
              ],
              highlight: 'La formule de Lasswell — « Qui dit Quoi, par Quel canal, à Qui, avec Quel effet ? » — résume en une phrase toute la problématique des sciences de la communication.'
            },
            {
              title: 'L\'École de Palo Alto et la communication circulaire',
              paragraphs: [
                'L\'<strong>École de Palo Alto</strong> (Gregory Bateson, Paul Watzlawick, années 1950-1970) rompit avec le modèle linéaire en concevant la communication comme un processus circulaire et systémique. Le premier axiome de Watzlawick — « On ne peut pas ne pas communiquer » — signifie que tout comportement (y compris le silence) est communication dans un contexte interactionnel.',
                'Watzlawick distingua le <strong>contenu</strong> (ce qui est dit) et la <strong>relation</strong> (comment c\'est dit, qui définit la relation entre les interlocuteurs). Il identifia des pathologies de la communication : le double bind (double contrainte, où deux messages contradictoires sont envoyés simultanément), la ponctuation conflictuelle (chacun voit l\'autre comme cause du conflit) et la confusion entre contenu et relation. Ces concepts ont profondément influencé la thérapie familiale et la communication organisationnelle.'
              ],
              highlight: '« On ne peut pas ne pas communiquer » — le premier axiome de Watzlawick signifie que même le silence est un message.'
            }
          ],
          quiz: [
            { q: 'Qui a fondé la théorie mathématique de la communication ?', opts: ['Marshall McLuhan', 'Claude Shannon', 'Roman Jakobson', 'Paul Watzlawick'], correct: 1, explanation: 'Claude Shannon a publié A Mathematical Theory of Communication en 1948, fondant la théorie de l\'information et posant les bases de l\'ère numérique.' },
            { q: 'Que stipule le premier axiome de Watzlawick ?', opts: ['On doit toujours parler clairement', 'On ne peut pas ne pas communiquer', 'La communication est toujours verbale', 'Le silence est l\'absence de communication'], correct: 1, explanation: 'Le premier axiome de Watzlawick stipule qu\'« on ne peut pas ne pas communiquer » : tout comportement est communication dans un contexte interactionnel.' },
            { q: 'Quelles sont les cinq questions de Lasswell ?', opts: ['Pourquoi, Comment, Quand, Où, Combien', 'Qui dit Quoi, par Quel canal, à Qui, avec Quel effet', 'Qui, Quoi, Quand, Où, Comment', 'Source, Message, Canal, Récepteur, Bruit'], correct: 1, explanation: 'La formule de Lasswell (1948) résume la communication en cinq questions : Qui dit Quoi, par Quel canal, à Qui, avec Quel effet ?' }
          ],
          definitions: [
            { term: 'Théorie de l\'information', def: 'Théorie mathématique fondée par Shannon (1948) mesurant la quantité d\'information transmise dans un canal de communication.' },
            { term: 'Bruit', def: 'Toute perturbation qui dégrade la transmission d\'un message entre l\'émetteur et le récepteur.' },
            { term: 'Fonction phatique', def: 'Fonction du langage centrée sur le canal, visant à maintenir le contact (« Allô ? », « Tu m\'écoutes ? »).' },
            { term: 'Double bind', def: 'Situation de communication paradoxale où deux messages contradictoires sont envoyés simultanément, rendant toute réponse inadéquate.' },
            { term: 'Feedback', def: 'Rétroaction du récepteur vers l\'émetteur, transformant la communication linéaire en processus circulaire.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Claude Shannon est aussi l\'inventeur du bit (binary digit) et le père de la théorie des circuits logiques. Sa thèse de master (1937) est considérée comme la plus importante du XXe siècle en ingénierie.' },
            { front: '💡 Le savais-tu ?', back: 'Gregory Bateson, fondateur de l\'École de Palo Alto, était aussi anthropologue, biologiste et cybernéticien. Son concept de double bind a révolutionné la compréhension de la schizophrénie.' },
            { front: '💡 Le savais-tu ?', back: 'Roman Jakobson, linguiste russo-américain, a influencé autant la linguistique que la poétique et l\'anthropologie. Claude Lévi-Strauss le considérait comme l\'un des plus grands intellectuels du XXe siècle.' }
          ]
        },
        {
          slug: 'semiologie-et-signes',
          title: 'Sémiologie et signes',
          description: 'Saussure, Peirce, Barthes et l\'étude des systèmes de signes.',
          intro: 'La <strong>sémiologie</strong> (ou sémiotique) est la science qui étudie les signes et les systèmes de signification. Fondée par Ferdinand de Saussure et Charles Sanders Peirce au début du XXe siècle, elle fournit les outils pour décrypter les messages visuels, textuels et médiatiques.',
          introHighlight: '<strong>Roland Barthes</strong> a appliqué la sémiologie aux objets quotidiens — publicité, mode, photographie — démontrant que toute culture est un système de signes à décoder.',
          intro2: '',
          sections: [
            {
              title: 'Saussure et la linguistique structurale',
              paragraphs: [
                'Ferdinand de <strong>Saussure</strong> (Cours de linguistique générale, 1916) définit le signe linguistique comme l\'association d\'un signifiant (l\'image acoustique, le mot) et d\'un signifié (le concept). Cette relation est arbitraire : il n\'y a aucun lien naturel entre le mot « arbre » et l\'objet qu\'il désigne (la preuve : « tree » en anglais, « Baum » en allemand).',
                'Saussure distingua la <strong>langue</strong> (système social de signes partagé par une communauté) de la <strong>parole</strong> (usage individuel de la langue). Il introduisit l\'opposition synchronie/diachronie : étudier la langue à un moment donné (synchronie) ou dans son évolution historique (diachronie). Ces concepts fondateurs ont engendré le structuralisme, mouvement intellectuel dominant des années 1950-1970 (Lévi-Strauss, Barthes, Foucault, Lacan).'
              ],
              highlight: 'Le signe saussurien est arbitraire : il n\'y a aucun lien naturel entre le mot « chien » et l\'animal qu\'il désigne.'
            },
            {
              title: 'Peirce et la sémiotique',
              paragraphs: [
                'Charles Sanders <strong>Peirce</strong>, philosophe américain contemporain de Saussure, développa une sémiotique triadique distinguant trois types de signes selon leur relation à l\'objet représenté. L\'<strong>icône</strong> ressemble à l\'objet (une photographie, un portrait, un plan). L\'<strong>indice</strong> est physiquement connecté à l\'objet (la fumée indique le feu, l\'empreinte digitale identifie une personne). Le <strong>symbole</strong> est lié à l\'objet par une convention (le drapeau national, le feu rouge, les mots).',
                'Cette classification est fondamentale pour l\'analyse des <strong>médias visuels</strong>. Une publicité combine des icônes (l\'image du produit), des indices (un sourire suggérant le bonheur) et des symboles (le logo de la marque). La sémiologie visuelle, développée par le Groupe Mu et Jacques Durand, analyse les procédés rhétoriques des images publicitaires : métaphore visuelle, métonymie, hyperbole.'
              ],
              highlight: 'Peirce distingue trois types de signes : l\'icône (ressemblance), l\'indice (connexion physique) et le symbole (convention).'
            },
            {
              title: 'Barthes et la mythologie contemporaine',
              paragraphs: [
                'Roland <strong>Barthes</strong> (Mythologies, 1957) appliqua la sémiologie aux phénomènes culturels quotidiens : le catch, la publicité pour les pâtes Panzani, la une de Paris-Match, la DS Citroën. Il montra que ces objets apparemment « naturels » véhiculent des <strong>mythes</strong> — des significations idéologiques qui se présentent comme évidentes. Le mythe transforme l\'histoire en nature, le culturel en universel.',
                'Dans <strong>Rhétorique de l\'image</strong> (1964), Barthes analysa une publicité Panzani et distingua trois niveaux de message : le message linguistique (le texte), le message iconique codé (les connotations culturelles : l\'italianité, la fraîcheur) et le message iconique non codé (ce que l\'image représente littéralement). Cette grille d\'analyse reste l\'outil fondamental de la sémiologie publicitaire et médiatique.'
              ],
              highlight: 'Barthes a montré que la publicité, la mode et les médias fonctionnent comme des systèmes mythologiques transformant le culturel en « naturel ».'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que le signifiant selon Saussure ?', opts: ['Le concept', 'L\'image acoustique (le mot)', 'L\'objet réel', 'L\'émotion'], correct: 1, explanation: 'Le signifiant est l\'image acoustique, la forme matérielle du signe (le son ou la graphie du mot), par opposition au signifié (le concept).' },
            { q: 'Qu\'est-ce qu\'un indice selon Peirce ?', opts: ['Un signe qui ressemble à l\'objet', 'Un signe physiquement connecté à l\'objet', 'Un signe conventionnel', 'Un signe abstrait'], correct: 1, explanation: 'Un indice est un signe physiquement connecté à ce qu\'il représente : la fumée est un indice du feu, la fièvre un indice de la maladie.' },
            { q: 'Qu\'étudie Barthes dans Mythologies ?', opts: ['Les mythes grecs', 'Les significations idéologiques des objets culturels quotidiens', 'Les religions', 'L\'astronomie'], correct: 1, explanation: 'Dans Mythologies (1957), Barthes analyse les significations idéologiques cachées dans les phénomènes culturels quotidiens (catch, publicité, mode).' }
          ],
          definitions: [
            { term: 'Sémiologie', def: 'Science des signes et des systèmes de signification, fondée par Saussure et Peirce au début du XXe siècle.' },
            { term: 'Signifiant/signifié', def: 'Les deux faces du signe linguistique selon Saussure : le signifiant est la forme (le mot), le signifié est le concept.' },
            { term: 'Icône', def: 'Signe qui ressemble à ce qu\'il représente (photographie, plan, portrait).' },
            { term: 'Mythe (Barthes)', def: 'Signification idéologique d\'un objet culturel qui se présente comme naturelle et évidente, masquant son caractère construit.' },
            { term: 'Connotation', def: 'Signification secondaire, culturelle et subjective d\'un signe, au-delà de son sens premier (dénotation).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Cours de linguistique générale de Saussure (1916) a été publié après sa mort, reconstitué par ses étudiants à partir de leurs notes de cours. Saussure n\'a jamais écrit l\'ouvrage qui a fondé la linguistique moderne.' },
            { front: '💡 Le savais-tu ?', back: 'Roland Barthes analysait aussi la mode comme un système de signes. Dans Système de la mode (1967), il montra que les magazines de mode créent des significations (élégance, jeunesse) à partir de simples descriptions de vêtements.' },
            { front: '💡 Le savais-tu ?', back: 'Umberto Eco, célèbre romancier italien (Le Nom de la rose), était d\'abord un éminent sémioticien. Son Traité de sémiotique générale (1975) est l\'une des synthèses les plus complètes de la discipline.' }
          ]
        },
        {
          slug: 'communication-de-masse',
          title: 'Communication de masse',
          description: 'Théories des médias, effets sur le public, agenda-setting et spirale du silence.',
          intro: 'La <strong>communication de masse</strong> désigne la diffusion de messages à un large public par les médias (presse, radio, télévision, Internet). Les théories des effets des médias ont évolué d\'une vision de publics passifs et manipulables à une compréhension plus nuancée de récepteurs actifs et critiques.',
          introHighlight: '<strong>Marshall McLuhan</strong> a résumé sa vision en une formule célèbre : « Le médium est le message » — ce n\'est pas le contenu qui transforme la société, mais le médium lui-même.',
          intro2: '',
          sections: [
            {
              title: 'Des effets puissants aux effets limités',
              paragraphs: [
                'Les premières théories des <strong>effets des médias</strong> (années 1920-1940) supposaient un public passif et manipulable. La théorie de la « seringue hypodermique » (ou « balle magique ») imaginait que les médias injectaient directement leurs messages dans l\'esprit des récepteurs. La propagande nazie et soviétique semblait confirmer cette vision. Harold Lasswell (Propaganda Technique in the World War, 1927) voyait la propagande comme un outil de contrôle social.',
                'Paul <strong>Lazarsfeld</strong> (The People\'s Choice, 1944) renversa cette perspective en montrant que les médias ont des effets limités. Sa théorie du « two-step flow of communication » montra que les messages passent par des leaders d\'opinion qui filtrent et interprètent l\'information. Les individus sélectionnent les médias conformes à leurs opinions préexistantes (exposition sélective). Cette théorie des effets limités domina les années 1950-1970.'
              ],
              highlight: 'Lazarsfeld montra que les médias n\'influencent pas directement le public : les messages passent par des leaders d\'opinion qui les filtrent.'
            },
            {
              title: 'McLuhan et la médiologie',
              paragraphs: [
                'Marshall <strong>McLuhan</strong> (Understanding Media, 1964) proposa une vision radicalement différente. Sa formule « le médium est le message » signifie que ce n\'est pas le contenu des médias qui transforme la société, mais le médium lui-même : l\'imprimerie a créé le nationalisme et l\'individualisme, la télévision a créé le « village global ». McLuhan distinguait les médias « chauds » (haute définition, peu participatifs : cinéma, radio) et les médias « froids » (basse définition, participatifs : téléphone, télévision).',
                'Régis <strong>Debray</strong> fonda la médiologie (Cours de médiologie générale, 1991), étude de la transmission culturelle par les médias au sens large (routes, écoles, institutions). Pour Debray, chaque « médiasphère » — logosphère (écriture), graphosphère (imprimerie), vidéosphère (audiovisuel), numérisphère (Internet) — restructure les rapports de pouvoir, les formes de savoir et les modes de croyance.'
              ],
              highlight: '« Le médium est le message » : pour McLuhan, l\'imprimerie a créé le nationalisme, la télévision le « village global ».'
            },
            {
              title: 'Agenda-setting et spirale du silence',
              paragraphs: [
                'La théorie de l\'<strong>agenda-setting</strong> (Maxwell McCombs et Donald Shaw, 1972) montra que les médias ne disent pas aux gens « quoi penser » mais « à quoi penser ». En sélectionnant les sujets qu\'ils couvrent (et en ignorant les autres), les médias structurent les priorités de l\'opinion publique. Ce pouvoir de mise à l\'agenda est particulièrement visible en période électorale.',
                'Elisabeth <strong>Noelle-Neumann</strong> (La Spirale du silence, 1974) montra que les individus qui perçoivent leur opinion comme minoritaire ont tendance à se taire, renforçant l\'impression que l\'opinion dominante (telle que présentée par les médias) est unanime. Ce mécanisme peut créer une « majorité silencieuse » qui n\'ose pas s\'exprimer. Les réseaux sociaux ont à la fois amplifié et complexifié ce phénomène avec les « bulles de filtre » et les « chambres d\'écho ».'
              ],
              highlight: 'Les médias ne disent pas aux gens « quoi penser » mais « à quoi penser » — le pouvoir de mise à l\'agenda est leur influence la plus puissante.'
            }
          ],
          quiz: [
            { q: 'Que signifie « le médium est le message » ?', opts: ['Le contenu est plus important que la forme', 'C\'est le médium lui-même, et non son contenu, qui transforme la société', 'Les médias sont toujours vrais', 'Le message doit être court'], correct: 1, explanation: 'Pour McLuhan, ce n\'est pas le contenu des médias qui transforme la société mais la nature du médium : l\'imprimerie a créé l\'individualisme, la TV le village global.' },
            { q: 'Qu\'est-ce que la théorie du two-step flow ?', opts: ['Les médias influencent directement le public', 'Les messages passent par des leaders d\'opinion avant d\'atteindre le public', 'La communication se fait en deux langues', 'Les médias ont deux étapes de production'], correct: 1, explanation: 'La théorie du two-step flow (Lazarsfeld, 1944) montre que les messages médiatiques sont filtrés et interprétés par des leaders d\'opinion avant d\'atteindre le grand public.' },
            { q: 'Que montre la théorie de l\'agenda-setting ?', opts: ['Les médias mentent toujours', 'Les médias structurent les priorités de l\'opinion publique', 'Les journalistes suivent l\'agenda politique', 'Les médias n\'ont aucune influence'], correct: 1, explanation: 'La théorie de l\'agenda-setting (McCombs et Shaw, 1972) montre que les médias influencent ce à quoi le public pense en sélectionnant les sujets qu\'ils couvrent.' }
          ],
          definitions: [
            { term: 'Agenda-setting', def: 'Pouvoir des médias de structurer les priorités de l\'opinion publique en sélectionnant les sujets qu\'ils couvrent.' },
            { term: 'Two-step flow', def: 'Théorie selon laquelle les messages médiatiques atteignent le public via des leaders d\'opinion qui les filtrent et les interprètent.' },
            { term: 'Village global', def: 'Concept de McLuhan décrivant un monde interconnecté par les médias électroniques où l\'information circule instantanément.' },
            { term: 'Spirale du silence', def: 'Mécanisme par lequel les individus se taisent quand ils perçoivent leur opinion comme minoritaire, renforçant l\'opinion dominante.' },
            { term: 'Médiasphère', def: 'Concept de Debray désignant l\'environnement médiatique dominant d\'une époque (logosphère, graphosphère, vidéosphère, numérisphère).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'McLuhan a prédit le World Wide Web 30 ans avant son invention. En 1962, il décrivait un « réseau global » qui connecterait l\'humanité dans un « village global » instantané.' },
            { front: '💡 Le savais-tu ?', back: 'L\'émission radio War of the Worlds d\'Orson Welles (1938), simulant une invasion martienne, provoqua une panique aux États-Unis — souvent citée comme preuve des effets puissants des médias, bien que la panique ait été exagérée.' },
            { front: '💡 Le savais-tu ?', back: 'Eli Pariser a inventé le terme « bulle de filtre » en 2011 pour décrire comment les algorithmes des réseaux sociaux enferment chaque utilisateur dans un flux d\'informations confirmant ses croyances.' }
          ]
        },
        {
          slug: 'communication-interpersonnelle',
          title: 'Communication interpersonnelle',
          description: 'Communication non verbale, écoute active, assertivité et gestion des conflits.',
          intro: 'La <strong>communication interpersonnelle</strong> est l\'échange direct entre deux personnes ou au sein d\'un petit groupe. Elle mobilise le verbal (les mots) et le non-verbal (gestes, posture, regard, ton de la voix), dont les recherches montrent qu\'il véhicule 60 à 93 % du sens perçu.',
          introHighlight: '<strong>Albert Mehrabian</strong> (1967) a montré que dans la communication émotionnelle, 7 % du sens est véhiculé par les mots, 38 % par le ton de la voix et 55 % par le langage corporel.',
          intro2: '',
          sections: [
            {
              title: 'Communication non verbale',
              paragraphs: [
                'La <strong>communication non verbale</strong> englobe les gestes (kinésique), les expressions faciales, la posture, le regard (oculésique), la distance physique (proxémique), le toucher (haptique) et les caractéristiques vocales non linguistiques (paraverbal : ton, débit, volume, silences). Edward T. Hall (The Hidden Dimension, 1966) a identifié quatre zones proxémiques : intime (0-45 cm), personnelle (45 cm-1,2 m), sociale (1,2-3,6 m) et publique (au-delà de 3,6 m).',
                'Paul <strong>Ekman</strong> a identifié six émotions fondamentales universelles exprimées par les mêmes expressions faciales dans toutes les cultures : joie, tristesse, colère, peur, surprise et dégoût. Le « Facial Action Coding System » (FACS), qu\'il a développé, catalogue 46 unités d\'action musculaire du visage. Ses travaux sur les micro-expressions (expressions faciales involontaires durant 1/25e de seconde) sont utilisés par les services de renseignement et la police.'
              ],
              highlight: 'Edward T. Hall a montré que la distance physique entre interlocuteurs varie selon les cultures : les Méditerranéens parlent deux fois plus près que les Scandinaves.'
            },
            {
              title: 'Écoute active et empathie',
              paragraphs: [
                'L\'<strong>écoute active</strong>, concept développé par Carl Rogers (psychologue humaniste), est une technique de communication consistant à écouter attentivement, reformuler ce que l\'autre a dit et poser des questions ouvertes. Ses quatre composantes sont : l\'attention (écouter sans interrompre), la compréhension (saisir le sens et l\'émotion), le retour (reformuler pour vérifier la compréhension) et la mémorisation (retenir l\'essentiel).',
                'L\'<strong>empathie</strong>, capacité à comprendre et à partager les sentiments d\'autrui, est au cœur de la communication interpersonnelle. Daniel Goleman (Emotional Intelligence, 1995) a montré que l\'intelligence émotionnelle (capacité à percevoir, comprendre et gérer les émotions) est un meilleur prédicteur de succès professionnel que le QI. La communication non violente (CNV), développée par Marshall Rosenberg, propose un cadre en quatre étapes : observation, sentiment, besoin, demande.'
              ],
              highlight: 'Daniel Goleman a montré que l\'intelligence émotionnelle est un meilleur prédicteur de succès professionnel et social que le QI.'
            },
            {
              title: 'Assertivité et gestion des conflits',
              paragraphs: [
                'L\'<strong>assertivité</strong> est la capacité à s\'exprimer et à défendre ses droits et opinions avec respect, sans agressivité ni passivité. Elle se distingue de quatre autres styles de communication : passif (s\'effacer), agressif (s\'imposer par la force), passif-agressif (résister indirectement) et manipulateur (obtenir ce qu\'on veut par la ruse). L\'assertivité utilise le « je » (« Je ressens... ») plutôt que le « tu » accusateur (« Tu es... »).',
                'La <strong>gestion des conflits</strong> interpersonnels passe par cinq stratégies identifiées par Thomas et Kilmann (1974) : la compétition (gagner à tout prix), l\'évitement (fuir le conflit), l\'accommodation (céder), le compromis (chacun fait une concession) et la collaboration (trouver une solution satisfaisante pour tous). La communication non violente (CNV) de Rosenberg propose d\'exprimer ses besoins sans jugement ni accusation, en distinguant observation et interprétation.'
              ],
              highlight: 'La communication non violente (CNV) de Marshall Rosenberg repose sur quatre étapes : observer sans juger, exprimer ses sentiments, identifier ses besoins, formuler une demande.'
            }
          ],
          quiz: [
            { q: 'Selon Mehrabian, quel pourcentage du sens est véhiculé par les mots dans la communication émotionnelle ?', opts: ['7 %', '38 %', '55 %', '93 %'], correct: 0, explanation: 'Selon les recherches de Mehrabian (1967), dans la communication émotionnelle, 7 % du sens est véhiculé par les mots, 38 % par le ton et 55 % par le langage corporel.' },
            { q: 'Combien d\'émotions fondamentales universelles Ekman a-t-il identifiées ?', opts: ['4', '6', '8', '12'], correct: 1, explanation: 'Paul Ekman a identifié six émotions fondamentales universelles : joie, tristesse, colère, peur, surprise et dégoût, exprimées par les mêmes expressions faciales dans toutes les cultures.' },
            { q: 'Quelles sont les quatre étapes de la CNV ?', opts: ['Accusation, justification, compromis, solution', 'Observation, sentiment, besoin, demande', 'Écoute, reformulation, question, conseil', 'Analyse, synthèse, évaluation, décision'], correct: 1, explanation: 'La communication non violente (CNV) de Rosenberg suit quatre étapes : observation (sans jugement), sentiment, besoin et demande claire.' }
          ],
          definitions: [
            { term: 'Communication non verbale', def: 'Ensemble des signaux non linguistiques (gestes, expressions, posture, regard, ton) qui accompagnent et enrichissent la communication verbale.' },
            { term: 'Proxémique', def: 'Étude de l\'usage de l\'espace dans la communication, notamment les distances interpersonnelles.' },
            { term: 'Écoute active', def: 'Technique de communication consistant à écouter attentivement, reformuler et questionner pour montrer sa compréhension.' },
            { term: 'Assertivité', def: 'Capacité à s\'exprimer et à défendre ses droits et opinions avec respect, sans agressivité ni passivité.' },
            { term: 'Communication non violente', def: 'Méthode de communication développée par Marshall Rosenberg, fondée sur l\'expression de ses besoins sans jugement ni accusation.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La règle des 7-38-55 de Mehrabian est souvent mal interprétée. Elle ne s\'applique qu\'à la communication émotionnelle ambiguë (quand les mots contredisent le ton), pas à toute communication.' },
            { front: '💡 Le savais-tu ?', back: 'Paul Ekman a été le consultant scientifique de la série Lie to Me et du film Vice-Versa (Pixar). Ses travaux sur les micro-expressions sont utilisés par le FBI et la CIA pour détecter les mensonges.' },
            { front: '💡 Le savais-tu ?', back: 'Marshall Rosenberg, créateur de la CNV, a utilisé sa méthode pour faciliter des dialogues de paix en Israël-Palestine, au Rwanda et en Colombie.' }
          ]
        },
        {
          slug: 'rhetorique-et-persuasion',
          title: 'Rhétorique et persuasion',
          description: 'Art oratoire, argumentation, persuasion et communication politique.',
          intro: 'La <strong>rhétorique</strong>, art de persuader par le discours, est l\'une des disciplines les plus anciennes de la civilisation occidentale. Fondée par les Grecs il y a 2 500 ans, elle reste au cœur de la communication politique, publicitaire et juridique.',
          introHighlight: '<strong>Aristote</strong> identifiait trois moyens de persuasion : l\'ethos (crédibilité de l\'orateur), le pathos (émotion du public) et le logos (logique du raisonnement).',
          intro2: '',
          sections: [
            {
              title: 'La rhétorique antique',
              paragraphs: [
                '<strong>Aristote</strong> (Rhétorique, IVe siècle av. J.-C.) systématisa l\'art de persuader en identifiant trois preuves : l\'ethos (la crédibilité et le caractère moral de l\'orateur), le pathos (les émotions suscitées chez l\'auditoire) et le logos (la logique de l\'argumentation). Un discours efficace combine ces trois dimensions. Aristote distinguait aussi trois genres : le judiciaire (accuser/défendre), le délibératif (conseiller/déconseiller) et l\'épidictique (louer/blâmer).',
                '<strong>Cicéron</strong> (De Oratore, 55 av. J.-C.) définit les cinq étapes de la composition d\'un discours (canons rhétoriques) : l\'inventio (trouver les arguments), la dispositio (organiser le discours), l\'elocutio (choisir les mots et les figures de style), la memoria (mémoriser) et l\'actio (prononcer avec geste et voix). Ces étapes restent la base de toute formation en communication orale, plaidoirie et discours politique.'
              ],
              highlight: 'Les cinq canons de Cicéron — inventio, dispositio, elocutio, memoria, actio — structurent encore aujourd\'hui la préparation de tout discours.'
            },
            {
              title: 'Persuasion et influence',
              paragraphs: [
                'Robert <strong>Cialdini</strong> (Influence et manipulation, 1984) identifia six principes psychologiques de la persuasion : la réciprocité (on se sent obligé de rendre un service), l\'engagement et la cohérence (on tend à rester fidèle à ses engagements), la preuve sociale (on imite le comportement de la majorité), l\'autorité (on obéit aux experts), la sympathie (on est plus influencé par qui on apprécie) et la rareté (on désire davantage ce qui est rare).',
                'Le <strong>modèle de vraisemblance d\'élaboration</strong> (Petty et Cacioppo, 1986) distingue deux voies de persuasion. La voie centrale mobilise la réflexion et l\'analyse rationnelle des arguments (efficace quand le public est motivé et capable). La voie périphérique s\'appuie sur des indices superficiels (expertise de la source, attractivité, nombre d\'arguments) sans analyse approfondie. La publicité utilise principalement la voie périphérique ; le débat politique, idéalement, la voie centrale.'
              ],
              highlight: 'Les six principes de Cialdini — réciprocité, engagement, preuve sociale, autorité, sympathie, rareté — sont les outils fondamentaux de la persuasion.'
            },
            {
              title: 'Communication politique et storytelling',
              paragraphs: [
                'La <strong>communication politique</strong> utilise massivement les techniques rhétoriques. Le « spin doctoring » (gestion de l\'image et du message politique) est devenu une industrie. Les discours politiques mobilisent l\'anaphore (« I have a dream » de Martin Luther King, « Moi président » de François Hollande), la métaphore, l\'antithèse et l\'appel aux émotions pour créer de l\'adhésion.',
                'Le <strong>storytelling</strong> (communication narrative) est devenu la technique dominante en politique et en entreprise. Raconter une histoire plutôt qu\'aligner des arguments permet de créer une connexion émotionnelle, de simplifier un message complexe et de faciliter la mémorisation. Christian Salmon (Storytelling, 2007) montra comment cette technique, née dans le marketing américain, a envahi la politique et les médias, parfois au détriment de l\'argumentation rationnelle.'
              ],
              highlight: '« I have a dream » de Martin Luther King (1963) est considéré comme le plus grand discours du XXe siècle, combinant anaphore, métaphore et pathos.'
            }
          ],
          quiz: [
            { q: 'Quels sont les trois moyens de persuasion selon Aristote ?', opts: ['Logos, pathos, ethos', 'Raison, émotion, morale', 'Argument, exemple, preuve', 'Introduction, développement, conclusion'], correct: 0, explanation: 'Aristote identifiait trois moyens de persuasion : le logos (logique), le pathos (émotion) et l\'ethos (crédibilité de l\'orateur).' },
            { q: 'Quel principe de Cialdini explique qu\'on désire plus ce qui est rare ?', opts: ['Réciprocité', 'Preuve sociale', 'Rareté', 'Autorité'], correct: 2, explanation: 'Le principe de rareté (Cialdini) explique que les gens désirent davantage ce qui est rare ou en quantité limitée (« édition limitée », « il n\'en reste que 3 »).' },
            { q: 'Qu\'est-ce que le storytelling en communication ?', opts: ['L\'art de raconter des histoires pour persuader et créer une connexion émotionnelle', 'L\'écriture de romans', 'La lecture d\'histoires aux enfants', 'Le théâtre d\'improvisation'], correct: 0, explanation: 'Le storytelling est l\'utilisation de la narration (raconter une histoire) comme technique de communication pour créer une connexion émotionnelle et faciliter la mémorisation du message.' }
          ],
          definitions: [
            { term: 'Rhétorique', def: 'Art de persuader par le discours, fondé par les Grecs anciens, mobilisant ethos, pathos et logos.' },
            { term: 'Ethos', def: 'Crédibilité et caractère moral de l\'orateur, l\'un des trois moyens de persuasion identifiés par Aristote.' },
            { term: 'Pathos', def: 'Appel aux émotions de l\'auditoire, l\'un des trois moyens de persuasion identifiés par Aristote.' },
            { term: 'Preuve sociale', def: 'Principe de persuasion selon lequel les individus tendent à imiter le comportement de la majorité.' },
            { term: 'Storytelling', def: 'Technique de communication utilisant le récit (narration) pour transmettre un message de manière engageante et mémorable.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le discours « I have a dream » de Martin Luther King (1963) n\'était pas entièrement préparé. La partie la plus célèbre (« I have a dream ») a été improvisée lorsque la chanteuse Mahalia Jackson lui cria : « Parle-leur du rêve, Martin ! »' },
            { front: '💡 Le savais-tu ?', back: 'Le premier débat télévisé de l\'histoire (Kennedy vs Nixon, 1960) illustra le pouvoir du non-verbal : les téléspectateurs donnèrent Kennedy gagnant (bronzé, détendu), tandis que les auditeurs radio préférèrent Nixon (arguments plus détaillés).' },
            { front: '💡 Le savais-tu ?', back: 'Robert Cialdini a passé trois ans à s\'infiltrer comme vendeur de voitures, solliciteur de fonds et télévendeur pour observer les techniques de persuasion en action avant d\'écrire Influence et manipulation.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 2 — Journalisme
    // ──────────────────────────────────────────────
    {
      slug: 'journalisme',
      title: 'Journalisme',
      description: 'Histoire de la presse, déontologie, investigation, fact-checking et avenir du journalisme.',
      lessons: [
        {
          slug: 'histoire-de-la-presse',
          title: 'Histoire de la presse',
          description: 'De Gutenberg aux médias numériques : cinq siècles d\'évolution.',
          intro: 'L\'<strong>histoire de la presse</strong> est indissociable de l\'histoire de la démocratie. Chaque innovation technologique — imprimerie, télégraphe, radio, télévision, Internet — a transformé le journalisme et les rapports de pouvoir dans la société.',
          introHighlight: '<strong>L\'invention de l\'imprimerie</strong> par Gutenberg (vers 1450) est la révolution fondatrice : elle permit la diffusion massive des idées et posa les bases de l\'opinion publique.',
          intro2: '',
          sections: [
            { title: 'De l\'imprimerie à la presse industrielle', paragraphs: ['L\'<strong>imprimerie à caractères mobiles</strong>, inventée par Johannes Gutenberg vers 1450, permit la reproduction rapide et bon marché des textes. Les premières gazettes apparurent au XVIIe siècle : la Gazette de Théophraste Renaudot (1631) est considérée comme le premier journal français. Au XVIIIe siècle, la presse devint un acteur politique majeur, Edmund Burke la qualifiant de « quatrième pouvoir ».', 'La <strong>presse industrielle</strong> naquit au XIXe siècle avec la rotative (1843), le télégraphe (1837) et la publicité commerciale. Émile de Girardin lança La Presse (1836) à moitié prix grâce aux revenus publicitaires, inventant le modèle économique qui domine encore les médias. Le tirage de la presse française atteignit son apogée en 1914 avec 10 millions d\'exemplaires quotidiens pour 40 millions d\'habitants.'], highlight: 'La Gazette de Théophraste Renaudot (1631) est considérée comme le premier journal français, publié avec l\'autorisation du roi Louis XIII.' },
            { title: 'L\'ère audiovisuelle', paragraphs: ['La <strong>radio</strong> apparut dans les foyers dans les années 1920. En France, Radio Tour Eiffel (1921) fut la première station publique. La radio transforma le rapport à l\'information : immédiateté, émotion de la voix, accessibilité aux illettrés. Le général de Gaulle l\'utilisa magistralement avec l\'Appel du 18 juin 1940 depuis la BBC.', 'La <strong>télévision</strong>, qui se généralisa dans les années 1950-1960, devint le médium dominant. Le journal télévisé (JT de 20 heures en France) structura le rythme informationnel national. La guerre du Vietnam (1965-1975) fut la première « guerre du salon » : les images de combats diffusées chaque soir influencèrent l\'opinion publique américaine et contribuèrent au retrait.'], highlight: 'La guerre du Vietnam fut la première « guerre du salon » : les images télévisées influencèrent directement l\'opinion publique et la politique américaine.' },
            { title: 'L\'ère numérique', paragraphs: ['L\'arrivée d\'<strong>Internet</strong> dans les années 1990, puis des réseaux sociaux dans les années 2000, a bouleversé le journalisme. La presse papier a perdu 70 % de ses revenus publicitaires en vingt ans au profit de Google et Meta. Les rédactions ont été restructurées et réduites. Le temps réel (live, push notifications) a remplacé le cycle quotidien.', 'Les <strong>réseaux sociaux</strong> (Facebook, Twitter/X, Instagram, TikTok) sont devenus la première source d\'information pour les 18-30 ans. Chacun peut publier, partager et commenter sans intermédiation journalistique. Cette désintermédiation a démocratisé la parole mais aussi favorisé la désinformation, les théories du complot et la polarisation. Le modèle économique du journalisme est en crise : les abonnements numériques ne compensent pas la chute des revenus papier et publicitaires.'], highlight: 'En France, la presse écrite a perdu 70 % de ses revenus publicitaires en vingt ans au profit des plateformes numériques (Google, Meta).' }
          ],
          quiz: [
            { q: 'Qui a inventé l\'imprimerie à caractères mobiles ?', opts: ['Théophraste Renaudot', 'Johannes Gutenberg', 'Émile de Girardin', 'Marconi'], correct: 1, explanation: 'Johannes Gutenberg a inventé l\'imprimerie à caractères mobiles vers 1450, révolutionnant la diffusion du savoir et posant les bases de la presse.' },
            { q: 'Quel modèle économique Émile de Girardin a-t-il inventé ?', opts: ['L\'abonnement', 'Le journal financé par la publicité', 'La vente à la criée', 'Le journal gratuit en ligne'], correct: 1, explanation: 'Girardin lança La Presse en 1836 à moitié prix grâce aux revenus publicitaires, inventant le modèle qui domine encore les médias.' },
            { q: 'Quelle est la première source d\'information des 18-30 ans ?', opts: ['La presse papier', 'La radio', 'La télévision', 'Les réseaux sociaux'], correct: 3, explanation: 'Les réseaux sociaux sont devenus la première source d\'information pour les 18-30 ans, devant la télévision, la radio et la presse écrite.' }
          ],
          definitions: [
            { term: 'Quatrième pouvoir', def: 'Expression désignant la presse comme contre-pouvoir face aux pouvoirs exécutif, législatif et judiciaire.' },
            { term: 'Rotative', def: 'Presse d\'imprimerie à cylindres rotatifs permettant l\'impression rapide de grands tirages, inventée en 1843.' },
            { term: 'Désintermédiation', def: 'Disparition des intermédiaires traditionnels (journalistes, éditeurs) entre la source d\'information et le public.' },
            { term: 'Modèle freemium', def: 'Modèle économique offrant un contenu de base gratuit et un contenu premium payant (abonnement).' },
            { term: 'Push notification', def: 'Alerte envoyée en temps réel sur le smartphone de l\'utilisateur par une application de média.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La première Bible imprimée par Gutenberg (vers 1455) est l\'un des livres les plus précieux au monde. Il en reste 49 exemplaires, dont certains valent plus de 30 millions d\'euros.' },
            { front: '💡 Le savais-tu ?', back: 'Le New York Times a été fondé en 1851 et a remporté 132 prix Pulitzer, plus que tout autre journal au monde. Il a été le premier à réussir sa transition numérique avec 10 millions d\'abonnés en ligne.' },
            { front: '💡 Le savais-tu ?', back: 'Le journal Le Monde a été fondé par Hubert Beuve-Méry le 19 décembre 1944, à la demande du général de Gaulle, pour remplacer Le Temps, compromis par la collaboration.' }
          ]
        },
        {
          slug: 'deontologie-journalistique',
          title: 'Déontologie journalistique',
          description: 'Éthique, chartes, sources, secret professionnel et indépendance.',
          intro: 'La <strong>déontologie journalistique</strong> est l\'ensemble des règles éthiques que les journalistes s\'imposent pour garantir la qualité, la fiabilité et l\'indépendance de l\'information. Ces principes, codifiés depuis un siècle, sont plus que jamais nécessaires à l\'ère de la désinformation.',
          introHighlight: '<strong>La Charte de Munich</strong> (1971), adoptée par les syndicats de journalistes européens, est le texte de référence de la déontologie journalistique en Europe.',
          intro2: '',
          sections: [
            { title: 'Principes fondamentaux', paragraphs: ['Les quatre piliers de la déontologie journalistique sont la <strong>vérité</strong> (rechercher, vérifier et rapporter les faits avec exactitude), l\'<strong>indépendance</strong> (ne subir aucune pression des pouvoirs politiques, économiques ou publicitaires), l\'<strong>équité</strong> (traiter les sujets de manière équilibrée et donner la parole aux différentes parties) et la <strong>responsabilité</strong> (mesurer l\'impact de ses publications sur les individus et la société).', 'La <strong>protection des sources</strong> est un principe sacré du journalisme. Un journaliste ne révèle jamais l\'identité d\'une source qui a demandé l\'anonymat, même sous pression judiciaire. Ce principe, reconnu par la Cour européenne des droits de l\'homme comme « pierre angulaire de la liberté de la presse », est protégé par la loi française depuis 2010 (loi Dati).'], highlight: 'La protection des sources est considérée par la CEDH comme la « pierre angulaire de la liberté de la presse ».' },
            { title: 'Les chartes déontologiques', paragraphs: ['La <strong>Charte de Munich</strong> (1971) énonce dix devoirs et cinq droits du journaliste. Parmi les devoirs : respecter la vérité, rectifier les informations inexactes, garder le secret des sources, ne pas confondre journalisme et publicité, ne jamais plagier. Parmi les droits : libre accès à l\'information, liberté d\'investigation, protection des sources, clause de conscience (refuser de rédiger un article contraire à ses convictions).', 'Chaque rédaction se dote souvent d\'une <strong>charte éditoriale</strong> propre. Le New York Times interdit à ses journalistes toute activité politique et tout cadeau de plus de 25 dollars. Le Guardian garantit l\'indépendance éditoriale par une fondation (Scott Trust). En France, les sociétés de rédacteurs donnent un pouvoir de codécision aux journalistes sur les orientations de leur média.'], highlight: 'La clause de conscience permet à un journaliste de quitter son média avec indemnités s\'il estime que la ligne éditoriale a changé de manière inacceptable.' },
            { title: 'Défis éthiques contemporains', paragraphs: ['L\'ère numérique pose des <strong>défis éthiques</strong> inédits. La course au clic (« clickbait ») pousse à des titres sensationnalistes. Le journalisme de données (data journalism) pose des questions de vie privée. Les deepfakes menacent l\'authenticité des images et des vidéos. L\'usage de l\'intelligence artificielle pour rédiger des articles (GPT) soulève des questions d\'attribution et de responsabilité.', 'Le <strong>fact-checking</strong> (vérification des faits) est devenu une discipline à part entière. Les rédactions dédiées (Les Décodeurs au Monde, Désintox à Libération, AFP Factuel) et les plateformes collaboratives (Snopes, PolitiFact, Full Fact) vérifient les déclarations politiques, les rumeurs virales et les images truquées. L\'Union européenne finance des projets de lutte contre la désinformation, mais le volume de fausses informations dépasse largement les capacités de vérification.'], highlight: 'Les Décodeurs (Le Monde), AFP Factuel et PolitiFact sont parmi les principales organisations de fact-checking au monde.' }
          ],
          quiz: [
            { q: 'En quelle année la Charte de Munich a-t-elle été adoptée ?', opts: ['1948', '1958', '1971', '2000'], correct: 2, explanation: 'La Charte de Munich a été adoptée en 1971 par les syndicats de journalistes européens, énonçant dix devoirs et cinq droits du journaliste.' },
            { q: 'Qu\'est-ce que la clause de conscience ?', opts: ['Le droit de mentir', 'Le droit de quitter un média si la ligne éditoriale change', 'L\'obligation de vérifier les faits', 'Le droit de refuser de travailler la nuit'], correct: 1, explanation: 'La clause de conscience permet à un journaliste de quitter son média avec les indemnités de licenciement s\'il estime que la ligne éditoriale a changé de manière incompatible avec ses convictions.' },
            { q: 'Qu\'est-ce que le fact-checking ?', opts: ['La vérification des sources financières', 'La vérification systématique de l\'exactitude des faits affirmés', 'La correction orthographique', 'La validation des images'], correct: 1, explanation: 'Le fact-checking est la vérification systématique de l\'exactitude des faits affirmés par les personnalités publiques, les médias et les réseaux sociaux.' }
          ],
          definitions: [
            { term: 'Déontologie journalistique', def: 'Ensemble des règles éthiques s\'imposant aux journalistes pour garantir la qualité, la fiabilité et l\'indépendance de l\'information.' },
            { term: 'Protection des sources', def: 'Principe selon lequel un journaliste ne révèle jamais l\'identité d\'une source ayant demandé l\'anonymat.' },
            { term: 'Clause de conscience', def: 'Droit d\'un journaliste de quitter son média avec indemnités en cas de changement de ligne éditoriale incompatible avec ses convictions.' },
            { term: 'Fact-checking', def: 'Discipline journalistique consistant à vérifier systématiquement l\'exactitude des faits affirmés dans le débat public.' },
            { term: 'Clickbait', def: 'Technique de titraille sensationnaliste visant à maximiser les clics au détriment de la qualité informative.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Watergate (1972-1974), enquête du Washington Post qui fit tomber le président Nixon, est le cas d\'école du journalisme d\'investigation. La source anonyme « Gorge profonde » ne fut identifiée qu\'en 2005 : c\'était Mark Felt, numéro deux du FBI.' },
            { front: '💡 Le savais-tu ?', back: 'Reporters sans frontières (RSF), fondée en 1985 à Montpellier, classe chaque année la liberté de la presse dans 180 pays. En 2025, la Norvège est première et l\'Érythrée dernière.' },
            { front: '💡 Le savais-tu ?', back: 'En 2024, plus de 500 journalistes étaient emprisonnés dans le monde (Chine, Birmanie, Iran, Turquie en tête), et 45 ont été tués dans l\'exercice de leur métier.' }
          ]
        },
        {
          slug: 'journalisme-investigation',
          title: 'Journalisme d\'investigation',
          description: 'Méthodes d\'enquête, lanceurs d\'alerte, Panama Papers et journalisme de données.',
          intro: 'Le <strong>journalisme d\'investigation</strong> est la forme la plus ambitieuse du métier : des semaines ou des mois d\'enquête pour révéler des affaires cachées d\'intérêt public. Du Watergate aux Panama Papers, il est le gardien de la démocratie.',
          introHighlight: '<strong>Les Panama Papers</strong> (2016), plus grande fuite de documents de l\'histoire (11,5 millions de fichiers), ont impliqué 380 journalistes de 80 pays et révélé l\'évasion fiscale de dirigeants du monde entier.',
          intro2: '',
          sections: [
            { title: 'Méthodes d\'enquête', paragraphs: ['Le journaliste d\'investigation utilise des <strong>méthodes rigoureuses</strong> : recoupement systématique des sources (au minimum deux sources indépendantes pour chaque fait), analyse de documents (archives, bilans financiers, registres publics), interviews de témoins et d\'experts, et observation de terrain. La règle d\'or est la vérification : aucune information n\'est publiée sans preuve solide.', 'Le <strong>journalisme de données</strong> (data journalism) utilise des outils informatiques pour analyser de grandes quantités de données publiques (marchés publics, déclarations de patrimoine, données sanitaires). L\'ICIJ (International Consortium of Investigative Journalists) coordonne des enquêtes collaboratives internationales impliquant des centaines de journalistes. Les outils OSINT (Open Source Intelligence) — analyse d\'images satellites, géolocalisation, réseaux sociaux — complètent l\'arsenal.'], highlight: 'L\'ICIJ (International Consortium of Investigative Journalists) coordonne les plus grandes enquêtes mondiales, des Panama Papers aux Pandora Papers.' },
            { title: 'Lanceurs d\'alerte', paragraphs: ['Les <strong>lanceurs d\'alerte</strong> (whistleblowers) sont des individus qui révèlent des informations confidentielles d\'intérêt public, souvent au péril de leur carrière et de leur liberté. Edward Snowden (NSA, surveillance de masse, 2013) et Chelsea Manning (WikiLeaks, câbles diplomatiques, 2010) sont les plus célèbres. Antoine Deltour, lanceur d\'alerte luxembourgeois des LuxLeaks (2014), a révélé les accords fiscaux secrets entre le Luxembourg et des multinationales.', 'La protection juridique des lanceurs d\'alerte s\'est renforcée. La <strong>directive européenne</strong> de 2019 impose aux entreprises de plus de 50 salariés et aux administrations publiques de mettre en place des canaux de signalement internes. La loi Sapin II (France, 2016) définit un statut protecteur pour les lanceurs d\'alerte. Aux États-Unis, le Whistleblower Protection Act (1989) protège les fonctionnaires fédéraux.'], highlight: 'Edward Snowden a révélé en 2013 que la NSA surveillait les communications de milliards de personnes dans le monde, y compris des dirigeants alliés.' },
            { title: 'Grandes enquêtes contemporaines', paragraphs: ['Les <strong>Panama Papers</strong> (2016, cabinet Mossack Fonseca) ont révélé 214 000 sociétés offshore impliquant des chefs d\'État (Islande, Pakistan), des sportifs et des milliardaires. Les Pandora Papers (2021, 11,9 millions de documents) ont élargi ces révélations à 35 dirigeants en exercice. Ces enquêtes ont entraîné des démissions, des poursuites judiciaires et des réformes législatives dans le monde entier.', 'En France, Mediapart (fondé par Edwy Plenel en 2008) s\'est imposé comme le média d\'investigation de référence. L\'affaire Cahuzac (2012, ministre du Budget dissimulant un compte en Suisse) et l\'affaire Benalla (2018, garde du corps de l\'Élysée) illustrent l\'impact du journalisme d\'investigation sur la vie politique. Le modèle économique de Mediapart (100 % abonnements, sans publicité) garantit son indépendance.'], highlight: 'Les Panama Papers ont entraîné la démission du Premier ministre islandais et la récupération de plus de 1,2 milliard d\'euros d\'impôts éludés dans le monde.' }
          ],
          quiz: [
            { q: 'Combien de documents contenaient les Panama Papers ?', opts: ['100 000', '1 million', '11,5 millions', '100 millions'], correct: 2, explanation: 'Les Panama Papers contenaient 11,5 millions de fichiers (2,6 téraoctets de données), la plus grande fuite de documents confidentiels de l\'histoire à cette date.' },
            { q: 'Qu\'a révélé Edward Snowden en 2013 ?', opts: ['L\'évasion fiscale de dirigeants', 'La surveillance de masse par la NSA', 'La corruption olympique', 'Les émissions de VW'], correct: 1, explanation: 'Edward Snowden, ancien contractuel de la NSA, a révélé en 2013 les programmes de surveillance de masse des communications mondiales par les agences de renseignement américaines.' },
            { q: 'Quel est le modèle économique de Mediapart ?', opts: ['Publicité uniquement', '100 % abonnements, sans publicité', 'Financement public', 'Dons'], correct: 1, explanation: 'Mediapart est financé à 100 % par les abonnements de ses lecteurs, sans aucune publicité, garantissant son indépendance éditoriale.' }
          ],
          definitions: [
            { term: 'Journalisme d\'investigation', def: 'Forme de journalisme consistant en des enquêtes approfondies pour révéler des informations cachées d\'intérêt public.' },
            { term: 'Lanceur d\'alerte', def: 'Individu qui révèle des informations confidentielles d\'intérêt public, souvent au péril de sa carrière ou de sa liberté.' },
            { term: 'OSINT', def: 'Open Source Intelligence : techniques de renseignement utilisant des sources ouvertes (images satellites, réseaux sociaux, registres publics).' },
            { term: 'Data journalism', def: 'Journalisme utilisant l\'analyse de grandes quantités de données pour révéler des tendances, des anomalies ou des scandales.' },
            { term: 'ICIJ', def: 'International Consortium of Investigative Journalists : réseau mondial de journalistes d\'investigation coordonnant des enquêtes transnationales.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le cabinet Mossack Fonseca (Panama Papers) a fermé ses portes en 2018 après le scandale. Ses deux fondateurs ont été arrêtés puis acquittés au Panama, mais des procédures continuent dans 80 pays.' },
            { front: '💡 Le savais-tu ?', back: 'Daphne Caruana Galizia, journaliste maltaise qui enquêtait sur la corruption liée aux Panama Papers, a été assassinée par une voiture piégée le 16 octobre 2017. Son meurtre a provoqué une crise politique à Malte.' },
            { front: '💡 Le savais-tu ?', back: 'Mediapart, fondé en 2008 par Edwy Plenel avec 3 millions d\'euros, compte aujourd\'hui 220 000 abonnés et a révélé plus de 100 affaires majeures en 15 ans.' }
          ]
        },
        {
          slug: 'photojournalisme',
          title: 'Photojournalisme',
          description: 'L\'image comme témoignage : grandes photographies, éthique et impact.',
          intro: 'Le <strong>photojournalisme</strong> raconte l\'actualité par l\'image. Des tranchées de la Première Guerre mondiale aux conflits contemporains, les photographies de presse ont le pouvoir unique de témoigner, d\'émouvoir et de changer le cours de l\'histoire.',
          introHighlight: '<strong>« Une image vaut mille mots »</strong> : certaines photographies ont littéralement changé le cours de l\'histoire en influençant l\'opinion publique et les décisions politiques.',
          intro2: '',
          sections: [
            { title: 'Histoire du photojournalisme', paragraphs: ['Le <strong>photojournalisme</strong> naquit avec la guerre de Crimée (Roger Fenton, 1855) et la guerre de Sécession (Mathew Brady, 1861-1865), premières guerres photographiées. Mais c\'est l\'invention du Leica (1925), appareil compact 35 mm, qui révolutionna la profession en permettant des prises de vue discrètes et mobiles. Robert Capa, Henri Cartier-Bresson, David Seymour et George Rodger fondèrent l\'agence Magnum Photos en 1947, modèle de coopérative de photographes.', 'Les <strong>grandes agences</strong> (AFP, Reuters, AP) et les agences photographiques (Magnum, VII, Getty Images) diffusent des millions d\'images par an. Le magazine Life (1936-2000) fut le temple du photojournalisme américain, publiant les images les plus marquantes du XXe siècle. En France, Paris Match (« Le poids des mots, le choc des photos ») joua un rôle similaire.'], highlight: 'L\'agence Magnum Photos, fondée en 1947 par Capa, Cartier-Bresson et d\'autres, est la plus prestigieuse coopérative de photographes au monde.' },
            { title: 'Images qui ont changé le monde', paragraphs: ['Certaines photographies ont eu un <strong>impact politique</strong> majeur. La petite fille au napalm (Nick Ut, 1972) accéléra l\'opposition à la guerre du Vietnam. L\'homme de Tian\'anmen (Jeff Widener, 1989) devint le symbole de la résistance face à la tyrannie. Le corps d\'Aylan Kurdi, enfant syrien échoué sur une plage turque (Nilüfer Demir, 2015), secoua l\'opinion européenne sur la crise des réfugiés.', 'L\'<strong>éthique</strong> du photojournalisme pose des questions fondamentales. Doit-on photographier la souffrance ? Publier des images choquantes ? Le photographe Kevin Carter, prix Pulitzer pour sa photo d\'un enfant soudanais guetté par un vautour (1993), se suicida peu après, hanté par la question : « Pourquoi n\'as-tu pas aidé cet enfant ? » La mise en scène et la retouche sont strictement interdites par les codes déontologiques.'], highlight: 'La photo de la petite fille au napalm (Nick Ut, 1972) contribua à retourner l\'opinion publique américaine contre la guerre du Vietnam.' },
            { title: 'Le photojournalisme à l\'ère numérique', paragraphs: ['L\'ère numérique a <strong>démocratisé</strong> la prise de vue : 1,8 milliard de photos sont partagées chaque jour sur les réseaux sociaux. Les témoins d\'événements (« citizen journalists ») captent souvent les premières images avant les professionnels. Les vidéos de George Floyd (2020), filmées par une adolescente de 17 ans, ont déclenché un mouvement mondial pour la justice raciale.', 'Le photojournalisme professionnel est menacé par la <strong>précarisation</strong> (baisse des tarifs, disparition des magazines) et les deepfakes (manipulation d\'images par IA). Les organisations comme World Press Photo (prix annuel depuis 1955) et Visa pour l\'image (festival de Perpignan) défendent la profession. La vérification de l\'authenticité des images (reverse image search, analyse des métadonnées) est devenue une compétence essentielle.'], highlight: '1,8 milliard de photos sont partagées chaque jour sur les réseaux sociaux, posant un défi inédit de vérification de l\'authenticité.' }
          ],
          quiz: [
            { q: 'Qui a fondé l\'agence Magnum Photos ?', opts: ['Helmut Newton', 'Robert Capa et Henri Cartier-Bresson', 'Richard Avedon', 'Sebastião Salgado'], correct: 1, explanation: 'L\'agence Magnum Photos a été fondée en 1947 par Robert Capa, Henri Cartier-Bresson, David Seymour et George Rodger.' },
            { q: 'Quelle photo contribua à retourner l\'opinion contre la guerre du Vietnam ?', opts: ['L\'homme de Tian\'anmen', 'La petite fille au napalm', 'Le débarquement de Normandie', 'Le drapeau d\'Iwo Jima'], correct: 1, explanation: 'La photo de Kim Phúc, enfant brûlée au napalm, prise par Nick Ut en 1972, contribua à retourner l\'opinion publique américaine contre la guerre du Vietnam.' },
            { q: 'Combien de photos sont partagées par jour sur les réseaux sociaux ?', opts: ['100 millions', '500 millions', '1,8 milliard', '10 milliards'], correct: 2, explanation: 'Environ 1,8 milliard de photos sont partagées chaque jour sur les réseaux sociaux, un volume qui pose des défis majeurs de vérification.' }
          ],
          definitions: [
            { term: 'Photojournalisme', def: 'Discipline journalistique utilisant la photographie pour raconter l\'actualité et témoigner des événements.' },
            { term: 'Magnum Photos', def: 'Coopérative de photographes fondée en 1947, la plus prestigieuse agence photographique au monde.' },
            { term: 'Citizen journalist', def: 'Citoyen ordinaire qui capte et diffuse des images ou des informations d\'actualité, souvent avant les professionnels.' },
            { term: 'World Press Photo', def: 'Prix annuel de photojournalisme décerné depuis 1955, récompensant les meilleures photographies de presse de l\'année.' },
            { term: 'Reverse image search', def: 'Technique de vérification permettant de retrouver l\'origine et le contexte d\'une image en la recherchant sur Internet.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Robert Capa a photographié le Débarquement de Normandie (6 juin 1944) au milieu des balles. Sur 106 photos prises, seules 11 ont survécu à une erreur de développement en laboratoire — des images parmi les plus célèbres de l\'histoire.' },
            { front: '💡 Le savais-tu ?', back: 'Henri Cartier-Bresson, cofondateur de Magnum, a inventé le concept de « l\'instant décisif » : le moment unique où les éléments visuels s\'alignent pour créer une image parfaite.' },
            { front: '💡 Le savais-tu ?', back: 'Kim Phúc, la « petite fille au napalm » de 1972, a survécu et est devenue ambassadrice de bonne volonté de l\'UNESCO. Elle vit aujourd\'hui au Canada et milite pour la paix.' }
          ]
        },
        {
          slug: 'avenir-du-journalisme',
          title: 'Avenir du journalisme',
          description: 'Intelligence artificielle, podcasts, newsletters et nouveaux modèles économiques.',
          intro: 'Le <strong>journalisme</strong> traverse une mutation comparable à l\'invention de l\'imprimerie. L\'intelligence artificielle, les podcasts, les newsletters et les nouveaux modèles économiques redéfinissent la profession et ses pratiques.',
          introHighlight: '<strong>Les newsletters</strong> (Substack, Beehiiv) et les podcasts connaissent une croissance explosive, créant un journalisme individuel et direct, sans intermédiation.',
          intro2: '',
          sections: [
            { title: 'Intelligence artificielle et journalisme', paragraphs: ['L\'<strong>IA générative</strong> (ChatGPT, Claude, Gemini) transforme le journalisme. Elle peut rédiger des brèves, résumer des documents, transcrire des interviews et analyser des données. L\'AP (Associated Press) utilise l\'IA pour rédiger des articles financiers et sportifs depuis 2014 (3 700 articles automatisés par trimestre). Le Washington Post a développé Heliograf, robot rédacteur qui a produit 850 articles pendant les JO de Rio (2016).', 'Les <strong>risques</strong> sont réels : génération de fausses informations convaincantes, remplacement de journalistes, perte de la vérification humaine, homogénéisation des contenus. Les rédactions développent des chartes d\'utilisation de l\'IA, distinguant les tâches automatisables (agrégation, traduction, transcription) des tâches réservées aux humains (investigation, analyse, opinion, contact avec les sources).'], highlight: 'L\'Associated Press génère 3 700 articles automatisés par trimestre grâce à l\'IA, principalement des résultats financiers et sportifs.' },
            { title: 'Podcasts et newsletters', paragraphs: ['Le <strong>podcast</strong> est devenu le format dominant de l\'audio numérique : 500 millions d\'auditeurs dans le monde en 2025. Le journalisme podcast offre profondeur, intimité et liberté de format. Le Daily (New York Times, 4 millions d\'écoutes par jour), Serial (premier podcast à remporter un Peabody Award en 2014) et France Inter\'s L\'Heure du crime illustrent la diversité du genre.', 'Les <strong>newsletters</strong> individuelles, portées par des plateformes comme Substack (35 millions d\'abonnés actifs), permettent à des journalistes de créer leur propre média. Le modèle est simple : contenu gratuit + contenu premium payant. Des journalistes stars comme Matt Taibbi, Emily Atkin ou Juliette Garside gagnent des centaines de milliers de dollars par an. Ce modèle de « journaliste-entrepreneur » redéfinit la profession.'], highlight: 'Le podcast The Daily du New York Times est écouté par 4 millions de personnes par jour, plus que la plupart des journaux télévisés.' },
            { title: 'Nouveaux modèles économiques', paragraphs: ['Le modèle publicitaire traditionnel s\'effondrant, les médias explorent de <strong>nouveaux modèles</strong>. L\'abonnement numérique (paywall) est le plus répandu : le New York Times (10 millions d\'abonnés), le Financial Times et Le Monde ont réussi cette transition. Le modèle fondation (Guardian, soutenu par le Scott Trust) et le modèle coopératif (Mediapart, Les Jours) garantissent l\'indépendance.', 'Les <strong>modèles émergents</strong> incluent le financement participatif (Mediapart, Tortoise Media), les événements (conférences, festivals : Médias en Seine, Les Assises du Journalisme), la diversification (podcasts premium, livres, formations) et les programmes de fidélité. La philanthropie médiatique (Bill & Melinda Gates Foundation, Pierre Omidyar) finance le journalisme d\'intérêt public dans les pays en développement.'], highlight: 'Le New York Times a réussi sa transition numérique : 10 millions d\'abonnés numériques en 2025, générant plus de revenus que le journal papier.' }
          ],
          quiz: [
            { q: 'Combien d\'articles automatisés l\'AP produit-elle par trimestre grâce à l\'IA ?', opts: ['500', '1 500', '3 700', '10 000'], correct: 2, explanation: 'L\'Associated Press produit environ 3 700 articles automatisés par trimestre grâce à l\'IA, principalement des résultats financiers trimestriels et des scores sportifs.' },
            { q: 'Combien d\'auditeurs de podcasts y a-t-il dans le monde en 2025 ?', opts: ['100 millions', '300 millions', '500 millions', '1 milliard'], correct: 2, explanation: 'Le podcast compte environ 500 millions d\'auditeurs dans le monde en 2025, un chiffre en croissance rapide.' },
            { q: 'Quel média a 10 millions d\'abonnés numériques ?', opts: ['Le Monde', 'Le Guardian', 'Le New York Times', 'Le Washington Post'], correct: 2, explanation: 'Le New York Times a atteint 10 millions d\'abonnés numériques, faisant de lui le plus grand succès de la transition numérique de la presse.' }
          ],
          definitions: [
            { term: 'IA générative', def: 'Intelligence artificielle capable de produire du texte, des images ou du son original à partir d\'instructions (ChatGPT, Claude, Midjourney).' },
            { term: 'Podcast', def: 'Contenu audio numérique téléchargeable ou diffusé en streaming, souvent sous forme de série épisodique.' },
            { term: 'Newsletter', def: 'Lettre d\'information envoyée par courriel à des abonnés, souvent rédigée par un journaliste individuel sur une plateforme comme Substack.' },
            { term: 'Paywall', def: 'Système de barrière de paiement limitant l\'accès au contenu en ligne aux abonnés payants.' },
            { term: 'Journaliste-entrepreneur', def: 'Journaliste créant son propre média (newsletter, podcast) et gérant son modèle économique de manière indépendante.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le premier podcast, « Daily Source Code » d\'Adam Curry (2004), a donné son nom au format. Le mot « podcast » est un mot-valise de « iPod » et « broadcast ».' },
            { front: '💡 Le savais-tu ?', back: 'Substack a été fondée en 2017 par Chris Best, Hamish McKenzie et Jairaj Sethi. La plateforme héberge plus de 20 000 newsletters payantes et verse des millions de dollars aux auteurs.' },
            { front: '💡 Le savais-tu ?', back: 'Le Guardian est détenu par le Scott Trust, fondation créée en 1936 pour garantir l\'indépendance éditoriale du journal. Le Guardian n\'a pas d\'actionnaire et ne sera jamais vendu.' }
          ]
        }
      ]
    },
    {
      slug: 'medias-numeriques',
      title: 'Médias numériques',
      description: 'Comprendre les plateformes, les algorithmes et les enjeux de l\'information à l\'ère digitale.',
      lessons: [
        {
          slug: 'histoire-internet',
          title: 'Histoire d\'Internet et du Web',
          description: 'De l\'ARPANET au Web 3.0 : les grandes étapes de la révolution numérique.',
          intro: 'Internet est né dans les années 1960 comme un projet militaire américain avant de devenir le réseau mondial qui connecte aujourd\'hui plus de cinq milliards de personnes. Cette évolution fulgurante a transformé la communication, le commerce, la culture et la politique à une échelle sans précédent dans l\'histoire humaine.',
          introHighlight: 'Le 29 octobre 1969, le premier message envoyé sur l\'ARPANET entre l\'UCLA et Stanford fut le mot « LOGIN », mais le système planta après les deux premières lettres : seul « LO » fut transmis.',
          intro2: '',
          sections: [
            {
              title: 'Des origines militaires au réseau civil',
              paragraphs: [
                'L\'ARPANET (Advanced Research Projects Agency Network) fut développé par le département de la Défense américain pour créer un réseau de communication résistant à une attaque nucléaire. Le concept de commutation par paquets, imaginé par Paul Baran et Donald Davies indépendamment, permettait de fragmenter les messages en petits blocs acheminés par des routes différentes, assurant ainsi la résilience du réseau.',
                'Dans les années 1970, le protocole TCP/IP, conçu par Vinton Cerf et Robert Kahn, devint le langage universel permettant à des réseaux hétérogènes de communiquer entre eux. L\'adoption de ce protocole en 1983 marqua la véritable naissance d\'Internet. Le réseau s\'étendit progressivement aux universités, puis aux entreprises et enfin au grand public avec l\'apparition des premiers fournisseurs d\'accès commerciaux au début des années 1990.'
              ],
              highlight: 'Le protocole TCP/IP, adopté en 1983, reste aujourd\'hui le fondement technique d\'Internet.'
            },
            {
              title: 'L\'invention du World Wide Web',
              paragraphs: [
                'En 1989, Tim Berners-Lee, chercheur au CERN à Genève, proposa un système d\'hypertexte pour faciliter le partage d\'informations entre scientifiques. Il développa les trois piliers du Web : le langage HTML pour structurer les pages, le protocole HTTP pour les transférer et le système d\'URL pour les adresser. Le premier site web fut mis en ligne le 20 décembre 1990.',
                'Le navigateur Mosaic, créé en 1993 par Marc Andreessen au NCSA, démocratisa l\'accès au Web en offrant une interface graphique intuitive capable d\'afficher images et texte sur la même page. Cette innovation déclencha une croissance exponentielle : de 130 sites web en 1993, on passa à plus de 100 000 en 1996. La « bulle Internet » des années 1998-2000 témoigna de l\'enthousiasme démesuré des investisseurs pour ce nouveau médium.'
              ],
              highlight: 'Tim Berners-Lee rendit le Web libre de droits en 1993, refusant de breveter son invention.'
            },
            {
              title: 'Du Web 2.0 aux perspectives du Web 3.0',
              paragraphs: [
                'Le Web 2.0, concept popularisé par Tim O\'Reilly en 2004, désigne le passage d\'un web statique de publication à un web participatif et social. Les blogs, wikis, réseaux sociaux et plateformes de partage de contenus transformèrent les internautes de simples consommateurs en producteurs d\'information. Wikipédia, Facebook, YouTube et Twitter incarnèrent cette révolution de la production collaborative.',
                'Le Web 3.0, encore en cours de définition, repose sur des technologies comme la blockchain, l\'intelligence artificielle et le web sémantique. Ses partisans promettent une décentralisation des données, une meilleure protection de la vie privée et des expériences plus personnalisées. Cependant, les critiques soulignent les défis énergétiques, les risques de spéculation financière et les questions de gouvernance que soulèvent ces technologies émergentes.'
              ],
              highlight: 'Le Web 2.0 a fait de chaque internaute un producteur potentiel de contenu.'
            }
          ],
          quiz: [
            {
              q: 'Quel protocole, adopté en 1983, est considéré comme le fondement technique d\'Internet ?',
              opts: ['FTP', 'TCP/IP', 'HTTP', 'SMTP'],
              correct: 1,
              explanation: 'Le protocole TCP/IP, conçu par Vinton Cerf et Robert Kahn, a été adopté en 1983 et reste le fondement technique d\'Internet.'
            },
            {
              q: 'Qui est l\'inventeur du World Wide Web ?',
              opts: ['Marc Andreessen', 'Vinton Cerf', 'Tim Berners-Lee', 'Steve Jobs'],
              correct: 2,
              explanation: 'Tim Berners-Lee, chercheur au CERN, a inventé le World Wide Web en 1989.'
            },
            {
              q: 'Quel concept désigne le passage vers un web participatif et social ?',
              opts: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'Web sémantique'],
              correct: 1,
              explanation: 'Le Web 2.0, concept popularisé par Tim O\'Reilly en 2004, désigne le passage vers un web participatif et social.'
            }
          ],
          definitions: [
            { term: 'ARPANET', def: 'Premier réseau informatique à commutation de paquets, ancêtre d\'Internet, développé par le département de la Défense américain dans les années 1960.' },
            { term: 'TCP/IP', def: 'Ensemble de protocoles de communication permettant l\'interconnexion de réseaux informatiques hétérogènes, fondement technique d\'Internet.' },
            { term: 'HTML', def: 'HyperText Markup Language, langage de balisage utilisé pour structurer les pages web.' },
            { term: 'Web 2.0', def: 'Évolution du web vers des plateformes participatives et sociales où les utilisateurs créent et partagent du contenu.' },
            { term: 'Commutation de paquets', def: 'Technique de transmission de données consistant à fragmenter les messages en petits blocs (paquets) acheminés indépendamment sur le réseau.' }
          ],
          memos: [
            { front: 'Quelle est la date de création de l\'ARPANET ?', back: '1969 — le premier message fut envoyé le 29 octobre entre l\'UCLA et Stanford.' },
            { front: 'Quels sont les trois piliers du Web inventés par Berners-Lee ?', back: 'HTML (structuration des pages), HTTP (transfert) et URL (adressage).' },
            { front: 'Qu\'est-ce que le Web 2.0 ?', back: 'Le passage d\'un web statique de publication à un web participatif et social (blogs, wikis, réseaux sociaux).' }
          ]
        },
        {
          slug: 'reseaux-sociaux',
          title: 'Réseaux sociaux et sociétés',
          description: 'Analyse sociologique des plateformes sociales et de leur impact sur les individus et les communautés.',
          intro: 'Les réseaux sociaux numériques ont profondément reconfiguré les modes de socialisation, d\'information et de participation citoyenne à l\'échelle mondiale. En connectant des milliards d\'individus, ces plateformes ont créé de nouvelles formes de communauté, de solidarité, mais aussi de surveillance, de polarisation et de désinformation.',
          introHighlight: 'En 2024, plus de 4,9 milliards de personnes dans le monde utilisent au moins un réseau social, soit environ 61 % de la population mondiale.',
          intro2: '',
          sections: [
            {
              title: 'Genèse et évolution des plateformes',
              paragraphs: [
                'Les premiers réseaux sociaux en ligne apparurent à la fin des années 1990 avec SixDegrees.com (1997), qui permettait de créer un profil et de lister ses amis. MySpace (2003) puis Facebook (2004) transformèrent le paysage en offrant des fonctionnalités plus riches et une interface plus conviviale. Le modèle économique basé sur la publicité ciblée, exploitant les données personnelles des utilisateurs, s\'imposa rapidement.',
                'La diversification des plateformes reflète la variété des usages sociaux : Twitter (2006) pour le microblogging, Instagram (2010) pour le partage d\'images, Snapchat (2011) pour les messages éphémères, TikTok (2016) pour les vidéos courtes. Chaque plateforme a attiré des publics spécifiques et engendré des pratiques culturelles distinctes, tout en se livrant une concurrence féroce pour capter l\'attention des utilisateurs.'
              ],
              highlight: 'Le modèle économique des réseaux sociaux repose sur la monétisation de l\'attention et des données personnelles.'
            },
            {
              title: 'Capital social et identité numérique',
              paragraphs: [
                'Le sociologue Pierre Bourdieu définissait le capital social comme l\'ensemble des ressources liées à la possession d\'un réseau durable de relations. Les réseaux sociaux numériques amplifient cette dynamique en permettant d\'accumuler et de rendre visible un capital social sous forme de « followers », de « likes » et de connexions. Cette quantification de la popularité crée de nouvelles hiérarchies sociales et de nouvelles formes de pression sociale.',
                'L\'identité numérique, construite à travers les publications, les photos et les interactions en ligne, est devenue un enjeu central de la vie sociale contemporaine. Le concept de « personal branding », la mise en scène de soi et la gestion de sa réputation en ligne occupent une place croissante, notamment chez les jeunes générations. Les travaux d\'Erving Goffman sur la « présentation de soi » trouvent une résonance nouvelle dans cet environnement numérique.'
              ],
              highlight: 'Les réseaux sociaux numériques rendent visible et quantifiable le capital social des individus.'
            },
            {
              title: 'Enjeux démocratiques et régulation',
              paragraphs: [
                'Les réseaux sociaux jouent un rôle ambivalent dans la vie démocratique. D\'un côté, ils facilitent la mobilisation citoyenne, comme l\'ont montré le Printemps arabe (2011), le mouvement #MeToo (2017) ou les manifestations de Hong Kong (2019). De l\'autre, ils favorisent la propagation de la désinformation, la polarisation politique et la manipulation de l\'opinion publique, comme l\'a révélé le scandale Cambridge Analytica en 2018.',
                'Face à ces défis, les gouvernements et les institutions internationales ont engagé des processus de régulation. Le RGPD européen (2018) impose des obligations strictes en matière de protection des données. Le Digital Services Act (DSA) de l\'Union européenne (2022) renforce la responsabilité des plateformes en matière de modération des contenus. Aux États-Unis, le débat sur la réforme de la Section 230, qui protège les plateformes de toute responsabilité éditoriale, illustre la difficulté de concilier liberté d\'expression et lutte contre les contenus nuisibles.'
              ],
              highlight: 'Le scandale Cambridge Analytica en 2018 a révélé l\'ampleur de la manipulation politique via les réseaux sociaux.'
            }
          ],
          quiz: [
            {
              q: 'Quel est généralement considéré comme le premier réseau social en ligne ?',
              opts: ['MySpace', 'Facebook', 'SixDegrees.com', 'Friendster'],
              correct: 2,
              explanation: 'SixDegrees.com, lancé en 1997, est considéré comme le premier réseau social en ligne permettant de créer un profil et de lister ses amis.'
            },
            {
              q: 'Quel règlement européen impose des obligations strictes en matière de protection des données ?',
              opts: ['DSA', 'Section 230', 'RGPD', 'ePrivacy'],
              correct: 2,
              explanation: 'Le RGPD (Règlement Général sur la Protection des Données), entré en vigueur en 2018, impose des obligations strictes en matière de protection des données.'
            },
            {
              q: 'Quel sociologue a défini le concept de capital social comme l\'ensemble des ressources liées à un réseau de relations ?',
              opts: ['Erving Goffman', 'Pierre Bourdieu', 'Manuel Castells', 'Marshall McLuhan'],
              correct: 1,
              explanation: 'Pierre Bourdieu a défini le capital social comme l\'ensemble des ressources liées à la possession d\'un réseau durable de relations.'
            }
          ],
          definitions: [
            { term: 'Réseau social numérique', def: 'Plateforme en ligne permettant aux utilisateurs de créer un profil, de constituer un réseau de contacts et d\'interagir par le partage de contenus.' },
            { term: 'Capital social', def: 'Concept sociologique désignant l\'ensemble des ressources mobilisables grâce à un réseau de relations sociales.' },
            { term: 'Identité numérique', def: 'Ensemble des informations, publications et traces laissées par un individu sur Internet, constituant sa représentation en ligne.' },
            { term: 'RGPD', def: 'Règlement Général sur la Protection des Données, législation européenne encadrant la collecte et le traitement des données personnelles.' },
            { term: 'Économie de l\'attention', def: 'Modèle économique dans lequel l\'attention des utilisateurs constitue une ressource rare que les plateformes cherchent à capter et monétiser.' }
          ],
          memos: [
            { front: 'Quel événement a révélé la manipulation politique via les réseaux sociaux en 2018 ?', back: 'Le scandale Cambridge Analytica, qui a montré l\'exploitation des données Facebook à des fins de ciblage politique.' },
            { front: 'Quels sont les deux aspects ambivalents des réseaux sociaux pour la démocratie ?', back: 'Positif : mobilisation citoyenne (Printemps arabe, #MeToo). Négatif : désinformation, polarisation, manipulation.' },
            { front: 'Qu\'est-ce que le Digital Services Act (DSA) ?', back: 'Règlement européen de 2022 renforçant la responsabilité des plateformes en matière de modération des contenus.' }
          ]
        },
        {
          slug: 'algorithmes-et-filtres',
          title: 'Algorithmes et bulles de filtre',
          description: 'Comment les algorithmes de recommandation façonnent notre accès à l\'information.',
          intro: 'Les algorithmes de recommandation sont au coeur du fonctionnement des plateformes numériques. En sélectionnant et en hiérarchisant les contenus présentés à chaque utilisateur, ils exercent un pouvoir considérable sur la formation des opinions, la circulation de l\'information et la diversité du débat public.',
          introHighlight: 'Eli Pariser a forgé le terme « bulle de filtre » (filter bubble) en 2011 pour décrire l\'enfermement informationnel créé par la personnalisation algorithmique.',
          intro2: '',
          sections: [
            {
              title: 'Fonctionnement des algorithmes de recommandation',
              paragraphs: [
                'Les algorithmes de recommandation utilisent plusieurs techniques pour personnaliser les contenus : le filtrage collaboratif compare les comportements d\'utilisateurs similaires, le filtrage basé sur le contenu analyse les caractéristiques des éléments consultés, et les approches hybrides combinent ces méthodes. Les systèmes modernes s\'appuient sur l\'apprentissage profond (deep learning) pour traiter des volumes massifs de données comportementales.',
                'Les signaux exploités par ces algorithmes sont multiples : historique de navigation, temps passé sur chaque contenu, interactions (likes, partages, commentaires), données démographiques, localisation géographique et même les mouvements du curseur. Cette collecte exhaustive permet une personnalisation fine mais soulève des questions éthiques majeures concernant la surveillance, le consentement éclairé et la transparence des critères de sélection.'
              ],
              highlight: 'Les algorithmes de recommandation exploitent des dizaines de signaux comportementaux pour personnaliser les contenus.'
            },
            {
              title: 'Bulles de filtre et chambres d\'écho',
              paragraphs: [
                'La notion de « bulle de filtre » décrit le phénomène par lequel les algorithmes enferment chaque utilisateur dans un univers informationnel personnalisé, en lui présentant principalement des contenus conformes à ses préférences et opinions existantes. Ce mécanisme réduit l\'exposition à des points de vue divergents et peut renforcer les biais cognitifs de confirmation, limitant ainsi la capacité de réflexion critique.',
                'Les « chambres d\'écho » (echo chambers) constituent un phénomène connexe mais distinct : elles résultent non seulement de la personnalisation algorithmique mais aussi des choix délibérés des utilisateurs qui s\'abonnent à des sources confirmant leurs convictions. Les recherches de Cass Sunstein montrent que cette combinaison d\'effets algorithmiques et de comportements humains peut conduire à une polarisation accrue du débat public et à une fragmentation de l\'espace informationnel commun.'
              ],
              highlight: 'Les bulles de filtre résultent de la personnalisation algorithmique ; les chambres d\'écho combinent effets algorithmiques et choix humains.'
            },
            {
              title: 'Vers une gouvernance algorithmique',
              paragraphs: [
                'La transparence algorithmique est devenue un enjeu majeur de politique publique. Le concept d\'« auditabilité » des algorithmes suppose que les citoyens et les régulateurs puissent comprendre et évaluer les critères de sélection utilisés par les plateformes. Le RGPD européen consacre un « droit à l\'explication » permettant aux individus de comprendre les décisions automatisées les concernant, mais son application concrète reste limitée.',
                'Plusieurs approches complémentaires sont envisagées : la régulation par les autorités publiques (obligations de transparence, audits indépendants), l\'autorégulation par les plateformes (comités d\'éthique, rapports de transparence), et le développement d\'outils techniques permettant aux utilisateurs de reprendre le contrôle sur leur fil d\'actualité. Le débat entre protection de la liberté d\'entreprendre et nécessité de préserver le pluralisme informationnel reste ouvert.'
              ],
              highlight: 'Le RGPD consacre un droit à l\'explication des décisions automatisées, mais son application reste un défi.'
            }
          ],
          quiz: [
            {
              q: 'Qui a forgé le terme « bulle de filtre » en 2011 ?',
              opts: ['Cass Sunstein', 'Eli Pariser', 'Tim Berners-Lee', 'Shoshana Zuboff'],
              correct: 1,
              explanation: 'Eli Pariser a forgé le terme « bulle de filtre » (filter bubble) en 2011 dans son livre éponyme.'
            },
            {
              q: 'Quelle technique de recommandation compare les comportements d\'utilisateurs similaires ?',
              opts: ['Filtrage basé sur le contenu', 'Filtrage collaboratif', 'Filtrage sémantique', 'Filtrage bayésien'],
              correct: 1,
              explanation: 'Le filtrage collaboratif compare les comportements d\'utilisateurs similaires pour recommander des contenus appréciés par des profils proches.'
            },
            {
              q: 'Quel droit le RGPD consacre-t-il concernant les algorithmes ?',
              opts: ['Droit à l\'oubli numérique', 'Droit à l\'explication des décisions automatisées', 'Droit de suppression algorithmique', 'Droit au déréférencement'],
              correct: 1,
              explanation: 'Le RGPD consacre un droit à l\'explication permettant aux individus de comprendre les décisions automatisées les concernant.'
            }
          ],
          definitions: [
            { term: 'Bulle de filtre', def: 'Enfermement informationnel résultant de la personnalisation algorithmique, qui limite l\'exposition d\'un utilisateur à des points de vue divergents.' },
            { term: 'Chambre d\'écho', def: 'Environnement médiatique dans lequel les opinions sont amplifiées et renforcées par la répétition, combinant effets algorithmiques et choix délibérés des utilisateurs.' },
            { term: 'Filtrage collaboratif', def: 'Technique de recommandation qui prédit les préférences d\'un utilisateur en comparant son comportement avec celui d\'utilisateurs similaires.' },
            { term: 'Transparence algorithmique', def: 'Principe selon lequel les critères et les mécanismes de décision des algorithmes doivent être compréhensibles et vérifiables par les citoyens et les régulateurs.' },
            { term: 'Apprentissage profond', def: 'Sous-domaine de l\'intelligence artificielle utilisant des réseaux de neurones multicouches pour analyser de grands volumes de données et détecter des motifs complexes.' }
          ],
          memos: [
            { front: 'Quelle est la différence entre bulle de filtre et chambre d\'écho ?', back: 'La bulle de filtre est créée par la personnalisation algorithmique ; la chambre d\'écho combine les effets algorithmiques et les choix délibérés des utilisateurs.' },
            { front: 'Quelles sont les trois principales techniques de recommandation algorithmique ?', back: 'Le filtrage collaboratif, le filtrage basé sur le contenu et les approches hybrides combinant les deux.' },
            { front: 'Quelles approches sont envisagées pour la gouvernance algorithmique ?', back: 'Régulation publique (audits, transparence), autorégulation des plateformes (comités d\'éthique) et outils techniques permettant aux utilisateurs de reprendre le contrôle.' }
          ]
        },
        {
          slug: 'desinformation',
          title: 'Désinformation et vérification',
          description: 'Fake news, infox et fact-checking : comprendre et combattre la désinformation en ligne.',
          intro: 'La désinformation, phénomène ancien amplifié par les technologies numériques, constitue l\'un des défis majeurs des sociétés contemporaines. La capacité de diffuser massivement et rapidement des contenus trompeurs menace l\'intégrité du débat démocratique, la confiance dans les institutions et la cohésion sociale.',
          introHighlight: 'Selon une étude du MIT publiée en 2018, les fausses informations se diffusent six fois plus vite que les vraies sur Twitter, en raison de leur caractère surprenant et émotionnel.',
          intro2: '',
          sections: [
            {
              title: 'Typologies de la désinformation',
              paragraphs: [
                'La chercheuse Claire Wardle distingue trois catégories : la mésinformation (diffusion non intentionnelle d\'informations erronées), la désinformation (création et diffusion délibérée de faux contenus pour nuire) et la malinformation (diffusion d\'informations véridiques dans l\'intention de causer du tort, comme la publication de données privées). Cette typologie permet de mieux comprendre les motivations et les mécanismes à l\'oeuvre.',
                'Les formes de désinformation sont multiples : faux articles de presse imitant la mise en page de médias reconnus, images manipulées (photomontages, décontextualisation), vidéos truquées (deepfakes), campagnes de désinformation orchestrées par des États ou des organisations, et théories du complot exploitant la défiance envers les institutions. Les avancées de l\'intelligence artificielle générative rendent la création de faux contenus toujours plus accessible et convaincante.'
              ],
              highlight: 'Claire Wardle distingue mésinformation (erreur), désinformation (tromperie intentionnelle) et malinformation (information vraie utilisée pour nuire).'
            },
            {
              title: 'Mécanismes de propagation',
              paragraphs: [
                'La viralité de la désinformation s\'explique par plusieurs facteurs psychologiques et technologiques. Les biais cognitifs, notamment le biais de confirmation (tendance à privilégier les informations confirmant nos croyances) et le biais d\'ancrage (influence disproportionnée de la première information reçue), favorisent l\'adhésion à des contenus trompeurs. L\'émotion, en particulier la peur, la colère et la surprise, stimule le partage sur les réseaux sociaux.',
                'Les algorithmes de recommandation amplifient ces dynamiques en privilégiant les contenus suscitant un fort engagement, sans distinction entre informations fiables et trompeuses. Les « fermes à trolls » et les réseaux de bots automatisent la diffusion massive de faux contenus. L\'effet de « cascade informationnelle », décrit par Sushil Bikhchandani, explique comment des individus adoptent une croyance simplement parce que d\'autres l\'ont adoptée avant eux, créant un effet boule de neige.'
              ],
              highlight: 'Le biais de confirmation et les émotions fortes sont les principaux moteurs psychologiques de la propagation de la désinformation.'
            },
            {
              title: 'Fact-checking et éducation aux médias',
              paragraphs: [
                'Le fact-checking (vérification des faits) s\'est structuré comme une discipline journalistique à part entière. Des organisations comme l\'IFCN (International Fact-Checking Network), les Décodeurs du Monde, AFP Factuel ou Snopes vérifient systématiquement les affirmations publiques et les contenus viraux. Leurs méthodologies reposent sur la recherche de sources primaires, la vérification d\'images par recherche inversée et le croisement de données.',
                'L\'éducation aux médias et à l\'information (EMI) constitue un levier essentiel de prévention. Elle vise à développer l\'esprit critique des citoyens face aux contenus médiatiques en enseignant à identifier les sources, vérifier les informations, comprendre les mécanismes de manipulation et reconnaître ses propres biais. En France, le CLEMI (Centre pour l\'éducation aux médias et à l\'information) coordonne cette éducation dans le système scolaire.'
              ],
              highlight: 'L\'éducation aux médias vise à développer l\'esprit critique face à l\'information, complément indispensable du fact-checking.'
            }
          ],
          quiz: [
            {
              q: 'Selon la typologie de Claire Wardle, comment appelle-t-on la diffusion délibérée de faux contenus pour nuire ?',
              opts: ['Mésinformation', 'Désinformation', 'Malinformation', 'Contre-information'],
              correct: 1,
              explanation: 'La désinformation désigne la création et la diffusion délibérée de faux contenus dans l\'intention de nuire.'
            },
            {
              q: 'Quel biais cognitif nous pousse à privilégier les informations confirmant nos croyances ?',
              opts: ['Biais d\'ancrage', 'Biais de confirmation', 'Biais de disponibilité', 'Biais de conformité'],
              correct: 1,
              explanation: 'Le biais de confirmation est la tendance à privilégier les informations qui confirment nos croyances préexistantes.'
            },
            {
              q: 'Quel organisme coordonne l\'éducation aux médias dans le système scolaire français ?',
              opts: ['CSA', 'CLEMI', 'ARCOM', 'CNIL'],
              correct: 1,
              explanation: 'Le CLEMI (Centre pour l\'éducation aux médias et à l\'information) coordonne l\'éducation aux médias dans le système scolaire français.'
            }
          ],
          definitions: [
            { term: 'Désinformation', def: 'Création et diffusion délibérée de fausses informations dans l\'intention de tromper ou de nuire.' },
            { term: 'Mésinformation', def: 'Diffusion non intentionnelle d\'informations erronées, sans volonté de tromper.' },
            { term: 'Deepfake', def: 'Vidéo ou image truquée à l\'aide de l\'intelligence artificielle, reproduisant de manière réaliste l\'apparence ou la voix d\'une personne.' },
            { term: 'Fact-checking', def: 'Pratique journalistique consistant à vérifier systématiquement l\'exactitude des affirmations publiques et des contenus viraux.' },
            { term: 'Biais de confirmation', def: 'Biais cognitif consistant à rechercher, interpréter et mémoriser préférentiellement les informations confirmant nos croyances.' }
          ],
          memos: [
            { front: 'Quelles sont les trois catégories de la typologie de Claire Wardle ?', back: 'Mésinformation (erreur involontaire), désinformation (tromperie intentionnelle), malinformation (information vraie utilisée pour nuire).' },
            { front: 'Pourquoi les fausses informations se diffusent-elles plus vite que les vraies ?', back: 'En raison de leur caractère surprenant et émotionnel qui stimule le partage, combiné aux biais cognitifs (confirmation, ancrage) et à l\'amplification algorithmique.' },
            { front: 'Quelles techniques le fact-checking utilise-t-il ?', back: 'Recherche de sources primaires, vérification d\'images par recherche inversée, croisement de données et consultation d\'experts.' }
          ]
        },
        {
          slug: 'culture-numerique',
          title: 'Culture numérique et cyberculture',
          description: 'Les pratiques culturelles nées avec Internet : mèmes, communautés en ligne et créativité participative.',
          intro: 'La culture numérique englobe l\'ensemble des pratiques, des valeurs et des productions culturelles nées de l\'interaction entre les sociétés humaines et les technologies numériques. Des premiers forums Usenet aux communautés de créateurs sur les plateformes contemporaines, une culture spécifique s\'est développée, avec ses codes, ses rituels et ses formes d\'expression propres.',
          introHighlight: 'Le terme « mème Internet », inspiré du concept de mème de Richard Dawkins (1976), désigne une unité culturelle qui se propage et se transforme par imitation sur les réseaux numériques.',
          intro2: '',
          sections: [
            {
              title: 'Des communautés en ligne aux cultures participatives',
              paragraphs: [
                'Les premières communautés en ligne sont apparues dès les années 1980 avec les BBS (Bulletin Board Systems) et les forums Usenet. Howard Rheingold, dans son ouvrage « The Virtual Community » (1993), fut l\'un des premiers à analyser les dynamiques sociales de ces espaces numériques. Ces communautés pionnières posèrent les bases d\'une culture fondée sur le partage des connaissances, la collaboration horizontale et la méritocratie technique.',
                'Henry Jenkins a théorisé la « culture participative » pour décrire l\'engagement actif des publics dans la création et la circulation de contenus culturels. Le phénomène des fanfictions, des vidéos de fans, du modding de jeux vidéo et des wikis collaboratifs illustre cette transformation du rapport entre producteurs et consommateurs de culture. Les plateformes comme YouTube, Twitch et TikTok ont démocratisé cette créativité participative à une échelle sans précédent.'
              ],
              highlight: 'Henry Jenkins a théorisé la « culture participative » décrivant l\'engagement actif des publics dans la création culturelle.'
            },
            {
              title: 'Mèmes et viralité culturelle',
              paragraphs: [
                'Les mèmes Internet constituent la forme d\'expression la plus caractéristique de la culture numérique. Dérivé du concept de mème proposé par Richard Dawkins dans « Le Gène égoïste » (1976), le mème Internet est une unité culturelle — image, vidéo, phrase, concept — qui se propage par imitation et transformation successive. Les mèmes combinent souvent humour, satire sociale et commentaire politique dans un format visuel immédiatement reconnaissable.',
                'La viralité des mèmes obéit à des logiques spécifiques étudiées par Limor Shifman : simplicité de reproduction, capacité d\'adaptation à des contextes variés, résonance émotionnelle et appartenance à un répertoire culturel partagé. Les mèmes fonctionnent comme un langage visuel commun qui transcende les frontières linguistiques et culturelles, tout en reflétant les préoccupations, les tensions et l\'humour propres à chaque communauté en ligne.'
              ],
              highlight: 'Les mèmes Internet sont un langage visuel commun qui transcende les frontières linguistiques.'
            },
            {
              title: 'Enjeux de la culture numérique',
              paragraphs: [
                'La fracture numérique demeure un enjeu majeur : l\'accès inégal aux technologies et aux compétences numériques reproduit et amplifie les inégalités sociales et territoriales existantes. Au-delà de l\'accès matériel (premier niveau de fracture), la fracture des usages (deuxième niveau) et la fracture des capacités critiques (troisième niveau) créent des disparités dans la capacité des individus à tirer parti des opportunités offertes par le numérique.',
                'La question de la propriété intellectuelle dans un environnement de culture participative et de remix permanent soulève des débats complexes. Le mouvement du logiciel libre, les licences Creative Commons et le concept de « communs numériques » proposent des alternatives au modèle traditionnel du droit d\'auteur. Lawrence Lessig, fondateur des Creative Commons, plaide pour un « remix culture » où la réutilisation créative est encouragée tout en respectant les droits des créateurs originaux.'
              ],
              highlight: 'La fracture numérique comporte trois niveaux : accès matériel, usages et capacités critiques.'
            }
          ],
          quiz: [
            {
              q: 'Qui a théorisé le concept de « culture participative » ?',
              opts: ['Howard Rheingold', 'Henry Jenkins', 'Lawrence Lessig', 'Manuel Castells'],
              correct: 1,
              explanation: 'Henry Jenkins a théorisé la « culture participative » pour décrire l\'engagement actif des publics dans la création et la circulation de contenus culturels.'
            },
            {
              q: 'De quel concept le mème Internet s\'inspire-t-il ?',
              opts: ['Le gène de Darwin', 'Le mème de Dawkins', 'Le signe de Saussure', 'Le symbole de Peirce'],
              correct: 1,
              explanation: 'Le mème Internet est inspiré du concept de mème proposé par Richard Dawkins dans « Le Gène égoïste » (1976).'
            },
            {
              q: 'Qui est le fondateur des licences Creative Commons ?',
              opts: ['Richard Stallman', 'Linus Torvalds', 'Lawrence Lessig', 'Tim Berners-Lee'],
              correct: 2,
              explanation: 'Lawrence Lessig est le fondateur des licences Creative Commons, qui proposent des alternatives au droit d\'auteur traditionnel.'
            }
          ],
          definitions: [
            { term: 'Mème Internet', def: 'Unité culturelle (image, vidéo, phrase) qui se propage et se transforme par imitation successive sur les réseaux numériques.' },
            { term: 'Culture participative', def: 'Mode de production culturelle dans lequel les publics s\'engagent activement dans la création, la transformation et la diffusion des contenus.' },
            { term: 'Fracture numérique', def: 'Inégalité d\'accès aux technologies numériques et aux compétences nécessaires pour en tirer parti, reproduisant les inégalités sociales.' },
            { term: 'Creative Commons', def: 'Ensemble de licences permettant aux créateurs de partager leurs oeuvres en définissant les conditions de réutilisation (attribution, partage à l\'identique, usage commercial).' },
            { term: 'Communs numériques', def: 'Ressources numériques partagées et gérées collectivement par une communauté (logiciels libres, Wikipédia, données ouvertes).' }
          ],
          memos: [
            { front: 'Quels sont les trois niveaux de la fracture numérique ?', back: 'Premier niveau : accès matériel. Deuxième niveau : fracture des usages. Troisième niveau : fracture des capacités critiques.' },
            { front: 'Quelles sont les caractéristiques d\'un mème viral selon Limor Shifman ?', back: 'Simplicité de reproduction, capacité d\'adaptation à des contextes variés, résonance émotionnelle et appartenance à un répertoire culturel partagé.' },
            { front: 'Qu\'est-ce qu\'une licence Creative Commons ?', back: 'Une licence permettant aux créateurs de partager leurs oeuvres en définissant les conditions de réutilisation (attribution, partage à l\'identique, usage commercial).' }
          ]
        }
      ]
    },
    {
      slug: 'publicite',
      title: 'Publicité & Marketing',
      description: 'Stratégies publicitaires, marketing digital et comportement du consommateur.',
      lessons: [
        {
          slug: 'histoire-publicite',
          title: 'Histoire de la publicité',
          description: 'Des crieurs publics aux annonces numériques : l\'évolution de la communication commerciale.',
          intro: 'La publicité est aussi ancienne que le commerce lui-même. Des inscriptions murales de Pompéi aux bannières numériques ciblées, elle a constamment évolué en s\'adaptant aux innovations technologiques et aux transformations sociales. Comprendre cette histoire permet de saisir les logiques profondes qui sous-tendent la communication commerciale contemporaine.',
          introHighlight: 'La première annonce publicitaire imprimée connue date de 1477, rédigée par William Caxton pour promouvoir un livre de règles ecclésiastiques.',
          intro2: '',
          sections: [
            {
              title: 'Des origines à la révolution industrielle',
              paragraphs: [
                'Les premières formes de publicité remontent à l\'Antiquité : enseignes de boutiques à Pompéi, crieurs publics dans les marchés médiévaux, almanachs et prospectus distribués à la Renaissance. L\'invention de l\'imprimerie par Gutenberg (vers 1450) révolutionna la diffusion des messages commerciaux en permettant la production de masse de tracts et d\'affiches. Théophraste Renaudot fonda en 1631 la Gazette de France, premier journal français, qui accueillit les premières annonces payantes.',
                'La révolution industrielle du XIXe siècle transforma radicalement la publicité. La production de masse nécessitait de toucher un public large pour écouler les marchandises. Les premières agences de publicité apparurent : Volney B. Palmer à Philadelphie en 1841, puis J. Walter Thompson à New York en 1864. L\'affiche lithographique devint un art à part entière avec Jules Chéret et Henri de Toulouse-Lautrec, fusionnant création artistique et message commercial.'
              ],
              highlight: 'Théophraste Renaudot introduisit les premières annonces payantes dans la Gazette de France en 1631.'
            },
            {
              title: 'L\'âge d\'or de la publicité de masse',
              paragraphs: [
                'Le XXe siècle fut l\'âge d\'or de la publicité de masse. La radio (années 1920), puis la télévision (années 1950) offrirent des supports d\'une puissance sans précédent pour atteindre des millions de consommateurs simultanément. Les « soap operas » américains, financés par les fabricants de lessives, illustrèrent le modèle de financement publicitaire des médias qui reste dominant aujourd\'hui.',
                'L\'avenue Madison à New York devint le symbole mondial de l\'industrie publicitaire dans les années 1950-1960. La « révolution créative » portée par des figures comme Bill Bernbach, David Ogilvy et Leo Burnett transforma la publicité en une discipline combinant études de marché, psychologie et création artistique. Les slogans iconiques, les jingles mémorables et les mascottes emblématiques de cette époque façonnèrent la culture populaire de manière durable.'
              ],
              highlight: 'La « révolution créative » des années 1960 fit de la publicité une discipline mêlant psychologie, art et stratégie commerciale.'
            },
            {
              title: 'La publicité à l\'ère numérique',
              paragraphs: [
                'L\'avènement d\'Internet et du numérique a bouleversé l\'industrie publicitaire. La première bannière publicitaire en ligne fut diffusée sur le site HotWired en 1994. Google Ads (2000) introduisit le modèle du paiement au clic (PPC) et du ciblage par mots-clés, permettant une mesure précise du retour sur investissement. Facebook Ads (2007) ouvrit l\'ère de la publicité hyper-ciblée fondée sur les données comportementales et sociodémographiques.',
                'Le marketing d\'influence, la publicité programmatique et la publicité native (contenu sponsorisé intégré de manière transparente dans le flux éditorial) sont devenus des piliers de la communication commerciale contemporaine. L\'intelligence artificielle permet désormais de personnaliser les messages à l\'échelle individuelle et en temps réel. Ces évolutions soulèvent des questions éthiques croissantes concernant la vie privée, la manipulation et la frontière entre information et promotion.'
              ],
              highlight: 'La première bannière publicitaire en ligne fut diffusée sur HotWired en 1994 pour AT&T.'
            }
          ],
          quiz: [
            {
              q: 'Quand fut diffusée la première bannière publicitaire en ligne ?',
              opts: ['1990', '1994', '1998', '2000'],
              correct: 1,
              explanation: 'La première bannière publicitaire en ligne fut diffusée sur le site HotWired en 1994.'
            },
            {
              q: 'Quel publicitaire est associé à la « révolution créative » des années 1960 ?',
              opts: ['Edward Bernays', 'Bill Bernbach', 'Philip Kotler', 'Théophraste Renaudot'],
              correct: 1,
              explanation: 'Bill Bernbach, avec David Ogilvy et Leo Burnett, fut une figure majeure de la révolution créative publicitaire des années 1960.'
            },
            {
              q: 'Quel modèle publicitaire Google Ads a-t-il introduit en 2000 ?',
              opts: ['Coût par impression (CPM)', 'Paiement au clic (PPC)', 'Coût par acquisition (CPA)', 'Forfait annuel'],
              correct: 1,
              explanation: 'Google Ads a introduit le modèle du paiement au clic (PPC), permettant aux annonceurs de ne payer que lorsqu\'un utilisateur clique sur leur annonce.'
            }
          ],
          definitions: [
            { term: 'Publicité', def: 'Forme de communication commerciale visant à promouvoir un produit, un service ou une marque auprès d\'un public cible par le biais de médias payants.' },
            { term: 'Agence de publicité', def: 'Entreprise spécialisée dans la conception, la production et le placement de campagnes publicitaires pour le compte d\'annonceurs.' },
            { term: 'Publicité programmatique', def: 'Achat et vente automatisés d\'espaces publicitaires en temps réel, utilisant des algorithmes et des données pour cibler les audiences.' },
            { term: 'Publicité native', def: 'Contenu sponsorisé conçu pour s\'intégrer de manière transparente dans le flux éditorial d\'un média, imitant le format et le ton du contenu rédactionnel.' },
            { term: 'PPC (Pay Per Click)', def: 'Modèle publicitaire dans lequel l\'annonceur ne paie que lorsqu\'un utilisateur clique sur son annonce.' }
          ],
          memos: [
            { front: 'Quelles sont les grandes étapes de l\'histoire de la publicité ?', back: 'Crieurs et enseignes (Antiquité), imprimerie et affiches (XVe-XIXe), radio et télévision (XXe), Internet et numérique (XXIe).' },
            { front: 'Qui sont les trois figures de la « révolution créative » publicitaire ?', back: 'Bill Bernbach, David Ogilvy et Leo Burnett, qui ont transformé la publicité en une discipline mêlant psychologie, art et stratégie.' },
            { front: 'Qu\'est-ce que la publicité programmatique ?', back: 'L\'achat et la vente automatisés d\'espaces publicitaires en temps réel, utilisant des algorithmes et des données pour cibler les audiences.' }
          ]
        },
        {
          slug: 'comportement-consommateur',
          title: 'Comportement du consommateur',
          description: 'Psychologie de l\'achat, processus de décision et influence sociale sur la consommation.',
          intro: 'L\'étude du comportement du consommateur est au carrefour de la psychologie, de la sociologie et de l\'économie. Elle cherche à comprendre les mécanismes cognitifs, émotionnels et sociaux qui guident les décisions d\'achat, depuis la prise de conscience d\'un besoin jusqu\'à l\'évaluation post-achat.',
          introHighlight: 'Herbert Simon a démontré que les consommateurs ne sont pas des agents rationnels : ils prennent des décisions satisfaisantes plutôt qu\'optimales, concept qu\'il a nommé « rationalité limitée ».',
          intro2: '',
          sections: [
            {
              title: 'Les modèles de décision d\'achat',
              paragraphs: [
                'Le modèle classique du processus de décision d\'achat, formalisé par Engel, Kollat et Blackwell dans les années 1960, identifie cinq étapes : la reconnaissance du besoin, la recherche d\'informations, l\'évaluation des alternatives, la décision d\'achat et le comportement post-achat. Ce modèle linéaire, bien que simplifié, reste un cadre de référence pour comprendre le parcours du consommateur.',
                'Les travaux de Daniel Kahneman sur les systèmes de pensée (Système 1 rapide et intuitif, Système 2 lent et analytique) ont profondément renouvelé la compréhension du comportement d\'achat. La majorité des décisions de consommation relèvent du Système 1 : elles sont prises rapidement, sur la base d\'heuristiques (raccourcis mentaux) et d\'émotions, plutôt que d\'une analyse rationnelle exhaustive des alternatives.'
              ],
              highlight: 'La majorité des décisions d\'achat sont prises par le Système 1 (rapide et intuitif) plutôt que par le Système 2 (analytique).'
            },
            {
              title: 'Influences sociales et culturelles',
              paragraphs: [
                'Le comportement de consommation est profondément influencé par l\'environnement social. Les groupes de référence (famille, amis, collègues, célébrités) exercent une influence normative (pression à se conformer) et informationnelle (source de connaissances et de recommandations). La théorie de la « consommation ostentatoire » de Thorstein Veblen montre comment les individus utilisent leurs achats pour signaler leur statut social.',
                'Les facteurs culturels constituent le déterminant le plus profond du comportement d\'achat. Les valeurs, les croyances, les normes sociales et les modes de vie propres à chaque culture façonnent les préférences, les habitudes de consommation et les critères de choix. Le marketing interculturel étudie ces différences pour adapter les stratégies commerciales aux marchés locaux, tout en identifiant les tendances de convergence liées à la mondialisation.'
              ],
              highlight: 'Veblen a théorisé la « consommation ostentatoire » : l\'achat comme signal de statut social.'
            },
            {
              title: 'Le nudge et l\'architecture de choix',
              paragraphs: [
                'Le concept de « nudge » (coup de pouce), développé par Richard Thaler et Cass Sunstein, désigne une intervention qui oriente les comportements sans interdire ni imposer. L\'architecture de choix, c\'est-à-dire la manière dont les options sont présentées, influence considérablement les décisions : l\'ordre des produits dans un rayon, le choix par défaut dans un formulaire en ligne ou la taille des assiettes dans un restaurant orientent subtilement les comportements.',
                'Les entreprises et les pouvoirs publics utilisent de plus en plus les nudges pour influencer les comportements de consommation, de santé ou d\'environnement. L\'opt-out (consentement par défaut) au don d\'organes, la mise en avant des options écologiques ou la réduction de la taille des portions sont des exemples de nudges. Les critiques soulèvent toutefois des questions éthiques : le nudge peut-il devenir manipulation lorsqu\'il est utilisé à des fins purement commerciales ?'
              ],
              highlight: 'Le nudge oriente les comportements sans interdire ni imposer, en modifiant l\'architecture de choix.'
            }
          ],
          quiz: [
            {
              q: 'Quelles sont les cinq étapes du modèle classique de décision d\'achat ?',
              opts: ['Besoin, recherche, évaluation, achat, post-achat', 'Attention, intérêt, désir, action, fidélisation', 'Stimulus, réponse, renforcement, habitude, loyauté', 'Perception, motivation, apprentissage, croyance, attitude'],
              correct: 0,
              explanation: 'Le modèle d\'Engel, Kollat et Blackwell identifie cinq étapes : reconnaissance du besoin, recherche d\'informations, évaluation des alternatives, décision d\'achat et comportement post-achat.'
            },
            {
              q: 'Qui a développé le concept de « nudge » ?',
              opts: ['Daniel Kahneman', 'Herbert Simon', 'Richard Thaler et Cass Sunstein', 'Thorstein Veblen'],
              correct: 2,
              explanation: 'Le concept de nudge a été développé par Richard Thaler et Cass Sunstein dans leur ouvrage « Nudge » (2008).'
            },
            {
              q: 'Qu\'est-ce que la « rationalité limitée » selon Herbert Simon ?',
              opts: ['L\'incapacité totale de raisonner lors de l\'achat', 'La tendance à prendre des décisions satisfaisantes plutôt qu\'optimales', 'L\'influence exclusive des émotions sur les décisions', 'Le refus de comparer les alternatives'],
              correct: 1,
              explanation: 'Herbert Simon a montré que les individus, face à la complexité, prennent des décisions satisfaisantes plutôt qu\'optimales, concept qu\'il a nommé « rationalité limitée ».'
            }
          ],
          definitions: [
            { term: 'Comportement du consommateur', def: 'Ensemble des processus cognitifs, émotionnels et comportementaux impliqués dans la sélection, l\'achat, l\'utilisation et l\'évaluation de produits et services.' },
            { term: 'Nudge', def: 'Intervention subtile qui oriente les comportements sans interdire ni imposer, en modifiant l\'architecture de choix.' },
            { term: 'Rationalité limitée', def: 'Concept d\'Herbert Simon selon lequel les individus prennent des décisions satisfaisantes plutôt qu\'optimales, en raison de leurs capacités cognitives limitées.' },
            { term: 'Groupe de référence', def: 'Groupe social dont les normes, les valeurs et les comportements servent de point de comparaison pour un individu dans ses décisions de consommation.' },
            { term: 'Consommation ostentatoire', def: 'Achat de biens et services dans le but principal de signaler son statut social, concept théorisé par Thorstein Veblen.' }
          ],
          memos: [
            { front: 'Quels sont les deux systèmes de pensée de Kahneman ?', back: 'Système 1 : rapide, intuitif, automatique. Système 2 : lent, analytique, délibéré. La majorité des décisions d\'achat relèvent du Système 1.' },
            { front: 'Qu\'est-ce qu\'un nudge et qui l\'a théorisé ?', back: 'Un coup de pouce orientant les comportements sans interdire, théorisé par Richard Thaler et Cass Sunstein (2008). Ex : choix par défaut, ordre de présentation.' },
            { front: 'Quels sont les deux types d\'influence des groupes de référence ?', back: 'Influence normative (pression à se conformer aux normes du groupe) et influence informationnelle (source de connaissances et recommandations).' }
          ]
        },
        {
          slug: 'marketing-digital',
          title: 'Marketing digital',
          description: 'SEO, réseaux sociaux, e-mailing et stratégies de marketing en ligne.',
          intro: 'Le marketing digital regroupe l\'ensemble des techniques de marketing utilisant les canaux numériques pour atteindre les consommateurs. De l\'optimisation pour les moteurs de recherche au marketing d\'influence en passant par l\'e-mailing et le marketing de contenu, ces stratégies transforment profondément la relation entre les marques et leurs publics.',
          introHighlight: 'Le marketing digital représente désormais plus de 60 % des dépenses publicitaires mondiales, dépassant pour la première fois les médias traditionnels en 2019.',
          intro2: '',
          sections: [
            {
              title: 'Référencement et marketing de contenu',
              paragraphs: [
                'Le référencement naturel (SEO — Search Engine Optimization) vise à améliorer la visibilité d\'un site web dans les résultats des moteurs de recherche. Il repose sur trois piliers : l\'optimisation technique (vitesse de chargement, structure du site, compatibilité mobile), la qualité du contenu (pertinence, originalité, actualisation régulière) et la popularité (liens entrants provenant de sites reconnus). L\'algorithme de Google utilise plus de 200 critères de classement.',
                'Le marketing de contenu (content marketing) consiste à créer et diffuser des contenus utiles, pertinents et cohérents pour attirer et fidéliser une audience cible. Articles de blog, vidéos, podcasts, infographies et livres blancs sont autant de formats utilisés. Joe Pulizzi, fondateur du Content Marketing Institute, souligne que l\'objectif n\'est pas de vendre directement mais de construire une relation de confiance avec l\'audience en lui apportant de la valeur.'
              ],
              highlight: 'Le SEO repose sur trois piliers : optimisation technique, qualité du contenu et popularité (liens entrants).'
            },
            {
              title: 'Réseaux sociaux et marketing d\'influence',
              paragraphs: [
                'Le marketing sur les réseaux sociaux (Social Media Marketing) exploite les plateformes sociales pour promouvoir une marque, un produit ou un service. Chaque plateforme requiert une stratégie adaptée : LinkedIn pour le B2B et le recrutement, Instagram et TikTok pour le visuel et les jeunes audiences, Facebook pour les communautés locales et les groupes d\'intérêt. La gestion de communauté (community management) est devenue une compétence clé.',
                'Le marketing d\'influence repose sur des partenariats avec des créateurs de contenu disposant d\'une audience engagée. On distingue les nano-influenceurs (1 000-10 000 abonnés), les micro-influenceurs (10 000-100 000), les macro-influenceurs (100 000-1 million) et les méga-influenceurs (plus d\'un million). Les études montrent que les micro-influenceurs obtiennent souvent de meilleurs taux d\'engagement que les grandes célébrités, en raison de la proximité perçue avec leur communauté.'
              ],
              highlight: 'Les micro-influenceurs obtiennent souvent de meilleurs taux d\'engagement que les méga-influenceurs.'
            },
            {
              title: 'Analyse de données et automatisation',
              paragraphs: [
                'Le marketing digital se distingue par sa capacité à mesurer précisément les performances de chaque action. Les KPI (indicateurs clés de performance) tels que le taux de conversion, le coût par acquisition, le retour sur investissement publicitaire et la valeur vie client permettent d\'optimiser les campagnes en temps réel. Les outils d\'analyse (Google Analytics, tableaux de bord personnalisés) fournissent une vision détaillée du parcours utilisateur.',
                'Le marketing automation désigne l\'utilisation de logiciels pour automatiser les tâches marketing répétitives : envoi d\'e-mails personnalisés, segmentation dynamique des audiences, scoring des prospects et scénarios de relance automatisés. L\'intelligence artificielle enrichit ces outils en permettant la prédiction des comportements, la personnalisation en temps réel des contenus et l\'optimisation automatique des enchères publicitaires.'
              ],
              highlight: 'Le marketing automation permet d\'automatiser les tâches répétitives tout en personnalisant la communication à grande échelle.'
            }
          ],
          quiz: [
            {
              q: 'Quels sont les trois piliers du référencement naturel (SEO) ?',
              opts: ['Design, contenu, publicité', 'Technique, contenu, popularité', 'Vitesse, mots-clés, liens', 'Mobile, vidéo, social'],
              correct: 1,
              explanation: 'Le SEO repose sur trois piliers : l\'optimisation technique, la qualité du contenu et la popularité (liens entrants).'
            },
            {
              q: 'Comment classe-t-on un influenceur disposant de 50 000 abonnés ?',
              opts: ['Nano-influenceur', 'Micro-influenceur', 'Macro-influenceur', 'Méga-influenceur'],
              correct: 1,
              explanation: 'Un influenceur avec 50 000 abonnés est un micro-influenceur (entre 10 000 et 100 000 abonnés).'
            },
            {
              q: 'Qu\'est-ce que le marketing automation ?',
              opts: ['La création automatique de contenus par IA', 'L\'automatisation des tâches marketing répétitives', 'La suppression des équipes marketing', 'L\'achat automatique de publicités'],
              correct: 1,
              explanation: 'Le marketing automation désigne l\'utilisation de logiciels pour automatiser les tâches marketing répétitives comme l\'envoi d\'e-mails et la segmentation.'
            }
          ],
          definitions: [
            { term: 'SEO', def: 'Search Engine Optimization — ensemble des techniques visant à améliorer le positionnement d\'un site web dans les résultats des moteurs de recherche.' },
            { term: 'Marketing de contenu', def: 'Stratégie consistant à créer et diffuser des contenus utiles et pertinents pour attirer, engager et fidéliser une audience cible.' },
            { term: 'Marketing d\'influence', def: 'Stratégie reposant sur des partenariats avec des créateurs de contenu pour promouvoir une marque auprès de leur audience.' },
            { term: 'KPI', def: 'Key Performance Indicator (indicateur clé de performance), métrique utilisée pour évaluer l\'efficacité d\'une action marketing.' },
            { term: 'Marketing automation', def: 'Utilisation de logiciels pour automatiser les tâches marketing répétitives (e-mails, segmentation, scoring) tout en personnalisant la communication.' }
          ],
          memos: [
            { front: 'Quelles sont les quatre catégories d\'influenceurs par taille d\'audience ?', back: 'Nano (1K-10K), micro (10K-100K), macro (100K-1M), méga (1M+). Les micro-influenceurs ont souvent les meilleurs taux d\'engagement.' },
            { front: 'Quels sont les trois piliers du SEO ?', back: 'Optimisation technique (vitesse, structure, mobile), qualité du contenu (pertinence, originalité) et popularité (liens entrants de sites reconnus).' },
            { front: 'Qu\'est-ce qu\'un KPI en marketing digital ?', back: 'Un indicateur clé de performance mesurant l\'efficacité d\'une action : taux de conversion, coût par acquisition, ROI publicitaire, valeur vie client.' }
          ]
        },
        {
          slug: 'branding-identite',
          title: 'Branding et identité de marque',
          description: 'Construction, gestion et perception des marques dans un environnement concurrentiel.',
          intro: 'La marque est bien plus qu\'un nom ou un logo : c\'est un ensemble de perceptions, d\'associations et d\'émotions dans l\'esprit des consommateurs. Le branding, ou gestion de marque, vise à construire et à entretenir cette image de manière cohérente et distinctive pour créer un avantage concurrentiel durable.',
          introHighlight: 'Selon le classement Interbrand 2023, Apple est la marque la plus valorisée au monde, avec une valeur estimée à plus de 500 milliards de dollars.',
          intro2: '',
          sections: [
            {
              title: 'Les fondements du capital de marque',
              paragraphs: [
                'David Aaker a défini le capital de marque (brand equity) comme l\'ensemble des actifs et des passifs liés au nom et au symbole d\'une marque, qui ajoutent ou retranchent de la valeur d\'un produit. Ce capital repose sur cinq dimensions : la notoriété (le consommateur connaît-il la marque ?), les associations (quelles images et valeurs évoque-t-elle ?), la qualité perçue, la fidélité des clients et les actifs propriétaires (brevets, marques déposées).',
                'Kevin Lane Keller a développé le modèle CBBE (Customer-Based Brand Equity) qui structure la construction de marque en quatre étapes pyramidales : l\'identité (qui êtes-vous ?), la signification (que représentez-vous ?), la réponse (que pensent et ressentent les consommateurs ?), et la relation (quel lien partagez-vous avec eux ?). Ce modèle souligne que le capital de marque ultime réside dans la relation émotionnelle que les consommateurs entretiennent avec elle.'
              ],
              highlight: 'David Aaker a défini cinq dimensions du capital de marque : notoriété, associations, qualité perçue, fidélité et actifs propriétaires.'
            },
            {
              title: 'Identité visuelle et plateforme de marque',
              paragraphs: [
                'L\'identité visuelle est la manifestation tangible de la marque : logo, typographie, palette de couleurs, iconographie et mise en page constituent un système visuel cohérent qui permet l\'identification immédiate. Les grands designers comme Paul Rand (IBM, ABC), Saul Bass (AT&T, United Airlines) et plus récemment Jony Ive (Apple) ont montré qu\'un système visuel bien conçu peut devenir un actif stratégique majeur.',
                'La plateforme de marque formalise l\'ADN d\'une marque en définissant sa vision (où veut-elle aller ?), sa mission (pourquoi existe-t-elle ?), ses valeurs (en quoi croit-elle ?), sa personnalité (quel est son caractère ?) et sa promesse (que garantit-elle ?). Le concept de « why » développé par Simon Sinek (le « cercle d\'or ») postule que les marques les plus inspirantes communiquent en partant de leur raison d\'être plutôt que de leurs produits.'
              ],
              highlight: 'Simon Sinek recommande de communiquer en partant du « pourquoi » (raison d\'être) plutôt que du « quoi » (produit).'
            },
            {
              title: 'Stratégies de marque contemporaines',
              paragraphs: [
                'Le storytelling de marque consiste à construire un récit cohérent et engageant autour de la marque, de ses origines, de ses valeurs et de son impact. Les marques deviennent des « conteurs » qui créent du sens et de l\'émotion pour leurs publics. Le concept de « love brand » (Kevin Roberts, Saatchi & Saatchi) désigne les marques qui suscitent une loyauté au-delà de la raison, fondée sur le mystère, la sensualité et l\'intimité.',
                'La responsabilité sociale des marques (brand purpose) est devenue un enjeu stratégique majeur. Les consommateurs, notamment les jeunes générations, attendent des marques qu\'elles prennent position sur les questions environnementales et sociales. Cependant, le « greenwashing » (communication trompeuse sur les engagements écologiques) et le « purpose washing » (instrumentalisation cynique de causes sociales) sont vivement critiqués et peuvent détruire la confiance.'
              ],
              highlight: 'Le storytelling de marque crée du sens et de l\'émotion en racontant une histoire cohérente et engageante.'
            }
          ],
          quiz: [
            {
              q: 'Qui a défini le concept de capital de marque (brand equity) autour de cinq dimensions ?',
              opts: ['Philip Kotler', 'David Aaker', 'Kevin Lane Keller', 'Simon Sinek'],
              correct: 1,
              explanation: 'David Aaker a défini le capital de marque autour de cinq dimensions : notoriété, associations, qualité perçue, fidélité et actifs propriétaires.'
            },
            {
              q: 'Quel est le principe central du « cercle d\'or » de Simon Sinek ?',
              opts: ['Commencer par le prix', 'Commencer par le « pourquoi »', 'Commencer par le produit', 'Commencer par le concurrent'],
              correct: 1,
              explanation: 'Simon Sinek recommande de communiquer en partant du « pourquoi » (raison d\'être) plutôt que du « quoi » (produit).'
            },
            {
              q: 'Qu\'est-ce que le « greenwashing » ?',
              opts: ['Un procédé de fabrication écologique', 'Une communication trompeuse sur les engagements écologiques', 'Une stratégie de marketing vert', 'Un label environnemental'],
              correct: 1,
              explanation: 'Le greenwashing désigne une communication trompeuse sur les engagements écologiques d\'une entreprise ou d\'une marque.'
            }
          ],
          definitions: [
            { term: 'Capital de marque', def: 'Ensemble des actifs et passifs liés au nom et au symbole d\'une marque, qui ajoutent ou retranchent de la valeur d\'un produit (David Aaker).' },
            { term: 'Identité visuelle', def: 'Système cohérent d\'éléments graphiques (logo, typographie, couleurs, iconographie) permettant l\'identification immédiate d\'une marque.' },
            { term: 'Plateforme de marque', def: 'Document stratégique définissant la vision, la mission, les valeurs, la personnalité et la promesse d\'une marque.' },
            { term: 'Storytelling de marque', def: 'Construction d\'un récit cohérent et engageant autour d\'une marque pour créer du sens, de l\'émotion et de l\'attachement.' },
            { term: 'Greenwashing', def: 'Pratique consistant à communiquer de manière trompeuse sur les engagements écologiques d\'une entreprise pour améliorer son image.' }
          ],
          memos: [
            { front: 'Quelles sont les cinq dimensions du capital de marque selon Aaker ?', back: 'Notoriété, associations, qualité perçue, fidélité des clients et actifs propriétaires (brevets, marques déposées).' },
            { front: 'Quelles sont les quatre étapes du modèle CBBE de Keller ?', back: 'Identité (qui êtes-vous ?), signification (que représentez-vous ?), réponse (que pensent les consommateurs ?) et relation (quel lien partagez-vous ?).' },
            { front: 'Quelle est la différence entre greenwashing et purpose washing ?', back: 'Greenwashing : communication trompeuse sur les engagements écologiques. Purpose washing : instrumentalisation cynique de causes sociales.' }
          ]
        },
        {
          slug: 'ethique-publicitaire',
          title: 'Éthique et régulation publicitaire',
          description: 'Encadrement juridique, autorégulation et responsabilité sociale de la publicité.',
          intro: 'La publicité, en raison de son omniprésence et de son influence sur les comportements, fait l\'objet d\'un encadrement juridique et déontologique strict. De la protection des consommateurs contre les pratiques trompeuses à la régulation de la publicité ciblée en ligne, les enjeux éthiques de la communication commerciale n\'ont cessé de s\'élargir.',
          introHighlight: 'En France, l\'ARPP (Autorité de Régulation Professionnelle de la Publicité) examine chaque année plus de 30 000 publicités au regard de ses codes de bonne conduite.',
          intro2: '',
          sections: [
            {
              title: 'Le cadre juridique de la publicité',
              paragraphs: [
                'Le droit de la publicité repose sur plusieurs principes fondamentaux : la véracité (interdiction de la publicité mensongère), l\'identification (obligation de distinguer clairement la publicité du contenu éditorial), la loyauté (interdiction du dénigrement et de la confusion) et le respect de la personne humaine (interdiction de la discrimination et de l\'exploitation de la vulnérabilité). En France, la loi Sapin de 1993 a instauré la transparence dans les transactions publicitaires.',
                'Certains secteurs font l\'objet de restrictions spécifiques : la loi Évin (1991) encadre strictement la publicité pour le tabac et l\'alcool, la publicité à destination des enfants est réglementée par des directives européennes, et la publicité pour les produits financiers doit respecter des obligations d\'information renforcées. La loi Climat et Résilience de 2021 a introduit de nouvelles restrictions sur la publicité pour les produits les plus polluants.'
              ],
              highlight: 'La loi Évin de 1991 encadre strictement la publicité pour le tabac (interdiction totale) et l\'alcool en France.'
            },
            {
              title: 'Autorégulation et déontologie',
              paragraphs: [
                'L\'autorégulation publicitaire repose sur des organismes professionnels qui édictent des codes de bonne conduite et veillent à leur respect. En France, l\'ARPP (Autorité de Régulation Professionnelle de la Publicité, anciennement BVP) émet des avis consultatifs avant diffusion et traite les plaintes des consommateurs. Le Jury de Déontologie Publicitaire (JDP), indépendant de l\'ARPP, statue sur les manquements aux règles éthiques.',
                'Au niveau international, la Chambre de Commerce Internationale (CCI) a publié un Code consolidé sur la publicité et les communications commerciales qui sert de référence mondiale. L\'EASA (European Advertising Standards Alliance) coordonne les systèmes d\'autorégulation européens. Ces mécanismes d\'autorégulation sont souvent critiqués pour leur caractère non contraignant, mais ils présentent l\'avantage de la réactivité et de l\'expertise sectorielle face à des évolutions technologiques rapides.'
              ],
              highlight: 'L\'autorégulation publicitaire combine codes de bonne conduite, avis consultatifs et traitement des plaintes.'
            },
            {
              title: 'Enjeux éthiques contemporains',
              paragraphs: [
                'La publicité ciblée en ligne soulève des questions éthiques inédites. La collecte massive de données personnelles, le profilage comportemental et le ciblage psychographique (fondé sur les traits de personnalité) posent des problèmes de consentement éclairé et de vie privée. Le micro-ciblage politique, révélé par le scandale Cambridge Analytica, a montré les risques de manipulation de l\'opinion publique par la publicité personnalisée.',
                'La représentation dans la publicité constitue un autre enjeu majeur : stéréotypes de genre, standards de beauté irréalistes, sous-représentation de certaines communautés. Les mouvements sociaux contemporains ont poussé les marques à adopter des représentations plus diverses et inclusives, bien que le risque de « diversity washing » (instrumentalisation superficielle de la diversité) demeure. Le débat entre liberté d\'expression commerciale et responsabilité sociale des annonceurs reste au coeur des réflexions éthiques sur la publicité.'
              ],
              highlight: 'Le ciblage psychographique fonde la personnalisation publicitaire sur les traits de personnalité des utilisateurs.'
            }
          ],
          quiz: [
            {
              q: 'Quelle loi française encadre strictement la publicité pour le tabac et l\'alcool ?',
              opts: ['Loi Sapin', 'Loi Évin', 'Loi Climat et Résilience', 'Loi Toubon'],
              correct: 1,
              explanation: 'La loi Évin de 1991 encadre strictement la publicité pour le tabac (interdiction totale) et l\'alcool en France.'
            },
            {
              q: 'Quel organisme émet des avis consultatifs sur la publicité en France ?',
              opts: ['CSA', 'ARCOM', 'ARPP', 'CNIL'],
              correct: 2,
              explanation: 'L\'ARPP (Autorité de Régulation Professionnelle de la Publicité) émet des avis consultatifs avant diffusion et traite les plaintes.'
            },
            {
              q: 'Qu\'est-ce que le ciblage psychographique ?',
              opts: ['Le ciblage par âge et sexe', 'Le ciblage par localisation géographique', 'Le ciblage fondé sur les traits de personnalité', 'Le ciblage par niveau de revenus'],
              correct: 2,
              explanation: 'Le ciblage psychographique fonde la personnalisation publicitaire sur les traits de personnalité, les valeurs et les attitudes des utilisateurs.'
            }
          ],
          definitions: [
            { term: 'Publicité mensongère', def: 'Communication commerciale comportant des allégations fausses ou de nature à induire en erreur le consommateur, interdite par la loi.' },
            { term: 'ARPP', def: 'Autorité de Régulation Professionnelle de la Publicité, organisme français d\'autorégulation émettant des avis consultatifs et traitant les plaintes.' },
            { term: 'Ciblage psychographique', def: 'Méthode de ciblage publicitaire fondée sur les traits de personnalité, les valeurs, les attitudes et les modes de vie des consommateurs.' },
            { term: 'Loi Évin', def: 'Loi française de 1991 encadrant la publicité pour le tabac (interdiction totale) et l\'alcool (restrictions strictes).' },
            { term: 'Diversity washing', def: 'Instrumentalisation superficielle de la diversité dans la communication d\'une marque sans engagement réel en faveur de l\'inclusion.' }
          ],
          memos: [
            { front: 'Quels sont les quatre principes fondamentaux du droit de la publicité ?', back: 'Véracité (pas de publicité mensongère), identification (distinction publicité/éditorial), loyauté (pas de dénigrement), respect de la personne.' },
            { front: 'Qu\'est-ce que l\'ARPP et quel est son rôle ?', back: 'L\'Autorité de Régulation Professionnelle de la Publicité émet des avis consultatifs avant diffusion et traite les plaintes des consommateurs.' },
            { front: 'Quels sont les enjeux éthiques de la publicité ciblée en ligne ?', back: 'Collecte massive de données, consentement éclairé, vie privée, profilage comportemental, ciblage psychographique et manipulation de l\'opinion.' }
          ]
        }
      ]
    },
    {
      slug: 'relations-publiques',
      title: 'Relations publiques',
      description: 'Gestion de l\'image, communication de crise et relations avec les parties prenantes.',
      lessons: [
        {
          slug: 'fondements-rp',
          title: 'Fondements des relations publiques',
          description: 'Histoire, définitions et modèles théoriques des relations publiques.',
          intro: 'Les relations publiques (RP) constituent une discipline de la communication visant à établir et entretenir des relations mutuellement bénéfiques entre une organisation et ses publics. De la propagande de guerre aux stratégies de communication responsable, les RP ont profondément évolué au cours du XXe siècle, devenant un pilier de la gestion des organisations modernes.',
          introHighlight: 'Edward Bernays, neveu de Sigmund Freud, est considéré comme le père des relations publiques modernes. Son ouvrage « Propaganda » (1928) théorisa l\'art de la persuasion des masses.',
          intro2: '',
          sections: [
            {
              title: 'Des origines à la professionnalisation',
              paragraphs: [
                'Si les pratiques de gestion de l\'image publique remontent à l\'Antiquité (les discours de Cicéron, la propagande d\'Auguste), les relations publiques modernes sont nées aux États-Unis au début du XXe siècle. Ivy Lee, considéré comme le premier professionnel des RP, publia en 1906 sa « Déclaration de principes » prônant la transparence et l\'honnêteté dans la communication des entreprises avec la presse et le public.',
                'Edward Bernays systématisa la discipline en s\'appuyant sur les théories de la psychologie des foules et de la psychanalyse. Ses campagnes emblématiques — « Torches of Freedom » (1929) pour inciter les femmes à fumer, le petit-déjeuner « bacon and eggs » pour l\'industrie porcine — illustrèrent le pouvoir de la manipulation de l\'opinion publique par des techniques scientifiques de persuasion. La professionnalisation des RP s\'accéléra après la Seconde Guerre mondiale avec la création d\'associations professionnelles et de formations universitaires.'
              ],
              highlight: 'Ivy Lee publia en 1906 la première « Déclaration de principes » des relations publiques, prônant transparence et honnêteté.'
            },
            {
              title: 'Les quatre modèles de Grunig et Hunt',
              paragraphs: [
                'James Grunig et Todd Hunt ont proposé en 1984 une typologie de quatre modèles de relations publiques qui reste une référence théorique majeure. Le modèle de l\'agent de presse (press agentry) cherche à attirer l\'attention médiatique par tous les moyens, y compris la désinformation. Le modèle d\'information publique (public information) diffuse une information véridique mais unilatérale, sans chercher le dialogue.',
                'Le modèle asymétrique bidirectionnel (two-way asymmetric) utilise la recherche et les sondages pour adapter les messages et persuader les publics, tout en servant les intérêts de l\'organisation. Le modèle symétrique bidirectionnel (two-way symmetric), considéré par Grunig comme l\'idéal éthique, vise un dialogue authentique entre l\'organisation et ses publics, avec une volonté de compréhension mutuelle et d\'ajustement réciproque. La plupart des organisations pratiquent en réalité un mélange de ces modèles.'
              ],
              highlight: 'Le modèle symétrique bidirectionnel de Grunig représente l\'idéal éthique des RP : dialogue authentique et ajustement réciproque.'
            },
            {
              title: 'Les RP à l\'ère numérique',
              paragraphs: [
                'La révolution numérique a profondément transformé la pratique des relations publiques. Les réseaux sociaux, les blogs et les médias en ligne ont multiplié les canaux de communication et accéléré la circulation de l\'information. Les organisations ne contrôlent plus leur image de manière unilatérale : chaque employé, client ou citoyen peut devenir un relais ou un critique public.',
                'Le concept de « earned media » (couverture médiatique obtenue par la qualité du contenu et des relations), par opposition au « paid media » (publicité achetée) et au « owned media » (canaux propres de l\'organisation), est devenu central dans les stratégies de RP. Les professionnels doivent désormais maîtriser le référencement, le marketing de contenu, le community management et l\'analyse de données, tout en maintenant les compétences traditionnelles de rédaction, de relations presse et de conseil stratégique.'
              ],
              highlight: 'La trilogie earned/paid/owned media structure la stratégie de communication des organisations modernes.'
            }
          ],
          quiz: [
            {
              q: 'Qui est considéré comme le père des relations publiques modernes ?',
              opts: ['Ivy Lee', 'Edward Bernays', 'James Grunig', 'Walter Lippmann'],
              correct: 1,
              explanation: 'Edward Bernays, neveu de Sigmund Freud, est considéré comme le père des relations publiques modernes avec son ouvrage « Propaganda » (1928).'
            },
            {
              q: 'Quel modèle de Grunig et Hunt représente l\'idéal éthique des RP ?',
              opts: ['Agent de presse', 'Information publique', 'Asymétrique bidirectionnel', 'Symétrique bidirectionnel'],
              correct: 3,
              explanation: 'Le modèle symétrique bidirectionnel vise un dialogue authentique et un ajustement réciproque entre l\'organisation et ses publics.'
            },
            {
              q: 'Qu\'est-ce que le « earned media » ?',
              opts: ['La publicité achetée', 'Les canaux propres de l\'organisation', 'La couverture médiatique obtenue par la qualité du contenu', 'Les réseaux sociaux de l\'entreprise'],
              correct: 2,
              explanation: 'Le earned media désigne la couverture médiatique obtenue naturellement par la qualité du contenu et des relations, sans achat d\'espace.'
            }
          ],
          definitions: [
            { term: 'Relations publiques', def: 'Discipline de la communication visant à établir et entretenir des relations mutuellement bénéfiques entre une organisation et ses publics.' },
            { term: 'Earned media', def: 'Couverture médiatique obtenue naturellement par la qualité du contenu, des relations et de la réputation, sans achat d\'espace publicitaire.' },
            { term: 'Paid media', def: 'Espaces de communication achetés par l\'organisation (publicité, sponsoring, contenus sponsorisés).' },
            { term: 'Owned media', def: 'Canaux de communication détenus et contrôlés par l\'organisation (site web, blog, newsletter, réseaux sociaux).' },
            { term: 'Modèle symétrique bidirectionnel', def: 'Modèle de RP de Grunig visant un dialogue authentique entre l\'organisation et ses publics, avec compréhension mutuelle et ajustement réciproque.' }
          ],
          memos: [
            { front: 'Quels sont les quatre modèles de RP de Grunig et Hunt ?', back: 'Agent de presse, information publique, asymétrique bidirectionnel et symétrique bidirectionnel (considéré comme l\'idéal éthique).' },
            { front: 'Quelle est la différence entre earned, paid et owned media ?', back: 'Earned : couverture obtenue naturellement. Paid : espaces achetés (publicité). Owned : canaux propres (site, blog, newsletter).' },
            { front: 'Qui était Ivy Lee et quelle fut sa contribution ?', back: 'Premier professionnel des RP, il publia en 1906 une « Déclaration de principes » prônant transparence et honnêteté dans la communication.' }
          ]
        },
        {
          slug: 'communication-crise',
          title: 'Communication de crise',
          description: 'Prévenir, gérer et surmonter les crises de communication et de réputation.',
          intro: 'La communication de crise est la gestion de la communication d\'une organisation lorsqu\'elle est confrontée à un événement menaçant sa réputation, ses activités ou ses parties prenantes. De la marée noire à la crise sanitaire, de la cyberattaque au scandale financier, la capacité à communiquer efficacement en situation de crise est devenue une compétence stratégique essentielle.',
          introHighlight: 'L\'affaire Tylenol de Johnson & Johnson en 1982 reste le cas d\'école le plus cité en communication de crise : le rappel immédiat de 31 millions de boîtes sauva la réputation de la marque.',
          intro2: '',
          sections: [
            {
              title: 'Anatomie d\'une crise',
              paragraphs: [
                'Une crise se définit comme un événement inattendu ou mal anticipé qui menace les objectifs fondamentaux d\'une organisation, exige une réponse rapide et crée une incertitude élevée. Patrick Lagadec, pionnier français de la recherche sur les crises, distingue trois phases : la phase d\'incubation (accumulation de signaux faibles), la phase aiguë (éclatement et médiatisation) et la phase de rétablissement (retour à la normale et apprentissage).',
                'Timothy Coombs a développé la Situational Crisis Communication Theory (SCCT), qui catégorise les crises selon le niveau de responsabilité attribué à l\'organisation par les parties prenantes. Les crises « victimes » (catastrophe naturelle, attaque terroriste) suscitent de la sympathie, les crises « accidentelles » (défaillance technique, erreur humaine) provoquent un jugement modéré, tandis que les crises « évitables » (fraude, négligence) engendrent une forte indignation.'
              ],
              highlight: 'Patrick Lagadec distingue trois phases de crise : incubation (signaux faibles), phase aiguë (éclatement) et rétablissement.'
            },
            {
              title: 'Stratégies et principes de réponse',
              paragraphs: [
                'La réponse à une crise repose sur plusieurs principes fondamentaux : la rapidité (communiquer dans les premières heures pour éviter le vide informationnel), la transparence (reconnaître les faits connus et les incertitudes), l\'empathie (exprimer sa préoccupation pour les personnes affectées) et la cohérence (maintenir un message unifié à travers tous les canaux et porte-parole).',
                'Les stratégies de réponse varient selon le type de crise et le degré de responsabilité. Elles vont du déni (contestation des faits), à la minimisation (relativiser la gravité), à la reconstruction (compensation, excuses) jusqu\'à la stratégie de renforcement (rappeler les actions positives passées). La SCCT de Coombs recommande d\'adapter la stratégie au niveau de responsabilité perçu : plus l\'organisation est jugée responsable, plus elle doit adopter une posture d\'excuses et de réparation.'
              ],
              highlight: 'Les quatre principes de la communication de crise sont : rapidité, transparence, empathie et cohérence.'
            },
            {
              title: 'Prévention et retour d\'expérience',
              paragraphs: [
                'La prévention des crises passe par la veille stratégique (détection des signaux faibles), la cartographie des risques (identification et hiérarchisation des menaces potentielles), l\'élaboration d\'un plan de crise (procédures, messages pré-rédigés, porte-parole désignés) et la formation par des exercices de simulation. Les organisations les plus résilientes intègrent la gestion de crise dans leur culture managériale plutôt que de la traiter comme une procédure exceptionnelle.',
                'Le retour d\'expérience (REX) est une étape souvent négligée mais cruciale. Il consiste à analyser objectivement la gestion de la crise, identifier les forces et les faiblesses de la réponse, et en tirer des enseignements pour améliorer la préparation future. Les organisations qui pratiquent systématiquement le REX développent une capacité d\'apprentissage organisationnel qui renforce leur résilience face aux crises suivantes.'
              ],
              highlight: 'Le retour d\'expérience (REX) est une étape souvent négligée mais cruciale pour améliorer la préparation aux crises futures.'
            }
          ],
          quiz: [
            {
              q: 'Quelle théorie catégorise les crises selon le niveau de responsabilité perçu ?',
              opts: ['La théorie de l\'agenda setting', 'La SCCT de Timothy Coombs', 'La théorie de Lagadec', 'La théorie des parties prenantes'],
              correct: 1,
              explanation: 'La Situational Crisis Communication Theory (SCCT) de Timothy Coombs catégorise les crises selon le niveau de responsabilité attribué à l\'organisation.'
            },
            {
              q: 'Quels sont les quatre principes fondamentaux de la communication de crise ?',
              opts: ['Déni, minimisation, reconstruction, renforcement', 'Rapidité, transparence, empathie, cohérence', 'Prévention, détection, réponse, rétablissement', 'Analyse, planification, exécution, évaluation'],
              correct: 1,
              explanation: 'Les quatre principes fondamentaux sont la rapidité, la transparence, l\'empathie et la cohérence.'
            },
            {
              q: 'Qu\'est-ce que le retour d\'expérience (REX) en gestion de crise ?',
              opts: ['Un rapport financier post-crise', 'L\'analyse objective de la gestion de la crise pour en tirer des enseignements', 'Un communiqué de presse expliquant la crise', 'La reprise des activités normales'],
              correct: 1,
              explanation: 'Le REX consiste à analyser objectivement la gestion de la crise pour identifier forces et faiblesses et améliorer la préparation future.'
            }
          ],
          definitions: [
            { term: 'Communication de crise', def: 'Gestion de la communication d\'une organisation confrontée à un événement menaçant sa réputation, ses activités ou ses parties prenantes.' },
            { term: 'SCCT', def: 'Situational Crisis Communication Theory, théorie de Timothy Coombs catégorisant les crises selon le niveau de responsabilité perçu de l\'organisation.' },
            { term: 'Signal faible', def: 'Indicateur précoce et discret d\'une menace potentielle, dont la détection permet d\'anticiper une crise avant qu\'elle n\'éclate.' },
            { term: 'Plan de crise', def: 'Document préparatoire définissant les procédures, les messages, les porte-parole et les canaux de communication à activer en cas de crise.' },
            { term: 'Retour d\'expérience (REX)', def: 'Analyse rétrospective de la gestion d\'une crise visant à identifier les enseignements pour améliorer la préparation future.' }
          ],
          memos: [
            { front: 'Quelles sont les trois phases d\'une crise selon Lagadec ?', back: 'Incubation (accumulation de signaux faibles), phase aiguë (éclatement et médiatisation), rétablissement (retour à la normale et apprentissage).' },
            { front: 'Quelles sont les trois catégories de crises selon la SCCT de Coombs ?', back: 'Crises victimes (sympathie), crises accidentelles (jugement modéré), crises évitables (forte indignation).' },
            { front: 'Quels sont les quatre éléments de la prévention des crises ?', back: 'Veille stratégique, cartographie des risques, plan de crise et formation par exercices de simulation.' }
          ]
        },
        {
          slug: 'relations-presse',
          title: 'Relations presse et médias',
          description: 'Techniques de relations avec les journalistes et les médias d\'information.',
          intro: 'Les relations presse constituent l\'une des pratiques les plus anciennes et les plus structurantes des relations publiques. Elles visent à établir et entretenir des relations de confiance avec les journalistes pour obtenir une couverture médiatique favorable, tout en respectant l\'indépendance et la déontologie de la presse.',
          introHighlight: 'Le communiqué de presse, inventé par Ivy Lee en 1906 pour la Pennsylvania Railroad, reste l\'outil de base des relations presse plus d\'un siècle plus tard.',
          intro2: '',
          sections: [
            {
              title: 'Les outils des relations presse',
              paragraphs: [
                'Le communiqué de presse demeure l\'outil fondamental : document synthétique rédigé selon les règles journalistiques (pyramide inversée : information essentielle en premier, détails ensuite), il informe les rédactions d\'un événement, d\'un lancement ou d\'une prise de position. Le dossier de presse approfondit le sujet avec des données chiffrées, des citations et des visuels. La conférence de presse réunit les journalistes pour une annonce importante et permet un échange direct.',
                'L\'attaché de presse ou le responsable des relations médias joue un rôle d\'intermédiaire entre l\'organisation et les journalistes. Son travail quotidien comprend le ciblage des médias pertinents, la personnalisation des angles pour chaque rédaction, la gestion des demandes d\'interviews, le suivi des retombées médiatiques (press clippings) et l\'entretien d\'un réseau de contacts journalistiques fondé sur la confiance et la réciprocité.'
              ],
              highlight: 'Le communiqué de presse suit la règle de la pyramide inversée : l\'information essentielle figure en premier.'
            },
            {
              title: 'Évolution du paysage médiatique',
              paragraphs: [
                'La transformation numérique a profondément modifié les relations presse. La multiplication des médias en ligne, la réduction des effectifs dans les rédactions et l\'accélération du cycle de l\'information ont changé les attentes des journalistes : ils demandent des informations plus rapides, plus visuelles et directement exploitables. Les réseaux sociaux sont devenus un canal complémentaire pour diffuser les messages et interagir avec les journalistes.',
                'Le déclin de la presse traditionnelle et la montée des médias numériques ont fait émerger de nouveaux prescripteurs : blogueurs, podcasters, vidéastes, newsletters indépendantes. Les stratégies de relations médias doivent désormais intégrer ces « nouveaux médias » aux côtés des médias traditionnels. Le concept de « newsroom de marque » (salle de rédaction interne) permet aux organisations de produire leurs propres contenus éditoriaux, brouillant la frontière entre communication et journalisme.'
              ],
              highlight: 'Les « newsrooms de marque » permettent aux organisations de produire leurs propres contenus éditoriaux.'
            },
            {
              title: 'Mesure et évaluation',
              paragraphs: [
                'La mesure des relations presse a longtemps reposé sur des indicateurs quantitatifs simples : nombre de retombées presse, audience potentielle, équivalence publicitaire (AVE — Advertising Value Equivalency). Cependant, l\'AVE est aujourd\'hui largement critiquée et abandonnée par les professionnels, car elle confond visibilité et influence, et ne mesure pas l\'impact réel sur les perceptions et les comportements.',
                'Les Barcelona Principles, adoptés en 2010 et révisés en 2015 et 2020 par l\'AMEC (Association for Measurement and Evaluation of Communication), proposent un cadre de mesure plus rigoureux. Ils recommandent de fixer des objectifs mesurables, de mesurer les résultats (changements de perception et de comportement) plutôt que les productions (nombre de communiqués), d\'intégrer les médias sociaux dans la mesure et de bannir l\'AVE comme indicateur pertinent.'
              ],
              highlight: 'Les Barcelona Principles recommandent de mesurer les résultats (changements de comportement) plutôt que les productions (nombre de retombées).'
            }
          ],
          quiz: [
            {
              q: 'Quel principe de rédaction suit le communiqué de presse ?',
              opts: ['La structure en entonnoir', 'La pyramide inversée', 'Le plan dialectique', 'La structure circulaire'],
              correct: 1,
              explanation: 'Le communiqué de presse suit la règle de la pyramide inversée : l\'information essentielle figure en premier, les détails ensuite.'
            },
            {
              q: 'Pourquoi l\'AVE est-elle critiquée comme indicateur de mesure des RP ?',
              opts: ['Elle est trop coûteuse à calculer', 'Elle confond visibilité et influence', 'Elle ne prend pas en compte la presse écrite', 'Elle favorise les petits médias'],
              correct: 1,
              explanation: 'L\'AVE est critiquée car elle confond visibilité et influence et ne mesure pas l\'impact réel sur les perceptions et les comportements.'
            },
            {
              q: 'Quand ont été adoptés les Barcelona Principles ?',
              opts: ['2005', '2010', '2015', '2020'],
              correct: 1,
              explanation: 'Les Barcelona Principles ont été adoptés en 2010 par l\'AMEC, puis révisés en 2015 et 2020.'
            }
          ],
          definitions: [
            { term: 'Communiqué de presse', def: 'Document synthétique rédigé selon la pyramide inversée, informant les médias d\'un événement ou d\'une annonce.' },
            { term: 'Retombées presse', def: 'Ensemble des articles, reportages et mentions dans les médias résultant d\'une action de relations presse.' },
            { term: 'AVE', def: 'Advertising Value Equivalency, indicateur controversé mesurant la valeur d\'une retombée presse en la comparant au coût d\'un espace publicitaire équivalent.' },
            { term: 'Barcelona Principles', def: 'Cadre international de mesure de la communication adopté en 2010 par l\'AMEC, recommandant de mesurer les résultats plutôt que les productions.' },
            { term: 'Newsroom de marque', def: 'Salle de rédaction interne permettant à une organisation de produire ses propres contenus éditoriaux à destination des médias et du public.' }
          ],
          memos: [
            { front: 'Quels sont les principaux outils des relations presse ?', back: 'Communiqué de presse, dossier de presse, conférence de presse, interviews, suivi des retombées (press clippings).' },
            { front: 'Que recommandent les Barcelona Principles ?', back: 'Fixer des objectifs mesurables, mesurer les résultats (changements de comportement), intégrer les médias sociaux et bannir l\'AVE.' },
            { front: 'Qu\'est-ce qu\'une newsroom de marque ?', back: 'Une salle de rédaction interne permettant à l\'organisation de produire ses propres contenus éditoriaux, brouillant la frontière entre communication et journalisme.' }
          ]
        },
        {
          slug: 'communication-interne',
          title: 'Communication interne',
          description: 'Enjeux, outils et stratégies de communication au sein des organisations.',
          intro: 'La communication interne désigne l\'ensemble des échanges d\'information au sein d\'une organisation. Longtemps considérée comme secondaire, elle est aujourd\'hui reconnue comme un levier stratégique de performance, d\'engagement des collaborateurs et de conduite du changement.',
          introHighlight: 'Selon une étude Gallup, les entreprises avec un fort engagement des employés affichent une rentabilité supérieure de 21 % à celles où l\'engagement est faible.',
          intro2: '',
          sections: [
            {
              title: 'Fonctions et enjeux de la communication interne',
              paragraphs: [
                'La communication interne remplit quatre fonctions essentielles : informer (transmettre les décisions, les résultats et les projets), fédérer (créer un sentiment d\'appartenance et une culture commune), motiver (reconnaître les contributions et valoriser les réussites) et accompagner le changement (expliquer les transformations et réduire les résistances). Ces fonctions sont interdépendantes et contribuent ensemble à la performance organisationnelle.',
                'L\'engagement des collaborateurs est devenu l\'objectif central de la communication interne. Le concept d\'« employee advocacy » (ambassadeurs d\'entreprise) illustre cette évolution : les collaborateurs engagés deviennent les meilleurs porte-parole de l\'organisation sur les réseaux sociaux et dans leur réseau professionnel. La marque employeur, à la croisée des ressources humaines et de la communication, vise à attirer et retenir les talents en valorisant l\'identité et les valeurs de l\'organisation.'
              ],
              highlight: 'L\'employee advocacy transforme les collaborateurs engagés en ambassadeurs de l\'organisation sur les réseaux sociaux.'
            },
            {
              title: 'Outils et canaux de communication interne',
              paragraphs: [
                'Les outils de communication interne se sont considérablement diversifiés. Aux supports traditionnels (journal d\'entreprise, notes de service, tableaux d\'affichage, réunions d\'information) se sont ajoutés les outils numériques : intranet, réseaux sociaux d\'entreprise (Microsoft Teams, Slack, Yammer), newsletters internes, podcasts d\'entreprise et applications mobiles. Le choix des canaux doit être adapté aux publics cibles, au type de message et à la culture de l\'organisation.',
                'La communication managériale, c\'est-à-dire la communication exercée par les managers auprès de leurs équipes, est considérée comme le canal le plus efficace de communication interne. Les collaborateurs font davantage confiance à leur manager direct qu\'aux messages institutionnels de la direction. Former les managers à la communication, leur fournir des éléments de langage et les impliquer dans la diffusion des messages stratégiques est donc un enjeu majeur.'
              ],
              highlight: 'La communication managériale est le canal le plus efficace : les collaborateurs font davantage confiance à leur manager direct.'
            },
            {
              title: 'Communication interne et transformation',
              paragraphs: [
                'La conduite du changement est l\'un des défis majeurs de la communication interne. Le modèle de John Kotter identifie huit étapes pour réussir une transformation : créer un sentiment d\'urgence, former une coalition de leaders, développer une vision, communiquer la vision, lever les obstacles, générer des victoires rapides, consolider les acquis et ancrer le changement dans la culture. À chaque étape, la communication joue un rôle central.',
                'Le télétravail et les organisations hybrides ont renouvelé les défis de la communication interne. Maintenir la cohésion d\'équipe, préserver la culture d\'entreprise et assurer l\'inclusion des collaborateurs à distance nécessitent des stratégies spécifiques : rituels numériques réguliers, espaces de convivialité virtuels, communication asynchrone documentée et attention accrue aux signaux de désengagement. La « fatigue Zoom » et la surcharge informationnelle sont des risques à anticiper.'
              ],
              highlight: 'Le modèle de Kotter identifie huit étapes pour réussir une transformation, avec la communication au coeur de chaque étape.'
            }
          ],
          quiz: [
            {
              q: 'Quelles sont les quatre fonctions de la communication interne ?',
              opts: ['Recruter, former, évaluer, récompenser', 'Informer, fédérer, motiver, accompagner le changement', 'Planifier, organiser, diriger, contrôler', 'Concevoir, produire, diffuser, mesurer'],
              correct: 1,
              explanation: 'Les quatre fonctions de la communication interne sont : informer, fédérer, motiver et accompagner le changement.'
            },
            {
              q: 'Quel canal est considéré comme le plus efficace en communication interne ?',
              opts: ['L\'intranet', 'La newsletter', 'La communication managériale', 'Le réseau social d\'entreprise'],
              correct: 2,
              explanation: 'La communication managériale est le canal le plus efficace car les collaborateurs font davantage confiance à leur manager direct.'
            },
            {
              q: 'Combien d\'étapes le modèle de Kotter identifie-t-il pour réussir une transformation ?',
              opts: ['4', '6', '8', '10'],
              correct: 2,
              explanation: 'Le modèle de John Kotter identifie huit étapes pour réussir une transformation organisationnelle.'
            }
          ],
          definitions: [
            { term: 'Communication interne', def: 'Ensemble des échanges d\'information au sein d\'une organisation visant à informer, fédérer, motiver les collaborateurs et accompagner le changement.' },
            { term: 'Employee advocacy', def: 'Stratégie consistant à mobiliser les collaborateurs comme ambassadeurs de l\'organisation sur les réseaux sociaux et dans leur réseau professionnel.' },
            { term: 'Marque employeur', def: 'Image et réputation d\'une organisation en tant qu\'employeur, visant à attirer et retenir les talents.' },
            { term: 'Communication managériale', def: 'Communication exercée par les managers auprès de leurs équipes, considérée comme le canal le plus efficace de communication interne.' },
            { term: 'Réseau social d\'entreprise', def: 'Plateforme numérique interne permettant aux collaborateurs de communiquer, collaborer et partager des connaissances (ex : Teams, Slack).' }
          ],
          memos: [
            { front: 'Quelles sont les quatre fonctions de la communication interne ?', back: 'Informer (décisions, résultats), fédérer (appartenance, culture), motiver (reconnaissance) et accompagner le changement (transformation).' },
            { front: 'Qu\'est-ce que l\'employee advocacy ?', back: 'Une stratégie transformant les collaborateurs engagés en ambassadeurs de l\'organisation sur les réseaux sociaux et dans leur réseau professionnel.' },
            { front: 'Quels sont les défis de la communication interne en mode hybride ?', back: 'Maintenir la cohésion, préserver la culture, assurer l\'inclusion à distance, gérer la fatigue numérique et la surcharge informationnelle.' }
          ]
        },
        {
          slug: 'communication-politique',
          title: 'Communication politique',
          description: 'Stratégies de communication dans l\'arène politique : campagnes, spin doctors et opinion publique.',
          intro: 'La communication politique désigne l\'ensemble des techniques et stratégies de communication utilisées par les acteurs politiques pour influencer l\'opinion publique, mobiliser les électeurs et exercer le pouvoir. Du discours de tribune aux campagnes numériques ciblées, elle constitue un enjeu central de la vie démocratique.',
          introHighlight: 'La campagne présidentielle de Barack Obama en 2008 est considérée comme la première campagne véritablement « digitale », utilisant massivement les réseaux sociaux et le micro-ciblage pour mobiliser les électeurs.',
          intro2: '',
          sections: [
            {
              title: 'Fondements et évolution de la communication politique',
              paragraphs: [
                'La communication politique a connu trois âges selon Jay Blumler et Dennis Kavanagh. Le premier âge (avant 1960) était dominé par les partis de masse, la presse partisane et les meetings publics. Le deuxième âge (1960-1990) vit l\'avènement de la télévision comme médium politique dominant, avec le célèbre débat Kennedy-Nixon de 1960 comme moment fondateur. Le troisième âge (depuis 1990) est caractérisé par la fragmentation médiatique et la professionnalisation de la communication.',
                'Le concept d\'agenda setting (mise à l\'agenda), formulé par Maxwell McCombs et Donald Shaw en 1972, montre que les médias n\'imposent pas ce que les gens pensent mais déterminent ce à quoi ils pensent. Le cadrage (framing), théorisé par Robert Entman, désigne la manière dont un sujet est présenté, qui influence la perception et l\'interprétation qu\'en ont les citoyens. Ces deux mécanismes sont au coeur des stratégies de communication politique.'
              ],
              highlight: 'Selon la théorie de l\'agenda setting, les médias ne disent pas quoi penser mais à quoi penser.'
            },
            {
              title: 'Les campagnes électorales modernes',
              paragraphs: [
                'Les campagnes électorales modernes reposent sur une combinaison de stratégies : le positionnement (définir l\'image et les thèmes du candidat), le ciblage (identifier les segments électoraux clés), le storytelling politique (construire un récit mobilisateur) et la gestion de l\'image (coaching médiatique, préparation aux débats). Les conseillers en communication politique, ou « spin doctors », orchestrent ces stratégies en coulisses.',
                'Les campagnes numériques ont transformé la communication politique. Le micro-ciblage (utilisation des données pour adresser des messages personnalisés à des électeurs individuels), la mobilisation en ligne (crowdfunding, pétitions, organisation communautaire numérique) et les réseaux sociaux (communication directe sans filtre médiatique) sont devenus des outils incontournables. Le risque de manipulation par les « fake news », les bots et les ingérences étrangères constitue cependant un défi majeur pour l\'intégrité des processus démocratiques.'
              ],
              highlight: 'Les « spin doctors » orchestrent les stratégies de communication politique en coulisses.'
            },
            {
              title: 'Communication gouvernementale et institutionnelle',
              paragraphs: [
                'La communication gouvernementale vise à informer les citoyens des politiques publiques, à justifier les décisions et à susciter l\'adhésion. Le Service d\'Information du Gouvernement (SIG) en France coordonne la communication de l\'État. La communication institutionnelle se distingue de la communication partisane par sa vocation d\'intérêt général, bien que la frontière soit souvent poreuse, notamment en période pré-électorale.',
                'La communication de crise politique (gestion d\'une affaire, d\'un scandale ou d\'une catastrophe) mobilise des techniques spécifiques : maîtrise du tempo médiatique, choix des mots et des symboles, gestion des porte-parole, stratégies de diversion ou d\'aveu. L\'ère numérique a accéléré le rythme des crises et réduit le temps de réponse disponible, rendant la communication politique toujours plus réactive et sous pression.'
              ],
              highlight: 'Le Service d\'Information du Gouvernement (SIG) coordonne la communication de l\'État en France.'
            }
          ],
          quiz: [
            {
              q: 'Qu\'est-ce que la théorie de l\'agenda setting ?',
              opts: ['Les médias imposent aux gens ce qu\'ils pensent', 'Les médias déterminent les sujets auxquels les gens pensent', 'Les politiques contrôlent les médias', 'Les citoyens imposent leur agenda aux médias'],
              correct: 1,
              explanation: 'Selon la théorie de l\'agenda setting de McCombs et Shaw, les médias ne disent pas quoi penser mais déterminent à quoi les gens pensent.'
            },
            {
              q: 'Quel débat télévisé de 1960 est considéré comme un moment fondateur de la communication politique télévisée ?',
              opts: ['Lincoln-Douglas', 'Kennedy-Nixon', 'Carter-Reagan', 'Mitterrand-Chirac'],
              correct: 1,
              explanation: 'Le débat Kennedy-Nixon de 1960 est considéré comme le moment fondateur de la communication politique télévisée.'
            },
            {
              q: 'Qu\'est-ce qu\'un « spin doctor » ?',
              opts: ['Un journaliste politique', 'Un sondeur d\'opinion', 'Un conseiller en communication politique', 'Un directeur de campagne'],
              correct: 2,
              explanation: 'Un spin doctor est un conseiller en communication politique qui orchestre les stratégies de communication des acteurs politiques.'
            }
          ],
          definitions: [
            { term: 'Agenda setting', def: 'Théorie selon laquelle les médias ne disent pas aux gens ce qu\'ils doivent penser, mais déterminent les sujets auxquels ils pensent.' },
            { term: 'Cadrage (framing)', def: 'Manière dont un sujet est présenté par les médias ou les communicants, qui influence la perception et l\'interprétation qu\'en ont les publics.' },
            { term: 'Spin doctor', def: 'Conseiller en communication politique chargé d\'orchestrer la stratégie de communication d\'un acteur politique et de gérer son image.' },
            { term: 'Micro-ciblage politique', def: 'Utilisation des données personnelles pour adresser des messages politiques personnalisés à des électeurs individuels via les canaux numériques.' },
            { term: 'Communication gouvernementale', def: 'Communication de l\'État visant à informer les citoyens des politiques publiques et à susciter l\'adhésion, coordonnée par le SIG en France.' }
          ],
          memos: [
            { front: 'Quels sont les trois âges de la communication politique selon Blumler et Kavanagh ?', back: 'Premier âge : partis de masse et presse. Deuxième âge : télévision (1960-1990). Troisième âge : fragmentation médiatique et professionnalisation (depuis 1990).' },
            { front: 'Quelle est la différence entre agenda setting et cadrage (framing) ?', back: 'L\'agenda setting détermine les sujets auxquels les gens pensent. Le cadrage (framing) influence la manière dont ils interprètent ces sujets.' },
            { front: 'Quels sont les quatre piliers d\'une campagne électorale moderne ?', back: 'Positionnement (image du candidat), ciblage (segments électoraux), storytelling (récit mobilisateur) et gestion de l\'image (coaching, débats).' }
          ]
        }
      ]
    }
  ]
};
