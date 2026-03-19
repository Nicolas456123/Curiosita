#!/usr/bin/env python3
"""Second pass: add more to cognitive pages + enrich all remaining neuro pages."""
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
        # inject before last </section>
        idx = content.rfind('</section>')
        content = content[:idx] + html + '\n' + content[idx:]
    page['content'] = content

# ── SECOND PASS on cognitive pages ───────────────────────────────────────────

inject('cognitive/perception', """
<h3>Perception et action : le système des neurones miroirs</h3>
<p class="resume-text">Giacomo Rizzolatti et son équipe ont découvert en 1992, chez le macaque, des neurones du cortex prémoteur s'activant aussi bien lors de l'exécution d'une action que lors de l'observation de cette même action effectuée par un autre. Ces <strong>neurones miroirs</strong> constituent un système de résonance motrice potentiellement impliqué dans la compréhension des intentions d'autrui, l'imitation et l'empathie. Chez l'humain, les preuves indirectes (IRMf, EMG) suggèrent l'existence d'un système analogue dans les cortex prémoteur et pariétal.</p>
<p class="resume-text">Ce système lie perception et action en un circuit unique : percevoir une action, c'est partiellement la simuler. Cette « simulation incarnée » expliquerait pourquoi regarder un athlète sauter active subtilement les muscles des jambes du spectateur, pourquoi bâiller est contagieux, et pourquoi les expressions faciales d'autrui déclenchent des micro-expressions imitative involontaires chez l'observateur.</p>
<div class="highlight-box"><p><strong>Controverse :</strong> L'hypothèse miroir étendue — qui attribuait aux neurones miroirs un rôle central dans l'autisme (théorie du « cerveau brisé ») — est aujourd'hui contestée. Les données empiriques sur l'autisme et les neurones miroirs sont contradictoires, illustrant les dangers de l'extrapolation excessive de données animales à la pathologie humaine.</p></div>
""")

inject('cognitive/attention', """
<h3>L'attention spatiale et le modèle du spotlight</h3>
<p class="resume-text">Michael Posner a conceptualisé l'attention spatiale comme un « projecteur » (spotlight) pouvant être orienté vers une région de l'espace indépendamment du mouvement oculaire — c'est l'<strong>attention couverte</strong>. Des indices spatiaux (flèche pointant vers la gauche) accélèrent la détection de cibles dans la région indiquée, même si le regard reste fixe. Le déplacement du projecteur attentionnel coûte environ 150 ms, mesurable par des temps de réaction différentiels.</p>
<p class="resume-text">Le <strong>champ attentionnel</strong> n'est pas de taille fixe : il peut se contracter pour un traitement fin (mode zoom) ou s'élargir pour une surveillance globale (mode panoramique). Cette flexibilité est régulée par le locus coeruleus noradrénergique : un niveau optimal de noradrénaline favorise le mode focalisé ; un niveau très bas ou très élevé élargit ou rétrécit pathologiquement le champ. Cette relation en U inversé relie la neurochimie de l'éveil à l'efficacité attentionnelle.</p>
""")

inject('cognitive/memoire', """
<h3>La mémoire prospective et la mémoire autobiographique</h3>
<p class="resume-text">La <strong>mémoire prospective</strong> — se souvenir de faire quelque chose dans le futur — est distincte des mémoires rétrospectives. Elle repose sur la formation d'intentions différées dont la récupération est déclenchée par un indice environnemental (voir une pharmacie déclenche le souvenir d'acheter des médicaments). Le cortex préfrontal rostral (aire 10 de Brodmann) est spécifiquement impliqué dans la maintenance et la récupération de ces intentions futures.</p>
<p class="resume-text">La <strong>mémoire autobiographique</strong>, qui organise les souvenirs personnels dans un cadre temporel cohérent, implique un réseau de régions incluant le cortex préfrontal médial, le précuneus, le cortex rétrosplénial et le hippocampe. Les épisodes vécus avec une forte charge émotionnelle — les <em>flashbulb memories</em> (souvenirs-flashs) comme l'apprentissage d'un événement traumatisant majeur) — sont encodés avec une précision accrue grâce à l'activation de l'amygdale qui module le hippocampe via des projections directes.</p>
<div class="highlight-box"><p><strong>Précision vs confiance :</strong> Paradoxalement, les souvenirs associés à une forte émotion sont souvent perçus comme particulièrement vivides et fiables, alors que les recherches montrent qu'ils sont tout aussi sujets aux distorsions que les souvenirs ordinaires — la confiance ne prédit pas la précision.</p></div>
""")

