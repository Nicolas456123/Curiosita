#!/usr/bin/env python3
# enrich_comm3.py — Third pass for remaining short communication.json articles
import json

PATH = "assets/content/communication.json"

with open(PATH, encoding="utf-8") as f:
    data = json.load(f)

def enrich(content, extra_html):
    idx = content.rfind('</section>')
    if idx == -1:
        return content + extra_html
    return content[:idx] + extra_html + content[idx:]

enrichments = {}

enrichments["relations-publiques/relations-presse"] = """
<h3>La conférence de presse et les formats d'annonce</h3>
<p class="resume-text">La <strong>conférence de presse</strong> reste un format clé des relations presse pour les annonces importantes. Son efficacité dépend de la valeur réelle de l'information annoncée : les journalistes, sollicités en permanence, ne se déplacent que pour des nouvelles qui méritent leur attention. Une conférence de presse sans réelle actualité est perçue comme une perte de temps et nuit à la relation. Les attachés de presse expérimentés savent qu'un communiqué bien rédigé et une bonne exclusivité accordée à un journaliste clé valent parfois plus qu'une conférence de presse formelle.</p>
<p class="resume-text">Le <strong>media training</strong> est la formation des porte-paroles d'une organisation à s'exprimer efficacement devant les médias. Il enseigne à construire un message simple et mémorable (message-clé en 3 points maximum), à gérer les questions difficiles sans mentir ni esquiver maladroitement, et à utiliser les techniques de "bridging" pour revenir sur ses messages clés même après une question hostile. Pour les dirigeants politiques ou d'entreprise, le media training est devenu une compétence professionnelle indispensable.</p>
<div class="highlight-box">
<strong>Le kit presse numérique</strong> : Le traditionnel dossier de presse papier a été remplacé par l'espace presse en ligne. Un bon espace presse inclut : historique et chiffres clés de l'organisation, biographies des dirigeants, galerie de photos haute résolution libres de droits, vidéos B-roll (images d'illustration), communiqués classés chronologiquement, revue de presse et contacts des attachés de presse. Les journalistes qui l'utilisent gagnent du temps — et reviennent donc plus souvent.
</div>

<h3>L'influence du digital sur les métiers des relations presse</h3>
<p class="resume-text">La montée des <strong>journalistes-blogueurs</strong> et des <strong>journalistes citoyens</strong> a élargi le périmètre des relations presse. Les influenceurs, podcasteurs et créateurs de contenu sont devenus des prescripteurs aussi importants que les journalistes traditionnels pour certains publics. Les attachés de presse doivent désormais gérer des relations avec des acteurs hétérogènes : une youtubeuse beauté touche parfois une audience plus large qu'un magazine féminin national.</p>
<p class="resume-text">Les outils numériques ont aussi transformé les méthodes de travail. Des plateformes comme Cision, Meltwater ou Mention permettent de monitorer en temps réel toutes les mentions d'une marque ou d'un sujet dans les médias et sur les réseaux sociaux. Les analyses de sentiment automatisées permettent de mesurer le ton des couvertures médiatiques à grande échelle. Ces outils de veille sont devenus indispensables pour détecter les crises en formation et mesurer l'impact des campagnes de relations presse.</p>
<div class="highlight-box">
<strong>Le PESO model en relations presse</strong> : Gini Dietrich a popularisé le modèle PESO (Paid, Earned, Shared, Owned) qui distingue les médias achetés, gagnés, partagés (réseaux sociaux) et propriétaires. Une stratégie de relations presse moderne intègre ces quatre dimensions : les médias gagnés (couverture journalistique) sont amplifiés par les réseaux sociaux (shared), soutenus par du contenu propriétaire (owned) et parfois boostés par de la publicité ciblée (paid).
</div>"""

