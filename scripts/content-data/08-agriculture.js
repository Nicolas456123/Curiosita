// Discipline definition: Agriculture & Nature
// 5 hubs, 25 lessons — all content in French

module.exports = {
  slug: 'agriculture',
  title: 'Agriculture & Nature',
  description: 'Découvrez l\'agronomie, la permaculture, l\'élevage et les pratiques agricoles durables.',
  icon: '🌾',
  cat: 'Agriculture & Nature',
  themeSlug: 'savoir-faire',
  accent: '#8db35a',
  accent2: '#a7c97a',
  accentDim: 'rgba(141,179,90,0.1)',
  accentHero: 'rgba(141,179,90,0.08)',
  introTitle: 'Qu\'est-ce que l\'agriculture ?',
  introText: 'L\'agriculture est l\'ensemble des activités humaines visant à cultiver la terre et à élever des animaux pour produire de la nourriture, des fibres et des matières premières. Née il y a environ 10 000 ans lors de la révolution néolithique, elle a transformé les sociétés de chasseurs-cueilleurs en civilisations sédentaires. Aujourd\'hui, l\'agriculture fait face à des défis majeurs : nourrir une population mondiale croissante tout en préservant l\'environnement.',
  introHighlight: 'De la domestication du blé en Mésopotamie aux techniques de permaculture modernes, l\'agriculture est le fondement de toute civilisation humaine et le premier secteur d\'emploi dans de nombreux pays.',
  articleLow: 'l\'',
  hubs: [
    // ──────────────────────────────────────────────
    // HUB 1 — Agronomie
    // ──────────────────────────────────────────────
    {
      slug: 'agronomie',
      title: 'Agronomie',
      description: 'Sciences du sol, nutrition des plantes, rotations culturales et amélioration des rendements.',
      lessons: [
        {
          slug: 'science-du-sol',
          title: 'Science du sol',
          description: 'Composition, structure et vie biologique des sols agricoles.',
          intro: 'Le <strong>sol</strong> est bien plus qu\'un simple support pour les plantes : c\'est un écosystème vivant composé de minéraux, de matière organique, d\'eau, d\'air et de milliards d\'organismes. La pédologie, science du sol, est au cœur de l\'agronomie moderne.',
          introHighlight: '<strong>Un sol fertile</strong> contient environ 25 % d\'air, 25 % d\'eau, 45 % de minéraux et 5 % de matière organique — un équilibre fragile dont dépend toute la production agricole.',
          intro2: '',
          sections: [
            {
              title: 'Composition et structure du sol',
              paragraphs: [
                'Le sol se forme par l\'altération des roches mères sous l\'action du climat, de l\'eau et des organismes vivants. Ce processus, appelé <strong>pédogenèse</strong>, prend des siècles : il faut en moyenne 500 ans pour former un centimètre de sol arable. Les particules minérales se classent en trois catégories selon leur taille : les sables (0,05-2 mm), les limons (0,002-0,05 mm) et les argiles (moins de 0,002 mm). La proportion de chacune détermine la texture du sol.',
                'La <strong>structure du sol</strong> désigne l\'agencement des particules en agrégats. Un sol bien structuré présente des agrégats stables qui ménagent des pores permettant la circulation de l\'eau et de l\'air. Le complexe argilo-humique, formé par l\'association des argiles et de l\'humus, joue un rôle central dans la rétention des nutriments grâce à sa capacité d\'échange cationique (CEC).'
              ],
              highlight: 'Il faut environ 500 ans pour former un centimètre de sol arable, mais quelques décennies d\'agriculture intensive peuvent le détruire.'
            },
            {
              title: 'La vie biologique du sol',
              paragraphs: [
                'Un gramme de sol fertile contient jusqu\'à un milliard de <strong>bactéries</strong>, des centaines de mètres de filaments fongiques et des milliers de protozoaires. Ces micro-organismes décomposent la matière organique, libèrent les nutriments sous des formes assimilables par les plantes et contribuent à la structuration du sol. Les mycorhizes, associations symbiotiques entre champignons et racines, augmentent considérablement la surface d\'absorption racinaire.',
                'La <strong>macrofaune du sol</strong> — vers de terre, collemboles, acariens — joue un rôle essentiel dans le brassage des horizons et l\'aération. Charles Darwin estimait déjà que les vers de terre retournent entre 10 et 50 tonnes de terre par hectare et par an. Leur activité crée des galeries qui facilitent l\'infiltration de l\'eau et la pénétration des racines.'
              ],
              highlight: 'Un sol sain peut contenir plus de biomasse vivante sous terre qu\'au-dessus : jusqu\'à 5 tonnes de micro-organismes par hectare.'
            },
            {
              title: 'Analyse et fertilité du sol',
              paragraphs: [
                'L\'<strong>analyse de sol</strong> permet de mesurer le pH, la teneur en matière organique, les éléments nutritifs disponibles (azote, phosphore, potassium) et la capacité d\'échange cationique. Le pH optimal pour la plupart des cultures se situe entre 6 et 7 : en dessous, l\'aluminium devient toxique ; au-dessus, le fer et le manganèse deviennent indisponibles.',
                'La <strong>fertilité</strong> d\'un sol dépend de trois composantes : la fertilité chimique (disponibilité des nutriments), la fertilité physique (structure, porosité, capacité de rétention en eau) et la fertilité biologique (activité des organismes du sol). L\'agronomie moderne cherche à optimiser ces trois composantes simultanément, en combinant amendements organiques, travail du sol adapté et couverture végétale permanente.'
              ],
              highlight: 'Le pH du sol influence directement la disponibilité de plus de 15 éléments nutritifs essentiels aux plantes.'
            }
          ],
          quiz: [
            { q: 'Combien de temps faut-il en moyenne pour former un centimètre de sol arable ?', opts: ['50 ans', '100 ans', '500 ans', '5 000 ans'], correct: 2, explanation: 'La pédogenèse est un processus très lent : il faut en moyenne 500 ans pour former un centimètre de sol arable à partir de la roche mère.' },
            { q: 'Quel est le pH optimal pour la plupart des cultures ?', opts: ['4 à 5', '6 à 7', '8 à 9', '10 à 11'], correct: 1, explanation: 'Un pH entre 6 et 7 offre la meilleure disponibilité des nutriments pour la majorité des plantes cultivées.' },
            { q: 'Qu\'est-ce qu\'une mycorhize ?', opts: ['Un type de ver de terre', 'Une association symbiotique champignon-racine', 'Un engrais chimique', 'Une bactérie fixatrice d\'azote'], correct: 1, explanation: 'Les mycorhizes sont des associations symbiotiques entre des champignons du sol et les racines des plantes, augmentant considérablement la capacité d\'absorption racinaire.' }
          ],
          definitions: [
            { term: 'Pédogenèse', def: 'Processus de formation des sols à partir de la roche mère sous l\'action du climat, de l\'eau et des organismes vivants.' },
            { term: 'Capacité d\'échange cationique (CEC)', def: 'Capacité d\'un sol à retenir et à échanger des cations nutritifs (calcium, magnésium, potassium). Plus la CEC est élevée, plus le sol est fertile.' },
            { term: 'Complexe argilo-humique', def: 'Association entre les particules d\'argile et l\'humus qui constitue le réservoir de nutriments du sol.' },
            { term: 'Mycorhize', def: 'Association symbiotique entre un champignon du sol et les racines d\'une plante, permettant un meilleur accès aux nutriments et à l\'eau.' },
            { term: 'Texture du sol', def: 'Proportion relative de sable, de limon et d\'argile dans un sol, déterminant ses propriétés physiques.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Un hectare de sol fertile peut contenir jusqu\'à 1,5 million de vers de terre qui produisent environ 100 tonnes de turricules par an, enrichissant naturellement le sol.' },
            { front: '💡 Le savais-tu ?', back: 'Les sols de la planète stockent deux à trois fois plus de carbone que l\'atmosphère. La dégradation des sols libère ce carbone, aggravant le changement climatique.' },
            { front: '💡 Le savais-tu ?', back: 'Le triangle des textures, inventé par le département américain de l\'Agriculture (USDA), classe les sols en 12 catégories selon leur proportion de sable, limon et argile.' }
          ]
        },
        {
          slug: 'nutrition-des-plantes',
          title: 'Nutrition des plantes',
          description: 'Les éléments nutritifs essentiels, la photosynthèse et les cycles biogéochimiques.',
          intro: 'Les plantes puisent dans le sol et l\'atmosphère les éléments nécessaires à leur croissance. Comprendre la <strong>nutrition végétale</strong> est indispensable pour optimiser les rendements tout en réduisant l\'impact environnemental des engrais.',
          introHighlight: '<strong>La photosynthèse</strong> est le processus fondamental par lequel les plantes convertissent l\'énergie lumineuse en énergie chimique, produisant la matière organique qui nourrit l\'ensemble du vivant.',
          intro2: '',
          sections: [
            {
              title: 'Les éléments nutritifs essentiels',
              paragraphs: [
                'Les plantes ont besoin de 17 éléments chimiques pour accomplir leur cycle de vie. Trois sont fournis par l\'air et l\'eau : le carbone (C), l\'hydrogène (H) et l\'oxygène (O). Les 14 autres proviennent du sol et se divisent en <strong>macroéléments</strong> — azote (N), phosphore (P), potassium (K), calcium (Ca), magnésium (Mg), soufre (S) — et en <strong>oligoéléments</strong> — fer, manganèse, zinc, cuivre, bore, molybdène, chlore et nickel.',
                'L\'<strong>azote</strong> est le nutriment le plus limitant en agriculture. Il entre dans la composition des protéines, des acides nucléiques et de la chlorophylle. Le phosphore est essentiel au transfert d\'énergie (ATP) et à la croissance racinaire. Le potassium régule l\'ouverture des stomates et la résistance aux stress hydriques. La loi du minimum de Liebig stipule que la croissance est limitée par l\'élément le plus déficient, quel que soit l\'abondance des autres.'
              ],
              highlight: 'La loi du minimum de Liebig : la croissance d\'une plante est limitée par le nutriment le moins disponible, comme l\'eau qui fuit par la douve la plus basse d\'un tonneau.'
            },
            {
              title: 'La photosynthèse',
              paragraphs: [
                'La <strong>photosynthèse</strong> se déroule en deux phases dans les chloroplastes. La phase lumineuse, dans les thylakoïdes, capte l\'énergie des photons grâce à la chlorophylle pour produire de l\'ATP et du NADPH en libérant de l\'oxygène par photolyse de l\'eau. La phase sombre (cycle de Calvin), dans le stroma, utilise cette énergie pour fixer le CO₂ atmosphérique en molécules organiques (glucose).',
                'Les plantes utilisent trois voies de fixation du carbone : la voie <strong>C3</strong> (blé, riz, la majorité des espèces), la voie <strong>C4</strong> (maïs, canne à sucre, sorgho) et la voie <strong>CAM</strong> (cactus, ananas). Les plantes C4 sont plus efficaces en conditions chaudes et lumineuses car elles concentrent le CO₂ autour de la Rubisco, réduisant la photorespiration qui gaspille jusqu\'à 30 % du carbone fixé chez les plantes C3.'
              ],
              highlight: 'Les plantes C4 comme le maïs peuvent fixer le CO₂ deux à trois fois plus vite que les plantes C3 comme le blé en conditions tropicales.'
            },
            {
              title: 'Les cycles biogéochimiques en agriculture',
              paragraphs: [
                'Le <strong>cycle de l\'azote</strong> en agriculture implique la fixation (biologique ou industrielle), la minéralisation de la matière organique, la nitrification (conversion de l\'ammonium en nitrate par les bactéries Nitrosomonas et Nitrobacter) et la dénitrification (perte sous forme de N₂ ou N₂O gazeux). La fixation biologique par les légumineuses, en symbiose avec les bactéries Rhizobium, peut apporter 50 à 300 kg d\'azote par hectare et par an.',
                'Le <strong>cycle du phosphore</strong> est un cycle sédimentaire sans phase gazeuse significative. Le phosphore du sol se trouve principalement sous forme insoluble ; seule une infime fraction est disponible dans la solution du sol. Les mycorhizes sont essentielles pour accéder au phosphore peu disponible. Les réserves mondiales de phosphate, concentrées à 70 % au Maroc, pourraient s\'épuiser d\'ici un à deux siècles au rythme actuel d\'extraction.'
              ],
              highlight: 'Les légumineuses (trèfle, luzerne, soja) fixent l\'azote atmosphérique grâce à leurs bactéries symbiotiques, jouant le rôle d\'engrais naturel.'
            }
          ],
          quiz: [
            { q: 'Quels sont les trois macroéléments principaux (NPK) ?', opts: ['Azote, phosphore, potassium', 'Azote, plomb, potassium', 'Sodium, phosphore, krypton', 'Azote, phosphore, calcium'], correct: 0, explanation: 'N (azote), P (phosphore) et K (potassium) sont les trois macroéléments principaux, ceux dont les plantes ont besoin en plus grande quantité.' },
            { q: 'Que stipule la loi du minimum de Liebig ?', opts: ['Plus on met d\'engrais, mieux c\'est', 'La croissance est limitée par le nutriment le moins disponible', 'Les plantes n\'ont besoin que de lumière', 'Le phosphore est toujours limitant'], correct: 1, explanation: 'La loi du minimum de Liebig établit que la croissance d\'une plante est limitée par l\'élément nutritif présent en quantité la plus faible par rapport aux besoins.' },
            { q: 'Quelle voie de fixation du carbone utilise le maïs ?', opts: ['C3', 'C4', 'CAM', 'C5'], correct: 1, explanation: 'Le maïs est une plante C4 : il concentre le CO₂ autour de la Rubisco, ce qui le rend plus efficace en conditions chaudes et lumineuses.' }
          ],
          definitions: [
            { term: 'Photosynthèse', def: 'Processus biochimique par lequel les plantes convertissent l\'énergie lumineuse, le CO₂ et l\'eau en glucides et en oxygène.' },
            { term: 'Chlorophylle', def: 'Pigment vert des chloroplastes qui absorbe la lumière rouge et bleue pour alimenter la photosynthèse.' },
            { term: 'Loi du minimum de Liebig', def: 'Principe agronomique selon lequel la croissance d\'une plante est limitée par le nutriment le moins disponible.' },
            { term: 'Nitrification', def: 'Conversion biologique de l\'ammonium (NH₄⁺) en nitrate (NO₃⁻) par les bactéries du sol.' },
            { term: 'Fixation biologique de l\'azote', def: 'Conversion de l\'azote atmosphérique (N₂) en ammonium par des bactéries symbiotiques (Rhizobium) ou libres.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le procédé Haber-Bosch de fixation industrielle de l\'azote, inventé en 1909, a permis de nourrir des milliards de personnes supplémentaires. On estime qu\'il est responsable de la subsistance de près de la moitié de la population mondiale actuelle.' },
            { front: '💡 Le savais-tu ?', back: 'La Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygénase) est l\'enzyme la plus abondante sur Terre. Elle fixe environ 100 milliards de tonnes de CO₂ par an.' },
            { front: '💡 Le savais-tu ?', back: 'Un hectare de luzerne peut fixer jusqu\'à 300 kg d\'azote atmosphérique par an grâce à ses bactéries symbiotiques, soit l\'équivalent de 650 kg d\'ammonitrate.' }
          ]
        },
        {
          slug: 'rotations-et-assolements',
          title: 'Rotations et assolements',
          description: 'Principes de rotation des cultures, associations végétales et gestion de la fertilité.',
          intro: 'La <strong>rotation des cultures</strong> est l\'une des pratiques agronomiques les plus anciennes et les plus efficaces. Alterner les espèces cultivées sur une même parcelle permet de maintenir la fertilité du sol, de rompre les cycles des ravageurs et de diversifier les revenus agricoles.',
          introHighlight: '<strong>L\'assolement triennal</strong> médiéval — céréale d\'hiver, céréale de printemps, jachère — a dominé l\'agriculture européenne pendant des siècles avant d\'être perfectionné par les rotations modernes.',
          intro2: '',
          sections: [
            {
              title: 'Principes de la rotation',
              paragraphs: [
                'La rotation des cultures repose sur l\'alternance de familles botaniques et de types de plantes sur une même parcelle d\'une année sur l\'autre. Le principe fondamental est de ne jamais cultiver deux années consécutives une plante de la même famille, afin de <strong>rompre le cycle des maladies et des ravageurs</strong> spécifiques. Par exemple, alterner une céréale (graminée) avec une légumineuse, puis une culture sarclée (betterave, pomme de terre), diversifie les sollicitations du sol.',
                'Chaque type de culture mobilise les nutriments du sol différemment. Les céréales sont gourmandes en azote, les légumineuses en fixent dans le sol, et les cultures à enracinement profond (luzerne, colza) remontent les éléments des horizons profonds. Une bonne rotation équilibre les <strong>exportations et les restitutions</strong> de nutriments, réduisant la dépendance aux engrais chimiques.'
              ],
              highlight: 'Une rotation bien conçue peut réduire de 30 à 50 % l\'utilisation de pesticides par rapport à la monoculture.'
            },
            {
              title: 'L\'assolement à travers l\'histoire',
              paragraphs: [
                'L\'<strong>assolement biennal</strong>, pratiqué dès l\'Antiquité, alternait une année de culture et une année de jachère. Au Moyen Âge, l\'assolement triennal divisa les terres en trois soles : céréale d\'hiver (blé, seigle), céréale de printemps (orge, avoine) et jachère pâturée. Cette innovation augmenta la production de 50 % en supprimant une année de repos sur trois.',
                'La <strong>révolution agricole</strong> des XVIIIe et XIXe siècles, initiée en Angleterre par des agronomes comme Charles Townshend, remplaça la jachère par des cultures fourragères (trèfle, navet). La rotation de Norfolk — blé, navet, orge, trèfle — permit de nourrir le bétail toute l\'année tout en enrichissant le sol en azote grâce au trèfle. Cette innovation fut un facteur clé de la révolution industrielle en libérant de la main-d\'œuvre agricole.'
              ],
              highlight: 'La rotation de Norfolk au XVIIIe siècle a éliminé la jachère et doublé les rendements, contribuant à la révolution industrielle.'
            },
            {
              title: 'Rotations modernes et couverture du sol',
              paragraphs: [
                'Les <strong>rotations modernes</strong> intègrent des cultures intermédiaires pièges à nitrates (CIPAN), semées entre deux cultures principales pour capter l\'azote résiduel et éviter sa lixiviation vers les nappes phréatiques. La moutarde, la phacélie et le seigle sont fréquemment utilisés comme couverts végétaux. Ces cultures protègent également le sol de l\'érosion et stimulent l\'activité biologique.',
                'L\'<strong>agriculture de conservation</strong> combine trois piliers : la rotation diversifiée, la couverture permanente du sol et le non-labour ou travail minimal du sol. Cette approche, développée au Brésil dans les années 1970, est aujourd\'hui pratiquée sur plus de 200 millions d\'hectares dans le monde. Elle permet de reconstituer la matière organique du sol, de réduire l\'érosion de 90 % et de diminuer la consommation de carburant de 50 à 70 %.'
              ],
              highlight: 'L\'agriculture de conservation est pratiquée sur plus de 200 millions d\'hectares dans le monde, principalement en Amérique du Sud et en Australie.'
            }
          ],
          quiz: [
            { q: 'Quel est le principe fondamental de la rotation des cultures ?', opts: ['Cultiver la même espèce chaque année', 'Alterner les familles botaniques', 'Ne jamais labourer', 'Irriguer en permanence'], correct: 1, explanation: 'La rotation des cultures repose sur l\'alternance de familles botaniques différentes pour rompre les cycles de maladies et équilibrer les nutriments du sol.' },
            { q: 'Qu\'a apporté la rotation de Norfolk ?', opts: ['La jachère obligatoire', 'L\'élimination de la jachère grâce aux cultures fourragères', 'L\'usage des pesticides', 'L\'irrigation par aspersion'], correct: 1, explanation: 'La rotation de Norfolk (blé, navet, orge, trèfle) a remplacé la jachère par des cultures fourragères, augmentant les rendements et nourrissant le bétail toute l\'année.' },
            { q: 'Quels sont les trois piliers de l\'agriculture de conservation ?', opts: ['Labour, engrais, irrigation', 'Rotation, couverture du sol, travail minimal', 'Monoculture, pesticides, drainage', 'Jachère, pâturage, déforestation'], correct: 1, explanation: 'L\'agriculture de conservation repose sur trois piliers : rotation diversifiée, couverture permanente du sol et non-labour ou travail minimal du sol.' }
          ],
          definitions: [
            { term: 'Rotation des cultures', def: 'Succession planifiée de différentes cultures sur une même parcelle au fil des années pour maintenir la fertilité et limiter les maladies.' },
            { term: 'Assolement', def: 'Division des terres cultivables en soles portant des cultures différentes selon un cycle défini.' },
            { term: 'Jachère', def: 'Période de repos d\'une terre cultivable pendant laquelle aucune culture n\'est semée, permettant la reconstitution de la fertilité.' },
            { term: 'CIPAN', def: 'Culture intermédiaire piège à nitrates, semée entre deux cultures principales pour capter l\'azote résiduel et protéger le sol.' },
            { term: 'Agriculture de conservation', def: 'Système agricole combinant rotation diversifiée, couverture permanente du sol et travail minimal du sol pour préserver les ressources.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'empereur romain Virgile recommandait déjà la rotation des cultures dans ses Géorgiques (29 av. J.-C.), alternant blé et légumineuses pour reposer la terre.' },
            { front: '💡 Le savais-tu ?', back: 'La monoculture de maïs, pratiquée sur la même parcelle pendant 10 ans, peut entraîner une baisse de rendement de 15 à 20 % par rapport à une rotation maïs-soja.' },
            { front: '💡 Le savais-tu ?', back: 'Au Brésil, l\'agriculture de conservation a permis de réduire l\'érosion des sols de 90 % sur les terres rouges du Paraná, sauvant des millions d\'hectares de la dégradation.' }
          ]
        },
        {
          slug: 'protection-des-cultures',
          title: 'Protection des cultures',
          description: 'Ravageurs, maladies, adventices et méthodes de lutte intégrée.',
          intro: 'Les cultures sont menacées par une multitude de bioagresseurs : insectes ravageurs, champignons pathogènes, bactéries, virus et plantes adventices. La <strong>protection des cultures</strong> vise à limiter ces pertes tout en minimisant l\'impact sur l\'environnement et la santé humaine.',
          introHighlight: '<strong>La lutte intégrée (IPM)</strong> combine méthodes biologiques, culturales, mécaniques et chimiques pour maintenir les populations de ravageurs sous le seuil de nuisibilité économique.',
          intro2: '',
          sections: [
            {
              title: 'Les principaux bioagresseurs',
              paragraphs: [
                'Les <strong>insectes ravageurs</strong> causent environ 15 % des pertes de récolte mondiales. Le doryphore de la pomme de terre, la pyrale du maïs, le puceron vert du blé et le charançon du riz comptent parmi les plus dévastateurs. Certains insectes agissent comme vecteurs de virus : le puceron transmet la jaunisse nanisante de l\'orge, et la cicadelle propage la flavescence dorée de la vigne.',
                'Les <strong>maladies fongiques</strong> sont responsables de 10 à 15 % des pertes. Le mildiou de la pomme de terre (Phytophthora infestans), qui provoqua la Grande Famine irlandaise en 1845, reste une menace majeure. L\'oïdium, la rouille et la septoriose affectent les céréales. Les <strong>adventices</strong> (mauvaises herbes) concurrencent les cultures pour la lumière, l\'eau et les nutriments : non maîtrisées, elles peuvent réduire les rendements de 50 à 80 %.'
              ],
              highlight: 'Le mildiou de la pomme de terre causa la Grande Famine irlandaise (1845-1852), entraînant la mort d\'un million de personnes et l\'émigration de deux millions d\'Irlandais.'
            },
            {
              title: 'La lutte intégrée (IPM)',
              paragraphs: [
                'La <strong>lutte intégrée</strong> (Integrated Pest Management) est une approche qui combine plusieurs méthodes de protection en privilégiant les solutions les moins nocives pour l\'environnement. Elle repose sur quatre étapes : l\'identification précise du bioagresseur, le suivi des populations (piégeage, comptage), la détermination du seuil de nuisibilité économique et le choix de la méthode de lutte la plus appropriée.',
                'Les <strong>méthodes biologiques</strong> utilisent des organismes vivants pour contrôler les ravageurs. La coccinelle Adalia bipunctata dévore jusqu\'à 100 pucerons par jour. Le trichogramme, micro-guêpe parasitoïde, pond ses œufs dans ceux de la pyrale du maïs. Le champignon Beauveria bassiana infecte et tue les insectes ravageurs. Le <strong>biocontrôle</strong> représente aujourd\'hui un marché mondial de plus de 5 milliards d\'euros en croissance annuelle de 15 %.'
              ],
              highlight: 'Une seule coccinelle peut dévorer jusqu\'à 5 000 pucerons au cours de sa vie, en faisant un auxiliaire précieux de l\'agriculteur.'
            },
            {
              title: 'Alternatives aux pesticides de synthèse',
              paragraphs: [
                'Les <strong>biopesticides</strong> constituent une alternative en plein essor. Le Bacillus thuringiensis (Bt), bactérie produisant des toxines insecticides spécifiques, est utilisé depuis les années 1930. Les substances naturelles comme l\'huile de neem, le pyrèthre et le soufre complètent l\'arsenal. Les <strong>stimulateurs de défense des plantes</strong> (SDP) activent les mécanismes immunitaires naturels des cultures.',
                'L\'<strong>agroécologie</strong> propose des solutions systémiques : haies pour abriter les auxiliaires, bandes fleuries pour nourrir les pollinisateurs, associations de cultures (le poireau repousse la mouche de la carotte et inversement). Le push-pull, développé en Afrique de l\'Est, associe des plantes répulsives dans le champ (Desmodium) et attractives en bordure (herbe à éléphant) pour contrôler les foreurs de tige du maïs.'
              ],
              highlight: 'La technique push-pull a permis de tripler les rendements de maïs en Afrique de l\'Est tout en éliminant les pesticides chimiques.'
            }
          ],
          quiz: [
            { q: 'Quel pourcentage des pertes de récolte mondiales est causé par les insectes ravageurs ?', opts: ['5 %', '15 %', '30 %', '50 %'], correct: 1, explanation: 'Les insectes ravageurs causent environ 15 % des pertes de récolte mondiales, ce qui représente des milliards de dollars de dommages chaque année.' },
            { q: 'Qu\'est-ce que la lutte intégrée (IPM) ?', opts: ['L\'utilisation exclusive de pesticides chimiques', 'La combinaison de méthodes biologiques, culturales et chimiques', 'L\'interdiction totale de tout traitement', 'L\'utilisation de plantes transgéniques uniquement'], correct: 1, explanation: 'La lutte intégrée combine plusieurs méthodes de protection (biologiques, culturales, mécaniques, chimiques) en privilégiant les solutions les moins nocives pour l\'environnement.' },
            { q: 'Comment fonctionne la technique push-pull ?', opts: ['On pousse les ravageurs avec du vent', 'Des plantes répulsives dans le champ et attractives en bordure', 'On tire manuellement les insectes', 'On utilise des pièges électriques'], correct: 1, explanation: 'Le push-pull utilise des plantes répulsives (Desmodium) dans le champ pour repousser les ravageurs et des plantes attractives (herbe à éléphant) en bordure pour les piéger.' }
          ],
          definitions: [
            { term: 'Lutte intégrée (IPM)', def: 'Approche combinant méthodes biologiques, culturales, mécaniques et chimiques pour maintenir les ravageurs sous le seuil de nuisibilité économique.' },
            { term: 'Biocontrôle', def: 'Ensemble des méthodes de protection des plantes utilisant des organismes vivants ou des substances naturelles pour contrôler les bioagresseurs.' },
            { term: 'Adventice', def: 'Plante poussant spontanément dans une culture sans y avoir été semée, en concurrence avec la culture pour les ressources.' },
            { term: 'Parasitoïde', def: 'Organisme dont la larve se développe aux dépens d\'un hôte qu\'elle finit par tuer, utilisé en lutte biologique.' },
            { term: 'Seuil de nuisibilité économique', def: 'Niveau de population d\'un ravageur à partir duquel les dégâts causés justifient économiquement une intervention de lutte.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le DDT, insecticide de synthèse massivement utilisé après 1945, a été interdit dans la plupart des pays dans les années 1970 après que Rachel Carson eut dénoncé ses effets dans Printemps silencieux (1962).' },
            { front: '💡 Le savais-tu ?', back: 'Les abeilles pollinisent environ 75 % des cultures alimentaires mondiales. Leur déclin dû aux pesticides néonicotinoïdes menace directement la sécurité alimentaire mondiale.' },
            { front: '💡 Le savais-tu ?', back: 'En France, le plan Écophyto vise à réduire de 50 % l\'utilisation de produits phytosanitaires. Le biocontrôle représente désormais plus de 12 % du marché français de la protection des cultures.' }
          ]
        },
        {
          slug: 'agriculture-de-precision',
          title: 'Agriculture de précision',
          description: 'Technologies numériques, capteurs, drones et intelligence artificielle au service de l\'agronomie.',
          intro: 'L\'<strong>agriculture de précision</strong> utilise les technologies numériques pour optimiser chaque opération culturale à l\'échelle de la parcelle, voire de la plante individuelle. Capteurs, GPS, drones et intelligence artificielle permettent de réduire les intrants tout en augmentant les rendements.',
          introHighlight: '<strong>Le GPS et les capteurs embarqués</strong> permettent de moduler les apports d\'engrais et de pesticides au mètre près, réduisant les coûts et l\'impact environnemental de 20 à 30 %.',
          intro2: '',
          sections: [
            {
              title: 'Capteurs et télédétection',
              paragraphs: [
                'Les <strong>capteurs de sol</strong> mesurent en temps réel l\'humidité, la conductivité électrique et la température à différentes profondeurs. Montés sur un quad ou un outil de travail du sol, ils cartographient l\'hétérogénéité intra-parcellaire en quelques heures. Les <strong>capteurs optiques</strong> embarqués sur le tracteur analysent la réflectance du couvert végétal pour estimer l\'indice de végétation (NDVI), indicateur de la biomasse et de l\'état nutritionnel des plantes.',
                'La <strong>télédétection satellitaire</strong> fournit des images multispectrales à haute résolution (Sentinel-2 offre 10 mètres de résolution tous les 5 jours). Ces images permettent de détecter le stress hydrique, les carences nutritives et les attaques de ravageurs sur de grandes surfaces. Les <strong>drones agricoles</strong> complètent le dispositif avec une résolution centimétrique, idéale pour les petites parcelles et les cultures à haute valeur ajoutée.'
              ],
              highlight: 'Le satellite Sentinel-2 fournit gratuitement des images de toutes les terres agricoles du monde tous les 5 jours avec une résolution de 10 mètres.'
            },
            {
              title: 'Modulation intra-parcellaire',
              paragraphs: [
                'La <strong>modulation de dose</strong> consiste à ajuster la quantité d\'intrants (semences, engrais, pesticides) en chaque point de la parcelle en fonction des besoins réels. Le système repose sur un GPS centimétrique (RTK), une carte de préconisation et un régulateur sur l\'épandeur ou le pulvérisateur. On distingue la modulation en temps réel (le capteur mesure et ajuste instantanément) et la modulation sur carte (préparée à l\'avance à partir de données satellites et d\'analyses de sol).',
                'Les résultats montrent des <strong>économies significatives</strong> : 10 à 20 % d\'engrais azoté en moins sans perte de rendement, réduction de 15 à 30 % des herbicides grâce au traitement localisé, et amélioration de l\'homogénéité des récoltes. En viticulture, la modulation permet d\'adapter les vendanges à la maturité réelle de chaque zone du vignoble.'
              ],
              highlight: 'La modulation de dose permet d\'économiser 10 à 20 % d\'engrais azoté tout en maintenant, voire en augmentant, les rendements.'
            },
            {
              title: 'Intelligence artificielle et robotique agricole',
              paragraphs: [
                'L\'<strong>intelligence artificielle</strong> transforme l\'agriculture par la reconnaissance d\'images (identification automatique des adventices, détection précoce des maladies), la modélisation prédictive (prévision des rendements, alertes ravageurs) et l\'optimisation des itinéraires techniques. Les algorithmes de deep learning, entraînés sur des millions d\'images, identifient les maladies foliaires avec une précision supérieure à 95 %.',
                'Les <strong>robots agricoles</strong> autonomes se développent rapidement : robots de désherbage mécanique guidés par caméra (Naïo Oz, Ecorobotix), robots de traite (Lely, DeLaval), et drones de pulvérisation. Le marché mondial de la robotique agricole devrait atteindre 20 milliards de dollars en 2028. Ces technologies répondent à la pénurie croissante de main-d\'œuvre agricole tout en réduisant l\'usage de produits chimiques.'
              ],
              highlight: 'Les robots de désherbage par micro-pulvérisation ciblée réduisent de 90 % la quantité d\'herbicides utilisée par rapport au traitement en plein.'
            }
          ],
          quiz: [
            { q: 'Que mesure l\'indice NDVI ?', opts: ['L\'acidité du sol', 'La biomasse et l\'état nutritionnel du couvert végétal', 'La température de l\'air', 'La profondeur de la nappe phréatique'], correct: 1, explanation: 'Le NDVI (Normalized Difference Vegetation Index) est un indice de réflectance mesurant la quantité et la vigueur de la végétation, indicateur de biomasse et d\'état nutritionnel.' },
            { q: 'Qu\'est-ce que la modulation de dose ?', opts: ['Augmenter uniformément les engrais', 'Ajuster les intrants en chaque point de la parcelle selon les besoins', 'Supprimer tous les traitements chimiques', 'Irriguer par goutte-à-goutte'], correct: 1, explanation: 'La modulation de dose ajuste la quantité d\'intrants (semences, engrais, pesticides) en chaque point de la parcelle en fonction des besoins réels, grâce au GPS et aux capteurs.' },
            { q: 'Quelle économie d\'herbicides les robots de micro-pulvérisation permettent-ils ?', opts: ['20 %', '50 %', '70 %', '90 %'], correct: 3, explanation: 'Les robots de désherbage par micro-pulvérisation ciblée peuvent réduire de 90 % la quantité d\'herbicides en ne traitant que les adventices détectées par caméra.' }
          ],
          definitions: [
            { term: 'Agriculture de précision', def: 'Approche utilisant les technologies numériques (GPS, capteurs, drones, IA) pour optimiser les pratiques agricoles à l\'échelle intra-parcellaire.' },
            { term: 'NDVI', def: 'Indice de végétation par différence normalisée, calculé à partir de la réflectance dans le rouge et le proche infrarouge, indiquant la vigueur végétale.' },
            { term: 'RTK', def: 'Real-Time Kinematic : technique de positionnement GPS centimétrique en temps réel, utilisée pour le guidage des machines agricoles.' },
            { term: 'Modulation de dose', def: 'Ajustement de la quantité d\'intrants appliqués en chaque point de la parcelle selon les besoins locaux, à partir de cartes ou de capteurs.' },
            { term: 'Télédétection', def: 'Acquisition d\'informations sur un objet ou une surface à distance, par analyse du rayonnement électromagnétique réfléchi ou émis.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le premier GPS agricole commercial a été introduit en 1994 par John Deere. Aujourd\'hui, plus de 70 % des grandes exploitations céréalières en France utilisent un guidage GPS.' },
            { front: '💡 Le savais-tu ?', back: 'Le robot Ecorobotix utilise des caméras et l\'IA pour détecter chaque adventice individuellement et l\'asperger d\'une micro-dose d\'herbicide, réduisant les volumes de 95 %.' },
            { front: '💡 Le savais-tu ?', back: 'Les données satellites Sentinel de l\'Agence spatiale européenne sont entièrement gratuites et ouvertes, permettant même aux petits agriculteurs d\'accéder à l\'agriculture de précision.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 2 — Permaculture
    // ──────────────────────────────────────────────
    {
      slug: 'permaculture',
      title: 'Permaculture',
      description: 'Éthique, principes de conception, design de systèmes résilients et autonomie alimentaire.',
      lessons: [
        {
          slug: 'fondements-de-la-permaculture',
          title: 'Fondements de la permaculture',
          description: 'Histoire, éthique et principes fondateurs de la permaculture.',
          intro: 'La <strong>permaculture</strong>, contraction de « permanent agriculture » puis de « permanent culture », est un système de conception fondé sur l\'observation des écosystèmes naturels. Créée dans les années 1970 par Bill Mollison et David Holmgren en Australie, elle propose une approche globale de l\'aménagement du territoire.',
          introHighlight: '<strong>Les trois éthiques de la permaculture</strong> — prendre soin de la Terre, prendre soin des humains, partager équitablement — guident toutes les décisions de conception.',
          intro2: '',
          sections: [
            {
              title: 'Histoire et philosophie',
              paragraphs: [
                'La permaculture est née en <strong>Tasmanie</strong> dans les années 1970, lorsque Bill Mollison, biologiste et professeur à l\'Université de Hobart, et son étudiant David Holmgren publièrent Permaculture One (1978). Leur observation des forêts pluviales tasmaniennes les convainquit que les écosystèmes naturels, diversifiés et résilients, offraient un modèle supérieur à l\'agriculture industrielle.',
                'Initialement centrée sur l\'agriculture, la permaculture s\'est élargie à tous les aspects de l\'habitation humaine : <strong>construction écologique</strong>, gestion de l\'eau, énergie, économie locale et organisation sociale. Mollison définissait la permaculture comme « la conception consciente de paysages qui imitent les modèles et les relations trouvés dans la nature, tout en produisant une abondance de nourriture, de fibres et d\'énergie pour satisfaire les besoins locaux ».'
              ],
              highlight: 'Bill Mollison a reçu le Right Livelihood Award en 1981, souvent appelé le « prix Nobel alternatif », pour sa contribution à la permaculture.'
            },
            {
              title: 'Les trois éthiques',
              paragraphs: [
                '<strong>Prendre soin de la Terre</strong> (Earth Care) signifie préserver les sols, les forêts, l\'eau et l\'atmosphère. Toute conception permaculturelle doit régénérer plutôt qu\'épuiser les ressources naturelles. Cela implique de reconstituer les sols, de planter des arbres, de protéger la biodiversité et de fermer les cycles de nutriments.',
                '<strong>Prendre soin des humains</strong> (People Care) vise à satisfaire les besoins fondamentaux : nourriture saine, logement, éducation, travail épanouissant et lien social. <strong>Partager équitablement</strong> (Fair Share) invite à limiter la consommation au nécessaire et à redistribuer les surplus. Ce troisième pilier, parfois formulé « limiter la consommation et redistribuer les excédents », relie la permaculture aux questions de justice sociale.'
              ],
              highlight: 'Les trois éthiques de la permaculture forment un triangle indissociable : on ne peut prendre soin de la Terre sans prendre soin des humains, ni l\'inverse.'
            },
            {
              title: 'Les douze principes de Holmgren',
              paragraphs: [
                'David Holmgren a formalisé douze <strong>principes de conception</strong> en 2002 dans Permaculture: Principles and Pathways Beyond Sustainability. Parmi eux : observer et interagir, capter et stocker l\'énergie, obtenir un rendement, appliquer l\'autorégulation et accepter la rétroaction, utiliser et valoriser les ressources et les services renouvelables, et ne produire aucun déchet.',
                'D\'autres principes incluent : <strong>concevoir des motifs puis entrer dans les détails</strong> (design from patterns to details), intégrer plutôt que séparer, utiliser de petites solutions lentes, valoriser la diversité, utiliser les bordures et valoriser la marge, et répondre de manière créative au changement. Ces principes s\'appliquent aussi bien au jardin qu\'à l\'organisation d\'une entreprise ou d\'une communauté.'
              ],
              highlight: 'Le principe « observer et interagir » recommande de passer une année entière à observer un terrain avant de commencer tout aménagement.'
            }
          ],
          quiz: [
            { q: 'Qui sont les fondateurs de la permaculture ?', opts: ['Masanobu Fukuoka et Sepp Holzer', 'Bill Mollison et David Holmgren', 'Rudolf Steiner et Ehrenfried Pfeiffer', 'Rachel Carson et Aldo Leopold'], correct: 1, explanation: 'La permaculture a été fondée par Bill Mollison et David Holmgren en Tasmanie dans les années 1970, avec la publication de Permaculture One en 1978.' },
            { q: 'Quelles sont les trois éthiques de la permaculture ?', opts: ['Productivité, rentabilité, durabilité', 'Prendre soin de la Terre, des humains, partager équitablement', 'Labourer, semer, récolter', 'Biodiversité, photosynthèse, compostage'], correct: 1, explanation: 'Les trois éthiques fondatrices sont : prendre soin de la Terre (Earth Care), prendre soin des humains (People Care) et partager équitablement (Fair Share).' },
            { q: 'Combien de principes de conception David Holmgren a-t-il formalisés ?', opts: ['5', '8', '12', '20'], correct: 2, explanation: 'David Holmgren a formalisé douze principes de conception en 2002 dans son ouvrage Permaculture: Principles and Pathways Beyond Sustainability.' }
          ],
          definitions: [
            { term: 'Permaculture', def: 'Système de conception fondé sur l\'observation des écosystèmes naturels, visant à créer des habitats humains durables et productifs.' },
            { term: 'Earth Care', def: 'Première éthique de la permaculture : prendre soin de la Terre en régénérant les sols, l\'eau et la biodiversité.' },
            { term: 'People Care', def: 'Deuxième éthique de la permaculture : prendre soin des humains en satisfaisant leurs besoins fondamentaux.' },
            { term: 'Fair Share', def: 'Troisième éthique de la permaculture : limiter la consommation et redistribuer les surplus équitablement.' },
            { term: 'Design permaculturel', def: 'Processus de conception d\'un système (jardin, ferme, habitat) en appliquant les principes de la permaculture.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Bill Mollison a enseigné la permaculture à plus de 100 000 personnes dans 80 pays. Son cours de design de permaculture (PDC) de 72 heures est devenu un standard mondial.' },
            { front: '💡 Le savais-tu ?', back: 'Masanobu Fukuoka, agriculteur japonais, a développé indépendamment une approche similaire appelée « agriculture naturelle » ou « agriculture du non-agir », décrite dans La Révolution d\'un seul brin de paille (1975).' },
            { front: '💡 Le savais-tu ?', back: 'Le mot permaculture vient de l\'anglais « permanent agriculture ». Mollison et Holmgren l\'ont ensuite élargi à « permanent culture » pour englober tous les aspects de la vie humaine.' }
          ]
        },
        {
          slug: 'design-permaculturel',
          title: 'Design permaculturel',
          description: 'Zonage, secteurs, analyse du site et méthodologie de conception.',
          intro: 'Le <strong>design permaculturel</strong> est un processus méthodique de conception d\'un lieu de vie ou de production. Il s\'appuie sur une analyse approfondie du site — climat, relief, sol, eau, végétation existante — pour placer chaque élément à l\'endroit optimal.',
          introHighlight: '<strong>Le zonage en permaculture</strong> organise l\'espace en cercles concentriques autour de l\'habitation, de la zone la plus fréquentée (zone 0) à la zone sauvage (zone 5).',
          intro2: '',
          sections: [
            {
              title: 'Le zonage',
              paragraphs: [
                'Le <strong>zonage</strong> est l\'outil central du design permaculturel. Il répartit les éléments du système selon leur fréquence de visite et d\'entretien. La zone 0 est l\'habitation elle-même. La zone 1, immédiatement autour de la maison, accueille les éléments nécessitant une attention quotidienne : herbes aromatiques, salades, poulailler, composteur. La zone 2 reçoit le potager principal, le verger nain et les petits animaux.',
                'La <strong>zone 3</strong> est dédiée aux grandes cultures (céréales, pommes de terre), au verger haute tige et aux pâturages. La zone 4 est semi-sauvage : forêt gérée, pâturage extensif, récolte de bois. La zone 5, non exploitée, est réservée à la nature sauvage et sert d\'observatoire de la biodiversité. Ce modèle minimise les déplacements et l\'énergie dépensée en plaçant les éléments les plus exigeants au plus près.'
              ],
              highlight: 'Le zonage est un principe d\'efficacité énergétique : on place les éléments les plus visités au plus près de l\'habitation.'
            },
            {
              title: 'Analyse sectorielle',
              paragraphs: [
                'L\'<strong>analyse sectorielle</strong> cartographie les flux d\'énergie qui traversent le site : vent dominant, ensoleillement saisonnier, ruissellement de l\'eau, risques d\'incendie, bruit, vues agréables et désagréables. Contrairement au zonage (qui part du centre vers la périphérie), les secteurs sont des énergies extérieures qui arrivent sur le site depuis des directions spécifiques.',
                'Le designer utilise ces informations pour <strong>positionner les éléments</strong> de manière stratégique : une haie brise-vent au nord-ouest (en Europe) protège le jardin ; une mare au sud de la maison reflète la lumière et crée un microclimat plus chaud ; des arbres à feuilles caduques au sud offrent de l\'ombre en été et laissent passer la lumière en hiver. L\'objectif est de transformer les contraintes en ressources.'
              ],
              highlight: 'L\'analyse sectorielle transforme les contraintes du site en ressources : le vent dominant devient énergie éolienne, la pente devient irrigation gravitaire.'
            },
            {
              title: 'Méthode OBREDIM',
              paragraphs: [
                'La méthode <strong>OBREDIM</strong> structure le processus de design en sept étapes : Observation, Bordures (limites du projet), Ressources disponibles, Évaluation, Design, Implémentation et Maintenance. La phase d\'observation, idéalement d\'une durée d\'un an, permet de noter les variations saisonnières, les microclimats, les zones humides et sèches, et le comportement de la faune sauvage.',
                'Après l\'observation, le designer dresse l\'<strong>inventaire des ressources</strong> : compétences des habitants, budget, matériaux locaux, plantes existantes, sources d\'eau. La phase de design proprement dite place chaque élément en maximisant les connexions bénéfiques entre eux (le poulailler près du compost et du potager, la mare près du verger). L\'implémentation se fait par étapes, en commençant par les infrastructures de base (eau, accès, clôtures).'
              ],
              highlight: 'OBREDIM : Observation, Bordures, Ressources, Évaluation, Design, Implémentation, Maintenance — les sept étapes du design permaculturel.'
            }
          ],
          quiz: [
            { q: 'Combien de zones compte le modèle de zonage en permaculture ?', opts: ['3 (zones 1-3)', '5 (zones 1-5)', '6 (zones 0-5)', '10 (zones 0-9)'], correct: 2, explanation: 'Le modèle de zonage comprend 6 zones, de la zone 0 (habitation) à la zone 5 (nature sauvage), organisées en cercles concentriques.' },
            { q: 'Que cartographie l\'analyse sectorielle ?', opts: ['La profondeur du sol', 'Les flux d\'énergie extérieurs (vent, soleil, eau)', 'Les zones de culture', 'Les espèces de la faune locale'], correct: 1, explanation: 'L\'analyse sectorielle cartographie les flux d\'énergie qui traversent le site : vent, ensoleillement, ruissellement, risques, vues, etc.' },
            { q: 'Que signifie le O de OBREDIM ?', opts: ['Organisation', 'Observation', 'Optimisation', 'Orientation'], correct: 1, explanation: 'Le O de OBREDIM signifie Observation, première étape du design permaculturel, idéalement pratiquée pendant un an pour noter les variations saisonnières.' }
          ],
          definitions: [
            { term: 'Zonage', def: 'Organisation de l\'espace en cercles concentriques autour de l\'habitation selon la fréquence de visite et d\'entretien de chaque élément.' },
            { term: 'Analyse sectorielle', def: 'Cartographie des flux d\'énergie extérieurs traversant le site (vent, soleil, eau, bruit) pour positionner stratégiquement les éléments.' },
            { term: 'OBREDIM', def: 'Méthode de design en sept étapes : Observation, Bordures, Ressources, Évaluation, Design, Implémentation, Maintenance.' },
            { term: 'Connexion bénéfique', def: 'Relation entre deux éléments du design où chacun satisfait un besoin de l\'autre (ex. : le poulailler fournit du fumier au compost).' },
            { term: 'Microclimat', def: 'Conditions climatiques localisées, différentes du climat général, créées par le relief, la végétation ou les constructions.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La ferme du Bec Hellouin en Normandie, conçue selon les principes de la permaculture, produit autant de légumes par mètre carré qu\'une exploitation maraîchère conventionnelle, avec dix fois moins d\'énergie fossile.' },
            { front: '💡 Le savais-tu ?', back: 'En permaculture, on dit que chaque élément doit remplir au moins trois fonctions : un arbre peut fournir des fruits, de l\'ombre, du bois, un habitat pour les oiseaux et un brise-vent.' },
            { front: '💡 Le savais-tu ?', back: 'Le concept de zonage a été emprunté par Mollison à l\'écologie du paysage et à la géographie humaine, adaptant le modèle de Von Thünen (1826) sur les cercles d\'utilisation des terres.' }
          ]
        },
        {
          slug: 'foret-jardin',
          title: 'La forêt-jardin',
          description: 'Agroforesterie, guildes de plantes et écosystèmes comestibles multi-étagés.',
          intro: 'La <strong>forêt-jardin</strong> (ou jardin-forêt) est un système agroforestier qui imite la structure d\'une forêt naturelle en associant arbres, arbustes, herbacées, couvre-sol, lianes, racines et champignons comestibles sur plusieurs étages. Ce système produit une grande diversité d\'aliments avec un minimum d\'entretien.',
          introHighlight: '<strong>Robert Hart</strong>, pionnier de la forêt-jardin en climat tempéré, a développé le modèle des sept strates dans son jardin du Shropshire (Angleterre) à partir des années 1960.',
          intro2: '',
          sections: [
            {
              title: 'Les sept strates',
              paragraphs: [
                'La forêt-jardin s\'organise en <strong>sept strates</strong> superposées, chacune occupant un créneau écologique distinct. La canopée (strate haute) est formée de grands arbres fruitiers ou à noix : noyers, châtaigniers, cerisiers haute tige. La sous-canopée accueille des arbres fruitiers nains ou demi-tige : pommiers, poiriers, pruniers. La strate arbustive comprend les petits fruits : groseilliers, cassis, framboisiers, myrtilles.',
                'La <strong>strate herbacée</strong> regroupe les plantes vivaces comestibles : oseille, ciboulette, consoude, menthe. La strate couvre-sol (fraisiers, thym rampant) protège le sol de l\'érosion. La strate grimpante valorise l\'espace vertical avec la vigne, le kiwi, le houblon. Enfin, la strate racinaire (ou rhizosphère) inclut les plantes à racines comestibles : topinambour, oca du Pérou, et les champignons cultivés sur bois mort.'
              ],
              highlight: 'Les sept strates de la forêt-jardin : canopée, sous-canopée, arbustes, herbacées, couvre-sol, grimpantes et racines/champignons.'
            },
            {
              title: 'Les guildes de plantes',
              paragraphs: [
                'Une <strong>guilde</strong> est un groupe de plantes associées autour d\'un élément central (souvent un arbre) dont chaque membre remplit une fonction complémentaire. La guilde classique du pommier associe l\'arbre fruitier à des fixateurs d\'azote (trèfle, lupin), des plantes accumulatrices de minéraux (consoude, achillée), des répulsifs d\'insectes (ail, tanaisie), des attracteurs de pollinisateurs (bourrache, phacélie) et un couvre-sol (fraisier).',
                'La guilde s\'inspire des <strong>associations végétales naturelles</strong> observées en forêt, où chaque espèce occupe une niche écologique et contribue à la santé de l\'ensemble. Le principe des « trois sœurs » amérindiennes — maïs, haricot, courge — est l\'un des exemples les plus anciens de guilde agricole : le maïs sert de tuteur au haricot, le haricot fixe l\'azote, et la courge couvre le sol en limitant les adventices.'
              ],
              highlight: 'La guilde des « trois sœurs » (maïs, haricot, courge) est pratiquée par les peuples autochtones d\'Amérique depuis plus de 5 000 ans.'
            },
            {
              title: 'Mise en place et gestion',
              paragraphs: [
                'L\'implantation d\'une forêt-jardin suit un <strong>plan d\'établissement progressif</strong>. La première année, on plante les arbres de la canopée et de la sous-canopée, espacés de 6 à 10 mètres. Les espaces entre les arbres sont temporairement cultivés en légumes annuels ou semés en engrais verts. Les arbustes sont plantés la deuxième ou troisième année, puis les strates basses sont installées progressivement.',
                'Une forêt-jardin mature (15 à 20 ans) nécessite <strong>très peu d\'entretien</strong> : pas de labour, peu ou pas d\'arrosage (le couvert forestier retient l\'humidité), pas de traitement phytosanitaire (la biodiversité assure l\'autorégulation). La taille des arbres fruitiers et la récolte constituent l\'essentiel du travail. Martin Crawford, qui gère une forêt-jardin de 2 hectares dans le Devon, estime y consacrer seulement un jour par semaine une fois le système mature.'
              ],
              highlight: 'Une forêt-jardin mature produit de la nourriture pendant des décennies avec seulement quelques heures d\'entretien par semaine.'
            }
          ],
          quiz: [
            { q: 'Combien de strates compte une forêt-jardin ?', opts: ['3', '5', '7', '10'], correct: 2, explanation: 'La forêt-jardin s\'organise en sept strates : canopée, sous-canopée, arbustes, herbacées, couvre-sol, grimpantes et racines/champignons.' },
            { q: 'Qu\'est-ce qu\'une guilde en permaculture ?', opts: ['Un groupe de jardiniers', 'Un groupe de plantes associées remplissant des fonctions complémentaires', 'Un type de compost', 'Une méthode de taille'], correct: 1, explanation: 'Une guilde est un groupe de plantes associées autour d\'un élément central, chaque membre remplissant une fonction complémentaire (fixation d\'azote, répulsion d\'insectes, attraction de pollinisateurs, etc.).' },
            { q: 'Quelles sont les « trois sœurs » amérindiennes ?', opts: ['Blé, orge, avoine', 'Tomate, basilic, poivron', 'Maïs, haricot, courge', 'Riz, soja, thé'], correct: 2, explanation: 'Les trois sœurs amérindiennes sont le maïs (tuteur), le haricot (fixateur d\'azote) et la courge (couvre-sol), une association pratiquée depuis plus de 5 000 ans.' }
          ],
          definitions: [
            { term: 'Forêt-jardin', def: 'Système agroforestier multi-étagé imitant la structure d\'une forêt naturelle en associant arbres, arbustes et plantes comestibles.' },
            { term: 'Guilde', def: 'Association de plantes remplissant des fonctions complémentaires autour d\'un élément central, inspirée des communautés végétales naturelles.' },
            { term: 'Strate végétale', def: 'Niveau horizontal de végétation dans un écosystème forestier, défini par la hauteur des plantes.' },
            { term: 'Agroforesterie', def: 'Système d\'utilisation des terres qui intègre arbres et cultures ou élevage sur les mêmes parcelles.' },
            { term: 'Plante accumulatrice', def: 'Plante dont les racines profondes remontent les minéraux des couches inférieures du sol, les rendant disponibles pour les autres plantes.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Martin Crawford, pionnier de la forêt-jardin en Angleterre, cultive plus de 500 espèces comestibles sur seulement 2 hectares dans le Devon, avec un entretien minimal.' },
            { front: '💡 Le savais-tu ?', back: 'Les forêts tropicales traditionnelles d\'Asie du Sud-Est, comme les « jardins de case » javanais, sont des forêts-jardins ancestrales cultivées depuis des siècles.' },
            { front: '💡 Le savais-tu ?', back: 'Robert Hart a développé sa forêt-jardin de Wenlock Edge à partir de 1960, s\'inspirant des jardins étagés du Kerala (Inde) qu\'il considérait comme le modèle le plus abouti.' }
          ]
        },
        {
          slug: 'gestion-de-leau',
          title: 'Gestion de l\'eau en permaculture',
          description: 'Récupération d\'eau, swales, mares et systèmes d\'irrigation naturelle.',
          intro: 'L\'eau est la ressource la plus précieuse en permaculture. La devise « <strong>ralentir, répartir, infiltrer</strong> » résume l\'approche : capter chaque goutte de pluie, la stocker sur le terrain le plus longtemps possible et l\'infiltrer dans le sol plutôt que la laisser ruisseler.',
          introHighlight: '<strong>Un toit de 100 m²</strong> dans une région recevant 800 mm de pluie par an capte 80 000 litres d\'eau — de quoi irriguer un potager de 200 m² pendant toute la saison sèche.',
          intro2: '',
          sections: [
            {
              title: 'Swales et terrassements',
              paragraphs: [
                'Le <strong>swale</strong> (ou noue d\'infiltration sur courbe de niveau) est un fossé peu profond creusé parfaitement à l\'horizontale le long d\'une courbe de niveau. L\'eau de pluie s\'y accumule et s\'infiltre lentement dans le sol plutôt que de ruisseler en surface. Le remblai en aval du swale est planté d\'arbres dont les racines bénéficient de cette réserve d\'eau souterraine.',
                'Sur les pentes raides, les <strong>terrasses</strong> (banquettes) créent des surfaces planes qui retiennent l\'eau et le sol. Les terrasses en pierre sèche, pratiquées depuis l\'Antiquité autour de la Méditerranée, sont un chef-d\'œuvre d\'ingénierie hydraulique. En permaculture, on combine souvent swales et terrasses avec des plantations d\'arbres pour créer des systèmes agroforestiers productifs sur des terrains en pente considérés comme improductifs.'
              ],
              highlight: 'Un seul swale de 50 mètres de long sur un terrain en pente peut infiltrer 15 000 litres d\'eau lors d\'un orage de 30 mm.'
            },
            {
              title: 'Mares et zones humides',
              paragraphs: [
                'La <strong>mare</strong> est un élément multifonctionnel majeur en permaculture. Elle stocke l\'eau de pluie, crée un microclimat plus doux (la masse d\'eau tempère les gelées), abrite une biodiversité riche (amphibiens, libellules, oiseaux), reflète la lumière solaire vers les plantations voisines et peut produire des aliments (poissons, cresson, châtaignes d\'eau).',
                'L\'emplacement idéal d\'une mare se situe au point le plus haut praticable du terrain, permettant une distribution gravitaire de l\'eau. Les <strong>zones humides construites</strong> (bassins de phytoépuration) utilisent des plantes aquatiques (roseaux, iris des marais, massettes) pour filtrer les eaux grises domestiques. Un système de phytoépuration bien conçu traite les eaux usées d\'une famille de quatre personnes sur une surface de 20 à 40 m².'
              ],
              highlight: 'Une mare de 50 m³ en permaculture peut stocker l\'équivalent de 50 baignoires d\'eau de pluie pour l\'irrigation estivale.'
            },
            {
              title: 'Récupération et économie d\'eau',
              paragraphs: [
                'La <strong>récupération d\'eau de pluie</strong> par les toitures est la première étape. Des cuves de 1 000 à 10 000 litres, enterrées ou hors-sol, stockent l\'eau pour l\'irrigation. Le dimensionnement se calcule en fonction de la surface de toiture, de la pluviométrie et des besoins : un potager de 100 m² en climat tempéré nécessite environ 150 litres par m² et par saison, soit 15 000 litres.',
                'Le <strong>paillage</strong> (mulching) est la méthode la plus simple pour économiser l\'eau au jardin. Une couche de 10 à 15 cm de paille, de feuilles mortes ou de broyat de bois réduit l\'évaporation de 50 à 80 %, maintient le sol frais, nourrit les vers de terre et supprime les adventices. L\'irrigation par goutte-à-goutte, combinée au paillage, réduit la consommation d\'eau de 70 % par rapport à l\'aspersion classique.'
              ],
              highlight: 'Le paillage réduit l\'évaporation de 50 à 80 % et supprime la quasi-totalité des adventices, économisant eau et temps de désherbage.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'un swale en permaculture ?', opts: ['Un mur de soutènement', 'Un fossé d\'infiltration creusé sur courbe de niveau', 'Un système d\'irrigation par aspersion', 'Un type de composteur'], correct: 1, explanation: 'Un swale est un fossé peu profond creusé parfaitement à l\'horizontale le long d\'une courbe de niveau, permettant à l\'eau de s\'infiltrer lentement dans le sol.' },
            { q: 'De combien le paillage réduit-il l\'évaporation ?', opts: ['10 à 20 %', '30 à 40 %', '50 à 80 %', '90 à 100 %'], correct: 2, explanation: 'Une couche de paillage de 10 à 15 cm réduit l\'évaporation de 50 à 80 %, maintient le sol frais et supprime les adventices.' },
            { q: 'Quelle est la devise de la gestion de l\'eau en permaculture ?', opts: ['Pomper, stocker, distribuer', 'Ralentir, répartir, infiltrer', 'Drainer, canaliser, évacuer', 'Irriguer, fertiliser, récolter'], correct: 1, explanation: 'La devise « ralentir, répartir, infiltrer » résume l\'approche permaculturelle : capter l\'eau de pluie, la répartir sur le terrain et l\'infiltrer dans le sol.' }
          ],
          definitions: [
            { term: 'Swale', def: 'Fossé d\'infiltration peu profond creusé sur une courbe de niveau, retenant l\'eau de ruissellement pour l\'infiltrer dans le sol.' },
            { term: 'Courbe de niveau', def: 'Ligne imaginaire reliant les points de même altitude sur un terrain, utilisée pour tracer les swales et terrasses.' },
            { term: 'Paillage (mulching)', def: 'Couverture du sol par des matériaux organiques (paille, feuilles, broyat) réduisant l\'évaporation, nourrissant le sol et limitant les adventices.' },
            { term: 'Phytoépuration', def: 'Traitement des eaux usées par des plantes aquatiques (roseaux, iris) qui filtrent et décomposent les polluants.' },
            { term: 'Irrigation gravitaire', def: 'Distribution de l\'eau par la seule force de gravité, sans pompe, depuis un point de stockage en hauteur.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Geoff Lawton, permaculteur australien, a reverdi 10 hectares de désert jordanien en utilisant uniquement des swales et des plantations d\'arbres, sans irrigation artificielle, dans son projet « Greening the Desert » (2001).' },
            { front: '💡 Le savais-tu ?', back: 'Les qanats, canaux souterrains iraniens vieux de 3 000 ans, sont l\'un des plus anciens systèmes de gestion de l\'eau au monde. Ils irriguent encore des oasis en captant l\'eau des nappes phréatiques par gravité.' },
            { front: '💡 Le savais-tu ?', back: 'Un chêne mature transpire jusqu\'à 400 litres d\'eau par jour en été, créant un microclimat frais et humide sous sa canopée — un véritable climatiseur naturel.' }
          ]
        },
        {
          slug: 'sol-vivant-et-compostage',
          title: 'Sol vivant et compostage',
          description: 'Techniques de compostage, lombricompostage, BRF et régénération des sols.',
          intro: 'En permaculture, le sol est considéré comme un organisme vivant qu\'il faut <strong>nourrir plutôt que fertiliser</strong>. Le compostage transforme les déchets organiques en un amendement riche qui nourrit la vie du sol, laquelle met à son tour les nutriments à disposition des plantes.',
          introHighlight: '<strong>Le compost</strong> est le pilier de la fertilité en permaculture : il boucle le cycle des nutriments, transformant les « déchets » en ressource précieuse.',
          intro2: '',
          sections: [
            {
              title: 'Le compostage thermophile',
              paragraphs: [
                'Le <strong>compostage thermophile</strong> (à chaud) repose sur l\'activité de bactéries thermophiles qui dégradent la matière organique en produisant de la chaleur (60 à 70 °C). Pour démarrer, il faut un volume minimum d\'un mètre cube et un mélange équilibré de matières carbonées (brunes : feuilles mortes, paille, carton) et azotées (vertes : tontes, épluchures, fumier) dans un rapport C/N d\'environ 25-30:1.',
                'Le processus passe par quatre phases : la phase mésophile (montée en température), la phase thermophile (destruction des pathogènes et des graines d\'adventices), la phase de refroidissement et la phase de maturation. Un <strong>compost bien conduit</strong> est prêt en 3 à 6 mois. Le retournement toutes les deux à trois semaines accélère le processus en réapprovisionnant les micro-organismes en oxygène.'
              ],
              highlight: 'La phase thermophile (60-70 °C) détruit les agents pathogènes et les graines d\'adventices, garantissant un compost sain.'
            },
            {
              title: 'Le lombricompostage',
              paragraphs: [
                'Le <strong>lombricompostage</strong> utilise des vers de terre (principalement Eisenia fetida, le ver du fumier) pour transformer les déchets de cuisine en un compost de haute qualité appelé lombricompost ou vermicompost. Contrairement au compostage thermophile, il fonctionne à température ambiante (15 à 25 °C) et convient parfaitement aux espaces réduits (appartement, balcon).',
                'Les vers consomment quotidiennement l\'équivalent de la moitié de leur poids en matière organique. Un lombricomposteur contenant 500 g de vers (environ 1 000 individus) peut traiter 250 g de déchets par jour. Le <strong>lombricompost</strong> obtenu est cinq à sept fois plus riche en nutriments assimilables que le compost classique. Le « thé de vers », liquide récupéré à la base du lombricomposteur, constitue un engrais liquide puissant dilué au dixième.'
              ],
              highlight: 'Le lombricompost est 5 à 7 fois plus riche en nutriments assimilables que le compost thermophile classique.'
            },
            {
              title: 'BRF et régénération des sols',
              paragraphs: [
                'Le <strong>BRF</strong> (Bois Raméal Fragmenté) désigne des copeaux de rameaux de feuillus de moins de 7 cm de diamètre, broyés et épandus en surface du sol. Développée par le professeur Gilles Lemieux à l\'Université Laval (Québec) dans les années 1980, cette technique imite le processus naturel de la litière forestière. Les champignons lignivores décomposent la lignine et créent un réseau mycélien qui structure le sol.',
                'L\'application de BRF (3 à 5 cm d\'épaisseur) provoque une « faim d\'azote » temporaire la première année, les champignons mobilisant l\'azote du sol pour décomposer le bois. Dès la deuxième année, la <strong>fertilité explose</strong> : le sol s\'enrichit en humus stable, sa capacité de rétention en eau augmente de 300 % et l\'activité biologique se multiplie. Le BRF est particulièrement efficace pour régénérer les sols dégradés, les friches industrielles et les terres érodées.'
              ],
              highlight: 'Le BRF peut augmenter la capacité de rétention en eau d\'un sol de 300 % en quelques années, transformant des terres arides en sols fertiles.'
            }
          ],
          quiz: [
            { q: 'Quel rapport C/N est idéal pour un compost thermophile ?', opts: ['5:1', '15:1', '25-30:1', '50:1'], correct: 2, explanation: 'Un rapport carbone/azote de 25 à 30:1 est idéal pour le compostage thermophile, équilibrant les matières brunes (carbonées) et vertes (azotées).' },
            { q: 'Quelle espèce de ver est principalement utilisée en lombricompostage ?', opts: ['Lumbricus terrestris', 'Eisenia fetida', 'Aporrectodea caliginosa', 'Dendrobaena veneta'], correct: 1, explanation: 'Eisenia fetida, le ver du fumier ou ver rouge, est l\'espèce la plus utilisée en lombricompostage pour sa voracité et sa tolérance aux conditions de captivité.' },
            { q: 'Que signifie BRF ?', opts: ['Biologie des Racines Forestières', 'Bois Raméal Fragmenté', 'Bactéries de Renouvellement Fongique', 'Base Racinaire Fertile'], correct: 1, explanation: 'BRF signifie Bois Raméal Fragmenté : des copeaux de rameaux de feuillus de moins de 7 cm de diamètre, broyés et épandus en surface du sol.' }
          ],
          definitions: [
            { term: 'Compostage thermophile', def: 'Décomposition de la matière organique par des bactéries à haute température (60-70 °C), produisant un compost assaini en 3 à 6 mois.' },
            { term: 'Lombricompostage', def: 'Transformation des déchets organiques par des vers de terre (Eisenia fetida) en un compost de haute qualité à température ambiante.' },
            { term: 'Rapport C/N', def: 'Rapport entre la quantité de carbone et d\'azote dans un matériau organique, déterminant la vitesse de décomposition (idéal : 25-30:1).' },
            { term: 'BRF', def: 'Bois Raméal Fragmenté : copeaux de rameaux de feuillus de moins de 7 cm broyés, utilisés comme amendement du sol imitant la litière forestière.' },
            { term: 'Humus', def: 'Matière organique stable issue de la décomposition avancée des résidus végétaux et animaux, formant le réservoir de fertilité du sol.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Un foyer de quatre personnes produit environ 300 kg de déchets de cuisine compostables par an, soit l\'équivalent de 100 kg de compost mûr capable de fertiliser 50 m² de potager.' },
            { front: '💡 Le savais-tu ?', back: 'Le lombricomposteur le plus ancien connu date de l\'Égypte antique : Cléopâtre avait déclaré les vers de terre « sacrés » et leur exportation était punie de mort.' },
            { front: '💡 Le savais-tu ?', back: 'Jean Pain, inventeur provençal, chauffait sa maison et faisait rouler sa camionnette grâce au méthane produit par le compostage de 50 tonnes de broussailles par an dans les années 1970.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 3 — Élevage
    // ──────────────────────────────────────────────
    {
      slug: 'elevage',
      title: 'Élevage',
      description: 'Zootechnie, races animales, bien-être animal et systèmes d\'élevage durables.',
      lessons: [
        {
          slug: 'zootechnie-generale',
          title: 'Zootechnie générale',
          description: 'Principes fondamentaux de l\'élevage : alimentation, reproduction et sélection animale.',
          intro: 'La <strong>zootechnie</strong> est la science de l\'élevage des animaux domestiques. Elle couvre l\'alimentation, la reproduction, la sélection génétique et la gestion des troupeaux. De la domestication des premiers moutons il y a 11 000 ans à l\'élevage moderne, cette discipline a profondément façonné les paysages et les sociétés humaines.',
          introHighlight: '<strong>La domestication animale</strong>, apparue au Néolithique, est l\'une des révolutions les plus importantes de l\'histoire humaine, transformant les chasseurs-cueilleurs en pasteurs puis en éleveurs.',
          intro2: '',
          sections: [
            {
              title: 'Alimentation animale',
              paragraphs: [
                'L\'<strong>alimentation animale</strong> repose sur la couverture des besoins en énergie, protéines, minéraux, vitamines et eau. Les ruminants (bovins, ovins, caprins) transforment la cellulose des fourrages en protéines animales grâce à leur rumen, un estomac peuplé de milliards de bactéries et de protozoaires capables de digérer les fibres végétales. Les monogastriques (porcs, volailles) nécessitent des aliments plus concentrés.',
                'La <strong>ration alimentaire</strong> est calculée en fonction du stade physiologique de l\'animal (croissance, gestation, lactation, engraissement). Une vache laitière en production consomme 20 à 25 kg de matière sèche par jour et produit en moyenne 8 000 litres de lait par an. L\'indice de consommation mesure l\'efficacité de conversion : il faut environ 3 kg d\'aliment pour produire 1 kg de poulet, mais 7 à 8 kg pour 1 kg de bœuf.'
              ],
              highlight: 'L\'indice de consommation varie considérablement : 2-3 kg d\'aliment pour 1 kg de poulet, contre 7-8 kg pour 1 kg de bœuf.'
            },
            {
              title: 'Reproduction et génétique',
              paragraphs: [
                'L\'<strong>insémination artificielle</strong>, développée à grande échelle dans les années 1950, a révolutionné la sélection bovine. Un seul taureau peut engendrer des milliers de descendants grâce à la congélation du sperme, accélérant considérablement le progrès génétique. La sélection génomique, introduite en 2009 chez les bovins laitiers, permet d\'évaluer le potentiel génétique d\'un animal dès sa naissance par analyse ADN.',
                'Les <strong>objectifs de sélection</strong> ont évolué : longtemps focalisés sur la production (lait, viande, croissance), ils intègrent désormais la robustesse, la fertilité, la longévité et la résistance aux maladies. La race Holstein, qui domine la production laitière mondiale, produit en moyenne 10 000 litres de lait par an, contre 2 000 litres pour une vache rustique non sélectionnée. Cette performance a cependant un coût : fragilité sanitaire et dépendance aux concentrés.'
              ],
              highlight: 'La sélection génomique, introduite en 2009, a doublé la vitesse du progrès génétique chez les bovins laitiers en permettant l\'évaluation dès la naissance.'
            },
            {
              title: 'Systèmes d\'élevage',
              paragraphs: [
                'On distingue trois grands <strong>systèmes d\'élevage</strong> : l\'élevage extensif (pastoralisme, pâturage en plein air), l\'élevage intensif (hors-sol, bâtiments confinés) et l\'élevage semi-intensif (mixte). L\'élevage extensif valorise les ressources fourragères naturelles et entretient les paysages, mais ses rendements sont plus faibles. L\'élevage intensif maximise la production par animal mais pose des questions de bien-être et d\'environnement.',
                'L\'<strong>élevage pastoral</strong>, pratiqué sur 25 % des terres émergées, reste le mode de vie de 200 millions de personnes dans le monde. Les systèmes transhumants, qui déplacent les troupeaux entre pâturages d\'été et d\'hiver, constituent un patrimoine culturel et écologique remarquable. En France, l\'estive (montée des troupeaux en alpage) concerne encore 800 000 bovins et 2 millions d\'ovins chaque été.'
              ],
              highlight: 'L\'élevage pastoral occupe 25 % des terres émergées et fait vivre 200 millions de personnes dans le monde.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que le rumen ?', opts: ['Le cerveau des ruminants', 'Un estomac spécialisé peuplé de micro-organismes digérant la cellulose', 'Un os de la patte arrière', 'Une glande productrice de lait'], correct: 1, explanation: 'Le rumen est un compartiment de l\'estomac des ruminants contenant des milliards de bactéries et de protozoaires capables de digérer la cellulose des fourrages.' },
            { q: 'Quel est l\'indice de consommation moyen pour le poulet de chair ?', opts: ['1 kg d\'aliment/kg de viande', '2-3 kg/kg', '5-6 kg/kg', '10 kg/kg'], correct: 1, explanation: 'Il faut environ 2 à 3 kg d\'aliment pour produire 1 kg de poulet de chair, ce qui en fait l\'une des productions animales les plus efficaces en conversion alimentaire.' },
            { q: 'Depuis quand la sélection génomique est-elle utilisée chez les bovins laitiers ?', opts: ['1980', '1995', '2009', '2020'], correct: 2, explanation: 'La sélection génomique a été introduite en 2009 chez les bovins laitiers, permettant d\'évaluer le potentiel génétique dès la naissance par analyse ADN.' }
          ],
          definitions: [
            { term: 'Zootechnie', def: 'Science de l\'élevage des animaux domestiques couvrant alimentation, reproduction, sélection génétique et gestion des troupeaux.' },
            { term: 'Rumen', def: 'Premier compartiment de l\'estomac des ruminants, peuplé de micro-organismes capables de digérer la cellulose.' },
            { term: 'Indice de consommation', def: 'Rapport entre la quantité d\'aliment consommée et le poids de produit animal obtenu (viande, œufs, lait).' },
            { term: 'Insémination artificielle', def: 'Technique de reproduction consistant à introduire le sperme d\'un mâle sélectionné dans l\'appareil génital de la femelle sans accouplement naturel.' },
            { term: 'Sélection génomique', def: 'Évaluation du potentiel génétique d\'un animal par analyse de son ADN, permettant une sélection dès la naissance.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le mouton a été le premier animal domestiqué pour sa viande (il y a 11 000 ans en Mésopotamie), suivi de la chèvre, du porc et du bœuf. Le cheval n\'a été domestiqué que 5 500 ans plus tard.' },
            { front: '💡 Le savais-tu ?', back: 'Une vache produit en moyenne 30 litres de salive par jour, nécessaires au bon fonctionnement de son rumen. Elle rumine 8 heures par jour, mâchant chaque bouchée 40 à 70 fois.' },
            { front: '💡 Le savais-tu ?', back: 'La race Holstein, originaire des Pays-Bas, domine la production laitière mondiale : elle représente 93 % du cheptel laitier aux États-Unis et produit en moyenne 10 000 litres de lait par an.' }
          ]
        },
        {
          slug: 'elevage-bovin',
          title: 'Élevage bovin',
          description: 'Races, conduite de troupeau, production laitière et engraissement.',
          intro: 'L\'<strong>élevage bovin</strong> est le premier secteur de l\'élevage mondial en valeur. Avec 1 milliard de têtes de bétail, les bovins fournissent lait, viande, cuir et force de travail. La filière se divise en deux branches principales : la production laitière et la production de viande (allaitante).',
          introHighlight: '<strong>La France</strong> possède le premier cheptel bovin d\'Europe avec 17 millions de têtes et la plus grande diversité de races au monde (plus de 40 races).',
          intro2: '',
          sections: [
            {
              title: 'Races et aptitudes',
              paragraphs: [
                'Les races bovines se classent en trois catégories selon leur aptitude principale. Les <strong>races laitières</strong> (Holstein, Montbéliarde, Normande) sont sélectionnées pour maximiser la production de lait. Les <strong>races à viande</strong> (Charolaise, Limousine, Blonde d\'Aquitaine, Angus) sont sélectionnées pour la croissance musculaire et la qualité de la carcasse. Les races mixtes (Simmental, Salers, Aubrac) combinent production laitière et aptitude bouchère.',
                'La <strong>Charolaise</strong>, originaire du Charolais (Saône-et-Loire), est la première race à viande française avec 1,6 million de vaches. Son format imposant (une vache pèse 700 à 900 kg) et sa croissance musculaire remarquable en font une race d\'exportation présente dans 70 pays. L\'Aubrac, race rustique des plateaux volcaniques du Massif central, connaît un regain d\'intérêt pour sa robustesse et la qualité de sa viande.'
              ],
              highlight: 'La France compte plus de 40 races bovines, la plus grande diversité au monde, du Holstein laitier à l\'Aubrac montagnard.'
            },
            {
              title: 'Production laitière',
              paragraphs: [
                'La <strong>production laitière</strong> repose sur un cycle reproductif annuel : la vache met bas un veau puis est traite pendant 10 mois (période de lactation). Elle est tarie (arrêt de la traite) deux mois avant le vêlage suivant. La traite, effectuée deux fois par jour, est de plus en plus automatisée grâce aux robots de traite (25 % des exploitations laitières françaises en 2025).',
                'Le <strong>lait cru</strong> contient en moyenne 4 % de matière grasse, 3,3 % de protéines et 4,8 % de lactose. Sa composition varie selon la race (le lait de Jersiaise est plus riche que celui de Holstein), l\'alimentation (le pâturage augmente les oméga-3) et le stade de lactation. La France produit 24 milliards de litres de lait par an, transformés en une extraordinaire diversité de fromages (plus de 1 200 variétés).'
              ],
              highlight: 'La France produit plus de 1 200 variétés de fromages à partir de 24 milliards de litres de lait par an.'
            },
            {
              title: 'Élevage allaitant et engraissement',
              paragraphs: [
                'En <strong>élevage allaitant</strong>, les vaches nourrissent leur veau au pâturage pendant 6 à 9 mois. Les veaux sont ensuite sevrés et orientés soit vers l\'engraissement (production de jeunes bovins), soit vers le renouvellement du troupeau (génisses). Les systèmes herbagers extensifs, dominants dans le Massif central et le Charolais, valorisent des prairies permanentes inaptes à la culture.',
                'L\'<strong>engraissement</strong> vise à développer la masse musculaire et le persillé (gras intramusculaire qui donne le goût) avant l\'abattage. En France, les jeunes bovins sont engraissés pendant 12 à 18 mois avec une ration à base de maïs ensilage et de concentrés. Les systèmes à l\'herbe, plus lents (bœuf de 30 mois), produisent une viande plus persillée et plus goûteuse, valorisée sous des labels de qualité (Label Rouge, AOP).'
              ],
              highlight: 'Le bœuf de 30 mois élevé à l\'herbe développe un persillé supérieur qui lui confère une saveur recherchée par les gastronomes.'
            }
          ],
          quiz: [
            { q: 'Quelle est la première race à viande en France ?', opts: ['Limousine', 'Charolaise', 'Blonde d\'Aquitaine', 'Angus'], correct: 1, explanation: 'La Charolaise est la première race à viande française avec 1,6 million de vaches, reconnue pour son format imposant et sa croissance musculaire.' },
            { q: 'Combien de temps dure la lactation d\'une vache laitière ?', opts: ['6 mois', '8 mois', '10 mois', '12 mois'], correct: 2, explanation: 'La lactation d\'une vache laitière dure environ 10 mois, suivie d\'une période de tarissement de 2 mois avant le vêlage suivant.' },
            { q: 'Qu\'est-ce que le persillé dans la viande bovine ?', opts: ['Un assaisonnement', 'Le gras intramusculaire qui donne le goût', 'La couleur rouge de la viande', 'Un label de qualité'], correct: 1, explanation: 'Le persillé désigne les infiltrations de gras dans le muscle, visibles sous forme de marbrures blanches, qui fondent à la cuisson et donnent saveur et tendreté.' }
          ],
          definitions: [
            { term: 'Race laitière', def: 'Race bovine sélectionnée pour maximiser la production de lait (ex. : Holstein, Montbéliarde, Normande).' },
            { term: 'Race allaitante', def: 'Race bovine sélectionnée pour la production de viande, dont les vaches nourrissent leurs veaux au pâturage (ex. : Charolaise, Limousine).' },
            { term: 'Tarissement', def: 'Période de repos de la mamelle (2 mois) avant le vêlage, permettant la régénération du tissu mammaire.' },
            { term: 'Persillé', def: 'Gras intramusculaire visible sous forme de marbrures blanches dans la viande, contribuant à sa saveur et sa tendreté.' },
            { term: 'Robot de traite', def: 'Système automatisé permettant à la vache de se faire traire librement plusieurs fois par jour sans intervention humaine.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La vache la plus productive du monde, une Holstein américaine, a produit 35 000 litres de lait en une seule lactation, soit près de 100 litres par jour pendant 10 mois.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Aubrac est l\'une des plus anciennes races bovines françaises. Ses ancêtres, représentés dans les grottes de Lascaux, peuplent le Massif central depuis des millénaires.' },
            { front: '💡 Le savais-tu ?', back: 'Le fromage Comté AOP est produit exclusivement à partir de lait de vaches Montbéliardes ou Simmental françaises élevées dans le Jura, avec un cahier des charges très strict.' }
          ]
        },
        {
          slug: 'aviculture',
          title: 'Aviculture',
          description: 'Élevage de volailles : poules pondeuses, poulets de chair, canards et dindes.',
          intro: 'L\'<strong>aviculture</strong> est l\'élevage des oiseaux domestiques pour la production d\'œufs, de viande et de plumes. Avec 25 milliards de poulets dans le monde, c\'est le secteur d\'élevage le plus dynamique, offrant la protéine animale la plus accessible et la plus efficiente en conversion alimentaire.',
          introHighlight: '<strong>L\'œuf de poule</strong> est l\'aliment le plus complet et le moins cher du monde : il contient tous les acides aminés essentiels et coûte moins de 0,20 € en France.',
          intro2: '',
          sections: [
            {
              title: 'Poules pondeuses',
              paragraphs: [
                'La <strong>poule pondeuse</strong> moderne (souche Hy-Line, Lohmann, Isa Brown) pond en moyenne 320 œufs par an, contre 100 pour une poule de basse-cour non sélectionnée. La ponte commence vers 18 semaines d\'âge et dure 12 à 14 mois. L\'œuf se forme en 24 à 26 heures dans l\'oviducte : le jaune (ovule) est entouré de blanc (albumen), puis enveloppé de membranes coquillières et d\'une coquille calcaire.',
                'Les modes d\'élevage se distinguent par un code inscrit sur chaque œuf. Le code <strong>0</strong> désigne l\'élevage biologique (plein air avec alimentation bio), le code 1 le plein air, le code 2 le sol (en bâtiment sans cage) et le code 3 l\'élevage en cage (aménagée depuis 2012 en Europe). La France est le premier producteur d\'œufs en Europe avec 15 milliards d\'œufs par an, et la part des élevages alternatifs (codes 0, 1, 2) dépasse désormais 70 %.'
              ],
              highlight: 'La poule pondeuse moderne pond 320 œufs par an, soit presque un œuf par jour pendant 10 mois.'
            },
            {
              title: 'Poulets de chair',
              paragraphs: [
                'Le <strong>poulet de chair</strong> conventionnel (souche Ross, Cobb) atteint son poids d\'abattage (2 kg) en seulement 35 à 42 jours grâce à une sélection génétique intensive. Cette croissance ultrarapide pose des problèmes de bien-être : boiteries, ascite (accumulation de liquide), et mortalité accrue. Les poulets Label Rouge, élevés en plein air pendant 81 jours minimum avec des souches à croissance lente, offrent une alternative de qualité.',
                'Le <strong>poulet fermier</strong> Label Rouge représente 15 % de la production française. Il dispose d\'un accès à l\'extérieur dès l\'âge de 6 semaines, d\'une densité maximale de 11 animaux par m² en bâtiment (contre 22 en conventionnel) et d\'une alimentation composée à 75 % minimum de céréales. Le poulet de Bresse, seule volaille bénéficiant d\'une AOC/AOP, est élevé pendant 4 mois minimum en liberté dans les prairies bressanes.'
              ],
              highlight: 'Le poulet de Bresse est la seule volaille au monde à bénéficier d\'une appellation d\'origine protégée, depuis 1957.'
            },
            {
              title: 'Canards et palmipèdes',
              paragraphs: [
                'La France est le premier producteur mondial de <strong>foie gras</strong>, avec 15 000 tonnes par an (75 % de la production mondiale). Le gavage, pratiqué pendant 12 à 15 jours sur le canard mulard (hybride de Barbarie et de Pékin), provoque une stéatose hépatique réversible : le foie passe de 80 g à 500-600 g. Cette pratique, ancestrale depuis l\'Égypte antique, fait l\'objet de controverses éthiques croissantes.',
                'L\'élevage du <strong>canard à rôtir</strong> (canard de Barbarie, canard de Pékin) et de la dinde constitue l\'autre volet des palmipèdes gras. Le canard de Barbarie est élevé pendant 10 à 12 semaines pour sa chair maigre et ferme. La <strong>grippe aviaire</strong> (influenza aviaire hautement pathogène H5N1) représente le principal risque sanitaire de la filière, entraînant l\'abattage de millions de volailles lors des épizooties.'
              ],
              highlight: 'La France produit 75 % du foie gras mondial, un savoir-faire artisanal transmis depuis l\'Antiquité égyptienne.'
            }
          ],
          quiz: [
            { q: 'Que signifie le code 0 sur un œuf ?', opts: ['Élevage en cage', 'Élevage au sol', 'Élevage en plein air', 'Élevage biologique'], correct: 3, explanation: 'Le code 0 sur un œuf désigne l\'élevage biologique : les poules vivent en plein air avec un accès permanent à l\'extérieur et une alimentation issue de l\'agriculture biologique.' },
            { q: 'En combien de jours un poulet de chair conventionnel atteint-il son poids d\'abattage ?', opts: ['21 jours', '35-42 jours', '81 jours', '120 jours'], correct: 1, explanation: 'Le poulet de chair conventionnel atteint 2 kg en 35 à 42 jours grâce à la sélection génétique, contre 81 jours minimum pour un poulet Label Rouge.' },
            { q: 'Quel pays est le premier producteur mondial de foie gras ?', opts: ['Hongrie', 'Espagne', 'France', 'Chine'], correct: 2, explanation: 'La France est le premier producteur mondial de foie gras avec environ 15 000 tonnes par an, soit 75 % de la production mondiale.' }
          ],
          definitions: [
            { term: 'Aviculture', def: 'Élevage des oiseaux domestiques (poules, poulets, dindes, canards) pour la production d\'œufs, de viande et de plumes.' },
            { term: 'Souche', def: 'Lignée génétique sélectionnée pour des performances spécifiques (ponte, croissance, résistance) au sein d\'une espèce de volaille.' },
            { term: 'Label Rouge', def: 'Signe officiel de qualité français garantissant des conditions d\'élevage supérieures et un goût reconnu par des tests organoleptiques.' },
            { term: 'Gavage', def: 'Alimentation forcée des palmipèdes (canards, oies) pendant 12 à 15 jours pour produire le foie gras par stéatose hépatique.' },
            { term: 'Influenza aviaire', def: 'Maladie virale hautement contagieuse affectant les oiseaux, causée par les virus de type H5N1, pouvant entraîner une mortalité massive.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La poule rouge de la jungle (Gallus gallus), ancêtre de toutes les poules domestiques, vit encore à l\'état sauvage en Asie du Sud-Est. Elle ne pond que 10 à 15 œufs par an.' },
            { front: '💡 Le savais-tu ?', back: 'Le record du monde de ponte est détenu par une poule Leghorn australienne qui a pondu 364 œufs en 365 jours en 1979.' },
            { front: '💡 Le savais-tu ?', back: 'Les Égyptiens pratiquaient déjà le gavage des oies il y a 4 500 ans, comme en témoignent les bas-reliefs de la nécropole de Saqqarah.' }
          ]
        },
        {
          slug: 'apiculture',
          title: 'Apiculture',
          description: 'Biologie de l\'abeille, conduite du rucher, récolte du miel et pollinisation.',
          intro: 'L\'<strong>apiculture</strong> est l\'élevage des abeilles mellifères (Apis mellifera) pour la production de miel, de cire, de pollen, de propolis et de gelée royale. Au-delà de la production, les abeilles rendent un service écosystémique inestimable : la pollinisation de 75 % des cultures alimentaires mondiales.',
          introHighlight: '<strong>La valeur économique de la pollinisation</strong> par les abeilles est estimée à 150 milliards d\'euros par an dans le monde, soit bien plus que la valeur du miel produit.',
          intro2: '',
          sections: [
            {
              title: 'Biologie de la colonie',
              paragraphs: [
                'Une colonie d\'abeilles compte 40 000 à 60 000 individus organisés en trois castes. La <strong>reine</strong>, unique femelle fertile, pond jusqu\'à 2 000 œufs par jour au pic de saison. Les <strong>ouvrières</strong> (femelles stériles) accomplissent successivement toutes les tâches de la ruche : nettoyeuse, nourrice, bâtisseuse, gardienne, butineuse. Les <strong>faux-bourdons</strong> (mâles) n\'ont qu\'un rôle reproducteur et sont expulsés de la ruche à l\'automne.',
                'La communication dans la ruche repose sur les <strong>phéromones</strong> (substances chimiques) et la célèbre « danse des abeilles » décrite par Karl von Frisch (Prix Nobel 1973). La danse en huit (danse frétillante) indique la direction et la distance d\'une source de nectar par rapport au soleil. L\'angle de la danse par rapport à la verticale indique l\'angle par rapport au soleil, et la durée du frétillement indique la distance.'
              ],
              highlight: 'Karl von Frisch a reçu le Prix Nobel de physiologie en 1973 pour sa découverte du langage dansé des abeilles.'
            },
            {
              title: 'Conduite du rucher',
              paragraphs: [
                'L\'apiculteur gère le cycle annuel de la colonie. Au <strong>printemps</strong>, il vérifie la santé de la reine, évalue les réserves de nourriture et pose les hausses (éléments supérieurs de la ruche) pour la récolte de miel. Il surveille l\'essaimage naturel, processus par lequel la colonie se divise : la vieille reine part avec la moitié des ouvrières fonder une nouvelle colonie.',
                'La <strong>récolte du miel</strong> s\'effectue de mai à septembre selon les miellées (floraisons). Les cadres de miel sont désoperculés (on retire la fine couche de cire qui scelle les alvéoles) puis extraits par centrifugation. Un apiculteur français récolte en moyenne 15 à 25 kg de miel par ruche et par an. En hiver, l\'apiculteur vérifie que les colonies disposent de 15 à 20 kg de réserves de miel pour survivre jusqu\'au printemps.'
              ],
              highlight: 'Une abeille butineuse visite 50 à 100 fleurs par voyage et effectue 10 à 15 voyages par jour, parcourant jusqu\'à 30 km quotidiennement.'
            },
            {
              title: 'Menaces et déclin des abeilles',
              paragraphs: [
                'Le <strong>déclin des abeilles</strong> est un phénomène mondial alarmant. Les causes sont multiples et synergiques : pesticides néonicotinoïdes (qui désorientent les abeilles et affaiblissent leur système immunitaire), varroa destructor (acarien parasite arrivé d\'Asie dans les années 1980), perte d\'habitats (monocultures, disparition des haies), changement climatique et maladies émergentes.',
                'Le <strong>Varroa destructor</strong>, acarien parasite de l\'abeille, est considéré comme la menace numéro un. Il se reproduit dans le couvain operculé, se nourrit de l\'hémolymphe des larves et des adultes, et transmet des virus mortels. Sans traitement, une colonie infestée meurt en 1 à 3 ans. Les traitements à l\'acide oxalique et à l\'acide formique, compatibles avec l\'apiculture biologique, permettent de contrôler le parasite.'
              ],
              highlight: 'Le varroa, arrivé d\'Asie en Europe dans les années 1980, est le premier responsable de la mortalité des colonies d\'abeilles dans le monde.'
            }
          ],
          quiz: [
            { q: 'Combien d\'œufs une reine peut-elle pondre par jour au pic de saison ?', opts: ['200', '500', '2 000', '5 000'], correct: 2, explanation: 'Au pic de saison (printemps-été), la reine d\'abeilles peut pondre jusqu\'à 2 000 œufs par jour, soit plus que son propre poids en œufs.' },
            { q: 'Qu\'est-ce que le varroa ?', opts: ['Un virus de l\'abeille', 'Un acarien parasite', 'Un pesticide', 'Une plante mellifère'], correct: 1, explanation: 'Varroa destructor est un acarien parasite originaire d\'Asie qui se reproduit dans le couvain des abeilles et transmet des virus mortels.' },
            { q: 'Quel pourcentage des cultures alimentaires est pollinisé par les abeilles ?', opts: ['25 %', '50 %', '75 %', '95 %'], correct: 2, explanation: 'Les abeilles et autres pollinisateurs sont responsables de la pollinisation d\'environ 75 % des cultures alimentaires mondiales.' }
          ],
          definitions: [
            { term: 'Apis mellifera', def: 'Abeille mellifère européenne, espèce la plus élevée pour la production de miel et la pollinisation des cultures.' },
            { term: 'Essaimage', def: 'Processus naturel de reproduction de la colonie : la reine part avec la moitié des ouvrières pour fonder une nouvelle colonie.' },
            { term: 'Varroa destructor', def: 'Acarien parasite de l\'abeille originaire d\'Asie, se nourrissant de l\'hémolymphe et transmettant des virus mortels.' },
            { term: 'Miellée', def: 'Période de floraison abondante d\'une espèce végétale permettant aux abeilles de produire du miel en quantité.' },
            { term: 'Désoperculation', def: 'Retrait de la fine couche de cire scellant les alvéoles de miel avant l\'extraction par centrifugation.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Pour produire 1 kg de miel, les abeilles d\'une ruche parcourent l\'équivalent de 4 fois le tour de la Terre (environ 150 000 km) et visitent 4 millions de fleurs.' },
            { front: '💡 Le savais-tu ?', back: 'La reine des abeilles vit 3 à 5 ans, contre 6 semaines pour une ouvrière en été. Elle est nourrie exclusivement de gelée royale, produite par les glandes des jeunes ouvrières.' },
            { front: '💡 Le savais-tu ?', back: 'Le miel est le seul aliment qui ne se périme jamais. On a retrouvé du miel comestible dans des tombes égyptiennes vieilles de 3 000 ans.' }
          ]
        },
        {
          slug: 'bien-etre-animal',
          title: 'Bien-être animal',
          description: 'Les cinq libertés, éthique de l\'élevage et alternatives.',
          intro: 'Le <strong>bien-être animal</strong> en élevage est devenu un enjeu majeur de société. La prise de conscience de la sensibilité des animaux d\'élevage a conduit à une évolution profonde des réglementations et des pratiques, portée par la demande des consommateurs et les avancées de l\'éthologie.',
          introHighlight: '<strong>Les cinq libertés</strong> de Brambell (1965), adoptées par l\'OIE, constituent le cadre de référence mondial pour évaluer le bien-être des animaux d\'élevage.',
          intro2: '',
          sections: [
            {
              title: 'Les cinq libertés de Brambell',
              paragraphs: [
                'En 1965, le rapport Brambell, commandé par le gouvernement britannique après la publication du livre Animal Machines de Ruth Harrison, définit <strong>cinq libertés</strong> fondamentales pour les animaux d\'élevage. Ne pas souffrir de faim ni de soif (accès à une eau fraîche et une alimentation adaptée). Ne pas souffrir d\'inconfort (environnement approprié avec abri et aire de repos). Ne pas souffrir de douleur, blessure ou maladie (prévention et traitement rapide).',
                'Les deux dernières libertés sont : être libre d\'exprimer les <strong>comportements naturels</strong> de son espèce (espace suffisant, compagnie de congénères) et ne pas souffrir de peur ni de détresse (conditions évitant la souffrance mentale). Ces cinq libertés, reprises par l\'Organisation mondiale de la santé animale (OMSA, anciennement OIE), servent de cadre aux législations nationales et aux cahiers des charges des labels de qualité.'
              ],
              highlight: 'Les cinq libertés de Brambell sont devenues le standard mondial d\'évaluation du bien-être animal depuis leur adoption par l\'OIE.'
            },
            {
              title: 'Éthologie et cognition animale',
              paragraphs: [
                'L\'<strong>éthologie</strong> (science du comportement animal) a révélé des capacités cognitives insoupçonnées chez les animaux d\'élevage. Les porcs résolvent des labyrinthes aussi vite que les chiens, reconnaissent leur reflet dans un miroir et jouent avec des objets. Les vaches entretiennent des amitiés durables et leur production laitière diminue quand elles sont séparées de leur compagne préférée.',
                'Les poules possèdent une <strong>théorie de l\'esprit</strong> rudimentaire (elles anticipent les réactions de leurs congénères), pratiquent l\'enseignement maternel et communiquent par au moins 30 vocalisations distinctes. Les chèvres mémorisent des tâches complexes pendant 10 mois et orientent leur regard vers l\'humain quand elles sont face à un problème insoluble, comme le font les chiens. Ces découvertes questionnent profondément les pratiques d\'élevage intensif.'
              ],
              highlight: 'Les porcs reconnaissent leur reflet dans un miroir, une capacité cognitive partagée seulement par les grands singes, les dauphins et les éléphants.'
            },
            {
              title: 'Vers des élevages plus respectueux',
              paragraphs: [
                'L\'Union européenne a progressivement renforcé sa réglementation : interdiction des cages en batterie pour les poules (2012), des cages individuelles pour les truies gestantes (2013), et projet d\'interdiction totale des cages d\'ici 2027 (initiative citoyenne « End the Cage Age » signée par 1,4 million de citoyens). Les élevages plein air et biologiques se développent rapidement, portés par la demande des consommateurs.',
                'Des <strong>alternatives technologiques</strong> émergent également. La viande cultivée (ou viande in vitro), produite en laboratoire à partir de cellules souches sans abattage d\'animal, a été autorisée à Singapour en 2020. Les protéines d\'insectes (vers de farine, grillons) offrent un ratio de conversion alimentaire imbattable : 1,7 kg d\'aliment pour 1 kg de protéines. L\'élevage de précision utilise des capteurs pour surveiller individuellement le confort et la santé de chaque animal.'
              ],
              highlight: 'L\'initiative citoyenne européenne « End the Cage Age », signée par 1,4 million de personnes, pourrait mettre fin à l\'élevage en cage d\'ici 2027.'
            }
          ],
          quiz: [
            { q: 'Combien de libertés le rapport Brambell définit-il pour les animaux d\'élevage ?', opts: ['3', '5', '7', '10'], correct: 1, explanation: 'Le rapport Brambell (1965) définit cinq libertés fondamentales couvrant la faim, l\'inconfort, la douleur, l\'expression des comportements naturels et la peur.' },
            { q: 'Quelle capacité cognitive remarquable les porcs possèdent-ils ?', opts: ['Ils volent', 'Ils reconnaissent leur reflet dans un miroir', 'Ils parlent', 'Ils comptent jusqu\'à 100'], correct: 1, explanation: 'Les porcs reconnaissent leur reflet dans un miroir, une capacité de conscience de soi partagée par très peu d\'espèces (grands singes, dauphins, éléphants).' },
            { q: 'Où la viande cultivée a-t-elle été autorisée pour la première fois ?', opts: ['États-Unis', 'Japon', 'France', 'Singapour'], correct: 3, explanation: 'Singapour a été le premier pays à autoriser la commercialisation de viande cultivée en laboratoire en 2020, avec du poulet produit par la start-up Eat Just.' }
          ],
          definitions: [
            { term: 'Cinq libertés', def: 'Cadre de référence mondial définissant les conditions minimales de bien-être animal : absence de faim, inconfort, douleur, peur, et liberté d\'exprimer les comportements naturels.' },
            { term: 'Éthologie', def: 'Science du comportement animal dans son milieu naturel, étudiant les instincts, l\'apprentissage et les capacités cognitives.' },
            { term: 'Viande cultivée', def: 'Viande produite en laboratoire à partir de cellules souches animales, sans élevage ni abattage d\'animaux.' },
            { term: 'Élevage de précision', def: 'Utilisation de capteurs et de technologies numériques pour surveiller individuellement la santé, le confort et la production de chaque animal.' },
            { term: 'Sentience', def: 'Capacité d\'un être vivant à ressentir des états subjectifs : douleur, plaisir, peur, bien-être.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le livre Animal Machines de Ruth Harrison (1964) est considéré comme le déclencheur du mouvement pour le bien-être animal. Il dénonçait les conditions de l\'élevage intensif et a conduit au rapport Brambell.' },
            { front: '💡 Le savais-tu ?', back: 'En 2015, le Code civil français a reconnu les animaux comme des « êtres vivants doués de sensibilité », les distinguant juridiquement des biens meubles.' },
            { front: '💡 Le savais-tu ?', back: 'Les poules communiquent par au moins 30 vocalisations distinctes, dont des cris d\'alerte différents selon qu\'un prédateur approche par voie terrestre ou aérienne.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 4 — Viticulture
    // ──────────────────────────────────────────────
    {
      slug: 'viticulture',
      title: 'Viticulture',
      description: 'Culture de la vigne, cépages, vinification, terroirs et appellations.',
      lessons: [
        {
          slug: 'histoire-de-la-vigne',
          title: 'Histoire de la vigne et du vin',
          description: 'Des origines néolithiques aux grands vignobles contemporains.',
          intro: 'La <strong>vigne</strong> (Vitis vinifera) est l\'une des plantes les plus anciennement cultivées par l\'homme. Le vin, boisson sacrée et symbole de civilisation, accompagne l\'histoire humaine depuis plus de 8 000 ans, de la Géorgie antique aux vignobles du Nouveau Monde.',
          introHighlight: '<strong>Les plus anciennes traces de vinification</strong> datent de 6 000 av. J.-C. et ont été découvertes en Géorgie, dans des jarres en argile (qvevris) contenant des résidus de raisin fermenté.',
          intro2: '',
          sections: [
            {
              title: 'Les origines de la viticulture',
              paragraphs: [
                'La vigne sauvage (Vitis vinifera sylvestris) poussait naturellement au Caucase et en Mésopotamie. Sa <strong>domestication</strong> a débuté entre 8 000 et 6 000 av. J.-C. dans le sud du Caucase (Géorgie, Arménie actuelles). Les premières vinifications utilisaient des jarres en argile enterrées (qvevris en Géorgie, karas en Arménie). Des résidus d\'acide tartrique, marqueur chimique du raisin, ont été identifiés dans des poteries géorgiennes datant de 6 000 av. J.-C.',
                'La viticulture s\'est ensuite propagée vers la <strong>Mésopotamie</strong>, l\'Égypte et la Phénicie. Les Égyptiens cultivaient la vigne dès 3 000 av. J.-C. et les peintures des tombes pharaoniques montrent des scènes de vendange et de foulage. Les Phéniciens, grands navigateurs, ont diffusé la vigne sur tout le pourtour méditerranéen, fondant des comptoirs viticoles en Grèce, en Italie, en Afrique du Nord et en Espagne.'
              ],
              highlight: 'Les qvevris géorgiens, jarres en argile enterrées pour la vinification, sont inscrits au patrimoine immatériel de l\'UNESCO depuis 2013.'
            },
            {
              title: 'La vigne dans l\'Antiquité',
              paragraphs: [
                'Les <strong>Grecs</strong> considéraient le vin comme un don de Dionysos et le plaçaient au centre de la vie sociale (symposion). Ils introduisirent les premières notions de terroir en classant les vins par origine géographique. Les vins de Chios, Lesbos et Thasos étaient les plus prestigieux. La Grèce antique exportait son vin dans des amphores standardisées dont la forme identifiait la région de production.',
                'Les <strong>Romains</strong> perfectionnèrent la viticulture en développant la taille de la vigne, l\'élevage en fûts de chêne et le vieillissement. Pline l\'Ancien, dans son Histoire naturelle, décrit plus de 80 cépages et classe les grands crus de son époque. Les légions romaines plantèrent la vigne dans toute la Gaule, créant les vignobles de Bordeaux, de Bourgogne et de la vallée du Rhône qui demeurent parmi les plus prestigieux du monde.'
              ],
              highlight: 'Les Romains ont introduit la vigne en Gaule dès le Ier siècle av. J.-C., créant les vignobles qui font la renommée de la France.'
            },
            {
              title: 'L\'ère moderne',
              paragraphs: [
                'La crise du <strong>phylloxéra</strong>, puceron ravageur importé d\'Amérique, a dévasté le vignoble européen entre 1860 et 1900, détruisant 40 % des vignes françaises. La solution fut le greffage de Vitis vinifera sur des porte-greffes américains résistants au parasite. Cette catastrophe a profondément transformé le paysage viticole et entraîné la création du système des appellations d\'origine.',
                'Au XXe siècle, les vignobles du <strong>Nouveau Monde</strong> (Californie, Australie, Chili, Argentine, Afrique du Sud) ont émergé comme des concurrents sérieux. Le « Jugement de Paris » en 1976, dégustation à l\'aveugle où des vins californiens battirent les plus grands crus français, bouleversa la hiérarchie mondiale. Aujourd\'hui, la viticulture fait face aux défis du changement climatique, avec des vendanges avancées de deux à trois semaines en un demi-siècle.'
              ],
              highlight: 'Le phylloxéra a détruit 40 % du vignoble français au XIXe siècle, obligeant à greffer toutes les vignes européennes sur des porte-greffes américains.'
            }
          ],
          quiz: [
            { q: 'Où ont été découvertes les plus anciennes traces de vinification ?', opts: ['Égypte', 'Grèce', 'Géorgie', 'Italie'], correct: 2, explanation: 'Les plus anciennes traces de vinification (6 000 av. J.-C.) ont été découvertes en Géorgie dans des jarres en argile contenant des résidus d\'acide tartrique.' },
            { q: 'Qu\'est-ce que le phylloxéra ?', opts: ['Un cépage ancien', 'Un puceron ravageur de la vigne', 'Un type de vin', 'Un outil de taille'], correct: 1, explanation: 'Le phylloxéra est un puceron parasite importé d\'Amérique qui a dévasté les vignobles européens entre 1860 et 1900.' },
            { q: 'Qu\'a révélé le « Jugement de Paris » en 1976 ?', opts: ['La supériorité absolue des vins français', 'La victoire de vins californiens sur des grands crus français', 'L\'invention du champagne', 'La découverte du phylloxéra'], correct: 1, explanation: 'Lors du Jugement de Paris en 1976, des vins californiens ont battu les plus grands crus français lors d\'une dégustation à l\'aveugle, bouleversant la hiérarchie mondiale.' }
          ],
          definitions: [
            { term: 'Vitis vinifera', def: 'Espèce de vigne européenne dont sont issus la quasi-totalité des cépages cultivés pour la production de vin.' },
            { term: 'Phylloxéra', def: 'Puceron parasite (Daktulosphaira vitifoliae) originaire d\'Amérique ayant dévasté les vignobles européens au XIXe siècle.' },
            { term: 'Qvevri', def: 'Grande jarre en argile géorgienne, enterrée dans le sol, utilisée pour la fermentation et le vieillissement du vin depuis 8 000 ans.' },
            { term: 'Porte-greffe', def: 'Partie racinaire d\'une vigne (généralement d\'espèce américaine) sur laquelle est greffé un greffon de Vitis vinifera pour résister au phylloxéra.' },
            { term: 'Terroir', def: 'Ensemble des facteurs naturels (sol, climat, exposition) et humains (savoir-faire) qui confèrent au vin son caractère unique.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La Géorgie est considérée comme le berceau du vin. Le mot « vin » pourrait dériver du géorgien « ghvino ». La vinification en qvevri est encore pratiquée et inscrite au patrimoine de l\'UNESCO.' },
            { front: '💡 Le savais-tu ?', back: 'Lors de la crise du phylloxéra, la France a perdu 2,5 millions d\'hectares de vigne en 30 ans. Seuls les vignobles plantés en sable (comme ceux des Landes) ont été épargnés.' },
            { front: '💡 Le savais-tu ?', back: 'Le changement climatique avance les vendanges en France de 2 à 3 semaines par rapport aux années 1960. Des cépages méridionaux (Grenache, Mourvèdre) sont désormais plantés en Champagne.' }
          ]
        },
        {
          slug: 'cepages-et-terroirs',
          title: 'Cépages et terroirs',
          description: 'Les grands cépages, la notion de terroir et les appellations d\'origine.',
          intro: 'Un <strong>cépage</strong> est une variété de vigne cultivée pour la production de vin. Il en existe plus de 10 000 dans le monde, mais une vingtaine domine la production mondiale. Le terroir, concept central de la viticulture française, explique pourquoi un même cépage produit des vins radicalement différents selon l\'endroit où il est cultivé.',
          introHighlight: '<strong>Le Cabernet Sauvignon</strong> est le cépage le plus planté au monde (340 000 hectares), suivi du Merlot et du Tempranillo.',
          intro2: '',
          sections: [
            {
              title: 'Les cépages rouges',
              paragraphs: [
                'Le <strong>Cabernet Sauvignon</strong>, originaire de Bordeaux (croisement naturel de Cabernet Franc et Sauvignon Blanc), produit des vins puissants, tanniques et aptes au vieillissement. Il domine à Bordeaux (rive gauche), en Californie (Napa Valley) et au Chili. Le <strong>Merlot</strong>, également bordelais, offre des vins plus ronds et fruités ; il est le cépage roi de Pomerol et Saint-Émilion.',
                'Le <strong>Pinot Noir</strong>, cépage emblématique de la Bourgogne, est considéré comme le plus noble mais aussi le plus capricieux. Il produit les grands crus de Gevrey-Chambertin, Vosne-Romanée et Pommard. La <strong>Syrah</strong> (Shiraz en Australie), originaire de la vallée du Rhône, donne des vins profonds et épicés. Le Grenache, méditerranéen, est le cépage principal du Châteauneuf-du-Pape.'
              ],
              highlight: 'Le Pinot Noir de Bourgogne peut donner des vins parmi les plus chers du monde : le Romanée-Conti dépasse régulièrement 15 000 euros la bouteille.'
            },
            {
              title: 'Les cépages blancs',
              paragraphs: [
                'Le <strong>Chardonnay</strong>, originaire de Bourgogne, est le cépage blanc le plus planté au monde. Très adaptable, il produit des styles variés : Chablis minéral et vif, Meursault riche et beurré, Champagne (où il compose les blancs de blancs). Le <strong>Sauvignon Blanc</strong>, originaire de la Loire, est reconnaissable à ses arômes d\'agrumes et de buis ; il excelle à Sancerre, à Bordeaux et en Nouvelle-Zélande (Marlborough).',
                'Le <strong>Riesling</strong>, cépage aristocratique d\'Alsace et d\'Allemagne, allie une acidité tranchante à une complexité aromatique exceptionnelle. Il peut produire des vins secs, demi-secs ou liquoreux (vendanges tardives, sélection de grains nobles). Le Gewurztraminer, également alsacien, séduit par ses arômes exubérants de litchi, de rose et d\'épices. Le Chenin Blanc, de la Loire, est l\'un des cépages les plus polyvalents : vins secs, mousseux et liquoreux (Vouvray, Coteaux du Layon).'
              ],
              highlight: 'Le Chardonnay est si adaptable qu\'il produit à la fois le Chablis minéral, le Meursault beurré et le Champagne pétillant.'
            },
            {
              title: 'Le terroir et les appellations',
              paragraphs: [
                'Le <strong>terroir</strong> est un concept français désignant l\'interaction unique entre le sol (géologie, pédologie), le climat (macro, méso et microclimat), la topographie (altitude, exposition, pente) et le savoir-faire humain (choix du cépage, conduite de la vigne, vinification). C\'est le terroir qui explique pourquoi un Pinot Noir de Bourgogne est si différent d\'un Pinot Noir d\'Oregon ou de Nouvelle-Zélande.',
                'Le système des <strong>appellations d\'origine contrôlée</strong> (AOC/AOP), créé en France en 1935, protège juridiquement le lien entre un produit et son terroir. Il définit l\'aire géographique, les cépages autorisés, les rendements maximaux, les techniques de culture et de vinification. La France compte 363 AOC viticoles, de l\'appellation régionale (Bordeaux) à la parcelle unique (Romanée-Conti, 1,8 hectare). Ce modèle a été adopté dans toute l\'Europe (DOC en Italie, DO en Espagne).'
              ],
              highlight: 'La France compte 363 appellations d\'origine contrôlée viticoles, dont certaines ne couvrent qu\'une seule parcelle de moins de 2 hectares.'
            }
          ],
          quiz: [
            { q: 'Quel est le cépage le plus planté au monde ?', opts: ['Merlot', 'Pinot Noir', 'Cabernet Sauvignon', 'Chardonnay'], correct: 2, explanation: 'Le Cabernet Sauvignon est le cépage le plus planté au monde avec environ 340 000 hectares, devant le Merlot et le Tempranillo.' },
            { q: 'De quelle région est originaire le Pinot Noir ?', opts: ['Bordeaux', 'Bourgogne', 'Vallée du Rhône', 'Alsace'], correct: 1, explanation: 'Le Pinot Noir est le cépage emblématique de la Bourgogne, où il produit les plus grands vins rouges de la région.' },
            { q: 'Quand le système AOC a-t-il été créé en France ?', opts: ['1855', '1900', '1935', '1976'], correct: 2, explanation: 'Le système des appellations d\'origine contrôlée a été créé en France en 1935 pour protéger le lien entre un produit et son terroir.' }
          ],
          definitions: [
            { term: 'Cépage', def: 'Variété de vigne cultivée, caractérisée par la forme de ses feuilles, ses grappes et les propriétés organoleptiques de son raisin.' },
            { term: 'Terroir', def: 'Interaction unique entre sol, climat, topographie et savoir-faire humain qui confère au vin son caractère distinctif.' },
            { term: 'AOC/AOP', def: 'Appellation d\'origine contrôlée/protégée : label garantissant l\'origine géographique et le respect d\'un cahier des charges strict.' },
            { term: 'Tanin', def: 'Composé phénolique présent dans la peau et les pépins du raisin, donnant au vin rouge sa structure et son aptitude au vieillissement.' },
            { term: 'Ampélographie', def: 'Science de l\'identification et de la classification des cépages par l\'étude de la morphologie de la vigne.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Cabernet Sauvignon est un croisement naturel spontané entre le Cabernet Franc et le Sauvignon Blanc, survenu à Bordeaux probablement au XVIIe siècle.' },
            { front: '💡 Le savais-tu ?', back: 'La Romanée-Conti, plus petit grand cru de Bourgogne (1,8 hectare), ne produit que 4 000 à 5 000 bouteilles par an, vendues à plus de 15 000 euros chacune.' },
            { front: '💡 Le savais-tu ?', back: 'Le classement de 1855 des vins de Bordeaux, établi pour l\'Exposition universelle de Paris, est toujours en vigueur aujourd\'hui avec une seule modification en 170 ans.' }
          ]
        },
        {
          slug: 'cycle-de-la-vigne',
          title: 'Cycle de la vigne',
          description: 'Phénologie, travaux viticoles, taille, palissage et vendanges.',
          intro: 'La vigne est une plante pérenne dont le cycle annuel rythme le travail du vigneron. De la taille hivernale aux vendanges automnales, chaque étape est déterminante pour la qualité du raisin et, in fine, du vin.',
          introHighlight: '<strong>La vigne</strong> connaît un cycle annuel de 7 à 8 mois de végétation (mars à octobre) et 4 à 5 mois de repos hivernal (novembre à février).',
          intro2: '',
          sections: [
            {
              title: 'Le cycle végétatif',
              paragraphs: [
                'Le cycle débute au <strong>débourrement</strong> (mars-avril), quand les bourgeons s\'ouvrent et laissent apparaître les premières feuilles. Vient ensuite la <strong>floraison</strong> (juin), période critique où les petites fleurs de la vigne doivent être pollinisées. Le taux de fécondation, appelé « nouaison », détermine le nombre de baies par grappe. La coulure (chute des fleurs non fécondées) et le millerandage (baies de taille inégale) sont les principaux risques.',
                'La <strong>véraison</strong> (juillet-août) marque le début de la maturation : les baies rouges se colorent (grâce aux anthocyanes) et les baies blanches deviennent translucides. Le sucre s\'accumule, l\'acidité diminue et les arômes se développent. La date de vendange est déterminée par l\'équilibre sucre/acidité, mesuré au réfractomètre. Les vendanges ont lieu généralement entre fin août et mi-octobre selon les régions et les cépages.'
              ],
              highlight: 'La véraison est le moment magique où les raisins rouges changent de couleur, passant du vert au pourpre en quelques jours.'
            },
            {
              title: 'La taille et le palissage',
              paragraphs: [
                'La <strong>taille</strong>, effectuée en hiver (décembre à mars), est l\'opération la plus importante du vigneron. Elle détermine le nombre de grappes (et donc le rendement) et l\'architecture du cep. Les deux grands systèmes sont la taille courte (Gobelet, Cordon de Royat : 2 yeux par courson) et la taille longue (Guyot simple ou double : un ou deux longs bois de 6 à 10 yeux). Le choix dépend du cépage, du terroir et du style de vin recherché.',
                'Le <strong>palissage</strong> guide la végétation de la vigne sur des fils de fer tendus entre des piquets. Il optimise l\'exposition des feuilles au soleil (favorisant la photosynthèse), l\'aération des grappes (limitant les maladies fongiques) et facilite les travaux mécaniques. L\'ébourgeonnage (suppression des rameaux superflus), l\'effeuillage (retrait des feuilles autour des grappes) et la vendange en vert (suppression de grappes en excès) sont des interventions complémentaires visant la qualité.'
              ],
              highlight: 'La taille Guyot, inventée par le médecin Jules Guyot en 1860, reste le système de taille le plus répandu dans les vignobles français.'
            },
            {
              title: 'Les vendanges',
              paragraphs: [
                'Les <strong>vendanges</strong> sont le point d\'orgue de l\'année viticole. La date de récolte, décision cruciale du vigneron, dépend de la maturité technologique (sucre, acidité) et phénolique (tanins, anthocyanes, arômes). Une vendange trop précoce donne des vins acides et herbacés ; trop tardive, des vins lourds et sans fraîcheur. Les vendanges manuelles, obligatoires en Champagne et pour certains vins liquoreux, permettent un tri sélectif.',
                'La <strong>vendange mécanique</strong>, réalisée par des machines à vendanger qui secouent les rangs pour détacher les baies, est utilisée pour 80 % du vignoble français. Elle offre rapidité (un hectare par heure contre un jour à la main) et possibilité de récolter la nuit (grappes fraîches). Les vendanges tardives et les vendanges par tries successives (Sauternes, Alsace) nécessitent la main de l\'homme pour sélectionner les grains atteints de pourriture noble (Botrytis cinerea).'
              ],
              highlight: 'La pourriture noble (Botrytis cinerea) concentre les sucres du raisin par déshydratation, donnant les grands liquoreux comme le Sauternes.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que la véraison ?', opts: ['La première taille de la vigne', 'Le début de la maturation du raisin', 'La récolte du raisin', 'La plantation de la vigne'], correct: 1, explanation: 'La véraison est le stade phénologique marquant le début de la maturation : les baies changent de couleur, le sucre s\'accumule et l\'acidité diminue.' },
            { q: 'Quel pourcentage du vignoble français est vendangé mécaniquement ?', opts: ['20 %', '50 %', '80 %', '95 %'], correct: 2, explanation: 'La vendange mécanique représente environ 80 % du vignoble français, offrant rapidité et possibilité de récolter la nuit.' },
            { q: 'Qu\'est-ce que la pourriture noble ?', opts: ['Une maladie destructrice', 'Le Botrytis cinerea qui concentre les sucres', 'Un type de levure', 'Un engrais biologique'], correct: 1, explanation: 'La pourriture noble est une forme bénéfique du champignon Botrytis cinerea qui déshydrate le raisin, concentrant les sucres et les arômes pour produire les grands vins liquoreux.' }
          ],
          definitions: [
            { term: 'Débourrement', def: 'Ouverture des bourgeons de la vigne au printemps, marquant le début du cycle végétatif.' },
            { term: 'Véraison', def: 'Stade phénologique de changement de couleur des baies, marquant le début de la maturation du raisin.' },
            { term: 'Taille Guyot', def: 'Système de taille laissant un ou deux longs bois (baguettes) de 6 à 10 yeux, le plus répandu en France.' },
            { term: 'Effeuillage', def: 'Retrait des feuilles autour des grappes pour améliorer l\'aération et l\'ensoleillement des baies.' },
            { term: 'Botrytis cinerea', def: 'Champignon pouvant provoquer la pourriture grise (destructrice) ou la pourriture noble (bénéfique pour les vins liquoreux).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'En Champagne, les vendanges manuelles sont obligatoires. Les 30 000 vendangeurs saisonniers récoltent environ 2,5 milliards de grappes chaque année en 10 à 15 jours.' },
            { front: '💡 Le savais-tu ?', back: 'Le Sauternes, l\'un des vins les plus chers au monde, nécessite jusqu\'à 8 passages de tri dans les rangs pour ne sélectionner que les grains atteints de pourriture noble.' },
            { front: '💡 Le savais-tu ?', back: 'Les vendanges en France ont avancé de 2 à 3 semaines depuis les années 1960 en raison du réchauffement climatique, modifiant le profil des vins.' }
          ]
        },
        {
          slug: 'vinification',
          title: 'Vinification',
          description: 'Fermentation, élevage en fût, assemblage et mise en bouteille.',
          intro: 'La <strong>vinification</strong> est l\'art de transformer le jus de raisin en vin par la fermentation alcoolique. Du foulage au chai d\'élevage, chaque étape technique influence le profil aromatique, la structure et le potentiel de garde du vin.',
          introHighlight: '<strong>La fermentation alcoolique</strong>, réalisée par les levures Saccharomyces cerevisiae, transforme le sucre du raisin en alcool et en CO₂, libérant des centaines de composés aromatiques.',
          intro2: '',
          sections: [
            {
              title: 'Vinification en rouge',
              paragraphs: [
                'La vinification en rouge commence par l\'<strong>éraflage</strong> (séparation des baies de la rafle) et le <strong>foulage</strong> (écrasement des baies). Le moût (jus, peaux, pépins) est mis en cuve pour la macération, période pendant laquelle les peaux libèrent leurs tanins, anthocyanes (couleur) et arômes dans le jus. La macération dure de 1 à 4 semaines selon le style de vin recherché.',
                'La <strong>fermentation alcoolique</strong> se déroule simultanément : les levures (naturelles ou sélectionnées) transforment le sucre en alcool (environ 170 g de sucre donnent 1 degré d\'alcool par litre). La température est contrôlée entre 25 et 30 °C. Après la fermentation, le vin est séparé des peaux par <strong>décuvage</strong> (vin de goutte) et les peaux sont pressées (vin de presse, plus tannique). La fermentation malolactique, réalisée par des bactéries lactiques, transforme l\'acide malique en acide lactique, assouplissant le vin.'
              ],
              highlight: 'C\'est la macération des peaux qui donne au vin rouge sa couleur et ses tanins — sans les peaux, le jus de raisin rouge serait blanc.'
            },
            {
              title: 'Vinification en blanc et rosé',
              paragraphs: [
                'La vinification en blanc se distingue par l\'<strong>absence de macération</strong>. Les raisins sont pressés immédiatement après la vendange et seul le jus clair est fermenté, à basse température (16 à 20 °C) pour préserver les arômes fruités et la fraîcheur. Le débourbage (décantation du jus pour éliminer les particules solides) précède la mise en cuve.',
                'Le <strong>vin rosé</strong> est obtenu principalement par deux méthodes. La méthode de pressurage direct presse des raisins rouges immédiatement, donnant un jus légèrement teinté. La méthode de saignée laisse macérer le moût quelques heures (2 à 24 heures) avant de soutirer le jus rosé. La Provence, premier producteur mondial de rosé AOC, utilise majoritairement le pressurage direct pour obtenir des rosés pâles et délicats.'
              ],
              highlight: 'Le rosé n\'est pas un mélange de vin rouge et blanc (sauf en Champagne) : c\'est un vin issu de raisins rouges avec une macération très courte.'
            },
            {
              title: 'Élevage et mise en bouteille',
              paragraphs: [
                'L\'<strong>élevage</strong> est la période de maturation du vin entre la fin de la fermentation et la mise en bouteille. En cuve inox, le vin conserve sa fraîcheur et son fruit. En <strong>fût de chêne</strong> (barriques bordelaises de 225 litres, pièces bourguignonnes de 228 litres), le vin s\'enrichit d\'arômes boisés (vanille, toast, épices), ses tanins s\'assouplissent par micro-oxygénation à travers le bois, et sa couleur se stabilise.',
                'L\'<strong>assemblage</strong>, art du maître de chai, consiste à sélectionner et mélanger les vins de différentes cuves, parcelles ou cépages pour créer le vin final. À Bordeaux, un grand cru peut assembler 3 à 5 cépages ; en Bourgogne, le vin est généralement monocépage. Avant la mise en bouteille, le vin peut être collé (clarification par ajout de protéines) et filtré. Certains vignerons choisissent de ne pas filtrer pour préserver la richesse du vin.'
              ],
              highlight: 'Une barrique bordelaise de 225 litres contient exactement 300 bouteilles de 75 cl, un standard né de la facilité de manutention par un seul homme.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qui donne sa couleur au vin rouge ?', opts: ['Le jus du raisin', 'La macération des peaux', 'Le fût de chêne', 'L\'ajout de colorant'], correct: 1, explanation: 'C\'est la macération des peaux du raisin rouge dans le moût qui libère les anthocyanes (pigments) donnant au vin sa couleur rouge.' },
            { q: 'À quelle température fermente un vin blanc ?', opts: ['10-12 °C', '16-20 °C', '25-30 °C', '35-40 °C'], correct: 1, explanation: 'Le vin blanc fermente à basse température (16 à 20 °C) pour préserver les arômes fruités et la fraîcheur, contrairement au rouge (25-30 °C).' },
            { q: 'Que contient une barrique bordelaise ?', opts: ['100 litres', '225 litres', '500 litres', '1 000 litres'], correct: 1, explanation: 'La barrique bordelaise contient 225 litres, soit exactement 300 bouteilles de 75 cl, un standard du monde viticole.' }
          ],
          definitions: [
            { term: 'Fermentation alcoolique', def: 'Transformation du sucre du raisin en alcool et CO₂ par les levures Saccharomyces cerevisiae.' },
            { term: 'Macération', def: 'Contact prolongé du jus avec les peaux et les pépins du raisin, permettant l\'extraction de couleur, tanins et arômes.' },
            { term: 'Fermentation malolactique', def: 'Conversion de l\'acide malique en acide lactique par des bactéries, assouplissant le vin et réduisant son acidité.' },
            { term: 'Élevage', def: 'Période de maturation du vin en cuve ou en fût entre la fin de la fermentation et la mise en bouteille.' },
            { term: 'Assemblage', def: 'Art de mélanger des vins de différentes cuves, parcelles ou cépages pour créer le vin final souhaité.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Champagne doit sa mousse à une seconde fermentation en bouteille, inventée par le moine Dom Pérignon au XVIIe siècle (bien que ce soit en réalité un processus collectif).' },
            { front: '💡 Le savais-tu ?', back: 'Le chêne français (forêts de Tronçais, Allier, Vosges) est le plus prisé au monde pour les fûts de vin. Un chêne doit avoir 150 à 200 ans pour fournir du bois de qualité tonnelière.' },
            { front: '💡 Le savais-tu ?', back: 'Un grand vin de Bordeaux peut passer 18 à 24 mois en barrique neuve. Le prix d\'une barrique neuve en chêne français atteint 800 à 1 200 euros.' }
          ]
        },
        {
          slug: 'viticulture-durable',
          title: 'Viticulture durable',
          description: 'Viticulture biologique, biodynamique et certification environnementale.',
          intro: 'La <strong>viticulture durable</strong> vise à produire des vins de qualité tout en préservant l\'environnement, la santé des vignerons et la viabilité économique des exploitations. De la lutte raisonnée à la biodynamie, plusieurs approches coexistent.',
          introHighlight: '<strong>La France</strong> est le premier consommateur mondial de pesticides viticoles. La vigne, qui couvre 3 % de la surface agricole, reçoit 20 % des traitements phytosanitaires, ce qui motive la transition vers des pratiques durables.',
          intro2: '',
          sections: [
            {
              title: 'Viticulture biologique',
              paragraphs: [
                'La <strong>viticulture biologique</strong>, certifiée par le label AB en France et le logo Euro-feuille en Europe, interdit les pesticides et engrais de synthèse. Les traitements autorisés se limitent au cuivre (bouillie bordelaise contre le mildiou) et au soufre (contre l\'oïdium), ainsi qu\'aux préparations à base de plantes (tisanes d\'ortie, de prêle). L\'enherbement entre les rangs, le travail du sol mécanique et les engrais verts remplacent les herbicides et les engrais chimiques.',
                'La conversion au bio dure <strong>trois ans</strong>, pendant lesquels le vigneron applique les pratiques biologiques sans pouvoir utiliser le label. La surface viticole bio en France a été multipliée par quatre en dix ans, atteignant 20 % du vignoble en 2025. Le risque principal est le mildiou : lors des années pluvieuses, les pertes de récolte en bio peuvent atteindre 30 à 50 %, contre 5 à 10 % en conventionnel.'
              ],
              highlight: 'La surface viticole bio en France a été multipliée par quatre en dix ans, atteignant 20 % du vignoble en 2025.'
            },
            {
              title: 'Biodynamie',
              paragraphs: [
                'La <strong>biodynamie</strong>, fondée par Rudolf Steiner en 1924, va au-delà du bio en considérant la ferme comme un organisme vivant en interaction avec les rythmes cosmiques. Elle utilise des préparations spécifiques : la bouse de corne (préparation 500), enterrée dans une corne de vache pendant l\'hiver puis dynamisée et pulvérisée, stimule la vie du sol. La silice de corne (préparation 501) renforce la photosynthèse et la résistance des plantes.',
                'Les travaux viticoles sont planifiés selon un <strong>calendrier lunaire et planétaire</strong> distinguant les jours fruits, fleurs, feuilles et racines. Si la base scientifique de ces pratiques reste débattue, les résultats qualitatifs sont remarquables : de nombreux domaines biodynamiques figurent parmi les meilleurs du monde (Romanée-Conti, Leflaive, Zind-Humbrecht, Coulée de Serrant). Les certifications Demeter et Biodyvin garantissent le respect du cahier des charges.'
              ],
              highlight: 'Le domaine de la Romanée-Conti, l\'un des vins les plus prestigieux au monde, est conduit en biodynamie depuis 2008.'
            },
            {
              title: 'Certifications et avenir',
              paragraphs: [
                'Plusieurs certifications coexistent en France. La <strong>Haute Valeur Environnementale</strong> (HVE), certification publique à trois niveaux, encourage la réduction des intrants. Terra Vitis, certification privée, promeut la viticulture raisonnée. Le label Vignerons Engagés ajoute une dimension sociale. Ces certifications, moins exigeantes que le bio, concernent un nombre croissant d\'exploitations.',
                'L\'avenir de la viticulture durable passe par l\'<strong>innovation</strong> : cépages résistants au mildiou et à l\'oïdium (hybrides interspécifiques issus de croisements avec des espèces américaines ou asiatiques), biocontrôle (utilisation de micro-organismes antagonistes), pulvérisation de précision par drones et agroforesterie viticole (association de la vigne avec des arbres). L\'INRAE a créé les premiers cépages résistants français (Artaban, Floreal, Voltis, Vidoc) autorisés en AOC à titre expérimental.'
              ],
              highlight: 'Les cépages résistants INRAE (Artaban, Floreal, Voltis, Vidoc) pourraient réduire de 80 % les traitements phytosanitaires en viticulture.'
            }
          ],
          quiz: [
            { q: 'Quels traitements sont autorisés en viticulture biologique ?', opts: ['Pesticides de synthèse uniquement', 'Cuivre et soufre uniquement', 'Tous les traitements', 'Aucun traitement'], correct: 1, explanation: 'En viticulture biologique, les traitements se limitent au cuivre (contre le mildiou), au soufre (contre l\'oïdium) et aux préparations à base de plantes.' },
            { q: 'Qui a fondé la biodynamie ?', opts: ['Bill Mollison', 'Masanobu Fukuoka', 'Rudolf Steiner', 'Nicolas Joly'], correct: 2, explanation: 'La biodynamie a été fondée par Rudolf Steiner en 1924, philosophe autrichien qui a donné une série de conférences sur l\'agriculture aux agriculteurs de Koberwitz.' },
            { q: 'Combien de temps dure la conversion au bio en viticulture ?', opts: ['1 an', '2 ans', '3 ans', '5 ans'], correct: 2, explanation: 'La conversion au bio dure trois ans, pendant lesquels le vigneron applique les pratiques biologiques sans pouvoir afficher le label sur ses bouteilles.' }
          ],
          definitions: [
            { term: 'Viticulture biologique', def: 'Mode de production viticole interdisant les pesticides et engrais de synthèse, certifié par le label AB ou Euro-feuille.' },
            { term: 'Biodynamie', def: 'Approche agricole fondée par Rudolf Steiner considérant la ferme comme un organisme vivant en interaction avec les rythmes cosmiques.' },
            { term: 'Bouillie bordelaise', def: 'Fongicide à base de sulfate de cuivre et de chaux, utilisé depuis 1885 contre le mildiou de la vigne.' },
            { term: 'Cépage résistant', def: 'Variété de vigne obtenue par croisement avec des espèces non-vinifera, possédant une résistance naturelle aux maladies fongiques.' },
            { term: 'HVE', def: 'Haute Valeur Environnementale : certification publique française à trois niveaux mesurant les performances environnementales des exploitations.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La bouillie bordelaise a été découverte par hasard en 1885 par Alexis Millardet, qui remarqua que les vignes aspergées d\'un mélange bleu pour dissuader les voleurs étaient épargnées par le mildiou.' },
            { front: '💡 Le savais-tu ?', back: 'Nicolas Joly, vigneron de la Coulée de Serrant (Loire), est l\'un des premiers vignerons français à avoir adopté la biodynamie en 1984. Il est devenu le porte-parole mondial de cette approche.' },
            { front: '💡 Le savais-tu ?', back: 'En 2025, les quatre cépages résistants de l\'INRAE (Artaban, Floreal, Voltis, Vidoc) peuvent être utilisés expérimentalement dans les AOC françaises à hauteur de 5 % de l\'encépagement.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 5 — Jardinage
    // ──────────────────────────────────────────────
    {
      slug: 'jardinage',
      title: 'Jardinage',
      description: 'Potager, verger, fleurs, techniques de culture et calendrier du jardinier.',
      lessons: [
        {
          slug: 'bases-du-potager',
          title: 'Bases du potager',
          description: 'Créer et entretenir un potager : sol, semis, repiquage et récolte.',
          intro: 'Le <strong>potager</strong> est l\'une des activités les plus gratifiantes qui soient. Cultiver ses propres légumes permet de manger plus sainement, de réduire son empreinte écologique et de renouer avec les cycles naturels. Quelques mètres carrés suffisent pour commencer.',
          introHighlight: '<strong>Un potager de 30 m²</strong> bien conduit peut fournir les légumes frais d\'une famille de quatre personnes pendant toute la belle saison.',
          intro2: '',
          sections: [
            {
              title: 'Choisir et préparer l\'emplacement',
              paragraphs: [
                'Le potager idéal est situé dans un endroit <strong>ensoleillé</strong> (6 à 8 heures de soleil direct par jour), à l\'abri du vent dominant, proche d\'un point d\'eau et facilement accessible depuis la maison. Une orientation sud ou sud-ouest est préférable dans l\'hémisphère nord. Le sol doit être bien drainé : en terrain argileux, des planches surélevées de 20 à 30 cm améliorent le drainage et le réchauffement du sol au printemps.',
                'La <strong>préparation du sol</strong> est l\'étape fondamentale. En première année, un test de sol (pH, texture, matière organique) oriente les amendements. Un sol acide (pH < 6) bénéficiera d\'un chaulage ; un sol lourd (argileux) sera allégé par l\'apport de compost et de sable. L\'incorporation de 5 à 10 cm de compost mûr avant la plantation fournit les nutriments nécessaires aux cultures. Le travail du sol à la grelinette (outil à deux manches) aère sans retourner les horizons.'
              ],
              highlight: 'La grelinette, inventée par André Grelin en 1964, aère le sol sans le retourner, préservant la vie biologique et la structure du sol.'
            },
            {
              title: 'Semis et repiquage',
              paragraphs: [
                'Le <strong>semis direct</strong> consiste à semer les graines en place dans le potager. Il convient aux légumes à racine pivotante (carottes, radis, navets) et aux cultures à croissance rapide (haricots, petits pois, épinards). La profondeur de semis suit la règle empirique : enterrer la graine à deux à trois fois son diamètre. Le sol doit être maintenu humide jusqu\'à la levée.',
                'Le <strong>semis en intérieur</strong> (sous abri, en godets ou en plaques alvéolées) permet de gagner 4 à 6 semaines sur le calendrier pour les cultures exigeant de la chaleur (tomates, poivrons, aubergines, courges). Les plants sont repiqués en pleine terre après les derniers gels (mi-mai en France, dits « saints de glace »). Le repiquage se fait en fin de journée ou par temps couvert pour réduire le stress de transplantation.'
              ],
              highlight: 'Les « saints de glace » (11, 12 et 13 mai) marquent traditionnellement la fin des risques de gel et le début des repiquages en pleine terre.'
            },
            {
              title: 'Entretien et récolte',
              paragraphs: [
                'L\'<strong>arrosage</strong> est le geste le plus fréquent au potager. La règle d\'or est d\'arroser abondamment mais peu souvent, pour encourager un enracinement profond. Un arrosage de 20 litres par m² et par semaine est un repère courant. L\'arrosage au pied (et non par aspersion) limite les maladies fongiques. Le matin est le meilleur moment : l\'eau a le temps de pénétrer avant la chaleur.',
                'Le <strong>paillage</strong>, la rotation des cultures et le compagnonnage (association bénéfique de plantes) constituent les trois piliers de l\'entretien écologique du potager. La récolte se fait au fur et à mesure de la maturité : un haricot vert cueilli jeune est plus tendre, une tomate cueillie à pleine maturité est plus goûteuse. Les légumes feuilles (laitue, roquette, épinard) se récoltent tôt le matin quand ils sont gorgés d\'eau.'
              ],
              highlight: 'Arroser abondamment mais peu souvent : un arrosage profond tous les 3-4 jours vaut mieux qu\'un arrosage superficiel quotidien.'
            }
          ],
          quiz: [
            { q: 'Combien d\'heures de soleil direct un potager a-t-il besoin au minimum ?', opts: ['2 heures', '4 heures', '6 heures', '10 heures'], correct: 2, explanation: 'Un potager a besoin d\'au moins 6 à 8 heures de soleil direct par jour pour que les légumes-fruits (tomates, courgettes) puissent bien produire.' },
            { q: 'À quelle profondeur doit-on enterrer une graine ?', opts: ['En surface', '2 à 3 fois son diamètre', '10 cm', '20 cm'], correct: 1, explanation: 'La règle empirique est d\'enterrer la graine à 2 à 3 fois son diamètre. Les graines très fines (basilic, laitue) sont à peine recouvertes.' },
            { q: 'Quand repique-t-on les tomates en pleine terre en France ?', opts: ['En mars', 'Après les saints de glace (mi-mai)', 'En juillet', 'En septembre'], correct: 1, explanation: 'Les tomates sont repiquées en pleine terre après les derniers risques de gel, traditionnellement après les saints de glace (11-13 mai) en France.' }
          ],
          definitions: [
            { term: 'Semis direct', def: 'Technique consistant à semer les graines directement en place dans le potager, sans passer par un semis en intérieur.' },
            { term: 'Repiquage', def: 'Transplantation d\'un jeune plant élevé en godet ou sous abri vers sa place définitive au potager.' },
            { term: 'Grelinette', def: 'Outil à deux manches et dents courbes permettant d\'aérer le sol sans le retourner, préservant sa structure et sa vie biologique.' },
            { term: 'Saints de glace', def: 'Période du 11 au 13 mai correspondant traditionnellement aux derniers risques de gel tardif en France.' },
            { term: 'Compagnonnage', def: 'Association bénéfique de plantes au potager qui se protègent mutuellement des ravageurs ou stimulent leur croissance.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Un pied de tomate bien conduit peut produire 5 à 10 kg de fruits sur une saison. Avec seulement 5 pieds, une famille peut être autonome en tomates pendant 4 mois.' },
            { front: '💡 Le savais-tu ?', back: 'Les « jardins de la victoire » (Victory Gardens) pendant les deux guerres mondiales ont produit jusqu\'à 40 % des légumes consommés aux États-Unis et au Royaume-Uni.' },
            { front: '💡 Le savais-tu ?', back: 'La tomate, originaire d\'Amérique du Sud, a été considérée comme toxique en Europe pendant deux siècles. Elle n\'a été consommée couramment qu\'à partir du XIXe siècle.' }
          ]
        },
        {
          slug: 'legumes-et-familles-botaniques',
          title: 'Légumes et familles botaniques',
          description: 'Les grandes familles de légumes : solanacées, cucurbitacées, fabacées et alliacées.',
          intro: 'Connaître les <strong>familles botaniques</strong> des légumes est essentiel pour organiser les rotations et les associations au potager. Chaque famille partage des besoins nutritifs, des ravageurs et des maladies communes.',
          introHighlight: '<strong>Cinq familles botaniques</strong> dominent le potager : les solanacées (tomate), les cucurbitacées (courge), les fabacées (haricot), les brassicacées (chou) et les apiacées (carotte).',
          intro2: '',
          sections: [
            {
              title: 'Solanacées et cucurbitacées',
              paragraphs: [
                'Les <strong>solanacées</strong> regroupent la tomate, le poivron, l\'aubergine, la pomme de terre et le piment. Ces plantes originaires d\'Amérique (à l\'exception de l\'aubergine, asiatique) sont exigeantes en chaleur, en soleil et en nutriments. Elles sont sensibles au mildiou, à l\'oïdium et aux nématodes. La rotation impose de ne pas cultiver de solanacée sur la même parcelle plus d\'une année sur trois.',
                'Les <strong>cucurbitacées</strong> comprennent les courges, courgettes, concombres, melons et pastèques. Ce sont des plantes rampantes ou grimpantes à croissance vigoureuse, très gourmandes en eau et en compost. La pollinisation est assurée par les insectes (abeilles, bourdons). Un manque de pollinisateurs entraîne des fruits avortés. Les cucurbitacées sont sensibles à l\'oïdium et se conservent particulièrement bien en hiver (courges butternut, potimarron).'
              ],
              highlight: 'La tomate, le poivron, l\'aubergine et la pomme de terre appartiennent tous à la famille des solanacées et ne doivent pas se succéder au potager.'
            },
            {
              title: 'Fabacées et brassicacées',
              paragraphs: [
                'Les <strong>fabacées</strong> (légumineuses) — haricots, pois, fèves, lentilles — sont les alliées du jardinier car elles fixent l\'azote atmosphérique dans le sol grâce à leurs bactéries symbiotiques Rhizobium. Après leur culture, elles laissent 30 à 80 kg d\'azote par hectare disponible pour la culture suivante. On les place toujours avant une culture gourmande en azote (tomates, choux) dans la rotation.',
                'Les <strong>brassicacées</strong> (crucifères) regroupent les choux (chou-fleur, brocoli, chou frisé, chou de Bruxelles), les radis, les navets, la roquette et le cresson. Ces légumes riches en vitamines et en composés soufrés anticancéreux sont des cultures de saison fraîche, supportant bien le froid. Leur principal ennemi est la piéride du chou (papillon blanc dont les chenilles dévorent les feuilles), contrôlée par des filets anti-insectes ou le Bacillus thuringiensis.'
              ],
              highlight: 'Les légumineuses fixent l\'azote de l\'air dans le sol : les cultiver avant des plantes gourmandes (tomates, choux) réduit le besoin en engrais.'
            },
            {
              title: 'Apiacées, alliacées et astéracées',
              paragraphs: [
                'Les <strong>apiacées</strong> (ombellifères) incluent la carotte, le persil, le céleri, le fenouil et le panais. Ces plantes à racine pivotante sont semées directement en place (le repiquage brise la racine). Leur germination est lente (2 à 3 semaines pour la carotte) et le désherbage précoce est crucial. La mouche de la carotte est le ravageur principal, repoussé par l\'association avec le poireau.',
                'Les <strong>alliacées</strong> (oignon, ail, poireau, échalote, ciboulette) sont riches en composés soufrés aux propriétés antifongiques et insectifuges. L\'ail et l\'oignon sont les piliers du potager : faciles à cultiver, peu exigeants et excellents compagnons pour de nombreuses cultures. Les <strong>astéracées</strong> (laitue, chicorée, endive, artichaut, topinambour) forment une famille diversifiée présente au potager toute l\'année grâce à la succession des variétés saisonnières.'
              ],
              highlight: 'Le poireau repousse la mouche de la carotte et la carotte repousse la teigne du poireau : l\'association classique du potager.'
            }
          ],
          quiz: [
            { q: 'À quelle famille appartient la tomate ?', opts: ['Cucurbitacées', 'Solanacées', 'Fabacées', 'Brassicacées'], correct: 1, explanation: 'La tomate appartient à la famille des solanacées, comme le poivron, l\'aubergine et la pomme de terre.' },
            { q: 'Pourquoi les fabacées sont-elles utiles dans une rotation ?', opts: ['Elles repoussent les insectes', 'Elles fixent l\'azote atmosphérique dans le sol', 'Elles ombragent les autres cultures', 'Elles produisent du compost'], correct: 1, explanation: 'Les fabacées (légumineuses) fixent l\'azote de l\'air dans le sol grâce à leurs bactéries symbiotiques Rhizobium, enrichissant le sol pour les cultures suivantes.' },
            { q: 'Quelle association classique repousse la mouche de la carotte ?', opts: ['Tomate et basilic', 'Carotte et poireau', 'Chou et salade', 'Haricot et maïs'], correct: 1, explanation: 'Le poireau repousse la mouche de la carotte et inversement, la carotte repousse la teigne du poireau. C\'est l\'association classique du potager.' }
          ],
          definitions: [
            { term: 'Solanacées', def: 'Famille botanique comprenant la tomate, le poivron, l\'aubergine et la pomme de terre, exigeante en chaleur et en nutriments.' },
            { term: 'Cucurbitacées', def: 'Famille botanique des courges, courgettes, concombres et melons, plantes rampantes ou grimpantes à pollinisation entomophile.' },
            { term: 'Fabacées', def: 'Famille des légumineuses (haricot, pois, fève) capables de fixer l\'azote atmosphérique grâce à leurs bactéries symbiotiques.' },
            { term: 'Brassicacées', def: 'Famille des crucifères (chou, radis, navet) riches en composés soufrés, cultures de saison fraîche.' },
            { term: 'Apiacées', def: 'Famille des ombellifères (carotte, persil, céleri) à racine pivotante, semées directement en place.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La tomate est un fruit au sens botanique (c\'est une baie) mais un légume au sens culinaire. La Cour suprême des États-Unis l\'a officiellement classée comme légume en 1893 pour des raisons fiscales.' },
            { front: '💡 Le savais-tu ?', back: 'Il existe plus de 10 000 variétés de tomates dans le monde, du minuscule groseille (1 cm) au géant beefsteak (1 kg). La plus grosse tomate jamais récoltée pesait 3,9 kg.' },
            { front: '💡 Le savais-tu ?', back: 'La carotte était à l\'origine blanche ou violette. La carotte orange a été sélectionnée aux Pays-Bas au XVIIe siècle, peut-être en hommage à la maison d\'Orange-Nassau.' }
          ]
        },
        {
          slug: 'verger-et-fruitiers',
          title: 'Verger et fruitiers',
          description: 'Plantation, taille, greffage et entretien des arbres fruitiers.',
          intro: 'Le <strong>verger</strong> est un investissement à long terme qui récompense la patience : un pommier commence à produire vers 3-5 ans et peut fructifier pendant 50 à 100 ans. La taille, le greffage et le choix variétal sont les clés d\'un verger productif.',
          introHighlight: '<strong>Un pommier haute tige</strong> peut produire 100 à 300 kg de fruits par an pendant des décennies, nourrissant une famille entière et permettant de transformer les surplus.',
          intro2: '',
          sections: [
            {
              title: 'Choisir et planter',
              paragraphs: [
                'Le choix des <strong>espèces fruitières</strong> dépend du climat, du sol et de l\'espace disponible. Les fruitiers à pépins (pommiers, poiriers, cognassiers) tolèrent les climats frais et humides. Les fruitiers à noyau (cerisiers, pruniers, pêchers, abricotiers) préfèrent la chaleur et craignent les gelées tardives pendant la floraison. Les agrumes (citronniers, orangers) exigent un climat méditerranéen ou subtropical.',
                'La <strong>plantation</strong> s\'effectue entre novembre et mars, pendant le repos végétatif. Le trou de plantation (80 × 80 × 60 cm) est préparé un mois à l\'avance avec du compost et de la corne broyée. Le point de greffe doit rester au-dessus du sol pour éviter que le greffon ne s\'affranchisse. Le tuteurage protège le jeune arbre du vent pendant 2 à 3 ans. L\'espacement dépend du porte-greffe : 3 m pour un arbre nain, 6 m pour un demi-tige et 10 m pour un haute tige.'
              ],
              highlight: 'Un verger haute tige bien conduit peut produire des fruits pendant 50 à 100 ans, traversant plusieurs générations.'
            },
            {
              title: 'Taille et greffage',
              paragraphs: [
                'La <strong>taille fruitière</strong> vise à équilibrer la croissance végétative et la fructification. La taille de formation (3 premières années) sculpte la charpente de l\'arbre. La taille de fructification (annuelle, en hiver) élimine le bois mort, aère le centre de l\'arbre et favorise les rameaux porteurs de fruits. Le pommier fructifie sur le bois de 2 ans (bourgeons à fruit renflés appelés dards) ; le pêcher, sur le bois de l\'année précédente.',
                'Le <strong>greffage</strong> permet de multiplier fidèlement une variété fruitière en l\'associant à un porte-greffe adapté au sol et au climat. Les principales techniques sont la greffe en fente (mars), la greffe en couronne (avril-mai) et la greffe en écusson (août). Le porte-greffe détermine la vigueur de l\'arbre : les porte-greffes nanifiants (M9, M26 pour le pommier) permettent de cultiver des arbres fruitiers en petits espaces, tandis que les porte-greffes vigoureux (franc de pied) produisent de grands arbres productifs.'
              ],
              highlight: 'Le greffage est une technique vieille de 4 000 ans : les Chinois et les Mésopotamiens greffaient déjà leurs arbres fruitiers.'
            },
            {
              title: 'Petits fruits et verger naturel',
              paragraphs: [
                'Les <strong>petits fruits</strong> (framboisier, groseillier, cassissier, myrtillier, mûrier) sont les alliés du jardinier débutant : faciles à cultiver, productifs dès la deuxième année et peu encombrants. Le framboisier produit 2 à 3 kg de fruits par mètre linéaire. Le cassissier est extrêmement riche en vitamine C (200 mg/100 g, quatre fois plus que l\'orange). Les fraisiers, techniquement des plantes herbacées, produisent de 500 g à 1 kg par pied.',
                'Le <strong>verger naturel</strong> s\'inspire de la permaculture : enherbement permanent (trèfle, luzerne), pas de traitement chimique, associations bénéfiques (capucines au pied des pommiers contre les pucerons, tanaisie contre les carpocapses). Les bandes fleuries attirent les auxiliaires (syrphes, coccinelles, chrysopes). Le piège à phéromones capture les mâles de carpocapse (ver de la pomme), réduisant les dégâts sans aucun insecticide.'
              ],
              highlight: 'Le cassis contient quatre fois plus de vitamine C que l\'orange : 200 mg pour 100 g, un superaliment du jardin.'
            }
          ],
          quiz: [
            { q: 'Quand plante-t-on un arbre fruitier ?', opts: ['En été', 'Entre novembre et mars', 'En août', 'Toute l\'année'], correct: 1, explanation: 'Les arbres fruitiers se plantent entre novembre et mars, pendant le repos végétatif, pour leur permettre de développer leurs racines avant la reprise de végétation.' },
            { q: 'Qu\'est-ce qu\'un porte-greffe nanifiant ?', opts: ['Un arbre qui ne produit pas de fruits', 'Un porte-greffe qui limite la taille de l\'arbre', 'Un engrais pour arbres nains', 'Un tuteur en bois'], correct: 1, explanation: 'Un porte-greffe nanifiant (comme M9 pour le pommier) limite la vigueur de l\'arbre greffé, permettant de cultiver des fruitiers productifs dans de petits espaces.' },
            { q: 'Quel fruit contient quatre fois plus de vitamine C que l\'orange ?', opts: ['La fraise', 'Le cassis', 'La pomme', 'La framboise'], correct: 1, explanation: 'Le cassis contient environ 200 mg de vitamine C pour 100 g, soit quatre fois plus que l\'orange (50 mg/100 g).' }
          ],
          definitions: [
            { term: 'Porte-greffe', def: 'Partie racinaire d\'un arbre fruitier sur laquelle est greffée la variété souhaitée, déterminant la vigueur, l\'adaptation au sol et la résistance.' },
            { term: 'Greffe en écusson', def: 'Technique de greffage consistant à insérer un bourgeon (écusson) sous l\'écorce du porte-greffe, pratiquée en août.' },
            { term: 'Dard', def: 'Bourgeon à fruit renflé sur un arbre fruitier à pépins, porteur des futures fleurs et fruits.' },
            { term: 'Carpocapse', def: 'Papillon nocturne dont la larve (« ver de la pomme ») creuse des galeries dans les fruits à pépins.' },
            { term: 'Porte-greffe nanifiant', def: 'Porte-greffe à faible vigueur (ex. : M9) limitant la taille de l\'arbre et accélérant la mise à fruit.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le pommier le plus ancien de France, planté en 1630 au jardin du Luxembourg à Paris, produit encore des fruits après presque 400 ans.' },
            { front: '💡 Le savais-tu ?', back: 'Un seul pommier haute tige peut produire 300 kg de pommes par an, soit environ 100 litres de jus ou 30 litres de cidre.' },
            { front: '💡 Le savais-tu ?', back: 'Le piège à phéromones, inventé dans les années 1970, capture les mâles de carpocapse en imitant l\'odeur de la femelle. Un seul piège protège 3 à 5 arbres.' }
          ]
        },
        {
          slug: 'jardinage-ecologique',
          title: 'Jardinage écologique',
          description: 'Techniques naturelles : purins, associations, biodiversité et zéro déchet au jardin.',
          intro: 'Le <strong>jardinage écologique</strong> refuse les produits chimiques de synthèse et s\'appuie sur les processus naturels pour cultiver un jardin sain et productif. Purins de plantes, associations bénéfiques, accueil de la biodiversité et recyclage des déchets en sont les piliers.',
          introHighlight: '<strong>Un jardin écologique</strong> peut abriter plus de 2 000 espèces animales et végétales, constituant un véritable réservoir de biodiversité en milieu urbain.',
          intro2: '',
          sections: [
            {
              title: 'Purins et préparations naturelles',
              paragraphs: [
                'Les <strong>purins de plantes</strong> sont des extraits fermentés utilisés comme fertilisants foliaires, stimulateurs de croissance ou répulsifs. Le purin d\'ortie, le plus connu, est un fertilisant riche en azote et en fer : 1 kg d\'orties fraîches dans 10 litres d\'eau, fermenté 10 à 15 jours, dilué au dixième pour l\'arrosage. Le purin de consoude, riche en potassium, favorise la floraison et la fructification.',
                'La <strong>décoction de prêle</strong>, riche en silice, renforce les défenses des plantes contre les maladies fongiques (mildiou, oïdium). L\'infusion d\'ail est un puissant insectifuge et fongicide. Le savon noir (10 g/litre) élimine les pucerons par contact en dissolvant leur cuticule cireuse. Le bicarbonate de soude (5 g/litre + savon noir) constitue un traitement efficace et économique contre l\'oïdium.'
              ],
              highlight: 'Le purin d\'ortie est à la fois un fertilisant riche en azote, un stimulateur de croissance et un répulsif pour les pucerons.'
            },
            {
              title: 'Biodiversité au jardin',
              paragraphs: [
                'Accueillir la <strong>biodiversité</strong> au jardin, c\'est recruter une armée d\'auxiliaires gratuits. Les coccinelles dévorent les pucerons (5 000 par individu au cours de sa vie), les chrysopes s\'attaquent aux cochenilles, les hérissons mangent les limaces et les crapauds consomment des centaines d\'insectes par nuit. Installer un hôtel à insectes, un tas de bois mort et un point d\'eau attire ces précieux alliés.',
                'Les <strong>plantes mellifères</strong> (lavande, bourrache, phacélie, trèfle) nourrissent les pollinisateurs indispensables à la production des légumes-fruits. Les haies mixtes (sureau, noisetier, cornouiller, prunellier) offrent gîte et couvert aux oiseaux insectivores (mésanges, rouges-gorges, troglodytes). Un jardin écologique n\'est jamais « propre » au sens conventionnel : les zones sauvages, les herbes hautes et le bois mort sont des habitats essentiels.'
              ],
              highlight: 'Une seule mésange bleue consomme jusqu\'à 500 chenilles par jour pour nourrir sa couvée, soit 10 000 insectes pendant la saison de reproduction.'
            },
            {
              title: 'Zéro déchet au jardin',
              paragraphs: [
                'Le jardin écologique est un <strong>écosystème circulaire</strong> où rien ne se perd. Les déchets de cuisine alimentent le composteur ou le lombricomposteur. Les tontes de gazon servent de paillage. Les branches taillées sont broyées en BRF ou transformées en fagots pour l\'hôtel à insectes. L\'eau de cuisson des légumes (refroidie) est un engrais liquide gratuit riche en minéraux.',
                'La <strong>récupération des graines</strong> est un geste ancestral qui perpétue la diversité variétale. Choisir les plus beaux fruits des plants les plus vigoureux, extraire les graines, les sécher et les stocker dans un endroit frais et sec. Les graines de tomate, poivron, haricot et laitue se conservent 3 à 5 ans. Le troc de graines entre jardiniers maintient vivantes des centaines de variétés anciennes menacées par l\'uniformisation industrielle.'
              ],
              highlight: 'Récupérer ses propres graines est gratuit, perpétue la diversité variétale et adapte progressivement les plantes au terroir local.'
            }
          ],
          quiz: [
            { q: 'Combien de temps faut-il pour préparer un purin d\'ortie ?', opts: ['1 jour', '3-5 jours', '10-15 jours', '2 mois'], correct: 2, explanation: 'Le purin d\'ortie nécessite 10 à 15 jours de fermentation (1 kg d\'orties fraîches dans 10 litres d\'eau), puis est dilué au dixième avant utilisation.' },
            { q: 'Combien de pucerons une coccinelle dévore-t-elle au cours de sa vie ?', opts: ['500', '1 000', '5 000', '10 000'], correct: 2, explanation: 'Une coccinelle consomme environ 5 000 pucerons au cours de sa vie, ce qui en fait l\'un des auxiliaires les plus précieux du jardinier.' },
            { q: 'Combien de temps les graines de tomate se conservent-elles ?', opts: ['1 an', '3 à 5 ans', '10 ans', '20 ans'], correct: 1, explanation: 'Les graines de tomate, stockées dans un endroit frais et sec, conservent un bon pouvoir germinatif pendant 3 à 5 ans.' }
          ],
          definitions: [
            { term: 'Purin d\'ortie', def: 'Extrait fermenté d\'orties dilué, utilisé comme fertilisant azoté, stimulateur de croissance et répulsif naturel.' },
            { term: 'Auxiliaire', def: 'Organisme vivant (insecte, oiseau, amphibien) qui aide naturellement à contrôler les ravageurs du jardin.' },
            { term: 'Plante mellifère', def: 'Plante produisant du nectar et/ou du pollen abondant, attirant et nourrissant les abeilles et autres pollinisateurs.' },
            { term: 'Hôtel à insectes', def: 'Structure composée de matériaux variés (tiges creuses, bois percé, pommes de pin) offrant des abris aux insectes auxiliaires.' },
            { term: 'Graines reproductibles', def: 'Graines issues de variétés non hybrides (fixées ou anciennes) qui donnent des plantes identiques au parent, permettant la récupération de semences.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le purin d\'ortie a été interdit à la vente en France en 2006, provoquant une « guerre de l\'ortie » médiatisée. La loi a finalement été modifiée en 2016 pour autoriser les préparations naturelles peu préoccupantes (PNPP).' },
            { front: '💡 Le savais-tu ?', back: 'Un hérisson consomme 70 g de limaces et d\'insectes par nuit, soit l\'équivalent de son propre poids. C\'est le meilleur anti-limace naturel du jardinier.' },
            { front: '💡 Le savais-tu ?', back: 'Le Conservatoire de Tomates Anciennes de la Bourdaisière (Touraine) cultive plus de 700 variétés de tomates, préservant un patrimoine génétique irremplaçable.' }
          ]
        },
        {
          slug: 'calendrier-du-jardinier',
          title: 'Calendrier du jardinier',
          description: 'Que faire au jardin mois par mois : semis, plantations, entretien et récoltes.',
          intro: 'Le jardin vit au rythme des saisons. Chaque mois apporte ses <strong>travaux spécifiques</strong> : semis, plantations, tailles, récoltes et préparations pour la saison suivante. Ce calendrier, adapté au climat tempéré français, est un guide précieux pour organiser son année potagère.',
          introHighlight: '<strong>Le calendrier lunaire</strong>, utilisé depuis l\'Antiquité, distingue les jours feuilles, fruits, fleurs et racines selon la position de la Lune dans les constellations du zodiaque.',
          intro2: '',
          sections: [
            {
              title: 'Printemps : le renouveau',
              paragraphs: [
                'En <strong>mars</strong>, le jardin s\'éveille. C\'est le moment de semer sous abri les tomates, poivrons, aubergines et céleris. En pleine terre, on sème les petits pois, fèves, radis, épinards et laitues de printemps. Les arbres fruitiers reçoivent leur dernière taille, les rosiers sont taillés et les framboisiers palissés. Le compost mûr est épandu sur les planches de culture.',
                'En <strong>avril-mai</strong>, l\'activité s\'intensifie. Les pommes de terre sont plantées (traditionnellement à la Saint-Joseph, le 19 mars, dans le Midi, et en avril dans le Nord). Après les saints de glace (11-13 mai), on repique en pleine terre les plants de tomates, courgettes, concombres et courges élevés sous abri. Les haricots verts et les betteraves sont semés directement. Le paillage est installé entre les rangs pour conserver l\'humidité.'
              ],
              highlight: 'Mars est le mois le plus stratégique au potager : les semis sous abri de cette période détermineront les récoltes d\'été.'
            },
            {
              title: 'Été : l\'abondance',
              paragraphs: [
                'En <strong>juin-juillet</strong>, le potager entre en pleine production. Les premières tomates rougissent, les courgettes sont récoltées tous les deux jours (elles grossissent vite !), les haricots verts se cueillent jeunes et tendres. L\'arrosage devient crucial : 20 litres par m² et par semaine en période sèche. On sème les haricots verts d\'automne, les chicorées et les navets. Les fraisiers produisent leurs stolons qu\'on marcotte pour obtenir de nouveaux plants.',
                'En <strong>août</strong>, c\'est le moment de préparer l\'automne. On sème les épinards d\'hiver, la mâche, les oignons blancs et les radis noirs. Les tomates sont effeuillées pour accélérer la maturation des derniers fruits. La récolte des pommes de terre de conservation (variétés tardives) s\'effectue par temps sec. Les confitures, conserves et séchage de légumes permettent de profiter de l\'abondance estivale toute l\'année.'
              ],
              highlight: 'En été, un potager de 50 m² peut produire 5 à 10 kg de légumes par semaine : tomates, courgettes, haricots, concombres, aubergines.'
            },
            {
              title: 'Automne et hiver : préparer l\'avenir',
              paragraphs: [
                'En <strong>septembre-octobre</strong>, le potager produit ses dernières récoltes d\'été tandis que les cultures d\'automne prennent le relais. On plante l\'ail et les échalotes, on sème les engrais verts (moutarde, phacélie, seigle) sur les parcelles libérées. Les arbres fruitiers sont plantés (de novembre à mars). Les feuilles mortes, précieuse ressource, sont ramassées pour le compost ou le paillage.',
                'En <strong>novembre à février</strong>, le jardin hiberne mais le jardinier reste actif. La taille des fruitiers (pommiers, poiriers) s\'effectue pendant le repos végétatif. Le compost est retourné. Les catalogues de semences sont étudiés pour planifier la saison suivante. Les châssis et voiles d\'hivernage protègent les cultures en place (mâche, épinards, poireaux). C\'est aussi le moment idéal pour construire des aménagements : carrés potagers, pergolas, récupérateurs d\'eau.'
              ],
              highlight: 'L\'automne est la meilleure saison pour planter les arbres fruitiers : « à la Sainte-Catherine (25 novembre), tout bois prend racine ».'
            }
          ],
          quiz: [
            { q: 'Quand sème-t-on les tomates sous abri ?', opts: ['En janvier', 'En mars', 'En mai', 'En juillet'], correct: 1, explanation: 'Les tomates sont semées sous abri en mars, puis repiquées en pleine terre après les saints de glace (mi-mai).' },
            { q: 'Quand plante-t-on l\'ail ?', opts: ['En mars', 'En juin', 'En septembre-octobre', 'En décembre'], correct: 2, explanation: 'L\'ail se plante en automne (septembre-octobre) pour une récolte l\'été suivant. Le froid hivernal est nécessaire à la bonne formation des gousses (vernalisation).' },
            { q: 'Que fait-on au potager en hiver ?', opts: ['Rien, on attend le printemps', 'Taille des fruitiers, compostage, planification', 'On sème toutes les cultures', 'On retourne tout le sol'], correct: 1, explanation: 'L\'hiver est consacré à la taille des fruitiers, au retournement du compost, à la planification de la saison suivante et à la construction d\'aménagements.' }
          ],
          definitions: [
            { term: 'Saints de glace', def: 'Période du 11 au 13 mai (Mamert, Pancrace, Servais) marquant traditionnellement la fin des risques de gel tardif en climat tempéré français.' },
            { term: 'Engrais vert', def: 'Culture semée entre deux cultures principales pour couvrir et enrichir le sol, puis fauchée et incorporée avant la culture suivante.' },
            { term: 'Stolon', def: 'Tige rampante émise par le fraisier qui s\'enracine à distance pour former un nouveau plant (reproduction végétative).' },
            { term: 'Vernalisation', def: 'Exposition au froid nécessaire à certaines plantes (ail, blé d\'hiver) pour déclencher la floraison ou la formation des bulbes.' },
            { term: 'Voile d\'hivernage', def: 'Textile non tissé léger posé sur les cultures pour les protéger du gel tout en laissant passer l\'eau et la lumière.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le proverbe « à la Sainte-Catherine, tout bois prend racine » (25 novembre) est vérifié par la science : l\'enracinement automnal, favorisé par un sol encore chaud et l\'humidité, donne les meilleurs résultats de reprise.' },
            { front: '💡 Le savais-tu ?', back: 'En Provence, on plante les pommes de terre à la Saint-Joseph (19 mars), soit deux mois avant le Nord de la France. Le calendrier du jardinier varie de 6 à 8 semaines selon les régions.' },
            { front: '💡 Le savais-tu ?', back: 'Les semenciers artisanaux (Kokopelli, Germinance, Ferme de Sainte Marthe) proposent des milliers de variétés anciennes et reproductibles, face aux quelques centaines de variétés hybrides de l\'industrie.' }
          ]
        }
      ]
    }
  ]
};
