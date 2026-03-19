#!/usr/bin/env python3
"""Enrich Python discipline articles in python.json"""
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

JSON_PATH = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/python.json'

with open(JSON_PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

# ============================================================
# structures/listes — enriched contenu section
# ============================================================

LISTES_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Création, indexation, slicing, méthodes et algorithmes</p></div></div>
      <div class="course-content">
        <h3>Créer et accéder aux éléments</h3>
        <p>Une <strong>liste</strong> est une collection ordonnée et mutable d'éléments. En Python, une liste peut contenir des éléments de types différents, bien qu'en pratique on utilise généralement des listes homogènes. Les listes sont délimitées par des crochets <code>[]</code>, les éléments séparés par des virgules. Sous le capot, une liste Python est un tableau dynamique de pointeurs vers des objets Python.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Créer une liste — plusieurs façons</span>
fruits = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>, <span class="str">"cerise"</span>, <span class="str">"datte"</span>]
nombres = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
mixte = [<span class="str">"hello"</span>, <span class="num">42</span>, <span class="kw">True</span>, <span class="num">3.14</span>, <span class="kw">None</span>]
vide = []                           <span class="cm"># liste vide</span>
via_range = <span class="fn">list</span>(<span class="fn">range</span>(<span class="num">10</span>))         <span class="cm"># [0, 1, 2, ..., 9]</span>
via_split = <span class="str">"a,b,c"</span>.split(<span class="str">","</span>)     <span class="cm"># ['a', 'b', 'c']</span>

<span class="cm"># Indexation — commence à 0</span>
<span class="fn">print</span>(fruits[<span class="num">0</span>])    <span class="cm"># "pomme"  — premier élément</span>
<span class="fn">print</span>(fruits[<span class="num">2</span>])    <span class="cm"># "cerise" — troisième</span>
<span class="fn">print</span>(fruits[-<span class="num">1</span>])   <span class="cm"># "datte"  — dernier</span>
<span class="fn">print</span>(fruits[-<span class="num">2</span>])   <span class="cm"># "cerise" — avant-dernier</span>

<span class="cm"># Modifier un élément (les listes sont mutables)</span>
fruits[<span class="num">1</span>] = <span class="str">"mangue"</span>
<span class="fn">print</span>(fruits)  <span class="cm"># ["pomme", "mangue", "cerise", "datte"]</span>

<span class="cm"># Longueur et tests</span>
<span class="fn">print</span>(<span class="fn">len</span>(fruits))             <span class="cm"># 4</span>
<span class="fn">print</span>(<span class="str">"pomme"</span> <span class="kw">in</span> fruits)        <span class="cm"># True</span>
<span class="fn">print</span>(<span class="str">"raisin"</span> <span class="kw">not in</span> fruits)  <span class="cm"># True</span></code></pre>
        </div>

        <h3>Slicing (découpage)</h3>
        <p>Le <strong>slicing</strong> permet d'extraire une sous-liste avec la syntaxe <code>liste[début:fin:pas]</code>. L'index de début est inclus, celui de fin est exclu. Les valeurs négatives fonctionnent à rebours depuis la fin. Le slicing crée toujours une nouvelle liste (copie superficielle).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>nums = [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>, <span class="num">7</span>, <span class="num">8</span>, <span class="num">9</span>]

<span class="cm"># Syntaxe : [début:fin] — fin exclue</span>
<span class="fn">print</span>(nums[<span class="num">2</span>:<span class="num">5</span>])     <span class="cm"># [2, 3, 4]</span>
<span class="fn">print</span>(nums[:<span class="num">3</span>])      <span class="cm"># [0, 1, 2] — du début à 2</span>
<span class="fn">print</span>(nums[<span class="num">7</span>:])      <span class="cm"># [7, 8, 9] — de 7 à la fin</span>
<span class="fn">print</span>(nums[:])       <span class="cm"># [0..9]   — copie complète</span>