enrichments["medias-numeriques/histoire-internet"] = """
<h3>La gouvernance d'internet : ICANN, neutralité du Net et souveraineté numérique</h3>
<p class="resume-text">Qui gouverne internet ? La réponse est complexe : internet fonctionne grâce à une architecture décentralisée et à une gouvernance multi-acteurs. L'<strong>ICANN</strong> (Internet Corporation for Assigned Names and Numbers) gère les noms de domaine et les adresses IP. L'IETF (Internet Engineering Task Force) développe les standards techniques. L'ITU (Union Internationale des Télécommunications, agence de l'ONU) essaie d'exercer une influence croissante mais se heurte aux États-Unis et aux démocraties libérales attachées à un internet ouvert.</p>
<p class="resume-text">Le principe de <strong>neutralité du Net</strong> — tous les paquets de données doivent être traités également, sans discrimination par le fournisseur d'accès — a été au cœur de débats politiques intenses. Aux États-Unis, la FCC a abrogé la neutralité du Net en 2017 sous l'administration Trump, ouvrant la voie à un internet à deux vitesses. En Europe, le Règlement internet ouvert (2015) protège ce principe. La neutralité du Net est un enjeu fondamental : sans elle, les FAI peuvent favoriser leur propre contenu ou ralentir les services des concurrents.</p>
<div class="highlight-box">
<strong>La Chine et le "Great Firewall"</strong> : La Chine a développé le système de censure et de surveillance internet le plus sophistiqué du monde, bloquant Google, YouTube, Facebook, Twitter, Wikipedia et des milliers d'autres sites. Les entreprises étrangères qui veulent opérer en Chine doivent accepter des règles de censure et de transfert de données aux autorités. Ce modèle d'internet national et contrôlé ("Splinternet") est adopté par plusieurs États autoritaires — Russie, Iran, Turquie — et remet en cause le modèle d'un internet mondial et ouvert.
</div>"""

enrichments["journalisme/histoire-de-la-presse"] = """
<h3>Presse en ligne et la crise économique des médias</h3>
<p class="resume-text">L'arrivée d'internet dans les années 1990 puis sa généralisation dans les années 2000 ont provoqué une crise sans précédent pour la presse imprimée. Le modèle économique reposait sur deux piliers : la vente de journaux et la publicité. Internet a fragilisé les deux : les lecteurs se sont déportés vers les contenus en ligne gratuits, et les annonceurs ont préféré la publicité numérique, bien moins chère et plus ciblée que la publicité presse.</p>
<p class="resume-text">La presse locale a été particulièrement touchée. Aux États-Unis, plus de 2 500 journaux locaux ont fermé entre 2005 et 2023. Ces "news deserts" créent un vide démocratique : plus personne ne couvre les conseils municipaux, les tribunaux locaux, les scandales administratifs. Des études montrent que dans les comtés sans journaux locaux, la participation électorale baisse et la corruption municipale augmente. La démocratie locale dépend d'un journalisme de proximité viable.</p>
<div class="highlight-box">
<strong>L'abonnement numérique comme planche de salut</strong> : Le New York Times a démontré qu'un modèle payant en ligne était viable. De 1 million d'abonnés numériques en 2011, il est passé à 10 millions en 2023, générant 1,8 milliard de dollars de revenus. En France, Le Monde, Le Figaro et Libération ont tous développé des offres d'abonnement numérique croissantes. La presse en ligne payante représente une solution partielle, mais exclut les populations qui ne peuvent ou ne veulent pas payer.
</div>"""

enrichments["journalisme/avenir-du-journalisme"] = """
<h3>Les nouvelles formes journalistiques : podcast, newsletter, slow journalism</h3>
<p class="resume-text">Face à la crise du journalisme traditionnel, de nouvelles formes émergent qui renouent avec des audiences fidèles et engagées. Le <strong>podcast journalistique</strong> connaît une croissance remarquable depuis 2015. "The Daily" du New York Times atteint 2 à 4 millions d'écoutes par épisode. En France, des podcasts comme "Les Jours" ou "Le Monde Podcast" ont développé des audiences fidèles et des modèles économiques viables. Le format audio permet une profondeur d'analyse incompatible avec les formats courts du web.</p>
<p class="resume-text">Le <strong>slow journalism</strong> est une réaction délibérée à la course à l'actu. Des revues comme <em>XXI</em> (France) ou <em>Longform</em> (États-Unis) publient des reportages longs de plusieurs milliers de mots, richement documentés, sans impératif de temps réel. Ces médias misent sur la qualité plutôt que la quantité, s'adressent à des lecteurs qui cherchent la compréhension plutôt que l'information immédiate. Leur modèle économique repose sur l'abonnement et la vente en kiosque — et leur croissance remet en question le dogme selon lequel les lecteurs ne veulent que des formats courts.</p>
<div class="highlight-box">
<strong>Le journalisme solutions</strong> : Le Solutions Journalism Network (SJN) promu par des journalistes américains propose de consacrer une partie de la couverture aux réponses efficaces aux problèmes sociaux, pas seulement aux problèmes eux-mêmes. Des études montrent que les articles "solutions" génèrent autant d'intérêt que les articles de problèmes, et augmentent la confiance des lecteurs envers les médias. Cette approche ne remplace pas le journalisme critique — elle le complète.
</div>"""

