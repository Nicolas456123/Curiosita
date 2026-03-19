#!/usr/bin/env python3
"""Enrich structures/dictionnaires and structures/comprehensions"""
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

JSON_PATH = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/python.json'

with open(JSON_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

def replace_contenu(content, new_contenu_section):
    start_tag = '<section class="content-section" id="contenu">'
    quiz_tag = '<section class="content-section" id="quiz">'
    start_idx = content.find(start_tag)
    if start_idx == -1:
        print("ERROR: Could not find contenu section!")
        return content
    end_idx = content.find(quiz_tag)
    if end_idx == -1:
        return content[:start_idx] + new_contenu_section
    return content[:start_idx] + new_contenu_section + '\n    ' + content[end_idx:]

# ============================================================
# structures/dictionnaires
# ============================================================
DICTS_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Création, accès, méthodes, dict comprehensions et cas d'usage avancés</p></div></div>
      <div class="course-content">
        <h3>Créer et accéder aux données</h3>
        <p>Un <strong>dictionnaire</strong> est une collection de paires clé-valeur non ordonnée (ordonnée d'insertion depuis Python 3.7+). Les clés doivent être <em>hashables</em> (immuables) : chaînes, entiers, tuples — mais pas des listes. Les dictionnaires offrent un accès en O(1) à partir d'une clé, grâce à une table de hachage sous-jacente.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Créer un dictionnaire</span>
vide = {}
personne = {<span class="str">"nom"</span>: <span class="str">"Alice"</span>, <span class="str">"age"</span>: <span class="num">30</span>, <span class="str">"ville"</span>: <span class="str">"Paris"</span>}
scores = {<span class="str">"Alice"</span>: <span class="num">95</span>, <span class="str">"Bob"</span>: <span class="num">87</span>}

<span class="cm"># Depuis une liste de tuples</span>
donnees = [(<span class="str">"a"</span>, <span class="num">1</span>), (<span class="str">"b"</span>, <span class="num">2</span>), (<span class="str">"c"</span>, <span class="num">3</span>)]
dico = <span class="fn">dict</span>(donnees)     <span class="cm"># {'a': 1, 'b': 2, 'c': 3}</span>

<span class="cm"># Avec zip()</span>
cles = [<span class="str">"x"</span>, <span class="str">"y"</span>, <span class="str">"z"</span>]
vals = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>]
dico = <span class="fn">dict</span>(<span class="fn">zip</span>(cles, vals))  <span class="cm"># {'x': 10, 'y': 20, 'z': 30}</span>

<span class="cm"># Accès aux valeurs</span>
<span class="fn">print</span>(personne[<span class="str">"nom"</span>])         <span class="cm"># "Alice"</span>
<span class="fn">print</span>(personne.get(<span class="str">"age"</span>))      <span class="cm"># 30</span>
<span class="fn">print</span>(personne.get(<span class="str">"email"</span>))   <span class="cm"># None — clé absente, pas d'erreur</span>
<span class="fn">print</span>(personne.get(<span class="str">"email"</span>, <span class="str">"non renseigné"</span>))  <span class="cm"># valeur par défaut</span>

<span class="cm"># Modifier / Ajouter</span>
personne[<span class="str">"age"</span>] = <span class="num">31</span>            <span class="cm"># modifier une valeur existante</span>
personne[<span class="str">"email"</span>] = <span class="str">"alice@example.com"</span>  <span class="cm"># ajouter une nouvelle clé</span>

<span class="cm"># Supprimer</span>
<span class="kw">del</span> personne[<span class="str">"ville"</span>]           <span class="cm"># supprime la clé (KeyError si absente)</span>
email = personne.pop(<span class="str">"email"</span>)   <span class="cm"># supprime et retourne la valeur</span>
absent = personne.pop(<span class="str">"X"</span>, <span class="kw">None</span>)  <span class="cm"># valeur par défaut si clé absente</span></code></pre>
        </div>

        <h3>Méthodes et itération</h3>
        <p>Les dictionnaires fournissent trois vues (<em>views</em>) pour itérer : <code>.keys()</code>, <code>.values()</code>, <code>.items()</code>. Ces vues sont dynamiques — elles reflètent les modifications du dictionnaire en temps réel.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>stocks = {<span class="str">"pomme"</span>: <span class="num">50</span>, <span class="str">"banane"</span>: <span class="num">30</span>, <span class="str">"cerise"</span>: <span class="num">80</span>}

<span class="cm"># Itérer sur les clés (par défaut)</span>
<span class="kw">for</span> fruit <span class="kw">in</span> stocks:           <span class="cm"># identique à stocks.keys()</span>
    <span class="fn">print</span>(fruit)

<span class="cm"># Itérer sur les valeurs</span>
<span class="kw">for</span> quantite <span class="kw">in</span> stocks.values():
    <span class="fn">print</span>(quantite)

<span class="cm"># Itérer sur les paires clé-valeur</span>
<span class="kw">for</span> fruit, quantite <span class="kw">in</span> stocks.items():
    <span class="fn">print</span>(<span class="str">f"{fruit}: {quantite} unités"</span>)

<span class="cm"># Vérifier l'existence d'une clé — O(1)</span>
<span class="fn">print</span>(<span class="str">"pomme"</span> <span class="kw">in</span> stocks)    <span class="cm"># True</span>
<span class="fn">print</span>(<span class="str">"raisin"</span> <span class="kw">in</span> stocks)   <span class="cm"># False</span>

<span class="cm"># update() — fusionner des dictionnaires</span>
extra = {<span class="str">"kiwi"</span>: <span class="num">25</span>, <span class="str">"mangue"</span>: <span class="num">15</span>}
stocks.update(extra)
<span class="fn">print</span>(stocks)  <span class="cm"># 5 fruits</span>

<span class="cm"># Fusion avec | (Python 3.9+)</span>
fusionné = stocks | {<span class="str">"fraise"</span>: <span class="num">60</span>}  <span class="cm"># nouveau dictionnaire</span>
stocks |= {<span class="str">"fraise"</span>: <span class="num">60</span>}            <span class="cm"># mise à jour en place</span>

<span class="cm"># setdefault() — ajouter seulement si absent</span>
compteur = {}
<span class="kw">for</span> mot <span class="kw">in</span> <span class="str">"bonjour le monde"</span>.split():
    compteur.setdefault(mot, <span class="num">0</span>)
    compteur[mot] += <span class="num">1</span>
<span class="fn">print</span>(compteur)  <span class="cm"># {'bonjour': 1, 'le': 1, 'monde': 1}</span></code></pre>
        </div>

        <h3>defaultdict et Counter</h3>
        <p>Le module <code>collections</code> fournit des variantes de dictionnaire très utiles : <code>defaultdict</code> crée automatiquement une valeur par défaut pour les clés manquantes, <code>Counter</code> est spécialisé pour le comptage d'éléments.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">from</span> collections <span class="kw">import</span> defaultdict, Counter

<span class="cm"># defaultdict — évite les KeyError pour les nouvelles clés</span>
groupes = defaultdict(<span class="fn">list</span>)
etudiants = [(<span class="str">"Alice"</span>, <span class="str">"Maths"</span>), (<span class="str">"Bob"</span>, <span class="str">"Physique"</span>), (<span class="str">"Carol"</span>, <span class="str">"Maths"</span>)]
<span class="kw">for</span> etudiant, matiere <span class="kw">in</span> etudiants:
    groupes[matiere].append(etudiant)  <span class="cm"># liste créée automatiquement</span>

<span class="fn">print</span>(<span class="fn">dict</span>(groupes))
<span class="cm"># {'Maths': ['Alice', 'Carol'], 'Physique': ['Bob']}</span>

<span class="cm"># Compteur avec defaultdict(int)</span>
votes = defaultdict(<span class="fn">int</span>)
<span class="kw">for</span> vote <span class="kw">in</span> [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Alice"</span>, <span class="str">"Carol"</span>, <span class="str">"Alice"</span>]:
    votes[vote] += <span class="num">1</span>
<span class="fn">print</span>(<span class="fn">dict</span>(votes))  <span class="cm"># {'Alice': 3, 'Bob': 1, 'Carol': 1}</span>

<span class="cm"># Counter — spécialisé pour le comptage</span>
texte = <span class="str">"mississippi"</span>
c = Counter(texte)
<span class="fn">print</span>(c)                     <span class="cm"># Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})</span>
<span class="fn">print</span>(c.most_common(<span class="num">2</span>))      <span class="cm"># [('i', 4), ('s', 4)]</span>
<span class="fn">print</span>(c[<span class="str">"z"</span>])               <span class="cm"># 0 — pas d'erreur pour les clés absentes</span>

<span class="cm"># Opérations sur Counter</span>
c1 = Counter(<span class="str">"hello"</span>)
c2 = Counter(<span class="str">"world"</span>)
<span class="fn">print</span>(c1 + c2)   <span class="cm"># fusion (addition)</span>
<span class="fn">print</span>(c1 & c2)   <span class="cm"># intersection (min des compteurs)</span>
<span class="fn">print</span>(c1 | c2)   <span class="cm"># union (max des compteurs)</span></code></pre>
        </div>

        <h3>Dictionnaires imbriqués</h3>
        <p>Les dictionnaires peuvent contenir d'autres dictionnaires comme valeurs, créant des structures de données hiérarchiques. Ce patron est très commun pour représenter des objets complexes, du JSON, ou des configurations.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Dictionnaire imbriqué</span>
entreprise = {
    <span class="str">"nom"</span>: <span class="str">"TechCorp"</span>,
    <span class="str">"employes"</span>: {
        <span class="str">"E001"</span>: {<span class="str">"nom"</span>: <span class="str">"Alice"</span>, <span class="str">"poste"</span>: <span class="str">"Dev"</span>, <span class="str">"salaire"</span>: <span class="num">50000</span>},
        <span class="str">"E002"</span>: {<span class="str">"nom"</span>: <span class="str">"Bob"</span>,   <span class="str">"poste"</span>: <span class="str">"QA"</span>,  <span class="str">"salaire"</span>: <span class="num">45000</span>},
    },
    <span class="str">"siege"</span>: {<span class="str">"ville"</span>: <span class="str">"Paris"</span>, <span class="str">"code_postal"</span>: <span class="str">"75001"</span>},
}

<span class="cm"># Accès imbriqué</span>
<span class="fn">print</span>(entreprise[<span class="str">"employes"</span>][<span class="str">"E001"</span>][<span class="str">"nom"</span>])  <span class="cm"># Alice</span>
<span class="fn">print</span>(entreprise[<span class="str">"siege"</span>][<span class="str">"ville"</span>])             <span class="cm"># Paris</span>

<span class="cm"># Accès sécurisé avec get() imbriqué</span>
salaire = entreprise.get(<span class="str">"employes"</span>, {}).get(<span class="str">"E003"</span>, {}).get(<span class="str">"salaire"</span>, <span class="num">0</span>)
<span class="fn">print</span>(salaire)  <span class="cm"># 0 — E003 n'existe pas, pas d'erreur</span>

<span class="cm"># Itérer sur un dict imbriqué</span>
<span class="kw">for</span> id_emp, emp <span class="kw">in</span> entreprise[<span class="str">"employes"</span>].items():
    <span class="fn">print</span>(<span class="str">f"{id_emp}: {emp['nom']} ({emp['poste']})"</span>)</code></pre>
        </div>

        <h3>Dict comprehensions et transformations</h3>
        <p>Les compréhensions de dictionnaire permettent de créer ou transformer des dictionnaires de manière concise. Elles suivent la syntaxe <code>{clé: valeur for ... in ... if ...}</code>.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Dict comprehension basique</span>
carres = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>)}
<span class="cm"># {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</span>

