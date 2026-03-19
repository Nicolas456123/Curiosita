#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/logique.json', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

enrichissements = {}

# --- logique-propositionnelle/tables-verite ---
enrichissements["logique-propositionnelle/tables-verite"] = (
    '<h3>Applications informatiques et SAT-solving</h3>'
    '<p class="resume-text">Les tables de verite sont a la base des circuits logiques : chaque porte electronique (AND, OR, NOT, NAND) realise exactement la fonction boolenne correspondante. Un processeur contient des milliards de telles portes, chacune evaluant une table de verite elementaire des milliards de fois par seconde. La simplification des fonctions booleennes (methode de Karnaugh, algorithme de Quine-McCluskey) reduit le nombre de portes necessaires et donc le cout et la consommation du circuit.</p>'
    '<p class="resume-text">Le probleme <strong>SAT</strong> (satisfiabilite propositionnelle) demande si une formule admet au moins une ligne de table de verite ou elle est vraie. C\'est le premier probleme NP-complet identifie (theoreme de Cook, 1971) : on ne connait pas d\'algorithme polynomial en general. Les solveurs SAT modernes (MiniSAT, Z3) utilisent des heuristiques puissantes (DPLL, CDCL) pour traiter des formules de millions de variables en verification formelle, planification et cryptanalyse.</p>'
    '<p class="resume-text">La <strong>logique de Boole</strong>, formalisee par George Boole en 1854 dans <em>An Investigation of the Laws of Thought</em>, a ete le premier pas vers l\'algebre des tables de verite. Shannon a montre en 1937 que les circuits electroniques implementent cette algebre, etablissant le lien fondateur entre logique formelle et informatique.</p>'
    '<div class="highlight-box"><p>Un solveur SAT moderne peut determiner la satisfiabilite d\'une formule a un million de variables en quelques secondes, la ou la table de verite exhaustive demanderait plus d\'atomes que l\'univers observable.</p></div>'
)

# --- logique-propositionnelle/connecteurs-logiques ---
enrichissements["logique-propositionnelle/connecteurs-logiques"] = (
    '<h3>Connecteurs en informatique et logique moderne</h3>'
    '<p class="resume-text">En programmation, les connecteurs logiques se retrouvent directement dans les operateurs boolens : <code>&&</code> (ET), <code>||</code> (OU), <code>!</code> (NOT) en C, Java ou Python. L\'evaluation en court-circuit (short-circuit evaluation) est une optimisation importante : dans <code>p && q</code>, si p est faux, q n\'est pas evalue car le resultat est deja faux. Cette semantique differe legerement de la conjonction logique pure.</p>'
    '<p class="resume-text">La <strong>logique des tableaux de Shannon</strong> montre que toute fonction booleenne peut s\'exprimer uniquement avec NAND (ou NOR), dite <em>fonctionnellement complete</em>. C\'est pourquoi les circuits integres sont souvent construits quasi exclusivement de portes NAND : une seule porte suffit a fabriquer ET, OU et NON, simplifiant la fabrication. Henry Sheffer avait deja montre en 1913 que le « trait de Sheffer » (NAND) suffit a tout exprimer.</p>'
    '<p class="resume-text">La <strong>logique temporelle</strong> et les <strong>logiques modales</strong> etendent le calcul propositionnel en ajoutant des operateurs de modalite (necessaire, possible) ou de temps (toujours, eventuellement). Ces logiques sont indispensables pour la verification formelle des systemes concurrents et des protocoles de communication : le model checking verifie automatiquement qu\'un programme satisfait une specification temporelle.</p>'
    '<div class="highlight-box"><p>La logique NAND est fonctionnellement complete : tous les circuits numeriques modernes peuvent en principe etre construits uniquement avec des portes NAND, ce qui simplifie la fabrication des processeurs.</p></div>'
)