<span class="cm"># Avec le pas</span>
<span class="fn">print</span>(nums[::<span class="num">2</span>])     <span class="cm"># [0, 2, 4, 6, 8] — pairs</span>
<span class="fn">print</span>(nums[<span class="num">1</span>::<span class="num">2</span>])    <span class="cm"># [1, 3, 5, 7, 9] — impairs</span>
<span class="fn">print</span>(nums[::-<span class="num">1</span>])    <span class="cm"># [9, 8, ..., 0]  — inversée</span>
<span class="fn">print</span>(nums[<span class="num">8</span>:<span class="num">1</span>:-<span class="num">2</span>])  <span class="cm"># [8, 6, 4, 2]</span>

<span class="cm"># Modification par slicing</span>
lettres = [<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>, <span class="str">"d"</span>, <span class="str">"e"</span>]
lettres[<span class="num">1</span>:<span class="num">3</span>] = [<span class="str">"X"</span>, <span class="str">"Y"</span>, <span class="str">"Z"</span>]  <span class="cm"># Remplace b,c par X,Y,Z</span>
<span class="fn">print</span>(lettres)  <span class="cm"># ["a", "X", "Y", "Z", "d", "e"]</span>

lettres[<span class="num">1</span>:<span class="num">4</span>] = []  <span class="cm"># Supprime X,Y,Z par slicing</span>
<span class="fn">print</span>(lettres)  <span class="cm"># ["a", "d", "e"]</span></code></pre>
        </div>

        <h3>Méthodes de listes</h3>
        <p>Les listes Python disposent d'un ensemble complet de méthodes pour ajouter, supprimer, chercher et trier des éléments. La distinction entre méthodes qui modifient la liste <em>en place</em> et celles qui retournent une nouvelle valeur est essentielle pour éviter les erreurs.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>lst = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>]

<span class="cm"># Ajouter des éléments</span>
lst.append(<span class="num">9</span>)           <span class="cm"># [3,1,4,1,5,9] — fin de liste</span>
lst.insert(<span class="num">0</span>, <span class="num">0</span>)         <span class="cm"># [0,3,1,4,1,5,9] — à l'index 0</span>
lst.extend([<span class="num">2</span>, <span class="num">6</span>])        <span class="cm"># ajoute [2,6] à la fin</span>
lst += [<span class="num">10</span>, <span class="num">11</span>]           <span class="cm"># équivalent à extend()</span>

<span class="cm"># Supprimer des éléments</span>
lst.remove(<span class="num">1</span>)            <span class="cm"># supprime la 1ère occurrence de 1</span>
element = lst.pop()      <span class="cm"># retire et retourne le dernier</span>
element = lst.pop(<span class="num">0</span>)     <span class="cm"># retire et retourne l'index 0</span>
lst.clear()              <span class="cm"># vide complètement</span>

<span class="cm"># Chercher</span>
nombres = [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>, <span class="num">20</span>, <span class="num">10</span>]
<span class="fn">print</span>(nombres.index(<span class="num">20</span>))    <span class="cm"># 1 — première occurrence</span>
<span class="fn">print</span>(nombres.count(<span class="num">10</span>))    <span class="cm"># 2 — occurrences de 10</span>

<span class="cm"># Trier</span>
nombres = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>, <span class="num">1</span>, <span class="num">5</span>, <span class="num">9</span>]
nombres.sort()                 <span class="cm"># Trie EN PLACE, retourne None</span>
tri = <span class="fn">sorted</span>(nombres)         <span class="cm"># NOUVELLE liste triée</span>
nombres.sort(reverse=<span class="kw">True</span>)    <span class="cm"># Décroissant en place</span>

<span class="cm"># Inverser</span>
nombres.reverse()                  <span class="cm"># Inverse en place</span>
inverse = <span class="fn">list</span>(<span class="fn">reversed</span>(nombres))  <span class="cm"># Nouvelle liste inversée</span></code></pre>
        </div>
        <div class="highlight-box">
          <p><strong>sort() vs sorted() :</strong> <code>.sort()</code> modifie la liste en place et retourne <code>None</code>. <code>sorted()</code> retourne une nouvelle liste et laisse l'original intact. Ne jamais écrire <code>lst = lst.sort()</code> — <code>lst</code> deviendrait <code>None</code> !</p>
        </div>

        <h3>Copie de listes</h3>
        <p>Affecter une liste à une nouvelle variable ne crée pas de copie — les deux variables pointent vers le même objet en mémoire. Ce comportement surprend souvent les débutants. Python distingue deux types de copies : <strong>superficielle</strong> (shallow) et <strong>profonde</strong> (deep).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># ATTENTION : pas une copie !</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = a              <span class="cm"># b pointe vers le MÊME objet</span>
