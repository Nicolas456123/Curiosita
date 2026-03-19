#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('assets/content/informatique.json', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

enrichments = {}

enrichments['bases-de-donnees/nosql'] = """
<h3>Systèmes de fichiers distribués et stockage objet</h3>
<p class="resume-text">Le stockage objet (Amazon S3, Google Cloud Storage, MinIO) gère des données non structurées via une API HTTP PUT/GET/DELETE. Chaque objet possède un identifiant unique (key), des métadonnées, et un contenu binaire de taille arbitraire. Le stockage objet est infiniment scalable, hautement disponible via la réplication multi-zones, et moins coûteux que les systèmes de fichiers distribués (NFS, GlusterFS). HDFS (Hadoop Distributed File System) optimise pour les grandes lectures séquentielles en partitionnant les fichiers en blocs de 128 MB répliqués sur 3 nœuds.</p>
<div class="highlight-box">
<p><strong>HDFS vs Object Storage :</strong> HDFS offre un namespace hiérarchique et optimise les MapReduce workloads avec la localité des données (computation proche du stockage). Le stockage objet est un namespace plat (key-value) avec versioning et politiques de cycle de vie (transition vers stockage froid, expiration). S3 est compatible avec les outils Hadoop via le connecteur s3a, permettant aux clusters Spark de lire directement depuis S3 sans HDFS local — pattern dominant dans les architectures data lake modernes.</p>
</div>
<h3>Bases de données clé-valeur et colonnes larges</h3>
<p class="resume-text">Les stores clé-valeur (Redis, DynamoDB, Memcached) offrent des opérations O(1) sur des paires clé-valeur. Redis supporte des structures de données riches (listes, ensembles, sorted sets, hashes, streams) avec persistance optionnelle et clustering natif. DynamoDB garantit des latences single-digit millisecond à n'importe quelle échelle via des partitions automatiques. Les bases colonnes larges (Cassandra, HBase) organisent les données en familles de colonnes, optimisant les lectures et écritures de lignes entières dans des clusters distribués.</p>
<div class="highlight-box">
<p><strong>Modèle de données Cassandra :</strong> Dans Cassandra, le partition key détermine le nœud de stockage via un hash cohérent (consistent hashing). Le clustering key ordonne les données à l'intérieur d'une partition. La conception du schéma part des patterns de requêtes (query-driven design) plutôt que de la normalisation. Les "tombstones" marquent les suppressions et sont nettoyées par compaction. Le tunable consistency (ONE, QUORUM, ALL) permet d'ajuster le compromis disponibilité/cohérence par opération.</p>
</div>
<h3>Bases documentaires et recherche fulltext</h3>
<p class="resume-text">MongoDB stocke des documents JSON imbriqués dans des collections. Son modèle flexible (schéma-libre) permet l'évolution du schéma sans migration. L'agrégation pipeline enchaîne des étapes ($match, $group, $project, $lookup pour les jointures). Elasticsearch est un moteur de recherche distribué basé sur Lucene : l'index inversé associe chaque terme à la liste des documents le contenant. Les analyseurs tokenisent, normalisent (lowercase, stemming) et filtrent le texte. Les requêtes booléennes, le scoring TF-IDF/BM25 et les suggestions géospatiales sont intégrés.</p>
<div class="highlight-box">
<p><strong>Réplication et sharding MongoDB :</strong> Un replica set est composé d'un primaire (lectures/écritures) et de secondaires (copies asynchrones). En cas de panne du primaire, une élection automatique désigne un nouveau primaire. Le sharding distribue horizontalement les données entre des shards selon une shard key (ranged ou hashed). Le mongos router dirige les requêtes vers le bon shard. Le choix de la shard key est critique : une mauvaise clé crée des hotspots ; une bonne distribue uniformément la charge.</p>
</div>
"""

