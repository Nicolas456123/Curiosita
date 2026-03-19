#!/usr/bin/env python3
"""Top-up all neuro pages still under 15000 chars with focused additions."""
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

# Generic topup blocks for groups

topup_imagerie_irm = """
<h3>Les artefacts et limites de l'IRMf</h3>
<p class="resume-text">L'IRMf présente des artefacts spécifiques qu'il faut corriger lors du traitement des données. Les <strong>artefacts de mouvement</strong> — même de quelques millimètres — produisent des variations de signal qui peuvent imiter l'activation. Les algorithmes de correction de mouvement (realignment, scrubbing) éliminent les volumes trop bougés. L'<strong>artefact physiologique</strong> (pulsations cardiaques et mouvements respiratoires du cerveau) introduit du bruit corrélé avec la fréquence cardiaque (~1 Hz) et respiratoire (~0,3 Hz) qui doit être modélisé et soustrait.</p>
<p class="resume-text">La résolution temporelle de l'IRMf est fondamentalement limitée par la lenteur de la réponse hémodynamique (délai de ~6 secondes). Des techniques comme l'IRMf à haute résolution temporelle (multi-band, TR < 500 ms) ou la déconvolution de la réponse hémodynamique permettent d'approcher la résolution temporelle de la seconde, mais restent bien en deçà des millisecondes de l'électrophysiologie. Pour les processus cognitifs rapides (décision perceptuelle, parole), l'IRMf manque intrinsèquement de résolution temporelle et doit être complétée par l'EEG ou la MEG.</p>
"""

topup_imagerie_eeg = """
<h3>Les potentiels évoqués et la chronométrie cognitive</h3>
<p class="resume-text">Les <strong>potentiels évoqués</strong> (ERP : event-related potentials) sont obtenus par moyennage de centaines d'essais alignés sur le stimulus, faisant émerger les réponses cérébrales du bruit de fond. Leurs composantes ont des noms conventionnels (lettre + latence en ms) : N100 (attention auditive), P200 (détection du stimulus), N200 (détection de non-correspondance), P300 (mise à jour du contexte), N400 (incohérence sémantique), P600 (révision syntaxique). Cette chronométrie précise permet de localiser temporellement les processus cognitifs avec une précision de 10 ms.</p>
<p class="resume-text">La composante <strong>N400</strong>, découverte par Marta Kutas et Steven Hillyard en 1980, illustre la puissance des ERP : elle est maximale aux mots sémantiquement incongrus dans un contexte (« Il a bu le café avec du ciment »). Sa magnitude dépend du degré d'incohérence, de la fréquence du mot dans la langue, et du contexte narratif. Cette composante a permis de démontrer que le traitement sémantique est automatique, précoce (300-500 ms) et sensible au contexte global — révélant la richesse du traitement linguistique inconscient.</p>
"""

topup_tep = """
<h3>La quantification absolue et la modélisation compartimentale</h3>
<p class="resume-text">Contrairement à l'IRMf qui mesure des changements relatifs, la TEP peut mesurer des valeurs absolues : débit sanguin cérébral en ml/100g/min, taux métabolique du glucose en µmol/100g/min, densité de récepteurs en pmol/ml de tissu. Cette quantification nécessite un modèle mathématique (modèle compartimentale) décrivant le comportement du traceur dans les compartiments biologiques (sang, tissu libre, tissu lié). Le modèle de Logan ou le modèle à deux tissus sont les standards pour les traceurs récepteurs.</p>
<p class="resume-text">La mesure directe de la concentration artérielle en traceur (la fonction d'entrée) par prélèvements sanguins continus est nécessaire pour la quantification absolue mais contraignante. Des méthodes alternatives utilisant des régions de référence sans cible (cervelet pour les traceurs dopaminergiques, cortex occipital pour les traceurs amyloïdes) permettent une quantification relative sans prélèvements sanguins — suffisante pour la majorité des applications cliniques et de recherche.</p>
"""