b.append(<span class="num">4</span>)
<span class="fn">print</span>(a)        <span class="cm"># [1, 2, 3, 4] — a aussi modifié !</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)   <span class="cm"># True — même objet en mémoire</span>

<span class="cm"># Copie superficielle — 3 façons équivalentes</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = a[:]           <span class="cm"># slicing — méthode classique</span>
c = a.copy()       <span class="cm"># méthode .copy()</span>
d = <span class="fn">list</span>(a)        <span class="cm"># constructeur list()</span>

b.append(<span class="num">4</span>)
<span class="fn">print</span>(a)        <span class="cm"># [1, 2, 3] — a non modifié ✓</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)   <span class="cm"># False — objets différents</span>

<span class="cm"># Limite : la shallow copy ne copie pas les sous-listes</span>
original = [[<span class="num">1</span>, <span class="num">2</span>], [<span class="num">3</span>, <span class="num">4</span>]]
shallow = original.copy()
shallow[<span class="num">0</span>].append(<span class="num">99</span>)   <span class="cm"># modifie la sous-liste partagée !</span>
<span class="fn">print</span>(original)  <span class="cm"># [[1, 2, 99], [3, 4]] — original affecté !</span>

<span class="cm"># Copie profonde — pour structures imbriquées</span>
<span class="kw">import</span> copy
matrice = [[<span class="num">1</span>, <span class="num">2</span>], [<span class="num">3</span>, <span class="num">4</span>]]
copie = copy.deepcopy(matrice)
copie[<span class="num">0</span>][<span class="num">0</span>] = <span class="num">99</span>
<span class="fn">print</span>(matrice[<span class="num">0</span>][<span class="num">0</span>])  <span class="cm"># 1 — original intact ✓</span></code></pre>
        </div>

        <h3>Tuples — les séquences immuables</h3>
        <p>Un <strong>tuple</strong> est une séquence ordonnée et <em>immuable</em> : une fois créé, on ne peut pas le modifier. On utilise des parenthèses <code>()</code> au lieu de crochets. Les tuples sont plus rapides que les listes et peuvent servir de clés de dictionnaire (contrairement aux listes). Ils conviennent aux données fixes : coordonnées, couleurs RGB, retours multiples de fonctions.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Créer un tuple</span>
point = (<span class="num">3</span>, <span class="num">5</span>)
couleur = (<span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>)
un_element = (<span class="num">42</span>,)   <span class="cm"># virgule obligatoire pour 1 élément !</span>
sans_parens = <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>  <span class="cm"># tuple implicite — les () sont optionnelles</span>

<span class="cm"># Accès identique aux listes</span>
<span class="fn">print</span>(point[<span class="num">0</span>])    <span class="cm"># 3</span>
<span class="fn">print</span>(point[-<span class="num">1</span>])   <span class="cm"># 5</span>

<span class="cm"># Modification impossible</span>
<span class="cm"># point[0] = 10  → TypeError !</span>

<span class="cm"># Unpacking (décomposition)</span>
x, y = point
<span class="fn">print</span>(<span class="str">f"x={x}, y={y}"</span>)  <span class="cm"># x=3, y=5</span>

<span class="cm"># Unpacking étendu avec *</span>
premier, *milieu, dernier = (<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>)
<span class="fn">print</span>(premier)   <span class="cm"># 1</span>
<span class="fn">print</span>(milieu)    <span class="cm"># [2, 3, 4]</span>
<span class="fn">print</span>(dernier)   <span class="cm"># 5</span>