enrichments['bases-de-donnees/big-data'] = """
<h3>Architecture Lambda et Kappa</h3>
<p class="resume-text">L'architecture Lambda traite les données en deux couches : la batch layer recalcule périodiquement des vues complètes (Hadoop, Spark batch) avec une haute latence mais une grande précision ; la speed layer traite les données récentes en temps réel (Spark Streaming, Flink) avec une latence faible mais potentiellement inexacte ; la serving layer fusionne les deux. L'architecture Kappa simplifie en utilisant uniquement du traitement en flux : toutes les données passent par le streaming, et le "rembobinage" permet de recalculer les résultats historiques en rejouant les événements depuis le log (Kafka).</p>
<div class="highlight-box">
<p><strong>Apache Kafka comme backbone :</strong> Kafka est un log distribué persistant et immuable. Les producteurs écrivent dans des partitions de topics. Les consommateurs lisent depuis un offset persisté, permettant le rejeu. Les groupes de consommateurs parallélisent le traitement. La rétention configurable (jours à semaines) permet à la fois le traitement temps réel et le rembobinage. Kafka Connect intègre sources et sinks externes. Kafka Streams et ksqlDB permettent le traitement de flux avec SQL-like queries directement sur Kafka.</p>
</div>
<h3>Traitement distribué avec Apache Spark</h3>
<p class="resume-text">Spark abstrait le calcul distribué via des RDD (Resilient Distributed Datasets, immuables et tolérants aux pannes par lineage), DataFrames (API structurée, optimisée par le Catalyst optimizer) et Datasets (API typée en Scala/Java). Le plan d'exécution est optimisé : le catalyst optimizer transforme le plan logique en plan physique, sélectionne les algorithmes de join (broadcast, shuffle, sort-merge) et élimine les colonnes inutiles (column pruning). Tungsten génère du code Java bytecode optimisé pour le CPU et la mémoire.</p>
<div class="highlight-box">
<p><strong>Gestion de la mémoire Spark :</strong> Spark divise la mémoire en régions : execution memory (pour les shuffles, aggregations, joins) et storage memory (pour le cache des RDD/DataFrames). Les deux partagent un pool unifié avec empiètement possible. Le shuffle est l'opération la plus coûteuse : il sérialise, transfert sur réseau et désérialise des volumes massifs de données. Les optimisations : réduire le nombre de shuffles (éviter les groupByKey au profit de reduceByKey), broadcasters les petites tables, partitionner intelligemment les données.</p>
</div>
<h3>Data Lakehouse et formats ouverts</h3>
<p class="resume-text">Le Data Lakehouse combine la flexibilité et le faible coût du data lake (stockage objet) avec les fonctionnalités du data warehouse (transactions ACID, schema enforcement, time travel). Les formats de table ouverts Delta Lake, Apache Iceberg et Apache Hudi ajoutent une couche de métadonnées sur Parquet pour activer ces fonctionnalités. Le versioning permet le "time travel" (interroger les données à n'importe quelle version). Les mutations (UPDATE, DELETE, MERGE) sont possibles sans réécriture complète via les transaction logs et compaction.</p>
<div class="highlight-box">
<p><strong>Formats de fichiers columnaires :</strong> Parquet stocke les données colonne par colonne : toutes les valeurs d'une colonne sont contiguës, permettant une compression optimale (Run-Length Encoding, Delta Encoding pour les entiers). Les statistiques min/max par chunk (row group) permettent le predicate pushdown : Spark lit seulement les chunks contenant les valeurs pertinentes. ORC (Optimized Row Columnar) est similaire mais optimisé pour Hive. Ces formats réduisent 10x-100x les I/O pour les requêtes analytiques par rapport au CSV/JSON.</p>
</div>
"""

