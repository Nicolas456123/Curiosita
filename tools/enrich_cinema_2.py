#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Second pass for cinema.json — small targeted additions."""
import json

ADDITIONS = {
    "animation/animation-3d": """<h3>L'avenir de l'animation 3D</h3><p class="resume-text">L'intelligence artificielle commence à transformer la production d'animation 3D. Des outils d'IA peuvent générer automatiquement les mouvements intermédiaires entre deux poses-clés (in-betweening), réduisant considérablement le temps de travail des animateurs. La génération de personnages 3D à partir de descriptions textuelles, le doublage automatique avec synchronisation labiale, l'upscaling d'animations basse résolution — ces technologies transforment profondément les métiers de l'animation et posent de nouvelles questions sur la créativité et le travail artistique humain dans une industrie de plus en plus automatisée.</p>""",

    "animation/japonaise": """<h3>Les nouvelles générations de l'anime</h3><p class="resume-text">Après Miyazaki, une nouvelle génération de réalisateurs d'animation japonais s'impose mondialement. Makoto Shinkai, auteur de Your Name (2016, 355 millions de dollars au box-office mondial) et Suzume (2022), développe un style "hyper-réaliste" de fond combiné à des personnages en style traditionnel anime. Ses paysages atmosphériques d'une beauté quasi photographique et ses histoires de jeunes adultes aux prises avec des forces cosmiques touchent un public mondial bien au-delà du niche anime traditionnel.</p>""",

    "animation/numerique": """<h3>La formation aux métiers des effets visuels</h3><p class="resume-text">Les métiers des effets visuels numériques — animateur 3D, compositeur VFX, rigger, éclairagiste numérique, superviseur de simulation — sont parmi les plus demandés de l'industrie audiovisuelle mondiale. Des écoles spécialisées (GNOMON, Gobelins, Supinfocom) forment des professionnels que les grands studios recrutent dans le monde entier. La délocalisation massive des studios VFX en Inde, au Canada (grâce aux crédits d'impôt) et en Europe a transformé la géographie de l'industrie cinématographique mondiale, créant des tensions sur les conditions de travail et la reconnaissance des artistes.</p>""",

    "animation/stop-motion": """<h3>Le stop-motion à l'ère numérique</h3><p class="resume-text">Les outils numériques ont transformé la production stop-motion sans en trahir l'essence. Les caméras numériques permettent de vérifier immédiatement chaque prise (dragonframe), éliminant l'anxiété de l'argentique où les erreurs n'étaient découvertes qu'au développement. L'impression 3D a révolutionné la création de visages et d'accessoires. Mais le geste fondamental — animer image par image un objet réel dans un espace réel — reste identique à celui de Willis O'Brien sur King Kong (1933). Cette continuité du geste artisanal dans un environnement numérique est ce qui donne au stop-motion contemporain son charme particulier.</p>""",

    "animation/traditionnelle": """<h3>La renaissance du dessin à la main</h3><p class="resume-text">Après deux décennies de domination de la 3D numérique, le dessin à la main connaît un renouveau créatif. Klaus (Netflix, 2019), première production Netflix à obtenir une nomination aux Oscars du meilleur film d'animation, utilise une technique novatrice combinant dessin 2D avec éclairage et ombres volumétriques simulées numériquement — créant un style qui paraît tridimensionnel tout en conservant la chaleur du dessin traditionnel. Spider-Man: New Generation (Sony, 2018), primé aux Oscars, emprunte ses techniques visuelles au comics book — hachures, points Ben-Day, couleurs qui débordent les contours.</p>""",

    "histoire/cinema-mondial": """<h3>Les cinémas du monde dans les festivals</h3><p class="resume-text">Les grands festivals internationaux — Cannes, Venice, Berlin, Toronto — jouent un rôle crucial dans la visibilité du cinéma mondial non-américain. La Palme d'or de Cannes reste la récompense cinématographique la plus prestigieuse au monde pour le cinéma d'auteur. Des pays comme la Roumanie (Cristian Mungiu, 4 mois, 3 semaines et 2 jours), le Mexique (Carlos Reygadas, Japon), le Kazakhstan (Sergei Dvortsevoy, Tulpan) ont révélé à Cannes des cinémas d'une qualité artistique remarquable qui n'auraient jamais eu d'autre plateforme internationale.</p>""",

    "histoire/contemporain": """<h3>Le cinéma d'animation et les nouvelles esthétiques</h3><p class="resume-text">La frontière entre cinéma d'animation et cinéma live se brouille de plus en plus. Des films comme The Jungle Book (Favreau, 2016) ou The Lion King (2019) sont techniquement entièrement numériques mais se présentent comme des films "live action". À l'inverse, des films live action intègrent des séquences d'animation traditionnelle (Trois Billboards Dehors Ebbing, Missouri utilise une publicité animée). Cette hybridation croissante des médiums cinématographiques redéfinit les catégories de l'industrie et les attentes des spectateurs.</p>""",

    "histoire/hollywood": """<h3>La grève des scénaristes et acteurs de 2023</h3><p class="resume-text">La grève simultanée des scénaristes (WGA) et des acteurs (SAG-AFTRA) en 2023 a paralysé Hollywood pendant plusieurs mois — la première double grève depuis 1960. Les revendications portaient sur la rémunération des productions en streaming, les droits sur les reprises et, surtout, la protection contre l'utilisation de l'intelligence artificielle pour remplacer les auteurs et reproduire les performances des acteurs sans consentement ni rémunération. Ces accords historiques ont établi des précédents sur les droits dans l'ère numérique et l'IA.</p>""",

    "histoire/nouvelle-vague": """<h3>L'héritage actuel de la Nouvelle Vague</h3><p class="resume-text">L'influence de la Nouvelle Vague française reste considérable dans le cinéma contemporain. Wes Anderson cite Truffaut comme sa référence principale. Xavier Dolan (J'ai tué ma mère, 2009) a été immédiatement comparé à la Nouvelle Vague par la critique. Leos Carax (Les Amants du Pont-Neuf, Holy Motors) perpétue son esprit d'expérimentation formelle dans un contexte commercial. Les films indépendants américains des années 1990 (Tarantino, Linklater, Jarmusch) doivent leur liberté narrative et leur liberté de ton à la Nouvelle Vague qui avait démontré qu'un film pouvait être personnel, peu coûteux et cinématographiquement ambitieux.</p>""",

    "montage/effets-visuels": """<h3>L'IA dans les effets visuels</h3><p class="resume-text">L'intelligence artificielle transforme rapidement les métiers des effets visuels. Des outils basés sur le deep learning permettent de rotoscoper automatiquement des personnages (extraire un acteur de son fond), de supprimer des câbles de sécurité, de générer des extensions de décors cohérentes avec l'image existante. Ces automatisations réduisent le temps et le coût de nombreuses tâches répétitives — mais soulèvent des questions sur l'emploi dans l'industrie et la qualité artistique d'images générées sans supervision humaine approfondie.</p>""",

    "montage/etalonnage": """<h3>La colorimétrie et l'identité visuelle des marques</h3><p class="resume-text">L'étalonnage est devenu un outil de branding pour les studios et les streamers. Netflix a développé un "look Netflix" reconnaissable — naturel, légèrement désaturé, contrastes doux — qui différencie ses productions originales des films hollywoodiens classiques. Les séries d'époque (The Crown, Stranger Things) utilisent des palettes colorimétriques historiquement cohérentes pour renforcer l'immersion temporelle. Ces "signatures chromatiques" sont de plus en plus conscientes et délibérées, transformant l'étalonnage en outil de marketing autant qu'esthétique.</p>""",

    "montage/narratif": """<h3>Le montage dans la narration documentaire</h3><p class="resume-text">Le montage documentaire obéit à des logiques spécifiques distinctes du cinéma de fiction. Frederick Wiseman, documentariste américain (Titicut Follies, Hospital, At Berkeley), filme pendant plusieurs mois une institution et monte ses centaines d'heures de rushes en films de 3 à 4 heures qui reconstituent une réalité sociale d'une complexité inédite. Son montage "sans commentaire" — pas de voix off, pas de cartons explicatifs, pas de musique ajoutée — crée une immersion documentaire d'une densité qui n'a pas d'équivalent dans le cinéma de fiction.</p>""",

    "montage/post-son": """<h3>Le mixage final et les formats d'exportation</h3><p class="resume-text">Le mixage final du son est la dernière étape avant la livraison du film. Le mixeur final (re-recording mixer) assemble et équilibre toutes les pistes sonores — dialogues, musique, effets, ambiances — dans un mix final adapté aux différents formats de diffusion : salle Dolby Atmos, diffusion stéréo télévisuelle, casque. Chaque format nécessite un mix différent — la dynamique très étendue du Dolby Atmos de salle serait inaudible sur une télévision de salon. Les grandes productions livrent aujourd'hui plusieurs versions du mix final pour différents contextes de consommation.</p>""",

    "montage/principes": """<h3>Le rythme et l'émotion dans le montage</h3><p class="resume-text">La relation entre rythme de montage et état émotionnel du spectateur est l'une des données les plus fondamentales de l'art du montage. Les études en neurosciences confirment ce que les monteurs savent empiriquement : les coupes rapides activent le système nerveux sympathique (réponse de stress), les plans longs permettent une contemplation qui active des zones différentes du cerveau liées à l'introspection. Thelma Schoonmaker, collaboratrice de Scorsese depuis les années 1970, modifie délibérément le rythme de montage de ses films selon l'état émotionnel qu'elle cherche à induire — accélérant jusqu'à l'épileptique dans les scènes de violence, ralentissant jusqu'à l'immobilité dans les moments de révélation.</p>""",

    "realisation/cinematographie": """<h3>La révolution du téléphone et du tournage nomade</h3><p class="resume-text">Les téléphones smartphones équipés de capteurs photographiques de qualité ont démocratisé la prise de vue cinématographique. Apple a produit depuis 2019 des publicités pour ses iPhone en vantant la qualité "cinématographique" de ses capteurs. Des réalisateurs comme Steven Soderbergh (Unsane, 2018, tourné entièrement avec un iPhone 7) ont exploré les possibilités esthétiques de ce format miniature. La légèreté de l'outil transforme la relation entre réalisateur et espace — on peut filmer partout, sans équipe lourde, créant une nouvelle esthétique du "cinéma nomade".</p>""",

    "realisation/direction-acteurs": """<h3>La direction d'acteurs enfants</h3><p class="resume-text">La direction d'acteurs enfants est l'une des compétences les plus spécifiques de la réalisation. Les enfants ne peuvent pas accéder à leurs émotions par les mêmes voies que les adultes — la mémoire émotionnelle de la méthode leur est généralement inaccessible. Les meilleurs réalisateurs de cinéma impliquant des enfants (Spielberg, Kiarostami, Dolan) développent des approches alternatives : créer des situations réelles qui provoquent les réactions recherchées, jouer avec l'enfant pour lui faire oublier la caméra, sélectionner soigneusement les enfants pour leur naturel devant l'objectif.</p>""",

    "realisation/mise-en-scene": """<h3>La mise en scène dans les jeux vidéo</h3><p class="resume-text">Les jeux vidéo contemporains ont développé leur propre mise en scène cinématographique — dirigeant le regard du joueur, créant des transitions dramatiques, construisant des espaces narratifs. Des jeux comme The Last of Us (Naughty Dog, 2013), Red Dead Redemption 2 (Rockstar, 2018) ou Disco Elysium (ZA/UM, 2019) ont un soin de la mise en scène, de la direction d'acteurs (capture de performance) et de la narration environnementale qui rivalise avec le cinéma contemporain. Cette convergence a créé de nouvelles formes hybrides — adaptations de jeux en séries télévisées, cinéastes qui réalisent des cut-scenes.</p>""",

    "realisation/scenario": """<h3>L'adaptation et les droits d'auteur</h3><p class="resume-text">L'adaptation littéraire représente une part considérable des productions cinématographiques. Adapter un roman en film est une transformation radicale — un roman de 300 pages doit être condensé en un scénario de 90-120 pages, la narration intérieure doit être externalisée en action visible, le temps de lecture non-linéaire devient expérience filmique imposée. Les plus grandes adaptations (Lolita par Kubrick, Le Parrain par Puzo et Coppola, Harry Potter par J.K. Rowling et Steve Kloves) témoignent de la créativité nécessaire pour "trahir" fidèlement l'oeuvre source.</p>""",

    "realisation/son-musique": """<h3>Les playlists et la musique diegetique contemporaine</h3><p class="resume-text">Quentin Tarantino a développé une signature sonore fondée sur l'utilisation de chansons préexistantes à contre-emploi. Stuck in the Middle with You de Stealers Wheel pendant la scène de torture de Reservoir Dogs, Misirlou d'entrée dans Pulp Fiction, Little Green Bag dans le générique des Chiens de paille — ces choix musicaux créent un décalage entre la légèreté musicale et la violence des images qui constitue une esthétique tarantinesque reconnaissable. Cette approche, héritée de Kubrick (Singing in the Rain dans Orange Mécanique), utilise la mémoire culturelle associée à une chanson familière pour créer une expérience émotionnelle complexe.</p>""",
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

print("=== cinema (pass 2) ===")
enrich_discipline("cinema", ADDITIONS)
print("\nDone!")