<span class="cm"># Avec condition</span>
pairs_carres = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>}
<span class="cm"># {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}</span>

<span class="cm"># Inverser un dictionnaire (clés ↔ valeurs)</span>
original = {<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>, <span class="str">"c"</span>: <span class="num">3</span>}
inverse = {v: k <span class="kw">for</span> k, v <span class="kw">in</span> original.items()}
<span class="cm"># {1: 'a', 2: 'b', 3: 'c'}</span>

<span class="cm"># Filtrer un dictionnaire</span>
stocks = {<span class="str">"pomme"</span>: <span class="num">5</span>, <span class="str">"banane"</span>: <span class="num">30</span>, <span class="str">"cerise"</span>: <span class="num">2</span>, <span class="str">"kiwi"</span>: <span class="num">50</span>}
stock_suffisant = {k: v <span class="kw">for</span> k, v <span class="kw">in</span> stocks.items() <span class="kw">if</span> v &gt;= <span class="num">10</span>}
<span class="cm"># {'banane': 30, 'kiwi': 50}</span>

<span class="cm"># Transformer les valeurs</span>
scores = {<span class="str">"Alice"</span>: <span class="num">17</span>, <span class="str">"Bob"</span>: <span class="num">13</span>, <span class="str">"Carol"</span>: <span class="num">15</span>}
pourcentages = {nom: note / <span class="num">20</span> * <span class="num">100</span> <span class="kw">for</span> nom, note <span class="kw">in</span> scores.items()}
<span class="cm"># {'Alice': 85.0, 'Bob': 65.0, 'Carol': 75.0}</span>