enrichments['bases-de-donnees/conception'] = """
<h3>Modélisation entité-relation et formes normales</h3>
<p class="resume-text">La modélisation ER identifie les entités (objets du domaine), leurs attributs et les relations entre elles (cardinalités 1:1, 1:N, N:M). Le modèle conceptuel se traduit en modèle logique relationnel : les entités deviennent des tables, les relations N:M créent des tables de liaison, les clés étrangères représentent les associations. La normalisation élimine les redondances : 1NF (valeurs atomiques, pas de groupes répétitifs), 2NF (pas de dépendances partielles), 3NF (pas de dépendances transitives), BCNF (chaque déterminant est une clé candidate).</p>
<div class="highlight-box">
<p><strong>Dénormalisation intentionnelle :</strong> La normalisation optimise l'intégrité et minimise les anomalies de mise à jour, mais les jointures multiples peuvent être coûteuses. La dénormalisation stratégique (colonnes redondantes, tables agrégées précalculées) améliore les performances de lecture au détriment de la cohérence à maintenir. Les data warehouses utilisent des schémas en étoile ou en flocon (dénormalisés) pour optimiser les requêtes analytiques OLAP, contrairement aux schémas normalisés des bases OLTP transactionnelles.</p>
</div>
<h3>Transactions ACID et gestion de la concurrence</h3>
<p class="resume-text">Une transaction est une séquence d'opérations formant une unité logique : soit toutes réussissent (commit), soit toutes sont annulées (rollback). Les propriétés ACID garantissent la fiabilité : Atomicité (tout ou rien), Cohérence (les contraintes d'intégrité sont maintenues), Isolation (les transactions concurrentes n'interfèrent pas), Durabilité (un commit est permanent même après crash). Le WAL (Write-Ahead Log) assure atomicité et durabilité : chaque modification est d'abord enregistrée dans le log avant application.</p>
<div class="highlight-box">
<p><strong>Niveaux d'isolation SQL :</strong> READ UNCOMMITTED lit les données non commitées (dirty reads possibles). READ COMMITTED lit seulement les données commitées (default PostgreSQL) mais permet les non-repeatable reads. REPEATABLE READ garantit que les lectures répétées retournent les mêmes données mais permet les phantom reads (nouvelles lignes). SERIALIZABLE est le niveau le plus strict, équivalent à une exécution séquentielle. Le MVCC (Multi-Version Concurrency Control) implémente l'isolation sans verrous de lecture dans PostgreSQL et Oracle.</p>
</div>
<h3>Index et optimisation des requêtes</h3>
<p class="resume-text">Un index B-tree maintient les données dans un arbre balancé, permettant des recherches, insertions et suppressions en O(log n). Il supporte les recherches par égalité, intervalles et tri. Les index hash sont optimaux pour l'égalité mais ne supportent pas les intervalles. Les index composites couvrent plusieurs colonnes : l'ordre des colonnes est crucial (selectivité + patterns de requêtes). Les index partiels filtrent les lignes indexées. Les index d'expression indexent le résultat d'une fonction. L'index covering inclut toutes les colonnes nécessaires à la requête, évitant l'accès à la table principale.</p>
<div class="highlight-box">
<p><strong>EXPLAIN ANALYZE :</strong> PostgreSQL fournit EXPLAIN ANALYZE pour visualiser le plan d'exécution réel avec les coûts estimés et mesurés. Les opérations clés : Seq Scan (lecture complète), Index Scan, Index Only Scan (covering index), Bitmap Heap Scan (avec bitmap index), Nested Loop / Hash Join / Merge Join. Un coût élevé et un nombre de lignes estimé très différent du réel indiquent une statistique de table obsolète (ANALYZE manuel ou autovacuum). La réécriture de requêtes et l'ajout d'index ciblés sont les premières optimisations à envisager.</p>
</div>
"""