inject('cognitive/langage', """
<h3>Les bases cérébrales de la lecture et de la dyslexie</h3>
<p class="resume-text">La lecture, invention récente (environ 5 000 ans) à l'échelle évolutive, repose sur des circuits cérébraux détournés de leurs fonctions originelles. La « boîte aux lettres du cerveau » — identifiée par Stanislas Dehaene dans le gyrus fusiforme gauche — répond sélectivement aux mots et aux chaînes de lettres. Elle s'est spécialisée au fil de l'apprentissage en exploitant des neurones initialement dédiés à la reconnaissance des objets et des visages.</p>
<p class="resume-text">La dyslexie développementale implique une moindre activation du gyrus temporal supérieur gauche et du gyrus angulaire, ainsi qu'une connectivité réduite entre les régions phonologiques et visuelles. Les programmes de rééducation phonologique (apprentissage explicite de la correspondance graphème-phonème) normalisent partiellement ces activations corticales, illustrant une fois encore la plasticité du cerveau adulte en réponse à un entraînement intensif.</p>
""")

inject('cognitive/decision', """
<h3>L'impulsivité, le contrôle inhibiteur et leurs circuits</h3>
<p class="resume-text">La capacité à inhiber une réponse automatique au profit d'une action délibérée — le <strong>contrôle inhibiteur</strong> — repose sur le cortex préfrontal ventrolatéral droit et les noyaux sous-thalamiques. La tâche du signal stop mesure directement cette capacité : un signal rare indique qu'il faut annuler un mouvement en cours. Le temps de réaction pour stopper (SSRT) est prolongé dans les addictions, le TDAH et certaines formes de jeu pathologique.</p>
<p class="resume-text">Le <strong>délai de gratification</strong>, mesuré par le test du marshmallow de Walter Mischel (1972), prédit des décennies plus tard des outcomes de santé, de revenus et de bien-être. Neurobiologiquement, la capacité à attendre une récompense plus grande implique le renforcement des connexions entre CPF et striatum ventral (nucleus accumbens) qui permettent de moduler l'impulsion immédiate par une représentation de la récompense future. Ces connexions se développent jusqu'à 25 ans — ce qui explique l'impulsivité normative de l'adolescence.</p>
<div class="highlight-box"><p><strong>Réévaluation :</strong> Des réplications récentes du test du marshmallow montrent que la capacité à attendre est fortement influencée par le contexte socioéconomique : les enfants élevés dans des environnements imprévisibles ont des raisons rationnelles de préférer la récompense immédiate. L'impulsivité n'est pas un simple déficit neurologique.</p></div>
""")

# ── computationnelle/ pages ───────────────────────────────────────────────────

