import json, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/anthropologie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

def replace_course_content(content, new_inner_html):
    marker_start = '<section class="content-section" id="contenu">'
    idx_section = content.find(marker_start)
    cc_open = '<div class="course-content">'
    idx_cc_open = content.find(cc_open, idx_section)
    idx_end_cc = content.find('\n      </div>\n    </section>', idx_cc_open)
    if idx_end_cc == -1:
        idx_end_cc = content.find('\n      </div>\n\n    </section>', idx_cc_open)
    new_content = (
        content[:idx_cc_open + len(cc_open)] +
        '\n' + new_inner_html + '\n      </div>\n    </section>' +
        content[idx_end_cc + len('\n      </div>\n    </section>'):]
    )
    return new_content

# ============================================================
# ethnologie/monographies
# ============================================================
monographies_content = """<h3>La monographie comme fondation de l'ethnologie</h3>
<p>La <strong>monographie ethnographique</strong> — étude approfondie et de longue durée d'une culture particulière, basée sur l'observation directe — est la forme canonique de la production ethnologique. Elle s'impose comme norme disciplinaire grâce à Bronisław Malinowski, dont le séjour de deux ans aux îles Trobriand (Mélanésie, 1915-1918) lors de la Première Guerre mondiale (il était citoyen austro-hongrois en territoire britannique et ne pouvait rentrer) produit <em>Les Argonautes du Pacifique occidental</em> (1922). Malinowski y formule les principes de l'<strong>observation participante</strong> : apprendre la langue locale, vivre dans le village, participer aux activités quotidiennes, saisir le « point de vue de l'indigène ». La monographie devient ainsi une immersion totale dans une autre forme de vie.</p>
<div class="highlight-box"><p><strong>Les kula des Trobriandais :</strong> Le kula est un système d'échanges cérémoniel impliquant des dizaines d'îles de Mélanésie. Des colliers rouges (<em>veigun</em>) et des bracelets blancs (<em>mwali</em>) circulent en sens opposés autour d'un anneau d'îles, créant des réseaux d'alliances et de prestige. Malinowski montre que ces échanges, apparemment irrationnels d'un point de vue économique occidental, remplissent des fonctions sociales, politiques et symboliques irremplaçables — révolutionnant la conception de l'économie primitive.</p></div>

<h3>Evans-Pritchard et les Nuer : politique sans État</h3>
<p>La monographie d'Edward Evans-Pritchard sur les Nuer du Soudan (<em>Les Nuer</em>, 1940) est un autre classique fondateur. Les Nuer sont des éleveurs nilotiques dont la société est fondée sur la <strong>segmentarité lignagère</strong> : l'absence d'autorité centralisée (pas de chef, pas d'État) n'implique pas l'anarchie mais un système d'opposition et de fusion des lignages qui permet de réguler les conflits. Un Nuer est en opposition avec tout membre d'un autre segment au même niveau de la hiérarchie, mais peut s'allier avec lui contre un ennemi commun d'un niveau supérieur. Cette analyse a profondément influencé l'anthropologie politique en montrant que l'État n'est pas une condition nécessaire à l'ordre social.</p>
<p>Evans-Pritchard produit aussi une monographie sur les Azandé (<em>Witchcraft, Oracles and Magic among the Azande</em>, 1937), qui montre comment la croyance à la sorcellerie forme un système logiquement cohérent qui donne sens aux malheurs quotidiens — une contribution majeure à l'anthropologie de la rationalité et de la relativité cognitive.</p>

<h3>Lévi-Strauss et le structuralisme brésilien</h3>
<p>Claude Lévi-Strauss effectue son terrain en Amazonie brésilienne entre 1935 et 1939, visitant les Bororo, Nambikwara et Tupi-Kawahib. <em>Tristes Tropiques</em> (1955) est le récit mémorable de cette expérience — à la fois journal de voyage, réflexion philosophique et critique de la civilisation occidentale. Ses monographies brésiliennes alimentent ensuite les <em>Mythologiques</em> (4 volumes, 1964-1971), monument de l'anthropologie structurale qui décode la logique des mythes amérindiens comme une langue — identifiant des structures binaires (cru/cuit, nature/culture, miel/tabac) récurrentes à travers des centaines de mythes.</p>
<p>La méthode structurale de Lévi-Strauss — inspirée de la linguistique saussurienne et de la phonologie jakobsonienne — recherche dans les données ethnographiques non des éléments isolés mais les <strong>relations entre éléments</strong> : ce qui importe dans un mythe n'est pas l'anecdote mais le système d'oppositions et de médiations qu'il met en scène. Cette approche formelle, brillante et contestée, a dominé l'anthropologie française des années 1950 aux années 1980.</p>

<h3>Margaret Mead : genre et culture en Océanie</h3>
<p>Margaret Mead (<em>Coming of Age in Samoa</em>, 1928 ; <em>Sex and Temperament in Three Primitive Societies</em>, 1935) est l'une des anthropologues les plus influentes du XX<sup>e</sup> siècle et la plus lue du grand public. Ses monographies sur la Polynésie et la Mélanésie visaient à montrer que les comportements genrés (agressivité masculine, douceur féminine) sont des constructions culturelles plutôt que des données biologiques universelles — un argument central dans le débat nature/culture. Ses travaux ont eu un impact considérable sur les mouvements féministes des années 1960-1970.</p>
<p>Ses conclusions ont été contestées par l'anthropologue Derek Freeman (<em>Margaret Mead and Samoa</em>, 1983), qui accuse Mead d'avoir été trompée par ses informatrices samoannes. Cette controverse — non entièrement résolue — illustre les débats sur la subjectivité de l'observateur et la fiabilité des données ethnographiques.</p>

<h3>Marcel Griaule et les Dogon : la controverse du savoir dogon</h3>
<p>Marcel Griaule dirige à partir de 1931 plusieurs missions ethnographiques chez les Dogon du Mali. Sa monographie <em>Dieu d'eau</em> (1948) présente le récit cosmologique dogon transmis par l'initié Ogotemmêli sur 33 jours d'entretiens — un système cosmogonique d'une richesse et d'une cohérence philosophique étonnantes. La controverse éclate quand Griaule affirme que les Dogon possèdent des connaissances astronomiques avancées sur le système de l'étoile Sirius (notamment sur Sirius B, invisible à l'œil nu), ce que Robert Temple amplifie dans <em>Le Mystère de Sirius</em> (1976). L'anthropologue Walter van Beek, qui a refait le terrain chez les Dogon en 1991, montre que ces connaissances astronomiques n'existent pas chez les Dogon actuels et seraient une projection de Griaule sur ses informateurs. Cette affaire illustre le risque de la co-construction des données entre ethnologue et informateurs.</p>

<h3>Vers une ethnologie réflexive</h3>
<p>À partir des années 1970-1980, la légitimité des monographies classiques est remise en question par la <strong>critique postcoloniale</strong> (Talal Asad, <em>Anthropology and the Colonial Encounter</em>, 1973) et le mouvement <strong>Writing Culture</strong> (Clifford et Marcus, 1986) : les monographies sont des textes écrits par des Occidentaux sur des non-Occidentaux dans un contexte de domination coloniale ; leurs prétentions à l'objectivité masquent des choix rhétoriques, des rapports de pouvoir et des présupposés culturels. Ces critiques ont conduit à des monographies plus réflexives, où l'ethnologue analyse sa propre position et ses interactions avec les enquêtés, et à la multiplication des études portant sur des sociétés occidentales et des milieux proches de l'ethnologue (autoethnographie, anthropologie du proche).</p>
<div class="highlight-box"><p><strong>Paul Rabinow, <em>Reflections on Fieldwork in Morocco</em> (1977) :</strong> Récit pionnier d'une monographie réflexive qui met en scène les relations entre l'anthropologue et ses informateurs, les malentendus, les négociations de sens, les jeux de pouvoir — montrant que le terrain est une rencontre interpersonnelle complexe, non la simple observation d'une réalité préexistante.</p></div>"""