enrichments['bases-de-donnees/relationnel'] = """
<h3>Algèbre relationnelle et fondements théoriques</h3>
<p class="resume-text">L'algèbre relationnelle de Codd définit les opérations de base sur les relations (tables) : sélection σ (filtrage de lignes), projection π (sélection de colonnes), produit cartésien ×, jointure ⋈ (produit cartésien avec condition), union ∪, intersection ∩, différence −, renommage ρ. Ces opérations sont fermées sur les relations (une opération sur relations produit une relation). Le calcul relationnel (tuple et domaine) est un formalisme logique équivalent en expressivité. SQL est basé sur ces fondements mais les étend (valeurs nulles, agrégations, ordre).</p>
<div class="highlight-box">
<p><strong>Théorème de complétude :</strong> SQL est relationnellement complet : il peut exprimer toute requête exprimable en algèbre relationnelle. Les extensions (sous-requêtes corrélées, fenêtres analytiques, CTE récursives) vont au-delà du modèle relationnel de base. SQL:1999 standardise les expressions de table communes (CTE), les fonctions de fenêtrage (OVER, PARTITION BY) et les types user-defined. Ces fonctionnalités permettent des analyses complexes (running totals, ranks, lag/lead) directement en SQL sans code applicatif.</p>
</div>
<h3>Contraintes d'intégrité et clés</h3>
<p class="resume-text">La clé primaire identifie de manière unique chaque ligne (NOT NULL + UNIQUE). La clé étrangère référence une ligne existante dans une autre table (intégrité référentielle). Les contraintes UNIQUE, CHECK (conditions arbitraires), NOT NULL sont vérifiées par le SGBD à chaque modification. Les triggers permettent des validations et actions complexes. Les contraintes peuvent être différées (DEFERRABLE INITIALLY DEFERRED) pour être vérifiées au moment du commit plutôt que de chaque instruction, utile pour les insertions circulaires.</p>
<div class="highlight-box">
<p><strong>Clés naturelles vs artificielles :</strong> Une clé naturelle est un attribut métier unique (ISBN, N° de Sécurité Sociale). Une clé artificielle (surrogate key) est un identifiant technique sans signification métier (UUID, serial). Les clés naturelles risquent d'évoluer (changement de format) et peuvent être multi-colonnes. Les clés artificielles sont stables et performantes pour les jointures (entier vs VARCHAR). Les UUID v4 sont générés côté client sans coordination, utiles pour les systèmes distribués. Les UUID v7 (timestamp-based) préservent l'ordre d'insertion, améliorant les performances des index B-tree.</p>
</div>
<h3>Systèmes OLTP vs OLAP et columnar databases</h3>
<p class="resume-text">Les systèmes OLTP (Online Transaction Processing) gèrent des transactions courtes et fréquentes sur peu de lignes (INSERT/UPDATE/DELETE). Ils optimisent la latence et la concurrence avec des index B-tree et un schéma normalisé. Les systèmes OLAP (Online Analytical Processing) exécutent des requêtes analytiques sur de grands volumes (scans complets, agrégations). Les bases colonaires (Redshift, BigQuery, Snowflake, DuckDB) stockent chaque colonne séparément : lecture efficace des colonnes pertinentes uniquement, compression optimale par colonne homogène. DuckDB apporte ces performances pour l'analyse locale sur des fichiers Parquet/CSV.</p>
<div class="highlight-box">
<p><strong>Vectorized execution :</strong> Les bases columnar modernes utilisent l'exécution vectorisée : au lieu de traiter une ligne à la fois (tuple-at-a-time), elles traitent des vecteurs de 1024-8192 valeurs. Cela permet d'exploiter les instructions SIMD du CPU (AVX-512 traite 16 entiers 32 bits en parallèle) et améliore la localité du cache. Le résultat est des performances 10x-100x supérieures aux SGBD row-store pour les requêtes analytiques. Les filtres bloom réduisent les I/O en testant rapidement si une valeur peut être dans un fichier.</p>
</div>
"""

enrichments['bases-de-donnees/sql'] = """
<h3>Fonctions de fenêtrage (Window Functions)</h3>
<p class="resume-text">Les fonctions de fenêtrage calculent une valeur pour chaque ligne en fonction d'un ensemble de lignes liées (la "fenêtre"), sans grouper les résultats. La syntaxe OVER (PARTITION BY ... ORDER BY ... ROWS/RANGE BETWEEN ...) définit la fenêtre. Les fonctions de rang : ROW_NUMBER() (unique), RANK() (gaps en cas d'ex-aequo), DENSE_RANK() (pas de gaps). Les fonctions d'offset : LAG(col, n), LEAD(col, n) accèdent aux lignes voisines. Les agrégats : SUM(col) OVER (ORDER BY date ROWS UNBOUNDED PRECEDING) calcule un running total.</p>
<div class="highlight-box">
<p><strong>Frame specification :</strong> La clause ROWS/RANGE BETWEEN définit précisément la fenêtre : UNBOUNDED PRECEDING (début de la partition), n PRECEDING (n lignes avant), CURRENT ROW, n FOLLOWING (n lignes après), UNBOUNDED FOLLOWING (fin de partition). ROWS compte les lignes physiques ; RANGE exclut/inclut par valeur (utile pour les égalités d'ORDER BY). Exemple : SUM(ventes) OVER (PARTITION BY vendeur ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) calcule le total glissant sur 7 jours par vendeur.</p>
</div>
<h3>Expressions de table communes (CTE) et récursivité</h3>
<p class="resume-text">Les CTE (WITH clauses) nomment des sous-requêtes réutilisables dans une requête principale, améliorant la lisibilité et l'organisation du code. Les CTE récursives (WITH RECURSIVE) permettent de traverser des structures hiérarchiques (arbres, graphes). La structure est : ancre (cas de base) + UNION ALL + partie récursive (qui se référence elle-même). Applications : hiérarchies d'employés (manager/subordonné), arbres de catégories, calcul de chemins dans un graphe, génération de séries. La clause CYCLE détecte les boucles infinies dans les graphes.</p>
<div class="highlight-box">
<p><strong>Matérialisation des CTE :</strong> Dans PostgreSQL, les CTE sont matérialisées par défaut (calculées une fois, résultat stocké en mémoire) — une "fence d'optimisation". PostgreSQL 12+ introduit MATERIALIZED / NOT MATERIALIZED pour contrôler ce comportement. NOT MATERIALIZED permet au planner d'inliner la CTE et d'optimiser globalement (push predicates down). La matérialisation est utile quand la CTE est coûteuse et référencée plusieurs fois, ou quand on veut prévenir les effets de bord avec des fonctions volatiles.</p>
</div>
<h3>Optimisation avancée et EXPLAIN</h3>
<p class="resume-text">Le planner SQL transforme la requête déclarative en plan d'exécution impératif optimal. Il estime les coûts (I/O, CPU) en utilisant les statistiques (histogrammes de distribution, cardinalités, corrélations entre colonnes). Les algorithmes de jointure : Nested Loop (petit outer, index sur inner), Hash Join (une table en mémoire, autre scannée), Merge Join (deux tables triées). Parallellism distribue la requête sur plusieurs CPU workers (PostgreSQL parallel query). Le paramètre work_mem alloue la mémoire par opérateur de tri/hash.</p>
<div class="highlight-box">
<p><strong>Statistiques étendues :</strong> Le planner suppose par défaut l'indépendance des colonnes. Si WHERE a=1 AND b=2 et que a et b sont corrélées, l'estimation sera mauvaise. CREATE STATISTICS nom ON (a,b) FROM table crée des statistiques multi-colonnes (dépendances, valeurs distinctes MCV). Les statistiques de type ndistinct corrigent les estimations de cardinalité pour les sous-requêtes de GROUP BY. Le paramètre default_statistics_target contrôle la granularité des statistiques collectées par ANALYZE.</p>
</div>
"""

