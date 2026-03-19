#!/usr/bin/env python3
"""Enrich poo/classes, poo/heritage, structures/fonctions, structures/fichiers, bases/entrees-sorties"""
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
# poo/classes — enriched
# ============================================================
CLASSES_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Définition de classes, constructeur, attributs, méthodes et POO en Python</p></div></div>
      <div class="course-content">
        <h3>Définir une classe</h3>
        <p>Une <strong>classe</strong> est un modèle (blueprint) qui définit la structure et le comportement d'objets. En Python, tout est objet — les entiers, les listes, les fonctions sont des instances de classes. La syntaxe est simple : le mot-clé <code>class</code> suivi du nom en PascalCase. Une classe regroupe des <em>attributs</em> (données) et des <em>méthodes</em> (comportements).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Définir une classe minimale</span>
<span class="kw">class</span> <span class="fn">Chien</span>:
    <span class="kw">pass</span>   <span class="cm"># classe vide mais valide</span>

<span class="cm"># Instancier (créer un objet)</span>
rex = <span class="fn">Chien</span>()
fluffy = <span class="fn">Chien</span>()

<span class="fn">print</span>(<span class="fn">type</span>(rex))           <span class="cm"># &lt;class '__main__.Chien'&gt;</span>
<span class="fn">print</span>(<span class="fn">isinstance</span>(rex, Chien))  <span class="cm"># True</span>
<span class="fn">print</span>(rex <span class="kw">is</span> fluffy)         <span class="cm"># False — objets distincts</span>

<span class="cm"># Ajouter des attributs dynamiquement (possible mais déconseillé)</span>
rex.nom = <span class="str">"Rex"</span>
rex.age = <span class="num">3</span>
<span class="fn">print</span>(rex.nom, rex.age)   <span class="cm"># Rex 3</span>
<span class="cm"># fluffy.nom  → AttributeError — fluffy n'a pas ce attribut</span></code></pre>
        </div>

        <h3>Le constructeur __init__</h3>
        <p>La méthode spéciale <code>__init__</code> est le <strong>constructeur</strong> : elle est appelée automatiquement lors de la création d'une instance. Elle permet d'initialiser les attributs de l'objet avec des valeurs cohérentes dès la création.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Chien</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom, race, age=<span class="num">0</span>):
        <span class="str">"""Initialise un chien avec son nom, sa race et son âge."""</span>
        self.nom = nom
        self.race = race
        self.age = age
        self.vivant = <span class="kw">True</span>

<span class="cm"># Créer des instances</span>
rex = <span class="fn">Chien</span>(<span class="str">"Rex"</span>, <span class="str">"Berger allemand"</span>, <span class="num">3</span>)
fluffy = <span class="fn">Chien</span>(<span class="str">"Fluffy"</span>, <span class="str">"Caniche"</span>)  <span class="cm"># age=0 par défaut</span>

<span class="fn">print</span>(rex.nom)    <span class="cm"># "Rex"</span>
<span class="fn">print</span>(rex.race)   <span class="cm"># "Berger allemand"</span>
<span class="fn">print</span>(rex.age)    <span class="cm"># 3</span>

<span class="cm"># Modifier un attribut</span>
rex.age = <span class="num">4</span>
<span class="fn">print</span>(rex.age)    <span class="cm"># 4</span>

<span class="cm"># repr et str</span>
<span class="kw">class</span> <span class="fn">Point</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, x, y):
        self.x = x
        self.y = y

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"Point({self.x}, {self.y})"</span>

p = <span class="fn">Point</span>(<span class="num">3</span>, <span class="num">4</span>)
<span class="fn">print</span>(p)   <span class="cm"># Point(3, 4)</span></code></pre>
        </div>

        <h3>Le paramètre self</h3>
        <p><code>self</code> est une référence à l'instance courante. C'est une convention (pas un mot-clé) mais elle est universellement respectée. Python passe automatiquement l'instance comme premier argument lorsqu'on appelle une méthode — c'est pourquoi <code>self</code> est toujours le premier paramètre des méthodes d'instance.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Compteur</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self.valeur = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">incrementer</span>(self):
        self.valeur += <span class="num">1</span>   <span class="cm"># self.valeur = l'attribut de cette instance</span>

    <span class="kw">def</span> <span class="fn">reset</span>(self):
        self.valeur = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">obtenir</span>(self):
        <span class="kw">return</span> self.valeur