enrichments["journalisme/photojournalisme"] = """
<h3>Le photojournalisme mobile et la démocratisation de la photo de presse</h3>
<p class="resume-text">La démocratisation des smartphones a transformé le photojournalisme. La photo du soldat étendu mort à Derna, Libye, en 2011, ou la vidéo de l'assassinat de George Floyd en 2020 ont été prises par des citoyens ordinaires, pas des professionnels. Ce "photojournalisme citoyen" challenge le monopole des agences de presse sur les images d'actualité et pousse les agences à s'adapter.</p>
<p class="resume-text">L'agence Reuters a lancé en 2020 un programme de photojournalisme mobile qui forme des photojournalistes à utiliser leur smartphone comme outil professionnel. Des applications comme ProCamera ou Halide permettent un contrôle manuel équivalent à un appareil photo reflex. La qualité optique des capteurs de smartphones haut de gamme est désormais comparable à des appareils photographiques professionnels pour la grande majorité des usages de presse. Cette évolution technique change profondément les conditions d'exercice du photojournalisme.</p>
<div class="highlight-box">
<strong>Le World Press Photo</strong> : Créé en 1955, le World Press Photo est le plus prestigieux concours de photojournalisme mondial. En 2015, un retrait de plusieurs photos primées pour "manipulation excessive" (retouches considérées comme trop importantes) a relancé le débat sur les limites du traitement numérique en photojournalisme. La tension entre la vérité documentaire que le photojournalisme est censé incarner et les possibilités techniques de retouche numérique est une question éthique permanente du métier.
</div>"""

enrichments["journalisme/deontologie-journalistique"] = """
<h3>Journalisme et intelligence artificielle : nouveaux enjeux déontologiques</h3>
<p class="resume-text">L'intégration de l'IA dans les pratiques journalistiques soulève de nouveaux enjeux déontologiques. Quand un article est partiellement rédigé par un système d'IA générative, le journaliste doit-il le signaler ? Qui est responsable si l'IA produit une information fausse ou diffamatoire ? Comment citer et vérifier les sources qu'une IA déclare avoir utilisées ? La SPJ (Society of Professional Journalists) a publié en 2023 des recommandations préliminaires préconisant la transparence sur l'utilisation de l'IA et le maintien de la responsabilité éditoriale humaine.</p>
<p class="resume-text">La <strong>vérification des sources IA</strong> est un enjeu pratique immédiat. Les LLM (Large Language Models) "hallucinent" des citations, des études et des faits inexistants avec une confiance apparente. Des journalistes ont publié des articles citant des études scientifiques générées par ChatGPT qui n'existaient pas. Les rédactions qui utilisent l'IA doivent mettre en place des protocoles de vérification renforcés — l'automatisation ne peut jamais remplacer la vérification humaine des faits.</p>
<div class="highlight-box">
<strong>Les chartes déontologiques sur l'IA en journalisme</strong> : Le Washington Post, Reuters, AP, Le Monde et d'autres grands médias ont publié en 2023 leurs politiques d'usage de l'IA. Points communs : interdiction de publier du contenu généré par IA sans vérification humaine approfondie, obligation de mention quand l'IA a joué un rôle éditorial significant, interdiction d'utiliser des systèmes d'IA entraînés sur des données journalistiques sans consentement des auteurs.
</div>"""

