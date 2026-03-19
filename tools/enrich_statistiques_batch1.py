#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('assets/content/statistiques.json', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

enrichments = {}

enrichments['analyse-donnees/classification'] = """
<h3>Algorithmes de clustering non supervisé</h3>
<p class="resume-text">Le clustering regroupe des observations similaires sans étiquettes préalables. K-means partitionne en k clusters en minimisant la variance intra-cluster ; il requiert de spécifier k et est sensible aux valeurs initiales. Le clustering hiérarchique construit un dendrogramme par fusions successives (agglomératif) ou divisions (divisif), selon des critères de liaison (single, complete, average, Ward). DBSCAN identifie des clusters de forme arbitraire et détecte les outliers sans spécifier k.</p>
<div class="highlight-box">
<p><strong>Évaluation du clustering :</strong> Sans labels, l'évaluation interne utilise l'indice de silhouette (s ∈ [-1,1], mesure la cohésion et séparation) ou l'indice de Davies-Bouldin (ratio distances intra/inter-cluster, minimiser). Avec labels de référence, l'indice de Rand ajusté et la V-mesure comparent la partition obtenue à la vérité terrain. Le coude sur la courbe d'inertie (K-means) aide à choisir k mais reste subjectif.</p>
</div>
<h3>Méthodes à noyaux et SVM</h3>
<p class="resume-text">Les méthodes à noyaux permettent de traiter des données non linéairement séparables en les projetant implicitement dans un espace de grande dimension. Le "kernel trick" calcule le produit scalaire dans cet espace via une fonction noyau K(x,x') sans calculer explicitement la transformation. La SVM (Support Vector Machine) trouve l'hyperplan à marge maximale ; avec noyau RBF (Gaussien), elle sépare des structures complexes. Les noyaux polynomiaux, linéaires et sigmoïdes couvrent différents cas d'usage.</p>
<div class="highlight-box">
<p><strong>Hyperparamètres SVM :</strong> Le paramètre C contrôle le compromis biais-variance : faible C → large marge, plus d'erreurs de classification tolérées (sous-apprentissage) ; fort C → marge étroite, moins d'erreurs (sur-apprentissage). Pour le noyau RBF, γ contrôle l'influence de chaque exemple : faible γ → décision lisse, fort γ → frontière complexe. La validation croisée avec recherche sur grille (GridSearchCV) optimise ces paramètres conjointement.</p>
</div>
<h3>Arbres de décision et méthodes d'ensemble</h3>
<p class="resume-text">Les arbres de décision partitionnent récursivement l'espace des features selon des seuils maximisant la pureté (indice de Gini ou entropie pour la classification, MSE pour la régression). Simples et interprétables, ils sur-apprennent facilement. Les forêts aléatoires (Random Forest) combinent des centaines d'arbres entraînés sur des sous-échantillons bootstrap avec des sous-ensembles de features, réduisant la variance. Le Gradient Boosting (XGBoost, LightGBM) construit séquentiellement des arbres corrigeant les erreurs des précédents.</p>
<div class="highlight-box">
<p><strong>Importance des variables :</strong> Random Forest mesure l'importance de chaque feature par la réduction moyenne d'impureté (MDI) ou par permutation (MDA). SHAP (SHapley Additive exPlanations) fournit des explications locales et globales cohérentes pour tout modèle. Ces outils d'interprétabilité sont essentiels pour valider que le modèle capture des relations réelles et non des artefacts du jeu d'entraînement.</p>
</div>
"""

