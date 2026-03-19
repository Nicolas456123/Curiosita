#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enrichit les articles courts de langues.json
"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/langues.json'

ENRICHMENTS = {
    'linguistique/semantique': """
        <h3>La sémantique cognitive et les prototypes</h3>
        <p>La théorie des <strong>prototypes</strong> (Eleanor Rosch, années 1970) révolutionne la sémantique en montrant que les catégories naturelles ne sont pas définies par des conditions nécessaires et suffisantes, mais organisées autour d'exemplaires typiques (prototypes). Un rouge-gorge est un oiseau plus « typique » qu'une autruche ou un manchot. Les frontières catégorielles sont floues, non arbitraires.</p>
        <p>Cette approche explique des phénomènes que la sémantique componentielle ne peut pas saisir : pourquoi « escalier roulant » est un escalier moins typique qu'un escalier classique ; pourquoi les métaphores fonctionnent en exploitant les propriétés saillantes des prototypes. La théorie des prototypes est devenue un outil central en didactique des langues et en terminologie.</p>
        <h3>Dénotation, connotation et isotopie</h3>
        <p>La <strong>dénotation</strong> est le sens premier, référentiel d'un mot (le sens du dictionnaire). La <strong>connotation</strong> regroupe les valeurs affectives, culturelles et stylistiques associées : « mourir » et « trépasser » dénotent la même réalité mais connotent différemment (registre courant vs soutenu). En analyse littéraire, les connotations d'un texte constituent son réseau de signification implicite.</p>
        <p>Le concept d'<strong>isotopie</strong> (Greimas) désigne la récurrence d'un sème (trait sémantique élémentaire) dans un texte, qui crée une cohérence de sens. Dans un texte sur la mer, les isotopies de l'eau, du mouvement, de l'infini se renforcent mutuellement. L'analyse sémiotique des textes repose sur l'identification de ces réseaux isotopiques qui structurent la signification globale d'un discours.</p>
        <div class="highlight-box">
          <p><strong>La sémantique dans le TAL :</strong> Le traitement automatique du langage naturel (TALN) a révolutionné la sémantique lexicale. Les modèles de langue comme Word2Vec ou BERT représentent les mots comme des vecteurs dans un espace multidimensionnel, capturant les relations sémantiques par la proximité géométrique. Ces modèles permettent de calculer automatiquement similarités, analogies et désambiguïsations — avec des performances qui rivalisent parfois avec les jugements humains.</p>
        </div>""",

    'linguistique/histoire-langues': """
        <h3>La méthode comparative et la reconstruction du proto-indo-européen</h3>
        <p>La linguistique historique comparée, fondée au XIXe siècle par Bopp, Grimm et Rask, a montré que des langues aussi différentes que le sanskrit, le grec, le latin, le persan, l'anglais et le russe descendent d'une même langue ancestrale : le <strong>proto-indo-européen</strong> (PIE). Cette langue n'est attestée dans aucun document — elle a été entièrement reconstruite par la méthode comparative.</p>
        <p>La méthode consiste à aligner des mots de sens équivalent dans plusieurs langues apparentées, à identifier des correspondances sonores régulières, puis à remonter à la forme originale. Ainsi « père » (fr.), « pater » (lat.), « father » (angl.), « vater » (all.), « patér » (gr.), « pitar » (sansc.) convergent vers une forme reconstruite *ph₂tḗr. Les astérisques signalent les formes reconstruites, non attestées.</p>
        <h3>Les grandes familles de langues et leur distribution</h3>
        <p>On dénombre environ 400 familles de langues dans le monde. La famille <strong>indo-européenne</strong> est la plus étudiée mais pas la plus nombreuse : le <strong>sino-tibétain</strong> (mandarin, cantonais, tibétain) a le plus grand nombre de locuteurs natifs. Le <strong>niger-congo</strong> est la famille avec le plus de langues (plus de 1500). L'<strong>afro-asiatique</strong> (arabe, hébreu, amharique, berbère) relie l'Afrique du Nord et le Proche-Orient.</p>
        <div class="highlight-box">
          <p><strong>Les langues isolées :</strong> Certaines langues n'ont aucune parenté connue avec d'autres langues vivantes. Le <strong>basque</strong>, parlé dans les Pyrénées, est la langue isolée la plus célèbre d'Europe. Le <strong>coréen</strong> et le <strong>japonais</strong> sont partiellement contestés dans leur classification mais restent largement sans parenté démontrée. Ces langues isolées représentent des trésors pour comprendre la diversité des structures linguistiques possibles.</p>
        </div>""",

    'linguistique/sociolinguistique': """
        <h3>La variation diastratique et les sociolectes</h3>
        <p>La variation <strong>diastratique</strong> oppose les variétés de langue associées à différents groupes sociaux. L'argot des banlieues françaises (verlan, emprunts à l'arabe et à l'anglais), le parler des cadres sup, la langue des ados : ces sociolectes sont des marqueurs d'identité sociale autant que des systèmes de communication. Utiliser le « bon » registre dans le « bon » contexte est une compétence sociolinguistique fondamentale.</p>
        <p>Basil Bernstein (1958) avait distingué le code <strong>restreint</strong> (contextualisé, implicite, adapté au groupe familier) du code <strong>élaboré</strong> (explicite, décontextualisé, adapté à des interlocuteurs inconnus). Sa thèse — que les enfants des classes populaires maîtrisent surtout le code restreint, défavorisant leur réussite scolaire — a été très influente mais aussi critiquée pour avoir naturalisé des inégalités sociales sous couvert d'analyse linguistique.</p>
        <h3>Les politiques linguistiques dans le monde francophone</h3>
        <p>La France mène depuis des siècles une politique volontariste d'unification linguistique, passant de l'édit de Villers-Cotterêts (1539) à la loi Toubon (1994) qui impose le français dans l'espace public. L'<strong>Organisation Internationale de la Francophonie</strong> (OIF) fédère 88 États et gouvernements où le français est une langue officielle, d'enseignement ou de communication. Le français est la 5e langue du monde par le nombre de locuteurs, la 2e langue étrangère enseignée.</p>
        <div class="highlight-box">
          <p><strong>Le créole réunionnais et la créolisation :</strong> Le créole réunionnais, comme tous les créoles à base française, est une langue à part entière — non un « français dégradé ». Sa grammaire est entièrement différente du français standard, bien que son vocabulaire en soit largement issu. La reconnaissance juridique et scolaire des créoles en Outre-mer français est encore un débat vif, entre logiques d'intégration nationale et revendications identitaires.</p>
        </div>""",
}