inject('computationnelle/reseaux-neuronaux', """
<h3>La connectivité synaptique et les principes d'organisation</h3>
<p class="resume-text">Un réseau neuronal biologique est caractérisé par sa <strong>connectivité synaptique</strong> : chaque neurone cortical reçoit en moyenne 7 000 synapses entrantes et en émet autant. Malgré cette densité, le réseau est « petit monde » (small-world) : deux neurones quelconques sont séparés par seulement 3 à 4 connexions intermédiaires en moyenne, comme dans les réseaux sociaux humains. Cette architecture combine une connectivité locale dense (clusters) et quelques connexions longues distance (hubs) qui assurent une communication globale efficace.</p>
<p class="resume-text">Les <strong>hubs corticaux</strong> — régions fortement interconnectées comme le précuneus, le cortex cingulaire postérieur et le cortex préfrontal médial — forment le réseau du mode par défaut (DMN). Ces régions consomment disproportionnellement l'énergie cérébrale au repos et sont vulnérables aux maladies neurodégénératives : les plaques amyloïdes de la maladie d'Alzheimer s'accumulent précisément dans ces hubs en premier.</p>
<div class="highlight-box"><p><strong>Échelle :</strong> Le cerveau humain contient environ 86 milliards de neurones formant quelque 100 000 milliards de synapses. Le connectome complet d'un ver C. elegans (302 neurones, 7 000 synapses) a été cartographié en 1986 — le connectome humain complet reste inaccessible aux technologies actuelles.</p></div>

<h3>La dynamique oscillatoire et la synchronisation</h3>
<p class="resume-text">Les neurones du cerveau ne s'activent pas isolément : ils s'organisent en assemblées qui oscillent à des fréquences caractéristiques. Les <strong>oscillations thêta</strong> (4-8 Hz) du hippocampe coordonnent l'encodage mnésique ; les oscillations <strong>gamma</strong> (30-80 Hz) du cortex visuel sous-tendent la liaison perceptuelle (<em>binding</em>) ; les oscillations <strong>alpha</strong> (8-12 Hz) reflètent l'inhibition des régions non pertinentes pour la tâche en cours.</p>
<p class="resume-text">La synchronisation à longue distance entre régions cérébrales, via les oscillations bêta (15-30 Hz), sous-tend la communication top-down du cortex préfrontal vers les aires sensorielles. Cette synchronisation inter-régionale, mesurable par l'EEG et la MEG, est altérée dans la schizophrénie, l'autisme et la maladie de Parkinson — ouvrant des pistes pour des biomarqueurs diagnostiques.</p>

<h3>Les principes computationnels de l'intégration de l'information</h3>
<p class="resume-text">Giulio Tononi a proposé la théorie de l'intégration de l'information (IIT), qui quantifie la conscience par un paramètre phi (Φ) mesurant le degré d'intégration d'un réseau. Un réseau avec une forte Φ intègre l'information d'une façon qui dépasse la somme de ses parties. Cette théorie prédit que le cervelet, malgré ses 70 milliards de neurones (4x plus que le cortex), est moins conscient que le cortex car sa structure modulaire génère une faible Φ.</p>
<p class="resume-text">La théorie de Karl Friston du <strong>codage prédictif</strong> propose une architecture alternative : le cerveau est un système hiérarchique de prédiction qui minimise en permanence l'erreur entre ses prédictions et les entrées sensorielles. Les couches superficielles du cortex propagent les erreurs de prédiction vers le haut de la hiérarchie ; les couches profondes propagent les prédictions vers le bas. Ce cadre unifié explique la perception, l'attention, l'apprentissage et l'action dans un seul formalisme mathématique.</p>
""")

inject('computationnelle/modelisation', """
<h3>Les modèles compartimentaux et l'équation de Hodgkin-Huxley</h3>
<p class="resume-text">Le modèle de Hodgkin et Huxley (1952), prix Nobel 1963, décrit mathématiquement la génération du potentiel d'action dans l'axone du calmar géant. Quatre équations différentielles couplées gouvernent les conductances des canaux sodique et potassique en fonction de la tension membranaire et du temps. Ce modèle, qui prédit avec une précision remarquable la forme et la vitesse du potentiel d'action, reste la référence pour la modélisation neuronale biophysique.</p>
<p class="resume-text">Les modèles compartimentaux subdivisent le neurone en segments (soma, dendrites, axone) connectés par des résistances internes, permettant de simuler l'intégration des entrées synaptiques distribuées sur l'arbre dendritique. NEURON et GENESIS sont les simulateurs compartimentaux les plus utilisés, capables de modéliser des neurones individuels avec des centaines de compartiments et des dizaines de types de canaux ioniques.</p>
<div class="highlight-box"><p><strong>Simplification utile :</strong> Le modèle intègre-et-tire (leaky integrate-and-fire, LIF) réduit le neurone à deux paramètres : un condensateur (capacité membranaire) et une résistance (conductance de fuite). Bien que minimal, il capture l'essentiel de la dynamique de décharge et permet de simuler des réseaux de millions de neurones en temps raisonnable.</p></div>

<h3>La modélisation à l'échelle des populations : champs neuraux</h3>
<p class="resume-text">Les équations de Wilson-Cowan (1972) décrivent la dynamique de populations de neurones excitateurs et inhibiteurs en interaction. Ces équations, couplées différentiellement, génèrent des comportements riches : états d'équilibre stables, oscillations, bifurcations. Elles constituent la base des modèles de champ neuronal moyen (mean-field) utilisés pour modéliser les rythmes EEG, les états d'éveil et de sommeil, et les transitions dans la conscience.</p>
<p class="resume-text">Le <strong>Human Connectome Project</strong> et ses équivalents fournissent les données anatomiques (tractographie IRM de diffusion) nécessaires pour construire des modèles du cerveau entier à l'échelle des régions. Ces modèles du connectome structurel, combinés aux équations de champ moyen, permettent de simuler l'activité fonctionnelle d'un cerveau virtuel et de comparer les patterns d'oscillation simulés aux enregistrements EEG et MEG réels.</p>

<h3>Les organismes virtuels et la simulation du cerveau</h3>
<p class="resume-text">Le projet Blue Brain de Henry Markram, lancé en 2005, vise la reconstruction et la simulation d'une colonne corticale de rat (30 000 neurones, 37 millions de synapses) à un niveau biophysique détaillé. Exécuté sur des supercalculateurs IBM Blue Gene, ce modèle reproduit des oscillations gamma spontanées et des réponses à des stimuli. L'extension à l'ensemble du cerveau humain (86 milliards de neurones) reste un défi computationnel considérable, nécessitant un exaflop de puissance de calcul soutenu.</p>
<p class="resume-text">Les <strong>organoïdes cérébraux</strong>, cultures en 3D de cellules souches différenciées en tissu neural, ouvrent une voie complémentaire : ces « mini-cerveaux » de quelques millimètres développent des oscillations spontanées et une organisation laminaire rappelant le cortex fœtal humain. Bien qu'incapables de pensée, ils offrent un modèle expérimental unique pour étudier le développement cérébral et tester des médicaments sur du tissu neural humain.</p>
""")