enrichments['analyse-donnees/series-temporelles'] = """
<h3>Modèles ARIMA et extensions</h3>
<p class="resume-text">Les modèles ARIMA(p,d,q) modélisent les séries stationnaires par une combinaison autorégressive (AR : Xt = Σφi·Xt-i + εt), de différenciation (I : opérateur ∇^d) et de moyenne mobile (MA : εt + Σθi·εt-i). La saisonnalité est captée par SARIMA(p,d,q)(P,D,Q)s. L'identification du modèle utilise les autocorrélogrammes ACF et PACF pour déterminer p et q. La validation par le test de Ljung-Box vérifie que les résidus sont des bruits blancs.</p>
<div class="highlight-box">
<p><strong>Test de stationnarité :</strong> Le test ADF (Augmented Dickey-Fuller) teste l'hypothèse nulle de racine unitaire (non-stationnarité). Le test KPSS teste l'hypothèse nulle de stationnarité. Si ADF rejette H0 et KPSS ne rejette pas H0, la série est stationnaire. Si les deux rejettent, il peut y avoir une tendance déterministe plutôt que stochastique. La différenciation et la transformation log sont les remèdes habituels à la non-stationnarité.</p>
</div>
<h3>Modèles à espace d'état et filtre de Kalman</h3>
<p class="resume-text">La représentation en espace d'état modélise une série temporelle par deux équations : l'équation d'état (dynamique du système latent) et l'équation de mesure (relation entre état et observation). Le filtre de Kalman estime récursivement l'état latent en combinant prédiction du modèle et observation courante selon un gain optimal. Cette approche généralise ARIMA, les modèles à tendance locale, les modèles à saisons stochastiques. Prophet (Facebook) utilise un modèle additif decomposable pour les prévisions à grande échelle.</p>
<div class="highlight-box">
<p><strong>Détection de points de changement :</strong> Les séries temporelles subissent souvent des ruptures structurelles (changements de niveau, tendance, variance). Les algorithmes de détection comme PELT (Pruned Exact Linear Time), Binary Segmentation ou BOCPD (Bayesian Online Changepoint Detection) identifient ces ruptures. La librairie Python `ruptures` implémente ces méthodes. Essentiel en monitoring industriel, analyse financière et épidémiologie.</p>
</div>
<h3>Réseaux de neurones pour séries temporelles</h3>
<p class="resume-text">Les LSTM (Long Short-Term Memory) et GRU (Gated Recurrent Unit) capturent des dépendances à long terme via des mécanismes de porte qui contrôlent le flux d'information. Les transformeurs (Attention) dominent désormais pour les séquences longues avec leur mécanisme d'auto-attention globale. Les modèles hybrides CNN-LSTM combinent extraction de features locales (CNN) et modélisation temporelle (LSTM). N-BEATS et N-HiTS sont des architectures récentes entièrement basées sur des couches linéaires, obtenant d'excellents résultats sur des benchmarks de prévision.</p>
<div class="highlight-box">
<p><strong>Métriques d'évaluation des prévisions :</strong> MAE (Mean Absolute Error) mesure l'erreur absolue moyenne. MAPE (Mean Absolute Percentage Error) normalise par la valeur réelle mais diverge si la série s'approche de zéro. SMAPE (Symmetric MAPE) corrige ce biais. MASE (Mean Absolute Scaled Error) normalise par l'erreur d'une prévision naïve saisonnière, permettant de comparer des séries d'échelles différentes. La prévision probabiliste (intervalles, distributions) est souvent plus utile que les prévisions ponctuelles.</p>
</div>
"""

enrichments['analyse-donnees/data-mining'] = """
<h3>Règles d'association et algorithme Apriori</h3>
<p class="resume-text">L'extraction de règles d'association découvre des relations fréquentes dans des données transactionnelles (ex : "si pain et beurre, alors confiture"). L'algorithme Apriori génère les itemsets fréquents par montée en puissance (itemsets de taille k à partir des fréquents de taille k-1). Les règles sont évaluées par le support (fréquence), la confiance (P(conséquent|antécédent)) et le lift (rapport à l'indépendance). FP-Growth est plus efficace qu'Apriori car il évite la génération des candidats.</p>
<div class="highlight-box">
<p><strong>Mesures d'intérêt :</strong> Le lift = confiance / support(conséquent) mesure l'écart à l'indépendance. Lift > 1 : association positive ; lift < 1 : association négative. La conviction = (1-support(C))/(1-confiance) mesure l'implication logique. Le levier = support(A∪C) - support(A)·support(C) mesure l'excès de co-occurrence. Ces mesures permettent de filtrer les règles triviales ou trompeuses et d'identifier les patterns véritablement intéressants.</p>
</div>
<h3>Détection d'anomalies et outliers</h3>
<p class="resume-text">La détection d'anomalies identifie des observations qui s'écartent significativement du comportement attendu. Les méthodes statistiques (z-score, IQR) supposent une distribution connue. L'Isolation Forest isole les anomalies en quelques coupures d'arbre aléatoires (les anomalies sont plus faciles à isoler). Local Outlier Factor (LOF) compare la densité locale d'un point à ses voisins. Les autoencodeurs neuronaux détectent les anomalies par leur erreur de reconstruction élevée. Applications : fraude financière, pannes industrielles, cybersécurité.</p>
<div class="highlight-box">
<p><strong>Évaluation en détection d'anomalies :</strong> Les anomalies étant rares, la précision globale est trompeuse (paradoxe de la classe déséquilibrée). La courbe ROC (AUC-ROC) mesure le compromis sensibilité/spécificité. La courbe précision-rappel (AUCPR) est plus informative pour les classes très déséquilibrées. Le F1-score combine précision et rappel. En pratique, le seuil de décision est réglé selon le coût relatif des faux positifs et des faux négatifs dans le contexte métier.</p>
</div>
<h3>Réduction de dimension et visualisation</h3>
<p class="resume-text">La réduction de dimension facilite la visualisation et le traitement des données de haute dimension. t-SNE (t-distributed Stochastic Neighbor Embedding) préserve les structures locales pour la visualisation en 2D/3D mais n'est pas reproductible et distort les distances globales. UMAP (Uniform Manifold Approximation and Projection) préserve mieux la structure globale et est plus rapide. Ces méthodes non linéaires complètent l'ACP (linéaire) pour explorer des manifolds complexes dans des données génomiques, images ou textes.</p>
<div class="highlight-box">
<p><strong>Malédiction de la dimensionnalité :</strong> En haute dimension, tous les points deviennent équidistants (distance euclidienne perd de sens), les volumes se concentrent sur les bords de l'hypercube, et les densités deviennent exponentiellement faibles. Ces effets imposent des adaptations : distances de Manhattan ou cosinus plutôt qu'euclidienne, régularisation forte des modèles, réduction de dimension préalable, et méthodes spécialisées pour les données à structure sparse.</p>
</div>
"""

