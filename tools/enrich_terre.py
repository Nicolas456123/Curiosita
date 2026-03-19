import json, re, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/terre.json','r',encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ---- HELPER ----
def replace_intro_and_contenu(page_key, new_intro_inner, new_contenu_inner):
    """Replace intro resume-text+highlight-box and contenu div.course-content"""
    content = pages[page_key]['content']
    # Replace intro section
    content = re.sub(
        r'(<section class="content-section" id="introduction">.*?<div class="section-header">.*?</div>\s*)(.*?)(</section>)',
        lambda m: m.group(1) + new_intro_inner + m.group(3),
        content, flags=re.DOTALL, count=1
    )
    # Replace contenu course-content div
    content = re.sub(
        r'(<section class="content-section" id="contenu">.*?<div class="course-content">)(.*?)(</div>\s*</section>)',
        lambda m: m.group(1) + new_contenu_inner + m.group(3),
        content, flags=re.DOTALL, count=1
    )
    pages[page_key]['content'] = content

def insert_before_quiz(page_key, extra_html):
    """Insert extra HTML at the end of contenu div.course-content, before closing tags"""
    content = pages[page_key]['content']
    # Find end of course-content div before quiz section
    content = re.sub(
        r'(</div>\s*</section>\s*<section class="content-section" id="quiz">)',
        extra_html + r'\1',
        content, count=1, flags=re.DOTALL
    )
    pages[page_key]['content'] = content

# ============================================================
# VOLCANISME/VOLCANS — full rewrite of intro + contenu
# ============================================================
replace_intro_and_contenu('volcanisme/volcans',
    '''
      <p class="resume-text">Un volcan est une structure géologique par laquelle du magma remonte depuis les profondeurs de la Terre pour s'épancher en surface sous forme de lave, de gaz et de fragments solides. Les volcans sont présents sur tous les continents et dans tous les océans ; ils façonnent les paysages, fertilisent les sols et régulent partiellement le climat.</p>
      <div class="highlight-box"><p><strong>Chiffre clé :</strong> on dénombre environ 1 500 volcans potentiellement actifs dans le monde, dont 500 ont été en éruption au cours de l'Histoire. Chaque année, une cinquantaine entrent en éruption simultanément, libérant des milliards de tonnes de matière et de gaz.</p></div>
      <p class="resume-text">Le volcanisme est directement lié à la tectonique des plaques : la majorité des volcans se concentrent aux frontières de plaques (dorsales, zones de subduction) ou au-dessus de points chauds comme Hawaï ou l'Islande. L'étude des volcans — la volcanologie — permet de comprendre la dynamique interne de la planète et de prévenir les catastrophes.</p>
    ''',
    '''
        <h3>La structure d'un volcan</h3>
        <p>Tout volcan repose sur un <strong>réservoir magmatique</strong> (chambre magmatique) situé à plusieurs kilomètres de profondeur. Ce réservoir est alimenté en magma venu du manteau. Sous l'effet de la pression des gaz dissous et du poids des roches sus-jacentes, le magma remonte par un <strong>conduit volcanique</strong> jusqu'à la surface, où il s'écoule par un ou plusieurs <strong>évents</strong> (cratères, bouches éruptives).</p>
        <ul>
          <li><strong>Cratère sommital</strong> — dépression en forme d'entonnoir au sommet du cône volcanique</li>
          <li><strong>Caldeira</strong> — cratère géant résultant de l'effondrement du toit de la chambre magmatique après une éruption majeure (Yellowstone, Toba)</li>
          <li><strong>Flancs</strong> — pentes du cône, constituées de coulées de lave et de couches de pyroclastes accumulés</li>
          <li><strong>Dykes et sills</strong> — intrusions magmatiques dans les fractures de la croûte environnante</li>
        </ul>

        <h3>Éruptions effusives et explosives</h3>
        <p>Le style éruptif dépend essentiellement de la <strong>viscosité du magma</strong>, liée à sa teneur en silice (SiO₂) et en gaz dissous :</p>
        <div class="highlight-box"><p><strong>Éruptions effusives :</strong> magma basaltique pauvre en silice (45–52 %), peu visqueux. Les gaz s'échappent facilement : la lave s'écoule en coulées fluides sur de longues distances. Exemples : Hawaï (Kīlauea), Islande (Fagradalsfjall). Peu dangereuses sauf pour les populations dans les vallées.</p></div>
        <div class="highlight-box"><p><strong>Éruptions explosives :</strong> magma rhyolitique ou andésitique, riche en silice (60–75 %), très visqueux. Les gaz restent piégés et s'échappent brutalement, fragmentant la lave en téphras (bombes, lapilli, cendres). Exemples : Vésuve (79 ap. J.-C.), Pinatubo (1991), Krakatoa (1883). Très dangereuses : nuées ardentes (700 °C), pluies de cendres, tsunamis.</p></div>

        <h3>Les produits volcaniques</h3>
        <p>Une éruption produit trois types de matériaux :</p>
        <ul>
          <li><strong>Lave</strong> — magma dégazé s'écoulant en surface. La lave pahoehoe (cordée, fluide) et la lave aa (scoriacée, rugueuse) sont deux faciès du basalte hawaïen</li>
          <li><strong>Pyroclastes</strong> — fragments solides projetés : bombes (> 64 mm), lapilli (2–64 mm), cendres (< 2 mm). Les cendres fines peuvent rester en suspension dans la stratosphère pendant des années</li>
          <li><strong>Gaz volcaniques</strong> — vapeur d'eau (H₂O, 60–90 %), CO₂, SO₂, H₂S, HCl. Le SO₂ réagit dans la stratosphère pour former des aérosols sulfatés qui réfléchissent le rayonnement solaire et refroidissent le climat</li>
        </ul>

        <h3>Les types morphologiques de volcans</h3>
        <div class="highlight-box"><p><strong>Stratovolcan (volcan composite) :</strong> cône symétrique aux flancs raides, construit par alternance de coulées et de dépôts pyroclastiques. Les plus dangereux : Vésuve, Fuji, Popocatépetl, Rainier. Caractéristiques des zones de subduction.</p></div>
        <div class="highlight-box"><p><strong>Volcan bouclier :</strong> cône aplati aux pentes douces, construit par accumulation de coulées basaltiques fluides. Le Mauna Loa (Hawaï) est le plus grand volcan du monde en volume. Caractéristiques des points chauds.</p></div>
        <ul>
          <li><strong>Cônes de scories</strong> — cônes mineurs formés par projection de pyroclastes autour d'un évent unique (Parícutin, Mexique, 1943–1952)</li>
          <li><strong>Dômes de lave</strong> — amoncellements de lave visqueuse qui ne s'écoule pas (Mont Saint Helens, 1980)</li>
          <li><strong>Volcans sous-marins</strong> — ridges, seamounts, îles océaniques formées progressivement (archipel hawaïen)</li>
        </ul>

        <h3>Tectonique et volcanisme</h3>
        <p>La localisation des volcans est déterminée par la tectonique des plaques :</p>
        <ul>
          <li><strong>Dorsales océaniques</strong> — frontières divergentes : le magma basaltique comble le rift formé par l'écartement des plaques. L'Islande est la dorsale émergée la plus connue</li>
          <li><strong>Zones de subduction</strong> — la plaque océanique plonge sous la plaque continentale ; à 100 km de profondeur, l'eau libérée abaisse le point de fusion du manteau. Magma andésitique à rhyolitique → volcans explosifs. Ceinture de Feu du Pacifique</li>
          <li><strong>Points chauds</strong> — panaches mantelliques stationnaires perçant la plaque lithosphérique. Hawaï, Yellowstone, Réunion (Piton de la Fournaise)</li>
        </ul>

        <h3>Surveillance et prévention</h3>
        <p>La <strong>surveillance volcanologique</strong> repose sur plusieurs méthodes :</p>
        <ul>
          <li>Sismologie — détection des essaims de séismes précurseurs liés au mouvement du magma</li>
          <li>Déformation du sol — inclinomètres et GPS mesurent le gonflement du volcan (tumescence)</li>
          <li>Géochimie des gaz — augmentation du CO₂ et du SO₂ signale une montée du magma</li>
          <li>Imagerie thermique satellite — points chauds détectés avant l'éruption</li>
        </ul>
        <p>La <strong>ceinture de Feu du Pacifique</strong> concentre 75 % des volcans actifs du globe et 90 % des séismes. Les zones à risque le plus élevé incluent le Japon, l'Indonésie, les Philippines, l'Amérique centrale et la côte ouest des Amériques.</p>
    '''
)