enrichments["publicite/histoire-publicite"] = """
<h3>La publicité post-covid et l'économie de l'expérience</h3>
<p class="resume-text">La pandémie de Covid-19 a accéléré des tendances publicitaires déjà à l'œuvre. Le e-commerce a explosé, forçant des marques jusqu'ici focalisées sur le retail physique à développer leurs capacités digitales. Les marques qui avaient misé uniquement sur la publicité télévisée se sont retrouvées en difficulté face à des consommateurs passant leurs journées sur Netflix (sans publicité) et les réseaux sociaux.</p>
<p class="resume-text">L'<strong>économie de l'expérience</strong>, théorisée par Pine et Gilmore en 1998, est devenue centrale pour le marketing post-Covid. Après les restrictions sanitaires, les consommateurs valorisent davantage les expériences que les biens matériels. Les marques qui savent créer des expériences mémorables — événements, activations, pop-up stores, collaborations artistiques — génèrent un engagement et une couverture médiatique que la publicité conventionnelle ne peut produire. Le marketing expérientiel est devenu un investissement stratégique plutôt qu'un supplément créatif.</p>
<div class="highlight-box">
<strong>La publicité sans cookies tiers</strong> : Google a annoncé la fin des cookies tiers sur Chrome (reportée à 2025). Cette décision menace le modèle de ciblage publicitaire qui repose sur le tracking inter-sites. Les annonceurs cherchent des alternatives : données propriétaires (first-party data), ciblage contextuel (publier des publicités sur des pages thématiquement liées au produit), marketing d'influence. La fin des cookies tiers est une opportunité pour les médias qui ont une relation directe et consentie avec leurs lecteurs abonnés.
</div>"""

enrichments["medias-numeriques/culture-numerique"] = """
<h3>Jeux vidéo et culture numérique</h3>
<p class="resume-text">Les jeux vidéo sont devenus le premier média de divertissement mondial, dépassant en revenus la musique et le cinéma combinés. En 2023, le marché mondial du jeu vidéo représente 190 milliards de dollars. Mais au-delà de l'économie, les jeux vidéo sont un vecteur culturel majeur : ils créent des univers narratifs complexes, des communautés mondiales, et des modes d'interaction sociale inédits. World of Warcraft a eu jusqu'à 12 millions d'abonnés simultanément — une communauté plus grande que beaucoup de nations.</p>
<p class="resume-text">L'<strong>esport</strong> (sport électronique) a transformé le jeu vidéo en spectacle professionnel. Des ligues organisées, des tournois avec des millions de dollars de dotation, des stades combles qui retransmettent des compétitions de League of Legends ou Fortnite : l'esport attire des audiences de jeunes que les médias traditionnels ne touchent plus. Les Jeux Asiatiques ont inclus l'esport comme discipline officielle en 2022. Des marques comme Mercedes, Pepsi et Red Bull investissent massivement dans la sponsorisation d'équipes et de tournois.</p>
<div class="highlight-box">
<strong>Minecraft et l'éducation</strong> : Minecraft, avec plus de 300 millions de copies vendues, est utilisé dans des milliers d'écoles à travers le monde comme outil pédagogique. Minecraft Education permet aux enseignants de créer des mondes virtuels pour enseigner les mathématiques, l'histoire, la physique ou l'informatique. L'Université de Danemark a construit une réplique à l'échelle du monde entier dans Minecraft. Ces usages éducatifs illustrent comment les jeux vidéo peuvent être des vecteurs d'apprentissage actif.
</div>"""

enrichments["publicite/marketing-digital"] = """
<h3>Le content marketing et l'inbound marketing</h3>
<p class="resume-text">Le <strong>content marketing</strong> consiste à produire des contenus utiles, informatifs ou divertissants qui attirent naturellement les prospects vers la marque, au lieu de les interrompre avec de la publicité non sollicitée. Michelin a inventé le contenu de marque en 1900 avec son Guide Michelin : pour vendre plus de pneus, il fallait encourager les gens à voyager en voiture — donc leur fournir les informations nécessaires. Aujourd'hui, Red Bull (médias sportifs extrêmes), Lego (films, séries) ou Airbnb (magazine de voyage) produisent des contenus qui ont leur valeur propre indépendamment de la marque.</p>
<p class="resume-text">L'<strong>inbound marketing</strong>, popularisé par HubSpot à partir de 2006, formalise cette approche : attirer les visiteurs avec du contenu pertinent (SEO, blogs, vidéos), les convertir en leads (formulaires, landing pages), les closer en clients (email automation, CRM), puis les fidéliser et les transformer en ambassadeurs (support, communauté). Cette méthodologie est devenue le standard B2B, où les cycles de vente longs nécessitent une présence de marque continue et une éducation progressive des prospects.</p>
<div class="highlight-box">
<strong>ROI du content marketing</strong> : Une étude HubSpot (2023) montre que les entreprises qui publient 16 articles de blog ou plus par mois génèrent 3,5 fois plus de trafic et 4,5 fois plus de leads que celles qui publient 0 à 4 articles. Le content marketing coûte 62 % moins cher que le marketing traditionnel pour générer un lead. Mais le ROI s'accumule dans le temps : un article bien référencé continue à générer des leads pendant des années après sa publication.
</div>"""

