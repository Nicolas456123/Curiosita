#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enrichit les derniers articles de mythologie.json
"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/mythologie.json'

ENRICHMENTS = {
    'mythologies-antiques/mythologie-grecque': """<h3>Les Mystères et la religion à mystères</h3><p class="resume-text">Parallèlement à la religion olympienne officielle, les Grecs pratiquaient des cultes à mystères — rites initiatiques promettant à leurs adeptes une relation privilégiée avec le divin et une destinée meilleure après la mort. Les Mystères d'Éleusis, célébrés en l'honneur de Déméter et Perséphone, attiraient pendant neuf siècles des pèlerins de tout le monde grec.</p><p class="resume-text">Le mythe d'Éleusis raconte l'enlèvement de Perséphone par Hadès et la douleur de sa mère Déméter qui rend la terre stérile. Zeus négocie un compromis : Perséphone passera six mois dans l'Olympe, six mois aux Enfers. Ce mythe cosmogonique explique le rythme des saisons tout en promettant aux initiés une mort non définitive. Le secret des rites était jalousement gardé — nous n'en savons aujourd'hui que les grandes lignes.</p><div class="highlight-box"><p>Les cultes à mystères grecs (Dionysos, Orphisme, Mithra) ont profondément influencé le christianisme naissant : initiation, purification, mort symbolique et renaissance, repas sacré communautaire. Cette parenté a fasciné les historiens des religions du XIXe siècle (Frazer, Cumont).</p></div><h3>L'héritage de la mythologie grecque</h3><p class="resume-text">La mythologie grecque a irrigué toute la culture occidentale. La tragédie attique (Eschyle, Sophocle, Euripide) a utilisé les mythes comme matière première pour explorer les conflits entre hubris humaine et volonté divine, entre loi familiale et loi civique. Aristote, dans la Poétique, théorise cette fonction cathartique du théâtre mythologique.</p><p class="resume-text">À la Renaissance, les mythes grecs deviennent un répertoire iconographique inépuisable pour les artistes (Botticelli, Raphaël, Titien). Au XIXe siècle, les Romantiques et les symbolistes les réinterprètent. Au XXe siècle, la psychanalyse (Freud avec Œdipe, Jung avec les archétypes) les mobilise pour cartographier l'inconscient humain. Aujourd'hui, du cinéma d'Hollywood aux jeux vidéo, les dieux et héros grecs restent présents dans l'imaginaire mondial.</p>""",

    'mythologies-antiques/mythologie-romaine': """<h3>Rome et la création mythologique : l'Énéide</h3><p class="resume-text">L'Énéide de Virgile (29-19 av. J.-C.) est la grande épopée nationale de Rome. Elle raconte la fuite d'Énée de Troie en flammes, son errance méditerranéenne (qui rappelle l'Odyssée) et son établissement dans le Latium, d'où descendra la gens iulia de Jules César et d'Auguste. La mission d'Énée est formulée par son père Anchise dans les Enfers : « Tu regere imperio populos, Romane, memento » (Souviens-toi, Romain, de gouverner les peuples).</p><p class="resume-text">Cette épopée mythologise la fondation de Rome en la rattachant à la civilisation grecque (Troie) et à la volonté divine (Junon, Vénus, Jupiter). Auguste, qui a commandé l'œuvre, y trouve une légitimation divine de son pouvoir : il est le descendant d'Énée, fils de Vénus, accomplissant la destinée impériale de Rome.</p><div class="highlight-box"><p>La religion romaine est fondamentalement politique et civique. Les dieux protègent Rome à condition que les rites soient scrupuleusement accomplis. La Pax Deorum (paix des dieux) est l'objectif permanent : toute catastrophe (défaite, épidémie, tremblement de terre) s'interprète comme un signe de la colère divine, exigeant des expiatoires et des réformes religieuses.</p></div><h3>Les Lares, Pénates et la religion domestique</h3><p class="resume-text">La religion romaine se vit aussi au foyer. Chaque maison possède un laraire, petit autel domestique où l'on honore les Lares (esprits protecteurs de la maison et des ancêtres), les Pénates (divinités du garde-manger) et le Genius du paterfamilias (force vitale masculine). Ces cultes quotidiens — offrandes de nourriture, libations, fumigations — structurent le temps et l'espace de la vie familiale.</p><p class="resume-text">L'apothéose impériale est l'extension de cette logique : l'empereur mort est divinisé par décret du Sénat et rejoint les dieux. Cette pratique, incompréhensible pour les Juifs et les Chrétiens qui refusaient de rendre un culte à César, est l'une des sources des persécutions des premières communautés chrétiennes.</p>""",

    'grandes-religions/hindouisme': """<h3>Les Quatre Voies du yoga</h3><p class="resume-text">L'hindouisme propose quatre voies (yoga) principales vers la libération (moksha), adaptées aux différents tempéraments humains. Le jnana yoga (voie de la connaissance) cherche la réalisation de l'identité entre l'Atman individuel et le Brahman universel par la discrimination entre le réel et l'illusoire. Le bhakti yoga (voie de la dévotion) cultive un amour passionné d'une divinité personnelle — Krishna, Rama, Shiva, la Déesse.</p><p class="resume-text">Le karma yoga (voie de l'action) consiste à agir sans attacher d'importance aux résultats, en offrant tous ses actes à Dieu : c'est le message central de la Bhagavad Gita. Le raja yoga (voie royale) est la voie méditative codifiée par Patanjali dans les Yoga Sutras : concentration, méditation et samadhi (absorption totale) mènent à la libération par la maîtrise de l'esprit.</p><div class="highlight-box"><p>La Bhagavad Gita (IIe siècle av. J.-C. - IIe siècle ap. J.-C.) est le texte de l'hindouisme le plus lu dans le monde entier. Dans ce dialogue entre le héros Arjuna et son cocher Krishna (avatar de Vishnou), Krishna expose une théologie de l'action désintéressée qui réconcilie les trois voies principales.</p></div><h3>La Trimurti et les grands courants dévotionnels</h3><p class="resume-text">La Trimurti organise les trois fonctions cosmiques : Brahma (création), Vishnou (préservation) et Shiva (destruction-régénération). En pratique, l'hindouisme populaire se divise entre le vishnouisme (dévotion à Vishnou et ses avatars, notamment Krishna et Rama) et le shivaïsme (dévotion à Shiva sous ses multiples formes). Le shaktisme vénère la Déesse (Devi, Durga, Kali, Parvati) comme énergie divine primordiale.</p><p class="resume-text">Ces courants ne s'excluent pas : un même croyant peut honorer Ganesha (fils de Shiva), Lakshmi (épouse de Vishnou) et la Déesse selon les occasions. Cette plasticité polythéiste, que des théologiens hindous interprètent comme autant de visages d'un Absolu unique (Brahman), est l'une des caractéristiques les plus frappantes de l'hindouisme pour un regard occidental monothéiste.</p>""",

    'spiritualite/meditation': """<h3>Les principales techniques méditatives</h3><p class="resume-text">Les techniques méditatives se répartissent en deux grands types. La méditation de concentration (samatha dans le bouddhisme, dharana dans le yoga) focalise l'attention sur un objet unique — la respiration, un mantra, une flamme, un mandala — pour calmer le flux mental et développer une attention stable. La méditation de pleine conscience (vipassana, mindfulness) observe sans jugement le flux des sensations, pensées et émotions pour développer une compréhension de leur nature impermanente.</p><p class="resume-text">La méditation sur un mantra (japa yoga, méditation transcendantale) utilise la répétition sonore pour induire un état de quiétude mentale. La méditation de bienveillance aimante (metta dans le bouddhisme) développe systématiquement des sentiments de bienveillance d'abord envers soi, puis vers les proches, les neutres, les adversaires et tous les êtres. Les traditions contemplatives chrétiennes (oraison silencieuse, hésychasme orthodoxe, prière centrante) ont également développé des techniques méditatives riches.</p><div class="highlight-box"><p>Jon Kabat-Zinn a développé dans les années 1970 la Mindfulness-Based Stress Reduction (MBSR), protocole de 8 semaines qui adapte la méditation bouddhiste à un cadre clinique laïc. Des milliers d'études scientifiques ont depuis documenté les effets de la pleine conscience sur le stress, l'anxiété, la dépression et la douleur chronique.</p></div><h3>Neurologie et effets de la méditation</h3><p class="resume-text">Les neurosciences de la contemplation (contemplative neuroscience) ont révélé des modifications structurelles et fonctionnelles du cerveau chez les pratiquants réguliers. L'insula et le cortex cingulaire antérieur, impliqués dans la conscience intéroceptive et l'empathie, s'épaississent. L'amygdale, centre du traitement de la peur, montre une réactivité réduite. Les connexions entre le réseau du mode par défaut (rumination) et les régions de régulation s'améliorent.</p><p class="resume-text">Matthieu Ricard, moine bouddhiste et docteur en génétique, a participé à de nombreuses études à l'Université du Wisconsin (Richard Davidson). Ses mesures d'électroencéphalographie montrent des niveaux de synchronisation gamma exceptionnellement élevés lors de méditations sur la compassion — des niveaux jamais observés chez des sujets non entraînés. Ces recherches posent des questions fondamentales sur la plasticité du cerveau et la possibilité de cultiver délibérément des états mentaux positifs.</p>""",
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