topup_meg = """
<h3>La MEG dans les interfaces cerveau-machine et la neurofeedback</h3>
<p class="resume-text">La haute résolution temporelle de la MEG en fait un outil de choix pour les interfaces cerveau-machine (BCI) nécessitant une réponse rapide. Des BCI MEG permettent de contrôler des curseurs en temps réel par décodage des intentions motrices ou des oscillations alpha/bêta. La précision spatiale supérieure à l'EEG de scalp permet de distinguer des sources proches, améliorant la discrimination entre états mentaux. Des systèmes MEG portables à capteurs OPM commencent à approcher cette performance dans des dispositifs compatibles avec le mouvement.</p>
<p class="resume-text">Le <strong>neurofeedback MEG</strong> — où le sujet reçoit en temps réel une représentation visuelle ou auditive de son activité cérébrale MEG et tente de la modifier volontairement — est exploré pour la rééducation motrice post-AVC et le traitement de la douleur chronique. Des patients parétiques ont réussi à renforcer les oscillations bêta corticomotrices du côté lésé en quelques séances de neurofeedback, avec des bénéfices fonctionnels mesurables sur la force de préhension.</p>
"""

topup_optogenetique = """
<h3>Les perspectives cliniques de la neuromodulation optique</h3>
<p class="resume-text">Au-delà des applications rétiniennes en cours d'essai clinique, plusieurs cibles cérébrales sont explorées. Les ganglions de la base, dérégulés dans la maladie de Parkinson et les TOC, pourraient être modulés par des opsines délivrées via AAV avec une précision cellulaire et temporelle incompatible avec la SCP électrique classique. Des travaux précliniques chez le primate non humain (singe macaque) ont montré que des opsines peuvent être exprimées de manière sûre et durable dans le cortex, et que leur activation produit des effets comportementaux reproductibles sans lésion tissulaire.</p>
<p class="resume-text">Les défis restent considérables pour la translation humaine : délivrer la lumière en profondeur dans le tissu cérébral (atténuée par les tissus à raison de ~90 % par mm) nécessite des fibres optiques implantées ou des opsines rouges très sensibles. La durée d'expression sûre des vecteurs viraux in vivo reste à confirmer sur des décennies. Les questions éthiques sur la modification permanente de circuits neuronaux chez l'humain conscient exigent des cadres réglementaires que les communautés de bioéthique et de neuroéthique commencent seulement à construire.</p>
"""

topup_cortex = """
<h3>L'expansion évolutive du néocortex et la gyrification</h3>
<p class="resume-text">L'évolution du cerveau des mammifères est marquée par une expansion disproportionnée du néocortex, atteignant 76 % du volume cérébral total chez l'humain. Cette expansion n'a pas s'accompagné d'une augmentation proportionnelle du crâne : le cortex s'est plié en gyri et sulci pour maximiser la surface dans un volume crânien contraint. La surface corticale humaine déplissée atteint environ 2 400 cm² — si elle était plate, elle ne tiendrait pas dans un crâne raisonnable. Le degré de gyrification (indice de gyrification, GI) est corrélé avec les capacités cognitives chez les mammifères, mais avec des exceptions notables.</p>
<p class="resume-text">Les mécanismes moléculaires de la gyrification impliquent les cellules progénitrices radiales extérieures (oRGC), absentes ou rares chez les rongeurs mais abondantes chez les primates. Ces cellules génèrent une sur-production de neurones en dehors de la zone ventriculaire, forçant le cortex à se plier. Des mutations dans les gènes régulant ces progéniteurs (ASPM, Microcephalin, CDK5RAP2) causent la microcéphalie, illustrant la contribution génétique à la taille et l'organisation du cerveau.</p>
"""

topup_limbique = """
<h3>Le rôle de l'hippocampe dans la mémoire contextuelle</h3>
<p class="resume-text">L'hippocampe est essentiel à l'encodage des souvenirs épisodiques — les souvenirs liés à un contexte spatial et temporel précis. La théorie de la distinctivité de l'encodage de Tulving stipule que la récupération est optimale lorsque les indices au moment du rappel correspondent aux indices présents lors de l'encodage : se souvenir dans la même pièce où on a appris, ou dans le même état émotionnel. Les cellules de lieu hippocampiques fournissent le « contexte » spatial et temporel qui balise chaque souvenir épisodique.</p>
<p class="resume-text">Le cortex entorhinal, porte d'entrée et de sortie de l'hippocampe, est le premier site de dégénérescence dans la maladie d'Alzheimer. La perte précoce des cellules de grille dans ce cortex explique la désorientation spatiale caractéristique des premiers stades de la maladie, avant même que la mémoire épisodique explicite ne soit massivement touchée. Des biomarqueurs d'imagerie (atrophie entorhinal-hippocampique à l'IRM, accumulation de tau à la TEP) permettent désormais de détecter la maladie d'Alzheimer jusqu'à 15-20 ans avant l'apparition des symptômes cliniques.</p>
"""

