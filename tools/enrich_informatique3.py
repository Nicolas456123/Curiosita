"""
Script to enrich informatique articles - supplementary content to append.
All articles are rewritten from scratch to reach 15000+ chars.
"""
import json
import os

os.chdir(r'C:\Users\nicol\Desktop\Projets\Divers\Curiosita')

with open('assets/content/informatique.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# Helper to append content inside the div.course-content block
def append_to_content(page_key, new_html):
    content = pages[page_key]['content']
    # Insert before the closing </div></section>
    closing = '</div>\n    </section>'
    if closing in content:
        pages[page_key]['content'] = content.replace(closing, new_html + '\n' + closing)
    else:
        pages[page_key]['content'] = content + new_html

# ============================================================
# Supplement for bases-de-donnees/sql
# ============================================================
append_to_content('bases-de-donnees/sql', """
<h3>Expressions de table communes (CTE)</h3>
<p>Les CTE (Common Table Expressions), introduites par la clause <code>WITH</code>, permettent de nommer des sous-requêtes et de les réutiliser. Elles améliorent considérablement la lisibilité des requêtes complexes :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- CTE simple : nommer une sous-requête
WITH clients_actifs AS (
    SELECT id, nom, email
    FROM clients
    WHERE derniere_connexion >= NOW() - INTERVAL '30 days'
),
stats_commandes AS (
    SELECT client_id,
           COUNT(*) AS nb_commandes,
           SUM(montant) AS total_achats
    FROM commandes
    WHERE date >= '2024-01-01'
    GROUP BY client_id
)
SELECT ca.nom, ca.email, COALESCE(sc.nb_commandes, 0), COALESCE(sc.total_achats, 0)
FROM clients_actifs ca
LEFT JOIN stats_commandes sc ON sc.client_id = ca.id
ORDER BY sc.total_achats DESC NULLS LAST;

-- CTE récursive : parcourir une hiérarchie (arbre d'organisation)
WITH RECURSIVE hierarchie AS (
    -- Cas de base : le PDG (pas de supérieur)
    SELECT id, nom, manager_id, 1 AS niveau
    FROM employes
    WHERE manager_id IS NULL

    UNION ALL

    -- Cas récursif : les N-1 subordonnés directs
    SELECT e.id, e.nom, e.manager_id, h.niveau + 1
    FROM employes e
    JOIN hierarchie h ON e.manager_id = h.id
)
SELECT niveau, nom FROM hierarchie ORDER BY niveau, nom;</code></pre>
</div>

<h3>Gestion des données temporelles</h3>
<p>Les dates et timestamps sont omniprésents en SQL. Chaque SGBD a ses fonctions spécifiques, mais les concepts sont universels :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Fonctions temporelles (PostgreSQL)
SELECT
    NOW(),                              -- timestamp courant avec timezone
    CURRENT_DATE,                       -- date du jour
    date_trunc('month', NOW()),         -- premier jour du mois courant
    date_trunc('year', NOW()),          -- premier jour de l'année

    -- Extraire des composantes
    EXTRACT(YEAR FROM date_commande)    AS annee,
    EXTRACT(MONTH FROM date_commande)   AS mois,
    EXTRACT(DOW FROM date_commande)     AS jour_semaine,  -- 0=dimanche

    -- Arithmetic sur les dates
    date_commande + INTERVAL '30 days' AS date_expiration,
    AGE(NOW(), date_naissance)          AS age_exact,

    -- Grouper par période
    date_trunc('week', date_commande)   AS semaine
FROM commandes
WHERE date_commande >= date_trunc('year', NOW())  -- cette année
ORDER BY date_commande;</code></pre>
</div>

<h3>Vues matérialisées et performances analytiques</h3>
<p>Une <strong>vue matérialisée</strong> est une vue dont le résultat est stocké physiquement sur disque et peut être rafraîchi périodiquement. Idéale pour les calculs coûteux fréquemment consultés :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Créer une vue matérialisée : statistiques journalières précalculées
CREATE MATERIALIZED VIEW stats_journalieres AS
SELECT
    date_trunc('day', date_commande) AS jour,
    COUNT(*) AS nb_commandes,
    SUM(montant) AS ca_total,
    AVG(montant) AS panier_moyen,
    COUNT(DISTINCT client_id) AS clients_uniques
FROM commandes
GROUP BY date_trunc('day', date_commande);

-- Indexer la vue pour des requêtes rapides
CREATE INDEX ON stats_journalieres(jour);

-- Rafraîchir les données (lancer périodiquement via cron)
REFRESH MATERIALIZED VIEW CONCURRENTLY stats_journalieres;

-- Requête rapide sur la vue (pas sur la table de 100M lignes)
SELECT jour, ca_total
FROM stats_journalieres
WHERE jour >= NOW() - INTERVAL '90 days'
ORDER BY jour;</code></pre>
</div>
<div class="highlight-box"><p><strong>Quand utiliser les vues matérialisées :</strong> quand une requête prend plusieurs secondes et est exécutée fréquemment, et quand les données peuvent être légèrement en retard (minutes ou heures). Les tableaux de bord, rapports quotidiens et pages d'accueil avec statistiques sont des cas d'usage idéaux.</p></div>""")

# ============================================================
# Supplement for bases-de-donnees/relationnel
# ============================================================
append_to_content('bases-de-donnees/relationnel', """
<h3>Contraintes avancées</h3>
<p>Au-delà des contraintes de base, SQL permet des contraintes d'intégrité complexes :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Contrainte CHECK avec logique métier
CREATE TABLE reservations (
    id           SERIAL PRIMARY KEY,
    debut        TIMESTAMP NOT NULL,
    fin          TIMESTAMP NOT NULL,
    salle_id     INTEGER,
    CONSTRAINT dates_valides CHECK (fin > debut),
    CONSTRAINT duree_raisonnable CHECK (fin - debut <= INTERVAL '8 hours')
);

-- Contrainte d'exclusion (PostgreSQL) : empêcher les chevauchements de périodes
CREATE EXTENSION btree_gist;  -- nécessaire pour l'opérateur &&

CREATE TABLE reservations_salles (
    salle_id INTEGER,
    periode  TSRANGE,  -- plage temporelle
    EXCLUDE USING gist (salle_id WITH =, periode WITH &&)
    -- Empêche deux réservations de la même salle qui se chevauchent
);

-- Trigger : logique d'intégrité procédurale
CREATE OR REPLACE FUNCTION verifier_stock()
RETURNS TRIGGER AS $$ -- délimiteur de corps de trigger
BEGIN
    IF NEW.quantite < 0 THEN
        RAISE EXCEPTION 'Stock négatif interdit pour le produit %', NEW.produit_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_stock_negatif
BEFORE INSERT OR UPDATE ON stocks
FOR EACH ROW EXECUTE FUNCTION verifier_stock();</code></pre>
</div>

<h3>Index avancés</h3>
<p>Les index sont essentiels pour les performances. Plusieurs types d'index existent selon les cas d'usage :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Index B-Tree : le plus courant, pour =, <, >, BETWEEN, ORDER BY
CREATE INDEX idx_clients_email ON clients(email);

-- Index partiel : indexer seulement un sous-ensemble de lignes
CREATE INDEX idx_commandes_non_livrees
ON commandes(client_id, date_commande)
WHERE date_livraison IS NULL;  -- 10% des lignes mais 90% des requêtes

-- Index composite : ordre des colonnes important
CREATE INDEX idx_ventes_region_date ON ventes(region, date_vente);
-- Accélère : WHERE region = X  AND date_vente > Y
-- Accélère : WHERE region = X  (prefix match)
-- N'accélère PAS : WHERE date_vente > Y seul (pas en préfixe)

-- Index GIN : pour les tableaux et le full-text search
CREATE INDEX idx_articles_tags ON articles USING gin(tags);
-- Permet : WHERE tags @> ARRAY['python']  (contient)

-- Index d'expression
CREATE INDEX idx_clients_email_lower ON clients(LOWER(email));
-- Accélère : WHERE LOWER(email) = 'alice@exemple.com'</code></pre>
</div>

<h3>Transactions et niveaux d'isolation</h3>
<p>Les transactions concurrentes peuvent interférer de plusieurs façons. Les niveaux d'isolation définissent les garanties offertes :</p>
<ul>
<li><strong>READ UNCOMMITTED :</strong> peut lire des données non commitées ("dirty reads"). Peu utilisé.</li>
<li><strong>READ COMMITTED (défaut PostgreSQL) :</strong> chaque requête voit les données commitées au moment de son exécution. Prévient les dirty reads.</li>
<li><strong>REPEATABLE READ :</strong> toutes les requêtes d'une transaction voient la même snapshot. Prévient les non-repeatable reads.</li>
<li><strong>SERIALIZABLE :</strong> niveau le plus fort. Les transactions semblent s'exécuter séquentiellement. Prévient tous les phénomènes de concurrence.</li>
</ul>
<div class="highlight-box"><p><strong>Deadlocks :</strong> Quand deux transactions attendent chacune que l'autre libère un verrou, un interblocage (deadlock) se produit. Le SGBD le détecte et annule l'une des transactions. Prévention : toujours acquérir les verrous dans le même ordre.</p></div>

<h3>Partitionnement de tables</h3>
<p>Pour les très grandes tables (milliards de lignes), le partitionnement divise une table logique en plusieurs tables physiques :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Partitionnement par plage (range) : une partition par année
CREATE TABLE mesures (
    id         BIGSERIAL,
    capteur_id INTEGER,
    valeur     DOUBLE PRECISION,
    enregistre TIMESTAMP NOT NULL
) PARTITION BY RANGE (enregistre);

CREATE TABLE mesures_2023 PARTITION OF mesures
    FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE mesures_2024 PARTITION OF mesures
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');

-- Les requêtes filtrant par date n'accèdent qu'aux partitions concernées
-- (élagage de partitions automatique)
SELECT * FROM mesures WHERE enregistre >= '2024-06-01';
-- N'accède qu'à mesures_2024, ignore mesures_2023</code></pre>
</div>""")

# ============================================================
# Supplement for bases-de-donnees/nosql
# ============================================================
append_to_content('bases-de-donnees/nosql', """
<h3>Elasticsearch : recherche full-text à grande échelle</h3>
<p>Elasticsearch est un moteur de recherche distribué basé sur Apache Lucene. Il excelle dans la recherche full-text, l'analyse de logs et les tableaux de bord temps réel :</p>
<div class="code-block">
  <div class="code-header"><span>JavaScript</span></div>
  <pre><code>// Elasticsearch HTTP API
// Indexer un document
PUT /articles/_doc/1
{
  "titre": "Introduction à Elasticsearch",
  "contenu": "Elasticsearch est un moteur de recherche distribué...",
  "tags": ["search", "nosql", "fulltext"],
  "date": "2024-03-15"
}

// Recherche full-text avec scoring
GET /articles/_search
{
  "query": {
    "multi_match": {
      "query": "moteur recherche distribué",
      "fields": ["titre^3", "contenu"],  // titre 3x plus important
      "type": "best_fields",
      "fuzziness": "AUTO"  // tolérance aux fautes de frappe
    }
  },
  "highlight": {
    "fields": { "contenu": {} }  // surligner les termes trouvés
  },
  "aggs": {
    "par_tag": {
      "terms": { "field": "tags.keyword", "size": 10 }
    }
  }
}</code></pre>
</div>

<h3>Patterns de modélisation NoSQL</h3>
<p>Contrairement au SQL où la normalisation est la règle, NoSQL impose de modéliser selon les patterns d'accès :</p>
<ul>
<li><strong>Embedding (imbrication) :</strong> stocker les données liées dans le même document. Évite les jointures, cohérence en une seule opération. Idéal quand les données sont toujours accédées ensemble et que la relation est 1:quelques.</li>
<li><strong>Referencing (référence) :</strong> stocker l'identifiant d'un document lié. Comme une clé étrangère. Nécessite plusieurs requêtes mais évite la duplication quand la donnée est partagée par beaucoup de documents.</li>
<li><strong>Bucket pattern :</strong> regrouper des données temporelles en "seaux" (heure, jour). Limite le nombre de documents et optimise les requêtes sur des plages de temps.</li>
<li><strong>Outlier pattern :</strong> gérer les cas extrêmes (un utilisateur avec 1M de followers) séparément du cas normal.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>JavaScript</span></div>
  <pre><code>// Bucket pattern : mesures IoT groupées par heure
{
  "_id": { "capteur": "C001", "heure": ISODate("2024-03-15T10:00:00") },
  "nb_mesures": 60,
  "somme_temp": 1382.4,     // pour calculer la moyenne : 1382.4 / 60
  "min_temp": 22.1,
  "max_temp": 24.3,
  "mesures": [22.1, 22.3, 22.8, ...]  // les 60 valeurs de l'heure
}

// Vs un document par mesure : 60x moins de documents,
// requêtes agrégées bien plus rapides</code></pre>
</div>

<h3>Transactions multi-documents en NoSQL</h3>
<p>Historiquement, NoSQL ne supportait pas les transactions multi-documents. Les versions modernes ont comblé cette lacune :</p>
<ul>
<li><strong>MongoDB 4.0+ :</strong> transactions ACID multi-documents sur les replica sets. Depuis 4.2 : sur les clusters shardés.</li>
<li><strong>DynamoDB :</strong> transactions sur jusqu'à 25 opérations via <code>TransactWriteItems</code>.</li>
<li><strong>Redis :</strong> transactions atomiques via <code>MULTI/EXEC</code> — les commandes s'exécutent séquentiellement sans interruption.</li>
</ul>
<div class="highlight-box"><p><strong>Quand NoSQL, quand SQL ?</strong> Règle simple : si vos données ont beaucoup de relations et si la cohérence transactionnelle est critique, SQL. Si vos données sont peu relationnelles, si vous écrivez massivement, si le schéma change souvent ou si vous avez besoin de scalabilité horizontale simple, NoSQL. Dans le doute, commencer par PostgreSQL — il supporte aussi le JSON avec des performances excellentes.</p></div>""")

# ============================================================
# Supplement for bases-de-donnees/conception
# ============================================================
append_to_content('bases-de-donnees/conception', """
<h3>Conception pour la performance : index dès le départ</h3>
<p>La conception ne se limite pas au schéma — anticiper les patterns de requêtes dès le départ évite des migrations douloureuses plus tard :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Identifier les requêtes fréquentes dès la conception
-- Requête critique : "toutes les commandes d'un client triées par date"
SELECT * FROM commandes WHERE client_id = ? ORDER BY date_commande DESC;
-- -> Index (client_id, date_commande DESC)

-- Requête critique : "produits en rupture de stock dans une catégorie"
SELECT * FROM produits WHERE categorie_id = ? AND stock = 0;
-- -> Index (categorie_id, stock) ou index partiel WHERE stock = 0

-- Concrètement dans le schéma :
CREATE TABLE commandes (
    id          SERIAL PRIMARY KEY,
    client_id   INTEGER NOT NULL REFERENCES clients(id),
    date_commande TIMESTAMP NOT NULL DEFAULT NOW(),
    montant     DECIMAL(10,2) NOT NULL,
    statut      VARCHAR(20) NOT NULL DEFAULT 'en_attente'
);

-- Index couvrant la requête la plus fréquente
CREATE INDEX idx_commandes_client_date
ON commandes(client_id, date_commande DESC);

-- Index partiel pour les commandes non traitées (petite fraction)
CREATE INDEX idx_commandes_en_attente
ON commandes(date_commande)
WHERE statut = 'en_attente';</code></pre>
</div>

<h3>Multitenancy : architecture multi-clients</h3>
<p>Les applications SaaS doivent gérer plusieurs clients (tenants) avec isolation des données. Trois approches :</p>
<ul>
<li><strong>Base de données par tenant :</strong> isolation maximale, coût en ressources élevé. Adapté quand l'isolation légale est requise (données de santé, financières).</li>
<li><strong>Schéma par tenant (PostgreSQL) :</strong> chaque client a son propre schéma dans la même base. Bon compromis isolation/ressources.</li>
<li><strong>Table partagée avec colonne tenant_id :</strong> le plus courant. Toutes les lignes ont un <code>tenant_id</code>. Nécessite une vigilance absolue — chaque requête doit filtrer par tenant.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Approche table partagée : ajouter tenant_id partout
CREATE TABLE articles (
    id        SERIAL,
    tenant_id INTEGER NOT NULL REFERENCES tenants(id),
    titre     VARCHAR(300) NOT NULL,
    contenu   TEXT,
    PRIMARY KEY (id, tenant_id)  -- clé composite incluant tenant_id
);

-- Row Level Security (PostgreSQL) : politique de sécurité au niveau ligne
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY articles_tenant_isolation ON articles
    USING (tenant_id = current_setting('app.current_tenant')::INTEGER);

-- Chaque connexion doit définir le tenant courant
SET app.current_tenant = 42;
-- Après ce SET, toutes les requêtes sur articles sont automatiquement
-- filtrées par tenant_id = 42 — invisible pour le code applicatif</code></pre>
</div>

<h3>Audit et traçabilité</h3>
<p>Les applications métier doivent souvent tracer les modifications des données : qui a changé quoi et quand. Deux approches :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Approche 1 : table d'audit séparée (journal d'audit)
CREATE TABLE audit_log (
    id           BIGSERIAL PRIMARY KEY,
    table_name   VARCHAR(50) NOT NULL,
    operation    CHAR(1) NOT NULL CHECK (operation IN ('I','U','D')),
    row_id       BIGINT,
    old_values   JSONB,
    new_values   JSONB,
    user_id      INTEGER,
    occurred_at  TIMESTAMP DEFAULT NOW()
);

-- Approche 2 : versioning des enregistrements (temporal table)
CREATE TABLE contrats (
    id           SERIAL,
    client_id    INTEGER NOT NULL,
    montant      DECIMAL(12,2),
    -- Colonnes de bitemporalité
    valid_from   TIMESTAMP NOT NULL DEFAULT NOW(),
    valid_to     TIMESTAMP NOT NULL DEFAULT 'infinity',
    -- Clé primaire inclut la version temporelle
    PRIMARY KEY (id, valid_from)
);

-- Modifier un contrat : invalider l'ancienne version, insérer la nouvelle
UPDATE contrats SET valid_to = NOW()
WHERE id = 42 AND valid_to = 'infinity';

INSERT INTO contrats (id, client_id, montant, valid_from)
VALUES (42, 7, 15000.00, NOW());

-- Consulter l'état à une date passée
SELECT * FROM contrats
WHERE id = 42 AND valid_from <= '2024-01-15' AND valid_to > '2024-01-15';</code></pre>
</div>
<div class="highlight-box"><p><strong>GDPR et droit à l'oubli :</strong> La conception doit anticiper les obligations légales. Le droit à l'oubli (RGPD) impose de pouvoir supprimer toutes les données personnelles d'un utilisateur. Identifier dès le schéma toutes les tables contenant des données personnelles et prévoir le mécanisme de suppression ou d'anonymisation.</p></div>""")

# ============================================================
# Supplement for bases-de-donnees/big-data
# ============================================================
append_to_content('bases-de-donnees/big-data', """
<h3>Gouvernance des données et qualité</h3>
<p>La gouvernance est le cadre qui garantit que les données sont fiables, cohérentes et utilisables. Sans elle, même le meilleur système Big Data produit des analyses incorrectes :</p>
<ul>
<li><strong>Catalogue de données :</strong> inventaire centralisé des jeux de données disponibles avec leur signification, provenance et propriétaire. Outils : Apache Atlas, DataHub, Amundsen.</li>
<li><strong>Lignage des données (Data Lineage) :</strong> tracer l'origine de chaque donnée et les transformations appliquées. Indispensable pour le débogage et la conformité.</li>
<li><strong>Qualité des données :</strong> validation automatique à l'ingestion. Profiling (distributions, valeurs nulles, anomalies), alertes sur les dégradations.</li>
<li><strong>Tests sur les pipelines :</strong> Great Expectations, dbt tests — valider les assertions sur les données (unicité, absence de NULL, plages de valeurs).</li>
</ul>

<h3>dbt : transformer les données avec du SQL</h3>
<p>dbt (data build tool) est l'outil standard pour les transformations SQL dans les entrepôts de données. Il apporte les bonnes pratiques du développement logiciel (tests, documentation, versioning) aux pipelines de données :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- models/marts/ca_par_region.sql
-- dbt compile ce fichier et l'exécute dans l'entrepôt

{{ config(materialized='table') }}

WITH ventes_brutes AS (
    SELECT * FROM {{ ref('stg_ventes') }}  -- référence à un autre modèle dbt
),

clients_enrichis AS (
    SELECT * FROM {{ ref('stg_clients') }}
),

calcul AS (
    SELECT
        c.region,
        date_trunc('month', v.date_vente) AS mois,
        COUNT(*) AS nb_transactions,
        SUM(v.montant) AS ca_total
    FROM ventes_brutes v
    JOIN clients_enrichis c ON c.id = v.client_id
    GROUP BY c.region, mois
)

SELECT * FROM calcul</code></pre>
</div>
<div class="code-block">
  <div class="code-header"><span>YAML</span></div>
  <pre><code># schema.yml : documentation et tests
version: 2

models:
  - name: ca_par_region
    description: "CA mensuel par région géographique"
    columns:
      - name: region
        description: "Code région (FR, DE, UK...)"
        tests:
          - not_null
          - accepted_values:
              values: ['FR', 'DE', 'UK', 'ES', 'IT']
      - name: ca_total
        tests:
          - not_null
          - dbt_utils.expression_is_true:
              expression: ">= 0"</code></pre>
</div>

<h3>Architectures modernes : Medallion et Lakehouse</h3>
<p>L'architecture <strong>Medallion</strong> (proposée par Databricks) organise un data lake en trois couches de qualité croissante :</p>
<ul>
<li><strong>Bronze :</strong> données brutes ingérées telles quelles depuis les sources. Aucune transformation. Conservation longue durée (source de vérité).</li>
<li><strong>Silver :</strong> données nettoyées, dédupliquées, enrichies. Schéma validé. Peuvent être jointes entre elles.</li>
<li><strong>Gold :</strong> données agrégées et optimisées pour les cas d'usage spécifiques (reporting, machine learning). Tables de faits et dimensions.</li>
</ul>
<div class="highlight-box"><p><strong>Observabilité des données :</strong> Comme on monitore les applications (métriques, logs, alertes), il faut monitorer les pipelines de données. Métriques clés : fraîcheur des données (quand ont-elles été mises à jour ?), complétude (taux de nullité), unicité, et volumes (une chute soudaine de lignes ingérées signale souvent un problème en amont).</p></div>

<h3>Cloud et services managés Big Data</h3>
<p>Les principaux fournisseurs cloud proposent des services managés qui éliminent la gestion de l'infrastructure :</p>
<ul>
<li><strong>AWS :</strong> S3 (stockage), Glue (ETL), Athena (SQL sur S3), EMR (Hadoop/Spark managé), Redshift (data warehouse)</li>
<li><strong>Google Cloud :</strong> GCS (stockage), BigQuery (entrepôt serverless ultra-rapide), Dataflow (Beam), Dataproc (Spark managé)</li>
<li><strong>Azure :</strong> ADLS (stockage), Synapse Analytics (entrepôt + Spark), Data Factory (ETL)</li>
<li><strong>Snowflake :</strong> entrepôt de données multi-cloud, séparation compute/storage, partage de données simplifié</li>
</ul>""")

# ============================================================
# RESEAUX articles
# ============================================================
pages['reseaux/modeles']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Comprendre l'architecture en couches des réseaux</p>
        </div>
      </div>
      <p class="resume-text">Les modèles de référence en couches — <strong>OSI</strong> et <strong>TCP/IP</strong> — sont les fondements conceptuels des réseaux informatiques. Ils décomposent la complexité de la communication réseau en niveaux d'abstraction empilés, où chaque couche offre des services à la couche supérieure et utilise les services de la couche inférieure.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Comprendre le modèle OSI et TCP/IP permet de diagnostiquer des problèmes réseau avec méthode — "est-ce un problème de couche physique, de routage, ou applicatif ?" — et de comprendre pourquoi les protocoles fonctionnent comme ils le font.</p>
      </div>
      <p class="resume-text">Ces modèles ont été conçus indépendamment mais se complètent : OSI est le modèle de référence théorique à 7 couches, TCP/IP est le modèle pratique à 4 couches qui gouverne l'Internet réel.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Modèles réseau — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Le modèle OSI : 7 couches</h3>
<p>Le modèle OSI (Open Systems Interconnection), développé par l'ISO dans les années 1980, définit 7 couches de communication :</p>
<ul>
<li><strong>7 — Application :</strong> interface avec les applications utilisateur. Protocoles : HTTP, HTTPS, FTP, SMTP, DNS, SSH.</li>
<li><strong>6 — Présentation :</strong> encodage, chiffrement, compression des données. TLS/SSL opère ici.</li>
<li><strong>5 — Session :</strong> gestion des sessions de communication (ouverture, maintien, fermeture).</li>
<li><strong>4 — Transport :</strong> transmission de bout en bout, fiabilité, contrôle de flux. Protocoles : TCP, UDP.</li>
<li><strong>3 — Réseau :</strong> adressage logique et routage entre réseaux. Protocoles : IP, ICMP, OSPF, BGP.</li>
<li><strong>2 — Liaison de données :</strong> transmission fiable sur un lien physique. Protocoles : Ethernet, Wi-Fi (802.11), adressage MAC.</li>
<li><strong>1 — Physique :</strong> transmission des bits sur le médium physique (câble, fibre, ondes radio).</li>
</ul>
<div class="highlight-box"><p><strong>Mnémotechnique :</strong> "All People Seem To Need Data Processing" (Application, Présentation, Session, Transport, Network, Data link, Physical) ou "Please Do Not Throw Sausage Pizza Away" en partant de la couche 1.</p></div>

<h3>Le modèle TCP/IP : 4 couches</h3>
<p>Le modèle TCP/IP (ou modèle Internet) est plus compact et reflète l'architecture réelle d'Internet :</p>
<ul>
<li><strong>Application :</strong> équivaut aux couches 5-7 OSI. Protocoles : HTTP, FTP, SMTP, DNS, SSH.</li>
<li><strong>Transport :</strong> TCP (fiable, orienté connexion) et UDP (non fiable, sans connexion).</li>
<li><strong>Internet :</strong> routage inter-réseaux avec IP. IPv4, IPv6, ICMP.</li>
<li><strong>Accès réseau :</strong> équivaut aux couches 1-2 OSI. Ethernet, Wi-Fi, PPP.</li>
</ul>

<h3>Encapsulation et décapsulation</h3>
<p>Chaque couche ajoute un en-tête (et parfois un pied) lors de l'envoi — c'est l'<strong>encapsulation</strong>. À la réception, chaque couche retire son en-tête — la <strong>décapsulation</strong> :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code>Données applicatives (HTTP) : "GET /index.html HTTP/1.1\r\n..."
        |
        v [couche Transport ajoute en-tête TCP]
Segment TCP : [Port src:52341 | Port dst:443 | Seq:1001 | ...] + données HTTP
        |
        v [couche Internet ajoute en-tête IP]
Paquet IP : [IP src:192.168.1.5 | IP dst:93.184.216.34 | TTL:64] + segment TCP
        |
        v [couche Accès réseau ajoute en-tête Ethernet]
Trame Ethernet : [MAC src:AA:BB:CC | MAC dst:FF:GG:HH | Type:0x0800] + paquet IP + FCS

# Sur le câble : bits électriques/lumineux représentant la trame
# La destination effectue la décapsulation dans l'ordre inverse</code></pre>
</div>

<h3>TCP vs UDP : deux philosophies de transport</h3>
<p>TCP et UDP sont les deux protocoles de la couche Transport. Leur différence fondamentale est le compromis fiabilité/performance :</p>
<ul>
<li><strong>TCP (Transmission Control Protocol) :</strong> orienté connexion (handshake 3 voies), fiable (accusés de réception, retransmission), ordonné (réordonne les paquets arrivés hors ordre), contrôle de flux et congestion. Latence plus élevée. Usages : HTTP, SMTP, SSH, FTP.</li>
<li><strong>UDP (User Datagram Protocol) :</strong> sans connexion, non fiable, non ordonné, pas de contrôle de flux. Très rapide. Usages : DNS (requêtes courtes), streaming vidéo/audio, jeux en ligne, VoIP, DNS.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code">import socket

# Client TCP : connexion, envoi, réception
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(('example.com', 80))
    s.sendall(b'GET / HTTP/1.0\r\nHost: example.com\r\n\r\n')
    reponse = b''
    while chunk := s.recv(4096):
        reponse += chunk
    print(reponse.decode()[:200])

# Serveur UDP : écouter des messages
with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    s.bind(('0.0.0.0', 5000))
    while True:
        donnees, adresse = s.recvfrom(1024)
        print(f"Reçu de {adresse}: {donnees.decode()}")
        s.sendto(b'ACK', adresse)</code></pre>
</div>

<h3>Le handshake TCP à 3 voies</h3>
<p>Avant d'échanger des données, TCP établit une connexion via un handshake en 3 étapes :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code">Client                    Serveur
  |                          |
  |--- SYN (seq=100) ------> |   Client initie : "Je veux me connecter"
  |                          |
  | <-- SYN-ACK ------------ |   Serveur accepte : "OK, seq=300, j'accuse réception 101"
  |    (seq=300, ack=101)    |
  |                          |
  |--- ACK (ack=301) ------> |   Client confirme : "Connexion établie"
  |                          |
  |=== données TCP =========|   Échange de données bidirectionnel
  |                          |
  |--- FIN ----------------> |   Fermeture (4-way handshake)
  | <-- FIN-ACK ------------ |
  |--- ACK ----------------> |</code></pre>
</div>

<h3>Adressage IP et sous-réseaux</h3>
<p>Une adresse IPv4 est composée de 32 bits, représentée en 4 octets décimaux (ex: 192.168.1.1). Le masque de sous-réseau définit la partie réseau et la partie hôte :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code"># Notation CIDR : adresse/préfixe
192.168.1.0/24   # réseau 192.168.1.x, 256 adresses (254 utilisables)
10.0.0.0/8       # réseau 10.x.x.x, 16 millions d'adresses
172.16.0.0/12    # réseau privé classe B (172.16.x.x à 172.31.x.x)

# Plages privées (RFC 1918, non routables sur Internet)
10.0.0.0/8       # grandes entreprises
172.16.0.0/12    # entreprises moyennes
192.168.0.0/16   # réseaux domestiques

# Calcul de sous-réseau
# /24 = 256 adresses (2^8), masque 255.255.255.0
# /25 = 128 adresses (2^7), masque 255.255.255.128
# /30 = 4 adresses (2^2), pour les liaisons point-à-point

# Commandes utiles (Linux)
ip addr show              # afficher les interfaces et adresses IP
ip route                  # table de routage
ping 8.8.8.8              # tester la connectivité (ICMP)
traceroute 8.8.8.8        # tracer le chemin vers une destination</code></pre>
</div>

<h3>IPv6 : l'adressage du futur</h3>
<p>IPv6 répond à l'épuisement des adresses IPv4. Avec 128 bits, il offre 3,4×10³⁸ adresses — suffisant pour adresser chaque grain de sable de la Terre avec des milliards d'adresses. Format : 8 groupes de 4 chiffres hexadécimaux (2001:0db8:85a3:0000:0000:8a2e:0370:7334).</p>
<div class="highlight-box"><p><strong>Transition IPv4 → IPv6 :</strong> Internet utilise encore massivement IPv4 mais le déploiement IPv6 s'accélère. Les deux coexistent via des mécanismes de transition (dual-stack, tunneling). En 2024, environ 40 % du trafic Google est en IPv6.</p></div>
</div>
    </section>"""

pages['reseaux/protocoles']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les langages communs des réseaux informatiques</p>
        </div>
      </div>
      <p class="resume-text">Un <strong>protocole réseau</strong> est un ensemble de règles formelles définissant comment les machines communiquent — format des messages, ordre des échanges, gestion des erreurs. Sans protocoles standardisés, des machines de constructeurs différents ne pourraient pas communiquer. HTTP, DNS, SMTP, TLS, DHCP — chaque protocole résout un problème spécifique dans la pile de communication.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Comprendre les protocoles fondamentaux — comment DNS résout les noms, comment TLS chiffre les connexions, comment DHCP attribue les adresses — donne une vision claire de ce qui se passe "sous le capot" de chaque interaction réseau.</p>
      </div>
      <p class="resume-text">Les protocoles sont définis dans des RFC (Request for Comments) publiées par l'IETF (Internet Engineering Task Force). Ces documents publics permettent à n'importe qui d'implémenter et d'interopérer avec les standards Internet.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Protocoles réseau — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>DNS : l'annuaire d'Internet</h3>
<p>Le <strong>DNS</strong> (Domain Name System) traduit les noms de domaine lisibles (exemple.com) en adresses IP (93.184.216.34). C'est un système hiérarchique distribué :</p>
<ul>
<li><strong>Serveurs racine :</strong> 13 clusters de serveurs (.root) connaissent les serveurs TLD</li>
<li><strong>Serveurs TLD :</strong> gèrent les zones .com, .fr, .org, etc.</li>
<li><strong>Serveurs autoritaires :</strong> contiennent les enregistrements DNS d'un domaine spécifique</li>
<li><strong>Résolveurs récursifs :</strong> interrogent la hiérarchie pour le compte des clients (ex: votre box internet)</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># Résolution DNS étape par étape
# dig +trace exemple.com affiche toute la chaîne de résolution

# Types d'enregistrements DNS importants
# A     : nom -> IPv4  (exemple.com -> 93.184.216.34)
# AAAA  : nom -> IPv6  (exemple.com -> 2606:2800:220:1:248:1893:25c8:1946)
# CNAME : alias -> nom canonique  (www.exemple.com -> exemple.com)
# MX    : serveur de messagerie  (exemple.com -> mail.exemple.com priorité 10)
# TXT   : texte libre  (SPF, DKIM, vérification propriété domaine)
# NS    : serveurs de noms autoritaires

# Outils de diagnostic
nslookup exemple.com         # résolution simple
dig exemple.com A             # enregistrements A
dig exemple.com MX            # enregistrements de mail
dig @8.8.8.8 exemple.com     # utiliser le DNS Google (8.8.8.8)
dig +short exemple.com        # résultat concis</code></pre>
</div>

<h3>HTTPS et TLS : chiffrement des communications</h3>
<p>TLS (Transport Layer Security, successeur de SSL) chiffre les communications réseau. HTTPS = HTTP + TLS. Fonctionnement du handshake TLS 1.3 :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code"># Handshake TLS 1.3 simplifié
Client                          Serveur
  |                               |
  |--- ClientHello -------------> |  version TLS, algorithmes supportés
  | (clé publique Diffie-Hellman) |
  |                               |
  | <-- ServerHello ------------- |  version choisie, certificat
  | <-- Certificate ------------- |  certificat X.509 signé par CA
  | <-- CertificateVerify ------- |  preuve possession clé privée
  | <-- Finished ---------------- |  données chiffrées dès maintenant
  |                               |
  |--- Finished ----------------> |  connexion sécurisée établie
  |                               |
  |=== HTTP chiffré ============= |  AES-256-GCM ou ChaCha20

# Vérifier un certificat en ligne de commande
openssl s_client -connect exemple.com:443 -showcerts
echo | openssl s_client -connect exemple.com:443 2>/dev/null | openssl x509 -noout -dates</code></pre>
</div>
<p>Les <strong>certificats X.509</strong> authentifient l'identité du serveur. Ils sont signés par des Autorités de Certification (CA) de confiance. Let's Encrypt permet d'obtenir gratuitement des certificats valides, automatisant leur renouvellement.</p>

<h3>DHCP : attribution automatique des adresses</h3>
<p>DHCP (Dynamic Host Configuration Protocol) attribue automatiquement une configuration réseau aux machines qui rejoignent un réseau :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code"># DORA : Discover, Offer, Request, Acknowledge
# 1. DISCOVER : broadcast du client "Y a-t-il un serveur DHCP ?"
# 2. OFFER    : le serveur propose une adresse IP disponible
# 3. REQUEST  : le client accepte l'offre
# 4. ACK      : le serveur confirme, la configuration est attribuée

# Configuration attribuée par DHCP :
# - Adresse IP (ex: 192.168.1.42)
# - Masque de sous-réseau (ex: 255.255.255.0)
# - Passerelle par défaut (ex: 192.168.1.1)
# - Serveurs DNS (ex: 8.8.8.8, 8.8.4.4)
# - Durée du bail (lease time, ex: 24h)

# Renouveler le bail DHCP manuellement (Linux)
sudo dhclient -r eth0   # libérer le bail
sudo dhclient eth0      # en demander un nouveau</code></pre>
</div>

<h3>Protocoles de messagerie : SMTP, IMAP, POP3</h3>
<p>L'email utilise plusieurs protocoles selon la direction du flux :</p>
<ul>
<li><strong>SMTP (Simple Mail Transfer Protocol) :</strong> envoi d'email. Port 25 (serveur vers serveur), 587 (client vers serveur avec authentification).</li>
<li><strong>IMAP (Internet Message Access Protocol) :</strong> lecture email en synchronisation — les messages restent sur le serveur. Port 993 (TLS). Standard moderne.</li>
<li><strong>POP3 (Post Office Protocol 3) :</strong> téléchargement des emails sur le client — les messages sont supprimés du serveur. Port 995. Ancien, moins adapté aux accès multi-appareils.</li>
</ul>

<h3>Protocoles temps réel : WebSocket et gRPC</h3>
<p>HTTP classique est unidirectionnel (requête/réponse). Pour les applications temps réel, des protocoles bidirectionnels sont nécessaires :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code">import asyncio
import websockets

# Serveur WebSocket : connexion bidirectionnelle persistante
async def handler(websocket):
    print(f"Client connecté: {websocket.remote_address}")
    async for message in websocket:
        print(f"Reçu: {message}")
        await websocket.send(f"Echo: {message}")

async def main():
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()  # serveur permanent

asyncio.run(main())</code></pre>
</div>
<div class="highlight-box"><p><strong>gRPC :</strong> Framework RPC (Remote Procedure Call) de Google, basé sur HTTP/2 et Protocol Buffers. Très efficace pour les communications entre microservices — messages binaires compressés, streaming bidirectionnel, typage fort avec génération de code client/serveur automatique.</p></div>

<h3>Protocoles de routage</h3>
<p>Les routeurs échangent des informations pour maintenir des tables de routage à jour. Deux catégories :</p>
<ul>
<li><strong>IGP (Interior Gateway Protocol) :</strong> dans un même réseau autonome. OSPF (Open Shortest Path First) utilise l'algorithme de Dijkstra. RIP est plus simple mais limité à 15 sauts.</li>
<li><strong>BGP (Border Gateway Protocol) :</strong> entre réseaux autonomes différents (opérateurs, data centers). C'est le protocole qui fait fonctionner l'Internet global — il détermine les routes entre les ~80 000 ASN (Autonomous System Numbers) mondiaux.</li>
</ul>
</div>
    </section>"""

pages['reseaux/architecture']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>L'organisation physique et logique des réseaux</p>
        </div>
      </div>
      <p class="resume-text">L'<strong>architecture réseau</strong> est la façon dont sont organisés les équipements, les connexions et les protocoles pour former un réseau fonctionnel. Des réseaux domestiques à l'infrastructure mondiale d'Internet, les mêmes principes fondamentaux s'appliquent : topologie, équipements de commutation et de routage, et segmentation logique.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Comprendre l'architecture réseau permet de concevoir des infrastructures adaptées aux besoins — performances, résilience, sécurité — et de diagnostiquer les pannes en identifiant le composant défaillant dans la chaîne.</p>
      </div>
      <p class="resume-text">Cette page couvre les topologies réseau, les équipements fondamentaux (switch, routeur, pare-feu), la segmentation en VLAN, et l'architecture de sécurité en zones.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Architecture réseau — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Topologies réseau</h3>
<p>La topologie définit comment les équipements sont interconnectés. Chaque topologie a des compromis en termes de coût, performance et tolérance aux pannes :</p>
<ul>
<li><strong>Bus :</strong> tous les équipements partagent un même câble. Simple et peu coûteux mais une panne du bus arrête tout. Obsolète.</li>
<li><strong>Étoile :</strong> tous les équipements connectés à un équipement central (switch). Si un lien tombe, seul cet équipement est isolé. Standard actuel.</li>
<li><strong>Anneau :</strong> chaque équipement est connecté aux deux voisins. Déterministe mais vulnérable aux pannes. Token Ring, FDDI.</li>
<li><strong>Maillé (Mesh) :</strong> chaque équipement connecté à plusieurs autres. Très résilient mais câblage complexe. Utilisé dans les backbones opérateurs.</li>
<li><strong>Hiérarchique (Core/Distribution/Access) :</strong> architecture à 3 couches utilisée dans les grands réseaux d'entreprise.</li>
</ul>

<h3>Équipements réseau fondamentaux</h3>
<p>Chaque équipement opère à une ou plusieurs couches OSI :</p>
<ul>
<li><strong>Hub (concentrateur) :</strong> couche 1. Répète les signaux électriques sur tous les ports. Pas d'intelligence. Obsolète — remplacé par les switches.</li>
<li><strong>Switch (commutateur) :</strong> couche 2. Apprend les adresses MAC des équipements connectés et transmet les trames uniquement vers le bon port. Crée des domaines de collision séparés.</li>
<li><strong>Routeur :</strong> couche 3. Transmet les paquets IP entre réseaux différents. Maintient une table de routage. Sépare les domaines de broadcast.</li>
<li><strong>Pare-feu (Firewall) :</strong> couches 3-7. Filtre le trafic selon des règles de sécurité. Peut être stateless (filtrage de paquets) ou stateful (suivi des connexions).</li>
<li><strong>Proxy :</strong> couche 7. Intermédiaire pour les connexions applicatives. Forward proxy (client → Internet), Reverse proxy (Internet → serveurs).</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code"># Commandes de diagnostic réseau

# Afficher la table de routage
ip route show                    # Linux
route print                      # Windows

# Table ARP (correspondance IP <-> MAC)
arp -n                           # Linux
arp -a                           # Windows

# Tester la connectivité couche 3
ping 8.8.8.8                     # ICMP echo request/reply
ping6 2001:4860:4860::8888       # ping IPv6

# Tracer le chemin (TTL decrement)
traceroute google.com            # Linux
tracert google.com               # Windows
# Chaque ligne = un routeur (hop) avec sa latence

# Surveiller les connexions actives
ss -tunap                        # Linux : sockets TCP/UDP actives
netstat -an                      # Linux/Windows</code></pre>
</div>

<h3>VLAN : segmentation logique</h3>
<p>Les <strong>VLAN</strong> (Virtual LAN) permettent de créer plusieurs réseaux logiquement séparés sur la même infrastructure physique. Un switch peut porter des dizaines de VLAN distincts :</p>
<ul>
<li><strong>Isolation du trafic :</strong> les équipements de VLAN différents ne peuvent pas communiquer directement — besoin d'un routeur (ou d'un switch de couche 3).</li>
<li><strong>Sécurité :</strong> séparer les serveurs de production, les postes utilisateurs, les équipements IoT et les systèmes invités sur des VLAN différents limite la propagation des intrusions.</li>
<li><strong>Administration :</strong> un VLAN = un domaine de broadcast. Réduire la taille des domaines de broadcast améliore les performances et simplifie l'administration.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code"># Configuration VLAN sur switch Cisco (IOS)
Switch(config)# vlan 10
Switch(config-vlan)# name PRODUCTION
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name INVITES
Switch(config-vlan)# exit