# ============================================================
# VOLCANISME/SEISMES — full rewrite
# ============================================================
replace_intro_and_contenu('volcanisme/seismes',
    '''
      <p class="resume-text">Un séisme est une vibration soudaine du sol causée par la libération brutale d'énergie accumulée dans la lithosphère. Cette énergie se propage sous forme d'ondes sismiques qui peuvent ravager des villes, déclencher des tsunamis et modifier le relief en quelques secondes.</p>
      <div class="highlight-box"><p><strong>Chiffre clé :</strong> environ 500 000 séismes détectables se produisent chaque année sur Terre. Un millier sont suffisamment forts pour causer des dommages. Le séisme de Sumatra de 2004 (magnitude 9,1) a déclenché un tsunami qui a tué 230 000 personnes dans 14 pays.</p></div>
      <p class="resume-text">La sismologie — science des séismes — utilise les ondes sismiques pour étudier les tremblements de terre, imager l'intérieur de la Terre, détecter les explosions nucléaires et prospecter les ressources en hydrocarbures.</p>
    ''',
    '''
        <h3>Mécanismes générateurs</h3>
        <p>La grande majorité des séismes sont d'origine <strong>tectonique</strong> : ils résultent du glissement brusque le long d'une <strong>faille</strong> lorsque les contraintes accumulées dépassent la résistance des roches. Le <strong>rebond élastique</strong> décrit ce processus : les roches se déforment élastiquement pendant des décennies ou des siècles, puis se rompent brusquement en libérant l'énergie stockée.</p>
        <ul>
          <li><strong>Failles décrochantes</strong> — mouvement horizontal ; ex. : faille de San Andreas (Californie)</li>
          <li><strong>Failles normales</strong> — extension de la croûte, flanc supérieur descend ; rift valleys</li>
          <li><strong>Failles inverses</strong> — compression, chevauchement ; zones de subduction et de collision (Himalaya)</li>
        </ul>
        <p>D'autres séismes sont <strong>volcaniques</strong> (mouvement du magma), <strong>d'effondrement</strong> (grotte ou mine) ou <strong>induits</strong> (barrage, extraction d'hydrocarbures).</p>

        <h3>Hypocenter, épicentre et profondeur</h3>
        <p>Le <strong>foyer</strong> (hypocentre) est le point dans la croûte où se produit la rupture. L'<strong>épicentre</strong> est sa projection en surface. La profondeur focale classe les séismes :</p>
        <ul>
          <li><strong>Superficiels</strong> (0–70 km) — les plus destructeurs : la courte distance jusqu'à la surface amplifie les secousses</li>
          <li><strong>Intermédiaires</strong> (70–300 km) — zones de subduction, effets atténués</li>
          <li><strong>Profonds</strong> (300–700 km) — plaques subduites continuant à se fracturer</li>
        </ul>

        <h3>Les ondes sismiques</h3>
        <p>L'énergie libérée se propage sous forme d'ondes enregistrées par les <strong>sismographes</strong> :</p>
        <div class="highlight-box"><p><strong>Ondes de volume :</strong> Ondes P (primaires, longitudinales) — compressions/dilatations, les plus rapides (6–8 km/s dans la croûte), traversent tous les milieux. Ondes S (secondaires, transversales) — cisaillement perpendiculaire, plus lentes (3,5–4,5 km/s), ne se propagent pas dans les liquides (ce qui a révélé que le noyau externe est liquide).</p></div>
        <div class="highlight-box"><p><strong>Ondes de surface :</strong> Ondes de Love (mouvement horizontal) et ondes de Rayleigh (mouvement elliptique). Plus lentes mais d'amplitude plus grande, elles causent l'essentiel des destructions en milieu urbain.</p></div>
        <p>La différence d'arrivée des ondes P et S permet de calculer la distance à l'épicentre. Trois stations minimum permettent de localiser le foyer par triangulation.</p>

        <h3>Magnitude et intensité</h3>
        <p>La <strong>magnitude</strong> mesure l'énergie libérée à la source. L'échelle est logarithmique : chaque degré correspond à 10 fois plus d'amplitude et environ 31,6 fois plus d'énergie. La <strong>magnitude de moment (Mw)</strong> est aujourd'hui préférée pour les grands séismes.</p>
        <ul>
          <li>M &lt; 2 : microséisme, imperceptible</li>
          <li>M 3–4 : ressenti localement, rarement dommageable</li>
          <li>M 5–6 : dommages aux bâtiments fragiles dans un rayon de 50–100 km</li>
          <li>M 7 : séisme majeur, destructions importantes (Haïti 2010 : M 7,0 — 230 000 morts)</li>
          <li>M ≥ 8 : séisme géant (Chili 1960 : M 9,5, le plus fort jamais enregistré)</li>
        </ul>
        <p>L'<strong>intensité</strong> mesure les effets en surface (échelle EMS-98, I à XII). Elle diminue avec la distance à l'épicentre, mais peut être amplifiée par les terrains meubles (liquéfaction des sols saturés en eau : Kōbe 1995, Christchurch 2011).</p>

        <h3>Prévention et génie parasismique</h3>
        <p>On ne peut pas prédire un séisme avec précision, mais on peut <strong>réduire la vulnérabilité</strong> :</p>
        <ul>
          <li><strong>Zonage sismique</strong> — cartographie des aléas pour adapter la réglementation de construction</li>
          <li><strong>Normes parasismiques</strong> — fondations profondes, structures ductiles en acier ou béton armé, isolation sismique (amortisseurs, patins en caoutchouc)</li>
          <li><strong>Alerte précoce</strong> — les ondes P arrivent avant les ondes S destructrices. Les systèmes japonais (J-Alert) donnent 10–60 secondes d'alerte avant les secousses principales</li>
          <li><strong>Plans d'urgence</strong> — exercices réguliers, stocks de secours, formation de la population</li>
        </ul>

        <h3>Les grands séismes historiques</h3>
        <p>Quelques séismes marquants et leurs conséquences :</p>
        <ul>
          <li><strong>Lisbonne, 1755</strong> — M ~8,5 ; séisme + tsunami + incendie : 60 000–100 000 morts, reconstruction de la ville selon un plan en damier (Pombal)</li>
          <li><strong>San Francisco, 1906</strong> — M 7,9 ; incendies post-sismiques : 3 000 morts, 28 000 bâtiments détruits</li>
          <li><strong>Tangshan (Chine), 1976</strong> — M 7,6 ; 240 000 morts officiels (estimations jusqu'à 650 000)</li>
          <li><strong>Kōbe (Japon), 1995</strong> — M 6,9 ; 6 434 morts malgré les normes parasismiques, révélant des lacunes dans les bâtiments anciens</li>
          <li><strong>Tōhoku (Japon), 2011</strong> — M 9,0 ; tsunami jusqu'à 40 m, 19 000 morts, catastrophe de Fukushima</li>
        </ul>
    '''
)

# ============================================================
# VOLCANISME/TSUNAMIS — full rewrite
# ============================================================
replace_intro_and_contenu('volcanisme/tsunamis',
    '''
      <p class="resume-text">Un tsunami est une série de vagues océaniques générées par un déplacement vertical brutal du fond marin, le plus souvent lors d'un séisme sous-marin de forte magnitude. Contrairement aux vagues de tempête, les tsunamis ont une longueur d'onde de plusieurs centaines de kilomètres et une énergie qui traverse les océans entiers.</p>
      <div class="highlight-box"><p><strong>Catastrophe référence :</strong> le tsunami de l'océan Indien du 26 décembre 2004, déclenché par un séisme de magnitude 9,1 au large de Sumatra, a causé plus de 230 000 morts dans 14 pays — l'une des catastrophes naturelles les plus meurtrières de l'histoire moderne.</p></div>
      <p class="resume-text">La physique des tsunamis en fait des phénomènes difficiles à percevoir en plein océan (amplitude de 30 cm, vitesse de 800 km/h), mais extrêmement dangereux à l'approche des côtes, où ils peuvent atteindre 30 à 40 mètres de hauteur.</p>
    ''',
    '''
        <h3>Formation et propagation</h3>
        <p>Un tsunami se forme lorsque la colonne d'eau entière est mise en mouvement vertical. Les causes principales sont :</p>
        <ul>
          <li><strong>Séismes sous-marins</strong> (90 % des cas) — failles inverses dans les zones de subduction ; la plaque chevauchante rebondit vers le haut, propulsant une masse d'eau colossale</li>
          <li><strong>Glissements de terrain sous-marins</strong> — effondrements de flancs volcaniques ou de deltas ; tsunami de Lituya Bay (Alaska, 1958) — vague de 524 m dans une baie fermée</li>
          <li><strong>Éruptions volcaniques</strong> — effondrement du Krakatoa (1883), tsunamis de 30–40 m sur les côtes de Java et Sumatra</li>
          <li><strong>Impacts météoritiques</strong> — rares mais potentiellement catastrophiques à l'échelle mondiale</li>
        </ul>
        <div class="highlight-box"><p><strong>Physique de la propagation :</strong> en pleine mer, vitesse ≈ √(g × h) où h est la profondeur (ex. : 4 000 m → 700 km/h). Amplitude faible (< 1 m), longueur d'onde > 200 km, période 10–60 min. À l'approche de la côte, la profondeur diminue → la vague ralentit et son énergie se concentre → amplitude augmente (effet de « shoaling »). Le « run-up » à terre peut atteindre plusieurs dizaines de mètres.</p></div>

        <h3>Le retrait de la mer : signal précurseur</h3>
        <p>Avant l'arrivée de la première vague, la mer se retire parfois de plusieurs centaines de mètres, exposant le fond marin. Ce phénomène précède l'arrivée de la vague destructrice de quelques minutes. Connaître ce signal peut sauver des vies : c'est ce qu'une adolescente britannique formée en géographie (Tilly Smith) a fait en 2004 à Phuket, alertant les touristes avant l'arrivée du tsunami.</p>

        <h3>Exemples historiques majeurs</h3>
        <ul>
          <li><strong>Lisbonne, 1755</strong> — séisme M 8,5 + tsunami + incendie : 60 000–100 000 morts, destruction de la ville</li>
          <li><strong>Krakatoa, 1883</strong> — éruption + effondrement ; tsunamis ≥ 30 m, 36 000 morts</li>
          <li><strong>Alaska, 1964</strong> — séisme M 9,2 ; tsunami ravage plusieurs villes côtières du Canada et de Californie</li>
          <li><strong>Océan Indien, 2004</strong> — M 9,1 ; 230 000 morts, 14 pays touchés, 1,7 million de déplacés</li>
          <li><strong>Tōhoku (Japon), 2011</strong> — M 9,0 ; tsunamis jusqu'à 40,5 m (Miyako) ; 19 000 morts ; catastrophe nucléaire de Fukushima</li>
          <li><strong>Sulawesi (Indonésie), 2018</strong> — M 7,5 ; tsunami généré localement en quelques minutes, 4 340 morts</li>
        </ul>

        <h3>Systèmes d'alerte</h3>
        <p>Après le tsunami de 2004, des systèmes d'alerte ont été déployés ou renforcés dans tous les océans :</p>
        <ul>
          <li><strong>Bouées DART</strong> (Deep-ocean Assessment and Reporting of Tsunamis) — capteurs de pression sur le fond marin transmettant en temps réel les variations de niveau d'eau</li>
          <li><strong>Réseau mondial de sismographes</strong> — détection rapide des séismes sous-marins (magnitude, mécanisme, localisation)</li>
          <li><strong>Centres d'alerte</strong> — PTWC (Pacifique), NWPTAC (Pacifique NW), ITIC (coordination internationale). Délai typique d'alerte : 10–30 minutes</li>
          <li><strong>Systèmes locaux</strong> — sirènes côtières, SMS, cartographie des zones inondables, signalétique d'évacuation (panneaux bleus au Japon)</li>
        </ul>

        <h3>Architecture anti-tsunami</h3>
        <p>Au Japon, les murs anti-tsunamis (seawall) de béton ont été renforcés après 2011 sur plus de 400 km de côtes, certains atteignant 15 m de hauteur. Cette approche est contestée : coût immense, impact environnemental et visuel important, efficacité partielle (à Tōhoku, certains murs ont été submergés). Une approche complémentaire mise sur les forêts côtières de pins (tampon naturel) et les plans d'évacuation avec des routes et panneaux balisés menant vers les collines.</p>
    '''
)

