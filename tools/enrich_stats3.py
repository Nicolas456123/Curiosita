import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/statistiques.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

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
          <li><strong>ACP robuste :</strong> utilise des estimateurs robustes de la matrice de covariance pour réduire l'influence des outliers sur les axes principaux. La méthode MCD (Minimum Covariance Determinant) est la plus connue.</li>
          <li><strong>Kernel PCA :</strong> applique le « kernel trick » pour capturer des structures non linéaires. On projette implicitement les données dans un espace de grande dimension via une fonction noyau (gaussien, polynomial), puis on effectue une ACP dans cet espace transformé.</li>
          <li><strong>ACP probabiliste (PPCA) :</strong> reformule l'ACP comme un modèle génératif à variables latentes gaussiennes. Permet de gérer les données manquantes et de quantifier les incertitudes sur les projections.</li>
          <li><strong>ACP sparse :</strong> impose des contraintes de parcimonie sur les chargements pour que chaque composante soit interprétable comme une combinaison de peu de variables originales.</li>
          <li><strong>Analyse des Correspondances (AC) :</strong> version de l'ACP adaptée aux tableaux de contingence de variables qualitatives — équivalent de l'ACP pour les fréquences.</li>
        </ul>

        <h3>ACP vs autres méthodes de réduction de dimensionnalité</h3>
        <p>L'ACP n'est pas la seule méthode de réduction de dimensionnalité. Ses principaux concurrents sont t-SNE et UMAP :</p>
        <ul>
          <li><strong>ACP :</strong> linéaire, globale, rapide, déterministe, axes interprétables. Idéale pour les données avec structures linéaires et pour la préparation de modèles supervisés.</li>
          <li><strong>t-SNE :</strong> non linéaire, préserve les structures locales (voisinages), excellente pour la visualisation en 2D/3D. Stochastique, lente, ne permet pas de projeter de nouveaux points, axes non interprétables.</li>
          <li><strong>UMAP :</strong> non linéaire, plus rapide que t-SNE, préserve mieux la structure globale. De plus en plus utilisée en bioinformatique et en visualisation de données massives.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Règle pratique :</strong> utiliser l'ACP en premier pour ses propriétés d'interprétabilité et de rapidité. Passer à t-SNE ou UMAP si les structures importantes sont non linéaires et si l'objectif est la visualisation exploratoire plutôt que la modélisation supervisée.</p>
        </div>

        <h3>Applications de l'ACP dans les grandes disciplines</h3>
        <p>L'ACP est omniprésente dans la recherche et l'industrie :</p>
        <ul>
          <li><strong>Génomique :</strong> analyser des jeux de données avec des milliers de gènes (variables) mesurés sur des centaines de patients (individus). Les premières composantes révèlent des structures de populations et des sous-types de maladies.</li>
          <li><strong>Finance :</strong> réduire un univers de centaines d'actions à quelques facteurs communs. Les premières composantes correspondent souvent au « marché » global et à des facteurs sectoriels.</li>
          <li><strong>Reconnaissance faciale :</strong> la méthode Eigenfaces (Turk &amp; Pentland, 1991) représente chaque visage comme une combinaison de « visages propres » (composantes principales d'une base d'images) — une des premières applications industrielles de l'ACP à la vision par ordinateur.</li>
          <li><strong>Psychologie :</strong> identifier les grandes dimensions de la personnalité. Le « Big Five » (ouverture, conscience, extraversion, agréabilité, névrosisme) émerge d'ACP sur des batteries de questionnaires de personnalité.</li>
          <li><strong>Chimie analytique :</strong> analyser des spectres (infrarouge, Raman) pour identifier des molécules ou contrôler la qualité de produits alimentaires ou pharmaceutiques.</li>
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
          <p>Un BF₁₂ &gt; 3 fournit une preuve substantielle en faveur de M₁. Un BF₁₂ &gt; 10 constitue une preuve forte. Un BF₁₂ &lt; 1/3 favorise M₂ (échelle de Jeffreys).</p>
        </div>
        <p>Contrairement à la sélection par AIC ou BIC, le facteur de Bayes intègre naturellement la complexité du modèle via la marginalisation sur tous les paramètres. Il pénalise automatiquement les modèles sur-paramétrés — c'est le principe du rasoir d'Occam bayésien.</p>

        <h3>Réseaux bayésiens</h3>
        <p>Un <strong>réseau bayésien</strong> est un graphe orienté acyclique (DAG) où les nœuds sont des variables aléatoires et les arêtes représentent des dépendances conditionnelles directes. Chaque nœud est associé à une distribution conditionnelle sachant ses parents dans le graphe.</p>
        <p>Ces réseaux permettent de modéliser des structures causales complexes et d'effectuer des inférences efficaces par propagation de croyances. Applications : diagnostic médical (probabilité d'une maladie sachant des symptômes et des tests), prévision météorologique, classification de textes, sécurité des réseaux informatiques.</p>

        <h3>Inférence variationnelle</h3>
        <p>Quand les méthodes MCMC sont trop lentes pour les grands jeux de données, l'<strong>inférence variationnelle</strong> offre une alternative efficace : on approche la loi a posteriori intractable par une famille de distributions paramétriques plus simples, et on optimise les paramètres de cette approximation pour minimiser la divergence de Kullback-Leibler entre l'approximation et la vraie posteriori.</p>
        <p>L'inférence variationnelle est à la base des modèles génératifs modernes : les auto-encodeurs variationnels (VAE) utilisent cette technique pour apprendre des représentations latentes continues de données complexes (images, textes, molécules).</p>

        <h3>Applications de la statistique bayésienne</h3>
        <ul>
          <li><strong>Diagnostic médical :</strong> les tests diagnostiques bayésiens combinent la prévalence de la maladie (prior) et la sensibilité/spécificité du test (vraisemblance) pour calculer la valeur prédictive positive — indispensable pour interpréter correctement un test positif.</li>
          <li><strong>Essais cliniques adaptatifs :</strong> on met à jour la distribution des paramètres au fur et à mesure des recrutements et on peut modifier le protocole (arrêt précoce pour efficacité ou futilité) de façon formellement optimale.</li>
          <li><strong>Astrophysique :</strong> estimer les paramètres cosmologiques (constante de Hubble, densité de matière noire) à partir des données de satellites comme Planck, en intégrant les prédictions théoriques comme prior.</li>
          <li><strong>Machine learning bayésien :</strong> les processus gaussiens fournissent des prédictions avec incertitude quantifiée — essentiels pour les applications critiques (voitures autonomes, optimisation de médicaments par apprentissage actif).</li>
          <li><strong>Finance :</strong> estimer la matrice de covariance des rendements en combinant les données historiques (vraisemblance) avec des priors basés sur des modèles factoriels pour améliorer les allocations de portefeuille.</li>
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

        <h3>Algorithmes de clustering non paramétriques</h3>
        <p>Au-delà du k-means et de la CAH, des algorithmes basés sur la densité ou les graphes permettent de détecter des structures plus complexes :</p>
        <ul>
          <li><strong>DBSCAN (Density-Based Spatial Clustering of Applications with Noise) :</strong> identifie les clusters comme des régions denses séparées par des régions creuses. Deux paramètres : epsilon (rayon de voisinage) et minPts (nombre minimum de voisins). Avantage majeur : détecte automatiquement le nombre de clusters et identifie les points aberrants (bruit).</li>
          <li><strong>Clustering spectral :</strong> construit un graphe de similarité entre individus, puis applique une décomposition spectrale du Laplacien du graphe pour identifier les communautés. Efficace pour les données non linéairement séparables et les réseaux.</li>
          <li><strong>Modèles de mélange gaussien (GMM) :</strong> supposent que les données sont issues d'un mélange de distributions gaussiennes estimé par l'algorithme EM. Fournissent des affectations probabilistes (« doux ») plutôt que déterministes.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>DBSCAN :</strong> un point est un « point coeur » s'il a au moins minPts voisins dans un rayon epsilon. Les points atteignables depuis un point coeur appartiennent au même cluster. Les points n'appartenant à aucun cluster sont des outliers. Cette approche est robuste aux formes de clusters arbitraires et à la présence de bruit.</p>
        </div>

        <h3>Mesures de qualité du clustering</h3>
        <p>Évaluer la qualité d'un clustering sans vérité terrain nécessite des indices internes :</p>
        <ul>
          <li><strong>Indice de silhouette :</strong> s(i) = (b(i) - a(i)) / max(a(i), b(i)), où a(i) est la distance moyenne intra-cluster et b(i) la distance minimale aux autres clusters. Varie de -1 (mal classé) à +1 (bien classé).</li>
          <li><strong>Indice de Calinski-Harabasz :</strong> rapport de la variance inter-clusters à la variance intra-cluster, pondéré par les tailles. Plus élevé = meilleur clustering.</li>
          <li><strong>Indice de Davies-Bouldin :</strong> mesure la similarité moyenne entre chaque cluster et son plus proche voisin. Plus petit = meilleur.</li>
        </ul>

        <h3>Clustering et réduction de dimensionnalité</h3>
        <p>En pratique, le clustering est souvent précédé d'une réduction de dimensionnalité :</p>
        <ol>
          <li>Réduire la dimensionnalité avec l'ACP pour supprimer le bruit et visualiser les données.</li>
          <li>Appliquer la CAH dans l'espace réduit pour choisir le nombre de classes.</li>
          <li>Appliquer k-means (plus rapide) pour la partition finale.</li>
          <li>Interpréter les clusters sur le plan factoriel de l'ACP via le cercle des corrélations.</li>
        </ol>
        <p>Cette approche ACP + CAH + k-means est le standard de l'analyse exploratoire multivariée en sciences sociales, en marketing (segmentation de clientèle) et en bioinformatique (classification de types cellulaires par single-cell sequencing).</p>

        <h3>Applications du clustering dans les grandes disciplines</h3>
        <ul>
          <li><strong>Marketing :</strong> segmentation de clientèle — regrouper les clients selon leurs comportements d'achat, données démographiques et historiques d'achat pour cibler les communications et personnaliser les offres.</li>
          <li><strong>Biologie :</strong> classification phylogénétique des espèces, clustering de gènes co-exprimés dans les données transcriptomiques, identification de sous-types tumoraux pour une médecine de précision.</li>
          <li><strong>Détection de communautés :</strong> dans les réseaux sociaux ou les graphes de citations, identifier les groupes d'individus fortement connectés entre eux et peu connectés avec l'extérieur.</li>
          <li><strong>Compression d'images :</strong> le k-means peut quantifier les couleurs d'une image en réduisant le nombre de couleurs distinctes (de 16 millions à 256) tout en minimisant la distorsion visuelle perçue.</li>
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
        <p>Les méthodes ensemblistes combinent plusieurs modèles pour obtenir des prédictions plus robustes qu'un modèle unique :</p>
        <ul>
          <li><strong>Bagging (Bootstrap Aggregating) :</strong> entraîner K modèles identiques sur K échantillons bootstrap indépendants, puis agréger leurs prédictions (vote majoritaire ou moyenne). Réduit la variance sans augmenter le biais. La <strong>Random Forest</strong> combine le bagging avec une sélection aléatoire de variables à chaque nœud de l'arbre.</li>
          <li><strong>Boosting :</strong> entraîner les modèles séquentiellement, chaque modèle se concentrant sur les exemples mal classés par le précédent. <strong>AdaBoost</strong> (Freund &amp; Schapire, 1997) et <strong>Gradient Boosting</strong> (XGBoost, LightGBM, CatBoost) sont les implémentations les plus efficaces. Réduit le biais.</li>
          <li><strong>Stacking :</strong> entraîner un méta-modèle qui apprend à combiner optimalement les prédictions de plusieurs modèles de base.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>XGBoost :</strong> développé par Chen &amp; Guestrin (2016), il domine les compétitions de machine learning sur données tabulaires. Il combine gradient boosting, régularisation L1/L2, gestion native des valeurs manquantes et parallélisation efficace. Sur de nombreux benchmarks, il surpasse les réseaux de neurones profonds sur des données structurées.</p>
        </div>

        <h3>Validation et métriques d'évaluation</h3>
        <p>Évaluer un modèle de data mining nécessite de mesurer ses performances sur des données non vues pendant l'apprentissage :</p>
        <ul>
          <li><strong>Validation croisée k-fold :</strong> diviser les données en k partitions, entraîner sur k-1 et tester sur la dernière, répéter k fois. La performance estimée est la moyenne des k scores.</li>
          <li><strong>Classification :</strong> exactitude (accuracy), précision (taux de vrais positifs parmi les positifs prédits), rappel (taux de vrais positifs détectés), F1-score, courbe ROC et aire AUC. En cas de déséquilibre de classes, l'AUC et le F1 sont préférables à la simple exactitude.</li>
          <li><strong>Régression :</strong> RMSE (sensible aux grandes erreurs), MAE (robuste), MAPE (en pourcentage, comparable entre séries d'échelles différentes), R² (part de variance expliquée).</li>
        </ul>

        <h3>Prétraitement des données</h3>
        <p>La qualité des résultats de data mining dépend fortement de la préparation des données :</p>
        <ul>
          <li><strong>Gestion des valeurs manquantes :</strong> suppression (si rare et aléatoire), imputation par la médiane/mode (simple et robuste), imputation par modèle KNN ou régression (préserve les corrélations).</li>
          <li><strong>Normalisation :</strong> mise à l'échelle [0,1] (Min-Max scaling) ou standardisation z-score. Indispensable pour les algorithmes basés sur les distances (k-means, SVM, réseaux de neurones).</li>
          <li><strong>Encodage des variables catégorielles :</strong> one-hot encoding (une colonne binaire par modalité), target encoding (remplace par la moyenne de la cible — attention au data leakage), embeddings appris (pour les grandes cardinalités).</li>
        </ul>

        <h3>Enjeux éthiques et responsabilité algorithmique</h3>
        <p>Le data mining soulève des questions éthiques fondamentales :</p>
        <ul>
          <li><strong>Biais algorithmiques :</strong> un modèle entraîné sur des données historiques reproduit et amplifie les discriminations présentes dans ces données. Des algorithmes de recrutement ont été montrés défavorables à certains groupes en reproduisant les biais des recruteurs humains passés.</li>
          <li><strong>Explicabilité (XAI) :</strong> les méthodes LIME (Local Interpretable Model-agnostic Explanations) et SHAP (SHapley Additive exPlanations) permettent d'expliquer les décisions individuelles de modèles boîtes noires.</li>
          <li><strong>Protection des données :</strong> le RGPD impose un droit à l'explication et des contraintes sur les décisions automatisées, ce qui encadre le déploiement de systèmes de data mining.</li>
        </ul>
      </div>"""
)

# =====================================================================
# analyse-donnees/series-temporelles  (13050 -> 15000+)
# =====================================================================
enrich(
    'analyse-donnees/series-temporelles',
    """          <li><strong>MAPE</strong> (Mean Absolute Percentage Error) : 100 × Σ|yₜ - ŷₜ|/|yₜ|/n.</li>
        </ul>
      </div>""",
    """          <li><strong>MAPE</strong> (Mean Absolute Percentage Error) : 100 × Σ|yₜ - ŷₜ|/|yₜ|/n.</li>
        </ul>

        <h3>Modèles SARIMA et saisonnalité</h3>
        <p>Pour les séries avec saisonnalité, le modèle ARIMA est étendu en <strong>SARIMA(p,d,q)(P,D,Q)[s]</strong>, où s est la période saisonnière (12 pour des données mensuelles, 4 pour des données trimestrielles) et (P,D,Q) sont les ordres de la partie saisonnière.</p>
        <p>La détection de la saisonnalité se fait par l'analyse de l'ACF (pics significatifs aux multiples de s) et par des tests statistiques (test de Canova-Hansen, test de Hylleberg-Engle-Granger-Yoo).</p>
        <div class="highlight-box">
          <p><strong>Exemple :</strong> les ventes de glaces suivent un modèle SARIMA(1,1,1)(1,1,1)[12]. La partie non saisonnière capture la dynamique à court terme, la partie saisonnière capture le pic estival récurrent chaque année.</p>
        </div>

        <h3>Cointégration et modèles à correction d'erreur</h3>
        <p>Deux séries non stationnaires peuvent être <strong>cointégrées</strong> si une combinaison linéaire de ces séries est stationnaire. La cointégration capture l'idée d'une relation d'équilibre à long terme entre deux séries.</p>
        <p>Le <strong>modèle à correction d'erreur (ECM)</strong> modélise simultanément la dynamique de court terme (variations) et le retour vers l'équilibre de long terme. Il est fondamental en économétrie : par exemple, le PIB et la consommation sont cointégrés car une déviation temporaire de leur ratio est toujours corrigée à moyen terme.</p>

        <h3>Approches modernes : Prophet et réseaux de neurones</h3>
        <p>Les méthodes classiques ARIMA ont des limitations : elles supposent la linéarité, elles gèrent mal les jours fériés et les événements exceptionnels, elles nécessitent une sélection manuelle des ordres p, d, q.</p>
        <ul>
          <li><strong>Prophet (Facebook, 2017) :</strong> modèle additif qui décompose la série en tendance (par morceaux linéaires ou logistiques), saisonnalités multiples (Fourier) et effets des jours fériés. Très facile à utiliser, robuste aux données manquantes et aux outliers. Idéal pour les séries business avec des effets calendaires.</li>
          <li><strong>Réseaux LSTM (Long Short-Term Memory) :</strong> réseaux de neurones récurrents capables de capturer des dépendances à long terme dans les séries temporelles. Puissants mais nécessitent beaucoup de données et d'hyperparamètres à régler.</li>
          <li><strong>Transformers pour les séries temporelles :</strong> les architectures Transformer (Temporal Fusion Transformer, Informer) généralisent les mécanismes d'attention aux séries temporelles multivariées avec des performances état de l'art.</li>
        </ul>

        <h3>Applications des séries temporelles</h3>
        <p>L'analyse et la prévision des séries temporelles est un domaine transversal aux applications innombrables :</p>
        <ul>
          <li><strong>Finance :</strong> prévision des cours boursiers, gestion des risques (VaR dynamique), trading algorithmique à haute fréquence.</li>
          <li><strong>Énergie :</strong> prévision de la consommation électrique (indispensable pour les gestionnaires de réseaux), prévision de la production d'énergies renouvelables (solaire, éolien).</li>
          <li><strong>Santé publique :</strong> surveillance épidémiologique (nombre de cas de grippe, détection précoce d'épidémies), analyse des tendances de mortalité.</li>
          <li><strong>Météorologie :</strong> les modèles de prévision numérique du temps combinent des équations physiques avec des méthodes statistiques de correction des biais.</li>
          <li><strong>Maintenance prédictive :</strong> détecter les anomalies dans les séries de capteurs industriels pour anticiper les pannes avant qu'elles ne surviennent.</li>
        </ul>
      </div>"""
)

# =====================================================================
# probabilites/bayes  (13766 -> 15000+)
# =====================================================================
enrich(
    'probabilites/bayes',
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Theoreme de Bayes. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>
      </div>""",
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Theoreme de Bayes. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>

        <h3>Le sophisme du procureur</h3>
        <p>Le <strong>sophisme du procureur</strong> (Prosecutor's Fallacy) est une erreur classique d'application du théorème de Bayes dans les contextes judiciaires et médicaux. Il consiste à confondre P(E|H) avec P(H|E), où E est la preuve et H est l'hypothèse.</p>
        <p><strong>Exemple :</strong> une analyse ADN montre que la probabilité d'un match aléatoire est de 1 sur 1 000 000. Le procureur conclut que la probabilité d'innocence est de 1 sur 1 000 000. C'est faux ! Si la population concernée est de 10 millions de personnes, on s'attend à 10 matchs aléatoires. La probabilité que le suspect soit coupable dépend de la prévalence a priori et des autres preuves.</p>
        <div class="highlight-box">
          <p><strong>Application correcte :</strong> P(coupable|match) = P(match|coupable) × P(coupable) / P(match). Si P(coupable) a priori est très faible (1 suspect parmi des millions), même un match ADN fort ne garantit pas la culpabilité. Le théorème de Bayes est un outil central de la médecine légale et du raisonnement forensique.</p>
        </div>

        <h3>Le théorème de Bayes en diagnostique médical</h3>
        <p>Le théorème de Bayes est fondamental pour interpréter correctement les tests médicaux. Intuitivement, un test positif ne signifie pas automatiquement que la maladie est présente — cela dépend de la prévalence de la maladie.</p>
        <p><strong>Exemple numérique :</strong> un test de dépistage du cancer a une sensibilité de 90 % (P(positif|malade) = 0,9) et une spécificité de 95 % (P(négatif|sain) = 0,95). La prévalence de la maladie dans la population testée est de 1 % (P(malade) = 0,01).</p>
        <p>Par Bayes : P(malade|positif) = 0,9 × 0,01 / [0,9 × 0,01 + 0,05 × 0,99] = 0,009 / (0,009 + 0,0495) = 0,009 / 0,0585 ≈ <strong>15,4 %</strong>. Un test positif ne signifie que 15 % de chances d'être réellement malade ! C'est pourquoi les tests de dépistage sont suivis de tests de confirmation plus précis.</p>

        <h3>Mise à jour séquentielle et apprentissage bayésien</h3>
        <p>Un des aspects les plus puissants du théorème de Bayes est sa capacité à traiter les données de façon <strong>séquentielle</strong> : la loi a posteriori après observation de la première donnée devient la loi a priori pour la donnée suivante.</p>
        <p>Cette propriété permet un apprentissage en ligne (online learning) : le modèle est mis à jour à chaque nouvelle observation sans avoir besoin de tout recalculer depuis le début. En machine learning bayésien, cela correspond aux algorithmes de filtrage de Kalman (estimation de l'état d'un système dynamique) et aux méthodes de bandits bayésiens (optimisation séquentielle de décisions).</p>
        <p>En épidémiologie, la mise à jour bayésienne permet d'affiner en temps réel les estimations du nombre de reproduction R₀ d'une épidémie à mesure que de nouvelles données de surveillance sont collectées.</p>
      </div>"""
)

# =====================================================================
# probabilites/conditionnelles  (14244 -> 15000+)
# =====================================================================
enrich(
    'probabilites/conditionnelles',
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Probabilites conditionnelles. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>
      </div>""",
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Probabilites conditionnelles. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>

        <h3>Le problème de Monty Hall</h3>
        <p>Le problème de Monty Hall est l'exemple le plus célèbre d'erreur d'intuition en probabilités conditionnelles. Un candidat choisit une porte parmi trois (derrière l'une se trouve une voiture, derrière les deux autres des chèvres). L'animateur ouvre une des deux autres portes révélant une chèvre. Faut-il changer de porte ?</p>
        <p>Intuitivement, après l'ouverture d'une porte, beaucoup pensent que les deux portes restantes ont chacune une probabilité 1/2. C'est faux. Calculons par Bayes :</p>
        <ul>
          <li>P(voiture derrière porte 1 | animateur ouvre porte 3) = P(animateur ouvre 3 | voiture en 1) × P(voiture en 1) / P(animateur ouvre 3)</li>
          <li>Si voiture en 1 (prob. 1/3) : animateur ouvre 2 ou 3 indifféremment → P = 1/2</li>
          <li>Si voiture en 2 (prob. 1/3) : animateur ouvre forcément 3 → P = 1</li>
          <li>Si voiture en 3 (prob. 1/3) : animateur ne peut pas ouvrir 3 → P = 0</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Résultat :</strong> P(voiture en 1 | animateur ouvre 3) = (1/2 × 1/3) / (1/6 + 1/3 + 0) = (1/6) / (1/2) = <strong>1/3</strong>. P(voiture en 2 | animateur ouvre 3) = <strong>2/3</strong>. Il faut changer de porte pour doubler ses chances ! L'intuition échoue car elle ignore l'information apportée par la stratégie de l'animateur.</p>
        </div>

        <h3>Corrélation, causation et conditionnement</h3>
        <p>La probabilité conditionnelle permet de formaliser la différence entre corrélation et causation. Deux événements A et B peuvent être corrélés (P(A|B) ≠ P(A)) sans qu'il y ait de lien causal entre eux.</p>
        <p><strong>Variable confondante :</strong> si une troisième variable C cause à la fois A et B, alors A et B seront corrélés sans lien causal direct. Exemple : la corrélation entre ventes de glaces et noyades n'implique pas que les glaces causent les noyades — c'est la chaleur (variable confondante) qui augmente à la fois les deux.</p>
        <p>Le <strong>conditionnement par la variable confondante</strong> permet souvent de dissoudre la corrélation apparente : P(noyade|glaces, chaleur) = P(noyade|chaleur). C'est le fondement de la méthode de régression et du contrôle des variables confondantes dans les études épidémiologiques.</p>

        <h3>Chaînes de Markov</h3>
        <p>Une <strong>chaîne de Markov</strong> est un processus stochastique à temps discret où la probabilité de l'état futur ne dépend que de l'état présent, pas des états passés. C'est la <strong>propriété de Markov</strong> (ou sans mémoire) :</p>
        <p>P(Xₙ₊₁ = j | Xₙ = i, Xₙ₋₁, ..., X₀) = P(Xₙ₊₁ = j | Xₙ = i) = pᵢⱼ.</p>
        <p>La matrice de transition P = (pᵢⱼ) résume complètement le comportement de la chaîne. Les chaînes de Markov sont à la base des moteurs de recherche (PageRank de Google), des modèles de génération de texte, des algorithmes MCMC en statistique bayésienne et des modèles de files d'attente en recherche opérationnelle.</p>
      </div>"""
)

# =====================================================================
# probabilites/lois  (13972 -> 15000+)
# =====================================================================
enrich(
    'probabilites/lois',
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Lois de probabilite. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>
      </div>""",
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Lois de probabilite. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>

        <h3>Lois à queues épaisses (heavy tails)</h3>
        <p>La loi normale est omniprésente en statistique, mais de nombreux phénomènes réels suivent des distributions à <strong>queues épaisses</strong>, où les événements extrêmes sont bien plus fréquents que ce que prédit la gaussienne.</p>
        <ul>
          <li><strong>Loi de Pareto (loi puissance) :</strong> f(x) = αxₘᵅ / xᵅ⁺¹. Elle décrit les patrimoines (20 % des personnes possèdent 80 % de la richesse), les tailles de villes, les audiences de sites web, les fréquences de mots. Sa queue décroît en puissance, beaucoup plus lentement qu'une exponentielle.</li>
          <li><strong>Loi de Cauchy :</strong> distribution symétrique à queues si épaisses que l'espérance n'existe pas. Utilisée en physique (distribution du rapport de deux variables normales, spectre de résonance de Lorentz).</li>
          <li><strong>Distributions de valeurs extrêmes (GEV) :</strong> la théorie des valeurs extrêmes (Gumbel, Fréchet, Weibull) décrit la distribution du maximum d'un grand nombre de variables indépendantes. Fondamentale pour la modélisation des risques naturels (crues centennales, vagues extrêmes).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Nassim Nicholas Taleb et le « cygne noir » :</strong> dans ses ouvrages, Taleb critique l'utilisation aveugle de la loi normale dans la finance, qui sous-estime dramatiquement la probabilité des crises extrêmes. Les rendements financiers suivent des distributions à queues épaisses — la crise de 2008 était statistiquement « impossible » selon les modèles gaussiens, mais elle était prévisible avec des distributions plus adaptées.</p>
        </div>

        <h3>Le théorème central limite et ses limites</h3>
        <p>Le <strong>théorème central limite (TCL)</strong> est un des résultats fondateurs de la statistique : la somme de n variables aléatoires indépendantes de même loi (avec espérance et variance finies) converge en distribution vers une loi normale quand n → ∞, quelle que soit la loi d'origine.</p>
        <p>C'est pourquoi la loi normale est si omniprésente : elle émerge naturellement dès que de nombreux facteurs indépendants s'additionnent (taille d'un individu = effet génétique + nutrition + environnement + ...).</p>
        <p><strong>Limites importantes :</strong> le TCL ne s'applique pas si la variance est infinie (distributions à queues trop épaisses) ou si les variables sont dépendantes. Dans ces cas, d'autres théorèmes de convergence s'appliquent : le TCL pour les martingales, le TCL fonctionnel (convergence vers un mouvement brownien).</p>

        <h3>Lois multivariées</h3>
        <p>Quand on observe plusieurs variables simultanément, on a besoin de distributions multivariées :</p>
        <ul>
          <li><strong>Loi normale multivariée :</strong> N(μ, Σ) où μ est le vecteur des moyennes et Σ la matrice de covariance. Les marginales sont normales, et les variables sont indépendantes si et seulement si Σ est diagonale.</li>
          <li><strong>Loi multinomiale :</strong> généralisation de la binomiale à k catégories. Décrit le résultat de n tirages indépendants parmi k possibilités.</li>
          <li><strong>Copules :</strong> fonctions qui lient les distributions marginales à la distribution jointe en capturant la dépendance entre variables. Permettent de modéliser des dépendances complexes (non linéaires, asymétriques) indépendamment des marginales. Très utilisées en finance pour modéliser les dépendances entre défauts de crédit.</li>
        </ul>
      </div>"""
)

# =====================================================================
# probabilites/variables  (14041 -> 15000+)
# =====================================================================
enrich(
    'probabilites/variables',
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Variables aleatoires. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>
      </div>""",
    """<h3>Erreurs fréquentes et pièges</h3>
<p>Certaines erreurs reviennent systématiquement chez les débutants en Variables aleatoires. Les identifier permet de progresser plus rapidement et d'acquérir des automatismes corrects.</p>
<ul>
<li>Confondre les notations et les conventions d'écriture</li>
<li>Oublier de vérifier les conditions d'application des formules</li>
<li>Négliger les unités et les ordres de grandeur</li>
<li>Appliquer un résultat hors de son domaine de validité</li>
</ul>

        <h3>Moments et fonctions génératrices</h3>
        <p>Les <strong>moments</strong> d'une variable aléatoire X sont les espérances des puissances entières de X. Le moment d'ordre k est E[Xᵏ]. Les moments centrés sont E[(X - μ)ᵏ].</p>
        <ul>
          <li>Moment d'ordre 1 : E[X] = μ (espérance, centre de gravité)</li>
          <li>Moment centré d'ordre 2 : E[(X - μ)²] = σ² (variance)</li>
          <li>Moment centré d'ordre 3 normalisé : asymétrie (skewness)</li>
          <li>Moment centré d'ordre 4 normalisé : aplatissement (kurtosis)</li>
        </ul>
        <p>La <strong>fonction génératrice des moments</strong> Mₓ(t) = E[eᵗˣ] encode tous les moments : Mₓᵏ(0) = E[Xᵏ]. La <strong>fonction caractéristique</strong> φₓ(t) = E[eⁱᵗˣ] existe toujours (même quand les moments n'existent pas) et caractérise complètement la distribution.</p>
        <div class="highlight-box">
          <p><strong>Propriété fondamentale :</strong> si X et Y sont indépendantes, alors Mₓ₊ᵧ(t) = Mₓ(t) × Mᵧ(t). Cette propriété de multiplicativité simplifie énormément le calcul de la distribution d'une somme de variables indépendantes — c'est la démonstration élégante du théorème central limite.</p>
        </div>

        <h3>Inégalités probabilistes</h3>
        <p>Les <strong>inégalités probabilistes</strong> bornent les probabilités sans connaître la distribution exacte — seulement les moments :</p>
        <ul>
          <li><strong>Inégalité de Markov :</strong> pour X ≥ 0 et a &gt; 0, P(X ≥ a) ≤ E[X]/a. Borne grossière mais universelle.</li>
          <li><strong>Inégalité de Tchebychev :</strong> P(|X - μ| ≥ kσ) ≤ 1/k². Pour k = 2, au moins 75 % des données sont à ± 2σ (quelle que soit la distribution). Pour k = 3, au moins 89 %.</li>
          <li><strong>Inégalité de Hoeffding :</strong> borne plus précise pour des variables bornées. Fondamentale en apprentissage statistique pour les garanties de généralisation.</li>
          <li><strong>Inégalité de Jensen :</strong> pour une fonction convexe f, E[f(X)] ≥ f(E[X]). Par exemple E[X²] ≥ (E[X])², ce qui redonne que la variance est positive.</li>
        </ul>

        <h3>Convergence des variables aléatoires</h3>
        <p>Il existe plusieurs modes de convergence d'une suite de variables aléatoires (Xₙ) vers une limite X :</p>
        <ul>
          <li><strong>Convergence en probabilité :</strong> P(|Xₙ - X| &gt; ε) → 0 pour tout ε &gt; 0. C'est la loi des grands nombres (faible).</li>
          <li><strong>Convergence presque sûre :</strong> P(lim Xₙ = X) = 1. Plus forte que la convergence en probabilité. C'est la loi des grands nombres (forte).</li>
          <li><strong>Convergence en loi (en distribution) :</strong> la fonction de répartition de Xₙ converge vers celle de X. C'est le théorème central limite : √n(X̄ₙ - μ)/σ → N(0,1).</li>
          <li><strong>Convergence en moyenne quadratique (L²) :</strong> E[(Xₙ - X)²] → 0. Implique la convergence en probabilité.</li>
        </ul>
        <p>Ces modes de convergence sont au cœur de la rigueur mathématique de la statistique et permettent de justifier formellement les méthodes asymptotiques utilisées dans les tests et les estimations.</p>
      </div>"""
)

# =====================================================================
# regression/anova  (14235 -> 15000+)
# =====================================================================
enrich(
    'regression/anova',
    """        <h3>Lien avec la régression</h3>
        <p>L'ANOVA est un cas particulier de la régression multiple avec des variables indicatrices. Un facteur à k niveaux est codé par (k−1) variables dummy. Le test F de l'ANOVA est identique au test F global de la régression correspondante. Cette unification sous le <strong>modèle linéaire général</strong> est fondamentale en statistique moderne.</p>
      </div""",
    """        <h3>Lien avec la régression</h3>
        <p>L'ANOVA est un cas particulier de la régression multiple avec des variables indicatrices. Un facteur à k niveaux est codé par (k−1) variables dummy. Le test F de l'ANOVA est identique au test F global de la régression correspondante. Cette unification sous le <strong>modèle linéaire général</strong> est fondamentale en statistique moderne.</p>

        <h3>ANOVA à deux facteurs</h3>
        <p>L'<strong>ANOVA à deux facteurs</strong> (bifactorielle) examine simultanément l'effet de deux variables catégorielles et leur interaction. Le modèle s'écrit :</p>
        <p>Yᵢⱼₖ = μ + αᵢ + βⱼ + (αβ)ᵢⱼ + εᵢⱼₖ</p>
        <p>où αᵢ est l'effet du facteur A, βⱼ l'effet du facteur B, et (αβ)ᵢⱼ l'<strong>effet d'interaction</strong> (le niveau du facteur A modifie l'effet du facteur B). L'interaction est le terme le plus informatif et le plus souvent mal interprété.</p>
        <div class="highlight-box">
          <p><strong>Interprétation graphique :</strong> tracer les moyennes de chaque groupe pour chaque combinaison de facteurs. Si les lignes reliant les points sont parallèles, il n'y a pas d'interaction. Si elles se croisent ou divergent, l'interaction est significative — l'effet d'un facteur dépend du niveau de l'autre.</p>
        </div>
        <p><strong>Exemple :</strong> on compare l'effet d'un médicament (présent/absent) et du sexe (H/F) sur un outcome. L'interaction « médicament × sexe » est significative si le médicament est efficace chez les hommes mais pas chez les femmes (ou vice versa). Ignorer l'interaction conduirait à des conclusions erronées sur l'effet global du médicament.</p>

        <h3>MANOVA (Analyse de variance multivariée)</h3>
        <p>La <strong>MANOVA</strong> est la généralisation de l'ANOVA à plusieurs variables dépendantes simultanées. Plutôt que de faire plusieurs ANOVA séparées (ce qui multiplierait les risques d'erreur de type I), la MANOVA teste si les vecteurs de moyennes diffèrent entre les groupes.</p>
        <p>Statistiques de test : critère de Wilks' Lambda (Λ), trace de Pillai, racine maximale de Roy. Ces statistiques sont approximativement distribuées selon des lois F.</p>
        <p>La MANOVA est courante en psychologie (comparer des profils de scores sur plusieurs tests entre groupes), en écologie (comparer des communautés biologiques entre habitats) et en sciences sociales (comparer des attitudes multidimensionnelles entre populations).</p>

        <h3>Puissance et taille d'effet en ANOVA</h3>
        <p>Comme tout test statistique, l'ANOVA peut être non significative faute de puissance statistique (trop peu d'observations), même si les effets sont réels. La <strong>puissance</strong> dépend de la taille de l'effet (η² ou f de Cohen), de la taille de l'échantillon et du niveau α.</p>
        <ul>
          <li><strong>η² (eta-carré) :</strong> proportion de la variance totale expliquée par le facteur. η² = SCfacteur/SCtotal. Analogue au R² de la régression.</li>
          <li><strong>η² partiel :</strong> proportion de la variance non expliquée par les autres facteurs qui est expliquée par ce facteur. Préféré en ANOVA multifactorielle.</li>
          <li><strong>f de Cohen :</strong> mesure de taille d'effet standardisée : 0,1 = petit, 0,25 = moyen, 0,4 = grand.</li>
        </ul>
        <p>L'analyse a priori de puissance (via G*Power ou des formules analytiques) est indispensable pour calculer la taille d'échantillon nécessaire avant de conduire une étude — c'est une exigence croissante des journaux scientifiques.</p>
      </div"""
)

# =====================================================================
# regression/non-lineaire  (14940 -> 15000+)
# =====================================================================
enrich(
    'regression/non-lineaire',
    """          <li><strong>Principe de parcimonie :</strong> préférer le modèle le plus simple qui ajuste bien les données</li>
        </ul>
      </div>""",
    """          <li><strong>Principe de parcimonie :</strong> préférer le modèle le plus simple qui ajuste bien les données</li>
        </ul>

        <h3>Modèles additifs généralisés (GAM)</h3>
        <p>Les <strong>modèles additifs généralisés</strong> (GAM) généralisent la régression multiple en remplaçant les effets linéaires des prédicteurs par des fonctions lisses non paramétriques :</p>
        <p>g(E[Y]) = α + f₁(X₁) + f₂(X₂) + ... + fₚ(Xₚ)</p>
        <p>où g est la fonction de lien et les fⱼ sont des fonctions lisses estimées par des splines de régression ou des bases de splines pénalisées. Les GAM permettent de capturer des effets non linéaires complexes tout en conservant l'interprétabilité additive des effets individuels.</p>
        <div class="highlight-box">
          <p><strong>Avantages des GAM :</strong> flexibilité (capture tout type de non-linéarité), interprétabilité (on visualise l'effet de chaque variable), contrôle du lissage par des critères automatiques (GCV, REML). Le package mgcv en R est la référence.</p>
        </div>

        <h3>Régression par processus gaussiens</h3>
        <p>La <strong>régression par processus gaussiens (GPR)</strong> est une approche bayésienne non paramétrique où on place un prior sur l'espace des fonctions. Un processus gaussien est entièrement spécifié par sa fonction de moyenne et sa <strong>fonction de covariance (noyau)</strong>.</p>
        <p>La GPR produit des prédictions avec incertitude quantifiée : pour chaque nouveau point x*, elle prédit une distribution gaussienne P(y*|x*, données), pas seulement une valeur ponctuelle. Elle s'adapte automatiquement à la complexité des données via le noyau choisi (noyau RBF, Matérn, périodique...).</p>
        <p>Applications : optimisation bayésienne (trouver le minimum d'une fonction coûteuse à évaluer — réglage d'hyperparamètres en machine learning), émulation de modèles de simulation complexes en climatologie et en ingénierie.</p>

        <h3>Réseaux de neurones comme régresseurs universels</h3>
        <p>Le <strong>théorème d'approximation universelle</strong> établit qu'un réseau de neurones à une seule couche cachée suffisamment large peut approximer n'importe quelle fonction continue sur un compact. En pratique, les réseaux profonds (deep learning) permettent d'apprendre des fonctions de régression très complexes à partir de grandes quantités de données.</p>
        <ul>
          <li><strong>Régression par MLP (Multi-Layer Perceptron) :</strong> remplace la couche de sortie softmax par une couche linéaire. Efficace pour les données tabulaires avec des interactions non linéaires complexes.</li>
          <li><strong>Réseaux convolutifs (CNN) :</strong> régresseurs sur les images (estimation de la profondeur, âge facial, valeur immobilière à partir d'une photo).</li>
          <li><strong>Réseaux récurrents / Transformers :</strong> régression sur des séquences temporelles ou textuelles.</li>
        </ul>
        <p>La régression par réseau de neurones souffre cependant d'un manque d'interprétabilité et nécessite de grandes quantités de données et un réglage soigneux des hyperparamètres. Les méthodes de régression non linéaire classiques (polynomiale, logistique, GAM) restent préférables quand les données sont limitées ou quand l'interprétabilité est requise.</p>
      </div>"""
)

# Verify lengths
short_keys = ['analyse-donnees/acp', 'analyse-donnees/bayesiennes', 'analyse-donnees/classification',
              'analyse-donnees/data-mining', 'analyse-donnees/series-temporelles',
              'probabilites/bayes', 'probabilites/conditionnelles', 'probabilites/lois', 'probabilites/variables',
              'regression/anova', 'regression/non-lineaire']

for key in short_keys:
    l = len(pages[key]['content'])
    status = 'OK' if l >= 15000 else 'SHORT'
    print(f'[{status}] {key}: {l} chars')

# Save
with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/statistiques.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done!")
