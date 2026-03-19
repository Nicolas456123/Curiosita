import json, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/anthropologie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

def replace_course_content(content, new_inner_html):
    """Replace everything inside <div class="course-content"> in the contenu section."""
    marker_start = '<section class="content-section" id="contenu">'

    idx_section = content.find(marker_start)

    cc_open = '<div class="course-content">'
    # Find the course-content div within the contenu section
    idx_cc_open = content.find(cc_open, idx_section)

    # Find the closing of that div — it ends with </div>\n      </div>\n    </section>
    # We need to find the end of the contenu section
    # The contenu section ends before the next <section or before </div></div></div>
    # More robustly: find the next <section after contenu
    next_section = content.find('<section', idx_cc_open + 1)
    if next_section == -1:
        # end of file — find </div>\n    </div>\n    \n    <div class="course-nav">
        next_section = content.find('<div class="course-nav">', idx_cc_open)

    # Find the last </div> before next_section that closes the section
    closing = content.rfind('</div>\n    </section>', idx_cc_open, next_section)
    if closing == -1:
        closing = content.rfind('</div>\n      </div>\n    </section>', idx_cc_open, next_section)

    # Build replacement
    before = content[:idx_cc_open + len(cc_open)]
    after_idx = content.find('</div>', closing) + len('</div>')  # close course-content
    # Actually let's just replace everything from <div class="course-content"> to its closing </div>
    # Then close the section properly

    # Simpler approach: find the exact string pattern
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
# 1. archeologie/prehistoire
# ============================================================
prehistoire_content = """<h3>Naissance de la préhistoire comme discipline</h3>
<p>La préhistoire désigne la période qui précède l'apparition de l'écriture, soit environ 3,3 millions d'années d'histoire humaine avant les premières inscriptions mésopotamiennes (vers 3300 av. J.-C.). En tant que discipline scientifique, elle émerge au XIX<sup>e</sup> siècle : en 1859, la publication par Charles Darwin de <em>L'Origine des espèces</em> et la reconnaissance par Jacques Boucher de Perthes de l'ancienneté des outils en silex de la Somme marquent la naissance d'une science capable d'interroger les origines de l'humanité hors du récit biblique. Gabriel de Mortillet établit ensuite la première séquence chrono-culturelle (acheuléen, moustérien, aurignacien...) qui reste partiellement utilisée aujourd'hui.</p>
<div class="highlight-box"><p><strong>Repère chronologique :</strong> Le Paléolithique inférieur commence avec les premières industries lithiques il y a ~3,3 millions d'années (site de Lomekwi 3, Kenya). Il faut attendre ~300 000 ans pour l'apparition des premiers Homo sapiens anatomiquement modernes en Afrique (Jebel Irhoud, Maroc).</p></div>

<h3>Le Paléolithique inférieur : premiers outils et maîtrise du feu</h3>
<p>Le <strong>Paléolithique inférieur</strong> (~3,3 Ma – 300 000 ans av. J.-C.) voit apparaître successivement les industries oldowayenne (galets aménagés, Olduvai, Tanzanie) puis acheuléenne (bifaces en amande associés à <em>Homo ergaster/erectus</em>). La maîtrise du feu — attestée à Wonderwerk (Afrique du Sud, 1 Ma) et à Terra Amata (France, ~400 000 ans) — transforme radicalement le mode de vie : cuisine des aliments, protection contre les prédateurs, extension des zones d'habitat vers les latitudes froides. Richard Wrangham a proposé que la cuisson des aliments ait permis d'augmenter l'apport calorique et favorisé l'expansion du cerveau chez <em>Homo ergaster</em> — hypothèse du « feu culinaire » qui reste débattue mais influente.</p>

<h3>Le Paléolithique moyen : Néandertaliens et premières pratiques symboliques</h3>
<p>Le <strong>Paléolithique moyen</strong> (~300 000 – 40 000 ans) est associé aux Néandertaliens en Europe et aux premiers Homo sapiens en Afrique. La technique <strong>Levallois</strong> — prédétermination du nucléus pour obtenir des éclats de forme prévue — témoigne de capacités de planification abstraite. Les sépultures néandertaliennes (Shanidar, Irak ; La Chapelle-aux-Saints, France) posent la question de la conscience de la mort et des pratiques symboliques. En Afrique, les sites de Blombos Cave (Afrique du Sud) livrent des perles de coquillage (~75 000 ans) et des blocs d'ocre gravés de motifs géométriques, témoignant de comportements symboliques bien avant le Paléolithique supérieur.</p>

<h3>Le Paléolithique supérieur : l'explosion culturelle</h3>
<p>Le <strong>Paléolithique supérieur</strong> (~40 000 – 12 000 ans av. J.-C.) marque une révolution culturelle : art pariétal (Chauvet, ~36 000 ans ; Lascaux, ~17 000 ans ; Altamira, Espagne), parures (coquillages percés, ocre), statuettes féminines (Vénus de Willendorf, ~25 000 ans), instruments de musique (flûtes en os et ivoire à Hohle Fels, Allemagne, ~40 000 ans). L'outillage se diversifie (burins, grattoirs, sagaies en ivoire). Les humains peuplent l'Australie (~65 000 ans, Madjedbebe) et les Amériques (~15 000-20 000 ans par le détroit de Béring). Cette « révolution du Paléolithique supérieur » a longtemps été présentée comme une mutation cognitive soudaine en Europe — mais les découvertes africaines et australiennes la montrent comme un processus gradual de plusieurs dizaines de milliers d'années.</p>
<div class="highlight-box"><p><strong>Grotte Chauvet (Ardèche, France) :</strong> Datée par radiocarbone à ~36 000 ans, c'est l'une des plus anciennes grottes ornées connues. Ses peintures de rhinocéros laineux, mammouths, lions des cavernes et ours témoignent d'une maîtrise artistique stupéfiante — perspective, modelé, mouvement. Werner Herzog lui a consacré un documentaire en 3D (<em>La Caverne des rêves perdus</em>, 2010).</p></div>

<h3>Le Mésolithique : adaptation à l'après-glaciaire</h3>
<p>Avec la fin du Würm (~12 000 ans av. J.-C.), le réchauffement climatique transforme les écosystèmes. Le <strong>Mésolithique</strong> (~12 000 – 7 000 av. J.-C.) voit des groupes de chasseurs-cueilleurs s'adapter à de nouveaux environnements (forêts tempérées, zones côtières riches). Les <strong>microlithes</strong> — minuscules lames insérées dans des hampes en bois pour former des flèches composites — témoignent d'une inventivité technique remarquable. Les <em>kjökkenmöddinger</em> (amas coquilliers danois) révèlent une exploitation intensive des ressources marines. Les cimetières collectifs (Skateholm, Suède ; Vedbaek, Danemark) indiquent des sociétés structurées avec des formes d'inégalité sociale naissante.</p>

<h3>La révolution néolithique : agriculture, élevage, sédentarisation</h3>
<p>Vers 10 000 av. J.-C., dans le <strong>Croissant fertile</strong> (Proche-Orient), une transformation majeure de l'économie de subsistance se produit : domestication des céréales (engrain, amidonnier), des légumineuses (lentilles, pois) et des animaux (mouton, chèvre, puis bœuf et porc). Ce processus — baptisé « révolution néolithique » par Gordon Childe en 1936 — est un ensemble de transitions indépendantes sur plusieurs millénaires dans au moins sept foyers (Proche-Orient, Chine du Nord, Chine du Sud, Nouvelle-Guinée, Sahel africain, Mésoamérique, Andes).</p>
<p>La sédentarisation entraîne des transformations profondes : <strong>architecture en dur</strong> (Çatalhöyük, Turquie, ~7400 av. J.-C. : 8000 habitants, maisons mitoyennes sans rues), <strong>stockage</strong> (greniers, céramique), <strong>spécialisation artisanale</strong>, croissance démographique, et avec elle, les premières épidémies dues à la promiscuité avec les animaux domestiques. La sédentarité crée aussi les conditions de l'accumulation de richesses et de la stratification sociale.</p>
<div class="highlight-box"><p><strong>Göbekli Tepe (Turquie, ~9600 av. J.-C.) :</strong> Site mégalithique construit par des chasseurs-cueilleurs <em>avant</em> la domestication locale. Ses piliers en T de 5 mètres ornés d'animaux remettent en question l'idée que la religion organisée est une conséquence de l'agriculture — peut-être en était-elle une cause.</p></div>

<h3>L'âge des métaux et la complexification sociale</h3>
<p>Le <strong>Chalcolithique</strong> (~5000-3000 av. J.-C.) voit apparaître la métallurgie du cuivre. Le <strong>Bronze</strong> (alliage étain-cuivre, ~3300 av. J.-C.) suppose des réseaux d'échange à longue distance pour obtenir l'étain (Cornwall, Afghanistan). L'<strong>Âge du Fer</strong> (~1200 av. J.-C.) démocratise les outils agricoles et les armes. Ces transitions métallurgiques s'accompagnent partout d'une complexification sociale : élites guerrières, commerce longue distance, fortifications, premières cités-États. La « crise de 1200 av. J.-C. » — effondrement simultané de nombreuses cultures de l'Âge du Bronze méditerranéen — est l'un des grands mystères de l'archéologie, probablement liée à une conjonction de sécheresses, migrations et désorganisation des réseaux commerciaux.</p>"""

