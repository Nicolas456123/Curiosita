import json, sys
sys.stdout.reconfigure(encoding='utf-8')

path = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/ingenierie.json'
with open(path, encoding='utf-8') as f:
    data = json.load(f)

MARKER = '</section>\n\n<section class="content-section" id="quiz">'

def add_to_contenu(content, extra_html):
    return content.replace(MARKER, extra_html + MARKER, 1)

enrichments = {}

enrichments['mecanique/forces-et-mouvements'] = (
    '<h3>Travail, énergie et puissance</h3>'
    '<p class="resume-text">Le <strong>travail</strong> d\'une force est le produit scalaire de cette force par le déplacement du point d\'application : W = F·d·cos(θ). Lorsqu\'une force est parallèle au déplacement, le travail est maximal ; lorsqu\'elle est perpendiculaire (force normale, force centripète), il est nul. Le <strong>théorème travail-énergie</strong> établit que la variation d\'énergie cinétique d\'un système est égale au travail total des forces appliquées. Ce principe simplifie le calcul des vitesses dans les machines en évitant d\'analyser chaque instant du mouvement.</p>'
    '<p class="resume-text">L\'<strong>énergie potentielle gravitationnelle</strong> est mgz, et l\'énergie potentielle d\'un ressort est ½kx². La somme de l\'énergie cinétique et de l\'énergie potentielle constitue l\'énergie mécanique totale, qui se conserve en l\'absence de forces dissipatives (frottement). Un pendule, un plongeoir, une bille dans un toboggan : tous illustrent les conversions continues entre énergie cinétique et potentielle. Les ingénieurs exploitent ce principe pour concevoir des amortisseurs d\'oscillations (EVA dans les chaussures de sport, suspensions automobiles).</p>'
    '<p class="resume-text">La <strong>puissance</strong> est le travail fourni par unité de temps. Un moteur développe une puissance P = F·v (force multipliée par vitesse) ou P = C·ω (couple multiplié par vitesse angulaire) pour les machines tournantes. Un moteur de voiture développant 100 kW à 150 km/h applique une force de 2400 N sur les roues. Cette relation simple permet de dimensionner les motorisations en fonction des performances visées.</p>'
    '<div class="highlight-box"><p>La conservation de l\'énergie mécanique explique pourquoi un pendule revient toujours à sa hauteur initiale en l\'absence de frottement — et pourquoi les montagnes russes peuvent se passer de moteur entre les crêtes.</p></div>'
    '<h3>Quantité de mouvement et collisions</h3>'
    '<p class="resume-text">La <strong>quantité de mouvement</strong> (p = mv) est une grandeur vectorielle conservée dans les systèmes isolés. En crash automobile, la quantité de mouvement totale des deux véhicules avant impact égale celle après impact. Les ingénieurs automobiles exploitent ce principe pour concevoir des zones d\'absorption capables de dissiper l\'énergie cinétique par déformation progressive, sans compromettre l\'habitacle. Les tests EuroNCAP valident ces conceptions avec des mannequins instrumentés.</p>'
    '<p class="resume-text">Le <strong>moment cinétique</strong> est l\'analogue rotationnel de la quantité de mouvement. Il se conserve en l\'absence de couple extérieur — ce qui explique pourquoi un patineur accélère sa rotation en rapprochant ses bras (réduction du moment d\'inertie, augmentation de la vitesse angulaire pour conserver le moment cinétique). Ce principe gouverne la stabilité des gyroscopes, des satellites à stabilisation gyroscopique et des toupies.</p>'
    '<div class="highlight-box"><p>Dans tout choc, la quantité de mouvement totale se conserve — même lorsque l\'énergie cinétique est partiellement dissipée sous forme de chaleur et de déformation plastique.</p></div>'
    '<h3>Applications modernes en ingénierie</h3>'
    '<p class="resume-text">La mécanique classique reste incontournable en <strong>ingénierie automobile</strong>. Les calculs de crash (tests d\'impact) utilisent les lois de Newton pour simuler le comportement des structures lors d\'une collision. Les codes de calcul comme LS-DYNA permettent de modéliser des millions de degrés de liberté et prédire les déformations à la microseconde près, remplaçant des centaines de prototypes physiques coûteux.</p>'
    '<p class="resume-text">En <strong>génie spatial</strong>, les perturbations orbitales dues aux forces gravitationnelles de la Lune et du Soleil sont calculées par mécanique newtonienne. La correction d\'orbite de la Station spatiale internationale nécessite des poussées précisément calculées pour compenser la traînée atmosphérique résiduelle à 400 km d\'altitude. L\'ingénierie balistique, des missiles aux satellites de télécommunications, repose entièrement sur ces principes.</p>'
    '<p class="resume-text">En <strong>robotique</strong>, la cinématique inverse et la dynamique inverse sont des applications directes de la mécanique classique. Les simulateurs de vol reproduisent les équations du mouvement en temps réel pour entraîner les pilotes à des situations extrêmes (turbulences, pannes moteur) impossible à reproduire en conditions réelles.</p>'
    '<div class="highlight-box"><p>La mécanique newtonienne reste valide pour tout objet à vitesse bien inférieure à celle de la lumière — couvrant la quasi-totalité des applications d\'ingénierie, de la construction automobile aux satellites.</p></div>'
)

