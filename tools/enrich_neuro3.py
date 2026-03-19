#!/usr/bin/env python3
"""Third pass: enrich all remaining neuro pages under 15000 chars."""
import json

PATH = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/neurosciences.json"

with open(PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)
pages = data['pages']

def inject(key, html):
    page = pages[key]
    content = page['content']
    if '<div class="quiz-nav">' in content:
        content = content.replace('<div class="quiz-nav">', html + '\n<div class="quiz-nav">', 1)
    else:
        idx = content.rfind('</section>')
        content = content[:idx] + html + '\n' + content[idx:]
    page['content'] = content

EXTRA_ATTENTION = """
<h3>L'attention spatiale et le modèle du spotlight</h3>
<p class="resume-text">Michael Posner a conceptualisé l'attention spatiale comme un projecteur pouvant être orienté indépendamment du mouvement oculaire — c'est l'<strong>attention couverte</strong>. Le déplacement de ce projecteur attentionnel coûte environ 150 ms. Le champ attentionnel n'est pas de taille fixe : il peut se contracter pour un traitement fin (mode zoom) ou s'élargir pour une surveillance globale (mode panoramique). Cette flexibilité est régulée par le locus coeruleus noradrénergique.</p>
<p class="resume-text">Le <strong>sillon intrapariétal</strong> code la position des cibles dans un cadre de référence égocentrique actualisé en temps réel lors des mouvements oculaires. La jonction temporo-pariétale (TPJ) détecte les événements saillants non attendus et déclenche une réorientation automatique de l'attention — ce qu'on appelle la capture attentionnelle. Les publicités utilisent ce mécanisme : un mouvement soudain dans le champ visuel capte l'attention avant tout traitement conscient.</p>
"""

EXTRA_LANGAGE = """
<h3>Le bilinguisme et le cerveau</h3>
<p class="resume-text">Les personnes bilingues présentent une organisation cérébrale langagière plus distribuée. L'<strong>avantage exécutif bilingue</strong> — meilleures performances aux tâches nécessitant l'inhibition de réponses automatiques — serait lié à la pratique constante de sélection d'une langue et d'inhibition de l'autre. Bien que ce bénéfice reste débattu, les données d'imagerie montrent une épaisseur accrue du cortex cingulaire antérieur chez les bilingues actifs, région centrale du contrôle exécutif.</p>
<p class="resume-text">La <strong>démence</strong> semble apparaître en moyenne 4-5 ans plus tard chez les bilingues actifs, selon plusieurs études longitudinales — non parce que le cerveau est physiquement protégé, mais parce que la réserve cognitive bilingue permet de compenser plus longtemps les dommages neuronaux avant que les symptômes n'apparaissent. Ce phénomène illustre comment l'utilisation intensive d'un réseau cérébral renforce sa résistance aux détériorations.</p>
"""

inject('cognitive/attention', EXTRA_ATTENTION)
inject('cognitive/langage', EXTRA_LANGAGE)

# ── neuroanatomie pages ───────────────────────────────────────────────────────