# --- logique-predicats/quantificateurs ---
enrichissements["logique-predicats/quantificateurs"] = (
    '<h3>Quantificateurs en mathematiques et en informatique</h3>'
    '<p class="resume-text">Les quantificateurs sont omnipresents en mathematiques rigoureuses. La definition de la limite d\'une suite (pour tout epsilon > 0, il existe N tel que...) illustre l\'imbrication de quantificateurs : on alterne universels et existentiels, et l\'ordre compte. « Il existe x tel que pour tout y, P(x,y) » (un x universel) est tres different de « pour tout y, il existe x tel que P(x,y) » (un x qui peut dependre de y).</p>'
    '<p class="resume-text">En informatique theorique, les <strong>classes de complexite</strong> P et NP se definissent avec des quantificateurs : un probleme est dans P s\'il existe un algorithme polynomial qui le resout ; dans NP s\'il existe un certificat polynomial verifiable. La hierarchie polynomiale etend cela avec des alternances de quantificateurs, comme en logique du second ordre.</p>'
    '<p class="resume-text">La <strong>logique du second ordre</strong> permet de quantifier non seulement sur des individus (premier ordre) mais aussi sur des predicats et des fonctions. Elle est bien plus expressive mais aussi bien moins maniable : Godel a montre que la logique du second ordre standard n\'admet pas de systeme de preuve complet, contrairement a la logique du premier ordre (theoreme de completude de Godel).</p>'
    '<div class="highlight-box"><p>L\'ordre des quantificateurs est crucial : « pour tout x, il existe y tel que x < y » (vrai dans les entiers) est tres different de « il existe y tel que pour tout x, x < y » (faux dans les entiers).</p></div>'
)

# --- logique-propositionnelle/tautologies ---
enrichissements["logique-propositionnelle/tautologies"] = (
    '<h3>Tautologies et demonstration automatique</h3>'
    '<p class="resume-text">La demonstration automatique de theoremes (theorem proving) cherche a etablir mecaniquement si une formule est une tautologie. La methode de resolution (Robinson, 1965) transforme la negation de la formule en clause normale conjonctive et applique une regle d\'inference unique (la resolution) pour deriver une contradiction. Si la contradiction est atteinte, la formule originale est une tautologie.</p>'
    '<p class="resume-text">Les <strong>assistants de preuve</strong> (Coq, Isabelle, Lean) permettent de verifier des preuves mathematiques complexes de facon completement formelle. L\'assistant Coq a ete utilise pour verifier la preuve du theoreme des quatre couleurs (2005) et le theoreme de Feit-Thompson (2012), deux resultats dont les preuves humaines etaient trop longues et complexes pour etre verifiees sans outil formel.</p>'
    '<p class="resume-text">La distinction entre <strong>validite syntaxique</strong> (derivabilite dans un systeme de preuve, notee ⊢) et <strong>validite semantique</strong> (verite dans tous les modeles, notee ⊨) est fondamentale. Le theoreme de completude de la logique propositionnelle affirme que ces deux notions coincident : une formule est valide (tautologie) si et seulement si elle est derivable dans le calcul propositionnel standard. Cette equivalence n\'est pas triviale et sa demonstration est un resultat majeur.</p>'
    '<div class="highlight-box"><p>Le theoreme de completude affirme que tout ce qui est vrai peut etre prouve, et tout ce qui est prouve est vrai : validite semantique et derivabilite syntaxique coincident en logique propositionnelle.</p></div>'
)

# --- logique-propositionnelle/formes-normales ---
enrichissements["logique-propositionnelle/formes-normales"] = (
    '<h3>Formes normales et complexite algorithmique</h3>'
    '<p class="resume-text">La conversion en <strong>forme normale conjonctive</strong> (FNC) est la base de nombreux algorithmes SAT. Une FNC est une conjonction de clauses, chaque clause etant une disjonction de litteraux. Toute formule propositionnelle peut etre convertie en FNC equivalente en temps polynomial. Cependant, cette conversion peut provoquer une explosion exponentielle du nombre de clauses (probleme de la taille de la FNC).</p>'
    '<p class="resume-text">Les <strong>BDD</strong> (Binary Decision Diagrams, diagrammes de decision binaires) offrent une representation canonique compacte des fonctions booleennes. Chaque noeud interne teste une variable ; les feuilles valent 0 ou 1. Les BDD permettent le test d\'equivalence en temps polynomial et sont utilises en verification formelle de circuits. Un BDD peut etre exponentiellement plus compact qu\'une table de verite ou une FNC.</p>'
    '<p class="resume-text">La <strong>completude fonctionnelle</strong> etudie quels ensembles de connecteurs permettent d\'exprimer toutes les fonctions booleennes. L\'ensemble {¬, ∧} est complet (on definit p ∨ q via De Morgan). L\'ensemble {→, ⊥} (implication + faussete) est aussi complet. En revanche, {∧, ∨} n\'est pas complet car il ne peut exprimer la negation : c\'est un exemple de base d\'independance des connecteurs.</p>'
    '<div class="highlight-box"><p>Les BDD (Binary Decision Diagrams) peuvent representer une fonction booleenne de 1 000 variables en quelques kilooctets, la ou une table de verite exhaustive demanderait plus d\'atoms que dans l\'univers.</p></div>'
)

