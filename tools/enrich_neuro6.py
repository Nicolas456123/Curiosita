#!/usr/bin/env python3
"""Sixth pass: conscience pages + top up all still-short pages to 15k."""
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

# ── conscience pages ──────────────────────────────────────────────────────────

inject('conscience/conscience-de-soi', """
<h3>Les tests de la conscience de soi chez l'animal</h3>
<p class="resume-text">Gordon Gallup Jr. développa en 1970 le <strong>test du miroir</strong> comme indicateur de conscience de soi : l'animal endormi reçoit une marque de peinture sur le front, invisible sans miroir. Seuls quelques espèces réagissent en touchant leur propre marque — grands singes (chimpanzés, orangs-outans, gorilles), dauphins, éléphants, et les corneilles d'une étude récente. L'humain passe le test vers 18-24 mois. Les singes macaques, pourtant proches phylogénétiquement, échouent, suggérant que la conscience de soi n'est pas liée à la taille absolue du cerveau mais à son organisation spécifique.</p>
<p class="resume-text">Au-delà du miroir, la conscience de soi implique plusieurs niveaux distincts. La <strong>conscience de soi minimale</strong> (sentir son corps comme distinct de l'environnement) est probablement partagée par de nombreux animaux. La <strong>conscience de soi narrative</strong> — se représenter comme un agent persistant dans le temps avec un passé et un futur — semble spécifique aux humains et aux grands primates et implique le cortex préfrontal médial et le cortex cingulaire postérieur.</p>
<div class="highlight-box"><p><strong>Illusion de sortie du corps :</strong> En stimulant électriquement la jonction temporo-pariétale droite, Blanke et al. ont provoqué des expériences de « hors-corps » chez des patients éveillés — démontrant que le sentiment d'être « dans son corps » est une construction cérébrale active, dissociable et manipulable neurochirurgicalement.</p></div>

<h3>Le réseau du mode par défaut et la rumination</h3>
<p class="resume-text">Le réseau du mode par défaut (DMN), qui inclut le cortex préfrontal médial, le cingulaire postérieur, le précuneus et le gyrus angulaire, est le réseau de la pensée autoréférentielle, de la rêverie, du voyage mental dans le temps (se souvenir du passé, imaginer le futur) et de la théorie de l'esprit. Sa désactivation lors de tâches externes est une des réponses les plus robustes en IRMf — en gérant une tâche cognitive, on « éteint » littéralement le réseau dédié aux pensées sur soi-même.</p>
<p class="resume-text">La rumination dépressive correspond à une hyperactivité du DMN couplée à une connectivité accrue avec l'amygdale. La méditation de pleine conscience, en entraînant la détection et la désengagement des pensées automatiques, réduit cette hyperconnectivité DMN-amygdale et augmente la connectivité entre le DMN et le cortex préfrontal latéral (régulation cognitive). Ces changements neurobiologiques, mesurables après 8 semaines de pratique MBSR, corrèlent avec la réduction des scores de dépression et d'anxiété.</p>
""")

inject('conscience/sommeil-reves', """
<h3>La régulation homéostatique et circadienne du sommeil</h3>
<p class="resume-text">Le sommeil est régulé par deux processus indépendants qui interagissent. Le <strong>processus homéostatique S</strong> (pression de sommeil) s'accumule durant l'éveil via l'adénosine extracellulaire dans le cortex basai frontal : plus vous êtes éveillé longtemps, plus vous avez sommeil. La caféine agit précisément en bloquant les récepteurs à l'adénosine (A1 et A2A), masquant la pression de sommeil sans la réduire. Le <strong>processus circadien C</strong>, gouverné par l'horloge biologique du noyau suprachiasmatique hypothalamique, impose un rythme veille-sommeil de ~24h indépendant de la fatigue accumulée.</p>
<p class="resume-text">L'interaction entre ces deux processus détermine la propension au sommeil à chaque moment de la journée. Le phénomène du « creux de l'après-midi » (14-16h) n'est pas dû uniquement au repas : il reflète un nadir circadien de l'éveil qui coïncide avec la diminution de l'alerte. Dans les cultures pratiquant la sieste, ce creux est naturellement comblé — les données montrent qu'une sieste de 20-30 minutes restore les performances cognitives à leur niveau matinal sans affecter le sommeil nocturne.</p>
<div class="highlight-box"><p><strong>La dette de sommeil :</strong> Une restriction chronique à 6h de sommeil par nuit pendant deux semaines produit des déficits cognitifs équivalents à deux nuits blanches totales — mais les sujets ne se sentent pas aussi somnolents et sous-estiment leur déclin. Cette insensibilité subjective à la dette de sommeil est en elle-même un symptôme dangereux.</p></div>

<h3>Le sommeil paradoxal et les rêves lucides</h3>
<p class="resume-text">Durant le sommeil paradoxal (REM), le cerveau est aussi actif qu'à l'éveil. Le cortex préfrontal dorsolatéral (siège du raisonnement critique) est paradoxalement hypoactif — expliquant pourquoi les incohérences des rêves ne nous interpellent pas. L'amygdale et le cortex limbique sont hyperactifs — expliquant la charge émotionnelle intense des rêves. La paralysie musculaire (atonie REM) empêche l'actualisation motrice des rêves : des lésions de la formation réticulée pontique abolissent cette atonie, produisant des troubles comportementaux du sommeil REM où les sujets « jouent physiquement » leurs rêves.</p>
<p class="resume-text">Le rêve lucide — état de conscience dans lequel le rêveur sait qu'il rêve et peut parfois contrôler son rêve — correspond à une réactivation partielle du cortex préfrontal dorsolatéral durant le sommeil REM. Ce phénomène a été validé scientifiquement en 1975 par Keith Hearne et Stephan LaBerge, qui ont demandé à des rêveurs lucides de communiquer via des mouvements oculaires prédéfinis (les seuls mouvements volontaires possibles durant l'atonie REM). Des enregistrements EEG lors de rêves lucides montrent une augmentation de la puissance gamma dans les régions frontales — signature de la métacognition consciente.</p>
""")