c1 = <span class="fn">Compteur</span>()
c2 = <span class="fn">Compteur</span>()

c1.incrementer()
c1.incrementer()
c2.incrementer()

<span class="fn">print</span>(c1.obtenir())  <span class="cm"># 2 — c1 a ses propres données</span>
<span class="fn">print</span>(c2.obtenir())  <span class="cm"># 1 — c2 est indépendant</span>

<span class="cm"># Appel explicite via la classe (identique)</span>
Compteur.incrementer(c1)     <span class="cm"># équivalent à c1.incrementer()</span>
<span class="fn">print</span>(c1.obtenir())  <span class="cm"># 3</span></code></pre>
        </div>

        <h3>Attributs d'instance vs attributs de classe</h3>
        <p>Les <strong>attributs d'instance</strong> sont propres à chaque objet (définis dans <code>__init__</code>). Les <strong>attributs de classe</strong> sont partagés par toutes les instances — ils sont définis directement dans le corps de la classe. Cette distinction est cruciale pour éviter des comportements inattendus.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Employe</span>:
    <span class="cm"># Attribut de CLASSE — partagé par toutes les instances</span>
    entreprise = <span class="str">"TechCorp"</span>
    nombre_employes = <span class="num">0</span>

    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom, salaire):
        <span class="cm"># Attributs d'INSTANCE — propres à chaque objet</span>
        self.nom = nom
        self.salaire = salaire
        Employe.nombre_employes += <span class="num">1</span>  <span class="cm"># modifie l'attribut de classe</span>

    <span class="kw">def</span> <span class="fn">info</span>(self):
        <span class="kw">return</span> <span class="str">f"{self.nom} chez {Employe.entreprise}"</span>

e1 = <span class="fn">Employe</span>(<span class="str">"Alice"</span>, <span class="num">50000</span>)
e2 = <span class="fn">Employe</span>(<span class="str">"Bob"</span>, <span class="num">45000</span>)

<span class="fn">print</span>(e1.entreprise)          <span class="cm"># TechCorp — accès via instance</span>
<span class="fn">print</span>(Employe.entreprise)     <span class="cm"># TechCorp — accès via classe</span>
<span class="fn">print</span>(Employe.nombre_employes) <span class="cm"># 2</span>

<span class="cm"># Attention : modifier via l'instance crée un attribut d'instance</span>
e1.entreprise = <span class="str">"StartupXYZ"</span>    <span class="cm"># crée e1.entreprise (instance)</span>
<span class="fn">print</span>(e1.entreprise)            <span class="cm"># StartupXYZ</span>
<span class="fn">print</span>(e2.entreprise)            <span class="cm"># TechCorp — non modifié</span>
<span class="fn">print</span>(Employe.entreprise)       <span class="cm"># TechCorp — classe non modifiée</span></code></pre>
        </div>

        <h3>Méthodes d'instance</h3>
        <p>Les méthodes sont des fonctions définies dans une classe. Les <strong>méthodes d'instance</strong> reçoivent <code>self</code> comme premier paramètre. Elles peuvent accéder et modifier les attributs de l'instance.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">CompteBancaire</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, proprietaire, solde_initial=<span class="num">0</span>):
        self.proprietaire = proprietaire
        self._solde = solde_initial   <span class="cm"># _ = convention "privé"</span>
        self._historique = []

    <span class="kw">def</span> <span class="fn">deposer</span>(self, montant):
        <span class="str">"""Dépose un montant sur le compte."""</span>
        <span class="kw">if</span> montant &lt;= <span class="num">0</span>:
            <span class="kw">raise</span> ValueError(<span class="str">"Le montant doit être positif"</span>)
        self._solde += montant
        self._historique.append(<span class="str">f"+{montant}€"</span>)
        <span class="kw">return</span> self  <span class="cm"># method chaining</span>

    <span class="kw">def</span> <span class="fn">retirer</span>(self, montant):
        <span class="str">"""Retire un montant du compte."""</span>
        <span class="kw">if</span> montant &gt; self._solde:
            <span class="kw">raise</span> ValueError(<span class="str">"Solde insuffisant"</span>)
        self._solde -= montant
        self._historique.append(<span class="str">f"-{montant}€"</span>)
        <span class="kw">return</span> self

    @property
    <span class="kw">def</span> <span class="fn">solde</span>(self):
        <span class="kw">return</span> self._solde

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"Compte({self.proprietaire!r}, {self._solde}€)"</span>

