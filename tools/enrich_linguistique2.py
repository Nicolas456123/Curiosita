#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enrichit les articles restants de linguistique.json
"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/linguistique.json'

ENRICHMENTS = {
    'syntaxe/subordination-coordination': """<h3>La hiérarchie des structures syntaxiques</h3><p class="resume-text">La coordination et la subordination représentent deux façons fondamentalement différentes de combiner des propositions. La coordination établit une relation de symétrie : « Paul chante et Marie danse » — les deux propositions ont le même statut syntaxique. Les conjonctions de coordination (et, mais, ou, donc, or, ni, car) relient des éléments de même nature syntaxique.</p><p class="resume-text">La subordination crée une relation d'enchâssement où une proposition joue le rôle d'un constituant dans une autre. La relative (« l'homme qui chante »), la complétive (« je crois qu'il viendra »), la circonstancielle (« parce qu'il pleut ») sont des propositions subordonnées qui remplissent respectivement les fonctions de complément du nom, de complément d'objet et de complément circonstanciel. Cette récursivité — la possibilité d'enchâsser indéfiniment des propositions dans d'autres propositions — est l'une des caractéristiques fondamentales du langage humain.</p><div class="highlight-box"><p>La récursivité syntaxique est souvent citée comme l'une des propriétés distinctives du langage humain. Chomsky considère que la capacité à construire des structures syntaxiques infiniment complexes à partir de moyens finis est le propre du langage humain, absent chez les autres espèces.</p></div>""",

    'semantique/semantique-phrase': """<h3>Les opérateurs logiques et la sémantique des quantificateurs</h3><p class="resume-text">La sémantique formelle, inspirée de la logique mathématique, modélise le sens des phrases par des formules logiques. Les quantificateurs universels (« tous les chats ») et existentiels (« un chat ») interagissent de façon complexe. « Tous les étudiants ont lu un livre » est ambigu : chaque étudiant a-t-il lu le même livre, ou des livres différents ? Cette ambiguïté de portée des quantificateurs est un problème central en sémantique formelle.</p><p class="resume-text">Les temps verbaux sont également des opérateurs qui situent un événement dans le temps. La sémantique des temps (Reichenbach, Klein) distingue le temps de l'événement (E), le temps de référence (R) et le moment d'énonciation (S). Le plus-que-parfait (« il avait mangé ») situe E avant R, lui-même avant S. Ces analyses formelles permettent de rendre compte des relations temporelles complexes dans les récits.</p><div class="highlight-box"><p>La sémantique des mondes possibles (Kripke) permet de modéliser les énoncés modaux (possibilité, nécessité) et les attitudes propositionnelles (croyances, désirs). « Il est possible que Paul soit venu » signifie qu'il existe un monde possible accessible où Paul est venu. Cette formalisation a révolutionné l'analyse philosophique et linguistique de la modalité.</p></div>""",

    'semantique/metaphore-metonymie': """<h3>La théorie cognitive de la métaphore</h3><p class="resume-text">La sémantique cognitive (Lakoff et Johnson, Les métaphores dans la vie quotidienne, 1980) a révolutionné la conception de la métaphore. Loin d'être un ornement rhétorique exceptionnel, la métaphore est un mécanisme fondamental de la pensée humaine. Nous conceptualisons des domaines abstraits à travers des domaines plus concrets et corporellement ancrés. « Le temps, c'est de l'argent » (on dépense, gagne, investit du temps) révèle une métaphore conceptuelle omniprésente dans notre langue et notre pensée.</p><p class="resume-text">Les métaphores structurelles organisent un domaine en termes d'un autre (« la discussion est une guerre : il a attaqué ses arguments, il a défendu ses positions »). Les métaphores d'orientation ancrent des concepts dans l'espace (« le bonheur est en haut, la tristesse en bas » : « il est au sommet de sa forme », « il est déprimé »). Les métaphores ontologiques traitent des abstractions comme des entités (« l'inflation ronge nos économies »).</p><div class="highlight-box"><p>La métonymie — substitution par contiguïté (« boire un verre » pour « boire le contenu du verre ») — est souvent confondue avec la métaphore mais repose sur un mécanisme cognitif distinct : une relation de contiguïté référentielle plutôt qu'une relation de ressemblance. Les deux procédés interagissent dans la création de nouveaux sens lexicaux.</p></div>""",

    'sociolinguistique/contact-langues': """<h3>Les pidgins, créoles et leur genèse</h3><p class="resume-text">Le contact prolongé entre locuteurs de langues différentes peut donner naissance à des variétés nouvelles. Un pidgin est une langue auxiliaire de contact, à grammaire et vocabulaire réduits, utilisée pour des échanges pratiques entre groupes de langues maternelles différentes. Si un pidgin devient la langue maternelle d'une communauté (langue d'un foyer, d'une génération entière), il se complexifie et se transforme en créole — une langue à part entière avec ses propres structures grammaticales.</p><p class="resume-text">Le créole haïtien (à base française), le tok pisin (Papouasie-Nouvelle-Guinée, à base anglaise) et le papiamento (Antilles néerlandaises, à base espagnole/portugaise) sont des créoles pleinement développés. L'étude de leur grammaire révèle des régularités remarquables : tendance aux structures SVO, marqueurs préverbaux pour le temps, l'aspect et le mode, absence de flexion nominale. Ces régularités ont alimenté le débat sur la « bioprogramme linguistique » (Bickerton) — l'hypothèse d'une grammaire universelle innée.</p><div class="highlight-box"><p>L'hypothèse du bioprogramme de Derek Bickerton (1981) suggère que les créoles révèlent la grammaire universelle « de base » de l'espèce humaine, car leurs locuteurs l'ont construite ex nihilo, sans modèle adulte stable à imiter. Cette hypothèse reste controversée mais a stimulé la recherche sur les universaux linguistiques.</p></div>""",

    'semantique/pragmatique': """<h3>Les inférences conversationnelles et les implicatures</h3><p class="resume-text">La pragmatique étudie la façon dont le contexte détermine le sens d'un énoncé au-delà de son contenu littéral. Paul Grice a formalisé les principes de la coopération conversationnelle dans ses Maximes : quantité (dire ni plus ni moins que nécessaire), qualité (ne pas mentir ni asserter sans preuve), relation (être pertinent) et manière (être clair et ordonné). La violation apparente d'une maxime déclenche une implicature conversationnelle.</p><p class="resume-text">Quand quelqu'un dit « Tu peux me passer le sel ? », il ne demande pas une confirmation de capacité physique : la maxime de pertinence implique qu'il s'agit d'une requête. Quand, à une question sur les capacités de Pierre, on répond « Il est très ponctuel », l'implicature est que ses autres qualités sont douteuses — on viole la maxime de quantité pour suggérer ce qu'on ne veut pas dire explicitement.</p><div class="highlight-box"><p>La théorie des actes de parole (Austin, Searle) distingue l'acte locutoire (ce qui est dit), l'acte illocutoire (l'action accomplie en disant : promettre, ordonner, questionner) et l'acte perlocutoire (l'effet produit sur l'interlocuteur). Cette distinction est fondamentale pour la philosophie du langage et l'analyse du discours.</p></div>""",

    'morphologie/derivation': """<h3>La dérivation et la productivité morphologique</h3><p class="resume-text">La productivité d'un processus de dérivation mesure la facilité et la fréquence avec laquelle il crée de nouveaux mots. En français, le suffixe -tion est très productif (informatisation, mondialisation, précarisation) tandis que -ard (veinard, chauffard) est moins productif et a souvent une connotation péjorative. La productivité varie selon les domaines : les néologismes techniques utilisent massivement la dérivation savante (grecque et latine), les argots préfèrent la dérivation populaire.</p><p class="resume-text">La dérivation régressive (ou conversion dans les langues sans morphologie flexionnelle) crée un nouveau mot par simple changement de catégorie syntaxique : en anglais, « to email » (verbe) a été dérivé du nom « email ». En français, « le verbe » (substantivation d'un adjectif verbal) ou « je chante » → « le chant » (déverbalisation). Ces processus révèlent l'arbitraire du rapport entre formes et catégories grammaticales.</p><div class="highlight-box"><p>L'haplologie est un phénomène remarquable où le locuteur évite la répétition d'une séquence phonétique dans le processus de dérivation : on dit « tragédie » → « tragique » mais non *« tragédiien ». En anglais, « morphology » (et non *« morphologylogy ») s'explique par la simplification de la séquence redondante /lɒdʒi/.</p></div>""",

    'syntaxe/grammaire-generative': """<h3>Du modèle standard à la grammaire minimaliste</h3><p class="resume-text">La grammaire générative a connu plusieurs révisions majeures depuis les Structures syntaxiques de Chomsky (1957). Le modèle standard (1965) introduit les règles de transformation reliant structure profonde et structure de surface. La théorie des principes et des paramètres (années 1980) remplace les transformations par des principes universels et des paramètres dont la valeur varie selon les langues (ex : paramètre du sujet nul — certaines langues autorisent les sujets vides, d'autres non).</p><p class="resume-text">Le programme minimaliste (depuis 1993) cherche à ramener la grammaire à des opérations cognitives minimales. L'opération d'Accord (Merge) combine deux éléments syntaxiques en une structure. Le mouvement syntaxique est motivé par des besoins de vérification de traits formels (traits de cas, d'accord). L'objectif est de montrer que le langage humain est « optimal » dans un sens évolutif — il accomplit ses fonctions avec un minimum de mécanismes.</p><div class="highlight-box"><p>La faculté de langage, selon Chomsky, est un organe mental spécifique (le « langage comme organe biologique ») dont la structure innée — la Grammaire Universelle — détermine les paramètres de variation entre les langues. Cette thèse du nativisme linguistique s'oppose aux approches empiristes et constructivistes qui voient le langage comme une capacité cognitive générale.</p></div>""",

    'syntaxe/ordre-mots-universaux': """<h3>Les universaux implicationnels de Greenberg</h3><p class="resume-text">Joseph Greenberg, dans ses Universaux du langage (1963), a identifié des corrélations statistiques entre les propriétés typologiques des langues. Si une langue place le verbe avant l'objet (VO), elle tend à placer la préposition avant le nom (prépositions plutôt que postpositions). Si elle place l'objet avant le verbe (OV), elle tend à placer les postpositions. Ces universaux implicationnels révèlent des harmonies profondes dans l'organisation des langues.</p><p class="resume-text">La hiérarchie d'accessibilité de Keenan et Comrie (1977) montre que les langues forment des relatives sur le sujet plus facilement que sur l'objet direct, plus facilement que sur l'objet indirect, et ainsi de suite selon une échelle prévisible. Si une langue peut relativiser les objets indirects, elle peut aussi relativiser les objets directs et les sujets. Ces universaux ont des implications importantes pour la théorie de la Grammaire Universelle.</p><div class="highlight-box"><p>La langue OVS (objet-verbe-sujet) est extrêmement rare : seules quelques langues amazoniennes (hixkaryana) l'ont comme ordre de base. L'ordre SOV est le plus fréquent dans le monde (45 % des langues). SVO représente environ 42 % des langues, VSO environ 9 %. Les ordres OSV, OVS et VOS sont très rares.</p></div>""",
}

def insert_before_quiz(content, new_html):
    quiz_section = '<section class="content-section" id="quiz">'
    contenu_close = '</section>'

    quiz_idx = content.find(quiz_section)
    if quiz_idx == -1:
        return content

    contenu_end_idx = content.rfind(contenu_close, 0, quiz_idx)
    if contenu_end_idx == -1:
        return content

    return content[:contenu_end_idx] + new_html + contenu_close + content[quiz_idx:]

def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    enriched_count = 0
    for page_key, new_html in ENRICHMENTS.items():
        if page_key in data['pages']:
            page = data['pages'][page_key]
            if page.get('type') == 'course':
                old_len = len(page['content'])
                page['content'] = insert_before_quiz(page['content'], new_html)
                new_len = len(page['content'])
                print(f"Enriched {page_key}: {old_len} -> {new_len} chars (+{new_len-old_len})")
                enriched_count += 1
        else:
            print(f"WARNING: page not found: {page_key}")

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\nDone: {enriched_count} pages enriched.")

if __name__ == '__main__':
    main()