# ============================================================
# VOLCANISME/RISQUES — full rewrite
# ============================================================
replace_intro_and_contenu('volcanisme/risques',
    '''
      <p class="resume-text">Les risques géologiques — volcans, séismes, glissements de terrain, tsunamis — menacent des centaines de millions de personnes vivant dans des zones à fort aléa naturel. La gestion de ces risques est l'un des défis majeurs du XXIe siècle, combinant sciences de la Terre, ingénierie, urbanisme et sciences sociales.</p>
      <div class="highlight-box"><p><strong>Chiffre clé :</strong> entre 1998 et 2017, les catastrophes naturelles ont causé 1,3 million de morts et 4 400 milliards de dollars de pertes économiques dans le monde (rapport UNDRR). Les pays en développement sont disproportionnellement touchés, faute de systèmes d'alerte et de bâtiments parasismiques.</p></div>
      <p class="resume-text">Le <strong>risque</strong> est le produit de l'aléa (probabilité et intensité du phénomène naturel) et de la vulnérabilité (fragilité des populations et des infrastructures exposées). Réduire le risque passe autant par la réduction de la vulnérabilité que par la surveillance des aléas.</p>
    ''',
    '''
        <h3>L'aléa géologique : définition et cartographie</h3>
        <p>L'<strong>aléa</strong> désigne la probabilité qu'un phénomène naturel d'une intensité donnée se produise dans un secteur géographique et une période de temps déterminés. La cartographie des aléas est la première étape de la gestion du risque :</p>
        <ul>
          <li><strong>Zones sismiques</strong> — classées selon l'accélération horizontale maximale du sol attendue (PGA) sur 475 ans (période de retour)</li>
          <li><strong>Zones volcaniques</strong> — périmètres d'exclusion autour des volcans actifs, cartographie des coulées de lave passées, zones pyroclastiques</li>
          <li><strong>Zones de glissements</strong> — pentes instables, sols argileux, zones de sismicité</li>
          <li><strong>Zones inondables par tsunami</strong> — modélisation des run-ups pour différents scénarios</li>
        </ul>

        <h3>Les principaux risques volcaniques</h3>
        <div class="highlight-box"><p><strong>Nuées ardentes (coulées pyroclastiques) :</strong> mélanges de gaz chauds (700–1 000 °C), de cendres et de fragments rocheux dévalant les flancs du volcan à 200–700 km/h. Inévitables et mortelles dans leur trajectoire — elles ont détruit Pompéi (79 ap. J.-C.) et Saint-Pierre de Martinique (1902, 29 000 morts en quelques minutes).</p></div>
        <ul>
          <li><strong>Lahars</strong> — coulées boueuses mêlant cendres et eau (fonte des neiges, pluies) ; peuvent déferler 100 km en aval ; Armero (Colombie, 1985) : 23 000 morts</li>
          <li><strong>Chutes de cendres</strong> — effondrement de toitures, contamination des eaux, perturbation des transports aériens (Eyjafjallajökull, 2010 : 100 000 vols annulés en Europe)</li>
          <li><strong>Gaz volcanique</strong> — CO₂ asphyxiant dans les zones basses ; lac Nyos (Cameroun, 1986) : dégagement soudain de 1,6 Mt de CO₂ ; 1 700 morts</li>
          <li><strong>Coulées de lave</strong> — destructives mais lentes, permettant généralement l'évacuation</li>
        </ul>

        <h3>Les risques sismiques</h3>
        <p>Les effets d'un séisme sur les bâtiments et les personnes dépendent de plusieurs facteurs :</p>
        <ul>
          <li><strong>Magnitude et distance</strong> — la décroissance de l'intensité suit des lois empiriques d'atténuation</li>
          <li><strong>Effets de site</strong> — les terrains meubles amplifient les ondes ; la liquéfaction des sols saturés transforme le sol en boue (Kōbe 1995 ; Christchurch 2011)</li>
          <li><strong>Qualité du bâti</strong> — les constructions en adobe non renforcé s'effondrent rapidement (Haïti 2010). Les bâtiments parasismiques en béton armé ou en acier résistent bien si les normes sont respectées</li>
          <li><strong>Incendies post-sismiques</strong> — ruptures des conduites de gaz ; Tokyo 1923 : autant de morts par l'incendie que par le séisme</li>
        </ul>

        <h3>Prévision, alerte et gestion de crise</h3>
        <p>La gestion des risques géologiques s'organise autour de trois axes :</p>
        <ul>
          <li><strong>Prévention</strong> — zonage, réglementation du bâti, éducation du public, exercices d'évacuation</li>
          <li><strong>Surveillance et alerte précoce</strong> — réseaux de sismomètres, GPS, inclinomètres, capteurs de gaz pour les volcans ; bouées DART pour les tsunamis</li>
          <li><strong>Gestion de crise</strong> — plans d'évacuation, cellules de crise, coordination internationale (UNDAC, Croix-Rouge, sécurité civile)</li>
        </ul>
        <div class="highlight-box"><p><strong>Cadre de Sendai (2015–2030) :</strong> accord international de l'ONU visant à réduire de moitié la mortalité par catastrophe naturelle d'ici 2030, par l'amélioration des systèmes d'alerte, la résilience des infrastructures et l'intégration du risque dans les politiques de développement. 187 pays signataires.</p></div>

        <h3>Résilience et adaptation</h3>
        <p>Le Japon est l'exemple le plus avancé en matière de résilience sismique et volcanique : codes de construction stricts, exercices annuels obligatoires (Bōsai), systèmes d'alerte ultrarapides (J-Alert déclenchant notifications mobiles et klaxons), refuges en hauteur balisés pour tsunamis. Malgré cela, le séisme de Tōhoku (2011, M 9,0) a causé 19 000 morts, soulignant les limites de toute prévention face à des événements extrêmes. La résilience n'élimine pas le risque — elle le réduit à un niveau socialement acceptable.</p>
    '''
)