enrichments['mecanique/dynamique-des-systemes'] = (
    '<h3>Systèmes masse-ressort-amortisseur</h3>'
    '<p class="resume-text">Le système <strong>masse-ressort-amortisseur</strong> est le modèle élémentaire de la dynamique des structures. Son équation de mouvement est : m·ẍ + c·ẋ + k·x = F(t). La <strong>fréquence propre</strong> ω₀ = √(k/m) est la fréquence à laquelle le système oscille naturellement. L\'<strong>amortissement</strong> est caractérisé par le rapport d\'amortissement ξ = c/(2√(km)) : sous-amorti (ξ &lt; 1), critique (ξ = 1) ou sur-amorti (ξ &gt; 1). Ce modèle capture l\'essentiel du comportement vibratoire de nombreux systèmes réels.</p>'
    '<p class="resume-text">La <strong>résonance</strong> survient lorsque la fréquence d\'excitation coïncide avec la fréquence propre. L\'amplitude des oscillations peut atteindre des valeurs destructrices dans les systèmes faiblement amortis. En 1940, l\'effondrement du pont de Tacoma (Washington) illustra ce phénomène : le vent créait des oscillations entretenues à la fréquence propre du tablier. La conception des structures impose d\'éloigner les fréquences propres des fréquences d\'excitation prévisibles.</p>'
    '<div class="highlight-box"><p>La résonance peut amplifier les vibrations par un facteur 100 ou plus dans les systèmes faiblement amortis — une donnée critique pour la conception de structures, turbines et ponts.</p></div>'
    '<h3>Analyse modale et vibrations des structures</h3>'
    '<p class="resume-text">Les structures réelles ont de nombreux <strong>modes propres de vibration</strong>, chacun correspondant à une forme de déformée particulière et une fréquence associée. L\'analyse modale expérimentale utilise des accéléromètres et des marteaux d\'impact pour mesurer les fonctions de réponse en fréquence. La méthode des éléments finis calcule les fréquences propres et modes de vibration de structures complexes avec des logiciels ANSYS, Abaqus ou NASTRAN.</p>'
    '<p class="resume-text">En ingénierie civile, la <strong>dynamique sismique</strong> analyse la réponse des bâtiments aux séismes. Le spectre de réponse caractérise l\'agression sismique en fonction de la fréquence propre de la structure. Les bâtiments de grande hauteur ont des fréquences propres basses et répondent différemment aux secousses que les constructions rigides. Les amortisseurs de masse accordée (TMD) comme celui de la Tour Taipei 101 (660 tonnes) réduisent les oscillations de 40%.</p>'
    '<div class="highlight-box"><p>L\'analyse modale est obligatoire pour toute structure soumise à des vibrations : turbines, ponts, avions, bâtiments en zone sismique.</p></div>'
    '<h3>Régulation et contrôle des systèmes dynamiques</h3>'
    '<p class="resume-text">Un <strong>système de contrôle</strong> maintient une variable à une valeur désirée malgré les perturbations. Le régulateur PID (Proportionnel-Intégral-Dérivé) est le plus utilisé dans l\'industrie : le terme proportionnel corrige l\'erreur actuelle, l\'intégral élimine l\'erreur statique, et le dérivé anticipe les variations rapides. 90% des boucles de contrôle industrielles utilisent un PID — de la régulation de température aux drones.</p>'
    '<p class="resume-text">La <strong>transformée de Laplace</strong> transforme les équations différentielles en équations algébriques. La fonction de transfert relie la sortie à l\'entrée dans le domaine de Laplace. Le diagramme de Bode représente graphiquement le gain et la phase en fonction de la fréquence, permettant d\'évaluer la stabilité et les performances du système en boucle fermée.</p>'
    '<p class="resume-text">En <strong>aérospatiale</strong>, le contrôle de vol de l\'Airbus A320 (fly-by-wire) utilise des algorithmes qui intègrent plusieurs centaines de paramètres de vol et envoient des consignes aux actionneurs hydrauliques en temps réel, interdisant les enveloppes de vol dangereuses tout en laissant une large liberté au pilote.</p>'
    '<div class="highlight-box"><p>Le régulateur PID est présent dans 90% des boucles de contrôle industrielles — de la régulation de température à la stabilisation de drones, en passant par le contrôle des turbines à vapeur.</p></div>'
)

