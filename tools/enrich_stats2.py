import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/statistiques.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# =====================================================================
# Helper: insert extra content before </div>\n    </section>\n\n    <section ... id="quiz">
# =====================================================================

def enrich(key, old_end, new_end):
    c = pages[key]['content']
    if old_end not in c:
        print(f"WARNING: pattern not found in {key}")
        return
    pages[key]['content'] = c.replace(old_end, new_end, 1)

# =====================================================================
# analyse-donnees/acp  (14081 -> 15000+)
# =====================================================================
enrich(
    'analyse-donnees/acp',
    """          <li><strong>L'ACP n'est pas une fin en soi :</strong> c'est un outil exploratoire qui prépare souvent une classification ou une régression.</li>
        </ul>
      </div>""",
    """          <li><strong>L'ACP n'est pas une fin en soi :</strong> c'est un outil exploratoire qui prépare souvent une classification ou une régression.</li>
        </ul>

        <h3>Variantes et extensions de l'ACP</h3>
        <p>Depuis sa formalisation par Hotelling, l'ACP a donné naissance à de nombreuses variantes adaptées à des contextes spécifiques :</p>
        <ul>
          <li><strong>ACP robuste :</strong> utilise des estimateurs robustes de la matrice de covariance pour réduire l'influence des outliers sur les axes principaux. La méthode MCD (Minimum Covariance Determinant) est la plus répandue.</li>
          <li><strong>Kernel PCA :</strong> applique le « kernel trick » pour capturer des structures non linéaires. On projette implicitement les données dans un espace de grande dimension via une fonction noyau (gaussien, polynomial), puis on effectue une ACP dans cet espace.</li>
          <li><strong>ACP probabiliste (PPCA) :</strong> reformule l'ACP comme un modèle génératif à variables latentes gaussiennes. Permet de gérer les données manquantes et de calculer des incertitudes.</li>
          <li><strong>ACP sparse :</strong> impose des contraintes de parcimonie sur les chargements pour que chaque composante soit interprétable comme une combinaison de peu de variables.</li>
          <li><strong>ACD (Analyse des Correspondances) :</strong> version de l'ACP pour les tableaux de contingence de variables qualitatives.</li>
        </ul>

        <h3>ACP vs autres méthodes de réduction de dimensionnalité</h3>
        <p>L'ACP n'est pas la seule méthode de réduction de dimensionnalité. Son concurrent le plus connu est <strong>t-SNE</strong> (t-Distributed Stochastic Neighbor Embedding, van der Maaten, 2008), suivi par <strong>UMAP</strong> :</p>
        <ul>
          <li><strong>ACP :</strong> linéaire, globale, rapide (O(p³) pour la décomposition), déterministe, les axes sont interprétables. Idéale pour les données avec structures linéaires et pour la préparation de modèles supervisés.</li>
          <li><strong>t-SNE :</strong> non linéaire, préserve les structures locales (voisinages), excellente pour la visualisation en 2D/3D. Stochastique, lente, ne permet pas de projeter de nouveaux points, les axes ne sont pas interprétables.</li>
          <li><strong>UMAP :</strong> non linéaire, plus rapide que t-SNE, préserve mieux la structure globale. De plus en plus utilisée en bioinformatique et en visualisation de données massives.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Règle pratique :</strong> utiliser l'ACP en premier pour ses propriétés d'interprétabilité et de rapidité. Passer à t-SNE ou UMAP si les structures importantes sont non linéaires et si l'objectif est la visualisation exploratoire plutôt que la modélisation.</p>
        </div>

        <h3>Applications de l'ACP dans les grandes disciplines</h3>
        <p>L'ACP est omniprésente dans la recherche et l'industrie :</p>
        <ul>
          <li><strong>Génomique :</strong> analyser des jeux de données avec des milliers de gènes (variables) mesurés sur des centaines de patients (individus). Les premières composantes principales révèlent des structures de populations et des sous-types de maladies.</li>
          <li><strong>Finance :</strong> réduire un univers de centaines d'actions à quelques facteurs communs. Les premières composantes correspondent souvent au « marché » (premier facteur, corrélé à tous les rendements) et à des facteurs sectoriels.</li>
          <li><strong>Traitement d'images :</strong> la méthode Eigenfaces (Turk &amp; Pentland, 1991) représente chaque visage comme une combinaison de « eigenfaces » (composantes principales de la base d'images) et est utilisée pour la reconnaissance faciale.</li>
          <li><strong>Chimie analytique :</strong> analyser des spectres (infrarouge, Raman) pour identifier des molécules ou contrôler la qualité des produits.</li>
          <li><strong>Psychologie :</strong> identifier les grandes dimensions de la personnalité (le « Big Five » — ouverture, conscience, extraversion, agréabilité, névrosisme — émerge d'ACP sur des batteries de questionnaires).</li>
        </ul>
      </div>"""
)