enrichments['analyse-donnees/bayesiennes'] = """
<h3>Inférence bayésienne et distributions a posteriori</h3>
<p class="resume-text">L'inférence bayésienne met à jour les croyances initiales (prior) avec les données observées via le théorème de Bayes pour obtenir la distribution a posteriori : P(θ|X) ∝ P(X|θ)·P(θ). Contrairement à l'approche fréquentiste, θ est traité comme une variable aléatoire. La distribution a posteriori encode toute l'incertitude sur les paramètres. L'estimation ponctuelle peut utiliser la moyenne a posteriori (EAP), le mode (MAP) ou la médiane, selon la forme de la distribution et la fonction de perte.</p>
<div class="highlight-box">
<p><strong>Choix du prior :</strong> Le prior non informatif (Jeffreys, uniforme) minimise l'influence des croyances initiales. Le prior conjugué simplifie les calculs analytiques : Beta-Binomial, Normal-Normal, Gamma-Poisson. Les priors régularisants (Normal centré sur 0, Laplace pour la sparsité) correspondent aux régularisations L2 et L1 en ML. Les priors informatifs encodent une expertise domaine. Une analyse de sensibilité au prior est recommandée, surtout avec peu de données.</p>
</div>
<h3>Méthodes de Monte Carlo par chaînes de Markov (MCMC)</h3>
<p class="resume-text">Quand la distribution a posteriori n'a pas de forme analytique, les méthodes MCMC génèrent des échantillons représentatifs. L'algorithme de Metropolis-Hastings accepte ou rejette les propositions selon un ratio de vraisemblances. Le sample de Gibbs itère sur chaque paramètre conditionnellement aux autres. HMC (Hamiltonian Monte Carlo) et NUTS (No-U-Turn Sampler, implémenté dans Stan et PyMC) utilisent des gradients pour explorer efficacement les distributions de haute dimension avec moins d'autocorrélation.</p>
<div class="highlight-box">
<p><strong>Diagnostic de convergence MCMC :</strong> Le facteur R-hat (Gelman-Rubin) compare la variance inter-chaînes et intra-chaînes ; R-hat < 1,01 indique la convergence. La taille effective d'échantillon (ESS) mesure l'information indépendante dans la chaîne autocorrélée : ESS > 400 par paramètre est recommandé. Le tracé des chaînes (trace plot) doit ressembler à un "caterpillar" sans tendance. L'autocorrélogramme doit décroître rapidement. Ces diagnostics sont essentiels avant d'utiliser les échantillons.</p>
</div>
<h3>Modèles hiérarchiques bayésiens</h3>
<p class="resume-text">Les modèles hiérarchiques (multilevel) modélisent des données groupées avec des paramètres partiellement échangeables. Les paramètres de groupe sont tirés d'une distribution commune (hyperprior), permettant l'emprunt de force (shrinkage vers la moyenne du groupe). Un modèle écoles/élèves estime l'effet de chaque école en tenant compte de la variabilité naturelle et de l'incertitude due aux petits effectifs. Ces modèles évitent le sur-apprentissage des petits groupes tout en capturant les véritables différences entre groupes.</p>
<div class="highlight-box">
<p><strong>Comparaison de modèles bayésiens :</strong> Le facteur de Bayes K = P(X|M1)/P(X|M2) compare deux modèles par le rapport des vraisemblances marginales. K > 10 est une évidence forte en faveur de M1. Le WAIC (Widely Applicable IC) et la LOO-CV (Leave-One-Out Cross-Validation) bayésienne estiment la capacité prédictive hors-échantillon sans fitting explicite. Ces critères pénalisent la complexité différemment de l'AIC/BIC fréquentiste, intégrant l'incertitude paramétrique.</p>
</div>
"""

