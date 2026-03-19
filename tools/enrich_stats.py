import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/statistiques.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# =====================================================================
# descriptives/distributions  (10404 chars -> target ~15000+)
# =====================================================================
old_distrib = """        <h3>Forme de la distribution</h3>
        <p>L'allure du tableau de frequences revele la forme de la distribution :</p>
        <ul>
          <li><strong>Symetrique :</strong> les frequences augmentent puis diminuent de façon symetrique autour du mode</li>
          <li><strong>Asymetrique a droite :</strong> queue longue vers les grandes valeurs</li>
          <li><strong>Asymetrique a gauche :</strong> queue longue vers les petites valeurs</li>
          <li><strong>Uniforme :</strong> frequences a peu pres constantes</li>
          <li><strong>Bimodale :</strong> deux pics distincts, suggerant deux sous-populations</li>
        </ul>
      </div>"""

new_distrib = """        <h3>Forme de la distribution</h3>
        <p>L'allure du tableau de frequences revele la forme de la distribution :</p>
        <ul>
          <li><strong>Symetrique :</strong> les frequences augmentent puis diminuent de façon symetrique autour du mode</li>
          <li><strong>Asymetrique a droite :</strong> queue longue vers les grandes valeurs</li>
          <li><strong>Asymetrique a gauche :</strong> queue longue vers les petites valeurs</li>
          <li><strong>Uniforme :</strong> frequences a peu pres constantes</li>
          <li><strong>Bimodale :</strong> deux pics distincts, suggerant deux sous-populations</li>
        </ul>

        <h3>Statistiques calculees sur donnees groupees</h3>
        <p>Quand les donnees sont deja regroupees en tableau de frequences, on ne connait plus les valeurs individuelles mais seulement les classes et leurs effectifs. On peut neanmoins estimer les statistiques a l'aide des centres de classe.</p>
        <p><strong>Moyenne :</strong> x&#x0305; &asymp; &Sigma;(c&amp;#x1D62; &times; n&amp;#x1D62;) / N, ou c&amp;#x1D62; est le centre de la classe i et n&amp;#x1D62; son effectif. En pratique, on pondere chaque centre de classe par son effectif relatif.</p>
        <p><strong>Mediane par interpolation :</strong> on identifie la classe mediane (celle qui fait franchir le seuil de 50 % des effectifs cumules), puis on interpole lineairement. Si b_inf est la borne inferieure de la classe mediane, F_{i-1} l'effectif cumule avant elle, n_i son effectif et a_i son amplitude : Md = b_inf + [(N/2 - F_{i-1}) / n_i] &times; a_i.</p>
        <div class="highlight-box">
          <p><strong>Approximation :</strong> les estimations sur donnees groupees sont moins precises que les calculs sur donnees brutes. Plus l'amplitude des classes est grande, plus l'approximation est grossiere. Quand les donnees brutes sont disponibles, il faut toujours les utiliser directement.</p>
        </div>

        <h3>Percentiles et quantiles</h3>
        <p>Les percentiles generalisent les quartiles a n'importe quel rang. Le <strong>p-ieme percentile</strong> est la valeur en dessous de laquelle se trouvent p % des observations.</p>
        <ul>
          <li><strong>Deciles :</strong> decoupent les donnees en 10 parts egales (D&#x2081; = 10e percentile, ..., D&#x2089; = 90e percentile)</li>
          <li><strong>Quartiles :</strong> decoupent en 4 parts egales (Q&#x2081; = 25e, Q&#x2082; = 50e, Q&#x2083; = 75e percentile)</li>
          <li><strong>Centiles :</strong> decoupent en 100 parts egales — le 90e centile des scores d'un test signifie que 90 % des candidats ont fait moins bien</li>
        </ul>
        <p>Lecture graphique sur l'ogive : pour trouver le p-ieme percentile, on repere F = p/100 sur l'axe des ordonnees et on lit la valeur correspondante sur l'axe des abscisses par interpolation lineaire.</p>

        <h3>Histogramme et densite de probabilite</h3>
        <p>Quand le nombre d'observations tend vers l'infini et l'amplitude des classes vers zero, l'histogramme (normalise par l'effectif total) converge vers la <strong>courbe de densite</strong> f(x) de la loi continue sous-jacente. La surface totale sous la courbe vaut 1. L'aire entre deux bornes a et b represente P(a &le; X &le; b).</p>
        <p>Cette vision permet de relier les distributions de frequences empiriques aux lois theoriques de probabilite. Superposer une courbe theorique (loi normale, exponentielle...) a l'histogramme permet de tester visuellement si les donnees suivent cette loi. Le test formel correspondant est le test du Khi-deux d'adequation.</p>

        <h3>Tableau de contingence (distribution bivariee)</h3>
        <p>Quand on croise deux variables qualitatives ou discretes, on construit un <strong>tableau de contingence</strong> (ou tableau croise). Les lignes representent les modalites d'une variable, les colonnes celles de l'autre. Chaque cellule contient l'effectif conjoint.</p>
        <p><strong>Exemple :</strong> croiser le sexe (H/F) avec la preference (A/B/C) dans un groupe de 100 personnes. On obtient un tableau 2&times;3 dont les marges (totaux de lignes et de colonnes) indiquent les effectifs de chaque variable prise separement : ce sont les distributions marginales.</p>
        <div class="highlight-box">
          <p><strong>Frequences conditionnelles :</strong> diviser chaque cellule par le total de sa ligne donne la distribution conditionnelle de la variable-colonne sachant la modalite de la variable-ligne. Par exemple, quelle est la repartition des preferences A/B/C parmi les hommes seulement ? Cette analyse permet de reperer des associations entre variables.</p>
        </div>

        <h3>Representations graphiques associees</h3>
        <p>Chaque type de tableau de frequences a son graphique associe :</p>
        <ul>
          <li><strong>Histogramme :</strong> pour les donnees continues groupees en classes ; les barres sont adjacentes</li>
          <li><strong>Diagramme en batons :</strong> pour les donnees discretes ; les batons sont espaces car les valeurs sont distinctes</li>
          <li><strong>Ogive :</strong> courbe des frequences cumulees, en escalier pour le discret, lisse pour le continu</li>
          <li><strong>Diagramme de Pareto :</strong> barres triees par frequence decroissante, avec courbe cumulee superposee — aide a identifier les categories dominantes (principe des 80/20)</li>
        </ul>

        <h3>Applications pratiques</h3>
        <p>Les distributions de frequences sont le point de depart de toute analyse statistique descriptive. Dans les grands domaines d'application :</p>
        <ul>
          <li>En <strong>controle qualite</strong>, elles revelent si les mesures d'un procede industriel se concentrent dans les tolerances specifiees ou si des defauts sont systematiques</li>
          <li>En <strong>epidemiologie</strong>, elles decrivent la distribution des ages des malades, la gravite des cas, ou la repartition geographique d'une maladie</li>
          <li>En <strong>finance</strong>, les distributions des rendements permettent d'identifier la frequence des pertes extremes et de calibrer les modeles de risque (Value at Risk)</li>
          <li>En <strong>sciences sociales</strong>, elles resument les reponses a un questionnaire et permettent des comparaisons entre groupes demographiques</li>
        </ul>
        <p>La maitrise des distributions de frequences est fondamentale : c'est sur elles que reposent le test du Khi-deux, l'analyse de la variance, et tous les modeles qui supposent une distribution particuliere des donnees.</p>
      </div>"""