pages['archeologie/prehistoire']['content'] = replace_course_content(
    pages['archeologie/prehistoire']['content'],
    prehistoire_content
)
print(f"archeologie/prehistoire: {len(pages['archeologie/prehistoire']['content'])} chars")

# ============================================================
# 2. archeologie/datation
# ============================================================
datation_content = """<h3>Chronologie relative : lire le temps dans le sol</h3>
<p>Avant l'essor des méthodes physico-chimiques, les archéologues dataient les vestiges par <strong>chronologie relative</strong> — en établissant des rapports de contemporanéité ou d'antériorité entre les objets, sans valeur calendaire absolue. Le principe fondamental est la <strong>loi de superposition des strates</strong> (Nicolas Steno, 1669) : dans une séquence stratigraphique non perturbée, les couches inférieures sont plus anciennes que les couches supérieures. Combiné à la <strong>sériation typologique</strong> — classer les formes céramiques, les styles lithiques ou les monnaies par évolution progressive — ce principe permet de construire des séquences cohérentes. Auguste Pitt Rivers et Flinders Petrie en Égypte ont affiné cette approche jusqu'en outil de précision remarquable pour les chronologies relatives.</p>
<div class="highlight-box"><p><strong>Principe des fossiles directeurs :</strong> Certains objets ou espèces animales ont une durée d'existence très courte et une large diffusion géographique (un style de fibule, un type de poterie). Leur présence dans une couche permet de la dater par corrélation avec d'autres sites où la même forme est associée à une date connue — exactement comme les paléontologues datent les roches par leurs fossiles caractéristiques.</p></div>

<h3>La dendrochronologie : les arbres comme calendrier</h3>
<p>Les arbres forment chaque année un nouveau cerne de croissance, dont l'épaisseur varie selon les conditions climatiques. En comparant les séquences de cernes entre spécimens vivants, bois historiques et bois archéologiques, on construit des <strong>chronologies maîtresses</strong> absolues. La dendrochronologie permet de dater avec une précision annuelle (voire saisonnière) les constructions en bois, les épaves, les cercueils. En Europe, la chronologie de chêne couvre plus de 11 000 ans. Elle sert aussi d'<strong>étalon de calibration</strong> pour le radiocarbone : les mesures C14 sur des bois à date dendrochronologique connue permettent d'établir les courbes de calibration internationales (IntCal20).</p>

<h3>Le radiocarbone (carbone 14) : révolution absolue</h3>
<p>Développée par Willard Libby (Prix Nobel 1960), la méthode au <strong>carbone 14</strong> repose sur la désintégration radioactive du ¹⁴C dans la matière organique (os, charbon de bois, textile, coquilles). Les organismes vivants absorbent en permanence du ¹⁴C produit dans l'atmosphère par les rayons cosmiques. À leur mort, l'absorption cesse et le ¹⁴C se désintègre avec une demi-vie de ~5730 ans. En mesurant le ratio ¹⁴C/¹²C restant, on calcule le temps écoulé depuis la mort. La méthode est applicable de ~300 à ~50 000 ans BP.</p>
<p>Son principal défi est la <strong>variation de la teneur atmosphérique en ¹⁴C</strong> au cours du temps, nécessitant une calibration par les courbes IntCal. L'<strong>accélérateur de spectrométrie de masse (AMS)</strong>, apparu dans les années 1980, permet de dater des échantillons de quelques milligrammes seulement — révolutionnant l'archéologie en permettant le prélèvement sur des objets précieux ou rares (un fragment de parchemin, un fil de tissu). L'<strong>effet réservoir marin</strong> (les organismes marins absorbent du carbone vieux) et la <strong>contamination post-dépositionnelle</strong> (échanges de carbone avec l'environnement) sont les principaux biais à contrôler.</p>
<div class="highlight-box"><p><strong>Le linceul de Turin :</strong> En 1988, trois laboratoires indépendants (Oxford, Zurich, Tucson) datent par AMS le linceul de Turin entre 1260 et 1390 ap. J.-C., concluant à une origine médiévale. Cette datation est contestée par certains chercheurs qui invoquent une contamination bactérienne ou un incendie, mais elle illustre la puissance et les limites de la méthode.</p></div>

<h3>Thermoluminescence et luminescence stimulée optiquement (OSL)</h3>
<p>Ces méthodes mesurent l'énergie lumineuse libérée par des cristaux (quartz, feldspath) qui ont accumulé des électrons piégés par les rayonnements naturels depuis leur dernière exposition à la chaleur ou à la lumière. La <strong>thermoluminescence (TL)</strong> date les céramiques (dont la cuisson a remis le « compteur » à zéro) et les sédiments brûlés — applicable entre quelques siècles et quelques centaines de milliers d'années. La <strong>luminescence stimulée optiquement (OSL)</strong> date les grains de sable ou de loess dont le dernier blanchiment solaire est l'événement daté. Ces méthodes comblent un vide entre le radiocarbone (~50 000 ans) et les méthodes isotopiques de longue portée. La datation OSL de la grotte de Blombos (Afrique du Sud) a confirmé des comportements symboliques vieux de ~75 000 ans.</p>

<h3>Potassium-argon et argon-argon</h3>
<p>Pour dater les vestiges du Pléistocène ancien (plus d'un million d'années) et les premiers hominidés (plusieurs millions d'années), la méthode <strong>potassium-argon (K-Ar)</strong> exploite la désintégration du ⁴⁰K en ⁴⁰Ar (demi-vie : 1,25 milliard d'années) dans les roches volcaniques. Elle a permis de dater les lits de Olduvai (premiers outils et Australopithecus), les couches de Laetoli (empreintes de bipèdes à 3,6 Ma) et les gisements éthiopiens (Hadar, Lucy à 3,2 Ma). La version <strong>Ar-Ar</strong>, plus précise, chauffe sélectivement l'échantillon par laser pour obtenir des paliers d'âge et détecter les perturbations post-dépositionnelles.</p>

<h3>Uranium-thorium, ESR et archéomagnétisme</h3>
<p>La méthode <strong>uranium-thorium (U-Th)</strong> date les concrétions calcaires (spéléothèmes, coraux, émail dentaire) entre ~10 000 et 600 000 ans — très utile pour les sites en grotte. La <strong>résonance des spins électroniques (ESR)</strong> date l'émail dentaire fossile entre quelques milliers et quelques millions d'années. L'<strong>archéomagnétisme</strong> exploite la rémanence magnétique enregistrée dans les céramiques et foyers lors du refroidissement, comparée aux courbes de variation du champ magnétique terrestre. Chaque méthode a son domaine d'application optimal — leur combinaison au sein d'un même site est la meilleure garantie de robustesse chronologique.</p>

<h3>La chronométrie bayésienne : combiner les données</h3>
<p>La datation moderne ne se contente plus d'une méthode unique. Les archéologues utilisent des <strong>modèles bayésiens</strong> intégrant plusieurs dates C14, des données dendrochronologiques et des archives textuelles pour produire des probabilités statistiques d'âge plutôt que de fausses précisions ponctuelles. Les logiciels <em>OxCal</em> (Oxford) et <em>BCal</em> permettent de modéliser des séquences stratigraphiques complexes. Cette approche a permis de comprimer ou d'allonger des chronologies entières — ainsi la construction de Stonehenge a été redatée avec une précision de quelques décennies pour chacune de ses phases (modèle bayésien de Darvill et Wainwright, 2012), ou la durée d'Hiérarchie de Jéricho réduite à quelques générations là où on supposait des siècles.</p>"""