enrichments['probabilites/bayes'] = """
<h3>Réseaux bayésiens et graphes probabilistes</h3>
<p class="resume-text">Un réseau bayésien est un graphe acyclique dirigé (DAG) où les noeuds représentent des variables aléatoires et les arcs les dépendances directes. Chaque noeud a une distribution conditionnelle P(Xi|Parents(Xi)). La distribution jointe se factorise en produit de ces distributions locales. L'inférence exacte (algorithme de Pearl, variable elimination) calcule P(X|Evidence). Les réseaux de croyances apprennent la structure et les paramètres à partir de données et encodent des relations causales.</p>
<div class="highlight-box">
<p><strong>D-séparation :</strong> La d-séparation détermine les indépendances conditionnelles dans un réseau bayésien sans calcul de distributions. Un chemin entre X et Y est bloqué par un ensemble Z si : (1) il passe par un noeud commun ou en série dans Z, ou (2) il passe par une structure en V (collider) non dans Z et sans descendant dans Z. Si tous les chemins sont bloqués, X ⊥ Y | Z. Cet outil graphique permet de lire directement les indépendances du modèle.</p>
</div>
<h3>Le théorème de Bayes en détail</h3>
<p class="resume-text">P(H|E) = P(E|H)·P(H) / P(E) décompose la probabilité a posteriori en trois composantes : le prior P(H) (croyance initiale), la vraisemblance P(E|H) (compatibilité des données avec l'hypothèse) et la preuve P(E) = ΣP(E|Hi)·P(Hi) (constante de normalisation). La mise à jour bayésienne est séquentielle : le posteriori d'aujourd'hui devient le prior de demain avec de nouvelles données. Cette propriété cohérente en fait un cadre rationnel d'apprentissage.</p>
<div class="highlight-box">
<p><strong>Taux de faux positifs en médecine :</strong> Un test avec sensibilité 99% et spécificité 99% pour une maladie de prévalence 0,1% donne, si positif, P(malade|positif) = (0,99 × 0,001) / (0,99 × 0,001 + 0,01 × 0,999) ≈ 9%. Malgré un test quasi-parfait, 91% des positifs sont faux positifs ! Cette contre-intuition cruciale résulte de la faible prévalence et justifie des tests de confirmation. Le raisonnement bayésien est indispensable pour interpréter les résultats médicaux.</p>
</div>
<h3>Classification naïve bayésienne</h3>
<p class="resume-text">Le classificateur de Bayes naïf suppose l'indépendance conditionnelle des features sachant la classe : P(X|C) = ΠP(Xi|C). Malgré cette hypothèse souvent fausse, il performe étonnamment bien en pratique (texte, spam, diagnose médicale). La variante Gaussian NB modélise les features continues par des gaussiennes par classe. Multinomial NB est adaptée au comptage de mots. Bernoulli NB pour les features binaires. L'estimation des paramètres P(Xi|C) se fait par maximum de vraisemblance avec lissage de Laplace pour éviter les probabilités nulles.</p>
<div class="highlight-box">
<p><strong>Lissage de Laplace (add-1) :</strong> Si un mot n'apparaît pas dans les documents d'entraînement d'une classe, P(mot|classe) = 0, annulant tout produit. Le lissage de Laplace ajoute α (souvent 1) à tous les comptages : P(mot|classe) = (count + α) / (total + α·V) où V est la taille du vocabulaire. Cela garantit des probabilités strictement positives. La valeur optimale de α est un hyperparamètre à optimiser par validation croisée.</p>
</div>
"""

enrichments['probabilites/lois'] = """
<h3>Lois continues fondamentales</h3>
<p class="resume-text">La loi normale N(μ,σ²) est caractérisée par sa densité f(x) = (1/σ√2π)exp(-(x-μ)²/2σ²). Ses propriétés de stabilité (somme de normales est normale, multiplication par scalaire) et le théorème central limite (TCL) en font la distribution centrale en statistiques. La loi de Student t(ν) converge vers N(0,1) quand ν→∞ et est utilisée pour les petits échantillons. La loi chi-deux χ²(ν) est la somme de ν normales standard carrées et sert aux tests d'ajustement et d'indépendance.</p>
<div class="highlight-box">
<p><strong>Famille exponentielle :</strong> Une distribution appartient à la famille exponentielle si sa densité s'écrit f(x|θ) = h(x)·exp(η(θ)·T(x) - A(θ)). Elle inclut Normal, Bernoulli, Poisson, Gamma, Bêta. Ces distributions partagent des propriétés remarquables : existence de statistiques suffisantes, conjuguaison naturelle pour l'inférence bayésienne, algorithmes de ML efficaces (GLM, EM). La fonction log-partition A(θ) génère les moments : A'(θ) = E[T(X)], A''(θ) = Var[T(X)].</p>
</div>
<h3>Convergences et théorèmes limites</h3>
<p class="resume-text">La loi des grands nombres faible (LLGN) : pour un échantillon iid de moyenne μ, Xn → μ en probabilité. La LLGN forte dit que la convergence est presque sûre. Le TCL raffine ce résultat : √n(Xn - μ)/σ → N(0,1) en loi, permettant des intervalles de confiance asymptotiques. Le théorème de Slutsky permet de remplacer σ par son estimateur. Le delta-method étend le TCL aux fonctions de statistiques : √n(g(Xn) - g(μ)) → N(0, g'(μ)²σ²).</p>
<div class="highlight-box">
<p><strong>Convergence en loi vs probabilité :</strong> La convergence en loi (→L) : la distribution de Xn tend vers celle de X. La convergence en probabilité (→P) : P(|Xn-X|>ε)→0. La convergence presque sûre (→p.s.) : P(limXn=X)=1. Les relations d'implication sont : p.s. ⟹ P ⟹ L. La convergence en loi est la plus faible mais suffit pour les résultats asymptotiques usuels. La suite 1/n→0 est un exemple : convergence certaine dans les 3 sens.</p>
</div>
<h3>Copules et dépendances multivariées</h3>
<p class="resume-text">Le théorème de Sklar établit que toute distribution jointe F(x,y) = C(F_X(x), F_Y(y)) où C est une copule, distribution sur [0,1]² aux marges uniformes. Les copules modélisent la structure de dépendance indépendamment des marges. La copule gaussienne capture une dépendance elliptique symétrique. La copule de Clayton et Gumbel modélisent des dépendances de queue asymétriques. Fondamentales en finance (corrélation d'actifs, risque de défaut corrélé en CDO) et en sciences de l'environnement (événements extrêmes conjoints).</p>
<div class="highlight-box">
<p><strong>Tau de Kendall et Rho de Spearman :</strong> Ces mesures de concordance non paramétriques capturent toute dépendance monotone, pas seulement linéaire (comme Pearson). Tau de Kendall τ = (concordants - discordants) / C(n,2). Rho de Spearman = corrélation de Pearson sur les rangs. Les deux varient dans [-1,1], valent 0 sous indépendance, et valent ±1 pour dépendance monotone parfaite. Ils sont liés à la copule par des formules exactes et résistants aux outliers.</p>
</div>
"""

