#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fourth pass: final additions to reach 15000+ for all remaining articles.
Then enriches cinema, design, spectacle.
"""
import json

# Final additions for remaining articles
PASS4_HISTOIRE_ART = {
    "art-prehistorique/lascaux": """<h3>La place de Lascaux dans l'histoire universelle</h3><p class="resume-text">Lascaux figure parmi les premières entrées de toute encyclopédie sur l'histoire de l'art — et pour cause. Ces images millénaires posent une question que nous ne pouvons pas éluder : qu'est-ce qui fait un être humain ? La réponse de Lascaux est visuelle et immédiate : la capacité de contempler le monde, d'en être ému, et de vouloir fixer cette émotion dans une forme durable qui survivra à l'artiste. Le geste de Lascaux est notre geste.</p>""",

    "art-prehistorique/art-mesopotamien": """<h3>L'art mésopotamien et la religion</h3><p class="resume-text">Toute l'art mésopotamienne est indissociable de la religion polythéiste sumérienne, akkadienne et babylonienne. Les grandes divinités — Enlil, Enki, Inanna, Marduk, Assur — étaient représentées sous des formes anthropomorphes majestueuses et vénérées dans des temples-ziggourats. Les statues divines — objets vivants habillés, nourris et transportés en procession — n'étaient pas de simples représentations mais des vecteurs de présence divine. Cette conception de l'image divine comme présence réelle, non comme symbole, traverse toute la Méditerranée antique et trouve son écho dans les débats byzantins sur les icônes.</p><p class="resume-text">La mythologie mésopotamienne a profondément influencé les traditions religieuses postérieures. Le récit du Déluge de l'Épopée de Gilgamesh présente des parallèles frappants avec le récit noachique biblique. La figure de la déesse Ishtar (Inanna) se retrouve dans l'Astarté phénicienne et l'Aphrodite grecque. Les démons et les génies protecteurs (apkallu, lamassu) ont leurs équivalents dans les angelologies et démonologies juives, chrétiennes et islamiques.</p>""",

    "art-prehistorique/art-egyptien": """<h3>La représentation de la mort et l'au-delà dans l'art égyptien</h3><p class="resume-text">L'art funéraire constitue la partie la plus importante et la mieux conservée de l'art égyptien. Les tombes — de la simple fosse pré-dynastique à la pyramide monumentale — sont conçues comme des demeures éternelles pour le défunt et ses proches. La décoration des chambres funéraires reproduit le monde idéal que le mort habitera dans l'au-delà : jardins fleuris, banquets somptueux, chasses et pêches abondantes. Ces scènes ne sont pas de simples décorations mais des formules magiques : représenter une chose, c'est la rendre réelle dans l'éternité.</p><p class="resume-text">Le Livre des Morts — plus précisément le "Livre de la sortie au jour" — est le guide de voyage du mort dans l'au-delà. Ses formules et vignettes illustrées lui permettent de passer les épreuves du jugement d'Osiris (la pesée du coeur contre la plume de Maât), de prononcer les déclarations d'innocence devant les 42 assesseurs divins et d'accéder aux Champs des Roseaux. La scène de la pesée du coeur est l'une des compositions iconographiques les plus complexes et les plus belles de l'art égyptien.</p>""",

    "art-prehistorique/art-grec": """<h3>La sculpture grecque et le corps nu</h3><p class="resume-text">La représentation du corps nu masculin est l'une des originalités les plus profondes de l'art grec par rapport aux autres civilisations antiques. Dans l'Égypte ou en Mésopotamie, le nu est rare et connoté (prisonnier, esclave) ou mythologique. En Grèce, le nu masculin est le mode de représentation normal des héros, des athlètes et des dieux — une normalisation que les historiens relient à la culture du gymnase (etymologiquement "lieu où l'on est nu") et aux jeux olympiques où les athlètes rivalisaient nus. Cette esthétisation du corps nu masculin a profondément marqué toute la tradition artistique occidentale.</p><p class="resume-text">La nudité féminine, plus rare dans l'art grec classique, fut progressivement acceptée à partir du IVe siècle. L'Aphrodite de Cnide de Praxitèle (vers 360 av. J.-C.) inaugure la grande tradition de la Vénus pudique — déesse qui découvre son corps à la toilette dans un geste qui est à la fois révélation et protection de sa nudité. Cette ambivalence — le corps féminin offert au regard mais simultanément protégé par le geste — structurera toute la représentation de la féminité dans l'art occidental jusqu'à l'ère contemporaine.</p>""",

    "art-prehistorique/art-romain": """<h3>Rome et la naissance du musée</h3><p class="resume-text">Rome a inventé une forme de musée avant la lettre. Les collections d'oeuvres d'art grecques rapportées par les généraux victorieux (Marcellus à Agrigente, Paullus à Pydna, Mummius à Corinthe) furent exposées dans des espaces publics — portiques, temples, forums — accessibles aux citoyens romains. Ces collections constituaient à la fois une démonstration de puissance militaire et une éducation esthétique du peuple romain. La villa Hadriana à Tivoli, avec ses répliques des lieux les plus célèbres du monde grec, était un "musée de voyages imaginaires" — le premier "musée" dans le sens moderne d'un espace conçu pour accueillir et montrer des oeuvres d'art.</p><p class="resume-text">La pratique romaine de copier les statues grecques originales pour les villas et les jardins privés constitue l'une des plus importantes sources de connaissance de l'art grec. Ces copies en marbre d'originaux grecs en bronze permettent de reconstituer des oeuvres perdues. Mais elles posent aussi des questions complexes : une copie romaine d'une oeuvre grecque perdue est-elle "de l'art grec" ? La distinction entre original et copie, si évidente pour nous, était moins nette dans l'Antiquité, où la qualité d'exécution primait sur l'originalité de composition.</p>""",

    "art-medieval/art-byzantin": """<h3>L'héritage artistique de Byzance dans le monde contemporain</h3><p class="resume-text">L'influence byzantine sur l'art contemporain est plus présente qu'il n'y paraît. Les artistes de l'Art Nouveau — Gustav Klimt en particulier — ont directement puisé dans les fonds d'or et les silhouettes hiératiques des mosaïques byzantines pour créer leurs compositions décoratives de style "Jugendstil". Le Baiser de Klimt (1907-1908), avec ses surfaces dorées compartimentées en motifs géométriques et ses figures figées dans une étreinte éternelle, est impensable sans la tradition des mosaïques de Ravenne.</p>""",

    "art-medieval/art-roman": """<h3>L'art roman et la mémoire collective</h3><p class="resume-text">Les édifices romans — abbayes, cathédrales, châteaux — sont les pierres angulaires de l'identité de nombreuses villes et régions européennes. Vézelay, Conques, Le Puy-en-Velay, Autun, Moissac — ces noms évoquent immédiatement leur patrimoine roman. La conservation et la mise en valeur de ce patrimoine est un enjeu économique (tourisme) et identitaire (appartenance à une histoire commune) majeur. Les destructions de la Révolution française et les restaurations parfois abusives du XIXe siècle ont posé les premières questions modernes sur le droit de modifier, compléter ou reconstruire un patrimoine hérité.</p>""",

    "art-medieval/art-gothique": """<h3>Notre-Dame de Paris : catastrophe et renaissance</h3><p class="resume-text">L'incendie de Notre-Dame de Paris le 15 avril 2019, qui détruisit la flèche de Viollet-le-Duc et une grande partie de la charpente médiévale, a mobilisé une émotion mondiale sans précédent autour d'un monument gothique. Plus d'un milliard d'euros de dons furent récoltés en quelques jours dans le monde entier. La reconstruction, achevée à l'identique en 2024, a posé des questions fondamentales sur la restauration du patrimoine : doit-on reconstruire à l'identique ? Innover ? Quelle est la valeur de l'authenticité versus celle de la continuité symbolique ?</p>""",

    "renaissance/leonard-de-vinci": """<h3>Léonard et les collections françaises</h3><p class="resume-text">La France détient le plus grand ensemble au monde de peintures de Léonard de Vinci. La Joconde, la Vierge aux rochers, Saint Jean-Baptiste, la Sainte Anne — ces oeuvres sont entrées dans les collections royales françaises grâce à François Ier, qui invita Léonard à Amboise en 1516. Le vieux maître passa ses trois dernières années au château du Clos Lucé, honoré comme un sage universel plutôt que contraint à peindre. À sa mort en 1519, il légua à son élève Francesco Melzi ses manuscrits et ses tableaux. Les oeuvres passèrent ensuite au roi de France, fondant le noyau de ce qui deviendra le musée du Louvre.</p>""",

    "renaissance/raphael": """<h3>La tapisserie Sixtine et les arts décoratifs de Raphaël</h3><p class="resume-text">Les cartons des tapisseries des Actes des Apôtres (1515-1516), commandés par le pape Léon X pour la chapelle Sixtine, montrent Raphaël dans le rôle de grand coordinateur d'une production artisanale complexe. Envoyés aux ateliers de Pieter van Aelst à Bruxelles, ces cartons ont été exécutés en tentures de soie et de fil d'or à prix d'or. Les tapisseries originales, aujourd'hui au Vatican, créent avec les fresques de Michel-Ange un dialogue esthétique complexe entre les deux plus grands artistes de la Haute Renaissance. Les cartons, conservés au Victoria and Albert Museum, ont eux-mêmes acquis le statut d'oeuvres à part entière.</p>""",
}