pages['descriptives/distributions']['content'] = pages['descriptives/distributions']['content'].replace(old_distrib, new_distrib)

# =====================================================================
# descriptives/dispersion  (10691 chars -> target ~15000+)
# =====================================================================
old_disp = """        <h3>Choix de la mesure</h3>
        <ul>
          <li><strong>Ecart-type :</strong> le plus courant, adapte aux distributions symetriques sans outliers</li>
          <li><strong>IQR :</strong> prefere quand il y a des outliers ou une asymetrie forte</li>
          <li><strong>CV :</strong> ideal pour comparer des variables d'echelles differentes</li>
          <li><strong>Etendue :</strong> rapide mais peu informative, a eviter seule</li>
        </ul>
      </div>"""

new_disp = """        <h3>Choix de la mesure</h3>
        <ul>
          <li><strong>Ecart-type :</strong> le plus courant, adapte aux distributions symetriques sans outliers</li>
          <li><strong>IQR :</strong> prefere quand il y a des outliers ou une asymetrie forte</li>
          <li><strong>CV :</strong> ideal pour comparer des variables d'echelles differentes</li>
          <li><strong>Etendue :</strong> rapide mais peu informative, a eviter seule</li>
        </ul>

        <h3>Asymetrie (skewness)</h3>
        <p>L'asymetrie mesure dans quelle mesure une distribution s'ecarte de la symetrie. Le coefficient d'asymetrie standardise (moment d'ordre 3 centre reduit) est :</p>
        <div class="highlight-box">
          <p><strong>g&#x2081; = [&Sigma;(x&#x1D62; - x&#x0305;)&sup3; / n] / &sigma;&sup3;</strong></p>
          <p>g&#x2081; = 0 : distribution symetrique. g&#x2081; &gt; 0 : asymetrie positive (queue a droite). g&#x2081; &lt; 0 : asymetrie negative (queue a gauche).</p>
        </div>
        <p><strong>Interpretation pratique :</strong> si la moyenne est superieure a la mediane, la distribution est asymetrique a droite (quelques grandes valeurs tirent la moyenne vers le haut). C'est le cas typique des distributions de salaires, de patrimoine ou de durees de vie des equipements. Si la moyenne est inferieure a la mediane, l'asymetrie est negative (gauche).</p>

        <h3>Aplatissement (kurtosis)</h3>
        <p>L'aplatissement mesure la concentration des valeurs au centre et dans les queues de la distribution. Le coefficient d'aplatissement est le moment centre reduit d'ordre 4 moins 3 (pour centrer sur la loi normale) :</p>
        <div class="highlight-box">
          <p><strong>g&#x2082; = [&Sigma;(x&#x1D62; - x&#x0305;)&sup4; / n] / &sigma;&sup4; - 3</strong></p>
          <p>g&#x2082; = 0 : distribution normale (mesokurtique). g&#x2082; &gt; 0 : distribution leptokurtique (pic eleve, queues epaisses). g&#x2082; &lt; 0 : distribution platykurtique (pic aplati, queues fines).</p>
        </div>
        <p>Un kurtosis eleve signifie que des valeurs extremes sont plus frequentes que dans la loi normale. C'est fondamental en finance : les rendements des actifs ont des queues epaisses (<em>fat tails</em>), ce qui signifie que les crises sont plus frequentes que ce qu'un modele gaussien predit. C'est pourquoi les modeles de gestion du risque utilisant uniquement la variance sous-estiment systematiquement le risque reel.</p>

        <h3>Les moments statistiques</h3>
        <p>Les statistiques descriptives peuvent toutes s'exprimer comme des <strong>moments</strong> de la distribution. Le k-ieme moment centre est &mu;&#x2096; = &Sigma;(x&#x1D62; - x&#x0305;)&#x1D4F; / n.</p>
        <ul>
          <li><strong>&mu;&#x2081; = 0 :</strong> la moyenne est le centre des ecarts (propriete fondamentale)</li>
          <li><strong>&mu;&#x2082; = &sigma;&#xB2; :</strong> la variance (dispersion)</li>
          <li><strong>&mu;&#x2083;/&sigma;&#xB3; = g&#x2081; :</strong> l'asymetrie</li>
          <li><strong>&mu;&#x2084;/&sigma;&#x2074; - 3 = g&#x2082; :</strong> l'aplatissement (kurtosis exces)</li>
        </ul>
        <p>Ces quatre quantites — moyenne, ecart-type, asymetrie, kurtosis — forment un « resume en quatre chiffres » qui caracterise une distribution unidimensionnelle. La loi normale est entierement determinee par ses deux premiers moments (&mu;, &sigma;&#xB2;), d'ou son role central en statistique.</p>

        <h3>Variabilite et precision en statistique inferentielle</h3>
        <p>La notion de dispersion est au coeur de la statistique inferentielle. L'<strong>ecart-type de la moyenne</strong> (ou erreur standard) mesure la precision avec laquelle la moyenne echantillonnale estime la moyenne de la population :</p>
        <div class="highlight-box">
          <p><strong>SE = s / &radic;n</strong></p>
          <p>Plus l'echantillon est grand, plus l'erreur standard est petite et plus l'estimation est precise. Doubler la precision requiert de quadrupler la taille de l'echantillon (relation en &radic;n).</p>
        </div>
        <p>Cette formule explique pourquoi la taille de l'echantillon est si importante en statistique. Un echantillon de 100 observations donne une estimation 10 fois plus precise (en termes d'ecart-type de la moyenne) qu'un echantillon de 1 seule observation.</p>

        <h3>Decomposition de la variance</h3>
        <p>Le <strong>theoreme de Huygens</strong> (ou formule de Koenig) permet de decomposer la variance totale en deux composantes : variance intra-groupes (au sein de chaque sous-groupe) et variance inter-groupes (entre les moyennes des sous-groupes).</p>
        <p>&sigma;&#xB2;_total = &sigma;&#xB2;_intra + &sigma;&#xB2;_inter. Cette decomposition est le fondement de l'<strong>analyse de la variance (ANOVA)</strong> : si la variance entre groupes est grande par rapport a la variance intra-groupes, les groupes ont des moyennes significativement differentes.</p>
        <p><strong>Exemple :</strong> on compare les tailles des eleves de differentes classes. La variance totale se decompose en : variations de taille au sein de chaque classe (intra, dues a la biologie individuelle) + differences de taille moyenne entre les classes (inter, potentiellement liee a l'age ou a d'autres facteurs).</p>

        <h3>Applications de la dispersion dans les grands domaines</h3>
        <p>La mesure de la dispersion est indispensable dans de nombreux domaines :</p>
        <ul>
          <li><strong>Controle qualite industriel :</strong> les cartes de controle (cartes Shewhart) surveillent la moyenne et l'ecart-type d'un procede pour detecter les derives. Un procede est juge « sous controle » si ses mesures restent dans les limites &plusmn; 3&sigma;</li>
          <li><strong>Finance :</strong> la volatilite (ecart-type annualise des rendements journaliers) est la mesure standard du risque d'un actif. La gestion de portefeuille cherche a maximiser le rendement pour un niveau de risque (ecart-type) donne — c'est la theorie de Markowitz</li>
          <li><strong>Medecine :</strong> les valeurs biologiques de reference (glycemie, cholesterol, tension arterielle) sont definies par les intervalles moyenne &plusmn; 2&sigma; de la population saine</li>
          <li><strong>Psychometrie :</strong> les tests standardises (QI, SAT) expriment les scores en ecarts a la norme (scores T, z-scores) pour permettre des comparaisons independantes de l'echelle brute</li>
        </ul>
      </div>"""