inject('neuroanatomie/cortex-cerebral', """
<h3>L'organisation laminaire et les types cellulaires corticaux</h3>
<p class="resume-text">Le néocortex est organisé en six couches (I à VI) différenciées par la densité et le type de leurs neurones. La couche IV reçoit les afférences thalamiques sensorielles (cortex sensoriel primaire). Les couches II-III projettent vers d'autres aires corticales ipsi et contralatérales. La couche V envoie des axones vers le tronc cérébral, la moelle et les ganglions de la base (cortex moteur primaire). La couche VI projette vers le thalamus, bouclant le circuit thalamo-cortical.</p>
<p class="resume-text">Deux grandes classes de neurones peuplent le cortex. Les <strong>neurones pyramidaux</strong> (80-85 % des neurones corticaux), excitateurs, glutamatergiques, avec un long axone myélinisé, sont les unités de communication longue distance. Les <strong>interneurones</strong> (15-20 %), inhibiteurs, GABAergiques, forment des circuits locaux de contrôle précis : les cellules en panier inhibent le soma des pyramidaux, les cellules de Chandelier leur segment initial d'axone, les cellules de Martinotti leur arbre dendritique apical.</p>
<div class="highlight-box"><p><strong>Colonnes corticales :</strong> Vernon Mountcastle a proposé en 1957 que la colonne corticale (100-300 µm de diamètre, s'étendant sur les 6 couches) est l'unité fonctionnelle fondamentale du néocortex. Les neurones d'une même colonne répondent aux mêmes propriétés de stimulus et se connectent préférentiellement entre eux, formant un circuit local élémentaire répliqué des milliers de fois à travers tout le cortex.</p></div>

<h3>La connectivité corticale et le connectome humain</h3>
<p class="resume-text">Le cortex est connecté à lui-même par trois types de fibres. Les <strong>fibres en U</strong> (courtes associations) relient des gyri adjacents. Les <strong>fibres d'association longues</strong> (faisceau arqué, cingulum, faisceau longitudinal supérieur) relient des lobes distants au sein d'un hémisphère. Les <strong>commissures</strong> (corps calleux, commissure antérieure) relient les deux hémisphères. Le corps calleux, avec environ 200 millions d'axones, est la plus grande structure de matière blanche du cerveau humain.</p>
<p class="resume-text">Les études de tractographie IRM de diffusion révèlent que la connectivité corticale est hautement non aléatoire : certaines régions sont des hubs fortement connectés (cortex cingulaire postérieur, précuneus, cortex préfrontal médial) tandis que la plupart sont périphériques. Cette organisation en réseau petit-monde minimise les coûts énergétiques du câblage tout en maximisant la vitesse et la flexibilité de communication inter-régionale.</p>

<h3>Les lobes cérébraux et leurs spécialisations fonctionnelles</h3>
<p class="resume-text">Le lobe <strong>frontal</strong> abrite le cortex moteur primaire (gyrus précentral), le cortex prémoteur, le cortex préfrontal (planification, raisonnement, contrôle inhibiteur) et l'aire de Broca (production langagière). Le lobe <strong>pariétal</strong> contient le cortex somatosensoriel primaire (gyrus postcentral), le cortex pariétal associatif (intégration multisensorielle, attention spatiale). Le lobe <strong>temporal</strong> abrite le cortex auditif primaire, l'aire de Wernicke, et le cortex inférotemporal (reconnaissance des visages et des objets). Le lobe <strong>occipital</strong> est presque entièrement dédié au traitement visuel.</p>
<p class="resume-text">Cette spécialisation est relative : pratiquement toute fonction cognitive complexe implique plusieurs lobes en réseau. La mémoire de travail mobilise les lobes frontal, pariétal et temporal simultanément. La navigation spatiale recrute l'hippocampe (temporal), le cortex rétrosplénial (pariétal médial) et le cortex entorhinal (jonction temporo-pariétale). La dissociation anatomo-fonctionnelle stricte, popularisée par la phrénologie du XIXe siècle, est aujourd'hui dépassée par une vision dynamique en réseaux.</p>
""")