<span class="cm"># Utilisation</span>
compte = <span class="fn">CompteBancaire</span>(<span class="str">"Alice"</span>, <span class="num">1000</span>)
compte.deposer(<span class="num">500</span>).retirer(<span class="num">200</span>)  <span class="cm"># method chaining</span>
<span class="fn">print</span>(compte.solde)    <span class="cm"># 1300</span>
<span class="fn">print</span>(compte)          <span class="cm"># Compte('Alice', 1300€)</span></code></pre>
        </div>

        <h3>Méthodes de classe et méthodes statiques</h3>
        <p>Python distingue trois types de méthodes : les méthodes d'instance (<code>self</code>), les méthodes de classe (<code>@classmethod</code>, reçoivent <code>cls</code>) et les méthodes statiques (<code>@staticmethod</code>, ne reçoivent ni <code>self</code> ni <code>cls</code>). Les méthodes de classe sont souvent utilisées comme constructeurs alternatifs.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">import</span> datetime

<span class="kw">class</span> <span class="fn">Date</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, jour, mois, annee):
        self.jour = jour
        self.mois = mois
        self.annee = annee

    @classmethod
    <span class="kw">def</span> <span class="fn">depuis_chaine</span>(cls, chaine):
        <span class="str">"""Constructeur alternatif depuis une chaîne 'JJ/MM/AAAA'."""</span>
        j, m, a = chaine.split(<span class="str">"/"</span>)
        <span class="kw">return</span> <span class="fn">cls</span>(<span class="fn">int</span>(j), <span class="fn">int</span>(m), <span class="fn">int</span>(a))

    @classmethod
    <span class="kw">def</span> <span class="fn">aujourd_hui</span>(cls):
        <span class="str">"""Retourne la date du jour."""</span>
        auj = datetime.date.today()
        <span class="kw">return</span> <span class="fn">cls</span>(auj.day, auj.month, auj.year)

    @staticmethod
    <span class="kw">def</span> <span class="fn">est_annee_bissextile</span>(annee):
        <span class="str">"""Vérifie si une année est bissextile (pas besoin de l'instance)."""</span>
        <span class="kw">return</span> annee % <span class="num">4</span> == <span class="num">0</span> <span class="kw">and</span> (annee % <span class="num">100</span> != <span class="num">0</span> <span class="kw">or</span> annee % <span class="num">400</span> == <span class="num">0</span>)

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"{self.jour:02d}/{self.mois:02d}/{self.annee}"</span>

<span class="cm"># Utilisation</span>
d1 = <span class="fn">Date</span>(<span class="num">25</span>, <span class="num">12</span>, <span class="num">2024</span>)          <span class="cm"># constructeur normal</span>
d2 = Date.depuis_chaine(<span class="str">"14/07/1789"</span>)  <span class="cm"># constructeur alternatif</span>
d3 = Date.aujourd_hui()                 <span class="cm"># constructeur "now"</span>

<span class="fn">print</span>(d1)  <span class="cm"># 25/12/2024</span>
<span class="fn">print</span>(d2)  <span class="cm"># 14/07/1789</span>
<span class="fn">print</span>(Date.est_annee_bissextile(<span class="num">2024</span>))  <span class="cm"># True</span></code></pre>
        </div>

        <h3>Properties — encapsulation élégante</h3>
        <p>Le décorateur <code>@property</code> transforme une méthode en attribut calculé. Il permet d'ajouter de la validation ou des calculs transparents, tout en conservant une syntaxe d'accès simple (<code>obj.attribut</code> au lieu de <code>obj.get_attribut()</code>).</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Cercle</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, rayon):
        self.rayon = rayon   <span class="cm"># déclenche le setter</span>

    @property
    <span class="kw">def</span> <span class="fn">rayon</span>(self):
        <span class="kw">return</span> self._rayon

    @rayon.setter
    <span class="kw">def</span> <span class="fn">rayon</span>(self, valeur):
        <span class="kw">if</span> valeur &lt; <span class="num">0</span>:
            <span class="kw">raise</span> ValueError(<span class="str">f"Rayon négatif interdit : {valeur}"</span>)
        self._rayon = valeur

    @property
    <span class="kw">def</span> <span class="fn">aire</span>(self):
        <span class="str">"""Attribut calculé — pas de setter."""</span>
        <span class="kw">import</span> math
        <span class="kw">return</span> math.pi * self._rayon ** <span class="num">2</span>

    @property
    <span class="kw">def</span> <span class="fn">diametre</span>(self):
        <span class="kw">return</span> self._rayon * <span class="num">2</span>

    @diametre.setter
    <span class="kw">def</span> <span class="fn">diametre</span>(self, valeur):
        self.rayon = valeur / <span class="num">2</span>  <span class="cm"># utilise le setter de rayon</span>

