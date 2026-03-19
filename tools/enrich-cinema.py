#!/usr/bin/env python3
"""Enrichissement des articles cinema — ajout d'une section h3 dans .course-content."""
import json, re, sys, os

sys.stdout.reconfigure(encoding='utf-8')
BASE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content'

# Nouvelle section h3 à ajouter dans .course-content, avant la balise </div> fermante
ENRICHMENTS = {

"histoire/naissance": """
        <h3>L'exportation mondiale et la naissance des industries nationales</h3>
        <p>Dès 1896, les opérateurs Lumière parcourent le monde pour filmer et projeter leurs actualités, créant un réseau mondial de diffusion avant même que le cinéma soit stabilisé comme industrie. Charles Pathé, à partir de 1900, transforme le cinéma français en véritable empire industriel : il contrôle la production, la distribution et la projection, imposant le film à la location plutôt qu'à la vente — un modèle économique qui structure l'industrie jusqu'à aujourd'hui.</p>
        <p>La Première Guerre mondiale bouleverse cet équilibre. L'industrie européenne, paralysée, laisse le champ libre à Hollywood, qui devient dès 1915-1918 le centre dominant de la production mondiale. D.W. Griffith, avec <em>Naissance d'une nation</em> (1915) et <em>Intolérance</em> (1916), pose les bases du langage cinématographique classique : montage parallèle, gros plan expressif, construction dramatique sur la durée.</p>
        <p>Le passage au sonore, entre 1927 et 1930, constitue la deuxième révolution technique du cinéma muet. <em>The Jazz Singer</em> (1927) d'Alan Crosland marque la transition, précipitant l'uniformisation linguistique de l'industrie et mettant fin à la carrière de nombreuses stars dont la voix ne correspondait pas à leur image.</p>""",

"histoire/hollywood": """
        <h3>Le star system et la fabrique du rêve</h3>
        <p>L'âge d'or hollywoodien (1930-1960) est indissociable de l'invention du <strong>star system</strong>, machine à fabriquer et à vendre des personnalités. Les studios contrôlaient leurs acteurs sous contrat exclusif, gérant leur image publique, leurs relations amoureuses et parfois leurs déclarations politiques. Cary Grant, Humphrey Bogart, Bette Davis, Katharine Hepburn sont des constructions autant que des individus — des marques au sens moderne du terme.</p>
        <p>Le système des studios reposait sur une division du travail rigoureuse. Le producteur décidait, le réalisateur exécutait, les scénaristes travaillaient en équipe sur commande. Cette organisation industrielle n'empêchait pas la créativité : des metteurs en scène comme John Ford, Howard Hawks ou Billy Wilder ont développé des styles reconnaissables au sein du système plutôt que contre lui.</p>
        <p>La crise du studio system, à la fin des années 1940, combine plusieurs facteurs : le verdict antitrust de 1948 (Paramount Decision) qui oblige les studios à se séparer de leurs salles, la concurrence de la télévision et l'émergence du cinéma d'auteur européen. Elle ouvre la voie au Nouvel Hollywood des années 1960-70, où des réalisateurs comme Coppola, Scorsese et Altman retrouvent une liberté créative que le système classique avait verrouillée.</p>""",

"histoire/nouvelle-vague": """
        <h3>Les innovations techniques au service d'une liberté nouvelle</h3>
        <p>La Nouvelle Vague a été rendue possible par des innovations techniques qui ont libéré le cinéma des contraintes des grands studios. Les caméras légères (Eclair Cameflex, Arriflex) et les pellicules hypersensibles ont permis de tourner en décors naturels, en lumière disponible, avec de petites équipes mobiles. Raoul Coutard, directeur de la photographie fétiche de Godard, a révolutionné l'image cinématographique en filmant dans la rue, au téléobjectif, sans éclairage artificiel.</p>
        <p>Le son synchrone direct, capté en extérieur grâce aux nouveaux magnétophones Nagra, a transformé les dialogues et l'ambiance sonore des films. Cette authenticité sonore, longtemps impossible dans les studios traditionnels, a donné aux films de la Nouvelle Vague une texture documentaire qui tranchait radicalement avec le cinéma de studio.</p>
        <p>Ces innovations techniques ont eu des conséquences économiques importantes : les premiers films de Truffaut et Godard ont été produits avec des budgets réduits, prouvant qu'il était possible de faire du cinéma en dehors du système industriel. Ce modèle de production indépendante a inspiré des générations de cinéastes, du cinéma indépendant américain (Cassavetes, Jarmusch) aux Dogme 95 danois (Vinterberg, von Trier).</p>""",

"histoire/cinema-mondial": """
        <h3>Les nouveaux cinémas du XXIe siècle</h3>
        <p>Le XXIe siècle voit l'émergence de cinématographies nationales auparavant peu visibles sur la scène internationale. Le cinéma roumain (Cristian Mungiu, Cristi Puiu), dit « nouvelle vague roumaine », s'impose dans les années 2000 avec un réalisme austère et une liberté de ton remarquables. Le cinéma iranien (Abbas Kiarostami, Asghar Farhadi, Jafar Panahi) continue de porter une voix poetique malgré les contraintes politiques.</p>
        <p>Le cinéma coréen, après l'émergence de Park Chan-wook et Bong Joon-ho dans les années 2000, connaît sa consécration internationale avec <em>Parasite</em> (Palme d'or et Oscar du meilleur film, 2020) — première victoire d'un film non anglophone à l'Oscar suprême. Cette reconnaissance ouvre la voie à une attention croissante portée aux cinématographies non anglophones par le public occidental.</p>
        <p>Le cinéma africain, porté par des institutions comme le FESPACO de Ouagadougou et des cinéastes comme Mahamat-Saleh Haroun (Tchad), Abderrahmane Sissako (Mauritanie/Mali) ou Mati Diop (Sénégal/France), développe une voix singulière dans le paysage mondial. Ces auteurs allient ancrage local et ambition universelle dans des œuvres qui renouvellent le regard sur l'Afrique contemporaine.</p>""",

"histoire/contemporain": """
        <h3>Le streaming et la reconfiguration de l'industrie</h3>
        <p>L'irruption de Netflix (dès 2013 dans la production originale), puis d'Amazon Prime, Disney+, Apple TV+ et d'autres plateformes a profondément reconfiguré l'industrie cinématographique mondiale. Le modèle du financement par abonnement permet aux plateformes de prendre des risques créatifs impossibles dans le système des studios traditionnels : budgets monumentaux pour des séries (<em>Game of Thrones</em>, <em>Squid Game</em>), films d'auteur à grande diffusion (<em>Roma</em> d'Alfonso Cuarón, Oscar du meilleur film), productions internationales en langue non anglaise.</p>
        <p>La fenêtre de diffusion cinéma-vidéo, traditionnellement de 90 jours minimum, s'est contractée depuis la pandémie de 2020. Certains studios ont adopté des sorties simultanées en salle et en streaming, provoquant des tensions avec les exploitants et remettant en question la primauté de l'expérience cinématographique collective. La crise a accéléré des mutations qui auraient mis une décennie à s'imposer.</p>
        <p>L'intelligence artificielle commence à transformer les métiers du cinéma contemporain : doublage automatique, génération d'effets visuels, écriture assistée de scénarios. Ces évolutions techniques soulèvent des questions sur la place des créateurs humains dans la chaîne de production, relançant les débats sur la nature de la création artistique à l'ère numérique.</p>""",

"montage/principes": """
        <h3>Montage et sens : construire la signification</h3>
        <p>Le montage ne se contente pas de mettre des plans bout à bout : il <strong>construit du sens</strong> par la juxtaposition. L'effet Koulechov l'a démontré empiriquement dès les années 1920 : deux plans successifs créent une signification que ni l'un ni l'autre ne contient seul. Cette logique est le fondement de toute rhétorique visuelle.</p>
        <p>Les grands théoriciens soviétiques du montage — Eisenstein, Vertov, Poudovkine — ont développé des théories opposées. Eisenstein défendait le <strong>montage des attractions</strong> : les plans doivent s'affronter, créer un choc dialectique qui produit une idée nouvelle. Poudovkine préférait un montage de <strong>construction</strong> : les plans s'enchaînent logiquement pour guider le spectateur vers une conclusion narrative.</p>
        <p>Dans le cinéma contemporain, des logiciels comme Avid Media Composer et Adobe Premiere Pro ont radicalement changé les conditions matérielles du montage. Le montage numérique non linéaire permet d'essayer des dizaines de versions d'une séquence en quelques minutes, là où le montage en pellicule exigeait des heures de manipulation physique. Cette liberté a transformé les pratiques créatives des monteurs, favorisant l'expérimentation et les ajustements fins.</p>""",

"montage/narratif": """
        <h3>Le montage alterné et les structures non linéaires</h3>
        <p>Le <strong>montage alterné</strong>, inventé par D.W. Griffith, crée du suspense en passant alternativement entre deux actions simultanées. La poursuite de <em>Naissance d'une nation</em> (1915) établit un modèle repris dans des milliers de films d'action. Cette technique exploite directement l'anxiété du spectateur face à deux situations qui se rapprochent inéluctablement.</p>
        <p>Les structures narratives non linéaires — flash-backs, flash-forwards, récits enchâssés — exploitent le montage pour jouer avec la temporalité du récit. <em>Citizen Kane</em> (1941) structure son enquête en retours en arrière depuis le présent. <em>Rashomon</em> (1950) de Kurosawa présente le même événement selon quatre points de vue contradictoires. <em>Pulp Fiction</em> (1994) de Tarantino réorganise chronologiquement une série d'événements pour créer un effet de révélation progressif.</p>
        <p>La narration elliptique — qui supprime délibérément des informations et fait confiance à l'intelligence du spectateur — est l'un des outils les plus sophistiqués du montage narratif. Robert Bresson et Terrence Malick en ont fait leur marque distinctive : leurs films avancent par images-sensation plutôt que par séquences causales, demandant une participation active du spectateur dans la construction du sens.</p>""",

"montage/effets-visuels": """
        <h3>La révolution numérique et les nouvelles frontières du réel</h3>
        <p>La révolution des effets numériques, amorcée par <em>Terminator 2</em> (1991) et <em>Jurassic Park</em> (1993), a atteint sa maturité avec les blockbusters des années 2000-2010. Le développement du CGI (<em>Computer Generated Imagery</em>) a permis de créer des êtres et des univers entiers impossibles à filmer — de Gollum dans <em>Le Seigneur des Anneaux</em> aux batailles épiques de Marvel. La performance capture, qui enregistre les mouvements d'acteurs pour les transférer sur des personnages virtuels, a créé un nouveau métier à la frontière du jeu et de l'animation.</p>
        <p>La question de l'<strong>hyperréalisme numérique</strong> pose des enjeux éthiques et esthétiques nouveaux. La technique de « rajeunissement » numérique d'acteurs dans <em>The Irishman</em> (2019) de Scorsese ou la recréation de personnages décédés soulèvent des questions sur le consentement et l'authenticité. L'IA générative ouvre des perspectives encore plus radicales : la génération de visages, de corps, d'environnements entiers à partir de données.</p>
        <p>Certains cinéastes revendiquent cependant un retour aux effets pratiques (in-camera), comme Christopher Nolan dans <em>Tenet</em> (2020) ou Denis Villeneuve dans <em>Dune</em> (2021). Cette préférence pour le réel filmé sur le numérique généré est aussi une déclaration artistique : l'image numérique, si parfaite soit-elle, ne possède pas la contingence et la matérialité de la réalité capturée par la caméra.</p>""",

"montage/etalonnage": """
        <h3>L'étalonnage comme signature artistique</h3>
        <p>L'étalonnage numérique a émancipé la post-production colorimétrique de ses contraintes chimiques. Là où le laboratoire photographique offrait une marge de correction limitée, les logiciels DaVinci Resolve et Baselight permettent aujourd'hui de modifier chaque paramètre de chaque pixel de l'image. Cette puissance technique a fait de l'étalonnage un art à part entière, dont le responsable — le <strong>coloriste</strong> — est reconnu comme un collaborateur artistique essentiel.</p>
        <p>Les looks colorimétriques distinctifs sont devenus des signatures de films entiers. La désaturation des tons chair dans <em>Saving Private Ryan</em> (1998) de Spielberg renforce l'effet documentaire. Le contraste vert-teal caractéristique des thrillers des années 2000 (<em>The Matrix</em>, <em>Traffic</em>) est devenu si répandu qu'il s'est transformé en cliché visuel. L'étalonnage chaud et doré de <em>Once Upon a Time in Hollywood</em> (2019) de Tarantino construit une nostalgie colorée pour la Californie des années 1960.</p>
        <p>L'HDR (<em>High Dynamic Range</em>), rendu possible par les nouveaux écrans OLED et les projecteurs laser, ouvre un nouveau territoire expressif : une plage dynamique considérablement élargie entre les noirs les plus profonds et les blancs les plus lumineux. Cette technologie exige de repenser l'étalonnage depuis la captation jusqu'à la diffusion, créant une nouvelle chaîne de compétences au sein de l'industrie.</p>""",

"montage/post-son": """
        <h3>Le son comme dimension narrative : du bruitage au design sonore</h3>
        <p>Le <strong>design sonore</strong> est l'art de créer un univers acoustique cohérent qui renforce l'immersion narrative. Walter Murch, qui a théorisé le montage sonore dans <em>Apocalypse Now</em> (1979) et inventé le concept de <em>worldizing</em> (enregistrer des sons synthétiques dans des espaces réels pour leur donner une texture acoustique crédible), est considéré comme le père fondateur du design sonore moderne.</p>
        <p>Les bruiteurs (<em>foley artists</em>) recréent en studio tous les sons produits par les acteurs et les objets : pas, vêtements, manipulation d'accessoires. Ces sons, captés en synchronisation avec l'image, sont d'une importance capitale pour la crédibilité de la scène : l'absence de bruitage crée immédiatement une sensation d'étrangeté. Les sons de la nature (pluie, vent, animaux) sont en revanche généralement des enregistrements de terrain archivés dans des bibliothèques sonores.</p>
        <p>Le format Dolby Atmos, qui permet de placer des sons à des positions précises dans une salle multicanal tridimensionnelle, a ouvert de nouvelles possibilités expressives pour le mixage. Dans <em>Gravity</em> (2013) d'Alfonso Cuarón, le silence spatial absolu contraste avec les vibrations conduites par les combinaisons spatiales — une expérience sonore impossible à reproduire fidèlement en dehors d'une salle équipée.</p>""",

"realisation/mise-en-scene": """
        <h3>La direction artistique : construire le monde visuel</h3>
        <p>La <strong>direction artistique</strong> (production design) détermine l'apparence visuelle globale d'un film : décors, couleurs, textures, architecture. Le chef décorateur collabore étroitement avec le directeur de la photographie pour créer un univers cohérent qui prolonge l'univers intérieur des personnages. Dans <em>Blade Runner</em> (1982), le travail de Syd Mead a créé un archétype visuel de la dystopie urbaine qui influence l'esthétique sci-fi depuis quarante ans.</p>
        <p>La direction artistique inclut aussi le travail des costumiers et des coiffeurs-maquilleurs. Dans le cinéma de Pedro Almodóvar, les costumes de Jean-Paul Gaultier signalent les états émotionnels des personnages avec une précision quasi sémiotique. Dans les films de Wes Anderson, la symétrie des costumes participe à la mise en scène globale d'un univers artificiel assumé.</p>
        <p>La question du <strong>réalisme versus stylisation</strong> traverse toute l'histoire de la mise en scène. Le néoréalisme italien (Rossellini, De Sica) a choisi la rue et les non-professionnels ; l'expressionnisme allemand a choisi des décors peints aux angles impossibles. Entre ces deux pôles, chaque cinéaste choisit son degré de stylisation selon le projet narratif et thématique du film.</p>""",

"realisation/cinematographie": """
        <h3>La lumière comme langage : éclairage et atmosphère</h3>
        <p>L'<strong>éclairage cinématographique</strong> est l'un des outils les plus puissants pour créer l'atmosphère et diriger l'attention du spectateur. Le film noir classique utilisait l'éclairage à faible clé (<em>low key</em>), avec de forts contrastes d'ombre et de lumière hérités du chiaroscuro pictural. Le cinéma de comédie romantique préfère un éclairage à haute clé (<em>high key</em>), lumineux et uniforme, qui supprime les ombres dramatiques.</p>
        <p>Vittorio Storaro (<em>Apocalypse Now</em>, <em>The Last Emperor</em>), Gordon Willis (<em>Le Parrain</em>, <em>Annie Hall</em>) et Roger Deakins (<em>Blade Runner 2049</em>, <em>1917</em>) ont développé des langages lumineux immédiatement reconnaissables. Deakins, directeur de la photographie de la plupart des films des frères Coen, est célébré pour sa capacité à créer des images d'une beauté formelle parfaite tout en servant la narration avec précision.</p>
        <p>La transition du pellicule au numérique (capteurs de caméra RED, ARRI Alexa, Sony Venice) a profondément modifié les pratiques d'éclairage. La sensibilité accrue des capteurs numériques permet de filmer dans des conditions de lumière très basse, autrefois impossibles. Cette liberté a engendré une esthétique naturaliste nouvelle, mais aussi des questions sur la « texture » des images numériques comparée à la granularité organique de la pellicule argentique.</p>""",

"realisation/direction-acteurs": """
        <h3>Les méthodes de jeu et la relation réalisateur-acteur</h3>
        <p>La <strong>méthode Stanislavski</strong>, codifiée au début du XXe siècle et importée aux États-Unis sous le nom de « Method Acting » par Lee Strasberg et l'Actors Studio, demande à l'acteur de puiser dans ses propres émotions pour nourrir son personnage. Marlon Brando, James Dean, Dustin Hoffman, Al Pacino et Robert De Niro sont les figures emblématiques de cette approche. Cette méthode a dominé le cinéma américain des années 1950 aux années 1980.</p>
        <p>D'autres approches s'y sont opposées. Robert Bresson dirigeait des <strong>modèles</strong> plutôt que des acteurs : il demandait des performances plates, dépouillées de toute intention dramatique, laissant au montage le soin de créer l'émotion. Jacques Rivette improvisait avec ses acteurs des heures entières et montait le résultat. Mike Leigh développe ses scripts avec ses comédiens au cours de mois de répétitions.</p>
        <p>La relation réalisateur-acteur est l'une des plus complexes du cinéma. Kubrick épuisait ses acteurs par des dizaines de prises identiques pour obtenir un état de fatigue naturelle. John Cassavetes construisait ses films à partir d'improvisations de ses acteurs-amis. Werner Herzog choisissait des personnalités fortes (Klaus Kinski) et filmait les tensions réelles entre eux — à la limite de l'exploitation et de la collaboration véritable.</p>""",

"realisation/scenario": """
        <h3>Adaptation, réécriture et processus collaboratif</h3>
        <p>La majorité des films hollywoodiens sont des <strong>adaptations</strong> d'œuvres préexistantes — romans, bandes dessinées, jeux vidéo, films étrangers, faits réels. L'art de l'adaptation consiste à trouver l'équivalent cinématographique des effets littéraires : la voix intérieure d'un personnage, la description d'un paysage, l'ellipse temporelle. Francis Ford Coppola a dû résoudre comment rendre visible la psychologie des personnages de Mario Puzo dans <em>Le Parrain</em> sans tomber dans la narration verbale.</p>
        <p>Le scénario hollywoodien passe généralement par de <strong>nombreuses réécritures</strong> par des scénaristes différents. Il n'est pas rare qu'un film de studio porte la marque de cinq ou six scénaristes successifs, ce qui explique parfois des incohérences de ton ou de structure. Cette réalité industrielle contraste avec le modèle du cinéma d'auteur européen, où le réalisateur est souvent son propre scénariste.</p>
        <p>Des outils comme <strong>Final Draft</strong> et <strong>Celtx</strong> ont standardisé le formatage des scénarios, mais la vraie révolution a été conceptuelle : l'émergence de « gurus » du scénario comme Syd Field (<em>Screenplay</em>, 1979), Robert McKee (<em>Story</em>, 1997) et Blake Snyder (<em>Save the Cat</em>, 2005) a industrialisé la pensée narrative, créant un dialecte commun dans l'industrie tout en risquant de formater les récits dans des structures trop rigides.</p>""",

"realisation/son-musique": """
        <h3>La musique de film : entre empathie et contrepoint</h3>
        <p>La <strong>musique de film</strong> oscille entre deux fonctions opposées : l'<em>empathie</em> (la musique renforce l'émotion de la scène, comme dans les films de John Williams pour Spielberg) et le <em>contrepoint</em> (la musique contredit délibérément l'émotion visuelle, comme Kubrick utilisant une valse de Strauss dans la séquence de vol spatial de <em>2001</em>). Les meilleurs compositeurs maîtrisent les deux registres.</p>
        <p>Les grandes signatures musicales du cinéma — Bernard Herrmann pour Hitchcock (<em>Psychose</em>), Ennio Morricone pour Leone (<em>Le Bon, la Brute et le Truand</em>), John Williams pour Lucas et Spielberg (<em>Star Wars</em>, <em>E.T.</em>), Hans Zimmer pour Nolan (<em>Inception</em>, <em>Interstellar</em>) — sont indissociables des films qu'elles accompagnent. La musique d'Herrmann pour <em>Psychose</em> est tellement identifiée à son film que la simple écoute de ses cordes stridentes évoque instantanément la scène de douche.</p>
        <p>L'utilisation de musiques <strong>préexistantes</strong> (musique de catalogue) est une alternative à la composition originale, popularisée par les films de Kubrick et Scorsese. Scorsese choisit ses musiques pop avec une précision chirurgicale : la séquence d'introduction de Henry Hill dans <em>Goodfellas</em>, accompagnée de <em>Rags to Riches</em> de Tony Bennett, est un modèle d'ironie narrative par le biais musical.</p>""",

"animation/traditionnelle": """
        <h3>Le golden age des studios et l'animation comme art populaire</h3>
        <p>L'âge d'or de l'animation traditionnelle (1937-1970 environ) est dominé par les studios Disney, qui ont porté le médium à des sommets techniques et narratifs. <em>Blanche-Neige et les Sept Nains</em> (1937), premier long métrage d'animation, mobilise des équipes de 300 animateurs pendant trois ans. Walt Disney impose des standards de <strong>réalisme animé</strong> inédits : les personnages ont du poids, les mouvements ont de l'inertie, les émotions sont lisibles à distance.</p>
        <p>Les studios Warner Bros (Looney Tunes) et MGM (Tom et Jerry) développent en parallèle un style radicalement différent : l'animation de gag, rapide, stylisée, délibérément irréaliste. Chuck Jones, Tex Avery et Bob Clampett inventent un vocabulaire de l'hyperbole visuelle — yeux qui sortent des orbites, corps aplatis puis regonflés — qui influencera l'animation mondiale jusqu'à nos jours.</p>
        <p>La technique de la <strong>rotoscopie</strong>, qui consiste à calquer des mouvements d'acteurs réels pour les animer, est utilisée dès les débuts de l'animation. Elle connaît un renouveau avec des films comme <em>Waking Life</em> (2001) de Richard Linklater, où le dessin animé par-dessus des prises de vues réelles crée une esthétique onirique unique, ou <em>Valse avec Bachir</em> (2008) d'Ari Folman, où elle sert à raconter des traumatismes de guerre avec une distanciation expressive.</p>""",

"animation/stop-motion": """
        <h3>Le stop-motion numérique et le renouveau du médium</h3>
        <p>Le stop-motion connaît un renouveau remarquable depuis les années 1990, porté par des studios comme Aardman Animations (<em>Wallace et Gromit</em>, <em>Chicken Run</em>) et LAIKA (<em>Coraline</em>, <em>Kubo et l'armure magique</em>). Ces studios allient la tradition artisanale du stop-motion — fabrication minutieuse de figurines, décors construits à la main — avec des technologies numériques : impression 3D des visages d'expression (LAIKA produit des dizaines de milliers de visages différents pour chaque film), compositing numérique, effets de caméra virtuels.</p>
        <p>Le réalisateur tchèque Jan Švankmajer est le représentant le plus radical du stop-motion comme art d'avant-garde. Ses courts métrages (<em>Dimensions of Dialogue</em>, 1982) et longs métrages (<em>Alice</em>, 1988, adapté de Lewis Carroll) combinent objets inanimés, matières organiques et acteurs réels dans des univers surréalistes profondément inquiétants. Son influence sur Tim Burton et les Brothers Quay est explicitement reconnue par ces derniers.</p>
        <p>Le stop-motion amateur, rendu accessible par les caméras numériques et les logiciels de capture d'images, a créé une communauté mondiale de créateurs indépendants qui publient leurs œuvres sur YouTube et Instagram. Cette démocratisation du médium perpétue une tradition artisanale tout en l'ouvrant à de nouvelles esthétiques nées de contraintes économiques différentes.</p>""",

"animation/numerique": """
        <h3>La chaîne de production de l'animation numérique</h3>
        <p>Un film d'animation numérique de long métrage mobilise des équipes de 200 à 600 personnes pendant trois à cinq ans. La chaîne de production inclut : le développement du scénario et du storyboard, la création des modèles 3D (personnages, décors, accessoires), le rigging (armature numérique permettant d'animer les modèles), l'animation proprement dite, les simulations (vêtements, cheveux, eau, foule), l'éclairage, le rendu (<em>rendering</em>) et la composition finale.</p>
        <p>Le <strong>rendu</strong> est l'étape la plus gourmande en calcul : chaque image d'un film Pixar mobilise des centaines d'ordinateurs pendant des heures. <em>Monsters University</em> (2013) a nécessité 100 millions d'heures de calcul machine. Ces « fermes de rendu » (<em>render farms</em>) sont parmi les infrastructures informatiques les plus puissantes au monde, et leur coût explique en partie pourquoi seuls de grands studios peuvent produire ces films.</p>
        <p>L'arrivée de l'IA dans le pipeline de production commence à transformer ces processus. Des outils d'IA générative peuvent accélérer l'animation de foules, la création de textures, le compositing de plans complexes. Ces évolutions soulèvent des questions sur l'emploi dans l'industrie de l'animation, rappelant les tensions que le passage au numérique avait déjà créées lors du remplacement de l'animation cel traditionnelle.</p>""",

"animation/animation-3d": """
        <h3>Les grandes maisons et leur philosophie artistique</h3>
        <p><strong>Pixar Animation Studios</strong>, fondé en 1986, a posé les bases intellectuelles et esthétiques de l'animation 3D avec <em>Toy Story</em> (1995). Sa philosophie repose sur la primauté du scénario sur la technologie : « Story is king » est le mantra de la maison. Chaque film Pixar part d'une idée conceptuellement forte (un rat cuisinier, un vieillard en maison ballon, une émotion personnifiée) et la développe avec une rigueur dramatique digne des meilleurs films en prises de vues réelles.</p>
        <p>DreamWorks Animation, fondé en 1994, a développé une approche plus populiste et satirique, incarnée par la franchise <em>Shrek</em> (2001-). Ses films se distinguent par des références à la culture populaire adulte intégrées dans des récits pour enfants — un modèle qui a influencé toute l'animation familiale des années 2000. Blue Sky Studios (<em>L'Âge de glace</em>), Sony Pictures Animation (<em>Spider-Man : New Generation</em>) et Illumination (<em>Moi, Moche et Méchant</em>) ont chacun développé des identités visuelles et narratives distinctes.</p>
        <p>La question de l'<strong>uncanny valley</strong> (vallée de l'étrange) — ce sentiment de malaise que provoquent les représentations humaines trop réalistes mais pas assez — est centrale dans l'animation 3D. Pixar a délibérément choisi des styles stylisés plutôt que photoréalistes pour ses personnages humains, évitant le malaise tout en conservant l'expressivité émotionnelle. <em>The Polar Express</em> (2004) de Zemeckis est souvent cité comme exemple de film ayant franchi cette vallée de l'étrange sans l'avoir traversée.</p>""",

"animation/japonaise": """
        <h3>Les genres et le manga comme matrice de l'anime</h3>
        <p>L'anime est indissociable du <strong>manga</strong>, la bande dessinée japonaise qui en constitue la principale source d'adaptation. Le système manga-anime fonctionne comme un écosystème : le manga teste d'abord son audience dans les magazines hebdomadaires, puis les œuvres à succès sont adaptées en anime, en jeux vidéo, en figurines et en produits dérivés. Cette chaîne d'exploitation du contenu préfigure les stratégies de <em>franchising</em> développées par Marvel et DC aux États-Unis.</p>
        <p>Les <strong>genres anime</strong> sont beaucoup plus codifiés que les catégories occidentales. Le shônen (pour garçons adolescents : amitié, dépassement de soi, combats) domine le marché avec des titres comme <em>Naruto</em>, <em>One Piece</em>, <em>Dragon Ball</em>. Le shôjo (pour filles : romance, émotions, relations) a produit des œuvres comme <em>Sailor Moon</em> et <em>Fruits Basket</em>. Le seinen (pour hommes adultes) et le josei (pour femmes adultes) permettent des récits plus complexes et sombres, comme <em>Berserk</em> ou <em>Nana</em>.</p>
        <p>L'influence du bouddhisme et du shintoïsme sur l'anime est souvent soulignée. La notion de <em>ma</em> (l'espace-vide entre les éléments, le temps de la pause) influence le rythme contemplatif de certains films de Miyazaki et de la série <em>Mushishi</em>. La relation ambivalente au progrès technologique et à la nature traverse l'anime écologique de Miyazaki aussi bien que les dystopies cyberpunk de <em>Ghost in the Shell</em> et <em>Akira</em>.</p>""",
}

# ── Injection dans le JSON ────────────────────────────────────────────────────
def inject_content(content_html, extra_html):
    """Insert extra_html just before the closing </div> of .course-content, before the quiz section."""
    # Find </div> closing tag of .course-content inside contenu, before quiz section
    quiz_marker = '<section class="content-section" id="quiz">'
    if quiz_marker in content_html:
        idx = content_html.index(quiz_marker)
        # Find the last </div> before quiz_marker
        closing_div_idx = content_html.rfind('</div>', 0, idx)
        if closing_div_idx != -1:
            return content_html[:closing_div_idx] + extra_html + '\n      ' + content_html[closing_div_idx:]
    return content_html + extra_html


path = os.path.join(BASE, 'cinema.json')
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']
modified = 0

for key, extra_html in ENRICHMENTS.items():
    if key not in pages:
        print(f'MISSING: {key}')
        continue
    page = pages[key]
    old_len = len(page['content'])
    page['content'] = inject_content(page['content'], extra_html)
    new_len = len(page['content'])
    print(f'  {key}: {old_len} → {new_len} (+{new_len-old_len})')
    modified += 1

print(f'\nTotal modifié : {modified}')

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Fichier sauvegardé.')
