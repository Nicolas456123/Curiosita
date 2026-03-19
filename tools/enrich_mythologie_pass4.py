#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Quatrième passe finale : mythologie.json"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/mythologie.json'
QUIZ_MARKER = '<section class="content-section" id="quiz">'

PASS4 = {
    'mythologies-antiques/mythologie-nordique': """<h3>La poésie scaldique et la mémoire des mythes</h3>
<p class="resume-text">La poésie scaldique nordique utilisait des kennings (métaphores composées) pour invoquer les mythes dans chaque vers : « tempête des épées » pour la bataille, « cheval de la mer » pour le navire. Cette densité mythologique dans le langage quotidien témoigne de la pénétration des récits divins dans la conscience culturelle nordique. La récupération romantique de ces mythes au XIXe siècle (par les nationalistes scandinaves, puis par Wagner et Tolkien) en a fait un patrimoine mondial qui continue d'irriguer la fantasy contemporaine.</p>""",

    'mythologies-antiques/mythologie-egyptienne': """<h3>L'Égypte et la naissance de l'écriture sacrée</h3>
<p class="resume-text">Les hiéroglyphes égyptiens sont l'une des trois grandes inventions indépendantes de l'écriture avec le cunéiforme sumérien et les pictogrammes chinois. Leur déchiffrement par Champollion (1822) a ouvert un accès direct à 3000 ans de textes sacrés, littéraires et administratifs. La tradition de sacraliser l'écriture — chaque hiéroglyphe est une image divine — a nourri la tradition hermétique occidentale et l'idée que les lettres et les mots contiennent une puissance propre, présente dans la Kabbale hébraïque et les traditions magiques médiévales.</p>""",

    'mythologies-antiques/mythologie-mesopotamienne': """<h3>La bibliothèque d'Assurbanipal et la transmission du savoir</h3>
<p class="resume-text">La bibliothèque d'Assurbanipal à Ninive (VIIe siècle av. J.-C.) était l'une des premières collections systématiques de textes de l'histoire humaine. Le roi avait envoyé des scribes dans tout son empire pour copier et collecter les textes. Cette vision du savoir comme patrimoine à conserver et transmettre — distincte de la simple conservation des archives administratives — annonce les grandes bibliothèques alexandrine et baghdadienne. La destruction de la bibliothèque lors de la chute de Ninive, puis sa redécouverte archéologique au XIXe siècle, est une parabole de la fragilité et de la résilience du patrimoine culturel humain.</p>""",

    'grandes-religions/christianisme': """<h3>Le christianisme face aux défis contemporains</h3>
<p class="resume-text">Le christianisme affronte plusieurs défis majeurs au XXIe siècle : la sécularisation en Europe (où les pratiquants réguliers ne représentent plus que 10-15% de la population dans de nombreux pays), les scandales d'abus sexuels dans le clergé catholique, la montée du fondamentalisme évangélique aux États-Unis et dans le Sud global, et les questions de bioéthique et d'environnement. La réponse à ces défis varie considérablement selon les traditions et les contextes géographiques. Mais le dynamisme du christianisme dans les pays du Sud et chez les minorités évangéliques mondiales témoigne de la vitalité d'une foi qui continue de répondre aux aspirations de milliards d'êtres humains.</p>""",

    'grandes-religions/islam': """<h3>Le soufisme et la spiritualité islamique</h3>
<p class="resume-text">Le soufisme — dimension mystique de l'islam — cherche une relation personnelle et intime avec Dieu au-delà du simple respect de la loi. Rumi, Hafez, Ibn Arabi : la poésie soufie est parmi les plus belles de la littérature mondiale. Les confréries soufies (tariqas) ont joué un rôle décisif dans l'islamisation pacifique de l'Afrique subsaharienne, de l'Anatolie et de l'Asie du Sud-Est. Le dhikr (invocation répétée du nom divin), la musique sacrée (sama'), les derviches tourneurs : ces pratiques mystiques expriment une dimension de l'islam souvent méconnue dans les représentations médiatiques dominantes.</p>""",

    'grandes-religions/judaisme': """<h3>Le judaïsme et l'État d'Israël</h3>
<p class="resume-text">La fondation de l'État d'Israël en 1948 a profondément transformé le monde juif. Pour les sionistes religieux, c'est l'accomplissement des promesses divines faites à Abraham. Pour les ultra-orthodoxes anti-sionistes (Neturei Karta), c'est une transgression messianiste prématurée. Pour les Juifs laïcs, c'est un État-nation moderne offrant un refuge et une identité collective. Pour les Juifs de la diaspora, la relation avec Israël est souvent ambiguë : soutien de principe, critique des politiques, identité composite entre leur pays de résidence et l'État juif. Ces tensions traversent tous les courants du judaïsme contemporain.</p>""",

    'grandes-religions/bouddhisme': """<h3>Bouddhisme, environnement et engagement social</h3>
<p class="resume-text">Le bouddhisme engagé (engaged Buddhism) de Thich Nhat Hanh applique les enseignements du Bouddha aux crises contemporaines : guerre, injustice sociale, destruction de l'environnement. La notion bouddhiste d'interdépendance (pratîtyasamutpâda) — tout phénomène dépend de tous les autres — fournit une base philosophique pour une éthique écologique profonde. Des moines bouddhistes ordonnent des arbres comme moines pour empêcher leur coupe en Thaïlande ; d'autres s'enchaînent devant des bulldozers pour protéger des sites naturels sacrés. Le bouddhisme s'affirme ainsi comme ressource spirituelle pour les défis éthiques et politiques les plus urgents de notre temps.</p>""",

    'grandes-religions/hindouisme': """<h3>Le nationalisme hindou et ses controverses</h3>
<p class="resume-text">Le Bharatiya Janata Party (BJP), parti nationaliste hindou au pouvoir en Inde depuis 2014, promeut le Hindutva — l'idéologie selon laquelle l'Inde est fondamentalement une civilisation hindoue. Cette vision s'oppose à l'identité pluraliste et séculière de la Constitution indienne fondée par Ambedkar et Nehru. Les tensions avec les minorités musulmanes et chrétiennes (attaques de mosquées, lois anti-conversion) et la révision de l'histoire indienne dans les manuels scolaires illustrent les enjeux politiques de la question : quelle relation entre hindouisme et identité nationale indienne ?</p>""",

    'textes-sacres/coran': """<h3>Le Coran dans le monde numérique</h3>
<p class="resume-text">Le Coran est aujourd'hui le texte le plus récité et le plus mémorisé au monde, grâce notamment aux nouvelles technologies. Des applications de récitation coranique (Muslim Pro, Quran Majeed) sont téléchargées par des centaines de millions d'utilisateurs. Des chaînes YouTube de récitation coranique accumulent des milliards de vues. La numérisation a rendu le Coran accessible dans les langues et les contextes les plus divers, tout en posant des questions inédites : qui est autorisé à interpréter le Coran en ligne ? Comment vérifier la fiabilité des traductions ? Le monde numérique démocratise l'accès au texte sacré mais fragmente l'autorité religieuse traditionnelle.</p>""",

    'textes-sacres/torah': """<h3>La Torah et l'éducation juive</h3>
<p class="resume-text">L'éducation est au cœur du judaïsme depuis des millénaires : l'obligation d'étudier la Torah (talmud Torah) est une mitsvah fondamentale. Le réseau des yeshivot (académies talmudiques) — de Babylone à Vilna, de Mir à New York — a assuré une transmission du savoir rabbinique pendant deux millénaires. Cette culture de l'étude intensive a produit des taux d'alphabétisation et d'éducation supérieurs à la moyenne dans les sociétés juives, et a peut-être contribué aux succès académiques et professionnels des Juifs dans les sociétés modernes — hypothèse débattue par les historiens et les sociologues.</p>""",

    'textes-sacres/vedas': """<h3>Le renouveau védique contemporain</h3>
<p class="resume-text">Le mouvement Arya Samaj, fondé par Dayananda Saraswati en 1875, prônait un retour aux Vedas « purs » sans les corruptions médiévales (idolâtrie, système des castes, discrimination des femmes). Ce mouvement réformiste a profondément marqué le nationalisme hindou du XXe siècle et la politique indienne contemporaine. Aujourd'hui, des universités indiennes investissent dans la recherche sur le sanskrit et la tradition védique comme marqueurs d'identité civilisationnelle. Le yoga, médecine ayurvédique et les Vedas sont présentés comme contributions de l'Inde à la civilisation mondiale, dans un contexte de fierté nationale et de soft power culturel.</p>""",

    'textes-sacres/tripitaka': """<h3>Le Tipitaka et la psychologie bouddhiste moderne</h3>
<p class="resume-text">La psychologie abhidhammique du Tipitaka décrit 52 facteurs mentaux (cetasika) et leurs interactions — une cartographie phénoménologique de l'expérience intérieure d'une précision remarquable. Des chercheurs comme Bhikkhu Bodhi ont traduit ces textes en anglais, les rendant accessibles à un public académique occidental. Le dialogue entre cette psychologie contemplative et la psychologie cognitive et neuroscientifique contemporaine est l'un des chantiers intellectuels les plus féconds de notre époque, initié notamment par l'Institut Mind and Life fondé par le dalaï-lama.</p>""",

    'philosophie-religieuse/thomas-aquin': """<h3>Thomas d'Aquin et la philosophie analytique</h3>
<p class="resume-text">La philosophie analytique de la religion contemporaine (Alvin Plantinga, Richard Swinburne, Peter Geach) dialogue directement avec Thomas d'Aquin. Plantinga a reformulé l'argument ontologique et défendu une épistémologie de la croyance de base (proper basicality) qui s'inscrit dans la tradition thomiste. Swinburne a développé une version probabiliste des arguments cosmologique et téléologique. Cette tradition néo-thomiste analytique montre que la philosophie médiévale n'est pas un simple objet historique mais une ressource vivante pour les questions philosophiques les plus contemporaines.</p>""",

    'philosophie-religieuse/averroes': """<h3>Averroès et la question de la vérité</h3>
<p class="resume-text">La contribution épistémologique la plus importante d'Averroès est peut-être sa défense de la philosophie comme seule méthode capable d'atteindre la vérité démonstrative. Sa décision de commenter Aristote systématiquement visait à purifier la philosophie des déformations néoplatoniciennes d'al-Farabi et Ibn Sina. Cette rigueur méthodologique — distinguer ce qu'Aristote dit vraiment de ce que les commentateurs lui font dire — est une leçon permanente pour toute tradition intellectuelle qui risque de confondre l'interprétation avec l'original. Elle anticipe la méthode historico-critique moderne appliquée aux textes fondateurs.</p>""",

    'philosophie-religieuse/maimonide': """<h3>Maïmonide et la médecine</h3>
<p class="resume-text">Maïmonide fut aussi l'un des médecins les plus importants de son époque. Médecin personnel du sultan Saladin et de sa famille au Caire, il a écrit une dizaine de traités médicaux (sur l'asthme, les hémorroïdes, les poisons, l'hygiène) d'une clarté et d'une rigueur remarquables pour son époque. Son approche médicale est holiste : il insiste sur l'hygiène de vie, l'alimentation, l'exercice physique, l'équilibre émotionnel. Certains de ses conseils diététiques (manger peu, préférer les aliments frais et légers, éviter la suralimentation) correspondent à la médecine préventive contemporaine. Sa célèbre Prière du médecin témoigne d'une éthique médicale fondée sur la compassion et l'humilité scientifique.</p>""",

    'religions-monde/taoisme': """<h3>Le taoïsme et la philosophie de la technologie</h3>
<p class="resume-text">Le concept taoïste de wu wei résonne dans des débats philosophiques contemporains sur la technologie et l'environnement. Ivan Illich, philosophe autrichien-mexicain, critiquait les « outils à effets contre-productifs » (voitures qui rendent les villes invivables, médicaments qui rendent dépendants) dans des termes proches du wu wei : les interventions techniques qui outrepassent un certain seuil de convivialité se retournent contre leur finalité. Cette critique de la démesure technologique rejoint intuitivement la sagesse de Laozi sur les limites de l'action forcée. Le philosophe Jacques Ellul a développé une critique similaire de la « technique » comme système autonome qui échappe au contrôle humain.</p>""",

    'religions-monde/sikhisme': """<h3>Le service comme spiritualité</h3>
<p class="resume-text">Le seva (service désintéressé) est l'une des pratiques spirituelles centrales du sikhisme. Chaque gurdwara (temple) dispose d'un langar (cuisine communautaire) qui sert des repas gratuits à quiconque se présente, croyant ou non-croyant, riche ou pauvre. Des gurdwaras comme celui de New Delhi servent 100 000 repas par jour. Pendant les inondations au Punjab ou les catastrophes naturelles, les équipes sikhes de volontaires (Khalsa Aid) sont souvent parmi les premières à apporter aide et nourriture. Cette incarnation concrète de la spiritualité dans l'action sociale fait du sikhisme une tradition remarquablement pratique et incarnée.</p>""",
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

    for key, html in PASS4.items():
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
        print(f'OK: {key} ({len(current_content)} -> {len(new_content)} chars)')
        modified += 1

    data['pages'] = pages

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'\nDone: {modified} articles enriched, {skipped} skipped.')


if __name__ == '__main__':
    main()