inject('computationnelle/ia-bio-inspiree', """
<h3>Du perceptron aux réseaux profonds : une histoire bio-inspirée</h3>
<p class="resume-text">Le perceptron de Frank Rosenblatt (1958) était directement inspiré du neurone biologique : une unité de traitement linéaire à seuil, entraînable par une règle d'apprentissage. Après l'hiver de l'IA des années 1970-1980, le renouveau des réseaux de neurones artificiels (RNA) dans les années 1980-1990 avec la rétropropagation du gradient a conduit aux architectures profondes actuelles (deep learning).</p>
<p class="resume-text">Les <strong>réseaux convolutifs</strong> (CNN) imitent l'organisation hiérarchique du cortex visuel décrite par Hubel et Wiesel : des filtres locaux dans les premières couches détectent des bords et des orientations, des couches intermédiaires combinent ces features en formes, et les couches profondes reconnaissent des objets entiers. AlexNet (2012), qui a révolutionné la reconnaissance d'images, était explicitement conçu sur ce modèle biologique.</p>
<div class="highlight-box"><p><strong>Comparaison :</strong> Le cerveau humain traite une image en environ 100 ms avec 20 watts de puissance. Le meilleur GPU actuel consomme 400 watts pour une tâche similaire et n'atteint toujours pas les performances humaines en généralisation hors distribution — illustrant que l'évolution a trouvé des solutions d'efficacité énergétique sans équivalent artificiel.</p></div>

<h3>L'apprentissage par renforcement et ses bases biologiques</h3>
<p class="resume-text">L'apprentissage par renforcement (RL), formalisé par Sutton et Barto, trouve ses racines dans la psychologie comportementaliste (conditionnement opérant de Skinner) et sa réalisation biologique dans les neurones dopaminergiques. L'algorithme TD-learning (temporal difference learning) calcule une erreur de prédiction de récompense mathématiquement analogue au signal codé par les neurones de l'ATV — une convergence frappante entre algorithme artificiel et mécanisme biologique.</p>
<p class="resume-text">AlphaGo et AlphaZero de DeepMind combinent réseaux profonds et apprentissage par renforcement pour dépasser les champions humains aux jeux de go, échecs et shogi. Ces systèmes développent des stratégies originales que des siècles de pratique humaine n'avaient pas explorées, suggérant que les contraintes biologiques (limite de mémoire de travail, fatigue, biais) ont bridé l'exploration stratégique humaine.</p>

<h3>Les limites de l'analogie cerveau-ordinateur</h3>
<p class="resume-text">Malgré les succès de l'IA bio-inspirée, l'analogie est partielle. Le cerveau est un système <strong>continu dans le temps</strong>, câblé anatomiquement et chimiquement, fonctionnant avec des signaux stochastiques à très faible consommation. Les RNA actuels sont discrets, entraînés hors ligne sur des datasets statiques, et nécessitent des millions d'exemples là où un enfant apprend d'un seul. Le <strong>catastrophic forgetting</strong> — oubli brutal des anciennes tâches lors de l'apprentissage de nouvelles — n'affecte pas le cerveau biologique, qui consolide progressivement pendant le sommeil.</p>
<p class="resume-text">Les <strong>réseaux de neurones à impulsions</strong> (Spiking Neural Networks, SNN) tentent de combler ce fossé en codant l'information dans le temps des impulsions plutôt que dans leur fréquence moyenne. Des puces neuromorphiques comme Intel Loihi ou IBM TrueNorth implémentent ces réseaux en silicium avec une consommation énergétique proche des valeurs biologiques, ouvrant la voie à une IA embarquée ultra-basse consommation.</p>
""")

