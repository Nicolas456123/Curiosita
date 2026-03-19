#!/usr/bin/env python3
"""Enrich psychologie pages + fix 2 remaining anthropologie pages."""
import json

BASE = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/"

def load(disc):
    with open(BASE + disc + '.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def save(disc, data):
    with open(BASE + disc + '.json', 'w', encoding='utf-8', errors='replace') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def inject(pages, key, html):
    page = pages[key]
    content = page['content']
    if '<div class="quiz-nav">' in content:
        content = content.replace('<div class="quiz-nav">', html + '\n<div class="quiz-nav">', 1)
    else:
        idx = content.rfind('</section>')
        content = content[:idx] + html + '\n' + content[idx:]
    page['content'] = content

# ── PSYCHOLOGIE ───────────────────────────────────────────────────────────────
data_psy = load('psychologie')
pages_psy = data_psy['pages']

inject(pages_psy, 'sociale/dynamique-groupes', """
<h3>La pensee de groupe et ses consequences</h3>
<p class="resume-text">Le psychologue Irving Janis a analyse en 1972 plusieurs decisions politiques catastrophiques (invasion de Cuba a la Baie des Cochons, escalade au Vietnam) pour identifier le syndrome de la <strong>pensee de groupe</strong> (groupthink) : un groupe tres coherent converge vers un consensus illusoire, supprimant les dissensions internes et sous-estimant les risques. Les symptomes incluent l'illusion d'invulnerabilite, la rationalisation collective des avertissements, la pression sur les dissidents et l'illusion d'unanimite.</p>
<p class="resume-text">Des structures de deliberation preventives ont ete identifiees : l'avocat du diable (un membre designe pour contester la position du groupe), les groupes nominaux (generation individuelle d'idees avant la discussion) et la technique Delphi (sondages anonymes successifs). Ces methodes preservent la diversite des perspectives tout en permettant leur integration progressive. Les etudes sur la performance des equipes montrent qu'un equilibre entre cohesion sociale et diversite cognitive optimise la qualite des decisions en contexte incertain.</p>
<div class="highlight-box"><p><strong>L'exces de conformisme :</strong> L'experience de Asch (1951) a montre que 75% des participants cedaient au moins une fois a la pression du groupe pour donner une reponse manifestement fausse. Cette conformite n'est pas de la stupidite : elle reflete la pression sociale reelle et la rationalite de suivre le groupe quand l'information individuelle est incertaine - mecanisme adaptatif qui peut devenir dysfonctionnel dans les contextes de decision collective.</p></div>

<h3>Le leadership et ses styles d'influence</h3>
<p class="resume-text">La psychologie sociale du leadership distingue plusieurs styles d'influence. Le leadership <strong>transformationnel</strong> (Bass, 1985) inspire les membres a depasser leurs interets individuels pour une vision collective, stimule la reflexion intellectuelle et s'adapte aux besoins de chacun. Le leadership <strong>transactionnel</strong> repose sur des echanges conditionnels : recompense si performance, sanction si deficit. Meta-analyses sur 87 etudes montrent que le leadership transformationnel predit mieux la satisfaction et l'efficacite des groupes que le transactionnel, particulierement dans les contextes d'incertitude et de changement.</p>
<p class="resume-text">La theorie de l'identite sociale (Tajfel, Turner) reencadre le leadership : un leader efficace est celui qui incarne et protege l'identite collective du groupe, pas necessairement le plus competent individuellement. Des experiences montrent que des individus percoivent comme plus legitimement leaders ceux qui expriment les valeurs et la vision du groupe - mecanisme qui explique la montee de leaders populistes qui parlent "au nom du peuple" meme sans expertise technique, en capitalisant sur l'identite groupale menacee.</p>
""")

inject(pages_psy, 'sociale/communication', """
<h3>La communication non verbale et ses fonctions</h3>
<p class="resume-text">La communication non verbale (CNV) transmet des informations socio-emotionnelles que le langage verbal ne peut exprimer. Paul Ekman a identifie six expressions faciales universelles - joie, tristesse, colere, peur, degout, surprise - presentes dans toutes les cultures humaines etudies, y compris des populations non exposees aux medias occidentaux. Cette universalite suggere un substrat neurobiologique inne de l'expression emotionnelle, herite de l'evolution des primates sociaux.</p>
<p class="resume-text">La <strong>proxemique</strong>, developpee par Edward Hall, etudie les usages culturels de l'espace lors des interactions. Il distingue quatre zones : intime (moins de 45 cm), personnelle (45-120 cm), sociale (1,2-3,6 m) et publique (plus de 3,6 m). Ces distances varient selon les cultures : les Mediterraneens maintiennent des distances interactionnelles plus courtes que les Anglo-Saxons, source frequente de malentendus interculturels. La <strong>synchronie interactionnelle</strong> - alignement des rythmes corporels entre interlocuteurs - est un indicateur puissant de rapport et d'empathie, mesurable par analyse video framm par framm.</p>
<div class="highlight-box"><p><strong>La communication digitale et la perte des indices non verbaux :</strong> Les communications par texte (email, SMS, reseaux sociaux) privent les interlocuteurs des indices paralinguistiques essentiels (ton, expression, geste). Cette reduction du canal de communication augmente les malentendus emotionnels et abaisse les inhibitions sociales (effet de desinhibition en ligne), expliquant l'intensite des conflits sur les reseaux sociaux que les memes individus n'auraient pas eus en face-a-face.</p></div>

<h3>La persuasion : routes centrale et peripherique</h3>
<p class="resume-text">Le modele de traitement bi-route de Petty et Cacioppo (1986) distingue deux voies de persuasion. La <strong>route centrale</strong> implique un traitement elabore des arguments : le destinataire evalue soigneusement la qualite des arguments. Elle est utilisee quand le sujet est implique et motive. La <strong>route peripherique</strong> repose sur des heuristiques superficielles : la credibilite de la source, l'attractivite physique, le consensus social ("3 millions de personnes ne peuvent pas avoir tort"). Elle est activee quand la motivation ou la capacite de traitement est faible.</p>
<p class="resume-text">Ces deux routes ont des consequences differentes pour la durabilite du changement d'attitude. Les attitudes formees via la route centrale sont plus resistantes aux contre-arguments, plus predictives du comportement futur et plus stables dans le temps. Les attitudes formees par route peripherique sont plus vulnerables au changement par des messages contraires. Ces principes informent le marketing politique et commercial : les campagnes efficaces combinent des arguments solides (route centrale) pour les publics engages et des signaux peripheriques (image du candidat, musique evocatrice) pour les indecis peu impliques.</p>
""")

inject(pages_psy, 'sociale/prejudices', """
<h3>La menace du stereotype et ses effets sur la performance</h3>
<p class="resume-text">Claude Steele et Joshua Aronson ont demontre en 1995 la <strong>menace du stereotype</strong> : simplement rappeler a un membre d'un groupe stigmatise son appartenance avant un test suffit a degrader ses performances. Des etudiants noirs de Stanford rappeles de leur appartenance raciale avant un test verbal performaient significativement moins bien que leurs pairs non rappeles - ecart qui disparaissait sans le rappel. Ce phenomene affecte les femmes en mathematiques, les personnes agees en matiere de memoire, et les classes populaires en contexte universitaire.</p>
<p class="resume-text">Les interventions reduisant la menace du stereotype sont identifiees : les affirmations de soi (ecrire sur ses valeurs fondamentales avant le test), la conception de l'intelligence comme maleable (growth mindset de Carol Dweck) et les modeles positifs in-group visibles. Ces interventions, de faible cout et scalables, ont des effets documentes sur les resultats scolaires des eleves defavorises et des femmes dans les filieres STEM. Le simple fait de montrer aux filles des photos de femmes mathematiciennes avant un test de maths ameliore leurs performances de 20% - illustration de l'impact du contexte social sur la cognition individuelle.</p>
<div class="highlight-box"><p><strong>Prejuges implicites vs explicites :</strong> Le Test d'Association Implicite (IAT) de Greenwald et Banaji mesure les associations automatiques inconscientes entre categories (race, genre) et attributs (competence, dangerosite). 70% des Blancs americains montrent un biais implicite pro-Blanc, y compris ceux qui se declarent explicitement non racistes. Ce decalage entre attitudes explicites et implicites souligne que la lutte contre la discrimination ne peut se limiter aux declarations de principe mais doit cibler les structures environnementales qui activent les biais.</p></div>

<h3>La reduction des prejuges : theorie du contact</h3>
<p class="resume-text">Gordon Allport proposa en 1954 la <strong>theorie du contact intergroupe</strong> : le contact entre membres de groupes differents reduit les prejuges, a condition qu'il respecte quatre conditions - egalite de statut entre les groupes en contact, objectifs communs cooperatifs, interdependance positive, et soutien institutionnel des autorites. Des meta-analyses portant sur plus de 500 etudes confirment l'effet positif du contact intergroupe sur les attitudes prejudiciaires, avec des tailles d'effet modestes a substantielles selon la qualite du contact.</p>
<p class="resume-text">Le contact imaginaire - imaginer une interaction positive avec un membre d'un exogroupe - produit des effets similaires, bien que plus faibles, au contact reel. Cette decouverte a des implications pratiques considerables : dans les contextes de segregation residentielle ou scolaire ou le contact reel est difficile, des exercices de perspective-taking guides peuvent reduire les biais. Les jeux de role et les simulations de realite virtuelle (immersion dans la perspective d'une personne d'une autre race ou d'un autre age) montrent des effets prometteurs sur la reduction des biais implicites dans des etudes recentes.</p>
""")

print("Psychologie pages enriched:")
for key in ['sociale/dynamique-groupes', 'sociale/communication', 'sociale/prejudices']:
    print(f"  {key}: {len(pages_psy[key]['content'])} chars")

save('psychologie', data_psy)

# ── ANTHROPOLOGIE (2 remaining short pages) ───────────────────────────────────
data_anthr = load('anthropologie')
pages_anthr = data_anthr['pages']

inject(pages_anthr, 'physique/adaptations', """
<h3>La thermoregulation et les adaptations a la chaleur</h3>
<p class="resume-text">Homo sapiens est exceptionnel parmi les mammiferes par sa capacite de dissipation thermique a l'effort : la quasi-absence de fourrure et le nombre eleve de glandes sudoripares eccrine (2-4 millions, contre quelques centaines chez les chimpanzes) permettent une evaporation cutanee de 1 a 2 litres d'eau par heure en conditions extremes. Cette capacite de thermoregulation par sudation evaporative depasse de loin celle de tous les carnivores cursoriaux concurrents et a probablement ete determinante pour la chasse a l'epuisement dans les savanes africaines chauds.</p>
<p class="resume-text">Les populations vivant depuis des millenaires dans des environnements chauds et humides presentent des adaptations morphologiques documentees : silhouette plus longiligne (regle d'Allen), membres proportionnellement plus longs (rapport masse/surface plus favorable), et pigmentation cutanee plus foncee protegerant contre les rayons UV. Les populations sahariennes (Touaregs, Peuls) ont developpe culturellement des pratiques d'habillement couvrant qui protegent paradoxalement mieux de la chaleur seche que la nudite, en limitant le rayonnement solaire incident tout en permettant la circulation d'air sous les vetements.</p>
<div class="highlight-box"><p><strong>L'ilot de chaleur urbain :</strong> Les villes contemporaines amplifient les risques lies a la chaleur extreme. L'ilot de chaleur urbain (Urban Heat Island, UHI) peut elever la temperature de 5 a 10 degres par rapport aux zones rurales environnantes, du aux surfaces impermeables, a l'absence de vegetation et aux rejets thermiques des climatiseurs. Les populations les plus vulnerables - personnes agees seules, travailleurs exterieurs, sans-abris - sont celles ayant le moins acces aux ressources adaptatives, illustrant que la vulnerabilite biologique et la vulnerabilite sociale sont profondement imbriquees.</p></div>
""")

inject(pages_anthr, 'physique/primatologie', """
<h3>La cognition sociale des primates et ses implications evolutives</h3>
<p class="resume-text">Les primates non humains presentent des capacites cognitives sociales sophistiquees qui eclairent les bases evolutives de la cognition humaine. Les chimpanzes forment des coalitions strategiques, s'engagent dans la politique de coalition (soutien aux allies en conflit pour obtenir du soutien en retour), et manipulent activement les alliances d'autres individus. Frans de Waal a documente comment les males de haut rang maintiennent leur position non par la force brute mais par la gestion habile des coalitions, la reconciliation apres les conflits (via le grooming et le partage de nourriture) et la mediation des conflits entre autres.</p>
<p class="resume-text">La <strong>theorie de l'esprit</strong> - la capacite de se representer les etats mentaux d'autrui (croyances, desirs, intentions) - est presente sous une forme partielle chez les chimpanzes. Ils comprennent ce que connaissent les autres (en cachant de la nourriture hors du champ visuel d'un concurrent) mais semblent limites dans leur capacite a raisonner sur de fausses croyances. Cette capacite incomplete contraste avec celle des enfants de 4 ans qui reussissent systematiquement les tests de fausse croyance. La question reste ouverte de savoir si cette difference est qualitative (theorie de l'esprit pleine versus partielle) ou quantitative (meilleure capacite chez l'humain sur un continuum partage).</p>
""")

print("Anthropologie fix pages:")
for key in ['physique/adaptations', 'physique/primatologie']:
    print(f"  {key}: {len(pages_anthr[key]['content'])} chars")

save('anthropologie', data_anthr)
print("All saved.")