enrichments['programmation/python'] = """
<h3>Gestion de la mémoire et GIL en Python</h3>
<p class="resume-text">Python utilise un comptage de références (reference counting) pour libérer la mémoire : quand le compteur d'un objet tombe à 0, il est libéré immédiatement. Un collecteur de cycle (garbage collector) détecte et libère les références circulaires. Le GIL (Global Interpreter Lock) dans CPython est un mutex autorisant un seul thread Python à s'exécuter à la fois, limitant le parallélisme CPU en multi-threading. Les opérations I/O libèrent le GIL, permettant une concurrence I/O efficace. Le multiprocessing contourne le GIL en créant des processus séparés avec chacun leur interpréteur.</p>
<div class="highlight-box">
<p><strong>Alternatives au GIL :</strong> Python 3.12+ introduit des améliorations GIL et Python 3.13 propose le "free-threaded mode" (PEP 703, opt-in). Numba JIT-compile des fonctions numériques en code machine LLVM, libérant le GIL. Cython compile du code Python+type annotations en C avec contrôle du GIL. asyncio gère des milliers de connexions concurrentes avec un seul thread via coroutines et event loop, idéal pour les serveurs I/O-bound. La bibliothèque concurrent.futures simplifie le multiprocessing et threading.</p>
</div>
<h3>Métaprogrammation et descripteurs</h3>
<p class="resume-text">La métaprogrammation Python permet de modifier le comportement des classes et objets au niveau du langage. Les décorateurs modifient les fonctions/méthodes au moment de leur définition (@staticmethod, @classmethod, @property, décorateurs custom). Les métaclasses contrôlent la création des classes : elles sont les "classes des classes". Les descripteurs (__get__, __set__, __delete__) implémentent @property et les attributs gérés. Le protocole __getattr__/__getattribute__ intercepte l'accès aux attributs. Ces mécanismes sont à la base des ORMs (Django, SQLAlchemy) et des frameworks de validation.</p>
<div class="highlight-box">
<p><strong>Dataclasses et attrs :</strong> @dataclass (Python 3.7+) génère automatiquement __init__, __repr__, __eq__ à partir des annotations de type. field() permet des valeurs par défaut et des options (compare=False, repr=False). @dataclass(frozen=True) crée des instances immuables. La bibliothèque attrs est plus puissante : validateurs, convertisseurs, slots (mémoire réduite). Pydantic ajoute la validation des données avec coercition de types, populaire pour les APIs FastAPI et la configuration typée.</p>
</div>
<h3>Programmation asynchrone avec asyncio</h3>
<p class="resume-text">asyncio implémente la concurrence coopérative : les coroutines (fonctions async def) cèdent le contrôle avec await. L'event loop orchestre l'exécution en alternant entre les coroutines en attente I/O. asyncio.gather() exécute plusieurs coroutines en parallèle. asyncio.create_task() planifie une coroutine comme tâche background. Le pattern producteur-consommateur avec asyncio.Queue() gère les flux de données asynchrones. aiohttp pour les requêtes HTTP, asyncpg pour PostgreSQL, motor pour MongoDB sont des clients asynchrones natifs.</p>
<div class="highlight-box">
<p><strong>Structured concurrency :</strong> Python 3.11 introduit les TaskGroups (asyncio.TaskGroup) pour la concurrence structurée : toutes les tâches du groupe doivent se terminer avant de sortir du contexte. Si une tâche lève une exception, les autres sont annulées proprement. Cela évite les tâches orphelines et les fuites de ressources comparé à asyncio.gather(). La bibliothèque Trio pionnière ce concept. Les ExceptionGroups (PEP 654) permettent de rapporter plusieurs exceptions simultanées d'un groupe de tâches.</p>
</div>
"""

