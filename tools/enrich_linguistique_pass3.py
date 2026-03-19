#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Troisième passe linguistique.json — articles restants < 15000 chars"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/linguistique.json'

PASS3 = {
    'phonetique/voyelles-consonnes': '<p class="resume-text">La distinction voyelle/consonne a une base à la fois phonétique (le degré de constriction dans le tractus vocal) et phonologique (les rôles dans la structure syllabique). Mais cette distinction est gradient : les semi-voyelles ou glides (/j/, /w/) sont à la frontière des deux catégories, phonétiquement proches de voyelles hautes mais fonctionnant comme des consonnes au début de syllabe. Les syllabes sans consonne sont universelles, mais les syllabes sans voyelle existent aussi : dans certaines langues slaves, des consonnes liquides ou nasales peuvent former le noyau syllabique (en tchèque, « vlk » [vlk] signifie « loup », sans voyelle).</p>',

    'morphologie/morphemes': '<p class="resume-text">La notion de morphème a été raffinée par la morphologie distribuée (Halle et Marantz, 1993), qui sépare les opérations syntaxiques (combinaison de traits abstraits) de l\'insertion phonologique (choix de la forme sonore du morphème). Cette approche permet de rendre compte des suppléances (formes morphémiques sans lien phonologique apparent comme « aller/vais/allons ») et de l\'homonymie morphologique (même forme pour plusieurs fonctions grammaticales). Elle unifie morphologie et syntaxe sous un même cadre computationnel, dissolvant la frontière traditionnelle entre les deux niveaux d\'analyse.</p>',

    'morphologie/flexion': '<p class="resume-text">La morphologie flexionnelle a des implications importantes pour le traitement cognitif du langage. Des recherches en psycholinguistique ont montré que les mots fléchis réguliers sont traités différemment des mots irréguliers : les formes régulières semblent être analysées (décomposées en racine + affixe) tandis que les formes irrégulières sont souvent stockées et récupérées comme unités entières dans le lexique mental. Ce débat entre stockage et décomposition morphologique — analogue au débat règles/mémorisation en phonologie — anime la psycholinguistique computationnelle depuis les travaux de Pinker et Prince.</p>',

    'morphologie/derivation': '<p class="resume-text">La dérivation morphologique interagit avec la sémantique lexicale de façon complexe : le sens d\'un dérivé n\'est pas toujours prévisible à partir de la règle de dérivation. « Lecteur » désigne normalement un agent, mais « aspirateur » désigne un instrument. « Cuisinier » est un agent professionnel, « mitrailleur » aussi. Ces variations dans l\'interprétation sémantique des dérivés reflètent des contraintes sémantiques sur les bases verbales (telicité, causativité) et des contraintes pragmatiques (pertinence des propriétés à nommer). La dérivation n\'est donc pas une opération purement formelle mais une construction de sens guidée par des facteurs sémantiques et encyclopédiques.</p>',

    'morphologie/typologie-morphologique': '<p class="resume-text">Les nouvelles technologies de traitement de texte et d\'analyse de corpus ont permis des études typologiques morphologiques à grande échelle sur des centaines de langues. Des projets comme WALS (World Atlas of Language Structures) recensent et cartographient les propriétés morphologiques de 2678 langues. Ces données massives permettent de tester des universaux implicationnels, de tracer des aires typologiques géographiques, et d\'étudier la diffusion des traits morphologiques par contact. Cette linguistique de corpus typologique représente un changement de paradigme dans la discipline, passant d\'études approfondies de quelques langues à des analyses statistiques sur des centaines.</p>',

    'syntaxe/constituants-syntagmes': '<p class="resume-text">La notion de constituant syntaxique a été formalisée dans les grammaires syntagmatiques hors-contexte (Context-Free Phrase Structure Grammars), qui génèrent des arbres syntaxiques par des règles de réécriture. Ces formalismes, popularisés en linguistique computationnelle, ont permis le développement de parseurs automatiques (Stanford Parser, Berkeley Parser) capables d\'analyser syntaxiquement des millions de phrases. Les treebanks — corpus annotés syntaxiquement à la main — comme le Penn Treebank (anglais), le French Treebank ou UD (Universal Dependencies) sont devenus des ressources fondamentales pour l\'entraînement de ces outils.</p>',

    'syntaxe/fonctions-syntaxiques': '<p class="resume-text">La Grammaire Fonctionnelle Lexicale (LFG, Bresnan) et la Grammaire Syntagmatique Guidée par les Têtes (HPSG, Pollard et Sag) sont deux théories qui formalisent précisément les fonctions syntaxiques et leurs correspondances avec la structure de constituants. Dans LFG, les fonctions syntaxiques (SUJET, OBJET, OBJET-INDIRECT) sont représentées séparément des arbres syntagmatiques, dans des structures-f (structures fonctionnelles). Cette séparation permet de rendre compte de phénomènes comme les constructions sans sujet canonique, les constructions ergatives, et les langues où les fonctions syntaxiques ne sont pas alignées avec les rôles thématiques de façon simple.</p>',

    'syntaxe/subordination-coordination': '<p class="resume-text">La subordination et la coordination ont des propriétés asymétriques dans toutes les langues. La coordination est généralement symétrique (les deux conjoints ont les mêmes droits syntaxiques) et équivalente (on ne peut extraire un élément hors d\'un conjoint : *« Quel livre a-t-il lu et acheté le journal ? »). La subordination est asymétrique (la principale domine la subordonnée) et plus perméable à l\'extraction dans certains contextes. Ces contraintes, formalisées dans les théories des îlots syntaxiques (Ross 1967), ont généré des décennies de recherche sur les limites des transformations syntaxiques et la nature des contraintes sur la grammaire universelle.</p>',

    'syntaxe/ordre-mots-universaux': '<p class="resume-text">Les variations dans l\'ordre des mots ont des corrélats cognitifs mesurables. Des expériences de temps de lecture montrent que les phrases respectant l\'ordre canonique d\'une langue sont traitées plus rapidement que les phrases avec ordre marqué. Des études typologiques en psycholinguistique (Gibson et al., 2013) montrent que les langues tendent à minimiser les dépendances à longue distance dans leur ordre de mots de base, en accord avec la théorie de la localité dépendancielle. Ces résultats suggèrent que les universaux d\'ordre des mots reflètent en partie des optimisations cognitives pour faciliter le traitement du langage en temps réel.</p>',

    'semantique/sens-reference': '<p class="resume-text">La sémantique des mondes possibles (Kripke, Lewis) a permis de formaliser des phénomènes comme la modalité (nécessité, possibilité), les conditionnels, et les attitudes propositionnelles (croire, savoir, désirer). « Il est nécessaire que 2+2=4 » est vrai dans tous les mondes possibles ; « Il est possible qu\'il pleuve demain » est vrai si la pluie est vraie dans au moins un monde possible accessible. Cette sémantique formelle a des applications en linguistique computationnelle (systèmes de questions-réponses, raisonnement automatique) et en philosophie (analyse des conditionnels contrefactuels, de la causalité).</p>',

    'semantique/relations-lexicales': '<p class="resume-text">Les embeddings de mots (word2vec, GloVe, FastText) capturent les relations sémantiques lexicales de façon distributionnelle : des mots qui apparaissent dans des contextes similaires reçoivent des représentations vectorielles proches. Ces représentations reproduisent automatiquement des relations d\'analogie (« roi » - « homme » + « femme » ≈ « reine »), de similarité sémantique, et permettent la désambiguïsation contextuelle. Les grands modèles de langue (BERT, GPT) ont poussé cette approche plus loin : les représentations sont contextuelles (le même mot a des représentations différentes selon son contexte), capturant ainsi la polysémie et les nuances sémantiques fines.</p>',

    'semantique/semantique-phrase': '<p class="resume-text">La sémantique dynamique (Groenendijk et Stokhof, File Change Semantics de Heim) analyse le sens des phrases non pas comme des conditions de vérité statiques mais comme des opérations sur des états d\'information. Cette approche rend compte de la progression du discours : une phrase anaphorique (« Il l\'a vue ») met à jour l\'état d\'information en résolvant les pronoms par rapport à des référents introduits précédemment. Cette perspective dynamique est cruciale pour modéliser la cohérence du discours et a des applications en génération et compréhension automatique du texte.</p>',

    'semantique/metaphore-metonymie': '<p class="resume-text">La distinction entre métaphore et métonymie repose sur le type de relation entre domaine source et cible. La métaphore établit une relation de similarité entre deux domaines distincts (le temps est de l\'argent). La métonymie exploite une relation de contiguïté ou d\'inclusion dans le même domaine (« boire un verre » pour le contenu, « lire Proust » pour l\'œuvre). La synecdoque est un cas particulier de métonymie (la partie pour le tout : « voile » pour « bateau »). Ces distinctions, importantes en rhétorique classique, ont été reprises par la linguistique cognitive pour analyser les processus de conceptualisation et de transfert de sens dans le langage ordinaire.</p>',

    'semantique/pragmatique': '<p class="resume-text">L\'interprétation pragmatique fait appel à des connaissances encyclopédiques, situationnelles et culturelles que la linguistique formelle peine à formaliser. Comprendre l\'ironie (dire le contraire de ce qu\'on pense), l\'humour (exploitation de scripts cognitifs contradictoires), les sous-entendus culturels (« Il a une bonne table » implique un niveau de vie élevé en France) requiert des processus inférentiels complexes. Les systèmes de traitement automatique du langage naturel, même très performants, montrent encore des limites dans ces domaines qui nécessitent la compréhension du contexte pragmatique et de la pragmatique interculturelle.</p>',
}


def enrich_content(content, new_html):
    quiz_marker = '<section class="content-section" id="quiz">'
    idx = content.find(quiz_marker)
    if idx != -1:
        return content[:idx] + new_html + content[idx:]
    last_section = content.rfind('</section>')
    if last_section != -1:
        return content[:last_section] + new_html + content[last_section:]
    return content + new_html


def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    pages = data.get('pages', {})
    modified = 0
    skipped = 0

    for key, html in PASS3.items():
        if key not in pages:
            print(f'SKIP (not found): {key}')
            skipped += 1
            continue

        page = pages[key]
        current_content = page.get('content', '') or ''

        if len(current_content) >= 15000:
            print(f'SKIP (already >= 15000): {key} ({len(current_content)} chars)')
            skipped += 1
            continue

        new_content = enrich_content(current_content, html)
        pages[key]['content'] = new_content
        status = 'OK' if len(new_content) >= 15000 else 'PARTIAL'
        print(f'{status}: {key} ({len(current_content)} -> {len(new_content)} chars)')
        modified += 1

    data['pages'] = pages

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'\nDone: {modified} articles enriched, {skipped} skipped.')


if __name__ == '__main__':
    main()