<span class="cm"># Swap élégant grâce aux tuples</span>
a, b = <span class="num">10</span>, <span class="num">20</span>
a, b = b, a
<span class="fn">print</span>(a, b)  <span class="cm"># 20 10</span>

<span class="cm"># Retours multiples de fonctions (tuple implicite)</span>
<span class="kw">def</span> <span class="fn">min_max</span>(lst):
    <span class="kw">return</span> <span class="fn">min</span>(lst), <span class="fn">max</span>(lst)

mini, maxi = <span class="fn">min_max</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">7</span>, <span class="num">2</span>])
<span class="fn">print</span>(mini, maxi)  <span class="cm"># 1 7</span></code></pre>
        </div>

        <h3>Itération et fonctions utilitaires</h3>
        <p>Python fournit plusieurs fonctions intégrées pour itérer sur des listes de manière expressive : <code>enumerate()</code>, <code>zip()</code>, <code>map()</code>, <code>filter()</code>. Maîtriser ces outils est indispensable pour écrire du code pythonique.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>fruits = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>, <span class="str">"cerise"</span>]

<span class="cm"># enumerate() — index + valeur sans range(len(...))</span>
<span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits):
    <span class="fn">print</span>(<span class="str">f"{i}: {fruit}"</span>)
<span class="cm"># 0: pomme  /  1: banane  /  2: cerise</span>

<span class="fn">print</span>(<span class="fn">list</span>(<span class="fn">enumerate</span>(fruits, start=<span class="num">1</span>)))
<span class="cm"># [(1, 'pomme'), (2, 'banane'), (3, 'cerise')]</span>

<span class="cm"># zip() — plusieurs listes en parallèle</span>
noms = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Carol"</span>]
scores = [<span class="num">95</span>, <span class="num">87</span>, <span class="num">92</span>]

<span class="kw">for</span> nom, score <span class="kw">in</span> <span class="fn">zip</span>(noms, scores):
    <span class="fn">print</span>(<span class="str">f"{nom}: {score}/100"</span>)

<span class="cm"># Créer un dict depuis deux listes avec zip()</span>
dico = <span class="fn">dict</span>(<span class="fn">zip</span>(noms, scores))
<span class="cm"># {'Alice': 95, 'Bob': 87, 'Carol': 92}</span>

<span class="cm"># map() — appliquer une fonction à chaque élément</span>
nombres = [<span class="num">1</span>, <span class="num">4</span>, <span class="num">9</span>, <span class="num">16</span>]
racines = <span class="fn">list</span>(<span class="fn">map</span>(<span class="kw">lambda</span> x: x**<span class="num">0.5</span>, nombres))
<span class="cm"># [1.0, 2.0, 3.0, 4.0]</span>

<span class="cm"># filter() — filtrer les éléments</span>
nombres = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>]
pairs = <span class="fn">list</span>(<span class="fn">filter</span>(<span class="kw">lambda</span> x: x % <span class="num">2</span> == <span class="num">0</span>, nombres))
<span class="cm"># [2, 4, 6]</span>

<span class="cm"># any() et all() — tester une condition</span>
notes = [<span class="num">14</span>, <span class="num">17</span>, <span class="num">11</span>, <span class="num">8</span>, <span class="num">15</span>]
<span class="fn">print</span>(<span class="fn">any</span>(n &gt;= <span class="num">16</span> <span class="kw">for</span> n <span class="kw">in</span> notes))    <span class="cm"># True — au moins une >= 16</span>
<span class="fn">print</span>(<span class="fn">all</span>(n &gt;= <span class="num">10</span> <span class="kw">for</span> n <span class="kw">in</span> notes))    <span class="cm"># False — 8 < 10</span>
<span class="fn">print</span>(<span class="fn">sum</span>(notes), <span class="fn">max</span>(notes), <span class="fn">min</span>(notes))  <span class="cm"># 65  17  8</span></code></pre>
        </div>

        <h3>Tri avancé avec key</h3>
        <p>La fonction <code>sorted()</code> et <code>.sort()</code> acceptent un argument <code>key</code> : une fonction qui extrait la valeur de comparaison. C'est très puissant pour trier des objets complexes. L'algorithme utilisé est <strong>Timsort</strong>, stable et en O(n log n).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Trier par longueur de chaîne</span>