pages['descriptives/dispersion']['content'] = pages['descriptives/dispersion']['content'].replace(old_disp, new_disp)

# =====================================================================
# descriptives/aberrantes  (10738 chars -> target ~15000+)
# =====================================================================
old_aber = """        <div class="highlight-box">
          <p><strong>Regle d'or :</strong> ne jamais supprimer un outlier sans avoir compris sa cause. Toujours documenter les decisions prises et verifier si les conclusions changent avec et sans les outliers.</p>
        </div>
      </div>"""

new_aber = """        <div class="highlight-box">
          <p><strong>Regle d'or :</strong> ne jamais supprimer un outlier sans avoir compris sa cause. Toujours documenter les decisions prises et verifier si les conclusions changent avec et sans les outliers.</p>
        </div>

        <h3>Le test de Grubbs</h3>
        <p>Le test de Grubbs est un test statistique formel pour detecter un outlier dans un echantillon suppose gaussien. La statistique de test est :</p>
        <div class="highlight-box">
          <p><strong>G = max|x&#x1D62; - x&#x0305;| / s</strong></p>
          <p>On compare G a une valeur critique tablee au niveau &alpha;. Si G depasse cette valeur critique, l'observation la plus extreme est declaree outlier. La procedure peut etre repetee iterativement (en retirant un outlier a la fois) jusqu'a ce qu'il n'en reste plus. Cette methode porte aussi le nom de test ESD (Extreme Studentized Deviate).</p>
        </div>
        <p>Le test de Grubbs suppose la normalite des donnees. Pour des distributions tres asymetriques ou des petits echantillons, la methode de l'IQR (non parametrique) est souvent plus robuste et plus appropriee.</p>

        <h3>Donnees influentes en regression</h3>
        <p>En regression, on distingue les outliers des donnees <strong>influentes</strong> et a <strong>levier eleve</strong>. Ces trois notions sont distinctes et importantes :</p>
        <ul>
          <li><strong>Outlier en Y :</strong> observation dont le residu est grand (ecart important entre valeur observee et valeur ajustee par le modele)</li>
          <li><strong>Levier eleve :</strong> observation dont la valeur de X est tres eloignee de la moyenne des X ; elle peut fortement « tirer » la droite de regression si elle n'est pas alignee</li>
          <li><strong>Donnee influente :</strong> observation dont la suppression modifie significativement les parametres estimes. La <strong>distance de Cook</strong> (D&#x1D62;) quantifie cet impact en mesurant l'ecart entre les coefficients estimes avec et sans l'observation i</li>
        </ul>
        <p>Une observation peut avoir un levier eleve sans etre influente (si elle est « en ligne » avec les autres) ou etre influente sans avoir de levier eleve (si elle est proche en X mais eloignee de la tendance en Y). Il est important de diagnostiquer les trois aspects separement.</p>

        <h3>Imputation des valeurs aberrantes</h3>
        <p>Dans les grandes bases de donnees, supprimer les outliers signifie perdre des observations precieuses. L'<strong>imputation</strong> consiste a remplacer la valeur aberrante par une estimation plausible :</p>
        <ul>
          <li><strong>Imputation par la mediane :</strong> remplacer par la mediane de la variable — robuste et simple, c'est le choix par defaut pour les donnees asymetriques</li>
          <li><strong>Imputation par regression :</strong> estimer la valeur manquante a partir des autres variables disponibles, ce qui preserve les correlations entre variables</li>
          <li><strong>Imputation multiple (MI) :</strong> creer plusieurs jeux de donnees completes en tirant des valeurs plausibles depuis la distribution conditionnelle, puis combiner les resultats selon les regles de Rubin — methode recommandee pour les analyses inferentielles</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Important :</strong> l'imputation ne cree pas d'information, elle utilise l'information existante dans les autres variables pour estimer les valeurs manquantes. Elle doit toujours etre justifiee, ses hypotheses documentees, et sa sensibilite testee.</p>
        </div>

        <h3>Outliers dans les series temporelles</h3>
        <p>Dans une serie chronologique, un outlier peut etre de nature differente selon son impact dynamique sur la serie :</p>
        <ul>
          <li><strong>Additive outlier (AO) :</strong> impact ponctuel sur une seule observation (typiquement une erreur de saisie ou un evenement isole)</li>
          <li><strong>Innovational outlier (IO) :</strong> choc qui se propage sur les observations suivantes via la dynamique autoregressive de la serie</li>
          <li><strong>Level shift (LS) :</strong> changement permanent du niveau de la serie a partir d'un certain point (ex : changement de methodologie de collecte, reforme structurelle)</li>
          <li><strong>Temporary change (TC) :</strong> impact transitoire qui diminue progressivement selon un coefficient de dissipation</li>
        </ul>
        <p>La detection de ces types d'outliers necessite des methodes specifiques aux series temporelles, implementees dans des logiciels comme X-13ARIMA-SEATS (utilise par les instituts statistiques nationaux pour corriger les series CVS) ou TRAMO-SEATS.</p>

        <h3>Statistiques robustes</h3>
        <p>Plutot que de detecter et traiter les outliers, une autre strategie est d'utiliser des <strong>estimateurs robustes</strong> qui leur sont naturellement peu sensibles :</p>
        <ul>
          <li><strong>Mediane :</strong> estimateur robuste de la tendance centrale ; son <em>point de rupture</em> est 50 % (il faut plus de la moitie des donnees aberrantes pour le destabiliser)</li>
          <li><strong>MAD (Median Absolute Deviation) :</strong> mediane des |x&#x1D62; - mediane|. Estimateur robuste de la dispersion. MAD &times; 1,4826 &asymp; &sigma; pour une loi normale. Le z-score robuste est z&#x1D63;&#x1D52;&#x1D47; = (x - mediane) / (1,4826 &times; MAD)</li>
          <li><strong>M-estimateurs :</strong> generalisent le maximum de vraisemblance avec des fonctions de perte moins sensibles aux extremes (estimateurs de Huber, de Tukey). Ils reduisent l'influence des observations extremes sans les supprimer completement</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Point de rupture :</strong> le point de rupture d'un estimateur est la proportion maximale de donnees aberrantes qu'il peut tolerer avant de devenir non informatif. La moyenne a un point de rupture de 0 % (un seul outlier peut la faire diverger). La mediane a un point de rupture de 50 %, ce qui est le maximum theoriquement possible.</p>
        </div>

        <h3>Les outliers comme signaux porteurs d'information</h3>
        <p>Dans de nombreux domaines, les outliers ne sont pas des erreurs a eliminer mais des <strong>signaux porteurs d'information precieuse</strong> :</p>
        <ul>
          <li><strong>Detection de fraude financiere :</strong> les transactions frauduleuses sont par definition aberrantes par rapport aux comportements habituels. Les algorithmes de scoring de fraude cherchent precisement ces outliers dans les patterns de depenses</li>
          <li><strong>Maintenance predictive :</strong> dans une usine, un capteur dont la valeur s'ecarte de la norme peut signaler une panne imminente. La detection precoce permet d'intervenir avant la casse</li>
          <li><strong>Decouverte scientifique :</strong> la penicilline a ete decouverte parce qu'Alexander Fleming a voulu comprendre pourquoi une boite de Petri se comportait differemment des autres. Les anomalies sont souvent la premiere signature d'un phenomene nouveau</li>
          <li><strong>Epidemiologie et sante publique :</strong> un cluster de cas anormaux dans une region peut signaler une nouvelle maladie, une contamination alimentaire ou une exposition toxique</li>
        </ul>
        <p>La frontiere entre « valeur aberrante a corriger » et « decouverte scientifique » tient souvent a la question que l'on pose et a la rigueur de l'investigation. Un statisticien experimenté examine toujours ses outliers avec curiosite avant de decider de les ecarter.</p>
      </div>"""