def insert_into_course_content(content, new_html):
    """Insère new_html dans la div course-content, avant sa fermeture."""
    patterns = [
        '</div>\n    </section>\n    <section class="content-section" id="quiz">',
        '</div>\n      </section>\n      <section class="content-section" id="quiz">',
        '</div>\n</section>\n<section class="content-section" id="quiz">',
    ]
    for pat in patterns:
        idx = content.find(pat)
        if idx != -1:
            return content[:idx] + new_html + '\n' + content[idx:]

    # Fallback: before quiz section
    quiz_fallback = '<section class="content-section" id="quiz">'
    idx = content.find(quiz_fallback)
    if idx != -1:
        close_idx = content.rfind('</section>', 0, idx)
        if close_idx != -1:
            return content[:close_idx] + new_html + '\n      </div>\n    </section>\n    ' + content[idx:]

    return content

def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    enriched_count = 0
    for page_key, new_html in ENRICHMENTS.items():
        if page_key in data['pages']:
            page = data['pages'][page_key]
            if page.get('type') == 'lesson':
                old_len = len(page['content'])
                new_content = insert_into_course_content(page['content'], new_html)
                new_len = len(new_content)
                if new_len > old_len:
                    page['content'] = new_content
                    print(f"Enriched {page_key}: {old_len} -> {new_len} chars (+{new_len-old_len})")
                    enriched_count += 1
                else:
                    print(f"WARNING: no insertion found for {page_key}")
        else:
            print(f"WARNING: page not found: {page_key}")

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\nDone: {enriched_count} pages enriched.")

if __name__ == '__main__':
    main()