# ============================================================
# VOLCANISME/POINTS-CHAUDS — full rewrite
# ============================================================
replace_intro_and_contenu('volcanisme/points-chauds',
    '''
      <p class="resume-text">Les points chauds sont des zones de volcanisme intense situées à l'intérieur des plaques tectoniques, loin des frontières de plaques. Ils résultent de panaches mantelliques — colonnes de roche chaude remontant depuis les profondeurs du manteau.</p>
      <div class="highlight-box"><p><strong>Exemple emblématique :</strong> l'archipel d'Hawaï est le résultat du passage de la plaque Pacifique au-dessus du point chaud hawaïen depuis 80 millions d'années. Les îles deviennent progressivement plus vieilles et plus érodées vers le nord-ouest, traçant la trajectoire de la plaque comme un enregistrement fossilisé de sa migration.</p></div>
      <p class="resume-text">On recense environ 50 points chauds actifs sur la planète, dont l'Islande, la Réunion, les Galápagos, Yellowstone et le Tristan da Cunha. Leur étude révèle la dynamique profonde du manteau terrestre et permet de reconstituer les mouvements des plaques sur des millions d'années.</p>
    ''',
    '''
        <h3>Qu'est-ce qu'un panache mantellique ?</h3>
        <p>Un <strong>panache mantellique</strong> (mantle plume) est une anomalie thermique sous forme de colonne de roche chaude remontant lentement depuis le manteau profond à travers la lithosphère. Contrairement aux courants de convection classiques, le panache est une structure quasi cylindrique et stable qui perfore la plaque tectonique en migration.</p>
        <ul>
          <li>Température du panache : 200–300 °C au-dessus du manteau environnant</li>
          <li>Diamètre de la tête : peut atteindre 2 000 km lors de l'arrivée en surface (provinces ignées de grande ampleur)</li>
          <li>Vitesse de remontée : quelques centimètres par an</li>
          <li>Origine possible : limite noyau-manteau (2 900 km de profondeur), zone D''</li>
        </ul>

        <h3>La chaîne hawaïenne — modèle de référence</h3>
        <p>L'archipel hawaïen + la chaîne Emperor illustrent parfaitement le concept de point chaud :</p>
        <ul>
          <li>Le point chaud hawaïen est quasi fixe tandis que la plaque Pacifique se déplace vers le nord-ouest à ~7 cm/an</li>
          <li>Hawaï (Big Island) est l'île active actuelle, avec le Kīlauea et le Mauna Loa parmi les volcans les plus actifs du monde</li>
          <li>Maui, Oahu, Kauai sont progressivement plus vieilles, plus érodées, et finissent par s'enfoncer sous le niveau de la mer (guyots)</li>
          <li>Le coude de la chaîne Emperor (il y a ~47 Ma) indique un changement de direction de la plaque Pacifique</li>
          <li>Lo'ihi Seamount est le prochain volcan en formation, encore sous l'eau à 1 000 m de profondeur</li>
        </ul>

        <h3>L'Islande — point chaud sur une dorsale</h3>
        <p>L'Islande est un cas unique : le point chaud islandais coïncide avec la dorsale médio-atlantique, ce qui explique l'abondance exceptionnelle du volcanisme et l'émersion de l'île au-dessus du niveau de la mer. On trouve en Islande :</p>
        <ul>
          <li>30 systèmes volcaniques actifs, dont le Hekla, le Katla, l'Eyjafjallajökull et le Grímsvötn</li>
          <li>Le rift traverse l'île, avec des grabens, des lacs de lave, des geysers (Great Geysir, Strokkur)</li>
          <li>Géothermie intense : 90 % du chauffage domestique islandais est d'origine géothermale</li>
        </ul>

        <h3>Yellowstone — le supervolcan</h3>
        <div class="highlight-box"><p><strong>Supervolcan :</strong> un volcan dont les éruptions peuvent éjecter plus de 1 000 km³ de matériaux (indice d'explosivité volcanique VEI ≥ 8). Yellowstone a connu trois super-éruptions : il y a 2,1 Ma (2 500 km³), 1,3 Ma, et 640 000 ans. La caldeira actuelle mesure 55 × 72 km. Une telle éruption projetterait des cendres sur tout l'Amérique du Nord et refroidirait le climat mondial.</p></div>
        <p>La surveillance du Yellowstone (USGS) mesure en continu les déformations du sol, la sismicité, la température des sources et la composition des gaz. Les scientifiques s'accordent pour dire qu'une éruption majeure n'est pas imminente, mais le système reste actif — avec en moyenne 1 500–3 000 séismes détectés par an dans le parc.</p>

        <h3>La Réunion et le Piton de la Fournaise</h3>
        <p>Le Piton de la Fournaise, sur l'île de la Réunion, est l'un des volcans les plus actifs du monde (environ une éruption par an). Il est le volcan de surface actuel du point chaud réunionnais, dont la trace géologique remonte aux Trapps du Deccan (Inde, il y a 65 Ma). La trajectoire de la plaque indo-australienne au-dessus du point chaud a produit la chaîne des Mascareignes (Rodrigues, Maurice, Réunion).</p>

        <h3>Provinces ignées de grande ampleur (LIPs)</h3>
        <p>Lorsqu'un panache mantellique arrive pour la première fois en surface, sa tête peut générer des épanchements de lave colossaux sur des millions de km² : les <strong>trapps</strong>. Ces épisodes ont souvent coïncidé avec des extinctions de masse :</p>
        <ul>
          <li><strong>Trapps du Deccan</strong> (Inde, 65 Ma) — 500 000 km³ de basalte ; associés à l'extinction K-Pg (dinosaures)</li>
          <li><strong>Trapps de Sibérie</strong> (252 Ma) — 3 millions de km² ; associés à la plus grande extinction de l'histoire (Permien-Trias, 96 % des espèces marines disparues)</li>
          <li><strong>Columbia River Basalts</strong> (USA, 16 Ma) — 200 000 km², associés à un refroidissement global</li>
        </ul>
    '''
)

# ============================================================
# OCEANOGRAPHIE/COURANTS — full rewrite
# ============================================================
replace_intro_and_contenu('oceanographie/courants',
    '''
      <p class="resume-text">Les courants marins sont des flux d'eau de mer organisés et persistants qui parcourent les océans sur des milliers de kilomètres. Ils constituent le système de distribution de chaleur et de nutriments à l'échelle planétaire, régulant les températures des continents côtiers et alimentant la productivité biologique des mers.</p>
      <div class="highlight-box"><p><strong>Fait clé :</strong> sans le Gulf Stream et sa continuation, la dérive nord-atlantique, la température moyenne du nord-ouest de l'Europe serait de 5 à 10 °C plus basse. Paris aurait le climat de Montréal. Les courants marins redistribuent autant de chaleur que l'atmosphère elle-même.</p></div>
      <p class="resume-text">On distingue deux grands systèmes de courants : les courants de surface (entraînés par le vent, jusqu'à 200–300 m de profondeur) et la circulation thermohaline profonde (mue par les différences de température et de salinité, couvrant l'ensemble de l'océan sur des millénaires).</p>
    ''',
    '''
        <h3>Les courants de surface</h3>
        <p>Les <strong>courants de surface</strong> sont entraînés par les <strong>vents dominants</strong> (alizés, vents d'ouest) et organisés en <strong>gyres océaniques</strong> — grands tourbillons anticycloniques influencés par la force de Coriolis :</p>
        <ul>
          <li><strong>Gyre de l'Atlantique Nord</strong> — Gulf Stream (côte est américaine), dérive nord-atlantique, courant des Canaries (retour vers l'équateur), courant équatorial nord</li>
          <li><strong>Gyre du Pacifique Nord</strong> — Kuro Shio (« courant noir » japonais), courant de Californie</li>
          <li><strong>Gyre de l'Atlantique Sud</strong> — courant du Brésil (chaud), courant du Benguela (froid, riche en nutriments, permet la pêche en Namibie)</li>
          <li><strong>Courant circumpolaire antarctique</strong> — seul courant non confiné par des continents, le plus puissant du monde (130–150 Sv, 1 Sverdrup = 10⁶ m³/s)</li>
        </ul>
        <div class="highlight-box"><p><strong>Transport d'Ekman :</strong> sous l'action du vent et de la force de Coriolis, les courants de surface sont déviés de 45° par rapport au vent (à droite dans l'hémisphère nord). Sur toute la couche d'Ekman (50–200 m), le transport net est perpendiculaire au vent. Cela génère des upwellings côtiers (remontées d'eaux profondes froides et riches en nutriments) là où le vent longe la côte avec l'eau poussée vers le large (Pérou, Californie, Namibie, Maroc).</p></div>

        <h3>Le Gulf Stream</h3>
        <p>Le Gulf Stream est le courant marin le plus étudié. Il prend naissance dans le golfe du Mexique, suit la côte est des États-Unis puis bifurque vers le nord-est à Cape Hatteras pour traverser l'Atlantique Nord. Ses caractéristiques :</p>
        <ul>
          <li>Vitesse : 2–3 m/s (courant marin le plus rapide avec le Kuro Shio)</li>
          <li>Débit : 30–35 Sv à la hauteur de la Floride, jusqu'à 150 Sv dans la dérive nord-atlantique</li>
          <li>Largeur : 80–150 km, profondeur : 300–1 000 m</li>
          <li>Température : 24–28 °C à Miami, encore 12–15 °C à la hauteur des côtes irlandaises</li>
        </ul>

        <h3>La circulation thermohaline</h3>
        <p>La <strong>circulation thermohaline</strong> (ou AMOC — Atlantic Meridional Overturning Circulation) est la pompe de la circulation océanique profonde, mue par des différences de <strong>densité</strong> de l'eau contrôlées par la température et la salinité :</p>
        <ol>
          <li>Dans l'Atlantique Nord (mer de Norvège, de Labrador), les eaux de surface se refroidissent et deviennent très denses → elles plongent vers le fond (eau profonde nord-atlantique)</li>
          <li>Ces eaux profondes dérivent vers le sud le long du fond de l'Atlantique, puis se dispersent dans les océans Indien et Pacifique</li>
          <li>Ces eaux profondes remontent lentement (upwelling diffus) et reviennent en surface, réchauffées</li>
          <li>Elles retournent vers le nord en surface → boucle bouclée</li>
        </ol>
        <div class="highlight-box"><p><strong>Tapis roulant océanique (conveyor belt) :</strong> concept introduit par Wallace Broecker (1991). Le parcours complet dure environ 1 000 à 2 000 ans. Le ralentissement de l'AMOC sous l'effet du réchauffement climatique (fonte des glaces → dilution de la salinité en Atlantique Nord → moins de plongée d'eau froide) est l'un des scénarios de changement brusque du climat les plus surveillés.</p></div>

        <h3>El Niño – La Niña (ENSO)</h3>
        <p>L'<strong>ENSO</strong> (El Niño-Southern Oscillation) est une variabilité couplée océan-atmosphère du Pacifique tropical, avec un cycle de 3 à 7 ans :</p>
        <ul>
          <li><strong>La Niña (froide) :</strong> vents alizés forts repoussent les eaux chaudes à l'ouest ; upwelling intense au large du Pérou. Précipitations abondantes en Australie, sécheresse en Amérique du Sud</li>
          <li><strong>El Niño (chaud) :</strong> affaiblissement des alizés ; accumulation d'eau chaude à l'est ; disparition de l'upwelling péruvien (effondrement des pêcheries). Pluies diluviennes au Pérou et en Équateur, sécheresses en Australie et en Indonésie</li>
        </ul>
        <p>El Niño 1997–98 a causé 100 milliards de dollars de dommages et 23 000 morts dans le monde. Sa surveillance par les bouées Argo (3 900 flotteurs autonomes déployés dans tous les océans) permet des prévisions à 6 mois.</p>
    '''
)