enrichments['probabilites/variables'] = """
<h3>Transformations de variables aléatoires</h3>
<p class="resume-text">Si X a une densité fX et g est une fonction dérivable et monotone, alors Y=g(X) a une densité fY(y) = fX(g⁻¹(y)) · |dg⁻¹/dy|. La méthode de la fonction de distribution cumulative (CDF) est alternative : FY(y) = P(Y≤y) = P(X≤g⁻¹(y)), puis dérivation. Pour des transformations en dimension multiple, le jacobien |J| remplace le facteur scalaire. La transformation de Box-Muller génère des normales à partir d'uniformes : X = √(-2ln(U))·cos(2πV), Y = √(-2ln(U))·sin(2πV).</p>
<div class="highlight-box">
<p><strong>Méthode de l'inverse :</strong> Pour simuler une variable aléatoire de CDF F, on tire U ~ Uniforme(0,1) et on calcule X = F⁻¹(U). Cela fonctionne car P(F⁻¹(U) ≤ x) = P(U ≤ F(x)) = F(x). Pour les distributions sans inverse analytique (Normal, t, chi-deux), des méthodes numériques (algorithme de Newton-Raphson sur F) ou des tables de quantiles sont utilisées. Cette méthode est la base des simulateurs de Monte Carlo.</p>
</div>
<h3>Fonction génératrice des moments et caractéristique</h3>
<p class="resume-text">La fonction génératrice des moments (MGF) MX(t) = E[e^(tX)] génère les moments par dérivation : E[X^n] = M_X^(n)(0). La MGF caractérise uniquement une distribution (si elle existe dans un voisinage de 0). La fonction caractéristique φX(t) = E[e^(itX)] existe toujours et caractérise la distribution. Ces outils prouvent le TCL via la convergence des fonctions caractéristiques (théorème de Lévy). La MGF de la somme de variables indépendantes est le produit des MGF individuelles.</p>
<div class="highlight-box">
<p><strong>Inégalités de concentration :</strong> L'inégalité de Markov P(X≥a) ≤ E[X]/a s'applique à toute variable positive. L'inégalité de Chebyshev P(|X-μ|≥kσ) ≤ 1/k² utilise les deux premiers moments. L'inégalité de Chernoff utilise la MGF et donne des bornes exponentiellement plus fines pour les queues : P(X≥a) ≤ e^(-ta)·M_X(t). Ces inégalités sont fondamentales en théorie des algorithmes, apprentissage automatique (bornes de généralisation) et ingénierie des systèmes fiables.</p>
</div>
<h3>Vecteurs aléatoires et distributions multivariées</h3>
<p class="resume-text">Un vecteur aléatoire X = (X₁,...,Xp) est caractérisé par sa distribution jointe, son vecteur de moyennes μ et sa matrice de covariance Σ (symétrique définie positive). La loi normale multivariée N(μ,Σ) a une densité en exp(-½(x-μ)ᵀΣ⁻¹(x-μ)). Les contours de densité constante sont des ellipsoïdes dont les axes sont les vecteurs propres de Σ. La décomposition de Cholesky Σ = LLᵀ permet de simuler des normales multivariées à partir d'univariées standard.</p>
<div class="highlight-box">
<p><strong>Corrélation partielle :</strong> La corrélation partielle entre Xi et Xj conditionnellement aux autres variables Xk mesure leur lien direct, net des effets des variables de contrôle. Elle se lit dans la matrice de précision Ω = Σ⁻¹ : la corrélation partielle rij|reste = -Ωij/√(Ωii·Ωjj). Une corrélation partielle nulle signifie l'indépendance conditionnelle. Les graphical models gaussiens et les réseaux bayésiens exploitent ces relations pour l'inférence de structure de dépendance.</p>
</div>
"""

