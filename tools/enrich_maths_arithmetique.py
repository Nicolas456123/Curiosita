#!/usr/bin/env python3
"""Enrich short arithmetique articles to reach 15000 chars minimum"""
import json, re

with open('assets/content/maths.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# FRACTIONS - add after "Applications" section, before exercises
# ============================================================
fractions_addition = '''
<h3>Fractions et algèbre</h3>
<p>Les fractions sont omniprésentes en algèbre. Manipuler des expressions algébriques avec fractions suit les mêmes règles :</p>
<p><strong>Addition de fractions algébriques :</strong> 1/x + 1/(x+1) = (x+1)/(x(x+1)) + x/(x(x+1)) = (2x+1)/(x(x+1))</p>
<p><strong>Simplification :</strong> (x²−4)/(x−2) = (x−2)(x+2)/(x−2) = x+2 (pour x ≠ 2). Attention : la simplification n'est valide que si le facteur n'est pas nul.</p>
<p><strong>Décomposition en éléments simples :</strong> écrire une fraction rationnelle comme somme de fractions plus simples. Exemple : 5/(x(x−1)) = A/x + B/(x−1). En multipliant par x(x−1) : 5 = A(x−1) + Bx. Pour x=0 : A=−5. Pour x=1 : B=5. Donc 5/(x(x−1)) = −5/x + 5/(x−1).</p>
<div class="highlight-box">
  <p><strong>Fractions continues :</strong> un nombre peut être exprimé comme une fraction dont le dénominateur contient lui-même une fraction : φ = 1 + 1/(1 + 1/(1 + ...)) — le nombre d'or. Les fractions continues sont liées à l'algorithme d'Euclide et permettent d'approximer les irrationnels par des rationnels.</p>
</div>

<h3>Fractions dans les probabilités et statistiques</h3>
<p>Les fractions sont le langage naturel des probabilités. La probabilité d'un événement est une fraction entre 0 et 1 représentant la proportion de cas favorables.</p>
<p><strong>Règle de Bayes (version fractionnaire) :</strong> P(A|B) = P(B|A)·P(A) / P(B). Si un test médical détecte une maladie avec 95% de sensibilité, et la maladie touche 1% de la population, la probabilité d'être malade sachant que le test est positif est ≈ 16% (pas 95%) — contre-intuitif mais démontrable avec les fractions.</p>
<p><strong>Espérance fractionnaire :</strong> un joueur lance un dé. S'il obtient 6, il gagne 5€ ; sinon il perd 1€. Espérance = (1/6)×5 + (5/6)×(−1) = 5/6 − 5/6 = 0€. Jeu équitable.</p>
'''

# Insert before the exercises section in fractions
fractions_content = pages['arithmetique/fractions']['content']
# Find the exercises section marker - first h3 with "Exercice"
insert_pos = fractions_content.find('<h3>Exercice 1')
if insert_pos == -1:
    insert_pos = fractions_content.find('id="exercices"')
    if insert_pos != -1:
        # find the next course-content div
        insert_pos = fractions_content.find('<div class="course-content">', insert_pos)
        if insert_pos != -1:
            insert_pos = fractions_content.find('>', insert_pos) + 1

if insert_pos > 0:
    new_content = fractions_content[:insert_pos] + fractions_addition + fractions_content[insert_pos:]
    pages['arithmetique/fractions']['content'] = new_content
    print(f'fractions updated: {len(new_content)} chars')
else:
    print('fractions: insert position not found')

# ============================================================
# PUISSANCES - add more content
# ============================================================
puissances_addition = '''
<h3>Logarithmes — inverses des puissances</h3>
<p>Le <strong>logarithme</strong> est l'opération inverse de l'exponentiation : log<sub>b</sub>(x) = n signifie bⁿ = x. Les logarithmes permettent de "linéariser" les croissances exponentielles.</p>
<p><strong>Propriétés fondamentales :</strong></p>
<ul>
  <li>log<sub>b</sub>(xy) = log<sub>b</sub>(x) + log<sub>b</sub>(y)</li>
  <li>log<sub>b</sub>(x/y) = log<sub>b</sub>(x) − log<sub>b</sub>(y)</li>
  <li>log<sub>b</sub>(xⁿ) = n · log<sub>b</sub>(x)</li>
  <li>Changement de base : log<sub>b</sub>(x) = log(x)/log(b) = ln(x)/ln(b)</li>
</ul>
<p><strong>Logarithmes usuels :</strong> log₁₀ (logarithme décimal, noté log), ln (logarithme naturel, base e ≈ 2.718), log₂ (base 2, utilisé en informatique).</p>
<div class="highlight-box">
  <p><strong>Échelle de Richter :</strong> une magnitude 7 libère 31.6 fois plus d'énergie qu'une magnitude 6 (10^1.5 ≈ 31.6). C'est une échelle logarithmique : chaque point supplémentaire correspond à une multiplication par 10^1.5 de l'énergie. De même : décibels (son), pH (acidité), magnitude stellaire (luminosité).</p>
</div>

<h3>Puissances et suites géométriques</h3>
<p>Une <strong>suite géométrique</strong> est une suite où chaque terme est obtenu en multipliant le précédent par une constante q (la raison). Le terme général est uₙ = u₀ · qⁿ — une puissance de q.</p>
<p><strong>Somme d'une suite géométrique :</strong> S = u₀ × (1 − qⁿ)/(1 − q) pour q ≠ 1.</p>
<p><strong>Exemple — intérêts composés :</strong> un capital C₀ placé à un taux annuel r forme une suite géométrique de raison (1+r). Après n années : Cₙ = C₀ × (1+r)ⁿ. Pour C₀ = 1000€ à r = 5% pendant 20 ans : C₂₀ = 1000 × 1.05²⁰ ≈ 2653€. La puissance double le capital en log₁.₀₅(2) ≈ 14.2 ans (règle des 72 : 72/5 ≈ 14.4 ans).</p>
<p><strong>Série géométrique infinie :</strong> si |q| &lt; 1, la somme infinie vaut u₀/(1−q). Exemple : 1 + 1/2 + 1/4 + 1/8 + ... = 1/(1−1/2) = 2. Application : certaines fractions décimales périodiques.</p>
'''

puissances_content = pages['arithmetique/puissances']['content']
insert_pos = puissances_content.find('<h3>Exercice 1')
if insert_pos > 0:
    new_content = puissances_content[:insert_pos] + puissances_addition + puissances_content[insert_pos:]
    pages['arithmetique/puissances']['content'] = new_content
    print(f'puissances updated: {len(new_content)} chars')
else:
    print('puissances: insert position not found, pos =', insert_pos)

# ============================================================
# BASES DE NUMÉRATION - add more content
# ============================================================
bases_addition = '''
<h3>Arithmétique binaire avancée et portes logiques</h3>
<p>Les opérations bit à bit (bitwise operations) sont fondamentales en programmation. Elles opèrent sur chaque paire de bits correspondants :</p>
<ul>
  <li><strong>AND (&amp;) :</strong> 1 uniquement si les deux bits sont 1. Usage : masquer des bits (extraire un champ)</li>
  <li><strong>OR (|) :</strong> 1 si au moins un bit est 1. Usage : mettre des bits à 1</li>
  <li><strong>XOR (^) :</strong> 1 si les bits sont différents. Usage : cryptographie, détection d'erreurs</li>
  <li><strong>NOT (~) :</strong> inverse tous les bits. Complément à 1.</li>
  <li><strong>Décalage gauche (&lt;&lt; n) :</strong> multiplie par 2ⁿ. 5 &lt;&lt; 2 = 20</li>
  <li><strong>Décalage droit (>> n) :</strong> divise par 2ⁿ (entier). 20 >> 2 = 5</li>
</ul>
<div class="highlight-box">
  <p><strong>Astuce — tester si n est pair :</strong> n &amp; 1 == 0 (le bit de poids faible vaut 0). Plus rapide qu'un modulo. Pour tester si n est une puissance de 2 : n &amp; (n−1) == 0 (une seule technique exploitant la représentation binaire). Exemple : 8 = 1000₂, 8−1 = 7 = 0111₂, 8 &amp; 7 = 0 ✓.</p>
</div>

<h3>Détection et correction d'erreurs</h3>
<p>Dans les communications numériques, des erreurs peuvent corrompre les bits. Les <strong>codes correcteurs</strong> utilisent les bases de numération et l'algèbre pour détecter et corriger ces erreurs.</p>
<p><strong>Bit de parité :</strong> on ajoute un bit pour que le total de bits à 1 soit pair. Détecte 1 erreur (mais ne la corrige pas).</p>
<p><strong>Code ISBN-13 :</strong> les 12 premiers chiffres d'un ISBN ont un chiffre de contrôle calculé par : somme alternée 1×d₁ + 3×d₂ + 1×d₃ + ... + 3×d₁₂ ≡ 0 (mod 10). Cela détecte toute erreur sur un seul chiffre et tout échange de deux chiffres consécutifs.</p>
<p><strong>Code de Hamming :</strong> ajoute k bits de parité à un message de m bits (positionnés aux puissances de 2 : 1, 2, 4, 8, ...) pour corriger 1 erreur et en détecter 2. La position de l'erreur est donnée par le XOR de toutes les positions des bits à 1 — ingénieux usage du binaire.</p>
'''

bases_content = pages['arithmetique/bases-numeration']['content']
insert_pos = bases_content.find('<h3>Exercice 1')
if insert_pos > 0:
    new_content = bases_content[:insert_pos] + bases_addition + bases_content[insert_pos:]
    pages['arithmetique/bases-numeration']['content'] = new_content
    print(f'bases-numeration updated: {len(new_content)} chars')
else:
    print('bases-numeration: insert position not found')

# Save
with open('assets/content/maths.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('maths.json saved!')

# Final check
with open('assets/content/maths.json', 'r', encoding='utf-8') as f:
    data2 = json.load(f)
pages2 = data2['pages']
sizes = [(len(p.get('content','')), k) for k,p in pages2.items() if p.get('type')=='lesson']
sizes.sort()
print('\nAll lesson sizes (sorted):')
for size, key in sizes:
    flag = ' *** UNDER 15k' if size < 15000 else ''
    print(f'  {size:6d}  {key}{flag}')
