// Discipline definition: Relations internationales
// 5 hubs, 25 lessons — all content in French

module.exports = {
  slug: 'relations-internationales',
  title: 'Relations internationales',
  description: 'Explorez la diplomatie, les organisations internationales, les conflits et la coopération entre États.',
  icon: '🌐',
  cat: 'Relations internationales',
  themeSlug: 'droit-politique',
  accent: '#5a8db3',
  accent2: '#7aadcf',
  accentDim: 'rgba(90,141,179,0.1)',
  accentHero: 'rgba(90,141,179,0.08)',
  introTitle: 'Que sont les relations internationales ?',
  introText: 'Les relations internationales étudient les interactions entre les États, les organisations internationales, les entreprises multinationales et les acteurs non étatiques sur la scène mondiale. Cette discipline analyse les rapports de puissance, la diplomatie, les conflits, la coopération économique et les grands enjeux transnationaux qui façonnent l\'ordre mondial contemporain.',
  introHighlight: 'Du traité de Westphalie (1648) à la création de l\'ONU (1945), de la Guerre froide à la mondialisation, les relations internationales sont le théâtre permanent des ambitions, des alliances et des rivalités entre nations.',
  articleLow: 'les',
  hubs: [
    // ──────────────────────────────────────────────
    // HUB 1 — Diplomatie
    // ──────────────────────────────────────────────
    {
      slug: 'diplomatie',
      title: 'Diplomatie',
      description: 'L\'art de la négociation entre États, ambassades, protocole et droit diplomatique.',
      lessons: [
        {
          slug: 'histoire-de-la-diplomatie',
          title: 'Histoire de la diplomatie',
          description: 'Des ambassadeurs de l\'Antiquité aux sommets internationaux contemporains.',
          intro: 'La <strong>diplomatie</strong> est l\'art de conduire les relations entre États par la négociation plutôt que par la force. Des émissaires pharaoniques aux vidéoconférences du G7, la diplomatie a évolué dans ses formes tout en conservant son objectif fondamental : résoudre les différends et promouvoir les intérêts nationaux par le dialogue.',
          introHighlight: '<strong>Le traité de Kadesh</strong> (1259 av. J.-C.), entre l\'Égypte de Ramsès II et l\'empire hittite, est le plus ancien traité de paix connu, gravé sur une tablette d\'argile exposée à l\'ONU.',
          intro2: '',
          sections: [
            {
              title: 'La diplomatie dans l\'Antiquité',
              paragraphs: [
                'Les premières formes de diplomatie apparaissent en <strong>Mésopotamie</strong> vers 2500 av. J.-C. Les cités-États sumériennes échangeaient des ambassadeurs pour négocier traités commerciaux et alliances militaires. Les lettres d\'Amarna (XIVe siècle av. J.-C.), correspondance diplomatique entre l\'Égypte et les puissances du Proche-Orient ancien, révèlent un système diplomatique sophistiqué avec protocole, cadeaux royaux et mariages dynastiques.',
                'Dans la <strong>Grèce antique</strong>, les cités-États envoyaient des proxènes (ambassadeurs non permanents) pour négocier alliances et traités. Les amphictyonies, associations de cités autour d\'un sanctuaire commun, préfiguraient les organisations internationales. Rome développa le jus gentium (droit des gens), ensemble de règles régissant les relations entre peuples, ancêtre du droit international.'
              ],
              highlight: 'Les lettres d\'Amarna, 382 tablettes d\'argile découvertes en Égypte en 1887, constituent la plus ancienne correspondance diplomatique connue.'
            },
            {
              title: 'La diplomatie moderne : de Westphalie au Concert européen',
              paragraphs: [
                'Le <strong>traité de Westphalie</strong> (1648), qui mit fin à la guerre de Trente Ans, fonda le système international moderne en consacrant la souveraineté des États et le principe de non-ingérence. Pour la première fois, des négociations multilatérales réunissant 109 délégations aboutirent à un nouvel ordre européen. Ce traité est considéré comme l\'acte de naissance de la diplomatie moderne.',
                'Le <strong>Congrès de Vienne</strong> (1814-1815), après les guerres napoléoniennes, établit le « Concert européen » : un système de conférences régulières entre grandes puissances (Autriche, Prusse, Russie, Grande-Bretagne, France) pour maintenir l\'équilibre des forces et prévenir les conflits. Ce système, orchestré par Metternich, assura à l\'Europe un siècle de relative stabilité (1815-1914). Le Congrès formalisa aussi le protocole diplomatique : préséance des ambassadeurs, immunité diplomatique, hiérarchie des rangs.'
              ],
              highlight: 'Le traité de Westphalie (1648) est considéré comme l\'acte fondateur du système international moderne basé sur la souveraineté des États.'
            },
            {
              title: 'La diplomatie au XXe siècle',
              paragraphs: [
                'La <strong>Première Guerre mondiale</strong> révéla les limites de la diplomatie secrète. Woodrow Wilson, dans ses Quatorze Points (1918), prôna une « diplomatie ouverte » et la création d\'une organisation internationale : la Société des Nations (SDN, 1920). Malgré son échec à prévenir la Seconde Guerre mondiale, la SDN posa les bases du multilatéralisme institutionnel.',
                'Après 1945, la diplomatie entra dans l\'ère des <strong>organisations internationales</strong> (ONU, OTAN, CEE) et de la diplomatie de sommet. La Guerre froide développa de nouvelles formes : diplomatie nucléaire (dissuasion), diplomatie de crise (crise de Cuba, 1962), diplomatie du ping-pong (rapprochement sino-américain, 1971) et track-two diplomacy (canaux officieux entre adversaires). La chute du Mur de Berlin (1989) ouvrit l\'ère de la diplomatie multipolaire.'
              ],
              highlight: 'La crise des missiles de Cuba (1962) illustra l\'importance vitale de la diplomatie : le monde fut à deux doigts de la guerre nucléaire pendant 13 jours.'
            }
          ],
          quiz: [
            { q: 'Quel traité est considéré comme l\'acte fondateur du système international moderne ?', opts: ['Traité de Kadesh', 'Traité de Westphalie', 'Traité de Versailles', 'Traité de Rome'], correct: 1, explanation: 'Le traité de Westphalie (1648) consacra la souveraineté des États et le principe de non-ingérence, fondant le système international moderne.' },
            { q: 'Qu\'est-ce que le Concert européen ?', opts: ['Un festival de musique', 'Un système de conférences entre grandes puissances après 1815', 'L\'orchestre de l\'UE', 'Un traité commercial'], correct: 1, explanation: 'Le Concert européen est le système de conférences régulières entre grandes puissances établi après le Congrès de Vienne (1815) pour maintenir l\'équilibre et prévenir les conflits.' },
            { q: 'Quel président américain prôna la « diplomatie ouverte » ?', opts: ['Theodore Roosevelt', 'Woodrow Wilson', 'Franklin Roosevelt', 'John F. Kennedy'], correct: 1, explanation: 'Woodrow Wilson, dans ses Quatorze Points (1918), prôna la diplomatie ouverte et la création de la Société des Nations.' }
          ],
          definitions: [
            { term: 'Diplomatie', def: 'Art de conduire les relations entre États par la négociation, le dialogue et les accords plutôt que par la force.' },
            { term: 'Traité de Westphalie', def: 'Ensemble d\'accords (1648) mettant fin à la guerre de Trente Ans et consacrant la souveraineté des États comme principe fondateur de l\'ordre international.' },
            { term: 'Concert européen', def: 'Système de conférences régulières entre grandes puissances européennes (1815-1914) visant à maintenir l\'équilibre des forces.' },
            { term: 'Multilatéralisme', def: 'Approche diplomatique impliquant trois États ou plus dans la résolution de problèmes communs, souvent au sein d\'organisations internationales.' },
            { term: 'Track-two diplomacy', def: 'Canaux de négociation officieux entre adversaires, menés par des acteurs non gouvernementaux (universitaires, ONG) en marge de la diplomatie officielle.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Une copie du traité de Kadesh (1259 av. J.-C.) est affichée au siège de l\'ONU à New York comme symbole du plus ancien accord de paix connu entre deux grandes puissances.' },
            { front: '💡 Le savais-tu ?', back: 'Le Congrès de Vienne (1814-1815) est resté célèbre pour ses bals somptueux : on disait que « le Congrès danse, mais n\'avance pas ». Il aboutit pourtant à un siècle de paix relative.' },
            { front: '💡 Le savais-tu ?', back: 'La « diplomatie du ping-pong » de 1971 débuta quand un joueur de tennis de table américain monta accidentellement dans le bus de l\'équipe chinoise. Cet incident informel mena au rapprochement sino-américain.' }
          ]
        },
        {
          slug: 'droit-diplomatique',
          title: 'Droit diplomatique',
          description: 'Conventions de Vienne, immunités, ambassades et corps diplomatique.',
          intro: 'Le <strong>droit diplomatique</strong> est l\'ensemble des règles juridiques régissant les relations entre États et la conduite de la diplomatie. Codifié par les Conventions de Vienne de 1961 et 1963, il garantit aux diplomates les privilèges et immunités nécessaires à l\'exercice de leurs fonctions.',
          introHighlight: '<strong>L\'immunité diplomatique</strong> est un principe fondamental du droit international : un ambassadeur ne peut être arrêté, détenu ni jugé par l\'État accréditaire, quels que soient les actes commis.',
          intro2: '',
          sections: [
            {
              title: 'La Convention de Vienne de 1961',
              paragraphs: [
                'La <strong>Convention de Vienne sur les relations diplomatiques</strong> (18 avril 1961) est le texte fondateur du droit diplomatique contemporain. Ratifiée par 193 États, elle codifie des pratiques coutumières vieilles de plusieurs siècles. Elle définit le statut des missions diplomatiques (ambassades), les catégories de personnel diplomatique et les privilèges et immunités dont ils bénéficient.',
                'L\'<strong>inviolabilité des locaux</strong> de l\'ambassade est un principe absolu : les agents de l\'État accréditaire ne peuvent y pénétrer sans le consentement du chef de mission, même en cas d\'incendie ou de crime. Les archives et documents de la mission sont inviolables en tout lieu et en tout temps. La valise diplomatique (courrier officiel) ne peut être ni ouverte ni retenue. Ces protections visent à garantir la liberté de communication entre l\'État accréditant et sa mission.'
              ],
              highlight: 'L\'ambassade est juridiquement inviolable : même la police du pays d\'accueil ne peut y pénétrer sans le consentement de l\'ambassadeur.'
            },
            {
              title: 'Immunités et privilèges',
              paragraphs: [
                'L\'agent diplomatique jouit d\'une <strong>immunité de juridiction</strong> complète : il ne peut être poursuivi devant les tribunaux pénaux, civils ou administratifs de l\'État accréditaire. En cas d\'infraction grave, l\'État accréditaire peut seulement déclarer le diplomate persona non grata et exiger son départ. L\'État accréditant peut lever l\'immunité de son agent pour permettre des poursuites.',
                'Les <strong>privilèges fiscaux</strong> exemptent les diplomates de la plupart des impôts et droits de douane. Les membres du personnel administratif et technique bénéficient d\'immunités réduites (immunité pénale totale mais immunité civile limitée aux actes officiels). Le personnel de service ne jouit d\'immunités que pour les actes officiels. Ces distinctions créent une hiérarchie au sein du corps diplomatique.'
              ],
              highlight: 'Déclarer un diplomate persona non grata est la mesure la plus forte qu\'un État puisse prendre : le diplomate dispose de 72 heures pour quitter le pays.'
            },
            {
              title: 'Les relations consulaires',
              paragraphs: [
                'La <strong>Convention de Vienne sur les relations consulaires</strong> (1963) régit les fonctions des consuls, distincts des diplomates. Les consuls sont chargés de protéger les intérêts de leurs ressortissants à l\'étranger : délivrance de passeports et visas, assistance aux détenus, enregistrement de naissances et décès, aide en cas de catastrophe. Contrairement aux ambassades, les consulats ne représentent pas l\'État dans sa dimension politique.',
                'Les <strong>immunités consulaires</strong> sont plus limitées que les immunités diplomatiques. Le consul ne bénéficie d\'immunité que pour les actes accomplis dans l\'exercice de ses fonctions. Les locaux consulaires, bien qu\'inviolables dans leur partie officielle, ne bénéficient pas de la même protection absolue que les ambassades. L\'affaire du consulat saoudien à Istanbul (2018) a illustré les limites et les enjeux de ces protections.'
              ],
              highlight: 'Un ressortissant étranger arrêté a le droit de contacter son consulat : c\'est l\'une des garanties fondamentales de la Convention de Vienne de 1963.'
            }
          ],
          quiz: [
            { q: 'En quelle année a été adoptée la Convention de Vienne sur les relations diplomatiques ?', opts: ['1945', '1948', '1961', '1975'], correct: 2, explanation: 'La Convention de Vienne sur les relations diplomatiques a été adoptée le 18 avril 1961 et constitue le texte fondateur du droit diplomatique contemporain.' },
            { q: 'Que signifie « persona non grata » ?', opts: ['Personne bienvenue', 'Personne indésirable', 'Personne protégée', 'Personne neutre'], correct: 1, explanation: 'Persona non grata (personne indésirable) est la déclaration par laquelle un État exige le départ d\'un diplomate étranger de son territoire.' },
            { q: 'Qui est chargé de protéger les ressortissants à l\'étranger ?', opts: ['L\'ambassadeur', 'Le consul', 'Le président', 'Le juge international'], correct: 1, explanation: 'Les consuls sont chargés de protéger les intérêts des ressortissants de leur pays à l\'étranger : passeports, assistance juridique, aide en cas de crise.' }
          ],
          definitions: [
            { term: 'Immunité diplomatique', def: 'Protection juridique exemptant l\'agent diplomatique de toute poursuite pénale, civile ou administrative dans l\'État d\'accueil.' },
            { term: 'Persona non grata', def: 'Déclaration par laquelle l\'État accréditaire signifie qu\'un agent diplomatique n\'est plus acceptable et doit quitter le territoire.' },
            { term: 'Inviolabilité', def: 'Protection absolue des locaux de l\'ambassade, des archives et de la valise diplomatique contre toute intrusion ou saisie.' },
            { term: 'État accréditaire', def: 'État qui reçoit un agent diplomatique étranger sur son territoire (par opposition à l\'État accréditant qui l\'envoie).' },
            { term: 'Consul', def: 'Agent officiel chargé de protéger les intérêts des ressortissants de son pays dans une ville étrangère, distinct de l\'ambassadeur.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'ambassade des États-Unis à Bagdad est la plus grande du monde : 42 hectares (soit 80 terrains de football), 1 500 employés, sa propre centrale électrique et un réseau de tunnels souterrains.' },
            { front: '💡 Le savais-tu ?', back: 'En 1984, une tireuse embusquée dans l\'ambassade libyenne à Londres tua une policière britannique. La police ne put entrer dans l\'ambassade en raison de l\'inviolabilité des locaux.' },
            { front: '💡 Le savais-tu ?', back: 'Julian Assange a passé sept ans réfugié à l\'ambassade d\'Équateur à Londres (2012-2019), illustrant le principe d\'inviolabilité des locaux diplomatiques.' }
          ]
        },
        {
          slug: 'negociation-internationale',
          title: 'Négociation internationale',
          description: 'Techniques de négociation, médiation et résolution pacifique des différends.',
          intro: 'La <strong>négociation internationale</strong> est le processus par lequel des États ou des acteurs internationaux cherchent à résoudre leurs différends et à atteindre des accords mutuellement acceptables. Art et science à la fois, elle mobilise des compétences juridiques, psychologiques et stratégiques.',
          introHighlight: '<strong>La médiation</strong>, intervention d\'un tiers neutre, est l\'un des outils les plus efficaces de la résolution pacifique des conflits, des accords d\'Oslo aux négociations sur le nucléaire iranien.',
          intro2: '',
          sections: [
            {
              title: 'Théories et approches de la négociation',
              paragraphs: [
                'Deux grandes approches dominent la négociation internationale. La <strong>négociation distributive</strong> (ou positionnelle) considère le résultat comme un jeu à somme nulle : ce que l\'un gagne, l\'autre le perd. Chaque partie défend des positions fermes et fait des concessions progressives. La <strong>négociation intégrative</strong> (ou raisonnée), théorisée par Fisher et Ury dans Getting to Yes (1981), cherche à créer de la valeur : en identifiant les intérêts sous-jacents (et non les positions), les parties peuvent trouver des solutions mutuellement avantageuses.',
                'La <strong>théorie des jeux</strong>, développée par John Nash (prix Nobel 1994), modélise les interactions stratégiques entre acteurs rationnels. Le dilemme du prisonnier illustre comment deux acteurs rationnels peuvent aboutir à un résultat sous-optimal par manque de coopération. Le concept d\'équilibre de Nash explique les situations où aucun acteur n\'a intérêt à changer unilatéralement de stratégie.'
              ],
              highlight: 'Getting to Yes de Fisher et Ury (Harvard, 1981) a révolutionné la négociation en distinguant les intérêts (négociables) des positions (souvent rigides).'
            },
            {
              title: 'Médiation et bons offices',
              paragraphs: [
                'La <strong>médiation</strong> fait intervenir un tiers neutre et impartial qui aide les parties à trouver un accord. Le médiateur facilite le dialogue, propose des solutions et peut exercer une pression douce, mais n\'a pas le pouvoir d\'imposer une décision. Les accords d\'Oslo (1993), négociés secrètement en Norvège entre Israël et l\'OLP, illustrent le rôle crucial d\'un médiateur discret et de confiance.',
                'Les <strong>bons offices</strong> sont une forme plus légère d\'intervention : le tiers se contente de mettre les parties en contact et de fournir un cadre de discussion, sans participer aux négociations. Le Secrétaire général de l\'ONU exerce fréquemment ses bons offices dans les crises internationales. La Suisse, traditionnellement neutre, joue souvent le rôle de puissance protectrice, représentant les intérêts d\'un État auprès d\'un autre avec lequel il a rompu ses relations diplomatiques.'
              ],
              highlight: 'La Suisse représente les intérêts diplomatiques des États-Unis en Iran et ceux de l\'Iran aux États-Unis depuis la rupture de 1980.'
            },
            {
              title: 'Négociations multilatérales',
              paragraphs: [
                'Les <strong>négociations multilatérales</strong> impliquent de nombreux acteurs et présentent des défis spécifiques : formation de coalitions, gestion des veto, recherche du consensus. Les négociations climatiques (COP) réunissent 197 parties et fonctionnent par consensus, ce qui donne un droit de blocage à chaque État. L\'Accord de Paris (2015, COP21) a été obtenu grâce à une stratégie de « ambition progressive » et à la diplomatie personnelle de Laurent Fabius.',
                'Les <strong>négociations commerciales</strong> de l\'OMC (cycles de Doha) illustrent la difficulté du multilatéralisme : lancées en 2001, elles sont toujours en suspens. Les États contournent ce blocage par des accords bilatéraux ou régionaux (ALENA/ACEUM, CETA, RCEP). La technique du « paquet global » (single undertaking), qui lie tous les sujets en un seul accord, facilite les compromis croisés mais complique la finalisation.'
              ],
              highlight: 'L\'Accord de Paris sur le climat (2015), adopté par 195 pays, est considéré comme l\'un des plus grands succès de la négociation multilatérale.'
            }
          ],
          quiz: [
            { q: 'Quelle est la différence entre négociation distributive et intégrative ?', opts: ['Il n\'y en a pas', 'La distributive est un jeu à somme nulle, l\'intégrative cherche à créer de la valeur', 'La distributive est multilatérale, l\'intégrative bilatérale', 'La distributive est pacifique, l\'intégrative conflictuelle'], correct: 1, explanation: 'La négociation distributive est un jeu à somme nulle (ce que l\'un gagne, l\'autre le perd), tandis que l\'intégrative cherche à créer de la valeur en identifiant les intérêts communs.' },
            { q: 'Quel rôle joue un médiateur ?', opts: ['Il impose une solution', 'Il facilite le dialogue et propose des solutions sans pouvoir d\'imposition', 'Il juge les parties', 'Il prend parti'], correct: 1, explanation: 'Le médiateur est un tiers neutre qui facilite le dialogue et propose des solutions, mais n\'a pas le pouvoir d\'imposer une décision aux parties.' },
            { q: 'Combien de parties participent aux négociations climatiques (COP) ?', opts: ['27', '50', '100', '197'], correct: 3, explanation: 'Les négociations climatiques de la Convention-cadre des Nations Unies réunissent 197 parties (196 États + l\'Union européenne).' }
          ],
          definitions: [
            { term: 'Négociation intégrative', def: 'Approche de négociation visant à créer de la valeur en identifiant les intérêts sous-jacents des parties, plutôt que de défendre des positions rigides.' },
            { term: 'Médiation', def: 'Intervention d\'un tiers neutre et impartial pour aider les parties en conflit à trouver un accord mutuellement acceptable.' },
            { term: 'Bons offices', def: 'Forme légère d\'intervention diplomatique où un tiers facilite la prise de contact entre parties en conflit sans participer aux négociations.' },
            { term: 'Équilibre de Nash', def: 'Situation dans un jeu stratégique où aucun acteur n\'a intérêt à modifier unilatéralement sa stratégie.' },
            { term: 'Single undertaking', def: 'Principe de négociation commerciale selon lequel rien n\'est convenu tant que tout n\'est pas convenu, liant tous les sujets en un seul accord.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Les accords d\'Oslo (1993) ont été négociés secrètement dans une maison isolée en Norvège. Le secret était si bien gardé que même les ministres des Affaires étrangères n\'étaient pas informés au début.' },
            { front: '💡 Le savais-tu ?', back: 'Le dilemme du prisonnier, modèle central de la théorie des jeux, a été inventé en 1950 par Merrill Flood et Melvin Dresher à la RAND Corporation pendant la Guerre froide.' },
            { front: '💡 Le savais-tu ?', back: 'Laurent Fabius, président de la COP21, a utilisé un petit marteau vert pour sceller l\'Accord de Paris. Il a pleuré en annonçant son adoption, un moment rare en diplomatie.' }
          ]
        },
        {
          slug: 'diplomatie-economique',
          title: 'Diplomatie économique',
          description: 'Sanctions, accords commerciaux, aide au développement et soft power économique.',
          intro: 'La <strong>diplomatie économique</strong> utilise les outils économiques — commerce, investissement, sanctions, aide — pour atteindre des objectifs de politique étrangère. Dans un monde globalisé, l\'interdépendance économique est devenue un levier diplomatique aussi puissant que la force militaire.',
          introHighlight: '<strong>Les sanctions économiques</strong> sont devenues l\'outil diplomatique privilégié du XXIe siècle : plus de 30 pays sont sous sanctions américaines ou européennes en permanence.',
          intro2: '',
          sections: [
            {
              title: 'Les sanctions économiques',
              paragraphs: [
                'Les <strong>sanctions économiques</strong> sont des mesures coercitives imposées par un État ou une organisation internationale pour contraindre un autre État à modifier son comportement. Elles peuvent prendre la forme d\'embargos commerciaux (interdiction d\'exportation ou d\'importation), de gels d\'avoirs (blocage des comptes bancaires de dirigeants), de restrictions financières (exclusion du système SWIFT) ou d\'interdictions de voyage.',
                'L\'efficacité des sanctions est débattue. L\'<strong>embargo contre Cuba</strong> (depuis 1962, le plus long de l\'histoire) n\'a pas renversé le régime castriste. En revanche, les sanctions contre l\'Iran ont contribué à l\'accord nucléaire de 2015 (JCPOA). Les sanctions contre la Russie après 2022 ont provoqué une contraction de 2 % du PIB russe la première année. Les sanctions ciblées (smart sanctions), visant les dirigeants plutôt que les populations, tentent de minimiser les souffrances des civils.'
              ],
              highlight: 'L\'exclusion de banques russes du système SWIFT en 2022 a été qualifiée d\'« arme nucléaire financière » par le ministre français des Finances.'
            },
            {
              title: 'Commerce et accords commerciaux',
              paragraphs: [
                'Le <strong>commerce international</strong> est un instrument diplomatique majeur. Les accords de libre-échange (ALE) réduisent les droits de douane et harmonisent les réglementations entre partenaires, renforçant les liens économiques et politiques. L\'Union européenne a signé des ALE avec plus de 70 pays. Le CETA (Canada-UE), le RCEP (15 pays d\'Asie-Pacifique) et l\'AfCFTA (54 pays africains) sont les accords les plus récents.',
                'La <strong>guerre commerciale</strong> entre les États-Unis et la Chine (depuis 2018) illustre l\'utilisation du commerce comme arme diplomatique. Les droits de douane punitifs (jusqu\'à 25 % sur des centaines de milliards de dollars de marchandises) visent à corriger les déséquilibres commerciaux et à protéger des industries stratégiques. Le découplage technologique (restrictions sur les semi-conducteurs, interdiction de TikTok) ajoute une dimension géostratégique au conflit commercial.'
              ],
              highlight: 'Le RCEP (2020), plus grand accord de libre-échange du monde, regroupe 30 % du PIB mondial et 2,2 milliards de personnes.'
            },
            {
              title: 'Aide au développement et soft power',
              paragraphs: [
                'L\'<strong>aide publique au développement</strong> (APD) est un outil de diplomatie douce (soft power). Les pays de l\'OCDE ont consacré 211 milliards de dollars à l\'APD en 2023, soit 0,37 % de leur revenu national brut — en dessous de l\'objectif de 0,7 % fixé par l\'ONU en 1970. Les cinq premiers donateurs sont les États-Unis, l\'Allemagne, le Japon, le Royaume-Uni et la France.',
                'La Chine a développé sa propre forme de diplomatie économique avec la <strong>Belt and Road Initiative</strong> (BRI, « Nouvelles Routes de la Soie »), lancée en 2013. Ce programme d\'investissements massifs (plus de 1 000 milliards de dollars) dans les infrastructures (ports, routes, chemins de fer, télécommunications) de plus de 150 pays vise à renforcer l\'influence géopolitique chinoise. Les critiques dénoncent un « piège de la dette » pour les pays bénéficiaires.'
              ],
              highlight: 'La Belt and Road Initiative chinoise, plus grand programme d\'infrastructures de l\'histoire, concerne 150 pays et 1 000 milliards de dollars d\'investissements.'
            }
          ],
          quiz: [
            { q: 'Quel est le plus long embargo de l\'histoire ?', opts: ['Embargo contre l\'Irak', 'Embargo contre Cuba', 'Embargo contre l\'Iran', 'Embargo contre la Corée du Nord'], correct: 1, explanation: 'L\'embargo américain contre Cuba, en vigueur depuis 1962, est le plus long embargo de l\'histoire moderne, dépassant les 60 ans.' },
            { q: 'Qu\'est-ce que le système SWIFT ?', opts: ['Un réseau social', 'Un système de messagerie financière internationale', 'Une armée privée', 'Un satellite espion'], correct: 1, explanation: 'SWIFT (Society for Worldwide Interbank Financial Telecommunication) est le système de messagerie permettant les transactions financières internationales entre banques.' },
            { q: 'Qu\'est-ce que la Belt and Road Initiative ?', opts: ['Un programme spatial chinois', 'Un programme d\'investissements chinois dans les infrastructures mondiales', 'Un accord de libre-échange', 'Une alliance militaire'], correct: 1, explanation: 'La Belt and Road Initiative (Nouvelles Routes de la Soie) est un programme massif d\'investissements chinois dans les infrastructures de plus de 150 pays.' }
          ],
          definitions: [
            { term: 'Sanction économique', def: 'Mesure coercitive (embargo, gel d\'avoirs, restrictions financières) imposée à un État pour modifier son comportement.' },
            { term: 'SWIFT', def: 'Society for Worldwide Interbank Financial Telecommunication : système de messagerie sécurisée permettant les transactions bancaires internationales.' },
            { term: 'Accord de libre-échange', def: 'Traité entre deux ou plusieurs pays visant à réduire ou supprimer les droits de douane et les barrières commerciales.' },
            { term: 'Soft power', def: 'Capacité d\'un État à influencer d\'autres acteurs par l\'attraction (culture, valeurs, aide) plutôt que par la coercition.' },
            { term: 'Belt and Road Initiative', def: 'Programme chinois d\'investissements massifs dans les infrastructures de transport et de communication à travers le monde, lancé en 2013.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'SWIFT, basé en Belgique, transmet plus de 40 millions de messages financiers par jour entre 11 000 institutions dans 200 pays. L\'en exclure revient à isoler un pays du système financier mondial.' },
            { front: '💡 Le savais-tu ?', back: 'L\'objectif de 0,7 % du RNB consacré à l\'aide au développement a été fixé par l\'ONU en 1970. Plus de 50 ans après, seuls 5 pays l\'atteignent : Luxembourg, Norvège, Suède, Danemark et Allemagne.' },
            { front: '💡 Le savais-tu ?', back: 'Le port de Hambantota au Sri Lanka, financé par des prêts chinois dans le cadre de la BRI, a été cédé à la Chine pour 99 ans en 2017 après que le pays n\'a pu rembourser sa dette.' }
          ]
        },
        {
          slug: 'diplomatie-culturelle',
          title: 'Diplomatie culturelle et numérique',
          description: 'Influence culturelle, diplomatie publique, cyberdiplomatie et guerre de l\'information.',
          intro: 'La <strong>diplomatie culturelle</strong> utilise la culture, l\'éducation et la communication pour renforcer l\'image et l\'influence d\'un pays. À l\'ère numérique, les réseaux sociaux, la désinformation et la cybersécurité ont ouvert un nouveau front diplomatique.',
          introHighlight: '<strong>Le soft power</strong>, concept forgé par Joseph Nye (Harvard, 1990), désigne la capacité d\'un État à influencer sans contraindre, par l\'attraction de sa culture, de ses valeurs et de sa politique.',
          intro2: '',
          sections: [
            {
              title: 'Soft power et influence culturelle',
              paragraphs: [
                'Joseph Nye a défini le <strong>soft power</strong> en 1990 comme la capacité d\'obtenir ce que l\'on veut par l\'attraction plutôt que par la coercition (hard power) ou l\'argent. Les trois piliers du soft power sont la culture (cinéma, musique, gastronomie, mode), les valeurs politiques (démocratie, droits de l\'homme) et la politique étrangère (aide, multilatéralisme). Le « smart power » combine hard et soft power.',
                'Chaque grande puissance dispose d\'<strong>institutions de rayonnement culturel</strong> : l\'Alliance française et les Instituts français (langue et culture françaises dans 130 pays), le British Council (Royaume-Uni), le Goethe-Institut (Allemagne), les Instituts Confucius (Chine, plus de 500 dans le monde). La France, premier pays touristique du monde (90 millions de visiteurs par an), sa gastronomie classée au patrimoine de l\'UNESCO, et son réseau diplomatique (le troisième mondial) possède un soft power considérable.'
              ],
              highlight: 'La France possède le troisième réseau diplomatique au monde (267 ambassades et consulats) après les États-Unis et la Chine.'
            },
            {
              title: 'Diplomatie publique et médias',
              paragraphs: [
                'La <strong>diplomatie publique</strong> s\'adresse directement aux populations étrangères, contournant les canaux diplomatiques classiques entre gouvernements. Les médias internationaux sont un outil central : France 24, BBC World Service, Deutsche Welle, Russia Today (RT), Al Jazeera et CGTN (Chine) sont les bras médiatiques de la diplomatie publique de leurs pays.',
                'Les <strong>programmes d\'échange</strong> éducatif sont parmi les outils les plus efficaces de soft power à long terme. Le programme Fulbright américain (370 000 alumni depuis 1946, dont 60 prix Nobel), le programme Erasmus européen (12 millions de participants depuis 1987) et les bourses Eiffel françaises forment les futures élites étrangères qui gardent un lien durable avec le pays d\'accueil.'
              ],
              highlight: 'Le programme Erasmus, lancé en 1987, a permis à plus de 12 millions d\'Européens d\'étudier dans un autre pays, créant une « génération Erasmus ».'
            },
            {
              title: 'Cyberdiplomatie et guerre de l\'information',
              paragraphs: [
                'La <strong>cyberdiplomatie</strong> est le nouveau front des relations internationales. Les cyberattaques étatiques (Stuxnet contre le programme nucléaire iranien en 2010, piratage du Bundestag allemand en 2015, attaque NotPetya contre l\'Ukraine en 2017) brouillent la frontière entre paix et guerre. Les normes de comportement responsable dans le cyberespace font l\'objet de négociations à l\'ONU depuis 2004, sans consensus.',
                'La <strong>guerre de l\'information</strong> (information warfare) utilise la désinformation, les réseaux sociaux et les « usines à trolls » pour déstabiliser les démocraties. L\'Internet Research Agency russe (basée à Saint-Pétersbourg) a été accusée d\'interférence dans les élections américaines de 2016, le référendum du Brexit et les élections françaises de 2017. Les deepfakes (vidéos truquées par intelligence artificielle) représentent la menace émergente de la prochaine décennie.'
              ],
              highlight: 'Stuxnet (2010), virus américano-israélien qui détruisit 1 000 centrifugeuses nucléaires iraniennes, est considéré comme la première cyberarme de l\'histoire.'
            }
          ],
          quiz: [
            { q: 'Qui a inventé le concept de soft power ?', opts: ['Henry Kissinger', 'Joseph Nye', 'Samuel Huntington', 'Francis Fukuyama'], correct: 1, explanation: 'Joseph Nye, professeur à Harvard, a forgé le concept de soft power en 1990 pour désigner la capacité d\'influence par l\'attraction plutôt que par la coercition.' },
            { q: 'Combien d\'Instituts Confucius la Chine a-t-elle ouverts dans le monde ?', opts: ['50', '150', 'Plus de 500', '1 000'], correct: 2, explanation: 'La Chine a ouvert plus de 500 Instituts Confucius dans le monde pour promouvoir la langue et la culture chinoises, un outil majeur de soft power.' },
            { q: 'Qu\'est-ce que Stuxnet ?', opts: ['Un réseau social', 'Un virus informatique ciblant le programme nucléaire iranien', 'Un satellite espion', 'Un traité de cybersécurité'], correct: 1, explanation: 'Stuxnet est un virus informatique américano-israélien qui a détruit environ 1 000 centrifugeuses nucléaires iraniennes en 2010, première cyberarme connue.' }
          ],
          definitions: [
            { term: 'Soft power', def: 'Capacité d\'influence par l\'attraction (culture, valeurs, politique) plutôt que par la coercition militaire ou économique.' },
            { term: 'Diplomatie publique', def: 'Effort d\'un gouvernement pour communiquer directement avec les populations étrangères afin d\'influencer leur perception.' },
            { term: 'Cyberdiplomatie', def: 'Ensemble des négociations et des normes internationales relatives au comportement des États dans le cyberespace.' },
            { term: 'Guerre de l\'information', def: 'Utilisation de la désinformation, de la propagande et des médias pour déstabiliser un adversaire ou influencer l\'opinion publique.' },
            { term: 'Deepfake', def: 'Contenu audiovisuel falsifié par intelligence artificielle, rendant possible la création de vidéos réalistes de personnes prononçant des paroles inventées.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le programme Fulbright, créé en 1946 par le sénateur J. William Fulbright, a formé 60 prix Nobel, 88 lauréats du prix Pulitzer et 40 chefs d\'État ou de gouvernement.' },
            { front: '💡 Le savais-tu ?', back: 'La hallyu (vague coréenne) — K-pop, cinéma, séries — est l\'un des exemples les plus spectaculaires de soft power. BTS a généré 5 milliards de dollars par an pour l\'économie sud-coréenne.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Alliance française, fondée en 1883, est le plus ancien réseau culturel du monde. Elle est présente dans 130 pays avec 800 centres et enseigne le français à 500 000 étudiants par an.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 2 — Organisations internationales
    // ──────────────────────────────────────────────
    {
      slug: 'organisations-internationales',
      title: 'Organisations internationales',
      description: 'ONU, Union européenne, OTAN, organisations régionales et ONG.',
      lessons: [
        {
          slug: 'systeme-des-nations-unies',
          title: 'Système des Nations Unies',
          description: 'Structure, organes, missions et limites de l\'ONU.',
          intro: 'L\'<strong>Organisation des Nations Unies</strong> (ONU), fondée le 24 octobre 1945, est la plus vaste organisation internationale de l\'histoire. Avec 193 États membres, elle vise à maintenir la paix, protéger les droits de l\'homme, promouvoir le développement et codifier le droit international.',
          introHighlight: '<strong>La Charte des Nations Unies</strong>, signée à San Francisco le 26 juin 1945, est le traité fondateur de l\'ordre international contemporain.',
          intro2: '',
          sections: [
            {
              title: 'Les organes principaux',
              paragraphs: [
                'L\'ONU repose sur six organes principaux. L\'<strong>Assemblée générale</strong>, où chaque État dispose d\'une voix, est le forum délibérant (résolutions non contraignantes). Le <strong>Conseil de sécurité</strong>, organe exécutif, est le seul à pouvoir prendre des décisions juridiquement contraignantes, y compris le recours à la force. Il compte 15 membres dont 5 permanents (P5 : États-Unis, Russie, Chine, France, Royaume-Uni) disposant d\'un droit de veto.',
                'Le <strong>Secrétariat</strong>, dirigé par le Secrétaire général (António Guterres depuis 2017), administre l\'organisation et ses 44 000 fonctionnaires. La Cour internationale de Justice (CIJ), à La Haye, tranche les différends entre États. Le Conseil économique et social (ECOSOC) coordonne l\'action économique et sociale. Le Conseil de tutelle, devenu obsolète, a suspendu ses activités en 1994.'
              ],
              highlight: 'Le droit de veto des cinq membres permanents du Conseil de sécurité a été utilisé plus de 300 fois depuis 1945.'
            },
            {
              title: 'Maintien de la paix',
              paragraphs: [
                'Les <strong>opérations de maintien de la paix</strong> (casques bleus) sont le visage le plus visible de l\'ONU. Depuis 1948, 71 opérations ont été déployées, mobilisant plus de 2 millions de militaires, policiers et civils. En 2025, 12 opérations sont actives avec 87 000 personnels déployés, principalement en Afrique (RDC, Mali, Soudan du Sud, République centrafricaine).',
                'Les <strong>limites</strong> du système sont réelles. Le droit de veto paralyse le Conseil de sécurité sur les conflits impliquant un membre permanent ou ses alliés (Syrie, Ukraine). Le financement est chroniquement insuffisant (budget de 3,2 milliards de dollars pour les opérations de paix, soit moins que le budget annuel de la police de New York). La réforme du Conseil de sécurité, demandée depuis des décennies par l\'Allemagne, le Japon, l\'Inde et le Brésil (G4), se heurte à l\'opposition des P5.'
              ],
              highlight: 'Le budget des opérations de paix de l\'ONU (3,2 milliards de dollars) est inférieur au budget annuel de la police de New York.'
            },
            {
              title: 'Agences spécialisées',
              paragraphs: [
                'Le système des Nations Unies comprend 15 <strong>agences spécialisées</strong> autonomes. L\'OMS (Organisation mondiale de la santé) coordonne la réponse aux pandémies. L\'UNESCO protège le patrimoine mondial (1 199 sites en 2025). Le HCR (Haut Commissariat aux réfugiés) assiste 110 millions de personnes déplacées. Le PAM (Programme alimentaire mondial, prix Nobel de la paix 2020) nourrit 160 millions de personnes dans 120 pays.',
                'D\'autres agences jouent un rôle essentiel : la <strong>FAO</strong> (agriculture et alimentation), l\'UNICEF (enfants), l\'OIT (travail), l\'AIEA (énergie atomique), l\'UIT (télécommunications). Le PNUD (Programme des Nations Unies pour le développement) coordonne les Objectifs de développement durable (ODD), 17 objectifs à atteindre d\'ici 2030 adoptés par les 193 États membres en 2015.'
              ],
              highlight: 'Le Programme alimentaire mondial nourrit 160 millions de personnes dans 120 pays et a reçu le prix Nobel de la paix en 2020.'
            }
          ],
          quiz: [
            { q: 'Combien de membres permanents compte le Conseil de sécurité de l\'ONU ?', opts: ['3', '5', '10', '15'], correct: 1, explanation: 'Le Conseil de sécurité compte 5 membres permanents (P5) disposant du droit de veto : États-Unis, Russie, Chine, France et Royaume-Uni.' },
            { q: 'En quelle année l\'ONU a-t-elle été fondée ?', opts: ['1919', '1939', '1945', '1948'], correct: 2, explanation: 'L\'ONU a été fondée le 24 octobre 1945, après la signature de la Charte des Nations Unies à San Francisco le 26 juin 1945.' },
            { q: 'Combien d\'États membres compte l\'ONU ?', opts: ['150', '175', '193', '210'], correct: 2, explanation: 'L\'ONU compte 193 États membres. Le Soudan du Sud, admis en 2011, est le dernier État à avoir rejoint l\'organisation.' }
          ],
          definitions: [
            { term: 'Conseil de sécurité', def: 'Organe principal de l\'ONU chargé du maintien de la paix, composé de 15 membres dont 5 permanents disposant du droit de veto.' },
            { term: 'Droit de veto', def: 'Pouvoir des 5 membres permanents du Conseil de sécurité de bloquer toute résolution substantielle par un vote négatif.' },
            { term: 'Casques bleus', def: 'Personnels militaires, policiers et civils déployés par l\'ONU dans le cadre des opérations de maintien de la paix.' },
            { term: 'ODD', def: 'Objectifs de développement durable : 17 objectifs adoptés par l\'ONU en 2015 pour éradiquer la pauvreté et protéger la planète d\'ici 2030.' },
            { term: 'Charte des Nations Unies', def: 'Traité fondateur de l\'ONU signé à San Francisco en 1945, définissant les buts, principes et organes de l\'organisation.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le siège de l\'ONU à New York occupe un terrain de 7 hectares qui jouit d\'un statut d\'extraterritorialité : c\'est un territoire international, pas un sol américain.' },
            { front: '💡 Le savais-tu ?', back: 'La RUSSIE a utilisé son droit de veto plus de 120 fois, les États-Unis plus de 80 fois, la France et le Royaume-Uni environ 30 fois chacun, et la Chine une quinzaine de fois.' },
            { front: '💡 Le savais-tu ?', back: 'Dag Hammarskjöld, Secrétaire général de l\'ONU, est mort dans un crash aérien suspect au Congo en 1961. Il a reçu le prix Nobel de la paix à titre posthume, le seul cas dans l\'histoire.' }
          ]
        },
        {
          slug: 'union-europeenne',
          title: 'Union européenne',
          description: 'Construction européenne, institutions, élargissement et politiques communautaires.',
          intro: 'L\'<strong>Union européenne</strong> (UE) est une construction politique et économique unique au monde : 27 États souverains partageant un marché commun, une monnaie (pour 20 d\'entre eux), un parlement élu et un corpus juridique supranational. Née de la volonté de rendre la guerre impossible entre nations européennes, elle est le plus ambitieux projet d\'intégration de l\'histoire.',
          introHighlight: '<strong>La Déclaration Schuman</strong> du 9 mai 1950, considérée comme l\'acte de naissance de la construction européenne, proposait de placer la production de charbon et d\'acier sous une autorité commune.',
          intro2: '',
          sections: [
            {
              title: 'Histoire de la construction européenne',
              paragraphs: [
                'L\'idée européenne germa dans les ruines de la Seconde Guerre mondiale. Le 9 mai 1950, Robert <strong>Schuman</strong>, ministre français des Affaires étrangères, proposa de placer la production franco-allemande de charbon et d\'acier sous une Haute Autorité commune. La CECA (Communauté européenne du charbon et de l\'acier), créée en 1951 par six pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg), en fut la concrétisation.',
                'Le <strong>traité de Rome</strong> (1957) créa la Communauté économique européenne (CEE) et le marché commun. L\'Acte unique (1986) lança le marché intérieur. Le traité de Maastricht (1992) créa l\'Union européenne et prépara la monnaie unique. Le traité de Lisbonne (2007) renforça les institutions. Six élargissements successifs ont porté l\'UE de 6 à 27 membres (après le Brexit britannique en 2020).'
              ],
              highlight: 'De 6 pays fondateurs en 1951 à 27 membres aujourd\'hui, la construction européenne est le plus long processus d\'intégration pacifique de l\'histoire.'
            },
            {
              title: 'Les institutions européennes',
              paragraphs: [
                'Le <strong>Parlement européen</strong> (705 députés élus au suffrage universel) co-légifère avec le Conseil de l\'UE et vote le budget. Le <strong>Conseil européen</strong> (27 chefs d\'État et de gouvernement) définit les orientations politiques générales. Le Conseil de l\'Union européenne (« Conseil des ministres ») adopte la législation avec le Parlement. La Commission européenne (27 commissaires) propose les lois et veille à leur application.',
                'La <strong>Cour de justice de l\'Union européenne</strong> (CJUE, Luxembourg) garantit l\'interprétation uniforme du droit européen. La Banque centrale européenne (BCE, Francfort) gère l\'euro et la politique monétaire de la zone euro. Le principe de subsidiarité veut que l\'UE n\'intervienne que lorsque l\'action est plus efficace au niveau européen qu\'au niveau national.'
              ],
              highlight: 'Le Parlement européen est la seule assemblée transnationale élue directement par les citoyens au monde (705 députés, 400 millions d\'électeurs).'
            },
            {
              title: 'Défis et avenir',
              paragraphs: [
                'L\'UE fait face à des <strong>défis existentiels</strong> : le Brexit (2020) a montré qu\'un État pouvait quitter l\'Union. La montée des partis eurosceptiques remet en cause l\'approfondissement de l\'intégration. La crise migratoire divise les États membres sur la solidarité. La dépendance énergétique (révélée par le conflit en Ukraine) et la compétitivité face aux États-Unis et à la Chine imposent des réponses communes.',
                'Des avancées majeures se poursuivent : le <strong>Pacte vert européen</strong> (Green Deal) vise la neutralité carbone en 2050. Le plan NextGenerationEU (750 milliards d\'euros) est le plus grand plan de relance de l\'histoire européenne. La défense européenne, longtemps tabou, progresse avec la Boussole stratégique (2022). L\'élargissement aux Balkans occidentaux et, potentiellement, à l\'Ukraine et à la Moldavie, se profile.'
              ],
              highlight: 'NextGenerationEU (750 milliards d\'euros) est le plus grand plan de relance de l\'histoire européenne, financé par un emprunt commun inédit.'
            }
          ],
          quiz: [
            { q: 'Combien d\'États membres compte l\'UE en 2025 ?', opts: ['25', '27', '28', '30'], correct: 1, explanation: 'L\'Union européenne compte 27 États membres depuis le départ du Royaume-Uni (Brexit) le 31 janvier 2020.' },
            { q: 'Quelle est la date de la Déclaration Schuman ?', opts: ['8 mai 1945', '9 mai 1950', '25 mars 1957', '7 février 1992'], correct: 1, explanation: 'La Déclaration Schuman du 9 mai 1950 est considérée comme l\'acte de naissance de la construction européenne. Le 9 mai est la Journée de l\'Europe.' },
            { q: 'Quel traité a créé la monnaie unique européenne ?', opts: ['Traité de Rome', 'Acte unique', 'Traité de Maastricht', 'Traité de Lisbonne'], correct: 2, explanation: 'Le traité de Maastricht (1992) a créé l\'Union européenne et posé les bases de l\'Union économique et monétaire, conduisant à la création de l\'euro.' }
          ],
          definitions: [
            { term: 'Commission européenne', def: 'Institution exécutive de l\'UE composée de 27 commissaires, chargée de proposer les lois et de veiller à leur application.' },
            { term: 'Subsidiarité', def: 'Principe selon lequel l\'UE n\'agit que lorsque l\'objectif ne peut être atteint de manière satisfaisante par les États membres individuellement.' },
            { term: 'Marché intérieur', def: 'Espace de libre circulation des biens, services, personnes et capitaux entre les 27 États membres de l\'UE.' },
            { term: 'Zone euro', def: 'Ensemble des 20 États membres de l\'UE ayant adopté l\'euro comme monnaie unique, gérée par la BCE.' },
            { term: 'Brexit', def: 'Retrait du Royaume-Uni de l\'Union européenne, effectif le 31 janvier 2020 après le référendum de juin 2016.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'UE a reçu le prix Nobel de la paix en 2012 pour avoir « contribué pendant plus de six décennies à la paix, la réconciliation, la démocratie et les droits de l\'homme en Europe ».' },
            { front: '💡 Le savais-tu ?', back: 'Le programme Erasmus, créé en 1987, est l\'un des plus grands succès de l\'UE. On estime qu\'un million de « bébés Erasmus » sont nés de couples formés pendant un échange universitaire.' },
            { front: '💡 Le savais-tu ?', back: 'Le drapeau européen (12 étoiles dorées sur fond bleu) ne représente pas les 12 pays fondateurs mais l\'unité et l\'harmonie. Le nombre 12, symbole de perfection, a été choisi en 1955.' }
          ]
        },
        {
          slug: 'otan-et-alliances',
          title: 'OTAN et alliances militaires',
          description: 'Alliances de défense, sécurité collective et architecture de sécurité mondiale.',
          intro: 'Les <strong>alliances militaires</strong> structurent la sécurité internationale depuis des siècles. L\'OTAN, plus puissante alliance de l\'histoire, et les autres pactes de défense définissent les rapports de force et les zones d\'influence sur la scène mondiale.',
          introHighlight: '<strong>L\'article 5 du traité de l\'Atlantique Nord</strong> stipule qu\'une attaque contre un membre est une attaque contre tous. Il n\'a été invoqué qu\'une seule fois : après les attentats du 11 septembre 2001.',
          intro2: '',
          sections: [
            {
              title: 'L\'OTAN : histoire et fonctionnement',
              paragraphs: [
                'L\'<strong>Organisation du traité de l\'Atlantique Nord</strong> (OTAN), fondée le 4 avril 1949, réunit les États-Unis, le Canada et leurs alliés européens dans une alliance de défense collective. Créée pour contrer la menace soviétique, elle a survécu à la fin de la Guerre froide en se réinventant. Avec 32 membres en 2025 (après l\'adhésion de la Finlande en 2023 et de la Suède en 2024), elle dispose de la plus puissante capacité militaire du monde.',
                'Le fonctionnement de l\'OTAN repose sur le <strong>consensus</strong> : chaque décision requiert l\'unanimité des 32 membres. Le Conseil de l\'Atlantique Nord (NAC), instance politique suprême, se réunit au niveau des ambassadeurs (en permanence), des ministres (plusieurs fois par an) et des chefs d\'État (sommets). Le Commandement suprême des forces alliées en Europe (SACEUR) est traditionnellement un général américain.'
              ],
              highlight: 'L\'OTAN compte 32 membres en 2025, représentant plus de 50 % des dépenses militaires mondiales.'
            },
            {
              title: 'Autres alliances et partenariats',
              paragraphs: [
                'Au-delà de l\'OTAN, d\'autres <strong>alliances de défense</strong> structurent la sécurité mondiale. L\'Organisation du traité de sécurité collective (OTSC), menée par la Russie, regroupe six États post-soviétiques. L\'AUKUS (2021, Australie-Royaume-Uni-États-Unis) est un pacte technologique et militaire orienté vers l\'Indo-Pacifique, incluant des sous-marins nucléaires pour l\'Australie.',
                'Le <strong>Quad</strong> (Quadrilateral Security Dialogue : États-Unis, Japon, Inde, Australie) est un forum stratégique informel visant à contrebalancer l\'influence chinoise en Indo-Pacifique. L\'Union africaine développe sa propre Force africaine en attente (FAA) pour intervenir dans les crises continentales. L\'ASEAN (10 pays d\'Asie du Sud-Est) privilégie le dialogue et la non-ingérence, refusant toute alliance militaire formelle.'
              ],
              highlight: 'L\'AUKUS (2021) a provoqué une crise diplomatique avec la France, qui a perdu un contrat de sous-marins de 56 milliards d\'euros avec l\'Australie.'
            },
            {
              title: 'La sécurité collective au XXIe siècle',
              paragraphs: [
                'Le concept de <strong>sécurité collective</strong>, fondement de l\'ONU, repose sur l\'idée que la paix est indivisible : une agression contre un État menace la communauté entière. En théorie, le Conseil de sécurité autorise l\'usage de la force contre l\'agresseur. En pratique, le veto des membres permanents paralyse souvent le système, comme lors de l\'invasion de l\'Ukraine par la Russie en 2022.',
                'Les <strong>nouveaux défis sécuritaires</strong> dépassent le cadre militaire traditionnel : terrorisme transnational, prolifération nucléaire (Iran, Corée du Nord), cyberattaques étatiques, migration de masse, pandémies et changement climatique. L\'objectif de l\'OTAN de 2 % du PIB consacré à la défense, longtemps un vœu pieux, est désormais atteint par la majorité des membres après l\'invasion de l\'Ukraine.'
              ],
              highlight: 'L\'invasion de l\'Ukraine en 2022 a provoqué la plus grande recomposition de la sécurité européenne depuis la fin de la Guerre froide.'
            }
          ],
          quiz: [
            { q: 'Quand l\'article 5 de l\'OTAN a-t-il été invoqué ?', opts: ['Jamais', 'Après le 11 septembre 2001', 'Pendant la guerre du Golfe', 'En 2022'], correct: 1, explanation: 'L\'article 5 n\'a été invoqué qu\'une seule fois dans l\'histoire de l\'OTAN : le 12 septembre 2001, au lendemain des attentats du 11 septembre.' },
            { q: 'Combien de membres compte l\'OTAN en 2025 ?', opts: ['28', '30', '32', '34'], correct: 2, explanation: 'L\'OTAN compte 32 membres en 2025, après l\'adhésion de la Finlande (2023) et de la Suède (2024).' },
            { q: 'Qu\'est-ce que l\'AUKUS ?', opts: ['Une organisation humanitaire', 'Un pacte militaire Australie-UK-USA', 'Un accord commercial', 'Une agence de l\'ONU'], correct: 1, explanation: 'L\'AUKUS est un pacte de sécurité trilatéral entre l\'Australie, le Royaume-Uni et les États-Unis, signé en 2021, centré sur l\'Indo-Pacifique.' }
          ],
          definitions: [
            { term: 'Article 5', def: 'Clause de défense collective du traité de l\'OTAN stipulant qu\'une attaque armée contre un membre est considérée comme une attaque contre tous.' },
            { term: 'OTAN', def: 'Organisation du traité de l\'Atlantique Nord : alliance militaire de 32 pays fondée en 1949 pour assurer la défense collective de ses membres.' },
            { term: 'Sécurité collective', def: 'Principe selon lequel la paix est indivisible et la communauté internationale doit agir collectivement contre tout agresseur.' },
            { term: 'AUKUS', def: 'Pacte de sécurité trilatéral (2021) entre l\'Australie, le Royaume-Uni et les États-Unis pour renforcer la présence militaire en Indo-Pacifique.' },
            { term: 'Quad', def: 'Dialogue quadrilatéral de sécurité entre les États-Unis, le Japon, l\'Inde et l\'Australie pour contrebalancer l\'influence chinoise.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le siège de l\'OTAN à Bruxelles, inauguré en 2018, a coûté 1,2 milliard d\'euros. En forme d\'étoile, il symbolise les doigts entrelacés de l\'alliance.' },
            { front: '💡 Le savais-tu ?', back: 'L\'adhésion de la Finlande à l\'OTAN en 2023 a doublé la frontière terrestre de l\'alliance avec la Russie, ajoutant 1 340 km.' },
            { front: '💡 Le savais-tu ?', back: 'Le « bouton nucléaire » n\'existe pas physiquement. La procédure de lancement américaine implique une mallette (« football ») contenant les codes, portée en permanence par un aide de camp du président.' }
          ]
        },
        {
          slug: 'organisations-regionales',
          title: 'Organisations régionales',
          description: 'Union africaine, ASEAN, Mercosur, Ligue arabe et autres organisations régionales.',
          intro: 'Les <strong>organisations régionales</strong> regroupent des États d\'une même zone géographique pour coopérer dans les domaines politique, économique ou sécuritaire. Du panafricanisme de l\'Union africaine à l\'intégration économique de l\'ASEAN, ces organisations structurent les relations internationales à l\'échelle continentale.',
          introHighlight: '<strong>L\'Union africaine</strong> (55 États) et l\'ASEAN (10 États) sont les deux organisations régionales les plus dynamiques hors Europe et Amériques.',
          intro2: '',
          sections: [
            {
              title: 'Afrique et monde arabe',
              paragraphs: [
                'L\'<strong>Union africaine</strong> (UA), créée en 2002 en remplacement de l\'Organisation de l\'unité africaine (OUA, 1963), regroupe 55 États africains. Son siège est à Addis-Abeba (Éthiopie). L\'UA a adopté l\'Agenda 2063, vision de développement continental, et crée progressivement une zone de libre-échange continentale (ZLECAf) qui, avec 1,4 milliard de personnes, sera le plus grand marché commun du monde.',
                'La <strong>Ligue arabe</strong> (22 membres, 1945) est l\'une des plus anciennes organisations régionales. Le Conseil de coopération du Golfe (CCG, 6 monarchies du Golfe) coordonne politiques économiques et sécuritaires dans une région stratégique pour l\'énergie mondiale. Ces organisations sont souvent critiquées pour leur inefficacité face aux conflits internes (guerres civiles en Syrie, au Yémen, au Soudan) et les divergences politiques entre leurs membres.'
              ],
              highlight: 'La ZLECAf (Zone de libre-échange continentale africaine) regroupera 1,4 milliard de personnes, devenant le plus grand marché commun du monde.'
            },
            {
              title: 'Asie-Pacifique',
              paragraphs: [
                'L\'<strong>ASEAN</strong> (Association des nations de l\'Asie du Sud-Est), fondée en 1967, regroupe 10 pays : Indonésie, Malaisie, Thaïlande, Philippines, Singapour, Vietnam, Birmanie, Cambodge, Laos et Brunei. Son modèle de coopération, le « ASEAN Way », privilégie le consensus, la non-ingérence et le respect de la souveraineté. La Communauté économique de l\'ASEAN (2015) vise un marché unique de 680 millions de personnes.',
                'L\'<strong>APEC</strong> (Coopération économique pour l\'Asie-Pacifique, 21 économies) et le Forum des îles du Pacifique (18 membres) complètent l\'architecture régionale. La montée en puissance de la Chine crée des tensions : les revendications en mer de Chine méridionale opposent Pékin à plusieurs membres de l\'ASEAN (Vietnam, Philippines, Malaisie, Brunei). L\'Organisation de coopération de Shanghai (OCS), créée en 2001, est le principal forum Chine-Russie-Asie centrale.'
              ],
              highlight: 'L\'ASEAN regroupe 680 millions de personnes et constitue la cinquième économie mondiale si on la considère comme un ensemble.'
            },
            {
              title: 'Amériques et autres',
              paragraphs: [
                'L\'<strong>Organisation des États américains</strong> (OEA, 35 membres, 1948) est le plus ancien organisme régional du monde. Le Mercosur (Brésil, Argentine, Uruguay, Paraguay, fondé en 1991) est une union douanière visant l\'intégration économique. L\'ALENA, remplacé en 2020 par l\'ACEUM (Accord Canada–États-Unis–Mexique), lie les trois économies nord-américaines.',
                'Les <strong>BRICS</strong> (Brésil, Russie, Inde, Chine, Afrique du Sud), élargis en 2024 à l\'Égypte, l\'Éthiopie, l\'Iran et les Émirats arabes unis, ne sont pas une organisation formelle mais un forum de coordination entre puissances émergentes. Représentant 46 % de la population mondiale et 37 % du PIB mondial (en parité de pouvoir d\'achat), les BRICS+ contestent la gouvernance mondiale dominée par l\'Occident et promeuvent un monde multipolaire.'
              ],
              highlight: 'Les BRICS+, élargis en 2024, représentent 46 % de la population mondiale et contestent l\'ordre international dominé par l\'Occident.'
            }
          ],
          quiz: [
            { q: 'Combien d\'États compte l\'Union africaine ?', opts: ['35', '45', '55', '60'], correct: 2, explanation: 'L\'Union africaine regroupe 55 États africains, soit la totalité du continent. Son siège est à Addis-Abeba (Éthiopie).' },
            { q: 'Qu\'est-ce que l\'« ASEAN Way » ?', opts: ['Une autoroute asiatique', 'Un modèle de coopération basé sur le consensus et la non-ingérence', 'Une marque commerciale', 'Un style architectural'], correct: 1, explanation: 'L\'ASEAN Way est le modèle de coopération de l\'ASEAN fondé sur le consensus, la non-ingérence dans les affaires intérieures et le respect de la souveraineté.' },
            { q: 'Que sont les BRICS ?', opts: ['Un matériau de construction', 'Un forum de puissances émergentes', 'Une alliance militaire', 'Un programme spatial'], correct: 1, explanation: 'Les BRICS sont un forum de coordination entre grandes puissances émergentes (Brésil, Russie, Inde, Chine, Afrique du Sud), élargi en 2024 à quatre nouveaux membres.' }
          ],
          definitions: [
            { term: 'Union africaine', def: 'Organisation régionale regroupant 55 États africains, créée en 2002, visant l\'intégration politique et économique du continent.' },
            { term: 'ASEAN', def: 'Association des nations de l\'Asie du Sud-Est regroupant 10 pays, fondée en 1967, basée sur le consensus et la non-ingérence.' },
            { term: 'ZLECAf', def: 'Zone de libre-échange continentale africaine : accord commercial visant à créer un marché unique pour les 55 États de l\'Union africaine.' },
            { term: 'BRICS', def: 'Forum de coordination entre puissances émergentes (Brésil, Russie, Inde, Chine, Afrique du Sud) élargi en 2024.' },
            { term: 'Mercosur', def: 'Union douanière d\'Amérique du Sud (Brésil, Argentine, Uruguay, Paraguay) fondée en 1991.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le siège de l\'Union africaine à Addis-Abeba a été entièrement financé et construit par la Chine (200 millions de dollars), offert en « cadeau » à l\'Afrique en 2012.' },
            { front: '💡 Le savais-tu ?', back: 'L\'acronyme BRIC a été inventé en 2001 par l\'économiste Jim O\'Neill de Goldman Sachs dans un rapport d\'investissement. Le S (Afrique du Sud) a été ajouté en 2010.' },
            { front: '💡 Le savais-tu ?', back: 'Singapour, membre fondateur de l\'ASEAN, a un PIB par habitant supérieur à celui des États-Unis ou de la France, alors que d\'autres membres comme le Cambodge figurent parmi les pays les plus pauvres d\'Asie.' }
          ]
        },
        {
          slug: 'ong-et-societe-civile',
          title: 'ONG et société civile internationale',
          description: 'Rôle des ONG, mouvements sociaux transnationaux et acteurs non étatiques.',
          intro: 'Les <strong>organisations non gouvernementales</strong> (ONG) sont devenues des acteurs incontournables des relations internationales. De Médecins Sans Frontières à Amnesty International, elles influencent les politiques publiques, fournissent une aide humanitaire et exercent une surveillance des droits de l\'homme.',
          introHighlight: '<strong>Plus de 40 000 ONG internationales</strong> opèrent dans le monde, employant des millions de personnes et mobilisant des milliards de dollars.',
          intro2: '',
          sections: [
            {
              title: 'Les grandes ONG humanitaires',
              paragraphs: [
                'Le <strong>Comité international de la Croix-Rouge</strong> (CICR, 1863) est la plus ancienne organisation humanitaire. Gardien des Conventions de Genève, il protège les victimes de conflits armés, visite les prisonniers de guerre et rétablit les liens familiaux. Il a reçu le prix Nobel de la paix à trois reprises (1917, 1944, 1963). <strong>Médecins Sans Frontières</strong> (MSF, 1971), fondé par Bernard Kouchner, est le pionnier de l\'aide médicale d\'urgence (prix Nobel 1999).',
                'Les grandes ONG humanitaires comptent aussi <strong>Oxfam</strong> (lutte contre la pauvreté, 70 pays), Save the Children (protection de l\'enfance), Action contre la Faim (malnutrition) et CARE (développement). Le Haut Commissariat des Nations Unies pour les réfugiés (HCR), bien qu\'agence onusienne, travaille en étroite collaboration avec les ONG. En 2025, les crises humanitaires touchent 300 millions de personnes, un record historique.'
              ],
              highlight: 'Le CICR a reçu le prix Nobel de la paix trois fois (1917, 1944, 1963), un record partagé avec aucune autre organisation.'
            },
            {
              title: 'ONG de plaidoyer et droits de l\'homme',
              paragraphs: [
                '<strong>Amnesty International</strong> (1961, prix Nobel 1977, 10 millions de sympathisants) est la plus grande ONG de défense des droits de l\'homme. Ses rapports annuels documentent les violations dans 150 pays. <strong>Human Rights Watch</strong> (1978) complète ce dispositif de surveillance. Greenpeace (1971) et le WWF (1961) sont les piliers du mouvement environnemental international.',
                'Les ONG de plaidoyer exercent un <strong>pouvoir d\'influence</strong> considérable : elles alertent l\'opinion publique, font pression sur les gouvernements (lobbying), participent aux négociations internationales (statut d\'observateur à l\'ONU) et saisissent les tribunaux. La campagne internationale contre les mines antipersonnel, menée par une coalition de 1 400 ONG, a abouti au traité d\'Ottawa (1997) et au prix Nobel de la paix pour Jody Williams.'
              ],
              highlight: 'La campagne contre les mines antipersonnel, coalition de 1 400 ONG, a abouti au traité d\'Ottawa (1997) interdisant ces armes dans 164 pays.'
            },
            {
              title: 'Défis et critiques',
              paragraphs: [
                'Les ONG font face à des <strong>critiques croissantes</strong>. Leur légitimité démocratique est questionnée : qui les a mandatées ? À qui rendent-elles des comptes ? Les scandales (détournements, abus sexuels lors de missions humanitaires) ont entamé leur crédibilité. Le phénomène du « white saviorism » (sauveur blanc) est dénoncé par les acteurs locaux qui revendiquent leur autonomie.',
                'Les <strong>régimes autoritaires</strong> restreignent de plus en plus l\'espace des ONG. La Russie a classé de nombreuses ONG comme « agents de l\'étranger ». La Chine, l\'Égypte et l\'Inde ont durci leurs législations sur le financement étranger. Malgré ces obstacles, la société civile transnationale reste un contre-pouvoir essentiel. Les mouvements sociaux numériques (#MeToo, Fridays for Future, Black Lives Matter) ont renouvelé les formes d\'engagement citoyen à l\'échelle mondiale.'
              ],
              highlight: 'Greta Thunberg et le mouvement Fridays for Future ont mobilisé 14 millions de personnes dans 7 500 villes de 185 pays entre 2018 et 2020.'
            }
          ],
          quiz: [
            { q: 'En quelle année a été fondé le CICR ?', opts: ['1863', '1919', '1945', '1971'], correct: 0, explanation: 'Le Comité international de la Croix-Rouge a été fondé en 1863 à Genève par Henry Dunant, horrifié par les souffrances des blessés à la bataille de Solferino (1859).' },
            { q: 'Combien de fois le CICR a-t-il reçu le prix Nobel de la paix ?', opts: ['1', '2', '3', '4'], correct: 2, explanation: 'Le CICR a reçu le prix Nobel de la paix à trois reprises : 1917, 1944 et 1963, un record dans l\'histoire du prix.' },
            { q: 'Quel traité a interdit les mines antipersonnel ?', opts: ['Traité de Genève', 'Traité de Rome', 'Traité d\'Ottawa', 'Traité de Lisbonne'], correct: 2, explanation: 'Le traité d\'Ottawa (1997) interdit l\'utilisation, le stockage, la production et le transfert de mines antipersonnel. Il a été signé par 164 États.' }
          ],
          definitions: [
            { term: 'ONG', def: 'Organisation non gouvernementale : association privée, à but non lucratif, agissant dans l\'intérêt public au niveau national ou international.' },
            { term: 'CICR', def: 'Comité international de la Croix-Rouge : organisation humanitaire fondée en 1863, gardienne des Conventions de Genève.' },
            { term: 'Plaidoyer', def: 'Action visant à influencer les décisions politiques par l\'information, la sensibilisation et la pression sur les décideurs.' },
            { term: 'Société civile', def: 'Ensemble des organisations et mouvements citoyens (ONG, syndicats, associations) agissant indépendamment de l\'État et du marché.' },
            { term: 'Statut d\'observateur', def: 'Statut accordé par l\'ONU à certaines organisations leur permettant de participer aux débats sans droit de vote.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Henry Dunant, fondateur de la Croix-Rouge, mourut dans la pauvreté en 1910 dans un hospice suisse. Il avait reçu le premier prix Nobel de la paix en 1901 mais vécut ses dernières années dans le dénuement.' },
            { front: '💡 Le savais-tu ?', back: 'Amnesty International a été fondée en 1961 par l\'avocat britannique Peter Benenson après avoir lu un article sur deux étudiants portugais emprisonnés pour avoir porté un toast à la liberté.' },
            { front: '💡 Le savais-tu ?', back: 'Le budget annuel de MSF (Médecins Sans Frontières) dépasse 2 milliards d\'euros, financé à 97 % par des dons privés pour garantir son indépendance vis-à-vis des gouvernements.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 3 — Conflits
    // ──────────────────────────────────────────────
    {
      slug: 'conflits',
      title: 'Conflits',
      description: 'Guerres, crises, terrorisme, conflits asymétriques et résolution des conflits.',
      lessons: [
        {
          slug: 'theories-du-conflit',
          title: 'Théories du conflit international',
          description: 'Réalisme, libéralisme, constructivisme et compréhension des causes de la guerre.',
          intro: 'Pourquoi les États se font-ils la guerre ? Les <strong>théories des relations internationales</strong> proposent des cadres d\'analyse pour comprendre les causes des conflits, les conditions de la paix et le fonctionnement du système international.',
          introHighlight: '<strong>Le réalisme</strong>, théorie dominante depuis Thucydide, considère que l\'anarchie du système international et la quête de puissance rendent les conflits inévitables.',
          intro2: '',
          sections: [
            {
              title: 'Le réalisme',
              paragraphs: [
                'Le <strong>réalisme</strong> est la plus ancienne et la plus influente des théories des relations internationales. Fondé sur les travaux de Thucydide (Ve siècle av. J.-C.), Machiavel et Hobbes, il a été formalisé par Hans Morgenthau (Politics Among Nations, 1948) et Kenneth Waltz (Theory of International Politics, 1979). Le réalisme repose sur trois postulats : les États sont les acteurs principaux, le système international est anarchique (pas d\'autorité supérieure) et les États recherchent la puissance pour assurer leur survie.',
                'Le <strong>néoréalisme</strong> de Waltz ajoute que la structure du système (unipolaire, bipolaire, multipolaire) détermine le comportement des États. Un système bipolaire (Guerre froide) serait plus stable qu\'un système multipolaire (avant 1914) car les deux superpuissances s\'équilibrent mutuellement. Le réalisme offensif de John Mearsheimer considère que les grandes puissances cherchent toujours à maximiser leur pouvoir, rendant les conflits récurrents.'
              ],
              highlight: 'Thucydide écrivait il y a 2 500 ans : « Les forts font ce qu\'ils peuvent, les faibles souffrent ce qu\'ils doivent » — une formule réaliste intemporelle.'
            },
            {
              title: 'Le libéralisme',
              paragraphs: [
                'Le <strong>libéralisme</strong>, issu de la pensée de Kant (Vers la paix perpétuelle, 1795), Locke et Montesquieu, est plus optimiste. Il identifie trois facteurs de paix : les institutions internationales (qui réduisent l\'incertitude et facilitent la coopération), l\'interdépendance économique (le commerce rend la guerre trop coûteuse) et la démocratie (la théorie de la « paix démocratique » observe que les démocraties ne se font presque jamais la guerre entre elles).',
                'Le <strong>néolibéralisme institutionnel</strong> de Robert Keohane (After Hegemony, 1984) montre que les institutions internationales (ONU, OMC, FMI) facilitent la coopération même en l\'absence d\'un hégémon. Les institutions réduisent les coûts de transaction, fournissent de l\'information et créent des attentes de réciprocité. La théorie de l\'interdépendance complexe, développée par Keohane et Joseph Nye, souligne la multiplicité des canaux de contact entre sociétés.'
              ],
              highlight: 'La théorie de la paix démocratique observe qu\'aucune guerre n\'a éclaté entre deux démocraties consolidées depuis 1945.'
            },
            {
              title: 'Le constructivisme et les approches critiques',
              paragraphs: [
                'Le <strong>constructivisme</strong>, théorisé par Alexander Wendt (Anarchy is What States Make of It, 1992), affirme que les structures du système international ne sont pas données mais socialement construites. Les identités, les normes et les idées façonnent les intérêts des États. L\'anarchie n\'est pas inéluctablement conflictuelle : les relations entre la France et l\'Allemagne ont évolué de l\'inimitié à l\'amitié grâce à un changement d\'identités et de normes.',
                'Les <strong>approches critiques</strong> incluent le marxisme (les conflits reflètent les inégalités du capitalisme mondial), le féminisme (les relations internationales sont structurées par le genre), le post-colonialisme (les structures de domination coloniale perdurent) et l\'École de Copenhague (élargissement du concept de sécurité au-delà du militaire : sécurité environnementale, sanitaire, alimentaire, cybernétique).'
              ],
              highlight: 'Alexander Wendt résumait le constructivisme par cette formule célèbre : « L\'anarchie est ce que les États en font. »'
            }
          ],
          quiz: [
            { q: 'Quel est le postulat central du réalisme ?', opts: ['Les États coopèrent naturellement', 'Le système international est anarchique et les États recherchent la puissance', 'Les institutions internationales garantissent la paix', 'Le commerce empêche la guerre'], correct: 1, explanation: 'Le réalisme repose sur l\'idée que le système international est anarchique (pas d\'autorité supérieure) et que les États recherchent la puissance pour assurer leur survie.' },
            { q: 'Qu\'observe la théorie de la paix démocratique ?', opts: ['Les démocraties sont pacifistes', 'Les démocraties ne se font presque jamais la guerre entre elles', 'La démocratie est impossible', 'Les dictatures sont plus stables'], correct: 1, explanation: 'La théorie de la paix démocratique observe empiriquement que les démocraties consolidées ne se font presque jamais la guerre entre elles.' },
            { q: 'Que signifie « l\'anarchie est ce que les États en font » ?', opts: ['L\'anarchie mène toujours à la guerre', 'Les structures internationales sont socialement construites', 'Les États sont irrationnels', 'Il faut un gouvernement mondial'], correct: 1, explanation: 'Cette formule constructiviste d\'Alexander Wendt signifie que l\'anarchie du système international n\'est pas déterministe : les États peuvent la transformer par leurs pratiques et leurs identités.' }
          ],
          definitions: [
            { term: 'Réalisme', def: 'Théorie des RI selon laquelle les États, dans un système anarchique, recherchent la puissance pour assurer leur survie.' },
            { term: 'Libéralisme', def: 'Théorie des RI selon laquelle les institutions, le commerce et la démocratie peuvent réduire les conflits et favoriser la coopération.' },
            { term: 'Constructivisme', def: 'Théorie selon laquelle les structures du système international sont socialement construites par les idées, les normes et les identités.' },
            { term: 'Paix démocratique', def: 'Observation empirique selon laquelle les démocraties consolidées ne se font presque jamais la guerre entre elles.' },
            { term: 'Anarchie internationale', def: 'Absence d\'autorité supérieure aux États dans le système international, concept central du réalisme.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Thucydide, historien grec du Ve siècle av. J.-C., est considéré comme le premier théoricien réaliste des relations internationales. Son récit de la guerre du Péloponnèse est encore étudié à West Point.' },
            { front: '💡 Le savais-tu ?', back: 'Le « piège de Thucydide » (une puissance montante défiant une puissance établie) a été théorisé par Graham Allison (Harvard) pour décrire la rivalité sino-américaine.' },
            { front: '💡 Le savais-tu ?', back: 'Emmanuel Kant, dans Vers la paix perpétuelle (1795), proposait trois conditions de paix : des constitutions républicaines, une fédération d\'États libres et un droit cosmopolitique — des idées reprises par l\'UE et l\'ONU.' }
          ]
        },
        {
          slug: 'guerres-modernes',
          title: 'Guerres et conflits modernes',
          description: 'Les grandes guerres du XXe siècle et les conflits contemporains.',
          intro: 'Le XXe siècle a été le plus meurtrier de l\'histoire humaine avec deux guerres mondiales et des dizaines de conflits régionaux. Le XXIe siècle voit émerger de <strong>nouvelles formes de guerre</strong> : asymétrique, hybride, cybernétique et informationnelle.',
          introHighlight: '<strong>Les deux guerres mondiales</strong> ont causé la mort de 80 à 100 millions de personnes et transformé radicalement le système international.',
          intro2: '',
          sections: [
            {
              title: 'Les guerres mondiales',
              paragraphs: [
                'La <strong>Première Guerre mondiale</strong> (1914-1918) opposa les Empires centraux (Allemagne, Autriche-Hongrie, Empire ottoman) aux Alliés (France, Royaume-Uni, Russie, puis États-Unis). Guerre industrielle totale, elle introduisit les tranchées, les gaz de combat, les chars et l\'aviation. Le bilan est effroyable : 10 millions de soldats tués, 20 millions de blessés. Le traité de Versailles (1919), jugé humiliant par l\'Allemagne, sema les germes de la Seconde Guerre mondiale.',
                'La <strong>Seconde Guerre mondiale</strong> (1939-1945), le conflit le plus destructeur de l\'histoire, opposa les Alliés (États-Unis, URSS, Royaume-Uni, France libre) à l\'Axe (Allemagne nazie, Italie fasciste, Japon impérial). Bilan : 60 à 80 millions de morts, dont la Shoah (6 millions de Juifs assassinés). La capitulation du Japon après Hiroshima et Nagasaki (août 1945) inaugura l\'ère nucléaire.'
              ],
              highlight: 'La Seconde Guerre mondiale est le conflit le plus meurtrier de l\'histoire : entre 60 et 80 millions de morts en six ans.'
            },
            {
              title: 'La Guerre froide et les conflits par procuration',
              paragraphs: [
                'La <strong>Guerre froide</strong> (1947-1991) opposa les États-Unis et l\'URSS dans une rivalité idéologique, militaire et économique globale. La dissuasion nucléaire (« équilibre de la terreur ») empêcha un conflit direct, mais les deux superpuissances s\'affrontèrent à travers des <strong>guerres par procuration</strong> : Corée (1950-1953), Vietnam (1955-1975), Afghanistan (1979-1989), Angola, Mozambique, Nicaragua.',
                'La <strong>chute du Mur de Berlin</strong> (9 novembre 1989) et la dissolution de l\'URSS (25 décembre 1991) mirent fin à la Guerre froide. Francis Fukuyama proclama « la fin de l\'histoire », prédisant le triomphe universel de la démocratie libérale. Samuel Huntington répondit par Le Choc des civilisations (1996), prédisant que les conflits futurs opposeraient non plus des idéologies mais des civilisations.'
              ],
              highlight: 'Pendant la Guerre froide, les arsenaux nucléaires combinés dépassèrent 70 000 ogives, assez pour détruire la civilisation plusieurs fois.'
            },
            {
              title: 'Conflits du XXIe siècle',
              paragraphs: [
                'Le <strong>11 septembre 2001</strong> ouvrit l\'ère de la guerre contre le terrorisme. Les interventions en Afghanistan (2001-2021) et en Irak (2003) illustrèrent les limites de la supériorité militaire conventionnelle face à des insurgés. Le « Printemps arabe » (2011) déclencha des guerres civiles en Syrie, en Libye et au Yémen, créant des millions de réfugiés et l\'émergence de Daech.',
                'L\'<strong>invasion de l\'Ukraine</strong> par la Russie (24 février 2022) a marqué le retour de la guerre conventionnelle à grande échelle en Europe, remettant en cause l\'ordre de sécurité post-Guerre froide. Ce conflit mêle guerre de tranchées (rappelant 1914-1918), drones, cyberattaques et guerre informationnelle, préfigurant les <strong>guerres hybrides</strong> de demain.'
              ],
              highlight: 'L\'invasion de l\'Ukraine en 2022 est le plus grand conflit armé en Europe depuis la Seconde Guerre mondiale.'
            }
          ],
          quiz: [
            { q: 'Combien de morts la Seconde Guerre mondiale a-t-elle causé ?', opts: ['10-20 millions', '30-40 millions', '60-80 millions', '100-120 millions'], correct: 2, explanation: 'La Seconde Guerre mondiale a causé entre 60 et 80 millions de morts, civils et militaires confondus, en faisant le conflit le plus meurtrier de l\'histoire.' },
            { q: 'Qu\'est-ce qu\'une guerre par procuration ?', opts: ['Une guerre entre voisins', 'Un conflit où des puissances s\'affrontent à travers des alliés locaux', 'Une guerre simulée', 'Un conflit économique'], correct: 1, explanation: 'Une guerre par procuration est un conflit où deux puissances rivales (comme les USA et l\'URSS) s\'affrontent indirectement à travers des alliés ou des factions locales.' },
            { q: 'Quand le Mur de Berlin est-il tombé ?', opts: ['1985', '1989', '1991', '1995'], correct: 1, explanation: 'Le Mur de Berlin est tombé le 9 novembre 1989, événement symbolique marquant la fin de la Guerre froide et la réunification de l\'Europe.' }
          ],
          definitions: [
            { term: 'Guerre froide', def: 'Période de rivalité idéologique et militaire entre les États-Unis et l\'URSS (1947-1991) sans conflit armé direct entre les deux superpuissances.' },
            { term: 'Guerre par procuration', def: 'Conflit où des puissances rivales s\'affrontent indirectement en soutenant des factions opposées dans un pays tiers.' },
            { term: 'Guerre hybride', def: 'Conflit combinant moyens militaires conventionnels, actions irrégulières, cyberattaques et guerre informationnelle.' },
            { term: 'Dissuasion nucléaire', def: 'Doctrine selon laquelle la possession d\'armes nucléaires dissuade l\'adversaire d\'attaquer par la menace de destruction mutuelle assurée (MAD).' },
            { term: 'Printemps arabe', def: 'Vague de soulèvements populaires dans le monde arabe en 2011, ayant entraîné la chute de plusieurs régimes autoritaires et déclenché des guerres civiles.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La crise des missiles de Cuba (octobre 1962) a été le moment le plus proche de la guerre nucléaire. Le sous-marin soviétique B-59, pourchassé par la marine américaine, a failli lancer une torpille nucléaire. Un seul officier, Vassili Arkhipov, a refusé de donner son accord, sauvant probablement le monde.' },
            { front: '💡 Le savais-tu ?', back: 'La guerre en Afghanistan (2001-2021) a été le plus long conflit armé de l\'histoire des États-Unis : 20 ans, 2 400 soldats américains tués et un coût estimé à 2 300 milliards de dollars.' },
            { front: '💡 Le savais-tu ?', back: 'En 2025, il y a plus de 50 conflits armés actifs dans le monde, le nombre le plus élevé depuis la fin de la Seconde Guerre mondiale.' }
          ]
        },
        {
          slug: 'terrorisme-international',
          title: 'Terrorisme international',
          description: 'Définition, mouvements, contre-terrorisme et radicalisation.',
          intro: 'Le <strong>terrorisme international</strong> est devenu la menace sécuritaire dominante du XXIe siècle après les attentats du 11 septembre 2001. Phénomène complexe mêlant idéologie, violence politique et manipulation psychologique, il défie les approches conventionnelles de la sécurité.',
          introHighlight: '<strong>Il n\'existe pas de définition universelle du terrorisme</strong> : l\'ONU tente depuis des décennies de s\'accorder sur une définition commune, mais le clivage entre « terroriste » et « résistant » reste politiquement insoluble.',
          intro2: '',
          sections: [
            {
              title: 'Définition et typologies',
              paragraphs: [
                'Le <strong>terrorisme</strong> se caractérise par l\'usage délibéré de la violence contre des civils pour créer un climat de terreur et atteindre des objectifs politiques. Quatre éléments le distinguent de la criminalité ordinaire : un acte de violence, contre des non-combattants, avec une intention politique et un objectif de communication (le spectacle de la terreur). Le terrorisme est un mode d\'action, non une idéologie : il a été utilisé par des groupes d\'extrême gauche, d\'extrême droite, nationalistes, séparatistes et djihadistes.',
                'On distingue le <strong>terrorisme d\'État</strong> (violence exercée par un gouvernement contre sa population), le terrorisme séparatiste (ETA, IRA, PKK), le terrorisme révolutionnaire (Brigades rouges, RAF), le terrorisme djihadiste (Al-Qaïda, Daech) et le terrorisme d\'extrême droite (attentat de Christchurch, 2019). Le « loup solitaire », individu radicalisé agissant seul, est la forme la plus difficile à détecter et à prévenir.'
              ],
              highlight: 'Le terrorisme est un mode d\'action, non une idéologie : des mouvements très divers l\'ont utilisé à travers l\'histoire.'
            },
            {
              title: 'Al-Qaïda, Daech et le djihadisme',
              paragraphs: [
                '<strong>Al-Qaïda</strong>, fondée par Oussama ben Laden en 1988, est responsable des attentats du 11 septembre 2001 (2 977 morts). Ce réseau décentralisé opérait depuis l\'Afghanistan sous la protection des talibans. L\'intervention américaine en Afghanistan décima la direction d\'Al-Qaïda, mais le mouvement se fragmenta en branches régionales (AQMI au Sahel, AQPA au Yémen, Al-Shabaab en Somalie).',
                '<strong>Daech</strong> (État islamique), né en Irak en 2006, proclama un « califat » en 2014 sur un territoire grand comme la Grande-Bretagne à cheval entre l\'Irak et la Syrie. Sa stratégie combinait contrôle territorial, propagande numérique sophistiquée et attentats internationaux (Paris 2015, Bruxelles 2016, Nice 2016). La coalition internationale a détruit le « califat » en 2019, mais l\'organisation survit comme réseau clandestin.'
              ],
              highlight: 'Les attentats du 11 septembre 2001 ont tué 2 977 personnes et coûté 3 300 milliards de dollars à l\'économie mondiale.'
            },
            {
              title: 'Contre-terrorisme et prévention',
              paragraphs: [
                'Le <strong>contre-terrorisme</strong> mobilise des moyens considérables : renseignement (surveillance électronique, infiltration), forces spéciales (GIGN, SAS, Delta Force), coopération judiciaire internationale (mandat d\'arrêt européen, Interpol) et législation antiterroriste. Depuis 2001, les États démocratiques ont adopté des lois étendant les pouvoirs de surveillance, suscitant un débat permanent entre sécurité et libertés civiles.',
                'La <strong>prévention de la radicalisation</strong> est devenue une priorité. Les programmes de déradicalisation visent à déconstruire l\'idéologie extrémiste et à réinsérer les individus radicalisés. L\'approche danoise (Aarhus Model) privilégie le suivi social et psychologique plutôt que la répression. La lutte contre la propagande en ligne, les discours de haine et le recrutement sur les réseaux sociaux constitue un front essentiel.'
              ],
              highlight: 'Le modèle d\'Aarhus (Danemark), axé sur le dialogue et la réinsertion plutôt que la répression, est considéré comme l\'un des plus efficaces au monde.'
            }
          ],
          quiz: [
            { q: 'Quelle est la caractéristique principale du terrorisme ?', opts: ['La violence entre armées', 'L\'usage de la violence contre des civils à des fins politiques', 'Le trafic de drogue', 'L\'espionnage'], correct: 1, explanation: 'Le terrorisme se caractérise par l\'usage délibéré de la violence contre des non-combattants (civils) pour créer un climat de terreur et atteindre des objectifs politiques.' },
            { q: 'En quelle année Daech a-t-il proclamé son « califat » ?', opts: ['2001', '2006', '2014', '2019'], correct: 2, explanation: 'Daech a proclamé son « califat » en juin 2014, contrôlant un territoire à cheval entre l\'Irak et la Syrie. Le « califat » a été détruit militairement en 2019.' },
            { q: 'Qu\'est-ce qu\'un « loup solitaire » en matière de terrorisme ?', opts: ['Un animal utilisé comme arme', 'Un individu radicalisé agissant seul', 'Un espion infiltré', 'Un chef de réseau'], correct: 1, explanation: 'Un « loup solitaire » est un individu radicalisé qui planifie et commet un attentat seul, sans appartenir formellement à un groupe terroriste, ce qui le rend très difficile à détecter.' }
          ],
          definitions: [
            { term: 'Terrorisme', def: 'Usage délibéré de la violence contre des civils pour créer un climat de terreur et atteindre des objectifs politiques.' },
            { term: 'Djihadisme', def: 'Idéologie prônant le djihad armé (guerre sainte) pour imposer une vision extrémiste de l\'islam et établir un État islamique.' },
            { term: 'Radicalisation', def: 'Processus par lequel un individu adopte progressivement des idées extrémistes pouvant mener à la violence.' },
            { term: 'Contre-terrorisme', def: 'Ensemble des actions militaires, policières, judiciaires et préventives visant à combattre le terrorisme.' },
            { term: 'Loup solitaire', def: 'Individu radicalisé agissant seul pour commettre un attentat, sans appartenance formelle à un groupe organisé.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le mot « terrorisme » a été inventé pendant la Révolution française pour décrire la politique de terreur de Robespierre (1793-1794). Il désignait alors une violence d\'État, non une violence d\'opposition.' },
            { front: '💡 Le savais-tu ?', back: 'Les attentats du 13 novembre 2015 à Paris (130 morts) ont constitué l\'attaque terroriste la plus meurtrière sur le sol français. Ils ont conduit à la déclaration de l\'état d\'urgence pendant deux ans.' },
            { front: '💡 Le savais-tu ?', back: 'Le Global Terrorism Index 2024 montre que les décès liés au terrorisme ont diminué de 22 % dans le monde par rapport au pic de 2014, mais restent élevés au Sahel et en Asie du Sud.' }
          ]
        },
        {
          slug: 'droit-humanitaire',
          title: 'Droit international humanitaire',
          description: 'Conventions de Genève, crimes de guerre, CPI et protection des civils.',
          intro: 'Le <strong>droit international humanitaire</strong> (DIH) est l\'ensemble des règles qui limitent les effets des conflits armés et protègent les personnes qui ne participent pas aux combats. Codifié par les Conventions de Genève (1949), il constitue le noyau dur du droit international.',
          introHighlight: '<strong>Les quatre Conventions de Genève</strong> (1949), ratifiées par tous les États du monde (196 parties), sont les traités les plus universellement acceptés de l\'histoire.',
          intro2: '',
          sections: [
            {
              title: 'Les Conventions de Genève',
              paragraphs: [
                'Les <strong>quatre Conventions de Genève</strong> de 1949, complétées par deux Protocoles additionnels (1977), forment le socle du droit international humanitaire. La première protège les blessés et malades des forces armées en campagne. La deuxième protège les blessés, malades et naufragés des forces armées en mer. La troisième définit le statut et le traitement des prisonniers de guerre. La quatrième protège les personnes civiles en temps de guerre.',
                'Les principes fondamentaux du DIH sont la <strong>distinction</strong> (entre combattants et civils), la <strong>proportionnalité</strong> (les dommages collatéraux ne doivent pas être excessifs par rapport à l\'avantage militaire), la <strong>nécessité militaire</strong> (seules les actions nécessaires au but militaire sont autorisées) et l\'<strong>humanité</strong> (interdiction de causer des souffrances inutiles). Les armes aveugles (mines, bombes à sous-munitions) sont interdites.'
              ],
              highlight: 'Les Conventions de Genève sont les seuls traités ratifiés par tous les États du monde (196 parties), un universalisme unique en droit international.'
            },
            {
              title: 'Crimes de guerre et CPI',
              paragraphs: [
                'Un <strong>crime de guerre</strong> est une violation grave du droit international humanitaire : attaque délibérée contre des civils, torture de prisonniers, utilisation d\'armes interdites, prise d\'otages, destruction injustifiée de biens civils. Les crimes contre l\'humanité (persécution systématique d\'une population) et le génocide (destruction intentionnelle d\'un groupe national, ethnique ou religieux) constituent les infractions les plus graves.',
                'La <strong>Cour pénale internationale</strong> (CPI), créée par le Statut de Rome (1998) et opérationnelle depuis 2002, juge les individus (et non les États) accusés de génocide, crimes contre l\'humanité, crimes de guerre et crime d\'agression. Siégeant à La Haye, elle compte 124 États parties. Les États-Unis, la Russie, la Chine et l\'Inde n\'ont pas ratifié le Statut de Rome, limitant la portée de la CPI.'
              ],
              highlight: 'La CPI est le premier tribunal pénal international permanent : elle juge les individus responsables des crimes les plus graves, quel que soit leur rang.'
            },
            {
              title: 'Protection des civils et défis contemporains',
              paragraphs: [
                'La <strong>protection des civils</strong> est le défi majeur du DIH contemporain. Dans les conflits modernes, 90 % des victimes sont des civils (contre 10 % dans les guerres du début du XXe siècle). Les guerres urbaines (Alep, Mossoul, Marioupol, Gaza) exposent les populations à des destructions massives. Le siège comme arme de guerre, l\'utilisation de civils comme boucliers humains et le bombardement d\'hôpitaux violent le DIH.',
                'Les <strong>nouvelles technologies</strong> posent des questions inédites : les frappes de drones sont-elles compatibles avec le principe de distinction ? Les cyberattaques contre des infrastructures civiles (centrales électriques, hôpitaux) sont-elles des crimes de guerre ? Les armes autonomes (robots tueurs) peuvent-elles respecter les principes d\'humanité et de proportionnalité ? Le droit international humanitaire doit s\'adapter à ces réalités émergentes.'
              ],
              highlight: 'Dans les conflits contemporains, 90 % des victimes sont des civils, contre 10 % dans les guerres du début du XXe siècle.'
            }
          ],
          quiz: [
            { q: 'Combien y a-t-il de Conventions de Genève ?', opts: ['2', '3', '4', '5'], correct: 2, explanation: 'Il y a quatre Conventions de Genève (1949), complétées par deux Protocoles additionnels (1977), formant le socle du droit international humanitaire.' },
            { q: 'Qu\'est-ce que le principe de distinction en DIH ?', opts: ['Distinguer les alliés des ennemis', 'Distinguer les combattants des civils', 'Distinguer les armes légères des armes lourdes', 'Distinguer les officiers des soldats'], correct: 1, explanation: 'Le principe de distinction impose de différencier les combattants (cibles militaires légitimes) des civils (protégés), et les objectifs militaires des biens civils.' },
            { q: 'Combien d\'États ont ratifié le Statut de Rome de la CPI ?', opts: ['50', '100', '124', '193'], correct: 2, explanation: 'Le Statut de Rome a été ratifié par 124 États. Les États-Unis, la Russie, la Chine et l\'Inde ne l\'ont pas ratifié, limitant la juridiction de la CPI.' }
          ],
          definitions: [
            { term: 'Droit international humanitaire', def: 'Ensemble des règles limitant les effets des conflits armés et protégeant les personnes ne participant pas aux combats.' },
            { term: 'Crime de guerre', def: 'Violation grave du droit international humanitaire commise pendant un conflit armé (attaque de civils, torture, armes interdites).' },
            { term: 'Génocide', def: 'Destruction intentionnelle, en tout ou en partie, d\'un groupe national, ethnique, racial ou religieux.' },
            { term: 'CPI', def: 'Cour pénale internationale : tribunal permanent siégeant à La Haye jugeant les individus accusés des crimes les plus graves.' },
            { term: 'Principe de proportionnalité', def: 'Règle du DIH exigeant que les dommages collatéraux ne soient pas excessifs par rapport à l\'avantage militaire attendu.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Henry Dunant, fondateur de la Croix-Rouge, a été inspiré par la bataille de Solferino (1859) où 40 000 soldats furent tués ou blessés en une seule journée, la plupart abandonnés sans soins.' },
            { front: '💡 Le savais-tu ?', back: 'Le procès de Nuremberg (1945-1946) a jugé 24 dirigeants nazis pour crimes de guerre et crimes contre l\'humanité. C\'est le premier tribunal pénal international de l\'histoire.' },
            { front: '💡 Le savais-tu ?', back: 'La convention d\'Ottawa (1997) interdit les mines antipersonnel. Pourtant, on estime que 60 millions de mines restent enfouies dans 60 pays, tuant ou mutilant 15 à 20 000 personnes par an.' }
          ]
        },
        {
          slug: 'resolution-des-conflits',
          title: 'Résolution des conflits',
          description: 'Processus de paix, justice transitionnelle, réconciliation et reconstruction.',
          intro: 'La <strong>résolution des conflits</strong> ne se limite pas au cessez-le-feu : elle englobe la négociation de paix, la justice transitionnelle, la réconciliation entre communautés et la reconstruction des sociétés. Les expériences d\'Afrique du Sud, du Rwanda et de Colombie offrent des enseignements précieux.',
          introHighlight: '<strong>La Commission Vérité et Réconciliation</strong> d\'Afrique du Sud (1996-1998), présidée par Desmond Tutu, est devenue le modèle mondial de justice transitionnelle après un conflit.',
          intro2: '',
          sections: [
            {
              title: 'Processus de paix',
              paragraphs: [
                'Un <strong>processus de paix</strong> comprend plusieurs phases : le cessez-le-feu, les négociations de paix, la signature d\'un accord, la démobilisation des combattants (DDR : désarmement, démobilisation, réintégration), les élections et la reconstruction. Chaque étape est fragile : on estime que 40 % des pays sortant d\'un conflit retombent dans la violence dans les cinq ans suivant l\'accord de paix.',
                'Les <strong>accords de paix</strong> les plus réussis combinent partage du pouvoir politique, réforme du secteur de la sécurité, justice transitionnelle et développement économique. L\'accord de paix colombien (2016) entre le gouvernement et les FARC (après 52 ans de guerre) a été négocié pendant quatre ans à La Havane avec la médiation de Cuba et de la Norvège. L\'accord nord-irlandais du Vendredi saint (1998) a mis fin à 30 ans de « Troubles ».'
              ],
              highlight: '40 % des pays sortant d\'un conflit retombent dans la violence dans les cinq ans, soulignant la fragilité des processus de paix.'
            },
            {
              title: 'Justice transitionnelle',
              paragraphs: [
                'La <strong>justice transitionnelle</strong> est l\'ensemble des mécanismes mis en place pour faire face aux violations massives des droits de l\'homme après un conflit ou un régime autoritaire. Elle comprend les poursuites judiciaires (tribunaux nationaux ou internationaux), les commissions vérité (enquête sur les violations passées), les réparations aux victimes et les réformes institutionnelles (armée, police, justice).',
                'Le modèle sud-africain de <strong>Vérité et Réconciliation</strong> (1996-1998) offrait l\'amnistie aux auteurs de violations qui avouaient la vérité publiquement. Ce choix pragmatique permit une transition pacifique mais fut critiqué par les victimes privées de justice. Le Rwanda a combiné le Tribunal pénal international (TPIR, pour les responsables principaux) et les tribunaux gacaca (juridictions communautaires traitant 1,9 million de dossiers entre 2005 et 2012).'
              ],
              highlight: 'Les tribunaux gacaca rwandais ont traité 1,9 million de dossiers liés au génocide de 1994, une justice communautaire sans précédent.'
            },
            {
              title: 'Reconstruction et réconciliation',
              paragraphs: [
                'La <strong>reconstruction post-conflit</strong> est un processus long et coûteux. Le Plan Marshall (1948-1952), qui reconstruisit l\'Europe d\'après-guerre avec 13 milliards de dollars américains (150 milliards en valeur actuelle), reste la référence historique. La reconstruction de l\'Allemagne et du Japon après 1945, transformant des ennemis vaincus en alliés démocratiques prospères, est le plus grand succès de l\'histoire.',
                'La <strong>réconciliation</strong> entre communautés divisées par la violence est le défi le plus profond. Elle exige du temps (plusieurs générations), un récit historique partagé (enseignement de l\'histoire), des espaces de dialogue entre victimes et bourreaux, et un développement économique inclusif. Le rapprochement franco-allemand, de l\'inimitié séculaire à l\'amitié indéfectible en quelques décennies, montre que la réconciliation est possible, même après les pires atrocités.'
              ],
              highlight: 'Le rapprochement franco-allemand, de trois guerres en 70 ans à une amitié indéfectible, est le modèle mondial de réconciliation entre ennemis.'
            }
          ],
          quiz: [
            { q: 'Que signifie DDR en résolution de conflits ?', opts: ['Diplomatie, Dialogue, Résolution', 'Désarmement, Démobilisation, Réintégration', 'Droit, Démocratie, Réconciliation', 'Développement, Démographie, Reconstruction'], correct: 1, explanation: 'DDR signifie Désarmement, Démobilisation et Réintégration : processus visant à collecter les armes des combattants, dissoudre les groupes armés et réintégrer les ex-combattants dans la société civile.' },
            { q: 'Qu\'est-ce que la justice transitionnelle ?', opts: ['La justice pendant un conflit', 'Les mécanismes pour faire face aux violations passées après un conflit', 'La justice commerciale', 'Le droit des réfugiés'], correct: 1, explanation: 'La justice transitionnelle comprend les poursuites judiciaires, les commissions vérité, les réparations et les réformes institutionnelles pour faire face aux violations massives après un conflit.' },
            { q: 'Quel a été le plus grand programme de reconstruction de l\'histoire ?', opts: ['Le New Deal', 'Le Plan Marshall', 'NextGenerationEU', 'La Belt and Road Initiative'], correct: 1, explanation: 'Le Plan Marshall (1948-1952) a fourni 13 milliards de dollars (150 milliards actuels) pour reconstruire l\'Europe d\'après-guerre, transformant des ennemis en alliés.' }
          ],
          definitions: [
            { term: 'DDR', def: 'Désarmement, Démobilisation, Réintégration : processus de transition des combattants vers la vie civile après un conflit.' },
            { term: 'Justice transitionnelle', def: 'Ensemble de mécanismes (poursuites, commissions vérité, réparations, réformes) pour répondre aux violations massives des droits de l\'homme.' },
            { term: 'Commission vérité', def: 'Organe officiel enquêtant sur les violations passées des droits de l\'homme, visant à établir la vérité historique.' },
            { term: 'Gacaca', def: 'Juridictions communautaires rwandaises ayant jugé 1,9 million de dossiers liés au génocide de 1994.' },
            { term: 'Plan Marshall', def: 'Programme américain (1948-1952) de reconstruction de l\'Europe d\'après-guerre, modèle de référence de la reconstruction post-conflit.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'accord de paix colombien (2016) a été rejeté par référendum à 50,2 %, obligeant le gouvernement à renégocier. Le président Santos a reçu le prix Nobel de la paix malgré ce rejet.' },
            { front: '💡 Le savais-tu ?', back: 'Le Plan Marshall portait le nom du général George C. Marshall, secrétaire d\'État américain. Il reçut le prix Nobel de la paix en 1953, le seul militaire américain à l\'avoir obtenu.' },
            { front: '💡 Le savais-tu ?', back: 'Le traité de l\'Élysée (1963), signé par de Gaulle et Adenauer, scella la réconciliation franco-allemande. Les deux pays avaient été en guerre trois fois en 70 ans (1870, 1914, 1939).' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 4 — Traités
    // ──────────────────────────────────────────────
    {
      slug: 'traites',
      title: 'Traités',
      description: 'Droit des traités, accords internationaux, désarmement et régimes juridiques.',
      lessons: [
        {
          slug: 'droit-des-traites',
          title: 'Droit des traités',
          description: 'Convention de Vienne de 1969, formation, interprétation et extinction des traités.',
          intro: 'Les <strong>traités</strong> sont les instruments fondamentaux du droit international. Accords écrits entre États, ils créent des obligations juridiques contraignantes. La Convention de Vienne sur le droit des traités (1969) codifie les règles de leur formation, interprétation et extinction.',
          introHighlight: '<strong>Pacta sunt servanda</strong> (les traités doivent être respectés) est le principe fondamental du droit international, inscrit dans la Convention de Vienne de 1969.',
          intro2: '',
          sections: [
            {
              title: 'Formation et types de traités',
              paragraphs: [
                'Un <strong>traité</strong>, au sens de la Convention de Vienne de 1969, est un accord international écrit entre États, régi par le droit international. La conclusion d\'un traité suit plusieurs étapes : négociation, adoption du texte, authentification (signature), ratification (approbation par les organes internes de l\'État, souvent le parlement) et entrée en vigueur. La ratification est l\'étape clé : un État signataire n\'est lié que lorsqu\'il a ratifié le traité.',
                'Les traités se distinguent par leur nombre de parties (<strong>bilatéraux</strong> ou multilatéraux), leur objet (politique, commercial, environnemental, militaire) et leur forme (traité, convention, protocole, accord, charte, pacte, statut). Certains traités sont « normatifs » (ils créent des règles générales, comme les Conventions de Genève) ; d\'autres sont « contractuels » (ils règlent une situation particulière, comme un traité frontalier).'
              ],
              highlight: 'La distinction entre signature et ratification est fondamentale : les États-Unis ont signé mais jamais ratifié le traité de Versailles (1919), invalidant l\'adhésion à la SDN.'
            },
            {
              title: 'Réserves et interprétation',
              paragraphs: [
                'Une <strong>réserve</strong> est une déclaration unilatérale par laquelle un État exclut ou modifie l\'effet juridique de certaines dispositions d\'un traité à son égard. Les réserves permettent une adhésion plus large aux traités multilatéraux en autorisant chaque État à adapter ses obligations. Cependant, une réserve incompatible avec l\'objet et le but du traité est invalide.',
                'L\'<strong>interprétation</strong> des traités suit les règles de la Convention de Vienne : sens ordinaire des termes dans leur contexte et à la lumière de l\'objet et du but du traité. Les travaux préparatoires (comptes rendus de négociation) constituent un moyen complémentaire d\'interprétation. En cas de litige, la Cour internationale de Justice (CIJ) peut être saisie, mais uniquement si les deux parties acceptent sa juridiction.'
              ],
              highlight: 'La Cour internationale de Justice ne peut juger un différend entre États que si les deux parties ont accepté sa compétence — une limitation majeure.'
            },
            {
              title: 'Suspension et extinction',
              paragraphs: [
                'Un traité peut prendre fin par plusieurs mécanismes : <strong>expiration</strong> du terme prévu, dénonciation par une partie (préavis généralement d\'un an), accord mutuel, ou survenance d\'un changement fondamental de circonstances (clause rebus sic stantibus). Le retrait des États-Unis de l\'Accord de Paris (2017, revenu en 2021), du JCPOA iranien (2018) et du traité INF (2019) illustre la fragilité des engagements conventionnels.',
                'La <strong>violation substantielle</strong> d\'un traité par une partie autorise l\'autre partie à suspendre ou à mettre fin au traité. Le jus cogens (normes impératives du droit international) constitue une limite absolue : un traité contraire à une norme de jus cogens (interdiction du génocide, de l\'esclavage, de la torture) est nul de plein droit. Aucun accord ne peut légaliser ces violations fondamentales.'
              ],
              highlight: 'Le jus cogens (normes impératives) est la limite absolue : aucun traité ne peut autoriser le génocide, l\'esclavage ou la torture.'
            }
          ],
          quiz: [
            { q: 'Que signifie pacta sunt servanda ?', opts: ['Les traités sont facultatifs', 'Les traités doivent être respectés', 'Les traités sont éternels', 'Les traités sont secrets'], correct: 1, explanation: 'Pacta sunt servanda (les traités doivent être respectés) est le principe fondamental du droit des traités, inscrit à l\'article 26 de la Convention de Vienne de 1969.' },
            { q: 'Quelle est la différence entre signature et ratification d\'un traité ?', opts: ['Il n\'y en a pas', 'La signature engage, la ratification non', 'La signature est politique, la ratification crée l\'obligation juridique', 'La ratification est toujours automatique'], correct: 2, explanation: 'La signature marque l\'intention d\'un État, mais c\'est la ratification (approbation par les organes internes) qui crée l\'obligation juridique de respecter le traité.' },
            { q: 'Qu\'est-ce que le jus cogens ?', opts: ['Le droit des consuls', 'Les normes impératives du droit international auxquelles aucun traité ne peut déroger', 'Le droit commercial', 'Le droit de la mer'], correct: 1, explanation: 'Le jus cogens désigne les normes impératives du droit international (interdiction du génocide, de l\'esclavage, de la torture) auxquelles aucun traité ne peut déroger.' }
          ],
          definitions: [
            { term: 'Traité', def: 'Accord international écrit entre États, régi par le droit international et créant des obligations juridiques contraignantes.' },
            { term: 'Ratification', def: 'Acte par lequel un État exprime définitivement son consentement à être lié par un traité, souvent après approbation parlementaire.' },
            { term: 'Réserve', def: 'Déclaration unilatérale par laquelle un État exclut ou modifie l\'effet juridique de certaines dispositions d\'un traité à son égard.' },
            { term: 'Jus cogens', def: 'Normes impératives du droit international auxquelles aucune dérogation n\'est permise (interdiction du génocide, de l\'esclavage, de la torture).' },
            { term: 'Pacta sunt servanda', def: 'Principe fondamental selon lequel les traités en vigueur doivent être exécutés de bonne foi par les parties.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La Convention de Vienne sur le droit des traités (1969) est parfois appelée le « traité des traités ». Paradoxalement, ni les États-Unis ni la France ne l\'ont ratifiée, bien qu\'ils en appliquent les principes comme droit coutumier.' },
            { front: '💡 Le savais-tu ?', back: 'Le traité le plus court de l\'histoire est le traité de paix anglo-zanzibarite (1896), signé après la « guerre la plus courte de l\'histoire » (38 à 45 minutes).' },
            { front: '💡 Le savais-tu ?', back: 'L\'ONU recueille et enregistre plus de 50 000 traités dans sa collection. Le Secrétaire général est le dépositaire de plus de 560 traités multilatéraux majeurs.' }
          ]
        },
        {
          slug: 'desarmement-nucleaire',
          title: 'Désarmement nucléaire',
          description: 'TNP, traités de contrôle des armements et prolifération nucléaire.',
          intro: 'Le <strong>désarmement nucléaire</strong> est l\'un des enjeux les plus critiques des relations internationales. Depuis Hiroshima (1945), l\'humanité vit sous la menace de l\'annihilation nucléaire. Les traités de contrôle des armements tentent de réduire les arsenaux et d\'empêcher la prolifération.',
          introHighlight: '<strong>Neuf États</strong> possèdent des armes nucléaires en 2025 : États-Unis, Russie, Chine, France, Royaume-Uni, Inde, Pakistan, Israël et Corée du Nord.',
          intro2: '',
          sections: [
            {
              title: 'Le Traité sur la non-prolifération (TNP)',
              paragraphs: [
                'Le <strong>TNP</strong> (1968), pierre angulaire du régime de non-prolifération, repose sur trois piliers : la non-prolifération (les États non nucléaires s\'engagent à ne pas acquérir l\'arme), le désarmement (les États nucléaires s\'engagent à désarmer) et le droit à l\'énergie nucléaire civile. Ratifié par 191 États, c\'est le traité d\'armement le plus universel. Quatre États restent hors du TNP : Inde, Pakistan, Israël et Corée du Nord (retirée en 2003).',
                'L\'<strong>AIEA</strong> (Agence internationale de l\'énergie atomique) vérifie le respect du TNP par des inspections. Le régime est fragilisé par les programmes nucléaires iranien (accord JCPOA 2015, dénoncé par les USA en 2018) et nord-coréen (six essais nucléaires depuis 2006). La promesse de désarmement des puissances nucléaires reste largement non tenue : les arsenaux mondiaux comptent encore environ 12 500 ogives en 2025.'
              ],
              highlight: 'Les arsenaux nucléaires mondiaux comptent environ 12 500 ogives en 2025, dont 90 % appartiennent aux États-Unis et à la Russie.'
            },
            {
              title: 'Les traités de contrôle des armements',
              paragraphs: [
                'Les <strong>traités bilatéraux</strong> américano-russes ont réduit les arsenaux de 70 000 ogives (pic de la Guerre froide) à environ 6 000 chacun. START I (1991) et New START (2010, prolongé jusqu\'en 2026) limitent les ogives stratégiques déployées à 1 550 par camp. Le traité INF (1987), qui éliminait les missiles à portée intermédiaire en Europe, a été dénoncé par les États-Unis en 2019.',
                'Le <strong>Traité d\'interdiction complète des essais nucléaires</strong> (TICE, 1996) a été signé par 187 États mais n\'est pas entré en vigueur faute de ratification par 8 États clés (États-Unis, Chine, Inde, Pakistan, Égypte, Iran, Israël, Corée du Nord). Le Traité sur l\'interdiction des armes nucléaires (TIAN, 2021, prix Nobel 2017 pour ICAN), soutenu par 93 États, est le premier traité interdisant totalement ces armes, mais aucune puissance nucléaire ne l\'a signé.'
              ],
              highlight: 'Le traité INF (1987) a éliminé 2 692 missiles nucléaires à portée intermédiaire, la plus grande destruction d\'armes nucléaires de l\'histoire.'
            },
            {
              title: 'Prolifération et risques',
              paragraphs: [
                'La <strong>prolifération nucléaire</strong> reste une menace majeure. La Corée du Nord a réalisé six essais nucléaires et développé des missiles intercontinentaux capables d\'atteindre les États-Unis. L\'Iran, dont le programme nucléaire inquiète la communauté internationale, pourrait atteindre le « seuil nucléaire » (capacité de produire une bombe sans l\'avoir assemblée). L\'Arabie saoudite a annoncé qu\'elle se doterait de l\'arme si l\'Iran le faisait.',
                'Le risque d\'<strong>usage accidentel</strong> est sous-estimé. Pendant la Guerre froide, au moins cinq incidents ont failli déclencher un lancement nucléaire par erreur. En 1983, le colonel soviétique Stanislav Petrov évita une guerre nucléaire en décidant, seul, qu\'une alerte de son système était une fausse alarme (elle l\'était). Le risque de terrorisme nucléaire (acquisition d\'une « bombe sale » ou d\'une arme tactique) préoccupe particulièrement les services de renseignement.'
              ],
              highlight: 'En 1983, le colonel Petrov sauva probablement le monde en décidant seul qu\'une alerte nucléaire soviétique était une fausse alarme.'
            }
          ],
          quiz: [
            { q: 'Combien d\'États possèdent l\'arme nucléaire en 2025 ?', opts: ['5', '7', '9', '12'], correct: 2, explanation: 'Neuf États possèdent des armes nucléaires en 2025 : États-Unis, Russie, Chine, France, Royaume-Uni, Inde, Pakistan, Israël et Corée du Nord.' },
            { q: 'Quels sont les trois piliers du TNP ?', opts: ['Paix, justice, liberté', 'Non-prolifération, désarmement, droit au nucléaire civil', 'Inspection, sanction, négociation', 'Terre, mer, air'], correct: 1, explanation: 'Les trois piliers du TNP sont : la non-prolifération (pas de nouveaux États nucléaires), le désarmement (réduction des arsenaux) et le droit à l\'énergie nucléaire civile.' },
            { q: 'Combien d\'ogives nucléaires reste-t-il dans le monde en 2025 ?', opts: ['1 000', '5 000', '12 500', '70 000'], correct: 2, explanation: 'Les arsenaux nucléaires mondiaux comptent environ 12 500 ogives en 2025, dont 90 % appartiennent aux États-Unis et à la Russie.' }
          ],
          definitions: [
            { term: 'TNP', def: 'Traité sur la non-prolifération des armes nucléaires (1968) : accord visant à empêcher la prolifération, promouvoir le désarmement et garantir le droit au nucléaire civil.' },
            { term: 'Prolifération nucléaire', def: 'Diffusion des armes nucléaires à de nouveaux États ou acteurs non étatiques.' },
            { term: 'AIEA', def: 'Agence internationale de l\'énergie atomique : organisation vérifiant le respect du TNP par des inspections des installations nucléaires.' },
            { term: 'TIAN', def: 'Traité sur l\'interdiction des armes nucléaires (2021) : premier traité interdisant totalement les armes nucléaires, non signé par les puissances nucléaires.' },
            { term: 'Dissuasion', def: 'Doctrine selon laquelle la possession d\'armes nucléaires empêche l\'adversaire d\'attaquer par la menace de représailles dévastatrices.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'horloge de l\'Apocalypse (Doomsday Clock), créée en 1947 par les scientifiques du Bulletin of the Atomic Scientists, est à 90 secondes de minuit en 2025, son niveau le plus proche de la catastrophe.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Afrique du Sud est le seul pays à avoir développé puis démantelé volontairement son arsenal nucléaire (6 bombes) en 1989, avant la fin de l\'apartheid.' },
            { front: '💡 Le savais-tu ?', back: 'La bombe d\'Hiroshima (15 kilotonnes) est 3 000 fois moins puissante que la Tsar Bomba soviétique (50 mégatonnes), testée en 1961. Son champignon atomique atteignit 64 km de hauteur.' }
          ]
        },
        {
          slug: 'droit-de-la-mer',
          title: 'Droit de la mer',
          description: 'Convention de Montego Bay, zones maritimes, liberté de navigation et enjeux maritimes.',
          intro: 'Le <strong>droit de la mer</strong>, codifié par la Convention des Nations Unies sur le droit de la mer (CNUDM, Montego Bay, 1982), régit l\'utilisation des océans qui couvrent 71 % de la surface terrestre. Ressources halieutiques, routes commerciales, fonds marins et câbles sous-marins en font un enjeu géopolitique majeur.',
          introHighlight: '<strong>90 % du commerce mondial</strong> transite par voie maritime, faisant des océans l\'artère vitale de l\'économie globalisée.',
          intro2: '',
          sections: [
            {
              title: 'Les zones maritimes',
              paragraphs: [
                'La CNUDM définit plusieurs <strong>zones maritimes</strong> à partir de la ligne de base (littoral). Les eaux intérieures (ports, baies) sont sous souveraineté totale de l\'État côtier. La mer territoriale (12 milles nautiques, soit 22 km) est sous souveraineté de l\'État côtier, avec un droit de passage inoffensif pour les navires étrangers. La zone contiguë (24 milles) permet le contrôle douanier et sanitaire.',
                'La <strong>zone économique exclusive</strong> (ZEE, 200 milles, soit 370 km) confère à l\'État côtier des droits souverains sur les ressources naturelles (poissons, pétrole, gaz) mais pas de souveraineté territoriale. Le plateau continental peut s\'étendre jusqu\'à 350 milles. La haute mer (au-delà de la ZEE) est un espace de liberté : navigation, pêche, recherche scientifique et pose de câbles sous-marins sont libres.'
              ],
              highlight: 'La France possède la deuxième ZEE du monde (11 millions de km²) grâce à ses territoires ultramarins, derrière les États-Unis.'
            },
            {
              title: 'Enjeux géopolitiques',
              paragraphs: [
                'La <strong>mer de Chine méridionale</strong> est le point chaud maritime le plus dangereux au monde. La Chine revendique 90 % de cette mer (« ligne en neuf traits ») alors que le Tribunal arbitral de La Haye a rejeté ces prétentions en 2016. Six États riverains (Chine, Vietnam, Philippines, Malaisie, Brunei, Taïwan) se disputent des îles et des récifs, sous lesquels gisent d\'importantes réserves de pétrole et de gaz.',
                'L\'<strong>Arctique</strong> est le nouvel enjeu maritime du XXIe siècle. Le réchauffement climatique ouvre de nouvelles routes commerciales (passage du Nord-Ouest, route du Nord) et rend accessibles des ressources (pétrole, gaz, minerais) sous la banquise. Cinq États riverains (Russie, Canada, États-Unis, Norvège, Danemark/Groenland) revendiquent des extensions de plateau continental. La Russie a planté un drapeau au fond de l\'océan Arctique en 2007.'
              ],
              highlight: 'Le tribunal arbitral de La Haye a rejeté en 2016 les revendications chinoises sur 90 % de la mer de Chine méridionale, mais la Chine refuse ce verdict.'
            },
            {
              title: 'Piraterie et sécurité maritime',
              paragraphs: [
                'La <strong>piraterie maritime</strong> reste une menace réelle au XXIe siècle. Le golfe de Guinée (Afrique de l\'Ouest) est la zone la plus touchée. La piraterie somalienne, qui paralysait le détroit de Bab el-Mandeb et le golfe d\'Aden entre 2008 et 2012, a été réduite grâce aux opérations navales internationales (EU NAVFOR Atalanta). Le Bureau maritime international recense encore des centaines d\'incidents par an.',
                'Les <strong>détroits stratégiques</strong> concentrent les risques de blocage du commerce mondial. Le détroit de Malacca (25 % du commerce maritime mondial), le détroit d\'Ormuz (21 % du pétrole mondial), le canal de Suez (12 % du commerce mondial) et le canal de Panama sont des points de vulnérabilité. Le blocage du canal de Suez par le porte-conteneurs Ever Given en mars 2021 a coûté 10 milliards de dollars par jour au commerce mondial.'
              ],
              highlight: 'Le blocage du canal de Suez par l\'Ever Given (mars 2021) a coûté 10 milliards de dollars par jour au commerce mondial pendant six jours.'
            }
          ],
          quiz: [
            { q: 'Quelle est l\'étendue de la zone économique exclusive (ZEE) ?', opts: ['12 milles', '24 milles', '200 milles', '350 milles'], correct: 2, explanation: 'La ZEE s\'étend sur 200 milles nautiques (370 km) à partir de la ligne de base, conférant à l\'État côtier des droits souverains sur les ressources naturelles.' },
            { q: 'Quel pays possède la deuxième plus grande ZEE du monde ?', opts: ['Royaume-Uni', 'Australie', 'France', 'Japon'], correct: 2, explanation: 'La France possède la deuxième ZEE du monde (11 millions de km²) grâce à ses territoires ultramarins (Polynésie, Nouvelle-Calédonie, Réunion, etc.).' },
            { q: 'Quel pourcentage du commerce mondial transite par voie maritime ?', opts: ['50 %', '70 %', '90 %', '95 %'], correct: 2, explanation: 'Environ 90 % du commerce mondial transite par voie maritime, faisant des océans l\'artère vitale de l\'économie globalisée.' }
          ],
          definitions: [
            { term: 'ZEE', def: 'Zone économique exclusive : espace maritime de 200 milles où l\'État côtier dispose de droits souverains sur les ressources naturelles.' },
            { term: 'Mer territoriale', def: 'Bande de mer de 12 milles nautiques adjacente à la côte, sous souveraineté de l\'État côtier.' },
            { term: 'Haute mer', def: 'Espace maritime au-delà des zones de juridiction nationale, ouvert à tous les États pour la navigation, la pêche et la recherche.' },
            { term: 'CNUDM', def: 'Convention des Nations Unies sur le droit de la mer (Montego Bay, 1982) : traité codifiant le régime juridique des océans.' },
            { term: 'Passage inoffensif', def: 'Droit de tout navire de traverser la mer territoriale d\'un État étranger sans y porter atteinte à la paix, à l\'ordre ou à la sécurité.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La Convention de Montego Bay a mis 9 ans à négocier (1973-1982) et 12 ans de plus à entrer en vigueur (1994). C\'est l\'une des négociations les plus longues de l\'histoire du droit international.' },
            { front: '💡 Le savais-tu ?', back: 'Les câbles sous-marins transportent 99 % du trafic internet intercontinental. Plus de 550 câbles, totalisant 1,3 million de km, tapissent le fond des océans — une infrastructure critique invisible.' },
            { front: '💡 Le savais-tu ?', back: 'Les États-Unis n\'ont pas ratifié la CNUDM de Montego Bay, tout en en appliquant les principes comme droit coutumier. C\'est l\'un des rares grands traités que la première puissance maritime n\'a pas ratifié.' }
          ]
        },
        {
          slug: 'droit-international-environnemental',
          title: 'Droit international de l\'environnement',
          description: 'Accords climatiques, biodiversité, pollution et gouvernance environnementale.',
          intro: 'Le <strong>droit international de l\'environnement</strong> est la branche la plus dynamique du droit international contemporain. Des premiers accords sur la pollution transfrontalière à l\'Accord de Paris sur le climat, les États tentent de réguler collectivement leur impact sur la planète.',
          introHighlight: '<strong>L\'Accord de Paris</strong> (2015) engage 195 pays à limiter le réchauffement climatique à 1,5 °C par rapport à l\'ère préindustrielle.',
          intro2: '',
          sections: [
            {
              title: 'Les accords climatiques',
              paragraphs: [
                'Le <strong>régime climatique international</strong> repose sur la Convention-cadre des Nations Unies sur les changements climatiques (CCNUCC, 1992, 197 parties). Le Protocole de Kyoto (1997) imposa pour la première fois des objectifs chiffrés de réduction des émissions de gaz à effet de serre aux pays industrialisés (mais pas aux pays en développement, d\'où le refus américain). L\'Accord de Paris (2015) adopta une approche universelle : chaque pays soumet ses propres engagements (NDC, contributions déterminées au niveau national).',
                'L\'Accord de Paris vise à limiter le <strong>réchauffement</strong> « bien en dessous de 2 °C » et si possible à 1,5 °C. En 2025, les engagements cumulés des États mènent vers un réchauffement de 2,5 à 2,8 °C, loin de l\'objectif. Les COP annuelles (Conférences des Parties) tentent de relever les ambitions. Le mécanisme de « bilan mondial » (Global Stocktake), lancé à la COP28 (Dubaï, 2023), évalue les progrès tous les cinq ans.'
              ],
              highlight: 'Les engagements climatiques actuels des États mènent vers un réchauffement de 2,5 à 2,8 °C, loin de l\'objectif de 1,5 °C de l\'Accord de Paris.'
            },
            {
              title: 'Biodiversité et pollutions',
              paragraphs: [
                'La <strong>Convention sur la diversité biologique</strong> (CDB, 1992) vise à conserver la biodiversité, utiliser durablement ses composantes et partager équitablement les bénéfices des ressources génétiques. Le Cadre mondial de Kunming-Montréal pour la biodiversité (COP15, 2022) fixe l\'objectif de protéger 30 % des terres et des mers d\'ici 2030 (« 30x30 »).',
                'Le <strong>Protocole de Montréal</strong> (1987) sur les substances appauvrissant la couche d\'ozone est considéré comme le plus grand succès du droit environnemental international : ratifié par 198 États, il a permis de réduire de 99 % la production de CFC, et la couche d\'ozone devrait se reconstituer complètement d\'ici 2066. En 2023, un traité historique sur la pollution plastique des océans a été adopté, visant à réduire de 80 % la pollution plastique d\'ici 2040.'
              ],
              highlight: 'Le Protocole de Montréal est le traité environnemental le plus réussi de l\'histoire : il a éliminé 99 % des substances détruisant la couche d\'ozone.'
            },
            {
              title: 'Gouvernance et justice climatique',
              paragraphs: [
                'La <strong>gouvernance environnementale mondiale</strong> est fragmentée entre des dizaines de traités, d\'agences (PNUE, OMM, FAO) et de forums. L\'absence d\'Organisation mondiale de l\'environnement (contrairement au commerce avec l\'OMC) affaiblit la coordination. Le principe de « responsabilités communes mais différenciées » reconnaît que les pays industrialisés, historiquement responsables de la majorité des émissions, doivent agir en premier.',
                'La <strong>justice climatique</strong> est un enjeu majeur. Les pays les plus vulnérables (petits États insulaires, Afrique subsaharienne) subissent les pires conséquences d\'un réchauffement dont ils ne sont pas responsables. Le fonds « pertes et préjudices », créé à la COP27 (Charm el-Cheikh, 2022), vise à compenser les dommages irréversibles subis par ces pays. Les contentieux climatiques se multiplient : plus de 2 000 procès climat ont été intentés dans le monde.'
              ],
              highlight: 'Plus de 2 000 procès climatiques ont été intentés dans le monde, dont l\'Affaire du Siècle en France qui a condamné l\'État pour inaction climatique.'
            }
          ],
          quiz: [
            { q: 'Quel est l\'objectif de l\'Accord de Paris ?', opts: ['Réduire les déchets', 'Limiter le réchauffement à 1,5 °C', 'Protéger les forêts tropicales', 'Interdire le charbon'], correct: 1, explanation: 'L\'Accord de Paris vise à limiter le réchauffement climatique à « bien en dessous de 2 °C » et si possible à 1,5 °C par rapport à l\'ère préindustrielle.' },
            { q: 'Quel traité environnemental est considéré comme le plus réussi ?', opts: ['L\'Accord de Paris', 'Le Protocole de Montréal', 'La Convention de Bâle', 'Le Protocole de Kyoto'], correct: 1, explanation: 'Le Protocole de Montréal (1987) est considéré comme le plus grand succès du droit environnemental : il a permis de réduire de 99 % la production de substances détruisant la couche d\'ozone.' },
            { q: 'Que signifie l\'objectif « 30x30 » ?', opts: ['Réduire les émissions de 30 % d\'ici 2030', 'Protéger 30 % des terres et des mers d\'ici 2030', 'Planter 30 milliards d\'arbres d\'ici 2030', '30 pays neutres en carbone d\'ici 2030'], correct: 1, explanation: 'L\'objectif « 30x30 », adopté au sommet de la biodiversité de Kunming-Montréal (2022), vise à protéger 30 % des terres et des mers de la planète d\'ici 2030.' }
          ],
          definitions: [
            { term: 'Accord de Paris', def: 'Traité climatique (2015) engageant 195 pays à limiter le réchauffement à 1,5 °C par des contributions nationales volontaires.' },
            { term: 'NDC', def: 'Contribution déterminée au niveau national : engagement climatique volontaire de chaque pays dans le cadre de l\'Accord de Paris.' },
            { term: 'Protocole de Montréal', def: 'Traité (1987) ayant éliminé 99 % des substances appauvrissant la couche d\'ozone, considéré comme le plus grand succès environnemental.' },
            { term: 'Justice climatique', def: 'Principe selon lequel les pays les plus vulnérables, peu responsables du réchauffement, ont droit à une compensation et un soutien.' },
            { term: 'Pertes et préjudices', def: 'Dommages irréversibles causés par le changement climatique aux pays vulnérables, pour lesquels un fonds a été créé à la COP27 (2022).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le Protocole de Kyoto a été nommé d\'après la ville de Kyoto (Japon) où il a été adopté en 1997. Les États-Unis l\'ont signé mais ne l\'ont jamais ratifié, le jugeant insuffisant sans la Chine.' },
            { front: '💡 Le savais-tu ?', back: 'La couche d\'ozone devrait se reconstituer complètement d\'ici 2066, grâce au Protocole de Montréal. Sans ce traité, les températures mondiales auraient augmenté de 0,5 °C supplémentaire.' },
            { front: '💡 Le savais-tu ?', back: 'Le premier procès climatique réussi a été le procès Urgenda aux Pays-Bas (2015) : la justice a ordonné à l\'État néerlandais de réduire ses émissions de 25 % d\'ici 2020.' }
          ]
        },
        {
          slug: 'droits-de-lhomme',
          title: 'Droit international des droits de l\'homme',
          description: 'Déclaration universelle, pactes internationaux, mécanismes de protection et défis.',
          intro: 'Le <strong>droit international des droits de l\'homme</strong> protège la dignité et les libertés fondamentales de chaque individu face aux abus de pouvoir. Né des horreurs de la Seconde Guerre mondiale, ce corpus juridique est l\'une des plus grandes conquêtes du XXe siècle.',
          introHighlight: '<strong>La Déclaration universelle des droits de l\'homme</strong> (DUDH, 1948), rédigée sous la direction d\'Eleanor Roosevelt, est le texte le plus traduit au monde (500 langues).',
          intro2: '',
          sections: [
            {
              title: 'La Charte internationale des droits de l\'homme',
              paragraphs: [
                'La <strong>Déclaration universelle des droits de l\'homme</strong>, adoptée le 10 décembre 1948 par l\'Assemblée générale de l\'ONU (48 votes pour, 0 contre, 8 abstentions), proclame les droits civils, politiques, économiques, sociaux et culturels de tout être humain. Bien que non contraignante juridiquement, elle a acquis une autorité morale universelle et inspire les constitutions de la plupart des pays.',
                'Deux <strong>pactes contraignants</strong> complètent la Déclaration depuis 1966. Le Pacte international relatif aux droits civils et politiques (PIDCP, 173 parties) protège la liberté d\'expression, de religion, le droit à un procès équitable et l\'interdiction de la torture. Le Pacte international relatif aux droits économiques, sociaux et culturels (PIDESC, 171 parties) protège le droit au travail, à l\'éducation, à la santé et à un niveau de vie suffisant.'
              ],
              highlight: 'La Déclaration universelle des droits de l\'homme a été adoptée le 10 décembre 1948, date devenue la Journée internationale des droits de l\'homme.'
            },
            {
              title: 'Mécanismes de protection',
              paragraphs: [
                'Au niveau <strong>universel</strong>, le Conseil des droits de l\'homme de l\'ONU (47 membres) examine la situation des droits de l\'homme dans chaque pays (Examen périodique universel) et nomme des rapporteurs spéciaux sur des thématiques (torture, liberté d\'expression, discrimination). Les organes de traités (comités) surveillent l\'application des conventions par les États parties.',
                'Au niveau <strong>régional</strong>, les mécanismes sont plus efficaces. La Cour européenne des droits de l\'homme (CEDH, Strasbourg) peut être saisie par des individus contre leur propre État et rend des arrêts contraignants (plus de 25 000 arrêts depuis 1959). La Cour interaméricaine des droits de l\'homme et la Cour africaine des droits de l\'homme et des peuples complètent le dispositif. L\'Asie ne dispose pas de cour régionale des droits de l\'homme.'
              ],
              highlight: 'La Cour européenne des droits de l\'homme est la seule juridiction au monde où un individu peut poursuivre son propre État pour violation de ses droits.'
            },
            {
              title: 'Défis contemporains',
              paragraphs: [
                'Les droits de l\'homme font face à des <strong>défis majeurs</strong> au XXIe siècle. La surveillance numérique de masse (révélée par Edward Snowden en 2013) menace le droit à la vie privée. La reconnaissance faciale et l\'intelligence artificielle créent de nouveaux risques de discrimination. Le recul démocratique (« democratic backsliding ») en Turquie, Hongrie, Pologne et ailleurs affaiblit les garanties.',
                'Le <strong>relativisme culturel</strong> oppose les conceptions universaliste et particulariste des droits de l\'homme. Certains États invoquent leurs traditions culturelles ou religieuses pour rejeter certains droits (droits des femmes, des minorités sexuelles). La Déclaration de Vienne (1993) a réaffirmé l\'universalité, l\'indivisibilité et l\'interdépendance de tous les droits de l\'homme, rejetant toute hiérarchie entre droits civils et droits sociaux.'
              ],
              highlight: 'Freedom House estime que la liberté dans le monde a décliné pour la 18e année consécutive en 2024, affectant 38 % de la population mondiale.'
            }
          ],
          quiz: [
            { q: 'En quelle année la DUDH a-t-elle été adoptée ?', opts: ['1945', '1948', '1966', '1993'], correct: 1, explanation: 'La Déclaration universelle des droits de l\'homme a été adoptée par l\'Assemblée générale de l\'ONU le 10 décembre 1948.' },
            { q: 'Quelle est la particularité de la CEDH ?', opts: ['Elle ne juge que les États', 'Des individus peuvent poursuivre leur propre État', 'Elle est uniquement consultative', 'Elle siège à La Haye'], correct: 1, explanation: 'La Cour européenne des droits de l\'homme, siégeant à Strasbourg, permet à des individus de poursuivre leur propre État pour violation de leurs droits fondamentaux.' },
            { q: 'Qui a dirigé la rédaction de la DUDH ?', opts: ['Winston Churchill', 'Eleanor Roosevelt', 'Mahatma Gandhi', 'Charles de Gaulle'], correct: 1, explanation: 'Eleanor Roosevelt, épouse du président américain, a présidé la Commission des droits de l\'homme chargée de rédiger la Déclaration universelle.' }
          ],
          definitions: [
            { term: 'DUDH', def: 'Déclaration universelle des droits de l\'homme (1948) : texte fondateur proclamant les droits et libertés fondamentales de tout être humain.' },
            { term: 'CEDH', def: 'Cour européenne des droits de l\'homme : juridiction internationale siégeant à Strasbourg, pouvant être saisie par des individus contre leur État.' },
            { term: 'Droits civils et politiques', def: 'Droits protégeant les libertés individuelles face à l\'État : liberté d\'expression, de religion, droit à un procès équitable, interdiction de la torture.' },
            { term: 'Droits économiques et sociaux', def: 'Droits garantissant un niveau de vie digne : droit au travail, à l\'éducation, à la santé, au logement.' },
            { term: 'Examen périodique universel', def: 'Mécanisme du Conseil des droits de l\'homme de l\'ONU examinant la situation des droits de l\'homme dans chaque État tous les 4,5 ans.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'La DUDH a été traduite en plus de 500 langues, ce qui en fait le document le plus traduit de l\'histoire. L\'article premier (« Tous les êtres humains naissent libres et égaux ») est gravé sur le parvis du Trocadéro à Paris.' },
            { front: '💡 Le savais-tu ?', back: 'René Cassin, juriste français, est l\'un des principaux rédacteurs de la DUDH. Il a reçu le prix Nobel de la paix en 1968 pour son rôle dans la défense des droits de l\'homme.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Arabie saoudite s\'est abstenue lors du vote de la DUDH en 1948, invoquant l\'incompatibilité de l\'article 18 (liberté de changer de religion) avec l\'islam.' }
          ]
        }
      ]
    },
    // ──────────────────────────────────────────────
    // HUB 5 — Coopération
    // ──────────────────────────────────────────────
    {
      slug: 'cooperation',
      title: 'Coopération',
      description: 'Coopération internationale, développement, mondialisation et gouvernance mondiale.',
      lessons: [
        {
          slug: 'mondialisation',
          title: 'Mondialisation',
          description: 'Histoire, dimensions, acteurs et débats autour de la mondialisation.',
          intro: 'La <strong>mondialisation</strong> est le processus d\'intensification des échanges commerciaux, financiers, culturels et humains à l\'échelle planétaire. Phénomène ancien accéléré depuis les années 1980, elle transforme les sociétés et redistribue les rapports de puissance.',
          introHighlight: '<strong>Le commerce mondial</strong> a été multiplié par 40 entre 1950 et 2023, passant de 600 milliards à 25 000 milliards de dollars par an.',
          intro2: '',
          sections: [
            {
              title: 'Histoire de la mondialisation',
              paragraphs: [
                'La mondialisation n\'est pas un phénomène nouveau. La <strong>première mondialisation</strong> (1870-1914) a été portée par la révolution des transports (chemin de fer, bateau à vapeur), le télégraphe et l\'étalon-or. Les échanges commerciaux atteignirent 30 % du PIB mondial avant d\'être brisés par les deux guerres mondiales et la Grande Dépression. Les accords de Bretton Woods (1944) relancèrent la coopération économique internationale.',
                'La <strong>mondialisation contemporaine</strong>, accélérée par la chute du Mur de Berlin (1989), la révolution numérique et l\'entrée de la Chine dans l\'OMC (2001), a intégré des milliards de travailleurs dans l\'économie mondiale. Le conteneur, inventé par Malcom McLean en 1956, a réduit le coût du transport maritime de 90 %, rendant possible les chaînes de valeur mondiales. La pandémie de Covid-19 (2020) et les tensions géopolitiques ont cependant amorcé un mouvement de « démondialisation » partielle.'
              ],
              highlight: 'Le conteneur maritime a réduit le coût du transport international de 90 %, rendant possible la mondialisation des chaînes de production.'
            },
            {
              title: 'Dimensions de la mondialisation',
              paragraphs: [
                'La mondialisation est <strong>multidimensionnelle</strong>. Sa dimension économique se manifeste par l\'explosion du commerce, des investissements et des flux financiers (5 000 milliards de dollars de devises échangées chaque jour). Sa dimension culturelle diffuse des modes de vie, des produits et des idées à travers le cinéma, la musique, la gastronomie et les réseaux sociaux. Sa dimension migratoire concerne 280 millions de migrants internationaux (3,5 % de la population mondiale).',
                'La dimension <strong>technologique</strong> est le moteur actuel de la mondialisation. Internet connecte 5,3 milliards d\'utilisateurs. Les plateformes numériques (Google, Amazon, Meta, Apple) ont un chiffre d\'affaires supérieur au PIB de la plupart des États. Les chaînes de valeur mondiales fragmentent la production : un iPhone contient des composants de plus de 30 pays. Cette interdépendance est à la fois source de prospérité et de vulnérabilité.'
              ],
              highlight: 'Un iPhone contient des composants provenant de plus de 30 pays, illustrant l\'extrême fragmentation des chaînes de valeur mondiales.'
            },
            {
              title: 'Débats et critiques',
              paragraphs: [
                'La mondialisation est <strong>contestée</strong> de toutes parts. Les altermondialistes (mouvement né à Seattle en 1999) dénoncent l\'aggravation des inégalités, la destruction environnementale et le pouvoir excessif des multinationales. Les souverainistes rejettent la perte de contrôle des États sur leurs politiques économiques. Le « perdant de la mondialisation » — ouvrier industriel des pays développés dont l\'emploi est délocalisé — alimente les votes populistes.',
                'Les défenseurs de la mondialisation soulignent que l\'<strong>extrême pauvreté</strong> a reculé de 36 % (1990) à 8,5 % (2023) de la population mondiale, principalement grâce au commerce international. L\'espérance de vie mondiale a augmenté de 20 ans depuis 1960. Le défi est de rendre la mondialisation plus inclusive et durable : commerce équitable, taxation des multinationales (accord mondial de 15 % adopté en 2021), transition écologique et protection sociale.'
              ],
              highlight: 'L\'extrême pauvreté est passée de 36 % à 8,5 % de la population mondiale entre 1990 et 2023, en grande partie grâce au commerce international.'
            }
          ],
          quiz: [
            { q: 'Quand a eu lieu la première grande mondialisation ?', opts: ['1500-1600', '1870-1914', '1945-1970', '1990-2020'], correct: 1, explanation: 'La première mondialisation (1870-1914) a été portée par le chemin de fer, le bateau à vapeur et le télégraphe, avant d\'être interrompue par les guerres mondiales.' },
            { q: 'Combien de migrants internationaux y a-t-il dans le monde ?', opts: ['50 millions', '150 millions', '280 millions', '500 millions'], correct: 2, explanation: 'On compte environ 280 millions de migrants internationaux, soit 3,5 % de la population mondiale, un chiffre en augmentation constante.' },
            { q: 'Quel est le taux d\'extrême pauvreté mondiale en 2023 ?', opts: ['2 %', '8,5 %', '20 %', '36 %'], correct: 1, explanation: 'L\'extrême pauvreté (moins de 2,15 $ par jour) a reculé à 8,5 % de la population mondiale en 2023, contre 36 % en 1990.' }
          ],
          definitions: [
            { term: 'Mondialisation', def: 'Processus d\'intensification des échanges commerciaux, financiers, culturels et humains à l\'échelle planétaire.' },
            { term: 'Chaîne de valeur mondiale', def: 'Fragmentation de la production d\'un bien entre plusieurs pays, chacun réalisant une étape (conception, fabrication de composants, assemblage, distribution).' },
            { term: 'Altermondialisme', def: 'Mouvement social prônant une mondialisation plus juste, solidaire et respectueuse de l\'environnement.' },
            { term: 'Bretton Woods', def: 'Accords (1944) créant le FMI et la Banque mondiale pour stabiliser le système monétaire international et financer la reconstruction.' },
            { term: 'Démondialisation', def: 'Tendance au ralentissement des échanges internationaux et au rapatriement des chaînes de production (relocalisation, nearshoring).' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le conteneur maritime standardisé (TEU, Twenty-foot Equivalent Unit), inventé en 1956, a révolutionné le commerce mondial. Avant le conteneur, le chargement d\'un navire prenait une semaine ; avec le conteneur, moins d\'un jour.' },
            { front: '💡 Le savais-tu ?', back: 'Le premier Forum social mondial, réponse altermondialiste au Forum économique de Davos, s\'est tenu à Porto Alegre (Brésil) en 2001 sous le slogan « Un autre monde est possible ».' },
            { front: '💡 Le savais-tu ?', back: 'La pandémie de Covid-19 a réduit le commerce mondial de 5,3 % en 2020, la plus forte chute depuis 2008, révélant la fragilité des chaînes d\'approvisionnement mondialisées.' }
          ]
        },
        {
          slug: 'institutions-financieres',
          title: 'Institutions financières internationales',
          description: 'FMI, Banque mondiale, OMC et gouvernance économique mondiale.',
          intro: 'Les <strong>institutions financières internationales</strong>, nées à Bretton Woods en 1944, régissent les échanges commerciaux, les flux financiers et le développement économique. FMI, Banque mondiale et OMC forment le triptyque de la gouvernance économique mondiale.',
          introHighlight: '<strong>Les accords de Bretton Woods</strong> (1944), négociés par 44 pays dans un hôtel du New Hampshire, ont créé l\'architecture financière internationale qui régit encore le monde.',
          intro2: '',
          sections: [
            {
              title: 'Le FMI',
              paragraphs: [
                'Le <strong>Fonds monétaire international</strong> (FMI, 190 membres), créé en 1944, a pour mission de garantir la stabilité du système monétaire international. Il surveille les politiques économiques des États (surveillance multilatérale), fournit des prêts aux pays en difficulté de balance des paiements et offre une assistance technique. Les droits de vote sont proportionnels aux quotes-parts (contributions financières), donnant aux États-Unis un droit de veto de facto (16,5 % des voix).',
                'Les <strong>programmes d\'ajustement structurel</strong> du FMI, conditionnant les prêts à des réformes libérales (privatisations, réduction des dépenses publiques, ouverture commerciale), ont été vivement critiqués dans les années 1980-1990. La crise asiatique (1997) et la crise grecque (2010-2015) ont illustré les tensions entre rigueur budgétaire et souffrance sociale. Le FMI a depuis évolué vers une approche plus flexible, reconnaissant le rôle des filets de protection sociale.'
              ],
              highlight: 'Les États-Unis disposent d\'un droit de veto de facto au FMI avec 16,5 % des droits de vote, toute décision majeure requérant 85 %.'
            },
            {
              title: 'La Banque mondiale et l\'OMC',
              paragraphs: [
                'La <strong>Banque mondiale</strong> (BIRD + IDA, 189 membres), fondée en 1944, finance le développement des pays pauvres et à revenu intermédiaire. Elle prête environ 70 milliards de dollars par an pour des projets d\'infrastructure, d\'éducation, de santé et de protection de l\'environnement. L\'IDA (Association internationale de développement) accorde des prêts sans intérêt et des dons aux 75 pays les plus pauvres.',
                'L\'<strong>Organisation mondiale du commerce</strong> (OMC, 164 membres, 1995) succède au GATT (1947). Elle établit les règles du commerce international, résout les différends commerciaux par son Organe de règlement des différends (ORD) et organise des cycles de négociations. L\'OMC est paralysée depuis l\'échec du cycle de Doha (lancé en 2001), opposant pays développés et en développement sur l\'agriculture et les services.'
              ],
              highlight: 'L\'OMC règle les différends commerciaux : elle a tranché plus de 600 litiges depuis 1995, de la banane au Boeing.'
            },
            {
              title: 'Réformes et alternatives',
              paragraphs: [
                'La <strong>gouvernance économique mondiale</strong> est critiquée pour son manque de représentativité. Le G7 (États-Unis, Japon, Allemagne, France, Royaume-Uni, Italie, Canada) a été complété par le G20 (incluant la Chine, l\'Inde, le Brésil, la Russie) depuis 1999, reconnaissant le poids des économies émergentes. Les BRICS ont créé la Nouvelle Banque de développement (NDB, 2014) comme alternative à la Banque mondiale.',
                'La <strong>Banque asiatique d\'investissement pour les infrastructures</strong> (BAII, 2016), créée à l\'initiative de la Chine avec 109 membres (dont la France et l\'Allemagne, mais pas les États-Unis), finance des projets d\'infrastructure en Asie et au-delà. Ces institutions alternatives reflètent la volonté des puissances émergentes de réformer la gouvernance mondiale ou de créer des structures parallèles si les réformes échouent.'
              ],
              highlight: 'La BAII, banque chinoise créée en 2016, compte 109 membres et concurrence directement la Banque mondiale en Asie.'
            }
          ],
          quiz: [
            { q: 'En quelle année ont été signés les accords de Bretton Woods ?', opts: ['1919', '1944', '1971', '1995'], correct: 1, explanation: 'Les accords de Bretton Woods ont été signés en 1944 par 44 pays, créant le FMI et la Banque mondiale pour stabiliser l\'économie mondiale d\'après-guerre.' },
            { q: 'Que fait le FMI ?', opts: ['Il fait du commerce', 'Il stabilise le système monétaire et prête aux pays en difficulté', 'Il construit des routes', 'Il forme les diplomates'], correct: 1, explanation: 'Le FMI a pour mission de garantir la stabilité du système monétaire international et de prêter aux pays en difficulté de balance des paiements.' },
            { q: 'Quand l\'OMC a-t-elle été créée ?', opts: ['1944', '1971', '1995', '2001'], correct: 2, explanation: 'L\'OMC a été créée en 1995, succédant au GATT (1947). Elle établit les règles du commerce international et résout les différends commerciaux.' }
          ],
          definitions: [
            { term: 'FMI', def: 'Fonds monétaire international : institution de 190 membres garantissant la stabilité monétaire et prêtant aux pays en difficulté.' },
            { term: 'Banque mondiale', def: 'Institution finançant le développement des pays pauvres par des prêts et des dons pour l\'infrastructure, l\'éducation et la santé.' },
            { term: 'OMC', def: 'Organisation mondiale du commerce : institution de 164 membres établissant les règles du commerce international et résolvant les différends.' },
            { term: 'Quote-part', def: 'Contribution financière d\'un État au FMI, déterminant ses droits de vote et son accès aux prêts.' },
            { term: 'G20', def: 'Forum de 20 économies majeures (85 % du PIB mondial) coordonnant les politiques économiques et financières mondiales.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'L\'hôtel Mount Washington à Bretton Woods (New Hampshire), où furent négociés les accords de 1944, existe toujours. La conférence réunit 730 délégués de 44 pays pendant trois semaines.' },
            { front: '💡 Le savais-tu ?', back: 'Le directeur général du FMI est traditionnellement européen et le président de la Banque mondiale américain — un accord informel datant de 1944 critiqué pour son anachronisme.' },
            { front: '💡 Le savais-tu ?', back: 'L\'OMC est la seule organisation internationale dont les décisions sont contraignantes : un État condamné par l\'Organe de règlement des différends doit se conformer ou faire face à des rétorsions commerciales.' }
          ]
        },
        {
          slug: 'developpement-international',
          title: 'Développement international',
          description: 'Aide au développement, ODD, inégalités mondiales et coopération Nord-Sud.',
          intro: 'Le <strong>développement international</strong> vise à améliorer les conditions de vie des populations les plus pauvres par l\'aide financière, le transfert de technologies et le renforcement des capacités. Les 17 Objectifs de développement durable (ODD) de l\'ONU guident cet effort jusqu\'en 2030.',
          introHighlight: '<strong>Les 17 ODD</strong>, adoptés en 2015 par 193 pays, forment le plan d\'action mondial le plus ambitieux jamais conçu pour éradiquer la pauvreté et protéger la planète.',
          intro2: '',
          sections: [
            {
              title: 'Histoire du développement',
              paragraphs: [
                'Le concept de <strong>développement international</strong> est né avec le discours du président Truman (1949) qui promettait de partager les bénéfices du progrès scientifique avec les « régions sous-développées ». Les décennies suivantes virent s\'affronter deux modèles : le développement par la croissance économique (approche libérale) et le développement par la planification étatique (approche keynésienne ou socialiste).',
                'Les <strong>Objectifs du Millénaire pour le développement</strong> (OMD, 2000-2015) fixèrent huit objectifs concrets, dont la réduction de moitié de l\'extrême pauvreté — objectif atteint en avance grâce à la croissance chinoise et indienne. Les OMD furent remplacés par les 17 ODD (2015-2030), plus ambitieux : éradication totale de la pauvreté, faim zéro, éducation de qualité pour tous, égalité des sexes, énergie propre, villes durables, action climatique.'
              ],
              highlight: 'L\'objectif de réduire de moitié l\'extrême pauvreté (OMD) a été atteint cinq ans en avance, principalement grâce à la croissance chinoise.'
            },
            {
              title: 'Les acteurs du développement',
              paragraphs: [
                'L\'<strong>aide publique au développement</strong> (APD) est fournie par les pays de l\'OCDE (211 milliards de dollars en 2023) et par des pays émergents (Chine, Inde, pays du Golfe). L\'aide bilatérale (d\'État à État) représente 70 % de l\'APD ; l\'aide multilatérale (via l\'ONU, la Banque mondiale, l\'UE) en représente 30 %. Les ONG de développement (Oxfam, CARE, Plan International) mobilisent également des milliards de dons privés.',
                'La <strong>coopération Sud-Sud</strong>, échanges entre pays en développement, est en plein essor. Le Brésil partage son expertise agricole avec l\'Afrique (programme ProSavana au Mozambique). L\'Inde exporte ses technologies de santé (médicaments génériques, télémédecine). La Chine, premier bailleur bilatéral en Afrique, combine prêts, investissements et coopération technique. Les transferts de fonds des diasporas (656 milliards de dollars en 2023) dépassent largement l\'APD.'
              ],
              highlight: 'Les transferts de fonds des diasporas (656 milliards de dollars) dépassent largement l\'aide publique au développement (211 milliards).'
            },
            {
              title: 'Débats et perspectives',
              paragraphs: [
                'L\'<strong>efficacité de l\'aide</strong> est vivement débattue. William Easterly (The White Man\'s Burden, 2006) dénonce l\'aide comme paternaliste et inefficace, créant des dépendances. Jeffrey Sachs (The End of Poverty, 2005) défend au contraire un « big push » d\'aide massive pour briser le « piège de la pauvreté ». Dambisa Moyo (Dead Aid, 2009), économiste zambienne, argumente que l\'aide freine le développement en Afrique.',
                'Les <strong>approches innovantes</strong> du développement incluent le microcrédit (popularisé par Muhammad Yunus, prix Nobel 2006), les transferts monétaires directs aux populations pauvres (« cash transfers », évalués par les prix Nobel 2019 Banerjee et Duflo), le commerce équitable et la finance sociale. Le développement durable intègre les trois dimensions — économique, sociale et environnementale — reconnaissant qu\'il n\'y a pas de développement viable sur une planète dégradée.'
              ],
              highlight: 'Les prix Nobel d\'économie 2019 (Banerjee, Duflo, Kremer) ont révolutionné l\'évaluation de l\'aide en appliquant les essais randomisés contrôlés à la lutte contre la pauvreté.'
            }
          ],
          quiz: [
            { q: 'Combien y a-t-il d\'Objectifs de développement durable ?', opts: ['8', '12', '17', '20'], correct: 2, explanation: 'Il y a 17 Objectifs de développement durable (ODD), adoptés en 2015 par 193 pays, couvrant la pauvreté, l\'éducation, la santé, le climat et bien d\'autres domaines.' },
            { q: 'Qu\'est-ce qui dépasse l\'aide publique au développement en volume financier ?', opts: ['Les dépenses militaires', 'Les transferts de fonds des diasporas', 'Les dons aux ONG', 'Le commerce équitable'], correct: 1, explanation: 'Les transferts de fonds des diasporas (656 milliards de dollars en 2023) dépassent largement l\'aide publique au développement (211 milliards).' },
            { q: 'Qui a popularisé le microcrédit ?', opts: ['Jeffrey Sachs', 'Muhammad Yunus', 'Amartya Sen', 'Dambisa Moyo'], correct: 1, explanation: 'Muhammad Yunus, économiste bangladais, a popularisé le microcrédit avec la Grameen Bank et reçu le prix Nobel de la paix en 2006.' }
          ],
          definitions: [
            { term: 'ODD', def: 'Objectifs de développement durable : 17 objectifs adoptés par l\'ONU en 2015 pour éradiquer la pauvreté et protéger la planète d\'ici 2030.' },
            { term: 'APD', def: 'Aide publique au développement : flux financiers des pays riches vers les pays en développement pour soutenir leur développement.' },
            { term: 'Coopération Sud-Sud', def: 'Échanges de connaissances, technologies et ressources entre pays en développement.' },
            { term: 'Microcrédit', def: 'Prêt de faible montant accordé aux personnes exclues du système bancaire traditionnel pour créer une activité génératrice de revenus.' },
            { term: 'Piège de la pauvreté', def: 'Cercle vicieux où un niveau de revenu trop faible empêche l\'investissement nécessaire pour sortir de la pauvreté.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Muhammad Yunus, fondateur de la Grameen Bank, a accordé son premier prêt de 27 dollars à 42 femmes tressant des tabourets au Bangladesh en 1976. La banque a depuis prêté 30 milliards de dollars à 10 millions de personnes.' },
            { front: '💡 Le savais-tu ?', back: 'Esther Duflo, prix Nobel d\'économie 2019, est la plus jeune lauréate de l\'histoire du prix (46 ans) et la deuxième femme à le recevoir. Ses recherches ont transformé l\'évaluation des politiques de développement.' },
            { front: '💡 Le savais-tu ?', back: 'L\'indice de développement humain (IDH), créé par l\'économiste Amartya Sen et le PNUD en 1990, combine espérance de vie, éducation et revenu. La Norvège est première, le Niger dernier.' }
          ]
        },
        {
          slug: 'geopolitique-de-lenergie',
          title: 'Géopolitique de l\'énergie',
          description: 'Pétrole, gaz, transition énergétique et rivalités pour les ressources.',
          intro: 'L\'<strong>énergie</strong> est au cœur de la géopolitique mondiale. Le contrôle des ressources pétrolières et gazières a façonné les alliances, provoqué des guerres et déterminé la puissance des nations. La transition énergétique redistribue désormais les cartes.',
          introHighlight: '<strong>Le pétrole</strong> est la ressource la plus échangée au monde : 100 millions de barils sont consommés chaque jour, soit 4,5 milliards de tonnes par an.',
          intro2: '',
          sections: [
            {
              title: 'L\'OPEP et la politique pétrolière',
              paragraphs: [
                'L\'<strong>OPEP</strong> (Organisation des pays exportateurs de pétrole), fondée en 1960, regroupe 13 pays producteurs qui contrôlent 40 % de la production et 80 % des réserves prouvées mondiales. L\'OPEP+ (23 pays incluant la Russie) coordonne la production pour influencer les prix. Le premier choc pétrolier (1973), embargo arabe en réponse à la guerre du Kippour, quadrupla le prix du baril et révéla la dépendance énergétique de l\'Occident.',
                'Le <strong>pétrole de schiste</strong> américain, rendu exploitable par la fracturation hydraulique à partir de 2008, a bouleversé la géopolitique énergétique. Les États-Unis sont redevenus le premier producteur mondial de pétrole en 2018, réduisant leur dépendance envers le Moyen-Orient. L\'Arabie saoudite, la Russie et les États-Unis forment un « triangle pétrolier » dont les interactions déterminent les prix et l\'équilibre géopolitique mondial.'
              ],
              highlight: 'Les États-Unis sont redevenus le premier producteur mondial de pétrole en 2018 grâce au pétrole de schiste, bouleversant la géopolitique énergétique.'
            },
            {
              title: 'Le gaz et la géopolitique des gazoducs',
              paragraphs: [
                'Le <strong>gaz naturel</strong> représente 25 % de la consommation énergétique mondiale. Contrairement au pétrole (transporté par tankers), le gaz dépend de gazoducs, créant des dépendances géopolitiques. L\'Europe importait 40 % de son gaz de Russie via les gazoducs Nord Stream, Brotherhood et TurkStream. L\'invasion de l\'Ukraine (2022) et le sabotage de Nord Stream ont provoqué la plus grave crise énergétique européenne depuis 1973.',
                'Le <strong>GNL</strong> (gaz naturel liquéfié), transporté par méthaniers, offre une alternative aux gazoducs. Le Qatar, l\'Australie et les États-Unis sont les trois premiers exportateurs. L\'Europe a massivement importé du GNL américain après 2022 pour remplacer le gaz russe. Le gaz est aussi un enjeu majeur en Méditerranée orientale (gisements découverts au large d\'Israël, de l\'Égypte et de Chypre) et en Afrique de l\'Est (Mozambique, Tanzanie).'
              ],
              highlight: 'Le sabotage des gazoducs Nord Stream en septembre 2022 est considéré comme le plus grand acte de sabotage d\'infrastructure de l\'histoire.'
            },
            {
              title: 'Transition énergétique et nouveaux enjeux',
              paragraphs: [
                'La <strong>transition énergétique</strong> vers les renouvelables (solaire, éolien, hydraulique) redistribue les rapports de force. La Chine domine la production de panneaux solaires (80 % du marché mondial), de batteries lithium-ion et de véhicules électriques. Elle contrôle également 60 % du raffinage mondial de minerais critiques (lithium, cobalt, terres rares), essentiels à la transition.',
                'La <strong>géopolitique des minerais critiques</strong> remplace progressivement la géopolitique du pétrole. La République démocratique du Congo produit 70 % du cobalt mondial, l\'Australie et le Chili 75 % du lithium, la Chine 60 % des terres rares. Ces concentrations créent de nouvelles dépendances et de nouveaux risques de conflits. Les États-Unis et l\'UE développent des stratégies d\'approvisionnement pour réduire leur dépendance envers la Chine.'
              ],
              highlight: 'La Chine contrôle 60 % du raffinage mondial de minerais critiques, créant une nouvelle dépendance comparable à celle du pétrole au XXe siècle.'
            }
          ],
          quiz: [
            { q: 'Quand a eu lieu le premier choc pétrolier ?', opts: ['1960', '1973', '1986', '2008'], correct: 1, explanation: 'Le premier choc pétrolier a eu lieu en 1973 lors de l\'embargo pétrolier arabe en réponse à la guerre du Kippour, quadruplant le prix du baril.' },
            { q: 'Quel pays est le premier producteur mondial de pétrole en 2025 ?', opts: ['Arabie saoudite', 'Russie', 'États-Unis', 'Chine'], correct: 2, explanation: 'Les États-Unis sont redevenus le premier producteur mondial de pétrole en 2018 grâce à la révolution du pétrole de schiste.' },
            { q: 'Quel pays domine la production de panneaux solaires ?', opts: ['Allemagne', 'États-Unis', 'Chine', 'Japon'], correct: 2, explanation: 'La Chine produit environ 80 % des panneaux solaires mondiaux, dominant toute la chaîne de valeur du solaire photovoltaïque.' }
          ],
          definitions: [
            { term: 'OPEP', def: 'Organisation des pays exportateurs de pétrole : cartel de 13 pays producteurs coordonnant la production pour influencer les prix.' },
            { term: 'GNL', def: 'Gaz naturel liquéfié : gaz refroidi à -162 °C pour être transporté par méthaniers, offrant une alternative aux gazoducs.' },
            { term: 'Pétrole de schiste', def: 'Pétrole extrait de formations rocheuses peu perméables par fracturation hydraulique, principalement aux États-Unis.' },
            { term: 'Minerais critiques', def: 'Matières premières essentielles à la transition énergétique (lithium, cobalt, terres rares) dont l\'approvisionnement est concentré géographiquement.' },
            { term: 'Transition énergétique', def: 'Passage d\'un système énergétique fondé sur les combustibles fossiles à un système fondé sur les énergies renouvelables et l\'efficacité énergétique.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Le premier puits de pétrole commercial a été foré en 1859 à Titusville (Pennsylvanie) par Edwin Drake. Le pétrole valait alors 20 dollars le baril — un prix qui ne serait durablement dépassé qu\'en 2003.' },
            { front: '💡 Le savais-tu ?', back: 'L\'Arabie saoudite possède la plus grande réserve de pétrole conventionnel au monde (267 milliards de barils), mais le Venezuela la dépasse en réserves totales (300 milliards) grâce à ses pétroles extra-lourds.' },
            { front: '💡 Le savais-tu ?', back: 'La RDC produit 70 % du cobalt mondial, indispensable aux batteries lithium-ion. Une grande partie est extraite par des mineurs artisanaux, dont des enfants, dans des conditions déplorables.' }
          ]
        },
        {
          slug: 'gouvernance-mondiale',
          title: 'Gouvernance mondiale',
          description: 'Défis transnationaux, réforme des institutions et avenir de l\'ordre international.',
          intro: 'La <strong>gouvernance mondiale</strong> désigne l\'ensemble des règles, institutions et processus par lesquels les acteurs internationaux gèrent les problèmes transnationaux. Pandémies, changement climatique, cybersécurité et intelligence artificielle exigent des réponses collectives que le système actuel peine à fournir.',
          introHighlight: '<strong>Les défis du XXIe siècle</strong> — pandémies, climat, cyber, IA, migration — sont transnationaux par nature : aucun État ne peut les résoudre seul.',
          intro2: '',
          sections: [
            {
              title: 'Les limites du système actuel',
              paragraphs: [
                'Le <strong>système international</strong> actuel, conçu en 1945, peine à répondre aux défis du XXIe siècle. Le Conseil de sécurité de l\'ONU, avec sa composition et son droit de veto inchangés depuis 1945, ne reflète plus les rapports de force contemporains. L\'absence de l\'Inde, de l\'Allemagne, du Japon et du Brésil parmi les membres permanents est un anachronisme. Les institutions de Bretton Woods (FMI, Banque mondiale) sont critiquées pour leur gouvernance dominée par l\'Occident.',
                'Les <strong>biens publics mondiaux</strong> — climat, santé, cybersécurité, stabilité financière — nécessitent une coopération que le nationalisme et la rivalité géopolitique rendent difficile. La pandémie de Covid-19 a illustré cette tension : face à un virus mondial, les États ont d\'abord réagi de manière nationale (fermeture des frontières, nationalisme vaccinal), avant de coopérer tardivement (mécanisme COVAX).'
              ],
              highlight: 'Le Conseil de sécurité de l\'ONU n\'a pas été réformé depuis 1945, un anachronisme dans un monde où l\'Inde compte 1,4 milliard d\'habitants.'
            },
            {
              title: 'Vers un nouveau multilatéralisme',
              paragraphs: [
                'Face aux blocages du multilatéralisme traditionnel, de nouvelles formes de <strong>gouvernance émergent</strong>. Les coalitions thématiques (Alliance pour le multilatéralisme, Alliance solaire internationale) réunissent des États volontaires autour d\'objectifs spécifiques. Les partenariats public-privé (GAVI pour les vaccins, Fonds mondial contre le sida) associent États, entreprises et fondations philanthropiques.',
                'Le <strong>multilatéralisme des villes</strong> (C40 Cities, réseau de 100 mégapoles engagées contre le changement climatique) et le multilatéralisme des entreprises (Business Roundtable, engagement RSE) complètent l\'action des États. La société civile mondiale (campagnes numériques, mouvements transnationaux) exerce une pression croissante. Ces innovations n\'abolissent pas le système des Nations Unies mais le complètent par une gouvernance en réseau, plus souple et plus inclusive.'
              ],
              highlight: 'Le réseau C40 Cities regroupe 100 mégapoles représentant 700 millions d\'habitants et un quart de l\'économie mondiale, agissant contre le changement climatique.'
            },
            {
              title: 'Les enjeux de demain',
              paragraphs: [
                'L\'<strong>intelligence artificielle</strong> est le prochain grand défi de gouvernance mondiale. L\'IA générative (ChatGPT, 2022) a ouvert un débat sur la régulation : l\'UE a adopté l\'AI Act (2024), première réglementation complète au monde, tandis que les États-Unis privilégient l\'autorégulation. Le risque de course à l\'IA entre grandes puissances (États-Unis, Chine, UE) sans cadre commun rappelle les débuts de l\'ère nucléaire.',
                'Les <strong>autres enjeux</strong> incluent la gouvernance de l\'espace extra-atmosphérique (12 000 satellites en orbite, débris spatiaux, exploitation minière des astéroïdes), la régulation des crypto-monnaies et de la finance décentralisée, la gestion des pandémies futures (traité pandémie en négociation à l\'OMS) et la gouvernance des flux migratoires (Pacte mondial pour les migrations, 2018). Le XXIe siècle testera la capacité de l\'humanité à coopérer face à des défis existentiels.'
              ],
              highlight: 'L\'AI Act européen (2024) est la première réglementation complète de l\'intelligence artificielle au monde, classant les systèmes IA par niveau de risque.'
            }
          ],
          quiz: [
            { q: 'Pourquoi le Conseil de sécurité de l\'ONU est-il critiqué ?', opts: ['Il coûte trop cher', 'Sa composition de 1945 ne reflète plus les rapports de force actuels', 'Il se réunit trop souvent', 'Il a trop de membres'], correct: 1, explanation: 'Le Conseil de sécurité, avec ses 5 membres permanents inchangés depuis 1945, ne reflète plus les rapports de force du XXIe siècle, excluant l\'Inde, l\'Allemagne, le Japon et le Brésil.' },
            { q: 'Qu\'est-ce qu\'un bien public mondial ?', opts: ['Un produit vendu dans le monde entier', 'Un bien commun nécessitant une coopération internationale (climat, santé)', 'Un monument classé', 'Une marque internationale'], correct: 1, explanation: 'Un bien public mondial est un bien commun dont la préservation nécessite une coopération internationale : le climat, la stabilité financière, la santé publique, la cybersécurité.' },
            { q: 'Quelle est la première réglementation complète de l\'IA au monde ?', opts: ['Le RGPD', 'L\'AI Act européen', 'Le Digital Markets Act', 'La loi chinoise sur l\'IA'], correct: 1, explanation: 'L\'AI Act européen (2024) est la première réglementation complète de l\'intelligence artificielle au monde, classant les systèmes IA par niveau de risque.' }
          ],
          definitions: [
            { term: 'Gouvernance mondiale', def: 'Ensemble des règles, institutions et processus par lesquels les acteurs internationaux gèrent les problèmes transnationaux.' },
            { term: 'Bien public mondial', def: 'Bien commun dont les bénéfices sont universels et dont la préservation nécessite une coopération internationale (climat, santé, sécurité).' },
            { term: 'Multilatéralisme', def: 'Approche de la gouvernance mondiale impliquant trois États ou plus dans la résolution de problèmes communs via des institutions internationales.' },
            { term: 'AI Act', def: 'Réglementation européenne de l\'intelligence artificielle (2024), première au monde, classant les systèmes IA par niveau de risque.' },
            { term: 'COVAX', def: 'Mécanisme international créé en 2020 pour garantir un accès équitable aux vaccins contre le Covid-19 dans tous les pays.' }
          ],
          memos: [
            { front: '💡 Le savais-tu ?', back: 'Il y a plus de 12 000 satellites actifs en orbite terrestre en 2025, dont plus de 6 000 appartiennent à Starlink (SpaceX). La gestion des débris spatiaux (36 000 objets de plus de 10 cm) est un enjeu de gouvernance mondial émergent.' },
            { front: '💡 Le savais-tu ?', back: 'Le Sommet de l\'avenir de l\'ONU (New York, septembre 2024) a adopté un « Pacte pour l\'avenir » comprenant un volet sur la gouvernance de l\'IA et des nouvelles technologies.' },
            { front: '💡 Le savais-tu ?', back: 'António Guterres, Secrétaire général de l\'ONU, a qualifié le changement climatique de « menace existentielle » et comparé la situation actuelle à « la veille d\'une guerre mondiale » pour l\'humanité.' }
          ]
        }
      ]
    }
  ]
};
