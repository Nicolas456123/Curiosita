// Discipline definition: Mythologie & Religions
// 6 hubs, 30 lessons — all content in French

module.exports = {
  slug: 'mythologie',
  title: 'Mythologie & Religions',
  description: 'Explorez les grands récits mythologiques, les traditions religieuses du monde et les textes sacrés qui ont façonné les civilisations humaines.',
  icon: '🏛️',
  cat: 'Mythologie & Religions',
  themeSlug: 'lettres-langues',
  accent: '#c9a87a',
  accent2: '#dfc49e',
  accentDim: 'rgba(201,168,122,0.1)',
  accentHero: 'rgba(201,168,122,0.08)',
  introTitle: 'Qu\'est-ce que la mythologie ?',
  introText: 'La mythologie désigne l\'ensemble des récits sacrés et légendaires propres à une civilisation. Ces récits fondateurs tentent d\'expliquer l\'origine du monde, la nature des dieux et la place de l\'homme dans l\'univers. Les religions, quant à elles, organisent ces croyances en systèmes structurés de foi, de rituels et de règles morales qui guident la vie de milliards de personnes à travers le monde.',
  introHighlight: 'De l\'Olympe grec aux temples hindous, des cathédrales gothiques aux mosquées ottomanes, les mythes et les religions constituent le socle culturel de toute civilisation humaine.',
  articleLow: 'la',
  hubs: [
    {
      slug: 'mythologies-antiques',
      title: 'Mythologies antiques',
      description: 'Les grands mythes fondateurs des civilisations grecque, romaine, nordique, égyptienne et mésopotamienne.',
      introText: 'Les mythologies antiques constituent les premiers grands récits de l\'humanité. Elles tentent d\'expliquer l\'origine du cosmos, la nature des forces divines et le destin des mortels. De la Grèce à la Mésopotamie, ces traditions ont profondément influencé l\'art, la littérature et la pensée occidentale.',
      introHighlight: 'Les mythes antiques ne sont pas de simples contes : ils sont le miroir des valeurs, des peurs et des espoirs des sociétés qui les ont créés.',
      lessons: [
        {
          slug: 'mythologie-grecque',
          title: 'Mythologie grecque',
          description: 'Les dieux de l\'Olympe, les héros légendaires et les récits fondateurs de la Grèce antique.',
          intro: 'La mythologie grecque est l\'un des corpus mythologiques les plus riches et les plus influents de l\'histoire. Ses récits, transmis par des poètes comme Homère et Hésiode, mettent en scène des dieux capricieux, des héros courageux et des monstres terrifiants.',
          introHighlight: 'La mythologie grecque a posé les fondements de la littérature, du théâtre et de la philosophie occidentale, et ses archétypes continuent d\'irriguer la culture contemporaine.',
          sections: [
            {
              title: 'Les origines du monde',
              paragraphs: ['Selon la Théogonie d\'Hésiode, à l\'origine était le Chaos, un gouffre béant d\'où émergèrent Gaïa (la Terre), Tartare (les profondeurs) et Éros (l\'amour primordial). Gaïa engendra seule Ouranos (le Ciel), qui devint son époux. De leur union naquirent les douze Titans, les Cyclopes et les Hécatonchires.', 'Cronos, le plus jeune des Titans, renversa son père Ouranos en le mutilant avec une faucille. Il régna ensuite sur l\'âge d\'or, mais, craignant d\'être à son tour détrôné, il dévorait ses enfants à la naissance. Zeus, sauvé par sa mère Rhéa, le vainquit lors de la Titanomachie et devint le roi des dieux.'],
              highlight: 'La succession violente des générations divines — Ouranos, Cronos, Zeus — reflète la vision grecque d\'un cosmos en perpétuelle transformation.'
            },
            {
              title: 'Les dieux de l\'Olympe',
              paragraphs: ['Les douze Olympiens siègent au sommet du mont Olympe sous l\'autorité de Zeus. Parmi eux figurent Athéna, déesse de la sagesse et de la stratégie ; Apollon, dieu de la musique et de la prophétie ; Artémis, déesse de la chasse ; et Aphrodite, déesse de l\'amour.', 'Poséidon règne sur les mers, Hadès sur le monde souterrain. Héra, épouse de Zeus, protège le mariage. Hermès sert de messager entre les mondes. Arès incarne la guerre brutale, tandis qu\'Héphaïstos forge les armes divines dans ses ateliers volcaniques.'],
              highlight: ''
            },
            {
              title: 'Les héros et leurs quêtes',
              paragraphs: ['Les héros grecs sont souvent des demi-dieux, nés de l\'union d\'un dieu et d\'un mortel. Héraclès, fils de Zeus, accomplit douze travaux pour expier un crime commis dans la folie. Ulysse, roi d\'Ithaque, met dix ans à rentrer de la guerre de Troie, affrontant le Cyclope Polyphème, les Sirènes et la colère de Poséidon.', 'Persée trancha la tête de Méduse grâce aux sandales ailées d\'Hermès et au bouclier poli d\'Athéna. Thésée vainquit le Minotaure dans le labyrinthe de Crète. Ces récits illustrent la lutte de l\'homme contre le destin, les monstres et ses propres faiblesses.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui est l\'auteur de la Théogonie, poème racontant l\'origine des dieux grecs ?',
              opts: ['Homère', 'Hésiode', 'Sophocle', 'Pindare'],
              correct: 1,
              explanation: 'La Théogonie est un poème d\'Hésiode (VIIIe siècle av. J.-C.) qui raconte la naissance des dieux et la formation du cosmos.'
            },
            {
              q: 'Quel Titan a dévoré ses enfants par crainte d\'être détrôné ?',
              opts: ['Atlas', 'Prométhée', 'Cronos', 'Japet'],
              correct: 2,
              explanation: 'Cronos dévorait ses enfants à la naissance, mais Zeus fut sauvé par Rhéa et le renversa lors de la Titanomachie.'
            },
            {
              q: 'Combien de travaux Héraclès a-t-il dû accomplir ?',
              opts: ['7', '10', '12', '15'],
              correct: 2,
              explanation: 'Héraclès accomplit douze travaux imposés par Eurysthée, allant du lion de Némée aux pommes d\'or des Hespérides.'
            },
            {
              q: 'Quelle déesse est née tout armée de la tête de Zeus ?',
              opts: ['Artémis', 'Aphrodite', 'Héra', 'Athéna'],
              correct: 3,
              explanation: 'Athéna jaillit du crâne de Zeus, déjà revêtue de son armure, après qu\'il eut avalé sa mère Métis.'
            },
            {
              q: 'Quel monstre Thésée a-t-il vaincu dans le labyrinthe de Crète ?',
              opts: ['L\'Hydre de Lerne', 'Le Sphinx', 'Le Minotaure', 'Cérbère'],
              correct: 2,
              explanation: 'Thésée tua le Minotaure, créature mi-homme mi-taureau, dans le labyrinthe construit par Dédale.'
            }
          ],
          definitions: [
            {
              term: 'Titanomachie',
              def: 'Guerre cosmique opposant Zeus et les Olympiens aux Titans, aboutissant à la victoire de Zeus et à l\'emprisonnement des Titans dans le Tartare.'
            },
            {
              term: 'Olympien',
              def: 'Divinité résidant au sommet du mont Olympe. Les douze principaux Olympiens forment le panthéon central de la religion grecque.'
            },
            {
              term: 'Hubris',
              def: 'Démesure ou orgueil excessif d\'un mortel qui défie les dieux, entraînant généralement un châtiment divin (némésis).'
            },
            {
              term: 'Théogonie',
              def: 'Œuvre poétique d\'Hésiode relatant la généalogie des dieux grecs, depuis le Chaos originel jusqu\'au règne de Zeus.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Homère',
              back: 'Homère aurait vécu au VIIIe siècle av. J.-C. Il est l\'auteur présumé de l\'Iliade et de l\'Odyssée, les deux plus anciennes œuvres de la littérature occidentale.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot « planète » vient du grec « planêtès » (astre errant). Cinq planètes visibles à l\'œil nu portent des noms de dieux romains correspondant aux dieux grecs.'
            },
            {
              front: 'Nombre clé : 12',
              back: 'Douze est un nombre sacré en Grèce antique : 12 Olympiens, 12 travaux d\'Héraclès, 12 mois du calendrier.'
            }
          ]
        },
        {
          slug: 'mythologie-romaine',
          title: 'Mythologie romaine',
          description: 'Les dieux du Latium, la fondation de Rome et l\'héritage mythologique romain.',
          intro: 'La mythologie romaine emprunte largement au panthéon grec tout en développant ses propres traditions. Les Romains associaient leurs dieux ancestraux aux divinités grecques, créant une synthèse culturelle unique qui reflète les valeurs de discipline, de piété et de grandeur de la civilisation romaine.',
          introHighlight: 'La mythologie romaine est indissociable de l\'histoire politique de Rome : les mythes fondateurs légitiment le pouvoir et l\'expansion de la République puis de l\'Empire.',
          sections: [
            {
              title: 'La fondation de Rome',
              paragraphs: ['Selon la légende, Rome fut fondée le 21 avril 753 av. J.-C. par Romulus, descendant du héros troyen Énée. Romulus et son jumeau Rémus, fils du dieu Mars et de la vestale Rhéa Silvia, furent abandonnés sur le Tibre et allaités par une louve. Devenus adultes, ils décidèrent de fonder une ville.', 'Un conflit éclata entre les jumeaux au sujet de l\'emplacement de la cité. Romulus traça le pomerium (enceinte sacrée) sur le Palatin. Rémus franchit la limite par dérision et fut tué. Romulus devint le premier roi de Rome et donna son nom à la ville éternelle.'],
              highlight: 'Le mythe de Romulus et Rémus illustre un thème universel : la fondation d\'une civilisation exige un sacrifice, et le pouvoir naît souvent de la violence fratricide.'
            },
            {
              title: 'Le panthéon romain',
              paragraphs: ['Jupiter, roi des dieux, correspond au Zeus grec. Junon protège le mariage, Minerve incarne la sagesse guerrière. Mars, dieu de la guerre, occupe une place prépondérante dans la religion romaine en tant que père de Romulus. Vénus, déesse de l\'amour, est considérée comme l\'ancêtre de la gens Julia, la famille de Jules César.', 'Les Romains vénéraient également des divinités domestiques : les Lares protégeaient le foyer, les Pénates veillaient sur les provisions, et le Genius représentait l\'esprit vital de chaque homme. Le culte privé était aussi important que les cérémonies publiques.'],
              highlight: ''
            },
            {
              title: 'Énée et l\'héritage troyen',
              paragraphs: ['L\'Énéide de Virgile (Ier siècle av. J.-C.) raconte le voyage d\'Énée, prince troyen, depuis la chute de Troie jusqu\'en Italie. Guidé par le destin et par Vénus, sa mère divine, Énée descend aux Enfers, s\'allie aux peuples du Latium et pose les fondations de la future Rome.', 'Ce poème épique fut commandé par l\'empereur Auguste pour glorifier les origines divines de Rome et de sa propre dynastie. L\'Énéide relie la mythologie grecque à l\'histoire romaine, faisant de Rome l\'héritière légitime de la grandeur troyenne.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Selon la légende, en quelle année Rome fut-elle fondée ?',
              opts: ['509 av. J.-C.', '753 av. J.-C.', '476 av. J.-C.', '264 av. J.-C.'],
              correct: 1,
              explanation: 'La tradition fixe la fondation de Rome par Romulus au 21 avril 753 av. J.-C.'
            },
            {
              q: 'Quel animal aurait allaité Romulus et Rémus ?',
              opts: ['Un aigle', 'Une chèvre', 'Une louve', 'Une ourse'],
              correct: 2,
              explanation: 'La Louve capitoline (Lupa) allaita les jumeaux sur les rives du Tibre avant qu\'un berger ne les recueille.'
            },
            {
              q: 'Quel poète latin a écrit l\'Énéide ?',
              opts: ['Ovide', 'Virgile', 'Horace', 'Lucrèce'],
              correct: 1,
              explanation: 'Virgile (70-19 av. J.-C.) composa l\'Énéide sous le patronage d\'Auguste pour célébrer les origines troyennes de Rome.'
            },
            {
              q: 'Quel dieu romain est le père de Romulus ?',
              opts: ['Jupiter', 'Neptune', 'Mars', 'Mercure'],
              correct: 2,
              explanation: 'Mars, dieu de la guerre, est le père divin de Romulus et Rémus, faisant de la guerre un élément fondateur de l\'identité romaine.'
            },
            {
              q: 'Que sont les Lares dans la religion romaine ?',
              opts: ['Des prêtres', 'Des esprits protecteurs du foyer', 'Des temples', 'Des sacrifices'],
              correct: 1,
              explanation: 'Les Lares sont des divinités domestiques qui protègent le foyer familial. Chaque maison romaine possédait un laraire où on leur rendait un culte quotidien.'
            }
          ],
          definitions: [
            {
              term: 'Pomerium',
              def: 'Limite sacrée de la ville de Rome, tracée par Romulus. Il était interdit d\'y porter des armes ou d\'y enterrer les morts.'
            },
            {
              term: 'Lares',
              def: 'Esprits protecteurs du foyer domestique dans la religion romaine, vénérés dans un petit autel appelé laraire.'
            },
            {
              term: 'Interpretatio romana',
              def: 'Procédé par lequel les Romains identifiaient les dieux étrangers à leurs propres divinités (ex. : Zeus = Jupiter).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Fondation de Rome',
              back: '753 av. J.-C. selon la tradition. Cette date sert de point de départ au calendrier romain (ab Urbe condita).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les jours de la semaine en français tirent leur nom des planètes romaines : lundi (Lune), mardi (Mars), mercredi (Mercure), jeudi (Jupiter), vendredi (Vénus).'
            }
          ]
        },
        {
          slug: 'mythologie-nordique',
          title: 'Mythologie nordique',
          description: 'Odin, Thor, le Ragnarök et l\'univers mythologique des peuples scandinaves.',
          intro: 'La mythologie nordique est le système de croyances des peuples germaniques et scandinaves avant leur christianisation. Transmise oralement par les scaldes, elle fut consignée au XIIIe siècle dans les Eddas islandaises.',
          introHighlight: 'Contrairement aux mythologies méditerranéennes, la mythologie nordique est marquée par le fatalisme : même les dieux sont mortels et doivent affronter le Ragnarök, la bataille finale.',
          sections: [
            {
              title: 'La cosmogonie nordique',
              paragraphs: ['Au commencement, il n\'existait que le Ginnungagap, un abîme vide séparant Niflheim (monde de glace) et Muspellheim (monde de feu). La rencontre du froid et du chaud donna naissance au géant Ymir et à la vache Audhumla. Les dieux Odin, Vili et Vé tuèrent Ymir et façonnèrent le monde à partir de son corps.', 'L\'univers nordique est organisé autour d\'Yggdrasil, le frêne cosmique dont les racines relient les neuf mondes. Asgard, demeure des dieux Ases, se trouve au sommet. Midgard, le monde des hommes, est au centre. Helheim, royaume des morts, se situe dans les profondeurs.'],
              highlight: 'Yggdrasil, l\'arbre-monde, est le pilier de la cosmologie nordique. Ses racines plongent dans trois sources de sagesse, et son destin est lié à celui de l\'univers tout entier.'
            },
            {
              title: 'Les dieux Ases et Vanes',
              paragraphs: ['Odin, le Père-de-tout, est le dieu de la sagesse, de la guerre et de la magie. Il sacrifia un œil pour boire à la source de Mímir et se pendit neuf jours à Yggdrasil pour découvrir les runes. Thor, son fils, protège les hommes et les dieux avec son marteau Mjölnir. Loki, le dieu farceur, est à la fois allié et ennemi des Ases.', 'Les Vanes (Freyr, Freyja, Njörd) sont des divinités de la fertilité et de la prospérité. Après une guerre avec les Ases, les deux familles divines échangèrent des otages et coexistèrent pacifiquement.'],
              highlight: ''
            },
            {
              title: 'Le Ragnarök',
              paragraphs: ['Le Ragnarök désigne la fin du monde dans la mythologie nordique. Précédé du Fimbulvetr (un hiver de trois ans), il voit s\'affronter les dieux et les forces du chaos. Odin est dévoré par le loup Fenrir, Thor périt en tuant le serpent Jörmungandr, et le géant de feu Surt embrase l\'univers.', 'Cependant, le Ragnarök n\'est pas une fin absolue. La terre renaît de la mer, verdoyante et fertile. Deux humains, Líf et Lífthrasir, survivent et repeuplent le monde. Baldr, le dieu lumineux, revient des morts. Ce cycle de destruction et de renaissance est au cœur de la vision nordique du temps.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Comment s\'appelle l\'arbre cosmique de la mythologie nordique ?',
              opts: ['Mjölnir', 'Yggdrasil', 'Bifrost', 'Ginnungagap'],
              correct: 1,
              explanation: 'Yggdrasil est le frêne cosmique qui relie les neuf mondes de la cosmologie nordique.'
            },
            {
              q: 'Quel sacrifice Odin a-t-il fait pour obtenir la sagesse ?',
              opts: ['Sa main droite', 'Son œil', 'Son fils', 'Son marteau'],
              correct: 1,
              explanation: 'Odin sacrifia un œil pour boire à la source de Mímir et obtenir la connaissance universelle.'
            },
            {
              q: 'Combien de mondes composent la cosmologie nordique ?',
              opts: ['3', '7', '9', '12'],
              correct: 2,
              explanation: 'La cosmologie nordique compte neuf mondes reliés par Yggdrasil, dont Asgard, Midgard et Helheim.'
            },
            {
              q: 'Quel est le nom de la fin du monde dans la mythologie nordique ?',
              opts: ['Valhalla', 'Ragnarök', 'Niflheim', 'Bifrost'],
              correct: 1,
              explanation: 'Le Ragnarök est la bataille finale entre les dieux et les forces du chaos, aboutissant à la destruction puis à la renaissance du monde.'
            },
            {
              q: 'Quel est l\'arme de Thor ?',
              opts: ['Gungnir', 'Gram', 'Mjölnir', 'Tyrfing'],
              correct: 2,
              explanation: 'Mjölnir est le marteau magique de Thor, forgé par les nains Sindri et Brokk.'
            }
          ],
          definitions: [
            {
              term: 'Ases',
              def: 'Famille principale de dieux nordiques résidant à Asgard, incluant Odin, Thor, Baldr et Tyr.'
            },
            {
              term: 'Vanes',
              def: 'Famille de divinités liées à la fertilité et à la prospérité, dont Freyr, Freyja et Njörd.'
            },
            {
              term: 'Ragnarök',
              def: 'Fin du monde dans la mythologie nordique, marquée par une bataille apocalyptique suivie d\'une renaissance.'
            },
            {
              term: 'Runes',
              def: 'Alphabet sacré des peuples germaniques, révélé à Odin après son sacrifice sur Yggdrasil.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Les jours de la semaine en anglais portent des noms de dieux nordiques : Tuesday (Tyr), Wednesday (Odin/Woden), Thursday (Thor), Friday (Frigg/Freyja).'
            },
            {
              front: 'Source principale',
              back: 'L\'Edda poétique et l\'Edda en prose de Snorri Sturluson (XIIIe siècle) sont les sources principales de la mythologie nordique.'
            },
            {
              front: 'Nombre clé : 9',
              back: 'Le chiffre 9 est sacré dans la mythologie nordique : 9 mondes, 9 nuits de pendaison d\'Odin, 9 mères de Heimdall.'
            }
          ]
        },
        {
          slug: 'mythologie-egyptienne',
          title: 'Mythologie égyptienne',
          description: 'Les dieux à tête d\'animaux, le mythe d\'Osiris et le voyage dans l\'au-delà.',
          intro: 'La mythologie égyptienne est l\'une des plus anciennes du monde, avec des traces remontant à 3000 av. J.-C. Elle s\'articule autour du cycle solaire, de la crue du Nil et de la quête de l\'immortalité.',
          introHighlight: 'La Maât, concept central de la pensée égyptienne, désigne l\'ordre cosmique, la justice et la vérité. Pharaon est le garant terrestre de cette harmonie universelle.',
          sections: [
            {
              title: 'La création du monde',
              paragraphs: ['Selon la cosmogonie d\'Héliopolis, le dieu Atoum émergea du Noun, l\'océan primordial, en se tenant sur la première colline de terre. Il engendra Shou (l\'air) et Tefnout (l\'humidité), qui donnèrent naissance à Geb (la terre) et Nout (le ciel).', 'D\'autres cosmogonies coexistaient. À Memphis, Ptah créa le monde par la parole. À Hermopolis, huit divinités primordiales (l\'Ogdoade) précédèrent la création. Les Égyptiens acceptaient la multiplicité des récits comme autant de facettes d\'une même vérité divine.'],
              highlight: 'La coexistence de plusieurs cosmogonies révèle la pensée égyptienne : la vérité divine est trop vaste pour un seul récit.'
            },
            {
              title: 'Le mythe d\'Osiris',
              paragraphs: ['Osiris, roi bienfaisant, fut assassiné par son frère Seth, jaloux de son pouvoir. Seth découpa son corps en quatorze morceaux dispersés à travers le pays. Isis, épouse d\'Osiris, les rassembla et reconstitua le corps de son époux pour concevoir Horus.', 'Horus affronta Seth dans une série de combats pour reprendre le trône. Après le jugement des dieux, Horus devint roi d\'Égypte et Osiris régna sur le monde des morts. Chaque pharaon vivant était identifié à Horus, et chaque pharaon défunt devenait Osiris.'],
              highlight: ''
            },
            {
              title: 'Le voyage dans l\'au-delà',
              paragraphs: ['Les Égyptiens croyaient en une vie après la mort conditionnée par le jugement d\'Osiris. Le défunt devait traverser la Douat en récitant les formules du Livre des Morts. L\'épreuve culminait dans la salle des Deux Vérités, où le cœur du défunt était pesé face à la plume de Maât.', 'Si le cœur était plus léger que la plume, le défunt accédait au royaume d\'Osiris. Sinon, il était dévoré par Ammout. La momification visait à préserver le corps pour permettre au ka (force vitale) et au ba (âme) de survivre éternellement.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel concept égyptien désigne l\'ordre cosmique et la justice ?',
              opts: ['Ka', 'Ba', 'Maât', 'Ankh'],
              correct: 2,
              explanation: 'La Maât représente l\'ordre, la justice et la vérité. Sa plume sert à peser le cœur des défunts.'
            },
            {
              q: 'Qui a assassiné Osiris ?',
              opts: ['Horus', 'Seth', 'Anubis', 'Thot'],
              correct: 1,
              explanation: 'Seth, frère et rival d\'Osiris, le tua par jalousie et dispersa les morceaux de son corps.'
            },
            {
              q: 'Quel dieu créa le monde par la parole selon la théologie de Memphis ?',
              opts: ['Râ', 'Atoum', 'Ptah', 'Thot'],
              correct: 2,
              explanation: 'Ptah, dieu artisan de Memphis, créa toutes choses par la pensée de son cœur et le verbe de sa langue.'
            },
            {
              q: 'Que représente le « ka » ?',
              opts: ['L\'âme voyageuse', 'La force vitale', 'Le nom secret', 'L\'ombre du défunt'],
              correct: 1,
              explanation: 'Le ka est la force vitale qui anime chaque être. Après la mort, il nécessite un corps préservé et des offrandes.'
            },
            {
              q: 'En combien de morceaux Seth a-t-il découpé le corps d\'Osiris ?',
              opts: ['7', '12', '14', '42'],
              correct: 2,
              explanation: 'Seth découpa le corps d\'Osiris en quatorze morceaux qu\'Isis rassembla patiemment.'
            }
          ],
          definitions: [
            {
              term: 'Maât',
              def: 'Principe fondamental de l\'ordre cosmique, de la justice et de la vérité, personnifié par une déesse portant une plume d\'autruche.'
            },
            {
              term: 'Ka',
              def: 'Force vitale de chaque être. Le ka survit après la mort et nécessite un corps momifié et des offrandes.'
            },
            {
              term: 'Douat',
              def: 'Monde souterrain que le défunt doit traverser pour atteindre le royaume d\'Osiris.'
            },
            {
              term: 'Noun',
              def: 'Océan primordial infini et chaotique d\'où émergea le monde selon la cosmogonie égyptienne.'
            }
          ],
          memos: [
            {
              front: 'Chronologie',
              back: 'La civilisation égyptienne s\'étend sur plus de 3000 ans, de l\'unification vers 3100 av. J.-C. à la conquête romaine en 30 av. J.-C.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le Livre des Morts n\'est pas un livre unique mais un ensemble de formules magiques personnalisées, placées dans le sarcophage du défunt.'
            },
            {
              front: 'Nombre clé : 42',
              back: 'Le défunt devait prononcer 42 déclarations d\'innocence devant 42 juges dans la salle du jugement d\'Osiris.'
            }
          ]
        },
        {
          slug: 'mythologie-mesopotamienne',
          title: 'Mythologie mésopotamienne',
          description: 'Gilgamesh, l\'Enuma Elish et les mythes fondateurs de Sumériens, Babyloniens et Assyriens.',
          intro: 'La Mésopotamie, « pays entre les fleuves », est le berceau de la plus ancienne littérature mythologique connue. Dès le IIIe millénaire av. J.-C., les Sumériens gravèrent sur des tablettes d\'argile des récits cosmogoniques et héroïques.',
          introHighlight: 'L\'Épopée de Gilgamesh, composée vers 2100 av. J.-C., est le plus ancien texte littéraire connu de l\'humanité.',
          sections: [
            {
              title: 'L\'Épopée de Gilgamesh',
              paragraphs: ['Gilgamesh, roi semi-divin d\'Uruk, est le protagoniste de la plus célèbre œuvre littéraire mésopotamienne. Tyran au début du récit, il est transformé par son amitié avec Enkidu, un homme sauvage créé par les dieux pour le tempérer.', 'La mort d\'Enkidu plonge Gilgamesh dans une crise existentielle. Il part à la recherche de l\'immortalité et rencontre Ûtanapishtim, survivant du Déluge. Gilgamesh accepte finalement sa condition mortelle et trouve la sérénité dans les œuvres durables qu\'il laisse à son peuple.'],
              highlight: 'Le récit du Déluge dans Gilgamesh présente des parallèles frappants avec le récit biblique de Noé.'
            },
            {
              title: 'L\'Enuma Elish',
              paragraphs: ['L\'Enuma Elish est le poème cosmogonique babylonien. Il raconte la naissance des dieux à partir du mélange des eaux douces (Apsû) et salées (Tiamat). Le conflit entre les jeunes dieux et les divinités primordiales aboutit à une guerre cosmique.', 'Marduk, dieu protecteur de Babylone, vainc Tiamat et façonne le ciel et la terre à partir de son corps. Il crée ensuite les hommes à partir du sang de Kingu pour qu\'ils servent les dieux.'],
              highlight: ''
            },
            {
              title: 'Le panthéon mésopotamien',
              paragraphs: ['Le panthéon mésopotamien s\'organise autour d\'une triade suprême : Anu (le ciel), Enlil (l\'air) et Enki/Ea (les eaux et la sagesse). Inanna/Ishtar, déesse de l\'amour et de la guerre, occupe une place essentielle.', 'Les dieux mésopotamiens sont capricieux et exigeants. Les hommes ont été créés pour les servir par des sacrifices. Les temples (ziggourats) servent de résidences terrestres aux dieux.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel est le plus ancien texte littéraire connu ?',
              opts: ['L\'Iliade', 'L\'Énéide', 'L\'Épopée de Gilgamesh', 'Le Livre des Morts'],
              correct: 2,
              explanation: 'L\'Épopée de Gilgamesh, composée vers 2100 av. J.-C., est la plus ancienne œuvre littéraire connue.'
            },
            {
              q: 'Quel dieu babylonien a vaincu Tiamat ?',
              opts: ['Enlil', 'Enki', 'Marduk', 'Anu'],
              correct: 2,
              explanation: 'Marduk vainquit Tiamat et créa le monde à partir de son corps, selon l\'Enuma Elish.'
            },
            {
              q: 'Qui est l\'ami sauvage de Gilgamesh ?',
              opts: ['Humbaba', 'Enkidu', 'Ûtanapishtim', 'Kingu'],
              correct: 1,
              explanation: 'Enkidu fut créé par les dieux pour tempérer Gilgamesh. Leur amitié est au cœur de l\'épopée.'
            },
            {
              q: 'Comment s\'appelle la déesse de l\'amour et de la guerre ?',
              opts: ['Tiamat', 'Ereshkigal', 'Inanna/Ishtar', 'Ninhursag'],
              correct: 2,
              explanation: 'Inanna (sumérienne) ou Ishtar (babylonienne) est la déesse de l\'amour, de la fertilité et de la guerre.'
            },
            {
              q: 'Que sont les ziggourats ?',
              opts: ['Des tombeaux', 'Des temples en forme de pyramide à étages', 'Des palais', 'Des observatoires'],
              correct: 1,
              explanation: 'Les ziggourats sont des temples-tours à étages servant de résidence terrestre aux dieux.'
            }
          ],
          definitions: [
            {
              term: 'Ziggourat',
              def: 'Temple mésopotamien en forme de pyramide à étages, résidence terrestre de la divinité protectrice de la cité.'
            },
            {
              term: 'Enuma Elish',
              def: 'Poème cosmogonique babylonien racontant la victoire de Marduk sur Tiamat et la création du monde.'
            },
            {
              term: 'Tiamat',
              def: 'Déesse primordiale des eaux salées, personnification du chaos originel dans la mythologie babylonienne.'
            }
          ],
          memos: [
            {
              front: 'Date clé',
              back: 'L\'Épopée de Gilgamesh date d\'environ 2100 av. J.-C., soit plus de 1000 ans avant l\'Iliade d\'Homère.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le récit du Déluge apparaît dans Gilgamesh bien avant la Bible. Ûtanapishtim construit un bateau et embarque les animaux pour survivre à l\'inondation universelle.'
            },
            {
              front: 'Écriture',
              back: 'L\'écriture cunéiforme, inventée par les Sumériens vers 3300 av. J.-C., permit de fixer les mythes sur des tablettes d\'argile.'
            }
          ]
        }
      ]
    },
    {
      slug: 'grandes-religions',
      title: 'Grandes religions',
      description: 'Les cinq grandes religions mondiales : christianisme, islam, judaïsme, bouddhisme et hindouisme.',
      introText: 'Les grandes religions structurent la vie spirituelle de milliards d\'êtres humains. Elles proposent des réponses aux questions fondamentales de l\'existence : le sens de la vie, la mort, le bien et le mal. Chacune possède ses textes sacrés, ses rites et ses institutions.',
      introHighlight: 'Les cinq grandes religions comptent aujourd\'hui près de 5,5 milliards de fidèles, soit environ 70 % de la population mondiale.',
      lessons: [
        {
          slug: 'christianisme',
          title: 'Christianisme',
          description: 'La religion fondée sur l\'enseignement de Jésus-Christ, ses dogmes et son histoire.',
          intro: 'Le christianisme est la religion la plus répandue au monde avec environ 2,4 milliards de fidèles. Né en Palestine au Ier siècle, il se fonde sur la vie et l\'enseignement de Jésus de Nazareth, reconnu comme le Christ (Messie) par ses disciples.',
          introHighlight: 'Le christianisme repose sur la foi en un Dieu unique en trois personnes (Trinité) et sur la croyance en la résurrection de Jésus, événement fondateur de la religion chrétienne.',
          sections: [
            {
              title: 'Les fondements de la foi chrétienne',
              paragraphs: ['Le christianisme repose sur la croyance en un Dieu unique qui s\'est révélé en trois personnes : le Père, le Fils (Jésus-Christ) et le Saint-Esprit. Ce dogme de la Trinité, formalisé au concile de Nicée (325), est la pierre angulaire de la théologie chrétienne. Les chrétiens croient que Jésus, fils de Dieu incarné, est mort sur la croix pour racheter les péchés de l\'humanité.', 'La résurrection de Jésus le troisième jour après sa crucifixion constitue le fondement de la foi chrétienne. Comme l\'écrit saint Paul : « Si le Christ n\'est pas ressuscité, notre foi est vaine. » Les Évangiles (Matthieu, Marc, Luc et Jean) relatent la vie, les miracles et l\'enseignement de Jésus.'],
              highlight: 'Le concile de Nicée (325) définit le dogme de la Trinité et le Credo, profession de foi qui unit encore aujourd\'hui la plupart des confessions chrétiennes.'
            },
            {
              title: 'Les grandes divisions du christianisme',
              paragraphs: ['Le christianisme s\'est divisé au fil des siècles en trois branches principales. L\'Église catholique, dirigée par le pape à Rome, est la plus nombreuse. Le schisme de 1054 a séparé l\'Église d\'Orient (orthodoxe) de l\'Église d\'Occident (catholique) sur des questions de liturgie, de théologie et d\'autorité.', 'Au XVIe siècle, la Réforme protestante initiée par Martin Luther (1517) contesta l\'autorité papale et certaines pratiques catholiques comme la vente des indulgences. Le protestantisme donna naissance à de multiples courants : luthéranisme, calvinisme, anglicanisme, évangélisme.'],
              highlight: ''
            },
            {
              title: 'Les sacrements et la liturgie',
              paragraphs: ['Les sacrements sont des rites sacrés institués par Jésus-Christ. L\'Église catholique en reconnaît sept : le baptême, la confirmation, l\'eucharistie, la pénitence, l\'onction des malades, l\'ordre et le mariage. Les protestants n\'en retiennent généralement que deux : le baptême et la cène (eucharistie).', 'L\'eucharistie, célébrée lors de la messe, commémore le dernier repas de Jésus avec ses disciples. Les catholiques croient en la transsubstantiation (le pain et le vin deviennent réellement le corps et le sang du Christ), tandis que les protestants y voient généralement un symbole.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'En quelle année le concile de Nicée a-t-il défini le dogme de la Trinité ?',
              opts: ['33', '325', '476', '1054'],
              correct: 1,
              explanation: 'Le concile de Nicée, convoqué par l\'empereur Constantin en 325, formula le Credo et définit la nature divine de Jésus.'
            },
            {
              q: 'Qui a initié la Réforme protestante en 1517 ?',
              opts: ['Jean Calvin', 'Martin Luther', 'Henri VIII', 'Jan Hus'],
              correct: 1,
              explanation: 'Martin Luther afficha ses 95 thèses à Wittenberg en 1517, critiquant notamment la vente des indulgences.'
            },
            {
              q: 'Combien de sacrements l\'Église catholique reconnaît-elle ?',
              opts: ['2', '5', '7', '12'],
              correct: 2,
              explanation: 'L\'Église catholique reconnaît sept sacrements, contre généralement deux pour les Églises protestantes.'
            },
            {
              q: 'Quelle est la date du Grand Schisme entre catholiques et orthodoxes ?',
              opts: ['325', '800', '1054', '1517'],
              correct: 2,
              explanation: 'Le schisme de 1054 consomma la rupture entre l\'Église de Rome (catholique) et l\'Église de Constantinople (orthodoxe).'
            },
            {
              q: 'Combien d\'Évangiles canoniques composent le Nouveau Testament ?',
              opts: ['3', '4', '5', '12'],
              correct: 1,
              explanation: 'Les quatre Évangiles canoniques sont ceux de Matthieu, Marc, Luc et Jean.'
            }
          ],
          definitions: [
            {
              term: 'Trinité',
              def: 'Dogme chrétien affirmant que Dieu est un en trois personnes distinctes : le Père, le Fils et le Saint-Esprit.'
            },
            {
              term: 'Eucharistie',
              def: 'Sacrement central du christianisme célébrant le dernier repas de Jésus. Le pain et le vin y représentent (ou deviennent) le corps et le sang du Christ.'
            },
            {
              term: 'Réforme',
              def: 'Mouvement religieux du XVIe siècle initié par Martin Luther, aboutissant à la naissance du protestantisme.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1517',
              back: 'Martin Luther publie ses 95 thèses à Wittenberg, déclenchant la Réforme protestante qui divisera durablement le christianisme occidental.'
            },
            {
              front: 'Nombre clé',
              back: 'Le christianisme compte environ 2,4 milliards de fidèles répartis en trois branches principales : catholicisme (~1,3 Md), protestantisme (~900 M) et orthodoxie (~220 M).'
            }
          ]
        },
        {
          slug: 'islam',
          title: 'Islam',
          description: 'La dernière religion abrahamique : le Coran, les cinq piliers et l\'histoire de l\'islam.',
          intro: 'L\'islam est la deuxième religion du monde avec près de 1,9 milliard de fidèles. Fondé au VIIe siècle en Arabie par le prophète Muhammad, il se présente comme la dernière révélation d\'un Dieu unique (Allah) dans la lignée d\'Abraham, Moïse et Jésus.',
          introHighlight: 'Le mot « islam » signifie « soumission à Dieu » en arabe. Un musulman est celui qui se soumet volontairement à la volonté divine.',
          sections: [
            {
              title: 'Les cinq piliers de l\'islam',
              paragraphs: ['La pratique de l\'islam repose sur cinq piliers obligatoires. La shahâda (profession de foi) affirme l\'unicité de Dieu et la mission prophétique de Muhammad. La salât (prière) est accomplie cinq fois par jour en direction de La Mecque. La zakât (aumône légale) représente environ 2,5 % des économies annuelles.', 'Le sawm (jeûne du mois de ramadan) impose l\'abstinence de nourriture, de boisson et de relations intimes du lever au coucher du soleil. Le hajj (pèlerinage à La Mecque) doit être accompli au moins une fois dans la vie par tout musulman qui en a les moyens physiques et financiers.'],
              highlight: 'Les cinq piliers (shahâda, salât, zakât, sawm, hajj) structurent la vie quotidienne et annuelle de chaque musulman pratiquant.'
            },
            {
              title: 'Le Coran et la Sunna',
              paragraphs: ['Le Coran est considéré par les musulmans comme la parole littérale de Dieu, révélée à Muhammad par l\'ange Gabriel entre 610 et 632. Composé de 114 sourates (chapitres) et plus de 6000 versets, il aborde la théologie, la morale, le droit et la vie en société.', 'La Sunna (tradition prophétique) rassemble les paroles, actes et approbations de Muhammad, consignés dans des recueils de hadiths. Elle complète le Coran et sert de guide pratique pour la vie quotidienne. Les six recueils de hadiths les plus fiables (dont ceux de Bukhari et Muslim) sont appelés al-kutub as-sitta.'],
              highlight: ''
            },
            {
              title: 'Sunnisme et chiisme',
              paragraphs: ['La principale division de l\'islam remonte à la question de la succession de Muhammad après sa mort en 632. Les sunnites (environ 85 % des musulmans) considèrent que les quatre premiers califes (Abu Bakr, Omar, Othman, Ali) furent légitimement élus. Les chiites estiment qu\'Ali, gendre du Prophète, était le seul successeur légitime.', 'Le chiisme s\'est lui-même divisé en plusieurs branches : duodécimains (majoritaires en Iran et en Irak), ismaéliens et zaïdites. Malgré leurs différences doctrinales, sunnites et chiites partagent les mêmes piliers fondamentaux et la même vénération du Coran.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de piliers fondamentaux compte l\'islam ?',
              opts: ['3', '4', '5', '7'],
              correct: 2,
              explanation: 'L\'islam repose sur cinq piliers : la profession de foi, la prière, l\'aumône, le jeûne du ramadan et le pèlerinage à La Mecque.'
            },
            {
              q: 'Combien de sourates compte le Coran ?',
              opts: ['66', '99', '114', '150'],
              correct: 2,
              explanation: 'Le Coran est composé de 114 sourates (chapitres), classées approximativement par ordre de longueur décroissante.'
            },
            {
              q: 'Quel pourcentage des musulmans sont sunnites ?',
              opts: ['50 %', '65 %', '75 %', '85 %'],
              correct: 3,
              explanation: 'Les sunnites représentent environ 85 % des musulmans dans le monde, les chiites constituant la majeure partie des 15 % restants.'
            },
            {
              q: 'En quelle année le prophète Muhammad a-t-il effectué l\'Hégire vers Médine ?',
              opts: ['570', '610', '622', '632'],
              correct: 2,
              explanation: 'L\'Hégire (622) marque l\'émigration de Muhammad de La Mecque à Médine. Elle sert de point de départ au calendrier islamique.'
            },
            {
              q: 'Combien de fois par jour le musulman doit-il effectuer la prière rituelle ?',
              opts: ['3', '4', '5', '7'],
              correct: 2,
              explanation: 'Les cinq prières quotidiennes (fajr, dhuhr, asr, maghrib, isha) rythment la journée du musulman.'
            }
          ],
          definitions: [
            {
              term: 'Shahâda',
              def: 'Profession de foi islamique : « Il n\'y a de dieu que Dieu, et Muhammad est son prophète. » Elle constitue le premier pilier de l\'islam.'
            },
            {
              term: 'Hadith',
              def: 'Récit rapportant une parole, un acte ou une approbation du prophète Muhammad, servant de source de droit et de guide moral.'
            },
            {
              term: 'Hégire',
              def: 'Émigration de Muhammad de La Mecque à Médine en 622, événement fondateur qui marque le début du calendrier islamique.'
            },
            {
              term: 'Oumma',
              def: 'Communauté universelle des croyants musulmans, par-delà les frontières ethniques et nationales.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 622',
              back: 'L\'Hégire (622) marque le début du calendrier islamique. Muhammad et ses compagnons émigrent de La Mecque à Médine.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le Coran reconnaît 25 prophètes, dont Abraham, Moïse, David et Jésus. Muhammad est considéré comme le « sceau des prophètes », le dernier envoyé de Dieu.'
            },
            {
              front: 'Nombre clé : 1,9 milliard',
              back: 'L\'islam est la deuxième religion du monde avec environ 1,9 milliard de fidèles, et la religion dont la croissance démographique est la plus rapide.'
            }
          ]
        },
        {
          slug: 'judaisme',
          title: 'Judaïsme',
          description: 'La plus ancienne religion monothéiste : la Torah, les fêtes et la tradition rabbinique.',
          intro: 'Le judaïsme est la plus ancienne des trois religions monothéistes abrahamiques. Fondé sur l\'Alliance entre Dieu (YHWH) et le peuple d\'Israël, il s\'enracine dans la Torah et se déploie dans une tradition rabbinique millénaire de commentaire et d\'interprétation.',
          introHighlight: 'Le judaïsme a introduit le monothéisme éthique : l\'idée d\'un Dieu unique, créateur et législateur moral, qui a conclu une alliance avec son peuple.',
          sections: [
            {
              title: 'La Torah et l\'Alliance',
              paragraphs: ['La Torah (les cinq livres de Moïse : Genèse, Exode, Lévitique, Nombres, Deutéronome) est le texte fondateur du judaïsme. Elle raconte la création du monde, l\'histoire des patriarches (Abraham, Isaac, Jacob) et la sortie d\'Égypte sous la conduite de Moïse.', 'L\'Alliance (Brit) entre Dieu et Israël est le concept central. Dieu a choisi le peuple hébreu non pas pour le privilégier, mais pour lui confier une mission : observer les 613 commandements (mitsvot) de la Torah et être « une lumière pour les nations ».'],
              highlight: 'Les 613 commandements (mitsvot) de la Torah règlent tous les aspects de la vie juive : alimentation (kasherout), shabbat, prière, éthique et relations sociales.'
            },
            {
              title: 'Le Talmud et la tradition rabbinique',
              paragraphs: ['Le Talmud est le recueil des discussions rabbiniques sur la loi, l\'éthique et les coutumes juives. Il se compose de la Mishna (loi orale codifiée vers 200) et de la Guémara (commentaires). Deux versions existent : le Talmud de Babylone et le Talmud de Jérusalem.', 'La méthode talmudique repose sur le débat et l\'argumentation. Plusieurs opinions contradictoires sont présentées et discutées sans qu\'une seule vérité soit imposée. Cette tradition de questionnement a profondément influencé la pensée juive et la culture intellectuelle en général.'],
              highlight: ''
            },
            {
              title: 'Les fêtes et le calendrier juif',
              paragraphs: ['Le calendrier juif est lunaire et rythmé par les fêtes religieuses. Le shabbat (samedi) est le jour de repos hebdomadaire, commémorant le repos de Dieu après la création. Roch Hachana (Nouvel An) et Yom Kippour (Jour du Grand Pardon) ouvrent l\'année juive par une période d\'introspection.', 'Pessah (Pâque) célèbre la sortie d\'Égypte et la libération de l\'esclavage. Souccot commémore la traversée du désert. Hanoukka fête la redédicace du Temple de Jérusalem en 164 av. J.-C. Pourim rappelle le sauvetage des Juifs de Perse raconté dans le livre d\'Esther.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de commandements (mitsvot) la Torah contient-elle ?',
              opts: ['10', '248', '365', '613'],
              correct: 3,
              explanation: 'La Torah contient 613 commandements (mitsvot) : 248 positifs et 365 négatifs, réglant tous les aspects de la vie juive.'
            },
            {
              q: 'Quels sont les cinq livres de la Torah ?',
              opts: ['Psaumes, Proverbes, Job, Cantique, Ruth', 'Isae, Jérémie, Ézéchiel, Daniel, Osée', 'Genèse, Exode, Lévitique, Nombres, Deutéronome', 'Juges, Samuel, Rois, Chroniques, Esdras'],
              correct: 2,
              explanation: 'La Torah (Pentateuque) comprend les cinq livres de Moïse : Genèse, Exode, Lévitique, Nombres et Deutéronome.'
            },
            {
              q: 'Qu\'est-ce que le Talmud ?',
              opts: ['Le livre de prières quotidiennes', 'Le recueil des discussions rabbiniques sur la Loi', 'Le texte de la Kabbale', 'Un commentaire poétique des Psaumes'],
              correct: 1,
              explanation: 'Le Talmud compile les discussions rabbiniques (Mishna + Guémara) sur l\'interprétation de la Torah et la loi juive.'
            },
            {
              q: 'Quelle fête commémore la sortie d\'Égypte ?',
              opts: ['Hanoukka', 'Pourim', 'Pessah', 'Souccot'],
              correct: 2,
              explanation: 'Pessah (Pâque juive) célèbre la libération des Hébreux de l\'esclavage en Égypte sous la conduite de Moïse.'
            },
            {
              q: 'Quel jour de la semaine est le shabbat ?',
              opts: ['Vendredi', 'Samedi', 'Dimanche', 'Lundi'],
              correct: 1,
              explanation: 'Le shabbat commence le vendredi soir au coucher du soleil et se termine le samedi soir. C\'est le jour de repos hebdomadaire.'
            }
          ],
          definitions: [
            {
              term: 'Torah',
              def: 'Les cinq livres de Moïse (Pentateuque), texte fondateur du judaïsme, contenant la Loi révélée par Dieu à Moïse sur le mont Sinaï.'
            },
            {
              term: 'Talmud',
              def: 'Compilation des discussions rabbiniques (Mishna + Guémara) sur la Loi, l\'éthique et les coutumes juives, achevée au Ve siècle.'
            },
            {
              term: 'Mitsvot',
              def: 'Les 613 commandements de la Torah que les Juifs sont tenus d\'observer. Ils couvrent la vie religieuse, sociale et éthique.'
            }
          ],
          memos: [
            {
              front: 'Date clé : ~1250 av. J.-C.',
              back: 'Date traditionnelle de l\'Exode et du don de la Torah au mont Sinaï, événements fondateurs du judaïsme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le judaïsme ne cherche pas à convertir. C\'est une religion fondée sur une alliance entre Dieu et un peuple spécifique, non sur une mission universelle de conversion.'
            },
            {
              front: 'Nombre clé : 15 millions',
              back: 'Le judaïsme compte environ 15 millions de fidèles dans le monde, principalement en Israël et aux États-Unis.'
            }
          ]
        },
        {
          slug: 'bouddhisme',
          title: 'Bouddhisme',
          description: 'La voie de l\'Éveil : les enseignements du Bouddha, le karma et le nirvana.',
          intro: 'Le bouddhisme est né au VIe siècle av. J.-C. en Inde avec Siddhartha Gautama, qui devint le Bouddha (« l\'Éveillé ») après avoir atteint l\'illumination sous l\'arbre de la Bodhi. Avec environ 500 millions de pratiquants, le bouddhisme est la quatrième religion du monde.',
          introHighlight: 'Le bouddhisme se distingue des religions monothéistes : il ne postule pas de dieu créateur et se présente comme une voie de libération de la souffrance par la sagesse et la méditation.',
          sections: [
            {
              title: 'Les Quatre Nobles Vérités',
              paragraphs: ['L\'enseignement fondamental du Bouddha repose sur les Quatre Nobles Vérités. La première constate l\'universalité de la souffrance (dukkha) : naissance, vieillesse, maladie et mort sont sources de douleur. La deuxième identifie l\'origine de la souffrance dans le désir (tanha) et l\'attachement.', 'La troisième Noble Vérité affirme que la cessation de la souffrance est possible par l\'extinction du désir. La quatrième indique le chemin : le Noble Sentier Octuple, voie médiane entre l\'ascétisme extrême et la recherche du plaisir.'],
              highlight: 'Les Quatre Nobles Vérités constituent le premier sermon du Bouddha, prononcé à Sarnath. Elles sont le fondement de toutes les écoles bouddhistes.'
            },
            {
              title: 'Karma, renaissance et nirvana',
              paragraphs: ['Le karma désigne la loi de causalité morale : chaque acte (physique, verbal ou mental) produit des conséquences qui déterminent les conditions de la renaissance. Le cycle des renaissances (samsara) est conçu comme un océan de souffrance dont il faut se libérer.', 'Le nirvana (« extinction ») est l\'état de libération définitive du samsara. Ce n\'est ni un lieu ni un anéantissement, mais la cessation de l\'ignorance, du désir et de la souffrance. Le Bouddha décrivait le nirvana comme « la paix suprême ».'],
              highlight: ''
            },
            {
              title: 'Les grandes écoles bouddhistes',
              paragraphs: ['Le Theravada (« voie des Anciens ») est la forme la plus ancienne du bouddhisme, pratiquée en Asie du Sud-Est (Thaïlande, Sri Lanka, Birmanie). Il insiste sur la discipline monastique et la méditation individuelle pour atteindre l\'état d\'arhat (saint libéré).', 'Le Mahayana (« Grand Véhicule ») s\'est développé en Chine, en Corée et au Japon. Il met en avant l\'idéal du bodhisattva, être qui retarde son propre nirvana pour aider tous les êtres à se libérer. Le Vajrayana (bouddhisme tibétain) intègre des pratiques tantriques et rituelles spécifiques.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de Nobles Vérités le Bouddha a-t-il enseignées ?',
              opts: ['3', '4', '5', '8'],
              correct: 1,
              explanation: 'Les Quatre Nobles Vérités portent sur la souffrance, son origine, sa cessation et le chemin vers cette cessation.'
            },
            {
              q: 'Comment s\'appelle le cycle des renaissances dans le bouddhisme ?',
              opts: ['Nirvana', 'Dharma', 'Samsara', 'Karma'],
              correct: 2,
              explanation: 'Le samsara est le cycle des existences conditionnées, dont la libération constitue le but de la pratique bouddhiste.'
            },
            {
              q: 'Sous quel arbre Siddhartha Gautama a-t-il atteint l\'Éveil ?',
              opts: ['Un banian', 'L\'arbre de la Bodhi', 'Un lotus', 'Un manguier'],
              correct: 1,
              explanation: 'Siddhartha atteignit l\'Éveil (bodhi) sous un figuier sacré, désormais appelé arbre de la Bodhi, à Bodhgaya en Inde.'
            },
            {
              q: 'Qu\'est-ce que le Noble Sentier Octuple ?',
              opts: ['Huit vies de réincarnation', 'Huit préceptes moraux du moine', 'La voie en huit étapes vers la libération', 'Huit niveaux de méditation'],
              correct: 2,
              explanation: 'Le Noble Sentier Octuple comprend la vue juste, l\'intention juste, la parole juste, l\'action juste, les moyens d\'existence justes, l\'effort juste, l\'attention juste et la concentration juste.'
            },
            {
              q: 'Quel idéal est central dans le Mahayana ?',
              opts: ['L\'arhat', 'Le bodhisattva', 'Le moine errant', 'Le guru'],
              correct: 1,
              explanation: 'Le bodhisattva est un être qui, par compassion, retarde son entrée dans le nirvana pour aider tous les êtres sensibles à se libérer.'
            }
          ],
          definitions: [
            {
              term: 'Dukkha',
              def: 'Terme pali désignant la souffrance, l\'insatisfaction et l\'impermanence, concept central de la première Noble Vérité.'
            },
            {
              term: 'Nirvana',
              def: 'État de libération définitive du cycle des renaissances (samsara), caractérisé par la cessation du désir, de l\'ignorance et de la souffrance.'
            },
            {
              term: 'Bodhisattva',
              def: 'Être qui, ayant atteint la capacité d\'entrer dans le nirvana, choisit de rester dans le samsara pour aider tous les êtres à se libérer.'
            },
            {
              term: 'Karma',
              def: 'Loi de causalité morale selon laquelle chaque acte intentionnel produit des conséquences qui influencent les renaissances futures.'
            }
          ],
          memos: [
            {
              front: 'Date clé : ~Ve siècle av. J.-C.',
              back: 'Siddhartha Gautama, né vers 563 av. J.-C. dans l\'actuel Népal, atteint l\'Éveil vers l\'âge de 35 ans et enseigne pendant 45 ans.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le bouddhisme est la seule grande religion née en Inde à avoir presque disparu de son pays d\'origine, tout en se répandant massivement en Asie de l\'Est et du Sud-Est.'
            },
            {
              front: 'Les trois joyaux',
              back: 'Tout bouddhiste « prend refuge » dans les trois joyaux : le Bouddha (Éveillé), le Dharma (enseignement) et le Sangha (communauté des pratiquants).'
            }
          ]
        },
        {
          slug: 'hindouisme',
          title: 'Hindouisme',
          description: 'La plus ancienne religion vivante : Brahman, dharma, karma et les grandes divinités.',
          intro: 'L\'hindouisme est la troisième religion du monde avec plus d\'un milliard de fidèles, principalement en Inde et au Népal. Contrairement aux religions abrahamiques, il n\'a pas de fondateur unique ni de texte canonique exclusif, mais repose sur une tradition continue vieille de plus de 4000 ans.',
          introHighlight: 'L\'hindouisme est un « sanatana dharma » (loi éternelle) : plutôt qu\'une religion figée, c\'est un ensemble fluide de croyances, de philosophies et de pratiques unies par des concepts communs.',
          sections: [
            {
              title: 'Brahman, Atman et Maya',
              paragraphs: ['Le concept central de la philosophie hindoue est Brahman, la réalité ultime, absolue et impersonnelle dont tout procède. L\'Atman désigne le soi profond, l\'âme individuelle. Les Upanishads enseignent que l\'Atman et le Brahman sont identiques : réaliser cette unité est le but de la vie spirituelle.', 'Maya désigne l\'illusion cosmique qui voile la véritable nature de la réalité. Le monde phénoménal, perçu par les sens, est une manifestation de Maya. La libération (moksha) consiste à percevoir au-delà de cette illusion pour reconnaître l\'unité de l\'Atman et du Brahman.'],
              highlight: 'La formule des Upanishads « Tat tvam asi » (« Tu es cela ») résume l\'enseignement central : l\'âme individuelle (Atman) est identique à l\'absolu universel (Brahman).'
            },
            {
              title: 'Les grandes divinités',
              paragraphs: ['L\'hindouisme vénère des milliers de divinités, mais trois dieux forment la Trimurti : Brahma le créateur, Vishnou le préservateur et Shiva le destructeur-transformateur. Vishnou s\'incarne périodiquement sur terre sous forme d\'avatars (Rama, Krishna) pour rétablir l\'ordre cosmique.', 'Les déesses occupent une place essentielle. Lakshmi (prospérité), Sarasvati (connaissance) et Durga/Kali (puissance) sont vénérées dans tout le sous-continent. Ganesha, dieu à tête d\'éléphant, est invoqué au début de toute entreprise comme celui qui écarte les obstacles.'],
              highlight: ''
            },
            {
              title: 'Dharma, karma et moksha',
              paragraphs: ['Le dharma désigne l\'ordre cosmique, le devoir moral et la loi qui régit l\'univers. Chaque individu a un svadharma (devoir personnel) déterminé par sa naissance, son âge et sa situation. La Bhagavad-Gîtâ enseigne que l\'accomplissement désintéressé du dharma est la voie vers la libération.', 'Le karma (loi de rétribution des actes) et le samsara (cycle des réincarnations) sont communs à l\'hindouisme et au bouddhisme, mais l\'hindouisme postule l\'existence d\'une âme éternelle (Atman) qui transmigre. Le but ultime est le moksha : la libération définitive du cycle des renaissances.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel concept désigne la réalité ultime dans l\'hindouisme ?',
              opts: ['Dharma', 'Karma', 'Brahman', 'Maya'],
              correct: 2,
              explanation: 'Brahman est la réalité absolue, impersonnelle et infinie dont tout procède, selon la philosophie hindoue.'
            },
            {
              q: 'Quels sont les trois dieux de la Trimurti ?',
              opts: ['Rama, Krishna, Hanuman', 'Brahma, Vishnou, Shiva', 'Indra, Agni, Varuna', 'Ganesha, Lakshmi, Sarasvati'],
              correct: 1,
              explanation: 'La Trimurti réunit Brahma (créateur), Vishnou (préservateur) et Shiva (destructeur-transformateur).'
            },
            {
              q: 'Que signifie la formule « Tat tvam asi » ?',
              opts: ['Gloire à Dieu', 'Tu es cela', 'Paix intérieure', 'Loi éternelle'],
              correct: 1,
              explanation: '« Tat tvam asi » (« Tu es cela ») résume l\'identité entre l\'âme individuelle (Atman) et l\'absolu universel (Brahman).'
            },
            {
              q: 'Comment s\'appelle la libération définitive du cycle des renaissances ?',
              opts: ['Nirvana', 'Moksha', 'Dharma', 'Samsara'],
              correct: 1,
              explanation: 'Le moksha est la libération définitive du samsara, but ultime de la vie hindoue.'
            },
            {
              q: 'Combien d\'avatars principaux Vishnou possède-t-il dans la tradition ?',
              opts: ['3', '7', '10', '12'],
              correct: 2,
              explanation: 'Vishnou possède dix avatars principaux (Dashavatara), dont Rama (7e) et Krishna (8e). Le dixième, Kalki, n\'est pas encore apparu.'
            }
          ],
          definitions: [
            {
              term: 'Brahman',
              def: 'Réalité ultime, absolue et impersonnelle dans la philosophie hindoue, dont tout l\'univers est une manifestation.'
            },
            {
              term: 'Atman',
              def: 'L\'âme individuelle, le soi profond et éternel, identique au Brahman selon les Upanishads.'
            },
            {
              term: 'Moksha',
              def: 'Libération définitive du cycle des renaissances (samsara), but ultime de la spiritualité hindoue.'
            },
            {
              term: 'Dharma',
              def: 'Ordre cosmique, devoir moral et loi universelle qui régit l\'univers et détermine les obligations de chaque individu.'
            }
          ],
          memos: [
            {
              front: 'Texte clé : la Bhagavad-Gîtâ',
              back: 'La Bhagavad-Gîtâ (« Chant du Seigneur ») est un dialogue entre le prince Arjuna et le dieu Krishna sur le champ de bataille. C\'est le texte le plus lu de l\'hindouisme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'hindouisme reconnaît quatre voies vers le moksha : le jnana yoga (connaissance), le bhakti yoga (dévotion), le karma yoga (action désintéressée) et le raja yoga (méditation).'
            },
            {
              front: 'Nombre clé',
              back: 'L\'hindouisme connaît 33 types de divinités dans les Vedas, mais la tradition populaire en dénombre 330 millions, symbolisant l\'infinité des manifestations du divin.'
            }
          ]
        }
      ]
    },
    {
      slug: 'textes-sacres',
      title: 'Textes sacrés',
      description: 'Les grands livres saints de l\'humanité : Bible, Coran, Torah, Vedas et Tripitaka.',
      introText: 'Les textes sacrés sont les fondements écrits des grandes traditions religieuses. Transmis, copiés et commentés pendant des siècles, ils contiennent les récits fondateurs, les lois morales et les enseignements spirituels qui guident la vie de milliards de croyants.',
      introHighlight: 'Chaque texte sacré possède son propre statut : parole directe de Dieu, révélation inspirée, enseignement du maître ou sagesse ancestrale. Comprendre ce statut est essentiel pour saisir le rapport des croyants à leur Écriture.',
      lessons: [
        {
          slug: 'bible',
          title: 'La Bible',
          description: 'L\'Ancien et le Nouveau Testament : structure, rédaction et influence de la Bible.',
          intro: 'La Bible est le livre le plus traduit et le plus diffusé de l\'histoire. Composée sur plus de mille ans par des dizaines d\'auteurs, elle rassemble des récits historiques, des poèmes, des prophéties et des lettres qui fondent la foi judéo-chrétienne.',
          introHighlight: 'La Bible chrétienne comprend l\'Ancien Testament (héritage juif) et le Nouveau Testament (vie et enseignement de Jésus). Ses 73 livres (canon catholique) ou 66 livres (canon protestant) forment un ensemble littéraire unique.',
          sections: [
            {
              title: 'L\'Ancien Testament',
              paragraphs: ['L\'Ancien Testament correspond largement au Tanakh juif. Il s\'ouvre par le Pentateuque (Genèse à Deutéronome), suivi des livres historiques (Josué, Juges, Samuel, Rois), des livres poétiques (Psaumes, Proverbes, Job) et des livres prophétiques (Isaïe, Jérémie, Ézéchiel).', 'Rédigé principalement en hébreu entre le Xe et le IIe siècle av. J.-C., l\'Ancien Testament raconte l\'histoire du peuple d\'Israël et de son alliance avec Dieu. La Septante, traduction grecque réalisée à Alexandrie au IIIe siècle av. J.-C., a permis sa diffusion dans le monde hellénistique.'],
              highlight: 'La Bible est le texte le plus traduit au monde : elle existe en plus de 700 langues complètes et en plus de 3 500 langues partielles.'
            },
            {
              title: 'Le Nouveau Testament',
              paragraphs: ['Le Nouveau Testament se compose de 27 livres écrits en grec entre 50 et 100 après J.-C. Les quatre Évangiles (Matthieu, Marc, Luc, Jean) relatent la vie de Jésus. Les Actes des Apôtres racontent la naissance de l\'Église primitive.', 'Les épîtres de Paul (Romains, Corinthiens, Galates) sont les plus anciens textes chrétiens conservés, antérieurs même aux Évangiles. L\'Apocalypse de Jean clôt le canon avec une vision prophétique de la fin des temps et du triomphe de Dieu.'],
              highlight: ''
            },
            {
              title: 'Interprétation et transmission',
              paragraphs: ['L\'histoire de la transmission biblique est remarquable. Les manuscrits de la mer Morte (découverts en 1947 à Qumrân) contiennent des copies de textes bibliques datant du IIe siècle av. J.-C., attestant la fidélité de la transmission. La Vulgate de saint Jérôme (IVe siècle) fut la traduction latine de référence pendant mille ans.', 'L\'exégèse biblique distingue plusieurs niveaux de lecture : le sens littéral, le sens allégorique, le sens moral et le sens anagogique. Les méthodes modernes (critique textuelle, analyse littéraire, archéologie) ont transformé la compréhension des textes bibliques.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de livres contient le Nouveau Testament ?',
              opts: ['21', '27', '33', '39'],
              correct: 1,
              explanation: 'Le Nouveau Testament contient 27 livres : 4 Évangiles, les Actes, 21 épîtres et l\'Apocalypse.'
            },
            {
              q: 'Où furent découverts les manuscrits de la mer Morte ?',
              opts: ['À Jérusalem', 'À Qumrân', 'À Bethléem', 'À Nazareth'],
              correct: 1,
              explanation: 'Les manuscrits de la mer Morte furent découverts en 1947 dans des grottes à Qumrân, près de la mer Morte.'
            },
            {
              q: 'Qui a réalisé la Vulgate, traduction latine de référence ?',
              opts: ['Saint Augustin', 'Saint Jérôme', 'Saint Paul', 'Saint Thomas'],
              correct: 1,
              explanation: 'Saint Jérôme traduisit la Bible en latin entre 382 et 405. La Vulgate resta la version officielle de l\'Église catholique pendant un millénaire.'
            },
            {
              q: 'Quels sont les textes chrétiens les plus anciens conservés ?',
              opts: ['Les Évangiles', 'Les épîtres de Paul', 'Les Actes des Apôtres', 'L\'Apocalypse'],
              correct: 1,
              explanation: 'Les épîtres de Paul datent des années 50-60 apr. J.-C., tandis que les Évangiles furent rédigés entre 65 et 100.'
            },
            {
              q: 'Qu\'est-ce que la Septante ?',
              opts: ['Un concile', 'Une traduction grecque de l\'AT', 'Un manuscrit de la mer Morte', 'Un courant théologique'],
              correct: 1,
              explanation: 'La Septante est la traduction grecque de la Bible hébraïque, réalisée à Alexandrie au IIIe siècle av. J.-C.'
            }
          ],
          definitions: [
            {
              term: 'Canon',
              def: 'Liste officielle des livres reconnus comme inspirés et faisant autorité dans une tradition religieuse.'
            },
            {
              term: 'Exégèse',
              def: 'Science de l\'interprétation des textes bibliques, utilisant des méthodes historiques, littéraires et théologiques.'
            },
            {
              term: 'Septante',
              def: 'Traduction grecque de la Bible hébraïque réalisée au IIIe siècle av. J.-C. à Alexandrie, utilisée par les premiers chrétiens.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1947',
              back: 'Découverte des manuscrits de la mer Morte à Qumrân, plus anciens manuscrits bibliques connus (IIe s. av. J.-C.).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La Bible a été imprimée pour la première fois par Gutenberg vers 1455. Elle fut le premier livre imprimé en Europe avec des caractères mobiles.'
            }
          ]
        },
        {
          slug: 'coran',
          title: 'Le Coran',
          description: 'Le texte sacré de l\'islam : révélation, structure et interprétation.',
          intro: 'Le Coran (al-Qur\'an, « la récitation ») est le texte sacré de l\'islam, considéré par les musulmans comme la parole littérale de Dieu révélée au prophète Muhammad par l\'intermédiaire de l\'ange Gabriel entre 610 et 632.',
          introHighlight: 'Le Coran est le seul texte sacré des grandes religions à avoir été consigné dans sa langue originale (l\'arabe) sans aucune variante textuelle majeure depuis sa compilation au VIIe siècle.',
          sections: [
            {
              title: 'Révélation et compilation',
              paragraphs: ['Selon la tradition islamique, la première révélation eut lieu dans la grotte de Hira, près de La Mecque, en 610. L\'ange Gabriel (Jibril) ordonna à Muhammad de « lire » (iqra). Les révélations se poursuivirent pendant 23 ans, d\'abord à La Mecque puis à Médine.', 'Muhammad ne sachant pas écrire selon la tradition, les versets furent mémorisés par ses compagnons et consignés sur des supports variés. Après la mort du Prophète, le calife Uthman (644-656) ordonna la compilation définitive du texte, établissant le codex qui fait autorité encore aujourd\'hui.'],
              highlight: 'La première révélation coranique est le mot « Iqra » (« Lis » ou « Récite »), soulignant l\'importance du savoir et de la transmission dans l\'islam.'
            },
            {
              title: 'Structure et contenu',
              paragraphs: ['Le Coran se compose de 114 sourates (chapitres) classées approximativement par ordre de longueur décroissante, sauf la Fatiha (ouverture). Chaque sourate est divisée en ayat (versets, littéralement « signes »). On distingue les sourates mecquoises (tonalité spirituelle et eschatologique) des sourates médinoises (questions juridiques et sociales).', 'Les thèmes centraux du Coran sont le tawhid (unicité de Dieu), la prophétie, le Jour du Jugement, la morale et le droit. De nombreux récits bibliques y sont repris avec des variantes : Adam, Noé (Nuh), Abraham (Ibrahim), Moïse (Musa) et Jésus (Issa) y apparaissent comme prophètes.'],
              highlight: ''
            },
            {
              title: 'Sciences du Coran et interprétation',
              paragraphs: ['Le tafsir (exégèse coranique) est une discipline savante qui remonte aux premiers siècles de l\'islam. Les grands commentateurs comme Tabari (Xe siècle), Zamakhshari (XIIe siècle) et Ibn Kathir (XIVe siècle) ont produit des œuvres monumentales expliquant le Coran verset par verset.', 'Les sciences coraniques incluent également l\'étude des circonstances de la révélation (asbab al-nuzul), l\'abrogation (nasikh wa mansukh), la récitation (tajwid) et la calligraphie. Le Coran a profondément influencé la langue arabe, la poésie et les arts visuels du monde islamique.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de sourates contient le Coran ?',
              opts: ['99', '114', '124', '150'],
              correct: 1,
              explanation: 'Le Coran contient 114 sourates, de la Fatiha (ouverture) à sourate An-Nas (les hommes).'
            },
            {
              q: 'Quel calife a ordonné la compilation définitive du Coran ?',
              opts: ['Abu Bakr', 'Omar', 'Uthman', 'Ali'],
              correct: 2,
              explanation: 'Le calife Uthman ibn Affan (644-656) fit établir la version canonique du Coran et détruire les copies divergentes.'
            },
            {
              q: 'Quel est le premier mot révélé du Coran ?',
              opts: ['Bismillah', 'Alhamdulillah', 'Iqra', 'Allah'],
              correct: 2,
              explanation: '« Iqra » (« Lis » ou « Récite ») est le premier mot révélé à Muhammad dans la grotte de Hira.'
            },
            {
              q: 'Qu\'est-ce que le tafsir ?',
              opts: ['La récitation du Coran', 'L\'exégèse coranique', 'La calligraphie arabe', 'Le jeûne du ramadan'],
              correct: 1,
              explanation: 'Le tafsir est la science de l\'interprétation et du commentaire du Coran, pratiquée depuis les origines de l\'islam.'
            },
            {
              q: 'Comment appelle-t-on les versets du Coran ?',
              opts: ['Hadiths', 'Sourates', 'Ayat', 'Fatwa'],
              correct: 2,
              explanation: 'Les ayat (singulier : aya) signifient littéralement « signes ». Chaque verset est considéré comme un signe de Dieu.'
            }
          ],
          definitions: [
            {
              term: 'Sourate',
              def: 'Chapitre du Coran. Le texte en compte 114, classées approximativement par longueur décroissante.'
            },
            {
              term: 'Tafsir',
              def: 'Science de l\'interprétation du Coran, englobant l\'analyse linguistique, théologique et juridique des versets.'
            },
            {
              term: 'Tajwid',
              def: 'Art de la récitation correcte du Coran, régi par des règles précises de prononciation et d\'intonation.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 610',
              back: 'Première révélation coranique dans la grotte de Hira, marquant le début de la mission prophétique de Muhammad.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Des millions de musulmans dans le monde mémorisent l\'intégralité du Coran. Celui qui y parvient porte le titre de hafiz (gardien).'
            },
            {
              front: 'Nombre clé : 6 236',
              back: 'Le Coran contient 6 236 versets (ayat) selon le décompte le plus répandu.'
            }
          ]
        },
        {
          slug: 'torah',
          title: 'La Torah',
          description: 'Les cinq livres de Moïse : Loi révélée, tradition orale et commentaires rabbiniques.',
          intro: 'La Torah (« enseignement » ou « loi » en hébreu) désigne au sens strict les cinq livres de Moïse (Pentateuque), et au sens large l\'ensemble de la révélation divine. Elle constitue le cœur de la foi et de la pratique juives depuis plus de trois millénaires.',
          introHighlight: 'La Torah est lue intégralement chaque année à la synagogue selon un cycle hebdomadaire. Chaque génération est appelée à se l\'approprier par l\'étude et le commentaire.',
          sections: [
            {
              title: 'Les cinq livres',
              paragraphs: ['La Genèse (Bereshit) raconte la création du monde, l\'histoire d\'Adam et Ève, le Déluge et la vie des patriarches Abraham, Isaac et Jacob. L\'Exode (Shemot) relate l\'esclavage en Égypte, la libération par Moïse, le passage de la mer Rouge et le don de la Loi au mont Sinaï.', 'Le Lévitique (Vayikra) détaille les lois sacrificielles et de pureté. Les Nombres (Bamidbar) couvrent les quarante ans d\'errance dans le désert. Le Deutéronome (Devarim) est le discours d\'adieu de Moïse avant l\'entrée en Terre promise.'],
              highlight: 'La Torah contient 613 commandements (mitsvot) qui règlent la totalité de la vie juive, du culte à l\'alimentation en passant par les relations sociales.'
            },
            {
              title: 'Torah écrite et Torah orale',
              paragraphs: ['La tradition juive distingue la Torah écrite (Torah shebikhtav) de la Torah orale (Torah shebe\'al pe). La Torah orale, révélée à Moïse au Sinaï en même temps que la Torah écrite, explique et complète les commandements écrits.', 'Face au risque de perte après la destruction du Second Temple (70 apr. J.-C.), Rabbi Judah ha-Nassi codifa la Torah orale dans la Mishna (vers 200). Les discussions rabbiniques postérieures (Guémara) s\'y ajoutèrent pour former le Talmud, achevé au Ve siècle.'],
              highlight: ''
            },
            {
              title: 'Le rouleau de Torah et sa lecture',
              paragraphs: ['Le Sefer Torah (rouleau de Torah) est un manuscrit en parchemin copié à la main par un sofer (scribe qualifié). La copie obéit à des règles extrêmement strictes : chaque lettre doit être parfaite, et la moindre erreur rend le rouleau impropre à l\'usage liturgique.', 'Le texte de la Torah est divisé en 54 sections hebdomadaires (parashot) lues intégralement en un an. La fête de Simhat Torah célèbre la fin et le recommencement du cycle de lecture. La lecture publique de la Torah est un moment central du culte synagogal.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel est le nom hébreu du premier livre de la Torah ?',
              opts: ['Shemot', 'Bereshit', 'Vayikra', 'Devarim'],
              correct: 1,
              explanation: 'Bereshit (« Au commencement ») est le nom hébreu de la Genèse, premier livre de la Torah.'
            },
            {
              q: 'En combien de sections hebdomadaires la Torah est-elle divisée ?',
              opts: ['12', '36', '54', '72'],
              correct: 2,
              explanation: 'La Torah est divisée en 54 parashot (sections), permettant de lire l\'intégralité du texte en un an.'
            },
            {
              q: 'Qu\'est-ce que la Mishna ?',
              opts: ['Un commentaire du Talmud', 'La codification de la Torah orale', 'Un recueil de prières', 'Un texte mystique'],
              correct: 1,
              explanation: 'La Mishna est la codification de la Torah orale réalisée par Rabbi Judah ha-Nassi vers 200 apr. J.-C.'
            },
            {
              q: 'Comment appelle-t-on le scribe qui copie un rouleau de Torah ?',
              opts: ['Rabbin', 'Hazzan', 'Sofer', 'Cohen'],
              correct: 2,
              explanation: 'Le sofer (scribe) est un artisan qualifié qui copie les rouleaux de Torah selon des règles très strictes.'
            },
            {
              q: 'Quel livre de la Torah contient le discours d\'adieu de Moïse ?',
              opts: ['Genèse', 'Exode', 'Lévitique', 'Deutéronome'],
              correct: 3,
              explanation: 'Le Deutéronome (Devarim) contient les derniers discours de Moïse au peuple d\'Israël avant l\'entrée en Terre promise.'
            }
          ],
          definitions: [
            {
              term: 'Parasha',
              def: 'Section hebdomadaire de la Torah lue à la synagogue. Il y en a 54 pour couvrir l\'année complète.'
            },
            {
              term: 'Sofer',
              def: 'Scribe qualifié chargé de copier à la main les rouleaux de Torah selon des règles calligraphiques très strictes.'
            },
            {
              term: 'Mishna',
              def: 'Codification de la Torah orale réalisée par Rabbi Judah ha-Nassi vers 200 apr. J.-C., constituant la base du Talmud.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Un rouleau de Torah contient 304 805 lettres hébraïques. Sa copie prend généralement un an à un scribe professionnel.'
            },
            {
              front: 'Date clé : 70 apr. J.-C.',
              back: 'La destruction du Second Temple par les Romains bouleversa le judaïsme et rendit nécessaire la codification de la Torah orale.'
            },
            {
              front: 'Simhat Torah',
              back: 'Fête célébrant la fin et le recommencement immédiat du cycle annuel de lecture de la Torah, marquée par des danses joyeuses.'
            }
          ]
        },
        {
          slug: 'vedas',
          title: 'Les Vedas',
          description: 'Les textes les plus anciens de l\'hindouisme : hymnes, rituels et spéculation philosophique.',
          intro: 'Les Vedas (« savoir » en sanskrit) sont les textes sacrés les plus anciens de l\'hindouisme, composés entre 1500 et 500 av. J.-C. Considérés comme shruti (« ce qui est entendu »), ils sont réputés d\'origine divine, transmis aux sages (rishi) par révélation.',
          introHighlight: 'Les Vedas sont parmi les plus anciens textes religieux de l\'humanité encore en usage liturgique. Leur transmission orale parfaite pendant des millénaires constitue un exploit culturel remarquable.',
          sections: [
            {
              title: 'Les quatre Vedas',
              paragraphs: ['Le Rig-Veda, le plus ancien (vers 1500-1200 av. J.-C.), contient 1 028 hymnes adressés aux dieux védiques : Indra (roi des dieux), Agni (feu sacrificiel), Soma (breuvage sacré) et Varuna (ordre cosmique). Le Sama-Veda est un recueil de mélodies liturgiques tirées du Rig-Veda.', 'Le Yajur-Veda contient les formules rituelles pour les sacrifices. L\'Atharva-Veda, le plus tardif, rassemble des incantations, des charmes et des hymnes spéculatifs. Chaque Veda est associé à une catégorie de prêtres dans la liturgie sacrificielle.'],
              highlight: 'Le Rig-Veda est l\'un des plus anciens textes connus de l\'humanité. Ses 1 028 hymnes furent composés il y a environ 3 500 ans et transmis oralement avec une fidélité remarquable.'
            },
            {
              title: 'Brahmanas, Aranyakas et Upanishads',
              paragraphs: ['Chaque Veda est complété par des Brahmanas (commentaires rituels en prose), des Aranyakas (« textes de la forêt », réflexions des ermites) et des Upanishads (spéculations philosophiques). Cette littérature forme un ensemble cohérent qui va du rituel concret à la métaphysique abstraite.', 'Les Upanishads (vers 800-200 av. J.-C.) marquent un tournant décisif. Elles déplacent le centre de gravité du sacrifice extérieur vers la connaissance intérieure. Les grands thèmes — Brahman, Atman, karma, moksha — y sont développés pour la première fois.'],
              highlight: ''
            },
            {
              title: 'Transmission orale et mémorisation',
              paragraphs: ['Les Vedas furent transmis exclusivement par voie orale pendant plus de deux millénaires. Des techniques de mémorisation sophistiquées (pathas) garantissaient la fidélité de la transmission : récitation mot à mot, inversion des mots, combinaisons complexes.', 'Cette tradition orale est si précise que les textes védiques transmis dans différentes régions de l\'Inde pendant des siècles ne présentent pratiquement aucune variante. L\'UNESCO a inscrit la tradition védique au patrimoine culturel immatériel de l\'humanité en 2003.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de Vedas principaux existe-t-il ?',
              opts: ['2', '4', '6', '8'],
              correct: 1,
              explanation: 'Il existe quatre Vedas : le Rig-Veda, le Sama-Veda, le Yajur-Veda et l\'Atharva-Veda.'
            },
            {
              q: 'Quel est le Veda le plus ancien ?',
              opts: ['Sama-Veda', 'Rig-Veda', 'Yajur-Veda', 'Atharva-Veda'],
              correct: 1,
              explanation: 'Le Rig-Veda, composé entre 1500 et 1200 av. J.-C., est le plus ancien des quatre Vedas.'
            },
            {
              q: 'Que signifie le mot « shruti » ?',
              opts: ['Ce qui est écrit', 'Ce qui est entendu', 'Ce qui est chanté', 'Ce qui est sacré'],
              correct: 1,
              explanation: 'Shruti signifie « ce qui est entendu », désignant la révélation divine reçue par les sages (rishi).'
            },
            {
              q: 'Quels textes védiques développent les concepts de Brahman et d\'Atman ?',
              opts: ['Les Brahmanas', 'Les Aranyakas', 'Les Upanishads', 'Les Sutras'],
              correct: 2,
              explanation: 'Les Upanishads sont les textes philosophiques qui développent les concepts métaphysiques centraux de l\'hindouisme.'
            },
            {
              q: 'En quelle année l\'UNESCO a-t-elle inscrit la tradition védique au patrimoine immatériel ?',
              opts: ['1998', '2003', '2010', '2015'],
              correct: 1,
              explanation: 'L\'UNESCO a reconnu la tradition de récitation védique comme chef-d\'œuvre du patrimoine immatériel en 2003.'
            }
          ],
          definitions: [
            {
              term: 'Shruti',
              def: '« Ce qui est entendu » : désigne les textes védiques considérés comme révélés directement par le divin aux sages.'
            },
            {
              term: 'Upanishad',
              def: 'Textes philosophiques constituant la partie finale des Vedas, explorant les concepts de Brahman, Atman et moksha.'
            },
            {
              term: 'Rishi',
              def: 'Sage ou voyant qui, selon la tradition, reçut la révélation védique par audition divine.'
            },
            {
              term: 'Rig-Veda',
              def: 'Le plus ancien des quatre Vedas, contenant 1 028 hymnes adressés aux dieux, composés entre 1500 et 1200 av. J.-C.'
            }
          ],
          memos: [
            {
              front: 'Date clé',
              back: 'Le Rig-Veda date d\'environ 1500-1200 av. J.-C., ce qui en fait l\'un des plus anciens corpus littéraires de l\'humanité.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les techniques de mémorisation védiques sont si efficaces que le texte a été transmis sans erreur pendant plus de 3 000 ans avant d\'être mis par écrit.'
            }
          ]
        },
        {
          slug: 'tripitaka',
          title: 'Le Tripitaka',
          description: 'Le canon bouddhique : les trois corbeilles d\'enseignements du Bouddha.',
          intro: 'Le Tripitaka (« Trois Corbeilles » en pali : Tipitaka) est le canon des écritures bouddhistes, rassemblant les enseignements du Bouddha tels que transmis par ses disciples. Il constitue la base textuelle du bouddhisme Theravada et l\'un des corpus religieux les plus volumineux au monde.',
          introHighlight: 'Le Tripitaka pali est le plus ancien corpus complet d\'enseignements bouddhistes conservé. Il fut transmis oralement pendant quatre siècles avant d\'être mis par écrit au Sri Lanka au Ier siècle av. J.-C.',
          sections: [
            {
              title: 'Les trois corbeilles',
              paragraphs: ['Le Vinaya Pitaka (« corbeille de la discipline ») contient les règles monastiques : 227 préceptes pour les moines et 311 pour les nonnes. Il détaille les circonstances dans lesquelles chaque règle fut établie et les procédures de la vie communautaire.', 'Le Sutta Pitaka (« corbeille des discours ») rassemble les sermons du Bouddha, organisés en cinq collections (nikayas). L\'Abhidhamma Pitaka (« corbeille de la doctrine supérieure ») propose une analyse systématique et philosophique des enseignements.'],
              highlight: 'Le Tripitaka pali contient environ 20 000 pages imprimées, ce qui en fait l\'un des corpus religieux les plus volumineux jamais constitués.'
            },
            {
              title: 'Canons bouddhiques comparés',
              paragraphs: ['Outre le canon pali du Theravada, il existe un canon chinois (Da zang jing) et un canon tibétain (Kangyur et Tengyur). Le canon chinois contient des traductions de textes indiens ainsi que des œuvres originales chinoises. Il inclut de nombreux sutras du Mahayana absents du canon pali.', 'Le canon tibétain se divise en Kangyur (« paroles traduites du Bouddha », 108 volumes) et Tengyur (« traités traduits », 225 volumes). Ces trois canons reflètent les différentes branches du bouddhisme et leurs interprétations de l\'enseignement originel.'],
              highlight: ''
            },
            {
              title: 'Textes célèbres',
              paragraphs: ['Le Dhammapada (« Paroles de la Loi ») est le texte bouddhiste le plus populaire. Ce recueil de 423 versets attribués au Bouddha condense l\'essentiel de son enseignement moral en formules mémorables sur la maîtrise de soi, la compassion et la sagesse.', 'Le Sutra du Cœur (Prajnaparamita Hridaya Sutra) et le Sutra du Lotus (Saddharma Pundarika Sutra) sont des textes majeurs du Mahayana. Le Sutra du Cœur, en seulement 260 caractères chinois, résume la doctrine de la vacuité (shunyata), concept central du bouddhisme Mahayana.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Que signifie le mot « Tripitaka » ?',
              opts: ['Trois vérités', 'Trois corbeilles', 'Trois joyaux', 'Trois voies'],
              correct: 1,
              explanation: 'Tripitaka signifie « trois corbeilles » (tri = trois, pitaka = corbeille), désignant les trois sections du canon bouddhique.'
            },
            {
              q: 'Combien de préceptes le Vinaya impose-t-il aux moines ?',
              opts: ['5', '108', '227', '311'],
              correct: 2,
              explanation: 'Le Vinaya Pitaka contient 227 règles pour les moines (bhikkhus) et 311 pour les nonnes (bhikkhunis).'
            },
            {
              q: 'Où le Tripitaka pali fut-il mis par écrit pour la première fois ?',
              opts: ['En Inde', 'Au Sri Lanka', 'En Thaïlande', 'En Birmanie'],
              correct: 1,
              explanation: 'Le Tripitaka fut mis par écrit au Sri Lanka au Ier siècle av. J.-C., lors du quatrième concile bouddhiste.'
            },
            {
              q: 'Quel texte bouddhiste contient 423 versets de sagesse ?',
              opts: ['Le Sutra du Lotus', 'Le Sutra du Cœur', 'Le Dhammapada', 'Le Vinaya'],
              correct: 2,
              explanation: 'Le Dhammapada (« Paroles de la Loi ») rassemble 423 versets attribués au Bouddha, condensant son enseignement moral.'
            },
            {
              q: 'Combien de volumes contient le Kangyur tibétain ?',
              opts: ['54', '84', '108', '225'],
              correct: 2,
              explanation: 'Le Kangyur (« paroles traduites du Bouddha ») contient 108 volumes, complétés par les 225 volumes du Tengyur.'
            }
          ],
          definitions: [
            {
              term: 'Vinaya Pitaka',
              def: 'Première « corbeille » du Tripitaka, contenant les règles de discipline monastique établies par le Bouddha.'
            },
            {
              term: 'Sutta Pitaka',
              def: 'Deuxième « corbeille » du Tripitaka, rassemblant les discours et sermons du Bouddha.'
            },
            {
              term: 'Dhammapada',
              def: 'Recueil de 423 versets de sagesse attribués au Bouddha, texte bouddhiste le plus populaire et le plus traduit.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Ier siècle av. J.-C.',
              back: 'Le Tripitaka pali est mis par écrit au Sri Lanka, après environ quatre siècles de transmission orale.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le Tripitaka pali complet, gravé sur 729 steles de marbre, est conservé à la pagode Kuthodaw en Birmanie. Il est surnommé « le plus grand livre du monde ».'
            },
            {
              front: 'Shunyata',
              back: 'La vacuité (shunyata), concept central du Mahayana, affirme que rien n\'a d\'existence propre et indépendante. Elle est résumée dans le Sutra du Cœur.'
            }
          ]
        }
      ]
    },
    {
      slug: 'spiritualite',
      title: 'Spiritualité et mystique',
      description: 'Les voies intérieures des grandes traditions : mysticisme chrétien, soufisme, kabbale, méditation et chamanisme.',
      introText: 'La mystique désigne la quête d\'une expérience directe du divin, au-delà des dogmes et des rituels. Chaque grande tradition religieuse a développé des voies intérieures où le pratiquant cherche à atteindre l\'union avec l\'absolu par la prière, la méditation ou l\'ascèse.',
      introHighlight: 'Malgré leurs différences doctrinales, les traditions mystiques partagent des traits communs : le dépouillement de l\'ego, la recherche du silence intérieur et l\'expérience d\'une réalité qui transcende les mots.',
      lessons: [
        {
          slug: 'mysticisme-chretien',
          title: 'Mysticisme chrétien',
          description: 'La quête de l\'union à Dieu : des Pères du désert aux mystiques rhénans.',
          intro: 'Le mysticisme chrétien vise l\'union intime de l\'âme avec Dieu. Des ermites du désert égyptien aux grandes mystiques médiévales, cette tradition a produit une littérature spirituelle d\'une profondeur remarquable, explorant les étapes de l\'âme vers la contemplation divine.',
          introHighlight: 'Les trois voies de la mystique chrétienne — purification, illumination, union — décrivent un itinéraire spirituel que l\'on retrouve, sous des formes variées, dans presque toutes les traditions mystiques.',
          sections: [
            {
              title: 'Les Pères du désert',
              paragraphs: ['Au IIIe siècle, des chrétiens d\'Égypte se retirèrent dans le désert pour mener une vie de prière et d\'ascèse. Saint Antoine le Grand (vers 251-356) est considéré comme le père du monachisme chrétien. Les Apophtegmes des Pères du désert consignent leurs paroles de sagesse.', 'La prière du cœur (prière de Jésus) est une pratique issue de cette tradition : la répétition continuelle d\'une courte invocation vise à intérioriser la présence divine. Cette méthode influencera profondément l\'hésychasme orthodoxe et la spiritualité russe.'],
              highlight: 'Les Pères du désert ont fondé le monachisme chrétien et posé les bases d\'une spiritualité du dépouillement, du silence et de la prière continuelle.'
            },
            {
              title: 'Les grands mystiques médiévaux',
              paragraphs: ['Maître Eckhart (vers 1260-1328), dominicain allemand, enseigne le détachement radical (Gelassenheit) : l\'âme doit se vider de tout créé pour accueillir Dieu. Ses sermons en allemand, d\'une audace spéculative remarquable, influencèrent toute la mystique rhénane.', 'Thérèse d\'Avila (1515-1582) décrit dans Le Château intérieur sept demeures de l\'âme conduisant à l\'union mystique. Jean de la Croix (1542-1591) poète de La Nuit obscure, explore la purification de l\'âme par l\'épreuve et le silence de Dieu.'],
              highlight: ''
            },
            {
              title: 'La théologie négative',
              paragraphs: ['La théologie négative (ou apophatique) affirme que Dieu est au-delà de tout concept et de tout langage. Plutôt que de dire ce que Dieu est, elle dit ce qu\'il n\'est pas. Le Pseudo-Denys l\'Aréopagite (Ve siècle) développa cette approche dans sa Théologie mystique.', 'Cette tradition traverse tout le mysticisme chrétien. Le Nuage d\'inconnaissance (XIVe siècle), texte anonyme anglais, invite le contemplatif à abandonner toute image et tout concept pour entrer dans la « ténèbre lumineuse » de la présence divine.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui est considéré comme le père du monachisme chrétien ?',
              opts: ['Saint Benoît', 'Saint Antoine le Grand', 'Saint Augustin', 'Saint Basile'],
              correct: 1,
              explanation: 'Saint Antoine le Grand (vers 251-356), ermite égyptien, est considéré comme le fondateur du monachisme chrétien.'
            },
            {
              q: 'Quel concept central Maître Eckhart enseigne-t-il ?',
              opts: ['L\'illumination', 'Le détachement (Gelassenheit)', 'La mortification', 'L\'extase'],
              correct: 1,
              explanation: 'La Gelassenheit (détachement, sérénité) est le concept central d\'Eckhart : l\'âme doit se vider de tout pour accueillir Dieu.'
            },
            {
              q: 'Combien de demeures Thérèse d\'Avila décrit-elle dans Le Château intérieur ?',
              opts: ['3', '5', '7', '12'],
              correct: 2,
              explanation: 'Thérèse d\'Avila décrit sept demeures représentant les étapes progressives de l\'âme vers l\'union mystique avec Dieu.'
            },
            {
              q: 'Qu\'est-ce que la théologie apophatique ?',
              opts: ['L\'étude des anges', 'Une théologie qui dit ce que Dieu n\'est pas', 'La théologie de la libération', 'L\'étude des sacrements'],
              correct: 1,
              explanation: 'La théologie apophatique (négative) affirme que Dieu est au-delà de tout concept et ne peut être défini que par ce qu\'il n\'est pas.'
            },
            {
              q: 'Quel poème célèbre est l\'œuvre de Jean de la Croix ?',
              opts: ['Le Cantique des cantiques', 'La Nuit obscure', 'Le Château intérieur', 'Les Confessions'],
              correct: 1,
              explanation: 'La Nuit obscure de Jean de la Croix (1542-1591) décrit la purification de l\'âme dans l\'épreuve comme étape nécessaire vers l\'union divine.'
            }
          ],
          definitions: [
            {
              term: 'Apophatisme',
              def: 'Théologie négative affirmant que Dieu est au-delà de tout concept humain et ne peut être décrit que par ce qu\'il n\'est pas.'
            },
            {
              term: 'Hésychasme',
              def: 'Tradition mystique orthodoxe fondée sur la prière du cœur et la recherche de la paix intérieure (hesychia).'
            },
            {
              term: 'Gelassenheit',
              def: 'Concept de Maître Eckhart désignant le détachement radical de tout créé pour accueillir la présence divine.'
            }
          ],
          memos: [
            {
              front: 'Les trois voies',
              back: 'La mystique chrétienne décrit trois étapes : la voie purgative (purification des péchés), la voie illuminative (connaissance de Dieu) et la voie unitive (union mystique).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Maître Eckhart fut condamné post mortem par le pape en 1329 pour certaines de ses propositions jugées hérétiques. Il est aujourd\'hui reconsidéré comme l\'un des plus grands penseurs chrétiens.'
            }
          ]
        },
        {
          slug: 'soufisme',
          title: 'Soufisme',
          description: 'La dimension mystérieuse de l\'islam : la quête de l\'amour divin.',
          intro: 'Le soufisme (tasawwuf) est la dimension mystique et ésotérique de l\'islam. Les soufis cherchent à dépasser la pratique extérieure de la loi pour atteindre une connaissance intime de Dieu par l\'amour, le dépouillement et la méditation.',
          introHighlight: 'Le soufisme est né dès les premiers siècles de l\'islam, avec des ascètes comme Hasan al-Basri (VIIe s.) et Rabia al-Adawiyya, qui introduisit le thème de l\'amour désintéressé de Dieu.',
          sections: [
            {
              title: 'Les fondements du soufisme',
              paragraphs: ['Le soufisme repose sur la distinction entre l\'exotérisme (zahir, le manifeste) et l\'ésotérisme (batin, le caché) de la révélation coranique. Le soufi ne rejette pas la charia (loi religieuse), mais cherche à en pénétrer le sens profond. La voie (tariqa) est guidée par un maître spirituel (cheikh ou murshid).', 'Les stations (maqamat) et les états (ahwal) jalonnent le cheminement spirituel. Le repéntir, la patience, la confiance en Dieu, la gratitude sont des stations progressives. Les états (extase, contraction, expansion) sont des grâces divines accordées au chercheur.'],
              highlight: 'Le soufi poursuit trois niveaux de connaissance : l\'islam (soumission), l\'iman (foi) et l\'ihsan (excellence spirituelle), défini comme « adorer Dieu comme si tu Le voyais ».'
            },
            {
              title: 'Les grands maîtres soufis',
              paragraphs: ['Al-Hallaj (858-922) fut exécuté pour avoir proclamé « Ana al-Haqq » (« Je suis la Vérité »), expression de l\'union mystique jugée blasphématoire. Al-Ghazali (1058-1111) réconcilia le soufisme avec l\'orthodoxie sunnite dans son œuvre majeure La Revivification des sciences de la religion.', 'Rûmî (1207-1273), poète persan, est l\'auteur du Mathnawi, considéré comme le « Coran en langue persane ». Ibn Arabi (1165-1240) développa la doctrine de l\'unité de l\'être (wahdat al-wujud), affirmant que toute réalité est une manifestation de l\'Essence divine.'],
              highlight: ''
            },
            {
              title: 'Les confréries et le dhikr',
              paragraphs: ['Les confréries soufies (turuq, pluriel de tariqa) se structurèrent à partir du XIIe siècle. La Qadiriyya (fondée par Abd al-Qadir al-Jilani), la Naqshbandiyya et la Mevleviyya (les « derviches tourneurs » de Rûmî) sont parmi les plus répandues.', 'Le dhikr (« remémoration » de Dieu) est la pratique centrale du soufisme. Il peut être silencieux ou vocal, individuel ou collectif. Les séances collectives de dhikr impliquent parfois le chant, la musique (sama) et la danse, comme la célèbre danse giratoire des derviches tourneurs.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quelle phrase célèbre al-Hallaj a-t-il prononcée ?',
              opts: ['Allahu akbar', 'Ana al-Haqq', 'La ilaha illa Allah', 'Bismillah'],
              correct: 1,
              explanation: '« Ana al-Haqq » (« Je suis la Vérité/Dieu ») exprima l\'union mystique d\'al-Hallaj. Cette parole lui coûta la vie en 922.'
            },
            {
              q: 'Quel penseur a réconcilié le soufisme avec l\'orthodoxie sunnite ?',
              opts: ['Ibn Arabi', 'Al-Ghazali', 'Rûmî', 'Al-Hallaj'],
              correct: 1,
              explanation: 'Al-Ghazali (1058-1111) légitima le soufisme au sein de l\'islam sunnite dans La Revivification des sciences de la religion.'
            },
            {
              q: 'Comment appelle-t-on la pratique centrale de remémoration de Dieu dans le soufisme ?',
              opts: ['Salat', 'Dhikr', 'Hajj', 'Sawm'],
              correct: 1,
              explanation: 'Le dhikr (remémoration) est la répétition des noms de Dieu, pratiquée silencieusement ou collectivement avec chant et mouvement.'
            },
            {
              q: 'Qui est l\'auteur du Mathnawi ?',
              opts: ['Ibn Arabi', 'Al-Ghazali', 'Rûmî', 'Hafiz'],
              correct: 2,
              explanation: 'Rûmî (1207-1273) composa le Mathnawi, poème mystique de plus de 25 000 vers, chef-d\'œuvre de la littérature soufie.'
            },
            {
              q: 'Que désigne le terme « tariqa » ?',
              opts: ['Une prière', 'Une voie ou confrérie soufie', 'Un texte sacré', 'Un lieu de culte'],
              correct: 1,
              explanation: 'Tariqa signifie « voie » et désigne à la fois le chemin spirituel soufi et la confrérie organisée autour d\'un maître.'
            }
          ],
          definitions: [
            {
              term: 'Dhikr',
              def: 'Pratique de remémoration de Dieu par la répétition de ses noms ou de formules sacrées, individuelle ou collective.'
            },
            {
              term: 'Tariqa',
              def: 'Voie mystique soufie et, par extension, confrérie organisée autour d\'un maître spirituel et d\'une chaîne initiatique.'
            },
            {
              term: 'Wahdat al-wujud',
              def: 'Doctrine de l\'unité de l\'être formulée par Ibn Arabi : toute réalité est une manifestation de l\'Essence divine unique.'
            },
            {
              term: 'Fana',
              def: 'Extinction de l\'ego dans la présence divine, expérience mystique suprême dans le soufisme.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 922',
              back: 'Exécution du mystique al-Hallaj à Bagdad pour avoir proclamé « Ana al-Haqq », expression jugée blasphématoire de l\'union mystique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Rûmî est le poète le plus lu aux États-Unis. Ses vers sur l\'amour divin transcendent les frontières religieuses et culturelles depuis huit siècles.'
            },
            {
              front: 'Derviches tourneurs',
              back: 'La danse giratoire des Mevlevis, inspirée par Rûmî, symbolise la rotation des planètes autour du soleil divin. Inscrite au patrimoine immatériel de l\'UNESCO.'
            }
          ]
        },
        {
          slug: 'kabbale',
          title: 'Kabbale',
          description: 'La tradition ésotérique du judaïsme : l\'arbre de vie et les mystères divins.',
          intro: 'La Kabbale (qabbalah, « réception ») est la tradition mystique et ésotérique du judaïsme. Développée principalement en Provence et en Espagne aux XIIe-XIIIe siècles, elle propose une lecture symbolique de la Torah et une cosmologie fondée sur les dix sefirot.',
          introHighlight: 'La Kabbale ne se contente pas d\'interpréter la Torah : elle affirme que chaque lettre hébraïque possède une valeur numérique et symbolique révélant les structures cachées de la création.',
          sections: [
            {
              title: 'Les sefirot et l\'Arbre de Vie',
              paragraphs: ['La Kabbale enseigne que Dieu (Ein Sof, l\'Infini) s\'est manifesté à travers dix émanations appelées sefirot. Ces attributs divins forment l\'Arbre de Vie (Etz Haim), structure symbolique qui relie le monde divin au monde matériel. Les dix sefirot vont de Keter (la Couronne) à Malkhut (le Royaume).', 'L\'Arbre de Vie comprend trois colonnes : la colonne de droite (miséricorde), la colonne de gauche (rigueur) et la colonne centrale (équilibre). Chaque sefira représente un aspect de la réalité divine et correspond à une dimension de l\'expérience humaine.'],
              highlight: 'Les dix sefirot de l\'Arbre de Vie représentent le processus par lequel l\'Infini (Ein Sof) se manifeste dans le monde fini, depuis la volonté première (Keter) jusqu\'au monde matériel (Malkhut).'
            },
            {
              title: 'Le Zohar',
              paragraphs: ['Le Zohar (« Livre de la Splendeur »), rédigé en araméen, est le texte fondamental de la Kabbale. Attribué à Rabbi Shimon bar Yochaï (IIe siècle), il fut probablement composé par Moïse de Léon en Espagne au XIIIe siècle.', 'Le Zohar est un commentaire mystique de la Torah qui révèle les significations cachées des récits bibliques. Il développe une théosophie complexe intégrant cosmologie, psychologie et éthique dans une vision unifiée de la réalité.'],
              highlight: ''
            },
            {
              title: 'La Kabbale lourianique',
              paragraphs: ['Isaac Louria (1534-1572), dit le Ari, révolutionna la Kabbale à Safed (Galilée). Sa doctrine du tsimtsoum (contraction) explique la création : Dieu se contracta pour laisser un espace où le monde puisse exister. La shevirat ha-kelim (brisure des vases) explique l\'origine du mal.', 'Le tikkun (réparation) est la mission de l\'homme : par l\'observance des commandements et la prière, il peut rassembler les étincelles divines dispersées lors de la brisure et participer à la réparation du monde. Cette doctrine a profondément influencé le judaïsme moderne.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de sefirot compte l\'Arbre de Vie kabbalistique ?',
              opts: ['7', '10', '12', '22'],
              correct: 1,
              explanation: 'L\'Arbre de Vie comporte dix sefirot, de Keter (Couronne) à Malkhut (Royaume), représentant les émanations divines.'
            },
            {
              q: 'Quel est le texte fondamental de la Kabbale ?',
              opts: ['Le Talmud', 'Le Zohar', 'La Mishna', 'Le Sefer Yetzirah'],
              correct: 1,
              explanation: 'Le Zohar (« Livre de la Splendeur »), composé au XIIIe siècle, est l\'œuvre maîtresse de la Kabbale.'
            },
            {
              q: 'Que désigne le « tsimtsoum » dans la Kabbale lourianique ?',
              opts: ['L\'expansion de Dieu', 'La contraction de Dieu', 'La prière mystique', 'La méditation sur les lettres'],
              correct: 1,
              explanation: 'Le tsimtsoum est la contraction de Dieu en lui-même pour laisser un espace vide où la création puisse exister.'
            },
            {
              q: 'Qu\'est-ce que le tikkun ?',
              opts: ['Un texte sacré', 'La réparation du monde', 'Un rituel de purification', 'Un chant mystique'],
              correct: 1,
              explanation: 'Le tikkun (réparation) désigne la mission de l\'homme de réparer le monde en rassemblant les étincelles divines dispersées.'
            },
            {
              q: 'Où Isaac Louria a-t-il développé sa doctrine ?',
              opts: ['À Jérusalem', 'À Safed', 'À Babylone', 'À Cordoue'],
              correct: 1,
              explanation: 'Isaac Louria (le Ari) enseigna à Safed en Galilée, où se développa au XVIe siècle un important centre de Kabbale.'
            }
          ],
          definitions: [
            {
              term: 'Sefirot',
              def: 'Les dix émanations ou attributs divins formant l\'Arbre de Vie dans la Kabbale, de Keter (Couronne) à Malkhut (Royaume).'
            },
            {
              term: 'Tsimtsoum',
              def: 'Doctrine lourianique de la contraction divine : Dieu se retira en lui-même pour créer un espace où le monde puisse exister.'
            },
            {
              term: 'Tikkun',
              def: 'Réparation cosmique à laquelle l\'homme participe en rassemblant les étincelles divines dispersées lors de la brisure des vases.'
            },
            {
              term: 'Ein Sof',
              def: 'L\'Infini divin, aspect de Dieu totalement transcendant et inconnaissable, au-delà de toute manifestation.'
            }
          ],
          memos: [
            {
              front: 'Date clé : XIIIe siècle',
              back: 'Composition du Zohar en Espagne par Moïse de Léon, texte fondamental qui transformera l\'ensemble du judaïsme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La guématria, méthode kabbalistique, attribue une valeur numérique à chaque lettre hébraïque. Les mots de même valeur sont considérés comme liés par un sens caché.'
            }
          ]
        },
        {
          slug: 'meditation',
          title: 'Méditation',
          description: 'Les traditions méditatives du monde : techniques, écoles et bienfaits de la pratique.',
          intro: 'La méditation est une pratique universelle présente dans presque toutes les traditions spirituelles. Du zazen bouddhiste au yoga hindou, de l\'oraison chrétienne au dhikr soufi, les techniques méditatives visent à transformer la conscience par l\'attention, le silence et la présence.',
          introHighlight: 'La méditation n\'est pas une technique unique mais un ensemble de pratiques qui partagent un objectif commun : calmer le mental, développer la présence attentive et ouvrir la conscience à une réalité plus vaste.',
          sections: [
            {
              title: 'Les traditions méditatives orientales',
              paragraphs: ['Le yoga, système méditatif décrit par Patanjali dans les Yoga Sutras (IIe s. av. J.-C.), comprend huit membres (ashtanga) allant des règles éthiques à l\'absorption méditative (samadhi). La méditation vipassana (vision pénétrante) du bouddhisme Theravada cultive l\'observation détachée des sensations corporelles.', 'Le zazen (« méditation assise ») du bouddhisme zen japonais prône « shikantaza » : simplement s\'asseoir, sans objet ni but. La méditation transcendantale utilise la répétition silencieuse d\'un mantra. Le qigong et le tai-chi chinois combinent mouvement, respiration et concentration.'],
              highlight: 'Les Yoga Sutras de Patanjali définissent le yoga comme « l\'arrêt des fluctuations du mental » (chitta vritti nirodha), formule qui résume l\'essence de toute pratique méditative.'
            },
            {
              title: 'La pleine conscience (mindfulness)',
              paragraphs: ['La pleine conscience (mindfulness) est une adaptation lac d\'une pratique bouddhiste développée par Jon Kabat-Zinn à partir de 1979. Son programme MBSR (Mindfulness-Based Stress Reduction) a introduit la méditation dans les hôpitaux, les écoles et les entreprises.', 'La pleine conscience consiste à porter intentionnellement son attention sur l\'expérience présente, moment après moment, sans jugement. Des études neuroscientifiques ont montré ses effets sur la réduction du stress, la régulation émotionnelle et la plasticité cérébrale.'],
              highlight: ''
            },
            {
              title: 'Les effets de la méditation',
              paragraphs: ['Les recherches neuroscientifiques ont révélé que la méditation régulière modifie la structure et le fonctionnement du cerveau. L\'épaississement du cortex préfrontal (attention), la réduction de l\'amygdale (réactivité au stress) et le renforcement de l\'insula (conscience corporelle) ont été observés.', 'Les bénéfices documentés incluent la réduction de l\'anxiété et de la dépression, l\'amélioration de la concentration, le renforcement du système immunitaire et une meilleure régulation émotionnelle. Ces résultats ont conduit à l\'intégration de la méditation dans de nombreux protocoles médicaux.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui a développé le programme MBSR de pleine conscience ?',
              opts: ['Thich Nhat Hanh', 'Jon Kabat-Zinn', 'Matthieu Ricard', 'Deepak Chopra'],
              correct: 1,
              explanation: 'Jon Kabat-Zinn créa le programme MBSR (Mindfulness-Based Stress Reduction) en 1979 à l\'université du Massachusetts.'
            },
            {
              q: 'Combien de membres (angas) compte le yoga de Patanjali ?',
              opts: ['4', '6', '8', '12'],
              correct: 2,
              explanation: 'L\'ashtanga yoga de Patanjali comprend huit membres, de yama (éthique) à samadhi (absorption méditative).'
            },
            {
              q: 'Que signifie « zazen » ?',
              opts: ['Respiration profonde', 'Méditation en marchant', 'Méditation assise', 'Chant sacré'],
              correct: 2,
              explanation: 'Zazen signifie littéralement « méditation assise ». C\'est la pratique centrale du bouddhisme zen.'
            },
            {
              q: 'Quelle région du cerveau voit sa taille réduite par la méditation ?',
              opts: ['Le cortex préfrontal', 'L\'hippocampe', 'L\'amygdale', 'Le cervelet'],
              correct: 2,
              explanation: 'L\'amygdale, centre de la réactivité au stress, voit sa densité réduite chez les méditants réguliers.'
            },
            {
              q: 'Qu\'est-ce que la méditation vipassana ?',
              opts: ['Récitation de mantras', 'Vision pénétrante par l\'observation des sensations', 'Danse méditative', 'Visualisation créatrice'],
              correct: 1,
              explanation: 'Vipassana (« vision pénétrante ») est une technique bouddhiste fondée sur l\'observation attentive des sensations corporelles.'
            }
          ],
          definitions: [
            {
              term: 'Samadhi',
              def: 'État d\'absorption méditative profonde où la distinction sujet-objet s\'estompe, huitième membre du yoga de Patanjali.'
            },
            {
              term: 'Pleine conscience',
              def: 'Attention intentionnelle portée à l\'expérience présente, sans jugement. Adaptation laïque d\'une pratique bouddhiste.'
            },
            {
              term: 'Mantra',
              def: 'Syllabe, mot ou formule sacrée répétée silencieusement ou à voix haute comme support de méditation.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1979',
              back: 'Jon Kabat-Zinn fonde le programme MBSR, introduisant la méditation de pleine conscience dans le milieu médical occidental.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les moines bouddhistes expérimentés présentent une activité gamma cérébrale 25 fois supérieure à la normale, selon les recherches de Richard Davidson.'
            },
            {
              front: 'Nombre clé',
              back: 'On estime que 200 à 500 millions de personnes pratiquent une forme de méditation dans le monde.'
            }
          ]
        },
        {
          slug: 'chamanisme',
          title: 'Chamanisme',
          description: 'La plus ancienne pratique spirituelle : transes, guérisons et mondes invisibles.',
          intro: 'Le chamanisme est considéré comme la plus ancienne forme de spiritualité humaine, avec des traces remontant au Paléolithique. Présent sur tous les continents, il repose sur la figure du chamane, intermédiaire entre le monde visible et les mondes invisibles.',
          introHighlight: 'Le chamane n\'est ni un prêtre ni un sorcier : c\'est un spécialiste de la transe qui voyage dans les mondes spirituels pour guérir, diviner et maintenir l\'équilibre entre l\'humanité et la nature.',
          sections: [
            {
              title: 'Le voyage chamanique',
              paragraphs: ['Le voyage chamanique est une technique de transe contrôlée permettant au chamane de voyager dans les mondes invisibles. La cosmologie chamanique distingue généralement trois niveaux : le monde d\'en haut (céleste), le monde du milieu (terrestre) et le monde d\'en bas (souterrain).', 'La transe est induite par des méthodes variées : battement de tambour répétitif, chant, danse, jeûne, isolation sensorielle ou, dans certaines traditions, ingestion de plantes psychoactives. Le chamane conserve sa conscience pendant la transe et peut en rapporter des informations pour sa communauté.'],
              highlight: 'Mircea Eliade définit le chamanisme comme une « technique archaïque de l\'extase » : le chamane est celui qui maîtrise la transe pour voyager entre les mondes.'
            },
            {
              title: 'L\'initiation chamanique',
              paragraphs: ['L\'initiation chamanique implique généralement une expérience de mort et de renaissance symboliques. Le futur chamane traverse une crise grave (maladie, visions, folie apparente) au cours de laquelle son corps est démembré et recomposé par les esprits.', 'Cette épreuve initiatique est universelle : on la retrouve chez les chamanes sibériens, les hommes-médecine amérindiens et les nganga africains. Elle confère au chamane ses pouvoirs de guérison et sa capacité à communiquer avec les esprits.'],
              highlight: ''
            },
            {
              title: 'Le chamanisme dans le monde',
              paragraphs: ['Le chamanisme sibérien (d\'où vient le mot « chamane », du toungouse « saman ») est la référence classique. En Amérique du Nord, les traditions lakota, navajo et ojibwé comportent des pratiques chamaniques. En Amérique du Sud, l\'ayahuasca est utilisé dans les cérémonies des peuples amazoniens.', 'Le chamanisme connaît un renouveau contemporain. Le « néochamanisme » occidental, inspiré par les travaux de Michael Harner et Carlos Castaneda, adapte les techniques chamaniques traditionnelles à un cadre séculier. Cette tendance suscite des débats sur l\'appropriation culturelle.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'De quelle langue vient le mot « chamane » ?',
              opts: ['Sanskrit', 'Toungouse (Sibérie)', 'Quechua', 'Mongol'],
              correct: 1,
              explanation: 'Le mot « chamane » dérive du toungouse « saman », désignant le spécialiste rituel chez les peuples de Sibérie.'
            },
            {
              q: 'Comment Mircea Eliade définit-il le chamanisme ?',
              opts: ['Une religion primitive', 'Une technique archaïque de l\'extase', 'Une forme d\'animisme', 'Un culte des ancêtres'],
              correct: 1,
              explanation: 'Mircea Eliade définit le chamanisme comme une « technique archaïque de l\'extase » dans son ouvrage de référence Le Chamanisme (1951).'
            },
            {
              q: 'Quel instrument est le plus associé au voyage chamanique ?',
              opts: ['La flûte', 'Le tambour', 'La harpe', 'La cloche'],
              correct: 1,
              explanation: 'Le tambour est l\'instrument chamanique par excellence. Son battement répétitif (4-7 Hz) induit un état de conscience modifié.'
            },
            {
              q: 'Combien de niveaux cosmiques la cosmologie chamanique distingue-t-elle généralement ?',
              opts: ['2', '3', '5', '7'],
              correct: 1,
              explanation: 'La cosmologie chamanique distingue trois niveaux : le monde d\'en haut, le monde du milieu et le monde d\'en bas.'
            },
            {
              q: 'Qu\'est-ce que l\'initiation chamanique implique symboliquement ?',
              opts: ['Un pèlerinage', 'Une mort et une renaissance', 'Un jeûne de 40 jours', 'Un mariage sacré'],
              correct: 1,
              explanation: 'L\'initiation chamanique passe par une expérience de mort et de renaissance symboliques, où le corps du futur chamane est démembré puis recomposé.'
            }
          ],
          definitions: [
            {
              term: 'Chamane',
              def: 'Spécialiste de la transe qui sert d\'intermédiaire entre le monde humain et les mondes invisibles pour guérir, diviner et rétablir l\'équilibre.'
            },
            {
              term: 'Transe chamanique',
              def: 'État de conscience modifié contrôlé permettant au chamane de voyager dans les mondes spirituels tout en conservant sa lucidita.'
            },
            {
              term: 'Animisme',
              def: 'Croyance selon laquelle tous les êtres et les éléments de la nature possèdent une âme ou un esprit, contexte culturel fréquent du chamanisme.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1951',
              back: 'Publication du Chamanisme et les techniques archaïques de l\'extase de Mircea Eliade, ouvrage fondateur de l\'étude académique du chamanisme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Des peintures rupestres de plus de 30 000 ans dans les grottes de Lascaux et Chauvet pourraient représenter des chamanes en transe, ce qui ferait du chamanisme la plus ancienne pratique spirituelle humaine.'
            },
            {
              front: 'Tambour chamanique',
              back: 'Le battement répétitif du tambour chamanique (4-7 coups par seconde) correspond aux ondes theta du cerveau, associées aux états de transe et de rêverie.'
            }
          ]
        }
      ]
    },
    {
      slug: 'philosophie-religieuse',
      title: 'Philosophie religieuse',
      description: 'Les grands penseurs de la foi : Thomas d\'Aquin, Averroès, Maïmonide, Pascal et Kierkegaard.',
      introText: 'La philosophie religieuse explore les rapports entre la raison et la foi. Depuis l\'Antiquité, des penseurs ont tenté de concilier la réflexion philosophique avec les vérités révélées, produisant des systèmes intellectuels d\'une grande profondeur.',
      introHighlight: 'La tension entre foi et raison traverse toute l\'histoire de la pensée. Les philosophes religieux ne cherchent pas à remplacer la foi par la raison, mais à comprendre ce qu\'ils croient déjà.',
      lessons: [
        {
          slug: 'thomas-aquin',
          title: 'Thomas d\'Aquin',
          description: 'Le plus grand théologien médiéval : la synthèse de la foi chrétienne et de la philosophie d\'Aristote.',
          intro: 'Thomas d\'Aquin (1225-1274), dominicain italien, est l\'un des plus grands penseurs de l\'Occident. Sa Somme théologique constitue la synthèse la plus ambitieuse entre la philosophie aristotélicienne et la théologie chrétienne.',
          introHighlight: 'Thomas d\'Aquin a montré que la foi et la raison ne s\'opposent pas mais se complètent : la raison peut démontrer l\'existence de Dieu, mais seule la foi accède aux mystères révélés.',
          sections: [
            {
              title: 'Les cinq voies',
              paragraphs: ['Dans la Somme théologique, Thomas propose cinq preuves rationnelles de l\'existence de Dieu (quinque viae). La première voie part du mouvement : tout ce qui est mû est mû par un autre, il faut donc un Premier Moteur immobile. La deuxième suit la chaîne des causes jusqu\'à une Cause première.', 'La troisième voie part de la contingence des êtres pour conclure à un Être nécessaire. La quatrième s\'appuie sur les degrés de perfection (il faut un maximum absolu). La cinquième observe l\'ordre de la nature, qui suppose une Intelligence ordonnatrice.'],
              highlight: 'Les cinq voies de Thomas d\'Aquin ne sont pas des preuves au sens moderne, mais des arguments rationnels montrant que l\'existence de Dieu est accessible à la raison naturelle, indépendamment de la révélation.'
            },
            {
              title: 'Théologie naturelle et théologie révélée',
              paragraphs: ['Thomas distingue la théologie naturelle (ce que la raison peut connaître de Dieu) de la théologie révélée (ce que Dieu a révélé et que la raison seule ne peut atteindre). L\'existence de Dieu relève de la première, la Trinité de la seconde.', 'Cette distinction permet de fonder un dialogue entre philosophie et théologie sans que l\'une absorbe l\'autre. La raison prépare à la foi, la foi éclaire la raison. Thomas reprend la formule d\'Augustin : « Je crois pour comprendre, je comprends pour croire. »'],
              highlight: ''
            },
            {
              title: 'L\'héritage thomiste',
              paragraphs: ['L\'influence de Thomas d\'Aquin est immense. En 1879, le pape Léon XIII déclara le thomisme philosophie officielle de l\'Église catholique. Le néothomisme du XXe siècle, porté par Jacques Maritain et Étienne Gilson, appliqua ses principes aux questions modernes.', 'Au-delà du catholicisme, la pensée de Thomas a influencé la philosophie du droit naturel, l\'éthique des vertus et la métaphysique analytique contemporaine. Sa synthèse foi-raison reste un modèle de rigueur intellectuelle.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de voies Thomas d\'Aquin propose-t-il pour prouver l\'existence de Dieu ?',
              opts: ['3', '4', '5', '7'],
              correct: 2,
              explanation: 'Thomas propose cinq voies (quinque viae) dans la Somme théologique : mouvement, causalité, contingence, degrés de perfection et finalité.'
            },
            {
              q: 'Quel philosophe grec Thomas d\'Aquin synthétise-t-il avec la foi chrétienne ?',
              opts: ['Platon', 'Aristote', 'Socrate', 'Épicure'],
              correct: 1,
              explanation: 'Thomas réalisa une synthèse inédite entre la philosophie d\'Aristote (redécouverte au XIIIe siècle) et la théologie chrétienne.'
            },
            {
              q: 'À quel ordre religieux Thomas d\'Aquin appartenait-il ?',
              opts: ['Franciscain', 'Bénédictin', 'Dominicain', 'Jésuite'],
              correct: 2,
              explanation: 'Thomas d\'Aquin était dominicain (ordre des Prêcheurs), fondé par saint Dominique en 1216.'
            },
            {
              q: 'Quelle est l\'œuvre majeure de Thomas d\'Aquin ?',
              opts: ['Les Confessions', 'La Somme théologique', 'La Cité de Dieu', 'Les Méditations'],
              correct: 1,
              explanation: 'La Somme théologique (Summa Theologiae), rédigée entre 1265 et 1274, est l\'œuvre maîtresse de Thomas d\'Aquin.'
            },
            {
              q: 'En quelle année le thomisme fut-il déclaré philosophie officielle de l\'Église ?',
              opts: ['1274', '1545', '1879', '1962'],
              correct: 2,
              explanation: 'L\'encyclique Aeterni Patris de Léon XIII (1879) fit du thomisme la philosophie de référence de l\'Église catholique.'
            }
          ],
          definitions: [
            {
              term: 'Quinque viae',
              def: 'Les cinq voies de Thomas d\'Aquin pour démontrer l\'existence de Dieu par la raison naturelle, exposées dans la Somme théologique.'
            },
            {
              term: 'Théologie naturelle',
              def: 'Branche de la philosophie qui cherche à connaître Dieu par la seule raison, sans recours à la révélation.'
            },
            {
              term: 'Thomisme',
              def: 'Courant philosophique et théologique fondé sur la pensée de Thomas d\'Aquin, philosophie officielle du catholicisme depuis 1879.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1265-1274',
              back: 'Rédaction de la Somme théologique, l\'œuvre la plus systématique de la théologie chrétienne. Thomas mourut avant de l\'achever.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Thomas d\'Aquin aurait dicté simultanément à quatre secrétaires sur des sujets différents. Ses œuvres complètes représentent environ 8 millions de mots.'
            },
            {
              front: 'Surnom',
              back: 'Thomas d\'Aquin est surnommé le « Docteur angélique ». Ses condisciples l\'appelaient « le Bœuf muet de Sicile » en raison de sa corpulence et de son silence.'
            }
          ]
        },
        {
          slug: 'averroes',
          title: 'Averroès',
          description: 'Le plus grand commentateur d\'Aristote : raison, foi et la double vérité.',
          intro: 'Averroès (Ibn Rushd, 1126-1198), philosophe et juriste de Cordoue, est le plus célèbre commentateur arabe d\'Aristote. Son œuvre eut un impact considérable sur la philosophie médiévale chrétienne et juive, bien plus que sur la pensée islamique ultérieure.',
          introHighlight: 'Averroès défendit l\'autonomie de la philosophie face à la théologie. Pour lui, la vérité philosophique et la vérité religieuse ne peuvent se contredire car elles découlent de la même source divine.',
          sections: [
            {
              title: 'Le commentateur d\'Aristote',
              paragraphs: ['Averroès rédigea trois types de commentaires d\'Aristote : les grands commentaires (analyse détaillée phrase par phrase), les commentaires moyens et les épitomés (résumés). Ces travaux furent traduits en latin et en hébreu, devenant la référence dans les universités européennes.', 'Thomas d\'Aquin le désignait simplement comme « le Commentateur », comme on appelait Aristote « le Philosophe ». C\'est grâce à Averroès que l\'Europe médiévale redécouvrit la pensée d\'Aristote dans sa complétude.'],
              highlight: 'Averroès est surnommé « le Commentateur » dans la scolastique médiévale. Ses commentaires d\'Aristote firent autorité dans les universités européennes pendant trois siècles.'
            },
            {
              title: 'Le Traité décisif',
              paragraphs: ['Dans le Fasl al-maqal (Traité décisif), Averroès aborde la question du rapport entre philosophie et révélation. Il soutient que la philosophie est non seulement permise mais obligatoire pour celui qui en a la capacité, car le Coran invite à la réflexion rationnelle.', 'La vérité est une : si la philosophie et la révélation semblent se contredire, c\'est que l\'une ou l\'autre est mal interprétée. Le texte révélé doit alors être lu allégoriquement. Cette position fut mal comprise en Occident sous le nom de « théorie de la double vérité ».'],
              highlight: ''
            },
            {
              title: 'L\'averroïsme latin',
              paragraphs: ['Les thèses d\'Averroès furent reprises par Siger de Brabant et Boèce de Dacie à l\'université de Paris au XIIIe siècle. L\'averroïsme latin défendait l\'autonomie de la philosophie, l\'éternité du monde et l\'unité de l\'intellect agent.', 'Ces positions furent condamnées par l\'évêque de Paris Étienne Tempier en 1270 et 1277. Paradoxalement, ces condamnations stimulèrent la réflexion philosophique en obligeant les penseurs à mieux distinguer foi et raison, contribuant à la naissance de la science moderne.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Dans quelle ville Averroès est-il né ?',
              opts: ['Bagdad', 'Le Caire', 'Cordoue', 'Damas'],
              correct: 2,
              explanation: 'Averroès (Ibn Rushd) naquit à Cordoue en 1126, dans l\'Espagne musulmane (al-Andalus).'
            },
            {
              q: 'Comment Thomas d\'Aquin désignait-il Averroès ?',
              opts: ['Le Philosophe', 'Le Maître', 'Le Commentateur', 'Le Sage'],
              correct: 2,
              explanation: 'Thomas d\'Aquin appelait Averroès « le Commentateur » (Commentator) en référence à ses commentaires d\'Aristote.'
            },
            {
              q: 'Quel ouvrage traite du rapport entre philosophie et révélation ?',
              opts: ['La Métaphysique', 'Le Traité décisif', 'L\'Éthique', 'La République'],
              correct: 1,
              explanation: 'Le Fasl al-maqal (Traité décisif) démontre la compatibilité entre philosophie et révélation coranique.'
            },
            {
              q: 'En quelle année les thèses averroïstes furent-elles condamnées à Paris ?',
              opts: ['1215', '1277', '1348', '1492'],
              correct: 1,
              explanation: 'L\'évêque Étienne Tempier condamna 219 propositions averroïstes et aristotéliciennes en 1277.'
            },
            {
              q: 'Quel philosophe de Paris reprit les thèses d\'Averroès ?',
              opts: ['Abélard', 'Siger de Brabant', 'Duns Scot', 'Guillaume d\'Ockham'],
              correct: 1,
              explanation: 'Siger de Brabant fut le principal représentant de l\'averroïsme latin à l\'université de Paris au XIIIe siècle.'
            }
          ],
          definitions: [
            {
              term: 'Averroïsme',
              def: 'Courant philosophique médiéval inspiré d\'Averroès, défendant l\'autonomie de la philosophie et l\'éternité du monde.'
            },
            {
              term: 'Traité décisif',
              def: 'Œuvre d\'Averroès démontrant la compatibilité entre philosophie et révélation, et l\'obligation de pratiquer la réflexion rationnelle.'
            },
            {
              term: 'Double vérité',
              def: 'Doctrine faussement attribuée à Averroès selon laquelle une chose pourrait être vraie en philosophie et fausse en théologie.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1126-1198',
              back: 'Averroès vécut à Cordoue et à Marrakech. Il fut à la fois philosophe, médecin et grand cadi (juge suprême).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Dans La Divine Comédie de Dante, Averroès est placé dans les Limbes avec les grands philosophes païens, signe du respect que lui portait l\'Europe chrétienne.'
            }
          ]
        },
        {
          slug: 'maimonide',
          title: 'Maïmonide',
          description: 'Le grand philosophe juif médiéval : la raison au service de la Torah.',
          intro: 'Moïse Maïmonide (1138-1204), né à Cordoue, est le plus grand philosophe juif du Moyen Âge. Médecin, juriste et théologien, il produisit une œuvre immense qui reste la référence du judaïsme rationaliste.',
          introHighlight: 'Maïmonide formula les Treize Principes de la foi juive, encore récités aujourd\'hui dans la liturgie. Son Guide des égarés est le sommet de la philosophie juive médiévale.',
          sections: [
            {
              title: 'Le Guide des égarés',
              paragraphs: ['Le Guide des égarés (Moreh Nevukhim), rédigé en arabe vers 1190, s\'adresse aux intellectuels juifs déchirés entre la philosophie aristotélicienne et la foi biblique. Maïmonide montre que les deux sont compatibles si l\'on interprète correctement les textes sacrés.', 'L\'œuvre aborde les attributs divins (Dieu ne peut être décrit que négativement), la création du monde, la prophétie et la providence. Maïmonide y défend une théologie négative rigoureuse : on ne peut dire que ce que Dieu n\'est pas.'],
              highlight: 'Le Guide des égarés de Maïmonide est l\'œuvre maîtresse de la philosophie juive médiévale. Il influença profondément Thomas d\'Aquin, Spinoza et Leibniz.'
            },
            {
              title: 'La Mishné Torah',
              paragraphs: ['La Mishné Torah (1170-1180) est une codification systématique de l\'ensemble de la loi juive (halakha). En quatorze livres, Maïmonide organise logiquement les 613 commandements de la Torah et les discussions talmudiques, rendant la loi accessible sans recourir au Talmud.', 'Cette entreprise audacieuse suscita l\'admiration et la controverse. Certains rabbins critiquèrent Maïmonide pour ne pas citer ses sources talmudiques. Malgré ces polémiques, la Mishné Torah reste un ouvrage de référence fondamental dans le judaïsme.'],
              highlight: ''
            },
            {
              title: 'Les Treize Principes',
              paragraphs: ['Maïmonide formula Treize Principes de la foi juive dans son commentaire de la Mishna. Ils comprennent l\'existence de Dieu, son unicité, son incorporéité, son éternité, le caractère exclusif du culte divin, la prophétie, la supériorité de Moïse, l\'origine divine de la Torah et son immutabilité.', 'Les quatre derniers principes portent sur l\'omniscience divine, la rétribution, la venue du Messie et la résurrection des morts. Bien que contestés par certains rabbins, ces treize principes ont acquis un statut quasi canonique dans le judaïsme, mis en vers dans le poème Yigdal.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Où Maïmonide est-il né ?',
              opts: ['Jérusalem', 'Bagdad', 'Cordoue', 'Le Caire'],
              correct: 2,
              explanation: 'Maïmonide naquit à Cordoue en 1138. Sa famille fuit l\'Espagne sous la persécution almohade et s\'établit au Caire.'
            },
            {
              q: 'Comment s\'appelle l\'œuvre maîtresse de Maïmonide ?',
              opts: ['La Mishné Torah', 'Le Guide des égarés', 'Le Zohar', 'Le Kuzari'],
              correct: 1,
              explanation: 'Le Guide des égarés (Moreh Nevukhim) est l\'œuvre philosophique majeure de Maïmonide, conciliant Aristote et la Torah.'
            },
            {
              q: 'Combien de Principes de la foi Maïmonide a-t-il formulés ?',
              opts: ['5', '10', '13', '18'],
              correct: 2,
              explanation: 'Maïmonide formula Treize Principes de la foi juive, allant de l\'existence de Dieu à la résurrection des morts.'
            },
            {
              q: 'En quelle langue le Guide des égarés fut-il rédigé ?',
              opts: ['Hébreu', 'Arabe', 'Araméen', 'Latin'],
              correct: 1,
              explanation: 'Le Guide des égarés fut rédigé en judéo-arabe (arabe en caractères hébraïques), puis traduit en hébreu et en latin.'
            },
            {
              q: 'Combien de livres compose la Mishné Torah ?',
              opts: ['5', '10', '14', '24'],
              correct: 2,
              explanation: 'La Mishné Torah se compose de quatorze livres couvrant l\'ensemble de la loi juive.'
            }
          ],
          definitions: [
            {
              term: 'Moreh Nevukhim',
              def: 'Guide des égarés, œuvre philosophique majeure de Maïmonide conciliant la philosophie aristotélicienne et la Torah.'
            },
            {
              term: 'Halakha',
              def: 'L\'ensemble de la loi juive dérivée de la Torah et du Talmud, régissant la vie quotidienne du juif pratiquant.'
            },
            {
              term: 'Théologie négative',
              def: 'Approche philosophique de Maïmonide affirmant qu\'on ne peut décrire Dieu que par ce qu\'il n\'est pas, toute affirmation positive étant inadéquate.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1190',
              back: 'Rédaction du Guide des égarés au Caire, synthèse entre aristotélisme et judaïsme qui influencera la pensée occidentale.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Maïmonide était aussi médecin du sultan Saladin en Égypte. Son traité médical sur l\'asthme resta une référence pendant des siècles.'
            },
            {
              front: 'Épitaphe célèbre',
              back: '« De Moïse à Moïse, il n\'y eut personne comme Moïse » — épitaphe traditionnelle comparant Maïmonide au prophète Moïse.'
            }
          ]
        },
        {
          slug: 'pascal',
          title: 'Pascal',
          description: 'Le génie français entre science et foi : le pari, les Pensées et le jansénisme.',
          intro: 'Blaise Pascal (1623-1662), mathématicien, physicien et philosophe français, est une figure singulière de la pensée religieuse. Converti à un christianisme radical après une expérience mystique, il produisit dans les Pensées une apologie de la religion chrétienne d\'une puissance littéraire et intellectuelle inégalée.',
          introHighlight: 'Pascal refuse de réduire la foi à la raison : « Le cœur a ses raisons que la raison ne connaît point. » Il ouvre une voie existentielle vers Dieu, fondée sur l\'expérience du cœur.',
          sections: [
            {
              title: 'Le pari de Pascal',
              paragraphs: ['Le pari de Pascal est un argument pragmatique en faveur de la croyance en Dieu. Si Dieu existe et que je crois, je gagne tout (la vie éternelle). Si Dieu n\'existe pas et que je crois, je ne perds presque rien. En revanche, si Dieu existe et que je ne crois pas, je perds tout.', 'Cet argument ne prétend pas prouver l\'existence de Dieu. Il s\'adresse au libertin qui hésite : face à l\'incertitude, la raison commande de parier sur l\'existence de Dieu. C\'est l\'un des premiers raisonnements de la théorie de la décision.'],
              highlight: 'Le pari de Pascal n\'est pas une preuve de l\'existence de Dieu mais un argument de décision rationnelle face à l\'incertitude, préfigurant la théorie des jeux moderne.'
            },
            {
              title: 'Les Pensées',
              paragraphs: ['Les Pensées sont un ensemble de fragments retrouvés après la mort de Pascal. Ils devaient constituer une Apologie de la religion chrétienne. Pascal y dépeint la misère de l\'homme sans Dieu : le divertissement, l\'ennui, l\'angoisse devant l\'infini.', 'Pascal insiste sur les limites de la raison : elle ne peut ni prouver ni réfuter l\'existence de Dieu. La foi est un don de la grâce, une expérience du cœur. Son style fragmentaire, fulgurant, fait des Pensées un chef-d\'œuvre de la prose française.'],
              highlight: ''
            },
            {
              title: 'Pascal et Port-Royal',
              paragraphs: ['Pascal fut proche des jansénistes de Port-Royal, mouvement chrétien inspiré par saint Augustin insistant sur la grâce divine et la prédestination. Les Provinciales (1656-1657) sont une série de lettres satiriques attaquant la casuistique des jésuites.', 'L\'expérience mystique du 23 novembre 1654, la « nuit de feu », transforma définitivement Pascal. Il nota son expérience sur un papier cousu dans la doublure de son habit : « Feu. Dieu d\'Abraham, d\'Isaac et de Jacob, non des philosophes et des savants. »'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qu\'est-ce que le pari de Pascal ?',
              opts: ['Une preuve mathématique de Dieu', 'Un argument de décision en faveur de la croyance', 'Une théorie physique', 'Un jeu de hasard'],
              correct: 1,
              explanation: 'Le pari de Pascal est un argument pragmatique : face à l\'incertitude, il est rationnel de parier sur l\'existence de Dieu.'
            },
            {
              q: 'Quelle œuvre de Pascal attaque la casuistique des jésuites ?',
              opts: ['Les Pensées', 'Les Provinciales', 'Le Mémorial', 'Le Traité du vide'],
              correct: 1,
              explanation: 'Les Provinciales (1656-1657) sont dix-huit lettres satiriques dans lesquelles Pascal dénonce le laxisme moral de la casuistique jésuite.'
            },
            {
              q: 'De quel mouvement religieux Pascal était-il proche ?',
              opts: ['Jésuites', 'Protestants', 'Jansénistes', 'Quakers'],
              correct: 2,
              explanation: 'Pascal était lié aux jansénistes de Port-Royal, courant augustinien insistant sur la grâce et la prédestination.'
            },
            {
              q: 'Quand a eu lieu la « nuit de feu » de Pascal ?',
              opts: ['1642', '1654', '1660', '1662'],
              correct: 1,
              explanation: 'Le 23 novembre 1654, Pascal vécut une expérience mystique intense qu\'il consigna sur un parchemin cousu dans son habit.'
            },
            {
              q: 'Quelle célèbre formule de Pascal porte sur le cœur ?',
              opts: ['Le cœur est faible', 'Le cœur a ses raisons que la raison ne connaît point', 'Le cœur est le siège de Dieu', 'Le cœur ne trompe jamais'],
              correct: 1,
              explanation: 'Cette formule des Pensées oppose la connaissance intuitive du cœur à la démonstration rationnelle.'
            }
          ],
          definitions: [
            {
              term: 'Pari de Pascal',
              def: 'Argument de décision montrant qu\'il est rationnel de croire en Dieu face à l\'incertitude, car le gain potentiel est infini.'
            },
            {
              term: 'Jansénisme',
              def: 'Mouvement chrétien inspiré de saint Augustin, insistant sur la corruption de la nature humaine et la nécessité de la grâce divine.'
            },
            {
              term: 'Divertissement',
              def: 'Concept pascalien désignant tout ce qui détourne l\'homme de la réflexion sur sa condition misérable et sa mortalité.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 23 novembre 1654',
              back: 'La « nuit de feu » : expérience mystique de Pascal, décrite dans le Mémorial cousu dans son habit et découvert après sa mort.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Pascal inventa la première machine à calculer (la Pascaline) à 19 ans, et formula les lois de la pression atmosphérique avant de se consacrer à la religion.'
            },
            {
              front: 'Citation',
              back: '« L\'homme n\'est qu\'un roseau, le plus faible de la nature, mais c\'est un roseau pensant. » — Pensées, fragment 347.'
            }
          ]
        },
        {
          slug: 'kierkegaard',
          title: 'Kierkegaard',
          description: 'Le père de l\'existentialisme : le saut de la foi et l\'angoisse devant Dieu.',
          intro: 'Søren Kierkegaard (1813-1855), philosophe danois, est le fondateur de l\'existentialisme. Contre le système abstrait de Hegel, il place l\'individu concret et son rapport personnel à Dieu au centre de la réflexion. Sa pensée a profondément influencé la philosophie et la théologie du XXe siècle.',
          introHighlight: 'Kierkegaard s\'oppose à toute réduction de la foi à la raison. La foi est un « saut » dans l\'absurde, une décision personnelle et passionnée que nul argument ne peut remplacer.',
          sections: [
            {
              title: 'Les trois stades de l\'existence',
              paragraphs: ['Kierkegaard décrit trois stades de l\'existence. Le stade esthétique est celui de la jouissance immédiate, de la séduction et du divertissement. Le séducteur de son Journal du séducteur en est l\'illustration. Le stade éthique est celui de l\'engagement moral, du mariage, du devoir.', 'Le stade religieux est le plus élevé. Il implique un « saut » au-delà de la raison et de la morale. Abraham, prêt à sacrifier Isaac sur ordre de Dieu, en est le modèle : il suspend l\'éthique au nom d\'un rapport absolu à l\'Absolu.'],
              highlight: 'Les trois stades de l\'existence (esthétique, éthique, religieux) ne sont pas une progression automatique mais des choix existentiels radicaux impliquant un « saut » d\'un stade à l\'autre.'
            },
            {
              title: 'Crainte et Tremblement',
              paragraphs: ['Dans Crainte et Tremblement (1843), Kierkegaard médite sur le sacrifice d\'Abraham (Genèse 22). Abraham reçoit de Dieu l\'ordre de sacrifier Isaac, son fils unique. Il obéit sans pouvoir se justifier devant quiconque : sa foi est absolument personnelle.', 'Kierkegaard nomme cela la « suspension téléologique de l\'éthique » : la relation de l\'individu à Dieu transcende les normes morales universelles. Le « chevalier de la foi » vit dans une solitude radicale, incompréhensible au monde extérieur.'],
              highlight: ''
            },
            {
              title: 'L\'angoisse et le désespoir',
              paragraphs: ['Dans Le Concept de l\'angoisse (1844), Kierkegaard analyse l\'angoisse comme le « vertige de la liberté ». Face à l\'infinité des possibles, l\'homme éprouve une angoisse fondamentale qui révèle sa condition d\'être libre et fini devant Dieu.', 'La Maladie à la mort (1849) définit le désespoir comme la « maladie mortelle » : ne pas être soi-même, ou vouloir être soi-même sans Dieu. Le désespoir est universel, mais la plupart des hommes l\'ignorent. Seule la foi permet de fonder le moi dans la puissance qui l\'a posé.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Combien de stades de l\'existence Kierkegaard décrit-il ?',
              opts: ['2', '3', '4', '5'],
              correct: 1,
              explanation: 'Kierkegaard distingue trois stades : esthétique (jouissance), éthique (devoir) et religieux (foi).'
            },
            {
              q: 'Quel personnage biblique est au centre de Crainte et Tremblement ?',
              opts: ['Moïse', 'Job', 'Abraham', 'David'],
              correct: 2,
              explanation: 'Kierkegaard médite sur Abraham prêt à sacrifier Isaac, modèle du « chevalier de la foi » qui transcende l\'éthique.'
            },
            {
              q: 'Comment Kierkegaard définit-il l\'angoisse ?',
              opts: ['La peur de la mort', 'Le vertige de la liberté', 'La solitude du croyant', 'Le doute intellectuel'],
              correct: 1,
              explanation: 'L\'angoisse est le « vertige de la liberté » : le malaise devant l\'infinité des possibles qui s\'ouvrent à l\'être libre.'
            },
            {
              q: 'Contre quel philosophe Kierkegaard s\'élevait-il principalement ?',
              opts: ['Kant', 'Hegel', 'Descartes', 'Nietzsche'],
              correct: 1,
              explanation: 'Kierkegaard s\'opposait au système abstrait de Hegel, lui reprochant d\'oublier l\'individu concret au profit de l\'Esprit universel.'
            },
            {
              q: 'Qu\'est-ce que la « suspension téléologique de l\'éthique » ?',
              opts: ['L\'abandon de toute morale', 'La foi transcendant les normes morales universelles', 'La supériorité de l\'éthique sur la foi', 'Le respect des lois divines'],
              correct: 1,
              explanation: 'C\'est le moment où la relation absolue de l\'individu à Dieu dépasse et suspend les normes morales universelles, comme dans le sacrifice d\'Abraham.'
            }
          ],
          definitions: [
            {
              term: 'Saut de la foi',
              def: 'Décision existentielle par laquelle l\'individu s\'engage envers Dieu au-delà de ce que la raison peut justifier.'
            },
            {
              term: 'Angoisse',
              def: 'Chez Kierkegaard, le « vertige de la liberté » face à l\'infinité des possibles, sentiment révélateur de la condition humaine.'
            },
            {
              term: 'Désespoir',
              def: '« Maladie mortelle » selon Kierkegaard : état de celui qui ne parvient pas à fonder son moi dans sa relation à Dieu.'
            },
            {
              term: 'Chevalier de la foi',
              def: 'Figure kierkegaardienne désignant celui qui vit dans une foi absolue et personnelle, au-delà de toute justification rationnelle ou morale.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1843',
              back: 'Publication de Crainte et Tremblement et de Ou bien... ou bien, deux œuvres fondatrices de l\'existentialisme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Kierkegaard publiait sous de nombreux pseudonymes (Johannes de Silentio, Anti-Climacus, Constantin Constantius), chacun représentant un stade de l\'existence différent.'
            },
            {
              front: 'Influence',
              back: 'Kierkegaard a influencé à la fois l\'existentialisme athée (Sartre, Heidegger) et la théologie protestante du XXe siècle (Karl Barth, Paul Tillich).'
            }
          ]
        }
      ]
    },
    {
      slug: 'religions-monde',
      title: 'Religions du monde',
      description: 'Les traditions religieuses moins connues en Occident : taoïsme, shintoïsme, sikhisme, jaïnisme et zoroastrisme.',
      introText: 'Au-delà des cinq grandes religions, le monde compte de nombreuses traditions spirituelles qui ont façonné des civilisations entières. Du taoïsme chinois au zoroastrisme persan, ces religions offrent des visions du monde originales et des sagesses millénaires.',
      introHighlight: 'Ces traditions, parfois méconnues en Occident, comptent ensemble des centaines de millions de fidèles et continuent d\'influencer la culture, l\'art et la pensée de leurs régions d\'origine.',
      lessons: [
        {
          slug: 'taoisme',
          title: 'Taoïsme',
          description: 'La voie de l\'harmonie : le Tao, le yin et le yang, et la sagesse de Lao Tseu.',
          intro: 'Le taoïsme est une tradition philosophique et religieuse chinoise fondée sur le concept de Tao (« la Voie »). Né au VIe siècle av. J.-C. avec Lao Tseu et Zhuangzi, il a profondément influencé la civilisation chinoise dans tous ses aspects : philosophie, médecine, arts martiaux, peinture et poésie.',
          introHighlight: 'Le Tao est le principe fondamental de l\'univers : indicible, infini, il engendre toute chose et les résorbe. « Le Tao qu\'on peut nommer n\'est pas le vrai Tao », écrit Lao Tseu.',
          sections: [
            {
              title: 'Le Tao Te King',
              paragraphs: ['Le Tao Te King (Daodejing), attribué à Lao Tseu, est le texte fondateur du taoïsme. En 81 courts chapitres (environ 5 000 caractères), il expose la nature du Tao, la vertu (de) et l\'art du gouvernement. C\'est l\'un des textes les plus traduits au monde après la Bible.', 'Le Tao Te King enseigne le wu wei (non-agir) : non pas l\'inaction, mais l\'action spontanée et naturelle, sans effort ni contrainte. L\'eau, qui s\'écoule toujours vers le bas et prend la forme de son contenant, est le symbole préféré de cette sagesse.'],
              highlight: 'Le wu wei (non-agir) ne signifie pas la passivité mais l\'action en harmonie avec le flux naturel des choses. L\'eau, douce et souple, finit par éroder la roche la plus dure.'
            },
            {
              title: 'Le yin et le yang',
              paragraphs: ['La cosmologie taoïste repose sur la complémentarité du yin (principe féminin, réceptif, sombre) et du yang (principe masculin, actif, lumineux). Ces deux forces ne s\'opposent pas mais se complètent et se transforment l\'une en l\'autre dans un mouvement perpétuel.', 'Le symbole du taijitu (cercle noir et blanc) illustre cette interdépendance : chaque moitié contient un point de la couleur opposée, montrant que le yin contient toujours une part de yang et inversement. Ce principe s\'applique à la médecine, aux arts martiaux et à la cuisine chinoise.'],
              highlight: ''
            },
            {
              title: 'Le taoïsme religieux',
              paragraphs: ['Le taoïsme philosophique (daojia) fut complété au IIe siècle apr. J.-C. par un taoïsme religieux organisé (daojiao) avec ses temples, ses prêtres et ses rituels. Le mouvement des Maîtres célestes, fondé par Zhang Daoling, est la première Église taoïste.', 'Le taoïsme religieux développa des pratiques de longue vie (alchimie interne, qigong, tai-chi), un panthéon de divinités et un riche corpus de textes rassemblés dans le Canon taoïste (Daozang), qui compte près de 1 500 ouvrages.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel est le texte fondateur du taoïsme ?',
              opts: ['Les Entretiens', 'Le Tao Te King', 'Le Yi King', 'Le Livre des Rites'],
              correct: 1,
              explanation: 'Le Tao Te King (Daodejing), attribué à Lao Tseu, est le texte fondateur du taoïsme, en 81 chapitres.'
            },
            {
              q: 'Que signifie le wu wei ?',
              opts: ['La méditation profonde', 'Le non-agir', 'La prière', 'Le combat intérieur'],
              correct: 1,
              explanation: 'Le wu wei (non-agir) désigne l\'action spontanée et naturelle, en harmonie avec le flux du Tao.'
            },
            {
              q: 'Quels sont les deux principes cosmologiques du taoïsme ?',
              opts: ['Bien et mal', 'Yin et yang', 'Ciel et terre', 'Corps et esprit'],
              correct: 1,
              explanation: 'Le yin et le yang sont les deux principes complémentaires de la cosmologie taoïste, en perpétuelle transformation mutuelle.'
            },
            {
              q: 'Combien de caractères chinois compte approximativement le Tao Te King ?',
              opts: ['1 000', '5 000', '10 000', '50 000'],
              correct: 1,
              explanation: 'Le Tao Te King est remarquablement concis : environ 5 000 caractères pour 81 chapitres.'
            },
            {
              q: 'Qui a fondé le premier mouvement taoïste organisé ?',
              opts: ['Lao Tseu', 'Zhuangzi', 'Zhang Daoling', 'Confucius'],
              correct: 2,
              explanation: 'Zhang Daoling fonda le mouvement des Maîtres célestes au IIe siècle, première organisation religieuse taoïste.'
            }
          ],
          definitions: [
            {
              term: 'Tao',
              def: 'La « Voie », principe fondamental et indicible de l\'univers dans la pensée taoïste, source et fin de toute chose.'
            },
            {
              term: 'Wu wei',
              def: 'Non-agir ou action sans effort, en harmonie avec le flux naturel du Tao. Ne désigne pas la passivité mais l\'action spontanée.'
            },
            {
              term: 'Yin et yang',
              def: 'Principes complémentaires de la cosmologie chinoise : le yin (réceptif, sombre, féminin) et le yang (actif, lumineux, masculin).'
            }
          ],
          memos: [
            {
              front: 'Date clé : VIe siècle av. J.-C.',
              back: 'Époque traditionnelle de Lao Tseu. Selon la légende, il rédigea le Tao Te King avant de disparaître vers l\'Ouest, monté sur un buffle.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le Tao Te King est le texte le plus traduit au monde après la Bible. On en dénombre plus de 250 traductions en langues occidentales.'
            },
            {
              front: 'Nombre clé',
              back: 'Le Canon taoïste (Daozang) rassemble près de 1 500 ouvrages, soit l\'un des plus vastes corpus religieux au monde.'
            }
          ]
        },
        {
          slug: 'shintoisme',
          title: 'Shintoïsme',
          description: 'La voie des dieux : les kami, les sanctuaires et la spiritualité japonaise.',
          intro: 'Le shinto (« la voie des dieux ») est la religion traditionnelle du Japon. Sans fondateur, sans dogme fixé et sans écriture canonique unique, il est fondé sur la vénération des kami, esprits divins présents dans la nature, les ancêtres et les phénomènes naturels.',
          introHighlight: 'Le shinto est indissociable de l\'identité japonaise. Il coexiste harmonieusement avec le bouddhisme depuis le VIe siècle : la plupart des Japonais pratiquent les deux traditions simultanément.',
          sections: [
            {
              title: 'Les kami et la nature sacrée',
              paragraphs: ['Les kami sont les êtres divins ou esprits sacrés du shinto. Ils habitent les montagnes, les rivières, les arbres, les rochers et les phénomènes naturels. Amaterasu, la déesse du soleil, est la kami suprême et l\'ancêtre mythique de la famille impériale.', 'Le shinto ne distingue pas radicalement le sacré du profane. Tout élément de la nature peut abriter un kami. Cette vision anime un respect profond pour l\'environnement. Les torii (portails vermillon) marquent l\'entrée des espaces sacrés.'],
              highlight: 'Le shinto reconnaît « huit millions de kami » (yaoyorozu no kami), expression symbolisant leur nombre infini. Tout dans la nature peut être sacré.'
            },
            {
              title: 'Les sanctuaires et les rituels',
              paragraphs: ['Les sanctuaires shinto (jinja) sont des lieux de vénération des kami. Le plus sacré est le grand sanctuaire d\'Ise, dédié à Amaterasu, reconstruit tous les vingt ans selon une tradition millénaire. Chaque village possède son propre sanctuaire pour le kami local.', 'Les rituels shinto (matsuri) rythment la vie japonaise : purifications (harai), offrandes (shinsen), danses sacrées (kagura). Les fêtes des sanctuaires, avec leurs processions de chars sacrés (mikoshi), sont des moments de joie communautaire.'],
              highlight: ''
            },
            {
              title: 'Shinto et identité japonaise',
              paragraphs: ['Le Kojiki (712) et le Nihon Shoki (720) sont les plus anciens textes japonais. Ils racontent la création des îles japonaises par les dieux Izanagi et Izanami, la naissance d\'Amaterasu et les origines divines de la lignée impériale.', 'Après la Seconde Guerre mondiale, le shinto d\'État (instrument de nationalisme) fut aboli et l\'empereur renonca à sa divinité. Le shinto contemporain est redevenu une religion populaire marquée par la célébration de la nature, des saisons et des passages de la vie.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui est la kami suprême du shinto ?',
              opts: ['Izanagi', 'Susanoo', 'Amaterasu', 'Tsukuyomi'],
              correct: 2,
              explanation: 'Amaterasu, déesse du soleil, est la kami suprême du shinto et l\'ancêtre mythique de la famille impériale japonaise.'
            },
            {
              q: 'Que sont les kami ?',
              opts: ['Des prêtres', 'Des esprits divins présents dans la nature', 'Des textes sacrés', 'Des temples'],
              correct: 1,
              explanation: 'Les kami sont les êtres divins ou esprits sacrés du shinto, résidant dans les éléments de la nature, les ancêtres et les phénomènes naturels.'
            },
            {
              q: 'Tous les combien d\'années le sanctuaire d\'Ise est-il reconstruit ?',
              opts: ['10 ans', '20 ans', '50 ans', '100 ans'],
              correct: 1,
              explanation: 'Le grand sanctuaire d\'Ise est entièrement déconstruit et reconstruit tous les 20 ans, selon une tradition remontant au VIIe siècle.'
            },
            {
              q: 'Comment s\'appellent les portails marquant l\'entrée d\'un sanctuaire ?',
              opts: ['Mikoshi', 'Torii', 'Kagura', 'Harai'],
              correct: 1,
              explanation: 'Les torii sont les portails vermillon qui marquent la frontière entre l\'espace profane et l\'espace sacré d\'un sanctuaire shinto.'
            },
            {
              q: 'Quel est le plus ancien texte mythologique japonais ?',
              opts: ['Le Man\'yoshu', 'Le Genji monogatari', 'Le Kojiki', 'Le Tao Te King'],
              correct: 2,
              explanation: 'Le Kojiki (Chronique des choses anciennes, 712) est le plus ancien texte japonais, relatant la mythologie et l\'histoire du Japon.'
            }
          ],
          definitions: [
            {
              term: 'Kami',
              def: 'Esprits divins ou sacrés du shinto, présents dans la nature, les ancêtres et les phénomènes extraordinaires.'
            },
            {
              term: 'Torii',
              def: 'Portail traditionnel japonais marquant l\'entrée d\'un espace sacré shinto, généralement peint en vermillon.'
            },
            {
              term: 'Matsuri',
              def: 'Fête ou festival lié à un sanctuaire shinto, comprenant rituels, processions et réjouissances communautaires.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 712',
              back: 'Rédaction du Kojiki, premier texte japonais, relatant la mythologie de la création du Japon par les dieux Izanagi et Izanami.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Il existe environ 80 000 sanctuaires shinto au Japon, soit un sanctuaire pour 1 600 habitants. La plupart des Japonais fréquentent à la fois temples bouddhistes et sanctuaires shinto.'
            },
            {
              front: 'Expression clé',
              back: '« Yaoyorozu no kami » (huit millions de kami) symbolise le nombre infini d\'esprits divins dans le shinto, présents dans toute la nature.'
            }
          ]
        },
        {
          slug: 'sikhisme',
          title: 'Sikhisme',
          description: 'La religion fondée par Guru Nanak : monothéisme, égalité et service.',
          intro: 'Le sikhisme est une religion monothéiste fondée au Pendjab (Inde) au XVe siècle par Guru Nanak (1469-1539). Avec environ 30 millions de fidèles, c\'est la cinquième religion du monde. Elle rejette le système des castes et affirme l\'égalité de tous les êtres humains.',
          introHighlight: 'Le sikhisme se présente comme une voie distincte de l\'hindouisme et de l\'islam. Son message central est l\'unité de Dieu (Ik Onkar), l\'égalité entre les hommes et le service désintéressé (seva).',
          sections: [
            {
              title: 'Guru Nanak et les dix gurus',
              paragraphs: ['Guru Nanak, né en 1469, reçut une révélation divine après une immersion mystique dans une rivière. Il en émergea avec ce message : « Il n\'y a ni hindou ni musulman. » Il voyagea pendant trente ans pour enseigner l\'unité de Dieu et la fraternité humaine.', 'Dix gurus successifs guidèrent la communauté sikhe de 1469 à 1708. Le dixième et dernier, Guru Gobind Singh, créa la Khalsa (communauté des initiés) et déclara le Guru Granth Sahib (texte sacré) comme guru éternel et définitif.'],
              highlight: 'Le sikhisme est la seule religion dont le texte sacré (Guru Granth Sahib) est considéré comme un guru vivant et traité avec les mêmes égards qu\'une personne.'
            },
            {
              title: 'Les trois piliers du sikhisme',
              paragraphs: ['La vie sikhe repose sur trois piliers : Naam Japna (méditation sur le nom de Dieu), Kirat Karni (gagner honnêtement sa vie) et Vand Chakna (partager avec les autres). Ces principes réconcilient spiritualité et vie sociale active.', 'Le langar (cuisine communautaire gratuite) est une institution fondamentale. Chaque gurdwara (temple sikh) offre des repas gratuits à tous, sans distinction de religion, de caste ou de statut social. Le Temple d\'Or d\'Amritsar nourrit quotidiennement plus de 100 000 personnes.'],
              highlight: ''
            },
            {
              title: 'La Khalsa et les cinq K',
              paragraphs: ['En 1699, Guru Gobind Singh créa la Khalsa, ordre de sikhs baptisés portant les cinq symboles d\'identité appelés les cinq K : le kesh (cheveux non coupés), le kangha (peigne), le kara (bracelet d\'acier), le kachera (sous-vêtement) et le kirpan (épée cérémonielle).', 'Le turban (dastar), bien que n\'étant pas l\'un des cinq K, est porté pour couvrir les cheveux non coupés et est devenu le symbole le plus visible de l\'identité sikhe. Les hommes portent le nom Singh (« lion ») et les femmes Kaur (« princesse »), abolissant les noms de caste.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui est le fondateur du sikhisme ?',
              opts: ['Guru Gobind Singh', 'Guru Nanak', 'Guru Arjan', 'Kabir'],
              correct: 1,
              explanation: 'Guru Nanak (1469-1539) fonda le sikhisme au Pendjab après une expérience mystique lui révélant l\'unité de Dieu.'
            },
            {
              q: 'Combien de gurus ont guidé la communauté sikhe ?',
              opts: ['5', '7', '10', '12'],
              correct: 2,
              explanation: 'Dix gurus guidèrent les sikhs de 1469 à 1708, avant que le Guru Granth Sahib ne devienne le guru éternel.'
            },
            {
              q: 'Que désigne le « langar » ?',
              opts: ['Un temple sikh', 'Une cuisine communautaire gratuite', 'Un texte sacré', 'Un rituel de baptme'],
              correct: 1,
              explanation: 'Le langar est la cuisine communautaire où des repas gratuits sont servis à tous sans distinction, pilier de la vie sikhe.'
            },
            {
              q: 'Combien de « K » symbolisent l\'identité sikhe ?',
              opts: ['3', '4', '5', '7'],
              correct: 2,
              explanation: 'Les cinq K (kesh, kangha, kara, kachera, kirpan) sont les symboles d\'identité des sikhs baptisés de la Khalsa.'
            },
            {
              q: 'Comment s\'appelle le temple le plus sacré du sikhisme ?',
              opts: ['Le Temple d\'Or d\'Amritsar', 'Le Gurdwara de Delhi', 'Le Temple de Nankana Sahib', 'Le Fort de Gobind'],
              correct: 0,
              explanation: 'Le Harmandir Sahib (Temple d\'Or) à Amritsar est le lieu le plus sacré du sikhisme, recouvert de feuilles d\'or.'
            }
          ],
          definitions: [
            {
              term: 'Guru Granth Sahib',
              def: 'Texte sacré du sikhisme, considéré comme le guru vivant éternel depuis 1708. Il contient les hymnes des gurus et de saints hindous et musulmans.'
            },
            {
              term: 'Khalsa',
              def: 'Communauté des sikhs baptisés, créée par Guru Gobind Singh en 1699, dont les membres portent les cinq K.'
            },
            {
              term: 'Langar',
              def: 'Cuisine communautaire gratuite attachée à chaque gurdwara, où des repas sont offerts à tous sans distinction.'
            },
            {
              term: 'Seva',
              def: 'Service désintéressé rendu à la communauté et à autrui, pilier fondamental de la pratique sikhe.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 1699',
              back: 'Création de la Khalsa par Guru Gobind Singh lors de la fête de Baisakhi, événement fondateur de l\'identité sikhe.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le Temple d\'Or d\'Amritsar est le plus grand restaurant gratuit du monde : il sert quotidiennement plus de 100 000 repas, entièrement préparés par des bénévoles.'
            },
            {
              front: 'Ik Onkar',
              back: '« Un seul Dieu » — premier mot du Guru Granth Sahib et fondement du monothéisme sikh. Il est souvent représenté comme un symbole calligraphique.'
            }
          ]
        },
        {
          slug: 'jainisme',
          title: 'Jaïnisme',
          description: 'La religion de la non-violence absolue : ahimsa, karma et libération de l\'âme.',
          intro: 'Le jaïnisme est l\'une des plus anciennes religions de l\'Inde, fondée par Mahavira (599-527 av. J.-C.), contemporain du Bouddha. Avec environ 4,5 millions de fidèles, il exerce une influence morale et intellectuelle bien supérieure à son nombre, notamment par sa doctrine de la non-violence absolue (ahimsa).',
          introHighlight: 'Le jaïnisme pousse le principe de non-violence (ahimsa) à son extrême : les moines jains filtrent l\'eau pour ne pas avaler d\'insectes et balaient le sol devant eux pour ne pas écraser de petits êtres vivants.',
          sections: [
            {
              title: 'L\'ahimsa et les cinq voeux',
              paragraphs: ['L\'ahimsa (non-violence) est le principe suprême du jaïnisme. Elle s\'étend à tous les êtres vivants, y compris les insectes et les micro-organismes. Les jains sont strictement végétariens et certains évitent même les racines et les tubercules pour ne pas détruire la plante entière.', 'Les cinq grands vœux (mahavratas) du moine jain sont : la non-violence (ahimsa), la vérité (satya), le non-vol (asteya), la chasteté (brahmacharya) et le non-attachement (aparigraha). Les laïcs observent une version atténuée de ces vœux.'],
              highlight: 'L\'ahimsa jain a profondément influencé le Mahatma Gandhi, qui l\'a érigée en principe politique dans sa lutte pour l\'indépendance de l\'Inde.'
            },
            {
              title: 'La cosmologie et le karma jains',
              paragraphs: ['Le jaïnisme ne reconnaît aucun dieu créateur. L\'univers est éternel et régi par des lois naturelles. Le karma y est conçu comme une substance matérielle fine qui adhère à l\'âme (jiva) et l\'alourdit, l\'empêchant d\'atteindre sa pureté originelle.', 'La libération (moksha) consiste à purifier l\'âme de toute matière karmique par l\'ascèse, la non-violence et la connaissance. L\'âme libérée (siddha) atteint l\'omniscience et réside au sommet de l\'univers dans un état de béatitude éternelle.'],
              highlight: ''
            },
            {
              title: 'Digambara et Shvetambara',
              paragraphs: ['Le jaïnisme s\'est divisé en deux branches principales. Les Digambara (« vêtus d\'espace ») pratiquent un ascétisme radical : les moines vivent entièrement nus, symbolisant le renoncement total. Les Shvetambara (« vêtus de blanc ») portent des vêtements blancs et ont une approche plus modérée.', 'Malgré cette division, les deux branches partagent les mêmes principes fondamentaux. Les jains, bien que peu nombreux, sont l\'une des communautés les plus prospères et les plus éduquées de l\'Inde, avec un taux d\'alphabétisation de près de 95 %.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Quel est le principe suprême du jaïnisme ?',
              opts: ['La méditation', 'L\'ascèse', 'L\'ahimsa (non-violence)', 'La dévotion'],
              correct: 2,
              explanation: 'L\'ahimsa (non-violence absolue envers tous les êtres vivants) est le principe fondamental du jaïnisme.'
            },
            {
              q: 'Qui est le fondateur historique du jaïnisme ?',
              opts: ['Bouddha', 'Mahavira', 'Guru Nanak', 'Shankaracharya'],
              correct: 1,
              explanation: 'Mahavira (599-527 av. J.-C.) est le 24e et dernier Tirthankara (guidé spirituel) du jaïnisme, considéré comme son fondateur historique.'
            },
            {
              q: 'Combien de grands vœux (mahavratas) le moine jain observe-t-il ?',
              opts: ['3', '5', '8', '10'],
              correct: 1,
              explanation: 'Les cinq grands vœux sont : non-violence, vérité, non-vol, chasteté et non-attachement.'
            },
            {
              q: 'Que signifie « Digambara » ?',
              opts: ['Vêtus de blanc', 'Vêtus d\'espace (nus)', 'Vêtus de safran', 'Vêtus de noir'],
              correct: 1,
              explanation: 'Digambara signifie « vêtus d\'espace » (littéralement « vêtus du ciel »), désignant les moines qui pratiquent la nudité comme signe de renoncement total.'
            },
            {
              q: 'Le jaïnisme reconnaît-il un dieu créateur ?',
              opts: ['Oui, Brahma', 'Oui, mais sous forme impersonnelle', 'Non', 'Oui, les Tirthankaras'],
              correct: 2,
              explanation: 'Le jaïnisme est une religion athée : l\'univers est éternel et régi par des lois naturelles, sans dieu créateur.'
            }
          ],
          definitions: [
            {
              term: 'Ahimsa',
              def: 'Non-violence absolue envers tous les êtres vivants, principe suprême du jaïnisme qui s\'étend jusqu\'aux micro-organismes.'
            },
            {
              term: 'Tirthankara',
              def: 'Guide spirituel qui a atteint la libération et enseigne la voie. Le jaïnisme en reconnaît 24, dont Mahavira est le dernier.'
            },
            {
              term: 'Jiva',
              def: 'L\'âme individuelle dans le jaïnisme, éternelle et omnisciente par nature, mais alourdie par le karma matériel.'
            }
          ],
          memos: [
            {
              front: 'Date clé : 599-527 av. J.-C.',
              back: 'Vie de Mahavira, contemporain du Bouddha, 24e Tirthankara et fondateur historique du jaïnisme.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'ahimsa jain a directement inspiré la philosophie de non-violence du Mahatma Gandhi, dont la famille était en contact étroit avec la communauté jain du Gujarat.'
            },
            {
              front: 'Statistique',
              back: 'Bien que les jains représentent moins de 0,4 % de la population indienne, ils contribuent à environ 25 % de l\'œuvre philanthropique du pays.'
            }
          ]
        },
        {
          slug: 'zoroastrisme',
          title: 'Zoroastrisme',
          description: 'La religion de Zarathoustra : le combat du bien et du mal, le feu sacré et l\'influence universelle.',
          intro: 'Le zoroastrisme est l\'une des plus anciennes religions monothéistes du monde, fondée par le prophète Zarathoustra (Zoroastre) en Perse antique, probablement entre 1500 et 1000 av. J.-C. Religion officielle de trois empires perses successifs, elle a profondément influencé le judaïsme, le christianisme et l\'islam.',
          introHighlight: 'Le zoroastrisme a introduit des concepts qui sont devenus centraux dans les religions abrahamiques : le dualisme bien/mal, le jugement dernier, la résurrection des morts et le paradis.',
          sections: [
            {
              title: 'Ahura Mazda et le dualisme',
              paragraphs: ['Le zoroastrisme enseigne l\'existence d\'un Dieu suprême, Ahura Mazda (« Seigneur de Sagesse »), créateur de toute chose bonne. Il est opposé à Angra Mainyu (Ahriman), esprit du mal et du mensonge. Le monde est le théâtre d\'un combat cosmique entre ces deux forces.', 'Chaque être humain doit choisir entre asha (la vérité, l\'ordre) et druj (le mensonge, le désordre). À la fin des temps (Frashokereti), Ahura Mazda triomphera définitivement du mal, les morts ressusciteront et le monde sera renouvelé. Cette eschatologie a profondément influencé les religions ultérieures.'],
              highlight: 'Le zoroastrisme est le premier système religieux à formuler clairement le dualisme bien/mal, le jugement des morts, la résurrection et la rénovation finale du monde.'
            },
            {
              title: 'L\'Avesta et le culte du feu',
              paragraphs: ['L\'Avesta est le texte sacré du zoroastrisme. Il comprend les Gathas, hymnes attribués à Zarathoustra lui-même, qui sont parmi les plus anciens textes religieux indo-iraniens. Le Yasna contient les liturgies, le Vendidad les lois de pureté.', 'Le feu (atar) est le symbole central du zoroastrisme, représentant la présence d\'Ahura Mazda et la vérité. Les temples du feu (atash bahram) entretiennent une flamme sacrée qui ne doit jamais s\'éteindre. Les zoroastriens sont parfois appelés « adorateurs du feu », bien qu\'ils vénèrent Ahura Mazda à travers le feu.'],
              highlight: ''
            },
            {
              title: 'Héritage et diaspora',
              paragraphs: ['Le zoroastrisme fut la religion dominante de la Perse pendant plus d\'un millénaire, sous les empires achéménide (550-330 av. J.-C.), parthe et sassanide (224-651). La conquête arabe et l\'islamisation progressive réduisirent la communauté zoroastrienne.', 'Aujourd\'hui, les zoroastriens sont environ 200 000 dans le monde. Les Parsis (zoroastriens de l\'Inde, arrivés au VIIIe siècle) forment une communauté prospère et influente, notamment à Bombay. En Iran, quelques dizaines de milliers de zoroastriens maintiennent la tradition ancestrale.'],
              highlight: ''
            }
          ],
          quiz: [
            {
              q: 'Qui est le prophète fondateur du zoroastrisme ?',
              opts: ['Ahura Mazda', 'Zarathoustra', 'Mani', 'Mithra'],
              correct: 1,
              explanation: 'Zarathoustra (Zoroastre en grec) est le prophète fondateur, ayant probablement vécu entre 1500 et 1000 av. J.-C.'
            },
            {
              q: 'Comment s\'appelle le dieu suprême du zoroastrisme ?',
              opts: ['Angra Mainyu', 'Mithra', 'Ahura Mazda', 'Varuna'],
              correct: 2,
              explanation: 'Ahura Mazda (« Seigneur de Sagesse ») est le dieu suprême, créateur de toute chose bonne.'
            },
            {
              q: 'Quel est le symbole central du zoroastrisme ?',
              opts: ['L\'eau', 'Le feu', 'La lune', 'L\'arbre'],
              correct: 1,
              explanation: 'Le feu (atar) symbolise la présence d\'Ahura Mazda et la vérité. Les temples du feu entretiennent une flamme perpétuelle.'
            },
            {
              q: 'Comment appelle-t-on les zoroastriens de l\'Inde ?',
              opts: ['Les Soufis', 'Les Parsis', 'Les Sikhs', 'Les Jains'],
              correct: 1,
              explanation: 'Les Parsis sont les zoroastriens installés en Inde depuis le VIIIe siècle, principalement à Bombay.'
            },
            {
              q: 'Quel concept zoroastrien a influencé les religions abrahamiques ?',
              opts: ['Le yoga', 'La réincarnation', 'Le dualisme bien/mal et le jugement dernier', 'Le système des castes'],
              correct: 2,
              explanation: 'Le dualisme bien/mal, le jugement des morts, la résurrection et le renouvellement final du monde sont des concepts zoroastriens repris par le judaïsme, le christianisme et l\'islam.'
            }
          ],
          definitions: [
            {
              term: 'Ahura Mazda',
              def: '« Seigneur de Sagesse », dieu suprême et créateur dans le zoroastrisme, opposé à Angra Mainyu, esprit du mal.'
            },
            {
              term: 'Asha',
              def: 'Vérité, ordre cosmique et justice dans le zoroastrisme, opposé au druj (mensonge et désordre).'
            },
            {
              term: 'Frashokereti',
              def: 'Rénovation finale du monde dans le zoroastrisme, où le bien triomphera définitivement du mal et les morts ressusciteront.'
            },
            {
              term: 'Avesta',
              def: 'Texte sacré du zoroastrisme comprenant les Gathas (hymnes de Zarathoustra), le Yasna (liturgies) et le Vendidad (lois de pureté).'
            }
          ],
          memos: [
            {
              front: 'Date clé',
              back: 'Zarathoustra vécut probablement entre 1500 et 1000 av. J.-C. en Asie centrale, ce qui fait du zoroastrisme l\'une des plus anciennes religions monothéistes.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les Rois mages de l\'Évangile étaient probablement des prêtres zoroastriens (mages). Le mot « magie » vient du persan « magu », désignant un prêtre zoroastrien.'
            },
            {
              front: 'Influence',
              back: 'Le zoroastrisme a influencé le judaïsme pendant l\'exil à Babylone (586-538 av. J.-C.). Les anges, le diable, le jugement dernier et la résurrection pourraient avoir une origine zoroastrienne.'
            }
          ]
        }
      ]
    }
  ]
};
