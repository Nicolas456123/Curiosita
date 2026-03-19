#!/usr/bin/env python3
"""Enrich discrete mathematics articles in maths.json"""
import json, sys

with open('assets/content/maths.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# CRYPTOGRAPHIE
# ============================================================
crypto_intro = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>L\'art de protéger l\'information par les mathématiques</p>
        </div>
      </div>
      <p class="resume-text">La <strong>cryptographie</strong> est la science du secret : elle conçoit des méthodes pour chiffrer des messages afin que seul leur destinataire légitime puisse les lire. Depuis les substitutions de César jusqu\'au chiffrement RSA et aux courbes elliptiques, la cryptographie repose sur des structures mathématiques profondes — arithmétique modulaire, théorie des nombres, algèbre.</p>
      <div class="highlight-box">
        <p><strong>Enjeu contemporain :</strong> chaque connexion HTTPS, chaque paiement en ligne, chaque message WhatsApp est protégé par des algorithmes cryptographiques. La cryptographie est le fondement invisible de la confiance numérique.</p>
      </div>
      <p class="resume-text">Ce cours couvre les grandes familles de chiffrement — symétrique et asymétrique — les algorithmes phares (César, Vigenère, RSA, courbes elliptiques), les notions de clé, de sécurité informatique-théorique versus computationnelle, et les applications modernes.</p>
    </section>'''

crypto_contenu = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Cryptographie — du chiffre de César à RSA</p>
        </div>
      </div>
      <div class="course-content">
<h3>Vocabulaire fondamental</h3>
<p>En cryptographie, le message original s\'appelle le <strong>texte clair</strong> (plaintext) et le message transformé s\'appelle le <strong>texte chiffré</strong> (ciphertext). L\'opération qui transforme l\'un en l\'autre est le <strong>chiffrement</strong> ; l\'opération inverse est le <strong>déchiffrement</strong>. Une <strong>clé</strong> est un paramètre secret qui contrôle le chiffrement.</p>
<p>On distingue deux grandes menaces : l\'<strong>écoute passive</strong> (Eve lit les messages) et l\'<strong>attaque active</strong> (Mallory modifie les messages). La cryptographie adresse principalement la confidentialité, mais aussi l\'intégrité et l\'authentification.</p>
<div class="highlight-box">
  <p><strong>Principe de Kerckhoffs (1883) :</strong> la sécurité d\'un système cryptographique ne doit reposer que sur le secret de la clé, jamais sur le secret de l\'algorithme. Un bon algorithme doit être publiquement analysable et résister même si l\'adversaire en connaît tous les détails.</p>
</div>

<h3>Chiffrement par substitution : César et Vigenère</h3>
<p>Le <strong>chiffre de César</strong> (utilisé par Jules César vers −50) décale chaque lettre de l\'alphabet d\'un nombre fixe k (la clé). Pour k = 3 : A→D, B→E, ..., Z→C. En numérotant les lettres de 0 à 25 :</p>
<p><strong>Chiffrement :</strong> c = (m + k) mod 26 &nbsp;&nbsp;&nbsp; <strong>Déchiffrement :</strong> m = (c − k) mod 26</p>
<p><strong>Exemple :</strong> chiffrer "BONJOUR" avec k = 5. B(1)→G, O(14)→T, N(13)→S, J(9)→O, O(14)→T, U(20)→Z, R(17)→W. Texte chiffré : "GTSTOZW".</p>
<p>Le chiffre de César est trivial à casser : il n\'y a que 25 clés possibles, une simple <strong>attaque par force brute</strong> suffit (on essaie les 25 décalages et on lit le premier texte qui a du sens).</p>
<p>Le <strong>chiffre de Vigenère</strong> (XVIe siècle) utilise un mot-clé répété. Si la clé est "CLÉ" (valeurs = 2, 11, 4), on décale successivement chaque lettre du message par 2, 11, 4, 2, 11, 4... Pendant trois siècles il fut réputé indéchiffrable — jusqu\'à l\'analyse de Kasiski (1863) qui exploite les répétitions du texte chiffré pour déduire la longueur de clé, puis applique l\'analyse de fréquences sur chaque sous-séquence.</p>
<div class="highlight-box">
  <p><strong>Analyse de fréquences :</strong> en français, la lettre E représente ~17% des occurrences. Dans un texte chiffré par substitution monoalphabétique, la lettre la plus fréquente correspond probablement à E. Cette attaque, décrite par Al-Kindi au IXe siècle, casse tous les chiffrements par substitution simple.</p>
</div>

<h3>Masque jetable (one-time pad) et secret parfait</h3>
<p>Le <strong>masque jetable</strong> de Vernam (1917) utilise une clé aléatoire de même longueur que le message, chaque bit du message étant combiné par l\'opération XOR (⊕) avec le bit correspondant de la clé :</p>
<p><strong>Chiffrement :</strong> c = m ⊕ k &nbsp;&nbsp;&nbsp; <strong>Déchiffrement :</strong> m = c ⊕ k</p>
<p>Shannon a prouvé en 1945 que le masque jetable offre un <strong>secret parfait</strong> : sans la clé, le texte chiffré ne révèle absolument rien sur le texte clair — chaque texte clair possible est équiprobable. Deux contraintes rendent ce système peu pratique :</p>
<ul>
  <li>La clé doit être <strong>aussi longue que le message</strong> (problème de distribution de la clé)</li>
  <li>La clé ne doit <strong>jamais être réutilisée</strong> — réutiliser une clé avec deux messages différents permet de les XOR ensemble et de récupérer des informations</li>
</ul>
<p>Ce système fut utilisé par les diplomates et espions (carnets à usage unique) pendant la guerre froide.</p>

<h3>Arithmétique modulaire — le langage de la cryptographie</h3>
<p>L\'arithmétique modulaire est l\'outil central de la cryptographie moderne. On note a ≡ b (mod n) si n divise (a − b). L\'anneau Z/nZ contient les classes de restes {0, 1, ..., n−1} avec les opérations usuelles.</p>
<p><strong>Propriétés fondamentales :</strong></p>
<ul>
  <li>(a + b) mod n = ((a mod n) + (b mod n)) mod n</li>
  <li>(a × b) mod n = ((a mod n) × (b mod n)) mod n</li>
  <li>L\'<strong>exponentiation modulaire</strong> a<sup>e</sup> mod n se calcule efficacement par l\'algorithme <em>square-and-multiply</em> en O(log e) multiplications modulaires</li>
</ul>
<p><strong>Petit théorème de Fermat :</strong> si p est premier et pgcd(a, p) = 1, alors a<sup>p−1</sup> ≡ 1 (mod p).</p>
<p><strong>Indicatrice d\'Euler φ(n) :</strong> φ(n) compte les entiers entre 1 et n qui sont premiers avec n. Pour p premier : φ(p) = p−1. Pour n = p×q (produit de deux premiers distincts) : φ(n) = (p−1)(q−1). Théorème d\'Euler : a<sup>φ(n)</sup> ≡ 1 (mod n) si pgcd(a,n) = 1.</p>
<div class="highlight-box">
  <p><strong>Difficulté de factorisation :</strong> multiplier deux grands premiers p et q pour obtenir n = p×q est instantané. En revanche, retrouver p et q à partir de n seul (factorisation) est computationnellement très difficile pour de grands n — la meilleure méthode connue (crible algébrique des corps de nombres) demande un temps sous-exponentiel mais surpolynomial. C\'est le fondement de la sécurité de RSA.</p>
</div>

<h3>RSA : chiffrement à clé publique</h3>
<p>Rivest, Shamir et Adleman ont inventé RSA en 1977 — le premier système de chiffrement à <strong>clé publique</strong> pratique. L\'idée révolutionnaire : Alice publie une clé publique (connue de tous) et garde secrète une clé privée. N\'importe qui peut chiffrer un message pour Alice avec sa clé publique, mais seule Alice peut déchiffrer.</p>
<p><strong>Génération des clés RSA :</strong></p>
<ol>
  <li>Choisir deux grands nombres premiers distincts p et q (typiquement 1024 bits chacun)</li>
  <li>Calculer n = p × q (le <strong>module RSA</strong>)</li>
  <li>Calculer φ(n) = (p−1)(q−1)</li>
  <li>Choisir e tel que 1 &lt; e &lt; φ(n) et pgcd(e, φ(n)) = 1 (souvent e = 65537 = 2<sup>16</sup>+1)</li>
  <li>Calculer d = e<sup>−1</sup> mod φ(n) via l\'algorithme d\'Euclide étendu</li>
  <li><strong>Clé publique :</strong> (n, e) &nbsp;&nbsp;&nbsp; <strong>Clé privée :</strong> (n, d)</li>
</ol>
<p><strong>Chiffrement :</strong> c = m<sup>e</sup> mod n &nbsp;&nbsp;&nbsp; <strong>Déchiffrement :</strong> m = c<sup>d</sup> mod n</p>
<p><strong>Justification mathématique :</strong> c<sup>d</sup> = (m<sup>e</sup>)<sup>d</sup> = m<sup>ed</sup> mod n. Puisque ed ≡ 1 (mod φ(n)), on a ed = 1 + k·φ(n). Par le théorème d\'Euler : m<sup>ed</sup> = m · (m<sup>φ(n)</sup>)<sup>k</sup> ≡ m · 1 = m (mod n).</p>
<div class="highlight-box">
  <p><strong>Exemple numérique simplifié :</strong> p = 11, q = 13, n = 143, φ(n) = 120. Choix e = 7 (pgcd(7,120)=1). Calcul de d : 7×103 = 721 = 6×120+1, donc d = 103. Pour chiffrer m = 9 : c = 9<sup>7</sup> mod 143 = 48. Déchiffrement : 48<sup>103</sup> mod 143 = 9. En pratique, n est de 2048 ou 4096 bits.</p>
</div>

<h3>Échange de clés Diffie-Hellman</h3>
<p>Avant la cryptographie asymétrique, un problème fondamental existait : comment deux personnes qui ne se sont jamais rencontrées peuvent-elles partager un secret sur un canal public surveillé ? Diffie et Hellman ont résolu ce problème en 1976 avec un protocole élégant.</p>
<p><strong>Protocole DH :</strong> Alice et Bob se mettent d\'accord publiquement sur un grand premier p et un générateur g de (Z/pZ)*. Ensuite :</p>
<ul>
  <li>Alice choisit secrètement a, calcule A = g<sup>a</sup> mod p, et envoie A (public)</li>
  <li>Bob choisit secrètement b, calcule B = g<sup>b</sup> mod p, et envoie B (public)</li>
  <li>Alice calcule K = B<sup>a</sup> mod p = g<sup>ab</sup> mod p</li>
  <li>Bob calcule K = A<sup>b</sup> mod p = g<sup>ab</sup> mod p</li>
</ul>
<p>Ils partagent le secret K = g<sup>ab</sup> mod p. L\'attaquant connaît g, p, A = g<sup>a</sup>, B = g<sup>b</sup>, mais doit résoudre le <strong>problème du logarithme discret</strong> (trouver a tel que g<sup>a</sup> ≡ A mod p) pour obtenir K — ce qui est computationnellement difficile pour de grands p.</p>

<h3>Cryptographie sur courbes elliptiques (ECC)</h3>
<p>Une <strong>courbe elliptique</strong> sur un corps fini F<sub>p</sub> est une courbe de la forme :</p>
<p><strong>y² ≡ x³ + ax + b (mod p)</strong>, avec 4a³ + 27b² ≢ 0 (mod p)</p>
<p>Les points de cette courbe forment un <strong>groupe abélien</strong> sous une loi d\'addition géométrique : pour additionner deux points P et Q, on tire la droite (PQ), on trouve son troisième point d\'intersection avec la courbe, et on prend son symétrique par rapport à l\'axe des x.</p>
<p>Le <strong>problème du logarithme discret elliptique</strong> (ECDLP) — étant donné P et Q = kP, trouver k — est encore plus difficile que le DLP classique. Cela permet des clés bien plus courtes pour le même niveau de sécurité.</p>
<div class="highlight-box">
  <p><strong>Comparaison de sécurité :</strong> RSA 2048 bits ≈ ECC 224 bits ≈ AES 112 bits (tous offrent ~112 bits de sécurité). La courbe secp256k1 (utilisée dans Bitcoin) a l\'équation y² = x³ + 7 sur un corps premier de 256 bits.</p>
</div>

<h3>Fonctions de hachage cryptographiques</h3>
<p>Une <strong>fonction de hachage</strong> h transforme une entrée de taille arbitraire en un résumé de taille fixe (le <strong>hash</strong> ou <strong>empreinte</strong>). Trois propriétés sont requises :</p>
<ul>
  <li><strong>Résistance aux préimages :</strong> connaissant h(m), impossible de retrouver m</li>
  <li><strong>Résistance aux secondes préimages :</strong> connaissant m, impossible de trouver m\' ≠ m tel que h(m\') = h(m)</li>
  <li><strong>Résistance aux collisions :</strong> impossible de trouver (m, m\') avec m ≠ m\' et h(m) = h(m\')</li>
</ul>
<p><strong>Algorithmes phares :</strong> SHA-256 (produit un hash de 256 bits, pilier de Bitcoin), SHA-3 / Keccak (structure en éponge, adoptée par NIST en 2015), BLAKE3 (très rapide). MD5 et SHA-1 sont <strong>cassés</strong> — des collisions pratiques ont été démontrées (SHAttered, 2017 pour SHA-1).</p>
<p><strong>Applications :</strong> vérification d\'intégrité des téléchargements, stockage des mots de passe (avec sel aléatoire + algorithme lent comme bcrypt/Argon2), signatures numériques, preuve de travail dans les blockchains.</p>

<h3>Signatures numériques et infrastructure de confiance</h3>
<p>Une <strong>signature numérique</strong> prouve qu\'un document provient bien d\'un signataire donné et qu\'il n\'a pas été modifié. Avec RSA, Alice signe un message m :</p>
<ul>
  <li>Alice calcule h = SHA-256(m) puis s = h<sup>d</sup> mod n (clé privée)</li>
  <li>Bob vérifie : h\' = s<sup>e</sup> mod n (clé publique d\'Alice) et compare h\' avec SHA-256(m)</li>
</ul>
<p>La <strong>PKI</strong> (Infrastructure à Clés Publiques) organise la chaîne de confiance : des <strong>autorités de certification</strong> (CA) délivrent des certificats X.509 liant une clé publique à une identité. Votre navigateur contient ~100-150 CA racines de confiance pré-installées.</p>
<div class="highlight-box">
  <p><strong>TLS 1.3 (HTTPS) :</strong> au début d\'une connexion, le serveur présente son certificat (signé par une CA). Le navigateur vérifie la signature, puis les deux parties s\'accordent sur une clé de session via ECDH (Diffie-Hellman sur courbes elliptiques). Les données sont chiffrées avec AES-256-GCM. Authentification ECC + chiffrement AES + intégrité HMAC.</p>
</div>

<h3>AES : le chiffrement symétrique standard</h3>
<p>L\'<strong>AES</strong> (Advanced Encryption Standard), standardisé par le NIST en 2001, est le chiffrement symétrique le plus utilisé au monde. Il opère sur des blocs de 128 bits avec des clés de 128, 192 ou 256 bits.</p>
<p>AES est un <strong>réseau de substitution-permutation</strong>. Chaque round (10 pour AES-128) comprend 4 transformations appliquées à une matrice d\'état 4×4 octets :</p>
<ul>
  <li><strong>SubBytes :</strong> substitution non-linéaire via une S-box (assure la confusion)</li>
  <li><strong>ShiftRows :</strong> décalage circulaire des lignes de la matrice</li>
  <li><strong>MixColumns :</strong> multiplication matricielle dans GF(2⁸) (assure la diffusion)</li>
  <li><strong>AddRoundKey :</strong> XOR avec la sous-clé du round dérivée de la clé principale</li>
</ul>
<p>Aucune attaque pratique sur AES complet n\'est connue. La résistance aux attaques par canaux auxiliaires (timing, consommation électrique) est un enjeu majeur pour les implémentations matérielles.</p>

<h3>Cryptographie post-quantique</h3>
<p>L\'<strong>algorithme de Shor</strong> (1994) permet à un ordinateur quantique de factoriser n = p×q et de résoudre le logarithme discret en temps polynomial — cassant ainsi RSA, Diffie-Hellman et ECC. L\'<strong>algorithme de Grover</strong> accélère la recherche brute force (racine carrée), réduisant de moitié la sécurité des fonctions de hachage et d\'AES.</p>
<p>Le NIST a standardisé en 2024 plusieurs algorithmes résistants aux ordinateurs quantiques :</p>
<ul>
  <li><strong>ML-KEM</strong> (ex-CRYSTALS-Kyber) : chiffrement basé sur les réseaux euclidiens</li>
  <li><strong>ML-DSA</strong> (ex-CRYSTALS-Dilithium) : signatures numériques sur réseaux</li>
  <li><strong>SLH-DSA</strong> (ex-SPHINCS+) : signatures basées sur les fonctions de hachage</li>
</ul>
<div class="highlight-box">
  <p><strong>Learning With Errors (LWE) :</strong> la sécurité de ML-KEM repose sur ce problème : étant donné une matrice aléatoire A et b = As + e mod q (où s est un secret et e un bruit), retrouver s. Ce problème est difficile même pour un ordinateur quantique — il est lié à des problèmes de réseaux euclidiens (trouver le plus court vecteur) réputés quantiquement résistants.</p>
</div>

<h3>Applications et enjeux sociétaux</h3>
<p>La cryptographie est omniprésente dans l\'infrastructure numérique mondiale :</p>
<ul>
  <li><strong>HTTPS/TLS :</strong> confidentialité des connexions web (~95% du trafic en 2024)</li>
  <li><strong>Messageries :</strong> Signal, WhatsApp utilisent le protocole Signal (Double Ratchet + X3DH pour la forward secrecy)</li>
  <li><strong>Bitcoin :</strong> ECDSA sur secp256k1 + SHA-256 pour valider les transactions et miner des blocs</li>
  <li><strong>Passeports biométriques :</strong> signature RSA ou ECC des données biométriques</li>
  <li><strong>Vote électronique :</strong> protocoles de vote homomorphique (encore expérimentaux)</li>
</ul>
<p>Les <strong>enjeux politiques</strong> sont intenses : backdoors (portes dérobées exigées par les gouvernements pour la surveillance), lois d\'export sur la cryptographie forte, conflit entre vie privée et sécurité nationale. La cryptographie "de bout en bout" est qualifiée par certains gouvernements de menace à la sécurité publique, par les défenseurs des libertés civiles de droit fondamental.</p>
      </div>
    </section>'''

# Rebuild cryptographie content
full_content = pages['discretes/cryptographie']['content']
quiz_start = full_content.find('<section class="content-section" id="quiz">')
tail = full_content[quiz_start:] if quiz_start != -1 else ''

new_content = crypto_intro + '\n\n    ' + crypto_contenu
if tail:
    new_content += '\n\n    ' + tail

pages['discretes/cryptographie']['content'] = new_content
print(f'cryptographie updated: {len(new_content)} chars')

# ============================================================
# THÉORIE DES GRAPHES
# ============================================================
graphes_intro = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Modéliser les réseaux et les connexions</p>
        </div>
      </div>
      <p class="resume-text">La <strong>théorie des graphes</strong> est la branche des mathématiques discrètes qui étudie les <strong>graphes</strong> : des structures composées de <strong>sommets</strong> (nœuds) reliés par des <strong>arêtes</strong> (liens). Née avec le problème des sept ponts de Königsberg (Euler, 1736), elle modélise aujourd\'hui les réseaux sociaux, Internet, les molécules, les circuits électroniques et les algorithmes de navigation.</p>
      <div class="highlight-box">
        <p><strong>Omniprésence des graphes :</strong> Google Maps utilise des algorithmes de plus court chemin sur des graphes routiers ; Facebook modélise les amitiés comme un graphe ; les protéines interagissent selon un graphe d\'interactions. Comprendre les graphes, c\'est comprendre la structure des réseaux.</p>
      </div>
      <p class="resume-text">Ce cours couvre les définitions fondamentales, les propriétés de connexité et de chemin, les arbres, les graphes eulériens et hamiltoniens, les algorithmes de parcours et de plus court chemin, ainsi que les problèmes de coloration et le théorème des quatre couleurs.</p>
    </section>'''

graphes_contenu = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Graphes — structures, propriétés et algorithmes</p>
        </div>
      </div>
      <div class="course-content">
<h3>Définitions fondamentales</h3>
<p>Un <strong>graphe</strong> G = (V, E) est défini par un ensemble de <strong>sommets</strong> V (vertices) et un ensemble d\'<strong>arêtes</strong> E (edges), chaque arête reliant deux sommets. Si les arêtes ont un sens (flèches), on parle de <strong>graphe orienté</strong> (digraph) — les arêtes s\'appellent alors des <strong>arcs</strong>. Un graphe <strong>pondéré</strong> associe un poids (distance, coût) à chaque arête.</p>
<p>Le <strong>degré</strong> d(v) d\'un sommet v est le nombre d\'arêtes qui lui sont incidentes. Dans un graphe orienté, on distingue le <strong>degré entrant</strong> (arcs arrivant) et le <strong>degré sortant</strong> (arcs partant).</p>
<div class="highlight-box">
  <p><strong>Lemme des poignées de mains :</strong> dans tout graphe, la somme des degrés est égale au double du nombre d\'arêtes : Σ d(v) = 2|E|. Conséquence : dans tout graphe, le nombre de sommets de degré impair est pair.</p>
</div>
<p><strong>Vocabulaire :</strong> une <strong>chaîne</strong> (dans un graphe non orienté) est une suite de sommets consécutifs reliés par des arêtes. Un <strong>cycle</strong> est une chaîne fermée (même sommet de départ et d\'arrivée). Un graphe est <strong>connexe</strong> si tout sommet est accessible depuis tout autre sommet.</p>

<h3>Représentations d\'un graphe</h3>
<p>Deux représentations matricielles sont courantes :</p>
<ul>
  <li><strong>Matrice d\'adjacence :</strong> matrice n×n où l\'entrée (i,j) vaut 1 si les sommets i et j sont reliés (0 sinon). Avantage : tester une arête en O(1). Inconvénient : espace O(n²).</li>
  <li><strong>Liste d\'adjacence :</strong> pour chaque sommet, liste de ses voisins. Espace O(n + |E|), parcours efficace. Préférée pour les graphes creux (peu d\'arêtes).</li>
</ul>
<p><strong>Exemple :</strong> triangle K<sub>3</sub> (3 sommets, 3 arêtes). Matrice d\'adjacence : [[0,1,1],[1,0,1],[1,1,0]]. Liste : {1:[2,3], 2:[1,3], 3:[1,2]}.</p>

<h3>Chemins eulériens et hamiltoniens</h3>
<p>Euler (1736) a résolu le célèbre problème des <strong>sept ponts de Königsberg</strong> : peut-on traverser tous les ponts de la ville exactement une fois ? La réponse est non — ce problème a fondé la théorie des graphes.</p>
<p>Un <strong>chemin eulérien</strong> traverse chaque arête exactement une fois. Un graphe connexe admet un chemin eulérien si et seulement s\'il possède exactement 0 ou 2 sommets de degré impair (0 pour un cycle eulérien, 2 pour un chemin eulérien simple). Königsberg avait 4 sommets de degré impair — impossible.</p>
<p>Un <strong>cycle hamiltonien</strong> passe par chaque sommet exactement une fois. Contrairement aux cycles eulériens, il n\'existe pas de condition simple pour l\'existence d\'un cycle hamiltonien — le problème est NP-complet (problème du voyageur de commerce).</p>
<div class="highlight-box">
  <p><strong>Théorème de Dirac (1952) :</strong> si G est un graphe simple à n ≥ 3 sommets et si tout sommet a un degré ≥ n/2, alors G possède un cycle hamiltonien. Condition suffisante mais non nécessaire.</p>
</div>

<h3>Arbres et forêts</h3>
<p>Un <strong>arbre</strong> est un graphe connexe acyclique. Une <strong>forêt</strong> est un graphe acyclique (union d\'arbres). Les arbres jouent un rôle central en informatique (arbres binaires de recherche, tas, arbres syntaxiques).</p>
<p><strong>Propriétés équivalentes pour un graphe G à n sommets :</strong></p>
<ul>
  <li>G est un arbre</li>
  <li>G est connexe et possède exactement n−1 arêtes</li>
  <li>G est acyclique et possède exactement n−1 arêtes</li>
  <li>Il existe exactement un chemin entre toute paire de sommets</li>
</ul>
<p>Un <strong>arbre couvrant</strong> d\'un graphe G est un sous-graphe qui est un arbre et qui contient tous les sommets de G. L\'<strong>arbre couvrant minimal</strong> (minimum spanning tree) minimise la somme des poids des arêtes — calculé par les algorithmes de Kruskal ou de Prim.</p>

<h3>Parcours de graphes : BFS et DFS</h3>
<p>Deux algorithmes fondamentaux permettent d\'explorer un graphe :</p>
<p><strong>BFS (Breadth-First Search — parcours en largeur) :</strong> explore les sommets par couches, en partant d\'un sommet source. Utilise une file (FIFO). Propriété clé : BFS calcule les plus courts chemins (en nombre d\'arêtes) depuis la source. Complexité : O(V + E).</p>
<p><strong>DFS (Depth-First Search — parcours en profondeur) :</strong> s\'enfonce aussi loin que possible avant de revenir. Utilise une pile (LIFO) ou la récursion. Applications : détection de cycles, tri topologique, composantes fortement connexes. Complexité : O(V + E).</p>
<div class="highlight-box">
  <p><strong>Tri topologique :</strong> dans un graphe orienté acyclique (DAG), le tri topologique ordonne les sommets tel que pour chaque arc (u, v), u apparaît avant v. Applications : ordonnancement de tâches avec dépendances, compilation (ordre de compilation des modules), calcul de tableurs.</p>
</div>

<h3>Algorithmes de plus court chemin</h3>
<p>Trouver le chemin le plus court entre deux sommets d\'un graphe pondéré est un problème fondamental.</p>
<p><strong>Algorithme de Dijkstra :</strong> calcule les plus courts chemins depuis un sommet source vers tous les autres dans un graphe à poids positifs. Principe : à chaque étape, choisir le sommet non visité le plus proche. Complexité : O((V + E) log V) avec un tas binaire.</p>
<p><strong>Algorithme de Bellman-Ford :</strong> gère les poids négatifs (mais détecte les cycles négatifs). Complexité : O(V·E). Moins efficace que Dijkstra mais plus général.</p>
<p><strong>Algorithme de Floyd-Warshall :</strong> calcule tous les plus courts chemins entre toutes les paires de sommets. Complexité : O(V³). Basé sur la programmation dynamique.</p>
<p><strong>A* :</strong> extension de Dijkstra avec une heuristique guidant la recherche vers la destination. Utilisé dans les GPS et les jeux vidéo pour trouver les chemins rapidement.</p>

<h3>Coloration de graphes</h3>
<p>Une <strong>coloration propre</strong> d\'un graphe assigne une couleur à chaque sommet tel que deux sommets adjacents n\'aient pas la même couleur. Le <strong>nombre chromatique</strong> χ(G) est le nombre minimum de couleurs nécessaires.</p>
<p><strong>Exemples :</strong> un graphe biparti a χ = 2 ; K<sub>n</sub> (graphe complet à n sommets) a χ = n ; une grille rectangulaire a χ = 2 ; le graphe de Petersen a χ = 3.</p>
<div class="highlight-box">
  <p><strong>Théorème des quatre couleurs (Appel & Haken, 1976) :</strong> tout graphe planaire (qui peut être dessiné dans le plan sans croisement d\'arêtes) peut être coloré avec au plus 4 couleurs. Ce fut la première preuve mathématique majeure assistée par ordinateur — elle vérifia des centaines de configurations réduites. L\'application originelle : colorier les cartes géographiques.</p>
</div>
<p><strong>Applications :</strong> attribution de fréquences radio (sommets = émetteurs, arêtes = interférences), planification d\'examens (pas deux examens en conflit simultanément), compilation (registres processeur).</p>

<h3>Flots dans les réseaux</h3>
<p>Un <strong>réseau de flot</strong> est un graphe orienté avec une source s, un puits t, et une capacité c(u,v) sur chaque arc. Un <strong>flot</strong> f est une fonction sur les arcs respectant : conservation (flot entrant = flot sortant en chaque sommet sauf s et t) et contrainte de capacité (f(u,v) ≤ c(u,v)).</p>
<p>Le <strong>problème du flot maximum</strong> cherche à maximiser le flot total de s à t. Le <strong>théorème max-flow min-cut</strong> (Ford-Fulkerson) affirme que le flot maximum égale la coupe minimum — la coupe (S, T) de capacité minimale séparant s et t.</p>
<p>Applications : logistique (maximiser le débit dans un réseau), réseaux informatiques (bande passante), appariements bipartis (via la réduction au flot maximum).</p>

<h3>Graphes et complexité algorithmique</h3>
<p>De nombreux problèmes sur les graphes ont une complexité très différente selon leur formulation :</p>
<ul>
  <li><strong>Plus court chemin</strong> (1 paire) : O((V+E) log V) — polynomial (Dijkstra)</li>
  <li><strong>Chemin eulérien</strong> : O(V+E) — polynomial</li>
  <li><strong>Cycle hamiltonien</strong> : NP-complet — exponentiel dans le pire cas</li>
  <li><strong>Isomorphisme de graphes</strong> : ni polynomial connu, ni NP-complet prouvé — statut ouvert</li>
  <li><strong>Clique maximum</strong> : NP-complet</li>
  <li><strong>Coloration minimum</strong> : NP-complet (mais polynomial pour les graphes bipartis)</li>
</ul>
<p>La distinction entre problèmes polynomiaux et NP-complets est au cœur de la question P = NP ? — le problème du millénaire le plus célèbre en informatique théorique.</p>
      </div>
    </section>'''

full = pages['discretes/graphes']['content']
quiz_start = full.find('<section class="content-section" id="quiz">')
tail = full[quiz_start:] if quiz_start != -1 else ''
new = graphes_intro + '\n\n    ' + graphes_contenu
if tail:
    new += '\n\n    ' + tail
pages['discretes/graphes']['content'] = new
print(f'graphes updated: {len(new)} chars')

# ============================================================
# COMBINATOIRE
# ============================================================
combi_intro = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>L\'art de compter les configurations possibles</p>
        </div>
      </div>
      <p class="resume-text">La <strong>combinatoire</strong> est la branche des mathématiques qui étudie les structures finies et les méthodes de dénombrement : combien de façons peut-on arranger, sélectionner ou distribuer des objets selon certaines règles ? Elle est le fondement des probabilités, de l\'algorithmique et de la théorie des codes.</p>
      <div class="highlight-box">
        <p><strong>Question typique :</strong> combien de mots de passe à 8 caractères (lettres + chiffres) peut-on former ? Combien de mains de poker à 5 cartes tirées d\'un jeu de 52 ? Combien de chemins d\'un coin à l\'autre d\'une grille 8×8 ? La combinatoire donne les outils pour répondre.</p>
      </div>
      <p class="resume-text">Ce cours couvre le principe de dénombrement, les permutations, arrangements et combinaisons, le triangle de Pascal et le binôme de Newton, le principe d\'inclusion-exclusion, et les bases de la combinatoire avancée (Catalan, Stirling).</p>
    </section>'''

combi_contenu = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Combinatoire — dénombrement, arrangements et structures</p>
        </div>
      </div>
      <div class="course-content">
<h3>Principes de base du dénombrement</h3>
<p><strong>Règle de la somme :</strong> si une tâche peut être accomplie de n₁ façons OR de n₂ façons (options disjointes), alors il y a n₁ + n₂ façons au total.</p>
<p><strong>Règle du produit :</strong> si une tâche se décompose en k étapes successives, avec nᵢ façons d\'accomplir l\'étape i indépendamment des autres, alors il y a n₁ × n₂ × ... × nₖ façons d\'accomplir la tâche entière.</p>
<p><strong>Exemple :</strong> Un mot de passe de 8 caractères, chacun parmi 26 lettres ou 10 chiffres (36 caractères) : 36⁸ = 2 821 109 907 456 mots de passe possibles. Si on exige au moins un chiffre : 36⁸ − 26⁸ (total moins ceux sans chiffres) = 36⁸ − 208 827 064 576 ≈ 2,6 × 10¹².</p>
<div class="highlight-box">
  <p><strong>Principe des tiroirs (Pigeonhole principle) :</strong> si on répartit n+1 objets dans n tiroirs, au moins un tiroir contient 2 objets. Généralisation : si n×k+1 objets dans n tiroirs, un tiroir contient au moins k+1 objets. Applications : prouver qu\'il existe deux personnes à Paris avec le même nombre de cheveux, ou que dans tout groupe de 13 personnes, deux sont nées le même mois.</p>
</div>

<h3>Permutations</h3>
<p>Une <strong>permutation</strong> de n objets distincts est un arrangement ordonné de ces n objets. Le nombre de permutations de n objets est :</p>
<p><strong>P(n) = n! = n × (n−1) × ... × 2 × 1</strong></p>
<p><strong>Exemple :</strong> combien de façons peut-on classer 5 coureurs à l\'arrivée d\'une course ? 5! = 120 façons.</p>
<p>Un <strong>arrangement</strong> (ou permutation partielle) de k objets parmi n est un choix ordonné de k objets parmi n distincts :</p>
<p><strong>A(n,k) = n!/(n−k)! = n × (n−1) × ... × (n−k+1)</strong></p>
<p><strong>Exemple :</strong> combien de podiums (1er, 2ème, 3ème) dans une course de 10 coureurs ? A(10,3) = 10×9×8 = 720.</p>
<p><strong>Permutations avec répétitions :</strong> si parmi n objets, n₁ sont identiques du type 1, n₂ du type 2, ..., le nombre de permutations distinctes est n!/(n₁!·n₂!·...). Exemple : anagrammes de "MISSISSIPPI" (11 lettres : M×1, I×4, S×4, P×2) = 11!/(1!·4!·4!·2!) = 34 650.</p>

<h3>Combinaisons et coefficients binomiaux</h3>
<p>Une <strong>combinaison</strong> de k objets parmi n est un choix non ordonné de k objets distincts parmi n. Le nombre de combinaisons est le <strong>coefficient binomial</strong> :</p>
<p><strong>C(n,k) = "n choisir k" = n! / (k!(n−k)!)</strong></p>
<p><strong>Exemples :</strong></p>
<ul>
  <li>Mains de poker à 5 cartes : C(52,5) = 52!/(5!·47!) = 2 598 960</li>
  <li>Loto (6 boules parmi 49) : C(49,6) = 13 983 816 ≈ 14 millions de combinaisons</li>
  <li>Groupes de 3 personnes parmi 10 : C(10,3) = 120</li>
</ul>
<div class="highlight-box">
  <p><strong>Identités importantes :</strong> C(n,k) = C(n, n−k) (symétrie). C(n,0) = C(n,n) = 1. C(n,1) = n. <strong>Règle de Pascal :</strong> C(n,k) = C(n−1,k−1) + C(n−1,k) — choisir k objets parmi n, c\'est soit inclure le n-ème objet (C(n−1,k−1) façons pour les k−1 restants) soit l\'exclure (C(n−1,k) façons).</p>
</div>

<h3>Triangle de Pascal et binôme de Newton</h3>
<p>Le <strong>triangle de Pascal</strong> organise les coefficients binomiaux en triangle, chaque entrée étant la somme des deux entrées au-dessus :</p>
<p>Ligne 0 : 1 &nbsp;&nbsp; Ligne 1 : 1 1 &nbsp;&nbsp; Ligne 2 : 1 2 1 &nbsp;&nbsp; Ligne 3 : 1 3 3 1 &nbsp;&nbsp; Ligne 4 : 1 4 6 4 1</p>
<p>La ligne n donne les coefficients binomiaux C(n,0), C(n,1), ..., C(n,n).</p>
<p><strong>Binôme de Newton :</strong> pour tous réels a, b et entier n ≥ 0 :</p>
<p><strong>(a + b)ⁿ = Σₖ₌₀ⁿ C(n,k) · aⁿ⁻ᵏ · bᵏ</strong></p>
<p><strong>Exemples :</strong> (a+b)² = a² + 2ab + b². (a+b)³ = a³ + 3a²b + 3ab² + b³. (1+x)⁴ = 1 + 4x + 6x² + 4x³ + x⁴.</p>
<p><strong>Identités remarquables :</strong></p>
<ul>
  <li>Σ C(n,k) = 2ⁿ (somme de toute la ligne n = 2ⁿ — en posant a=b=1)</li>
  <li>Σ (−1)ᵏ C(n,k) = 0 (somme alternée = 0 — en posant a=1, b=−1)</li>
  <li>Σ k·C(n,k) = n·2ⁿ⁻¹ (somme pondérée)</li>
</ul>

<h3>Principe d\'inclusion-exclusion</h3>
<p>Pour compter les éléments d\'une union d\'ensembles, on ne peut pas simplement additionner les cardinaux car des éléments seraient comptés plusieurs fois. Le <strong>principe d\'inclusion-exclusion</strong> (PIE) corrige cela :</p>
<p><strong>|A ∪ B| = |A| + |B| − |A ∩ B|</strong></p>
<p><strong>|A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|</strong></p>
<p>En général pour n ensembles : on ajoute les cardinaux des singletons, soustrait les intersections 2 à 2, ajoute les intersections 3 à 3, etc.</p>
<p><strong>Exemple :</strong> parmi 100 étudiants, 60 suivent des maths, 50 suivent la physique, 30 suivent les deux. Combien en suivent au moins une ? |M ∪ P| = 60 + 50 − 30 = 80.</p>
<div class="highlight-box">
  <p><strong>Application — dérangements :</strong> un dérangement de {1,...,n} est une permutation sans point fixe (aucun i à la position i). Le nombre de dérangements Dₙ = n! × Σₖ₌₀ⁿ (−1)ᵏ/k! ≈ n!/e. Exemple : Dₙ/n! → 1/e ≈ 0.368 — environ 37% des permutations aléatoires de n objets sont des dérangements.</p>
</div>

<h3>Combinatoire des partitions et nombres de Catalan</h3>
<p>Les <strong>nombres de Catalan</strong> Cₙ = C(2n,n)/(n+1) comptent de nombreuses structures combinatoires récursives :</p>
<ul>
  <li>Le nombre d\'arbres binaires à n nœuds internes</li>
  <li>Le nombre de façons de parenthéser n+1 facteurs : (ab)(cd) vs a(b(cd)) vs ...</li>
  <li>Le nombre de chemins monotones de (0,0) à (n,n) qui ne passent pas au-dessus de la diagonale</li>
  <li>Le nombre de triangulations d\'un polygone convexe à n+2 côtés</li>
</ul>
<p>Premiers termes : C₀=1, C₁=1, C₂=2, C₃=5, C₄=14, C₅=42, C₆=132, C₇=429...</p>
<p>Relation de récurrence : Cₙ₊₁ = Σₖ₌₀ⁿ Cₖ · Cₙ₋ₖ</p>

<h3>Combinatoire et probabilités</h3>
<p>La combinatoire est le fondement du calcul des probabilités sur des espaces finis. Si tous les résultats sont équiprobables, P(A) = |A| / |Ω| (espace total).</p>
<p><strong>Exemple :</strong> probabilité d\'obtenir une quinte flush (5 cartes de même couleur en séquence) au poker. Nombre de quintes flush : 4 × 10 = 40 (4 couleurs × 10 séquences possibles). P = 40 / C(52,5) = 40 / 2 598 960 ≈ 0.0015%.</p>
<p>La <strong>loi binomiale</strong> compte le nombre de succès dans n épreuves indépendantes de Bernoulli de probabilité p : P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. Les coefficients binomiaux apparaissent naturellement dans la distribution des probabilités.</p>
<div class="highlight-box">
  <p><strong>Problème des anniversaires :</strong> dans un groupe de 23 personnes, la probabilité que deux aient le même anniversaire dépasse 50%. Le calcul : probabilité qu\'aucune paire ne partage un anniversaire = 365/365 × 364/365 × ... × 343/365 ≈ 49.3%. Résultat contre-intuitif, car on pense à la probabilité de partager son anniversaire avec quelqu\'un de précis (1/365), pas avec n\'importe qui dans le groupe.</p>
</div>

<h3>Generating functions (séries génératrices)</h3>
<p>Une <strong>série génératrice</strong> (generating function) encode une suite (aₙ) dans une série formelle A(x) = Σ aₙxⁿ. C\'est un outil puissant pour résoudre des récurrences et obtenir des formules closes.</p>
<p><strong>Exemple classique :</strong> suite de Fibonacci (F₀=0, F₁=1, Fₙ=Fₙ₋₁+Fₙ₋₂). Sa série génératrice est F(x) = x/(1−x−x²). En la développant en fractions partielles, on obtient la formule de Binet :</p>
<p><strong>Fₙ = (φⁿ − ψⁿ) / √5</strong>, où φ = (1+√5)/2 ≈ 1.618 (nombre d\'or) et ψ = (1−√5)/2 ≈ −0.618.</p>
<p>Les séries génératrices permettent aussi de résoudre des problèmes de comptage : combien de façons de rendre la monnaie avec des pièces de 1, 2, 5, 10, 20, 50 cents ?</p>
      </div>
    </section>'''

full = pages['discretes/combinatoire']['content']
quiz_start = full.find('<section class="content-section" id="quiz">')
tail = full[quiz_start:] if quiz_start != -1 else ''
new = combi_intro + '\n\n    ' + combi_contenu
if tail:
    new += '\n\n    ' + tail
pages['discretes/combinatoire']['content'] = new
print(f'combinatoire updated: {len(new)} chars')

# ============================================================
# LOGIQUE FORMELLE
# ============================================================
logique_intro = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Le langage rigoureux du raisonnement mathématique</p>
        </div>
      </div>
      <p class="resume-text">La <strong>logique formelle</strong> est la science du raisonnement valide. Elle définit rigoureusement ce que signifie raisonner correctement, en abstrayant la forme des arguments de leur contenu. Fondée par Frege, Russell et Whitehead à la fin du XIXe siècle, elle a transformé les mathématiques — et donné naissance à l\'informatique théorique avec les travaux de Gödel, Turing et Church.</p>
      <div class="highlight-box">
        <p><strong>Pourquoi étudier la logique ?</strong> Tout raisonnement mathématique est une chaîne de déductions logiques. La logique formelle explicite les règles implicites que les mathématiciens appliquent intuitivement, permet de détecter les paralogismes, et fournit le socle des langages de programmation et de la vérification formelle de logiciels.</p>
      </div>
      <p class="resume-text">Ce cours couvre la logique propositionnelle (connecteurs, tables de vérité, tautologies), la logique des prédicats (quantificateurs, variables), les systèmes de déduction, et les théorèmes fondamentaux — complétude de Gödel et incomplétude de Gödel.</p>
    </section>'''

logique_contenu = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Logique — propositions, prédicats et déduction</p>
        </div>
      </div>
      <div class="course-content">
<h3>Logique propositionnelle</h3>
<p>Une <strong>proposition</strong> est un énoncé qui est soit vrai (V) soit faux (F). Les connecteurs logiques permettent de combiner des propositions :</p>
<ul>
  <li><strong>¬P</strong> (NON P, négation) : vrai si P est faux</li>
  <li><strong>P ∧ Q</strong> (P ET Q, conjonction) : vrai si P et Q sont tous deux vrais</li>
  <li><strong>P ∨ Q</strong> (P OU Q, disjonction) : vrai si au moins l\'un est vrai</li>
  <li><strong>P → Q</strong> (P implique Q, implication) : faux seulement si P est vrai et Q est faux</li>
  <li><strong>P ↔ Q</strong> (P équivaut à Q, biconditionnelle) : vrai si P et Q ont la même valeur de vérité</li>
</ul>
<div class="highlight-box">
  <p><strong>Table de vérité de l\'implication P → Q :</strong> P=V,Q=V → V | P=V,Q=F → F | P=F,Q=V → V | P=F,Q=F → V. L\'implication est fausse uniquement quand la prémisse est vraie et la conclusion fausse. "Si 2+2=5 alors la Lune est faite de fromage" est une implication vraie (prémisse fausse → implication vraie).</p>
</div>
<p>Une <strong>tautologie</strong> est une formule toujours vraie quelle que soit la valeur de ses variables. Une <strong>contradiction</strong> est toujours fausse. Une formule <strong>satisfaisable</strong> est vraie pour au moins une interprétation.</p>
<p>Tautologies fondamentales :</p>
<ul>
  <li><strong>P ∨ ¬P</strong> (tiers exclu)</li>
  <li><strong>¬(P ∧ ¬P)</strong> (non-contradiction)</li>
  <li><strong>(P → Q) ↔ (¬Q → ¬P)</strong> (contraposée)</li>
  <li><strong>¬(P ∧ Q) ↔ (¬P ∨ ¬Q)</strong> (De Morgan)</li>
  <li><strong>¬(P ∨ Q) ↔ (¬P ∧ ¬Q)</strong> (De Morgan)</li>
</ul>

<h3>Formes normales et simplification</h3>
<p>Toute formule propositionnelle peut être mise sous forme normale :</p>
<p><strong>FNC (Forme Normale Conjonctive) :</strong> conjonction (ET) de clauses, chaque clause étant une disjonction (OU) de littéraux. Exemple : (P ∨ Q) ∧ (¬P ∨ R) ∧ (Q ∨ ¬R).</p>
<p><strong>FND (Forme Normale Disjonctive) :</strong> disjonction (OU) de termes, chaque terme étant une conjonction (ET) de littéraux. Exemple : (P ∧ Q) ∨ (¬P ∧ R).</p>
<p>Le problème SAT (satisfaisabilité d\'une formule en FNC) est le premier problème NP-complet — il s\'agit de déterminer s\'il existe une interprétation qui rend une formule vraie. Des millions de variables sont traitées en pratique par des solveurs SAT modernes (cryptographie, vérification formelle).</p>
<div class="highlight-box">
  <p><strong>Lois de De Morgan :</strong> ¬(P ∧ Q) ≡ ¬P ∨ ¬Q et ¬(P ∨ Q) ≡ ¬P ∧ ¬Q. Ces lois permettent de "pousser" la négation à l\'intérieur des formules. Elles sont fondamentales pour la simplification des circuits logiques et des requêtes de base de données.</p>
</div>

<h3>Logique des prédicats du premier ordre</h3>
<p>La logique propositionnelle ne peut pas exprimer "tous les entiers positifs ont un successeur". La <strong>logique du premier ordre</strong> (logique des prédicats) enrichit le langage avec :</p>
<ul>
  <li><strong>Variables</strong> : x, y, z, ...</li>
  <li><strong>Prédicats</strong> : P(x), Pair(n), Supérieur(x, y), ...</li>
  <li><strong>Quantificateur universel ∀</strong> : "pour tout x" — ∀x P(x) signifie "P(x) est vrai pour tout x"</li>
  <li><strong>Quantificateur existentiel ∃</strong> : "il existe x" — ∃x P(x) signifie "il existe au moins un x tel que P(x) est vrai"</li>
  <li><strong>Égalité</strong> et fonctions</li>
</ul>
<p><strong>Exemples de formules :</strong></p>
<ul>
  <li>∀n ∃m (m > n) — il n\'existe pas de plus grand entier</li>
  <li>∀x ∀y (x + y = y + x) — commutativité de l\'addition</li>
  <li>∃x (x² = 2) — il existe une racine carrée de 2 (vrai dans ℝ, faux dans ℚ)</li>
</ul>
<div class="highlight-box">
  <p><strong>Négation des quantificateurs :</strong> ¬(∀x P(x)) ≡ ∃x ¬P(x) et ¬(∃x P(x)) ≡ ∀x ¬P(x). Pour réfuter "tous les nombres premiers sont impairs", il suffit de trouver un contre-exemple : 2 est premier et pair. Pour prouver "il n\'existe pas de plus grand entier", on montre ∀n, n+1 > n.</p>
</div>

<h3>Systèmes de déduction : la déduction naturelle</h3>
<p>Un <strong>système de déduction</strong> formalise les règles d\'inférence valides — les étapes élémentaires de raisonnement. La <strong>déduction naturelle</strong> (Gentzen, 1935) utilise des règles introduction et élimination pour chaque connecteur :</p>
<p><strong>Règles fondamentales :</strong></p>
<ul>
  <li><strong>Modus ponens</strong> : de P et P→Q, déduire Q</li>
  <li><strong>Introduction du ET</strong> : de P et Q, déduire P∧Q</li>
  <li><strong>Élimination du ET</strong> : de P∧Q, déduire P (ou Q)</li>
  <li><strong>Introduction du OU</strong> : de P, déduire P∨Q</li>
  <li><strong>Raisonnement par l\'absurde</strong> : si l\'hypothèse ¬P mène à une contradiction, conclure P</li>
</ul>
<p>La <strong>résolution</strong> est une règle d\'inférence fondamentale utilisée dans les prouveurs automatiques : de (P ∨ Q) et (¬P ∨ R), déduire (Q ∨ R). Le prouveur Prolog utilise la résolution comme mécanisme d\'inférence.</p>

<h3>Complétude et décidabilité</h3>
<p>Le <strong>théorème de complétude de Gödel</strong> (1930) : une formule du premier ordre est vraie dans tous les modèles si et seulement si elle est déductible dans le calcul des prédicats. Autrement dit, la logique du premier ordre est <strong>complète</strong> — ce qui est vrai est prouvable.</p>
<p>La logique propositionnelle est <strong>décidable</strong> : il existe un algorithme qui détermine en temps fini si une formule est une tautologie (via les tables de vérité, en 2ⁿ étapes). La logique du premier ordre est <strong>semi-décidable</strong> (Church, 1936) : si une formule est prouvable, un algorithme le trouvera ; mais si elle est réfutable, l\'algorithme peut ne jamais s\'arrêter.</p>

<h3>Théorèmes d\'incomplétude de Gödel</h3>
<p>En 1931, Kurt Gödel a publié deux théorèmes qui ont révolutionné les fondements des mathématiques :</p>
<p><strong>Premier théorème d\'incomplétude :</strong> tout système formel cohérent et suffisamment expressif pour contenir l\'arithmétique élémentaire contient des énoncés qui ne peuvent être ni prouvés ni réfutés dans ce système. Ces énoncés sont "indécidables" — vrais mais non démontrables.</p>
<p><strong>Deuxième théorème d\'incomplétude :</strong> un tel système ne peut pas prouver sa propre cohérence.</p>
<div class="highlight-box">
  <p><strong>Construction de Gödel :</strong> l\'idée clé est l\'<em>auto-référence</em>. Gödel construit arithmétiquement un énoncé G qui dit "je ne suis pas prouvable dans ce système". Si G est prouvable, le système est incohérent. Si G est faux, il est prouvable — contradiction. Donc G est vrai mais non prouvable. Ce raisonnement formalise le paradoxe du menteur ("cette phrase est fausse") en mathématiques rigoureuses.</p>
</div>
<p>Les théorèmes de Gödel ont mis fin au programme de Hilbert — espoir de formaliser toutes les mathématiques dans un système complet et décidable. Ils ont aussi influencé Turing (problème de l\'arrêt) et Church (lambda-calcul).</p>

<h3>Logique et informatique</h3>
<p>La logique formelle est le fondement théorique de l\'informatique :</p>
<ul>
  <li><strong>Circuits logiques :</strong> les portes ET, OU, NON réalisent physiquement les connecteurs logiques. Tout circuit numérique est une formule propositionnelle</li>
  <li><strong>Langages de programmation :</strong> le λ-calcul de Church est le fondement théorique de la programmation fonctionnelle (Haskell, OCaml). La correspondance de Curry-Howard établit une bijection entre preuves logiques et programmes</li>
  <li><strong>Bases de données :</strong> SQL est une logique du premier ordre appliquée — WHERE clause = prédicat, JOIN = conjonction</li>
  <li><strong>Vérification formelle :</strong> prouver automatiquement qu\'un programme ou protocole respecte ses spécifications (logique temporelle LTL, CTL)</li>
  <li><strong>Intelligence artificielle :</strong> Prolog est un langage de programmation logique basé sur la résolution ; les systèmes experts utilisent des règles logiques</li>
</ul>

<h3>Raisonnement correct et paralogismes</h3>
<p>La logique formelle permet d\'identifier les <strong>paralogismes</strong> — raisonnements invalides qui semblent convaincants :</p>
<ul>
  <li><strong>Affirmation du conséquent :</strong> "P→Q, Q est vrai, donc P est vrai." Invalide ! Si "il pleut alors le sol est mouillé" et "le sol est mouillé", on ne peut pas conclure qu\'il a plu (un tuyau peut avoir fui).</li>
  <li><strong>Négation de l\'antécédent :</strong> "P→Q, P est faux, donc Q est faux." Invalide ! Q peut être vrai pour une autre raison.</li>
  <li><strong>Généralisation hâtive :</strong> tirer une conclusion universelle d\'un échantillon non représentatif.</li>
  <li><strong>Argument ad hominem :</strong> attaquer la personne plutôt que l\'argument — invalide en logique formelle.</li>
</ul>
<p>Raisonnements valides : <strong>modus ponens</strong> (P, P→Q ⊢ Q), <strong>modus tollens</strong> (¬Q, P→Q ⊢ ¬P), <strong>syllogisme hypothétique</strong> (P→Q, Q→R ⊢ P→R).</p>
      </div>
    </section>'''

full = pages['discretes/logique']['content']
quiz_start = full.find('<section class="content-section" id="quiz">')
tail = full[quiz_start:] if quiz_start != -1 else ''
new = logique_intro + '\n\n    ' + logique_contenu
if tail:
    new += '\n\n    ' + tail
pages['discretes/logique']['content'] = new
print(f'logique updated: {len(new)} chars')

# ============================================================
# THÉORIE DES ENSEMBLES
# ============================================================
ensembles_intro = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Le langage universel des mathématiques</p>
        </div>
      </div>
      <p class="resume-text">La <strong>théorie des ensembles</strong> est le fondement de toutes les mathématiques modernes. Développée par Georg Cantor entre 1874 et 1884, elle permet de parler rigoureusement de collections d\'objets, de leur taille et de leurs relations. Presque tout objet mathématique — nombre, fonction, espace — peut être défini comme un ensemble.</p>
      <div class="highlight-box">
        <p><strong>La révolution de Cantor :</strong> avant Cantor, "infini" était un concept vague. Cantor a montré qu\'il existe différentes "tailles" d\'infini : l\'infini des entiers est strictement plus petit que l\'infini des nombres réels. Cette découverte a choqué ses contemporains — Poincaré la qualifia de "maladie" dont les mathématiques guériraient.</p>
      </div>
      <p class="resume-text">Ce cours couvre les opérations sur les ensembles, les relations et fonctions, la notion de cardinalité, les ensembles infinis et les résultats de Cantor (diagonalisation, hypothèse du continu), et les axiomes de Zermelo-Fraenkel.</p>
    </section>'''

ensembles_contenu = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Théorie des ensembles — structures, infini et fondements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Notions fondamentales</h3>
<p>Un <strong>ensemble</strong> est une collection d\'objets appelés <strong>éléments</strong>. On note x ∈ E pour dire que x est un élément de E, et x ∉ E sinon. Deux ensembles sont égaux s\'ils ont exactement les mêmes éléments : A = B ↔ (∀x : x∈A ↔ x∈B).</p>
<p><strong>Notations :</strong></p>
<ul>
  <li>En extension : A = {1, 2, 3, 4, 5}</li>
  <li>En compréhension : A = {x ∈ ℕ | x ≤ 5}</li>
  <li><strong>Ensembles classiques :</strong> ℕ (naturels), ℤ (entiers), ℚ (rationnels), ℝ (réels), ℂ (complexes)</li>
  <li><strong>Ensemble vide :</strong> ∅ = {} — contient aucun élément. ∅ est sous-ensemble de tout ensemble.</li>
</ul>
<p>A est un <strong>sous-ensemble</strong> de B (A ⊆ B) si tout élément de A est aussi dans B. A est un <strong>sous-ensemble strict</strong> (A ⊊ B) si A ⊆ B et A ≠ B.</p>
<div class="highlight-box">
  <p><strong>Ensemble des parties :</strong> P(A) (ou 2<sup>A</sup>) désigne l\'ensemble de tous les sous-ensembles de A. Si |A| = n, alors |P(A)| = 2ⁿ. Exemple : P({1,2,3}) = {∅, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}} — 8 = 2³ éléments.</p>
</div>

<h3>Opérations sur les ensembles</h3>
<p>Les opérations fondamentales combinent des ensembles pour en construire de nouveaux :</p>
<ul>
  <li><strong>Union :</strong> A ∪ B = {x | x∈A ou x∈B}</li>
  <li><strong>Intersection :</strong> A ∩ B = {x | x∈A et x∈B}</li>
  <li><strong>Différence :</strong> A \\ B = {x | x∈A et x∉B}</li>
  <li><strong>Complément :</strong> Ā = E \\ A (relatif à un ensemble universel E)</li>
  <li><strong>Produit cartésien :</strong> A × B = {(a,b) | a∈A et b∈B}</li>
</ul>
<p><strong>Lois fondamentales (identiques aux lois logiques de De Morgan) :</strong></p>
<ul>
  <li>Commutativité : A ∪ B = B ∪ A ; A ∩ B = B ∩ A</li>
  <li>Associativité : (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
  <li>Distributivité : A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)</li>
  <li>De Morgan : (A ∪ B) = Ā ∩ B̄ et (A ∩ B) = Ā ∪ B̄</li>
</ul>
<p>Ces lois sont visualisées via les <strong>diagrammes de Venn</strong> — représentations graphiques des ensembles comme régions du plan.</p>

<h3>Relations</h3>
<p>Une <strong>relation binaire</strong> R sur A est un sous-ensemble de A × A. On note xRy ou (x,y)∈R pour dire que x et y sont en relation. Propriétés importantes :</p>
<ul>
  <li><strong>Réflexivité :</strong> ∀x, xRx (ex : ≤ est réflexive)</li>
  <li><strong>Symétrie :</strong> xRy → yRx (ex : "être ami avec")</li>
  <li><strong>Antisymétrie :</strong> xRy ∧ yRx → x=y (ex : ≤)</li>
  <li><strong>Transitivité :</strong> xRy ∧ yRz → xRz (ex : <)</li>
</ul>
<p>Une <strong>relation d\'équivalence</strong> est réflexive, symétrique et transitive. Elle partitionne A en <strong>classes d\'équivalence</strong> : [x] = {y | xRy}. Exemple : la congruence modulo n partitionne ℤ en n classes.</p>
<p>Une <strong>relation d\'ordre</strong> est réflexive, antisymétrique et transitive. Un ordre est <strong>total</strong> si toute paire est comparable (≤ sur ℝ). Un ordre est <strong>partiel</strong> si certaines paires peuvent être incomparables (⊆ sur P(A)).</p>
<div class="highlight-box">
  <p><strong>Clôture transitive :</strong> la fermeture transitive R* d\'une relation R est la plus petite relation transitive contenant R. Si R représente les routes directes entre villes, R* représente l\'accessibilité (routière) — on peut aller de A à C si A→B et B→C. Calculable par l\'algorithme de Floyd-Warshall en O(n³).</p>
</div>

<h3>Fonctions</h3>
<p>Une <strong>fonction</strong> f : A → B est une relation où chaque élément de A est associé à exactement un élément de B. A est le <strong>domaine</strong>, B le <strong>codomaine</strong>. L\'<strong>image</strong> (ou range) est l\'ensemble {f(a) | a∈A} ⊆ B.</p>
<p>Classification des fonctions :</p>
<ul>
  <li><strong>Injective</strong> (one-to-one) : f(a) = f(b) → a = b (pas deux éléments distincts de A avec la même image)</li>
  <li><strong>Surjective</strong> (onto) : tout élément de B a un antécédent dans A (∀b∈B, ∃a∈A : f(a)=b)</li>
  <li><strong>Bijective</strong> : injective ET surjective — correspond à une mise en bijection parfaite entre A et B</li>
</ul>
<p>Une bijection de A vers B certifie que A et B ont le même nombre d\'éléments — fondement de la notion de cardinalité.</p>

<h3>Cardinalité et ensembles infinis</h3>
<p>La <strong>cardinalité</strong> d\'un ensemble fini est son nombre d\'éléments. Pour les ensembles infinis, Cantor définit : deux ensembles ont la même cardinalité s\'il existe une bijection entre eux.</p>
<p>Un ensemble est <strong>dénombrable</strong> (ou countable) s\'il est en bijection avec ℕ — ses éléments peuvent être listés dans une suite infinie.</p>
<p><strong>Résultats surprenants :</strong></p>
<ul>
  <li>ℤ est dénombrable : on liste 0, 1, −1, 2, −2, 3, −3, ... (bijection explicite avec ℕ)</li>
  <li>ℚ est dénombrable : on peut parcourir tous les rationnels p/q sur un tableau 2D en suivant les diagonales (argument diagonal de Cantor — version constructive)</li>
  <li>ℤ × ℤ est dénombrable (produit de dénombrables)</li>
  <li>Union dénombrable d\'ensembles dénombrables est dénombrable</li>
</ul>
<div class="highlight-box">
  <p><strong>Argument diagonal de Cantor (1891) :</strong> ℝ (ou même [0,1]) est <strong>non dénombrable</strong>. Preuve : supposons que tous les réels de [0,1] soient listés : r₁, r₂, r₃, ... On construit d = 0.d₁d₂d₃... où dᵢ ≠ i-ème chiffre de rᵢ. Alors d ≠ rᵢ pour tout i — d n\'est pas dans la liste. Contradiction. Donc ℝ est strictement "plus grand" que ℕ.</p>
</div>

<h3>Hiérarchie des infinis : les cardinaux transfinis</h3>
<p>Cantor a introduit les <strong>nombres cardinaux transfinis</strong> pour mesurer les tailles d\'infini :</p>
<ul>
  <li><strong>ℵ₀</strong> (aleph-zéro) : cardinalité de ℕ — le plus petit infini dénombrable</li>
  <li><strong>𝔠 = 2^ℵ₀</strong> : cardinalité de ℝ — la cardinalité du continu</li>
  <li><strong>2^𝔠</strong> : cardinalité de l\'ensemble de toutes les fonctions ℝ→ℝ</li>
</ul>
<p><strong>Théorème de Cantor :</strong> pour tout ensemble A, |P(A)| > |A|. Il n\'existe pas de "plus grand ensemble" — il y a une infinité d\'infinis de tailles croissantes : ℵ₀ < 2^ℵ₀ < 2^(2^ℵ₀) < ...</p>
<p><strong>Hypothèse du continu (HC) :</strong> Cantor conjectura en 1878 qu\'il n\'existe pas de cardinal strictement entre ℵ₀ et 𝔠. Gödel (1940) montra que HC est cohérente avec les axiomes ZFC. Cohen (1963) montra que ¬HC est aussi cohérente. Conclusion : l\'hypothèse du continu est <strong>indépendante</strong> de ZFC — ni prouvable ni réfutable dans les axiomes standards des mathématiques.</p>

<h3>Paradoxes et axiomes de Zermelo-Fraenkel</h3>
<p>La définition naïve d\'un ensemble comme "toute collection d\'objets" mène à des paradoxes :</p>
<p><strong>Paradoxe de Russell (1901) :</strong> soit R = {x | x ∉ x} (l\'ensemble de tous les ensembles qui ne se contiennent pas eux-mêmes). R ∈ R ? Si oui, par définition R ∉ R. Si non, alors R ∈ R. Contradiction.</p>
<p>Ce paradoxe a conduit Zermelo et Fraenkel à axiomatiser la théorie des ensembles. Les <strong>axiomes ZFC</strong> (Zermelo-Fraenkel + Axiome du Choix) forment le cadre standard des mathématiques :</p>
<ul>
  <li><strong>Extensionnalité :</strong> deux ensembles avec les mêmes éléments sont égaux</li>
  <li><strong>Ensemble vide :</strong> ∅ existe</li>
  <li><strong>Paire :</strong> pour x, y il existe {x, y}</li>
  <li><strong>Union :</strong> pour tout ensemble de familles, leur union existe</li>
  <li><strong>Puissance :</strong> P(A) existe pour tout A</li>
  <li><strong>Infinité :</strong> il existe un ensemble infini (ℕ)</li>
  <li><strong>Remplacement :</strong> l\'image d\'un ensemble par une fonction définie par une formule est un ensemble</li>
  <li><strong>Fondation :</strong> tout ensemble non vide contient un élément disjoint de lui-même (exclut les ensembles auto-contenants)</li>
  <li><strong>Choix (AC) :</strong> pour toute famille d\'ensembles non vides, il existe une fonction de choix</li>
</ul>
<div class="highlight-box">
  <p><strong>Axiome du choix :</strong> controversé à ses débuts, l\'AC est aujourd\'hui accepté par la plupart des mathématiciens. Il est équivalent au lemme de Zorn et au théorème du bon ordre. Sans lui, on ne peut pas prouver que tout espace vectoriel a une base, ni que le produit d\'espaces compacts est compact (Tychonoff). Le paradoxe de Banach-Tarski — on peut décomposer une sphère en 5 morceaux et les réassembler en deux sphères de même volume — est une conséquence de l\'AC.</p>
</div>

<h3>Ordres bien fondés et induction transfinie</h3>
<p>Un ordre est <strong>bien fondé</strong> (ou bien ordonné) s\'il n\'existe pas de suite décroissante infinie. L\'ordre naturel sur ℕ est bien fondé (tout sous-ensemble non vide a un minimum) mais pas sur ℤ ou ℝ.</p>
<p>Le <strong>principe de bonne fondation</strong> est la base du raisonnement par <strong>induction bien fondée</strong> : pour prouver P(x) pour tout x dans un ensemble bien ordonné, il suffit de montrer que si P(y) est vrai pour tout y &lt; x, alors P(x) est vrai.</p>
<p>L\'<strong>induction transfinie</strong> étend ce principe aux ordinaux transfinis — permettant des preuves et des définitions récursives au-delà de l\'infini dénombrable. Elle est utilisée en théorie des ensembles et en logique mathématique.</p>
      </div>
    </section>'''

full = pages['discretes/ensembles']['content']
quiz_start = full.find('<section class="content-section" id="quiz">')
tail = full[quiz_start:] if quiz_start != -1 else ''
new = ensembles_intro + '\n\n    ' + ensembles_contenu
if tail:
    new += '\n\n    ' + tail
pages['discretes/ensembles']['content'] = new
print(f'ensembles updated: {len(new)} chars')

# Save
with open('assets/content/maths.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('maths.json saved successfully!')