# =====================================================================
# analyse-donnees/bayesiennes  (13329 -> 15000+)
# =====================================================================
enrich(
    'analyse-donnees/bayesiennes',
    """          <li>Avec beaucoup de données, les deux approches convergent vers les mêmes conclusions (le prior a moins d'influence).</li>
        </ul>
      </div>""",
    """          <li>Avec beaucoup de données, les deux approches convergent vers les mêmes conclusions (le prior a moins d'influence).</li>
        </ul>

        <h3>Facteur de Bayes et sélection de modèles</h3>
        <p>En inférence bayésienne, on compare deux modèles M₁ et M₂ à l'aide du <strong>facteur de Bayes</strong> :</p>
        <div class="highlight-box">
          <p><strong>BF₁₂ = P(données|M₁) / P(données|M₂)</strong></p>
          <p>Un BF₁₂ &gt; 3 fournit une preuve substantielle en faveur de M₁. Un BF₁₂ &gt; 10 constitue une preuve forte. Un BF₁₂ &lt; 1/3 favorise M₂.</p>
        </div>
        <p>Contrairement à la sélection par critère d'information (AIC, BIC), le facteur de Bayes intègre naturellement la complexité du modèle via la marginalisation sur les paramètres. Il pénalise automatiquement les modèles sur-paramétrés (principe du rasoir d'Occam bayésien).</p>

        <h3>Réseaux bayésiens</h3>
        <p>Un <strong>réseau bayésien</strong> est un graphe orienté acyclique (DAG) où les nœuds sont des variables aléatoires et les arêtes représentent des dépendances conditionnelles. Chaque nœud est associé à une distribution conditionnelle sachant ses parents.</p>
        <p>Ils permettent de modéliser des structures causales complexes et d'effectuer des inférences efficaces (propagation de croyances). Applications : diagnostic médical (probabilité de maladie sachant des symptômes), prévision météorologique, systèmes de recommandation, sécurité des réseaux.</p>

        <h3>Inférence variationnelle</h3>
        <p>Quand les méthodes MCMC sont trop lentes (grandes données, grands modèles), l'<strong>inférence variationnelle</strong> (VI) offre une alternative : on approche la loi a posteriori par une famille de distributions paramétriques plus simples et on optimise les paramètres de cette approximation pour minimiser la divergence de Kullback-Leibler.</p>
        <p>L'inférence variationnelle est à la base des modèles génératifs modernes : les auto-encodeurs variationnels (VAE) utilisent VI pour apprendre des représentations latentes continues de données complexes (images, textes). C'est une des briques fondamentales du deep learning génératif.</p>

        <h3>Applications de la statistique bayésienne</h3>
        <ul>
          <li><strong>Médecine :</strong> les tests diagnostiques bayésiens combinent la prévalence de la maladie (prior) et la sensibilité/spécificité du test (vraisemblance) pour calculer la valeur prédictive positive — indispensable pour interpréter un test positif correctement.</li>
          <li><strong>Essais cliniques adaptatifs :</strong> on met à jour la distribution des paramètres au fur et à mesure des recrutements et on peut modifier le protocole (arrêt précoce pour efficacité ou futilité) de façon formellement optimale.</li>
          <li><strong>Astrophysique :</strong> estimer les paramètres cosmologiques (constante de Hubble, densité de matière noire) à partir des données de satellites comme Planck, en intégrant les connaissances théoriques comme prior.</li>
          <li><strong>Machine learning bayésien :</strong> les processus gaussiens, les machines à vecteurs de support probabilistes et les réseaux de neurones bayésiens fournissent des prédictions avec quantification de l'incertitude — essentiel pour les applications critiques (voitures autonomes, médecine).</li>
          <li><strong>Finance :</strong> estimer la matrice de covariance des rendements pour la gestion de portefeuille en combinant les données historiques (vraisemblance) avec des priors basés sur des modèles factoriels.</li>
        </ul>
      </div>"""
)