inject('computationnelle/apprentissage-hebbien', """
<h3>La règle de Hebb et ses implémentations biologiques</h3>
<p class="resume-text">La règle de Hebb, formulée en 1949 dans « The Organization of Behavior », stipule : « les neurones qui s'activent ensemble se connectent ». Biologiquement, cette règle est implémentée par la potentiation à long terme (LTP) dépendante du spike (STDP : spike-timing-dependent plasticity). Si un neurone présynaptique s'active quelques millisecondes <em>avant</em> le neurone postsynaptique, la synapse est renforcée (potentiation) ; si l'ordre est inversé, elle est affaiblie (dépression). Cette fenêtre temporelle asymétrique, de ±50 ms, encode la causalité temporelle dans la plasticité synaptique.</p>
<p class="resume-text">La STDP est médiée par les récepteurs NMDA qui fonctionnent comme des détecteurs de coïncidence : ils s'ouvrent seulement lorsque le glutamate présynaptique et la dépolarisation postsynaptique (causée par d'autres entrées ou un spike de retour) sont simultanés. Cette propriété de « et » logique leur permet de détecter la corrélation temporelle entre activité pré et postsynaptique, implémentant physiquement la règle de Hebb.</p>
<div class="highlight-box"><p><strong>Auto-organisation :</strong> Sans aucune supervision externe, un réseau de neurones soumis à des entrées naturelles structurées (images, sons) et régi par la règle de Hebb développe spontanément des représentations correspondant aux structures statistiques de l'environnement — les neurones s'organisent en détecteurs de features, analogues à ceux observés dans le cortex visuel primaire.</p></div>

<h3>Les cartes auto-organisatrices de Kohonen</h3>
<p class="resume-text">Teuvo Kohonen formalisa en 1982 le réseau de cartes auto-organisatrices (SOM), directement inspiré de la topographie des cartes corticales. Un SOM apprend à représenter les statistiques des données d'entrée en organisisant ses neurones artificiels dans un espace 2D selon un principe de compétition (winner-take-all) et de coopération locale (voisins activés ensemble). Le résultat est une carte topographique continue des données, analogue à la carte somatosensorielle du cerveau.</p>
<p class="resume-text">Les SOM révèlent des structures dans des données de haute dimension non labellisées. Appliqués à des données génomiques ou à des profils d'expression génique, ils font émerger des groupes biologiques significatifs sans supervision. Cette capacité d'auto-organisation non supervisée reste une propriété remarquable des réseaux bio-inspirés que les architectures profondes supervisées standard ne possèdent pas.</p>

<h3>L'apprentissage non supervisé et la prédictivité du cerveau</h3>
<p class="resume-text">Le cerveau apprend majoritairement de manière non supervisée, par exposition répétée à l'environnement sans étiquettes ni récompenses. La théorie du codage predictif de Rao et Ballard (1999) propose que le cerveau minimise en permanence ses erreurs de prédiction : chaque niveau de la hiérarchie corticale prédit l'activité du niveau inférieur, et seules les erreurs de prédiction sont transmises vers le haut. Ce mécanisme est à la fois un algorithme d'apprentissage et un principe de compression de l'information.</p>
<p class="resume-text">Les <strong>autoencodeurs variationnels</strong> (VAE) et les <strong>modèles génératifs</strong> (GAN) en intelligence artificielle implémentent des principes similaires : ils apprennent des représentations compactes (espace latent) permettant de reconstruire fidèlement des données complexes. La convergence entre ces architectures artificielles et les théories computationnelles du cerveau suggère que la compression prédictive est un principe universel des systèmes d'apprentissage efficaces.</p>
""")