enrichments['analyse-donnees/acp'] = """
<h3>Fondements algébriques de l'ACP</h3>
<p class="resume-text">L'ACP cherche les directions de variance maximale dans les données centrées. La première composante principale est le vecteur unitaire v₁ maximisant Var(Xv) = vᵀΣv. Par le théorème spectral, v₁ est le vecteur propre dominant de la matrice de covariance Σ. La k-ème composante est le k-ème vecteur propre de Σ, orthogonal aux précédents. Les valeurs propres λk quantifient la variance expliquée par chaque composante ; la proportion expliquée est λk/Σλi.</p>
<div class="highlight-box">
<p><strong>SVD et ACP :</strong> L'ACP est numériquement calculée via la décomposition en valeurs singulières (SVD) de la matrice X centrée : X = UDVᵀ. Les colonnes de V sont les axes principaux (vecteurs propres de XᵀX/n = Σ). Les colonnes de UD sont les scores (coordonnées dans l'espace réduit). La SVD tronquée (k colonnes) donne la meilleure approximation de rang k au sens des moindres carrés (théorème de Eckart-Young).</p>
</div>
<h3>Choix du nombre de composantes et validation</h3>
<p class="resume-text">Plusieurs critères guident le choix du nombre k de composantes à retenir. Le graphique de la variance expliquée cumulée vise 80-90%. La règle de Kaiser retient les composantes de valeur propre > 1 (pour données centrées-réduites). Le scree plot identifie le "coude" dans la courbe des valeurs propres. La validation croisée (rotation des données, k-fold CV sur la reconstruction) est la méthode la plus rigoureuse. En ML, k est souvent optimisé comme hyperparamètre de la pipeline complète.</p>
<div class="highlight-box">
<p><strong>ACP noyau (Kernel PCA) :</strong> Pour des structures non linéaires, la Kernel PCA applique l'ACP dans un espace de features de haute dimension implicite via un noyau K(xi,xj). La matrice de Gram K (centrée) est diagonalisée pour obtenir les composantes dans cet espace. Le noyau RBF permet d'extraire des structures non linéaires invisibles en ACP linéaire. KPCA est non paramétrique et ne donne pas accès aux vecteurs propres explicites, limitant l'interprétabilité.</p>
</div>
<h3>ACP et réduction de bruit</h3>
<p class="resume-text">En ne retenant que les k composantes majeures et en reconstruisant les données, l'ACP filtre le bruit (variance des composantes mineures). Cette propriété est exploitée en débruitage d'images, en traitement du signal et en génomique. La décomposition NMF (Non-negative Matrix Factorization) impose la non-négativité des facteurs, produisant des composantes interprétables comme des parties d'un tout (visages, topics, spectres). L'analyse en correspondances multiples (ACM) est l'extension de l'ACP aux variables catégorielles.</p>
<div class="highlight-box">
<p><strong>Biplot :</strong> Un biplot superpose les individus (scores) et les variables (loadings) dans le même espace des composantes principales. La longueur d'une flèche représente la contribution de la variable ; son angle avec une composante mesure la corrélation avec celle-ci. Deux variables dont les flèches pointent dans la même direction sont positivement corrélées ; opposées signifie corrélation négative. Les points proches dans le biplot ont des profils similaires. Outil de visualisation puissant pour les données tabulaires.</p>
</div>
"""

enrichments['regression/anova'] = """
<h3>ANOVA à un facteur : fondements</h3>
<p class="resume-text">L'ANOVA (ANalysis Of VAriance) teste l'hypothèse nulle H0 : μ1 = μ2 = ... = μk (égalité des moyennes de k groupes) contre H1 : au moins deux moyennes diffèrent. Elle décompose la variance totale SST = SS_between + SS_within. La statistique F = (SS_between/(k-1)) / (SS_within/(N-k)) suit une loi F(k-1, N-k) sous H0. Un F grand (p-value < α) conduit au rejet de H0. L'ANOVA est une extension du t-test à deux échantillons qui contrôle le risque d'erreur de type I.</p>
<div class="highlight-box">
<p><strong>Hypothèses de l'ANOVA :</strong> L'ANOVA classique requiert normalité des résidus (vérifiée par test de Shapiro-Wilk ou QQ-plot), homoscédasticité (égalité des variances entre groupes, testée par Levene ou Bartlett), et indépendance des observations. La violation de la normalité est acceptable pour de grands échantillons (TCL). Si l'homoscédasticité est violée, utiliser la correction de Welch. Si la normalité est sévèrement violée avec petits n, utiliser le test de Kruskal-Wallis non paramétrique.</p>
</div>
<h3>Comparaisons post-hoc et contrôle des erreurs multiples</h3>
<p class="resume-text">Après un ANOVA significatif, les tests post-hoc identifient quels groupes diffèrent. Sans correction, effectuer k(k-1)/2 tests à α=0,05 gonfle le risque global. La correction de Bonferroni divise α par le nombre de comparaisons (conservateur). Tukey HSD compare toutes les paires avec un taux d'erreur familiale contrôlé exactement. Dunnett compare plusieurs groupes à un contrôle. La procédure de Holm-Bonferroni est plus puissante que Bonferroni tout en contrôlant le FWER. BH (Benjamini-Hochberg) contrôle le FDR pour les études exploratoires.</p>
<div class="highlight-box">
<p><strong>Taille d'effet :</strong> La signification statistique ne dit pas si l'effet est pratiquement important. Eta-carré η² = SS_between/SS_total mesure la proportion de variance expliquée par le facteur (comme R² en régression). Eta-carré partiel η²p et omega-carré ω² sont des alternatives moins biaisées pour de petits échantillons. Cohen suggère η² ≈ 0,01 (petit), 0,06 (moyen), 0,14 (grand). Le d de Cohen pour deux groupes quantifie l'écart en unités d'écart-type.</p>
</div>
<h3>ANOVA à deux facteurs et interactions</h3>
<p class="resume-text">L'ANOVA factorielle à deux facteurs A (niveaux a) et B (niveaux b) décompose la variance en effets principaux A, B et effet d'interaction A×B. L'interaction signifie que l'effet de A dépend du niveau de B (et réciproquement). Les graphiques d'interaction (profils de moyennes) visualisent ces effets : des lignes parallèles indiquent l'absence d'interaction. L'ANOVA à mesures répétées gère les observations dépendantes (même sujet à différents temps/conditions), augmentant la puissance en contrôlant la variabilité inter-individuelle.</p>
<div class="highlight-box">
<p><strong>MANOVA :</strong> La MANOVA (Multivariate ANOVA) teste l'égalité de vecteurs de moyennes multivariés. Elle est préférable à plusieurs ANOVA univariées quand les variables dépendantes sont corrélées, car elle contrôle le risque de type I et exploite les corrélations. Les statistiques de test (Lambda de Wilks, trace de Pillai, trace de Lawley-Hotelling) diffèrent par leur robustesse aux violations des hypothèses. Lorsque la MANOVA est significative, des analyses discriminantes (LDA) identifient les combinaisons linéaires qui séparent le mieux les groupes.</p>
</div>
"""