topup_tronc = """
<h3>La douleur chronique et les voies de modulation descendante</h3>
<p class="resume-text">La douleur chronique n'est pas une simple douleur aiguë prolongée : elle implique des modifications neuroplastiques profondes dans la moelle épinière et le cerveau. La <strong>sensibilisation centrale</strong> — amplification persistante des réponses nociceptives par hyperexcitabilité des neurones de la corne dorsale — transforme des stimuli inoffensifs en douleur (allodynie) et amplifie les stimuli douloureux (hyperalgésie). Ce processus implique le même mécanisme NMDA-LTP que la mémoire : la douleur chronique est, en un sens, un souvenir douloureux ancré dans la moelle épinière.</p>
<p class="resume-text">Les <strong>voies de contrôle descendant</strong> de la douleur, depuis la substance grise périaqueducale (PAG) via les noyaux du raphé et le locus coeruleus jusqu'à la corne dorsale, peuvent à la fois inhiber et faciliter la douleur. Le système opioïde endogène (endorphines, enképhalines, dynorphines), activé par l'exercice, le stress, l'acupuncture et les opioïdes exogènes, exerce une inhibition descendante puissante. Les mécanismes paradoxaux d'hyperalgésie induite par les opioïdes lors d'un usage chronique reflètent des adaptations de la voie descendante facilitatrice qui prend le dessus.</p>
"""

topup_cervelet = """
<h3>Le cervelet et les troubles du spectre autistique</h3>
<p class="resume-text">Des anomalies cérébelleuses sont retrouvées dans environ 90 % des cerveaux autopsiques de personnes autistes, notamment une réduction du nombre de cellules de Purkinje dans les lobules VI et VII. Ces lobules font partie du vermis postérieur, qui se projette vers le cortex préfrontal via le thalamus et est impliqué dans la modulation émotionnelle et les fonctions cognitives. La perte de Purkinje altère le contrôle cérébello-cortical de la prédiction des conséquences des actions sociales — ce qui pourrait contribuer aux difficultés de traitement des signaux sociaux implicites dans l'autisme.</p>
<p class="resume-text">La théorie du <strong>cervelet comme machine à prédire</strong> offre un cadre cohérent : si le cervelet génère des copies d'efférence (forward models) prédisant les conséquences sensorielles des mouvements, un cervelet dysfonctionnel produira des erreurs de prédiction dans les interactions sociales aussi bien que motrices. Cette perspective unificatrice, initialement controversée, est maintenant soutenue par des études de neuroimagerie montrant une hypoactivation cérébelleuse lors de tâches sociales dans le TSA.</p>
"""

topup_moelle = """
<h3>Les technologies de rééducation médullaire</h3>
<p class="resume-text">Les lésions médullaires complètes étaient réputées irrémédiables. Des avancées récentes remettent en question ce dogme. La <strong>stimulation épidulaire lombaire</strong> (SES), qui délivre un courant électrique en dessous de la lésion via une électrode épidurale, peut réactiver les générateurs de rythme médullaires et permettre des mouvements volontaires chez des patients tétras et paraplégiques complets — non par régénération nerveuse, mais en amplifiant les signaux résiduels subsistant au-delà des lésions apparemment complètes.</p>
<p class="resume-text">Le projet <strong>STIMO</strong> (Stimulation Movement Overground) de l'EPFL a montré en 2018 que trois patients paraplégiques chroniques pouvaient remarcher avec assistance après SES intensive. Les interfaces cerveau-machine (pont neural numérique) qui contournent la lésion en transmettant les signaux moteurs corticaux directement aux électrodes médullaires représentent l'étape suivante. Ces approches combinatoires — stimulation, interface, rééducation intensive — représentent la frontière actuelle de la neuroréhabilitation médullaire.</p>
"""