enrichments['reseaux/protocoles'] = """
<h3>Protocoles de couche transport : TCP vs UDP</h3>
<p class="resume-text">TCP (Transmission Control Protocol) garantit la livraison ordonnée et fiable des données via une connexion three-way handshake (SYN, SYN-ACK, ACK), des numéros de séquence, des ACK cumulatifs et la retransmission sur perte. Le contrôle de flux (fenêtre glissante) et le contrôle de congestion (Slow Start, Congestion Avoidance, Fast Retransmit/Recovery, CUBIC, BBR) adaptent le débit au réseau. UDP est non connecté, sans garantie de livraison ni d'ordre, avec une latence minimale. Utilisé pour les jeux en temps réel, le DNS, le streaming audio/vidéo (QUIC l'améliore).</p>
<div class="highlight-box">
<p><strong>QUIC et HTTP/3 :</strong> QUIC (Quick UDP Internet Connections) est un protocole de transport sur UDP, développé par Google et standardisé (RFC 9000). Il fusionne TCP, TLS 1.3 et HTTP/2 en un seul protocole avec handshake 0-RTT pour les connexions répétées. Le multiplexage de flux évite le head-of-line blocking de HTTP/2 sur TCP. La migration de connexion préserve les sessions lors des changements de réseau (Wi-Fi vers 4G). HTTP/3 utilise QUIC comme transport. QUIC est désormais utilisé par Google, Facebook/Meta et Cloudflare.</p>
</div>
<h3>DNS : résolution de noms et sécurité</h3>
<p class="resume-text">Le DNS (Domain Name System) est une base de données hiérarchique distribuée. La résolution itérative interroge successivement les serveurs racine, les serveurs TLD (.com, .fr) puis les serveurs autoritaires du domaine. Le resolver récursif (fourni par l'ISP ou Cloudflare 1.1.1.1, Google 8.8.8.8) cache les réponses selon le TTL. Les types d'enregistrements : A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (vérification de domaine, SPF, DKIM), SRV (localisation de services), NS (serveurs de noms).</p>
<div class="highlight-box">
<p><strong>DNSSEC et DNS over HTTPS :</strong> DNSSEC authentifie les réponses DNS avec des signatures numériques (RRSIG), protégeant contre l'empoisonnement du cache. La chaîne de confiance remonte jusqu'aux clés racine signées par l'ICANN. DNS over HTTPS (DoH, RFC 8484) et DNS over TLS (DoT, RFC 7858) chiffrent les requêtes DNS, empêchant la surveillance par l'ISP ou l'interception MITM. Cloudflare, Firefox et Chrome supportent DoH nativement. Ces protocoles améliorent la confidentialité mais compliquent le filtrage réseau des entreprises.</p>
</div>
<h3>Protocoles de sécurité réseau : TLS et PKI</h3>
<p class="resume-text">TLS 1.3 (RFC 8446) établit une connexion sécurisée en 1-RTT (vs 2-RTT pour TLS 1.2) via un handshake : négociation des algorithmes, échange Diffie-Hellman pour le secret partagé, authentification par certificat. La Perfect Forward Secrecy (PFS) garantit qu'une compromission de la clé privée n'expose pas les sessions passées. Les suites de chiffrement TLS 1.3 incluent uniquement AES-256-GCM, CHACHA20-POLY1305 et AES-128-GCM. La PKI (Public Key Infrastructure) organise les certificats X.509 en chaînes de confiance ancrées dans des AC racines pré-installées.</p>
<div class="highlight-box">
<p><strong>Certificate Transparency :</strong> CT (RFC 6962) impose aux AC de journaliser publiquement tous les certificats émis dans des logs append-only vérifiables cryptographiquement. Les navigateurs exigent des preuves SCT (Signed Certificate Timestamp) que le certificat est dans au moins deux logs. Cela permet la détection rapide de certificats frauduleux (compromission d'AC, émission non autorisée). Let's Encrypt fournit des certificats TLS gratuits et automatisés (protocole ACME), ayant massivement accéléré l'adoption de HTTPS.</p>
</div>
"""