# --- logique-predicats/variables-termes ---
enrichissements["logique-predicats/variables-termes"] = (
    '<h3>Logique du premier ordre et modeles</h3>'
    '<p class="resume-text">La <strong>logique du premier ordre</strong> (ou calcul des predicats) est le langage standard des mathematiques modernes. Elle permet d\'exprimer des assertions sur des individus d\'un domaine, d\'etablir des relations entre eux, et d\'utiliser des quantificateurs (pour tout, il existe). La theorie des ensembles (ZFC), la theorie des groupes, la geometrie euclidienne sont toutes formulables en logique du premier ordre.</p>'
    '<p class="resume-text">Un <strong>terme</strong> en logique du premier ordre est soit une variable, soit une constante, soit une fonction appliquee a des termes. Un <strong>atome</strong> est un predicat applique a des termes. Les formules atomiques representent les proprietes elementaires et les relations entre individus. La distinction entre termes (denotant des objets) et formules (exprimant des proprietes) est fondamentale.</p>'
    '<p class="resume-text">La <strong>substitution</strong> est l\'operation centrale du calcul des predicats : remplacer une variable par un terme. La notion de <em>variable libre</em> (non captee par un quantificateur) et <em>variable liee</em> (sous la portee d\'un quantificateur) est cruciale pour eviter les confusions semantiques. Le renommage des variables liees (alpha-conversion) permet d\'eviter les captures accidentelles lors des substitutions.</p>'
    '<div class="highlight-box"><p>La logique du premier ordre est le langage dans lequel les mathematiciens demontrent leurs theoremes depuis Peano et Frege : suffisamment expressif pour les mathematiques, suffisamment structure pour etre mecanisable.</p></div>'
)

# --- preuves-formelles/recurrence ---
enrichissements["preuves-formelles/recurrence"] = (
    '<h3>Induction bien fondee et preuves structurelles</h3>'
    '<p class="resume-text">La <strong>recurrence bien fondee</strong> generalise la recurrence sur les entiers a tout ensemble muni d\'une relation bien fondee (toute descente est finie). On peut faire de la recurrence sur les arbres, les mots, les formules logiques, les termes d\'un langage de programmation. Ce principe est au coeur des preuves de correction des compilateurs, des interpretes et des algorithmes recursifs.</p>'
    '<p class="resume-text">La <strong>recurrence forte</strong> (ou course hypothese) suppose non seulement que P(n) est vrai, mais que P(k) est vrai pour tout k < n. Elle est utile quand chaque etape ne depend pas seulement du predecesseur immediat. La preuve de l\'existence de la decomposition en facteurs premiers utilise la recurrence forte : si n n\'est pas premier, il se decompose en facteurs strictement plus petits, auxquels on applique l\'hypothese.</p>'
    '<p class="resume-text">Les <strong>preuves par induction structurelle</strong> sur les formules logiques sont omnipresentes en logique et en informatique theorique. Pour demontrer que toute formule possede une propriete P, on prouve que les formules atomiques ont P, et que si les sous-formules ont P, la formule composee a aussi P. Ce schema prouve par exemple que toute formule bien formee a un nombre egal de parentheses ouvrantes et fermantes.</p>'
    '<div class="highlight-box"><p>La recurrence structurelle permet de prouver des proprietes sur des objets infinis (l\'ensemble de toutes les formules logiques) en n\'examinant qu\'un nombre fini de cas de base et d\'etapes inductives.</p></div>'
)