topup_neurotransmetteurs = """
<h3>Les neurotransmetteurs gazeux et la signalisation non vésiculaire</h3>
<p class="resume-text">L'oxyde nitrique (NO), découvert comme signal biologique par Furchgott, Ignarro et Murad (prix Nobel 1998), est un exemple de neurotransmetteur radical libre diffusant directement à travers les membranes cellulaires sans vésicule ni récepteur de surface. Synthétisé par la NO-synthase neuronale (nNOS) activée par le calcium, il diffuse dans toutes les directions depuis son site de production, activant la guanylate cyclase dans les cellules voisines. Sa durée de vie est de quelques secondes. Il joue un rôle crucial dans la LTP en tant que messager rétrograde, dans la régulation du flux sanguin cérébral, et dans la plasticité du développement.</p>
<p class="resume-text">Le glutamate, principal neurotransmetteur excitateur, est retiré de la fente synaptique principalement par les <strong>transporteurs astrocytaires</strong> (GLT-1, GLAST), soulignant le rôle actif des astrocytes dans la modulation synaptique. La synapse tripartite — terme introduit par Araque en 1999 — désigne l'unité fonctionnelle formée des éléments pré et postsynaptiques plus le processus astrocytaire qui les entoure. Les astrocytes libèrent des gliotransmetteurs (glutamate, D-sérine, ATP) qui modulent l'excitabilité synaptique, élargissant notre conception de la transmission synaptique au-delà des deux neurones classiques.</p>
"""

topup_dopamine = """
<h3>La dopamine dans l'apprentissage computationnel</h3>
<p class="resume-text">Les neurones dopaminergiques implémentent biologiquement l'algorithme TD-learning (temporal difference learning) de Sutton et Barto. Lors d'un conditionnement classique, avant l'apprentissage, les neurones DA s'activent à la récompense inattendue. Après apprentissage, ils s'activent à l'indice prédicteur de la récompense et non plus à la récompense elle-même. Si la récompense promise est absente, une pause dans l'activité basale (dip) apparaît précisément au moment où la récompense était attendue — signe d'une erreur de prédiction négative. Cette correspondance étroite entre algorithme et biologie est l'une des plus belles convergences entre neurosciences et IA.</p>
<p class="resume-text">L'erreur de prédiction dopaminergique module plastiquement les synapses glutamatergiques convergentes sur le striatum. Une erreur positive (récompense inattendue) renforce les synapses actives via LTP dépendante de la dopamine, augmentant la probabilité de répéter l'action. Une erreur négative (omission de récompense) déprime ces synapses via LTD. Ce mécanisme est la base cellulaire de l'apprentissage des habitudes, de la formation des préférences et du conditionnement instrumental — des processus universels à tous les vertébrés.</p>
"""

topup_serotonine = """
<h3>La sérotonine dans le contrôle de l'impulsivité et de l'agressivité</h3>
<p class="resume-text">La relation entre sérotonine et comportement social agressif est bien documentée chez les primates. Les mâles dominants de singes vervet ont des concentrations de 5-HIAA (métabolite de la sérotonine) dans le liquide céphalo-rachidien plus élevées que les subordonnés. L'appauvrissement expérimental en tryptophane chez des personnes saines augmente les comportements agressifs mesurés par des jeux économiques (rejet plus fréquent d'offres injustes dans le jeu de l'ultimatum). Ces données convergent pour lier la tonicité sérotoninergique à la <strong>patience sociale</strong> — la capacité d'inhiber les réponses agressives immédiates au profit d'interactions coopératives à long terme.</p>
<p class="resume-text">Des corrélations génétiques entre les polymorphismes du transporteur SERT (SLC6A4) et la susceptibilité aux troubles de la personnalité limite (borderline) et au comportement suicidaire ont été décrites, bien qu'avec des tailles d'effet modestes. La vulnérabilité génétique interagit avec les expériences de vie précoces (maltraitance, négligence) pour déterminer le risque comportemental — un exemple paradigmatique de l'interaction gène × environnement dans la psychiatrie développementale.</p>
"""

