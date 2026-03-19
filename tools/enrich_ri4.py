import json

# Third pass — bring all articles above 15000 chars
# Targeting the shortest articles first

ENRICHMENTS3 = {
"conflits/terrorisme-international": """
<h3>La lutte antiterroriste et ses dilemmes</h3>
<p class="resume-text">La <strong>guerre contre le terrorisme</strong> déclarée par George W. Bush après le 11 septembre 2001 a transformé les politiques sécuritaires à l'échelle mondiale. La loi USA PATRIOT a élargi massivement les pouvoirs de surveillance des services de renseignement américains. Le programme de détention extraterritoriale à Guantanamo (ouvert en 2002, encore partiellement actif) et les techniques d'interrogatoire controversées (waterboarding) ont soulevé de graves questions sur la compatibilité de la lutte antiterroriste avec l'État de droit et les droits humains.</p>
<p class="resume-text">Les révélations d'Edward Snowden (2013) ont mis en lumière l'étendue de la surveillance numérique des agences de renseignement américaines (NSA) et britanniques (GCHQ) : interception massive de communications d'internautes et d'hommes d'État étrangers, y compris des alliés. Ces révélations ont provoqué une crise diplomatique avec l'Allemagne (espionnage du téléphone d'Angela Merkel) et relancé le débat sur l'équilibre entre sécurité nationale et liberté civile.</p>
<div class="highlight-box"><p>Le <strong>djihadisme de retour</strong> est un défi sécuritaire majeur pour les pays européens : des centaines de ressortissants européens ayant combattu avec Daech en Syrie et en Irak sont rentrés dans leurs pays d'origine. La gestion de leur retour — poursuites pénales, programme de déradicalisation, surveillance — varie selon les pays et fait l'objet d'intenses débats entre impératifs sécuritaires et droits fondamentaux.</p></div>
<h3>La prévention de la radicalisation</h3>
<p class="resume-text">Face à la menace des attentats commis par des individus radicalisés sans lien direct avec des organisations terroristes, les États ont développé des programmes de prévention de la radicalisation (PVE, Preventing Violent Extremism). Ces programmes ciblent les individus vulnérables à la radicalisation dans les prisons, les écoles, les centres sociaux. Ils font appel à des travailleurs sociaux, des imams, des anciens djihadistes repentis, des psychologues.</p>
<p class="resume-text">L'efficacité de ces programmes est difficile à évaluer et leur mise en oeuvre est controversée. Au Danemark, le modèle d'Aarhus (accompagnement individuel, mentorat, réintégration) est réputé pour ses résultats. En France, les programmes de déradicalisation ont été jugés insuffisants après les attentats de 2015-2016. La <strong>radicalisation en ligne</strong> est particulièrement difficile à contrer : les algorithmes de recommandation des plateformes créent des chambres d'écho qui accélèrent la radicalisation idéologique.</p>
""",

"diplomatie/diplomatie-culturelle": """
<h3>La gastronomie et le sport comme diplomatie</h3>
<p class="resume-text">Les <strong>Jeux olympiques</strong> ont été dès leur renaissance (1896) un outil de diplomatie sportive. Le boycott des JO de Moscou (1980) par les États-Unis et leurs alliés en réaction à l'invasion soviétique de l'Afghanistan, puis le boycott de Los Angeles (1984) par l'URSS, illustrent comment le sport peut être instrumentalisé politiquement. La diplomatie du ping-pong (1971), où des échanges de joueurs de tennis de table ont préparé la normalisation sino-américaine, est devenue un exemple canonique de la diplomatie sportive.</p>
<p class="resume-text">La <strong>gastronomie</strong> est un vecteur de diplomatie culturelle sous-estimé. Les dîners d'État sont soigneusement orchestrés pour signaler des symboles culturels (choix des plats, des vins, des décors). La diplomatie gastronomique coréenne (promotion du kimchi et de la cuisine coréenne à l'étranger), japonaise (washoku inscrit au patrimoine UNESCO) ou française (repas gastronomique des Français au patrimoine UNESCO depuis 2010) mettent les savoir-faire culinaires au service de l'influence culturelle internationale.</p>
<div class="highlight-box"><p>Le <strong>tourisme</strong> est devenu un instrument de soft power majeur. En 2023, les 10 pays les plus visités au monde (France en tête avec 90 millions de visiteurs) bénéficient non seulement de retombées économiques directes mais aussi d'une exposition culturelle massive qui façonne les perceptions à l'étranger. La promotion touristique est désormais intégrée dans les stratégies d'influence des ministères des affaires étrangères.</p></div>
<h3>La francophonie comme réseau d'influence</h3>
<p class="resume-text">L'<strong>Organisation internationale de la Francophonie</strong> (OIF, 88 États et gouvernements membres) constitue le réseau diplomatique et culturel français le plus étendu. Fondée en 1970, elle dépasse largement la promotion de la langue française pour couvrir la démocratie, l'État de droit, le développement durable et les droits humains. Ses membres représentent un tiers des États du monde, avec une forte composante africaine.</p>
<p class="resume-text">La langue française est parlée par 320 millions de personnes comme langue maternelle ou langue officielle, et est la deuxième langue la plus apprise dans le monde. L'<strong>Alliance française</strong>, réseau mondial de promotion du français et de la culture française, opère dans plus de 130 pays. La <strong>TV5Monde</strong>, chaîne internationale francophone disponible dans 200 pays, est un outil médiatique de rayonnement culturel. Ces réseaux constituent un capital d'influence diplomatique significatif, même si le français est concurrencé par l'anglais dans de nombreux espaces.</p>
""",

"traites/desarmement-nucleaire": """
<h3>Le risque nucléaire au XXIe siècle</h3>
<p class="resume-text">Le <strong>risque d'accident nucléaire</strong> reste une préoccupation réelle malgré les améliorations de sécurité depuis les incidents de Three Mile Island (1979) et de Tchernobyl (1986). L'accident de Fukushima (2011), provoqué par un tsunami exceptionnel, a conduit plusieurs pays (Allemagne, Belgique) à accélérer leur sortie du nucléaire civil, tandis que d'autres (France, Chine, Inde) maintenaient ou développaient leurs capacités. La guerre en Ukraine a créé un précédent inédit avec la centrale de Zaporijjia (la plus grande d'Europe) occupée par des troupes russes et utilisée comme bouclier militaire.</p>
<p class="resume-text">La <strong>dissuasion nucléaire étendue</strong> — la garantie américaine de protection de leurs alliés par le parapluie nucléaire — est un pilier de la sécurité en Europe et en Asie. Les États-Unis maintiennent des bombes nucléaires tactiques B61 déployées en Europe (Allemagne, Belgique, Pays-Bas, Italie, Turquie) dans le cadre du partage nucléaire de l'OTAN. La modernisation en B61-12 à guidage de précision a suscité des débats sur l'abaissement potentiel du seuil d'emploi nucléaire.</p>
""",

"traites/droit-de-la-mer": """
<h3>L'Arctique : un nouvel océan à gouverner</h3>
<p class="resume-text">Le réchauffement climatique ouvre progressivement l'<strong>Arctique</strong> à la navigation et à l'exploitation des ressources. La fonte de la banquise rend le <strong>passage du Nord-Est</strong> (côtes russes) et le <strong>passage du Nord-Ouest</strong> (côtes canadiennes et américaines) navigables une partie de l'année, raccourcissant significativement les routes entre l'Europe et l'Asie. Ces nouvelles routes commerciales soulèvent des questions juridiques : la Russie considère le passage du Nord-Est comme ses eaux intérieures, tandis que les États-Unis et d'autres pays y voient un détroit international.</p>
<p class="resume-text">Les cinq États arctiques côtiers (Russie, États-Unis, Canada, Danemark/Groenland, Norvège) ont tous soumis des demandes d'extension de leurs plateaux continentaux à la Commission des limites du plateau continental (CLPC) de l'ONU, s'appuyant sur la CNUDM. Ces demandes parfois chevauchantes concernent des zones potentiellement riches en hydrocarbures et en nodules polymétalliques. La <strong>militarisation de l'Arctique</strong> s'est accélérée avec la réactivation d'infrastructures militaires russes abandonnées depuis la Guerre froide.</p>
""",

"organisations-internationales/organisations-regionales": """
<h3>L'Organisation de Shanghai pour la coopération</h3>
<p class="resume-text">L'<strong>Organisation de Shanghai pour la coopération</strong> (OCS), fondée en 2001 par la Chine, la Russie et quatre États d'Asie centrale, s'est élargie pour inclure l'Inde, le Pakistan (2017), l'Iran et la Biélorussie (2023). Avec 8 membres qui représentent 40% de la population mondiale et 25% du PIB mondial, l'OCS est une organisation de sécurité et de coopération économique qui défend explicitement une vision multipolaire de l'ordre mondial et le principe de non-ingérence dans les affaires intérieures.</p>
<p class="resume-text">L'<strong>OCS</strong> se concentre sur la coopération en matière de sécurité (lutte contre le terrorisme, le séparatisme et l'extrémisme — les « trois forces mauvaises »), économique (Banque de développement de l'OCS) et culturelle. Ses exercices militaires conjoints, bien que limités, illustrent une coopération sécuritaire sino-russe croissante. La contradiction entre les deux principaux membres — la Chine (intérêts économiques en Asie centrale) et la Russie (intérêts sécuritaires) — et les rivalités indo-pakistanaises limitent cependant l'efficacité de l'organisation.</p>
<div class="highlight-box"><p>Les <strong>BRICS</strong> (Brésil, Russie, Inde, Chine, Afrique du Sud) se sont élargis en 2024 pour accueillir l'Égypte, l'Éthiopie, l'Iran, les Émirats arabes unis et l'Arabie Saoudite — formant le BRICS+. Ce club informel de puissances émergentes cherche à réformer la gouvernance économique mondiale et à réduire la dépendance au dollar, mais est traversé par des divisions profondes (Chine vs Inde, Russie sous sanctions).</p></div>
""",

"organisations-internationales/otan-et-alliances": """
<h3>L'OTAN et le flanc sud : Méditerranée et Sahel</h3>
<p class="resume-text">L'OTAN doit gérer simultanément plusieurs menaces depuis des directions opposées. Sur le <strong>flanc oriental</strong> (Russie), l'Alliance a considérablement renforcé sa présence depuis 2022 : bataillons multinationaux dans tous les pays frontaliers de la Russie, pré-positionnement de matériels, exercices d'envergure croissante. Sur le <strong>flanc sud</strong> (Sahel, terrorisme, migrations), l'OTAN a des capacités plus limitées et les défis sont différents : pas d'adversaire étatique clairement identifié, mais des organisations terroristes, des États faillis et des flux migratoires.</p>
<p class="resume-text">Le <strong>Dialogue méditerranéen</strong> de l'OTAN (Maroc, Algérie, Tunisie, Égypte, Israël, Jordanie, Mauritanie) et l'Initiative de coopération d'Istanbul (avec les pays du Golfe) sont des formules de partenariat sans obligations mutuelles. La question de l'adhésion de l'Ukraine à l'OTAN reste politiquement centrale mais pratiquement complexe tant que le conflit avec la Russie se poursuit — une adhésion impliquerait l'activation automatique de l'article 5.</p>
""",

"organisations-internationales/ong-et-societe-civile": """
<h3>Les ONG locales et la localisation de l'aide</h3>
<p class="resume-text">Le mouvement de <strong>localisation de l'aide humanitaire</strong> prône le transfert de ressources et de pouvoir décisionnel vers les acteurs locaux — ONG nationales, gouvernements locaux, organisations communautaires. Le Grand Bargain de 2016 a fixé l'objectif de diriger 25% de l'aide humanitaire directement aux acteurs locaux et nationaux. Malgré des progrès, les ONG internationales restent dominantes : elles ont accès aux financements, aux réseaux de sécurité et aux capacités techniques dont les acteurs locaux manquent souvent.</p>
<p class="resume-text">Les <strong>ONG chinoises</strong> et de pays émergents jouent un rôle croissant dans l'aide au développement et l'action humanitaire, mais selon des modèles différents des ONG occidentales : moins d'indépendance par rapport aux États, conception différente du plaidoyer et des droits humains. Cette pluralité des modèles reflète la diversification de la gouvernance mondiale mais complique aussi la coordination et le maintien de normes communes.</p>
<div class="highlight-box"><p>La <strong>crise de légitimité</strong> des ONG internationales a été accentuée par des scandales (affaire Oxfam en Haïti, 2018 ; accusations d'exploitation sexuelle au sein de l'ONUSIDA) et par des critiques de leurs pratiques (expatriés surpayés, manque de redevabilité envers les communautés bénéficiaires). Ces scandales ont accéléré les appels à plus de transparence, d'accountability et de représentation locale au sein des organisations humanitaires.</p></div>
""",

"conflits/droit-humanitaire": """
<h3>Le DIH dans les conflits non internationaux</h3>
<p class="resume-text">Les <strong>conflits armés non internationaux</strong> (CANI) — guerres civiles, insurrections — sont aujourd'hui plus fréquents que les conflits internationaux. L'article 3 commun aux quatre Conventions de Genève et le Protocole additionnel II (1977) y appliquent des normes minimales : traitement humain des personnes ne participant pas aux hostilités, interdiction du meurtre, de la torture et des traitements dégradants. Ces normes sont cependant moins détaillées que celles applicables aux conflits internationaux.</p>
<p class="resume-text">La <strong>qualification juridique</strong> d'un conflit est souvent contestée. Les États préfèrent qualifier les groupes armés qui leur résistent de criminels ou de terroristes plutôt que de parties à un conflit armé, ce qui leur évite d'appliquer les protections du DIH. Ce déni de la nature conflictuelle peut paradoxalement alimenter le cycle de violence en refusant aux combattants captifs les protections du statut de prisonnier de guerre.</p>
""",

"conflits/resolution-des-conflits": """
<h3>La diplomatie préventive : prévenir avant de guérir</h3>
<p class="resume-text">La <strong>diplomatie préventive</strong> vise à empêcher les différends d'évoluer en conflits ouverts. Elle comprend l'alerte précoce (systèmes de surveillance des signaux précurseurs de conflit), la mission des bons offices du Secrétaire général de l'ONU, les zones démilitarisées surveillées, les missions d'observation. La Commission de consolidation de la paix de l'ONU a intégré une dimension préventive dans son mandat, reconnaissant qu'il est moins coûteux de prévenir la rechute dans le conflit que d'en gérer les conséquences humanitaires.</p>
<p class="resume-text">Le <strong>Fonds pour la consolidation de la paix</strong> de l'ONU finance des activités catalytiques — souvent impossibles à financer via les canaux habituels (aide humanitaire trop court-termiste, aide au développement trop peu sensible aux conflits) — dans des pays fragiles. Il appuie le dialogue intercommunautaire, la réintégration des ex-combattants, la réforme des forces de sécurité et la réconciliation. Avec un budget modeste (environ 200 millions de dollars par an), il cherche à démultiplier son impact en déclenchant d'autres financements.</p>
""",

"traites/droit-des-traites": """
<h3>Le droit des traités dans le contexte multipolaire</h3>
<p class="resume-text">L'architecture du droit international des traités a été construite sous l'hégémonie occidentale et reflète des présupposés juridiques majoritairement romano-germaniques et de common law. Les puissances émergentes — Chine, Russie, Inde, pays du Sud global — remettent en cause non pas tant les règles formelles que leur interprétation et leur application par des institutions perçues comme occidentalo-centrées (CIJ, CPI, organes conventionnels de l'ONU). La Chine promeut notamment une conception de la souveraineté permanente sur les ressources naturelles et du principe de non-ingérence qui entre parfois en tension avec les normes des traités de droits humains.</p>
<p class="resume-text">Le phénomène de <strong>treaty shopping</strong> (forum shopping) consiste pour les États et les entreprises à choisir stratégiquement le traité et la juridiction les plus favorables à leurs intérêts. Dans le domaine de l'arbitrage investisseur-État, des entreprises multinationales ont utilisé des traités bilatéraux d'investissement pour attaquer devant des tribunaux arbitraux des décisions gouvernementales légitimes (hausse du salaire minimum, politiques environnementales). Ces affaires ont conduit plusieurs pays à renégocier ou dénoncer leurs accords bilatéraux d'investissement.</p>
""",

"traites/droit-international-environnemental": """
<h3>Le droit à un environnement sain</h3>
<p class="resume-text">En juillet 2022, l'Assemblée générale des Nations Unies a reconnu pour la première fois le <strong>droit à un environnement propre, sain et durable</strong> comme un droit humain. Cette résolution (historiquement non contraignante) ouvre la voie à des recours juridiques fondés sur les droits humains en matière environnementale. La <strong>justice climatique</strong> émerge comme un nouveau champ du droit : des particuliers, des ONG et même des États intentent des actions en justice pour forcer les gouvernements et les entreprises à réduire leurs émissions de gaz à effet de serre.</p>
<p class="resume-text">Les <strong>litiges climatiques</strong> se multiplient : plus de 2 000 affaires dans 65 pays en 2023. L'arrêt de la Cour suprême des Pays-Bas dans l'affaire Urgenda (2019) a condamné l'État néerlandais à respecter ses obligations climatiques, première décision contraignante de ce type. La Cour internationale de Justice est saisie d'une demande d'avis consultatif sur les obligations des États en matière de changements climatiques, à l'initiative de Vanuatu et soutenue par une centaine d'États — ce qui pourrait clarifier le cadre juridique international applicable.</p>
""",

"cooperation/mondialisation": """
<h3>La mondialisation culturelle et l'homogénéisation</h3>
<p class="resume-text">La mondialisation culturelle suscite des débats passionnés entre partisans de l'<strong>homogénéisation culturelle</strong> (la McDonaldisation du monde, l'américanisation des modes de vie et de consommation) et tenants de la <strong>créolisation culturelle</strong> (les cultures locales s'approprient et transforment les influences mondiales, créant de nouvelles formes hybrides). La réalité est sans doute mixte : certains aspects de la culture mondiale se standardisent (architecture des aéroports, chaînes hôtelières, fast-food) tandis que d'autres résistent ou se réinventent sous l'influence des contacts culturels.</p>
<p class="resume-text">L'essor des <strong>industries culturelles numériques</strong> (plateformes de streaming, jeux vidéo en ligne, réseaux sociaux) crée de nouvelles dynamiques de mondialisation culturelle. Netflix produit des séries locales (françaises, espagnoles, coréennes) qui circulent mondialement, créant une forme de globalisation culturelle polycentrique — mais toujours dominée par les acteurs américains (Netflix, Disney+, Apple TV+) et de plus en plus chinois (TikTok, iQiyi). Cette mondialisation numérique pose des questions sur la régulation des contenus, la fiscalité et la souveraineté culturelle que les États tentent de répondre par des régulations nationales ou régionales (règlement DSA européen, taxes sur les géants du numérique).</p>
""",

"cooperation/institutions-financieres": """
<h3>La réforme du système monétaire international</h3>
<p class="resume-text">Le <strong>système monétaire international</strong> (SMI) est informellement centré sur le dollar américain depuis 1945. Le dollar représente environ 60% des réserves de change mondiales, 80% des transactions de change et la majorité de la facturation du commerce international de matières premières. Ce <strong>privilège exorbitant</strong> du dollar (expression de Valéry Giscard d'Estaing) permet aux États-Unis d'emprunter à des conditions exceptionnellement favorables, mais aussi d'exercer une pression via les sanctions financières.</p>
<p class="resume-text">Les alternatives au dollar peinent à s'imposer. L'euro est la deuxième monnaie de réserve (20%) mais l'UE manque d'un marché obligataire unifié suffisamment profond et liquide. Le yuan chinois ne représente que 2-3% des réserves mondiales malgré l'inclusion dans le panier des DTS (2016), en raison des contrôles des capitaux maintenus par Pékin. La Chine développe néanmoins le yuan numérique et des systèmes de paiement alternatifs (CIPS) pour réduire sa dépendance au SWIFT et au dollar dans ses échanges avec les pays partenaires.</p>
""",

"cooperation/developpement-international": """
<h3>Le financement du développement durable</h3>
<p class="resume-text">Le <strong>financement des ODD</strong> (Objectifs de développement durable) nécessite selon les Nations Unies des investissements annuels de 3 900 à 4 500 milliards de dollars, dont 2 500 milliards dans les pays en développement. L'aide publique au développement (170 milliards de dollars en 2022, un record historique) ne couvre qu'une infime partie du besoin. Le financement privé — investissements directs, marchés obligataires verts et sociaux, capital-risque à impact — est présenté comme la solution pour combler le « gap » de financement.</p>
<p class="resume-text">Le <strong>debt relief</strong> (allègement de la dette) est revenu au premier plan de l'agenda international. L'Initiative HIPC (Pays pauvres très endettés) des années 1990-2000 avait apporté un soulagement significatif à 36 pays. Mais une nouvelle vague d'endettement, alimentée par les prêts chinois de la BRI et l'impact du Covid, a conduit une dizaine de pays africains à des situations de détresse financière (Zambie, Ghana, Sri Lanka, Éthiopie). Le G20 a créé le Cadre commun pour le traitement de la dette, mais son fonctionnement est critiqué pour sa lenteur et ses lacunes.</p>
""",

"cooperation/geopolitique-de-lenergie": """
<h3>La sécurité nucléaire et les menaces émergentes</h3>
<p class="resume-text">La <strong>sécurité des matières nucléaires</strong> — prévenir leur vol ou leur utilisation à des fins terroristes — est coordonnée par l'Agence internationale de l'énergie atomique (AIEA) et renforcée par des accords bilatéraux et multilatéraux. Les Sommets sur la sécurité nucléaire (2010-2016), organisés à l'initiative d'Obama, ont permis d'éliminer des centaines de sites de stockage de matières nucléaires vulnérables dans le monde. La dissolution de l'URSS avait créé des risques importants (matières nucléaires non sécurisées dans plusieurs ex-républiques soviétiques) qui ont été progressivement traités.</p>
<p class="resume-text">La <strong>fusion nucléaire</strong> pourrait révolutionner la géopolitique de l'énergie à long terme. La réalisation historique du NIF (National Ignition Facility) américain, qui a obtenu un gain énergétique net en décembre 2022, et les progrès du projet international ITER (en construction à Cadarache, France, avec 35 nations partenaires), laissent entrevoir une source d'énergie potentiellement illimitée et propre. Si la fusion commerciale devient réalité d'ici 2050-2060 (horizon incertain), elle bouleverserait radicalement les équilibres géopolitiques énergétiques actuels.</p>
""",

"cooperation/gouvernance-mondiale": """
<h3>Le multilatéralisme à l'épreuve du nationalisme</h3>
<p class="resume-text">Le <strong>multilatéralisme</strong> — la coordination entre plusieurs États selon des règles convenues pour traiter des problèmes communs — est mis à l'épreuve par la montée des nationalistes et populistes qui privilégient les accords bilatéraux et le rapport de forces direct. La présidence Trump (2017-2021 et depuis 2025) a illustré cette tension : retrait de l'Accord de Paris, du partenariat transpacifique, de l'UNESCO, de l'OMS (temporairement), de l'accord nucléaire iranien (JCPOA), remise en cause de l'OTAN. Ces retraits ont créé un vide que la Chine et d'autres puissances ont cherché à combler.</p>
<p class="resume-text">La réponse à la pandémie de Covid-19 (2020-2021) a illustré à la fois la nécessité et les limites du multilatéralisme : l'OMS a été critiquée pour sa gestion initiale de l'alerte, les États ont fait cavalier seul pour les achats de vaccins et d'équipements, le nationalisme vaccinal a retardé l'accès des pays pauvres. En même temps, la coordination scientifique internationale (séquençage du génome du virus en 48 heures, partage accéléré des données) et le mécanisme COVAX (distribution équitable des vaccins) ont montré la valeur du multilatéralisme dans la gestion des crises globales.</p>
""",

"organisations-internationales/systeme-des-nations-unies": """
<h3>L'ONU et les nouvelles menaces globales</h3>
<p class="resume-text">L'ONU a dû adapter son mandat à des menaces qui n'existaient pas en 1945 : terrorisme transnational (résolution 1373 du Conseil de sécurité, 2001), prolifération des armes de destruction massive, changements climatiques, pandémies, cybersécurité. Ces enjeux recoupent les domaines de compétence de multiples agences onusiennes, posant des défis de coordination. L'ONU a créé de nouveaux organes (Bureau du Représentant spécial pour les migrations, Bureau du désarmement) mais peine à adapter sa structure fondamentale aux réalités du XXIe siècle.</p>
<p class="resume-text">La <strong>coopération entre ONU et organisations régionales</strong> (Chapitre VIII de la Charte) est de plus en plus centrale. L'Union africaine conduit des opérations de maintien de la paix (Somalie, Sahel) que l'ONU soutient financièrement et politiquement. L'Union européenne déploie des missions civiles et militaires dans plusieurs pays (Kosovo, Somalie, Méditerranée). Ces partenariats permettent de répondre à des crises que l'ONU serait incapable de gérer seule, mais créent aussi des questions de coordination, d'autorité et de standards de protection des civils.</p>
""",

"organisations-internationales/union-europeenne": """
<h3>L'Europe de la défense : un projet en construction</h3>
<p class="resume-text">L'<strong>Europe de la défense</strong> a longtemps été le parent pauvre de l'intégration européenne, bloquée par l'existence de l'OTAN (pour les membres atlantistes) et les velléités d'autonomie stratégique française. La <strong>Politique de sécurité et de défense commune</strong> (PSDC) a déployé une quarantaine de missions civiles et militaires depuis 2003 (Bosnie, Kosovo, Somalie, Mali, Ukraine). Mais ces missions restent limitées en comparaison de l'OTAN et des capacités militaires nationales.</p>
<p class="resume-text">L'invasion russe de l'Ukraine en 2022 a donné une impulsion inédite à la défense européenne. La <strong>Boussole stratégique</strong> de l'UE (2022) définit pour la première fois une ambition stratégique commune, prévoit la création d'une capacité de déploiement rapide de 5 000 soldats et renforce la coopération industrielle de défense. Le <strong>Fonds européen de défense</strong> finance depuis 2021 la recherche et le développement de capacités militaires communes. La France a obtenu une reconnaissance de son rôle de puissance nucléaire au service de la sécurité européenne, sans que cela constitue un bouclier nucléaire européen formalisé.</p>
""",

"conflits/theories-du-conflit": """
<h3>La théorie des jeux appliquée aux conflits internationaux</h3>
<p class="resume-text">La <strong>théorie des jeux</strong>, développée par John von Neumann et John Nash, offre des outils formels pour analyser les situations stratégiques en relations internationales. Le <strong>dilemme du prisonnier</strong> modélise la tendance des États à choisir des stratégies sous-optimales (course aux armements, non-coopération) même quand la coopération serait mutuellement avantageuse. Le jeu répété (iterated game) montre que la coopération peut émerger entre des acteurs qui interagissent de façon répétée — ce qui fonde théoriquement les organisations internationales et les régimes de coopération.</p>
<p class="resume-text">Le modèle de la <strong>dissuasion étendue</strong> peut être formalisé comme un jeu à trois joueurs : le patron (États-Unis), le protégé (Allemagne, Japon) et l'adversaire potentiel (Russie, Chine). Le patron doit être suffisamment crédible pour que l'adversaire ne cherche pas à tester la garantie, mais suffisamment prudent pour ne pas déclencher une escalade. Thomas Schelling, Prix Nobel d'économie 2005, a analysé la logique de la dissuasion comme un jeu de brinkmanship (jouer avec le feu) où les deux parties doivent signaler leur résolution tout en gérant l'incertitude sur les intentions adverses.</p>
<div class="highlight-box"><p>Le <strong>paradoxe de la sécurité absolue</strong> (théorisé par Arnold Wolfers) illustre les limites du réalisme : si un État cherche une sécurité absolue, il devra dominer tous ses voisins — ce qui les rendra moins sûrs et les poussera à coaliser contre lui. La sécurité est intrinsèquement relative et relationnelle, ce qui impose la coopération comme composante nécessaire de toute stratégie de sécurité durable.</p></div>
""",

"diplomatie/negociation-internationale": """
<h3>La psychologie de la négociation</h3>
<p class="resume-text">La <strong>psychologie cognitive</strong> a enrichi la compréhension des négociations internationales. Les biais cognitifs — ancrage (sur-pondération de la première offre), aversion à la perte (les pertes pèsent plus que les gains équivalents), excès de confiance, pensée de groupe — affectent les décisions des négociateurs tout autant que les intérêts objectifs. La <strong>psychologie de la négociation</strong> enseigne comment utiliser ces biais à son avantage (faire une première offre ambitieuse pour ancrer la négociation) et comment les contourner chez soi (devil's advocate, red team analysis).</p>
<p class="resume-text">La <strong>relation de confiance</strong> entre négociateurs est un acteur souvent sous-estimé dans les analyses rationnelles. Des décennies de contacts réguliers entre diplomates créent des relations personnelles qui facilitent la communication dans les crises. Le « canal de la souris » (back channel) entre Kennedy et Khrouchtchev lors de la crise de Cuba, ou les contacts informels entre négociateurs israéliens et palestiniens qui ont précédé les Accords d'Oslo, illustrent comment les relations personnelles peuvent débloquer des impasses institutionnelles.</p>
""",

"diplomatie/histoire-de-la-diplomatie": """
<h3>La diplomatie de la Chine ancienne et les traditions non-occidentales</h3>
<p class="resume-text">La diplomatie n'est pas une invention occidentale. La Chine impériale a développé le système tributaire, un ordre international centré sur l'Empereur du Milieu auquel les États voisins rendaient tribut en échange de sa reconnaissance et de sa protection. Ce système, qui organisa les relations en Asie orientale pendant des siècles, était fondé sur une cosmologie confucéenne d'ordre hiérarchique plutôt que sur l'égalité souveraine westphalienne. L'Inde classique a connu sa propre tradition diplomatique theorisée dans l'Arthashastra de Kautilya (IVe s. av. J.-C.), traité de science politique et de stratégie qui anticipe de nombreux concepts modernes.</p>
<p class="resume-text">La <strong>diplomatie islamique médiévale</strong> a développé des normes de protection des émissaires (les ambassadeurs jouissaient de l'inviolabilité en terres d'islam), d'établissement de trêves et de traités. Les <strong>capitulations</strong> — accords accordant des privilèges juridiques et commerciaux aux ressortissants européens dans l'Empire ottoman — sont l'un des premiers exemples d'accords d'immunité diplomatique formalisés entre civilisations différentes. La mémoire de ces capitulations perçues comme une humiliation reste présente dans la diplomatie du monde arabe contemporain.</p>
""",

"diplomatie/droit-diplomatique": """
<h3>Les sanctions diplomatiques et les expulsions</h3>
<p class="resume-text">Les <strong>sanctions diplomatiques</strong> constituent un arsenal gradué de mesures de rétorsion entre États. Le rappel de l'ambassadeur pour consultations signale un mécontentement mais maintient le canal diplomatique ouvert. Le rappel définitif de l'ambassadeur représente une dégradation sérieuse des relations. La rupture des relations diplomatiques est mesure la plus grave : l'État est représenté par un pays tiers dans ses intérêts auprès de l'État avec lequel il a rompu.</p>
<p class="resume-text">Les <strong>expulsions collectives</strong> de diplomates sont devenues un instrument de pression fréquemment utilisé. Après l'empoisonnement de Sergei Skripal à Salisbury (2018), attribué aux services russes, 28 pays ont expulsé collectivement plus de 150 diplomates russes — la plus grande expulsion collective de l'histoire. La Russie a répondu en nature par des expulsions réciproques. Ces vagues d'expulsions entraînent une dégradation durable des capacités diplomatiques et de renseignement de toutes les parties concernées.</p>
""",

"diplomatie/diplomatie-economique": """
<h3>La diplomatie économique multilatérale</h3>
<p class="resume-text">Les <strong>négociations du G7/G8</strong>, qui réunissent depuis 1975 les dirigeants des principales démocraties industrialisées, sont un exemple de diplomatie économique informelle au plus haut niveau. Ces sommets ne produisent pas de traités contraignants mais des déclarations et des engagements politiques qui orientent les politiques économiques des participants et envoient des signaux aux marchés. Le G7 a joué un rôle crucial dans la coordination des sanctions contre la Russie après l'invasion de l'Ukraine et dans la mise en place d'un plafonnement des prix du pétrole russe.</p>
<p class="resume-text">La <strong>diplomatie économique bilatérale</strong> implique aussi des interactions régulières entre ministères des finances, banques centrales et régulateurs. Les <strong>consultations économiques bilatérales</strong> entre la Chine et les États-Unis (Strategic and Economic Dialogue, puis Economic and Trade Framework) sont des enceintes cruciales de gestion des tensions commerciales et financières entre les deux premières économies mondiales. La dégradation de ces canaux de communication depuis 2018 contribue à l'escalade de la guerre commerciale sino-américaine.</p>
""",

"conflits/guerres-modernes": """
<h3>Les femmes, la paix et la sécurité</h3>
<p class="resume-text">La résolution 1325 du Conseil de sécurité de l'ONU (2000) a fondé l'agenda « Femmes, paix et sécurité » (WPS), reconnaissant que les femmes subissent les conflits différemment des hommes, que leur participation aux processus de paix améliore la durabilité des accords, et qu'elles doivent être protégées contre les violences sexuelles utilisées comme arme de guerre. Vingt-quatre ans plus tard, les progrès sont inégaux : les femmes représentent moins de 20% des délégations de paix dans les négociations formelles.</p>
<p class="resume-text">Les <strong>violences sexuelles en temps de conflit</strong> (viol, esclavage sexuel, grossesses forcées) sont depuis le Tribunal pénal international pour l'ex-Yougoslavie qualifiées de crimes de guerre et crimes contre l'humanité. Denis Mukwege (Prix Nobel de la paix 2018) et son hôpital de Panzi en RDC ont traité des dizaines de milliers de victimes de viols de guerre dans les conflits qui déchirent l'est du Congo depuis 1996. La lutte contre l'impunité pour ces crimes reste un défi majeur du droit international humanitaire.</p>
""",
}

def enrich_page(content, extra_html):
    idx = content.rfind('</section>')
    if idx == -1:
        return content + extra_html
    return content[:idx] + extra_html + content[idx:]

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/relations-internationales.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

enriched = 0
for key, extra in ENRICHMENTS3.items():
    if key in data['pages']:
        page = data['pages'][key]
        original_len = len(page['content'])
        page['content'] = enrich_page(page['content'], extra)
        new_len = len(page['content'])
        print(f'  {key}: {original_len} -> {new_len} chars')
        enriched += 1

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/relations-internationales.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Final check
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/relations-internationales.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
course_pages = [(k, len(p['content'])) for k,p in data['pages'].items() if p.get('type') in ('course','lesson')]
above_15k = sum(1 for k,l in course_pages if l >= 15000)
above_14k = sum(1 for k,l in course_pages if l >= 14000)
below_14k = [(k,l) for k,l in course_pages if l < 14000]
print(f'\nFinal: {above_15k}/{len(course_pages)} above 15k, {above_14k}/{len(course_pages)} above 14k')
if below_14k:
    for k,l in sorted(below_14k, key=lambda x: x[1]):
        print(f'  STILL SHORT: {l} {k}')
print(f'\nEnriched {enriched} articles.')