# --- preuves-formelles/absurde ---
enrichissements["preuves-formelles/absurde"] = (
    '<h3>Intuitionisme et la controverse de la preuve par l\'absurde</h3>'
    '<p class="resume-text">La preuve par l\'absurde repose sur le <strong>principe du tiers exclu</strong> (p ∨ ¬p) et la loi de non-contradiction. Elle suppose que tout est vrai ou faux, et que deduire une contradiction d\'une hypothese suffit a etablir la negation de cette hypothese. Ce principe est accepte en logique classique mais conteste par les <strong>intuitionistes</strong> (Brouwer, Heyting, Bishop) pour qui une preuve d\'existence doit etre constructive.</p>'
    '<p class="resume-text">En mathematiques <strong>constructives</strong>, prouver «¬¬P» ne suffit pas a etablir P : il faut fournir un objet concret. L\'existence d\'un nombre irrationnel eleve a une puissance irrationnelle donnant un rationnel illustre la difference : la preuve classique (soit √2^√2 est rationnel et on a fini, soit il est irrationnel et (√2^√2)^√2 = 2 est rationnel) ne specifie pas le cas reel. Une preuve constructive devrait identifier lequel des deux nombres est rationnel.</p>'
    '<p class="resume-text">La <strong>correspondance de Curry-Howard</strong> etablit un isomorphisme profond entre preuves logiques et programmes informatiques : les preuves constructives correspondent a des programmes, et les types des langages fonctionnels correspondent a des formules logiques. Cette correspondance transforme la demonstration des mathematiques intuitionnistes en programmation fonctionnelle. Le langage Coq et le theorie des types de Martin-Lof reposent sur ce fondement.</p>'
    '<div class="highlight-box"><p>La correspondance de Curry-Howard : une preuve du theoreme A → B est exactement un programme qui transforme une preuve de A en une preuve de B. Prouver, c\'est programmer.</p></div>'
)

# --- preuves-formelles/deduction-naturelle ---
enrichissements["preuves-formelles/deduction-naturelle"] = (
    '<h3>Sequents de Gentzen et theorie de la preuve</h3>'
    '<p class="resume-text">Gerhard Gentzen a invente en 1935 deux formalismes equivalents : la deduction naturelle et le <strong>calcul des sequents</strong>. Un sequent de la forme Γ ⊢ Δ signifie « de l\'ensemble d\'hypotheses Γ, on peut deriver l\'une des conclusions de Δ ». Ce formalisme symetrique permet d\'enoncer et de demonstrer elegamment des metatheoremes importants comme l\'<strong>eliminabilite de la coupure</strong> (cut elimination).</p>'
    '<p class="resume-text">L\'<strong>elimination de la coupure</strong> (theoreme de Gentzen, 1935) etablit que toute preuve peut etre normalisee en eliminent les detours : si on utilise un lemme intermediaire pour prouver une conclusion, on peut en principe prouver directement cette conclusion sans ce lemme. Ce resultat a des consequences profondes en coherence logique et en complexite de la preuve.</p>'
    '<p class="resume-text">La <strong>normalisation des preuves</strong> en deduction naturelle correspond, via la correspondance de Curry-Howard, a l\'evaluation des programmes en lambda-calcul. Une preuve non normalisee correspond a un programme non encore execute ; sa normalisation correspond a son execution jusqu\'au resultat final. Ce lien etablit que la calculabilite et la demonstrabilite sont deux faces d\'une meme realite mathematique.</p>'
    '<div class="highlight-box"><p>L\'elimination de la coupure de Gentzen est l\'un des resultats les plus profonds de la theorie de la preuve : elle montre que les detours dans les demonstrations sont toujours eliminables, garantissant la coherence de la logique.</p></div>'
)