c = <span class="fn">Cercle</span>(<span class="num">5</span>)
<span class="fn">print</span>(c.rayon)    <span class="cm"># 5</span>
<span class="fn">print</span>(c.aire)     <span class="cm"># 78.53...</span>
c.diametre = <span class="num">20</span>
<span class="fn">print</span>(c.rayon)    <span class="cm"># 10</span>
<span class="cm"># c.rayon = -1  → ValueError !</span></code></pre>
        </div>

        <h3>Dataclasses — classes de données simplifiées</h3>
        <p>Python 3.7 a introduit le décorateur <code>@dataclass</code> qui génère automatiquement <code>__init__</code>, <code>__repr__</code> et <code>__eq__</code>. C'est idéal pour les classes dont le rôle principal est de stocker des données.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">from</span> dataclasses <span class="kw">import</span> dataclass, field

@dataclass
<span class="kw">class</span> <span class="fn">Produit</span>:
    nom: <span class="fn">str</span>
    prix: <span class="fn">float</span>
    stock: <span class="fn">int</span> = <span class="num">0</span>
    tags: <span class="fn">list</span> = field(default_factory=<span class="fn">list</span>)

<span class="cm"># Python génère __init__, __repr__, __eq__ automatiquement</span>
p1 = <span class="fn">Produit</span>(<span class="str">"Clavier"</span>, <span class="num">79.99</span>, <span class="num">5</span>)
p2 = <span class="fn">Produit</span>(<span class="str">"Clavier"</span>, <span class="num">79.99</span>, <span class="num">5</span>)

<span class="fn">print</span>(p1)         <span class="cm"># Produit(nom='Clavier', prix=79.99, stock=5, tags=[])</span>
<span class="fn">print</span>(p1 == p2)   <span class="cm"># True — comparaison par valeur</span>
<span class="fn">print</span>(p1 <span class="kw">is</span> p2)   <span class="cm"># False — objets différents</span>

<span class="cm"># Dataclass frozen (immuable)</span>
@dataclass(frozen=<span class="kw">True</span>)
<span class="kw">class</span> <span class="fn">PointFige</span>:
    x: <span class="fn">float</span>
    y: <span class="fn">float</span>