# =====================================================================
# analyse-donnees/classification  (13024 -> 15000+)
# =====================================================================
enrich(
    'analyse-donnees/classification',
    """          <li><strong>En pratique :</strong> on combine souvent les deux — la CAH pour explorer et choisir k, puis k-means pour la partition finale.</li>
        </ul>
      </div>""",
    """          <li><strong>En pratique :</strong> on combine souvent les deux — la CAH pour explorer et choisir k, puis k-means pour la partition finale.</li>
        </ul>

        <h3>Autres algorithmes de clustering</h3>
        <p>Au-delà du k-means et de la CAH, de nombreux autres algorithmes de classification existent, chacun adapté à des structures particulières :</p>
        <ul>
          <li><strong>DBSCAN (Density-Based Spatial Clustering of Applications with Noise) :</strong> identifie les clusters comme des régions denses séparées par des régions creuses. Avantage majeur : il détecte automatiquement le nombre de clusters et identifie les points de bruit. Il gère les clusters de formes arbitraires (pas nécessairement convexes).</li>
          <li><strong>Clustering spectral :</strong> construit un graphe de similarité entre individus, puis applique une décomposition spectrale du Laplacien pour identifier les communautés. Très efficace pour les données non linéairement séparables et les réseaux.</li>
          <li><strong>Modèles de mélange gaussien (GMM) :</strong> supposent que les données sont issues d'un mélange de distributions gaussiennes. Estimés par l'algorithme EM (Expectation-Maximization), ils fournissent des affectations probabilistes (doux) plutôt que déterministes (dur comme k-means).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>DBSCAN en pratique :</strong> deux paramètres seulement — epsilon (rayon de voisinage) et minPts (nombre minimum de voisins pour qu'un point soit un « point coeur »). Un point est un outlier (bruit) s'il n'est pas à portée d'aucun cluster. Idéal pour les données géographiques ou avec des groupes de formes irrégulières.</p>
        </div>

        <h3>Mesures de qualité d'un clustering</h3>
        <p>Évaluer la qualité d'un clustering sans vérité terrain est une question ouverte. Les indices internes mesurent la cohérence interne du clustering :</p>
        <ul>
          <li><strong>Indice de silhouette :</strong> s(i) = (b(i) - a(i)) / max(a(i), b(i)) où a(i) est la distance moyenne intra-cluster et b(i) la distance minimale aux autres clusters. Varie de -1 (mal classé) à +1 (bien classé).</li>
          <li><strong>Indice de Calinski-Harabasz (Variance Ratio Criterion) :</strong> rapport de la dispersion inter-clusters à la dispersion intra-cluster, multiplié par n/(k-1). Plus élevé = meilleur clustering.</li>
          <li><strong>Indice de Davies-Bouldin :</strong> mesure le rapport entre la dispersion intra-cluster et la séparation inter-clusters. Plus petit = meilleur.</li>
        </ul>
        <p>Quand une vérité terrain est disponible (clustering supervisé), on peut utiliser des indices externes comme le Rand Index ou le V-measure.</p>

        <h3>Clustering et réduction de dimensionnalité</h3>
        <p>En pratique, les méthodes de clustering sont souvent combinées avec la réduction de dimensionnalité :</p>
        <ol>
          <li>Réduire la dimensionnalité avec l'ACP (ou t-SNE) pour visualiser et dé-bruiter les données.</li>
          <li>Appliquer un algorithme de clustering (k-means, CAH) dans l'espace réduit.</li>
          <li>Interpréter les clusters sur le plan factoriel de l'ACP.</li>
        </ol>
        <p>Cette approche « ACP + CAH » est un standard de l'analyse exploratoire multivariée en sciences sociales, en marketing et en bioinformatique. Le plan factoriel permet de visualiser les clusters, et le cercle des corrélations d'interpréter ce qui distingue les groupes.</p>

        <h3>Applications du clustering dans les grandes disciplines</h3>
        <ul>
          <li><strong>Marketing :</strong> segmentation de clientèle — regrouper les clients selon leurs comportements d'achat pour adapter les offres et les communications.</li>
          <li><strong>Biologie :</strong> classification phylogénétique des espèces, clustering de gènes co-exprimés dans les données RNA-seq, identification de types cellulaires par single-cell sequencing.</li>
          <li><strong>Détection de communautés :</strong> dans les réseaux sociaux ou les graphes de citations scientifiques, identifier les groupes d'individus fortement connectés entre eux.</li>
          <li><strong>Compression d'images :</strong> k-means peut être utilisé pour quantifier les couleurs d'une image en réduisant le nombre de couleurs distinctes tout en minimisant la distorsion visuelle.</li>
        </ul>
      </div>"""
)