# --- logique-predicats/modeles ---
enrichissements["logique-predicats/modeles"] = (
    '<h3>Theorie des modeles et applications</h3>'
    '<p class="resume-text">La <strong>theorie des modeles</strong> etudie les relations entre les theories logiques (ensembles d\'enonces) et leurs modeles (structures satisfaisant ces enonces). Le <strong>theoreme de Lowenheim-Skolem</strong> est l\'un des resultats les plus surprenants : si une theorie du premier ordre a un modele infini, elle a des modeles de toutes les cardinalites infinies. Cela implique que les axiomes standard de l\'arithmetique ont des modeles « non standard » avec des entiers infinis !</p>'
    '<p class="resume-text">Le <strong>theoreme de compacite</strong> affirme qu\'un ensemble infini de formules est satisfaisable si et seulement si chaque sous-ensemble fini l\'est. Ce resultat contre-intuitif a des applications importantes : il permet de construire des modeles non standard et de prouver l\'existence de certains objets mathematiques par un argument de compacite purement logique.</p>'
    '<p class="resume-text">En informatique, la theorie des modeles a donne naissance a la <strong>verification formelle par model checking</strong> : on verifie automatiquement si un modele fini (le programme ou le circuit) satisfait une formule logique (la specification). Les outils comme SPIN, NuSMV et UPPAAL permettent de verifier des protocoles de communication, des circuits integres et des systemes temps reel avec des garanties mathematiques absolues.</p>'
    '<div class="highlight-box"><p>Le theoreme de Lowenheim-Skolem implique que l\'on ne peut pas caracteriser les entiers naturels de facon categorique en logique du premier ordre : toute theorie du premier ordre des entiers a des modeles « non standards » avec des entiers infinis.</p></div>'
)

# --- paradoxes/russell ---
enrichissements["paradoxes/russell"] = (
    '<h3>Resolution du paradoxe et theorie des ensembles moderne</h3>'
    '<p class="resume-text">Le paradoxe de Russell (1902) a provoque une crise profonde dans les fondements des mathematiques. La theorie naive des ensembles de Cantor et Frege, qui autorisait tout ensemble definissable par comprehension ({x | P(x)}), etait inconsistante. Plusieurs voies de resolution ont ete proposees : la theorie des <strong>types</strong> de Russell et Whitehead (<em>Principia Mathematica</em>, 1910-1913) hierarchise les ensembles pour eviter l\'autoreference.</p>'
    '<p class="resume-text">La solution aujourd\'hui dominante est la theorie des ensembles <strong>ZFC</strong> (Zermelo-Fraenkel avec axiome du choix). L\'axiome de comprehension est remplace par l\'axiome de separation : on ne peut former {x ∈ A | P(x)} qu\'a partir d\'un ensemble A deja donne, jamais de l\'univers entier. Cette restriction elegante evite le paradoxe de Russell tout en preservant la quasi-totalite des mathematiques utiles.</p>'
    '<p class="resume-text">La <strong>logique paraconsistante</strong> offre une troisieme voie : plutot que d\'eviter les contradictions, elle modifie la logique pour que des contradictions locales ne contaminent pas tout le systeme (principe d\'explosion : ex contradictione quodlibet). Ces logiques trouvent des applications en raisonnement sous information incomplete ou contradictoire, en intelligence artificielle et en base de donnees.</p>'
    '<div class="highlight-box"><p>La theorie ZFC, adoptee apres la crise due au paradoxe de Russell, est aujourd\'hui le fondement standard des mathematiques : pres d\'un siecle de pratique sans contradiction connue est une garantie empirique de sa coherence.</p></div>'
)