enrichments["medias-numeriques/algorithmes-et-filtres"] = """
<h3>Algorithmes et radicalisation en ligne</h3>
<p class="resume-text">Guillaume Chaslot, ingénieur chez Google de 2010 à 2013, a documenté comment l'algorithme de recommandation de YouTube tendait à pousser les utilisateurs vers des contenus de plus en plus extrêmes. Son analyse de 8 000 vidéos politiques a montré que l'algorithme recommandait systématiquement des contenus plus polarisants que la vidéo initiale — car ils généraient plus d'engagement. Ces conclusions, publiées en 2018, ont alimenté les débats sur la responsabilité des plateformes dans la radicalisation politique.</p>
<p class="resume-text">YouTube a depuis modifié son algorithme pour réduire ce phénomène, mais les chercheurs débattent de l'amplitude réelle de la "machine à radicalisation". Une étude de NYU Stern (2021) a montré que les médias traditionnels produisaient davantage de contenu partisan que les réseaux sociaux. La réalité semble plus nuancée : les algorithmes amplifient les dynamiques de polarisation existantes plutôt qu'ils ne les créent ex nihilo. Mais l'amplification peut suffire à transformer une tendance marginale en phénomène de masse.</p>
<div class="highlight-box">
<strong>Le paradoxe de la personnalisation</strong> : Les algorithmes de personnalisation créent des expériences individuellement optimisées mais collectivement problématiques. Chaque utilisateur vit dans une bulle personnalisée qui lui convient — mais la somme de toutes ces bulles crée une société fragmentée où des groupes vivent dans des réalités informationnelles incompatibles. C'est le paradoxe central de l'ère algorithmique : une personnalisation maximale est incompatible avec un espace public partagé.
</div>"""

enrichments["medias-numeriques/reseaux-sociaux"] = """
<h3>Les réseaux sociaux alternatifs et la décentralisation</h3>
<p class="resume-text">Face à la domination de quelques plateformes centralisées et à leurs problèmes éthiques, des alternatives décentralisées émergent. Le protocole <strong>ActivityPub</strong>, standardisé par le W3C en 2018, permet à différentes instances de serveurs de communiquer entre elles, créant un "fediverse" (univers fédéré). Mastodon, Pixelfed (alternative à Instagram), PeerTube (alternative à YouTube) sont bâtis sur ce protocole : un utilisateur de Mastodon peut interagir avec un utilisateur de n'importe quelle instance compatible sans qu'une entreprise centrale ne contrôle les données.</p>
<p class="resume-text">Le rachat de Twitter par Elon Musk en 2022 a massivement accéléré la migration vers Mastodon et d'autres alternatives. Mastodon est passé de 300 000 à plus de 2 millions d'utilisateurs actifs en quelques semaines fin 2022. Mais ces plateformes restent des niches : leur complexité technique (comprendre les instances, choisir son serveur) les rend inaccessibles au grand public. La fragmentation du marché des réseaux sociaux (TikTok, BeReal, Discord, Bluesky, Threads) depuis 2022 suggère néanmoins que l'hégémonie de Meta et Twitter était moins solide qu'il n'y paraissait.</p>
<div class="highlight-box">
<strong>Bluesky et le protocole AT</strong> : Bluesky, fondé en 2019 par Jack Dorsey, le co-fondateur de Twitter, utilise le protocole AT qui vise à créer un réseau social décentralisé mais plus accessible que le fediverse. En 2024, Bluesky comptait 20 millions d'utilisateurs et se posait en alternative à X (Twitter). Son modèle de gouvernance algorithmique — les utilisateurs peuvent choisir leur propre algorithme de classement du fil — est une réponse directe aux critiques des algorithmes opaques des grandes plateformes.
</div>"""