pages['descriptives/aberrantes']['content'] = pages['descriptives/aberrantes']['content'].replace(old_aber, new_aber)

# =====================================================================
# descriptives/graphiques  (11012 chars -> target ~15000+)
# =====================================================================
old_graph = """        <h3>Bonnes pratiques</h3>
        <ul>
          <li>Toujours titrer le graphique et etiqueter les axes</li>
          <li>Ne pas tronquer l'axe des ordonnees (sauf raison explicite)</li>
          <li>Choisir le type de graphique adapte au type de donnees</li>
          <li>Eviter les effets 3D qui deforment la perception</li>
          <li>Utiliser des couleurs contrastees et accessibles</li>
        </ul>
      </div>"""

new_graph = """        <h3>Bonnes pratiques</h3>
        <ul>
          <li>Toujours titrer le graphique et etiqueter les axes</li>
          <li>Ne pas tronquer l'axe des ordonnees (sauf raison explicite)</li>
          <li>Choisir le type de graphique adapte au type de donnees</li>
          <li>Eviter les effets 3D qui deforment la perception</li>
          <li>Utiliser des couleurs contrastees et accessibles</li>
        </ul>

        <h3>Le graphique Q-Q (quantile-quantile)</h3>
        <p>Le graphique Q-Q est un outil fondamental pour evaluer si des donnees suivent une distribution theorique donnee (generalement la loi normale). On trace les quantiles empiriques observes en ordonnee contre les quantiles theoriques de la distribution de reference en abscisse.</p>
        <div class="highlight-box">
          <p><strong>Interpretation :</strong> si les points s'alignent sur la premiere bissectrice (y = x), les donnees suivent la distribution theorique. Des deviations revelent des asymetries (courbe en S) ou des queues epaisses (points s'ecartant vers le haut aux extremites). Le graphique Q-Q normal (normal probability plot) est systematiquement utilise pour verifier l'hypothese de normalite avant d'appliquer des tests parametriques.</p>
        </div>

        <h3>L'estimateur par noyau (KDE)</h3>
        <p>L'estimateur par noyau (Kernel Density Estimator) est une version lissee et continue de l'histogramme. Pour chaque point de l'axe x, il calcule la densite locale en sommant des fonctions noyau (generalement gaussiennes) centrees sur chaque observation.</p>
        <p><strong>Avantages par rapport a l'histogramme :</strong> pas de dependance arbitraire au choix du nombre de classes et de leurs bornes, courbe continue et lisse, plus facile a interpreter. <strong>Parametre cle :</strong> la largeur de fenetre (bandwidth) controle le lissage — trop petite, la courbe est trop accidentee ; trop grande, elle masque les details de la distribution.</p>
        <p>La superposition d'un KDE sur un histogramme est tres courante dans les analyses exploratoires modernes (seaborn.histplot en Python, density() en R). C'est souvent plus informatif que l'histogramme seul.</p>

        <h3>Le violin plot</h3>
        <p>Le violin plot est une combinaison du boxplot et du KDE bilateral. Il represente la distribution complete des donnees via un KDE (en forme de « violon » symetrique) tout en affichant les quartiles et la mediane a l'interieur. La largeur du violon a chaque niveau indique la densite locale des observations.</p>
        <p>Il est particulierement puissant pour comparer des distributions entre plusieurs groupes, car il revele des distributions bimodales ou asymetriques que le boxplot masquerait. En revanche, il est moins lisible sur de petits echantillons (moins de 30 observations).</p>

        <h3>La matrice de nuages de points (pairs plot)</h3>
        <p>Pour des jeux de donnees multivaries comportant plusieurs variables quantitatives, la matrice de nuages de points represente toutes les paires de variables dans une grille. La diagonale peut afficher les distributions univariees (histogramme ou KDE de chaque variable).</p>
        <p>Cet outil est fondamental en analyse exploratoire multivariee pour identifier rapidement les correlations (lineaires ou non) entre variables, les groupements naturels et les outliers multidimensionnels. En Python, seaborn.pairplot() genere cette matrice en une ligne. On peut colorer les points par groupe pour visualiser les differences.</p>

        <h3>La carte thermique (heatmap)</h3>
        <p>La carte thermique represente une matrice de valeurs par un code couleur. Elle est particulierement utilisee pour visualiser :</p>
        <ul>
          <li><strong>La matrice de correlation :</strong> les correlations entre toutes les paires de variables d'un jeu de donnees — on repere immediatement les blocs de variables fortement correlees</li>
          <li><strong>Les tableaux de contingence :</strong> les frequences jointes de deux variables qualitatives et leurs deviations par rapport a l'independance</li>
          <li><strong>Les matrices de confusion :</strong> en apprentissage automatique, la comparaison systematique entre classes predites et classes reelles pour evaluer un classifieur</li>
        </ul>

        <h3>Le quartet d'Anscombe et le Datasaurus Dozen</h3>
        <p>Le quartet d'Anscombe (1973) est compose de quatre jeux de donnees ayant exactement les memes statistiques (moyenne et variance de x et y, correlation, droite de regression) mais des formes radicalement differentes :</p>
        <ul>
          <li><strong>Jeu 1 :</strong> relation lineaire classique avec bruit aleatoire — le seul pour lequel la regression lineaire est vraiment appropriee</li>
          <li><strong>Jeu 2 :</strong> relation curviligne parfaite (parabolique) — la regression lineaire est ici un mauvais modele</li>
          <li><strong>Jeu 3 :</strong> relation lineaire parfaite perturbee par un unique outlier influent qui deforme toute la droite de regression</li>
          <li><strong>Jeu 4 :</strong> 8 points a la meme valeur de x plus un outlier extreme — la droite de regression ne signifie rien ici</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Datasaurus Dozen (2017) :</strong> Matejka et Fitzmaurice ont etendu ce principe avec 13 jeux de donnees ayant les memes statistiques (moyenne, variance, correlation) mais des formes completement differentes, dont un dinosaure, une etoile et un smiley. Ce travail illustre encore plus dramatiquement pourquoi « toujours visualiser ses donnees » n'est pas une recommandation facultative.</p>
        </div>

        <h3>Principes de Tufte pour l'integrite graphique</h3>
        <p>Edward Tufte, dans <em>The Visual Display of Quantitative Information</em> (1983), a pose les fondements de la visualisation scientifique. Ses principes cles :</p>
        <ul>
          <li><strong>Rapport donnees/encre (data-ink ratio) :</strong> chaque element graphique doit justifier sa presence par l'information qu'il apporte. Supprimer tout ce qui n'ajoute pas d'information</li>
          <li><strong>Eviter le chartjunk :</strong> ombrages decoratifs, grilles trop prononcees, effets 3D qui n'apportent rien et distraient le lecteur</li>
          <li><strong>Integrite graphique :</strong> la representation visuelle doit etre proportionnelle aux donnees — ne pas tronquer les axes, ne pas distordre les echelles</li>
          <li><strong>Small multiples :</strong> une serie de graphiques identiques montrant des sous-groupes ou des periodes differentes est souvent bien plus efficace qu'un unique graphique complexe et encombre</li>
        </ul>
      </div>"""