inject('conscience/etats-modifies', """
<h3>La méditation et la neuroscience contemplative</h3>
<p class="resume-text">La méditation bouddhiste tibétaine, pratiquée par des méditants experts (> 10 000 heures), produit des patterns EEG remarquables : des oscillations gamma de haute amplitude (25-42 Hz) dans les régions frontales et pariétales, synchronisées sur des échelles de temps longues, absentes chez les débutants. Richard Davidson et Antoine Lutz ont montré que cette activité gamma est auto-induite et persiste entre les sessions formelles, suggérant une modification stable de l'organisation cérébrale par la pratique intensive. Les moines expérimentés présentent également une asymétrie gauche de l'activité préfrontale au repos, associée à des états émotionnels positifs.</p>
<p class="resume-text">La pleine conscience, même à des doses modérées (8 semaines MBSR), modifie la structure cérébrale : augmentation de l'épaisseur corticale dans le CPF ventromédial, l'insula et le cortex cingulaire antérieur ; réduction du volume de l'amygdale corrélant avec la réduction du stress perçu. Ces effets neuronaux suggèrent des mécanismes réels de modification cérébrale, au-delà des effets placebo attendus de toute intervention — bien que distinguer l'effet spécifique de la méditation d'un effet de relaxation générale reste méthodologiquement difficile.</p>
<div class="highlight-box"><p><strong>L'état de flow :</strong> Décrit par Csikszentmihalyi, le flow est un état d'absorption totale dans une activité, caractérisé par une disparition de la conscience de soi et une distorsion du temps. Les corrélats neuraux incluent une désactivation du DMN (conscience de soi réduite) et une synchronisation gamma dans les réseaux de traitement de la tâche — le cerveau mobilisant maximalement ses ressources sur l'activité en cours.</p></div>

<h3>L'hypnose et la suggestion</h3>
<p class="resume-text">L'hypnose est un état de haute suggestibilité et de focalisation attentionnelle. Les sujets très hypnotisables (environ 15 % de la population) présentent, à l'état hypnotique, une réduction de l'activité du cortex cingulaire antérieur dorsal (contrôle inhibiteur), une augmentation de la connectivité fonctionnelle entre le CPF dorsolatéral (contrôle exécutif) et le cortex cingulaire antérieur rostral (traitement émotionnel et corporel). Ces changements neurobiologiques sont réels et distincts des changements produits par la simple relaxation ou le jeu de rôle.</p>
<p class="resume-text">Sous hypnose, des suggestions produisant une analgésie (réduction de la douleur) réduisent objectivement l'activité du cortex cingulaire antérieur et de l'insula lors de stimuli douloureux — sans réduire la perception sensorielle primaire (les sujets savent qu'ils sont stimulés, mais ne souffrent pas). Des suggestions de couleur peuvent modifier l'activité du cortex visuel V4 (traitement de la couleur) comme si la couleur était réellement présente — démontrant que la suggestion peut moduler le traitement sensoriel primaire, pas seulement l'évaluation consciente.</p>
""")