enrichments["publicite/branding-identite"] = """
<h3>La marque employeur et l'employer branding</h3>
<p class="resume-text">La <strong>marque employeur</strong> (employer branding) est l'extension de la logique de marque aux ressources humaines : comment une organisation est-elle perçue comme employeur ? Dans un marché du travail tendu sur les profils qualifiés, la capacité à attirer et retenir les talents est un enjeu stratégique. Google, Apple, et des entreprises comme LVMH investissent massivement dans la communication de leur culture d'entreprise, leurs valeurs et les avantages offerts aux collaborateurs.</p>
<p class="resume-text">La plateforme <strong>Glassdoor</strong>, qui permet aux employés de noter anonymement leur employeur, a transformé le marché de la marque employeur. Les candidats consultent systématiquement les avis avant de postuler. Une mauvaise réputation employeur sur Glassdoor peut réduire significativement la qualité du vivier de candidats. Les entreprises qui négligent leurs collaborateurs voient leur marque employeur se dégrader indépendamment de leurs dépenses en communication institutionnelle — authenticity matters.</p>
<div class="highlight-box">
<strong>La cohabitation de marques contradictoires</strong> : Volkswagen groupe possède des marques aux positionnements très différents : Skoda (entrée de gamme, valeur), Volkswagen (milieu de gamme, fiabilité), Audi (premium, technologie), Porsche (luxe sportif), Bentley (ultra-luxe). Cette architecture est délibérée : une Skoda et une Porsche partagent des plateformes techniques communes mais ne doivent surtout pas partager leur image. Les équipes marketing de chaque marque travaillent de manière quasi-indépendante pour préserver la cohérence de leur positionnement respectif.
</div>"""

enrichments["relations-publiques/fondements-rp"] = """
<h3>La communication d'influence et le lobbying</h3>
<p class="resume-text">Le <strong>lobbying</strong> est une forme de relations publiques institutionnelles qui vise à influencer les décideurs publics (élus, administration) en faveur des intérêts d'une organisation. Il est légal dans la plupart des démocraties mais fait l'objet d'un encadrement croissant : en France, le registre des représentants d'intérêts (Haute Autorité pour la Transparence de la Vie Publique) liste les lobbyistes actifs auprès du Parlement et du gouvernement. Aux États-Unis, la Federal Lobbying Disclosure Act impose une transparence sur les dépenses de lobbying.</p>
<p class="resume-text">La frontière entre lobbying légitime (informer les décideurs, défendre des intérêts légitimes) et capture réglementaire (utiliser l'influence pour contourner les règles au détriment de l'intérêt général) est souvent ténue. Les controverses sur le lobbying de l'industrie pharmaceutique pendant la pandémie de Covid, du secteur financier pendant les réformes post-2008, ou des géants du numérique face aux régulations européennes illustrent les enjeux éthiques et démocratiques de cette pratique. Les spécialistes des RP publiques doivent maîtriser ces enjeux pour conseiller éthiquement leurs clients.</p>
<div class="highlight-box">
<strong>Edelman Trust Barometer 2024</strong> : Pour la 24e année consécutive, l'enquête mondiale sur la confiance institutionnelle révèle que les entreprises sont les institutions qui font le plus confiance dans 60 % des pays, devant les ONG, les gouvernements et les médias. Cette confiance relative génère des attentes : 63 % des répondants attendent que les entreprises prennent position sur les questions sociétales. Les RP modernes naviguent entre ces attentes contradictoires.
</div>"""

count = 0
for key, html in enrichments.items():
    if key in data['pages']:
        old = data['pages'][key]['content']
        new = enrich(old, html)
        data['pages'][key]['content'] = new
        print(f"  {key}: {len(old)} -> {len(new)} chars")
        count += 1
    else:
        print(f"  WARNING: key not found: {key}")

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nTotal enriched: {count}")

short = [(k, len(v['content'])) for k, v in data['pages'].items() if v.get('type') in ('course', 'lesson')]
short.sort(key=lambda x: x[1])
print(f"COMM STATE: {sum(1 for _, l in short if l >= 15000)}/{len(short)} >= 15k, {sum(1 for _, l in short if l >= 14000)}/{len(short)} >= 14k")
for k, l in short:
    if l < 14000:
        print(f"  SHORT: {l} {k}")