pages['descriptives/graphiques']['content'] = pages['descriptives/graphiques']['content'].replace(old_graph, new_graph)

# =====================================================================
# probabilites/evenements  (10442 chars -> target ~15000+)
# =====================================================================
old_proba = """        <h3>Dénombrement</h3>
        <p>Calculer |Ω| et |A| nécessite souvent des techniques de dénombrement :</p>
        <ul>
          <li><strong>Arrangements :</strong> Aₙₖ = n!/(n-k)! — k objets parmi n, l'ordre compte.</li>
          <li><strong>Combinaisons :</strong> Cₙₖ = n!/(k!(n-k)!) — k objets parmi n, l'ordre ne compte pas.</li>
          <li><strong>Permutations :</strong> n! — toutes les façons d'ordonner n objets.</li>
        </ul>
      </div>"""

new_proba = """        <h3>Dénombrement</h3>
        <p>Calculer |Ω| et |A| nécessite souvent des techniques de dénombrement :</p>
        <ul>
          <li><strong>Arrangements :</strong> A&#x207F;&#x1D4F; = n!/(n-k)! — k objets parmi n, l'ordre compte.</li>
          <li><strong>Combinaisons :</strong> C&#x207F;&#x1D4F; = n!/(k!(n-k)!) — k objets parmi n, l'ordre ne compte pas.</li>
          <li><strong>Permutations :</strong> n! — toutes les façons d'ordonner n objets distincts.</li>
        </ul>

        <h3>Indépendance de deux événements</h3>
        <p>Deux événements A et B sont <strong>indépendants</strong> si la réalisation de l'un n'influence pas la probabilité de l'autre. La définition formelle est :</p>
        <div class="highlight-box">
          <p><strong>A et B indépendants ⟺ P(A ∩ B) = P(A) × P(B)</strong></p>
          <p>Équivalemment : P(A|B) = P(A), c'est-à-dire que la connaissance de B ne modifie pas la probabilité de A.</p>
        </div>
        <p><strong>Attention à la confusion classique :</strong> indépendance et incompatibilité sont deux notions radicalement différentes. Si A et B sont incompatibles (A ∩ B = ∅) et que P(A) &gt; 0 et P(B) &gt; 0, alors A et B sont nécessairement dépendants : la réalisation de A empêche celle de B, donc P(B|A) = 0 ≠ P(B).</p>
        <p><strong>Exemple :</strong> on lance deux dés distincts. A = « le premier dé donne 6 » et B = « le deuxième dé donne 6 » sont indépendants car P(A ∩ B) = 1/36 = (1/6) × (1/6) = P(A) × P(B). En revanche, si l'on ne lance qu'un seul dé, A = « obtenir 6 » et B = « obtenir un pair » ne sont pas indépendants : P(A ∩ B) = P({6}) = 1/6 mais P(A) × P(B) = (1/6) × (3/6) = 1/12.</p>

        <h3>Les trois interprétations de la probabilité</h3>
        <p>Le calcul des probabilités est fondé sur les axiomes de Kolmogorov, mais l'interprétation de la probabilité elle-même fait l'objet de débats philosophiques profonds depuis le XVIIe siècle :</p>
        <ul>
          <li><strong>Interprétation classique (Laplace) :</strong> P(A) = cas favorables / cas possibles, sous hypothèse d'équiprobabilité. Valable pour les jeux de hasard symétriques mais impossible à généraliser aux univers infinis ou asymétriques.</li>
          <li><strong>Interprétation fréquentiste :</strong> P(A) est la limite de la fréquence relative de A quand le nombre d'expériences tend vers l'infini. C'est l'interprétation dominante en statistique classique (tests d'hypothèses à la Neyman-Pearson, intervalles de confiance).</li>
          <li><strong>Interprétation bayésienne (subjective) :</strong> P(A) quantifie un degré de croyance rationnel dans la réalisation de A, mis à jour par les observations via le théorème de Bayes. Applicable même aux événements non répétables (probabilité qu'un patient soit atteint d'une maladie donnée, probabilité qu'une hypothèse scientifique soit vraie).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Exemple révélateur :</strong> « Quelle est la probabilité que le suspect soit coupable ? » Pour un fréquentiste pur, la question est mal posée (l'événement n'est pas répétable). Pour un bayésien, c'est une question parfaitement légitime : on quantifie le degré de croyance en la culpabilité à partir des preuves, et on le met à jour au fur et à mesure que de nouvelles preuves apparaissent. C'est le fondement du raisonnement diagnostique médical.</p>
        </div>

        <h3>La loi des grands nombres</h3>
        <p>La loi des grands nombres (Jakob Bernoulli, <em>Ars Conjectandi</em>, 1713) est un des théorèmes fondateurs de la théorie des probabilités. Elle établit que la fréquence relative d'un événement converge vers sa probabilité théorique quand le nombre d'expériences indépendantes tends vers l'infini.</p>
        <p><strong>Forme faible (Bernoulli) :</strong> pour tout ε &gt; 0, P(|f&#x2099; - P(A)| &gt; ε) → 0 quand n → ∞. La fréquence relative converge en probabilité vers P(A).</p>
        <p><strong>Forme forte (Kolmogorov) :</strong> P(lim_{n→∞} f&#x2099; = P(A)) = 1. La convergence a lieu presque sûrement (pour tous les séquences sauf un ensemble de probabilité nulle).</p>
        <p>Ce théorème justifie l'utilisation de la fréquence comme estimateur de la probabilité, et explique pourquoi un casino est rentable sur le long terme même si des joueurs gagnent ponctuellement : les fréquences se stabilisent, et l'avantage de la maison finit par s'exprimer.</p>

        <h3>Le paradoxe des anniversaires</h3>
        <p>Le paradoxe des anniversaires illustre l'intuition trompeuse en probabilités. Parmi un groupe de n personnes choisies au hasard, quelle est la probabilité qu'au moins deux aient le même anniversaire ?</p>
        <p>La probabilité complémentaire (tous les anniversaires distincts) est : P(distincts) = (365/365) × (364/365) × (363/365) × ... × ((365-n+1)/365).</p>
        <p>P(au moins une coïncidence) = 1 - P(distincts). Résultat surprenant : cette probabilité dépasse 50 % dès <strong>n = 23 personnes</strong>, et atteint 99 % à n = 57.</p>
        <div class="highlight-box">
          <p><strong>Intuition :</strong> le nombre de paires possibles dans un groupe de n personnes est C(n,2) = n(n-1)/2. Pour n = 23, cela fait 253 paires à comparer — beaucoup plus que l'intuition ne le suggère. C'est ce nombre de paires, et non le nombre de personnes, qui détermine la probabilité de coïncidence.</p>
        </div>

        <h3>Simulations de Monte-Carlo</h3>
        <p>Quand l'espace Ω est trop complexe pour un calcul analytique, on peut <strong>simuler</strong> l'expérience aléatoire un grand nombre de fois et estimer la probabilité par la fréquence observée dans les simulations. C'est le principe des <strong>méthodes de Monte-Carlo</strong>.</p>
        <p><strong>Exemple classique :</strong> estimer π par simulation. On tire des points uniformément au hasard dans le carré [−1, 1]². La proportion de points tombant dans le cercle unité converge vers π/4. Avec 1 million de simulations, on obtient π avec 3 à 4 décimales correctes.</p>
        <p>Les simulations de Monte-Carlo sont utilisées dans de nombreux domaines où le calcul analytique est impossible ou trop coûteux : finance (pricing d'options complexes), physique des particules, gestion des risques (VaR stressée), épidémiologie (propagation d'épidémies). La précision augmente en O(1/√n) : pour diviser l'erreur par 10, il faut multiplier le nombre de simulations par 100.</p>
      </div>"""

