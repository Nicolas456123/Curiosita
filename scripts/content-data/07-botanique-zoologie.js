// Discipline definition: Botanique & Zoologie
// 6 hubs, 30 lessons — all content in French

module.exports = {
  slug: 'botanique-zoologie',
  title: 'Botanique & Zoologie',
  description: 'Découvrez le règne végétal et animal : classification, éthologie, biodiversité et écologie des espèces.',
  icon: '🌿',
  cat: 'Botanique & Zoologie',
  themeSlug: 'sciences-nature',
  accent: '#5daa68',
  accent2: '#7ec487',
  accentDim: 'rgba(93,170,104,0.1)',
  accentHero: 'rgba(93,170,104,0.08)',
  introTitle: 'Que sont la botanique et la zoologie ?',
  introText: 'La botanique et la zoologie sont les deux grandes branches des sciences du vivant consacrées respectivement à l\'étude des végétaux et des animaux. Depuis les premières classifications d\'Aristote et de Théophraste dans l\'Antiquité grecque, ces disciplines n\'ont cessé de se développer pour embrasser la diversité stupéfiante du monde vivant. Aujourd\'hui, elles intègrent la génétique moléculaire, l\'écologie des populations, l\'éthologie et la biologie de la conservation pour comprendre comment les organismes naissent, vivent, interagissent et évoluent au sein de leurs écosystèmes.',
  introHighlight: 'De la photosynthèse des plantes au comportement migratoire des oiseaux, la botanique et la zoologie nous révèlent les mécanismes fondamentaux de la vie sur Terre et les liens invisibles qui unissent tous les êtres vivants.',
  articleLow: 'la',
  hubs: [
    // ==================== HUB 1 : Botanique ====================
    {
      slug: 'botanique',
      title: 'Botanique',
      description: 'Étude des végétaux : photosynthèse, anatomie, reproduction, classification et rôle écologique des plantes.',
      lessons: [
        // --- Lesson 1.1 : La photosynthèse ---
        {
          slug: 'photosynthese',
          title: 'La photosynthèse',
          description: 'Le processus biochimique par lequel les plantes convertissent la lumière en énergie chimique.',
          intro: 'La photosynthèse est le processus fondamental par lequel les organismes photosynthétiques — plantes, algues et cyanobactéries — capturent l\'énergie lumineuse pour synthétiser des molécules organiques à partir de dioxyde de carbone et d\'eau. Ce mécanisme, apparu il y a environ 2,7 milliards d\'années, a transformé l\'atmosphère terrestre en y libérant de l\'oxygène et constitue la base de presque toutes les chaînes alimentaires sur Terre.',
          introHighlight: 'La photosynthèse produit chaque année environ 100 milliards de tonnes de matière organique et libère l\'oxygène indispensable à la vie aérobie.',
          intro2: '',
          sections: [
            {
              title: 'La phase lumineuse',
              paragraphs: [
                'La phase lumineuse se déroule dans les thylakoïdes des chloroplastes. La chlorophylle a et les pigments accessoires (chlorophylle b, caroténoïdes) absorbent les photons et transfèrent leur énergie aux centres réactionnels des photosystèmes II (PSII) et I (PSI). Au niveau du PSII, l\'eau est oxydée en oxygène moléculaire (O₂), libérant des protons et des électrons.',
                'Les électrons circulent le long de la chaîne de transport d\'électrons, passant par la plastoquinone, le complexe cytochrome b6f et la plastocyanine avant d\'atteindre le PSI. Ce transfert génère un gradient de protons à travers la membrane thylakoïdale, utilisé par l\'ATP synthase pour produire de l\'ATP par chimiosmose.',
                'Au niveau du PSI, les électrons sont réénergisés par la lumière et transférés via la ferrédoxine à l\'enzyme NADP⁺ réductase, qui réduit le NADP⁺ en NADPH. L\'ATP et le NADPH produits constituent le « pouvoir assimilateur » utilisé lors de la phase sombre.'
              ],
              highlight: 'La photolyse de l\'eau au niveau du photosystème II est la source de tout l\'oxygène atmosphérique produit par la photosynthèse.'
            },
            {
              title: 'Le cycle de Calvin',
              paragraphs: [
                'Le cycle de Calvin, ou phase sombre, se déroule dans le stroma du chloroplaste. Il ne nécessite pas directement la lumière mais dépend de l\'ATP et du NADPH produits lors de la phase lumineuse. L\'enzyme RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygénase) fixe le CO₂ atmosphérique sur une molécule de ribulose-1,5-bisphosphate (RuBP) à cinq carbones.',
                'Cette fixation produit deux molécules de 3-phosphoglycérate (3-PGA) à trois carbones, qui sont ensuite réduites en glycéraldéhyde-3-phosphate (G3P) grâce à l\'ATP et au NADPH. Sur six tours de cycle (fixant six CO₂), un G3P net est exporté pour la synthèse de glucose et d\'autres molécules organiques, tandis que les cinq autres régénèrent le RuBP.',
                'La RuBisCO est l\'enzyme la plus abondante sur Terre, représentant environ 50 % des protéines foliaires. Cependant, elle présente une faible spécificité et peut fixer l\'O₂ au lieu du CO₂ dans un processus appelé photorespiration, qui réduit l\'efficacité photosynthétique de 20 à 30 % chez les plantes en C3.'
              ],
              highlight: 'La RuBisCO, qui fixe le CO₂ dans le cycle de Calvin, est la protéine la plus abondante de la biosphère.'
            },
            {
              title: 'Les voies C4 et CAM',
              paragraphs: [
                'Les plantes en C4 (maïs, canne à sucre, sorgho) ont développé un mécanisme de concentration du CO₂ pour contourner la photorespiration. Dans les cellules du mésophylle, le CO₂ est d\'abord fixé par la PEP carboxylase en oxaloacétate (un acide à quatre carbones), puis converti en malate et transporté vers les cellules de la gaine périvasculaire où le CO₂ est relâché et fixé par la RuBisCO à forte concentration.',
                'Les plantes CAM (Crassulacean Acid Metabolism), comme les cactus, les agaves et les orchidées épiphytes, ouvrent leurs stomates la nuit pour fixer le CO₂ en acide malique stocké dans les vacuoles. Le jour, stomates fermés pour limiter la perte d\'eau, le malate est décarboxylé et le CO₂ alimente le cycle de Calvin. Cette adaptation permet la survie dans les milieux arides.',
                'Ces adaptations illustrent la pression sélective exercée par les environnements chauds et secs. Les plantes C4 représentent seulement 3 % des espèces végétales mais assurent environ 25 % de la fixation globale de carbone, grâce à leur efficacité supérieure en conditions de forte luminosité et de température élevée.'
              ],
              highlight: 'Les plantes C4 ne représentent que 3 % des espèces végétales mais assurent environ 25 % de la fixation globale du carbone.'
            }
          ],
          quiz: [
            { q: 'Où se déroule la phase lumineuse de la photosynthèse ?', opts: ['Dans le stroma', 'Dans les thylakoïdes', 'Dans le cytoplasme', 'Dans le noyau'], correct: 1, explanation: 'La phase lumineuse a lieu dans les membranes thylakoïdales des chloroplastes, où sont localisés les photosystèmes I et II.' },
            { q: 'Quelle enzyme fixe le CO₂ dans le cycle de Calvin ?', opts: ['La PEP carboxylase', 'La RuBisCO', 'L\'ATP synthase', 'La NADP⁺ réductase'], correct: 1, explanation: 'La RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygénase) catalyse la fixation du CO₂ sur le RuBP dans le cycle de Calvin.' },
            { q: 'Quelle adaptation les plantes CAM utilisent-elles pour économiser l\'eau ?', opts: ['Elles ferment leurs stomates la nuit', 'Elles ouvrent leurs stomates uniquement la nuit', 'Elles n\'ont pas de stomates', 'Elles absorbent le CO₂ par les racines'], correct: 1, explanation: 'Les plantes CAM ouvrent leurs stomates la nuit pour fixer le CO₂ et les ferment le jour pour minimiser l\'évapotranspiration.' }
          ],
          definitions: [
            { term: 'Photosynthèse', def: 'Processus biochimique par lequel les organismes chlorophylliens convertissent l\'énergie lumineuse en énergie chimique, synthétisant des glucides à partir de CO₂ et d\'eau, avec libération d\'O₂.' },
            { term: 'Chloroplaste', def: 'Organite cellulaire végétal délimité par une double membrane, contenant les thylakoïdes et le stroma, siège de la photosynthèse.' },
            { term: 'RuBisCO', def: 'Ribulose-1,5-bisphosphate carboxylase/oxygénase : enzyme clé du cycle de Calvin qui catalyse la fixation du CO₂ atmosphérique. C\'est la protéine la plus abondante sur Terre.' },
            { term: 'Photorespiration', def: 'Processus métabolique dans lequel la RuBisCO fixe l\'O₂ au lieu du CO₂, produisant du glycolate et réduisant le rendement photosynthétique.' },
            { term: 'Thylakoïde', def: 'Système membranaire interne du chloroplaste, organisé en disques empilés (grana), siège des réactions photochimiques de la photosynthèse.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Un grand chêne produit environ 100 000 litres d\'oxygène par an, soit la consommation annuelle de deux à trois personnes.' },
            { front: '💡 Le savais-tu ?', back: 'La chlorophylle apparaît verte parce qu\'elle absorbe principalement la lumière rouge et bleue et réfléchit le vert — la couleur la moins utile énergétiquement pour elle.' },
            { front: '💡 Le savais-tu ?', back: 'La RuBisCO est si lente (environ 3 fixations de CO₂ par seconde) que les plantes doivent en produire des quantités énormes : elle représente jusqu\'à 50 % des protéines d\'une feuille.' }
          ]
        },
        // --- Lesson 1.2 : L'anatomie végétale ---
        {
          slug: 'anatomie-vegetale',
          title: 'L\'anatomie végétale',
          description: 'La structure interne des plantes : racines, tiges, feuilles et tissus conducteurs.',
          intro: 'L\'anatomie végétale étudie l\'organisation interne des plantes vasculaires, depuis les cellules spécialisées jusqu\'aux organes complets. Comprendre la structure des racines, des tiges et des feuilles permet de saisir comment les plantes absorbent l\'eau et les minéraux, transportent la sève, réalisent la photosynthèse et assurent leur soutien mécanique.',
          introHighlight: 'Un arbre de 30 mètres fait monter l\'eau de ses racines jusqu\'à sa cime grâce à un système vasculaire d\'une efficacité remarquable.',
          intro2: '',
          sections: [
            {
              title: 'Les tissus végétaux fondamentaux',
              paragraphs: [
                'Les plantes vasculaires possèdent trois systèmes de tissus principaux. Le tissu dermique (épiderme, périderme) forme la couverture protectrice externe. Le tissu fondamental (parenchyme, collenchyme, sclérenchyme) assure le stockage, le soutien mécanique et la photosynthèse. Le tissu vasculaire (xylème et phloème) conduit l\'eau, les minéraux et les sucres à travers la plante.',
                'Le parenchyme est le tissu le plus répandu : ses cellules vivantes à paroi mince assurent la photosynthèse (chlorenchyme), le stockage d\'amidon et la cicatrisation. Le collenchyme, avec ses parois épaissies de façon inégale, confère une résistance flexible aux organes en croissance. Le sclérenchyme, composé de fibres et de sclérites aux parois lignifiées, fournit un soutien rigide et permanent.',
                'Les méristèmes sont les zones de division cellulaire active. Les méristèmes apicaux, situés aux extrémités des tiges et des racines, assurent la croissance en longueur (croissance primaire). Les méristèmes latéraux — cambium vasculaire et phellogène — permettent la croissance en épaisseur (croissance secondaire) chez les plantes ligneuses.'
              ],
              highlight: 'Les méristèmes sont les seules régions de la plante où les cellules se divisent activement, permettant une croissance continue tout au long de la vie.'
            },
            {
              title: 'Le système vasculaire : xylème et phloème',
              paragraphs: [
                'Le xylème transporte l\'eau et les sels minéraux (sève brute) des racines vers les parties aériennes. Ses éléments conducteurs — trachéides et éléments de vaisseau — sont des cellules mortes dont les parois lignifiées forment des tubes creux. La montée de la sève brute s\'explique par la théorie de la cohésion-tension : l\'évapotranspiration au niveau des feuilles crée une tension qui tire la colonne d\'eau, maintenue par les forces de cohésion entre molécules d\'eau.',
                'Le phloème transporte la sève élaborée, riche en saccharose et en acides aminés, depuis les organes sources (feuilles matures) vers les organes puits (racines, fruits, méristèmes). Ses éléments conducteurs, les tubes criblés, sont des cellules vivantes mais anucléées, associées à des cellules compagnes qui assurent leur fonctionnement métabolique. Le transport dans le phloème suit un gradient de pression osmotique selon le modèle de Münch.',
                'Chez les plantes ligneuses, le cambium vasculaire produit du xylème secondaire (bois) vers l\'intérieur et du phloème secondaire (liber) vers l\'extérieur. L\'accumulation annuelle de xylème forme les cernes de croissance, dont l\'analyse (dendrochronologie) permet de reconstituer le climat passé et de dater des événements historiques.'
              ],
              highlight: 'L\'eau monte dans le xylème grâce à la transpiration foliaire, qui génère une tension capable de tirer une colonne d\'eau sur plus de 100 mètres.'
            },
            {
              title: 'La feuille : organe de la photosynthèse',
              paragraphs: [
                'La feuille est l\'organe principal de la photosynthèse et des échanges gazeux. L\'épiderme supérieur, recouvert d\'une cuticule cireuse imperméable, limite la perte d\'eau. L\'épiderme inférieur porte les stomates, des pores bordés de deux cellules de garde qui régulent les échanges de CO₂, d\'O₂ et de vapeur d\'eau.',
                'Le mésophylle, tissu photosynthétique de la feuille, comprend le parenchyme palissadique (cellules allongées et riches en chloroplastes, situées sous l\'épiderme supérieur) et le parenchyme lacuneux (cellules irrégulières séparées par de vastes espaces intercellulaires facilitant la diffusion des gaz). Les nervures, constituées de faisceaux vasculaires, parcourent le mésophylle et assurent l\'approvisionnement en eau et l\'exportation des sucres.',
                'La régulation stomatique est un compromis vital : l\'ouverture des stomates permet l\'entrée du CO₂ nécessaire à la photosynthèse, mais provoque une perte d\'eau par transpiration. Une plante de maïs peut transpirer jusqu\'à 200 litres d\'eau pour produire un kilogramme de matière sèche.'
              ],
              highlight: 'Un stomate s\'ouvre et se ferme des milliers de fois par jour, régulant un compromis permanent entre capture du CO₂ et conservation de l\'eau.'
            }
          ],
          quiz: [
            { q: 'Quel tissu assure le transport de la sève brute ?', opts: ['Le phloème', 'Le xylème', 'Le parenchyme', 'Le collenchyme'], correct: 1, explanation: 'Le xylème transporte la sève brute (eau et sels minéraux) des racines vers les parties aériennes de la plante.' },
            { q: 'Où se trouvent principalement les stomates ?', opts: ['Sur l\'épiderme supérieur', 'Sur l\'épiderme inférieur', 'Dans le mésophylle', 'Dans les nervures'], correct: 1, explanation: 'Les stomates sont majoritairement situés sur l\'épiderme inférieur des feuilles, ce qui limite l\'exposition directe au soleil et réduit la transpiration.' },
            { q: 'Quel méristème assure la croissance en épaisseur ?', opts: ['Le méristème apical', 'Le cambium vasculaire', 'Le parenchyme', 'L\'épiderme'], correct: 1, explanation: 'Le cambium vasculaire est un méristème latéral qui produit du xylème secondaire (bois) et du phloème secondaire (liber), assurant la croissance en épaisseur.' }
          ],
          definitions: [
            { term: 'Xylème', def: 'Tissu vasculaire qui transporte la sève brute (eau et sels minéraux) des racines vers les organes aériens, constitué de cellules mortes à parois lignifiées.' },
            { term: 'Phloème', def: 'Tissu vasculaire qui transporte la sève élaborée (sucres et acides aminés) des organes sources vers les organes puits, constitué de tubes criblés et de cellules compagnes.' },
            { term: 'Méristème', def: 'Zone de tissu végétal composée de cellules indifférenciées en division active, responsable de la croissance de la plante.' },
            { term: 'Stomate', def: 'Pore microscopique de l\'épiderme foliaire bordé de deux cellules de garde, permettant les échanges gazeux (CO₂, O₂, H₂O) entre la feuille et l\'atmosphère.' },
            { term: 'Parenchyme', def: 'Tissu végétal fondamental composé de cellules vivantes à paroi mince, assurant la photosynthèse, le stockage et la cicatrisation.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le séquoia géant (Sequoiadendron giganteum) peut atteindre 85 mètres de haut et faire monter l\'eau sur toute cette distance grâce à la seule force de la transpiration et de la cohésion moléculaire de l\'eau.' },
            { front: '💡 Le savais-tu ?', back: 'Une feuille de tournesol possède environ 12 000 stomates par centimètre carré sur sa face inférieure, soit des millions de micropores régulant en permanence les échanges gazeux.' },
            { front: '💡 Le savais-tu ?', back: 'Les cernes d\'un arbre ne reflètent pas seulement son âge : un cerne large indique une année favorable, tandis qu\'un cerne étroit témoigne d\'une sécheresse, d\'un gel ou d\'une attaque parasitaire.' }
          ]
        },
        // --- Lesson 1.3 : La reproduction des plantes ---
        {
          slug: 'reproduction-vegetale',
          title: 'La reproduction des plantes',
          description: 'Les stratégies de reproduction sexuée et asexuée dans le règne végétal.',
          intro: 'La reproduction des plantes revêt une diversité remarquable, allant de la simple fragmentation végétative à l\'élaboration de fleurs complexes attirant des pollinisateurs spécifiques. Les plantes à fleurs (angiospermes), qui dominent les écosystèmes terrestres avec plus de 300 000 espèces, ont développé des stratégies de pollinisation et de dissémination des graines d\'une ingéniosité extraordinaire.',
          introHighlight: 'Les angiospermes représentent environ 90 % des plantes terrestres et doivent leur succès évolutif à la fleur, organe reproducteur qui a révolutionné la coévolution avec les animaux pollinisateurs.',
          intro2: '',
          sections: [
            {
              title: 'La fleur et la pollinisation',
              paragraphs: [
                'La fleur est l\'organe reproducteur des angiospermes. Elle se compose typiquement de quatre verticilles : les sépales (calice), les pétales (corolle), les étamines (androcée, organes mâles produisant le pollen) et le pistil (gynécée, organe femelle contenant les ovules). Le pistil comprend le stigmate (surface réceptrice du pollen), le style (tube conducteur) et l\'ovaire (contenant un ou plusieurs ovules).',
                'La pollinisation est le transfert du pollen des étamines vers le stigmate. La pollinisation entomophile (par les insectes) concerne environ 80 % des plantes à fleurs. Les plantes attirent leurs pollinisateurs par la couleur, le parfum, le nectar et la forme de leurs fleurs. La pollinisation anémophile (par le vent), caractéristique des graminées et de nombreux arbres, repose sur la production massive de pollen léger et de stigmates plumeux.',
                'La double fécondation est une caractéristique unique des angiospermes. Un grain de pollen germe sur le stigmate et développe un tube pollinique qui libère deux spermatozoïdes : l\'un féconde l\'oosphère pour former l\'embryon (zygote diploïde), l\'autre fusionne avec les deux noyaux polaires pour produire l\'albumen triploïde, tissu nourricier de la graine.'
              ],
              highlight: 'La double fécondation est une exclusivité des plantes à fleurs : elle produit simultanément l\'embryon et son tissu nourricier, l\'albumen.'
            },
            {
              title: 'La graine et la dissémination',
              paragraphs: [
                'Après la fécondation, l\'ovule se transforme en graine et l\'ovaire en fruit. La graine contient l\'embryon, des réserves nutritives (albumen ou cotylédons) et un tégument protecteur. Elle peut entrer en dormance et résister à des conditions défavorables pendant des mois, des années, voire des siècles.',
                'La dissémination (ou dispersion) des graines éloigne la descendance de la plante mère, réduisant la compétition. L\'anémochorie (par le vent) utilise des structures ailées (érable) ou plumeuses (pissenlit). La zoochorie (par les animaux) exploite des fruits charnus attractifs (endozoochorie) ou des crochets d\'accrochage (épizoochorie). L\'hydrochorie (par l\'eau), la barochorie (par gravité) et l\'autochorie (propulsion mécanique) complètent ces stratégies.',
                'La germination de la graine se déclenche lorsque les conditions d\'humidité, de température et parfois de lumière sont favorables. L\'imbibition d\'eau active les enzymes qui mobilisent les réserves, permettant la croissance de la radicule (future racine) puis de la tigelle (future tige). Certaines graines nécessitent une stratification (exposition au froid) ou une scarification (usure du tégument) pour lever leur dormance.'
              ],
              highlight: 'Des graines de lotus (Nelumbo nucifera) vieilles de 1 300 ans ont germé après leur découverte dans un lac asséché en Chine, témoignant d\'une longévité exceptionnelle.'
            },
            {
              title: 'La reproduction asexuée',
              paragraphs: [
                'La multiplication végétative permet aux plantes de se reproduire sans fécondation, produisant des clones génétiquement identiques à la plante mère. Les stolons (fraisier), les rhizomes (iris, bambou), les tubercules (pomme de terre), les bulbes (tulipe) et les drageons (peuplier) sont autant de structures spécialisées assurant cette reproduction clonale.',
                'L\'apomixie est une forme de reproduction asexuée par graines, où l\'embryon se développe sans fécondation. Elle est présente chez certaines graminées (Poa pratensis), les pissenlits (Taraxacum) et les agrumes. Cette stratégie garantit la transmission fidèle du génotype maternel tout en bénéficiant de la dispersion par graines.',
                'L\'horticulture exploite largement la multiplication végétative par bouturage, greffage et marcottage. Le bouturage consiste à faire enraciner un fragment de plante. Le greffage associe le système racinaire d\'un porte-greffe robuste à la partie aérienne (greffon) d\'une variété productive. Ces techniques permettent de multiplier à l\'identique des variétés sélectionnées pour leurs qualités agronomiques.'
              ],
              highlight: 'Un peuplier faux-tremble de l\'Utah (Pando) forme un clone de 47 000 troncs interconnectés par un même réseau racinaire, ce qui en fait l\'un des plus grands organismes vivants.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que la double fécondation ?', opts: ['Deux ovules fécondés simultanément', 'Deux spermatozoïdes fécondant l\'oosphère et les noyaux polaires', 'Deux grains de pollen fécondant un ovule', 'La fécondation dans deux fleurs différentes'], correct: 1, explanation: 'La double fécondation est la fusion d\'un spermatozoïde avec l\'oosphère (→ embryon) et d\'un autre avec les deux noyaux polaires (→ albumen triploïde).' },
            { q: 'Comment s\'appelle la dissémination des graines par les animaux ?', opts: ['Anémochorie', 'Hydrochorie', 'Zoochorie', 'Autochorie'], correct: 2, explanation: 'La zoochorie est la dissémination des graines par les animaux, soit par ingestion des fruits (endozoochorie), soit par accrochage au pelage (épizoochorie).' },
            { q: 'Quelle structure permet au fraisier de se multiplier végétativement ?', opts: ['Les rhizomes', 'Les stolons', 'Les tubercules', 'Les bulbes'], correct: 1, explanation: 'Le fraisier produit des stolons, tiges rampantes qui s\'enracinent à distance de la plante mère pour former de nouveaux individus clonaux.' }
          ],
          definitions: [
            { term: 'Angiosperme', def: 'Plante à fleurs dont les ovules sont enfermés dans un ovaire qui se transforme en fruit après fécondation. Les angiospermes regroupent plus de 300 000 espèces.' },
            { term: 'Pollinisation', def: 'Transfert du pollen des étamines vers le stigmate d\'une fleur, permettant la fécondation. Elle peut être assurée par le vent, les insectes, les oiseaux ou d\'autres vecteurs.' },
            { term: 'Double fécondation', def: 'Mécanisme propre aux angiospermes où deux spermatozoïdes fécondent respectivement l\'oosphère (→ zygote) et les noyaux polaires (→ albumen triploïde).' },
            { term: 'Dormance', def: 'État physiologique de la graine dans lequel la germination est suspendue malgré des conditions extérieures favorables, permettant la survie prolongée.' },
            { term: 'Multiplication végétative', def: 'Mode de reproduction asexuée par lequel une plante produit de nouveaux individus génétiquement identiques à partir de ses organes végétatifs (stolons, rhizomes, tubercules, etc.).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'orchidée Ophrys apifera imite si bien l\'apparence et l\'odeur d\'une abeille femelle que les mâles tentent de s\'accoupler avec la fleur, assurant ainsi la pollinisation par pseudocopulation.' },
            { front: '💡 Le savais-tu ?', back: 'Un seul épi de maïs libère environ 25 millions de grains de pollen, mais un seul grain suffit à féconder un ovule pour former un grain de maïs.' },
            { front: '💡 Le savais-tu ?', back: 'Le cocotier (Cocos nucifera) est un champion de l\'hydrochorie : ses noix de coco peuvent flotter pendant des mois et germer après avoir traversé des océans entiers.' }
          ]
        },
        // --- Lesson 1.4 : La classification des plantes ---
        {
          slug: 'classification-vegetale',
          title: 'La classification des plantes',
          description: 'L\'organisation systématique du règne végétal, des bryophytes aux angiospermes.',
          intro: 'La classification des plantes reflète l\'histoire évolutive du règne végétal, depuis les premières algues vertes colonisant les terres émergées il y a environ 470 millions d\'années jusqu\'aux angiospermes qui dominent les paysages actuels. La systématique végétale moderne, fondée sur la phylogénétique moléculaire, distingue les grandes lignées par leurs innovations clés : la cuticule, les vaisseaux conducteurs, les graines et les fleurs.',
          introHighlight: 'Le règne végétal comprend environ 400 000 espèces décrites, dont plus de 300 000 angiospermes, témoignant du succès spectaculaire des plantes à fleurs.',
          intro2: '',
          sections: [
            {
              title: 'Les bryophytes : plantes sans vaisseaux',
              paragraphs: [
                'Les bryophytes regroupent les mousses (Bryophyta), les hépatiques (Marchantiophyta) et les anthocérotes (Anthocerotophyta). Ce sont les plantes terrestres les plus anciennes dans la lignée évolutive encore présente aujourd\'hui. Dépourvues de vaisseaux conducteurs véritables, elles absorbent l\'eau et les minéraux directement par leurs surfaces et restent de petite taille.',
                'Le cycle de vie des bryophytes est dominé par le gamétophyte (haploïde, n), qui porte les organes sexuels : les anthéridies (mâles) produisant des spermatozoïdes flagellés et les archégones (femelles) contenant l\'oosphère. La fécondation nécessite la présence d\'eau liquide. Le sporophyte (diploïde, 2n), dépendant du gamétophyte, produit des spores par méiose.',
                'Malgré leur apparente simplicité, les bryophytes jouent des rôles écologiques majeurs. Les sphaignes (Sphagnum) forment les tourbières qui stockent environ un tiers du carbone terrestre des sols. Les mousses contribuent à la rétention d\'eau, à la prévention de l\'érosion et servent de pionnières dans la colonisation des substrats rocheux.'
              ],
              highlight: 'Les tourbières à sphaignes couvrent 3 % des terres émergées mais stockent environ un tiers du carbone mondial des sols.'
            },
            {
              title: 'Les ptéridophytes et les gymnospermes',
              paragraphs: [
                'Les ptéridophytes (fougères, prêles, lycopodes) ont été les premières plantes à développer un système vasculaire véritable (xylème et phloème), permettant un transport efficace de l\'eau et une croissance en hauteur significative. Au Carbonifère (il y a 350 à 300 millions d\'années), les forêts de fougères arborescentes et de lycopodes géants ont formé les dépôts de charbon exploités aujourd\'hui.',
                'Les gymnospermes (« graines nues ») comprennent les conifères (pins, sapins, épicéas), les cycadales, les ginkgos et les gnétales. Leur innovation majeure est la graine, qui affranchit la reproduction de la dépendance à l\'eau libre pour la fécondation. Le pollen, transporté par le vent, assure la fécondation à distance. Les graines ne sont pas enfermées dans un fruit mais portées par des écailles (cônes).',
                'Les conifères dominent encore de vastes biomes : la taïga boréale, qui s\'étend sur 15 millions de kilomètres carrés autour du cercle arctique, constitue le plus grand biome terrestre et le plus grand puits de carbone forestier. Les séquoias, les plus grands arbres du monde, sont des gymnospermes pouvant vivre plus de 3 000 ans.'
              ],
              highlight: 'La taïga boréale, dominée par les conifères, couvre 15 millions de km² et constitue le plus grand biome terrestre.'
            },
            {
              title: 'Les angiospermes : la radiation évolutive',
              paragraphs: [
                'Les angiospermes (plantes à fleurs) sont apparues au Crétacé inférieur, il y a environ 130 millions d\'années, et ont connu une diversification explosive que Darwin qualifiait d\'« abominable mystère ». Leur succès repose sur plusieurs innovations : la fleur (attirant les pollinisateurs), le fruit (protégeant et dispersant les graines), les vaisseaux du xylème (transport d\'eau plus efficace) et la double fécondation (albumen nourricier).',
                'Les angiospermes se divisent en deux grands groupes : les monocotylédones (un cotylédon, nervures parallèles, pièces florales par multiples de trois — graminées, orchidées, palmiers) et les eudicotylédones (deux cotylédons, nervures ramifiées, pièces florales par multiples de quatre ou cinq — rosacées, fabacées, astéracées).',
                'La coévolution entre plantes à fleurs et pollinisateurs a engendré une diversification mutuelle spectaculaire. Les abeilles, les papillons, les colibris et même les chauves-souris ont coévolué avec des fleurs présentant des formes, des couleurs et des odeurs spécifiques. Cette interdépendance étroite explique en partie la richesse extraordinaire de la biodiversité terrestre.'
              ],
              highlight: 'Darwin qualifiait la diversification rapide des angiospermes au Crétacé d\'« abominable mystère », un débat scientifique toujours ouvert.'
            }
          ],
          quiz: [
            { q: 'Quelle est la caractéristique principale des bryophytes ?', opts: ['Elles produisent des graines', 'Elles sont dépourvues de vaisseaux conducteurs', 'Elles possèdent des fleurs', 'Elles sont toutes aquatiques'], correct: 1, explanation: 'Les bryophytes sont des plantes non vasculaires : elles n\'ont pas de xylème ni de phloème véritables et absorbent l\'eau par diffusion directe.' },
            { q: 'Quelle innovation clé des gymnospermes les distingue des fougères ?', opts: ['La fleur', 'Le fruit', 'La graine', 'Le xylème'], correct: 2, explanation: 'Les gymnospermes sont les premières plantes à graines, ce qui affranchit leur reproduction de la nécessité d\'eau libre pour la fécondation.' },
            { q: 'Quel groupe contient le plus d\'espèces végétales ?', opts: ['Les bryophytes', 'Les ptéridophytes', 'Les gymnospermes', 'Les angiospermes'], correct: 3, explanation: 'Les angiospermes (plantes à fleurs) comprennent plus de 300 000 espèces décrites, soit environ 90 % des plantes terrestres.' }
          ],
          definitions: [
            { term: 'Bryophyte', def: 'Plante terrestre non vasculaire (mousse, hépatique, anthocérote) dont le cycle de vie est dominé par le gamétophyte et dont la fécondation nécessite l\'eau.' },
            { term: 'Ptéridophyte', def: 'Plante vasculaire sans graine (fougère, prêle, lycopode) se reproduisant par spores.' },
            { term: 'Gymnosperme', def: 'Plante à graines nues, non enfermées dans un fruit. Comprend les conifères, cycadales, ginkgos et gnétales.' },
            { term: 'Angiosperme', def: 'Plante à fleurs dont les ovules sont enfermés dans un ovaire qui se transforme en fruit après fécondation.' },
            { term: 'Gamétophyte', def: 'Phase haploïde (n) du cycle de vie d\'une plante, produisant les gamètes par mitose. Dominant chez les bryophytes, réduit chez les plantes à graines.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Ginkgo biloba est le dernier survivant d\'un groupe de gymnospermes apparu il y a 270 millions d\'années. Qualifié de « fossile vivant », il a survécu aux dinosaures et même à la bombe atomique d\'Hiroshima.' },
            { front: '💡 Le savais-tu ?', back: 'Les orchidées (Orchidaceae) forment la plus grande famille de plantes à fleurs, avec environ 28 000 espèces — plus que les mammifères, les oiseaux et les reptiles réunis.' },
            { front: '💡 Le savais-tu ?', back: 'Les forêts houillères du Carbonifère, dominées par des lycopodes géants (Lepidodendron) de 40 mètres de haut, ont formé les gisements de charbon qui alimentèrent la révolution industrielle 300 millions d\'années plus tard.' }
          ]
        },
        // --- Lesson 1.5 : Les écosystèmes végétaux ---
        {
          slug: 'ecosystemes-vegetaux',
          title: 'Les écosystèmes végétaux',
          description: 'Les grands biomes terrestres et le rôle structurant des plantes dans les écosystèmes.',
          intro: 'Les plantes sont les principaux producteurs primaires des écosystèmes terrestres, transformant l\'énergie solaire en biomasse et créant les habitats dont dépendent la quasi-totalité des autres organismes. Des forêts tropicales aux toundras arctiques, les communautés végétales définissent les grands biomes de la planète et jouent un rôle crucial dans les cycles biogéochimiques globaux.',
          introHighlight: 'Les plantes terrestres stockent environ 450 gigatonnes de carbone dans leur biomasse, jouant un rôle essentiel dans la régulation du climat global.',
          intro2: '',
          sections: [
            {
              title: 'Les forêts : poumons verts de la planète',
              paragraphs: [
                'Les forêts couvrent environ 31 % des terres émergées (4,06 milliards d\'hectares) et abritent plus de 80 % de la biodiversité terrestre. La forêt tropicale humide, malgré une superficie de seulement 7 % des terres, abrite plus de la moitié des espèces végétales et animales connues. Sa canopée, culminant à 30-50 mètres, crée des strates verticales distinctes offrant une multiplicité de niches écologiques.',
                'La forêt boréale (taïga) et les forêts tempérées jouent un rôle majeur dans le cycle du carbone. Les forêts absorbent annuellement environ 2,6 milliards de tonnes de CO₂, soit environ 30 % des émissions anthropiques. Cependant, la déforestation tropicale libère environ 4,8 milliards de tonnes de CO₂ par an, transformant certaines régions de sources nettes de carbone en puits.',
                'La succession écologique décrit l\'évolution naturelle de la végétation au fil du temps. Après une perturbation (incendie, défrichement), la succession primaire commence par les lichens et les mousses (espèces pionnières), suivis des herbes, des arbustes, puis des arbres. La forêt climacique, stade théorique d\'équilibre, peut mettre plusieurs siècles à s\'établir.'
              ],
              highlight: 'Les forêts tropicales humides, sur 7 % des terres émergées, abritent plus de la moitié de toutes les espèces vivantes connues.'
            },
            {
              title: 'Les prairies, savanes et déserts',
              paragraphs: [
                'Les prairies (steppes, pampas, veld) se développent dans les régions à précipitations modérées (250 à 900 mm/an) insuffisantes pour soutenir la croissance forestière. Dominées par les graminées, elles stockent l\'essentiel de leur carbone dans les sols plutôt que dans la biomasse aérienne. Les sols de prairie (chernozem, mollisol) comptent parmi les plus fertiles du monde et soutiennent une grande partie de l\'agriculture mondiale.',
                'Les savanes tropicales se caractérisent par une strate herbacée continue ponctuée d\'arbres dispersés, maintenues par l\'interaction entre le feu, le pâturage et la sécheresse saisonnière. La savane africaine abrite les plus grandes concentrations de grands mammifères de la planète. Les baobabs (Adansonia), emblématiques de la savane, peuvent vivre plus de 2 000 ans et stocker jusqu\'à 120 000 litres d\'eau dans leur tronc.',
                'Les déserts, recevant moins de 250 mm de précipitations annuelles, couvrent environ un tiers des terres émergées. Leurs plantes, les xérophytes, présentent des adaptations remarquables : feuilles réduites en épines (cactus), cuticule épaisse, racines profondes (Welwitschia mirabilis atteignant 30 mètres), tissus succulents de stockage d\'eau et métabolisme CAM.'
              ],
              highlight: 'Le baobab africain peut stocker jusqu\'à 120 000 litres d\'eau dans son tronc spongieux, véritable réservoir vivant en milieu aride.'
            },
            {
              title: 'Les interactions plantes-organismes',
              paragraphs: [
                'Les mycorhizes sont des associations symbiotiques entre les racines des plantes et les champignons du sol. Présentes chez environ 90 % des plantes vasculaires, elles augmentent considérablement la surface d\'absorption racinaire. Le réseau mycorhizien, surnommé « Wood Wide Web », permet le transfert de nutriments et de signaux chimiques entre arbres d\'une même forêt, y compris entre espèces différentes.',
                'La fixation biologique de l\'azote, assurée par des bactéries du genre Rhizobium dans les nodosités racinaires des légumineuses (Fabaceae), convertit l\'azote atmosphérique (N₂) en ammoniac (NH₃) assimilable par les plantes. Cette symbiose apporte environ 40 millions de tonnes d\'azote par an aux écosystèmes terrestres, un service écosystémique irremplaçable.',
                'Les plantes communiquent entre elles et avec d\'autres organismes par des composés organiques volatils (COV). Lorsqu\'une plante est attaquée par des herbivores, elle peut émettre des substances attirant les prédateurs naturels des agresseurs (défense tritrophique) et des signaux chimiques avertissant les plantes voisines, qui augmentent préventivement leurs défenses.'
              ],
              highlight: 'Le réseau mycorhizien permet aux arbres d\'une forêt de partager des nutriments et des signaux d\'alerte, un système de communication souterrain surnommé « Wood Wide Web ».'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des terres émergées les forêts couvrent-elles ?', opts: ['15 %', '21 %', '31 %', '45 %'], correct: 2, explanation: 'Les forêts couvrent environ 31 % des terres émergées, soit 4,06 milliards d\'hectares selon la FAO.' },
            { q: 'Qu\'est-ce qu\'une mycorhize ?', opts: ['Une maladie fongique des racines', 'Une symbiose racine-champignon', 'Un type de bactérie fixatrice d\'azote', 'Un parasite végétal'], correct: 1, explanation: 'Les mycorhizes sont des associations symbiotiques mutuellement bénéfiques entre les racines des plantes et les champignons du sol, présentes chez 90 % des plantes vasculaires.' },
            { q: 'Quel biome terrestre abrite la plus grande biodiversité ?', opts: ['La taïga boréale', 'La forêt tropicale humide', 'La savane', 'La prairie tempérée'], correct: 1, explanation: 'La forêt tropicale humide, bien que ne couvrant que 7 % des terres, abrite plus de la moitié de toutes les espèces connues.' }
          ],
          definitions: [
            { term: 'Biome', def: 'Grande zone biogéographique caractérisée par un type de végétation dominant, déterminé principalement par le climat (température et précipitations).' },
            { term: 'Mycorhize', def: 'Association symbiotique mutualiste entre les racines d\'une plante et un champignon du sol, améliorant l\'absorption de l\'eau et des nutriments minéraux.' },
            { term: 'Succession écologique', def: 'Processus naturel de remplacement progressif des communautés végétales au cours du temps, depuis les espèces pionnières jusqu\'au stade climacique.' },
            { term: 'Xérophyte', def: 'Plante adaptée aux milieux arides, présentant des modifications morphologiques et physiologiques réduisant la perte d\'eau (épines, cuticule épaisse, métabolisme CAM).' },
            { term: 'Fixation de l\'azote', def: 'Conversion de l\'azote atmosphérique (N₂) en formes assimilables par les plantes (NH₃), réalisée par des bactéries symbiotiques (Rhizobium) dans les nodosités des légumineuses.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La forêt amazonienne produit environ 20 % de l\'oxygène mondial, mais elle consomme aussi presque autant par la respiration de ses organismes. Son rôle principal est le stockage de carbone et la régulation du cycle de l\'eau.' },
            { front: '💡 Le savais-tu ?', back: 'Les acacias africains attaqués par des girafes émettent de l\'éthylène, un signal gazeux qui incite les acacias voisins à augmenter la concentration de tanins toxiques dans leurs feuilles en quelques minutes.' },
            { front: '💡 Le savais-tu ?', back: 'Un seul réseau mycorhizien peut connecter des centaines d\'arbres dans une forêt. Les arbres « mères » (les plus grands) nourrissent les jeunes pousses à l\'ombre en leur transférant des sucres via ce réseau fongique souterrain.' }
          ]
        }
      ]
    },
    // ==================== HUB 2 : Zoologie ====================
    {
      slug: 'zoologie',
      title: 'Zoologie',
      description: 'Classification du règne animal, des invertébrés aux vertébrés, anatomie comparée et mécanismes de l\'évolution.',
      lessons: [
        // --- Lesson 2.1 : La classification animale ---
        {
          slug: 'classification-animale',
          title: 'La classification animale',
          description: 'Les principes de la systématique zoologique et les grands embranchements du règne animal.',
          intro: 'Le règne animal (Animalia) regroupe environ 1,5 million d\'espèces décrites, mais les estimations du nombre total varient de 5 à 10 millions. La classification zoologique moderne repose sur la phylogénétique moléculaire, qui reconstruit les relations de parenté à partir des séquences d\'ADN, complétant l\'approche morphologique traditionnelle initiée par Linné au XVIIIe siècle.',
          introHighlight: 'Environ 80 % des espèces animales seraient encore inconnues de la science, surtout parmi les insectes, les nématodes et les organismes marins des abysses.',
          intro2: '',
          sections: [
            {
              title: 'Les fondements de la classification',
              paragraphs: [
                'Carl von Linné a établi en 1758 la nomenclature binomiale, attribuant à chaque espèce un nom de genre et un nom d\'espèce en latin (ex. Homo sapiens). La hiérarchie taxonomique comprend sept niveaux principaux : règne, embranchement, classe, ordre, famille, genre et espèce. La cladistique, développée par Willi Hennig dans les années 1950, classe les organismes en groupes monophylétiques (clades) partageant un ancêtre commun exclusif.',
                'Les caractères synapomorphiques (traits dérivés partagés) définissent les clades. Par exemple, les vertébrés partagent la colonne vertébrale, les tétrapodes partagent quatre membres, et les mammifères partagent les poils et les glandes mammaires. La phylogénomique, analysant des génomes entiers, a bouleversé certaines classifications traditionnelles et révélé des parentés inattendues.',
                'Le concept d\'espèce biologique, défini par Ernst Mayr, repose sur l\'isolement reproductif : une espèce est un ensemble de populations naturellement interfertiles, reproductivement isolées des autres groupes. Toutefois, ce critère s\'applique difficilement aux organismes asexués, aux fossiles et aux espèces en cours de spéciation, ce qui a conduit au développement de concepts alternatifs (espèce phylogénétique, espèce écologique).'
              ],
              highlight: 'La nomenclature binomiale de Linné, établie en 1758, reste le système universel de dénomination des espèces utilisé par tous les biologistes du monde.'
            },
            {
              title: 'Les grands embranchements',
              paragraphs: [
                'Le règne animal se divise en une trentaine d\'embranchements. Les Arthropodes (insectes, arachnides, crustacés, myriapodes) constituent le groupe le plus diversifié avec plus d\'un million d\'espèces décrites. Les Chordés (vertébrés et apparentés) comptent environ 70 000 espèces. Les Mollusques (escargots, bivalves, céphalopodes) rassemblent quelque 85 000 espèces, et les Annélides (vers segmentés) environ 22 000.',
                'Les Cnidaires (méduses, coraux, anémones) possèdent une symétrie radiaire et des cnidocytes, cellules urticantes caractéristiques. Les Échinodermes (étoiles de mer, oursins, concombres de mer) présentent une symétrie pentaradiée à l\'état adulte et un système aquifère unique. Les Nématodes (vers ronds) sont parmi les animaux les plus abondants : on estime que quatre organismes sur cinq sur Terre sont des nématodes.',
                'La distinction fondamentale entre protostomiens et deutérostomiens repose sur le devenir du blastopore embryonnaire. Chez les protostomiens (arthropodes, mollusques, annélides), le blastopore devient la bouche. Chez les deutérostomiens (échinodermes, chordés), il devient l\'anus. Cette division, confirmée par la phylogénétique moléculaire, sépare deux grandes lignées évolutives apparues il y a plus de 600 millions d\'années.'
              ],
              highlight: 'Les nématodes sont si abondants que quatre organismes multicellulaires sur cinq sur Terre seraient des vers ronds.'
            },
            {
              title: 'La biodiversité animale aujourd\'hui',
              paragraphs: [
                'L\'inventaire de la biodiversité animale est loin d\'être achevé. Chaque année, environ 18 000 nouvelles espèces animales sont décrites par les taxonomistes. Les régions tropicales, les fonds océaniques et les canopées forestières recèlent les plus grandes lacunes dans nos connaissances. Le programme Census of Marine Life a découvert plus de 6 000 espèces marines potentiellement nouvelles entre 2000 et 2010.',
                'La crise d\'extinction actuelle, qualifiée de sixième extinction de masse, menace environ un million d\'espèces animales et végétales selon l\'IPBES (2019). Le taux d\'extinction actuel est estimé à 100 à 1 000 fois supérieur au taux naturel. Les principales menaces sont la destruction des habitats, la surexploitation, les espèces invasives, la pollution et le changement climatique.',
                'Les progrès technologiques révolutionnent la découverte des espèces. L\'ADN environnemental (ADNe), prélevé dans l\'eau, le sol ou l\'air, permet de détecter la présence d\'espèces sans les observer directement. Le séquençage à haut débit (metabarcoding) identifie simultanément des centaines d\'espèces dans un seul échantillon environnemental.'
              ],
              highlight: 'Environ 18 000 espèces animales nouvelles sont décrites chaque année, signe de l\'immensité de la biodiversité encore méconnue.'
            }
          ],
          quiz: [
            { q: 'Quel embranchement animal compte le plus d\'espèces décrites ?', opts: ['Les Chordés', 'Les Mollusques', 'Les Arthropodes', 'Les Nématodes'], correct: 2, explanation: 'Les Arthropodes (insectes, arachnides, crustacés, myriapodes) sont le groupe le plus diversifié avec plus d\'un million d\'espèces décrites.' },
            { q: 'Qu\'est-ce qui distingue un protostomien d\'un deutérostomien ?', opts: ['La présence de vertèbres', 'Le devenir du blastopore', 'Le nombre de pattes', 'Le type de reproduction'], correct: 1, explanation: 'Chez les protostomiens, le blastopore embryonnaire devient la bouche ; chez les deutérostomiens, il devient l\'anus.' },
            { q: 'Qu\'est-ce que l\'ADN environnemental (ADNe) ?', opts: ['L\'ADN modifié par l\'environnement', 'L\'ADN prélevé dans le milieu naturel pour détecter les espèces', 'L\'ADN synthétique', 'L\'ADN des organismes unicellulaires'], correct: 1, explanation: 'L\'ADNe est de l\'ADN libéré par les organismes dans leur environnement (eau, sol) et prélevé pour identifier les espèces présentes sans observation directe.' }
          ],
          definitions: [
            { term: 'Taxonomie', def: 'Science de la classification des organismes vivants en groupes hiérarchisés (espèce, genre, famille, ordre, classe, embranchement, règne) selon leurs caractéristiques et leurs relations de parenté.' },
            { term: 'Clade', def: 'Groupe monophylétique comprenant un ancêtre commun et tous ses descendants, identifié par des caractères dérivés partagés (synapomorphies).' },
            { term: 'Synapomorphie', def: 'Caractère dérivé partagé par les membres d\'un clade, hérité de leur ancêtre commun exclusif et utilisé pour définir le groupe.' },
            { term: 'Espèce biologique', def: 'Ensemble de populations naturellement interfertiles, productrices d\'une descendance fertile, reproductivement isolées des autres groupes (concept de Mayr).' },
            { term: 'Blastopore', def: 'Ouverture de l\'embryon au stade gastrula, qui deviendra la bouche chez les protostomiens ou l\'anus chez les deutérostomiens.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'On estime que les insectes à eux seuls représentent environ 80 % de toutes les espèces animales connues, avec plus de 900 000 espèces décrites et peut-être 5 millions restant à découvrir.' },
            { front: '💡 Le savais-tu ?', back: 'Le tardigrade (ourson d\'eau) est un animal microscopique capable de survivre dans le vide spatial, à des températures de -272 °C à +150 °C, et à des radiations 1 000 fois supérieures à la dose létale pour l\'homme.' },
            { front: '💡 Le savais-tu ?', back: 'Le calmar géant (Architeuthis dux), pouvant mesurer 13 mètres, n\'a été filmé vivant dans son habitat naturel qu\'en 2012, illustrant à quel point les abysses restent inexplorées.' }
          ]
        },
        // --- Lesson 2.2 : Les vertébrés ---
        {
          slug: 'vertebres',
          title: 'Les vertébrés',
          description: 'Les cinq grandes classes de vertébrés : poissons, amphibiens, reptiles, oiseaux et mammifères.',
          intro: 'Les vertébrés constituent un sous-embranchement des Chordés caractérisé par la présence d\'une colonne vertébrale protégeant la moelle épinière. Bien qu\'ils ne représentent que 3 à 4 % des espèces animales connues, les vertébrés occupent une place prépondérante dans les écosystèmes terrestres et aquatiques en tant que prédateurs, herbivores et ingénieurs écologiques.',
          introHighlight: 'Les vertébrés, environ 70 000 espèces, ne constituent que 4 % du règne animal mais dominent de nombreux écosystèmes par leur taille, leur mobilité et leur complexité comportementale.',
          intro2: '',
          sections: [
            {
              title: 'Les poissons et les amphibiens',
              paragraphs: [
                'Les poissons forment le groupe de vertébrés le plus diversifié avec environ 35 000 espèces décrites. Les poissons osseux (Osteichthyes) dominent les eaux douces et marines, tandis que les poissons cartilagineux (Chondrichthyes — requins, raies, chimères) possèdent un squelette de cartilage. Les poissons sans mâchoire (Agnathes — lamproies, myxines) représentent la lignée la plus primitive de vertébrés encore vivante.',
                'Les amphibiens (environ 8 500 espèces : grenouilles, salamandres, cécilies) ont été les premiers vertébrés à coloniser les terres émergées il y a environ 370 millions d\'années. Leur peau perméable, dépourvue d\'écailles, permet des échanges gazeux cutanés mais les rend vulnérables à la dessiccation. La plupart subissent une métamorphose, passant d\'une larve aquatique (têtard) à un adulte terrestre.',
                'Les amphibiens connaissent un déclin alarmant : environ 40 % des espèces sont menacées d\'extinction. Le champignon pathogène Batrachochytrium dendrobatidis (chytride) a provoqué l\'effondrement de plus de 500 espèces d\'amphibiens depuis les années 1980. La destruction des zones humides, la pollution et le changement climatique aggravent cette crise.'
              ],
              highlight: 'Le chytride (Batrachochytrium dendrobatidis) a provoqué le déclin de plus de 500 espèces d\'amphibiens, constituant la pire maladie infectieuse pour la biodiversité jamais documentée.'
            },
            {
              title: 'Les reptiles et les oiseaux',
              paragraphs: [
                'Les reptiles (environ 12 000 espèces : lézards, serpents, tortues, crocodiliens, tuatara) sont des vertébrés ectothermes dont le corps couvert d\'écailles kératinisées réduit les pertes d\'eau. L\'œuf amniotique, avec sa coquille protectrice et ses membranes extra-embryonnaires, a libéré les reptiles de la dépendance reproductive au milieu aquatique, permettant la colonisation de tous les environnements terrestres.',
                'Les oiseaux (environ 11 000 espèces) sont des dinosaures théropodes ayant survécu à l\'extinction du Crétacé il y a 66 millions d\'années. Leurs adaptations au vol incluent des os pneumatisés (creux et remplis d\'air), des plumes aérodynamiques, un système respiratoire à sacs aériens offrant un flux d\'air unidirectionnel et un métabolisme endotherme élevé soutenant les exigences énergétiques du vol.',
                'La phylogénétique moderne a révélé que les crocodiliens sont plus proches parents des oiseaux que des lézards. Le groupe Archosauria réunit dinosaures (dont les oiseaux), ptérosaures et crocodiliens. Les « reptiles » traditionnels constituent donc un groupe paraphylétique, c\'est-à-dire un ensemble artificiel n\'incluant pas tous les descendants de l\'ancêtre commun.'
              ],
              highlight: 'Les oiseaux sont des dinosaures théropodes vivants : les crocodiliens sont leurs plus proches parents actuels, et non les lézards.'
            },
            {
              title: 'Les mammifères',
              paragraphs: [
                'Les mammifères (environ 6 500 espèces) se caractérisent par la présence de poils, de glandes mammaires produisant du lait, et de trois osselets de l\'oreille moyenne (marteau, enclume, étrier) permettant une audition fine. La majorité sont des placentaires (Eutheria), dont le fœtus se développe longuement dans l\'utérus grâce au placenta.',
                'Les marsupiaux (Metatheria — kangourous, koalas, opossums) mettent au monde des petits très immatures qui achèvent leur développement dans une poche marsupiale (marsupium). Les monotrèmes (Prototheria — ornithorynque, échidnés), les mammifères les plus primitifs, pondent des œufs mais allaitent leurs petits grâce à des glandes mammaires modifiées sans mamelons.',
                'Les mammifères marins illustrent l\'adaptation convergente au milieu aquatique. Les cétacés (baleines, dauphins) descendent d\'ongulés terrestres et ont développé indépendamment des nageoires, un corps fuselé et une respiration pulmonaire adaptée à la plongée. La baleine bleue (Balaenoptera musculus), atteignant 30 mètres et 150 tonnes, est le plus grand animal ayant jamais existé sur Terre.'
              ],
              highlight: 'La baleine bleue, avec ses 30 mètres et 150 tonnes, est le plus grand animal ayant jamais vécu — plus grand que n\'importe quel dinosaure.'
            }
          ],
          quiz: [
            { q: 'Quel groupe de vertébrés compte le plus d\'espèces ?', opts: ['Les mammifères', 'Les oiseaux', 'Les reptiles', 'Les poissons'], correct: 3, explanation: 'Les poissons constituent le groupe de vertébrés le plus diversifié avec environ 35 000 espèces décrites, soit la moitié de tous les vertébrés.' },
            { q: 'Pourquoi les oiseaux sont-ils considérés comme des dinosaures ?', opts: ['Ils pondent des œufs', 'Ils descendent des théropodes', 'Ils ont des écailles', 'Ils sont ectothermes'], correct: 1, explanation: 'Les oiseaux sont les descendants directs des dinosaures théropodes et constituent le seul groupe de dinosaures ayant survécu à l\'extinction du Crétacé il y a 66 Ma.' },
            { q: 'Quelle caractéristique distingue les monotrèmes des autres mammifères ?', opts: ['L\'absence de poils', 'La ponte d\'œufs', 'L\'absence de lait', 'L\'absence de colonne vertébrale'], correct: 1, explanation: 'Les monotrèmes (ornithorynque, échidnés) sont les seuls mammifères à pondre des œufs, tout en allaitant leurs petits.' }
          ],
          definitions: [
            { term: 'Vertébré', def: 'Animal possédant une colonne vertébrale (ou rachis) protégeant la moelle épinière, un crâne et un endosquelette osseux ou cartilagineux.' },
            { term: 'Ectotherme', def: 'Organisme dont la température corporelle dépend principalement de la température ambiante (poissons, amphibiens, reptiles). Anciennement qualifié de « sang froid ».' },
            { term: 'Endotherme', def: 'Organisme capable de produire sa propre chaleur corporelle par son métabolisme interne, maintenant une température stable (oiseaux, mammifères).' },
            { term: 'Œuf amniotique', def: 'Œuf possédant des membranes extra-embryonnaires (amnios, allantoïde, chorion) et une coquille, permettant le développement embryonnaire hors de l\'eau.' },
            { term: 'Paraphylétique', def: 'Groupe taxonomique incluant un ancêtre commun et une partie seulement de ses descendants (ex. les « reptiles » excluant les oiseaux).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le cœur de la baleine bleue pèse environ 600 kg (la taille d\'une voiturette de golf) et bat seulement 2 fois par minute lors des plongées profondes.' },
            { front: '💡 Le savais-tu ?', back: 'L\'axolotl (Ambystoma mexicanum), un amphibien mexicain, peut régénérer intégralement ses membres, sa moelle épinière, son cœur et même des parties de son cerveau.' },
            { front: '💡 Le savais-tu ?', back: 'Le colibri à gorge rubis bat des ailes environ 53 fois par seconde et possède un métabolisme si élevé qu\'il doit consommer chaque jour l\'équivalent de son poids en nectar.' }
          ]
        },
        // --- Lesson 2.3 : Les invertébrés ---
        {
          slug: 'invertebres',
          title: 'Les invertébrés',
          description: 'La diversité des animaux sans colonne vertébrale, qui représentent plus de 95 % des espèces animales.',
          intro: 'Les invertébrés englobent tous les animaux dépourvus de colonne vertébrale, soit plus de 95 % des espèces animales connues. Ce terme n\'a pas de valeur taxonomique — il regroupe une multitude de lignées très différentes — mais il reste utile pour désigner l\'immense majorité du règne animal, des éponges aux céphalopodes en passant par les insectes et les coraux.',
          introHighlight: 'Plus de 95 % des espèces animales sont des invertébrés, illustrant que la vie sans colonne vertébrale est la norme dans le monde animal, non l\'exception.',
          intro2: '',
          sections: [
            {
              title: 'Les arthropodes : maîtres de la diversité',
              paragraphs: [
                'Les arthropodes (du grec arthron, « articulation », et podos, « pied ») constituent le plus vaste embranchement animal. Leur succès repose sur un exosquelette chitineux articulé, offrant protection et points d\'ancrage musculaires, et sur la segmentation du corps avec spécialisation des appendices (pattes, antennes, pièces buccales, ailes).',
                'Les insectes (Hexapoda) représentent à eux seuls environ 80 % des espèces animales connues. Les coléoptères (400 000 espèces) sont l\'ordre le plus diversifié — ce qui aurait fait dire au biologiste J.B.S. Haldane que le Créateur avait « une passion immodérée pour les coléoptères ». Les arachnides (araignées, scorpions, acariens) comptent environ 100 000 espèces, et les crustacés (crabes, crevettes, cloportes) environ 70 000.',
                'La mue (ecdysis) est un processus fondamental chez les arthropodes : l\'animal sécrète un nouvel exosquelette sous l\'ancien, puis se débarrasse de sa cuticule devenue trop étroite. Ce mécanisme, contrôlé par l\'hormone ecdysone, limite la croissance continue mais permet des transformations radicales, comme la métamorphose des insectes holométaboles (larve → nymphe → adulte).'
              ],
              highlight: 'Les coléoptères, avec 400 000 espèces, forment l\'ordre le plus diversifié du règne animal — un insecte sur quatre est un coléoptère.'
            },
            {
              title: 'Les mollusques et les annélides',
              paragraphs: [
                'Les mollusques (environ 85 000 espèces) présentent une diversité morphologique remarquable. Les gastéropodes (escargots, limaces) portent généralement une coquille spiralée et se déplacent sur un pied musculaire. Les bivalves (moules, huîtres, palourdes) filtrent l\'eau grâce à leurs branchies et jouent un rôle écologique majeur dans la purification des eaux côtières. Les céphalopodes (pieuvres, calmars, seiches) sont les invertébrés les plus intelligents, dotés d\'un système nerveux complexe et de capacités cognitives surprenantes.',
                'Les annélides (environ 22 000 espèces) sont des vers segmentés dont chaque segment (métamère) possède ses propres organes (ganglions nerveux, néphridies, muscles). Les polychètes marins arborent des parapodes portant des soies. Les oligochètes (vers de terre) aèrent le sol et recyclent la matière organique — Charles Darwin estimait qu\'ils « ont joué un rôle plus important dans l\'histoire du monde que la plupart des hommes ne le soupçonnent ».',
                'Les cnidaires (méduses, coraux, anémones) et les échinodermes (étoiles de mer, oursins) illustrent d\'autres plans d\'organisation. Les cnidaires possèdent des cnidocytes, cellules contenant des capsules urticantes (nématocystes) projetées en quelques microsecondes — le mécanisme biologique le plus rapide connu. Les échinodermes se déplacent grâce à un système aquifère (ambulacraire) unique dans le règne animal.'
              ],
              highlight: 'La pieuvre possède environ 500 millions de neurones répartis dans ses huit bras, chaque bras pouvant « goûter » et « décider » de façon semi-autonome.'
            },
            {
              title: 'Les rôles écologiques des invertébrés',
              paragraphs: [
                'Les invertébrés assurent des services écosystémiques irremplaçables. Les insectes pollinisateurs (abeilles, papillons, syrphes) contribuent à la reproduction de 75 % des cultures vivrières mondiales, un service estimé à plus de 150 milliards d\'euros par an. Les décomposeurs (vers de terre, collemboles, acariens du sol) recyclent la matière organique et maintiennent la fertilité des sols.',
                'Les invertébrés filtreurs jouent un rôle essentiel dans la qualité des eaux. Une moule peut filtrer jusqu\'à 50 litres d\'eau par jour, retenant les particules en suspension et les algues. Les récifs coralliens, construits par les polypes des coraux sur des millénaires, abritent 25 % des espèces marines malgré une superficie de moins de 0,1 % des fonds océaniques.',
                'Les vers parasites (helminthes) illustrent l\'autre face des invertébrés. Les nématodes parasites, les douves, les ténias et les schistosomes infectent des milliards d\'êtres humains et d\'animaux. La schistosomose à elle seule affecte plus de 200 millions de personnes dans les régions tropicales. Comprendre ces parasites est crucial pour la santé publique mondiale.'
              ],
              highlight: 'Les insectes pollinisateurs contribuent à la reproduction de 75 % des cultures vivrières mondiales, un service écosystémique évalué à plus de 150 milliards d\'euros par an.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des espèces animales les invertébrés représentent-ils ?', opts: ['50 %', '75 %', '85 %', 'Plus de 95 %'], correct: 3, explanation: 'Les invertébrés représentent plus de 95 % de toutes les espèces animales connues ; les vertébrés n\'en constituent que 3 à 4 %.' },
            { q: 'Quel groupe d\'invertébrés possède le système nerveux le plus complexe ?', opts: ['Les insectes', 'Les céphalopodes', 'Les échinodermes', 'Les annélides'], correct: 1, explanation: 'Les céphalopodes (pieuvres, calmars) possèdent le système nerveux le plus développé parmi les invertébrés, avec environ 500 millions de neurones chez la pieuvre.' },
            { q: 'Qu\'est-ce que l\'ecdysis ?', opts: ['La reproduction des arthropodes', 'La mue de l\'exosquelette', 'La métamorphose complète', 'La segmentation du corps'], correct: 1, explanation: 'L\'ecdysis est le processus de mue par lequel un arthropode se débarrasse de son ancien exosquelette devenu trop petit pour en former un nouveau.' }
          ],
          definitions: [
            { term: 'Exosquelette', def: 'Structure rigide externe (cuticule chitineuse chez les arthropodes, coquille calcaire chez les mollusques) assurant protection et soutien mécanique.' },
            { term: 'Métamère', def: 'Segment corporel répété le long de l\'axe antéro-postérieur chez les animaux segmentés (annélides, arthropodes), contenant un jeu d\'organes propres.' },
            { term: 'Cnidocyte', def: 'Cellule urticante caractéristique des cnidaires, contenant une capsule (nématocyste) projetée à grande vitesse pour capturer les proies ou assurer la défense.' },
            { term: 'Système ambulacraire', def: 'Réseau hydraulique interne des échinodermes, constitué de canaux remplis d\'eau de mer, actionnant les pieds ambulacraires pour la locomotion et la capture alimentaire.' },
            { term: 'Céphalopode', def: 'Classe de mollusques marins (pieuvres, calmars, seiches, nautiles) caractérisés par des tentacules autour de la bouche, un bec corné et un système nerveux très développé.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La décharge d\'un nématocyste de cnidaire est l\'un des mécanismes biologiques les plus rapides connus : la capsule se projette en moins de 3 millisecondes avec une accélération de 5 millions de g.' },
            { front: '💡 Le savais-tu ?', back: 'La pieuvre mimétique (Thaumoctopus mimicus) peut imiter l\'apparence et le comportement de plus de 15 espèces différentes, dont des rascasses, des raies et des méduses, pour échapper à ses prédateurs.' },
            { front: '💡 Le savais-tu ?', back: 'Charles Darwin a consacré les 40 dernières années de sa vie à l\'étude des vers de terre et a démontré qu\'ils retournaient l\'intégralité de la couche arable d\'un champ en quelques décennies.' }
          ]
        },
        // --- Lesson 2.4 : L'anatomie comparée ---
        {
          slug: 'anatomie-comparee',
          title: 'L\'anatomie comparée',
          description: 'Les homologies et les analogies structurelles qui révèlent l\'histoire évolutive des animaux.',
          intro: 'L\'anatomie comparée est l\'une des disciplines fondatrices de la biologie évolutive. En confrontant les structures anatomiques de différentes espèces, elle révèle les liens de parenté et les adaptations fonctionnelles façonnées par la sélection naturelle. Les travaux pionniers de Georges Cuvier au XIXe siècle ont établi les principes de corrélation des organes et jeté les bases de la paléontologie.',
          introHighlight: 'Le bras d\'un humain, l\'aile d\'une chauve-souris, la nageoire d\'une baleine et la patte d\'un cheval partagent le même plan osseux fondamental, hérité d\'un ancêtre tétrapode commun.',
          intro2: '',
          sections: [
            {
              title: 'Homologie et analogie',
              paragraphs: [
                'L\'homologie désigne la similarité de structure entre organes d\'espèces différentes, héritée d\'un ancêtre commun. Le membre chiridien des tétrapodes (un humérus, un radius et un cubitus, des carpiens, des métacarpiens et des phalanges) est le cas d\'école : ce plan fondamental est conservé chez l\'homme, le cheval, la baleine, la chauve-souris et le pingouin, malgré des fonctions radicalement différentes (préhension, course, nage, vol).',
                'L\'analogie, ou convergence évolutive, désigne la similarité fonctionnelle entre organes de lignées sans ancêtre commun récent. L\'aile de l\'oiseau (membre antérieur modifié) et l\'aile de l\'insecte (expansion du tégument) remplissent la même fonction de vol mais n\'ont aucune origine commune. L\'œil de la pieuvre et l\'œil du vertébré, bien que structurellement similaires, ont évolué indépendamment — un cas spectaculaire de convergence.',
                'Les organes vestigiaux sont des structures réduites ayant perdu leur fonction originale au cours de l\'évolution. L\'appendice vermiforme chez l\'homme (vestige du caecum d\'un ancêtre herbivore), les os du bassin chez les baleines (vestiges des pattes postérieures de leurs ancêtres terrestres) et les ailes atrophiées du kiwi témoignent d\'ancêtres aux modes de vie différents.'
              ],
              highlight: 'Le membre chiridien des tétrapodes, présent chez tous les vertébrés terrestres, est l\'un des exemples les plus parlants d\'homologie en biologie.'
            },
            {
              title: 'L\'embryologie comparée',
              paragraphs: [
                'L\'embryologie comparée révèle des parentés invisibles chez les adultes. Tous les embryons de vertébrés passent par un stade pharyngula présentant des arcs pharyngiens (anciennement « arcs branchiaux »). Chez les poissons, ces arcs forment les branchies ; chez les mammifères, ils contribuent aux os de l\'oreille moyenne, aux cartilages du larynx et aux muscles de la face.',
                'La loi de récapitulation de Haeckel (« l\'ontogenèse récapitule la phylogenèse ») est aujourd\'hui considérée comme une simplification excessive, mais le principe sous-jacent reste pertinent : le développement embryonnaire conserve des traces de l\'histoire évolutive. Les embryons de baleines développent transitoirement des bourgeons de membres postérieurs, puis les résorbent — un rappel de leurs ancêtres quadrupèdes.',
                'Les gènes Hox, conservés des drosophiles aux humains, contrôlent la formation de l\'axe antéro-postérieur du corps et la spécification des segments. Les mutations de ces gènes homéotiques peuvent provoquer des transformations spectaculaires, comme l\'apparition de pattes à la place des antennes chez la drosophile (mutation Antennapedia). Cette conservation génétique sur plus de 600 millions d\'années souligne l\'unité fondamentale du plan de développement animal.'
              ],
              highlight: 'Les gènes Hox, conservés des mouches aux humains depuis 600 millions d\'années, orchestrent la construction du plan corporel chez tous les animaux bilatériens.'
            },
            {
              title: 'L\'adaptation et la sélection naturelle',
              paragraphs: [
                'L\'adaptation fonctionnelle façonne les structures anatomiques en réponse aux pressions de l\'environnement. La radiation adaptative des pinsons de Darwin aux Galápagos illustre comment une espèce ancestrale s\'est diversifiée en 14 espèces aux becs spécialisés pour différents régimes alimentaires : graines dures, insectes, cactus, sang (le « pinson vampire »). La forme du bec est contrôlée par les gènes BMP4 et calmoduline.',
                'Les contraintes phylogénétiques limitent l\'éventail des adaptations possibles. Les mammifères possèdent invariablement sept vertèbres cervicales, qu\'il s\'agisse de la girafe au cou de 2,5 mètres ou de la musaraigne. Cette contrainte, héritée de l\'ancêtre commun des mammifères, illustre le concept de canalisation développementale : certaines configurations sont si intégrées au développement qu\'elles résistent au changement évolutif.',
                'La coévolution proie-prédateur produit des « courses aux armements » évolutives. Le système venimeux des serpents et la résistance au venin de leurs proies (comme le rat-kangourou ou la mangouste) se sont complexifiés mutuellement au cours de millions d\'années. Les venins de serpents, cocktails de protéines hautement spécialisées, constituent aujourd\'hui une source majeure de molécules d\'intérêt pharmaceutique.'
              ],
              highlight: 'Tous les mammifères possèdent exactement sept vertèbres cervicales, de la girafe à la musaraigne, témoignant d\'une contrainte phylogénétique forte.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'une homologie en anatomie comparée ?', opts: ['Une similarité fonctionnelle sans parenté', 'Une similarité structurelle héritée d\'un ancêtre commun', 'Un organe ayant perdu sa fonction', 'Une mutation génétique'], correct: 1, explanation: 'L\'homologie est la similarité de structure entre organes hérités d\'un ancêtre commun, même si leurs fonctions actuelles diffèrent (bras humain, aile de chauve-souris, nageoire de baleine).' },
            { q: 'Quel est un exemple d\'organe vestigial chez la baleine ?', opts: ['Ses nageoires', 'Ses os du bassin', 'Son évent', 'Sa queue'], correct: 1, explanation: 'Les baleines conservent des os du bassin vestigiaux, témoins de leurs ancêtres terrestres quadrupèdes qui possédaient des pattes postérieures fonctionnelles.' },
            { q: 'Que contrôlent les gènes Hox ?', opts: ['La couleur du pelage', 'La formation de l\'axe antéro-postérieur du corps', 'La production d\'hormones', 'Le métabolisme énergétique'], correct: 1, explanation: 'Les gènes Hox sont des gènes homéotiques qui déterminent l\'identité des segments le long de l\'axe antéro-postérieur du corps chez les animaux bilatériens.' }
          ],
          definitions: [
            { term: 'Homologie', def: 'Ressemblance structurelle entre organes d\'espèces différentes, héritée d\'un ancêtre commun, indépendamment de la fonction actuelle.' },
            { term: 'Analogie', def: 'Ressemblance fonctionnelle entre organes d\'espèces sans parenté récente, résultant d\'une convergence évolutive face à des pressions de sélection similaires.' },
            { term: 'Organe vestigial', def: 'Structure anatomique réduite ayant perdu tout ou partie de sa fonction originale au cours de l\'évolution, témoignant d\'un ancêtre au mode de vie différent.' },
            { term: 'Gènes Hox', def: 'Famille de gènes homéotiques hautement conservés contrôlant la spécification des segments et l\'organisation de l\'axe antéro-postérieur du corps animal.' },
            { term: 'Convergence évolutive', def: 'Évolution indépendante de traits similaires dans des lignées non apparentées, en réponse à des pressions de sélection comparables.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'aile du ptérosaure, celle de la chauve-souris et celle de l\'oiseau utilisent des doigts différents pour soutenir la membrane de vol : ce sont trois inventions indépendantes du vol actif chez les vertébrés.' },
            { front: '💡 Le savais-tu ?', back: 'Les embryons humains possèdent transitoirement une queue (queue caudale) entre la 4e et la 8e semaine de développement, un vestige de nos ancêtres primates à queue.' },
            { front: '💡 Le savais-tu ?', back: 'Le captopril, médicament antihypertenseur utilisé par des millions de patients, a été développé à partir du venin d\'un serpent brésilien, la vipère Bothrops jararaca.' }
          ]
        },
        // --- Lesson 2.5 : L'évolution animale ---
        {
          slug: 'evolution-animale',
          title: 'L\'évolution animale',
          description: 'Les mécanismes de l\'évolution biologique et les grandes transitions du règne animal.',
          intro: 'L\'évolution biologique, par le jeu de la variation génétique, de la sélection naturelle et de la dérive génétique, a engendré l\'extraordinaire diversité du règne animal en plus de 600 millions d\'années. Des premiers animaux multicellulaires de l\'Édiacarien aux mammifères du Cénozoïque, l\'histoire de la vie animale est ponctuée de radiations adaptatives spectaculaires et d\'extinctions de masse catastrophiques.',
          introHighlight: 'L\'explosion cambrienne, il y a 540 millions d\'années, a vu l\'apparition de la plupart des plans d\'organisation animale en moins de 20 millions d\'années — un événement sans précédent dans l\'histoire de la vie.',
          intro2: '',
          sections: [
            {
              title: 'Les mécanismes de l\'évolution',
              paragraphs: [
                'La théorie synthétique de l\'évolution intègre la sélection naturelle de Darwin, la génétique de Mendel et la génétique des populations. Les mutations, les recombinaisons génétiques lors de la méiose et le flux génétique entre populations génèrent la variation héréditaire. La sélection naturelle favorise les variants les mieux adaptés à leur environnement, tandis que la dérive génétique provoque des changements aléatoires de fréquences alléliques, surtout dans les petites populations.',
                'La spéciation, processus de formation de nouvelles espèces, peut être allopatrique (par isolement géographique), sympatrique (sans barrière géographique, souvent par spécialisation écologique) ou parapatrique (dans une zone de transition). L\'isolement reproductif qui en résulte peut être prézygotique (barrières comportementales, mécaniques, temporelles) ou postzygotique (hybrides stériles ou non viables).',
                'La théorie des équilibres ponctués, proposée par Niles Eldredge et Stephen Jay Gould en 1972, postule que l\'évolution procède par longues périodes de stabilité (stase) ponctuées de changements rapides lors de la spéciation. Ce modèle s\'oppose au gradualisme phylétique et rend mieux compte des discontinuités observées dans le registre fossile.'
              ],
              highlight: 'La spéciation allopatrique, par isolement géographique, est le mode de formation d\'espèces le plus fréquent dans le règne animal.'
            },
            {
              title: 'Les grandes transitions évolutives',
              paragraphs: [
                'La faune de l\'Édiacarien (il y a 635 à 540 Ma) comprend les plus anciens animaux multicellulaires connus : des organismes mous, souvent en forme de disque ou de feuille, comme Dickinsonia. L\'explosion cambrienne (540 à 520 Ma) a vu l\'apparition rapide de presque tous les embranchements actuels, documentée par des gisements exceptionnels comme les schistes de Burgess (Canada) et le biote de Chengjiang (Chine).',
                'La sortie des eaux par les vertébrés, il y a environ 375 millions d\'années, est illustrée par des formes intermédiaires comme Tiktaalik, un poisson possédant des nageoires articulées préfigurant les membres des tétrapodes. La conquête du milieu terrestre a nécessité des adaptations majeures : respiration aérienne, squelette porteur, protection contre la dessiccation et organes sensoriels adaptés à l\'air.',
                'Les extinctions de masse ont remodelé la biodiversité à cinq reprises au cours du Phanérozoïque. La plus catastrophique, l\'extinction du Permien-Trias (il y a 252 Ma), a éliminé environ 96 % des espèces marines et 70 % des espèces terrestres. L\'extinction du Crétacé-Paléogène (il y a 66 Ma), causée par un impact d\'astéroïde, a mis fin au règne des dinosaures non aviens et ouvert la voie à la diversification des mammifères.'
              ],
              highlight: 'L\'extinction du Permien-Trias a éliminé 96 % des espèces marines, constituant la plus grande catastrophe biologique de l\'histoire de la vie.'
            },
            {
              title: 'L\'évolution humaine',
              paragraphs: [
                'L\'ordre des primates est apparu il y a environ 65 millions d\'années. La lignée humaine (Hominina) s\'est séparée de celle des chimpanzés il y a 6 à 7 millions d\'années en Afrique. Les plus anciens hominines connus — Sahelanthropus tchadensis (Toumaï, 7 Ma) et Ardipithecus ramidus (4,4 Ma) — montrent déjà une tendance à la bipédie, qui a libéré les mains et favorisé le développement de la manipulation d\'outils.',
                'Le genre Homo est apparu il y a environ 2,8 millions d\'années. Homo habilis fabriquait des outils de pierre (industrie oldowayenne). Homo erectus, apparu vers 1,9 Ma, a maîtrisé le feu et colonisé l\'Asie et l\'Europe. Homo sapiens est apparu en Afrique il y a environ 300 000 ans et a colonisé tous les continents, coexistant et s\'hybridant parfois avec d\'autres espèces humaines comme Homo neanderthalensis et les Dénisoviens.',
                'L\'évolution humaine illustre des principes fondamentaux de la biologie évolutive : la bipédie, l\'encéphalisation (triplement du volume cérébral en 3 Ma), le développement du langage articulé et la culture cumulative. Le séquençage de l\'ADN ancien (paléogénomique) a révélé que les humains modernes non africains portent 1 à 4 % d\'ADN néandertalien, preuve d\'hybridations anciennes entre espèces humaines.'
              ],
              highlight: 'Les humains modernes non africains portent 1 à 4 % d\'ADN néandertalien, héritage d\'hybridations survenues il y a 50 000 à 60 000 ans.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que l\'explosion cambrienne ?', opts: ['Une éruption volcanique massive', 'L\'apparition rapide de la plupart des embranchements animaux', 'L\'extinction des dinosaures', 'La formation des premiers océans'], correct: 1, explanation: 'L\'explosion cambrienne (540-520 Ma) désigne la diversification rapide des animaux avec l\'apparition de la plupart des plans d\'organisation (embranchements) encore existants.' },
            { q: 'Quelle extinction de masse a été la plus dévastatrice ?', opts: ['L\'extinction du Crétacé-Paléogène', 'L\'extinction du Permien-Trias', 'L\'extinction de l\'Ordovicien', 'L\'extinction du Dévonien'], correct: 1, explanation: 'L\'extinction du Permien-Trias (252 Ma) a éliminé environ 96 % des espèces marines et 70 % des espèces terrestres, la pire crise biologique de l\'histoire.' },
            { q: 'Depuis quand la lignée humaine est-elle séparée de celle des chimpanzés ?', opts: ['1 million d\'années', '3 millions d\'années', '6-7 millions d\'années', '20 millions d\'années'], correct: 2, explanation: 'La divergence entre la lignée humaine et celle des chimpanzés remonte à environ 6-7 millions d\'années en Afrique.' }
          ],
          definitions: [
            { term: 'Sélection naturelle', def: 'Mécanisme évolutif par lequel les individus les mieux adaptés à leur environnement survivent et se reproduisent davantage, transmettant leurs traits favorables aux générations suivantes.' },
            { term: 'Spéciation', def: 'Processus évolutif par lequel une population ancestrale se divise en deux ou plusieurs espèces reproductivement isolées.' },
            { term: 'Dérive génétique', def: 'Variation aléatoire des fréquences alléliques d\'une génération à l\'autre, particulièrement importante dans les petites populations.' },
            { term: 'Extinction de masse', def: 'Disparition rapide (à l\'échelle géologique) d\'une proportion majeure des espèces vivantes sur Terre, suivie d\'une radiation adaptative des survivants.' },
            { term: 'Radiation adaptative', def: 'Diversification rapide d\'une lignée ancestrale en de nombreuses espèces occupant des niches écologiques variées, souvent après une extinction de masse ou la colonisation d\'un nouveau milieu.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Tiktaalik, fossile de 375 Ma découvert en 2004 dans l\'Arctique canadien, possède des nageoires articulées avec un « poignet » primitif, illustrant la transition entre poissons et premiers tétrapodes.' },
            { front: '💡 Le savais-tu ?', back: 'L\'ADN de Néandertal présent chez les humains modernes influence encore notre santé : certains variants néandertaliens affectent notre système immunitaire, notre métabolisme du cholestérol et même notre susceptibilité à la dépression.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Anomalocaris, prédateur emblématique du Cambrien mesurant jusqu\'à un mètre, était le plus grand animal de son époque — dans un monde où la plupart des créatures ne dépassaient pas quelques centimètres.' }
          ]
        }
      ]
    },
    // ==================== HUB 3 : Éthologie ====================
    {
      slug: 'ethologie',
      title: 'Éthologie',
      description: 'La science du comportement animal : communication, migration, vie sociale et cognition.',
      lessons: [
        // --- Lesson 3.1 : Le comportement animal ---
        {
          slug: 'comportement-animal',
          title: 'Le comportement animal',
          description: 'Les bases de l\'éthologie : comportements innés, appris et les méthodes d\'étude en milieu naturel.',
          intro: 'L\'éthologie, science du comportement animal, a été fondée par Konrad Lorenz, Niko Tinbergen et Karl von Frisch, récompensés par le prix Nobel de physiologie en 1973. Tinbergen a proposé quatre questions fondamentales pour analyser tout comportement : quelle est sa cause immédiate (mécanisme), comment se développe-t-il (ontogenèse), quelle est sa valeur adaptative (fonction) et quelle est son histoire évolutive (phylogenèse) ?',
          introHighlight: 'Les quatre questions de Tinbergen — mécanisme, ontogenèse, fonction et phylogenèse — constituent le cadre d\'analyse de tout comportement animal en éthologie moderne.',
          intro2: '',
          sections: [
            {
              title: 'Comportements innés et réflexes',
              paragraphs: [
                'Les comportements innés (ou instinctifs) sont génétiquement programmés et s\'expriment de façon stéréotypée sans apprentissage préalable. Le Schéma d\'Action Fixe (SAF), décrit par Lorenz, est une séquence motrice invariable déclenchée par un stimulus spécifique (stimulus-signe). Par exemple, le rouge-gorge attaque tout objet rouge entrant sur son territoire, la tache rouge étant le stimulus-signe déclenchant le comportement agressif territorial.',
                'Les réflexes sont les comportements les plus simples : une réponse automatique et rapide à un stimulus, impliquant un arc réflexe neuronal. La rétraction d\'un membre au contact d\'une source de chaleur, le réflexe de succion du nouveau-né ou le réflexe de redressement du chat sont des exemples classiques. Les taxes (mouvements orientés vers ou loin d\'un stimulus) et les cinèses (modifications de l\'activité en fonction de l\'intensité d\'un stimulus) complètent ce répertoire.',
                'Les rythmes biologiques régulent de nombreux comportements. Les rythmes circadiens (cycle de 24 heures) contrôlent le sommeil, l\'activité et la thermorégulation. Les rythmes circannuels gouvernent la migration, l\'hibernation et la reproduction saisonnière. Ces horloges internes, situées dans le noyau suprachiasmatique chez les mammifères, sont synchronisées par des signaux environnementaux (photopériode, température).'
              ],
              highlight: 'Le Schéma d\'Action Fixe est une séquence comportementale innée, stéréotypée et irrépressible, déclenchée par un stimulus-signe spécifique.'
            },
            {
              title: 'L\'apprentissage et le conditionnement',
              paragraphs: [
                'L\'apprentissage modifie durablement le comportement en fonction de l\'expérience. L\'habituation, forme la plus simple, consiste en la diminution progressive de la réponse à un stimulus répétitif inoffensif (un oiseau qui cesse de fuir un épouvantail immobile). La sensibilisation est le processus inverse : une réponse amplifiée après un stimulus intense ou menaçant.',
                'Le conditionnement classique (pavlovien) associe un stimulus neutre (son de cloche) à un stimulus inconditionnel (nourriture) jusqu\'à ce que le stimulus neutre seul provoque la réponse (salivation). Le conditionnement opérant (skinnérien) renforce ou diminue un comportement selon ses conséquences : une récompense (renforcement positif) augmente la fréquence d\'un comportement, une punition la diminue.',
                'L\'empreinte (imprinting), découverte par Lorenz chez les oies cendrées, est un apprentissage rapide et irréversible se produisant durant une période critique du développement. Les oisillons nidifuges s\'attachent au premier objet mobile qu\'ils perçoivent après l\'éclosion, normalement leur mère. L\'empreinte sexuelle, qui détermine les préférences de partenaire à l\'âge adulte, se produit à une période critique différente et influence durablement le choix du partenaire reproducteur.'
              ],
              highlight: 'L\'empreinte de Lorenz est un apprentissage irréversible se produisant durant une fenêtre temporelle critique : les oisons suivent le premier objet mobile rencontré après l\'éclosion.'
            },
            {
              title: 'Méthodes d\'étude en éthologie',
              paragraphs: [
                'L\'éthogramme est l\'inventaire exhaustif de tous les comportements d\'une espèce, constituant la base de toute étude éthologique. Chaque comportement est décrit objectivement, nommé et classé par catégorie (alimentation, reproduction, agression, toilettage, etc.). L\'observation en milieu naturel, prônée par Tinbergen, reste la méthode de référence pour comprendre le comportement dans son contexte écologique.',
                'Les technologies modernes ont transformé l\'éthologie. Le suivi GPS et les accéléromètres fixés sur les animaux révèlent leurs déplacements et leurs budgets d\'activité en continu. Les caméras-pièges et les drones permettent l\'observation sans perturbation. La bio-logging (enregistrement de données physiologiques sur l\'animal libre) mesure la fréquence cardiaque, la température corporelle et les plongées des mammifères marins en temps réel.',
                'Les protocoles expérimentaux en éthologie incluent les expériences de choix (préférence alimentaire, choix du partenaire), les tests cognitifs (résolution de problèmes, utilisation d\'outils) et les expériences de playback (diffusion de vocalisations enregistrées pour tester les réponses comportementales). L\'éthique de l\'expérimentation animale impose de minimiser le stress et la souffrance, conformément au principe des 3R (Remplacer, Réduire, Raffiner).'
              ],
              highlight: 'L\'éthogramme, inventaire systématique de tous les comportements d\'une espèce, est le document fondamental de toute étude éthologique.'
            }
          ],
          quiz: [
            { q: 'Qui a défini les quatre questions fondamentales de l\'éthologie ?', opts: ['Konrad Lorenz', 'Niko Tinbergen', 'Karl von Frisch', 'Charles Darwin'], correct: 1, explanation: 'Niko Tinbergen a proposé en 1963 les quatre questions (mécanisme, ontogenèse, fonction, phylogenèse) pour analyser tout comportement animal de manière complète.' },
            { q: 'Qu\'est-ce qu\'un Schéma d\'Action Fixe ?', opts: ['Un comportement appris', 'Une séquence motrice innée et stéréotypée', 'Un réflexe simple', 'Un rythme biologique'], correct: 1, explanation: 'Le SAF est une séquence comportementale innée, invariable et irrépressible, déclenchée par un stimulus-signe spécifique.' },
            { q: 'Qu\'est-ce que l\'empreinte (imprinting) ?', opts: ['Un tatouage naturel sur l\'animal', 'Un apprentissage rapide et irréversible en période critique', 'Un conditionnement opérant', 'Une forme d\'habituation'], correct: 1, explanation: 'L\'empreinte est un apprentissage rapide, irréversible, se produisant durant une période critique du développement, comme l\'attachement des oisillons au premier objet mobile perçu.' }
          ],
          definitions: [
            { term: 'Éthologie', def: 'Science biologique du comportement animal, étudiant les causes proximales (mécanismes, développement) et ultimes (fonction adaptative, évolution) des comportements en milieu naturel.' },
            { term: 'Schéma d\'Action Fixe (SAF)', def: 'Séquence motrice innée, stéréotypée et invariable déclenchée par un stimulus-signe spécifique, décrite par Konrad Lorenz.' },
            { term: 'Stimulus-signe', def: 'Élément environnemental spécifique (forme, couleur, son, odeur) qui déclenche un Schéma d\'Action Fixe de manière quasi automatique.' },
            { term: 'Empreinte (imprinting)', def: 'Apprentissage rapide et irréversible se produisant durant une période critique du développement, comme l\'attachement filial chez les oiseaux nidifuges.' },
            { term: 'Éthogramme', def: 'Inventaire exhaustif et standardisé de tous les comportements observables d\'une espèce, servant de base à toute étude éthologique.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Konrad Lorenz a démontré l\'empreinte en se faisant suivre par une couvée d\'oisons qui l\'avaient pris pour leur mère — une image devenue iconique de l\'éthologie.' },
            { front: '💡 Le savais-tu ?', back: 'Karl von Frisch a décodé la « danse des abeilles » : une ouvrière effectue une danse en huit dont l\'angle indique la direction de la source de nourriture par rapport au soleil et la durée indique la distance.' },
            { front: '💡 Le savais-tu ?', back: 'Les corbeaux calédoniens fabriquent et utilisent des outils en forme de crochet pour extraire des larves des troncs d\'arbres — un comportement autrefois considéré comme exclusivement humain.' }
          ]
        },
        // --- Lesson 3.2 : La communication animale ---
        {
          slug: 'communication-animale',
          title: 'La communication animale',
          description: 'Les signaux visuels, sonores, chimiques et tactiles utilisés par les animaux pour communiquer.',
          intro: 'La communication animale englobe tous les processus par lesquels un individu (émetteur) modifie le comportement d\'un autre individu (récepteur) par l\'émission de signaux. Ces signaux, façonnés par la sélection naturelle, utilisent divers canaux sensoriels — visuel, acoustique, chimique, tactile, électrique — et servent des fonctions variées : défense territoriale, attraction du partenaire, alarme, cohésion sociale et coordination des activités du groupe.',
          introHighlight: 'La communication animale utilise tous les canaux sensoriels disponibles, chaque espèce privilégiant celui qui est le mieux adapté à son écologie et à son environnement.',
          intro2: '',
          sections: [
            {
              title: 'La communication visuelle et acoustique',
              paragraphs: [
                'Les signaux visuels incluent les couleurs, les motifs, les postures et les mouvements ritualisés. Le paon mâle déploie sa queue ornée d\'ocelles iridescents pour séduire les femelles — un exemple classique de sélection sexuelle décrit par Darwin. Les couleurs aposématiques (vives et contrastées) des grenouilles dendrobates signalent leur toxicité aux prédateurs. Le mimétisme batésien exploite ces signaux : des espèces inoffensives imitent l\'apparence d\'espèces dangereuses.',
                'La communication acoustique est prédominante chez les oiseaux, les amphibiens, les insectes et les mammifères marins. Le chant des oiseaux, produit par le syrinx, sert à la défense territoriale et à l\'attraction des partenaires. Les baleines à bosse émettent des chants complexes de 10 à 20 minutes, composés de phrases et de thèmes qui évoluent culturellement au fil des saisons. Les ultrasons des chauves-souris (écholocation) permettent la navigation et la chasse dans l\'obscurité totale.',
                'La communication par vibrations (sismique) est utilisée par les éléphants, dont les infrasons (fréquences inférieures à 20 Hz) se propagent sur plusieurs kilomètres à travers le sol. Les araignées communiquent par vibrations transmises le long de leur toile. Les poissons utilisent des sons produits par leur vessie natatoire ou par stridulation pour communiquer dans l\'eau, un milieu où le son se propage cinq fois plus vite que dans l\'air.'
              ],
              highlight: 'Les baleines à bosse composent des chants complexes qui évoluent culturellement : tous les mâles d\'une même population adoptent progressivement les mêmes modifications.'
            },
            {
              title: 'La communication chimique',
              paragraphs: [
                'Les phéromones sont des substances chimiques émises par un individu et qui déclenchent une réaction spécifique chez un congénère. Les phéromones sexuelles du papillon bombyx du mûrier (Bombyx mori) peuvent être détectées par le mâle à plusieurs kilomètres de distance grâce à ses antennes pectinées portant des milliers de récepteurs olfactifs. Les phéromones d\'alarme des fourmis provoquent l\'évacuation immédiate du nid.',
                'Le marquage territorial par l\'urine, les fèces ou les sécrétions glandulaires est répandu chez les mammifères. Les chats, les chiens, les cerfs et les félins déposent des signaux chimiques durables qui informent les congénères de leur identité, leur statut reproducteur et leurs frontières territoriales. L\'organe voméronasal (organe de Jacobson), présent chez de nombreux vertébrés, est spécialisé dans la détection des phéromones.',
                'La communication chimique est la plus ancienne forme de communication animale et reste la plus répandue. Les bactéries elles-mêmes pratiquent le quorum sensing, émettant des molécules signal dont la concentration informe la colonie de sa densité. Chez les fourmis, les phéromones de piste guident les ouvrières vers les sources de nourriture, créant des réseaux de fourragement optimisés par rétroaction positive.'
              ],
              highlight: 'Un papillon bombyx mâle peut détecter une seule molécule de phéromone sexuelle femelle parmi des milliards de molécules dans l\'air, à plusieurs kilomètres de distance.'
            },
            {
              title: 'Honnêteté et tromperie dans la communication',
              paragraphs: [
                'La théorie du handicap de Zahavi (1975) propose que les signaux sexuels coûteux sont honnêtes précisément parce qu\'ils sont coûteux : seul un individu en bonne condition peut se permettre de porter un ornement volumineux et voyant comme la queue du paon. Le coût du signal garantit sa fiabilité, car un individu en mauvaise santé ne pourrait maintenir un tel handicap.',
                'Cependant, la tromperie existe dans la communication animale. Le mimétisme batésien (une espèce inoffensive imite une espèce dangereuse) et le mimétisme agressif (un prédateur imite une proie ou un partenaire) sont des formes de communication mensongère façonnées par la sélection naturelle. La luciole femelle du genre Photuris imite les flashs lumineux des femelles d\'autres espèces pour attirer et dévorer les mâles attirés.',
                'Les courses aux armements communicatives sont omniprésentes. Les coucous déposent leurs œufs dans les nids d\'autres espèces, imitant la couleur et les motifs des œufs de l\'hôte. En réponse, certaines espèces hôtes ont développé une discrimination fine de leurs propres œufs. Cette coévolution antagoniste a produit des niveaux de mimétisme toujours plus raffinés et des capacités de détection toujours plus aiguës.'
              ],
              highlight: 'Le principe du handicap de Zahavi explique pourquoi les signaux sexuels les plus coûteux (queue du paon, ramure du cerf) sont les plus fiables : seuls les individus en excellente condition peuvent se les permettre.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'une phéromone ?', opts: ['Un signal visuel', 'Une substance chimique déclenchant une réaction chez un congénère', 'Un son ultrasonore', 'Un signal électrique'], correct: 1, explanation: 'Une phéromone est une substance chimique émise par un individu qui déclenche une réponse comportementale ou physiologique spécifique chez un congénère de la même espèce.' },
            { q: 'Que propose le principe du handicap de Zahavi ?', opts: ['Les signaux coûteux sont honnêtes car seuls les individus en bonne santé peuvent les produire', 'Les animaux handicapés communiquent mieux', 'Les signaux les moins coûteux sont les plus efficaces', 'La tromperie est toujours avantageuse'], correct: 0, explanation: 'Zahavi a proposé que les signaux coûteux (ornements, chants longs) sont fiables précisément parce que leur coût garantit que seuls les individus en bonne condition peuvent les maintenir.' },
            { q: 'Comment les éléphants communiquent-ils sur de longues distances ?', opts: ['Par ultrasons', 'Par infrasons transmis par le sol', 'Par des signaux visuels', 'Par des phéromones'], correct: 1, explanation: 'Les éléphants émettent des infrasons (< 20 Hz) qui se propagent sur plusieurs kilomètres à travers le sol et sont détectés par les pieds des congénères.' }
          ],
          definitions: [
            { term: 'Phéromone', def: 'Substance chimique émise par un organisme et perçue par un congénère, déclenchant une réponse comportementale ou physiologique spécifique (phéromone sexuelle, d\'alarme, de piste).' },
            { term: 'Couleur aposématique', def: 'Coloration vive et contrastée (rouge, jaune, noir) signalant la toxicité ou le danger d\'un organisme à ses prédateurs potentiels.' },
            { term: 'Mimétisme batésien', def: 'Stratégie évolutive dans laquelle une espèce inoffensive imite l\'apparence d\'une espèce dangereuse ou toxique pour dissuader les prédateurs.' },
            { term: 'Écholocation', def: 'Système de navigation et de chasse par émission d\'ultrasons et analyse de leurs échos, utilisé par les chauves-souris et les cétacés à dents.' },
            { term: 'Principe du handicap', def: 'Théorie de Zahavi selon laquelle les signaux sexuels coûteux sont honnêtes car seuls les individus de haute qualité peuvent supporter leur coût.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Les éléphants peuvent détecter les vibrations sismiques produites par d\'autres éléphants à plus de 30 km de distance grâce à des récepteurs sensoriels situés dans leurs pieds.' },
            { front: '💡 Le savais-tu ?', back: 'Le grand dauphin (Tursiops truncatus) possède un « nom » : chaque individu émet un sifflement-signature unique que les autres dauphins utilisent pour l\'appeler.' },
            { front: '💡 Le savais-tu ?', back: 'Les seiches peuvent changer la couleur et la texture de toute leur peau en moins d\'une seconde grâce à des millions de chromatophores contrôlés directement par le cerveau.' }
          ]
        },
        // --- Lesson 3.3 : La migration animale ---
        {
          slug: 'migration-animale',
          title: 'La migration animale',
          description: 'Les grands voyages saisonniers des animaux, leur navigation et les défis de la conservation.',
          intro: 'La migration animale est un déplacement saisonnier, cyclique et prévisible entre deux régions géographiques distinctes, généralement motivé par la reproduction, l\'alimentation ou les conditions climatiques. Des sternes arctiques parcourant 70 000 km par an aux gnous du Serengeti traversant les plaines d\'Afrique de l\'Est, les migrations comptent parmi les phénomènes les plus spectaculaires du monde vivant.',
          introHighlight: 'La sterne arctique effectue la plus longue migration connue : un aller-retour annuel de 70 000 km entre l\'Arctique et l\'Antarctique, voyant ainsi deux étés par an.',
          intro2: '',
          sections: [
            {
              title: 'Les types de migration',
              paragraphs: [
                'La migration latitudinale, la plus connue, consiste en un déplacement nord-sud entre aires de reproduction (haute latitude) et aires d\'hivernage (basse latitude). Les oiseaux migrateurs, environ 4 000 espèces sur les 11 000 connues, effectuent ces trajets deux fois par an. Le traquet motteux (Oenanthe oenanthe), petit passereau de 25 grammes, parcourt jusqu\'à 15 000 km entre l\'Alaska et l\'Afrique subsaharienne.',
                'La migration altitudinale concerne les espèces qui descendent en altitude durant l\'hiver. Le bouquetin des Alpes descend vers les vallées lorsque la neige couvre les pâturages d\'altitude. La migration anadrome (poissons qui remontent les rivières pour se reproduire, comme le saumon) et catadrome (l\'anguille, qui descend vers la mer pour pondre) sont des migrations entre eau douce et eau salée.',
                'Les migrations de masse peuvent être spectaculaires. La grande migration du Serengeti implique environ 1,5 million de gnous, 200 000 zèbres et des milliers de gazelles effectuant un circuit annuel de 3 000 km à travers la Tanzanie et le Kenya. Le papillon monarque (Danaus plexippus) parcourt jusqu\'à 4 500 km entre le Canada et les forêts d\'oyamels du Mexique central, un voyage multigénérationnel unique dans le règne animal.'
              ],
              highlight: 'La migration du monarque est multigénérationnelle : il faut trois à quatre générations pour remonter du Mexique au Canada, mais une seule « super-génération » pour le retour.'
            },
            {
              title: 'Les mécanismes de navigation',
              paragraphs: [
                'Les animaux migrateurs utilisent une combinaison de systèmes de navigation. Le compas solaire, ajusté par l\'horloge interne de l\'animal, permet l\'orientation par rapport à la position du soleil. Le compas stellaire, utilisé par les oiseaux nocturnes, s\'appuie sur la rotation des constellations autour de l\'étoile polaire. Le pigeon voyageur utilise les deux systèmes plus un compas magnétique.',
                'La magnétoréception, capacité à percevoir le champ magnétique terrestre, a été démontrée chez les oiseaux, les tortues marines, les saumons et même les bactéries. Chez les oiseaux, deux mécanismes sont proposés : des cryptochrome dans la rétine sensibles au champ magnétique (compas d\'inclinaison), et des particules de magnétite dans le bec supérieur (détecteur d\'intensité du champ). Le merle noir (Turdus merula) possède un compas magnétique dans son œil droit.',
                'La mémoire spatiale et les repères topographiques complètent ces systèmes. Les saumons retrouvent leur rivière natale grâce à la signature chimique (olfactive) unique de l\'eau, mémorisée lors de la dévalaison juvénile. Les tortues marines (Caretta caretta) reviennent pondre sur la plage même de leur naissance, parfois après 20 à 30 ans de migration en haute mer, en utilisant le champ magnétique comme carte de navigation.'
              ],
              highlight: 'Les oiseaux migrateurs possèdent un compas magnétique dans leur rétine : des protéines (cryptochromes) sensibles au champ magnétique terrestre leur permettent littéralement de « voir » le nord.'
            },
            {
              title: 'Menaces et conservation',
              paragraphs: [
                'Les migrations animales sont de plus en plus menacées par les activités humaines. La destruction des haltes migratoires (zones humides, forêts relais) prive les oiseaux de sites de repos et de ravitaillement essentiels. Le Rapport sur l\'état des oiseaux dans le monde (BirdLife, 2022) estime que 40 % des espèces d\'oiseaux migrateurs sont en déclin. En Amérique du Nord, 3 milliards d\'oiseaux ont disparu depuis 1970.',
                'Les obstacles anthropiques — lignes électriques, éoliennes, gratte-ciel éclairés, routes — causent des millions de morts par collision chaque année. La pollution lumineuse désorientation les oiseaux nocturnes et les insectes migrateurs. Le changement climatique décale les calendriers phénologiques : certaines espèces arrivent trop tôt ou trop tard par rapport à la disponibilité alimentaire (décalage phénologique).',
                'Les efforts de conservation incluent la protection des corridors migratoires, la Convention sur les espèces migratrices (CMS, Convention de Bonn), les accords internationaux sur les zones humides (Convention de Ramsar) et la réduction de la pollution lumineuse. Le suivi par satellite et les réseaux de science citoyenne (eBird, avec 800 millions d\'observations) fournissent des données essentielles pour identifier les zones critiques à protéger.'
              ],
              highlight: 'Trois milliards d\'oiseaux ont disparu en Amérique du Nord depuis 1970, soit un déclin de 29 % en cinquante ans.'
            }
          ],
          quiz: [
            { q: 'Quel animal effectue la plus longue migration annuelle ?', opts: ['Le gnous du Serengeti', 'La sterne arctique', 'Le saumon atlantique', 'Le monarque'], correct: 1, explanation: 'La sterne arctique parcourt environ 70 000 km par an en effectuant un aller-retour entre l\'Arctique et l\'Antarctique.' },
            { q: 'Comment les saumons retrouvent-ils leur rivière natale ?', opts: ['Par magnétoréception', 'Par le compas solaire', 'Par la signature olfactive de l\'eau', 'Par la vue'], correct: 2, explanation: 'Les saumons mémorisent la composition chimique unique de leur rivière de naissance lors de leur dévalaison et la reconnaissent à l\'odorat lors de leur remontée.' },
            { q: 'Qu\'est-ce que la magnétoréception ?', opts: ['La perception des températures', 'La capacité à détecter le champ magnétique terrestre', 'L\'écholocation', 'La détection des courants marins'], correct: 1, explanation: 'La magnétoréception est la capacité de certains animaux à percevoir le champ magnétique terrestre, utilisée comme compas pour l\'orientation lors des migrations.' }
          ],
          definitions: [
            { term: 'Migration', def: 'Déplacement saisonnier, cyclique et prévisible d\'une population animale entre deux régions géographiques distinctes, généralement lié à la reproduction ou à l\'alimentation.' },
            { term: 'Magnétoréception', def: 'Capacité biologique à percevoir le champ magnétique terrestre, utilisée pour l\'orientation et la navigation chez de nombreuses espèces migratrices.' },
            { term: 'Migration anadrome', def: 'Migration d\'un poisson qui naît en eau douce, grandit en mer et remonte en eau douce pour se reproduire (ex. saumon).' },
            { term: 'Décalage phénologique', def: 'Désynchronisation entre les cycles biologiques d\'un organisme (migration, reproduction) et les conditions environnementales (disponibilité alimentaire), souvent causée par le changement climatique.' },
            { term: 'Halte migratoire', def: 'Site d\'escale où les animaux migrateurs se reposent et se ravitaillent au cours de leur trajet, essentiel à la réussite de la migration.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La barge rousse (Limosa lapponica) détient le record du vol non-stop le plus long : 13 560 km en 11 jours entre l\'Alaska et la Nouvelle-Zélande, sans se poser, sans manger ni boire.' },
            { front: '💡 Le savais-tu ?', back: 'Les tortues caouannes (Caretta caretta) pondent sur la plage exacte de leur naissance après 20 à 30 ans de migration en haute mer, naviguant grâce au champ magnétique terrestre.' },
            { front: '💡 Le savais-tu ?', back: 'Aux États-Unis, les collisions avec les gratte-ciel éclairés la nuit tuent entre 600 millions et 1 milliard d\'oiseaux migrateurs chaque année. Éteindre les lumières pendant la migration pourrait en sauver des millions.' }
          ]
        },
        // --- Lesson 3.4 : La vie sociale des animaux ---
        {
          slug: 'vie-sociale',
          title: 'La vie sociale des animaux',
          description: 'Les sociétés animales, la coopération, les hiérarchies et l\'altruisme dans le règne animal.',
          intro: 'De nombreuses espèces animales vivent en groupes organisés, des colonies de fourmis comptant des millions d\'individus aux bandes de primates d\'une centaine de membres. La vie sociale offre des avantages majeurs — protection contre les prédateurs, chasse coopérative, partage de l\'information — mais impose aussi des coûts : compétition pour les ressources, transmission de parasites et conflits hiérarchiques.',
          introHighlight: 'L\'eusocialité, présente chez les fourmis, les abeilles et le rat-taupe nu, représente le niveau d\'organisation sociale le plus élaboré du règne animal.',
          intro2: '',
          sections: [
            {
              title: 'Les sociétés d\'insectes',
              paragraphs: [
                'Les insectes eusociaux (fourmis, abeilles, guêpes, termites) forment les sociétés les plus complexes du règne animal. L\'eusocialité se définit par trois critères : la division du travail en castes (reine, ouvrières, soldats), la coopération dans l\'élevage des jeunes et le chevauchement des générations. Chez les Hyménoptères (fourmis, abeilles), le système de détermination du sexe haplo-diploïde crée une parenté génétique asymétrique qui favorise l\'évolution de l\'altruisme.',
                'Les colonies de fourmis comptent de quelques dizaines à plusieurs millions d\'individus. La fourmi de feu (Solenopsis invicta) forme des « supercolonies » s\'étendant sur des centaines de kilomètres. La division du travail est souvent liée à la taille et à l\'âge des ouvrières : les jeunes soignent le couvain, les plus âgées défendent le nid ou cherchent la nourriture. Les fourmis champignonnistes (Attini) cultivent des jardins de champignons depuis 60 millions d\'années, bien avant l\'invention de l\'agriculture par l\'homme.',
                'Les abeilles (Apis mellifera) illustrent l\'intelligence collective. La danse frétillante de Karl von Frisch transmet la direction et la distance d\'une source de nourriture. La thermorégulation de la ruche est maintenue à 35 °C par la ventilation (battement d\'ailes coordonné des ouvrières) et l\'évaporation d\'eau. Le choix d\'un nouveau site de nidification par un essaim fait intervenir un processus de décision démocratique comparable à un vote.'
              ],
              highlight: 'Les fourmis champignonnistes pratiquent l\'agriculture depuis 60 millions d\'années, cultivant des jardins de champignons dans des « fermes » souterraines climatisées.'
            },
            {
              title: 'Les sociétés de vertébrés',
              paragraphs: [
                'Les primates forment des sociétés caractérisées par des hiérarchies de dominance, des alliances politiques et des comportements de réconciliation. Chez les chimpanzés (Pan troglodytes), le mâle alpha maintient son rang par des coalitions avec d\'autres mâles, et les femelles exercent une influence significative sur la politique du groupe. Les bonobos (Pan paniscus) utilisent les interactions sexuelles pour résoudre les conflits et renforcer les liens sociaux.',
                'Les loups (Canis lupus) vivent en meutes familiales dirigées par un couple reproducteur. La chasse coopérative leur permet de capturer des proies beaucoup plus grandes qu\'eux (élans, bisons). Les suricates (Suricata suricatta) pratiquent la sentinelle altruiste : un individu monte la garde pendant que les autres s\'alimentent, émettant des cris d\'alarme spécifiques selon le type de prédateur (aérien, terrestre).',
                'Les cétacés présentent des cultures distinctes entre populations. Les orques (Orcinus orca) se répartissent en écotypes spécialisés dans différentes proies (poissons, phoques, baleines), chacun transmettant ses techniques de chasse de génération en génération. Les cachalots (Physeter macrocephalus) s\'organisent en clans identifiables par leur dialecte de clics, transmis culturellement.'
              ],
              highlight: 'Les orques possèdent des cultures distinctes : chaque écotype transmet ses techniques de chasse, ses vocalisations et ses comportements sociaux de génération en génération.'
            },
            {
              title: 'L\'altruisme et la théorie de la sélection de parentèle',
              paragraphs: [
                'L\'altruisme biologique — un comportement coûteux pour l\'individu mais bénéfique pour autrui — posait un paradoxe à la théorie de la sélection naturelle. William Hamilton a résolu ce paradoxe en 1964 avec la règle de Hamilton (rB > C) : un comportement altruiste est favorisé par la sélection si le bénéfice pour le receveur (B) multiplié par le degré de parenté (r) dépasse le coût pour l\'altruiste (C).',
                'L\'altruisme réciproque, décrit par Robert Trivers (1971), explique la coopération entre individus non apparentés : un individu aide un autre en s\'attendant à être aidé en retour ultérieurement. Ce système nécessite la reconnaissance individuelle et la mémoire des interactions passées. Les chauves-souris vampires (Desmodus rotundus) régurgitent du sang pour nourrir les congénères affamés, et refusent leur aide aux individus qui n\'ont pas partagé dans le passé.',
                'La théorie des jeux évolutive modélise les stratégies coopératives et compétitives. Le dilemme du prisonnier itéré montre que la stratégie « donnant-donnant » (Tit-for-Tat), qui coopère au premier tour puis imite le choix du partenaire, est remarquablement efficace. La punition altruiste (sanctionner les tricheurs au prix d\'un coût personnel) stabilise la coopération dans les grands groupes.'
              ],
              highlight: 'La règle de Hamilton (rB > C) explique l\'altruisme envers les apparentés : un gène favorisant l\'aide se propage si le bénéfice pour les porteurs du même gène dépasse le coût pour l\'altruiste.'
            }
          ],
          quiz: [
            { q: 'Quels sont les trois critères définissant l\'eusocialité ?', opts: ['Monogamie, coopération, longévité', 'Division en castes, soin coopératif des jeunes, chevauchement des générations', 'Hiérarchie, territorialité, communication', 'Intelligence, outil, langage'], correct: 1, explanation: 'L\'eusocialité se définit par une division du travail en castes reproductrices et non reproductrices, un soin coopératif des jeunes et un chevauchement des générations au sein de la colonie.' },
            { q: 'Que stipule la règle de Hamilton ?', opts: ['Les plus forts survivent', 'L\'altruisme est favorisé si rB > C', 'La coopération est toujours avantageuse', 'Les parasites dominent les hôtes'], correct: 1, explanation: 'La règle de Hamilton (rB > C) prédit qu\'un comportement altruiste est sélectionné si le bénéfice (B) multiplié par le coefficient de parenté (r) dépasse le coût (C) pour l\'altruiste.' },
            { q: 'Comment les chauves-souris vampires coopèrent-elles ?', opts: ['Par la chasse en groupe', 'Par le partage de sang régurgité', 'Par la construction commune de nids', 'Par la défense territoriale'], correct: 1, explanation: 'Les chauves-souris vampires pratiquent l\'altruisme réciproque en régurgitant du sang pour nourrir les individus affamés, en mémorisant qui a partagé dans le passé.' }
          ],
          definitions: [
            { term: 'Eusocialité', def: 'Niveau d\'organisation sociale le plus avancé, caractérisé par une division en castes reproductrices et non reproductrices, un soin coopératif des jeunes et un chevauchement des générations.' },
            { term: 'Sélection de parentèle', def: 'Théorie de Hamilton selon laquelle la sélection naturelle favorise les comportements altruistes envers les individus génétiquement apparentés, augmentant la fitness inclusive.' },
            { term: 'Altruisme réciproque', def: 'Coopération entre individus non apparentés, où l\'aide fournie est « remboursée » ultérieurement, nécessitant reconnaissance individuelle et mémoire des interactions.' },
            { term: 'Hiérarchie de dominance', def: 'Organisation sociale dans laquelle les individus occupent des rangs définissant leur accès prioritaire aux ressources (nourriture, partenaires), réduisant les conflits directs.' },
            { term: 'Fitness inclusive', def: 'Succès reproducteur total d\'un individu incluant ses propres descendants plus ceux des apparentés aidés par son comportement altruiste, pondéré par le degré de parenté.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le rat-taupe nu (Heterocephalus glaber) est le seul mammifère eusocial : dans une colonie, seule la reine se reproduit, tandis que les autres individus assurent le creusement des tunnels et la défense.' },
            { front: '💡 Le savais-tu ?', back: 'J.B.S. Haldane, interrogé sur le sacrifice de soi, aurait déclaré : « Je donnerais ma vie pour deux frères ou huit cousins » — résumant ainsi intuitivement la règle de Hamilton avant même sa formulation mathématique.' },
            { front: '💡 Le savais-tu ?', back: 'Les fourmis argentines (Linepithema humile) ont formé en Europe une « supercolonie » de 6 000 km de long, du Portugal à l\'Italie, dans laquelle tous les individus coopèrent sans agressivité malgré l\'absence de lien familial direct.' }
          ]
        },
        // --- Lesson 3.5 : La cognition animale ---
        {
          slug: 'cognition-animale',
          title: 'La cognition animale',
          description: 'L\'intelligence animale : résolution de problèmes, utilisation d\'outils, conscience de soi et culture.',
          intro: 'La cognition animale étudie les processus mentaux qui sous-tendent la perception, l\'apprentissage, la mémoire, la prise de décision et la résolution de problèmes chez les animaux non humains. Les recherches des dernières décennies ont bouleversé la vision anthropocentrique de l\'intelligence, révélant des capacités cognitives sophistiquées chez les grands singes, les corvidés, les cétacés, les céphalopodes et même les insectes.',
          introHighlight: 'L\'intelligence a évolué indépendamment dans plusieurs lignées : les primates, les corvidés et les céphalopodes ont développé des capacités cognitives complexes par convergence évolutive.',
          intro2: '',
          sections: [
            {
              title: 'L\'utilisation d\'outils',
              paragraphs: [
                'L\'utilisation d\'outils, longtemps considérée comme un propre de l\'homme, a été observée chez de nombreuses espèces. Jane Goodall a révolutionné la primatologie en 1960 en documentant l\'utilisation de brindilles par les chimpanzés pour « pêcher » les termites. Depuis, l\'arsenal des outils des chimpanzés s\'est enrichi : pierres-enclumes pour casser les noix, lances pour chasser les galagos, éponges de feuilles mâchées pour recueillir l\'eau.',
                'Les corbeaux calédoniens (Corvus moneduloides) fabriquent des outils en forme de crochet à partir de brindilles, et les modifient pour les adapter à la taille de la cavité à explorer. En laboratoire, ils résolvent des problèmes « méta-outils » : utiliser un outil court pour récupérer un outil long, lui-même nécessaire pour atteindre la nourriture. Cette planification séquentielle était considérée comme exclusive aux grands singes.',
                'Les loutres de mer (Enhydra lutris) utilisent des pierres comme enclumes pour casser les coquillages, les rangeant sous leur aisselle entre les plongées. Les dauphins du Shark Bay (Australie) portent des éponges marines sur leur rostre pour fouiller le fond sablonneux sans se blesser. Ces comportements, transmis culturellement de mère en fille, illustrent la capacité d\'innovation et de transmission sociale chez les non-primates.'
              ],
              highlight: 'Les corbeaux calédoniens fabriquent des outils composites et résolvent des problèmes impliquant jusqu\'à huit étapes séquentielles, rivalisant avec les capacités des grands singes.'
            },
            {
              title: 'La conscience de soi et la théorie de l\'esprit',
              paragraphs: [
                'Le test du miroir de Gallup (1970) évalue la reconnaissance de soi : un animal est marqué d\'une tache de peinture invisible sans miroir, puis placé devant un miroir. S\'il dirige son attention vers la marque sur son propre corps (et non sur le reflet), il démontre une conscience de soi. Ce test est réussi par les grands singes, les éléphants, les dauphins, les pies bavardes et possiblement les raies Manta.',
                'La théorie de l\'esprit désigne la capacité à attribuer des états mentaux (croyances, désirs, intentions) à autrui. Les chimpanzés comprennent ce que leurs congénères voient et savent : un subordonné évitera de prendre de la nourriture visible par le dominant. Les geais buissonniers (Aphelocoma californica) qui ont volé la cache d\'un autre oiseau recachent ensuite leur propre nourriture en secret, projetant leur propre expérience de voleur sur les autres.',
                'La capacité de planification future a été démontrée chez les grands singes et les corvidés. Des orangs-outans gardent un outil pour une tâche à résoudre le lendemain. Les geais buissonniers stockent de la nourriture en fonction de ce qu\'ils prévoient vouloir manger le lendemain, et non de ce qu\'ils désirent au moment du stockage — une capacité de « voyage mental dans le temps » remarquable.'
              ],
              highlight: 'Les geais buissonniers recachent leur nourriture en secret s\'ils ont déjà volé les caches d\'autrui, projetant leur propre expérience de tromperie sur les autres — signe d\'une théorie de l\'esprit.'
            },
            {
              title: 'Culture et transmission sociale',
              paragraphs: [
                'La culture animale se définit par des comportements appris socialement, variant entre populations de la même espèce et transmis de génération en génération. Chez les chimpanzés, plus de 40 traditions culturelles distinctes ont été identifiées (techniques de cassage de noix, pêche aux termites, danses de la pluie), variant entre communautés voisines — un parallèle frappant avec la diversité culturelle humaine.',
                'L\'apprentissage social comprend l\'imitation (reproduction de l\'action observée), l\'émulation (atteindre le même résultat par un moyen propre) et l\'enseignement actif. Les suricates enseignent à leurs jeunes à manipuler des scorpions en leur présentant des proies progressivement plus dangereuses (d\'abord mortes, puis désarmées, puis intactes). Les orques enseignent l\'échouage volontaire pour capturer les phoques, accompagnant les jeunes dans leurs premières tentatives.',
                'L\'intelligence des céphalopodes (pieuvres, seiches) pose un défi conceptuel majeur. La pieuvre possède environ 500 millions de neurones, répartis entre un cerveau central et huit « mini-cerveaux » dans chaque bras. Elle apprend par observation (en regardant un congénère résoudre un problème), ouvre des bocaux par essai-erreur, et certaines espèces utilisent des coquilles de noix de coco comme abris mobiles — tout cela avec un cerveau structurellement radicalement différent de celui des vertébrés et une durée de vie de seulement 1 à 2 ans.'
              ],
              highlight: 'Les chimpanzés possèdent plus de 40 traditions culturelles distinctes qui varient entre communautés, démontrant une diversité culturelle comparable, en miniature, à celle des sociétés humaines.'
            }
          ],
          quiz: [
            { q: 'Quels animaux réussissent le test du miroir ?', opts: ['Tous les mammifères', 'Seulement les primates', 'Les grands singes, éléphants, dauphins et pies', 'Aucun animal non humain'], correct: 2, explanation: 'Le test du miroir est réussi par les grands singes, les éléphants, les grands dauphins, les pies bavardes et possiblement les raies Manta, suggérant une forme de conscience de soi.' },
            { q: 'Qu\'est-ce que la théorie de l\'esprit en cognition animale ?', opts: ['La capacité de penser abstraitement', 'La capacité d\'attribuer des états mentaux à autrui', 'La conscience de sa propre mortalité', 'La capacité de rêver'], correct: 1, explanation: 'La théorie de l\'esprit est la capacité d\'attribuer des croyances, désirs et intentions à d\'autres individus — comprendre que l\'autre a un esprit avec ses propres pensées.' },
            { q: 'Combien de neurones possède environ une pieuvre ?', opts: ['10 millions', '100 millions', '500 millions', '1 milliard'], correct: 2, explanation: 'La pieuvre possède environ 500 millions de neurones, dont les deux tiers sont situés dans ses huit bras plutôt que dans son cerveau central.' }
          ],
          definitions: [
            { term: 'Cognition animale', def: 'Ensemble des processus mentaux (perception, apprentissage, mémoire, prise de décision, résolution de problèmes) étudiés chez les animaux non humains.' },
            { term: 'Test du miroir', def: 'Protocole expérimental de Gallup évaluant la reconnaissance de soi : l\'animal doit identifier une marque sur son propre corps en utilisant un miroir.' },
            { term: 'Théorie de l\'esprit', def: 'Capacité cognitive à attribuer des états mentaux (croyances, désirs, intentions) à d\'autres individus et à comprendre qu\'ils peuvent différer des siens propres.' },
            { term: 'Culture animale', def: 'Ensemble de comportements acquis par apprentissage social, variant entre populations de la même espèce et transmis de génération en génération.' },
            { term: 'Méta-outil', def: 'Utilisation d\'un outil pour accéder à un autre outil, impliquant une planification séquentielle de plusieurs étapes, observée chez les corvidés et les grands singes.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La pieuvre Inky, célèbre pensionnaire de l\'aquarium national de Nouvelle-Zélande, s\'est échappée en 2016 en rampant hors de son aquarium, traversant le sol, et se glissant dans un tuyau d\'évacuation menant à l\'océan.' },
            { front: '💡 Le savais-tu ?', back: 'Le perroquet gris du Gabon Alex, étudié pendant 30 ans par la chercheuse Irene Pepperberg, maîtrisait plus de 100 mots anglais, comprenait les concepts de « même » et « différent », et savait compter jusqu\'à 8.' },
            { front: '💡 Le savais-tu ?', back: 'Les abeilles sont capables d\'apprendre le concept de zéro — comprendre que « rien » est une quantité inférieure à « un » — une capacité cognitive que les enfants humains ne maîtrisent pas avant l\'âge de 4 ans environ.' }
          ]
        }
      ]
    },
    // ==================== HUB 4 : Entomologie ====================
    {
      slug: 'entomologie',
      title: 'Entomologie',
      description: 'Le monde des insectes : diversité, pollinisation, sociétés, métamorphose et rôle écologique.',
      lessons: [
        // --- Lesson 4.1 : Le monde des insectes ---
        {
          slug: 'monde-des-insectes',
          title: 'Le monde des insectes',
          description: 'Introduction à la classe des insectes : anatomie, diversité et adaptations.',
          intro: 'Les insectes constituent la classe d\'animaux la plus diversifiée de la planète avec environ 1 million d\'espèces décrites et peut-être 5 millions restant à découvrir. Présents sur tous les continents (y compris l\'Antarctique avec le moucheron Belgica antarctica), ils peuplent presque tous les habitats terrestres et dulçaquicoles. Leur succès évolutif, qui remonte au Dévonien (il y a 400 millions d\'années), repose sur leur petite taille, leur exosquelette, leurs ailes et leur métamorphose.',
          introHighlight: 'Un insecte sur quatre sur Terre est un coléoptère : avec 400 000 espèces décrites, les coléoptères représentent l\'ordre le plus diversifié du vivant.',
          intro2: '',
          sections: [
            {
              title: 'L\'anatomie des insectes',
              paragraphs: [
                'Le corps des insectes est organisé en trois tagmes : la tête (portant les yeux composés, les antennes et les pièces buccales), le thorax (portant trois paires de pattes et généralement deux paires d\'ailes) et l\'abdomen (contenant les organes digestifs, reproducteurs et respiratoires). Cet exosquelette de chitine et de sclérotine offre une armure légère et résistante, imperméabilisée par une couche cireuse réduisant les pertes d\'eau.',
                'Le système respiratoire des insectes est constitué de trachées, tubes ramifiés s\'ouvrant par des spiracles latéraux et acheminant l\'air directement aux cellules sans intervention du sang. Ce système, très efficace pour les petits organismes, limite cependant la taille maximale des insectes actuels à environ 15-20 cm d\'envergure. Au Carbonifère, lorsque l\'oxygène atmosphérique atteignait 35 % (contre 21 % aujourd\'hui), des libellules géantes (Meganeura) dépassaient 70 cm d\'envergure.',
                'Les yeux composés des insectes sont constitués de milliers d\'unités visuelles appelées ommatidies. La libellule (Aeshna) en possède jusqu\'à 30 000, offrant un champ visuel quasi panoramique et une sensibilité exceptionnelle au mouvement. Certains insectes perçoivent les ultraviolets (les abeilles voient des motifs UV sur les fleurs invisibles pour nous) et la lumière polarisée (utilisée comme compas de navigation par les fourmis du désert Cataglyphis).'
              ],
              highlight: 'Les trachées des insectes acheminent l\'oxygène directement aux cellules, un système si efficace qu\'au Carbonifère, avec 35 % d\'O₂, des libellules géantes de 70 cm pouvaient voler.'
            },
            {
              title: 'Les pièces buccales et l\'alimentation',
              paragraphs: [
                'Les pièces buccales des insectes se sont diversifiées en réponse aux régimes alimentaires variés. Le type broyeur ancestral (mandibules puissantes) est conservé chez les coléoptères, les sauterelles et les fourmis. Le type piqueur-suceur (stylets perforants) des moustiques, des pucerons et des punaises permet de se nourrir de sang ou de sève. Le type lécheur-suceur des abeilles combine un labium allongé (glosse) pour récolter le nectar et des mandibules pour manipuler la cire.',
                'Le type siphonneur des papillons consiste en une trompe spiralée (proboscis) pouvant dépasser la longueur du corps, permettant d\'accéder au nectar au fond de fleurs tubulaires profondes. Le sphinx de Morgan (Xanthopan morganii), prédit par Darwin avant sa découverte, possède une trompe de 30 cm correspondant exactement à la profondeur de l\'éperon de l\'orchidée Angraecum sesquipedale de Madagascar.',
                'Les adaptations alimentaires des insectes sont d\'une diversité prodigieuse. Les bousiers roulent et enterrent les excréments des herbivores, recyclant les nutriments et aérant le sol. Les larves de mouches saprophages décomposent les cadavres (entomologie forensique). Les fourmis moissonneuses stockent des graines dans des greniers souterrains. Les guêpes parasitoïdes pondent dans les chenilles vivantes dont leurs larves se nourrissent de l\'intérieur.'
              ],
              highlight: 'Darwin a prédit l\'existence d\'un papillon à trompe de 30 cm à Madagascar, découvert 40 ans plus tard, uniquement en observant l\'éperon profond d\'une orchidée.'
            },
            {
              title: 'L\'importance écologique des insectes',
              paragraphs: [
                'Les insectes constituent la biomasse animale dominante des écosystèmes terrestres. Leur biomasse totale est estimée à 300 millions de tonnes, soit 17 fois plus que l\'humanité. Ils assurent des fonctions écologiques irremplaçables : pollinisation, décomposition de la matière organique, recyclage des nutriments, dispersion des graines, contrôle biologique des ravageurs et alimentation d\'innombrables vertébrés (oiseaux, chauve-souris, poissons, amphibiens).',
                'L\' « insectageddon » — le déclin mondial des populations d\'insectes — est l\'une des crises écologiques les plus alarmantes du XXIe siècle. L\'étude de Krefeld (2017) a révélé un déclin de 75 % de la biomasse d\'insectes volants en Allemagne en 27 ans. Les causes principales sont l\'agriculture intensive (pesticides néonicotinoïdes, monocultures), la destruction des habitats, la pollution lumineuse et le changement climatique.',
                'La conservation des insectes nécessite une approche systémique : réduction des pesticides, maintien de corridors écologiques, préservation des haies et des friches, extinction de l\'éclairage nocturne superflu et promotion de l\'agriculture biologique. L\'élevage d\'insectes comestibles (entomophagie) est aussi envisagé comme alternative durable à l\'élevage conventionnel : les grillons nécessitent 12 fois moins de nourriture que le bœuf pour produire la même quantité de protéines.'
              ],
              highlight: 'La biomasse totale des insectes sur Terre est estimée à 300 millions de tonnes, soit 17 fois plus que l\'ensemble de l\'humanité.'
            }
          ],
          quiz: [
            { q: 'Combien de paires de pattes possèdent les insectes ?', opts: ['2 paires', '3 paires', '4 paires', '5 paires'], correct: 1, explanation: 'Les insectes (Hexapoda) possèdent trois paires de pattes attachées au thorax, ce qui les distingue des arachnides (4 paires) et des myriapodes (nombreuses paires).' },
            { q: 'Comment les insectes respirent-ils ?', opts: ['Par des poumons', 'Par des branchies', 'Par un système de trachées', 'Par la peau'], correct: 2, explanation: 'Les insectes respirent grâce à un réseau de trachées — tubes ramifiés s\'ouvrant par des spiracles — qui acheminent l\'oxygène directement aux cellules.' },
            { q: 'Quel déclin de la biomasse d\'insectes volants l\'étude de Krefeld a-t-elle mesuré ?', opts: ['25 %', '50 %', '75 %', '90 %'], correct: 2, explanation: 'L\'étude de Krefeld (2017) a documenté un déclin de 75 % de la biomasse d\'insectes volants dans les réserves naturelles allemandes en 27 ans.' }
          ],
          definitions: [
            { term: 'Insecte', def: 'Arthropode de la classe des Hexapoda caractérisé par un corps en trois parties (tête, thorax, abdomen), trois paires de pattes, généralement deux paires d\'ailes et un exosquelette chitineux.' },
            { term: 'Trachée', def: 'Tube respiratoire ramifié des insectes, s\'ouvrant par des spiracles et acheminant l\'oxygène directement aux tissus sans intervention du système circulatoire.' },
            { term: 'Ommatidie', def: 'Unité fonctionnelle de l\'œil composé des arthropodes, comportant une lentille, des cellules photoréceptrices et des cellules pigmentaires.' },
            { term: 'Exosquelette', def: 'Squelette externe rigide composé de chitine et de sclérotine chez les arthropodes, assurant protection, soutien mécanique et points d\'ancrage musculaires.' },
            { term: 'Spiracle', def: 'Ouverture latérale du corps des insectes donnant accès au système trachéen pour les échanges gazeux avec l\'environnement.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le scarabée bombardier (Brachinus) produit une explosion chimique à 100 °C en mélangeant dans son abdomen de l\'hydroquinone et du peroxyde d\'hydrogène, projetant un spray brûlant sur ses agresseurs.' },
            { front: '💡 Le savais-tu ?', back: 'La puce peut sauter jusqu\'à 150 fois sa propre longueur, ce qui équivaudrait pour un humain à un bond de 270 mètres — grâce à une protéine élastique (résiline) stockant l\'énergie comme un ressort.' },
            { front: '💡 Le savais-tu ?', back: 'Belgica antarctica, un moucheron de 6 mm vivant en Antarctique, est le plus grand animal terrestre permanent du continent — les manchots et les phoques étant des animaux marins.' }
          ]
        },
        // --- Lesson 4.2 : Les coléoptères ---
        {
          slug: 'coleopteres',
          title: 'Les coléoptères',
          description: 'L\'ordre d\'insectes le plus diversifié : scarabées, coccinelles, lucanes et charançons.',
          intro: 'Les coléoptères (Coleoptera) forment l\'ordre le plus riche en espèces du règne animal avec environ 400 000 espèces décrites, soit près d\'un quart de tous les insectes connus. Leur succès évolutif repose notamment sur leurs élytres — la première paire d\'ailes, durcie et transformée en bouclier protecteur — qui abritent les ailes membraneuses postérieures et permettent la colonisation de milieux variés, du désert aux forêts tropicales en passant par les cours d\'eau.',
          introHighlight: 'Avec 400 000 espèces décrites, les coléoptères sont l\'ordre le plus diversifié du vivant : une espèce animale sur quatre est un coléoptère.',
          intro2: '',
          sections: [
            {
              title: 'Diversité et classification',
              paragraphs: [
                'Les coléoptères se répartissent en quatre sous-ordres principaux. Les Adéphages comprennent les carabes et les dytiques (prédateurs). Les Polyphages, le sous-ordre le plus vaste, incluent les scarabées, les coccinelles, les charançons, les chrysomèles et les longicornes. Les Myxophages et les Archostemata sont des groupes plus restreints. La famille des Curculionidae (charançons), avec environ 60 000 espèces, est la plus grande famille d\'insectes.',
                'Les coléoptères occupent une gamme extraordinaire de niches écologiques. Les carabes sont des prédateurs actifs du sol. Les bousiers (Scarabaeidae) recyclent les excréments. Les scolytes (Curculionidae) creusent des galeries sous l\'écorce des arbres. Les lucioles (Lampyridae) produisent de la bioluminescence pour la communication sexuelle. Les coccinelles (Coccinellidae) sont des auxiliaires agricoles précieux, dévorant pucerons et cochenilles.',
                'La taille des coléoptères varie du Scydosella musawasensis (0,3 mm, le plus petit insecte non parasite connu) au scarabée Goliath (Goliathus goliatus, jusqu\'à 11 cm et 100 g, le plus lourd insecte volant) et au titan (Titanus giganteus, jusqu\'à 17 cm, le plus long coléoptère). Le scarabée rhinocéros (Dynastes hercules) est proportionnellement l\'animal le plus fort du monde, capable de soulever 850 fois son propre poids.'
              ],
              highlight: 'Le scarabée rhinocéros est l\'animal le plus fort du monde proportionnellement à sa taille, capable de soulever 850 fois son propre poids.'
            },
            {
              title: 'Les élytres et les adaptations',
              paragraphs: [
                'Les élytres constituent l\'innovation clé des coléoptères. Cette première paire d\'ailes, sclérifiée et rigide, ne sert plus au vol mais protège la seconde paire d\'ailes membraneuses repliées en dessous, ainsi que l\'abdomen. Cette armure permet aux coléoptères de s\'enfouir dans le sol, le bois ou les excréments sans endommager leurs ailes de vol — un avantage compétitif majeur par rapport aux autres insectes.',
                'Les adaptations des coléoptères au milieu aquatique sont remarquables. Les dytiques (Dytiscidae) nagent grâce à des pattes postérieures aplaties en rames et emportent une bulle d\'air sous leurs élytres, formant un « poumon physique » qui extrait l\'oxygène dissous dans l\'eau (plastron). Les gyrin (Gyrinidae) possèdent des yeux divisés en deux : la moitié supérieure voit dans l\'air, la moitié inférieure dans l\'eau.',
                'Certains coléoptères du désert de Namibie (Stenocara gracilipes) collectent l\'eau du brouillard grâce à la microstructure de leurs élytres : des bosses hydrophiles captent les gouttelettes d\'eau qui ruissellent le long de sillons hydrophobes jusqu\'à la bouche de l\'insecte. Ce mécanisme a inspiré le développement de filets collecteurs de brouillard et de surfaces biomimétiques pour la récupération d\'eau.'
              ],
              highlight: 'Le coléoptère du désert namibien collecte l\'eau du brouillard grâce à la microstructure alternant zones hydrophiles et hydrophobes de ses élytres — une innovation biomimétique.'
            },
            {
              title: 'Les coléoptères et l\'homme',
              paragraphs: [
                'Les coléoptères entretiennent des relations complexes avec les sociétés humaines. Les coccinelles, auxiliaires de lutte biologique, sont élevées et commercialisées pour contrôler les pucerons dans les cultures et les serres. Le ver à soie du chêne (Calosoma sycophanta) dévore les chenilles processionnaires. L\'industrie de la lutte biologique utilise des dizaines d\'espèces de coléoptères prédateurs pour réduire l\'usage des pesticides chimiques.',
                'À l\'inverse, de nombreux coléoptères sont des ravageurs redoutables. Le charançon du coton (Anthonomus grandis) a dévasté les plantations du sud des États-Unis au début du XXe siècle. Le doryphore (Leptinotarsa decemlineata) ravage les cultures de pomme de terre. Les scolytes (Ips typographus) provoquent des dépérissements forestiers massifs, aggravés par le changement climatique qui affaiblit les défenses des arbres hôtes.',
                'Les scarabées sacrés (Scarabaeus sacer) occupaient une place centrale dans l\'Égypte ancienne, symbolisant le dieu Khépri et la renaissance solaire. Les élytres iridescents de certains buprestes (Chrysochroa) sont utilisés depuis des siècles en joaillerie et en décoration textile en Asie du Sud-Est. Aujourd\'hui, les propriétés optiques de ces élytres — cristaux photoniques naturels — inspirent le développement de peintures anti-contrefaçon et de capteurs optiques.'
              ],
              highlight: 'Le scarabée sacré symbolisait le dieu solaire Khépri en Égypte ancienne : sa boule d\'excréments roulée évoquait le soleil traversant le ciel.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'un élytre ?', opts: ['Une antenne spécialisée', 'Une aile durcie servant de bouclier protecteur', 'Un type de patte fouisseuse', 'Un organe respiratoire'], correct: 1, explanation: 'Les élytres sont la première paire d\'ailes des coléoptères, sclérifiée et rigide, qui protège les ailes membraneuses postérieures et l\'abdomen.' },
            { q: 'Quelle est la plus grande famille d\'insectes ?', opts: ['Les Scarabaeidae', 'Les Coccinellidae', 'Les Curculionidae (charançons)', 'Les Carabidae'], correct: 2, explanation: 'Les Curculionidae (charançons) comptent environ 60 000 espèces décrites, ce qui en fait la plus grande famille d\'insectes et l\'une des plus grandes familles d\'animaux.' },
            { q: 'Comment le coléoptère du désert namibien collecte-t-il l\'eau ?', opts: ['Par condensation dans ses trachées', 'Grâce aux microstructures hydrophiles et hydrophobes de ses élytres', 'En creusant des puits dans le sable', 'Par absorption cutanée'], correct: 1, explanation: 'Les bosses hydrophiles de ses élytres captent les gouttelettes de brouillard qui ruissellent le long de sillons hydrophobes jusqu\'à sa bouche.' }
          ],
          definitions: [
            { term: 'Coléoptère', def: 'Insecte de l\'ordre des Coleoptera caractérisé par une première paire d\'ailes transformée en élytres rigides protégeant les ailes membraneuses postérieures.' },
            { term: 'Élytre', def: 'Aile antérieure durcie et sclérifiée des coléoptères, servant de bouclier protecteur pour les ailes postérieures et l\'abdomen, et ne participant pas au vol.' },
            { term: 'Plastron', def: 'Film d\'air retenu par des structures hydrophobes sur le corps d\'un insecte aquatique, fonctionnant comme un poumon physique en extrayant l\'oxygène dissous dans l\'eau.' },
            { term: 'Bioluminescence', def: 'Production de lumière par un organisme vivant grâce à une réaction chimique impliquant la luciférine et la luciférase, utilisée pour la communication, la prédation ou le camouflage.' },
            { term: 'Lutte biologique', def: 'Méthode de contrôle des organismes nuisibles utilisant des ennemis naturels (prédateurs, parasites, pathogènes) au lieu de pesticides chimiques.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Les lucioles (Lampyridae) produisent leur lumière avec un rendement de 98 % — presque toute l\'énergie est convertie en lumière, contre seulement 10 % pour une ampoule à incandescence.' },
            { front: '💡 Le savais-tu ?', back: 'Le plus ancien coléoptère fossile connu date du Permien inférieur, il y a environ 295 millions d\'années. Les coléoptères ont survécu aux cinq grandes extinctions de masse.' },
            { front: '💡 Le savais-tu ?', back: 'Les bousiers sont si importants pour les écosystèmes de pâturage que l\'Australie a importé des espèces africaines dans les années 1970 pour recycler les excréments de bovins, absents de la faune locale.' }
          ]
        },
        // --- Lesson 4.3 : La pollinisation par les insectes ---
        {
          slug: 'pollinisation-insectes',
          title: 'La pollinisation par les insectes',
          description: 'Le rôle vital des insectes pollinisateurs dans les écosystèmes et l\'agriculture.',
          intro: 'La pollinisation entomophile — le transport du pollen par les insectes — est un service écosystémique fondamental dont dépendent environ 75 % des cultures vivrières et 90 % des plantes à fleurs sauvages. Cette relation mutualiste, coévoluée depuis plus de 100 millions d\'années, est aujourd\'hui menacée par le déclin massif des populations d\'insectes pollinisateurs, posant un défi majeur pour la sécurité alimentaire mondiale.',
          introHighlight: 'La valeur économique de la pollinisation par les insectes est estimée à plus de 150 milliards d\'euros par an à l\'échelle mondiale, représentant 10 % de la valeur de la production alimentaire.',
          intro2: '',
          sections: [
            {
              title: 'Les principaux pollinisateurs',
              paragraphs: [
                'Les abeilles (Apoidea) sont les pollinisateurs les plus importants, avec environ 20 000 espèces dans le monde. L\'abeille domestique (Apis mellifera) n\'est que l\'une d\'entre elles : les bourdons (Bombus), les abeilles solitaires (osmies, mégachiles, andrènes) et les abeilles sans dard (Meliponini) jouent des rôles tout aussi essentiels. Les bourdons, capables de « vibrer » les anthères (buzz pollination), sont les seuls pollinisateurs efficaces des tomates, des poivrons et des aubergines.',
                'Les papillons et les mites (Lepidoptera) pollinisent les fleurs à corolle tubulaire grâce à leur longue trompe. Les syrphes (Syrphidae), mouches mimant l\'apparence des abeilles, sont des pollinisateurs très sous-estimés : une étude de 2020 a montré qu\'ils visitent les fleurs de 72 % des cultures mondiales. Les coléoptères, pollinisateurs ancestraux, préfèrent les fleurs ouvertes à étamines accessibles (magnolias, nénuphars).',
                'La coévolution plante-pollinisateur a produit des spécialisations extraordinaires. Le figuier (Ficus) ne peut être pollinisé que par sa guêpe spécifique du genre Agaonidae : chacune des 750 espèces de figuiers a sa propre espèce de guêpe. L\'orchidée seau (Coryanthes) piège les abeilles mâles dans un bain de liquide et ne les laisse sortir que par un passage étroit qui dépose les pollinies sur leur dos.'
              ],
              highlight: 'Chacune des 750 espèces de figuiers est pollinisée par une seule espèce de guêpe qui lui est spécifique — un exemple extrême de coévolution mutualiste.'
            },
            {
              title: 'Le déclin des pollinisateurs',
              paragraphs: [
                'Le syndrome d\'effondrement des colonies (CCD), apparu massivement en 2006 aux États-Unis, a alerté le monde sur la vulnérabilité des abeilles domestiques. Les pertes annuelles de colonies atteignent 30 à 40 % dans certains pays. Les causes sont multifactorielles : pesticides néonicotinoïdes, varroa (Varroa destructor, acarien parasite), pathogènes (Nosema ceranae), perte d\'habitats floraux et changement climatique.',
                'Les néonicotinoïdes, insecticides systémiques absorbés par toute la plante, contaminent le pollen et le nectar à des doses sublétales mais chroniques. Ils perturbent la navigation des abeilles, leur apprentissage, leur immunité et leur reproduction. L\'Union européenne a interdit en 2018 l\'usage en plein champ de trois néonicotinoïdes (imidaclopride, clothianidine, thiaméthoxame), mais leur usage persiste dans de nombreux pays.',
                'Les pollinisateurs sauvages (abeilles solitaires, bourdons, syrphes, papillons) subissent un déclin encore plus alarmant que les abeilles domestiques. En Europe, 9,2 % des espèces d\'abeilles sauvages sont menacées d\'extinction. La simplification des paysages agricoles (disparition des haies, des prairies et des bords de champs) réduit les ressources florales et les sites de nidification nécessaires à ces espèces.'
              ],
              highlight: 'Le varroa (Varroa destructor), acarien parasite originaire d\'Asie, est la principale cause de mortalité des colonies d\'abeilles domestiques dans le monde.'
            },
            {
              title: 'Protéger les pollinisateurs',
              paragraphs: [
                'La protection des pollinisateurs nécessite des actions à toutes les échelles. À l\'échelle individuelle, planter des fleurs mellifères indigènes, maintenir des zones non tondues et installer des hôtels à insectes fournissent des ressources alimentaires et des sites de nidification. Éviter l\'usage de pesticides dans les jardins et privilégier les plantes locales non hybrides (dont le pollen est accessible) sont des gestes concrets.',
                'À l\'échelle agricole, les bandes fleuries en bordure de parcelles, les cultures de couverture (trèfle, moutarde, phacélie) et les rotations diversifiées maintiennent les communautés de pollinisateurs. L\'agroécologie et l\'agriculture biologique, en réduisant les intrants chimiques et en diversifiant les paysages, ont montré des effets positifs significatifs sur l\'abondance et la diversité des pollinisateurs.',
                'La recherche en écologie de la pollinisation développe des outils novateurs. Le suivi automatisé par caméras et intelligence artificielle identifie les espèces de pollinisateurs visitant les fleurs en temps réel. La génétique du pollen (metabarcoding) révèle les réseaux plante-pollinisateur à l\'échelle du paysage. Les programmes de science citoyenne (SPIPOLL en France, Pollinator Watch au Royaume-Uni) mobilisent des milliers de bénévoles pour surveiller les populations de pollinisateurs.'
              ],
              highlight: 'Les bandes fleuries en bordure de parcelles agricoles augmentent de 25 % en moyenne l\'abondance des pollinisateurs sauvages et améliorent les rendements des cultures voisines.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des cultures vivrières dépend de la pollinisation par les insectes ?', opts: ['25 %', '50 %', '75 %', '90 %'], correct: 2, explanation: 'Environ 75 % des cultures vivrières mondiales dépendent, au moins en partie, de la pollinisation par les insectes pour leur reproduction.' },
            { q: 'Qu\'est-ce que le « buzz pollination » ?', opts: ['Le bruit des abeilles dans la ruche', 'La vibration des anthères par les bourdons pour libérer le pollen', 'Le vol rapide des abeilles entre les fleurs', 'La communication par vibrations'], correct: 1, explanation: 'Le buzz pollination est la technique utilisée par les bourdons qui vibrent leurs muscles de vol pour secouer les anthères et libérer le pollen, essentielle pour les tomates et les aubergines.' },
            { q: 'Quel parasite est la principale cause de mortalité des abeilles domestiques ?', opts: ['Le frelon asiatique', 'Le varroa', 'Le Nosema', 'Le petit coléoptère de la ruche'], correct: 1, explanation: 'Varroa destructor, un acarien parasite originaire de l\'abeille asiatique (Apis cerana), est la première cause de mortalité des colonies d\'Apis mellifera dans le monde.' }
          ],
          definitions: [
            { term: 'Pollinisation entomophile', def: 'Transport du pollen d\'une fleur à une autre par les insectes, assurant la fécondation croisée de 75 % des cultures et 90 % des plantes à fleurs sauvages.' },
            { term: 'Néonicotinoïde', def: 'Classe d\'insecticides systémiques agissant sur les récepteurs nicotiniques du système nerveux des insectes, persistant dans le pollen et le nectar des plantes traitées.' },
            { term: 'Buzz pollination', def: 'Technique de pollinisation par vibration : le bourdon vibre ses muscles thoraciques pour secouer les anthères poricides et libérer le pollen (tomate, aubergine, myrtille).' },
            { term: 'Syndrome d\'effondrement des colonies', def: 'Disparition brutale et inexpliquée des abeilles ouvrières d\'une ruche, laissant la reine et le couvain abandonnés, observée massivement depuis 2006.' },
            { term: 'Plante mellifère', def: 'Plante produisant du nectar et/ou du pollen en quantité suffisante pour être exploitée par les abeilles et autres pollinisateurs.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Sans les insectes pollinisateurs, il n\'y aurait plus de café, de chocolat, de pommes, de fraises, de tomates, d\'amandes ni de melons — des cultures qui dépendent totalement ou partiellement de la pollinisation animale.' },
            { front: '💡 Le savais-tu ?', back: 'En Chine, dans certaines régions du Sichuan où les abeilles ont disparu à cause des pesticides, les agriculteurs pollinisent manuellement les pommiers et les poiriers au pinceau — une tâche coûteuse et fastidieuse.' },
            { front: '💡 Le savais-tu ?', back: 'Une seule abeille ouvrière visite entre 50 et 1 000 fleurs par sortie et effectue environ 10 voyages par jour. Pour produire 1 kg de miel, les abeilles d\'une ruche parcourent collectivement l\'équivalent de 4 fois le tour de la Terre.' }
          ]
        },
        // --- Lesson 4.4 : Les sociétés d'insectes ---
        {
          slug: 'societes-insectes',
          title: 'Les sociétés d\'insectes',
          description: 'L\'organisation complexe des fourmilières, des ruches et des termitières.',
          intro: 'Les sociétés d\'insectes comptent parmi les organisations biologiques les plus complexes de la planète. Les fourmis, les abeilles, les guêpes et les termites ont développé des systèmes sociaux d\'une sophistication remarquable : division du travail en castes spécialisées, communication chimique élaborée, architecture monumentale et comportements collectifs émergents. Ces « superorganismes » illustrent comment l\'intelligence peut émerger de la coopération de millions d\'individus aux capacités limitées.',
          introHighlight: 'Les fourmis représentent environ 15 à 20 % de la biomasse animale terrestre et ont colonisé tous les continents sauf l\'Antarctique.',
          intro2: '',
          sections: [
            {
              title: 'L\'organisation des fourmilières',
              paragraphs: [
                'Une fourmilière est un superorganisme dans lequel chaque individu est comparable à une cellule d\'un corps multicellulaire. La reine, souvent unique, est la seule femelle fertile et peut vivre plus de 30 ans (Lasius niger). Les ouvrières, femelles stériles, se répartissent les tâches selon leur âge et leur taille : les plus jeunes soignent le couvain (nourrices), les intermédiaires entretiennent le nid et stockent la nourriture, les plus âgées fourragement et défendent la colonie.',
                'La communication chez les fourmis repose principalement sur les phéromones. Les phéromones de piste guident les ouvrières vers les sources de nourriture, créant des réseaux de fourragement auto-organisés qui s\'optimisent par rétroaction positive (plus une piste est fréquentée, plus elle est marquée). Les phéromones d\'alarme déclenchent la défense collective. Les phéromones de la reine inhibent le développement ovarien des ouvrières, maintenant sa suprématie reproductive.',
                'Certaines espèces de fourmis ont développé des comportements comparables à l\'agriculture et à l\'élevage humains. Les fourmis champignonnistes (tribu Attini, 250 espèces) cultivent des jardins de champignons dans des chambres climatisées, utilisant des feuilles découpées comme substrat. Les fourmis pastorales (Lasius niger, Formica) élèvent des pucerons pour récolter leur miellat sucré, les protégeant des prédateurs et les déplaçant vers de nouvelles plantes.'
              ],
              highlight: 'Une reine de fourmi Lasius niger peut vivre plus de 30 ans et fonder une colonie de plusieurs dizaines de milliers d\'ouvrières à partir d\'un seul vol nuptial.'
            },
            {
              title: 'La ruche et ses merveilles',
              paragraphs: [
                'La ruche d\'Apis mellifera abrite environ 50 000 à 60 000 individus en été. Les alvéoles hexagonales du rayon de cire sont une prouesse d\'ingénierie : la géométrie hexagonale maximise l\'espace de stockage tout en minimisant la quantité de cire nécessaire — un problème d\'optimisation mathématique résolu par les abeilles il y a des millions d\'années. Chaque alvéole est inclinée de 13° vers le haut pour empêcher le miel de couler.',
                'La gelée royale, sécrétée par les glandes hypopharyngiennes des jeunes ouvrières, est l\'unique aliment de la reine tout au long de sa vie. C\'est cette alimentation différenciée qui détermine le destin de la larve : une larve nourrie exclusivement de gelée royale deviendra reine (fertile, vivant 3 à 5 ans), tandis qu\'une larve nourrie de gelée puis de pollen et de miel deviendra ouvrière (stérile, vivant 5 à 6 semaines en été).',
                'La thermorégulation de la ruche est un exemple d\'homéostasie collective. En hiver, les abeilles forment une grappe serrée et vibrent leurs muscles de vol pour produire de la chaleur, maintenant le centre de la grappe à 35 °C même par -20 °C extérieur. En été, des ouvrières récoltent de l\'eau et la déposent en gouttelettes dans la ruche, tandis que d\'autres ventilent en battant des ailes, créant un système d\'air conditionné par évaporation.'
              ],
              highlight: 'C\'est uniquement l\'alimentation à la gelée royale qui distingue une reine d\'une ouvrière : elles sont génétiquement identiques, mais la reine vit 50 fois plus longtemps.'
            },
            {
              title: 'Les termitières : cathédrales vivantes',
              paragraphs: [
                'Les termites (Isoptera, aujourd\'hui inclus dans l\'ordre des Blattodea) sont des insectes sociaux qui se distinguent des fourmis par plusieurs traits : les deux sexes contribuent aux castes non reproductrices, la colonie est fondée par un couple royal, et leur régime alimentaire est basé sur la cellulose (bois, litière). Ils digèrent la cellulose grâce à des symbiotes intestinaux : protozoaires flagellés chez les termites inférieurs, champignons cultivés (genre Termitomyces) chez les termites supérieurs.',
                'Les termitières de Macrotermes bellicosus en Afrique peuvent atteindre 9 mètres de haut et abriter plusieurs millions d\'individus. Rapportée à la taille de l\'insecte, cette structure équivaudrait à un bâtiment de 1 500 mètres de haut pour un humain. Leur architecture intègre un système de ventilation sophistiqué : des cheminées et des galeries canalisent les flux d\'air, maintenant la température intérieure stable et le taux de CO₂ à un niveau tolérable.',
                'Les soldats termites présentent des spécialisations défensives étonnantes. Chez les Nasutitermes, la tête est prolongée par un « nez » (nasus) projetant une substance collante et toxique sur les ennemis. Chez les Neocapritermes taracua, les soldats âgés développent des « sacs à dos explosifs » de cristaux toxiques : lorsqu\'ils sont attaqués, ils contractent leur abdomen et explosent, aspergeant l\'intrus d\'un liquide corrosif — un acte d\'altruisme suicidaire.'
              ],
              highlight: 'Rapportée à la taille de l\'insecte, une termitière de 9 mètres équivaut à un gratte-ciel de 1 500 mètres pour un humain, avec un système de climatisation intégré.'
            }
          ],
          quiz: [
            { q: 'Pourquoi les alvéoles des abeilles sont-elles hexagonales ?', opts: ['Par hasard', 'Pour maximiser le stockage en minimisant la cire', 'Pour faciliter l\'accès de la reine', 'Pour mieux conserver la chaleur'], correct: 1, explanation: 'La géométrie hexagonale est la solution mathématique optimale pour maximiser l\'espace de stockage tout en utilisant le minimum de matériau de construction (cire).' },
            { q: 'Comment les termites digèrent-ils le bois ?', opts: ['Par des enzymes dans leur estomac', 'Grâce à des micro-organismes symbiotiques', 'Ils ne digèrent pas le bois', 'Par fermentation externe'], correct: 1, explanation: 'Les termites digèrent la cellulose grâce à des symbiotes intestinaux : protozoaires flagellés chez les termites inférieurs, champignons cultivés (Termitomyces) chez les termites supérieurs.' },
            { q: 'Qu\'est-ce qui détermine si une larve d\'abeille deviendra reine ou ouvrière ?', opts: ['Les gènes', 'L\'alimentation (gelée royale exclusive)', 'La température', 'La taille de l\'alvéole uniquement'], correct: 1, explanation: 'L\'alimentation exclusive à la gelée royale tout au long du développement larvaire détermine la différenciation en reine, par activation de gènes spécifiques via des mécanismes épigénétiques.' }
          ],
          definitions: [
            { term: 'Superorganisme', def: 'Concept décrivant une colonie d\'insectes sociaux comme un organisme unique dont les individus remplissent les fonctions de cellules spécialisées (reproduction, nutrition, défense).' },
            { term: 'Caste', def: 'Groupe d\'individus morphologiquement et fonctionnellement spécialisés au sein d\'une colonie d\'insectes sociaux (reine, ouvrière, soldat, mâle).' },
            { term: 'Gelée royale', def: 'Sécrétion des glandes hypopharyngiennes des jeunes abeilles ouvrières, aliment exclusif de la reine, déterminant la différenciation en caste reproductrice.' },
            { term: 'Phéromone de piste', def: 'Substance chimique déposée par les fourmis fourrageuses pour marquer le chemin vers une source de nourriture, renforçant le signal par rétroaction positive.' },
            { term: 'Symbiote intestinal', def: 'Micro-organisme (protozoaire, bactérie, champignon) vivant dans le tube digestif d\'un hôte et contribuant à la digestion de substances que l\'hôte ne peut dégrader seul.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Les fourmis de feu (Solenopsis invicta) forment des radeaux vivants lors des inondations : les ouvrières s\'accrochent les unes aux autres en piégeant des bulles d\'air, créant une structure flottante insubmersible qui peut dériver pendant des semaines.' },
            { front: '💡 Le savais-tu ?', back: 'L\'architecte Mick Pearce s\'est inspiré des termitières pour concevoir l\'Eastgate Centre à Harare (Zimbabwe), un immeuble de bureaux dont le système de ventilation naturelle réduit la consommation énergétique de 90 % par rapport à un bâtiment climatisé classique.' },
            { front: '💡 Le savais-tu ?', back: 'Une colonie de fourmis champignonnistes peut récolter l\'équivalent de son propre poids en feuilles chaque jour — les fourmis découpeuses (Atta) sont ainsi les plus grands herbivores du Nouveau Monde tropical.' }
          ]
        },
        // --- Lesson 4.5 : La métamorphose ---
        {
          slug: 'metamorphose',
          title: 'La métamorphose',
          description: 'Les transformations spectaculaires de la larve à l\'adulte chez les insectes.',
          intro: 'La métamorphose est le processus de transformation radicale par lequel un insecte passe d\'une forme larvaire à une forme adulte (imago) morphologiquement, physiologiquement et écologiquement différente. Ce phénomène, contrôlé par les hormones ecdysone et hormone juvénile, permet aux larves et aux adultes d\'exploiter des niches écologiques distinctes, réduisant la compétition intraspécifique et augmentant le succès évolutif.',
          introHighlight: 'Lors de la métamorphose complète d\'un papillon, la chenille se dissout presque entièrement dans la chrysalide avant de se reconstruire en un organisme radicalement nouveau.',
          intro2: '',
          sections: [
            {
              title: 'Métamorphose complète et incomplète',
              paragraphs: [
                'La métamorphose complète (holométabolie) comprend quatre stades : œuf, larve, nymphe (chrysalide) et adulte (imago). La larve, morphologiquement très différente de l\'adulte (chenille du papillon, asticot de la mouche, ver blanc du hanneton), accumule les réserves énergétiques. La nymphe est un stade de transformation immobile durant lequel les tissus larvaires sont détruits (histolyse) et les tissus adultes sont construits (histogenèse) à partir de groupes de cellules de réserve appelés disques imaginaux.',
                'La métamorphose incomplète (hémimétabolie) comprend trois stades : œuf, nymphe (ou larve) et adulte. La nymphe ressemble à un adulte en miniature sans ailes fonctionnelles et subit une série de mues (généralement 5 à 8) au cours desquelles les ailes se développent progressivement. Les sauterelles, les libellules, les punaises et les mantes religieuses sont des insectes hémimétaboles.',
                'Les amétaboles, comme le lépisme (poisson d\'argent), ne subissent aucune métamorphose : les juvéniles ressemblent aux adultes et continuent de muer tout au long de leur vie. Ce mode de développement est considéré comme ancestral et est limité aux ordres les plus primitifs d\'insectes (Thysanura, Collembola).'
              ],
              highlight: 'Les insectes holométaboles (à métamorphose complète) représentent environ 85 % de toutes les espèces d\'insectes, témoignant de l\'avantage évolutif de cette stratégie.'
            },
            {
              title: 'Le contrôle hormonal',
              paragraphs: [
                'La métamorphose est orchestrée par deux hormones principales. L\'ecdysone, sécrétée par les glandes prothoraciques sous le contrôle de l\'hormone prothoracicotrope (PTTH) cérébrale, déclenche chaque mue. L\'hormone juvénile (HJ), produite par les corps allates, détermine la nature de la mue : en présence de HJ, la mue produit un stade larvaire ; en son absence, la mue produit le stade nymphal puis adulte.',
                'La diminution progressive du taux d\'hormone juvénile au cours du développement larvaire constitue le « programme de métamorphose ». Lors de la dernière mue larvaire, l\'absence de HJ permet à l\'ecdysone de déclencher la formation de la nymphe. Ce mécanisme a été élucidé par les expériences classiques de Vincent Wigglesworth sur la punaise Rhodnius prolixus dans les années 1930-1940.',
                'Les disques imaginaux sont des amas de cellules indifférenciées présents dans la larve holométabole, chacun programmé pour former un organe adulte spécifique (aile, patte, œil, antenne). Durant la nymphose, les tissus larvaires sont digérés par les cellules phagocytaires (histolyse), libérant des nutriments que les disques imaginaux utilisent pour construire le corps adulte (histogenèse). Cette reconstruction est si radicale que la nymphe est parfois décrite comme un « œuf secondaire ».'
              ],
              highlight: 'L\'hormone juvénile agit comme un « frein de jeunesse » : tant qu\'elle est présente, les mues produisent des stades larvaires. Sa disparition déclenche la métamorphose.'
            },
            {
              title: 'Les records et les curiosités de la métamorphose',
              paragraphs: [
                'La métamorphose du papillon monarque (Danaus plexippus) dure environ 10 jours. Durant ce temps, la chenille se fixe tête en bas par un coussinet de soie (crémaster), forme une chrysalide verte ornée de points dorés, et se transforme en papillon : les muscles de vol, les ailes, les yeux composés et la trompe se forment dans un espace confiné, puis l\'imago émerge et déploie ses ailes en quelques heures.',
                'L\'hypermétamorphose, présente chez certains coléoptères (Meloidae) et mouches (Tachinidae), comporte des stades larvaires morphologiquement très différents. Le premier stade larvaire du Meloe (triangulin) est actif et mobile, recherchant un hôte ; les stades suivants sont sédentaires et parasitaires. Cette complexité développementale témoigne de l\'adaptabilité remarquable du programme de métamorphose.',
                'Les recherches récentes ont révélé que la mémoire peut traverser la métamorphose. Des chenilles de Manduca sexta conditionnées pour éviter une odeur conservent cette aversion à l\'état de papillon adulte, malgré la reconstruction quasi totale du système nerveux durant la nymphose. Certains neurones survivent à l\'histolyse et maintiennent les connexions synaptiques porteuses de la mémoire, un phénomène fascinant qui repousse les limites de notre compréhension de la plasticité neuronale.'
              ],
              highlight: 'La mémoire peut survivre à la métamorphose : une chenille conditionnée à éviter une odeur conserve cette aversion une fois transformée en papillon, malgré la reconstruction de son cerveau.'
            }
          ],
          quiz: [
            { q: 'Quels sont les quatre stades de la métamorphose complète ?', opts: ['Œuf, larve, nymphe, adulte', 'Œuf, nymphe, pupe, adulte', 'Larve, chrysalide, nymphe, adulte', 'Œuf, juvénile, subadulte, adulte'], correct: 0, explanation: 'La métamorphose complète (holométabolie) comprend quatre stades : œuf, larve, nymphe (ou chrysalide/pupe) et adulte (imago).' },
            { q: 'Quelle hormone déclenche la mue chez les insectes ?', opts: ['L\'hormone juvénile', 'L\'ecdysone', 'La mélatonine', 'L\'insuline'], correct: 1, explanation: 'L\'ecdysone, sécrétée par les glandes prothoraciques, déclenche chaque mue. L\'hormone juvénile détermine si la mue produit un stade larvaire ou un stade adulte.' },
            { q: 'Que sont les disques imaginaux ?', opts: ['Des organes de reproduction', 'Des amas de cellules de réserve formant les organes adultes', 'Des structures sensorielles', 'Des types de chrysalides'], correct: 1, explanation: 'Les disques imaginaux sont des groupes de cellules indifférenciées dans la larve, chacun programmé pour former un organe spécifique de l\'adulte (aile, patte, œil) lors de la nymphose.' }
          ],
          definitions: [
            { term: 'Holométabolie', def: 'Métamorphose complète passant par quatre stades (œuf, larve, nymphe, adulte), avec une transformation radicale durant la nymphose. Concerne 85 % des espèces d\'insectes.' },
            { term: 'Hémimétabolie', def: 'Métamorphose incomplète en trois stades (œuf, nymphe, adulte), la nymphe ressemblant à un adulte miniature sans ailes fonctionnelles.' },
            { term: 'Ecdysone', def: 'Hormone stéroïde déclenchant la mue chez les arthropodes, sécrétée par les glandes prothoraciques sous le contrôle de l\'hormone prothoracicotrope (PTTH).' },
            { term: 'Hormone juvénile', def: 'Hormone produite par les corps allates qui maintient le caractère larvaire lors des mues. Sa disparition permet la métamorphose vers le stade nymphal puis adulte.' },
            { term: 'Disque imaginal', def: 'Amas de cellules indifférenciées dans la larve holométabole, programmé pour former un organe spécifique de l\'adulte lors de la métamorphose.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La cigale périodique (Magicicada) passe 13 ou 17 ans sous terre à l\'état de larve avant d\'émerger simultanément par millions pour une vie adulte de seulement 4 à 6 semaines. Ces durées sont des nombres premiers, ce qui réduit la synchronisation avec les cycles des prédateurs.' },
            { front: '💡 Le savais-tu ?', back: 'Pendant la nymphose, une chenille se dissout presque entièrement en une « soupe » cellulaire avant que les disques imaginaux ne reconstruisent le corps du papillon. Seuls quelques neurones et trachées survivent intacts.' },
            { front: '💡 Le savais-tu ?', back: 'Le mot « chrysalide » vient du grec chrysos, signifiant « or », en référence aux reflets dorés qui ornent la nymphe de certains papillons, comme le monarque.' }
          ]
        }
      ]
    },
    // ==================== HUB 5 : Ornithologie ====================
    {
      slug: 'ornithologie',
      title: 'Ornithologie',
      description: 'L\'étude des oiseaux : diversité, migration, chant, nidification et enjeux de conservation.',
      lessons: [
        // --- Lesson 5.1 : Les oiseaux ---
        {
          slug: 'diversite-oiseaux',
          title: 'La diversité des oiseaux',
          description: 'La classe des oiseaux : anatomie, adaptations au vol et diversité des ordres.',
          intro: 'Les oiseaux (classe Aves) forment un groupe de vertébrés endothermes d\'environ 11 000 espèces réparties dans tous les habitats de la planète, des pôles aux tropiques, des océans aux déserts. Descendants directs des dinosaures théropodes, ils ont conquis le milieu aérien grâce à un ensemble d\'adaptations remarquables : plumes, os pneumatisés, sacs aériens, métabolisme élevé et un système cardiovasculaire d\'une efficacité exceptionnelle.',
          introHighlight: 'Les oiseaux sont les dinosaures d\'aujourd\'hui : le faucon pèlerin, en piqué à 390 km/h, est le descendant direct des théropodes du Mésozoïque.',
          intro2: '',
          sections: [
            {
              title: 'Les adaptations au vol',
              paragraphs: [
                'La plume est l\'innovation clé des oiseaux. Les pennes (plumes de vol) possèdent une architecture asymétrique avec un rachis central portant des barbes reliées par des barbules munies de crochets, formant une surface aérodynamique imperméable et légère. Un pigeon possède environ 10 000 plumes représentant seulement 6 % de sa masse corporelle. Les plumes assurent aussi la thermorégulation, le camouflage, la signalisation sexuelle et la protection.',
                'Le squelette des oiseaux est remarquablement allégé. Les os sont pneumatisés (creux et remplis d\'extensions des sacs aériens), réduisant la masse sans sacrifier la résistance. Le bréchet (sternum caréné) offre une large surface d\'insertion pour les muscles pectoraux, qui représentent 15 à 25 % de la masse corporelle chez les espèces au vol actif. La furcula (« os du vœu »), fusion des deux clavicules, agit comme un ressort élastique stockant et restituant l\'énergie à chaque battement d\'aile.',
                'Le système respiratoire des oiseaux est le plus efficace de tous les vertébrés. Neuf sacs aériens, connectés aux poumons et aux os pneumatisés, créent un flux d\'air unidirectionnel à travers les parabronches pulmonaires. L\'air traverse les poumons lors de l\'inspiration et de l\'expiration, assurant un échange gazeux continu — contrairement aux poumons « en cul-de-sac » des mammifères. Cette efficacité permet aux oies à tête barrée (Anser indicus) de voler au-dessus de l\'Himalaya à 8 800 mètres d\'altitude.'
              ],
              highlight: 'L\'oie à tête barrée vole au-dessus de l\'Himalaya à 8 800 mètres d\'altitude grâce à un système respiratoire à flux unidirectionnel, le plus efficace chez les vertébrés.'
            },
            {
              title: 'La diversité des ordres',
              paragraphs: [
                'Les Passériformes (passereaux) constituent l\'ordre le plus diversifié avec environ 6 500 espèces, soit plus de la moitié de toutes les espèces d\'oiseaux. Ils incluent les moineaux, les mésanges, les corvidés, les fauvettes et les pinsons. Les oscines (passereaux chanteurs) possèdent un syrinx complexe produisant des chants élaborés, tandis que les suboscines (tyrannidés, fourmiliers) ont un syrinx plus simple.',
                'Les rapaces diurnes (Accipitriformes : aigles, buses, vautours ; Falconiformes : faucons) et nocturnes (Strigiformes : hiboux, chouettes) sont des prédateurs au sommet des chaînes alimentaires. L\'aigle royal (Aquila chrysaetos) possède une acuité visuelle 4 à 8 fois supérieure à celle de l\'homme, capable de repérer un lapin à plus de 3 km de distance. Les hiboux ont des disques faciaux qui canalisent le son vers leurs oreilles asymétriques, permettant une localisation acoustique tridimensionnelle des proies.',
                'Les oiseaux non volants illustrent la diversité adaptative de la classe. L\'autruche (Struthio camelus), le plus grand oiseau vivant (2,7 m, 150 kg), court à 70 km/h. Les manchots (Sphenisciformes) ont transformé leurs ailes en nageoires et plongent jusqu\'à 565 mètres de profondeur (manchot empereur). Le kiwi (Apteryx), nocturne et fouisseur, possède des narines à l\'extrémité du bec et un odorat développé, unique parmi les oiseaux.'
              ],
              highlight: 'Les passereaux représentent plus de la moitié de toutes les espèces d\'oiseaux : un oiseau sur deux est un passereau.'
            },
            {
              title: 'Les sens et l\'intelligence des oiseaux',
              paragraphs: [
                'La vision des oiseaux surpasse celle des mammifères dans de nombreux aspects. La plupart possèdent quatre types de cônes (contre trois chez l\'homme), percevant les ultraviolets en plus du spectre visible. La résolution temporelle de leur vision est aussi supérieure : un pigeon perçoit 75 images par seconde (contre 24 pour l\'homme), rendant les mouvements rapides perceptibles. La vision binoculaire des rapaces permet une estimation précise des distances lors de la chasse.',
                'L\'intelligence des corvidés (corbeaux, corneilles, geais, pies) rivalise avec celle des grands singes. Leur cerveau, bien que structuré différemment de celui des mammifères, possède une densité neuronale élevée dans le pallium (équivalent du cortex). Les corbeaux résolvent des problèmes en plusieurs étapes, fabriquent et modifient des outils, planifient le futur et reconnaissent les visages humains individuels pendant des années.',
                'Les perroquets (Psittaciformes) sont célèbres pour leur capacité d\'imitation vocale, mais certaines espèces démontrent une compréhension conceptuelle du langage. Le kéa de Nouvelle-Zélande (Nestor notabilis) fait preuve d\'une curiosité insatiable et de capacités de résolution de problèmes remarquables. Les cacatoès de Goffin (Cacatua goffiniana) fabriquent des outils à partir de matériaux non naturels (carton, bois) pour atteindre de la nourriture inaccessible.'
              ],
              highlight: 'Les corbeaux calédoniens fabriquent des outils, planifient le futur et reconnaissent les visages humains individuels — des capacités comparables à celles des grands singes.'
            }
          ],
          quiz: [
            { q: 'Quelle adaptation rend le système respiratoire des oiseaux si efficace ?', opts: ['Des poumons plus grands', 'Un flux d\'air unidirectionnel grâce aux sacs aériens', 'Une trachée plus courte', 'Un diaphragme plus puissant'], correct: 1, explanation: 'Les sacs aériens créent un flux d\'air unidirectionnel à travers les poumons, permettant un échange gazeux continu lors de l\'inspiration et de l\'expiration, bien plus efficace que le système des mammifères.' },
            { q: 'Quel est l\'ordre d\'oiseaux le plus diversifié ?', opts: ['Les rapaces', 'Les passereaux', 'Les perroquets', 'Les palmipèdes'], correct: 1, explanation: 'Les Passériformes (passereaux) comptent environ 6 500 espèces, soit plus de la moitié de toutes les espèces d\'oiseaux.' },
            { q: 'Pourquoi les os des oiseaux sont-ils creux ?', opts: ['Par manque de calcium', 'Pour alléger le squelette tout en maintenant la résistance', 'Pour stocker de la nourriture', 'Par fragilité génétique'], correct: 1, explanation: 'Les os pneumatisés (creux, remplis d\'air des sacs aériens) allègent le squelette sans compromettre sa résistance structurelle, une adaptation essentielle au vol.' }
          ],
          definitions: [
            { term: 'Penne', def: 'Plume de vol à structure asymétrique, portant des barbes reliées par des barbules à crochets, formant une surface aérodynamique légère et imperméable.' },
            { term: 'Os pneumatisé', def: 'Os creux des oiseaux contenant des extensions des sacs aériens, alliant légèreté et résistance pour permettre le vol.' },
            { term: 'Bréchet', def: 'Sternum caréné des oiseaux, offrant une large surface d\'insertion pour les puissants muscles pectoraux du vol.' },
            { term: 'Syrinx', def: 'Organe vocal des oiseaux, situé à la bifurcation de la trachée en bronches, produisant les chants et les cris par vibration de membranes.' },
            { term: 'Pallium', def: 'Région du cerveau des oiseaux fonctionnellement analogue au cortex cérébral des mammifères, particulièrement développée chez les corvidés et les perroquets.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le faucon pèlerin atteint 390 km/h en piqué, ce qui en fait l\'animal le plus rapide du monde. Ses narines sont équipées de déflecteurs osseux qui canalisent le flux d\'air à haute vitesse.' },
            { front: '💡 Le savais-tu ?', back: 'Le colibri d\'Anna (Calypte anna) peut battre des ailes 80 fois par seconde et est le seul oiseau capable de voler en arrière. Son cœur bat jusqu\'à 1 200 fois par minute en vol.' },
            { front: '💡 Le savais-tu ?', back: 'L\'albatros hurleur (Diomedea exulans), avec une envergure de 3,5 mètres, peut planer pendant des heures sans un seul battement d\'aile en exploitant les courants d\'air océaniques (vol dynamique).' }
          ]
        },
        // --- Lesson 5.2 : La migration des oiseaux ---
        {
          slug: 'migration-oiseaux',
          title: 'La migration des oiseaux',
          description: 'Les trajectoires migratoires, les adaptations physiologiques et la navigation aviaire.',
          intro: 'Environ 4 000 espèces d\'oiseaux sont migratrices, parcourant chaque année des distances considérables entre leurs aires de reproduction et d\'hivernage. Ces voyages, parmi les plus extraordinaires du règne animal, requièrent des adaptations physiologiques extrêmes : accumulation de réserves graisseuses, vol prolongé sans repos, navigation précise sur des milliers de kilomètres et synchronisation avec les cycles saisonniers.',
          introHighlight: 'La barge rousse parcourt 13 560 km d\'Alaska à la Nouvelle-Zélande sans escale en 11 jours — le plus long vol non-stop documenté chez un oiseau.',
          intro2: '',
          sections: [
            {
              title: 'Les grandes voies migratoires',
              paragraphs: [
                'Les oiseaux migrateurs empruntent des voies de migration (flyways) relativement constantes, dictées par la géographie (côtes, vallées fluviales, cols montagneux) et les ressources. On distingue huit flyways majeurs dans le monde : Atlantique Est, Méditerranée/mer Noire, Afrique/Eurasie, Asie centrale, Asie de l\'Est/Australasie, Pacifique, Mississippi et Atlantique Ouest.',
                'La voie Afrique/Eurasie voit passer plus de 2 milliards d\'oiseaux chaque automne, dont des cigognes blanches, des hirondelles rustiques et des faucons. Le détroit de Gibraltar et le Bosphore sont des goulets d\'étranglement où se concentrent des centaines de milliers de rapaces qui évitent la traversée de la Méditerranée ouverte, car les ascendances thermiques nécessaires au vol plané sont absentes au-dessus de l\'eau.',
                'Les oiseaux de rivage (limicoles) figurent parmi les migrants les plus extrêmes. Le bécasseau maubèche (Calidris canutus) migre du cercle arctique canadien à la Terre de Feu, parcourant 30 000 km aller-retour chaque année. La baie de Delaware (États-Unis) est une halte critique où les limicoles se nourrissent des œufs de limules (Limulus polyphemus) pour doubler leur poids avant de repartir vers l\'Arctique.'
              ],
              highlight: 'Le détroit de Gibraltar concentre des centaines de milliers de rapaces migrateurs qui évitent de traverser la Méditerranée, car les courants ascendants nécessaires à leur vol plané sont absents au-dessus de l\'eau.'
            },
            {
              title: 'Les adaptations physiologiques à la migration',
              paragraphs: [
                'Avant la migration, les oiseaux accumulent d\'importantes réserves de graisse (hyperphagie). La barge rousse (Limosa lapponica) augmente sa masse corporelle de 55 % en graisse avant son vol transpacifique. Certains organes non essentiels (intestin, foie, reins) régressent pour réduire le poids et libérer de l\'énergie, puis se régénèrent à l\'arrivée. Le pluvier doré (Pluvialis dominica) réduit son intestin de 40 % avant la migration.',
                'Le vol migratoire impose des contraintes énergétiques considérables. Les oiseaux utilisent les graisses comme carburant principal (9 kcal/g contre 4 pour les glucides), ce qui maximise l\'énergie par unité de masse. La formation en V des oies et des grues réduit la dépense énergétique de 12 à 20 % grâce à l\'exploitation des tourbillons de bout d\'aile de l\'oiseau précédent. Les oiseaux alternent la position de tête.',
                'Certains oiseaux migrateurs peuvent dormir en volant. Le martinet alpin (Tachymarptis melba) reste en vol continu pendant 200 jours sans se poser, dormant par micro-siestes d\'une demi-seconde. Les frégates (Fregata) survolant l\'océan dorment en vol par épisodes de quelques secondes, un seul hémisphère cérébral à la fois (sommeil unihémisphérique), tout en maintenant le contrôle du vol.'
              ],
              highlight: 'Le martinet alpin reste en vol continu pendant 200 jours consécutifs sans jamais se poser, dormant, mangeant et buvant en vol.'
            },
            {
              title: 'La navigation et l\'orientation',
              paragraphs: [
                'Les oiseaux migrateurs utilisent au moins cinq systèmes de navigation complémentaires. Le compas solaire, calibré par l\'horloge interne, repère la position du soleil. Le compas stellaire, acquis par les jeunes oiseaux en observant la rotation des constellations, est centré sur l\'étoile polaire dans l\'hémisphère nord. Le compas magnétique, basé sur des cryptochromes rétiniennes sensibles au champ magnétique, fonctionne indépendamment de la météo.',
                'La carte magnétique permet aux oiseaux de déterminer leur position (latitude) en plus de la direction. L\'intensité et l\'inclinaison du champ magnétique terrestre varient avec la latitude, fournissant des coordonnées exploitables. Les pigeons voyageurs combinent ce système avec des repères olfactifs et visuels (routes, rivières, reliefs) pour naviguer avec une précision de quelques kilomètres sur des milliers de kilomètres.',
                'L\'apprentissage social joue un rôle crucial chez certaines espèces. Les grues et les oies migrent en groupes familiaux, les jeunes apprenant la route de leurs parents. Les coucous, en revanche, migrent seuls sans aucune guidance parentale : leur carte de navigation est entièrement innée, encodée dans leur génome. Cette diversité des stratégies de navigation illustre les multiples solutions évolutives au défi de la migration longue distance.'
              ],
              highlight: 'Les jeunes coucous migrent seuls vers l\'Afrique sans guide parental : leur itinéraire de 10 000 km est entièrement encodé dans leurs gènes.'
            }
          ],
          quiz: [
            { q: 'Combien de voies de migration (flyways) majeures existe-t-il dans le monde ?', opts: ['4', '6', '8', '12'], correct: 2, explanation: 'On distingue huit flyways majeurs dans le monde, correspondant aux principales routes empruntées par les oiseaux migrateurs entre leurs aires de reproduction et d\'hivernage.' },
            { q: 'Pourquoi les oiseaux volent-ils en formation en V ?', opts: ['Pour se protéger des prédateurs', 'Pour réduire la dépense énergétique de 12 à 20 %', 'Pour communiquer en vol', 'Par habitude sociale'], correct: 1, explanation: 'La formation en V permet aux oiseaux d\'exploiter les tourbillons de bout d\'aile de l\'oiseau précédent, réduisant la résistance aérodynamique et la dépense énergétique de 12 à 20 %.' },
            { q: 'Quel organe les oiseaux réduisent-ils avant la migration ?', opts: ['Le cœur', 'Les muscles pectoraux', 'L\'intestin', 'Les yeux'], correct: 2, explanation: 'Certains organes non essentiels au vol (intestin, foie, reins) régressent avant la migration pour réduire le poids et libérer de l\'énergie, puis se régénèrent à l\'arrivée.' }
          ],
          definitions: [
            { term: 'Flyway', def: 'Voie de migration aérienne empruntée régulièrement par les oiseaux migrateurs, reliant les aires de reproduction aux aires d\'hivernage le long de corridors géographiques définis.' },
            { term: 'Hyperphagie', def: 'Phase d\'alimentation intensive précédant la migration, durant laquelle les oiseaux accumulent d\'importantes réserves de graisse (jusqu\'à 50-100 % de leur masse corporelle).' },
            { term: 'Sommeil unihémisphérique', def: 'Capacité de certains oiseaux et mammifères marins à dormir avec un seul hémisphère cérébral à la fois, maintenant la vigilance et le contrôle moteur avec l\'autre.' },
            { term: 'Compas stellaire', def: 'Système de navigation basé sur l\'observation de la rotation des étoiles autour du pôle céleste, acquis par les jeunes oiseaux durant une période d\'apprentissage critique.' },
            { term: 'Cryptochromes', def: 'Protéines photosensibles présentes dans la rétine des oiseaux migrateurs, dont les réactions chimiques sont influencées par le champ magnétique terrestre, formant un compas biologique.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La sterne arctique voit deux étés par an : elle niche en Arctique puis hiverne en Antarctique, bénéficiant de plus de lumière du jour que tout autre animal sur Terre au cours de sa vie.' },
            { front: '💡 Le savais-tu ?', back: 'Un pigeon voyageur lâché à 1 800 km de son pigeonnier y revient en moins de 48 heures, naviguant avec une précision de quelques kilomètres grâce à un compas magnétique, solaire et olfactif.' },
            { front: '💡 Le savais-tu ?', back: 'La pollution lumineuse des villes désorientation les oiseaux nocturnes migrateurs. L\'initiative « Lights Out » à New York a réduit de 70 % les collisions mortelles d\'oiseaux avec les gratte-ciel en éteignant les lumières pendant la migration.' }
          ]
        },
        // --- Lesson 5.3 : Le chant des oiseaux ---
        {
          slug: 'chant-oiseaux',
          title: 'Le chant des oiseaux',
          description: 'La production, la fonction et l\'apprentissage du chant chez les oiseaux chanteurs.',
          intro: 'Le chant des oiseaux est l\'un des sons les plus emblématiques du monde naturel. Produit principalement par les mâles durant la saison de reproduction, il remplit deux fonctions principales : attirer les femelles et défendre le territoire. L\'étude du chant des oiseaux a révélé des parallèles fascinants avec le langage humain, notamment dans les mécanismes d\'apprentissage vocal, un trait partagé par très peu de groupes animaux.',
          introHighlight: 'L\'apprentissage vocal — la capacité d\'apprendre des sons par imitation — est une capacité rare partagée par seulement trois groupes d\'oiseaux (passereaux oscines, perroquets, colibris), les humains, les cétacés, les éléphants et les chauves-souris.',
          intro2: '',
          sections: [
            {
              title: 'Le syrinx et la production du chant',
              paragraphs: [
                'Le syrinx, organe vocal unique des oiseaux, est situé à la bifurcation de la trachée en deux bronches. Contrairement au larynx des mammifères, le syrinx possède deux sources sonores indépendantes, une dans chaque bronche, permettant à l\'oiseau de produire deux notes simultanément (biphonation). Le canari peut ainsi émettre des séquences de 30 notes par seconde, alternant entre ses deux côtés du syrinx.',
                'La complexité du chant varie considérablement entre espèces. Le troglodyte mignon (Troglodytes troglodytes) possède un répertoire d\'environ 100 types de chants différents. Le moqueur polyglotte (Mimus polyglottos) peut imiter les chants de plus de 200 espèces. Le rossignol (Luscinia megarhynchos) produit des chants pouvant durer plusieurs minutes avec des fréquences allant de 2 000 à 13 000 Hz.',
                'Les muscles du syrinx, parmi les plus rapides du règne animal, se contractent et se relâchent en quelques millisecondes. L\'innervation motrice du syrinx est latéralisée : chez de nombreuses espèces, le côté gauche du syrinx (contrôlé par l\'hémisphère gauche du cerveau) est dominant pour la production du chant, un parallèle frappant avec la dominance de l\'hémisphère gauche pour le langage chez l\'homme.'
              ],
              highlight: 'Le syrinx possède deux sources sonores indépendantes, permettant à un oiseau de chanter deux notes différentes simultanément — une performance vocale impossible pour les mammifères.'
            },
            {
              title: 'L\'apprentissage du chant',
              paragraphs: [
                'L\'apprentissage vocal chez les oiseaux chanteurs se déroule en deux phases. La phase sensorielle (ou de mémorisation) a lieu chez le jeune oiseau qui écoute et mémorise le chant de son père ou d\'un tuteur. La phase sensori-motrice voit le juvénile produire un « sous-chant » (subsong) babillant, progressivement affiné par comparaison avec le modèle mémorisé. Ce processus est remarquablement similaire au babillage puis à l\'acquisition du langage chez le nourrisson humain.',
                'La période critique d\'apprentissage varie selon les espèces. Le pinson des arbres (Fringilla coelebs) ne peut apprendre son chant que durant les 10 premiers mois de sa vie. Le canari, en revanche, modifie son répertoire chaque année (espèce à apprentissage ouvert). Les noyaux cérébraux du chant (HVC, RA, Area X) subissent des modifications saisonnières de volume, avec une neurogenèse (production de nouveaux neurones) chez les espèces à apprentissage ouvert.',
                'Le gène FOXP2, dont les mutations provoquent des troubles du langage chez l\'homme, est aussi essentiel à l\'apprentissage du chant chez les oiseaux. Son expression augmente dans le noyau Area X durant l\'apprentissage vocal. Ce parallèle moléculaire entre le chant des oiseaux et le langage humain suggère que les deux capacités, bien qu\'ayant évolué indépendamment, reposent sur des mécanismes génétiques et neuronaux similaires — un cas spectaculaire de convergence évolutive profonde.'
              ],
              highlight: 'Le gène FOXP2 est essentiel à la fois au langage humain et à l\'apprentissage du chant chez les oiseaux — un remarquable cas de convergence moléculaire.'
            },
            {
              title: 'Les fonctions et les dialectes',
              paragraphs: [
                'Le chant territorial dissuade les rivaux d\'entrer dans le territoire du mâle. Les expériences de playback montrent qu\'un mâle réagit plus fortement au chant d\'un voisin inconnu qu\'à celui d\'un voisin familier (effet « cher ennemi »). Le répertoire (nombre de types de chants) est un indicateur de la qualité du mâle : les femelles rousserolles verderolles (Acrocephalus palustris) préfèrent les mâles au répertoire le plus vaste (jusqu\'à 300 types de chants).',
                'Les dialectes régionaux — variations géographiques du chant au sein d\'une même espèce — ont été documentés chez de nombreuses espèces. Le bruant à couronne blanche (Zonotrichia leucophrys) de San Francisco chante différemment de la population située à seulement 50 km au sud. Ces dialectes résultent de la transmission culturelle : les jeunes apprennent le dialecte local de leurs tuteurs. Ils peuvent contribuer à l\'isolement reproductif et potentiellement à la spéciation.',
                'Le chant d\'aube (dawn chorus), ce concert matinal qui précède le lever du soleil, est l\'un des phénomènes acoustiques les plus intenses du monde naturel. Les mâles chantent à l\'aube car la faible luminosité rend la recherche de nourriture inefficace, les conditions atmosphériques (air calme, faible turbulence) favorisent la propagation du son, et le chant matinal démontre aux femelles la bonne condition du mâle après une nuit de jeûne.'
              ],
              highlight: 'Les dialectes régionaux du chant des oiseaux sont transmis culturellement de génération en génération, créant des traditions vocales locales comparables aux accents humains.'
            }
          ],
          quiz: [
            { q: 'Comment s\'appelle l\'organe vocal des oiseaux ?', opts: ['Le larynx', 'Le syrinx', 'La trachée', 'Les cordes vocales'], correct: 1, explanation: 'Le syrinx est l\'organe vocal unique des oiseaux, situé à la bifurcation de la trachée, possédant deux sources sonores indépendantes.' },
            { q: 'Quel gène est impliqué à la fois dans le langage humain et le chant des oiseaux ?', opts: ['BRCA1', 'FOXP2', 'TP53', 'CLOCK'], correct: 1, explanation: 'Le gène FOXP2 est essentiel à l\'apprentissage vocal chez l\'homme (langage) et chez les oiseaux chanteurs (chant), un cas remarquable de convergence moléculaire.' },
            { q: 'Pourquoi les oiseaux chantent-ils principalement à l\'aube ?', opts: ['Parce qu\'ils sont plus éveillés', 'Parce que les conditions de propagation du son sont optimales', 'Parce que les prédateurs dorment', 'Par pure habitude'], correct: 1, explanation: 'L\'air calme et l\'absence de turbulence à l\'aube permettent au son de se propager plus loin et plus clairement, maximisant la portée du chant territorial et sexuel.' }
          ],
          definitions: [
            { term: 'Syrinx', def: 'Organe vocal des oiseaux situé à la bifurcation trachéo-bronchique, possédant deux sources sonores indépendantes permettant la production simultanée de deux sons différents.' },
            { term: 'Sous-chant (subsong)', def: 'Production vocale immature et variable du jeune oiseau durant la phase sensori-motrice de l\'apprentissage, analogue au babillage du nourrisson humain.' },
            { term: 'Période critique', def: 'Fenêtre temporelle du développement durant laquelle un jeune oiseau est réceptif à l\'apprentissage du chant de son espèce, après laquelle l\'apprentissage devient difficile ou impossible.' },
            { term: 'Dialecte (ornithologie)', def: 'Variation géographique du chant au sein d\'une même espèce d\'oiseau, résultant de la transmission culturelle locale et pouvant contribuer à l\'isolement reproductif.' },
            { term: 'Neurogenèse', def: 'Production de nouveaux neurones dans le cerveau adulte, particulièrement active dans les noyaux du chant des oiseaux à apprentissage vocal ouvert (canaris, étourneaux).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le lyrebird (oiseau-lyre) d\'Australie peut imiter avec une fidélité stupéfiante le chant de plus de 20 espèces d\'oiseaux, mais aussi le bruit d\'une tronçonneuse, d\'un appareil photo ou d\'une alarme de voiture.' },
            { front: '💡 Le savais-tu ?', back: 'Le troglodyte des marais (Cistothorus palustris) apprend environ 200 types de chants durant son premier été, puis ne peut plus en apprendre de nouveaux — un parallèle avec la fermeture de la période critique du langage chez l\'enfant.' },
            { front: '💡 Le savais-tu ?', back: 'Mozart possédait un étourneau sansonnet qui avait appris à siffler le thème de son Concerto pour piano nº 17, bien que l\'oiseau modifiait légèrement la mélodie — ce que Mozart trouvait charmant.' }
          ]
        },
        // --- Lesson 5.4 : La nidification ---
        {
          slug: 'nidification',
          title: 'La nidification',
          description: 'Les stratégies de construction des nids, de ponte et d\'élevage des jeunes chez les oiseaux.',
          intro: 'La nidification englobe l\'ensemble des comportements reproducteurs des oiseaux, de la construction du nid à l\'envol des jeunes. La diversité des nids, des stratégies parentales et des modes de développement des oisillons reflète l\'extraordinaire radiation adaptative des oiseaux dans tous les habitats de la planète.',
          introHighlight: 'Le mégapode d\'Australie ne couve jamais ses œufs : il les enterre dans un monticule de matière organique en décomposition dont il régule la température avec une précision de 0,5 °C.',
          intro2: '',
          sections: [
            {
              title: 'L\'architecture des nids',
              paragraphs: [
                'Les nids des oiseaux sont parmi les structures les plus élaborées du règne animal. Le républicain social (Philetairus socius) d\'Afrique du Sud construit des nids communautaires gigantesques pouvant peser plus d\'une tonne et abriter 500 oiseaux, avec des chambres individuelles disposées comme les appartements d\'un immeuble. Ces structures, isolées thermiquement, maintiennent une température intérieure stable malgré les écarts de 50 °C entre le jour et la nuit dans le désert du Kalahari.',
                'Le tisserin (Ploceus) mâle construit un nid suspendu en forme de bourse à partir de brins d\'herbe entrelacés avec une habileté remarquable. Si la femelle rejette le nid (pas assez solide, mal orienté), le mâle le détruit et recommence. Le colibri à gorge rubis (Archilochus colubris) construit un nid minuscule de 4 cm de diamètre en mousse, lichens et fils d\'araignée, extensible grâce à l\'élasticité de la soie pour accompagner la croissance des oisillons.',
                'Tous les oiseaux ne construisent pas de nid. Le guillemot de Troïl (Uria aalge) pond directement sur les corniches rocheuses des falaises, son œuf piriforme (en forme de poire) roulant en cercle au lieu de tomber. Le coucou gris (Cuculus canorus) est un parasite de nidification qui dépose ses œufs dans les nids d\'autres espèces, chaque femelle spécialisée dans un hôte particulier dont elle imite la couleur et les motifs des œufs.'
              ],
              highlight: 'Le républicain social construit des nids communautaires pouvant peser une tonne et héberger 500 oiseaux, avec isolation thermique et chambres individuelles.'
            },
            {
              title: 'L\'incubation et l\'éclosion',
              paragraphs: [
                'L\'incubation maintient les œufs à une température constante d\'environ 37-38 °C grâce à la plaque incubatrice, zone de peau abdominale dépourvue de plumes et richement vascularisée. La durée d\'incubation varie de 11 jours (petits passereaux) à 80 jours (albatros hurleur). Chez la plupart des espèces, c\'est la femelle qui couve, mais certaines espèces pratiquent l\'incubation partagée (pigeons) ou exclusivement paternelle (jacana, nandou).',
                'L\'œuf d\'oiseau est une capsule autonome de développement. La coquille calcaire, percée de milliers de pores microscopiques, permet les échanges gazeux (O₂ entrant, CO₂ sortant) tout en empêchant la dessiccation. L\'albumine (blanc) fournit eau et protéines. Le vitellus (jaune) contient les lipides et les nutriments. La chalaze maintient le jaune centré. Le tout est protégé par des membranes antimicrobiennes.',
                'L\'éclosion est un processus actif qui peut durer de quelques heures à plusieurs jours. Le poussin utilise un diamant d\'œuf (excroissance kératinisée temporaire sur le bec) et un muscle spécialisé de la nuque (musculus complexus) pour perforer la coquille de l\'intérieur. Le poussin communique avec ses parents par des vocalisations avant même l\'éclosion : la mère poule répond aux pépiements de ses poussins à travers la coquille, synchronisant l\'éclosion de toute la couvée.'
              ],
              highlight: 'Les poussins communiquent avec leur mère à travers la coquille avant l\'éclosion, et la mère ajuste ses vocalisations pour synchroniser l\'éclosion de toute la couvée.'
            },
            {
              title: 'Les stratégies d\'élevage',
              paragraphs: [
                'Les oisillons nidifuges (poussins de canards, de poules, de limicoles) naissent couverts de duvet, les yeux ouverts et capables de se déplacer et de s\'alimenter peu après l\'éclosion. À l\'opposé, les oisillons nidicoles (passereaux, rapaces, pics) naissent nus, aveugles et totalement dépendants de leurs parents pour la nourriture et la thermorégulation pendant des semaines.',
                'L\'investissement parental varie considérablement. L\'albatros hurleur élève un seul poussin tous les deux ans, nourrissant le juvénile pendant 9 mois avant l\'envol. Les mésanges bleues (Cyanistes caeruleus) élèvent 8 à 15 oisillons par couvée, effectuant jusqu\'à 1 000 nourrissages par jour. Le manchot empereur mâle jeûne pendant 4 mois en couvant l\'œuf unique sur ses pieds durant l\'hiver antarctique, perdant jusqu\'à 45 % de sa masse corporelle.',
                'Le parasitisme de couvée, stratégie du coucou, des vachers et de certains canards, illustre une course aux armements coévolutive. Le poussin de coucou, qui éclôt avant les oisillons de l\'hôte, éjecte les œufs ou les poussins légitimes du nid. Les hôtes ont développé des capacités de reconnaissance fine de leurs propres œufs, tandis que les coucous ont évolué vers un mimétisme de plus en plus précis de la couleur, la taille et les motifs des œufs de leurs hôtes.'
              ],
              highlight: 'Le manchot empereur mâle jeûne pendant 4 mois en couvant l\'œuf unique sur ses pieds dans la nuit antarctique, perdant jusqu\'à 45 % de sa masse corporelle.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'un oisillon nidicole ?', opts: ['Un poussin autonome dès la naissance', 'Un poussin nu et dépendant à la naissance', 'Un poussin parasite', 'Un poussin nageant dès l\'éclosion'], correct: 1, explanation: 'Les oisillons nidicoles naissent nus, aveugles et totalement dépendants des parents pour la nourriture et la chaleur, contrairement aux nidifuges qui sont autonomes dès la naissance.' },
            { q: 'Qu\'est-ce que le diamant d\'œuf ?', opts: ['Un bijou porté par l\'oiseau', 'Une excroissance du bec pour perforer la coquille', 'Un motif sur la coquille', 'Un type de nid'], correct: 1, explanation: 'Le diamant d\'œuf est une excroissance kératinisée temporaire sur le bec du poussin, utilisée pour perforer la coquille lors de l\'éclosion, puis résorbée après la naissance.' },
            { q: 'Comment le coucou parasite-t-il les autres oiseaux ?', opts: ['En volant leur nourriture', 'En déposant ses œufs dans leurs nids', 'En détruisant leurs nids', 'En chassant les adultes du territoire'], correct: 1, explanation: 'Le coucou gris est un parasite de nidification : la femelle dépose un œuf dans le nid d\'une autre espèce, et le poussin de coucou éjecte les œufs ou les poussins légitimes.' }
          ],
          definitions: [
            { term: 'Nidifuge', def: 'Qualifie un oisillon qui naît couvert de duvet, les yeux ouverts, capable de se déplacer et de s\'alimenter seul peu après l\'éclosion (canards, poules, limicoles).' },
            { term: 'Nidicole', def: 'Qualifie un oisillon qui naît nu, aveugle et totalement dépendant des parents pour la nourriture, la chaleur et la protection (passereaux, rapaces, pics).' },
            { term: 'Plaque incubatrice', def: 'Zone de peau abdominale dépourvue de plumes et richement vascularisée, développée par les oiseaux en période de reproduction pour transmettre la chaleur aux œufs.' },
            { term: 'Parasitisme de couvée', def: 'Stratégie reproductive dans laquelle une espèce (coucou, vacher) dépose ses œufs dans le nid d\'une autre espèce qui élève le jeune parasite à la place de ou en plus de ses propres poussins.' },
            { term: 'Diamant d\'œuf', def: 'Excroissance kératinisée temporaire sur le bec du poussin, utilisée pour perforer la coquille lors de l\'éclosion, puis résorbée dans les jours suivant la naissance.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le poussin de coucou, encore aveugle, éjecte instinctivement tous les œufs ou poussins légitimes du nid en les poussant avec son dos, dans les heures suivant son éclosion.' },
            { front: '💡 Le savais-tu ?', back: 'Le bec-en-sabot d\'Afrique (Balaeniceps rex) pond deux œufs mais n\'élève qu\'un seul poussin : le plus fort tue ou affame le plus faible, sous le regard impassible des parents — une stratégie d\'assurance en cas de perte du premier-né.' },
            { front: '💡 Le savais-tu ?', back: 'Les nids du républicain social peuvent être si lourds qu\'ils font s\'effondrer les arbres qui les supportent, certains nids ayant été occupés en continu pendant plus de 100 ans.' }
          ]
        },
        // --- Lesson 5.5 : La conservation des oiseaux ---
        {
          slug: 'conservation-oiseaux',
          title: 'La conservation des oiseaux',
          description: 'Les menaces pesant sur l\'avifaune mondiale et les stratégies de conservation.',
          intro: 'Les oiseaux sont parmi les groupes d\'animaux les mieux étudiés, ce qui en fait des bio-indicateurs exceptionnels de l\'état de santé des écosystèmes. Selon BirdLife International, une espèce d\'oiseau sur huit est menacée d\'extinction. Depuis 1500, 159 espèces d\'oiseaux ont disparu, et le rythme d\'extinction s\'accélère sous l\'effet cumulé de la destruction des habitats, du changement climatique, des espèces invasives et de la surexploitation.',
          introHighlight: 'Une espèce d\'oiseau sur huit est menacée d\'extinction selon BirdLife International, et trois milliards d\'oiseaux ont disparu en Amérique du Nord depuis 1970.',
          intro2: '',
          sections: [
            {
              title: 'Les principales menaces',
              paragraphs: [
                'La destruction et la dégradation des habitats sont la première cause de déclin des oiseaux dans le monde. La déforestation tropicale menace directement 75 % des espèces d\'oiseaux forestiers tropicaux. La conversion des zones humides en terres agricoles affecte les oiseaux d\'eau et les limicoles. L\'urbanisation et l\'artificialisation des sols fragmentent les habitats, isolant les populations et réduisant la diversité génétique.',
                'Les espèces invasives représentent la deuxième menace majeure, particulièrement sur les îles. Les rats, les chats et les mangoustes introduits ont causé l\'extinction de centaines d\'espèces d\'oiseaux insulaires, dont le dodo de l\'île Maurice (Raphus cucullatus, disparu vers 1681), le grand pingouin (Pinguinus impennis, disparu en 1844) et le pigeon migrateur d\'Amérique (Ectopistes migratorius, disparu en 1914 après avoir compté des milliards d\'individus).',
                'Les collisions avec les structures humaines tuent des milliards d\'oiseaux chaque année. Les baies vitrées des bâtiments causent entre 600 millions et 1 milliard de morts annuelles aux États-Unis. Les lignes électriques tuent entre 12 et 64 millions d\'oiseaux par an en Europe. Les éoliennes, bien que moins meurtrières en nombre absolu, menacent particulièrement les rapaces et les oiseaux migrateurs dans les zones mal planifiées.'
              ],
              highlight: 'Le pigeon migrateur d\'Amérique, qui comptait 3 à 5 milliards d\'individus au XIXe siècle, a été exterminé en moins de 50 ans par la chasse commerciale — la dernière, Martha, est morte au zoo de Cincinnati en 1914.'
            },
            {
              title: 'Les succès de conservation',
              paragraphs: [
                'Malgré les menaces, plusieurs espèces d\'oiseaux ont été sauvées de l\'extinction grâce à des programmes de conservation intensifs. Le condor de Californie (Gymnogyps californianus), réduit à 22 individus en 1987, compte aujourd\'hui plus de 500 individus grâce à l\'élevage en captivité et à la réintroduction. Le faucon pèlerin, décimé par le DDT dans les années 1960, a reconquis ses territoires après l\'interdiction du pesticide et des programmes de réintroduction.',
                'L\'île Maurice, symbole de l\'extinction du dodo, est devenue un modèle de conservation réussie. La crécerelle de Maurice (Falco punctatus), réduite à 4 individus en 1974 (l\'oiseau le plus rare du monde), compte aujourd\'hui environ 400 individus. Le pigeon rose (Nesoenas mayeri), le perroquet écho (Psittacula eques) et la roussette de Maurice ont été sauvés par des programmes combinant élevage en captivité, restauration d\'habitat et contrôle des espèces invasives.',
                'Les réserves ornithologiques et les conventions internationales jouent un rôle crucial. La Convention de Ramsar protège les zones humides d\'importance internationale. La directive Oiseaux de l\'Union européenne a créé le réseau Natura 2000, protégeant les habitats essentiels. Les IBA (Important Bird Areas), identifiées par BirdLife International, couvrent 13 000 sites dans le monde et guident les priorités de conservation.'
              ],
              highlight: 'La crécerelle de Maurice, réduite à 4 individus en 1974, a été sauvée de l\'extinction et compte aujourd\'hui environ 400 individus — l\'un des plus grands succès de la conservation.'
            },
            {
              title: 'La science citoyenne et l\'avenir',
              paragraphs: [
                'La science citoyenne a révolutionné le suivi des oiseaux. eBird, plateforme de Cornell Lab of Ornithology, collecte plus de 200 millions d\'observations par an grâce à 800 000 observateurs dans le monde. Ces données alimentent des modèles de distribution des espèces, identifient les zones de concentration migratoire et détectent les déclins de population en temps réel. Le Christmas Bird Count, organisé depuis 1900, est le plus ancien programme de science citoyenne au monde.',
                'Les nouvelles technologies transforment la conservation aviaire. Le suivi par GPS miniaturisé révèle les routes migratoires individuelles et les haltes critiques. La bioacoustique automatisée (enregistreurs autonomes + intelligence artificielle) surveille les communautés d\'oiseaux 24h/24 dans des zones inaccessibles. L\'ADN environnemental détecte la présence d\'espèces rares sans les observer. Les drones cartographient les habitats et comptent les colonies de nidification.',
                'L\'avenir de la conservation des oiseaux repose sur l\'intégration de ces approches dans des stratégies globales. La restauration des habitats dégradés, la création de corridors écologiques reliant les aires protégées, la réduction de la pollution lumineuse et chimique, et l\'adaptation au changement climatique sont les priorités. L\'objectif international « 30x30 » (protéger 30 % des terres et des océans d\'ici 2030) offre un cadre ambitieux pour préserver l\'avifaune mondiale.'
              ],
              highlight: 'eBird collecte plus de 200 millions d\'observations ornithologiques par an grâce à 800 000 bénévoles, constituant la plus grande base de données sur la biodiversité au monde.'
            }
          ],
          quiz: [
            { q: 'Quelle est la première cause de déclin des oiseaux ?', opts: ['La chasse', 'Le changement climatique', 'La destruction des habitats', 'Les espèces invasives'], correct: 2, explanation: 'La destruction et la dégradation des habitats (déforestation, urbanisation, agriculture intensive) sont la première cause de déclin des populations d\'oiseaux dans le monde.' },
            { q: 'Combien de condors de Californie restait-il en 1987 ?', opts: ['22', '100', '500', '1 000'], correct: 0, explanation: 'Le condor de Californie a été réduit à seulement 22 individus en 1987 avant d\'être sauvé par un programme d\'élevage en captivité. Il compte aujourd\'hui plus de 500 individus.' },
            { q: 'Qu\'est-ce qu\'une IBA ?', opts: ['Un type de nid', 'Un programme d\'élevage en captivité', 'Un site important pour la conservation des oiseaux', 'Une espèce d\'oiseau menacée'], correct: 2, explanation: 'Les IBA (Important Bird Areas) sont des sites identifiés par BirdLife International comme essentiels pour la conservation des oiseaux, en raison de leur rôle pour les espèces menacées, endémiques ou en concentration significative.' }
          ],
          definitions: [
            { term: 'Bio-indicateur', def: 'Espèce ou groupe d\'espèces dont la présence, l\'abondance ou le comportement reflètent l\'état de santé d\'un écosystème, comme les oiseaux pour les milieux terrestres et humides.' },
            { term: 'Espèce invasive', def: 'Espèce introduite (volontairement ou accidentellement) en dehors de son aire de répartition naturelle, qui se propage et cause des dommages écologiques, économiques ou sanitaires.' },
            { term: 'IBA (Important Bird Area)', def: 'Site identifié par BirdLife International comme essentiel pour la conservation des oiseaux en raison de la présence d\'espèces menacées, endémiques ou de concentrations significatives.' },
            { term: 'Élevage conservatoire', def: 'Programme de reproduction en captivité d\'espèces menacées d\'extinction, visant à maintenir une population viable et à produire des individus pour la réintroduction en milieu naturel.' },
            { term: 'Science citoyenne', def: 'Participation de bénévoles non professionnels à la collecte de données scientifiques, comme le comptage des oiseaux (eBird, Christmas Bird Count, STOC en France).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le dernier pigeon migrateur d\'Amérique, une femelle nommée Martha, est morte le 1er septembre 1914 au zoo de Cincinnati. Un siècle plus tôt, des vols de cette espèce obscurcissaient le ciel pendant des jours entiers.' },
            { front: '💡 Le savais-tu ?', back: 'Les chats domestiques tuent entre 1,3 et 4 milliards d\'oiseaux par an aux États-Unis, ce qui en fait la principale cause de mortalité aviaire d\'origine anthropique dans ce pays.' },
            { front: '💡 Le savais-tu ?', back: 'Le kakapo (Strigops habroptilus), perroquet nocturne et non volant de Nouvelle-Zélande, a été réduit à 51 individus en 1995. Chaque oiseau porte un émetteur GPS et chaque œuf est surveillé par caméra. En 2024, la population a dépassé 250 individus.' }
          ]
        }
      ]
    },
    // ==================== HUB 6 : Biologie marine ====================
    {
      slug: 'biologie-marine',
      title: 'Biologie marine',
      description: 'Les écosystèmes océaniques : récifs coralliens, plancton, abysses et mammifères marins.',
      lessons: [
        // --- Lesson 6.1 : Les écosystèmes marins ---
        {
          slug: 'ecosystemes-marins',
          title: 'Les écosystèmes marins',
          description: 'La zonation océanique et les grands types d\'écosystèmes marins.',
          intro: 'Les océans couvrent 71 % de la surface terrestre et contiennent 97 % de l\'eau de la planète. Ils abritent une biodiversité estimée à 2,2 millions d\'espèces, dont seulement 240 000 sont décrites. Du littoral aux fosses abyssales, les écosystèmes marins présentent une zonation verticale et horizontale déterminée par la lumière, la pression, la température et les nutriments, créant une mosaïque d\'habitats d\'une diversité extraordinaire.',
          introHighlight: 'Les océans couvrent 71 % de la surface de la Terre mais restent largement inexplorés : plus de 80 % des fonds marins n\'ont jamais été cartographiés en haute résolution.',
          intro2: '',
          sections: [
            {
              title: 'La zonation océanique',
              paragraphs: [
                'L\'océan se divise en zones horizontales et verticales. La zone pélagique (pleine eau) comprend la zone épipélagique (0-200 m, zone photique où pénètre la lumière), la zone mésopélagique (200-1 000 m, zone crépusculaire), la zone bathypélagique (1 000-4 000 m, obscurité totale), la zone abyssopélagique (4 000-6 000 m) et la zone hadopélagique (> 6 000 m, fosses océaniques). Seule la zone épipélagique reçoit assez de lumière pour la photosynthèse.',
                'La zone benthique désigne les fonds marins à toutes les profondeurs. Le plateau continental (0-200 m de profondeur) ne représente que 8 % des fonds mais concentre la majorité de la productivité marine et des pêcheries. Le talus continental (200-4 000 m) descend abruptement vers la plaine abyssale, vaste étendue de sédiments fins couvrant plus de 50 % de la surface de la Terre.',
                'La thermocline, zone de transition thermique entre les eaux chaudes de surface et les eaux froides profondes, joue un rôle écologique crucial. Elle agit comme une barrière limitant le mélange vertical des eaux et le transfert de nutriments. Les remontées d\'eaux profondes (upwellings), le long de certaines côtes (Pérou, Californie, Afrique de l\'Ouest), brisent cette barrière et apportent des nutriments en surface, créant les zones de pêche les plus productives du monde.'
              ],
              highlight: 'Les upwellings, remontées d\'eaux profondes riches en nutriments, ne couvrent que 1 % de la surface océanique mais soutiennent 50 % des pêcheries mondiales.'
            },
            {
              title: 'Les écosystèmes côtiers',
              paragraphs: [
                'Les mangroves sont des forêts littorales tropicales et subtropicales dominées par des arbres (palétuviers) adaptés à l\'eau salée grâce à des racines aériennes (pneumatophores), des glandes excrétrices de sel et des graines vivipares. Elles abritent les nurseries de 75 % des espèces de poissons commerciaux tropicaux. Les mangroves stockent 3 à 5 fois plus de carbone par hectare que les forêts terrestres (carbone bleu) et protègent les côtes contre l\'érosion et les tsunamis.',
                'Les herbiers de posidonies (Posidonia oceanica) en Méditerranée et les prairies sous-marines forment des écosystèmes d\'une richesse comparable aux forêts tropicales. Ils stabilisent les sédiments, produisent de l\'oxygène, séquestrent le carbone et abritent une communauté diversifiée de poissons, de crustacés et de mollusques. Un herbier de posidonie au large d\'Ibiza, vieux d\'environ 100 000 ans, est considéré comme l\'un des plus anciens organismes vivants de la planète.',
                'Les estuaires, zones de mélange entre eaux douces et salées, sont parmi les écosystèmes les plus productifs de la biosphère. Les variations de salinité, les apports de nutriments fluviaux et la diversité des substrats (vase, sable, rochers) créent des conditions favorables à une biomasse élevée. Les vasières intertidales sont des haltes migratoires vitales pour des millions de limicoles et d\'oiseaux d\'eau.'
              ],
              highlight: 'Les mangroves stockent 3 à 5 fois plus de carbone par hectare que les forêts terrestres, mais disparaissent 3 à 5 fois plus vite que les forêts continentales.'
            },
            {
              title: 'L\'océan et le climat',
              paragraphs: [
                'L\'océan est le principal régulateur du climat terrestre. Il absorbe environ 30 % du CO₂ émis par les activités humaines (puits de carbone océanique) et stocke plus de 90 % de l\'excès de chaleur lié au réchauffement climatique. La pompe biologique (fixation du CO₂ par le phytoplancton et sédimentation vers les profondeurs) et la pompe physique (dissolution du CO₂ dans les eaux froides qui plongent) contribuent à ce rôle tampon.',
                'L\'acidification des océans est la conséquence directe de l\'absorption du CO₂ : celui-ci réagit avec l\'eau pour former de l\'acide carbonique, abaissant le pH. Le pH moyen de surface est passé de 8,25 à l\'ère préindustrielle à 8,1 aujourd\'hui, soit une augmentation de 30 % de l\'acidité. Cette acidification menace les organismes calcificateurs (coraux, mollusques, échinodermes, ptéropodes) dont les coquilles et les squelettes se dissolvent en milieu plus acide.',
                'Les courants océaniques (Gulf Stream, Kuroshio, courant circumpolaire antarctique) redistribuent la chaleur des tropiques vers les pôles et influencent les climats régionaux. La circulation thermohaline globale (le « tapis roulant océanique »), entraînée par les différences de densité (température et salinité), met environ 1 000 ans pour effectuer un cycle complet. Le ralentissement de cette circulation, prédit par les modèles climatiques, pourrait refroidir l\'Europe occidentale malgré le réchauffement global.'
              ],
              highlight: 'Le pH des océans a diminué de 0,15 unité depuis l\'ère préindustrielle, soit une augmentation de 30 % de l\'acidité — une vitesse de changement sans précédent depuis 300 millions d\'années.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage de la surface de la Terre les océans couvrent-ils ?', opts: ['50 %', '61 %', '71 %', '80 %'], correct: 2, explanation: 'Les océans couvrent environ 71 % de la surface terrestre, soit environ 361 millions de km², et contiennent 97 % de l\'eau de la planète.' },
            { q: 'Qu\'est-ce qu\'un upwelling ?', opts: ['Un courant de surface', 'Une remontée d\'eaux profondes riches en nutriments', 'Une vague géante', 'Un tsunami sous-marin'], correct: 1, explanation: 'Un upwelling est une remontée d\'eaux profondes froides et riches en nutriments vers la surface, créant des zones de productivité biologique très élevée.' },
            { q: 'Qu\'est-ce que le « carbone bleu » ?', opts: ['Le CO₂ dissous dans l\'eau', 'Le carbone stocké par les écosystèmes côtiers (mangroves, herbiers, marais)', 'Le carbone des glaciers', 'Le carbone des poissons'], correct: 1, explanation: 'Le carbone bleu désigne le carbone capturé et stocké par les écosystèmes côtiers et marins (mangroves, herbiers marins, marais salants), dont la capacité de séquestration est bien supérieure à celle des forêts terrestres par unité de surface.' }
          ],
          definitions: [
            { term: 'Zone épipélagique', def: 'Couche supérieure de l\'océan (0-200 m) recevant suffisamment de lumière pour la photosynthèse, abritant le phytoplancton et la majorité de la productivité marine.' },
            { term: 'Upwelling', def: 'Remontée d\'eaux profondes froides et riches en nutriments vers la surface, généralement le long de certaines côtes, créant des zones de pêche très productives.' },
            { term: 'Thermocline', def: 'Zone de transition thermique entre les eaux chaudes de surface et les eaux froides profondes, limitant le mélange vertical et le transfert de nutriments.' },
            { term: 'Carbone bleu', def: 'Carbone capturé et stocké par les écosystèmes côtiers et marins (mangroves, herbiers, marais salants), séquestré dans les sédiments pendant des millénaires.' },
            { term: 'Acidification océanique', def: 'Diminution du pH des eaux océaniques causée par l\'absorption du CO₂ atmosphérique, menaçant les organismes calcificateurs (coraux, mollusques, ptéropodes).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Si l\'on vidait les océans, l\'Everest (8 849 m) serait une colline à côté de la fosse des Mariannes (10 994 m). La pression au fond de cette fosse est de 1 086 atmosphères, soit l\'équivalent de 50 avions gros-porteurs empilés sur un timbre-poste.' },
            { front: '💡 Le savais-tu ?', back: 'Un herbier de posidonie au large d\'Ibiza couvre 8 km et serait vieux de 100 000 ans, ce qui en ferait l\'un des plus anciens organismes vivants connus sur Terre.' },
            { front: '💡 Le savais-tu ?', back: 'L\'océan produit plus de 50 % de l\'oxygène que nous respirons grâce au phytoplancton, soit plus que toutes les forêts tropicales réunies.' }
          ]
        },
        // --- Lesson 6.2 : Les récifs coralliens ---
        {
          slug: 'recifs-coralliens',
          title: 'Les récifs coralliens',
          description: 'Les forêts tropicales de l\'océan : biodiversité, symbiose et menaces.',
          intro: 'Les récifs coralliens sont les structures biologiques les plus grandes de la planète et les écosystèmes marins les plus riches en biodiversité. Construits sur des millénaires par l\'accumulation de squelettes calcaires de milliards de polypes coralliens, ils abritent 25 % de toutes les espèces marines alors qu\'ils ne couvrent que 0,1 % de la surface océanique. La Grande Barrière de corail d\'Australie, visible depuis l\'espace, s\'étend sur 2 300 km.',
          introHighlight: 'Les récifs coralliens abritent 25 % des espèces marines sur seulement 0,1 % de la surface océanique, ce qui en fait les écosystèmes les plus denses en biodiversité de la planète.',
          intro2: '',
          sections: [
            {
              title: 'La biologie des coraux',
              paragraphs: [
                'Les coraux constructeurs de récifs (Scleractinia) sont des cnidaires coloniaux dont chaque individu (polype) sécrète un squelette calcaire d\'aragonite. Les polypes, de quelques millimètres à quelques centimètres, sont reliés entre eux par un tissu vivant (coenosarc) et coordonnent leur croissance pour former des colonies aux formes variées : branchues (Acropora), massives (Porites), foliacées (Montipora), encroûtantes ou tabulaires.',
                'La symbiose avec les zooxanthelles (dinoflagellés photosynthétiques du genre Symbiodinium) est la clé du succès des coraux récifaux. Les zooxanthelles vivent dans les cellules du polype et fournissent jusqu\'à 90 % de ses besoins énergétiques par la photosynthèse. En échange, le corail offre aux algues un abri, du CO₂ et des nutriments (azote, phosphore). Cette symbiose explique pourquoi les récifs ne se développent que dans les eaux tropicales claires et peu profondes (< 50 m), où la lumière est suffisante.',
                'Les coraux se reproduisent de manière sexuée et asexuée. La ponte synchronisée (mass spawning), déclenchée par la pleine lune, la température et la durée du jour, voit des millions de colonies libérer simultanément leurs gamètes dans l\'eau. Ce phénomène spectaculaire, décrit pour la première fois sur la Grande Barrière en 1982, ressemble à une « tempête de neige sous-marine ». La reproduction asexuée par fragmentation permet aux colonies cassées de recoloniser les zones endommagées.'
              ],
              highlight: 'Les zooxanthelles fournissent jusqu\'à 90 % de l\'énergie des coraux par photosynthèse, expliquant pourquoi les récifs ne prospèrent que dans les eaux tropicales claires et lumineuses.'
            },
            {
              title: 'La biodiversité récifale',
              paragraphs: [
                'Les récifs coralliens abritent environ 65 000 espèces décrites, mais le total réel pourrait atteindre 1 à 9 millions. Les poissons de récif comptent environ 4 000 espèces, soit le quart de toutes les espèces de poissons marins. Les invertébrés (crustacés, mollusques, échinodermes, vers, éponges) sont encore plus diversifiés. Un seul mètre carré de récif peut héberger des centaines d\'espèces d\'organismes.',
                'Le récif fonctionne comme un réseau d\'interactions écologiques complexes. Les relations mutualistes abondent : les poissons-clowns protègent et nourrissent les anémones, les labres nettoyeurs déparasitent les poissons clients à des « stations de nettoyage », les crevettes pistolet partagent leur terrier avec des gobies sentinelles. Les herbivores (poissons-perroquets, oursins diadème) maintiennent les algues à un niveau bas, empêchant leur prolifération qui étoufferait les coraux.',
                'Les poissons-perroquets (Scaridae) sont des ingénieurs écologiques essentiels. Ils broutent les algues sur les coraux morts, libérant l\'espace pour les larves de coraux. Leurs puissantes mâchoires broient le squelette corallien, qu\'ils excrètent sous forme de sable fin : un seul poisson-perroquet à bosse (Bolbometopon muricatum) peut produire une tonne de sable par an, contribuant à la formation des plages de sable blanc des îles tropicales.'
              ],
              highlight: 'Un seul poisson-perroquet à bosse produit environ une tonne de sable blanc par an en broyant le squelette des coraux — une partie du sable des plages tropicales provient de leurs déjections.'
            },
            {
              title: 'Le blanchissement et les menaces',
              paragraphs: [
                'Le blanchissement corallien se produit lorsque le stress thermique (température > 1 °C au-dessus de la moyenne estivale pendant 4 semaines) provoque l\'expulsion des zooxanthelles par les polypes. Privé de ses algues symbiotiques, le corail blanchit (son squelette blanc devient visible) et perd sa principale source d\'énergie. Si le stress persiste au-delà de 8 semaines, le corail meurt. Les événements de blanchissement de masse de 2016-2017 et 2020 ont touché plus de 50 % des coraux de la Grande Barrière.',
                'L\'acidification océanique menace directement les coraux en réduisant la disponibilité des ions carbonate nécessaires à la construction de leur squelette calcaire. La surpêche, la pollution côtière (sédimentation, nutriments agricoles, plastiques) et le développement littoral aggravent la situation. On estime que 14 % des coraux mondiaux ont disparu entre 2009 et 2018, et que 70 à 90 % pourraient disparaître si le réchauffement atteint +1,5 °C.',
                'Les efforts de restauration incluent le bouturage de coraux (fragmentation et transplantation de colonies résistantes), la sélection de « super-coraux » tolérants à la chaleur, et le développement de récifs artificiels. Les aires marines protégées (AMP) strictes permettent la régénération des récifs en éliminant la surpêche et la pollution locale. Le programme Coral Triangle Initiative protège le « triangle de corail » Indonésie-Malaisie-Philippines-Papouasie, épicentre mondial de la biodiversité marine.'
              ],
              highlight: 'Si le réchauffement atteint +2 °C, 99 % des récifs coralliens mondiaux pourraient disparaître, privant l\'océan de ses écosystèmes les plus riches en biodiversité.'
            }
          ],
          quiz: [
            { q: 'Que sont les zooxanthelles ?', opts: ['Des poissons de récif', 'Des algues symbiotiques vivant dans les polypes coralliens', 'Des parasites du corail', 'Des larves de corail'], correct: 1, explanation: 'Les zooxanthelles sont des dinoflagellés photosynthétiques (Symbiodinium) vivant en symbiose dans les cellules des polypes coralliens, fournissant jusqu\'à 90 % de leur énergie.' },
            { q: 'Qu\'est-ce que le blanchissement corallien ?', opts: ['La décoloration naturelle des coraux en hiver', 'L\'expulsion des zooxanthelles sous l\'effet du stress thermique', 'La mort par pollution chimique', 'La croissance de calcaire blanc'], correct: 1, explanation: 'Le blanchissement est l\'expulsion des algues symbiotiques (zooxanthelles) par les polypes stressés par la chaleur, rendant le squelette calcaire blanc visible et privant le corail de 90 % de son énergie.' },
            { q: 'Quel pourcentage des espèces marines les récifs coralliens abritent-ils ?', opts: ['5 %', '10 %', '25 %', '50 %'], correct: 2, explanation: 'Les récifs coralliens abritent environ 25 % de toutes les espèces marines connues, malgré une superficie de seulement 0,1 % des fonds océaniques.' }
          ],
          definitions: [
            { term: 'Zooxanthelle', def: 'Dinoflagellé photosynthétique du genre Symbiodinium vivant en symbiose intracellulaire avec les polypes coralliens, leur fournissant jusqu\'à 90 % de leur énergie.' },
            { term: 'Blanchissement corallien', def: 'Expulsion des zooxanthelles par les polypes coralliens sous l\'effet du stress (chaleur, acidification), rendant visible le squelette calcaire blanc et menaçant la survie du corail.' },
            { term: 'Polype', def: 'Individu d\'une colonie de cnidaires (corail, anémone), constitué d\'un corps cylindrique surmonté de tentacules et fixé à un substrat par sa base.' },
            { term: 'Ponte synchronisée', def: 'Événement reproductif au cours duquel des millions de colonies coralliennes libèrent simultanément leurs gamètes dans l\'eau, synchronisées par la phase lunaire et la température.' },
            { term: 'Aire marine protégée', def: 'Zone maritime délimitée dans laquelle les activités humaines sont réglementées ou interdites pour préserver la biodiversité et les écosystèmes marins.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La Grande Barrière de corail d\'Australie s\'étend sur 2 300 km et est la plus grande structure vivante de la planète — visible depuis l\'espace, elle couvre une superficie comparable à celle de l\'Italie.' },
            { front: '💡 Le savais-tu ?', back: 'Certains coraux sont fluorescents : ils produisent des protéines qui absorbent les ultraviolets et les réémettent en lumière visible (verte, rouge, bleue), un mécanisme de protection solaire naturel.' },
            { front: '💡 Le savais-tu ?', back: 'Le poisson-clown est protégé du venin mortel de l\'anémone grâce à un mucus spécial qui empêche le déclenchement des nématocystes — une immunité acquise dès le plus jeune âge par acclimatation progressive.' }
          ]
        },
        // --- Lesson 6.3 : Le plancton ---
        {
          slug: 'plancton',
          title: 'Le plancton',
          description: 'Les organismes dérivants de l\'océan : phytoplancton, zooplancton et leur rôle planétaire.',
          intro: 'Le plancton (du grec planktos, « errant ») désigne l\'ensemble des organismes aquatiques qui dérivent au gré des courants, incapables de nager activement contre eux. Du phytoplancton microscopique aux méduses géantes, le plancton forme la base des réseaux trophiques océaniques, produit plus de la moitié de l\'oxygène atmosphérique et joue un rôle fondamental dans le cycle du carbone et la régulation du climat.',
          introHighlight: 'Le phytoplancton produit plus de 50 % de l\'oxygène atmosphérique et fixe environ 50 gigatonnes de CO₂ par an, un service écosystémique invisible mais vital pour la planète.',
          intro2: '',
          sections: [
            {
              title: 'Le phytoplancton : forêt invisible de l\'océan',
              paragraphs: [
                'Le phytoplancton comprend les organismes photosynthétiques microscopiques de l\'océan : diatomées (Bacillariophyceae), dinoflagellés (Dinophyceae), coccolithophores (Haptophyta), cyanobactéries (Prochlorococcus, Synechococcus) et algues vertes. Bien que chaque cellule soit minuscule (1 à 200 micromètres), leur biomasse totale est estimée à 1-2 milliards de tonnes et leur productivité primaire nette égale celle de toutes les plantes terrestres.',
                'Les diatomées sont les productrices primaires les plus importantes de l\'océan, responsables d\'environ 20 % de la fixation globale du carbone. Leur frustule (coquille) de silice, aux motifs géométriques d\'une précision nanométrique, s\'accumule dans les sédiments marins sur des millions d\'années. Les dépôts de diatomite (terre de diatomées) sont exploités industriellement comme filtres, abrasifs et isolants.',
                'Prochlorococcus, la plus petite bactérie photosynthétique connue (0,6 micromètre), est aussi l\'organisme photosynthétique le plus abondant de la Terre, avec 10²⁷ cellules dans les océans. Découverte seulement en 1986, cette cyanobactérie représente à elle seule environ 10 % de la fixation de carbone océanique. Sa distribution verticale varie avec les écotypes : les populations de surface sont adaptées à la forte lumière, celles des profondeurs à la lumière bleue résiduelle.'
              ],
              highlight: 'Prochlorococcus, découverte en 1986 seulement, est l\'organisme photosynthétique le plus abondant de la Terre avec 10²⁷ cellules — et produit à elle seule environ 5 % de l\'oxygène mondial.'
            },
            {
              title: 'Le zooplancton et les réseaux trophiques',
              paragraphs: [
                'Le zooplancton regroupe les animaux planctoniques, depuis les protozoaires unicellulaires jusqu\'aux méduses. Les copépodes (Crustacea), longs de 1 à 5 mm, sont les métazoaires les plus abondants de la planète, jouant un rôle central dans le transfert d\'énergie entre le phytoplancton et les poissons. Le krill antarctique (Euphausia superba), crustacé de 6 cm, forme des essaims de plusieurs milliards d\'individus et constitue l\'alimentation principale des baleines à fanons, des phoques et des manchots.',
                'La migration verticale nycthémérale (jour-nuit) du zooplancton est le plus grand mouvement de biomasse sur Terre. Chaque soir, des milliards de copépodes, de krill et de petits poissons montent de 200-1 000 mètres de profondeur vers la surface pour se nourrir de phytoplancton sous le couvert de l\'obscurité, puis redescendent à l\'aube pour échapper aux prédateurs visuels. Ce mouvement transfère du carbone des eaux de surface vers les profondeurs.',
                'Le méroplancton comprend les larves d\'organismes benthiques (crabes, oursins, vers, mollusques, coraux) qui mènent une vie planctonique temporaire avant de se fixer sur le fond. Cette phase larvaire planctonique est cruciale pour la dispersion des espèces et la colonisation de nouveaux habitats. Les nauplii (larves de crustacés), les véligères (larves de mollusques) et les plutei (larves d\'oursins) peuplent le plancton par milliards.'
              ],
              highlight: 'La migration verticale nycthémérale du zooplancton est le plus grand déplacement de biomasse sur Terre, impliquant des milliards d\'organismes sur des centaines de mètres chaque nuit.'
            },
            {
              title: 'Le plancton et le climat',
              paragraphs: [
                'La pompe biologique de carbone repose sur le phytoplancton. En fixant le CO₂ par photosynthèse en surface, puis en transférant le carbone organique vers les profondeurs via les chaînes alimentaires (fécal pellets, organismes morts, migration verticale), le plancton extrait environ 11 gigatonnes de carbone des eaux de surface chaque année. Ce carbone est séquestré dans les sédiments profonds pendant des millénaires.',
                'Les coccolithophores, phytoplancton muni de plaques de calcaire (coccolithes), jouent un double rôle dans le cycle du carbone. Leur photosynthèse absorbe du CO₂, mais la calcification libère du CO₂. Leurs « blooms » (proliférations) massifs sont visibles depuis l\'espace sous forme de taches blanchâtres et influencent l\'albédo océanique. L\'accumulation de coccolithes a formé les falaises de craie de Douvres au cours du Crétacé.',
                'Les efflorescences algales nuisibles (Harmful Algal Blooms, HAB) sont des proliférations de phytoplancton toxique (dinoflagellés, cyanobactéries) favorisées par l\'eutrophisation côtière (excès de nutriments d\'origine agricole) et le réchauffement des eaux. Les « marées rouges » produisent des toxines (saxitoxine, acide domoïque) qui s\'accumulent dans les coquillages et peuvent provoquer des intoxications graves chez l\'homme et des mortalités massives chez les poissons et les mammifères marins.'
              ],
              highlight: 'Les falaises de craie de Douvres sont constituées de milliards de coccolithes — plaques calcaires microscopiques produites par le phytoplancton — accumulées sur des millions d\'années.'
            }
          ],
          quiz: [
            { q: 'Quel organisme photosynthétique est le plus abondant sur Terre ?', opts: ['Les diatomées', 'Les algues vertes', 'Prochlorococcus', 'Les coccolithophores'], correct: 2, explanation: 'Prochlorococcus, une cyanobactérie microscopique découverte en 1986, est l\'organisme photosynthétique le plus abondant de la Terre avec environ 10²⁷ cellules dans les océans.' },
            { q: 'Qu\'est-ce que la migration verticale nycthémérale ?', opts: ['Le déplacement latéral du plancton', 'La montée nocturne et la descente diurne du zooplancton', 'La migration saisonnière du krill', 'Le mouvement des courants profonds'], correct: 1, explanation: 'La migration verticale nycthémérale est le déplacement quotidien du zooplancton : montée vers la surface la nuit pour se nourrir, descente en profondeur le jour pour éviter les prédateurs.' },
            { q: 'Quel pourcentage de l\'oxygène atmosphérique le phytoplancton produit-il ?', opts: ['10 %', '25 %', 'Plus de 50 %', '90 %'], correct: 2, explanation: 'Le phytoplancton produit plus de 50 % de l\'oxygène atmosphérique par photosynthèse, soit plus que toutes les forêts terrestres réunies.' }
          ],
          definitions: [
            { term: 'Phytoplancton', def: 'Ensemble des organismes photosynthétiques microscopiques dérivant dans les eaux de surface (diatomées, dinoflagellés, cyanobactéries), base des réseaux trophiques marins.' },
            { term: 'Zooplancton', def: 'Ensemble des animaux planctoniques (copépodes, krill, larves, méduses) qui dérivent dans l\'eau et se nourrissent de phytoplancton ou d\'autres organismes.' },
            { term: 'Pompe biologique', def: 'Transfert de carbone organique de la surface vers les profondeurs océaniques via la chaîne alimentaire planctonique (photosynthèse → consommation → sédimentation).' },
            { term: 'Diatomée', def: 'Algue unicellulaire photosynthétique enfermée dans une coquille de silice (frustule), responsable d\'environ 20 % de la fixation globale du carbone.' },
            { term: 'Efflorescence algale', def: 'Prolifération rapide et massive de phytoplancton, parfois toxique (« marée rouge »), favorisée par l\'excès de nutriments et le réchauffement des eaux.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le krill antarctique représente une biomasse estimée à 500 millions de tonnes — l\'une des biomasses d\'espèces animales les plus importantes de la planète, surpassant le poids total de l\'humanité.' },
            { front: '💡 Le savais-tu ?', back: 'Les diatomées sont si belles au microscope que les Victoriens organisaient des concours de « diatomées arrangées » : des artistes disposaient ces coques de verre microscopiques en motifs géométriques sur des lames, un art invisible à l\'œil nu.' },
            { front: '💡 Le savais-tu ?', back: 'Si tout le phytoplancton disparaissait, l\'oxygène atmosphérique mettrait environ 5 000 ans à s\'épuiser, mais les écosystèmes marins s\'effondreraient en quelques semaines.' }
          ]
        },
        // --- Lesson 6.4 : Les abysses ---
        {
          slug: 'abysses',
          title: 'Les abysses',
          description: 'La vie dans l\'obscurité totale : sources hydrothermales, bioluminescence et organismes extrêmes.',
          intro: 'Les abysses, au-delà de 1 000 mètres de profondeur, représentent le plus vaste habitat de la Terre mais aussi le moins exploré. Dans cette obscurité totale, sous des pressions écrasantes et à des températures proches de 0 °C, la vie a développé des adaptations extraordinaires. La découverte des sources hydrothermales en 1977 a révolutionné la biologie en démontrant l\'existence d\'écosystèmes entiers fonctionnant sans lumière solaire, alimentés par la chimiosynthèse.',
          introHighlight: 'La découverte des sources hydrothermales en 1977 a révélé des écosystèmes entiers fonctionnant sans lumière solaire, remettant en question notre compréhension de la vie sur Terre.',
          intro2: '',
          sections: [
            {
              title: 'Les sources hydrothermales',
              paragraphs: [
                'Les sources hydrothermales se forment le long des dorsales médio-océaniques, là où le magma réchauffe l\'eau de mer infiltrée dans la croûte terrestre. L\'eau ressort à des températures allant de 60 °C à plus de 400 °C, chargée en minéraux dissous (sulfure d\'hydrogène, méthane, métaux lourds). Les « fumeurs noirs » émettent des panaches sombres de sulfures métalliques qui précipitent au contact de l\'eau froide, formant des cheminées pouvant atteindre 60 mètres de haut.',
                'La vie autour des sources hydrothermales repose sur la chimiosynthèse : des bactéries chimiolithoautotrophes oxydent le sulfure d\'hydrogène (H₂S) ou le méthane (CH₄) pour produire de l\'énergie, remplaçant la lumière solaire comme source d\'énergie primaire. Ces bactéries sont les producteurs primaires d\'un écosystème entier, nourrissant des communautés denses de vers tubicoles géants (Riftia pachyptila), de moules (Bathymodiolus), de crabes (Kiwa hirsuta) et de crevettes aveugles (Rimicaris).',
                'Le ver tubicole géant Riftia pachyptila, pouvant mesurer 2 mètres, ne possède ni bouche, ni intestin, ni anus. Il héberge dans un organe spécialisé (trophosome) des milliards de bactéries chimiosynthétiques qui le nourrissent. Son sang, rouge vif grâce à une hémoglobine spéciale, transporte à la fois l\'oxygène et le H₂S vers les bactéries — un exploit biochimique car le H₂S est normalement toxique pour l\'hémoglobine. Ce ver est l\'un des animaux à la croissance la plus rapide au monde, ajoutant 85 cm par an.'
              ],
              highlight: 'Le ver Riftia pachyptila n\'a ni bouche ni intestin : il vit grâce à des milliards de bactéries chimiosynthétiques logées dans un organe spécialisé qui le nourrissent entièrement.'
            },
            {
              title: 'La bioluminescence des profondeurs',
              paragraphs: [
                'Environ 76 % des organismes des profondeurs océaniques sont bioluminescents — la production de lumière est la règle, non l\'exception, dans les abysses. La bioluminescence résulte d\'une réaction chimique entre la luciférine (substrat) et la luciférase (enzyme), produisant des photons avec un rendement énergétique proche de 100 %. Elle a évolué indépendamment au moins 40 fois dans l\'arbre du vivant.',
                'La bioluminescence remplit des fonctions variées dans les profondeurs. Les baudroies (Lophiiformes) utilisent un leurre bioluminescent (esca) pour attirer leurs proies dans l\'obscurité totale. Les calmars et les poissons-lanternes produisent de la lumière pour le camouflage par contre-illumination : en émettant de la lumière vers le bas, ils effacent leur silhouette vue d\'en dessous. Les crevettes et les calmars projettent des nuages lumineux pour aveugler et désorienter leurs prédateurs.',
                'Le poisson-dragon (Malacosteus niger) émet une lumière rouge invisible pour la plupart des organismes abyssaux, qui ne perçoivent que le bleu-vert. Ce « phare infrarouge » lui permet de voir et de chasser ses proies sans être détecté — l\'équivalent biologique de lunettes de vision nocturne. La méduse Atolla wyvillei émet un « cri de détresse bioluminescent » quand elle est attaquée : son flash lumineux attire les prédateurs de son prédateur, un appel à l\'aide lumineux.'
              ],
              highlight: 'Environ 76 % des organismes des profondeurs océaniques produisent leur propre lumière — la bioluminescence est la forme de communication la plus répandue sur Terre.'
            },
            {
              title: 'Les adaptations aux conditions extrêmes',
              paragraphs: [
                'La pression hydrostatique augmente de 1 atmosphère tous les 10 mètres de profondeur. Au fond de la fosse des Mariannes (10 994 m), la pression atteint 1 100 atmosphères. Les organismes abyssaux possèdent des membranes cellulaires riches en acides gras insaturés, des protéines résistantes à la pression (piézolytes) et l\'absence de cavités gazeuses compressibles (pas de vessie natatoire). Le poisson le plus profond connu, Pseudoliparis swirei, a été filmé à 8 178 mètres dans la fosse des Mariannes.',
                'Le gigantisme abyssal est un phénomène par lequel certains organismes des profondeurs atteignent des tailles bien supérieures à celles de leurs cousins de surface. L\'isopode géant Bathynomus giganteus (45 cm) est 20 fois plus grand que le cloporte commun. Le calmar géant (Architeuthis dux) peut mesurer 13 mètres. Le calmar colossal (Mesonychoteuthis hamiltoni), encore plus massif, possède les plus grands yeux du règne animal (27 cm de diamètre) pour capter la moindre bioluminescence.',
                'Les carcasses de baleines qui coulent sur le fond (« whale falls ») créent des écosystèmes éphémères pouvant persister pendant 50 à 100 ans. La décomposition d\'une baleine de 40 tonnes passe par plusieurs stades successifs : d\'abord les nécrophages mobiles (requins dormeurs, myxines, amphipodes), puis les vers Osedax (« mangeurs d\'os ») qui digèrent le squelette grâce à des bactéries symbiotiques, et enfin des communautés chimiosynthétiques similaires à celles des sources hydrothermales.'
              ],
              highlight: 'Le calmar colossal possède les plus grands yeux du règne animal (27 cm de diamètre), adaptés pour détecter la bioluminescence à grande distance dans l\'obscurité abyssale.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que la chimiosynthèse ?', opts: ['La photosynthèse dans l\'obscurité', 'La production d\'énergie à partir de réactions chimiques inorganiques', 'La digestion bactérienne', 'La fermentation en milieu marin'], correct: 1, explanation: 'La chimiosynthèse est la production d\'énergie par des bactéries qui oxydent des composés chimiques inorganiques (H₂S, CH₄) au lieu d\'utiliser la lumière solaire, base des écosystèmes des sources hydrothermales.' },
            { q: 'Pourquoi la bioluminescence est-elle si répandue dans les abysses ?', opts: ['Pour se réchauffer', 'Parce que c\'est le seul moyen de communication dans l\'obscurité totale', 'Par mutation génétique aléatoire', 'Pour absorber les nutriments'], correct: 1, explanation: 'Dans l\'obscurité totale des abysses, la bioluminescence est le principal mode de communication pour attirer les proies, repousser les prédateurs, trouver un partenaire ou se camoufler.' },
            { q: 'Comment se nourrit le ver tubicole géant Riftia ?', opts: ['Par filtration de l\'eau', 'Grâce à des bactéries chimiosynthétiques internes', 'En capturant des proies', 'Par absorption cutanée'], correct: 1, explanation: 'Riftia pachyptila, dépourvu de tube digestif, héberge des milliards de bactéries chimiosynthétiques dans un organe spécialisé (trophosome) qui oxydent le H₂S pour produire des nutriments.' }
          ],
          definitions: [
            { term: 'Chimiosynthèse', def: 'Production d\'énergie par des bactéries à partir de l\'oxydation de composés chimiques inorganiques (H₂S, CH₄, NH₃), remplaçant la photosynthèse dans les environnements sans lumière.' },
            { term: 'Source hydrothermale', def: 'Évent sous-marin émettant de l\'eau chaude (60-400 °C) chargée en minéraux, situé le long des dorsales médio-océaniques, abritant des écosystèmes chimiosynthétiques.' },
            { term: 'Bioluminescence', def: 'Production de lumière par un organisme vivant grâce à une réaction chimique entre la luciférine et la luciférase, présente chez 76 % des organismes des profondeurs.' },
            { term: 'Gigantisme abyssal', def: 'Phénomène par lequel certains organismes des profondeurs atteignent des tailles bien supérieures à celles de leurs parents de surface, possiblement lié aux basses températures et au métabolisme ralenti.' },
            { term: 'Whale fall', def: 'Carcasse de baleine reposant sur le fond océanique, créant un écosystème éphémère qui peut persister pendant des décennies et abriter des centaines d\'espèces.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Seules trois personnes ont atteint le fond de la fosse des Mariannes : Jacques Piccard et Don Walsh en 1960 (bathyscaphe Trieste) et James Cameron en 2012 (sous-marin Deepsea Challenger). Ils y ont trouvé des organismes vivants.' },
            { front: '💡 Le savais-tu ?', back: 'Les vers Osedax (« mangeurs d\'os ») digèrent les squelettes de baleines sans posséder de bouche ni d\'estomac : ils utilisent des bactéries symbiotiques logées dans des racines qui pénètrent l\'os pour en extraire les lipides.' },
            { front: '💡 Le savais-tu ?', back: 'La baudroie abyssale femelle peut mesurer 1 mètre, tandis que le mâle nain, 10 fois plus petit, se fixe définitivement sur elle et fusionne ses tissus avec les siens, devenant un simple appendice reproducteur — l\'un des parasitismes sexuels les plus extrêmes du vivant.' }
          ]
        },
        // --- Lesson 6.5 : Les mammifères marins ---
        {
          slug: 'mammiferes-marins',
          title: 'Les mammifères marins',
          description: 'Les cétacés, les pinnipèdes et les siréniens : adaptation au milieu aquatique et conservation.',
          intro: 'Les mammifères marins regroupent environ 130 espèces qui ont secondairement conquis le milieu aquatique à partir d\'ancêtres terrestres. Les cétacés (baleines, dauphins), les pinnipèdes (phoques, otaries, morses), les siréniens (lamantins, dugongs) et la loutre de mer illustrent la plasticité évolutive des mammifères, ayant développé indépendamment des adaptations remarquables à la vie marine tout en conservant leurs caractéristiques de mammifères : respiration aérienne, thermorégulation endotherme et allaitement.',
          introHighlight: 'Les cétacés descendent d\'ongulés terrestres : l\'hippopotame est le plus proche parent vivant des baleines, une parenté confirmée par la génétique moléculaire.',
          intro2: '',
          sections: [
            {
              title: 'Les cétacés : baleines et dauphins',
              paragraphs: [
                'Les cétacés se divisent en mysticètes (baleines à fanons : baleines bleues, baleines à bosse, baleines grises) et odontocètes (cétacés à dents : dauphins, orques, cachalots, bélugas). Les mysticètes filtrent d\'énormes quantités d\'eau grâce à leurs fanons (lames de kératine) pour capturer le krill et les petits poissons. La baleine bleue, avec ses 30 mètres et 150 tonnes, est le plus grand animal ayant jamais vécu. Elle consomme jusqu\'à 4 tonnes de krill par jour.',
                'Les odontocètes utilisent l\'écholocation pour naviguer et chasser : ils émettent des clics ultrasonores via le melon (organe frontal rempli de lipides) et analysent les échos reçus par la mâchoire inférieure, qui les transmet à l\'oreille interne. Le grand dauphin (Tursiops truncatus) peut discriminer des objets de quelques centimètres à 100 mètres de distance. Le cachalot (Physeter macrocephalus), le plus grand odontocète (18 m), possède le plus gros cerveau du règne animal (8 kg) et plonge jusqu\'à 2 250 mètres pendant plus d\'une heure.',
                'Les adaptations à la plongée des cétacés incluent un taux élevé de myoglobine dans les muscles (stockage d\'oxygène), la redistribution sanguine vers les organes vitaux (cerveau, cœur), le ralentissement du rythme cardiaque (bradycardie de plongée) et la tolérance à l\'acide lactique. L\'éléphant de mer (Mirounga leonina) peut plonger pendant 2 heures et atteindre 2 000 mètres, rivalisant avec les cachalots.'
              ],
              highlight: 'Le cachalot possède le plus gros cerveau du règne animal (8 kg) et plonge à plus de 2 000 mètres de profondeur pour chasser les calmars géants dans l\'obscurité abyssale.'
            },
            {
              title: 'L\'intelligence et la culture des cétacés',
              paragraphs: [
                'Les cétacés possèdent des cerveaux parmi les plus grands et les plus complexes du règne animal. Le cortex cérébral du grand dauphin est plus plissé (plus de circonvolutions) que celui de l\'homme, et contient des neurones en fuseau (neurones de von Economo) associés chez l\'homme à la conscience de soi et à l\'empathie. Les dauphins réussissent le test du miroir, font preuve d\'empathie (aide aux congénères blessés, adoption de jeunes orphelins) et utilisent des outils.',
                'Les cultures distinctes des populations d\'orques sont parmi les mieux documentées chez les non-humains. Les orques résidentes du Pacifique Nord-Ouest se spécialisent dans la chasse au saumon, les nomades dans les mammifères marins, et les transiantes dans les requins. Chaque écotype possède ses propres dialectes vocaux, ses techniques de chasse (échouage volontaire, vague créée en groupe pour déstabiliser les phoques sur les glaces) et ses rituels sociaux, transmis de génération en génération.',
                'Les chants des baleines à bosse (Megaptera novaeangliae) sont les plus complexes du règne animal. Un chant dure 10 à 20 minutes, composé de phrases et de thèmes, et évolue au cours de la saison de reproduction. Fait remarquable, tous les mâles d\'une même population chantent la même version du chant, qui se modifie progressivement et de manière coordonnée — une évolution culturelle en temps réel. Des « modes musicales » se propagent d\'une population à l\'autre à travers l\'océan Pacifique.'
              ],
              highlight: 'Les chants des baleines à bosse évoluent culturellement : tous les mâles d\'une même population chantent la même version, qui se transforme progressivement au cours de la saison.'
            },
            {
              title: 'Les menaces et la conservation',
              paragraphs: [
                'La chasse baleinière commerciale a décimé les populations de grandes baleines entre le XVIIIe et le XXe siècle. La baleine bleue a été réduite de 250 000 individus à environ 2 000 avant le moratoire de la Commission baleinière internationale (CBI) en 1986. Certaines populations se rétablissent lentement (la baleine à bosse est passée de 5 000 à environ 80 000 individus), mais d\'autres restent en danger critique (baleine franche de l\'Atlantique Nord : environ 350 individus).',
                'Les menaces actuelles incluent les collisions avec les navires (première cause de mortalité de la baleine franche de l\'Atlantique Nord), l\'empêtrement dans les engins de pêche (300 000 cétacés tués par an selon l\'IWC), la pollution sonore sous-marine (les sonars militaires et le trafic maritime perturbent la communication et la navigation), la bioaccumulation de polluants (PCB, mercure, microplastiques) et le changement climatique qui modifie la distribution des proies.',
                'La protection des mammifères marins repose sur les aires marines protégées, les limitations de vitesse des navires dans les zones critiques, les dispositifs d\'exclusion des cétacés dans les filets de pêche (pingers acoustiques), et les réglementations internationales sur la pollution sonore sous-marine. Le tourisme d\'observation des baleines (whale watching), générant 2,1 milliards de dollars par an, démontre que les baleines vivantes valent bien plus que les baleines mortes.'
              ],
              highlight: 'La baleine franche de l\'Atlantique Nord, avec environ 350 individus, est le grand cétacé le plus menacé au monde — les collisions avec les navires sont sa première cause de mortalité.'
            }
          ],
          quiz: [
            { q: 'Quel est le plus proche parent terrestre vivant des baleines ?', opts: ['L\'éléphant', 'Le cheval', 'L\'hippopotame', 'Le rhinocéros'], correct: 2, explanation: 'Les analyses génétiques ont révélé que l\'hippopotame (Hippopotamidae) est le plus proche parent terrestre vivant des cétacés, partageant un ancêtre commun semi-aquatique.' },
            { q: 'Comment les odontocètes chassent-ils dans l\'obscurité ?', opts: ['Par l\'odorat', 'Par écholocation', 'Par la vision infrarouge', 'Par le toucher'], correct: 1, explanation: 'Les odontocètes émettent des clics ultrasonores et analysent les échos pour localiser leurs proies avec une précision remarquable, même dans l\'obscurité totale.' },
            { q: 'Combien de cétacés sont tués par an dans les engins de pêche ?', opts: ['30 000', '100 000', '300 000', '1 million'], correct: 2, explanation: 'Selon la Commission baleinière internationale (CBI), environ 300 000 cétacés meurent chaque année empêtrés dans des filets de pêche, des lignes ou des casiers.' }
          ],
          definitions: [
            { term: 'Mysticète', def: 'Sous-ordre de cétacés à fanons (baleines bleues, baleines à bosse, baleines grises) qui filtrent l\'eau pour capturer le krill et les petits poissons.' },
            { term: 'Odontocète', def: 'Sous-ordre de cétacés à dents (dauphins, orques, cachalots) qui utilisent l\'écholocation pour naviguer et chasser.' },
            { term: 'Écholocation', def: 'Système de navigation et de chasse par émission d\'ultrasons et analyse de leurs échos, utilisé par les odontocètes pour détecter les proies et les obstacles avec précision.' },
            { term: 'Bradycardie de plongée', def: 'Ralentissement du rythme cardiaque lors de la plongée chez les mammifères marins, réduisant la consommation d\'oxygène et permettant des plongées prolongées.' },
            { term: 'Bioaccumulation', def: 'Accumulation progressive de substances toxiques (PCB, mercure, pesticides) dans les tissus des organismes le long de la chaîne alimentaire, atteignant des concentrations dangereuses chez les prédateurs au sommet.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le lait de baleine bleue contient environ 35 % de matières grasses (contre 4 % pour le lait de vache), permettant au baleineau de prendre 90 kg par jour et d\'atteindre 8 mètres au sevrage à 7 mois.' },
            { front: '💡 Le savais-tu ?', back: 'Les orques sont si culturellement diversifiées que des populations vivant dans les mêmes eaux ne se reproduisent pas entre elles et ne partagent pas les mêmes proies, constituant de facto des « espèces culturelles » distinctes.' },
            { front: '💡 Le savais-tu ?', back: 'Pakicetus, l\'ancêtre des baleines il y a 50 millions d\'années, ressemblait à un petit chien au museau allongé. En 15 millions d\'années d\'évolution, ses descendants ont perdu leurs pattes postérieures, développé des nageoires et atteint la taille des baleines actuelles.' }
          ]
        }
      ]
    }
  ]
};