pt = <span class="fn">PointFige</span>(<span class="num">3.0</span>, <span class="num">4.0</span>)
<span class="cm"># pt.x = 5  → FrozenInstanceError !</span>
<span class="fn">print</span>(<span class="fn">hash</span>(pt))  <span class="cm"># hashable car frozen — peut servir de clé de dict</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Une classe = une responsabilité :</strong> suivez le principe SRP (Single Responsibility Principle). Une classe ne devrait avoir qu'une seule raison de changer.</li>
          <li><strong>__repr__ :</strong> définissez toujours <code>__repr__</code> pour un affichage utile en débogage. Il doit idéalement permettre de recréer l'objet.</li>
          <li><strong>Properties plutôt que getters/setters :</strong> Python n'a pas besoin de <code>getNom()</code> / <code>setNom()</code> — utilisez <code>@property</code> quand vous avez besoin de validation.</li>
          <li><strong>Dataclasses :</strong> pour les classes de données simples, <code>@dataclass</code> évite le code répétitif et est plus expressif qu'un <code>__init__</code> manuel.</li>
          <li><strong>Attributs de classe partagés :</strong> faites attention avec les attributs de classe mutables (listes, dicts) — ils sont partagés entre toutes les instances.</li>
          <li><strong>Convention _ :</strong> préfixez les attributs "privés" avec <code>_</code> (convention) ou <code>__</code> (name mangling réel) pour signaler qu'ils ne sont pas part de l'API publique.</li>
        </ul>
      </div>
    </section>
    """

# ============================================================
# poo/heritage — enriched
# ============================================================
HERITAGE_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Héritage simple, super(), MRO, héritage multiple et composition</p></div></div>
      <div class="course-content">
        <h3>Héritage simple</h3>
        <p>L'<strong>héritage</strong> est le mécanisme par lequel une classe (<em>sous-classe</em> ou <em>classe dérivée</em>) hérite des attributs et méthodes d'une autre classe (<em>classe parente</em> ou <em>classe de base</em>). En Python, toutes les classes héritent implicitement de <code>object</code>. L'héritage favorise la réutilisation du code et la spécialisation.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Classe de base</span>
<span class="kw">class</span> <span class="fn">Animal</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom, poids):
        self.nom = nom
        self.poids = poids

    <span class="kw">def</span> <span class="fn">manger</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.nom} mange"</span>)

    <span class="kw">def</span> <span class="fn">respirer</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.nom} respire"</span>)

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"{type(self).__name__}({self.nom!r})"</span>

<span class="cm"># Sous-classe — hérite de Animal</span>
<span class="kw">class</span> <span class="fn">Chien</span>(Animal):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom, poids, race):
        super().__init__(nom, poids)   <span class="cm"># appel du constructeur parent</span>
        self.race = race

    <span class="kw">def</span> <span class="fn">aboyer</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.nom} dit : Ouaf !"</span>)

<span class="kw">class</span> <span class="fn">Chat</span>(Animal):
    <span class="kw">def</span> <span class="fn">miauler</span>(self):
        <span class="fn">print</span>(<span class="str">f"{self.nom} dit : Miaou !"</span>)

rex = <span class="fn">Chien</span>(<span class="str">"Rex"</span>, <span class="num">30</span>, <span class="str">"Labrador"</span>)
minou = <span class="fn">Chat</span>(<span class="str">"Minou"</span>, <span class="num">4</span>)

rex.manger()    <span class="cm"># héritée — "Rex mange"</span>
rex.aboyer()    <span class="cm"># spécifique — "Rex dit : Ouaf !"</span>
minou.respirer() <span class="cm"># héritée</span>

<span class="cm"># Vérifications de la hiérarchie</span>
<span class="fn">print</span>(<span class="fn">isinstance</span>(rex, Chien))   <span class="cm"># True</span>
<span class="fn">print</span>(<span class="fn">isinstance</span>(rex, Animal))  <span class="cm"># True — rex est aussi un Animal</span>
<span class="fn">print</span>(<span class="fn">issubclass</span>(Chien, Animal)) <span class="cm"># True</span></code></pre>
        </div>

        <h3>La fonction super()</h3>
        <p><code>super()</code> retourne un proxy vers la classe parente. Il est indispensable pour appeler les méthodes de la classe parente, en particulier <code>__init__</code>. L'utilisation de <code>super()</code> est plus robuste que d'appeler directement <code>ParentClass.method(self)</code> car elle fonctionne correctement avec l'héritage multiple.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Vehicule</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, marque, annee):
        self.marque = marque
        self.annee = annee
        self.en_marche = <span class="kw">False</span>

    <span class="kw">def</span> <span class="fn">demarrer</span>(self):
        self.en_marche = <span class="kw">True</span>
        <span class="fn">print</span>(<span class="str">f"{self.marque} démarré"</span>)

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"{type(self).__name__}({self.marque}, {self.annee})"</span>

<span class="kw">class</span> <span class="fn">Voiture</span>(Vehicule):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, marque, annee, nb_portes=<span class="num">4</span>):
        super().__init__(marque, annee)   <span class="cm"># initialise Vehicule</span>
        self.nb_portes = nb_portes

<span class="kw">class</span> <span class="fn">VoitureElectrique</span>(Voiture):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, marque, annee, autonomie):
        super().__init__(marque, annee)   <span class="cm"># initialise Voiture</span>
        self.autonomie = autonomie

    <span class="kw">def</span> <span class="fn">demarrer</span>(self):
        super().demarrer()               <span class="cm"># appelle Voiture.demarrer (→ Vehicule)</span>
        <span class="fn">print</span>(<span class="str">"Mode silencieux activé"</span>)

tesla = <span class="fn">VoitureElectrique</span>(<span class="str">"Tesla"</span>, <span class="num">2024</span>, <span class="num">500</span>)
tesla.demarrer()
<span class="cm"># Tesla démarré</span>
<span class="cm"># Mode silencieux activé</span>

<span class="fn">print</span>(tesla.marque)      <span class="cm"># Tesla</span>
<span class="fn">print</span>(tesla.nb_portes)   <span class="cm"># 4 (défaut de Voiture)</span>
<span class="fn">print</span>(tesla.autonomie)   <span class="cm"># 500</span></code></pre>
        </div>

        <h3>Redéfinition de méthodes (override)</h3>
        <p>Une sous-classe peut <strong>redéfinir</strong> (override) n'importe quelle méthode héritée. La version de la sous-classe remplace celle de la classe parente pour les instances de la sous-classe. C'est le mécanisme fondamental du <strong>polymorphisme</strong>.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">class</span> <span class="fn">Forme</span>:
    <span class="kw">def</span> <span class="fn">aire</span>(self):
        <span class="kw">raise</span> NotImplementedError(<span class="str">"Sous-classe doit implémenter aire()"</span>)

    <span class="kw">def</span> <span class="fn">perimetre</span>(self):
        <span class="kw">raise</span> NotImplementedError(<span class="str">"Sous-classe doit implémenter perimetre()"</span>)

    <span class="kw">def</span> <span class="fn">description</span>(self):
        <span class="kw">return</span> <span class="str">f"{type(self).__name__}: aire={self.aire():.2f}, périmètre={self.perimetre():.2f}"</span>

<span class="kw">import</span> math

<span class="kw">class</span> <span class="fn">Cercle</span>(Forme):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, rayon):
        self.rayon = rayon

    <span class="kw">def</span> <span class="fn">aire</span>(self):           <span class="cm"># override</span>
        <span class="kw">return</span> math.pi * self.rayon ** <span class="num">2</span>

    <span class="kw">def</span> <span class="fn">perimetre</span>(self):     <span class="cm"># override</span>
        <span class="kw">return</span> <span class="num">2</span> * math.pi * self.rayon

<span class="kw">class</span> <span class="fn">Rectangle</span>(Forme):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, largeur, hauteur):
        self.largeur = largeur
        self.hauteur = hauteur

    <span class="kw">def</span> <span class="fn">aire</span>(self):
        <span class="kw">return</span> self.largeur * self.hauteur

    <span class="kw">def</span> <span class="fn">perimetre</span>(self):
        <span class="kw">return</span> <span class="num">2</span> * (self.largeur + self.hauteur)

formes = [<span class="fn">Cercle</span>(<span class="num">5</span>), <span class="fn">Rectangle</span>(<span class="num">4</span>, <span class="num">6</span>), <span class="fn">Cercle</span>(<span class="num">3</span>)]
<span class="kw">for</span> forme <span class="kw">in</span> formes:
    <span class="fn">print</span>(forme.description())
<span class="cm"># Cercle: aire=78.54, périmètre=31.42</span>
<span class="cm"># Rectangle: aire=24.00, périmètre=20.00</span>
<span class="cm"># Cercle: aire=28.27, périmètre=18.85</span></code></pre>
        </div>

        <h3>Héritage multiple et le MRO</h3>
        <p>Python supporte l'<strong>héritage multiple</strong> : une classe peut hériter de plusieurs classes parentes. Le <strong>MRO</strong> (Method Resolution Order) définit l'ordre dans lequel Python cherche les méthodes. Python utilise l'algorithme C3 (linéarisation C3) pour calculer cet ordre. <code>ClassName.__mro__</code> affiche l'ordre.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># Héritage multiple</span>
<span class="kw">class</span> <span class="fn">Voler</span>:
    <span class="kw">def</span> <span class="fn">se_deplacer</span>(self):
        <span class="kw">return</span> <span class="str">"vole"</span>

    <span class="kw">def</span> <span class="fn">description</span>(self):
        <span class="kw">return</span> <span class="str">"Je peux voler"</span>

<span class="kw">class</span> <span class="fn">Nager</span>:
    <span class="kw">def</span> <span class="fn">se_deplacer</span>(self):
        <span class="kw">return</span> <span class="str">"nage"</span>

    <span class="kw">def</span> <span class="fn">description</span>(self):
        <span class="kw">return</span> <span class="str">"Je peux nager"</span>

<span class="kw">class</span> <span class="fn">Canard</span>(Voler, Nager):  <span class="cm"># hérite des deux</span>
    <span class="kw">def</span> <span class="fn">cancaner</span>(self):
        <span class="kw">return</span> <span class="str">"Coin coin !"</span>

donald = <span class="fn">Canard</span>()
<span class="fn">print</span>(donald.se_deplacer())   <span class="cm"># "vole" — Voler vient en premier dans MRO</span>
<span class="fn">print</span>(donald.description())   <span class="cm"># "Je peux voler"</span>

<span class="cm"># MRO — ordre de recherche des méthodes</span>
<span class="fn">print</span>(Canard.__mro__)
<span class="cm"># (&lt;class 'Canard'&gt;, &lt;class 'Voler'&gt;, &lt;class 'Nager'&gt;, &lt;class 'object'&gt;)</span>

<span class="cm"># Mixins — classes légères pour ajouter des fonctionnalités</span>
<span class="kw">class</span> <span class="fn">SerializableMixin</span>:
    <span class="str">"""Mixin pour sérialiser en JSON."""</span>
    <span class="kw">def</span> <span class="fn">to_json</span>(self):
        <span class="kw">import</span> json
        <span class="kw">return</span> json.dumps(self.__dict__)

<span class="kw">class</span> <span class="fn">TimestampMixin</span>:
    <span class="str">"""Mixin pour ajouter des timestamps."""</span>
    <span class="kw">import</span> datetime
    created_at = <span class="kw">None</span>

    <span class="kw">def</span> <span class="fn">__init_subclass__</span>(cls, **kwargs):
        super().__init_subclass__(**kwargs)

<span class="kw">class</span> <span class="fn">Utilisateur</span>(SerializableMixin):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nom, email):
        self.nom = nom
        self.email = email

u = <span class="fn">Utilisateur</span>(<span class="str">"Alice"</span>, <span class="str">"alice@example.com"</span>)
<span class="fn">print</span>(u.to_json())
<span class="cm"># {"nom": "Alice", "email": "alice@example.com"}</span></code></pre>
        </div>

        <h3>Classes abstraites</h3>
        <p>Le module <code>abc</code> permet de définir des <strong>classes abstraites</strong> : des classes qui ne peuvent pas être instanciées directement et qui définissent une interface obligatoire pour les sous-classes. C'est une forme de contrat : toute sous-classe doit implémenter les méthodes abstraites.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="kw">from</span> abc <span class="kw">import</span> ABC, abstractmethod

<span class="kw">class</span> <span class="fn">Forme</span>(ABC):
    @abstractmethod
    <span class="kw">def</span> <span class="fn">aire</span>(self) -> <span class="fn">float</span>:
        <span class="str">"""Calcule l'aire de la forme."""</span>
        ...

    @abstractmethod
    <span class="kw">def</span> <span class="fn">perimetre</span>(self) -> <span class="fn">float</span>:
        <span class="str">"""Calcule le périmètre."""</span>
        ...

    <span class="kw">def</span> <span class="fn">comparer_aires</span>(self, autre):
        <span class="str">"""Méthode non-abstraite — utilise les abstraites."""</span>
        <span class="kw">return</span> self.aire() &gt; autre.aire()