# ============================================================
# OCEANOGRAPHIE/FONDS — full rewrite
# ============================================================
replace_intro_and_contenu('oceanographie/fonds',
    '''
      <p class="resume-text">Les fonds océaniques couvrent 71 % de la surface de la Terre, mais n'ont été cartographiés qu'à partir du milieu du XXe siècle, grâce aux sondages bathymétriques, aux submersibles et aux satellites. Ils révèlent une topographie aussi variée que les continents : montagnes colossales, plaines immenses, fosses abyssales et sources hydrothermales bouillonnantes.</p>
      <div class="highlight-box"><p><strong>Profondeur maximale :</strong> le Challenger Deep, dans la fosse des Mariannes (Pacifique occidental), atteint 10 994 mètres. Si l'Everest (8 849 m) était placé au fond, il serait encore recouvert de plus de 2 000 mètres d'eau. Seulement une poignée d'êtres humains ont atteint cette profondeur en submersible depuis 1960.</p></div>
      <p class="resume-text">La morphologie des fonds océaniques reflète directement les processus tectoniques : les dorsales marquent les frontières divergentes, les fosses les zones de subduction, et les plaines abyssales témoignent de millions d'années de sédimentation tranquille.</p>
    ''',
    '''
        <h3>Les grandes zones morphologiques</h3>
        <p>La bathymétrie (mesure des profondeurs marines) distingue plusieurs grandes provinces :</p>
        <ul>
          <li><strong>Plateau continental</strong> (0–200 m) — prolongement sous-marin des continents, pente douce (< 0,5°), largeur variable (5–500 km). Riche en sédiments, hydrocarbures et vie marine</li>
          <li><strong>Talus continental</strong> (200–3 000 m) — pente plus forte (3–6°), découpé par des canyons sous-marins (canyon de l'Hudson, canyon du Cap Breton)</li>
          <li><strong>Glacis continental</strong> — transition entre talus et plaine abyssale, accumulation de sédiments en éventail</li>
          <li><strong>Plaine abyssale</strong> (3 000–6 000 m) — zones les plus plates du globe, couvertes de sédiments fins. Occupent 40 % de la surface océanique</li>
          <li><strong>Fosses océaniques</strong> (&gt; 6 000 m) — zones de subduction ; les principales fosses sont dans le Pacifique (Mariannes, Tonga, Kermadec, Philippine)</li>
        </ul>

        <h3>Les dorsales océaniques</h3>
        <p>Les <strong>dorsales médio-océaniques</strong> forment le plus long système montagneux de la planète : 70 000 km de longueur. Ce sont des frontières divergentes où de la croûte océanique nouvelle est créée en permanence par magmatisme basaltique :</p>
        <div class="highlight-box"><p><strong>Formation de la croûte océanique :</strong> le magma remonte par le rift axial, se solidifie en basalte, est poussé de part et d'autre par le magma suivant. Vitesse d'expansion : 1–3 cm/an (dorsale lente, Atlantique) à 6–16 cm/an (dorsale rapide, Pacifique Est). La croûte océanique s'éloigne de la dorsale, se refroidit, et finit par plonger dans une zone de subduction après 150–200 millions d'années.</p></div>

        <h3>Les sources hydrothermales</h3>
        <p>En 1977, le submersible Alvin découvrait les premières sources hydrothermales à 2 500 m de profondeur — une découverte révolutionnaire pour la biologie. Ces <strong>cheminées hydrothermales</strong> se forment lorsque l'eau de mer froide s'infiltre dans les fractures de la dorsale, est chauffée par le magma (350–400 °C), dissout des métaux et du soufre, puis rejaillit :</p>
        <ul>
          <li>Précipitation de sulfures métalliques (chalcopyrite, pyrite) → dépôts riches en cuivre, zinc, plomb, argent, or</li>
          <li>Cheminées pouvant atteindre 60 m de haut</li>
          <li>Écosystèmes chimiosynthétiques — bactéries oxydant le H₂S, base d'une chaîne alimentaire sans photosynthèse : vers tubicoles géants (Riftia pachyptila, jusqu'à 3 m), palourdes géantes, crabes yéti, crevettes aveugles</li>
        </ul>
        <div class="highlight-box"><p><strong>Vie sans lumière solaire :</strong> les écosystèmes hydrothermaux prouvent que la vie peut exister sans photosynthèse, en tirant son énergie de la chimiosynthèse (oxydation de composés chimiques inorganiques). Cette découverte a révolutionné notre vision des conditions nécessaires à la vie et alimente les hypothèses sur la vie possible dans les océans souterrains d'Europe (lune de Jupiter) ou d'Encelade (Saturne).</p></div>

        <h3>Les seamounts et les guyots</h3>
        <p>Les <strong>seamounts</strong> (monts sous-marins) sont des volcans isolés n'atteignant pas la surface. On en dénombre plus de 100 000 dans les océans mondiaux. Ils constituent des oasis de vie perturbant les courants et créant des upwellings locaux attractifs pour les poissons. Les <strong>guyots</strong> (tablemounts) sont d'anciens volcans insulaires érodés au niveau de la mer puis enfoncés sous les flots par subsidence de la lithosphère.</p>

        <h3>La sédimentation abyssale</h3>
        <p>Les fonds océaniques sont recouverts de sédiments dont la composition varie selon la profondeur :</p>
        <ul>
          <li><strong>Boues calcaires</strong> (&lt; 4 500 m) — coquilles de foraminifères et coccolithes planctoniques ; sous la compensation calcaire (CCD ≈ 4 500 m), CaCO₃ se dissout</li>
          <li><strong>Boues siliceuses</strong> — silice amorphe de diatomées et de radiolaires</li>
          <li><strong>Argiles rouges</strong> (zones les plus profondes, loin des continents) — poussières éoliennes et météoritiques</li>
          <li><strong>Nodules polymétalliques</strong> — concrétions de Mn, Fe, Ni, Cu, Co en surface des plaines abyssales, se formant à raison de quelques mm par million d'années. Ressource minière potentielle mais exploitation controversée par l'impact sur ces écosystèmes fragiles</li>
        </ul>
    '''
)