# =====================================================================
# analyse-donnees/data-mining  (13235 -> 15000+)
# =====================================================================
enrich(
    'analyse-donnees/data-mining',
    """          <li><strong>Déploiement :</strong> mettre en production et surveiller le modèle.</li>
        </ul>
      </div>""",
    """          <li><strong>Déploiement :</strong> mettre en production et surveiller le modèle.</li>
        </ul>

        <h3>Méthodes ensemblistes</h3>
        <p>Les méthodes ensemblistes combinent plusieurs modèles (souvent des arbres de décision) pour obtenir des prédictions plus robustes et précises qu'un modèle unique :</p>
        <ul>
          <li><strong>Bagging (Bootstrap Aggregating) :</strong> on entraîne K modèles identiques sur K échantillons bootstrap, puis on agrège leurs prédictions (vote majoritaire ou moyenne). Réduit la variance. La <strong>Random Forest</strong> est l'application la plus connue : elle combine le bagging avec une sélection aléatoire de variables à chaque nœud.</li>
          <li><strong>Boosting :</strong> on entraîne les modèles séquentiellement, chaque modèle se concentrant sur les erreurs du précédent. <strong>AdaBoost</strong> (1997) et <strong>Gradient Boosting</strong> (XGBoost, LightGBM, CatBoost) sont les implémentations dominantes. Réduit le biais.</li>
          <li><strong>Stacking :</strong> on entraîne un méta-modèle qui apprend à combiner les prédictions de plusieurs modèles de base.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>XGBoost (eXtreme Gradient Boosting) :</strong> développé par Chen &amp; Guestrin (2016), il domine les compétitions de machine learning sur données tabulaires (Kaggle). Il combine gradient boosting, régularisation L1/L2 et optimisation d'arbre efficace. Sur de nombreux benchmarks, il surpasse les réseaux de neurones profonds sur des données structurées.</p>
        </div>

        <h3>Validation croisée et métriques d'évaluation</h3>
        <p>Évaluer un modèle de data mining nécessite de mesurer ses performances sur des données qu'il n'a pas vues pendant l'apprentissage :</p>
        <ul>
          <li><strong>Validation croisée k-fold :</strong> diviser les données en k partitions, entraîner sur k-1 et tester sur la dernière, répéter k fois. La performance est la moyenne des k scores.</li>
          <li><strong>Classification :</strong> exactitude (accuracy), précision, rappel, F1-score, courbe ROC et aire sous la courbe (AUC). En cas de déséquilibre de classes, l'AUC et le F1 sont préférables à la simple exactitude.</li>
          <li><strong>Régression :</strong> RMSE (Root Mean Square Error), MAE (Mean Absolute Error), R². Le RMSE est plus sensible aux grandes erreurs ; le MAE est plus robuste.</li>
        </ul>

        <h3>Prétraitement des données</h3>
        <p>La qualité des résultats de data mining dépend fortement de la qualité des données. Les étapes de prétraitement sont souvent les plus chronophages :</p>
        <ul>
          <li><strong>Gestion des valeurs manquantes :</strong> suppression (si rare), imputation par la médiane/mode, imputation par modèle (régression, KNN-imputer).</li>
          <li><strong>Normalisation et standardisation :</strong> mise à l'échelle [0,1] (Min-Max scaling) ou standardisation (z-score). Nécessaire pour les algorithmes basés sur les distances (k-means, SVM, réseaux de neurones).</li>
          <li><strong>Encodage des variables catégorielles :</strong> one-hot encoding (crée une colonne binaire par modalité), label encoding (code ordinal), target encoding (remplace par la moyenne de la cible).</li>
          <li><strong>Ingénierie des caractéristiques (feature engineering) :</strong> créer de nouvelles variables à partir des variables existantes pour capturer des interactions ou des effets non linéaires.</li>
        </ul>

        <h3>Enjeux éthiques du data mining</h3>
        <p>Le data mining soulève des questions éthiques fondamentales qui font l'objet d'une réglementation croissante :</p>
        <ul>
          <li><strong>Biais algorithmiques :</strong> un modèle entraîné sur des données historiques peut reproduire et amplifier les biais humains présents dans ces données. Exemples : algorithmes de recrutement discriminatoires, scoring de crédit défavorisant certaines communautés.</li>
          <li><strong>Explicabilité (XAI) :</strong> les modèles boîtes noires (forêts aléatoires, réseaux de neurones) sont difficiles à interpréter. Les méthodes LIME et SHAP (SHapley Additive exPlanations) permettent d'expliquer les décisions individuelles.</li>
          <li><strong>Protection des données :</strong> le RGPD impose des droits aux personnes concernées (droit à l'explication, droit à l'effacement) qui contraignent le déploiement de systèmes de data mining automatisés.</li>
        </ul>
      </div>"""
)

# =====================================================================
# analyse-donnees/series-temporelles  (13050 -> 15000+)
# =====================================================================
# First find the end of the contenu section
old_st = """        <h3>Stationnarité</h3>
        <p>Une série est <strong>stationnaire</strong> si ses propriétés statistiques (moyenne, variance, autocorrélation) ne changent pas au cours du temps. La stationnarité est une condition nécessaire pour appliquer les modèles ARMA."""

# Read the full content to find the exact closing
import_section = pages['analyse-donnees/series-temporelles']['content']
# Find what comes after "modèles ARMA"
idx = import_section.find("La stationnarité est une condition nécessaire pour appliquer les modèles ARMA")
# Get the rest up to the quiz section
remaining = import_section[idx:idx+3000]
print("== series-temporelles after ARMA ==")
print(remaining[:1500])