<span class="cm"># Grouper par première lettre</span>
mots = [<span class="str">"ananas"</span>, <span class="str">"banane"</span>, <span class="str">"abricot"</span>, <span class="str">"brugnon"</span>]
groupes = {}
<span class="kw">for</span> mot <span class="kw">in</span> mots:
    lettre = mot[<span class="num">0</span>]
    groupes.setdefault(lettre, []).append(mot)
<span class="cm"># {'a': ['ananas', 'abricot'], 'b': ['banane', 'brugnon']}</span></code></pre>
        </div>

        <h3>Cas d'usage avancés</h3>
        <p>Les dictionnaires sont au cœur de nombreux patrons de conception Python : dispatch par dictionnaire (alternative aux longues chaînes if/elif), mémoïsation, registres de fonctions, configurations.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Pattern Dispatch — remplacer if/elif par un dict</span>
<span class="kw">def</span> <span class="fn">ajouter</span>(a, b): <span class="kw">return</span> a + b
<span class="kw">def</span> <span class="fn">soustraire</span>(a, b): <span class="kw">return</span> a - b
<span class="kw">def</span> <span class="fn">multiplier</span>(a, b): <span class="kw">return</span> a * b

operations = {
    <span class="str">"+"</span>: ajouter,
    <span class="str">"-"</span>: soustraire,
    <span class="str">"*"</span>: multiplier,
}

