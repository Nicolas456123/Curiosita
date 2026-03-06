// Neurosciences discipline definition for Curiosita
// 6 hubs, 5 lessons each (30 lessons total)
'use strict';

module.exports = {
  slug: 'neurosciences',
  title: 'Neurosciences',
  description: 'Exploration du cerveau et du systeme nerveux, de la synapse a la conscience. Decouvrez les mecanismes neuronaux qui sous-tendent la perception, la memoire, les emotions et la pensee.',
  icon: '\u{1F9E0}',
  cat: 'Neurosciences',
  themeSlug: 'sciences-nature',
  accent: '#7ae8d8',
  accent2: '#a0f0e4',
  accentDim: 'rgba(122,232,216,0.1)',
  accentHero: 'rgba(122,232,216,0.08)',
  introTitle: "Qu'est-ce que les neurosciences ?",
  introText: "Les neurosciences regroupent l'ensemble des disciplines scientifiques qui etudient le systeme nerveux, depuis les mecanismes moleculaires de la synapse jusqu'aux bases biologiques de la conscience et du comportement. Nees de la convergence entre biologie, psychologie, physique et informatique, elles constituent aujourd'hui l'un des champs de recherche les plus dynamiques. De Santiago Ramon y Cajal, prix Nobel 1906 pour sa decouverte du neurone individuel, aux techniques modernes d'imagerie cerebrale, les neurosciences ont profondement transforme notre comprehension du cerveau humain et de ses cent milliards de neurones.",
  introHighlight: "Le cerveau humain contient environ 86 milliards de neurones connectes par quelque 150 000 milliards de synapses, formant le reseau le plus complexe connu dans l'univers.",
  articleLow: 'les',
  hubs: [
    // ── Hub 1: Neurosciences cognitives ──
    {
      slug: 'cognitive',
      title: 'Neurosciences cognitives',
      description: "Etude des bases neurales de la perception, de l'attention, de la memoire, du langage et de la prise de decision.",
      introText: "Les neurosciences cognitives se situent au carrefour de la psychologie cognitive et de la neurobiologie. Elles cherchent a comprendre comment les processus mentaux — percevoir, se souvenir, parler, decider — emergent de l'activite de reseaux neuronaux specifiques. Cette discipline s'est structuree dans les annees 1970-1980 grace a des pionniers comme Michael Gazzaniga et George Miller, qui ont forge le terme meme de « neurosciences cognitives » lors d'un trajet en taxi new-yorkais en 1976.",
      introHighlight: "Les neurosciences cognitives relient chaque fonction mentale a des circuits neuronaux precis, permettant de comprendre comment le cerveau engendre l'esprit.",
      lessons: [
        {
          slug: 'perception',
          title: 'La perception',
          description: "Comment le cerveau transforme les signaux sensoriels en representations conscientes du monde.",
          intro: "La perception est le processus par lequel le cerveau interprete les informations sensorielles pour construire une representation coherente de l'environnement. Loin d'etre un simple enregistrement passif, elle implique des mecanismes actifs de filtrage, d'integration et d'interpretation qui mobilisent des milliards de neurones organises en hierarchies de traitement.",
          introHighlight: "La perception n'est pas une copie fidele de la realite mais une construction active du cerveau, faconnee par l'experience et les attentes.",
          sections: [
            {
              title: 'Les voies sensorielles et le traitement hierarchique',
              paragraphs: [
                "Chaque modalite sensorielle dispose d'une voie dediee reliant les recepteurs peripheriques au cortex cerebral. Pour la vision, les photorecepteurs de la retine — environ 120 millions de batonnets et 6 millions de cones — convertissent la lumiere en signaux electriques transmis via le nerf optique au corps genouille lateral du thalamus, puis au cortex visuel primaire (aire V1) situe dans le lobe occipital. David Hubel et Torsten Wiesel, prix Nobel 1981, ont demontre que les neurones de V1 repondent selectivement a des orientations specifiques de lignes et de contours.",
                "Le traitement se poursuit de maniere hierarchique : les aires V2, V4 et V5/MT extraient des caracteristiques de plus en plus complexes (couleur, mouvement, forme). Deux grandes voies divergent ensuite : la voie ventrale (« quoi »), projetant vers le lobe temporal pour l'identification des objets, et la voie dorsale (« ou/comment »), projetant vers le lobe parietal pour la localisation spatiale et le guidage de l'action. Ce modele a ete propose par Mishkin et Ungerleider en 1982."
              ],
              highlight: "Le cortex visuel primaire V1 contient environ 140 millions de neurones et constitue le premier relais cortical du traitement visuel, organise en colonnes d'orientation decouvertes par Hubel et Wiesel."
            },
            {
              title: 'La perception multimodale et les illusions',
              paragraphs: [
                "Le cerveau integre en permanence les informations provenant de plusieurs sens pour creer une perception unifiee. Le cortex parietal posterieur et le colliculus superieur jouent un role central dans cette integration multisensorielle. L'effet McGurk, decouvert en 1976 par Harry McGurk et John MacDonald, illustre spectaculairement ce phenomene : lorsqu'un son /ba/ est presente avec une video montrant une bouche prononcant /ga/, le sujet percoit /da/, une fusion des deux informations.",
                "Les illusions perceptives revelent les heuristiques utilisees par le cerveau. L'illusion de Muller-Lyer (1889), ou deux segments de meme longueur paraissent inegaux selon l'orientation des fleches a leurs extremites, demontre que le cerveau applique automatiquement des regles de perspective. Le neuroscientifique Richard Gregory a propose que ces illusions resultent d'hypotheses perceptives inconscientes, heritees de l'adaptation evolutive du systeme visuel."
              ]
            },
            {
              title: 'La plasticite perceptive',
              paragraphs: [
                "La perception n'est pas figee : elle se modifie avec l'experience grace a la plasticite neuronale. Les travaux de Michael Merzenich dans les annees 1980 ont montre que les cartes corticales somatosensorielles se reorganisent en fonction de l'usage. Chez les musiciens, par exemple, la representation corticale des doigts de la main gauche (pour les violonistes) est significativement etendue par rapport aux non-musiciens, comme l'a demontre Thomas Elbert en 1995.",
                "Cette plasticite perceptive se manifeste egalement apres des lesions. Chez les patients aveugles, le cortex visuel est recrute pour le traitement du braille et de l'audition spatiale, un phenomene appele plasticite intermodale. Alvaro Pascual-Leone a montre par stimulation magnetique transcranienne que cette reorganisation peut survenir en quelques jours seulement lorsque la vision est temporairement supprimee."
              ]
            }
          ],
          quiz: [
            { q: "Qui a decouvert les colonnes d'orientation dans le cortex visuel ?", opts: ['Santiago Ramon y Cajal', 'David Hubel et Torsten Wiesel', 'Roger Sperry', 'Wilder Penfield'], correct: 1, explanation: "David Hubel et Torsten Wiesel ont decouvert les colonnes d'orientation dans V1, ce qui leur a valu le prix Nobel de physiologie ou medecine en 1981." },
            { q: "Que designe la voie ventrale du traitement visuel ?", opts: ["La voie du « ou » (localisation spatiale)", "La voie du « quoi » (identification des objets)", "La voie du mouvement", "La voie de la memoire visuelle"], correct: 1, explanation: "La voie ventrale, projetant vers le lobe temporal, est impliquee dans l'identification et la reconnaissance des objets. Elle est aussi appelee voie du « quoi »." },
            { q: "Qu'est-ce que l'effet McGurk ?", opts: ["Une illusion tactile", "Une fusion perceptive audiovisuelle", "Un trouble de la memoire", "Un reflexe vestibulaire"], correct: 1, explanation: "L'effet McGurk est une illusion perceptive ou l'information visuelle (mouvements des levres) modifie la perception d'un son, demontrant l'integration multisensorielle." },
            { q: "Combien de photorecepteurs en batonnets contient approximativement la retine humaine ?", opts: ['6 millions', '20 millions', '120 millions', '500 millions'], correct: 2, explanation: "La retine humaine contient environ 120 millions de batonnets (vision scotopique) et 6 millions de cones (vision des couleurs)." },
            { q: "Que demontre la plasticite intermodale chez les patients aveugles ?", opts: ["Le cortex visuel degenere completement", "Le cortex visuel est recrute pour d'autres sens", "La vision peut etre restauree spontanement", "Les autres sens ne changent pas"], correct: 1, explanation: "La plasticite intermodale designe le recrutement du cortex visuel pour traiter des informations d'autres modalites sensorielles, comme le toucher (braille) ou l'audition spatiale, chez les personnes aveugles." }
          ],
          definitions: [
            { term: 'Somatotopie', def: "Organisation spatiale du cortex sensoriel ou moteur qui reproduit la carte du corps, chaque region corticale correspondant a une partie specifique du corps." },
            { term: 'Voie ventrale', def: "Voie neuronale reliant le cortex visuel au lobe temporal, impliquee dans la reconnaissance et l'identification des objets (voie du « quoi »)." },
            { term: 'Plasticite intermodale', def: "Capacite du cortex normalement dedie a une modalite sensorielle a traiter des informations provenant d'une autre modalite, notamment apres une privation sensorielle." }
          ],
          memos: [
            { front: 'Combien de neurones dans le cortex visuel primaire ?', back: "Le cortex visuel primaire (V1) contient environ 140 millions de neurones, repartis en six couches distinctes, et constitue le premier relais cortical du traitement visuel." },
            { front: 'Anecdote : la decouverte des colonnes d\'orientation', back: "Hubel et Wiesel ont decouvert les neurones selectifs a l'orientation par hasard en 1958 : un signal apparut lorsque le bord d'une lame de verre traversa le champ recepteur d'un neurone du chat qu'ils enregistraient." },
            { front: "Le terme « neurosciences cognitives »", back: "Le terme a ete invente en 1976 par Michael Gazzaniga et George Miller lors d'un trajet en taxi vers un diner a New York, combinant neurosciences et sciences cognitives." }
          ]
        },
        {
          slug: 'attention',
          title: "L'attention",
          description: "Les mecanismes cerebraux qui permettent de selectionner, filtrer et concentrer le traitement de l'information.",
          intro: "L'attention est le processus cognitif qui permet de selectionner certaines informations pour un traitement approfondi tout en inhibant les distractions. William James ecrivait en 1890 que « tout le monde sait ce qu'est l'attention », mais les neurosciences modernes revelent un ensemble de systemes neuronaux complexes sous-tendant cette capacite apparemment simple.",
          introHighlight: "L'attention n'est pas un mecanisme unique mais un ensemble de reseaux neuronaux distincts gerant l'alerte, l'orientation et le controle executif.",
          sections: [
            {
              title: "Les reseaux attentionnels de Posner",
              paragraphs: [
                "Michael Posner et ses collaborateurs ont identifie trois reseaux attentionnels distincts dans le cerveau. Le reseau d'alerte, impliquant le locus coeruleus et le cortex frontal droit, maintient un etat de vigilance et de preparation. Le reseau d'orientation, centre sur le cortex parietal posterieur et les champs oculomoteurs frontaux, dirige l'attention vers des stimuli pertinents dans l'espace. Le reseau de controle executif, base sur le cortex cingulaire anterieur et le cortex prefrontal dorsolateral, gere les conflits entre reponses et la prise de decision.",
                "Ces trois reseaux reposent sur des systemes neurochimiques differents : le reseau d'alerte depend principalement de la noradrenaline, le reseau d'orientation de l'acetylcholine, et le reseau executif de la dopamine. Cette distinction explique pourquoi certaines lesions ou certains medicaments affectent selectivement un aspect de l'attention sans alterer les autres."
              ],
              highlight: "Le modele de Posner distingue trois reseaux attentionnels — alerte (noradrenaline), orientation (acetylcholine) et controle executif (dopamine) — chacun sous-tendu par des circuits cerebraux et des neuromodulateurs distincts."
            },
            {
              title: "Attention endogene et exogene",
              paragraphs: [
                "L'attention peut etre dirigee volontairement (endogene, top-down) ou capturee automatiquement par un stimulus saillant (exogene, bottom-up). L'attention endogene implique principalement le reseau frontoparietal dorsal : le cortex parietal superieur et les champs oculomoteurs frontaux generent des signaux de biais qui modulen l'activite des aires sensorielles. Robert Desimone et John Duncan ont propose en 1995 le modele de la competition biaisee, selon lequel l'attention resout la competition entre stimuli dans le cortex visuel.",
                "L'attention exogene est declenchee par des evenements inattendus ou saillants et repose sur le reseau ventral droit, incluant la jonction temporoparietale et le gyrus frontal inferieur. Maurizio Corbetta et Gordon Shulman ont propose en 2002 un modele influent distinguant ces deux systemes attentionnels. La capture attentionnelle par un stimulus exogene est rapide (environ 100 ms) mais transitoire, tandis que l'attention endogene est plus lente a deployer (300 ms) mais peut etre maintenue."
              ]
            },
            {
              title: "La cecite attentionnelle et ses implications",
              paragraphs: [
                "La cecite attentionnelle (inattentional blindness), mise en evidence par Arien Mack et Irvin Rock en 1998, designe l'incapacite a percevoir un stimulus pourtant visible lorsque l'attention est engagee ailleurs. L'experience du gorille invisible de Daniel Simons et Christopher Chabris (1999) en est l'illustration la plus celebre : environ 50 % des participants ne remarquent pas un acteur deguise en gorille traversant une scene lorsqu'ils comptent des passes de ballon.",
                "Ce phenomene a des implications majeures pour la securite routiere et la fiabilite des temoignages. Il demontre que la conscience perceptive depend etroitement de l'attention : sans allocation attentionnelle, meme des stimuli tres saillants peuvent echapper a la detection consciente. Le clignement attentionnel (attentional blink), decouvert par Jane Raymond en 1992, montre une limitation temporelle similaire : apres la detection d'une cible, le systeme attentionnel est « aveugle » pendant 200 a 500 millisecondes."
              ]
            }
          ],
          quiz: [
            { q: "Combien de reseaux attentionnels distingue le modele de Posner ?", opts: ['Deux', 'Trois', 'Quatre', 'Cinq'], correct: 1, explanation: "Le modele de Posner distingue trois reseaux : le reseau d'alerte, le reseau d'orientation et le reseau de controle executif, chacun associe a des structures cerebrales et des neuromodulateurs specifiques." },
            { q: "Quel neuromodulateur est principalement associe au reseau d'orientation ?", opts: ['Dopamine', 'Serotonine', 'Acetylcholine', 'Noradrenaline'], correct: 2, explanation: "Le reseau d'orientation spatiale de l'attention depend principalement de l'acetylcholine. La noradrenaline est associee a l'alerte et la dopamine au controle executif." },
            { q: "Qu'est-ce que la cecite attentionnelle ?", opts: ["Une perte de vision due a une lesion occipitale", "L'incapacite a percevoir un stimulus visible quand l'attention est engagee ailleurs", "Un trouble de la vision peripherique", "Un effet secondaire de la meditation"], correct: 1, explanation: "La cecite attentionnelle est un phenomene ou un stimulus pourtant clairement visible n'est pas percu lorsque l'attention du sujet est mobilisee par une autre tache." },
            { q: "Quel est le pourcentage approximatif de participants qui ne voient pas le gorille dans l'experience de Simons et Chabris ?", opts: ['10 %', '25 %', '50 %', '75 %'], correct: 2, explanation: "Dans l'experience originale de 1999, environ 50 % des participants ne remarquaient pas le gorille traversant la scene, illustrant la puissance de la cecite attentionnelle." },
            { q: "Qui a propose le modele de la competition biaisee ?", opts: ['Michael Posner', 'Robert Desimone et John Duncan', 'Maurizio Corbetta', 'William James'], correct: 1, explanation: "Robert Desimone et John Duncan ont propose en 1995 le modele de la competition biaisee, selon lequel l'attention module la competition entre representations neuronales dans le cortex visuel." }
          ],
          definitions: [
            { term: 'Attention endogene', def: "Forme d'attention dirigee volontairement par le sujet (top-down), impliquant le reseau frontoparietal dorsal et permettant de selectionner des informations en fonction des buts et attentes." },
            { term: 'Clignement attentionnel', def: "Deficit temporaire de detection d'une deuxieme cible lorsqu'elle apparait 200 a 500 ms apres une premiere cible dans un flux rapide de stimuli (attentional blink)." },
            { term: 'Cecite attentionnelle', def: "Echec a percevoir un stimulus pourtant visible et non masque lorsque l'attention est absorbee par une autre tache, demontrant le role de l'attention dans la conscience perceptive." }
          ],
          memos: [
            { front: "L'experience du gorille invisible", back: "En 1999, Simons et Chabris ont montre qu'environ 50 % des sujets ne voient pas un gorille traversant une scene quand leur attention est mobilisee par le comptage de passes de ballon." },
            { front: "William James et l'attention (1890)", back: "Dans ses Principles of Psychology (1890), William James ecrivait : « Everyone knows what attention is. » — mais les neurosciences montrent que l'attention est un ensemble de systemes bien plus complexe qu'il ne le pensait." }
          ]
        },
        {
          slug: 'memoire',
          title: 'La memoire',
          description: "Les systemes neuronaux d'encodage, de consolidation et de rappel des souvenirs.",
          intro: "La memoire est la capacite du cerveau a encoder, stocker et rappeler des informations. Les neurosciences ont revele qu'il n'existe pas un seul systeme de memoire mais plusieurs, chacun reposant sur des structures cerebrales distinctes. Le cas celebre du patient Henry Molaison (H.M.), qui perdit la capacite de former de nouveaux souvenirs episodiques apres l'ablation bilaterale de ses hippocampes en 1953, a revolutionne notre comprehension de la memoire.",
          introHighlight: "La memoire n'est pas un systeme unique mais un ensemble de systemes distincts — episodique, semantique, procedurale — chacun dependant de circuits cerebraux specifiques.",
          sections: [
            {
              title: 'Les systemes de memoire',
              paragraphs: [
                "Endel Tulving a propose en 1972 la distinction fondamentale entre memoire episodique (souvenirs d'evenements personnels) et memoire semantique (connaissances generales sur le monde). La memoire episodique depend de l'hippocampe et du cortex entorhinal dans le lobe temporal median, tandis que la memoire semantique, bien qu'initialement dependante de l'hippocampe pour l'encodage, se consolide progressivement dans le neocortex temporal et frontal. Larry Squire a propose en 1992 une taxonomie plus complete distinguant memoire declarative (explicite) et non declarative (implicite).",
                "La memoire procedurale, un sous-type de memoire implicite, concerne l'apprentissage d'habiletes motrices et cognitives. Elle repose principalement sur les ganglions de la base (striatum) et le cervelet. Le patient H.M. pouvait apprendre de nouvelles habiletes motrices — comme le dessin en miroir — sans aucun souvenir conscient de les avoir pratiquees, demontrant l'independance de ces systemes. La memoire de travail, conceptualisee par Alan Baddeley en 1974, implique le cortex prefrontal dorsolateral et permet le maintien temporaire et la manipulation d'informations."
              ],
              highlight: "Le patient H.M., apres ablation bilaterale de ses hippocampes en 1953 par le neurochirurgien William Scoville, a vecu 55 ans sans pouvoir former de nouveaux souvenirs episodiques, tout en conservant ses souvenirs anciens et sa memoire procedurale."
            },
            {
              title: "La consolidation et la reconsolidation",
              paragraphs: [
                "La consolidation est le processus par lequel les souvenirs fragiles deviennent des traces stables. Selon la theorie standard de la consolidation, proposee par Squire et Alvarez en 1995, l'hippocampe joue un role temporaire de relais : pendant le sommeil, les souvenirs recents sont « rejoues » (replay hippocampique) et progressivement transferes vers le neocortex sur une periode de semaines a annees. Les oscillations lentes du sommeil profond (0,5-4 Hz) et les fuseaux du sommeil (12-16 Hz) jouent un role crucial dans ce transfert.",
                "La decouverte de la reconsolidation par Karim Nader, Glenn Schafe et Joseph LeDoux en 2000 a bouleverse le dogme selon lequel les souvenirs consolides sont immuables. Ils ont montre que lorsqu'un souvenir est reactive (rappele), il redevient temporairement labile et doit etre re-stabilise par un processus dependant de la synthese proteique. Cette decouverte a ouvert des perspectives therapeutiques pour le traitement du trouble de stress post-traumatique (TSPT), en permettant potentiellement de modifier des souvenirs traumatiques lors de leur reactivation."
              ]
            },
            {
              title: "Les mecanismes synaptiques de la memoire",
              paragraphs: [
                "Au niveau cellulaire, la memoire repose sur la potentialisation a long terme (PLT), un renforcement durable de la transmission synaptique decouvert par Tim Bliss et Terje Lomo en 1973 dans l'hippocampe du lapin. La PLT implique les recepteurs NMDA du glutamate, qui fonctionnent comme des detecteurs de coincidence : ils ne s'ouvrent que lorsque la cellule presynaptique est active et la cellule postsynaptique est depolarisee, implementant ainsi la regle de Hebb (« les neurones qui s'activent ensemble se connectent ensemble »).",
                "L'activation des recepteurs NMDA declenche un influx de calcium qui active des cascades de signalisation intracellulaire impliquant la CaMKII, la PKC et la CREB. La PLT precoce (duree de quelques heures) depend de modifications post-traductionnelles des proteines existantes, tandis que la PLT tardive (duree de jours a semaines) necessite la transcription de nouveaux genes et la synthese de nouvelles proteines, formant de nouvelles epines dendritiques et renforçant les connexions synaptiques."
              ]
            }
          ],
          quiz: [
            { q: "Qui etait le patient H.M. ?", opts: ["Un neuroscientifique celebre", "Un patient devenu amnesique apres ablation bilaterale des hippocampes", "Le premier patient soumis a une IRM fonctionnelle", "Un patient atteint de la maladie d'Alzheimer"], correct: 1, explanation: "Henry Molaison (H.M.) est devenu le cas neurologique le plus etudie de l'histoire apres que l'ablation de ses hippocampes en 1953 l'ait rendu incapable de former de nouveaux souvenirs episodiques." },
            { q: "Qui a distingue la memoire episodique de la memoire semantique ?", opts: ['Alan Baddeley', 'Endel Tulving', 'Larry Squire', 'Eric Kandel'], correct: 1, explanation: "Endel Tulving a propose en 1972 la distinction entre memoire episodique (souvenirs personnels) et memoire semantique (connaissances generales), une distinction fondamentale en neurosciences de la memoire." },
            { q: "Qu'est-ce que la potentialisation a long terme (PLT) ?", opts: ["Un trouble de la memoire a long terme", "Un renforcement durable de la transmission synaptique", "Une technique d'imagerie cerebrale", "Un type de neurotransmetteur"], correct: 1, explanation: "La PLT est un renforcement durable de l'efficacite synaptique decouvert par Bliss et Lomo en 1973, considere comme le substrat cellulaire de l'apprentissage et de la memoire." },
            { q: "Qu'a demontre la decouverte de la reconsolidation ?", opts: ["Que les souvenirs anciens sont immuables", "Qu'un souvenir reactive redevient temporairement modifiable", "Que l'hippocampe n'est pas necessaire a la memoire", "Que le sommeil n'a aucun role dans la consolidation"], correct: 1, explanation: "Nader, Schafe et LeDoux ont montre en 2000 que lorsqu'un souvenir consolide est reactive, il redevient labile et doit etre re-stabilise, ouvrant des perspectives therapeutiques pour modifier des souvenirs traumatiques." },
            { q: "Quel recepteur est essentiel pour la potentialisation a long terme ?", opts: ['Recepteur GABA-A', 'Recepteur NMDA', 'Recepteur nicotinique', 'Recepteur mu-opioide'], correct: 1, explanation: "Les recepteurs NMDA du glutamate jouent un role cle dans l'induction de la PLT. Ils fonctionnent comme des detecteurs de coincidence, s'ouvrant uniquement lorsque les cellules pre- et postsynaptiques sont actives simultanement." }
          ],
          definitions: [
            { term: 'Potentialisation a long terme (PLT)', def: "Renforcement durable de la transmission synaptique apres une stimulation a haute frequence, decouvert par Bliss et Lomo en 1973, considere comme le mecanisme cellulaire de la memoire." },
            { term: 'Reconsolidation', def: "Processus par lequel un souvenir reactive redevient temporairement labile et doit etre re-stabilise, decouverte qui a remis en question l'idee que les souvenirs consolides sont permanents." },
            { term: 'Memoire de travail', def: "Systeme de maintien temporaire et de manipulation d'informations en cours de traitement, conceptualise par Alan Baddeley en 1974, impliquant le cortex prefrontal dorsolateral." },
            { term: 'Hippocampe', def: "Structure du lobe temporal median, en forme d'hippocampe (cheval marin), essentielle pour l'encodage des souvenirs episodiques et la navigation spatiale." }
          ],
          memos: [
            { front: 'Le cas du patient H.M.', back: "Henry Molaison a vecu de 1926 a 2008. Apres l'ablation de ses hippocampes en 1953 pour traiter son epilepsie, il ne pouvait plus former de nouveaux souvenirs episodiques mais conservait ses memoires anciennes et pouvait apprendre de nouvelles habiletes motrices." },
            { front: 'La regle de Hebb', back: "Proposee par Donald Hebb en 1949 : « les neurones qui s'activent ensemble se connectent ensemble ». Ce principe explique comment la repetition et l'association renforcent les connexions synaptiques et constituent la base de l'apprentissage." },
            { front: 'Replay hippocampique et sommeil', back: "Pendant le sommeil profond, les sequences d'activation neuronale vecues pendant l'eveil sont « rejouees » dans l'hippocampe a vitesse acceleree, facilitant le transfert des souvenirs vers le neocortex pour un stockage a long terme." }
          ]
        },
        {
          slug: 'langage',
          title: 'Le langage',
          description: "Les bases neurales de la production, de la comprehension et de l'acquisition du langage.",
          intro: "Le langage est une capacite cognitive propre a l'espece humaine qui permet de communiquer des idees complexes grace a un systeme de symboles regis par une grammaire. Les neurosciences du langage cherchent a identifier les structures cerebrales et les reseaux neuronaux impliques dans la production, la comprehension et l'apprentissage linguistique. Cette recherche remonte aux observations pionnières de Paul Broca (1861) et Carl Wernicke (1874).",
          introHighlight: "Le langage repose sur un vaste reseau perisylvien gauche, bien au-dela des seules aires de Broca et Wernicke, connecte par le faisceau arque et impliquant des regions frontales, temporales et parietales.",
          sections: [
            {
              title: "Les aires classiques du langage",
              paragraphs: [
                "En 1861, Paul Broca examina un patient surnomme « Tan » qui ne pouvait plus produire qu'une seule syllabe malgre une comprehension intacte. L'autopsie revela une lesion du gyrus frontal inferieur gauche (aire de Broca, BA 44-45). Cette observation fonda le principe de la localisation cerebrale des fonctions cognitives. En 1874, Carl Wernicke decrivit un syndrome complementaire : des patients avec des lesions du gyrus temporal superieur posterieur gauche (aire de Wernicke) produisaient un discours fluent mais incomprehensible et ne comprenaient pas le langage.",
                "Le modele classique Wernicke-Geschwind (1965) propose un circuit simple : la comprehension dans l'aire de Wernicke, transmise via le faisceau arque a l'aire de Broca pour la production. Cependant, les neurosciences modernes ont montre que ce modele est largement insuffisant. L'imagerie cerebrale a revele que le traitement du langage implique un reseau distribue incluant le cortex temporal anterieur (traitement semantique), le cortex prefrontal ventrolateral (selection lexicale), le cortex parietal inferieur (traitement phonologique) et le cervelet (articulation)."
              ],
              highlight: "Le patient « Tan » de Broca, examine en 1861, est considere comme le point de depart de la neuropsychologie moderne. Son cerveau, conserve au musee Dupuytren a Paris, a ete scanne par IRM en 2007, revelant que la lesion etait plus etendue que ce que Broca avait decrit."
            },
            {
              title: "Le modele a double voie du langage",
              paragraphs: [
                "Gregory Hickok et David Poeppel ont propose en 2007 un modele influent du traitement du langage base sur deux voies, par analogie avec les voies visuelles ventrale et dorsale. La voie ventrale, reliant le cortex temporal superieur au cortex temporal anterieur et inferieur via le faisceau unciné et le faisceau longitudinal inferieur, est specialisee dans le traitement semantique — la comprehension du sens des mots et des phrases.",
                "La voie dorsale, connectant les regions temporales aux regions frontales via le faisceau arque et le faisceau longitudinal superieur, est impliquee dans le traitement phonologique et la repetition. Les lesions de cette voie produisent une aphasie de conduction, caracterisee par une difficulte a repeter des mots malgre une comprehension et une production relativement preservees. Ce modele a double voie a ete largement confirme par les etudes d'imagerie de diffusion (DTI) et de stimulation electrique corticale peropératoire."
              ]
            },
            {
              title: "L'acquisition du langage et la periode critique",
              paragraphs: [
                "Le cerveau humain est biologiquement prepare pour acquerir le langage. Les nouveau-nes discriminent les phonemes de toutes les langues, mais cette capacite se restreint aux phonemes de la langue maternelle vers 10-12 mois, un processus etudie par Patricia Kuhl sous le nom de « aimant perceptif ». Les travaux de Jacques Mehler et d'Emmanuel Dupoux ont montre que les nourrissons de quelques jours distinguent deja leur langue maternelle d'autres langues grace aux proprietes rythmiques de la parole.",
                "L'hypothese de la periode critique, formulee par Eric Lenneberg en 1967, postule une fenetre temporelle optimale pour l'acquisition du langage, se fermant a la puberte. Le cas de Genie, une enfant privee de langage jusqu'a l'age de 13 ans et qui n'a jamais pleinement acquis la syntaxe, soutient cette hypothese. Les etudes de la langue des signes chez les sourds montrent egalement que l'acquisition apres la puberte conduit a une maitrise grammaticale inferieure, meme apres des annees de pratique."
              ]
            }
          ],
          quiz: [
            { q: "Qu'observa Paul Broca chez son patient « Tan » en 1861 ?", opts: ["Une incapacite a comprendre le langage", "Une incapacite a produire le langage malgre une comprehension intacte", "Une perte totale du langage", "Une production de langage excessivement fluent"], correct: 1, explanation: "Le patient « Tan » de Broca presentait une aphasie de production : il ne pouvait plus produire qu'une seule syllabe (« tan ») tout en comprenant le langage. La lesion se situait dans le gyrus frontal inferieur gauche." },
            { q: "Quelle est la voie specialisee dans le traitement semantique selon Hickok et Poeppel ?", opts: ['La voie dorsale', 'La voie ventrale', 'Le faisceau arque', 'Le corps calleux'], correct: 1, explanation: "Dans le modele a double voie de Hickok et Poeppel (2007), la voie ventrale relie les regions temporales superieures aux regions temporales anterieures et inferieures pour le traitement semantique (comprehension du sens)." },
            { q: "Qu'est-ce que l'hypothese de la periode critique pour le langage ?", opts: ["L'idee que le langage s'acquiert mieux a l'age adulte", "L'existence d'une fenetre optimale se fermant a la puberte", "La theorie que tout le monde apprend le langage au meme rythme", "L'impossibilite totale d'apprendre une langue apres 5 ans"], correct: 1, explanation: "L'hypothese de la periode critique, formulee par Lenneberg en 1967, postule une fenetre temporelle optimale pour l'acquisition du langage, se fermant graduellement autour de la puberte." },
            { q: "A quel age les nourrissons commencent-ils a perdre la capacite de discriminer les phonemes non natifs ?", opts: ['A la naissance', 'Vers 4-6 mois', 'Vers 10-12 mois', 'Vers 3 ans'], correct: 2, explanation: "Vers 10-12 mois, le systeme perceptif du nourrisson se specialise pour les phonemes de sa langue maternelle, perdant progressivement la capacite de discriminer les contrastes phonemiques non natifs." },
            { q: "Quel faisceau connecte principalement l'aire de Broca a l'aire de Wernicke ?", opts: ['Le faisceau uncine', 'Le corps calleux', 'Le faisceau arque', 'Le faisceau longitudinal inferieur'], correct: 2, explanation: "Le faisceau arque est le principal faisceau de substance blanche reliant les regions frontales (aire de Broca) aux regions temporales posterieures (aire de Wernicke) dans l'hemisphere gauche." }
          ],
          definitions: [
            { term: 'Aphasie de Broca', def: "Trouble du langage caracterise par une production reduite, non fluente et agrammatique, avec une comprehension relativement preservee, resultant d'une lesion du gyrus frontal inferieur gauche." },
            { term: 'Faisceau arque', def: "Principal faisceau de fibres nerveuses reliant les aires temporales posterieures aux aires frontales dans l'hemisphere gauche, essentiel pour la repetition et le traitement phonologique." },
            { term: 'Periode critique', def: "Fenetre temporelle du developpement durant laquelle le cerveau est optimalement receptif a l'acquisition de certaines competences, comme le langage, et apres laquelle l'apprentissage devient significativement plus difficile." }
          ],
          memos: [
            { front: "Le cerveau de « Tan »", back: "Le cerveau du patient « Tan » de Broca, mort en 1861, est toujours conserve au musee Dupuytren a Paris. Un scan IRM realise en 2007 par Nina Dronkers a revele que la lesion etait plus etendue que ce que Broca avait initialement decrit." },
            { front: "Nombre de mots acquis par un enfant", back: "Un enfant moyen acquiert environ 50 mots vers 18 mois, puis connait une « explosion lexicale » : a 6 ans, son vocabulaire atteint environ 14 000 mots, soit un apprentissage d'environ 9 mots par jour depuis la naissance." },
            { front: "Lateralisation du langage", back: "Chez environ 95 % des droitiers et 70 % des gauchers, le langage est lateralise dans l'hemisphere gauche. Cette dominance hemispherique est observable des les premiers mois de vie." }
          ]
        },
        {
          slug: 'decision',
          title: 'La prise de decision',
          description: "Comment le cerveau evalue les options, calcule les risques et choisit une action.",
          intro: "La prise de decision est le processus cognitif par lequel le cerveau evalue differentes options et selectionne une action. Les neurosciences de la decision ont revele que ce processus, loin d'etre purement rationnel, integre des signaux emotionnels, des evaluations de recompense et des biais cognitifs. Les travaux d'Antonio Damasio sur les patients avec des lesions prefrontales ont montre que l'emotion est indispensable a la decision rationnelle.",
          introHighlight: "La prise de decision integre des processus emotionnels et rationnels : le cortex prefrontal ventromedian evalue la valeur des options, tandis que le cortex prefrontal dorsolateral exerce le controle cognitif.",
          sections: [
            {
              title: "L'hypothese des marqueurs somatiques",
              paragraphs: [
                "Antonio Damasio a propose en 1994 l'hypothese des marqueurs somatiques pour expliquer le role des emotions dans la decision. Selon cette theorie, les experiences passees laissent des traces emotionnelles (marqueurs somatiques) qui guident inconsciemment les decisions futures. Le cortex prefrontal ventromedian (CPFVM) joue un role central en integrant ces signaux emotionnels avec les informations cognitives pour evaluer la valeur des differentes options.",
                "Les patients avec des lesions du CPFVM, comme le celebre cas de Phineas Gage (1848) et les patients etudies par Damasio, prennent des decisions desastreuses dans la vie quotidienne malgre des capacites intellectuelles intactes. La tache de jeu de l'Iowa (Iowa Gambling Task), developpee par Antoine Bechara et Damasio, montre que ces patients sont incapables d'apprendre a eviter les choix desavantageux a long terme. Les participants sains, en revanche, developpent des reponses autonomiques (conductance cutanee) face aux options risquees avant meme d'en avoir conscience."
              ],
              highlight: "Phineas Gage, ouvrier du chemin de fer dont le cortex prefrontal fut traverse par une barre de fer en 1848, est devenu le cas fondateur de l'etude des bases neurales de la personnalite et de la decision : sa personnalite changea radicalement alors que ses capacites cognitives demeurerent intactes."
            },
            {
              title: "Le systeme de recompense et la dopamine",
              paragraphs: [
                "Le systeme de recompense, centre sur l'aire tegmentale ventrale (ATV) et le noyau accumbens, joue un role fondamental dans la prise de decision. Wolfram Schultz a decouvert en 1997 que les neurones dopaminergiques de l'ATV ne codent pas simplement la recompense elle-meme mais l'erreur de prediction de la recompense (reward prediction error) : ils s'activent davantage lorsque la recompense est inattendue et diminuent leur activite lorsqu'une recompense attendue ne survient pas.",
                "Ce signal d'erreur de prediction est mathematiquement equivalent a l'algorithme d'apprentissage par renforcement TD-learning (temporal difference learning), etablissant un pont remarquable entre neurosciences et intelligence artificielle. Paul Glimcher et ses collaborateurs ont montre que ce mecanisme sous-tend non seulement l'apprentissage associatif mais aussi les decisions economiques : le cortex orbitofrontal encode la valeur subjective des differentes options sur une echelle commune, permettant leur comparaison."
              ]
            },
            {
              title: "Les biais cognitifs et la neuroeconomie",
              paragraphs: [
                "La neuroeconomie, discipline fondee dans les annees 2000 par des chercheurs comme Paul Glimcher et Colin Camerer, etudie les bases neurales des decisions economiques. Elle a confirme neurobiologiquement de nombreux biais identifies par Daniel Kahneman et Amos Tversky. L'aversion a la perte — le fait qu'une perte est ressentie environ deux fois plus fortement qu'un gain equivalent — active l'amygdale et l'insula, regions impliquees dans le traitement des emotions negatives.",
                "L'actualisation hyperbolique, la tendance a sur-evaluer les recompenses immediates par rapport aux recompenses futures, implique un conflit entre le systeme limbique (favorisant le present) et le cortex prefrontal (favorisant le futur). Samuel McClure et ses collaborateurs ont montre en 2004 par IRMf que les recompenses immediates activent selectivement le striatum ventral et le CPFVM, tandis que les decisions impliquant un delai recrutent davantage le cortex prefrontal dorsolateral et le cortex parietal."
              ]
            }
          ],
          quiz: [
            { q: "Qu'est-ce que l'hypothese des marqueurs somatiques ?", opts: ["L'idee que les decisions sont purement rationnelles", "La theorie que les emotions guident inconsciemment les decisions via des traces corporelles", "Un modele de la memoire procedurale", "Une theorie sur les reflexes spinaux"], correct: 1, explanation: "L'hypothese des marqueurs somatiques, proposee par Damasio en 1994, stipule que les emotions associees a des experiences passees laissent des marqueurs corporels (somatiques) qui influencent les decisions futures de maniere souvent inconsciente." },
            { q: "Que codent les neurones dopaminergiques selon les travaux de Schultz ?", opts: ["Le plaisir ressenti", "L'erreur de prediction de la recompense", "La douleur physique", "La memoire a long terme"], correct: 1, explanation: "Wolfram Schultz a decouvert que les neurones dopaminergiques codent l'erreur de prediction de la recompense : la difference entre la recompense recue et la recompense attendue, et non la recompense elle-meme." },
            { q: "Qu'est-ce que l'aversion a la perte ?", opts: ["La peur de perdre la memoire", "Le fait qu'une perte est ressentie plus fortement qu'un gain equivalent", "La tendance a eviter toute decision", "Un trouble du systeme de recompense"], correct: 1, explanation: "L'aversion a la perte, mise en evidence par Kahneman et Tversky, designe le phenomene ou une perte est psychologiquement ressentie environ deux fois plus intensement qu'un gain de meme valeur." },
            { q: "Quel est le cas historique fondateur de la neuropsychologie de la decision ?", opts: ['Le patient H.M.', 'Le patient Tan', 'Phineas Gage', 'Clive Wearing'], correct: 2, explanation: "Phineas Gage (1848) est le cas fondateur : apres qu'une barre de fer eut traverse son cortex prefrontal, sa personnalite et ses capacites de decision furent dramatiquement alterees alors que ses fonctions cognitives de base restaient intactes." },
            { q: "Qu'est-ce que la neuroeconomie ?", opts: ["L'etude economique du cout des traitements neurologiques", "La discipline etudiant les bases neurales des decisions economiques", "Un modele de financement de la recherche en neurosciences", "L'economie des medicaments psychiatriques"], correct: 1, explanation: "La neuroeconomie est une discipline interdisciplinaire qui combine les neurosciences, l'economie et la psychologie pour comprendre les mecanismes cerebraux sous-jacents aux decisions economiques et aux comportements de choix." }
          ],
          definitions: [
            { term: 'Erreur de prediction de la recompense', def: "Signal neuronal code par les neurones dopaminergiques, correspondant a la difference entre la recompense effectivement recue et la recompense attendue, servant de signal d'apprentissage." },
            { term: 'Cortex prefrontal ventromedian', def: "Region du cortex prefrontal impliquee dans l'evaluation de la valeur des options, l'integration des signaux emotionnels et la prise de decision, dont la lesion entraine des decisions inadaptees malgre une intelligence preservee." },
            { term: 'Neuroeconomie', def: "Discipline interdisciplinaire combinant neurosciences, economie comportementale et psychologie pour etudier les bases neurales des decisions economiques et des comportements de choix." }
          ],
          memos: [
            { front: "L'accident de Phineas Gage", back: "Le 13 septembre 1848, une barre de fer de 1,1 m traversa le crane de Phineas Gage lors d'un accident de chemin de fer. Il survécut mais sa personnalite changea radicalement : de fiable et industrieux, il devint impulsif et incapable de planifier." },
            { front: "Dopamine et apprentissage par renforcement", back: "Le signal d'erreur de prediction de la recompense des neurones dopaminergiques est mathematiquement equivalent a l'algorithme de TD-learning utilise en intelligence artificielle, reliant neurosciences et IA." },
            { front: "La tache de jeu de l'Iowa", back: "Developpee par Bechara et Damasio, cette tache implique de choisir entre quatre paquets de cartes. Les patients avec des lesions prefrontales ventromedianes echouent systematiquement a apprendre quels paquets sont avantageux a long terme." }
          ]
        }
      ]
    },

    // ── Hub 2: Neurosciences computationnelles ──
    {
      slug: 'computationnelle',
      title: 'Neurosciences computationnelles',
      description: "Modelisation mathematique et informatique du fonctionnement cerebral, des reseaux neuronaux biologiques a l'intelligence artificielle bio-inspiree.",
      introText: "Les neurosciences computationnelles utilisent des modeles mathematiques et des simulations informatiques pour comprendre comment le cerveau traite l'information. Ce domaine, fonde dans les annees 1940-1950 avec les travaux pionniers de Warren McCulloch et Walter Pitts sur le neurone formel, est devenu un pont essentiel entre biologie et intelligence artificielle. Il vise a decrire les principes de calcul que le cerveau utilise pour percevoir, decider et agir.",
      introHighlight: "Les neurosciences computationnelles cherchent a decouvrir les algorithmes du cerveau : comment des milliards de neurones, chacun simple individuellement, engendrent collectivement l'intelligence et la conscience.",
      lessons: [
        {
          slug: 'reseaux-neuronaux',
          title: 'Les reseaux neuronaux biologiques',
          description: "Organisation et principes de fonctionnement des circuits neuronaux dans le cerveau.",
          intro: "Les reseaux neuronaux biologiques sont des ensembles de neurones interconnectes qui traitent l'information dans le cerveau. Chaque neurone recoit des milliers de signaux synaptiques, les integre et produit un signal de sortie transmis a d'autres neurones. La comprehension de ces reseaux est essentielle pour decrypter les algorithmes cerebraux.",
          introHighlight: "Un seul neurone cortical recoit en moyenne 7 000 connexions synaptiques et la transmission d'un signal le long d'un axone peut atteindre 120 m/s dans les fibres myelinisees.",
          sections: [
            {
              title: "Le neurone comme unite de calcul",
              paragraphs: [
                "Le neurone biologique realise une operation fondamentale : il integre les signaux excitateurs et inhibiteurs recus par ses dendrites et, si la somme depasse un seuil (environ -55 mV pour le potentiel de membrane), il genere un potentiel d'action. Ce phenomene du tout-ou-rien a ete decrit mathematiquement par Alan Hodgkin et Andrew Huxley en 1952 dans leur modele biophysique du potentiel d'action, base sur des experiences sur l'axone geant du calmar. Ce travail, recompense par le prix Nobel en 1963, reste la pierre angulaire de la neurophysiologie computationnelle.",
                "L'integration synaptique n'est pas une simple sommation lineaire. Les dendrites possedent des proprietes actives — canaux ioniques voltage-dependants — qui permettent des calculs non lineaires locaux. Les travaux de Bartlett Mel dans les annees 1990 ont montre que les branches dendritiques individuelles peuvent fonctionner comme des unites computationnelles semi-independantes, multipliant considerablement la puissance de calcul d'un seul neurone par rapport au modele simpliste du neurone ponctuel."
              ],
              highlight: "Le modele de Hodgkin-Huxley (1952), base sur l'axone geant du calmar Loligo, decrit mathematiquement le potentiel d'action a l'aide d'equations differentielles modelisant les conductances ioniques du sodium et du potassium."
            },
            {
              title: "Les motifs de circuits neuronaux",
              paragraphs: [
                "Les neuroscientifiques ont identifie des motifs recurrents d'organisation dans les circuits neuronaux. L'inhibition laterale, ou une cellule active inhibe ses voisines, permet d'augmenter le contraste et la selectivite. Georg von Bekesy a montre ce principe dans le systeme auditif (prix Nobel 1961), et il est egalement present dans la retine et le cortex somatosensoriel. L'inhibition feedforward, ou un signal excitateur active simultanement un interneurone inhibiteur, limite la fenetre temporelle d'activation et augmente la precision du traitement.",
                "Les circuits recurrents (feedback), ou les neurones s'excitent mutuellement, peuvent creer des attracteurs — des etats stables d'activite persistante. John Hopfield a propose en 1982 un modele de reseau recurrent (reseau de Hopfield) montrant que ces attracteurs peuvent servir de memoire associative : le reseau converge spontanement vers le souvenir le plus proche de l'entree. Ce modele a inspire de nombreuses recherches en intelligence artificielle et en neurosciences de la memoire."
              ]
            },
            {
              title: "Le codage neuronal",
              paragraphs: [
                "Comment les neurones representent-ils l'information ? Le codage par frequence (rate coding), ou l'information est encodee dans le nombre de potentiels d'action par seconde, est le schema le plus etudie depuis les travaux d'Edgar Adrian (prix Nobel 1932). Cependant, la precision temporelle des decharges neuronales (codage temporel) joue egalement un role crucial. Les oscillations cerebrales — theta (4-8 Hz), gamma (30-100 Hz) — organisent temporellement l'activite neuronale et permettent la synchronisation entre regions distantes.",
                "Le codage par population, ou l'information est distribuee dans l'activite collective de nombreux neurones, est aujourd'hui considere comme le mode predominant de representation dans le cortex. Apostolos Georgopoulos a montre en 1986 que la direction d'un mouvement du bras est encodee dans le vecteur de population des neurones du cortex moteur primaire : chaque neurone a une direction preferee, et la somme ponderee de ces preferences predit la direction reelle du mouvement."
              ]
            }
          ],
          quiz: [
            { q: "Sur quel organisme Hodgkin et Huxley ont-ils elabore leur modele du potentiel d'action ?", opts: ['Le rat de laboratoire', "L'axone geant du calmar", 'Le neurone de sangsue', "L'hippocampe de souris"], correct: 1, explanation: "Hodgkin et Huxley ont utilise l'axone geant du calmar Loligo, dont le diametre exceptionnel (jusqu'a 1 mm) permettait l'insertion d'electrodes intracellulaires avec la technologie des annees 1950." },
            { q: "Qu'est-ce qu'un reseau de Hopfield ?", opts: ["Un reseau feedforward a couches", "Un reseau recurrent fonctionnant comme memoire associative", "Un algorithme de tri", "Un modele du systeme visuel"], correct: 1, explanation: "Le reseau de Hopfield (1982) est un reseau de neurones recurrent ou les connexions symetriques creent des attracteurs, permettant au reseau de fonctionner comme une memoire associative qui converge vers le pattern memorise le plus similaire a l'entree." },
            { q: "Qu'est-ce que le codage par population ?", opts: ["Un neurone unique encode toute l'information", "L'information est distribuee dans l'activite collective de nombreux neurones", "Chaque neurone code un pixel d'une image", "Les neurones votent a la majorite"], correct: 1, explanation: "Le codage par population distribue l'information dans l'activite de nombreux neurones. Georgopoulos a montre que la direction d'un mouvement est encodee dans le vecteur de population de neurones du cortex moteur." },
            { q: "Quel prix Nobel a ete decerne a Hodgkin et Huxley ?", opts: ['Chimie 1952', 'Physique 1963', 'Physiologie ou medecine 1963', 'Physiologie ou medecine 1952'], correct: 2, explanation: "Alan Hodgkin et Andrew Huxley ont recu le prix Nobel de physiologie ou medecine en 1963 pour leur description des mecanismes ioniques du potentiel d'action." },
            { q: "Qu'est-ce que l'inhibition laterale ?", opts: ["L'inhibition du cerveau droit par le cerveau gauche", "Un neurone actif inhibe ses voisins pour augmenter le contraste", "L'inhibition des muscles antagonistes", "La suppression des souvenirs adjacents"], correct: 1, explanation: "L'inhibition laterale est un motif de circuit ou un neurone active inhibe les neurones voisins, augmentant le contraste spatial et la selectivite de la reponse neuronale." }
          ],
          definitions: [
            { term: 'Potentiel d\'action', def: "Impulsion electrique breve (environ 1 ms) generee lorsque le potentiel de membrane d'un neurone depasse le seuil de -55 mV, se propageant le long de l'axone selon un principe du tout-ou-rien." },
            { term: 'Codage par frequence', def: "Schema de codage neuronal ou l'information est representee par le nombre de potentiels d'action emis par unite de temps (frequence de decharge)." },
            { term: 'Attracteur', def: "Etat stable vers lequel un systeme dynamique (comme un reseau de neurones recurrent) converge, pouvant servir de substrat pour la memoire ou la prise de decision." }
          ],
          memos: [
            { front: "Le calmar geant et les neurosciences", back: "L'axone geant du calmar Loligo (diametre jusqu'a 1 mm) a ete crucial pour les premieres mesures electrophysiologiques intracellulaires. Sans lui, le modele de Hodgkin-Huxley n'aurait pas ete possible avec la technologie des annees 1950." },
            { front: "Combien de synapses par neurone cortical ?", back: "Un neurone cortical typique recoit en moyenne 7 000 connexions synaptiques (certains neurones pyramidaux en recoivent jusqu'a 30 000), integrant des signaux excitateurs et inhibiteurs pour produire sa reponse." }
          ]
        },
        {
          slug: 'modelisation',
          title: 'Modelisation cerebrale',
          description: "Les grands modeles computationnels du cerveau et les simulations neuronales a grande echelle.",
          intro: "La modelisation cerebrale vise a reproduire le fonctionnement du cerveau dans des simulations informatiques, depuis le niveau d'un seul neurone jusqu'a celui du cerveau entier. Ces modeles permettent de tester des hypotheses impossibles a verifier experimentalement et constituent un outil essentiel de la recherche en neurosciences.",
          introHighlight: "Le projet Blue Brain, lance par Henry Markram en 2005, a ete le premier a simuler numeriquement une colonne corticale de 31 000 neurones avec une fidelite biologique sans precedent.",
          sections: [
            {
              title: "Du neurone au reseau : niveaux de modelisation",
              paragraphs: [
                "Les modeles neuronaux couvrent un large spectre de complexite. Au niveau le plus detaille, les modeles compartimentaux (comme ceux developpes avec le logiciel NEURON de Michael Hines et John Moore) simulent la morphologie dendritique complete d'un neurone avec ses canaux ioniques. Au niveau intermediaire, les modeles integre-et-tire (integrate-and-fire), proposes par Louis Lapicque des 1907, simplifient le neurone a un condensateur qui accumule des charges jusqu'a un seuil. Les modeles d'Izhikevich (2003) offrent un compromis entre realisme biologique et efficacite computationnelle avec seulement deux equations differentielles.",
                "A l'echelle des reseaux, les modeles de champ moyen decrivent l'activite d'une population neuronale entiere par quelques variables macroscopiques. Les equations de Wilson-Cowan (1972) modelisent l'interaction entre populations excitatrices et inhibitrices et peuvent reproduire des phenomenes comme les oscillations cerebrales, l'epilepsie ou la propagation d'ondes corticales. Ces approches sont essentielles pour comprendre les dynamiques emergentes de grandes populations neuronales."
              ],
              highlight: "Le modele integre-et-tire de Lapicque (1907) est le plus ancien modele mathematique du neurone. Malgre sa simplicite — un condensateur avec un seuil — il capture l'essentiel du comportement d'integration synaptique et reste largement utilise aujourd'hui."
            },
            {
              title: "Projets de simulation cerebrale a grande echelle",
              paragraphs: [
                "Le Human Brain Project (HBP), finance par l'Union europeenne en 2013 avec un budget initial de 1 milliard d'euros sur 10 ans, a vise a simuler le cerveau humain entier. Malgre des controverses sur sa gestion et ses objectifs, le HBP a produit des avancees significatives, notamment la plateforme EBRAINS, des atlas cerebraux detailles et des simulateurs comme NEST (pour les reseaux de neurones a pointes). Le projet a abouti a la simulation de regions corticales comprenant des millions de neurones.",
                "Le projet MICrONS (Machine Intelligence from Cortical Networks), finance par IARPA aux Etats-Unis, a adopte une approche complementaire : cartographier par microscopie electronique un volume de cortex de souris (1 mm cube) avec une resolution synaptique, puis extraire les principes computationnels des circuits observes. Acheve en 2021, ce projet a reconstruit la connectivite de plus de 200 000 cellules et 500 millions de synapses, fournissant un jeu de donnees sans precedent pour la modelisation."
              ]
            },
            {
              title: "L'emergence et les proprietes dynamiques",
              paragraphs: [
                "Les modeles computationnels revelent des proprietes emergentes fascinantes. Les reseaux neuronaux biologiques operent souvent a la « criticite », un regime dynamique au bord du chaos caracterise par des cascades d'activite (avalanches neuronales) suivant des lois de puissance. John Beggs et Dietmar Plenz ont decouvert ce phenomene en 2003 dans des tranches corticales in vitro. Operer a la criticite maximiserait la capacite de traitement de l'information, la memoire et la sensibilite aux stimuli.",
                "Les modeles de dynamique des reseaux, comme ceux de Sompolinsky et van Vreeswijk, montrent que l'equilibre entre excitation et inhibition est essentiel au fonctionnement normal du cerveau. Les reseaux equilibres produisent une activite irreguliere (poissonnienne) similaire a celle observee in vivo. Un desequilibre vers l'excitation peut produire des crises epileptiques, tandis qu'un exces d'inhibition peut conduire a la perte de conscience, offrant un cadre theorique pour comprendre ces phenomenes cliniques."
              ]
            }
          ],
          quiz: [
            { q: "Quel est le plus ancien modele mathematique du neurone ?", opts: ["Le modele de Hodgkin-Huxley", "Le modele integre-et-tire de Lapicque", "Le perceptron de Rosenblatt", "Le neurone formel de McCulloch-Pitts"], correct: 1, explanation: "Le modele integre-et-tire de Louis Lapicque, propose en 1907, est le plus ancien modele mathematique du neurone. Il decrit le neurone comme un condensateur qui accumule des charges jusqu'a un seuil de decharge." },
            { q: "Quel projet a vise a simuler le cerveau humain entier avec un budget d'un milliard d'euros ?", opts: ['Le projet Blue Brain', 'Le Human Brain Project', 'Le Human Genome Project', 'Le projet BRAIN Initiative'], correct: 1, explanation: "Le Human Brain Project (HBP), lance en 2013 et finance par l'Union europeenne, est le projet le plus ambitieux de simulation cerebrale a grande echelle avec un budget initial d'un milliard d'euros." },
            { q: "Qu'est-ce que la criticite dans les reseaux neuronaux ?", opts: ["Un etat de destruction cellulaire", "Un regime dynamique au bord du chaos optimisant le traitement d'information", "Un niveau critique de neurotransmetteurs", "La temperature critique du cerveau"], correct: 1, explanation: "La criticite est un etat dynamique ou les reseaux neuronaux operent au bord du chaos. Ce regime, caracterise par des avalanches neuronales suivant des lois de puissance, maximise la capacite de traitement, la memoire et la sensibilite." },
            { q: "Combien de cellules le projet MICrONS a-t-il reconstruit ?", opts: ['10 000', '50 000', 'Plus de 200 000', '1 million'], correct: 2, explanation: "Le projet MICrONS a reconstruit la connectivite de plus de 200 000 cellules et 500 millions de synapses dans un volume de 1 mm cube de cortex de souris par microscopie electronique." },
            { q: "Que modélisent les equations de Wilson-Cowan ?", opts: ["Le potentiel d'action d'un seul neurone", "L'interaction entre populations excitatrices et inhibitrices", "Le flux sanguin cerebral", "La synthese des neurotransmetteurs"], correct: 1, explanation: "Les equations de Wilson-Cowan (1972) sont un modele de champ moyen decrivant l'interaction dynamique entre populations neuronales excitatrices et inhibitrices, pouvant reproduire des oscillations et des transitions de phase." }
          ],
          definitions: [
            { term: 'Modele integre-et-tire', def: "Modele simplifie du neurone le decrivant comme un condensateur qui accumule les charges synaptiques jusqu'a un seuil, puis se decharge (emet un potentiel d'action) et se reinitialise." },
            { term: 'Avalanche neuronale', def: "Cascade d'activite neuronale ou l'activation d'un neurone en declenche d'autres, dont les distributions de taille et de duree suivent des lois de puissance lorsque le reseau opere a la criticite." },
            { term: 'Champ moyen', def: "Approche mathematique decrivant le comportement macroscopique d'une population neuronale par quelques variables agregees (taux de decharge moyen) au lieu de simuler chaque neurone individuellement." }
          ],
          memos: [
            { front: "Le modele de Lapicque (1907)", back: "Louis Lapicque, physiologiste francais, a propose en 1907 le modele integre-et-tire du neurone, le plus ancien modele mathematique en neurosciences. Il est toujours utilise dans les simulations a grande echelle en raison de sa simplicite et de son efficacite." },
            { front: "Le Human Brain Project en chiffres", back: "Lance en 2013, finance a hauteur d'un milliard d'euros par l'UE sur 10 ans, impliquant plus de 500 scientifiques dans 100 institutions. Il a produit la plateforme EBRAINS et des simulateurs de reseaux de neurones a pointes." },
            { front: "NEST : simulateur neuronal", back: "NEST (NEural Simulation Tool) est un simulateur open source capable de modeliser des reseaux de millions de neurones a pointes. Il est utilise dans de nombreux laboratoires pour etudier les dynamiques de reseaux." }
          ]
        },
        {
          slug: 'ia-bio-inspiree',
          title: 'Intelligence artificielle bio-inspiree',
          description: "Comment les principes du cerveau inspirent les architectures d'intelligence artificielle modernes.",
          intro: "L'intelligence artificielle bio-inspiree puise ses principes fondamentaux dans le fonctionnement du cerveau pour concevoir des algorithmes et des architectures de calcul performants. Des reseaux de neurones artificiels de McCulloch et Pitts (1943) aux architectures d'apprentissage profond actuelles, la fertilisation croisee entre neurosciences et informatique a produit certaines des avancees technologiques les plus importantes du XXIe siecle.",
          introHighlight: "Le perceptron, les reseaux convolutifs et l'apprentissage par renforcement tirent directement leur inspiration de mecanismes neuronaux decouverts dans le cerveau, illustrant la synergie entre neurosciences et IA.",
          sections: [
            {
              title: "Des neurones biologiques aux reseaux artificiels",
              paragraphs: [
                "Warren McCulloch et Walter Pitts ont propose en 1943 le premier modele mathematique du neurone (le neurone formel), montrant qu'un reseau de tels neurones pouvait realiser n'importe quelle fonction logique. Frank Rosenblatt a ensuite developpe le perceptron en 1958, un reseau capable d'apprendre a classer des entrees par ajustement de ses poids synaptiques. Cependant, Marvin Minsky et Seymour Papert ont montre en 1969 que le perceptron simple ne pouvait resoudre le probleme du XOR, freinant la recherche pendant plus d'une decennie.",
                "La renaissance est venue avec la retropropagation du gradient, popularisee par David Rumelhart, Geoffrey Hinton et Ronald Williams en 1986, permettant d'entrainer des reseaux a couches multiples. Cette technique s'apparente a un mecanisme d'apprentissage par erreur ou le signal d'erreur est propage en arriere dans le reseau pour ajuster les poids. Bien que la retropropagation ne soit pas biologiquement plausible sous sa forme standard, des mecanismes similaires de propagation de signaux d'erreur ont ete decouverts dans le cortex cerebral."
              ],
              highlight: "Le neurone formel de McCulloch et Pitts (1943) est l'ancetre de tous les reseaux de neurones artificiels. Leur article historique « A Logical Calculus of the Ideas Immanent in Nervous Activity » a fonde simultanement les neurosciences computationnelles et l'intelligence artificielle."
            },
            {
              title: "Les reseaux convolutifs et le systeme visuel",
              paragraphs: [
                "Les reseaux de neurones convolutifs (CNN), developpes par Yann LeCun en 1989 pour la reconnaissance de chiffres manuscrits, sont directement inspires de l'organisation hierarchique du cortex visuel decouverte par Hubel et Wiesel. Les couches de convolution simulent les champs recepteurs des neurones visuels, les couches de pooling implementent l'invariance aux translations, et la hierarchie des couches reproduit la complexite croissante du traitement de V1 vers les aires inferottemporales.",
                "Daniel Yamins et James DiCarlo ont montre en 2014 que les representations internes des CNN entraines sur la reconnaissance d'objets reproduisent etonnamment bien l'activite neuronale enregistree dans le cortex visuel du primate. Les couches superficielles du CNN correspondent aux aires visuelles precoces (V1, V2), tandis que les couches profondes predisent l'activite du cortex inferotemporal (IT), region impliquee dans la reconnaissance des objets. Cette correspondance suggerent que le cerveau et les CNN decouvrent des solutions computationnelles similaires."
              ]
            },
            {
              title: "Le neuromorphique : puces cerebrales",
              paragraphs: [
                "L'informatique neuromorphique vise a reproduire l'architecture du cerveau directement dans le materiel informatique. Carver Mead a propose ce concept des 1990 au Caltech. Contrairement aux processeurs classiques qui separent memoire et calcul (architecture von Neumann), les puces neuromorphiques integrent le calcul et la memoire au sein de chaque unite, comme le fait le neurone biologique. Ce paradigme promet une efficacite energetique bien superieure.",
                "La puce TrueNorth d'IBM (2014) contient 1 million de neurones artificiels et 256 millions de synapses, consommant seulement 70 milliwatts — des milliers de fois moins qu'un processeur classique pour des taches equivalentes. La puce Loihi d'Intel (2018) implemente l'apprentissage en ligne grace a des mecanismes de plasticite synaptique inspires de la STDP (spike-timing-dependent plasticity). Le projet SpiNNaker de l'Universite de Manchester simule en temps reel des reseaux de neurones a pointes avec un million de cœurs de processeur."
              ]
            }
          ],
          quiz: [
            { q: "Qui a propose le premier modele mathematique du neurone en 1943 ?", opts: ['Frank Rosenblatt', 'Alan Turing', 'Warren McCulloch et Walter Pitts', 'Donald Hebb'], correct: 2, explanation: "Warren McCulloch (neuroscientifique) et Walter Pitts (logicien) ont propose en 1943 le neurone formel, premier modele mathematique du neurone, montrant qu'un reseau de tels neurones peut realiser toute fonction logique." },
            { q: "De quelle decouverte neuroscientifique les CNN sont-ils inspires ?", opts: ["La potentialisation a long terme", "L'organisation hierarchique du cortex visuel", "Le systeme de recompense dopaminergique", "La memoire de travail"], correct: 1, explanation: "Les reseaux de neurones convolutifs (CNN) sont directement inspires de l'organisation hierarchique du cortex visuel decouverte par Hubel et Wiesel, avec ses champs recepteurs, sa selectivite croissante et son invariance progressive." },
            { q: "Quelle est la particularite de l'informatique neuromorphique ?", opts: ["Elle utilise l'ADN comme support de calcul", "Elle integre calcul et memoire dans chaque unite comme un neurone", "Elle necessite un refroidissement cryogenique", "Elle fonctionne uniquement avec des reseaux classiques"], correct: 1, explanation: "L'informatique neuromorphique s'inspire de l'architecture du cerveau en integrant le calcul et la memoire au sein de chaque unite de traitement, contrairement a l'architecture von Neumann qui les separe." },
            { q: "Qu'a montre Yamins et DiCarlo en 2014 ?", opts: ["Que les CNN sont inutiles", "Que les representations internes des CNN reproduisent l'activite du cortex visuel", "Que le cerveau utilise la retropropagation", "Que l'IA ne peut pas depasser le cerveau"], correct: 1, explanation: "Yamins et DiCarlo ont montre que les representations internes des CNN entraines sur la reconnaissance d'objets predisent remarquablement bien l'activite neuronale du cortex visuel du primate." },
            { q: "Quelle limitation du perceptron Minsky et Papert ont-ils identifiee en 1969 ?", opts: ["Il consommait trop d'energie", "Il ne pouvait pas resoudre le probleme du XOR", "Il ne fonctionnait qu'avec des images", "Il necessitait trop de donnees"], correct: 1, explanation: "Minsky et Papert ont demontre en 1969 qu'un perceptron simple (une seule couche) ne peut resoudre le probleme du XOR (ou exclusif), une limitation fondamentale qui a freine la recherche en reseaux de neurones pendant plus d'une decennie." }
          ],
          definitions: [
            { term: 'Neurone formel', def: "Modele mathematique du neurone propose par McCulloch et Pitts en 1943, realisant une fonction logique a seuil sur une somme ponderee d'entrees binaires, ancetre de tous les neurones artificiels." },
            { term: 'Retropropagation du gradient', def: "Algorithme d'apprentissage permettant d'ajuster les poids d'un reseau de neurones multicouche en propageant le signal d'erreur de la sortie vers l'entree, popularise par Rumelhart, Hinton et Williams en 1986." },
            { term: 'Informatique neuromorphique', def: "Approche du calcul s'inspirant de l'architecture du cerveau en integrant calcul et memoire au sein de chaque unite de traitement, visant une efficacite energetique comparable a celle du tissu neural." }
          ],
          memos: [
            { front: "L'hiver de l'IA (1969-1986)", back: "Apres la demonstration par Minsky et Papert (1969) des limites du perceptron, la recherche en reseaux de neurones a traverse un « hiver » de plus de 15 ans, jusqu'a la popularisation de la retropropagation par Rumelhart, Hinton et Williams en 1986." },
            { front: "TrueNorth d'IBM", back: "La puce TrueNorth (2014) contient 5,4 milliards de transistors emulant 1 million de neurones et 256 millions de synapses, ne consommant que 70 milliwatts — soit 10 000 fois moins qu'un processeur classique pour des taches similaires." },
            { front: "Correspondance CNN-cerveau", back: "Les travaux de Yamins et DiCarlo (2014) au MIT ont montre que les couches d'un CNN entraine correspondent aux etapes du traitement visuel cortical : couches superficielles = V1/V2, couches profondes = cortex inferotemporal." }
          ]
        },
        {
          slug: 'apprentissage-hebbien',
          title: "L'apprentissage hebbien",
          description: "Le principe de Hebb et ses extensions : comment les synapses se modifient par l'experience.",
          intro: "L'apprentissage hebbien, base sur le postulat de Donald Hebb en 1949, constitue le paradigme fondamental de la plasticite synaptique. Le principe « les neurones qui s'activent ensemble se connectent ensemble » decrit comment l'experience modifie la force des connexions entre neurones et constitue la base biologique de l'apprentissage.",
          introHighlight: "Le postulat de Hebb (1949) — les neurones co-actifs renforcent leur connexion — est le principe unificateur de la plasticite synaptique et l'ancetre de toutes les regles d'apprentissage en intelligence artificielle.",
          sections: [
            {
              title: "Le postulat de Hebb et la STDP",
              paragraphs: [
                "Donald Hebb a formule en 1949 dans son ouvrage « The Organization of Behavior » le principe selon lequel si un neurone A contribue de maniere repetee a l'activation d'un neurone B, la connexion entre A et B est renforcee. Ce postulat a ete confirme experimentalement avec la decouverte de la STDP (spike-timing-dependent plasticity) par Henry Markram en 1997 et Guo-qiang Bi et Mu-ming Poo en 1998. La STDP precise que le renforcement ou l'affaiblissement depend de l'ordre temporel precis des decharges.",
                "Si le neurone presynaptique decharge quelques millisecondes avant le neurone postsynaptique, la synapse est renforcee (PLT). Si l'ordre est inverse, la synapse est affaiblie (depression a long terme, DLT). Cette fenetre temporelle asymetrique, typiquement de plus ou moins 20 ms, fournit un mecanisme permettant aux neurones de detecter les relations de causalite entre evenements — un element essentiel pour l'apprentissage associatif et la formation de sequences temporelles."
              ],
              highlight: "La STDP (spike-timing-dependent plasticity), decouverte experimentalement par Markram (1997) et Bi et Poo (1998), est la validation biologique du postulat de Hebb, ajoutant une dimension temporelle cruciale : l'ordre des decharges pre- et postsynaptiques determine le sens de la plasticite."
            },
            {
              title: "Applications computationnelles de l'apprentissage hebbien",
              paragraphs: [
                "L'apprentissage hebbien a inspire de nombreux algorithmes computationnels. L'analyse en composantes principales (ACP), une technique fondamentale de reduction de dimensionnalite, peut etre implementee par une regle hebbienne modifiee proposee par Erkki Oja en 1982. Les cartes auto-organisatrices de Teuvo Kohonen (1982) utilisent un apprentissage competitif hebbien pour creer des representations topographiques, analogues aux cartes corticales.",
                "La theorie BCM (Bienenstock-Cooper-Munro, 1982) a etendu la regle de Hebb en introduisant un seuil de modification glissant : lorsque le neurone postsynaptique est peu actif, toute activation conjointe produit une depression synaptique ; lorsqu'il est tres actif, elle produit un renforcement. Ce mecanisme homeostasique empeche la saturation des synapses et assure la stabilite du reseau. La metaplasticite — la plasticite de la plasticite elle-meme — decouverte par Wickliffe Abraham, en est le pendant biologique."
              ]
            },
            {
              title: "Au-dela de Hebb : plasticite heterosynaptique et homeostasique",
              paragraphs: [
                "La plasticite hebbienne seule est instable : le renforcement des synapses actives pourrait conduire a une activation incontrolee. Plusieurs mecanismes complementaires assurent la stabilite. La plasticite heterosynaptique modifie les synapses non actives en reponse a l'activite d'autres synapses sur le meme neurone. Gina Bhatt et Mu-ming Poo ont montre que le renforcement d'une synapse peut provoquer l'affaiblissement des synapses voisines, creant un mecanisme de competition.",
                "La mise a l'echelle synaptique (synaptic scaling), decouverte par Gina Turrigiano et Sacha Nelson en 1998, est un mecanisme homeostasique ou le neurone ajuste globalement la force de toutes ses synapses en reponse a son niveau d'activite moyen. Si l'activite est trop faible, toutes les synapses sont renforcees proportionnellement ; si elle est trop forte, elles sont affaiblies. Ce mecanisme preserve les differences relatives entre synapses (les « souvenirs ») tout en maintenant la stabilite globale du reseau."
              ]
            }
          ],
          quiz: [
            { q: "En quelle annee Donald Hebb a-t-il formule son postulat ?", opts: ['1932', '1943', '1949', '1958'], correct: 2, explanation: "Donald Hebb a formule son postulat dans son livre « The Organization of Behavior » publie en 1949, etablissant le principe selon lequel la co-activation de neurones renforce leur connexion." },
            { q: "Qu'est-ce que la STDP ?", opts: ["Un neurotransmetteur", "Une regle de plasticite dependante du timing des potentiels d'action", "Un type de neurone", "Un algorithme informatique"], correct: 1, explanation: "La STDP (spike-timing-dependent plasticity) est une forme de plasticite synaptique ou la modification de la force synaptique depend de l'ordre temporel precis des decharges des neurones pre- et postsynaptiques." },
            { q: "Qu'est-ce que la mise a l'echelle synaptique ?", opts: ["Un agrandissement physique des synapses", "Un ajustement global et proportionnel de toutes les synapses d'un neurone", "Un processus de destruction synaptique", "Le comptage du nombre de synapses"], correct: 1, explanation: "La mise a l'echelle synaptique (synaptic scaling), decouverte par Turrigiano et Nelson en 1998, est un mecanisme homeostasique ajustant proportionnellement la force de toutes les synapses d'un neurone en fonction de son activite moyenne." },
            { q: "Qu'apporte la theorie BCM a la regle de Hebb ?", opts: ["Un seuil de modification glissant assurant la stabilite", "Une vitesse d'apprentissage plus rapide", "La capacite d'oubli volontaire", "Un mecanisme de recompense"], correct: 0, explanation: "La theorie BCM (Bienenstock-Cooper-Munro, 1982) etend la regle de Hebb en introduisant un seuil de modification qui s'ajuste dynamiquement en fonction de l'activite du neurone, empechant la saturation des poids synaptiques." },
            { q: "Quelle fenetre temporelle est typique de la STDP ?", opts: ['Plus ou moins 1 ms', 'Plus ou moins 20 ms', 'Plus ou moins 100 ms', 'Plus ou moins 1 seconde'], correct: 1, explanation: "La fenetre temporelle typique de la STDP est d'environ plus ou moins 20 ms : le renforcement ou l'affaiblissement synaptique depend de l'intervalle entre les decharges pre- et postsynaptiques dans cette fenetre." }
          ],
          definitions: [
            { term: 'Postulat de Hebb', def: "Principe formule en 1949 stipulant que lorsqu'un neurone contribue de maniere repetee a l'activation d'un autre, la connexion synaptique entre eux est renforcee." },
            { term: 'STDP', def: "Spike-timing-dependent plasticity : regle de plasticite synaptique ou le renforcement ou l'affaiblissement depend de l'ordre temporel precis des decharges pre- et postsynaptiques, dans une fenetre de plus ou moins 20 ms." },
            { term: 'Mise a l\'echelle synaptique', def: "Mecanisme homeostasique decouvvert par Turrigiano (1998) ou un neurone ajuste proportionnellement la force de toutes ses synapses pour maintenir un niveau d'activite stable." },
            { term: 'Metaplasticite', def: "La plasticite de la plasticite : modulation des regles de plasticite synaptique elles-memes en fonction de l'historique d'activite du neurone ou du reseau." }
          ],
          memos: [
            { front: "L'ouvrage fondateur de Hebb", back: "« The Organization of Behavior » (1949) de Donald Hebb est l'un des ouvrages les plus influents en neurosciences. Il y propose que les assemblees de neurones co-actifs constituent le substrat de la representation mentale." },
            { front: "STDP : ordre temporel des decharges", back: "Si le neurone presynaptique decharge avant le postsynaptique (dans une fenetre de ~20 ms), la synapse est renforcee (PLT). Si l'ordre est inverse, la synapse est affaiblie (DLT). Ce mecanisme permet la detection de relations causales." },
            { front: "Turrigiano et la stabilite des reseaux", back: "Gina Turrigiano a decouvert en 1998 la mise a l'echelle synaptique : un neurone trop peu actif renforce toutes ses synapses, un neurone trop actif les affaiblit, preservant ainsi la stabilite tout en maintenant les differences relatives entre synapses." }
          ]
        },
        {
          slug: 'neurones-formels',
          title: 'Les neurones formels',
          description: "Histoire et mathematiques des modeles abstraits du neurone, du perceptron au deep learning.",
          intro: "Les neurones formels sont des modeles mathematiques abstraits inspires des neurones biologiques, constituant les briques elementaires de tous les systemes d'intelligence artificielle modernes. Leur histoire, de McCulloch-Pitts (1943) aux transformers actuels, retrace l'evolution des idees a l'intersection des neurosciences et de l'informatique.",
          introHighlight: "Du neurone formel de McCulloch-Pitts au transformer de Vaswani, chaque generation de modeles de neurones artificiels a tire des lecons de la biologie tout en s'en emancipant pour resoudre des problemes pratiques.",
          sections: [
            {
              title: "Le perceptron et ses descendances",
              paragraphs: [
                "Frank Rosenblatt a construit en 1958 le Mark I Perceptron, une machine physique capable d'apprendre a reconnaitre des formes visuelles simples. Le perceptron consiste en une couche d'entree connectee a un neurone de sortie par des poids ajustables. La regle d'apprentissage du perceptron, qui augmente les poids des entrees actives lors d'une reponse correcte et les diminue lors d'une erreur, converge vers une solution si le probleme est lineairement separable — c'est le theoreme de convergence du perceptron.",
                "Le perceptron multicouche (MLP), avec une ou plusieurs couches cachees, surmonte la limitation du XOR grace a la capacite de combiner des frontieres de decision lineaires pour creer des frontieres non lineaires. Le theoreme d'approximation universelle, prouve par George Cybenko en 1989, montre qu'un MLP avec une seule couche cachee et suffisamment de neurones peut approximer n'importe quelle fonction continue — un resultat qui fonde theoriquement la puissance des reseaux de neurones profonds."
              ],
              highlight: "Le theoreme d'approximation universelle de Cybenko (1989) etablit qu'un reseau de neurones a une seule couche cachee avec un nombre suffisant de neurones peut approximer n'importe quelle fonction continue, justifiant mathematiquement l'utilisation des reseaux de neurones comme approximateurs universels."
            },
            {
              title: "L'apprentissage profond et ses architectures",
              paragraphs: [
                "L'apprentissage profond (deep learning), popularise a partir de 2006 par Geoffrey Hinton avec les deep belief networks, utilise des reseaux a nombreuses couches pour extraire automatiquement des representations hierarchiques des donnees. Cette idee de hierarchie s'inspire directement de l'organisation en couches du cortex cerebral. En 2012, le reseau AlexNet de Krizhevsky, Sutskever et Hinton a remporte le concours ImageNet avec une marge enorme, marquant le debut de la revolution du deep learning.",
                "Les architectures recurrentes (LSTM, proposees par Sepp Hochreiter et Jurgen Schmidhuber en 1997) s'inspirent de la memoire a court terme du cerveau, avec des portes qui controlent le flux d'information. Les reseaux a attention (transformers), proposes par Vaswani et al. en 2017, s'inspirent moins directement de la biologie mais partagent avec le cortex le principe d'une integration selective de l'information, ou chaque element peut « attendred » a tout autre element, similaire aux connexions a longue distance dans le cortex cerebral."
              ]
            },
            {
              title: "Divergences et convergences avec la biologie",
              paragraphs: [
                "Malgre leur inspiration biologique, les reseaux de neurones artificiels different significativement du cerveau. La retropropagation, algorithme d'apprentissage standard, necessite une propagation symetrique de l'erreur qui n'existe pas dans le cerveau (le « probleme du transport du poids »). Timothy Lillicrap et al. ont propose en 2016 le « feedback alignment », montrant que des poids de retour aleatoires et fixes suffisent pour l'apprentissage, une solution plus biologiquement plausible.",
                "Des approches recentes tentent de reconcilier IA et neurosciences. Le predictive coding (codage predictif), formalise par Karl Friston sous le nom de « principe de l'energie libre », propose que le cerveau minimise constamment l'erreur de prediction entre ses modeles internes et les entrees sensorielles, un processus qui peut etre implement par des circuits corticaux locaux. Les reseaux de neurones a pointes (spiking neural networks) utilisent la temporalite precise des potentiels d'action, se rapprochant davantage du calcul neuronal biologique."
              ]
            }
          ],
          quiz: [
            { q: "Qu'est-ce que le theoreme d'approximation universelle ?", opts: ["La preuve que l'IA depassera le cerveau humain", "La demonstration qu'un reseau a une couche cachee peut approximer toute fonction continue", "Un theoreme sur la convergence de la retropropagation", "La preuve que tout probleme est soluble par un perceptron"], correct: 1, explanation: "Le theoreme d'approximation universelle, prouve par Cybenko (1989), etablit qu'un reseau de neurones avec une seule couche cachee et suffisamment de neurones peut approximer n'importe quelle fonction continue avec une precision arbitraire." },
            { q: "Quel evenement a marque le debut de la revolution du deep learning en 2012 ?", opts: ["La victoire de Deep Blue aux echecs", "La victoire d'AlexNet au concours ImageNet", "La creation de ChatGPT", "La publication du theoreme de Cybenko"], correct: 1, explanation: "En 2012, le reseau AlexNet de Krizhevsky, Sutskever et Hinton a remporte le concours de reconnaissance d'images ImageNet avec une marge enorme par rapport aux methodes classiques, declenchant la revolution du deep learning." },
            { q: "Qu'est-ce que le « probleme du transport du poids » ?", opts: ["La difficulte de fabriquer des puces lourdes", "L'impossibilite biologique de la retropropagation symetrique", "Le cout de stockage des parametres d'un reseau", "La lenteur de l'apprentissage dans les grands reseaux"], correct: 1, explanation: "Le probleme du transport du poids designe l'impossibilite biologique de la retropropagation standard, qui necessite que les poids de retour soient exactement les memes que les poids de propagation en avant, une symetrie qui n'existe pas dans le cerveau." },
            { q: "Qui a propose les reseaux LSTM ?", opts: ['Geoffrey Hinton', 'Yann LeCun', 'Sepp Hochreiter et Jurgen Schmidhuber', 'Frank Rosenblatt'], correct: 2, explanation: "Les reseaux LSTM (Long Short-Term Memory) ont ete proposes par Sepp Hochreiter et Jurgen Schmidhuber en 1997 pour resoudre le probleme de la disparition du gradient dans les reseaux recurrents, permettant de capturer les dependances a long terme." },
            { q: "Qu'est-ce que le codage predictif selon Karl Friston ?", opts: ["Le cerveau predit et minimise les erreurs de prediction", "Le cerveau encode l'avenir dans l'ADN", "Le cerveau est un reseau feedforward", "Le cerveau stocke toutes les informations sans filtre"], correct: 0, explanation: "Le codage predictif, formalise par Karl Friston sous le principe de l'energie libre, propose que le cerveau genere constamment des predictions sur ses entrees sensorielles et met a jour ses modeles internes pour minimiser les erreurs de prediction." }
          ],
          definitions: [
            { term: 'Perceptron', def: "Modele de neurone artificiel propose par Rosenblatt (1958) consistant en une somme ponderee des entrees suivie d'une fonction de seuil, capable d'apprendre a classer des donnees lineairement separables." },
            { term: 'Approximation universelle', def: "Propriete mathematique des reseaux de neurones a une couche cachee de pouvoir approximer toute fonction continue avec une precision arbitraire, pourvu qu'ils disposent de suffisamment de neurones." },
            { term: 'Codage predictif', def: "Theorie selon laquelle le cerveau genere en permanence des predictions sur ses entrees sensorielles et ajuste ses modeles internes pour minimiser les erreurs de prediction, formalise par Karl Friston." }
          ],
          memos: [
            { front: "Le Mark I Perceptron", back: "Construit par Rosenblatt en 1958 a Cornell, le Mark I etait une machine physique avec 400 photocellules connectees a un neurone de sortie par des potentiometres ajustables. Il pouvait apprendre a distinguer des formes geometriques simples." },
            { front: "AlexNet et ImageNet 2012", back: "AlexNet, un CNN de 8 couches cree par Alex Krizhevsky sous la direction de Geoffrey Hinton, a reduit le taux d'erreur sur ImageNet de 26 % a 15,3 %, un saut de performance qui a convaincu la communaute scientifique du potentiel du deep learning." }
          ]
        }
      ]
    },

    // ── Hub 3: Neuroanatomie ──
    {
      slug: 'neuroanatomie',
      title: 'Neuroanatomie',
      description: "Structure et organisation du systeme nerveux central, du cortex cerebral a la moelle epiniere.",
      introText: "La neuroanatomie etudie la structure et l'organisation du systeme nerveux. De la surface plissee du cortex cerebral aux profondeurs du tronc cerebral, chaque structure possede un role precis dans le traitement de l'information, le controle moteur, la regulation des fonctions vitales et la generation de la conscience. La comprehension de l'anatomie cerebrale est le fondement de toutes les neurosciences cliniques.",
      introHighlight: "Le cerveau humain, pesant environ 1,4 kg, contient 86 milliards de neurones et occupe seulement 2 % de la masse corporelle tout en consommant 20 % de l'energie totale du corps.",
      lessons: [
        {
          slug: 'cortex-cerebral',
          title: 'Le cortex cerebral',
          description: "Structure, organisation et fonctions de la surface plissee du cerveau.",
          intro: "Le cortex cerebral est la couche externe du cerveau, epaisse de 2 a 4 mm, dont la surface plissee (environ 2 500 cm carre) abrite les fonctions cognitives superieures. Son organisation en six couches cellulaires distinctes, identifiee par Korbinian Brodmann en 1909, revele une architecture remarquablement ordonnee qui sous-tend la perception, la pensee, le langage et la conscience.",
          introHighlight: "Le cortex cerebral humain, avec ses 16 milliards de neurones repartis en six couches, est la structure la plus complexe connue dans l'univers biologique.",
          sections: [
            {
              title: "Les lobes cerebraux et leurs fonctions",
              paragraphs: [
                "Le cortex cerebral se divise en quatre lobes principaux. Le lobe frontal, le plus volumineux (environ 40 % du cortex), abrite le cortex moteur primaire (gyrus precentral), le cortex prefrontal (fonctions executives, planification, personnalite) et l'aire de Broca (production du langage). Le lobe parietal, situe en arriere du sillon central, contient le cortex somatosensoriel primaire (gyrus postcentral), cartographie par Wilder Penfield dans les annees 1930-1950 grace a ses stimulations electriques peroperatoires chez des patients eveilles.",
                "Le lobe temporal, situe lateralement sous le sillon lateral (scissure de Sylvius), abrite le cortex auditif primaire, l'aire de Wernicke (comprehension du langage) et, dans sa partie mediane, l'hippocampe et l'amygdale. Le lobe occipital, le plus petit, est entierement dedie au traitement visuel avec le cortex visuel primaire (V1) et les aires associatives visuelles. Le cortex insulaire, cache dans les profondeurs du sillon lateral, joue un role dans l'interoception, le gout et la conscience de soi."
              ],
              highlight: "Wilder Penfield a cree dans les annees 1940-1950 le celebre « homonculus cortical » en stimulant electriquement le cortex de patients eveilles pendant des chirurgies de l'epilepsie, revelant une carte somatotopique distordue du corps sur le cortex moteur et sensoriel."
            },
            {
              title: "L'organisation laminaire et les aires de Brodmann",
              paragraphs: [
                "Le cortex cerebral est organise en six couches (I a VI), chacune contenant des types cellulaires distincts. La couche IV, riche en cellules granulaires, est la principale couche receptrice des informations thalamiques — elle est particulierement developpee dans les cortex sensoriels primaires (aire visuelle V1, aire auditive A1). Les couches II et III contiennent des neurones pyramidaux projetant vers d'autres aires corticales, tandis que les couches V et VI contiennent de grands neurones pyramidaux projetant vers les structures sous-corticales (ganglions de la base, tronc cerebral, moelle epiniere).",
                "Korbinian Brodmann a publie en 1909 sa carte cytoarchitectonique du cortex, identifiant 52 aires distinctes basees sur la structure microscopique des couches cellulaires. Nombre de ces aires correspondent a des fonctions specifiques : l'aire 4 est le cortex moteur primaire, les aires 1-2-3 forment le cortex somatosensoriel, l'aire 17 est le cortex visuel primaire (V1), les aires 41-42 le cortex auditif. Cette nomenclature reste largement utilisee aujourd'hui, bien que des methodes modernes aient revele une parcellisation encore plus fine."
              ]
            },
            {
              title: "Les colonnes corticales et la connectivite",
              paragraphs: [
                "Vernon Mountcastle a decouvert en 1957 que le cortex est organise en colonnes fonctionnelles verticales de 300 a 600 micrometres de diametre, traversant les six couches. Chaque colonne forme un module de traitement dont les neurones partagent des proprietes de reponse similaires. Dans le cortex somatosensoriel, les neurones d'une meme colonne repondent au meme type de stimulus (pression, vibration) applique a la meme region du corps.",
                "La connectivite corticale comprend trois types de fibres. Les fibres d'association relient differentes aires du meme hemisphere (faisceau arque, faisceau longitudinal superieur). Les fibres commissurales relient les deux hemispheres, principalement via le corps calleux — une structure contenant environ 200 millions d'axones, dont la section (callosotomie) a permis a Roger Sperry de decouvrir la specialisation hemispherique, travaux recompenses par le prix Nobel en 1981. Les fibres de projection relient le cortex aux structures sous-corticales."
              ]
            }
          ],
          quiz: [
            { q: "Quelle est l'epaisseur approximative du cortex cerebral ?", opts: ['0,5 a 1 mm', '2 a 4 mm', '5 a 8 mm', '10 a 15 mm'], correct: 1, explanation: "Le cortex cerebral a une epaisseur de 2 a 4 mm selon les regions. Malgre sa minceur, il contient environ 16 milliards de neurones organises en six couches." },
            { q: "Combien d'aires Brodmann a-t-il identifiees en 1909 ?", opts: ['12', '28', '52', '100'], correct: 2, explanation: "Korbinian Brodmann a identifie 52 aires cytoarchitectoniques distinctes dans le cortex cerebral en 1909, basees sur la structure microscopique des couches cellulaires de chaque region." },
            { q: "Qu'est-ce que l'homonculus cortical de Penfield ?", opts: ["Un modele reduit du cerveau", "Une carte somatotopique du corps sur le cortex", "Un type de neurone", "Un patient celebre"], correct: 1, explanation: "L'homonculus cortical est la representation cartographique distordue du corps humain sur le cortex moteur et sensoriel, revele par les stimulations electriques de Wilder Penfield chez des patients eveilles." },
            { q: "Combien d'axones contient approximativement le corps calleux ?", opts: ['1 million', '20 millions', '200 millions', '2 milliards'], correct: 2, explanation: "Le corps calleux contient environ 200 millions d'axones reliant les deux hemispheres cerebraux. C'est la plus grande structure de substance blanche du cerveau." },
            { q: "Quelle couche corticale est la principale receptrice des informations thalamiques ?", opts: ['Couche I', 'Couche III', 'Couche IV', 'Couche VI'], correct: 2, explanation: "La couche IV du cortex est la principale couche receptrice des afferences thalamiques. Elle est particulierement developpee dans les cortex sensoriels primaires." }
          ],
          definitions: [
            { term: 'Cytoarchitectonique', def: "Etude de l'organisation microscopique des cellules du cortex cerebral, utilisee par Brodmann pour definir ses 52 aires corticales basees sur la structure laminaire." },
            { term: 'Corps calleux', def: "Plus grande commissure cerebrale, composee d'environ 200 millions d'axones reliant les deux hemispheres, permettant la communication interherispherique." },
            { term: 'Colonne corticale', def: "Module fonctionnel vertical de 300 a 600 micrometres de diametre traversant les six couches du cortex, dont les neurones partagent des proprietes de reponse similaires." }
          ],
          memos: [
            { front: "Surface du cortex cerebral", back: "Le cortex cerebral humain, s'il etait deploye a plat, couvrirait environ 2 500 cm carre (soit la surface d'une grande nappe). Ses sillons et gyri permettent de compacter cette surface dans la boite cranienne." },
            { front: "Penfield et les chirurgies eveillees", back: "Wilder Penfield, au Montreal Neurological Institute, a stimule electriquement le cortex de patients eveilles pendant des chirurgies de l'epilepsie (annees 1930-1950), cartographiant les fonctions motrices et sensorielles et decouvrant que la stimulation du lobe temporal pouvait evoquer des souvenirs vivaces." }
          ]
        },
        {
          slug: 'systeme-limbique',
          title: 'Le systeme limbique',
          description: "Les structures cerebrales profondes qui gouvernent les emotions, la memoire et la motivation.",
          intro: "Le systeme limbique est un ensemble de structures cerebrales profondes impliquees dans les emotions, la memoire, la motivation et le comportement. Situe a l'interface entre le cortex et le tronc cerebral, il comprend l'amygdale, l'hippocampe, le gyrus cingulaire, l'hypothalamus et d'autres structures. Le concept a ete formalise par Paul MacLean en 1952 avec sa theorie du cerveau triunique.",
          introHighlight: "Le systeme limbique, veritable carrefour emotionnel du cerveau, integre les signaux corporels, les souvenirs et les evaluations pour generer les emotions qui colorent notre experience et guident nos decisions.",
          sections: [
            {
              title: "L'amygdale : sentinelle emotionnelle",
              paragraphs: [
                "L'amygdale, structure en forme d'amande situee dans le lobe temporal median, est essentielle au traitement des emotions, en particulier la peur et l'anxiete. Joseph LeDoux a mis en evidence dans les annees 1990 deux voies de traitement de la peur : une voie rapide (thalamo-amygdalienne), directe et inconsciente, permettant une reaction de fuite en quelques millisecondes, et une voie lente (thalamo-cortico-amygdalienne), passant par le cortex pour une evaluation plus fine du danger.",
                "L'amygdale comprend plusieurs noyaux aux fonctions distinctes. Le noyau lateral est le principal site d'entree des informations sensorielles. Le noyau basolateral integre ces informations avec le contexte. Le noyau central genere les reponses autonomiques et comportementales (augmentation du rythme cardiaque, freezing). L'etude de la patiente S.M., atteinte d'une maladie d'Urbach-Wiethe ayant detruit selectivement ses amygdales bilaterales, a montre une absence de peur et une incapacite a reconnaitre les expressions faciales de peur chez autrui."
              ],
              highlight: "La patiente S.M., dont les amygdales ont ete detruites par la maladie d'Urbach-Wiethe, ne ressent pas la peur et ne peut pas la reconnaitre sur les visages, mais elle eprouve normalement les autres emotions — demonstrant le role specifique de l'amygdale dans le circuit de la peur."
            },
            {
              title: "L'hippocampe : architecte de la memoire et de la navigation",
              paragraphs: [
                "L'hippocampe, structure en forme d'hippocampe (cheval marin) du lobe temporal median, est essentiel pour l'encodage de la memoire episodique et la navigation spatiale. John O'Keefe a decouvert en 1971 les cellules de lieu (place cells) dans l'hippocampe du rat, des neurones qui s'activent selectivement lorsque l'animal se trouve a un endroit precis de son environnement. Pour cette decouverte, O'Keefe a recu le prix Nobel en 2014 conjointement avec May-Britt Moser et Edvard Moser.",
                "Les Moser ont identifie en 2005 les cellules de grille (grid cells) dans le cortex entorhinal, structure adjacente a l'hippocampe. Ces neurones s'activent en des points regulierement espaces formant un maillage hexagonal, constituant un systeme de coordonnees interne pour la navigation. L'hippocampe contient egalement des cellules de direction de la tete (head direction cells), des cellules de bordure (border cells) et des cellules de temps (time cells), formant un systeme complet de representation spatio-temporelle."
              ]
            },
            {
              title: "L'hypothalamus et la regulation homeostasique",
              paragraphs: [
                "L'hypothalamus, bien que ne representant que 0,3 % du volume cerebral (environ 4 grammes), est le centre de regulation de l'homeostasie. Il controle la temperature corporelle, la faim, la soif, les rythmes circadiens, la reproduction et les reponses au stress. Ses noyaux suprachiasmatiques (NSC), decrits par Robert Moore et Victor Eichler en 1972, constituent l'horloge biologique centrale du corps, synchronisee sur le cycle lumiere-obscurite par la melanopsine des cellules ganglionnaires retiniennes.",
                "L'axe hypothalamo-hypophysaire (HPA) relie le systeme nerveux au systeme endocrinien. L'hypothalamus secrete des hormones de liberation (CRH, GnRH, TRH) qui agissent sur l'hypophyse (glande pituitaire), laquelle controle a son tour les glandes endocrines peripheriques (surrenales, thyroide, gonades). Cette cascade hormonale permet au cerveau de reguler l'ensemble du metabolisme, la reponse au stress (cortisol) et la reproduction. Hans Selye a decrit en 1936 le syndrome general d'adaptation impliquant cet axe."
              ]
            }
          ],
          quiz: [
            { q: "Quelle structure du systeme limbique est essentielle au traitement de la peur ?", opts: ["L'hippocampe", "L'amygdale", "Le thalamus", "Le cervelet"], correct: 1, explanation: "L'amygdale est la structure centrale du circuit de la peur. Les travaux de Joseph LeDoux ont montre qu'elle recoit et traite les informations de menace par une voie rapide (inconsciente) et une voie lente (consciente)." },
            { q: "Qu'a decouvert John O'Keefe dans l'hippocampe en 1971 ?", opts: ['Les neurones miroirs', 'Les cellules de lieu', 'Les cellules de Purkinje', 'Les interneurones inhibiteurs'], correct: 1, explanation: "John O'Keefe a decouvert les cellules de lieu (place cells) dans l'hippocampe du rat : des neurones qui s'activent selectivement lorsque l'animal se trouve a un endroit precis, formant une carte cognitive de l'environnement." },
            { q: "Quel pourcentage du volume cerebral represente l'hypothalamus ?", opts: ['0,3 %', '2 %', '5 %', '10 %'], correct: 0, explanation: "L'hypothalamus ne represente qu'environ 0,3 % du volume cerebral (environ 4 grammes), mais il joue un role disproportionnement important dans la regulation de l'homeostasie, du stress et du metabolisme." },
            { q: "Que sont les cellules de grille decouvertes par les Moser ?", opts: ["Des neurones visuels en forme de grille", "Des neurones du cortex entorhinal s'activant en maillage hexagonal", "Des cellules gliales de soutien", "Des neurones du cervelet"], correct: 1, explanation: "Les cellules de grille, decouvertes par May-Britt et Edvard Moser en 2005, sont des neurones du cortex entorhinal qui s'activent en des points regulierement espaces formant un maillage hexagonal, servant de systeme de coordonnees pour la navigation." },
            { q: "Qu'est-ce que l'axe hypothalamo-hypophysaire ?", opts: ["Le lien entre les deux hemispheres cerebraux", "Le systeme reliant le cerveau au systeme endocrinien", "La voie motrice principale", "Le circuit de la recompense"], correct: 1, explanation: "L'axe hypothalamo-hypophysaire relie le systeme nerveux central au systeme endocrinien : l'hypothalamus secretre des hormones qui controlent l'hypophyse, laquelle regule les glandes endocrines peripheriques." }
          ],
          definitions: [
            { term: 'Cellules de lieu', def: "Neurones de l'hippocampe qui s'activent selectivement lorsque l'animal se trouve a un emplacement specifique de son environnement, decouverts par John O'Keefe en 1971 (prix Nobel 2014)." },
            { term: 'Amygdale', def: "Structure en forme d'amande du lobe temporal median, centre du traitement des emotions (peur, anxiete), de la memoire emotionnelle et de l'evaluation de la valence affective des stimuli." },
            { term: 'Noyaux suprachiasmatiques', def: "Paire de noyaux hypothalamiques constituant l'horloge biologique centrale du corps, contenant environ 20 000 neurones synchronises sur le cycle lumiere-obscurite." }
          ],
          memos: [
            { front: "Le prix Nobel 2014 et le GPS cerebral", back: "John O'Keefe, May-Britt Moser et Edvard Moser ont recu le prix Nobel 2014 pour la decouverte du « GPS cerebral » : les cellules de lieu dans l'hippocampe (O'Keefe, 1971) et les cellules de grille dans le cortex entorhinal (Moser, 2005)." },
            { front: "La patiente S.M. et la peur", back: "La patiente S.M., dont les amygdales ont ete detruites par la maladie d'Urbach-Wiethe, ne ressent pas la peur, meme face a des serpents ou dans des maisons hantees, et ne reconnait pas les expressions faciales de peur." },
            { front: "L'hypothalamus et le stress", back: "Lors d'un stress, l'hypothalamus active l'axe HPA : il secrete la CRH, qui stimule l'hypophyse a produire l'ACTH, laquelle declenche la liberation de cortisol par les glandes surrenales, preparant le corps a la fuite ou au combat." }
          ]
        },
        {
          slug: 'tronc-cerebral',
          title: 'Le tronc cerebral',
          description: "Le centre vital du cerveau : respiration, vigilance et relais sensori-moteurs.",
          intro: "Le tronc cerebral, situe entre le cerveau et la moelle epiniere, est la structure la plus ancienne du systeme nerveux central sur le plan evolutif. Composé du mesencephale, du pont (protubérance) et du bulbe rachidien (medulla oblongata), il controle les fonctions vitales — respiration, rythme cardiaque, pression arterielle — et sert de relais pour toutes les informations transitant entre le cerveau et le corps.",
          introHighlight: "Le tronc cerebral, bien que ne representant que 4,4 % de la masse cerebrale, est indispensable a la survie : sa destruction entraine la mort cerebrale, meme si le cortex est intact.",
          sections: [
            {
              title: "Organisation du tronc cerebral",
              paragraphs: [
                "Le tronc cerebral se compose de trois parties superposees. Le mesencephale (cerveau moyen), la partie la plus superieure, contient les colliculi superieurs (relais visuels) et inferieurs (relais auditifs), la substance noire (dopamine, impliquee dans la maladie de Parkinson) et le noyau rouge (coordination motrice). Le pont (protubérance), partie moyenne, contient les noyaux pontins qui relaient les informations corticales vers le cervelet, ainsi que des centres impliques dans le sommeil paradoxal.",
                "Le bulbe rachidien (medulla oblongata), partie la plus inferieure, abrite les centres vitaux : le centre respiratoire (noyaux du complexe pre-Botzinger, decouverts par Jack Feldman en 1991), le centre cardiovasculaire (noyau du tractus solitaire, noyau ambigu) et le centre du vomissement (area postrema). Dix des douze paires de nerfs craniens emergent du tronc cerebral, controlant les muscles de la face, des yeux, de la langue, ainsi que les fonctions viscerales via le nerf vague (X)."
              ],
              highlight: "Le complexe pre-Botzinger, decouvert par Jack Feldman en 1991 dans le bulbe rachidien, est le generateur central du rythme respiratoire : un petit groupe de quelques centaines de neurones dont la destruction arrete definitivement la respiration."
            },
            {
              title: "La formation reticulee et la vigilance",
              paragraphs: [
                "La formation reticulee est un reseau diffus de neurones s'etendant sur toute la longueur du tronc cerebral. Giuseppe Moruzzi et Horace Magoun ont demontre en 1949 que la stimulation electrique de la formation reticulee reveillait instantanement un animal anesthesie, tandis que sa destruction produisait un coma irreversible. Ils ont ainsi identifie le systeme reticulaire activateur ascendant (SRAA), responsable du maintien de la vigilance et de la conscience.",
                "Le SRAA utilise plusieurs systemes de neurotransmetteurs : les neurones cholinergiques des noyaux pedunculopontin et laterodorsal tegmental, les neurones noradrenergiques du locus coeruleus (decrits par Kjell Fuxe dans les annees 1960), les neurones serotoninergiques des noyaux du raphe, et les neurones histaminergiques du noyau tuberomammillaire hypothalamique. Ces systemes projettent massivement vers le cortex et le thalamus, modulant le niveau de vigilance selon un gradient allant du sommeil profond a l'eveil maximal."
              ]
            },
            {
              title: "Les nerfs craniens et les reflexes du tronc cerebral",
              paragraphs: [
                "Dix des douze paires de nerfs craniens emergent du tronc cerebral. Le nerf trijumeau (V) controle la sensibilite de la face et la mastication. Le nerf facial (VII) innerve les muscles de l'expression faciale. Le nerf vestibulocochleaire (VIII) transmet les informations auditives et vestibulaires. Le nerf vague (X), le plus long nerf cranien, innerve la plupart des organes thoraciques et abdominaux et constitue la principale voie du systeme nerveux parasympathique.",
                "Les reflexes du tronc cerebral sont essentiels pour le diagnostic de la mort cerebrale. Le reflexe pupillaire (nerf III), le reflexe corneeen (nerfs V et VII), le reflexe oculo-cephalique (nerfs III, VI, VIII), le reflexe de la toux (nerf X) et le reflexe de deglutition (nerfs IX, X) testent l'integrite de differents niveaux du tronc cerebral. L'absence de tous ces reflexes, combinee a l'absence de respiration spontanee (test d'apnee), constitue le critere clinique de la mort cerebrale dans la plupart des legislations."
              ]
            }
          ],
          quiz: [
            { q: "Quelles sont les trois parties du tronc cerebral (de haut en bas) ?", opts: ['Cortex, thalamus, hypothalamus', 'Mesencephale, pont, bulbe rachidien', 'Cervelet, hippocampe, amygdale', 'Corps calleux, fornix, commissure'], correct: 1, explanation: "Le tronc cerebral se compose, de haut en bas, du mesencephale, du pont (protubérance) et du bulbe rachidien (medulla oblongata), chacun contenant des noyaux aux fonctions specifiques." },
            { q: "Qui a decouvert le systeme reticulaire activateur ascendant ?", opts: ['Paul Broca', 'Moruzzi et Magoun', 'Santiago Ramon y Cajal', 'Charles Sherrington'], correct: 1, explanation: "Giuseppe Moruzzi et Horace Magoun ont decouvert en 1949 le systeme reticulaire activateur ascendant en montrant que la stimulation de la formation reticulee reveillait un animal anesthesie et que sa destruction causait le coma." },
            { q: "Quel nerf cranien est le plus long et innerve la plupart des organes ?", opts: ['Le nerf trijumeau (V)', 'Le nerf facial (VII)', 'Le nerf glossopharyngien (IX)', 'Le nerf vague (X)'], correct: 3, explanation: "Le nerf vague (X) est le nerf cranien le plus long. Il innerve la plupart des organes thoraciques et abdominaux et constitue la principale voie du systeme nerveux parasympathique." },
            { q: "Quelle structure genere le rythme respiratoire ?", opts: ['Le cortex moteur', "Le complexe pre-Botzinger", 'Le cervelet', 'Le thalamus'], correct: 1, explanation: "Le complexe pre-Botzinger, decouvert par Jack Feldman en 1991 dans le bulbe rachidien, est le generateur central du rythme respiratoire, constitue de quelques centaines de neurones." },
            { q: "Combien de paires de nerfs craniens emergent du tronc cerebral ?", opts: ['6', '8', '10', '12'], correct: 2, explanation: "10 des 12 paires de nerfs craniens emergent du tronc cerebral (les nerfs I olfactif et II optique emergent directement du cerveau). Ils controlent les fonctions sensorielles et motrices de la tete et les fonctions viscerales." }
          ],
          definitions: [
            { term: 'Formation reticulee', def: "Reseau diffus de neurones s'etendant sur toute la longueur du tronc cerebral, implique dans le maintien de la vigilance, la modulation de la douleur et le controle moteur." },
            { term: 'Nerf vague', def: "Dixieme nerf cranien (X), le plus long du corps, innervant la plupart des organes thoraciques et abdominaux, principal mediateur du systeme nerveux parasympathique." },
            { term: 'Substance noire', def: "Noyau du mesencephale riche en neuromelanine contenant des neurones dopaminergiques projetant vers le striatum, dont la degenerescence cause la maladie de Parkinson." }
          ],
          memos: [
            { front: "Le tronc cerebral et la mort cerebrale", back: "La mort cerebrale est definie par la perte irreversible de toutes les fonctions du tronc cerebral : absence de reflexes craniens et de respiration spontanee. Le cortex peut etre detruit sans entrainer la mort tant que le tronc cerebral fonctionne." },
            { front: "Le locus coeruleus et la noradrenaline", back: "Le locus coeruleus, minuscule noyau du pont contenant seulement 15 000 a 50 000 neurones par hemisphere, est la principale source de noradrenaline du cerveau et projette vers pratiquement toutes les regions cerebrales pour moduler la vigilance et l'attention." }
          ]
        },
        {
          slug: 'cervelet',
          title: 'Le cervelet',
          description: "Le « petit cerveau » : coordination motrice, equilibre et apprentissage des habiletes.",
          intro: "Le cervelet (« petit cerveau » en latin), situe a l'arriere du tronc cerebral, contient plus de la moitie des neurones du cerveau (environ 69 milliards) dans un volume ne representant que 10 % de la masse cerebrale totale. Longtemps considere comme une structure purement motrice, il est aujourd'hui reconnu comme un acteur essentiel de la cognition, du langage et des emotions.",
          introHighlight: "Le cervelet contient environ 69 milliards de neurones — bien plus que le cortex cerebral — et realise des calculs de prediction et de correction indispensables a la coordination, a l'apprentissage moteur et aux fonctions cognitives.",
          sections: [
            {
              title: "Architecture et circuiterie du cervelet",
              paragraphs: [
                "Le cervelet possede une architecture remarquablement reguliere decouverte par Santiago Ramon y Cajal a la fin du XIXe siecle. Les cellules de Purkinje, decrites par Jan Evangelista Purkyne en 1837, sont les seuls neurones de sortie du cortex cerebelleux. Chacune recoit environ 200 000 synapses des fibres paralleles (axones des cellules granulaires) et une unique fibre grimpante provenant de l'olive inferieure du bulbe rachidien. Les cellules granulaires, les neurones les plus petits et les plus nombreux du cerveau, forment une couche dense sous les Purkinje.",
                "Le cervelet se divise en trois parties fonctionnelles. Le vestibulocerebellum (lobe flocculonodulaire) controle l'equilibre et les mouvements oculaires. Le spinocerebellum (vermis et zones intermediaires) regule le tonus musculaire et la posture. Le cerebrocerebellum (hemispheres lateraux), le plus developpé chez l'humain, est implique dans la planification motrice, l'apprentissage et les fonctions cognitives. Les lesions du cerebrocerebellum peuvent causer le syndrome cerebrelleux cognitif affectif, decrit par Jeremy Schmahmann en 1998."
              ],
              highlight: "Chaque cellule de Purkinje du cervelet recoit environ 200 000 synapses des fibres paralleles et une seule fibre grimpante. Cette architecture unique permet au cervelet de comparer les commandes motrices aux retours sensoriels et de corriger les erreurs en temps reel."
            },
            {
              title: "Le cervelet comme machine a predire",
              paragraphs: [
                "Le cervelet fonctionne comme un predicteur : il utilise des modeles internes (internal models) pour anticiper les consequences de nos actions. Daniel Wolpert et Mitsuo Kawato ont formalise cette theorie dans les annees 1990-2000. Le modele direct (forward model) predit les consequences sensorielles d'une commande motrice, permettant de corriger le mouvement avant meme que les retours sensoriels n'arrivent. Le modele inverse (inverse model) calcule la commande motrice necessaire pour atteindre un objectif desire.",
                "Cette capacite predictive explique pourquoi nous ne pouvons pas nous chatouiller nous-memes : le cervelet predit parfaitement les consequences tactiles de nos propres mouvements et annule la sensation. Sarah-Jayne Blakemore et al. ont montre en 1998 que lorsque la prediction est alteree (par un delai ou une deviation du mouvement), la sensation de chatouillement reapparait. Les patients avec des lesions cerebelleuses peuvent ressentir le chatouillement auto-administre car leur systeme de prediction est defaillant."
              ]
            },
            {
              title: "Le cervelet au-dela du mouvement",
              paragraphs: [
                "Les recherches recentes ont revele que le cervelet est bien plus qu'un simple coordinateur moteur. Les travaux de Peter Strick et ses collaborateurs utilisant le tracage viral transynaptique ont montre que les hemispheres cerebelleux lateraux sont connectes non seulement au cortex moteur mais aussi au cortex prefrontal, au cortex parietal et au cortex temporal, formant des boucles fermees cortex-cervelet. Ces connexions sous-tendent des fonctions cognitives complexes.",
                "Jeremy Schmahmann a decrit en 1998 le syndrome cerebrelleux cognitif affectif (CCAS) chez des patients avec des lesions cerebelleuses : troubles de la planification, de la memoire de travail, du langage, de la cognition spatiale et de la regulation emotionnelle. Des etudes d'imagerie fonctionnelle confirment l'activation du cervelet lors de taches purement cognitives : calcul mental, generation de mots, perception du temps et meme empathie. Le cervelet pourrait appliquer ses algorithmes de prediction et de correction non seulement aux mouvements mais aussi aux pensees."
              ]
            }
          ],
          quiz: [
            { q: "Combien de neurones contient approximativement le cervelet ?", opts: ['16 milliards', '30 milliards', '69 milliards', '100 milliards'], correct: 2, explanation: "Le cervelet contient environ 69 milliards de neurones, soit environ quatre fois plus que le cortex cerebral (16 milliards), principalement grace a l'immense nombre de cellules granulaires." },
            { q: "Qui a decrit les cellules de Purkinje ?", opts: ['Santiago Ramon y Cajal', 'Jan Evangelista Purkyne', 'Camillo Golgi', 'Korbinian Brodmann'], correct: 1, explanation: "Jan Evangelista Purkyne (Purkinje) a decrit ces grands neurones du cortex cerebelleux en 1837. Ce sont les seuls neurones de sortie du cortex cerebelleux, chacun recevant environ 200 000 synapses." },
            { q: "Pourquoi ne peut-on pas se chatouiller soi-meme ?", opts: ["Par manque de motivation", "Le cervelet predit et annule les consequences sensorielles de nos propres actions", "Les recepteurs tactiles se desensibilisent", "Le cortex moteur bloque la sensation"], correct: 1, explanation: "Le cervelet predit parfaitement les consequences tactiles de nos propres mouvements grace a ses modeles internes et annule la sensation resultante. Lorsque cette prediction est perturbee, la sensation de chatouillement reapparait." },
            { q: "Qu'est-ce que le syndrome cerebrelleux cognitif affectif ?", opts: ["Un trouble purement moteur", "Un ensemble de deficits cognitifs et emotionnels apres lesion cerebelleuse", "Un trouble du sommeil", "Une forme d'epilepsie"], correct: 1, explanation: "Le CCAS, decrit par Schmahmann en 1998, est un ensemble de troubles cognitifs (planification, memoire de travail, langage) et emotionnels resultant de lesions des hemispheres cerebelleux lateraux." },
            { q: "Quelle partie du cervelet est la plus developpee chez l'humain ?", opts: ['Le vestibulocerebellum', 'Le spinocerebellum', 'Le cerebrocerebellum', 'Le vermis'], correct: 2, explanation: "Le cerebrocerebellum (hemispheres lateraux) est la partie la plus developpee chez l'humain, refletant l'expansion des fonctions cognitives. Il est connecte au cortex prefrontal et participe a la planification et aux fonctions executives." }
          ],
          definitions: [
            { term: 'Cellule de Purkinje', def: "Grand neurone du cortex cerebelleux, seul neurone de sortie du cortex du cervelet, recevant environ 200 000 synapses des fibres paralleles et une seule fibre grimpante, nomme d'apres Jan Evangelista Purkyne (1837)." },
            { term: 'Modele interne', def: "Representation neuronale que le cervelet construit pour predire les consequences sensorielles d'une commande motrice (modele direct) ou pour calculer la commande necessaire a un objectif (modele inverse)." },
            { term: 'Cellule granulaire', def: "Neurone le plus petit et le plus nombreux du cerveau, localise dans la couche granulaire du cervelet, dont les axones (fibres paralleles) transmettent l'information aux cellules de Purkinje." }
          ],
          memos: [
            { front: "Le cervelet : plus de neurones que le cortex", back: "Le cervelet contient environ 69 milliards de neurones contre 16 milliards pour le cortex cerebral, principalement en raison de l'immense nombre de cellules granulaires, les plus petits neurones du cerveau (5-8 micrometres de diametre)." },
            { front: "Le chatouillement et le cervelet", back: "On ne peut pas se chatouiller soi-meme car le cervelet predit et annule les consequences sensorielles de nos propres mouvements. Blakemore et al. (1998) ont montre qu'un delai artificiel entre le mouvement et le contact restaure la sensation de chatouillement." }
          ]
        },
        {
          slug: 'moelle-epiniere',
          title: "La moelle epiniere",
          description: "L'autoroute de l'information entre le cerveau et le corps, et siege des reflexes spinaux.",
          intro: "La moelle epiniere est un cordon nerveux d'environ 45 cm de long et 1 cm de diametre, protege par la colonne vertebrale, qui constitue l'autoroute de communication entre le cerveau et le corps. Elle contient environ un milliard de neurones et assure non seulement la transmission des informations sensorielles et motrices, mais aussi des fonctions autonomes comme les reflexes spinaux et le controle de la miction.",
          introHighlight: "La moelle epiniere n'est pas un simple cable : elle contient des circuits neuronaux sophistiques capables de generer des mouvements coordonnes (marche, nage) de maniere autonome, meme sans connexion au cerveau.",
          sections: [
            {
              title: "Organisation segmentaire et voies nerveuses",
              paragraphs: [
                "La moelle epiniere est organisee en 31 segments (8 cervicaux, 12 thoraciques, 5 lombaires, 5 sacres, 1 coccygien), chacun donnant naissance a une paire de nerfs spinaux. En coupe transversale, la substance grise centrale (en forme de papillon) contient les corps cellulaires des neurones, tandis que la substance blanche peripherique contient les faisceaux d'axones myélinises. La corne dorsale recoit les informations sensorielles, la corne ventrale contient les motoneurones, et la corne laterale (presente aux niveaux thoraciques et lombaires) contient les neurones du systeme nerveux autonome.",
                "Les voies ascendantes transmettent les informations sensorielles vers le cerveau : le faisceau spinothalamique (douleur, temperature), les colonnes dorsales (toucher fin, proprioception). Les voies descendantes transmettent les commandes motrices : le faisceau corticospinal (mouvements volontaires), le faisceau rubrospinal (coordination), le faisceau vestibulospinal (equilibre). Le faisceau corticospinal, qui croise la ligne mediane au niveau des pyramides bulbaires (decussation pyramidale), explique pourquoi l'hemisphere gauche controle le cote droit du corps."
              ],
              highlight: "Le faisceau corticospinal contient environ un million d'axones par cote et croise la ligne mediane au niveau du bulbe rachidien (decussation pyramidale), ce qui explique pourquoi chaque hemisphere cerebral controle le cote oppose du corps."
            },
            {
              title: "Les reflexes spinaux",
              paragraphs: [
                "Charles Sherrington, prix Nobel 1932, a etabli les lois fondamentales du reflexe spinal. Le reflexe myotatique (reflexe d'etirement), le plus simple, est un arc reflexe monosynaptique : l'etirement d'un muscle active les fuseaux neuromusculaires dont les fibres afferentes Ia font synapse directement avec les motoneurones alpha de la corne ventrale, provoquant la contraction reflexe du muscle etire. Le reflexe rotulien (le coup de marteau sur le genou) en est l'exemple classique.",
                "Des reflexes plus complexes impliquent des interneurones. Le reflexe de retrait (flexion) a la douleur mobilise des circuits polysynaptiques qui flechissent le membre atteint tout en etendant le membre oppose pour maintenir l'equilibre (reflexe d'extension croisee). Sherrington a montre que l'inhibition reciproque — le relachement automatique des muscles antagonistes lors de la contraction d'un muscle agoniste — est un principe fondamental de l'organisation motrice spinale."
              ]
            },
            {
              title: "Les generateurs centraux de patron et la plasticite spinale",
              paragraphs: [
                "La moelle epiniere contient des circuits autonomes appeles generateurs centraux de patron (CPG, central pattern generators) capables de produire des mouvements rythmiques coordonnes sans commande cerebrale. Thomas Graham Brown a demontre en 1911 que des chats decerebres (dont la moelle epiniere etait deconnectee du cerveau) pouvaient encore produire des mouvements de marche, prouvant l'existence de ces oscillateurs spinaux. Sten Grillner a elucide les mecanismes des CPG chez la lamproie dans les annees 1980.",
                "La plasticite de la moelle epiniere offre des espoirs pour le traitement des lesions medullaires. Gregoire Courtine et ses collaborateurs a l'EPFL ont montre en 2018 que la stimulation electrique epidurale de la moelle epiniere, combinee a une rehabilitation intensive, permet a des patients paralyses de remarcher. Ce protocole reactive les CPG spinaux en dessous de la lesion. Des interfaces cerveau-moelle epiniere, developpees egalement par l'equipe de Courtine, ont permis en 2023 de restaurer la marche chez un patient tetraplegique en transmettant sans fil les intentions motrices du cortex directement aux stimulateurs spinaux."
              ]
            }
          ],
          quiz: [
            { q: "Combien de segments possede la moelle epiniere ?", opts: ['12', '24', '31', '42'], correct: 2, explanation: "La moelle epiniere est divisee en 31 segments : 8 cervicaux, 12 thoraciques, 5 lombaires, 5 sacres et 1 coccygien, chacun donnant naissance a une paire de nerfs spinaux." },
            { q: "Qu'est-ce que la decussation pyramidale ?", opts: ["La destruction des pyramides cerebrales", "Le croisement du faisceau corticospinal au niveau du bulbe", "Un reflexe spinal complexe", "La division de la moelle en segments"], correct: 1, explanation: "La decussation pyramidale est le croisement des fibres du faisceau corticospinal au niveau des pyramides du bulbe rachidien, expliquant pourquoi chaque hemisphere controle le cote oppose du corps." },
            { q: "Qu'a demontre Thomas Graham Brown en 1911 ?", opts: ["Que le cerveau controle tous les mouvements", "Que la moelle epiniere peut generer des mouvements de marche sans le cerveau", "Que les reflexes sont des comportements appris", "Que la moelle ne peut pas regenerer"], correct: 1, explanation: "Graham Brown a montre que des chats decerebres pouvaient encore produire des mouvements de marche, demontrant l'existence de generateurs centraux de patron (CPG) dans la moelle epiniere, capables de fonctionner de maniere autonome." },
            { q: "Quel type de reflexe est le reflexe rotulien ?", opts: ['Polysynaptique', 'Monosynaptique', 'Multimodal', 'Conditionne'], correct: 1, explanation: "Le reflexe rotulien est un reflexe myotatique monosynaptique : les fibres afferentes Ia du fuseau neuromusculaire font synapse directement sur les motoneurones alpha, sans interneurone intermediaire." },
            { q: "Qu'a realise l'equipe de Gregoire Courtine a l'EPFL ?", opts: ["Le premier scanner IRM", "La restauration de la marche chez des paralyses par stimulation electrique spinale", "Le clonage de neurones spinaux", "La premiere greffe de moelle epiniere"], correct: 1, explanation: "Gregoire Courtine et ses collaborateurs a l'EPFL ont developpe des protocoles de stimulation electrique epidurale de la moelle epiniere qui, combines a une rehabilitation intensive, permettent a des patients paralyses de remarcher en reactivant les CPG spinaux." }
          ],
          definitions: [
            { term: 'Generateur central de patron (CPG)', def: "Circuit neuronal spinal capable de produire des mouvements rythmiques coordonnes (marche, nage) de maniere autonome, sans commande cerebrale, base sur des oscillateurs neuronaux reciproquement inhibiteurs." },
            { term: 'Reflexe myotatique', def: "Reflexe monosynaptique d'etirement ou l'activation des fuseaux neuromusculaires provoque la contraction reflexe du muscle etire, exemple classique : le reflexe rotulien." },
            { term: 'Faisceau corticospinal', def: "Principale voie motrice descendante reliant le cortex moteur aux motoneurones de la moelle epiniere, contenant environ un million d'axones par cote, croisant la ligne mediane au niveau du bulbe." }
          ],
          memos: [
            { front: "Sherrington et le reflexe", back: "Charles Sherrington, prix Nobel 1932, a etabli les principes fondamentaux du reflexe spinal : inhibition reciproque, voie finale commune, sommation temporelle et spatiale. Il est considere comme le pere de la neurophysiologie moderne." },
            { front: "Interface cerveau-moelle epiniere", back: "En 2023, l'equipe de Gregoire Courtine (EPFL) a implante un pont numerique sans fil chez un patient tetraplegique, transmettant les intentions motrices du cortex cerebral directement aux stimulateurs de la moelle epiniere, restaurant la marche de maniere volontaire." },
            { front: "La lamproie, modele des CPG", back: "Sten Grillner a utilise la lamproie (vertebre primitif) comme modele pour elucider les CPG spinaux dans les annees 1980. Son systeme nerveux relativement simple a permis d'identifier les neurones individuels composant le circuit generateur de la nage." }
          ]
        }
      ]
    },

    // ── Hub 4: Neurochimie ──
    {
      slug: 'neurochimie',
      title: 'Neurochimie',
      description: "Les molecules du cerveau : neurotransmetteurs, recepteurs et signalisation synaptique.",
      introText: "La neurochimie etudie les molecules qui permettent la communication entre neurones. Les neurotransmetteurs — dopamine, serotonine, acetylcholine, glutamate, GABA — sont les messagers chimiques du cerveau, dont l'equilibre determine notre humeur, nos pensees et nos comportements. Comprendre la neurochimie est essentiel pour traiter les troubles psychiatriques et neurologiques.",
      introHighlight: "Le cerveau utilise plus de 100 neurotransmetteurs differents, chacun agissant sur des recepteurs specifiques pour moduler l'activite de circuits neuronaux distincts, de l'eveil au sommeil, du plaisir a la douleur.",
      lessons: [
        {
          slug: 'neurotransmetteurs',
          title: 'Les neurotransmetteurs',
          description: "Vue d'ensemble des messagers chimiques du cerveau et de leur classification.",
          intro: "Les neurotransmetteurs sont des molecules chimiques liberees par les neurones au niveau des synapses pour transmettre l'information d'un neurone a l'autre. Depuis la decouverte de l'acetylcholine par Otto Loewi en 1921, plus de 100 neurotransmetteurs ont ete identifies, allant des acides amines simples aux neuropeptides complexes.",
          introHighlight: "Otto Loewi a demontre en 1921 l'existence de la transmission chimique par une experience elegante : le liquide recueilli d'un coeur de grenouille stimule par le nerf vague ralentissait un second coeur, prouvant qu'une substance chimique (l'acetylcholine) mediait l'effet nerveux.",
          sections: [
            {
              title: "Classification et mecanismes de liberation",
              paragraphs: [
                "Les neurotransmetteurs se classent en plusieurs familles. Les acides amines comprennent le glutamate (principal neurotransmetteur excitateur du cerveau, utilise par environ 80 % des neurones corticaux) et le GABA (acide gamma-aminobutyrique, principal neurotransmetteur inhibiteur). Les monoamines incluent la dopamine, la noradrenaline, la serotonine et l'histamine. Les neuropeptides (endorphines, substance P, neuropeptide Y) agissent plus lentement mais plus durablement que les neurotransmetteurs classiques.",
                "La liberation des neurotransmetteurs suit un processus precise. L'arrivee d'un potentiel d'action au bouton synaptique ouvre les canaux calciques voltage-dependants. L'influx de calcium declenche la fusion des vesicules synaptiques avec la membrane presynaptique (exocytose), liberant leur contenu dans la fente synaptique. Ce processus, appele couplage excitation-secretion, a ete elucide par Bernard Katz (prix Nobel 1970). Les proteines SNARE (synaptotagmine, syntaxine, SNAP-25), identifiees par Thomas Sudhof et James Rothman (prix Nobel 2013), mediaient la fusion vesiculaire."
              ],
              highlight: "Le glutamate et le GABA representent a eux seuls plus de 90 % de la neurotransmission dans le cerveau : le glutamate excite les neurones tandis que le GABA les inhibe, et leur equilibre est essentiel au fonctionnement normal du systeme nerveux."
            },
            {
              title: "Recepteurs et signalisation postsynaptique",
              paragraphs: [
                "Les neurotransmetteurs agissent en se liant a deux grandes classes de recepteurs. Les recepteurs ionotropes (canaux ioniques ligand-dependants) produisent des effets rapides (millisecondes) : les recepteurs AMPA et NMDA du glutamate, les recepteurs GABA-A, les recepteurs nicotiniques de l'acetylcholine. Les recepteurs metabotropes (couples aux proteines G) produisent des effets plus lents (secondes a minutes) mais plus durables, activant des cascades de signalisation intracellulaire impliquant l'AMPc, l'IP3, les kinases et les phosphatases.",
                "La diversite des recepteurs explique la complexite des effets d'un meme neurotransmetteur. La serotonine, par exemple, agit sur au moins 14 sous-types de recepteurs differents (5-HT1 a 5-HT7), certains excitateurs (5-HT3, ionotrope) et d'autres inhibiteurs (5-HT1A, metabotrope). Cette diversite permet a un seul neurotransmetteur de produire des effets opposes dans differentes regions du cerveau, expliquant la complexite des effets des medicaments psychotropes."
              ]
            },
            {
              title: "Inactivation et recapture",
              paragraphs: [
                "Pour que la transmission synaptique soit precise, le neurotransmetteur doit etre rapidement elimine de la fente synaptique. Trois mecanismes assurent cette inactivation. La recapture par des transporteurs presynaptiques (DAT pour la dopamine, SERT pour la serotonine, NET pour la noradrenaline) est le mecanisme predominant pour les monoamines — c'est la cible des antidepresseurs ISRS (inhibiteurs selectifs de la recapture de la serotonine) comme la fluoxetine (Prozac).",
                "La degradation enzymatique est un deuxieme mecanisme : la monoamine oxydase (MAO) degrade les monoamines (cible des antidepresseurs IMAO), l'acetylcholinesterase detruit l'acetylcholine dans la fente synaptique (sa decouverte par David Nachmansohn et son inhibition par les gaz neurotoxiques organophosphores illustrent les liens entre neurochimie fondamentale et applications militaires). Le troisieme mecanisme est la diffusion simple hors de la fente synaptique, particulierement importante pour le glutamate dont la recapture par les astrocytes est essentielle pour prevenir l'excitotoxicite."
              ]
            }
          ],
          quiz: [
            { q: "Quel est le principal neurotransmetteur excitateur du cerveau ?", opts: ['La dopamine', 'La serotonine', 'Le glutamate', "L'acetylcholine"], correct: 2, explanation: "Le glutamate est le principal neurotransmetteur excitateur du cerveau, utilise par environ 80 % des neurones corticaux. Il agit sur les recepteurs AMPA, NMDA et metabotropes." },
            { q: "Comment Otto Loewi a-t-il prouve la transmission chimique en 1921 ?", opts: ["Par imagerie cerebrale", "En transferant le liquide d'un coeur stimule a un autre coeur", "Par stimulation electrique du cortex", "Par analyse chimique du sang"], correct: 1, explanation: "Loewi a recueilli le liquide baignant un coeur de grenouille dont le nerf vague etait stimule (le ralentissant), puis l'a applique a un second coeur qui a egalement ralenti, prouvant qu'une substance chimique (l'acetylcholine) mediait l'effet." },
            { q: "Combien de sous-types de recepteurs de la serotonine existent-ils ?", opts: ['3', '7', 'Au moins 14', '25'], correct: 2, explanation: "La serotonine agit sur au moins 14 sous-types de recepteurs differents (5-HT1 a 5-HT7, avec des sous-types), certains excitateurs et d'autres inhibiteurs, expliquant la complexite de ses effets." },
            { q: "Qu'est-ce que la recapture d'un neurotransmetteur ?", opts: ["Sa destruction dans la fente synaptique", "Sa reabsorption par le neurone presynaptique via des transporteurs", "Sa diffusion dans le sang", "Son stockage dans les astrocytes"], correct: 1, explanation: "La recapture est la reabsorption du neurotransmetteur par le neurone presynaptique via des transporteurs specifiques (DAT, SERT, NET). C'est le mecanisme cible des antidepresseurs ISRS." },
            { q: "Qui a recu le prix Nobel pour ses travaux sur la liberation des neurotransmetteurs ?", opts: ['Otto Loewi', 'Bernard Katz', 'Paul Greengard', 'Eric Kandel'], correct: 1, explanation: "Bernard Katz a recu le prix Nobel en 1970 pour ses travaux sur le mecanisme quantique de liberation des neurotransmetteurs et le couplage excitation-secretion au niveau des terminaisons synaptiques." }
          ],
          definitions: [
            { term: 'Neurotransmetteur', def: "Molecule chimique synthetisee par un neurone, liberee dans la fente synaptique lors d'un potentiel d'action, qui se lie a des recepteurs postsynaptiques pour transmettre ou moduler un signal nerveux." },
            { term: 'Recepteur ionotrope', def: "Canal ionique ligand-dependant qui s'ouvre directement lors de la liaison d'un neurotransmetteur, produisant un changement rapide du potentiel de membrane (millisecondes)." },
            { term: 'Excitotoxicite', def: "Processus pathologique ou une liberation excessive de glutamate suractive les recepteurs NMDA, causant un influx massif de calcium qui detruit les neurones, implique dans les AVC et les maladies neurodegeneratives." }
          ],
          memos: [
            { front: "L'experience de Loewi : la « Vagusstoff »", back: "En 1921, Otto Loewi a reve de l'experience qui prouverait la transmission chimique. Il a montre que le liquide d'un coeur de grenouille stimule par le nerf vague contenait une substance (« Vagusstoff », identifiee plus tard comme l'acetylcholine) capable de ralentir un second coeur." },
            { front: "Le Prozac et la recapture de serotonine", back: "La fluoxetine (Prozac), commercialisee en 1987, est le premier ISRS (inhibiteur selectif de la recapture de la serotonine). En bloquant le transporteur SERT, elle augmente la concentration de serotonine dans la fente synaptique, ameliorant l'humeur chez les patients depressifs." },
            { front: "Equilibre glutamate/GABA", back: "Le cerveau maintient un equilibre precis entre excitation (glutamate) et inhibition (GABA). Un desequilibre vers l'excitation cause des crises epileptiques ; un exces d'inhibition peut induire la sedation ou le coma. Les benzodiazepines renforcent l'action du GABA." }
          ]
        },
        {
          slug: 'dopamine',
          title: 'La dopamine',
          description: "Le neurotransmetteur du plaisir, de la motivation et du mouvement.",
          intro: "La dopamine est l'un des neurotransmetteurs les plus etudies du cerveau, impliquee dans la motivation, le plaisir, l'apprentissage, le mouvement et la cognition. Decouverte comme neurotransmetteur cerebral par Arvid Carlsson en 1957 (prix Nobel 2000), elle est au coeur de pathologies majeures comme la maladie de Parkinson, la schizophrenie et les addictions.",
          introHighlight: "La dopamine n'est pas le « neurotransmetteur du plaisir » comme on le croit souvent, mais plutot celui de la motivation et de l'anticipation : elle code la difference entre ce qu'on attend et ce qu'on obtient.",
          sections: [
            {
              title: "Les voies dopaminergiques du cerveau",
              paragraphs: [
                "Le cerveau contient environ 400 000 a 600 000 neurones dopaminergiques, concentres dans deux noyaux du mesencephale. La substance noire pars compacta (SNc) projette vers le striatum dorsal (putamen, noyau caude) via la voie nigrostriee, essentielle au controle du mouvement — sa degenerescence cause la maladie de Parkinson. L'aire tegmentale ventrale (ATV) projette vers le noyau accumbens via la voie mesolimbique (motivation, recompense, addiction) et vers le cortex prefrontal via la voie mesocorticale (cognition, planification).",
                "La voie tubero-infundibulaire, de l'hypothalamus a l'hypophyse, controle la secretion de prolactine. Les antipsychotiques classiques (haloperidol), qui bloquent les recepteurs D2, peuvent provoquer une hyperprolactinemie en bloquant cette voie. Les recepteurs dopaminergiques se repartissent en deux familles : D1-like (D1, D5), excitateurs et couples a la proteine Gs, et D2-like (D2, D3, D4), inhibiteurs et couples a la proteine Gi. Leur distribution differentielle dans le cerveau explique la diversite des effets de la dopamine."
              ],
              highlight: "La maladie de Parkinson resulte de la degenerescence de 60 a 80 % des neurones dopaminergiques de la substance noire avant l'apparition des premiers symptomes moteurs, soulignant la capacite de compensation remarquable du cerveau."
            },
            {
              title: "Dopamine, recompense et addiction",
              paragraphs: [
                "La dopamine joue un role central dans le circuit de la recompense. Les travaux de James Olds et Peter Milner en 1954 ont montre que des rats pouvaient s'autostimuler le cerveau de maniere compulsive via une electrode implantee dans le faisceau median du telencephale, une voie dopaminergique. Les drogues addictives augmentent toutes la dopamine dans le noyau accumbens : la cocaine bloque le transporteur de la dopamine (DAT), les amphetamines inversent le fonctionnement du DAT, les opiaces desinhibent les neurones de l'ATV.",
                "George Koob et Nora Volkow ont propose un modele neurobiologique de l'addiction en trois phases. L'intoxication active le circuit de la recompense (noyau accumbens). Le sevrage recrute les systemes anti-recompense (amygdale etendue, CRF). La preoccupation/anticipation implique le cortex prefrontal dysfonctionnel et le circuit de la saillance. La tolerance et la sensibilisation, deux phenomenes opposes de neuroplasticite, modifient progressivement les circuits dopaminergiques, rendant le retour a la normale extremement difficile."
              ]
            },
            {
              title: "Dopamine et pathologies psychiatriques",
              paragraphs: [
                "L'hypothese dopaminergique de la schizophrenie, proposee par Jacques van Rossum en 1966 et reformulee par Oliver Howes et Shitij Kapur en 2009, postule un exces de dopamine sous-corticale (voie mesolimbique, causant les symptomes positifs : hallucinations, delires) et un deficit de dopamine corticale (voie mesocorticale, causant les symptomes negatifs : apathie, retrait social et deficits cognitifs). Les antipsychotiques atypiques (clozapine, risperidone) ciblent les recepteurs D2 et 5-HT2A pour equilibrer ces effets.",
                "Le trouble du deficit de l'attention avec hyperactivite (TDAH) implique un dysfonctionnement dopaminergique dans le cortex prefrontal. Le methylphenidate (Ritaline), traitement de reference, bloque le transporteur de la dopamine dans le cortex prefrontal, augmentant les niveaux de dopamine et ameliorant l'attention et le controle executif. Paradoxalement, ce stimulant « calme » les patients TDAH car il renforce la fonction prefrontale deficiente qui normalement inhibe les comportements impulsifs."
              ]
            }
          ],
          quiz: [
            { q: "Qui a decouvert la dopamine comme neurotransmetteur cerebral ?", opts: ['Otto Loewi', 'Arvid Carlsson', 'Paul Greengard', 'Bernard Katz'], correct: 1, explanation: "Arvid Carlsson a decouvert en 1957 que la dopamine est un neurotransmetteur cerebral a part entiere et non un simple precurseur de la noradrenaline. Il a recu le prix Nobel de physiologie ou medecine en 2000." },
            { q: "Quelle voie dopaminergique degenere dans la maladie de Parkinson ?", opts: ['La voie mesolimbique', 'La voie mesocorticale', 'La voie nigrostriee', 'La voie tubero-infundibulaire'], correct: 2, explanation: "La maladie de Parkinson resulte de la degenerescence des neurones dopaminergiques de la voie nigrostriee, reliant la substance noire pars compacta au striatum dorsal, essentielle au controle des mouvements." },
            { q: "Comment la cocaine augmente-t-elle la dopamine ?", opts: ['En stimulant la production de dopamine', 'En bloquant le transporteur de recapture (DAT)', 'En activant directement les recepteurs D2', 'En inhibant la MAO'], correct: 1, explanation: "La cocaine bloque le transporteur de la dopamine (DAT), empechant la recapture de la dopamine liberee dans la fente synaptique, ce qui augmente massivement sa concentration et produit l'euphorie." },
            { q: "Combien de neurones dopaminergiques le cerveau contient-il approximativement ?", opts: ['10 000', '100 000', '400 000 a 600 000', '5 millions'], correct: 2, explanation: "Le cerveau humain contient environ 400 000 a 600 000 neurones dopaminergiques, un nombre remarquablement petit au regard de leur influence massive sur le comportement, la motivation et le mouvement." },
            { q: "Pourquoi le methylphenidate « calme-t-il » les patients TDAH ?", opts: ["Il n'est pas stimulant en realite", "Il renforce la fonction prefrontale qui inhibe l'impulsivite", "Il provoque la somnolence", "Il reduit la production de dopamine"], correct: 1, explanation: "Le methylphenidate augmente la dopamine dans le cortex prefrontal, renforçant les fonctions executives (attention, inhibition) deficientes dans le TDAH, ce qui reduit paradoxalement l'impulsivite et l'hyperactivite." }
          ],
          definitions: [
            { term: 'Voie nigrostriee', def: "Voie dopaminergique reliant la substance noire pars compacta au striatum dorsal, essentielle au controle moteur, dont la degenerescence cause la maladie de Parkinson." },
            { term: 'Noyau accumbens', def: "Structure du striatum ventral, composante cle du circuit de la recompense, recevant des projections dopaminergiques de l'aire tegmentale ventrale et impliquee dans la motivation et l'addiction." },
            { term: 'Erreur de prediction de recompense', def: "Signal dopaminergique codant la difference entre la recompense recue et la recompense attendue, servant de signal d'apprentissage pour ajuster le comportement futur." }
          ],
          memos: [
            { front: "Carlsson et la L-DOPA", back: "Arvid Carlsson a montre en 1957 que l'administration de L-DOPA (precurseur de la dopamine) a des animaux traites a la reserpine (qui epuise la dopamine) restaurait leurs capacites motrices. Cette decouverte a conduit au traitement de la maladie de Parkinson par la L-DOPA." },
            { front: "L'autostimulation de Olds et Milner", back: "En 1954, Olds et Milner ont montre que des rats appuyaient compulsivement sur un levier (jusqu'a 7 000 fois par heure) pour stimuler electriquement le faisceau median du telencephale, decouvrant le « centre du plaisir » du cerveau, impliquant la dopamine." }
          ]
        },
        {
          slug: 'serotonine',
          title: 'La serotonine',
          description: "Le neurotransmetteur de l'humeur, du sommeil et de la regulation emotionnelle.",
          intro: "La serotonine (5-hydroxytryptamine ou 5-HT) est un neurotransmetteur implique dans la regulation de l'humeur, du sommeil, de l'appetit, de la douleur et de nombreuses fonctions viscerales. Bien que seulement 5 % de la serotonine corporelle se trouve dans le cerveau (95 % est dans l'intestin), les neurones serotoninergiques du raphe exercent une influence modulatrice majeure sur l'ensemble du systeme nerveux central.",
          introHighlight: "95 % de la serotonine du corps est produite dans l'intestin, pas dans le cerveau, illustrant les liens etroits entre systeme digestif et systeme nerveux — l'« axe intestin-cerveau ».",
          sections: [
            {
              title: "Les noyaux du raphe et les voies serotoninergiques",
              paragraphs: [
                "Les neurones serotoninergiques sont concentres dans les noyaux du raphe, un ensemble de noyaux situes le long de la ligne mediane du tronc cerebral. Le raphe dorsal et le raphe median sont les principaux noyaux serotoninergiques, contenant au total environ 300 000 neurones qui projettent vers pratiquement toutes les regions du cerveau. Cette distribution diffuse explique pourquoi la serotonine module des fonctions aussi variees que l'humeur, le sommeil, l'appetit, la nociception et la cognition.",
                "La serotonine est synthetisee a partir du tryptophane, un acide amine essentiel apporte par l'alimentation. La tryptophane hydroxylase (TPH) est l'enzyme limitante de cette synthese, existant sous deux isoformes : TPH1 dans l'intestin et TPH2 dans le cerveau. La decouverte de la serotonine cerebrale par Betty Twarog et Irvine Page en 1953, puis la mise en evidence de son role dans l'humeur par Alec Coppen dans les annees 1960, ont conduit a l'hypothese serotoninergique de la depression."
              ],
              highlight: "Les noyaux du raphe contiennent seulement environ 300 000 neurones serotoninergiques, mais leurs projections atteignent pratiquement toutes les regions du cerveau, faisant de la serotonine l'un des neuromodulateurs les plus influents du systeme nerveux central."
            },
            {
              title: "Serotonine et troubles de l'humeur",
              paragraphs: [
                "L'hypothese serotoninergique de la depression, formulee par Alec Coppen en 1967, propose qu'un deficit de serotonine contribue a la depression. Les inhibiteurs selectifs de la recapture de la serotonine (ISRS), comme la fluoxetine (Prozac, lance en 1987), la sertraline (Zoloft) et l'escitalopram (Lexapro), augmentent la serotonine synaptique en bloquant le transporteur SERT. Cependant, le delai d'action des ISRS (2 a 4 semaines) malgre l'augmentation immediate de serotonine suggere que des mecanismes adaptatifs plus complexes sont en jeu.",
                "Des recherches recentes ont remis en question l'hypothese serotoninergique simple. Une meta-analyse d'Ioanna Moncrieff et al. (2022) a souligne le manque de preuves directes d'un deficit serotoninergique dans la depression. Les effets antidepresseurs pourraient impliquer la neuroplasticite : les ISRS augmentent le BDNF (brain-derived neurotrophic factor) et stimulent la neurogenese hippocampique, des processus qui necessitent des semaines pour se manifester, expliquant le delai therapeutique."
              ]
            },
            {
              title: "Serotonine, sommeil et substances psychedeliques",
              paragraphs: [
                "La serotonine joue un role complexe dans la regulation du cycle veille-sommeil. Les neurones serotoninergiques du raphe sont les plus actifs pendant l'eveil, diminuent leur activite pendant le sommeil lent et sont quasiment silencieux pendant le sommeil paradoxal (REM). La serotonine est le precurseur de la melatonine, synthetisee dans la glande pineale la nuit, et qui regule les rythmes circadiens. Cette relation explique pourquoi certains ISRS perturbent le sommeil.",
                "Les substances psychedeliques classiques (LSD, psilocybine, DMT) agissent principalement comme agonistes des recepteurs 5-HT2A dans le cortex. Albert Hofmann a synthetise le LSD en 1938 et decouvert ses effets psychedeliques en 1943. Les recherches recentes de Robin Carhart-Harris a l'Imperial College London ont montre que la psilocybine produit des effets antidepresseurs rapides et durables, possiblement en augmentant la connectivite cerebrale et la plasticite neuronale. Le modele du « cerveau anarchique » (REBUS) de Carhart-Harris propose que les psychedeliques relaxent les modeles predictifs rigides du cerveau, permettant une reorganisation therapeutique."
              ]
            }
          ],
          quiz: [
            { q: "Quel pourcentage de la serotonine corporelle se trouve dans le cerveau ?", opts: ['50 %', '25 %', '5 %', '95 %'], correct: 2, explanation: "Seulement environ 5 % de la serotonine du corps se trouve dans le cerveau. Les 95 % restants sont produits et utilises dans l'intestin, ou elle regule la motilite digestive et participe a l'axe intestin-cerveau." },
            { q: "Qu'est-ce qu'un ISRS ?", opts: ["Un type de neurotransmetteur", "Un inhibiteur selectif de la recapture de la serotonine", "Un instrument d'imagerie cerebrale", "Un recepteur de la serotonine"], correct: 1, explanation: "Un ISRS (inhibiteur selectif de la recapture de la serotonine) est un antidepresseur qui bloque le transporteur SERT, empechant la recapture de la serotonine et augmentant sa concentration dans la fente synaptique." },
            { q: "Sur quel recepteur agissent principalement les psychedeliques classiques ?", opts: ['D2', '5-HT2A', 'NMDA', 'GABA-A'], correct: 1, explanation: "Les psychedeliques classiques (LSD, psilocybine, DMT) agissent principalement comme agonistes des recepteurs serotoninergiques 5-HT2A dans le cortex, produisant des alterations de la perception et de la conscience." },
            { q: "Quel est le delai d'action typique des ISRS ?", opts: ['Quelques heures', '2 a 4 semaines', '3 mois', '6 mois'], correct: 1, explanation: "Les ISRS mettent typiquement 2 a 4 semaines a produire leurs effets antidepresseurs complets, malgre l'augmentation immediate de la serotonine synaptique, suggerant des mecanismes adaptatifs lents." },
            { q: "De quel acide amine la serotonine est-elle synthetisee ?", opts: ['La tyrosine', 'La glycine', 'Le tryptophane', 'La glutamine'], correct: 2, explanation: "La serotonine est synthetisee a partir du tryptophane, un acide amine essentiel apporte par l'alimentation. La tryptophane hydroxylase (TPH) est l'enzyme limitante de cette voie biosynthetique." }
          ],
          definitions: [
            { term: 'Noyaux du raphe', def: "Ensemble de noyaux situes le long de la ligne mediane du tronc cerebral, contenant la majorite des neurones serotoninergiques du cerveau, projetant vers pratiquement toutes les regions cerebrales." },
            { term: 'ISRS', def: "Inhibiteurs selectifs de la recapture de la serotonine : classe d'antidepresseurs bloquant le transporteur SERT pour augmenter la serotonine synaptique (fluoxetine, sertraline, escitalopram)." },
            { term: 'Melatonine', def: "Hormone derivee de la serotonine, synthetisee par la glande pineale principalement la nuit, regulant les rythmes circadiens et favorisant le sommeil." }
          ],
          memos: [
            { front: "Albert Hofmann et le LSD", back: "Albert Hofmann a synthetise le LSD (acide lysergique diethylamide) en 1938 aux laboratoires Sandoz, mais n'a decouvert ses effets psychedeliques que le 19 avril 1943, lors d'une ingestion accidentelle. Ce jour est connu sous le nom de « Bicycle Day » car il rentra chez lui a velo sous l'effet du LSD." },
            { front: "Serotonine et intestin", back: "L'intestin contient 95 % de la serotonine du corps, produite par les cellules enterochromaffines. Cette serotonine intestinale regule la motilite digestive et communique avec le cerveau via le nerf vague, constituant un axe intestin-cerveau bidirectionnel." }
          ]
        },
        {
          slug: 'synapses',
          title: 'Les synapses',
          description: "Structure, fonctionnement et plasticite des points de communication entre neurones.",
          intro: "La synapse est le point de contact fonctionnel entre deux neurones, ou l'information est transmise d'une cellule a l'autre. Le cerveau humain contient environ 150 000 milliards de synapses, chacune pouvant etre renforcee ou affaiblie par l'experience. Charles Sherrington a invente le terme « synapse » en 1897 et Santiago Ramon y Cajal a demontre que les neurones sont des entites separees communiquant par ces contacts specialises.",
          introHighlight: "Le cerveau humain contient environ 150 000 milliards (1,5 x 10^14) de synapses, et la force de chacune peut etre modulee par l'experience, faisant de la synapse l'unite elementaire de l'apprentissage et de la memoire.",
          sections: [
            {
              title: "Structure de la synapse chimique",
              paragraphs: [
                "La synapse chimique comprend trois elements : le bouton presynaptique, la fente synaptique (20 a 40 nanometres) et la membrane postsynaptique. Le bouton presynaptique contient les vesicules synaptiques (40 a 50 nm de diametre), chacune renfermant environ 5 000 molecules de neurotransmetteur, les mitochondries fournissant l'energie, et la zone active — une region specialisee de la membrane ou s'ancrent les vesicules pour l'exocytose. La densite postsynaptique (PSD), une structure proteique complexe d'environ 300 a 400 proteines differentes, organise les recepteurs et la machinerie de signalisation.",
                "Les synapses electriques, ou jonctions communicantes (gap junctions), permettent un passage direct du courant entre cellules via des canaux formes par les connexines. Plus rapides que les synapses chimiques (pas de delai synaptique), elles sont essentielles pour la synchronisation neuronale, notamment dans le cortex, l'hippocampe et le tronc cerebral. Elles ont ete decrites par Michael Bennett et ses collaborateurs dans les annees 1960 et coexistent souvent avec les synapses chimiques sur les memes neurones."
              ],
              highlight: "La densite postsynaptique (PSD) est une structure proteique de 300 a 400 proteines differentes situee sous la membrane postsynaptique, organisant les recepteurs et la signalisation. Sa composition varie entre synapses excitatrices (recepteurs glutamatergiques) et inhibitrices (recepteurs GABAergiques)."
            },
            {
              title: "La transmission synaptique quantique",
              paragraphs: [
                "Bernard Katz a demontre dans les annees 1950 que les neurotransmetteurs sont liberes en paquets discrets appeles quanta, correspondant chacun au contenu d'une vesicule synaptique. A la jonction neuromusculaire, chaque quantum contient environ 5 000 molecules d'acetylcholine et produit un potentiel miniature (mEPP) d'environ 0,5 mV. Un potentiel d'action provoque la liberation de 100 a 300 quanta, suffisants pour declencher la contraction musculaire. Pour cette decouverte, Katz a partage le prix Nobel 1970 avec Ulf von Euler et Julius Axelrod.",
                "La probabilite de liberation (Pr) d'une vesicule varie entre synapses et est un parametre cle de la plasticite synaptique a court terme. Les synapses a haute Pr montrent une depression a court terme (epuisement des vesicules pretes) tandis que les synapses a basse Pr montrent une facilitation a court terme (accumulation de calcium). Thomas Sudhof a elucide la machinerie moleculaire de l'exocytose vesiculaire (complexe SNARE, synaptotagmine comme capteur de calcium), recevant le prix Nobel 2013 avec James Rothman et Randy Schekman."
              ]
            },
            {
              title: "Synaptogenese et elagage synaptique",
              paragraphs: [
                "La synaptogenese — la formation de nouvelles synapses — est un processus majeur du developpement cerebral. Le cerveau humain produit environ 1,8 million de nouvelles synapses par seconde entre la naissance et l'age de 2 ans, atteignant un pic d'environ 1 000 000 milliards de synapses. Ce nombre decline ensuite par elagage synaptique (pruning), un processus ou les synapses peu utilisees sont eliminees tandis que les synapses actives sont renforcees, suivant le principe « use it or lose it ».",
                "L'elagage synaptique se poursuit jusqu'a l'age adulte, le cortex prefrontal n'atteignant sa maturite synaptique qu'autour de 25 ans. Peter Bhatt et Beth Stevens ont decouvert que le systeme du complement immunitaire (proteines C1q, C3) marque les synapses inactives pour l'elimination par les cellules microgliales, les macrophages du cerveau. Un elagage excessif est suspecte dans la schizophrenie (hypothese de la surpiqure synaptique), tandis qu'un elagage insuffisant pourrait contribuer aux troubles du spectre autistique."
              ]
            }
          ],
          quiz: [
            { q: "Quelle est la largeur approximative de la fente synaptique ?", opts: ['1 a 5 nm', '20 a 40 nm', '100 a 200 nm', '1 micrometre'], correct: 1, explanation: "La fente synaptique mesure environ 20 a 40 nanometres de largeur. C'est dans cet espace que les neurotransmetteurs sont liberes et diffusent jusqu'aux recepteurs postsynaptiques." },
            { q: "Qui a invente le terme « synapse » ?", opts: ['Santiago Ramon y Cajal', 'Charles Sherrington', 'Camillo Golgi', 'Otto Loewi'], correct: 1, explanation: "Charles Sherrington a invente le terme « synapse » en 1897 (du grec synapsis, « jonction ») pour designer le point de contact fonctionnel entre deux neurones." },
            { q: "Qu'est-ce qu'un quantum de neurotransmetteur ?", opts: ["Une unite de mesure electrique", "Le contenu d'une seule vesicule synaptique", "Un type de recepteur", "Un neuropeptide"], correct: 1, explanation: "Un quantum est la quantite de neurotransmetteur contenue dans une seule vesicule synaptique (environ 5 000 molecules a la jonction neuromusculaire). Ce concept, decouvert par Katz, est au coeur de la theorie quantique de la liberation synaptique." },
            { q: "Combien de synapses par seconde le cerveau produit-il entre la naissance et 2 ans ?", opts: ['100 000', '500 000', '1,8 million', '10 millions'], correct: 2, explanation: "Le cerveau humain produit environ 1,8 million de nouvelles synapses par seconde entre la naissance et l'age de 2 ans, atteignant un pic synaptique bien superieur au nombre de synapses de l'adulte." },
            { q: "Quel role jouent les cellules microgliales dans l'elagage synaptique ?", opts: ["Elles creent de nouvelles synapses", "Elles eliminent les synapses marquees par le systeme du complement", "Elles produisent les neurotransmetteurs", "Elles forment la myeline"], correct: 1, explanation: "Les cellules microgliales, macrophages du cerveau, phagocytent (englobent et digèrent) les synapses marquees par les proteines du complement immunitaire (C1q, C3), contribuant a l'elagage synaptique necessaire au developpement normal." }
          ],
          definitions: [
            { term: 'Fente synaptique', def: "Espace de 20 a 40 nanometres separant la membrane presynaptique de la membrane postsynaptique, dans lequel les neurotransmetteurs sont liberes et diffusent vers les recepteurs." },
            { term: 'Densite postsynaptique', def: "Structure proteique complexe (300-400 proteines) situee sous la membrane postsynaptique, organisant les recepteurs, les enzymes de signalisation et les proteines d'echafaudage." },
            { term: 'Elagage synaptique', def: "Processus developpementale d'elimination des synapses peu utilisees, medié par les cellules microgliales et le systeme du complement, suivant le principe « use it or lose it »." }
          ],
          memos: [
            { front: "Le debat neurone vs reseau", back: "A la fin du XIXe siecle, Cajal defendait la « doctrine du neurone » (neurones individuels) contre Golgi qui soutenait la « theorie reticulaire » (reseau continu). Cajal avait raison : les neurones sont des cellules separees communiquant par des synapses. Ironiquement, les deux ont partage le prix Nobel 1906." },
            { front: "Le pic synaptique du nourrisson", back: "Le cerveau du nourrisson produit des synapses a un rythme effréne (1,8 million/s), atteignant un pic vers 2-3 ans avec environ 1 quadrillion de synapses — bien plus que l'adulte. L'elagage subsequent est essentiel au raffinement des circuits neuronaux." },
            { front: "SNARE et prix Nobel 2013", back: "Le complexe SNARE (synaptotagmine, syntaxine, SNAP-25) est la machinerie moleculaire de la fusion vesiculaire. Sa decouverte par Thomas Sudhof, James Rothman et Randy Schekman a valu le prix Nobel de physiologie ou medecine 2013." }
          ]
        },
        {
          slug: 'pharmacologie',
          title: 'La neuropharmacologie',
          description: "Comment les medicaments et les substances modifient la chimie du cerveau.",
          intro: "La neuropharmacologie etudie comment les substances chimiques — medicaments, drogues, toxines — modifient le fonctionnement du systeme nerveux en agissant sur les neurotransmetteurs, les recepteurs et les voies de signalisation. De l'aspirine aux antidepresseurs, de la cafeine aux anesthesiques, la neuropharmacologie est au coeur de la medecine moderne et de la comprehension des addictions.",
          introHighlight: "Chaque substance psychoactive agit sur une cible moleculaire precise dans le cerveau : un recepteur, un transporteur, une enzyme ou un canal ionique — comprendre ces cibles est la cle du developpement de medicaments plus efficaces et moins toxiques.",
          sections: [
            {
              title: "Agonistes, antagonistes et modulation allosterique",
              paragraphs: [
                "Les substances agissant sur le systeme nerveux se classent selon leur interaction avec les recepteurs. Un agoniste se lie au recepteur et l'active (la morphine est un agoniste des recepteurs mu-opioides). Un antagoniste se lie au recepteur sans l'activer et bloque l'action de l'agoniste endogene (la naloxone, antagoniste opioide, est l'antidote des surdoses d'heroïne). Les agonistes partiels (buprenorphine) activent partiellement le recepteur, produisant un effet plafond qui limite le risque de surdose.",
                "Les modulateurs allosteriques se lient a un site different du site de liaison du neurotransmetteur et modifient l'efficacite de celui-ci. Les benzodiazepines (diazepam, Valium) sont des modulateurs allosteriques positifs du recepteur GABA-A : elles ne peuvent pas activer le recepteur seules mais potentialisent l'effet du GABA endogene, augmentant la frequence d'ouverture du canal chlorure. Ce mecanisme explique leur profil de securite superieur aux barbituriques, qui activent directement le canal et peuvent causer une surdose mortelle."
              ],
              highlight: "Les benzodiazepines sont des modulateurs allosteriques positifs du GABA : elles potentialisent l'effet inhibiteur du GABA endogene sans pouvoir activer le recepteur seules, ce qui les rend plus sures que les barbituriques en cas de surdose."
            },
            {
              title: "Les grandes classes de psychotropes",
              paragraphs: [
                "Les antidepresseurs agissent sur les systemes monoaminergiques. Les ISRS (fluoxetine, sertraline) bloquent la recapture de la serotonine. Les IRSN (venlafaxine, duloxetine) bloquent la recapture de la serotonine et de la noradrenaline. Les IMAO (phenelzine, tranylcypromine) inhibent la monoamine oxydase qui degrade les monoamines. La ketamine, un antagoniste des recepteurs NMDA, a revolutionne le traitement de la depression resistante en produisant des effets antidepresseurs rapides (heures) via l'activation de la voie mTOR et la synaptogenese.",
                "Les antipsychotiques se divisent en typiques (haloperidol, chlorpromazine) bloquant principalement les recepteurs D2, et atypiques (clozapine, olanzapine, risperidone) bloquant egalement les recepteurs 5-HT2A. La chlorpromazine, synthetisee par Paul Charpentier et testee par Henri Laborit et Jean Delay dans les annees 1950, a ete le premier antipsychotique, transformant radicalement le traitement de la schizophrenie et vidant les asiles psychiatriques. Les anxiolytiques (benzodiazepines) et les hypnotiques (zolpidem) agissent sur le systeme GABAergique."
              ]
            },
            {
              title: "Pharmacogenetique et medecine personnalisee",
              paragraphs: [
                "La pharmacogenetique etudie comment les variations genetiques influencent la reponse aux medicaments. Les enzymes du cytochrome P450 (CYP2D6, CYP3A4, CYP2C19) metabolisent la majorite des psychotropes dans le foie. Environ 7 % de la population caucasienne est « metaboliseur lent » du CYP2D6, necessitant des doses reduites de codeine, de tramadol ou de certains antidepresseurs pour eviter les effets secondaires, tandis que les « metaboliseurs ultrarapides » peuvent necessiter des doses plus elevees.",
                "Le polymorphisme du gene du transporteur de la serotonine (5-HTTLPR) a ete associe a des differences de reponse aux ISRS, bien que les resultats soient controverses. L'avenir de la neuropharmacologie tend vers la medecine personnalisee : le genotypage des patients avant la prescription permettra de choisir le medicament et la dose optimaux. Les therapies geniques ciblant les canaux ioniques (optogenetique chimique, DREADDs) et les anticorps monoclonaux anti-CGRP pour la migraine representent de nouvelles approches pharmacologiques de precision."
              ]
            }
          ],
          quiz: [
            { q: "Quelle est la difference entre un agoniste et un antagoniste ?", opts: ["L'agoniste bloque le recepteur, l'antagoniste l'active", "L'agoniste active le recepteur, l'antagoniste le bloque", "Les deux activent le recepteur differemment", "Les deux sont des neurotransmetteurs naturels"], correct: 1, explanation: "Un agoniste se lie au recepteur et l'active (produit un effet), tandis qu'un antagoniste se lie au recepteur sans l'activer et empeche l'agoniste endogene d'agir (bloque l'effet)." },
            { q: "Comment les benzodiazepines agissent-elles ?", opts: ["En bloquant les recepteurs de la serotonine", "En potentialisant l'effet du GABA sur le recepteur GABA-A", "En bloquant les recepteurs de la dopamine", "En inhibant la recapture de la noradrenaline"], correct: 1, explanation: "Les benzodiazepines sont des modulateurs allosteriques positifs du recepteur GABA-A : elles potentialisent l'effet inhibiteur du GABA endogene en augmentant la frequence d'ouverture du canal chlorure." },
            { q: "Quel medicament a revolutionne le traitement de la depression resistante ?", opts: ['La fluoxetine', 'La chlorpromazine', 'La ketamine', 'Le lithium'], correct: 2, explanation: "La ketamine, un antagoniste des recepteurs NMDA, produit des effets antidepresseurs rapides (en quelques heures) chez des patients resistants aux traitements classiques, via l'activation de la voie mTOR et la synaptogenese." },
            { q: "Quel a ete le premier antipsychotique ?", opts: ['La clozapine', "L'haloperidol", 'La chlorpromazine', 'La risperidone'], correct: 2, explanation: "La chlorpromazine, testee par Laborit, Delay et Deniker dans les annees 1950, a ete le premier antipsychotique. Elle a transforme le traitement de la schizophrenie et contribue a la deinstitutionnalisation des patients psychiatriques." },
            { q: "Qu'etudie la pharmacogenetique ?", opts: ["La genetique des plantes medicinales", "L'influence des variations genetiques sur la reponse aux medicaments", "La fabrication genetique de medicaments", "Les effets des medicaments sur l'ADN"], correct: 1, explanation: "La pharmacogenetique etudie comment les variations genetiques individuelles (polymorphismes des enzymes metaboliques, des recepteurs, des transporteurs) influencent l'efficacite et la tolerance des medicaments." }
          ],
          definitions: [
            { term: 'Agoniste', def: "Substance qui se lie a un recepteur et l'active, mimant l'action du ligand endogene naturel (ex. : la morphine est un agoniste des recepteurs mu-opioides)." },
            { term: 'Modulateur allosterique', def: "Substance qui se lie a un site different du site actif d'un recepteur et modifie sa reponse au ligand endogene, positivement (potentialisation) ou negativement (inhibition)." },
            { term: 'Pharmacogenetique', def: "Discipline etudiant l'influence des variations genetiques individuelles sur la reponse aux medicaments, visant a personnaliser les traitements pharmacologiques." }
          ],
          memos: [
            { front: "La chlorpromazine et la revolution psychiatrique", back: "La chlorpromazine, premier antipsychotique, a ete testee par Henri Laborit (chirurgien), Jean Delay et Pierre Deniker (psychiatres) a Sainte-Anne (Paris) en 1952. Elle a permis de calmer les symptomes psychotiques et a initie la revolution pharmacologique en psychiatrie." },
            { front: "Ketamine : de l'anesthesique a l'antidepresseur", back: "La ketamine, utilisee comme anesthesique depuis 1970, a ete identifiee comme antidepresseur rapide par Carlos Zarate au NIH en 2006. L'esketamine (Spravato) a ete approuvee par la FDA en 2019 pour la depression resistante." },
            { front: "Le cytochrome P450 et les interactions medicamenteuses", back: "Les enzymes du cytochrome P450 (CYP2D6, CYP3A4) metabolisent la majorite des psychotropes. Le jus de pamplemousse inhibe le CYP3A4, augmentant dangereusement les concentrations de certains medicaments — un exemple classique d'interaction aliment-medicament." }
          ]
        }
      ]
    },

    // ── Hub 5: Neuro-imagerie ──
    {
      slug: 'neuro-imagerie',
      title: 'Neuro-imagerie',
      description: "Les techniques de visualisation du cerveau en action, de l'IRM fonctionnelle a l'optogenetique.",
      introText: "La neuro-imagerie regroupe l'ensemble des techniques permettant de visualiser la structure et l'activite du cerveau vivant. De la radiographie simple aux methodes sophistiquees d'IRMf et de magnetoencephalographie, ces technologies ont revolutionne les neurosciences en permettant d'observer le cerveau en action de maniere non invasive. Elles constituent un pont indispensable entre la recherche fondamentale et la clinique neurologique.",
      introHighlight: "L'IRM fonctionnelle peut localiser l'activite cerebrale avec une precision spatiale de quelques millimetres, tandis que l'EEG capture les variations electriques avec une precision temporelle de l'ordre de la milliseconde.",
      lessons: [
        {
          slug: 'irm-fonctionnelle',
          title: "L'IRM fonctionnelle",
          description: "Principes et applications de l'imagerie par resonance magnetique fonctionnelle.",
          intro: "L'IRM fonctionnelle (IRMf) est la technique de neuro-imagerie la plus utilisee pour etudier l'activite cerebrale humaine. Basee sur la detection des variations de flux sanguin associees a l'activite neuronale (signal BOLD), elle offre une resolution spatiale de quelques millimetres et a transforme notre comprehension du cerveau en action depuis son introduction par Seiji Ogawa et Kenneth Kwong en 1990-1992.",
          introHighlight: "L'IRMf ne mesure pas directement l'activite neuronale mais les variations d'oxygenation du sang (signal BOLD) qui l'accompagnent, avec un delai de 4 a 6 secondes — un compromis entre resolution spatiale excellente et resolution temporelle limitee.",
          sections: [
            {
              title: "Le signal BOLD et ses bases physiologiques",
              paragraphs: [
                "Le signal BOLD (Blood-Oxygen-Level-Dependent), decouvert par Seiji Ogawa en 1990, repose sur les proprietes magnetiques differentes de l'hemoglobine oxygenee (diamagnetique, invisible en IRM) et deoxygenee (paramagnetique, perturbant le signal IRM). Lorsqu'une region cerebrale s'active, la consommation locale d'oxygene augmente, suivie d'un afflux sanguin compense qui apporte plus d'oxygene que necessaire (hyperemie fonctionnelle). Ce surplus d'hemoglobine oxygenee produit une augmentation locale du signal IRM — le signal BOLD positif.",
                "La reponse hemodynamique atteint son pic environ 5 a 6 secondes apres l'activation neuronale et dure 15 a 20 secondes. Ce delai temporel est la principale limitation de l'IRMf : elle ne peut distinguer des evenements neuronaux separes de moins de 2 secondes. Nikos Logothetis a demontre en 2001, grace a des enregistrements simultanes d'activite neuronale et d'IRMf chez le singe, que le signal BOLD correle principalement avec les potentiels de champ locaux (LFP) — l'activite synaptique d'entree d'une region — plutot qu'avec les potentiels d'action de sortie."
              ],
              highlight: "Nikos Logothetis a montre en 2001 que le signal BOLD de l'IRMf reflète principalement l'activite synaptique (potentiels de champ locaux) et non les potentiels d'action, revolutionnant l'interpretation des resultats d'IRMf."
            },
            {
              title: "Designs experimentaux et analyse statistique",
              paragraphs: [
                "Les etudes d'IRMf utilisent deux types de designs principaux. Le design par blocs alterne des periodes d'activite et de repos (typiquement 20-30 secondes chacune), offrant une bonne puissance statistique mais une faible resolution temporelle. Le design evenementiel (event-related), developpe par Randy Buckner et al. dans les annees 1990, presente des stimuli brefs espaces de maniere variable, permettant d'isoler la reponse hemodynamique a des evenements individuels et d'analyser les essais selon les reponses du sujet.",
                "L'analyse statistique des donnees d'IRMf utilise le modele lineaire general (GLM) pour identifier les voxels dont l'activite correle significativement avec le protocole experimental. Le probleme des comparaisons multiples (plus de 100 000 voxels testes) a conduit a des controverses sur les seuils statistiques. L'etude du « saumon mort » de Craig Bennett (2009), montrant ironiquement des activations significatives dans le cerveau d'un saumon mort sans correction appropriee, a mis en lumiere l'importance des corrections pour comparaisons multiples (Bonferroni, FDR, correction par clusters)."
              ]
            },
            {
              title: "L'IRMf de connectivite et les reseaux cerebraux",
              paragraphs: [
                "L'IRMf de repos (resting-state fMRI), introduite par Bharat Biswal en 1995, mesure les correlations spontanees entre regions cerebrales en l'absence de toute tache. Cette technique a revele l'existence de reseaux fonctionnels intrinseques, dont le plus celebre est le reseau du mode par defaut (default mode network, DMN), decouvert par Marcus Raichle en 2001. Le DMN, comprenant le cortex prefrontal median, le cortex cingulaire posterieur et le precuneus, est actif au repos et se desactive pendant les taches cognitives.",
                "L'IRM de diffusion (DTI, diffusion tensor imaging) mesure la direction de diffusion des molecules d'eau pour cartographier les faisceaux de substance blanche in vivo. Le Human Connectome Project, lance en 2009 avec un budget de 40 millions de dollars, a cartographie la connectivite structurelle et fonctionnelle de plus de 1 200 cerveaux sains, constituant un atlas de reference. Les analyses de graphes appliquees a ces donnees revelent que le cerveau est organise en reseau « petit monde » (small-world) avec des hubs hautement connectes."
              ]
            }
          ],
          quiz: [
            { q: "Que mesure le signal BOLD en IRMf ?", opts: ["L'activite electrique des neurones", "Les variations d'oxygenation du sang", "Le flux de neurotransmetteurs", "La structure anatomique du cerveau"], correct: 1, explanation: "Le signal BOLD (Blood-Oxygen-Level-Dependent) mesure les variations d'oxygenation du sang associees a l'activite neuronale, basees sur les proprietes magnetiques differentes de l'hemoglobine oxygenee et deoxygenee." },
            { q: "Quel est le delai typique de la reponse hemodynamique en IRMf ?", opts: ['1 ms', '100 ms', '5 a 6 secondes', '1 minute'], correct: 2, explanation: "La reponse hemodynamique detectee en IRMf atteint son pic environ 5 a 6 secondes apres l'activation neuronale, ce qui constitue la principale limitation temporelle de cette technique." },
            { q: "Qu'est-ce que le reseau du mode par defaut ?", opts: ["Le reseau actif pendant les taches cognitives", "Un reseau actif au repos qui se desactive pendant les taches", "Le reseau visuel primaire", "Un artefact d'imagerie"], correct: 1, explanation: "Le reseau du mode par defaut (DMN), decouvert par Raichle en 2001, est un ensemble de regions cerebrales actives au repos et qui se desactivent pendant les taches cognitives, implique dans la pensee auto-referentielle et la divagation mentale." },
            { q: "Que montrait ironiquement l'etude du « saumon mort » de Bennett (2009) ?", opts: ["Que les poissons ont une conscience", "Le danger de ne pas corriger pour les comparaisons multiples", "Que l'IRMf est une technique inutile", "Que le signal BOLD est un artefact"], correct: 1, explanation: "Craig Bennett a montre qu'un scanner IRMf d'un saumon mort pouvait reveler des « activations significatives » sans correction appropriee pour comparaisons multiples, soulignant l'importance des methodes statistiques rigoureuses." },
            { q: "Qu'est-ce que le Human Connectome Project ?", opts: ["Un projet de simulation du cerveau", "Un atlas de la connectivite cerebrale de plus de 1 200 cerveaux", "Un programme de traitement des maladies mentales", "Un projet de sequencage du genome neuronal"], correct: 1, explanation: "Le Human Connectome Project (lance en 2009, 40 millions de dollars) a cartographie la connectivite structurelle et fonctionnelle de plus de 1 200 cerveaux sains par IRM de diffusion et IRMf, creant un atlas de reference." }
          ],
          definitions: [
            { term: 'Signal BOLD', def: "Blood-Oxygen-Level-Dependent : signal d'IRMf refletant les variations d'oxygenation du sang associees a l'activite neuronale, base sur les proprietes magnetiques differentes de l'hemoglobine oxygenee et deoxygenee." },
            { term: 'Reseau du mode par defaut', def: "Ensemble de regions cerebrales (cortex prefrontal median, cingulaire posterieur, precuneus) actives au repos et se desactivant pendant les taches cognitives, decouvert par Marcus Raichle en 2001." },
            { term: 'IRM de diffusion', def: "Technique d'IRM mesurant la direction de diffusion des molecules d'eau pour cartographier les faisceaux de substance blanche in vivo, permettant de tracer les connexions anatomiques entre regions cerebrales." }
          ],
          memos: [
            { front: "L'etude du saumon mort", back: "En 2009, Craig Bennett a presente un poster montrant des « activations cerebrales » dans un saumon mort de l'Atlantique scanne en IRMf. Cette demonstration humoristique a souligne l'importance cruciale des corrections statistiques pour comparaisons multiples." },
            { front: "Le signal BOLD et Ogawa", back: "Seiji Ogawa, physicien chez Bell Labs, a decouvert en 1990 que les variations d'oxygenation du sang modifient le signal IRM. Kenneth Kwong au MGH a realise les premieres images IRMf humaines en 1992, ouvrant l'ere de la neuroimagerie fonctionnelle." }
          ]
        },
        {
          slug: 'eeg',
          title: "L'electroencephalographie (EEG)",
          description: "Mesure de l'activite electrique cerebrale avec une precision temporelle de la milliseconde.",
          intro: "L'electroencephalographie (EEG) enregistre l'activite electrique du cerveau grace a des electrodes placees sur le scalp. Inventee par Hans Berger en 1924, c'est la plus ancienne technique de neuro-imagerie fonctionnelle, offrant une resolution temporelle inegalee (milliseconde) qui permet de suivre la dynamique rapide des processus cognitifs en temps reel.",
          introHighlight: "L'EEG detecte les oscillations electriques generees par l'activite synchronisee de millions de neurones corticaux, avec une resolution temporelle de l'ordre de la milliseconde — mille fois plus rapide que l'IRMf.",
          sections: [
            {
              title: "Principes et rythmes cerebraux",
              paragraphs: [
                "L'EEG enregistre les potentiels electriques produits par l'activite postsynaptique synchrone de larges populations de neurones pyramidaux du cortex. Hans Berger a enregistre le premier EEG humain en 1924 a Iena (Allemagne) et a identifie le rythme alpha (8-13 Hz), predominant lorsque les yeux sont fermes et le sujet au repos. Les rythmes cerebraux se classent par frequence : delta (0,5-4 Hz, sommeil profond), theta (4-8 Hz, memoire, navigation), alpha (8-13 Hz, repos eveille), beta (13-30 Hz, activite mentale) et gamma (30-100 Hz, attention, conscience).",
                "Chaque rythme est associe a des fonctions cognitives specifiques. Les oscillations theta hippocampiques sont essentielles pour l'encodage de la memoire et la navigation spatiale. Les oscillations gamma, decrites par Wolf Singer dans les annees 1990, sont impliquees dans la liaison perceptive (binding) — le mecanisme par lequel le cerveau combine differentes caracteristiques (forme, couleur, mouvement) en un percept unifie. La synchronisation gamma entre regions distantes pourrait etre un correlat neuronal de la conscience."
              ],
              highlight: "Hans Berger a enregistre le premier EEG humain en 1924 sur son fils Klaus, identifiant le rythme alpha (8-13 Hz). Il garda ses resultats secrets pendant cinq ans, doutant de leur validite, avant de les publier en 1929."
            },
            {
              title: "Les potentiels evoques (PE)",
              paragraphs: [
                "Les potentiels evoques sont des reponses electriques du cerveau declenchees par un stimulus ou un evenement cognitif specifique, extraites du bruit EEG par moyennage de nombreux essais. La P300 (ou P3), un potentiel positif survenant 300 ms apres un stimulus rare et pertinent, decouverte par Samuel Sutton en 1965, est l'un des composants les plus etudies. Son amplitude reflete l'allocation d'attention et la mise a jour de la memoire de travail (modele de Donchin, 1988).",
                "La N400, decouverte par Marta Kutas et Steven Hillyard en 1980, est une deflection negative survenant 400 ms apres un mot semantiquement incongruent dans une phrase (ex. : « Il a mis du sucre dans son chien »). Elle reflete le cout de l'integration semantique et est reduite pour les mots predictibles dans un contexte donne. L'ERN (error-related negativity), identifiee par Michael Falkenstein en 1991, survient 50 a 100 ms apres une erreur de reponse et est generee par le cortex cingulaire anterieur, refletant la detection automatique des erreurs."
              ]
            },
            {
              title: "Applications cliniques et interfaces cerveau-machine",
              paragraphs: [
                "L'EEG est indispensable en neurologie clinique. Il reste l'examen de reference pour le diagnostic de l'epilepsie, detectant les decharges paroxystiques (pointes, pointes-ondes) caracteristiques. L'EEG est egalement essentiel pour le diagnostic de la mort cerebrale (trace plat), la classification des stades du sommeil (polysomnographie) et le monitoring peropératoire de la profondeur d'anesthesie (indice BIS). L'EEG longue duree (24-72 h) avec video permet de distinguer les crises epileptiques des crises psychogenes non epileptiques.",
                "Les interfaces cerveau-machine (BCI, brain-computer interface) basees sur l'EEG permettent a des patients paralyses de communiquer ou de controler des dispositifs par la pensee. Le systeme P300 Speller, developpe par Emmanuel Donchin et Larry Farwell en 1988, permet d'ecrire des lettres en detectant les reponses P300 a des stimuli visuels. Les systemes plus modernes utilisent l'imagerie motrice (modulation des rythmes mu et beta par l'intention de mouvement) pour controler des curseurs, des fauteuils roulants ou des protheses robotiques."
              ]
            }
          ],
          quiz: [
            { q: "Qui a enregistre le premier EEG humain et en quelle annee ?", opts: ['Wilder Penfield en 1930', 'Hans Berger en 1924', 'Charles Sherrington en 1897', 'Santiago Ramon y Cajal en 1906'], correct: 1, explanation: "Hans Berger, psychiatre allemand, a enregistre le premier EEG humain en 1924 a Iena sur son fils, identifiant le rythme alpha. Il a publie ses resultats en 1929 apres cinq ans d'hesitation." },
            { q: "Quelle est la frequence du rythme alpha ?", opts: ['0,5-4 Hz', '4-8 Hz', '8-13 Hz', '30-100 Hz'], correct: 2, explanation: "Le rythme alpha (8-13 Hz) a ete le premier rythme cerebral identifie par Berger. Il est predominant lorsque le sujet est eveille et au repos, les yeux fermes, et est attenue par l'ouverture des yeux ou l'attention." },
            { q: "Que reflete la composante N400 en EEG ?", opts: ["La detection d'une erreur motrice", "Le cout de l'integration semantique", "La preparation d'un mouvement", "La reponse a un stimulus douloureux"], correct: 1, explanation: "La N400, decouverte par Kutas et Hillyard en 1980, est une deflection negative a 400 ms refletant le cout de l'integration semantique. Elle est plus ample pour les mots inattendus ou incongruents dans un contexte donne." },
            { q: "Quel rythme cerebral est associe a la conscience et a la liaison perceptive ?", opts: ['Delta', 'Theta', 'Alpha', 'Gamma'], correct: 3, explanation: "Les oscillations gamma (30-100 Hz), decrites par Wolf Singer, sont associees a la liaison perceptive, l'attention focalisee et pourraient constituer un correlat neuronal de la conscience." },
            { q: "Qu'est-ce que le P300 Speller ?", opts: ["Un logiciel de correction orthographique", "Une interface cerveau-machine permettant d'ecrire par la pensee", "Un test de memoire", "Un type d'antidepresseur"], correct: 1, explanation: "Le P300 Speller, developpe par Donchin et Farwell en 1988, est une interface cerveau-machine basee sur l'EEG qui permet a des patients paralyses d'ecrire en detectant les reponses P300 a des lettres clignotantes." }
          ],
          definitions: [
            { term: 'Rythme alpha', def: "Oscillation cerebrale de 8 a 13 Hz, predominante au repos eveille les yeux fermes, premier rythme cerebral identifie par Hans Berger en 1924, genere dans le cortex visuel et le thalamus." },
            { term: 'Potentiel evoque', def: "Reponse electrique cerebrale specifique declenchee par un stimulus ou un evenement cognitif, extraite du bruit EEG par moyennage de nombreux essais identiques." },
            { term: 'Interface cerveau-machine', def: "Systeme permettant une communication directe entre le cerveau et un dispositif externe (ordinateur, prothese) en decodant les signaux cerebraux enregistres par EEG, ECoG ou electrodes intracorticales." }
          ],
          memos: [
            { front: "Le premier EEG humain", back: "Hans Berger a enregistre le premier EEG humain en 1924 sur son fils Klaus de 16 ans, utilisant des electrodes en feuille d'argent. Il a identifie le rythme alpha et publie ses resultats en 1929, mais ils n'ont ete reconnus qu'apres la confirmation d'Edgar Adrian en 1934." },
            { front: "La N400 et le langage", back: "Marta Kutas et Steven Hillyard ont decouvert la N400 en 1980 en presentant des phrases finissant par des mots incongruents (« He took a sip from the transmitter »). Cette composante est devenue un outil standard pour etudier le traitement semantique du langage." }
          ]
        },
        {
          slug: 'tep',
          title: 'La tomographie par emission de positons (TEP)',
          description: "Imagerie metabolique du cerveau par traceurs radioactifs.",
          intro: "La tomographie par emission de positons (TEP ou PET scan) est une technique d'imagerie fonctionnelle qui utilise des traceurs radioactifs pour mesurer le metabolisme cerebral, le flux sanguin ou la concentration de neurotransmetteurs in vivo. Developpee dans les annees 1970 par Michael Ter-Pogossian, Michel Phelps et Edward Hoffman, elle reste l'outil de reference pour l'etude des systemes de neurotransmetteurs et le diagnostic des maladies neurodegeneratives.",
          introHighlight: "La TEP est la seule technique capable de mesurer in vivo la concentration et l'activite des recepteurs, des transporteurs et des enzymes specifiques du cerveau humain grace a des radiotraceurs sur mesure.",
          sections: [
            {
              title: "Principes physiques et radiotraceurs",
              paragraphs: [
                "La TEP detecte les paires de photons gamma emis lors de l'annihilation d'un positon (emis par le traceur radioactif) avec un electron du tissu. Le traceur le plus utilise est le fluorodeoxyglucose (FDG), un analogue du glucose marque au fluor-18 (demi-vie : 110 minutes). Le FDG est capte par les cellules metaboliquement actives mais ne peut etre metabolise au-dela de la phosphorylation, s'accumulant proportionnellement a l'activite metabolique. Louis Sokoloff a developpe cette approche (autoradiographie au deoxyglucose) dans les annees 1970.",
                "Des radiotraceurs specifiques permettent d'etudier les systemes de neurotransmetteurs. Le raclopride-[11C] se lie aux recepteurs D2 de la dopamine et permet de mesurer la liberation de dopamine lors de taches ou de prises de drogues. Le WAY-100635-[11C] cible les recepteurs 5-HT1A de la serotonine. Le Pittsburgh Compound B (PiB-[11C]), developpe par William Klunk et Chester Mathis en 2004, se lie aux plaques amyloides et a revolutionne le diagnostic precoce de la maladie d'Alzheimer, permettant de detecter la pathologie amyloide 15 a 20 ans avant l'apparition des symptomes."
              ],
              highlight: "Le Pittsburgh Compound B (PiB), developpe en 2004, permet de visualiser les plaques amyloides in vivo par TEP, detectant la pathologie d'Alzheimer jusqu'a 20 ans avant l'apparition des premiers symptomes cliniques."
            },
            {
              title: "Applications en recherche et en clinique",
              paragraphs: [
                "En recherche, la TEP a permis des decouvertes fondamentales sur les systemes de neurotransmetteurs in vivo. Les etudes de Nora Volkow ont montre que les sujets dependants a la cocaine ont une reduction de 15 a 20 % des recepteurs D2 dans le striatum, contribuant au modele de l'addiction comme dysfonctionnement du systeme de recompense. La TEP a egalement revele que le placebo active le systeme opioide endogene et le systeme dopaminergique, fournissant une base neurobiologique a l'effet placebo.",
                "En clinique, la TEP-FDG est l'examen de reference pour le diagnostic differentiel des demences. La maladie d'Alzheimer montre un hypometabolisme caracteristique du cortex parieto-temporal et cingulaire posterieur. La demence frontotemporale montre un hypometabolisme frontal et temporal anterieur. La TEP permet egalement de distinguer la maladie de Parkinson (deficit dopaminergique nigrostrié visible avec le [18F]-DOPA) des syndromes parkinsoniens atypiques (atrophie multisystematisee, paralysie supranucleaire progressive)."
              ]
            },
            {
              title: "Limites et evolution de la TEP",
              paragraphs: [
                "La TEP presente plusieurs limitations. Sa resolution spatiale (4-6 mm) est inferieure a celle de l'IRMf. L'exposition aux radiations limite le nombre d'examens par sujet. La necessite d'un cyclotron pour produire les isotopes de courte demi-vie (carbone-11 : 20 minutes, oxygene-15 : 2 minutes) rend la technique couteuse et accessible uniquement aux grands centres de recherche. Cependant, le fluor-18 (demi-vie : 110 minutes) peut etre transporte, democratisant partiellement l'acces.",
                "Les scanners TEP-IRM hybrides, commercialises depuis 2011, combinent la haute resolution spatiale de l'IRM avec les informations metaboliques de la TEP en une seule acquisition. La TEP a haute resolution (HRRT, High Resolution Research Tomograph), avec une resolution de 2,5 mm, permet d'etudier de petites structures comme le locus coeruleus ou les noyaux du raphe. L'emergence de nouveaux radiotraceurs — pour la neuroinflammation (TSPO), la tau (flortaucipir), la synaptophyse — elargit continuellement les possibilites de cette technique."
              ]
            }
          ],
          quiz: [
            { q: "Quel est le radiotraceur le plus utilise en TEP cerebrale ?", opts: ['Le raclopride-[11C]', 'Le fluorodeoxyglucose (FDG)', 'Le Pittsburgh Compound B', 'L\'eau-[15O]'], correct: 1, explanation: "Le FDG (fluorodeoxyglucose marque au fluor-18) est le radiotraceur le plus utilise en TEP. Il mesure le metabolisme du glucose, qui est directement correle a l'activite neuronale." },
            { q: "Que permet de visualiser le Pittsburgh Compound B (PiB) ?", opts: ['Les recepteurs dopaminergiques', 'Les plaques amyloides de la maladie d\'Alzheimer', 'Les tumeurs cerebrales', 'Les foyers epileptiques'], correct: 1, explanation: "Le PiB, developpe par Klunk et Mathis en 2004, se lie specifiquement aux plaques amyloides beta et permet de les visualiser in vivo par TEP, detectant la pathologie d'Alzheimer jusqu'a 20 ans avant les symptomes." },
            { q: "Quelle est la demi-vie du fluor-18 ?", opts: ['2 minutes', '20 minutes', '110 minutes', '8 heures'], correct: 2, explanation: "Le fluor-18 a une demi-vie de 110 minutes (environ 2 heures), ce qui est suffisamment long pour permettre son transport depuis un cyclotron vers des centres d'imagerie distants." },
            { q: "Qu'a montre Nora Volkow chez les sujets dependants a la cocaine par TEP ?", opts: ["Une augmentation des recepteurs D2", "Une reduction de 15-20 % des recepteurs D2 dans le striatum", "Une augmentation du metabolisme frontal", "Aucune anomalie cerebrale"], correct: 1, explanation: "Nora Volkow a montre par TEP au raclopride que les sujets dependants a la cocaine ont une reduction significative (15-20 %) des recepteurs D2 de la dopamine dans le striatum, contribuant au modele neurobiologique de l'addiction." },
            { q: "Quel est le pattern TEP-FDG typique de la maladie d'Alzheimer ?", opts: ['Hypometabolisme frontal', 'Hypometabolisme parieto-temporal et cingulaire posterieur', 'Hypermetabolisme global', 'Hypometabolisme occipital'], correct: 1, explanation: "La maladie d'Alzheimer montre en TEP-FDG un hypometabolisme caracteristique du cortex parieto-temporal et cingulaire posterieur, refletant la perte synaptique et la neurodegenerescence dans ces regions." }
          ],
          definitions: [
            { term: 'Radiotraceur', def: "Molecule marquee par un isotope radioactif emetteur de positons, concue pour se lier a une cible biologique specifique (recepteur, transporteur, enzyme) et permettre sa visualisation par TEP." },
            { term: 'FDG', def: "Fluorodeoxyglucose : analogue du glucose marque au fluor-18, capte par les cellules metaboliquement actives, radiotraceur de reference en TEP pour mesurer le metabolisme cerebral." },
            { term: 'Annihilation', def: "Processus physique ou un positon (emis par le radiotraceur) rencontre un electron, produisant deux photons gamma de 511 keV emis a 180 degres, detectes par les capteurs du scanner TEP." }
          ],
          memos: [
            { front: "Louis Sokoloff et le deoxyglucose", back: "Louis Sokoloff a developpe dans les annees 1970 la methode du deoxyglucose (2-DG) pour mesurer le metabolisme cerebral. L'adaptation de cette methode a la TEP avec le FDG a permis de visualiser le metabolisme cerebral chez l'humain vivant pour la premiere fois." },
            { front: "TEP et effet placebo", back: "La TEP a montre que l'effet placebo active reellement le systeme opioide endogene (liberation d'endorphines) et le systeme dopaminergique dans le noyau accumbens, prouvant que le placebo a une base neurobiologique mesurable et n'est pas une simple illusion." }
          ]
        },
        {
          slug: 'magnetoencephalographie',
          title: 'La magnetoencephalographie (MEG)',
          description: "Mesure des champs magnetiques cerebraux pour une imagerie fonctionnelle a haute resolution spatio-temporelle.",
          intro: "La magnetoencephalographie (MEG) mesure les champs magnetiques extremement faibles (femtoteslas, 10^-15 T) generes par l'activite electrique des neurones cerebraux. Developpee par David Cohen au MIT en 1968, la MEG combine une excellente resolution temporelle (milliseconde) avec une meilleure resolution spatiale que l'EEG, offrant une fenetre unique sur la dynamique des processus cerebraux.",
          introHighlight: "La MEG detecte des champs magnetiques un milliard de fois plus faibles que le champ magnetique terrestre, necessitant des capteurs supraconducteurs (SQUIDs) refroidis a l'helium liquide (-269 degres C).",
          sections: [
            {
              title: "Principes physiques et instrumentation",
              paragraphs: [
                "Les champs magnetiques mesures par la MEG sont produits par les courants intracellulaires des neurones pyramidaux du cortex, principalement dans les dendrites apicales. Contrairement aux champs electriques (mesures par l'EEG), les champs magnetiques ne sont pas deformes par les differentes couches de tissu (meninges, os, scalp), offrant une meilleure resolution spatiale. Les capteurs utilises sont des SQUIDs (Superconducting QUantum Interference Devices), detecteurs de flux magnetique d'une sensibilite extraordinaire (quelques femtoteslas).",
                "Un systeme MEG moderne contient 300 a 400 capteurs SQUIDs, refroidis a -269 degres C par de l'helium liquide, disposes dans un casque rigide. L'enregistrement doit se faire dans une chambre magnetiquement blindee (MSR, magnetically shielded room) pour eliminer les champs magnetiques ambiants — le champ terrestre est un milliard de fois plus intense que les signaux cerebraux. David Cohen a realise le premier enregistrement MEG humain fiable en 1968 au MIT, detectant le rythme alpha magnetique."
              ],
              highlight: "Les champs magnetiques cerebraux mesures par la MEG sont de l'ordre de 50 a 500 femtoteslas (10^-15 T), soit environ un milliard de fois plus faibles que le champ magnetique terrestre (50 microteslas), necessitant une technologie de detection extremement sensible."
            },
            {
              title: "Avantages et applications de la MEG",
              paragraphs: [
                "La MEG offre un compromis unique entre resolution temporelle et spatiale. Sa resolution temporelle (1 ms) egale celle de l'EEG, tandis que sa resolution spatiale (2-3 mm pour les sources superficielles) surpasse celle de l'EEG grace a la transparence magnetique des tissus. Combinee avec l'IRM structurelle (source imaging), la MEG permet de localiser les generateurs de l'activite cerebrale avec une precision de quelques millimetres et une dynamique temporelle de la milliseconde.",
                "En clinique, la MEG est principalement utilisee pour la cartographie pre-chirurgicale de l'epilepsie : elle localise les foyers epileptiques (pointes interictales) avec une precision suffisante pour guider la chirurgie. Elle est egalement utilisee pour la cartographie pre-chirurgicale des fonctions eloquentes (motricite, langage) avant l'ablation de tumeurs cerebrales. En recherche, la MEG est l'outil de choix pour etudier la dynamique oscillatoire du cerveau, les interactions entre regions et le traitement temporel rapide du langage et de la perception."
              ]
            },
            {
              title: "La MEG de nouvelle generation : OPM-MEG",
              paragraphs: [
                "La technologie MEG evolue rapidement avec l'emergence des magnetometres a pompage optique (OPM, optically pumped magnetometers). Contrairement aux SQUIDs, les OPM fonctionnent a temperature ambiante, eliminant le besoin d'helium liquide couteux. Developpes notamment par Matthew Brookes a l'Universite de Nottingham, les systemes OPM-MEG utilisent des capteurs miniatures montes dans un casque flexible adapte a la tete du sujet, permettant des enregistrements pendant le mouvement.",
                "Les premiers systemes OPM-MEG commerciaux, apparus au debut des annees 2020, offrent une sensibilite comparable aux SQUIDs avec une flexibilite revolutionnaire. Les sujets peuvent bouger la tete, marcher, interagir avec des objets — ouvrant des possibilites experimentales impossibles avec la MEG traditionnelle. La combinaison de la OPM-MEG avec la realite virtuelle pourrait transformer l'etude des neurosciences cognitives en permettant d'etudier l'activite cerebrale dans des conditions ecologiquement valides."
              ]
            }
          ],
          quiz: [
            { q: "Que mesure la MEG ?", opts: ["Les champs electriques du cerveau", "Les champs magnetiques du cerveau", "Le flux sanguin cerebral", "Les ondes sonores cerebrales"], correct: 1, explanation: "La MEG mesure les champs magnetiques extremement faibles (femtoteslas) generes par l'activite electrique des neurones cerebraux, principalement les courants intracellulaires des dendrites des neurones pyramidaux du cortex." },
            { q: "Qu'est-ce qu'un SQUID ?", opts: ["Un type de neurone", "Un detecteur supraconducteur de champs magnetiques", "Un logiciel d'analyse", "Un radiotraceur"], correct: 1, explanation: "Un SQUID (Superconducting QUantum Interference Device) est un detecteur de flux magnetique supraconducteur d'une sensibilite extraordinaire, fonctionnant a -269 degres C, utilise dans les systemes MEG pour detecter les champs magnetiques cerebraux." },
            { q: "Quel avantage la MEG a-t-elle sur l'EEG ?", opts: ["Meilleure resolution temporelle", "Meilleure resolution spatiale grace a la transparence magnetique des tissus", "Moins couteuse", "Plus facile a utiliser"], correct: 1, explanation: "Les champs magnetiques ne sont pas deformes par les tissus intermediaires (os, meninges, scalp), contrairement aux champs electriques mesures par l'EEG. Cela donne a la MEG une meilleure resolution spatiale (2-3 mm vs 10-20 mm pour l'EEG)." },
            { q: "Quelle est l'application clinique principale de la MEG ?", opts: ["Le diagnostic de la depression", "La cartographie pre-chirurgicale de l'epilepsie", "Le traitement de la migraine", "Le suivi de la grossesse"], correct: 1, explanation: "La MEG est principalement utilisee en clinique pour localiser les foyers epileptiques avant une chirurgie de l'epilepsie, grace a sa capacite a localiser les sources d'activite avec une bonne precision spatiale." },
            { q: "Qu'apportent les capteurs OPM par rapport aux SQUIDs ?", opts: ["Une meilleure sensibilite", "Le fonctionnement a temperature ambiante et la mobilite du sujet", "Un cout plus eleve", "Une resolution temporelle superieure"], correct: 1, explanation: "Les magnetometres OPM fonctionnent a temperature ambiante (sans helium liquide) et peuvent etre montes dans un casque flexible, permettant au sujet de bouger librement pendant l'enregistrement, contrairement aux systemes SQUID traditionnels." }
          ],
          definitions: [
            { term: 'SQUID', def: "Superconducting QUantum Interference Device : detecteur quantique supraconducteur d'une sensibilite de quelques femtoteslas, refroidi a -269 degres C, utilise pour mesurer les champs magnetiques cerebraux en MEG." },
            { term: 'Femtotesla', def: "Unite de mesure du champ magnetique valant 10^-15 tesla. Les champs magnetiques cerebraux sont de l'ordre de 50 a 500 femtoteslas, soit un milliard de fois plus faibles que le champ terrestre." },
            { term: 'OPM-MEG', def: "Magnetoencephalographie a magnetometres a pompage optique : nouvelle generation de MEG utilisant des capteurs fonctionnant a temperature ambiante, permettant des enregistrements mobiles et flexibles." }
          ],
          memos: [
            { front: "David Cohen et la premiere MEG", back: "David Cohen au MIT a realise le premier enregistrement MEG humain fiable en 1968, detectant le rythme alpha magnetique. Il a ensuite developpe les chambres magnetiquement blindees indispensables a cette technique." },
            { front: "MEG et chambre blindee", back: "Les enregistrements MEG necessitent une chambre magnetiquement blindee (MSR) composee de couches de mu-metal et d'aluminium, coutant environ 500 000 a 1 million d'euros, pour eliminer les interferences electromagnetiques ambiantes." }
          ]
        },
        {
          slug: 'optogenetique',
          title: "L'optogenetique",
          description: "Controler l'activite des neurones par la lumiere : une revolution methodologique en neurosciences.",
          intro: "L'optogenetique est une technique revolutionnaire permettant de controler l'activite de neurones genetiquement cibles par la lumiere. En combinant genetique et optique, elle permet d'activer ou d'inhiber des populations neuronales specifiques avec une precision spatiale et temporelle sans precedent. Developpee par Karl Deisseroth et Edward Boyden a Stanford en 2005, elle a ete qualifiee de « methode de l'annee » par Nature Methods en 2010.",
          introHighlight: "L'optogenetique permet d'allumer ou d'eteindre des neurones individuels par la lumiere en quelques millisecondes, avec une specificite cellulaire impossible a atteindre par les methodes electriques ou pharmacologiques.",
          sections: [
            {
              title: "Les opsines : des interrupteurs moleculaires",
              paragraphs: [
                "L'optogenetique repose sur des proteines photosensibles appelees opsines, naturellement presentes chez des micro-organismes. La channelrhodopsine-2 (ChR2), decouverte par Georg Nagel, Ernst Bamberg et Peter Hegemann chez l'algue verte Chlamydomonas reinhardtii en 2003, est un canal cationique active par la lumiere bleue (470 nm) qui depolarise le neurone et provoque des potentiels d'action. L'halorhodopsine (NpHR), provenant de l'archaee Natronomonas pharaonis, est une pompe a chlorure activee par la lumiere jaune (580 nm) qui hyperpolarise le neurone et inhibe son activite.",
                "Karl Deisseroth et Edward Boyden ont demontre en 2005 que l'expression de ChR2 dans des neurones de mammifere permettait de les activer de maniere fiable par de breves impulsions lumineuses, avec une precision temporelle de la milliseconde. Depuis, de nombreuses variantes d'opsines ont ete developpees : les opsines a cinetique rapide (Chronos, 100 Hz), les opsines inhibitrices plus efficaces (ArchT, eNpHR3.0), les opsines a spectre rouge (Chrimson, penetrant plus profondement les tissus) et les opsines bistables (step-function opsins) dont l'etat peut etre bascule par des impulsions de couleurs differentes."
              ],
              highlight: "La channelrhodopsine-2 (ChR2), decouverte chez une algue verte, est le premier « interrupteur optogenetique » : un canal ionique qui s'ouvre en reponse a la lumiere bleue en moins d'une milliseconde, permettant de controler l'activite neuronale avec une precision temporelle inegalee."
            },
            {
              title: "Methodes d'expression et ciblage cellulaire",
              paragraphs: [
                "L'expression des opsines dans des populations neuronales specifiques est realisee par des vecteurs viraux (virus adeno-associes, AAV) portant le gene de l'opsine sous le controle de promoteurs specifiques. Le promoteur CaMKII cible les neurones excitateurs glutamatergiques, tandis que le promoteur PV cible les interneurones inhibiteurs a parvalbumine. Le systeme Cre-lox permet un ciblage encore plus precis en combinant des souris transgeniques Cre avec des virus AAV « floxes » dont le gene n'est exprime que dans les cellules Cre-positives.",
                "La lumiere est delivree par des fibres optiques de 200 micrometres de diametre implantees chirurgicalement au-dessus de la region cible, ou par des micro-LED implantables sans fil. Les systemes multi-sites permettent de stimuler plusieurs regions simultanement. La combinaison avec les enregistrements electrophysiologiques (optrodes) permet de mesurer l'effet de la stimulation optogenetique sur l'activite neuronale en temps reel. Les microscopes a deux photons permettent une activation optogenetique avec une resolution cellulaire individuelle."
              ]
            },
            {
              title: "Decouvertes et perspectives therapeutiques",
              paragraphs: [
                "L'optogenetique a permis des decouvertes impossibles avec les methodes precedentes. Susumu Tonegawa (prix Nobel de physiologie 1987 pour ses travaux sur les anticorps) et son equipe au MIT ont utilise l'optogenetique pour activer des engrammes (traces memorielles) specifiques dans l'hippocampe de souris, demontrant que la reactivation optogenetique d'un souvenir de peur dans un contexte neutre suffisait a declencher la reponse de peur — prouvant l'existence physique des engrammes de memoire.",
                "Les applications therapeutiques potentielles sont nombreuses. La restauration de la vision chez des souris aveugles par expression de ChR2 dans les cellules ganglionnaires de la retine a ete demontree. Des essais cliniques de therapie optogenetique retinienne sont en cours (GenSight Biologics, premier patient traite en 2021). Pour les maladies neurologiques (Parkinson, epilepsie, douleur chronique), l'optogenetique pourrait offrir une stimulation plus precise que la stimulation cerebrale profonde electrique, en ciblant uniquement les types cellulaires pathologiques."
              ]
            }
          ],
          quiz: [
            { q: "Qu'est-ce que la channelrhodopsine-2 (ChR2) ?", opts: ["Un neurotransmetteur", "Un canal ionique active par la lumiere bleue", "Un medicament antidepresseur", "Un type de fibre optique"], correct: 1, explanation: "La channelrhodopsine-2 est un canal cationique photosensible provenant de l'algue Chlamydomonas reinhardtii. Active par la lumiere bleue (470 nm), il depolarise les neurones et declenche des potentiels d'action." },
            { q: "Qui a developpe l'optogenetique comme outil neuroscientifique ?", opts: ['Francis Crick', 'Karl Deisseroth et Edward Boyden', 'Susumu Tonegawa', 'Georg Nagel'], correct: 1, explanation: "Karl Deisseroth et Edward Boyden, alors a Stanford, ont demontre en 2005 que la ChR2 pouvait etre utilisee pour controler l'activite neuronale par la lumiere chez les mammiferes, fondant l'optogenetique moderne." },
            { q: "Comment les opsines sont-elles introduites dans les neurones ?", opts: ['Par injection de proteines', 'Par des vecteurs viraux (AAV) portant le gene', 'Par absorption naturelle', 'Par greffe cellulaire'], correct: 1, explanation: "Les opsines sont introduites dans les neurones cibles via des vecteurs viraux (virus adeno-associes, AAV) portant le gene de l'opsine sous le controle d'un promoteur specifique au type cellulaire desire." },
            { q: "Qu'a demontre l'equipe de Tonegawa avec l'optogenetique ?", opts: ["Que la lumiere peut guerir la depression", "L'existence physique des engrammes de memoire", "Que tous les neurones sont photosensibles", "La transmission optique entre neurones"], correct: 1, explanation: "L'equipe de Tonegawa au MIT a utilise l'optogenetique pour reactiver des engrammes specifiques dans l'hippocampe, demontrant que la reactivation d'un souvenir de peur suffisait a declencher la reponse de peur, prouvant l'existence physique des traces memorielles." },
            { q: "Quelle opsine est utilisee pour inhiber les neurones ?", opts: ['La channelrhodopsine-2', "L'halorhodopsine (NpHR)", 'La rhodopsine', 'La melanopsine'], correct: 1, explanation: "L'halorhodopsine (NpHR), provenant de l'archee Natronomonas pharaonis, est une pompe a chlorure activee par la lumiere jaune (580 nm) qui hyperpolarise les neurones et inhibe leur activite." }
          ],
          definitions: [
            { term: 'Optogenetique', def: "Technique combinant genetique et optique pour controler l'activite de neurones specifiques par la lumiere, utilisant des proteines photosensibles (opsines) exprimees dans les cellules cibles via des vecteurs viraux." },
            { term: 'Channelrhodopsine-2 (ChR2)', def: "Canal cationique photosensible provenant de l'algue Chlamydomonas reinhardtii, active par la lumiere bleue (470 nm), qui depolarise les neurones et declenche des potentiels d'action." },
            { term: 'Engramme', def: "Trace physique d'un souvenir dans le cerveau, constituee par un ensemble de neurones dont la reactivation suffit a rappeler le souvenir, dont l'existence a ete confirmee par optogenetique." }
          ],
          memos: [
            { front: "L'algue qui a revolutionne les neurosciences", back: "La channelrhodopsine-2, proteine photosensible de l'algue verte Chlamydomonas reinhardtii, a ete decouverte par Georg Nagel en 2003. Son utilisation dans les neurones par Deisseroth et Boyden en 2005 a fonde l'optogenetique, revolutionnant la recherche neuroscientifique." },
            { front: "Premier patient traite par optogenetique retinienne", back: "En 2021, GenSight Biologics a traite le premier patient atteint de retinite pigmentaire par optogenetique : l'injection intraoculaire d'un AAV portant le gene de ChrimsonR a permis une restauration partielle de la vision apres stimulation par des lunettes-projecteurs." }
          ]
        }
      ]
    },

    // ── Hub 6: Conscience et cognition ──
    {
      slug: 'conscience',
      title: 'Conscience et cognition',
      description: "Les bases neurales de la conscience, du sommeil, des etats modifies et du libre arbitre.",
      introText: "La conscience — notre experience subjective du monde et de nous-memes — est consideree comme le « probleme difficile » des neurosciences, selon l'expression du philosophe David Chalmers. Comment l'activite de milliards de neurones engendre-t-elle l'experience phenomenale ? Ce domaine, longtemps evite par la science, est aujourd'hui au coeur des neurosciences, avec des theories concurrentes et des approches experimentales de plus en plus sophistiquees.",
      introHighlight: "Le « probleme difficile » de la conscience, formule par David Chalmers en 1995, questionne pourquoi et comment les processus cerebraux physiques produisent une experience subjective qualitative — et reste l'un des plus grands mysteres scientifiques.",
      lessons: [
        {
          slug: 'conscience-de-soi',
          title: 'La conscience de soi',
          description: "Les bases neurales de la capacite a se reconnaitre comme un individu distinct.",
          intro: "La conscience de soi est la capacite a se reconnaitre comme un sujet distinct, a refleter sur ses propres pensees et emotions, et a se projeter dans le temps. Cette capacite, longtemps consideree comme propre a l'humain, a ete observee chez les grands singes, les dauphins, les elephants et certains oiseaux. Les neurosciences cherchent a identifier les circuits cerebraux qui sous-tendent cette forme remarquable de cognition.",
          introHighlight: "Le test du miroir, cree par Gordon Gallup en 1970, reste le standard pour evaluer la conscience de soi chez les animaux : seuls quelques especes reconnaissent leur propre reflet, suggerant une forme de conscience de soi.",
          sections: [
            {
              title: "Le reseau du soi et le cortex prefrontal median",
              paragraphs: [
                "Les etudes d'IRMf ont identifie un reseau cerebral specifiquement active lors du traitement auto-referentiel — penser a soi-meme, evaluer ses propres traits, se souvenir d'experiences personnelles. Ce reseau inclut le cortex prefrontal median (CPFM), le cortex cingulaire posterieur (CCP), le precuneus et les jonctions temporoparietales. William Kelley et al. ont montre en 2002 que le CPFM s'active davantage lorsque les sujets jugent si des adjectifs s'appliquent a eux-memes plutot qu'a autrui.",
                "Le reseau du mode par defaut (DMN), decouvert par Marcus Raichle en 2001, chevauche largement le reseau du soi. Le DMN est actif lorsque nous ne sommes pas engages dans une tache externe et que notre esprit « vagabonde » — souvent vers des pensees auto-referentielles, la planification future ou le souvenir du passe. La decouverte que ce reseau est hypoactif dans certaines pathologies (schizophrenie, autisme) et hyperactif dans d'autres (depression ruminative) souligne son role dans la conscience de soi et la sante mentale."
              ],
              highlight: "Le cortex prefrontal median, le cortex cingulaire posterieur et le precuneus forment le coeur du « reseau du soi », specifiquement active lors de la pensee auto-referentielle, et largement superpose au reseau du mode par defaut."
            },
            {
              title: "Le test du miroir et la conscience de soi animale",
              paragraphs: [
                "Gordon Gallup a developpe en 1970 le test du miroir pour evaluer la conscience de soi chez les animaux. Une marque est placee sur une partie du corps visible uniquement dans un miroir ; si l'animal dirige ses actions vers cette marque en se regardant (toucher, frotter), cela suggeere qu'il se reconnait. Les chimpanzes (Gallup, 1970), les orangs-outans, les gorilles (avec des resultats variables), les dauphins (Diana Reiss et Lori Marino, 2001), les elephants d'Asie (Joshua Plotnik, 2006) et les pies (Helmut Prior, 2008) reussissent ce test.",
                "Le test du miroir a ete critique : l'echec ne prouve pas l'absence de conscience de soi (un animal peut se reconnaitre sans s'interesser a la marque), et la reussite ne garantit pas une conscience de soi humaine. Les nourrissons humains commencent a se reconnaitre dans le miroir vers 18-24 mois, un jalon developpemental identifie par Beulah Amsterdam en 1972. Frans de Waal a propose une vision graduee de la conscience de soi, allant de la simple proprioception a la metacognition sophistiquee."
              ]
            },
            {
              title: "Metacognition et introspection",
              paragraphs: [
                "La metacognition — la capacite de reflechir sur ses propres processus cognitifs, de « penser sur sa pensee » — est une forme superieure de conscience de soi. Les etudes de Stephen Fleming et al. ont montre en 2010 que la qualite de la metacognition perceptive (la capacite a evaluer correctement la precision de ses propres jugements) est correlee avec le volume de matiere grise dans le cortex prefrontal anterieur (aire 10 de Brodmann), la region la plus anterieure du cortex, particulierement developpee chez l'humain.",
                "Le cortex prefrontal anterieur est la derniere region corticale a maturer developementalement (vers 25-30 ans) et la premiere a decliner avec l'age. La metacognition est alteree dans de nombreuses pathologies psychiatriques : les patients schizophrenes montrent souvent un deficit metacognitif (incapacite a reconnaitre l'origine de leurs pensees, contribuant aux hallucinations), tandis que les patients anxieux presentent une metacognition excessive (rumination sur leurs propres processus de pensee, un phenomene etudie par Adrian Wells sous le nom de « theorie metacognitive »)."
              ]
            }
          ],
          quiz: [
            { q: "Quelles especes reussissent le test du miroir ?", opts: ["Uniquement les humains", "Les grands singes, dauphins, elephants et certains oiseaux", "Tous les mammiferes", "Uniquement les primates"], correct: 1, explanation: "Le test du miroir est reussi par un nombre restreint d'especes : les grands singes, les dauphins, les elephants d'Asie, les pies et quelques autres. La plupart des animaux ne se reconnaissent pas dans un miroir." },
            { q: "A quel age les nourrissons humains commencent-ils a se reconnaitre dans le miroir ?", opts: ['6 mois', '12 mois', '18-24 mois', '36 mois'], correct: 2, explanation: "Les nourrissons humains commencent a se reconnaitre dans le miroir vers 18-24 mois, un jalon developpemental identifie par Beulah Amsterdam en 1972, marque par des comportements diriges vers la marque sur leur visage." },
            { q: "Quelle region est associee a la metacognition ?", opts: ['Le cortex visuel', 'Le cortex prefrontal anterieur (aire 10)', "L'hippocampe", 'Le cervelet'], correct: 1, explanation: "Stephen Fleming et al. ont montre que la qualite de la metacognition est correlee avec le volume de matiere grise dans le cortex prefrontal anterieur (aire 10 de Brodmann), la region la plus anterieure du cortex." },
            { q: "Qu'est-ce que le reseau du mode par defaut ?", opts: ["Le reseau actif pendant les taches cognitives difficiles", "Un reseau actif au repos, implique dans la pensee auto-referentielle", "Le reseau sensoriel primaire", "Un reseau moteur"], correct: 1, explanation: "Le reseau du mode par defaut (DMN), decouvert par Marcus Raichle en 2001, est actif au repos et implique dans la pensee auto-referentielle, la planification future et le rappel de souvenirs — il se desactive pendant les taches cognitives." },
            { q: "Qui a developpe le test du miroir en 1970 ?", opts: ['Jean Piaget', 'Gordon Gallup', 'Frans de Waal', 'Jane Goodall'], correct: 1, explanation: "Gordon Gallup a developpe le test du miroir en 1970 chez les chimpanzes, montrant qu'ils se reconnaissent dans leur reflet et dirigent leurs actions vers une marque placee sur leur visage, suggerant une forme de conscience de soi." }
          ],
          definitions: [
            { term: 'Metacognition', def: "Capacite a refleter sur ses propres processus cognitifs, a evaluer ses propres connaissances et la confiance dans ses jugements — « penser sur sa pensee » — associee au cortex prefrontal anterieur." },
            { term: 'Reseau du mode par defaut', def: "Ensemble de regions cerebrales (cortex prefrontal median, cingulaire posterieur, precuneus) actives au repos et impliquees dans la pensee auto-referentielle, la planification et la memoire autobiographique." },
            { term: 'Test du miroir', def: "Protocole experimental developpe par Gordon Gallup (1970) pour evaluer la conscience de soi chez les animaux, basee sur la reconnaissance de son propre reflet et la detection d'une marque visible uniquement dans le miroir." }
          ],
          memos: [
            { front: "Le test du miroir de Gallup", back: "En 1970, Gordon Gallup a montre que les chimpanzes, apres quelques jours d'exposition, se reconnaissent dans un miroir : ils l'utilisent pour examiner des parties de leur corps autrement invisibles et touchent une marque de peinture placee sur leur front." },
            { front: "L'aire 10 de Brodmann et la metacognition", back: "L'aire 10 de Brodmann (cortex prefrontal anterieur) est proportionnellement plus grande chez l'humain que chez tout autre primate. Elle est la derniere a maturer (~25-30 ans) et est associee a la metacognition, la planification complexe et la pensee prospective." }
          ]
        },
        {
          slug: 'sommeil-reves',
          title: 'Sommeil et reves',
          description: "Les bases neurobiologiques du sommeil, des reves et de leur role dans la cognition.",
          intro: "Le sommeil occupe un tiers de notre vie et est essentiel a la sante physique et mentale. Les neurosciences du sommeil ont revele que le cerveau endormi est loin d'etre inactif : il consolide les souvenirs, elimine les dechets metaboliques, reorganise les connexions synaptiques et genere les reves. Comprendre les mecanismes du sommeil est devenu un enjeu majeur de sante publique.",
          introHighlight: "Pendant le sommeil, le cerveau n'est pas inactif : il consolide les souvenirs, elimine les dechets metaboliques via le systeme glymphatique et reorganise les connexions synaptiques, des fonctions essentielles que l'eveil ne peut accomplir.",
          sections: [
            {
              title: "L'architecture du sommeil",
              paragraphs: [
                "Le sommeil se divise en cycles de 90 minutes environ, chacun comprenant le sommeil lent (non-REM) et le sommeil paradoxal (REM). Le sommeil lent se decompose en trois stades : N1 (endormissement, ondes theta), N2 (sommeil leger, fuseaux du sommeil a 12-16 Hz et complexes K) et N3 (sommeil profond, ondes delta a 0,5-4 Hz). Le sommeil paradoxal, decouvert par Eugene Aserinsky et Nathaniel Kleitman en 1953, se caracterise par des mouvements oculaires rapides, une atonie musculaire et un EEG rappelant l'eveil — d'ou le terme « paradoxal » invente par Michel Jouvet en 1959.",
                "Les proportions des stades varient au cours de la nuit : le sommeil profond (N3) domine la premiere moitie de la nuit, tandis que le sommeil paradoxal devient plus long dans la seconde moitie. Un adulte sain dort en moyenne 7 a 9 heures par nuit, avec 4 a 6 cycles de sommeil. Le chronotype (tendance a etre « couche-tot » ou « couche-tard ») est en partie genetiquement determine, avec des polymorphismes des genes PER3, CLOCK et CRY1 influencant les preferences circadiennes."
              ],
              highlight: "Le sommeil paradoxal a ete decouvert par Aserinsky et Kleitman en 1953 et nomme ainsi par Michel Jouvet en 1959 : le cerveau y montre une activite electrique intense comparable a l'eveil, tandis que le corps est paralyse (atonie musculaire), et c'est la phase ou surviennent la majorite des reves."
            },
            {
              title: "Fonctions du sommeil : memoire et nettoyage cerebral",
              paragraphs: [
                "Le sommeil joue un role crucial dans la consolidation de la memoire. Pendant le sommeil profond (N3), les oscillations lentes (< 1 Hz) coordonnent le transfert des souvenirs de l'hippocampe vers le neocortex (consolidation systemique). Les fuseaux du sommeil facilitent la plasticite synaptique neocorticale, et les sharp-wave ripples hippocampiques (100-250 Hz) « rejouent » les sequences d'activite vecues pendant l'eveil. Robert Stickgold et Matthew Walker ont montre que le sommeil ameliore la memoire declarative, la memoire procedurale et la creativite.",
                "Le systeme glymphatique, decouvert par Maiken Nedergaard en 2012, est un systeme de nettoyage cerebral actif principalement pendant le sommeil. Le liquide cerebrospinal circule le long des espaces perivasculaires, entrainant les dechets metaboliques — dont la proteine beta-amyloide, impliquee dans la maladie d'Alzheimer. Pendant le sommeil profond, l'espace extracellulaire cerebral augmente de 60 %, facilitant cette « vidange ». La privation chronique de sommeil accelere l'accumulation d'amyloide et pourrait augmenter le risque d'Alzheimer."
              ]
            },
            {
              title: "La neurobiologie des reves",
              paragraphs: [
                "Les reves surviennent principalement pendant le sommeil paradoxal, bien que des reves plus courts et moins vivaces existent aussi en sommeil lent. La theorie de l'activation-synthese, proposee par Allan Hobson et Robert McCarley en 1977, suggere que les reves resultent de l'interpretation par le cortex de signaux aleatoires provenant du tronc cerebral. Cette theorie a ete enrichie par Mark Solms, qui a montre dans les annees 1990 que les lesions du cortex prefrontal ou de la jonction parieto-temporo-occipitale peuvent abolir les reves sans supprimer le sommeil paradoxal.",
                "Les reves lucides — ou le reveur est conscient de rever et peut partiellement controler le contenu du reve — ont ete scientifiquement valides par Keith Hearne (1978) et Stephen LaBerge (1981) grace aux signaux oculaires pre-convenus pendant le sommeil REM. L'IRMf et l'EEG montrent que le reve lucide s'accompagne d'une activation accrue du cortex prefrontal dorsolateral, une region normalement desactivee pendant le sommeil paradoxal. Martin Dresler et al. (2012) ont confirme par IRM que le reve lucide represente un etat de conscience hybride entre le sommeil et l'eveil."
              ]
            }
          ],
          quiz: [
            { q: "Qui a decouvert le sommeil paradoxal ?", opts: ['Michel Jouvet', 'Aserinsky et Kleitman', 'Hans Berger', 'Allan Hobson'], correct: 1, explanation: "Eugene Aserinsky et Nathaniel Kleitman ont decouvert le sommeil REM en 1953 en observant des mouvements oculaires rapides chez des dormeurs. Michel Jouvet a introduit le terme « sommeil paradoxal » en 1959 apres avoir montre l'atonie musculaire associee." },
            { q: "Qu'est-ce que le systeme glymphatique ?", opts: ["Le systeme lymphatique du corps", "Un systeme de nettoyage cerebral actif pendant le sommeil", "Un circuit de la memoire", "Un reseau vasculaire du cerveau"], correct: 1, explanation: "Le systeme glymphatique, decouvert par Maiken Nedergaard en 2012, est un systeme de nettoyage cerebral ou le LCR circule le long des espaces perivasculaires pour eliminer les dechets metaboliques, principalement actif pendant le sommeil profond." },
            { q: "Qu'est-ce qu'un reve lucide ?", opts: ["Un reve tres court", "Un reve ou le reveur est conscient de rever", "Un cauchemar", "Un reve pendant le sommeil lent"], correct: 1, explanation: "Un reve lucide est un etat ou le reveur devient conscient qu'il reve, pouvant parfois controler le contenu du reve. Cet etat a ete scientifiquement valide par des signaux oculaires codes pendant le sommeil REM." },
            { q: "De combien augmente l'espace extracellulaire cerebral pendant le sommeil ?", opts: ['10 %', '30 %', '60 %', '100 %'], correct: 2, explanation: "Pendant le sommeil profond, l'espace extracellulaire cerebral augmente d'environ 60 %, facilitant la circulation du LCR et l'elimination des dechets metaboliques par le systeme glymphatique." },
            { q: "Quelle est la duree approximative d'un cycle de sommeil ?", opts: ['30 minutes', '60 minutes', '90 minutes', '120 minutes'], correct: 2, explanation: "Un cycle de sommeil complet (passant par les stades N1, N2, N3 et REM) dure environ 90 minutes. Un adulte traverse 4 a 6 cycles par nuit." }
          ],
          definitions: [
            { term: 'Sommeil paradoxal', def: "Phase du sommeil caracterisee par des mouvements oculaires rapides, une atonie musculaire et un EEG semblable a l'eveil, ou surviennent la majorite des reves. Decouverte par Aserinsky et Kleitman (1953), nommee par Jouvet (1959)." },
            { term: 'Systeme glymphatique', def: "Systeme de nettoyage cerebral decouvvert par Nedergaard (2012), actif pendant le sommeil profond, ou le LCR circule dans les espaces perivasculaires pour eliminer les dechets metaboliques dont la proteine beta-amyloide." },
            { term: 'Reve lucide', def: "Etat de conscience pendant le sommeil paradoxal ou le reveur est conscient de rever et peut exercer un controle partiel sur le contenu du reve, associe a une activation du cortex prefrontal dorsolateral." }
          ],
          memos: [
            { front: "Michel Jouvet et le « sommeil paradoxal »", back: "Michel Jouvet, neuroscientifique lyonnais, a introduit le terme « sommeil paradoxal » en 1959 et a montre que cette phase est generee par le tronc cerebral (pont). Il a egalement decouvert l'atonie musculaire du REM en lesant le locus coeruleus chez le chat, produisant des chats qui « jouaient » leurs reves." },
            { front: "Le glymphatique et Alzheimer", back: "Le systeme glymphatique elimine la proteine beta-amyloide pendant le sommeil. La privation chronique de sommeil accelere l'accumulation d'amyloide, suggerant un lien mecanistique entre troubles du sommeil et maladie d'Alzheimer." },
            { front: "Reves lucides et signaux oculaires", back: "Keith Hearne (1978) et Stephen LaBerge (1981) ont prouve l'existence des reves lucides en demandant a des reveurs lucides d'effectuer des mouvements oculaires codes (gauche-droite-gauche-droite) pendant le sommeil REM, detectes par les electrodes de l'EOG." }
          ]
        },
        {
          slug: 'etats-modifies',
          title: 'Les etats modifies de conscience',
          description: "Meditation, hypnose, anesthesie et substances psychoactives : comment la conscience peut etre alteree.",
          intro: "Les etats modifies de conscience (EMC) sont des variations qualitatives de l'experience subjective par rapport a l'etat de veille ordinaire. Ils incluent la meditation, l'hypnose, l'anesthesie generale, les etats induits par les substances psychoactives et certaines pathologies neurologiques. L'etude des EMC offre une fenetre privilegiee pour comprendre les mecanismes de la conscience normale.",
          introHighlight: "Les etats modifies de conscience — meditation, hypnose, anesthesie, psychedeliques — permettent de « dissocier » les composantes de la conscience et constituent des outils naturels pour etudier les mecanismes cerebraux de l'experience subjective.",
          sections: [
            {
              title: "Meditation et neuroplasticite",
              paragraphs: [
                "La meditation, pratiquee depuis des millenaires dans les traditions contemplatives, fait l'objet d'etudes neuroscientifiques rigoureuses depuis les annees 2000. Richard Davidson et ses collaborateurs a l'Universite du Wisconsin ont montre que les moines bouddhistes experts (plus de 10 000 heures de pratique) presentent des niveaux de synchronisation gamma (25-42 Hz) significativement superieurs aux novices pendant la meditation de compassion. Ces oscillations gamma, enregistrees par EEG, refletent une synchronisation neuronale a grande echelle impliquee dans l'attention et la conscience.",
                "Les etudes d'IRM structurelle montrent que la pratique reguliere de la meditation modifie la structure du cerveau. Sara Lazar au MGH/Harvard a montre en 2005 que les meditants experients ont un cortex plus epais dans le cortex prefrontal et l'insula. Britta Holzel et al. ont demontre en 2011 que seulement 8 semaines de pratique MBSR (Mindfulness-Based Stress Reduction) augmentent la densite de matiere grise dans l'hippocampe, le cortex cingulaire posterieur, la jonction temporoparietale et le cervelet, tout en reduisant la densite dans l'amygdale — des changements correles a la reduction du stress."
              ],
              highlight: "Huit semaines de pratique de meditation pleine conscience (MBSR) suffisent a modifier mesurablment la structure du cerveau : augmentation de matiere grise dans l'hippocampe et reduction dans l'amygdale, correlees a une amelioration du bien-etre et une reduction du stress."
            },
            {
              title: "L'hypnose et la suggestion",
              paragraphs: [
                "L'hypnose est un etat modifie de conscience induit par la suggestion, caracterise par une absorption attentionnelle accrue, une reduction de la conscience de l'environnement et une augmentation de la suggestibilite. Environ 10 a 15 % des adultes sont hautement hypnotisables. Amir Raz a montre en 2005 que la suggestion hypnotique peut annuler l'effet Stroop — l'interference automatique entre la couleur et le mot — chez les sujets hautement hypnotisables, demontrant que l'hypnose peut modifier des processus cognitifs habituellement automatiques.",
                "Les etudes de neuro-imagerie montrent des changements cerebraux specifiques pendant l'hypnose. David Spiegel et al. ont montre en 2016 par IRMf que l'hypnose reduit l'activite du reseau de saillance (cortex cingulaire anterieur dorsal), augmente la connectivite entre le cortex prefrontal dorsolateral et l'insula (controle executif sur les processus corporels), et diminue la connectivite entre le cortex prefrontal dorsolateral et le reseau du mode par defaut (reduisant la conscience de soi). La douleur peut etre reduite de 50 % sous hypnose, un effet qui s'accompagne d'une reduction d'activite dans le cortex cingulaire anterieur."
              ]
            },
            {
              title: "L'anesthesie generale et la perte de conscience",
              paragraphs: [
                "L'anesthesie generale supprime reversiblement la conscience, offrant un modele unique pour etudier ses mecanismes. Les agents anesthesiques (propofol, sevoflurane, ketamine) agissent sur differentes cibles moleculaires mais partagent un effet commun : la disruption de l'integration de l'information entre regions cerebrales. Giulio Tononi et Marcello Massimini ont montre en 2005 que le propofol reduit drastiquement la complexite de la reponse corticale a la stimulation magnetique transcranienne (TMS), un resultat predit par la theorie de l'information integree.",
                "L'etude des patients sous anesthesie a conduit au developpement de l'indice de complexite perturbationnelle (PCI), par Massimini et Casali en 2013, une mesure objective du niveau de conscience. Le PCI calcule la complexite algorithmique de la reponse EEG a une impulsion TMS : un PCI eleve indique une conscience preservee (eveil, reve lucide), un PCI bas indique son absence (anesthesie profonde, coma). Cet indice peut detecter la conscience residuelle chez des patients en etat vegetatif avec une precision de 94 %, superant les evaluations comportementales classiques."
              ]
            }
          ],
          quiz: [
            { q: "Qu'ont montre les etudes d'EEG chez les moines bouddhistes experts ?", opts: ["Un ralentissement cerebral global", "Des niveaux de synchronisation gamma bien superieurs aux novices", "Aucune difference avec les non-meditants", "Une activite uniquement dans le lobe occipital"], correct: 1, explanation: "Richard Davidson et al. ont montre que les moines bouddhistes avec plus de 10 000 heures de meditation presentent des niveaux de synchronisation gamma significativement superieurs aux novices, refletant une integration neuronale accrue." },
            { q: "Qu'est-ce que l'indice de complexite perturbationnelle (PCI) ?", opts: ["Un score de QI", "Une mesure objective du niveau de conscience basee sur la reponse TMS-EEG", "Un indice de performance cognitive", "Un marqueur de la douleur"], correct: 1, explanation: "Le PCI, developpe par Massimini et Casali (2013), mesure la complexite algorithmique de la reponse corticale a la TMS, fournissant une mesure objective du niveau de conscience applicable aux patients non communicants." },
            { q: "Quel pourcentage de la population est hautement hypnotisable ?", opts: ['1-2 %', '10-15 %', '50 %', '80 %'], correct: 1, explanation: "Environ 10 a 15 % des adultes sont hautement hypnotisables, 60-70 % sont moderement hypnotisables et 15-20 % sont peu ou pas hypnotisables. Cette variabilite est en partie genetiquement determinee." },
            { q: "Combien de temps de meditation MBSR suffit a modifier la structure du cerveau ?", opts: ['1 semaine', '8 semaines', '6 mois', '2 ans'], correct: 1, explanation: "Holzel et al. (2011) ont montre que seulement 8 semaines de pratique MBSR (environ 27 minutes par jour) suffisent a augmenter mesurablment la matiere grise dans l'hippocampe et a la reduire dans l'amygdale." },
            { q: "Quel effet commun partagent les anesthesiques generaux sur le cerveau ?", opts: ["L'activation du cortex visuel", "La disruption de l'integration de l'information entre regions", "L'augmentation de la dopamine", "Le renforcement de la memoire"], correct: 1, explanation: "Malgre leurs cibles moleculaires differentes, les anesthesiques generaux partagent un effet commun : la disruption de l'integration de l'information entre regions cerebrales, correlée a la perte de conscience." }
          ],
          definitions: [
            { term: 'Etat modifie de conscience', def: "Variation qualitative de l'experience subjective par rapport a l'etat de veille ordinaire, pouvant etre induite par la meditation, l'hypnose, les substances psychoactives, l'anesthesie ou certaines pathologies." },
            { term: 'PCI (indice de complexite perturbationnelle)', def: "Mesure objective du niveau de conscience basee sur la complexite algorithmique de la reponse EEG a une impulsion de stimulation magnetique transcranienne, developpee par Massimini et Casali (2013)." },
            { term: 'Oscillations gamma', def: "Activite electrique cerebrale de 30 a 100 Hz associee a l'attention, la liaison perceptive et la conscience. Anormalement elevees chez les meditants experts pendant la meditation de compassion." }
          ],
          memos: [
            { front: "Davidson et les moines bouddhistes", back: "Richard Davidson, a l'Universite du Wisconsin, a enregistre l'EEG de moines bouddhistes avec plus de 10 000 heures de pratique (dont Matthieu Ricard). Leurs niveaux de synchronisation gamma pendant la meditation de compassion etaient les plus eleves jamais enregistres en laboratoire." },
            { front: "Le PCI et les patients vegetatifs", back: "L'indice PCI peut detecter une conscience residuelle chez des patients en etat vegetatif avec une precision de 94 %, bien superieure aux evaluations comportementales. Environ 15-20 % des patients diagnostiques « vegetatifs » montrent des signes de conscience par cette mesure." }
          ]
        },
        {
          slug: 'libre-arbitre',
          title: 'Le libre arbitre',
          description: "Les neurosciences du choix et le debat sur la liberte de la volonte.",
          intro: "Le libre arbitre — notre capacite supposee a choisir librement nos actions — est l'un des sujets les plus debattus a l'intersection des neurosciences et de la philosophie. Les experiences de Benjamin Libet dans les annees 1980 ont ouvert ce debat en montrant que le cerveau semblait « decider » avant que le sujet n'ait conscience de sa decision, remettant en question notre sentiment de libre choix.",
          introHighlight: "L'experience de Libet (1983) a montre que l'activite cerebrale preparatoire (potentiel de prontitude) precede de 350 ms la prise de conscience de la decision de bouger, suggerant que les decisions conscientes pourraient etre initiees inconsciemment.",
          sections: [
            {
              title: "L'experience de Libet et ses suites",
              paragraphs: [
                "Benjamin Libet a publie en 1983 une experience fondatrice. Il demandait aux sujets de flechir le poignet spontanement tout en notant la position d'un point sur une horloge au moment ou ils ressentaient l'intention de bouger. L'EEG montrait un potentiel de prontitude (Bereitschaftspotential, decouvert par Kornhuber et Deecke en 1965) debutant environ 550 ms avant le mouvement, tandis que la conscience de l'intention (« W-time ») n'apparaissait qu'environ 200 ms avant — soit 350 ms apres le debut de l'activite cerebrale preparatoire.",
                "Ces resultats suggerent que l'initiation du mouvement est un processus inconscient et que la conscience de la decision arrive trop tard pour en etre la cause. Libet lui-meme proposait cependant que la conscience conservait un « droit de veto » : le sujet pouvait encore annuler le mouvement dans les 150 ms restantes. Les experiences de Chun Siong Soon et al. (2008) utilisant l'IRMf et le decodage multivarié ont montre que l'activite prefrontale et parietale permettait de predire la decision (gauche ou droite) jusqu'a 7 secondes avant que le sujet n'en ait conscience."
              ],
              highlight: "L'experience de Libet (1983) a montre un decalage de 350 ms entre le debut du potentiel de prontitude cerebral et la prise de conscience de l'intention de bouger, suggerant que les « decisions » conscientes pourraient etre initiees par des processus neuronaux inconscients."
            },
            {
              title: "Critiques et reinterpretations",
              paragraphs: [
                "L'interpretation de Libet a ete vigoureusement critiquee. Aaron Schurger, Jacobo Sitt et Stanislas Dehaene ont propose en 2012 que le potentiel de prontitude reflete non pas une « decision inconsciente » mais des fluctuations aleatoires de l'activite neuronale qui, en atteignant un seuil, declenchent le mouvement. Dans ce modele stochastique, le sujet « decide » de bouger a un moment determine par le passage d'un seuil d'activation — il n'y a pas de decision inconsciente prealable, mais un processus de diffusion a un seuil.",
                "De plus, la validite du W-time de Libet — le moment ou le sujet rapporte avoir eu conscience de l'intention — est contestee. La mesure repose sur l'introspection et la lecture d'une horloge, deux processus eux-memes sujets a des erreurs systematiques. Patrick Haggard et Martin Eimer ont montre en 1999 que seul le potentiel de lateralisation (LRP), refletant la preparation motrice specifique, correle avec le W-time, pas le potentiel de prontitude general, suggerant que l'intention consciente est liee a la specification du mouvement, pas a sa decision generale."
              ]
            },
            {
              title: "Implications philosophiques et juridiques",
              paragraphs: [
                "Le debat sur le libre arbitre en neurosciences a des implications profondes pour le droit et la morale. Si nos decisions sont determinees par des processus neuronaux que nous ne controlons pas, la notion de responsabilite morale et penale est-elle encore tenable ? Le neuroscientifique Robert Sapolsky argumente dans « Determined » (2023) que le libre arbitre est une illusion et que le systeme juridique devrait se reformer en consequence. A l'inverse, Alfred Mele et d'autres philosophes de l'action soutiennent que les experiences de Libet ne refutent pas le libre arbitre, car celui-ci ne requiert pas que chaque intention soit initiee consciemment.",
                "La position compatibiliste, majoritaire en philosophie contemporaine (Daniel Dennett, compatibilisme), propose que le libre arbitre est compatible avec le determinisme : etre libre signifie agir selon ses propres desirs et raisons, sans contrainte exterieure, meme si ces desirs sont produits par des processus neuronaux deterministes. Les neurosciences ont egalement montre que la croyance au libre arbitre influence le comportement : Kathleen Vohs et Jonathan Schooler ont demontre en 2008 que les sujets exposes a des textes niant le libre arbitre trichent davantage et se montrent plus agressifs."
              ]
            }
          ],
          quiz: [
            { q: "Qu'a montre l'experience de Libet (1983) ?", opts: ["Que le libre arbitre existe", "Que l'activite cerebrale preparatoire precede la conscience de l'intention de 350 ms", "Que la conscience controle directement le mouvement", "Que le cerveau est plus lent qu'on le pensait"], correct: 1, explanation: "Libet a montre que le potentiel de prontitude debute environ 550 ms avant le mouvement, tandis que la conscience de l'intention n'apparait qu'a 200 ms, suggerant que l'initiation du mouvement est un processus inconscient." },
            { q: "Combien de temps a l'avance l'IRMf peut-elle predire une decision selon Soon et al. ?", opts: ['350 ms', '1 seconde', '7 secondes', '30 secondes'], correct: 2, explanation: "Soon et al. (2008) ont montre par IRMf et decodage multivarié que l'activite prefrontale et parietale permettait de predire la decision du sujet (gauche ou droite) jusqu'a 7 secondes avant sa prise de conscience." },
            { q: "Que propose le modele stochastique de Schurger et al. (2012) ?", opts: ["Que le libre arbitre est une illusion totale", "Que le potentiel de prontitude reflete des fluctuations neuronales aleatoires, pas une decision inconsciente", "Que toutes les decisions sont instantanees", "Que le cerveau ne prend pas de decisions"], correct: 1, explanation: "Schurger, Sitt et Dehaene ont propose que le potentiel de prontitude reflete des fluctuations stochastiques de l'activite neuronale qui, en atteignant un seuil, declenchent le mouvement — reinterpretant les resultats de Libet sans invoquer de « decision inconsciente »." },
            { q: "Qu'est-ce que le compatibilisme ?", opts: ["L'idee que le libre arbitre et le determinisme sont incompatibles", "L'idee que le libre arbitre est compatible avec le determinisme", "Le rejet de toute forme de libre arbitre", "Un modele neurobiologique du choix"], correct: 1, explanation: "Le compatibilisme soutient que le libre arbitre est compatible avec le determinisme : etre libre signifie agir selon ses propres desirs et raisons, sans contrainte exterieure, meme si ces desirs sont produits par des processus deterministes." },
            { q: "Quel « droit » Libet attribuait-il encore a la conscience ?", opts: ["Le droit d'initier les actions", "Le droit de veto sur les actions initiees inconsciemment", "Le droit de modifier les souvenirs", "Le droit de controler les emotions"], correct: 1, explanation: "Libet proposait que meme si l'initiation du mouvement est inconsciente, la conscience conserve un « droit de veto » : le sujet peut encore annuler le mouvement dans les 150 ms restantes avant l'execution, preservant une forme de controle volontaire." }
          ],
          definitions: [
            { term: 'Potentiel de prontitude', def: "Bereitschaftspotential : activite electrique cerebrale negative lente debutant 550 ms a 1 s avant un mouvement volontaire, refletant la preparation motrice dans l'aire motrice supplementaire et le cortex moteur." },
            { term: 'Compatibilisme', def: "Position philosophique selon laquelle le libre arbitre est compatible avec le determinisme : la liberte consiste a agir selon ses propres motivations sans contrainte exterieure, independamment de la question du determinisme neuronal." },
            { term: 'W-time', def: "Moment subjectif ou le sujet rapporte avoir eu conscience de son intention de bouger dans le paradigme de Libet, mesure par la position d'un point sur une horloge rotative." }
          ],
          memos: [
            { front: "L'experience de Libet en bref", back: "Libet (1983) : les sujets devaient bouger le poignet spontanement en notant le moment de leur intention. L'EEG montrait une preparation cerebrale 350 ms avant la conscience de l'intention, suggerant que le cerveau « decide » avant la conscience." },
            { front: "Croyance au libre arbitre et comportement", back: "Vohs et Schooler (2008) ont montre que les personnes exposees a des textes niant le libre arbitre trichaient davantage dans une tache de calcul mental. La croyance au libre arbitre semble favoriser le comportement prosocial et le sentiment de responsabilite." }
          ]
        },
        {
          slug: 'theories-conscience',
          title: 'Les theories de la conscience',
          description: "Les grandes theories scientifiques cherchant a expliquer comment le cerveau engendre l'experience consciente.",
          intro: "Plusieurs theories scientifiques s'affrontent pour expliquer comment l'activite neuronale engendre l'experience consciente. De la theorie de l'information integree de Giulio Tononi a la theorie de l'espace de travail global de Bernard Baars et Stanislas Dehaene, chacune propose des mecanismes differents et fait des predictions testables, rendant la conscience un objet d'etude scientifique a part entiere.",
          introHighlight: "Les theories de la conscience font des predictions testables et divergentes : la theorie de l'information integree predit que la conscience reside dans le « fond » (cortex posterieur), tandis que l'espace de travail global la situe dans le « front » (cortex prefrontal).",
          sections: [
            {
              title: "La theorie de l'information integree (IIT)",
              paragraphs: [
                "La theorie de l'information integree (Integrated Information Theory, IIT), proposee par Giulio Tononi en 2004, identifie la conscience avec un type specifique d'information : l'information integree, mesuree par la quantite Phi. Phi quantifie a quel point un systeme genere plus d'information en tant que tout qu'en tant que somme de ses parties. Un systeme ayant un Phi eleve — comme le cortex cerebral avec ses milliards de connexions reentrantes — est conscient, tandis qu'un systeme a faible integration (un disque dur, un cervelet) ne l'est pas.",
                "L'IIT fait des predictions precises et contraires a l'intuition. Elle predit que le cervelet (69 milliards de neurones mais architecture modulaire sans reentrances) n'est pas conscient, tandis que le cortex posterieur (la « zone chaude » identifiee par Christof Koch) est le substrat minimal de la conscience. L'IIT predit egalement que la conscience est graduelle (un thermostat a un Phi minuscule mais non nul) et qu'un systeme suffisamment integre est conscient quel que soit son substrat — une position panpsychiste que certains critiques jugent problematique."
              ],
              highlight: "La theorie IIT de Tononi predit que la conscience n'est pas liee au nombre de neurones mais a leur integration (Phi) : le cervelet, avec ses 69 milliards de neurones peu integres, ne serait pas conscient, tandis que des regions corticales plus petites mais integrees le seraient."
            },
            {
              title: "La theorie de l'espace de travail global",
              paragraphs: [
                "La theorie de l'espace de travail global (Global Workspace Theory, GWT), proposee par Bernard Baars en 1988 et developpee neuronalement par Stanislas Dehaene et Jean-Pierre Changeux sous le nom de Global Neuronal Workspace (GNW), propose que la conscience emerge lorsqu'une information est « diffusee » a travers un reseau fronto-parietal a un vaste ensemble de processeurs specialises. L'information inconsciente est traitee localement dans des modules specialises ; elle devient consciente lorsqu'elle est selectionnee et amplifiee par le reseau de l'espace de travail global.",
                "Dehaene a identifie une signature neuronale de la conscience : l'onde P3b, un potentiel evoque tardif (300-500 ms) distribue sur les electrodes frontales, accompagne d'une augmentation de la synchronisation gamma et d'une amplification non lineaire du signal (phenomene « tout-ou-rien » de l'ignition consciente). Le GNW predit que le cortex prefrontal est necessaire a la conscience, une prediction qui entre en conflit avec l'IIT (qui place la conscience dans le cortex posterieur). L'adversarial collaboration entre les equipes de Dehaene et Koch, financee par la Templeton World Charity Foundation, teste directement ces predictions."
              ]
            },
            {
              title: "Autres theories et tests empiriques",
              paragraphs: [
                "Plusieurs autres theories meritent d'etre mentionnees. La theorie des schemas attentionnels de Michael Graziano propose que la conscience est un modele interne que le cerveau construit pour representer et controler son propre processus d'attention. La theorie d'ordre superieur (Higher-Order Theories) de David Rosenthal stipule qu'un etat mental n'est conscient que s'il est l'objet d'une representation d'ordre superieur (une « pensee sur la pensee »). La theorie du traitement recurrent de Victor Lamme propose que la conscience emerge des boucles reentrantes entre aires corticales.",
                "Le projet COGITATE (2023) et les adversarial collaborations constituent une avancee methodologique majeure. Deux theories concurrentes (IIT et GNW) font des predictions divergentes testees dans le meme paradigme experimental, par des equipes independantes. Les resultats preliminaires (2023) montrent que la perception consciente est associee a une activation soutenue du cortex posterieur (favroisant l'IIT) sans l'implication prefrontale predite par le GNW, bien que les deux camps contestent l'interpretation. Ce programme de recherche illustre la maturation des sciences de la conscience en une discipline experimentale rigoureuse."
              ]
            }
          ],
          quiz: [
            { q: "Que mesure la quantite Phi dans la theorie IIT ?", opts: ["Le nombre de neurones actifs", "L'information integree generee par un systeme en tant que tout", "La frequence des oscillations gamma", "La quantite de neurotransmetteurs"], correct: 1, explanation: "Phi mesure la quantite d'information integree d'un systeme — combien le tout genere plus d'information que la somme de ses parties. Selon l'IIT, un systeme est conscient dans la mesure ou il a un Phi non nul." },
            { q: "Qui a propose la theorie de l'espace de travail global ?", opts: ['Giulio Tononi', 'Bernard Baars', 'David Chalmers', 'Francis Crick'], correct: 1, explanation: "Bernard Baars a propose la theorie de l'espace de travail global (GWT) en 1988, ensuite developpee neuronalement par Stanislas Dehaene et Jean-Pierre Changeux sous le nom de Global Neuronal Workspace (GNW)." },
            { q: "Quelle est la « signature neuronale de la conscience » selon Dehaene ?", opts: ["Le rythme alpha", "L'onde P3b avec ignition frontale et synchronisation gamma", "Le potentiel de prontitude", "Les fuseaux du sommeil"], correct: 1, explanation: "Dehaene a identifie la signature de la conscience comme l'onde P3b (potentiel evoque tardif a 300-500 ms) accompagnee d'une ignition non lineaire du reseau fronto-parietal et d'une synchronisation gamma a grande echelle." },
            { q: "Qu'est-ce que le « probleme difficile » de Chalmers ?", opts: ["La difficulte de mesurer l'activite neuronale", "La question de pourquoi les processus cerebraux produisent une experience subjective", "La complexite des circuits cerebraux", "Le cout de la recherche en neurosciences"], correct: 1, explanation: "Le « probleme difficile » (hard problem) de David Chalmers (1995) est la question de pourquoi et comment les processus cerebraux physiques s'accompagnent d'une experience subjective qualitative (qualia) — pourquoi il y a « quelque chose que cela fait » d'etre conscient." },
            { q: "Qu'est-ce que le projet COGITATE ?", opts: ["Un logiciel de simulation cerebrale", "Un test empirique des predictions divergentes de l'IIT et du GNW", "Un programme educatif", "Un scanner cerebral de nouvelle generation"], correct: 1, explanation: "COGITATE est un programme d'adversarial collaboration ou les theories IIT et GNW font des predictions divergentes testees dans le meme paradigme experimental par des equipes independantes, representant une approche methodologique novatrice pour les sciences de la conscience." }
          ],
          definitions: [
            { term: 'Phi', def: "Mesure de l'information integree dans la theorie IIT de Tononi, quantifiant combien un systeme genere plus d'information en tant que tout integre que comme somme de ses parties independantes." },
            { term: 'Espace de travail global', def: "Theorie de Baars et Dehaene selon laquelle la conscience emerge quand une information locale est selectionnee et « diffusee » a travers un reseau fronto-parietal a l'ensemble des modules cerebraux specialises." },
            { term: 'Probleme difficile de la conscience', def: "Question formulee par David Chalmers (1995) : pourquoi et comment les processus cerebraux physiques produisent-ils une experience subjective qualitative (qualia) — pourquoi le traitement de l'information s'accompagne-t-il d'un vecu conscient." }
          ],
          memos: [
            { front: "Le « probleme difficile » vs le « probleme facile »", back: "Chalmers distingue le « probleme facile » (expliquer les fonctions cognitives : attention, memoire, langage — difficile mais soluble en principe) du « probleme difficile » (expliquer pourquoi ces fonctions s'accompagnent d'une experience subjective). Le probleme difficile reste ouvert." },
            { front: "L'adversarial collaboration IIT vs GNW", back: "Financee par la Templeton Foundation, cette collaboration oppose les theories IIT (Tononi/Koch : conscience dans le cortex posterieur) et GNW (Dehaene : conscience dans le prefrontal). Les resultats de 2023 sont controverses mais cette approche represente un modele methodologique pour les sciences de la conscience." },
            { front: "Le panpsychisme et l'IIT", back: "L'IIT implique une forme de panpsychisme : tout systeme ayant un Phi non nul (meme un thermostat ou un photon) possede un degre minimal de conscience. Cette consequence, acceptee par Tononi, est controversee et constitue l'une des objections majeures a la theorie." }
          ]
        }
      ]
    }
  ]
};