enrichments['mecanique/resistance-des-materiaux'] = (
    '<h3>Flexion des poutres : théorie et applications</h3>'
    '<p class="resume-text">La <strong>théorie de la flexion des poutres</strong> (formule de Navier) est le cœur de la résistance des matériaux. Pour une poutre soumise à un moment fléchissant M, la contrainte normale à une distance y de l\'axe neutre vaut σ = M·y/I, où I est le moment d\'inertie de la section. Cette formule montre qu\'il est plus efficace de placer la matière loin de l\'axe neutre — c\'est le principe des profilés en I (IPE, HEA) qui concentrent la matière dans les semelles.</p>'
    '<p class="resume-text">La <strong>flèche</strong> d\'une poutre (déflexion sous charge) s\'obtient par double intégration de l\'équation de la ligne élastique. Pour une poutre simplement appuyée chargée en son centre, la flèche maximale est fmax = FL³/(48EI). Doubler la hauteur d\'une section réduit la flèche par un facteur 8. Les Eurocodes imposent des limites de flèche (L/300 à L/500 selon l\'usage) pour éviter les dommages aux cloisons et les sensations d\'inconfort pour les occupants.</p>'
    '<div class="highlight-box"><p>Doubler la hauteur d\'une poutre multiplie son moment d\'inertie par 8 et réduit sa flèche dans la même proportion — l\'efficacité des poutres en I vient de ce principe simple.</p></div>'
    '<h3>Flambement et instabilité des structures</h3>'
    '<p class="resume-text">Le <strong>flambement</strong> est un phénomène d\'instabilité affectant les éléments comprimés élancés. La charge critique d\'Euler est Fcr = π²EI/L²eff. Au-delà de cette charge, la colonne se déforme latéralement de façon soudaine et catastrophique. L\'élancement λ = Leff/rayon de giration détermine le comportement : les colonnes peu élancées cèdent par plastification, les très élancées par flambement élastique.</p>'
    '<p class="resume-text">Le <strong>voilement</strong> des plaques minces affecte les âmes des poutres, les coques de réservoirs et les panneaux des fuselages d\'avions. Les ingénieurs aéronautiques travaillent en post-voilement (la plaque est voilée mais reste portante grâce à l\'effet de membrane), permettant de réduire la masse de la structure. Les raidisseurs longitudinaux et transversaux (stringers, frames) des fuselages reprennent les efforts post-voilement.</p>'
    '<p class="resume-text">Les <strong>critères de plasticité</strong> (Von Mises, Tresca) déterminent quand un matériau commence à se déformer plastiquement. Le critère de Von Mises, basé sur l\'énergie de distorsion, est le plus précis pour les métaux. En conception plastique (Eurocode 3 pour l\'acier), on exploite la redistribution d\'efforts due à la plastification pour atteindre l\'état limite ultime — permettant de dimensionner des structures plus légères qu\'en élasticité pure.</p>'
    '<div class="highlight-box"><p>Les colonnes du Parthénon ont un élancement si faible qu\'elles ne risquent pas le flambement — mais les mâts de voiliers de course, eux, sont soigneusement dimensionnés contre ce phénomène à chaque manœuvre.</p></div>'
)