operateur = <span class="str">"+"</span>
resultat = operations[operateur](<span class="num">10</span>, <span class="num">5</span>)  <span class="cm"># 15</span>

<span class="cm"># Mémoïsation (cache manuel)</span>
_cache = {}
<span class="kw">def</span> <span class="fn">fibonacci</span>(n):
    <span class="kw">if</span> n <span class="kw">in</span> _cache:
        <span class="kw">return</span> _cache[n]
    <span class="kw">if</span> n &lt; <span class="num">2</span>:
        <span class="kw">return</span> n
    resultat = <span class="fn">fibonacci</span>(n - <span class="num">1</span>) + <span class="fn">fibonacci</span>(n - <span class="num">2</span>)
    _cache[n] = resultat
    <span class="kw">return</span> resultat

<span class="cm"># Compter les mots d'un texte</span>
texte = <span class="str">"le chat est sur le tapis et le chat dort"</span>
freq = {}
<span class="kw">for</span> mot <span class="kw">in</span> texte.split():
    freq[mot] = freq.get(mot, <span class="num">0</span>) + <span class="num">1</span>

<span class="cm"># Plus concis avec Counter</span>
<span class="kw">from</span> collections <span class="kw">import</span> Counter
freq = Counter(texte.split())
<span class="fn">print</span>(freq.most_common(<span class="num">3</span>))  <span class="cm"># [('le', 3), ('chat', 2), ...]</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : KeyError sur clé absente</span>
dico = {<span class="str">"a"</span>: <span class="num">1</span>}
<span class="cm"># print(dico["b"])  → KeyError: 'b'</span>
<span class="fn">print</span>(dico.get(<span class="str">"b"</span>, <span class="num">0</span>))  <span class="cm"># ✓ 0 — valeur par défaut</span>

<span class="cm"># PIÈGE 2 : Modifier un dict pendant l'itération</span>
dico = {<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>, <span class="str">"c"</span>: <span class="num">3</span>}
<span class="cm"># for k in dico:</span>
<span class="cm">#     if k == "b": del dico[k]  # RuntimeError !</span>
<span class="cm"># ✓ Itérer sur une copie des clés</span>
<span class="kw">for</span> k <span class="kw">in</span> <span class="fn">list</span>(dico.keys()):
    <span class="kw">if</span> k == <span class="str">"b"</span>:
        <span class="kw">del</span> dico[k]

<span class="cm"># PIÈGE 3 : Clés mutables (listes) — TypeEror</span>
<span class="cm"># dico[[1, 2]] = "valeur"  → TypeError: unhashable type: 'list'</span>
dico[(<span class="num">1</span>, <span class="num">2</span>)] = <span class="str">"valeur"</span>    <span class="cm"># ✓ tuple hashable</span>

