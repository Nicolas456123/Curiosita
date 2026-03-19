#!/usr/bin/env python3
"""Enrich remaining Python discipline articles in python.json"""
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
        print("WARNING: No quiz section found")
        return content[:start_idx] + new_contenu_section
    return content[:start_idx] + new_contenu_section + '\n    ' + content[end_idx:]

# ============================================================
# bases/variables-types
# ============================================================
VARIABLES_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Variables, types fondamentaux, conversions et portée</p></div></div>
      <div class="course-content">
        <h3>Créer une variable</h3>
        <p>En Python, une <strong>variable</strong> est une étiquette associée à un objet en mémoire. Il n'y a pas de déclaration explicite de type : Python infère le type à partir de la valeur. L'opérateur d'affectation <code>=</code> lie un nom à un objet. Si l'objet n'est plus référencé, le ramasse-miettes (garbage collector) le libère automatiquement.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Affectation simple</span>
age = <span class="num">25</span>
prenom = <span class="str">"Alice"</span>
taille = <span class="num">1.72</span>
est_etudiant = <span class="kw">True</span>

<span class="cm"># Le type est inféré automatiquement</span>
<span class="fn">print</span>(<span class="fn">type</span>(age))           <span class="cm"># &lt;class 'int'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(prenom))        <span class="cm"># &lt;class 'str'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(taille))        <span class="cm"># &lt;class 'float'&gt;</span>
<span class="fn">print</span>(<span class="fn">type</span>(est_etudiant))  <span class="cm"># &lt;class 'bool'&gt;</span>

<span class="cm"># Réaffectation — on peut changer de type</span>
x = <span class="num">42</span>
x = <span class="str">"maintenant une chaîne"</span>  <span class="cm"># parfaitement valide</span>
x = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]               <span class="cm"># et encore une liste</span>

<span class="cm"># Vérification d'identité vs égalité</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
<span class="fn">print</span>(a == b)   <span class="cm"># True — même valeur</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)   <span class="cm"># False — objets différents en mémoire</span>
<span class="fn">print</span>(<span class="fn">id</span>(a), <span class="fn">id</span>(b))  <span class="cm"># adresses mémoire différentes</span></code></pre>
        </div>

        <h3>Les types fondamentaux</h3>
        <p>Python propose plusieurs types de base (<em>built-in types</em>). Chaque type a ses propres opérations et méthodes. Les types numériques (<code>int</code>, <code>float</code>, <code>complex</code>), les chaînes (<code>str</code>), les booléens (<code>bool</code>) et la valeur nulle (<code>None</code>) constituent les briques fondamentales.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># int — entier de précision arbitraire</span>
petit = <span class="num">42</span>
grand = <span class="num">10</span> ** <span class="num">100</span>   <span class="cm"># googol — pas de limite !</span>
negatif = -<span class="num">17</span>
binaire = <span class="num">0b1010</span>    <span class="cm"># 10 en binaire</span>
hexa = <span class="num">0xFF</span>         <span class="cm"># 255 en hexadécimal</span>
octal = <span class="num">0o77</span>        <span class="cm"># 63 en octal</span>
lisible = <span class="num">1_000_000</span> <span class="cm"># underscores pour la lisibilité</span>

<span class="cm"># float — virgule flottante (64 bits, IEEE 754)</span>
pi = <span class="num">3.14159</span>
notation_sci = <span class="num">1.5e-3</span>   <span class="cm"># 0.0015</span>
<span class="fn">print</span>(<span class="num">0.1</span> + <span class="num">0.2</span>)          <span class="cm"># 0.30000000000000004 — imprécision IEEE 754 !</span>

<span class="cm"># Pour les calculs financiers, utiliser decimal</span>
<span class="kw">from</span> decimal <span class="kw">import</span> Decimal
<span class="fn">print</span>(Decimal(<span class="str">"0.1"</span>) + Decimal(<span class="str">"0.2"</span>))  <span class="cm"># 0.3 exactement</span>

<span class="cm"># complex — nombres complexes</span>
z = <span class="num">3</span> + <span class="num">4</span>j
<span class="fn">print</span>(z.real, z.imag)    <span class="cm"># 3.0  4.0</span>
<span class="fn">print</span>(<span class="fn">abs</span>(z))            <span class="cm"># 5.0 — module</span>

<span class="cm"># bool — sous-classe de int</span>
<span class="fn">print</span>(<span class="kw">True</span> + <span class="kw">True</span>)   <span class="cm"># 2</span>
<span class="fn">print</span>(<span class="kw">True</span> * <span class="num">5</span>)     <span class="cm"># 5</span>
<span class="fn">print</span>(<span class="fn">int</span>(<span class="kw">False</span>))    <span class="cm"># 0</span>

<span class="cm"># str — chaîne de caractères Unicode</span>
simple = <span class="str">'bonjour'</span>
double = <span class="str">"monde"</span>
triple = <span class="str">&#39;&#39;&#39;Texte<br>sur plusieurs<br>lignes&#39;&#39;&#39;</span>
raw = <span class="str">r"C:\\chemin\\fichier"</span>  <span class="cm"># pas d'échappement</span>
fstring = <span class="str">f"Bonjour {prenom}, tu as {age} ans"</span></code></pre>
        </div>

        <h3>Les chaînes de caractères en détail</h3>
        <p>Les chaînes Python sont des <em>séquences immuables</em> de caractères Unicode. Elles supportent l'indexation, le slicing, et disposent de nombreuses méthodes intégrées. Les <strong>f-strings</strong> (Python 3.6+) sont la méthode moderne et recommandée pour le formatage.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>texte = <span class="str">"Bonjour le monde"</span>

<span class="cm"># Opérations de base</span>
<span class="fn">print</span>(<span class="fn">len</span>(texte))         <span class="cm"># 16</span>
<span class="fn">print</span>(texte[<span class="num">0</span>])           <span class="cm"># 'B'</span>
<span class="fn">print</span>(texte[-<span class="num">5</span>:])          <span class="cm"># 'monde'</span>
<span class="fn">print</span>(texte.upper())       <span class="cm"># 'BONJOUR LE MONDE'</span>
<span class="fn">print</span>(texte.lower())       <span class="cm"># 'bonjour le monde'</span>
<span class="fn">print</span>(texte.split())       <span class="cm"># ['Bonjour', 'le', 'monde']</span>
<span class="fn">print</span>(texte.replace(<span class="str">"monde"</span>, <span class="str">"Python"</span>))  <span class="cm"># 'Bonjour le Python'</span>
<span class="fn">print</span>(texte.startswith(<span class="str">"Bon"</span>))          <span class="cm"># True</span>
<span class="fn">print</span>(texte.find(<span class="str">"le"</span>))                  <span class="cm"># 8</span>
<span class="fn">print</span>(texte.strip())                     <span class="cm"># supprime espaces aux bords</span>
<span class="fn">print</span>(<span class="str">", "</span>.join([<span class="str">"a"</span>, <span class="str">"b"</span>, <span class="str">"c"</span>]))        <span class="cm"># 'a, b, c'</span>

<span class="cm"># F-strings — formatage moderne (Python 3.6+)</span>
nom = <span class="str">"Alice"</span>
score = <span class="num">95.678</span>
<span class="fn">print</span>(<span class="str">f"Score de {nom}: {score:.2f}%"</span>)   <span class="cm"># Score de Alice: 95.68%</span>
<span class="fn">print</span>(<span class="str">f"{<span class="num">42</span>:08b}"</span>)                       <span class="cm"># 00101010 — binaire sur 8 bits</span>
<span class="fn">print</span>(<span class="str">f"{<span class="num">1234567</span>:,}"</span>)                    <span class="cm"># 1,234,567 — séparateur milliers</span>
<span class="fn">print</span>(<span class="str">f"{'centré':^20}"</span>)                  <span class="cm"># centrage sur 20 chars</span>

<span class="cm"># Méthode format (ancienne)</span>
<span class="fn">print</span>(<span class="str">"{} a {} ans"</span>.<span class="fn">format</span>(<span class="str">"Bob"</span>, <span class="num">30</span>))   <span class="cm"># Bob a 30 ans</span></code></pre>
        </div>

        <h3>Conversions de types</h3>
        <p>Python est un langage à <strong>typage dynamique</strong> et <strong>typage fort</strong> : les types sont inférés automatiquement mais il n'y a pas de conversion implicite (contrairement à JavaScript). Les conversions doivent être explicites. Certaines conversions peuvent échouer et lever une exception.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Conversions numériques</span>
<span class="fn">print</span>(<span class="fn">int</span>(<span class="str">"42"</span>))         <span class="cm"># 42</span>
<span class="fn">print</span>(<span class="fn">int</span>(<span class="num">3.9</span>))          <span class="cm"># 3 — tronqué (pas arrondi !)</span>
<span class="fn">print</span>(<span class="fn">float</span>(<span class="str">"3.14"</span>))     <span class="cm"># 3.14</span>
<span class="fn">print</span>(<span class="fn">float</span>(<span class="num">5</span>))           <span class="cm"># 5.0</span>
<span class="fn">print</span>(<span class="fn">str</span>(<span class="num">42</span>))            <span class="cm"># "42"</span>
<span class="fn">print</span>(<span class="fn">bool</span>(<span class="num">0</span>))            <span class="cm"># False</span>
<span class="fn">print</span>(<span class="fn">bool</span>(<span class="str">""</span>))           <span class="cm"># False</span>
<span class="fn">print</span>(<span class="fn">bool</span>([]))           <span class="cm"># False</span>