enrichments['probabilites/conditionnelles'] = """
<h3>Indépendance et indépendance conditionnelle</h3>
<p class="resume-text">Deux événements A et B sont indépendants si P(A∩B) = P(A)·P(B), équivalent à P(A|B) = P(A). L'indépendance est symétrique et peut s'étendre à des familles d'événements (deux à deux vs mutuellement indépendants : la distinction est importante). L'indépendance conditionnelle A ⊥ B|C signifie P(A∩B|C) = P(A|C)·P(B|C). Cette notion est au cœur des graphes probabilistes : elle permet de factoriser des distributions jointes complexes et est la base de l'algorithme de belief propagation.</p>
<div class="highlight-box">
<p><strong>Paradoxe de Simpson :</strong> Une association peut s'inverser quand on conditionne sur une variable de confusion. Exemple classique : admissions à Berkeley (1973), un biais apparent contre les femmes disparaît et s'inverse quand on stratifie par département. L'association marginale P(admis|femme) < P(admis|homme) mais P(admis|femme,dpt) ≥ P(admis|homme,dpt) pour chaque département. Le paradoxe révèle qu'une variable de confusion (choix de département) masque la vraie relation. L'inférence causale nécessite de contrôler les variables pertinentes.</p>
</div>
<h3>Loi des probabilités totales et formule de Bayes</h3>
<p class="resume-text">Si {B1,...,Bn} est une partition de l'espace des événements, la loi des probabilités totales donne P(A) = Σ P(A|Bi)·P(Bi). La formule de Bayes s'en déduit directement : P(Bi|A) = P(A|Bi)·P(Bi) / Σ P(A|Bj)·P(Bj). Ces outils sont fondamentaux pour calculer des probabilités dans des systèmes multi-étapes : fiabilité des systèmes complexes, diagnostic médical, détection de pannes en cascade. Ils permettent de décomposer un problème complexe en sous-problèmes conditionnels plus simples.</p>
<div class="highlight-box">
<p><strong>Chaînes de Markov :</strong> Une chaîne de Markov satisfait la propriété de Markov : P(Xt+1|X0,...,Xt) = P(Xt+1|Xt). L'état futur ne dépend que de l'état présent, pas de l'histoire. La matrice de transition P = [pij] avec pij = P(Xt+1=j|Xt=i) caractérise complètement la chaîne. La distribution stationnaire π satisfait π = πP et représente la distribution d'équilibre. Les chaînes irréductibles et apériodiques convergent vers π : base théorique des algorithmes MCMC et PageRank de Google.</p>
</div>
<h3>Probabilités conditionnelles en apprentissage automatique</h3>
<p class="resume-text">En ML, la probabilité conditionnelle P(Y|X) est l'objet central de la classification probabiliste. La régression logistique modélise directement P(Y=1|X) = σ(wᵀX). Les modèles génératifs (LDA, Naive Bayes) estiment P(X|Y) et P(Y) puis appliquent Bayes. Les modèles discriminants (SVM, réseaux de neurones) apprennent directement la frontière de décision. Le calibrage (Platt scaling, isotonic regression) ajuste les scores du modèle pour obtenir des probabilités correctement calibrées, essentielles pour la prise de décision.</p>
<div class="highlight-box">
<p><strong>Courbes ROC et calibration :</strong> La courbe ROC trace la sensibilité vs (1-spécificité) en faisant varier le seuil de décision. L'AUC-ROC mesure la capacité discriminante du modèle. La courbe de calibration (reliability diagram) compare les probabilités prédites aux fréquences observées : un modèle bien calibré montre une diagonale. Un modèle peut être très discriminant (AUC élevée) mais mal calibré (probabilités systématiquement trop hautes ou basses). Les deux propriétés sont indépendantes et toutes deux importantes.</p>
</div>
"""