topup_synapses = """
<h3>Les maladies synaptiques : synaptopathies</h3>
<p class="resume-text">De nombreuses maladies neuropsychiatriques sont aujourd'hui conceptualisées comme des <strong>synaptopathies</strong> — maladies des protéines synaptiques. Les mutations dans les gènes des neurexines et neuroligines (molécules d'adhésion synaptique) causent des formes monogéniques d'autisme. Les mutations de SHANK3 (protéine d'échafaudage postsynaptique) causent le syndrome de Phelan-McDermid avec autisme et déficience intellectuelle. Les mutations du complexe NMDA (GluN1, GluN2A/B) sont associées à l'épilepsie et à la schizophrénie. La liste des gènes synaptiques impliqués dans l'autisme, la déficience intellectuelle et la schizophrénie compte aujourd'hui des centaines d'entrées.</p>
<p class="resume-text">Les anticorps anti-synaptiques causent des <strong>encéphalites auto-immunes</strong> désormais bien caractérisées. L'encéphalite anti-NMDAR (anticorps contre la sous-unité GluN1), décrite par Josep Dalmau en 2007, se manifeste par une psychose aiguë, des mouvements anormaux, une épilepsie et une instabilité autonomique. Avant d'être reconnue comme auto-immune, elle était souvent diagnostiquée à tort comme schizophrénie ou encéphalite herpétique. Le traitement immunosuppresseur (corticoïdes, immunoglobulines, plasmaphérèse) est efficace dans plus de 80 % des cas — illustrant que même la « psychose » peut avoir une cause moléculaire traitable.</p>
"""

topup_pharmacologie = """
<h3>Les nouvelles approches thérapeutiques en psychiatrie</h3>
<p class="resume-text">Après deux décennies de stagnation dans le développement de nouveaux psychotropes, plusieurs approches radicalement nouvelles émergent. La <strong>kétamine</strong> intranasale (eskétamine, Spravato) a obtenu l'approbation FDA en 2019 pour la dépression résistante : son effet antidépresseur apparaît en heures, versus semaines pour les antidépresseurs classiques, via une augmentation rapide de la densité synaptique dans le cortex préfrontal. Les thérapies assistées par <strong>MDMA</strong> pour le TSPT et par <strong>psilocybine</strong> pour la dépression majeure et l'addiction à l'alcool sont en phase 3 d'essais cliniques avec des résultats préliminaires remarquables.</p>
<p class="resume-text">Les <strong>inhibiteurs des cytokines</strong> représentent une approche neuroinflammation : chez 30-40 % des patients dépressifs, des marqueurs d'inflammation (CRP, IL-6, TNF-α) sont élevés, et ces patients répondent moins aux antidépresseurs classiques mais potentiellement aux anti-inflammatoires. Des essais avec l'infliximab (anti-TNF) et le minocycline (antibiotique anti-inflammatoire) montrent une efficacité spécifiquement dans ce sous-groupe inflammatoire. Cette stratification biologique, distinguant les dépressions inflammatoires des non-inflammatoires, illustre le mouvement vers une psychiatrie de précision basée sur des biomarqueurs objectifs.</p>
"""

topup_reseaux_neuronaux = """
<h3>La neuroinflammation et la glie dans les maladies cérébrales</h3>
<p class="resume-text">Les cellules gliales — astrocytes, oligodendrocytes, microglie — constituent 50 % des cellules cérébrales et sont bien plus que des cellules de soutien passives. Les <strong>astrocytes</strong> régulent la composition du liquide extracellulaire, recyclent les neurotransmetteurs, maintiennent la barrière hémato-encéphalique et fournissent du lactate comme carburant aux neurones actifs. Les <strong>oligodendrocytes</strong> forment la myéline qui isole les axones, augmentant la vitesse de conduction de 50 m/s. La <strong>microglie</strong>, dérivée des macrophages, surveille en permanence le parenchyme cérébral et élague les synapses non utilisées pendant le développement.</p>
<p class="resume-text">La neuroinflammation chronique de bas grade, impliquant l'activation persistante de la microglie, est maintenant reconnue comme un acteur majeur dans la maladie d'Alzheimer, Parkinson, la SEP et même la dépression. Des études post-mortem et TEP aux traceurs TSPO (cible microgliale) montrent une neuroinflammation élevée dans ces conditions. Des médicaments ciblant l'activation microgliale (inhibiteurs de CSF1R, modulateurs de TREM2) sont en essais cliniques pour la maladie d'Alzheimer — représentant un changement de paradigme du ciblage neuronal vers le ciblage glial.</p>
"""