inject('neuroanatomie/systeme-limbique', """
<h3>L'amygdale et le traitement émotionnel</h3>
<p class="resume-text">L'amygdale, structure en amande (~1,5 cm³ par côté) lovée dans le lobe temporal médial, est le centre de traitement des émotions, en particulier de la peur. Elle reçoit des entrées de tous les sens via le thalamus (voie courte, rapide, grossière) et du cortex sensoriel (voie longue, lente, précise). Joseph LeDoux a montré chez le rat que la voie thalamique suffit à déclencher une réponse de peur conditionnée, même après destruction du cortex auditif — une démonstration que les réactions émotionnelles peuvent précéder la perception consciente.</p>
<p class="resume-text">Les noyaux basolatéraux (BLA) de l'amygdale reçoivent les informations sensorielles et les interconnectent avec les représentations mnésiques hippocampiques, potentialisant l'encodage des souvenirs émotionnellement chargés. Le noyau central coordonne les réponses autonomes (tachycardie, sudation), hormonales (axe HPA, cortisol) et comportementales (fuite, figement) de la peur. Des études d'IRMf montrent que l'amygdale s'active en 13 ms à la vue d'un visage effrayé — avant même que le cortex visuel n'ait achevé son traitement.</p>
<div class="highlight-box"><p><strong>Le syndrome de Klüver-Bucy :</strong> La résection bilatérale des lobes temporaux chez le singe produit un syndrome caractéristique : disparition de la peur, hypersexualité, hyperoralité. Les patients humains avec des lésions bilatérales de l'amygdale (syndrome d'Urbach-Wiethe) ne ressentent pas de peur, y compris face à des situations objectivement dangereuses — preuve directe du rôle de l'amygdale dans l'émotion de peur.</p></div>

<h3>L'hippocampe et la navigation spatiale</h3>
<p class="resume-text">L'hippocampe contient plusieurs types de neurones fonctionnellement remarquables. Les <strong>cellules de lieu</strong> (place cells), découvertes par John O'Keefe (prix Nobel 2014), s'activent sélectivement quand l'animal se trouve dans une région précise de l'environnement, formant une carte cognitive de l'espace. Les <strong>cellules de grille</strong> (grid cells), découvertes par May-Britt et Edvard Moser (prix Nobel 2014) dans le cortex entorhinal adjacent, s'activent selon un patron hexagonal régulier couvrant tout l'environnement — un système de coordonnées métriques universel.</p>
<p class="resume-text">Ces cellules de lieu et de grille forment un système GPS neuronal. Les <strong>cellules de frontière</strong> (border cells) signalent les murs et limites de l'environnement ; les <strong>cellules de direction de tête</strong> (head direction cells) codent l'orientation comme une boussole interne. Ensemble, ces quatre types cellulaires — cartographiés aussi chez l'humain par IRMf et électrophysiologie intracrânienne — constituent le système de navigation spatiale le plus précisément compris du cerveau de mammifère.</p>

<h3>Le circuit de Papez et la régulation émotionnelle</h3>
<p class="resume-text">James Papez proposa en 1937 un circuit neuronal sous-tendant les émotions, incluant l'hippocampe, le fornix, les corps mamillaires, le thalamus antérieur, le cortex cingulaire et retour à l'hippocampe. Ce circuit de Papez, enrichi par Paul MacLean qui forgea le terme « système limbique » en 1952, constitue le substrat anatomique de la mémoire épisodique et de la régulation émotionnelle.</p>
<p class="resume-text">La <strong>régulation émotionnelle</strong> implique la modulation descendante de l'amygdale par le cortex préfrontal ventromédial et orbitofrontal. La réévaluation cognitive (reappraisal) — modifier l'interprétation d'une situation pour en changer la valence émotionnelle — est la stratégie de régulation la plus efficace cliniquement. Elle active le CPF latéral et réduit l'activation amygdalienne, un pattern que la psychothérapie cognitive-comportementale cherche à renforcer durablement.</p>
""")

