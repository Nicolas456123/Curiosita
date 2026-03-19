#!/usr/bin/env python3
"""Enrich neurosciences pages to reach ~15000 chars per article."""
import json, re, sys

DISC = "neurosciences"
PATH = f"C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/{DISC}.json"

with open(PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# We'll inject enrichment HTML before the quiz-nav div (or before </section> of contenu)
def inject(key, html):
    page = pages[key]
    content = page['content']
    # Insert before quiz-nav if present, else before closing </section>
    if '<div class="quiz-nav">' in content:
        content = content.replace('<div class="quiz-nav">', html + '\n<div class="quiz-nav">', 1)
    else:
        content = content.replace('</section>', html + '\n</section>', 1)
    page['content'] = content

# ── cognitive/perception ──────────────────────────────────────────────────────
inject('cognitive/perception', """
<h3>La perception multimodale et l'intégration sensorielle</h3>
<p class="resume-text">La perception n'opère jamais en silo : le cerveau intègre en permanence les informations provenant de plusieurs sens pour construire une représentation cohérente du monde. Ce phénomène, appelé <strong>intégration multisensorielle</strong>, est illustré par l'effet McGurk, découvert en 1976 : lorsqu'on entend la syllabe « ba » pendant qu'on voit une bouche prononcer « ga », on perçoit « da ». Le cerveau fusionne l'information auditive et visuelle pour produire une perception qui n'existe dans aucune des deux sources.</p>
<p class="resume-text">Le cortex pariétal postérieur joue un rôle central dans cette intégration. Les neurones bimodaux et trimodaux qui s'y trouvent répondent à des stimuli visuels, auditifs et somatosensoriels simultanément. La règle de l'efficacité inverse stipule que l'intégration est d'autant plus forte que les stimuli individuels sont faibles — deux stimuli médiocres combinés produisent une réponse supérieure à leur somme séparée.</p>
<div class="highlight-box"><p><strong>Exemple concret :</strong> Au cinéma, la synchronisation labiale imparfaite passe inaperçue en dessous d'un décalage de 150 ms parce que le cerveau fusionne image et son dans une fenêtre temporelle tolérante — la « fenêtre d'intégration multisensorielle ».</p></div>

<h3>Les illusions perceptuelles comme révélateurs du traitement cérébral</h3>
<p class="resume-text">Les illusions perceptuelles ne sont pas des défaillances mais des preuves du caractère constructif de la perception. L'illusion de Müller-Lyer, dans laquelle deux lignes identiques semblent de longueurs différentes selon l'orientation de leurs flèches, révèle que le cerveau applique automatiquement des règles de perspective apprises. L'illusion de Kanizsa montre que le cortex visuel complète activement les contours manquants : on perçoit un triangle blanc là où n'existent que trois formes incomplètes.</p>
<p class="resume-text">Les études en neuroimagerie montrent que ces perceptions illusoires activent les mêmes aires visuelles que les perceptions réelles. Lors de l'illusion de Kanizsa, l'aire V2 génère des signaux correspondant aux contours imaginaires, confirmant que la perception est une prédiction active. Karl Friston formalise ce principe dans sa théorie du <strong>cerveau bayésien</strong> : le cerveau minimise en permanence l'erreur de prédiction entre ses modèles internes et les entrées sensorielles.</p>

<h3>La plasticité perceptuelle et l'apprentissage</h3>
<p class="resume-text">La perception se modifie avec l'expérience grâce à la plasticité synaptique. Les musiciens de haut niveau développent une acuité auditive accrue dans les fréquences de leurs instruments, accompagnée d'une expansion des représentations corticales. De même, les personnes aveugles précoces recrutent leur cortex visuel pour le traitement tactile (lecture braille) et auditif, démontrant que la fonction prime sur l'organisation anatomique initiale.</p>
<p class="resume-text">L'apprentissage perceptuel, étudié par Eleanor Gibson, améliore la discrimination de stimuli similaires — un radiologue expérimenté détecte des anomalies invisibles pour un novice. Ce processus repose sur le renforcement de connexions synaptiques dans les aires sensorielles, modulé par la dopamine et l'acétylcholine qui signalent la pertinence d'un stimulus pour l'apprentissage.</p>
<div class="highlight-box"><p><strong>Application clinique :</strong> La rééducation après AVC exploite la plasticité perceptuelle : en privant le membre sain d'activité (thérapie par contrainte induite), on force le cerveau à renforcer les circuits du membre lésé, accélérant la récupération motrice et sensitive.</p></div>

<h3>Perception consciente et traitement non conscient</h3>
<p class="resume-text">Une grande partie du traitement perceptuel s'effectue hors de la conscience. La vision subliminale, les réponses émotionnelles automatiques aux visages menaçants et la préparation motrice inconsciente illustrent que le cerveau traite et réagit à des informations que le sujet ne rapporte pas percevoir. La <strong>cécité au changement</strong> démontre que même des modifications importantes passent inaperçues lorsque l'attention est distraite — jusqu'à 40 % des sujets ne remarquent pas le remplacement d'un interlocuteur lors d'une brève interruption.</p>
<p class="resume-text">Le modèle de Dehaene de l'espace de travail neuronal global distingue le traitement préconscient distribué dans des modules spécialisés du traitement conscient impliquant une diffusion d'information via le cortex préfrontal et pariétal. Seules les représentations atteignant ce seuil de diffusion globale accèdent à la conscience et peuvent être rapportées verbalement.</p>
""")

# ── cognitive/attention ───────────────────────────────────────────────────────
inject('cognitive/attention', """
<h3>Les réseaux attentionnels : alerte, orientation et contrôle exécutif</h3>
<p class="resume-text">Michael Posner a identifié trois réseaux attentionnels distincts. Le <strong>réseau d'alerte</strong>, supporté par les projections noradrénergiques du locus coeruleus, maintient un état de vigilance général. Le <strong>réseau d'orientation</strong> dirige l'attention vers des stimuli spécifiques (sillon intrapariétal, champs oculomoteurs frontaux). Le <strong>réseau de contrôle exécutif</strong>, centré sur le cortex cingulaire antérieur et le CPF dorsolatéral, gère les conflits et régule les deux autres.</p>
<p class="resume-text">Ces trois réseaux fonctionnent en parallèle mais interagissent constamment. Une alarme soudaine (réseau d'alerte) provoque une réorientation automatique (réseau d'orientation) qui peut interrompre une tâche en cours (réseau exécutif). Le test ANT (Attention Network Task) mesure indépendamment l'efficacité de chacun par des temps de réaction différentiels.</p>
<div class="highlight-box"><p><strong>Déficit clinique :</strong> La négligence hémi-spatiale — incapacité à prêter attention à la moitié gauche de l'espace après lésion pariétale droite — illustre le rôle du réseau d'orientation. Le patient ne voit pas les objets à gauche, non par défaut visuel, mais par défaillance du mécanisme d'orientation spatiale.</p></div>

<h3>L'attention sélective et le filtrage de l'information</h3>
<p class="resume-text">Donald Broadbent proposa en 1958 un filtre précoce : l'attention agirait comme un goulot d'étranglement filtrant les informations physiques avant tout traitement sémantique. Anne Treisman modifia ce modèle avec un filtre atténuateur : les informations non sélectionnées sont traitées à un niveau réduit — ce qui explique l'<strong>effet cocktail party</strong>, où votre prénom capte votre attention même dans une conversation parasitaire.</p>
<p class="resume-text">Neurobiologiquement, l'attention module l'activité corticale de manière multiplicative : les neurones des aires visuelles répondent 2 à 4 fois plus fortement à un stimulus attentivement fixé qu'à un stimulus ignoré. Les oscillations gamma (30-80 Hz) reflètent l'amplification attentionnelle ; les oscillations alpha (8-12 Hz) dans les aires non pertinentes reflètent la suppression.</p>

<h3>L'attention et la conscience</h3>
<p class="resume-text">Bien que souvent confondus, attention et conscience sont dissociables. On peut être attentif à un stimulus sans en avoir conscience (attention subliminale). Les expériences de <strong>cécité par inattention</strong> — dont la célèbre étude du gorille invisible de Simons et Chabris (1999), où 50 % des participants ne remarquent pas un homme en costume de gorille traversant leur champ visuel — démontrent que l'attention est une ressource limitée qui détermine ce qui accède à la représentation consciente.</p>
<p class="resume-text">La théorie de la charge perceptuelle de Lavie prédit que la suppression des distracteurs est automatique lorsque la tâche principale consomme toutes les ressources attentionnelles disponibles. Cela explique pourquoi des tâches difficiles rendent imperméable aux interruptions périphériques, alors que des tâches faciles permettent la distraction.</p>

<h3>Pathologies et interventions sur l'attention</h3>
<p class="resume-text">Le TDAH implique une hypoactivité des circuits dopaminergiques et noradrénergiques du cortex préfrontal, entraînant des difficultés du réseau de contrôle exécutif. Les traitements pharmacologiques (méthylphénidate, amphétamines) augmentent la disponibilité de ces neurotransmetteurs, améliorant les performances attentionnelles.</p>
<p class="resume-text">La méditation de pleine conscience entraîne des modifications mesurables : après huit semaines de pratique MBSR, l'épaisseur du cortex cingulaire antérieur augmente et les scores au test ANT s'améliorent, particulièrement pour le réseau de contrôle exécutif. Ces effets persistent des mois après l'entraînement.</p>
<div class="highlight-box"><p><strong>Chiffre clé :</strong> La durée d'attention soutenue optimale est d'environ 20 minutes avant que les performances ne déclinent — d'où l'efficacité des cours structurés en blocs de cette durée entrecoupés de pauses actives.</p></div>
""")

# ── cognitive/memoire ─────────────────────────────────────────────────────────
inject('cognitive/memoire', """
<h3>La consolidation mnésique : du hippocampe au néocortex</h3>
<p class="resume-text">La consolidation cellulaire, qui se déroule en quelques heures après l'encodage, implique la synthèse de nouvelles protéines synaptiques via l'activation des récepteurs NMDA, la cascade AMPc-PKA-CREB et l'expression de gènes comme c-fos et BDNF. Bloquer cette synthèse protéique dans les heures suivant l'apprentissage efface le souvenir à long terme sans affecter la mémoire à court terme.</p>
<p class="resume-text">La <strong>consolidation systémique</strong>, qui s'étale sur des mois à des années, implique le transfert progressif des représentations du hippocampe vers le néocortex. Pendant le sommeil, les oscillations lentes delta (0,5-1 Hz) coordonnent les fuseaux de sommeil (12-15 Hz) et les ripples hippocampiques (80-120 Hz) dans une séquence qui rejoue les patterns d'activité de l'éveil, renforçant les connexions néocorticales.</p>
<div class="highlight-box"><p><strong>Le cas H.M. :</strong> Henry Molaison, dont les hippocampes furent retirés chirurgicalement en 1953, ne pouvait plus former de nouveaux souvenirs déclaratifs mais conservait ses souvenirs anciens — confirmant que le hippocampe est nécessaire à l'encodage mais non au stockage à long terme, lequel réside dans le néocortex.</p></div>

<h3>Les mécanismes moléculaires de la plasticité synaptique</h3>
<p class="resume-text">La <strong>potentiation à long terme (LTP)</strong>, découverte par Bliss et Lømo en 1973, est le mécanisme cellulaire sous-jacent de la mémoire. Lorsque deux neurones s'activent simultanément (règle de Hebb), les récepteurs NMDA s'ouvrent et permettent l'entrée de calcium, déclenchant l'insertion de récepteurs AMPA supplémentaires dans la synapse. La LTP précoce dure quelques heures ; la LTP tardive nécessite la synthèse de nouvelles protéines et peut durer des semaines.</p>
<p class="resume-text">Les épines dendritiques changent de forme et de taille lors de la LTP : une épine peut grossir de 30 % en moins d'une heure après stimulation intense, augmentant sa surface synaptique. À l'inverse, la dépression à long terme (LTD) affaiblit les synapses et assure l'oubli sélectif nécessaire à un apprentissage efficace.</p>

<h3>La mémoire de travail et son rôle dans la cognition</h3>
<p class="resume-text">Le modèle de Baddeley et Hitch (1974) décompose la mémoire de travail en quatre composants : l'administrateur central (CPF dorsolatéral), la boucle phonologique (réseau fronto-pariétal gauche), le carnet visuo-spatial (réseau pariéto-occipital droit) et le tampon épisodique (hippocampe). La capacité de la mémoire de travail — environ 4 ± 1 items selon Cowan — prédit fortement l'intelligence fluide et les performances scolaires.</p>
<p class="resume-text">La mémoire de travail n'est pas un espace de stockage actif mais un état d'activation accrue de représentations distribuées. Les oscillations gamma maintiennent des patterns d'activité neuronale « en ligne » grâce à des boucles cortico-thalamiques réentrantes.</p>

<h3>Les faux souvenirs et la reconstructivité de la mémoire</h3>
<p class="resume-text">La mémoire n'est pas un enregistrement fidèle mais une reconstruction dynamique. Elizabeth Loftus a montré que des questions suggestives modifient les souvenirs : des témoins d'accident estiment que les voitures allaient plus vite si on utilise le mot « s'écraser » plutôt que « se toucher ». Ces faux souvenirs sont indiscernables des vrais pour le sujet et activent les mêmes circuits cérébraux.</p>
<p class="resume-text">La <strong>reconsolidation</strong>, découverte en 2000 par Karim Nader, ouvre une voie thérapeutique : lorsqu'un souvenir est rappelé, il redevient temporairement labile. En administrant des bêta-bloquants lors du rappel d'un souvenir traumatique, il est possible d'en atténuer la charge émotionnelle — principe exploité dans les traitements du TSPT.</p>
<div class="highlight-box"><p><strong>Implication judiciaire :</strong> Dans 70 % des cas d'innocentations par ADN aux États-Unis (Projet Innocence), une fausse identification par témoin oculaire était à l'origine de la condamnation — illustrant la malléabilité dangereuse de la mémoire humaine.</p></div>
""")

# ── cognitive/langage ─────────────────────────────────────────────────────────
inject('cognitive/langage', """
<h3>Les circuits neurologiques du langage : au-delà de Broca et Wernicke</h3>
<p class="resume-text">Le modèle classique Broca-Wernicke décrivait le langage comme un circuit linéaire. Les études modernes d'IRMf révèlent un réseau bilatéral d'une vingtaine de régions organisé en deux voies. La <strong>voie ventrale</strong> (faisceau unciné) assure le traitement sémantique — le « quoi ». La <strong>voie dorsale</strong> (faisceau arqué) assure la coordination sensori-motrice — le « comment ».</p>
<p class="resume-text">Cette organisation en deux flux explique des dissociations cliniques : les aphasies de conduction (lésion du faisceau arqué) préservent la compréhension et la production spontanée mais abolissent la répétition. L'hémisphère droit, longtemps considéré comme « muet », traite la prosodie, les métaphores, le discours narratif et les implications pragmatiques.</p>

<h3>L'acquisition du langage et la période critique</h3>
<p class="resume-text">Eric Lenneberg formula en 1967 l'hypothèse de la <strong>période critique</strong> : l'acquisition du langage serait optimale avant la puberté. Le cas de Genie, fillette isolée jusqu'à 13 ans sans exposition au langage, illustre ce principe : malgré une rééducation intensive, elle n'acquit jamais une syntaxe normale.</p>
<p class="resume-text">Les études de neuroimagerie sur des bilingues précoces montrent une représentation chevauchante des deux langues dans l'aire de Broca, tandis que les bilingues tardifs activent des zones légèrement séparées — suggérant que l'organisation corticale du langage se configure différemment selon l'âge d'acquisition.</p>
<div class="highlight-box"><p><strong>Découverte :</strong> Les sourds congénitaux n'ayant jamais appris de langue des signes développent spontanément des « langues gestuelles de maison » avec structure grammaticale rudimentaire, suggérant que la faculté de langage est un instinct biologique qui émerge indépendamment de toute exposition linguistique.</p></div>

<h3>La pragmatique et la communication sociale</h3>
<p class="resume-text">Comprendre le langage ne se réduit pas au décodage des mots : il faut interpréter l'intention du locuteur, saisir les implications, détecter l'ironie. Ces capacités pragmatiques recrutent le cortex préfrontal médial (théorie de l'esprit), le gyrus temporal supérieur et le sillon temporal supérieur droit.</p>
<p class="resume-text">Les patients avec lésions préfrontales prennent les métaphores au pied de la lettre et ratent le second degré. La compréhension des blagues, qui nécessite la détection d'une incongruité et sa résolution humoristique, active le cortex temporal droit et le cortex préfrontal médial bilatéralement.</p>

<h3>Langage et pensée : le relativisme linguistique</h3>
<p class="resume-text">L'hypothèse Sapir-Whorf forte (le langage détermine la pensée) est réfutée, mais une version faible (le langage influence certaines opérations cognitives) est soutenue expérimentalement. Les locuteurs de langues avec des systèmes de couleurs différents catégorisent les couleurs différemment : les Russes, qui ont deux mots pour le bleu clair et le bleu foncé, les discriminent plus rapidement que les anglophones.</p>
<p class="resume-text">Les données d'IRMf montrent que cette influence linguistique sur la perception des couleurs se produit surtout dans l'hémisphère gauche, suggérant que le langage intervient dans la pensée en recrutant ses propres réseaux cérébraux pour moduler le traitement perceptuel.</p>
<div class="highlight-box"><p><strong>Chiffre :</strong> Un enfant de 18 mois apprend en moyenne 10 nouveaux mots par jour. À 6 ans, son vocabulaire est d'environ 14 000 mots — acquis presque entièrement par inférence contextuelle, sans enseignement explicite.</p></div>
""")

# ── cognitive/decision ────────────────────────────────────────────────────────
inject('cognitive/decision', """
<h3>Les systèmes de décision dual-process</h3>
<p class="resume-text">Daniel Kahneman distingue deux modes de traitement. Le <strong>Système 1</strong>, rapide et automatique, opère sans effort conscient et est ancré dans les structures limbiques et les ganglions de la base. Le <strong>Système 2</strong>, lent et délibératif, mobilise le cortex préfrontal dorsolatéral et nécessite un effort attentionnel. Dans la vie quotidienne, 95 % de nos décisions sont prises par le Système 1.</p>
<p class="resume-text">Les patients avec lésions préfrontales ventromédiales, comme le célèbre Phineas Gage, conservent les capacités analytiques mais ne ressentent plus la « sonnette d'alarme somatique » qui guide normalement les décisions complexes. Antonio Damasio formule l'<strong>hypothèse des marqueurs somatiques</strong> : les décisions sont guidées par des signaux corporels associés aux conséquences passées de choix similaires.</p>
<div class="highlight-box"><p><strong>Le jeu d'Iowa :</strong> Dans cette tâche, des patients avec lésions préfrontales continuent de choisir des jeux risqués même après avoir appris qu'ils sont perdants — ils savent intellectuellement la bonne réponse mais ne ressentent plus l'anticipation émotionnelle qui guide le comportement.</p></div>

<h3>Les biais cognitifs et leurs mécanismes cérébraux</h3>
<p class="resume-text">Le <strong>biais d'ancrage</strong> — surestimation ou sous-estimation selon un chiffre de référence arbitraire — implique le cortex pariétal inférieur. L'<strong>effet de cadrage</strong> (le même choix présenté en termes de gains versus pertes produit des décisions opposées) implique l'amygdale : les formulations négatives provoquent une réponse amygdalienne plus forte, biaisant vers la prudence.</p>
<p class="resume-text">L'<strong>aversion à la perte</strong>, formalisée par Kahneman et Tversky (1979), stipule que la douleur d'une perte est environ deux fois plus intense que le plaisir d'un gain équivalent. Neurobiologiquement, les pertes activent plus fortement l'insula et le cortex cingulaire antérieur que les gains n'activent le noyau accumbens.</p>

<h3>Le codage du signal de récompense</h3>
<p class="resume-text">Les neurones dopaminergiques de l'aire tegmentale ventrale codent non pas la récompense elle-même mais l'<strong>erreur de prédiction de récompense</strong> : ils s'activent quand une récompense est inattendue, restent silencieux quand elle est attendue, et s'inhibent quand une récompense attendue est absente. Ce signal est le moteur de l'apprentissage par renforcement et explique pourquoi l'imprévisibilité est addictive.</p>
<p class="resume-text">Le cortex orbitofrontal code la valeur subjective des options disponibles, intégrant les expériences passées, l'état interne actuel et les préférences sociales. Cette valeur change selon le contexte : un raisin vaut moins si l'animal est rassasié, ce que les neurones de l'OFC reflètent en temps réel.</p>

<h3>La décision sociale et les jeux économiques</h3>
<p class="resume-text">Les jeux économiques (ultimatum, dictateur) révèlent que les humains sacrifient leur intérêt financier pour punir l'injustice. Dans le jeu de l'ultimatum, les offres inférieures à 30 % sont rejetées dans toutes les cultures étudiées, au coût d'une perte réelle pour les deux parties.</p>
<p class="resume-text">Inhiber temporairement le cortex préfrontal dorsolatéral par stimulation magnétique transcrânienne rend les sujets plus enclins à accepter les offres injustes — suggérant que le CPFdl exerce un contrôle « rationnel » sur les réponses viscérales de l'insula qui poussent au rejet.</p>
<div class="highlight-box"><p><strong>Application — nudge :</strong> Inscrire les employés automatiquement dans un plan d'épargne retraite avec opt-out augmente la participation de 40 % à 90 % — simplement en changeant le choix par défaut, qui exploite l'inertie du Système 1.</p></div>
""")

print("Cognitive pages enriched.")
for key in ['cognitive/perception','cognitive/attention','cognitive/memoire','cognitive/langage','cognitive/decision']:
    print(f"  {key}: {len(pages[key]['content'])} chars")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved.")
