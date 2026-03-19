#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Cinquième et dernière passe mythologie.json"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/mythologie.json'
QUIZ_MARKER = '<section class="content-section" id="quiz">'

PASS5 = {
    'mythologies-antiques/mythologie-nordique': '<p class="resume-text">Le terme « berserker » — guerrier nordique combattant en état de frénésie sacrée, revêtu de peau d\'ours (ber-serkr) — a donné l\'adjectif anglais « berserk ». Les sagas décrivent ces guerriers comme insensibles à la douleur et à la peur pendant la bataille, avant de s\'effondrer d\'épuisement. Des chercheurs ont proposé diverses explications : consommation de champignons hallucinogènes (Amanita muscaria), états dissociatifs rituels, ou simple hyperbole littéraire. Quelle qu\'en soit la réalité, cette figure du guerrier extatique illustre la dimension sacrée de la guerre dans la cosmologie nordique.</p>',

    'mythologies-antiques/mythologie-egyptienne': '<p class="resume-text">L\'égyptomanie contemporaine se manifeste notamment dans l\'architecture : la pyramide de verre du Louvre (Ieoh Ming Pei, 1989), les pyramides de Las Vegas, le musée national des Afro-Américains de Washington dont la façade évoque les fils dorés de la couronne d\'Osiris. Les motifs égyptiens — l\'œil d\'Horus, le scarabée, l\'ankh (la croix ansée, symbole de vie) — ornent des millions de tatouages, bijoux et objets de déco dans le monde entier, témoignant d\'une fascination qui traverse les cultures et les siècles.</p>',

    'mythologies-antiques/mythologie-mesopotamienne': '<p class="resume-text">La Mésopotamie a légué au monde occidental ses unités de mesure du temps : la division de l\'heure en 60 minutes et de la minute en 60 secondes vient du système sexagésimal babylonien. La semaine de sept jours associe chaque jour à un astre (Soleil, Lune, Mars, Mercure, Jupiter, Vénus, Saturne). Le zodiaque de douze signes, fondement de l\'astrologie occidentale, est une invention babylonienne transmise aux Grecs. Ces héritages invisibles de la civilisation mésopotamienne structurent encore aujourd\'hui notre rapport au temps et à l\'espace céleste.</p>',

    'grandes-religions/christianisme': '<p class="resume-text">La théologie de la libération, née en Amérique latine dans les années 1960 (Gustavo Gutiérrez, Leonardo Boff), propose une lecture du Évangile à partir de la perspective des pauvres. « Option préférentielle pour les pauvres », communautés de base, engagement politique contre les dictatures militaires : cette théologie a nourri des mouvements de résistance sociale en Amérique latine, en Afrique et en Asie. Elle a été en tension avec Rome (qui craignait une infiltration marxiste) mais a influencé profondément le pape François (argentin) et son insistance sur la miséricorde et la justice sociale.</p>',

    'grandes-religions/islam': '<p class="resume-text">Le mois de Ramadan, neuvième mois du calendrier lunaire, est le mois de jeûne et de recueillement. L\'abstention de nourriture, de boisson et de relations sexuelles de l\'aube au coucher du soleil est une discipline corporelle et spirituelle qui renforce la solidarité communautaire. La nuit du Destin (Laylat al-Qadr), dans les dix derniers jours du Ramadan, commémore la première révélation du Coran à Mohammed. Avec ses repas de rupture du jeûne (iftar) partagés en famille et entre voisins, ses récitations coraniques nocturnes et son ambiance festive, le Ramadan est le moment le plus intense de la vie religieuse musulmane.</p>',

    'grandes-religions/judaisme': '<p class="resume-text">Le cycle annuel des fêtes juives structure le temps et la mémoire collective. Rosh Hashana (Nouvel An, début tishri) et Yom Kippour (Grand Pardon, 10 tishri) constituent les Jours redoutables, période d\'introspection et de réconciliation. Souccot (fête des Cabanes) rappelle l\'errance dans le désert. Hanoukka (fête des Lumières, décembre) commémore la victoire des Maccabées. Pourim célèbre la délivrance racontée dans le livre d\'Esther. Pessah (Pâque juive) commémore la libération d\'Égypte. Chacune de ces fêtes relie la communauté à une mémoire historique et spirituelle partagée.</p>',

    'grandes-religions/hindouisme': '<p class="resume-text">Le cycle des sacrements hindous (samskara) marque les étapes de la vie : la naissance (jatakarma), l\'imposition du nom (namakarana), la première sortie sous le soleil, la première prise de nourriture solide, la première coupe de cheveux (mundan), l\'initiation scolaire (vidyarambha), l\'investiture du cordon sacré (upanayana, pour les hautes castes), le mariage (vivaha) et les rites funéraires (antyeshti). Ce système de rites de passage intègre chaque individu dans la communauté, le cosmos et la tradition ancestrale.</p>',

    'textes-sacres/coran': '<p class="resume-text">La sourate al-Fatiha (l\'Ouvrante), récitée obligatoirement dans chaque cycle de la prière quotidienne, est ainsi récitée au minimum dix-sept fois par jour par un musulman pratiquant. Ses sept versets résument l\'essentiel : la louange de Dieu, sa miséricorde, la demande de guidance sur la voie droite. C\'est la prière par excellence de l\'islam, équivalent fonctionnel du Notre Père chrétien. Sa récitation dans la prière est une méditation quotidienne sur la dépendance de l\'homme envers Dieu et sur l\'aspiration à la droiture.</p>',

    'textes-sacres/torah': '<p class="resume-text">La cérémonie de la bar-mitsva (à 13 ans pour les garçons, bat-mitsva à 12 ans pour les filles dans les traditions réformées) est le rite de passage central du judaïsme. Le jeune Juif lit publiquement un passage de la Torah pour la première fois, assumant ainsi ses responsabilités religieuses. Cette lecture publique, préparée pendant des mois sous la direction d\'un professeur, exige la maîtrise de l\'hébreu biblique et d\'une mélodie traditionnelle (trope). La fête familiale qui s\'ensuit est souvent la plus grande cérémonie de la vie d\'une famille juive, même peu pratiquante.</p>',

    'textes-sacres/vedas': '<p class="resume-text">L\'ayurveda (« science de la vie »), médecine traditionnelle indienne dont les fondements se trouvent dans les Vedas (Atharva-Véda notamment), est reconnue par l\'OMS comme médecine traditionnelle à part entière. Ses concepts de doshas (vata, pitta, kapha — constitutions corporelles), de rasayanas (régénérateurs) et de pratiques de purification (panchakarma) correspondent à une médecine préventive et holistique qui attire de plus en plus d\'intérêt dans les sociétés occidentales confrontées aux limites de la médecine spécialisée et curative.</p>',

    'philosophie-religieuse/averroes': '<p class="resume-text">La distinction qu\'Averroès établit entre trois niveaux de compréhension du texte coranique — démonstratif (pour les philosophes), dialectique (pour les théologiens) et rhétorique (pour le peuple) — est une contribution fondamentale à la théorie de l\'interprétation. Elle affirme que la vérité est une mais que ses chemins d\'accès sont pluriels selon les capacités intellectuelles des lecteurs. Cette herméneutique graduée, qui refuse à la fois le ésotérisme réservé à une élite et le littéralisme populiste, est d\'une actualité permanente dans toute société pluraliste confrontée à la diversité des interprétations d\'un texte fondateur.</p>',

    'philosophie-religieuse/maimonide': '<p class="resume-text">Les Huit Degrés de la charité de Maïmonide, exposés dans son code juridique (Mishné Torah, Dons aux pauvres), constituent une hiérarchie éthique du don. Au bas : donner à regret. Au plus haut niveau : rendre le pauvre autonome en lui fournissant un emploi ou un prêt. Entre les deux : donner en secret, sans que le donateur connaisse le bénéficiaire ni le bénéficiaire le donateur. Cette gradation morale, qui valorise la dignité du bénéficiaire et l\'intention du donateur, anticipe les théories contemporaines du développement humain et de l\'empowerment social.</p>',

    'religions-monde/sikhisme': '<p class="resume-text">La Fondation Khalsa Aid, organisation humanitaire internationale fondée par des Sikhs, intervient dans les zones de catastrophe naturelle et de conflit armé, sans distinction de religion ou d\'ethnie. Au Pakistan lors des inondations de 2010, en Syrie pendant la guerre civile, en Ukraine en 2022 : des volontaires sikhs ont distribué de la nourriture et des soins à des populations majoritairement non-sikhes. Ce service humanitaire universel, expression concrète du seva (service désintéressé), est une traduction contemporaine de l\'éthique sikhiste de l\'égalité et de la fraternité de tous les êtres humains.</p>',
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

    for key, html in PASS5.items():
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