# Port d'accès (connecté à un PC)
Switch(config)# interface FastEthernet0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10

# Port trunk (vers un autre switch ou routeur, transporte plusieurs VLAN)
Switch(config)# interface GigabitEthernet0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20</code></pre>
</div>

<h3>Architecture de sécurité en zones (DMZ)</h3>
<p>Une architecture réseau sécurisée découpe le réseau en zones d'accès progressif :</p>
<ul>
<li><strong>Internet (non fiable) :</strong> tout le trafic entrant est suspect. Seul le trafic autorisé explicitement entre.</li>
<li><strong>DMZ (DeMilitarized Zone) :</strong> héberge les serveurs accessibles depuis Internet (web, email, DNS). Isolée du réseau interne — même si un serveur DMZ est compromis, le réseau interne est protégé.</li>
<li><strong>Réseau interne (fiable) :</strong> postes utilisateurs, serveurs applicatifs. Accède à Internet via proxy/NAT. Ne reçoit pas de connexions entrantes depuis Internet.</li>
<li><strong>Réseau de management :</strong> accès aux équipements réseau et aux consoles d'administration. VLAN séparé, accès très restreint.</li>
</ul>
<div class="highlight-box"><p><strong>Defense in depth :</strong> Ne jamais compter sur un seul mécanisme de sécurité. Superposer les contrôles — pare-feu périmétrique, pare-feu host-based, chiffrement, authentification forte, monitoring — de sorte que compromettre une couche ne compromette pas l'ensemble du système.</p></div>

