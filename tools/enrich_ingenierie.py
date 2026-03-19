import json, re, sys

path = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/ingenierie.json'
with open(path, encoding='utf-8') as f:
    data = json.load(f)

def add_to_contenu(content, extra_html):
    """Insert extra HTML just before the closing </section> of id="contenu"."""
    # Find the contenu section closing tag
    marker = '</section>\n\n<section class="content-section" id="quiz"'
    if marker not in content:
        # Try alternate
        marker2 = '</section><section class="content-section" id="quiz"'
        if marker2 in content:
            return content.replace(marker2, extra_html + '</section><section class="content-section" id="quiz"', 1)
        # just append before last </section>
        # find the section id=contenu end
        idx = content.rfind('</section>')
        # find second-to-last
        idx2 = content.rfind('</section>', 0, idx)
        if idx2 > 0:
            return content[:idx2] + extra_html + '</section>' + content[idx2+len('</section>'):]
    return content.replace(marker, extra_html + marker, 1)

# Test on one page
key = 'mecanique/forces-et-mouvements'
p = data['pages'][key]
original = p['content']

extra = """<h3>Travail et énergie mécanique</h3><p class="resume-text">Le <strong>travail</strong> d'une force est le produit scalaire de cette force par le déplacement du point d'application. Lorsqu'une force est parallèle au déplacement, le travail est maximal ; lorsqu'elle est perpendiculaire, il est nul. Cette notion est au cœur du principe des travaux virtuels, outil puissant pour analyser les systèmes mécaniques complexes sans avoir à calculer toutes les forces internes.</p><p class="resume-text">L'<strong>énergie cinétique</strong> d'un corps est la moitié du produit de sa masse par le carré de sa vitesse (Ec = ½mv²). Elle représente l'énergie stockée dans le mouvement. Le <strong>théorème travail-énergie</strong> établit que la variation d'énergie cinétique d'un système est égale au travail total des forces qui s'exercent sur lui.</p><div class="highlight-box"><p>La conservation de l'énergie mécanique explique pourquoi un pendule revient toujours à sa hauteur initiale en l'absence de frottement.</p></div>"""

result = add_to_contenu(original, extra)
print("Original length:", len(original))
print("Result length:", len(result))
print("Changed:", original != result)

# Check where contenu ends
idx = original.find('id="contenu"')
print("contenu section found at:", idx)
# Find the section after
idx2 = original.find('<section', idx+1)
print("Next section at:", idx2)
print("Content around that point:")
print(repr(original[idx2-50:idx2+50]))