mots = [<span class="str">"banane"</span>, <span class="str">"pomme"</span>, <span class="str">"kiwi"</span>, <span class="str">"ananas"</span>]
<span class="fn">print</span>(<span class="fn">sorted</span>(mots, key=<span class="fn">len</span>))
<span class="cm"># ['kiwi', 'pomme', 'banane', 'ananas']</span>

<span class="cm"># Trier sans tenir compte de la casse</span>
noms = [<span class="str">"Alice"</span>, <span class="str">"bob"</span>, <span class="str">"Charlie"</span>, <span class="str">"dave"</span>]
<span class="fn">print</span>(<span class="fn">sorted</span>(noms, key=str.lower))
<span class="cm"># ['Alice', 'bob', 'Charlie', 'dave']</span>

<span class="cm"># Trier des dictionnaires par valeur</span>
etudiants = [
    {<span class="str">"nom"</span>: <span class="str">"Alice"</span>, <span class="str">"note"</span>: <span class="num">17</span>},
    {<span class="str">"nom"</span>: <span class="str">"Bob"</span>,   <span class="str">"note"</span>: <span class="num">13</span>},
    {<span class="str">"nom"</span>: <span class="str">"Carol"</span>, <span class="str">"note"</span>: <span class="num">15</span>},
]
classes = <span class="fn">sorted</span>(etudiants, key=<span class="kw">lambda</span> e: e[<span class="str">"note"</span>], reverse=<span class="kw">True</span>)
<span class="cm"># Alice(17), Carol(15), Bob(13)</span>

<span class="cm"># Tri multi-critères avec operator.itemgetter</span>
<span class="kw">from</span> operator <span class="kw">import</span> itemgetter

donnees = [(<span class="str">"Alice"</span>, <span class="num">30</span>), (<span class="str">"Bob"</span>, <span class="num">25</span>), (<span class="str">"Carol"</span>, <span class="num">30</span>), (<span class="str">"Dave"</span>, <span class="num">25</span>)]
<span class="fn">print</span>(<span class="fn">sorted</span>(donnees, key=<span class="fn">itemgetter</span>(<span class="num">1</span>, <span class="num">0</span>)))
<span class="cm"># [('Bob', 25), ('Dave', 25), ('Alice', 30), ('Carol', 30)]</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : Alias vs copie</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = a           <span class="cm"># Alias — PAS une copie !</span>
b[<span class="num">0</span>] = <span class="num">99</span>
<span class="fn">print</span>(a)  <span class="cm"># [99, 2, 3] — a aussi modifié</span>

<span class="cm"># PIÈGE 2 : Créer une matrice (liste de listes)</span>
<span class="cm"># ❌ Danger — toutes les lignes partagent la même liste !</span>
mauvais = [[<span class="num">0</span>] * <span class="num">3</span>] * <span class="num">3</span>
mauvais[<span class="num">0</span>][<span class="num">0</span>] = <span class="num">1</span>
<span class="fn">print</span>(mauvais)  <span class="cm"># [[1,0,0],[1,0,0],[1,0,0]] — toutes modifiées !</span>

<span class="cm"># ✓ Correct — compréhension de liste</span>
bonne = [[<span class="num">0</span>] * <span class="num">3</span> <span class="kw">for</span> _ <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>)]
bonne[<span class="num">0</span>][<span class="num">0</span>] = <span class="num">1</span>
<span class="fn">print</span>(bonne)  <span class="cm"># [[1,0,0],[0,0,0],[0,0,0]] ✓</span>

<span class="cm"># PIÈGE 3 : IndexError sur accès hors limites</span>
lst = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
<span class="cm"># lst[5]  → IndexError: list index out of range</span>
valeur = lst[<span class="num">5</span>] <span class="kw">if</span> <span class="fn">len</span>(lst) &gt; <span class="num">5</span> <span class="kw">else</span> <span class="kw">None</span>  <span class="cm"># sécurisé</span>