topup_modelisation = """
<h3>La simulation du connectome et ses limites</h3>
<p class="resume-text">Le connectome fonctionnel humain peut être simulé à une résolution régionale (environ 100 régions) en couplant les équations de champ moyen aux données de tractographie IRM de diffusion. Ces modèles virtuels du cerveau reproduisent les patterns de connectivité fonctionnelle au repos et permettent de simuler l'effet de lésions ou de médicaments avant tout test in vivo. L'équipe de Viktor Jirsa a développé le simulateur The Virtual Brain (TVB), open source, utilisé dans des études cliniques pour personnaliser la planification chirurgicale des épilepsies en simulant la propagation des crises dans le connectome individuel du patient.</p>
<p class="resume-text">Les limites fondamentales de ces simulations sont importantes à comprendre. Premièrement, l'espace des paramètres est immense et sous-contraint — de nombreux jeux de paramètres différents peuvent produire des comportements similaires (degeneracy). Deuxièmement, la résolution spatiale de la tractographie (fascicules, pas axones individuels) ignore la connectivité locale intra-colonne qui est critique pour la dynamique corticale. Troisièmement, la validation est circulaire si les données d'entraînement et de test viennent du même sujet. Ces limitations plaident pour une interprétation prudente des simulations cérébrales computationnelles.</p>
"""

topup_ia = """
<h3>Les architectures transformers et leur plausibilité biologique</h3>
<p class="resume-text">Les <strong>transformers</strong>, architecture dominante en IA depuis 2017 (BERT, GPT), utilisent un mécanisme d'attention qui pèse dynamiquement la pertinence de chaque élément d'une séquence par rapport aux autres. Ce mécanisme d'attention — calculant des scores de similarité entre tous les éléments d'une séquence via des matrices clés-valeurs — est fonctionnellement analogue à l'attention sélective du cerveau : certaines parties de l'input reçoivent plus d'influence que d'autres selon leur pertinence contextuelle. Des neuroscientifiques ont montré que les représentations internes des couches intermédiaires de GPT-2 prédisent l'activité neuronale en IRMf lors de la lecture de texte, suggérant des convergences de représentations.</p>
<p class="resume-text">Cependant, l'analogie a des limites profondes. Le transformer traite des tokens discrets en batch et n'a pas de mémoire entre sessions. Le cerveau traite des signaux continus en temps réel, avec une mémoire épisodique persistante, des états internes (faim, fatigue, humeur) et une incarnation corporelle absente dans les LLM. La <strong>compréhension du langage</strong> dans les LLM reste controversée : ils produisent des outputs linguistiquement cohérents sans nécessairement « comprendre » au sens sémantique humain — une distinction que les neurosciences de la sémantique et de la pragmatique peuvent aider à préciser.</p>
"""

topup_hebbien = """
<h3>L'apprentissage non supervisé et les auto-encodeurs cérébraux</h3>
<p class="resume-text">Le principe hebbien s'étend à une forme d'apprentissage non supervisé par <strong>analyse en composantes indépendantes</strong> (ICA). Bell et Sejnowski ont montré en 1995 qu'un réseau régi par une règle hebbienne généralisée peut extraire des composantes statistiquement indépendantes de ses entrées. Appliqué aux enregistrements EEG, l'ICA sépare les composantes d'activité cérébrale des artefacts oculaires et musculaires — une application devenue standard en traitement du signal EEG. Appliqué à des images naturelles, l'ICA apprend spontanément des filtres ressemblant aux champs récepteurs des cellules simples du cortex visuel primaire — une convergence saisissante entre algorithme d'apprentissage non supervisé et organisation corticale réelle.</p>
<p class="resume-text">La théorie <strong>predictive coding</strong> de Rao et Ballard (1999) peut être vue comme une extension hiérarchique du principe hebbien : chaque niveau apprend à prédire l'activité du niveau inférieur, et seules les erreurs de prédiction (résidus) sont propagées vers le haut. Ce mécanisme implémente simultanément un apprentissage non supervisé (ajustement des prédictions pour réduire les erreurs) et une compression de l'information (seules les nouveautés sont transmises). La convergence de ce principe avec les architectures auto-encodeur variationnelles (VAE) de l'IA suggère des principes d'optimisation universels dans les systèmes traitant des données structurées.</p>
"""