inject('computationnelle/neurones-formels', """
<h3>Le neurone formel de McCulloch et Pitts</h3>
<p class="resume-text">En 1943, Warren McCulloch (neurophysiologiste) et Walter Pitts (mathématicien) publient « A Logical Calculus of Ideas Immanent in Nervous Activity », pionnier de l'intelligence artificielle et des neurosciences computationnelles. Leur <strong>neurone formel</strong> est une unité binaire recevant des entrées pondérées, calculant leur somme et émettant 1 si cette somme dépasse un seuil, 0 sinon. Ils démontrent que des réseaux de ces unités peuvent implémenter n'importe quelle fonction logique — AND, OR, NOT — et donc, théoriquement, tout calcul.</p>
<p class="resume-text">Ce modèle s'éloigne délibérément du neurone biologique réel : il ignore le temps, la stochasticité, les non-linéarités dendritiques et les multiples types de neurotransmetteurs. Mais sa puissance conceptuelle fut énorme : il établit le principe que la pensée pourrait être réduite à du calcul symbolique implémenté dans un réseau de portes logiques — posant les fondations de l'informatique cognitive.</p>
<div class="highlight-box"><p><strong>Héritage :</strong> L'architecture von Neumann des ordinateurs modernes (unité centrale de calcul, mémoire séparée, traitement séquentiel) est en partie une réponse alternative au modèle massivement parallèle de McCulloch-Pitts. Les deux approches coexistent encore aujourd'hui dans l'IA hybride symbolique/sous-symbolique.</p></div>

<h3>Les fonctions d'activation et la non-linéarité</h3>
<p class="resume-text">La fonction à seuil binaire du neurone de McCulloch-Pitts a été remplacée par des fonctions d'activation continues permettant la différentiabilité nécessaire à l'entraînement par gradient. La <strong>sigmoïde</strong> (sortie entre 0 et 1, analogue au taux de décharge moyen), le <strong>tanh</strong> (sortie entre -1 et 1) et le <strong>ReLU</strong> (rectified linear unit, sortie = max(0,x)) sont les plus utilisées. Le ReLU est particulièrement intéressant car il est biophysiquement plausible : un neurone ne peut émettre un taux négatif.</p>
<p class="resume-text">La non-linéarité est cruciale : un réseau de couches purement linéaires, quelle que soit sa profondeur, est équivalent à une seule couche linéaire et ne peut apprendre que des frontières de décision linéaires. C'est la composition de non-linéarités qui permet aux réseaux profonds d'apprendre des représentations hiérarchiques et abstraites — comme le fait le cerveau, qui n'est jamais un système linéaire à aucune échelle d'organisation.</p>

<h3>Le neurone biologique vu comme un réseau neuronal</h3>
<p class="resume-text">Des travaux récents — notamment de Poirazi et al. (2003) et de Beniaguev et al. (2021) — suggèrent que le neurone biologique est lui-même un mini-réseau neuronal. Les dendrites, loin d'être de simples conducteurs passifs, effectuent des calculs non linéaires locaux : les épines dendritiques peuvent générer des potentiels d'action locaux (spikes dendritiques) et effectuer des opérations multiplicatives. Un neurone pyramidal cortical serait équivalent, en puissance computationnelle, à un réseau artificiel à 5-8 couches.</p>
<p class="resume-text">Cette découverte enrichit considérablement notre compréhension de la capacité de calcul du cerveau : si chaque neurone est déjà un réseau complexe, alors les 86 milliards de neurones corticaux représentent une puissance de traitement astronomiquement plus grande que ce que les modèles de points de neurones (point neurons) suggèrent. La modélisation à l'échelle dendritic devient alors indispensable pour comprendre les opérations réelles du cerveau.</p>
""")

print("Computationnelle pages enriched.")
for key in ['computationnelle/reseaux-neuronaux','computationnelle/modelisation','computationnelle/ia-bio-inspiree','computationnelle/apprentissage-hebbien','computationnelle/neurones-formels']:
    print(f"  {key}: {len(pages[key]['content'])} chars")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved.")