<span class="cm"># Impossible d'instancier directement :</span>
<span class="cm"># Forme()  → TypeError: Can't instantiate abstract class</span>

<span class="cm"># Les sous-classes DOIVENT implémenter les méthodes abstraites</span>
<span class="kw">class</span> <span class="fn">CarreABC</span>(Forme):
    <span class="kw">def</span> <span class="fn">__init__</span>(self, cote):
        self.cote = cote

    <span class="kw">def</span> <span class="fn">aire</span>(self):            <span class="cm"># obligatoire</span>
        <span class="kw">return</span> self.cote ** <span class="num">2</span>

    <span class="kw">def</span> <span class="fn">perimetre</span>(self):       <span class="cm"># obligatoire</span>
        <span class="kw">return</span> <span class="num">4</span> * self.cote

c = <span class="fn">CarreABC</span>(<span class="num">5</span>)  <span class="cm"># ✓ OK — toutes les méthodes abstraites implémentées</span>
<span class="fn">print</span>(c.aire())      <span class="cm"># 25</span></code></pre>
        </div>

        <h3>Héritage vs composition</h3>
        <p>L'héritage modélise une relation <em>"est un"</em> (un Chien est un Animal). La <strong>composition</strong> modélise une relation <em>"a un"</em> (une Voiture a un Moteur). La composition est souvent préférée à l'héritage car elle est plus flexible, moins couplée et plus facile à tester.</p>
        <div class="code-block">
          <div class="code-header"><span class="code-lang">Python</span></div>
          <pre><code><span class="cm"># ❌ Héritage inapproprié — Stack n'est PAS une liste</span>