inject('neuroanatomie/tronc-cerebral', """
<h3>Le mésencéphale et le diencéphale : relais sensoriels et moteurs</h3>
<p class="resume-text">Le tronc cérébral comprend le mésencéphale, le pont et le bulbe rachidien. Le <strong>thalamus</strong> (techniquement diencéphale mais intimement lié au tronc) est le grand relais sensoriel : toutes les modalités sensorielles (sauf l'olfaction) y font escale avant d'atteindre le cortex. Ses noyaux spécialisés filtrent et sélectionnent l'information sensorielle en fonction de l'état attentionnel — l'attention module directement l'activité thalamique via les projections top-down cortico-thalamiques.</p>
<p class="resume-text">Le <strong>colliculus supérieur</strong> du mésencéphale oriente réflexivement les mouvements oculaires vers des stimuli saillants dans le champ visuel périphérique, avant même tout traitement cortical. La <strong>substance grise périaqueducale</strong> (PAG) coordonne les réponses comportementales aux douleurs et aux menaces : fuite, figement, réduction réflexe de la douleur (antinociception endogène via les endorphines). Les <strong>noyaux rouges</strong> participent au contrôle moteur proximal des membres en coordination avec le cervelet.</p>
<div class="highlight-box"><p><strong>Le tronc cérébral et la conscience :</strong> Bien que le cortex soit souvent présenté comme le siège de la conscience, des lésions du tronc cérébral — particulièrement de la formation réticulée ascendante — peuvent abolir la conscience même en laissant le cortex intact. Le tronc cérébral module le niveau d'éveil cortical, sans lequel aucune conscience n'est possible.</p></div>

<h3>La formation réticulée et la régulation du sommeil-éveil</h3>
<p class="resume-text">La formation réticulée (FRAA : formation réticulée ascendante activatrice) est un réseau diffus de neurones traversant tout le tronc cérébral et envoyant des projections à large spectre vers le thalamus et le cortex. Elle utilise plusieurs neurotransmetteurs : l'acétylcholine (noyaux basaux et pédunculo-pontins), la noradrénaline (locus coeruleus), la dopamine (ATV), la sérotonine (noyaux du raphé) et l'histamine (hypothalamus tubéromamillaire). Ces systèmes monoaminergiques modulent l'éveil, l'humeur, l'attention et la mémoire.</p>
<p class="resume-text">Le locus coeruleus, un minuscule noyau du pont contenant seulement ~15 000 neurones chez l'humain, innerve pratiquement tout le cerveau avec ses projections noradrénergiques. Son activité est maximale durant l'éveil actif, réduite pendant le sommeil non-REM, et nulle pendant le sommeil REM. La dégénérescence précoce du locus coeruleus est un marqueur neuropathologique de la maladie d'Alzheimer, apparaissant avant même les plaques amyloïdes néocorticales.</p>

<h3>Les nerfs crâniens et le contrôle végétatif</h3>
<p class="resume-text">Le tronc cérébral abrite les noyaux d'origine de 10 des 12 paires de nerfs crâniens (III à XII). Le nerf vague (X), le plus long nerf crânien, innerve le cœur, les poumons et tout le tube digestif : c'est la voie principale du système nerveux parasympathique, responsable du « repos et digestion ». Sa stimulation électrique (neurostimulation vagale) est utilisée pour traiter l'épilepsie réfractaire et la dépression résistante, réduisant la fréquence des crises de 50 % chez 40 % des patients.</p>
<p class="resume-text">Le <strong>noyau du tractus solitaire</strong> (NTS) dans le bulbe intègre les informations viscérales afférentes (pression artérielle, glycémie, distension gastrique) et coordonne les réponses réflexes. La communication bidirectionnelle nerf vague-cerveau — l'axe intestin-cerveau — est aujourd'hui un domaine de recherche intense : le microbiome intestinal influence le comportement et l'humeur via les afférences vagales, ouvrant des pistes thérapeutiques pour la dépression et l'anxiété par modulation du microbiote.</p>
""")