pages['ethnologie/monographies']['content'] = replace_course_content(
    pages['ethnologie/monographies']['content'],
    monographies_content
)
print(f"ethnologie/monographies: {len(pages['ethnologie/monographies']['content'])} chars")

# ============================================================
# ethnologie/terrain
# ============================================================
terrain_content = """<h3>L'observation participante : naissance d'une méthode</h3>
<p>Avant le tournant malinowskien, l'ethnologie se pratiquait « en chambre » : des théoriciens comme Frazer (<em>Le Rameau d'or</em>), Morgan ou Tylor compilaient des données recueillies par des voyageurs, missionnaires et administrateurs coloniaux sans jamais se rendre eux-mêmes sur le terrain. Bronisław Malinowski, contraint par les circonstances à vivre deux ans aux Trobriand (1915-1918), invente par nécessité une nouvelle méthode : l'<strong>observation participante</strong>, qui exige de l'ethnologue qu'il réside dans la communauté étudiée, apprenne la langue vernaculaire, participe aux activités quotidiennes et observe ce que les gens font (et pas seulement ce qu'ils disent faire). Cette méthode — codifiée dans l'introduction des <em>Argonautes</em> (1922) — devient le standard disciplinaire.</p>
<div class="highlight-box"><p><strong>Règle d'or du terrain :</strong> Malinowski distingue trois niveaux de données : (1) l'ossature de la culture — les règles, institutions, normes observables ; (2) la chair et le sang — la vie quotidienne, les comportements réels ; (3) le corpus des impondérabilia — les attitudes, les émotions, les interactions informelles que seule la présence prolongée permet de saisir. C'est ce troisième niveau qui échappe à l'enquêteur de passage.</p></div>

<h3>Apprendre la langue : condition sine qua non</h3>
<p>La maîtrise de la <strong>langue locale</strong> est pour la majorité des ethnologues une condition indispensable d'un terrain de qualité. Elle permet d'accéder aux nuances du discours, aux termes intraduisibles qui révèlent des catégories cognitives propres à la culture, aux plaisanteries et aux sous-entendus — autant de données inaccessibles à travers un interprète. L'apprentissage d'une langue minoritaire est aussi un geste éthique et politique : il manifeste le respect pour la culture étudiée et crée une réciprocité dans la relation d'enquête. Certains terrains (langues à tradition orale, langues isolées) requièrent plusieurs mois ou années d'immersion avant de pouvoir mener des entretiens approfondis.</p>

<h3>L'entretien ethnographique : types et techniques</h3>
<p>L'entretien est l'un des outils fondamentaux de l'ethnologue. On distingue plusieurs types. L'<strong>entretien non directif</strong> (ou libre) laisse l'informateur développer librement ses propos à partir d'une consigne large ; il permet de saisir les catégories spontanées de la pensée indigène. L'<strong>entretien semi-directif</strong> suit un guide thématique souple qui garantit la couverture de tous les sujets pertinents tout en laissant de la place à la parole de l'enquêté. L'<strong>entretien directif</strong> (questionnaire) est plus rare en ethnologie mais utile pour collecter des données comparatives standardisées. Les <strong>récits de vie</strong> (life histories) placent l'individu comme point de départ pour comprendre les trajectoires personnelles en relation avec les transformations sociales — un genre initié par les travaux de Paul Radin sur les Amérindiens.</p>

<h3>Le carnet de terrain : outil et objet de réflexivité</h3>
<p>Le <strong>carnet de terrain</strong> (ou journal ethnographique) est à la fois un outil de collecte de données et un espace de réflexivité pour l'ethnologue. On y consigne les observations quotidiennes, les transcriptions d'entretiens, les hypothèses provisoires, les émotions et les réactions personnelles. Malinowski rédigeait un journal intime séparé, publié à titre posthume en 1967 (<em>Journal d'ethnographe</em>), qui révèle ses angoisses, ses préjugés et ses pulsions — déclenchant un choc dans la communauté ethnologique en montrant le fossé entre la façade scientifique des monographies et les affects privés du chercheur. Ce dévoilement a contribué à la montée de la réflexivité méthodologique.</p>
<div class="highlight-box"><p><strong>Clifford Geertz et la « description dense » :</strong> Pour Geertz (<em>The Interpretation of Cultures</em>, 1973), la tâche de l'ethnologue est la <em>thick description</em> — une description qui ne se contente pas d'enregistrer les comportements observables mais les replace dans leurs contextes de signification multiples, couche par couche. Son exemple célèbre : le clignement d'œil n'est qu'un tic musculaire si on l'observe de l'extérieur, mais c'est un signal codé, un clin d'œil complice ou une parodie de signal, selon le contexte — seul le contexte culturel permet de distinguer ces niveaux.</p></div>

<h3>Éthique de la recherche de terrain</h3>
<p>Les questions éthiques sont centrales dans le travail de terrain. Le <strong>consentement éclairé</strong> des enquêtés — leur information sur la nature et les objectifs de la recherche, et leur accord explicite — est devenu un standard dans la plupart des pays et institutions de recherche. Mais son application est complexe : dans des sociétés où le consentement individuel n'est pas la norme (décision collective, autorité du chef), qui consent ? Comment informer sans biaiser les comportements observés ? La <strong>confidentialité</strong> — protéger l'identité des informateurs — est essentielle mais peut entrer en tension avec la réplication et la vérification des données.</p>
<p>La <strong>restitution des résultats</strong> aux communautés étudiées est une obligation éthique croissante : les ethnologues sont attendus à rendre compte de leurs recherches aux personnes qui ont contribué à les produire, dans des formes accessibles (en langue locale, sous forme orale ou visuelle si nécessaire). La question de qui possède les données ethnographiques — le chercheur, l'institution, la communauté étudiée — est au cœur des discussions contemporaines sur la décolonisation de la recherche.</p>

<h3>Méthodes numériques et ethnographie en ligne</h3>
<p>Internet et les réseaux sociaux ont créé de nouveaux terrains d'enquête. L'<strong>ethnographie en ligne</strong> (ou netnographie, terme de Robert Kozinets, 1998) étudie les communautés et pratiques qui se forment dans les espaces numériques : forums, serveurs Discord, groupes Facebook, jeux en ligne massivement multijoueurs, subcultures Reddit. Elle emprunte aux méthodes ethnographiques classiques (immersion prolongée, observation des interactions, entretiens) tout en soulevant des questions spécifiques : où est la frontière entre espace public et espace privé en ligne ? Peut-on parler de « présence » sans contact physique ? L'anonymat des participants change-t-il la nature des données ? Ces questions méthodologiques sont activement débattues dans les sciences sociales contemporaines.</p>"""