<span class="kw">class</span> <span class="fn">StackMauvaise</span>(<span class="fn">list</span>):
    <span class="kw">def</span> <span class="fn">push</span>(self, item): self.append(item)
    <span class="kw">def</span> <span class="fn">pop_top</span>(self): <span class="kw">return</span> super().pop()
    <span class="cm"># Problème : expose toute l'API list (insert, sort, remove...)</span>
    <span class="cm"># L'utilisateur peut casser l'invariant de la pile</span>

<span class="cm"># ✓ Composition — Stack CONTIENT une liste</span>
<span class="kw">class</span> <span class="fn">Stack</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self):
        self._elements = []   <span class="cm"># composition</span>

    <span class="kw">def</span> <span class="fn">push</span>(self, item):
        self._elements.append(item)

    <span class="kw">def</span> <span class="fn">pop</span>(self):
        <span class="kw">if</span> <span class="kw">not</span> self._elements:
            <span class="kw">raise</span> IndexError(<span class="str">"pile vide"</span>)
        <span class="kw">return</span> self._elements.pop()

    <span class="kw">def</span> <span class="fn">peek</span>(self):
        <span class="kw">return</span> self._elements[-<span class="num">1</span>]

    <span class="kw">def</span> <span class="fn">__len__</span>(self):
        <span class="kw">return</span> <span class="fn">len</span>(self._elements)

    <span class="kw">def</span> <span class="fn">__repr__</span>(self):
        <span class="kw">return</span> <span class="str">f"Stack({self._elements})"</span>