inject('neuroanatomie/cervelet', """
<h3>La cytoarchitecture cérébelleuse : une structure cristalline</h3>
<p class="resume-text">Le cervelet contient plus de neurones que tout le reste du cerveau réuni — environ 70 milliards, contre 16 milliards dans le cortex cérébral. Sa structure est remarquablement uniforme : un cortex à trois couches (moléculaire, des cellules de Purkinje, granuleuse) replié en 10 lobules. La couche granuleuse contient les cellules granulaires, les plus petits et les plus nombreux neurones du cerveau. Les cellules de Purkinje, reconnaissables à leur arbre dendritique planaire en éventail de 150 000 à 200 000 épines, sont les seuls neurones de sortie du cortex cérébelleux et sont inhibitrices (GABA).</p>
<p class="resume-text">David Marr et James Albus ont proposé en 1969-1971 une théorie computationnelle du cervelet comme classifieur de patterns : les fibres moussues (de la moelle et du tronc) transmettent l'état actuel du mouvement aux cellules granulaires, qui créent une représentation expansive (millions de combinaisons). Les fibres grimpantes (de l'olive inférieure) transmettent le signal d'erreur motrice. La plasticité des synapses entre fibres parallèles (axones des granulaires) et cellules de Purkinje implémente un apprentissage supervisé par l'erreur.</p>
<div class="highlight-box"><p><strong>Le cervelet et la cognition :</strong> Longtemps considéré comme purement moteur, le cervelet est aujourd'hui reconnu comme impliqué dans la cognition, l'émotion et le langage. Le « syndrome cognitivo-affectif du cervelet » (Schmahmann) décrit des déficits de planification, de raisonnement verbal et de régulation émotionnelle après lésions des lobes postérieurs du cervelet.</p></div>

<h3>L'apprentissage moteur cérébelleux</h3>
<p class="resume-text">Le cervelet est le substrat principal de la <strong>mémoire procédurale motrice</strong>. Apprendre à faire du vélo, à jouer d'un instrument, à taper sur un clavier — toutes ces habiletés motrices reposent sur des modifications synaptiques dans le cervelet. La dépression à long terme (LTD) aux synapses fibres parallèles-Purkinje, déclenchée par l'activation conjointe d'une fibre grimpante (signal d'erreur) et d'une fibre parallèle (état du mouvement), affaiblit les connexions responsables des erreurs et raffine progressivement le programme moteur.</p>
<p class="resume-text">L'<strong>adaptation du réflexe vestibulo-oculaire</strong> (VOR) est le modèle d'apprentissage cérébelleux le mieux étudié. Ce réflexe stabilise l'image sur la rétine lors des mouvements de tête en générant des mouvements oculaires compensatoires opposés. Lorsqu'on porte des lunettes inversant le mouvement optique, le cervelet recalibre le VOR en quelques heures d'exposition — une démonstration propre de la plasticité cérébelleuse in vivo.</p>

<h3>Les noyaux profonds et la coordination temporelle</h3>
<p class="resume-text">Les noyaux profonds du cervelet (dentelé, interposé, fastigial) reçoivent les sorties inhibitrices des cellules de Purkinje. Leur activité nette détermine le signal de sortie cérébelleux vers le thalamus ventral et le cortex moteur. Ces noyaux sont responsables de la <strong>coordination temporelle précise</strong> des mouvements : une lésion cérébelleuse produit une dysmétrie (mauvaise amplitude du mouvement), une dysdiadococinésie (incapacité à alterner rapidement des mouvements), et un tremblement intentionnel (à la fin du mouvement volontaire, pas au repos — contrairement au tremblement parkinsonien).</p>
<p class="resume-text">Le cervelet est également impliqué dans le <strong>chronométrage non moteur</strong> : juger des durées, synchroniser des battements rythmiques, anticiper des événements périodiques. Cette fonction temporelle générale peut expliquer l'implication cérébelleuse dans le traitement musical, la discrimination temporelle des stimuli auditifs et les troubles du timing observés dans la dyslexie et l'autisme.</p>
""")

