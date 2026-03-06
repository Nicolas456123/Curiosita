// Discipline definition: Sciences de l'environnement
// 5 hubs, 25 lessons — all content in French

module.exports = {
  slug: 'environnement',
  title: 'Sciences de l\'environnement',
  description: 'Comprenez les grands enjeux environnementaux contemporains : pollution, changement climatique, biodiversit\u00e9 menac\u00e9e et solutions durables.',
  icon: '\u{1F30D}',
  cat: 'Sciences de l\'environnement',
  themeSlug: 'sciences-nature',
  accent: '#5daa68',
  accent2: '#7ec487',
  accentDim: 'rgba(93,170,104,0.1)',
  accentHero: 'rgba(93,170,104,0.08)',
  introTitle: 'Que sont les sciences de l\'environnement ?',
  introText: 'Les sciences de l\'environnement \u00e9tudient les interactions entre les syst\u00e8mes naturels et les activit\u00e9s humaines. Elles combinent \u00e9cologie, chimie, g\u00e9ologie, climatologie et sciences sociales pour comprendre les m\u00e9canismes qui r\u00e9gissent notre plan\u00e8te et les d\u00e9s\u00e9quilibres caus\u00e9s par l\'industrialisation, l\'urbanisation et la surconsommation des ressources.',
  introHighlight: 'De l\'effet de serre \u00e0 la disparition des esp\u00e8ces, des oc\u00e9ans pollu\u00e9s aux \u00e9nergies renouvelables, les sciences de l\'environnement nous offrent les cl\u00e9s pour comprendre la crise \u00e9cologique et agir face \u00e0 elle.',
  articleLow: 'les',
  hubs: [
    // ==================== HUB 1 : Changement climatique ====================
    {
      slug: 'changement-climatique',
      title: 'Changement climatique',
      description: 'Comprendre les m\u00e9canismes du r\u00e9chauffement plan\u00e9taire, ses causes, ses cons\u00e9quences et les efforts internationaux pour le limiter.',
      lessons: [
        // --- Lesson 1.1 : L'effet de serre ---
        {
          slug: 'effet-de-serre',
          title: 'L\'effet de serre',
          description: 'Le m\u00e9canisme naturel qui r\u00e9chauffe la Terre et son amplification par les activit\u00e9s humaines.',
          intro: 'L\'effet de serre est un ph\u00e9nom\u00e8ne naturel indispensable \u00e0 la vie sur Terre. Sans lui, la temp\u00e9rature moyenne \u00e0 la surface du globe serait d\'environ -18 \u00b0C au lieu des +15 \u00b0C que nous connaissons. Cependant, l\'intensification de cet effet par les \u00e9missions anthropiques de gaz \u00e0 effet de serre constitue le moteur principal du r\u00e9chauffement climatique actuel.',
          introHighlight: 'L\'effet de serre naturel rend la Terre habitable, mais son amplification par l\'homme d\u00e9r\u00e8gle le climat plan\u00e9taire.',
          intro2: '',
          sections: [
            {
              title: 'Le m\u00e9canisme de l\'effet de serre naturel',
              paragraphs: [
                'Le Soleil \u00e9met un rayonnement \u00e9lectromagn\u00e9tique dont une partie atteint la surface terrestre sous forme de lumi\u00e8re visible. La Terre absorbe environ 70 % de cette \u00e9nergie solaire et r\u00e9\u00e9met le reste sous forme de rayonnement infrarouge thermique vers l\'espace. Certains gaz pr\u00e9sents dans l\'atmosph\u00e8re, appel\u00e9s gaz \u00e0 effet de serre (GES), absorbent une partie de ce rayonnement infrarouge et le r\u00e9\u00e9mettent dans toutes les directions, y compris vers la surface.',
                'Les principaux gaz \u00e0 effet de serre naturels sont la vapeur d\'eau (H\u2082O), le dioxyde de carbone (CO\u2082), le m\u00e9thane (CH\u2084), le protoxyde d\'azote (N\u2082O) et l\'ozone troposph\u00e9rique (O\u2083). La vapeur d\'eau est le GES le plus abondant et contribue \u00e0 environ 60 % de l\'effet de serre naturel, tandis que le CO\u2082 en repr\u00e9sente environ 25 %.',
                'Ce pi\u00e9geage partiel du rayonnement infrarouge cr\u00e9e un \u00e9quilibre \u00e9nerg\u00e9tique qui maintient la temp\u00e9rature moyenne terrestre \u00e0 environ 15 \u00b0C. Sans cette couverture gazeuse, la Terre serait une plan\u00e8te gel\u00e9e, inhospitali\u00e8re pour la grande majorit\u00e9 des formes de vie que nous connaissons.'
              ],
              highlight: 'Sans l\'effet de serre naturel, la temp\u00e9rature moyenne de la Terre serait de -18 \u00b0C au lieu de +15 \u00b0C.'
            },
            {
              title: 'L\'amplification anthropique',
              paragraphs: [
                'Depuis le d\u00e9but de la r\u00e9volution industrielle, vers 1750, les activit\u00e9s humaines ont consid\u00e9rablement augment\u00e9 la concentration atmosph\u00e9rique des GES. La concentration de CO\u2082 est pass\u00e9e de 280 parties par million (ppm) \u00e0 l\'\u00e9poque pr\u00e9industrielle \u00e0 plus de 420 ppm en 2024, soit une hausse de 50 %. Cette augmentation est principalement due \u00e0 la combustion des \u00e9nergies fossiles (charbon, p\u00e9trole, gaz naturel) et \u00e0 la d\u00e9forestation.',
                'Le m\u00e9thane atmosph\u00e9rique a plus que doubl\u00e9 depuis l\'\u00e8re pr\u00e9industrielle, passant de 700 \u00e0 plus de 1 900 parties par milliard (ppb). Ses sources anthropiques incluent l\'\u00e9levage de ruminants, les rizi\u00e8res, les d\u00e9charges et les fuites de gaz naturel. Bien que moins abondant que le CO\u2082, le m\u00e9thane poss\u00e8de un pouvoir de r\u00e9chauffement global (PRG) environ 80 fois sup\u00e9rieur \u00e0 celui du CO\u2082 sur 20 ans.',
                'Les gaz fluoris (HFC, PFC, SF\u2086), bien que pr\u00e9sents en tr\u00e8s faibles concentrations, poss\u00e8dent des PRG extr\u00eamement \u00e9lev\u00e9s, pouvant atteindre plusieurs milliers de fois celui du CO\u2082. Utilis\u00e9s dans la r\u00e9frig\u00e9ration et l\'industrie, ils repr\u00e9sentent une part croissante du for\u00e7age radiatif additionnel.'
              ],
              highlight: 'La concentration de CO\u2082 a augment\u00e9 de 50 % depuis l\'\u00e8re pr\u00e9industrielle, passant de 280 \u00e0 plus de 420 ppm.'
            },
            {
              title: 'Le for\u00e7age radiatif et le bilan \u00e9nerg\u00e9tique',
              paragraphs: [
                'Le for\u00e7age radiatif mesure la perturbation du bilan \u00e9nerg\u00e9tique de la Terre caus\u00e9e par un facteur externe. Un for\u00e7age positif r\u00e9chauffe la plan\u00e8te, un for\u00e7age n\u00e9gatif la refroidit. Selon le GIEC, le for\u00e7age radiatif total d\u00fb aux activit\u00e9s humaines depuis 1750 est d\'environ +2,72 W/m\u00b2 (rapport AR6, 2021), dont +2,16 W/m\u00b2 pour le seul CO\u2082.',
                'Ce d\u00e9s\u00e9quilibre \u00e9nerg\u00e9tique signifie que la Terre absorbe plus d\'\u00e9nergie qu\'elle n\'en \u00e9met vers l\'espace. L\'exc\u00e9dent d\'\u00e9nergie est stock\u00e9 principalement dans les oc\u00e9ans (environ 91 %), mais aussi dans l\'atmosph\u00e8re, les sols et la cryosph\u00e8re. Ce stockage thermique explique l\'inertie du syst\u00e8me climatique : m\u00eame si les \u00e9missions cessaient aujourd\'hui, le r\u00e9chauffement se poursuivrait pendant plusieurs d\u00e9cennies.'
              ],
              highlight: 'Le for\u00e7age radiatif anthropique est de +2,72 W/m\u00b2, dont +2,16 W/m\u00b2 pour le seul CO\u2082.'
            }
          ],
          quiz: [
            { q: 'Quelle serait la temp\u00e9rature moyenne de la Terre sans l\'effet de serre naturel ?', opts: ['-18 \u00b0C', '0 \u00b0C', '+5 \u00b0C', '+15 \u00b0C'], correct: 0, explanation: 'Sans l\'effet de serre naturel, la temp\u00e9rature moyenne serait d\'environ -18 \u00b0C, soit 33 \u00b0C de moins qu\'actuellement.' },
            { q: 'Quel GES contribue le plus \u00e0 l\'effet de serre naturel ?', opts: ['La vapeur d\'eau', 'Le CO\u2082', 'Le m\u00e9thane', 'L\'ozone'], correct: 0, explanation: 'La vapeur d\'eau est responsable d\'environ 60 % de l\'effet de serre naturel, bien que le CO\u2082 soit le principal GES d\'origine anthropique.' },
            { q: 'Quelle est la concentration approximative de CO\u2082 atmosph\u00e9rique en 2024 ?', opts: ['280 ppm', '350 ppm', '420 ppm', '500 ppm'], correct: 2, explanation: 'La concentration de CO\u2082 a d\u00e9pass\u00e9 420 ppm en 2024, soit une hausse de 50 % par rapport au niveau pr\u00e9industriel de 280 ppm.' }
          ],
          definitions: [
            { term: 'Effet de serre', def: 'Ph\u00e9nom\u00e8ne naturel par lequel certains gaz atmosph\u00e9riques pi\u00e8gent une partie du rayonnement infrarouge \u00e9mis par la surface terrestre, r\u00e9chauffant ainsi la basse atmosph\u00e8re.' },
            { term: 'Gaz \u00e0 effet de serre (GES)', def: 'Gaz atmosph\u00e9rique qui absorbe et r\u00e9\u00e9met le rayonnement infrarouge thermique, contribuant \u00e0 l\'effet de serre. Les principaux GES sont H\u2082O, CO\u2082, CH\u2084, N\u2082O et O\u2083.' },
            { term: 'For\u00e7age radiatif', def: 'Mesure de la perturbation du bilan \u00e9nerg\u00e9tique terrestre caus\u00e9e par un facteur externe, exprim\u00e9e en watts par m\u00e8tre carr\u00e9 (W/m\u00b2).' },
            { term: 'Pouvoir de r\u00e9chauffement global (PRG)', def: 'Indice comparant l\'effet de r\u00e9chauffement d\'un GES \u00e0 celui du CO\u2082 sur une p\u00e9riode donn\u00e9e (g\u00e9n\u00e9ralement 100 ans).' },
            { term: 'Rayonnement infrarouge', def: 'Rayonnement \u00e9lectromagn\u00e9tique de longueur d\'onde sup\u00e9rieure \u00e0 celle de la lumi\u00e8re visible, \u00e9mis par tout corps chaud, y compris la surface terrestre.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'V\u00e9nus poss\u00e8de une atmosph\u00e8re compos\u00e9e \u00e0 96 % de CO\u2082, ce qui cr\u00e9e un effet de serre si intense que sa temp\u00e9rature de surface atteint 465 \u00b0C, plus chaude que Mercure pourtant plus proche du Soleil.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Une mol\u00e9cule de CO\u2082 reste dans l\'atmosph\u00e8re entre 300 et 1 000 ans, tandis qu\'une mol\u00e9cule de m\u00e9thane s\'y d\u00e9grade en environ 12 ans.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'L\'hexafluorure de soufre (SF\u2086) est le gaz \u00e0 effet de serre le plus puissant connu : son PRG est 23 500 fois sup\u00e9rieur \u00e0 celui du CO\u2082 sur 100 ans.' }
          ]
        },
        // --- Lesson 1.2 : Le réchauffement global ---
        {
          slug: 'rechauffement-global',
          title: 'Le r\u00e9chauffement global',
          description: 'L\'\u00e9volution des temp\u00e9ratures mondiales, les preuves scientifiques et les projections futures.',
          intro: 'La temp\u00e9rature moyenne de la surface terrestre a augment\u00e9 d\'environ 1,1 \u00b0C depuis la p\u00e9riode pr\u00e9industrielle. Ce r\u00e9chauffement, d\u00e9sormais sans \u00e9quivoque attribu\u00e9 aux activit\u00e9s humaines par le GIEC, s\'acc\u00e9l\u00e8re et ses cons\u00e9quences se manifestent d\u00e9j\u00e0 \u00e0 travers le monde.',
          introHighlight: 'Le r\u00e9chauffement de +1,1 \u00b0C observ\u00e9 depuis l\'\u00e8re pr\u00e9industrielle est in\u00e9dit par sa rapidit\u00e9 dans l\'histoire r\u00e9cente de la Terre.',
          intro2: '',
          sections: [
            {
              title: 'Les observations et les preuves',
              paragraphs: [
                'Les relev\u00e9s thermom\u00e9triques syst\u00e9matiques, disponibles depuis 1850, montrent une tendance claire au r\u00e9chauffement, particuli\u00e8rement marqu\u00e9e depuis les ann\u00e9es 1970. Les huit ann\u00e9es les plus chaudes jamais enregistr\u00e9es se situent toutes apr\u00e8s 2015. L\'ann\u00e9e 2023 a \u00e9t\u00e9 la plus chaude de l\'histoire instrumentale, avec une anomalie de +1,48 \u00b0C par rapport \u00e0 la moyenne pr\u00e9industrielle.',
                'Au-del\u00e0 des thermom\u00e8tres, de multiples indicateurs convergent : la mont\u00e9e du niveau des mers (environ 3,7 mm/an depuis 2006), la fonte acc\u00e9l\u00e9r\u00e9e des glaciers et des calottes polaires, la diminution de la banquise arctique, le r\u00e9chauffement des oc\u00e9ans et l\'augmentation de la fr\u00e9quence des \u00e9v\u00e9nements m\u00e9t\u00e9orologiques extr\u00eames.',
                'Les donn\u00e9es pal\u00e9oclimatiques, extraites des carottes de glace, des s\u00e9diments marins et des anneaux d\'arbres, r\u00e9v\u00e8lent que la vitesse actuelle du r\u00e9chauffement est sans pr\u00e9c\u00e9dent depuis au moins 2 000 ans. Les variations naturelles du climat, bien r\u00e9elles, ne peuvent expliquer ni l\'ampleur ni la rapidit\u00e9 du changement observ\u00e9.'
              ],
              highlight: 'L\'ann\u00e9e 2023 a \u00e9t\u00e9 la plus chaude jamais enregistr\u00e9e, avec +1,48 \u00b0C par rapport \u00e0 la moyenne pr\u00e9industrielle.'
            },
            {
              title: 'L\'attribution aux activit\u00e9s humaines',
              paragraphs: [
                'Le GIEC affirme dans son sixi\u00e8me rapport (AR6, 2021) qu\'il est \u00ab sans \u00e9quivoque \u00bb que l\'influence humaine a r\u00e9chauff\u00e9 l\'atmosph\u00e8re, les oc\u00e9ans et les terres \u00e9merg\u00e9es. Les mod\u00e8les climatiques montrent que les facteurs naturels seuls (activit\u00e9 solaire, volcanisme) ne peuvent reproduire le r\u00e9chauffement observ\u00e9 depuis 1950.',
                'La science de l\'attribution climatique permet d\u00e9sormais de quantifier la contribution humaine \u00e0 des \u00e9v\u00e9nements m\u00e9t\u00e9orologiques sp\u00e9cifiques. Par exemple, la canicule de 2003 en Europe, qui a caus\u00e9 plus de 70 000 d\u00e9c\u00e8s, a \u00e9t\u00e9 rendue au moins deux fois plus probable par le changement climatique anthropique.'
              ],
              highlight: 'Le GIEC affirme \u00ab sans \u00e9quivoque \u00bb que le r\u00e9chauffement observ\u00e9 est d\u00fb aux activit\u00e9s humaines.'
            },
            {
              title: 'Les projections futures',
              paragraphs: [
                'Selon les sc\u00e9narios du GIEC, la temp\u00e9rature globale pourrait augmenter de +1,5 \u00b0C d\u00e8s le d\u00e9but des ann\u00e9es 2030 dans les trajectoires les plus pessimistes. Dans le sc\u00e9nario \u00e0 tr\u00e8s hautes \u00e9missions (SSP5-8.5), le r\u00e9chauffement pourrait atteindre +4,4 \u00b0C d\'ici 2100, tandis que le sc\u00e9nario le plus optimiste (SSP1-1.9) limiterait la hausse \u00e0 environ +1,4 \u00b0C.',
                'Chaque fraction de degr\u00e9 suppl\u00e9mentaire a des cons\u00e9quences significatives. Un monde \u00e0 +2 \u00b0C diff\u00e8re radicalement d\'un monde \u00e0 +1,5 \u00b0C : 170 millions de personnes suppl\u00e9mentaires expos\u00e9es \u00e0 des canicules s\u00e9v\u00e8res, une Arctique libre de glace en \u00e9t\u00e9 une fois par d\u00e9cennie au lieu d\'une fois par si\u00e8cle, et la perte de 99 % des r\u00e9cifs coralliens au lieu de 70 \u00e0 90 %.'
              ],
              highlight: '\u00c0 +2 \u00b0C, 99 % des r\u00e9cifs coralliens dispara\u00eetraient, contre 70-90 % \u00e0 +1,5 \u00b0C.'
            }
          ],
          quiz: [
            { q: 'De combien la temp\u00e9rature moyenne globale a-t-elle augment\u00e9 depuis l\'\u00e8re pr\u00e9industrielle ?', opts: ['+0,5 \u00b0C', '+1,1 \u00b0C', '+2,0 \u00b0C', '+3,0 \u00b0C'], correct: 1, explanation: 'Le r\u00e9chauffement moyen observ\u00e9 est d\'environ +1,1 \u00b0C par rapport \u00e0 la p\u00e9riode pr\u00e9industrielle (1850-1900).' },
            { q: 'Quel sc\u00e9nario du GIEC projette le r\u00e9chauffement le plus \u00e9lev\u00e9 ?', opts: ['SSP1-1.9', 'SSP2-4.5', 'SSP3-7.0', 'SSP5-8.5'], correct: 3, explanation: 'Le sc\u00e9nario SSP5-8.5 (\u00e0 tr\u00e8s hautes \u00e9missions) projette un r\u00e9chauffement pouvant atteindre +4,4 \u00b0C d\'ici 2100.' },
            { q: 'Quel indicateur ne constitue PAS une preuve directe du r\u00e9chauffement ?', opts: ['La mont\u00e9e du niveau des mers', 'L\'augmentation du CO\u2082 atmosph\u00e9rique', 'La fonte des glaciers', 'Le r\u00e9chauffement des oc\u00e9ans'], correct: 1, explanation: 'L\'augmentation du CO\u2082 est une cause du r\u00e9chauffement, pas une preuve directe de la hausse des temp\u00e9ratures. Les autres indicateurs sont des cons\u00e9quences observ\u00e9es du r\u00e9chauffement.' }
          ],
          definitions: [
            { term: 'Anomalie de temp\u00e9rature', def: '\u00c9cart entre la temp\u00e9rature mesur\u00e9e et une moyenne de r\u00e9f\u00e9rence (g\u00e9n\u00e9ralement la p\u00e9riode 1850-1900 pour l\'\u00e8re pr\u00e9industrielle).' },
            { term: 'Sc\u00e9nario SSP', def: 'Shared Socioeconomic Pathway : trajectoire socio-\u00e9conomique utilis\u00e9e par le GIEC pour mod\u00e9liser diff\u00e9rentes \u00e9volutions possibles des \u00e9missions de GES.' },
            { term: 'Pal\u00e9oclimatologie', def: 'Science qui \u00e9tudie les climats pass\u00e9s \u00e0 partir d\'archives naturelles comme les carottes de glace, les s\u00e9diments et les fossiles.' },
            { term: 'Attribution climatique', def: 'Discipline scientifique qui \u00e9value la contribution du changement climatique anthropique \u00e0 des \u00e9v\u00e9nements m\u00e9t\u00e9orologiques sp\u00e9cifiques.' },
            { term: 'Cryosph\u00e8re', def: 'Ensemble des surfaces terrestres recouvertes de glace ou de neige : glaciers, calottes polaires, banquise, permafrost.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Groenland perd environ 270 milliards de tonnes de glace par an, soit l\'\u00e9quivalent de 100 millions de piscines olympiques.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La derni\u00e8re fois que la concentration de CO\u2082 a d\u00e9pass\u00e9 400 ppm, c\'\u00e9tait il y a environ 3 millions d\'ann\u00e9es, lorsque le niveau de la mer \u00e9tait 15 \u00e0 25 m\u00e8tres plus \u00e9lev\u00e9 qu\'aujourd\'hui.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les oc\u00e9ans ont absorb\u00e9 plus de 90 % de l\'exc\u00e8s de chaleur li\u00e9 au r\u00e9chauffement climatique depuis 1970, agissant comme un gigantesque tampon thermique.' }
          ]
        },
        // --- Lesson 1.3 : Le GIEC ---
        {
          slug: 'giec',
          title: 'Le GIEC et la science du climat',
          description: 'Le r\u00f4le du Groupe d\'experts intergouvernemental sur l\'\u00e9volution du climat et ses rapports.',
          intro: 'Le GIEC (Groupe d\'experts intergouvernemental sur l\'\u00e9volution du climat), cr\u00e9\u00e9 en 1988 par l\'ONU, est l\'organisme de r\u00e9f\u00e9rence mondial pour l\'\u00e9valuation scientifique du changement climatique. Ses rapports, r\u00e9dig\u00e9s par des milliers de scientifiques b\u00e9n\u00e9voles, constituent la base des n\u00e9gociations climatiques internationales.',
          introHighlight: 'Le GIEC ne produit pas de recherche : il synth\u00e9tise l\'ensemble de la litt\u00e9rature scientifique mondiale sur le climat.',
          intro2: '',
          sections: [
            {
              title: 'Structure et fonctionnement du GIEC',
              paragraphs: [
                'Le GIEC est organis\u00e9 en trois groupes de travail. Le Groupe I \u00e9value les bases physiques du changement climatique. Le Groupe II analyse les impacts, la vuln\u00e9rabilit\u00e9 et l\'adaptation. Le Groupe III examine les options d\'att\u00e9nuation des \u00e9missions. Un rapport de synth\u00e8se r\u00e9unit les conclusions des trois groupes.',
                'Chaque cycle d\'\u00e9valuation dure environ sept ans. Le sixi\u00e8me cycle (AR6) s\'est achev\u00e9 en 2023. Le processus de r\u00e9daction implique des centaines d\'auteurs principaux, des milliers de contributeurs et plusieurs tours de relecture o\u00f9 des dizaines de milliers de commentaires sont trait\u00e9s. Ce processus rigoureux garantit la fiabilit\u00e9 et l\'exhaustivit\u00e9 des conclusions.',
                'Le R\u00e9sum\u00e9 \u00e0 l\'intention des d\u00e9cideurs (SPM) de chaque rapport est approuv\u00e9 ligne par ligne par les repr\u00e9sentants des 195 \u00c9tats membres, ce qui lui conf\u00e8re une l\u00e9gitimit\u00e9 politique unique tout en pr\u00e9servant la rigueur scientifique.'
              ],
              highlight: 'Le GIEC compte 195 \u00c9tats membres et mobilise des milliers de scientifiques b\u00e9n\u00e9voles pour chaque cycle d\'\u00e9valuation.'
            },
            {
              title: 'Les principales conclusions du GIEC',
              paragraphs: [
                'Depuis son premier rapport en 1990, le GIEC a progressivement renforc\u00e9 ses conclusions sur l\'origine anthropique du r\u00e9chauffement. En 1995, il \u00e9voquait une \u00ab influence discernable \u00bb ; en 2007, le r\u00e9chauffement \u00e9tait jug\u00e9 \u00ab tr\u00e8s probable \u00bb d\'origine humaine (probabilit\u00e9 > 90 %) ; en 2021, il est qualifi\u00e9 de \u00ab sans \u00e9quivoque \u00bb.',
                'Le rapport AR6 \u00e9tablit que limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C n\u00e9cessite de r\u00e9duire les \u00e9missions mondiales de CO\u2082 de 45 % d\'ici 2030 par rapport au niveau de 2010, et d\'atteindre la neutralit\u00e9 carbone vers 2050. Chaque tonne de CO\u2082 \u00e9mise contribue au r\u00e9chauffement : la relation est quasi lin\u00e9aire.'
              ],
              highlight: 'Limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C exige de r\u00e9duire les \u00e9missions de 45 % d\'ici 2030 et d\'atteindre la neutralit\u00e9 carbone vers 2050.'
            },
            {
              title: 'Le budget carbone',
              paragraphs: [
                'Le GIEC a introduit la notion de budget carbone : la quantit\u00e9 totale de CO\u2082 que l\'humanit\u00e9 peut encore \u00e9mettre pour rester sous un seuil de r\u00e9chauffement donn\u00e9. Pour avoir 50 % de chances de limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C, le budget carbone restant \u00e9tait estim\u00e9 \u00e0 environ 500 gigatonnes de CO\u2082 en 2020, soit environ 12 ans d\'\u00e9missions au rythme actuel.',
                'Ce concept rend concr\u00e8te l\'urgence climatique : au rythme d\'\u00e9missions de 2024 (environ 40 GtCO\u2082/an), ce budget serait \u00e9puis\u00e9 avant 2030. Il implique que chaque ann\u00e9e de retard dans la r\u00e9duction des \u00e9missions r\u00e9duit l\'espace de man\u0153uvre futur et rend les objectifs climatiques plus difficiles \u00e0 atteindre.'
              ],
              highlight: 'Le budget carbone restant pour limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C pourrait \u00eatre \u00e9puis\u00e9 avant 2030 au rythme actuel.'
            }
          ],
          quiz: [
            { q: 'En quelle ann\u00e9e le GIEC a-t-il \u00e9t\u00e9 cr\u00e9\u00e9 ?', opts: ['1972', '1988', '1997', '2005'], correct: 1, explanation: 'Le GIEC a \u00e9t\u00e9 cr\u00e9\u00e9 en 1988 par l\'Organisation m\u00e9t\u00e9orologique mondiale (OMM) et le Programme des Nations unies pour l\'environnement (PNUE).' },
            { q: 'Combien de groupes de travail composent le GIEC ?', opts: ['2', '3', '4', '5'], correct: 1, explanation: 'Le GIEC comprend trois groupes de travail : bases physiques (I), impacts et adaptation (II), att\u00e9nuation (III).' },
            { q: 'Que d\u00e9signe le budget carbone ?', opts: ['Le co\u00fbt financier de la transition', 'La quantit\u00e9 de CO\u2082 encore \u00e9missible sous un seuil de r\u00e9chauffement', 'Le budget allou\u00e9 au GIEC', 'Les taxes carbone mondiales'], correct: 1, explanation: 'Le budget carbone est la quantit\u00e9 totale de CO\u2082 que l\'humanit\u00e9 peut encore \u00e9mettre pour rester sous un seuil donn\u00e9 de r\u00e9chauffement.' }
          ],
          definitions: [
            { term: 'GIEC', def: 'Groupe d\'experts intergouvernemental sur l\'\u00e9volution du climat, organisme onusien cr\u00e9\u00e9 en 1988 pour \u00e9valuer la science du changement climatique.' },
            { term: 'Budget carbone', def: 'Quantit\u00e9 maximale de CO\u2082 que l\'humanit\u00e9 peut encore \u00e9mettre pour maintenir le r\u00e9chauffement sous un seuil donn\u00e9 avec une probabilit\u00e9 d\u00e9finie.' },
            { term: 'Neutralit\u00e9 carbone', def: '\u00c9tat dans lequel les \u00e9missions de CO\u2082 anthropiques sont compens\u00e9es par une absorption \u00e9quivalente, r\u00e9sultant en z\u00e9ro \u00e9mission nette.' },
            { term: 'Rapport de synth\u00e8se', def: 'Document du GIEC qui int\u00e8gre les conclusions des trois groupes de travail en un texte unifi\u00e9, accessible aux d\u00e9cideurs.' },
            { term: 'Att\u00e9nuation', def: 'Ensemble des actions visant \u00e0 r\u00e9duire les \u00e9missions de GES ou \u00e0 augmenter leur absorption (par opposition \u00e0 l\'adaptation).' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le GIEC a re\u00e7u le prix Nobel de la paix en 2007, conjointement avec Al Gore, pour ses efforts de diffusion des connaissances sur le changement climatique.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le sixi\u00e8me rapport du GIEC (AR6) a \u00e9t\u00e9 r\u00e9dig\u00e9 par 234 auteurs issus de 66 pays et a analys\u00e9 plus de 14 000 publications scientifiques.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le GIEC n\'emploie aucun chercheur : tous les scientifiques qui participent \u00e0 la r\u00e9daction des rapports sont b\u00e9n\u00e9voles et continuent de travailler dans leurs institutions respectives.' }
          ]
        },
        // --- Lesson 1.4 : Les conséquences du changement climatique ---
        {
          slug: 'consequences-climatiques',
          title: 'Les cons\u00e9quences du changement climatique',
          description: 'Les impacts observ\u00e9s et pr\u00e9vus sur les \u00e9cosyst\u00e8mes, les soci\u00e9t\u00e9s et l\'\u00e9conomie.',
          intro: 'Le changement climatique affecte d\u00e9j\u00e0 tous les continents et tous les oc\u00e9ans. Ses cons\u00e9quences, multiples et interconnect\u00e9es, touchent les \u00e9cosyst\u00e8mes, la s\u00e9curit\u00e9 alimentaire, la sant\u00e9 humaine, les infrastructures et la g\u00e9opolitique. Les populations les plus vuln\u00e9rables sont souvent les plus durement frapp\u00e9es.',
          introHighlight: 'Le changement climatique est un multiplicateur de menaces qui aggrave les in\u00e9galit\u00e9s existantes.',
          intro2: '',
          sections: [
            {
              title: 'Impacts sur les \u00e9cosyst\u00e8mes',
              paragraphs: [
                'Le r\u00e9chauffement modifie profond\u00e9ment les \u00e9cosyst\u00e8mes terrestres et marins. Les aires de r\u00e9partition des esp\u00e8ces se d\u00e9placent vers les p\u00f4les et en altitude : en Europe, les esp\u00e8ces se d\u00e9placent en moyenne de 17 km par d\u00e9cennie vers le nord. Le d\u00e9calage entre les cycles biologiques (ph\u00e9nologie) perturbe les relations entre proies et pr\u00e9dateurs, pollinisateurs et plantes.',
                'Les oc\u00e9ans subissent un triple stress : r\u00e9chauffement, acidification et d\u00e9soxyg\u00e9nation. L\'acidification, caus\u00e9e par l\'absorption de CO\u2082, menace les organismes calcificateurs comme les coraux, les mollusques et certains planctons. Les r\u00e9cifs coralliens, qui abritent 25 % des esp\u00e8ces marines, subissent des \u00e9pisodes de blanchissement de plus en plus fr\u00e9quents.',
                'Les for\u00eats bor\u00e9ales et tropicales, puits de carbone essentiels, risquent de devenir des sources de carbone si le r\u00e9chauffement d\u00e9passe certains seuils. L\'Amazonie, par exemple, pourrait basculer d\'une for\u00eat tropicale dense \u00e0 une savane si la d\u00e9forestation combin\u00e9e au r\u00e9chauffement atteint un point de basculement.'
              ],
              highlight: 'Les r\u00e9cifs coralliens abritent 25 % des esp\u00e8ces marines et sont gravement menac\u00e9s par le r\u00e9chauffement et l\'acidification.'
            },
            {
              title: 'Impacts sur les soci\u00e9t\u00e9s humaines',
              paragraphs: [
                'La s\u00e9curit\u00e9 alimentaire est menac\u00e9e par les s\u00e9cheresses, les inondations et la variabilit\u00e9 accrue des pr\u00e9cipitations. Les rendements agricoles pourraient diminuer de 2 \u00e0 6 % par d\u00e9cennie dans les r\u00e9gions tropicales. Le stress hydrique affecte d\u00e9j\u00e0 plus de 2 milliards de personnes dans le monde, et ce chiffre devrait augmenter consid\u00e9rablement.',
                'La sant\u00e9 humaine est affect\u00e9e directement par les canicules (la canicule de 2023 a caus\u00e9 plus de 60 000 d\u00e9c\u00e8s en Europe) et indirectement par l\'extension des zones de transmission de maladies vectorielles comme la dengue et le paludisme. La pollution de l\'air, aggrav\u00e9e par les vagues de chaleur et les incendies de for\u00eat, tue d\u00e9j\u00e0 des millions de personnes chaque ann\u00e9e.',
                'Les migrations climatiques repr\u00e9sentent un enjeu majeur : la Banque mondiale estime que 216 millions de personnes pourraient \u00eatre d\u00e9plac\u00e9es d\'ici 2050 en raison du changement climatique, principalement en Afrique subsaharienne, en Asie du Sud et en Am\u00e9rique latine.'
              ],
              highlight: '216 millions de personnes pourraient devenir des migrants climatiques d\'ici 2050 selon la Banque mondiale.'
            },
            {
              title: 'Les points de basculement',
              paragraphs: [
                'Les scientifiques identifient plusieurs points de basculement (tipping points) : des seuils au-del\u00e0 desquels un changement climatique devient auto-entretenu et irr\u00e9versible. Parmi les plus critiques figurent l\'effondrement de la calotte glaciaire de l\'Antarctique occidental, la fonte du permafrost (qui contient environ 1 500 GtC, soit le double du carbone atmosph\u00e9rique actuel), et l\'affaiblissement de la circulation thermohaline atlantique (AMOC).',
                'Ces points de basculement pourraient d\u00e9clencher des cascades de r\u00e9troactions positives, acc\u00e9l\u00e9rant le r\u00e9chauffement bien au-del\u00e0 des projections lin\u00e9aires. Certains chercheurs estiment que plusieurs de ces seuils pourraient \u00eatre franchis d\u00e8s +1,5 \u00b0C de r\u00e9chauffement, rendant l\'objectif de l\'Accord de Paris d\'autant plus urgent.'
              ],
              highlight: 'Le permafrost contient environ 1 500 GtC, soit le double du carbone pr\u00e9sent dans l\'atmosph\u00e8re actuelle.'
            }
          ],
          quiz: [
            { q: 'Combien de personnes pourraient devenir des migrants climatiques d\'ici 2050 ?', opts: ['50 millions', '100 millions', '216 millions', '500 millions'], correct: 2, explanation: 'La Banque mondiale estime que 216 millions de personnes pourraient \u00eatre d\u00e9plac\u00e9es d\'ici 2050 en raison du changement climatique.' },
            { q: 'Qu\'est-ce qu\'un point de basculement climatique ?', opts: ['Une mesure du for\u00e7age radiatif', 'Un seuil au-del\u00e0 duquel un changement devient irr\u00e9versible', 'Un accord international', 'Un mod\u00e8le de pr\u00e9vision m\u00e9t\u00e9o'], correct: 1, explanation: 'Un point de basculement est un seuil critique au-del\u00e0 duquel un processus climatique s\'auto-entretient et devient irr\u00e9versible.' },
            { q: 'Quel est le triple stress subi par les oc\u00e9ans ?', opts: ['R\u00e9chauffement, salinisation, \u00e9vaporation', 'R\u00e9chauffement, acidification, d\u00e9soxyg\u00e9nation', 'Acidification, eutrophisation, pollution', 'R\u00e9chauffement, pollution, surp\u00eache'], correct: 1, explanation: 'Les oc\u00e9ans subissent un triple stress li\u00e9 au changement climatique : r\u00e9chauffement des eaux, acidification (absorption de CO\u2082) et d\u00e9soxyg\u00e9nation.' }
          ],
          definitions: [
            { term: 'Point de basculement', def: 'Seuil critique au-del\u00e0 duquel un syst\u00e8me climatique bascule dans un nouvel \u00e9tat de mani\u00e8re auto-entretenue et potentiellement irr\u00e9versible.' },
            { term: 'Acidification des oc\u00e9ans', def: 'Diminution du pH des eaux oc\u00e9aniques caus\u00e9e par l\'absorption de CO\u2082 atmosph\u00e9rique, mena\u00e7ant les organismes marins calcificateurs.' },
            { term: 'Permafrost', def: 'Sol gel\u00e9 en permanence depuis au moins deux ans cons\u00e9cutifs, pr\u00e9sent dans les r\u00e9gions arctiques et subarctiques, contenant d\'\u00e9normes quantit\u00e9s de carbone organique.' },
            { term: 'AMOC', def: 'Atlantic Meridional Overturning Circulation, syst\u00e8me de courants oc\u00e9aniques qui transporte la chaleur des tropiques vers l\'Europe du Nord.' },
            { term: 'Ph\u00e9nologie', def: '\u00c9tude des variations saisonni\u00e8res des ph\u00e9nom\u00e8nes biologiques (floraison, migration, reproduction) en fonction du climat.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Si tout le permafrost fondait, il lib\u00e9rerait suffisamment de carbone pour augmenter la temp\u00e9rature mondiale de plusieurs degr\u00e9s suppl\u00e9mentaires.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le pH des oc\u00e9ans a diminu\u00e9 de 0,1 unit\u00e9 depuis la r\u00e9volution industrielle, ce qui repr\u00e9sente une augmentation de 26 % de l\'acidit\u00e9.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La Grande Barri\u00e8re de corail en Australie a subi six \u00e9pisodes majeurs de blanchissement depuis 1998, dont trois en seulement cinq ans (2016, 2017, 2020).' }
          ]
        },
        // --- Lesson 1.5 : Les accords de Paris ---
        {
          slug: 'accords-de-paris',
          title: 'L\'Accord de Paris et la diplomatie climatique',
          description: 'Les n\u00e9gociations internationales pour le climat, de Kyoto \u00e0 Paris.',
          intro: 'L\'Accord de Paris, adopt\u00e9 en d\u00e9cembre 2015 lors de la COP21, constitue le premier trait\u00e9 universel sur le climat. Sign\u00e9 par 196 parties, il vise \u00e0 limiter le r\u00e9chauffement bien en dessous de 2 \u00b0C, et id\u00e9alement \u00e0 1,5 \u00b0C, par rapport \u00e0 l\'\u00e8re pr\u00e9industrielle.',
          introHighlight: 'L\'Accord de Paris est le premier trait\u00e9 climatique universel, sign\u00e9 par la quasi-totalit\u00e9 des nations du monde.',
          intro2: '',
          sections: [
            {
              title: 'L\'histoire de la diplomatie climatique',
              paragraphs: [
                'La prise de conscience internationale du changement climatique remonte au Sommet de la Terre de Rio en 1992, qui a donn\u00e9 naissance \u00e0 la Convention-cadre des Nations unies sur les changements climatiques (CCNUCC). Cette convention a \u00e9tabli le principe de responsabilit\u00e9s communes mais diff\u00e9renci\u00e9es entre pays d\u00e9velopp\u00e9s et pays en d\u00e9veloppement.',
                'Le Protocole de Kyoto (1997) a \u00e9t\u00e9 le premier trait\u00e9 contraignant imposant des r\u00e9ductions d\'\u00e9missions, mais uniquement aux pays d\u00e9velopp\u00e9s. Les \u00c9tats-Unis ne l\'ont jamais ratifi\u00e9 et le Canada s\'en est retir\u00e9. L\'\u00e9chec de la COP15 de Copenhague en 2009, qui n\'a pas abouti \u00e0 un accord contraignant, a marqu\u00e9 un tournant dans l\'approche des n\u00e9gociations.',
                'L\'Accord de Paris a rompu avec l\'approche descendante de Kyoto en adoptant un m\u00e9canisme de contributions nationales volontaires (NDC), o\u00f9 chaque pays fixe ses propres objectifs de r\u00e9duction, r\u00e9vis\u00e9s tous les cinq ans avec une ambition croissante.'
              ],
              highlight: 'L\'Accord de Paris repose sur des contributions nationales volontaires (NDC), r\u00e9vis\u00e9es tous les cinq ans.'
            },
            {
              title: 'Le contenu de l\'Accord de Paris',
              paragraphs: [
                'L\'Accord de Paris fixe trois objectifs principaux : limiter le r\u00e9chauffement bien en dessous de 2 \u00b0C et poursuivre les efforts pour le limiter \u00e0 1,5 \u00b0C ; renforcer les capacit\u00e9s d\'adaptation aux effets du changement climatique ; rendre les flux financiers compatibles avec un d\u00e9veloppement sobre en carbone et r\u00e9silient.',
                'Le m\u00e9canisme de transparence renforc\u00e9 oblige les pays \u00e0 rendre compte r\u00e9guli\u00e8rement de leurs \u00e9missions et de leurs progr\u00e8s. Un bilan mondial (Global Stocktake) est r\u00e9alis\u00e9 tous les cinq ans pour \u00e9valuer collectivement l\'avancement vers les objectifs. Le premier bilan, achev\u00e9 en 2023 lors de la COP28, a conclu que le monde n\'\u00e9tait pas sur la bonne trajectoire.',
                'Les pays d\u00e9velopp\u00e9s se sont engag\u00e9s \u00e0 mobiliser 100 milliards de dollars par an pour financer l\'action climatique dans les pays en d\u00e9veloppement, un objectif qui n\'a \u00e9t\u00e9 atteint qu\'en 2022 avec deux ans de retard.'
              ],
              highlight: 'Le premier bilan mondial en 2023 a conclu que le monde n\'\u00e9tait pas sur la bonne trajectoire pour atteindre les objectifs de Paris.'
            },
            {
              title: 'Les d\u00e9fis et les limites',
              paragraphs: [
                'La principale faiblesse de l\'Accord de Paris r\u00e9side dans le caract\u00e8re non contraignant des NDC : il n\'existe aucun m\u00e9canisme de sanction en cas de non-respect des engagements. Les NDC actuelles, m\u00eame si elles \u00e9taient pleinement mises en \u0153uvre, conduiraient \u00e0 un r\u00e9chauffement d\'environ 2,5 \u00e0 2,9 \u00b0C d\'ici 2100.',
                'La g\u00e9opolitique influence fortement les n\u00e9gociations climatiques. Le retrait temporaire des \u00c9tats-Unis sous l\'administration Trump (2017-2021) a affaibli la dynamique. Les tensions entre pays d\u00e9velopp\u00e9s et pays en d\u00e9veloppement sur la question du financement et de la justice climatique restent un frein majeur \u00e0 l\'ambition collective.'
              ],
              highlight: 'Les engagements actuels m\u00e8neraient \u00e0 un r\u00e9chauffement de 2,5 \u00e0 2,9 \u00b0C, loin de l\'objectif de 1,5 \u00b0C.'
            }
          ],
          quiz: [
            { q: 'En quelle ann\u00e9e l\'Accord de Paris a-t-il \u00e9t\u00e9 adopt\u00e9 ?', opts: ['1997', '2009', '2015', '2020'], correct: 2, explanation: 'L\'Accord de Paris a \u00e9t\u00e9 adopt\u00e9 le 12 d\u00e9cembre 2015 lors de la COP21 \u00e0 Paris.' },
            { q: 'Quel est l\'objectif de temp\u00e9rature le plus ambitieux de l\'Accord de Paris ?', opts: ['+1,0 \u00b0C', '+1,5 \u00b0C', '+2,0 \u00b0C', '+2,5 \u00b0C'], correct: 1, explanation: 'L\'Accord vise \u00e0 limiter le r\u00e9chauffement bien en dessous de 2 \u00b0C et \u00e0 poursuivre les efforts pour le limiter \u00e0 1,5 \u00b0C.' },
            { q: 'Que d\u00e9signe une NDC ?', opts: ['Un mod\u00e8le climatique', 'Une contribution nationale volontaire', 'Un fonds de financement', 'Un protocole de mesure'], correct: 1, explanation: 'Une NDC (Nationally Determined Contribution) est l\'engagement volontaire de chaque pays en mati\u00e8re de r\u00e9duction des \u00e9missions de GES.' }
          ],
          definitions: [
            { term: 'Accord de Paris', def: 'Trait\u00e9 international adopt\u00e9 en 2015 lors de la COP21, visant \u00e0 limiter le r\u00e9chauffement plan\u00e9taire bien en dessous de 2 \u00b0C.' },
            { term: 'NDC', def: 'Nationally Determined Contribution, engagement volontaire de chaque pays signataire en mati\u00e8re de r\u00e9duction des \u00e9missions de GES.' },
            { term: 'COP', def: 'Conference of the Parties, conf\u00e9rence annuelle des pays signataires de la CCNUCC o\u00f9 se n\u00e9gocient les accords climatiques.' },
            { term: 'CCNUCC', def: 'Convention-cadre des Nations unies sur les changements climatiques, adopt\u00e9e en 1992 au Sommet de la Terre de Rio.' },
            { term: 'Bilan mondial', def: 'Global Stocktake, \u00e9valuation collective r\u00e9alis\u00e9e tous les cinq ans pour mesurer les progr\u00e8s vers les objectifs de l\'Accord de Paris.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'L\'Accord de Paris a \u00e9t\u00e9 adopt\u00e9 par 196 parties, soit la quasi-totalit\u00e9 des pays du monde, un consensus in\u00e9dit dans l\'histoire de la diplomatie environnementale.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Protocole de Kyoto ne couvrait que 12 % des \u00e9missions mondiales, alors que l\'Accord de Paris couvre th\u00e9oriquement 100 % des pays \u00e9metteurs.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La France a inscrit l\'objectif de neutralit\u00e9 carbone d\'ici 2050 dans sa loi \u00c9nergie-Climat de 2019, conform\u00e9ment \u00e0 l\'Accord de Paris.' }
          ]
        }
      ]
    },
    // ==================== HUB 2 : Pollution ====================
    {
      slug: 'pollution',
      title: 'Pollution et polluants',
      description: 'Les diff\u00e9rentes formes de pollution, leurs sources, leurs m\u00e9canismes et leurs impacts sur la sant\u00e9 et l\'environnement.',
      lessons: [
        // --- Lesson 2.1 : Pollution de l'air ---
        {
          slug: 'pollution-air',
          title: 'La pollution atmosph\u00e9rique',
          description: 'Les polluants de l\'air, leurs sources et leurs effets sur la sant\u00e9 et le climat.',
          intro: 'La pollution de l\'air est la principale menace environnementale pour la sant\u00e9 humaine. L\'Organisation mondiale de la sant\u00e9 (OMS) estime que 99 % de la population mondiale respire un air qui d\u00e9passe les seuils recommand\u00e9s. Chaque ann\u00e9e, la pollution atmosph\u00e9rique cause environ 7 millions de d\u00e9c\u00e8s pr\u00e9matur\u00e9s dans le monde.',
          introHighlight: 'La pollution de l\'air cause 7 millions de d\u00e9c\u00e8s pr\u00e9matur\u00e9s par an, ce qui en fait le premier risque environnemental pour la sant\u00e9.',
          intro2: '',
          sections: [
            {
              title: 'Les principaux polluants atmosph\u00e9riques',
              paragraphs: [
                'Les particules fines (PM2.5 et PM10) sont les polluants les plus nocifs pour la sant\u00e9. Les PM2.5, dont le diam\u00e8tre est inf\u00e9rieur \u00e0 2,5 microm\u00e8tres, p\u00e9n\u00e8trent profond\u00e9ment dans les poumons et passent dans le sang, provoquant maladies cardiovasculaires, cancers du poumon et affections respiratoires. Leurs sources principales sont la combustion des \u00e9nergies fossiles, le chauffage au bois et l\'agriculture.',
                'Le dioxyde d\'azote (NO\u2082), \u00e9mis principalement par les v\u00e9hicules diesel et les centrales thermiques, irrite les voies respiratoires et contribue \u00e0 la formation d\'ozone troposph\u00e9rique. L\'ozone (O\u2083), polluant secondaire form\u00e9 par r\u00e9action photochimique entre les oxydes d\'azote (NOx) et les compos\u00e9s organiques volatils (COV) sous l\'effet du rayonnement solaire, provoque des inflammations pulmonaires et endommage la v\u00e9g\u00e9tation.',
                'Le dioxyde de soufre (SO\u2082), issu de la combustion du charbon et du p\u00e9trole soufr\u00e9, cause des pluies acides qui d\u00e9gradent les for\u00eats, acidifient les lacs et corrodent les b\u00e2timents. Gr\u00e2ce aux r\u00e9glementations, les \u00e9missions de SO\u2082 ont consid\u00e9rablement diminu\u00e9 en Europe et en Am\u00e9rique du Nord depuis les ann\u00e9es 1980.'
              ],
              highlight: 'Les PM2.5 p\u00e9n\u00e8trent dans le sang et sont responsables de la majorit\u00e9 des d\u00e9c\u00e8s li\u00e9s \u00e0 la pollution de l\'air.'
            },
            {
              title: 'La pollution int\u00e9rieure',
              paragraphs: [
                'La pollution de l\'air int\u00e9rieur est souvent n\u00e9glig\u00e9e alors qu\'elle repr\u00e9sente un risque majeur. Dans les pays en d\u00e9veloppement, la cuisson au bois, au charbon ou aux r\u00e9sidus agricoles dans des habitations mal ventil\u00e9es expose pr\u00e8s de 2,4 milliards de personnes \u00e0 des niveaux de pollution extr\u00eames, causant environ 3,2 millions de d\u00e9c\u00e8s pr\u00e9matur\u00e9s par an.',
                'Dans les pays d\u00e9velopp\u00e9s, les sources de pollution int\u00e9rieure incluent le formald\u00e9hyde (meubles, rev\u00eatements), le radon (gaz radioactif naturel), les COV (\u00e9mis par les peintures, les produits m\u00e9nagers, les mat\u00e9riaux de construction) et les moisissures. Les concentrations de certains polluants peuvent \u00eatre 2 \u00e0 5 fois plus \u00e9lev\u00e9es \u00e0 l\'int\u00e9rieur qu\'\u00e0 l\'ext\u00e9rieur.'
              ],
              highlight: 'La pollution int\u00e9rieure li\u00e9e \u00e0 la cuisson au bois ou au charbon cause 3,2 millions de d\u00e9c\u00e8s par an dans le monde.'
            },
            {
              title: 'R\u00e9glementation et am\u00e9lioration de la qualit\u00e9 de l\'air',
              paragraphs: [
                'Les r\u00e9glementations sur la qualit\u00e9 de l\'air ont permis des progr\u00e8s significatifs dans les pays d\u00e9velopp\u00e9s. Le Clean Air Act am\u00e9ricain (1970) et les directives europ\u00e9ennes ont r\u00e9duit les \u00e9missions de SO\u2082 de plus de 80 % depuis les ann\u00e9es 1990 en Europe. Les normes Euro pour les v\u00e9hicules ont consid\u00e9rablement r\u00e9duit les \u00e9missions de NOx et de particules.',
                'Cependant, les progr\u00e8s sont in\u00e9gaux. L\'Asie du Sud et l\'Afrique subsaharienne connaissent des niveaux de pollution en hausse, li\u00e9s \u00e0 l\'industrialisation rapide et \u00e0 l\'urbanisation. New Delhi, l\'une des villes les plus pollu\u00e9es du monde, enregistre r\u00e9guli\u00e8rement des concentrations de PM2.5 d\u00e9passant 10 fois le seuil recommand\u00e9 par l\'OMS.'
              ],
              highlight: 'Les \u00e9missions de SO\u2082 ont diminu\u00e9 de plus de 80 % en Europe depuis les ann\u00e9es 1990 gr\u00e2ce aux r\u00e9glementations.'
            }
          ],
          quiz: [
            { q: 'Combien de d\u00e9c\u00e8s pr\u00e9matur\u00e9s la pollution de l\'air cause-t-elle chaque ann\u00e9e ?', opts: ['1 million', '3 millions', '7 millions', '15 millions'], correct: 2, explanation: 'L\'OMS estime que la pollution atmosph\u00e9rique (ext\u00e9rieure et int\u00e9rieure) cause environ 7 millions de d\u00e9c\u00e8s pr\u00e9matur\u00e9s par an dans le monde.' },
            { q: 'Quel polluant est le plus dangereux pour la sant\u00e9 humaine ?', opts: ['Le CO\u2082', 'Les PM2.5', 'L\'ozone stratosph\u00e9rique', 'Le SO\u2082'], correct: 1, explanation: 'Les particules fines PM2.5 sont les plus nocives car elles p\u00e9n\u00e8trent profond\u00e9ment dans les poumons et passent dans le sang.' },
            { q: 'Qu\'est-ce que l\'ozone troposph\u00e9rique ?', opts: ['Un gaz protecteur naturel', 'Un polluant secondaire form\u00e9 par r\u00e9action photochimique', 'Un gaz \u00e9mis par les volcans', 'Un r\u00e9frig\u00e9rant industriel'], correct: 1, explanation: 'L\'ozone troposph\u00e9rique est un polluant secondaire form\u00e9 par la r\u00e9action des NOx et des COV sous l\'effet du soleil.' }
          ],
          definitions: [
            { term: 'PM2.5', def: 'Particules fines en suspension dans l\'air d\'un diam\u00e8tre inf\u00e9rieur \u00e0 2,5 microm\u00e8tres, capables de p\u00e9n\u00e9trer profond\u00e9ment dans les poumons et de passer dans le sang.' },
            { term: 'Ozone troposph\u00e9rique', def: 'Polluant secondaire form\u00e9 dans la basse atmosph\u00e8re par r\u00e9action photochimique entre les oxydes d\'azote et les compos\u00e9s organiques volatils.' },
            { term: 'COV', def: 'Compos\u00e9s organiques volatils, substances chimiques carboniques qui s\'\u00e9vaporent facilement \u00e0 temp\u00e9rature ambiante et participent \u00e0 la formation d\'ozone.' },
            { term: 'Pluies acides', def: 'Pr\u00e9cipitations dont le pH est anormalement bas, caus\u00e9es par la dissolution de SO\u2082 et NOx dans l\'eau atmosph\u00e9rique.' },
            { term: 'Indice de qualit\u00e9 de l\'air (IQA)', def: '\u00c9chelle normalis\u00e9e mesurant la concentration de polluants atmosph\u00e9riques et le risque associ\u00e9 pour la sant\u00e9.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Grand Smog de Londres en 1952 a tu\u00e9 environ 12 000 personnes en quelques jours, conduisant \u00e0 l\'adoption du Clean Air Act britannique en 1956.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un seul trajet en voiture diesel \u00e9met plus de particules fines que 1 000 cigarettes allum\u00e9es simultan\u00e9ment.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La pollution de l\'air r\u00e9duit l\'esp\u00e9rance de vie moyenne de 2,2 ans \u00e0 l\'\u00e9chelle mondiale, davantage que le tabac, l\'alcool ou le sida.' }
          ]
        },
        // --- Lesson 2.2 : Pollution de l'eau ---
        {
          slug: 'pollution-eau',
          title: 'La pollution de l\'eau',
          description: 'Les sources de contamination des eaux douces et marines et leurs cons\u00e9quences.',
          intro: 'L\'eau douce ne repr\u00e9sente que 2,5 % de l\'eau terrestre, et seulement 0,3 % est directement accessible en surface. La pollution de cette ressource vitale, par les activit\u00e9s agricoles, industrielles et domestiques, menace \u00e0 la fois les \u00e9cosyst\u00e8mes aquatiques et la sant\u00e9 de milliards de personnes.',
          introHighlight: 'Deux milliards de personnes dans le monde n\'ont pas acc\u00e8s \u00e0 une eau potable g\u00e9r\u00e9e de mani\u00e8re s\u00fbre.',
          intro2: '',
          sections: [
            {
              title: 'Les sources de pollution aquatique',
              paragraphs: [
                'L\'agriculture est la premi\u00e8re source de pollution diffuse des eaux. Les engrais azot\u00e9s et phosphat\u00e9s, utilis\u00e9s massivement depuis la r\u00e9volution verte, ruissellent vers les cours d\'eau et provoquent l\'eutrophisation : une prolif\u00e9ration excessive d\'algues qui consomment l\'oxyg\u00e8ne dissous et cr\u00e9ent des zones mortes. On d\u00e9nombre plus de 500 zones mortes c\u00f4ti\u00e8res dans le monde, dont la plus grande se situe dans le golfe du Mexique.',
                'Les rejets industriels contiennent des m\u00e9taux lourds (mercure, plomb, cadmium), des solvants organiques et des substances chimiques persistantes. Bien que r\u00e9glement\u00e9s dans les pays d\u00e9velopp\u00e9s, ces rejets restent une menace majeure dans les pays en voie d\'industrialisation. En Chine, environ 80 % des eaux souterraines sont impropres \u00e0 la consommation en raison de la contamination industrielle et agricole.',
                'Les eaux us\u00e9es domestiques constituent une source majeure de pollution biologique. Environ 80 % des eaux us\u00e9es mondiales sont rejet\u00e9es sans traitement ad\u00e9quat, d\u00e9versant pathog\u00e8nes, nutriments et r\u00e9sidus m\u00e9dicamenteux dans les milieux aquatiques.'
              ],
              highlight: 'On d\u00e9nombre plus de 500 zones mortes c\u00f4ti\u00e8res dans le monde, caus\u00e9es principalement par l\'eutrophisation agricole.'
            },
            {
              title: 'Les polluants \u00e9mergents',
              paragraphs: [
                'Les micropolluants constituent une menace croissante et encore mal ma\u00eetris\u00e9e. Les r\u00e9sidus de m\u00e9dicaments (antibiotiques, hormones, antid\u00e9presseurs), les perturbateurs endocriniens (bisph\u00e9nol A, phtalates) et les pesticides se retrouvent dans les cours d\'eau \u00e0 des concentrations infimes mais biologiquement actives.',
                'Les substances perfluoroalkyl\u00e9es (PFAS), surnomm\u00e9es \u00ab polluants \u00e9ternels \u00bb, sont particuli\u00e8rement pr\u00e9occupantes. Utilis\u00e9es dans les rev\u00eatements antiadh\u00e9sifs, les mousses anti-incendie et les textiles imperm\u00e9ables, elles ne se d\u00e9gradent pas dans l\'environnement et s\'accumulent dans les organismes vivants. Des PFAS ont \u00e9t\u00e9 d\u00e9tect\u00e9s dans l\'eau potable de millions de foyers en Europe et aux \u00c9tats-Unis.'
              ],
              highlight: 'Les PFAS, surnomm\u00e9s \u00ab polluants \u00e9ternels \u00bb, ne se d\u00e9gradent pas dans l\'environnement et contaminent l\'eau potable.'
            },
            {
              title: 'La pollution des oc\u00e9ans',
              paragraphs: [
                'Les oc\u00e9ans re\u00e7oivent environ 80 % de la pollution marine depuis les sources terrestres. Les mar\u00e9es noires, bien que spectaculaires, ne repr\u00e9sentent qu\'une fraction de la pollution marine : les rejets chroniques de l\'industrie, de l\'agriculture et des villes sont bien plus d\u00e9vastateurs.',
                'Les nutriments exc\u00e9dentaires transport\u00e9s par les fleuves cr\u00e9ent des zones d\'hypoxie c\u00f4ti\u00e8re. Les substances toxiques persistantes (PCB, dioxines, DDT) s\'accumulent dans la cha\u00eene alimentaire marine par bioaccumulation, atteignant des concentrations dangereuses chez les pr\u00e9dateurs sup\u00e9rieurs comme les orques et les thons.'
              ],
              highlight: '80 % de la pollution marine provient de sources terrestres transport\u00e9es par les fleuves et le ruissellement.'
            }
          ],
          quiz: [
            { q: 'Quelle est la principale source de pollution diffuse des eaux ?', opts: ['L\'industrie chimique', 'L\'agriculture', 'Les eaux us\u00e9es domestiques', 'Les mar\u00e9es noires'], correct: 1, explanation: 'L\'agriculture est la premi\u00e8re source de pollution diffuse des eaux, \u00e0 cause du ruissellement des engrais et des pesticides.' },
            { q: 'Que provoque l\'eutrophisation ?', opts: ['L\'\u00e9vaporation des lacs', 'La prolif\u00e9ration d\'algues et la cr\u00e9ation de zones mortes', 'L\'augmentation de la salinit\u00e9', 'La p\u00e9trification des s\u00e9diments'], correct: 1, explanation: 'L\'eutrophisation provoque une prolif\u00e9ration excessive d\'algues qui consomment l\'oxyg\u00e8ne dissous, cr\u00e9ant des zones mortes.' },
            { q: 'Pourquoi les PFAS sont-ils appel\u00e9s \u00ab polluants \u00e9ternels \u00bb ?', opts: ['Ils sont tr\u00e8s co\u00fbteux', 'Ils ne se d\u00e9gradent pas dans l\'environnement', 'Ils sont radioactifs', 'Ils brillent dans le noir'], correct: 1, explanation: 'Les PFAS ne se d\u00e9gradent pas naturellement dans l\'environnement en raison de la force exceptionnelle de la liaison carbone-fluor.' }
          ],
          definitions: [
            { term: 'Eutrophisation', def: 'Enrichissement excessif d\'un milieu aquatique en nutriments (azote, phosphore), provoquant une prolif\u00e9ration d\'algues et une d\u00e9pl\u00e9tion en oxyg\u00e8ne.' },
            { term: 'Zone morte', def: 'Zone aquatique o\u00f9 la concentration en oxyg\u00e8ne dissous est trop faible pour supporter la vie marine, g\u00e9n\u00e9ralement caus\u00e9e par l\'eutrophisation.' },
            { term: 'PFAS', def: 'Substances perfluoroalkyl\u00e9es, famille de compos\u00e9s chimiques synth\u00e9tiques extr\u00eamement persistants dans l\'environnement, utilis\u00e9s pour leurs propri\u00e9t\u00e9s antiadh\u00e9sives et hydrophobes.' },
            { term: 'Bioaccumulation', def: 'Processus par lequel une substance chimique s\'accumule progressivement dans un organisme vivant \u00e0 une concentration sup\u00e9rieure \u00e0 celle du milieu environnant.' },
            { term: 'Perturbateur endocrinien', def: 'Substance chimique capable d\'interf\u00e9rer avec le syst\u00e8me hormonal des organismes vivants, m\u00eame \u00e0 tr\u00e8s faibles doses.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le fleuve Gange, sacr\u00e9 pour les hindous, est l\'un des fleuves les plus pollu\u00e9s du monde : il re\u00e7oit chaque jour environ 1,4 milliard de litres d\'eaux us\u00e9es non trait\u00e9es.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les stations d\'\u00e9puration classiques n\'\u00e9liminent pas les r\u00e9sidus m\u00e9dicamenteux : des traces d\'antid\u00e9presseurs, de contraceptifs et d\'antibiotiques se retrouvent dans l\'eau du robinet.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La catastrophe de Minamata au Japon (1956) a r\u00e9v\u00e9l\u00e9 les dangers du mercure dans l\'eau : des milliers de personnes ont \u00e9t\u00e9 empoisonn\u00e9es par la consommation de poissons contamin\u00e9s.' }
          ]
        },
        // --- Lesson 2.3 : Pollution des sols ---
        {
          slug: 'pollution-sols',
          title: 'La pollution des sols',
          description: 'La contamination des sols par les polluants agricoles, industriels et les d\u00e9chets.',
          intro: 'Le sol est une ressource non renouvelable \u00e0 l\'\u00e9chelle humaine : la formation d\'un centim\u00e8tre de sol fertile prend entre 100 et 1 000 ans. Pourtant, l\'activit\u00e9 humaine d\u00e9grade massivement les sols par la contamination chimique, l\'agriculture intensive et l\'artificialisation.',
          introHighlight: 'Un tiers des sols mondiaux sont d\u00e9grad\u00e9s, et la formation d\'un centim\u00e8tre de sol prend plusieurs si\u00e8cles.',
          intro2: '',
          sections: [
            {
              title: 'Les sources de contamination',
              paragraphs: [
                'L\'agriculture intensive utilise environ 4,2 millions de tonnes de pesticides par an dans le monde. Ces mol\u00e9cules, con\u00e7ues pour tuer des organismes vivants, persistent dans les sols pendant des mois \u00e0 des ann\u00e9es. Le DDT, interdit depuis les ann\u00e9es 1970 dans la plupart des pays, est encore d\u00e9tectable dans les sols d\u00e9cennies plus tard. Les n\u00e9onicotino\u00efdes, largement utilis\u00e9s depuis les ann\u00e9es 1990, d\u00e9ciment les populations de pollinisateurs.',
                'Les sites industriels abandonn\u00e9s (friches industrielles) repr\u00e9sentent des foyers de pollution persistante. En France, on d\u00e9nombre plus de 7 000 sites pollu\u00e9s recens\u00e9s dans la base de donn\u00e9es BASOL. Les contaminants typiques incluent les hydrocarbures, les m\u00e9taux lourds (plomb, chrome, zinc), les solvants chlor\u00e9s et l\'amiante.',
                'L\'\u00e9pandage de boues d\'\u00e9puration et l\'utilisation de composts contamin\u00e9s introduisent des m\u00e9taux lourds, des microplastiques et des r\u00e9sidus m\u00e9dicamenteux dans les sols agricoles, cr\u00e9ant une contamination diffuse difficile \u00e0 rem\u00e9dier.'
              ],
              highlight: '4,2 millions de tonnes de pesticides sont r\u00e9pandues chaque ann\u00e9e dans le monde, contaminant durablement les sols.'
            },
            {
              title: 'Les cons\u00e9quences de la d\u00e9gradation des sols',
              paragraphs: [
                'La perte de mati\u00e8re organique et la d\u00e9gradation biologique des sols r\u00e9duisent leur fertilit\u00e9, leur capacit\u00e9 de r\u00e9tention d\'eau et leur r\u00f4le de puits de carbone. Les sols sains stockent environ 2 500 gigatonnes de carbone, soit trois fois plus que l\'atmosph\u00e8re. Leur d\u00e9gradation lib\u00e8re ce carbone et amplifie le changement climatique.',
                'La contamination des sols se transf\u00e8re aux cultures et donc \u00e0 l\'alimentation humaine. Le cadmium, pr\u00e9sent dans les engrais phosphat\u00e9s, s\'accumule dans les c\u00e9r\u00e9ales et les l\u00e9gumes. Le plomb, h\u00e9ritage de l\'essence au plomb et de l\'industrie, contamine les jardins potagers urbains et les zones proches des anciennes fonderies.'
              ],
              highlight: 'Les sols sains stockent 2 500 gigatonnes de carbone, soit trois fois plus que l\'atmosph\u00e8re.'
            },
            {
              title: 'La rem\u00e9diation et la pr\u00e9servation',
              paragraphs: [
                'La d\u00e9pollution des sols contamin\u00e9s est co\u00fbteuse et techniquement complexe. Les techniques incluent l\'excavation et le traitement hors site, le lavage des sols, la d\u00e9gradation biologique (bior\u00e9m\u00e9diation) et la phytorem\u00e9diation, qui utilise des plantes capables d\'absorber et de concentrer les polluants dans leurs tissus.',
                'La pr\u00e9vention reste la strat\u00e9gie la plus efficace. La r\u00e9duction de l\'usage des pesticides, la rotation des cultures, le maintien de la couverture v\u00e9g\u00e9tale, l\'agroforesterie et l\'agriculture biologique sont autant de pratiques qui pr\u00e9servent la sant\u00e9 des sols. L\'Union europ\u00e9enne a fix\u00e9 l\'objectif de r\u00e9duire de 50 % l\'usage des pesticides d\'ici 2030.'
              ],
              highlight: 'La phytorem\u00e9diation utilise des plantes pour extraire les polluants des sols contamin\u00e9s.'
            }
          ],
          quiz: [
            { q: 'Combien de temps faut-il pour former un centim\u00e8tre de sol ?', opts: ['1 \u00e0 5 ans', '10 \u00e0 50 ans', '100 \u00e0 1 000 ans', '10 000 ans'], correct: 2, explanation: 'La p\u00e9dog\u00e9n\u00e8se est un processus tr\u00e8s lent : il faut entre 100 et 1 000 ans pour former un centim\u00e8tre de sol fertile.' },
            { q: 'Qu\'est-ce que la phytorem\u00e9diation ?', opts: ['La d\u00e9pollution par des bact\u00e9ries', 'La d\u00e9pollution par des plantes', 'La d\u00e9pollution par excavation', 'La d\u00e9pollution par l\'eau'], correct: 1, explanation: 'La phytorem\u00e9diation utilise des plantes capables d\'absorber et de concentrer les polluants du sol dans leurs tissus.' },
            { q: 'Combien de carbone les sols stockent-ils ?', opts: ['500 GtC', '1 500 GtC', '2 500 GtC', '5 000 GtC'], correct: 2, explanation: 'Les sols sains stockent environ 2 500 gigatonnes de carbone, soit trois fois plus que l\'atmosph\u00e8re terrestre.' }
          ],
          definitions: [
            { term: 'P\u00e9dog\u00e9n\u00e8se', def: 'Processus naturel de formation des sols \u00e0 partir de la roche m\u00e8re, sous l\'action du climat, des organismes vivants et du temps.' },
            { term: 'Phytorem\u00e9diation', def: 'Technique de d\u00e9pollution utilisant des plantes pour extraire, d\u00e9grader ou stabiliser les contaminants pr\u00e9sents dans les sols ou les eaux.' },
            { term: 'Bior\u00e9m\u00e9diation', def: 'Utilisation de micro-organismes (bact\u00e9ries, champignons) pour d\u00e9grader les polluants dans les sols ou les eaux contamin\u00e9s.' },
            { term: 'N\u00e9onicotino\u00efde', def: 'Classe d\'insecticides syst\u00e9miques agissant sur le syst\u00e8me nerveux des insectes, mis en cause dans le d\u00e9clin des pollinisateurs.' },
            { term: 'Artificialisation des sols', def: 'Transformation de sols naturels ou agricoles en surfaces imperm\u00e9abilis\u00e9es (b\u00e2timents, routes, parkings), supprimant d\u00e9finitivement leurs fonctions \u00e9cologiques.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Une cuiller\u00e9e de sol fertile contient plus de micro-organismes qu\'il n\'y a d\'humains sur Terre.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le tournesol est utilis\u00e9 en phytorem\u00e9diation : il a \u00e9t\u00e9 plant\u00e9 autour de Tchernobyl et Fukushima pour extraire les \u00e9l\u00e9ments radioactifs du sol.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'En France, l\'\u00e9quivalent d\'un d\u00e9partement de terres agricoles est artificialis\u00e9 tous les dix ans, soit environ 20 000 \u00e0 30 000 hectares par an.' }
          ]
        },
        // --- Lesson 2.4 : Pollution plastique ---
        {
          slug: 'pollution-plastique',
          title: 'La pollution plastique',
          description: 'L\'invasion des plastiques dans l\'environnement, des macro-d\u00e9chets aux microplastiques.',
          intro: 'Depuis 1950, l\'humanit\u00e9 a produit environ 10 milliards de tonnes de plastique, dont seulement 9 % ont \u00e9t\u00e9 recycl\u00e9s. Le reste a \u00e9t\u00e9 incin\u00e9r\u00e9 (12 %) ou accumul\u00e9 dans les d\u00e9charges et l\'environnement (79 %). Le plastique, mat\u00e9riau quasi indestructible, contamine d\u00e9sormais tous les milieux naturels, des fonds oc\u00e9aniques au sommet de l\'Everest.',
          introHighlight: '79 % de tout le plastique produit depuis 1950 s\'est accumul\u00e9 dans les d\u00e9charges ou l\'environnement.',
          intro2: '',
          sections: [
            {
              title: 'L\'ampleur de la pollution plastique',
              paragraphs: [
                'La production mondiale de plastique a atteint environ 400 millions de tonnes par an en 2024, et pourrait doubler d\'ici 2050 si les tendances actuelles se poursuivent. Environ 8 \u00e0 12 millions de tonnes de plastique finissent dans les oc\u00e9ans chaque ann\u00e9e, soit l\'\u00e9quivalent d\'un camion poubelle d\u00e9vers\u00e9 toutes les minutes.',
                'Cinq grands vortex de d\u00e9chets se sont form\u00e9s dans les oc\u00e9ans, pi\u00e9g\u00e9s par les courants circulaires (gyres). Le plus c\u00e9l\u00e8bre, le Great Pacific Garbage Patch, couvre une surface estim\u00e9e \u00e0 1,6 million de km\u00b2, soit trois fois la France. Contrairement \u00e0 l\'image populaire, il ne s\'agit pas d\'une \u00eele de d\u00e9chets visible mais d\'une soupe de microplastiques en suspension.',
                'Le plastique a \u00e9t\u00e9 d\u00e9tect\u00e9 dans les lieux les plus recul\u00e9s : dans les glaces de l\'Arctique, dans la fosse des Mariannes \u00e0 11 000 m\u00e8tres de profondeur, dans la neige des Alpes et m\u00eame dans l\'air que nous respirons.'
              ],
              highlight: 'Le Great Pacific Garbage Patch couvre 1,6 million de km\u00b2, soit trois fois la superficie de la France.'
            },
            {
              title: 'Les microplastiques',
              paragraphs: [
                'Les microplastiques (fragments inf\u00e9rieurs \u00e0 5 mm) et les nanoplastiques (inf\u00e9rieurs \u00e0 1 \u03bcm) constituent la forme la plus insidieuse de pollution plastique. Ils proviennent de la d\u00e9gradation des objets en plastique, de l\'usure des pneus, du lavage des textiles synth\u00e9tiques et des microbilles utilis\u00e9es dans les cosm\u00e9tiques.',
                'Les microplastiques ont \u00e9t\u00e9 retrouv\u00e9s dans le sang humain, le placenta, les poumons et le lait maternel. Une \u00e9tude de 2019 estime qu\'une personne ingère en moyenne 5 grammes de microplastiques par semaine, soit l\'\u00e9quivalent d\'une carte de cr\u00e9dit. Leurs effets sur la sant\u00e9 humaine sont encore mal connus mais pourraient inclure des perturbations endocriniennes et une inflammation chronique.'
              ],
              highlight: 'Une personne ing\u00e8re en moyenne 5 grammes de microplastiques par semaine, soit le poids d\'une carte de cr\u00e9dit.'
            },
            {
              title: 'Les solutions face \u00e0 la pollution plastique',
              paragraphs: [
                'Le trait\u00e9 mondial sur la pollution plastique, en cours de n\u00e9gociation sous l\'\u00e9gide de l\'ONU depuis 2022, vise \u00e0 \u00e9tablir des r\u00e8gles contraignantes pour r\u00e9duire la production et am\u00e9liorer la gestion des d\u00e9chets plastiques. L\'Union europ\u00e9enne a d\u00e9j\u00e0 interdit plusieurs produits en plastique \u00e0 usage unique (pailles, couverts, assiettes) depuis 2021.',
                'L\'\u00e9conomie circulaire, le d\u00e9veloppement de mat\u00e9riaux biosourc\u00e9s et biodegradables, l\'am\u00e9lioration du recyclage chimique et m\u00e9canique, et la r\u00e9duction \u00e0 la source (vrac, r\u00e9emploi, consigne) sont autant de pistes pour endiguer cette pollution. Cependant, le recyclage seul ne suffira pas : il est indispensable de r\u00e9duire la production globale de plastique vierge.'
              ],
              highlight: 'Un trait\u00e9 mondial contraignant sur la pollution plastique est en cours de n\u00e9gociation sous l\'\u00e9gide de l\'ONU.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage du plastique produit depuis 1950 a \u00e9t\u00e9 recycl\u00e9 ?', opts: ['9 %', '25 %', '40 %', '60 %'], correct: 0, explanation: 'Seulement 9 % de tout le plastique produit depuis 1950 a \u00e9t\u00e9 recycl\u00e9, 12 % incin\u00e9r\u00e9 et 79 % accumul\u00e9 dans l\'environnement.' },
            { q: 'Quelle est la taille maximale d\'un microplastique ?', opts: ['1 mm', '5 mm', '1 cm', '5 cm'], correct: 1, explanation: 'Les microplastiques sont d\u00e9finis comme des fragments de plastique d\'une taille inf\u00e9rieure \u00e0 5 mm.' },
            { q: 'Combien de plastique finit dans les oc\u00e9ans chaque ann\u00e9e ?', opts: ['1 \u00e0 2 millions de tonnes', '8 \u00e0 12 millions de tonnes', '30 millions de tonnes', '100 millions de tonnes'], correct: 1, explanation: 'Environ 8 \u00e0 12 millions de tonnes de plastique finissent dans les oc\u00e9ans chaque ann\u00e9e.' }
          ],
          definitions: [
            { term: 'Microplastique', def: 'Fragment de plastique d\'une taille inf\u00e9rieure \u00e0 5 mm, provenant de la d\u00e9gradation d\'objets plus grands ou fabriqu\u00e9 intentionnellement (microbilles).' },
            { term: 'Gyre oc\u00e9anique', def: 'Syst\u00e8me de courants marins circulaires qui pi\u00e8gent les d\u00e9bris flottants et concentrent les d\u00e9chets plastiques.' },
            { term: 'Plastique \u00e0 usage unique', def: 'Produit en plastique con\u00e7u pour n\'\u00eatre utilis\u00e9 qu\'une seule fois avant d\'\u00eatre jet\u00e9 (emballages, pailles, sacs).' },
            { term: 'Recyclage chimique', def: 'Proc\u00e9d\u00e9 qui d\u00e9compose les polym\u00e8res plastiques en leurs monom\u00e8res de base, permettant de recr\u00e9er du plastique de qualit\u00e9 vierge.' },
            { term: 'Biosourc\u00e9', def: 'Mat\u00e9riau fabriqu\u00e9 \u00e0 partir de mati\u00e8res premi\u00e8res renouvelables d\'origine biologique (amidon, cellulose, algues).' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un sac plastique met entre 100 et 400 ans \u00e0 se d\u00e9composer, une bouteille en PET environ 450 ans, et une ligne de p\u00eache en nylon plus de 600 ans.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un seul cycle de lavage d\'un pull en polyester peut lib\u00e9rer plus de 700 000 microfibres plastiques dans les eaux us\u00e9es.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le plastique n\'a \u00e9t\u00e9 invent\u00e9 qu\'en 1907 (bak\u00e9lite), mais en un si\u00e8cle, il est devenu le mat\u00e9riau le plus omnipr\u00e9sent de la civilisation humaine.' }
          ]
        },
        // --- Lesson 2.5 : Métaux lourds et polluants persistants ---
        {
          slug: 'metaux-lourds',
          title: 'M\u00e9taux lourds et polluants persistants',
          description: 'Les polluants indestructibles qui s\'accumulent dans les \u00e9cosyst\u00e8mes et les organismes.',
          intro: 'Les m\u00e9taux lourds et les polluants organiques persistants (POP) constituent une famille de contaminants particuli\u00e8rement dangereux car ils ne se d\u00e9gradent pas ou tr\u00e8s lentement dans l\'environnement, s\'accumulent dans les cha\u00eenes alimentaires et peuvent causer des dommages irr\u00e9versibles \u00e0 la sant\u00e9 humaine et aux \u00e9cosyst\u00e8mes.',
          introHighlight: 'Les polluants persistants s\'accumulent dans la cha\u00eene alimentaire : leur concentration peut \u00eatre multipli\u00e9e par un million entre l\'eau et un pr\u00e9dateur sup\u00e9rieur.',
          intro2: '',
          sections: [
            {
              title: 'Les m\u00e9taux lourds dans l\'environnement',
              paragraphs: [
                'Le mercure, le plomb, le cadmium et l\'arsenic sont les m\u00e9taux lourds les plus pr\u00e9occupants. Le mercure, \u00e9mis par la combustion du charbon, l\'orpaillage artisanal et certains proc\u00e9d\u00e9s industriels, se transforme en m\u00e9thylmercure dans les milieux aquatiques, une forme hautement toxique qui s\'accumule dans les poissons. Les populations qui consomment beaucoup de poisson (Inuits, Japonais) sont particuli\u00e8rement expos\u00e9es.',
                'Le plomb, malgr\u00e9 l\'interdiction de l\'essence au plomb et des peintures au plomb, reste omnipr\u00e9sent dans l\'environnement. On estime que 800 millions d\'enfants dans le monde pr\u00e9sentent des taux de plomb sanguin dangereux, affectant leur d\u00e9veloppement neurologique. Le saturnisme reste un probl\u00e8me de sant\u00e9 publique, notamment dans les logements anciens et les zones minières.',
                'Le cadmium, pr\u00e9sent naturellement dans les phosphates utilis\u00e9s comme engrais, s\'accumule dans les sols et les cultures. Il provoque des l\u00e9sions r\u00e9nales et osseuses. La maladie Itai-itai au Japon, caus\u00e9e par l\'ingestion de riz contamin\u00e9 au cadmium, a \u00e9t\u00e9 l\'une des premi\u00e8res maladies environnementales reconnues.'
              ],
              highlight: '800 millions d\'enfants dans le monde pr\u00e9sentent des niveaux de plomb sanguin dangereux pour leur d\u00e9veloppement.'
            },
            {
              title: 'Les polluants organiques persistants (POP)',
              paragraphs: [
                'Les POP sont des substances chimiques organiques toxiques qui r\u00e9sistent \u00e0 la d\u00e9gradation et s\'accumulent dans les tissus adipeux des organismes vivants. La Convention de Stockholm (2001) r\u00e9glemente les POP les plus dangereux, dont les PCB (polychlorobiph\u00e9nyles), les dioxines, le DDT et les furanes.',
                'Les PCB, utilis\u00e9s dans les transformateurs \u00e9lectriques et interdits dans les ann\u00e9es 1980, persistent dans l\'environnement et contaminent encore la cha\u00eene alimentaire. Les dioxines, sous-produits de l\'incin\u00e9ration et de certains proc\u00e9d\u00e9s industriels, comptent parmi les substances les plus toxiques connues : la TCDD (dioxine de Seveso) est canc\u00e9rig\u00e8ne \u00e0 des doses infinit\u00e9simales.'
              ],
              highlight: 'La Convention de Stockholm (2001) r\u00e9glemente les polluants organiques persistants les plus dangereux au niveau mondial.'
            },
            {
              title: 'La bioamplification',
              paragraphs: [
                'La bioamplification (ou biomagnification) est le processus par lequel la concentration d\'un polluant augmente \u00e0 chaque niveau de la cha\u00eene alimentaire. Un polluant pr\u00e9sent \u00e0 1 ppm dans l\'eau peut atteindre 10 ppm dans le plancton, 100 ppm dans les petits poissons, 1 000 ppm dans les gros poissons et 10 000 ppm chez les pr\u00e9dateurs sup\u00e9rieurs comme les aigles ou les orques.',
                'C\'est la bioamplification du DDT qui a provoqu\u00e9 l\'amincissement des coquilles d\'\u0153ufs des rapaces, mena\u00e7ant d\'extinction le pygargue \u00e0 t\u00eate blanche aux \u00c9tats-Unis. La publication du livre \u00ab Printemps silencieux \u00bb de Rachel Carson en 1962, d\u00e9non\u00e7ant ces effets, a lanc\u00e9 le mouvement \u00e9cologiste moderne et conduit \u00e0 l\'interdiction du DDT.'
              ],
              highlight: 'La bioamplification peut multiplier par 10 000 la concentration d\'un polluant entre l\'eau et un pr\u00e9dateur sup\u00e9rieur.'
            }
          ],
          quiz: [
            { q: 'Sous quelle forme le mercure est-il le plus dangereux dans l\'environnement aquatique ?', opts: ['Mercure \u00e9l\u00e9mentaire', 'M\u00e9thylmercure', 'Oxyde de mercure', 'Chlorure de mercure'], correct: 1, explanation: 'Le m\u00e9thylmercure est la forme la plus toxique et la plus bioaccumulable du mercure, produite par les bact\u00e9ries dans les milieux aquatiques.' },
            { q: 'Quel livre a lanc\u00e9 le mouvement \u00e9cologiste moderne en d\u00e9non\u00e7ant le DDT ?', opts: ['La Terre en danger', 'Printemps silencieux', 'L\'\u00c8re du vide', 'La plan\u00e8te bleue'], correct: 1, explanation: '\u00ab Printemps silencieux \u00bb de Rachel Carson, publi\u00e9 en 1962, a d\u00e9nonc\u00e9 les effets d\u00e9vastateurs du DDT sur la faune sauvage.' },
            { q: 'Que r\u00e9glemente la Convention de Stockholm ?', opts: ['Les \u00e9missions de CO\u2082', 'Les polluants organiques persistants', 'La couche d\'ozone', 'La biodiversit\u00e9 marine'], correct: 1, explanation: 'La Convention de Stockholm (2001) r\u00e9glemente la production et l\'utilisation des polluants organiques persistants (POP).' }
          ],
          definitions: [
            { term: 'Bioamplification', def: 'Augmentation progressive de la concentration d\'un polluant \u00e0 chaque niveau trophique d\'une cha\u00eene alimentaire.' },
            { term: 'Polluant organique persistant (POP)', def: 'Substance chimique organique toxique r\u00e9sistante \u00e0 la d\u00e9gradation, qui s\'accumule dans les tissus vivants et peut \u00eatre transport\u00e9e sur de longues distances.' },
            { term: 'PCB', def: 'Polychlorobiph\u00e9nyles, famille de compos\u00e9s chimiques chlor\u00e9s utilis\u00e9s comme isolants \u00e9lectriques, interdits mais toujours pr\u00e9sents dans l\'environnement.' },
            { term: 'Saturnisme', def: 'Intoxication chronique au plomb, particuli\u00e8rement dangereuse pour les enfants dont elle affecte le d\u00e9veloppement neurologique.' },
            { term: 'M\u00e9thylmercure', def: 'Forme organique du mercure, hautement toxique et bioaccumulable, produite par les bact\u00e9ries dans les milieux aquatiques.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les orques de la mer du Nord sont si contamin\u00e9es par les PCB que leurs carcasses doivent \u00eatre trait\u00e9es comme des d\u00e9chets toxiques.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'L\'empereur chinois Qin Shi Huangdi est probablement mort en buvant un \u00e9lixir d\'immortalit\u00e9 \u00e0 base de mercure, un m\u00e9tal alors consid\u00e9r\u00e9 comme sacr\u00e9.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les chapeaux de feutre \u00e9taient autrefois trait\u00e9s au mercure, rendant les chapeliers fous. C\'est l\'origine de l\'expression anglaise \u00ab mad as a hatter \u00bb.' }
          ]
        }
      ]
    },
    // ==================== HUB 3 : Biodiversité ====================
    {
      slug: 'biodiversite',
      title: 'Biodiversit\u00e9 menac\u00e9e',
      description: 'L\'\u00e9rosion de la diversit\u00e9 biologique, ses causes et les strat\u00e9gies de conservation.',
      lessons: [
        // --- Lesson 3.1 : L'extinction des espèces ---
        {
          slug: 'extinction-especes',
          title: 'L\'extinction des esp\u00e8ces',
          description: 'La sixi\u00e8me extinction de masse, ses causes et l\'\u00e9tat de la biodiversit\u00e9 mondiale.',
          intro: 'La Terre conna\u00eet actuellement une vague d\'extinction sans pr\u00e9c\u00e9dent depuis la disparition des dinosaures il y a 66 millions d\'ann\u00e9es. Le taux d\'extinction actuel est estim\u00e9 entre 100 et 1 000 fois sup\u00e9rieur au taux naturel. Cette crise, qualifi\u00e9e de sixi\u00e8me extinction de masse, est enti\u00e8rement caus\u00e9e par les activit\u00e9s humaines.',
          introHighlight: 'Le taux d\'extinction actuel est 100 \u00e0 1 000 fois sup\u00e9rieur au taux naturel : nous vivons la sixi\u00e8me extinction de masse.',
          intro2: '',
          sections: [
            {
              title: 'L\'\u00e9tat de la biodiversit\u00e9 mondiale',
              paragraphs: [
                'L\'UICN (Union internationale pour la conservation de la nature) \u00e9value r\u00e9guli\u00e8rement le statut des esp\u00e8ces via sa Liste rouge. En 2024, plus de 44 000 esp\u00e8ces sur les 157 000 \u00e9valu\u00e9es sont menac\u00e9es d\'extinction, soit environ 28 %. Parmi les groupes les plus touch\u00e9s figurent les amphibiens (41 % menac\u00e9s), les requins et raies (37 %) et les mammif\u00e8res (26 %).',
                'Le rapport Plan\u00e8te Vivante du WWF (2024) r\u00e9v\u00e8le que les populations de vert\u00e9br\u00e9s sauvages (mammif\u00e8res, oiseaux, reptiles, amphibiens, poissons) ont d\u00e9clin\u00e9 de 73 % en moyenne entre 1970 et 2020. Ce d\u00e9clin est particuli\u00e8rement dramatique en Am\u00e9rique latine (-95 %) et dans les \u00e9cosyst\u00e8mes d\'eau douce (-85 %).',
                'Les insectes, qui repr\u00e9sentent environ 80 % des esp\u00e8ces animales connues, subissent un d\u00e9clin alarmant. Des \u00e9tudes men\u00e9es en Allemagne ont mesur\u00e9 une perte de 76 % de la biomasse d\'insectes volants en 27 ans. Ce ph\u00e9nom\u00e8ne menace directement la pollinisation, la d\u00e9composition de la mati\u00e8re organique et l\'ensemble des r\u00e9seaux trophiques.'
              ],
              highlight: 'Les populations de vert\u00e9br\u00e9s sauvages ont d\u00e9clin\u00e9 de 73 % en moyenne entre 1970 et 2020.'
            },
            {
              title: 'Les cinq facteurs de d\u00e9clin',
              paragraphs: [
                'L\'IPBES (Plateforme intergouvernementale sur la biodiversit\u00e9 et les services \u00e9cosyst\u00e9miques) identifie cinq facteurs directs de d\u00e9clin de la biodiversit\u00e9, class\u00e9s par ordre d\'importance : (1) le changement d\'usage des terres et des mers (d\u00e9forestation, urbanisation, agriculture), (2) l\'exploitation directe des organismes (surp\u00eache, braconnage), (3) le changement climatique, (4) la pollution et (5) les esp\u00e8ces exotiques envahissantes.',
                'Le changement d\'usage des terres est le facteur dominant : 75 % de la surface terrestre est significativement alt\u00e9r\u00e9e par l\'homme et 66 % de la surface oc\u00e9anique subit des impacts croissants. L\'agriculture occupe d\u00e9sormais plus d\'un tiers de la surface terrestre et l\'\u00e9levage utilise 77 % des terres agricoles mondiales tout en ne fournissant que 18 % des calories.'
              ],
              highlight: '75 % de la surface terrestre est significativement alt\u00e9r\u00e9e par les activit\u00e9s humaines.'
            },
            {
              title: 'L\'importance de la biodiversit\u00e9',
              paragraphs: [
                'La biodiversit\u00e9 fournit des services \u00e9cosyst\u00e9miques essentiels \u00e0 la survie humaine : pollinisation (75 % des cultures en d\u00e9pendent), purification de l\'eau et de l\'air, r\u00e9gulation du climat, fertilit\u00e9 des sols, contr\u00f4le des ravageurs et des maladies. La valeur \u00e9conomique de ces services est estim\u00e9e entre 125 000 et 145 000 milliards de dollars par an, soit plus que le PIB mondial.',
                'La diversit\u00e9 g\u00e9n\u00e9tique au sein des esp\u00e8ces est \u00e9galement cruciale : elle permet l\'adaptation aux changements environnementaux. La perte de diversit\u00e9 g\u00e9n\u00e9tique rend les esp\u00e8ces plus vuln\u00e9rables aux maladies et aux perturbations, cr\u00e9ant un cercle vicieux d\'appauvrissement biologique.'
              ],
              highlight: 'Les services \u00e9cosyst\u00e9miques fournis par la biodiversit\u00e9 valent plus que le PIB mondial annuel.'
            }
          ],
          quiz: [
            { q: 'De combien les populations de vert\u00e9br\u00e9s sauvages ont-elles d\u00e9clin\u00e9 entre 1970 et 2020 ?', opts: ['25 %', '50 %', '73 %', '90 %'], correct: 2, explanation: 'Le rapport Plan\u00e8te Vivante du WWF (2024) r\u00e9v\u00e8le un d\u00e9clin moyen de 73 % des populations de vert\u00e9br\u00e9s sauvages entre 1970 et 2020.' },
            { q: 'Quel est le premier facteur de d\u00e9clin de la biodiversit\u00e9 ?', opts: ['Le changement climatique', 'La pollution', 'Le changement d\'usage des terres', 'La surp\u00eache'], correct: 2, explanation: 'Le changement d\'usage des terres (d\u00e9forestation, urbanisation, agriculture intensive) est le principal facteur de d\u00e9clin de la biodiversit\u00e9 selon l\'IPBES.' },
            { q: 'Quel groupe d\'animaux est le plus menac\u00e9 en proportion ?', opts: ['Les mammif\u00e8res (26 %)', 'Les oiseaux (13 %)', 'Les amphibiens (41 %)', 'Les reptiles (20 %)'], correct: 2, explanation: 'Les amphibiens sont le groupe le plus menac\u00e9, avec 41 % des esp\u00e8ces \u00e9valu\u00e9es class\u00e9es comme menac\u00e9es par l\'UICN.' }
          ],
          definitions: [
            { term: 'Extinction de masse', def: '\u00c9v\u00e9nement au cours duquel une proportion significative des esp\u00e8ces vivantes dispara\u00eet en un temps g\u00e9ologiquement court. La Terre en a connu cinq ; la sixi\u00e8me est en cours.' },
            { term: 'Liste rouge de l\'UICN', def: 'Inventaire mondial de l\'\u00e9tat de conservation des esp\u00e8ces animales et v\u00e9g\u00e9tales, classant chaque esp\u00e8ce selon son risque d\'extinction.' },
            { term: 'Services \u00e9cosyst\u00e9miques', def: 'B\u00e9n\u00e9fices que les \u00e9cosyst\u00e8mes fournissent gratuitement \u00e0 l\'humanit\u00e9 : pollinisation, purification de l\'eau, r\u00e9gulation du climat, etc.' },
            { term: 'IPBES', def: 'Plateforme intergouvernementale sur la biodiversit\u00e9 et les services \u00e9cosyst\u00e9miques, l\'\u00e9quivalent du GIEC pour la biodiversit\u00e9.' },
            { term: 'R\u00e9seau trophique', def: 'Ensemble des relations alimentaires entre les organismes d\'un \u00e9cosyst\u00e8me, formant un r\u00e9seau complexe d\'interd\u00e9pendances.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le dodo de l\'\u00eele Maurice, \u00e9teint en 1681, est devenu le symb\u00f4le de l\'extinction caus\u00e9e par l\'homme. Il a \u00e9t\u00e9 \u00e9limin\u00e9 en moins d\'un si\u00e8cle apr\u00e8s la d\u00e9couverte de l\'\u00eele.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'On estime qu\'il existe entre 8 et 10 millions d\'esp\u00e8ces sur Terre, dont seulement 1,5 million ont \u00e9t\u00e9 d\u00e9crites scientifiquement. Des esp\u00e8ces disparaissent avant m\u00eame d\'avoir \u00e9t\u00e9 d\u00e9couvertes.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le d\u00e9clin des insectes pollinisateurs menace directement 75 % des cultures alimentaires mondiales, repr\u00e9sentant une valeur \u00e9conomique de 235 \u00e0 577 milliards de dollars par an.' }
          ]
        },
        // --- Lesson 3.2 : La déforestation ---
        {
          slug: 'deforestation',
          title: 'La d\u00e9forestation',
          description: 'La disparition des for\u00eats mondiales, ses moteurs et ses cons\u00e9quences.',
          intro: 'Les for\u00eats couvrent environ 31 % de la surface terrestre et abritent plus de 80 % de la biodiversit\u00e9 terrestre. Pourtant, le monde perd chaque ann\u00e9e environ 10 millions d\'hectares de for\u00eat, soit l\'\u00e9quivalent d\'un terrain de football toutes les deux secondes. La d\u00e9forestation tropicale est la principale cause de cette perte.',
          introHighlight: 'Le monde perd 10 millions d\'hectares de for\u00eat par an, soit un terrain de football toutes les deux secondes.',
          intro2: '',
          sections: [
            {
              title: 'Les moteurs de la d\u00e9forestation',
              paragraphs: [
                'L\'agriculture commerciale est responsable de 70 \u00e0 80 % de la d\u00e9forestation tropicale. Quatre produits concentrent la majorit\u00e9 de la destruction : le soja (principalement pour l\'alimentation animale), l\'huile de palme, le b\u0153uf et le bois. Le Br\u00e9sil et l\'Indon\u00e9sie sont les deux pays les plus affect\u00e9s, repr\u00e9sentant \u00e0 eux seuls pr\u00e8s de la moiti\u00e9 de la d\u00e9forestation tropicale.',
                'L\'agriculture de subsistance, l\'exploitation foresti\u00e8re (l\u00e9gale et ill\u00e9gale), l\'expansion urbaine et la construction d\'infrastructures contribuent \u00e9galement au d\u00e9boisement. Le commerce ill\u00e9gal de bois repr\u00e9sente entre 15 et 30 % du commerce mondial de bois, soit un march\u00e9 estim\u00e9 \u00e0 50-150 milliards de dollars par an.',
                'Les incendies de for\u00eat, souvent li\u00e9s au d\u00e9frichage agricole et amplifi\u00e9s par le changement climatique, acc\u00e9l\u00e8rent la destruction foresti\u00e8re. En Amazonie, les incendies de 2019 ont d\u00e9truit plus de 900 000 hectares de for\u00eat, un record historique \u00e0 cette \u00e9poque.'
              ],
              highlight: 'L\'agriculture commerciale (soja, huile de palme, b\u0153uf, bois) est responsable de 70 \u00e0 80 % de la d\u00e9forestation tropicale.'
            },
            {
              title: 'Les cons\u00e9quences de la d\u00e9forestation',
              paragraphs: [
                'La d\u00e9forestation est responsable d\'environ 10 % des \u00e9missions mondiales de GES, principalement par la lib\u00e9ration du carbone stock\u00e9 dans les arbres et les sols. Les for\u00eats tropicales absorbent environ 2,4 milliards de tonnes de CO\u2082 par an, mais cette capacit\u00e9 diminue \u00e0 mesure qu\'elles sont d\u00e9truites ou d\u00e9grad\u00e9es.',
                'La perte d\'habitat est la cons\u00e9quence la plus directe pour la biodiversit\u00e9. Les for\u00eats tropicales, qui ne couvrent que 6 % de la surface terrestre, abritent plus de 50 % des esp\u00e8ces connues. Leur destruction provoque l\'extinction de milliers d\'esp\u00e8ces, dont beaucoup n\'ont jamais \u00e9t\u00e9 identifi\u00e9es par la science.',
                'La d\u00e9forestation perturbe \u00e9galement le cycle de l\'eau local et r\u00e9gional. Les for\u00eats tropicales g\u00e9n\u00e8rent une part importante de leurs propres pr\u00e9cipitations par \u00e9vapotranspiration. Leur destruction peut provoquer une diminution des pluies et une aridification r\u00e9gionale, mena\u00e7ant l\'agriculture et l\'approvisionnement en eau.'
              ],
              highlight: 'Les for\u00eats tropicales couvrent 6 % de la surface terrestre mais abritent plus de 50 % des esp\u00e8ces connues.'
            },
            {
              title: 'La lutte contre la d\u00e9forestation',
              paragraphs: [
                'Plusieurs initiatives internationales visent \u00e0 freiner la d\u00e9forestation. Le programme REDD+ des Nations unies propose de r\u00e9mun\u00e9rer les pays tropicaux pour la conservation de leurs for\u00eats. La D\u00e9claration de Glasgow sur les for\u00eats (2021) a engag\u00e9 140 pays \u00e0 stopper la d\u00e9forestation d\'ici 2030.',
                'L\'Union europ\u00e9enne a adopt\u00e9 en 2023 un r\u00e8glement interdisant l\'importation de produits issus de la d\u00e9forestation (soja, huile de palme, caf\u00e9, cacao, bois, caoutchouc, viande bovine). Cette l\u00e9gislation pionni\u00e8re oblige les entreprises \u00e0 prouver que leurs cha\u00eenes d\'approvisionnement ne contribuent pas \u00e0 la d\u00e9forestation.'
              ],
              highlight: 'Le r\u00e8glement europ\u00e9en de 2023 interdit l\'importation de produits issus de la d\u00e9forestation.'
            }
          ],
          quiz: [
            { q: 'Quelle surface de for\u00eat le monde perd-il chaque ann\u00e9e ?', opts: ['1 million d\'hectares', '5 millions d\'hectares', '10 millions d\'hectares', '50 millions d\'hectares'], correct: 2, explanation: 'Le monde perd environ 10 millions d\'hectares de for\u00eat par an, principalement dans les zones tropicales.' },
            { q: 'Quel produit est le premier moteur de la d\u00e9forestation en Amazonie ?', opts: ['L\'huile de palme', 'Le caf\u00e9', 'L\'\u00e9levage bovin', 'L\'exploitation mini\u00e8re'], correct: 2, explanation: 'L\'\u00e9levage bovin est le premier moteur de la d\u00e9forestation en Amazonie, suivi par la culture du soja.' },
            { q: 'Quelle part des \u00e9missions mondiales de GES la d\u00e9forestation repr\u00e9sente-t-elle ?', opts: ['2 %', '5 %', '10 %', '25 %'], correct: 2, explanation: 'La d\u00e9forestation est responsable d\'environ 10 % des \u00e9missions mondiales de gaz \u00e0 effet de serre.' }
          ],
          definitions: [
            { term: 'D\u00e9forestation', def: 'Conversion permanente de terres foresti\u00e8res en d\'autres usages (agriculture, urbanisation, mines), entra\u00eenant la perte du couvert forestier.' },
            { term: 'REDD+', def: 'M\u00e9canisme des Nations unies visant \u00e0 r\u00e9duire les \u00e9missions li\u00e9es \u00e0 la d\u00e9forestation en r\u00e9mun\u00e9rant les pays pour la conservation de leurs for\u00eats.' },
            { term: '\u00c9vapotranspiration', def: 'Processus par lequel les plantes rel\u00e2chent de la vapeur d\'eau dans l\'atmosph\u00e8re, contribuant au cycle de l\'eau et \u00e0 la formation des nuages.' },
            { term: 'For\u00eat primaire', def: 'For\u00eat n\'ayant jamais \u00e9t\u00e9 exploit\u00e9e ni significativement alt\u00e9r\u00e9e par l\'homme, pr\u00e9sentant une biodiversit\u00e9 maximale.' },
            { term: 'D\u00e9gradation foresti\u00e8re', def: 'R\u00e9duction de la qualit\u00e9 d\'une for\u00eat (perte d\'esp\u00e8ces, de biomasse, de structure) sans conversion en un autre usage.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'L\'Amazonie a perdu environ 17 % de sa surface foresti\u00e8re en 50 ans. Les scientifiques estiment qu\'au-del\u00e0 de 20-25 % de d\u00e9forestation, la for\u00eat pourrait basculer irr\u00e9versiblement en savane.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La France poss\u00e8de la deuxi\u00e8me plus grande surface foresti\u00e8re d\'Europe et ses for\u00eats s\'\u00e9tendent depuis le XIXe si\u00e8cle. En revanche, la Guyane fran\u00e7aise perd chaque ann\u00e9e des hectares de for\u00eat primaire.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un hectare de for\u00eat tropicale peut abriter plus de 400 esp\u00e8ces d\'arbres diff\u00e9rentes, soit plus que l\'ensemble de la flore arbor\u00e9e d\'Europe.' }
          ]
        },
        // --- Lesson 3.3 : Les océans menacés ---
        {
          slug: 'oceans-menaces',
          title: 'Les oc\u00e9ans menac\u00e9s',
          description: 'Les menaces pesant sur les \u00e9cosyst\u00e8mes marins et la surp\u00eache.',
          intro: 'Les oc\u00e9ans couvrent 71 % de la surface terrestre et abritent une biodiversit\u00e9 immense, en grande partie inexpor\u00e9e. Ils fournissent la moiti\u00e9 de l\'oxyg\u00e8ne que nous respirons et nourrissent plus de 3 milliards de personnes. Pourtant, la surp\u00eache, la pollution et le changement climatique menacent gravement ces \u00e9cosyst\u00e8mes vitaux.',
          introHighlight: 'Les oc\u00e9ans fournissent 50 % de l\'oxyg\u00e8ne atmosph\u00e9rique et nourrissent plus de 3 milliards de personnes.',
          intro2: '',
          sections: [
            {
              title: 'La surp\u00eache',
              paragraphs: [
                'Selon la FAO, 35 % des stocks de poissons mondiaux sont surexploit\u00e9s et 57 % sont exploit\u00e9s au maximum de leur capacit\u00e9 biologique. Seuls 7 % des stocks sont sous-exploit\u00e9s. La fl\u00f4te de p\u00eache mondiale est deux \u00e0 trois fois trop importante par rapport \u00e0 ce que les oc\u00e9ans peuvent durablement fournir.',
                'La p\u00eache industrielle a vid\u00e9 les oc\u00e9ans de mani\u00e8re syst\u00e9matique : la biomasse des grands poissons pr\u00e9dateurs (thons, espadons, requins) a diminu\u00e9 de 90 % depuis les ann\u00e9es 1950. Le chalutage de fond, qui racle les fonds marins avec d\'\u00e9normes filets lest\u00e9s, d\u00e9truit les habitats benthiques et g\u00e9n\u00e8re des prises accessoires massives (40 % des captures mondiales sont des esp\u00e8ces non cibl\u00e9es).',
                'La p\u00eache ill\u00e9gale, non d\u00e9clar\u00e9e et non r\u00e9glement\u00e9e (INN) repr\u00e9sente entre 11 et 26 millions de tonnes par an, soit un march\u00e9 noir estim\u00e9 \u00e0 23 milliards de dollars. Elle mine les efforts de gestion durable et affecte particuli\u00e8rement les pays en d\u00e9veloppement.'
              ],
              highlight: '35 % des stocks de poissons sont surexploit\u00e9s et la biomasse des grands pr\u00e9dateurs a diminu\u00e9 de 90 % depuis 1950.'
            },
            {
              title: 'L\'acidification et le r\u00e9chauffement des oc\u00e9ans',
              paragraphs: [
                'Les oc\u00e9ans absorbent environ 25 % du CO\u2082 \u00e9mis par les activit\u00e9s humaines, ce qui provoque leur acidification. Le pH moyen des oc\u00e9ans a diminu\u00e9 de 0,1 unit\u00e9 depuis l\'\u00e8re pr\u00e9industrielle, repr\u00e9sentant une augmentation de 26 % de l\'acidit\u00e9. Cette acidification menace les organismes \u00e0 coquille calcaire : coraux, mollusques, ours ins et certains planctons.',
                'Le r\u00e9chauffement des eaux modifie la distribution des esp\u00e8ces marines, qui migrent vers les p\u00f4les \u00e0 un rythme moyen de 72 km par d\u00e9cennie. Les vagues de chaleur marines, dont la fr\u00e9quence a doubl\u00e9 depuis 1982, provoquent des \u00e9pisodes de blanchissement massif des coraux et des mortalit\u00e9s de masse dans divers \u00e9cosyst\u00e8mes.'
              ],
              highlight: 'Les esp\u00e8ces marines migrent vers les p\u00f4les \u00e0 un rythme de 72 km par d\u00e9cennie en raison du r\u00e9chauffement.'
            },
            {
              title: 'La protection des oc\u00e9ans',
              paragraphs: [
                'Les aires marines prot\u00e9g\u00e9es (AMP) couvrent actuellement environ 8 % des oc\u00e9ans, mais seules 2,8 % b\u00e9n\u00e9ficient d\'une protection effective. L\'accord mondial de Kunming-Montr\u00e9al (2022) fixe l\'objectif de prot\u00e9ger 30 % des oc\u00e9ans d\'ici 2030 (objectif \u00ab 30x30 \u00bb).',
                'Le Trait\u00e9 de la haute mer, adopt\u00e9 par l\'ONU en 2023, est une avanc\u00e9e historique : pour la premi\u00e8re fois, il permet la cr\u00e9ation d\'aires marines prot\u00e9g\u00e9es dans les eaux internationales, qui couvrent pr\u00e8s de deux tiers de la surface oc\u00e9anique et \u00e9taient jusqu\'alors d\u00e9pourvues de cadre juridique de conservation.'
              ],
              highlight: 'Le Trait\u00e9 de la haute mer (2023) permet pour la premi\u00e8re fois de cr\u00e9er des aires prot\u00e9g\u00e9es dans les eaux internationales.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des stocks de poissons mondiaux est surexploit\u00e9 ?', opts: ['10 %', '20 %', '35 %', '50 %'], correct: 2, explanation: 'Selon la FAO, 35 % des stocks de poissons mondiaux sont surexploit\u00e9s, c\'est-\u00e0-dire p\u00each\u00e9s au-del\u00e0 de leur capacit\u00e9 de renouvellement.' },
            { q: 'De combien la biomasse des grands pr\u00e9dateurs marins a-t-elle diminu\u00e9 depuis 1950 ?', opts: ['30 %', '50 %', '70 %', '90 %'], correct: 3, explanation: 'La biomasse des grands poissons pr\u00e9dateurs (thons, requins, espadons) a diminu\u00e9 de 90 % depuis les ann\u00e9es 1950.' },
            { q: 'Quel est l\'objectif \u00ab 30x30 \u00bb pour les oc\u00e9ans ?', opts: ['R\u00e9duire la pollution de 30 %', 'Prot\u00e9ger 30 % des oc\u00e9ans d\'ici 2030', 'Cr\u00e9er 30 r\u00e9serves marines', 'Limiter la p\u00eache \u00e0 30 Mt/an'], correct: 1, explanation: 'L\'objectif \u00ab 30x30 \u00bb vise \u00e0 prot\u00e9ger 30 % des oc\u00e9ans (et des terres) d\'ici 2030.' }
          ],
          definitions: [
            { term: 'Surp\u00eache', def: 'Pr\u00e9l\u00e8vement d\'une quantit\u00e9 de poissons sup\u00e9rieure \u00e0 la capacit\u00e9 de renouvellement naturel du stock, entra\u00eenant son d\u00e9clin.' },
            { term: 'Chalutage de fond', def: 'Technique de p\u00eache consistant \u00e0 tra\u00eener un filet lest\u00e9 sur le fond marin, d\u00e9truisant les habitats benthiques.' },
            { term: 'Prises accessoires', def: 'Esp\u00e8ces non cibl\u00e9es captur\u00e9es accidentellement par les engins de p\u00eache, souvent rejet\u00e9es mortes en mer.' },
            { term: 'Aire marine prot\u00e9g\u00e9e (AMP)', def: 'Zone maritime o\u00f9 les activit\u00e9s humaines sont r\u00e9glement\u00e9es pour prot\u00e9ger les \u00e9cosyst\u00e8mes, la biodiversit\u00e9 et les ressources marines.' },
            { term: 'Blanchissement corallien', def: 'Perte des algues symbiotiques (zooxanthelles) par les coraux sous l\'effet du stress thermique, pouvant entra\u00eener leur mort.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les filets de p\u00eache abandonn\u00e9s, appel\u00e9s \u00ab filets fant\u00f4mes \u00bb, repr\u00e9sentent 10 % des d\u00e9chets plastiques oc\u00e9aniques et continuent de tuer des animaux marins pendant des si\u00e8cles.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'On conna\u00eet mieux la surface de la Lune que le fond des oc\u00e9ans : environ 80 % des fonds marins restent inexpor\u00e9s.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un seul chalutier industriel peut capturer en un jour autant de poissons qu\'un village de p\u00eacheurs artisanaux en un an.' }
          ]
        },
        // --- Lesson 3.4 : Zones protégées ---
        {
          slug: 'zones-protegees',
          title: 'Les zones prot\u00e9g\u00e9es',
          description: 'Les parcs nationaux, r\u00e9serves et aires prot\u00e9g\u00e9es comme outils de conservation.',
          intro: 'Les zones prot\u00e9g\u00e9es constituent la pierre angulaire de la conservation de la biodiversit\u00e9. En 2024, environ 17 % des terres et 8 % des oc\u00e9ans sont class\u00e9s en aires prot\u00e9g\u00e9es. L\'accord de Kunming-Montr\u00e9al de 2022 a fix\u00e9 l\'objectif ambitieux de prot\u00e9ger 30 % de la plan\u00e8te d\'ici 2030.',
          introHighlight: 'L\'objectif mondial est de prot\u00e9ger 30 % des terres et des mers d\'ici 2030, contre 17 % et 8 % actuellement.',
          intro2: '',
          sections: [
            {
              title: 'Les diff\u00e9rents types de zones prot\u00e9g\u00e9es',
              paragraphs: [
                'L\'UICN d\u00e9finit six cat\u00e9gories d\'aires prot\u00e9g\u00e9es, allant de la r\u00e9serve naturelle int\u00e9grale (cat\u00e9gorie Ia), o\u00f9 toute activit\u00e9 humaine est interdite, \u00e0 l\'aire prot\u00e9g\u00e9e avec utilisation durable des ressources naturelles (cat\u00e9gorie VI). Les parcs nationaux (cat\u00e9gorie II) combinent conservation et accueil du public.',
                'Les r\u00e9serves de biosph\u00e8re de l\'UNESCO adoptent un mod\u00e8le en zones concentriques : une zone centrale strictement prot\u00e9g\u00e9e, une zone tampon o\u00f9 des activit\u00e9s compatibles sont autoris\u00e9es, et une zone de transition o\u00f9 un d\u00e9veloppement durable est encourage. Il existe 748 r\u00e9serves de biosph\u00e8re dans 134 pays.',
                'Les sites Ramsar prot\u00e8gent les zones humides d\'importance internationale. Ces milieux (mar\u00e9cages, tourbi\u00e8res, mangroves, r\u00e9cifs coralliens) sont parmi les \u00e9cosyst\u00e8mes les plus productifs et les plus menac\u00e9s de la plan\u00e8te : plus de 35 % des zones humides mondiales ont disparu depuis 1970.'
              ],
              highlight: 'Plus de 35 % des zones humides mondiales ont disparu depuis 1970, mena\u00e7ant des \u00e9cosyst\u00e8mes essentiels.'
            },
            {
              title: 'L\'efficacit\u00e9 des aires prot\u00e9g\u00e9es',
              paragraphs: [
                'Les \u00e9tudes scientifiques montrent que les aires prot\u00e9g\u00e9es bien g\u00e9r\u00e9es sont efficaces pour conserver la biodiversit\u00e9 : elles abritent en moyenne 10 \u00e0 50 % de plus d\'esp\u00e8ces et d\'individus que les zones non prot\u00e9g\u00e9es \u00e0 proximit\u00e9. Le parc national de Yellowstone, cr\u00e9\u00e9 en 1872, a permis la r\u00e9introduction r\u00e9ussie du loup gris et la restauration d\'\u00e9cosyst\u00e8mes d\u00e9grad\u00e9s.',
                'Cependant, beaucoup d\'aires prot\u00e9g\u00e9es ne sont que des \u00ab parcs de papier \u00bb : officiellement d\u00e9sign\u00e9es mais d\u00e9pourvues de moyens pour assurer une protection effective. On estime qu\'un tiers des aires prot\u00e9g\u00e9es terrestres sont soumises \u00e0 des pressions humaines intenses. Le financement insuffisant est un probl\u00e8me chronique : les pays en d\u00e9veloppement ont besoin de 4 \u00e0 8 fois plus de fonds qu\'actuellement pour g\u00e9rer efficacement leurs aires prot\u00e9g\u00e9es.'
              ],
              highlight: 'Un tiers des aires prot\u00e9g\u00e9es terrestres sont soumises \u00e0 des pressions humaines intenses malgr\u00e9 leur statut.'
            },
            {
              title: 'La conservation au-del\u00e0 des zones prot\u00e9g\u00e9es',
              paragraphs: [
                'La conservation ne peut se limiter aux aires prot\u00e9g\u00e9es isol\u00e9es. Les corridors \u00e9cologiques, qui relient les zones prot\u00e9g\u00e9es entre elles, sont essentiels pour permettre la circulation des esp\u00e8ces et le maintien des flux g\u00e9n\u00e9tiques. L\'Initiative Jaguar Corridor, par exemple, vise \u00e0 connecter les habitats du jaguar de l\'Argentine au Mexique.',
                'Les territoires autochtones jouent un r\u00f4le crucial dans la conservation : ils couvrent 22 % des terres \u00e9merg\u00e9es et abritent 80 % de la biodiversit\u00e9 restante. Le taux de d\u00e9forestation y est significativement plus faible que dans les for\u00eats non g\u00e9r\u00e9es par les communaut\u00e9s autochtones. La reconnaissance des droits fonciers autochtones est donc un levier puissant de conservation.'
              ],
              highlight: 'Les territoires autochtones couvrent 22 % des terres et abritent 80 % de la biodiversit\u00e9 restante.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des terres est actuellement prot\u00e9g\u00e9 ?', opts: ['5 %', '10 %', '17 %', '30 %'], correct: 2, explanation: 'Environ 17 % des terres \u00e9merg\u00e9es sont class\u00e9es en aires prot\u00e9g\u00e9es en 2024, avec un objectif de 30 % d\'ici 2030.' },
            { q: 'Quel est le plus ancien parc national du monde ?', opts: ['Le parc de la Vanoise', 'Yellowstone', 'Les Gal\u00e1pagos', 'Le Serengeti'], correct: 1, explanation: 'Yellowstone, cr\u00e9\u00e9 en 1872 aux \u00c9tats-Unis, est consid\u00e9r\u00e9 comme le premier parc national au monde.' },
            { q: 'Qu\'est-ce qu\'un \u00ab parc de papier \u00bb ?', opts: ['Un parc fait de mat\u00e9riaux recycl\u00e9s', 'Une aire prot\u00e9g\u00e9e sans gestion effective', 'Un parc urbain', 'Un programme \u00e9ducatif'], correct: 1, explanation: 'Un \u00ab parc de papier \u00bb d\u00e9signe une aire prot\u00e9g\u00e9e officiellement d\u00e9sign\u00e9e mais qui manque de moyens pour assurer une protection r\u00e9elle.' }
          ],
          definitions: [
            { term: 'Aire prot\u00e9g\u00e9e', def: 'Espace g\u00e9ographique d\u00e9fini, reconnu et g\u00e9r\u00e9 par des moyens l\u00e9gaux ou autres pour la conservation \u00e0 long terme de la nature et des services \u00e9cosyst\u00e9miques.' },
            { term: 'Corridor \u00e9cologique', def: 'Bande de territoire reliant des habitats naturels, permettant la circulation des esp\u00e8ces et les flux g\u00e9n\u00e9tiques entre populations isol\u00e9es.' },
            { term: 'R\u00e9serve de biosph\u00e8re', def: 'Site d\u00e9sign\u00e9 par l\'UNESCO combinant conservation, d\u00e9veloppement durable et recherche, organis\u00e9 en zones concentriques.' },
            { term: 'Site Ramsar', def: 'Zone humide d\'importance internationale d\u00e9sign\u00e9e au titre de la Convention de Ramsar (1971) pour sa valeur \u00e9cologique.' },
            { term: 'Objectif 30x30', def: 'Engagement pris dans le cadre de l\'accord de Kunming-Montr\u00e9al (2022) de prot\u00e9ger 30 % des terres et des mers d\'ici 2030.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le parc national des Virunga en R\u00e9publique d\u00e9mocratique du Congo, habitat des derniers gorilles de montagne, est aussi l\'un des plus dangereux au monde : plus de 200 gardes forestiers y ont \u00e9t\u00e9 tu\u00e9s en 25 ans.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La plus grande aire marine prot\u00e9g\u00e9e du monde est celle de la mer de Ross en Antarctique, cr\u00e9\u00e9e en 2016, couvrant 1,55 million de km\u00b2.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La r\u00e9introduction du loup \u00e0 Yellowstone en 1995 a provoqu\u00e9 une \u00ab cascade trophique \u00bb : les loups ont r\u00e9gul\u00e9 les cerfs, permettant la repousse de la v\u00e9g\u00e9tation riveraine et modifiant m\u00eame le cours des rivi\u00e8res.' }
          ]
        },
        // --- Lesson 3.5 : Le rewilding ---
        {
          slug: 'rewilding',
          title: 'Le rewilding',
          description: 'Restaurer les \u00e9cosyst\u00e8mes en laissant la nature reprendre ses droits.',
          intro: 'Le rewilding (ou \u00ab r\u00e9ensauvagement \u00bb) est une approche de conservation qui vise \u00e0 restaurer les processus \u00e9cologiques naturels en r\u00e9introduisant des esp\u00e8ces cl\u00e9s et en r\u00e9duisant l\'intervention humaine. Contrairement \u00e0 la conservation traditionnelle, qui g\u00e8re activement les \u00e9cosyst\u00e8mes, le rewilding cherche \u00e0 laisser la nature se r\u00e9g\u00e9n\u00e9rer par elle-m\u00eame.',
          introHighlight: 'Le rewilding vise \u00e0 restaurer les \u00e9cosyst\u00e8mes en r\u00e9introduisant des esp\u00e8ces cl\u00e9s et en laissant la nature se r\u00e9g\u00e9n\u00e9rer.',
          intro2: '',
          sections: [
            {
              title: 'Les principes du rewilding',
              paragraphs: [
                'Le rewilding repose sur trois piliers : la restauration des processus naturels (feux naturels, inondations, dynamique fluviale), la r\u00e9introduction d\'esp\u00e8ces cl\u00e9s (esp\u00e8ces cl\u00e9s de vo\u00fbte, grands herbivores, pr\u00e9dateurs) et la reconnexion des habitats fragment\u00e9s. L\'objectif n\'est pas de recr\u00e9er un \u00e9cosyst\u00e8me du pass\u00e9, mais de restaurer la capacit\u00e9 d\'auto-r\u00e9gulation de la nature.',
                'Les esp\u00e8ces cl\u00e9s de vo\u00fbte (keystone species) jouent un r\u00f4le disproportionn\u00e9 par rapport \u00e0 leur abondance. Le castor, par exemple, modifie radicalement le paysage en construisant des barrages qui cr\u00e9ent des zones humides, augmentent la biodiversit\u00e9 locale et r\u00e9gulent les d\u00e9bits hydriques. Sa r\u00e9introduction en Europe a transform\u00e9 de nombreux \u00e9cosyst\u00e8mes d\u00e9grad\u00e9s.',
                'Le concept de \u00ab d\u00e9faunation \u00bb d\u00e9signe la disparition des grands animaux, qui sont essentiels au fonctionnement des \u00e9cosyst\u00e8mes. Les grands herbivores (bisons, chevaux sauvages, aurochs) maintenaient autrefois des paysages ouverts et diversifi\u00e9s. Leur absence a entra\u00een\u00e9 la fermeture des milieux et l\'appauvrissement de la biodiversit\u00e9.'
              ],
              highlight: 'Le castor est une esp\u00e8ce cl\u00e9 de vo\u00fbte dont la r\u00e9introduction transforme et enrichit des \u00e9cosyst\u00e8mes entiers.'
            },
            {
              title: 'Exemples de projets de rewilding',
              paragraphs: [
                'Le projet Rewilding Europe, lanc\u00e9 en 2011, vise \u00e0 cr\u00e9er un million d\'hectares de nature sauvage en Europe. Dans le delta du Danube, des chevaux Konik et des bovins de Heck remplacent les grands herbivores disparus. En Espagne, le vautour fauve et le lynx ib\u00e9rique ont \u00e9t\u00e9 r\u00e9introduits avec succ\u00e8s.',
                'Au Royaume-Uni, le domaine de Knepp (1 400 hectares dans le Sussex) est devenu un mod\u00e8le de rewilding. Ancienne ferme intensive d\u00e9ficitaire, le domaine a \u00e9t\u00e9 laiss\u00e9 \u00e0 la nature en 2001. En vingt ans, la biodiversit\u00e9 a explos\u00e9 : retour de la cigogne blanche, des rossignols, des tortues et de nombreuses esp\u00e8ces de papillons rares.',
                'Le rewilding marin est une approche \u00e9mergente. La restauration des herbiers de posidonie en M\u00e9diterran\u00e9e, la r\u00e9introduction des hu\u00eetres plates dans les estuaires europ\u00e9ens et la cr\u00e9ation de r\u00e9serves marines int\u00e9grales contribuent \u00e0 restaurer les \u00e9cosyst\u00e8mes c\u00f4tiers et \u00e0 renforcer la r\u00e9silience face au changement climatique.'
              ],
              highlight: 'Le domaine de Knepp au Royaume-Uni est pass\u00e9 de ferme intensive d\u00e9ficitaire \u00e0 sanctuaire de biodiversit\u00e9 en 20 ans.'
            },
            {
              title: 'Les d\u00e9fis et controverses',
              paragraphs: [
                'Le rewilding suscite des controverses, notamment autour de la r\u00e9introduction des grands pr\u00e9dateurs. Le retour du loup en France g\u00e9n\u00e8re des conflits avec les \u00e9leveurs. Les attaques sur les troupeaux, bien que compens\u00e9es financi\u00e8rement, provoquent une opposition f\u00e9roce. La coexistence entre grands carnivores et activit\u00e9s pastorales reste un d\u00e9fi majeur.',
                'Des projets plus audacieux, comme la \u00ab d\u00e9-extinction \u00bb d\'esp\u00e8ces disparues, alimentent les d\u00e9bats. La soci\u00e9t\u00e9 Colossal Biosciences travaille sur la r\u00e9surrection du mammouth laineux par \u00e9dition g\u00e9n\u00e9tique, dans le but de restaurer les \u00e9cosyst\u00e8mes de toundra sib\u00e9rienne. Les critiques soulignent les risques \u00e9cologiques et \u00e9thiques de telles entreprises.'
              ],
              highlight: 'La coexistence entre grands pr\u00e9dateurs r\u00e9introduits et activit\u00e9s humaines reste le principal d\u00e9fi du rewilding.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'une esp\u00e8ce cl\u00e9 de vo\u00fbte ?', opts: ['L\'esp\u00e8ce la plus abondante', 'Une esp\u00e8ce ayant un r\u00f4le disproportionn\u00e9 dans l\'\u00e9cosyst\u00e8me', 'L\'esp\u00e8ce la plus grande', 'Une esp\u00e8ce end\u00e9mique'], correct: 1, explanation: 'Une esp\u00e8ce cl\u00e9 de vo\u00fbte joue un r\u00f4le \u00e9cologique disproportionn\u00e9 par rapport \u00e0 son abondance, comme le castor ou le loup.' },
            { q: 'Quel animal a transform\u00e9 l\'\u00e9cosyst\u00e8me de Yellowstone lors de sa r\u00e9introduction ?', opts: ['L\'ours grizzly', 'Le bison', 'Le loup gris', 'L\'aigle royal'], correct: 2, explanation: 'La r\u00e9introduction du loup gris en 1995 a d\u00e9clench\u00e9 une cascade trophique qui a transform\u00e9 l\'ensemble de l\'\u00e9cosyst\u00e8me de Yellowstone.' },
            { q: 'Quel est le principal objectif du rewilding ?', opts: ['Recr\u00e9er un \u00e9cosyst\u00e8me du pass\u00e9', 'Restaurer la capacit\u00e9 d\'auto-r\u00e9gulation de la nature', 'Cr\u00e9er des zoos en plein air', 'Augmenter la production agricole'], correct: 1, explanation: 'Le rewilding vise \u00e0 restaurer les processus \u00e9cologiques naturels pour que la nature puisse se r\u00e9g\u00e9n\u00e9rer par elle-m\u00eame.' }
          ],
          definitions: [
            { term: 'Rewilding', def: 'Approche de conservation visant \u00e0 restaurer les \u00e9cosyst\u00e8mes en r\u00e9duisant l\'intervention humaine et en r\u00e9introduisant des esp\u00e8ces cl\u00e9s.' },
            { term: 'Esp\u00e8ce cl\u00e9 de vo\u00fbte', def: 'Esp\u00e8ce dont le r\u00f4le \u00e9cologique est disproportionn\u00e9 par rapport \u00e0 son abondance, et dont la disparition transforme radicalement l\'\u00e9cosyst\u00e8me.' },
            { term: 'Cascade trophique', def: 'Effet en cha\u00eene provoqu\u00e9 par un changement au sommet de la cha\u00eene alimentaire, qui se r\u00e9percute sur tous les niveaux inf\u00e9rieurs.' },
            { term: 'D\u00e9faunation', def: 'Disparition des grands animaux d\'un \u00e9cosyst\u00e8me, entra\u00eenant la perte de processus \u00e9cologiques essentiels.' },
            { term: 'D\u00e9-extinction', def: 'Projet visant \u00e0 ressusciter des esp\u00e8ces \u00e9teintes par des techniques de bio-ing\u00e9nierie, comme l\'\u00e9dition g\u00e9n\u00e9tique ou le clonage.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le retour du loup \u00e0 Yellowstone a m\u00eame modifi\u00e9 le cours des rivi\u00e8res : en r\u00e9gul ant les cerfs, les loups ont permis la repousse des saules, dont les racines ont stabilis\u00e9 les berges.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le castor europ\u00e9en, presque \u00e9teint au d\u00e9but du XXe si\u00e8cle (environ 1 200 individus), a \u00e9t\u00e9 r\u00e9introduit avec succ\u00e8s dans de nombreux pays et compte d\u00e9sormais plus d\'un million d\'individus.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Plioc\u00e8ne Park, en Sib\u00e9rie, est un projet de rewilding qui tente de restaurer la steppe \u00e0 mammouths en r\u00e9introduisant des bisons, des chevaux et des boeufs musqu\u00e9s pour stabiliser le permafrost.' }
          ]
        }
      ]
    },
    // ==================== HUB 4 : Ressources naturelles ====================
    {
      slug: 'ressources-naturelles',
      title: 'Ressources naturelles',
      description: 'L\'exploitation des ressources plan\u00e9taires, les limites de la biosph\u00e8re et la surexploitation.',
      lessons: [
        // --- Lesson 4.1 : L'eau douce ---
        {
          slug: 'eau-douce',
          title: 'L\'eau douce, ressource vitale',
          description: 'La r\u00e9partition, l\'utilisation et la rar\u00e9faction de l\'eau douce dans le monde.',
          intro: 'L\'eau douce ne repr\u00e9sente que 2,5 % de toute l\'eau terrestre, et les deux tiers sont emprisonn\u00e9s dans les glaciers et les calottes polaires. Seulement 0,3 % de l\'eau douce est directement accessible en surface (lacs, rivi\u00e8res). Cette ressource vitale, in\u00e9galement r\u00e9partie, est menac\u00e9e par la surexploitation, la pollution et le changement climatique.',
          introHighlight: 'Seulement 0,3 % de l\'eau douce terrestre est directement accessible, et sa r\u00e9partition est tr\u00e8s in\u00e9gale.',
          intro2: '',
          sections: [
            {
              title: 'Le cycle de l\'eau et la r\u00e9partition mondiale',
              paragraphs: [
                'Le cycle hydrologique redistribue en permanence l\'eau entre les oc\u00e9ans, l\'atmosph\u00e8re et les continents par \u00e9vaporation, condensation et pr\u00e9cipitations. Chaque ann\u00e9e, environ 505 000 km\u00b3 d\'eau s\'\u00e9vaporent des oc\u00e9ans et 72 000 km\u00b3 des continents. Les pr\u00e9cipitations terrestres s\'\u00e9l\u00e8vent \u00e0 environ 119 000 km\u00b3 par an.',
                'La r\u00e9partition de l\'eau douce est tr\u00e8s in\u00e9gale : le Br\u00e9sil, la Russie, le Canada et la Chine d\u00e9tiennent \u00e0 eux seuls 40 % des r\u00e9serves mondiales d\'eau douce renouvelable. \u00c0 l\'inverse, le Moyen-Orient et l\'Afrique du Nord ne disposent que de 1 % des ressources pour 6 % de la population mondiale.',
                'Les nappes phr\u00e9atiques constituent une r\u00e9serve cruciale : elles fournissent environ 33 % de l\'eau douce utilis\u00e9e dans le monde. Cependant, de nombreux aquif\u00e8res sont exploit\u00e9s \u00e0 un rythme sup\u00e9rieur \u00e0 leur recharge naturelle. L\'aquif\u00e8re d\'Ogallala aux \u00c9tats-Unis, qui irrigue le grenier \u00e0 bl\u00e9 du pays, pourrait \u00eatre \u00e9puis\u00e9 en quelques d\u00e9cennies.'
              ],
              highlight: 'Les nappes phr\u00e9atiques fournissent 33 % de l\'eau douce utilis\u00e9e, mais beaucoup sont surexploit\u00e9es.'
            },
            {
              title: 'Les usages et la consommation',
              paragraphs: [
                'L\'agriculture est de loin le plus gros consommateur d\'eau douce, repr\u00e9sentant 70 % des pr\u00e9l\u00e8vements mondiaux. L\'industrie en utilise 19 % et les usages domestiques 11 %. L\'irrigation est particuli\u00e8rement gourmande : produire un kilogramme de riz n\u00e9cessite environ 2 500 litres d\'eau, un kilogramme de b\u0153uf environ 15 000 litres.',
                'Le concept d\'eau virtuelle mesure la quantit\u00e9 d\'eau n\u00e9cessaire \u00e0 la production d\'un bien. Le commerce international de produits agricoles repr\u00e9sente un transfert massif d\'eau virtuelle des r\u00e9gions humides vers les r\u00e9gions arides. Un Fran\u00e7ais consomme en moyenne 4 900 litres d\'eau par jour en tenant compte de cette eau virtuelle, dont seuls 150 litres correspondent \u00e0 un usage domestique direct.'
              ],
              highlight: 'L\'agriculture consomme 70 % de l\'eau douce mondiale. Produire 1 kg de b\u0153uf n\u00e9cessite 15 000 litres d\'eau.'
            },
            {
              title: 'Le stress hydrique et les conflits',
              paragraphs: [
                'En 2024, environ 2,3 milliards de personnes vivent dans des pays soumis au stress hydrique (moins de 1 700 m\u00b3 d\'eau douce renouvelable par habitant et par an). Ce chiffre pourrait atteindre 5 milliards d\'ici 2050, en raison de la croissance d\u00e9mographique, de l\'urbanisation et du changement climatique.',
                'L\'eau est un facteur de tensions g\u00e9opolitiques croissantes. Les bassins transfrontaliers (263 dans le monde, partag\u00e9s par 148 pays) sont des sources potentielles de conflits. Le Nil, le Jourdain, le Tigre et l\'Euphrate sont des exemples de cours d\'eau o\u00f9 la comp\u00e9tition pour l\'eau alimente les rivalit\u00e9s r\u00e9gionales. Le barrage de la Renaissance en \u00c9thiopie cristallise les tensions avec l\'\u00c9gypte et le Soudan.'
              ],
              highlight: '2,3 milliards de personnes vivent en situation de stress hydrique, un chiffre qui pourrait doubler d\'ici 2050.'
            }
          ],
          quiz: [
            { q: 'Quel secteur consomme le plus d\'eau douce dans le monde ?', opts: ['L\'industrie', 'Les m\u00e9nages', 'L\'agriculture', 'L\'\u00e9nergie'], correct: 2, explanation: 'L\'agriculture repr\u00e9sente 70 % des pr\u00e9l\u00e8vements mondiaux d\'eau douce, principalement pour l\'irrigation.' },
            { q: 'Combien de litres d\'eau faut-il pour produire 1 kg de b\u0153uf ?', opts: ['1 500 litres', '5 000 litres', '15 000 litres', '50 000 litres'], correct: 2, explanation: 'La production d\'un kilogramme de b\u0153uf n\u00e9cessite environ 15 000 litres d\'eau, en comptant l\'alimentation animale et l\'abreuvement.' },
            { q: 'Quel pourcentage de l\'eau terrestre est de l\'eau douce ?', opts: ['0,3 %', '2,5 %', '10 %', '25 %'], correct: 1, explanation: 'L\'eau douce ne repr\u00e9sente que 2,5 % de toute l\'eau terrestre, dont les deux tiers sont pi\u00e9g\u00e9s dans les glaces.' }
          ],
          definitions: [
            { term: 'Stress hydrique', def: 'Situation dans laquelle la demande en eau d\u00e9passe les ressources disponibles ou lorsque la qualit\u00e9 de l\'eau limite son utilisation (seuil : moins de 1 700 m\u00b3/hab/an).' },
            { term: 'Eau virtuelle', def: 'Volume total d\'eau n\u00e9cessaire \u00e0 la production d\'un bien ou d\'un service, de la mati\u00e8re premi\u00e8re au produit fini.' },
            { term: 'Aquif\u00e8re', def: 'Formation g\u00e9ologique souterraine permeable capable de stocker et de transmettre des quantit\u00e9s significatives d\'eau.' },
            { term: 'Cycle hydrologique', def: 'Circulation continue de l\'eau entre les oc\u00e9ans, l\'atmosph\u00e8re, les eaux de surface, les eaux souterraines et la biosph\u00e8re.' },
            { term: 'Bassin transfrontalier', def: 'Bassin hydrographique partag\u00e9 par deux ou plusieurs pays, n\u00e9cessitant une gestion coop\u00e9rative de la ressource en eau.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La mer d\'Aral, autrefois quatri\u00e8me plus grand lac du monde, a perdu 90 % de sa surface en 50 ans \u00e0 cause du d\u00e9tournement de ses affluents pour irriguer des champs de coton en Asie centrale.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un robinet qui goutte gaspille environ 120 litres d\'eau par jour, soit plus de 43 000 litres par an.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La ville du Cap en Afrique du Sud a fr\u00f4l\u00e9 le \u00ab Day Zero \u00bb en 2018, date \u00e0 laquelle l\'eau courante aurait d\u00fb \u00eatre coup\u00e9e pour ses 4 millions d\'habitants.' }
          ]
        },
        // --- Lesson 4.2 : Les énergies fossiles ---
        {
          slug: 'energies-fossiles',
          title: 'Les \u00e9nergies fossiles',
          description: 'Le charbon, le p\u00e9trole et le gaz naturel : formation, exploitation et d\u00e9clin.',
          intro: 'Les \u00e9nergies fossiles (charbon, p\u00e9trole, gaz naturel) fournissent environ 80 % de l\'\u00e9nergie primaire mondiale. Form\u00e9es sur des millions d\'ann\u00e9es \u00e0 partir de mati\u00e8re organique enfouie, ces ressources non renouvelables sont les principales responsables des \u00e9missions de GES et donc du changement climatique.',
          introHighlight: 'Les \u00e9nergies fossiles fournissent 80 % de l\'\u00e9nergie mondiale et sont responsables de 75 % des \u00e9missions de GES.',
          intro2: '',
          sections: [
            {
              title: 'La formation et les r\u00e9serves',
              paragraphs: [
                'Le charbon s\'est form\u00e9 principalement au Carbonif\u00e8re (il y a 300 \u00e0 360 millions d\'ann\u00e9es) \u00e0 partir de for\u00eats tropicales ensevelies sous les s\u00e9diments. Les r\u00e9serves mondiales prouv\u00e9es de charbon sont estim\u00e9es \u00e0 environ 1 074 milliards de tonnes, suffisantes pour plus de 130 ans au rythme de consommation actuel.',
                'Le p\u00e9trole et le gaz naturel se sont form\u00e9s \u00e0 partir de plancton marin enfoui dans les s\u00e9diments oc\u00e9aniques sur des dizaines de millions d\'ann\u00e9es. Les r\u00e9serves prouv\u00e9es de p\u00e9trole conventionnel s\'\u00e9l\u00e8vent \u00e0 environ 1 700 milliards de barils, soit environ 50 ans de consommation. Le gaz naturel offre des perspectives similaires.',
                'Le concept de pic p\u00e9trolier (peak oil), formul\u00e9 par le g\u00e9ologue Marion King Hubbert en 1956, d\u00e9signe le moment o\u00f9 la production mondiale de p\u00e9trole atteint son maximum avant de d\u00e9cliner. Si le pic du p\u00e9trole conventionnel a probablement \u00e9t\u00e9 atteint vers 2006, l\'exploitation des hydrocarbures non conventionnels (p\u00e9trole de schiste, sables bitumineux) a repouss\u00e9 le pic total.'
              ],
              highlight: 'Le charbon s\'est form\u00e9 sur des millions d\'ann\u00e9es, mais l\'humanit\u00e9 br\u00fble en un si\u00e8cle ce que la nature a cr\u00e9\u00e9 en 300 millions d\'ann\u00e9es.'
            },
            {
              title: 'Les impacts environnementaux',
              paragraphs: [
                'La combustion des \u00e9nergies fossiles est responsable d\'environ 75 % des \u00e9missions mondiales de GES. Le charbon est le combustible le plus \u00e9metteur (environ 1 000 g CO\u2082/kWh), suivi du p\u00e9trole (environ 700 g) et du gaz naturel (environ 400 g). Malgr\u00e9 les engagements climatiques, la consommation mondiale de charbon a atteint un record historique en 2023.',
                'L\'extraction des \u00e9nergies fossiles cause \u00e9galement des d\u00e9gats environnementaux majeurs : d\u00e9forestation et d\u00e9gradation des paysages (mines \u00e0 ciel ouvert), pollution de l\'eau (fracturation hydraulique, mar\u00e9es noires), et \u00e9missions de m\u00e9thane fugitif. L\'explosion de la plateforme Deepwater Horizon en 2010 a d\u00e9vers\u00e9 780 millions de litres de p\u00e9trole dans le golfe du Mexique.'
              ],
              highlight: 'Le charbon \u00e9met environ 1 000 g de CO\u2082 par kWh, soit 2,5 fois plus que le gaz naturel.'
            },
            {
              title: 'Les actifs \u00e9chou\u00e9s et la transition',
              paragraphs: [
                'Pour respecter l\'objectif de 1,5 \u00b0C, environ 60 % des r\u00e9serves de p\u00e9trole et de gaz et 90 % des r\u00e9serves de charbon doivent rester dans le sol. Ces r\u00e9serves inexploitables deviennent des \u00ab actifs \u00e9chou\u00e9s \u00bb (stranded assets), repr\u00e9sentant un risque financier majeur pour les compagnies p\u00e9troli\u00e8res et les pays producteurs.',
                'Malgr\u00e9 la croissance rapide des \u00e9nergies renouvelables, la consommation d\'\u00e9nergies fossiles n\'a pas encore commenc\u00e9 \u00e0 d\u00e9cliner en termes absolus. Lors de la COP28 (2023), les pays ont pour la premi\u00e8re fois appel\u00e9 \u00e0 \u00ab transitionner hors des \u00e9nergies fossiles \u00bb, mais sans fixer de calendrier contraignant.'
              ],
              highlight: '60 % du p\u00e9trole et du gaz et 90 % du charbon doivent rester dans le sol pour limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C.'
            }
          ],
          quiz: [
            { q: 'Quelle \u00e9nergie fossile \u00e9met le plus de CO\u2082 par kWh ?', opts: ['Le gaz naturel', 'Le p\u00e9trole', 'Le charbon', 'Le bois'], correct: 2, explanation: 'Le charbon est le combustible fossile le plus \u00e9metteur, avec environ 1 000 g CO\u2082/kWh contre 400 g pour le gaz naturel.' },
            { q: 'Quel pourcentage des r\u00e9serves de charbon doit rester dans le sol pour respecter +1,5 \u00b0C ?', opts: ['50 %', '70 %', '80 %', '90 %'], correct: 3, explanation: 'Environ 90 % des r\u00e9serves de charbon doivent rester inexploit\u00e9es pour limiter le r\u00e9chauffement \u00e0 1,5 \u00b0C.' },
            { q: 'Qu\'est-ce que le pic p\u00e9trolier ?', opts: ['Le prix maximal du p\u00e9trole', 'Le moment o\u00f9 la production atteint son maximum', 'La d\u00e9couverte du plus grand gisement', 'Le record de consommation'], correct: 1, explanation: 'Le pic p\u00e9trolier d\u00e9signe le moment o\u00f9 la production mondiale de p\u00e9trole atteint son maximum avant de d\u00e9cliner irr\u00e9versiblement.' }
          ],
          definitions: [
            { term: 'Pic p\u00e9trolier', def: 'Moment th\u00e9orique o\u00f9 la production mondiale de p\u00e9trole atteint son maximum avant de d\u00e9cliner d\u00e9finitivement en raison de l\'\u00e9puisement des r\u00e9serves.' },
            { term: 'Actifs \u00e9chou\u00e9s', def: 'Ressources fossiles qui deviennent inexploitables pour respecter les objectifs climatiques, repr\u00e9sentant une perte financi\u00e8re pour leurs d\u00e9tenteurs.' },
            { term: 'Fracturation hydraulique', def: 'Technique d\'extraction consistant \u00e0 injecter de l\'eau \u00e0 haute pression dans la roche pour lib\u00e9rer le p\u00e9trole ou le gaz de schiste pi\u00e9g\u00e9 dans les fissures.' },
            { term: 'Hydrocarbures non conventionnels', def: 'P\u00e9trole et gaz extraits par des m\u00e9thodes sp\u00e9ciales (fracturation, extraction \u00e0 la vapeur) en raison de leur pi\u00e9geage dans des roches peu perm\u00e9ables.' },
            { term: '\u00c9nergie primaire', def: '\u00c9nergie contenue dans les ressources naturelles avant toute transformation (p\u00e9trole brut, gaz naturel, charbon, rayonnement solaire, vent).' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le monde consomme environ 100 millions de barils de p\u00e9trole par jour, soit l\'\u00e9quivalent de 16 milliards de litres, ou assez pour remplir 6 400 piscines olympiques chaque jour.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les cinq plus grandes compagnies p\u00e9troli\u00e8res (ExxonMobil, Shell, Chevron, BP, TotalEnergies) ont g\u00e9n\u00e9r\u00e9 plus de 200 milliards de dollars de b\u00e9n\u00e9fices en 2022.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les subventions mondiales aux \u00e9nergies fossiles ont atteint 7 000 milliards de dollars en 2022 selon le FMI, soit 7,1 % du PIB mondial.' }
          ]
        },
        // --- Lesson 4.3 : Les minerais et métaux ---
        {
          slug: 'minerais-metaux',
          title: 'Les minerais et m\u00e9taux',
          description: 'L\'extraction mini\u00e8re, les m\u00e9taux critiques et les enjeux g\u00e9opolitiques des ressources min\u00e9rales.',
          intro: 'L\'extraction de minerais et de m\u00e9taux est un pilier de l\'\u00e9conomie mondiale, mais aussi l\'une des activit\u00e9s les plus destructrices pour l\'environnement. La transition \u00e9nerg\u00e9tique accentue la demande de m\u00e9taux critiques (lithium, cobalt, terres rares), cr\u00e9ant de nouveaux d\u00e9fis g\u00e9opolitiques et environnementaux.',
          introHighlight: 'La transition \u00e9nerg\u00e9tique n\u00e9cessite jusqu\'\u00e0 six fois plus de m\u00e9taux que le syst\u00e8me \u00e9nerg\u00e9tique fossile actuel.',
          intro2: '',
          sections: [
            {
              title: 'L\'industrie mini\u00e8re et ses impacts',
              paragraphs: [
                'L\'humanit\u00e9 extrait environ 90 milliards de tonnes de mati\u00e8res premi\u00e8res par an, dont 44 milliards de tonnes de minerais. L\'extraction mini\u00e8re est responsable de 10 % des \u00e9missions mondiales de GES, consomme 10 % de l\'\u00e9nergie mondiale et utilise d\'\u00e9normes quantit\u00e9s d\'eau.',
                'Les mines \u00e0 ciel ouvert d\u00e9truisent des paysages entiers : la mine de Bingham Canyon aux \u00c9tats-Unis, la plus grande excavation humaine au monde, mesure 4 km de diam\u00e8tre et 1,2 km de profondeur. Les r\u00e9sidus miniers (haldes et bassins de d\u00e9cantation) contiennent des m\u00e9taux lourds et des produits chimiques qui polluent les eaux souterraines pendant des si\u00e8cles.',
                'Le drainage minier acide, ph\u00e9nom\u00e8ne par lequel les sulfures expos\u00e9s lors de l\'extraction s\'oxydent et produisent de l\'acide sulfurique, est l\'un des probl\u00e8mes environnementaux les plus durables : des mines romaines en Espagne g\u00e9n\u00e8rent encore des effluents acides 2 000 ans apr\u00e8s leur abandon.'
              ],
              highlight: 'L\'humanit\u00e9 extrait 90 milliards de tonnes de mati\u00e8res premi\u00e8res par an, un chiffre qui a tripl\u00e9 depuis 1970.'
            },
            {
              title: 'Les m\u00e9taux critiques de la transition \u00e9nerg\u00e9tique',
              paragraphs: [
                'La transition \u00e9nerg\u00e9tique requiert des quantit\u00e9s massives de m\u00e9taux sp\u00e9cifiques. Une voiture \u00e9lectrique n\u00e9cessite environ six fois plus de m\u00e9taux qu\'une voiture thermique : 8 kg de lithium, 14 kg de cobalt, 20 kg de nickel et 50 kg de cuivre pour la batterie seule. Une \u00e9olienne de 3 MW contient environ 4,7 tonnes de cuivre et 600 kg de terres rares.',
                'La g\u00e9opolitique des m\u00e9taux critiques est source de tensions. La Chine contr\u00f4le environ 60 % de l\'extraction et 90 % du raffinage des terres rares. La R\u00e9publique d\u00e9mocratique du Congo produit 70 % du cobalt mondial, souvent dans des conditions de travail pr\u00e9caires incluant le travail des enfants. La course aux gisements de lithium redessine les all\u00e9geances g\u00e9opolitiques en Am\u00e9rique du Sud et en Afrique.'
              ],
              highlight: 'La Chine contr\u00f4le 60 % de l\'extraction et 90 % du raffinage des terres rares, essentielles \u00e0 la transition \u00e9nerg\u00e9tique.'
            },
            {
              title: 'Vers une exploitation plus durable',
              paragraphs: [
                'Le recyclage des m\u00e9taux offre une alternative \u00e0 l\'extraction primaire. L\'aluminium recycl\u00e9 ne n\u00e9cessite que 5 % de l\'\u00e9nergie de production initiale. Cependant, les taux de recyclage restent insuffisants pour de nombreux m\u00e9taux critiques : seulement 1 % du lithium et moins de 5 % des terres rares sont actuellement recycl\u00e9s.',
                'L\'exploitation mini\u00e8re des fonds marins, envisag\u00e9e pour extraire les nodules polym\u00e9talliques riches en mangan\u00e8se, nickel et cobalt, suscite une vive controverse. Les \u00e9cosyst\u00e8mes des grands fonds, encore largement inconnus, pourraient \u00eatre d\u00e9truits de mani\u00e8re irr\u00e9versible. En 2023, plusieurs pays ont demand\u00e9 un moratoire sur cette exploitation.'
              ],
              highlight: 'Seulement 1 % du lithium et moins de 5 % des terres rares sont actuellement recycl\u00e9s.'
            }
          ],
          quiz: [
            { q: 'Combien de m\u00e9taux suppl\u00e9mentaires une voiture \u00e9lectrique n\u00e9cessite-t-elle par rapport \u00e0 une voiture thermique ?', opts: ['Deux fois plus', 'Quatre fois plus', 'Six fois plus', 'Dix fois plus'], correct: 2, explanation: 'Une voiture \u00e9lectrique n\u00e9cessite environ six fois plus de m\u00e9taux qu\'une voiture thermique, principalement pour la batterie.' },
            { q: 'Quel pays domine le raffinage des terres rares ?', opts: ['Les \u00c9tats-Unis', 'L\'Australie', 'La Chine', 'Le Br\u00e9sil'], correct: 2, explanation: 'La Chine contr\u00f4le environ 90 % du raffinage mondial des terres rares, ce qui lui conf\u00e8re un pouvoir g\u00e9opolitique consid\u00e9rable.' },
            { q: 'Quel pourcentage d\'\u00e9nergie le recyclage de l\'aluminium \u00e9conomise-t-il ?', opts: ['50 %', '70 %', '85 %', '95 %'], correct: 3, explanation: 'Le recyclage de l\'aluminium ne n\u00e9cessite que 5 % de l\'\u00e9nergie de production initiale, soit une \u00e9conomie de 95 %.' }
          ],
          definitions: [
            { term: 'M\u00e9taux critiques', def: 'M\u00e9taux essentiels aux technologies de la transition \u00e9nerg\u00e9tique (lithium, cobalt, terres rares) dont l\'approvisionnement pr\u00e9sente des risques g\u00e9opolitiques.' },
            { term: 'Terres rares', def: 'Groupe de 17 \u00e9l\u00e9ments m\u00e9talliques indispensables \u00e0 l\'\u00e9lectronique, aux \u00e9oliennes et aux v\u00e9hicules \u00e9lectriques, dont l\'extraction est domin\u00e9e par la Chine.' },
            { term: 'Drainage minier acide', def: 'Pollution des eaux caus\u00e9e par l\'oxydation des min\u00e9raux sulfur\u00e9s expos\u00e9s lors de l\'extraction mini\u00e8re, produisant de l\'acide sulfurique.' },
            { term: 'Nodule polym\u00e9tallique', def: 'Concr\u00e9tion min\u00e9rale pr\u00e9sente sur les fonds oc\u00e9aniques, riche en mangan\u00e8se, nickel, cobalt et cuivre.' },
            { term: '\u00c9conomie de la fonctionnalit\u00e9', def: 'Mod\u00e8le \u00e9conomique o\u00f9 l\'on vend l\'usage d\'un bien plut\u00f4t que le bien lui-m\u00eame, r\u00e9duisant la demande de mati\u00e8res premi\u00e8res.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un smartphone contient environ 50 m\u00e9taux diff\u00e9rents, dont de l\'or, du platine, du tantale et des terres rares, provenant de mines du monde entier.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les terres rares ne sont en r\u00e9alit\u00e9 pas rares dans la cro\u00fbte terrestre, mais elles sont difficiles \u00e0 extraire car dispers\u00e9es et rarement concentr\u00e9es en gisements exploitables.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le \u00ab triangle du lithium \u00bb (Argentine, Bolivie, Chili) contient plus de 50 % des r\u00e9serves mondiales de lithium, n\u00e9cessaire aux batteries des v\u00e9hicules \u00e9lectriques.' }
          ]
        },
        // --- Lesson 4.4 : Le sol, ressource oubliée ---
        {
          slug: 'sol-ressource',
          title: 'Le sol, ressource oubli\u00e9e',
          description: 'L\'\u00e9rosion, la d\u00e9sertification et la perte de fertilit\u00e9 des sols mondiaux.',
          intro: 'Le sol est une ressource vivante et complexe dont d\u00e9pend 95 % de notre alimentation. Pourtant, sa d\u00e9gradation massive passe largement inaperçue. L\'ONU estime que 24 milliards de tonnes de sol fertile sont perdues chaque ann\u00e9e par l\'\u00e9rosion, l\'agriculture intensive et l\'artificialisation.',
          introHighlight: '24 milliards de tonnes de sol fertile sont perdues chaque ann\u00e9e, mena\u00e7ant la s\u00e9curit\u00e9 alimentaire mondiale.',
          intro2: '',
          sections: [
            {
              title: 'Le sol, un \u00e9cosyst\u00e8me vivant',
              paragraphs: [
                'Le sol n\'est pas une simple couche de terre inerte : c\'est un \u00e9cosyst\u00e8me extraordinairement complexe. Un m\u00e8tre carr\u00e9 de sol sain contient des milliards de bact\u00e9ries, des centaines de millions de champignons, des millions de prot\u00e9es, des milliers de n\u00e9matodes et des centaines de vers de terre et d\'arthropodes. Cette faune du sol recycle la mati\u00e8re organique et rend les nutriments accessibles aux plantes.',
                'Le r\u00e9seau mycorhizien, form\u00e9 par les champignons symbiotiques associ\u00e9s aux racines des plantes, est parfois surnomm\u00e9 le \u00ab Wood Wide Web \u00bb. Il permet aux arbres d\'\u00e9changer des nutriments et des signaux chimiques. Ce r\u00e9seau est d\u00e9truit par le labour profond et les fongicides, affaiblissant la sant\u00e9 des \u00e9cosyst\u00e8mes.',
                'La mati\u00e8re organique du sol (humus) joue un r\u00f4le crucial dans la r\u00e9tention d\'eau, la fertilit\u00e9 et le stockage de carbone. Un sol riche en mati\u00e8re organique peut absorber jusqu\'\u00e0 20 fois son poids en eau, r\u00e9duisant les risques d\'inondation et de s\u00e9cheresse.'
              ],
              highlight: 'Le r\u00e9seau mycorhizien, surnomm\u00e9 \u00ab Wood Wide Web \u00bb, permet aux arbres de communiquer et d\'\u00e9changer des nutriments.'
            },
            {
              title: 'L\'\u00e9rosion et la d\u00e9sertification',
              paragraphs: [
                'L\'\u00e9rosion des sols, acc\u00e9l\u00e9r\u00e9e par la d\u00e9forestation, le surp\u00e2turage et l\'agriculture intensive, d\u00e9passe de 10 \u00e0 100 fois le taux naturel de formation des sols. \u00c0 ce rythme, les terres arables pourraient perdre l\'essentiel de leur couche fertile en moins d\'un si\u00e8cle dans les r\u00e9gions les plus touch\u00e9es.',
                'La d\u00e9sertification affecte 40 % des terres \u00e9merg\u00e9es et menace directement les moyens de subsistance de 1,5 milliard de personnes. Le Sahel, bande semi-aride bordant le Sahara, est l\'une des r\u00e9gions les plus vuln\u00e9rables : la combinaison de la s\u00e9cheresse, du surp\u00e2turage et de la croissance d\u00e9mographique y provoque une d\u00e9gradation acc\u00e9l\u00e9r\u00e9e des sols.',
                'La Grande Muraille Verte, projet lanc\u00e9 par l\'Union africaine en 2007, vise \u00e0 restaurer 100 millions d\'hectares de terres d\u00e9grad\u00e9es en plantant une bande de v\u00e9g\u00e9tation de 8 000 km traversant l\'Afrique d\'ouest en est, du S\u00e9n\u00e9gal \u00e0 Djibouti.'
              ],
              highlight: 'La d\u00e9sertification affecte 40 % des terres \u00e9merg\u00e9es et menace 1,5 milliard de personnes.'
            },
            {
              title: 'L\'agriculture intensive et la perte de fertilit\u00e9',
              paragraphs: [
                'L\'agriculture intensive d\u00e9grade les sols de multiples mani\u00e8res : le labour r\u00e9p\u00e9t\u00e9 d\u00e9truit la structure du sol et acc\u00e9l\u00e8re l\'oxydation de la mati\u00e8re organique ; les monocultures \u00e9puisent les nutriments sp\u00e9cifiques ; les pesticides d\u00e9ciment la faune du sol ; le tassement par les machines lourdes r\u00e9duit la porosit\u00e9 et l\'infiltration de l\'eau.',
                'Depuis les ann\u00e9es 1960, les sols agricoles europ\u00e9ens ont perdu en moyenne un tiers de leur mati\u00e8re organique. Cette perte r\u00e9duit la fertilit\u00e9 naturelle et cr\u00e9e une d\u00e9pendance croissante aux engrais chimiques, dans un cercle vicieux d\'appauvrissement.'
              ],
              highlight: 'Les sols agricoles europ\u00e9ens ont perdu en moyenne un tiers de leur mati\u00e8re organique depuis les ann\u00e9es 1960.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage de notre alimentation d\u00e9pend directement des sols ?', opts: ['50 %', '75 %', '90 %', '95 %'], correct: 3, explanation: '95 % de notre alimentation d\u00e9pend directement ou indirectement des sols, qui portent les cultures et nourrissent les p\u00e2turages.' },
            { q: 'Qu\'est-ce que le \u00ab Wood Wide Web \u00bb ?', opts: ['Un site internet sur les for\u00eats', 'Le r\u00e9seau mycorhizien souterrain', 'Un programme de reforestation', 'Un r\u00e9seau de surveillance des for\u00eats'], correct: 1, explanation: 'Le \u00ab Wood Wide Web \u00bb d\u00e9signe le r\u00e9seau mycorhizien form\u00e9 par les champignons qui relie les racines des arbres et permet l\'\u00e9change de nutriments.' },
            { q: 'Combien de terres sont affect\u00e9es par la d\u00e9sertification ?', opts: ['10 %', '20 %', '30 %', '40 %'], correct: 3, explanation: 'La d\u00e9sertification affecte environ 40 % des terres \u00e9merg\u00e9es de la plan\u00e8te.' }
          ],
          definitions: [
            { term: '\u00c9rosion des sols', def: 'Processus de d\u00e9gradation et de transport de la couche sup\u00e9rieure du sol par l\'eau, le vent ou les activit\u00e9s humaines.' },
            { term: 'D\u00e9sertification', def: 'D\u00e9gradation des terres dans les zones arides, semi-arides et subhumides s\u00e8ches, r\u00e9sultant de facteurs climatiques et d\'activit\u00e9s humaines.' },
            { term: 'R\u00e9seau mycorhizien', def: 'R\u00e9seau souterrain form\u00e9 par les hyphes des champignons mycorhiziens, reliant les racines de diff\u00e9rentes plantes et facilitant l\'\u00e9change de nutriments.' },
            { term: 'Humus', def: 'Mati\u00e8re organique stabilis\u00e9e du sol, r\u00e9sultant de la d\u00e9composition des d\u00e9bris v\u00e9g\u00e9taux et animaux, essentielle \u00e0 la fertilit\u00e9.' },
            { term: 'Grande Muraille Verte', def: 'Projet de l\'Union africaine visant \u00e0 restaurer 100 millions d\'hectares de terres d\u00e9grad\u00e9es sur 8 000 km \u00e0 travers le Sahel.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les vers de terre brassent environ 40 tonnes de terre par hectare et par an, a\u00e9rant le sol et facilitant l\'infiltration de l\'eau.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Dust Bowl am\u00e9ricain des ann\u00e9es 1930, caus\u00e9 par le labour excessif des Grandes Plaines, a provoqu\u00e9 la migration de 2,5 millions de personnes et reste la plus grande catastrophe \u00e9cologique agricole de l\'histoire.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un sol sain peut contenir plus de carbone que la for\u00eat qui pousse dessus : le stock de carbone souterrain est souvent deux \u00e0 trois fois sup\u00e9rieur au stock a\u00e9rien.' }
          ]
        },
        // --- Lesson 4.5 : La surexploitation ---
        {
          slug: 'surexploitation',
          title: 'La surexploitation des ressources',
          description: 'Les limites plan\u00e9taires, le jour du d\u00e9passement et l\'empreinte \u00e9cologique.',
          intro: 'L\'humanit\u00e9 consomme actuellement les ressources de 1,75 plan\u00e8te Terre par an. Cette surexploitation syst\u00e9matique, mesur\u00e9e par des indicateurs comme l\'empreinte \u00e9cologique et les limites plan\u00e9taires, met en p\u00e9ril les \u00e9quilibres naturels qui soutiennent la vie sur Terre.',
          introHighlight: 'L\'humanit\u00e9 consomme les ressources de 1,75 Terre par an, d\u00e9passant la capacit\u00e9 de r\u00e9g\u00e9n\u00e9ration de la plan\u00e8te.',
          intro2: '',
          sections: [
            {
              title: 'L\'empreinte \u00e9cologique et le jour du d\u00e9passement',
              paragraphs: [
                'L\'empreinte \u00e9cologique mesure la surface de terre et de mer n\u00e9cessaire pour produire les ressources consomm\u00e9es par une population et absorber ses d\u00e9chets. En 2024, l\'empreinte \u00e9cologique mondiale d\u00e9passe la biocapacit\u00e9 de la Terre de 75 %. Si tous les humains vivaient comme un Fran\u00e7ais, il faudrait 2,9 plan\u00e8tes ; comme un Am\u00e9ricain, 5,1 plan\u00e8tes.',
                'Le Jour du d\u00e9passement de la Terre (Earth Overshoot Day) marque la date \u00e0 laquelle l\'humanit\u00e9 a consomm\u00e9 toutes les ressources que la plan\u00e8te peut renouveler en un an. En 2024, cette date tombe d\u00e9but ao\u00fbt, ce qui signifie que nous vivons \u00e0 cr\u00e9dit pendant cinq mois. Dans les ann\u00e9es 1970, le jour du d\u00e9passement tombait fin d\u00e9cembre.',
                'Les in\u00e9galit\u00e9s d\'empreinte \u00e9cologique sont \u00e9normes : les 10 % les plus riches de la population mondiale sont responsables de 50 % des \u00e9missions de CO\u2082, tandis que les 50 % les plus pauvres n\'en \u00e9mettent que 12 %. La question de la justice environnementale est donc indissociable de la question sociale.'
              ],
              highlight: 'Si tous les humains vivaient comme un Fran\u00e7ais, il faudrait 2,9 plan\u00e8tes ; comme un Am\u00e9ricain, 5,1 plan\u00e8tes.'
            },
            {
              title: 'Les limites plan\u00e9taires',
              paragraphs: [
                'En 2009, le chercheur su\u00e9dois Johan Rockstr\u00f6m a d\u00e9fini neuf limites plan\u00e9taires, des seuils que l\'humanit\u00e9 ne doit pas franchir pour maintenir des conditions de vie stables sur Terre. En 2023, six des neuf limites sont d\u00e9j\u00e0 d\u00e9pass\u00e9es : le changement climatique, l\'\u00e9rosion de la biodiversit\u00e9, la perturbation des cycles de l\'azote et du phosphore, le changement d\'usage des sols, la pollution chimique et le cycle de l\'eau douce.',
                'Les trois limites non encore d\u00e9pass\u00e9es sont l\'acidification des oc\u00e9ans, la charge en a\u00e9rosols atmosph\u00e9riques et l\'appauvrissement de la couche d\'ozone stratosph\u00e9rique. Ce cadre conceptuel est devenu un outil de r\u00e9f\u00e9rence pour les politiques de d\u00e9veloppement durable, bien qu\'il soit d\u00e9battu pour la difficult\u00e9 de quantifier certains seuils.'
              ],
              highlight: 'Six des neuf limites plan\u00e9taires sont d\u00e9j\u00e0 d\u00e9pass\u00e9es, mettant en p\u00e9ril la stabilit\u00e9 du syst\u00e8me Terre.'
            },
            {
              title: 'Vers un mod\u00e8le soutenable',
              paragraphs: [
                'Le mod\u00e8le du \u00ab Donut \u00bb, propos\u00e9 par l\'\u00e9conomiste Kate Raworth, combine les limites plan\u00e9taires (plafond \u00e9cologique) et un plancher social minimal (acc\u00e8s \u00e0 la nourriture, la sant\u00e9, l\'\u00e9ducation, l\'\u00e9nergie). L\'espace s\u00fbr et juste pour l\'humanit\u00e9 se situe entre ces deux limites. Aucun pays au monde ne parvient actuellement \u00e0 satisfaire les besoins fondamentaux de sa population tout en respectant les limites plan\u00e9taires.',
                'La sobri\u00e9t\u00e9 (r\u00e9duction volontaire de la consommation), l\'efficacit\u00e9 (faire mieux avec moins) et l\'\u00e9conomie circulaire (r\u00e9utiliser, r\u00e9parer, recycler) sont les trois leviers compl\u00e9mentaires pour ramener l\'empreinte \u00e9cologique dans les limites plan\u00e9taires. La technologie seule ne suffira pas : un changement de mod\u00e8le \u00e9conomique et de modes de vie est indispensable.'
              ],
              highlight: 'Aucun pays ne parvient \u00e0 satisfaire les besoins de sa population tout en respectant les limites plan\u00e9taires.'
            }
          ],
          quiz: [
            { q: 'Combien de limites plan\u00e9taires sont d\u00e9j\u00e0 d\u00e9pass\u00e9es ?', opts: ['3', '4', '6', '9'], correct: 2, explanation: 'En 2023, six des neuf limites plan\u00e9taires d\u00e9finies par Rockstr\u00f6m sont d\u00e9pass\u00e9es.' },
            { q: 'Combien de plan\u00e8tes faudrait-il si tout le monde vivait comme un Am\u00e9ricain ?', opts: ['2,0', '3,5', '5,1', '7,0'], correct: 2, explanation: 'Si tous les humains avaient le mode de vie d\'un Am\u00e9ricain moyen, il faudrait 5,1 plan\u00e8tes pour subvenir \u00e0 cette demande.' },
            { q: 'Quel est le concept central du \u00ab Donut \u00bb de Kate Raworth ?', opts: ['Maximiser la croissance \u00e9conomique', 'Vivre entre un plancher social et un plafond \u00e9cologique', '\u00c9liminer toute consommation', 'Revenir \u00e0 l\'\u00e2ge pr\u00e9industriel'], correct: 1, explanation: 'Le mod\u00e8le du Donut d\u00e9finit un espace s\u00fbr et juste entre le plancher social (besoins fondamentaux) et le plafond \u00e9cologique (limites plan\u00e9taires).' }
          ],
          definitions: [
            { term: 'Empreinte \u00e9cologique', def: 'Indicateur mesurant la surface bioproductive n\u00e9cessaire pour produire les ressources consomm\u00e9es et absorber les d\u00e9chets g\u00e9n\u00e9r\u00e9s par une population.' },
            { term: 'Jour du d\u00e9passement', def: 'Date \u00e0 laquelle l\'humanit\u00e9 a consomm\u00e9 l\'ensemble des ressources que la plan\u00e8te peut renouveler en un an.' },
            { term: 'Limites plan\u00e9taires', def: 'Neuf seuils \u00e9cologiques d\u00e9finis par Rockstr\u00f6m au-del\u00e0 desquels le syst\u00e8me Terre risque de basculer dans un \u00e9tat instable et hostile.' },
            { term: 'Mod\u00e8le du Donut', def: 'Cadre \u00e9conomique de Kate Raworth d\u00e9finissant un espace s\u00fbr et juste pour l\'humanit\u00e9, entre un plancher social et un plafond \u00e9cologique.' },
            { term: 'Biocapacit\u00e9', def: 'Capacit\u00e9 d\'un \u00e9cosyst\u00e8me \u00e0 produire des ressources biologiques et \u00e0 absorber les d\u00e9chets g\u00e9n\u00e9r\u00e9s par l\'activit\u00e9 humaine.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'En 1970, le Jour du d\u00e9passement tombait le 29 d\u00e9cembre. En 2024, il tombe d\u00e9but ao\u00fbt. L\'humanit\u00e9 s\'enfonce de plus en plus dans le d\u00e9ficit \u00e9cologique.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Qatar a l\'empreinte \u00e9cologique par habitant la plus \u00e9lev\u00e9e du monde : il faudrait plus de 9 plan\u00e8tes si toute l\'humanit\u00e9 vivait comme un Qatari.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La masse de tous les objets fabriqu\u00e9s par l\'homme (b\u00e9ton, acier, plastique) a d\u00e9pass\u00e9 la biomasse totale de tous les \u00eatres vivants de la plan\u00e8te en 2020.' }
          ]
        }
      ]
    },
    // ==================== HUB 5 : Solutions durables ====================
    {
      slug: 'solutions-durables',
      title: 'Solutions et transition \u00e9cologique',
      description: 'Les solutions pour une transition vers un mod\u00e8le de d\u00e9veloppement durable et r\u00e9silient.',
      lessons: [
        // --- Lesson 5.1 : Les énergies renouvelables ---
        {
          slug: 'energies-renouvelables',
          title: 'Les \u00e9nergies renouvelables',
          description: 'Le solaire, l\'\u00e9olien, l\'hydraulique et les autres sources d\'\u00e9nergie propre.',
          intro: 'Les \u00e9nergies renouvelables sont la cl\u00e9 de la d\u00e9carbonation du syst\u00e8me \u00e9nerg\u00e9tique mondial. En 2024, elles repr\u00e9sentent environ 30 % de la production \u00e9lectrique mondiale, et leur croissance s\'acc\u00e9l\u00e8re : la capacit\u00e9 solaire install\u00e9e a \u00e9t\u00e9 multipli\u00e9e par plus de 20 en dix ans.',
          introHighlight: 'Les \u00e9nergies renouvelables fournissent d\u00e9j\u00e0 30 % de l\'\u00e9lectricit\u00e9 mondiale, et leur co\u00fbt a chut\u00e9 de mani\u00e8re spectaculaire.',
          intro2: '',
          sections: [
            {
              title: 'Le solaire photovolta\u00efque',
              paragraphs: [
                'L\'\u00e9nergie solaire photovolta\u00efque convertit directement la lumi\u00e8re du soleil en \u00e9lectricit\u00e9 gr\u00e2ce \u00e0 l\'effet photovolta\u00efque. Le co\u00fbt des panneaux solaires a chut\u00e9 de 99 % depuis 1976, faisant du solaire la source d\'\u00e9lectricit\u00e9 la moins ch\u00e8re de l\'histoire dans de nombreuses r\u00e9gions. En 2023, le monde a install\u00e9 plus de 400 GW de capacit\u00e9 solaire, un record absolu.',
                'Les progr\u00e8s technologiques continuent : les cellules \u00e0 p\u00e9rovskite promettent des rendements sup\u00e9rieurs aux cellules au silicium classiques (26 % contre 22 %) \u00e0 un co\u00fbt inf\u00e9rieur. Les panneaux bifaciaux, qui captent la lumi\u00e8re des deux c\u00f4t\u00e9s, augmentent la production de 10 \u00e0 30 %. L\'agrivolta\u00efsme combine panneaux solaires et cultures agricoles sur les m\u00eames parcelles.',
                'Le principal d\u00e9fi du solaire est son intermittence : la production d\u00e9pend de l\'ensoleillement et s\'arr\u00eate la nuit. Le stockage d\'\u00e9nergie par batteries (lithium-ion, sodium-ion) et le d\u00e9veloppement de r\u00e9seaux \u00e9lectriques intelligents sont essentiels pour g\u00e9rer cette variabilit\u00e9.'
              ],
              highlight: 'Le co\u00fbt du solaire a chut\u00e9 de 99 % depuis 1976, en faisant l\'\u00e9lectricit\u00e9 la moins ch\u00e8re de l\'histoire.'
            },
            {
              title: 'L\'\u00e9olien et les autres renouvelables',
              paragraphs: [
                'L\'\u00e9nergie \u00e9olienne exploite la force du vent pour produire de l\'\u00e9lectricit\u00e9. L\'\u00e9olien terrestre est d\u00e9j\u00e0 comp\u00e9titif avec les \u00e9nergies fossiles dans la plupart des r\u00e9gions. L\'\u00e9olien en mer (offshore), plus co\u00fbteux mais b\u00e9n\u00e9ficiant de vents plus r\u00e9guliers et plus forts, se d\u00e9veloppe rapidement. Les \u00e9oliennes flottantes, qui peuvent \u00eatre install\u00e9es en eaux profondes, ouvrent des perspectives consid\u00e9rables.',
                'L\'hydroelectric it\u00e9 est la premi\u00e8re source d\'\u00e9lectricit\u00e9 renouvelable au monde (15 % de la production \u00e9lectrique globale). Les grands barrages posent cependant des probl\u00e8mes environnementaux : inondation de vall\u00e9es, perturbation des \u00e9cosyst\u00e8mes fluviaux et \u00e9missions de m\u00e9thane par les r\u00e9servoirs tropicaux. La petite hydro\u00e9lectricit\u00e9 (< 10 MW) offre une alternative moins impactante.',
                'La g\u00e9othermie exploite la chaleur du sous-sol terrestre, disponible en permanence et sans intermittence. L\'Islande produit 30 % de son \u00e9lectricit\u00e9 par g\u00e9othermie. L\'\u00e9nergie mar\u00e9motrice et houlomotrice, encore exp\u00e9rimentales, exploitent les mar\u00e9es et les vagues pour produire de l\'\u00e9lectricit\u00e9.'
              ],
              highlight: 'L\'hydro\u00e9lectricit\u00e9 fournit 15 % de l\'\u00e9lectricit\u00e9 mondiale, mais les grands barrages posent des probl\u00e8mes \u00e9cologiques.'
            },
            {
              title: 'Le stockage et les r\u00e9seaux',
              paragraphs: [
                'L\'intermittence des renouvelables impose le d\u00e9veloppement massif du stockage d\'\u00e9nergie. Les batteries lithium-ion dominent actuellement le march\u00e9, avec un co\u00fbt qui a chut\u00e9 de 97 % depuis 1991. Les batteries sodium-ion, sans lithium ni cobalt, \u00e9mergent comme alternative moins co\u00fbteuse. Le stockage par pompage-turbinage (STEP) reste la technologie la plus mature, repr\u00e9sentant 94 % de la capacit\u00e9 mondiale de stockage.',
                'L\'hydrog\u00e8ne vert, produit par \u00e9lectrolyse de l\'eau \u00e0 partir d\'\u00e9lectricit\u00e9 renouvelable, offre une solution pour le stockage saisonnier et la d\u00e9carbonation de l\'industrie lourde, de l\'aviation et du transport maritime. Son co\u00fbt reste \u00e9lev\u00e9 mais diminue rapidement avec la baisse du prix de l\'\u00e9lectricit\u00e9 renouvelable.'
              ],
              highlight: 'Le co\u00fbt des batteries lithium-ion a chut\u00e9 de 97 % depuis 1991, rendant le stockage de plus en plus accessible.'
            }
          ],
          quiz: [
            { q: 'De combien le co\u00fbt du solaire a-t-il chut\u00e9 depuis 1976 ?', opts: ['50 %', '80 %', '95 %', '99 %'], correct: 3, explanation: 'Le co\u00fbt des panneaux solaires a chut\u00e9 de 99 % depuis 1976, gr\u00e2ce aux \u00e9conomies d\'\u00e9chelle et aux progr\u00e8s technologiques.' },
            { q: 'Quelle est la premi\u00e8re source d\'\u00e9lectricit\u00e9 renouvelable au monde ?', opts: ['Le solaire', 'L\'\u00e9olien', 'L\'hydro\u00e9lectricit\u00e9', 'La g\u00e9othermie'], correct: 2, explanation: 'L\'hydro\u00e9lectricit\u00e9 reste la premi\u00e8re source d\'\u00e9lectricit\u00e9 renouvelable, repr\u00e9sentant environ 15 % de la production \u00e9lectrique mondiale.' },
            { q: 'Qu\'est-ce que l\'hydrog\u00e8ne vert ?', opts: ['De l\'hydrog\u00e8ne produit \u00e0 partir de gaz naturel', 'De l\'hydrog\u00e8ne color\u00e9', 'De l\'hydrog\u00e8ne produit par \u00e9lectrolyse avec de l\'\u00e9lectricit\u00e9 renouvelable', 'De l\'hydrog\u00e8ne recycl\u00e9'], correct: 2, explanation: 'L\'hydrog\u00e8ne vert est produit par \u00e9lectrolyse de l\'eau aliment\u00e9e par de l\'\u00e9lectricit\u00e9 d\'origine renouvelable.' }
          ],
          definitions: [
            { term: 'Effet photovolta\u00efque', def: 'Ph\u00e9nom\u00e8ne physique par lequel un mat\u00e9riau semi-conducteur convertit directement la lumi\u00e8re en \u00e9lectricit\u00e9.' },
            { term: 'Intermittence', def: 'Caract\u00e9ristique des sources d\'\u00e9nergie renouvelable (solaire, \u00e9olien) dont la production varie selon les conditions m\u00e9t\u00e9orologiques.' },
            { term: 'Hydrog\u00e8ne vert', def: 'Hydrog\u00e8ne produit par \u00e9lectrolyse de l\'eau \u00e0 partir d\'\u00e9lectricit\u00e9 renouvelable, sans \u00e9mission de CO\u2082.' },
            { term: 'STEP', def: 'Station de transfert d\'\u00e9nergie par pompage, technique de stockage qui pompe l\'eau vers un r\u00e9servoir sup\u00e9rieur pour la turbiner lors des pics de demande.' },
            { term: 'Agrivolta\u00efsme', def: 'Pratique combinant la production d\'\u00e9lectricit\u00e9 solaire et l\'agriculture sur les m\u00eames parcelles, les panneaux prot\u00e9geant les cultures du soleil excessif.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'La quantit\u00e9 d\'\u00e9nergie solaire atteignant la surface de la Terre en une heure suffirait \u00e0 alimenter l\'humanit\u00e9 enti\u00e8re pendant un an.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le plus grand parc \u00e9olien offshore du monde (Hornsea 2, Royaume-Uni) produit assez d\'\u00e9lectricit\u00e9 pour alimenter 1,3 million de foyers.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'En 2023, la Chine a install\u00e9 plus de panneaux solaires que tous les autres pays du monde r\u00e9unis, ajoutant plus de 200 GW de capacit\u00e9.' }
          ]
        },
        // --- Lesson 5.2 : L'économie circulaire ---
        {
          slug: 'economie-circulaire',
          title: 'L\'\u00e9conomie circulaire',
          description: 'Repenser la production et la consommation pour \u00e9liminer le gaspillage.',
          intro: 'L\'\u00e9conomie circulaire rompt avec le mod\u00e8le lin\u00e9aire \u00ab extraire, fabriquer, jeter \u00bb en concevant des produits et des syst\u00e8mes o\u00f9 les d\u00e9chets deviennent des ressources. Ce mod\u00e8le s\'inspire de la nature, o\u00f9 rien ne se perd : les d\u00e9chets d\'un organisme deviennent les nutriments d\'un autre.',
          introHighlight: 'L\'\u00e9conomie circulaire vise le z\u00e9ro d\u00e9chet en transformant chaque r\u00e9sidu en ressource pour un nouveau cycle.',
          intro2: '',
          sections: [
            {
              title: 'Les principes de l\'\u00e9conomie circulaire',
              paragraphs: [
                'L\'\u00e9conomie circulaire repose sur trois principes fondamentaux : \u00e9liminer les d\u00e9chets et la pollution d\u00e8s la conception (\u00e9co-conception), maintenir les produits et mat\u00e9riaux en usage le plus longtemps possible (r\u00e9paration, r\u00e9emploi, reconditionnement), et r\u00e9g\u00e9n\u00e9rer les syst\u00e8mes naturels (compostage, agriculture r\u00e9g\u00e9n\u00e9rative).',
                'La hi\u00e9rarchie des \u00ab R \u00bb guide les priorit\u00e9s : Refuser (le superflu), R\u00e9duire (la consommation), R\u00e9utiliser, R\u00e9parer, Reconditionner, Recycler, et en dernier recours, R\u00e9cup\u00e9rer l\'\u00e9nergie par incin\u00e9ration. Le recyclage, souvent pr\u00e9sent\u00e9 comme la solution principale, n\'est en r\u00e9alit\u00e9 que l\'avant-dernier recours.',
                'L\'\u00e9cologie industrielle applique ces principes \u00e0 l\'\u00e9chelle des territoires : les d\u00e9chets d\'une entreprise deviennent la mati\u00e8re premi\u00e8re d\'une autre. L\'exemple le plus c\u00e9l\u00e8bre est la symbiose industrielle de Kalundborg au Danemark, o\u00f9 une centrale \u00e9lectrique, une raffinerie, une usine pharmaceutique et des exploitations agricoles \u00e9changent leurs flux de mati\u00e8res et d\'\u00e9nergie depuis les ann\u00e9es 1970.'
              ],
              highlight: 'Le recyclage n\'est que l\'avant-dernier recours : la priorit\u00e9 est de r\u00e9duire, r\u00e9utiliser et r\u00e9parer.'
            },
            {
              title: 'L\'obsolescence et le droit \u00e0 la r\u00e9paration',
              paragraphs: [
                'L\'obsolescence programm\u00e9e, strat\u00e9gie consistant \u00e0 limiter volontairement la dur\u00e9e de vie d\'un produit, est un obstacle majeur \u00e0 l\'\u00e9conomie circulaire. La France a \u00e9t\u00e9 le premier pays au monde \u00e0 l\'interdire par la loi en 2015 (loi Hamon), avec des sanctions pouvant atteindre 300 000 euros d\'amende et deux ans d\'emprisonnement.',
                'Le droit \u00e0 la r\u00e9paration progresse : l\'Union europ\u00e9enne a adopt\u00e9 en 2024 un r\u00e8glement obligeant les fabricants \u00e0 fournir des pi\u00e8ces d\u00e9tach\u00e9es pendant une dur\u00e9e minimale et \u00e0 rendre leurs produits plus facilement r\u00e9parables. L\'indice de r\u00e9parabilit\u00e9, obligatoire en France depuis 2021 sur les \u00e9quipements \u00e9lectroniques, informe les consommateurs sur la facilit\u00e9 de r\u00e9paration d\'un produit.'
              ],
              highlight: 'La France est le premier pays \u00e0 avoir p\u00e9nalis\u00e9 l\'obsolescence programm\u00e9e par la loi, d\u00e8s 2015.'
            },
            {
              title: 'Les exemples concrets',
              paragraphs: [
                'L\'\u00e9conomie de la fonctionnalit\u00e9 remplace la vente de produits par la vente d\'un usage. Michelin vend d\u00e9sormais des kilom\u00e8tres parcourus plut\u00f4t que des pneus \u00e0 certains clients, ce qui l\'incite \u00e0 fabriquer des pneus plus durables et \u00e0 les reconditionner. De m\u00eame, Philips propose le \u00ab light as a service \u00bb : l\'entreprise reste propri\u00e9taire de l\'\u00e9clairage et le maintient.',
                'Le vrac, la consigne et les emballages r\u00e9utilisables r\u00e9duisent consid\u00e9rablement les d\u00e9chets d\'emballage, qui repr\u00e9sentent environ 40 % du plastique produit dans le monde. L\'Allemagne a syst\u00e9matis\u00e9 la consigne des bouteilles en plastique, atteignant un taux de retour de 98 %. Plusieurs pays europ\u00e9ens s\'engagent dans cette voie.'
              ],
              highlight: 'L\'Allemagne atteint un taux de retour de 98 % pour ses bouteilles consign\u00e9es, mod\u00e8le d\'\u00e9conomie circulaire.'
            }
          ],
          quiz: [
            { q: 'Dans la hi\u00e9rarchie des \u00ab R \u00bb, quelle action est prioritaire ?', opts: ['Recycler', 'R\u00e9parer', 'R\u00e9duire', 'R\u00e9cup\u00e9rer'], correct: 2, explanation: 'Dans la hi\u00e9rarchie des R, la r\u00e9duction de la consommation est prioritaire sur la r\u00e9paration et le recyclage.' },
            { q: 'Qu\'est-ce que la symbiose industrielle de Kalundborg ?', opts: ['Un parc d\'attractions', 'Un \u00e9cosyst\u00e8me industriel o\u00f9 les d\u00e9chets des uns sont les ressources des autres', 'Une usine de recyclage g\u00e9ante', 'Un accord commercial international'], correct: 1, explanation: 'La symbiose de Kalundborg est un r\u00e9seau d\'entreprises qui \u00e9changent mati\u00e8res et \u00e9nergie, r\u00e9duisant les d\u00e9chets et les co\u00fbts.' },
            { q: 'Quel pays a le premier p\u00e9nalis\u00e9 l\'obsolescence programm\u00e9e ?', opts: ['L\'Allemagne', 'Les \u00c9tats-Unis', 'La France', 'Le Japon'], correct: 2, explanation: 'La France a \u00e9t\u00e9 le premier pays \u00e0 interdire l\'obsolescence programm\u00e9e par la loi Hamon en 2015.' }
          ],
          definitions: [
            { term: '\u00c9conomie circulaire', def: 'Mod\u00e8le \u00e9conomique visant \u00e0 \u00e9liminer le gaspillage en maintenant les produits et mat\u00e9riaux en usage le plus longtemps possible.' },
            { term: 'Obsolescence programm\u00e9e', def: 'Strat\u00e9gie de conception limitant intentionnellement la dur\u00e9e de vie d\'un produit pour en acc\u00e9l\u00e9rer le remplacement.' },
            { term: '\u00c9co-conception', def: 'Approche de conception int\u00e9grant les impacts environnementaux \u00e0 toutes les \u00e9tapes du cycle de vie d\'un produit.' },
            { term: '\u00c9cologie industrielle', def: 'Discipline qui optimise les flux de mati\u00e8res et d\'\u00e9nergie entre entreprises d\'un territoire, imitant les \u00e9cosyst\u00e8mes naturels.' },
            { term: 'Indice de r\u00e9parabilit\u00e9', def: 'Note sur 10 obligatoire en France pour certains produits \u00e9lectroniques, \u00e9valuant la facilit\u00e9 de r\u00e9paration.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Si l\'\u00e9conomie mondiale \u00e9tait enti\u00e8rement circulaire, les \u00e9missions de GES pourraient \u00eatre r\u00e9duites de 39 %, selon la Fondation Ellen MacArthur.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le Japon recycle 84 % de ses canettes en aluminium, le taux le plus \u00e9lev\u00e9 au monde, gr\u00e2ce \u00e0 une culture de tri et de r\u00e9utilisation tr\u00e8s d\u00e9velopp\u00e9e.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les Pays-Bas ambitionnent de devenir la premi\u00e8re \u00e9conomie enti\u00e8rement circulaire d\'ici 2050, avec un objectif interm\u00e9diaire de 50 % de r\u00e9duction de mati\u00e8res premi\u00e8res vierges d\'ici 2030.' }
          ]
        },
        // --- Lesson 5.3 : L'agroécologie ---
        {
          slug: 'agroecologie',
          title: 'L\'agro\u00e9cologie',
          description: 'Produire une alimentation saine tout en pr\u00e9servant les \u00e9cosyst\u00e8mes.',
          intro: 'L\'agro\u00e9cologie propose une alternative \u00e0 l\'agriculture industrielle en s\'appuyant sur les processus \u00e9cologiques naturels plut\u00f4t que sur les intrants chimiques. Elle vise \u00e0 produire une alimentation suffisante, saine et accessible tout en restaurant la biodiversit\u00e9, la fertilit\u00e9 des sols et les cycles de l\'eau.',
          introHighlight: 'L\'agro\u00e9cologie utilise les processus \u00e9cologiques naturels pour produire sans d\u00e9truire les \u00e9cosyst\u00e8mes.',
          intro2: '',
          sections: [
            {
              title: 'Les principes agro\u00e9cologiques',
              paragraphs: [
                'L\'agro\u00e9cologie repose sur plusieurs principes fondamentaux : maximiser la biodiversit\u00e9 (rotations, cultures associ\u00e9es, haies, mares), recycler les nutriments (compostage, engrais verts, int\u00e9gration \u00e9levage-culture), r\u00e9duire la d\u00e9pendance aux intrants ext\u00e9rieurs (pesticides, engrais chimiques), am\u00e9liorer la sant\u00e9 des sols (couverture permanente, non-labour ou travail minimal) et valoriser les savoirs paysans locaux.',
                'La permaculture, l\'agriculture biologique, l\'agriculture de conservation et l\'agroforesterie sont diff\u00e9rentes d\u00e9clinaisons de l\'approche agro\u00e9cologique. L\'agriculture biologique, qui repr\u00e9sente environ 2 % des terres agricoles mondiales, interdit les pesticides et engrais de synth\u00e8se. L\'agroforesterie, qui int\u00e8gre des arbres aux parcelles cultiv\u00e9es, peut augmenter la productivit\u00e9 de 20 \u00e0 40 % tout en stockant du carbone.',
                'Le concept de \u00ab sant\u00e9 unique \u00bb (One Health) relie la sant\u00e9 des sols, des plantes, des animaux et des humains. Les sols sains produisent des aliments plus nutritifs, et l\'abandon des pesticides r\u00e9duit l\'exposition des agriculteurs et des consommateurs \u00e0 des substances toxiques. L\'agro\u00e9cologie est donc une approche holistique qui d\u00e9passe la simple production alimentaire.'
              ],
              highlight: 'L\'agroforesterie peut augmenter la productivit\u00e9 de 20 \u00e0 40 % tout en stockant du carbone et en h\u00e9bergeant la biodiversit\u00e9.'
            },
            {
              title: 'L\'alimentation durable',
              paragraphs: [
                'Le syst\u00e8me alimentaire mondial est responsable d\'environ 30 % des \u00e9missions de GES, dont 14,5 % pour le seul \u00e9levage. R\u00e9duire la consommation de viande, en particulier de b\u0153uf, est le levier alimentaire le plus efficace pour r\u00e9duire l\'empreinte carbone individuelle. Le r\u00e9gime plan\u00e9taire propos\u00e9 par la commission EAT-Lancet recommande de r\u00e9duire la consommation de viande rouge \u00e0 environ 14 g par jour.',
                'Le gaspillage alimentaire repr\u00e9sente un tiers de la production mondiale, soit 1,3 milliard de tonnes de nourriture jet\u00e9e chaque ann\u00e9e. Si le gaspillage alimentaire \u00e9tait un pays, il serait le troisi\u00e8me \u00e9metteur mondial de GES apr\u00e8s la Chine et les \u00c9tats-Unis. La lutte contre le gaspillage passe par une meilleure gestion des stocks, la valorisation des invendus et l\'\u00e9ducation des consommateurs.'
              ],
              highlight: 'Si le gaspillage alimentaire \u00e9tait un pays, il serait le troisi\u00e8me \u00e9metteur mondial de GES.'
            },
            {
              title: 'L\'agro\u00e9cologie peut-elle nourrir le monde ?',
              paragraphs: [
                'La question de savoir si l\'agro\u00e9cologie peut nourrir 10 milliards d\'humains d\'ici 2050 fait d\u00e9bat. Les rendements en agriculture biologique sont en moyenne 20 \u00e0 25 % inf\u00e9rieurs \u00e0 ceux de l\'agriculture conventionnelle. Cependant, l\'\u00e9cart se r\u00e9duit consid\u00e9rablement dans les syst\u00e8mes agro\u00e9cologiques optimis\u00e9s et disparait en conditions de stress (s\u00e9cheresse, sols pauvres).',
                'Des \u00e9tudes de l\'INRAE (France) et de l\'IDDRI montrent qu\'une Europe enti\u00e8rement agro\u00e9cologique pourrait nourrir 530 millions d\'Europ\u00e9ens en 2050, \u00e0 condition de r\u00e9duire la consommation de produits animaux de 50 %, de diminuer le gaspillage et de transformer les r\u00e9gimes alimentaires. La cl\u00e9 n\'est pas uniquement le rendement, mais la transformation du syst\u00e8me alimentaire dans son ensemble.'
              ],
              highlight: 'Une Europe enti\u00e8rement agro\u00e9cologique pourrait nourrir sa population en 2050, sous conditions de changement alimentaire.'
            }
          ],
          quiz: [
            { q: 'Quelle part des \u00e9missions de GES est due au syst\u00e8me alimentaire mondial ?', opts: ['10 %', '20 %', '30 %', '50 %'], correct: 2, explanation: 'Le syst\u00e8me alimentaire mondial, de la production \u00e0 la consommation, est responsable d\'environ 30 % des \u00e9missions mondiales de GES.' },
            { q: 'Combien de nourriture est gaspill\u00e9e chaque ann\u00e9e dans le monde ?', opts: ['500 millions de tonnes', '1,3 milliard de tonnes', '2,5 milliards de tonnes', '5 milliards de tonnes'], correct: 1, explanation: 'Environ 1,3 milliard de tonnes de nourriture sont gaspill\u00e9es chaque ann\u00e9e, soit un tiers de la production mondiale.' },
            { q: 'Qu\'est-ce que l\'agroforesterie ?', opts: ['La culture en for\u00eat', 'L\'int\u00e9gration d\'arbres aux parcelles cultiv\u00e9es', 'La plantation de for\u00eats sur d\'anciens champs', 'L\'exploitation foresti\u00e8re durable'], correct: 1, explanation: 'L\'agroforesterie int\u00e8gre des arbres aux parcelles agricoles, combinant production alimentaire, stockage de carbone et biodiversit\u00e9.' }
          ],
          definitions: [
            { term: 'Agro\u00e9cologie', def: 'Approche agricole s\'appuyant sur les processus \u00e9cologiques naturels pour produire une alimentation durable sans d\u00e9grader les \u00e9cosyst\u00e8mes.' },
            { term: 'Agroforesterie', def: 'Syst\u00e8me de culture int\u00e9grant des arbres aux parcelles agricoles, combinant production alimentaire, stockage de carbone et habitats pour la biodiversit\u00e9.' },
            { term: 'Permaculture', def: 'M\u00e9thode de conception de syst\u00e8mes agricoles et humains fond\u00e9e sur l\'observation des \u00e9cosyst\u00e8mes naturels et la cr\u00e9ation de synergies.' },
            { term: 'Sant\u00e9 unique (One Health)', def: 'Concept reliant la sant\u00e9 des \u00e9cosyst\u00e8mes, des animaux et des humains comme un syst\u00e8me interdependent.' },
            { term: 'R\u00e9gime plan\u00e9taire', def: 'R\u00e9gime alimentaire propos\u00e9 par la commission EAT-Lancet, compatible avec les limites plan\u00e9taires et les besoins nutritionnels humains.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'En France, la loi anti-gaspillage de 2016 interdit aux supermarch\u00e9s de jeter les invendus alimentaires encore consommables, les obligeant \u00e0 les donner \u00e0 des associations.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un Fran\u00e7ais gaspille en moyenne 29 kg de nourriture par an, dont 7 kg d\'aliments encore emball\u00e9s.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Cuba a d\u00e9velopp\u00e9 l\'une des plus grandes exp\u00e9riences d\'agro\u00e9cologie au monde dans les ann\u00e9es 1990, contraint par l\'effondrement de l\'URSS et la perte des importations d\'engrais et de pesticides.' }
          ]
        },
        // --- Lesson 5.4 : Les villes durables ---
        {
          slug: 'villes-durables',
          title: 'Les villes durables',
          description: 'Repenser l\'urbanisme pour des villes \u00e9cologiques, r\u00e9silientes et inclusives.',
          intro: 'Les villes abritent 56 % de la population mondiale et sont responsables de plus de 70 % des \u00e9missions de CO\u2082. D\'ici 2050, les deux tiers de l\'humanit\u00e9 seront urbains. La transformation des villes est donc un levier majeur de la transition \u00e9cologique, touchant la mobilit\u00e9, le b\u00e2timent, l\'\u00e9nergie et la nature en ville.',
          introHighlight: 'Les villes produisent plus de 70 % des \u00e9missions de CO\u2082 et abriteront les deux tiers de l\'humanit\u00e9 en 2050.',
          intro2: '',
          sections: [
            {
              title: 'La mobilit\u00e9 durable',
              paragraphs: [
                'Le transport repr\u00e9sente environ 25 % des \u00e9missions mondiales de CO\u2082, dont la moiti\u00e9 provient des voitures individuelles. La ville durable privil\u00e9gie les transports en commun, le v\u00e9lo, la marche et l\'\u00e9lectromobilit\u00e9. Copenhague, o\u00f9 62 % des d\u00e9placements domicile-travail se font \u00e0 v\u00e9lo, est un mod\u00e8le de mobilit\u00e9 douce.',
                'Les zones \u00e0 faibles \u00e9missions (ZFE), qui restreignent l\'acc\u00e8s des v\u00e9hicules polluants aux centres-villes, se multiplient en Europe. La \u00ab ville du quart d\'heure \u00bb, concept promu par le professeur Carlos Moreno, vise \u00e0 organiser l\'urbanisme pour que chaque habitant trouve tous les services essentiels \u00e0 moins de 15 minutes \u00e0 pied ou \u00e0 v\u00e9lo.',
                'Le v\u00e9hicule \u00e9lectrique est un levier important mais insuffisant seul : une voiture \u00e9lectrique r\u00e9duit les \u00e9missions de CO\u2082 de 50 \u00e0 70 % par rapport \u00e0 un v\u00e9hicule thermique sur son cycle de vie, mais ne r\u00e9sout pas la congestion, l\'artificialisation des sols par les routes et les parkings, ni la s\u00e9dentarit\u00e9.'
              ],
              highlight: '\u00c0 Copenhague, 62 % des d\u00e9placements domicile-travail se font \u00e0 v\u00e9lo, gr\u00e2ce \u00e0 des am\u00e9nagements d\u00e9di\u00e9s.'
            },
            {
              title: 'Le b\u00e2timent et l\'\u00e9nergie',
              paragraphs: [
                'Le secteur du b\u00e2timent repr\u00e9sente 37 % des \u00e9missions mondiales de CO\u2082 (construction et usage). La r\u00e9novation thermique des b\u00e2timents existants est un enjeu majeur : en France, 5 millions de logements sont class\u00e9s \u00ab passoires thermiques \u00bb (DPE F ou G). L\'isolation, le remplacement des syst\u00e8mes de chauffage et l\'installation de pompes \u00e0 chaleur peuvent r\u00e9duire la consommation \u00e9nerg\u00e9tique d\'un b\u00e2timent de 60 \u00e0 80 %.',
                'La construction bas carbone utilise des mat\u00e9riaux biosourc\u00e9s (bois, paille, chanvre) au lieu du b\u00e9ton, dont la production est responsable de 8 % des \u00e9missions mondiales de CO\u2082. Le b\u00e2timent \u00e0 \u00e9nergie positive, qui produit plus d\'\u00e9nergie qu\'il n\'en consomme gr\u00e2ce aux panneaux solaires et \u00e0 une isolation pouss\u00e9e, est d\u00e9sormais technologiquement ma\u00eetris\u00e9.'
              ],
              highlight: 'Le b\u00e9ton est responsable de 8 % des \u00e9missions mondiales de CO\u2082, plus que l\'aviation.'
            },
            {
              title: 'La nature en ville',
              paragraphs: [
                'La v\u00e9g\u00e9talisation des villes r\u00e9duit les \u00eelots de chaleur urbains (qui peuvent \u00eatre 5 \u00e0 10 \u00b0C plus chauds que les campagnes environnantes), am\u00e9liore la qualit\u00e9 de l\'air, favorise la biodiversit\u00e9, filtre les eaux pluviales et am\u00e9liore le bien-\u00eatre des habitants. Singapour, surnomm\u00e9e \u00ab City in a Garden \u00bb, a int\u00e9gr\u00e9 la nature \u00e0 tous les niveaux de son urbanisme.',
                'Les solutions fond\u00e9es sur la nature (SFN) en milieu urbain incluent les toitures et fa\u00e7ades v\u00e9g\u00e9talis\u00e9es, les for\u00eats urbaines, les jardins de pluie et la d\u00e9simpermeabilisation des sols. Milan a plant\u00e9 3 millions d\'arbres en cinq ans pour r\u00e9duire la pollution et lutter contre la chaleur. Paris a lanc\u00e9 un plan de d\u00e9bitumisation pour recouvrir 50 % de ses cours d\'\u00e9cole de v\u00e9g\u00e9tation.'
              ],
              highlight: 'Les \u00eelots de chaleur urbains peuvent atteindre 5 \u00e0 10 \u00b0C de plus que les campagnes environnantes.'
            }
          ],
          quiz: [
            { q: 'Quelle part des \u00e9missions mondiales de CO\u2082 provient du secteur du b\u00e2timent ?', opts: ['15 %', '25 %', '37 %', '50 %'], correct: 2, explanation: 'Le secteur du b\u00e2timent est responsable de 37 % des \u00e9missions mondiales de CO\u2082, incluant la construction et l\'usage.' },
            { q: 'Qu\'est-ce que la \u00ab ville du quart d\'heure \u00bb ?', opts: ['Une ville de petite taille', 'Une ville o\u00f9 tous les services sont \u00e0 15 min \u00e0 pied', 'Une ville qui fonctionne 24h/24', 'Une ville plant\u00e9e tous les 15 km'], correct: 1, explanation: 'La ville du quart d\'heure organise l\'urbanisme pour que chaque habitant acc\u00e8de aux services essentiels en 15 minutes \u00e0 pied ou \u00e0 v\u00e9lo.' },
            { q: 'Quel mat\u00e9riau de construction repr\u00e9sente 8 % des \u00e9missions mondiales de CO\u2082 ?', opts: ['L\'acier', 'Le verre', 'Le b\u00e9ton', 'Le bois'], correct: 2, explanation: 'La production de b\u00e9ton (ciment) est responsable de 8 % des \u00e9missions mondiales de CO\u2082, plus que l\'aviation.' }
          ],
          definitions: [
            { term: '\u00celot de chaleur urbain', def: 'Ph\u00e9nom\u00e8ne par lequel les villes sont significativement plus chaudes que les campagnes environnantes en raison de l\'absorption de chaleur par le b\u00e9ton et l\'asphalte.' },
            { term: 'Ville du quart d\'heure', def: 'Concept urbanistique o\u00f9 tous les services essentiels sont accessibles en 15 minutes \u00e0 pied ou \u00e0 v\u00e9lo depuis n\'importe quel point de la ville.' },
            { term: 'Zone \u00e0 faibles \u00e9missions (ZFE)', def: 'P\u00e9rim\u00e8tre urbain o\u00f9 la circulation des v\u00e9hicules les plus polluants est restreinte pour am\u00e9liorer la qualit\u00e9 de l\'air.' },
            { term: 'B\u00e2timent \u00e0 \u00e9nergie positive', def: 'B\u00e2timent qui produit plus d\'\u00e9nergie qu\'il n\'en consomme sur l\'ann\u00e9e, gr\u00e2ce \u00e0 une isolation optimale et \u00e0 une production d\'\u00e9nergie renouvelable int\u00e9gr\u00e9e.' },
            { term: 'Solutions fond\u00e9es sur la nature', def: 'Actions qui s\'appuient sur les \u00e9cosyst\u00e8mes pour relever des d\u00e9fis soci\u00e9taux (gestion de l\'eau, r\u00e9duction de la chaleur, biodiversit\u00e9).' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Amsterdam ambitionne de devenir la premi\u00e8re ville 100 % circulaire d\'ici 2050, en \u00e9liminant tous les d\u00e9chets et en r\u00e9utilisant toutes les mati\u00e8res premi\u00e8res.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Le b\u00e2timent le plus haut en bois du monde (Mj\u00f8st\u00e5rnet en Norv\u00e8ge, 85 m\u00e8tres) d\u00e9montre que le bois peut remplacer le b\u00e9ton m\u00eame pour les gratte-ciel.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Les for\u00eats urbaines de Milan (Bosco Verticale) abritent l\'\u00e9quivalent de 20 000 arbres et arbustes sur deux tours de 80 et 112 m\u00e8tres, r\u00e9duisant la pollution et la chaleur.' }
          ]
        },
        // --- Lesson 5.5 : La géo-ingénierie ---
        {
          slug: 'geo-ingenierie',
          title: 'La g\u00e9o-ing\u00e9nierie',
          description: 'Les technologies de modification volontaire du climat : promesses, risques et \u00e9thique.',
          intro: 'Face \u00e0 l\'urgence climatique et \u00e0 la lenteur de la r\u00e9duction des \u00e9missions, certains scientifiques proposent de modifier volontairement le syst\u00e8me climatique \u00e0 grande \u00e9chelle. La g\u00e9o-ing\u00e9nierie regroupe des technologies controvers\u00e9es, allant de la capture du CO\u2082 \u00e0 la modification du rayonnement solaire.',
          introHighlight: 'La g\u00e9o-ing\u00e9nierie propose de modifier volontairement le climat, mais ses risques et enjeux \u00e9thiques sont consid\u00e9rables.',
          intro2: '',
          sections: [
            {
              title: 'L\'\u00e9limination du CO\u2082 (CDR)',
              paragraphs: [
                'Les technologies d\'\u00e9limination du dioxyde de carbone (CDR, Carbon Dioxide Removal) visent \u00e0 retirer du CO\u2082 de l\'atmosph\u00e8re. Le captage direct dans l\'air (DAC, Direct Air Capture) utilise des installations qui filtrent le CO\u2082 atmosph\u00e9rique et le stockent dans le sous-sol ou le transforment en mat\u00e9riaux. L\'usine Orca en Islande, la plus grande au monde en 2022, capture 4 000 tonnes de CO\u2082 par an, soit l\'\u00e9quivalent des \u00e9missions de 870 voitures.',
                'Le BECCS (Bio\u00e9nergie avec captage et stockage du carbone) combine la combustion de biomasse pour produire de l\'\u00e9nergie avec le captage du CO\u2082 \u00e9mis, cr\u00e9ant th\u00e9oriquement des \u00e9missions n\u00e9gatives. La fertilisation des oc\u00e9ans par le fer et l\'alt\u00e9ration acc\u00e9l\u00e9r\u00e9e des roches (enhanced weathering) sont d\'autres pistes explor\u00e9es.',
                'Les techniques naturelles de CDR (boisement, restauration des sols, protection des zones humides) sont les plus matures et les moins risqu\u00e9es. Le reboisement massif pourrait absorber jusqu\'\u00e0 10 GtCO\u2082 par an, mais n\u00e9cessite d\'\u00e9normes surfaces et ne doit pas se faire au d\u00e9triment des \u00e9cosyst\u00e8mes naturels ou de la s\u00e9curit\u00e9 alimentaire.'
              ],
              highlight: 'L\'usine DAC Orca en Islande capture 4 000 tonnes de CO\u2082 par an, une goutte d\'eau face aux 40 milliards de tonnes \u00e9mises.'
            },
            {
              title: 'La gestion du rayonnement solaire (SRM)',
              paragraphs: [
                'La gestion du rayonnement solaire (SRM, Solar Radiation Management) vise \u00e0 r\u00e9fl\u00e9chir une partie du rayonnement solaire vers l\'espace pour refroidir la plan\u00e8te. L\'injection d\'a\u00e9rosols sulfat\u00e9s dans la stratosph\u00e8re, inspir\u00e9e de l\'effet refroidissant des \u00e9ruptions volcaniques, est la technique la plus \u00e9tudi\u00e9e. L\'\u00e9ruption du Pinatubo en 1991 a refroidi la plan\u00e8te de 0,5 \u00b0C pendant un an.',
                'D\'autres approches SRM incluent l\'\u00e9claircissement des nuages marins par injection de sel marin, le d\u00e9ploiement de miroirs dans l\'espace et l\'augmentation de l\'alb\u00e9do des surfaces terrestres (peinture blanche sur les toits, cultures \u00e0 feuilles r\u00e9fl\u00e9chissantes). Ces techniques pourraient th\u00e9oriquement agir rapidement mais ne traitent pas la cause du probl\u00e8me.'
              ],
              highlight: 'L\'\u00e9ruption du Pinatubo en 1991 a refroidi la plan\u00e8te de 0,5 \u00b0C, inspirant les projets d\'injection d\'a\u00e9rosols stratosph\u00e9riques.'
            },
            {
              title: 'Les risques et les enjeux \u00e9thiques',
              paragraphs: [
                'La g\u00e9o-ing\u00e9nierie soul\u00e8ve des risques majeurs. L\'injection d\'a\u00e9rosols stratosph\u00e9riques pourrait perturber les moussons asiatiques et africaines, mena\u00e7ant la s\u00e9curit\u00e9 alimentaire de milliards de personnes. Si l\'injection \u00e9tait interrompue brutalement, le r\u00e9chauffement rattraperait d\'un coup les d\u00e9cennies de hausse masqu\u00e9e (effet \u00ab termination shock \u00bb), avec des cons\u00e9quences potentiellement catastrophiques.',
                'Les enjeux de gouvernance sont \u00e9galement critiques : qui d\u00e9cide de modifier le climat de toute la plan\u00e8te ? Aucun cadre juridique international n\'existe pour r\u00e9guler la g\u00e9o-ing\u00e9nierie. Le risque d\'al\u00e9a moral est r\u00e9el : la perspective de solutions technologiques pourrait affaiblir la volont\u00e9 politique de r\u00e9duire les \u00e9missions, cr\u00e9ant un faux sentiment de s\u00e9curit\u00e9.',
                'La majorit\u00e9 des scientifiques consid\u00e8rent que la g\u00e9o-ing\u00e9nierie ne peut en aucun cas se substituer \u00e0 la r\u00e9duction des \u00e9missions. Elle pourrait, au mieux, compl\u00e9ter les efforts d\'att\u00e9nuation et d\'adaptation, mais comporte des risques impr\u00e9visibles \u00e0 l\'\u00e9chelle plan\u00e9taire.'
              ],
              highlight: 'Le \u00ab termination shock \u00bb : l\'arr\u00eat brutal de l\'injection d\'a\u00e9rosols provoquerait un r\u00e9chauffement acc\u00e9l\u00e9r\u00e9 d\u00e9vastateur.'
            }
          ],
          quiz: [
            { q: 'Que d\u00e9signe le DAC (Direct Air Capture) ?', opts: ['Un syst\u00e8me de climatisation', 'Le captage direct du CO\u2082 dans l\'atmosph\u00e8re', 'Un type de panneau solaire', 'Une technique d\'irrigation'], correct: 1, explanation: 'Le DAC (Direct Air Capture) est une technologie qui filtre le CO\u2082 directement dans l\'air ambiant pour le stocker ou le transformer.' },
            { q: 'Quel \u00e9v\u00e9nement naturel a inspir\u00e9 l\'injection d\'a\u00e9rosols stratosph\u00e9riques ?', opts: ['Un tsunami', 'L\'\u00e9ruption du Pinatubo', 'Une temp\u00eate solaire', 'Un tremblement de terre'], correct: 1, explanation: 'L\'\u00e9ruption du mont Pinatubo en 1991 a inject\u00e9 des a\u00e9rosols sulfat\u00e9s dans la stratosph\u00e8re, refroidissant la plan\u00e8te de 0,5 \u00b0C pendant un an.' },
            { q: 'Qu\'est-ce que le \u00ab termination shock \u00bb ?', opts: ['Un tremblement de terre provoqu\u00e9 par les mines', 'Le r\u00e9chauffement acc\u00e9l\u00e9r\u00e9 apr\u00e8s arr\u00eat de la g\u00e9o-ing\u00e9nierie', 'Un choc \u00e9conomique', 'La fin d\'une \u00e9ruption volcanique'], correct: 1, explanation: 'Le termination shock d\u00e9signe le r\u00e9chauffement brutal qui surviendrait si l\'injection d\'a\u00e9rosols \u00e9tait interrompue, les d\u00e9cennies de hausse masqu\u00e9e se manifestant d\'un coup.' }
          ],
          definitions: [
            { term: 'G\u00e9o-ing\u00e9nierie', def: 'Ensemble de technologies visant \u00e0 modifier volontairement le syst\u00e8me climatique \u00e0 grande \u00e9chelle pour contrer le r\u00e9chauffement.' },
            { term: 'CDR (Carbon Dioxide Removal)', def: 'Famille de techniques visant \u00e0 retirer du CO\u2082 de l\'atmosph\u00e8re et \u00e0 le stocker durablement.' },
            { term: 'SRM (Solar Radiation Management)', def: 'Famille de techniques visant \u00e0 r\u00e9fl\u00e9chir une partie du rayonnement solaire pour refroidir la plan\u00e8te.' },
            { term: 'BECCS', def: 'Bio\u00e9nergie avec captage et stockage du carbone, technique combinant production d\'\u00e9nergie \u00e0 partir de biomasse et captage du CO\u2082 \u00e9mis.' },
            { term: 'Al\u00e9a moral', def: 'Risque que la perspective de solutions technologiques r\u00e9duise la motivation \u00e0 r\u00e9duire les \u00e9missions, affaiblissant les efforts d\'att\u00e9nuation.' }
          ],
          memos: [
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Pour compenser les \u00e9missions mondiales annuelles par captage direct (DAC), il faudrait environ 10 000 usines Orca, soit un investissement de plus de 1 000 milliards de dollars.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'En 1991, l\'\u00e9ruption du Pinatubo a inject\u00e9 environ 20 millions de tonnes de SO\u2082 dans la stratosph\u00e8re, provoquant les couchers de soleil color\u00e9s les plus spectaculaires du si\u00e8cle.' },
            { front: '\u{1F4A1} Le savais-tu ?', back: 'Un scientifique de Harvard a propos\u00e9 de lib\u00e9rer des particules r\u00e9fl\u00e9chissantes dans la stratosph\u00e8re pour 2,25 milliards de dollars par an, soit un co\u00fbt d\u00e9risoire face aux 2 700 milliards de dommages climatiques annuels.' }
          ]
        }
      ]
    }
  ]
};
