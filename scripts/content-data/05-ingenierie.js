// Discipline definition: Ingenierie & Technologie
// 6 hubs, 30 lessons — all content in French

module.exports = {
  slug: 'ingenierie',
  title: 'Ing\u00e9nierie & Technologie',
  description: 'D\u00e9couvrez les grands domaines de l\'ing\u00e9nierie : m\u00e9canique, \u00e9lectronique, g\u00e9nie civil, \u00e9nergie et mat\u00e9riaux, au c\u0153ur de l\'innovation technologique.',
  icon: '\uD83D\uDD27',
  cat: 'Ing\u00e9nierie & Technologie',
  themeSlug: 'savoir-faire',
  accent: '#e09a5a',
  accent2: '#edba85',
  accentDim: 'rgba(224,154,90,0.1)',
  accentHero: 'rgba(224,154,90,0.08)',
  introTitle: 'Qu\'est-ce que l\'ing\u00e9nierie ?',
  introText: 'L\'ing\u00e9nierie est l\'art d\'appliquer les connaissances scientifiques et math\u00e9matiques \u00e0 la conception, la construction et l\'optimisation de syst\u00e8mes techniques. Des ponts romains aux microprocesseurs modernes, l\'ing\u00e9nieur transforme les lois de la physique en solutions concr\u00e8tes qui fa\u00e7onnent notre quotidien. Cette discipline couvre un spectre immense : m\u00e9canique, \u00e9lectronique, g\u00e9nie civil, \u00e9nergie, mat\u00e9riaux et robotique.',
  introHighlight: 'De la machine \u00e0 vapeur de Watt aux robots autonomes, l\'ing\u00e9nierie est le moteur du progr\u00e8s technique. Chaque objet manufactur\u00e9, chaque infrastructure, chaque syst\u00e8me \u00e9nerg\u00e9tique est le fruit du travail d\'ing\u00e9nieurs.',
  articleLow: 'l\'',
  hubs: [
    // ──────────────────────────────────────────────
    // HUB 1 — Mecanique
    // ──────────────────────────────────────────────
    {
      slug: 'mecanique',
      title: 'M\u00e9canique',
      description: 'Forces, dynamique, r\u00e9sistance des mat\u00e9riaux, machines et tribologie.',
      lessons: [
        {
          slug: 'forces-et-mouvements',
          title: 'Forces et mouvements',
          description: 'Les lois fondamentales de la m\u00e9canique classique : forces, acc\u00e9l\u00e9ration et \u00e9quilibre des corps.',
          intro: 'La <strong>m\u00e9canique classique</strong> constitue le socle de toute formation en ing\u00e9nierie. Fond\u00e9e sur les travaux d\'Isaac Newton au XVIIe si\u00e8cle, elle d\u00e9crit comment les forces agissent sur les corps et d\u00e9terminent leur mouvement.',
          introHighlight: '<strong>Les trois lois de Newton</strong> r\u00e9gissent l\'ensemble de la m\u00e9canique classique et permettent de pr\u00e9dire le comportement de tout objet, du boulet de canon au satellite en orbite.',
          intro2: '',
          sections: [
            {
              title: 'Les trois lois de Newton',
              paragraphs: [
                'La <strong>premi\u00e8re loi de Newton</strong> (principe d\'inertie) \u00e9nonce qu\'un corps au repos reste au repos, et qu\'un corps en mouvement rectiligne uniforme conserve ce mouvement, tant qu\'aucune force ext\u00e9rieure ne s\'applique \u00e0 lui. Ce principe, contre-intuitif pour Aristote qui pensait qu\'un mouvement n\u00e9cessitait une force permanente, est fondamental en ing\u00e9nierie : il explique pourquoi un v\u00e9hicule continue d\'avancer lorsqu\'on coupe le moteur.',
                'La <strong>deuxi\u00e8me loi</strong> (principe fondamental de la dynamique) relie la force appliqu\u00e9e \u00e0 l\'acc\u00e9l\u00e9ration par la formule F = ma. Cette \u00e9quation est l\'outil principal de l\'ing\u00e9nieur m\u00e9canicien : elle permet de dimensionner un moteur, calculer la pouss\u00e9e d\'une fus\u00e9e ou \u00e9valuer la r\u00e9sistance d\'une structure.',
                'La <strong>troisi\u00e8me loi</strong> (action-r\u00e9action) stipule que toute force exerc\u00e9e par un corps A sur un corps B s\'accompagne d\'une force \u00e9gale en intensit\u00e9 mais oppos\u00e9e en direction, exerc\u00e9e par B sur A. Ce principe explique la propulsion des fus\u00e9es : les gaz \u00e9ject\u00e9s vers l\'arri\u00e8re exercent une force \u00e9gale et oppos\u00e9e qui propulse l\'engin vers l\'avant.'
              ],
              highlight: 'F = ma est sans doute l\'\u00e9quation la plus utilis\u00e9e en ing\u00e9nierie m\u00e9canique.'
            },
            {
              title: 'Statique et \u00e9quilibre',
              paragraphs: [
                'La <strong>statique</strong> \u00e9tudie les conditions d\'\u00e9quilibre des corps soumis \u00e0 plusieurs forces. Un corps est en \u00e9quilibre lorsque la somme vectorielle des forces qui s\'exercent sur lui est nulle et que la somme des moments par rapport \u00e0 un point quelconque est \u00e9galement nulle. Ce double crit\u00e8re garantit l\'absence de translation et de rotation.',
                'En ing\u00e9nierie des structures, la statique permet de calculer les <strong>r\u00e9actions d\'appui</strong> d\'une poutre, les tensions dans les c\u00e2bles d\'un pont suspendu ou les efforts dans les barres d\'un treillis. Le diagramme de corps libre (free body diagram) est l\'outil graphique fondamental : on isole le corps \u00e9tudi\u00e9 et on repr\u00e9sente toutes les forces ext\u00e9rieures qui s\'y appliquent.'
              ],
              highlight: 'L\'\u00e9quilibre exige que la somme des forces ET la somme des moments soient nulles.'
            },
            {
              title: 'Cin\u00e9matique du point',
              paragraphs: [
                'La <strong>cin\u00e9matique</strong> d\u00e9crit le mouvement sans se pr\u00e9occuper de ses causes. On y d\u00e9finit la position, la vitesse (d\u00e9riv\u00e9e de la position par rapport au temps) et l\'acc\u00e9l\u00e9ration (d\u00e9riv\u00e9e de la vitesse). En mouvement rectiligne uniform\u00e9ment acc\u00e9l\u00e9r\u00e9, la vitesse cro\u00eet lin\u00e9airement et la position \u00e9volue en fonction du carr\u00e9 du temps.',
                'Le <strong>mouvement circulaire</strong> introduit l\'acc\u00e9l\u00e9ration centripete, dirig\u00e9e vers le centre de la trajectoire. Cette notion est essentielle pour concevoir des autoroutes (d\u00e9vers dans les virages), des centrifugeuses ou des man\u00e8ges. L\'ing\u00e9nieur doit s\'assurer que les forces centrifuges restent dans les limites tol\u00e9rables par la structure et les occupants.',
                'La cin\u00e9matique du solide \u00e9tend ces concepts aux corps rigides en rotation. On y introduit la vitesse angulaire (\u03c9) et l\'acc\u00e9l\u00e9ration angulaire (\u03b1), analogues rotationnels de la vitesse et de l\'acc\u00e9l\u00e9ration lin\u00e9aires.'
              ],
              highlight: 'L\'acc\u00e9l\u00e9ration centripete explique pourquoi les routes sont inclin\u00e9es dans les virages.'
            }
          ],
          quiz: [
            { q: 'Que stipule la premi\u00e8re loi de Newton ?', opts: ['Toute force engendre une acc\u00e9l\u00e9ration', 'Un corps persiste dans son \u00e9tat de repos ou de mouvement uniforme', 'L\'action est toujours \u00e9gale \u00e0 la r\u00e9action', 'L\'\u00e9nergie se conserve toujours'], correct: 1, explanation: 'La premi\u00e8re loi de Newton (principe d\'inertie) \u00e9nonce qu\'un corps conserve son \u00e9tat de repos ou de mouvement rectiligne uniforme tant qu\'aucune force ext\u00e9rieure ne le modifie.' },
            { q: 'Quelle \u00e9quation traduit le principe fondamental de la dynamique ?', opts: ['E = mc\u00b2', 'F = ma', 'P = mv', 'W = Fd'], correct: 1, explanation: 'F = ma est le principe fondamental de la dynamique : la force \u00e9gale le produit de la masse par l\'acc\u00e9l\u00e9ration.' },
            { q: 'Quelles conditions sont n\u00e9cessaires \u00e0 l\'\u00e9quilibre statique d\'un corps ?', opts: ['Somme des forces nulle uniquement', 'Somme des moments nulle uniquement', 'Somme des forces et somme des moments nulles', 'Vitesse constante et acc\u00e9l\u00e9ration nulle'], correct: 2, explanation: 'L\'\u00e9quilibre statique exige que la somme vectorielle des forces et la somme des moments soient toutes deux nulles.' }
          ],
          definitions: [
            { term: 'Inertie', def: 'Propri\u00e9t\u00e9 d\'un corps \u00e0 r\u00e9sister aux changements de son \u00e9tat de mouvement. Plus la masse est grande, plus l\'inertie est \u00e9lev\u00e9e.' },
            { term: 'Force', def: 'Grandeur vectorielle capable de modifier l\'\u00e9tat de repos ou de mouvement d\'un corps. Mesur\u00e9e en newtons (N).' },
            { term: 'Moment de force', def: 'Grandeur mesurant la capacit\u00e9 d\'une force \u00e0 faire tourner un corps autour d\'un axe. \u00c9gal au produit vectoriel du bras de levier par la force.' },
            { term: 'Acc\u00e9l\u00e9ration centripete', def: 'Acc\u00e9l\u00e9ration dirig\u00e9e vers le centre de la trajectoire circulaire, \u00e9gale \u00e0 v\u00b2/r.' },
            { term: 'Diagramme de corps libre', def: 'Repr\u00e9sentation graphique d\'un corps isol\u00e9 montrant toutes les forces ext\u00e9rieures qui s\'exercent sur lui.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La Station spatiale internationale est en chute libre permanente autour de la Terre. Les astronautes flottent non pas parce qu\'il n\'y a pas de gravit\u00e9, mais parce qu\'ils tombent \u00e0 la m\u00eame vitesse que la station.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La troisi\u00e8me loi de Newton explique pourquoi un fusil recule quand on tire : le projectile part vers l\'avant et le fusil re\u00e7oit une force \u00e9gale vers l\'arri\u00e8re.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Newton a publi\u00e9 ses trois lois dans les Principia Mathematica en 1687, consid\u00e9r\u00e9 comme l\'un des ouvrages scientifiques les plus importants de l\'histoire.' }
          ]
        },
        {
          slug: 'dynamique-des-systemes',
          title: 'Dynamique des syst\u00e8mes',
          description: '\u00c9nergie cin\u00e9tique, travail, puissance et conservation de l\'\u00e9nergie m\u00e9canique.',
          intro: 'La <strong>dynamique</strong> \u00e9tudie les relations entre les forces appliqu\u00e9es \u00e0 un syst\u00e8me et les mouvements qui en r\u00e9sultent. Les concepts d\'\u00e9nergie, de travail et de puissance sont au c\u0153ur de la conception de toute machine.',
          introHighlight: '<strong>Le th\u00e9or\u00e8me de l\'\u00e9nergie cin\u00e9tique</strong> relie le travail des forces \u00e0 la variation d\'\u00e9nergie cin\u00e9tique, outil fondamental pour dimensionner moteurs et freins.',
          intro2: '',
          sections: [
            {
              title: 'Travail et \u00e9nergie cin\u00e9tique',
              paragraphs: [
                'Le <strong>travail</strong> d\'une force est le produit scalaire de cette force par le d\u00e9placement du point d\'application. Exprim\u00e9 en joules (J), il mesure l\'\u00e9nergie transf\u00e9r\u00e9e par la force au cours du mouvement. Un travail positif (force dans le sens du mouvement) acc\u00e9l\u00e8re le corps ; un travail n\u00e9gatif (force oppos\u00e9e au mouvement) le freine.',
                'L\'<strong>\u00e9nergie cin\u00e9tique</strong> d\'un corps de masse m anim\u00e9 d\'une vitesse v vaut Ec = \u00bdmv\u00b2. Le th\u00e9or\u00e8me de l\'\u00e9nergie cin\u00e9tique \u00e9tablit que la variation d\'\u00e9nergie cin\u00e9tique d\'un syst\u00e8me \u00e9gale la somme des travaux de toutes les forces qui s\'y appliquent. Ce th\u00e9or\u00e8me est particuli\u00e8rement utile lorsqu\'on ne conna\u00eet pas l\'acc\u00e9l\u00e9ration mais qu\'on peut calculer les travaux.'
              ],
              highlight: 'Ec = \u00bdmv\u00b2 : l\'\u00e9nergie cin\u00e9tique double quand la vitesse augmente de 41 %.'
            },
            {
              title: 'Conservation de l\'\u00e9nergie m\u00e9canique',
              paragraphs: [
                'L\'<strong>\u00e9nergie potentielle de pesanteur</strong> (Ep = mgh) repr\u00e9sente l\'\u00e9nergie stock\u00e9e par un corps en altitude. Un barrage hydroelectrique exploite cette \u00e9nergie : l\'eau stock\u00e9e en hauteur poss\u00e8de une \u00e9nergie potentielle convertie en \u00e9nergie cin\u00e9tique puis en \u00e9nergie \u00e9lectrique par les turbines.',
                'En l\'absence de frottements, l\'\u00e9nergie m\u00e9canique totale (Em = Ec + Ep) se conserve. Dans la r\u00e9alit\u00e9, les <strong>frottements</strong> dissipent une partie de l\'\u00e9nergie sous forme de chaleur. L\'ing\u00e9nieur doit minimiser ces pertes par le choix de lubrifiants, de formes a\u00e9rodynamiques ou de mat\u00e9riaux \u00e0 faible coefficient de frottement.',
                'La <strong>puissance</strong> (P = W/t = Fv) mesure la vitesse \u00e0 laquelle le travail est effectu\u00e9. Exprim\u00e9e en watts (W), elle est d\u00e9terminante pour le choix d\'un moteur : un moteur de 100 kW peut fournir la m\u00eame quantit\u00e9 de travail qu\'un moteur de 50 kW, mais deux fois plus vite.'
              ],
              highlight: 'Un barrage de 100 m\u00e8tres de hauteur conf\u00e8re \u00e0 chaque kilogramme d\'eau une \u00e9nergie potentielle de 981 J.'
            },
            {
              title: 'Quantit\u00e9 de mouvement et chocs',
              paragraphs: [
                'La <strong>quantit\u00e9 de mouvement</strong> (p = mv) est une grandeur vectorielle conserv\u00e9e lors des collisions en l\'absence de forces ext\u00e9rieures. Ce principe est essentiel pour analyser les crash tests automobiles, la balistique ou la m\u00e9canique spatiale.',
                'On distingue les <strong>chocs \u00e9lastiques</strong> (l\'\u00e9nergie cin\u00e9tique est conserv\u00e9e, comme entre billes de billard id\u00e9ales) et les <strong>chocs in\u00e9lastiques</strong> (une partie de l\'\u00e9nergie est dissip\u00e9e en d\u00e9formation ou chaleur). En s\u00e9curit\u00e9 automobile, on con\u00e7oit des zones de d\u00e9formation qui absorbent l\'\u00e9nergie cin\u00e9tique lors d\'un impact, allongeant le temps de collision pour r\u00e9duire les forces subies par les occupants.'
              ],
              highlight: 'Les zones de d\u00e9formation d\'une voiture allongent le temps d\'impact de 0,1 s \u00e0 0,3 s, divisant la force par trois.'
            }
          ],
          quiz: [
            { q: 'Quelle est l\'expression de l\'\u00e9nergie cin\u00e9tique ?', opts: ['Ec = mv', 'Ec = mgh', 'Ec = \u00bdmv\u00b2', 'Ec = \u00bdkx\u00b2'], correct: 2, explanation: 'L\'\u00e9nergie cin\u00e9tique d\'un corps est Ec = \u00bdmv\u00b2, proportionnelle \u00e0 la masse et au carr\u00e9 de la vitesse.' },
            { q: 'Que deviennent les pertes par frottement ?', opts: ['Elles disparaissent', 'Elles se transforment en chaleur', 'Elles augmentent l\'\u00e9nergie potentielle', 'Elles cr\u00e9ent de l\'\u00e9lectricit\u00e9'], correct: 1, explanation: 'Les frottements dissipent l\'\u00e9nergie m\u00e9canique sous forme de chaleur, conform\u00e9ment au premier principe de la thermodynamique.' },
            { q: 'Quelle grandeur est conserv\u00e9e lors d\'un choc en l\'absence de forces ext\u00e9rieures ?', opts: ['L\'\u00e9nergie cin\u00e9tique', 'La quantit\u00e9 de mouvement', 'La vitesse', 'L\'acc\u00e9l\u00e9ration'], correct: 1, explanation: 'La quantit\u00e9 de mouvement (p = mv) est toujours conserv\u00e9e lors d\'une collision isol\u00e9e, qu\'elle soit \u00e9lastique ou in\u00e9lastique.' }
          ],
          definitions: [
            { term: 'Travail', def: 'Produit scalaire de la force par le d\u00e9placement de son point d\'application. Mesur\u00e9 en joules (J).' },
            { term: '\u00c9nergie cin\u00e9tique', def: '\u00c9nergie li\u00e9e au mouvement d\'un corps, \u00e9gale \u00e0 \u00bdmv\u00b2.' },
            { term: 'Puissance', def: 'Taux de transfert d\'\u00e9nergie par unit\u00e9 de temps. P = W/t, mesur\u00e9e en watts (W).' },
            { term: 'Choc \u00e9lastique', def: 'Collision durant laquelle l\'\u00e9nergie cin\u00e9tique totale du syst\u00e8me est conserv\u00e9e.' },
            { term: 'Quantit\u00e9 de mouvement', def: 'Produit de la masse par la vitesse (p = mv). Grandeur vectorielle conserv\u00e9e dans un syst\u00e8me isol\u00e9.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Doubler la vitesse d\'un v\u00e9hicule multiplie par quatre son \u00e9nergie cin\u00e9tique et donc sa distance de freinage. C\'est pourquoi les exc\u00e8s de vitesse sont si dangereux.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le watt, unit\u00e9 de puissance, porte le nom de James Watt qui a perfectionn\u00e9 la machine \u00e0 vapeur au XVIIIe si\u00e8cle.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les airbags augmentent le temps de d\u00e9c\u00e9l\u00e9ration lors d\'un accident, r\u00e9duisant consid\u00e9rablement la force subie par les occupants conform\u00e9ment \u00e0 F = ma.' }
          ]
        },
        {
          slug: 'resistance-des-materiaux',
          title: 'R\u00e9sistance des mat\u00e9riaux',
          description: 'Contraintes, d\u00e9formations, flexion et flambage des \u00e9l\u00e9ments de structure.',
          intro: 'La <strong>r\u00e9sistance des mat\u00e9riaux</strong> (RDM) est la branche de la m\u00e9canique qui \u00e9tudie le comportement des solides soumis \u00e0 des charges. Elle permet de dimensionner les pi\u00e8ces m\u00e9caniques et les structures pour qu\'elles r\u00e9sistent aux efforts sans se rompre ni se d\u00e9former excessivement.',
          introHighlight: '<strong>Dimensionner, c\'est trouver le juste \u00e9quilibre</strong> entre s\u00e9curit\u00e9 et \u00e9conomie : une pi\u00e8ce surdimensionn\u00e9e g\u00e2che du mat\u00e9riau ; une pi\u00e8ce sous-dimensionn\u00e9e met des vies en danger.',
          intro2: '',
          sections: [
            {
              title: 'Contrainte et d\u00e9formation',
              paragraphs: [
                'La <strong>contrainte</strong> (\u03c3) est le rapport de la force appliqu\u00e9e \u00e0 la surface sur laquelle elle s\'exerce (\u03c3 = F/A), exprim\u00e9e en pascals (Pa) ou m\u00e9gapascals (MPa). On distingue la contrainte normale (perpendiculaire \u00e0 la section) et la contrainte de cisaillement (parall\u00e8le \u00e0 la section). Un acier de construction courant supporte environ 250 MPa avant de se d\u00e9former de mani\u00e8re permanente.',
                'La <strong>d\u00e9formation</strong> (\u03b5) mesure l\'allongement relatif du mat\u00e9riau (\u03b5 = \u0394L/L). Dans le domaine \u00e9lastique, contrainte et d\u00e9formation sont li\u00e9es par la <strong>loi de Hooke</strong> : \u03c3 = E\u03b5, o\u00f9 E est le module d\'Young du mat\u00e9riau. Ce module caract\u00e9rise la rigidit\u00e9 : l\'acier (E \u2248 210 GPa) est environ trois fois plus rigide que l\'aluminium (E \u2248 70 GPa).',
                'Au-del\u00e0 de la <strong>limite \u00e9lastique</strong>, le mat\u00e9riau entre dans le domaine plastique : la d\u00e9formation devient permanente. Si la charge continue d\'augmenter, on atteint la <strong>r\u00e9sistance \u00e0 la traction</strong>, puis la rupture. Le diagramme contrainte-d\u00e9formation r\u00e9sume le comportement m\u00e9canique complet d\'un mat\u00e9riau.'
              ],
              highlight: 'Le module d\'Young de l\'acier (210 GPa) signifie qu\'une barre d\'un m\u00e8tre carr\u00e9 n\u00e9cessite 210 milliards de newtons pour doubler de longueur.'
            },
            {
              title: 'Sollicitations \u00e9l\u00e9mentaires',
              paragraphs: [
                'Les pi\u00e8ces m\u00e9caniques subissent plusieurs types de sollicitations : la <strong>traction</strong> (c\u00e2bles, tiges), la <strong>compression</strong> (piliers, colonnes), la <strong>flexion</strong> (poutres, planchers), le <strong>cisaillement</strong> (rivets, boulons) et la <strong>torsion</strong> (arbres de transmission). Chaque sollicitation g\u00e9n\u00e8re une r\u00e9partition de contraintes sp\u00e9cifique dans la section de la pi\u00e8ce.',
                'La <strong>flexion</strong> est la sollicitation la plus courante en g\u00e9nie civil. Une poutre en flexion pr\u00e9sente une fibre neutre (contrainte nulle), des fibres sup\u00e9rieures compress\u00e9es et des fibres inf\u00e9rieures tendues. Le moment d\'inertie de la section d\u00e9termine sa r\u00e9sistance \u00e0 la flexion : c\'est pourquoi les profil\u00e9s en I sont si efficaces, concentrant la mati\u00e8re loin de la fibre neutre.'
              ],
              highlight: 'Le profil\u00e9 en I est la forme optimale pour r\u00e9sister \u00e0 la flexion avec un minimum de mati\u00e8re.'
            },
            {
              title: 'Flambage et coefficients de s\u00e9curit\u00e9',
              paragraphs: [
                'Le <strong>flambage</strong> est un ph\u00e9nom\u00e8ne d\'instabilit\u00e9 qui affecte les \u00e9l\u00e9ments \u00e9lanc\u00e9s en compression. Au-del\u00e0 d\'une charge critique (formule d\'Euler : Pcr = \u03c0\u00b2EI/L\u00b2), la pi\u00e8ce fl\u00e9chit brutalement. Ce ph\u00e9nom\u00e8ne est particuli\u00e8rement dangereux car il survient sans d\u00e9formation pr\u00e9alable visible.',
                'Pour garantir la s\u00e9curit\u00e9, l\'ing\u00e9nieur applique un <strong>coefficient de s\u00e9curit\u00e9</strong> qui minore la charge admissible par rapport \u00e0 la charge de rupture. Ce coefficient d\u00e9pend du domaine : environ 1,5 en a\u00e9ronautique (o\u00f9 le poids est critique), 2 \u00e0 3 en construction m\u00e9canique, et 4 \u00e0 6 pour les \u00e9quipements de levage. Le choix du coefficient refl\u00e8te le compromis entre s\u00e9curit\u00e9, co\u00fbt et performance.'
              ],
              highlight: 'La charge critique de flambage d\u00e9pend du cube de la longueur : doubler la longueur divise la charge critique par quatre.'
            }
          ],
          quiz: [
            { q: 'Quelle loi relie contrainte et d\u00e9formation dans le domaine \u00e9lastique ?', opts: ['Loi de Newton', 'Loi de Hooke', 'Loi de Coulomb', 'Loi de Fourier'], correct: 1, explanation: 'La loi de Hooke (\u03c3 = E\u03b5) \u00e9tablit la proportionnalit\u00e9 entre contrainte et d\u00e9formation dans le domaine \u00e9lastique, via le module d\'Young E.' },
            { q: 'Pourquoi les poutres en I sont-elles efficaces en flexion ?', opts: ['Elles sont plus l\u00e9g\u00e8res', 'Elles concentrent la mati\u00e8re loin de la fibre neutre', 'Elles r\u00e9sistent mieux au cisaillement', 'Elles sont faciles \u00e0 fabriquer'], correct: 1, explanation: 'Les profil\u00e9s en I placent la mati\u00e8re dans les semelles, \u00e9loign\u00e9es de la fibre neutre, maximisant le moment d\'inertie et donc la r\u00e9sistance \u00e0 la flexion.' },
            { q: 'Qu\'est-ce que le flambage ?', opts: ['Une rupture en traction', 'Une instabilit\u00e9 en compression des \u00e9l\u00e9ments \u00e9lanc\u00e9s', 'Une d\u00e9formation en torsion', 'Un type de fatigue'], correct: 1, explanation: 'Le flambage est un ph\u00e9nom\u00e8ne d\'instabilit\u00e9 qui provoque la flexion soudaine d\'un \u00e9l\u00e9ment \u00e9lanc\u00e9 soumis \u00e0 la compression au-del\u00e0 de la charge critique d\'Euler.' }
          ],
          definitions: [
            { term: 'Contrainte', def: 'Force par unit\u00e9 de surface appliqu\u00e9e \u00e0 un mat\u00e9riau (\u03c3 = F/A). Exprim\u00e9e en pascals (Pa).' },
            { term: 'Module d\'Young', def: 'Constante caract\u00e9risant la rigidit\u00e9 d\'un mat\u00e9riau. Rapport contrainte/d\u00e9formation dans le domaine \u00e9lastique.' },
            { term: 'Fibre neutre', def: 'Ligne d\'une poutre en flexion o\u00f9 la contrainte normale est nulle.' },
            { term: 'Flambage', def: 'Instabilit\u00e9 g\u00e9om\u00e9trique d\'un \u00e9l\u00e9ment compress\u00e9 qui se traduit par une flexion soudaine.' },
            { term: 'Coefficient de s\u00e9curit\u00e9', def: 'Rapport entre la charge de rupture et la charge admissible, garantissant une marge de s\u00e9curit\u00e9.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le module d\'Young porte le nom de Thomas Young (1773-1829), physicien anglais qui a aussi d\u00e9chiffr\u00e9 les hi\u00e9roglyphes \u00e9gyptiens et d\u00e9couvert l\'interf\u00e9rence lumineuse.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le c\u00e9l\u00e8bre pont de Tacoma Narrows s\'est effondr\u00e9 en 1940 \u00e0 cause de vibrations a\u00e9ro\u00e9lastiques, un ph\u00e9nom\u00e8ne que la r\u00e9sistance des mat\u00e9riaux seule ne pouvait pr\u00e9voir.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les c\u00e2bles du Golden Gate Bridge supportent une charge totale de plus de 90 000 tonnes. Chaque c\u00e2ble est compos\u00e9 de 27 572 fils d\'acier individuels.' }
          ]
        },
        {
          slug: 'machines-et-mecanismes',
          title: 'Machines et m\u00e9canismes',
          description: 'Engrenages, transmissions, syst\u00e8mes bielle-manivelle et machines simples.',
          intro: 'Les <strong>machines</strong> transforment l\'\u00e9nergie d\'une forme en une autre ou transmettent un mouvement en le modifiant. Depuis les leviers d\'Archim\u00e8de jusqu\'aux bo\u00eetes de vitesses robotis\u00e9es, les m\u00e9canismes sont au c\u0153ur de l\'ing\u00e9nierie m\u00e9canique.',
          introHighlight: '<strong>Donner-moi un levier et un point d\'appui, et je soul\u00e8verai le monde</strong>, disait Archim\u00e8de. Les machines amplifient les forces, mais jamais l\'\u00e9nergie.',
          intro2: '',
          sections: [
            {
              title: 'Machines simples',
              paragraphs: [
                'Les <strong>machines simples</strong> constituent les briques \u00e9l\u00e9mentaires de tout m\u00e9canisme : le levier, le plan inclin\u00e9, la poulie, la roue et l\'essieu, la vis et le coin. Chacune permet de multiplier la force appliqu\u00e9e au prix d\'un d\u00e9placement plus grand, conform\u00e9ment au principe de conservation de l\'\u00e9nergie.',
                'Le <strong>levier</strong> se d\u00e9cline en trois genres selon la position du pivot par rapport \u00e0 l\'effort et \u00e0 la charge. Le premier genre (balancier) place le pivot entre l\'effort et la charge. Le deuxi\u00e8me genre (brouette) place la charge entre le pivot et l\'effort. Le troisi\u00e8me genre (pince \u00e0 \u00e9piler) place l\'effort entre le pivot et la charge, sacrifiant l\'avantage m\u00e9canique pour gagner en amplitude de mouvement.',
                'Le <strong>plan inclin\u00e9</strong> r\u00e9duit la force n\u00e9cessaire pour \u00e9lever un objet : pour monter une charge de 1 000 N sur 1 m de hauteur via un plan de 5 m de long, il suffit d\'exercer 200 N sur la distance de 5 m. La vis est un plan inclin\u00e9 enroul\u00e9 autour d\'un cylindre.'
              ],
              highlight: 'L\'avantage m\u00e9canique d\'une machine simple \u00e9gale le rapport de la force de sortie sur la force d\'entr\u00e9e.'
            },
            {
              title: 'Engrenages et transmissions',
              paragraphs: [
                'Les <strong>engrenages</strong> transmettent un couple et une rotation entre deux arbres. Le <strong>rapport de transmission</strong> est le quotient du nombre de dents de la roue men\u00e9e par celui du pignon menant. Un rapport sup\u00e9rieur \u00e0 1 r\u00e9duit la vitesse mais augmente le couple, et inversement. Les types d\'engrenages comprennent : droits (axes parall\u00e8les), h\u00e9lico\u00efdaux (plus silencieux), coniques (axes concourants) et \u00e0 vis sans fin (grand rapport de r\u00e9duction).',
                'Les <strong>trains d\'engrenages</strong> combinent plusieurs couples d\'engrenages pour obtenir des rapports de r\u00e9duction \u00e9lev\u00e9s. Les r\u00e9ducteurs \u00e9picy\u00e9lo\u00efdaux (ou plan\u00e9taires) sont particuli\u00e8rement compacts et utilis\u00e9s dans les bo\u00eetes de vitesses automatiques, les turbines \u00e9oliennes et les robots industriels.'
              ],
              highlight: 'Un r\u00e9ducteur de rapport 100:1 divise la vitesse par 100 mais multiplie le couple par 100 (hors pertes).'
            },
            {
              title: 'Syst\u00e8me bielle-manivelle et cames',
              paragraphs: [
                'Le <strong>syst\u00e8me bielle-manivelle</strong> convertit un mouvement lin\u00e9aire alternatif en mouvement rotatif, ou inversement. C\'est le m\u00e9canisme fondamental du moteur \u00e0 combustion interne : le piston (mouvement lin\u00e9aire) entra\u00eene le vilebrequin (mouvement rotatif) via la bielle. L\'excentricit\u00e9 de la manivelle d\u00e9termine la course du piston.',
                'Les <strong>cames</strong> transforment un mouvement rotatif en mouvement lin\u00e9aire non uniforme. Le profil de la came d\u00e9finit la loi de mouvement du suiveur. Dans un moteur automobile, l\'arbre \u00e0 cames commande l\'ouverture et la fermeture des soupapes selon un timing pr\u00e9cis synchronis\u00e9 avec le cycle du moteur.'
              ],
              highlight: 'Le moteur V8 comporte huit syst\u00e8mes bielle-manivelle d\u00e9cal\u00e9s de 90\u00b0 sur un m\u00eame vilebrequin.'
            }
          ],
          quiz: [
            { q: 'Quel est le principe fondamental des machines simples ?', opts: ['Elles cr\u00e9ent de l\'\u00e9nergie', 'Elles multiplient la force au prix d\'un d\u00e9placement plus grand', 'Elles annulent les frottements', 'Elles convertissent la chaleur en mouvement'], correct: 1, explanation: 'Les machines simples amplifient la force mais conservent l\'\u00e9nergie : le gain en force est compens\u00e9 par un d\u00e9placement proportionnellement plus grand.' },
            { q: 'Quel type d\'engrenage permet un tr\u00e8s grand rapport de r\u00e9duction ?', opts: ['Engrenage droit', 'Engrenage conique', 'Vis sans fin', 'Engrenage h\u00e9lico\u00efdal'], correct: 2, explanation: 'La vis sans fin permet des rapports de r\u00e9duction tr\u00e8s \u00e9lev\u00e9s (jusqu\'\u00e0 100:1 en un seul \u00e9tage) et est irr\u00e9versible, emp\u00eachant la charge d\'entra\u00eener le moteur.' },
            { q: 'Quel m\u00e9canisme convertit le mouvement lin\u00e9aire du piston en rotation ?', opts: ['Came', 'Poulie', 'Bielle-manivelle', 'Engrenage'], correct: 2, explanation: 'Le syst\u00e8me bielle-manivelle convertit le mouvement alternatif du piston en rotation du vilebrequin dans un moteur \u00e0 combustion interne.' }
          ],
          definitions: [
            { term: 'Avantage m\u00e9canique', def: 'Rapport de la force de sortie sur la force d\'entr\u00e9e d\'une machine simple.' },
            { term: 'Rapport de transmission', def: 'Rapport entre la vitesse de rotation de sortie et la vitesse d\'entr\u00e9e d\'un train d\'engrenages.' },
            { term: 'Train \u00e9picy\u00e9lo\u00efdal', def: 'Syst\u00e8me d\'engrenages plan\u00e9taires offrant un rapport de r\u00e9duction \u00e9lev\u00e9 dans un encombrement r\u00e9duit.' },
            { term: 'Bielle', def: 'Pi\u00e8ce m\u00e9canique reliant le piston au vilebrequin, assurant la conversion mouvement lin\u00e9aire/rotatif.' },
            { term: 'Came', def: 'Pi\u00e8ce de profil sp\u00e9cifique mont\u00e9e sur un arbre rotatif, imposant une loi de mouvement \u00e0 un suiveur.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le m\u00e9canisme d\'Anticyth\u00e8re, datant du IIe si\u00e8cle av. J.-C., est le plus ancien calculateur analogique connu. Il utilisait des engrenages en bronze pour pr\u00e9dire les positions astronomiques.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'L\u00e9onard de Vinci a con\u00e7u des dizaines de m\u00e9canismes r\u00e9volutionnaires, dont des roulements \u00e0 billes, des bo\u00eetes de vitesses et des v\u00e9rins hydrauliques, des si\u00e8cles avant leur r\u00e9alisation.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Une bo\u00eete de vitesses automatique moderne contient jusqu\'\u00e0 dix rapports grâce aux trains \u00e9picy\u00e9lo\u00efdaux, offrant un compromis optimal entre acc\u00e9l\u00e9ration et consommation.' }
          ]
        },
        {
          slug: 'tribologie',
          title: 'Tribologie',
          description: 'Frottement, usure, lubrification et optimisation des contacts m\u00e9caniques.',
          intro: 'La <strong>tribologie</strong> est la science du frottement, de l\'usure et de la lubrification. Elle joue un r\u00f4le crucial en ing\u00e9nierie : les pertes par frottement repr\u00e9sentent environ 20 % de la consommation \u00e9nerg\u00e9tique mondiale.',
          introHighlight: '<strong>R\u00e9duire les frottements parasites</strong> est un enjeu majeur pour l\'efficacit\u00e9 \u00e9nerg\u00e9tique : on estime qu\'am\u00e9liorer la tribologie des machines pourrait \u00e9conomiser 1,4 % du PIB mondial.',
          intro2: '',
          sections: [
            {
              title: 'Lois du frottement',
              paragraphs: [
                'Les <strong>lois de Coulomb</strong> du frottement sec \u00e9tablissent que la force de frottement est proportionnelle \u00e0 la force normale (F = \u03bcN) et ind\u00e9pendante de l\'aire de contact et de la vitesse de glissement. Le coefficient de frottement \u03bc d\u00e9pend des mat\u00e9riaux en contact : acier sur acier (\u03bc \u2248 0,6), t\u00e9flon sur acier (\u03bc \u2248 0,04), caoutchouc sur asphalte (\u03bc \u2248 0,8).',
                'On distingue le <strong>frottement statique</strong> (force n\u00e9cessaire pour initier le mouvement) du <strong>frottement cin\u00e9tique</strong> (force s\'opposant au mouvement en cours). Le coefficient statique est toujours sup\u00e9rieur au coefficient cin\u00e9tique, ce qui explique le ph\u00e9nom\u00e8ne de stick-slip (collage-glissement) responsable du grincement des freins ou du crissement d\'une craie sur un tableau.'
              ],
              highlight: 'Le t\u00e9flon (PTFE) poss\u00e8de l\'un des plus faibles coefficients de frottement connus : 0,04.'
            },
            {
              title: 'Usure et d\u00e9gradation',
              paragraphs: [
                'L\'<strong>usure</strong> est la perte progressive de mati\u00e8re des surfaces en contact. On distingue plusieurs m\u00e9canismes : l\'usure <strong>abrasive</strong> (une surface dure raye une surface molle), l\'usure <strong>adh\u00e9sive</strong> (micro-soudures entre asp\u00e9rit\u00e9s), l\'usure par <strong>fatigue</strong> (fissuration sous chargements cycliques) et l\'usure <strong>corrosive</strong> (interaction chimique avec l\'environnement).',
                'La <strong>loi d\'Archard</strong> mod\u00e9lise le volume d\'usure comme proportionnel \u00e0 la charge normale et \u00e0 la distance de glissement, et inversement proportionnel \u00e0 la duret\u00e9 du mat\u00e9riau le plus mou. L\'ing\u00e9nieur cherche \u00e0 minimiser l\'usure par le choix de mat\u00e9riaux, de traitements de surface (nitruration, chromage) ou de rev\u00eatements (DLC, c\u00e9ramique).'
              ],
              highlight: 'Un roulement \u00e0 billes de qualit\u00e9 peut fonctionner des milliards de tours avant de montrer des signes de fatigue.'
            },
            {
              title: 'Lubrification',
              paragraphs: [
                'La <strong>lubrification</strong> interpose un film de lubrifiant entre les surfaces en contact pour r\u00e9duire le frottement et l\'usure. On distingue trois r\u00e9gimes : la lubrification <strong>hydrodynamique</strong> (film \u00e9pais, pas de contact), la lubrification <strong>mixte</strong> (film partiel, contact intermittent) et la lubrification <strong>limite</strong> (film tr\u00e8s mince, contact quasi direct).',
                'La <strong>courbe de Stribeck</strong> repr\u00e9sente le coefficient de frottement en fonction du param\u00e8tre de Hersey (\u03b7N/P, o\u00f9 \u03b7 est la viscosit\u00e9, N la vitesse et P la pression). Elle montre la transition entre les trois r\u00e9gimes et permet de choisir le lubrifiant et les conditions de fonctionnement optimales.',
                'Les <strong>lubrifiants</strong> modernes sont des formulations complexes : une huile de base (min\u00e9rale ou synth\u00e9tique) additivee d\'anti-usure, d\'antioxydants, de modificateurs de frottement et d\'am\u00e9liorants d\'indice de viscosit\u00e9. Les graisses ajoutent un \u00e9paississant (savon de lithium, polyur\u00e9e) pour les applications o\u00f9 l\'huile ne peut \u00eatre retenue.'
              ],
              highlight: 'Sans lubrification, un moteur automobile se gripperait en quelques secondes de fonctionnement.'
            }
          ],
          quiz: [
            { q: 'Selon les lois de Coulomb, de quoi d\u00e9pend la force de frottement ?', opts: ['De la surface de contact', 'De la force normale et du coefficient de frottement', 'De la vitesse de glissement', 'De la temp\u00e9rature'], correct: 1, explanation: 'La loi de Coulomb \u00e9tablit que F = \u03bcN : la force de frottement est proportionnelle \u00e0 la force normale et au coefficient de frottement, ind\u00e9pendamment de l\'aire de contact.' },
            { q: 'Quel r\u00e9gime de lubrification \u00e9vite tout contact entre les surfaces ?', opts: ['Limite', 'Mixte', 'Hydrodynamique', 'S\u00e8che'], correct: 2, explanation: 'En lubrification hydrodynamique, un film de lubrifiant \u00e9pais s\u00e9pare compl\u00e8tement les surfaces, \u00e9liminant le contact et minimisant l\'usure.' },
            { q: 'Quel ph\u00e9nom\u00e8ne explique le grincement des freins ?', opts: ['La fatigue', 'Le stick-slip', 'La corrosion', 'Le fluage'], correct: 1, explanation: 'Le stick-slip (collage-glissement) provoque des vibrations auto-entretenues lorsque le coefficient de frottement statique est nettement sup\u00e9rieur au cin\u00e9tique.' }
          ],
          definitions: [
            { term: 'Tribologie', def: 'Science du frottement, de l\'usure et de la lubrification des surfaces en contact et en mouvement relatif.' },
            { term: 'Coefficient de frottement', def: 'Grandeur sans dimension (\u03bc) caract\u00e9risant l\'intensit\u00e9 du frottement entre deux surfaces en contact.' },
            { term: 'Lubrification hydrodynamique', def: 'R\u00e9gime o\u00f9 un film de lubrifiant \u00e9pais s\u00e9pare compl\u00e8tement les surfaces en mouvement relatif.' },
            { term: 'Usure abrasive', def: 'Perte de mati\u00e8re caus\u00e9e par le passage de particules dures ou d\'asp\u00e9rit\u00e9s sur une surface plus molle.' },
            { term: 'Courbe de Stribeck', def: 'Diagramme montrant l\'\u00e9volution du coefficient de frottement en fonction du param\u00e8tre de Hersey (\u03b7N/P).' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les frottements dans les moteurs automobiles dissipent environ 10 \u00e0 15 % de l\'\u00e9nergie du carburant. Les huiles synth\u00e9tiques modernes r\u00e9duisent ces pertes de 2 \u00e0 5 %.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le mot tribologie vient du grec tribos (frottement). Cette discipline a \u00e9t\u00e9 formalis\u00e9e en 1966 par le rapport Jost au Royaume-Uni, qui a d\u00e9montr\u00e9 l\'impact \u00e9conomique consid\u00e9rable des pertes par frottement.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les articulations humaines sont des merveilles tribologiques : le cartilage lubrifie par le liquide synovial pr\u00e9sente un coefficient de frottement de 0,001, inf\u00e9rieur \u00e0 celui de la glace sur la glace.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 2 — Electronique
    // ──────────────────────────────────────────────
    {
      slug: 'electronique',
      title: '\u00c9lectronique',
      description: 'Composants, circuits, signaux, microprocesseurs et syst\u00e8mes embarqu\u00e9s.',
      lessons: [
        {
          slug: 'composants-electroniques',
          title: 'Composants \u00e9lectroniques',
          description: 'R\u00e9sistances, condensateurs, inductances, diodes et transistors : les briques de base de l\'\u00e9lectronique.',
          intro: 'L\'<strong>\u00e9lectronique</strong> repose sur un ensemble de composants fondamentaux dont la combinaison permet de r\u00e9aliser toutes les fonctions imaginables, du simple d\u00e9tecteur de lumi\u00e8re au processeur contenant des milliards de transistors.',
          introHighlight: '<strong>Le transistor</strong>, invent\u00e9 en 1947, est la brique \u00e9l\u00e9mentaire de toute l\'\u00e9lectronique moderne. Un smartphone actuel en contient plus de 10 milliards.',
          intro2: '',
          sections: [
            {
              title: 'Composants passifs',
              paragraphs: [
                'Les <strong>r\u00e9sistances</strong> s\'opposent au passage du courant et dissipent l\'\u00e9nergie sous forme de chaleur. La loi d\'Ohm (U = RI) relie la tension aux bornes d\'une r\u00e9sistance au courant qui la traverse. Elles servent \u00e0 limiter le courant, diviser les tensions et polariser les composants actifs. Leur valeur se lit gr\u00e2ce au code couleur normalis\u00e9.',
                'Les <strong>condensateurs</strong> stockent l\'\u00e9nergie sous forme de champ \u00e9lectrique entre deux armatures s\u00e9par\u00e9es par un isolant (di\u00e9lectrique). Leur capacit\u00e9 C (en farads) d\u00e9termine la quantit\u00e9 de charge stock\u00e9e pour une tension donn\u00e9e (Q = CU). Ils filtrent les signaux, lissent les alimentations et r\u00e9alisent des temporisations avec les r\u00e9sistances (circuits RC).',
                'Les <strong>inductances</strong> (bobines) stockent l\'\u00e9nergie sous forme de champ magn\u00e9tique. Elles s\'opposent aux variations de courant et sont utilis\u00e9es dans les filtres, les transformateurs et les convertisseurs d\'\u00e9nergie. La combinaison inductance-condensateur (circuit LC) forme un oscillateur dont la fr\u00e9quence de r\u00e9sonance d\u00e9pend des valeurs de L et C.'
              ],
              highlight: 'Un circuit RC de constante de temps \u03c4 = RC met environ 5\u03c4 pour atteindre sa valeur finale (99,3 %).'
            },
            {
              title: 'Diodes et transistors',
              paragraphs: [
                'La <strong>diode</strong> est un composant semi-conducteur qui ne laisse passer le courant que dans un sens (de l\'anode vers la cathode). Cette propri\u00e9t\u00e9 de rectification est fondamentale pour convertir le courant alternatif en courant continu (redressement). Les diodes \u00e9lectroluminescentes (LED) \u00e9mettent de la lumi\u00e8re lorsqu\'elles sont travers\u00e9es par un courant.',
                'Le <strong>transistor</strong> est un amplificateur ou un interrupteur command\u00e9 \u00e9lectriquement. Le transistor bipolaire (NPN ou PNP) utilise un faible courant de base pour contr\u00f4ler un courant collecteur-\u00e9metteur beaucoup plus important. Le transistor MOSFET, command\u00e9 en tension, est le composant de base des circuits int\u00e9gr\u00e9s num\u00e9riques : un processeur moderne contient des milliards de MOSFET grav\u00e9s \u00e0 des dimensions de quelques nanom\u00e8tres.'
              ],
              highlight: 'Le premier transistor (1947, Bell Labs) mesurait quelques centim\u00e8tres. Un MOSFET actuel mesure 3 nanom\u00e8tres.'
            },
            {
              title: 'Circuits de base',
              paragraphs: [
                'Les composants s\'associent en <strong>s\u00e9rie</strong> (les courants traversent tous les composants) ou en <strong>parall\u00e8le</strong> (la tension est identique aux bornes de chaque composant). Les r\u00e9sistances en s\u00e9rie s\'additionnent ; en parall\u00e8le, leurs inverses s\'additionnent. Pour les condensateurs, c\'est l\'inverse.',
                'Le <strong>diviseur de tension</strong> (deux r\u00e9sistances en s\u00e9rie) et le <strong>pont de Wheatstone</strong> (quatre r\u00e9sistances en losange) sont des circuits fondamentaux. Le diviseur adapte les niveaux de tension ; le pont de Wheatstone permet des mesures de r\u00e9sistance tr\u00e8s pr\u00e9cises et est utilis\u00e9 dans les jauges de contrainte.'
              ],
              highlight: 'Le pont de Wheatstone est utilis\u00e9 dans les balances de pr\u00e9cision, les capteurs de pression et les jauges de contrainte.'
            }
          ],
          quiz: [
            { q: 'Quelle loi relie tension, r\u00e9sistance et courant ?', opts: ['Loi de Faraday', 'Loi d\'Ohm', 'Loi de Kirchhoff', 'Loi de Joule'], correct: 1, explanation: 'La loi d\'Ohm (U = RI) \u00e9tablit la relation lin\u00e9aire entre la tension aux bornes d\'une r\u00e9sistance, sa valeur et le courant qui la traverse.' },
            { q: 'Quel composant ne laisse passer le courant que dans un sens ?', opts: ['R\u00e9sistance', 'Condensateur', 'Diode', 'Inductance'], correct: 2, explanation: 'La diode est un composant semi-conducteur qui conduit dans un seul sens, de l\'anode vers la cathode.' },
            { q: 'Quel type de transistor \u00e9quipe les processeurs modernes ?', opts: ['Bipolaire NPN', 'Bipolaire PNP', 'JFET', 'MOSFET'], correct: 3, explanation: 'Le transistor MOSFET, command\u00e9 en tension et peu gourmand en \u00e9nergie, est le composant de base des circuits int\u00e9gr\u00e9s num\u00e9riques modernes.' }
          ],
          definitions: [
            { term: 'R\u00e9sistance', def: 'Composant qui s\'oppose au passage du courant et dissipe l\'\u00e9nergie en chaleur. Unit\u00e9 : ohm (\u03a9).' },
            { term: 'Condensateur', def: 'Composant stockant l\'\u00e9nergie sous forme de champ \u00e9lectrique. Capacit\u00e9 mesur\u00e9e en farads (F).' },
            { term: 'Transistor MOSFET', def: 'Transistor \u00e0 effet de champ command\u00e9 en tension, brique de base des circuits int\u00e9gr\u00e9s num\u00e9riques.' },
            { term: 'Diode', def: 'Composant semi-conducteur ne laissant passer le courant que dans un sens.' },
            { term: 'Pont de Wheatstone', def: 'Circuit \u00e0 quatre r\u00e9sistances en losange permettant des mesures de r\u00e9sistance tr\u00e8s pr\u00e9cises.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le transistor a \u00e9t\u00e9 invent\u00e9 en 1947 par John Bardeen, Walter Brattain et William Shockley aux Bell Labs. Cette invention leur a valu le prix Nobel de physique en 1956.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Un processeur Apple M2 contient environ 20 milliards de transistors grav\u00e9s \u00e0 5 nanom\u00e8tres, soit 50 000 fois plus fin qu\'un cheveu humain.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le code couleur des r\u00e9sistances utilise 10 couleurs (noir=0 \u00e0 blanc=9). Le moyen mn\u00e9motechnique classique en fran\u00e7ais : Ne Manger Rien Ou Jeunez, Voil\u00e0 Bien Votre Grosse B\u00eatise.' }
          ]
        },
        {
          slug: 'circuits-analogiques',
          title: 'Circuits analogiques',
          description: 'Amplification, filtrage, oscillation et amplificateurs op\u00e9rationnels.',
          intro: 'Les <strong>circuits analogiques</strong> traitent des signaux continus repr\u00e9sentant des grandeurs physiques (son, temp\u00e9rature, lumi\u00e8re). Contrairement au num\u00e9rique qui travaille en 0 et 1, l\'analogique op\u00e8re sur une infinit\u00e9 de valeurs.',
          introHighlight: '<strong>L\'amplificateur op\u00e9rationnel</strong> (AOP) est le composant roi de l\'\u00e9lectronique analogique : avec quelques r\u00e9sistances et condensateurs, il r\u00e9alise amplification, filtrage, comparaison et g\u00e9n\u00e9ration de signaux.',
          intro2: '',
          sections: [
            {
              title: 'L\'amplificateur op\u00e9rationnel',
              paragraphs: [
                'L\'<strong>amplificateur op\u00e9rationnel</strong> (AOP) est un circuit int\u00e9gr\u00e9 poss\u00e9dant deux entr\u00e9es (inverseuse et non inverseuse) et une sortie. Son gain en boucle ouverte est tr\u00e8s \u00e9lev\u00e9 (100 000 ou plus). Utilis\u00e9 avec une r\u00e9tro-action n\u00e9gative, il r\u00e9alise des fonctions pr\u00e9cises dont le comportement ne d\u00e9pend que des composants externes.',
                'Le montage <strong>inverseur</strong> (gain = -Rf/Ri) inverse et amplifie le signal. Le montage <strong>non inverseur</strong> (gain = 1 + Rf/Ri) amplifie sans inverser. Le <strong>suiveur</strong> (gain = 1) isole deux circuits en pr\u00e9sentant une imp\u00e9dance d\'entr\u00e9e tr\u00e8s \u00e9lev\u00e9e et une imp\u00e9dance de sortie tr\u00e8s faible.',
                'Le c\u00e9l\u00e8bre <strong>741</strong>, con\u00e7u par Bob Widlar en 1968, est l\'AOP le plus produit de l\'histoire avec des milliards d\'unit\u00e9s. Bien que d\u00e9pass\u00e9 techniquement, il reste une r\u00e9f\u00e9rence p\u00e9dagogique.'
              ],
              highlight: 'Avec une r\u00e9troaction n\u00e9gative, le comportement de l\'AOP ne d\u00e9pend que des composants externes, pas de l\'AOP lui-m\u00eame.'
            },
            {
              title: 'Filtres analogiques',
              paragraphs: [
                'Les <strong>filtres</strong> s\u00e9lectionnent des bandes de fr\u00e9quences dans un signal. Le filtre <strong>passe-bas</strong> laisse passer les basses fr\u00e9quences et att\u00e9nue les hautes (utile pour lisser un signal). Le filtre <strong>passe-haut</strong> fait l\'inverse (utile pour \u00e9liminer une composante continue). Le filtre <strong>passe-bande</strong> isole une plage de fr\u00e9quences.',
                'La <strong>fr\u00e9quence de coupure</strong> d\'un filtre RC est fc = 1/(2\u03c0RC). Au-del\u00e0 de cette fr\u00e9quence, un filtre passe-bas du premier ordre att\u00e9nue le signal de 20 dB par d\u00e9cade (division par 10 de l\'amplitude pour chaque multiplication par 10 de la fr\u00e9quence). Les filtres d\'ordre sup\u00e9rieur offrent des pentes plus raides.'
              ],
              highlight: 'fc = 1/(2\u03c0RC) : un filtre RC avec R = 1 k\u03a9 et C = 1 \u03bcF coupe \u00e0 159 Hz.'
            },
            {
              title: 'Oscillateurs',
              paragraphs: [
                'Un <strong>oscillateur</strong> g\u00e9n\u00e8re un signal p\u00e9riodique sans entr\u00e9e externe. Le crit\u00e8re de Barkhausen impose que le gain de boucle soit \u00e9gal \u00e0 1 et le d\u00e9phasage total soit un multiple de 360\u00b0. L\'oscillateur Wien (signal sinuso\u00efdal) et l\'oscillateur \u00e0 relaxation (signal carr\u00e9) sont les plus courants.',
                'L\'<strong>oscillateur \u00e0 quartz</strong> exploite l\'effet pi\u00e9zo\u00e9lectrique d\'un cristal de quartz pour g\u00e9n\u00e9rer un signal extr\u00eamement stable. La fr\u00e9quence typique de 32 768 Hz est utilis\u00e9e dans les montres : 32 768 = 2\u00b9\u2075, ce qui permet de diviser par 15 bascules pour obtenir une impulsion par seconde.'
              ],
              highlight: 'Les montres \u00e0 quartz oscillent \u00e0 32 768 Hz = 2\u00b9\u2075, permettant une division binaire simple pour obtenir 1 Hz.'
            }
          ],
          quiz: [
            { q: 'Quel est le gain du montage inverseur \u00e0 AOP ?', opts: ['Rf + Ri', '1 + Rf/Ri', '-Rf/Ri', 'Rf \u00d7 Ri'], correct: 2, explanation: 'Le gain du montage inverseur est G = -Rf/Ri, o\u00f9 Rf est la r\u00e9sistance de r\u00e9troaction et Ri la r\u00e9sistance d\'entr\u00e9e. Le signe moins indique l\'inversion.' },
            { q: 'Que laisse passer un filtre passe-bas ?', opts: ['Les hautes fr\u00e9quences', 'Les basses fr\u00e9quences', 'Toutes les fr\u00e9quences', 'Aucune fr\u00e9quence'], correct: 1, explanation: 'Un filtre passe-bas transmet les fr\u00e9quences inf\u00e9rieures \u00e0 sa fr\u00e9quence de coupure et att\u00e9nue les fr\u00e9quences sup\u00e9rieures.' },
            { q: 'Pourquoi les montres \u00e0 quartz oscillent-elles \u00e0 32 768 Hz ?', opts: ['C\'est la fr\u00e9quence audible la plus basse', 'C\'est une puissance de 2 (2\u00b9\u2075)', 'C\'est la fr\u00e9quence de r\u00e9sonance du verre', 'C\'est un standard arbitraire'], correct: 1, explanation: '32 768 = 2\u00b9\u2075, ce qui permet de diviser la fr\u00e9quence par 15 bascules binaires successives pour obtenir exactement 1 Hz.' }
          ],
          definitions: [
            { term: 'Amplificateur op\u00e9rationnel', def: 'Circuit int\u00e9gr\u00e9 analogique \u00e0 tr\u00e8s haut gain, utilis\u00e9 avec r\u00e9troaction pour r\u00e9aliser amplification, filtrage et comparaison.' },
            { term: 'R\u00e9troaction n\u00e9gative', def: 'Technique renvoyant une fraction du signal de sortie vers l\'entr\u00e9e inverseuse pour stabiliser et contr\u00f4ler le gain.' },
            { term: 'Fr\u00e9quence de coupure', def: 'Fr\u00e9quence \u00e0 laquelle le gain d\'un filtre est att\u00e9nu\u00e9 de 3 dB (-30 % en amplitude).' },
            { term: 'Oscillateur', def: 'Circuit g\u00e9n\u00e9rant un signal p\u00e9riodique sans signal d\'entr\u00e9e, gr\u00e2ce \u00e0 une r\u00e9troaction positive contr\u00f4l\u00e9e.' },
            { term: 'Pi\u00e9zo\u00e9lectricit\u00e9', def: 'Propri\u00e9t\u00e9 de certains cristaux de g\u00e9n\u00e9rer une tension lorsqu\'ils sont d\u00e9form\u00e9s, et r\u00e9ciproquement.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'L\'AOP 741 de Fairchild Semiconductor (1968) est l\'un des circuits int\u00e9gr\u00e9s les plus produits de l\'histoire. Il est encore utilis\u00e9 en enseignement plus de 50 ans apr\u00e8s sa conception.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le d\u00e9cibel (dB) est une \u00e9chelle logarithmique : +3 dB correspond \u00e0 un doublement de la puissance, +10 dB \u00e0 une multiplication par 10, et +20 dB \u00e0 une multiplication par 100.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le quartz utilis\u00e9 dans les montres est taill\u00e9 en forme de diapason microscopique. Sa fr\u00e9quence ne d\u00e9rive que de quelques secondes par mois.' }
          ]
        },
        {
          slug: 'signaux-numeriques',
          title: 'Signaux num\u00e9riques',
          description: 'Logique binaire, portes logiques, bascules et conversion analogique-num\u00e9rique.',
          intro: 'L\'<strong>\u00e9lectronique num\u00e9rique</strong> traite l\'information sous forme de deux \u00e9tats discrets : 0 et 1. Cette simplification radicale confere au num\u00e9rique une robustesse au bruit et une capacit\u00e9 de calcul que l\'analogique ne peut \u00e9galer.',
          introHighlight: '<strong>Toute l\'informatique moderne</strong> repose sur la logique binaire : chaque texte, image, son ou vid\u00e9o est r\u00e9duit \u00e0 une suite de 0 et de 1 trait\u00e9s par des portes logiques.',
          intro2: '',
          sections: [
            {
              title: 'Logique combinatoire',
              paragraphs: [
                'Les <strong>portes logiques</strong> fondamentales sont ET (AND), OU (OR) et NON (NOT). Toute fonction logique peut \u00eatre r\u00e9alis\u00e9e avec ces trois portes, voire avec la seule porte NAND (ET-NON) qui est dite fonctionnellement compl\u00e8te. Les circuits int\u00e9gr\u00e9s CMOS r\u00e9alisent ces portes \u00e0 l\'aide de transistors MOSFET compl\u00e9mentaires.',
                'Un <strong>circuit combinatoire</strong> produit une sortie qui ne d\u00e9pend que de l\'\u00e9tat actuel des entr\u00e9es. Exemples : l\'additionneur (somme de deux nombres binaires), le multiplexeur (s\u00e9lection d\'une entr\u00e9e parmi plusieurs), le d\u00e9codeur (activation d\'une sortie en fonction d\'un code binaire). La table de v\u00e9rit\u00e9 et les tables de Karnaugh permettent de simplifier les \u00e9quations logiques.'
              ],
              highlight: 'La porte NAND est fonctionnellement compl\u00e8te : elle suffit \u00e0 r\u00e9aliser n\'importe quelle fonction logique.'
            },
            {
              title: 'Logique s\u00e9quentielle',
              paragraphs: [
                'Contrairement aux circuits combinatoires, les <strong>circuits s\u00e9quentiels</strong> poss\u00e8dent une m\u00e9moire : leur sortie d\u00e9pend des entr\u00e9es et de l\'\u00e9tat pr\u00e9c\u00e9dent. La <strong>bascule</strong> (flip-flop) est l\'\u00e9l\u00e9ment de m\u00e9moire fondamental, capable de stocker un bit (0 ou 1).',
                'La bascule <strong>D</strong> (data) capture la valeur de l\'entr\u00e9e sur un front d\'horloge. Les <strong>registres</strong> (groupes de bascules) stockent des mots binaires. Les <strong>compteurs</strong> incr\u00e9mentent ou d\u00e9cr\u00e9mentent une valeur \u00e0 chaque impulsion d\'horloge. Ces blocs constituent la base de tout processeur num\u00e9rique.',
                'Les <strong>machines \u00e0 \u00e9tats finis</strong> (automates) mod\u00e9lisent le comportement s\u00e9quentiel d\'un syst\u00e8me. Chaque \u00e9tat d\u00e9finit le comportement actuel, et les transitions d\u00e9pendent des entr\u00e9es. Les feux de circulation, les distributeurs automatiques et les protocoles de communication sont mod\u00e9lisables comme des machines \u00e0 \u00e9tats.'
              ],
              highlight: 'Un registre de 64 bascules D stocke un mot de 64 bits, soit l\'unit\u00e9 de base des processeurs modernes.'
            },
            {
              title: 'Conversion analogique-num\u00e9rique',
              paragraphs: [
                'Le <strong>convertisseur analogique-num\u00e9rique</strong> (CAN) transforme un signal continu en valeur num\u00e9rique discr\u00e8te. La <strong>r\u00e9solution</strong> d\u00e9pend du nombre de bits : un CAN 8 bits distingue 256 niveaux, un CAN 16 bits en distingue 65 536. Le th\u00e9or\u00e8me de Shannon impose une fr\u00e9quence d\'\u00e9chantillonnage au moins double de la fr\u00e9quence maximale du signal.',
                'Le <strong>convertisseur num\u00e9rique-analogique</strong> (CNA) effectue l\'op\u00e9ration inverse. Dans un lecteur audio, le CNA reconstruit le signal analogique \u00e0 partir des donn\u00e9es num\u00e9riques du fichier. La qualit\u00e9 audio CD (44,1 kHz, 16 bits) offre une dynamique de 96 dB et une bande passante de 20 Hz \u00e0 20 kHz.'
              ],
              highlight: 'Le th\u00e9or\u00e8me de Shannon : pour num\u00e9riser fid\u00e8lement un signal, il faut \u00e9chantillonner \u00e0 au moins le double de sa fr\u00e9quence maximale.'
            }
          ],
          quiz: [
            { q: 'Quelle porte logique est fonctionnellement compl\u00e8te ?', opts: ['ET (AND)', 'OU (OR)', 'NON-ET (NAND)', 'OU exclusif (XOR)'], correct: 2, explanation: 'La porte NAND est fonctionnellement compl\u00e8te : on peut r\u00e9aliser ET, OU et NON uniquement avec des portes NAND.' },
            { q: 'Quel composant stocke un bit en \u00e9lectronique s\u00e9quentielle ?', opts: ['Registre', 'Bascule (flip-flop)', 'Additionneur', 'Multiplexeur'], correct: 1, explanation: 'La bascule (flip-flop) est l\'\u00e9l\u00e9ment de m\u00e9moire fondamental capable de stocker un seul bit d\'information.' },
            { q: 'Selon le th\u00e9or\u00e8me de Shannon, \u00e0 quelle fr\u00e9quence minimale faut-il \u00e9chantillonner un signal audio de 20 kHz ?', opts: ['20 kHz', '40 kHz', '44,1 kHz', '96 kHz'], correct: 1, explanation: 'Le th\u00e9or\u00e8me de Shannon impose une fr\u00e9quence d\'\u00e9chantillonnage au moins double de la fr\u00e9quence maximale, soit 40 kHz minimum pour un signal de 20 kHz.' }
          ],
          definitions: [
            { term: 'Porte logique', def: 'Circuit \u00e9l\u00e9mentaire r\u00e9alisant une op\u00e9ration bool\u00e9enne (ET, OU, NON) sur des signaux binaires.' },
            { term: 'Bascule D', def: '\u00c9l\u00e9ment de m\u00e9moire capturant la valeur de l\'entr\u00e9e D sur un front d\'horloge.' },
            { term: 'CAN', def: 'Convertisseur analogique-num\u00e9rique : transforme un signal continu en valeur binaire discr\u00e8te.' },
            { term: 'Th\u00e9or\u00e8me de Shannon', def: 'La fr\u00e9quence d\'\u00e9chantillonnage doit \u00eatre au moins le double de la fr\u00e9quence maximale du signal pour le restituer fid\u00e8lement.' },
            { term: 'Machine \u00e0 \u00e9tats finis', def: 'Mod\u00e8le math\u00e9matique d\u00e9crivant un syst\u00e8me par un ensemble fini d\'\u00e9tats et de transitions d\u00e9clench\u00e9es par des entr\u00e9es.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Claude Shannon, p\u00e8re de la th\u00e9orie de l\'information, a d\u00e9montr\u00e9 dans sa th\u00e8se de master en 1937 que l\'alg\u00e8bre de Boole pouvait \u00eatre appliqu\u00e9e aux circuits \u00e9lectriques, fondant l\'\u00e9lectronique num\u00e9rique.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le format CD audio (44,1 kHz) a \u00e9t\u00e9 choisi car il d\u00e9passe l\u00e9g\u00e8rement le double de 20 kHz (limite de l\'audition humaine), conformement au th\u00e9or\u00e8me de Shannon.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La technologie CMOS consomme de l\'\u00e9nergie principalement lors des transitions (changements d\'\u00e9tat), contrairement aux technologies pr\u00e9c\u00e9dentes qui consommaient en permanence.' }
          ]
        },
        {
          slug: 'microprocesseurs',
          title: 'Microprocesseurs',
          description: 'Architecture des processeurs, jeu d\'instructions, m\u00e9moire cache et pipeline.',
          intro: 'Le <strong>microprocesseur</strong> est le cerveau de tout syst\u00e8me informatique. Il ex\u00e9cute des instructions stock\u00e9es en m\u00e9moire selon un cycle r\u00e9p\u00e9titif : lecture, d\u00e9codage, ex\u00e9cution.',
          introHighlight: '<strong>La loi de Moore</strong> pr\u00e9dit un doublement du nombre de transistors par puce tous les deux ans environ. Cette tendance se maintient depuis 1965, bien qu\'elle ralentisse face aux limites physiques.',
          intro2: '',
          sections: [
            {
              title: 'Architecture de base',
              paragraphs: [
                'Un microprocesseur comporte une <strong>unit\u00e9 arithm\u00e9tique et logique</strong> (UAL) qui effectue les calculs, des <strong>registres</strong> (m\u00e9moires ultra-rapides internes), une <strong>unit\u00e9 de contr\u00f4le</strong> qui s\u00e9quence les op\u00e9rations, et des <strong>bus</strong> (donn\u00e9es, adresses, contr\u00f4le) qui relient ces \u00e9l\u00e9ments \u00e0 la m\u00e9moire externe.',
                'L\'architecture <strong>von Neumann</strong> (1945) utilise une m\u00e9moire unique pour les instructions et les donn\u00e9es. L\'architecture <strong>Harvard</strong> s\u00e9pare les deux, permettant de lire une instruction pendant qu\'on acc\u00e8de aux donn\u00e9es. La plupart des processeurs modernes utilisent une architecture Harvard modifi\u00e9e avec des caches s\u00e9par\u00e9s.',
                'Deux philosophies s\'affrontent : <strong>CISC</strong> (Complex Instruction Set Computer, ex. x86 d\'Intel) propose un jeu d\'instructions riche, chaque instruction r\u00e9alisant des op\u00e9rations complexes. <strong>RISC</strong> (Reduced Instruction Set Computer, ex. ARM) pr\u00e9f\u00e8re des instructions simples et rapides, plus faciles \u00e0 pipeliner.'
              ],
              highlight: 'L\'architecture ARM (RISC) \u00e9quipe 95 % des smartphones gr\u00e2ce \u00e0 son efficacit\u00e9 \u00e9nerg\u00e9tique.'
            },
            {
              title: 'Pipeline et parall\u00e9lisme',
              paragraphs: [
                'Le <strong>pipeline</strong> d\u00e9coupe l\'ex\u00e9cution d\'une instruction en \u00e9tages (fetch, decode, execute, memory, writeback) trait\u00e9s simultan\u00e9ment sur des instructions diff\u00e9rentes, comme une cha\u00eene de montage. Un pipeline \u00e0 5 \u00e9tages peut traiter jusqu\'\u00e0 5 instructions en parall\u00e8le, une par cycle d\'horloge.',
                'Les processeurs modernes sont <strong>superscalaires</strong> : ils disposent de plusieurs pipelines parall\u00e8les et ex\u00e9cutent plusieurs instructions par cycle. L\'ex\u00e9cution <strong>out-of-order</strong> r\u00e9ordonne les instructions pour \u00e9viter les attentes, et la <strong>pr\u00e9diction de branchement</strong> anticipe les sauts conditionnels pour maintenir le pipeline rempli.'
              ],
              highlight: 'Un processeur superscalaire moderne peut ex\u00e9cuter 4 \u00e0 8 instructions par cycle d\'horloge.'
            },
            {
              title: 'Hi\u00e9rarchie m\u00e9moire',
              paragraphs: [
                'La <strong>hi\u00e9rarchie m\u00e9moire</strong> compense la lenteur de la m\u00e9moire principale par des niveaux de cache successifs. Le cache L1 (quelques ko, 1-2 cycles d\'acc\u00e8s) est le plus rapide mais le plus petit. Le cache L2 (quelques centaines de ko, 5-10 cycles) et le cache L3 (plusieurs Mo, 20-40 cycles) offrent davantage de capacit\u00e9.',
                'Le principe de <strong>localit\u00e9</strong> justifie l\'efficacit\u00e9 du cache : les programmes acc\u00e8dent souvent aux m\u00eames donn\u00e9es (localit\u00e9 temporelle) et \u00e0 des donn\u00e9es voisines (localit\u00e9 spatiale). Un taux de succ\u00e8s (cache hit) sup\u00e9rieur \u00e0 95 % est courant, rendant l\'acc\u00e8s m\u00e9moire effectif presque aussi rapide que le cache.'
              ],
              highlight: 'Un acc\u00e8s en cache L1 prend 1 nanoseconde ; un acc\u00e8s en RAM prend environ 100 nanosecondes, soit 100 fois plus.'
            }
          ],
          quiz: [
            { q: 'Quelle architecture s\u00e9pare m\u00e9moire d\'instructions et m\u00e9moire de donn\u00e9es ?', opts: ['Von Neumann', 'Harvard', 'CISC', 'RISC'], correct: 1, explanation: 'L\'architecture Harvard s\u00e9pare la m\u00e9moire d\'instructions de la m\u00e9moire de donn\u00e9es, permettant des acc\u00e8s simultan\u00e9s aux deux.' },
            { q: 'Quel est le r\u00f4le du pipeline dans un processeur ?', opts: ['Stocker les donn\u00e9es', 'Traiter plusieurs instructions simultan\u00e9ment en d\u00e9calant les \u00e9tages', 'Augmenter la fr\u00e9quence d\'horloge', 'Compresser les donn\u00e9es'], correct: 1, explanation: 'Le pipeline d\u00e9coupe l\'ex\u00e9cution en \u00e9tages et traite plusieurs instructions simultan\u00e9ment en d\u00e9calant leurs \u00e9tages, comme une cha\u00eene de montage.' },
            { q: 'Quel niveau de cache est le plus rapide mais le plus petit ?', opts: ['L3', 'L2', 'L1', 'RAM'], correct: 2, explanation: 'Le cache L1, le plus proche du processeur, est le plus rapide (1-2 cycles) mais le plus petit (quelques ko).' }
          ],
          definitions: [
            { term: 'UAL', def: 'Unit\u00e9 arithm\u00e9tique et logique : circuit r\u00e9alisant les op\u00e9rations de calcul et de logique du processeur.' },
            { term: 'Pipeline', def: 'Technique d\u00e9coupant l\'ex\u00e9cution en \u00e9tages trait\u00e9s simultan\u00e9ment sur des instructions diff\u00e9rentes.' },
            { term: 'Architecture RISC', def: 'Processeur \u00e0 jeu d\'instructions r\u00e9duit, privil\u00e9giant des instructions simples ex\u00e9cut\u00e9es en un cycle.' },
            { term: 'Cache m\u00e9moire', def: 'M\u00e9moire rapide interm\u00e9diaire stockant les donn\u00e9es fr\u00e9quemment utilis\u00e9es pour acc\u00e9l\u00e9rer les acc\u00e8s.' },
            { term: 'Loi de Moore', def: 'Observation empirique selon laquelle le nombre de transistors par puce double environ tous les deux ans.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le premier microprocesseur commercial, l\'Intel 4004 (1971), contenait 2 300 transistors et fonctionnait \u00e0 740 kHz. Un processeur moderne contient des milliards de transistors et d\u00e9passe 5 GHz.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La pr\u00e9diction de branchement des processeurs modernes atteint un taux de succ\u00e8s de plus de 97 %, \u00e9vitant presque tous les vidages de pipeline co\u00fbteux.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les puces Apple Silicon (M1, M2, M3) utilisent l\'architecture RISC d\'ARM, r\u00e9volutionnant le march\u00e9 des ordinateurs portables par leur efficacit\u00e9 \u00e9nerg\u00e9tique.' }
          ]
        },
        {
          slug: 'systemes-embarques',
          title: 'Syst\u00e8mes embarqu\u00e9s',
          description: 'Microcontr\u00f4leurs, capteurs, communication et conception de syst\u00e8mes temps r\u00e9el.',
          intro: 'Un <strong>syst\u00e8me embarqu\u00e9</strong> est un syst\u00e8me \u00e9lectronique et informatique d\u00e9di\u00e9 \u00e0 une t\u00e2che sp\u00e9cifique, int\u00e9gr\u00e9 dans un produit plus large. Du thermostat au syst\u00e8me de freinage ABS, les syst\u00e8mes embarqu\u00e9s sont omnipr\u00e9sents.',
          introHighlight: '<strong>Il y a plus de 30 milliards de syst\u00e8mes embarqu\u00e9s</strong> en fonctionnement dans le monde, contre environ 2 milliards d\'ordinateurs personnels. Un v\u00e9hicule moderne en contient entre 50 et 100.',
          intro2: '',
          sections: [
            {
              title: 'Microcontr\u00f4leurs',
              paragraphs: [
                'Un <strong>microcontr\u00f4leur</strong> (MCU) int\u00e8gre sur une seule puce un processeur, de la m\u00e9moire (RAM et Flash), des p\u00e9riph\u00e9riques (timers, CAN, UART, SPI, I2C) et des entr\u00e9es/sorties. Contrairement \u00e0 un microprocesseur qui n\u00e9cessite des composants externes, le MCU forme un ordinateur complet miniature.',
                'Les familles de MCU les plus courantes incluent les <strong>STM32</strong> (ARM Cortex-M, tr\u00e8s utilis\u00e9s en industrie), les <strong>ATmega</strong> (base d\'Arduino), les <strong>ESP32</strong> (Wi-Fi et Bluetooth int\u00e9gr\u00e9s, id\u00e9al pour l\'IoT) et les <strong>PIC</strong> de Microchip. Le choix d\u00e9pend de la puissance de calcul requise, de la consommation, du co\u00fbt et des p\u00e9riph\u00e9riques n\u00e9cessaires.',
                'La programmation des MCU se fait g\u00e9n\u00e9ralement en C ou C++ pour des raisons de performance et d\'acc\u00e8s direct au mat\u00e9riel. Les environnements de d\u00e9veloppement int\u00e9gr\u00e9s (IDE) comme STM32CubeIDE ou Arduino IDE facilitent la configuration des p\u00e9riph\u00e9riques et le d\u00e9bogage.'
              ],
              highlight: 'Un microcontr\u00f4leur STM32 \u00e0 2 euros est plus puissant que les ordinateurs qui ont envoy\u00e9 l\'homme sur la Lune.'
            },
            {
              title: 'Capteurs et actionneurs',
              paragraphs: [
                'Les <strong>capteurs</strong> convertissent une grandeur physique en signal \u00e9lectrique : temp\u00e9rature (thermistance, thermocouple), pression (pi\u00e9zor\u00e9sistif), acc\u00e9l\u00e9ration (MEMS), lumi\u00e8re (photodiode), distance (ultrason, lidar). Le choix du capteur d\u00e9pend de la pr\u00e9cision, de la plage de mesure, du temps de r\u00e9ponse et du co\u00fbt.',
                'Les <strong>actionneurs</strong> effectuent l\'op\u00e9ration inverse : ils convertissent un signal \u00e9lectrique en action physique. Les moteurs (DC, pas-\u00e0-pas, servomoteurs), les \u00e9lectrovannes, les relais et les haut-parleurs sont des actionneurs courants. Le syst\u00e8me embarqu\u00e9 lit les capteurs, traite les donn\u00e9es et commande les actionneurs selon une logique d\u00e9finie.'
              ],
              highlight: 'Les capteurs MEMS (syst\u00e8mes micro\u00e9lectrom\u00e9caniques) int\u00e8grent des structures m\u00e9caniques microscopiques sur une puce de silicium.'
            },
            {
              title: 'Syst\u00e8mes temps r\u00e9el',
              paragraphs: [
                'Un <strong>syst\u00e8me temps r\u00e9el</strong> doit r\u00e9pondre dans un d\u00e9lai garanti. On distingue le temps r\u00e9el <strong>dur</strong> (un d\u00e9passement est catastrophique : ABS, contr\u00f4le de vol) et le temps r\u00e9el <strong>mou</strong> (un d\u00e9passement d\u00e9grade la qualit\u00e9 : streaming vid\u00e9o). Les <strong>RTOS</strong> (syst\u00e8mes d\'exploitation temps r\u00e9el) comme FreeRTOS ou Zephyr garantissent l\'ordonnancement d\u00e9terministe des t\u00e2ches.',
                'La communication entre syst\u00e8mes embarqu\u00e9s utilise des protocoles sp\u00e9cifiques : <strong>CAN</strong> (automobile, tr\u00e8s robuste), <strong>SPI</strong> (rapide, courte distance), <strong>I2C</strong> (simple, multiples p\u00e9riph\u00e9riques) et <strong>UART</strong> (s\u00e9rie asynchrone, debugging). Pour l\'IoT, les protocoles sans fil incluent Wi-Fi, Bluetooth, LoRa (longue port\u00e9e, bas d\u00e9bit) et Zigbee.'
              ],
              highlight: 'Un syst\u00e8me ABS doit r\u00e9agir en moins de 5 millisecondes pour \u00e9viter le blocage des roues.'
            }
          ],
          quiz: [
            { q: 'Quelle est la diff\u00e9rence principale entre microprocesseur et microcontr\u00f4leur ?', opts: ['Le microcontr\u00f4leur est plus puissant', 'Le microcontr\u00f4leur int\u00e8gre m\u00e9moire et p\u00e9riph\u00e9riques sur la m\u00eame puce', 'Le microprocesseur consomme moins', 'Il n\'y a aucune diff\u00e9rence'], correct: 1, explanation: 'Le microcontr\u00f4leur int\u00e8gre processeur, m\u00e9moire et p\u00e9riph\u00e9riques sur une seule puce, formant un ordinateur complet miniature, contrairement au microprocesseur qui n\u00e9cessite des composants externes.' },
            { q: 'Quel protocole de communication est utilis\u00e9 dans l\'automobile ?', opts: ['SPI', 'I2C', 'CAN', 'UART'], correct: 2, explanation: 'Le bus CAN (Controller Area Network) est le protocole standard dans l\'automobile, con\u00e7u pour \u00eatre tr\u00e8s robuste en environnement bruit\u00e9.' },
            { q: 'Qu\'est-ce qu\'un syst\u00e8me temps r\u00e9el dur ?', opts: ['Un syst\u00e8me tr\u00e8s rapide', 'Un syst\u00e8me o\u00f9 un d\u00e9passement de d\u00e9lai est catastrophique', 'Un syst\u00e8me sans syst\u00e8me d\'exploitation', 'Un syst\u00e8me utilisant un processeur dur'], correct: 1, explanation: 'En temps r\u00e9el dur, le non-respect d\'une \u00e9ch\u00e9ance est inacceptable et peut avoir des cons\u00e9quences graves (syst\u00e8me de freinage, contr\u00f4le de vol).' }
          ],
          definitions: [
            { term: 'Microcontr\u00f4leur', def: 'Circuit int\u00e9gr\u00e9 combinant processeur, m\u00e9moire et p\u00e9riph\u00e9riques sur une seule puce, d\u00e9di\u00e9 \u00e0 des t\u00e2ches embarqu\u00e9es.' },
            { term: 'RTOS', def: 'Syst\u00e8me d\'exploitation temps r\u00e9el garantissant un ordonnancement d\u00e9terministe des t\u00e2ches.' },
            { term: 'MEMS', def: 'Syst\u00e8mes micro\u00e9lectrom\u00e9caniques : structures m\u00e9caniques microscopiques int\u00e9gr\u00e9es sur silicium.' },
            { term: 'Bus CAN', def: 'Protocole de communication s\u00e9rie robuste utilis\u00e9 principalement dans l\'automobile et l\'industrie.' },
            { term: 'IoT', def: 'Internet des objets (Internet of Things) : r\u00e9seau d\'objets physiques connect\u00e9s \u00e9changeant des donn\u00e9es via Internet.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le bus CAN a \u00e9t\u00e9 d\u00e9velopp\u00e9 par Bosch en 1986 pour r\u00e9duire le c\u00e2blage dans les voitures. Il remplace des kilom\u00e8tres de fils par un simple bus \u00e0 deux fils.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Arduino, cr\u00e9\u00e9 en 2005 en Italie, a d\u00e9mocratis\u00e9 les syst\u00e8mes embarqu\u00e9s en les rendant accessibles aux d\u00e9butants et aux artistes.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Un Boeing 787 Dreamliner contient plus de 6,5 millions de lignes de code embarqu\u00e9, r\u00e9parties sur des centaines de microcontr\u00f4leurs et processeurs.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 3 — Genie civil
    // ──────────────────────────────────────────────
    {
      slug: 'genie-civil',
      title: 'G\u00e9nie civil',
      description: 'Structures, b\u00e9ton, ponts, fondations et construction parasismique.',
      lessons: [
        {
          slug: 'structures-porteuses',
          title: 'Structures porteuses',
          description: 'Poutres, portiques, treillis et arcs : les syst\u00e8mes qui transmettent les charges au sol.',
          intro: 'Les <strong>structures porteuses</strong> constituent le squelette de toute construction. Elles transmettent les charges (poids propre, occupants, vent, neige, s\u00e9ismes) vers les fondations et le sol. Leur conception est l\'essence m\u00eame du g\u00e9nie civil.',
          introHighlight: '<strong>Chaque forme structurale r\u00e9pond \u00e0 un besoin</strong> : la poutre franchit une ouverture, l\'arc travaille en compression, le treillis \u00e9conomise le mat\u00e9riau, le c\u00e2ble suspend la charge.',
          intro2: '',
          sections: [
            {
              title: 'Poutres et portiques',
              paragraphs: [
                'La <strong>poutre</strong> est l\'\u00e9l\u00e9ment structural le plus courant. Soumise \u00e0 la flexion, elle pr\u00e9sente une fibre sup\u00e9rieure compress\u00e9e et une fibre inf\u00e9rieure tendue. La port\u00e9e maximale d\'une poutre d\u00e9pend du mat\u00e9riau et de la section : environ 20 m en b\u00e9ton arm\u00e9, 40 m en acier, et jusqu\'\u00e0 60 m en b\u00e9ton pr\u00e9contraint.',
                'Le <strong>portique</strong> est un assemblage rigide de poutres et de poteaux. Les n\u0153uds rigides redistribuent les moments fl\u00e9chissants entre les \u00e9l\u00e9ments, permettant des port\u00e9es plus grandes et une meilleure r\u00e9sistance aux charges horizontales (vent, s\u00e9ismes). Les hangars industriels et les immeubles de bureaux utilisent massivement les portiques en acier ou en b\u00e9ton arm\u00e9.',
                'Les <strong>poutres continues</strong> (plusieurs trav\u00e9es) sont plus efficaces que les poutres ind\u00e9pendantes : la continuit\u00e9 r\u00e9duit les moments fl\u00e9chissants maximaux et les fl\u00e8ches. Le th\u00e9or\u00e8me des trois moments permet de calculer les r\u00e9actions d\'appui de ces structures hyperstatiques.'
              ],
              highlight: 'Un portique rigide r\u00e9siste aux forces horizontales gr\u00e2ce \u00e0 la rigidit\u00e9 de ses n\u0153uds poutre-poteau.'
            },
            {
              title: 'Treillis',
              paragraphs: [
                'Un <strong>treillis</strong> est un assemblage de barres articul\u00e9es formant des triangles. Chaque barre travaille uniquement en traction ou en compression, sans flexion, ce qui optimise l\'utilisation du mat\u00e9riau. Les treillis Pratt, Warren et Howe se distinguent par l\'orientation de leurs diagonales.',
                'La m\u00e9thode des <strong>n\u0153uds</strong> et la m\u00e9thode des <strong>sections</strong> (m\u00e9thode de Ritter) permettent de calculer les efforts dans chaque barre. Les treillis sont utilis\u00e9s dans les ponts ferroviaires, les charpentes m\u00e9talliques, les pylones \u00e9lectriques et les structures spatiales (stations spatiales).'
              ],
              highlight: 'Le triangle est la seule forme g\u00e9om\u00e9trique ind\u00e9formable : c\'est pourquoi les treillis sont triangul\u00e9s.'
            },
            {
              title: 'Arcs et voiles',
              paragraphs: [
                'L\'<strong>arc</strong> travaille principalement en compression, ce qui le rend particuli\u00e8rement adapt\u00e9 \u00e0 la ma\u00e7onnerie et au b\u00e9ton, mat\u00e9riaux excellents en compression mais m\u00e9diocres en traction. La courbe id\u00e9ale d\'un arc soumis \u00e0 une charge uniforme est une parabole ; pour son poids propre, c\'est une cha\u00eenette (courbe caract\u00e9ristique d\'un c\u00e2ble suspendu).',
                'Les <strong>voiles</strong> (coques) sont des structures surfaciques courbes qui r\u00e9partissent les charges par effet de membrane. L\'Op\u00e9ra de Sydney (J\u00f8rn Utzon, 1973) et le CNIT de Paris (1958, port\u00e9e de 218 m sans poteau interm\u00e9diaire) illustrent la puissance des structures en coque.'
              ],
              highlight: 'Le Panth\u00e9on de Rome (125 ap. J.-C.) poss\u00e8de une coupole en b\u00e9ton non arm\u00e9 de 43,3 m de diam\u00e8tre, record battu seulement au XXe si\u00e8cle.'
            }
          ],
          quiz: [
            { q: 'Pourquoi les treillis sont-ils triangul\u00e9s ?', opts: ['Pour des raisons esth\u00e9tiques', 'Parce que le triangle est la seule forme ind\u00e9formable', 'Pour r\u00e9duire le poids', 'Pour faciliter le montage'], correct: 1, explanation: 'Le triangle est la seule forme g\u00e9om\u00e9trique ind\u00e9formable : trois barres articul\u00e9es forment un ensemble rigide, contrairement au quadrilat\u00e8re qui peut se d\u00e9former en parall\u00e9logramme.' },
            { q: 'Quel type de sollicitation domine dans un arc ?', opts: ['La traction', 'La flexion', 'La compression', 'Le cisaillement'], correct: 2, explanation: 'L\'arc travaille principalement en compression, ce qui le rend id\u00e9al pour les mat\u00e9riaux comme la pierre ou le b\u00e9ton qui r\u00e9sistent bien \u00e0 la compression.' },
            { q: 'Qu\'est-ce qu\'un portique en g\u00e9nie civil ?', opts: ['Une porte d\u00e9corative', 'Un assemblage rigide de poutres et poteaux', 'Un type de fondation', 'Un mur porteur'], correct: 1, explanation: 'Un portique est un assemblage o\u00f9 poutres et poteaux sont reli\u00e9s par des n\u0153uds rigides, formant un cadre r\u00e9sistant aux charges verticales et horizontales.' }
          ],
          definitions: [
            { term: 'Poutre', def: '\u00c9l\u00e9ment structural horizontal travaillant principalement en flexion sous les charges transversales.' },
            { term: 'Treillis', def: 'Structure form\u00e9e de barres articul\u00e9es en triangles, o\u00f9 chaque barre travaille en traction ou compression pure.' },
            { term: 'Portique', def: 'Assemblage de poutres et poteaux reli\u00e9s par des n\u0153uds rigides, r\u00e9sistant aux charges verticales et horizontales.' },
            { term: 'Structure hyperstatique', def: 'Structure dont les conditions d\'appui exc\u00e8dent le nombre n\u00e9cessaire \u00e0 l\'\u00e9quilibre, offrant une redondance structurale.' },
            { term: 'Voile (coque)', def: 'Structure surfacique courbe r\u00e9partissant les charges par effet de membrane.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La tour Eiffel (1889) est un immense treillis en fer puddl\u00e9 de 7 300 tonnes. Gustave Eiffel a utilis\u00e9 la triangulation pour r\u00e9sister aux vents tout en minimisant le poids.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le pont du Gard, aqueduc romain \u00e0 trois niveaux d\'arcs, transporte l\'eau depuis plus de 2 000 ans sans aucune armature m\u00e9tallique, gr\u00e2ce \u00e0 la compression pure de ses arcs.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les cath\u00e9drales gothiques utilisent des arcs-boutants pour reprendre la pouss\u00e9e horizontale des vo\u00fbtes, permettant des murs plus fins perc\u00e9s de grands vitraux.' }
          ]
        },
        {
          slug: 'beton-arme',
          title: 'B\u00e9ton arm\u00e9',
          description: 'Composition du b\u00e9ton, ferraillage, dimensionnement et b\u00e9ton pr\u00e9contraint.',
          intro: 'Le <strong>b\u00e9ton arm\u00e9</strong> est le mat\u00e9riau de construction le plus utilis\u00e9 au monde : environ 30 milliards de tonnes de b\u00e9ton sont coul\u00e9es chaque ann\u00e9e. L\'association du b\u00e9ton (excellent en compression) et de l\'acier (excellent en traction) cr\u00e9e un mat\u00e9riau composite aux performances remarquables.',
          introHighlight: '<strong>Le b\u00e9ton seul r\u00e9siste 10 fois mieux en compression qu\'en traction.</strong> L\'acier compense cette faiblesse en reprenant les efforts de traction dans les zones tendues de la structure.',
          intro2: '',
          sections: [
            {
              title: 'Composition et propri\u00e9t\u00e9s du b\u00e9ton',
              paragraphs: [
                'Le <strong>b\u00e9ton</strong> est un m\u00e9lange de ciment, d\'eau, de sable et de graviers. Le ciment Portland, obtenu par cuisson d\'un m\u00e9lange de calcaire et d\'argile \u00e0 1 450 \u00b0C, r\u00e9agit avec l\'eau (hydratation) pour former un liant hydraulique qui durcit progressivement. La r\u00e9sistance \u00e0 28 jours est la r\u00e9f\u00e9rence normative.',
                'Le <strong>rapport eau/ciment</strong> (E/C) est le param\u00e8tre le plus d\u00e9terminant : un E/C faible (0,35-0,45) donne un b\u00e9ton tr\u00e8s r\u00e9sistant et durable, mais difficile \u00e0 mettre en \u0153uvre. Les <strong>adjuvants</strong> (plastifiants, superplastifiants, retardateurs, acc\u00e9l\u00e9rateurs) permettent d\'ajuster les propri\u00e9t\u00e9s du b\u00e9ton frais et durci sans modifier excessivement le rapport E/C.'
              ],
              highlight: 'Un b\u00e9ton courant r\u00e9siste \u00e0 25-35 MPa en compression, soit environ 250 \u00e0 350 kg par centim\u00e8tre carr\u00e9.'
            },
            {
              title: 'Principes du b\u00e9ton arm\u00e9',
              paragraphs: [
                'Le <strong>ferraillage</strong> consiste \u00e0 placer des armatures en acier dans les zones tendues du b\u00e9ton. Dans une poutre en flexion, les armatures longitudinales sont plac\u00e9es en partie inf\u00e9rieure (zone tendue). Les <strong>cadres</strong> et <strong>\u00e9triers</strong> reprennent les efforts tranchants et maintiennent les armatures longitudinales en position.',
                'L\'<strong>adh\u00e9rence</strong> entre l\'acier et le b\u00e9ton est assur\u00e9e par les nervures des barres \u00e0 haute adh\u00e9rence (HA). L\'<strong>enrobage</strong> (\u00e9paisseur de b\u00e9ton couvrant les armatures) prot\u00e8ge l\'acier de la corrosion et du feu. Un enrobage insuffisant entra\u00eene la carbonatation du b\u00e9ton puis la corrosion des armatures, cause majeure de d\u00e9gradation des ouvrages.',
                'Le dimensionnement aux <strong>\u00e9tats limites</strong> v\u00e9rifie deux crit\u00e8res : l\'\u00e9tat limite ultime (ELU, s\u00e9curit\u00e9 structurale) et l\'\u00e9tat limite de service (ELS, aptitude \u00e0 l\'emploi : fl\u00e8ches, fissuration). Les Eurocodes (normes europ\u00e9ennes) codifient ces v\u00e9rifications.'
              ],
              highlight: 'Le b\u00e9ton et l\'acier ont des coefficients de dilatation thermique presque identiques (\u223c12\u00d710\u207b\u2076/\u00b0C), ce qui rend leur association possible.'
            },
            {
              title: 'B\u00e9ton pr\u00e9contraint',
              paragraphs: [
                'Le <strong>b\u00e9ton pr\u00e9contraint</strong>, invent\u00e9 par Eug\u00e8ne Freyssinet en 1928, introduit une compression permanente dans le b\u00e9ton avant qu\'il ne soit charg\u00e9. Ainsi, les zones habituellement tendues sous charge restent compress\u00e9es. Cela \u00e9limine la fissuration et permet des port\u00e9es nettement plus grandes qu\'en b\u00e9ton arm\u00e9 classique.',
                'Deux techniques existent : la <strong>pr\u00e9tension</strong> (c\u00e2bles tendus avant le coulage, puis rel\u00e2ch\u00e9s apr\u00e8s durcissement) et la <strong>post-tension</strong> (c\u00e2bles enfi\u00e9s dans des gaines apr\u00e8s durcissement et tendus par des v\u00e9rins). La post-tension permet de r\u00e9aliser des ponts de port\u00e9es d\u00e9passant 300 m\u00e8tres.'
              ],
              highlight: 'Le viaduc de Millau, con\u00e7u par Michel Virlogeux et Norman Foster, utilise le b\u00e9ton pr\u00e9contraint pour ses piles atteignant 343 m de hauteur.'
            }
          ],
          quiz: [
            { q: 'Quel param\u00e8tre d\u00e9termine le plus la r\u00e9sistance du b\u00e9ton ?', opts: ['Le type de graviers', 'Le rapport eau/ciment', 'La temp\u00e9rature de coulage', 'Le type de coffrage'], correct: 1, explanation: 'Le rapport eau/ciment (E/C) est le facteur le plus d\u00e9terminant : plus il est faible, plus le b\u00e9ton est r\u00e9sistant et durable.' },
            { q: 'O\u00f9 place-t-on les armatures dans une poutre en flexion ?', opts: ['En partie sup\u00e9rieure', 'En partie inf\u00e9rieure (zone tendue)', 'Au centre (fibre neutre)', 'Uniform\u00e9ment r\u00e9parties'], correct: 1, explanation: 'Les armatures sont plac\u00e9es dans la zone tendue, c\'est-\u00e0-dire en partie inf\u00e9rieure d\'une poutre simplement appuy\u00e9e, pour compenser la faible r\u00e9sistance du b\u00e9ton en traction.' },
            { q: 'Qui a invent\u00e9 le b\u00e9ton pr\u00e9contraint ?', opts: ['Gustave Eiffel', 'Joseph Monier', 'Eug\u00e8ne Freyssinet', 'Robert Maillart'], correct: 2, explanation: 'Eug\u00e8ne Freyssinet a brevet\u00e9 le b\u00e9ton pr\u00e9contraint en 1928, r\u00e9volutionnant le g\u00e9nie civil en permettant des port\u00e9es bien sup\u00e9rieures au b\u00e9ton arm\u00e9 classique.' }
          ],
          definitions: [
            { term: 'Ciment Portland', def: 'Liant hydraulique obtenu par cuisson de calcaire et d\'argile \u00e0 1 450 \u00b0C, base de la plupart des b\u00e9tons.' },
            { term: 'Rapport E/C', def: 'Rapport massique eau/ciment, param\u00e8tre cl\u00e9 de la r\u00e9sistance et de la durabilit\u00e9 du b\u00e9ton.' },
            { term: 'Enrobage', def: '\u00c9paisseur de b\u00e9ton prot\u00e9geant les armatures contre la corrosion et le feu.' },
            { term: 'Pr\u00e9contrainte', def: 'Compression permanente appliqu\u00e9e au b\u00e9ton par des c\u00e2bles tendus, \u00e9liminant la fissuration sous charge.' },
            { term: '\u00c9tats limites', def: 'Crit\u00e8res de dimensionnement : ELU (s\u00e9curit\u00e9 structurale) et ELS (aptitude \u00e0 l\'emploi).' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le b\u00e9ton est le mat\u00e9riau le plus utilis\u00e9 par l\'homme apr\u00e8s l\'eau. L\'industrie du ciment repr\u00e9sente environ 8 % des \u00e9missions mondiales de CO\u2082.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les Romains fabriquaient un b\u00e9ton \u00e0 base de chaux et de cendres volcaniques (pouzzolane) si durable que le Panth\u00e9on de Rome est intact apr\u00e8s 1 900 ans.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le b\u00e9ton \u00e0 ultra-hautes performances (BUHP) atteint 200 MPa en compression, soit six fois plus qu\'un b\u00e9ton courant, gr\u00e2ce \u00e0 des fibres m\u00e9talliques et une granulom\u00e9trie optimis\u00e9e.' }
          ]
        },
        {
          slug: 'ponts',
          title: 'Ponts',
          description: 'Ponts \u00e0 poutres, ponts en arc, ponts suspendus et ponts hauban\u00e9s.',
          intro: 'Les <strong>ponts</strong> sont parmi les ouvrages les plus embl\u00e9matiques du g\u00e9nie civil. Franchir un obstacle naturel (rivi\u00e8re, vall\u00e9e, bras de mer) est un d\u00e9fi technique qui a pouss\u00e9 l\'ing\u00e9nierie \u00e0 innover depuis l\'Antiquit\u00e9.',
          introHighlight: '<strong>Quatre grands types de ponts</strong> couvrent l\'essentiel des besoins : ponts \u00e0 poutres, ponts en arc, ponts suspendus et ponts hauban\u00e9s. Chacun a son domaine de port\u00e9e optimal.',
          intro2: '',
          sections: [
            {
              title: 'Ponts \u00e0 poutres et en arc',
              paragraphs: [
                'Le <strong>pont \u00e0 poutres</strong> est la forme la plus simple : un tablier repose sur des appuis. Les poutres en b\u00e9ton pr\u00e9contraint permettent des port\u00e9es de 30 \u00e0 200 m. Le pont-caisson, dont la section creuse offre une grande rigidit\u00e9 en flexion et en torsion, est largement utilis\u00e9 pour les viaducs autoroutiers.',
                'Le <strong>pont en arc</strong> exploite la compression naturelle de l\'arc pour franchir de grandes port\u00e9es. Le pont de Chaotianmen \u00e0 Chongqing (552 m) d\u00e9tient le record de port\u00e9e pour un arc en acier. Les ponts en arc en ma\u00e7onnerie, comme le pont du Gard, sont parmi les plus anciens ouvrages encore debout.',
                'Le choix entre poutre et arc d\u00e9pend de la topographie : l\'arc n\u00e9cessite des appuis capables de reprendre la pouss\u00e9e horizontale, id\u00e9alement sur de la roche. Un arc \u00e0 tirant (tirant horizontal reliant les naissances) \u00e9limine cette contrainte.'
              ],
              highlight: 'Les port\u00e9es optimales : poutres jusqu\'\u00e0 200 m, arcs jusqu\'\u00e0 550 m, haubanage jusqu\'\u00e0 1 100 m, suspension jusqu\'\u00e0 2 000 m.'
            },
            {
              title: 'Ponts suspendus et hauban\u00e9s',
              paragraphs: [
                'Le <strong>pont suspendu</strong> utilise deux c\u00e2bles porteurs paraboliques reli\u00e9s \u00e0 des pyl\u00f4nes et ancr\u00e9s dans des massifs. Des suspentes verticales supportent le tablier. Cette technique permet les plus grandes port\u00e9es : le pont de Akashi-Kaiky\u014d au Japon d\u00e9tient le record avec 1 991 m de port\u00e9e centrale.',
                'Le <strong>pont hauban\u00e9</strong> relie directement le tablier aux pyl\u00f4nes par des c\u00e2bles obliques (haubans). Plus rigide qu\'un pont suspendu, il est pr\u00e9f\u00e9r\u00e9 pour les port\u00e9es de 200 \u00e0 1 100 m. Le pont Russky en Russie (1 104 m) est le record actuel. Le viaduc de Millau (2 460 m de longueur totale, pil\u00f4ne culminant \u00e0 343 m) est le plus haut pont hauban\u00e9 du monde.'
              ],
              highlight: 'Le pont de Akashi-Kaiky\u014d consomme 300 000 km de fils d\'acier pour ses c\u00e2bles, assez pour faire 7,5 fois le tour de la Terre.'
            },
            {
              title: 'Conception et charges',
              paragraphs: [
                'Le dimensionnement d\'un pont prend en compte les <strong>charges permanentes</strong> (poids propre, rev\u00eatement), les <strong>charges d\'exploitation</strong> (v\u00e9hicules, pi\u00e9tons), les charges <strong>climatiques</strong> (vent, neige, temp\u00e9rature) et les charges <strong>accidentelles</strong> (s\u00e9isme, choc de navire). Les Eurocodes d\u00e9finissent les combinaisons de charges \u00e0 consid\u00e9rer.',
                'Les effets <strong>a\u00e9rodynamiques</strong> sont critiques pour les ponts \u00e0 grande port\u00e9e. L\'effondrement du pont de Tacoma Narrows en 1940 (oscillations a\u00e9ro\u00e9lastiques sous un vent de 65 km/h) a r\u00e9volutionn\u00e9 la compr\u00e9hension du couplage vent-structure. Les ponts modernes sont test\u00e9s en soufflerie et poss\u00e8dent des profils a\u00e9rodynamiques optimis\u00e9s.'
              ],
              highlight: 'Depuis Tacoma Narrows, tous les grands ponts suspendus sont test\u00e9s en soufflerie avant leur construction.'
            }
          ],
          quiz: [
            { q: 'Quel type de pont permet la plus grande port\u00e9e ?', opts: ['Pont \u00e0 poutres', 'Pont en arc', 'Pont hauban\u00e9', 'Pont suspendu'], correct: 3, explanation: 'Le pont suspendu permet les plus grandes port\u00e9es (jusqu\'\u00e0 2 000 m), gr\u00e2ce \u00e0 ses c\u00e2bles porteurs paraboliques qui travaillent en traction pure.' },
            { q: 'Qu\'a r\u00e9v\u00e9l\u00e9 l\'effondrement du pont de Tacoma Narrows ?', opts: ['La faiblesse du b\u00e9ton', 'L\'importance des effets a\u00e9rodynamiques', 'Le danger des tremblements de terre', 'L\'insuffisance des fondations'], correct: 1, explanation: 'L\'effondrement de Tacoma Narrows (1940) a d\u00e9montr\u00e9 l\'importance cruciale des effets a\u00e9rodynamiques et du couplage vent-structure pour les ponts \u00e0 grande port\u00e9e.' },
            { q: 'Quel est le record de port\u00e9e pour un pont suspendu ?', opts: ['1 280 m (Golden Gate)', '1 624 m (Humber)', '1 991 m (Akashi-Kaiky\u014d)', '2 460 m (Millau)'], correct: 2, explanation: 'Le pont Akashi-Kaiky\u014d au Japon d\u00e9tient le record de port\u00e9e centrale pour un pont suspendu avec 1 991 m.' }
          ],
          definitions: [
            { term: 'Port\u00e9e', def: 'Distance horizontale entre deux appuis cons\u00e9cutifs d\'un pont.' },
            { term: 'Tablier', def: 'Partie horizontale du pont supportant la chauss\u00e9e ou la voie ferr\u00e9e.' },
            { term: 'Hauban', def: 'C\u00e2ble oblique reliant directement le tablier d\'un pont \u00e0 un pyl\u00f4ne.' },
            { term: 'A\u00e9ro\u00e9lasticit\u00e9', def: 'Interaction entre les forces a\u00e9rodynamiques et les d\u00e9formations de la structure pouvant provoquer des oscillations.' },
            { term: 'Pont-caisson', def: 'Pont dont le tablier est constitu\u00e9 d\'une section creuse offrant une grande rigidit\u00e9 en flexion et en torsion.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Golden Gate Bridge (1937) a \u00e9t\u00e9 peint en orange international pour \u00eatre visible dans le brouillard de San Francisco. Il faut une \u00e9quipe permanente de peintres pour l\'entretenir.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le viaduc de Millau a \u00e9t\u00e9 construit en seulement 3 ans (2001-2004). Son tablier en acier a \u00e9t\u00e9 lanc\u00e9 par translation depuis les deux rives.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les c\u00e2bles d\'un grand pont suspendu sont compos\u00e9s de milliers de fils d\'acier individuels assembl\u00e9s sur place par la technique du c\u00e2ble a\u00e9rien (aerial spinning).' }
          ]
        },
        {
          slug: 'fondations',
          title: 'Fondations',
          description: 'Fondations superficielles, profondes, m\u00e9canique des sols et g\u00e9otechnique.',
          intro: 'Les <strong>fondations</strong> transmettent les charges de la structure au sol. Leur conception d\u00e9pend de la nature du sol, de l\'intensit\u00e9 des charges et de la sensibilit\u00e9 de la structure aux tassements. Une fondation inad\u00e9quate peut compromettre l\'ensemble de l\'ouvrage.',
          introHighlight: '<strong>La tour de Pise</strong> illustre les cons\u00e9quences d\'un sol inadapt\u00e9 : construite sur des argiles compressibles, elle penche de 3,97\u00b0 apr\u00e8s des si\u00e8cles de tassement diff\u00e9rentiel.',
          intro2: '',
          sections: [
            {
              title: 'M\u00e9canique des sols',
              paragraphs: [
                'La <strong>m\u00e9canique des sols</strong> caract\u00e9rise le comportement des terrains sous les charges. Les essais en laboratoire (granulom\u00e9trie, limites d\'Atterberg, essai triaxial, oedometrique) et les essais in situ (pressiometre de M\u00e9nard, p\u00e9n\u00e9trom\u00e8tre, SPT) permettent de d\u00e9terminer la portance et la compressibilit\u00e9 du sol.',
                'Les sols se classent en grandes familles : <strong>roches</strong> (portance \u00e9lev\u00e9e, 1-10 MPa), <strong>graviers et sables</strong> (bonne portance, drainage naturel), <strong>limons</strong> (interm\u00e9diaires), <strong>argiles</strong> (fortes variations de volume selon la teneur en eau, tassements importants). La nappe phr\u00e9atique complique la mise en \u0153uvre et r\u00e9duit la portance effective du sol.'
              ],
              highlight: 'Karl Terzaghi (1883-1963) est le p\u00e8re de la m\u00e9canique des sols moderne, avec sa th\u00e9orie de la consolidation des argiles.'
            },
            {
              title: 'Fondations superficielles',
              paragraphs: [
                'Les <strong>fondations superficielles</strong> transmettent les charges \u00e0 faible profondeur (moins de 3 m en g\u00e9n\u00e9ral). La <strong>semelle isol\u00e9e</strong> supporte un poteau ponctuel. La <strong>semelle filante</strong> r\u00e9partit la charge d\'un mur. Le <strong>radier g\u00e9n\u00e9ral</strong> couvre toute l\'emprise du b\u00e2timent lorsque le sol est m\u00e9diocre ou que les charges sont \u00e9lev\u00e9es.',
                'Le dimensionnement v\u00e9rifie que la <strong>pression sous la semelle</strong> ne d\u00e9passe pas la portance admissible du sol et que les <strong>tassements</strong> restent dans les limites tol\u00e9rables (g\u00e9n\u00e9ralement quelques centim\u00e8tres). Le tassement diff\u00e9rentiel (in\u00e9gal entre appuis) est souvent plus probl\u00e9matique que le tassement absolu.'
              ],
              highlight: 'Un tassement diff\u00e9rentiel de 1/500 de la port\u00e9e suffit g\u00e9n\u00e9ralement \u00e0 provoquer des fissures dans un mur en ma\u00e7onnerie.'
            },
            {
              title: 'Fondations profondes',
              paragraphs: [
                'Lorsque le sol en surface est inapte, on recourt aux <strong>fondations profondes</strong> : pieux for\u00e9s (b\u00e9ton coul\u00e9 en place), pieux battus (pr\u00e9fabriqu\u00e9s en b\u00e9ton ou acier), micropieux ou parois moul\u00e9es. Le pieu transmet la charge par frottement lat\u00e9ral le long de son f\u00fbt et par r\u00e9sistance en pointe.',
                'Les <strong>parois moul\u00e9es</strong> sont des murs en b\u00e9ton arm\u00e9 coul\u00e9s dans une tranch\u00e9e remplie de boue benton\u00e9e (qui stabilise les parois pendant le creusement). Elles servent \u00e0 la fois de fondation, de sout\u00e8nement et d\'\u00e9tanch\u00e9it\u00e9 pour les constructions souterraines profondes (parkings, m\u00e9tros, gratte-ciel).'
              ],
              highlight: 'Le Burj Khalifa (828 m) repose sur 194 pieux de 1,5 m de diam\u00e8tre for\u00e9s \u00e0 50 m de profondeur dans le grès.'
            }
          ],
          quiz: [
            { q: 'Quel type de sol pose le plus de probl\u00e8mes de tassement ?', opts: ['Le gravier', 'Le sable', 'L\'argile', 'La roche'], correct: 2, explanation: 'Les argiles sont tr\u00e8s compressibles et leur volume varie fortement avec la teneur en eau, provoquant des tassements importants et lents (consolidation).' },
            { q: 'Qu\'est-ce qu\'un radier g\u00e9n\u00e9ral ?', opts: ['Un pieu profond', 'Une dalle couvrant toute l\'emprise du b\u00e2timent', 'Un mur de sout\u00e8nement', 'Un type de drain'], correct: 1, explanation: 'Le radier g\u00e9n\u00e9ral est une dalle de fondation couvrant toute l\'emprise du b\u00e2timent, utilis\u00e9e quand le sol est m\u00e9diocre ou les charges \u00e9lev\u00e9es.' },
            { q: 'Comment un pieu transmet-il la charge au sol ?', opts: ['Par compression lat\u00e9rale', 'Par frottement lat\u00e9ral et r\u00e9sistance en pointe', 'Par ancrage dans la nappe phr\u00e9atique', 'Par effet de voûte'], correct: 1, explanation: 'Le pieu transmet les charges par deux m\u00e9canismes : le frottement le long de son f\u00fbt (frottement lat\u00e9ral) et la r\u00e9sistance du sol sous sa pointe (effort de pointe).' }
          ],
          definitions: [
            { term: 'Portance', def: 'Capacit\u00e9 d\'un sol \u00e0 supporter les charges sans rupture ni tassement excessif.' },
            { term: 'Tassement diff\u00e9rentiel', def: 'Diff\u00e9rence de tassement entre deux points d\'appui d\'une structure, cause fr\u00e9quente de fissuration.' },
            { term: 'Pieu for\u00e9', def: 'Fondation profonde r\u00e9alis\u00e9e par forage puis coulage de b\u00e9ton arm\u00e9 dans le trou.' },
            { term: 'Paroi moul\u00e9e', def: 'Mur de b\u00e9ton arm\u00e9 coul\u00e9 dans une tranch\u00e9e stabilis\u00e9e par de la boue benton\u00e9e.' },
            { term: 'Pressiom\u00e8tre de M\u00e9nard', def: 'Essai g\u00e9otechnique in situ mesurant la d\u00e9formabilit\u00e9 et la r\u00e9sistance du sol par expansion d\'une sonde cylindrique.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La tour de Pise a \u00e9t\u00e9 stabilis\u00e9e entre 1990 et 2001 par extraction contr\u00f4l\u00e9e de sol sous le c\u00f4t\u00e9 nord (le moins incline), r\u00e9duisant l\'inclinaison de 5,5\u00b0 \u00e0 3,97\u00b0.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Mexico s\'enfonce de 20 \u00e0 30 cm par an \u00e0 cause du pompage des eaux souterraines dans les argiles compressibles sur lesquelles la ville est construite.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les fondations du World Trade Center (1973) \u00e9taient constitu\u00e9es d\'une paroi moul\u00e9e de 1 m d\'\u00e9paisseur descendant \u00e0 20 m dans le substratum rocheux de Manhattan.' }
          ]
        },
        {
          slug: 'construction-parasismique',
          title: 'Construction parasismique',
          description: 'S\u00e9ismes, comportement des structures, isolation sismique et conception parasismique.',
          intro: 'La <strong>construction parasismique</strong> vise \u00e0 prot\u00e9ger les personnes et \u00e0 limiter les d\u00e9g\u00e2ts lors d\'un tremblement de terre. Les s\u00e9ismes tuent en moyenne 20 000 personnes par an, essentiellement par l\'effondrement des b\u00e2timents.',
          introHighlight: '<strong>Un b\u00e2timent parasismique n\'est pas un b\u00e2timent indestructible</strong>, mais un b\u00e2timent qui ne s\'effondre pas : il peut \u00eatre endommag\u00e9 mais doit permettre l\'\u00e9vacuation des occupants.',
          intro2: '',
          sections: [
            {
              title: 'Physique des s\u00e9ismes',
              paragraphs: [
                'Un <strong>s\u00e9isme</strong> r\u00e9sulte de la lib\u00e9ration brutale d\'\u00e9nergie accumul\u00e9e dans les roches le long d\'une faille. Les ondes sismiques se propagent dans le sol : les ondes P (compression, les plus rapides), les ondes S (cisaillement) et les ondes de surface (Love et Rayleigh, les plus destructrices).',
                'L\'\u00e9chelle de <strong>magnitude de Richter</strong> (ou moment sismique Mw) mesure l\'\u00e9nergie lib\u00e9r\u00e9e : chaque unit\u00e9 correspond \u00e0 une multiplication par 31,6 de l\'\u00e9nergie. L\'\u00e9chelle d\'<strong>intensit\u00e9 MSK</strong> (ou EMS-98) mesure les effets ressentis en surface, de I (imp\u00e9rceptible) \u00e0 XII (destruction totale).',
                'Le <strong>spectre de r\u00e9ponse</strong> repr\u00e9sente l\'acc\u00e9l\u00e9ration maximale subie par des structures de diff\u00e9rentes p\u00e9riodes propres. Les b\u00e2timents bas (p\u00e9riode courte) et les tours (p\u00e9riode longue) ne r\u00e9agissent pas de la m\u00eame mani\u00e8re au m\u00eame s\u00e9isme.'
              ],
              highlight: 'Le s\u00e9isme de Tohoku (2011, Mw 9.1) a d\u00e9plac\u00e9 le Japon de 2,4 m vers l\'est et raccourci la dur\u00e9e du jour de 1,8 microseconde.'
            },
            {
              title: 'Principes de conception parasismique',
              paragraphs: [
                'La conception parasismique repose sur plusieurs principes : la <strong>r\u00e9gularit\u00e9</strong> en plan et en \u00e9l\u00e9vation (les formes simples et sym\u00e9triques se comportent mieux), la <strong>ductilit\u00e9</strong> (capacit\u00e9 \u00e0 se d\u00e9former plastiquement sans rompre), la <strong>redondance</strong> (multiplier les \u00e9l\u00e9ments porteurs pour qu\'une d\u00e9faillance locale ne soit pas fatale).',
                'Les <strong>voiles en b\u00e9ton arm\u00e9</strong> (murs de contreventement) et les <strong>contreventements m\u00e9talliques</strong> (croix de Saint-Andr\u00e9) rigidifient la structure contre les forces horizontales. Les b\u00e2timents en b\u00e9ton arm\u00e9 doivent respecter des dispositions constructives strictes : confinement du b\u00e9ton par des \u00e9triers rapproch\u00e9s, longueurs d\'ancrage major\u00e9es, zones de rotules plastiques d\u00e9finies.'
              ],
              highlight: 'Le s\u00e9isme de Kobe (1995) a d\u00e9truit massivement les b\u00e2timents anciens mais \u00e9pargn\u00e9 les constructions r\u00e9centes conformes aux normes parasismiques japonaises.'
            },
            {
              title: 'Technologies d\'isolation sismique',
              paragraphs: [
                'L\'<strong>isolation \u00e0 la base</strong> (base isolation) interpose des appuis sp\u00e9ciaux entre la structure et ses fondations. Les <strong>appuis en \u00e9lastom\u00e8re frett\u00e9</strong> (alternance de couches de caoutchouc et de plaques d\'acier) et les <strong>appuis \u00e0 pendule de friction</strong> d\u00e9couplent la structure du mouvement du sol, r\u00e9duisant les acc\u00e9l\u00e9rations subies d\'un facteur 3 \u00e0 10.',
                'Les <strong>amortisseurs sismiques</strong> dissipent l\'\u00e9nergie : amortisseurs visqueux (similaires aux amortisseurs automobiles mais en grand format), amortisseurs \u00e0 friction, amortisseurs \u00e0 masse accord\u00e9e (tuned mass damper). Le Taipei 101 utilise une sph\u00e8re de 730 tonnes suspendue pr\u00e8s du sommet comme amortisseur pendulaire.'
              ],
              highlight: 'Le Taipei 101 utilise une sph\u00e8re d\'acier de 730 tonnes comme amortisseur \u00e0 masse accord\u00e9e, visible par les visiteurs.'
            }
          ],
          quiz: [
            { q: 'Quelle \u00e9chelle mesure l\'\u00e9nergie lib\u00e9r\u00e9e par un s\u00e9isme ?', opts: ['L\'\u00e9chelle MSK', 'L\'\u00e9chelle de Mercalli', 'L\'\u00e9chelle de magnitude (Richter/Mw)', 'L\'\u00e9chelle de Beaufort'], correct: 2, explanation: 'L\'\u00e9chelle de magnitude (Richter ou moment sismique Mw) mesure l\'\u00e9nergie lib\u00e9r\u00e9e par un s\u00e9isme. L\'\u00e9chelle MSK mesure les effets ressentis (intensit\u00e9).' },
            { q: 'Qu\'est-ce que l\'isolation \u00e0 la base ?', opts: ['Enterrer le b\u00e2timent', 'Interposer des appuis souples entre la structure et le sol', 'Renforcer les fondations', 'Construire sur pilotis'], correct: 1, explanation: 'L\'isolation \u00e0 la base interpose des appuis d\u00e9formables entre la structure et ses fondations, d\u00e9couplant la structure du mouvement sismique du sol.' },
            { q: 'Quel principe est fondamental en conception parasismique ?', opts: ['La rigidit\u00e9 maximale', 'La ductilit\u00e9 (capacit\u00e9 de d\u00e9formation plastique)', 'La l\u00e9g\u00e8ret\u00e9 du b\u00e2timent', 'La hauteur minimale'], correct: 1, explanation: 'La ductilit\u00e9 permet \u00e0 la structure de dissiper l\'\u00e9nergie sismique par d\u00e9formation plastique contr\u00f4l\u00e9e, sans effondrement brutal.' }
          ],
          definitions: [
            { term: 'Magnitude sismique', def: 'Mesure de l\'\u00e9nergie lib\u00e9r\u00e9e par un s\u00e9isme. Chaque unit\u00e9 correspond \u00e0 \u00d731,6 en \u00e9nergie.' },
            { term: 'Ductilit\u00e9', def: 'Capacit\u00e9 d\'un mat\u00e9riau ou d\'une structure \u00e0 se d\u00e9former plastiquement sans rompre.' },
            { term: 'Isolation \u00e0 la base', def: 'Technique interposant des appuis d\u00e9formables entre la structure et le sol pour r\u00e9duire les acc\u00e9l\u00e9rations sismiques.' },
            { term: 'Spectre de r\u00e9ponse', def: 'Courbe donnant l\'acc\u00e9l\u00e9ration maximale subie par des oscillateurs de diff\u00e9rentes p\u00e9riodes propres lors d\'un s\u00e9isme.' },
            { term: 'Amortisseur \u00e0 masse accord\u00e9e', def: 'Masse mobile accord\u00e9e sur la fr\u00e9quence propre du b\u00e2timent, oscillant en opposition de phase pour r\u00e9duire les vibrations.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Japon a les normes parasismiques les plus strictes au monde. Lors du s\u00e9isme de Tohoku (2011, Mw 9.1), les b\u00e2timents modernes ont remarquablement r\u00e9sist\u00e9 ; c\'est le tsunami qui a caus\u00e9 l\'essentiel des d\u00e9c\u00e8s.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Ha\u00efti (2010, Mw 7.0) et Chili (2010, Mw 8.8) : le s\u00e9isme chilien \u00e9tait 500 fois plus \u00e9nerg\u00e9tique mais a fait 500 morts contre 230 000 en Ha\u00efti, gr\u00e2ce aux normes parasismiques.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le b\u00e2timent le plus ancien isol\u00e9 sismiquement est le palais imp\u00e9rial de la Cit\u00e9 interdite \u00e0 P\u00e9kin (XVe si\u00e8cle), dont les colonnes reposent sur des bases lisses autorisant le glissement.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 4 — Energie
    // ──────────────────────────────────────────────
    {
      slug: 'energie',
      title: '\u00c9nergie',
      description: 'Thermodynamique, nucl\u00e9aire, renouvelables, stockage et r\u00e9seaux \u00e9lectriques.',
      lessons: [
        {
          slug: 'thermodynamique',
          title: 'Thermodynamique',
          description: 'Principes fondamentaux, cycles thermiques, machines thermiques et rendement.',
          intro: 'La <strong>thermodynamique</strong> est la science des transformations d\'\u00e9nergie impliquant la chaleur et le travail. Elle gouverne le fonctionnement de toutes les machines thermiques : moteurs, centrales \u00e9lectriques, r\u00e9frig\u00e9rateurs et pompes \u00e0 chaleur.',
          introHighlight: '<strong>Le second principe de la thermodynamique</strong> impose une limite fondamentale au rendement de toute machine thermique : il est impossible de convertir int\u00e9gralement la chaleur en travail.',
          intro2: '',
          sections: [
            {
              title: 'Les deux principes',
              paragraphs: [
                'Le <strong>premier principe</strong> (conservation de l\'\u00e9nergie) \u00e9tablit que l\'\u00e9nergie ne se cr\u00e9e ni ne se d\u00e9truit, elle se transforme. Pour un syst\u00e8me ferm\u00e9, la variation d\'\u00e9nergie interne \u00e9gale la somme du travail et de la chaleur \u00e9chang\u00e9s (\u0394U = W + Q). Ce principe interdit le mouvement perp\u00e9tuel de premi\u00e8re esp\u00e8ce.',
                'Le <strong>second principe</strong> introduit l\'entropie, mesure du d\u00e9sordre. L\'entropie d\'un syst\u00e8me isol\u00e9 ne peut qu\'augmenter. Ce principe explique pourquoi la chaleur s\'\u00e9coule spontan\u00e9ment du chaud vers le froid, jamais l\'inverse, et pourquoi le rendement d\'une machine thermique ne peut atteindre 100 %. Le rendement de Carnot (\u03b7 = 1 - Tf/Tc) est la limite th\u00e9orique absolue.'
              ],
              highlight: 'Le rendement de Carnot ne d\u00e9pend que des temp\u00e9ratures : entre 300 \u00b0C et 30 \u00b0C, il vaut au maximum 47 %.'
            },
            {
              title: 'Cycles thermodynamiques',
              paragraphs: [
                'Le <strong>cycle de Carnot</strong> (deux isothermes et deux adiabatiques) est le cycle id\u00e9al au rendement maximal. Aucune machine r\u00e9elle ne l\'atteint, mais il sert de r\u00e9f\u00e9rence. Le <strong>cycle de Rankine</strong> (vapeur d\'eau) \u00e9quipe les centrales thermiques et nucl\u00e9aires. Le <strong>cycle de Brayton</strong> (gaz) \u00e9quipe les turbines \u00e0 gaz et les turbo-r\u00e9acteurs.',
                'Le <strong>cycle de Otto</strong> (allumage command\u00e9, essence) et le <strong>cycle de Diesel</strong> (allumage par compression, gazole) d\u00e9crivent le fonctionnement des moteurs automobiles. Le cycle de Diesel, avec un rapport de compression plus \u00e9lev\u00e9, a un meilleur rendement th\u00e9orique (40-45 %) que le cycle de Otto (30-35 %).',
                'Les <strong>cycles combin\u00e9s</strong> (turbine \u00e0 gaz + turbine \u00e0 vapeur) r\u00e9cup\u00e8rent la chaleur des gaz d\'\u00e9chappement de la turbine \u00e0 gaz pour alimenter une turbine \u00e0 vapeur. Ce couplage atteint des rendements de 60 \u00e0 63 %, les meilleurs du secteur thermique.'
              ],
              highlight: 'Une centrale \u00e0 cycle combin\u00e9 gaz atteint 63 % de rendement, contre 33 % pour une centrale nucl\u00e9aire classique.'
            },
            {
              title: 'R\u00e9frig\u00e9ration et pompes \u00e0 chaleur',
              paragraphs: [
                'Le <strong>r\u00e9frig\u00e9rateur</strong> et la <strong>pompe \u00e0 chaleur</strong> fonctionnent selon un cycle invers\u00e9 : ils transf\u00e8rent la chaleur du froid vers le chaud en consommant du travail. Le coefficient de performance (COP) mesure leur efficacit\u00e9 : un COP de 3 signifie que pour 1 kWh d\'\u00e9lectricit\u00e9 consomm\u00e9, 3 kWh de chaleur sont fournis.',
                'Les pompes \u00e0 chaleur <strong>g\u00e9othermiques</strong> puisent la chaleur dans le sol (temp\u00e9rature stable autour de 12 \u00b0C) et atteignent des COP de 4 \u00e0 5, les rendant tr\u00e8s comp\u00e9titives face au chauffage \u00e9lectrique direct (COP = 1) ou au gaz (rendement < 1).'
              ],
              highlight: 'Une pompe \u00e0 chaleur avec un COP de 4 produit 4 kWh de chaleur pour 1 kWh d\'\u00e9lectricit\u00e9 consomm\u00e9. Elle est 4 fois plus efficace qu\'un radiateur \u00e9lectrique.'
            }
          ],
          quiz: [
            { q: 'Quel principe interdit le mouvement perp\u00e9tuel de premi\u00e8re esp\u00e8ce ?', opts: ['Le second principe', 'Le premier principe (conservation de l\'\u00e9nergie)', 'Le principe de Le Chatelier', 'Le principe de Carnot'], correct: 1, explanation: 'Le premier principe (conservation de l\'\u00e9nergie) interdit de cr\u00e9er de l\'\u00e9nergie \u00e0 partir de rien, donc le mouvement perp\u00e9tuel de premi\u00e8re esp\u00e8ce est impossible.' },
            { q: 'Quel cycle \u00e9quipe les centrales nucl\u00e9aires ?', opts: ['Cycle de Otto', 'Cycle de Diesel', 'Cycle de Rankine', 'Cycle de Brayton'], correct: 2, explanation: 'Le cycle de Rankine (cycle vapeur) est utilis\u00e9 dans les centrales nucl\u00e9aires : la chaleur de la r\u00e9action nucl\u00e9aire vaporise l\'eau qui entra\u00eene une turbine.' },
            { q: 'Que signifie un COP de 4 pour une pompe \u00e0 chaleur ?', opts: ['Elle consomme 4 kWh', 'Elle produit 4 kWh de chaleur pour 1 kWh d\'\u00e9lectricit\u00e9', 'Son rendement est de 4 %', 'Elle fonctionne 4 heures'], correct: 1, explanation: 'Un COP de 4 signifie que la pompe \u00e0 chaleur fournit 4 kWh de chaleur pour chaque kWh d\'\u00e9lectricit\u00e9 consomm\u00e9.' }
          ],
          definitions: [
            { term: 'Entropie', def: 'Grandeur mesurant le d\u00e9sordre d\'un syst\u00e8me. Elle ne peut qu\'augmenter dans un syst\u00e8me isol\u00e9 (second principe).' },
            { term: 'Rendement de Carnot', def: 'Rendement maximal th\u00e9orique d\'une machine thermique : \u03b7 = 1 - Tf/Tc (temp\u00e9ratures en kelvins).' },
            { term: 'Cycle combin\u00e9', def: 'Couplage d\'une turbine \u00e0 gaz et d\'une turbine \u00e0 vapeur r\u00e9cup\u00e9rant la chaleur r\u00e9siduelle pour am\u00e9liorer le rendement global.' },
            { term: 'COP', def: 'Coefficient de performance d\'une pompe \u00e0 chaleur : rapport entre la chaleur fournie et l\'\u00e9lectricit\u00e9 consomm\u00e9e.' },
            { term: 'Adiabatique', def: 'Transformation thermodynamique sans \u00e9change de chaleur avec l\'ext\u00e9rieur.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Sadi Carnot (1796-1832) a formul\u00e9 le second principe de la thermodynamique \u00e0 seulement 28 ans, dans son ouvrage R\u00e9flexions sur la puissance motrice du feu (1824), avant m\u00eame que le premier principe ne soit \u00e9tabli.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le moteur diesel doit son nom \u00e0 Rudolf Diesel (1858-1913) qui a con\u00e7u un moteur \u00e0 allumage par compression. Il a d\'abord essay\u00e9 de faire fonctionner son moteur avec de la poudre de charbon !' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La chaleur perdue par les centrales \u00e9lectriques repr\u00e9sente environ deux tiers de l\'\u00e9nergie du combustible. La cog\u00e9n\u00e9ration r\u00e9cup\u00e8re cette chaleur pour le chauffage urbain.' }
          ]
        },
        {
          slug: 'energie-nucleaire',
          title: '\u00c9nergie nucl\u00e9aire',
          description: 'Fission, r\u00e9acteurs nucl\u00e9aires, s\u00fbret\u00e9 et gestion des d\u00e9chets.',
          intro: 'L\'<strong>\u00e9nergie nucl\u00e9aire</strong> exploite la fission d\'atomes lourds (uranium, plutonium) pour produire de la chaleur, puis de l\'\u00e9lectricit\u00e9. Elle fournit environ 10 % de l\'\u00e9lectricit\u00e9 mondiale et plus de 70 % de l\'\u00e9lectricit\u00e9 fran\u00e7aise.',
          introHighlight: '<strong>Un kilogramme d\'uranium</strong> produit autant d\'\u00e9nergie que 10 000 kg de p\u00e9trole ou 14 000 kg de charbon, soit une densit\u00e9 \u00e9nerg\u00e9tique in\u00e9gal\u00e9e.',
          intro2: '',
          sections: [
            {
              title: 'La fission nucl\u00e9aire',
              paragraphs: [
                'La <strong>fission</strong> consiste \u00e0 scinder un noyau lourd (uranium-235 ou plutonium-239) en deux noyaux plus l\u00e9gers sous l\'impact d\'un neutron. Cette r\u00e9action lib\u00e8re une \u00e9nergie consid\u00e9rable (environ 200 MeV par fission, contre quelques eV pour une r\u00e9action chimique) et deux \u00e0 trois neutrons qui peuvent \u00e0 leur tour provoquer de nouvelles fissions.',
                'La <strong>r\u00e9action en cha\u00eene</strong> est auto-entretenue lorsque chaque fission provoque en moyenne exactement une nouvelle fission (r\u00e9gime critique). Le <strong>facteur de multiplication</strong> k doit \u00eatre maintenu tr\u00e8s pr\u00e8s de 1 : k > 1 (supercritique) entra\u00eene une divergence, k < 1 (sous-critique) \u00e9teint la r\u00e9action.'
              ],
              highlight: 'La fission d\'un seul atome d\'uranium-235 lib\u00e8re 50 millions de fois plus d\'\u00e9nergie que la combustion d\'un atome de carbone.'
            },
            {
              title: 'Les r\u00e9acteurs nucl\u00e9aires',
              paragraphs: [
                'Le <strong>r\u00e9acteur \u00e0 eau pressuris\u00e9e</strong> (REP), utilis\u00e9 en France, est le type le plus r\u00e9pandu. L\'eau sous pression (155 bars, 320 \u00b0C) sert \u00e0 la fois de mod\u00e9rateur (ralentit les neutrons) et de caloporteur (transporte la chaleur). Le circuit primaire transf\u00e8re la chaleur au circuit secondaire via un g\u00e9n\u00e9rateur de vapeur, assurant une barri\u00e8re de confinement entre le combustible et la turbine.',
                'Les r\u00e9acteurs de <strong>g\u00e9n\u00e9ration III+</strong> (EPR, AP1000) am\u00e9liorent la s\u00fbret\u00e9 avec des syst\u00e8mes de refroidissement passifs ne n\u00e9cessitant aucune intervention humaine ni alimentation \u00e9lectrique. Les <strong>petits r\u00e9acteurs modulaires</strong> (SMR, 50-300 MWe) promettent des co\u00fbts r\u00e9duits par construction en usine et des d\u00e9ploiements flexibles.',
                'La <strong>fusion nucl\u00e9aire</strong> (fusion de noyaux l\u00e9gers, comme dans le Soleil) est l\'objectif du projet ITER en France. Elle promettrait une \u00e9nergie quasi illimit\u00e9e et peu de d\u00e9chets, mais la ma\u00eetrise du plasma \u00e0 150 millions de degr\u00e9s reste un immense d\u00e9fi technologique.'
              ],
              highlight: 'ITER, en construction \u00e0 Cadarache (France), vise \u00e0 d\u00e9montrer la faisabilit\u00e9 de la fusion nucl\u00e9aire contr\u00f4l\u00e9e \u00e0 l\'horizon 2035.'
            },
            {
              title: 'S\u00fbret\u00e9 et d\u00e9chets',
              paragraphs: [
                'La <strong>s\u00fbret\u00e9 nucl\u00e9aire</strong> repose sur le concept de d\u00e9fense en profondeur : trois barri\u00e8res de confinement (gaine du combustible, circuit primaire, enceinte de confinement) et des syst\u00e8mes de s\u00e9curit\u00e9 redondants. L\'\u00e9chelle INES classe les \u00e9v\u00e9nements de 0 (sans cons\u00e9quence) \u00e0 7 (accident majeur, Tchernobyl et Fukushima).',
                'Les <strong>d\u00e9chets nucl\u00e9aires</strong> se classent selon leur activit\u00e9 et leur dur\u00e9e de vie. Les d\u00e9chets de haute activit\u00e9 \u00e0 vie longue (HAVL) repr\u00e9sentent moins de 1 % du volume mais 95 % de la radioactivit\u00e9. Le stockage g\u00e9ologique profond (projet Cig\u00e9o en France, \u00e0 500 m dans l\'argile) est la solution de r\u00e9f\u00e9rence pour ces d\u00e9chets.'
              ],
              highlight: 'L\'ensemble des d\u00e9chets de haute activit\u00e9 produits par 60 ans de nucl\u00e9aire fran\u00e7ais tient dans un cube de 15 m de c\u00f4t\u00e9.'
            }
          ],
          quiz: [
            { q: 'Quel isotope de l\'uranium est utilis\u00e9 dans les r\u00e9acteurs nucl\u00e9aires ?', opts: ['Uranium-234', 'Uranium-235', 'Uranium-236', 'Uranium-238'], correct: 1, explanation: 'L\'uranium-235 est le seul isotope naturel fissile. Il ne repr\u00e9sente que 0,7 % de l\'uranium naturel et doit \u00eatre enrichi \u00e0 3-5 % pour les r\u00e9acteurs civils.' },
            { q: 'Quel type de r\u00e9acteur est le plus r\u00e9pandu dans le monde ?', opts: ['R\u00e9acteur \u00e0 eau bouillante', 'R\u00e9acteur \u00e0 eau pressuris\u00e9e (REP)', 'R\u00e9acteur \u00e0 neutrons rapides', 'R\u00e9acteur CANDU'], correct: 1, explanation: 'Le r\u00e9acteur \u00e0 eau pressuris\u00e9e (REP/PWR) est le type le plus r\u00e9pandu, repr\u00e9sentant environ deux tiers du parc mondial.' },
            { q: 'Quel projet international vise \u00e0 d\u00e9montrer la fusion nucl\u00e9aire ?', opts: ['CERN', 'ITER', 'ISS', 'ALMA'], correct: 1, explanation: 'ITER (International Thermonuclear Experimental Reactor), en construction \u00e0 Cadarache en France, est le plus grand projet de fusion nucl\u00e9aire au monde.' }
          ],
          definitions: [
            { term: 'Fission', def: 'R\u00e9action nucl\u00e9aire consistant \u00e0 scinder un noyau lourd en deux noyaux plus l\u00e9gers, lib\u00e9rant une grande quantit\u00e9 d\'\u00e9nergie.' },
            { term: 'Mod\u00e9rateur', def: 'Mat\u00e9riau (eau, graphite) ralentissant les neutrons pour favoriser la fission de l\'uranium-235.' },
            { term: 'Confinement', def: 'Ensemble des barri\u00e8res physiques emp\u00eachant la dispersion des mati\u00e8res radioactives dans l\'environnement.' },
            { term: 'D\u00e9chets HAVL', def: 'D\u00e9chets de haute activit\u00e9 \u00e0 vie longue, n\u00e9cessitant un stockage g\u00e9ologique sur des centaines de milliers d\'ann\u00e9es.' },
            { term: 'Fusion nucl\u00e9aire', def: 'R\u00e9action nucl\u00e9aire fusionnant deux noyaux l\u00e9gers en un noyau plus lourd, lib\u00e9rant une \u00e9nergie consid\u00e9rable.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La France est le pays le plus nucl\u00e9aris\u00e9 au monde en proportion : 56 r\u00e9acteurs fournissent environ 70 % de son \u00e9lectricit\u00e9, ce qui lui donne l\'un des mix \u00e9lectriques les moins carbon\u00e9s d\'Europe.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Soleil est un r\u00e9acteur \u00e0 fusion naturel : il convertit 620 millions de tonnes d\'hydrog\u00e8ne en h\u00e9lium chaque seconde, et ce depuis 4,6 milliards d\'ann\u00e9es.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le r\u00e9acteur naturel d\'Oklo au Gabon a fonctionn\u00e9 en fission spontan\u00e9e il y a 2 milliards d\'ann\u00e9es pendant 500 000 ans, d\u00e9montr\u00e9 par la composition isotopique de l\'uranium sur le site.' }
          ]
        },
        {
          slug: 'energies-renouvelables',
          title: '\u00c9nergies renouvelables',
          description: 'Solaire, \u00e9olien, hydraulique, biomasse et g\u00e9othermie.',
          intro: 'Les <strong>\u00e9nergies renouvelables</strong> proviennent de sources naturelles in\u00e9puisables \u00e0 l\'\u00e9chelle humaine : le soleil, le vent, l\'eau, la biomasse et la chaleur terrestre. Elles repr\u00e9sentent environ 30 % de la production \u00e9lectrique mondiale et leur part cro\u00eet rapidement.',
          introHighlight: '<strong>Le co\u00fbt du solaire photovolta\u00efque a chut\u00e9 de 90 %</strong> en dix ans, rendant cette technologie comp\u00e9titive avec les combustibles fossiles dans la plupart des r\u00e9gions du monde.',
          intro2: '',
          sections: [
            {
              title: '\u00c9nergie solaire',
              paragraphs: [
                'Le <strong>solaire photovolta\u00efque</strong> convertit directement la lumi\u00e8re en \u00e9lectricit\u00e9 gr\u00e2ce \u00e0 l\'effet photovolta\u00efque dans des cellules en silicium. Le rendement des cellules commerciales atteint 20-24 % (monocristallin). Les cellules \u00e0 h\u00e9t\u00e9rojonction et les cellules tandem p\u00e9rovskite-silicium promettent des rendements de 30 % et plus.',
                'Le <strong>solaire thermique</strong> concentre le rayonnement pour chauffer un fluide. Les centrales \u00e0 concentration (CSP) utilisent des miroirs paraboliques ou des tours pour atteindre des temp\u00e9ratures de 400 \u00e0 1 000 \u00b0C, entra\u00eenant des turbines \u00e0 vapeur. Le stockage de chaleur dans des sels fondus permet de produire de l\'\u00e9lectricit\u00e9 la nuit.',
                'L\'<strong>intermittence</strong> est le d\u00e9fi principal du solaire : pas de production la nuit, production r\u00e9duite par temps couvert. Le facteur de charge (production r\u00e9elle/production th\u00e9orique) varie de 10 % (nord de l\'Europe) \u00e0 25 % (d\u00e9serts).'
              ],
              highlight: 'La quantit\u00e9 d\'\u00e9nergie solaire re\u00e7ue par la Terre en une heure suffirait \u00e0 couvrir la consommation mondiale d\'\u00e9nergie pendant un an.'
            },
            {
              title: '\u00c9nergie \u00e9olienne et hydraulique',
              paragraphs: [
                'Les <strong>\u00e9oliennes</strong> convertissent l\'\u00e9nergie cin\u00e9tique du vent en \u00e9lectricit\u00e9. La puissance disponible est proportionnelle au cube de la vitesse du vent : doubler la vitesse du vent multiplie la puissance par huit. La limite de Betz fixe le rendement th\u00e9orique maximal \u00e0 59,3 %. Les \u00e9oliennes modernes atteignent 45-50 % et les plus grandes d\u00e9passent 15 MW avec des rotors de 220 m de diam\u00e8tre.',
                'L\'<strong>\u00e9nergie hydraulique</strong> est la premi\u00e8re source d\'\u00e9lectricit\u00e9 renouvelable mondiale (16 % de la production \u00e9lectrique). Les barrages-r\u00e9servoirs stockent l\'\u00e9nergie potentielle de l\'eau. Les centrales au fil de l\'eau exploitent le d\u00e9bit naturel des cours d\'eau. Les stations de transfert d\'\u00e9nergie par pompage (STEP) pompent l\'eau vers un bassin sup\u00e9rieur en p\u00e9riode de surplus et la turbinent en p\u00e9riode de demande.'
              ],
              highlight: 'La limite de Betz (59,3 %) est \u00e0 l\'\u00e9olien ce que le rendement de Carnot est aux machines thermiques : une limite physique infranchissable.'
            },
            {
              title: 'Biomasse et g\u00e9othermie',
              paragraphs: [
                'La <strong>biomasse</strong> (bois, d\u00e9chets agricoles, biogaz) est la plus ancienne source d\'\u00e9nergie de l\'humanit\u00e9. La m\u00e9thanisation produit du biogaz (60 % m\u00e9thane) par fermentation ana\u00e9robie de mati\u00e8res organiques. Les biocarburants de deuxi\u00e8me g\u00e9n\u00e9ration (lignocellulose) \u00e9vitent la concurrence avec l\'alimentation.',
                'La <strong>g\u00e9othermie</strong> exploite la chaleur interne de la Terre. La g\u00e9othermie de basse \u00e9nergie (< 90 \u00b0C) alimente le chauffage urbain. La g\u00e9othermie de haute \u00e9nergie (> 150 \u00b0C) produit de l\'\u00e9lectricit\u00e9 en Islande, en Italie, aux Philippines et au Kenya. La g\u00e9othermie profonde stimul\u00e9e (EGS) fracture la roche chaude \u00e0 grande profondeur pour cr\u00e9er des r\u00e9servoirs artificiels.'
              ],
              highlight: 'L\'Islande produit 100 % de son \u00e9lectricit\u00e9 \u00e0 partir de sources renouvelables : 70 % hydraulique et 30 % g\u00e9othermie.'
            }
          ],
          quiz: [
            { q: 'Quelle est la limite th\u00e9orique de rendement d\'une \u00e9olienne ?', opts: ['100 %', '75 %', '59,3 % (limite de Betz)', '45 %'], correct: 2, explanation: 'La limite de Betz \u00e9tablit qu\'une \u00e9olienne ne peut capter au maximum que 59,3 % de l\'\u00e9nergie cin\u00e9tique du vent, car le vent doit conserver une vitesse r\u00e9siduelle apr\u00e8s la turbine.' },
            { q: 'Comment la puissance \u00e9olienne varie-t-elle avec la vitesse du vent ?', opts: ['Lin\u00e9airement', 'Au carr\u00e9', 'Au cube', '\u00c0 la puissance quatri\u00e8me'], correct: 2, explanation: 'La puissance disponible dans le vent est proportionnelle au cube de sa vitesse : doubler la vitesse du vent multiplie la puissance par 2\u00b3 = 8.' },
            { q: 'Qu\'est-ce qu\'une STEP ?', opts: ['Une centrale solaire', 'Un type d\'\u00e9olienne', 'Une station de stockage hydraulique par pompage', 'Un r\u00e9seau \u00e9lectrique intelligent'], correct: 2, explanation: 'Une STEP (Station de Transfert d\'\u00c9nergie par Pompage) pompe l\'eau en altitude quand l\'\u00e9lectricit\u00e9 est abondante et la turbine quand la demande est forte.' }
          ],
          definitions: [
            { term: 'Effet photovolta\u00efque', def: 'G\u00e9n\u00e9ration de courant \u00e9lectrique par un mat\u00e9riau semi-conducteur expos\u00e9 \u00e0 la lumi\u00e8re.' },
            { term: 'Limite de Betz', def: 'Rendement maximal th\u00e9orique d\'une \u00e9olienne : 59,3 % de l\'\u00e9nergie cin\u00e9tique du vent.' },
            { term: 'Facteur de charge', def: 'Rapport entre l\'\u00e9nergie effectivement produite et l\'\u00e9nergie th\u00e9orique \u00e0 puissance nominale continue.' },
            { term: 'M\u00e9thanisation', def: 'Production de biogaz par fermentation ana\u00e9robie de mati\u00e8res organiques.' },
            { term: 'STEP', def: 'Station de transfert d\'\u00e9nergie par pompage, stockant l\'\u00e9nergie sous forme d\'eau en altitude.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le co\u00fbt du solaire photovolta\u00efque a \u00e9t\u00e9 divis\u00e9 par plus de 100 depuis 1976. C\'est la courbe d\'apprentissage la plus spectaculaire de l\'histoire de l\'\u00e9nergie.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La plus grande \u00e9olienne du monde (Vestas V236-15.0 MW) a un rotor de 236 m de diam\u00e8tre, soit plus grand que la tour Montparnasse est haute.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le barrage des Trois-Gorges en Chine (22 500 MW) est la plus grande centrale \u00e9lectrique du monde toutes sources confondues.' }
          ]
        },
        {
          slug: 'stockage-energie',
          title: 'Stockage d\'\u00e9nergie',
          description: 'Batteries, hydrog\u00e8ne, stockage m\u00e9canique et thermique.',
          intro: 'Le <strong>stockage d\'\u00e9nergie</strong> est le d\u00e9fi majeur de la transition \u00e9nerg\u00e9tique. Les sources renouvelables (solaire, \u00e9olien) sont intermittentes : il faut stocker l\'\u00e9nergie quand elle est abondante et la restituer quand elle manque.',
          introHighlight: '<strong>La batterie lithium-ion</strong>, invent\u00e9e par John Goodenough, Stanley Whittingham et Akira Yoshino (Nobel 2019), a r\u00e9volutionn\u00e9 le stockage \u00e9lectrochimique.',
          intro2: '',
          sections: [
            {
              title: 'Batteries \u00e9lectrochimiques',
              paragraphs: [
                'La <strong>batterie lithium-ion</strong> stocke l\'\u00e9nergie par intercalation d\'ions lithium entre une cathode (oxyde m\u00e9tallique) et une anode (graphite). Sa densit\u00e9 \u00e9nerg\u00e9tique (250-300 Wh/kg) est sup\u00e9rieure \u00e0 celle des technologies pr\u00e9c\u00e9dentes (plomb-acide : 35 Wh/kg, NiMH : 80 Wh/kg). Les chimies LFP (fer-phosphate, s\u00fbre et durable) et NMC (nickel-mangan\u00e8se-cobalt, haute \u00e9nergie) dominent le march\u00e9.',
                'Les <strong>batteries \u00e0 \u00e9tat solide</strong> remplacent l\'\u00e9lectrolyte liquide par un solide, \u00e9liminant les risques d\'incendie et permettant l\'utilisation d\'anodes en lithium m\u00e9tallique (densit\u00e9 \u00e9nerg\u00e9tique potentiellement doubl\u00e9e). Toyota, QuantumScape et Samsung SDI investissent massivement dans cette technologie.',
                'Les <strong>batteries \u00e0 flux</strong> (vanadium, zinc-brome) stockent l\'\u00e9nergie dans des \u00e9lectrolytes liquides contenus dans des cuves externes. La puissance (taille de la cellule) et la capacit\u00e9 (volume des cuves) sont d\u00e9coupl\u00e9es, ce qui les rend id\u00e9ales pour le stockage stationnaire de grande capacit\u00e9.'
              ],
              highlight: 'Le co\u00fbt des batteries lithium-ion a chut\u00e9 de 1 100 $/kWh en 2010 \u00e0 moins de 140 $/kWh en 2024.'
            },
            {
              title: 'Hydrog\u00e8ne',
              paragraphs: [
                'L\'<strong>hydrog\u00e8ne</strong> est un vecteur \u00e9nerg\u00e9tique produit par \u00e9lectrolyse de l\'eau (hydrog\u00e8ne vert, si l\'\u00e9lectricit\u00e9 est renouvelable). La pile \u00e0 combustible (PAC) reconvertit l\'hydrog\u00e8ne en \u00e9lectricit\u00e9 avec un rendement de 50-60 %. Le rendement global \u00e9lectrolyse-stockage-PAC est cependant modeste (25-35 %), ce qui limite l\'hydrog\u00e8ne aux applications o\u00f9 les batteries ne conviennent pas.',
                'L\'hydrog\u00e8ne est prometteur pour la <strong>d\u00e9carbonation de l\'industrie lourde</strong> (sid\u00e9rurgie, chimie), les transports lourds (camions, trains, navires) et le stockage saisonnier. Le stockage dans des cavernes salines souterraines offre des capacit\u00e9s \u00e9normes \u00e0 faible co\u00fbt.'
              ],
              highlight: 'L\'hydrog\u00e8ne produit par \u00e9lectrolyse avec de l\'\u00e9lectricit\u00e9 renouvelable est dit vert. Produit \u00e0 partir de gaz naturel, il est dit gris.'
            },
            {
              title: 'Stockage m\u00e9canique et thermique',
              paragraphs: [
                'Le <strong>stockage par pompage hydraulique</strong> (STEP) repr\u00e9sente 95 % du stockage d\'\u00e9nergie mondial install\u00e9. Le <strong>stockage par air comprim\u00e9</strong> (CAES) comprime l\'air dans des cavernes souterraines. Les <strong>volants d\'inertie</strong> stockent l\'\u00e9nergie cin\u00e9tique dans des rotors tournant \u00e0 grande vitesse sous vide, offrant une r\u00e9ponse ultra-rapide pour la r\u00e9gulation de fr\u00e9quence.',
                'Le <strong>stockage thermique</strong> accumule la chaleur dans des mat\u00e9riaux denses (sels fondus, b\u00e9ton, c\u00e9ramique) ou par changement de phase (MCP). Les centrales solaires \u00e0 concentration stockent la chaleur dans des sels fondus \u00e0 565 \u00b0C pendant 10 \u00e0 15 heures, permettant la production nocturne d\'\u00e9lectricit\u00e9.'
              ],
              highlight: 'Les STEP repr\u00e9sentent 95 % de la capacit\u00e9 de stockage \u00e9lectrique install\u00e9e dans le monde.'
            }
          ],
          quiz: [
            { q: 'Quelle technologie de batterie domine le march\u00e9 actuel ?', opts: ['Plomb-acide', 'Nickel-cadmium', 'Lithium-ion', 'Sodium-soufre'], correct: 2, explanation: 'La batterie lithium-ion domine le march\u00e9 gr\u00e2ce \u00e0 sa densit\u00e9 \u00e9nerg\u00e9tique \u00e9lev\u00e9e, sa bonne dur\u00e9e de vie et la baisse continue de son co\u00fbt.' },
            { q: 'Quel est le rendement global de la cha\u00eene hydrog\u00e8ne (\u00e9lectrolyse \u2192 stockage \u2192 PAC) ?', opts: ['60-70 %', '45-55 %', '25-35 %', '10-15 %'], correct: 2, explanation: 'Le rendement global \u00e9lectrolyse-stockage-pile \u00e0 combustible est de 25-35 %, ce qui limite l\'hydrog\u00e8ne aux usages o\u00f9 les alternatives \u00e9lectriques directes ne sont pas possibles.' },
            { q: 'Quelle forme de stockage repr\u00e9sente 95 % de la capacit\u00e9 mondiale ?', opts: ['Batteries lithium-ion', 'Hydrog\u00e8ne', 'STEP (pompage hydraulique)', 'Air comprim\u00e9'], correct: 2, explanation: 'Les stations de transfert d\'\u00e9nergie par pompage (STEP) repr\u00e9sentent environ 95 % de la capacit\u00e9 de stockage \u00e9lectrique install\u00e9e dans le monde.' }
          ],
          definitions: [
            { term: 'Densit\u00e9 \u00e9nerg\u00e9tique', def: 'Quantit\u00e9 d\'\u00e9nergie stockable par unit\u00e9 de masse (Wh/kg) ou de volume (Wh/L).' },
            { term: '\u00c9lectrolyse', def: 'Proc\u00e9d\u00e9 utilisant un courant \u00e9lectrique pour d\u00e9composer l\'eau en hydrog\u00e8ne et oxyg\u00e8ne.' },
            { term: 'Pile \u00e0 combustible', def: 'Dispositif convertissant l\'\u00e9nergie chimique de l\'hydrog\u00e8ne en \u00e9lectricit\u00e9 et eau.' },
            { term: 'Batterie \u00e0 flux', def: 'Batterie dont l\'\u00e9nergie est stock\u00e9e dans des \u00e9lectrolytes liquides ext\u00e9rieurs, d\u00e9couplant puissance et capacit\u00e9.' },
            { term: 'Volant d\'inertie', def: 'Dispositif stockant l\'\u00e9nergie cin\u00e9tique dans un rotor massif en rotation rapide.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'John Goodenough, co-inventeur de la batterie lithium-ion, a re\u00e7u le prix Nobel de chimie en 2019 \u00e0 l\'\u00e2ge de 97 ans, faisant de lui le plus vieux laur\u00e9at Nobel de l\'histoire.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La Gigafactory de Tesla au Nevada peut produire 37 GWh de batteries par an, assez pour \u00e9quiper environ 500 000 v\u00e9hicules \u00e9lectriques.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La gravit\u00e9 peut stocker de l\'\u00e9nergie : des start-ups proposent de lever des blocs de b\u00e9ton avec de l\'\u00e9lectricit\u00e9 excedentaire et de les laisser redescendre pour produire de l\'\u00e9lectricit\u00e9 \u00e0 la demande.' }
          ]
        },
        {
          slug: 'reseaux-electriques',
          title: 'R\u00e9seaux \u00e9lectriques',
          description: 'Transport, distribution, \u00e9quilibre offre-demande et r\u00e9seaux intelligents.',
          intro: 'Le <strong>r\u00e9seau \u00e9lectrique</strong> est l\'infrastructure qui relie les centrales de production aux consommateurs. C\'est la plus grande machine jamais construite par l\'humanit\u00e9 : un syst\u00e8me interconnect\u00e9 fonctionnant en temps r\u00e9el o\u00f9 l\'offre doit en permanence \u00e9galer la demande.',
          introHighlight: '<strong>L\'\u00e9lectricit\u00e9 ne se stocke pas naturellement</strong> sur le r\u00e9seau : \u00e0 chaque instant, la production doit exactement \u00e9galer la consommation, sous peine de variations de fr\u00e9quence pouvant mener au black-out.',
          intro2: '',
          sections: [
            {
              title: 'Transport et distribution',
              paragraphs: [
                'Le transport d\'\u00e9lectricit\u00e9 utilise la <strong>haute tension</strong> (225-400 kV en France, jusqu\'\u00e0 1 100 kV en Chine) pour minimiser les pertes en ligne (P = RI\u00b2). \u00c0 puissance \u00e9gale, doubler la tension divise le courant par deux et les pertes par quatre. Les transformateurs convertissent la tension entre les diff\u00e9rents niveaux du r\u00e9seau.',
                'Le r\u00e9seau se structure en niveaux : <strong>transport</strong> (HTB, 63-400 kV, grandes distances), <strong>r\u00e9partition</strong> (HTA, 15-20 kV, distribution r\u00e9gionale) et <strong>distribution</strong> (BT, 230-400 V, alimentation des consommateurs). En France, RTE g\u00e8re le transport (100 000 km de lignes) et Enedis la distribution (1,4 million de km).',
                'Le <strong>courant alternatif</strong> (AC) domine les r\u00e9seaux gr\u00e2ce aux transformateurs qui changent facilement la tension. Le <strong>courant continu haute tension</strong> (HVDC) est utilis\u00e9 pour les liaisons sous-marines et les tr\u00e8s longues distances o\u00f9 les pertes AC seraient excessives.'
              ],
              highlight: 'Les pertes sur le r\u00e9seau \u00e9lectrique fran\u00e7ais repr\u00e9sentent environ 6 % de l\'\u00e9nergie transport\u00e9e.'
            },
            {
              title: '\u00c9quilibre et fr\u00e9quence',
              paragraphs: [
                'La <strong>fr\u00e9quence du r\u00e9seau</strong> (50 Hz en Europe, 60 Hz en Am\u00e9rique) est l\'indicateur instantan\u00e9 de l\'\u00e9quilibre offre-demande. Si la consommation d\u00e9passe la production, la fr\u00e9quence baisse (les alternateurs ralentissent). Si la production d\u00e9passe la consommation, la fr\u00e9quence monte. La tol\u00e9rance est de \u00b10,05 Hz en fonctionnement normal.',
                'Le gestionnaire du r\u00e9seau dispose de r\u00e9serves de puissance class\u00e9es par temps de r\u00e9ponse : r\u00e9serve <strong>primaire</strong> (automatique, < 30 s), r\u00e9serve <strong>secondaire</strong> (automatique, 5-15 min) et r\u00e9serve <strong>tertiaire</strong> (manuelle, > 15 min). Ces m\u00e9canismes garantissent la stabilit\u00e9 du syst\u00e8me.'
              ],
              highlight: 'Le r\u00e9seau europ\u00e9en synchrone ENTSO-E relie 35 pays et dessert 500 millions de personnes \u00e0 50 Hz.'
            },
            {
              title: 'R\u00e9seaux intelligents (smart grids)',
              paragraphs: [
                'Les <strong>smart grids</strong> int\u00e8grent les technologies num\u00e9riques (compteurs communicants, capteurs, automatisation) pour g\u00e9rer un r\u00e9seau de plus en plus complexe. Les sources de production d\u00e9centralis\u00e9es et intermittentes (solaire, \u00e9olien) transforment le r\u00e9seau unidirectionnel traditionnel en un syst\u00e8me bidirectionnel o\u00f9 chaque consommateur peut aussi \u00eatre producteur (prosommateur).',
                'La <strong>flexibilit\u00e9 de la demande</strong> (demand response) d\u00e9place la consommation vers les heures o\u00f9 la production est abondante : recharge de v\u00e9hicules \u00e9lectriques, chauffe-eau, processus industriels. Les <strong>communaut\u00e9s \u00e9nerg\u00e9tiques</strong> permettent le partage local d\'\u00e9lectricit\u00e9 renouvelable entre voisins.'
              ],
              highlight: 'Le compteur Linky, d\u00e9ploy\u00e9 sur 35 millions de foyers fran\u00e7ais, permet la t\u00e9l\u00e9-releve et la gestion en temps r\u00e9el de la consommation.'
            }
          ],
          quiz: [
            { q: 'Pourquoi transporte-t-on l\'\u00e9lectricit\u00e9 en haute tension ?', opts: ['Pour aller plus vite', 'Pour r\u00e9duire les pertes en ligne (P = RI\u00b2)', 'Pour \u00e9conomiser du cuivre', 'Pour des raisons historiques'], correct: 1, explanation: '\u00c0 puissance constante, augmenter la tension r\u00e9duit le courant et donc les pertes par effet Joule (P = RI\u00b2). Doubler la tension divise les pertes par quatre.' },
            { q: 'Que se passe-t-il quand la consommation d\u00e9passe la production sur le r\u00e9seau ?', opts: ['La tension augmente', 'La fr\u00e9quence baisse', 'Le r\u00e9seau s\'adapte automatiquement', 'Rien de perceptible'], correct: 1, explanation: 'Lorsque la demande exc\u00e8de la production, les alternateurs ralentissent et la fr\u00e9quence du r\u00e9seau baisse en dessous de 50 Hz.' },
            { q: 'Qu\'est-ce que la flexibilit\u00e9 de la demande ?', opts: ['Augmenter la production', 'D\u00e9placer la consommation vers les heures creuses', 'R\u00e9duire la consommation totale', 'Stocker l\'\u00e9lectricit\u00e9'], correct: 1, explanation: 'La flexibilit\u00e9 de la demande consiste \u00e0 d\u00e9placer la consommation \u00e9lectrique vers les p\u00e9riodes o\u00f9 la production est abondante et peu ch\u00e8re.' }
          ],
          definitions: [
            { term: 'Fr\u00e9quence du r\u00e9seau', def: 'Indicateur de l\'\u00e9quilibre production-consommation. 50 Hz en Europe, 60 Hz en Am\u00e9rique.' },
            { term: 'Transformateur', def: 'Dispositif \u00e9lectromagn\u00e9tique convertissant la tension alternative d\'un niveau \u00e0 un autre.' },
            { term: 'HVDC', def: 'Courant continu haute tension utilis\u00e9 pour les liaisons longue distance ou sous-marines.' },
            { term: 'Smart grid', def: 'R\u00e9seau \u00e9lectrique int\u00e9grant des technologies num\u00e9riques pour une gestion intelligente et bidirectionnelle.' },
            { term: 'Prosommateur', def: 'Consommateur qui est aussi producteur d\'\u00e9lectricit\u00e9 (panneaux solaires, \u00e9oliennes).' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le black-out du nord-est des \u00c9tats-Unis et du Canada en 2003 a priv\u00e9 55 millions de personnes d\'\u00e9lectricit\u00e9 pendant deux jours, \u00e0 cause d\'un contact entre une ligne et un arbre en Ohio.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Nikola Tesla a d\u00e9fendu le courant alternatif contre Thomas Edison qui pr\u00f4nait le courant continu. Tesla a gagn\u00e9 la guerre des courants et le r\u00e9seau mondial fonctionne en AC.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le r\u00e9seau \u00e9lectrique fran\u00e7ais transporte l\'\u00e9lectricit\u00e9 \u00e0 la vitesse de la lumi\u00e8re (environ 200 000 km/s dans les c\u00e2bles), mais les \u00e9lectrons eux-m\u00eames ne se d\u00e9placent que de quelques centim\u00e8tres par seconde.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 5 — Science des materiaux
    // ──────────────────────────────────────────────
    {
      slug: 'materiaux',
      title: 'Science des mat\u00e9riaux',
      description: 'M\u00e9taux, polym\u00e8res, c\u00e9ramiques, composites et nanomat\u00e9riaux.',
      lessons: [
        {
          slug: 'metaux-et-alliages',
          title: 'M\u00e9taux et alliages',
          description: 'Structure cristalline, propri\u00e9t\u00e9s m\u00e9caniques, traitements thermiques et aciers.',
          intro: 'Les <strong>m\u00e9taux</strong> restent les mat\u00e9riaux les plus utilis\u00e9s en ing\u00e9nierie structurale gr\u00e2ce \u00e0 leur combinaison unique de r\u00e9sistance, de ductilit\u00e9 et de facilit\u00e9 de mise en forme. Comprendre leur structure atomique permet d\'optimiser leurs propri\u00e9t\u00e9s.',
          introHighlight: '<strong>Les propri\u00e9t\u00e9s d\'un m\u00e9tal</strong> d\u00e9pendent de sa structure cristalline, de ses d\u00e9fauts et de sa composition chimique. L\'art du m\u00e9tallurgiste est de contr\u00f4ler ces param\u00e8tres.',
          intro2: '',
          sections: [
            {
              title: 'Structure cristalline',
              paragraphs: [
                'Les m\u00e9taux sont constitu\u00e9s d\'atomes arrang\u00e9s en <strong>r\u00e9seaux cristallins</strong> r\u00e9guliers. Les trois structures les plus courantes sont : <strong>cubique centr\u00e9</strong> (CC : fer \u03b1, chrome, tungst\u00e8ne), <strong>cubique \u00e0 faces centr\u00e9es</strong> (CFC : aluminium, cuivre, or, nickel) et <strong>hexagonale compacte</strong> (HC : titane, zinc, magn\u00e9sium). La structure d\u00e9termine en grande partie les propri\u00e9t\u00e9s m\u00e9caniques.',
                'Les <strong>d\u00e9fauts cristallins</strong> — lacunes, dislocations, joints de grains — gouvernent le comportement m\u00e9canique. Les <strong>dislocations</strong> sont des d\u00e9fauts lin\u00e9aires dont le mouvement permet la d\u00e9formation plastique. Bloquer les dislocations (par \u00e9crouissage, pr\u00e9cipit\u00e9s ou solution solide) augmente la duret\u00e9 et la r\u00e9sistance m\u00e9canique.',
                'Les m\u00e9taux polycristallins sont constitu\u00e9s de <strong>grains</strong> (cristaux d\'orientation diff\u00e9rente) s\u00e9par\u00e9s par des joints de grains. La taille des grains influence fortement les propri\u00e9t\u00e9s : des grains fins augmentent la r\u00e9sistance (loi de Hall-Petch).'
              ],
              highlight: 'La loi de Hall-Petch pr\u00e9dit que la r\u00e9sistance d\'un m\u00e9tal augmente quand la taille de ses grains diminue.'
            },
            {
              title: 'Aciers et fontes',
              paragraphs: [
                'L\'<strong>acier</strong> est un alliage fer-carbone contenant moins de 2 % de carbone. C\'est le m\u00e9tal le plus produit au monde (1,9 milliard de tonnes par an). Le carbone durcit l\'acier mais r\u00e9duit sa ductilit\u00e9 et sa soudabilit\u00e9. Les aciers \u00e0 bas carbone (< 0,25 %) sont ductiles et soudables ; les aciers \u00e0 haut carbone (> 0,6 %) sont durs mais cassants.',
                'Les <strong>aciers inoxydables</strong> contiennent au moins 10,5 % de chrome, qui forme un film d\'oxyde passif prot\u00e9geant contre la corrosion. Le type 304 (18 % Cr, 8 % Ni) est le plus courant. Les aciers \u00e0 haute r\u00e9sistance (HSLA), micro-alli\u00e9s au niobium, vanadium ou titane, offrent un excellent rapport r\u00e9sistance/poids pour l\'automobile et les pipelines.'
              ],
              highlight: 'L\'acier est le mat\u00e9riau le plus recycl\u00e9 au monde : 80 % de l\'acier produit est recycl\u00e9 sans perte de qualit\u00e9.'
            },
            {
              title: 'Traitements thermiques',
              paragraphs: [
                'Les <strong>traitements thermiques</strong> modifient la microstructure des m\u00e9taux pour ajuster leurs propri\u00e9t\u00e9s. La <strong>trempe</strong> (refroidissement rapide depuis haute temp\u00e9rature) durcit l\'acier en formant de la martensite, phase tr\u00e8s dure mais fragile. Le <strong>revenu</strong> (r\u00e9chauffage mod\u00e9r\u00e9 apr\u00e8s trempe) r\u00e9duit la fragilit\u00e9 tout en conservant une bonne duret\u00e9.',
                'Le <strong>recuit</strong> (chauffage lent suivi d\'un refroidissement lent) adoucit le m\u00e9tal et restaure sa ductilit\u00e9 apr\u00e8s \u00e9crouissage. La <strong>c\u00e9mentation</strong> enrichit la surface en carbone pour cr\u00e9er une couche ext\u00e9rieure dure sur un c\u0153ur ductile, id\u00e9al pour les engrenages soumis \u00e0 l\'usure et aux chocs.'
              ],
              highlight: 'Les \u00e9p\u00e9es damas\u00e9es et les sabres japonais exploitaient des traitements thermiques sophistiqu\u00e9s d\u00e8s le Moyen \u00c2ge.'
            }
          ],
          quiz: [
            { q: 'Quelle structure cristalline est celle de l\'aluminium ?', opts: ['Cubique centr\u00e9', 'Cubique \u00e0 faces centr\u00e9es', 'Hexagonale compacte', 'T\u00e9tragonale'], correct: 1, explanation: 'L\'aluminium a une structure cubique \u00e0 faces centr\u00e9es (CFC), comme le cuivre, l\'or et le nickel. Cette structure favorise la ductilit\u00e9.' },
            { q: 'Quel traitement thermique durcit l\'acier en formant de la martensite ?', opts: ['Le recuit', 'Le revenu', 'La trempe', 'La c\u00e9mentation'], correct: 2, explanation: 'La trempe (refroidissement rapide) transforme l\'aust\u00e9nite en martensite, phase tr\u00e8s dure obtenue par distorsion du r\u00e9seau cristallin du fer.' },
            { q: 'Quel \u00e9l\u00e9ment rend l\'acier inoxydable ?', opts: ['Le nickel', 'Le carbone', 'Le chrome (minimum 10,5 %)', 'Le mangan\u00e8se'], correct: 2, explanation: 'Le chrome (au moins 10,5 %) forme un film d\'oxyde de chrome passif \u00e0 la surface de l\'acier, le prot\u00e9geant de la corrosion.' }
          ],
          definitions: [
            { term: 'Alliage', def: 'M\u00e9lange homog\u00e8ne de deux \u00e9l\u00e9ments ou plus, dont au moins un m\u00e9tal, poss\u00e9dant des propri\u00e9t\u00e9s diff\u00e9rentes de ses constituants purs.' },
            { term: 'Dislocation', def: 'D\u00e9faut lin\u00e9aire du r\u00e9seau cristallin dont le mouvement permet la d\u00e9formation plastique des m\u00e9taux.' },
            { term: 'Martensite', def: 'Phase m\u00e9tastable tr\u00e8s dure de l\'acier, obtenue par trempe rapide depuis la temp\u00e9rature d\'aust\u00e9nitisation.' },
            { term: 'Trempe', def: 'Traitement thermique consistant \u00e0 refroidir rapidement un m\u00e9tal pour obtenir des microstructures hors \u00e9quilibre.' },
            { term: 'Joint de grains', def: 'Interface entre deux cristaux d\'orientations diff\u00e9rentes dans un m\u00e9tal polycristallin.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'L\'aluminium \u00e9tait plus pr\u00e9cieux que l\'or au XIXe si\u00e8cle. Napol\u00e9on III utilisait de la vaisselle en aluminium pour ses invit\u00e9s de marque, tandis que les autres convives devaient se contenter d\'or et d\'argent.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le titane est aussi r\u00e9sistant que l\'acier mais 45 % plus l\u00e9ger. C\'est pourquoi il est utilis\u00e9 en a\u00e9ronautique, pour les implants m\u00e9dicaux et dans les v\u00e9los haut de gamme.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les forgerons m\u00e9di\u00e9vaux ma\u00eetrisaient empiriquement la trempe, le revenu et la c\u00e9mentation bien avant que la science ne les explique au XXe si\u00e8cle.' }
          ]
        },
        {
          slug: 'polymeres',
          title: 'Polym\u00e8res',
          description: 'Thermoplastiques, thermodurcissables, \u00e9lastom\u00e8res et mise en forme.',
          intro: 'Les <strong>polym\u00e8res</strong> (plastiques) sont des mat\u00e9riaux constitu\u00e9s de longues cha\u00eenes mol\u00e9culaires. L\u00e9gers, isolants, faciles \u00e0 mettre en forme et peu co\u00fbteux, ils repr\u00e9sentent plus de 400 millions de tonnes produites par an.',
          introHighlight: '<strong>Les polym\u00e8res ne sont pas de simples plastiques</strong> : du Kevlar des gilets pare-balles au polyester des v\u00eatements techniques, ils couvrent un spectre de propri\u00e9t\u00e9s remarquable.',
          intro2: '',
          sections: [
            {
              title: 'Classification des polym\u00e8res',
              paragraphs: [
                'Les <strong>thermoplastiques</strong> ramollissent \u00e0 la chaleur et peuvent \u00eatre refondus et recycl\u00e9s. Les plus courants sont le poly\u00e9thyl\u00e8ne (PE, emballages), le polypropyl\u00e8ne (PP, pi\u00e8ces automobiles), le polystyr\u00e8ne (PS, emballages) et le PET (bouteilles). Ils repr\u00e9sentent 80 % de la production mondiale de plastiques.',
                'Les <strong>thermodurcissables</strong> (r\u00e9sines \u00e9poxy, polyester, ph\u00e9nolique) forment un r\u00e9seau tridimensionnel irr\u00e9versible lors de la r\u00e9ticulation. Plus rigides et r\u00e9sistants \u00e0 la chaleur que les thermoplastiques, ils ne peuvent pas \u00eatre refondus. Ils servent de matrice pour les composites hautes performances.',
                'Les <strong>\u00e9lastom\u00e8res</strong> (caoutchoucs naturel et synth\u00e9tique, silicone) sont des polym\u00e8res l\u00e9g\u00e8rement r\u00e9ticul\u00e9s capables de subir de grandes d\u00e9formations \u00e9lastiques (jusqu\'\u00e0 500-1 000 %). La vulcanisation au soufre, d\u00e9couverte par Charles Goodyear en 1839, transforme le caoutchouc brut collant en mat\u00e9riau \u00e9lastique et durable.'
              ],
              highlight: 'La vulcanisation par Charles Goodyear (1839) a transform\u00e9 le caoutchouc, mat\u00e9riau collant et inutilisable, en produit industriel indispensable.'
            },
            {
              title: 'Propri\u00e9t\u00e9s et mise en forme',
              paragraphs: [
                'Les propri\u00e9t\u00e9s des polym\u00e8res d\u00e9pendent de la <strong>longueur des cha\u00eenes</strong> (masse molaire), de leur <strong>cristallinit\u00e9</strong> (arrangement r\u00e9gulier ou d\u00e9sordonn\u00e9), des <strong>additifs</strong> (plastifiants, charges, colorants, stabilisants UV) et de la <strong>temp\u00e9rature</strong>. Au-dessous de la temp\u00e9rature de transition vitreuse (Tg), le polym\u00e8re est rigide et fragile ; au-dessus, il devient souple.',
                'Les principaux proc\u00e9d\u00e9s de mise en forme sont l\'<strong>injection</strong> (pi\u00e8ces en grande s\u00e9rie), l\'<strong>extrusion</strong> (profil\u00e9s, tubes, films), le <strong>soufflage</strong> (bouteilles) et le <strong>thermoformage</strong> (emballages). L\'impression 3D par d\u00e9p\u00f4t de fil fondu (FDM) est essentiellement de l\'extrusion localis\u00e9e de polym\u00e8re thermoplastique.'
              ],
              highlight: 'L\'injection plastique permet de produire des pi\u00e8ces complexes en quelques secondes, avec des cadences de milliers de pi\u00e8ces par heure.'
            },
            {
              title: 'Enjeux environnementaux',
              paragraphs: [
                'La <strong>pollution plastique</strong> est un d\u00e9fi mondial : 8 millions de tonnes de plastique finissent dans les oc\u00e9ans chaque ann\u00e9e. Seuls 9 % des plastiques produits ont \u00e9t\u00e9 recycl\u00e9s dans l\'histoire. Le recyclage m\u00e9canique d\u00e9grade les propri\u00e9t\u00e9s \u00e0 chaque cycle (downcycling).',
                'Les <strong>bioplastiques</strong> (PLA, PHA) sont produits \u00e0 partir de biomasse (amidon, sucre) et peuvent \u00eatre biod\u00e9gradables. Le recyclage <strong>chimique</strong> (d\u00e9polym\u00e9risation) permet de retrouver les monom\u00e8res d\'origine et de produire du polym\u00e8re vierge \u00e0 partir de d\u00e9chets, offrant une voie prometteuse vers l\'\u00e9conomie circulaire.'
              ],
              highlight: 'Le PET des bouteilles peut \u00eatre recycl\u00e9 chimiquement un nombre illimit\u00e9 de fois, retrouvant la qualit\u00e9 du mat\u00e9riau vierge.'
            }
          ],
          quiz: [
            { q: 'Quelle est la diff\u00e9rence fondamentale entre thermoplastique et thermodurcissable ?', opts: ['La couleur', 'Le thermoplastique peut \u00eatre refondu, pas le thermodurcissable', 'Le thermodurcissable est plus l\u00e9ger', 'Le thermoplastique r\u00e9siste mieux \u00e0 la chaleur'], correct: 1, explanation: 'Les thermoplastiques ramollissent \u00e0 la chaleur et peuvent \u00eatre refondus. Les thermodurcissables forment un r\u00e9seau irr\u00e9versible et ne peuvent plus \u00eatre fondus apr\u00e8s r\u00e9ticulation.' },
            { q: 'Qu\'est-ce que la vulcanisation ?', opts: ['Un proc\u00e9d\u00e9 de moulage', 'La r\u00e9ticulation du caoutchouc par le soufre', 'Un traitement de surface', 'Un type de recyclage'], correct: 1, explanation: 'La vulcanisation, d\u00e9couverte par Goodyear en 1839, cr\u00e9e des ponts soufre entre les cha\u00eenes du caoutchouc, le rendant \u00e9lastique et r\u00e9sistant.' },
            { q: 'Quel pourcentage des plastiques produits a historiquement \u00e9t\u00e9 recycl\u00e9 ?', opts: ['Environ 50 %', 'Environ 30 %', 'Environ 9 %', 'Environ 1 %'], correct: 2, explanation: 'Seulement environ 9 % des plastiques produits dans l\'histoire ont \u00e9t\u00e9 recycl\u00e9s. Le reste a \u00e9t\u00e9 mis en d\u00e9charge, incin\u00e9r\u00e9 ou dispers\u00e9 dans l\'environnement.' }
          ],
          definitions: [
            { term: 'Polym\u00e8re', def: 'Macromol\u00e9cule form\u00e9e par la r\u00e9p\u00e9tition d\'unit\u00e9s \u00e9l\u00e9mentaires appel\u00e9es monom\u00e8res.' },
            { term: 'Transition vitreuse (Tg)', def: 'Temp\u00e9rature en dessous de laquelle un polym\u00e8re amorphe passe de l\'\u00e9tat souple \u00e0 l\'\u00e9tat rigide et fragile.' },
            { term: 'R\u00e9ticulation', def: 'Formation de liaisons chimiques entre cha\u00eenes polym\u00e8res, cr\u00e9ant un r\u00e9seau tridimensionnel irr\u00e9versible.' },
            { term: 'Injection plastique', def: 'Proc\u00e9d\u00e9 de mise en forme o\u00f9 le polym\u00e8re fondu est inject\u00e9 sous pression dans un moule.' },
            { term: 'Bioplastique', def: 'Polym\u00e8re d\'origine biosourc\u00e9e (biomasse) et/ou biod\u00e9gradable.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Kevlar, utilis\u00e9 dans les gilets pare-balles, a \u00e9t\u00e9 d\u00e9couvert par Stephanie Kwolek chez DuPont en 1965. Il est cinq fois plus r\u00e9sistant que l\'acier \u00e0 poids \u00e9gal.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La bak\u00e9lite (1907) est le premier plastique enti\u00e8rement synth\u00e9tique de l\'histoire. Son inventeur, Leo Baekeland, a donn\u00e9 le coup d\'envoi de l\'\u00e8re des plastiques.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Un sac plastique met 400 ans \u00e0 se d\u00e9grader dans l\'environnement. Une bouteille PET met environ 450 ans. Ces plastiques se fragmentent en microplastiques omnipr\u00e9sents.' }
          ]
        },
        {
          slug: 'ceramiques',
          title: 'C\u00e9ramiques',
          description: 'C\u00e9ramiques traditionnelles, techniques, bioc\u00e9ramiques et verres.',
          intro: 'Les <strong>c\u00e9ramiques</strong> sont des mat\u00e9riaux inorganiques non m\u00e9talliques, g\u00e9n\u00e9ralement obtenus par frittage de poudres \u00e0 haute temp\u00e9rature. Tr\u00e8s dures, r\u00e9fractaires et r\u00e9sistantes \u00e0 la corrosion, elles sont aussi fragiles : c\'est leur principal inconv\u00e9nient.',
          introHighlight: '<strong>Les c\u00e9ramiques techniques</strong> ne sont pas de simples poteries : elles prot\u00e8gent les navettes spatiales de la chaleur de rentr\u00e9e, \u00e9quipent les moteurs \u00e0 r\u00e9action et remplacent les articulations humaines.',
          intro2: '',
          sections: [
            {
              title: 'C\u00e9ramiques traditionnelles et techniques',
              paragraphs: [
                'Les <strong>c\u00e9ramiques traditionnelles</strong> (poterie, porcelaine, briques, tuiles) sont fabriqu\u00e9es \u00e0 partir d\'argiles naturelles depuis le N\u00e9olithique. La porcelaine chinoise, cuite \u00e0 1 300 \u00b0C, repr\u00e9sente un sommet de ma\u00eetrise technique atteint il y a plus de mille ans.',
                'Les <strong>c\u00e9ramiques techniques</strong> (alumine Al\u2082O\u2083, zircone ZrO\u2082, nitrure de silicium Si\u2083N\u2084, carbure de silicium SiC) sont con\u00e7ues pour des applications exigeantes. L\'alumine est utilis\u00e9e pour les implants dentaires et les outils de coupe. La zircone poss\u00e8de un m\u00e9canisme de renforcement unique : la transformation martensitique absorbe l\'\u00e9nergie des fissures.',
                'Les c\u00e9ramiques sont assembl\u00e9es par <strong>frittage</strong> : la poudre comprim\u00e9e est chauff\u00e9e \u00e0 haute temp\u00e9rature (1 200-2 000 \u00b0C) sans atteindre la fusion. Les grains se soudent par diffusion atomique, densifiant le mat\u00e9riau. Le frittage flash (SPS) utilise un courant \u00e9lectrique puls\u00e9 pour r\u00e9duire consid\u00e9rablement le temps et la temp\u00e9rature de frittage.'
              ],
              highlight: 'La zircone poss\u00e8de un m\u00e9canisme d\'auto-r\u00e9paration unique : les fissures d\u00e9clenchent une transformation cristalline qui les stoppe.'
            },
            {
              title: 'Le verre',
              paragraphs: [
                'Le <strong>verre</strong> est un mat\u00e9riau c\u00e9ramique amorphe (non cristallin) obtenu par refroidissement rapide d\'un liquide. Le verre \u00e0 vitre (silico-sodo-calcique : SiO\u2082 + Na\u2082O + CaO) est le plus courant. Le verre borosilicate (Pyrex) r\u00e9siste aux chocs thermiques. Le verre tremp\u00e9 (refroidissement rapide des surfaces) est 4 \u00e0 5 fois plus r\u00e9sistant que le verre recuit.',
                'Le <strong>Gorilla Glass</strong> (Corning) et les verres renforc\u00e9s chimiquement par \u00e9change ionique (remplacement d\'ions sodium par des ions potassium plus gros dans la couche de surface) prot\u00e8gent les \u00e9crans de smartphones contre les rayures et les impacts. Les fibres optiques en verre ultra-pur transmettent la lumi\u00e8re sur des milliers de kilom\u00e8tres avec des pertes minimes.'
              ],
              highlight: 'Les fibres optiques transmettent la lumi\u00e8re avec si peu de pertes qu\'on pourrait voir \u00e0 travers un bloc de ce verre de 20 km d\'\u00e9paisseur.'
            },
            {
              title: 'Bioc\u00e9ramiques',
              paragraphs: [
                'Les <strong>bioc\u00e9ramiques</strong> sont con\u00e7ues pour interagir avec les tissus vivants. L\'hydroxyapatite (principal composant min\u00e9ral de l\'os) est utilis\u00e9e comme rev\u00eatement sur les implants en titane pour favoriser l\'ost\u00e9oint\u00e9gration. L\'alumine et la zircone remplacent les surfaces articulaires (proth\u00e8ses de hanche et de genou) gr\u00e2ce \u00e0 leur excellente r\u00e9sistance \u00e0 l\'usure et leur biocompatibilit\u00e9.',
                'Les <strong>c\u00e9ramiques bioactives</strong> (Bioglass, invent\u00e9 par Larry Hench en 1969) forment un lien chimique direct avec l\'os, stimulant sa r\u00e9g\u00e9n\u00e9ration. Les scaffolds c\u00e9ramiques poreux servent de support \u00e0 la croissance osseuse en ing\u00e9nierie tissulaire, se r\u00e9sorbant progressivement \u00e0 mesure que l\'os naturel les remplace.'
              ],
              highlight: 'Le Bioglass de Larry Hench est le premier mat\u00e9riau synth\u00e9tique capable de se lier chimiquement \u00e0 l\'os vivant.'
            }
          ],
          quiz: [
            { q: 'Quel est le principal d\u00e9faut des c\u00e9ramiques ?', opts: ['La faible duret\u00e9', 'La corrosion', 'La fragilit\u00e9 (absence de d\u00e9formation plastique)', 'La faible r\u00e9sistance thermique'], correct: 2, explanation: 'Les c\u00e9ramiques sont tr\u00e8s dures et r\u00e9sistantes mais fragiles : elles se fracturent sans d\u00e9formation plastique pr\u00e9alable, contrairement aux m\u00e9taux.' },
            { q: 'Qu\'est-ce que le frittage ?', opts: ['La fusion compl\u00e8te du mat\u00e9riau', 'La consolidation de poudres par chauffage sans fusion', 'Un polissage de surface', 'Un traitement chimique'], correct: 1, explanation: 'Le frittage consolide une poudre comprim\u00e9e par chauffage \u00e0 haute temp\u00e9rature, sans atteindre la fusion. Les grains se soudent par diffusion atomique.' },
            { q: 'Comment le Gorilla Glass des smartphones est-il renforc\u00e9 ?', opts: ['Par trempe thermique', 'Par ajout de carbone', 'Par \u00e9change ionique en surface', 'Par laminage'], correct: 2, explanation: 'Le Gorilla Glass est renforc\u00e9 par \u00e9change ionique : des ions potassium (plus gros) remplacent les ions sodium en surface, cr\u00e9ant une couche en compression qui augmente la r\u00e9sistance.' }
          ],
          definitions: [
            { term: 'Frittage', def: 'Proc\u00e9d\u00e9 de consolidation d\'une poudre par chauffage sans atteindre la fusion, les grains se soudant par diffusion.' },
            { term: 'R\u00e9fractaire', def: 'Mat\u00e9riau capable de r\u00e9sister \u00e0 de tr\u00e8s hautes temp\u00e9ratures sans se d\u00e9grader.' },
            { term: 'Ost\u00e9oint\u00e9gration', def: 'Connexion directe entre un implant et l\'os vivant, sans tissu fibreux interm\u00e9diaire.' },
            { term: 'Verre tremp\u00e9', def: 'Verre renforc\u00e9 par refroidissement rapide des surfaces, cr\u00e9ant des contraintes de compression qui augmentent la r\u00e9sistance.' },
            { term: 'Bioc\u00e9ramique', def: 'C\u00e9ramique con\u00e7ue pour interagir de mani\u00e8re b\u00e9n\u00e9fique avec les tissus biologiques.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les tuiles thermiques de la navette spatiale \u00e9taient en c\u00e9ramique de silice si isolantes qu\'on pouvait les tenir par les bords quelques secondes apr\u00e8s cuisson \u00e0 1 260 \u00b0C.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le diamant est techniquement une c\u00e9ramique (compos\u00e9 inorganique non m\u00e9tallique). C\'est le mat\u00e9riau le plus dur connu, avec une duret\u00e9 de 10 sur l\'\u00e9chelle de Mohs.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le verre est un liquide extr\u00eamement visqueux : contrairement \u00e0 la l\u00e9gende, les vitraux m\u00e9di\u00e9vaux ne s\'\u00e9coulent pas. Leur \u00e9paisseur irr\u00e9guli\u00e8re est due au proc\u00e9d\u00e9 de fabrication artisanal.' }
          ]
        },
        {
          slug: 'composites',
          title: 'Composites',
          description: 'Fibre de verre, carbone, Kevlar, matrices et fabrication.',
          intro: 'Les <strong>mat\u00e9riaux composites</strong> combinent deux mat\u00e9riaux de nature diff\u00e9rente pour obtenir des propri\u00e9t\u00e9s sup\u00e9rieures \u00e0 celles de chaque constituant seul. Ils r\u00e9volutionnent l\'a\u00e9ronautique, l\'automobile et le sport.',
          introHighlight: '<strong>Le Boeing 787 Dreamliner</strong> est compos\u00e9 \u00e0 50 % de mat\u00e9riaux composites en masse, contre 12 % pour le 777. Cette \u00e9volution r\u00e9duit le poids et la consommation de carburant de 20 %.',
          intro2: '',
          sections: [
            {
              title: 'Principe des composites',
              paragraphs: [
                'Un mat\u00e9riau composite associe un <strong>renfort</strong> (fibres) et une <strong>matrice</strong> (polym\u00e8re, m\u00e9tal ou c\u00e9ramique). Le renfort apporte la r\u00e9sistance et la rigidit\u00e9 ; la matrice transmet les efforts, prot\u00e8ge les fibres et donne la forme. Les propri\u00e9t\u00e9s du composite d\u00e9pendent du type de fibres, de leur orientation, du taux volumique de fibres et de la nature de la matrice.',
                'Les principales fibres de renfort sont la <strong>fibre de verre</strong> (bon rapport performance/co\u00fbt), la <strong>fibre de carbone</strong> (tr\u00e8s rigide et l\u00e9g\u00e8re, 5 fois plus r\u00e9sistante que l\'acier \u00e0 poids \u00e9gal) et le <strong>Kevlar</strong> (excellente r\u00e9sistance \u00e0 l\'impact). Les fibres sont utilis\u00e9es sous forme de tissus, de nappes unidirectionnelles ou de pr\u00e9impr\u00e9gn\u00e9s.'
              ],
              highlight: 'La fibre de carbone a une r\u00e9sistance sp\u00e9cifique (r\u00e9sistance/densit\u00e9) 10 fois sup\u00e9rieure \u00e0 celle de l\'acier.'
            },
            {
              title: 'Proc\u00e9d\u00e9s de fabrication',
              paragraphs: [
                'Le <strong>drapage manuel</strong> superpose des couches de tissu impr\u00e9gn\u00e9 de r\u00e9sine dans un moule, puis polym\u00e9rise \u00e0 temp\u00e9rature ambiante ou en autoclave (sous pression et temp\u00e9rature). L\'<strong>infusion sous vide</strong> (RTM, VARTM) injecte la r\u00e9sine dans un moule contenant les fibres s\u00e8ches, sous d\u00e9pression.',
                'L\'<strong>enroulement filamentaire</strong> enroule des fibres continues impr\u00e9gn\u00e9es autour d\'un mandrin. Ce proc\u00e9d\u00e9 produit des tubes, r\u00e9servoirs et fusselages d\'une grande r\u00e9sistance. La <strong>pultrusion</strong> tire des fibres continues \u00e0 travers un bain de r\u00e9sine puis un moule chauff\u00e9, produisant des profil\u00e9s de section constante.',
                'L\'<strong>AFP</strong> (Automated Fiber Placement) d\u00e9pose automatiquement des bandes de pr\u00e9impr\u00e9gn\u00e9 sur un moule par un robot. Cette technique produit les grandes structures a\u00e9ronautiques (fuselages, ailes) avec une pr\u00e9cision et une reproductibilit\u00e9 impossibles \u00e0 obtenir manuellement.'
              ],
              highlight: 'Le fuselage du Boeing 787 est fabriqu\u00e9 en une seule pi\u00e8ce composite par enroulement filamentaire, \u00e9liminant des milliers de rivets.'
            },
            {
              title: 'Applications et limites',
              paragraphs: [
                'Les composites dominent l\'<strong>a\u00e9ronautique</strong> (ailes et fuselage des avions modernes), le <strong>sport</strong> (v\u00e9los, raquettes, skis), l\'<strong>\u00e9olien</strong> (pales de 100+ m) et l\'<strong>automobile</strong> (Formule 1, supercars). Le gain de masse se traduit directement en \u00e9conomie de carburant ou en performance.',
                'Leurs <strong>limites</strong> incluent le co\u00fbt \u00e9lev\u00e9 (la fibre de carbone co\u00fbte 15-30 \u20ac/kg contre 1 \u20ac/kg pour l\'acier), la difficult\u00e9 de recyclage (les thermodurcissables ne se refondent pas), la sensibilit\u00e9 aux impacts (d\u00e9laminage invisible) et la complexit\u00e9 du contr\u00f4le qualit\u00e9 (d\u00e9fauts internes d\u00e9tectables uniquement par ultrasons ou radiographie).'
              ],
              highlight: 'Le d\u00e9laminage (s\u00e9paration entre couches) est le mode de d\u00e9faillance le plus redout\u00e9 des composites stratifi\u00e9s.'
            }
          ],
          quiz: [
            { q: 'Quel est le r\u00f4le de la matrice dans un composite ?', opts: ['Apporter la r\u00e9sistance m\u00e9canique', 'Transmettre les efforts aux fibres et les prot\u00e9ger', 'Donner la couleur', 'R\u00e9duire le poids'], correct: 1, explanation: 'La matrice transmet les efforts aux fibres de renfort, les prot\u00e8ge de l\'environnement et donne la forme \u00e0 la pi\u00e8ce.' },
            { q: 'Quelle fibre offre le meilleur rapport r\u00e9sistance/poids ?', opts: ['Fibre de verre', 'Fibre de carbone', 'Fibre de lin', 'Fibre de basalte'], correct: 1, explanation: 'La fibre de carbone offre la meilleure r\u00e9sistance sp\u00e9cifique (rapport r\u00e9sistance/densit\u00e9), surpassant largement l\'acier et les autres fibres.' },
            { q: 'Quel pourcentage de composites compose le Boeing 787 ?', opts: ['12 %', '25 %', '50 %', '75 %'], correct: 2, explanation: 'Le Boeing 787 Dreamliner est compos\u00e9 \u00e0 50 % de mat\u00e9riaux composites en masse, une r\u00e9volution dans l\'a\u00e9ronautique commerciale.' }
          ],
          definitions: [
            { term: 'Renfort', def: '\u00c9l\u00e9ment du composite apportant r\u00e9sistance et rigidit\u00e9, g\u00e9n\u00e9ralement sous forme de fibres.' },
            { term: 'Matrice', def: 'Mat\u00e9riau liant du composite, assurant le transfert des efforts et la protection des fibres.' },
            { term: 'Pr\u00e9impr\u00e9gn\u00e9', def: 'Tissu ou nappe de fibres pr\u00e9-impr\u00e9gn\u00e9 de r\u00e9sine partiellement polym\u00e9ris\u00e9e, pr\u00eat \u00e0 la mise en forme.' },
            { term: 'D\u00e9laminage', def: 'S\u00e9paration entre les couches d\'un stratifi\u00e9 composite, mode de d\u00e9faillance critique.' },
            { term: 'AFP', def: 'Automated Fiber Placement : d\u00e9pose automatis\u00e9e de bandes de fibres par robot pour la fabrication de grandes structures composites.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le b\u00e9ton arm\u00e9 est techniquement un mat\u00e9riau composite : le b\u00e9ton (matrice) est renforc\u00e9 par des armatures en acier (renfort). C\'est le composite le plus utilis\u00e9 au monde.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La Formule 1 a adopt\u00e9 les monoplaces en fibre de carbone en 1981 (McLaren MP4/1). Cette innovation a r\u00e9volutionn\u00e9 la s\u00e9curit\u00e9 des pilotes gr\u00e2ce \u00e0 la cellule de survie en composite.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les pales d\'\u00e9oliennes sont les plus grandes pi\u00e8ces composites au monde. La plus longue mesure plus de 115 m\u00e8tres, soit plus que l\'envergure d\'un Airbus A380.' }
          ]
        },
        {
          slug: 'nanomateriaux',
          title: 'Nanomat\u00e9riaux',
          description: 'Nanoparticules, nanotubes de carbone, graph\u00e8ne et applications.',
          intro: 'Les <strong>nanomat\u00e9riaux</strong> poss\u00e8dent au moins une dimension inf\u00e9rieure \u00e0 100 nanom\u00e8tres (1 nm = 10\u207b\u2079 m). \u00c0 cette \u00e9chelle, les mat\u00e9riaux acqui\u00e8rent des propri\u00e9t\u00e9s nouvelles dues aux effets quantiques et au rapport surface/volume \u00e9lev\u00e9.',
          introHighlight: '<strong>Le graph\u00e8ne</strong>, feuillet d\'atomes de carbone d\'un atome d\'\u00e9paisseur, est 200 fois plus r\u00e9sistant que l\'acier, excellent conducteur et transparent. Sa d\u00e9couverte a valu le prix Nobel 2010.',
          intro2: '',
          sections: [
            {
              title: 'Nanotubes de carbone et graph\u00e8ne',
              paragraphs: [
                'Les <strong>nanotubes de carbone</strong> (NTC), d\u00e9couverts par Sumio Iijima en 1991, sont des cylindres de graph\u00e8ne enroul\u00e9 d\'un diam\u00e8tre de 1 \u00e0 50 nm. Leur r\u00e9sistance \u00e0 la traction (100 GPa) et leur module d\'Young (1 000 GPa) sont les plus \u00e9lev\u00e9s de tous les mat\u00e9riaux connus. Ils sont utilis\u00e9s comme renfort dans les composites, dans les \u00e9crans tactiles et pour les capteurs.',
                'Le <strong>graph\u00e8ne</strong>, isol\u00e9 par Andre Geim et Konstantin Novoselov en 2004, est un feuillet monoatomique de carbone en r\u00e9seau hexagonal. Il combine r\u00e9sistance m\u00e9canique exceptionnelle, conductivit\u00e9 \u00e9lectrique et thermique \u00e9lev\u00e9es, transparence optique et imperm\u00e9abilit\u00e9 aux gaz. Ses applications potentielles couvrent l\'\u00e9lectronique, le stockage d\'\u00e9nergie, le dessalement de l\'eau et les mat\u00e9riaux composites.',
                'La production industrielle de graph\u00e8ne de qualit\u00e9 et \u00e0 grande \u00e9chelle reste un d\u00e9fi. L\'exfoliation chimique, le d\u00e9p\u00f4t chimique en phase vapeur (CVD) et l\'exfoliation en phase liquide sont les principales m\u00e9thodes de production.'
              ],
              highlight: 'Le graph\u00e8ne conduit l\'\u00e9lectricit\u00e9 mieux que le cuivre et la chaleur mieux que le diamant, tout en \u00e9tant transparent et flexible.'
            },
            {
              title: 'Nanoparticules',
              paragraphs: [
                'Les <strong>nanoparticules</strong> pr\u00e9sentent des propri\u00e9t\u00e9s diff\u00e9rentes de celles du mat\u00e9riau massif en raison de leur rapport surface/volume \u00e9lev\u00e9 et des effets quantiques. L\'or nanometrique, par exemple, est rouge et non jaune. Les nanoparticules d\'argent sont antibact\u00e9riennes. Les points quantiques (quantum dots) \u00e9mettent une lumi\u00e8re de couleur d\u00e9pendant de leur taille.',
                'Les nanoparticules trouvent des applications en <strong>m\u00e9decine</strong> (vectorisation de m\u00e9dicaments, imagerie), en <strong>cosm\u00e9tique</strong> (cr\u00e8mes solaires au TiO\u2082 ou ZnO), en <strong>catalyse</strong> (grande surface r\u00e9active) et en <strong>\u00e9lectronique</strong> (encres conductrices). Les quantum dots \u00e9quipent d\u00e9j\u00e0 les \u00e9crans de t\u00e9l\u00e9vision haut de gamme (Samsung QLED).'
              ],
              highlight: 'Les nanoparticules d\'or changent de couleur selon leur taille : 20 nm = rouge rubis, 100 nm = violet-bleu.'
            },
            {
              title: 'Enjeux et perspectives',
              paragraphs: [
                'La <strong>nanotoxicologie</strong> \u00e9tudie les risques potentiels des nanomat\u00e9riaux pour la sant\u00e9 et l\'environnement. Leur taille leur permet de franchir les barri\u00e8res biologiques (peau, poumons, barri\u00e8re h\u00e9mato-enc\u00e9phalique). Le principe de pr\u00e9caution guide la r\u00e9glementation, notamment le r\u00e8glement europ\u00e9en REACH et l\'\u00e9tiquetage obligatoire [nano] dans l\'alimentation.',
                'Les <strong>perspectives</strong> sont immenses : nanorobots m\u00e9dicaux pour le ciblage de tumeurs, membranes nanostructur\u00e9es pour la filtration de l\'eau, batteries \u00e0 \u00e9lectrodes nanostructur\u00e9es pour le stockage d\'\u00e9nergie, rev\u00eatements auto-nettoyants inspir\u00e9s du lotus (effet lotus), et composites ultra-l\u00e9gers pour l\'a\u00e9ronautique.'
              ],
              highlight: 'L\'effet lotus : les surfaces nanostructur\u00e9es de la feuille de lotus font perler l\'eau et emportent la salet\u00e9. Les rev\u00eatements biomim\u00e9tiques reproduisent cet effet.'
            }
          ],
          quiz: [
            { q: 'Quelle taille d\u00e9finit un nanomat\u00e9riau ?', opts: ['< 1 mm', '< 100 \u03bcm', '< 100 nm', '< 1 nm'], correct: 2, explanation: 'Un nanomat\u00e9riau poss\u00e8de au moins une dimension inf\u00e9rieure \u00e0 100 nanom\u00e8tres (100 \u00d7 10\u207b\u2079 m).' },
            { q: 'Qui a isol\u00e9 le graph\u00e8ne pour la premi\u00e8re fois ?', opts: ['Richard Feynman', 'Andre Geim et Konstantin Novoselov', 'Sumio Iijima', 'Robert Curl'], correct: 1, explanation: 'Andre Geim et Konstantin Novoselov ont isol\u00e9 le graph\u00e8ne en 2004 \u00e0 l\'universit\u00e9 de Manchester, une d\u00e9couverte r\u00e9compens\u00e9e par le prix Nobel de physique en 2010.' },
            { q: 'Pourquoi les nanoparticules d\'or sont-elles rouges ?', opts: ['Elles rouillent', 'Les effets quantiques modifient l\'absorption lumineuse', 'Elles contiennent du cuivre', 'C\'est un artefact optique'], correct: 1, explanation: '\u00c0 l\'\u00e9chelle nanom\u00e9trique, les effets de r\u00e9sonance plasmonique de surface modifient l\'interaction avec la lumi\u00e8re, donnant une couleur rouge aux nanoparticules d\'or de 20 nm.' }
          ],
          definitions: [
            { term: 'Nanom\u00e8tre', def: 'Unit\u00e9 de longueur \u00e9gale \u00e0 un millardi\u00e8me de m\u00e8tre (10\u207b\u2079 m). Un cheveu humain mesure environ 80 000 nm de diam\u00e8tre.' },
            { term: 'Graph\u00e8ne', def: 'Feuillet monoatomique de carbone en r\u00e9seau hexagonal, mat\u00e9riau le plus r\u00e9sistant connu.' },
            { term: 'Nanotube de carbone', def: 'Cylindre nanom\u00e9trique de graph\u00e8ne enroul\u00e9, combinant r\u00e9sistance m\u00e9canique et conductivit\u00e9 exceptionnelles.' },
            { term: 'Quantum dot', def: 'Nanocristal semi-conducteur dont la couleur d\'\u00e9mission d\u00e9pend de sa taille, par confinement quantique.' },
            { term: 'Effet lotus', def: 'Propri\u00e9t\u00e9 superhydrophobe de surfaces nanostructur\u00e9es faisant perler l\'eau et emportant la salet\u00e9.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Geim et Novoselov ont isol\u00e9 le graph\u00e8ne avec du simple ruban adh\u00e9sif, en exfoliant du graphite couche par couche. Cette m\u00e9thode remarquablement simple leur a valu le prix Nobel.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Richard Feynman a anticip\u00e9 les nanotechnologies dans sa c\u00e9l\u00e8bre conf\u00e9rence de 1959 intitul\u00e9e There is Plenty of Room at the Bottom, pr\u00e9disant la manipulation atome par atome.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le coupe de Lycurgue, verre romain du IVe si\u00e8cle, contient des nanoparticules d\'or et d\'argent qui lui donnent des couleurs diff\u00e9rentes selon l\'\u00e9clairage : vert en r\u00e9flexion, rouge en transmission.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 6 — Robotique
    // ──────────────────────────────────────────────
    {
      slug: 'robotique',
      title: 'Robotique',
      description: 'Capteurs, actionneurs, IA embarqu\u00e9e, robots industriels et drones.',
      lessons: [
        {
          slug: 'capteurs-et-perception',
          title: 'Capteurs et perception',
          description: 'Vision artificielle, lidar, centrale inertielle et fusion de capteurs.',
          intro: 'La <strong>perception</strong> est la capacit\u00e9 d\'un robot \u00e0 comprendre son environnement gr\u00e2ce \u00e0 ses capteurs. C\'est le fondement de toute autonomie : un robot qui ne per\u00e7oit pas son environnement ne peut ni naviguer, ni manipuler, ni interagir.',
          introHighlight: '<strong>La fusion de capteurs</strong> combine les informations de plusieurs types de capteurs pour obtenir une perception plus fiable et plus compl\u00e8te, comme le cerveau humain fusionne les donn\u00e9es visuelles, auditives et vestibulaires.',
          intro2: '',
          sections: [
            {
              title: 'Vision artificielle',
              paragraphs: [
                'La <strong>vision par ordinateur</strong> permet au robot d\'interpr\u00e9ter des images pour d\u00e9tecter des objets, mesurer des distances et reconna\u00eetre des formes. Les cam\u00e9ras RGB fournissent des images en couleur. Les cam\u00e9ras de profondeur (st\u00e9r\u00e9ovision, lumi\u00e8re structur\u00e9e, temps de vol) ajoutent la troisi\u00e8me dimension.',
                'Les r\u00e9seaux de neurones convolutifs (CNN) ont r\u00e9volutionn\u00e9 la vision artificielle. Les algorithmes de d\u00e9tection d\'objets (<strong>YOLO</strong>, SSD) identifient et localisent des objets en temps r\u00e9el. La segmentation s\u00e9mantique classe chaque pixel de l\'image (route, pi\u00e9ton, v\u00e9hicule), capacit\u00e9 essentielle pour la conduite autonome.',
                'Le <strong>SLAM</strong> (Simultaneous Localization and Mapping) permet \u00e0 un robot de construire une carte de son environnement tout en s\'y localisant, r\u00e9solvant le probl\u00e8me de l\'\u0153uf et de la poule : il faut une carte pour se localiser, mais il faut se localiser pour construire une carte.'
              ],
              highlight: 'YOLO (You Only Look Once) d\u00e9tecte des dizaines d\'objets dans une image en moins de 20 millisecondes.'
            },
            {
              title: 'Lidar et t\u00e9l\u00e9d\u00e9tection',
              paragraphs: [
                'Le <strong>lidar</strong> (Light Detection and Ranging) mesure les distances en envoyant des impulsions laser et en mesurant le temps de retour. Il produit un nuage de points 3D tr\u00e8s pr\u00e9cis de l\'environnement. Les lidars m\u00e9caniques (rotation d\'un miroir) offrent un champ de vue \u00e0 360\u00b0. Les lidars \u00e0 \u00e9tat solide (\u00e0 base de MEMS ou optique) sont plus compacts et moins co\u00fbteux.',
                'Le <strong>radar</strong> (ondes radio) fonctionne par tous les temps et d\u00e9tecte la vitesse des objets par effet Doppler. Les <strong>capteurs ultrasonores</strong> mesurent les distances courtes (stationnement). La combinaison lidar + radar + cam\u00e9ras + ultrasons offre une perception redondante et robuste, strat\u00e9gie utilis\u00e9e par la plupart des v\u00e9hicules autonomes.'
              ],
              highlight: 'Un lidar Velodyne VLP-16 g\u00e9n\u00e8re 300 000 points 3D par seconde, cartographiant l\'environnement avec une pr\u00e9cision centim\u00e9trique.'
            },
            {
              title: 'Capteurs inertiels et fusion',
              paragraphs: [
                'La <strong>centrale inertielle</strong> (IMU) combine acc\u00e9l\u00e9rom\u00e8tres et gyroscopes pour mesurer l\'acc\u00e9l\u00e9ration et la rotation d\'un corps. Gr\u00e2ce aux technologies MEMS, une IMU tient d\u00e9sormais sur une puce de quelques millim\u00e8tres. La navigation inertielle int\u00e8gre ces mesures pour estimer la position, mais la d\u00e9rive s\'accumule rapidement sans correction externe (GPS, lidar, vision).',
                'La <strong>fusion de capteurs</strong> utilise des algorithmes comme le filtre de Kalman \u00e9tendu (EKF) ou le filtre particulaire pour combiner de mani\u00e8re optimale des mesures provenant de capteurs diff\u00e9rents, chacun avec ses forces et ses faiblesses. La fusion GPS + IMU + odom\u00e9trie est standard en robotique mobile ; la fusion lidar + cam\u00e9ra + IMU est utilis\u00e9e en conduite autonome.'
              ],
              highlight: 'Le filtre de Kalman, invent\u00e9 en 1960, a \u00e9t\u00e9 utilis\u00e9 pour la navigation des missions Apollo. Il reste fondamental en robotique moderne.'
            }
          ],
          quiz: [
            { q: 'Que signifie SLAM en robotique ?', opts: ['Signal Level And Measurement', 'Simultaneous Localization and Mapping', 'Smart Laser Automated Movement', 'Sensor Linked Autonomous Machine'], correct: 1, explanation: 'SLAM (Simultaneous Localization and Mapping) permet \u00e0 un robot de construire une carte de son environnement tout en s\'y localisant simultan\u00e9ment.' },
            { q: 'Quel capteur mesure les distances par impulsions laser ?', opts: ['Radar', 'Lidar', 'Sonar', 'Cam\u00e9ra st\u00e9r\u00e9o'], correct: 1, explanation: 'Le lidar (Light Detection and Ranging) mesure les distances en envoyant des impulsions laser et en mesurant le temps de retour.' },
            { q: 'Quel algorithme est fondamental pour la fusion de capteurs ?', opts: ['YOLO', 'Backpropagation', 'Filtre de Kalman', 'A*'], correct: 2, explanation: 'Le filtre de Kalman combine de mani\u00e8re optimale des mesures bruit\u00e9es provenant de capteurs diff\u00e9rents pour estimer l\'\u00e9tat d\'un syst\u00e8me.' }
          ],
          definitions: [
            { term: 'Lidar', def: 'Capteur mesurant les distances par impulsions laser, produisant un nuage de points 3D.' },
            { term: 'SLAM', def: 'Algorithme permettant la localisation simultan\u00e9e et la cartographie de l\'environnement.' },
            { term: 'IMU', def: 'Centrale inertielle combinant acc\u00e9l\u00e9rom\u00e8tres et gyroscopes pour mesurer acc\u00e9l\u00e9ration et rotation.' },
            { term: 'Filtre de Kalman', def: 'Algorithme d\'estimation optimale fusionnant des mesures bruit\u00e9es pour estimer l\'\u00e9tat d\'un syst\u00e8me dynamique.' },
            { term: 'CNN', def: 'R\u00e9seau de neurones convolutif, architecture de deep learning sp\u00e9cialis\u00e9e dans le traitement d\'images.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le filtre de Kalman a \u00e9t\u00e9 utilis\u00e9 par la NASA pour guider les missions Apollo vers la Lune. Rudolf Kalman a publi\u00e9 son algorithme en 1960, neuf ans avant Apollo 11.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les voitures autonomes Tesla utilisent principalement des cam\u00e9ras et de l\'IA pour la perception, tandis que Waymo combine lidar, radar et cam\u00e9ras. Le d\u00e9bat lidar vs cam\u00e9ras divise encore l\'industrie.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le premier algorithme SLAM a \u00e9t\u00e9 propos\u00e9 en 1986 par Smith, Self et Cheeseman. Il reste un domaine de recherche tr\u00e8s actif 40 ans plus tard.' }
          ]
        },
        {
          slug: 'actionneurs-et-commande',
          title: 'Actionneurs et commande',
          description: 'Moteurs, servomoteurs, contr\u00f4le PID et cin\u00e9matique des robots.',
          intro: 'Les <strong>actionneurs</strong> sont les muscles du robot : ils convertissent l\'\u00e9nergie \u00e9lectrique en mouvement m\u00e9canique. La <strong>commande</strong> assure que ce mouvement est pr\u00e9cis, rapide et stable.',
          introHighlight: '<strong>Le contr\u00f4leur PID</strong> (proportionnel-int\u00e9gral-d\u00e9riv\u00e9) est l\'algorithme de commande le plus utilis\u00e9 au monde : 95 % des boucles de r\u00e9gulation industrielles l\'utilisent.',
          intro2: '',
          sections: [
            {
              title: 'Moteurs et servomoteurs',
              paragraphs: [
                'Les <strong>moteurs \u00e0 courant continu</strong> (DC) sont simples et polyvalents. Les <strong>moteurs brushless</strong> (sans balais, BLDC) offrent un meilleur rendement, une plus longue dur\u00e9e de vie et un couple \u00e9lev\u00e9. Les <strong>moteurs pas-\u00e0-pas</strong> tournent par incr\u00e9ments angulaires pr\u00e9cis (1,8\u00b0 par pas typiquement), id\u00e9aux pour les imprimantes 3D et les machines-outils.',
                'Un <strong>servomoteur</strong> int\u00e8gre un moteur, un r\u00e9ducteur, un capteur de position (encodeur) et un circuit de commande en boucle ferm\u00e9e. Il permet un contr\u00f4le pr\u00e9cis de la position, de la vitesse et du couple. Les servomoteurs \u00e9quipent les bras robotiques industriels o\u00f9 la pr\u00e9cision de positionnement atteint 0,01 mm.',
                'Les <strong>actionneurs lin\u00e9aires</strong> (v\u00e9rins \u00e9lectriques, pneumatiques ou hydrauliques) produisent un mouvement de translation. Les v\u00e9rins hydrauliques offrent les forces les plus \u00e9lev\u00e9es (engins de chantier), tandis que les v\u00e9rins \u00e9lectriques sont plus pr\u00e9cis et plus propres.'
              ],
              highlight: 'Un servomoteur industriel peut positionner un bras robotique avec une r\u00e9p\u00e9tabilit\u00e9 de 0,01 mm, soit l\'\u00e9paisseur d\'un cheveu divis\u00e9e par huit.'
            },
            {
              title: 'Contr\u00f4le PID',
              paragraphs: [
                'Le <strong>contr\u00f4leur PID</strong> calcule la commande comme la somme de trois termes : le terme <strong>proportionnel</strong> (P) corrige l\'erreur actuelle, le terme <strong>int\u00e9gral</strong> (I) \u00e9limine l\'erreur statique en accumulant les erreurs pass\u00e9es, et le terme <strong>d\u00e9riv\u00e9</strong> (D) anticipe l\'\u00e9volution de l\'erreur pour amortir les oscillations.',
                'Le <strong>r\u00e9glage des gains</strong> (Kp, Ki, Kd) est crucial : un gain proportionnel trop \u00e9lev\u00e9 provoque des oscillations, un gain int\u00e9gral trop \u00e9lev\u00e9 cause un d\u00e9passement, un gain d\u00e9riv\u00e9 trop \u00e9lev\u00e9 amplifie le bruit. La m\u00e9thode de Ziegler-Nichols et l\'auto-tuning automatisent ce r\u00e9glage d\u00e9licat.'
              ],
              highlight: 'Le PID a \u00e9t\u00e9 invent\u00e9 pour le pilotage automatique des navires dans les ann\u00e9es 1920. Il est toujours omnipr\u00e9sent un si\u00e8cle plus tard.'
            },
            {
              title: 'Cin\u00e9matique des robots',
              paragraphs: [
                'La <strong>cin\u00e9matique directe</strong> calcule la position de l\'outil du robot \u00e0 partir des angles de ses articulations. La <strong>cin\u00e9matique inverse</strong> r\u00e9sout le probl\u00e8me oppos\u00e9 : quels angles articulaires permettent d\'atteindre une position donn\u00e9e ? Ce probl\u00e8me est souvent plus difficile car il peut admettre z\u00e9ro, une ou plusieurs solutions.',
                'La notation de <strong>Denavit-Hartenberg</strong> d\u00e9crit syst\u00e9matiquement la g\u00e9om\u00e9trie d\'un robot articul\u00e9 par quatre param\u00e8tres par articulation. Un robot 6 axes (\u00e0 six articulations) poss\u00e8de 6 degr\u00e9s de libert\u00e9, le minimum pour atteindre n\'importe quelle position et orientation dans l\'espace 3D.'
              ],
              highlight: 'Un robot \u00e0 6 axes peut atteindre n\'importe quelle position et orientation dans son espace de travail : 3 DOF pour la position et 3 pour l\'orientation.'
            }
          ],
          quiz: [
            { q: 'Que fait le terme int\u00e9gral dans un PID ?', opts: ['Il amplifie l\'erreur actuelle', 'Il \u00e9limine l\'erreur statique en accumulant les erreurs pass\u00e9es', 'Il anticipe l\'\u00e9volution de l\'erreur', 'Il filtre le bruit'], correct: 1, explanation: 'Le terme int\u00e9gral accumule les erreurs pass\u00e9es et g\u00e9n\u00e8re une correction croissante tant qu\'une erreur persiste, \u00e9liminant ainsi l\'erreur statique.' },
            { q: 'Qu\'est-ce que la cin\u00e9matique inverse ?', opts: ['Calculer la position de l\'outil \u00e0 partir des angles articulaires', 'D\u00e9terminer les angles articulaires pour atteindre une position donn\u00e9e', 'Mesurer la vitesse du robot', 'Calculer les forces articulaires'], correct: 1, explanation: 'La cin\u00e9matique inverse d\u00e9termine les angles articulaires n\u00e9cessaires pour que l\'outil du robot atteigne une position et une orientation donn\u00e9es.' },
            { q: 'Combien de degr\u00e9s de libert\u00e9 faut-il pour atteindre toute position et orientation en 3D ?', opts: ['3', '4', '5', '6'], correct: 3, explanation: 'Il faut 6 degr\u00e9s de libert\u00e9 : 3 pour la position (x, y, z) et 3 pour l\'orientation (roulis, tangage, lacet).' }
          ],
          definitions: [
            { term: 'PID', def: 'Contr\u00f4leur proportionnel-int\u00e9gral-d\u00e9riv\u00e9 : algorithme de r\u00e9gulation combinant correction de l\'erreur actuelle, pass\u00e9e et future.' },
            { term: 'Servomoteur', def: 'Moteur \u00e9quip\u00e9 d\'un capteur de position et d\'une boucle de commande assurant un contr\u00f4le pr\u00e9cis.' },
            { term: 'Cin\u00e9matique inverse', def: 'Calcul des angles articulaires d\'un robot pour atteindre une position et orientation d\u00e9sir\u00e9es.' },
            { term: 'Degr\u00e9 de libert\u00e9', def: 'Nombre de mouvements ind\u00e9pendants possibles pour un syst\u00e8me m\u00e9canique.' },
            { term: 'Encodeur', def: 'Capteur mesurant la position angulaire ou lin\u00e9aire d\'un arbre avec une grande pr\u00e9cision.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le premier bras robotique industriel, Unimate, a \u00e9t\u00e9 install\u00e9 chez General Motors en 1961 pour manipuler des pi\u00e8ces m\u00e9talliques br\u00fblantes dans une fonderie.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les muscles artificiels \u00e0 base de polym\u00e8res \u00e9lectroactifs imitent les muscles biologiques et pourraient remplacer les moteurs dans les robots souples du futur.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les robots chirurgicaux Da Vinci poss\u00e8dent 7 degr\u00e9s de libert\u00e9 par bras, surpassant la dext\u00e9rit\u00e9 du poignet humain (6 DOF).' }
          ]
        },
        {
          slug: 'ia-embarquee',
          title: 'IA embarqu\u00e9e',
          description: 'Apprentissage automatique, r\u00e9seaux de neurones, planification et prise de d\u00e9cision.',
          intro: 'L\'<strong>intelligence artificielle embarqu\u00e9e</strong> donne au robot la capacit\u00e9 d\'apprendre, de s\'adapter et de prendre des d\u00e9cisions en autonomie. Elle transforme un automate programmable en machine capable de g\u00e9rer l\'impr\u00e9vu.',
          introHighlight: '<strong>L\'apprentissage par renforcement</strong> permet \u00e0 un robot d\'apprendre un comportement par essai-erreur, sans programmation explicite de chaque action. C\'est ainsi que les robots apprennent \u00e0 marcher, saisir des objets ou jouer \u00e0 des jeux.',
          intro2: '',
          sections: [
            {
              title: 'Apprentissage automatique pour la robotique',
              paragraphs: [
                'L\'<strong>apprentissage supervis\u00e9</strong> entra\u00eene un mod\u00e8le sur des donn\u00e9es \u00e9tiquet\u00e9es (image \u2192 objet d\u00e9tect\u00e9, signal capteur \u2192 \u00e9tat). Les <strong>r\u00e9seaux de neurones profonds</strong> (deep learning) excellent dans la perception : reconnaissance d\'objets, d\u00e9tection de pi\u00e9tons, compr\u00e9hension de la parole. L\'entra\u00eenement n\u00e9cessite de grandes quantit\u00e9s de donn\u00e9es et de puissance de calcul (GPU).',
                'L\'<strong>apprentissage par renforcement</strong> (RL) optimise une politique d\'\u00e9tats-actions en maximisant une r\u00e9compense cumul\u00e9e. L\'agent apprend par interaction avec l\'environnement, sans supervision humaine. Le sim-to-real (entra\u00eenement en simulation puis transfert au robot r\u00e9el) r\u00e9duit le risque et le co\u00fbt de l\'entra\u00eenement.',
                'L\'<strong>apprentissage par imitation</strong> reproduit les gestes d\u00e9montr\u00e9s par un humain. Un op\u00e9rateur guide le robot \u00e0 travers la t\u00e2che, et le robot apprend \u00e0 g\u00e9n\u00e9raliser cette d\u00e9monstration \u00e0 de nouvelles situations. Cette approche est particuli\u00e8rement utile pour les t\u00e2ches de manipulation complexes.'
              ],
              highlight: 'Le sim-to-real permet d\'entra\u00eener un robot en simulation des millions de fois en quelques heures, \u00e9quivalant \u00e0 des ann\u00e9es d\'exp\u00e9rience r\u00e9elle.'
            },
            {
              title: 'Planification de trajectoire',
              paragraphs: [
                'La <strong>planification de trajectoire</strong> calcule un chemin sans collision de la position actuelle \u00e0 la position cible. L\'algorithme <strong>A*</strong> trouve le chemin optimal dans un graphe discr\u00e9tis\u00e9. Les m\u00e9thodes probabilistes (<strong>RRT</strong>, Rapidly-exploring Random Trees) explorent efficacement les espaces de grande dimension.',
                'La <strong>planification en temps r\u00e9el</strong> doit r\u00e9agir aux obstacles dynamiques (pi\u00e9tons, autres v\u00e9hicules). Les champs de potentiel artificiels cr\u00e9ent des forces r\u00e9pulsives autour des obstacles et une force attractive vers la cible. Les approches de <strong>Model Predictive Control</strong> (MPC) optimisent la trajectoire sur un horizon temporel glissant en anticipant l\'\u00e9volution de l\'environnement.'
              ],
              highlight: 'L\'algorithme RRT peut planifier un chemin dans un espace \u00e0 6 dimensions (robot articulé) en quelques millisecondes.'
            },
            {
              title: 'Acc\u00e9l\u00e9rateurs mat\u00e9riels pour l\'IA',
              paragraphs: [
                'L\'IA embarqu\u00e9e n\u00e9cessite des processeurs sp\u00e9cialis\u00e9s. Les <strong>GPU</strong> (NVIDIA Jetson) excellent dans le calcul parall\u00e8le des r\u00e9seaux de neurones. Les <strong>TPU</strong> (Google) et les <strong>NPU</strong> (Neural Processing Units) sont des puces d\u00e9di\u00e9es au deep learning. Les <strong>FPGA</strong> offrent une latence ultra-faible pour les applications temps r\u00e9el critiques.',
                'Le d\u00e9fi est d\'ex\u00e9cuter des mod\u00e8les IA complexes sous les contraintes de puissance, de taille et de temp\u00e9rature d\'un syst\u00e8me embarqu\u00e9. La <strong>quantification</strong> (r\u00e9duction de la pr\u00e9cision de 32 bits \u00e0 8 ou 4 bits) et l\'\u00e9lagage (pruning) des r\u00e9seaux de neurones r\u00e9duisent la taille et la consommation des mod\u00e8les sans d\u00e9grader significativement les performances.'
              ],
              highlight: 'La puce NVIDIA Jetson Orin d\u00e9livre 275 TOPS (trillions d\'op\u00e9rations par seconde) pour seulement 60 watts, \u00e9quipant les robots et v\u00e9hicules autonomes.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que l\'apprentissage par renforcement ?', opts: ['Apprendre \u00e0 partir de donn\u00e9es \u00e9tiquet\u00e9es', 'Apprendre par essai-erreur en maximisant une r\u00e9compense', 'Copier le comportement d\'un humain', 'M\u00e9moriser des r\u00e8gles programm\u00e9es'], correct: 1, explanation: 'L\'apprentissage par renforcement optimise le comportement d\'un agent par interaction avec son environnement, en maximisant une r\u00e9compense cumul\u00e9e, sans exemples \u00e9tiquet\u00e9s.' },
            { q: 'Quel algorithme de planification est optimal dans un graphe ?', opts: ['RRT', 'A*', 'PID', 'SLAM'], correct: 1, explanation: 'L\'algorithme A* trouve le chemin le plus court dans un graphe en combinant le co\u00fbt du chemin parcouru et une heuristique estimant le co\u00fbt restant.' },
            { q: 'Qu\'est-ce que le sim-to-real en robotique ?', opts: ['Simuler un robot en r\u00e9alit\u00e9 virtuelle', 'Entra\u00eener en simulation puis transf\u00e9rer au robot r\u00e9el', 'Convertir un plan en prototype', 'Tester un logiciel sur du mat\u00e9riel'], correct: 1, explanation: 'Le sim-to-real consiste \u00e0 entra\u00eener un robot en simulation (rapide, s\u00fbr, peu co\u00fbteux) puis \u00e0 transf\u00e9rer le comportement appris au robot physique.' }
          ],
          definitions: [
            { term: 'Apprentissage par renforcement', def: 'M\u00e9thode d\'apprentissage o\u00f9 un agent apprend un comportement optimal par essai-erreur en maximisant une r\u00e9compense.' },
            { term: 'RRT', def: 'Rapidly-exploring Random Trees : algorithme de planification probabiliste explorant efficacement les espaces de grande dimension.' },
            { term: 'Quantification', def: 'R\u00e9duction de la pr\u00e9cision num\u00e9rique d\'un mod\u00e8le IA (32 bits \u2192 8 bits) pour acc\u00e9l\u00e9rer l\'inf\u00e9rence et r\u00e9duire la consommation.' },
            { term: 'Sim-to-real', def: 'Transfert d\'un comportement appris en simulation vers un robot physique r\u00e9el.' },
            { term: 'GPU embarqu\u00e9', def: 'Processeur graphique optimis\u00e9 pour l\'inf\u00e9rence de r\u00e9seaux de neurones dans des syst\u00e8mes \u00e0 faible consommation.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'OpenAI a entra\u00een\u00e9 une main robotique \u00e0 r\u00e9soudre un Rubik\'s Cube enti\u00e8rement par apprentissage par renforcement en simulation, puis a transf\u00e9r\u00e9 la politique au robot r\u00e9el.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'L\'algorithme A* a \u00e9t\u00e9 invent\u00e9 en 1968 par Peter Hart, Nils Nilsson et Bertram Raphael au Stanford Research Institute. Il est toujours l\'un des algorithmes les plus utilis\u00e9s en jeux vid\u00e9o et en robotique.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Un mod\u00e8le de deep learning quantifi\u00e9 en 8 bits occupe 4 fois moins de m\u00e9moire qu\'en 32 bits et s\'ex\u00e9cute 2 \u00e0 4 fois plus vite, avec une perte de pr\u00e9cision inf\u00e9rieure \u00e0 1 %.' }
          ]
        },
        {
          slug: 'robots-industriels',
          title: 'Robots industriels',
          description: 'Bras articul\u00e9s, cobots, AGV, int\u00e9gration et programmation.',
          intro: 'Les <strong>robots industriels</strong> r\u00e9alisent des t\u00e2ches r\u00e9p\u00e9titives, dangereuses ou de haute pr\u00e9cision en environnement de production. Plus de 3,5 millions de robots industriels sont en service dans le monde, avec l\'automobile comme premier secteur utilisateur.',
          introHighlight: '<strong>Les cobots</strong> (robots collaboratifs) travaillent aux c\u00f4t\u00e9s des humains sans barri\u00e8re de s\u00e9curit\u00e9, combinant la force et la r\u00e9p\u00e9tabilit\u00e9 du robot avec la dext\u00e9rit\u00e9 et l\'intelligence de l\'op\u00e9rateur.',
          intro2: '',
          sections: [
            {
              title: 'Types de robots industriels',
              paragraphs: [
                'Le <strong>bras articul\u00e9 6 axes</strong> (FANUC, ABB, KUKA, Yaskawa) est le robot industriel le plus polyvalent. Sa cin\u00e9matique s\u00e9rielle \u00e0 six articulations rotatives lui permet d\'atteindre toute position et orientation dans son espace de travail. Les charges utiles vont de 5 kg (assemblage \u00e9lectronique) \u00e0 2 300 kg (manipulation de carrosseries automobiles).',
                'Le <strong>robot SCARA</strong> (Selective Compliance Assembly Robot Arm) poss\u00e8de des articulations horizontales et une articulation verticale, id\u00e9al pour les op\u00e9rations de pick-and-place rapides. Le <strong>robot delta</strong> (ou parall\u00e8le) atteint des vitesses et acc\u00e9l\u00e9rations extr\u00eames pour le tri et l\'emballage en industrie alimentaire.',
                'Les <strong>AGV/AMR</strong> (v\u00e9hicules \u00e0 guidage automatique / robots mobiles autonomes) transportent des mat\u00e9riaux dans les usines et entrep\u00f4ts. Les AGV suivent un parcours fixe (bande magn\u00e9tique, fil). Les AMR naviguent librement gr\u00e2ce \u00e0 des capteurs et des algorithmes de navigation autonome.'
              ],
              highlight: 'Le robot FANUC M-2000iA peut soulever 2 300 kg, soit le poids d\'une voiture enti\u00e8re.'
            },
            {
              title: 'Cobotique',
              paragraphs: [
                'Les <strong>robots collaboratifs</strong> (cobots) sont con\u00e7us pour travailler en proximit\u00e9 directe avec les humains. Ils int\u00e8grent des capteurs de force et de couple dans chaque articulation, d\u00e9tectant toute collision et arr\u00eatant le mouvement en quelques millisecondes. La norme ISO/TS 15066 d\u00e9finit les limites de force et de pression acceptables.',
                'Les cobots (Universal Robots UR, FANUC CRX, ABB GoFa) sont faciles \u00e0 programmer : l\'op\u00e9rateur peut guider le bras \u00e0 la main pour lui enseigner une trajectoire (apprentissage par d\u00e9monstration). Leur d\u00e9ploiement est rapide (quelques heures) et leur co\u00fbt mod\u00e9r\u00e9 (20 000 \u00e0 50 000 \u20ac), rendant l\'automatisation accessible aux PME.'
              ],
              highlight: 'Un cobot UR10e peut \u00eatre d\u00e9ploy\u00e9 sur une nouvelle t\u00e2che en quelques heures, sans comp\u00e9tence en programmation robotique.'
            },
            {
              title: 'Applications et programmation',
              paragraphs: [
                'Les principales applications sont le <strong>soudage</strong> (arc, point, laser), la <strong>peinture</strong> (carrosseries), le <strong>montage</strong> (vissage, clipsage), le <strong>pick-and-place</strong> (tri, palettisation), l\'<strong>usinage</strong> (polissage, \u00e9bavurage) et l\'<strong>inspection</strong> (contr\u00f4le qualit\u00e9 par vision). L\'automobile repr\u00e9sente 30 % des robots install\u00e9s, suivie de l\'\u00e9lectronique (25 %).',
                'La programmation s\'effectue en langage constructeur (RAPID pour ABB, KRL pour KUKA, Karel pour FANUC) ou via <strong>ROS</strong> (Robot Operating System), framework open-source devenu le standard en recherche et de plus en plus utilis\u00e9 en industrie (ROS 2). La programmation hors-ligne (simulation 3D) permet de tester et optimiser les programmes sans arr\u00eater la production.'
              ],
              highlight: 'ROS (Robot Operating System) est le framework open-source dominant en robotique, utilis\u00e9 par des milliers de robots dans le monde.'
            }
          ],
          quiz: [
            { q: 'Quel type de robot est le plus polyvalent en industrie ?', opts: ['Robot SCARA', 'Robot delta', 'Bras articul\u00e9 6 axes', 'AGV'], correct: 2, explanation: 'Le bras articul\u00e9 6 axes est le plus polyvalent : ses six degr\u00e9s de libert\u00e9 lui permettent d\'atteindre toute position et orientation dans son espace de travail.' },
            { q: 'Quelle est la particularit\u00e9 des cobots ?', opts: ['Ils sont plus rapides', 'Ils peuvent travailler \u00e0 c\u00f4t\u00e9 des humains sans barri\u00e8re', 'Ils co\u00fbtent plus cher', 'Ils ne n\u00e9cessitent aucune programmation'], correct: 1, explanation: 'Les cobots int\u00e8grent des capteurs de force permettant de d\u00e9tecter les collisions et de travailler en toute s\u00e9curit\u00e9 aux c\u00f4t\u00e9s des op\u00e9rateurs humains.' },
            { q: 'Quel framework open-source est le standard en robotique ?', opts: ['TensorFlow', 'ROS (Robot Operating System)', 'OpenCV', 'Arduino'], correct: 1, explanation: 'ROS (Robot Operating System) est le framework open-source dominant en robotique, offrant des outils de communication, perception, planification et simulation.' }
          ],
          definitions: [
            { term: 'Cobot', def: 'Robot collaboratif con\u00e7u pour travailler aux c\u00f4t\u00e9s des humains en toute s\u00e9curit\u00e9, sans barri\u00e8re physique.' },
            { term: 'AGV', def: 'V\u00e9hicule \u00e0 guidage automatique suivant un parcours pr\u00e9d\u00e9fini pour le transport de mat\u00e9riaux.' },
            { term: 'Robot SCARA', def: 'Robot \u00e0 articulations horizontales sp\u00e9cialis\u00e9 dans les op\u00e9rations de pick-and-place rapides.' },
            { term: 'ROS', def: 'Robot Operating System : framework open-source fournissant biblioth\u00e8ques et outils pour le d\u00e9veloppement robotique.' },
            { term: 'ISO/TS 15066', def: 'Norme d\u00e9finissant les exigences de s\u00e9curit\u00e9 pour les robots collaboratifs, incluant les limites de force et de pression.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Japon est le premier producteur mondial de robots industriels (FANUC, Yaskawa) et le pays avec la plus forte densit\u00e9 de robots dans les usines, suivi par la Cor\u00e9e du Sud et l\'Allemagne.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Universal Robots, fond\u00e9 au Danemark en 2005, a popularis\u00e9 le concept de cobot. Le UR5 est devenu le bras robotique le plus vendu au monde.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Amazon utilise plus de 750 000 robots dans ses entrep\u00f4ts pour d\u00e9placer les \u00e9tag\u00e8res vers les pr\u00e9parateurs de commandes, r\u00e9duisant le temps de pr\u00e9paration de 60 %.' }
          ]
        },
        {
          slug: 'drones',
          title: 'Drones',
          description: 'Multicopt\u00e8res, navigation, r\u00e9glementation et applications.',
          intro: 'Les <strong>drones</strong> (a\u00e9ronefs sans pilote, UAV) r\u00e9volutionnent de nombreux secteurs : agriculture de pr\u00e9cision, inspection d\'infrastructures, cartographie, livraison et cin\u00e9matographie. Le march\u00e9 mondial des drones cro\u00eet de plus de 20 % par an.',
          introHighlight: '<strong>Un drone quadricopt\u00e8re</strong> vole gr\u00e2ce \u00e0 la variation de vitesse de ses quatre h\u00e9lices, sans aucune surface mobile. C\'est un triomphe de l\'\u00e9lectronique de contr\u00f4le sur la m\u00e9canique.',
          intro2: '',
          sections: [
            {
              title: 'Principes de vol',
              paragraphs: [
                'Un <strong>quadricopt\u00e8re</strong> contr\u00f4le son vol uniquement par la vitesse de rotation de ses quatre moteurs. Pour monter, les quatre moteurs acc\u00e9l\u00e8rent simultan\u00e9ment. Pour avancer, les moteurs arri\u00e8re tournent plus vite que les moteurs avant, inclinant le drone. Pour tourner (lacet), on exploite la diff\u00e9rence de couple entre les paires de moteurs tournant dans des sens oppos\u00e9s.',
                'La <strong>stabilisation</strong> est assur\u00e9e par une boucle de contr\u00f4le rapide (400-1 000 Hz) exploitant les donn\u00e9es d\'une IMU (acc\u00e9l\u00e9rom\u00e8tres et gyroscopes). Le <strong>contr\u00f4leur de vol</strong> (flight controller) est un microcontr\u00f4leur ex\u00e9cutant des algorithmes PID ou des contr\u00f4leurs non lin\u00e9aires pour maintenir l\'attitude d\u00e9sir\u00e9e malgr\u00e9 les perturbations (vent, turbulences).',
                'Les drones \u00e0 voilure fixe (ailes) offrent une meilleure endurance (plusieurs heures) pour la cartographie et la surveillance. Les drones VTOL (d\u00e9collage et atterrissage verticaux) combinent les avantages des deux : d\u00e9collage vertical puis transition en vol horizontal.'
              ],
              highlight: 'Un drone de course FPV peut atteindre 250 km/h et passer de 0 \u00e0 100 km/h en moins d\'une seconde.'
            },
            {
              title: 'Navigation et autonomie',
              paragraphs: [
                'La navigation de base utilise le <strong>GPS</strong> (pr\u00e9cision 2-5 m) et le <strong>GPS RTK</strong> (pr\u00e9cision centim\u00e9trique). En l\'absence de GPS (int\u00e9rieur, tunnels, zones urbaines denses), le drone utilise la <strong>navigation visuelle-inertielle</strong> (VIO), combinant cam\u00e9ras et IMU pour estimer sa position par SLAM visuel.',
                'Les drones autonomes ex\u00e9cutent des missions pr\u00e9programm\u00e9es (suivi de waypoints) ou autonomes (\u00e9vitement d\'obstacles en temps r\u00e9el). Les <strong>essaims de drones</strong> (drone swarms) coordonnent des dizaines ou centaines de drones pour des missions complexes : spectacles lumineux, surveillance de zones \u00e9tendues ou recherche et sauvetage. La communication inter-drones et les algorithmes d\u00e9centralis\u00e9s sont les d\u00e9fis cl\u00e9s.'
              ],
              highlight: 'Intel a fait voler des essaims de plus de 2 000 drones en formation pour des spectacles lumineux, rempla\u00e7ant les feux d\'artifice.'
            },
            {
              title: 'Applications et r\u00e9glementation',
              paragraphs: [
                'Les applications des drones se multiplient : <strong>agriculture</strong> (pulv\u00e9risation cibl\u00e9e, cartographie des cultures par multispectral), <strong>inspection</strong> (lignes \u00e9lectriques, ponts, \u00e9oliennes, r\u00e9seaux de gaz), <strong>topographie</strong> (photogramm\u00e9trie, mod\u00e8les num\u00e9riques de terrain), <strong>livraison</strong> (Amazon Prime Air, Wing de Google) et <strong>secours</strong> (localisation de victimes, livraison de d\u00e9fibrillateurs).',
                'La <strong>r\u00e9glementation</strong> europ\u00e9enne (EASA) classe les drones en cat\u00e9gories selon le risque : ouverte (faible risque, < 25 kg, \u00e0 vue), sp\u00e9cifique (risque mod\u00e9r\u00e9, autorisation requise) et certifi\u00e9e (risque \u00e9lev\u00e9, transport de passagers). Le <strong>U-space</strong> est le syst\u00e8me europ\u00e9en de gestion du trafic des drones, analogue au contr\u00f4le a\u00e9rien pour l\'aviation civile.'
              ],
              highlight: 'La photogramm\u00e9trie par drone produit des mod\u00e8les 3D de sites avec une pr\u00e9cision de 2 cm, r\u00e9volutionnant la topographie et l\'arch\u00e9ologie.'
            }
          ],
          quiz: [
            { q: 'Comment un quadricopt\u00e8re tourne-t-il sur lui-m\u00eame (lacet) ?', opts: ['En inclinant une surface de contr\u00f4le', 'En variant la vitesse relative des paires de moteurs tournant en sens oppos\u00e9s', 'En d\u00e9pla\u00e7ant une masse interne', 'En utilisant un rotor de queue'], correct: 1, explanation: 'Le quadricopt\u00e8re tourne en lacet en cr\u00e9ant un d\u00e9s\u00e9quilibre de couple entre les paires de moteurs tournant en sens horaire et antihoraire.' },
            { q: 'Quelle technologie offre une pr\u00e9cision centim\u00e9trique pour la navigation de drone ?', opts: ['GPS standard', 'GPS RTK', 'Boussole num\u00e9rique', 'Altim\u00e8tre barom\u00e9trique'], correct: 1, explanation: 'Le GPS RTK (Real-Time Kinematic) utilise une station de base au sol pour corriger en temps r\u00e9el les erreurs GPS, atteignant une pr\u00e9cision centim\u00e9trique.' },
            { q: 'Quel syst\u00e8me europ\u00e9en g\u00e8re le trafic des drones ?', opts: ['Eurocontrol', 'U-space', 'EASA Flight', 'SkyNet'], correct: 1, explanation: 'U-space est le syst\u00e8me europ\u00e9en de gestion du trafic a\u00e9rien pour les drones, fournissant identification, g\u00e9o-awareness et autorisation de vol.' }
          ],
          definitions: [
            { term: 'UAV', def: 'Unmanned Aerial Vehicle : a\u00e9ronef sans pilote \u00e0 bord, command\u00e9 \u00e0 distance ou de mani\u00e8re autonome.' },
            { term: 'Flight controller', def: 'Microcontr\u00f4leur ex\u00e9cutant les algorithmes de stabilisation et de navigation du drone.' },
            { term: 'GPS RTK', def: 'GPS cin\u00e9matique en temps r\u00e9el offrant une pr\u00e9cision centim\u00e9trique gr\u00e2ce \u00e0 une station de base correctrice.' },
            { term: 'Essaim de drones', def: 'Groupe de drones coordonn\u00e9s r\u00e9alisant une mission collective par communication et algorithmes d\u00e9centralis\u00e9s.' },
            { term: 'Photogramm\u00e9trie', def: 'Technique de reconstruction 3D d\'un environnement \u00e0 partir de multiples photographies a\u00e9riennes.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le premier drone militaire date de 1917 (Kettering Bug am\u00e9ricain). Le premier drone civil grand public (DJI Phantom) date de 2013. DJI d\u00e9tient aujourd\'hui 70 % du march\u00e9 mondial des drones civils.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les drones de livraison de m\u00e9dicaments op\u00e8rent d\u00e9j\u00e0 au Rwanda (Zipline) depuis 2016, livrant du sang et des vaccins dans des zones rurales inaccessibles par la route.' },
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Mars Helicopter Ingenuity a r\u00e9alis\u00e9 le premier vol motoris\u00e9 sur une autre plan\u00e8te le 19 avril 2021, dans une atmosph\u00e8re 100 fois moins dense que celle de la Terre.' }
          ]
        }
      ]
    }
  ]
};