enrichments['mecanique/machines-et-mecanismes'] = (
    '<h3>Engrenages et transmissions mécaniques</h3>'
    '<p class="resume-text">Les <strong>engrenages</strong> transmettent le mouvement entre deux arbres parallèles (cylindriques) ou perpendiculaires (coniques). Le rapport de transmission est inversement proportionnel aux nombres de dents. Les engrenages hélicoïdaux, dont les dents sont inclinées, offrent un fonctionnement plus silencieux et une capacité portante 30% supérieure aux engrenages droits. Les dentures taillées au profil en développante de cercle garantissent un rapport de transmission constant tout au long du contact.</p>'
    '<p class="resume-text">Les <strong>réducteurs de vitesse</strong> combinent plusieurs étages d\'engrenages pour obtenir des rapports élevés. Les trains épicycloïdaux (planétaires) concentrent une grande puissance dans un volume minimal grâce à la répartition de la charge sur plusieurs satellites. Les boîtes de vitesses automatiques automobiles et les réducteurs d\'éoliennes utilisent des trains épicycloïdaux à plusieurs rapports. Un réducteur planétaire peut atteindre un rapport de 1000:1 dans un encombrement minimal.</p>'
    '<div class="highlight-box"><p>Les transmissions par engrenages ont des rendements de 96-99% par étage — un réducteur à 3 étages conserve encore 88% de la puissance, bien supérieur aux transmissions par courroie (90-95%) ou chaîne (95-98%).</p></div>'
    '<h3>Mécanismes spéciaux et précision</h3>'
    '<p class="resume-text">Les <strong>mécanismes complaisants</strong> (flexures) utilisent la déformation élastique de matériaux pour réaliser des mouvements de précision sans jeu ni frottement. Les lames de flexion, les pivots monolithiques et les liaisons parallélogrammes sont taillés dans un seul bloc de matière. Ces mécanismes équipent les têtes de lecture de disques durs, les micro-balances analytiques et les interféromètres gravitationnels (LIGO).</p>'
    '<p class="resume-text">Les <strong>vis à billes</strong> transforment le mouvement de rotation en translation avec une efficacité de 90-95%, contre 30-40% pour les vis trapézoïdales classiques. Elles équipent les machines-outils CNC, les robots et les vérins électromécaniques. Le préchargement des billes élimine le jeu axial et permet une précision de positionnement au micromètre.</p>'
    '<p class="resume-text">Les <strong>MEMS</strong> (Micro-Electro-Mechanical Systems) étendent la mécanique à l\'échelle du micron. Les accéléromètres MEMS des smartphones contiennent une masse suspendue par des ressorts de quelques micromètres d\'épaisseur. Les gyroscopes MEMS mesurent la rotation grâce à l\'effet Coriolis. Ces composants à moins de 1 euro ont révolutionné la navigation, les airbags automobiles et l\'interactivité des appareils mobiles.</p>'
    '<div class="highlight-box"><p>Les MEMS du sac gonflable (airbag) détectent la décélération d\'un choc en quelques microsecondes et déclenchent l\'inflation en 30 ms — un exemple de mécanisme microscopique aux conséquences vitales.</p></div>'
)