pages['archeologie/datation']['content'] = replace_course_content(
    pages['archeologie/datation']['content'],
    datation_content
)
print(f"archeologie/datation: {len(pages['archeologie/datation']['content'])} chars")

# ============================================================
# 3. archeologie/methodes
# ============================================================
methodes_content = """<h3>La prospection : trouver avant de fouiller</h3>
<p>Toute fouille commence par une phase de <strong>prospection</strong> visant à identifier et cartographier les sites potentiels. La prospection pédestre (<em>survey</em>) consiste à couvrir systématiquement un terrain en équipe, ramassant les artefacts de surface et notant leur localisation GPS. Les techniques de <strong>télédétection</strong> ont révolutionné cette phase : la photographie aérienne révèle les anomalies de végétation trahissant des structures enfouies (<em>cropmarks</em>), l'infrarouge thermique détecte des différences de rétention d'humidité, et le <strong>LiDAR</strong> (Light Detection and Ranging) — laser aérien pénétrant le couvert végétal — a permis de découvrir sous la jungle cambodgienne une mégapole autour d'Angkor (2012) ou des centaines de sites mayas au Guatemala (2018), invisibles depuis le sol.</p>
<div class="highlight-box"><p><strong>LiDAR et cités perdues :</strong> En 2018, le projet PACUNAM LiDAR Initiative a révélé sous 2100 km² de jungle guatémaltèque plus de 60 000 structures mayas inconnues — forteresses, terrasses agricoles, canaux d'irrigation. Une ville supposée de quelques dizaines de milliers d'habitants serait en réalité une métropole de plusieurs millions, transformant notre compréhension de la densité démographique maya classique.</p></div>
<p>Les méthodes géophysiques complètent la prospection sans fouille : le <strong>géoradar (GPR)</strong> envoie des ondes électromagnétiques dans le sol et mesure leurs réflexions sur les interfaces de matériaux différents ; la <strong>magnétométrie</strong> détecte les anomalies du champ magnétique causées par des foyers, fours ou fossés ; la <strong>résistivité électrique</strong> cartographie les différences de conductivité entre sols meubles, maçonneries et fossés. Ces méthodes permettent de produire des plans complets de sites sans déplacement d'un gramme de terre — ce qui est particulièrement précieux pour les sites fragiles ou classés.</p>

<h3>La stratigraphie et les méthodes de fouille</h3>
<p>La <strong>stratigraphie archéologique</strong> — lecture des couches de sol successives — est le fondement de toute interprétation chronologique et contextuelle. Les couches (unités stratigraphiques, US) se déposent par accumulation naturelle ou anthropique, et leur séquence enregistre l'histoire du site. La <strong>matrice de Harris</strong> (inventée par Edward Harris en 1973) est un diagramme standardisé représentant les relations stratigraphiques entre toutes les unités d'un chantier, permettant de les ordonner en séquence relative.</p>
<p>Deux grandes méthodes de fouille s'affrontent. La méthode des <strong>tranchées et carroyage</strong> (quadrillage régulier avec bermes témoins) permet de conserver des coupes stratigraphiques visibles. La <strong>fouille en aire ouverte</strong> (<em>open area excavation</em>), développée par Philip Barker, décape horizontalement de larges surfaces couche par couche, révélant les plans de bâtiments et les relations spatiales entre structures — essentielle pour les sites à stratigraphie peu épaisse ou les sites du haut Moyen Âge. Les deux approches sont souvent combinées selon les contextes.</p>

<h3>L'enregistrement : documenter chaque geste</h3>
<p>Un principe fondamental est l'<strong>irréversibilité de la fouille</strong> : fouiller, c'est détruire un contexte unique. D'où l'impératif d'un enregistrement exhaustif. Chaque unité stratigraphique fait l'objet d'une fiche descriptive (texture, couleur Munsell, limite, inclusion), d'un plan coté et d'une photographie. Les objets mobiliers sont localisés en trois dimensions (x, y, z), photographiés in situ avant prélèvement. Les prélèvements de sédiments (pour tamisage, flottation, analyses chimiques, palynologie) sont systématiquement effectués. La <strong>photogrammétrie</strong> et le <strong>scan 3D</strong> permettent aujourd'hui de modéliser en trois dimensions l'ensemble du chantier, créant un « jumeau numérique » de la fouille consultable après sa destruction physique.</p>

<h3>Les types de vestiges : artefacts, écofacts, structures</h3>
<p>On distingue les <strong>artefacts</strong> (objets fabriqués : céramiques, outils, parures), les <strong>écofacts</strong> (restes naturels porteurs d'information : os animaux, graines, pollens, charbons) et les <strong>structures</strong> (aménagements immobiles : foyers, fossés, murs, sépultures). L'analyse des <strong>macro-restes botaniques</strong> par flottation des sédiments reconstitue les pratiques agricoles. La <strong>palynologie</strong> (pollens conservés en milieu humide) révèle les paléoenvironnements et les déboisements anthropiques. La <strong>zooarchéologie</strong> (étude des os animaux) révèle les pratiques de chasse, d'élevage, de boucherie et les régimes alimentaires.</p>
<div class="highlight-box"><p><strong>L'analyse des isotopes stables</strong> (carbone, azote, strontium, oxygène dans le collagène osseux ou l'émail dentaire) permet de reconstituer le régime alimentaire individuel, les migrations géographiques et même l'âge du sevrage. L'individu de Stonehenge surnommé l'« archer de Amesbury » (2300 av. J.-C.) avait grandi en région alpine — révélé par ses isotopes de strontium, qui reflètent la géochimie des roches ingérées via l'eau de boisson.</p></div>

<h3>L'archéologie préventive</h3>
<p>L'expansion urbaine et les grands travaux (autoroutes, TGV, zones industrielles) ont entraîné depuis les années 1960 la destruction massive de sites archéologiques. En réponse, la plupart des pays européens ont institué l'<strong>archéologie préventive</strong> : tout projet d'aménagement en zone sensible doit être précédé d'un diagnostic archéologique (sondages mécaniques couvrant 5-10 % de la surface). Si des vestiges significatifs sont découverts, une fouille de sauvetage est imposée au maître d'ouvrage. En France, l'<strong>INRAP</strong> (Institut national de recherches archéologiques préventives, créé en 2002) réalise chaque année plus de 2000 diagnostics. Cette pratique a permis des découvertes majeures : nécropole gauloise de Gondole, fortifications romaines de Lyon, thermes antiques sous la gare Saint-Lazare à Paris.</p>

<h3>Conservation et restauration du mobilier archéologique</h3>
<p>La conservation des objets archéologiques commence sur le chantier : conditionnement adapté (sacs hermétiques pour les matériaux organiques, eau pour les objets gorgés d'eau comme les bois et cuirs), étiquetage précis et transport contrôlé. En laboratoire, les <strong>restaurateurs-conservateurs</strong> nettoient, stabilisent et documentent les objets. Les techniques incluent la consolidation sous vide, la lyophilisation des bois et textiles, la radiographie pour révéler des structures internes sans désassemblage. La <strong>réplique numérique</strong> (impression 3D à partir de scans) permet une diffusion et une étude sans manipulation de l'original fragile.</p>
<p>La question du retour des objets archéologiques aux pays d'origine est un enjeu éthique et politique majeur : marbres du Parthénon (Grèce vs British Museum), trésor de Priam (Turquie vs Russie), bronzes du Bénin (Nigeria vs musées européens et américains). Le <strong>trafic illicite d'antiquités</strong> — alimenté par les conflits armés au Proche-Orient et en Afrique — représente la troisième source de revenus du crime organisé mondial, selon l'UNESCO.</p>"""