<span class="cm"># PIÈGE 4 : .sort() retourne None</span>
<span class="cm"># resultat = nombres.sort()  # resultat = None !</span>
resultat = <span class="fn">sorted</span>([<span class="num">3</span>, <span class="num">1</span>, <span class="num">2</span>])  <span class="cm"># ✓ retourne une nouvelle liste</span>

<span class="cm"># PIÈGE 5 : Modifier une liste pendant l'itération</span>
lst = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="cm"># ❌ Ne pas faire ça — comportement imprévisible !</span>
<span class="cm"># for x in lst:</span>
<span class="cm">#     if x % 2 == 0: lst.remove(x)</span>

<span class="cm"># ✓ Itérer sur une copie</span>
<span class="kw">for</span> x <span class="kw">in</span> lst[:]:
    <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>:
        lst.remove(x)
<span class="fn">print</span>(lst)  <span class="cm"># [1, 3, 5]</span>

<span class="cm"># ✓ Ou utiliser une compréhension (plus efficace)</span>
lst = [x <span class="kw">for</span> x <span class="kw">in</span> lst <span class="kw">if</span> x % <span class="num">2</span> != <span class="num">0</span>]</code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Compréhensions :</strong> préférez <code>[x**2 for x in range(10)]</code> à une boucle <code>for</code> avec <code>.append()</code>. Plus rapide et plus lisible.</li>
          <li><strong>sorted() vs .sort() :</strong> <code>sorted()</code> crée une nouvelle liste, <code>.sort()</code> trie en place et retourne <code>None</code>. Ne jamais écrire <code>lst = lst.sort()</code>.</li>
          <li><strong>enumerate() :</strong> n'utilisez jamais <code>range(len(liste))</code> pour obtenir l'index. Utilisez <code>enumerate()</code> — c'est plus pythonique.</li>
          <li><strong>zip() :</strong> pour itérer sur deux listes en parallèle, <code>zip()</code> est plus élégant qu'un index manuel.</li>
          <li><strong>Tuples pour les données fixes :</strong> utilisez un tuple quand les données ne doivent pas changer (coordonnées, couleurs RGB, clés de dictionnaire).</li>
          <li><strong>Copie explicite :</strong> quand vous passez une liste à une fonction, faites une copie si vous ne voulez pas que l'original soit modifié.</li>
          <li><strong>any() / all() :</strong> préférez <code>any(c for c in lst)</code> à une boucle manuelle pour tester une condition.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Performance :</strong> les listes Python sont optimisées pour l'accès par index en O(1) et l'ajout en fin de liste en O(1) amorti. Insérer ou supprimer au milieu est O(n). Pour des insertions/suppressions fréquentes en tête de liste, préférez <code>collections.deque</code>.</p>
        </div>
      </div>
    </section>
    """

# ============================================================
# Helper function to replace contenu section
# ============================================================

def replace_contenu(content, new_contenu_section):
    """Replace the contenu section in an article's HTML content."""
    start_tag = '<section class="content-section" id="contenu">'
    quiz_tag = '<section class="content-section" id="quiz">'

    start_idx = content.find(start_tag)
    if start_idx == -1:
        print("ERROR: Could not find contenu section!")
        return content

    end_idx = content.find(quiz_tag)
    if end_idx == -1:
        print("WARNING: Could not find quiz section, replacing to end")
        return content[:start_idx] + new_contenu_section

    return content[:start_idx] + new_contenu_section + '\n    ' + content[end_idx:]


# Apply enrichments
page = data['pages']['structures/listes']
old_len = len(page['content'])
page['content'] = replace_contenu(page['content'], LISTES_CONTENU)
new_len = len(page['content'])
print(f"structures/listes: {old_len} -> {new_len} chars")

# ============================================================
# Save
# ============================================================
with open(JSON_PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved successfully!")

# Verify
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    check = json.load(f)
print(f"Verification — structures/listes: {len(check['pages']['structures/listes']['content'])} chars")