inject('neuroanatomie/moelle-epiniere', """
<h3>L'organisation segmentaire et les dermatomes</h3>
<p class="resume-text">La moelle épinière est organisée en 31 segments correspondant aux 31 paires de nerfs spinaux : 8 cervicaux, 12 thoraciques, 5 lombaires, 5 sacrés et 1 coccygien. Chaque segment innerve une région cutanée précise — le <strong>dermatome</strong> — et un groupe musculaire — le <strong>myotome</strong>. Cette organisation segmentaire permet la localisation précise d'une lésion : un engourdissement de la face antérieure de la cuisse indique une lésion au niveau L2-L3, une faiblesse du biceps brachial une lésion C5-C6.</p>
<p class="resume-text">La <strong>règle des niveaux lésionnels</strong> gouverne la clinique neurologique médullaire : une lésion complète à un niveau donné abolit toutes les fonctions motrices et sensitives en dessous. Une tétraplégie implique une lésion cervicale (C1-C8, paralysie des quatre membres) ; une paraplégie une lésion thoracique ou lombaire haute (paralysie des membres inférieurs et du tronc). La préservation partielle de la sensibilité ou de la motricité sous la lésion définit une lésion « incomplète » de meilleur pronostic.</p>
<div class="highlight-box"><p><strong>Le réflexe myotatique :</strong> Le coup de marteau sur le tendon rotulien étire le muscle quadriceps, activant les fuseaux neuromusculaires (propriocepteurs), qui transmettent l'influx via les fibres Ia à la moelle, où elles synapsent directement sur le motoneurone alpha du quadriceps (arc réflexe monosynaptique), provoquant une contraction. Ce réflexe court-circuite le cerveau — il se produit en 25 ms, bien avant toute intervention volontaire.</p></div>

<h3>Le contrôle de la motricité par la moelle</h3>
<p class="resume-text">La moelle épinière ne se contente pas de relayer les ordres moteurs du cerveau — elle génère elle-même des programmes moteurs rythmiques via les <strong>générateurs centraux de rythme</strong> (CPGs). Les CPGs lombaires génèrent le patron locomoteur de la marche : alternance droite-gauche, flexion-extension, coordination des membres. Chez les animaux spinaux (moelle sectionnée), ce programme peut être déclenché par stimulation de la moelle ou traitement pharmacologique, sans aucune entrée supraspinale.</p>
<p class="resume-text">Les <strong>interneurones de Renshaw</strong> implémentent une inhibition récurrente : un motoneurone alpha active via une collatérale d'axone un interneurone de Renshaw, qui en retour inhibe le même motoneurone. Ce circuit d'inhibition récurrente stabilise le taux de décharge des motoneurones et prévient les décharges répétitives non contrôlées. L'inhibition croisée (inhibition réciproque) entre les muscles antagonistes — fléchisseurs versus extenseurs — est assurée par les interneurones Ia inhibiteurs, garantissant que fléchir le coude coïncide automatiquement avec le relâchement du triceps.</p>

<h3>Les voies sensitives ascendantes</h3>
<p class="resume-text">Les informations sensitives montent vers le cerveau par deux systèmes majeurs. Le <strong>système lemniscal médial</strong> (faisceaux de Goll et Burdach) transmet la proprioception, le toucher fin et la vibration : les fibres montent ipsilatéralement dans les cordons postérieurs jusqu'au bulbe, où elles décussent (croisent la ligne médiane) pour rejoindre le thalamus controlatéral, puis le cortex somatosensoriel primaire. Le <strong>système spinothalamique</strong> transmet la douleur et la température : les fibres synapsent dans la corne dorsale et décussent immédiatement en avant de la moelle avant de monter controlatéralement.</p>
<p class="resume-text">Cette double décussation (différente pour chaque voie) explique le <strong>syndrome de Brown-Séquard</strong> : une hémi-section droite de la moelle produit une perte de proprioception et du toucher fin du côté droit (même côté, lemniscal) associée à une perte de la douleur et de la température du côté gauche (côté opposé, spinothalamique). Ce tableau clinique pathognomonique permet de localiser précisément le niveau et le côté de la lésion.</p>
""")

print("Neuroanatomie pages enriched. Checking sizes...")
for key in ['neuroanatomie/cortex-cerebral','neuroanatomie/systeme-limbique','neuroanatomie/tronc-cerebral','neuroanatomie/cervelet','neuroanatomie/moelle-epiniere']:
    print(f"  {key}: {len(pages[key]['content'])} chars")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved.")
