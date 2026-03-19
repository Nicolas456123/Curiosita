#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichissement rhétorique.json — tous les articles < 15000 chars"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/rhetorique.json'

ADDITIONS = {
    'communication/storytelling': '<p class="resume-text">Les neurosciences du storytelling ont montré que les récits activent dans le cerveau des zones bien plus larges que les exposés factuels. Une présentation de données active les aires de traitement du langage et des chiffres ; un récit active en plus les zones sensorielles, motrices et émotionnelles — l\'auditeur « vit » l\'histoire. Ce phénomène de couplage neural (neural coupling) entre narrateur et auditeur explique pourquoi les histoires sont mémorisées 22 fois mieux que les faits seuls (Jennifer Aaker, Stanford). Les organisations qui maîtrisent le storytelling institutionnel — transformer leurs données en récits de clients, d\'impact social, de mission — développent un avantage communicationnel décisif dans un monde saturé d\'information.</p>',

    'communication/crise': '<p class="resume-text">La communication de crise digitale a transformé les temporalités de la gestion de crise. Une vidéo compromise, un tweet maladroit, un incident filmé par un client peuvent devenir viraux en quelques heures, avant même que l\'organisation ait pu préparer une réponse coordonnée. Cette accélération impose de nouvelles disciplines : la veille digitale temps réel (social listening), les dark sites (sites de crise préconfigurés prêts à être activés), les protocoles de validation rapide qui court-circuitent les circuits hiérarchiques habituels. La règle des « golden hours » — les premières heures où la narrative peut encore être influencée — est devenue la règle des « golden minutes » à l\'ère des réseaux sociaux.</p>',

    'ecriture/fondamentaux': '<p class="resume-text">L\'écriture est aussi une discipline du corps. Les conseils des grands auteurs convergent sur l\'importance des rituels physiques : Virginia Woolf écrivait debout, Hemingway également. Victor Hugo s\'enfermait nu dans sa chambre pour ne pas être tenté de sortir. Proust écrivait dans un appartement insonorisé, couché. Ces rituels ne sont pas des excentricités mais des stratégies pour entrer dans l\'état de concentration profonde que le psychologue Mihaly Csikszentmihalyi a appelé le « flow » — cet état d\'absorption totale où l\'écriture semble couler d\'elle-même. Établir ses propres rituels d\'écriture — heure fixe, lieu dédié, durée minimale quotidienne — est l\'une des recommandations les plus constantes des auteurs expérimentés.</p>',

    'ecriture/professionnelle': '<p class="resume-text">L\'écriture professionnelle est aussi une compétence de management. Des recherches en psychologie organisationnelle montrent que la clarté de l\'écrit interne d\'une organisation est corrélée avec la clarté de sa pensée stratégique et la qualité de ses décisions. Amazon est célèbre pour avoir remplacé les présentations PowerPoint par des mémos narratifs de 6 pages pour toutes les réunions importantes : l\'exercice de mettre en phrases complètes force à structurer réellement la pensée, là où les bullet points permettent de masquer l\'absence de raisonnement. Jeff Bezos a théorisé que la maîtrise de l\'écriture est une compétence de leadership fondamentale, pas un simple outil de communication.</p>',

    'ecriture/narrative': '<p class="resume-text">La structure en trois actes — situation initiale, complication, résolution — héritée d\'Aristote et codifiée par les scénaristes hollywoodiens, n\'est pas la seule structure narrative possible mais reste la plus universellement reconnue. D\'autres structures alternatives ont été théorisées : la structure en « kishōtenketsu » japonaise (introduction, développement, tournant surprise, conclusion) qui crée une tension sans conflit explicite ; la structure « en pile » de l\'essai montaignien qui accumule les digressions sans progression linéaire ; la structure circulaire des récits mythiques (voyage du héros de Campbell). La maîtrise de plusieurs structures narratives donne à l\'auteur une palette de choix conscients plutôt qu\'une dépendance inconsciente aux modèles dominants.</p>',

    'communication/numerique': '<p class="resume-text">Les algorithmes des plateformes numériques ont profondément transformé les règles de la communication écrite. Sur LinkedIn, les posts avec sauts de ligne fréquents et les « hooks » en première ligne sont favorisés algorithmiquement. Sur Twitter/X, la brièveté et la provocation augmentent l\'engagement. Ces contraintes algorithmiques créent de nouvelles rhétoriques nativement numériques : le thread (suite de tweets liés), le carousel LinkedIn (présentation visuelle), le fil de newsletter. L\'écrivain numérique performant doit comprendre ces grammaires algorithmiques tout en préservant la qualité et la sincérité de son message — un équilibre délicat entre optimisation et authenticité.</p>',

    'communication/theories': '<p class="resume-text">La théorie des systèmes de communication de Niklas Luhmann propose une vision radicalement différente : la communication n\'est pas un transfert d\'information d\'un émetteur à un récepteur, mais un événement improbable qui sélectionne simultanément une information, une manière de l\'exprimer (utterance) et une compréhension. Le malentendu n\'est pas un dysfonctionnement exceptionnel mais la condition normale — la communication réussie est ce qui est improbable et qui requiert des mécanismes de réduction de cette improbabilité (codes partagés, contextes institutionnels, rituels d\'interaction). Cette vision systémique remet en cause l\'illusion de transparence communicationnelle et invite à une plus grande humilité sur la transmission des intentions.</p>',

    'ecriture/argumentative': '<p class="resume-text">La rédaction argumentative mobilise des schèmes rhétoriques classiques que les grands auteurs d\'essais ont portés à leur plus haute expression. La concession (accorder une part de vérité à l\'adversaire avant de réfuter) renforce la crédibilité de l\'argumentateur : « Certes, il est vrai que… Cependant… » La réfutation par l\'absurde (reductio ad absurdum) pousse la thèse adverse jusqu\'à ses conséquences logiques inacceptables. La comparaison analogique transpose le problème dans un domaine plus familier pour le rendre intuitivement évident. Ces techniques, enseignées dans les classes de prépa française, ont produit l\'une des traditions d\'essayisme les plus rigoureuses au monde — de Montaigne à Simone Weil, de Tocqueville à Albert Camus.</p>',

    'ecriture/journalistique': '<p class="resume-text">Le journalisme de données (data journalism) a émergé comme un genre spécifique à l\'intersection de la statistique, du journalisme et du design visuel. The Guardian, Le Monde, ProPublica ont développé des équipes dédiées qui transforment des jeux de données massifs en récits journalistiques visuellement riches. La pyramide inversée classique s\'enrichit de visualisations interactives, de bases de données consultables, d\'explainers multimédias. Des scandales comme les Panama Papers ou les Pandora Papers n\'auraient pas été possibles sans ces nouvelles méthodes d\'analyse de données journalistiques. Cette évolution redéfinit les compétences requises du journaliste contemporain.</p>',

    'communication/medias': '<p class="resume-text">L\'économie de l\'attention (attention economy), théorisée par Herbert Simon dès 1971 et popularisée par Tim Wu (The Attention Merchants, 2016), analyse les médias comme des industries qui monétisent l\'attention humaine en la revendant aux annonceurs. Cette logique — maximiser le temps passé sur la plateforme à tout prix — a produit des biais algorithmiques vers les contenus émotionnels, conflictuels et sensationnels, indépendamment de leur valeur informationnelle. Les effets sur la santé mentale des utilisateurs (anxiété, comparaison sociale, addiction aux notifications) et sur le débat public (polarisation, désinformation) font l\'objet de recherches académiques et de débats politiques croissants sur la régulation des plateformes.</p>',
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

    for key, html in ADDITIONS.items():
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