pages['archeologie/methodes']['content'] = replace_course_content(
    pages['archeologie/methodes']['content'],
    methodes_content
)
print(f"archeologie/methodes: {len(pages['archeologie/methodes']['content'])} chars")

# ============================================================
# 4. archeologie/contemporaine
# ============================================================
contemporaine_content = """<h3>Naissance et définition de l'archéologie contemporaine</h3>
<p>Longtemps associée à l'Antiquité ou à la Préhistoire, l'archéologie a progressivement étendu son regard vers des périodes récentes. L'<strong>archéologie contemporaine</strong> — parfois appelée archéologie du présent, archéologie industrielle ou archéologie des conflits — étudie les vestiges matériels des XIX<sup>e</sup> et XX<sup>e</sup> siècles. Paradoxalement, cette période est mieux documentée par les archives écrites que n'importe quelle époque antérieure, ce qui pose une question épistémologique centrale : pourquoi fouiller ce que l'on peut lire ? La réponse tient à la <strong>complémentarité de la culture matérielle et des sources écrites</strong> : les objets révèlent ce que les documents taisent — les pratiques quotidiennes, les stratégies de survie, les hiérarchies sociales incarnées dans l'espace bâti.</p>
<div class="highlight-box"><p><strong>Projet Tucson Garbage Project (1973-2000) :</strong> L'anthropologue William Rathje a analysé systématiquement les ordures ménagères américaines. Résultat : les déchets révèlent une consommation d'alcool et de malbouffe bien supérieure à ce que les habitants déclarent en enquête — montrant l'écart permanent entre discours normatif et pratiques réelles, que seule la culture matérielle peut révéler.</p></div>

<h3>L'archéologie industrielle</h3>
<p>L'<strong>archéologie industrielle</strong> s'est constituée en discipline au Royaume-Uni dans les années 1950-1960, avec l'intérêt pour les infrastructures de la première révolution industrielle : canaux, voies ferrées, usines textiles, mines de charbon, hauts fourneaux. Elle s'attache à documenter, inventorier et parfois restaurer les témoins bâtis de l'ère industrielle avant leur démolition. En France, les enquêtes du CILAC ont révélé la richesse du patrimoine industriel : hauts fourneaux de Lorraine, filatures de Normandie, salines de Franche-Comté, citernes à gaz parisiens. La reconversion de ces sites en musées, écomusées ou lofts représente un enjeu d'aménagement du territoire et de mémoire ouvrière. Le site du Creusot-Montceau (Saône-et-Loire), berceau de la sidérurgie française, est un exemple canonique de ce patrimoine revendiqué par les ouvriers eux-mêmes.</p>

<h3>L'archéologie sous-marine</h3>
<p>Environ 3 millions d'épaves reposent sur les fonds marins, fluviaux et lacustres — représentant un réservoir exceptionnel de témoins archéologiques, souvent préservés dans des conditions bien supérieures aux sites terrestres (absence d'oxygène et de micro-organismes aérobies). L'<strong>archéologie sous-marine</strong> moderne naît avec les travaux pionniers de Frédéric Dumas et Philippe Tailliez dans les années 1950 sur l'épave du Grand Congloué. Elle requiert des techniques spécifiques : plongée en scaphandre ou ROV (robot sous-marin téléopéré), relevés photogrammétriques en 3D, prélèvements sous pression.</p>
<p>Les épaves majeures incluent le <em>Mary Rose</em> (vaisseau d'Henri VIII, coulé en 1545, Portsmouth), le <em>Vasa</em> (galion suédois coulé en 1628, musée de Stockholm), les épaves puniques de Marsala (Sicile, III<sup>e</sup> s. av. J.-C.) et le navire marchand de la Madrague de Giens (I<sup>er</sup> s. av. J.-C., France). La <strong>Convention UNESCO de 2001 sur le patrimoine culturel subaquatique</strong> établit le principe de préservation in situ et interdit l'exploitation commerciale des épaves — en réaction aux pillages de galions espagnols par des sociétés privées de chasse au trésor.</p>

<h3>L'archéologie des conflits contemporains</h3>
<p>Les deux guerres mondiales ont laissé des paysages archéologiques considérables : tranchées de la Somme et des Flandres (en cours de fouille et d'inventaire), camps de concentration et d'extermination (Auschwitz-Birkenau, Sobibor, Treblinka), champs de bataille du Pacifique, épaves d'avions et de navires. L'<strong>archéologie des conflits</strong> applique les méthodes archéologiques standard à ces contextes particuliers. Ses apports sont multiples : identification médico-légale des victimes (ADN, dentisterie forensique), compréhension des conditions de vie dans les tranchées (matériel personnel, adaptations du mobilier récupéré), et documentation des sites de violence extrême.</p>
<p>En France, le service de déminage et les archéologues de l'INRAP collaborent régulièrement pour fouiller des soldats de 14-18 découverts dans leur tranchée lors de travaux agricoles. En Croatie et en Bosnie, les fouilles des fosses communes de la guerre de 1991-1995 ont produit des preuves pour les tribunaux internationaux. Ces fouilles posent des questions éthiques spécifiques : comment traiter les restes humains récents, quels droits pour les familles des victimes, comment articuler archéologie scientifique et deuil mémoriel.</p>

<h3>L'archéologie forensique</h3>
<p>À l'interface de l'archéologie et des sciences médico-légales, l'<strong>archéologie forensique</strong> applique les méthodes de fouille et de documentation archéologique à des contextes criminels ou humanitaires : fosses communes, scènes de crime historiques, catastrophes de masse. Elle requiert une rigueur procédurale extrême car ses données peuvent constituer des preuves judiciaires.</p>
<div class="highlight-box"><p><strong>Srebrenica, juillet 1995 :</strong> Le massacre de plus de 8000 Bosniaques musulmans a été documenté en partie par des fouilles archéologiques forensiques des fosses communes. Ces travaux, menés notamment par l'équipe du médecin légiste William Haglund, ont permis d'identifier 7000 victimes par ADN mitochondrial et ont fourni des preuves déterminantes pour les condamnations du TPIY. L'archéologie y est devenue instrument de justice internationale.</p></div>
<p>Des équipes forensiques d'archéologues ont également travaillé sur les disparus des dictatures chilienne et argentine (Plan Condor, 1970-1980), les victimes du génocide au Rwanda (1994), et les fosses de la guerre civile espagnole (1936-1939) dans le cadre du mouvement de mémoire historique espagnol. L'<strong>Équipe argentine d'anthropologie forensique (EAAF)</strong>, fondée en 1984, est devenue une référence mondiale dans ce domaine.</p>

<h3>L'archéologie du quotidien et des déchets modernes</h3>
<p>Des archéologues comme John Schofield au Royaume-Uni ont étudié les vestiges de la contre-culture (sites punk, squats, raves) pour comprendre des phénomènes sociaux documentés par peu d'archives officielles. L'étude des décharges contemporaines et des traces matérielles du quotidien ouvre une fenêtre critique sur nos sociétés de consommation. Ces approches posent in fine une question philosophique fondamentale : qu'est-ce qui mérite d'être préservé pour les générations futures ? Et qui décide du patrimoine de demain — les États, les communautés locales, les disciplines académiques ou le marché ?</p>"""

