// Discipline definition: Histoire de l'art
// 6 hubs, 30 lessons — all content in French

module.exports = {
  slug: 'histoire-art',
  title: "Histoire de l'art",
  description: "Parcourez l'histoire des arts visuels, de la pr\u00e9histoire \u00e0 l'art contemporain, en d\u00e9couvrant les mouvements, les artistes et les \u0153uvres qui ont marqu\u00e9 l'humanit\u00e9.",
  icon: '\uD83C\uDFA8',
  cat: "Histoire de l'art",
  themeSlug: 'arts-culture',
  accent: '#e07acc',
  accent2: '#eda3df',
  accentDim: 'rgba(224,122,204,0.1)',
  accentHero: 'rgba(224,122,204,0.08)',
  introTitle: "Qu'est-ce que l'histoire de l'art ?",
  introText: 'L\'histoire de l\'art est la discipline qui \u00e9tudie les \u0153uvres artistiques dans leur contexte historique, culturel et esth\u00e9tique. Elle analyse les formes, les techniques, les styles et les significations des cr\u00e9ations visuelles produites par l\'humanit\u00e9 depuis la pr\u00e9histoire jusqu\'\u00e0 nos jours. En retra\u00e7ant l\'\u00e9volution des mouvements artistiques, elle permet de comprendre comment les soci\u00e9t\u00e9s se sont repr\u00e9sent\u00e9es elles-m\u00eames \u00e0 travers les si\u00e8cles.',
  introHighlight: 'Des peintures rupestres de Lascaux aux installations num\u00e9riques du XXI\u00e8me si\u00e8cle, l\'art t\u00e9moigne de la capacit\u00e9 universelle de l\'\u00eatre humain \u00e0 cr\u00e9er du sens et de la beaut\u00e9.',
  articleLow: "l'",
  hubs: [

    // ═══════════════════════════════════════════════════════════
    //  HUB 1 — Art pr\u00e9historique et antique
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'art-prehistorique',
      title: 'Art pr\u00e9historique et antique',
      description: 'Des premi\u00e8res peintures rupestres aux chefs-d\'\u0153uvre de l\'Antiquit\u00e9 gr\u00e9co-romaine, d\u00e9couvrez les origines de la cr\u00e9ation artistique humaine.',
      introText: 'L\'art pr\u00e9historique et antique couvre une p\u00e9riode immense, des premi\u00e8res traces artistiques il y a plus de 40 000 ans jusqu\'\u00e0 la chute de l\'Empire romain en 476 apr\u00e8s J.-C. Cette p\u00e9riode voit na\u00eetre les fondements de toutes les traditions artistiques ult\u00e9rieures : la repr\u00e9sentation du vivant, l\'architecture monumentale, la sculpture et les arts d\u00e9coratifs.',
      introHighlight: 'Les premi\u00e8res \u0153uvres d\'art connues r\u00e9v\u00e8lent une pens\u00e9e symbolique sophistiqu\u00e9e, bien ant\u00e9rieure \u00e0 l\'\u00e9criture.',
      lessons: [
        {
          slug: 'lascaux',
          title: 'Les grottes de Lascaux',
          description: 'D\u00e9couvrez les chefs-d\'\u0153uvre de l\'art pari\u00e9tal pal\u00e9olithique et leur signification.',
          intro: 'La grotte de Lascaux, situ\u00e9e en Dordogne (France), est l\'un des sites d\'art pari\u00e9tal les plus c\u00e9l\u00e8bres au monde. D\u00e9couverte en 1940 par quatre adolescents, elle contient pr\u00e8s de 600 peintures et 1 500 gravures datant d\'environ 17 000 ans avant notre \u00e8re. Ces repr\u00e9sentations animali\u00e8res, d\'une qualit\u00e9 artistique exceptionnelle, t\u00e9moignent de la ma\u00eetrise technique et de la pens\u00e9e symbolique des hommes du Pal\u00e9olithique sup\u00e9rieur.',
          introHighlight: 'Lascaux est souvent surnomm\u00e9e la \u00ab chapelle Sixtine de la pr\u00e9histoire \u00bb en raison de la richesse et de la beaut\u00e9 de ses peintures.',
          intro2: '',
          sections: [
            {
              title: 'La d\u00e9couverte et le contexte',
              paragraphs: [
                'Le 12 septembre 1940, quatre adolescents \u2014 Marcel Ravidat, Jacques Marsal, Georges Agnel et Simon Coencas \u2014 d\u00e9couvrent l\'entr\u00e9e de la grotte en poursuivant leur chien Robot, tomb\u00e9 dans un trou. Ils explorent une cavit\u00e9 orn\u00e9e de centaines de figures animales peintes en couleurs vives. L\'abb\u00e9 Henri Breuil, sp\u00e9cialiste de la pr\u00e9histoire, authentifie rapidement les peintures et organise les premi\u00e8res \u00e9tudes scientifiques.',
                'La grotte se situe dans la vall\u00e9e de la V\u00e9z\u00e8re, une r\u00e9gion particuli\u00e8rement riche en sites pr\u00e9historiques. Les peintures datent de la p\u00e9riode magdal\u00e9nienne, vers 17 000 avant notre \u00e8re. \u00c0 cette \u00e9poque, les hommes de Cro-Magnon vivaient de la chasse et de la cueillette dans un environnement p\u00e9riglaciaire. L\'art pari\u00e9tal constituait probablement une activit\u00e9 centrale dans leur vie spirituelle et sociale.',
                'Ouverte au public en 1948, la grotte a d\u00fb \u00eatre ferm\u00e9e en 1963 en raison de la d\u00e9gradation caus\u00e9e par le dioxyde de carbone et l\'humidit\u00e9 des visiteurs. Depuis, des r\u00e9pliques ont \u00e9t\u00e9 cr\u00e9\u00e9es, dont Lascaux II (1983) et Lascaux IV (2016), un centre international d\'art pari\u00e9tal reproduisant l\'int\u00e9gralit\u00e9 de la grotte.'
              ],
              highlight: 'La grotte de Lascaux a \u00e9t\u00e9 class\u00e9e au patrimoine mondial de l\'UNESCO en 1979 au sein des sites pr\u00e9historiques de la vall\u00e9e de la V\u00e9z\u00e8re.'
            },
            {
              title: 'Les peintures et leurs techniques',
              paragraphs: [
                'Les artistes de Lascaux utilisaient des pigments naturels : l\'ocre jaune et rouge (oxydes de fer), le noir de mangan\u00e8se et le charbon de bois. Ces pigments \u00e9taient broy\u00e9s en poudre, m\u00e9lang\u00e9s \u00e0 des liants (graisse animale, eau) et appliqu\u00e9s avec les doigts, des tampons de mousse, des pinceaux en poils ou par soufflage \u00e0 travers des os creux.',
                'Les repr\u00e9sentations sont majoritairement animales : chevaux, aurochs, cerfs, bouquetins et bisons dominent. La Salle des Taureaux, longue de 17 m\u00e8tres, pr\u00e9sente des aurochs pouvant atteindre 5 m\u00e8tres de long, les plus grandes figures pari\u00e9tales connues. Les artistes exploitaient les reliefs naturels de la roche pour donner du volume aux animaux, cr\u00e9ant un effet tridimensionnel saisissant.',
                'On distingue \u00e9galement des signes abstraits \u2014 points, lignes, rectangles \u2014 dont la signification reste d\u00e9battue. Une figure humaine, rare dans l\'art pal\u00e9olithique, appara\u00eet dans la sc\u00e8ne dite du \u00ab Puits \u00bb, repr\u00e9sentant un homme renvers\u00e9 face \u00e0 un bison bless\u00e9.'
              ],
              highlight: 'Les artistes de Lascaux ma\u00eetrisaient la perspective, l\'animation et le rendu du volume, techniques que l\'on croyait invent\u00e9es bien plus tard dans l\'histoire de l\'art.'
            },
            {
              title: 'Interpr\u00e9tations et signification',
              paragraphs: [
                'Plusieurs hypoth\u00e8ses ont \u00e9t\u00e9 avanc\u00e9es pour expliquer la fonction de l\'art pari\u00e9tal. La th\u00e9orie de la magie de la chasse, propos\u00e9e par l\'abb\u00e9 Breuil, sugg\u00e8re que les peintures avaient un r\u00f4le rituel destin\u00e9 \u00e0 favoriser la capture du gibier. Cependant, les animaux repr\u00e9sent\u00e9s ne correspondent pas toujours aux esp\u00e8ces consomm\u00e9es.',
                'Andr\u00e9 Leroi-Gourhan a propos\u00e9 une lecture structuraliste, identifiant une organisation symbolique des figures dans l\'espace de la grotte, avec des associations r\u00e9currentes entre certaines esp\u00e8ces et leur position. D\'autres chercheurs y voient des repr\u00e9sentations astronomiques, des r\u00e9cits mythologiques ou des marqueurs territoriaux.',
                'Aujourd\'hui, les sp\u00e9cialistes s\'accordent sur le caract\u00e8re multidimensionnel de cet art : \u00e0 la fois esth\u00e9tique, spirituel et social. Les grottes orn\u00e9es \u00e9taient vraisemblablement des lieux de c\u00e9r\u00e9monies collectives, o\u00f9 la cr\u00e9ation artistique participait \u00e0 la coh\u00e9sion du groupe et \u00e0 la transmission de savoirs.'
              ],
              highlight: 'L\'art pari\u00e9tal ne se r\u00e9duit pas \u00e0 une fonction utilitaire : il t\u00e9moigne d\'une pens\u00e9e symbolique complexe et d\'un besoin profond d\'expression cr\u00e9ative.'
            }
          ],
          quiz: [
            { q: 'En quelle ann\u00e9e la grotte de Lascaux a-t-elle \u00e9t\u00e9 d\u00e9couverte ?', opts: ['1902', '1940', '1963', '1979'], correct: 1, explanation: 'La grotte de Lascaux a \u00e9t\u00e9 d\u00e9couverte le 12 septembre 1940 par quatre adolescents en Dordogne.' },
            { q: 'Quel pigment principal donnait la couleur noire aux peintures de Lascaux ?', opts: ['L\'ocre rouge', 'Le charbon de bois et le mangan\u00e8se', 'L\'argile bleue', 'La craie calcaire'], correct: 1, explanation: 'Les artistes utilisaient le noir de mangan\u00e8se et le charbon de bois pour obtenir les teintes sombres.' },
            { q: 'Pourquoi la grotte de Lascaux a-t-elle \u00e9t\u00e9 ferm\u00e9e au public en 1963 ?', opts: ['Un effondrement partiel', 'La d\u00e9gradation caus\u00e9e par les visiteurs', 'La d\u00e9couverte de nouvelles galeries', 'Un litige juridique'], correct: 1, explanation: 'Le CO2 et l\'humidit\u00e9 produits par les milliers de visiteurs quotidiens d\u00e9gradaient les peintures, n\u00e9cessitant la fermeture.' }
          ],
          definitions: [
            { term: 'Art pari\u00e9tal', def: 'Art r\u00e9alis\u00e9 sur les parois (murs et plafonds) des grottes et abris rocheux, caract\u00e9ristique du Pal\u00e9olithique sup\u00e9rieur.' },
            { term: 'Pal\u00e9olithique sup\u00e9rieur', def: 'Derni\u00e8re phase de l\'\u00e2ge de pierre ancien, d\'environ 45 000 \u00e0 10 000 avant notre \u00e8re, marqu\u00e9e par l\'apparition de l\'Homo sapiens en Europe.' },
            { term: 'Pigment', def: 'Substance color\u00e9e, naturelle ou synth\u00e9tique, utilis\u00e9e pour cr\u00e9er des peintures et des teintures.' },
            { term: 'Magdal\u00e9nien', def: 'Culture pr\u00e9historique du Pal\u00e9olithique sup\u00e9rieur (environ 17 000 \u00e0 12 000 avant notre \u00e8re), connue pour son art pari\u00e9tal et mobilier remarquable.' },
            { term: 'Ocre', def: 'Argile naturelle color\u00e9e par des oxydes de fer, utilis\u00e9e comme pigment depuis la pr\u00e9histoire.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le chien Robot, qui a conduit les adolescents \u00e0 la grotte, est devenu l\'animal le plus c\u00e9l\u00e8bre de l\'histoire de l\'arch\u00e9ologie.' },
            { front: '\uD83D\uDCCA Chiffre cl\u00e9', back: 'Lascaux contient environ 600 peintures et 1 500 gravures r\u00e9parties dans plusieurs salles et galeries.' },
            { front: '\uD83C\uDFAF Astuce m\u00e9mo', back: 'Retenez \u00ab 1940, 4 ados, 17 000 ans \u00bb : d\u00e9couverte en 1940 par 4 adolescents, peintures dat\u00e9es de 17 000 ans.' }
          ]
        },
        {
          slug: 'art-mesopotamien',
          title: 'L\'art m\u00e9sopotamien',
          description: 'Explorez les cr\u00e9ations artistiques des civilisations de M\u00e9sopotamie, berceau de l\'\u00e9criture et de l\'urbanisme.',
          intro: 'La M\u00e9sopotamie, r\u00e9gion situ\u00e9e entre le Tigre et l\'Euphrate (actuel Irak), a vu na\u00eetre certaines des premi\u00e8res civilisations urbaines de l\'histoire. De Sum\u00e9riens en Babyloniens, d\'Assyriens en Perses, ces peuples ont produit un art monumental au service du pouvoir politique et religieux, marqu\u00e9 par la sculpture, l\'architecture et les arts d\u00e9coratifs.',
          introHighlight: 'La M\u00e9sopotamie est le berceau de l\'\u00e9criture cun\u00e9iforme, de l\'urbanisme et de formes artistiques qui ont influenc\u00e9 tout le Proche-Orient ancien.',
          intro2: '',
          sections: [
            {
              title: 'Les Sum\u00e9riens et les premiers temples',
              paragraphs: [
                'La civilisation sum\u00e9rienne, \u00e9tablie d\u00e8s le IVe mill\u00e9naire avant notre \u00e8re, a cr\u00e9\u00e9 les premi\u00e8res cit\u00e9s-\u00c9tats comme Uruk, Ur et Lagash. Les Sum\u00e9riens ont invent\u00e9 l\'\u00e9criture cun\u00e9iforme vers 3 300 avant J.-C. et \u00e9difi\u00e9 les premi\u00e8res ziggourats, temples \u00e0 \u00e9tages d\u00e9di\u00e9s aux divinit\u00e9s protectrices de chaque cit\u00e9.',
                'La sculpture sum\u00e9rienne se caract\u00e9rise par des statues votives aux grands yeux \u00e9carquill\u00e9s, symbole de la pi\u00e9t\u00e9 et de l\'attention port\u00e9e aux dieux. L\'\u00c9tendard d\'Ur, d\u00e9couvert dans les tombes royales, est un panneau de mosa\u00efque en lapis-lazuli et coquillage illustrant des sc\u00e8nes de guerre et de banquet.',
                'Les Sum\u00e9riens excellaient \u00e9galement dans la glyptique, l\'art de graver des sceaux-cylindres. Ces petits objets en pierre, roul\u00e9s sur l\'argile humide, servaient de signatures et de protections magiques, tout en d\u00e9ployant des sc\u00e8nes mythologiques d\'une finesse remarquable.'
              ],
              highlight: 'Les sceaux-cylindres m\u00e9sopotamiens sont consid\u00e9r\u00e9s comme les premiers objets d\'art sériels de l\'histoire.'
            },
            {
              title: 'L\'empire babylonien et l\'art au service du pouvoir',
              paragraphs: [
                'Babylone, sous le r\u00e8gne d\'Hammourabi (XVIIIe si\u00e8cle av. J.-C.), puis de Nabuchodonosor II (VIe si\u00e8cle av. J.-C.), devint la plus grande m\u00e9tropole du monde antique. La st\u00e8le du Code d\'Hammourabi, sculpt\u00e9e en diorite noire, repr\u00e9sente le roi recevant les lois du dieu Shamash et constitue un chef-d\'\u0153uvre de la sculpture bas-relief.',
                'La porte d\'Ishtar, construite sous Nabuchodonosor II vers 575 avant J.-C., est l\'un des monuments les plus spectaculaires de l\'Antiquit\u00e9. Recouverte de briques \u00e9maill\u00e9es bleu cobalt, elle est orn\u00e9e de bas-reliefs repr\u00e9sentant des taureaux et des dragons, symboles des divinit\u00e9s Adad et Marduk. Reconstruite au mus\u00e9e de Pergame \u00e0 Berlin, elle t\u00e9moigne de la ma\u00eetrise technique des artisans babyloniens.',
                'Les jardins suspendus de Babylone, attribu\u00e9s \u00e0 Nabuchodonosor II, figuraient parmi les Sept Merveilles du monde antique. Bien que leur existence r\u00e9elle soit d\u00e9battue, ils illustrent l\'importance de l\'esth\u00e9tique dans la culture babylonienne.'
              ],
              highlight: 'La porte d\'Ishtar est l\'un des rares exemples d\'architecture color\u00e9e de l\'Antiquit\u00e9 conserv\u00e9s jusqu\'\u00e0 nos jours.'
            },
            {
              title: 'L\'art assyrien : la puissance sculpt\u00e9e',
              paragraphs: [
                'L\'empire assyrien, dominant le Proche-Orient du IXe au VIIe si\u00e8cle avant J.-C., a produit un art de propagande au service de la royaut\u00e9. Les palais de Nimroud, Khorsabad et Ninive \u00e9taient orn\u00e9s de gigantesques bas-reliefs en alb\u00e2tre repr\u00e9sentant des sc\u00e8nes de chasse, de guerre et de rituels religieux.',
                'Les lamassu, statues colossales mi-humaines mi-animales plac\u00e9es aux entr\u00e9es des palais, sont l\'embl\u00e8me de l\'art assyrien. Ces \u00eatres hybrides, pourvus d\'un visage humain barbu, d\'un corps de taureau ail\u00e9 et de cinq pattes (pour para\u00eetre complets de face comme de profil), servaient de gardiens protecteurs.',
                'Les reliefs de la chasse au lion d\'Assurbanipal, conserv\u00e9s au British Museum, comptent parmi les chefs-d\'\u0153uvre de la sculpture mondiale. La pr\u00e9cision anatomique des animaux et l\'intensit\u00e9 dramatique des sc\u00e8nes r\u00e9v\u00e8lent un naturalisme saisissant pour l\'\u00e9poque.'
              ],
              highlight: 'Les bas-reliefs assyriens de la chasse au lion sont consid\u00e9r\u00e9s comme l\'une des plus grandes r\u00e9alisations de la sculpture antique.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'une ziggourat ?', opts: ['Un temple \u00e0 \u00e9tages', 'Une statue votive', 'Un sceau-cylindre', 'Une fresque murale'], correct: 0, explanation: 'La ziggourat est un temple m\u00e9sopotamien \u00e0 \u00e9tages, d\u00e9di\u00e9 \u00e0 la divinit\u00e9 protectrice d\'une cit\u00e9.' },
            { q: 'De quelles couleurs est la porte d\'Ishtar \u00e0 Babylone ?', opts: ['Rouge et or', 'Bleu cobalt avec des reliefs dor\u00e9s', 'Noir et argent', 'Vert et blanc'], correct: 1, explanation: 'La porte d\'Ishtar est recouverte de briques \u00e9maill\u00e9es bleu cobalt orn\u00e9es de bas-reliefs d\'animaux.' },
            { q: 'Qu\'est-ce qu\'un lamassu ?', opts: ['Un scribe babylonien', 'Une statue gardienne mi-humaine mi-animale', 'Un type de poterie', 'Un instrument de musique'], correct: 1, explanation: 'Le lamassu est une statue colossale \u00e0 t\u00eate humaine et corps de taureau ail\u00e9, gardienne des palais assyriens.' }
          ],
          definitions: [
            { term: 'Ziggourat', def: 'Temple m\u00e9sopotamien en forme de pyramide \u00e0 \u00e9tages, surmont\u00e9 d\'un sanctuaire d\u00e9di\u00e9 \u00e0 une divinit\u00e9.' },
            { term: 'Cun\u00e9iforme', def: 'Syst\u00e8me d\'\u00e9criture invent\u00e9 par les Sum\u00e9riens, constitu\u00e9 de signes en forme de coins imprim\u00e9s dans l\'argile.' },
            { term: 'Glyptique', def: 'Art de graver des pierres fines, notamment les sceaux-cylindres en M\u00e9sopotamie.' },
            { term: 'Bas-relief', def: 'Sculpture dont les figures se d\u00e9tachent l\u00e9g\u00e8rement du fond, sans \u00eatre enti\u00e8rement d\u00e9tach\u00e9es.' },
            { term: 'Lamassu', def: 'Statue colossale assyrienne repr\u00e9sentant un \u00eatre hybride \u00e0 t\u00eate humaine, corps de taureau et ailes d\'aigle.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les lamassu assyriens ont cinq pattes : vus de face ils semblent immobiles, vus de profil ils semblent marcher.' },
            { front: '\uD83D\uDCCA Chiffre cl\u00e9', back: 'La porte d\'Ishtar mesurait environ 14 m\u00e8tres de haut et \u00e9tait orn\u00e9e de 575 repr\u00e9sentations d\'animaux.' },
            { front: '\uD83C\uDFAF Astuce m\u00e9mo', back: 'Sum\u00e9riens = sceaux-cylindres, Babyloniens = briques \u00e9maill\u00e9es, Assyriens = bas-reliefs de palais.' }
          ]
        },
        {
          slug: 'art-egyptien',
          title: 'L\'art \u00e9gyptien',
          description: 'Plongez dans l\'art de l\'\u00c9gypte ancienne, entre pyramides, fresques fun\u00e9raires et sculptures monumentales.',
          intro: 'L\'art \u00e9gyptien s\'\u00e9tend sur plus de trois mill\u00e9naires, de la p\u00e9riode pr\u00e9dynastique (vers 4000 av. J.-C.) \u00e0 la conqu\u00eate romaine (30 av. J.-C.). Soumis \u00e0 des conventions rigoureuses dict\u00e9es par la religion et le pouvoir pharaonique, il poursuit un objectif fondamental : assurer la survie de l\'\u00e2me dans l\'au-del\u00e0 et glorifier les dieux et les souverains.',
          introHighlight: 'L\'art \u00e9gyptien ob\u00e9it \u00e0 des r\u00e8gles immuables pendant trois mill\u00e9naires, privil\u00e9giant la clart\u00e9 et la permanence sur le r\u00e9alisme.',
          intro2: '',
          sections: [
            {
              title: 'Les conventions de la repr\u00e9sentation',
              paragraphs: [
                'L\'art \u00e9gyptien repose sur le principe d\'aspectivit\u00e9 : chaque partie du corps est repr\u00e9sent\u00e9e sous l\'angle qui la rend la plus reconnaissable. Ainsi, le visage est de profil, l\'\u0153il de face, les \u00e9paules de face et les jambes de profil. Cette convention, loin d\'\u00eatre une maladresse, r\u00e9pond \u00e0 une logique de lisibilit\u00e9 maximale destin\u00e9e \u00e0 assurer la reconnaissance de la figure dans l\'au-del\u00e0.',
                'La taille des personnages est hi\u00e9rarchique : le pharaon est repr\u00e9sent\u00e9 plus grand que ses sujets, les dieux plus grands que les mortels. Cette perspective hi\u00e9rarchique refl\u00e8te l\'ordre social et cosmique de la civilisation \u00e9gyptienne.',
                'Les couleurs ont une valeur symbolique pr\u00e9cise : le vert repr\u00e9sente la renaissance et la v\u00e9g\u00e9tation, le bleu le Nil et le ciel, le rouge le d\u00e9sert et le chaos, le noir la terre fertile et la r\u00e9surrection, l\'or la chair des dieux et l\'\u00e9ternit\u00e9.'
              ],
              highlight: 'Le principe d\'aspectivit\u00e9 \u00e9gyptien ne cherche pas \u00e0 reproduire ce que l\'\u0153il voit, mais \u00e0 montrer ce que l\'esprit sait de chaque \u00e9l\u00e9ment.'
            },
            {
              title: 'Architecture et sculpture monumentales',
              paragraphs: [
                'Les pyramides de Gizeh, construites durant l\'Ancien Empire (vers 2600-2500 av. J.-C.), repr\u00e9sentent l\'apog\u00e9e de l\'architecture fun\u00e9raire \u00e9gyptienne. La Grande Pyramide de Kh\u00e9ops, haute de 146 m\u00e8tres \u00e0 l\'origine, est la seule des Sept Merveilles du monde antique encore debout. Sa construction a n\u00e9cessit\u00e9 environ 2,3 millions de blocs de calcaire.',
                'Le Grand Sphinx de Gizeh, sculpt\u00e9 dans un affleurement rocheux, mesure 73 m\u00e8tres de long et 20 m\u00e8tres de haut. Mi-homme mi-lion, il symbolise la puissance royale et la sagesse divine. Les temples de Karnak et de Louxor, \u00e9difi\u00e9s durant le Nouvel Empire, impressionnent par leurs colonnades massives et leurs all\u00e9es de sphinx.',
                'La sculpture \u00e9gyptienne comprend des statues royales, des statuettes fun\u00e9raires (ouchebtis) et des bustes d\'une finesse exceptionnelle. Le buste de N\u00e9fertiti, sculpt\u00e9 par Thoutm\u00e8s vers 1345 avant J.-C., est consid\u00e9r\u00e9 comme l\'un des plus beaux portraits de l\'Antiquit\u00e9.'
              ],
              highlight: 'La Grande Pyramide de Kh\u00e9ops est rest\u00e9e la structure la plus haute du monde pendant pr\u00e8s de 4 000 ans.'
            },
            {
              title: 'Peinture et arts fun\u00e9raires',
              paragraphs: [
                'Les tombes de la Vall\u00e9e des Rois et des nobles th\u00e9bains sont orn\u00e9es de peintures murales d\'une vivacit\u00e9 exceptionnelle. Ces fresques d\u00e9peignent la vie quotidienne, les rituels religieux et le voyage de l\'\u00e2me dans l\'au-del\u00e0 d\u00e9crit par le Livre des Morts. La tombe de N\u00e9fertari, \u00e9pouse de Rams\u00e8s II, est c\u00e9l\u00e8bre pour la beaut\u00e9 de ses peintures aux couleurs pr\u00e9serv\u00e9es.',
                'L\'art fun\u00e9raire \u00e9gyptien inclut \u00e9galement les masques mor tuaires, dont le plus c\u00e9l\u00e8bre est le masque d\'or de Toutankhamon, pesant plus de 11 kilogrammes d\'or massif. Les sarcophages, les canopes et le mobilier fun\u00e9raire \u00e9taient orn\u00e9s de textes hi\u00e9roglyphiques et de sc\u00e8nes protectrices.'
              ],
              highlight: 'Le masque fun\u00e9raire de Toutankhamon, d\u00e9couvert en 1922 par Howard Carter, est devenu le symbole universel de l\'\u00c9gypte ancienne.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que le principe d\'aspectivit\u00e9 en art \u00e9gyptien ?', opts: ['La perspective lin\u00e9aire', 'La repr\u00e9sentation de chaque partie du corps sous son angle le plus lisible', 'L\'utilisation de la sym\u00e9trie parfaite', 'La peinture en trompe-l\'\u0153il'], correct: 1, explanation: 'L\'aspectivit\u00e9 consiste \u00e0 repr\u00e9senter chaque \u00e9l\u00e9ment sous l\'angle qui le rend le plus reconnaissable, m\u00ealant vues de face et de profil.' },
            { q: 'Quelle est la seule Merveille du monde antique encore debout ?', opts: ['Le Colosse de Rhodes', 'Le temple d\'Art\u00e9mis', 'La Grande Pyramide de Kh\u00e9ops', 'Les jardins de Babylone'], correct: 2, explanation: 'La Grande Pyramide de Kh\u00e9ops \u00e0 Gizeh est la seule des Sept Merveilles du monde antique \u00e0 avoir surv\u00e9cu.' },
            { q: 'Que symbolise la couleur noire dans l\'art \u00e9gyptien ?', opts: ['Le d\u00e9sert', 'La mort d\u00e9finitive', 'La terre fertile et la r\u00e9surrection', 'Le ciel nocturne'], correct: 2, explanation: 'Le noir \u00e9voque la terre noire fertile d\u00e9pos\u00e9e par les crues du Nil, associ\u00e9e \u00e0 la renaissance et \u00e0 la r\u00e9surrection.' }
          ],
          definitions: [
            { term: 'Aspectivit\u00e9', def: 'Convention de repr\u00e9sentation \u00e9gyptienne montrant chaque partie d\'une figure sous l\'angle qui la rend la plus reconnaissable.' },
            { term: 'Hi\u00e9roglyphe', def: 'Caract\u00e8re d\'\u00e9criture de l\'\u00c9gypte ancienne combinant signes id\u00e9ographiques et phon\u00e9tiques.' },
            { term: 'Ouchebti', def: 'Petite statuette fun\u00e9raire plac\u00e9e dans les tombes \u00e9gyptiennes pour servir le d\u00e9funt dans l\'au-del\u00e0.' },
            { term: 'Canope', def: 'Vase fun\u00e9raire destin\u00e9 \u00e0 conserver les organes du d\u00e9funt apr\u00e8s la momification.' },
            { term: 'Cartouche', def: 'Cadre ovale entourant le nom du pharaon \u00e9crit en hi\u00e9roglyphes, symbole de protection.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le mot \u00ab \u00c9gypte \u00bb vient du grec Aigyptos, lui-m\u00eame d\u00e9riv\u00e9 de l\'\u00e9gyptien Hout-Ka-Ptah (\u00ab demeure de l\'\u00e2me de Ptah \u00bb).' },
            { front: '\uD83D\uDCCA Chiffre cl\u00e9', back: 'Le masque de Toutankhamon p\u00e8se 11,26 kg d\'or massif et mesure 54 cm de haut.' },
            { front: '\uD83C\uDFAF Astuce m\u00e9mo', back: 'Profil-Face-Profil : en art \u00e9gyptien, le visage est de profil, les \u00e9paules de face, les jambes de profil.' }
          ]
        },
        {
          slug: 'art-grec',
          title: 'L\'art grec',
          description: 'D\u00e9couvrez l\'art de la Gr\u00e8ce antique, berceau de l\'id\u00e9al classique de beaut\u00e9.',
          intro: 'L\'art grec, d\u00e9velopp\u00e9 entre le VIIIe et le Ier si\u00e8cle avant J.-C., constitue l\'un des fondements de la tradition artistique occidentale. Passant de formes g\u00e9om\u00e9triques rigides \u00e0 un naturalisme id\u00e9alis\u00e9, les artistes grecs ont invent\u00e9 le concept de beaut\u00e9 harmonieuse fond\u00e9e sur les proportions math\u00e9matiques, influençant de mani\u00e8re d\u00e9cisive l\'art romain, la Renaissance et le n\u00e9oclassicisme.',
          introHighlight: 'L\'art grec a pos\u00e9 les fondements de l\'esth\u00e9tique occidentale en cherchant \u00e0 repr\u00e9senter la beaut\u00e9 id\u00e9ale \u00e0 travers l\'harmonie des proportions.',
          intro2: '',
          sections: [
            {
              title: 'L\'\u00e9volution de la sculpture grecque',
              paragraphs: [
                'La sculpture grecque conna\u00eet trois grandes p\u00e9riodes. L\'\u00e9poque archa\u00efque (VIIe-Ve si\u00e8cle av. J.-C.) produit les kouros et kor\u00e9, statues de jeunes gens debout au sourire fig\u00e9 dit \u00ab archa\u00efque \u00bb, inspir\u00e9es de la statuaire \u00e9gyptienne mais progressivement anim\u00e9es d\'un mouvement naturel.',
                'L\'\u00e9poque classique (Ve-IVe si\u00e8cle av. J.-C.) atteint l\'id\u00e9al de perfection avec des sculpteurs comme Phidias, Myron et Polycl\u00e8te. Le Doryphore de Polycl\u00e8te incarne le canon des proportions id\u00e9ales du corps humain. Les sculptures du Parth\u00e9non, dirig\u00e9es par Phidias, repr\u00e9sentent l\'apog\u00e9e de l\'art classique.',
                'L\'\u00e9poque hell\u00e9nistique (IVe-Ier si\u00e8cle av. J.-C.) rompt avec la s\u00e9r\u00e9nit\u00e9 classique pour exprimer le mouvement, l\'\u00e9motion et le drame. La Victoire de Samothrace, le Laocoon et la V\u00e9nus de Milo sont les chefs-d\'\u0153uvre de cette p\u00e9riode, caract\u00e9ris\u00e9e par un r\u00e9alisme expressif et une th\u00e9\u00e2tralit\u00e9 assumée.'
              ],
              highlight: 'Le Doryphore de Polycl\u00e8te \u00e9tablit un canon de proportions id\u00e9ales o\u00f9 la t\u00eate repr\u00e9sente un septi\u00e8me de la hauteur totale du corps.'
            },
            {
              title: 'Architecture et ordres classiques',
              paragraphs: [
                'L\'architecture grecque a d\u00e9fini trois ordres : dorique, ionique et corinthien, chacun caract\u00e9ris\u00e9 par un style de colonnes, de chapiteaux et de proportions sp\u00e9cifiques. L\'ordre dorique, le plus ancien et le plus sobre, est illustr\u00e9 par le Parth\u00e9non d\'Ath\u00e8nes (447-432 av. J.-C.), temple d\u00e9di\u00e9 \u00e0 la d\u00e9esse Ath\u00e9na.',
                'Le Parth\u00e9non, con\u00e7u par les architectes Ictinos et Callicrat\u00e8s, utilise des corrections optiques subtiles : les colonnes sont l\u00e9g\u00e8rement inclin\u00e9es vers l\'int\u00e9rieur et renfl\u00e9es en leur milieu (entasis) pour para\u00eetre parfaitement droites \u00e0 l\'\u0153il humain. Le stylobate est l\u00e9g\u00e8rement bomb\u00e9 pour \u00e9viter l\'illusion d\'affaissement.',
                'Les temples grecs \u00e9taient originellement peints de couleurs vives \u2014 bleu, rouge, or \u2014 contrairement \u00e0 l\'image de blancheur que nous en avons aujourd\'hui. Cette polychromie architecturale a \u00e9t\u00e9 confirm\u00e9e par des analyses scientifiques des traces de pigments sur les marbres.'
              ],
              highlight: 'Les colonnes du Parth\u00e9non ne comportent aucune ligne parfaitement droite : chaque \u00e9l\u00e9ment est subtilement courb\u00e9 pour cr\u00e9er une illusion de perfection.'
            },
            {
              title: 'C\u00e9ramique et peinture',
              paragraphs: [
                'La c\u00e9ramique grecque constitue l\'une des sources les plus pr\u00e9cieuses pour comprendre la vie quotidienne, la mythologie et les pratiques sociales de la Gr\u00e8ce antique. Deux techniques principales se sont succ\u00e9d\u00e9 : les figures noires sur fond rouge (VIe si\u00e8cle av. J.-C.), puis les figures rouges sur fond noir (Ve si\u00e8cle av. J.-C.).',
                'Parmi les peintres c\u00e9l\u00e8bres, Exekias excelle dans la technique des figures noires avec son amphore repr\u00e9sentant Ajax et Achille jouant aux d\u00e9s. Euph ronios, ma\u00eetre des figures rouges, est c\u00e9l\u00e8bre pour son crat\u00e8re repr\u00e9sentant la mort de Sarp\u00e9don. Ces vases \u00e9taient utilis\u00e9s lors des banquets, des c\u00e9r\u00e9monies religieuses et des rites fun\u00e9raires.',
                'La grande peinture grecque (fresques, tableaux sur bois) a presque enti\u00e8rement disparu. Nous la connaissons surtout par les descriptions d\'auteurs comme Pline l\'Ancien, qui c\u00e9l\u00e8bre des peintres comme Apelle et Zeuxis, capables de cr\u00e9er des illusions si parfaites que des oiseaux venaient picorer les raisins peints.'
              ],
              highlight: 'La grande peinture grecque a quasiment disparu : seule la c\u00e9ramique nous permet d\'imaginer la richesse picturale de cette civilisation.'
            }
          ],
          quiz: [
            { q: 'Quel sculpteur a cr\u00e9\u00e9 le canon des proportions id\u00e9ales du corps humain ?', opts: ['Phidias', 'Polycl\u00e8te', 'Praxitèle', 'Myron'], correct: 1, explanation: 'Polycl\u00e8te a \u00e9tabli le canon des proportions id\u00e9ales avec sa statue le Doryphore, o\u00f9 la t\u00eate repr\u00e9sente 1/7 de la hauteur totale.' },
            { q: 'Qu\'est-ce que l\'entasis en architecture grecque ?', opts: ['Une frise d\u00e9corative', 'Un renflement au milieu des colonnes', 'Un type de chapiteau', 'Une technique de polychromie'], correct: 1, explanation: 'L\'entasis est le l\u00e9ger renflement au milieu des colonnes, une correction optique pour qu\'elles paraissent parfaitement droites.' },
            { q: 'Quelle technique c\u00e9ramique a remplac\u00e9 les figures noires au Ve si\u00e8cle av. J.-C. ?', opts: ['La mosa\u00efque', 'Les figures rouges', 'L\'\u00e9maillage', 'La dorure'], correct: 1, explanation: 'La technique des figures rouges sur fond noir a remplac\u00e9 les figures noires, permettant un plus grand r\u00e9alisme anatomique.' }
          ],
          definitions: [
            { term: 'Kouros', def: 'Statue grecque archa\u00efque repr\u00e9sentant un jeune homme nu debout, les bras le long du corps et le pied gauche avanc\u00e9.' },
            { term: 'Canon', def: 'Ensemble de r\u00e8gles d\u00e9finissant les proportions id\u00e9ales du corps humain en sculpture.' },
            { term: 'Entasis', def: 'L\u00e9ger renflement au milieu d\'une colonne, correction optique utilis\u00e9e dans l\'architecture grecque classique.' },
            { term: 'Ordre dorique', def: 'Le plus ancien des trois ordres architecturaux grecs, caract\u00e9ris\u00e9 par des colonnes trap ues sans base et un chapiteau sobre.' },
            { term: 'Polychromie', def: 'Utilisation de plusieurs couleurs dans la d\u00e9coration d\'une \u0153uvre d\'art ou d\'un \u00e9difice.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les statues et temples grecs \u00e9taient peints de couleurs vives. Leur blancheur actuelle est due \u00e0 la disparition des pigments au fil du temps.' },
            { front: '\uD83D\uDCCA Chiffre cl\u00e9', back: 'Le Parth\u00e9non comporte 46 colonnes doriques ext\u00e9rieures et a \u00e9t\u00e9 construit en seulement 15 ans (447-432 av. J.-C.).' },
            { front: '\uD83C\uDFAF Astuce m\u00e9mo', back: 'Les trois \u00e9poques de la sculpture grecque : Archa\u00efque (rigide) → Classique (id\u00e9al) → Hell\u00e9nistique (\u00e9motionnel).' }
          ]
        },
        {
          slug: 'art-romain',
          title: 'L\'art romain',
          description: '\u00c9tudiez l\'art de la Rome antique, entre h\u00e9ritage grec et innovations architecturales.',
          intro: 'L\'art romain, d\u00e9velopp\u00e9 du VIIIe si\u00e8cle avant J.-C. au Ve si\u00e8cle apr\u00e8s J.-C., est profond\u00e9ment marqu\u00e9 par l\'influence grecque tout en d\u00e9veloppant des caract\u00e9ristiques propres. Les Romains ont excell\u00e9 dans l\'architecture (arc, vo\u00fbte, b\u00e9ton), le portrait r\u00e9aliste et la peinture murale, mettant l\'art au service de la glorification de l\'Empire et de la vie priv\u00e9e.',
          introHighlight: 'Les Romains ont transform\u00e9 l\'h\u00e9ritage artistique grec en un art pragmatique et monumental au service de la puissance imp\u00e9riale.',
          intro2: '',
          sections: [
            {
              title: 'Architecture et ing\u00e9nierie',
              paragraphs: [
                'L\'architecture romaine se distingue par l\'utilisation syst\u00e9matique de l\'arc en plein cintre, de la vo\u00fbte et du b\u00e9ton (opus caementicium), permettant de couvrir des espaces bien plus vastes que l\'architecture grecque \u00e0 colonnes et linteaux. Le Panth\u00e9on de Rome, reconstruit sous Hadrien vers 125 apr\u00e8s J.-C., poss\u00e8de une coupole de 43,3 m\u00e8tres de diam\u00e8tre, record inégal\u00e9 pendant plus de 1 300 ans.',
                'Le Colis\u00e9e (ou amphith\u00e9\u00e2tre Flavien), inaugur\u00e9 en 80 apr\u00e8s J.-C., pouvait accueillir entre 50 000 et 80 000 spectateurs. Sa fa\u00e7ade superpose les trois ordres grecs (dorique, ionique, corinthien), et son syst\u00e8me de vomitoires permettait l\'\u00e9vacuation de l\'ensemble du public en quelques minutes.',
                'Les Romains ont \u00e9galement b\u00e2ti des aqueducs, des thermes, des basiliques et des forums d\'une ampleur sans pr\u00e9c\u00e9dent. Le pont du Gard, aqueduc de 49 m\u00e8tres de hauteur construit au Ier si\u00e8cle, illustre la combinaison de prouesse technique et de sens esth\u00e9tique caract\u00e9ristique de l\'art romain.'
              ],
              highlight: 'La coupole du Panth\u00e9on de Rome est rest\u00e9e la plus grande coupole en b\u00e9ton non arm\u00e9 du monde pendant pr\u00e8s de deux mill\u00e9naires.'
            },
            {
              title: 'Sculpture et portrait',
              paragraphs: [
                'Si la sculpture grecque recherchait la beaut\u00e9 id\u00e9ale, l\'art du portrait romain privil\u00e9gie le r\u00e9alisme. La tradition du \u00ab jus imaginum \u00bb (droit aux images) poussait les familles patriciennes \u00e0 conserver des masques en cire de leurs anc\u00eatres, favorisant un style portraitiste v\u00e9riste qui n\'h\u00e9site pas \u00e0 repr\u00e9senter rides, calvitie et imperfections.',
                'Les bustes imp\u00e9riaux, diffus\u00e9s dans tout l\'Empire, servaient d\'instruments de propagande. Auguste s\'est fait repr\u00e9senter dans un style id\u00e9alis\u00e9 inspir\u00e9 du classicisme grec, tandis que les empereurs de la dynastie flavienne ont adopt\u00e9 un r\u00e9alisme plus marqu\u00e9. La statue \u00e9questre de Marc Aur\u00e8le, en bronze dor\u00e9, est l\'une des rares statues \u00e9questres antiques conserv\u00e9es.',
                'Les reliefs historiques ornant les arcs de triomphe et les colonnes comm\u00e9moratives constituent un genre sp\u00e9cifiquement romain. La colonne Trajane, haute de 40 m\u00e8tres, d\u00e9roule en spirale un r\u00e9cit sculpt\u00e9 de 200 m\u00e8tres de long illustrant les campagnes de l\'empereur en Dacie.'
              ],
              highlight: 'La colonne Trajane est le premier r\u00e9cit en images continu de l\'histoire de l\'art, v\u00e9ritable \u00ab bande dessin\u00e9e \u00bb antique.'
            },
            {
              title: 'Peinture murale et mosa\u00efque',
              paragraphs: [
                'Les peintures murales de Pomp\u00e9i et d\'Herculanum, pr\u00e9serv\u00e9es par l\'\u00e9ruption du V\u00e9suve en 79 apr\u00e8s J.-C., constituent le plus grand corpus de peinture antique conserv\u00e9. L\'arch\u00e9ologue August Mau a distingu\u00e9 quatre styles pomp\u00e9iens, allant de l\'imitation de marbres \u00e0 des compositions architecturales en trompe-l\'\u0153il d\'une grande sophistication.',
                'La mosa\u00efque romaine, utilis\u00e9e pour d\u00e9corer sols et murs, atteint une virtuosit\u00e9 technique remarquable. La mosa\u00efque d\'Alexandre, trouv\u00e9e \u00e0 Pomp\u00e9i, repr\u00e9sente la bataille d\'Issos entre Alexandre le Grand et Darius III avec plus d\'un million de tesselles. Les mosa\u00efques nord-africaines et siciliennes, comme celles de la villa du Casale \u00e0 Piazza Armerina, comptent parmi les mieux conserv\u00e9es.',
                'La peinture de paysage, les natures mortes et les portraits du Fayoum (en \u00c9gypte romaine) r\u00e9v\u00e8lent un art priv\u00e9 d\'une grande sensibilit\u00e9. Les portraits du Fayoum, peints \u00e0 l\'encaustique sur des panneaux de bois, pr\u00e9sentent un r\u00e9alisme psychologique qui anticipe de plusieurs si\u00e8cles le portrait moderne.'
              ],
              highlight: 'Les peintures de Pomp\u00e9i nous r\u00e9v\u00e8lent un art de vivre raffin\u00e9, o\u00f9 la d\u00e9coration int\u00e9rieure jouait un r\u00f4le essentiel dans la maison romaine.'
            }
          ],
          quiz: [
            { q: 'Quel mat\u00e9riau r\u00e9volutionnaire les Romains ont-ils utilis\u00e9 en architecture ?', opts: ['Le marbre de Carrare', 'Le b\u00e9ton (opus caementicium)', 'La brique cuite', 'Le granit poli'], correct: 1, explanation: 'Le b\u00e9ton romain (opus caementicium) a permis de construire des vo\u00fbtes et des coupoles impossibles avec les techniques grecques.' },
            { q: 'Qu\'est-ce que le verisme dans le portrait romain ?', opts: ['Un style id\u00e9alis\u00e9', 'Un r\u00e9alisme extr\u00eame montrant les d\u00e9fauts physiques', 'Une technique de mosa\u00efque', 'Un type de fresque'], correct: 1, explanation: 'Le v\u00e9risme est un style de portrait r\u00e9aliste typiquement romain, repr\u00e9sentant fid\u00e8lement rides, calvitie et imperfections.' },
            { q: 'Comment les peintures de Pomp\u00e9i ont-elles \u00e9t\u00e9 pr\u00e9serv\u00e9es ?', opts: ['Par un vernis protecteur', 'Gr\u00e2ce \u00e0 l\'\u00e9ruption du V\u00e9suve en 79 ap. J.-C.', 'Par des restaurations m\u00e9di\u00e9vales', 'Gr\u00e2ce au climat sec'], correct: 1, explanation: 'L\'\u00e9ruption du V\u00e9suve a enseveli Pomp\u00e9i sous des cendres volcaniques, pr\u00e9servant les peintures pendant pr\u00e8s de 2 000 ans.' }
          ],
          definitions: [
            { term: 'Opus caementicium', def: 'B\u00e9ton romain compos\u00e9 de chaux, de pouzzolane et de gravats, utilis\u00e9 pour construire vo\u00fbtes et coupoles.' },
            { term: 'V\u00e9risme', def: 'Style de portrait romain privil\u00e9giant le r\u00e9alisme extr\u00eame, repr\u00e9sentant fid\u00e8lement les traits physiques du mod\u00e8le.' },
            { term: 'Tesselle', def: 'Petit cube de pierre, de verre ou de c\u00e9ramique utilis\u00e9 pour composer une mosa\u00efque.' },
            { term: 'Trompe-l\'\u0153il', def: 'Technique picturale visant \u00e0 cr\u00e9er l\'illusion de la r\u00e9alit\u00e9, donnant l\'impression que les objets peints sont r\u00e9els.' },
            { term: 'Encaustique', def: 'Technique de peinture utilisant des pigments m\u00e9lang\u00e9s \u00e0 de la cire d\'abeille fondue comme liant.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le b\u00e9ton romain, fabriqu\u00e9 avec de la pouzzolane volcanique, est si r\u00e9sistant que le Panth\u00e9on tient toujours debout apr\u00e8s 1 900 ans.' },
            { front: '\uD83D\uDCCA Chiffre cl\u00e9', back: 'La colonne Trajane mesure 40 m\u00e8tres de haut et d\u00e9roule une frise sculpt\u00e9e de 200 m\u00e8tres de long avec 2 500 figures.' },
            { front: '\uD83C\uDFAF Astuce m\u00e9mo', back: 'Art grec = id\u00e9al de beaut\u00e9, Art romain = r\u00e9alisme et puissance. Les Romains imitent les Grecs mais ajoutent le b\u00e9ton, le portrait v\u00e9riste et la propagande.' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  HUB 2 — Art médiéval
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'art-medieval',
      title: 'Art médiéval',
      description: 'De l\'art byzantin aux cathédrales gothiques, explorez dix siècles de création artistique au service de la foi chrétienne.',
      introText: 'L\'art médiéval couvre la période allant de la chute de l\'Empire romain d\'Occident (476) à la Renaissance (XVe siècle). Longtemps considéré comme un âge sombre, le Moyen Âge a en réalité produit des œuvres d\'une grande richesse technique et symbolique, principalement au service de la religion chrétienne et du pouvoir féodal.',
      introHighlight: 'L\'art médiéval ne cherche pas à imiter la réalité visible mais à rendre sensible le monde spirituel et divin.',
      lessons: [
        {
          slug: 'art-byzantin',
          title: 'L\'art byzantin',
          description: 'Découvrez l\'art de l\'Empire romain d\'Orient, entre mosaïques dorées et icônes sacrées.',
          intro: 'L\'art byzantin se développe à Constantinople (actuelle Istanbul) à partir du IVe siècle et rayonne dans tout l\'Empire romain d\'Orient jusqu\'à sa chute en 1453. Cet art sacré, au service de la théologie chrétienne orthodoxe, se caractérise par la splendeur de ses mosaïques à fond d\'or, la solennité hiératique de ses icônes et la majesté de son architecture religieuse.',
          introHighlight: 'L\'art byzantin a créé un langage visuel sacré qui reste la norme de l\'art religieux orthodoxe encore aujourd\'hui.',
          intro2: '',
          sections: [
            {
              title: 'Sainte-Sophie et l\'architecture byzantine',
              paragraphs: [
                'La basilique Sainte-Sophie de Constantinople, construite entre 532 et 537 sous l\'empereur Justinien par les architectes Anthémius de Tralles et Isidore de Milet, est le chef-d\'œuvre de l\'architecture byzantine. Sa coupole de 31 mètres de diamètre, percée de 40 fenêtres, semble flotter sur un anneau de lumière, créant un espace intérieur d\'une majesté sans précédent.',
                'L\'innovation majeure de Sainte-Sophie réside dans le système de pendentifs qui permettent de poser une coupole circulaire sur un plan carré. Cette prouesse technique a influencé toute l\'architecture religieuse ultérieure, tant chrétienne qu\'islamique. Après la conquête ottomane de 1453, Sainte-Sophie fut convertie en mosquée, puis en musée en 1934.',
                'L\'architecture byzantine privilégie les plans centrés surmontés de coupoles, contrairement aux basiliques romaines à plan allongé. Les églises sont conçues comme des images du cosmos : la coupole figure le ciel, l\'abside le paradis et la nef le monde terrestre.'
              ],
              highlight: 'Sainte-Sophie est restée la plus grande cathédrale du monde pendant près de mille ans, jusqu\'à la construction de la cathédrale de Séville en 1520.'
            },
            {
              title: 'Mosaïques et icônes',
              paragraphs: [
                'La mosaïque byzantine atteint un degré de raffinement inégalé. Les tesselles de verre dorées et colorées, inclinées à des angles variés, captent et reflètent la lumière des cierges, créant un effet de scintillement qui évoque la lumière divine. Les mosaïques de Ravenne (San Vitale, Sant\'Apollinare Nuovo) comptent parmi les plus belles d\'Occident.',
                'L\'icône byzantine obéit à des règles strictes de composition, de couleur et de symbolisme, codifiées lors des conciles. Le fond doré symbolise la lumière divine, les personnages sont représentés de face dans une attitude hiératique, et les proportions sont allongées pour suggérer la spiritualité. L\'icône n\'est pas une simple représentation mais une fenêtre ouverte sur le monde divin.',
                'La crise iconoclaste (726-843) a profondément marqué l\'art byzantin. Les iconoclastes, considérant les images religieuses comme des idoles, ont ordonné leur destruction. Le triomphe de l\'orthodoxie en 843 a rétabli le culte des images et renforcé leur importance théologique.'
              ],
              highlight: 'L\'icône byzantine n\'est pas un portrait mais une « théophanie » : une manifestation du divin rendue visible par l\'art.'
            },
            {
              title: 'Le rayonnement de l\'art byzantin',
              paragraphs: [
                'L\'influence byzantine s\'est étendue bien au-delà de Constantinople. En Italie, les mosaïques de Ravenne et de la basilique Saint-Marc à Venise témoignent de cette diffusion. En Russie, l\'art byzantin a donné naissance à une tradition iconographique propre, illustrée par l\'œuvre d\'Andreï Roublev au XVe siècle, notamment sa célèbre Trinité.',
                'Les Balkans, la Géorgie, l\'Arménie et l\'Éthiopie ont développé des traditions artistiques nourries par le modèle byzantin, tout en développant des caractéristiques régionales distinctes. L\'art copte d\'Égypte, avec ses textiles et ses icônes, constitue une autre branche importante de cette famille artistique.',
                'L\'héritage byzantin a également influencé l\'art roman occidental, notamment par la transmission de techniques de mosaïque, de peinture murale et d\'orfèvrerie. La quatrième croisade (1204) et le sac de Constantinople ont paradoxalement contribué à diffuser les trésors artistiques byzantins en Occident.'
              ],
              highlight: 'L\'art byzantin a façonné l\'identité visuelle du christianisme orthodoxe dans tout l\'est de l\'Europe et le Proche-Orient.'
            }
          ],
          quiz: [
            { q: 'Quelle innovation architecturale permet à Sainte-Sophie de poser une coupole sur un plan carré ?', opts: ['Les arcs-boutants', 'Les pendentifs', 'Les contreforts', 'Les piliers cruciformes'], correct: 1, explanation: 'Les pendentifs sont des triangles concaves qui assurent la transition entre le plan carré de la base et le cercle de la coupole.' },
            { q: 'Qu\'est-ce que la crise iconoclaste ?', opts: ['Une guerre entre empereurs', 'Un mouvement de destruction des images religieuses', 'Une réforme monastique', 'Un style artistique'], correct: 1, explanation: 'La crise iconoclaste (726-843) est un conflit théologique autour de la légitimité des images sacrées, les iconoclastes ordonnant leur destruction.' },
            { q: 'Que symbolise le fond doré des icônes byzantines ?', opts: ['La richesse de l\'empereur', 'La lumière divine', 'Le sable du désert', 'L\'or des marchands'], correct: 1, explanation: 'Le fond doré des icônes symbolise la lumière divine et l\'espace transcendant dans lequel se trouvent les figures saintes.' }
          ],
          definitions: [
            { term: 'Pendentif', def: 'Triangle sphérique concave permettant la transition entre un plan carré et une coupole circulaire en architecture.' },
            { term: 'Hiératique', def: 'Se dit d\'une attitude solennelle, figée et majestueuse, caractéristique de la représentation des figures sacrées dans l\'art byzantin.' },
            { term: 'Iconoclasme', def: 'Mouvement religieux opposé au culte des images sacrées, ayant entraîné la destruction massive d\'icônes et de mosaïques dans l\'Empire byzantin.' },
            { term: 'Icône', def: 'Image sacrée peinte sur panneau de bois, représentant le Christ, la Vierge ou les saints selon des conventions codifiées.' },
            { term: 'Tesselle', def: 'Petit cube de pierre, de verre ou d\'émail utilisé pour composer une mosaïque.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Sainte-Sophie a été successivement cathédrale chrétienne (537-1453), mosquée (1453-1934), musée (1934-2020) puis mosquée à nouveau depuis 2020.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La coupole de Sainte-Sophie mesure 31 mètres de diamètre et culmine à 55 mètres au-dessus du sol.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Art byzantin = fond d\'or + figures hiératiques + mosaïques scintillantes. Tout converge vers le sacré et la lumière divine.' }
          ]
        },
        {
          slug: 'art-roman',
          title: 'L\'art roman',
          description: 'Explorez l\'architecture et la sculpture romanes, premier grand style artistique de l\'Europe médiévale.',
          intro: 'L\'art roman se développe en Europe occidentale entre le Xe et le XIIe siècle, période de renouveau après les invasions barbares et l\'effondrement carolingien. Caractérisé par des églises massives aux murs épais, des voûtes en berceau et une sculpture monumentale intégrée à l\'architecture, l\'art roman constitue le premier style véritablement européen, unifiant des traditions locales diverses sous l\'influence de l\'Église et des pèlerinages.',
          introHighlight: 'L\'art roman est le premier style artistique commun à toute l\'Europe chrétienne occidentale, favorisé par les routes de pèlerinage.',
          intro2: '',
          sections: [
            {
              title: 'Architecture romane : la pierre au service de la foi',
              paragraphs: [
                'L\'architecture romane se caractérise par l\'utilisation de la voûte en berceau (demi-cylindre) et de la voûte d\'arêtes (croisement de deux berceaux), qui remplacent les charpentes en bois vulnérables aux incendies. Les murs, très épais pour supporter le poids des voûtes, sont percés de fenêtres étroites, créant des intérieurs sombres et recueillis.',
                'Le plan des églises romanes reprend la forme de la croix latine, avec une nef principale flanquée de collatéraux, un transept et un chœur orienté vers l\'est. Les grandes églises de pèlerinage, comme Saint-Sernin de Toulouse et Saint-Jacques-de-Compostelle, ajoutent un déambulatoire permettant aux pèlerins de circuler autour des reliques.',
                'Les clochers, tours-lanternes et façades sculptées deviennent des éléments majeurs de l\'architecture romane. L\'abbaye de Cluny III, consacrée en 1130, était la plus grande église de la chrétienté avant la reconstruction de Saint-Pierre de Rome. Elle a malheureusement été détruite pendant la Révolution française.'
              ],
              highlight: 'Les voûtes en pierre de l\'art roman ont transformé les églises en espaces durables et acoustiquement remarquables, favorisant le chant grégorien.'
            },
            {
              title: 'La sculpture romane : un catéchisme de pierre',
              paragraphs: [
                'La sculpture romane est indissociable de l\'architecture. Les tympans des portails, les chapiteaux des colonnes et les modillons des corniches constituent les principaux supports de la sculpture. Le tympan du portail de l\'abbatiale de Conques représente le Jugement dernier avec une vivacité narrative exceptionnelle, opposant les élus et les damnés dans une composition saisissante.',
                'Les chapiteaux historiés racontent des épisodes bibliques, des vies de saints ou des scènes moralisatrices (combats de vices et de vertus). À Vézelay, Autun et Moissac, les sculpteurs ont créé des œuvres d\'une expressivité remarquable, avec des figures déformées, allongées ou contorsionnées pour s\'adapter au cadre architectural et renforcer l\'impact dramatique.',
                'Le maître sculpteur Gislebertus, actif à Autun vers 1125-1135, est l\'un des rares artistes romans dont le nom nous soit parvenu. Son tympan du Jugement dernier et son relief de l\'Ève couchée comptent parmi les chefs-d\'œuvre de la sculpture médiévale.'
              ],
              highlight: 'La sculpture romane servait de « Bible des illettrés » : les images des portails et chapiteaux enseignaient la doctrine chrétienne à une population largement analphabète.'
            },
            {
              title: 'Peinture murale et arts décoratifs',
              paragraphs: [
                'Les intérieurs des églises romanes étaient recouverts de peintures murales aux couleurs vives, dont seuls quelques exemples subsistent. L\'abbaye de Saint-Savin-sur-Gartempe (Vienne) conserve le plus grand ensemble de peintures romanes d\'Europe, avec des scènes de l\'Ancien Testament peintes sur la voûte de la nef.',
                'La peinture romane sur panneau de bois se développe en Catalogne, où des devants d\'autel (antependiums) peints présentent le Christ en majesté entouré des évangélistes. Le style se caractérise par des contours noirs marqués, des aplats de couleurs vives et une absence de perspective.',
                'L\'orfèvrerie, l\'émaillerie (notamment les émaux de Limoges) et la sculpture sur ivoire constituent d\'autres formes d\'art roman de premier plan. Le reliquaire, objet destiné à contenir les reliques des saints, combine souvent orfèvrerie, émaux et pierres précieuses dans des formes architecturales miniaturisées.'
              ],
              highlight: 'Les peintures romanes de Saint-Savin-sur-Gartempe sont si remarquables que l\'église est surnommée la « Sixtine romane ».'
            }
          ],
          quiz: [
            { q: 'Quelle voûte caractérise l\'architecture romane ?', opts: ['La voûte d\'ogives', 'La voûte en berceau', 'La coupole sur pendentifs', 'La voûte en éventail'], correct: 1, explanation: 'La voûte en berceau (demi-cylindre) est la voûte caractéristique de l\'architecture romane, nécessitant des murs épais pour la supporter.' },
            { q: 'Qu\'est-ce qu\'un tympan en architecture romane ?', opts: ['Une fenêtre ronde', 'L\'espace semi-circulaire au-dessus du portail', 'Un type de clocher', 'Un contrefort'], correct: 1, explanation: 'Le tympan est l\'espace semi-circulaire situé au-dessus de la porte d\'entrée d\'une église, généralement orné de sculptures narratives.' },
            { q: 'Quel sculpteur roman est célèbre pour le tympan d\'Autun ?', opts: ['Phidias', 'Gislebertus', 'Villard de Honnecourt', 'Nicola Pisano'], correct: 1, explanation: 'Gislebertus a signé son œuvre au tympan de la cathédrale d\'Autun, fait exceptionnel pour un artiste médiéval.' }
          ],
          definitions: [
            { term: 'Voûte en berceau', def: 'Voûte en forme de demi-cylindre continu, caractéristique de l\'architecture romane.' },
            { term: 'Tympan', def: 'Surface semi-circulaire sculptée au-dessus du portail d\'une église, généralement ornée de scènes religieuses.' },
            { term: 'Chapiteau historié', def: 'Chapiteau de colonne sculpté de scènes narratives (bibliques, hagiographiques ou moralisatrices).' },
            { term: 'Déambulatoire', def: 'Couloir de circulation entourant le chœur d\'une église, permettant aux pèlerins d\'accéder aux reliques.' },
            { term: 'Antependium', def: 'Panneau décoratif placé devant l\'autel d\'une église, souvent peint ou sculpté.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'L\'abbaye de Cluny III, la plus grande église romane jamais construite, a été détruite à 85% pendant la Révolution française pour servir de carrière de pierres.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La voûte peinte de Saint-Savin-sur-Gartempe mesure 42 mètres de long et représente plus de 30 scènes bibliques.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Art roman = voûtes en berceau + murs épais + peu de lumière + sculptures aux portails. Tout est massif et tourné vers le recueillement.' }
          ]
        },
        {
          slug: 'art-gothique',
          title: 'L\'art gothique',
          description: 'Découvrez l\'art gothique, ses cathédrales élancées et sa quête de lumière.',
          intro: 'L\'art gothique naît en Île-de-France au milieu du XIIe siècle et se diffuse dans toute l\'Europe jusqu\'au XVe siècle. Caractérisé par la croisée d\'ogives, l\'arc brisé et les arcs-boutants, il permet de construire des édifices plus hauts et plus lumineux que les églises romanes. L\'art gothique exprime une théologie de la lumière, considérée comme manifestation de la présence divine.',
          introHighlight: 'L\'art gothique transforme la cathédrale en vaisseau de lumière, où l\'architecture, la sculpture et le vitrail fusionnent dans une œuvre d\'art totale.',
          intro2: '',
          sections: [
            {
              title: 'L\'invention de l\'architecture gothique',
              paragraphs: [
                'L\'abbé Suger de Saint-Denis est considéré comme le père de l\'architecture gothique. En reconstruisant le chœur de la basilique de Saint-Denis entre 1140 et 1144, il introduit la croisée d\'ogives et les grandes verrières colorées, créant un espace inondé de lumière qu\'il décrit comme une image de la Jérusalem céleste.',
                'La croisée d\'ogives permet de reporter le poids de la voûte sur les piliers et les arcs-boutants extérieurs, libérant les murs de leur fonction portante. Les murs peuvent ainsi être percés de vastes baies vitrées, transformant la cathédrale en cage de lumière. La hauteur sous voûte augmente spectaculairement : 33 mètres à Notre-Dame de Paris, 37 mètres à Reims, 42 mètres à Amiens, jusqu\'à 48 mètres à Beauvais (dont la voûte s\'est effondrée en 1284).',
                'Le gothique évolue en plusieurs phases : le gothique primitif (Saint-Denis, Sens), le gothique classique (Chartres, Reims, Amiens), le gothique rayonnant (Sainte-Chapelle de Paris) et le gothique flamboyant (Saint-Maclou de Rouen), caractérisé par des formes courbes et ondulantes évoquant des flammes.'
              ],
              highlight: 'La course à la hauteur des cathédrales gothiques atteint sa limite à Beauvais : la voûte de 48 mètres s\'effondre en 1284, mettant fin à l\'escalade.'
            },
            {
              title: 'Sculpture gothique : vers le naturalisme',
              paragraphs: [
                'La sculpture gothique rompt progressivement avec la stylisation romane pour tendre vers un naturalisme croissant. Les statues-colonnes des portails, encore rigides au début du gothique, gagnent en volume, en mouvement et en expression. Le portail royal de Chartres (vers 1145) illustre cette transition, avec des figures allongées mais déjà individualisées.',
                'Au XIIIe siècle, les sculpteurs de Reims et d\'Amiens atteignent un naturalisme remarquable. L\'Ange au sourire de Reims, avec son expression de bienveillance humaine, et le Beau Dieu d\'Amiens, figure majestueuse et sereine, marquent l\'apogée de la sculpture gothique classique.',
                'Le gothique tardif développe un style plus expressif et dramatique, avec des Vierges à l\'Enfant au déhanchement élégant (la « courbe gothique ») et des Pietà (Vierges de douleur) d\'un pathétique intense. Claus Sluter, sculpteur à la cour de Bourgogne, annonce la Renaissance avec le réalisme saisissant de son Puits de Moïse (1395-1404).'
              ],
              highlight: 'L\'Ange au sourire de la cathédrale de Reims est devenu le symbole de l\'art gothique français et de la ville de Reims.'
            },
            {
              title: 'Le vitrail : lumière et couleur',
              paragraphs: [
                'Le vitrail gothique est indissociable de l\'architecture qui lui donne naissance. Les grandes verrières des cathédrales racontent l\'histoire sainte dans un langage de lumière et de couleur accessible à tous. La cathédrale de Chartres conserve le plus grand ensemble de vitraux médiévaux au monde, avec 176 verrières couvrant une surface de 2 600 mètres carrés.',
                'La technique du vitrail consiste à assembler des morceaux de verre coloré dans la masse, découpés et reliés par des baguettes de plomb (réseau de plomb). Les détails sont peints à la grisaille, une peinture vitrifiable cuite au four. Le célèbre « bleu de Chartres » reste un mystère technique que les artisans modernes peinent à reproduire exactement.',
                'Les rosaces constituent l\'élément le plus spectaculaire du vitrail gothique. La rose occidentale de Notre-Dame de Paris (vers 1220) mesure près de 10 mètres de diamètre et illustre la Vierge entourée des vices et des vertus. La Sainte-Chapelle de Paris (1248) pousse le concept à son extrême : les murs sont presque entièrement remplacés par des vitraux, créant un écrin de lumière colorée.'
              ],
              highlight: 'Le « bleu de Chartres », d\'une intensité lumineuse unique, reste l\'un des mystères techniques les mieux gardés de l\'art médiéval.'
            }
          ],
          quiz: [
            { q: 'Qui est considéré comme le père de l\'architecture gothique ?', opts: ['Villard de Honnecourt', 'L\'abbé Suger', 'Gislebertus', 'Saint Bernard'], correct: 1, explanation: 'L\'abbé Suger de Saint-Denis a initié l\'architecture gothique en reconstruisant le chœur de la basilique entre 1140 et 1144.' },
            { q: 'Quelle innovation permet de percer de grandes verrières dans les cathédrales gothiques ?', opts: ['Les murs plus épais', 'La croisée d\'ogives et les arcs-boutants', 'Le béton armé', 'La voûte en berceau'], correct: 1, explanation: 'La croisée d\'ogives reporte le poids sur les piliers et arcs-boutants, libérant les murs qui peuvent être percés de grandes baies vitrées.' },
            { q: 'Quelle cathédrale conserve le plus grand ensemble de vitraux médiévaux ?', opts: ['Notre-Dame de Paris', 'La cathédrale de Reims', 'La cathédrale de Chartres', 'La cathédrale de Cologne'], correct: 2, explanation: 'La cathédrale de Chartres conserve 176 verrières médiévales couvrant 2 600 mètres carrés, le plus grand ensemble au monde.' }
          ],
          definitions: [
            { term: 'Croisée d\'ogives', def: 'Voûte formée par le croisement de deux arcs diagonaux (ogives), caractéristique de l\'architecture gothique.' },
            { term: 'Arc-boutant', def: 'Arc extérieur transmettant la poussée des voûtes aux contreforts, permettant d\'alléger les murs et d\'ouvrir de grandes baies.' },
            { term: 'Rosace', def: 'Grande fenêtre circulaire ornée de vitraux, généralement placée sur les façades des cathédrales gothiques.' },
            { term: 'Grisaille', def: 'Peinture vitrifiable appliquée sur le verre pour dessiner les détails des vitraux, puis cuite au four.' },
            { term: 'Gothique flamboyant', def: 'Dernière phase du gothique (XVe siècle), caractérisée par des formes courbes et ondulantes évoquant des flammes.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le mot « gothique » était à l\'origine une insulte : les artistes de la Renaissance utilisaient ce terme pour qualifier un art qu\'ils jugeaient barbare, digne des Goths.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La cathédrale de Chartres possède 176 vitraux médiévaux couvrant 2 600 m², le plus grand ensemble au monde.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Roman = murs épais, peu de lumière. Gothique = murs minces, beaucoup de lumière. L\'ogive et l\'arc-boutant ont tout changé.' }
          ]
        },
        {
          slug: 'manuscrits-enlumines',
          title: 'Les manuscrits enluminés',
          description: 'Plongez dans l\'art des manuscrits enluminés, trésors de la peinture médiévale.',
          intro: 'Les manuscrits enluminés constituent l\'une des formes d\'art les plus raffinées du Moyen Âge. Produits dans les scriptoria monastiques puis dans les ateliers laïcs, ces livres ornés de miniatures, de lettrines et de bordures décoratives témoignent d\'un savoir-faire exceptionnel. De l\'Évangéliaire de Lindisfarne aux Très Riches Heures du duc de Berry, l\'enluminure a porté la peinture médiévale à son plus haut degré de perfection.',
          introHighlight: 'Avant l\'invention de l\'imprimerie, chaque livre enluminé était une œuvre unique, fruit de mois voire d\'années de travail patient.',
          intro2: '',
          sections: [
            {
              title: 'Le scriptorium et les techniques de l\'enluminure',
              paragraphs: [
                'Le scriptorium est l\'atelier d\'écriture et de copie des monastères médiévaux. Les moines copistes (scriptores) transcrivaient les textes sur du parchemin (peau de mouton ou de chèvre traitée), tandis que les enlumineurs (illuminatores) réalisaient les décorations peintes. Le vélin, parchemin de veau d\'une finesse exceptionnelle, était réservé aux manuscrits les plus précieux.',
                'Les pigments utilisés provenaient de sources variées : le bleu outremer de la pierre de lapis-lazuli (plus coûteux que l\'or), le rouge vermillon du cinabre, le vert de malachite ou de vert-de-gris, et le jaune de safran ou d\'orpiment. L\'or en feuille ou en poudre était appliqué pour les fonds et les rehauts lumineux.',
                'Le processus de création d\'un manuscrit enluminé suivait des étapes précises : préparation du parchemin, réglage des lignes, copie du texte, dessin préparatoire des enluminures, pose de l\'or, application des couleurs du fond vers les détails, et enfin tracé des contours et des traits de finition.'
              ],
              highlight: 'Le bleu outremer, obtenu à partir du lapis-lazuli importé d\'Afghanistan, valait plus cher que l\'or et était réservé aux figures les plus sacrées.'
            },
            {
              title: 'Les grands manuscrits insulaires et carolingiens',
              paragraphs: [
                'L\'art insulaire, développé dans les îles Britanniques entre le VIe et le IXe siècle, produit des manuscrits d\'une complexité ornementale stupéfiante. Le Livre de Kells (vers 800), conservé au Trinity College de Dublin, est un évangéliaire dont les pages-tapis (pages entièrement décoratives) présentent des entrelacs, des spirales et des figures zoomorphes d\'une minutie incroyable.',
                'L\'Évangéliaire de Lindisfarne (vers 700) mêle influences celtiques, germaniques et méditerranéennes dans des enluminures d\'une précision géométrique extraordinaire. Chaque portrait d\'évangéliste est encadré de bordures entrelacées dont les motifs ne se répètent jamais exactement.',
                'Sous Charlemagne et ses successeurs, la Renaissance carolingienne produit des manuscrits d\'un classicisme renouvelé. L\'Évangéliaire de Lorsch et le Psautier d\'Utrecht illustrent un retour aux modèles antiques, avec des figures naturalistes et des paysages d\'une vivacité remarquable.'
              ],
              highlight: 'Le Livre de Kells contient des entrelacs si fins qu\'ils ne sont visibles qu\'à la loupe, certains traits ne mesurant que 0,5 millimètre d\'épaisseur.'
            },
            {
              title: 'Les Très Riches Heures et l\'apogée de l\'enluminure',
              paragraphs: [
                'Les livres d\'heures, recueils de prières destinés aux laïcs, deviennent au XIVe et XVe siècle le support privilégié de l\'enluminure. Les Très Riches Heures du duc de Berry, réalisées par les frères Limbourg entre 1412 et 1416, constituent le chef-d\'œuvre absolu de l\'enluminure médiévale. Leurs calendriers illustrent les travaux des mois avec un réalisme et une poésie inégalés.',
                'Chaque mois est représenté par une scène de la vie seigneuriale ou paysanne, avec en arrière-plan les châteaux du duc de Berry fidèlement reproduits. Le mois de janvier montre un banquet somptueux, février un paysage de neige d\'un réalisme saisissant, et juin la fenaison devant la Sainte-Chapelle de Paris. Les ciels nuancés et les ombres portées annoncent les découvertes de la Renaissance.',
                'L\'invention de l\'imprimerie par Gutenberg vers 1450 marque le déclin progressif de l\'enluminure manuscrite. Cependant, les premiers livres imprimés continuent d\'être enluminés à la main, et l\'art de la miniature se perpétue dans d\'autres formes jusqu\'au XVIe siècle.'
              ],
              highlight: 'Les Très Riches Heures du duc de Berry sont considérées comme le plus beau manuscrit enluminé de tous les temps et un jalon entre art médiéval et Renaissance.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qu\'un scriptorium ?', opts: ['Une bibliothèque', 'Un atelier d\'écriture et de copie monastique', 'Une école de théologie', 'Un type de parchemin'], correct: 1, explanation: 'Le scriptorium est l\'atelier où les moines copistes et enlumineurs produisaient les manuscrits dans les monastères médiévaux.' },
            { q: 'Quel manuscrit est considéré comme le chef-d\'œuvre de l\'art insulaire ?', opts: ['Le Psautier d\'Utrecht', 'L\'Évangéliaire de Lorsch', 'Le Livre de Kells', 'Les Très Riches Heures'], correct: 2, explanation: 'Le Livre de Kells (vers 800), conservé à Dublin, est le plus célèbre manuscrit de l\'art insulaire avec ses entrelacs d\'une complexité extraordinaire.' },
            { q: 'Qui a réalisé les Très Riches Heures du duc de Berry ?', opts: ['Les moines de Cluny', 'Les frères Limbourg', 'Jean Fouquet', 'Villard de Honnecourt'], correct: 1, explanation: 'Les frères Limbourg (Paul, Jean et Herman) ont réalisé ce chef-d\'œuvre entre 1412 et 1416 pour le duc Jean de Berry.' }
          ],
          definitions: [
            { term: 'Enluminure', def: 'Décoration peinte d\'un manuscrit, comprenant miniatures, lettrines, bordures et ornements dorés.' },
            { term: 'Parchemin', def: 'Support d\'écriture fabriqué à partir de peau animale (mouton, chèvre, veau) traitée et séchée.' },
            { term: 'Lettrine', def: 'Grande lettre ornée ou historiée placée au début d\'un chapitre ou d\'un paragraphe dans un manuscrit.' },
            { term: 'Page-tapis', def: 'Page entièrement décorée de motifs géométriques et entrelacés, sans texte, caractéristique des manuscrits insulaires.' },
            { term: 'Livre d\'heures', def: 'Recueil de prières à l\'usage des laïcs, organisé selon les heures canoniques, souvent richement enluminé.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Les frères Limbourg sont morts tous les trois en 1416, probablement de la peste, laissant les Très Riches Heures inachevées.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Le Livre de Kells contient 680 pages et 2 000 lettrines décorées, toutes uniques.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Ordre chronologique : Lindisfarne (700) → Kells (800) → Psautier d\'Utrecht (830) → Très Riches Heures (1412).' }
          ]
        },
        {
          slug: 'vitraux',
          title: 'L\'art du vitrail',
          description: 'Découvrez l\'art du vitrail médiéval, entre lumière divine et récit sacré.',
          intro: 'Le vitrail est l\'une des formes d\'art les plus emblématiques du Moyen Âge. Art de la lumière par excellence, il transforme les cathédrales gothiques en espaces mystiques où la lumière colorée crée une atmosphère de recueillement et d\'émerveillement. Des premières verrières romanes aux grandes rosaces gothiques, le vitrail raconte l\'histoire sainte dans un langage universel de couleur et de lumière.',
          introHighlight: 'Le vitrail médiéval transforme la lumière naturelle en lumière sacrée, faisant de la cathédrale une image terrestre du paradis.',
          intro2: '',
          sections: [
            {
              title: 'Technique et fabrication du vitrail',
              paragraphs: [
                'La fabrication d\'un vitrail médiéval commence par le dessin d\'un carton (modèle grandeur nature) sur une table enduite de craie. Le verrier découpe ensuite les morceaux de verre coloré selon les formes du dessin, à l\'aide d\'un fer chaud puis d\'un grugeoir (pince à rogner). Le verre est coloré dans la masse lors de sa fabrication, par ajout d\'oxydes métalliques : le cobalt pour le bleu, le manganèse pour le violet, le cuivre pour le vert et le rouge.',
                'Les détails (visages, drapés, motifs) sont peints sur le verre à la grisaille, une peinture composée d\'oxydes métalliques mélangés à un fondant vitreux. Après cuisson au four (environ 600°C), la grisaille fusionne avec le verre de manière permanente. Au XIVe siècle, le jaune d\'argent (nitrate d\'argent) enrichit la palette en permettant d\'obtenir des jaunes lumineux directement sur le verre.',
                'Les morceaux de verre peints sont assemblés à l\'aide de baguettes de plomb en forme de H (le réseau de plomb), soudées à l\'étain. Le panneau achevé est fixé dans une armature de fer (barlotière) elle-même scellée dans la maçonnerie de la fenêtre. La souplesse du plomb permet au vitrail de résister aux vibrations et aux mouvements du bâtiment.'
              ],
              highlight: 'Un vitrail médiéval peut contenir des centaines de morceaux de verre, chacun découpé, peint et cuit individuellement avant assemblage.'
            },
            {
              title: 'Les grandes verrières romanes et gothiques',
              paragraphs: [
                'Les premiers vitraux conservés datent du XIe siècle, comme les prophètes de la cathédrale d\'Augsbourg (vers 1065), les plus anciens vitraux figuratifs in situ au monde. La technique se perfectionne rapidement aux XIIe et XIIIe siècles avec l\'essor de l\'architecture gothique, qui multiplie les surfaces vitrées.',
                'Les verrières narratives racontent la vie des saints et les épisodes bibliques dans des médaillons successifs, lus de bas en haut et de gauche à droite. La cathédrale de Chartres en conserve les plus beaux exemples, avec notamment la verrière de Notre-Dame de la Belle Verrière (XIIe siècle), célèbre pour son bleu lumineux incomparable.',
                'Les rosaces, grandes fenêtres circulaires des façades, sont les pièces maîtresses du vitrail gothique. Organisées autour d\'un motif central (le Christ, la Vierge), elles rayonnent en pétales comme une fleur géante de lumière. La rose nord de Notre-Dame de Paris (vers 1250) est un exemple magistral du gothique rayonnant.'
              ],
              highlight: 'La cathédrale de Chartres conserve 2 600 mètres carrés de vitraux médiévaux, la plus grande collection au monde encore in situ.'
            },
            {
              title: 'Symbolisme et lecture des vitraux',
              paragraphs: [
                'Les vitraux médiévaux obéissent à un programme iconographique précis, élaboré par le clergé. L\'orientation des verrières a une signification symbolique : les fenêtres nord, recevant une lumière froide, illustrent souvent l\'Ancien Testament, tandis que les fenêtres sud, baignées de lumière chaude, présentent le Nouveau Testament.',
                'Les couleurs possèdent une valeur symbolique codifiée : le bleu représente le ciel et la divinité, le rouge le sang du Christ et le martyre, le vert l\'espérance et le renouveau, le blanc la pureté, le jaune la lumière divine. L\'or des fonds magnifie les figures sacrées et évoque la Jérusalem céleste.',
                'Les vitraux servaient également de support à la mémoire des donateurs. Les corporations de métiers qui finançaient les verrières y faisaient représenter leurs activités : boulangers, drapiers, fourreurs apparaissent ainsi au bas des verrières, associant leur travail quotidien aux récits sacrés. Cette pratique constitue un précieux témoignage sur la vie économique médiévale.'
              ],
              highlight: 'Les vitraux des cathédrales étaient à la fois des œuvres d\'art, des outils de catéchèse et des monuments commémoratifs des corporations donatrices.'
            }
          ],
          quiz: [
            { q: 'Comment le verre des vitraux médiévaux est-il coloré ?', opts: ['Par de la peinture en surface', 'Par des oxydes métalliques ajoutés dans la masse du verre', 'Par des films colorés collés', 'Par des teintures végétales'], correct: 1, explanation: 'Le verre est coloré dans la masse lors de sa fabrication par ajout d\'oxydes métalliques : cobalt pour le bleu, cuivre pour le rouge, etc.' },
            { q: 'Qu\'est-ce que la grisaille dans l\'art du vitrail ?', opts: ['Un vitrail en noir et blanc', 'Une peinture vitrifiable pour les détails', 'Un type de plomb', 'Une technique de découpe'], correct: 1, explanation: 'La grisaille est une peinture à base d\'oxydes métalliques appliquée sur le verre pour dessiner les détails, puis fixée par cuisson.' },
            { q: 'Quels sont les plus anciens vitraux figuratifs conservés in situ ?', opts: ['Les vitraux de Chartres', 'Les vitraux de Saint-Denis', 'Les prophètes d\'Augsbourg', 'Les vitraux de Canterbury'], correct: 2, explanation: 'Les vitraux des prophètes de la cathédrale d\'Augsbourg, datant d\'environ 1065, sont les plus anciens vitraux figuratifs encore en place.' }
          ],
          definitions: [
            { term: 'Grisaille (vitrail)', def: 'Peinture vitrifiable composée d\'oxydes métalliques, appliquée sur le verre pour dessiner les détails et fixée par cuisson au four.' },
            { term: 'Jaune d\'argent', def: 'Technique apparue au XIVe siècle utilisant du nitrate d\'argent pour teinter le verre en jaune doré après cuisson.' },
            { term: 'Barlotière', def: 'Armature métallique fixée dans la maçonnerie d\'une fenêtre pour soutenir les panneaux de vitrail.' },
            { term: 'Réseau de plomb', def: 'Ensemble des baguettes de plomb en H qui maintiennent assemblés les morceaux de verre d\'un vitrail.' },
            { term: 'Verrière narrative', def: 'Vitrail racontant une histoire sacrée dans une succession de médaillons ou de scènes.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le bleu de Chartres doit probablement sa luminosité unique à des impuretés dans le verre médiéval que les verriers modernes ne parviennent pas à reproduire exactement.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La Sainte-Chapelle de Paris contient 1 113 scènes bibliques réparties sur 600 mètres carrés de vitraux.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Le vitrail médiéval en 3 étapes : verre coloré dans la masse + détails peints à la grisaille + assemblage au plomb.' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  HUB 3 — La Renaissance
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'renaissance',
      title: 'La Renaissance',
      description: 'Explorez la Renaissance artistique, de Florence au reste de l\'Europe, avec ses génies et ses chefs-d\'œuvre.',
      introText: 'La Renaissance, née en Italie au XVe siècle, marque un tournant majeur dans l\'histoire de l\'art occidental. Inspirés par la redécouverte de l\'Antiquité gréco-romaine, les artistes inventent la perspective linéaire, étudient l\'anatomie humaine et placent l\'homme au centre de leur création. De Brunelleschi à Michel-Ange, de Léonard de Vinci à Raphaël, la Renaissance produit des œuvres qui restent des références absolues de l\'art occidental.',
      introHighlight: 'La Renaissance replace l\'être humain au centre de la création artistique et invente les outils de représentation du monde qui domineront l\'art occidental pendant cinq siècles.',
      lessons: [
        {
          slug: 'quattrocento',
          title: 'Le Quattrocento florentin',
          description: 'Découvrez les origines de la Renaissance à Florence au XVe siècle.',
          intro: 'Le Quattrocento (XVe siècle italien) voit naître la Renaissance artistique à Florence, sous le mécénat de la famille Médicis. Les artistes florentins révolutionnent la peinture avec l\'invention de la perspective linéaire, la sculpture avec le retour au nu antique, et l\'architecture avec la redécouverte des ordres classiques. Florence devient le laboratoire d\'une nouvelle vision du monde fondée sur l\'humanisme et la raison.',
          introHighlight: 'Florence au XVe siècle est le berceau de la Renaissance : une concentration unique de génies, de mécènes et d\'idées nouvelles y transforme l\'art occidental.',
          intro2: '',
          sections: [
            {
              title: 'L\'invention de la perspective',
              paragraphs: [
                'Filippo Brunelleschi, architecte et ingénieur florentin, réalise vers 1415 la première démonstration expérimentale de la perspective linéaire à point de fuite unique. En utilisant un miroir et un panneau peint du baptistère de Florence, il prouve qu\'il est possible de représenter mathématiquement l\'espace tridimensionnel sur une surface plane.',
                'Leon Battista Alberti théorise cette découverte dans son traité De Pictura (1435), définissant le tableau comme une « fenêtre ouverte sur le monde ». Il établit les règles géométriques de la perspective, fondées sur un point de fuite central vers lequel convergent toutes les lignes de profondeur.',
                'Masaccio est le premier peintre à appliquer systématiquement la perspective dans ses fresques. Sa Trinité de Santa Maria Novella (vers 1427) crée une illusion spatiale si convaincante que les contemporains croyaient voir un trou dans le mur de l\'église. Cette fresque marque le début de la peinture moderne.'
              ],
              highlight: 'La perspective linéaire inventée à Florence transforme la peinture en une science de la représentation de l\'espace, révolutionnant l\'art occidental.'
            },
            {
              title: 'Sculpture et architecture du Quattrocento',
              paragraphs: [
                'Donatello est le sculpteur majeur du Quattrocento. Son David en bronze (vers 1440) est la première statue en ronde-bosse d\'un nu masculin depuis l\'Antiquité. Ses œuvres, du Saint Georges au Gattamelata de Padoue (première statue équestre en bronze depuis l\'Antiquité romaine), témoignent d\'une maîtrise technique et d\'une profondeur psychologique sans précédent.',
                'Lorenzo Ghiberti réalise les portes en bronze du baptistère de Florence, surnommées par Michel-Ange les « Portes du Paradis ». Les dix panneaux de la seconde porte (1425-1452) utilisent la perspective pour créer des compositions d\'une profondeur spatiale remarquable, avec plusieurs plans successifs.',
                'En architecture, Brunelleschi conçoit la coupole du Dôme de Florence (1420-1436), prouesse technique sans précédent. Cette double coupole autoportante de 42 mètres de diamètre, construite sans cintre, reste un exploit d\'ingénierie. Il crée également les églises de San Lorenzo et Santo Spirito, qui redéfinissent l\'architecture religieuse en s\'inspirant des modèles antiques.'
              ],
              highlight: 'La coupole de Brunelleschi à Florence reste la plus grande coupole en maçonnerie jamais construite, achevée sans échafaudage central.'
            },
            {
              title: 'Les grands peintres du Quattrocento',
              paragraphs: [
                'Après Masaccio, la peinture florentine s\'enrichit avec Sandro Botticelli, dont La Naissance de Vénus (vers 1485) et Le Printemps (vers 1482) incarnent l\'idéal néoplatonicien de beauté. Ces œuvres, commandées par les Médicis, mêlent mythologie antique et esthétique raffinée dans des compositions d\'une grâce poétique incomparable.',
                'Fra Angelico apporte une spiritualité lumineuse à la peinture du Quattrocento. Ses fresques du couvent de San Marco à Florence (1438-1445), d\'une simplicité et d\'une pureté remarquables, utilisent la perspective et la lumière pour créer des espaces de méditation. L\'Annonciation de la cellule 3 est un chef-d\'œuvre de dépouillement.',
                'Piero della Francesca, actif entre Florence et Arezzo, pousse la géométrie de la perspective à son plus haut degré de rigueur. Son cycle de fresques de la Légende de la Vraie Croix à Arezzo (1452-1466) combine monumentalité, lumière cristalline et composition géométrique dans un style d\'une modernité saisissante.'
              ],
              highlight: 'Le Quattrocento florentin a produit en un siècle plus de chefs-d\'œuvre que la plupart des civilisations en un millénaire.'
            }
          ],
          quiz: [
            { q: 'Qui a réalisé la première démonstration de la perspective linéaire ?', opts: ['Léonard de Vinci', 'Leon Battista Alberti', 'Filippo Brunelleschi', 'Masaccio'], correct: 2, explanation: 'Brunelleschi a réalisé vers 1415 la première expérience de perspective linéaire avec un miroir et un panneau peint du baptistère de Florence.' },
            { q: 'Quelle sculpture de Donatello est la première statue en nu masculin depuis l\'Antiquité ?', opts: ['Le Saint Georges', 'Le Gattamelata', 'Le David en bronze', 'La Madeleine pénitente'], correct: 2, explanation: 'Le David en bronze de Donatello (vers 1440) est la première sculpture en ronde-bosse d\'un nu masculin depuis l\'Antiquité.' },
            { q: 'Qui a peint La Naissance de Vénus ?', opts: ['Masaccio', 'Fra Angelico', 'Piero della Francesca', 'Sandro Botticelli'], correct: 3, explanation: 'Sandro Botticelli a peint La Naissance de Vénus vers 1485 pour les Médicis, incarnant l\'idéal de beauté de la Renaissance florentine.' }
          ],
          definitions: [
            { term: 'Perspective linéaire', def: 'Technique de représentation mathématique de l\'espace tridimensionnel sur un plan, utilisant des lignes convergeant vers un point de fuite.' },
            { term: 'Quattrocento', def: 'Terme italien désignant le XVe siècle, période de la première Renaissance en Italie.' },
            { term: 'Ronde-bosse', def: 'Sculpture tridimensionnelle qui se détache entièrement de son fond et peut être observée de tous les côtés.' },
            { term: 'Humanisme', def: 'Mouvement intellectuel de la Renaissance plaçant l\'homme au centre de la réflexion, fondé sur l\'étude des textes antiques.' },
            { term: 'Mécénat', def: 'Protection et financement accordés par un riche protecteur (mécène) aux artistes et aux intellectuels.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Michel-Ange a surnommé les portes du baptistère de Florence réalisées par Ghiberti les « Portes du Paradis », nom qu\'elles portent encore aujourd\'hui.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La coupole du Dôme de Florence mesure 42 mètres de diamètre intérieur et pèse environ 37 000 tonnes.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Les trois révolutions du Quattrocento : perspective (Brunelleschi), anatomie (Donatello), lumière (Masaccio).' }
          ]
        },
        {
          slug: 'leonard-de-vinci',
          title: 'Léonard de Vinci',
          description: 'Explorez l\'œuvre du génie universel de la Renaissance.',
          intro: 'Léonard de Vinci (1452-1519) est l\'incarnation même du génie de la Renaissance. Peintre, sculpteur, architecte, ingénieur, anatomiste, musicien et inventeur, il a révolutionné l\'art par ses innovations techniques et sa recherche incessante de la connaissance. Ses œuvres, relativement peu nombreuses mais d\'une qualité exceptionnelle, comptent parmi les plus célèbres et les plus étudiées de l\'histoire de l\'art.',
          introHighlight: 'Léonard de Vinci incarne l\'idéal de l\'« uomo universale » de la Renaissance : un esprit capable d\'embrasser toutes les formes du savoir humain.',
          intro2: '',
          sections: [
            {
              title: 'Formation et premières œuvres',
              paragraphs: [
                'Né à Vinci, en Toscane, le 15 avril 1452, Léonard entre vers 1466 dans l\'atelier d\'Andrea del Verrocchio à Florence, l\'un des plus réputés de la ville. La légende veut que Verrocchio ait abandonné la peinture après avoir vu l\'ange peint par le jeune Léonard dans Le Baptême du Christ, tant il surpassait son propre travail.',
                'L\'Annonciation (vers 1472-1475) et le portrait de Ginevra de\' Benci (vers 1474) révèlent déjà les caractéristiques du style de Léonard : observation minutieuse de la nature, rendu atmosphérique des paysages et attention aux émotions intérieures des personnages. Son inachèvement de L\'Adoration des Mages (1481) témoigne de son perfectionnisme et de son esprit toujours en mouvement.',
                'En 1482, Léonard quitte Florence pour Milan, où il entre au service du duc Ludovic Sforza. Il y reste dix-sept ans, période durant laquelle il réalise La Vierge aux rochers, La Dame à l\'hermine et la célèbre Cène de Santa Maria delle Grazie.'
              ],
              highlight: 'Léonard de Vinci a laissé plus de 7 000 pages de notes et de dessins, constituant l\'un des corpus scientifiques et artistiques les plus extraordinaires de l\'histoire.'
            },
            {
              title: 'Le sfumato et les innovations techniques',
              paragraphs: [
                'La contribution technique majeure de Léonard à la peinture est le sfumato (de l\'italien « enfumé »), une technique de superposition de glacis translucides extrêmement fins qui estompe les contours et crée des transitions imperceptibles entre les zones d\'ombre et de lumière. Ce procédé donne aux visages une douceur et un mystère caractéristiques.',
                'Léonard a également développé la perspective atmosphérique, observant que les objets lointains apparaissent plus bleus, plus pâles et moins nets que les objets proches. Cette observation scientifique, appliquée systématiquement dans ses peintures, confère à ses paysages une profondeur et un réalisme remarquables.',
                'Ses études anatomiques, réalisées par la dissection de plus de trente cadavres, lui ont permis de comprendre la mécanique du corps humain avec une précision inédite. Ses dessins anatomiques anticipent de plusieurs siècles les atlas médicaux modernes et nourrissent la vérité physiologique de ses peintures.'
              ],
              highlight: 'Le sfumato de Léonard nécessitait l\'application de dizaines de couches de glacis translucides, un processus si lent qu\'il explique en partie le petit nombre de ses œuvres achevées.'
            },
            {
              title: 'La Joconde et l\'héritage de Léonard',
              paragraphs: [
                'La Joconde (Mona Lisa), peinte entre 1503 et 1519, est le tableau le plus célèbre du monde. Le portrait de Lisa Gherardini, épouse du marchand florentin Francesco del Giocondo, fascine par son sourire énigmatique, fruit de la technique du sfumato, et par le paysage fantastique qui s\'étend derrière elle. Léonard ne s\'est jamais séparé de ce tableau, qu\'il a emporté avec lui en France.',
                'La Cène de Santa Maria delle Grazie à Milan (1495-1498) est une autre œuvre majeure. Cette peinture murale représente l\'instant où Jésus annonce qu\'un de ses apôtres va le trahir. Léonard y déploie une maîtrise de la perspective, de la composition et de l\'expression des émotions qui en font un sommet de la peinture narrative.',
                'Invité en France par François Ier en 1516, Léonard s\'installe au château du Clos Lucé, près d\'Amboise, où il meurt le 2 mai 1519. Son influence sur la peinture est immense : le sfumato, la perspective atmosphérique et l\'attention à la psychologie des personnages marquent durablement l\'art occidental.'
              ],
              highlight: 'La Joconde est le tableau le plus visité au monde : environ 10 millions de personnes la contemplent chaque année au musée du Louvre.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce que le sfumato ?', opts: ['Une technique de sculpture', 'Un estompage des contours par glacis translucides', 'Un type de fresque', 'Une méthode de gravure'], correct: 1, explanation: 'Le sfumato est une technique de superposition de glacis translucides qui estompe les contours et crée des transitions douces entre ombre et lumière.' },
            { q: 'Chez quel maître Léonard a-t-il fait son apprentissage ?', opts: ['Botticelli', 'Donatello', 'Verrocchio', 'Ghirlandaio'], correct: 2, explanation: 'Léonard de Vinci a été formé dans l\'atelier d\'Andrea del Verrocchio à Florence, l\'un des plus importants de la ville.' },
            { q: 'Dans quel pays Léonard de Vinci a-t-il terminé sa vie ?', opts: ['L\'Italie', 'L\'Espagne', 'La France', 'L\'Angleterre'], correct: 2, explanation: 'Invité par François Ier, Léonard s\'est installé au Clos Lucé, près d\'Amboise en France, où il est mort en 1519.' }
          ],
          definitions: [
            { term: 'Sfumato', def: 'Technique picturale inventée par Léonard de Vinci, consistant à estomper les contours par superposition de glacis translucides.' },
            { term: 'Perspective atmosphérique', def: 'Rendu de la profondeur par l\'atténuation progressive des couleurs et des contours vers le lointain, imitant l\'effet de l\'atmosphère.' },
            { term: 'Glacis', def: 'Couche de peinture très fine et translucide appliquée sur une couche sèche pour modifier subtilement la couleur et la luminosité.' },
            { term: 'Carton', def: 'Dessin préparatoire grandeur nature, utilisé pour reporter la composition sur le support définitif (mur, panneau).' },
            { term: 'Clair-obscur', def: 'Technique de contraste marqué entre zones claires et zones sombres pour modeler les formes et créer une impression de volume.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Léonard de Vinci écrivait en écriture miroir (de droite à gauche), probablement parce qu\'il était gaucher et que cela évitait de maculer l\'encre.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Seules 15 à 20 peintures de Léonard sont conservées, mais il a laissé plus de 7 000 pages de notes et dessins.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Les trois innovations de Léonard : sfumato (estompage), perspective atmosphérique (profondeur) et étude anatomique (vérité du corps).' }
          ]
        },
        {
          slug: 'michel-ange',
          title: 'Michel-Ange',
          description: 'Découvrez l\'œuvre du sculpteur, peintre et architecte le plus puissant de la Renaissance.',
          intro: 'Michelangelo Buonarroti (1475-1564) est considéré comme l\'un des plus grands artistes de tous les temps. Sculpteur avant tout, il a également produit des fresques monumentales, des œuvres architecturales et des poèmes. Du David de Florence au plafond de la chapelle Sixtine, de la Pietà de Saint-Pierre au dôme de la basilique vaticane, son œuvre exprime une vision héroïque de la condition humaine.',
          introHighlight: 'Michel-Ange se considérait avant tout comme sculpteur : même en peinture, il modèle les corps avec une puissance plastique proprement sculpturale.',
          intro2: '',
          sections: [
            {
              title: 'Le sculpteur du David',
              paragraphs: [
                'Formé dans l\'atelier de Ghirlandaio puis dans les jardins des Médicis, Michel-Ange manifeste très tôt un talent exceptionnel pour la sculpture. Sa Pietà de Saint-Pierre (1498-1499), réalisée à seulement 24 ans, stupéfie ses contemporains par la perfection technique du marbre et l\'émotion contenue de la composition. C\'est la seule œuvre que Michel-Ange ait jamais signée.',
                'Le David (1501-1504), taillé dans un bloc de marbre de Carrare jugé inexploitable par d\'autres sculpteurs, mesure 5,17 mètres de hauteur. Contrairement aux David précédents (Donatello, Verrocchio), Michel-Ange représente le héros avant le combat, dans un moment de concentration intense. La tension musculaire contenue et le regard déterminé font de cette statue un symbole de la république florentine.',
                'Michel-Ange concevait la sculpture comme un acte de libération : il disait « voir » la figure emprisonnée dans le bloc de marbre et n\'avoir qu\'à enlever la matière superflue. Ses « Esclaves » ou « Prisonniers » inachevés, figures partiellement dégagées du marbre brut, illustrent cette vision de manière saisissante.'
              ],
              highlight: 'Michel-Ange a taillé le David dans un bloc de marbre de 5 mètres abandonné depuis 40 ans, que deux sculpteurs avaient refusé de travailler.'
            },
            {
              title: 'Le plafond de la chapelle Sixtine',
              paragraphs: [
                'Commandé par le pape Jules II, le plafond de la chapelle Sixtine (1508-1512) est l\'une des réalisations les plus extraordinaires de l\'histoire de l\'art. Michel-Ange, qui se disait sculpteur et non peintre, a peint à fresque plus de 300 figures sur une surface de 520 mètres carrés, représentant les épisodes de la Genèse, depuis la Séparation de la Lumière et des Ténèbres jusqu\'au Déluge.',
                'La scène la plus célèbre, La Création d\'Adam, montre Dieu tendant la main vers Adam dans un geste d\'une puissance et d\'une tendresse inégalées. L\'écart entre les doigts qui ne se touchent pas est devenu l\'une des images les plus iconiques de l\'art occidental. Michel-Ange a travaillé essentiellement seul, perché sur un échafaudage, dans des conditions physiquement éprouvantes.',
                'Vingt-cinq ans plus tard, Michel-Ange revient dans la chapelle Sixtine pour peindre Le Jugement dernier (1536-1541) sur le mur du fond. Cette fresque monumentale, représentant le Christ en juge au milieu d\'un tourbillon de corps, témoigne d\'une vision plus sombre et tourmentée, reflet des crises spirituelles de l\'artiste vieillissant.'
              ],
              highlight: 'Michel-Ange a peint le plafond de la Sixtine en quatre ans, essentiellement seul, debout la tête renversée en arrière sur un échafaudage.'
            },
            {
              title: 'L\'architecte et le poète',
              paragraphs: [
                'En architecture, Michel-Ange a conçu le dôme de la basilique Saint-Pierre de Rome, l\'un des plus grands dômes du monde avec 42 mètres de diamètre intérieur. Bien qu\'il n\'ait pas vécu pour le voir achevé, son dessin a été largement respecté. Il a également redessiné la place du Capitole et la bibliothèque Laurentienne à Florence.',
                'La bibliothèque Laurentienne (1524-1559) est remarquable pour son vestibule d\'entrée, où Michel-Ange bouleverse les conventions architecturales classiques : les colonnes sont encastrées dans les murs au lieu de les soutenir, les consoles semblent soutenir le vide, et l\'escalier monumental occupe presque tout l\'espace. Ce maniérisme architectural annonce le baroque.',
                'Michel-Ange était également un poète accompli, auteur de plus de 300 sonnets et madrigaux. Ses poèmes, souvent adressés à Vittoria Colonna ou Tommaso dei Cavalieri, expriment une quête spirituelle intense et un idéal néoplatonicien de la beauté. Il meurt à Rome le 18 février 1564, à l\'âge de 88 ans.'
              ],
              highlight: 'Michel-Ange est le seul artiste de l\'histoire à avoir été célébré comme le plus grand sculpteur, le plus grand peintre et le plus grand architecte de son temps.'
            }
          ],
          quiz: [
            { q: 'Quelle est la seule œuvre signée par Michel-Ange ?', opts: ['Le David', 'Le plafond de la Sixtine', 'La Pietà de Saint-Pierre', 'Le Jugement dernier'], correct: 2, explanation: 'La Pietà de Saint-Pierre (1498-1499) est la seule œuvre que Michel-Ange ait signée, sur le ruban traversant la poitrine de la Vierge.' },
            { q: 'Quelle est la scène la plus célèbre du plafond de la Sixtine ?', opts: ['Le Déluge', 'La Création d\'Adam', 'Le Péché originel', 'La Séparation des eaux'], correct: 1, explanation: 'La Création d\'Adam, avec ses deux mains qui se tendent sans se toucher, est devenue l\'une des images les plus iconiques de l\'art mondial.' },
            { q: 'Quelle grande structure architecturale Michel-Ange a-t-il conçue à Rome ?', opts: ['Le Colisée', 'Le Panthéon', 'Le dôme de Saint-Pierre', 'La fontaine de Trevi'], correct: 2, explanation: 'Michel-Ange a conçu le dôme de la basilique Saint-Pierre de Rome, l\'un des plus grands dômes du monde.' }
          ],
          definitions: [
            { term: 'Fresque', def: 'Technique de peinture murale consistant à appliquer des pigments sur un enduit de chaux encore frais (« a fresco »), qui les fixe en séchant.' },
            { term: 'Contrapposto', def: 'Pose où le poids du corps repose sur une jambe, l\'autre étant fléchie, créant un mouvement en S caractéristique de la sculpture classique.' },
            { term: 'Maniérisme', def: 'Style artistique de la fin de la Renaissance (1520-1600), caractérisé par des proportions allongées, des poses artificielles et une sophistication formelle.' },
            { term: 'Pietà', def: 'Représentation de la Vierge Marie tenant sur ses genoux le corps du Christ mort après la descente de croix.' },
            { term: 'Marbre de Carrare', def: 'Marbre blanc de haute qualité extrait des carrières de Carrare en Toscane, privilégié par les sculpteurs de la Renaissance.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Michel-Ange a peint le plafond de la Sixtine debout (et non couché), la tête renversée en arrière. Il en a gardé des problèmes de dos et de vue.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Le plafond de la chapelle Sixtine mesure 520 mètres carrés et contient plus de 300 figures peintes.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Trois œuvres majeures de Michel-Ange : le David (sculpture), la Sixtine (peinture), Saint-Pierre (architecture).' }
          ]
        },
        {
          slug: 'raphael',
          title: 'Raphaël',
          description: 'Découvrez l\'œuvre de Raphaël, maître de l\'harmonie et de la grâce à la Renaissance.',
          intro: 'Raffaello Sanzio, dit Raphaël (1483-1520), est le troisième génie de la Haute Renaissance italienne, aux côtés de Léonard et de Michel-Ange. Peintre d\'une grâce et d\'une harmonie incomparables, il a su synthétiser les apports de ses prédécesseurs pour créer un art d\'un équilibre parfait. Ses Madones, ses portraits et ses grandes compositions des Chambres du Vatican définissent l\'idéal classique de la peinture occidentale.',
          introHighlight: 'Raphaël a atteint un équilibre parfait entre beauté idéale et vérité humaine, faisant de ses œuvres le modèle absolu de la peinture classique pendant quatre siècles.',
          intro2: '',
          sections: [
            {
              title: 'Formation et premières Madones',
              paragraphs: [
                'Né à Urbino en 1483, Raphaël est formé par son père Giovanni Santi, peintre de cour, puis dans l\'atelier de Pietro Perugino (le Pérugin), dont il assimile rapidement le style gracieux et l\'harmonie spatiale. Dès ses premières œuvres, comme Le Mariage de la Vierge (1504), Raphaël dépasse son maître par la fluidité de sa composition et la douceur de ses expressions.',
                'Arrivé à Florence en 1504, Raphaël découvre les œuvres de Léonard de Vinci et de Michel-Ange, qui transforment profondément son art. Il étudie le sfumato de Léonard et la puissance plastique de Michel-Ange, les intégrant dans son propre style sans jamais perdre sa grâce naturelle.',
                'Ses Madones florentines (La Belle Jardinière, La Madone du Grand-Duc, La Madone du Chardonneret) comptent parmi les représentations les plus tendres et les plus harmonieuses de la Vierge à l\'Enfant. Raphaël y combine une composition triangulaire stable, des expressions douces et un paysage lumineux dans un équilibre parfait.'
              ],
              highlight: 'Raphaël avait le don rare d\'assimiler les innovations de ses contemporains (Léonard, Michel-Ange) sans jamais les copier, les intégrant dans un style personnel inimitable.'
            },
            {
              title: 'Les Chambres du Vatican',
              paragraphs: [
                'En 1508, le pape Jules II confie à Raphaël la décoration des Stanze (chambres) du Vatican. La Chambre de la Signature (1509-1511) contient les fresques les plus célèbres de Raphaël, dont L\'École d\'Athènes, qui rassemble les plus grands philosophes de l\'Antiquité sous une architecture monumentale inspirée du projet de Bramante pour Saint-Pierre.',
                'Au centre de L\'École d\'Athènes, Platon (représenté avec les traits de Léonard de Vinci) pointe vers le ciel tandis qu\'Aristote tend la main vers la terre, symbolisant les deux grandes orientations de la philosophie. Raphaël a donné aux philosophes les visages de ses contemporains : Michel-Ange apparaît sous les traits d\'Héraclite, et Raphaël lui-même se représente discrètement à l\'extrême droite.',
                'La Dispute du Saint-Sacrement, qui fait face à L\'École d\'Athènes, représente la théologie chrétienne en pendant de la philosophie antique. Les quatre fresques de la Chambre de la Signature illustrent les quatre domaines du savoir selon la pensée humaniste : la Philosophie, la Théologie, la Poésie et la Justice.'
              ],
              highlight: 'L\'École d\'Athènes est considérée comme l\'incarnation parfaite de l\'idéal humaniste de la Renaissance, réunissant savoir antique et génie contemporain.'
            },
            {
              title: 'Portraits et dernières œuvres',
              paragraphs: [
                'Raphaël est également un portraitiste exceptionnel. Le Portrait de Baldassare Castiglione (vers 1514-1515) incarne l\'idéal du courtisan tel que décrit par Castiglione lui-même dans son célèbre traité. La Donna Velata (vers 1515), probablement un portrait de sa maîtresse Margherita Luti, est un chef-d\'œuvre de sensualité contenue et de maîtrise technique.',
                'La Transfiguration (1518-1520), dernière œuvre de Raphaël, est considérée comme l\'un des plus grands tableaux de la peinture occidentale. Cette composition audacieuse juxtapose la transfiguration glorieuse du Christ sur la montagne et la scène tumultueuse de la guérison d\'un enfant possédé, dans un contraste dramatique entre lumière divine et agitation humaine.',
                'Raphaël meurt le 6 avril 1520, le jour de son trente-septième anniversaire. Ses funérailles sont dignes d\'un prince : La Transfiguration est exposée au-dessus de son cercueil au Panthéon de Rome, où il est enterré. Son influence sur la peinture académique sera immense et durable, faisant de lui le modèle par excellence du peintre classique.'
              ],
              highlight: 'Raphaël est mort à 37 ans, mais son œuvre a influencé la peinture académique européenne pendant près de quatre siècles.'
            }
          ],
          quiz: [
            { q: 'Quel philosophe est représenté avec les traits de Léonard de Vinci dans L\'École d\'Athènes ?', opts: ['Aristote', 'Socrate', 'Platon', 'Pythagore'], correct: 2, explanation: 'Raphaël a donné à Platon les traits de Léonard de Vinci, rendant ainsi hommage à son aîné dans cette fresque du Vatican.' },
            { q: 'Chez quel maître Raphaël s\'est-il formé ?', opts: ['Verrocchio', 'Le Pérugin', 'Ghirlandaio', 'Mantegna'], correct: 1, explanation: 'Raphaël s\'est formé dans l\'atelier de Pietro Perugino (le Pérugin), dont il a rapidement dépassé le style gracieux.' },
            { q: 'Quelle est la dernière œuvre de Raphaël ?', opts: ['L\'École d\'Athènes', 'La Madone Sixtine', 'La Transfiguration', 'La Donna Velata'], correct: 2, explanation: 'La Transfiguration (1518-1520) est la dernière et l\'une des plus ambitieuses œuvres de Raphaël, exposée lors de ses funérailles.' }
          ],
          definitions: [
            { term: 'Stanze', def: 'Nom italien des chambres du Vatican décorées par Raphaël et ses élèves, comprenant quatre salles aux programmes iconographiques distincts.' },
            { term: 'Composition triangulaire', def: 'Organisation des figures principales d\'un tableau selon un triangle, créant une structure stable et harmonieuse, fréquente chez Raphaël.' },
            { term: 'Haute Renaissance', def: 'Période de la Renaissance italienne (vers 1490-1520) représentée par Léonard, Michel-Ange et Raphaël, considérée comme l\'apogée de l\'art classique.' },
            { term: 'Madone', def: 'Représentation de la Vierge Marie, souvent accompagnée de l\'Enfant Jésus, sujet majeur de la peinture de la Renaissance.' },
            { term: 'Sotto in su', def: 'Technique de perspective utilisée dans la peinture de plafond, créant l\'illusion que les figures sont vues d\'en dessous.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Raphaël s\'est représenté lui-même dans L\'École d\'Athènes, à l\'extrême droite, regardant directement le spectateur.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Raphaël a réalisé environ 350 œuvres en seulement 20 ans de carrière, dont de nombreuses fresques monumentales.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Les trois génies de la Haute Renaissance : Léonard (mystère), Michel-Ange (puissance), Raphaël (harmonie).' }
          ]
        },
        {
          slug: 'renaissance-nordique',
          title: 'La Renaissance nordique',
          description: 'Explorez la Renaissance dans les Flandres, l\'Allemagne et les Pays-Bas.',
          intro: 'Parallèlement à la Renaissance italienne, les régions du Nord de l\'Europe — Flandres, Pays-Bas, Allemagne — développent leur propre Renaissance artistique. Les peintres flamands, menés par Jan van Eyck, perfectionnent la peinture à l\'huile et atteignent un réalisme minutieux inégalé. Albrecht Dürer, Jérôme Bosch et Pieter Bruegel l\'Ancien créent des œuvres d\'une originalité radicale qui enrichissent considérablement le patrimoine artistique européen.',
          introHighlight: 'La Renaissance nordique privilégie le détail minutieux et le réalisme optique, là où la Renaissance italienne recherche l\'harmonie géométrique et la beauté idéale.',
          intro2: '',
          sections: [
            {
              title: 'Jan van Eyck et la peinture à l\'huile',
              paragraphs: [
                'Jan van Eyck (vers 1390-1441) est considéré comme le fondateur de la peinture flamande et le perfecteur de la technique de la peinture à l\'huile. L\'utilisation de l\'huile comme liant permet des superpositions de glacis translucides créant des effets de lumière, de texture et de profondeur impossibles avec la tempera (peinture à l\'œuf) utilisée en Italie.',
                'Le Retable de l\'Agneau mystique (1432), réalisé pour la cathédrale de Gand avec son frère Hubert, est un polyptyque monumental de 12 panneaux. Cette œuvre d\'une complexité théologique et d\'une richesse visuelle extraordinaires présente des paysages d\'un réalisme saisissant, des textiles rendus avec une précision textile et des joyaux qui semblent briller de leur propre lumière.',
                'Le Portrait des Époux Arnolfini (1434), conservé à la National Gallery de Londres, est l\'un des tableaux les plus analysés de l\'histoire de l\'art. Le miroir convexe au fond de la pièce reflète la scène entière, y compris deux personnages supplémentaires dont l\'un pourrait être van Eyck lui-même. L\'inscription « Jan van Eyck fut ici » au-dessus du miroir en fait l\'un des premiers autoportraits de l\'art occidental.'
              ],
              highlight: 'Jan van Eyck a porté la peinture à l\'huile à un degré de perfection tel que les artistes italiens ont adopté cette technique flamande dès la fin du XVe siècle.'
            },
            {
              title: 'Jérôme Bosch et l\'imaginaire fantastique',
              paragraphs: [
                'Hieronymus Bosch (vers 1450-1516), peintre néerlandais actif à Bois-le-Duc, est l\'un des artistes les plus énigmatiques de l\'histoire de l\'art. Ses tableaux peuplés de créatures fantastiques, de démons et de scènes surréalistes ne ressemblent à rien de ce qui existait avant lui et restent d\'une modernité stupéfiante.',
                'Le Jardin des délices (vers 1490-1510), triptyque conservé au musée du Prado à Madrid, est son chef-d\'œuvre. Le panneau gauche montre le Paradis, le panneau central un monde de plaisirs charnels débordant de figures nues et de créatures hybrides, et le panneau droit un Enfer cauchemardesque peuplé de machines de torture et d\'instruments de musique géants. Les interprétations de cette œuvre restent infiniment débattues.',
                'Bosch est considéré comme un précurseur du surréalisme par André Breton et Salvador Dalí. Son imagination débridée, sa capacité à fusionner le réel et le fantastique, et son humour noir en font un artiste unique dans l\'histoire de l\'art, dont l\'influence se fait sentir jusqu\'à l\'art contemporain.'
              ],
              highlight: 'Le Jardin des délices de Bosch reste l\'une des œuvres les plus mystérieuses de l\'art : cinq siècles après sa création, aucune interprétation ne fait consensus.'
            },
            {
              title: 'Dürer et Bruegel',
              paragraphs: [
                'Albrecht Dürer (1471-1528) est le plus grand artiste de la Renaissance allemande. Peintre, graveur et théoricien, il a su fusionner la tradition du détail nordique avec les principes géométriques de la Renaissance italienne, qu\'il a étudiée lors de deux voyages en Italie. Ses gravures sur bois et sur cuivre (Melencolia I, Le Chevalier, la Mort et le Diable, Saint Jérôme dans son étude) atteignent une virtuosité technique inégalée.',
                'Dürer est aussi un remarquable autoportraitiste. Son Autoportrait à la fourrure (1500), où il se représente de face dans une pose évoquant le Christ, affirme la dignité de l\'artiste comme créateur à l\'image de Dieu. C\'est l\'un des premiers artistes européens à signer systématiquement ses œuvres de son monogramme « AD ».',
                'Pieter Bruegel l\'Ancien (vers 1525-1569) est le grand peintre de la vie paysanne dans les Flandres. Ses tableaux, comme Les Chasseurs dans la neige (1565), Les Moissonneurs et Les Jeux d\'enfants, offrent un panorama extraordinaire de la société flamande du XVIe siècle. Loin du folklore naïf, ses compositions sont d\'une sophistication remarquable, mêlant observation réaliste et symbolisme moral.'
              ],
              highlight: 'Albrecht Dürer a été le premier artiste européen à systématiquement signer ses œuvres d\'un monogramme, affirmant la valeur de la création individuelle.'
            }
          ],
          quiz: [
            { q: 'Quelle technique picturale Jan van Eyck a-t-il perfectionnée ?', opts: ['La tempera', 'La fresque', 'La peinture à l\'huile', 'L\'aquarelle'], correct: 2, explanation: 'Jan van Eyck a perfectionné la peinture à l\'huile, permettant des effets de transparence et de luminosité impossibles avec d\'autres techniques.' },
            { q: 'Quel mouvement du XXe siècle considère Jérôme Bosch comme un précurseur ?', opts: ['L\'impressionnisme', 'Le cubisme', 'Le surréalisme', 'Le minimalisme'], correct: 2, explanation: 'Les surréalistes, notamment Breton et Dalí, ont revendiqué Jérôme Bosch comme un précurseur de leur mouvement en raison de ses visions fantastiques.' },
            { q: 'Quel artiste est célèbre pour ses scènes de la vie paysanne flamande ?', opts: ['Van Eyck', 'Dürer', 'Bosch', 'Bruegel l\'Ancien'], correct: 3, explanation: 'Pieter Bruegel l\'Ancien est le grand peintre de la vie paysanne flamande, avec des œuvres comme Les Chasseurs dans la neige.' }
          ],
          definitions: [
            { term: 'Peinture à l\'huile', def: 'Technique utilisant des pigments broyés dans l\'huile (lin, noix), permettant des glacis translucides, un séchage lent et des corrections.' },
            { term: 'Polyptyque', def: 'Ensemble de panneaux peints articulés, pouvant se replier, utilisé comme retable d\'autel.' },
            { term: 'Tempera', def: 'Technique de peinture utilisant le jaune d\'œuf comme liant, dominante avant l\'adoption de la peinture à l\'huile.' },
            { term: 'Gravure sur cuivre', def: 'Technique d\'impression où le dessin est incisé dans une plaque de cuivre, puis encré et pressé sur papier.' },
            { term: 'Triptyque', def: 'Œuvre peinte ou sculptée composée de trois panneaux, le panneau central étant généralement plus grand que les volets latéraux.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le Retable de l\'Agneau mystique est l\'œuvre d\'art la plus volée de l\'histoire : il a été dérobé 13 fois, dont par Napoléon et les nazis.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Le Jardin des délices de Bosch mesure 220 × 390 cm ouvert et contient des centaines de figures minuscules.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Renaissance nordique = réalisme minutieux (van Eyck), fantastique (Bosch), vie quotidienne (Bruegel). Italie = beauté idéale.' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  HUB 4 — Art moderne
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'art-moderne',
      title: 'Art moderne',
      description: 'De l\'impressionnisme à l\'abstraction, découvrez les révolutions artistiques qui ont transformé l\'art aux XIXe et XXe siècles.',
      introText: 'L\'art moderne, qui s\'étend approximativement de 1860 à 1960, est marqué par une succession de ruptures avec les conventions académiques héritées de la Renaissance. Les impressionnistes libèrent la couleur, les cubistes déconstruisent la forme, les surréalistes explorent l\'inconscient et les abstraits abandonnent la figuration. En un siècle, l\'art change plus radicalement qu\'au cours des cinq siècles précédents.',
      introHighlight: 'L\'art moderne remet en question chaque convention de la peinture traditionnelle : le sujet, la forme, la couleur, la perspective et la fonction même de l\'art.',
      lessons: [
        {
          slug: 'impressionnisme',
          title: 'L\'impressionnisme',
          description: 'Découvrez le mouvement qui a libéré la peinture de ses conventions académiques.',
          intro: 'L\'impressionnisme, né en France dans les années 1860-1870, constitue la première grande rupture avec la tradition académique. En peignant en plein air, en captant les effets fugitifs de la lumière et en utilisant des touches de couleur pure juxtaposées, les impressionnistes ont révolutionné la manière de voir et de représenter le monde. Monet, Renoir, Degas, Pissarro et Berthe Morisot sont les figures majeures de ce mouvement fondateur de l\'art moderne.',
          introHighlight: 'L\'impressionnisme ne cherche pas à reproduire la réalité mais à capturer l\'impression visuelle d\'un instant, telle que la perçoit l\'œil humain.',
          intro2: '',
          sections: [
            {
              title: 'Naissance d\'une révolution picturale',
              paragraphs: [
                'Le terme « impressionnisme » naît d\'une moquerie. Lors de la première exposition indépendante du groupe chez le photographe Nadar en 1874, le critique Louis Leroy tourne en dérision le tableau de Claude Monet intitulé Impression, soleil levant (1872), qualifiant ironiquement ces peintres d\'« impressionnistes ». Le groupe adopte ce nom comme un étendard.',
                'Les impressionnistes se heurtent au refus du Salon officiel, seul lieu d\'exposition reconnu à Paris. Ils organisent huit expositions indépendantes entre 1874 et 1886, affirmant leur autonomie face à l\'Académie des Beaux-Arts. Ce geste inaugural ouvre la voie à toutes les avant-gardes futures.',
                'Plusieurs facteurs techniques favorisent l\'impressionnisme : l\'invention des tubes de peinture (permettant de peindre en plein air), les progrès de la chimie des couleurs (nouveaux pigments synthétiques comme le bleu de cobalt et le vert viridien) et l\'influence de la photographie, qui libère la peinture de sa fonction documentaire.'
              ],
              highlight: 'L\'impressionnisme est le premier mouvement artistique à s\'organiser en dehors du système académique officiel, ouvrant la voie à toutes les avant-gardes.'
            },
            {
              title: 'Technique et esthétique impressionnistes',
              paragraphs: [
                'La technique impressionniste repose sur plusieurs principes : la peinture en plein air (plutôt qu\'en atelier), l\'utilisation de touches de couleur pure juxtaposées (le mélange optique se faisant dans l\'œil du spectateur plutôt que sur la palette), la suppression du noir (remplacé par des bleus, des violets et des bruns colorés) et l\'attention aux variations de la lumière selon les heures et les saisons.',
                'Claude Monet pousse cette logique à l\'extrême avec ses séries : les Meules de foin, les Cathédrales de Rouen, les Peupliers et les Nymphéas. En peignant le même sujet à différentes heures et saisons, il démontre que le sujet importe moins que la lumière qui le baigne. Les Nymphéas, peints durant les trente dernières années de sa vie à Giverny, anticipent l\'abstraction.',
                'Pierre-Auguste Renoir apporte une sensualité joyeuse à l\'impressionnisme, avec des scènes de la vie parisienne comme Le Bal du moulin de la Galette (1876) ou Le Déjeuner des canotiers (1881). Edgar Degas, plus indépendant, se spécialise dans les scènes de ballet et de courses de chevaux, capturant le mouvement avec des cadrages audacieux inspirés de la photographie et des estampes japonaises.'
              ],
              highlight: 'Les impressionnistes abolissent le noir de leur palette : les ombres deviennent colorées, peintes en bleu, en violet ou en vert, selon l\'observation directe de la nature.'
            },
            {
              title: 'Héritage et influence de l\'impressionnisme',
              paragraphs: [
                'Berthe Morisot et Mary Cassatt, longtemps marginalisées par l\'historiographie, sont aujourd\'hui reconnues comme des figures majeures du mouvement. Morisot, belle-sœur d\'Édouard Manet, apporte une touche intimiste et des compositions d\'une grande modernité. Cassatt, Américaine installée à Paris, excelle dans les scènes de maternité et contribue à faire connaître l\'impressionnisme aux États-Unis.',
                'L\'impressionnisme transforme le marché de l\'art en créant un circuit parallèle au système académique. Le marchand Paul Durand-Ruel joue un rôle décisif en achetant et en exposant les œuvres impressionnistes, inventant le métier de galeriste moderne. La spéculation sur les œuvres impressionnistes marque le début du marché de l\'art contemporain.',
                'L\'influence de l\'impressionnisme est immense : il libère la peinture du sujet et de l\'imitation, ouvrant la voie au post-impressionnisme (Cézanne, Van Gogh, Gauguin), au fauvisme, et finalement à l\'abstraction. Sans l\'impressionnisme, l\'art du XXe siècle serait inconcevable.'
              ],
              highlight: 'L\'impressionnisme a non seulement transformé la peinture mais aussi le marché de l\'art, en créant le modèle de la galerie indépendante.'
            }
          ],
          quiz: [
            { q: 'Quel tableau de Monet a donné son nom au mouvement impressionniste ?', opts: ['Les Nymphéas', 'La Cathédrale de Rouen', 'Impression, soleil levant', 'Le Déjeuner sur l\'herbe'], correct: 2, explanation: 'Le tableau Impression, soleil levant (1872) de Claude Monet a inspiré le terme « impressionnisme », utilisé d\'abord de manière moqueuse par le critique Louis Leroy.' },
            { q: 'Quelle couleur les impressionnistes ont-ils supprimée de leur palette ?', opts: ['Le rouge', 'Le blanc', 'Le noir', 'Le jaune'], correct: 2, explanation: 'Les impressionnistes ont banni le noir pur de leur palette, remplaçant les ombres noires par des mélanges colorés (bleus, violets, bruns).' },
            { q: 'Combien d\'expositions indépendantes les impressionnistes ont-ils organisées ?', opts: ['Trois', 'Cinq', 'Huit', 'Douze'], correct: 2, explanation: 'Les impressionnistes ont organisé huit expositions indépendantes entre 1874 et 1886, en dehors du Salon officiel.' }
          ],
          definitions: [
            { term: 'Plein air', def: 'Pratique de peindre directement en extérieur, face au motif, plutôt qu\'en atelier d\'après des esquisses.' },
            { term: 'Mélange optique', def: 'Principe selon lequel des touches de couleurs pures, juxtaposées, se mélangent dans l\'œil du spectateur plutôt que sur la palette.' },
            { term: 'Série', def: 'Suite de tableaux représentant le même sujet sous différentes conditions de lumière, technique développée par Monet.' },
            { term: 'Salon officiel', def: 'Exposition annuelle organisée par l\'Académie des Beaux-Arts à Paris, passage obligé pour la reconnaissance des artistes au XIXe siècle.' },
            { term: 'Estampe japonaise', def: 'Gravure sur bois japonaise (ukiyo-e) qui a profondément influencé les impressionnistes par ses cadrages audacieux et ses aplats de couleur.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Monet a peint environ 250 toiles de Nymphéas pendant les 30 dernières années de sa vie à Giverny, même quand il perdait la vue à cause de la cataracte.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La première exposition impressionniste de 1874 a attiré 3 500 visiteurs, contre 400 000 pour le Salon officiel la même année.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Les 3 principes impressionnistes : plein air (lieu), lumière instantanée (temps), touches colorées juxtaposées (technique).' }
          ]
        },
        {
          slug: 'post-impressionnisme',
          title: 'Le post-impressionnisme',
          description: 'Découvrez Cézanne, Van Gogh et Gauguin, trois génies qui ont dépassé l\'impressionnisme.',
          intro: 'Le post-impressionnisme désigne les recherches artistiques qui prolongent et dépassent l\'impressionnisme dans les années 1880-1900. Paul Cézanne, Vincent van Gogh et Paul Gauguin, chacun par des voies radicalement différentes, posent les fondements de l\'art du XXe siècle. Cézanne prépare le cubisme, Van Gogh l\'expressionnisme et Gauguin le symbolisme et l\'art primitif.',
          introHighlight: 'Les post-impressionnistes ne se contentent pas de peindre ce qu\'ils voient : ils peignent ce qu\'ils ressentent, pensent et imaginent.',
          intro2: '',
          sections: [
            {
              title: 'Cézanne, le père de l\'art moderne',
              paragraphs: [
                'Paul Cézanne (1839-1906) est considéré par Picasso et Matisse comme « le père de nous tous ». Installé à Aix-en-Provence, il poursuit une quête solitaire : « traiter la nature par le cylindre, la sphère, le cône ». Ses natures mortes, ses paysages de la montagne Sainte-Victoire et ses Baigneuses analysent la structure géométrique sous-jacente des formes naturelles.',
                'Cézanne remet en cause la perspective linéaire de la Renaissance en multipliant les points de vue dans un même tableau. Dans ses natures mortes, les objets sont vus sous différents angles simultanément, anticipant la décomposition cubiste de la forme. Il construit l\'espace par la couleur plutôt que par le dessin, posant des touches parallèles de couleur modulée.',
                'Ses dernières œuvres, notamment les paysages de la Sainte-Victoire et les Grandes Baigneuses, atteignent un degré d\'abstraction qui annonce directement le cubisme de Braque et Picasso. Cézanne meurt en 1906, mais l\'exposition rétrospective de 1907 au Salon d\'Automne constitue un choc décisif pour toute la jeune génération.'
              ],
              highlight: 'Picasso a déclaré : « Cézanne est le père de nous tous. » Son analyse géométrique de la forme ouvre directement la voie au cubisme.'
            },
            {
              title: 'Van Gogh, la couleur et l\'émotion',
              paragraphs: [
                'Vincent van Gogh (1853-1890), peintre néerlandais installé en France, transforme la peinture en un instrument d\'expression émotionnelle brute. Autodidacte tardif (il ne commence sérieusement la peinture qu\'à 27 ans), il produit en dix ans environ 900 tableaux et 1 100 dessins, dont la plupart sont réalisés durant les deux dernières années de sa vie.',
                'La période d\'Arles (1888-1889) et de Saint-Rémy-de-Provence (1889-1890) est la plus productive. Van Gogh y développe un style reconnaissable entre tous : couleurs intenses et contrastées, touches épaisses et tourbillonnantes, formes stylisées et expressives. La Nuit étoilée (1889), les Tournesols (1888) et la Chambre à coucher à Arles (1888) sont des icônes de l\'art moderne.',
                'Van Gogh meurt à 37 ans, le 29 juillet 1890, à Auvers-sur-Oise. N\'ayant vendu qu\'un seul tableau de son vivant, il est aujourd\'hui l\'artiste le plus populaire au monde. Son influence sur l\'expressionnisme, le fauvisme et l\'art contemporain est immense : il a démontré que la peinture pouvait être un cri intérieur autant qu\'une représentation du monde visible.'
              ],
              highlight: 'Van Gogh a produit l\'essentiel de son œuvre en seulement deux ans et demi, entre Arles et Auvers-sur-Oise, dans une frénésie créatrice sans équivalent.'
            },
            {
              title: 'Gauguin et la quête du primitif',
              paragraphs: [
                'Paul Gauguin (1848-1903) abandonne une carrière de courtier en bourse pour se consacrer à la peinture. Après avoir côtoyé les impressionnistes, il rompt avec le réalisme pour développer un style synthétiste : aplats de couleurs vives cernés de lignes sombres, suppression de la perspective et des ombres, inspiration tirée de l\'art populaire, des vitraux médiévaux et des estampes japonaises.',
                'La Vision après le sermon (1888) marque une rupture décisive : le sol rouge, les figures stylisées et l\'espace irréel annoncent un art qui ne cherche plus à imiter la nature mais à exprimer des vérités intérieures. Gauguin théorise cette approche : « Ne copiez pas trop la nature. L\'art est une abstraction. »',
                'En 1891, Gauguin s\'installe à Tahiti puis aux îles Marquises, fuyant la civilisation européenne. Ses tableaux tahitiens (D\'où venons-nous ? Que sommes-nous ? Où allons-nous ?, 1897) combinent couleurs tropicales et symbolisme mystérieux. Son influence sur le fauvisme (Matisse), l\'expressionnisme (le groupe Die Brücke) et l\'art primitif du XXe siècle est considérable.'
              ],
              highlight: 'Gauguin a formulé un principe qui résume l\'art moderne : « Ne copiez pas trop la nature. L\'art est une abstraction. »'
            }
          ],
          quiz: [
            { q: 'Pourquoi Cézanne est-il surnommé « le père de l\'art moderne » ?', opts: ['Il a inventé la photographie', 'Il a analysé la forme géométrique, préparant le cubisme', 'Il a créé le premier musée d\'art moderne', 'Il a enseigné à Picasso'], correct: 1, explanation: 'Cézanne a analysé la structure géométrique des formes naturelles et multiplié les points de vue, ouvrant directement la voie au cubisme.' },
            { q: 'Combien de tableaux Van Gogh a-t-il vendus de son vivant ?', opts: ['Aucun', 'Un seul', 'Une dizaine', 'Plus de cent'], correct: 1, explanation: 'Van Gogh n\'a vendu qu\'un seul tableau de son vivant, La Vigne rouge, et il est aujourd\'hui l\'un des artistes les plus cotés au monde.' },
            { q: 'Où Gauguin s\'est-il installé pour fuir la civilisation européenne ?', opts: ['En Afrique', 'Au Japon', 'À Tahiti', 'En Inde'], correct: 2, explanation: 'Gauguin s\'est installé à Tahiti en 1891, puis aux îles Marquises, cherchant un mode de vie « primitif » loin de l\'Europe.' }
          ],
          definitions: [
            { term: 'Post-impressionnisme', def: 'Ensemble des recherches artistiques qui prolongent et dépassent l\'impressionnisme (1880-1900), préparant l\'art du XXe siècle.' },
            { term: 'Synthétisme', def: 'Style développé par Gauguin, caractérisé par des aplats de couleurs vives, des contours marqués et la suppression de la perspective.' },
            { term: 'Expressionnisme', def: 'Mouvement artistique privilégiant l\'expression des émotions intérieures sur la représentation objective du réel.' },
            { term: 'Fauvisme', def: 'Mouvement pictural du début du XXe siècle caractérisé par l\'utilisation de couleurs pures et violentes, mené par Matisse et Derain.' },
            { term: 'Cloisonnisme', def: 'Technique consistant à cerner les aplats de couleur par des lignes sombres, à la manière des vitraux ou des émaux cloisonnés.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Van Gogh et Gauguin ont vécu ensemble à Arles pendant deux mois en 1888. Leur cohabitation s\'est terminée par la célèbre crise où Van Gogh s\'est coupé une partie de l\'oreille.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Van Gogh a réalisé environ 900 peintures en 10 ans, soit une toile tous les 4 jours en moyenne.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Post-impressionnistes : Cézanne = structure, Van Gogh = émotion, Gauguin = synthèse. Trois voies vers l\'art moderne.' }
          ]
        },
        {
          slug: 'cubisme',
          title: 'Le cubisme',
          description: 'Explorez la révolution cubiste de Picasso et Braque qui a fragmenté la vision traditionnelle.',
          intro: 'Le cubisme, fondé par Pablo Picasso et Georges Braque entre 1907 et 1914, est la révolution artistique la plus radicale depuis la Renaissance. En fragmentant les formes et en montrant simultanément plusieurs points de vue d\'un même objet, les cubistes remettent en cause les conventions de la représentation visuelle en vigueur depuis cinq siècles. Le cubisme influence profondément toute la création artistique du XXe siècle.',
          introHighlight: 'Le cubisme brise la fenêtre albertienne : au lieu de montrer le monde vu d\'un point fixe, il montre l\'objet tel qu\'il est connu, sous tous ses angles simultanément.',
          intro2: '',
          sections: [
            {
              title: 'Les Demoiselles d\'Avignon et la naissance du cubisme',
              paragraphs: [
                'En 1907, Pablo Picasso peint Les Demoiselles d\'Avignon, un grand tableau représentant cinq femmes nues aux corps anguleux et aux visages déformés. Les deux figures de droite portent des visages inspirés des masques africains, rompant radicalement avec la tradition du nu occidental. Ce tableau choque même les proches de Picasso, mais il marque le point de départ du cubisme.',
                'L\'influence décisive de Cézanne et de l\'art africain est manifeste. De Cézanne, Picasso retient la géométrisation des formes et la multiplication des points de vue. Des masques africains et ibériques, il retient la puissance expressive de la simplification formelle et l\'abandon du naturalisme.',
                'Georges Braque, après avoir vu Les Demoiselles, entreprend ses propres recherches à l\'Estaque, en Provence. Ses paysages de 1908, faits de volumes géométriques simplifiés, amènent le critique Louis Vauxcelles à parler de « petits cubes », donnant involontairement son nom au mouvement.'
              ],
              highlight: 'Les Demoiselles d\'Avignon de Picasso sont considérées comme le tableau le plus révolutionnaire du XXe siècle, point de départ du cubisme.'
            },
            {
              title: 'Cubisme analytique et cubisme synthétique',
              paragraphs: [
                'Le cubisme analytique (1909-1912) décompose les objets en multiples facettes vues simultanément, dans une palette réduite de bruns, de gris et d\'ocres. Picasso et Braque travaillent si étroitement que leurs tableaux deviennent parfois indistinguibles. Ils peignent des natures mortes, des portraits et des instruments de musique dans un réseau serré de plans qui fragmentent et reconstituent la forme.',
                'Le cubisme synthétique (1912-1914) inverse la démarche : au lieu de décomposer l\'objet, il le reconstruit à partir d\'éléments simples. L\'invention du collage (papier collé) par Braque en 1912 est décisive : des morceaux de papier journal, de papier peint ou de toile cirée sont intégrés au tableau, introduisant la réalité matérielle dans l\'espace pictural.',
                'D\'autres artistes adoptent le cubisme : Juan Gris apporte une rigueur géométrique et une palette plus colorée, Fernand Léger développe un « tubisme » monumental aux formes cylindriques, et Robert Delaunay crée un « orphisme » coloré centré sur des cercles chromatiques. Le cubisme influence également la sculpture (Lipchitz, Archipenko), l\'architecture et le design.'
              ],
              highlight: 'L\'invention du collage par Braque en 1912 introduit des matériaux réels dans le tableau, ouvrant la voie à un siècle d\'expérimentation matérielle.'
            },
            {
              title: 'Héritage du cubisme',
              paragraphs: [
                'Le cubisme transforme radicalement le langage visuel occidental. En démontrant que la représentation n\'est pas liée à un point de vue unique, il libère la peinture de la perspective renaissante et ouvre un espace de liberté formelle sans précédent. Pratiquement toutes les avant-gardes du XXe siècle sont redevables au cubisme.',
                'Le futurisme italien, le constructivisme russe, le mouvement De Stijl néerlandais et le Bauhaus allemand s\'inspirent directement de la géométrisation cubiste. En architecture, Le Corbusier reconnaît sa dette envers le cubisme dans la conception de ses bâtiments aux volumes purs.',
                'Picasso lui-même dépasse le cubisme après 1920, traversant de multiples périodes stylistiques tout au long d\'une carrière de plus de 70 ans. Son œuvre immense (environ 50 000 pièces) et son influence sur pratiquement toutes les formes d\'art du XXe siècle en font l\'artiste le plus important de l\'ère moderne.'
              ],
              highlight: 'Le cubisme a remis en question la manière dont l\'humanité représente le monde depuis la Renaissance, inaugurant l\'ère de la déconstruction formelle.'
            }
          ],
          quiz: [
            { q: 'Quel tableau de Picasso marque la naissance du cubisme ?', opts: ['Guernica', 'Les Demoiselles d\'Avignon', 'La Vie', 'Le Vieux Guitariste'], correct: 1, explanation: 'Les Demoiselles d\'Avignon (1907) rompent avec la tradition figurative et marquent le point de départ du cubisme.' },
            { q: 'Qui a inventé le collage dans le cubisme ?', opts: ['Picasso', 'Georges Braque', 'Juan Gris', 'Fernand Léger'], correct: 1, explanation: 'Georges Braque a réalisé le premier « papier collé » cubiste en 1912, intégrant des matériaux réels dans le tableau.' },
            { q: 'Quelle est la différence entre cubisme analytique et synthétique ?', opts: ['Analytique = couleurs vives, synthétique = monochrome', 'Analytique = décompose l\'objet, synthétique = le reconstruit', 'Analytique = sculpture, synthétique = peinture', 'Analytique = abstrait, synthétique = figuratif'], correct: 1, explanation: 'Le cubisme analytique décompose l\'objet en facettes, tandis que le synthétique le reconstruit à partir d\'éléments simples et de collages.' }
          ],
          definitions: [
            { term: 'Cubisme analytique', def: 'Première phase du cubisme (1909-1912) décomposant les objets en multiples facettes monochromes vues simultanément.' },
            { term: 'Cubisme synthétique', def: 'Seconde phase du cubisme (1912-1914) reconstruisant l\'objet à partir d\'éléments simples, utilisant collages et couleurs vives.' },
            { term: 'Collage', def: 'Technique consistant à coller des matériaux (papier, tissu, etc.) sur le support pictural, inventée par Braque en 1912.' },
            { term: 'Simultanéité', def: 'Principe cubiste montrant un objet sous plusieurs angles en même temps dans un seul tableau.' },
            { term: 'Papier collé', def: 'Variante du collage utilisant exclusivement des morceaux de papier (journal, papier peint) intégrés à la composition.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Picasso et Braque travaillaient si étroitement entre 1909 et 1912 que Braque a comparé leur relation à « deux alpinistes encordés ». Leurs tableaux de cette période sont parfois indiscernables.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Picasso a produit environ 50 000 œuvres au cours de sa carrière de 75 ans, dont 1 885 peintures, 1 228 sculptures et 12 000 dessins.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Cubisme analytique = fragmenter (bruns/gris), cubisme synthétique = reconstruire (collages/couleurs). Du complexe au simple.' }
          ]
        },
        {
          slug: 'surrealisme',
          title: 'Le surréalisme',
          description: 'Plongez dans le monde onirique du surréalisme, entre inconscient et merveilleux.',
          intro: 'Le surréalisme, fondé par André Breton en 1924, est un mouvement artistique et littéraire qui explore les territoires de l\'inconscient, du rêve et de l\'imaginaire. Inspirés par la psychanalyse de Freud, les surréalistes cherchent à libérer la création de tout contrôle rationnel pour atteindre une réalité supérieure (« surréalité »). Salvador Dalí, René Magritte, Max Ernst et Joan Miró sont les principales figures de ce mouvement.',
          introHighlight: 'Le surréalisme cherche à concilier le rêve et la réalité en une « surréalité » où l\'inconscient et le merveilleux s\'expriment librement.',
          intro2: '',
          sections: [
            {
              title: 'Origines et manifeste du surréalisme',
              paragraphs: [
                'Le surréalisme naît dans le sillage du dadaïsme, mouvement anarchiste né pendant la Première Guerre mondiale qui rejette toute forme d\'art conventionnel. André Breton, poète et théoricien, publie le Manifeste du surréalisme en 1924, définissant le mouvement comme un « automatisme psychique pur » destiné à exprimer « le fonctionnement réel de la pensée, en l\'absence de tout contrôle exercé par la raison ».',
                'La psychanalyse de Sigmund Freud, et notamment son interprétation des rêves, fournit la base théorique du surréalisme. Les surréalistes expérimentent l\'écriture automatique (écrire sans contrôle conscient), le récit de rêves, le cadavre exquis (dessin ou texte collectif) et d\'autres techniques visant à court-circuiter la censure rationnelle.',
                'Le mouvement rassemble des poètes (Breton, Éluard, Aragon), des peintres (Ernst, Magritte, Dalí, Miró), des cinéastes (Buñuel) et des photographes (Man Ray). Cette interdisciplinarité est l\'une des caractéristiques essentielles du surréalisme, qui refuse les frontières entre les arts.'
              ],
              highlight: 'Le surréalisme est l\'un des rares mouvements à avoir uni littérature, peinture, cinéma et photographie dans un même projet de transformation de la réalité.'
            },
            {
              title: 'Dalí, Magritte et les maîtres du surréalisme',
              paragraphs: [
                'Salvador Dalí (1904-1989) développe sa « méthode paranoïaque-critique », technique d\'auto-suggestion permettant de produire des visions hallucinatoires peintes avec un réalisme photographique. La Persistance de la mémoire (1931), avec ses montres molles fondant dans un paysage désertique, est devenue l\'icône du surréalisme. Le talent de Dalí pour l\'autopromotion en fait l\'artiste le plus médiatisé du XXe siècle.',
                'René Magritte (1898-1967), peintre belge, propose un surréalisme plus intellectuel, fondé sur le décalage entre l\'image et le sens. La Trahison des images (1929), montrant une pipe accompagnée de l\'inscription « Ceci n\'est pas une pipe », interroge la nature de la représentation. Son art repose sur des juxtapositions impossibles qui déstabilisent notre perception du réel.',
                'Max Ernst invente le frottage (dessin obtenu en frottant un crayon sur une surface texturée) et le grattage (grattage de couches de peinture), tandis que Joan Miró développe un langage de signes biomorphiques flottant dans des espaces oniriques. Chaque artiste surréaliste développe sa propre technique d\'accès à l\'inconscient.'
              ],
              highlight: 'Magritte interroge le rapport entre les mots et les images avec une logique implacable qui anticipe l\'art conceptuel et la philosophie du langage.'
            },
            {
              title: 'Héritage et postérité du surréalisme',
              paragraphs: [
                'Le surréalisme a profondément influencé la culture du XXe siècle, bien au-delà des arts visuels. La publicité, le cinéma (David Lynch, Tim Burton), la mode, le design et même la philosophie portent la marque de l\'esthétique surréaliste. Les concepts de libre association, de rencontre fortuite et de beauté convulsive sont devenus des lieux communs de la culture contemporaine.',
                'En peinture, l\'automatisme surréaliste a directement influencé l\'expressionnisme abstrait américain. Les techniques de dripping de Jackson Pollock et les formes biomorphiques de Willem de Kooning doivent beaucoup aux expérimentations surréalistes. L\'art conceptuel hérite également du surréalisme, notamment de la pratique du ready-made inaugurée par Marcel Duchamp.',
                'Le mouvement surréaliste a également joué un rôle politique important, s\'engageant contre le fascisme et le colonialisme. Breton défend la liberté absolue de l\'imagination comme arme contre toute forme d\'oppression. Bien que le mouvement organisé se dissolve dans les années 1960, son esprit continue d\'irriguer l\'art contemporain.'
              ],
              highlight: 'Le surréalisme a transformé non seulement l\'art mais la culture entière du XXe siècle : publicité, cinéma, mode et design portent sa marque.'
            }
          ],
          quiz: [
            { q: 'Qui a fondé le mouvement surréaliste ?', opts: ['Salvador Dalí', 'André Breton', 'Marcel Duchamp', 'Max Ernst'], correct: 1, explanation: 'André Breton a fondé le surréalisme en publiant le Manifeste du surréalisme en 1924.' },
            { q: 'Quelle théorie scientifique a inspiré le surréalisme ?', opts: ['La relativité d\'Einstein', 'La psychanalyse de Freud', 'L\'évolution de Darwin', 'La physique quantique'], correct: 1, explanation: 'La psychanalyse de Freud, et notamment son interprétation des rêves et de l\'inconscient, fournit la base théorique du surréalisme.' },
            { q: 'Quel tableau de Magritte montre une pipe avec l\'inscription « Ceci n\'est pas une pipe » ?', opts: ['Le Fils de l\'homme', 'L\'Empire des lumières', 'La Trahison des images', 'La Clef des songes'], correct: 2, explanation: 'La Trahison des images (1929) de Magritte interroge la différence entre un objet réel et sa représentation picturale.' }
          ],
          definitions: [
            { term: 'Automatisme psychique', def: 'Technique surréaliste de création sans contrôle rationnel, visant à exprimer directement le fonctionnement de l\'inconscient.' },
            { term: 'Cadavre exquis', def: 'Jeu collectif surréaliste où chaque participant ajoute un élément à un dessin ou un texte sans voir les contributions précédentes.' },
            { term: 'Frottage', def: 'Technique inventée par Max Ernst, consistant à frotter un crayon sur une feuille posée sur une surface texturée pour obtenir des images suggestives.' },
            { term: 'Méthode paranoïaque-critique', def: 'Technique de Dalí consistant à induire des visions hallucinatoires contrôlées et à les reproduire avec un réalisme photographique.' },
            { term: 'Ready-made', def: 'Objet manufacturé ordinaire élevé au rang d\'œuvre d\'art par le seul choix de l\'artiste, concept initié par Marcel Duchamp.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Dalí a déclaré : « La seule différence entre moi et un fou, c\'est que moi je ne suis pas fou. » Son talent pour l\'autopromotion en a fait une célébrité mondiale.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Le Manifeste du surréalisme de Breton (1924) compte une trentaine de pages et définit le mouvement comme un « automatisme psychique pur ».' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Dalí = rêves hyperréalistes, Magritte = logique paradoxale, Ernst = techniques expérimentales, Miró = signes biomorphiques.' }
          ]
        },
        {
          slug: 'art-abstrait',
          title: 'L\'art abstrait',
          description: 'Explorez la naissance et le développement de l\'abstraction en peinture.',
          intro: 'L\'art abstrait, apparu dans les années 1910, constitue la rupture la plus radicale de l\'histoire de la peinture : l\'abandon total de la figuration. Kandinsky, Mondrian et Malevitch ouvrent trois voies distinctes vers l\'abstraction — lyrique, géométrique et suprématiste — libérant la peinture de toute obligation de représenter le monde visible. L\'art abstrait domine la scène artistique internationale au milieu du XXe siècle avec l\'expressionnisme abstrait américain.',
          introHighlight: 'L\'art abstrait pose la question fondamentale : la peinture peut-elle exister sans représenter quoi que ce soit du monde visible ?',
          intro2: '',
          sections: [
            {
              title: 'Les pionniers de l\'abstraction',
              paragraphs: [
                'Vassily Kandinsky (1866-1944), peintre russe installé à Munich, est généralement considéré comme le premier artiste à avoir peint une œuvre entièrement abstraite, vers 1910-1911. Musicien et peintre, il cherche à créer un art visuel fonctionnant comme la musique : un langage de formes et de couleurs produisant des émotions directes, sans passer par la représentation d\'objets reconnaissables.',
                'Son traité Du spirituel dans l\'art (1911) théorise l\'abstraction comme une voie d\'accès à la réalité spirituelle. Kandinsky distingue trois types de compositions : les « impressions » (inspirées de la nature), les « improvisations » (expressions spontanées) et les « compositions » (constructions élaborées). Ses œuvres évoluent de formes organiques expressives vers des compositions géométriques plus rigoureuses après son passage au Bauhaus.',
                'Piet Mondrian (1872-1944), peintre néerlandais, développe une abstraction géométrique radicale aboutissant au néoplasticisme : des compositions de lignes noires horizontales et verticales délimitant des rectangles peints en couleurs primaires (rouge, jaune, bleu) ou en non-couleurs (blanc, gris, noir). Pour Mondrian, cette réduction extrême exprime l\'harmonie universelle.'
              ],
              highlight: 'Kandinsky, Mondrian et Malevitch ont inventé l\'abstraction de manière presque simultanée mais indépendante, preuve que cette révolution était « dans l\'air du temps ».'
            },
            {
              title: 'Suprématisme et constructivisme',
              paragraphs: [
                'En Russie, Kazimir Malevitch (1878-1935) fonde le suprématisme en 1915 avec son Carré noir sur fond blanc, un simple carré noir peint sur une toile blanche, exposé dans un angle de la salle comme une icône. Cette œuvre, provocante dans sa radicalité, affirme la « suprématie du sentiment pur dans l\'art », dégagé de toute représentation du monde visible.',
                'Le constructivisme russe, développé par Vladimir Tatline, Alexandre Rodtchenko et El Lissitzky, oriente l\'abstraction vers une fonction sociale et utilitaire. Les constructivistes rejettent l\'art « bourgeois » de chevalet pour créer des objets, des affiches, des textiles et des architectures au service de la révolution soviétique. Leur influence sur le design graphique et l\'architecture du XXe siècle est considérable.',
                'Le mouvement De Stijl, fondé par Mondrian et Theo van Doesburg aux Pays-Bas en 1917, étend le néoplasticisme à l\'architecture, au mobilier et au design. La Maison Rietveld-Schröder d\'Utrecht (1924), avec ses plans colorés en rouge, bleu et jaune, est la transposition architecturale des tableaux de Mondrian.'
              ],
              highlight: 'Le Carré noir de Malevitch (1915) est la réduction la plus radicale de la peinture : un carré noir sur un fond blanc, qui contient pourtant un univers de significations.'
            },
            {
              title: 'L\'expressionnisme abstrait américain',
              paragraphs: [
                'Après la Seconde Guerre mondiale, le centre de l\'art mondial se déplace de Paris à New York. L\'expressionnisme abstrait, premier grand mouvement artistique américain, émerge dans les années 1940-1950. Jackson Pollock (1912-1956) développe le « dripping » : posant sa toile au sol, il projette et laisse goutter la peinture en mouvements chorégraphiques, créant des réseaux de lignes enchevêtrées d\'une énergie explosive.',
                'Mark Rothko (1903-1970) représente l\'autre pôle de l\'expressionnisme abstrait avec ses grands champs de couleur (Color Field Painting) : de vastes rectangles de couleurs vibrantes aux bords estompés, flottant sur des fonds monochromes. Ses tableaux, conçus pour être contemplés de près dans un recueillement quasi religieux, visent à provoquer une émotion directe et profonde.',
                'Willem de Kooning, Franz Kline, Robert Motherwell et Helen Frankenthaler complètent le panorama de ce mouvement capital. L\'expressionnisme abstrait affirme la toile comme un champ d\'action (action painting) autant qu\'un objet de contemplation, préparant le terrain pour le pop art et le minimalisme qui lui succéderont.'
              ],
              highlight: 'L\'expressionnisme abstrait a déplacé le centre de l\'art mondial de Paris à New York, faisant des États-Unis la nouvelle puissance artistique dominante.'
            }
          ],
          quiz: [
            { q: 'Qui est généralement considéré comme le premier peintre abstrait ?', opts: ['Mondrian', 'Malevitch', 'Kandinsky', 'Pollock'], correct: 2, explanation: 'Vassily Kandinsky est généralement considéré comme le premier artiste à avoir réalisé une œuvre entièrement abstraite, vers 1910-1911.' },
            { q: 'Qu\'est-ce que le Carré noir sur fond blanc de Malevitch ?', opts: ['Un exercice d\'atelier', 'L\'œuvre fondatrice du suprématisme', 'Un canular artistique', 'Une étude préparatoire'], correct: 1, explanation: 'Le Carré noir (1915) de Malevitch est l\'œuvre fondatrice du suprématisme, affirmant la suprématie du sentiment pur sur la représentation.' },
            { q: 'Quelle technique Jackson Pollock a-t-il développée ?', opts: ['Le collage', 'Le dripping', 'Le frottage', 'Le pointillisme'], correct: 1, explanation: 'Jackson Pollock a développé le dripping : il laissait goutter et projetait la peinture sur une toile posée au sol, en mouvements gestuel.' }
          ],
          definitions: [
            { term: 'Abstraction', def: 'Art qui ne représente pas le monde visible, utilisant formes, couleurs et lignes comme moyens d\'expression autonomes.' },
            { term: 'Néoplasticisme', def: 'Système esthétique de Mondrian réduisant la peinture à des lignes noires horizontales/verticales et des aplats de couleurs primaires.' },
            { term: 'Suprématisme', def: 'Mouvement fondé par Malevitch, réduisant l\'art à des formes géométriques pures (carré, cercle, croix) sur fond blanc.' },
            { term: 'Dripping', def: 'Technique de Jackson Pollock consistant à laisser goutter ou projeter la peinture sur une toile posée au sol.' },
            { term: 'Color Field Painting', def: 'Courant de l\'expressionnisme abstrait privilégiant de grandes surfaces de couleur uniforme, illustré par Rothko et Newman.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Kandinsky a eu la révélation de l\'abstraction en voyant l\'un de ses propres tableaux posé sur le côté : ne reconnaissant pas le sujet, il fut saisi par la beauté pure des formes et des couleurs.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Les tableaux de Rothko mesurent souvent plus de 2 mètres de haut : il voulait que le spectateur soit « enveloppé » par la couleur.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Trois voies vers l\'abstraction : Kandinsky (lyrisme), Mondrian (géométrie), Malevitch (radicalité). Puis Pollock (geste) et Rothko (couleur).' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  HUB 5 — Art contemporain
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'art-contemporain',
      title: 'Art contemporain',
      description: 'Du pop art à l\'art numérique, explorez les tendances artistiques de la seconde moitié du XXe siècle à nos jours.',
      introText: 'L\'art contemporain, qui s\'étend des années 1960 à nos jours, se caractérise par une diversité de pratiques, de médiums et de concepts sans précédent. Du pop art au minimalisme, de l\'art conceptuel aux installations, de la performance à l\'art numérique, les artistes contemporains remettent constamment en question la définition même de l\'art, ses limites et ses fonctions dans la société.',
      introHighlight: 'L\'art contemporain se définit moins par un style que par une attitude : tout peut être art si l\'artiste le décide et si le contexte le permet.',
      lessons: [
        {
          slug: 'pop-art',
          title: 'Le pop art',
          description: 'Découvrez le pop art, mouvement qui a fait entrer la culture de masse dans les musées.',
          intro: 'Le pop art (popular art) émerge simultanément en Grande-Bretagne et aux États-Unis dans les années 1950-1960. En empruntant ses images à la publicité, aux bandes dessinées, aux produits de consommation et aux médias de masse, le pop art brouille la frontière entre art « noble » et culture populaire. Andy Warhol, Roy Lichtenstein et Richard Hamilton sont les figures emblématiques de ce mouvement provocateur et jubilatoire.',
          introHighlight: 'Le pop art a démontré que les images les plus banales de la société de consommation pouvaient devenir des œuvres d\'art à part entière.',
          intro2: '',
          sections: [
            {
              title: 'Origines britanniques et explosion américaine',
              paragraphs: [
                'Le pop art naît en Grande-Bretagne au sein de l\'Independent Group, un cercle d\'artistes et d\'intellectuels du Institute of Contemporary Arts de Londres. Le collage de Richard Hamilton Qu\'est-ce qui rend les foyers d\'aujourd\'hui si différents, si attrayants ? (1956), composé d\'images découpées dans des magazines, est considéré comme la première œuvre pop art. Eduardo Paolozzi et Peter Blake développent cette esthétique dans le contexte de la culture populaire britannique.',
                'Aux États-Unis, le pop art s\'impose comme une réaction à la subjectivité de l\'expressionnisme abstrait. Jasper Johns et Robert Rauschenberg ouvrent la voie en réintroduisant des objets et des images reconnaissables dans la peinture. Johns peint des drapeaux américains et des cibles dans un style impassible, tandis que Rauschenberg crée des « combines » intégrant des objets trouvés à la peinture.',
                'Le pop art américain atteint son apogée entre 1962 et 1968, porté par Andy Warhol, Roy Lichtenstein, Claes Oldenburg, James Rosenquist et Tom Wesselmann. New York devient le centre mondial de l\'art, détrônant définitivement Paris. Les galeries de Leo Castelli et d\'Ileana Sonnabend jouent un rôle crucial dans la promotion du mouvement.'
              ],
              highlight: 'Le pop art renverse la hiérarchie traditionnelle entre art « noble » et culture populaire, démontrant que l\'art peut naître de n\'importe quel matériau visuel.'
            },
            {
              title: 'Andy Warhol, l\'artiste-machine',
              paragraphs: [
                'Andy Warhol (1928-1987) est la figure la plus emblématique et la plus controversée du pop art. Ancien illustrateur publicitaire, il adopte la sérigraphie comme technique de prédilection, permettant la reproduction mécanique d\'images en série. Ses boîtes de soupe Campbell (1962), ses bouteilles de Coca-Cola et ses portraits de célébrités (Marilyn Monroe, Elvis Presley, Mao) questionnent la frontière entre original et copie, art et commerce.',
                'La Factory, son atelier new-yorkais, devient un lieu de création collective où se côtoient artistes, musiciens, acteurs et marginaux. Warhol y produit des peintures, des films expérimentaux, de la musique (en produisant le Velvet Underground) et un magazine (Interview). Il incarne la figure de l\'artiste-entrepreneur, anticipant l\'art-business du XXIe siècle.',
                'La philosophie de Warhol se résume dans sa phrase célèbre : « Dans le futur, chacun aura droit à quinze minutes de célébrité mondiale. » Son œuvre interroge la société de consommation, le culte des célébrités, la mort et la reproduction mécanique avec une ambiguïté délibérée entre critique et célébration.'
              ],
              highlight: 'Warhol a brouillé la frontière entre art et commerce de manière si radicale que le débat reste ouvert : son œuvre célèbre-t-elle ou critique-t-elle la société de consommation ?'
            },
            {
              title: 'Lichtenstein et l\'esthétique de la bande dessinée',
              paragraphs: [
                'Roy Lichtenstein (1923-1997) transpose l\'esthétique de la bande dessinée et de la publicité dans le format de la peinture de chevalet. Ses tableaux reproduisent des vignettes de comics agrandies à l\'échelle monumentale, avec leurs trames de points Ben-Day, leurs couleurs primaires et leurs bulles de dialogue. Whaam! (1963) et Drowning Girl (1963) sont ses œuvres les plus iconiques.',
                'Lichtenstein ne se contente pas de copier les comics : il simplifie, recadre et transforme les images originales avec un sens aigu de la composition. Ses œuvres interrogent la nature de l\'originalité artistique et la hiérarchie entre « grand art » et art populaire. Il a aussi réinterprété des chefs-d\'œuvre de Monet, Picasso et Mondrian dans son style pop.',
                'Le pop art a eu une influence considérable sur la culture visuelle contemporaine. Le street art, le design graphique, la mode et la publicité portent la marque de son esthétique. Des artistes comme Jeff Koons, Damien Hirst et Takashi Murakami prolongent l\'héritage pop en brouillant encore davantage les frontières entre art, commerce et divertissement.'
              ],
              highlight: 'Le pop art a inversé le rapport entre l\'art et la culture de masse : au lieu que l\'art influence la culture populaire, c\'est la culture populaire qui nourrit l\'art.'
            }
          ],
          quiz: [
            { q: 'Quelle technique Andy Warhol utilisait-il principalement ?', opts: ['La peinture à l\'huile', 'La sérigraphie', 'L\'aquarelle', 'La gravure sur bois'], correct: 1, explanation: 'Warhol utilisait la sérigraphie, qui permet la reproduction mécanique d\'images en série, remettant en cause la notion d\'œuvre unique.' },
            { q: 'Quel artiste est célèbre pour ses peintures de bandes dessinées agrandies ?', opts: ['Andy Warhol', 'Jasper Johns', 'Roy Lichtenstein', 'Claes Oldenburg'], correct: 2, explanation: 'Roy Lichtenstein a transposé l\'esthétique de la bande dessinée en peinture, avec ses trames de points Ben-Day et ses couleurs primaires.' },
            { q: 'Comment s\'appelait l\'atelier d\'Andy Warhol à New York ?', opts: ['Le Studio', 'La Factory', 'Le Loft', 'L\'Atelier'], correct: 1, explanation: 'La Factory était l\'atelier de Warhol à New York, lieu de création collective accueillant artistes, musiciens et célébrités.' }
          ],
          definitions: [
            { term: 'Pop art', def: 'Mouvement artistique des années 1960 utilisant les images de la culture de masse (publicité, bandes dessinées, produits de consommation) comme matériau artistique.' },
            { term: 'Sérigraphie', def: 'Technique d\'impression par pochoir utilisant un écran de soie, permettant la reproduction d\'images en série.' },
            { term: 'Points Ben-Day', def: 'Trame de points colorés utilisée en imprimerie pour créer des nuances, reproduite par Lichtenstein dans ses peintures.' },
            { term: 'Combine painting', def: 'Technique de Rauschenberg intégrant des objets trouvés (pneus, animaux empaillés, photos) dans la peinture.' },
            { term: 'Multiple', def: 'Œuvre d\'art produite en série, remettant en cause la notion d\'œuvre unique et d\'originalité.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Warhol a déclaré « être une machine » et a nommé son atelier la Factory (l\'usine). Il voulait que l\'art soit aussi reproductible qu\'un produit industriel.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La série des 32 boîtes de soupe Campbell de Warhol (1962) s\'est vendue 11,8 millions de dollars en 2006.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Pop art = POP(ulaire). Warhol = célébrités et produits, Lichtenstein = bandes dessinées, Oldenburg = objets géants.' }
          ]
        },
        {
          slug: 'minimalisme',
          title: 'Le minimalisme',
          description: 'Découvrez l\'art minimal, réduction de l\'œuvre à ses éléments les plus essentiels.',
          intro: 'Le minimalisme, apparu aux États-Unis dans les années 1960, est un mouvement artistique qui réduit l\'œuvre à ses composants les plus fondamentaux : formes géométriques simples, matériaux industriels, absence de toute expressivité personnelle. Donald Judd, Dan Flavin, Carl Andre et Sol LeWitt créent des objets et des installations qui ne renvoient qu\'à eux-mêmes, éliminant toute référence extérieure et toute trace de la main de l\'artiste.',
          introHighlight: 'Le minimalisme cherche à éliminer tout ce qui est superflu dans l\'art pour ne conserver que l\'essentiel : la forme, le matériau et l\'espace.',
          intro2: '',
          sections: [
            {
              title: 'Principes et esthétique du minimalisme',
              paragraphs: [
                'Le minimalisme réagit à la fois contre la subjectivité de l\'expressionnisme abstrait et contre la frivolité du pop art. Les artistes minimalistes cherchent un art objectif, impersonnel et littéral. Donald Judd formule la théorie des « objets spécifiques » : des œuvres qui ne sont ni peinture ni sculpture mais des objets autonomes, fabriqués industriellement en matériaux comme l\'acier, l\'aluminium, le plexiglas et le contreplaqué.',
                'La répétition de formes identiques est un principe central du minimalisme. Les « stacks » de Judd (boîtes métalliques empilées verticalement sur un mur), les rangées de briques de Carl Andre au sol, et les tubes de néon de Dan Flavin utilisent la sérialité pour créer une présence physique forte tout en éliminant la composition subjective.',
                'Le minimalisme accorde une importance centrale à la relation entre l\'œuvre et l\'espace qui l\'accueille. Les installations minimalistes transforment la perception de l\'espace architectural. Le spectateur est invité à se déplacer autour et à travers l\'œuvre, dont l\'expérience varie selon le point de vue et les conditions de lumière.'
              ],
              highlight: 'Le minimalisme affirme que l\'œuvre d\'art n\'a pas à « représenter » ou « exprimer » quoi que ce soit : elle existe comme un objet dans l\'espace, point.'
            },
            {
              title: 'Les figures majeures du minimalisme',
              paragraphs: [
                'Donald Judd (1928-1994) est le théoricien principal du minimalisme. Ses « objets spécifiques » en aluminium anodisé et plexiglas coloré, fabriqués industriellement selon ses spécifications, éliminent toute trace de la main de l\'artiste. Son installation permanente à Marfa, Texas, comprend 100 boîtes en aluminium poli dans deux hangars militaires reconvertis.',
                'Dan Flavin (1933-1996) utilise exclusivement des tubes fluorescents du commerce pour créer des installations lumineuses qui transforment l\'espace environnant en baignant les murs de couleurs. Son œuvre interroge la dématérialisation de l\'art : la lumière est-elle un matériau sculptural ? Ses installations sont indissociables de l\'architecture qui les accueille.',
                'Sol LeWitt (1928-2007) est le pont entre minimalisme et art conceptuel. Ses « wall drawings » (dessins muraux) sont réalisés d\'après des instructions écrites par l\'artiste mais exécutés par des assistants. L\'idée devient l\'œuvre : le concept prime sur l\'exécution. Cette démarche ouvre directement la voie à l\'art conceptuel.'
              ],
              highlight: 'Le minimalisme a fait du spectateur un élément actif de l\'œuvre : son déplacement dans l\'espace modifie constamment sa perception.'
            },
            {
              title: 'Postérité et influence du minimalisme',
              paragraphs: [
                'L\'influence du minimalisme dépasse largement le monde de l\'art. L\'architecture contemporaine (Tadao Ando, John Pawson), le design d\'intérieur, le design industriel (Apple), la mode et même la philosophie de vie « less is more » portent la marque de l\'esthétique minimaliste.',
                'Le post-minimalisme, porté par des artistes comme Eva Hesse et Richard Serra, conserve le vocabulaire formel du minimalisme tout en réintroduisant une dimension organique, processuelle ou monumentale. Les sculptures en acier Corten de Serra, pesant parfois plusieurs dizaines de tonnes, utilisent l\'échelle et le poids pour créer des expériences physiques puissantes.',
                'Le Land Art, avec les spirales de Robert Smithson et les lignes de Richard Long, transpose les principes minimalistes dans le paysage naturel. Ces mouvements démontrent la fécondité des principes minimalistes au-delà de la galerie d\'art.'
              ],
              highlight: 'Le minimalisme a influencé bien au-delà de l\'art : architecture, design, technologie et mode de vie portent l\'empreinte de son esthétique de la réduction.'
            }
          ],
          quiz: [
            { q: 'Quel matériau Dan Flavin utilise-t-il exclusivement ?', opts: ['L\'acier inoxydable', 'Le marbre', 'Les tubes fluorescents', 'Le béton'], correct: 2, explanation: 'Dan Flavin utilise exclusivement des tubes fluorescents du commerce pour créer ses installations lumineuses qui transforment l\'espace.' },
            { q: 'Que sont les « objets spécifiques » de Donald Judd ?', opts: ['Des peintures abstraites', 'Des œuvres ni peinture ni sculpture, fabriquées industriellement', 'Des sculptures en bronze', 'Des photographies'], correct: 1, explanation: 'Les « objets spécifiques » de Judd sont des œuvres autonomes fabriquées industriellement, ne relevant ni de la peinture ni de la sculpture traditionnelle.' },
            { q: 'Quel artiste minimaliste crée des œuvres à partir d\'instructions écrites ?', opts: ['Dan Flavin', 'Carl Andre', 'Sol LeWitt', 'Donald Judd'], correct: 2, explanation: 'Sol LeWitt rédige des instructions (concepts) que d\'autres exécutent, affirmant la primauté de l\'idée sur la réalisation.' }
          ],
          definitions: [
            { term: 'Minimalisme', def: 'Mouvement artistique des années 1960 réduisant l\'œuvre à des formes géométriques simples, des matériaux industriels et l\'absence d\'expressivité personnelle.' },
            { term: 'Objet spécifique', def: 'Terme de Donald Judd désignant une œuvre qui n\'est ni peinture ni sculpture mais un objet autonome dans l\'espace.' },
            { term: 'Sérialité', def: 'Principe de répétition de formes identiques dans l\'art minimaliste, éliminant la composition subjective.' },
            { term: 'Land Art', def: 'Mouvement artistique réalisant des œuvres directement dans le paysage naturel, souvent à grande échelle et éphémères.' },
            { term: 'Post-minimalisme', def: 'Courant réintroduisant des dimensions organiques, processuelles ou monumentales dans le vocabulaire minimaliste.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Donald Judd a installé 100 boîtes en aluminium dans deux hangars militaires à Marfa, Texas, créant l\'un des plus grands espaces d\'art permanent au monde.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Les sculptures de Richard Serra pèsent parfois plus de 200 tonnes et mesurent jusqu\'à 4 mètres de haut.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Minimalisme = « less is more ». Judd = boîtes, Flavin = néons, Andre = briques au sol, LeWitt = instructions.' }
          ]
        },
        {
          slug: 'art-conceptuel',
          title: 'L\'art conceptuel',
          description: 'Explorez l\'art conceptuel, où l\'idée prime sur l\'objet.',
          intro: 'L\'art conceptuel, développé à partir de la fin des années 1960, radicalise la démarche amorcée par Sol LeWitt : l\'idée ou le concept derrière l\'œuvre est plus important que l\'objet matériel lui-même. Joseph Kosuth, Lawrence Weiner, On Kawara et le collectif Art & Language questionnent la nature même de l\'art, ses définitions et ses institutions. L\'art conceptuel ouvre un espace de réflexion qui reste central dans la pratique artistique contemporaine.',
          introHighlight: 'L\'art conceptuel pose la question la plus radicale de l\'histoire de l\'art : une idée peut-elle constituer une œuvre d\'art, même sans objet matériel ?',
          intro2: '',
          sections: [
            {
              title: 'Duchamp et les origines de l\'art conceptuel',
              paragraphs: [
                'Marcel Duchamp (1887-1968) est le précurseur majeur de l\'art conceptuel. Avec ses ready-mades — objets manufacturés ordinaires élevés au rang d\'œuvres d\'art par le seul choix de l\'artiste — il déplace l\'art du domaine du savoir-faire vers celui de l\'idée. Son urinoir renversé intitulé Fontaine (1917) est l\'acte fondateur de l\'art conceptuel, même si le terme n\'apparaît que cinquante ans plus tard.',
                'Duchamp affirme que l\'art est avant tout un acte mental. Ce n\'est pas la fabrication d\'un bel objet qui fait l\'œuvre, mais le geste de sélection et le contexte de présentation. Cette idée révolutionnaire met en question l\'ensemble des conventions artistiques : le talent manuel, l\'originalité formelle, le caractère unique de l\'œuvre et l\'institution muséale elle-même.',
                'Yves Klein (1928-1962), artiste français, anticipe l\'art conceptuel avec des œuvres comme sa Zone de sensibilité picturale immatérielle (1959-1962), où il vend des « zones de vide » contre de l\'or qu\'il jette ensuite dans la Seine. Ses Anthropométries (empreintes de corps nus enduits de peinture bleue) font du processus de création le spectacle lui-même.'
              ],
              highlight: 'La Fontaine de Duchamp (un urinoir signé) a été élue « œuvre d\'art la plus influente du XXe siècle » par un panel de 500 experts en 2004.'
            },
            {
              title: 'L\'art conceptuel des années 1960-1970',
              paragraphs: [
                'Joseph Kosuth (né en 1945) formule la théorie de l\'art conceptuel dans son essai Art after Philosophy (1969). Son œuvre Une et trois chaises (1965) présente une chaise réelle, sa photographie et sa définition du dictionnaire, interrogeant le rapport entre l\'objet, son image et son concept.',
                'Lawrence Weiner réduit l\'œuvre à un énoncé textuel : ses « statements » décrivent des actions ou des situations (par exemple : « Une quantité d\'explosif tirée contre un mur »). L\'œuvre peut être réalisée ou non, par l\'artiste ou par quiconque. Le texte suffit à constituer l\'œuvre.',
                'On Kawara (1932-2014) peint quotidiennement la date du jour sur une toile monochrome (série Today, commencée en 1966). Si le tableau n\'est pas terminé à minuit, il le détruit. Cette pratique obsessionnelle transforme le passage du temps en art, avec une rigueur et une constance qui confèrent à l\'entreprise une dimension existentielle.'
              ],
              highlight: 'L\'art conceptuel a radicalement élargi la définition de l\'art : un texte, une idée, un geste ou même une absence peuvent constituer une œuvre.'
            },
            {
              title: 'Héritage de l\'art conceptuel',
              paragraphs: [
                'L\'art conceptuel a profondément transformé les pratiques artistiques contemporaines. Aujourd\'hui, la plupart des artistes contemporains travaillent à partir de concepts, de processus ou de systèmes plutôt que de créer des objets esthétiques traditionnels. L\'art conceptuel a légitimé la vidéo, la performance, l\'installation, le texte et les pratiques numériques comme formes artistiques à part entière.',
                'La critique institutionnelle, développée par des artistes comme Marcel Broodthaers, Hans Haacke et Andrea Fraser, prolonge l\'art conceptuel en questionnant les mécanismes du monde de l\'art lui-même : le musée, le marché, la critique et le pouvoir culturel. Cette démarche interroge la complicité de l\'art avec les structures économiques et politiques.',
                'L\'art conceptuel a également influencé l\'enseignement artistique, déplaçant l\'accent du savoir-faire technique vers la réflexion critique et la démarche intellectuelle. Cette évolution reste controversée : certains y voient un enrichissement de la notion d\'art, d\'autres un appauvrissement qui confond art et philosophie.'
              ],
              highlight: 'L\'art conceptuel a transformé la formation artistique : aujourd\'hui, un artiste est avant tout jugé sur sa démarche intellectuelle et non sur sa virtuosité technique.'
            }
          ],
          quiz: [
            { q: 'Quel objet Marcel Duchamp a-t-il présenté comme œuvre d\'art en 1917 ?', opts: ['Une roue de bicyclette', 'Un urinoir (Fontaine)', 'Un porte-bouteilles', 'Un peigne'], correct: 1, explanation: 'La Fontaine (1917), un urinoir renversé signé « R. Mutt », est l\'acte fondateur de l\'art conceptuel.' },
            { q: 'Que présente l\'œuvre Une et trois chaises de Joseph Kosuth ?', opts: ['Trois chaises identiques', 'Une chaise, sa photo et sa définition', 'Un plan de chaise', 'Un texte sur les chaises'], correct: 1, explanation: 'Kosuth juxtapose une chaise réelle, sa photographie et sa définition du dictionnaire pour interroger le rapport entre objet, image et concept.' },
            { q: 'Que peint On Kawara chaque jour ?', opts: ['Un autoportrait', 'La date du jour', 'Un paysage', 'Un mot'], correct: 1, explanation: 'On Kawara peint quotidiennement la date du jour sur une toile monochrome, transformant le passage du temps en art.' }
          ],
          definitions: [
            { term: 'Art conceptuel', def: 'Mouvement artistique affirmant que l\'idée ou le concept constitue l\'essence de l\'œuvre, indépendamment de sa réalisation matérielle.' },
            { term: 'Ready-made', def: 'Objet manufacturé ordinaire présenté comme œuvre d\'art par le choix de l\'artiste, concept initié par Marcel Duchamp.' },
            { term: 'Critique institutionnelle', def: 'Pratique artistique questionnant les mécanismes du monde de l\'art (musée, marché, critique) comme structures de pouvoir.' },
            { term: 'Performance', def: 'Forme artistique où l\'artiste utilise son propre corps et ses actions comme medium, devant un public ou face à une caméra.' },
            { term: 'Dématérialisation', def: 'Processus par lequel l\'art conceptuel réduit ou élimine l\'objet matériel au profit de l\'idée.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La Fontaine originale de Duchamp (1917) a été perdue. Les exemplaires existants sont des répliques, ce qui est ironique pour une œuvre questionnant l\'originalité.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'On Kawara a peint des « date paintings » pendant près de 50 ans (1966-2014), produisant environ 3 000 toiles.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Duchamp = le ready-made, Kosuth = la définition, Weiner = le texte, Kawara = la date. Le concept remplace l\'objet.' }
          ]
        },
        {
          slug: 'installations',
          title: 'L\'art de l\'installation',
          description: 'Explorez l\'art de l\'installation, œuvres immersives qui transforment l\'espace.',
          intro: 'L\'installation est une forme d\'art contemporain qui transforme un espace entier en une œuvre immersive dans laquelle le spectateur peut pénétrer et se déplacer. Apparue dans les années 1960, elle utilise tous les médiums possibles : sculpture, vidéo, son, lumière, matériaux naturels ou industriels. Les installations de Yayoi Kusama, Olafur Eliasson et Christo redéfinissent la relation entre l\'art, l\'espace et le spectateur.',
          introHighlight: 'L\'installation transforme le spectateur passif en participant actif d\'une expérience artistique totale, engageant tous ses sens.',
          intro2: '',
          sections: [
            {
              title: 'Origines et principes de l\'installation',
              paragraphs: [
                'L\'installation trouve ses racines dans les environnements des artistes dadaïstes et surréalistes, puis dans les happenings d\'Allan Kaprow dans les années 1960. Kaprow théorise le passage de l\'art-objet à l\'art-environnement : au lieu de contempler un tableau accroché au mur, le spectateur est invité à pénétrer dans un espace transformé par l\'artiste.',
                'L\'installation se distingue de la sculpture traditionnelle par plusieurs caractéristiques : elle occupe et transforme un espace entier, elle est souvent éphémère et spécifique au lieu (site-specific), elle peut utiliser n\'importe quel matériau ou médium, et elle implique une participation active du spectateur qui en fait partie intégrante.',
                'Les musées d\'art contemporain ont adapté leur architecture pour accueillir ces œuvres immersives. La Turbine Hall de la Tate Modern à Londres, le PS1 du MoMA à New York et le Palais de Tokyo à Paris offrent des espaces de dimensions monumentales conçus pour des installations à grande échelle.'
              ],
              highlight: 'L\'installation a transformé le musée : d\'un lieu de contemplation silencieuse, il est devenu un espace d\'expérience sensorielle et participative.'
            },
            {
              title: 'Artistes majeurs de l\'installation',
              paragraphs: [
                'Yayoi Kusama (née en 1929) est célèbre pour ses Infinity Rooms, des pièces recouvertes de miroirs et de points lumineux qui créent l\'illusion d\'un espace infini. Née au Japon, active à New York puis à Tokyo, elle explore les thèmes de l\'infini, de l\'oblitération et de la répétition obsessionnelle à travers peintures, sculptures et installations depuis plus de sept décennies.',
                'Olafur Eliasson (né en 1967) utilise la lumière, l\'eau, la température et le mouvement pour créer des installations qui transforment la perception sensorielle. The Weather Project (2003) à la Tate Modern présentait un immense soleil artificiel et un plafond de miroirs, attirant plus de deux millions de visiteurs. Son travail sensibilise le public aux questions environnementales.',
                'Christo et Jeanne-Claude ont réalisé des emballages monumentaux d\'édifices et de paysages : le Pont-Neuf emballé (1985), le Reichstag empaqueté (1995) et les Gates de Central Park (2005). Ces projets, autofinancés et éphémères, transforment temporairement des lieux familiers en œuvres d\'art, révélant leur beauté sous un regard neuf.'
              ],
              highlight: 'Les Infinity Rooms de Kusama sont devenues les œuvres d\'art les plus photographiées et partagées sur les réseaux sociaux au monde.'
            },
            {
              title: 'Installation et nouvelles technologies',
              paragraphs: [
                'Les technologies numériques ont considérablement élargi les possibilités de l\'installation artistique. Les installations interactives réagissent à la présence, aux mouvements ou aux sons des visiteurs grâce à des capteurs et des logiciels. L\'artiste japonais teamLab crée des environnements numériques immersifs où les projections réagissent en temps réel aux visiteurs, brouillant la frontière entre monde réel et monde virtuel.',
                'La réalité virtuelle et la réalité augmentée ouvrent de nouvelles dimensions pour l\'art immersif. Des artistes comme Marina Abramović et Anish Kapoor explorent ces technologies pour créer des expériences artistiques impossibles dans le monde physique. Les musées de réalité virtuelle et les expositions numériques se multiplient.',
                'L\'art numérique immersif connaît un succès public considérable : les expositions de type « immersif » attirent des millions de visiteurs dans le monde entier. Cette popularité suscite aussi des critiques dans le monde de l\'art, qui y voit parfois un spectacle commercial davantage qu\'une démarche artistique authentique.'
              ],
              highlight: 'Les installations numériques interactives transforment le spectateur en co-créateur de l\'œuvre : chaque visite produit une expérience unique.'
            }
          ],
          quiz: [
            { q: 'Qu\'est-ce qui caractérise une installation artistique ?', opts: ['C\'est un tableau accroché au mur', 'C\'est un environnement immersif dans lequel on pénètre', 'C\'est une sculpture sur socle', 'C\'est une photographie grand format'], correct: 1, explanation: 'L\'installation transforme un espace entier en une œuvre immersive dans laquelle le spectateur peut pénétrer et se déplacer.' },
            { q: 'Pour quoi Yayoi Kusama est-elle célèbre ?', opts: ['Ses peintures à l\'huile classiques', 'Ses Infinity Rooms aux miroirs et points lumineux', 'Ses sculptures en marbre', 'Ses gravures sur bois'], correct: 1, explanation: 'Kusama est célèbre pour ses Infinity Rooms, des pièces de miroirs et de lumières créant l\'illusion d\'un espace infini.' },
            { q: 'Que signifie « site-specific » pour une installation ?', opts: ['Qu\'elle est permanente', 'Qu\'elle est conçue spécifiquement pour un lieu donné', 'Qu\'elle est accessible en ligne', 'Qu\'elle est très grande'], correct: 1, explanation: 'Une œuvre site-specific est conçue spécifiquement pour un lieu donné, dont elle exploite les caractéristiques architecturales et spatiales.' }
          ],
          definitions: [
            { term: 'Installation', def: 'Forme d\'art contemporain transformant un espace entier en une œuvre immersive utilisant divers médiums (sculpture, vidéo, son, lumière).' },
            { term: 'Site-specific', def: 'Se dit d\'une œuvre conçue spécifiquement pour un lieu donné, dont elle intègre les caractéristiques dans sa conception.' },
            { term: 'Art immersif', def: 'Art qui plonge le spectateur dans un environnement sensoriel total, engageant la vue, l\'ouïe, parfois le toucher et l\'odorat.' },
            { term: 'Happening', def: 'Événement artistique participatif et éphémère, ancêtre de l\'installation et de la performance, développé par Allan Kaprow.' },
            { term: 'Art interactif', def: 'Art qui intègre la participation active du spectateur comme composante essentielle de l\'œuvre.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Christo et Jeanne-Claude autofinançaient leurs projets monumentaux (parfois plusieurs dizaines de millions de dollars) par la vente de dessins préparatoires.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'The Weather Project d\'Eliasson à la Tate Modern (2003) a attiré plus de 2 millions de visiteurs en 6 mois.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Installation = espace transformé + spectateur actif + multiples sens. C\'est l\'art total du XXIe siècle.' }
          ]
        },
        {
          slug: 'art-numerique',
          title: 'L\'art numérique',
          description: 'Découvrez l\'art numérique, des premières œuvres algorithmiques aux NFT.',
          intro: 'L\'art numérique utilise les technologies informatiques comme outil de création, de diffusion ou de conceptualisation. Des premières images générées par ordinateur dans les années 1960 aux NFT (jetons non fongibles) et à l\'intelligence artificielle, l\'art numérique questionne la nature de l\'image, de l\'originalité et de la création à l\'ère technologique. Il représente l\'une des frontières les plus actives de la création artistique contemporaine.',
          introHighlight: 'L\'art numérique pose des questions inédites : une image générée par un algorithme est-elle une œuvre d\'art ? Qui est l\'auteur : le programmeur ou la machine ?',
          intro2: '',
          sections: [
            {
              title: 'Les pionniers de l\'art numérique',
              paragraphs: [
                'Les premières œuvres d\'art réalisées par ordinateur apparaissent dans les années 1960. Vera Molnár, artiste hongroise installée à Paris, commence dès 1968 à utiliser l\'ordinateur pour générer des compositions géométriques systématiques, explorant les variations infinies de formes simples. Elle est considérée comme une pionnière de l\'art algorithmique.',
                'Harold Cohen développe AARON (1973-2016), l\'un des premiers programmes autonomes de création artistique. Ce logiciel d\'intelligence artificielle produit des dessins et des peintures selon des règles définies par l\'artiste, mais avec une part d\'autonomie dans les choix formels. Le travail de Cohen anticipe les débats actuels sur l\'art généré par IA.',
                'Nam June Paik (1932-2006), artiste coréen, est le père de l\'art vidéo. Ses installations de moniteurs empilés, détournés et manipulés électroniquement explorent les possibilités artistiques de la télévision et de la vidéo. Son œuvre prophétique anticipe notre monde saturé d\'écrans et d\'images numériques.'
              ],
              highlight: 'Vera Molnár utilisait l\'ordinateur pour créer de l\'art dès 1968, bien avant l\'apparition des logiciels graphiques grand public.'
            },
            {
              title: 'Art génératif et art interactif numérique',
              paragraphs: [
                'L\'art génératif utilise des algorithmes, des systèmes de règles ou des processus autonomes pour produire des œuvres. L\'artiste définit les paramètres et les règles du système, mais le résultat final échappe en partie à son contrôle. Casey Reas et Ben Fry, créateurs du langage Processing (2001), ont démocratisé la programmation créative et l\'art génératif.',
                'Les œuvres d\'art interactif numérique utilisent des capteurs, des webcams et des logiciels pour réagir à la présence et aux actions des spectateurs. L\'artiste français Miguel Chevalier crée des installations numériques monumentales projetées sur des bâtiments historiques, mêlant patrimoine architectural et création numérique.',
                'Le net art (art en ligne) utilise Internet comme médium et comme espace d\'exposition. Des artistes comme JODI, Olia Lialina et Rafael Rozendaal créent des œuvres accessibles uniquement en ligne, questionnant la matérialité de l\'art et l\'institution muséale. Le net art pose la question de la conservation des œuvres numériques, menacées par l\'obsolescence technologique.'
              ],
              highlight: 'L\'art génératif introduit le hasard contrôlé : l\'artiste définit les règles, mais chaque exécution du programme produit un résultat différent.'
            },
            {
              title: 'NFT, IA et avenir de l\'art numérique',
              paragraphs: [
                'L\'apparition des NFT (Non-Fungible Tokens) en 2021 a bouleversé le marché de l\'art numérique en permettant de certifier la propriété et l\'authenticité d\'œuvres numériques sur une blockchain. La vente du collage numérique Everydays: The First 5000 Days de Beeple pour 69 millions de dollars chez Christie\'s a attiré l\'attention mondiale sur l\'art numérique, tout en suscitant des débats intenses sur la spéculation et l\'impact environnemental.',
                'L\'intelligence artificielle générative (Midjourney, DALL-E, Stable Diffusion) soulève des questions fondamentales sur la nature de la création artistique. Ces outils peuvent produire des images d\'une qualité technique impressionnante à partir de descriptions textuelles, mais la question de l\'auteur, de l\'originalité et du droit d\'auteur reste entièrement ouverte.',
                'L\'art numérique est aujourd\'hui un domaine en pleine expansion qui englobe la réalité virtuelle, la réalité augmentée, le bioart, la robotique artistique et l\'art spatial. Des institutions comme le ZKM de Karlsruhe, le Ars Electronica de Linz et le teamLab Borderless de Tokyo sont dédiés à ces nouvelles formes de création qui redéfinissent continuellement les frontières de l\'art.'
              ],
              highlight: 'L\'IA générative pose la question la plus radicale depuis Duchamp : si une machine peut créer des images, qu\'est-ce qui définit l\'artiste ?'
            }
          ],
          quiz: [
            { q: 'Qui est considérée comme pionnière de l\'art algorithmique ?', opts: ['Yayoi Kusama', 'Marina Abramović', 'Vera Molnár', 'Cindy Sherman'], correct: 2, explanation: 'Vera Molnár utilise l\'ordinateur pour créer des compositions géométriques depuis 1968, ce qui en fait une pionnière de l\'art algorithmique.' },
            { q: 'Qu\'est-ce qu\'un NFT dans le contexte de l\'art numérique ?', opts: ['Un format d\'image', 'Un certificat de propriété numérique sur blockchain', 'Un logiciel de création', 'Un type de moniteur'], correct: 1, explanation: 'Un NFT (Non-Fungible Token) est un jeton unique sur une blockchain certifiant la propriété et l\'authenticité d\'une œuvre numérique.' },
            { q: 'Qui est considéré comme le père de l\'art vidéo ?', opts: ['Andy Warhol', 'Nam June Paik', 'Bill Viola', 'Bruce Nauman'], correct: 1, explanation: 'Nam June Paik est considéré comme le père de l\'art vidéo, avec ses installations de moniteurs détournés et manipulés depuis les années 1960.' }
          ],
          definitions: [
            { term: 'Art numérique', def: 'Art utilisant les technologies informatiques (logiciels, algorithmes, réseaux) comme outil de création, de diffusion ou de conceptualisation.' },
            { term: 'Art génératif', def: 'Art utilisant des algorithmes ou des systèmes autonomes pour produire des œuvres dont le résultat échappe partiellement au contrôle de l\'artiste.' },
            { term: 'NFT', def: 'Non-Fungible Token : jeton numérique unique enregistré sur une blockchain, utilisé pour certifier la propriété d\'une œuvre d\'art numérique.' },
            { term: 'Net art', def: 'Art créé pour et diffusé sur Internet, utilisant le réseau comme médium et espace d\'exposition.' },
            { term: 'Art vidéo', def: 'Forme artistique utilisant la vidéo comme médium principal, depuis les premières expériences de Nam June Paik dans les années 1960.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Le collage numérique Everydays de Beeple s\'est vendu 69 millions de dollars en NFT en mars 2021, faisant de lui le troisième artiste vivant le plus cher.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Vera Molnár a commencé à utiliser l\'ordinateur pour créer de l\'art en 1968, soit 16 ans avant le premier Macintosh.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Art numérique : Paik (vidéo, 1960s), Molnár (algorithmique, 1968), net art (1990s), NFT (2021), IA générative (2022+).' }
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    //  HUB 6 — Analyse d'œuvres majeures
    // ═══════════════════════════════════════════════════════════
    {
      slug: 'analyse-oeuvres',
      title: 'Analyse d\'œuvres majeures',
      description: 'Apprenez à analyser cinq chefs-d\'œuvre qui ont marqué l\'histoire de l\'art mondial.',
      introText: 'L\'analyse d\'une œuvre d\'art mobilise des compétences d\'observation, de contextualisation historique et d\'interprétation symbolique. Ce hub propose l\'étude approfondie de cinq chefs-d\'œuvre majeurs, choisis pour leur importance historique, leur richesse formelle et leur influence durable. Chaque analyse détaille le contexte de création, la composition, la technique et la signification de l\'œuvre.',
      introHighlight: 'Apprendre à regarder une œuvre d\'art, c\'est apprendre à lire un langage visuel aussi riche et complexe qu\'un texte littéraire.',
      lessons: [
        {
          slug: 'la-joconde',
          title: 'La Joconde',
          description: 'Analyse approfondie du tableau le plus célèbre du monde, peint par Léonard de Vinci.',
          intro: 'La Joconde (Mona Lisa), peinte par Léonard de Vinci entre 1503 et 1519, est le tableau le plus célèbre, le plus reproduit et le plus visité au monde. Conservée au musée du Louvre à Paris, cette huile sur panneau de peuplier de dimensions modestes (77 × 53 cm) fascine depuis cinq siècles par le mystère du sourire de son modèle, la virtuosité de sa technique et l\'énigme de son identité.',
          introHighlight: 'La Joconde doit une partie de sa célébrité à son vol au Louvre en 1911, qui a fait la une des journaux du monde entier et en a fait une icône universelle.',
          intro2: '',
          sections: [
            {
              title: 'Contexte et identification du modèle',
              paragraphs: [
                'Selon Giorgio Vasari, biographe des artistes de la Renaissance, le modèle est Lisa Gherardini, épouse du riche marchand florentin Francesco del Giocondo, d\'où le nom italien du tableau : La Gioconda. Léonard aurait commencé le portrait vers 1503 à Florence, mais ne s\'en est jamais séparé, l\'emportant avec lui à Milan, à Rome puis en France, où il s\'installe chez François Ier en 1516.',
                'D\'autres hypothèses ont été avancées sur l\'identité du modèle : un autoportrait déguisé de Léonard, une maîtresse de Julien de Médicis, ou même une représentation idéalisée de la féminité. Les recherches récentes confirment cependant l\'identification de Vasari avec Lisa Gherardini.',
                'Le tableau est acquis par François Ier, probablement après la mort de Léonard en 1519, pour la somme considérable de 4 000 écus d\'or. Il rejoint les collections royales et sera exposé dans différentes résidences avant d\'intégrer le Louvre après la Révolution française.'
              ],
              highlight: 'La Joconde n\'a jamais été livrée à son commanditaire : Léonard l\'a gardée avec lui pendant plus de 16 ans, la perfectionnant sans cesse.'
            },
            {
              title: 'Analyse technique et stylistique',
              paragraphs: [
                'La Joconde illustre magistralement la technique du sfumato de Léonard. Les contours du visage, des mains et du paysage sont estompés par la superposition de dizaines de glacis translucides extrêmement fins, créant des transitions imperceptibles entre ombre et lumière. Des analyses scientifiques ont révélé jusqu\'à 30 couches de glacis d\'une épaisseur totale de seulement 40 micromètres.',
                'Le sourire de la Joconde est le résultat d\'un effet optique lié au sfumato : les commissures des lèvres se fondent dans les ombres du visage de manière ambiguë. Selon l\'endroit où le regard se pose, le sourire semble apparaître ou disparaître. Des études neuroscientifiques ont montré que cette ambiguïté active simultanément les zones du cerveau liées à la perception de la joie et de la neutralité.',
                'Le paysage à l\'arrière-plan, composé de rochers, de lacs et de sentiers sinueux, est traité en perspective atmosphérique : plus les éléments sont éloignés, plus ils deviennent bleus et estompés. Ce paysage fantastique, sans lien avec un lieu réel identifiable, crée un contraste poétique avec le réalisme du portrait.'
              ],
              highlight: 'Le sourire de la Joconde est un chef-d\'œuvre de perception : il change selon l\'angle de vision du spectateur, grâce à la technique du sfumato.'
            },
            {
              title: 'Postérité et phénomène culturel',
              paragraphs: [
                'Le vol de La Joconde le 21 août 1911 par Vincenzo Peruggia, un vitrier italien travaillant au Louvre, a transformé le tableau en icône mondiale. Pendant deux ans, la disparition fait la une des journaux internationaux. Le tableau est retrouvé en 1913 à Florence, quand Peruggia tente de le vendre. Le vol a paradoxalement fait de La Joconde le tableau le plus célèbre au monde.',
                'Au XXe siècle, La Joconde est devenue un objet de détournement artistique. Marcel Duchamp lui ajoute moustache et barbiche dans L.H.O.O.Q. (1919), Fernand Léger la place dans un trousseau de clés, et Andy Warhol en fait une sérigraphie en série. Ces appropriations témoignent de son statut d\'icône culturelle universelle.',
                'Aujourd\'hui, La Joconde attire environ 10 millions de visiteurs par an au Louvre, protégée par une vitre blindée depuis une attaque à l\'acide en 1956. Sa valeur d\'assurance, estimée à plus de 800 millions de dollars, en fait le tableau le plus cher du monde. Elle est devenue un symbole qui dépasse largement le cadre de l\'histoire de l\'art.'
              ],
              highlight: 'La Joconde est le seul tableau à avoir sa propre salle au Louvre et à être protégé par une vitre blindée climatisée et un dispositif antisismique.'
            }
          ],
          quiz: [
            { q: 'Qui est le modèle présumé de La Joconde ?', opts: ['Une princesse florentine', 'Lisa Gherardini, épouse d\'un marchand', 'La mère de Léonard', 'Une danseuse de la cour'], correct: 1, explanation: 'Selon Vasari, le modèle est Lisa Gherardini, épouse du marchand florentin Francesco del Giocondo, d\'où le nom La Gioconda.' },
            { q: 'Quel événement a fait de La Joconde le tableau le plus célèbre du monde ?', opts: ['Son exposition au Louvre', 'Son vol en 1911', 'Sa restauration en 1956', 'Son achat par François Ier'], correct: 1, explanation: 'Le vol de La Joconde en 1911 par Vincenzo Peruggia a fait la une des journaux mondiaux pendant deux ans, la rendant mondialement célèbre.' },
            { q: 'Quelle technique crée l\'effet mystérieux du sourire de la Joconde ?', opts: ['Le trompe-l\'œil', 'Le sfumato', 'Le clair-obscur', 'La perspective linéaire'], correct: 1, explanation: 'Le sfumato estompe les commissures des lèvres dans les ombres du visage, créant une ambiguïté perceptive qui fait « apparaître et disparaître » le sourire.' }
          ],
          definitions: [
            { term: 'Sfumato', def: 'Technique de Léonard estompant les contours par superposition de glacis translucides, créant des transitions imperceptibles entre ombre et lumière.' },
            { term: 'Huile sur panneau', def: 'Technique de peinture à l\'huile sur un support en bois (ici peuplier), courante avant l\'adoption généralisée de la toile.' },
            { term: 'Perspective atmosphérique', def: 'Rendu de la profondeur par l\'atténuation progressive des couleurs et des contours vers le lointain.' },
            { term: 'Glacis', def: 'Couche de peinture très fine et translucide appliquée sur une couche sèche pour modifier subtilement la couleur.' },
            { term: 'Iconographie', def: 'Étude des sujets, des symboles et des thèmes représentés dans les œuvres d\'art.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Pablo Picasso a été brièvement soupçonné du vol de La Joconde en 1911. Il a été innocenté, mais l\'épisode l\'a traumatisé.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La Joconde mesure seulement 77 × 53 cm, mais elle est vue par environ 30 000 visiteurs par jour au Louvre.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'La Joconde : 1503 (début) + sfumato (technique) + vol de 1911 (célébrité) = le tableau le plus célèbre du monde.' }
          ]
        },
        {
          slug: 'nuit-etoilee',
          title: 'La Nuit étoilée',
          description: 'Analyse de la vision cosmique de Van Gogh, peinte depuis sa chambre d\'asile.',
          intro: 'La Nuit étoilée, peinte par Vincent van Gogh en juin 1889 depuis sa chambre de l\'asile de Saint-Rémy-de-Provence, est l\'une des œuvres les plus reconnaissables de l\'histoire de l\'art. Ce paysage nocturne visionnaire, avec ses étoiles tourbillonnantes, son cyprès flamboyant et son village endormi, exprime la vision intérieure d\'un artiste au sommet de son génie créatif.',
          introHighlight: 'La Nuit étoilée n\'est pas une observation astronomique mais une vision intérieure : Van Gogh peint le ciel tel qu\'il le ressent, non tel qu\'il le voit.',
          intro2: '',
          sections: [
            {
              title: 'Contexte de création',
              paragraphs: [
                'Van Gogh entre volontairement à l\'asile de Saint-Paul-de-Mausole à Saint-Rémy-de-Provence le 8 mai 1889, après sa crise de décembre 1888 à Arles. Malgré ses crises récurrentes, il peint avec une intensité extraordinaire durant son séjour d\'un an, produisant environ 150 peintures dont certaines de ses œuvres les plus célèbres.',
                'La Nuit étoilée est peinte en juin 1889 depuis la fenêtre de sa chambre orientée vers l\'est. Cependant, le paysage n\'est pas fidèle à la réalité : le village avec son clocher évoque davantage un village néerlandais qu\'un bourg provençal, et la disposition des étoiles ne correspond à aucune configuration astronomique précise. Van Gogh compose une vision plutôt qu\'une description.',
                'Dans une lettre à son frère Théo, Van Gogh écrit : « Ce matin, j\'ai vu le paysage de ma fenêtre longtemps avant le lever du soleil, avec rien que l\'étoile du matin, qui paraissait très grande. » Cette observation nourrit son tableau, mais la vision finale dépasse largement l\'observation naturaliste pour atteindre une dimension cosmique.'
              ],
              highlight: 'Van Gogh a peint 150 tableaux en un an à l\'asile de Saint-Rémy, dont plusieurs de ses chefs-d\'œuvre les plus célèbres.'
            },
            {
              title: 'Composition et technique',
              paragraphs: [
                'La composition de La Nuit étoilée oppose le ciel tumultueux (les deux tiers supérieurs) au village paisible (le tiers inférieur). Un cyprès gigantesque, à gauche, s\'élance comme une flamme sombre reliant la terre au ciel. Les collines ondulantes à l\'horizon forment une ligne de transition entre les deux mondes.',
                'Le ciel est animé de spirales concentriques autour des étoiles et de la lune, créant un mouvement tourbillonnant d\'une énergie cosmique. Les touches de peinture, épaisses et directionnelles, suivent les courbes du mouvement dans le ciel et les formes des collines. L\'empâtement est considérable : la peinture forme parfois des reliefs de plusieurs millimètres.',
                'La palette juxtapose des bleus profonds (cobalt, outremer), des jaunes lumineux (chrome, cadmium) et des verts sombres dans un contraste de complémentaires d\'une intensité remarquable. Van Gogh applique les théories de la couleur qu\'il a étudiées, notamment le principe de contraste simultané de Chevreul, mais avec une liberté expressive qui transcende toute théorie.'
              ],
              highlight: 'Les spirales du ciel de La Nuit étoilée correspondent étonnamment aux schémas de turbulence décrits par les équations de la physique des fluides.'
            },
            {
              title: 'Interprétation et postérité',
              paragraphs: [
                'Les interprétations de La Nuit étoilée sont multiples. Certains y voient l\'expression de la maladie mentale de Van Gogh, les spirales traduisant son angoisse et son vertige existentiel. D\'autres y lisent une quête spirituelle : Van Gogh, fils de pasteur, voyait dans les étoiles un symbole de l\'au-delà et de l\'espérance.',
                'Van Gogh lui-même avait des sentiments ambivalents envers ce tableau. Dans une lettre à son frère, il le qualifie d\'« exagéré » et semble lui préférer d\'autres œuvres de la même période. Il ne pouvait pas imaginer que cette toile deviendrait l\'une des plus célèbres de l\'histoire de l\'art.',
                'Conservée au Museum of Modern Art (MoMA) de New York depuis 1941, La Nuit étoilée est devenue une icône de la culture populaire, reproduite sur d\'innombrables objets. Son influence s\'étend de l\'expressionnisme au street art contemporain, et elle reste l\'une des œuvres d\'art les plus citées, parodiées et réinterprétées au monde.'
              ],
              highlight: 'Van Gogh considérait La Nuit étoilée comme un tableau « exagéré », sans imaginer qu\'il deviendrait l\'une des images les plus célèbres de l\'art mondial.'
            }
          ],
          quiz: [
            { q: 'Où Van Gogh a-t-il peint La Nuit étoilée ?', opts: ['À Arles', 'À l\'asile de Saint-Rémy-de-Provence', 'À Auvers-sur-Oise', 'À Paris'], correct: 1, explanation: 'Van Gogh a peint La Nuit étoilée en juin 1889 depuis la fenêtre de sa chambre à l\'asile de Saint-Paul-de-Mausole à Saint-Rémy-de-Provence.' },
            { q: 'Quel élément relie la terre au ciel dans la composition ?', opts: ['Un clocher d\'église', 'Un cyprès', 'Une montagne', 'Un rayon de lune'], correct: 1, explanation: 'Le cyprès gigantesque à gauche du tableau s\'élance comme une flamme sombre, créant un lien visuel entre le village terrestre et le ciel cosmique.' },
            { q: 'Dans quel musée La Nuit étoilée est-elle conservée ?', opts: ['Le Louvre', 'Le musée d\'Orsay', 'Le MoMA de New York', 'Le Rijksmuseum'], correct: 2, explanation: 'La Nuit étoilée est conservée au Museum of Modern Art (MoMA) de New York depuis 1941.' }
          ],
          definitions: [
            { term: 'Empâtement', def: 'Application épaisse de peinture créant un relief sur la surface du tableau, technique caractéristique de Van Gogh.' },
            { term: 'Contraste simultané', def: 'Principe optique selon lequel des couleurs complémentaires juxtaposées s\'intensifient mutuellement.' },
            { term: 'Expressionnisme', def: 'Courant artistique privilégiant l\'expression des émotions intérieures sur la représentation fidèle du réel.' },
            { term: 'Complémentaires', def: 'Paire de couleurs opposées sur le cercle chromatique (bleu/orange, jaune/violet, rouge/vert) qui s\'intensifient par juxtaposition.' },
            { term: 'Touche directionnelle', def: 'Coup de pinceau dont l\'orientation suit la forme de l\'objet représenté, créant un effet de mouvement et de rythme.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'En 2004, des physiciens ont démontré que les spirales de La Nuit étoilée correspondent aux modèles mathématiques de turbulence de Kolmogorov.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'La Nuit étoilée mesure 73,7 × 92,1 cm et a été peinte en une seule journée de juin 1889.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'La Nuit étoilée : cyprès (terre) + spirales (ciel) + village (humanité) = vision cosmique de Van Gogh.' }
          ]
        },
        {
          slug: 'guernica',
          title: 'Guernica',
          description: 'Analyse du chef-d\'œuvre de Picasso dénonçant les horreurs de la guerre.',
          intro: 'Guernica, peint par Pablo Picasso en 1937, est l\'une des dénonciations les plus puissantes de la violence guerrière jamais réalisées. Commandé par le gouvernement républicain espagnol pour le pavillon espagnol de l\'Exposition universelle de Paris, ce monumental tableau en noir, blanc et gris dénonce le bombardement de la ville basque de Guernica par l\'aviation nazie le 26 avril 1937.',
          introHighlight: 'Guernica transcende l\'événement historique pour devenir un symbole universel de la barbarie de la guerre et de la souffrance des civils innocents.',
          intro2: '',
          sections: [
            {
              title: 'Le bombardement et la commande',
              paragraphs: [
                'Le 26 avril 1937, en pleine guerre civile espagnole, la Légion Condor allemande et l\'aviation fasciste italienne bombardent la ville basque de Guernica pendant trois heures. Le bombardement, réalisé un jour de marché, vise délibérément la population civile. Le bilan est terrible : entre 150 et 300 morts et la destruction quasi totale de la ville. C\'est l\'un des premiers bombardements aériens massifs de civils de l\'histoire.',
                'Picasso, qui vivait à Paris, apprend la nouvelle par les journaux. Profondément choqué, il abandonne le projet initial qu\'il avait conçu pour le pavillon espagnol et commence Guernica le 1er mai 1937. Il achève cette toile monumentale (349 × 777 cm) en un mois seulement, dans un état de fureur créatrice documenté par des photographies de Dora Maar.',
                'Le tableau est exposé au pavillon espagnol de l\'Exposition universelle de Paris en juin 1937. Son impact est considérable, même si certains critiques le jugent trop sombre et incompréhensible. Guernica voyage ensuite dans plusieurs pays pour collecter des fonds pour la cause républicaine espagnole.'
              ],
              highlight: 'Picasso a peint Guernica en un mois, entre le 1er mai et début juin 1937, dans un état de concentration intense documenté par les photographies de Dora Maar.'
            },
            {
              title: 'Composition et symbolisme',
              paragraphs: [
                'Guernica est peint exclusivement en noir, blanc et gris, évoquant à la fois les photographies de presse et le deuil. La composition s\'organise en triangle : la lampe à huile au sommet illumine une scène de chaos où se mêlent humains et animaux dans la souffrance. Les figures principales sont un taureau, un cheval agonisant, une mère portant son enfant mort, un soldat démembré et des femmes hurlant.',
                'Le taureau, figure récurrente chez Picasso, symbolise la brutalité aveugle. Le cheval blessé, la bouche ouverte en un cri silencieux, représente le peuple innocent. La mère à l\'enfant mort, figure de Pietà inversée, est l\'image la plus poignante de la souffrance civile. La lampe à huile et l\'ampoule électrique symbolisent respectivement l\'espérance et l\'œil implacable de la vérité.',
                'Les formes fragmentées, héritées du cubisme, décomposent les corps et les objets en facettes anguleuses qui expriment la violence de la destruction. Le traitement géométrique des figures, loin de les déshumaniser, renforce paradoxalement leur impact émotionnel en exprimant la dislocation physique et psychologique causée par la guerre.'
              ],
              highlight: 'Le choix du noir et blanc par Picasso est doublement symbolique : il évoque les photos de presse et transforme le tableau en un cri universel, dépouillé de toute séduction colorée.'
            },
            {
              title: 'Postérité et signification politique',
              paragraphs: [
                'Après l\'Exposition universelle, Guernica est confié au Museum of Modern Art (MoMA) de New York, Picasso refusant qu\'il retourne en Espagne tant que le pays serait sous la dictature de Franco. Le tableau ne regagne l\'Espagne qu\'en 1981, six ans après la mort de Franco et après la restauration de la démocratie. Il est aujourd\'hui exposé au musée Reina Sofía à Madrid.',
                'Guernica est devenu le symbole universel de la lutte contre la barbarie et pour la paix. Une reproduction tapisserie est accrochée au siège des Nations Unies à New York. En 2003, lors de la présentation par Colin Powell des arguments justifiant l\'intervention en Irak, la tapisserie a été recouverte d\'un rideau bleu, provoquant un scandale qui a rappelé la puissance subversive de l\'œuvre.',
                'L\'influence de Guernica dépasse le monde de l\'art pour s\'étendre à la culture politique mondiale. Il est devenu l\'image de référence pour dénoncer les violences de guerre, du Vietnam à la Syrie. Sa force réside dans sa capacité à transformer un événement historique précis en une dénonciation universelle et intemporelle de la guerre.'
              ],
              highlight: 'Picasso a déclaré que Guernica n\'irait en Espagne que lorsque la démocratie y serait rétablie. Le tableau a attendu 44 ans avant de rejoindre Madrid.'
            }
          ],
          quiz: [
            { q: 'Quel événement historique a inspiré Guernica ?', opts: ['La Première Guerre mondiale', 'Le bombardement de Guernica en 1937', 'La Seconde Guerre mondiale', 'La guerre du Vietnam'], correct: 1, explanation: 'Guernica a été peint en réaction au bombardement de la ville basque de Guernica par l\'aviation nazie le 26 avril 1937.' },
            { q: 'Dans quelles couleurs Guernica est-il peint ?', opts: ['Couleurs vives', 'Noir, blanc et gris', 'Rouge et noir', 'Bleu et or'], correct: 1, explanation: 'Guernica est peint exclusivement en noir, blanc et gris, évoquant les photographies de presse et le deuil.' },
            { q: 'Dans quel musée Guernica est-il exposé aujourd\'hui ?', opts: ['Le Louvre', 'Le MoMA', 'Le Reina Sofía à Madrid', 'Le Prado'], correct: 2, explanation: 'Guernica est exposé au musée Reina Sofía à Madrid depuis 1992, après avoir été au MoMA de New York pendant 44 ans.' }
          ],
          definitions: [
            { term: 'Guernica', def: 'Peinture monumentale de Picasso (1937), symbole universel de la dénonciation de la guerre et de la souffrance des civils.' },
            { term: 'Guerre civile espagnole', def: 'Conflit armé (1936-1939) entre les républicains et les nationalistes du général Franco, qui a fait plus de 500 000 morts.' },
            { term: 'Légion Condor', def: 'Unité d\'aviation allemande nazie envoyée en Espagne pour soutenir les nationalistes de Franco pendant la guerre civile.' },
            { term: 'Exposition universelle', def: 'Grande manifestation internationale présentant les réalisations industrielles, artistiques et culturelles des nations.' },
            { term: 'Cubisme', def: 'Mouvement artistique décomposant les formes en facettes géométriques vues simultanément sous plusieurs angles.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Quand un officier nazi aurait demandé à Picasso devant une photo de Guernica : « C\'est vous qui avez fait ça ? », Picasso aurait répondu : « Non, c\'est vous. »' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Guernica mesure 349 × 777 cm (3,5 × 7,8 mètres), soit la taille d\'un mur entier. Picasso l\'a peint en un mois.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Guernica : taureau (brutalité) + cheval (peuple) + mère à l\'enfant (souffrance) + lampe (vérité) = cri universel contre la guerre.' }
          ]
        },
        {
          slug: 'liberte-guidant-peuple',
          title: 'La Liberté guidant le peuple',
          description: 'Analyse du tableau de Delacroix, icône de la révolution et de la République française.',
          intro: 'La Liberté guidant le peuple, peint par Eugène Delacroix en 1830, est l\'une des images politiques les plus puissantes de l\'art occidental. Inspiré par les Trois Glorieuses (27-29 juillet 1830), cette insurrection parisienne qui renverse Charles X, le tableau mêle allégorie et reportage dans une composition qui est devenue le symbole de la République française et de la lutte pour la liberté.',
          introHighlight: 'La Liberté guidant le peuple est le premier grand tableau à mêler une allégorie classique (la Liberté) à des personnages contemporains réalistes sur une barricade.',
          intro2: '',
          sections: [
            {
              title: 'Contexte historique : les Trois Glorieuses',
              paragraphs: [
                'En juillet 1830, le roi Charles X promulgue quatre ordonnances restreignant les libertés de la presse et le droit de vote. Le peuple de Paris se soulève spontanément. En trois jours de combats (les « Trois Glorieuses », 27-29 juillet), les insurgés dressent des barricades et prennent le contrôle de la ville. Charles X abdique et est remplacé par Louis-Philippe, le « roi-citoyen ».',
                'Delacroix, qui n\'a probablement pas combattu sur les barricades mais a été témoin des événements, écrit à son frère : « Si je n\'ai pas vaincu pour la patrie, au moins peindrai-je pour elle. » Il commence le tableau en septembre 1830 et le termine en trois mois, dans un élan de ferveur patriotique.',
                'Le tableau est exposé au Salon de 1831, où il reçoit un accueil mitigé. Les critiques lui reprochent le réalisme cru des cadavres et la nudité de la figure allégorique. Le gouvernement l\'achète mais le juge trop subversif pour l\'exposer en permanence. Le tableau connaît une histoire mouvementée avant d\'entrer définitivement au Louvre en 1874.'
              ],
              highlight: 'Delacroix a peint La Liberté guidant le peuple en trois mois, porté par l\'émotion des journées révolutionnaires de juillet 1830.'
            },
            {
              title: 'Composition et analyse des figures',
              paragraphs: [
                'La composition s\'organise en pyramide, culminant avec la figure de la Liberté. Cette femme du peuple, poitrine dénudée, brandit le drapeau tricolore de la main droite et un fusil à baïonnette de la main gauche. Elle porte le bonnet phrygien, symbole de la liberté depuis la Révolution de 1789. Son visage combine réalisme (traits populaires, aisselle velue) et idéalisation classique (profil antique, chair lumineuse).',
                'Autour de la Liberté, Delacroix place des personnages représentant toutes les classes sociales unies dans la lutte. À droite, un bourgeois en chapeau haut-de-forme tient un fusil de chasse. À gauche, un ouvrier en chemise brandit un sabre. Au premier plan, un gamin de Paris (préfigurant le Gavroche de Victor Hugo) brandit des pistolets. Des cadavres au premier plan rappellent le prix de la liberté.',
                'L\'arrière-plan montre les tours de Notre-Dame dans la fumée des combats, ancrant la scène dans la topographie parisienne. Le drapeau tricolore, point culminant de la composition, se détache sur un ciel de fumée où percent des trouées de lumière. Les couleurs chaudes de la poudre et du sang s\'opposent aux bleus froids de la fumée dans une palette romantique.'
              ],
              highlight: 'La figure de la Liberté est unique dans l\'art : ni déesse idéalisée ni femme réaliste, elle incarne la fusion du peuple et de l\'idéal républicain.'
            },
            {
              title: 'Postérité et symbole national',
              paragraphs: [
                'La Liberté guidant le peuple est devenue un symbole de la République française. Elle a figuré sur le timbre-poste français et sur les anciens billets de 100 francs. La figure de Marianne, allégorie de la République, lui est directement apparentée. Le tableau continue d\'inspirer les mouvements de protestation dans le monde entier.',
                'L\'influence de cette œuvre sur la culture populaire est immense. La pose de la Liberté a été reprise dans la Statue de la Liberté d\'Auguste Bartholdi (1886), offerte par la France aux États-Unis. Le tableau a été parodié et cité dans d\'innombrables contextes, de la publicité aux couvertures de magazines, en passant par l\'album Viva la Vida de Coldplay.',
                'Conservée au Louvre, l\'œuvre a été vandalisée en 2013 par une visiteuse qui l\'a marquée au feutre. Après restauration, elle est revenue dans la salle des peintures françaises du XIXe siècle. Elle reste l\'un des tableaux les plus populaires du musée et l\'image la plus iconique de la révolution et de la liberté dans l\'art occidental.'
              ],
              highlight: 'La Liberté guidant le peuple a directement inspiré la Statue de la Liberté, offerte par la France aux États-Unis en 1886.'
            }
          ],
          quiz: [
            { q: 'Quel événement historique a inspiré le tableau de Delacroix ?', opts: ['La Révolution de 1789', 'Les Trois Glorieuses de juillet 1830', 'La Commune de 1871', 'La Révolution de 1848'], correct: 1, explanation: 'Le tableau est inspiré par les Trois Glorieuses (27-29 juillet 1830), l\'insurrection parisienne qui renverse Charles X.' },
            { q: 'Que porte la figure de la Liberté sur la tête ?', opts: ['Une couronne de laurier', 'Un casque', 'Un bonnet phrygien', 'Un voile'], correct: 2, explanation: 'La Liberté porte le bonnet phrygien, symbole de liberté depuis la Révolution française de 1789.' },
            { q: 'Quel personnage littéraire le gamin du tableau préfigure-t-il ?', opts: ['Jean Valjean', 'Gavroche', 'Quasimodo', 'D\'Artagnan'], correct: 1, explanation: 'Le gamin aux pistolets préfigure le personnage de Gavroche dans Les Misérables de Victor Hugo, publié en 1862.' }
          ],
          definitions: [
            { term: 'Trois Glorieuses', def: 'Insurrection parisienne des 27, 28 et 29 juillet 1830, qui renverse le roi Charles X et porte Louis-Philippe au pouvoir.' },
            { term: 'Bonnet phrygien', def: 'Coiffe symbolisant la liberté depuis l\'Antiquité romaine, devenue emblème de la Révolution française et de la République.' },
            { term: 'Allégorie', def: 'Représentation d\'une idée abstraite (la liberté, la justice) sous la forme d\'une figure humaine ou d\'une scène.' },
            { term: 'Romantisme', def: 'Mouvement artistique du XIXe siècle privilégiant l\'émotion, l\'imagination et la liberté créatrice sur les règles classiques.' },
            { term: 'Barricade', def: 'Obstacle improvisé dressé dans la rue pendant une insurrection, symbole de la résistance populaire.' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'La Liberté guidant le peuple a été jugée trop subversive par tous les gouvernements français du XIXe siècle et n\'a été exposée en permanence qu\'à partir de 1874.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Le tableau mesure 260 × 325 cm et a été peint en seulement trois mois, de septembre à décembre 1830.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Delacroix mêle trois registres : allégorie (la Liberté), réalisme (les combattants) et romantisme (couleur, mouvement, émotion).' }
          ]
        },
        {
          slug: 'nympheas',
          title: 'Les Nymphéas',
          description: 'Analyse de l\'œuvre ultime de Monet, pont entre impressionnisme et abstraction.',
          intro: 'Les Nymphéas de Claude Monet constituent l\'un des cycles picturaux les plus ambitieux de l\'histoire de l\'art. Peints dans le jardin d\'eau de Giverny pendant les trente dernières années de la vie du peintre (1897-1926), ces quelque 250 tableaux représentent la surface de l\'eau, les nénuphars et les reflets du ciel et de la végétation. Les grands panneaux muraux installés à l\'Orangerie des Tuileries à Paris forment un ensemble immersif unique qui anticipe l\'art abstrait et l\'art environnemental.',
          introHighlight: 'Les Nymphéas abolissent la ligne d\'horizon : le ciel et la terre ne sont visibles que par leurs reflets dans l\'eau, créant un espace sans haut ni bas.',
          intro2: '',
          sections: [
            {
              title: 'Le jardin de Giverny, œuvre d\'art totale',
              paragraphs: [
                'Claude Monet s\'installe à Giverny, en Normandie, en 1883. Il consacre autant d\'énergie à la création de son jardin qu\'à sa peinture. En 1893, il acquiert un terrain adjacent et y crée un jardin d\'eau japonais avec un pont, des saules pleureurs, des bambous et surtout un bassin couvert de nénuphars. Ce jardin devient son motif exclusif à partir de 1900.',
                'Monet ne peint pas simplement son jardin : il le conçoit comme un motif pictural vivant. Il emploie six jardiniers pour entretenir les plantations et maintenir la surface de l\'eau dans un état optimal pour la peinture. Le jardin de Giverny est une œuvre d\'art en soi, un tableau vivant que l\'artiste modèle et peint simultanément.',
                'Les premières séries de Nymphéas (1897-1908) montrent encore le bassin dans son ensemble, avec le pont japonais et les berges. Progressivement, Monet resserre le cadrage sur la surface de l\'eau elle-même, éliminant tout repère spatial : les berges, l\'horizon et le ciel disparaissent. Ne reste que la surface de l\'eau, les nénuphars et les reflets.'
              ],
              highlight: 'Le jardin de Giverny est le seul « motif » que Monet ait lui-même créé de toutes pièces : il peint un tableau qu\'il a d\'abord planté.'
            },
            {
              title: 'Les Grandes Décorations de l\'Orangerie',
              paragraphs: [
                'En 1918, au lendemain de l\'armistice, Monet offre à l\'État français un ensemble de grands panneaux de Nymphéas comme monument de paix. Le projet, soutenu par son ami Georges Clemenceau, aboutit à l\'installation de huit panneaux dans deux salles ovales de l\'Orangerie des Tuileries à Paris, inaugurées en 1927, quelques mois après la mort de Monet.',
                'Les panneaux, mesurant environ 2 mètres de hauteur et jusqu\'à 17 mètres de longueur, forment un panorama continu qui enveloppe le spectateur dans un paysage aquatique à 360 degrés. L\'espace ovale des salles, conçu par Monet lui-même, crée une immersion totale dans l\'univers des nénuphars, anticipant de plusieurs décennies les installations immersives de l\'art contemporain.',
                'Monet peint ces grands panneaux malgré une cataracte qui altère gravement sa vision des couleurs. Opéré en 1923, il retravaille certains panneaux en corrigeant les teintes excessivement rouges causées par sa maladie. Cette lutte contre la cécité confère à l\'entreprise une dimension héroïque.'
              ],
              highlight: 'Les salles de l\'Orangerie constituent le premier environnement pictural immersif de l\'histoire de l\'art, précédant les installations contemporaines de plusieurs décennies.'
            },
            {
              title: 'De l\'impressionnisme à l\'abstraction',
              paragraphs: [
                'Les derniers Nymphéas de Monet abolissent les conventions de la peinture de paysage. En supprimant la ligne d\'horizon, le haut et le bas deviennent interchangeables. Les reflets du ciel dans l\'eau confondent espace réel et espace virtuel. La surface du tableau tend à se confondre avec la surface de l\'eau, dans une planéité qui annonce l\'abstraction.',
                'Les expressionnistes abstraits américains ont reconnu dans les Nymphéas un précurseur essentiel. Les grands formats, la planéité, l\'immersion du spectateur dans la couleur et l\'absence de point focal sont autant de caractéristiques que l\'on retrouve chez Jackson Pollock, Mark Rothko et Barnett Newman. Le critique Clement Greenberg a qualifié les Nymphéas de « proto-abstraction ».',
                'Longtemps négligés par la critique après la mort de Monet, les Nymphéas ont été redécouverts dans les années 1950-1960 par les artistes et les critiques de l\'expressionnisme abstrait. Aujourd\'hui, ils sont unanimement reconnus comme l\'une des réalisations les plus visionnaires de l\'histoire de l\'art, un pont entre l\'impressionnisme et l\'art moderne.'
              ],
              highlight: 'Les Nymphéas constituent le chaînon manquant entre l\'impressionnisme et l\'abstraction : Monet y atteint une modernité que ses contemporains n\'ont pas su reconnaître.'
            }
          ],
          quiz: [
            { q: 'Combien de tableaux de Nymphéas Monet a-t-il peints environ ?', opts: ['Une dizaine', 'Une cinquantaine', 'Environ 250', 'Plus de 500'], correct: 2, explanation: 'Monet a peint environ 250 tableaux de Nymphéas pendant les 30 dernières années de sa vie, de 1897 à 1926.' },
            { q: 'Où les Grandes Décorations des Nymphéas sont-elles exposées ?', opts: ['Au musée d\'Orsay', 'Au Louvre', 'À l\'Orangerie des Tuileries', 'Au musée Marmottan'], correct: 2, explanation: 'Les huit grands panneaux de Nymphéas sont exposés dans deux salles ovales de l\'Orangerie des Tuileries à Paris, selon le souhait de Monet.' },
            { q: 'Quel mouvement artistique les Nymphéas ont-ils influencé de manière décisive ?', opts: ['Le cubisme', 'Le surréalisme', 'L\'expressionnisme abstrait', 'Le pop art'], correct: 2, explanation: 'Les expressionnistes abstraits américains (Pollock, Rothko, Newman) ont reconnu dans les Nymphéas un précurseur essentiel de leur propre démarche.' }
          ],
          definitions: [
            { term: 'Nymphéas', def: 'Plantes aquatiques (nénuphars) flottant à la surface de l\'eau, sujet exclusif de Monet pendant 30 ans à Giverny.' },
            { term: 'Jardin d\'eau', def: 'Jardin aquatique créé par Monet à Giverny, avec un bassin de nénuphars, un pont japonais et des saules pleureurs.' },
            { term: 'Série', def: 'Suite de tableaux représentant le même sujet sous différentes conditions, technique développée par Monet.' },
            { term: 'All-over', def: 'Composition où le motif se répartit uniformément sur toute la surface du tableau, sans centre ni hiérarchie, anticipée par les Nymphéas.' },
            { term: 'Proto-abstraction', def: 'Terme qualifiant les œuvres figuratives qui anticipent l\'abstraction par leur traitement formel (planéité, absence de perspective).' }
          ],
          memos: [
            { front: '\uD83D\uDCA1 Le savais-tu ?', back: 'Monet employait six jardiniers à temps plein pour entretenir son jardin de Giverny, qu\'il considérait comme son plus beau chef-d\'œuvre.' },
            { front: '\uD83D\uDCCA Chiffre clé', back: 'Les panneaux de l\'Orangerie mesurent au total environ 100 mètres linéaires de peinture, dans deux salles ovales de 20 mètres de diamètre.' },
            { front: '\uD83C\uDFAF Astuce mémo', back: 'Les Nymphéas : impressionnisme (lumière) + proto-abstraction (planéité) + installation (immersion) = Monet visionnaire.' }
          ]
        }
      ]
    }
  ]
};
