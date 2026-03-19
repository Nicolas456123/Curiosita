import json
import os

os.chdir(r'C:\Users\nicol\Desktop\Projets\Divers\Curiosita')

with open('assets/content/informatique.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# PROGRAMMATION / PYTHON
# ============================================================
pages['programmation/python']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Le langage universel de la programmation moderne</p>
        </div>
      </div>
      <p class="resume-text"><strong>Python</strong> est un langage de programmation interprété, à typage dynamique et à syntaxe lisible, créé par Guido van Rossum en 1991. Sa philosophie — résumée dans le "Zen of Python" par "Readable counts" et "There should be one obvious way to do it" — en fait le langage d'apprentissage privilégié, mais aussi un outil professionnel de premier plan en science des données, développement web, automatisation et intelligence artificielle.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Python est régulièrement classé premier langage mondial (indices TIOBE et PYPL). Sa bibliothèque standard riche et son écosystème de packages (PyPI : +500 000 packages) permettent de résoudre presque tout problème avec peu de code.</p>
      </div>
      <p class="resume-text">Apprendre Python, c'est apprendre à penser de façon algorithmique. Les concepts — variables, conditions, boucles, fonctions, objets — sont universels et se retrouvent dans tous les langages de programmation.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Python — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Types de données fondamentaux</h3>
<p>Python propose des types de données intégrés riches. Contrairement à d'autres langages, les types sont inférés automatiquement :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Types de base
age = 25              # int
prix = 19.99          # float
nom = "Alice"         # str (guillemets simples ou doubles)
actif = True          # bool

# Opérations sur les chaînes
prenom, nom_de_famille = "Alice", "Martin"
nom_complet = f"{prenom} {nom_de_famille}"  # f-string (Python 3.6+)
print(nom_complet.upper())          # ALICE MARTIN
print(nom_complet.split())          # ['Alice', 'Martin']
print(len(nom_complet))             # 12
print("Martin" in nom_complet)      # True

# Types None (absence de valeur)
resultat = None
print(resultat is None)  # True (utiliser is, pas ==)</code></pre>
</div>

<h3>Structures de données</h3>
<p>Python intègre quatre structures de données fondamentales, chacune avec ses cas d'usage :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Liste : séquence ordonnée et mutable
fruits = ["pomme", "banane", "cerise"]
fruits.append("mangue")          # ajouter en fin
fruits.insert(1, "abricot")      # insérer à l'index 1
fruits.remove("banane")          # supprimer par valeur
dernier = fruits.pop()           # supprimer et retourner le dernier

# Accès par slice
print(fruits[1:3])    # ['abricot', 'cerise']
print(fruits[-1])     # dernier élément
print(fruits[::-1])   # liste inversée

# Tuple : séquence ordonnée et IMMUABLE (hashable, utilisable comme clé de dict)
coordonnees = (48.8566, 2.3522)  # latitude, longitude de Paris
x, y = coordonnees               # déballage (unpacking)

# Dictionnaire : paires clé-valeur
personne = {
    "nom": "Alice",
    "age": 30,
    "competences": ["Python", "SQL", "Docker"]
}
print(personne["nom"])           # accès par clé
personne["ville"] = "Paris"      # ajout d'une clé
age = personne.get("age", 0)     # accès sécurisé avec valeur par défaut
for cle, valeur in personne.items():
    print(f"{cle}: {valeur}")

# Set : ensemble non ordonné de valeurs UNIQUES
tags = {"python", "web", "api"}
tags.add("docker")
print("python" in tags)          # True (test d'appartenance O(1))
a = {1, 2, 3}; b = {2, 3, 4}
print(a & b)  # intersection : {2, 3}
print(a | b)  # union : {1, 2, 3, 4}
print(a - b)  # différence : {1}</code></pre>
</div>

<h3>Compréhensions et expressions génératrices</h3>
<p>Les <strong>compréhensions</strong> sont une syntaxe Python idiomatique pour construire des collections de façon concise et expressive :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Compréhension de liste
carres = [x**2 for x in range(10)]
pairs = [x for x in range(20) if x % 2 == 0]
mots_longs = [mot.upper() for mot in texte.split() if len(mot) > 5]

# Compréhension de dictionnaire
carres_dict = {x: x**2 for x in range(1, 6)}
# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

inverse = {v: k for k, v in {"a": 1, "b": 2}.items()}

# Compréhension de set
premieres_lettres = {mot[0] for mot in mots}

# Expression génératrice : lazy, ne crée pas de liste en mémoire
total = sum(x**2 for x in range(1_000_000))  # efficace en mémoire</code></pre>
</div>

<h3>Fonctions et portée des variables</h3>
<p>Les fonctions Python sont des objets de première classe — elles peuvent être passées en argument, retournées et assignées à des variables :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>def calculer_stats(nombres, *, inclure_mediane=False):
    # Calcule les statistiques descriptives.
    # Args: nombres (liste), inclure_mediane (bool keyword-only)
    # Returns: dict avec min, max, moyenne (et médiane optionnel)
    if not nombres:
        raise ValueError("La liste ne peut pas être vide")

    stats = {
        "min": min(nombres),
        "max": max(nombres),
        "moyenne": sum(nombres) / len(nombres),
        "count": len(nombres)
    }

    if inclure_mediane:
        triee = sorted(nombres)
        n = len(triee)
        stats["mediane"] = triee[n//2] if n % 2 else (triee[n//2-1] + triee[n//2]) / 2

    return stats

# Appel avec arguments positionnels et nommés
resultats = calculer_stats([4, 2, 8, 1, 9, 3], inclure_mediane=True)

# Fonctions lambda : petites fonctions anonymes
trier_par_age = sorted(personnes, key=lambda p: p["age"])
doubler = lambda x: x * 2

# *args et **kwargs
def log(message, *args, **kwargs):
    niveau = kwargs.get("niveau", "INFO")
    print(f"[{niveau}] {message}", *args)</code></pre>
</div>

<h3>Programmation orientée objet en Python</h3>
<p>Python supporte pleinement la POO avec classes, héritage, encapsulation et polymorphisme :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>class Animal:
    especes_count = 0  # attribut de classe (partagé par toutes les instances)

    def __init__(self, nom, espece):
        self.nom = nom           # attribut d'instance (public)
        self._espece = espece    # convention : _ = "protégé" (usage interne)
        Animal.especes_count += 1

    def __repr__(self):
        return f"Animal(nom={self.nom!r}, espece={self._espece!r})"

    def __str__(self):
        return f"{self.nom} ({self._espece})"

    def parler(self):
        raise NotImplementedError("Les sous-classes doivent implémenter parler()")

    @property
    def espece(self):
        return self._espece

    @classmethod
    def depuis_dict(cls, d):
        return cls(d["nom"], d["espece"])

class Chien(Animal):
    def __init__(self, nom, race):
        super().__init__(nom, "Canis lupus familiaris")
        self.race = race

    def parler(self):
        return f"{self.nom} aboie : Woof!"

    def __eq__(self, other):
        return isinstance(other, Chien) and self.nom == other.nom

rex = Chien("Rex", "Berger allemand")
print(rex)             # Rex (Canis lupus familiaris)
print(rex.parler())    # Rex aboie : Woof!</code></pre>
</div>

<h3>Gestion des erreurs et exceptions</h3>
<p>Python utilise un système d'exceptions hiérarchisées. La gestion fine des erreurs rend les programmes robustes et maintenables :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>def lire_configuration(chemin_fichier):
    try:
        with open(chemin_fichier, 'r', encoding='utf-8') as f:
            import json
            return json.load(f)
    except FileNotFoundError:
        print(f"Fichier introuvable : {chemin_fichier}")
        return {}
    except json.JSONDecodeError as e:
        print(f"JSON invalide à la ligne {e.lineno}: {e.msg}")
        raise  # re-lever l'exception pour le code appelant
    except PermissionError:
        print("Droits insuffisants pour lire le fichier")
        raise
    else:
        print("Fichier chargé avec succès")  # exécuté si pas d'exception
    finally:
        pass  # toujours exécuté (nettoyage)

# Créer ses propres exceptions
class ValidationError(ValueError):
    def __init__(self, champ, message):
        self.champ = champ
        super().__init__(f"{champ}: {message}")

def valider_age(age):
    if not isinstance(age, int):
        raise TypeError("L'âge doit être un entier")
    if age < 0 or age > 150:
        raise ValidationError("age", f"Valeur {age} hors plage [0, 150]")</code></pre>
</div>

<h3>Modules, packages et l'écosystème Python</h3>
<p>La richesse de Python tient en grande partie à sa bibliothèque standard et à l'écosystème PyPI :</p>
<ul>
<li><strong>Bibliothèque standard :</strong> <code>os</code>, <code>pathlib</code> (fichiers), <code>re</code> (regex), <code>json</code>, <code>csv</code>, <code>datetime</code>, <code>collections</code>, <code>itertools</code>, <code>functools</code>, <code>threading</code>, <code>subprocess</code>...</li>
<li><strong>Science des données :</strong> NumPy (calcul numérique), pandas (manipulation de données), Matplotlib/Seaborn (visualisation), scikit-learn (machine learning)</li>
<li><strong>Web :</strong> Flask, FastAPI, Django (frameworks web), requests (HTTP client), httpx</li>
<li><strong>Automatisation :</strong> selenium, playwright (navigateurs), paramiko (SSH), schedule (tâches planifiées)</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>from pathlib import Path
import json
from collections import defaultdict, Counter
from itertools import groupby

# pathlib : manipulation de chemins de façon orientée objet
dossier = Path("data") / "2024"
dossier.mkdir(parents=True, exist_ok=True)
for fichier in dossier.glob("*.json"):
    print(fichier.stem, fichier.stat().st_size)

# collections.Counter : compter des éléments
mots = "le chat mange le chat noir le".split()
freq = Counter(mots)
print(freq.most_common(3))   # [('le', 3), ('chat', 2), ...]

# collections.defaultdict : dictionnaire avec valeur par défaut
groupes = defaultdict(list)
for nom, departement in employes:
    groupes[departement].append(nom)</code></pre>
</div>
<div class="highlight-box"><p><strong>Environnements virtuels :</strong> Toujours travailler dans un environnement virtuel (<code>python -m venv .venv</code>) pour isoler les dépendances de chaque projet. Lister les dépendances dans <code>requirements.txt</code> ou <code>pyproject.toml</code> pour la reproductibilité.</p></div>
</div>
    </section>"""

# ============================================================
# PROGRAMMATION / PARADIGMES
# ============================================================
pages['programmation/paradigmes']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les grandes familles de pensée en programmation</p>
        </div>
      </div>
      <p class="resume-text">Un <strong>paradigme de programmation</strong> est un style fondamental de conception logicielle qui impose une façon particulière de structurer le code, de modéliser les données et d'exprimer la logique. Les quatre paradigmes principaux — impératif, orienté objet, fonctionnel et logique — reflètent des visions radicalement différentes de ce que "programmer" signifie.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> La plupart des langages modernes sont multi-paradigmes. Python supporte l'impératif, l'orienté objet et le fonctionnel. JavaScript idem. Savoir choisir le paradigme adapté à chaque problème est une compétence clé du développeur expérimenté.</p>
      </div>
      <p class="resume-text">Comprendre les paradigmes, c'est comprendre pourquoi les langages ont été conçus ainsi et comment exploiter au mieux leurs fonctionnalités. C'est aussi développer une pensée algorithmique plus riche et flexible.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Paradigmes — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Paradigme impératif</h3>
<p>Le paradigme impératif est le plus proche du fonctionnement réel de la machine. On décrit <strong>comment</strong> faire, étape par étape, en modifiant l'état du programme :</p>
<ul>
<li><strong>Variables :</strong> boîtes mémoire dont la valeur change au cours de l'exécution</li>
<li><strong>Instructions séquentielles :</strong> exécution ligne par ligne de haut en bas</li>
<li><strong>Structures de contrôle :</strong> if/else, boucles for/while qui modifient le flux d'exécution</li>
<li><strong>Procédures/fonctions :</strong> blocs réutilisables qui peuvent modifier l'état global (effets de bord)</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Paradigme impératif : calculer la somme des nombres pairs de 1 à 100
total = 0                    # état mutable
for i in range(1, 101):     # boucle qui modifie l'état
    if i % 2 == 0:
        total += i           # effet de bord sur la variable total
print(total)  # 2550

# Tri par sélection — algorithme impératif pur
def tri_selection(liste):
    n = len(liste)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if liste[j] < liste[min_idx]:
                min_idx = j
        liste[i], liste[min_idx] = liste[min_idx], liste[i]  # swap
    return liste</code></pre>
</div>

<h3>Paradigme orienté objet (POO)</h3>
<p>La POO organise le code autour d'<strong>objets</strong> — des entités regroupant données (attributs) et comportements (méthodes). Quatre piliers la définissent :</p>
<ul>
<li><strong>Encapsulation :</strong> regrouper les données et les méthodes qui les manipulent. Cacher les détails d'implémentation derrière une interface publique.</li>
<li><strong>Héritage :</strong> une classe peut étendre une autre, réutilisant et spécialisant son comportement sans duplication de code.</li>
<li><strong>Polymorphisme :</strong> des objets de types différents peuvent répondre au même message (même nom de méthode) avec des comportements différents.</li>
<li><strong>Abstraction :</strong> définir des interfaces (ce que fait un objet) sans exposer comment il le fait.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>from abc import ABC, abstractmethod

class Forme(ABC):               # classe abstraite
    @abstractmethod
    def aire(self) -> float:
        pass

    @abstractmethod
    def perimetre(self) -> float:
        pass

    def description(self):      # méthode concrète partagée
        return f"{type(self).__name__}: aire={self.aire():.2f}, périmètre={self.perimetre():.2f}"

class Cercle(Forme):
    def __init__(self, rayon: float):
        self._rayon = rayon     # encapsulation : attribut "protégé"

    def aire(self) -> float:
        import math
        return math.pi * self._rayon ** 2

    def perimetre(self) -> float:
        import math
        return 2 * math.pi * self._rayon

class Rectangle(Forme):
    def __init__(self, largeur, hauteur):
        self._largeur = largeur
        self._hauteur = hauteur

    def aire(self): return self._largeur * self._hauteur
    def perimetre(self): return 2 * (self._largeur + self._hauteur)

# Polymorphisme : même interface, comportements différents
formes = [Cercle(5), Rectangle(4, 6), Cercle(3)]
for forme in formes:
    print(forme.description())  # appel polymorphique</code></pre>
</div>

<h3>Paradigme fonctionnel</h3>
<p>La programmation fonctionnelle traite le calcul comme l'évaluation de <strong>fonctions mathématiques pures</strong>, sans état mutable ni effets de bord. Ses principes clés :</p>
<ul>
<li><strong>Fonctions pures :</strong> mêmes entrées → toujours mêmes sorties. Pas d'effets de bord (pas de modification d'état global).</li>
<li><strong>Immuabilité :</strong> les données ne sont jamais modifiées — on crée de nouvelles versions transformées.</li>
<li><strong>Fonctions de première classe :</strong> les fonctions sont des valeurs passables en argument et retournables.</li>
<li><strong>Composition de fonctions :</strong> construire des fonctions complexes en combinant des fonctions simples.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>from functools import reduce

# Fonctions pures (pas d'effets de bord)
def doubler(x): return x * 2
def est_pair(x): return x % 2 == 0
def additionner(a, b): return a + b

# Map, filter, reduce — le trio fonctionnel
nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pairs_doubles = list(map(doubler, filter(est_pair, nombres)))
# [4, 8, 12, 16, 20]

somme_totale = reduce(additionner, nombres, 0)  # 55

# Style Python idiomatique : compréhensions (lisibilité > pureté)
pairs_doubles_v2 = [x * 2 for x in nombres if x % 2 == 0]

# Composition de fonctions
from functools import partial

def pipeline(*fonctions):
    def compose(valeur):
        for fn in fonctions:
            valeur = fn(valeur)
        return valeur
    return compose

traiter = pipeline(
    lambda s: s.strip(),
    lambda s: s.lower(),
    lambda s: s.replace(" ", "_")
)
print(traiter("  Mon Texte  "))  # "mon_texte"

# Closures : fonction qui "capture" des variables de son environnement
def multiplicateur(facteur):
    def multiplier(x):
        return x * facteur  # facteur capturé depuis l'environnement externe
    return multiplier

tripler = multiplicateur(3)
print(tripler(7))  # 21</code></pre>
</div>
<div class="highlight-box"><p><strong>Avantages du fonctionnel :</strong> Code plus facile à tester (fonctions pures sans état), plus facile à paralléliser (pas d'état partagé), et souvent plus concis. Haskell, Erlang et Clojure sont purement fonctionnels ; Python, JavaScript et Scala l'intègrent partiellement.</p></div>

<h3>Paradigme déclaratif et logique</h3>
<p>Le paradigme <strong>déclaratif</strong> exprime <em>quoi</em> obtenir, pas <em>comment</em> le calculer. SQL est l'exemple le plus courant : on décrit le résultat voulu, le moteur choisit le meilleur plan d'exécution.</p>
<div class="code-block">
  <div class="code-header"><span>SQL</span></div>
  <pre><code>-- Style déclaratif : on dit QUOI on veut, pas COMMENT le calculer
SELECT nom, COUNT(*) AS nb_commandes
FROM clients c JOIN commandes co ON co.client_id = c.id
WHERE co.date >= '2024-01-01'
GROUP BY nom
HAVING COUNT(*) >= 3
ORDER BY nb_commandes DESC;</code></pre>
</div>
<p>La <strong>programmation logique</strong> (Prolog) exprime des faits et des règles, et laisse le moteur d'inférence déduire les réponses :</p>
<div class="code-block">
  <div class="code-header"><span>Prolog</span></div>
  <pre><code>% Faits
parent(tom, bob).
parent(tom, liz).
parent(bob, ann).

% Règle : X est ancêtre de Y si X est parent de Y
%         ou si X est parent d'un ancêtre de Y
ancetre(X, Y) :- parent(X, Y).
ancetre(X, Y) :- parent(X, Z), ancetre(Z, Y).

% Requête : qui sont les ancêtres de ann?
?- ancetre(X, ann).   % retourne X = bob, X = tom</code></pre>
</div>

<h3>Paradigme réactif et événementiel</h3>
<p>La <strong>programmation réactive</strong> traite les programmes comme des flux de données asynchrones. Très utilisée dans les interfaces utilisateur et les systèmes distribués :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>import asyncio

# Programmation asynchrone en Python (async/await)
async def fetch_data(url: str) -> str:
    await asyncio.sleep(1)  # simule une requête HTTP
    return f"données de {url}"

async def main():
    # Lancer 3 requêtes en parallèle (pas séquentiellement)
    resultats = await asyncio.gather(
        fetch_data("https://api.exemple.com/users"),
        fetch_data("https://api.exemple.com/produits"),
        fetch_data("https://api.exemple.com/commandes")
    )
    for r in resultats:
        print(r)

asyncio.run(main())</code></pre>
</div>

<h3>Choisir le bon paradigme</h3>
<p>Le choix du paradigme dépend du domaine et des contraintes :</p>
<ul>
<li><strong>Impératif :</strong> algorithmes de traitement de données, scripts, quand la performance est critique</li>
<li><strong>Orienté objet :</strong> systèmes complexes avec beaucoup d'entités interagissant — GUI, jeux, applications métier</li>
<li><strong>Fonctionnel :</strong> transformations de données, pipelines ETL, code concurrent, parties critiques à tester</li>
<li><strong>Déclaratif :</strong> requêtes de données, configuration, DSL (langages dédiés à un domaine)</li>
<li><strong>Réactif :</strong> interfaces utilisateur, systèmes temps réel, microservices événementiels</li>
</ul>
<div class="highlight-box"><p><strong>Pragmatisme :</strong> Les meilleurs développeurs ne sont pas des "puristes" d'un paradigme. Ils choisissent l'outil le plus adapté à chaque partie du problème. Une base de code bien conçue mélange souvent les paradigmes : des objets pour structurer le domaine, des fonctions pures pour la logique métier, du déclaratif pour les requêtes.</p></div>
</div>
    </section>"""

# ============================================================
# PROGRAMMATION / OUTILS
# ============================================================
pages['programmation/outils']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Maîtriser l'environnement de travail du programmeur</p>
        </div>
      </div>
      <p class="resume-text">Un développeur efficace ne se distingue pas seulement par sa maîtrise des langages, mais aussi par celle de ses <strong>outils</strong>. Git, le terminal, l'IDE, le débogueur et les outils de test forment l'environnement de travail quotidien. Les maîtriser réduit considérablement la friction et multiplie la productivité.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Le temps investi à maîtriser ses outils est l'un des meilleurs retours sur investissement en développement. Un raccourci clavier appris aujourd'hui sauve des milliers de frappes sur une carrière. Un workflow Git solide évite des catastrophes irrécupérables.</p>
      </div>
      <p class="resume-text">Cette page couvre les outils fondamentaux : Git pour la gestion de versions, le terminal Unix pour l'automatisation, les IDE modernes, le debugging méthodique et les gestionnaires de packages.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Outils du développeur — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Git : contrôle de version</h3>
<p>Git est un système de contrôle de version distribué créé par Linus Torvalds en 2005. Chaque développeur possède une copie complète de l'historique — pas de dépendance à un serveur central :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># Initialiser un dépôt
git init
git clone https://github.com/utilisateur/projet.git

# Workflow quotidien de base
git status                     # voir l'état du dépôt
git add fichier.py             # stager un fichier
git add -p                     # stager interactivement (par hunks)
git commit -m "feat: ajouter la fonctionnalité X"

# Branches
git branch feature/login       # créer une branche
git checkout -b feature/login  # créer ET basculer dessus
git switch feature/login       # syntaxe moderne (Git 2.23+)
git merge feature/login        # fusionner dans la branche courante
git rebase main                # rebaser sur main (historique linéaire)

# Inspecter l'historique
git log --oneline --graph --all
git show HEAD~3                # voir le commit 3 positions avant HEAD
git blame fichier.py           # voir qui a écrit chaque ligne
git diff HEAD~1                # différences avec le commit précédent

# Défaire des erreurs
git restore fichier.py         # annuler modifications non commitées
git revert abc1234             # créer un commit qui annule abc1234
git stash                      # mettre de côté les modifications en cours</code></pre>
</div>
<div class="highlight-box"><p><strong>Commits atomiques :</strong> Chaque commit doit représenter un changement logique unique et cohérent. Un bon message de commit commence par un verbe impératif et décrit le pourquoi, pas le quoi : "Fix: correct timezone bug in report generation" plutôt que "modified report.py".</p></div>

<h3>Workflows Git collaboratifs</h3>
<p>En équipe, plusieurs workflows structurent la collaboration :</p>
<ul>
<li><strong>GitHub Flow :</strong> simple — branche de feature depuis main, Pull Request, review, merge. Adapté aux déploiements continus.</li>
<li><strong>Git Flow :</strong> main + develop + branches feature/release/hotfix. Plus rigide, adapté aux cycles de release planifiés.</li>
<li><strong>Trunk-Based Development :</strong> tout le monde travaille sur main avec des feature flags. Nécessite une CI/CD robuste.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># GitHub Flow : workflow typique
git switch -c feature/paiement-stripe   # créer la branche
# ... développement ...
git push -u origin feature/paiement-stripe
# Ouvrir une Pull Request sur GitHub
# Code review par l'équipe
# Tests automatiques (CI) passent
git switch main
git pull
# Merge via l'interface GitHub (ou git merge --squash)
git branch -d feature/paiement-stripe  # nettoyer</code></pre>
</div>

<h3>Le terminal Unix</h3>
<p>Le terminal est l'outil le plus puissant du développeur. Sur Linux et macOS, bash et zsh sont standards. Sur Windows, WSL (Windows Subsystem for Linux) offre un environnement Unix complet :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># Navigation et gestion de fichiers
ls -la                        # lister avec détails et fichiers cachés
cd ~/projets/mon-app          # changer de répertoire
pwd                           # afficher le répertoire courant
mkdir -p src/components       # créer les dossiers intermédiaires
cp -r src/ backup/            # copier récursivement
mv ancien_nom.py nouveau.py   # renommer/déplacer

# Recherche et filtrage
grep -rn "TODO" src/          # chercher dans les fichiers (récursif)
find . -name "*.py" -newer requirements.txt   # fichiers modifiés après
ls | wc -l                    # compter les fichiers

# Pipelines : combiner des commandes
cat access.log | grep "POST" | awk '{print $1}' | sort | uniq -c | sort -rn

# Variables et scripts bash
export DATABASE_URL="postgresql://..."
echo $DATABASE_URL

# Redirections
python3 script.py > output.txt 2>&1    # stdout et stderr vers fichier
python3 script.py >> log.txt           # ajouter à la fin (append)</code></pre>
</div>

<h3>IDE et éditeurs de code</h3>
<p>L'IDE (Integrated Development Environment) combine éditeur, débogueur, terminal et outils de refactoring dans une interface unifiée :</p>
<ul>
<li><strong>VS Code :</strong> éditeur léger et extensible (Microsoft, gratuit). Excellent support Python, JS, Go via extensions. Intégration Git native. Le plus utilisé en 2024.</li>
<li><strong>PyCharm :</strong> IDE Python complet (JetBrains). Inspection de code avancée, refactoring intelligent, support Django et Flask intégrés.</li>
<li><strong>Vim/Neovim :</strong> éditeur modal ultra-léger. Courbe d'apprentissage abrupte mais productivité maximale une fois maîtrisé. Disponible partout (y compris serveurs distants).</li>
<li><strong>JupyterLab :</strong> environnement notebook pour la science des données — mélange code exécutable, visualisations et documentation.</li>
</ul>
<div class="highlight-box"><p><strong>Raccourcis clés VS Code :</strong> <kbd>Ctrl+P</kbd> (ouvrir fichier), <kbd>Ctrl+Shift+P</kbd> (palette de commandes), <kbd>Ctrl+D</kbd> (sélection multiple), <kbd>Alt+↑↓</kbd> (déplacer une ligne), <kbd>F12</kbd> (aller à la définition), <kbd>F2</kbd> (renommer partout).</p></div>

<h3>Débogage : l'art de trouver les bugs</h3>
<p>Le débogage est une compétence qui s'apprend. Méthode scientifique : formuler une hypothèse, la tester, réduire l'espace de recherche :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code>import pdb  # Python Debugger (intégré)
import logging

# Logging structuré : bien mieux que print()
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s'
)
logger = logging.getLogger(__name__)

def traiter_commande(commande_id):
    logger.info("Traitement commande %s", commande_id)
    commande = recuperer_commande(commande_id)
    logger.debug("Commande récupérée: %s", commande)
    # ...

# breakpoint() : point d'arrêt interactif (Python 3.7+)
def fonction_bugguee(data):
    resultat = []
    for item in data:
        breakpoint()  # ouvre pdb ici : n(ext), s(tep), p(rint), c(ontinue)
        resultat.append(traiter(item))
    return resultat

# Dans pdb :
# n : exécuter la ligne suivante
# s : entrer dans la fonction
# p variable : afficher la valeur
# ll : afficher le code courant
# q : quitter</code></pre>
</div>

<h3>Gestionnaires de packages et environnements</h3>
<p>Chaque projet a ses propres dépendances. Les gestionnaires de packages isolent les projets entre eux :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code># Python : pip + virtualenv
python3 -m venv .venv           # créer l'environnement virtuel
source .venv/bin/activate       # activer (Linux/macOS)
.venv\Scripts\activate          # activer (Windows)
pip install requests pandas     # installer des packages
pip freeze > requirements.txt   # figer les versions
pip install -r requirements.txt # installer depuis requirements.txt

# Poetry : gestionnaire moderne (résolution de dépendances, build)
poetry new mon-projet
poetry add requests             # ajouter une dépendance
poetry add --dev pytest         # dépendance de développement seulement
poetry run python main.py       # exécuter dans l'environnement

# Node.js : npm / yarn / pnpm
npm init -y
npm install express             # dépendance de production
npm install --save-dev jest     # dépendance de développement
npm run test

# Docker : environnement totalement reproductible
docker run -it python:3.12 python3  # Python dans un conteneur</code></pre>
</div>
<div class="highlight-box"><p><strong>Makefile :</strong> Un simple Makefile à la racine du projet documente et automatise les tâches courantes — <code>make test</code>, <code>make lint</code>, <code>make run</code>. Universel, sans dépendances, et auto-documenté avec <code>make help</code>.</p></div>
</div>
    </section>"""

# ============================================================
# PROGRAMMATION / PROJETS
# ============================================================
pages['programmation/projets']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Du concept au code fonctionnel</p>
        </div>
      </div>
      <p class="resume-text">Savoir écrire du code est nécessaire mais insuffisant pour réaliser un projet complet. Les <strong>projets pratiques</strong> demandent de maîtriser l'architecture logicielle, la gestion des tests, l'intégration continue et les bonnes pratiques de développement qui font passer un script à un logiciel maintenable et évolutif.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Un projet réussi ne se juge pas uniquement au fait qu'il "fonctionne". Un bon projet est lisible par d'autres développeurs, testable, déployable de façon répétable, et évolutif sans régressions. Ces qualités s'apprennent par la pratique.</p>
      </div>
      <p class="resume-text">Cette page guide dans la réalisation de projets concrets — de la conception initiale au déploiement — avec les outils et pratiques professionnels utilisés en entreprise.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Projets pratiques — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Structurer un projet Python</h3>
<p>Une bonne structure de projet facilite la navigation, les tests et le packaging. La structure standard pour un projet Python :</p>
<div class="code-block">
  <div class="code-header"><span>Bash</span></div>
  <pre><code>mon-projet/
├── src/
│   └── mon_package/
│       ├── __init__.py
│       ├── modeles.py
│       ├── services.py
│       └── utils.py
├── tests/
│   ├── __init__.py
│   ├── test_modeles.py
│   └── test_services.py
├── docs/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── pyproject.toml      # configuration du projet (PEP 518)
├── requirements.txt
└── README.md</code></pre>
</div>
<div class="highlight-box"><p><strong>Convention src/ :</strong> Placer le code source dans <code>src/</code> évite un piège courant : importer accidentellement le package depuis le dossier courant plutôt que celui installé. Les tests testent alors vraiment le package installé.</p></div>

<h3>Tests : garantir la qualité</h3>
<p>Les tests automatisés permettent de modifier le code avec confiance. Trois types complémentaires :</p>
<ul>
<li><strong>Tests unitaires :</strong> testent une fonction ou classe en isolation. Rapides, nombreux, constituent la base de la pyramide de tests.</li>
<li><strong>Tests d'intégration :</strong> testent l'interaction entre composants (base de données, API externes...). Plus lents, moins nombreux.</li>
<li><strong>Tests end-to-end :</strong> testent le système complet comme le ferait un utilisateur (Selenium, Playwright). Lents, fragiles, peu nombreux.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># pytest : framework de test Python de référence
import pytest
from mon_package.services import calculer_remise

# Test simple
def test_remise_client_premium():
    assert calculer_remise(100, statut="premium") == 20.0

def test_remise_client_standard():
    assert calculer_remise(100, statut="standard") == 5.0

# Test paramétré : évite la duplication
@pytest.mark.parametrize("montant,statut,remise_attendue", [
    (100, "premium", 20.0),
    (100, "standard", 5.0),
    (50, "premium", 10.0),
    (0, "premium", 0.0),
])
def test_remise_parametree(montant, statut, remise_attendue):
    assert calculer_remise(montant, statut=statut) == remise_attendue

# Test d'exception
def test_remise_statut_invalide():
    with pytest.raises(ValueError, match="Statut inconnu"):
        calculer_remise(100, statut="vip-ultra")

# Fixture : préparer des données de test réutilisables
@pytest.fixture
def client_premium():
    return {"id": 42, "nom": "Alice", "statut": "premium"}

def test_avec_fixture(client_premium):
    remise = calculer_remise(100, statut=client_premium["statut"])
    assert remise == 20.0</code></pre>
</div>

<h3>Test-Driven Development (TDD)</h3>
<p>Le TDD est une méthode de développement dans laquelle on écrit les tests <em>avant</em> le code. Cycle en 3 étapes :</p>
<ul>
<li><strong>Red :</strong> écrire un test qui échoue (le code n'existe pas encore)</li>
<li><strong>Green :</strong> écrire le minimum de code pour que le test passe</li>
<li><strong>Refactor :</strong> améliorer le code sans casser les tests</li>
</ul>
<p>Avantages : force une réflexion préalable sur l'interface, garantit que tout le code est couvert par des tests, et facilite le refactoring.</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Étape 1 (Red) : écrire le test d'abord
def test_panier_vide_au_depart():
    panier = Panier()
    assert panier.total() == 0
    assert len(panier.articles) == 0

# Le test échoue car Panier n'existe pas encore

# Étape 2 (Green) : implémenter le minimum
class Panier:
    def __init__(self):
        self.articles = []

    def total(self):
        return sum(a["prix"] * a["quantite"] for a in self.articles)

# Maintenant le test passe

# Étape 3 (Refactor) : améliorer sans casser les tests
class Article:
    def __init__(self, nom, prix, quantite=1):
        self.nom = nom
        self.prix = prix
        self.quantite = quantite

    @property
    def sous_total(self):
        return self.prix * self.quantite</code></pre>
</div>

<h3>Intégration continue (CI/CD)</h3>
<p>L'intégration continue automatise l'exécution des tests à chaque modification du code. GitHub Actions est le service CI/CD le plus utilisé :</p>
<div class="code-block">
  <div class="code-header"><span>YAML</span></div>
  <pre><code># .github/workflows/ci.yml
name: Tests et qualité

on:
  push:
    branches: [main, develop]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: ["3.11", "3.12"]

    steps:
    - uses: actions/checkout@v4

    - name: Configurer Python ${{ matrix.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: ${{ matrix.python-version }}

    - name: Installer les dépendances
      run: |
        pip install -e ".[dev]"

    - name: Vérifier le formatage (Black)
      run: black --check src/ tests/

    - name: Linting (Ruff)
      run: ruff check src/ tests/

    - name: Vérification des types (mypy)
      run: mypy src/

    - name: Tests avec couverture
      run: pytest --cov=src --cov-report=xml

    - name: Upload couverture vers Codecov
      uses: codecov/codecov-action@v4</code></pre>
</div>

<h3>Architecture et design patterns</h3>
<p>Les <strong>design patterns</strong> sont des solutions éprouvées à des problèmes récurrents de conception. Les plus utiles :</p>
<ul>
<li><strong>Repository :</strong> isole la logique d'accès aux données. On peut changer la base de données sans toucher à la logique métier.</li>
<li><strong>Factory :</strong> délègue la création d'objets à une méthode, permettant de retourner différents sous-types selon le contexte.</li>
<li><strong>Observer :</strong> un objet notifie automatiquement ses abonnés lors de changements d'état. Base des systèmes événementiels.</li>
<li><strong>Dependency Injection :</strong> passer les dépendances en paramètre plutôt que de les créer en interne. Facilite les tests et le découplage.</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Pattern Repository : découpler la logique métier de la persistance
from abc import ABC, abstractmethod

class UtilisateurRepository(ABC):
    @abstractmethod
    def trouver_par_id(self, id: int): pass

    @abstractmethod
    def sauvegarder(self, utilisateur): pass

class PostgresUtilisateurRepository(UtilisateurRepository):
    def __init__(self, connexion):
        self._conn = connexion

    def trouver_par_id(self, id: int):
        return self._conn.execute("SELECT * FROM utilisateurs WHERE id=%s", (id,)).fetchone()

    def sauvegarder(self, utilisateur):
        self._conn.execute("INSERT INTO utilisateurs ...", utilisateur)

class InMemoryUtilisateurRepository(UtilisateurRepository):
    def __init__(self):
        self._store = {}

    def trouver_par_id(self, id: int):
        return self._store.get(id)

    def sauvegarder(self, utilisateur):
        self._store[utilisateur["id"]] = utilisateur

# Le service métier ne connaît que l'interface, pas l'implémentation
class ServiceUtilisateur:
    def __init__(self, repo: UtilisateurRepository):
        self.repo = repo  # injection de dépendance

# En test : utiliser le repository en mémoire (rapide, pas de DB)
service = ServiceUtilisateur(InMemoryUtilisateurRepository())
# En production : utiliser le vrai repository
service = ServiceUtilisateur(PostgresUtilisateurRepository(conn))</code></pre>
</div>
<div class="highlight-box"><p><strong>SOLID :</strong> Les 5 principes SOLID (Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion) guident la conception orientée objet vers des systèmes découplés, testables et évolutifs. Ils ne s'appliquent pas dogmatiquement mais orientent les décisions d'architecture.</p></div>
</div>
    </section>"""

# ============================================================
# PROGRAMMATION / WEB
# ============================================================
pages['programmation/web']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Construire des applications pour le navigateur et le serveur</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>développement web</strong> est la discipline qui consiste à créer des applications accessibles via un navigateur web. Il se divise en deux grandes parties : le <em>frontend</em> (ce que voit l'utilisateur, exécuté dans le navigateur) et le <em>backend</em> (la logique métier et les données, exécutés sur un serveur). Les développeurs full-stack maîtrisent les deux.</p>
      <div class="highlight-box">
        <p><strong>Essentiel :</strong> Le web repose sur trois technologies fondamentales — HTML (structure), CSS (présentation), JavaScript (comportement). Tout le reste — frameworks, bundlers, API — est construit au-dessus de ces fondations standardisées par le W3C.</p>
      </div>
      <p class="resume-text">En 2024, le développement web est l'un des domaines les plus actifs de l'informatique. Comprendre son architecture — des requêtes HTTP aux APIs REST, des cookies aux WebSockets — est indispensable pour tout développeur moderne.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Développement Web — fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Le protocole HTTP : base du web</h3>
<p>HTTP (HyperText Transfer Protocol) est le protocole de communication entre navigateur et serveur. Chaque interaction web est une série de requêtes/réponses HTTP :</p>
<div class="code-block">
  <div class="code-header"><span>HTTP</span></div>
  <pre><code>-- Requête HTTP
GET /api/articles/42 HTTP/1.1
Host: exemple.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJSUzI1NiJ9...
Cookie: session_id=abc123

-- Réponse HTTP
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600

{
  "id": 42,
  "titre": "Introduction au HTTP",
  "auteur": "Alice Martin"
}</code></pre>
</div>
<p>Les <strong>méthodes HTTP</strong> ont des sémantiques précises : GET (lire, idempotent), POST (créer), PUT (remplacer), PATCH (modifier partiellement), DELETE (supprimer). Les <strong>codes de statut</strong> communiquent le résultat : 200 (succès), 201 (créé), 400 (requête invalide), 401 (non authentifié), 403 (non autorisé), 404 (non trouvé), 500 (erreur serveur).</p>

<h3>Frontend : HTML, CSS et JavaScript</h3>
<p>Le trio fondamental du frontend forme des couches distinctes de responsabilités :</p>
<div class="code-block">
  <div class="code-header"><span>HTML</span></div>
  <pre><code>&lt;!-- HTML : structure et sémantique --&gt;
&lt;article&gt;
  &lt;h1&gt;Titre de l'article&lt;/h1&gt;
  &lt;p&gt;Contenu de l'article...&lt;/p&gt;
  &lt;button id="btn-like" aria-label="J'aime cet article"&gt;
    ❤ &lt;span id="compteur"&gt;42&lt;/span&gt;
  &lt;/button&gt;
&lt;/article&gt;

&lt;!-- CSS : présentation et mise en page --&gt;
&lt;style&gt;
article {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Georgia, serif;
}

#btn-like {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: transform 0.1s;
}

#btn-like:hover { transform: scale(1.05); }
&lt;/style&gt;

&lt;!-- JavaScript : comportement et interactivité --&gt;
&lt;script&gt;
const btn = document.getElementById('btn-like');
const compteur = document.getElementById('compteur');

btn.addEventListener('click', async () =&gt; {
  const resp = await fetch('/api/articles/42/like', { method: 'POST' });
  const { count } = await resp.json();
  compteur.textContent = count;
});
&lt;/script&gt;</code></pre>
</div>

<h3>APIs REST et JSON</h3>
<p>Les APIs REST (Representational State Transfer) sont le standard de communication entre frontend et backend. Elles exposent des ressources via des URLs et des méthodes HTTP :</p>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code># Backend Python avec FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Article(BaseModel):
    titre: str
    contenu: str
    auteur: Optional[str] = None

articles_db = {}  # en pratique : vraie base de données

@app.get("/api/articles/{article_id}")
async def lire_article(article_id: int):
    if article_id not in articles_db:
        raise HTTPException(status_code=404, detail="Article introuvable")
    return articles_db[article_id]

@app.post("/api/articles", status_code=201)
async def creer_article(article: Article):
    nouvel_id = len(articles_db) + 1
    articles_db[nouvel_id] = {"id": nouvel_id, **article.dict()}
    return articles_db[nouvel_id]

@app.put("/api/articles/{article_id}")
async def modifier_article(article_id: int, article: Article):
    if article_id not in articles_db:
        raise HTTPException(status_code=404)
    articles_db[article_id].update(article.dict())
    return articles_db[article_id]

@app.delete("/api/articles/{article_id}", status_code=204)
async def supprimer_article(article_id: int):
    articles_db.pop(article_id, None)</code></pre>
</div>

<h3>Authentification et sécurité web</h3>
<p>La sécurité web est critique. Les vulnérabilités les plus courantes (OWASP Top 10) :</p>
<ul>
<li><strong>Injection SQL :</strong> toujours utiliser des requêtes paramétrées, jamais de concaténation de chaînes</li>
<li><strong>XSS (Cross-Site Scripting) :</strong> échapper tout contenu utilisateur affiché dans le HTML</li>
<li><strong>CSRF :</strong> utiliser des tokens CSRF pour les formulaires qui modifient l'état</li>
<li><strong>Exposition de données sensibles :</strong> HTTPS partout, ne jamais logger les mots de passe</li>
</ul>
<div class="code-block">
  <div class="code-header"><span>Python</span></div>
  <pre><code"># Authentification avec JWT (JSON Web Token)
import jwt
from datetime import datetime, timedelta
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"])

def hacher_mot_de_passe(mdp: str) -> str:
    return pwd_context.hash(mdp)  # bcrypt: lent par conception, anti brute-force

def verifier_mot_de_passe(mdp: str, hash: str) -> bool:
    return pwd_context.verify(mdp, hash)

def creer_token_jwt(user_id: int, secret: str) -> str:
    payload = {
        "sub": str(user_id),
        "exp": datetime.utcnow() + timedelta(hours=24),
        "iat": datetime.utcnow()
    }
    return jwt.encode(payload, secret, algorithm="HS256")

def verifier_token(token: str, secret: str) -> dict:
    try:
        return jwt.decode(token, secret, algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expiré")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token invalide")</code></pre>
</div>

<h3>Frameworks frontend : React, Vue, Svelte</h3>
<p>Les frameworks frontend modernes abstraient la manipulation directe du DOM et introduisent des composants réutilisables :</p>
<div class="code-block">
  <div class="code-header"><span>JavaScript</span></div>
  <pre><code>// Composant React : interface déclarative basée sur des composants
import { useState, useEffect } from 'react';

function ListeArticles() {
  const [articles, setArticles] = useState([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then(r => r.json())
      .then(data => {
        setArticles(data);
        setChargement(false);
      });
  }, []);  // [] = exécuter une seule fois au montage

  if (chargement) return &lt;p&gt;Chargement...&lt;/p&gt;;

  return (
    &lt;ul&gt;
      {articles.map(article =&gt; (
        &lt;li key={article.id}&gt;
          &lt;strong&gt;{article.titre}&lt;/strong&gt; — {article.auteur}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>
</div>

<h3>Déploiement et hébergement</h3>
<p>Un projet web doit être déployé pour être accessible. Options courantes selon les besoins :</p>
<ul>
<li><strong>Sites statiques :</strong> Vercel, Netlify, GitHub Pages — déploiement en 1 commande, CDN mondial, HTTPS automatique</li>
<li><strong>Backend containerisé :</strong> Docker + cloud (AWS ECS, Google Cloud Run) — reproductible et scalable</li>
<li><strong>PaaS :</strong> Heroku, Render, Railway — déployer sans gérer l'infrastructure</li>
<li><strong>VPS :</strong> DigitalOcean, Hetzner — contrôle total, prix réduit, mais gestion manuelle</li>
</ul>
<div class="highlight-box"><p><strong>12-Factor App :</strong> Méthodologie de référence pour les applications web cloud-native. Principes clés : configuration via variables d'environnement, pas de secrets dans le code, processus sans état, logs vers stdout. Facilite le déploiement, la mise à l'échelle et la maintenabilité.</p></div>
</div>
    </section>"""

print("Programmation articles done:")
for k in ['programmation/python','programmation/paradigmes','programmation/outils','programmation/projets','programmation/web']:
    print(f"  {k}: {len(pages[k]['content'])} chars")

with open('assets/content/informatique.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK")