<span class="cm"># Conversions qui peuvent échouer</span>
<span class="kw">try</span>:
    n = <span class="fn">int</span>(<span class="str">"abc"</span>)     <span class="cm"># ValueError !</span>
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Erreur : {e}"</span>)

<span class="cm"># int() avec une base</span>
<span class="fn">print</span>(<span class="fn">int</span>(<span class="str">"FF"</span>, <span class="num">16</span>))     <span class="cm"># 255 — hexadécimal</span>
<span class="fn">print</span>(<span class="fn">int</span>(<span class="str">"1010"</span>, <span class="num">2</span>))   <span class="cm"># 10  — binaire</span>

<span class="cm"># Conversion vers et depuis les collections</span>
<span class="fn">print</span>(<span class="fn">list</span>(<span class="str">"abc"</span>))       <span class="cm"># ['a', 'b', 'c']</span>
<span class="fn">print</span>(<span class="fn">tuple</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]))  <span class="cm"># (1, 2, 3)</span>
<span class="fn">print</span>(<span class="fn">set</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">2</span>, <span class="num">3</span>]))  <span class="cm"># {1, 2, 3}</span></code></pre>
        </div>

        <h3>Conventions de nommage</h3>
        <p>Python suit la convention <strong>PEP 8</strong> pour le nommage. Ces conventions sont largement adoptées dans la communauté Python et rendent le code immédiatement lisible par tous les développeurs Python.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># snake_case — variables et fonctions</span>
mon_age = <span class="num">25</span>
nombre_de_tentatives = <span class="num">3</span>
<span class="kw">def</span> <span class="fn">calculer_moyenne</span>(notes): ...

<span class="cm"># SCREAMING_SNAKE_CASE — constantes</span>
PI = <span class="num">3.14159</span>
MAX_CONNEXIONS = <span class="num">100</span>
CHEMIN_CONFIG = <span class="str">"/etc/app/config.json"</span>

<span class="cm"># PascalCase — classes</span>
<span class="kw">class</span> <span class="fn">CompteBancaire</span>: ...
<span class="kw">class</span> <span class="fn">GestionnaireErreurs</span>: ...

<span class="cm"># _prefixe — convention "privé"</span>
_variable_interne = <span class="num">42</span>

<span class="cm"># __dunder__ — méthodes spéciales</span>
<span class="kw">def</span> <span class="fn">__init__</span>(self): ...

<span class="cm"># Noms à éviter</span>
<span class="cm"># l (L minuscule), O (o majuscule), I (i majuscule)</span>
<span class="cm"># — ressemblent trop à 1 et 0</span>

<span class="cm"># Bons noms vs mauvais noms</span>
<span class="cm"># ❌ x, y, z, tmp, data, d, n</span>
<span class="cm"># ✅ vitesse_km_h, nombre_articles, utilisateur_actif</span></code></pre>
        </div>

        <h3>Affectation multiple et échange de variables</h3>
        <p>Python permet l'affectation simultanée de plusieurs variables, ce qui permet notamment un échange de valeurs en une seule ligne sans variable temporaire. Cette syntaxe exploite la création implicite de tuples.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Affectation multiple sur une ligne</span>
x = y = z = <span class="num">0</span>         <span class="cm"># x, y, z tous à 0</span>
a, b = <span class="num">10</span>, <span class="num">20</span>          <span class="cm"># décomposition de tuple</span>
r, g, b = <span class="num">255</span>, <span class="num">128</span>, <span class="num">0</span>  <span class="cm"># couleur RGB</span>

<span class="cm"># Échange de variables — pas de variable temporaire !</span>
a, b = <span class="num">10</span>, <span class="num">20</span>
a, b = b, a   <span class="cm"># Python crée un tuple (b, a) puis l'affecte</span>
<span class="fn">print</span>(a, b)   <span class="cm"># 20 10</span>

<span class="cm"># Unpacking étendu avec *</span>
premier, *reste = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="fn">print</span>(premier)  <span class="cm"># 1</span>
<span class="fn">print</span>(reste)    <span class="cm"># [2, 3, 4, 5]</span>

*debut, dernier = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="fn">print</span>(debut)    <span class="cm"># [1, 2, 3, 4]</span>
<span class="fn">print</span>(dernier)  <span class="cm"># 5</span>

<span class="cm"># Ignorer des valeurs avec _</span>
_, important, _ = (<span class="num">1</span>, <span class="num">42</span>, <span class="num">3</span>)
<span class="fn">print</span>(important)  <span class="cm"># 42</span>

<span class="cm"># Affectation augmentée</span>
compteur = <span class="num">0</span>
compteur += <span class="num">1</span>   <span class="cm"># équivalent à compteur = compteur + 1</span>
compteur -= <span class="num">1</span>
compteur *= <span class="num">2</span>
compteur //= <span class="num">3</span>  <span class="cm"># division entière</span>
compteur **= <span class="num">2</span>  <span class="cm"># puissance</span></code></pre>
        </div>

        <h3>Portée des variables (scope)</h3>
        <p>Python utilise la règle <strong>LEGB</strong> pour résoudre les noms de variables : <em>Local</em> → <em>Enclosing</em> → <em>Global</em> → <em>Built-in</em>. Comprendre la portée évite de nombreux bugs subtils.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>x = <span class="str">"global"</span>   <span class="cm"># portée globale</span>

<span class="kw">def</span> <span class="fn">fonction</span>():
    x = <span class="str">"local"</span>    <span class="cm"># portée locale — ne modifie pas le global</span>
    <span class="fn">print</span>(x)       <span class="cm"># "local"</span>

<span class="fn">fonction</span>()
<span class="fn">print</span>(x)          <span class="cm"># "global" — inchangé</span>

<span class="cm"># global — modifier une variable globale dans une fonction</span>
compteur = <span class="num">0</span>
<span class="kw">def</span> <span class="fn">incrementer</span>():
    <span class="kw">global</span> compteur
    compteur += <span class="num">1</span>

<span class="fn">incrementer</span>()
<span class="fn">print</span>(compteur)  <span class="cm"># 1</span>

<span class="cm"># nonlocal — modifier une variable de la portée englobante</span>
<span class="kw">def</span> <span class="fn">externe</span>():
    n = <span class="num">0</span>
    <span class="kw">def</span> <span class="fn">interne</span>():
        <span class="kw">nonlocal</span> n
        n += <span class="num">1</span>
    <span class="fn">interne</span>()
    <span class="fn">print</span>(n)  <span class="cm"># 1</span>

<span class="cm"># Conseil : éviter global/nonlocal — préférer retourner des valeurs</span>
<span class="kw">def</span> <span class="fn">incrementer_propre</span>(n):
    <span class="kw">return</span> n + <span class="num">1</span>  <span class="cm"># plus clair et testable</span></code></pre>
        </div>

        <h3>None — l'absence de valeur</h3>
        <p><code>None</code> est la valeur spéciale qui représente l'absence de valeur ou une valeur indéfinie. C'est un objet singleton (une seule instance en mémoire). Les fonctions qui ne retournent rien retournent implicitement <code>None</code>.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># None est un singleton — utiliser is, pas ==</span>
valeur = <span class="kw">None</span>
<span class="fn">print</span>(valeur <span class="kw">is</span> <span class="kw">None</span>)   <span class="cm"># True — recommandé</span>
<span class="fn">print</span>(valeur == <span class="kw">None</span>)  <span class="cm"># True — fonctionne mais déconseillé</span>

<span class="cm"># Les fonctions retournent None implicitement</span>
<span class="kw">def</span> <span class="fn">afficher</span>(texte):
    <span class="fn">print</span>(texte)
    <span class="cm"># pas de return → retourne None</span>

resultat = <span class="fn">afficher</span>(<span class="str">"hello"</span>)
<span class="fn">print</span>(resultat)  <span class="cm"># None</span>

<span class="cm"># None comme valeur par défaut d'argument</span>
<span class="kw">def</span> <span class="fn">creer_liste</span>(elements=<span class="kw">None</span>):
    <span class="kw">if</span> elements <span class="kw">is</span> <span class="kw">None</span>:
        elements = []  <span class="cm"># créer un nouveau à chaque appel</span>
    elements.append(<span class="num">1</span>)
    <span class="kw">return</span> elements

<span class="cm"># ❌ Danger : argument mutable par défaut</span>
<span class="kw">def</span> <span class="fn">mauvais</span>(lst=[]):
    lst.append(<span class="num">1</span>)
    <span class="kw">return</span> lst

<span class="fn">print</span>(<span class="fn">mauvais</span>())  <span class="cm"># [1]</span>
<span class="fn">print</span>(<span class="fn">mauvais</span>())  <span class="cm"># [1, 1] — même liste réutilisée !</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : Imprécision des floats</span>
<span class="fn">print</span>(<span class="num">0.1</span> + <span class="num">0.2</span> == <span class="num">0.3</span>)   <span class="cm"># False !</span>
<span class="fn">print</span>(<span class="fn">abs</span>(<span class="num">0.1</span> + <span class="num">0.2</span> - <span class="num">0.3</span>) &lt; <span class="num">1e-9</span>)  <span class="cm"># True — comparer avec tolérance</span>

<span class="cm"># PIÈGE 2 : Division entière vs flottante</span>
<span class="fn">print</span>(<span class="num">7</span> / <span class="num">2</span>)    <span class="cm"># 3.5  — division réelle</span>
<span class="fn">print</span>(<span class="num">7</span> // <span class="num">2</span>)   <span class="cm"># 3    — division entière (floor)</span>
<span class="fn">print</span>(-<span class="num">7</span> // <span class="num">2</span>)  <span class="cm"># -4   — floor vers le bas !</span>

<span class="cm"># PIÈGE 3 : Chaînes immuables</span>
s = <span class="str">"bonjour"</span>
<span class="cm"># s[0] = 'B'  → TypeError !</span>
s = <span class="str">"B"</span> + s[<span class="num">1</span>:]  <span class="cm"># créer une nouvelle chaîne</span>

<span class="cm"># PIÈGE 4 : bool est sous-classe de int</span>
<span class="fn">print</span>(<span class="fn">isinstance</span>(<span class="kw">True</span>, <span class="fn">int</span>))  <span class="cm"># True</span>
<span class="fn">print</span>(<span class="kw">True</span> == <span class="num">1</span>)             <span class="cm"># True</span>
<span class="fn">print</span>(<span class="kw">False</span> == <span class="num">0</span>)            <span class="cm"># True</span>

<span class="cm"># PIÈGE 5 : is vs ==</span>
a = <span class="num">1000</span>
b = <span class="num">1000</span>
<span class="fn">print</span>(a == b)   <span class="cm"># True  — même valeur</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)   <span class="cm"># False en général (les petits entiers -5..256 sont mis en cache)</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Noms explicites :</strong> utilisez des noms de variables qui décrivent clairement leur contenu. <code>nombre_articles</code> vaut mieux que <code>n</code>.</li>
          <li><strong>PEP 8 :</strong> suivez les conventions de nommage — snake_case pour les variables, PascalCase pour les classes, SCREAMING_SNAKE pour les constantes.</li>
          <li><strong>F-strings :</strong> utilisez les f-strings pour le formatage — elles sont plus lisibles et plus rapides que <code>.format()</code> ou <code>%</code>.</li>
          <li><strong>Comparaison avec None :</strong> utilisez toujours <code>is None</code> et non <code>== None</code>.</li>
          <li><strong>Éviter global :</strong> les variables globales rendent le code difficile à tester. Préférez passer les valeurs en paramètre et les retourner.</li>
          <li><strong>Arguments mutables par défaut :</strong> n'utilisez jamais <code>def f(lst=[])</code>. Utilisez <code>def f(lst=None)</code> avec <code>if lst is None: lst = []</code>.</li>
          <li><strong>isinstance() :</strong> pour vérifier le type, préférez <code>isinstance(x, int)</code> à <code>type(x) == int</code> — <code>isinstance</code> gère l'héritage.</li>
        </ul>
      </div>
    </section>
    """

# ============================================================
# bases/conditions
# ============================================================
CONDITIONS_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>if, elif, else, valeurs truthy/falsy, match/case et bonnes pratiques</p></div></div>
      <div class="course-content">
        <h3>La structure if</h3>
        <p>Le mot-clé <code>if</code> est la structure conditionnelle fondamentale de Python. Si la condition est vraie (ou "truthy"), le bloc indenté est exécuté. Python utilise l'<strong>indentation</strong> (4 espaces par convention) pour délimiter les blocs, sans accolades.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>age = <span class="num">18</span>

<span class="kw">if</span> age &gt;= <span class="num">18</span>:
    <span class="fn">print</span>(<span class="str">"Majeur"</span>)
    <span class="fn">print</span>(<span class="str">"Accès autorisé"</span>)

<span class="cm"># La condition peut être n'importe quelle expression</span>
nom = <span class="str">"Alice"</span>
<span class="kw">if</span> nom:                     <span class="cm"># chaîne non-vide = truthy</span>
    <span class="fn">print</span>(<span class="str">f"Bonjour {nom}"</span>)

<span class="kw">if</span> <span class="fn">len</span>(nom) &gt; <span class="num">3</span>:
    <span class="fn">print</span>(<span class="str">"Nom assez long"</span>)

<span class="cm"># Conditions composées</span>
temperature = <span class="num">22</span>
<span class="kw">if</span> <span class="num">18</span> &lt;= temperature &lt;= <span class="num">25</span>:  <span class="cm"># chaînage de comparaisons</span>
    <span class="fn">print</span>(<span class="str">"Température idéale"</span>)</code></pre>
        </div>

        <h3>if / else</h3>
        <p>Le bloc <code>else</code> est exécuté quand la condition du <code>if</code> est fausse. C'est l'alternative binaire : soit la condition est vraie, soit elle est fausse.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>nombre = <span class="num">7</span>

<span class="kw">if</span> nombre % <span class="num">2</span> == <span class="num">0</span>:
    <span class="fn">print</span>(<span class="str">f"{nombre} est pair"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"{nombre} est impair"</span>)

<span class="cm"># Expression conditionnelle (ternaire)</span>
parite = <span class="str">"pair"</span> <span class="kw">if</span> nombre % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="str">"impair"</span>
<span class="fn">print</span>(<span class="str">f"{nombre} est {parite}"</span>)

<span class="cm"># Ternaire pour affectation conditionnelle</span>
score = <span class="num">75</span>
mention = <span class="str">"reçu"</span> <span class="kw">if</span> score &gt;= <span class="num">50</span> <span class="kw">else</span> <span class="str">"recalé"</span>

<span class="cm"># Ternaire imbriqué (à utiliser avec parcimonie)</span>
grade = <span class="str">"A"</span> <span class="kw">if</span> score &gt;= <span class="num">90</span> <span class="kw">else</span> (<span class="str">"B"</span> <span class="kw">if</span> score &gt;= <span class="num">75</span> <span class="kw">else</span> <span class="str">"C"</span>)</code></pre>
        </div>

        <h3>if / elif / else</h3>
        <p>Pour tester plusieurs conditions mutuellement exclusives, utilisez <code>elif</code> (contraction de "else if"). Python évalue les conditions de haut en bas et exécute le premier bloc dont la condition est vraie. Les conditions restantes ne sont pas évaluées.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>score = <span class="num">82</span>

<span class="kw">if</span> score &gt;= <span class="num">90</span>:
    mention = <span class="str">"Très bien"</span>
<span class="kw">elif</span> score &gt;= <span class="num">80</span>:
    mention = <span class="str">"Bien"</span>
<span class="kw">elif</span> score &gt;= <span class="num">70</span>:
    mention = <span class="str">"Assez bien"</span>
<span class="kw">elif</span> score &gt;= <span class="num">50</span>:
    mention = <span class="str">"Passable"</span>
<span class="kw">else</span>:
    mention = <span class="str">"Insuffisant"</span>

<span class="fn">print</span>(mention)  <span class="cm"># Bien</span>

<span class="cm"># Classification de caractères</span>
<span class="kw">def</span> <span class="fn">classifier</span>(car):
    <span class="kw">if</span> car.isdigit():
        <span class="kw">return</span> <span class="str">"chiffre"</span>
    <span class="kw">elif</span> car.isalpha():
        <span class="kw">return</span> <span class="str">"lettre"</span>
    <span class="kw">elif</span> car.isspace():
        <span class="kw">return</span> <span class="str">"espace"</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="str">"symbole"</span>

<span class="fn">print</span>(<span class="fn">classifier</span>(<span class="str">"A"</span>))  <span class="cm"># lettre</span>
<span class="fn">print</span>(<span class="fn">classifier</span>(<span class="str">"3"</span>))  <span class="cm"># chiffre</span>
<span class="fn">print</span>(<span class="fn">classifier</span>(<span class="str">"@"</span>))  <span class="cm"># symbole</span></code></pre>
        </div>

        <h3>Conditions imbriquées et combinées</h3>
        <p>Les opérateurs <code>and</code>, <code>or</code> et <code>not</code> permettent de combiner plusieurs conditions. Python évalue les conditions en <strong>court-circuit</strong> : avec <code>and</code>, si la première condition est fausse, la seconde n'est pas évaluée. Avec <code>or</code>, si la première est vraie, la seconde est ignorée.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>age = <span class="num">20</span>
possession_billet = <span class="kw">True</span>
est_VIP = <span class="kw">False</span>

<span class="cm"># and — toutes les conditions doivent être vraies</span>
<span class="kw">if</span> age &gt;= <span class="num">18</span> <span class="kw">and</span> possession_billet:
    <span class="fn">print</span>(<span class="str">"Accès autorisé"</span>)

<span class="cm"># or — au moins une condition doit être vraie</span>
<span class="kw">if</span> est_VIP <span class="kw">or</span> (age &gt;= <span class="num">18</span> <span class="kw">and</span> possession_billet):
    <span class="fn">print</span>(<span class="str">"Bienvenue !"</span>)

<span class="cm"># not — inverse la condition</span>
<span class="kw">if</span> <span class="kw">not</span> est_VIP:
    <span class="fn">print</span>(<span class="str">"Pas VIP"</span>)

<span class="cm"># Court-circuit — la seconde expression peut avoir des effets de bord</span>
<span class="kw">def</span> <span class="fn">est_valide</span>(x):
    <span class="fn">print</span>(<span class="str">f"Évaluation de {x}"</span>)
    <span class="kw">return</span> x &gt; <span class="num">0</span>

<span class="cm"># Si la première condition est False avec and, la seconde n'est pas appelée</span>
<span class="kw">if</span> <span class="kw">False</span> <span class="kw">and</span> <span class="fn">est_valide</span>(<span class="num">5</span>):  <span class="cm"># est_valide(5) jamais appelée</span>
    <span class="kw">pass</span>

<span class="cm"># Utilisation du court-circuit pour les valeurs par défaut</span>
nom = <span class="kw">None</span>
affichage = nom <span class="kw">or</span> <span class="str">"Inconnu"</span>  <span class="cm"># "Inconnu" si nom est falsy</span>
<span class="fn">print</span>(affichage)  <span class="cm"># Inconnu</span></code></pre>
        </div>

        <h3>Valeurs truthy et falsy</h3>
        <p>En Python, tout objet peut être évalué dans un contexte booléen. Les valeurs <strong>falsy</strong> sont évaluées à <code>False</code> — toutes les autres sont <strong>truthy</strong>. Connaître ces valeurs permet d'écrire des conditions plus concises.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Valeurs FALSY (évaluées à False dans un if)</span>
falsy_values = [
    <span class="kw">False</span>,      <span class="cm"># False lui-même</span>
    <span class="num">0</span>,          <span class="cm"># entier zéro</span>
    <span class="num">0.0</span>,        <span class="cm"># float zéro</span>
    <span class="num">0j</span>,         <span class="cm"># complexe zéro</span>
    <span class="str">""</span>,         <span class="cm"># chaîne vide</span>
    [],         <span class="cm"># liste vide</span>
    {},         <span class="cm"># dict vide</span>
    (),         <span class="cm"># tuple vide</span>
    <span class="fn">set</span>(),      <span class="cm"># set vide</span>
    <span class="kw">None</span>,       <span class="cm"># None</span>
]

<span class="cm"># Toutes les autres valeurs sont TRUTHY</span>
<span class="kw">if</span> <span class="num">42</span>: <span class="fn">print</span>(<span class="str">"truthy"</span>)      <span class="cm"># oui</span>
<span class="kw">if</span> <span class="str">"bonjour"</span>: <span class="fn">print</span>(<span class="str">"truthy"</span>)  <span class="cm"># oui</span>
<span class="kw">if</span> [<span class="num">0</span>]: <span class="fn">print</span>(<span class="str">"truthy"</span>)        <span class="cm"># oui — liste non-vide</span>

<span class="cm"># Utilisation pratique</span>
liste = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
<span class="kw">if</span> liste:                    <span class="cm"># équivalent à if len(liste) > 0</span>
    <span class="fn">print</span>(<span class="str">"La liste n'est pas vide"</span>)

utilisateur = <span class="kw">None</span>
<span class="kw">if</span> <span class="kw">not</span> utilisateur:          <span class="cm"># None est falsy</span>
    <span class="fn">print</span>(<span class="str">"Aucun utilisateur connecté"</span>)

<span class="cm"># Patron : valeur par défaut avec or</span>
config = {}
timeout = config.get(<span class="str">"timeout"</span>) <span class="kw">or</span> <span class="num">30</span>  <span class="cm"># 30 si None ou 0</span></code></pre>
        </div>
        <div class="highlight-box">
          <p><strong>Attention avec or :</strong> le patron <code>valeur = x or defaut</code> utilise la valeur par défaut si <code>x</code> est <em>n'importe quelle valeur falsy</em>, y compris <code>0</code> ou <code>""</code>. Si vous voulez seulement gérer <code>None</code>, utilisez <code>valeur = x if x is not None else defaut</code>.</p>
        </div>

        <h3>Le match/case (Python 3.10+)</h3>
        <p>Introduit en Python 3.10, le <strong>pattern matching</strong> avec <code>match/case</code> est plus puissant qu'un simple switch. Il permet de décomposer des structures complexes (tuples, listes, dictionnaires, objets) et d'extraire des valeurs en une seule opération.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># match/case basique — comme un switch</span>
commande = <span class="str">"quitter"</span>

<span class="kw">match</span> commande:
    <span class="kw">case</span> <span class="str">"aide"</span>:
        <span class="fn">print</span>(<span class="str">"Afficher l'aide"</span>)
    <span class="kw">case</span> <span class="str">"quitter"</span> | <span class="str">"exit"</span> | <span class="str">"q"</span>:  <span class="cm"># plusieurs valeurs avec |</span>
        <span class="fn">print</span>(<span class="str">"Au revoir !"</span>)
    <span class="kw">case</span> _:                          <span class="cm"># case par défaut (wildcard)</span>
        <span class="fn">print</span>(<span class="str">f"Commande inconnue : {commande}"</span>)

<span class="cm"># Pattern matching sur des types et structures</span>
point = (<span class="num">1</span>, <span class="num">2</span>)

<span class="kw">match</span> point:
    <span class="kw">case</span> (<span class="num">0</span>, <span class="num">0</span>):
        <span class="fn">print</span>(<span class="str">"Origine"</span>)
    <span class="kw">case</span> (<span class="num">0</span>, y):        <span class="cm"># extraire y</span>
        <span class="fn">print</span>(<span class="str">f"Sur l'axe Y : y={y}"</span>)
    <span class="kw">case</span> (x, <span class="num">0</span>):        <span class="cm"># extraire x</span>
        <span class="fn">print</span>(<span class="str">f"Sur l'axe X : x={x}"</span>)
    <span class="kw">case</span> (x, y):        <span class="cm"># extraire les deux</span>
        <span class="fn">print</span>(<span class="str">f"Point ({x}, {y})"</span>)

<span class="cm"># Pattern matching sur des dictionnaires</span>
evenement = {<span class="str">"type"</span>: <span class="str">"clic"</span>, <span class="str">"x"</span>: <span class="num">10</span>, <span class="str">"y"</span>: <span class="num">20</span>}

<span class="kw">match</span> evenement:
    <span class="kw">case</span> {<span class="str">"type"</span>: <span class="str">"clic"</span>, <span class="str">"x"</span>: x, <span class="str">"y"</span>: y}:
        <span class="fn">print</span>(<span class="str">f"Clic en ({x}, {y})"</span>)
    <span class="kw">case</span> {<span class="str">"type"</span>: <span class="str">"touche"</span>, <span class="str">"code"</span>: code}:
        <span class="fn">print</span>(<span class="str">f"Touche pressée : {code}"</span>)
    <span class="kw">case</span> _:
        <span class="fn">print</span>(<span class="str">"Événement inconnu"</span>)</code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : = au lieu de == (affectation vs comparaison)</span>
<span class="cm"># En Python, contrairement à C, les affectations ne sont pas des expressions</span>
<span class="cm"># donc ce bug courant ne compile pas directement</span>
x = <span class="num">5</span>
<span class="kw">if</span> x == <span class="num">5</span>:   <span class="cm"># ✓ comparaison</span>
    <span class="kw">pass</span>

<span class="cm"># PIÈGE 2 : Test d'égalité avec None — utiliser is</span>
valeur = <span class="kw">None</span>
<span class="cm"># if valeur == None:  # déconseillé</span>
<span class="kw">if</span> valeur <span class="kw">is</span> <span class="kw">None</span>:    <span class="cm"># ✓ recommandé</span>
    <span class="fn">print</span>(<span class="str">"Pas de valeur"</span>)

<span class="cm"># PIÈGE 3 : Test de liste vide</span>
lst = []
<span class="cm"># if len(lst) == 0:  # verbeux</span>
<span class="kw">if</span> <span class="kw">not</span> lst:           <span class="cm"># ✓ pythonique</span>
    <span class="fn">print</span>(<span class="str">"Liste vide"</span>)

<span class="cm"># PIÈGE 4 : Indentation incorrecte</span>
<span class="cm"># for i in range(3):</span>
<span class="cm"># print(i)  # IndentationError !</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
    <span class="fn">print</span>(i)   <span class="cm"># ✓ bien indenté (4 espaces)</span>

<span class="cm"># PIÈGE 5 : Confusion between and/or et leurs priorités</span>
<span class="cm"># a or b and c  est interprété comme  a or (b and c)</span>
<span class="cm"># Utilisez des parenthèses pour clarifier</span>
x = <span class="kw">True</span>
<span class="kw">if</span> (x <span class="kw">or</span> <span class="kw">False</span>) <span class="kw">and</span> <span class="kw">True</span>:  <span class="cm"># parenthèses explicites</span>
    <span class="kw">pass</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Early return :</strong> dans les fonctions, renvoyez tôt pour éviter l'imbrication excessive des conditions.</li>
          <li><strong>Conditions positives :</strong> privilégiez les conditions affirmatives plutôt que négatives pour la lisibilité.</li>
          <li><strong>Éviter les if imbriqués profondément :</strong> refactorisez en fonctions si l'imbrication dépasse 3 niveaux.</li>
          <li><strong>Ternaire avec modération :</strong> l'expression conditionnelle est lisible pour des cas simples, mais évitez de les imbriquer.</li>
          <li><strong>match/case :</strong> préférez <code>match</code> aux longues chaînes <code>if/elif</code> quand vous testez la structure d'un objet.</li>
          <li><strong>is None vs == None :</strong> utilisez toujours <code>is None</code> pour tester <code>None</code>.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Pattern Guard :</strong> dans un <code>case</code>, vous pouvez ajouter une condition avec <code>if</code> : <code>case (x, y) if x == y:</code> — cela matche uniquement si les deux coordonnées sont égales.</p>
        </div>
      </div>
    </section>
    """

# ============================================================
# bases/operateurs
# ============================================================
OPERATEURS_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Opérateurs arithmétiques, logiques, comparaison, bits et priorité</p></div></div>
      <div class="course-content">
        <h3>Opérateurs arithmétiques</h3>
        <p>Python propose tous les opérateurs arithmétiques classiques, plus quelques-uns spécifiques : la division entière <code>//</code>, l'opérateur modulo <code>%</code> et l'exponentiation <code>**</code>. La division <code>/</code> retourne toujours un <code>float</code> en Python 3.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>a, b = <span class="num">17</span>, <span class="num">5</span>

<span class="fn">print</span>(a + b)    <span class="cm"># 22   — addition</span>
<span class="fn">print</span>(a - b)    <span class="cm"># 12   — soustraction</span>
<span class="fn">print</span>(a * b)    <span class="cm"># 85   — multiplication</span>
<span class="fn">print</span>(a / b)    <span class="cm"># 3.4  — division réelle (toujours float)</span>
<span class="fn">print</span>(a // b)   <span class="cm"># 3    — division entière (floor)</span>
<span class="fn">print</span>(a % b)    <span class="cm"># 2    — modulo (reste de la division)</span>
<span class="fn">print</span>(a ** b)   <span class="cm"># 1419857 — exponentiation (17^5)</span>
<span class="fn">print</span>(-a)       <span class="cm"># -17  — négation unaire</span>

<span class="cm"># Particularités</span>
<span class="fn">print</span>(-<span class="num">7</span> // <span class="num">2</span>)    <span class="cm"># -4 — floor vers le bas (pas vers zéro !)</span>
<span class="fn">print</span>(-<span class="num">7</span> % <span class="num">2</span>)     <span class="cm"># 1  — modulo toujours positif si diviseur positif</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">10</span>)    <span class="cm"># 1024</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">0.5</span>)   <span class="cm"># 1.4142... — racine carrée</span>

<span class="cm"># Précision arbitraire des entiers</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">100</span>)   <span class="cm"># 1267650600228229401496703205376 — pas d'overflow !</span>

<span class="cm"># Divmod — quotient et reste en une opération</span>
q, r = <span class="fn">divmod</span>(<span class="num">17</span>, <span class="num">5</span>)
<span class="fn">print</span>(<span class="str">f"17 = {q} × 5 + {r}"</span>)  <span class="cm"># 17 = 3 × 5 + 2</span></code></pre>
        </div>

        <h3>Opérateurs de comparaison</h3>
        <p>Les opérateurs de comparaison retournent un booléen (<code>True</code> ou <code>False</code>). Python permet le <strong>chaînage de comparaisons</strong>, ce qui rend les tests d'intervalles très lisibles.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>a, b = <span class="num">10</span>, <span class="num">20</span>

<span class="fn">print</span>(a == b)   <span class="cm"># False — égalité</span>
<span class="fn">print</span>(a != b)   <span class="cm"># True  — différence</span>
<span class="fn">print</span>(a &lt; b)    <span class="cm"># True  — strictement inférieur</span>
<span class="fn">print</span>(a &lt;= b)   <span class="cm"># True  — inférieur ou égal</span>
<span class="fn">print</span>(a &gt; b)    <span class="cm"># False — strictement supérieur</span>
<span class="fn">print</span>(a &gt;= b)   <span class="cm"># False — supérieur ou égal</span>

<span class="cm"># Chaînage de comparaisons — très pythonique !</span>
x = <span class="num">15</span>
<span class="fn">print</span>(<span class="num">10</span> &lt; x &lt; <span class="num">20</span>)       <span class="cm"># True  — x est entre 10 et 20</span>
<span class="fn">print</span>(<span class="num">0</span> &lt;= x &lt;= <span class="num">100</span>)     <span class="cm"># True  — x est en [0, 100]</span>
<span class="fn">print</span>(<span class="num">1</span> &lt; <span class="num">2</span> &lt; <span class="num">3</span> &lt; <span class="num">4</span>)     <span class="cm"># True  — chaîne valide</span>

<span class="cm"># Comparaison de chaînes (ordre lexicographique)</span>
<span class="fn">print</span>(<span class="str">"abc"</span> &lt; <span class="str">"abd"</span>)   <span class="cm"># True — compare char par char</span>
<span class="fn">print</span>(<span class="str">"Z"</span> &lt; <span class="str">"a"</span>)       <span class="cm"># True — Z=90, a=97 en ASCII</span>
<span class="fn">print</span>(<span class="str">"pomme"</span> &lt; <span class="str">"pommes"</span>)  <span class="cm"># True — plus court vient avant</span>

<span class="cm"># Comparaison de listes</span>
<span class="fn">print</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>] == [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>])  <span class="cm"># True — même contenu</span>
<span class="fn">print</span>([<span class="num">1</span>, <span class="num">2</span>] &lt; [<span class="num">1</span>, <span class="num">3</span>])         <span class="cm"># True — compare élément par élément</span></code></pre>
        </div>

        <h3>Opérateurs logiques</h3>
        <p>Python utilise des mots-clés (<code>and</code>, <code>or</code>, <code>not</code>) plutôt que des symboles (<code>&&</code>, <code>||</code>, <code>!</code>) pour les opérateurs logiques. Ces opérateurs implémentent l'<strong>évaluation en court-circuit</strong> et retournent l'un des opérandes (pas forcément <code>True</code> ou <code>False</code>).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># and — retourne le premier opérande falsy, ou le dernier</span>
<span class="fn">print</span>(<span class="kw">True</span> <span class="kw">and</span> <span class="kw">True</span>)    <span class="cm"># True</span>
<span class="fn">print</span>(<span class="kw">True</span> <span class="kw">and</span> <span class="kw">False</span>)   <span class="cm"># False</span>
<span class="fn">print</span>(<span class="num">5</span> <span class="kw">and</span> <span class="num">10</span>)         <span class="cm"># 10  — les deux truthy, retourne le dernier</span>
<span class="fn">print</span>(<span class="num">0</span> <span class="kw">and</span> <span class="num">10</span>)         <span class="cm"># 0   — 0 est falsy, court-circuit</span>
<span class="fn">print</span>(<span class="str">""</span> <span class="kw">and</span> <span class="str">"hello"</span>)  <span class="cm"># ""  — chaîne vide est falsy</span>

<span class="cm"># or — retourne le premier opérande truthy, ou le dernier</span>
<span class="fn">print</span>(<span class="kw">False</span> <span class="kw">or</span> <span class="kw">True</span>)    <span class="cm"># True</span>
<span class="fn">print</span>(<span class="num">0</span> <span class="kw">or</span> <span class="num">10</span>)          <span class="cm"># 10  — 0 falsy, retourne 10</span>
<span class="fn">print</span>(<span class="str">""</span> <span class="kw">or</span> <span class="str">"défaut"</span>)  <span class="cm"># "défaut"</span>
<span class="fn">print</span>(<span class="kw">None</span> <span class="kw">or</span> [])        <span class="cm"># [] — None falsy, retourne []</span>

<span class="cm"># not — inverse la valeur booléenne</span>
<span class="fn">print</span>(<span class="kw">not</span> <span class="kw">True</span>)         <span class="cm"># False</span>
<span class="fn">print</span>(<span class="kw">not</span> <span class="num">0</span>)             <span class="cm"># True</span>
<span class="fn">print</span>(<span class="kw">not</span> [])            <span class="cm"># True</span>
<span class="fn">print</span>(<span class="kw">not</span> <span class="str">"hello"</span>)      <span class="cm"># False</span>

<span class="cm"># Court-circuit en pratique</span>
nom = <span class="kw">None</span>
affichage = nom <span class="kw">or</span> <span class="str">"Anonyme"</span>  <span class="cm"># valeur par défaut si None</span>

config = {<span class="str">"debug"</span>: <span class="kw">True</span>}
debug = config.get(<span class="str">"debug"</span>) <span class="kw">and</span> config.get(<span class="str">"verbose"</span>)  <span class="cm"># None si debug=False</span></code></pre>
        </div>

        <h3>Opérateurs d'affectation composée</h3>
        <p>Ces opérateurs combinent une opération arithmétique avec l'affectation. Ils modifient la variable en place et sont plus concis. L'opérateur walrus <code>:=</code> (Python 3.8+) permet l'affectation dans une expression.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>x = <span class="num">10</span>

x += <span class="num">5</span>    <span class="cm"># x = x + 5 → 15</span>
x -= <span class="num">3</span>    <span class="cm"># x = x - 3 → 12</span>
x *= <span class="num">2</span>    <span class="cm"># x = x * 2 → 24</span>
x /= <span class="num">4</span>    <span class="cm"># x = x / 4 → 6.0</span>
x //= <span class="num">2</span>   <span class="cm"># x = x // 2 → 3.0</span>
x **= <span class="num">3</span>   <span class="cm"># x = x ** 3 → 27.0</span>
x %= <span class="num">5</span>    <span class="cm"># x = x % 5 → 2.0</span>

<span class="cm"># L'opérateur walrus := (Python 3.8+)</span>
<span class="cm"># Affecte ET retourne une valeur — utile dans les conditions</span>
nombres = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">15</span>, <span class="num">3</span>, <span class="num">20</span>]
<span class="kw">if</span> (n := <span class="fn">len</span>(nombres)) &gt; <span class="num">4</span>:
    <span class="fn">print</span>(<span class="str">f"Liste longue : {n} éléments"</span>)

<span class="cm"># Walrus dans une boucle while</span>
<span class="kw">import</span> math
valeur = <span class="num">100</span>
<span class="kw">while</span> (valeur := math.sqrt(valeur)) &gt; <span class="num">2</span>:
    <span class="fn">print</span>(<span class="str">f"√ → {valeur:.4f}"</span>)

<span class="cm"># Walrus pour éviter un double appel de fonction</span>
<span class="kw">import</span> re
texte = <span class="str">"Mon numéro est 0612345678"</span>
<span class="kw">if</span> m := re.search(<span class="str">r"\d{10}"</span>, texte):
    <span class="fn">print</span>(<span class="str">f"Trouvé : {m.group()}"</span>)  <span class="cm"># pas besoin de recalculer</span></code></pre>
        </div>

        <h3>Opérateurs d'identité et d'appartenance</h3>
        <p>Python distingue l'<strong>égalité de valeur</strong> (<code>==</code>) de l'<strong>identité d'objet</strong> (<code>is</code>). L'opérateur <code>in</code> teste l'appartenance à une collection.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># is — identité (même objet en mémoire)</span>
a = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
b = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]
c = a

<span class="fn">print</span>(a == b)   <span class="cm"># True  — mêmes valeurs</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)   <span class="cm"># False — objets différents</span>
<span class="fn">print</span>(a <span class="kw">is</span> c)   <span class="cm"># True  — même objet</span>
<span class="fn">print</span>(<span class="fn">id</span>(a), <span class="fn">id</span>(c))  <span class="cm"># même adresse mémoire</span>

<span class="cm"># is None — toujours utiliser is pour None</span>
valeur = <span class="kw">None</span>
<span class="fn">print</span>(valeur <span class="kw">is</span> <span class="kw">None</span>)     <span class="cm"># True  ✓</span>
<span class="fn">print</span>(valeur <span class="kw">is not</span> <span class="kw">None</span>) <span class="cm"># False ✓</span>

<span class="cm"># in — appartenance</span>
fruits = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>, <span class="str">"cerise"</span>]
<span class="fn">print</span>(<span class="str">"banane"</span> <span class="kw">in</span> fruits)      <span class="cm"># True  — O(n) sur liste</span>
<span class="fn">print</span>(<span class="str">"raisin"</span> <span class="kw">not in</span> fruits)  <span class="cm"># True</span>

<span class="cm"># in sur chaîne</span>
<span class="fn">print</span>(<span class="str">"py"</span> <span class="kw">in</span> <span class="str">"python"</span>)  <span class="cm"># True — sous-chaîne</span>

<span class="cm"># in sur dict — teste les CLÉS</span>
dico = {<span class="str">"a"</span>: <span class="num">1</span>, <span class="str">"b"</span>: <span class="num">2</span>}
<span class="fn">print</span>(<span class="str">"a"</span> <span class="kw">in</span> dico)   <span class="cm"># True  — O(1) sur dict</span>
<span class="fn">print</span>(<span class="num">1</span> <span class="kw">in</span> dico)    <span class="cm"># False — 1 n'est pas une clé</span>

<span class="cm"># Performance : set vs list pour in</span>
grand_set = <span class="fn">set</span>(<span class="fn">range</span>(<span class="num">1_000_000</span>))
<span class="fn">print</span>(<span class="num">999_999</span> <span class="kw">in</span> grand_set)  <span class="cm"># O(1) — instantané</span>
<span class="cm"># 999_999 in list(range(1_000_000))  # O(n) — beaucoup plus lent</span></code></pre>
        </div>

        <h3>Opérateurs bitwise (sur les bits)</h3>
        <p>Les opérateurs bitwise manipulent les représentations binaires des entiers. Ils sont utiles en programmation système, manipulation de flags, et algorithmes bas niveau.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code>a = <span class="num">0b1010</span>   <span class="cm"># 10 en binaire</span>
b = <span class="num">0b1100</span>   <span class="cm"># 12 en binaire</span>

<span class="fn">print</span>(<span class="fn">bin</span>(a &amp; b))   <span class="cm"># 0b1000 (8)  — AND bit à bit</span>
<span class="fn">print</span>(<span class="fn">bin</span>(a | b))   <span class="cm"># 0b1110 (14) — OR bit à bit</span>
<span class="fn">print</span>(<span class="fn">bin</span>(a ^ b))   <span class="cm"># 0b0110 (6)  — XOR bit à bit</span>
<span class="fn">print</span>(<span class="fn">bin</span>(~a))      <span class="cm"># -11        — NOT (complément à 2)</span>
<span class="fn">print</span>(<span class="fn">bin</span>(a &lt;&lt; <span class="num">1</span>))  <span class="cm"># 0b10100 (20) — décalage gauche (* 2)</span>
<span class="fn">print</span>(<span class="fn">bin</span>(a &gt;&gt; <span class="num">1</span>))  <span class="cm"># 0b101 (5)   — décalage droite (// 2)</span>

<span class="cm"># Utilisation pratique : flags de permissions</span>
LIRE    = <span class="num">0b001</span>   <span class="cm"># 1</span>
ECRIRE  = <span class="num">0b010</span>   <span class="cm"># 2</span>
EXECUTER = <span class="num">0b100</span> <span class="cm"># 4</span>

permissions = LIRE | ECRIRE   <span class="cm"># 3 — peut lire et écrire</span>
<span class="fn">print</span>(<span class="fn">bool</span>(permissions &amp; LIRE))     <span class="cm"># True — peut lire ?</span>
<span class="fn">print</span>(<span class="fn">bool</span>(permissions &amp; EXECUTER)) <span class="cm"># False — peut exécuter ?</span>

<span class="cm"># Test de parité rapide avec &</span>
<span class="kw">def</span> <span class="fn">est_pair</span>(n):
    <span class="kw">return</span> (n &amp; <span class="num">1</span>) == <span class="num">0</span></code></pre>
        </div>

        <h3>Priorité des opérateurs</h3>
        <p>Quand plusieurs opérateurs apparaissent dans une expression, Python les évalue selon un ordre de priorité (de la plus haute à la plus basse). En cas de doute, utilisez des parenthèses pour rendre l'intention explicite.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Priorité (haute → basse) :</span>
<span class="cm"># **  (exponentiation — associative à droite)</span>
<span class="cm"># +x, -x, ~x  (unaires)</span>
<span class="cm"># *, /, //, %</span>
<span class="cm"># +, -</span>
<span class="cm"># &lt;&lt;, &gt;&gt;  (décalages)</span>
<span class="cm"># &amp;  (AND bits)</span>
<span class="cm"># ^  (XOR bits)</span>
<span class="cm"># |  (OR bits)</span>
<span class="cm"># ==, !=, &lt;, &gt;, &lt;=, &gt;=, is, in</span>
<span class="cm"># not</span>
<span class="cm"># and</span>
<span class="cm"># or</span>

<span class="cm"># Exemples</span>
<span class="fn">print</span>(<span class="num">2</span> + <span class="num">3</span> * <span class="num">4</span>)        <span class="cm"># 14   — * avant +</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">3</span> ** <span class="num">2</span>)      <span class="cm"># 512  — ** droite-à-gauche : 2**(3**2)=2**9</span>
<span class="fn">print</span>(<span class="num">4</span> + <span class="kw">True</span>)          <span class="cm"># 5    — bool est sous-classe de int</span>
<span class="fn">print</span>(<span class="kw">not</span> <span class="kw">True</span> <span class="kw">and</span> <span class="kw">True</span>) <span class="cm"># False — not avant and</span>

<span class="cm"># Utiliser des parenthèses pour la clarté</span>
<span class="fn">print</span>((<span class="num">2</span> + <span class="num">3</span>) * <span class="num">4</span>)       <span class="cm"># 20</span>
<span class="fn">print</span>((<span class="num">2</span> ** <span class="num">3</span>) ** <span class="num">2</span>)     <span class="cm"># 64</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : Division entière vers le bas (pas vers zéro)</span>
<span class="fn">print</span>(-<span class="num">7</span> // <span class="num">2</span>)   <span class="cm"># -4, pas -3 !</span>
<span class="fn">print</span>(<span class="fn">int</span>(-<span class="num">7</span> / <span class="num">2</span>))  <span class="cm"># -3 — tronque vers zéro</span>
<span class="kw">import</span> math
<span class="fn">print</span>(math.trunc(-<span class="num">7</span> / <span class="num">2</span>))  <span class="cm"># -3 — explicite</span>

<span class="cm"># PIÈGE 2 : Imprécision des floats</span>
<span class="fn">print</span>(<span class="num">0.1</span> + <span class="num">0.2</span> == <span class="num">0.3</span>)          <span class="cm"># False !</span>
<span class="fn">print</span>(<span class="fn">round</span>(<span class="num">0.1</span> + <span class="num">0.2</span>, <span class="num">10</span>) == <span class="num">0.3</span>)  <span class="cm"># True</span>
<span class="fn">print</span>(<span class="fn">abs</span>(<span class="num">0.1</span> + <span class="num">0.2</span> - <span class="num">0.3</span>) &lt; <span class="num">1e-9</span>)  <span class="cm"># True ✓</span>

<span class="cm"># PIÈGE 3 : ** est associatif à droite</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">3</span> ** <span class="num">2</span>)    <span class="cm"># 512 = 2 ** (3**2) = 2 ** 9</span>
<span class="fn">print</span>((<span class="num">2</span> ** <span class="num">3</span>) ** <span class="num">2</span>)  <span class="cm"># 64  = 8 ** 2</span>

<span class="cm"># PIÈGE 4 : is vs == pour les entiers</span>
a = <span class="num">256</span>
b = <span class="num">256</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)  <span class="cm"># True — Python met en cache -5..256</span>
a = <span class="num">257</span>
b = <span class="num">257</span>
<span class="fn">print</span>(a <span class="kw">is</span> b)  <span class="cm"># False — objets différents</span>

<span class="cm"># PIÈGE 5 : and/or ne retournent pas toujours des bool</span>
<span class="fn">print</span>(<span class="num">1</span> <span class="kw">and</span> <span class="num">2</span>)   <span class="cm"># 2  — pas True !</span>
<span class="fn">print</span>(<span class="num">0</span> <span class="kw">or</span> <span class="num">3</span>)    <span class="cm"># 3  — pas True !</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Parenthèses pour la clarté :</strong> quand une expression mélange <code>and</code>, <code>or</code> et des comparaisons, utilisez des parenthèses même si Python les évalue correctement sans.</li>
          <li><strong>Éviter float pour les finances :</strong> utilisez le module <code>decimal</code> pour les calculs financiers nécessitant une précision exacte.</li>
          <li><strong>Opérateur walrus avec parcimonie :</strong> <code>:=</code> est utile pour éviter les doubles appels, mais peut nuire à la lisibilité s'il est abusé.</li>
          <li><strong>is None uniquement :</strong> réservez <code>is</code> pour les comparaisons avec <code>None</code>, <code>True</code> et <code>False</code>. Pour le reste, utilisez <code>==</code>.</li>
          <li><strong>Modulo positif :</strong> en Python, <code>a % b</code> a toujours le signe de <code>b</code>. C'est différent de C/Java où le résultat a le signe de <code>a</code>.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Performance :</strong> les décalages de bits (<code>&lt;&lt;</code>, <code>&gt;&gt;</code>) sont très rapides pour multiplier/diviser par des puissances de 2. <code>n &lt;&lt; 1</code> est équivalent à <code>n * 2</code> mais plus rapide. Cependant, en Python moderne le compilateur optimise souvent ces cas automatiquement.</p>
        </div>
      </div>
    </section>
    """

# ============================================================
# bases/boucles
# ============================================================
BOUCLES_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>for, while, range, break, continue, else et itérateurs</p></div></div>
      <div class="course-content">
        <h3>La boucle for</h3>
        <p>La boucle <code>for</code> de Python est une boucle <strong>for-each</strong> : elle itère directement sur les éléments d'un <em>itérable</em> (liste, tuple, chaîne, dictionnaire, fichier...). Contrairement à C ou Java, il n'y a pas d'index implicite — pour obtenir l'index, utilisez <code>enumerate()</code>.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Itérer sur une liste</span>
fruits = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>, <span class="str">"cerise"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="fn">print</span>(fruit)

<span class="cm"># Itérer sur une chaîne</span>
<span class="kw">for</span> lettre <span class="kw">in</span> <span class="str">"Python"</span>:
    <span class="fn">print</span>(lettre, end=<span class="str">"-"</span>)   <span class="cm"># P-y-t-h-o-n-</span>

<span class="cm"># Itérer sur un dictionnaire</span>
scores = {<span class="str">"Alice"</span>: <span class="num">95</span>, <span class="str">"Bob"</span>: <span class="num">87</span>, <span class="str">"Carol"</span>: <span class="num">92</span>}
<span class="kw">for</span> nom <span class="kw">in</span> scores:           <span class="cm"># itère sur les CLÉS</span>
    <span class="fn">print</span>(nom, scores[nom])

<span class="kw">for</span> nom, note <span class="kw">in</span> scores.items():  <span class="cm"># clés ET valeurs</span>
    <span class="fn">print</span>(<span class="str">f"{nom}: {note}"</span>)

<span class="cm"># enumerate() — index + valeur</span>
<span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits, start=<span class="num">1</span>):
    <span class="fn">print</span>(<span class="str">f"{i}. {fruit}"</span>)

<span class="cm"># zip() — deux listes en parallèle</span>
noms = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>]
notes = [<span class="num">95</span>, <span class="num">87</span>]
<span class="kw">for</span> nom, note <span class="kw">in</span> <span class="fn">zip</span>(noms, notes):
    <span class="fn">print</span>(<span class="str">f"{nom}: {note}"</span>)</code></pre>
        </div>

        <h3>La fonction range()</h3>
        <p><code>range()</code> génère une séquence d'entiers à la volée (sans créer une liste en mémoire). C'est un <em>itérable paresseux</em>. Il accepte 1, 2 ou 3 arguments : <code>range(fin)</code>, <code>range(début, fin)</code>, <code>range(début, fin, pas)</code>.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># range(fin) — de 0 à fin-1</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(i, end=<span class="str">" "</span>)   <span class="cm"># 0 1 2 3 4</span>

<span class="cm"># range(début, fin) — de début à fin-1</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="num">8</span>):
    <span class="fn">print</span>(i, end=<span class="str">" "</span>)   <span class="cm"># 2 3 4 5 6 7</span>

<span class="cm"># range(début, fin, pas)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">0</span>, <span class="num">20</span>, <span class="num">5</span>):
    <span class="fn">print</span>(i, end=<span class="str">" "</span>)   <span class="cm"># 0 5 10 15</span>

<span class="cm"># Compter à rebours</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>, <span class="num">0</span>, -<span class="num">1</span>):
    <span class="fn">print</span>(i, end=<span class="str">" "</span>)   <span class="cm"># 5 4 3 2 1</span>

<span class="cm"># range est paresseux — très efficace en mémoire</span>
gros = <span class="fn">range</span>(<span class="num">10</span>**<span class="num">9</span>)     <span class="cm"># ne crée PAS 10^9 entiers en mémoire</span>
<span class="fn">print</span>(<span class="fn">len</span>(gros))         <span class="cm"># 1000000000</span>
<span class="fn">print</span>(gros[<span class="num">500</span>])         <span class="cm"># 500 — accès direct en O(1)</span>

<span class="cm"># Convertir en liste si nécessaire</span>
<span class="fn">print</span>(<span class="fn">list</span>(<span class="fn">range</span>(<span class="num">5</span>)))    <span class="cm"># [0, 1, 2, 3, 4]</span></code></pre>
        </div>

        <h3>La boucle while</h3>
        <p>La boucle <code>while</code> répète un bloc tant qu'une condition est vraie. Elle est utile quand on ne connaît pas à l'avance le nombre d'itérations. Assurez-vous que la condition finit par devenir fausse pour éviter une boucle infinie.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># While basique</span>
n = <span class="num">1</span>
<span class="kw">while</span> n &lt;= <span class="num">5</span>:
    <span class="fn">print</span>(n, end=<span class="str">" "</span>)
    n += <span class="num">1</span>   <span class="cm"># INDISPENSABLE — sinon boucle infinie !</span>
<span class="cm"># 1 2 3 4 5</span>

<span class="cm"># Lire jusqu'à une valeur sentinelle</span>
total = <span class="num">0</span>
<span class="kw">while</span> <span class="kw">True</span>:
    valeur = <span class="fn">input</span>(<span class="str">"Entrez un nombre (0 pour terminer) : "</span>)
    n = <span class="fn">int</span>(valeur)
    <span class="kw">if</span> n == <span class="num">0</span>:
        <span class="kw">break</span>
    total += n
<span class="fn">print</span>(<span class="str">f"Total : {total}"</span>)

<span class="cm"># Algorithme d'Euclide (PGCD)</span>
<span class="kw">def</span> <span class="fn">pgcd</span>(a, b):
    <span class="kw">while</span> b != <span class="num">0</span>:
        a, b = b, a % b
    <span class="kw">return</span> a

<span class="fn">print</span>(<span class="fn">pgcd</span>(<span class="num">48</span>, <span class="num">18</span>))  <span class="cm"># 6</span>

<span class="cm"># Séquence de Collatz</span>
n = <span class="num">27</span>
pas = <span class="num">0</span>
<span class="kw">while</span> n != <span class="num">1</span>:
    n = n // <span class="num">2</span> <span class="kw">if</span> n % <span class="num">2</span> == <span class="num">0</span> <span class="kw">else</span> <span class="num">3</span> * n + <span class="num">1</span>
    pas += <span class="num">1</span>
<span class="fn">print</span>(<span class="str">f"27 atteint 1 en {pas} étapes"</span>)  <span class="cm"># 111</span></code></pre>
        </div>

        <h3>break et continue</h3>
        <p><code>break</code> interrompt immédiatement la boucle la plus interne. <code>continue</code> passe directement à l'itération suivante en sautant le reste du corps de la boucle. Ces mots-clés permettent un contrôle fin du flux.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># break — quitter la boucle</span>
nombres = [<span class="num">2</span>, <span class="num">8</span>, <span class="num">3</span>, <span class="num">15</span>, <span class="num">7</span>, <span class="num">1</span>]
<span class="kw">for</span> n <span class="kw">in</span> nombres:
    <span class="kw">if</span> n &gt; <span class="num">10</span>:
        <span class="fn">print</span>(<span class="str">f"Premier > 10 : {n}"</span>)
        <span class="kw">break</span>
<span class="cm"># Premier > 10 : 15</span>

<span class="cm"># continue — sauter une itération</span>
<span class="kw">for</span> n <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">11</span>):
    <span class="kw">if</span> n % <span class="num">3</span> == <span class="num">0</span>:
        <span class="kw">continue</span>   <span class="cm"># sauter les multiples de 3</span>
    <span class="fn">print</span>(n, end=<span class="str">" "</span>)
<span class="cm"># 1 2 4 5 7 8 10</span>

<span class="cm"># Recherche binaire avec break</span>
<span class="kw">def</span> <span class="fn">chercher</span>(liste, cible):
    <span class="kw">for</span> i, val <span class="kw">in</span> <span class="fn">enumerate</span>(liste):
        <span class="kw">if</span> val == cible:
            <span class="kw">return</span> i   <span class="cm"># return est préférable à break dans une fonction</span>
    <span class="kw">return</span> -<span class="num">1</span>

<span class="cm"># Validation avec while + break</span>
<span class="kw">while</span> <span class="kw">True</span>:
    reponse = <span class="fn">input</span>(<span class="str">"Oui ou non ? "</span>).lower()
    <span class="kw">if</span> reponse <span class="kw">in</span> (<span class="str">"oui"</span>, <span class="str">"non"</span>):
        <span class="kw">break</span>
    <span class="fn">print</span>(<span class="str">"Répondez par oui ou non."</span>)</code></pre>
        </div>

        <h3>Boucles imbriquées</h3>
        <p>Les boucles peuvent être imbriquées. Chaque <code>break</code> ou <code>continue</code> n'affecte que la boucle la plus interne. Pour une boucle imbriquée profonde, il est souvent préférable de refactoriser en fonction.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Table de multiplication</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">4</span>):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">4</span>):
        <span class="fn">print</span>(<span class="str">f"{i}×{j}={i*j}"</span>, end=<span class="str">"\t"</span>)
    <span class="fn">print</span>()  <span class="cm"># retour à la ligne après chaque rangée</span>

<span class="cm"># Trouver les paires dont la somme vaut un cible</span>
<span class="kw">def</span> <span class="fn">paires_somme</span>(nombres, cible):
    resultat = []
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="fn">len</span>(nombres)):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(i + <span class="num">1</span>, <span class="fn">len</span>(nombres)):
            <span class="kw">if</span> nombres[i] + nombres[j] == cible:
                resultat.append((nombres[i], nombres[j]))
    <span class="kw">return</span> resultat

<span class="fn">print</span>(<span class="fn">paires_somme</span>([<span class="num">1</span>, <span class="num">3</span>, <span class="num">5</span>, <span class="num">7</span>], <span class="num">8</span>))  <span class="cm"># [(1, 7), (3, 5)]</span></code></pre>
        </div>

        <h3>Le else dans les boucles</h3>
        <p>Python permet d'attacher un bloc <code>else</code> à une boucle <code>for</code> ou <code>while</code>. Ce bloc s'exécute si la boucle s'est terminée normalement (sans <code>break</code>). C'est utile pour signaler qu'une recherche n'a pas trouvé de résultat.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># for...else — l'else s'exécute si pas de break</span>
<span class="kw">def</span> <span class="fn">est_premier</span>(n):
    <span class="kw">if</span> n &lt; <span class="num">2</span>:
        <span class="kw">return</span> <span class="kw">False</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="fn">int</span>(n**<span class="num">0.5</span>) + <span class="num">1</span>):
        <span class="kw">if</span> n % i == <span class="num">0</span>:
            <span class="kw">return</span> <span class="kw">False</span>   <span class="cm"># break implicite via return</span>
    <span class="kw">return</span> <span class="kw">True</span>

<span class="cm"># Équivalent avec for...else</span>
<span class="kw">def</span> <span class="fn">est_premier_v2</span>(n):
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">2</span>, <span class="fn">int</span>(n**<span class="num">0.5</span>) + <span class="num">1</span>):
        <span class="kw">if</span> n % i == <span class="num">0</span>:
            <span class="kw">break</span>    <span class="cm"># diviseur trouvé</span>
    <span class="kw">else</span>:
        <span class="kw">return</span> <span class="kw">True</span>  <span class="cm"># aucun diviseur trouvé</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="cm"># Recherche dans une liste</span>
membres = [<span class="str">"Alice"</span>, <span class="str">"Bob"</span>, <span class="str">"Carol"</span>]
recherche = <span class="str">"Dave"</span>

<span class="kw">for</span> membre <span class="kw">in</span> membres:
    <span class="kw">if</span> membre == recherche:
        <span class="fn">print</span>(<span class="str">f"{recherche} trouvé !"</span>)
        <span class="kw">break</span>
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"{recherche} absent de la liste"</span>)
<span class="cm"># Dave absent de la liste</span></code></pre>
        </div>

        <h3>Pièges courants</h3>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># PIÈGE 1 : Modifier une liste pendant l'itération</span>
lst = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
<span class="cm"># ❌ — comportement imprévisible</span>
<span class="cm"># for x in lst:</span>
<span class="cm">#     if x % 2 == 0: lst.remove(x)</span>

<span class="cm"># ✓ Itérer sur une copie</span>
<span class="kw">for</span> x <span class="kw">in</span> lst[:]:
    <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>:
        lst.remove(x)

<span class="cm"># ✓ Ou utiliser une compréhension (plus efficace)</span>
lst = [x <span class="kw">for</span> x <span class="kw">in</span> lst <span class="kw">if</span> x % <span class="num">2</span> != <span class="num">0</span>]

<span class="cm"># PIÈGE 2 : range(len(liste)) au lieu de enumerate()</span>
fruits = [<span class="str">"pomme"</span>, <span class="str">"banane"</span>]
<span class="cm"># ❌ Anti-pythonique</span>
<span class="cm"># for i in range(len(fruits)): print(fruits[i])</span>
<span class="cm"># ✓ Pythonique</span>
<span class="kw">for</span> i, fruit <span class="kw">in</span> <span class="fn">enumerate</span>(fruits):
    <span class="fn">print</span>(i, fruit)

<span class="cm"># PIÈGE 3 : Boucle infinie sans condition de sortie</span>
<span class="cm"># ❌ Boucle infinie si n ne change pas !</span>
<span class="cm"># n = 1</span>
<span class="cm"># while n > 0:</span>
<span class="cm">#     print(n)  # oubli de n -= 1</span>

<span class="cm"># PIÈGE 4 : Variable de boucle visible après la boucle</span>
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="kw">pass</span>
<span class="fn">print</span>(x)  <span class="cm"># 4 — x existe encore après la boucle (en Python)</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Préférer for à while :</strong> quand on sait sur quoi itérer, <code>for</code> est plus sûr et plus lisible qu'un <code>while</code> avec compteur.</li>
          <li><strong>enumerate() :</strong> jamais <code>range(len(liste))</code> — utilisez <code>enumerate()</code> pour accéder à l'index.</li>
          <li><strong>Pas de modification pendant l'itération :</strong> si vous devez modifier une liste en itérant, faites une copie ou utilisez une compréhension.</li>
          <li><strong>break clair :</strong> documentez pourquoi vous brisez la boucle avec un commentaire ou une variable nommée explicitement.</li>
          <li><strong>Boucle infinie avec exit explicite :</strong> si vous utilisez <code>while True</code>, assurez-vous que le <code>break</code> est clair et atteignable.</li>
          <li><strong>Limiter les boucles imbriquées :</strong> au-delà de 2 niveaux, refactorisez en fonction pour la lisibilité.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Astuce performance :</strong> pour les compréhensions simples, Python optimise mieux qu'une boucle <code>for</code> avec <code>.append()</code>. Pour des traitements complexes sur de grandes données, envisagez <code>itertools</code> (combinaisons, produits, chaînes d'itérables) ou <code>numpy</code> (opérations vectorisées).</p>
        </div>
      </div>
    </section>
    """

# Apply all enrichments
articles = {
    'bases/variables-types': VARIABLES_CONTENU,
    'bases/conditions': CONDITIONS_CONTENU,
    'bases/operateurs': OPERATEURS_CONTENU,
    'bases/boucles': BOUCLES_CONTENU,
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

# Verify
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    check = json.load(f)

for key in articles:
    print(f"  {key}: {len(check['pages'][key]['content'])} chars")