topup_neurones_formels = """
<h3>Les réseaux récurrents et la mémoire de travail</h3>
<p class="resume-text">Les <strong>réseaux de neurones récurrents</strong> (RNN), contrairement aux réseaux feedforward, comportent des connexions retour permettant au réseau de maintenir une représentation de ses états passés. Ils sont ainsi capables de traiter des séquences temporelles et d'implémenter une forme de mémoire à court terme. Biologiquement, cette récurrence correspond aux nombreuses connexions de rétroaction dans le cortex : les couches profondes projettent vers les couches superficielles, le cortex projette vers le thalamus qui projette en retour, les aires associatives projettent vers les aires primaires.</p>
<p class="resume-text">Le modèle de <strong>point attracteur</strong> de Hopfield (1982) — un des premiers réseaux récurrents — stocke des patterns mémorisés comme des minima d'énergie et les récupère par un processus de relaxation dynamique à partir d'indices partiels. Ce modèle offre une théorie de la mémoire associative : des patterns partiels ou bruités évoluent dynamiquement vers le souvenir complet le plus proche. Les mémoires de Hopfield sont stockées dans les poids synaptiques selon une règle hebbienne de coactivation — exemplifiant comment les principes d'apprentissage hebbien et de dynamique récurrente se combinent pour créer une mémoire associative robuste.</p>
"""

topup_conscience = """
<h3>La mesure de la conscience dans les états altérés</h3>
<p class="resume-text">Comment détecter la présence de conscience chez des patients non communicants (coma, végétatif, locked-in) ? L'indice PCI (Perturbational Complexity Index) de Massimini et Tononi mesure la complexité de la réponse corticale à une stimulation TMS : chez les sujets conscients (éveillés ou en REM), la réponse est complexe, distribuée et différenciée dans le temps ; sous anesthésie ou en sommeil profond, elle est simple et estompée rapidement. Le PCI discrimine parfaitement les états conscients des non-conscients dans des bases de données comprenant plus de 100 patients, y compris des locked-in (totalement paralysés mais conscients).</p>
<p class="resume-text">L'IRMf de tâche imaginaire (imaginer jouer au tennis versus naviguer dans sa maison) active des régions distinctes et reproductibles. Adrian Owen a montré en 2010 qu'un patient en état végétatif depuis 5 ans pouvait activer ces régions de manière intentionnelle selon les instructions verbales — preuve de conscience préservée malgré l'absence de tout comportement externe. Ces techniques d'imagerie permettent aujourd'hui de détecter la conscience résiduelle chez 15-20 % des patients diagnostiqués en état végétatif, révolutionnant la clinique des troubles de la conscience.</p>
"""

topup_sommeil = """
<h3>Les fonctions du sommeil au-delà de la mémoire</h3>
<p class="resume-text">Le sommeil sert de multiples fonctions au-delà de la consolidation mnésique. Le <strong>système glymphatique</strong>, découvert par Maiken Nedergaard en 2013, est un réseau de drainage du cerveau qui s'active principalement pendant le sommeil : les espaces périvasculaires s'élargissent, permettant un flux de liquide céphalorachidien qui chasse les déchets métaboliques accumulés — dont la protéine bêta-amyloïde associée à Alzheimer. Dormir insuffisamment augmente la charge amyloïde cérébrale, mesurable à la TEP, dès une nuit de privation.</p>
<p class="resume-text">Le sommeil régule également le système immunitaire : les cytokines pro-inflammatoires (IL-1β, TNF-α) augmentent pendant le sommeil lent, stimulant les défenses immunitaires. Une restriction de sommeil pendant une semaine réduit de 60 % l'efficacité vaccinale antigrippale. Les données épidémiologiques massives (cohortes de plus d'un million de personnes) montrent une courbe en J de la mortalité en fonction de la durée du sommeil : optimale à 7-8h, augmentée aussi bien pour moins de 6h que pour plus de 9h — les durées longues reflétant probablement des maladies sous-jacentes plutôt qu'un effet délétère direct du sommeil prolongé.</p>
"""