enrichments['programmation/paradigmes'] = """
<h3>Programmation fonctionnelle : immutabilité et fonctions pures</h3>
<p class="resume-text">La programmation fonctionnelle traite la computation comme l'évaluation de fonctions mathématiques pures (sans effets de bord, déterministes). L'immutabilité des données simplifie le raisonnement : une valeur une fois créée ne change jamais. Les fonctions d'ordre supérieur (map, filter, reduce, compose) permettent l'abstraction sur les transformations. La currification transforme une fonction à n arguments en chaîne de fonctions à 1 argument. Les closures capturent l'environnement lexical. Haskell, Clojure et Elm sont des langages fonctionnels purs ; JavaScript, Python et Scala supportent le style fonctionnel.</p>
<div class="highlight-box">
<p><strong>Monades et gestion des effets :</strong> Les monades encapsulent des effets de bord (I/O, état, erreurs, optionnel) dans un contexte fonctionnel pur. Maybe/Option monade gère les valeurs nullables sans NullPointerException. Either/Result monade propage les erreurs sans exceptions. IO monade délimite les effets de bord. En pratique : Option en Scala/Rust, Result en Rust/Haskell, les promises/observables en JS/TypeScript sont des exemples monadiques. Ces patterns améliorent la composabilité et éliminent les états invalides par construction.</p>
</div>
<h3>Programmation orientée objet : principes SOLID</h3>
<p class="resume-text">Les principes SOLID guident la conception OO : Single Responsibility (une classe, une raison de changer), Open/Closed (ouvert à l'extension, fermé à la modification), Liskov Substitution (les sous-types respectent le contrat du type parent), Interface Segregation (interfaces spécifiques plutôt que générales), Dependency Inversion (dépendre des abstractions, pas des implémentations). Ces principes favorisent le code testable, extensible et maintenable. L'injection de dépendances concrétise DIP en fournissant les dépendances de l'extérieur.</p>
<div class="highlight-box">
<p><strong>Patterns de conception GoF :</strong> Les 23 design patterns du Gang of Four (Gamma, Helm, Johnson, Vlissides, 1994) restent incontournables. Creational : Factory, Abstract Factory, Builder, Prototype, Singleton. Structural : Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy. Behavioral : Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor. Ces patterns sont un vocabulaire commun entre développeurs et des solutions éprouvées à des problèmes récurrents.</p>
</div>
<h3>Programmation réactive et orientée événements</h3>
<p class="resume-text">La programmation réactive traite les données comme des flux (streams) auxquels on s'abonne pour réagir aux changements. RxJS (JavaScript), RxJava, Reactor (Spring) implémentent le patron Observable/Observer avec des opérateurs de transformation (map, filter, merge, debounce, switchMap). Le Reactive Manifesto décrit des systèmes responsifs, résilients, élastiques et message-driven. Event sourcing stocke tous les changements d'état comme événements immuables (vs l'état courant). CQRS sépare les modèles de lecture et d'écriture pour optimiser chaque chemin.</p>
<div class="highlight-box">
<p><strong>Actor model :</strong> Le modèle acteur (Erlang, Akka, Elixir) encapsule l'état dans des acteurs qui communiquent uniquement par messages asynchrones, sans mémoire partagée. Chaque acteur traite un message à la fois, éliminant les conditions de course sans locks. Les superviseurs relancent les acteurs défaillants (let it crash philosophy d'Erlang). Ce modèle est naturellement distribué et tolérant aux pannes : Erlang alimente WhatsApp (millions de connexions concurrentes), RabbitMQ et les switches télécom Ericsson avec 99,9999% de disponibilité.</p>
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

json.dumps(data)
print("\nJSON valid.")

with open('assets/content/informatique.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done: batch 1 complete.")