enrichments['mecanique/tribologie'] = (
    '<h3>Lubrification et films minces</h3>'
    '<p class="resume-text">La <strong>lubrification hydrodynamique</strong> crée un film de lubrifiant qui sépare complètement les surfaces mobiles. Lorsqu\'un arbre tourne dans son palier, le mouvement relatif et la géométrie convergente génèrent une pression hydrodynamique qui supporte la charge. L\'épaisseur minimale du film dépend de la vitesse, de la viscosité du lubrifiant et de la charge — conditions décrites par l\'équation de Reynolds.</p>'
    '<p class="resume-text">La <strong>courbe de Stribeck</strong> illustre les trois régimes de lubrification : lubrification limite (contact métal-métal, frottement élevé), régime mixte (film partiel) et régime hydrodynamique (film complet, frottement minimal). Les paliers de moteurs à combustion connaissent ces trois régimes au démarrage, en accélération et en régime établi. La lubrification élastohydrodynamique (EHD) se produit dans les contacts hertziens des engrenages et roulements, où les pressions locales (1-3 GPa) solidifient temporairement le lubrifiant.</p>'
    '<div class="highlight-box"><p>Les roulements de turbines aéronautiques tournent à 20 000 tr/min avec des films lubrifiants de quelques micromètres — la tribologie est une question de survie pour ces systèmes.</p></div>'
    '<h3>Revêtements tribologiques et nouveaux lubrifiants</h3>'
    '<p class="resume-text">Les <strong>traitements de surface</strong> (cémentation, nitruration, trempe superficielle) créent une couche dure en surface tout en conservant un cœur tenace. La nitruration forme des nitrures durs et améliore la résistance à l\'usure des engrenages de 5 à 10 fois. Les dépôts PVD (Physical Vapor Deposition) — TiN, CrN, DLC — déposent des couches ultra-minces (1-10 μm) de matériaux très durs sur les outils de coupe et pièces tribologiques.</p>'
    '<p class="resume-text">Les <strong>revêtements DLC</strong> (Diamond-Like Carbon) réduisent le coefficient de frottement à 0,05 — dix fois moins que l\'acier sur acier — et équipent les segments de pistons des moteurs modernes, les outils de microusinage et les implants orthopédiques. Les lubrifiants à nanoparticules (fullerènes, graphène, MoS₂) créent des couches d\'extrême-pression qui protègent les surfaces lors des démarrages à froid ou sous fortes charges.</p>'
    '<p class="resume-text">La <strong>biotribologie</strong> étudie les contacts dans les systèmes biologiques. Les prothèses de hanche (tête fémorale + cotyle) doivent résister à 20 ans de frottement sous des cycles de charge de plusieurs fois le poids du corps. Les couples de frottement alumine-alumine, zircone-zircone, UHMWPE-métal ont des coefficients de frottement de 0,01-0,10 en milieu lubrifié par le liquide synovial. La tribologie des implants médicaux conditionne leur durée de vie en service.</p>'
    '<div class="highlight-box"><p>La lubrification des articulations humaines (synovie, cartilage) atteint des coefficients de frottement de 0,002 — dix fois inférieurs à la glace sur glace — grâce à la lubrification biphasique du cartilage poreux saturé en liquide.</p></div>'
)

# Apply enrichments
count = 0
for key, extra in enrichments.items():
    if key in data['pages']:
        p = data['pages'][key]
        if p.get('type') == 'course':
            old_len = len(p['content'])
            p['content'] = add_to_contenu(p['content'], extra)
            new_len = len(p['content'])
            print(f"{key}: {old_len} -> {new_len} chars")
            count += 1

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nDone - {count} pages enriched (mecanique section)")