# --- godel/church ---
enrichissements["godel/church"] = (
    '<h3>Lambda-calcul et fondements de la programmation</h3>'
    '<p class="resume-text">Le <strong>lambda-calcul</strong> d\'Alonzo Church (1936) est un systeme formel de recriture de fonctions. Il capture l\'idee de calculabilite via les notions d\'abstraction (λx.E, qui definit une fonction) et d\'application (E F, qui applique E a F). Church a montre que toute fonction calculable pouvait etre exprimee en lambda-calcul, posant ainsi les bases theoriques des langages fonctionnels.</p>'
    '<p class="resume-text">La <strong>these de Church-Turing</strong> affirme que les modeles de calcul « naturels » — machine de Turing, lambda-calcul, fonctions recursives generales, machines RAM — sont tous equivalents en expressivite. Aucune machine physique realiste ne peut calculer plus que ces modeles. Cette these n\'est pas demontrable (c\'est une affirmation sur les dispositifs physiques), mais elle est universellement acceptee.</p>'
    '<p class="resume-text">Le lambda-calcul pur est la base theorique des langages fonctionnels (Haskell, ML, Lisp). Les <strong>types</strong> du lambda-calcul typee correspondent, via la correspondance de Curry-Howard, aux propositions logiques. Haskell est en ce sens un assistant de preuve : ecrire un programme de type A → B equivaut a demontrer la proposition A → B. Le systeme de types de Haskell peut prouver automatiquement des lemmes simples et detecter des erreurs de logique dans les programmes.</p>'
    '<div class="highlight-box"><p>Un programme Haskell qui compile sans erreur de type est une preuve formelle : les types encodent les specifications logiques, et le compilateur verifie qu\'elles sont respectees.</p></div>'
)

# --- logique-predicats/herbrand ---
enrichissements["logique-predicats/herbrand"] = (
    '<h3>Resolution et demonstration automatique du premier ordre</h3>'
    '<p class="resume-text">La <strong>methode de resolution</strong> de Robinson (1965) etend le principe de resolution propositionnelle a la logique du premier ordre. Elle utilise l\'<strong>unification</strong> pour trouver des substitutions rendant des litteraux complementaires. L\'algorithme d\'unification de Robinson (O(n) apres optimisations) est au coeur de Prolog, du model checking et des prouveurs automatiques de theoremes.</p>'
    '<p class="resume-text"><strong>Prolog</strong> (Programming in Logic, 1972, Colmerauer et Roussel) est un langage de programmation base directement sur la resolution et l\'unification. Un programme Prolog est un ensemble de clauses de Horn (au plus un litterral positif par clause) ; l\'execution d\'une requete est une recherche de refutation. Prolog a ete tres utilise en intelligence artificielle symbolique, en traitement automatique du langage naturel et en verification de protocoles.</p>'
    '<p class="resume-text">Les <strong>prouveurs de theoremes du premier ordre</strong> modernes (E, Vampire, SPASS) participent aux competitions CASC (CADE ATP System Competition). Ils ont permis de decouvrir des preuves de resultats ouverts, comme la resolution complete du probleme de Robbins en algebre (1996, prouver qu\'une algebre de Robbins est une algebre de Boole). La recherche de preuves automatisees est un domaine actif, etroitement lie a l\'IA.</p>'
    '<div class="highlight-box"><p>Prolog illustre que la logique peut etre un langage de programmation : on declare les faits et les regles, et le moteur de resolution trouve les reponses par deduction automatique.</p></div>'
)

# --- preuves-formelles/axiomatique ---
enrichissements["preuves-formelles/axiomatique"] = (
    '<h3>Coherence, independance et systemes axiomatiques celebres</h3>'
    '<p class="resume-text">Un systeme axiomatique est <strong>coherent</strong> (ou consistent) si aucune contradiction ne peut etre derivee. Il est <strong>complet</strong> si toute formule vraie dans ses modeles peut etre demontree. Ces deux proprietes sont idealement souhaitees mais Godel a montre leur incompatibilite pour les theories suffisamment riches. Un systeme est <strong>independant</strong> si aucun de ses axiomes n\'est derivable des autres.</p>'
    '<p class="resume-text">L\'<strong>axiome du choix</strong> (AC) en theorie des ensembles a une longue histoire de controverses. Il affirme qu\'a partir de tout ensemble de parties non vides, on peut choisir un representant dans chacune. Godel (1938) puis Cohen (1963) ont montre que l\'axiome du choix est independant des axiomes ZF : on peut construire un modele ou AC est vrai et un autre ou il est faux, sans contradiction dans les deux cas. L\'axiome du choix est aujourd\'hui generalement accepte car de nombreux theoremes importantes lui sont equivalents (theoreme de Zorn, theoreme de Tychonoff, etc.).</p>'
    '<p class="resume-text">Les <strong>hypotheses du continu</strong> (Cantor, 1878) demandent s\'il existe un cardinal strictement entre celui des entiers et celui du continu. Cohen a montre en 1963 (avec l\'outil du forcing qu\'il a invente) que cette hypothese est independante de ZFC : ni elle ni sa negation ne peuvent etre prouvees ou refutees depuis ZFC. C\'est l\'un des resultats les plus profonds du XXe siecle en logique mathematique.</p>'
    '<div class="highlight-box"><p>L\'independance de l\'hypothese du continu vis-a-vis de ZFC (Cohen, 1963) est l\'equivalent pour les mathematiques des fondements de ce que Godel a fait pour l\'arithmetique : montrer les limites irreductibles du systeme axiomatique standard.</p></div>'
)

