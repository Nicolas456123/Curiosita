#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichissement des articles de géographie sous 15000 chars."""

import json
import re

with open('assets/content/geographie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# =============================================================================
# CONTENUS ENRICHIS
# =============================================================================

enrichments = {}

# ----- physique/tectonique -----
enrichments['physique/tectonique'] = '''<div class="course-content">
<h3>La révolution de la tectonique des plaques</h3>
<p class="resume-text">La tectonique des plaques est l'une des théories scientifiques les plus révolutionnaires du XX<sup>e</sup> siècle. Elle unifie en un cadre cohérent la géologie, la sismologie, le volcanisme et la morphologie des fonds océaniques. Formulée définitivement dans les années 1960, elle repose sur l'idée que la lithosphère terrestre — la couche rigide externe formée de la croûte et du manteau supérieur — est découpée en une douzaine de plaques majeures en mouvement perpétuel sur l'asthénosphère ductile.</p>

<div class="highlight-box">
<p><strong>Deux grandes forces :</strong> La lithosphère est divisée en plaques rigides qui se déplacent à des vitesses de 1 à 15 cm par an — à peu près la vitesse de croissance des ongles. À l'échelle des temps géologiques, ces déplacements infimes façonnent des océans, des chaînes de montagnes et des continents entiers.</p>
</div>

<h3>De la dérive des continents à la tectonique globale</h3>
<p>L'histoire de cette théorie commence avec Alfred Wegener, météorologue et géophysicien allemand, qui publie en 1912 <em>L'Origine des continents et des océans</em>. Wegener remarque la complémentarité des côtes atlantiques, les similitudes entre les fossiles d'Afrique et d'Amérique du Sud (comme le reptile <em>Mesosaurus</em>), ainsi que la présence de charbon tropical en Antarctique. Il en conclut que tous les continents formaient jadis un supercontinent unique qu'il nomme la <strong>Pangée</strong>.</p>
<p>Son hypothèse est rejetée par la communauté scientifique, faute d'un mécanisme crédible pour expliquer comment des continents pourraient « plougher » à travers les océans. Il faudra attendre les années 1950–1960 pour que la cartographie des fonds marins, notamment par Harry Hess et Robert Dietz, révèle l'expansion des dorsales océaniques. L'étude des anomalies magnétiques symétriques de part et d'autre des dorsales, par Vine et Matthews en 1963, apporte la preuve définitive de l'expansion des fonds océaniques.</p>

<div class="highlight-box">
<p><strong>La Pangée :</strong> Il y a environ 250 millions d'années, tous les continents étaient réunis en un supercontinent unique. Sa dislocation progressive a conduit à la formation de l'Atlantique, de l'océan Indien, et au rapprochement de l'Afrique vers l'Europe, donnant naissance aux Alpes.</p>
</div>

<h3>Structure interne de la Terre et moteur de la tectonique</h3>
<p>La Terre est structurée en couches concentriques : la croûte (0–35 km), le manteau supérieur et inférieur (35–2 900 km), le noyau externe liquide (2 900–5 100 km) et le noyau interne solide (5 100–6 371 km). La chaleur interne de la planète — d'origine radioactive et primordiale — génère dans le manteau des courants de convection : les matériaux chauds montent sous les dorsales, se refroidissent et redescendent au niveau des zones de subduction. Ces cellules de convection constituent le principal moteur du mouvement des plaques.</p>
<p>Les dorsales océaniques sont des chaînes de montagnes sous-marines s'étendant sur 60 000 km au total. La dorsale médio-atlantique sépare la plaque eurasienne de la plaque nord-américaine à environ 2,5 cm par an. En son centre, des failles transformantes perpendiculaires découpent la dorsale en segments.</p>

<h3>Les trois types de frontières de plaques</h3>
<p>Le comportement des plaques à leurs frontières dépend de leur nature (océanique ou continentale) et du sens de leur mouvement relatif :</p>
<p><strong>1. Frontières divergentes (écartement) :</strong> Deux plaques s'écartent l'une de l'autre. En domaine océanique, cela crée une dorsale et de la nouvelle croûte basaltique. En domaine continental, cela forme un rift (comme le Grand Rift africain, qui pourrait donner naissance à un nouvel océan dans des millions d'années). L'Islande est un exemple unique : une dorsale émergée, entièrement accessible en surface.</p>
<p><strong>2. Frontières convergentes (rapprochement) :</strong> Deux plaques se rapprochent. Lorsqu'une plaque océanique rencontre une plaque continentale, la plaque océanique plus dense plonge sous la continentale : c'est la <strong>subduction</strong>. Elle génère des fosses océaniques (fosse des Mariannes, 11 034 m) et des chaînes volcaniques (Andes, arc des Cascades). Lorsque deux plaques continentales se percutent, la collision produit des chaînes de montagnes plissées comme l'Himalaya.</p>
<p><strong>3. Frontières transformantes (coulissement latéral) :</strong> Deux plaques glissent horizontalement l'une contre l'autre sans créer ni détruire de croûte. La faille de San Andreas en Californie est l'exemple le plus célèbre : elle sépare la plaque nord-américaine de la plaque Pacifique sur 1 300 km.</p>

<div class="highlight-box">
<p><strong>L'Himalaya en chiffres :</strong> Le massif himalayen s'élève encore d'environ 5 mm par an. L'Everest, culminant à 8 849 m, est formé de roches sédimentaires marines — preuve que ces couches se trouvaient jadis au fond de l'océan Téthys.</p>
</div>

<h3>Volcanisme et tectonique des plaques</h3>
<p>La majorité des volcans du monde se situent aux frontières de plaques. La <strong>ceinture de feu du Pacifique</strong> concentre 75 % du volcanisme terrestre et 90 % des séismes. Elle correspond essentiellement aux zones de subduction où la plaque Pacifique plonge sous les plaques continentales environnantes.</p>
<p>Cependant, certains volcans se trouvent au milieu des plaques : les <strong>points chauds</strong>. Ces panaches mantelliques fixes percent la plaque qui se déplace au-dessus d'eux, créant des chapelets d'îles volcaniques. Les îles Hawaï en sont l'exemple classique : les îles les plus récentes sont à l'est (le Big Island est toujours actif), tandis que les îles plus anciennes et érodées se trouvent à l'ouest-nord-ouest.</p>

<h3>Séismes et tsunamis</h3>
<p>Les tremblements de terre résultent de la libération brutale d'énergie élastique accumulée lors du blocage des frontières de plaques. Cette énergie est mesurée par l'échelle de magnitude de moment (M<sub>w</sub>). Le séisme de Valdivia en 1960 (M 9,5) reste le plus puissant jamais enregistré.</p>
<p>Les séismes de subduction peuvent déclencher des <strong>tsunamis</strong>. Le séisme de Sumatra du 26 décembre 2004 (M 9,1–9,3) a provoqué un tsunami meurtrier dans tout l'océan Indien, causant plus de 230 000 morts. Le séisme de Tōhoku (2011, M 9,1) a frappé le Japon, déclenchant un tsunami à l'origine de la catastrophe de Fukushima.</p>

<div class="highlight-box">
<p><strong>Ondes sismiques :</strong> Les ondes P (compression, 6–8 km/s dans la croûte) sont les plus rapides. Les ondes S (cisaillement) ne se propagent pas dans les liquides — ce qui a permis de découvrir que le noyau externe est liquide. Les ondes de surface (Rayleigh, Love) sont les plus destructrices.</p>
</div>

<h3>Reconstitutions paléogéographiques</h3>
<p>Grâce aux mesures GPS, aux datations radiométriques et aux anomalies magnétiques des fonds marins, les géophysiciens reconstituent la position des continents à différentes époques :</p>
<ul>
<li><strong>Il y a 600 Ma :</strong> Existence du supercontinent Rodinia, dont la dislocation initie le cycle de Wilson.</li>
<li><strong>Il y a 300 Ma :</strong> Formation de la Pangée, avec la Laurasie au nord et le Gondwana au sud.</li>
<li><strong>Il y a 200 Ma :</strong> Ouverture de la Téthys et début de la fragmentation de la Pangée.</li>
<li><strong>Il y a 65 Ma :</strong> L'Atlantique Sud est bien ouvert ; l'Inde fonce vers l'Asie.</li>
<li><strong>Dans 50 millions d'années :</strong> L'Afrique aura percuté l'Europe, fermant partiellement la Méditerranée.</li>
</ul>

<h3>Applications pratiques et enjeux contemporains</h3>
<p>La tectonique des plaques a des implications directes sur la vie humaine. La prévision sismique reste l'un des grands défis scientifiques : si l'on peut cartographier les zones à risque, il est impossible de prédire précisément la date d'un séisme. Les systèmes d'alerte précoce aux tsunamis permettent néanmoins de sauver des vies après un séisme sous-marin.</p>
<p>La prospection des ressources naturelles (pétrole, gaz, minerais) utilise massivement les connaissances tectoniques. Les grandes concentrations de pétrole dans le golfe Persique résultent de l'histoire tectonique de la Téthys. Les gisements de cuivre dans les Andes sont liés au magmatisme de subduction.</p>

<div class="highlight-box">
<p><strong>Changement climatique et tectonique :</strong> À long terme, la tectonique influence le climat global. La formation de l'Himalaya a altéré la circulation atmosphérique et intensifié les moussons asiatiques. La fermeture de l'isthme de Panama (il y a 3,5 Ma) a modifié les courants océaniques et aurait contribué aux glaciations du Quaternaire.</p>
</div>
</div>'''

# ----- physique/climatologie -----
enrichments['physique/climatologie'] = '''<div class="course-content">
<h3>La climatologie : science du système atmosphérique terrestre</h3>
<p class="resume-text">La climatologie étudie les conditions atmosphériques moyennes d'une région sur une longue période — par convention au moins 30 ans. Elle se distingue de la météorologie, qui analyse les états instantanés de l'atmosphère. La climatologie cherche à comprendre les mécanismes qui régissent la distribution spatiale et temporelle des précipitations, des températures, des vents et de l'humidité à la surface terrestre.</p>

<div class="highlight-box">
<p><strong>Définition clé :</strong> Le climat est l'état moyen de l'atmosphère sur une longue période ; la météo en est la variabilité quotidienne. Un été chaud ou un hiver froid exceptionnels n'infirment pas les tendances climatiques : c'est l'évolution sur plusieurs décennies qui révèle la dynamique du climat.</p>
</div>

<h3>Facteurs déterminants du climat</h3>
<p>La distribution des climats à la surface de la Terre résulte de l'interaction de plusieurs facteurs fondamentaux :</p>
<p><strong>La latitude</strong> est le facteur premier. L'angle d'incidence des rayons solaires varie avec la latitude : il est maximal à l'équateur (rayons perpendiculaires) et minimal aux pôles (rayons rasants). Les zones intertropicales reçoivent 2 à 3 fois plus d'énergie solaire par unité de surface que les régions polaires.</p>
<p><strong>L'altitude</strong> modifie le gradient thermique : la température diminue d'environ 6,5 °C par 1 000 m dans l'atmosphère libre. Les montagnes créent des zones climatiques en altitude qui ne correspondent pas à leur latitude — les Alpes abritent un climat similaire à celui des régions arctiques à leurs sommets.</p>
<p><strong>La continentalité</strong> oppose les zones côtières aux zones intérieures. L'eau de mer a une capacité thermique élevée : elle se réchauffe et se refroidit lentement, tamisant les températures des régions côtières. Les grandes plaines intérieures (Sibérie, Great Plains nord-américaines) connaissent des amplitudes thermiques annuelles extrêmes.</p>
<p><strong>Les courants marins</strong> redistribuent la chaleur à l'échelle planétaire. Le Gulf Stream réchauffe les côtes nord-atlantiques européennes : Bergen (Norvège, 60° N) a un hiver plus doux que Québec (Canada, 47° N). Le courant de Humboldt, froid, longe les côtes du Pérou et du Chili, créant un désert côtier (Atacama) sous des latitudes tropicales.</p>

<h3>La circulation atmosphérique générale</h3>
<p>L'énergie solaire inégalement distribuée met en mouvement l'atmosphère selon un schéma global complexe. On distingue trois cellules de circulation par hémisphère :</p>
<p>La <strong>cellule de Hadley</strong> (0–30°) est la plus puissante. L'air chaud et humide monte à l'équateur (zone de convergence intertropicale, ZCIT), se dirige vers les tropiques en altitude, se refroidit et descend vers 30° de latitude. Cette descente crée des anticyclones subtropicaux qui génèrent les grands déserts tropicaux (Sahara, Arabie, Australie). Au sol, les <strong>alizés</strong> soufflent vers l'équateur.</p>
<p>La <strong>cellule de Ferrel</strong> (30–60°) est indirecte. Les vents d'ouest de la zone tempérée résultent du gradient entre les anticyclones subtropicaux et les dépressions subpolaires. La façade ouest des continents aux latitudes tempérées (Europe occidentale, Colombie-Britannique, Chili méridional) est plus humide et douce.</p>
<p>La <strong>cellule polaire</strong> (60–90°) voit l'air froid descendre aux pôles et s'écouler vers les latitudes moyennes. L'oscillation arctique et le vortex polaire influencent considérablement les hivers en Europe et en Amérique du Nord.</p>

<div class="highlight-box">
<p><strong>La ZCIT :</strong> La Zone de Convergence Intertropicale migre saisonnièrement de part et d'autre de l'équateur, suivant le déplacement du soleil au zénith. C'est ce déplacement qui détermine les saisons des pluies en Afrique subsaharienne, dans les Caraïbes et en Asie du Sud-Est.</p>
</div>

<h3>Les grandes zones climatiques mondiales</h3>
<p>La classification de Köppen (1884, révisée par Geiger) reste la référence. Elle distingue cinq groupes principaux :</p>
<ul>
<li><strong>A — Tropicaux :</strong> Température du mois le plus froid &gt; 18 °C. Comprend les sous-types équatorial (Af), mousson (Am), savane (Aw). Représente environ 20 % des terres émergées.</li>
<li><strong>B — Arides et semi-arides :</strong> Précipitations insuffisantes pour compenser l'évapotranspiration. Déserts (BW) et steppes (BS). La plus grande catégorie : environ 30 % des terres émergées.</li>
<li><strong>C — Tempérés chauds :</strong> Mois le plus froid entre 0 et 18 °C. Comprend le Méditerranéen (Cs), l'océanique (Cf), le subtropical humide (Cfa). Europe occidentale, Californie, Chili central.</li>
<li><strong>D — Continentaux :</strong> Mois le plus froid &lt; −3 °C. Hivers rigoureux, étés chauds. Russie, Canada, nord des États-Unis.</li>
<li><strong>E — Polaires :</strong> Toundra (ET) et glace permanente (EF). Arctique, Antarctique, Groenland.</li>
</ul>

<h3>Les moussons : des vents saisonniers continentaux</h3>
<p>Les moussons résultent du contraste thermique saisonnier entre les continents et les océans. En été, les continents se réchauffent plus vite que les océans, créant une dépression thermique qui aspire l'air humide marin : c'est la mousson d'été, porteuse de pluies abondantes.</p>
<p>La mousson d'Asie du Sud est la plus puissante. La mousson d'été (juin–septembre) apporte des pluies vitales à l'Inde, au Bangladesh, au Pakistan. Mumbai reçoit en juin–juillet environ 700 mm de pluie par mois, soit plus que la totalité des précipitations annuelles de Paris. Ces pluies alimentent les récoltes de riz et de blé pour des milliards de personnes.</p>
<p>En hiver, le phénomène s'inverse : le continent asiatique refroidit rapidement, créant un anticyclone sibérien qui expulse l'air sec. La mousson d'hiver apporte un temps sec et frais en Asie du Sud, mais peut apporter des pluies au Vietnam et en Inde du Sud.</p>

<div class="highlight-box">
<p><strong>El Niño – La Niña :</strong> L'ENSO (El Niño Southern Oscillation) est le phénomène climatique interannuel le plus influent. Lors d'un épisode El Niño, les alizés s'affaiblissent, les eaux chaudes reviennent vers l'Amérique du Sud, provoquant des sécheresses en Australie et en Asie du Sud-Est, et des pluies excessives en Équateur et au Pérou. La Niña correspond à l'effet inverse.</p>
</div>

<h3>Climatologie historique et changement climatique</h3>
<p>Les paléoclimatologues reconstituent les climats passés grâce à des archives naturelles : carottes de glace polaires (jusqu'à 800 000 ans de données), cernes d'arbres (dendroclimatologie), coraux, sédiments lacustres et marins. Ces archives montrent que le climat terrestre a toujours varié, mais que la vitesse actuelle de réchauffement est sans précédent dans les derniers millions d'années.</p>
<p>Le réchauffement climatique anthropique est mesuré par de multiples indicateurs : hausse des températures moyennes (+ 1,1 °C depuis l'ère préindustrielle), montée du niveau des mers (20 cm depuis 1900), réduction de la banquise arctique (perte de 13 % par décennie depuis 1979), intensification des événements extrêmes. Les modèles climatiques du GIEC prévoient une hausse entre 1,5 et 4,5 °C d'ici 2100 selon les scénarios d'émissions.</p>

<h3>Phénomènes météorologiques extrêmes</h3>
<p>Les cyclones tropicaux (ouragans en Atlantique, typhons dans le Pacifique ouest) se forment sur des eaux dont la température dépasse 26 °C et peuvent atteindre des vitesses de vents supérieures à 300 km/h. Les tornades de la Tornado Alley américaine résultent de la rencontre d'air chaud humide du golfe du Mexique et d'air froid et sec des Rocheuses. Les vagues de chaleur comme celles de l'été 2003 en Europe (70 000 morts) illustrent les conséquences mortelles des extrêmes climatiques.</p>

<div class="highlight-box">
<p><strong>Le dôme de chaleur de 2021 :</strong> En juin 2021, un dôme de chaleur sans précédent a frappé le nord-ouest pacifique nord-américain, portant les températures à 49,6 °C à Lytton (Canada), qui n'avait jamais dépassé 38 °C. Ce phénomène, lié à un blocage de la circulation atmosphérique, illustre les événements climatiques hors normes amplifiés par le réchauffement global.</p>
</div>
</div>'''

# ----- physique/geomorphologie -----
enrichments['physique/geomorphologie'] = '''<div class="course-content">
<h3>La géomorphologie : science des formes du relief terrestre</h3>
<p class="resume-text">La géomorphologie étudie les formes du relief terrestre, leur origine, leur évolution et les processus qui les façonnent. Elle se situe à l'intersection de la géologie, de la climatologie et de la géographie physique. Son objet est la surface même de la planète : montagnes, plaines, vallées, littoraux, plateaux, dépressions — toutes ces formes racontent une histoire géologique et climatique.</p>

<div class="highlight-box">
<p><strong>Deux grandes forces en tension :</strong> Les reliefs terrestres résultent d'une lutte permanente entre la tectonique (forces endogènes qui soulèvent et déforment la croûte) et l'érosion (forces exogènes — eau, vent, glace, gravité — qui abaissent et aplanissent les reliefs). Le profil d'un paysage exprime l'équilibre momentané de ces forces opposées.</p>
</div>

<h3>Les grands types de reliefs et leurs origines</h3>
<p>Les <strong>chaînes de montagnes</strong> se forment par collision de plaques tectoniques (montagnes de plissement comme l'Himalaya, les Andes, les Alpes) ou par soulèvement crustal. L'âge d'une chaîne se lit dans son relief : l'Himalaya, jeune (&lt; 50 Ma), culmine à 8 849 m avec des versants abrupts. Les Appalaches, beaucoup plus anciennes (~300 Ma), ont été progressivement érodées et ne dépassent plus 2 000 m avec des formes arrondies.</p>
<p>Les <strong>plaines et les plateaux</strong> correspondent généralement à des zones stables de boucliers continentaux anciens (bouclier canadien, bouclier africain), ou à des bassins sédimentaires remblayés par des alluvions. Les grandes plaines agricoles du monde (Grandes Plaines nord-américaines, plaines de l'Europe orientale, plaines indo-gangétiques) sont d'anciens fonds marins ou lacustres remontés et comblés.</p>

<h3>L'érosion fluviale : le sculpteur principal</h3>
<p>L'eau courante est l'agent d'érosion dominant à la surface de la Terre. Un fleuve transporte des matériaux de trois façons :</p>
<ul>
<li><strong>En suspension :</strong> Les argiles et limons fins sont emportés dans l'eau trouble. Le fleuve Jaune (Huang He) doit son nom à l'immense quantité de limons qu'il transporte depuis le plateau de Lœss.</li>
<li><strong>Par saltation :</strong> Les grains de sable sautent et rebondissent sur le fond.</li>
<li><strong>Par traction :</strong> Les galets et blocs roulent sur le fond lors des crues.</li>
</ul>
<p>La puissance érosive d'un cours d'eau dépend de sa pente, de son débit et de la résistance des roches. Lorsque la vitesse diminue (à l'embouchure, dans une plaine), les matériaux se déposent, formant des deltas (Nil, Amazone, Mississippi) ou des cônes alluviaux.</p>

<div class="highlight-box">
<p><strong>Les méandres :</strong> Dans les plaines alluviales, les rivières sinuent en méandres. L'érosion latérale creuse la rive externe des courbes (berge concave), tandis que des alluvions se déposent sur la rive interne (berge convexe). Progressivement, les méandres s'amplifient jusqu'au recoupement, créant un lac en croissant (bras mort). Le bassin amazonien est semé de milliers de ces lacs.</p>
</div>

<h3>Géomorphologie glaciaire : l'empreinte des glaces</h3>
<p>Lors des périodes glaciaires (la dernière ayant culminé il y a 20 000 ans), les glaciers recouvraient 30 % des terres émergées. Ils ont laissé une empreinte considérable sur le relief de l'hémisphère nord.</p>
<p>Les <strong>glaciers de montagne</strong> creusent des vallées en U (à fond plat) par opposition aux vallées en V fluviales. Ils sculptent des cirques (cuvettes semi-circulaires à l'amont), des arêtes (crêtes rocheuses effilées séparant deux cirques), des cols glaciaires. Les fjords norvégiens, islandais et néo-zélandais sont d'anciennes vallées glaciaires envahies par la mer.</p>
<p>Les <strong>calottes glaciaires continentales</strong> (inlandsis) ont recouvert l'Europe du Nord jusqu'en Allemagne et les Pays-Bas. En fondant, elles ont laissé des lacs morainiques, des eskers (cordons sinueux de sable et graviers), des kettles (cuvettes). Le paysage des pays nordiques, de la Finlande et du Canada est dominé par ces formes glaciaires.</p>

<h3>Géomorphologie éolienne : le vent et le sable</h3>
<p>Dans les déserts chauds et froids, le vent est le principal agent d'érosion et de dépôt. La déflation enlève les particules fines, laissant un pavage de cailloux (reg, hamada). Les particules transportées usent les roches par abrasion, créant des formes caractéristiques (champignons rocheux, yardangs).</p>
<p>Les <strong>dunes</strong> sont les formes de dépôt éolien les plus spectaculaires. L'erg saharien couvre 25 % du Sahara. Les dunes se déplacent selon le vent dominant (1 à 30 m par an pour les dunes barchanes). Le lœss est un dépôt éolien de limons fins qui couvre de vastes régions (Chine du Nord, midwest américain, Europe centrale) et forme des sols agricoles très fertiles.</p>

<div class="highlight-box">
<p><strong>Désertification :</strong> La désertification est la dégradation des terres en zones arides sous l'effet conjoint de la sécheresse et des activités humaines (surpâturage, déboisement, agriculture intensive). Environ 25 % des terres émergées sont menacées. Le Sahel, entre désert saharien et savane soudanienne, est particulièrement vulnérable.</p>
</div>

<h3>Géomorphologie littorale : la dynamique des côtes</h3>
<p>Les côtes sont des zones de contact dynamiques entre continent et océan. Les facteurs qui les façonnent sont multiples : houle, courants marins, marées, variations du niveau marin, nature des roches, apports fluviaux.</p>
<p>Les <strong>côtes rocheuses</strong> (falaises, calanques, rias, fjords) résultent de l'érosion de roches dures par la houle. Les grottes, arches naturelles et piles rocheuses (stacks) sont des stades successifs de l'érosion marine d'une falaise.</p>
<p>Les <strong>côtes sableuses</strong> (plages, dunes côtières, cordons littoraux, lagunes) résultent de l'accumulation de matériaux transportés par la dérive littorale. La montée du niveau des mers liée au réchauffement climatique (+ 3,3 mm/an actuellement) menace les côtes basses du monde entier : deltas du Bengale, de la Mékong, du Nil, îles coralliennes du Pacifique, Pays-Bas, Bangladesh.</p>

<h3>Les grands ensembles morphologiques mondiaux</h3>
<p>À l'échelle planétaire, la distribution des reliefs reflète l'histoire tectonique :</p>
<ul>
<li><strong>Les boucliers précambriens</strong> (Canadien, Fenno-Scandinave, Africain, Brésilien, Australien) sont les socles anciens et stables, érodés à des altitudes modestes.</li>
<li><strong>Les grandes plaines sédimentaires</strong> (Amazonie, Sibérie occidentale, Grandes Plaines nord-américaines, Europe du Nord) sont des bassins remblayés par des sédiments.</li>
<li><strong>Les ceintures de plissement récentes</strong> (Cordillère des Andes, Himalaya-Tibet, Alpes-Pyrénées-Caucase) forment les reliefs les plus élevés et les plus jeunes.</li>
<li><strong>Les dorsales océaniques et les fosses</strong> constituent le relief sous-marin, aussi varié que le relief continental.</li>
</ul>
</div>'''

# ----- physique/hydrologie -----
enrichments['physique/hydrologie'] = '''<div class="course-content">
<h3>L'hydrologie : science des eaux continentales</h3>
<p class="resume-text">L'hydrologie étudie la distribution, la circulation et les propriétés de l'eau à la surface de la Terre et dans l'atmosphère. Elle couvre les rivières et fleuves, les lacs, les glaciers, les eaux souterraines et les zones humides. L'hydrologie fait partie du cycle de l'eau — processus fondamental qui redistribue l'eau entre océans, atmosphère, surfaces continentales et sous-sol.</p>

<div class="highlight-box">
<p><strong>Le cycle de l'eau :</strong> Chaque année, les océans évaporent environ 502 000 km³ d'eau. L'atmosphère en précipite 458 000 km³ sur les océans et 119 000 km³ sur les terres émergées. Environ 74 000 km³ s'écoulent vers les océans via les fleuves. Ce cycle ininterrompu distribue l'énergie solaire et régule les températures planétaires.</p>
</div>

<h3>Le bassin versant : unité fondamentale de l'hydrologie</h3>
<p>Le <strong>bassin versant</strong> (ou bassin hydrographique) est l'unité spatiale de base de l'hydrologie. Il comprend l'ensemble de la superficie drainée par un cours d'eau et ses affluents, délimitée par une ligne de partage des eaux (ligne de crête). Toute précipitation tombant dans ce bassin rejoindra théoriquement l'exutoire du bassin.</p>
<p>Les grands bassins fluviaux structurent les espaces économiques et politiques des continents. L'Amazone draine 7 millions de km² (soit 13 fois la France), le Congo 3,7 millions de km², le Mississippi-Missouri 3,2 millions de km². À l'intérieur d'un bassin, on distingue la zone de production (amont, érosion dominante), la zone de transfert (cours moyen) et la zone d'accumulation (aval, dépôt alluvial, deltas).</p>

<h3>Le régime fluvial : variations temporelles des débits</h3>
<p>Le <strong>régime fluvial</strong> décrit les variations saisonnières du débit d'un cours d'eau. Il reflète directement le type de précipitations et de stockage dans le bassin :</p>
<ul>
<li><strong>Régime pluvial équatorial :</strong> Deux maxima de débits liés aux deux saisons des pluies. Exemple : le Congo, dont le débit est remarquablement régulier (débit moyen 41 000 m³/s, 2<sup>e</sup> mondial).</li>
<li><strong>Régime pluvial tropical :</strong> Un maximum de hautes eaux en saison des pluies, un étiage en saison sèche. Le Niger, le Sénégal.</li>
<li><strong>Régime nival :</strong> Maximum printanier lié à la fonte des neiges. Les fleuves de Sibérie (Ob, Ienisseï, Lena) ont des crues printanières colossales.</li>
<li><strong>Régime glaciaire :</strong> Maximum estival lié à la fonte des glaciers. Le Rhône supérieur, l'Indus.</li>
<li><strong>Régime pluvio-nival :</strong> Deux maxima, printanier (neige) et automnal (pluies). La Seine, la Loire, le Rhin.</li>
</ul>

<div class="highlight-box">
<p><strong>L'étiage et les crues :</strong> L'étiage est la période de débit minimal. Les crues résultent de précipitations intenses ou de fontes de neige rapides. La crue centennale (une chance sur cent par an) est la référence en aménagement du territoire. En France, la crue centennale de la Seine menacerait directement des millions de Parisiens et des infrastructures critiques.</p>
</div>

<h3>Les eaux souterraines : un patrimoine invisible</h3>
<p>Les eaux souterraines représentent environ 30 % de l'eau douce mondiale (hors glaces), contre seulement 0,3 % pour les eaux de surface. Elles constituent une ressource stratégique pour l'alimentation en eau potable (environ 50 % de l'eau potable mondiale) et l'irrigation agricole.</p>
<p>Une <strong>nappe phréatique</strong> est une nappe libre, proche de la surface, alimentée directement par les précipitations à travers les sols perméables. Les nappes artésiennes sont des nappes captives, sous pression, entre deux couches imperméables. Le Grand Bassin Artésien australien est l'un des plus grands aquifères confinés au monde (1,7 million de km²).</p>
<p>L'aquifère du Sahara Septentrional contient des eaux fossiles — précipitations tombées il y a 10 000 à 30 000 ans, lors d'un Sahara verdoyant. Ces eaux non renouvelables à l'échelle humaine sont exploitées pour l'irrigation en Libye (Grand Fleuve Artificiel), en Algérie et en Tunisie. Leur exploitation est une forme d'épuisement irréversible.</p>

<h3>Les lacs : miroirs de l'histoire climatique</h3>
<p>Les lacs couvrent environ 2,1 % des terres émergées. Le Canada à lui seul abrite plus d'un million de lacs, héritage du Quaternaire glaciaire. Les Grands Lacs nord-américains (Supérieur, Michigan, Huron, Érié, Ontario) contiennent 21 % des eaux douces de surface mondiales.</p>
<p>Les lacs ont des origines diverses : tectoniques (Baikal, le plus profond du monde avec 1 637 m, et Tanganyika, dans le Rift africain), glaciaires (lacs alpins, lacs des pays nordiques), volcaniques (lacs de cratère), fluviaux (lacs de méandres).</p>
<p>Le lac Aral est l'exemple le plus tragique d'assèchement anthropique. En 1960, quatrième lac au monde par sa superficie (68 000 km²), il a été presque totalement asséché par la dérivation de ses fleuves alimentaires pour l'irrigation du coton en Union soviétique. Il ne représente plus aujourd'hui que 10 % de sa surface originelle.</p>

<div class="highlight-box">
<p><strong>Le lac Baïkal :</strong> Situé en Sibérie méridionale, le Baïkal est le plus vieux (~25 millions d'années), le plus profond (1 637 m) et le plus volumineux lac d'eau douce du monde (23 615 km³, soit 20 % de l'eau douce de surface mondiale). Il abrite 1 700 espèces endémiques, dont le phoque du Baïkal. Son écosystème est menacé par la pollution industrielle et le réchauffement climatique.</p>
</div>

<h3>Les glaciers et la cryosphère</h3>
<p>La cryosphère désigne l'ensemble des parties de la Terre où l'eau se trouve sous forme solide : glaciers, calottes polaires, banquise, pergélisol. Elle joue un rôle crucial dans le système climatique en réfléchissant l'énergie solaire (effet albédo) et en régulant les débits des fleuves glaciaires.</p>
<p>Les inlandsis du Groenland et de l'Antarctique contiennent respectivement 7 et 58,3 m de hausse potentielle du niveau des mers. La fonte actuelle de ces calottes contribue déjà à la hausse du niveau des mers. Le Groenland perd en moyenne 280 milliards de tonnes de glace par an.</p>
<p>Le <strong>pergélisol</strong> couvre 15 % des terres émergées (Sibérie, Alaska, Canada septentrional). Son dégel libère d'immenses quantités de méthane et de CO₂, créant une boucle de rétroaction positive qui amplifie le réchauffement. Des émissions de méthane ont déjà été observées en mer de Sibérie orientale.</p>

<h3>Ressources en eau et enjeux géopolitiques</h3>
<p>L'eau douce est inégalement distribuée et de plus en plus sous pression. Le stress hydrique (disponibilité inférieure à 1 700 m³/habitant/an) affecte déjà 2 milliards de personnes. Parmi les grands défis :</p>
<ul>
<li><strong>La sécurité alimentaire :</strong> 70 % de l'eau douce prélevée est consacrée à l'irrigation. La révolution verte des années 1960–1970 a massivement développé l'irrigation, au prix d'un épuisement des nappes fossiles (aquifère d'Ogallala aux États-Unis, aquifères du Punjab indien).</li>
<li><strong>Les conflits transfrontaliers :</strong> 263 bassins fluviaux sont partagés entre plusieurs États. Les tensions sur le Nil (barrage de la Renaissance éthiopienne), le Mékong (barrages chinois), l'Indus (Inde-Pakistan) illustrent les tensions géopolitiques liées à l'eau.</li>
<li><strong>La pollution des eaux :</strong> Produits agricoles (nitrates, pesticides), effluents industriels et eaux usées non traitées contaminent rivières, lacs et nappes. En Inde, le Gange est classé parmi les rivières les plus polluées du monde malgré sa sacralité.</li>
</ul>
</div>'''

# ----- physique/risques-naturels -----
enrichments['physique/risques-naturels'] = '''<div class="course-content">
<h3>Les risques naturels : quand la nature défie les sociétés</h3>
<p class="resume-text">Un risque naturel naît de la rencontre entre un <strong>aléa</strong> (phénomène naturel potentiellement dangereux) et une <strong>vulnérabilité</strong> (sociétés humaines exposées à ce phénomène). Un aléa fort sans population exposée ne constitue pas un risque ; une population vulnérable dans une zone à faible aléa produit un risque limité. Cette équation — risque = aléa × vulnérabilité — est le fondement de la géographie des risques.</p>

<div class="highlight-box">
<p><strong>Risque vs. catastrophe :</strong> Le risque est potentiel ; la catastrophe est réalisée. Les catastrophes naturelles ont causé environ 1,35 million de morts entre 2000 et 2019, selon l'ONU-DRRC. Les dommages économiques atteignent plusieurs milliers de milliards de dollars sur la même période.</p>
</div>

<h3>Les risques géophysiques : séismes et tsunamis</h3>
<p>Les <strong>séismes</strong> sont l'un des risques naturels les plus meurtriers. Leur dangerosité ne dépend pas uniquement de leur magnitude, mais surtout de la densité de population exposée, de la qualité des constructions et des systèmes d'alerte. Le séisme de Haïti de 2010 (M 7,0) a causé 220 000 morts, tandis que le séisme de Christchurch en 2011 (M 6,3) en a tué 185 dans un pays riche aux normes antisismiques strictes.</p>
<p>Les <strong>tsunamis</strong> résultent de séismes sous-marins, d'effondrements de flancs volcaniques ou de glissements de terrain. Le tsunami de l'océan Indien de 2004 reste l'une des pires catastrophes naturelles de l'histoire : une vague générée par un séisme M 9,1 au large de Sumatra a déferlé sur les côtes de 14 pays, causant 230 000 victimes. Il a conduit à la mise en place d'un système d'alerte aux tsunamis dans l'océan Indien.</p>

<h3>Les risques volcaniques</h3>
<p>On dénombre environ 1 500 volcans actifs dans le monde, dont 500 ont présenté des éruptions historiques. Les risques volcaniques incluent :</p>
<ul>
<li><strong>Les coulées de lave :</strong> Dangereuses pour les biens mais rarement mortelles car lentes. Le Kīlauea à Hawaï en éruption quasi continue depuis 1983 a détruit des milliers d'habitations.</li>
<li><strong>Les nuées ardentes (pyroclastiques) :</strong> Mélange de gaz brûlants (800 °C), de cendres et de roches se déplaçant à 300–700 km/h — mortelles à quasi-100 %. Pompéi (79 apr. J.-C.) et la Montagne Pelée en Martinique (1902, 28 000 morts) en sont les exemples les plus connus.</li>
<li><strong>Les lahars :</strong> Coulées de boue volcanique formées lorsque des cendres se mélangent à l'eau. Le Nevado del Ruiz (Colombie, 1985) a généré un lahar qui a enseveli la ville d'Armero, tuant 23 000 personnes.</li>
<li><strong>Les retombées de cendres :</strong> Peuvent paralyser les transports aériens (Eyjafjallajökull, Islande, 2010), détruire les récoltes, provoquer des effondrements de toitures.</li>
</ul>

<div class="highlight-box">
<p><strong>Éruptions supervolcaniques :</strong> Les supervolcans (Yellowstone, Toba en Indonésie, Campi Flegrei en Italie) peuvent éjecter des centaines à milliers de km³ de matériaux, provoquant un « hiver volcanique » mondial. L'éruption de Toba il y a ~74 000 ans aurait réduit la population humaine mondiale à quelques milliers d'individus selon la théorie controversée de la « catastrophe Toba ».</p>
</div>

<h3>Les risques hydro-météorologiques</h3>
<p>Les <strong>inondations</strong> sont le risque naturel le plus fréquent et le plus coûteux. Elles résultent de crues fluviales, de précipitations extrêmes ou de submersions marines. Les inondations catastrophiques en Asie du Sud frappent régulièrement lors des moussons, avec des bilans humains lourds exacerbés par la densité de population dans les plaines alluviales.</p>
<p>Les <strong>cyclones tropicaux</strong> combinent vents violents, houles de tempête et pluies diluviennes. Le cyclone Bhola (Bangladesh, 1970) a tué entre 300 000 et 500 000 personnes, restant l'une des catastrophes naturelles les plus meurtrières du XX<sup>e</sup> siècle. Les États-Unis ont subi l'ouragan Katrina en 2005 (1 800 morts, 125 milliards de dollars de dégâts).</p>
<p>Les <strong>sécheresses</strong> sont des risques lents, mais leurs impacts sont dévastateurs sur la sécurité alimentaire. La sécheresse du Sahel (1968–1974) a causé une famine qui a tué entre 100 000 et 1 million de personnes. Les sécheresses australiennes récurrentes révèlent la vulnérabilité des systèmes agricoles face aux variations climatiques.</p>

<h3>Les mouvements de masse</h3>
<p>Les <strong>glissements de terrain</strong> et les <strong>avalanches</strong> constituent des risques majeurs en zones montagneuses. Ils résultent de la combinaison d'une pente, d'un matériau instable (sols saturés, roches altérées, neige) et d'un déclencheur (pluies intenses, séisme, dégel du pergélisol).</p>
<p>Le glissement de terrain de Vajont (Italie, 1963) illustre le risque : 260 millions de m³ de roches se sont détachés d'un versant et ont plongé dans le réservoir d'un barrage, provoquant une vague qui a submergé plusieurs villages, causant 2 000 morts. Le dégel du pergélisol multiplie les risques de glissements en haute montagne.</p>

<div class="highlight-box">
<p><strong>La Réunion — île à risques multiples :</strong> L'île de La Réunion concentre plusieurs risques naturels majeurs : volcanisme actif (le Piton de la Fournaise est l'un des volcans les plus actifs au monde), cyclones tropicaux, inondations et glissements de terrain liés à des pluies extrêmes. En janvier 1966, le cyclone Denise a provoqué à Cilaos des précipitations de 1 825 mm en 24 heures, record mondial absolu.</p>
</div>

<h3>Vulnérabilité et résilience : les facteurs sociaux du risque</h3>
<p>La même magnitude sismique provoque des bilans humains radicalement différents selon les sociétés exposées. Le séisme de Kobe (Japon, 1995, M 6,9) a tué 6 434 personnes dans un pays riche et préparé. Un séisme équivalent dans un pays pauvre ferait des dizaines de milliers de victimes. La différence réside dans la vulnérabilité : qualité des constructions, systèmes d'alerte, accès aux soins d'urgence, préparation des populations.</p>
<p>La vulnérabilité est multidimensionnelle : physique (bâti de mauvaise qualité), économique (absence de ressources pour se préparer et se reconstruire), sociale (exclusion des groupes les plus fragiles), institutionnelle (absence de planification des risques). Les femmes, les enfants, les personnes âgées et les populations pauvres sont systématiquement surreprésentées parmi les victimes.</p>

<h3>Gestion des risques naturels : prévenir, prévoir, gérer</h3>
<p>La gestion des risques naturels s'articule autour de plusieurs stratégies :</p>
<ul>
<li><strong>La cartographie des aléas :</strong> Plans de Prévention des Risques (PPR) en France, cartes de zonage sismique, cartes d'inondabilité — elles déterminent les zones constructibles et les normes de construction.</li>
<li><strong>Les systèmes d'alerte précoce :</strong> Réseaux sismiques, bouées tsunamimètres, radars météo, capteurs hydrologiques — ils permettent de déclencher des évacuations avant la catastrophe.</li>
<li><strong>Les normes de construction parasismique :</strong> Au Japon, les immeubles modernes résistent à des séismes de magnitude 7, grâce à des systèmes d'amortissement et d'isolation sismique sophistiqués.</li>
<li><strong>La culture du risque :</strong> L'éducation des populations aux comportements appropriés lors d'un séisme, d'un tsunami ou d'une inondation peut sauver des milliers de vies.</li>
</ul>

<div class="highlight-box">
<p><strong>Le cadre de Sendai :</strong> Adopté en 2015, le Cadre de Sendai pour la réduction des risques de catastrophes vise à réduire de 50 % les pertes humaines liées aux catastrophes naturelles d'ici 2030. Il insiste sur le renforcement des capacités locales, la gouvernance des risques et la résilience des infrastructures critiques.</p>
</div>
</div>'''

# ----- humaine/demographie -----
enrichments['humaine/demographie'] = '''<div class="course-content">
<h3>La démographie : science des populations humaines</h3>
<p class="resume-text">La démographie est la science qui étudie les populations humaines dans leurs caractéristiques quantitatives (effectifs, structure par âge et sexe) et leur évolution dans le temps (naissances, décès, migrations). Elle fournit les données fondamentales qui permettent de comprendre les dynamiques sociales, économiques et politiques d'une société.</p>

<div class="highlight-box">
<p><strong>L'équation démographique :</strong> La population d'une zone à une date donnée = population initiale + naissances − décès + immigrants − émigrants. Le solde naturel (naissances − décès) et le solde migratoire sont les deux composantes de la croissance ou du déclin démographique.</p>
</div>

<h3>Les indicateurs démographiques fondamentaux</h3>
<p>Les démographes utilisent un ensemble d'indicateurs standardisés pour comparer les situations à travers le temps et l'espace :</p>
<p>Le <strong>taux brut de natalité</strong> (TBN) exprime le nombre de naissances vivantes pour 1 000 habitants sur une année. Il varie de moins de 8 ‰ dans les pays d'Europe du Nord ou au Japon à plus de 40 ‰ dans les pays sahéliens comme le Niger ou le Mali. Il est influencé par la structure par âge de la population et ne reflète pas seul la fécondité des femmes.</p>
<p>L'<strong>indice synthétique de fécondité</strong> (ISF) — ou taux de fécondité totale — est l'indicateur de référence. Il représente le nombre moyen d'enfants qu'aurait une femme au cours de sa vie si les taux de fécondité par âge observés restaient constants. Le seuil de remplacement des générations est de 2,1 enfants par femme. En France, l'ISF est d'environ 1,8 ; au Niger, il dépasse 7.</p>
<p>L'<strong>espérance de vie à la naissance</strong> mesure le nombre moyen d'années que vivrait un nouveau-né si les conditions de mortalité actuelles persistaient. Elle est de plus de 85 ans au Japon et en Suisse, mais encore inférieure à 60 ans dans certains pays d'Afrique subsaharienne.</p>
<p>Le <strong>taux de mortalité infantile</strong> (TMI) — décès d'enfants de moins d'un an pour 1 000 naissances vivantes — est l'un des indicateurs les plus sensibles du niveau de développement. Il est inférieur à 3 ‰ dans les pays nordiques, mais dépasse 50 ‰ dans les pays les plus pauvres.</p>

<h3>La transition démographique : un modèle universel</h3>
<p>La <strong>théorie de la transition démographique</strong> (Warren Thompson, 1929 ; Frank Notestein, 1945) décrit le passage d'un régime démographique traditionnel (forte natalité, forte mortalité) à un régime moderne (faible natalité, faible mortalité). Ce modèle se décompose en quatre phases :</p>
<ul>
<li><strong>Phase 1 — Régime prémoderne :</strong> Forte natalité (TBN 40–50 ‰) et forte mortalité (TBM 30–40 ‰). Population stable mais avec de fortes oscillations dues aux épidémies, famines et guerres. L'Ancien Régime en Europe illustre cette phase.</li>
<li><strong>Phase 2 — Début de la transition :</strong> La mortalité baisse (progrès sanitaires, alimentaires) mais la natalité reste élevée. La population croît rapidement. L'Europe a vécu cette phase aux XVIII<sup>e</sup>–XIX<sup>e</sup> siècles. L'Afrique subsaharienne est en partie encore dans cette phase.</li>
<li><strong>Phase 3 — Fin de la transition :</strong> La natalité commence à baisser à son tour. La croissance ralentit. La plupart des pays d'Asie et d'Amérique latine ont traversé cette phase dans la seconde moitié du XX<sup>e</sup> siècle.</li>
<li><strong>Phase 4 — Régime moderne :</strong> Faible natalité et faible mortalité. Population stable ou légèrement croissante. Europe, Japon, Amérique du Nord sont à cette phase. Une cinquième phase est parfois distinguée, avec une fécondité sous le seuil de remplacement et un vieillissement accéléré.</li>
</ul>

<div class="highlight-box">
<p><strong>Le baby-boom :</strong> Entre 1946 et 1964, la plupart des pays occidentaux ont connu une hausse exceptionnelle de la natalité, le « baby-boom », lié à la fin de la guerre et à la prospérité économique. La génération du baby-boom arrive aujourd'hui à la retraite, créant une charge considérable pour les systèmes de protection sociale.</p>
</div>

<h3>Les pyramides des âges : photographie d'une population</h3>
<p>La <strong>pyramide des âges</strong> représente graphiquement la structure d'une population par âge et par sexe. Sa forme révèle l'histoire démographique d'une société :</p>
<ul>
<li><strong>Pyramide triangulaire (ou en as de pique) :</strong> Forte natalité, mortalité élevée aux jeunes âges, faible espérance de vie. Population très jeune. Caractéristique des pays les moins avancés.</li>
<li><strong>Pyramide en losange (en obus ou diabolo) :</strong> Phase de transition démographique avancée. La base rétrécit (baisse de natalité) tandis que le centre gonfle.</li>
<li><strong>Pyramide en champignon (ou en urne) :</strong> Faible natalité, faible mortalité, vieillissement de la population. Caractéristique des pays développés (Japon, Allemagne, Italie).</li>
</ul>
<p>Les « trous » dans une pyramide reflètent des événements historiques : classes creuses nées pendant la Première Guerre mondiale, baby-boom visible comme un renflement, politique de l'enfant unique en Chine visible par le déséquilibre des sexes chez les jeunes.</p>

<h3>Le vieillissement démographique : enjeu mondial du XXI<sup>e</sup> siècle</h3>
<p>Le vieillissement démographique est la transformation la plus profonde que connaissent les sociétés développées. En 2050, une personne sur six dans le monde aura plus de 65 ans (contre une sur onze en 2019). Le Japon est le pays le plus avancé dans cette transition : en 2023, environ 29 % de sa population avait plus de 65 ans.</p>
<p>Les conséquences sont multiples : allongement des dépenses de retraite et de santé, contraction de la main-d'œuvre active, pression sur les systèmes de financement des pensions. Le rapport de dépendance (ratio actifs/retraités) se dégrade dans tous les pays développés. La question de la soutenabilité des systèmes de retraite par répartition est au cœur des débats politiques en France, en Allemagne, au Japon.</p>

<div class="highlight-box">
<p><strong>Le dividende démographique :</strong> Lorsqu'un pays amorce sa transition, la réduction de la mortalité infantile précède la baisse de la natalité. Pendant plusieurs décennies, la proportion d'actifs par rapport aux dépendants (enfants + personnes âgées) est favorable. Ce « dividende démographique » a été l'un des facteurs de croissance des « tigres asiatiques » dans les années 1970–1990.</p>
</div>

<h3>Les projections démographiques mondiales</h3>
<p>Selon les projections médianes des Nations Unies, la population mondiale devrait atteindre environ 9,7 milliards de personnes en 2050 et se stabiliser autour de 10–11 milliards en fin de siècle. La quasi-totalité de la croissance démographique se produira en Afrique subsaharienne, qui pourrait concentrer 26 % de la population mondiale en 2050 contre 14 % actuellement.</p>
<p>L'Asie reste le continent le plus peuplé, mais la Chine et l'Inde voient leur dynamique démographique diverger : la Chine vieillit rapidement (conséquence de la politique de l'enfant unique) et a été dépassée par l'Inde en 2023 comme pays le plus peuplé du monde. L'Europe, sans immigration, serait en déclin démographique.</p>
</div>'''

# ----- humaine/migrations -----
enrichments['humaine/migrations'] = '''<div class="course-content">
<h3>Les migrations internationales : comprendre les flux humains</h3>
<p class="resume-text">Les migrations internationales désignent les déplacements de personnes franchissant une frontière nationale dans l'intention de s'établir dans un autre pays, temporairement ou durablement. Elles constituent l'un des phénomènes les plus complexes de la géographie humaine contemporaine, mêlant des logiques économiques, politiques, sociales et environnementales.</p>

<div class="highlight-box">
<p><strong>En chiffres :</strong> En 2020, les Nations Unies recensaient 281 millions de migrants internationaux, soit 3,6 % de la population mondiale. Mais ce chiffre ne représente que la partie visible : des millions de personnes se déplacent sans être comptabilisées comme migrants internationaux (déplacements internes, temporaires).</p>
</div>

<h3>Les facteurs explicatifs des migrations</h3>
<p>Les sciences sociales distinguent deux types de facteurs migratoires. Les facteurs de <strong>répulsion</strong> (<em>push factors</em>) poussent les individus à quitter leur pays d'origine : pauvreté et chômage, conflits armés et persécutions, catastrophes naturelles, manque d'opportunités. Les facteurs d'<strong>attraction</strong> (<em>pull factors</em>) attirent vers les pays de destination : revenus plus élevés, meilleures conditions de vie, réseaux diasporiques déjà constitués, besoins en main-d'œuvre.</p>
<p>La migration n'est pas un simple déplacement du pauvre vers le riche. Elle requiert des ressources (financières, informationnelles, sociales) que les plus démunis n'ont souvent pas. Les migrations sont donc sélectives : les migrants sont généralement plus éduqués et plus jeunes que la population d'origine.</p>
<p>La <strong>théorie des réseaux migratoires</strong> souligne l'importance des liens sociaux dans les processus migratoires. Une fois qu'un flux migratoire est établi, les réseaux de parents et de compatriotes dans le pays d'accueil facilitent et alimentent les nouvelles migrations : information sur les opportunités, aide au logement, emploi dans un réseau communautaire. C'est ainsi que des flux migratoires persistent même après que les conditions initiales ont changé.</p>

<h3>Les grandes catégories de migrants</h3>
<p>On distingue plusieurs catégories juridiques et sociologiques de migrants :</p>
<ul>
<li><strong>Les migrants économiques :</strong> Ils se déplacent principalement pour des raisons professionnelles et économiques. On distingue les migrations de travail qualifié (cadres, ingénieurs, soignants) et non qualifié (agriculture saisonnière, BTP, services).</li>
<li><strong>Les réfugiés :</strong> Définis par la Convention de Genève de 1951 comme des personnes contraintes de fuir leur pays du fait de persécutions fondées sur la race, la religion, la nationalité, les opinions politiques ou l'appartenance à un groupe social. En 2022, le HCR (Haut-Commissariat aux réfugiés) recensait 103 millions de personnes déplacées de force dans le monde — un record historique.</li>
<li><strong>Les demandeurs d'asile :</strong> Personnes ayant demandé la reconnaissance du statut de réfugié, en attente d'une décision.</li>
<li><strong>Les migrants climatiques :</strong> Personnes déplacées par des catastrophes naturelles ou la dégradation de leur environnement (sécheresses, montée des eaux, désertification). Catégorie en forte croissance, non encore reconnue par le droit international.</li>
</ul>

<div class="highlight-box">
<p><strong>La Convention de Genève (1951) :</strong> Signée par 149 États, elle définit le statut de réfugié et garantit le droit de ne pas être renvoyé dans un pays où la personne risque des persécutions (principe de non-refoulement). Avec le Protocole de 1967, elle constitue le cadre juridique international de protection des réfugiés.</p>
</div>

<h3>Les grandes routes migratoires mondiales</h3>
<p>Les flux migratoires ne se répartissent pas aléatoirement sur la planète. Ils suivent des corridors migratoires structurés par des liens historiques, linguistiques et économiques :</p>
<ul>
<li><strong>Sud-Nord (Amérique latine → États-Unis, Afrique/Moyen-Orient → Europe) :</strong> Les flux les plus médiatisés. Les migrations Mexique–États-Unis constituent le premier corridor migratoire mondial (environ 11 millions de Mexicains aux États-Unis).</li>
<li><strong>Sud-Sud :</strong> Moins visibles mais très importants. Les migrations en Afrique se font majoritairement à l'intérieur du continent. Les travailleurs d'Asie du Sud (Inde, Bangladesh, Pakistan, Népal) migrent vers les pays du Golfe en masse.</li>
<li><strong>Nord-Nord :</strong> Mobilités professionnelles intra-européennes, migration de retraités nordiques vers le sud de l'Europe.</li>
</ul>

<h3>Les diasporas : présence mondiale des communautés dispersées</h3>
<p>Une <strong>diaspora</strong> désigne une communauté dispersée dans le monde mais maintenant une identité collective fondée sur le souvenir ou le mythe d'un pays d'origine, un engagement envers le maintien ou la restauration de ce pays, et l'existence de mouvements de retour. Le terme vient du grec et désignait à l'origine la dispersion du peuple juif.</p>
<p>Les grandes diasporas contemporaines (chinoise, indienne, mexicaine, philippine, nigériane) jouent un rôle économique considérable via les <strong>transferts de fonds</strong> (remittances). En 2021, les migrants ont envoyé 589 milliards de dollars vers leurs pays d'origine — soit trois fois le montant de l'aide publique au développement. Ces flux sont vitaux pour des pays comme le Liban, le Kirghizistan, la Haïti (où ils représentent plus de 20 % du PIB).</p>

<div class="highlight-box">
<p><strong>La fuite des cerveaux :</strong> L'émigration des personnes hautement qualifiées des pays en développement vers les pays développés constitue un enjeu majeur. Des pays comme le Ghana, l'Éthiopie ou les Philippines forment des médecins et des ingénieurs qui s'expatrient ensuite massivement, privant ces pays d'une ressource humaine précieuse. Parallèlement, les transferts de compétences et le retour de certains migrants enrichissent les pays d'origine.</p>
</div>

<h3>Migrations et politiques publiques</h3>
<p>La gestion des migrations est l'un des sujets politiques les plus sensibles dans les pays d'accueil. On distingue plusieurs approches :</p>
<ul>
<li><strong>Pays à tradition d'immigration choisie :</strong> Canada, Australie, Nouvelle-Zélande pratiquent une immigration sélective sur points (qualifications, langue, âge), privilégiant les migrants répondant aux besoins économiques du pays.</li>
<li><strong>Modèle europén de libre circulation :</strong> L'espace Schengen permet la libre circulation de 450 millions de citoyens européens. Les migrations extracommunautaires font l'objet de politiques d'asile communes (imparfaitement harmonisées).</li>
<li><strong>Externalisation des frontières :</strong> Tendance croissante des pays riches à délocaliser le contrôle migratoire vers les pays de transit (accords UE-Turquie, UE-Libye, États-Unis-Mexique).</li>
</ul>

<h3>Impacts des migrations sur les pays d'accueil et d'origine</h3>
<p>Les effets économiques de l'immigration sont globalement positifs pour les pays d'accueil : les migrants comblent des besoins en main-d'œuvre (secteurs agricole, hôtellerie-restauration, soins à la personne), paient des cotisations sociales et génèrent de la consommation. Les études économétriques concluent généralement à un impact légèrement positif sur les salaires et l'emploi des natifs dans les pays développés.</p>
<p>Pour les pays d'origine, les migrations représentent à la fois une ressource (remises de fonds, compétences acquises à l'étranger) et une perte (perte de main-d'œuvre qualifiée, déséquilibre démographique dans les régions de forte émigration). Au niveau social, les migrations transforment les sociétés d'accueil, enrichissant leur tissu culturel tout en posant des défis d'intégration.</p>
</div>'''

# ----- humaine/urbanisation -----
enrichments['humaine/urbanisation'] = '''<div class="course-content">
<h3>L'urbanisation : la révolution silencieuse du XX<sup>e</sup> siècle</h3>
<p class="resume-text">L'urbanisation désigne le processus par lequel une proportion croissante de la population d'un pays ou d'une région vit dans des villes. Ce processus, amorcé en Europe lors de la révolution industrielle, s'est généralisé à l'ensemble de la planète au XX<sup>e</sup> siècle. En 2007, pour la première fois dans l'histoire de l'humanité, plus de la moitié de la population mondiale vivait en zone urbaine. Aujourd'hui, cette proportion dépasse 56 %.</p>

<div class="highlight-box">
<p><strong>Le seuil historique de 2007 :</strong> En 2007, la population urbaine mondiale a dépassé la population rurale pour la première fois dans l'histoire humaine. Cette date marque un tournant civilisationnel : l'humanité est désormais une espèce majoritairement urbaine.</p>
</div>

<h3>Définir la ville : une question complexe</h3>
<p>La définition de ce qu'est une « ville » varie considérablement selon les pays, ce qui rend difficile les comparaisons internationales. En France, une commune est considérée comme urbaine si elle compte au moins 2 000 habitants dans une agglomération continue. Au Danemark, ce seuil est de 200 habitants. En Chine, la définition administrative de l'urbain change selon les périodes et les politiques.</p>
<p>Des concepts plus précis permettent de décrire la réalité urbaine contemporaine :</p>
<ul>
<li><strong>L'agglomération urbaine :</strong> Ensemble continu de constructions formant une unité urbaine, quelle que soit la limite administrative.</li>
<li><strong>L'aire métropolitaine :</strong> Zone d'influence économique et fonctionnelle d'une grande ville, incluant les zones périurbaines et les villes satellites dont les habitants travaillent dans la métropole.</li>
<li><strong>La mégapole :</strong> Ville dont la population dépasse 10 millions d'habitants. On en comptait 34 en 2022 : Tokyo (37 millions), Delhi (32 millions), Shanghai (29 millions).</li>
<li><strong>La mégalopole :</strong> Nébuleuse urbaine formée par la coalescence de plusieurs métropoles, comme la côte est des États-Unis (de Boston à Washington) ou la dorsale européenne.</li>
</ul>

<h3>Dynamiques d'urbanisation dans le monde</h3>
<p>Les taux d'urbanisation varient considérablement selon les régions du monde. L'Amérique du Nord (82 %), l'Amérique latine (81 %) et l'Europe (75 %) sont les régions les plus urbanisées. L'Asie du Sud (35 %) et l'Afrique subsaharienne (40 %) sont encore majoritairement rurales mais connaissent les taux de croissance urbaine les plus élevés.</p>
<p>L'Afrique subsaharienne devrait ainsi voir sa population urbaine tripler d'ici 2050. Des pays comme la Tanzanie, l'Éthiopie ou la République Démocratique du Congo vont connaître une explosion urbaine sans précédent, sans avoir les ressources économiques et institutionnelles nécessaires pour l'accompagner.</p>
<p>La Chine a vécu la plus spectaculaire urbanisation de l'histoire : en 1980, 20 % de sa population était urbaine ; en 2022, ce chiffre dépasse 65 %, soit environ 900 millions de citadins. Cette transformation a été le moteur de la croissance économique chinoise des 40 dernières années.</p>

<div class="highlight-box">
<p><strong>La ville de Lagos :</strong> Lagos (Nigeria) illustre la croissance urbaine explosive de l'Afrique : environ 4 millions d'habitants dans les années 1980, elle compte aujourd'hui 15 à 21 millions de personnes selon les périmètres considérés et pourrait dépasser Tokyo d'ici 2100 pour devenir la plus grande ville du monde. Cette croissance ultra-rapide dépasse les capacités infrastructurelles et de gouvernance.</p>
</div>

<h3>La métropolisation : concentration dans les grandes villes</h3>
<p>L'urbanisation contemporaine ne se limite pas à la croissance des villes : elle se caractérise par une <strong>métropolisation</strong>, c'est-à-dire une concentration croissante des populations, des activités économiques et des fonctions de commandement dans les plus grandes villes.</p>
<p>Les métropoles mondiales (New York, Londres, Tokyo, Shanghai, Paris) concentrent les sièges des entreprises multinationales, les places financières, les universités de rang mondial, les centres de recherche et d'innovation. Elles s'articulent entre elles dans un réseau hiérarchisé de villes mondiales (<em>global cities</em>), concept développé par la sociologue Saskia Sassen.</p>
<p>En France, la métropolisation se traduit par la croissance des 15 plus grandes métropoles (Paris, Lyon, Bordeaux, Toulouse, Nantes, Rennes...) au détriment des villes moyennes, des espaces ruraux et des territoires périphériques. Ce phénomène alimente un sentiment d'abandon dans les « territoires qui perdent ».</p>

<h3>La périurbanisation et l'étalement urbain</h3>
<p>À partir des années 1950–1960 dans les pays développés, la croissance urbaine ne se concentre plus dans les centres-villes mais dans les périphéries. La <strong>périurbanisation</strong> désigne l'extension des zones urbanisées au-delà des agglomérations denses, sous forme de lotissements pavillonnaires, de zones commerciales et d'activités qui s'étirent le long des axes routiers.</p>
<p>L'<strong>étalement urbain</strong> qui en résulte a des conséquences environnementales et sociales considérables : consommation d'espaces agricoles et naturels, dépendance à la voiture individuelle (et donc émissions de CO₂), coût élevé des réseaux (eau, assainissement, transport), ségrégation socio-spatiale entre centres riches et périphéries populaires.</p>

<div class="highlight-box">
<p><strong>La France périurbaine :</strong> En France, 30 % de la population vit dans l'espace périurbain. Ces habitants — souvent primo-accédants à la propriété — ont choisi de s'éloigner des centres pour bénéficier de prix immobiliers plus bas et d'un cadre de vie plus vert. Mais la hausse des prix du carburant et l'éloignement des services les rendent particulièrement vulnérables aux crises économiques (mouvement des Gilets jaunes, 2018).</p>
</div>

<h3>Les défis des villes du Sud : bidonvilles et informalité</h3>
<p>Dans les pays en développement, l'urbanisation rapide s'accompagne du développement d'<strong>habitats informels</strong> (bidonvilles, favelas, slums, gecekondu). Ces quartiers précaires accueillent des migrants ruraux pauvres qui ne peuvent accéder au marché officiel du logement. Selon ONU-Habitat, environ 1 milliard de personnes dans le monde vivaient dans des bidonvilles en 2020.</p>
<p>Ces quartiers sont caractérisés par des logements de fortune, un accès limité à l'eau potable et à l'assainissement, l'absence de sécurité d'occupation foncière et une forte densité. Cependant, ils ne sont pas des espaces de misère statique : ils peuvent être des lieux de vitalité économique informelle, de solidarité communautaire et de mobilité sociale.</p>

<h3>Vers la ville durable : enjeux du XXI<sup>e</sup> siècle</h3>
<p>Les villes concentrent 70 % des émissions mondiales de gaz à effet de serre tout en occupant seulement 3 % de la surface terrestre. La transition vers des villes durables est donc un enjeu planétaire. Cela implique de repenser la mobilité (transports en commun, vélo, marche), les bâtiments (isolation, énergie renouvelable), la gestion des déchets et de l'eau, ainsi que la densification pour limiter l'étalement.</p>
<p>L'Objectif de développement durable 11 (ODD 11) vise à « faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables ». Des initiatives comme les « villes 15 minutes » (Paris, Melbourne, Bogotá) cherchent à créer des quartiers où tous les services essentiels sont accessibles à pied ou à vélo en 15 minutes.</p>
</div>'''

# ----- humaine/inegalites -----
enrichments['humaine/inegalites'] = '''<div class="course-content">
<h3>Les inégalités territoriales : la géographie du développement</h3>
<p class="resume-text">Les inégalités territoriales désignent les écarts de richesse, de bien-être et d'accès aux ressources entre différents espaces géographiques — entre pays (inégalités internationales), entre régions d'un même pays (inégalités régionales) ou entre quartiers d'une même ville (inégalités urbaines). La géographie est une science des inégalités spatiales : comprendre pourquoi certains espaces sont riches et d'autres pauvres est l'une de ses questions fondamentales.</p>

<div class="highlight-box">
<p><strong>Un monde profondément inégal :</strong> Les 10 % les plus riches de la planète captent environ 52 % des revenus mondiaux, tandis que les 50 % les plus pauvres n'en perçoivent que 8,5 %. L'espérance de vie à la naissance varie de 53 ans en République centrafricaine à 84 ans au Japon. Ces écarts sont le produit d'histoires, de géographies et de systèmes économiques différents.</p>
</div>

<h3>L'IDH : mesurer le développement humain</h3>
<p>L'<strong>Indicateur de Développement Humain</strong> (IDH), créé par le PNUD (Programme des Nations Unies pour le Développement) en 1990, propose une mesure du développement allant au-delà du seul PIB par habitant. Il agrège trois dimensions :</p>
<ul>
<li><strong>La santé :</strong> Mesurée par l'espérance de vie à la naissance.</li>
<li><strong>L'éducation :</strong> Mesurée par la durée attendue et la durée moyenne de scolarisation.</li>
<li><strong>Le niveau de vie :</strong> Mesuré par le revenu national brut par habitant en parité de pouvoir d'achat.</li>
</ul>
<p>L'IDH varie de 0 à 1. En 2022, la Suisse, la Norvège et l'Islande se classaient en tête (IDH &gt; 0,95). Les pays d'Afrique subsaharienne occupent les dernières places : Niger (0,394), République centrafricaine (0,404). La France se classe autour de la 26<sup>e</sup> place mondiale (IDH ≈ 0,91).</p>

<h3>La fracture Nord-Sud : une réalité nuancée</h3>
<p>La division Nord-Sud — schématiquement les pays développés du Nord contre les pays en développement du Sud — reste un cadre d'analyse utile mais de plus en plus contesté. Ce schéma binaire ne rend plus compte de la complexité du monde :</p>
<p>L'émergence des <strong>BRICS</strong> (Brésil, Russie, Inde, Chine, Afrique du Sud) et des pays émergents d'Asie du Sud-Est a profondément reconfiguré la géographie du développement. La Chine est devenue la deuxième puissance économique mondiale et a extrait 800 millions de personnes de la pauvreté en 40 ans. La Corée du Sud, Taiwan, Singapour sont des pays développés à part entière.</p>
<p>Au sein même du « Sud », les écarts sont immenses : entre le Qatar (IDH 0,855, PIB/hab parmi les plus élevés du monde) et le Mali (IDH 0,428, PIB/hab de quelques centaines de dollars), il n'y a guère de point commun. On préfère aujourd'hui parler de pays les moins avancés (PMA), de pays émergents et de pays développés.</p>

<div class="highlight-box">
<p><strong>La ligne de Brandt :</strong> En 1980, le rapport Brandt proposait de représenter la fracture Nord-Sud par une ligne reliant le Mexique à la Chine en passant par le sud de l'Europe et l'Océanie. Cette « ligne de Brandt » est devenue un symbole pédagogique, bien qu'elle soit trop schématique pour rendre compte de la complexité des inégalités actuelles.</p>
</div>

<h3>Centre-périphérie : modèles d'analyse des inégalités</h3>
<p>La géographie des inégalités s'analyse à travers le modèle <strong>centre-périphérie</strong>, développé notamment par les théoriciens de la dépendance (André Gunder Frank, Immanuel Wallerstein). Ce modèle distingue :</p>
<ul>
<li><strong>Les centres :</strong> Espaces dominants qui concentrent les fonctions de commandement (capital financier, technologie, innovation), capturent la valeur ajoutée et structurent les échanges à leur avantage.</li>
<li><strong>Les semi-périphéries :</strong> Espaces intermédiaires qui jouent un rôle de relais, comme les pays émergents ou les métropoles régionales.</li>
<li><strong>Les périphéries :</strong> Espaces subordonnés, fournisseurs de matières premières, de main-d'œuvre bon marché, dépendants des décisions prises ailleurs.</li>
</ul>
<p>Ce modèle s'applique à plusieurs échelles : mondiale (États-Unis, Europe, Japon vs. pays subsahariens), nationale (Paris vs. Creuse), urbaine (beaux quartiers vs. banlieues défavorisées).</p>

<h3>Les mécanismes de la persistance des inégalités</h3>
<p>Pourquoi les inégalités géographiques sont-elles si persistantes ? Plusieurs mécanismes entretiennent les écarts :</p>
<p><strong>Les termes de l'échange :</strong> Les pays exportateurs de matières premières (pétrole, minerais, café, cacao) subissent une détérioration tendancielle des termes de l'échange face aux produits industriels et technologiques exportés par les pays développés. L'économiste Raúl Prebisch avait déjà diagnostiqué ce mécanisme dans les années 1950.</p>
<p><strong>La dette :</strong> De nombreux pays en développement consacrent une part considérable de leurs recettes d'exportation au service de leur dette extérieure, limitant leurs capacités d'investissement dans l'éducation, la santé et les infrastructures.</p>
<p><strong>La « malédiction des ressources » :</strong> Paradoxalement, les pays riches en ressources naturelles (pétrole, diamants, minerais) ne sont pas nécessairement les plus développés. L'abondance de ressources peut engendrer des rentes captées par des élites corrompues, des instabilités politiques (conflits pour le contrôle des ressources) et un désinvestissement dans les secteurs productifs (syndrome hollandais).</p>

<div class="highlight-box">
<p><strong>Le coefficient de Gini :</strong> Cet indicateur statistique mesure l'inégalité des revenus au sein d'une population. Il varie de 0 (égalité parfaite) à 1 (inégalité absolue). Les pays nordiques ont des Gini autour de 0,25–0,30 ; l'Afrique du Sud, pays le plus inégalitaire du monde, dépasse 0,63.</p>
</div>

<h3>Inégalités régionales dans les pays développés</h3>
<p>Les inégalités ne sont pas l'apanage des seuls pays pauvres. Au sein des pays développés, les écarts entre territoires se creusent et alimentent des tensions politiques importantes. En France, l'opposition entre les grandes métropoles dynamiques et les territoires périphériques (villes moyennes en déclin industriel, zones rurales éloignées) a été l'un des ressorts du mouvement des Gilets jaunes (2018–2019).</p>
<p>Au Royaume-Uni, le Brexit a en partie exprimé la frustration des régions désindustrialisées du nord et du centre (Midlands, Yorkshire, Pays de Galles) face à Londres, perçue comme capturant tous les bénéfices de la mondialisation. Aux États-Unis, la « Rust Belt » (ceinture de rouille) des anciens États industriels (Michigan, Ohio, Pennsylvanie) a basculé vers le vote Trump en 2016, exprimant le même sentiment d'abandon.</p>
</div>'''

# ----- humaine/mondialisation -----
enrichments['humaine/mondialisation'] = '''<div class="course-content">
<h3>La mondialisation : intégration des économies et des sociétés</h3>
<p class="resume-text">La mondialisation désigne le processus d'intégration croissante des économies, des sociétés et des cultures à l'échelle planétaire, à travers l'intensification des échanges de marchandises, de capitaux, de services, d'informations et de personnes. Ce processus, amorcé avec les grandes explorations européennes du XV<sup>e</sup> siècle et accéléré par la révolution industrielle, a connu une intensification sans précédent depuis les années 1980.</p>

<div class="highlight-box">
<p><strong>La mondialisation en chiffres :</strong> Le commerce mondial représentait moins de 5 % du PIB mondial au XIX<sup>e</sup> siècle ; il dépasse 25 % aujourd'hui. Les flux de capitaux transfrontaliers ont été multipliés par 100 en 40 ans. Internet met en contact instantané 5 milliards d'internautes. Ces chiffres illustrent l'ampleur du processus.</p>
</div>

<h3>Histoire de la mondialisation</h3>
<p>La mondialisation n'est pas un phénomène nouveau. Les historiens distinguent plusieurs vagues :</p>
<p><strong>La première mondialisation (XV<sup>e</sup>–XVIII<sup>e</sup> siècles) :</strong> Les grandes explorations européennes (Colomb, Vasco de Gama, Magellan) ouvrent des routes commerciales mondiales. L'échange colombien redistribue plantes, animaux et maladies entre l'Ancien et le Nouveau Monde. Le commerce triangulaire atlantique (Europe–Afrique–Amériques) structure l'économie mondiale, au prix de la traite négrière.</p>
<p><strong>La mondialisation industrielle (XIX<sup>e</sup>–début XX<sup>e</sup> siècle) :</strong> La révolution industrielle, le développement des transports maritimes à vapeur et ferroviaires, le câble télégraphique transatlantique (1866) et la généralisation de l'étalon-or créent un premier âge de la mondialisation libérale. En 1913, les échanges internationaux représentaient une part du PIB mondial comparable à celle des années 1970.</p>
<p><strong>Le repli (1914–1950) :</strong> Les deux guerres mondiales, la crise de 1929 et la montée des nationalismes économiques marquent un repli de la mondialisation. Les échanges se contractent, le protectionnisme s'installe.</p>
<p><strong>La mondialisation contemporaine (depuis 1945, accélérée depuis 1980) :</strong> La création du GATT (1947), du FMI et de la Banque mondiale marque la reconstruction d'un ordre commercial libéral. À partir des années 1980, la dérégulation financière, la révolution des technologies de l'information et de la communication (TIC) et l'ouverture de la Chine amplifient considérablement les échanges.</p>

<h3>Les acteurs de la mondialisation</h3>
<p>La mondialisation met en scène des acteurs multiples :</p>
<p>Les <strong>firmes transnationales</strong> (FTN) sont les principaux moteurs de la mondialisation économique. Elles organisent leurs activités à l'échelle planétaire, localisant chaque étape de leur production là où les conditions (coût, compétences, accès aux marchés) sont les plus favorables. Apple conçoit ses produits en Californie, les fait fabriquer à Taiwan et en Chine, les vend dans le monde entier et domicilie ses profits en Irlande.</p>
<p>Les <strong>organisations internationales</strong> (OMC, FMI, Banque mondiale, CNUCED) régulent et orientent les échanges. Les <strong>États</strong> restent des acteurs essentiels : leurs politiques commerciales, fiscales et réglementaires déterminent les conditions dans lesquelles leurs entreprises s'intègrent à la mondialisation. Les <strong>ONG</strong> (Greenpeace, Amnesty International, Médecins Sans Frontières) forment une société civile mondiale qui interpelle et surveille les acteurs économiques et politiques.</p>

<div class="highlight-box">
<p><strong>Les chaînes de valeur mondiales :</strong> La mondialisation contemporaine repose sur la fragmentation internationale des processus de production. Un iPhone implique des composants fabriqués dans des dizaines de pays différents, assemblés en Chine et vendus partout dans le monde. Plus de 70 % du commerce mondial se fait désormais dans le cadre de ces chaînes de valeur mondiales (CVM).</p>
</div>

<h3>Les flux de la mondialisation</h3>
<p>La mondialisation se matérialise dans des flux de nature diverse :</p>
<ul>
<li><strong>Les flux de marchandises :</strong> Le commerce mondial de biens a été multiplié par 300 depuis 1950. La conteneurisation (invention du container standardisé en 1956) a révolutionné le transport maritime, réduisant les coûts et les délais. Le port de Shanghai est le plus grand port à conteneurs du monde.</li>
<li><strong>Les flux de capitaux :</strong> Les investissements directs étrangers (IDE), les flux financiers spéculatifs et les transferts de fonds des migrants représentent des montants colossaux. La Bourse de New York capitalise 25 000 milliards de dollars. Ces flux sont extrêmement mobiles et volatils.</li>
<li><strong>Les flux d'informations :</strong> Internet, les réseaux sociaux et les médias mondiaux (CNN, BBC, Al Jazeera) créent un espace informationnel mondial. La durée de câblage sous-marin parcourant les fonds des océans dépasse 1 million de km.</li>
<li><strong>Les flux humains :</strong> Tourisme (1,8 milliard de touristes internationaux en 2019, avant la pandémie), migrations, mobilité estudiantine et professionnelle.</li>
</ul>

<h3>L'intégration régionale : une mondialisation à plusieurs vitesses</h3>
<p>La mondialisation ne se déploie pas uniformément. Des espaces régionaux d'intégration économique se constituent à des niveaux de profondeur variables :</p>
<p>L'<strong>Union européenne</strong> est l'exemple le plus approfondi d'intégration régionale : marché unique, union douanière, monnaie commune pour 20 États membres, libre circulation des personnes (espace Schengen). Elle constitue le plus grand marché intégré du monde.</p>
<p>L'<strong>ASEAN</strong> (Association des Nations d'Asie du Sud-Est) regroupe 10 pays et vise une intégration économique croissante. Le <strong>Mercosur</strong> (Brésil, Argentine, Uruguay, Paraguay) est le principal bloc d'intégration en Amérique du Sud. L'<strong>USMCA</strong> (anciennement ALENA), accord de libre-échange entre États-Unis, Canada et Mexique, a profondément intégré les économies nord-américaines.</p>

<div class="highlight-box">
<p><strong>Le « trilemme de la mondialisation » de Rodrik :</strong> L'économiste Dani Rodrik soutient qu'il est impossible d'avoir simultanément une hypermondialisation, un État-nation souverain et la démocratie. La mondialisation contraint les États à des arbitrages douloureux entre l'ouverture économique et les choix démocratiques de leurs citoyens.</p>
</div>

<h3>Les critiques de la mondialisation</h3>
<p>La mondialisation suscite des critiques croissantes, exprimées par des mouvements altermondialistes (forum social mondial de Porto Alegre), des partis populistes de droite ou de gauche, et des économistes hétérodoxes :</p>
<ul>
<li><strong>Les inégalités :</strong> Si la mondialisation a contribué à réduire la pauvreté extrême en Asie, elle a accru les inégalités au sein des pays développés. La part des salaires dans la valeur ajoutée a décliné dans la plupart des économies avancées depuis 30 ans.</li>
<li><strong>La désindustrialisation :</strong> Les délocalisations vers les pays à bas salaires ont provoqué une désindustrialisation des pays développés, avec des impacts lourds sur certains territoires (villes minières et industrielles).</li>
<li><strong>Les risques systémiques :</strong> L'interdépendance économique mondiale crée des risques de contagion : la crise financière de 2008 s'est propagée instantanément, la pandémie de Covid-19 a mis en lumière la fragilité des chaînes d'approvisionnement mondiales.</li>
<li><strong>L'impact environnemental :</strong> La mondialisation a stimulé une croissance économique consommatrice de ressources naturelles et productrice de CO₂. Le transport international (maritime et aérien) représente environ 5 % des émissions mondiales.</li>
</ul>
</div>'''

# ----- geopolitique/organisations -----
enrichments['geopolitique/organisations'] = '''<div class="course-content">
<h3>Les organisations internationales : architecture de la gouvernance mondiale</h3>
<p class="resume-text">Les organisations internationales (OI) sont des institutions créées par des États souverains à travers des traités, pour coordonner leurs actions dans des domaines d'intérêt commun. Elles constituent la colonne vertébrale du droit international et de la gouvernance mondiale. On en dénombre aujourd'hui plus de 300, allant des organisations à vocation universelle comme l'ONU aux organismes sectoriels très spécialisés.</p>

<div class="highlight-box">
<p><strong>Distinction clé :</strong> Les organisations intergouvernementales (OIG) réunissent des États et fonctionnent sur le principe de la souveraineté nationale. Les organisations supranationales (comme l'Union européenne) transfèrent une partie de la souveraineté à l'organisation. Les ONG internationales (Croix-Rouge, Amnesty) ne sont ni l'une ni l'autre : elles regroupent des acteurs de la société civile.</p>
</div>

<h3>L'ONU : système des Nations Unies</h3>
<p>L'Organisation des Nations Unies est fondée le 24 octobre 1945, au lendemain de la Seconde Guerre mondiale. Elle réunit aujourd'hui 193 États membres, soit la quasi-totalité des États reconnus. Sa charte fondatrice repose sur quatre objectifs : maintenir la paix et la sécurité internationales, développer des relations amicales entre nations, réaliser la coopération internationale, et harmoniser les actions des nations.</p>
<p>Le <strong>Conseil de sécurité</strong> est l'organe le plus puissant de l'ONU. Il est composé de 15 membres dont 5 permanents (États-Unis, Russie, Chine, France, Royaume-Uni) disposant d'un droit de veto. Cette architecture reflète l'équilibre des puissances de 1945 et fait l'objet de critiques croissantes : les pays émergents (Inde, Brésil, Afrique du Sud) revendiquent une place permanente. Le veto bloque fréquemment les résolutions en cas de conflit impliquant une grande puissance (Syrie, Ukraine).</p>
<p>L'<strong>Assemblée générale</strong> réunit tous les États membres selon le principe « un État, une voix ». Elle adopte des résolutions non contraignantes, mais qui ont une valeur politique et morale. Le <strong>Secrétariat</strong> est l'organe administratif, dirigé par le Secrétaire général (Antonio Guterres depuis 2017). La <strong>Cour internationale de Justice</strong> (CIJ) règle les différends entre États sur base volontaire.</p>

<div class="highlight-box">
<p><strong>Les opérations de maintien de la paix (OMP) :</strong> L'ONU déploie des casques bleus dans des zones de conflit pour maintenir des cessez-le-feu et protéger les populations civiles. En 2023, environ 87 000 soldats et policiers de 125 pays participaient à 12 missions actives. Ces missions ont des résultats mitigés : si elles ont contribué à stabiliser certaines régions (Libéria, Côte d'Ivoire, Timor), elles ont échoué à prévenir des génocides (Rwanda, 1994 ; Srebrenica, 1995).</p>
</div>

<h3>Les agences spécialisées de l'ONU</h3>
<p>Le système onusien comprend une constellation d'agences spécialisées aux mandats très divers :</p>
<ul>
<li><strong>OMS (Organisation Mondiale de la Santé) :</strong> Coordonne les réponses aux pandémies et établit les normes sanitaires internationales. Son rôle dans la gestion du Covid-19 a été controversé.</li>
<li><strong>FAO (Organisation pour l'alimentation et l'agriculture) :</strong> Suit la sécurité alimentaire mondiale, coordonne l'aide alimentaire d'urgence.</li>
<li><strong>UNESCO :</strong> Préserve le patrimoine culturel mondial (liste des sites du Patrimoine mondial), promeut l'éducation et la science.</li>
<li><strong>HCR (Haut-Commissariat aux réfugiés) :</strong> Protège les réfugiés, les demandeurs d'asile et les apatrides dans le monde entier.</li>
<li><strong>UNICEF :</strong> Défend les droits et le bien-être des enfants dans le monde.</li>
<li><strong>PNUD :</strong> Publie le Rapport annuel sur le développement humain et l'IDH ; coordonne l'aide au développement.</li>
</ul>

<h3>L'OTAN : alliance militaire transatlantique</h3>
<p>L'Organisation du Traité de l'Atlantique Nord est une alliance militaire fondée en 1949, à l'initiative des États-Unis, pour contrer la menace soviétique. Son article 5 — principe de défense collective — stipule qu'une attaque contre un membre est considérée comme une attaque contre tous. L'OTAN regroupe aujourd'hui 32 membres (après l'adhésion de la Finlande en 2023 et de la Suède en 2024).</p>
<p>Après la fin de la Guerre froide, l'OTAN a cherché une nouvelle raison d'être, s'engageant dans des opérations hors zone (Balkans dans les années 1990, Afghanistan après le 11 septembre 2001). L'invasion russe de l'Ukraine en 2022 a profondément reconfiguré l'Alliance, relançant les dépenses de défense et suscitant les demandes d'adhésion de la Finlande et de la Suède.</p>

<div class="highlight-box">
<p><strong>L'OTAN en question :</strong> La relation transatlantique au sein de l'OTAN est structurellement déséquilibrée : les États-Unis financent environ 70 % du budget de l'Alliance et assurent l'essentiel de la capacité nucléaire et de commandement. Le président Trump a régulièrement remis en question l'engagement américain, invitant les membres européens à atteindre l'objectif de 2 % du PIB consacrés à la défense.</p>
</div>

<h3>L'OMC et la régulation des échanges commerciaux</h3>
<p>L'Organisation Mondiale du Commerce, créée en 1995 pour succéder au GATT (1947), régule les échanges commerciaux entre ses 164 membres. Elle administre les accords commerciaux, résout les différends et négocie de nouveaux accords. Son principe fondateur est la non-discrimination : chaque membre doit accorder à tous ses partenaires commerciaux les mêmes conditions qu'à son partenaire le plus favorisé (clause de la nation la plus favorisée).</p>
<p>L'OMC est au cœur des tensions entre libéralisme commercial et protectionnisme. Les négociations du Cycle de Doha (depuis 2001) sont au point mort, bloquées notamment sur les subventions agricoles et l'accès aux médicaments génériques. Les guerres commerciales (États-Unis-Chine depuis 2018) et le retour du protectionnisme fragilisent le multilatéralisme commercial.</p>

<h3>Le G7 et le G20 : forums informels de coordination</h3>
<p>Le <strong>G7</strong> (États-Unis, Canada, Royaume-Uni, France, Allemagne, Italie, Japon, plus l'UE) est un forum informel réunissant les démocraties libérales et économies développées. Créé en 1975 après le premier choc pétrolier pour coordonner les réponses économiques, il traite aujourd'hui de tous les grands enjeux mondiaux (climat, sécurité, santé). La Russie en avait été exclue en 2014 après l'annexion de la Crimée.</p>
<p>Le <strong>G20</strong>, créé en 1999 et devenu sommet de chefs d'État après la crise financière de 2008, est plus représentatif : il réunit 20 des principales économies mondiales, représentant 85 % du PIB mondial et 60 % de la population. Il est devenu le principal forum de coordination économique mondiale, mais son caractère informel et ses décisions non contraignantes limitent son efficacité.</p>

<div class="highlight-box">
<p><strong>Vers une réforme de la gouvernance mondiale ? :</strong> La crise de Covid-19, les tensions géopolitiques autour de l'Ukraine et de Taiwan, et l'urgence climatique révèlent les limites de l'architecture de gouvernance mondiale héritée de 1945. Des réformes sont discutées (élargissement du Conseil de sécurité, représentation des pays en développement au FMI), mais les grandes puissances résistent à tout changement qui affaiblirait leur position dominante.</p>
</div>
</div>'''

print("All enrichments prepared. Starting replacement...")

# Apply replacements
for key, new_course_content in enrichments.items():
    if key not in pages:
        print(f"WARNING: key '{key}' not found")
        continue

    content = pages[key]['content']

    # Find the course-content div boundaries
    start_tag = '<div class="course-content">'
    end_tag_candidates = [
        '</div>\n    </section>\n\n    <section class="content-section" id="quiz">',
        '</div>\n      </section>\n\n    <section class="content-section" id="quiz">',
        '</div>\n    </section>\n\n    <section id="quiz"',
    ]

    start_idx = content.find(start_tag)
    end_idx = -1
    end_suffix = ''

    for candidate in end_tag_candidates:
        idx = content.find(candidate)
        if idx != -1:
            end_idx = idx + len('</div>')
            end_suffix = candidate[len('</div>'):]
            break

    if start_idx == -1:
        print(f"ERROR: start tag not found in {key}")
        continue
    if end_idx == -1:
        # Try a more generic approach
        # Find matching </div> for the course-content div
        search_area = content[start_idx:]
        close_section = '\n      </div>\n    </section>'
        idx2 = search_area.find(close_section)
        if idx2 != -1:
            end_idx = start_idx + idx2 + len('</div>')
            end_suffix = '\n    </section>'
        else:
            print(f"ERROR: end tag not found in {key}, trying next approach")
            # Find </div>\n    </section> pattern
            idx3 = content.find('</div>\n    </section>', start_idx)
            if idx3 != -1:
                end_idx = idx3 + len('</div>')
                end_suffix = '\n    </section>'
            else:
                print(f"FAILED to find end for {key}")
                continue

    # Replace the course-content block
    new_content = content[:start_idx] + new_course_content + content[end_idx:]
    pages[key]['content'] = new_content
    new_len = len(new_content)
    print(f"Replaced {key}: {len(content)} -> {new_len} chars")

print("Saving JSON...")
with open('assets/content/geographie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done!")
PYEOF