pages['probabilites/evenements']['content'] = pages['probabilites/evenements']['content'].replace(old_proba, new_proba)

# =====================================================================
# descriptives/tendance-centrale  (12663 chars -> target ~15000+)
# =====================================================================
old_tc = """        <p>On a toujours l'inegalite : <strong>H ≤ G ≤ x̄ ≤ Q</strong> (avec egalite quand toutes les valeurs sont identiques).</p>
      </div>"""

new_tc = """        <p>On a toujours l'inegalite : <strong>H &le; G &le; x&#x0305; &le; Q</strong> (avec egalite quand toutes les valeurs sont identiques).</p>

        <h3>La moyenne comme estimateur en statistique inferentielle</h3>
        <p>En statistique inferentielle, la moyenne echantillonnale x&#x0305; est l'<strong>estimateur</strong> le plus courant de la moyenne de la population &mu;. Elle possede trois proprietes fondamentales qui justifient son usage universel :</p>
        <ul>
          <li><strong>Sans biais :</strong> E(x&#x0305;) = &mu; — en moyenne sur tous les echantillons possibles, elle vise juste</li>
          <li><strong>Convergence :</strong> x&#x0305; &rarr; &mu; quand n &rarr; &infin; (loi des grands nombres)</li>
          <li><strong>Efficacite :</strong> parmi tous les estimateurs lineaires sans biais, x&#x0305; a la plus petite variance sous hypothese de normalite (theoreme de Gauss-Markov)</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Distribution de la moyenne :</strong> si la population suit une loi normale N(&mu;, &sigma;&sup2;), alors x&#x0305; suit N(&mu;, &sigma;&sup2;/n). Par le theoreme central limite, cette approximation est valable pour n grand (&ge; 30) meme si la population n'est pas normale. L'ecart-type de la moyenne — appele erreur standard — vaut SE = &sigma;/&radic;n.</p>
        </div>

        <h3>La mediane et les inegalites economiques</h3>
        <p>En economie, la difference entre moyenne et mediane est cruciale pour mesurer le niveau de vie et les inegalites. Lorsque la distribution des revenus ou des patrimoines est fortement asymetrique (quelques tres hauts revenus), la mediane represente mieux la situation du « menage typique ».</p>
        <p><strong>Exemple concret :</strong> supposons que le revenu moyen dans un pays soit de 3 000 € mensuels mais que la mediane soit de 1 800 €. Cet ecart de 1 200 € signifie que des revenus tres eleves tirent fortement la moyenne. Plus de la moitie de la population gagne moins que la moyenne.</p>
        <p>L'<strong>indice de Gini</strong> mesure l'inegalite de distribution entre 0 (egalite parfaite) et 1 (inegalite maximale). Il est base sur la courbe de Lorenz, qui relie la proportion cumulee de la population (du plus pauvre au plus riche) a la proportion cumulee du revenu. Plus la courbe s'eloigne de la diagonale, plus l'inegalite est grande.</p>

        <h3>Tendance centrale pour les donnees qualitatives ordinales</h3>
        <p>Pour les donnees qualitatives ordinales (echelles de Likert : « tres insatisfait » a « tres satisfait », niveaux d'education, stades d'une maladie), la notion de « centre » est plus complexe :</p>
        <ul>
          <li>La <strong>moyenne</strong> est techniquement inapplicable : la difference entre « tres satisfait » et « satisfait » n'est pas necessairement egale a celle entre « satisfait » et « neutre » — les intervalles ne sont pas garantis egaux</li>
          <li>La <strong>mediane</strong> est applicable : on peut identifier la valeur centrale de la serie ordonnee, ce qui represente la modalite « du milieu »</li>
          <li>Le <strong>mode</strong> est toujours applicable et souvent tres informatif pour les echelles qualitatives</li>
        </ul>
        <p>En pratique, si l'echelle est suffisamment fine (7 points ou plus) et la distribution approximativement symetrique, la moyenne est souvent utilisee comme approximation commode en sciences sociales — c'est un debat methodologique recurrent.</p>

        <h3>La moyenne geometrique en finance et en biologie</h3>
        <p>La moyenne geometrique est adaptee aux grandeurs multiplicatives et aux taux de variation successifs :</p>
        <p><strong>Exemple financier :</strong> un placement rapporte +50 % la premiere annee et -33 % la seconde. La moyenne arithmetique des taux serait (+50 - 33)/2 = 8,5 %, suggerant un gain significatif. Mais la realite : 1 000 &euro; &times; 1,50 &times; 0,67 = 1 005 &euro; — presque aucun gain. La moyenne geometrique : &radic;(1,50 &times; 0,67) = &radic;1,005 &asymp; 1,0025, soit +0,25 % par an — le veritable taux de rendement annuel moyen.</p>
        <div class="highlight-box">
          <p><strong>Regle pratique :</strong> pour des variations en pourcentage successives, utiliser la moyenne geometrique. La moyenne arithmetique surestime systematiquement le taux de rendement reel quand les variations sont importantes. L'ecart entre les deux augmente avec la volatilite.</p>
        </div>

        <h3>Le paradoxe de Simpson</h3>
        <p>Le <strong>paradoxe de Simpson</strong> illustre de façon frappante les pieges de l'agregation. Une tendance observee dans chaque sous-groupe peut s'inverser ou disparaitre quand on combine les groupes en une seule statistique globale.</p>
        <p><strong>Exemple :</strong> un medicament montre un taux de guerison de 73 % (sur 600 patients traites), contre 83 % pour le placebo (sur 700 patients) — le medicament semble inferieur. Mais en separant par gravite de la maladie : pour les cas severes (medicament 57 %, placebo 40 %) et pour les cas legers (medicament 93 %, placebo 87 %), le medicament est meilleur dans les deux sous-groupes. Le paradoxe vient du fait que le medicament a ete administre preferentiellement aux cas les plus graves.</p>
        <p>Ce paradoxe est frequent en epidemiologie, en education et en sciences sociales. Il illustre pourquoi on ne peut jamais interpreter une moyenne globale sans connaitre la composition et la ponderation des sous-groupes qui la constituent. Verifier la presence de variables de confusion (ici, la gravite) est une etape essentielle de toute analyse comparative.</p>
      </div>"""

pages['descriptives/tendance-centrale']['content'] = pages['descriptives/tendance-centrale']['content'].replace(old_tc, new_tc)

# Verify lengths
for key in ['descriptives/distributions', 'descriptives/dispersion', 'descriptives/aberrantes',
            'descriptives/graphiques', 'probabilites/evenements', 'descriptives/tendance-centrale']:
    print(f'{key}: {len(pages[key]["content"])} chars')

# Save
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/statistiques.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done!")
