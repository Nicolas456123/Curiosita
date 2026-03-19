import json
import os

os.chdir(r'C:\Users\nicol\Desktop\Projets\Divers\Curiosita')

with open('assets/content/informatique.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# =========== BASES DE DONNEES / SQL ===========
pages['bases-de-donnees/sql']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Le langage universel des bases de données</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>SQL</strong> (Structured Query Language) est le langage standard pour interagir avec les bases de données relationnelles. Créé dans les années 1970 chez IBM, il permet de définir, manipuler et interroger des données structurées avec une syntaxe proche du langage naturel anglais.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> SQL est omniprésent — de la petite application web aux systèmes bancaires traitant des millions de transactions par seconde. PostgreSQL, MySQL, SQLite, Oracle, SQL Server partagent tous le même noyau syntaxique.</p>
      </div>
      <p class="resume-text">Maîtriser SQL, c'est acquérir une compétence universelle et durable : le langage existe depuis plus de 50 ans et reste incontournable pour accéder aux données relationnelles.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>SQL — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Les sous-langages SQL</h3>
<p>SQL se divise en plusieurs sous-langages selon le type d'opération :</p>
<ul>
<li><strong>DDL (Data Definition Language) :</strong> définit la structure — <code>CREATE</code>, <code>ALTER</code>, <code>DROP</code></li>
<li><strong>DML (Data Manipulation Language) :</strong> manipule les données — <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code></li>
<li><strong>DQL (Data Query Language) :</strong> interroge les données — <code>SELECT</code></li>
<li><strong>DCL (Data Control Language) :</strong> gère les droits — <code>GRANT</code>, <code>REVOKE</code></li>
<li><strong>TCL (Transaction Control Language) :</strong> gère les transactions — <code>COMMIT</code>, <code>ROLLBACK</code></li>
</ul>
<div class="highlight-box"><p><strong>À retenir :</strong> Dans la pratique quotidienne, DQL (SELECT) représente environ 80 % des requêtes écrites. Maîtriser SELECT dans toute sa complexité est la priorité absolue.</p></div>

<h3>La requête SELECT : anatomie complète</h3>
<p>La requête <code>SELECT</code> est le cœur de SQL. Sa structure suit un ordre précis, mais l'ordre d'exécution diffère de l'ordre d'écriture :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>SELECT colonnes           -- 5. Quelles colonnes afficher
FROM table                -- 1. Depuis quelle table
WHERE condition           -- 2. Filtrer les lignes
GROUP BY colonne          -- 3. Regrouper
HAVING condition_groupe   -- 4. Filtrer les groupes
ORDER BY colonne ASC/DESC -- 6. Trier
LIMIT n;                  -- 7. Limiter le nombre de résultats</code></pre>
</div>
<p>Comprendre l'ordre d'exécution évite des erreurs classiques, comme référencer un alias de colonne dans WHERE alors qu'il n'est pas encore calculé à ce stade.</p>

<h3>Filtrage avec WHERE</h3>
<p>La clause <code>WHERE</code> accepte de nombreux opérateurs de comparaison et de test :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Opérateurs de comparaison classiques
SELECT * FROM produits WHERE prix > 100;
SELECT * FROM clients WHERE nom = 'Dupont';
SELECT * FROM commandes WHERE date &gt;= '2024-01-01' AND date &lt; '2025-01-01';

-- BETWEEN (inclusif aux deux bornes)
SELECT * FROM produits WHERE prix BETWEEN 50 AND 200;

-- IN (liste de valeurs)
SELECT * FROM employes WHERE departement IN ('Ventes', 'Marketing', 'IT');

-- LIKE (motifs textuels, % = n''importe quelle séquence)
SELECT * FROM clients WHERE email LIKE '%@gmail.com';
SELECT * FROM produits WHERE reference LIKE 'REF-%';
SELECT * FROM articles WHERE titre LIKE '%SQL%';

-- IS NULL / IS NOT NULL
SELECT * FROM commandes WHERE date_livraison IS NULL;  -- non encore livrées</code></pre>
</div>

<h3>Les jointures (JOIN)</h3>
<p>Les jointures combinent des données provenant de plusieurs tables en exploitant les relations entre elles :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- INNER JOIN : uniquement les lignes ayant une correspondance dans les deux tables
SELECT c.nom, v.nom AS ville, COUNT(co.id) AS nb_commandes
FROM clients c
INNER JOIN villes v ON c.ville_id = v.id
INNER JOIN commandes co ON co.client_id = c.id
GROUP BY c.id, c.nom, v.nom;

-- LEFT JOIN : tous les clients, même ceux sans commande (NULL pour les colonnes commandes)
SELECT c.nom, COUNT(co.id) AS nb_commandes
FROM clients c
LEFT JOIN commandes co ON co.client_id = c.id
GROUP BY c.id, c.nom;

-- FULL OUTER JOIN : toutes les lignes des deux tables (PostgreSQL, pas MySQL)
SELECT c.nom, co.montant
FROM clients c
FULL OUTER JOIN commandes co ON co.client_id = c.id;</code></pre>
</div>
<div class="highlight-box"><p><strong>INNER vs LEFT :</strong> INNER JOIN exclut les lignes sans correspondance. LEFT JOIN les conserve avec des NULL. Choisir selon la question métier : "clients ayant commandé" (INNER) ou "tous les clients avec leur nombre de commandes" (LEFT).</p></div>

<h3>Fonctions d'agrégation et GROUP BY</h3>
<p>Les agrégations calculent des statistiques sur des groupes de lignes. La clause HAVING filtre les groupes après agrégation (contrairement à WHERE qui filtre les lignes) :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>SELECT
    departement,
    COUNT(*)             AS nb_employes,
    AVG(salaire)         AS salaire_moyen,
    MIN(salaire)         AS salaire_min,
    MAX(salaire)         AS salaire_max,
    SUM(salaire)         AS masse_salariale
FROM employes
GROUP BY departement
HAVING COUNT(*) >= 5          -- garder seulement les départements avec 5+ employés
ORDER BY salaire_moyen DESC;

-- COUNT DISTINCT : compter les valeurs uniques
SELECT COUNT(DISTINCT ville) AS nb_villes FROM clients;</code></pre>
</div>

<h3>Sous-requêtes</h3>
<p>Une sous-requête est une requête imbriquée dans une autre. Elle peut apparaître dans SELECT, FROM ou WHERE :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Dans WHERE : clients dont le total de commandes dépasse la moyenne
SELECT nom, email
FROM clients
WHERE id IN (
    SELECT client_id
    FROM commandes
    GROUP BY client_id
    HAVING SUM(montant) > (SELECT AVG(montant) FROM commandes)
);

-- Dans FROM (table dérivée / subquery factoring)
SELECT dept, salaire_moyen
FROM (
    SELECT departement AS dept, AVG(salaire) AS salaire_moyen
    FROM employes
    GROUP BY departement
) AS moyennes
WHERE salaire_moyen > 40000;

-- EXISTS : souvent plus efficace que IN sur de grandes tables
SELECT nom
FROM clients c
WHERE EXISTS (
    SELECT 1 FROM commandes co
    WHERE co.client_id = c.id AND co.montant > 500
);</code></pre>
</div>

<h3>Fonctions de fenêtrage (Window Functions)</h3>
<p>Les fonctions de fenêtrage permettent des calculs sur des "fenêtres" de lignes sans regrouper les résultats — elles restituent une ligne par ligne source tout en accédant aux voisins :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- ROW_NUMBER : numéroter les employés par salaire au sein de chaque département
SELECT nom, departement, salaire,
    ROW_NUMBER() OVER (PARTITION BY departement ORDER BY salaire DESC) AS rang_dept
FROM employes;

-- RANK et DENSE_RANK : classement avec gestion des ex-aequo
SELECT nom, salaire,
    RANK() OVER (ORDER BY salaire DESC)       AS rang,        -- saute les numéros
    DENSE_RANK() OVER (ORDER BY salaire DESC) AS rang_dense   -- ne saute pas
FROM employes;

-- Somme cumulative des ventes
SELECT date, montant,
    SUM(montant) OVER (ORDER BY date) AS cumul_ventes
FROM ventes;

-- LAG/LEAD : accéder à la ligne précédente ou suivante
SELECT date, ventes,
    LAG(ventes)  OVER (ORDER BY date) AS ventes_precedentes,
    LEAD(ventes) OVER (ORDER BY date) AS ventes_suivantes,
    ventes - LAG(ventes) OVER (ORDER BY date) AS variation
FROM stats_mensuelles;</code></pre>
</div>

<h3>DDL : créer et modifier les structures</h3>
<p>Le DDL définit le schéma de la base. Les contraintes d'intégrité sont définies au niveau de la base, pas seulement de l'application :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>CREATE TABLE clients (
    id         SERIAL PRIMARY KEY,
    nom        VARCHAR(100) NOT NULL,
    email      VARCHAR(255) UNIQUE,
    age        INTEGER CHECK (age >= 0 AND age &lt;= 150),
    ville_id   INTEGER REFERENCES villes(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Ajouter une colonne après coup
ALTER TABLE clients ADD COLUMN telephone VARCHAR(20);

-- Créer un index pour accélérer les recherches par email
CREATE INDEX idx_clients_email ON clients(email);

-- Vue : requête nommée et réutilisable
CREATE VIEW clients_actifs AS
SELECT c.nom, c.email, COUNT(co.id) AS nb_commandes
FROM clients c
LEFT JOIN commandes co ON co.client_id = c.id
GROUP BY c.id
HAVING COUNT(co.id) > 0;</code></pre>
</div>

<h3>Transactions et propriétés ACID</h3>
<p>Une transaction est un groupe d'opérations atomique. Les propriétés <strong>ACID</strong> garantissent la fiabilité des données :</p>
<ul>
<li><strong>Atomicité :</strong> tout ou rien — si une opération échoue, toutes sont annulées</li>
<li><strong>Cohérence :</strong> la base passe d'un état valide à un autre état valide</li>
<li><strong>Isolation :</strong> les transactions concurrentes ne s'interfèrent pas</li>
<li><strong>Durabilité :</strong> une transaction validée persiste même en cas de panne</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Virement bancaire : débit et crédit doivent réussir ensemble
BEGIN;

UPDATE comptes SET solde = solde - 500 WHERE id = 1;
UPDATE comptes SET solde = solde + 500 WHERE id = 2;

-- Si une erreur survient avant COMMIT, ROLLBACK est déclenché automatiquement
-- ou manuellement en cas de vérification métier échouée
COMMIT;</code></pre>
</div>

<h3>Optimisation des requêtes</h3>
<p>Sur des millions de lignes, les choix de conception font une différence de plusieurs ordres de grandeur :</p>
<ul>
<li><strong>Index :</strong> structures de données qui accélèrent la recherche. Créer des index sur les colonnes de WHERE, JOIN et ORDER BY. Un index composite (a, b) accélère les requêtes sur (a) ou (a, b) mais pas seulement (b).</li>
<li><strong>EXPLAIN ANALYZE :</strong> affiche le plan d'exécution réel avec les coûts estimés et mesurés. Les "Sequential Scan" sur de grandes tables signalent souvent un index manquant.</li>
<li><strong>Éviter SELECT * :</strong> sélectionner uniquement les colonnes nécessaires réduit le transfert réseau et permet l'utilisation d'index couvrants.</li>
<li><strong>Requêtes N+1 :</strong> antipattern classique en ORM — charger 100 objets puis faire 100 requêtes pour leurs relations. La solution est un JOIN ou un chargement eager.</li>
</ul>
<div class="highlight-box"><p><strong>Règle des 80/20 :</strong> 20 % des requêtes représentent 80 % de la charge. Identifier et optimiser ces requêtes critiques via les logs de requêtes lentes donne les meilleurs gains de performance.</p></div>
</div>
    </section>"""

# =========== BASES DE DONNEES / RELATIONNEL ===========
pages['bases-de-donnees/relationnel']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les fondements théoriques des bases de données</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>modèle relationnel</strong>, proposé par Edgar Codd en 1970, est le fondement théorique sur lequel reposent toutes les bases de données relationnelles modernes. Il représente les données sous forme de <em>tables</em> (relations) et exprime les liens entre elles via des <em>clés</em>, avec un cadre mathématique rigoureux issu de la théorie des ensembles.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Comprendre le modèle relationnel, c'est comprendre pourquoi les données sont structurées ainsi et comment concevoir des bases qui restent cohérentes et évolutives sur le long terme. C'est le socle de 50 ans de développement logiciel.</p>
      </div>
      <p class="resume-text">Les principes de normalisation, d'intégrité référentielle et d'algèbre relationnelle restent aussi pertinents aujourd'hui qu'à leur création. Tout développeur manipulant des données gagne à les maîtriser.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Modèle relationnel — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Tables, tuples et attributs</h3>
<p>Dans le modèle relationnel, toute information est représentée comme un ensemble de <strong>tuples</strong> organisés en <strong>relations</strong> (tables). Chaque table est définie par un <strong>schéma</strong> — un ensemble d'attributs avec leurs domaines :</p>
<ul>
<li><strong>Relation :</strong> ensemble non ordonné de tuples (l'ordre des lignes n'a pas de sens)</li>
<li><strong>Tuple :</strong> une ligne = une occurrence de l'entité représentée</li>
<li><strong>Attribut :</strong> une colonne = une propriété de l'entité</li>
<li><strong>Domaine :</strong> l'ensemble des valeurs possibles pour un attribut (INTEGER, VARCHAR, DATE...)</li>
</ul>
<div class="highlight-box"><p><strong>Propriété fondamentale :</strong> Chaque tuple d'une relation doit être unique — pas de doublons. Cette unicité est garantie par la clé primaire, dont la valeur est immuable et non nulle.</p></div>

<h3>Clés : primaires, candidates et étrangères</h3>
<p>Les clés garantissent l'unicité et expriment les liens entre tables :</p>
<ul>
<li><strong>Clé candidate :</strong> tout ensemble minimal d'attributs identifiant uniquement chaque tuple. Une table peut avoir plusieurs clés candidates.</li>
<li><strong>Clé primaire (PRIMARY KEY) :</strong> la clé candidate choisie comme identifiant officiel. Une seule par table, non NULL.</li>
<li><strong>Clé étrangère (FOREIGN KEY) :</strong> attribut(s) dont les valeurs correspondent à la clé primaire d'une autre table. Exprime une association entre entités.</li>
<li><strong>Clé artificielle :</strong> identifiant technique (entier auto-incrémenté) sans signification métier. Simple et stable dans le temps.</li>
<li><strong>Clé naturelle :</strong> identifiant tiré des données réelles (numéro de sécurité sociale, ISBN). Peut changer — risqué comme clé primaire.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>CREATE TABLE auteurs (
    id_auteur  SERIAL PRIMARY KEY,
    nom        VARCHAR(100) NOT NULL,
    prenom     VARCHAR(100)
);

CREATE TABLE livres (
    isbn       CHAR(13) PRIMARY KEY,    -- clé naturelle unique
    titre      VARCHAR(300) NOT NULL,
    annee      INTEGER,
    id_auteur  INTEGER REFERENCES auteurs(id_auteur) ON DELETE RESTRICT
    -- RESTRICT : interdit de supprimer un auteur ayant des livres
);</code></pre>
</div>

<h3>Intégrité référentielle et politiques de clé étrangère</h3>
<p>L'intégrité référentielle garantit que les clés étrangères pointent vers des enregistrements existants. Plusieurs politiques de réaction sont disponibles :</p>
<ul>
<li><strong>RESTRICT :</strong> interdit la suppression/modification si des enregistrements dépendants existent</li>
<li><strong>CASCADE :</strong> propage automatiquement la suppression aux dépendants</li>
<li><strong>SET NULL :</strong> met la clé étrangère à NULL dans les dépendants</li>
<li><strong>SET DEFAULT :</strong> remet la valeur par défaut dans les dépendants</li>
</ul>
<div class="highlight-box"><p><strong>CASCADE avec prudence :</strong> ON DELETE CASCADE supprime automatiquement tous les enregistrements liés. Très pratique mais dangereux : une suppression accidentelle peut effacer des milliers de lignes en cascade sans avertissement.</p></div>

<h3>Normalisation : les formes normales</h3>
<p>La normalisation élimine les redondances et les anomalies de mise à jour. Elle suit des "formes normales" progressives :</p>
<p><strong>1ère Forme Normale (1NF) :</strong> chaque cellule contient une valeur atomique. Pas de listes ni de groupes répétitifs dans une colonne.</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- NON-1NF : plusieurs valeurs dans une cellule (mauvais)
-- commande_id | produits
-- 1           | "stylo, cahier, règle"

-- 1NF : une ligne par produit (correct)
-- commande_id | produit_id | produit
-- 1           | 10         | stylo
-- 1           | 11         | cahier
-- 1           | 12         | règle</code></pre>
</div>
<p><strong>2ème Forme Normale (2NF) :</strong> en 1NF + tout attribut non-clé dépend entièrement de la clé primaire. Élimine les dépendances partielles dans les clés composées.</p>
<p><strong>3ème Forme Normale (3NF) :</strong> en 2NF + aucun attribut non-clé ne dépend d'un autre attribut non-clé. Élimine les dépendances transitives.</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- NON-3NF : ville dépend de code_postal, pas directement de client_id
-- clients(client_id, nom, code_postal, ville)  -- redondance si même CP pour 100 clients

-- 3NF : extraire la dépendance transitive
CREATE TABLE codes_postaux (
    code_postal CHAR(5) PRIMARY KEY,
    ville       VARCHAR(100) NOT NULL
);

CREATE TABLE clients (
    client_id   SERIAL PRIMARY KEY,
    nom         VARCHAR(100) NOT NULL,
    code_postal CHAR(5) REFERENCES codes_postaux(code_postal)
);</code></pre>
</div>
<p><strong>BCNF (Boyce-Codd Normal Form) :</strong> version renforcée de 3NF couvrant des cas avec plusieurs clés candidates qui se chevauchent. Les <strong>4NF</strong> et <strong>5NF</strong> traitent les dépendances multivaluées, rarement rencontrées en pratique.</p>

<h3>Algèbre relationnelle</h3>
<p>L'algèbre relationnelle est le fondement mathématique de SQL. Codd a défini 8 opérations fondamentales :</p>
<ul>
<li><strong>Sélection (σ) :</strong> filtre les tuples selon une condition — correspond à WHERE en SQL</li>
<li><strong>Projection (π) :</strong> retient seulement certains attributs — correspond à SELECT en SQL</li>
<li><strong>Produit cartésien (×) :</strong> combine chaque tuple de R avec chaque tuple de S</li>
<li><strong>Jointure (⋈) :</strong> produit cartésien filtré par une condition — correspond à JOIN en SQL</li>
<li><strong>Union (∪) :</strong> réunit deux relations de même schéma — correspond à UNION en SQL</li>
<li><strong>Intersection (∩) :</strong> tuples communs aux deux relations</li>
<li><strong>Différence (−) :</strong> tuples de R non présents dans S — correspond à EXCEPT en SQL</li>
<li><strong>Division :</strong> opération complexe exprimant "pour tous les éléments de S" — pas d'équivalent direct en SQL</li>
</ul>
<div class="highlight-box"><p><strong>SQL et algèbre :</strong> SQL n'est pas une implémentation directe de l'algèbre relationnelle mais s'en inspire. Il ajoute ORDER BY, les agrégations et les fonctions de fenêtrage qui n'existent pas dans le modèle théorique original de Codd.</p></div>

<h3>Modélisation entité-association</h3>
<p>Avant de créer les tables, on modélise le domaine avec un <strong>diagramme entité-association</strong> :</p>
<ul>
<li><strong>Entité :</strong> objet distinct du domaine — CLIENT, PRODUIT, COMMANDE</li>
<li><strong>Association :</strong> lien entre entités — "passe" entre CLIENT et COMMANDE</li>
<li><strong>Cardinalité :</strong> nombre de participations — 1:1, 1:N, N:M</li>
</ul>
<p>Les associations <strong>N:M</strong> nécessitent une table de jonction lors de la traduction en schéma relationnel :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- N:M : un étudiant suit plusieurs cours, un cours a plusieurs étudiants
-- La note est un attribut de l'association, pas des entités
CREATE TABLE inscriptions (
    etudiant_id INTEGER REFERENCES etudiants(id) ON DELETE CASCADE,
    cours_id    INTEGER REFERENCES cours(id) ON DELETE CASCADE,
    date_inscription DATE NOT NULL DEFAULT CURRENT_DATE,
    note        DECIMAL(4,2),
    PRIMARY KEY (etudiant_id, cours_id)  -- clé primaire composite
);</code></pre>
</div>

<h3>Dénormalisation stratégique</h3>
<p>La normalisation maximale n'est pas toujours optimale en production. La <strong>dénormalisation</strong> introduit intentionnellement des redondances pour améliorer les performances en lecture :</p>
<ul>
<li><strong>Colonnes calculées :</strong> stocker le total d'une commande plutôt que le recalculer à chaque requête</li>
<li><strong>Tables agrégées :</strong> précalculer des statistiques lourdes dans des tables dédiées (data warehousing)</li>
<li><strong>Duplication de colonnes :</strong> répliquer le nom d'un client dans la table commandes pour éviter une jointure fréquente</li>
</ul>
<div class="highlight-box"><p><strong>Compromis :</strong> La normalisation garantit la cohérence au détriment des performances en lecture. La dénormalisation améliore les lectures au détriment de la cohérence. Les bases OLTP (transactionnelles) privilégient la normalisation ; les entrepôts de données (OLAP, analytiques) acceptent plus de dénormalisation pour des requêtes plus rapides.</p></div>
</div>
    </section>"""

# =========== BASES DE DONNEES / NOSQL ===========
pages['bases-de-donnees/nosql']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les alternatives au modèle relationnel</p>
        </div>
      </div>
      <p class="resume-text">Le mouvement <strong>NoSQL</strong> (Not Only SQL) émerge dans les années 2000 pour répondre aux limites des bases relationnelles face aux volumes massifs et à la flexibilité requise par les applications web à grande échelle. MongoDB, Redis, Cassandra, Neo4j — chaque système NoSQL adopte un modèle de données différent, optimisé pour un cas d'usage spécifique.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> NoSQL ne remplace pas le relationnel — il le complète. Le choix dépend du problème : structure fixe vs schéma flexible, cohérence forte vs disponibilité maximale, transactions complexes vs performance à l'échelle du web.</p>
      </div>
      <p class="resume-text">Comprendre le NoSQL, c'est comprendre le théorème CAP, les compromis entre cohérence et disponibilité, et les patterns d'accès aux données qui justifient chaque modèle de stockage.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>NoSQL — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Le théorème CAP</h3>
<p>Le théorème CAP (Brewer, 2000) stipule qu'un système distribué ne peut garantir simultanément que deux des trois propriétés suivantes :</p>
<ul>
<li><strong>Consistency (Cohérence) :</strong> chaque lecture reçoit la version la plus récente des données</li>
<li><strong>Availability (Disponibilité) :</strong> chaque requête reçoit une réponse, même si elle n'est pas la plus récente</li>
<li><strong>Partition tolerance (Tolérance au partitionnement) :</strong> le système fonctionne malgré une perte de communication entre nœuds</li>
</ul>
<p>Dans un réseau réel, les partitions réseau sont inévitables — tout système distribué doit donc choisir entre C et A :</p>
<ul>
<li><strong>CP :</strong> MongoDB, HBase — retourne une erreur si la cohérence ne peut être garantie</li>
<li><strong>AP :</strong> Cassandra, CouchDB — répond toujours, même avec des données potentiellement obsolètes</li>
</ul>
<div class="highlight-box"><p><strong>BASE vs ACID :</strong> Les systèmes NoSQL AP suivent le modèle BASE (Basically Available, Soft state, Eventually consistent) — les données finissent par converger vers un état cohérent, mais une fenêtre d'incohérence peut exister.</p></div>

<h3>Bases orientées documents : MongoDB</h3>
<p>Les bases documentaires stockent des données sous forme de documents semi-structurés (JSON/BSON). Chaque document peut avoir une structure différente — pas de schéma rigide à définir a priori :</p>
<div class="code-block">
  <div class="code-header"><span>JavaScript</span></div>
  <pre><code>// Document MongoDB : article de blog avec commentaires embarqués
{
  "_id": ObjectId("507f1f77bcf86cd799439011"),
  "titre": "Introduction à MongoDB",
  "auteur": { "nom": "Martin", "email": "martin@example.com" },
  "tags": ["nosql", "mongodb", "database"],
  "commentaires": [
    { "auteur": "Alice", "texte": "Excellent!", "date": ISODate("2024-03-16") }
  ]
}

// Requêtes
db.articles.find({ "tags": "mongodb" })
db.articles.find({ "auteur.nom": "Martin" })  // champ imbriqué

// Agrégation : compter les articles par tag
db.articles.aggregate([
  { $unwind: "$tags" },
  { $group: { _id: "$tags", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])</code></pre>
</div>
<p><strong>Cas d'usage :</strong> catalogues produits avec attributs variables, gestion de contenu, profils utilisateurs, applications avec schéma évolutif.</p>

<h3>Bases clé-valeur : Redis</h3>
<p>Redis est une base en mémoire qui stocke des paires clé-valeur. Sa vitesse extrême (latence microseconde) en fait le choix numéro un pour le cache et les sessions :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># Chaînes de caractères avec expiration
SET session:user:42 '{"nom":"Alice","role":"admin"}' EX 3600
GET session:user:42

# Compteurs atomiques (nombre de vues)
INCR page:vues:/accueil
INCRBY page:vues:/accueil 10

# Listes (files de messages, dernières notifications)
LPUSH notifications:user:42 '{"type":"message","from":"Bob"}'
LRANGE notifications:user:42 0 9   # 10 dernières

# Sets ordonnés : classements (leaderboards)
ZADD scores 1250 "alice" 980 "bob" 1100 "charlie"
ZREVRANK scores "alice"              # position dans le classement

# Hash : objet avec champs
HSET user:42 nom "Alice" score 1250
HINCRBY user:42 score 50</code></pre>
</div>
<p><strong>Cas d'usage :</strong> cache applicatif, sessions, compteurs temps réel, files d'attente, pub/sub, classements.</p>

<h3>Bases colonnes : Cassandra</h3>
<p>Apache Cassandra organise les données en colonnes et est optimisée pour les écritures massives et les requêtes sur des plages de données temporelles :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- CQL (Cassandra Query Language) similaire à SQL
CREATE TABLE mesures_iot (
    capteur_id  UUID,
    timestamp   TIMESTAMP,
    temperature DOUBLE,
    humidite    DOUBLE,
    PRIMARY KEY (capteur_id, timestamp)  -- partition key + clustering key
) WITH CLUSTERING ORDER BY (timestamp DESC);

-- Cassandra exige l'utilisation de la partition key dans les requêtes
SELECT * FROM mesures_iot
WHERE capteur_id = 550e8400-e29b-41d4-a716-446655440000
AND timestamp > '2024-01-01 00:00:00'
LIMIT 100;</code></pre>
</div>
<p>Cassandra est un système pair-à-pair sans maître. Les données sont répliquées automatiquement selon le facteur de réplication. Écriture et lecture peuvent cibler 1 nœud (rapide) ou un quorum (cohérent) selon le niveau de cohérence configuré.</p>

<h3>Bases de graphes : Neo4j</h3>
<p>Les bases de graphes représentent les données comme des <strong>nœuds</strong> connectés par des <strong>relations</strong>. Elles excellent quand les connexions entre données sont aussi importantes que les données elles-mêmes :</p>
<div class="code-block">
  <div class="code-header"><span>JavaScript</span></div>
  <pre><code>// Cypher — langage de requête de Neo4j

// Créer des nœuds et une relation
CREATE (alice:Personne {nom: "Alice"})-[:AMIS_AVEC {depuis: 2020}]->(bob:Personne {nom: "Bob"})

// Amis d'amis (degré 2) — difficile et coûteux en SQL
MATCH (p:Personne {nom: "Alice"})-[:AMIS_AVEC*2]->(ami_ami)
WHERE ami_ami &lt;&gt; p
RETURN ami_ami.nom

// Chemin le plus court entre deux personnes
MATCH chemin = shortestPath(
  (alice:Personne {nom: "Alice"})-[:AMIS_AVEC*]-(cible:Personne {nom: "Charlie"})
)
RETURN length(chemin), [n IN nodes(chemin) | n.nom]

// Recommandation : films aimés par mes amis mais pas encore vus
MATCH (moi:Personne {nom: "Alice"})-[:AMIS_AVEC]->(ami)-[:A_AIME]->(film)
WHERE NOT (moi)-[:A_VU]->(film)
RETURN film.titre, count(ami) AS popularite
ORDER BY popularite DESC</code></pre>
</div>
<p><strong>Cas d'usage :</strong> réseaux sociaux, détection de fraude, moteurs de recommandation, graphes de connaissance, infrastructure réseau.</p>

<h3>Choisir la bonne base de données</h3>
<p>Le choix optimal dépend de plusieurs dimensions :</p>
<ul>
<li><strong>Structure :</strong> schéma fixe et stable → SQL ; schéma variable → NoSQL document</li>
<li><strong>Type de requêtes :</strong> jointures complexes → SQL ; accès simple par clé → Redis/Cassandra</li>
<li><strong>Volume d'écriture :</strong> millions d'écritures/seconde → Cassandra ; cache sub-milliseconde → Redis</li>
<li><strong>Cohérence :</strong> transactions ACID critiques (banque, médecine) → PostgreSQL ; cohérence éventuelle acceptable → Cassandra</li>
<li><strong>Relations complexes :</strong> graphes de connexions → Neo4j ; données tabulaires → SQL</li>
</ul>
<div class="highlight-box"><p><strong>Polyglot persistence :</strong> Les architectures modernes combinent souvent plusieurs systèmes — PostgreSQL pour les données transactionnelles, Redis pour le cache, Elasticsearch pour la recherche full-text, Cassandra pour les séries temporelles. Chaque outil excelle dans son domaine spécifique.</p></div>
</div>
    </section>"""

# =========== BASES DE DONNEES / CONCEPTION ===========
pages['bases-de-donnees/conception']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Concevoir des schémas robustes et évolutifs</p>
        </div>
      </div>
      <p class="resume-text">La <strong>conception de bases de données</strong> est l'art de transformer les besoins métier en un schéma de données cohérent, performant et maintenable. Un mauvais schéma génère des anomalies de données, des requêtes complexes et des migrations douloureuses. Un bon schéma dure des années sans modifications majeures.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> La conception se fait en plusieurs étapes progressives — modélisation conceptuelle (MCD), logique (MLD), puis physique. Chaque étape raffine la précédente en ajoutant des détails d'implémentation.</p>
      </div>
      <p class="resume-text">Les méthodes MERISE (française) et UML s'utilisent pour modéliser les données. MERISE reste populaire dans les environnements francophones avec son MCD (Modèle Conceptuel de Données) et son MLD (Modèle Logique de Données).</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Conception — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Les trois niveaux de modélisation</h3>
<p>La conception suit une démarche descendante en trois niveaux d'abstraction :</p>
<ul>
<li><strong>Niveau conceptuel (MCD) :</strong> représente le domaine réel indépendamment de tout SGBD. On identifie les entités, leurs propriétés et les associations. Langage : diagramme entité-association.</li>
<li><strong>Niveau logique (MLD) :</strong> traduit le MCD en tables relationnelles avec clés primaires et étrangères. Indépendant du SGBD spécifique mais adapté au modèle relationnel.</li>
<li><strong>Niveau physique :</strong> implémentation concrète — types de données précis, index, partitionnement, stockage, paramètres SGBD.</li>
</ul>
<div class="highlight-box"><p><strong>Pourquoi trois niveaux ?</strong> Séparer le "quoi" (conceptuel) du "comment" (physique) permet de changer de SGBD sans tout remodéliser, et de discuter du modèle avec les métiers sans détails techniques.</p></div>

<h3>Le MCD (Modèle Conceptuel de Données)</h3>
<p>Un MCD est un graphe dont les nœuds sont des <strong>entités</strong> et les arcs sont des <strong>associations</strong> avec leurs cardinalités :</p>
<ul>
<li><strong>Entité :</strong> objet distinct du domaine — CLIENT, PRODUIT, COMMANDE</li>
<li><strong>Propriété :</strong> caractéristique d'une entité — nom, date, prix</li>
<li><strong>Identifiant :</strong> propriété(s) identifiant de manière unique chaque occurrence</li>
<li><strong>Association :</strong> lien entre deux entités ou plus — "passe" entre CLIENT et COMMANDE</li>
<li><strong>Cardinalité :</strong> minimum et maximum de participations — (0,1), (1,1), (0,N), (1,N)</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- MCD traduit en MLD : gestion de bibliothèque
CREATE TABLE adherents (
    id_adherent SERIAL PRIMARY KEY,
    nom         VARCHAR(100) NOT NULL,
    prenom      VARCHAR(100) NOT NULL,
    email       VARCHAR(255) UNIQUE NOT NULL,
    date_inscription DATE DEFAULT CURRENT_DATE
);

CREATE TABLE auteurs (
    id_auteur SERIAL PRIMARY KEY,
    nom       VARCHAR(100) NOT NULL,
    prenom    VARCHAR(100)
);

CREATE TABLE livres (
    isbn       CHAR(13) PRIMARY KEY,
    titre      VARCHAR(300) NOT NULL,
    annee      SMALLINT,
    id_auteur  INTEGER REFERENCES auteurs(id_auteur)
);

-- Association avec attributs propres : EMPRUNT
CREATE TABLE emprunts (
    id_emprunt         SERIAL PRIMARY KEY,
    id_adherent        INTEGER REFERENCES adherents(id_adherent) ON DELETE RESTRICT,
    isbn               CHAR(13) REFERENCES livres(isbn) ON DELETE RESTRICT,
    date_emprunt       DATE NOT NULL DEFAULT CURRENT_DATE,
    date_retour_prevue DATE NOT NULL,
    date_retour        DATE  -- NULL si non encore rendu
);</code></pre>
</div>

<h3>Règles de passage MCD → MLD</h3>
<p>La traduction du MCD en MLD suit des règles précises selon les cardinalités des associations :</p>
<ul>
<li><strong>Association 1:1 :</strong> fusionner les deux tables ou ajouter une clé étrangère dans l'une d'elles</li>
<li><strong>Association 1:N :</strong> ajouter une clé étrangère du côté "N" qui référence le côté "1"</li>
<li><strong>Association N:M :</strong> créer une table de jonction avec les deux clés étrangères comme clé primaire composite</li>
<li><strong>Association ternaire :</strong> créer une table avec trois clés étrangères</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- N:M : un article peut avoir plusieurs tags, un tag peut qualifier plusieurs articles
CREATE TABLE articles_tags (
    article_id INTEGER REFERENCES articles(id) ON DELETE CASCADE,
    tag_id     INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (article_id, tag_id)  -- clé primaire composite
);

-- Ternaire : un enseignant enseigne une matière dans une classe
CREATE TABLE enseignements (
    enseignant_id INTEGER REFERENCES enseignants(id),
    matiere_id    INTEGER REFERENCES matieres(id),
    classe_id     INTEGER REFERENCES classes(id),
    nb_heures     INTEGER NOT NULL,
    PRIMARY KEY (enseignant_id, matiere_id, classe_id)
);</code></pre>
</div>

<h3>Héritage et spécialisation</h3>
<p>Quand des entités partagent des propriétés communes mais ont aussi des propriétés spécifiques, trois stratégies SQL existent pour l'héritage :</p>
<ul>
<li><strong>Table unique (Single Table Inheritance) :</strong> tout dans une table avec un discriminant. Simple, rapide, mais nombreux NULL. Adapté si les sous-types sont similaires.</li>
<li><strong>Table par sous-type (Class Table Inheritance) :</strong> table parent + une table par sous-type avec clé étrangère. Propre, sans NULL inutiles, mais nécessite une jointure.</li>
<li><strong>Table par type concret (Concrete Table Inheritance) :</strong> chaque sous-type a sa table complète. Rapide pour chaque type mais duplication du schéma, requêtes union complexes.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Table par sous-type : héritage VEHICULE -> VOITURE, MOTO
CREATE TABLE vehicules (
    id       SERIAL PRIMARY KEY,
    marque   VARCHAR(50) NOT NULL,
    modele   VARCHAR(100) NOT NULL,
    annee    SMALLINT,
    type     VARCHAR(20) NOT NULL CHECK (type IN ('voiture', 'moto'))
);

CREATE TABLE voitures (
    vehicule_id   INTEGER PRIMARY KEY REFERENCES vehicules(id) ON DELETE CASCADE,
    nb_portes     SMALLINT,
    coffre_litres INTEGER
);

CREATE TABLE motos (
    vehicule_id  INTEGER PRIMARY KEY REFERENCES vehicules(id) ON DELETE CASCADE,
    cylindree_cc INTEGER,
    type_guidon  VARCHAR(30)
);</code></pre>
</div>

<h3>Migrations de schéma versionnées</h3>
<p>Une base de données évolue avec l'application. Les <strong>migrations</strong> sont des scripts versionnés qui modifient le schéma de manière contrôlée et reproductible :</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Migration 001 : ajouter une colonne (non destructif)
ALTER TABLE clients ADD COLUMN telephone VARCHAR(20);

-- Migration 002 : index sans bloquer les lectures/écritures (PostgreSQL)
CREATE INDEX CONCURRENTLY idx_commandes_date ON commandes(date_commande);

-- Migration 003 : renommer une colonne de façon sécurisée
-- Étape 1 : ajouter la nouvelle colonne
ALTER TABLE produits ADD COLUMN prix_ht DECIMAL(10,2);
-- Étape 2 : copier les données
UPDATE produits SET prix_ht = prix_ttc / 1.2;
-- Étape 3 : supprimer l'ancienne (après mise à jour de l'application)
ALTER TABLE produits DROP COLUMN prix_ttc;</code></pre>
</div>
<p>Des outils comme <strong>Flyway</strong> ou <strong>Liquibase</strong> automatisent la gestion des migrations : ils maintiennent un historique des scripts appliqués et les exécutent dans l'ordre lors des déploiements.</p>

<h3>Bonnes pratiques de conception</h3>
<p>Les erreurs de conception initiales se paient très cher lors des évolutions :</p>
<ul>
<li><strong>Conventions de nommage cohérentes :</strong> tables au singulier ou pluriel (choisir et tenir), colonnes en snake_case, clés étrangères nommées <code>id_entite</code> ou <code>entite_id</code></li>
<li><strong>Clés artificielles :</strong> préférer un SERIAL ou UUID technique plutôt qu'une clé naturelle qui peut changer</li>
<li><strong>Timestamps sur toutes les tables :</strong> <code>created_at TIMESTAMP DEFAULT NOW()</code> et <code>updated_at</code> — indispensables pour l'audit et le débogage</li>
<li><strong>Soft delete :</strong> envisager <code>deleted_at TIMESTAMP</code> plutôt que DELETE physique pour conserver l'historique</li>
<li><strong>Contraintes en base :</strong> NOT NULL, UNIQUE, CHECK, FOREIGN KEY — ne pas faire confiance uniquement à l'application</li>
</ul>
<div class="highlight-box"><p><strong>Dette technique :</strong> Un schéma mal conçu génère une dette croissante. Corriger une table mal normalisée avec des millions de lignes en production est une opération délicate. Investir du temps dans la conception initiale est toujours rentable sur le long terme.</p></div>
</div>
    </section>"""

# =========== BASES DE DONNEES / BIG DATA ===========
pages['bases-de-donnees/big-data']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Traiter et analyser les données à grande échelle</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>Big Data</strong> désigne les ensembles de données si volumineux, variés ou rapides qu'ils dépassent les capacités des outils traditionnels de gestion de bases de données. Le modèle des <strong>3V</strong> (Volume, Vélocité, Variété) caractérise ces données, auxquels s'ajoutent la Véracité et la Valeur.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Le Big Data n'est pas qu'une question de taille — c'est une philosophie de traitement distribué. Plutôt que d'amener les données vers le calcul, on amène le calcul vers les données. C'est le principe fondateur de Hadoop et de ses successeurs.</p>
      </div>
      <p class="resume-text">Hadoop, Spark, les data lakes et les entrepôts de données forment l'écosystème Big Data. Chaque outil répond à des besoins différents : traitement batch vs temps réel, stockage brut vs données structurées pour l'analyse.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Big Data — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Le paradigme MapReduce</h3>
<p>MapReduce est le modèle de programmation fondateur du Big Data, proposé par Google en 2004. Il décompose tout traitement distribué en deux phases parallélisables :</p>
<ul>
<li><strong>Map :</strong> transforme chaque entrée en paires (clé, valeur). Chaque nœud du cluster traite sa portion de données indépendamment.</li>
<li><strong>Shuffle :</strong> redistribue automatiquement les paires par clé entre les nœuds.</li>
<li><strong>Reduce :</strong> agrège toutes les valeurs associées à chaque clé pour produire le résultat final.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Exemple conceptuel : compter les mots dans des millions de documents

def mapper(document_id, contenu):
    # S''exécute sur chaque bloc de données (128 Mo par défaut dans HDFS)
    for mot in contenu.split():
        yield (mot.lower(), 1)

def reducer(mot, compteurs):
    # Reçoit (clé, [liste de valeurs]) pour chaque clé unique
    return (mot, sum(compteurs))

# En pratique, Hadoop parallélise automatiquement :
# - mapper() sur chaque DataNode qui possède les blocs
# - shuffle/sort : regroupement et tri des paires par clé
# - reducer() sur les NameNodes, un par clé unique</code></pre>
</div>

<h3>Apache Hadoop : l'écosystème fondateur</h3>
<p>Hadoop est l'implémentation open-source du framework MapReduce de Google. Il se compose de deux composants principaux :</p>
<ul>
<li><strong>HDFS (Hadoop Distributed File System) :</strong> système de fichiers distribué. Les fichiers sont découpés en blocs (128 Mo par défaut) répliqués sur 3 nœuds. Tolérant aux pannes — la perte d'un nœud ne cause pas de perte de données.</li>
<li><strong>YARN (Yet Another Resource Negotiator) :</strong> gestionnaire de ressources du cluster. Alloue CPU et mémoire aux applications en cours d'exécution.</li>
</ul>
<p>L'écosystème Hadoop inclut : Hive (SQL sur HDFS), Pig (langage de flux de données), HBase (base colonne sur HDFS), Sqoop (import/export depuis SGBD relationnels), Oozie (orchestrateur de workflows).</p>
<div class="highlight-box"><p><strong>Limite de Hadoop MapReduce :</strong> Il écrit les résultats intermédiaires sur disque — lent pour les traitements itératifs comme le machine learning. Apache Spark résout ce problème en gardant les données en mémoire RAM.</p></div>

<h3>Apache Spark : le Big Data en mémoire</h3>
<p>Apache Spark est 10 à 100 fois plus rapide que Hadoop MapReduce grâce au traitement en mémoire. Son modèle de données central est le <strong>RDD</strong> (Resilient Distributed Dataset) — une collection distribuée, tolérante aux pannes et paresseuse :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>from pyspark.sql import SparkSession
from pyspark.sql.functions import col, count, avg, desc, year

spark = SparkSession.builder.appName("Analyse ventes").getOrCreate()

# Charger depuis Parquet — format optimisé pour l''analytique colonne
ventes = spark.read.parquet("s3://bucket/ventes/")

# Requête analytique avec l''API DataFrame (similaire à pandas, mais distribuée)
analyse = (ventes
    .filter(col("statut") == "validée")
    .filter(year(col("date")) == 2024)
    .groupBy("region", "categorie_produit")
    .agg(
        count("*").alias("nb_ventes"),
        avg("montant").alias("montant_moyen"),
        (count("*") * avg("montant")).alias("ca_total")
    )
    .orderBy(desc("ca_total"))
)

# Spark est paresseux : les transformations ne s''exécutent qu''à l''action
analyse.show(20)  # action = déclenchement du calcul
analyse.write.mode("overwrite").parquet("s3://bucket/analyses/ca_2024/")</code></pre>
</div>
<p>Spark supporte aussi le SQL natif via <code>spark.sql()</code>, le streaming avec Structured Streaming, et le machine learning avec MLlib.</p>

<h3>Formats de données analytiques</h3>
<p>Le choix du format de stockage impacte considérablement les performances :</p>
<ul>
<li><strong>CSV/JSON :</strong> format texte lisible, universel, mais volumineux et lent à lire. Adapté aux échanges entre systèmes, pas au stockage analytique.</li>
<li><strong>Parquet :</strong> format colonne binaire compressé. Idéal pour l'analytique — on lit uniquement les colonnes nécessaires. Compression typique 5-10x par rapport au CSV.</li>
<li><strong>ORC (Optimized Row Columnar) :</strong> similaire à Parquet, préféré dans l'écosystème Hive.</li>
<li><strong>Avro :</strong> format ligne avec schéma intégré. Adapté aux pipelines de streaming et à Kafka.</li>
<li><strong>Delta Lake / Apache Iceberg :</strong> couche transactionnelle au-dessus de Parquet. Apporte les propriétés ACID aux data lakes — mises à jour, suppressions, time travel.</li>
</ul>

<h3>Data Lakes vs Data Warehouses</h3>
<p>Deux architectures complémentaires pour le stockage analytique :</p>
<ul>
<li><strong>Data Lake :</strong> stockage brut de toutes les données dans leur format d'origine. Pas de schéma imposé à l'ingestion — "stocker d'abord, analyser ensuite". Économique (S3, GCS) mais peut devenir un "data swamp" sans gouvernance.</li>
<li><strong>Data Warehouse :</strong> stockage structuré et nettoyé, optimisé pour les requêtes analytiques. Schéma défini, données transformées. Technologies : Snowflake, BigQuery, Redshift. Plus cher mais immédiatement requêtable avec SQL standard.</li>
<li><strong>Data Lakehouse :</strong> architecture hybride (Delta Lake, Iceberg) — stockage économique du lac avec capacités transactionnelles et analytiques de l'entrepôt.</li>
</ul>

<h3>Pipelines ETL et ELT</h3>
<p>Les données brutes doivent être transformées avant d'être analysées. Deux approches :</p>
<ul>
<li><strong>ETL (Extract, Transform, Load) :</strong> transformation avant le chargement. Classique, les données en entrepôt sont déjà propres.</li>
<li><strong>ELT (Extract, Load, Transform) :</strong> chargement d'abord, transformation ensuite dans l'entrepôt. Possible grâce à la puissance de calcul des entrepôts modernes (BigQuery, Snowflake).</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>import pandas as pd

# ETL simplifié avec pandas (pour des volumes moyens)

# 1. EXTRACT
ventes = pd.read_csv("ventes_2024.csv")
clients = pd.read_sql("SELECT id, region FROM clients", conn)

# 2. TRANSFORM
propres = (ventes
    .dropna(subset=["montant", "client_id"])
    .assign(
        montant=lambda df: pd.to_numeric(df.montant, errors="coerce"),
        date=lambda df: pd.to_datetime(df.date, dayfirst=True),
        mois=lambda df: df.date.dt.to_period("M")
    )
    .merge(clients, left_on="client_id", right_on="id")
    .query("0 &lt; montant &lt;= 100000")
)

# 3. LOAD
propres.to_sql("fait_ventes", engine, if_exists="append", index=False)</code></pre>
</div>

<h3>Streaming : traitement en temps réel</h3>
<p>Le traitement batch convient aux analyses différées (quotidien, horaire). Pour les données en temps réel, on utilise des architectures de streaming :</p>
<ul>
<li><strong>Apache Kafka :</strong> plateforme de streaming distribuée. Les producteurs publient des messages dans des "topics", les consommateurs les lisent à leur rythme avec persistance. Latence milliseconde, millions de messages/seconde, rétention configurable.</li>
<li><strong>Apache Flink :</strong> moteur de traitement de flux. Calcule des agrégations sur des fenêtres glissantes, détecte des patterns temporels, gère les données hors ordre.</li>
<li><strong>Spark Structured Streaming :</strong> traitement de flux par micro-batches dans l'écosystème Spark, avec la même API que les DataFrames batch.</li>
</ul>
<div class="highlight-box"><p><strong>Lambda Architecture :</strong> Combine traitement batch (couche batch — précis mais lent) et streaming (couche speed — rapide mais approximatif) avec une couche de service qui fusionne les résultats. Garantit à la fois la précision et la fraîcheur des données.</p></div>
</div>
    </section>"""

print("BDD articles done:")
print(f"  SQL:        {len(pages['bases-de-donnees/sql']['content'])} chars")
print(f"  Relationnel:{len(pages['bases-de-donnees/relationnel']['content'])} chars")
print(f"  NoSQL:      {len(pages['bases-de-donnees/nosql']['content'])} chars")
print(f"  Conception: {len(pages['bases-de-donnees/conception']['content'])} chars")
print(f"  BigData:    {len(pages['bases-de-donnees/big-data']['content'])} chars")

with open('assets/content/informatique.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK")
