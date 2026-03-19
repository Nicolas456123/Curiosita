#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichissement des 3 articles restants - Environnement."""

import json, re

FILE = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/environnement.json"

ENRICHMENTS = {
"pollution/pollution-eau": """
<h3>Les polluants émergents : microplastiques et résidus pharmaceutiques</h3>
<p class="resume-text">Au-delà des polluants industriels traditionnels, les scientifiques s'inquiètent croissamment des polluants émergents. Les microplastiques (fragments inférieurs à 5 mm) envahissent les milieux aquatiques : on en trouve dans les eaux douces et marines, mais aussi dans les neiges polaires et le sang humain. Ils proviennent de la fragmentation des macroplastiques, des microbilles des cosmétiques et des fibres synthétiques libérées lors du lavage des vêtements. Une étude de 2022 a montré que chaque être humain ingère environ 5 grammes de microplastiques par semaine — l'équivalent d'une carte de crédit.</p>
<p class="resume-text">Les résidus pharmaceutiques constituent une autre préoccupation majeure : les médicaments non métabolisés traversent souvent incomplètement les stations d'épuration et se retrouvent dans les cours d'eau. Des œstrogènes synthétiques issus des contraceptifs oraux ont été détectés dans les rivières à des concentrations suffisantes pour perturber la reproduction des poissons. Des antibiotiques dans les effluents agricoles et hospitaliers favorisent l'émergence de bactéries résistantes dans les écosystèmes aquatiques, posant un problème de santé publique globale. La France recense plus de 3 000 molécules pharmaceutiques différentes dans ses eaux superficielles.</p>
<div class="highlight-box"><p>Des microplastiques ont été détectés dans les placentas humains, dans les poumons, dans le sang et dans les fèces de nouveau-nés. Leurs effets sanitaires à long terme restent inconnus, mais des études montrent des effets inflammatoires et perturbateurs endocriniens à des concentrations élevées.</p></div>

<h3>Les solutions pour la protection des ressources en eau</h3>
<p class="resume-text">La dépollution des eaux usées s'est considérablement améliorée dans les pays développés. Les stations d'épuration modernes utilisent plusieurs étapes : décantation primaire, traitement biologique secondaire (bactéries aérobies décomposent la matière organique), et parfois un traitement tertiaire (filtration membranaire, ozonation, UV) pour éliminer les micropolluants. La directive européenne sur les eaux résiduaires urbaines, renforcée en 2022, oblige les villes à traiter leurs eaux usées avec des normes croissantes. L'assainissement non collectif (fosses septiques) reste cependant une source significative de pollution diffuse en milieu rural.</p>
<p class="resume-text">Les zones tampons riveraines — bandes de végétation le long des cours d'eau — jouent un rôle crucial dans la filtration des polluants agricoles. Les nitrates et phosphates sont absorbés par les plantes ; les bactéries du sol dénitrifient les nitrates ; les sédiments chargés en pesticides sont piégés par la végétation racinaire. En France, une bande enherbée de 5 mètres est obligatoire le long des cours d'eau, mais des études montrent que des bandes de 20 à 50 mètres sont nécessaires pour une efficacité optimale. Le développement des phytoremédiation — utilisation de plantes spécifiques pour absorber les polluants des eaux — offre des perspectives prometteuses pour les petits cours d'eau contaminés.</p>
<div class="highlight-box"><p>La ville de New York a fait un choix remarquable pour son alimentation en eau potable : plutôt d'investir 6 à 8 milliards de dollars dans une station de traitement, elle a dépensé 1,5 milliard pour restaurer et protéger les bassins versants des Catskills qui alimentent ses réservoirs. Ce "capital naturel" fournit une eau de qualité suffisante sans traitement chimique intensif — un exemple pionnier de paiement pour services écosystémiques.</p></div>
""",

"biodiversite/extinction-especes": """
<h3>Mesurer l'extinction : des indicateurs d'une crise en cours</h3>
<p class="resume-text">Quantifier l'extinction des espèces est scientifiquement difficile : nous ne connaissons même pas le nombre d'espèces vivant sur Terre (estimations entre 8 et 10 millions, dont moins de 2 millions décrites). La Liste rouge de l'UICN évalue le statut de conservation des espèces selon des critères standardisés. En 2023, elle recense plus de 45 000 espèces menacées sur les 150 000 évaluées — mais ce chiffre ne reflète que les espèces suffisamment connues pour être évaluées, les invertébrés et champignons étant massivement sous-représentés.</p>
<p class="resume-text">Le taux d'extinction actuel est estimé entre 100 et 1 000 fois le taux naturel de fond. Le concept de "déficit d'extinction" (extinction debt) est particulièrement inquiétant : des espèces dont les populations sont trop fragmentées ou réduites pour être viables à long terme sont condamnées mais n'ont pas encore disparu — cette dette sera remboursée dans les décennies futures. Le Rapport Planète Vivante 2022 du WWF constate un déclin moyen de 69 % des populations de vertébrés sauvages surveillées depuis 1970.</p>
<div class="highlight-box"><p>Depuis 1970, les populations d'insectes ont décliné de 75 % en masse dans les zones protégées allemandes — un phénomène qualifié d'"apocalypse des insectes". Comme les insectes pollinisent 75 % des cultures alimentaires mondiales et constituent la base des chaînes alimentaires terrestres, leur déclin menace l'ensemble des écosystèmes et la sécurité alimentaire humaine.</p></div>

<h3>Les hotspots de biodiversité : concentrations d'espèces menacées</h3>
<p class="resume-text">Norman Myers a introduit en 1988 le concept de "hotspot de biodiversité" pour identifier les régions qui concentrent à la fois une richesse exceptionnelle en espèces endémiques et une menace élevée. Un hotspot doit abriter au moins 1 500 espèces végétales endémiques et avoir perdu plus de 70 % de sa végétation originelle. Les 36 hotspots actuellement reconnus couvrent seulement 2,5 % de la surface terrestre mais abritent plus de 50 % des plantes vasculaires et plus de 40 % des vertébrés terrestres comme espèces endémiques.</p>
<p class="resume-text">Les hotspots comprennent les Andes tropicales (la plus riche des régions avec 45 000 espèces végétales dont 20 000 endémiques), Madagascar (90 % de sa faune est endémique, dont les lémuriens), les forêts des Ghâts occidentaux en Inde, et la Nouvelle-Calédonie (avec 74 % de plantes endémiques). Ces régions concentrent les priorités de conservation mondiale, mais leur protection reste souvent insuffisante face aux pressions économiques.</p>
<div class="highlight-box"><p>Madagascar est souvent qualifiée de "huitième continent" : 90 % de ses espèces animales et 80 % de ses plantes ne se trouvent nulle part ailleurs sur Terre. Pourtant, 90 % de ses forêts ont été détruites, et plus des deux tiers de ses espèces sont désormais menacées d'extinction.</p></div>

<h3>Les programmes de sauvegarde : résultats concrets</h3>
<p class="resume-text">La biologie de la conservation a développé des outils pour enrayer les extinctions. Les programmes d'élevage en captivité et de réintroduction ont sauvé plusieurs espèces : le condor de Californie (27 individus en 1987, 500+ aujourd'hui), le bison européen (disparu à l'état sauvage en 1927, réintroduit avec succès), le cheval de Przewalski (disparu dans la nature dans les années 1960, réintroduit en Mongolie). Les banques de graines, comme le Svalbard Global Seed Vault qui stocke 1,3 million d'échantillons, préservent la diversité génétique des plantes cultivées.</p>
<p class="resume-text">Les approches génomiques modernes transforment la conservation : le séquençage ADN environnemental (eDNA) permet de détecter la présence d'espèces rares à partir d'échantillons d'eau ou de sol, sans capturer ni observer directement les animaux. La génomique des populations permet d'identifier les populations génétiquement distinctes prioritaires pour la conservation. Des projets ambitieux comme l'Earth BioGenome Project visent à séquencer le génome de toutes les espèces eucaryotes d'ici 10 ans — créant une "bibliothèque de la vie" pour les générations futures.</p>
<div class="highlight-box"><p>L'Accord de Kunming-Montréal sur la biodiversité (COP15, 2022) a fixé l'objectif "30x30" : protéger 30 % des terres et des mers d'ici 2030, et restaurer 30 % des écosystèmes dégradés. Il vise aussi à mobiliser 200 milliards de dollars par an pour la biodiversité, dont 30 milliards de transferts Nord-Sud. Ces objectifs représentent une ambition sans précédent, mais leur mise en œuvre dépend des engagements nationaux concrets.</p></div>
""",

"biodiversite/deforestation": """
<h3>Les conséquences écologiques : fragmentation et perturbation des cycles hydrologiques</h3>
<p class="resume-text">La déforestation ne réduit pas seulement la superficie des forêts — elle fragmente les habitats en îlots isolés, souvent plus dommageable que la perte brute de surface. La fragmentation crée des effets de lisière : les zones proches des bordures subissent une intrusion de lumière, de vent et d'espèces invasives. Une forêt fragmentée supporte bien moins d'espèces qu'une seule grande forêt de même superficie totale. Les grands prédateurs, dont les domaines vitaux sont immenses, sont les premiers touchés.</p>
<p class="resume-text">Les forêts tropicales "pompent" l'eau par évapotranspiration, créant des rivières atmosphériques qui transportent l'humidité vers l'intérieur des continents. Au Brésil, les forêts amazoniennes sont essentielles aux précipitations du Centre-Ouest et du Sud. Des modélisations suggèrent qu'au-delà d'un seuil de déforestation d'environ 20 à 25 % de l'Amazonie, le cycle hydrologique pourrait s'effondrer, transformant une partie de la forêt en savane — un point de basculement potentiellement irréversible. Or, environ 17 % de l'Amazonie a déjà été déboisée.</p>
<div class="highlight-box"><p>La déforestation tropicale émet environ 4,8 Gt de CO₂ par an, représentant 12 % des émissions mondiales de GES. Simultanément, les forêts restantes absorbent environ 2,6 Gt de CO₂ par an. Protéger et restaurer les forêts est donc une double priorité : éviter les émissions de déforestation ET maintenir l'absorption de carbone atmosphérique.</p></div>

<h3>REDD+ et les mécanismes financiers pour la protection des forêts</h3>
<p class="resume-text">REDD+ (Réduction des Émissions liées à la Déforestation et à la Dégradation des forêts) est un mécanisme international visant à compenser financièrement les pays en développement pour la préservation de leurs forêts. Les pays mesurent leur déforestation par rapport à un niveau de référence et reçoivent des paiements proportionnels aux émissions évitées. Ce mécanisme crée une valeur économique pour les forêts vivantes, susceptible de concurrencer les revenus de l'agriculture ou de l'exploitation forestière.</p>
<p class="resume-text">Le marché volontaire du carbone forestier a explosé dans les années 2020, atteignant 2 milliards de dollars en 2021. Mais une enquête de 2023 (The Guardian, Zeit) a révélé que des projets REDD+ certifiés par Verra auraient généré des crédits carbone largement surestimés par des modèles contrefactuels incorrects. Ces révélations ont conduit à une crise de confiance dans les compensations carbone forestières et à des réformes des standards de certification. La rigueur méthodologique et la transparence des données sont des conditions essentielles à la crédibilité de ces mécanismes.</p>
<div class="highlight-box"><p>Au Brésil, la déforestation amazonienne a été réduite de 70 % entre 2004 et 2012 grâce à une combinaison de politiques publiques : moratoire soja (les grands acheteurs s'engagent à ne pas acheter de soja cultivé sur des terres récemment déforestées), renforcement des contrôles par satellite, expansion du réseau de parcs nationaux et des territoires indigènes. Cette période est considérée comme l'une des plus grandes réussites de conservation jamais réalisées à grande échelle.</p></div>

<h3>La restauration forestière : ambitions mondiales et défis pratiques</h3>
<p class="resume-text">La restauration forestière est devenue un axe majeur des politiques climatiques. Le Défi de Bonn vise à restaurer 350 millions d'hectares d'ici 2030. La Décennie des Nations unies pour la restauration des écosystèmes (2021-2030) mobilise gouvernements, entreprises et ONG. Cependant, la restauration mal conçue peut être contre-productive : planter des monocultures d'espèces exotiques dans des savanes ou des prairies naturelles détruit des écosystèmes de haute valeur pour la biodiversité sous couvert de "reboisement".</p>
<p class="resume-text">La régénération naturelle assistée (FMNR) s'impose souvent comme l'approche la plus efficace et moins coûteuse : plutôt que de planter des arbres, on protège et gère la repousse naturelle à partir des racines et souches existantes. Au Niger, cette méthode a régénéré 5 millions d'hectares en 20 ans, améliorant la fertilité des sols et les rendements agricoles. En Équateur et au Costa Rica, des paiements pour services environnementaux rémunèrent les propriétaires fonciers qui laissent leurs terres se revégétaliser naturellement — une approche à la fois efficace et économiquement rationnelle.</p>
<div class="highlight-box"><p>La Chine a planté plus de 66 milliards d'arbres depuis 1978 dans le cadre du programme "Grande Muraille verte" (Three-North Shelter Forest), ciblant la désertification dans le nord du pays. Bien que remarquable par son ampleur, ce programme a souvent planté des monocultures peu résistantes à la sécheresse et peu bénéfiques pour la biodiversité, illustrant les limites d'une approche quantitative sans considération écologique.</p></div>
"""
}

def inject_before_quiz(content, new_text):
    pattern = r'(</section>\s*\n\n<section[^>]*id="quiz")'
    result = re.sub(pattern, new_text + r'\1', content)
    if result == content:
        # Try alternate pattern
        pattern2 = r'(</section>\s*<section[^>]*id="quiz")'
        result = re.sub(pattern2, new_text + r'\1', content)
    return result

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

modified = 0
for key, enrichment in ENRICHMENTS.items():
    if key in data['pages']:
        page = data['pages'][key]
        orig_len = len(page['content'])
        page['content'] = inject_before_quiz(page['content'], enrichment)
        new_len = len(page['content'])
        print(f"  {key}: {orig_len} -> {new_len} (+{new_len-orig_len})")
        modified += 1

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nDone. {modified} pages updated.")

# Verify JSON
with open(FILE, 'r', encoding='utf-8') as f:
    check = json.load(f)
print("JSON validation: OK")