# ============================================================
# OCEANOGRAPHIE/POLLUTION — full rewrite
# ============================================================
replace_intro_and_contenu('oceanographie/pollution',
    '''
      <p class="resume-text">Les océans absorbent chaque année des millions de tonnes de polluants d'origine humaine : plastiques, hydrocarbures, nutriments en excès, métaux lourds, perturbateurs endocriniens et CO₂. La santé des océans est intrinsèquement liée à la santé humaine et à l'équilibre climatique de la planète.</p>
      <div class="highlight-box"><p><strong>Chiffre alarmant :</strong> environ 8 millions de tonnes de plastique entrent dans les océans chaque année (équivalent d'un camion-benne par minute). D'ici 2050, si la tendance actuelle se poursuit, la masse de plastiques dans les océans dépassera la masse des poissons. Le « 7e continent » de plastiques du Pacifique Nord couvre une superficie équivalente à deux fois la France.</p></div>
      <p class="resume-text">La pollution marine est une crise aux multiples visages : pollution ponctuelle (marées noires, rejets industriels) et pollution diffuse (ruissellement agricole, plastiques). Elle menace la biodiversité marine, les ressources halieutiques, la sécurité alimentaire et les économies côtières.</p>
    ''',
    '''
        <h3>La pollution plastique</h3>
        <p>Depuis les années 1950, la production mondiale de plastique a dépassé 8 milliards de tonnes cumulées, dont seulement 9 % ont été recyclées. Les plastiques se dégradent très lentement mais se fragmentent en <strong>microplastiques</strong> (< 5 mm) et <strong>nanoplastiques</strong> (< 1 µm) sous l'effet des UV, des vagues et des températures :</p>
        <ul>
          <li>Microplastiques ingérés par le plancton, les crustacés, les poissons, les oiseaux marins → bioaccumulation dans la chaîne alimentaire</li>
          <li>Des microplastiques ont été détectés dans la neige de l'Arctique, les profondeurs de la fosse des Mariannes, le sang humain, le placenta et le lait maternel</li>
          <li>Les <strong>gyres océaniques</strong> concentrent les plastiques flottants : Great Pacific Garbage Patch (2× la France), North Atlantic Garbage Patch</li>
          <li>Environ 70 % des plastiques marins coulent ou se déposent sur les plages — la surface visible n'est que la partie émergée du problème</li>
        </ul>

        <h3>Les marées noires</h3>
        <p>Une <strong>marée noire</strong> est une pollution accidentelle par hydrocarbures, le plus souvent due à un naufrage de pétrolier ou une explosion de plateforme pétrolière :</p>
        <div class="highlight-box"><p><strong>Exemples historiques :</strong> Torrey Canyon (1967, Bretagne, 117 000 t de brut), Amoco Cadiz (1978, 220 000 t), Exxon Valdez (Alaska, 1989, 37 000 t, 2 000 km de côtes souillées), Prestige (2002, Galice, 77 000 t), Deepwater Horizon (golfe du Mexique, 2010 — la pire catastrophe pétrolière offshore : 780 000 t, 11 morts, 87 jours d'écoulement).</p></div>
        <p>Les hydrocarbures étouffent les oiseaux (perte de l'imperméabilité du plumage → hypothermie), asphyxient les invertébrés benthiques, contaminent les sédiments côtiers pendant des décennies.</p>

        <h3>L'eutrophisation et les zones mortes</h3>
        <p>Les <strong>engrais azotés et phosphatés</strong> lessivés des terres agricoles s'accumulent dans les eaux côtières. L'excès de nutriments provoque des <strong>proliférations algales</strong>, dont la décomposition consomme l'oxygène dissous :</p>
        <ul>
          <li>Formation de <strong>zones hypoxiques</strong> (O₂ < 2 mg/L) où la vie marine ne peut survivre</li>
          <li>La zone morte du golfe du Mexique, alimentée par les nitrates du Mississippi, couvre 13 000–20 000 km² chaque été</li>
          <li>On recense plus de 700 zones mortes dans le monde, dont la mer Baltique (la plus grande zone hypoxique permanente)</li>
        </ul>

        <h3>L'acidification des océans</h3>
        <p>Les océans absorbent environ <strong>25 % du CO₂ anthropique</strong> émis chaque année. Ce CO₂ dissous forme de l'acide carbonique, diminuant le pH :</p>
        <ul>
          <li>pH moyen des océans en 1850 : ~8,25 ; en 2023 : ~8,06 (baisse de 0,19 unité)</li>
          <li>Projection 2100 (scénario RCP 8.5) : pH ~7,80 — acidification 3 fois plus rapide que tout changement observé depuis 300 millions d'années</li>
          <li>Conséquences : dissolution des squelettes de corail et de coquillages, perturbation de la reproduction des huîtres, crabes, oursins</li>
        </ul>
        <div class="highlight-box"><p><strong>Récifs coralliens :</strong> ils ne couvrent que 0,1 % de la surface océanique mais abritent 25 % de toutes les espèces marines connues. Ils protègent les côtes des tempêtes et font vivre 500 millions de personnes. La Grande Barrière de Corail (Australie) a perdu plus de 50 % de ses coraux entre 1995 et 2021 sous l'effet combiné du réchauffement et de l'acidification.</p></div>

        <h3>Solutions et gouvernance</h3>
        <ul>
          <li><strong>Traité international sur la pollution plastique</strong> (négociations ONU en cours) — réduction de la production à la source</li>
          <li><strong>Zones marines protégées (ZMP)</strong> — objectif 30 % des océans d'ici 2030 (Accord de Kunming-Montréal, 2022) ; actuellement ~8 % sous protection</li>
          <li><strong>Agriculture raisonnée</strong> — réduction des intrants azotés, bandes tampons riveraines</li>
          <li><strong>Traité sur la haute mer</strong> (BBNJ, mars 2023) — premier accord international pour protéger la biodiversité en dehors des ZEE</li>
        </ul>
    '''
)

# ============================================================
# OCEANOGRAPHIE/VIE-MARINE — full rewrite
# ============================================================
replace_intro_and_contenu('oceanographie/vie-marine',
    '''
      <p class="resume-text">L'océan est le berceau de la vie sur Terre. Pendant près de 3 milliards d'années, toute la vie a été marine avant que les organismes ne colonisent les continents. Aujourd'hui, l'océan abrite des écosystèmes d'une diversité extraordinaire, des récifs coralliens aux plaines abyssales.</p>
      <div class="highlight-box"><p><strong>Biodiversité marine :</strong> on estime à 250 000 le nombre d'espèces marines connues, mais les projections suggèrent que 1 à 10 millions d'espèces marines restent à découvrir. Le projet Census of Marine Life (2000–2010) a identifié 6 000 nouvelles espèces en 10 ans. La profonde méconnaissance des abysses en fait la plus grande frontière biologique de notre planète.</p></div>
      <p class="resume-text">La productivité de l'océan repose sur le <strong>phytoplancton</strong>, qui réalise la moitié de la photosynthèse planétaire et produit 50 % de l'oxygène atmosphérique. Ces micro-organismes sont la base de réseaux trophiques complexes qui culminent avec les grands prédateurs marins.</p>
    ''',
    '''
        <h3>Les zones de vie dans l'océan</h3>
        <p>La répartition de la vie marine est organisée selon des zones définies par la profondeur et la lumière :</p>
        <ul>
          <li><strong>Zone épipélagique</strong> (0–200 m) — zone euphotique, pénétrée par la lumière solaire. Photosynthèse active, forte productivité, phytoplancton, zooplancton, poissons pélagiques, cétacés</li>
          <li><strong>Zone mésopélagique</strong> (200–1 000 m) — zone crépusculaire. Peu de lumière, migrations verticales journalières. La biomasse de poissons mésopélagiques serait 10 fois supérieure à la pêche mondiale actuelle</li>
          <li><strong>Zone bathypélagique</strong> (1 000–4 000 m) — obscurité totale, froid (2–4 °C), pression élevée. Bioluminescence généralisée, espèces morphologiquement adaptées (baudroie abyssale, poisson-vipère)</li>
          <li><strong>Zone abyssopélagique</strong> (4 000–6 000 m) — plaines abyssales. Sédiments meubles, animaux rares mais diversifiés (concombres de mer, vers polychètes)</li>
          <li><strong>Zone hadalique</strong> (> 6 000 m) — fosses océaniques. Endémisme élevé, conditions extrêmes. Des crevettes amphipodes (Hirondellea gigas) y vivent à 11 000 m</li>
        </ul>

        <h3>Le plancton : socle de la chaîne alimentaire</h3>
        <div class="highlight-box"><p><strong>Phytoplancton :</strong> algues unicellulaires (diatomées, dinoflagellés, coccolithophores) et cyanobactéries fixant le CO₂ et l'énergie solaire par photosynthèse. Ils produisent 50 % de l'O₂ atmosphérique et constituent la base de toute la chaîne trophique marine. Prochlorococcus (cyanobactérie, diamètre 0,6 µm) est l'organisme photosynthétique le plus abondant sur Terre.</p></div>
        <p>Le <strong>zooplancton</strong> (copépodes, krill, méduses, larves de poissons) consomme le phytoplancton et constitue à son tour la nourriture des poissons, oiseaux marins et baleines. Le krill antarctique (Euphausia superba) est l'animal le plus abondant sur Terre en masse : sa biomasse totale (~500 millions de tonnes) est considérable.</p>

        <h3>Les récifs coralliens</h3>
        <p>Les <strong>récifs coralliens</strong> sont construits par des animaux coloniaux (cnidaires) vivant en symbiose avec des algues photosynthétiques (<strong>zooxanthelles</strong>). Les zooxanthelles fournissent jusqu'à 90 % de l'énergie du corail par photosynthèse ; ce partenariat impose que les coraux soient en eaux claires, chaudes (23–29 °C) et peu profondes (< 50 m).</p>
        <ul>
          <li>Récifs frangeants — contre la côte (Mer Rouge)</li>
          <li>Récifs barrières — séparés de la côte par un lagon (Grande Barrière de Corail, 2 300 km)</li>
          <li>Atolls — couronne coralliène entourant un lagon, formée sur un volcan en subsidence (Maldives, Polynésie)</li>
        </ul>

        <h3>Les grands prédateurs marins</h3>
        <p>Au sommet des chaînes trophiques marines :</p>
        <ul>
          <li><strong>Céphalopodes</strong> — calmar géant (Architeuthis dux, jusqu'à 13 m) et calmar colossal (jusqu'à 14 m), proies du cachalot</li>
          <li><strong>Requins</strong> — 500 espèces, prédateurs apicaux régulant les populations de poissons. Le requin blanc peut mesurer 6 m, le requin-baleine (planctivore) 12–18 m. Fortement menacés par surpêche et aileronage</li>
          <li><strong>Cétacés</strong> — dauphins, orques, cachalots, baleines à fanons. Le rorqual bleu (jusqu'à 33 m, 190 t) est le plus grand animal ayant jamais existé</li>
        </ul>

        <h3>Les menaces sur la biodiversité marine</h3>
        <ul>
          <li><strong>Surpêche</strong> — 35 % des stocks mondiaux de poissons sont surexploités (FAO 2022). Les prises mondiales plafonnent depuis les années 1990 malgré l'augmentation de l'effort de pêche</li>
          <li><strong>Changement climatique</strong> — blanchissement des coraux, déplacement des espèces vers les pôles, perturbation des migrations</li>
          <li><strong>Acidification</strong> — dissolution des squelettes calcaires (coraux, huîtres, ptéropodes)</li>
          <li><strong>Pollution</strong> — plastiques, polluants organiques persistants (PCB, DDT), marées noires</li>
        </ul>
        <div class="highlight-box"><p><strong>Initiative 30×30 :</strong> l'accord de Kunming-Montréal (COP 15, décembre 2022) engage 196 pays à protéger 30 % des terres et des océans d'ici 2030. Des études montrent que protéger 30 % de l'océan permettrait de récupérer 70 % de la biodiversité marine perdue et d'augmenter durablement les prises de pêche dans les zones adjacentes.</p></div>
    '''
)