<h3>SDN et infrastructure définie par logiciel</h3>
<p>Le <strong>SDN</strong> (Software-Defined Networking) sépare le plan de contrôle (décisions de routage) du plan de données (transmission des paquets). Un contrôleur centralisé programme les équipements réseau via des API :</p>
<ul>
<li>Reconfiguration dynamique du réseau sans toucher aux équipements physiques</li>
<li>Automatisation et orchestration via des scripts (Ansible, Terraform)</li>
<li>Meilleure visibilité et contrôle du trafic</li>
<li>Base des réseaux virtuels dans le cloud (VPC chez AWS, Azure VNet)</li>
</ul>

<h3>Wireless : Wi-Fi et réseaux mobiles</h3>
<p>Les réseaux sans fil suivent les standards IEEE 802.11 (Wi-Fi) et 3GPP (réseaux mobiles) :</p>
<ul>
<li><strong>Wi-Fi 6 (802.11ax) :</strong> 9,6 Gbps théoriques, OFDMA, MU-MIMO, meilleur en environnement dense</li>
<li><strong>Wi-Fi 7 (802.11be) :</strong> 46 Gbps, latence ultra-faible, multi-link operation</li>
<li><strong>5G :</strong> jusqu'à 20 Gbps, latence &lt; 1ms, support de 1 million d'appareils/km². Cas d'usage : IoT massif, véhicules autonomes, chirurgie à distance.</li>
</ul>
</div>
    </section>"""

# ============================================================
# RESEAUX - cloud, iot (brief supplements for remaining short articles)
# ============================================================
for key in ['reseaux/cloud', 'reseaux/iot']:
    pages[key]['content'] = pages[key]['content']  # keep current

print("Checking lengths after enrichment:")
for k in sorted(pages.keys()):
    if pages[k].get('type') == 'lesson':
        l = len(pages[k]['content'])
        marker = "OK" if l >= 15000 else "SHORT"
        print(f"  {marker} {k}: {l}")

with open('assets/content/informatique.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("\nSaved OK")