<span class="cm"># PIÈGE 4 : Confusion entre clés et valeurs dans in</span>
d = {<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>}
<span class="fn">print</span>(<span class="str">"a"</span> <span class="kw">in</span> d)           <span class="cm"># True  — teste les CLÉS</span>
<span class="fn">print</span>(<span class="num">1</span> <span class="kw">in</span> d)             <span class="cm"># False — 1 n'est pas une clé</span>
<span class="fn">print</span>(<span class="num">1</span> <span class="kw">in</span> d.values())    <span class="cm"># True  — teste les valeurs</span>

<span class="cm"># PIÈGE 5 : update() écrase les valeurs existantes</span>
base = {<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>}
base.update({<span class="str">"b"</span>: <span class="num">99</span>, <span class="str">"c"</span>: <span class="num">3</span>})
<span class="fn">print</span>(base)  <span class="cm"># {'a': 1, 'b': 99, 'c': 3} — b écrasé !</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>get() vs [] :</strong> utilisez <code>.get(cle, defaut)</code> quand la clé peut être absente — cela évite les <code>KeyError</code>.</li>
          <li><strong>setdefault() :</strong> idéal pour construire des dictionnaires de listes ou de compteurs incrémentalement.</li>
          <li><strong>defaultdict :</strong> préférez <code>defaultdict(list)</code> à <code>setdefault()</code> pour les groupements récurrents.</li>
          <li><strong>Counter :</strong> pour compter des éléments, <code>Counter</code> est plus lisible et puissant qu'un dictionnaire manuel.</li>
          <li><strong>dict comprehension :</strong> préférez les compréhensions aux boucles pour créer/transformer des dicts concisément.</li>
          <li><strong>Ordre d'insertion :</strong> depuis Python 3.7, les dicts conservent l'ordre d'insertion — vous pouvez vous y fier.</li>
          <li><strong>Clés descriptives :</strong> les dictionnaires jouent souvent le rôle d'objets — nommez vos clés explicitement.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Performance :</strong> l'accès (<code>d[k]</code>), l'insertion et la suppression dans un dictionnaire sont en O(1) grâce à la table de hachage. La vérification d'appartenance (<code>k in d</code>) est aussi O(1) — bien plus rapide qu'une liste O(n). Préférez un <code>set</code> si vous n'avez que des clés sans valeurs.</p>
        </div>
      </div>
    </section>
    """

# ============================================================
# structures/comprehensions
# ============================================================
COMPREHENSIONS_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>List, dict, set comprehensions, expressions génératrices et bonnes pratiques</p></div></div>
      <div class="course-content">
        <h3>List comprehensions</h3>
        <p>Une <strong>compréhension de liste</strong> (list comprehension) permet de créer une liste de manière concise et expressive en une seule ligne. La syntaxe est : <code>[expression for element in iterable if condition]</code>. Elles sont plus rapides que les boucles <code>for</code> + <code>.append()</code> car elles évitent les appels de méthode répétés.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Forme de base</span>
carres = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>)]
<span class="cm"># [1, 4, 9, 16, 25]</span>

<span class="cm"># Équivalent avec une boucle (plus verbeux)</span>
carres_boucle = []
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):
    carres_boucle.append(x**<span class="num">2</span>)

<span class="cm"># Avec filtre if</span>
pairs = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="cm"># [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]</span>

<span class="cm"># Transformation de chaînes</span>
mots = [<span class="str">"  bonjour  "</span>, <span class="str">"  monde  "</span>, <span class="str">"  python  "</span>]
nettoyes = [mot.strip().capitalize() <span class="kw">for</span> mot <span class="kw">in</span> mots]
<span class="cm"># ['Bonjour', 'Monde', 'Python']</span>

<span class="cm"># Aplatir une liste de listes</span>
matrice = [[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>], [<span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>], [<span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span>]]
plat = [val <span class="kw">for</span> rangee <span class="kw">in</span> matrice <span class="kw">for</span> val <span class="kw">in</span> rangee]
<span class="cm"># [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>

<span class="cm"># Filtrer et transformer simultanément</span>
notes = [<span class="num">8</span>, <span class="num">15</span>, <span class="num">12</span>, <span class="num">7</span>, <span class="num">18</span>, <span class="num">9</span>]
mentions = [<span class="str">"admis"</span> <span class="kw">if</span> n &gt;= <span class="num">10</span> <span class="kw">else</span> <span class="str">"refusé"</span> <span class="kw">for</span> n <span class="kw">in</span> notes]
<span class="cm"># ['refusé', 'admis', 'admis', 'refusé', 'admis', 'refusé']</span></code></pre>
        </div>

        <h3>Dict et set comprehensions</h3>
        <p>La syntaxe des compréhensions s'étend aux dictionnaires et aux ensembles (sets). Un <strong>set</strong> est une collection non ordonnée d'éléments uniques, très efficace pour les tests d'appartenance et l'élimination des doublons.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Dict comprehension</span>
carres_dict = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>)}
<span class="cm"># {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}</span>

<span class="cm"># Dict avec filtre</span>
scores = {<span class="str">"Alice"</span>: <span class="num">17</span>, <span class="str">"Bob"</span>: <span class="num">9</span>, <span class="str">"Carol"</span>: <span class="num">13</span>}
recus = {nom: note <span class="kw">for</span> nom, note <span class="kw">in</span> scores.items() <span class="kw">if</span> note &gt;= <span class="num">10</span>}
<span class="cm"># {'Alice': 17, 'Carol': 13}</span>

<span class="cm"># Set comprehension — élimine les doublons</span>
nombres = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">3</span>, <span class="num">4</span>]
uniques = {x <span class="kw">for</span> x <span class="kw">in</span> nombres}
<span class="cm"># {1, 2, 3, 4}</span>

<span class="cm"># Ou simplement :</span>
uniques = <span class="fn">set</span>(nombres)

<span class="cm"># Set comprehension avec transformation</span>
mots = [<span class="str">"Bonjour"</span>, <span class="str">"bonjour"</span>, <span class="str">"BONJOUR"</span>, <span class="str">"Monde"</span>]
uniques_lower = {mot.lower() <span class="kw">for</span> mot <span class="kw">in</span> mots}
<span class="cm"># {'bonjour', 'monde'}</span>

<span class="cm"># Opérations sur les sets</span>
a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}
<span class="fn">print</span>(a | b)   <span class="cm"># {1, 2, 3, 4, 5, 6} — union</span>
<span class="fn">print</span>(a &amp; b)   <span class="cm"># {3, 4} — intersection</span>
<span class="fn">print</span>(a - b)   <span class="cm"># {1, 2} — différence (dans a mais pas b)</span>
<span class="fn">print</span>(a ^ b)   <span class="cm"># {1, 2, 5, 6} — différence symétrique</span></code></pre>
        </div>

        <h3>Compréhensions imbriquées</h3>
        <p>Les compréhensions peuvent être imbriquées, ce qui permet de générer des structures multidimensionnelles ou de traiter des données hiérarchiques. L'ordre des <code>for</code> dans une compréhension suit l'ordre logique (du plus externe au plus interne).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Produit cartésien</span>
couleurs = [<span class="str">"rouge"</span>, <span class="str">"bleu"</span>]
tailles = [<span class="str">"S"</span>, <span class="str">"M"</span>, <span class="str">"L"</span>]
combinaisons = [(c, t) <span class="kw">for</span> c <span class="kw">in</span> couleurs <span class="kw">for</span> t <span class="kw">in</span> tailles]
<span class="cm"># [('rouge', 'S'), ('rouge', 'M'), ('rouge', 'L'),</span>
<span class="cm">#  ('bleu', 'S'), ('bleu', 'M'), ('bleu', 'L')]</span>

<span class="cm"># Créer une matrice</span>
matrice = [[i * j <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">4</span>)] <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">4</span>)]
<span class="cm"># [[1, 2, 3],</span>
<span class="cm">#  [2, 4, 6],</span>
<span class="cm">#  [3, 6, 9]]</span>

<span class="cm"># Transposer une matrice</span>
original = [[<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>], [<span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>], [<span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span>]]
transpose = [[rangee[j] <span class="kw">for</span> rangee <span class="kw">in</span> original] <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)]
<span class="cm"># [[1, 4, 7], [2, 5, 8], [3, 6, 9]]</span>

<span class="cm"># Aplatir avec condition</span>
donnees = [[<span class="num">1</span>, -<span class="num">2</span>, <span class="num">3</span>], [<span class="num">4</span>, <span class="num">5</span>, -<span class="num">6</span>], [<span class="num">7</span>, -<span class="num">8</span>, <span class="num">9</span>]]
positifs = [val <span class="kw">for</span> rangee <span class="kw">in</span> donnees <span class="kw">for</span> val <span class="kw">in</span> rangee <span class="kw">if</span> val &gt; <span class="num">0</span>]
<span class="cm"># [1, 3, 4, 5, 7, 9]</span></code></pre>
        </div>

        <h3>Expressions génératrices</h3>
        <p>Une <strong>expression génératrice</strong> est comme une compréhension de liste mais sans les crochets — elle utilise des parenthèses et génère les valeurs à la demande (<em>lazily</em>). Elle ne stocke pas tous les éléments en mémoire, ce qui est crucial pour les très grandes séquences.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Compréhension — crée TOUTE la liste en mémoire</span>
liste = [x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1_000_000</span>)]  <span class="cm"># 8 Mo en mémoire</span>

<span class="cm"># Expression génératrice — paresseuse, quasi pas de mémoire</span>
gen = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1_000_000</span>))   <span class="cm"># quelques octets</span>
<span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 0 — premier élément</span>
<span class="fn">print</span>(<span class="fn">next</span>(gen))   <span class="cm"># 1 — deuxième élément</span>

<span class="cm"># Utilisation dans les fonctions — parenthèses implicites</span>
total = <span class="fn">sum</span>(x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">100</span>))
maximum = <span class="fn">max</span>(x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>))
existe = <span class="fn">any</span>(x &gt; <span class="num">50</span> <span class="kw">for</span> x <span class="kw">in</span> [<span class="num">30</span>, <span class="num">60</span>, <span class="num">20</span>])   <span class="cm"># True — court-circuit !</span>
tous = <span class="fn">all</span>(x &gt; <span class="num">0</span> <span class="kw">for</span> x <span class="kw">in</span> [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])

<span class="cm"># Générateur de Fibonacci infini</span>
<span class="kw">def</span> <span class="fn">fibonacci</span>():
    a, b = <span class="num">0</span>, <span class="num">1</span>
    <span class="kw">while</span> <span class="kw">True</span>:
        <span class="kw">yield</span> a
        a, b = b, a + b

<span class="cm"># Prendre les 10 premiers</span>
<span class="kw">import</span> itertools
dix_premiers = <span class="fn">list</span>(itertools.islice(<span class="fn">fibonacci</span>(), <span class="num">10</span>))
<span class="cm"># [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span></code></pre>
        </div>
        <div class="highlight-box">
          <p><strong>Quand utiliser un générateur vs une liste ?</strong> Utilisez un générateur quand vous n'avez besoin de parcourir les données qu'une seule fois, ou quand les données sont très volumineuses. Utilisez une liste quand vous avez besoin d'accéder aux éléments plusieurs fois, de connaître la longueur, ou d'utiliser l'indexation.</p>
        </div>

        <h3>Compréhensions avec if/else (expression ternaire)</h3>
        <p>La condition <code>if</code> à la fin filtre les éléments. L'expression ternaire <code>x if cond else y</code> en début de compréhension transforme chaque élément selon une condition, sans filtrage.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Filtre : if à la FIN — exclut des éléments</span>
pairs = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="cm"># [0, 2, 4, 6, 8]</span>

<span class="cm"># Transformation : if/else au DÉBUT — garde tous les éléments</span>
labels = [<span class="str">"pair"</span> <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="str">"impair"</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">6</span>)]
<span class="cm"># ['pair', 'impair', 'pair', 'impair', 'pair', 'impair']</span>

<span class="cm"># Les deux combinés</span>
nombres = [<span class="num">-5</span>, <span class="num">3</span>, <span class="num">0</span>, <span class="num">-2</span>, <span class="num">8</span>, <span class="num">-1</span>, <span class="num">4</span>]
positifs_doubles = [x * <span class="num">2</span> <span class="kw">if</span> x &gt; <span class="num">0</span> <span class="kw">else</span> <span class="num">0</span> <span class="kw">for</span> x <span class="kw">in</span> nombres]
<span class="cm"># [0, 6, 0, 0, 16, 0, 8]</span>

<span class="cm"># Application : normaliser des données</span>
donnees = [<span class="num">10</span>, <span class="kw">None</span>, <span class="num">5</span>, <span class="kw">None</span>, <span class="num">8</span>, <span class="kw">None</span>]
nettoyes = [x <span class="kw">if</span> x <span class="kw">is</span> <span class="kw">not</span> <span class="kw">None</span> <span class="kw">else</span> <span class="num">0</span> <span class="kw">for</span> x <span class="kw">in</span> donnees]
<span class="cm"># [10, 0, 5, 0, 8, 0]</span>

<span class="cm"># Compréhension avec appel de fonction</span>
<span class="kw">import</span> math
rayons = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
aires = [<span class="fn">round</span>(math.pi * r**<span class="num">2</span>, <span class="num">2</span>) <span class="kw">for</span> r <span class="kw">in</span> rayons]
<span class="cm"># [3.14, 12.57, 28.27, 50.27, 78.54]</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : Position du if — filtre vs transformation</span>
<span class="cm"># if à la fin = filtre (certains éléments exclus)</span>
filtre = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x &gt; <span class="num">5</span>]
<span class="cm"># [6, 7, 8, 9]</span>

<span class="cm"># if au début = ternaire (tous les éléments gardés)</span>
ternaire = [x <span class="kw">if</span> x &gt; <span class="num">5</span> <span class="kw">else</span> <span class="num">0</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
<span class="cm"># [0, 0, 0, 0, 0, 0, 6, 7, 8, 9]</span>

<span class="cm"># PIÈGE 2 : Compréhensions trop complexes — nuisent à la lisibilité</span>
<span class="cm"># ❌ Illisible — refactorisez !</span>
<span class="cm"># result = [f(x) for x in [g(y) for y in z] if h(x)]</span>

<span class="cm"># ✓ Diviser en étapes</span>
etape1 = [g(y) <span class="kw">for</span> y <span class="kw">in</span> z]
etape2 = [f(x) <span class="kw">for</span> x <span class="kw">in</span> etape1 <span class="kw">if</span> h(x)]

<span class="cm"># PIÈGE 3 : Générateur consommé une seule fois</span>
gen = (x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>))
<span class="fn">print</span>(<span class="fn">list</span>(gen))   <span class="cm"># [0, 1, 4, 9, 16]</span>
<span class="fn">print</span>(<span class="fn">list</span>(gen))   <span class="cm"># [] — générateur épuisé !</span>

<span class="cm"># PIÈGE 4 : Compréhension quand une boucle est plus claire</span>
<span class="cm"># Préférez une boucle si la logique est complexe ou a des effets de bord</span>
<span class="cm"># Une compréhension ne devrait PAS être utilisée juste pour ses effets de bord !</span>
<span class="cm"># ❌ Utiliser une compréhension pour ses effets de bord</span>
<span class="cm"># [print(x) for x in range(5)]  # fonctionne mais anti-pythonique</span>
<span class="cm"># ✓ Boucle for pour les effets de bord</span>
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(x)</code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Lisibilité d'abord :</strong> une compréhension sur une ligne est idéale. Si elle dépasse 80 caractères ou nécessite plusieurs niveaux d'imbrication, utilisez une boucle.</li>
          <li><strong>Pas d'effets de bord :</strong> les compréhensions servent à <em>créer</em> des collections. Pour des actions (print, modification), utilisez une boucle.</li>
          <li><strong>Générateurs pour les grandes données :</strong> dès que vous n'avez besoin de parcourir qu'une fois ou que les données sont volumineuses, utilisez une expression génératrice.</li>
          <li><strong>any()/all() avec générateur :</strong> profitez du court-circuit — <code>any(pred(x) for x in lst)</code> s'arrête au premier <code>True</code>.</li>
          <li><strong>itertools :</strong> pour les combinaisons, produits cartésiens et transformations d'itérables complexes, le module <code>itertools</code> fournit des outils optimisés.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Benchmark :</strong> une list comprehension est environ 30-50% plus rapide qu'une boucle <code>for</code> + <code>.append()</code> car Python optimise l'allocation mémoire à l'avance. Cependant, pour des transformations simples sur des grandes données, <code>map()</code> avec une fonction C intégrée (comme <code>str.upper</code>) peut être encore plus rapide.</p>
        </div>
      </div>
    </section>
    """

# Apply enrichments
articles = {
    'structures/dictionnaires': DICTS_CONTENU,
    'structures/comprehensions': COMPREHENSIONS_CONTENU,
}

for key, new_contenu in articles.items():
    page = data['pages'][key]
    old_len = len(page['content'])
    page['content'] = replace_contenu(page['content'], new_contenu)
    new_len = len(page['content'])
    print(f"{key}: {old_len} -> {new_len} chars")

with open(JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("\nSaved successfully!")

# Verify JSON validity
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    check = json.load(f)

print("\nFinal content lengths for all lessons:")
for key, page in sorted(check['pages'].items(), key=lambda x: len(x[1].get('content', ''))):
    if page.get('type') == 'lesson':
        print(f"  {key}: {len(page['content'])} chars")