def enrich_discipline(discipline, enrichments, base_path="C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content"):
    filepath = f"{base_path}/{discipline}.json"
    with open(filepath, encoding='utf-8') as fp:
        data = json.load(fp)

    changed = 0
    for key, addition in enrichments.items():
        if key not in data['pages']:
            print(f"  WARNING: key not found: {key}")
            continue
        content = data['pages'][key]['content']
        if len(content) >= 15000:
            print(f"  {key}: already {len(content)} chars, skipping")
            continue
        if '<section class="content-section" id="quiz">' in content:
            content = content.replace(
                '<section class="content-section" id="quiz">',
                addition + '\n<section class="content-section" id="quiz">'
            )
        else:
            content = content.rstrip()
            if content.endswith('</section>'):
                content = content[:-10] + addition + '</section>'
            else:
                content += addition
        data['pages'][key]['content'] = content
        new_len = len(data['pages'][key]['content'])
        print(f"  {key}: {new_len} chars")
        changed += 1

    with open(filepath, 'w', encoding='utf-8') as fp:
        json.dump(data, fp, ensure_ascii=False, indent=2)
    print(f"Saved {discipline}.json ({changed} articles enriched)")

print("=== histoire-art (pass 4) ===")
enrich_discipline("histoire-art", PASS4_HISTOIRE_ART)
print("\nDone!")