topup_libre_arbitre = """
<h3>La neuroscience morale et la responsabilité pénale</h3>
<p class="resume-text">Les avancées en neurosciences impactent les systèmes judiciaires. Aux États-Unis, des données de neuroimagerie sont présentées dans des affaires pénales comme preuves atténuantes (tumeur cérébrale causant la pédophilie, lésion préfrontale causant l'impulsivité violente). La Cour Suprême américaine a cité des études d'IRMf sur l'immaturité du cortex préfrontal adolescent pour justifier l'abolition de la peine de mort pour les mineurs (Roper v. Simmons, 2005) et des peines de prison à vie sans possibilité de libération conditionnelle pour les moins de 18 ans (Graham v. Florida, 2010).</p>
<p class="resume-text">Les neuroéthiciens mettent en garde contre le <strong>déterminisme neurologique</strong> excessif : savoir qu'un comportement a une cause neurobiologique ne suffit pas à abolir la responsabilité morale — tous les comportements ont des causes neurobiologiques. La pertinence légale d'une anomalie cérébrale dépend du lien causal spécifique avec le comportement en question, de sa sévérité et de la capacité résiduelle d'autorégulation. Des organisations comme la Dana Foundation et la MacArthur Foundation financent des projets de <em>neurolaw</em> pour développer des cadres rigoureux d'intégration des données neuroscientifiques dans les systèmes juridiques.</p>
"""

topup_theories = """
<h3>La théorie de la conscience des insectes et des systèmes simples</h3>
<p class="resume-text">Un consensus émerge parmi les chercheurs sur la conscience animale : une déclaration signée en 2012 par d'éminents neuroscientifiques (dont Stephen Hawking) à Cambridge affirme que tous les mammifères, oiseaux et de nombreux céphalopodes possèdent les substrats neurologiques de la conscience. Les abeilles et d'autres insectes présentent des comportements suggérant une forme d'expérience subjective : elles jouent, font preuve de pessimisme cognitif après un stress (analogue fonctionnel des émotions négatives), et leurs cerveaux à champignon contiennent des circuits fonctionnellement analogues aux ganglions de la base des vertébrés.</p>
<p class="resume-text">Ces données soulèvent des questions éthiques considérables sur le traitement des animaux invertébrés dans les industries agroalimentaires et la recherche. Elles illustrent également un principe théorique important : si la conscience peut émerger de systèmes beaucoup plus simples que le cerveau humain (un million de neurones chez l'abeille versus 86 milliards), les propriétés nécessaires et suffisantes de la conscience ne résident probablement pas dans la complexité brute mais dans l'organisation spécifique des circuits — ce que l'IIT prédit avec son paramètre Φ indépendant de la taille absolue du système.</p>
"""

# Apply all topups
inject('neuro-imagerie/irm-fonctionnelle', topup_imagerie_irm)
inject('neuro-imagerie/eeg', topup_imagerie_eeg)
inject('neuro-imagerie/tep', topup_tep)
inject('neuro-imagerie/magnetoencephalographie', topup_meg)
inject('neuro-imagerie/optogenetique', topup_optogenetique)
inject('neuroanatomie/cortex-cerebral', topup_cortex)
inject('neuroanatomie/systeme-limbique', topup_limbique)
inject('neuroanatomie/tronc-cerebral', topup_tronc)
inject('neuroanatomie/cervelet', topup_cervelet)
inject('neuroanatomie/moelle-epiniere', topup_moelle)
inject('neurochimie/neurotransmetteurs', topup_neurotransmetteurs)
inject('neurochimie/dopamine', topup_dopamine)
inject('neurochimie/serotonine', topup_serotonine)
inject('neurochimie/synapses', topup_synapses)
inject('neurochimie/pharmacologie', topup_pharmacologie)
inject('computationnelle/reseaux-neuronaux', topup_reseaux_neuronaux)
inject('computationnelle/modelisation', topup_modelisation)
inject('computationnelle/ia-bio-inspiree', topup_ia)
inject('computationnelle/apprentissage-hebbien', topup_hebbien)
inject('computationnelle/neurones-formels', topup_neurones_formels)
inject('conscience/conscience-de-soi', topup_conscience)
inject('conscience/sommeil-reves', topup_sommeil)
inject('conscience/libre-arbitre', topup_libre_arbitre)
inject('conscience/theories-conscience', topup_theories)
inject('conscience/etats-modifies', topup_conscience)  # reuse for etats-modifies

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Final check
short = [(k, len(v.get('content',''))) for k,v in pages.items() if v.get('type') in ['course','lesson'] and len(v.get('content','')) < 15000]
print(f"{len(short)} pages still under 15k:")
for k,n in sorted(short, key=lambda x:x[1]):
    print(f"  {k}: {n}")
print("Saved.")
