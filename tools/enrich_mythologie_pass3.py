#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Troisième et dernière passe : tous les articles mythologie.json < 15000 chars.
"""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/mythologie.json'
QUIZ_MARKER = '<section class="content-section" id="quiz">'

PASS3 = {
    'mythologies-antiques/mythologie-nordique': """<h3>L'héritage linguistique nordique</h3>
<p class="resume-text">La mythologie nordique a laissé des traces dans notre calendrier : lundi (Moon's day/Mani), mardi (Tyr's day/Tyr), mercredi (Woden's day/Odin), jeudi (Thor's day/Thor), vendredi (Frigg's day/Frigg) en anglais. Les jours de la semaine européens sont un hommage discret aux dieux nordiques et gréco-romains. La langue anglaise conserve dans ses jours de la semaine un vestige de la religion nordique que la christianisation n'a pas effacé.</p>
<p class="resume-text">De nombreux mots anglais dérivent de la mythologie nordique. La « berserk » désignait les guerriers nordiques qui combattaient en état de frénésie (ber-serkr = vêtement d'ours). Le « geyser » vient de l'islandais Geysir (gicler). « Troll », « valkyrie », « rune », « skald », « saga » ont toutes enrichi les langues européennes. L'influence culturelle de la Scandinavie sur l'Angleterre — des Vikings à Tolkien — est profondément ancrée dans la langue anglaise elle-même.</p>""",

    'mythologies-antiques/mythologie-egyptienne': """<h3>L'égyptologie moderne</h3>
<p class="resume-text">L'égyptologie moderne naît avec le déchiffrement des hiéroglyphes par Jean-François Champollion en 1822, grâce à la Pierre de Rosette. Depuis, des générations d'égyptologues ont mis au jour des milliers de textes, d'œuvres d'art et de monuments. Les fouilles récentes (notamment à Saqqarah depuis 2019) continuent de révéler des tombeaux intacts, des sarcophages et des textes funéraires d'une richesse inépuisable.</p>
<p class="resume-text">Les techniques modernes (imagerie 3D, scanner de momies, ADN ancien, cartographie satellitaire) révolutionnent l'égyptologie sans destructeur. Les momies royales exhibées au Musée national du Caire puis transférées au Musée national de la civilisation égyptienne (2021) dans un cortège solennel illustrent la façon dont l'Égypte contemporaine revendique ce patrimoine comme identité nationale. L'égyptomanie mondiale — des pyramides aux tatouages à l'œil d'Horus — témoigne d'une fascination millénaire qui ne se dément pas.</p>""",

    'mythologies-antiques/mythologie-mesopotamienne': """<h3>L'héritage mésopotamien dans la culture contemporaine</h3>
<p class="resume-text">La destruction par Daech des musées de Mossoul (2015) et des sites archéologiques de Nimroud et de Palmyre a suscité une indignation mondiale. Ces actes iconoclastes ciblaient délibérément la mémoire pré-islamique du Moyen-Orient. Paradoxalement, ils ont renforcé l'intérêt pour la civilisation mésopotamienne : les tablettes d'argile du British Museum et du musée de l'Irak à Baghdad sont devenues des symboles de résistance culturelle.</p>
<p class="resume-text">L'Épopée de Gilgamesh continue d'inspirer la littérature contemporaine (Mathias Énard, Boussole), le cinéma et les jeux vidéo. La question de l'immortalité que pose Gilgamesh — comment vivre face à la mort certaine ? — est une question éternellement contemporaine. L'Épopée offre une réponse sobre mais profonde par la voix de la tavernière Siduri : « Quand les dieux créèrent les hommes, ils leur donnèrent la mort pour héritage, et gardèrent la vie éternelle pour eux-mêmes. Toi, Gilgamesh, remplis donc ton ventre, réjouis-toi jour et nuit... »</p>""",

    'grandes-religions/christianisme': """<h3>Le christianisme dans le monde contemporain</h3>
<p class="resume-text">Le christianisme est aujourd'hui la religion la plus répandue dans le monde (environ 2,4 milliards de fidèles, soit 31% de la population mondiale). Mais sa géographie a radicalement changé : en 1900, 80% des chrétiens vivaient en Europe et en Amérique du Nord ; aujourd'hui, la majorité vit en Afrique subsaharienne, en Amérique latine et en Asie. Cette « déplacement du christianisme vers le Sud » transforme profondément la religion.</p>
<p class="resume-text">Les Pentecôtistes et les Évangéliques représentent la branche la plus dynamique du christianisme mondial avec environ 600-700 millions de fidèles. Leur culte expressif, leur théologie de la prospérité (Dieu bénit les fidèles de richesse matérielle), leurs réseaux télévisuels et leurs méga-églises affrontent les Catholiques et les Orthodoxes dans les pays du Sud global. Le dialogue œcuménique cherche à dépasser ces divisions pour témoigner d'une foi commune dans un monde sécularisé.</p>""",

    'grandes-religions/islam': """<h3>Islam et modernité</h3>
<p class="resume-text">La relation de l'islam avec la modernité est l'une des questions les plus débattues de notre temps. Des courants réformistes (Mohammed Abduh, Jamal al-Din al-Afghani au XIXe siècle ; Mohammed Iqbal, Fazlur Rahman au XXe siècle) cherchent à articuler la tradition islamique et les acquis de la modernité (droits de l'homme, démocratie, science). Des courants islamistes (Frères musulmans, wahhabisme saoudien) cherchent au contraire à islamiser la modernité selon des lectures strictes de la charia.</p>
<p class="resume-text">L'islam est aujourd'hui la deuxième religion mondiale avec environ 1,8 milliard de fidèles (24% de la population mondiale). Sa croissance démographique est la plus rapide de toutes les grandes religions : d'ici 2050, le nombre de musulmans pourrait égaler celui des chrétiens. Cette expansion géographique (islam en Afrique subsaharienne, en Europe avec la diaspora) et démographique fait de l'islam un acteur central de la politique mondiale contemporaine.</p>""",

    'grandes-religions/judaisme': """<h3>Le judaïsme et la création culturelle</h3>
<p class="resume-text">Malgré (ou grâce à) leur dispersion, les Juifs ont contribué à la culture mondiale de façon disproportionnée à leur nombre. En littérature : Kafka, Proust, Primo Levi, Philip Roth, Saul Bellow, Imre Kertész. En philosophie : Spinoza, Bergson, Husserl, Wittgenstein, Levinas, Derrida. En science : Einstein, Freud, Bohr, Meyerhof, Jonas Salk. En musique : Mahler, Schoenberg, Bernstein, Bob Dylan. Cette créativité a été attribuée à la tradition d'étude, au doute institutionnalisé (le Talmud valorise la question sur la réponse), et à la position de l'étranger qui permet un regard critique sur la société d'accueil.</p>
<p class="resume-text">La question de l'identité juive contemporaine est complexe : être Juif est à la fois une appartenance religieuse, une identité culturelle, une histoire familiale et (depuis 1948) une citoyenneté nationale potentielle. Des Juifs athées revendiquent leur judéité culturelle. Des convertis sincères sont reconnus comme Juifs. Des personnes de pères juifs mais de mères non-juives sont dans une zone frontalière entre les définitions orthodoxe (matrilinéaire) et réformée (reconnaissance du père juif). Ces définitions ont des conséquences concrètes sur le droit du retour en Israël.</p>""",

    'grandes-religions/bouddhisme': """<h3>Le bouddhisme et la psychologie occidentale</h3>
<p class="resume-text">La rencontre du bouddhisme et de la psychologie occidentale est l'une des plus fructueuses de notre temps. William James, fondateur de la psychologie américaine, lisait des textes bouddhistes et y trouvait des analogies avec sa psychologie du flux de conscience (stream of consciousness). Carl Jung a intégré des concepts bouddhistes dans sa psychologie des profondeurs. La psychologie positive d'Abraham Maslow et Martin Seligman partage avec le bouddhisme l'idée que le bien-être peut être cultivé par la pratique.</p>
<p class="resume-text">La Mindfulness-Based Cognitive Therapy (MBCT) et la Dialectical Behavior Therapy (DBT) de Marsha Linehan sont des thérapies psychologiques directement inspirées du bouddhisme qui ont été validées cliniquement. Le mouvement de la pleine conscience (mindfulness) dans les hôpitaux, les écoles, les entreprises et les prisons témoigne d'une diffusion sans précédent des pratiques contemplatives bouddhistes dans des contextes séculiers. Cette « bouddhisation » de la psychologie pose des questions sur la décontextualisation spirituelle et la réduction de pratiques religieuses à des techniques de gestion du stress.</p>""",

    'grandes-religions/hindouisme': """<h3>L'hindouisme dans la diaspora mondiale</h3>
<p class="resume-text">La diaspora indienne — environ 18 millions de personnes réparties dans plus de 100 pays — a exporté l'hindouisme hors de l'Inde. Les temples hindous de Londres (Neasden), de New York et de Toronto sont devenus des centres communautaires majeurs. Le Festival de Diwali (fête des lumières) est célébré publiquement dans de nombreuses villes occidentales. La cuisine indienne, le yoga et la méditation ont largement dépassé leur contexte religieux originel pour s'intégrer à la culture mondiale.</p>
<p class="resume-text">Le mouvement Hare Krishna (International Society for Krishna Consciousness), fondé en 1966 à New York par Swami Prabhupada, a été le premier mouvement néo-hindou à attirer massivement des Occidentaux. George Harrison (The Beatles) était le plus célèbre adepte. Ce mouvement a introduit la bhakti krishnaïte — dévotion intense à Krishna — dans un contexte occidental, avec des résultats culturellement hybrides qui ont contribué à populariser l'hindouisme en Occident.</p>""",

    'textes-sacres/coran': """<h3>Le Coran et les questions contemporaines</h3>
<p class="resume-text">L'exégèse contemporaine du Coran se divise entre tenants d'une lecture littéraliste (salafisme, wahhabisme), partisans d'une herméneutique historico-critique (Fazlur Rahman, Mohammed Arkoun) et courants mystiques (soufis) qui cherchent le sens intérieur. La question de la condition des femmes dans l'islam — voile, polygamie, héritage, témoignage en justice — est au cœur de ces débats exégétiques. Des théologiennes féministes (Amina Wadud, Fatima Mernissi) proposent une lecture du Coran centrée sur les principes d'égalité et de justice plutôt que sur les prescriptions contextuelles de la Médine du VIIe siècle.</p>
<p class="resume-text">La question de la compatibilité de l'islam avec la démocratie et les droits de l'homme mobilise des penseurs comme Mohammed Abed al-Jabri, Abdolkarim Soroush ou Tariq Ramadan. Ces débats ne sont pas seulement académiques : ils ont des conséquences directes sur les sociétés à majorité musulmane en transformation (Printemps arabe, Turquie, Iran) et sur les communautés musulmanes des pays occidentaux en quête d'une identité islamique contemporaine.</p>""",

    'textes-sacres/torah': """<h3>La Torah et la question de l'État d'Israël</h3>
<p class="resume-text">La Torah joue un rôle central dans les débats politiques sur l'État d'Israël. Le sionisme religieux interprète la création de l'État d'Israël en 1948 comme le début de la Rédemption (geulah) — un accomplissement eschatologique des prophéties bibliques. Le mouvement des colons de Gush Emunim s'appuie sur la promesse divine de la terre faite à Abraham pour justifier la colonisation de la Cisjordanie (Judée-Samarie dans leur terminologie).</p>
<p class="resume-text">À l'opposé, certains courants ultra-orthodoxes (Neturei Karta) s'opposent à l'État d'Israël au nom de la Torah : seul le Messie peut légitimement rétablir l'État juif ; une construction politique humaine de l'État avant l'ère messianique est une transgression. Cette tension entre lecture messianique et lecture anti-messianique de la Torah traverse le monde juif orthodoxe et illustre la polyvalence politique d'un texte unique.</p>""",

    'textes-sacres/vedas': """<h3>Le sanskrit et l'étude comparative des langues</h3>
<p class="resume-text">La découverte du sanskrit par les orientalistes européens au XVIIIe siècle a révolutionné la linguistique. Sir William Jones déclare en 1786 que le sanskrit, le latin et le grec ont une origine commune — naissance de la linguistique comparative indo-européenne. La famille des langues indo-européennes (qui inclut le sanscrit, le persan, le grec, le latin, les langues slaves, germaniques, celtiques et baltes) représente environ 3 milliards de locuteurs natifs, soit la famille linguistique la plus répandue du monde.</p>
<p class="resume-text">Le sanskrit liturgique reste une langue vivante pour des millions de brahmanes qui récitent les Vedas lors des rites funéraires, des mariages et des cérémonies de temple. Des mouvements politiques nationalistes hindous (BJP, RSS) valorisent le sanskrit comme langue nationale de l'Inde, symbole d'une civilisation ancienne et glorieuse antérieure à l'influence moghole et britannique. Le débat sur la place du sanskrit dans l'éducation indienne contemporaine reflète des tensions profondes sur l'identité nationale indienne.</p>""",

    'textes-sacres/tripitaka': """<h3>Le bouddhisme engagé et le Tipitaka</h3>
<p class="resume-text">Le bouddhisme engagé (engaged Buddhism), mouvement fondé par Thich Nhat Hanh pendant la guerre du Vietnam, cherche à appliquer les enseignements du Tipitaka aux problèmes sociaux contemporains. La non-violence, la compassion (karuna) et la pleine conscience (sati) deviennent des outils d'action politique pacifique. L'organisation internationale Plum Village, fondée par Thich Nhat Hanh, compte des dizaines de centres dans le monde et a influencé des mouvement sociaux dans de nombreux pays.</p>
<p class="resume-text">Le mouvement du bouddhisme ambedkarien en Inde (fondé par B.R. Ambedkar, père de la constitution indienne et « intouchable » converti au bouddhisme en 1956) illustre le potentiel émancipateur du Tipitaka pour des populations opprimées. Des millions de Dalits (anciens intouchables) se sont convertis au bouddhisme comme acte de résistance sociale au système des castes. Le Tipitaka, avec son insistance sur la valeur égale de tous les êtres, fournit un fondement philosophique à cette revendication d'égalité.</p>""",

    'spiritualite/mysticisme-chretien': """<h3>La mystique et le dialogue interreligieux</h3>
<p class="resume-text">La mystique chrétienne est aujourd'hui au cœur du dialogue interreligieux. Des moines chrétiens vivent dans des ashrams hindous (Henri Le Saux/Abhishiktananda, Bede Griffiths) et tentent une inculturation du christianisme dans la sagesse de l'Inde. Des contemplatifs chrétiens pratiquent la méditation zen sous la direction de maîtres bouddhistes (Hugo Lassalle, William Johnston). Ces expériences suscitent des questions théologiques profondes : peut-on être à la fois chrétien et bouddhiste ?</p>
<p class="resume-text">La Conférence mondiale des religions pour la paix et des organisations comme le Conseil œcuménique des Églises réunissent des mystiques et des théologiens de toutes traditions pour chercher les racines communes de l'expérience spirituelle. Cette convergence mystique — parfois appelée « philosophia perennis » ou « tradition primordiale » — est débattue : reflète-t-elle une vérité spirituelle universelle ou efface-t-elle les différences doctrinales fondamentales entre les traditions religieuses ?</p>""",

    'spiritualite/soufisme': """<h3>Soufisme et modernité</h3>
<p class="resume-text">Le soufisme fait face à des tensions dans le monde contemporain. Dans plusieurs pays à gouvernement islamiste (Afghanistan sous les Talibans, Arabie Saoudite salafiste), les pratiques soufies (musique sacrée, visite des tombeaux de saints, dhikr collectif) sont interdites comme innovations blâmables (bid'a). Des attentats contre des sanctuaires soufis au Pakistan, en Libye et en Afrique ont causé des centaines de morts. Le soufisme devient un terrain de bataille entre une vision pluraliste et mystique de l'islam et un puritanisme littéraliste.</p>
<p class="resume-text">Paradoxalement, les pays occidentaux voient se développer un soufisme laïcisé qui attire des non-musulmans en quête de spiritualité. Des maîtres soufis accueillent des pratiquants de toutes religions dans des cercles de dhikr ouverts. Cette universalisation du soufisme, perçue par certains comme une richesse et par d'autres comme une dilution, pose la question de l'identité du soufisme sans son ancrage islamique obligatoire.</p>""",

    'spiritualite/kabbale': """<h3>La Kabbale et l'art contemporain</h3>
<p class="resume-text">La Kabbale a influencé l'art et la littérature du XXe siècle. Jorge Luis Borges s'en est emparé dans plusieurs nouvelles (La Bibliothèque de Babel, Le Jardin aux sentiers qui bifurquent) pour explorer les thèmes de l'infini, du texte caché et de la création divine. Paul Celan, poète de la Shoah, utilise le langage kabbalistique (les « noms cachés » de Dieu) dans une quête de langage après l'indicible catastrophe.</p>
<p class="resume-text">L'artiste visuel El Anatsui, le sculpteur Anish Kapoor et de nombreux artistes contemporains s'inspirent de la symbolique kabbalistique de l'arbre de vie, des séfirot et de l'Ein Sof pour créer des œuvres qui interrogent les limites du visible et de l'invisible, du sacré et du profane. La Kabbale comme langage symbolique universel (au-delà de son appartenance au judaïsme) est ainsi réinvestie par la création artistique contemporaine la plus diverse.</p>""",

    'spiritualite/meditation': """<h3>La méditation dans les entreprises et les écoles</h3>
<p class="resume-text">La méditation de pleine conscience s'est diffusée massivement dans les entreprises et les institutions depuis les années 2010. Google, Apple, General Mills proposent des programmes de méditation à leurs employés. Des parlements (Royaume-Uni, Canada) offrent des séances de mindfulness aux élus. Des écoles expérimentent des programmes de méditation pour réduire l'anxiété et améliorer l'attention des élèves. Cette « mcmindfulness » (terme critique de Ronald Purser) suscite des débats sur la dépolitisation des pratiques contemplatives et leur mise au service de la productivité capitaliste.</p>""",

    'spiritualite/chamanisme': """<h3>Chamanisme et protection de l'environnement</h3>
<p class="resume-text">Les peuples autochtones aux pratiques chamaniques sont en première ligne de la crise écologique : leurs territoires sacrés sont menacés par l'extraction minière, la déforestation et le changement climatique. Les chamans amazoniens témoignent de la disparition des plantes médicinales et des esprits des forêts. Des anthropologues (Eduardo Viveiros de Castro) et des philosophes de l'écologie s'intéressent aux cosmologies autochtones comme alternatives à la vision cartésienne nature/culture qui a rendu possible l'exploitation destructrice de la planète.</p>
<p class="resume-text">Le « tournant ontologique » en anthropologie (Tim Ingold, Philippe Descola) propose de prendre au sérieux la vision animiste des chamans — où les humains ne sont pas séparés de la nature mais tissés dans un tissu de relations réciproques avec les autres êtres — non comme une croyance naïve mais comme une ontologie alternative qui a permis à des peuples de vivre en équilibre avec leurs écosystèmes pendant des millénaires.</p>""",

    'philosophie-religieuse/thomas-aquin': """<h3>Le thomisme et la bioéthique contemporaine</h3>
<p class="resume-text">La philosophie thomiste informe encore aujourd'hui les positions officielles de l'Église catholique sur les questions de bioéthique (avortement, euthanasie, fécondation in vitro, clonage). La notion de loi naturelle — des normes morales dérivables de la raison humaine sans référence à la révélation — est mobilisée dans les débats publics pour justifier des positions morales dans des sociétés pluralistes où l'argument purement religieux ne peut prétendre à l'universalité.</p>
<p class="resume-text">Des philosophes néo-thomistes contemporains (John Finnis, Germain Grisez, Robert George) ont développé une théorie de la loi naturelle dite « nouvelle » ou « classique révisée » qui cherche à fonder les principes moraux fondamentaux sur l'évidence pratique et la raison, sans prémisses théologiques. Cette approche participe aux débats philosophiques les plus contemporains sur la métaéthique, le naturalisme moral et les fondements des droits de l'homme.</p>""",

    'philosophie-religieuse/averroes': """<h3>Averroès et la philosophie arabe contemporaine</h3>
<p class="resume-text">La réception d'Averroès dans le monde arabe contemporain est paradoxale. Figure de l'islam rationaliste et libéral, il est revendiqué par les intellectuels arabes laïcs comme symbole d'une tradition de raison et de tolérance que l'islamisme contemporain aurait trahie. La bibliothèque centrale de Marrakech porte son nom, et plusieurs universités arabes lui rendent hommage. Mais son œuvre philosophique reste peu lue dans le monde arabophone, où le texte arabe original n'a pas été aussi bien transmis que la traduction latine.</p>
<p class="resume-text">Le philosophe marocain Mohammed Abed al-Jabri a analysé la « raison arabe » à travers le prisme d'Averroès : la rationalité démonstrative (burhani) qu'il incarne serait une voie de renouveau pour la pensée arabe contemporaine, face aux apories du mysticisme irrationnel et du textualismelittéraliste. Ce projet de « restructuration de la raison arabe » à partir d'Averroès est un programme philosophique ambitieux qui illustre la pertinence permanente de la pensée médiévale pour les questions actuelles.</p>""",

    'philosophie-religieuse/maimonide': """<h3>Maïmonide et le dialogue judéo-islamique</h3>
<p class="resume-text">Maïmonide est né à Cordoue en al-Andalus en 1138 et a vécu sous la domination almohade, qui forçait les Juifs à se convertir à l'islam sous peine de mort. Sa famille fuit vers l'est, passant par Fès, la Palestine et se fixant finalement en Égypte fatimide. Cette biographie témoigne de la complexité des relations judéo-islamiques médiévales : persécution, mais aussi dialogue intellectuel intense. Maïmonide écrit ses œuvres médicales en arabe, lit les philosophes islamiques en arabe, et sa pensée est profondément marquée par la philosophie islamique (al-Farabi, Ibn Sina).</p>
<p class="resume-text">Ce dialogue judéo-islamique médiéval est redécouvert aujourd'hui comme ressource pour les relations interreligieuses contemporaines. Des chercheurs comme Sarah Stroumsa ont montré comment Maïmonide emprunte à al-Farabi sa théorie de la prophétie et à Ibn Sina sa métaphysique. Ce fait de métissage culturel dans un contexte d'adversité politique est une leçon pour nos sociétés contemporaines confrontées à la tentation du repli identitaire.</p>""",

    'philosophie-religieuse/pascal': """<h3>Pascal et l'intelligence artificielle</h3>
<p class="resume-text">La réflexion pascalienne sur les « deux infinis » — l'infiniment grand et l'infiniment petit — résonne étrangement dans l'ère de l'intelligence artificielle et de la physique des particules. La question que pose Pascal — qu'est-ce que l'homme face à l'immensité du cosmos et à la complexité de l'infiniment petit ? — se repose avec une acuité nouvelle : qu'est-ce que l'homme face à des systèmes d'IA capables de surpasser ses performances cognitives dans de nombreux domaines ?</p>
<p class="resume-text">Le pari pascalien a été formalisé par des théoriciens de la décision comme un problème de raisonnement sous incertitude. Pascal utilisait intuitivement ce qui deviendra la théorie des jeux et les probabilités subjectives (bayésiennes). Les discussions sur les risques existentiels de l'IA (Nick Bostrom, Eliezer Yudkowsky) reprennent parfois une structure analogue au pari : si la probabilité d'une IA catastrophique est infime mais la mise est infinie (extinction de l'humanité), le calcul d'espérance mathématique justifie des précautions extraordinaires.</p>""",

    'philosophie-religieuse/kierkegaard': """<h3>Kierkegaard et la communication contemporaine</h3>
<p class="resume-text">La critique kierkegaardienne de la « presse » et de l'opinion publique est d'une actualité surprenante à l'ère des réseaux sociaux. Pour Kierkegaard, la presse (dont il fut une victime lors de la polémique avec le journal satirique Le Corsaire en 1846) nivelle les individus dans une masse anonyme, dilue la responsabilité morale dans le bavardage et permet à chacun de tout commenter sans engagement personnel. Cette critique du « public » comme entité anonyme irresponsable anticipe les analyses contemporaines de la bulle de filtre, des troll et de la désinformation.</p>
<p class="resume-text">Sa notion de « communication indirecte » — la vérité ne peut être transmise directement mais seulement suggérée à travers des formes artistiques, des pseudonymes, des paraboles — est une réflexion pédagogique fondamentale. Elle anticipe les théories contemporaines de la communication qui insistent sur l'importance du contexte, de la posture de réception et de l'engagement personnel dans l'apprentissage. L'éducation ne peut pas se contenter de transmettre des informations ; elle doit susciter un questionnement authentique.</p>""",

    'religions-monde/taoisme': """<h3>Le taoïsme et l'écologie</h3>
<p class="resume-text">La vision taoïste de la nature comme harmonie dynamique à respecter plutôt qu'à dominer a inspiré des penseurs de l'écologie profonde. Le concept de wu wei — non-intervention forcée dans les processus naturels — est une alternative philosophique au paradigme cartésien de maîtrise et domination de la nature. Des écoféministes comme Karen Warren et des philosophes de l'environnement voient dans le taoïsme une ressource pour penser une relation plus humble et respectueuse avec le monde naturel.</p>
<p class="resume-text">La médecine traditionnelle chinoise (acupuncture, phytothérapie, tai-chi, qi gong) est profondément ancrée dans la vision taoïste du corps comme système d'équilibres dynamiques (yin-yang, circulation du qi dans les méridiens). Reconnue par l'OMS, elle est pratiquée par des centaines de millions de personnes dans le monde et fait l'objet d'une recherche scientifique croissante. Le dialogue entre médecine taoïste et médecine occidentale est l'un des chantiers les plus stimulants de la médecine intégrative contemporaine.</p>""",

    'religions-monde/shintoisme': """<h3>Le shinto aujourd'hui</h3>
<p class="resume-text">Aujourd'hui, le shinto est pratiqué par environ 100 millions de Japonais, bien que la grande majorité d'entre eux ne se définissent pas comme « shintoïstes » au sens religieux : les pratiques shintoïstes (visite au sanctuaire pour le Nouvel An, offrandes pour la réussite scolaire, purification des maisons neuves) font partie de la culture japonaise plutôt que d'une confession religieuse consciente. Cette dimension culturelle du shinto explique qu'un même Japonais puisse se dire bouddhiste et pratiquer les rites shintoïstes sans contradiction.</p>
<p class="resume-text">Le sanctuaire Yasukuni de Tokyo, qui honore les soldats morts pour l'Empereur (dont des criminels de guerre condamnés à Nuremberg), est au cœur d'une controverse diplomatique persistante avec la Chine et la Corée. Les visites de politiciens japonais au Yasukuni sont interprétées comme une apologie du militarisme impérial. Cette instrumentalisation politique du shinto par le nationalisme japonais est un héritage douloureux qui complique les relations régionales est-asiatiques.</p>""",

    'religions-monde/sikhisme': """<h3>Le sikhisme et les droits des minorités</h3>
<p class="resume-text">La communauté sikh a connu une tragédie majeure en 1984 : l'opération Blue Star (assaut militaire indien sur le Temple d'Or occupé par des militants séparatistes) fut suivie par l'assassinat d'Indira Gandhi par ses gardes du corps sikhs, puis par des pogroms anti-sikhs à Delhi (3000 morts). Ces événements traumatiques ont profondément marqué la conscience sikh et alimenté un mouvement indépendantiste pour le Khalistan (État sikh souverain) qui reste actif dans la diaspora canadienne et britannique.</p>
<p class="resume-text">La diaspora sikh est l'une des plus influentes politiquement parmi les communautés migrantes. Au Canada, Jagmeet Singh est devenu en 2017 le premier chef d'un grand parti fédéral issu d'une minorité visible. En Grande-Bretagne, des politiciens sikhs siègent au Parlement. Aux États-Unis, des Sikhs se battent pour le droit de porter le turban et le kirpan dans les institutions publiques (armée, police). Ces combats illustrent la tension entre intégration et maintien d'une identité religieuse distinctive dans les sociétés libérales.</p>""",

    'religions-monde/jainisme': """<h3>L'ahimsa et l'éthique contemporaine</h3>
<p class="resume-text">L'éthique de l'ahimsa (non-violence) développée par le jaïnisme est une ressource philosophique pour les débats contemporains sur le végétarisme, le droit des animaux et l'éthique environnementale. Peter Singer, philosophe australien et père du mouvement des droits des animaux, ne cite pas Mahavira mais sa démonstration utilitariste converge avec la vision jaïne : si les êtres sont capables de souffrance, ils ont un intérêt moral à ne pas souffrir, et cet intérêt doit être pris en compte quelle que soit l'espèce.</p>
<p class="resume-text">La pratique jaïne du santhara — mort volontaire par jeûne progressif pour les moines dont le corps ne peut plus servir la libération spirituelle — a été déclarée illégale par la Haute Cour du Rajasthan en 2015, avant que la Cour Suprême n'autorise provisoirement la pratique. Ce cas illustre la tension entre droit constitutionnel indien (droit à la vie) et liberté religieuse des minorités. Il pose aussi des questions universelles sur l'autonomie corporelle et l'aide médicale à mourir que les sociétés contemporaines débattent dans d'autres contextes.</p>""",

    'religions-monde/zoroastrisme': """<h3>Le zoroastrisme et l'identité iranienne</h3>
<p class="resume-text">Nowruz, le Nouvel An zoroastrien (premier jour du printemps, 21 mars), est célébré par des centaines de millions de personnes en Iran, en Afghanistan, au Tadjikistan, en Azerbaïdjan, dans les communautés de la diaspora iranienne mondiale. Cette fête pré-islamique, avec sa tradition de la table Haft-sin (sept objets symboliques commençant par la lettre S en persan), est un marqueur d'identité culturelle iranienne qui transcende les frontières religieuses : des Iraniens musulmans, zoroastriens, chrétiens et athées la célèbrent ensemble.</p>
<p class="resume-text">La République islamique d'Iran (1979-) reconnaît officiellement les Zoroastriens comme minorité religieuse protégée (dhimmi) avec des représentants au Parlement. Mais leur nombre a diminué (environ 25 000) et ils font face à des discriminations institutionnelles. La fascination de nombreux Iraniens de la diaspora pour le zoroastrisme comme identité culturelle nationale alternative à l'islam chiite officiel est un phénomène identitaire complexe aux racines politique et culturelle profondes.</p>""",
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
        print(f'OK: {key} ({len(current_content)} -> {len(new_content)} chars)')
        modified += 1

    data['pages'] = pages

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'\nDone: {modified} articles enriched, {skipped} skipped.')


if __name__ == '__main__':
    main()