enrichments['regression/non-lineaire'] = """
<h3>Régression polynomiale et bases de fonctions</h3>
<p class="resume-text">La régression polynomiale étend la régression linéaire en ajoutant des termes de degré supérieur : Y = β0 + β1X + β2X² + ... + βdX^d + ε. Elle reste linéaire en les paramètres βi, donc les méthodes des moindres carrés s'appliquent directement. Les splines de régression partitionnent le domaine en intervalles et ajustent un polynôme sur chacun avec des contraintes de continuité aux noeuds. Les splines cubiques naturelles imposent en plus la linéarité aux extrémités, réduisant les artefacts aux bords. Les B-splines ont une base numériquement stable.</p>
<div class="highlight-box">
<p><strong>Compromis biais-variance en régression polynomiale :</strong> Un degré d trop faible donne un biais élevé (sous-apprentissage) ; trop élevé donne une variance élevée (sur-apprentissage). La validation croisée sélectionne d optimal. Le phénomène de Runge illustre la divergence des polynômes de haut degré aux extrémités avec des noeuds équidistants. Les splines avec noeuds judicieusement placés évitent ce problème tout en offrant la flexibilité locale nécessaire pour modéliser des relations complexes.</p>
</div>
<h3>Modèles additifs généralisés (GAM)</h3>
<p class="resume-text">Les GAM généralisent la régression linéaire par Y = g(μ) = β0 + f1(X1) + f2(X2) + ... + fp(Xp) où les fi sont des fonctions lisses non paramétriques estimées par splines ou LOESS. La régression de back-fitting (Gauss-Seidel sur les composantes additives) estime itérativement chaque fi. Les GAM offrent l'interprétabilité des modèles additifs (chaque variable a un effet visualisable) tout en capturant les non-linéarités. La régularisation par une pénalité de courbure (intégrale du carré de la dérivée seconde) contrôle le lissage.</p>
<div class="highlight-box">
<p><strong>Régression LOESS :</strong> LOESS (Locally Estimated Scatterplot Smoothing) ajuste une régression polynomiale pondérée dans un voisinage glissant autour de chaque point de prédiction. Les poids décroissent avec la distance selon une fonction tricube. Le paramètre de lissage span (fraction du n utilisée) contrôle le compromis biais-variance. LOESS est entièrement non paramétrique, robuste aux outliers (version robuste) et adaptatif localement, mais ne fournit pas de formule de prédiction explicite et est coûteux en calcul pour de grandes données.</p>
</div>
<h3>Réseaux de neurones comme régresseurs universels</h3>
<p class="resume-text">Le théorème d'approximation universelle établit qu'un réseau de neurones à une couche cachée suffisamment large peut approximer n'importe quelle fonction continue à ε près. En pratique, les réseaux profonds (DNN) sont plus efficaces en paramètres que les réseaux larges pour des fonctions à structure hiérarchique. Les fonctions d'activation ReLU (max(0,x)), GELU, SiLU permettent d'éviter le problème du gradient vanishant. La régularisation dropout, batch normalization et weight decay contrôlent le sur-apprentissage dans les grands réseaux.</p>
<div class="highlight-box">
<p><strong>Régression par processus gaussiens :</strong> Un processus gaussien (GP) est une distribution sur des fonctions : tout sous-ensemble fini de valeurs suit une distribution normale multivariée. Il est défini par une fonction moyenne m(x) et une fonction de covariance (noyau) k(x,x'). La prédiction GP donne une distribution a posteriori exacte sur la fonction, avec incertitude (intervalles de confiance) quantifiée naturellement. Le noyau encode les hypothèses sur la régularité de la fonction. Les GP sont populaires en optimisation bayésienne pour les hyperparamètres de modèles ML.</p>
</div>
"""

def insert_before_quiz(content, extra):
    quiz_start = content.find('<section class="content-section" id="quiz">')
    if quiz_start != -1:
        return content[:quiz_start] + extra + content[quiz_start:]
    else:
        idx = content.rfind('</section>')
        if idx != -1:
            return content[:idx] + extra + content[idx:]
        return content + extra

for key, extra in enrichments.items():
    if key in pages:
        old_len = len(pages[key]['content'])
        pages[key]['content'] = insert_before_quiz(pages[key]['content'], extra)
        new_len = len(pages[key]['content'])
        print(f"  {key}: {old_len} -> {new_len}")
    else:
        print(f"  WARNING: {key} not found in pages")

# Validate JSON
json.dumps(data)
print("\nJSON valid.")

with open('assets/content/statistiques.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done.")