# ============================================================
# Now enrich "real" pages with additional sections
# ============================================================

def append_to_contenu(page_key, extra_html):
    """Append HTML before the closing </div></section> of contenu section"""
    content = pages[page_key]['content']
    # Find the last </div> before </section> that closes id="contenu"
    # Strategy: find contenu section and replace its closing </div>\n    </section>
    content = re.sub(
        r'(</div>)(\s*</section>\s*<section[^>]+id="quiz")',
        extra_html + r'\1\2',
        content, count=1, flags=re.DOTALL
    )
    pages[page_key]['content'] = content

# geologie/mineraux: add gemstones section
append_to_contenu('geologie/mineraux', '''
        <h3>Pierres précieuses et minéraux industriels</h3>
        <p>Certains minéraux ont une valeur économique considérable par leurs propriétés optiques ou physiques :</p>
        <div class="highlight-box"><p><strong>Pierres précieuses :</strong> le rubis et le saphir sont deux variétés de corindon (Al₂O₃) colorées par des traces de chrome (rouge) ou de titane/fer (bleu). L'émeraude est un béryl (Be₃Al₂Si₆O₁₈) vert (chrome). Le diamant est du carbone pur cristallisé en structure cubique sous des pressions supérieures à 45 kbar à plus de 150 km de profondeur, remonté en surface par les kimberlites.</p></div>
        <p>Les <strong>minéraux industriels</strong> sont indispensables à l'économie moderne :</p>
        <ul>
          <li><strong>Lithium</strong> — spodumène et saumures des salares andins (Bolivie, Chili, Argentine) ; essentiel pour les batteries des véhicules électriques</li>
          <li><strong>Terres rares</strong> — 17 éléments (néodyme, cérium, lanthane...) ; indispensables aux aimants permanents, écrans, catalyseurs. La Chine produit ~60 % de la production mondiale</li>
          <li><strong>Cobalt</strong> — essentiel pour les batteries Li-ion et les alliages haute température. La RDC produit 70 % du cobalt mondial</li>
          <li><strong>Quartz</strong> — utilisé en électronique (oscillateurs), verre, fibres optiques, céramiques</li>
        </ul>
''')

# geologie/fossiles: add radiometric dating and mass extinctions
append_to_contenu('geologie/fossiles', '''
        <h3>La datation radiométrique</h3>
        <p>La <strong>datation absolue</strong> donne un âge en années en exploitant la désintégration radioactive de certains isotopes. Chaque isotope radioactif a une <strong>période radioactive</strong> (demi-vie) caractéristique :</p>
        <ul>
          <li><strong>Carbone-14 (¹⁴C)</strong> — demi-vie 5 730 ans. Applicable aux matières organiques de moins de 50 000 ans (os, bois, charbon)</li>
          <li><strong>Uranium-Plomb (U-Pb)</strong> — demi-vie ²³⁸U : 4,47 Ga. Utilisé sur les zircons pour dater les plus vieilles roches terrestres (4,4 Ga, Jack Hills, Australie)</li>
          <li><strong>Potassium-Argon (K-Ar)</strong> — demi-vie 1,25 Ga. Applicable aux roches volcaniques ; permet de dater les couches encadrant les fossiles</li>
        </ul>
        <div class="highlight-box"><p><strong>Âge de la Terre :</strong> 4,54 milliards d'années, déterminé par la concordance des âges U-Pb de météorites primitives (chondrites carbonacées) et des plus anciens zircons terrestres. La Lune a le même âge, formée par l'impact géant Théia il y a environ 4,5 Ga.</p></div>

        <h3>Les grandes extinctions de masse</h3>
        <p>L'histoire de la vie est ponctuée de cinq extinctions massives (Big Five) qui ont détruit la majorité des espèces en un temps géologiquement court :</p>
        <ul>
          <li><strong>Ordovicien-Silurien</strong> (444 Ma) — 86 % des espèces ; glaciation du Gondwana</li>
          <li><strong>Dévonien tardif</strong> (375 Ma) — 75 % ; anoxie océanique</li>
          <li><strong>Permien-Trias</strong> (252 Ma) — 96 % ! La plus grande extinction connue ; trapps de Sibérie</li>
          <li><strong>Trias-Jurassique</strong> (200 Ma) — 80 % ; trapps de l'Atlantique Central</li>
          <li><strong>Crétacé-Paléogène (K-Pg)</strong> (66 Ma) — 76 % ; impact Chicxulub (Yucatán) + trapps du Deccan → extinction des dinosaures non aviens</li>
        </ul>
''')

# geologie/erosion: add soil profiles section
append_to_contenu('geologie/erosion', '''
        <h3>Érosion et formation des sols</h3>
        <p>L'érosion et la <strong>pédogenèse</strong> (formation des sols) sont deux processus complémentaires. Un sol bien développé présente un <strong>profil pédologique</strong> en horizons :</p>
        <ul>
          <li><strong>Horizon O</strong> — litière organique (feuilles mortes, humus brut) en surface</li>
          <li><strong>Horizon A</strong> — horizon éluvial sombre, riche en humus, zone d'activité biologique intense</li>
          <li><strong>Horizon B</strong> — horizon illuvial d'accumulation (argile, oxydes de fer, carbonates lessivés de A)</li>
          <li><strong>Horizon C</strong> — roche mère altérée (régolite)</li>
          <li><strong>Horizon R</strong> — roche mère non altérée</li>
        </ul>
        <div class="highlight-box"><p><strong>Érosion des sols agricoles :</strong> les sols cultivés s'érodent 100 à 1 000 fois plus vite que leur taux de formation naturel (1 cm de sol = 100 à 400 ans de pédogenèse). La perte de sols fertiles est une menace pour la sécurité alimentaire mondiale — le tiers des sols agricoles mondiaux sont dégradés (FAO). La couverture végétale permanente, les haies bocagères et les labours perpendiculaires aux pentes sont les principales mesures anti-érosion.</p></div>
''')

# geologie/ressources: add critical minerals section
append_to_contenu('geologie/ressources', '''
        <h3>Ressources minières et transition énergétique</h3>
        <p>La transition vers les énergies renouvelables nécessite des quantités considérables de <strong>métaux critiques</strong> dont les approvisionnements sont concentrés dans quelques pays :</p>
        <div class="highlight-box"><p><strong>Lithium :</strong> 65 % de la production mondiale vient du « triangle du lithium » (Bolivie, Chili, Argentine). La demande devrait être multipliée par 40 d'ici 2040 pour les batteries de véhicules électriques et le stockage d'énergie renouvelable (AIE).</p></div>
        <ul>
          <li><strong>Cobalt</strong> — 70 % en RDC, conditions d'extraction problématiques. Alternatives : batteries lithium-fer-phosphate (LFP) sans cobalt</li>
          <li><strong>Terres rares (REE)</strong> — 60 % de la production en Chine. Néodyme et dysprosium pour les aimants permanents des éoliennes et moteurs électriques</li>
          <li><strong>Cuivre</strong> — colonne vertébrale de l'électrification. Un véhicule électrique contient 4 fois plus de cuivre qu'un véhicule thermique</li>
        </ul>
        <p>Les <strong>ressources minières marines</strong> (nodules polymétalliques des plaines abyssales, encroûtements de cobalt des seamounts) représentent une alternative potentielle, mais leur exploitation soulève des questions environnementales majeures. L'Autorité internationale des fonds marins (AIFM) régule les droits d'exploration.</p>
''')

# geologie/tectonique: add supercontinent cycle
append_to_contenu('geologie/tectonique', '''
        <h3>Le cycle des supercontinents</h3>
        <p>L'histoire de la Terre est marquée par des cycles d'assemblage et de fragmentation de supercontinents, d'une période d'environ 500–600 millions d'années :</p>
        <ul>
          <li><strong>Gondwana</strong> — supercontinent austral (~550–180 Ma) : Afrique, Amérique du Sud, Antarctique, Inde, Australie</li>
          <li><strong>Pangée</strong> (~300–175 Ma) — dernier supercontinent, réunissant toutes les terres émergées. Sa fragmentation a ouvert l'Atlantique et l'Océan Indien</li>
          <li><strong>Amasia</strong> — supercontinent futur prédit dans ~300 Ma par la convergence de l'Amérique vers l'Asie via l'Arctique</li>
        </ul>
        <div class="highlight-box"><p><strong>Preuve de la dérive continentale :</strong> Alfred Wegener (1912) nota que les côtes africaines et sud-américaines s'emboîtent, que les mêmes fossiles (Lystrosaurus, Glossopteris) se trouvent sur des continents séparés, et que les chaînes de montagnes s'alignent d'un continent à l'autre. Sa théorie fut confirmée dans les années 1960 par la cartographie des fonds océaniques et la découverte de l'expansion des dorsales.</p></div>
''')