s = <span class="fn">Stack</span>()
s.push(<span class="num">1</span>); s.push(<span class="num">2</span>); s.push(<span class="num">3</span>)
<span class="fn">print</span>(s.pop())   <span class="cm"># 3</span>
<span class="fn">print</span>(s.peek())  <span class="cm"># 2</span></code></pre>
        </div>

        <h3>Bonnes pratiques</h3>
        <ul>
          <li><strong>Toujours appeler super().__init__() :</strong> pour garantir que la chaîne d'initialisation est complète, surtout avec l'héritage multiple.</li>
          <li><strong>Liskov Substitution Principle :</strong> une sous-classe doit être utilisable partout où la classe parente est attendue, sans changer le comportement observable.</li>
          <li><strong>Préférer la composition :</strong> si la relation n'est pas clairement "est un", utilisez la composition plutôt que l'héritage.</li>
          <li><strong>Mixins pour les fonctionnalités :</strong> créez des petites classes Mixin pour les fonctionnalités transversales (sérialisation, logging) — c'est plus maintenable que des classes parentes lourdes.</li>
          <li><strong>Classes abstraites :</strong> utilisez <code>ABC</code> pour définir des interfaces explicites — cela documente l'API obligatoire et détecte les oublis à l'instantiation.</li>
          <li><strong>Éviter l'héritage profond :</strong> plus de 3-4 niveaux d'héritage rendent le code difficile à comprendre. Préférez la composition.</li>
        </ul>
      </div>
    </section>
    """

# Apply enrichments
articles = {
    'poo/classes': CLASSES_CONTENU,
    'poo/heritage': HERITAGE_CONTENU,
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

# Verify JSON validity and final lengths
with open(JSON_PATH, 'r', encoding='utf-8') as f:
    check = json.load(f)

print("\nFinal lesson lengths:")
for key, page in sorted(check['pages'].items(), key=lambda x: len(x[1].get('content', ''))):
    if page.get('type') == 'lesson':
        print(f"  {key}: {len(page['content'])} chars")