# --- paradoxes/newcomb ---
enrichissements["paradoxes/newcomb"] = (
    '<h3>Decision, causalite et logique du paradoxe</h3>'
    '<p class="resume-text">Le paradoxe de Newcomb souleve un conflit fondamental entre deux principes de decision rationnelle. La <strong>theorie causale de la decision</strong> (CDT) recommande d\'agir sur ce qui peut encore etre cause causalement : comme votre choix ne peut pas causalement affecter le contenu deja place des boites, vous devriez prendre les deux. La <strong>theorie evidencielle de la decision</strong> (EDT) recommande l\'action dont la probabilite conditionnelle du meilleur resultat est la plus elevee : comme les preneurs-d\'une-boite trouvent presque toujours le million, vous devriez n\'en prendre qu\'une.</p>'
    '<p class="resume-text">Le paradoxe reflete une tension profonde sur la nature de la rationalite : doit-on maximiser l\'esperance causale ou l\'esperance evidencielle ? Les philosophes sont partages : Nozick, qui a formule le paradoxe en 1969, penchait pour les deux boites (CDT). Des partisans de l\'EDT font valoir que si les agents EDT obtiennent systematiquement de meilleurs resultats, la rationalite ne devrait-elle pas etre definie par les resultats ?</p>'
    '<p class="resume-text">Le paradoxe de Newcomb est profondement lie a la philosophie du <strong>libre arbitre</strong> et de la predetermination. Si un etre peut predicter parfaitement vos choix, votre decision est-elle vraiment libre ? La question touche aux fondements de la philosophie de l\'action, de la causalite et de la theorie des jeux. Des variantes incluent le probleme du prisonnier iteratif et les situations avec agents correlated.</p>'
    '<div class="highlight-box"><p>Apres plus de cinquante ans de debats, les philosophes restent profondement divises sur la reponse au paradoxe de Newcomb : chaque camp peut invoquer des arguments de rationalite apparemment decisifs.</p></div>'
)

# Inseerer chaque enrichissement avant </section> fermant id="contenu"
for key, extra_html in enrichissements.items():
    page = pages[key]
    content = page['content']

    contenu_start = content.find('id="contenu"')
    if contenu_start == -1:
        print(f"SKIP {key}: pas de section contenu")
        continue

    quiz_start = content.find('id="quiz"', contenu_start)
    if quiz_start == -1:
        insert_pos = content.rfind('</section>')
    else:
        insert_pos = content.rfind('</section>', contenu_start, quiz_start)

    if insert_pos == -1:
        print(f"SKIP {key}: insert pos not found")
        continue

    new_content = content[:insert_pos] + extra_html + content[insert_pos:]
    pages[key]['content'] = new_content
    print(f"OK {key}: +{len(extra_html)} chars -> total {len(new_content)}")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/logique.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("\nFichier sauvegarde avec succes.")

# Verification
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/logique.json', encoding='utf-8') as f:
    data2 = json.load(f)
courses2 = [(k, len(v.get('content', ''))) for k, v in data2['pages'].items() if v.get('type') == 'course']
courses2.sort(key=lambda x: x[1])
print(f"\nMoyenne apres enrichissement: {sum(l for _,l in courses2)//len(courses2)} chars")
print(f"Min: {courses2[0][1]} ({courses2[0][0]})")
print(f"Max: {courses2[-1][1]} ({courses2[-1][0]})")