# meteorologie/atmosphere: add ozone and chemistry
append_to_contenu('meteorologie/atmosphere', '''
        <h3>La couche d'ozone et la chimie atmosphérique</h3>
        <p>L'<strong>ozone stratosphérique</strong> (O₃) forme un écran absorbant 97–99 % des UV-B et UV-C solaires. La couche d'ozone s'étend de 15 à 35 km d'altitude :</p>
        <ul>
          <li>Formation : O₂ + photon → 2O ; O + O₂ → O₃</li>
          <li>Destruction naturelle : O₃ + O → 2 O₂ (équilibre de Chapman)</li>
          <li>Destruction anthropique : les CFC (chlorofluorocarbones) libèrent des radicaux Cl• catalysant la destruction de l'ozone. Le trou de la couche d'ozone au-dessus de l'Antarctique atteignait 29,9 millions de km² en 2006 (record). Le protocole de Montréal (1987), qui a banni les CFC, permet une reconstitution progressive.</li>
        </ul>
        <div class="highlight-box"><p><strong>Effet de serre naturel vs renforcé :</strong> sans effet de serre naturel (H₂O, CO₂, CH₄, N₂O), la température moyenne terrestre serait de –18 °C au lieu de +15 °C. Le renforcement anthropique de l'effet de serre (+ 50 % de CO₂ depuis 1750) entraîne un forçage radiatif de +2,7 W/m² en 2019, responsable du réchauffement observé (+1,1 °C depuis l'ère préindustrielle).</p></div>
''')

# meteorologie/changement-climatique: add tipping points
append_to_contenu('meteorologie/changement-climatique', '''
        <h3>Les points de basculement climatiques</h3>
        <p>Les <strong>tipping points</strong> sont des seuils au-delà desquels le système climatique peut changer de façon irréversible :</p>
        <div class="highlight-box"><p><strong>Principaux tipping points :</strong> Fonte de la calotte groenlandaise (seuil ~1,5–2 °C ; +7 m de montée des eaux sur des siècles) ; désintégration de la calotte ouest-antarctique (seuil ~1,5 °C ; +5 m) ; dépérissement de la forêt amazonienne (50–60 % de déforestation → régime de savane) ; libération du méthane des pergélisols sibériens (rétroaction positive) ; arrêt de l'AMOC (refroidissement brutal de l'Europe du Nord de 5–15 °C).</p></div>

        <h3>Solutions et atténuation</h3>
        <p>Les voies d'atténuation du changement climatique sont multiples :</p>
        <ul>
          <li><strong>Énergies renouvelables</strong> — le solaire photovoltaïque est devenu la source d'électricité la moins chère de l'histoire. La capacité mondiale de solaire + éolien a dépassé celle du nucléaire en 2022</li>
          <li><strong>Efficacité énergétique</strong> — isolation des bâtiments, véhicules électriques, processus industriels</li>
          <li><strong>Forêts et sols</strong> — reboisement, agriculture régénératrice, tourbières</li>
          <li><strong>Captage et stockage du CO₂ (CCS)</strong> — encore marginal mais potentiellement nécessaire pour les émissions résiduelles difficiles à éliminer (aviation, acier, ciment)</li>
        </ul>
''')

# meteorologie/climat-zones: add urban heat islands
append_to_contenu('meteorologie/climat-zones', '''
        <h3>Les microclimats et l'îlot de chaleur urbain</h3>
        <p>À échelle locale, la topographie, la végétation et l'urbanisation créent des <strong>microclimats</strong> distincts du climat régional :</p>
        <ul>
          <li><strong>Effet d'adret/ubac</strong> — en montagne, versant sud (adret) ensoleillé et chaud vs versant nord (ubac) ombragé et froid : végétation et agriculture très différentes sur chaque versant</li>
          <li><strong>Effet de föhn</strong> — air descendant des montagnes se réchauffant adiabatiquement (+1 °C/100 m), créant des vents chauds et secs (föhn des Alpes, chinook des Rocheuses)</li>
          <li><strong>Îlot de chaleur urbain (ICU)</strong> — les villes sont 1 à 5 °C plus chaudes que les campagnes environnantes : absorption solaire par les surfaces minérales sombres, chaleur anthropique, réduction de l'évapotranspiration</li>
        </ul>
        <div class="highlight-box"><p><strong>Adaptation urbaine :</strong> les solutions pour atténuer l'ICU incluent les toits végétalisés et les murs verts, les matériaux à haute réflectivité (« toits blancs »), les îlots de fraîcheur (parcs, fontaines), les corridors de ventilation, et l'arbre en ville (un grand arbre adulte refroidit l'équivalent de 10 climatiseurs pendant les canicules).</p></div>
''')

# meteorologie/phenomenes: add cyclones and optical phenomena
append_to_contenu('meteorologie/phenomenes', '''
        <h3>Les cyclones tropicaux</h3>
        <p>Un <strong>cyclone tropical</strong> est un système dépressionnaire intense se formant sur des océans tropicaux (température de surface > 26–27 °C). Son moteur est l'énergie de condensation de la vapeur d'eau :</p>
        <ul>
          <li>Structure : œil calme (10–50 km), mur de l'œil (vents maximaux), bandes spiralées</li>
          <li>Classification Saffir-Simpson : catégorie 1 (119–153 km/h) à catégorie 5 (≥ 252 km/h)</li>
          <li>Avec le changement climatique : intensification probable des cyclones les plus forts, remontée vers de plus hautes latitudes</li>
        </ul>
        <div class="highlight-box"><p><strong>Surge de tempête :</strong> la montée des eaux côtières due à la dépression atmosphérique et aux vents d'un cyclone est souvent plus meurtrière que les vents eux-mêmes. Le cyclone Bhola (Bangladesh, 1970 : ~300 000–500 000 morts) et Katrina (Louisiane, 2005 : surge de 8 m, 1 800 morts, 125 milliards de dollars de dégâts) en sont les exemples les plus frappants.</p></div>
''')

# meteorologie/previsions: add AI and predictability horizon
append_to_contenu('meteorologie/previsions', '''
        <h3>L'intelligence artificielle dans la prévision météorologique</h3>
        <p>Depuis 2022–2023, les modèles d'<strong>intelligence artificielle</strong> (deep learning) révolutionnent la prévision météorologique :</p>
        <div class="highlight-box"><p><strong>GraphCast (Google DeepMind, 2023) :</strong> modèle de réseau de neurones entraîné sur 40 ans de données ERA5 du ECMWF. Il prédit 10 jours de météo mondiale à 0,25° de résolution en moins d'une minute (contre 1 heure pour les modèles numériques classiques), avec une précision supérieure au modèle IFS de l'ECMWF sur 90 % des variables testées. D'autres modèles IA (Pangu-Weather, FourCastNet, Aurora de Microsoft) montrent des performances similaires.</p></div>

        <h3>La prévisibilité et l'horizon temporel</h3>
        <p>La météorologie est fondamentalement limitée dans sa précision à long terme par la <strong>sensibilité aux conditions initiales</strong> (effet papillon, théorie du chaos de Lorenz, 1963) :</p>
        <ul>
          <li><strong>1–3 jours</strong> : prévisions fiables à plus de 90 % ; détail des phénomènes possible</li>
          <li><strong>4–7 jours</strong> : bonnes tendances, incertitudes sur timing et localisation précise</li>
          <li><strong>8–14 jours</strong> : prévisions probabilistes, grandes tendances seulement</li>
          <li><strong>Au-delà de 2 semaines</strong> : climatologie probabiliste, pas de prévision déterministe</li>
        </ul>
''')

# oceanographie/oceans: add ocean governance
append_to_contenu('oceanographie/oceans', '''
        <h3>Les ressources océaniques et la gouvernance des mers</h3>
        <p>L'océan est une source immense de ressources, réglementées par le <strong>droit de la mer</strong> (Convention UNCLOS, 1982) :</p>
        <ul>
          <li><strong>Mer territoriale</strong> — 12 milles nautiques (22 km) ; souveraineté complète de l'État côtier</li>
          <li><strong>Zone économique exclusive (ZEE)</strong> — 200 milles (370 km) ; droits souverains sur les ressources biologiques et minières. La ZEE française (11 millions de km²) est la plus grande du monde</li>
          <li><strong>Haute mer</strong> — au-delà des ZEE, patrimoine commun de l'humanité géré par l'AIFM pour les fonds marins</li>
        </ul>
        <div class="highlight-box"><p><strong>Ressources halieutiques :</strong> la pêche mondiale capture environ 90 millions de tonnes de poissons et crustacés par an. L'aquaculture fournit désormais plus de 50 % des poissons consommés dans le monde. Le thon rouge atlantique, le saumon sauvage du Pacifique, et de nombreux stocks de cabillaud sont surexploités.</p></div>

        <h3>L'océan et le cycle du carbone</h3>
        <p>L'océan joue un rôle central dans la régulation du CO₂ atmosphérique :</p>
        <ul>
          <li>La <strong>pompe physico-chimique</strong> : le CO₂ se dissout plus facilement dans les eaux froides (eaux polaires plongeant vers l'abyssal) → séquestration à long terme</li>
          <li>La <strong>pompe biologique</strong> : le phytoplancton absorbe le CO₂ par photosynthèse ; une partie de la matière organique tombe vers le fond (« neige marine ») → séquestration sur des siècles</li>
          <li>L'océan absorbe 25 % du CO₂ anthropique annuel (~10 GtCO₂/an), ralentissant le changement climatique mais s'acidifiant progressivement</li>
          <li>Il absorbe également plus de 90 % de la chaleur excédentaire due à l'effet de serre renforcé</li>
        </ul>
''')

# ============================================================
# Save
# ============================================================
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/terre.json','w',encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved successfully!")

# Verify char counts
print("\nFinal char counts:")
for key, page in data['pages'].items():
    t = page.get('type','')
    c = len(page.get('content',''))
    if t == 'lesson':
        status = "OK" if c >= 15000 else f"NEED +{15000-c}"
        print(f"  {key}: {c} chars — {status}")