pages['archeologie/contemporaine']['content'] = replace_course_content(
    pages['archeologie/contemporaine']['content'],
    contemporaine_content
)
print(f"archeologie/contemporaine: {len(pages['archeologie/contemporaine']['content'])} chars")

# ============================================================
# 5. archeologie/civilisations
# ============================================================
civilisations_content = """<h3>Qu'est-ce qu'une civilisation ? Définitions et débats</h3>
<p>Le terme « civilisation » est l'un des plus chargés et contestés des sciences humaines. L'archéologie l'opérationnalise par des critères matériels : présence de l'écriture ou d'un système de comptabilité complexe, architecture monumentale, densité urbaine, spécialisation artisanale, réseaux d'échange à longue distance, système centralisé de redistribution. Gordon Childe synthétisa ces critères dans sa notion de « révolution urbaine » (1950). Cette grille a été critiquée pour son ethnocentrisme (peut-on parler de « civilisation » inca sans écriture alphabétique ?) mais reste une référence heuristique utile. L'anthropologie contemporaine lui préfère « société complexe » ou « État précoce », soulignant que toutes les cultures humaines ont une sophistication propre.</p>

<h3>La Mésopotamie : le berceau de l'écriture et de la ville</h3>
<p>Entre le Tigre et l'Euphrate (actuel Irak), les premières cités-États émergent au IV<sup>e</sup> millénaire av. J.-C. Uruk (~4000-3100 av. J.-C.) est la plus ancienne métropole connue : 40 000 habitants, temples sur ziggourats, ateliers spécialisés, bureaucratie naissante. L'écriture <strong>cunéiforme</strong> naît à Uruk vers 3300 av. J.-C. comme outil de comptabilité (tablettes d'argile enregistrant des rations d'orge), avant de devenir le vecteur de la littérature, du droit et de la mythologie. Le <strong>Code d'Hammurabi</strong> (Babylone, ~1754 av. J.-C.) — stèle de basalte de 2,25 m gravée de 282 lois — est l'un des premiers codes juridiques écrits. L'<strong>Épopée de Gilgamesh</strong> est le premier grand récit littéraire de l'humanité, contenant une version du déluge antérieure à la Genèse biblique. Les fouilles de Ur (Leonard Woolley, 1922-1934) ont révélé des tombes royales avec sacrifices humains et une extraordinaire orfèvrerie en or, lapis-lazuli et cornaline.</p>
<div class="highlight-box"><p><strong>L'écriture cunéiforme :</strong> Utilisée pendant plus de 3000 ans dans au moins quinze langues (sumérien, akkadien, hittite, ougaritique...), le cunéiforme fut déchiffré au XIX<sup>e</sup> siècle par Henry Rawlinson grâce à l'inscription trilingue de Béhistoun (en vieux perse, élamite et babylonien). Plus d'un million de tablettes cunéiformes sont connues, dont seulement une fraction a été publiée.</p></div>

<h3>L'Égypte pharaonique : 3000 ans de continuité</h3>
<p>La civilisation égyptienne — unifiée vers 3150 av. J.-C. par le roi Narmer — est remarquable par sa <strong>continuité de 3000 ans</strong> (de la période archaïque à la conquête d'Alexandre en 332 av. J.-C.). Sa permanence repose sur des conditions géographiques exceptionnelles : la crue annuelle du Nil fertilise une bande de quelques kilomètres dans un désert inhospitalier, créant une isolation naturelle. L'archéologie égyptologique a livré des monuments d'une ampleur sans égale : les pyramides de Gizeh (la Grande Pyramide de Khéops, ~2560 av. J.-C., pesant environ 6 millions de tonnes), les temples de Karnak et Louxor, la Vallée des Rois. La découverte en 1922 de la tombe de Toutânkhamon par Howard Carter — la seule tombe royale du Nouvel Empire retrouvée pratiquement intacte — a révélé 5000 objets d'une richesse extraordinaire. La déchiffration des hiéroglyphes par Jean-François Champollion en 1822 (grâce à la Pierre de Rosette) a ouvert l'accès direct à la littérature, la médecine, la religion et l'administration égyptiennes.</p>

<h3>La civilisation de l'Indus : la grande inconnue</h3>
<p>La <strong>civilisation de l'Indus</strong> (~2600-1900 av. J.-C.) est la plus étendue des civilisations anciennes — ~700 sites sur 1,2 million km², couvrant l'actuel Pakistan et nord-ouest de l'Inde. Ses villes principales — Mohenjo-daro et Harappa — témoignent d'un urbanisme d'une régularité stupéfiante : rues en damier, système de drainage et d'égouts sophistiqué avec fosses septiques, bains collectifs, maisons à deux étages en briques standardisées. Son <strong>écriture</strong> (plus de 400 signes sur des sceaux en stéatite) reste à ce jour <strong>indéchiffrée</strong>. L'absence de palais identifiables, de tombes royales spectaculaires et d'armement en grande quantité suggère une organisation politique différente des autres civilisations antiques — peut-être des cités-États gérées par des élites marchandes plutôt que des rois divins. Le déclin rapide vers 1900 av. J.-C. est probablement lié à des changements climatiques (aridification, déplacement des moussons).</p>

<h3>La Chine ancienne : bronzes rituels et royaumes dynastiques</h3>
<p>Les dynasties Shang (~1600-1046 av. J.-C.) et Zhou (~1046-256 av. J.-C.) ont laissé un patrimoine archéologique exceptionnel. La culture Shang est connue par ses <strong>bronzes rituels</strong> (vases tripodes, cloches) d'une perfection technique remarquable, fondus en moules en terre cuite composites. L'écriture chinoise archaïque apparaît sur des <strong>os oraculaires</strong> (plastrons de tortues et omoplates de bœuf) utilisés pour la divination. Les fouilles d'Anyang (capitale Shang) ont révélé des tombes royales avec sacrifices humains. La découverte en 1974 de l'<strong>armée de terre cuite</strong> de l'Empereur Qin Shi Huang (~210 av. J.-C.) — plus de 8000 soldats grandeur nature, chacun aux traits individualisés — reste l'une des découvertes les plus spectaculaires de l'archéologie mondiale. Des analyses génomiques récentes indiquent que les ouvriers venus de tout l'empire ont été inhumés sur place — premier exemple documenté de déplacement de population à grande échelle en Chine ancienne.</p>

<h3>Les Amériques précolombiennnes</h3>
<p>Indépendamment de l'Ancien Monde, des sociétés complexes se développent en Mésoamérique et dans les Andes. Les <strong>Olmèques</strong> (~1500-400 av. J.-C., Mexique), souvent appelés « civilisation-mère » mésoaméricaine, introduisent le calendrier de 260 jours, le jeu de balle et une iconographie (têtes géantes en basalte, homme-jaguar) qui perdurera chez les Maya et les Aztèques. La civilisation <strong>Maya</strong> (~250-900 ap. J.-C. pour la période classique) développe l'unique écriture entièrement phonétique des Amériques, un système mathématique incluant le zéro, une astronomie permettant de prédire les éclipses, et construit des cités comme Tikal et Palenque dans les forêts tropicales. Dans les Andes, les <strong>Incas</strong> (~1438-1532) construisent en moins d'un siècle le plus grand empire précolombien (~10 millions de sujets), organisé par un réseau de 40 000 km de routes et des <em>quipus</em> (cordes à nœuds) comme système de mémorisation et de comptabilité.</p>
<div class="highlight-box"><p><strong>Machu Picchu (Pérou, ~1450 ap. J.-C.) :</strong> Cette citadelle inca construite à 2430 m d'altitude dans les Andes combine des terrasses agricoles, des temples astronomiques et des habitations en pierres taillées à sec avec une précision millimétriques. Découverte par l'explorateur américain Hiram Bingham en 1911, elle reste l'un des sites archéologiques les plus visités du monde.</p></div>

<h3>Effondrements et continuités civilisationnelles</h3>
<p>L'histoire des civilisations antiques est jalonnée d'effondrements qui fascinent les historiens. La « crise de 1200 av. J.-C. » voit s'effondrer simultanément les palais mycéniens, l'Empire hittite et les cités levantines d'Ougarit, probablement sous la conjonction d'invasions des « Peuples de la Mer », de famines, de séismes et de la désorganisation des réseaux commerciaux. La chute de l'Empire romain d'Occident (476 ap. J.-C.) réduit la production céramique et la taille des agglomérations pendant plusieurs siècles — lisible archéologiquement dans les couches de « dark earth » des fouilles urbaines. Ces effondrements ne sont jamais totaux : des éléments de la civilisation précédente (techniques, croyances, réseaux sociaux) survivent et alimentent la suivante.</p>"""

pages['archeologie/civilisations']['content'] = replace_course_content(
    pages['archeologie/civilisations']['content'],
    civilisations_content
)
print(f"archeologie/civilisations: {len(pages['archeologie/civilisations']['content'])} chars")

# Save
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/anthropologie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved batch 1 (5 archeologie articles)")