inject('conscience/libre-arbitre', """
<h3>L'expérience de Libet et ses interprétations</h3>
<p class="resume-text">En 1983, Benjamin Libet demanda à des sujets de fléchir librement le poignet quand ils le souhaitaient tout en notant la position d'une aiguille d'horloge au moment où ils prenaient « conscience de leur intention ». Les résultats furent stupéfiants : le <strong>potentiel de préparation</strong> (Bereitschaftspotential, BP) enregistré en EEG précédait le mouvement de ~550 ms — mais la conscience de l'intention ne précédait le mouvement que de ~200 ms. Le cerveau décidait apparemment avant que le sujet n'en soit conscient.</p>
<p class="resume-text">Ces résultats ont été largement surinterprétés comme une « preuve de l'absence de libre arbitre ». Des critiques méthodologiques importantes limitent cette interprétation : le BP peut refléter la préparation d'un mouvement <em>potentiel</em> plutôt qu'une décision irrévocable ; l'horodatage subjectif de l'intention est une reconstruction rétrospective peu fiable ; les mouvements étudiés (flexion du poignet au hasard) sont triviaux et peu représentatifs des décisions significatives. Les études de Schurger et al. suggèrent que le BP reflète la fluctuation stochastique de l'activité neuronale plutôt qu'une « décision inconsciente ».</p>

<h3>Le compatibilisme et les neurosciences</h3>
<p class="resume-text">Le débat philosophique sur le libre arbitre oppose les déterministes (chaque état mental est causalement déterminé par l'état précédent du cerveau, donc il n'y a pas de libre arbitre), les libertariens (il existe une causalité agentielle non réductible) et les compatibilistes (le libre arbitre et le déterminisme sont compatibles, redéfinissant le libre arbitre comme capacité à agir selon ses désirs et valeurs sans contrainte externe). La majorité des neuroscientifiques contemporains adoptent une position compatibiliste.</p>
<p class="resume-text">Saul Smilansky propose le concept de « libre arbitre illusoire » : même si le libre arbitre au sens libertarien n'existe pas, l'illusion subjective d'être l'auteur de ses actions est fonctionnellement nécessaire à la responsabilité morale et à la motivation. Des études ont montré que réduire la croyance au libre arbitre par des textes déterministes augmente la tromperie et l'agression, suggérant que le sentiment d'agentivité a des fonctions sociales indispensables indépendamment de sa vérité métaphysique.</p>
""")

inject('conscience/theories-conscience', """
<h3>La théorie de l'espace de travail global neuronal (GNWT)</h3>
<p class="resume-text">Proposée par Bernard Baars (1988) et formalisée par Stanislas Dehaene et Jean-Pierre Changeux, la GNWT (Global Neuronal Workspace Theory) conçoit la conscience comme une diffusion globale d'information dans un réseau de neurones à long axone du cortex préfrontal, pariétal, temporal et cingulaire. Normalement, les informations sont traitées de manière locale et inconsciente dans des modules spécialisés. Une information devient consciente quand elle atteint un seuil d'activation qui déclenche une « ignition » — diffusion rapide et auto-entretenue dans tout l'espace de travail neuronal, rendant cette information disponible à tous les processus cognitifs.</p>
<p class="resume-text">Cette ignition est mesurable en EEG comme une composante tardive (P3b, ~300 ms) et en IRMf comme une activation fronto-pariétale bilatérale soudaine, tous deux absents lors du traitement inconscient de la même information. Le masquage par l'arrière (backward masking) permet de présenter un stimulus de manière subliminale ou consciente en modulant la durée d'une image masquante : les stimuli conscients déclenchent l'ignition, les subliminaux non — permettant de cartographier exactement les corrélats neuronaux du seuil de conscience.</p>

<h3>La théorie de l'intégration de l'information (IIT)</h3>
<p class="resume-text">Giulio Tononi propose de quantifier la conscience par le paramètre Phi (Φ), mesurant l'intégration d'information d'un système au-delà de la somme de ses parties. Un système avec Φ élevé intègre causalement son activité d'une manière irréductible — aucun découpage en sous-systèmes indépendants ne peut reproduire son comportement. L'IIT fait des prédictions contrintuives : le cervelet, avec 4 fois plus de neurones que le cortex mais organisé en modules parallèles peu intégrés, aurait une Φ bien inférieure au cortex. Une diode photosensible simple aurait plus de conscience qu'un réseau de neurones artificiels de même complexité apparente si elle intègre mieux l'information.</p>
<p class="resume-text">L'IIT a suscité une controverse majeure en 2023 : une étude adversariale collaborative (Adversarial Collaboration) a pré-enregistré des prédictions de la GNWT et de l'IIT, puis les a testées sur des données IRMf et MEG. Ni l'une ni l'autre théorie n'a entièrement survécu à l'épreuve : la GNWT correctement prédit les activations frontales tardives mais n'explique pas les corrélats visuels précoces ; l'IIT prédit une activité visuelle postérieure soutenue qui n'est que partiellement observée. Cette confrontation directe illustre la maturation de la science de la conscience vers une démarche plus empiriquement rigoureuse.</p>
""")

print("Conscience pages done.")
for key in ['conscience/conscience-de-soi','conscience/sommeil-reves','conscience/etats-modifies','conscience/libre-arbitre','conscience/theories-conscience']:
    print(f"  {key}: {len(pages[key]['content'])} chars")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved.")