pages['ethnologie/terrain']['content'] = replace_course_content(
    pages['ethnologie/terrain']['content'],
    terrain_content
)
print(f"ethnologie/terrain: {len(pages['ethnologie/terrain']['content'])} chars")

# ============================================================
# ethnologie/urbaine
# ============================================================
urbaine_content = """<h3>Naissance de l'ethnologie urbaine : l'École de Chicago</h3>
<p>L'application des méthodes ethnographiques au monde urbain se développe d'abord aux États-Unis au sein de l'<strong>École de Chicago</strong>, qui domine la sociologie américaine dans les années 1920-1940. Robert Park, ancien journaliste devenu sociologue, propose de traiter la ville comme un « laboratoire social » et d'y appliquer les méthodes de l'ethnologie — observation directe, entretiens, immersion dans les milieux étudiés. William Foote Whyte publie en 1943 <em>Street Corner Society</em>, étude ethnographique d'un quartier italo-américain de Boston basée sur trois ans d'immersion, et considérée comme un classique fondateur de l'ethnologie urbaine. Nels Anderson étudie les <em>hobos</em> (travailleurs migrants itinérants de Chicago) ; Louis Wirth théorise les effets de la densité et de l'hétérogénéité sur les modes de vie urbains dans « Urbanism as a Way of Life » (1938).</p>
<div class="highlight-box"><p><strong>L'écologie urbaine de Park :</strong> Park et ses collègues appliquent à la ville un modèle inspiré de l'écologie biologique : les différents groupes sociaux (immigrants, classes, professionnels) occupent des « niches » urbaines spécifiques, se déplacent et se succèdent dans l'espace selon des processus de compétition, de succession et de ségrégation. Ce modèle est critiqué pour son naturalisme, mais a structuré la sociologie urbaine pendant des décennies.</p></div>

<h3>Ethnologie urbaine en France : la découverte du proche</h3>
<p>En France, l'ethnologie urbaine émerge plus tard, dans les années 1960-1970, souvent contre la tradition académique qui réservait l'ethnologie aux sociétés « exotiques ». Georges Balandier et ses élèves (Gérard Althabe, Michel Agier) appliquent les méthodes ethnographiques aux banlieues et aux cités de la périphérie parisienne. Marc Augé développe la notion d'<strong>ethno-sociologie</strong> pour étudier les sociétés contemporaines. Colette Pétonnet publie <em>On est tous dans le brouillard</em> (1979), ethnographie d'une cité de transit de la région parisienne, où elle montre comment les habitants construisent des repères identitaires et sociaux dans un espace conçu pour n'être que temporaire.</p>
<p>La querelle de l'<strong>anthropologie de l'autre proche</strong> traverse toute la discipline : peut-on (doit-on) étudier sa propre société avec les mêmes méthodes que celles développées pour des sociétés lointaines ? Les arguments pour sont la réflexivité, la lutte contre l'ethnocentrisme, la démocratisation de l'anthropologie. Les arguments contre pointent la perte de distance critique, les risques de projection et l'impossibilité du statut d'étranger — condition souvent considérée comme nécessaire à l'étonnement ethnographique.</p>

<h3>Quartiers, communautés et identités urbaines</h3>
<p>L'ethnologie urbaine s'intéresse aux modes de sociabilité qui se construisent dans les espaces de la ville contemporaine : les <strong>quartiers populaires</strong> (avec leurs réseaux d'entraide, leurs formes d'économie informelle et leurs cultures spécifiques), les <strong>communautés religieuses</strong> (paroisses, mosquées, synagogues comme espaces de socialisation), les <strong>milieux professionnels</strong> (restaurants, marchés, usines), et les <strong>sous-cultures urbaines</strong> (skateurs, tags, hip-hop, punks). Loïc Wacquant, formé à la fois à la sociologie bourdieusienne et à l'ethnologie américaine, a réalisé une ethnographie comparée des ghettos noirs américains et des banlieues françaises (<em>Parias urbains</em>, 2006), montrant comment la ségrégation spatiale reproduit et approfondit les inégalités sociales.</p>

<h3>Les non-lieux et la ville globale</h3>
<p>Marc Augé propose en 1992 (<em>Non-Lieux. Introduction à une anthropologie de la surmodernité</em>) la notion de <strong>non-lieu</strong> pour désigner des espaces définis par le transit, la consommation et la communication — aéroports, autoroutes, grandes surfaces, hôtels de chaîne — qui s'opposent aux « lieux anthropologiques » chargés d'histoire, de relations et d'identité. Cette distinction, très influente, a aussi été critiquée : les non-lieux peuvent devenir des lieux pour certains groupes (les employés d'un aéroport, les sans-abri d'une gare), et l'opposition lieu/non-lieu est peut-être trop rigide pour saisir la complexité des pratiques spatiales.</p>
<div class="highlight-box"><p><strong>La ville globale :</strong> La sociologue Saskia Sassen (<em>The Global City</em>, 1991) montre comment un petit nombre de métropoles (New York, Londres, Tokyo, puis Hong Kong, Singapour) concentrent les fonctions de commandement de l'économie mondiale et forment un réseau transnational dépassant les frontières nationales. Cette concentration crée une polarisation sociale extrême au sein de ces villes : une classe créative mondialisée et des services de bas salaires massivement assurés par des migrants.</p></div>

<h3>Ethnologie des marges urbaines : bidonvilles et camps</h3>
<p>Les espaces de la précarité urbaine — bidonvilles, favelas, shanty towns, camps de réfugiés — représentent un objet central pour l'ethnologie urbaine contemporaine. Ces espaces, souvent stigmatisés comme désorganisés et « sans culture », sont au contraire des milieux sociaux intenses où se construisent des solidarités, des économies informelles sophistiquées et des identités résistantes. Mike Davis (<em>Planet of Slums</em>, 2006) estime qu'un milliard de personnes vivent dans des bidonvilles et que ce chiffre devrait doubler d'ici 2030. Michel Agier (<em>Gérer les indésirables</em>, 2008 ; <em>Le Couloir des exilés</em>, 2011) a réalisé une ethnographie des camps de réfugiés, montrant comment ces espaces « d'exception » se pérennisent et deviennent de nouvelles formes de vie urbaine permanente — remettant en question la catégorie même de « camp temporaire ».</p>

<h3>Ethnologie urbaine et politiques de la ville</h3>
<p>Les recherches ethnologiques sur la ville ont des implications pratiques pour les politiques urbaines et sociales. Des études ethnographiques ont influencé les politiques de rénovation urbaine en montrant que la destruction des quartiers populaires (opérations Haussmann, rénovations des années 1960-1970) détruisait aussi les réseaux sociaux d'entraide qui y existaient — à l'encontre des intentions déclarées de leurs concepteurs. L'ethnologie participe aujourd'hui à des démarches de <strong>participation habitante</strong> : faire entendre la voix des résidents dans les processus de planification urbaine, documenter les usages informels de l'espace, identifier les ressources sociales invisibles dans les cartographies officielles. Elle contribue ainsi à une critique des approches technocratiques de la ville et à la promotion de politiques plus attentives aux pratiques et aux savoirs des habitants.</p>"""

pages['ethnologie/urbaine']['content'] = replace_course_content(
    pages['ethnologie/urbaine']['content'],
    urbaine_content
)
print(f"ethnologie/urbaine: {len(pages['ethnologie/urbaine']['content'])} chars")

# Save
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/anthropologie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved batch 3")
