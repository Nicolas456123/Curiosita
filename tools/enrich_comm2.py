#!/usr/bin/env python3
# enrich_comm2.py — Second pass for communication.json articles
import json, re

PATH = "assets/content/communication.json"

with open(PATH, encoding="utf-8") as f:
    data = json.load(f)

def enrich(content, extra_html):
    idx = content.rfind('</section>')
    if idx == -1:
        return content + extra_html
    return content[:idx] + extra_html + content[idx:]

enrichments = {}

enrichments["theorie-communication/modeles-fondateurs"] = """
<h3>L'école de Palo Alto et la vision systémique</h3>
<p class="resume-text">Dans les années 1950-1960, Gregory Bateson, Paul Watzlawick et leurs collègues du Mental Research Institute de Palo Alto révolutionnent la compréhension de la communication en affirmant qu'<strong>on ne peut pas ne pas communiquer</strong>. Toute absence de message est elle-même un message. Cette approche systémique conçoit la communication non comme une transmission linéaire mais comme une interaction circulaire dans laquelle chaque participant influence l'autre en permanence.</p>
<p class="resume-text">Watzlawick distingue le <strong>contenu</strong> d'un message (ce qui est dit) de sa <strong>relation</strong> (comment c'est dit, qui dit quoi à qui). Les métacommunications — les messages sur les messages — déterminent souvent la qualité réelle de l'échange. Un "très bien" prononcé avec ironie signifie son contraire : c'est la relation qui prend le pas sur le contenu.</p>
<div class="highlight-box">
<strong>Les cinq axiomes de Watzlawick</strong><br>
1. On ne peut pas ne pas communiquer<br>
2. Toute communication présente deux aspects : contenu et relation<br>
3. La nature d'une relation dépend de la ponctuation des séquences<br>
4. Les êtres humains utilisent deux modes de communication : digital (verbal) et analogique (non verbal)<br>
5. Tout échange est symétrique ou complémentaire selon qu'il repose sur l'égalité ou la différence
</div>

<h3>Les théories critiques de la communication</h3>
<p class="resume-text">L'École de Francfort — Adorno, Horkheimer, Habermas — interroge les rapports de pouvoir dans la communication de masse. Dans <em>La Dialectique de la Raison</em> (1947), Adorno et Horkheimer forgent le concept d'<strong>industrie culturelle</strong> : les médias de masse standardisent la culture pour mieux perpétuer le capitalisme. Les émissions populaires ne divertissent pas innocemment — elles formatent les consciences.</p>
<p class="resume-text">Jürgen Habermas propose une théorie plus optimiste avec l'<strong>agir communicationnel</strong> (1981). La communication authentique vise la compréhension mutuelle, non la manipulation. L'<em>espace public</em> est le lieu où les citoyens débattent rationnellement des affaires communes — idéal menacé par la colonisation marchande des médias et la désinformation.</p>
<div class="highlight-box">
<strong>Chiffre clé</strong> : En 2024, 63 % de la population mondiale utilise internet. L'espace public numérique est devenu le premier forum planétaire, mais les algorithmes des plateformes favorisent l'engagement émotionnel au détriment du débat rationnel.
</div>"""

enrichments["theorie-communication/semiologie-et-signes"] = """
<h3>Roland Barthes et la mythologie des signes</h3>
<p class="resume-text">Roland Barthes prolonge la sémiologie saussurienne en l'appliquant à la culture populaire. Dans <em>Mythologies</em> (1957), il analyse la couverture de Paris Match montrant un soldat africain saluant le drapeau français : au niveau dénotatif, c'est une photo ; au niveau connotatif, elle signifie "la France est un grand empire, tous ses fils la servent". Ce glissement du signe vers le mythe est le mécanisme de l'idéologie.</p>
<p class="resume-text">Barthes distingue deux niveaux de signification : la <strong>dénotation</strong> (sens littéral, premier niveau) et la <strong>connotation</strong> (sens culturel, second niveau). Le mythe est un discours de second niveau qui naturalise ce qui est historique et idéologique. La publicité, la mode, le sport sont autant de systèmes mythologiques qui donnent une apparence d'évidence à des constructions sociales.</p>
<div class="highlight-box">
<strong>Exemple contemporain</strong> : Le logo d'une marque de luxe dénote un motif graphique. Il connote l'exclusivité, la réussite sociale, l'appartenance à une élite. Porter ce signe revient à communiquer sur sa position sociale — la sémiologie décode ces messages implicites.
</div>

<h3>La sémiotique visuelle et ses applications</h3>
<p class="resume-text">La sémiotique s'est développée dans le domaine visuel avec Umberto Eco et son œuvre <em>La Structure absente</em> (1968). L'image n'est pas un miroir du réel : elle est un système de signes culturellement codé. Un panneau de danger routier, une peinture baroque, une bannière publicitaire mobilisent des conventions graphiques que nous avons apprises sans nous en rendre compte.</p>
<p class="resume-text">En architecture, en design, en cinéma, la sémiotique permet de décrypter les choix visuels comme des énoncés. Un bureau vitré en open space signifie "transparence et collaboration" ; un bureau fermé avec lourdes portes en bois massif signifie "hiérarchie et pouvoir". L'environnement bâti est un texte lisible à qui en connaît les codes.</p>
<div class="highlight-box">
<strong>Umberto Eco sur la mode</strong> : "Je parle avec mon manteau". Pour Eco, le vêtement est un système sémiotique complet : chaque choix vestimentaire émet un signal sur l'identité, le statut, l'appartenance. La mode est un langage que tout le monde parle mais que peu analysent consciemment.
</div>"""

enrichments["theorie-communication/communication-de-masse"] = """
<h3>La théorie de l'agenda-setting</h3>
<p class="resume-text">Maxwell McCombs et Donald Shaw formalisent en 1972 la théorie de l'<strong>agenda-setting</strong> après avoir étudié l'élection présidentielle américaine de 1968 à Chapel Hill. Leur conclusion : les médias ne disent pas aux gens ce qu'il faut penser, mais à quoi il faut penser. En mettant en avant certains sujets et en en ignorant d'autres, les médias façonnent l'agenda public.</p>
<p class="resume-text">Cette théorie a trois niveaux. Le premier niveau concerne la <strong>saillance des thèmes</strong> : quels sujets apparaissent dans les médias. Le second niveau traite de la <strong>saillance des attributs</strong> : comment les sujets sont présentés, quels aspects sont mis en avant. Le troisième niveau, l'<strong>agenda-building</strong>, étudie comment différents acteurs — gouvernements, lobbys, experts — influencent les médias pour placer leurs sujets dans l'agenda.</p>
<div class="highlight-box">
<strong>Agenda-setting à l'ère numérique</strong> : Les réseaux sociaux ont partiellement inversé le processus. Un sujet trending sur Twitter peut forcer les médias traditionnels à le couvrir. L'agenda-setting est désormais bidirectionnel, mais les grandes plateformes exercent elles-mêmes une forme d'agenda-setting via leurs algorithmes.
</div>

<h3>La spirale du silence et l'opinion publique</h3>
<p class="resume-text">Elisabeth Noelle-Neumann propose en 1974 la théorie de la <strong>spirale du silence</strong> : les individus qui perçoivent que leur opinion est minoritaire tendent à se taire par peur d'être isolés. Ce silence apparent renforce l'impression que l'opinion contraire est dominante, ce qui pousse encore plus de personnes à se taire. La spirale s'auto-entretient jusqu'à ce qu'une opinion finisse par sembler unanime.</p>
<p class="resume-text">Les médias jouent un rôle central dans ce mécanisme en signalant quelle est l'"opinion dominante". Noelle-Neumann, qui avait elle-même une histoire complexe avec le nazisme, était consciente de la manière dont les régimes autoritaires utilisent ce mécanisme pour créer l'illusion du consensus. Sur les réseaux sociaux, les "like" et les partages créent un effet similaire d'amplification des opinions supposément majoritaires.</p>
<div class="highlight-box">
<strong>Données empiriques</strong> : Des études montrent que 32 % des internautes pratiquent l'autocensure sur les réseaux sociaux de peur des réactions négatives. La spirale du silence est plus active en ligne qu'hors ligne, car les systèmes de notation rendent la désapprobation sociale immédiatement visible.
</div>"""

enrichments["theorie-communication/communication-interpersonnelle"] = """
<h3>La communication non verbale : le langage du corps</h3>
<p class="resume-text">Albert Mehrabian formule dans les années 1960 la règle des <strong>7%-38%-55%</strong> : dans la communication d'attitudes et de sentiments, 7 % du message passe par les mots, 38 % par le ton de la voix et 55 % par le langage corporel. Bien que souvent sur-appliquée (Mehrabian soulignait lui-même les limites de son étude), cette règle révèle l'importance massive du non-verbal dans la communication émotionnelle.</p>
<p class="resume-text">Edward Hall développe le concept de <strong>proxémique</strong> : l'étude de l'usage de l'espace comme forme de communication. Il distingue quatre zones de distance interpersonnelle — intime (0-45 cm), personnelle (45-120 cm), sociale (1,2-3,6 m) et publique (au-delà de 3,6 m) — et montre que ces distances varient selon les cultures. Un Américain et un Arabe qui conversent vivront le même échange très différemment : l'un trouvera l'autre envahissant, l'autre trouvera son interlocuteur froid et distant.</p>
<div class="highlight-box">
<strong>Communication non verbale au travail</strong> : Une étude de Harvard (2010) montre que la posture dominante ("power pose") active des processus hormonaux qui augmentent la confiance en soi. Les entretiens d'embauche, les négociations, les présentations en public sont des arènes où le non-verbal conditionne souvent davantage le résultat que le contenu verbal.
</div>

<h3>L'analyse transactionnelle</h3>
<p class="resume-text">Éric Berne développe dans les années 1950-1960 l'<strong>analyse transactionnelle</strong> (AT), une théorie de la personnalité et de la communication interpersonnelle. Chaque personne communique depuis l'un de ses trois <strong>états du Moi</strong> : le Parent (valeurs intériorisées, règles), l'Adulte (raisonnement factuel, présent) ou l'Enfant (émotions et réactions archaïques). Les conflits relationnels surviennent souvent quand les transactions sont croisées — par exemple quand quelqu'un parle depuis l'Adulte et reçoit une réponse depuis l'Enfant blessé.</p>
<p class="resume-text">Berne décrit aussi les <strong>jeux psychologiques</strong> : des séquences répétitives d'échanges qui satisfont des besoins psychologiques mais débouchent sur des sentiments négatifs. Le "triangle dramatique" de Karpman — Persécuteur, Victime, Sauveur — est un schéma de jeu psychologique très répandu dans les relations familiales, amoureuses et professionnelles. Identifier ces dynamiques permet de s'en extraire.</p>
<div class="highlight-box">
<strong>Application en management</strong> : L'analyse transactionnelle est largement utilisée en formation managériale. Un manager qui adopte systématiquement une position de Parent normatif avec ses équipes crée de la résistance ou de la dépendance. Communiquer depuis l'état Adulte favorise l'autonomie et la responsabilisation des collaborateurs.
</div>"""

enrichments["theorie-communication/rhetorique-et-persuasion"] = """
<h3>La propagande moderne et ses mécanismes</h3>
<p class="resume-text">Edward Bernays, neveu de Sigmund Freud, est considéré comme le père des relations publiques modernes. Dans <em>Propaganda</em> (1928), il théorise l'utilisation des techniques de persuasion psychologique pour "manipuler l'opinion publique" — expression qu'il emploie sans complexe. Sa campagne pour la American Tobacco Company associant les cigarettes à l'émancipation féminine ("Torches of Freedom", 1929) est devenue un cas d'école de la manipulation symbolique.</p>
<p class="resume-text">Jacques Ellul analyse dans <em>Propagandes</em> (1962) les mécanismes de la propagande totalitaire. Il distingue la propagande d'agitation (mobiliser les masses pour l'action) de la propagande d'intégration (maintenir la cohésion sociale dans la durée). Pour Ellul, la propagande moderne est d'autant plus efficace qu'elle n'est pas reconnue comme telle : la publicité commerciale, l'éducation patriotique et le discours politique participent tous du même continuum persuasif.</p>
<div class="highlight-box">
<strong>Techniques de propagande identifiées par l'IPA (1939)</strong><br>
• Name-calling (étiquette négative sur l'adversaire)<br>
• Glittering generalities (termes glorieux sans contenu)<br>
• Transfert (associer une idée à une autorité respectée)<br>
• Témoignage (personnalité célèbre qui approuve)<br>
• Plain folks (le leader se présente comme "un homme du peuple")<br>
• Card stacking (ne sélectionner que les faits favorables)<br>
• Bandwagon ("tout le monde le fait")
</div>

<h3>La rhétorique numérique et les nouvelles formes de persuasion</h3>
<p class="resume-text">À l'ère numérique, la rhétorique se déploie dans de nouveaux formats. Les <strong>mèmes</strong> sont des arguments rhétoriques condensés en image : ils associent une prémisse implicite, une conclusion émotionnelle et un format reconnaissable. Leur viralité dépend de leur capacité à déclencher une réaction forte (rire, indignation, identification) qui pousse au partage sans réflexion critique.</p>
<p class="resume-text">Les <strong>dark patterns</strong> sont des interfaces conçues pour pousser l'utilisateur vers des choix qu'il n'aurait pas faits librement : cases pré-cochées, boutons "accepter" bien visibles et "refuser" difficiles à trouver, urgence artificielle ("plus que 2 disponibles"). Ces techniques exploitent les biais cognitifs décrits par la psychologie comportementale pour persuader sans argumenter. La rhétorique contemporaine est autant visuelle, architecturale et algorithmique que verbale.</p>
<div class="highlight-box">
<strong>Chiffre clé</strong> : Selon une étude de l'Université de Princeton (2019), 11 % des 500 plus grands sites e-commerce utilisent au moins un dark pattern. Ces designs exploitent notamment le biais de perte (loss aversion) décrit par Kahneman : nous ressentons une perte deux fois plus fortement qu'un gain équivalent.
</div>"""

enrichments["journalisme/histoire-de-la-presse"] = """
<h3>La presse à l'ère industrielle et la naissance du journalisme moderne</h3>
<p class="resume-text">La révolution industrielle du XIXe siècle transforme profondément la presse. La presse à vapeur (1814), puis rotative (1866), permet des tirages de masse à coût unitaire très bas. Aux États-Unis, la <strong>penny press</strong> — journaux vendus un cent — révolutionne le modèle économique : au lieu de vendre des abonnements chers à une élite, on vend des tirages massifs à tous et on monétise l'audience via la publicité. Le <em>New York Sun</em>, fondé en 1833, est le pionnier de ce modèle.</p>
<p class="resume-text">À la fin du XIXe siècle, la concurrence entre William Randolph Hearst (New York Journal) et Joseph Pulitzer (New York World) engendre le <strong>journalisme jaune</strong> (yellow journalism) : sensationnalisme, manchettes outrancières, informations non vérifiées. Cette période atteint son apogée lors de la guerre hispano-américaine de 1898, où certains historiens attribuent aux deux journaux un rôle dans l'escalade du conflit. En réaction, le mouvement progressiste réclame une presse plus rigoureuse et responsable.</p>
<div class="highlight-box">
<strong>Le prix Pulitzer</strong> : Joseph Pulitzer lègue à sa mort (1911) une somme à l'Université Columbia pour créer une école de journalisme et un prix d'excellence. Les Prix Pulitzer, décernés depuis 1917, restent la plus haute distinction du journalisme américain. L'ironie de l'histoire : le père du journalisme jaune est aussi le parrain du journalisme de qualité.
</div>

<h3>La presse au XXe siècle : radio, télévision et concentration</h3>
<p class="resume-text">L'apparition de la radio dans les années 1920 puis de la télévision dans les années 1950 bouleverse le paysage médiatique. Pour la première fois, l'information est diffusée en temps réel à des millions de personnes simultanément. Le <strong>discours de Roosevelt</strong> à la radio (Fireside Chats, 1933-1944), les images de l'assassinat de Kennedy en 1963 et les reportages en direct de la guerre du Vietnam marquent des tournants dans la manière dont les sociétés vivent l'actualité.</p>
<p class="resume-text">La seconde moitié du XXe siècle est aussi celle de la <strong>concentration médiatique</strong>. Les groupes de presse rachètent des titres, des chaînes de radio et de télévision pour former des empires multimédias. Rupert Murdoch (News Corp), Silvio Berlusconi (Mediaset) ou, en France, les groupes Bouygues (TF1) et Dassault (Le Figaro) illustrent l'imbrication du capital industriel, financier et médiatique. Cette concentration soulève des questions fondamentales sur l'indépendance de la presse.</p>
<div class="highlight-box">
<strong>Données actuelles</strong> : En France, neuf milliardaires contrôlent les principaux médias nationaux (journaux, chaînes TV, radios). Le rapport Rolland (2022) sur l'indépendance des médias souligne les risques pour le pluralisme démocratique quand les propriétaires de médias ont des intérêts industriels susceptibles d'être couverts ou défendus par leurs propres rédactions.
</div>"""

enrichments["journalisme/deontologie-journalistique"] = """
<h3>La Charte de Munich et les codes déontologiques internationaux</h3>
<p class="resume-text">La <strong>Charte de Munich</strong> (1971), signée par des syndicats de journalistes de six pays européens, est la référence déontologique européenne. Elle distingue les devoirs des journalistes (vérifier, rectifier, respecter le secret des sources, refuser la corruption, ne pas confondre journalisme et publicité) et leurs droits (accès aux sources, protection du secret professionnel, refus des ordres contraires à l'éthique).</p>
<p class="resume-text">La <strong>protection des sources</strong> est un pilier fondamental du journalisme d'investigation. Sans garantie de confidentialité, les lanceurs d'alerte ne s'expriment pas, les abus de pouvoir restent cachés. La CEDH reconnaît cette protection comme condition de la liberté de presse. Pourtant, plusieurs démocraties ont ces dernières années poursuivi des journalistes pour avoir refusé de révéler leurs sources — au nom de la sécurité nationale.</p>
<div class="highlight-box">
<strong>Le secret des sources en Europe</strong> : En France, la loi du 4 janvier 2010 protège le secret des sources journalistiques sauf si une atteinte grave à la sécurité nationale ou à la vie humaine est en jeu. En pratique, les réquisitions judiciaires de données téléphoniques de journalistes contournent parfois cette protection, comme l'a montré l'affaire du journaliste de L'Obs en 2014.
</div>

<h3>Conflits d'intérêts, fact-checking et nouvelles pressions déontologiques</h3>
<p class="resume-text">Le journalisme contemporain fait face à des pressions déontologiques inédites. La <strong>course au clic</strong> pousse à publier vite et à titrer de manière sensationnelle pour maximiser l'audience, au détriment de la vérification. Le modèle économique publicitaire lié à la mesure d'audience crée une tension permanente entre rigueur et attractivité. Certaines rédactions ont explicitement séparé les équipes éditoriales des équipes commerciales pour protéger leur indépendance.</p>
<p class="resume-text">L'essor du <strong>fact-checking</strong> depuis les années 2010 est une réponse institutionnelle à la désinformation. Des organisations comme PolitiFact (États-Unis, 2007), Les Décodeurs du Monde (France, 2014) ou Africa Check (2012) vérifient systématiquement les déclarations de personnalités publiques. Cette pratique, valorisée par plusieurs prix Pulitzer, a contribué à formaliser des standards de vérification qui peuvent bénéficier à l'ensemble du journalisme.</p>
<div class="highlight-box">
<strong>Charte de déontologie des journalistes français (SNJ, 2011)</strong> : "Le journaliste ne confond pas son rôle avec celui du publicitaire ou du propagandiste ; il n'accepte aucune consigne, directe ou indirecte, des annonceurs." Cette clause, régulièrement violée dans les suppléments thématiques et les publi-reportages, reste le point de tension majeur entre modèle économique et déontologie professionnelle.
</div>"""

enrichments["journalisme/journalisme-investigation"] = """
<h3>Des Misérables au Watergate : l'investigation comme contre-pouvoir</h3>
<p class="resume-text">La tradition du journalisme d'investigation remonte au XIXe siècle. Nellie Bly se fait interner de force dans un asile psychiatrique new-yorkais pour révéler les conditions de détention (1887) ; Ida Tarbell démantèle le monopole de la Standard Oil de John D. Rockefeller par une enquête de deux ans (1902). Ces "muckrakers" ("fouilleurs de boue") ont contribué à la régulation des monopoles et aux réformes sociales progressistes.</p>
<p class="resume-text">Le tournant moderne du journalisme d'investigation est le <strong>Watergate</strong> (1972-1974). Bob Woodward et Carl Bernstein du Washington Post révèlent, avec l'aide de leur source "Deep Throat" (Mark Felt, numéro 2 du FBI), que le président Nixon a ordonné le cambriolage du siège du Parti Démocrate. La couverture du scandale conduit à la démission de Nixon — seul cas de démission d'un président américain dans l'histoire. L'affaire devient le modèle de référence pour toute une génération de journalistes.</p>
<div class="highlight-box">
<strong>Watergate en chiffres</strong> : 770 jours entre le cambriolage (17 juin 1972) et la démission de Nixon (9 août 1974). 40 personnes condamnées dont le directeur de cabinet de la Maison Blanche et l'Attorney General. Le film "All the President's Men" (1976) avec Dustin Hoffman et Robert Redford a mythifié le journalisme d'investigation aux États-Unis et alimenté des vocations journalistiques pendant des décennies.
</div>

<h3>Journalisme de données et consortiums internationaux</h3>
<p class="resume-text">Le XXIe siècle voit émerger le <strong>journalisme de données</strong> (data journalism) et les consortiums d'investigation internationaux. Le <em>Guardian</em> et le <em>New York Times</em> publient en 2010 les câbles diplomatiques américains révélés par WikiLeaks — 250 000 documents. En 2013, Edward Snowden remet aux journalistes Glenn Greenwald et Laura Poitras les documents de la NSA révélant la surveillance de masse mondiale. Ces affaires posent la question du statut des lanceurs d'alerte et des frontières entre journalisme et espionnage.</p>
<p class="resume-text">L'<strong>ICIJ</strong> (International Consortium of Investigative Journalists) coordonne depuis Washington des enquêtes mondiales impliquant des centaines de journalistes de dizaines de pays. Les <em>Panama Papers</em> (2016, 11,5 millions de documents sur des sociétés offshores) et les <em>Pandora Papers</em> (2021, 11,9 millions de documents) ont révélé les pratiques d'évasion fiscale de chefs d'État, d'oligarques et de célébrités mondiales, déclenchant des poursuites judiciaires dans de nombreux pays.</p>
<div class="highlight-box">
<strong>Panama Papers : l'impact mesurable</strong> : Suite aux révélations, 150 enquêtes officielles ont été ouvertes dans 79 pays. Des milliards d'euros d'arriérés fiscaux ont été récupérés. Le Premier ministre islandais Sigmundur Davíð Gunnlaugsson a démissionné 48 heures après la publication. L'enquête a reçu le Prix Pulitzer 2017 de l'intérêt public.
</div>"""

enrichments["journalisme/photojournalisme"] = """
<h3>Les images qui ont changé l'histoire</h3>
<p class="resume-text">Le photojournalisme possède un pouvoir unique de témoignage que le texte seul ne peut égaler. Certaines photographies ont modifié le cours de l'histoire en rendant visible ce qui était refusé ou ignoré. La photo de <strong>Nick Ut</strong> montrant Kim Phuc, fillette de 9 ans fuyant nue après une attaque au napalm au Vietnam (1972), a contribué à retourner l'opinion américaine contre la guerre. Elle a valu à son auteur le prix Pulitzer 1973.</p>
<p class="resume-text">Le photographe <strong>Kevin Carter</strong> capture en 1993 au Soudan une fillette agonisante surveillée par un vautour attendant sa mort. L'image, publiée dans le New York Times, provoque une onde de choc mondiale sur la famine en Afrique et vaut à Carter le prix Pulitzer 1994. Elle soulève aussi des débats éthiques intenses : pourquoi le photographe n'a-t-il pas aidé l'enfant ? Carter se suicide trois mois après avoir reçu son prix, sous le poids de ces accusations et de son propre traumatisme. L'affaire illustre les tensions profondes du photojournalisme de guerre.</p>
<div class="highlight-box">
<strong>L'agence Magnum (1947)</strong> : Fondée par Robert Capa, Henri Cartier-Bresson, David Seymour et George Rodger, Magnum Photos est une coopérative de photographes qui contrôlent collectivement leurs droits. Ce modèle unique — à rebours de la relation habituelle photographe/agence — garantit l'indépendance éditoriale et la propriété intellectuelle des auteurs. Magnum reste une référence mondiale pour le photojournalisme documentaire.
</div>

<h3>Vérification visuelle et deepfakes : les nouveaux défis</h3>
<p class="resume-text">L'ère numérique a radicalement changé le photojournalisme. La manipulation d'images est devenue triviale avec Photoshop depuis les années 1990. Des agences comme Reuters et l'AP ont dû renforcer leurs politiques d'authenticité : aucune suppression d'éléments, aucun ajout, seuls les ajustements d'exposition et de contraste sont tolérés. Plusieurs photojournalistes ont été licenciés et exclus pour manipulation d'images.</p>
<p class="resume-text">Les <strong>deepfakes</strong> et la génération d'images par IA représentent un nouveau défi. En 2023, une image générée montrant une explosion près du Pentagone a brièvement circulé et provoqué une micro-chute boursière. Des outils de vérification visuelle (reverse image search, analyse des métadonnées EXIF, détection de manipulation par IA) sont devenus des compétences essentielles pour tout journaliste. Le projet <strong>Content Authenticity Initiative</strong> (CAI), lancé par Adobe, vise à créer des standards de certification d'authenticité des images.</p>
<div class="highlight-box">
<strong>Chiffres clés de la vérification visuelle</strong> : 60 % des images virales partagées lors de conflits sont hors contexte, mal datées ou manipulées (Bellingcat, 2022). L'organisation Bellingcat a notamment utilisé des techniques d'investigation en sources ouvertes (OSINT) pour identifier les auteurs de l'assassinat de l'opposant russe et de l'attentat à Salisbury, grâce notamment à la géolocalisation de photos.
</div>"""

enrichments["journalisme/avenir-du-journalisme"] = """
<h3>La crise économique de la presse et les nouveaux modèles</h3>
<p class="resume-text">Entre 2008 et 2023, les recettes publicitaires des journaux américains ont chuté de 50 milliards à 8 milliards de dollars. Des milliers de rédactions ont fermé, particulièrement la presse locale. Ce "news desert" — déserts informationnels où aucun journaliste ne couvre la vie locale — crée un vide démocratique : les conseils municipaux, les tribunaux locaux, les scandales locaux ne sont plus surveillés.</p>
<p class="resume-text">Face à cette crise, plusieurs nouveaux modèles économiques émergent. Le <strong>journalisme par abonnement numérique</strong> (The New York Times, Le Monde, The Guardian) a démontré sa viabilité : le NYT comptait 10 millions d'abonnés numériques en 2023. Le <strong>journalisme à but non lucratif</strong> (ProPublica, Mediapart, The Intercept) permet l'investigation sans dépendance publicitaire. Les <strong>newsletters indépendantes</strong> (Substack, Revue) permettent à des journalistes de monétiser directement leur audience.</p>
<div class="highlight-box">
<strong>Mediapart, modèle alternatif</strong> : Fondé en 2008 par Edwy Plenel, Mediapart est un journal en ligne 100 % payant, sans publicité. Rentable depuis 2010, il compte 230 000 abonnés en 2023 et a révélé plusieurs grandes affaires (Cahuzac, Benalla). Son modèle montre qu'un journalisme d'investigation exigeant peut être économiquement viable sans dépendance aux annonceurs.
</div>

<h3>Intelligence artificielle et journalisme : menaces et opportunités</h3>
<p class="resume-text">L'IA transforme le journalisme à plusieurs niveaux. Des outils comme ChatGPT permettent déjà de rédiger automatiquement des articles standardisés : résultats sportifs, rapports financiers trimestriels, bulletins météo. L'agence Associated Press automatise la rédaction de milliers d'articles par an sur les résultats de bourse et de baseball depuis 2014. Cette automation libère les journalistes de tâches répétitives mais menace des emplois dans les segments les plus standardisés.</p>
<p class="resume-text">Mais l'IA est aussi un outil d'investigation puissant. L'analyse de masses de documents (leaks, archives publiques) par des algorithmes de traitement du langage naturel permet de détecter des patterns impossibles à trouver manuellement. Plusieurs rédactions utilisent l'IA pour analyser des centaines de milliers de contrats publics, de dossiers judiciaires ou de données de santé. La vraie question n'est pas "l'IA va-t-elle remplacer les journalistes" mais "comment les journalistes vont-ils utiliser l'IA comme outil d'investigation".</p>
<div class="highlight-box">
<strong>Déclaration de Bruxelles sur le journalisme et l'IA (2023)</strong> : Les principales organisations de journalistes européens ont signé une déclaration exigeant que les systèmes d'IA générative soient formés sur des données journalistiques dans le respect du droit d'auteur, et que les contenus générés par IA soient clairement identifiés comme tels pour les lecteurs.
</div>"""

enrichments["medias-numeriques/histoire-internet"] = """
<h3>Du Web 1.0 au Web 2.0 : la révolution participative</h3>
<p class="resume-text">Tim Berners-Lee invente le World Wide Web en 1989 au CERN de Genève pour faciliter le partage de documents scientifiques. Le Web 1.0 (années 1990) est essentiellement "read-only" : quelques émetteurs professionnels produisent du contenu, des millions d'internautes le consultent passivement. Les pages HTML sont statiques, les mises à jour manuelles, les utilisateurs n'interagissent pas.</p>
<p class="resume-text">Le Web 2.0, terme popularisé par Tim O'Reilly en 2004, marque le passage au web participatif. Les blogs, wikis, forums, puis les réseaux sociaux permettent à n'importe qui de produire et partager du contenu. Wikipedia (2001), YouTube (2005), Facebook (2004-2006), Twitter (2006) : en moins d'une décennie, l'architecture de l'information mondiale se transforme. Les internautes deviennent des "prosommateurs" — simultanément producteurs et consommateurs de contenu.</p>
<div class="highlight-box">
<strong>Chiffres du Web mondial (2024)</strong> : 5,4 milliards d'internautes (67 % de la population mondiale). 1,5 milliard de sites web. 4 millions d'articles Wikipedia en français. 500 heures de vidéo uploadées sur YouTube chaque minute. 3 milliards d'utilisateurs Facebook. Ces chiffres illustrent l'ampleur de la révolution communicationnelle des 30 dernières années.
</div>

<h3>La fracture numérique et les enjeux d'accès</h3>
<p class="resume-text">Derrière les chiffres impressionnants de la croissance d'internet se cache une réalité inégalitaire. 2,6 milliards de personnes n'ont toujours pas accès à internet (2024), principalement en Afrique subsaharienne, en Asie du Sud et dans les zones rurales mondiales. Cette <strong>fracture numérique</strong> (digital divide) se superpose aux inégalités économiques existantes et les renforce : l'accès au numérique conditionne de plus en plus l'accès à l'emploi, à l'éducation, aux services publics et à la participation démocratique.</p>
<p class="resume-text">La fracture numérique est aussi qualitative : parmi les 5,4 milliards d'internautes, des inégalités massives persistent dans les usages. Les populations défavorisées accèdent principalement à internet via smartphone, sans ordinateur, et ont souvent des compétences numériques limitées. Ils utilisent essentiellement les réseaux sociaux et les messageries, mais n'ont pas accès aux formations en ligne, aux outils de création de contenu ou aux bases de données professionnelles. Le "fossé des usages" est aussi important que le fossé d'accès.</p>
<div class="highlight-box">
<strong>Internet et démocratie</strong> : Le "Printemps arabe" (2010-2012) a été qualifié de "révolution Facebook" — les réseaux sociaux ont permis de coordonner des soulèvements dans des pays où les médias traditionnels étaient contrôlés. Mais l'optimisme initial a été tempéré : les mêmes outils servent aussi aux régimes autoritaires pour surveiller les dissidents et diffuser de la propagande. Internet est un amplificateur : il amplifie aussi bien la liberté que la répression.
</div>"""

enrichments["medias-numeriques/reseaux-sociaux"] = """
<h3>L'économie de l'attention et le capitalisme de surveillance</h3>
<p class="resume-text">Shoshana Zuboff forge en 2019 le concept de <strong>capitalisme de surveillance</strong> dans son ouvrage éponyme. Les plateformes numériques — Facebook, Google, TikTok — ne vendent pas des produits aux utilisateurs : elles vendent des prédictions de comportement aux annonceurs. Pour affiner ces prédictions, elles ont besoin de collecter un maximum de données comportementales. L'objectif n'est pas simplement de cibler des publicités, mais de modifier les comportements des utilisateurs dans le sens voulu par les annonceurs.</p>
<p class="resume-text">Le modèle économique des réseaux sociaux repose sur l'<strong>économie de l'attention</strong> : chaque minute que vous passez sur la plateforme est une minute de données comportementales collectées et monétisées. Les ingénieurs de Facebook, Twitter ou TikTok optimisent leurs algorithmes pour maximiser l'engagement — c'est-à-dire le temps passé sur la plateforme. Or, les études montrent que les contenus qui génèrent le plus d'engagement sont ceux qui provoquent des réactions émotionnelles fortes : indignation, peur, outrage. La viralité de la colère est un effet de bord du modèle publicitaire.</p>
<div class="highlight-box">
<strong>Les revenus de la surveillance</strong> : En 2023, Meta (Facebook, Instagram, WhatsApp) a réalisé 134 milliards de dollars de chiffre d'affaires, dont 131 milliards issus de la publicité ciblée. Alphabet (Google, YouTube) a réalisé 307 milliards, dont 237 milliards de publicité. Ces deux entreprises captent à elles seules plus de la moitié des dépenses publicitaires numériques mondiales.
</div>

<h3>Réseaux sociaux et santé mentale : état des recherches</h3>
<p class="resume-text">Les effets des réseaux sociaux sur la santé mentale font l'objet d'un intense débat scientifique. Jonathan Haidt, dans <em>The Anxious Generation</em> (2024), attribue la hausse des troubles dépressifs chez les adolescents américains depuis 2012 à l'essor du smartphone et des réseaux sociaux. Il documente une corrélation forte entre l'adoption d'Instagram (racheté par Facebook en 2012) et la dégradation de la santé mentale des adolescentes. Les fonctionnalités de comparaison sociale, de "like" et d'exposition aux images de beauté idéalisées seraient particulièrement nocives.</p>
<p class="resume-text">D'autres chercheurs nuancent ce tableau. Amy Orben et Andrew Przybylski ont montré dans <em>Nature Human Behaviour</em> (2019) que l'effet des réseaux sociaux sur le bien-être des adolescents est comparable à celui de porter des lunettes (effet mesurable mais modeste). La question de la causalité reste ouverte : les adolescents dépressifs utilisent-ils davantage les réseaux, ou les réseaux rendent-ils les adolescents dépressifs ? Le débat illustre la difficulté de faire de la science sur des phénomènes sociaux massifs et contemporains.</p>
<div class="highlight-box">
<strong>Régulation internationale</strong> : En 2024, l'Australie a interdit les réseaux sociaux aux moins de 16 ans. La France a introduit une "majorité numérique" à 15 ans. L'Union européenne a adopté le Digital Services Act (DSA) qui oblige les très grandes plateformes à évaluer et atténuer les risques systémiques de leurs services, notamment sur la santé mentale des mineurs.
</div>"""

enrichments["medias-numeriques/algorithmes-et-filtres"] = """
<h3>Comment fonctionnent les algorithmes de recommandation</h3>
<p class="resume-text">Les algorithmes de recommandation sont les moteurs invisibles qui décident quel contenu vous voyez sur YouTube, Netflix, TikTok ou Spotify. Ils combinent plusieurs techniques : le <strong>filtrage collaboratif</strong> (les utilisateurs qui vous ressemblent ont apprécié X, donc X vous plaira) et le <strong>filtrage basé sur le contenu</strong> (vous avez aimé des vidéos avec ces caractéristiques, voici d'autres vidéos similaires). Les systèmes modernes utilisent des réseaux de neurones profonds qui détectent des patterns impossibles à formaliser manuellement.</p>
<p class="resume-text">YouTube a révélé en 2018 que son algorithme gérait 70 % du temps de visionnage total. La métrique qu'il optimise est le "watch time" — le temps total passé à regarder des vidéos. Les tests ont montré que les vidéos qui maximisent cet indicateur sont souvent des vidéos émotionnellement intenses, polarisantes ou sensationnelles. Guillaume Chaslot, ancien ingénieur YouTube, a documenté que l'algorithme avait tendance à recommander des contenus de plus en plus extrêmes pour maintenir l'engagement.</p>
<div class="highlight-box">
<strong>L'algorithme TikTok décrypté</strong> : TikTok utilise principalement les signaux de visionnage (avez-vous regardé jusqu'à la fin ?), le taux de replay et les interactions. Contrairement à Facebook, il donne moins de poids au réseau social : même un compte avec zéro abonné peut atteindre des millions de vues si ses vidéos génèrent beaucoup d'engagement. Ce modèle favorise la découverte de contenus mais aussi la viralité de contenus choquants.
</div>

<h3>Le Digital Services Act et la régulation des algorithmes</h3>
<p class="resume-text">Le <strong>Digital Services Act</strong> (DSA) européen, entré en vigueur en 2024, représente la première régulation significative des algorithmes de recommandation. Il impose aux très grandes plateformes (plus de 45 millions d'utilisateurs en Europe) plusieurs obligations : transparence sur les critères de recommandation, option pour les utilisateurs de désactiver la personnalisation algorithmique, audit indépendant annuel des systèmes de recommandation, et évaluation des risques systémiques (désinformation, santé mentale des mineurs).</p>
<p class="resume-text">Le DSA crée aussi un droit à la contestation des décisions algorithmiques de modération. Si votre contenu est supprimé ou rétrogradé par un algorithme, vous devez pouvoir obtenir une explication et contester la décision. Cette règle s'inspire du RGPD, qui consacrait déjà un droit à ne pas faire l'objet de décisions entièrement automatisées. Ces régulations marquent la fin de l'ère du "safe harbour" absolu pour les plateformes numériques.</p>
<div class="highlight-box">
<strong>Sanctions DSA</strong> : Les plateformes qui ne respectent pas le DSA s'exposent à des amendes allant jusqu'à 6 % de leur chiffre d'affaires mondial. En cas de violations répétées, la Commission européenne peut ordonner des mesures comportementales, y compris l'accès aux données internes pour les chercheurs. X (Twitter) a été la première plateforme placée sous procédure formelle DSA en décembre 2023.
</div>"""

enrichments["medias-numeriques/desinformation"] = """
<h3>Anatomie d'une infox : comment se propage la désinformation</h3>
<p class="resume-text">Une étude du MIT Media Lab (Vosoughi, Roy, Aral, 2018) publiée dans <em>Science</em> est devenue une référence mondiale sur la propagation de la désinformation. Analysant 126 000 rumeurs sur Twitter sur une période de 11 ans, les chercheurs montrent que les informations fausses se propagent 6 fois plus vite que les informations vraies, touchent 10 fois plus de personnes, et pénètrent des réseaux qui restent imperméables à l'information vérifiée. La raison : les informations fausses sont plus "nouvelles" (plus surprenantes, plus émotionnellement chargées) que les informations vraies.</p>
<p class="resume-text">La désinformation moderne n'est pas monolithique. Claire Wardle (First Draft) distingue sept types selon l'intention et la nature du contenu : satire ou parodie (pas d'intention de nuire), connexion trompeuse (titre ne correspondant pas au contenu), contenu trompeur, faux contexte (contenu authentique dans un contexte erroné), contenu imposteur, contenu manipulé, et contenu fabriqué de toutes pièces. Cette taxonomie est essentielle : les réponses adaptées diffèrent selon le type de désinformation.</p>
<div class="highlight-box">
<strong>Pizzagate (2016) : la désinformation peut tuer</strong> : En décembre 2016, un homme a tiré des coups de feu dans une pizzeria de Washington DC après avoir lu des théories complotistes selon lesquelles le restaurant dissimulait un réseau pédophile lié à Hillary Clinton. Aucun enfant n'y était détenu. L'affaire illustre comment la désinformation en ligne peut conduire à des violences réelles.
</div>

<h3>Stratégies de fact-checking et de lutte contre la désinformation</h3>
<p class="resume-text">Le <strong>fact-checking</strong> professionnel s'est institutionnalisé depuis les années 2010. PolitiFact, FactCheck.org, Snopes aux États-Unis ; Les Décodeurs (Le Monde), Checknews (Libération), AFP Factuel en France ; Full Fact au Royaume-Uni : ces organisations emploient des journalistes spécialisés qui vérifient les affirmations de personnalités publiques ou les rumeurs virales selon des protocoles transparents et reproductibles. L'<strong>IFCN</strong> (International Fact-Checking Network) certifie les organisations qui respectent des standards de nonpartisanerie, de transparence et de méthodologie.</p>
<p class="resume-text">Les recherches sur l'efficacité du fact-checking sont mitigées. Les études montrent que les corrections réduisent les croyances erronées mais produisent rarement des changements durables d'attitude, surtout sur les sujets identitaires. Le phénomène de <strong>"backfire effect"</strong> — une correction qui renforcerait la croyance erronée chez les personnes les plus motivées — a été très médiatisé mais n'a pas été reproduit de manière fiable. Des approches alternatives comme l'inoculation (exposer les gens aux techniques de manipulation avant qu'ils y soient exposés) montrent des résultats prometteurs.</p>
<div class="highlight-box">
<strong>Le jeu Bad News</strong> : Développé par l'Université de Cambridge, ce jeu en ligne met les joueurs en position de créer et diffuser de la désinformation. L'objectif est de les "inoculer" contre les techniques de manipulation en les leur faisant pratiquer. Des études montrent que les joueurs sont ensuite 21 % plus capables de reconnaître la désinformation. Cette approche de pré-bunking (avant l'exposition) semble plus efficace que le fact-checking après coup.
</div>"""

enrichments["medias-numeriques/culture-numerique"] = """
<h3>Les mèmes : unités de la culture numérique</h3>
<p class="resume-text">Le terme "mème" (meme) a été créé par Richard Dawkins en 1976 dans <em>Le Gène égoïste</em> par analogie avec le gène biologique : une unité culturelle qui se réplique, se propage et évolue. Sur internet, le mème désigne un format culturel partagé — image, texte, vidéo — qui peut être réapproprié, détourné et réinterprété à l'infini. Le mème internet est un langage collectif émergent.</p>
<p class="resume-text">Les mèmes fonctionnent par <strong>intertextualité compressée</strong> : ils condensent en une image des références culturelles partagées qui n'ont pas besoin d'être explicitées à ceux qui connaissent le code. La photo de Drake approuvant/désapprouvant ("Drake pointing meme") peut être réutilisée dans n'importe quel contexte où quelqu'un préfère quelque chose à autre chose. Ce langage visuel partagé crée une forme d'intimité culturelle entre ceux qui partagent les mêmes références — et exclut ceux qui ne les partagent pas.</p>
<div class="highlight-box">
<strong>Mèmes et politique</strong> : En 2016, des groupes liés à la campagne Trump ont utilisé des mèmes issus du forum 4chan (notamment "Pepe the Frog") pour diffuser des messages politiques dans une esthétique irréductible au discours politique conventionnel. L'ADL (Anti-Defamation League) a classifié Pepe comme symbole de haine. L'affaire illustre comment les sous-cultures internet influencent le discours politique mainstream.
</div>

<h3>Identité numérique, avatars et présentation de soi en ligne</h3>
<p class="resume-text">Erving Goffman, dans <em>La Mise en scène de la vie quotidienne</em> (1959), théorise la vie sociale comme une performance théâtrale : chacun joue différents rôles selon le contexte ("frontstage") tout en maintenant une coulisse ("backstage") où l'on est "soi-même". Sherry Turkle applique ce cadre aux identités numériques dans <em>Life on the Screen</em> (1995) : internet permet d'explorer des identités multiples, de jouer des rôles sans les contraintes du monde physique.</p>
<p class="resume-text">Les réseaux sociaux ont transformé la construction de l'identité en performance permanente et publique. Le profil Instagram n'est pas une représentation neutre de soi : c'est une construction narrative soigneusement élaborée. L'économie de l'<strong>influenceur</strong> — des personnes qui monétisent leur identité en ligne — est la forme extrême de cette marchandisation de la présentation de soi. En 2023, le marché mondial du marketing d'influence est estimé à 21 milliards de dollars.</p>
<div class="highlight-box">
<strong>L'effet Protée</strong> : Des recherches en psychologie montrent que l'avatar que vous incarnez dans un jeu vidéo modifie votre comportement réel. Si vous jouez un personnage attrayant, vous êtes plus confiant dans les interactions sociales qui suivent. Si vous jouez un personnage âgé, vous manifestez des comportements plus proches de ceux des personnes âgées. L'identité numérique n'est pas une simple projection de l'identité réelle — elle la façonne en retour.
</div>"""

enrichments["publicite/histoire-publicite"] = """
<h3>De la réclame au discours de marque : l'évolution de la publicité</h3>
<p class="resume-text">La publicité moderne naît au XIXe siècle avec la presse de masse. Les premières annonces sont des "réclames" : de simples textes informatifs sur des produits. Jules Chéret invente l'affiche lithographique en couleurs dans les années 1860-1880, donnant naissance à la publicité visuelle et à une forme d'art populaire. Toulouse-Lautrec, Alphonse Mucha et Pierre Bonnard seront parmi les grands affichistes de cette époque, brouillant la frontière entre publicité et beaux-arts.</p>
<p class="resume-text">Le XXe siècle marque la professionnalisation de la publicité. David Ogilvy, Bill Bernbach, Leo Burnett fondent les grandes agences qui vont codifier les pratiques. Ogilvy développe le concept d'<strong>image de marque</strong> : ce n'est pas le produit qui compte mais la personnalité qu'on lui attribue. Sa campagne pour Rolls-Royce (1958) — "À 60 miles/heure, le bruit le plus fort dans cette nouvelle Rolls-Royce vient de la pendule électrique" — est devenue un classique du copywriting.</p>
<div class="highlight-box">
<strong>Mad Men et la révolution créative</strong> : Les années 1960 marquent la "révolution créative" dans la publicité américaine. Bill Bernbach (DDB) rompt avec la publicité informative pour créer des messages émotionnels et souvent humoristiques. Sa campagne "Think Small" pour la Volkswagen Beetle (1959-1960) est régulièrement classée comme la meilleure campagne publicitaire du XXe siècle. Elle a réussi à transformer un produit associé au nazisme en symbole de contre-culture.
</div>

<h3>La publicité intégrée et l'ère des communications globales</h3>
<p class="resume-text">Les années 1980-1990 voient l'émergence des <strong>communications intégrées</strong> (IMC — Integrated Marketing Communications) : la cohérence du message publicitaire à travers tous les points de contact (TV, print, affichage, événements, relations publiques). La marque doit parler d'une seule voix sur tous les médias. Cette approche accompagne la globalisation des marques : Coca-Cola, Nike, McDonald's développent des campagnes mondiales adaptées localement.</p>
<p class="resume-text">La campagne Nike "Just Do It" (1988) illustre ce tournant. Le slogan, créé par Dan Wieden d'après les dernières paroles d'un condamné à mort, dépasse le sport pour devenir un manifeste d'empowerment personnel applicable à n'importe quel contexte. Il n'est plus question de vanter les qualités d'une chaussure mais de promouvoir un mode de vie, une philosophie. Cette stratégie de <strong>marque lifestyle</strong> est aujourd'hui le standard de toutes les grandes marques mondiales.</p>
<div class="highlight-box">
<strong>Le budget publicitaire mondial</strong> : En 2024, les dépenses publicitaires mondiales ont dépassé 1 000 milliards de dollars pour la première fois. La publicité numérique représente désormais 70 % du total, dominée par Google (publicité à la performance) et les réseaux sociaux (publicité sociale). La TV linéaire, longtemps premier média publicitaire, est reléguée à moins de 20 % des dépenses.
</div>"""

enrichments["publicite/comportement-consommateur"] = """
<h3>Psychologie de la décision et biais cognitifs</h3>
<p class="resume-text">Daniel Kahneman, Prix Nobel d'économie 2002, distingue deux systèmes de pensée dans <em>Thinking, Fast and Slow</em> (2011). Le <strong>Système 1</strong> est automatique, rapide, émotionnel et peu coûteux en énergie cognitive. Le <strong>Système 2</strong> est lent, délibératif, logique et coûteux. La grande majorité de nos décisions d'achat relèvent du Système 1 : elles sont déclenchées par des stimuli émotionnels (packaging, prix de référence, recommandation sociale) et rationalisées a posteriori.</p>
<p class="resume-text">Les <strong>biais cognitifs</strong> documentés par Kahneman et Tversky sont systématiquement exploités par le marketing. Le biais d'ancrage : un prix barré à 199€ réduit à 99€ semble une bonne affaire même si le prix "normal" était artificiellement gonflé. Le biais de récence : nous surpondérons les informations récentes (avis clients) par rapport aux données statistiques. L'aversion aux pertes : "Ne ratez pas cette offre" mobilise plus l'action que "Profitez de cette offre" — les pertes potentielles comptent deux fois plus que les gains équivalents.</p>
<div class="highlight-box">
<strong>L'économie comportementale en politique publique</strong> : Richard Thaler et Cass Sunstein ont développé la théorie du "nudge" (coup de pouce) : modifier l'architecture des choix pour orienter les comportements sans interdire ni forcer. L'inscription automatique aux plans de retraite d'entreprise (avec option de désinscription) a fait passer le taux de participation de 49 % à 86 % aux États-Unis. Les gouvernements du monde entier utilisent désormais ces techniques pour promouvoir des comportements sains ou éco-responsables.
</div>

<h3>Le consommateur post-moderne et la co-création de valeur</h3>
<p class="resume-text">La figure du consommateur a radicalement évolué depuis les années 1990. Le consommateur post-moderne n'est plus un récepteur passif de messages marketing : il est critique, méfiant envers la publicité traditionnelle, et cherche à construire son identité à travers ses choix de consommation. Il s'informe sur les réseaux sociaux, lit les avis d'autres consommateurs, et accorde plus de confiance aux recommandations de pairs qu'aux publicités.</p>
<p class="resume-text">La <strong>co-création de valeur</strong> répond à cette évolution. Des marques comme Lego (Lego Ideas), Nike (Nike iD/By You) ou Starbucks (My Starbucks Idea) impliquent les consommateurs dans la conception des produits. Cette approche satisfait le besoin d'expression identitaire du consommateur post-moderne et génère une fidélité et un bouche-à-oreille que la publicité traditionnelle ne peut créer. Elle représente aussi un moyen d'obtenir gratuitement des insights consommateurs que les études de marché coûteraient des millions à produire.</p>
<div class="highlight-box">
<strong>Les "lovemark" de Kevin Roberts</strong> : Kevin Roberts, CEO de Saatchi & Saatchi, propose le concept de "lovemark" : des marques qui inspirent à la fois un respect professionnel et un amour émotionnel fort. Apple, Harley-Davidson, Nutella sont des exemples de lovemarks. Leur caractéristique : les consommateurs les défendent contre les critiques, pardonnent leurs erreurs et payent une prime de prix sans questionner leur décision — ils ont transformé leur relation commerciale en relation affective.
</div>"""

enrichments["publicite/marketing-digital"] = """
<h3>Le référencement et le marketing à la performance</h3>
<p class="resume-text">Le <strong>SEO</strong> (Search Engine Optimization) est la pratique qui consiste à optimiser un contenu pour qu'il apparaisse en haut des résultats de recherche organiques (non payants). Google ayant plus de 90 % de parts de marché dans les moteurs de recherche en Europe, optimiser pour Google est devenu un enjeu commercial majeur. Les algorithmes de Google (PageRank, Panda, Penguin, BERT, Helpful Content Update) évaluent la qualité du contenu, la structure technique du site et l'autorité (nombre et qualité des liens entrants).</p>
<p class="resume-text">Le <strong>SEA</strong> (Search Engine Advertising) complète le SEO : il s'agit d'enchérir sur des mots-clés pour apparaître dans les résultats sponsorisés. Google Ads fonctionne sur un système d'enchères en temps réel (Real-Time Bidding) où le prix au clic dépend de la concurrence sur chaque mot-clé. Des mots-clés comme "assurance voiture" ou "avocat divorce" peuvent coûter plusieurs dizaines d'euros par clic — les marchés publicitaires les plus compétitifs au monde.</p>
<div class="highlight-box">
<strong>Marketing d'influence en chiffres</strong> : En 2024, le marché mondial du marketing d'influence est estimé à 24 milliards de dollars. Les nano-influenceurs (1000-10000 abonnés) génèrent des taux d'engagement 8 fois supérieurs aux méga-influenceurs (>1 million d'abonnés). Leur authenticité perçue et leur relation de proximité avec leur communauté en font des vecteurs publicitaires très efficaces pour les marques ciblant des niches.
</div>

<h3>Automatisation marketing et CRM</h3>
<p class="resume-text">Le <strong>marketing automation</strong> désigne l'utilisation de logiciels pour automatiser des séquences de communication marketing personnalisées. Un internaute qui abandonne son panier e-commerce reçoit automatiquement un email de relance dans l'heure, puis un second 24h après avec une promotion. Un nouveau client reçoit une séquence d'onboarding programmée sur 30 jours. Ces automatisations permettent d'atteindre le bon message, au bon moment, pour la bonne personne — à grande échelle.</p>
<p class="resume-text">Les outils de <strong>CRM</strong> (Customer Relationship Management) — Salesforce, HubSpot, Zoho — centralisent toutes les interactions avec les clients et prospects. Couplés à des outils d'analyse comportementale (quelles pages ont été consultées, quels emails ont été ouverts, quelles fonctionnalités ont été utilisées), ils permettent de scorer la maturité de chaque prospect et de personnaliser les approches commerciales. L'IA permet désormais de prédire quels clients sont à risque de churn (désabonnement) avec une précision de 80-90 %.</p>
<div class="highlight-box">
<strong>RGPD et marketing digital</strong> : Depuis le RGPD (2018) et la directive ePrivacy (cookies), le marketing digital doit reposer sur le consentement explicite des utilisateurs. Le "consentement" transformé en dark pattern (cases pré-cochées, boutons "refuser" cachés) a valu des amendes record : Google a été condamné à 150 millions d'euros par la CNIL en 2022 pour avoir rendu le refus des cookies plus difficile que l'acceptation.
</div>"""

enrichments["publicite/branding-identite"] = """
<h3>L'architecture de marque et les systèmes de marques</h3>
<p class="resume-text">Les grandes entreprises gèrent rarement une seule marque mais un <strong>portfolio de marques</strong> dont l'organisation définit leur stratégie. L'architecture de marque répond à une question fondamentale : comment les différentes marques d'un groupe doivent-elles se positionner les unes par rapport aux autres ? Procter & Gamble gère des centaines de marques indépendantes (Ariel, Pampers, Gillette) sans mettre en avant le nom du groupe. À l'inverse, Virgin décline sa marque mère dans l'aérien, le train, la banque et la musique.</p>
<p class="resume-text">David Aaker distingue trois architectures principales : la <strong>maison de marques</strong> (house of brands) — chaque marque est indépendante (P&G, Unilever) ; la <strong>marque maison</strong> (branded house) — une seule marque umbrella déclinée (Virgin, FedEx) ; et les architectures hybrides qui combinent les deux. Le choix dépend des cibles (une marque peut avoir des valeurs contradictoires pour deux segments), des marchés (réglementations locales, risque de réputation) et de l'histoire de l'entreprise.</p>
<div class="highlight-box">
<strong>Le rachat de marques prestige</strong> : LVMH (Louis Vuitton Moët Hennessy) gère 75 maisons de luxe en préservant jalousement leur indépendance de marque : Louis Vuitton, Dior, Givenchy, Bulgari, Tiffany coexistent sans être explicitement associées à LVMH dans leurs communications. Ce modèle de "discrétion du holding" préserve l'imaginaire exclusif de chaque maison tout en mutualisant les ressources et la distribution.
</div>

<h3>Identité visuelle et design de marque</h3>
<p class="resume-text">L'identité visuelle d'une marque est bien plus qu'un logo : c'est un système complet qui inclut la palette de couleurs, la typographie, les formes, les icônes, les illustrations, les animations, et les règles de leur utilisation. Ces éléments doivent former un tout cohérent qui soit immédiatement reconnaissable dans n'importe quel format — d'un favicon de 16×16 pixels à un panneau d'affichage de 10 mètres.</p>
<p class="resume-text">Le <strong>rebranding</strong> est l'un des exercices les plus risqués en marketing. Gap a dépensé des millions en 2010 pour changer son logo, puis est revenu à l'ancien sous la pression des clients en une semaine. Tropicana a relooké son packaging en 2009 et vu ses ventes chuter de 20 % en 2 mois — les clients ne reconnaissaient plus le produit dans les rayons. À l'inverse, le rebranding d'Apple sous Steve Jobs (1998) — simplification du logo, palette de couleurs, design cohérent — est un exemple de rebranding réussi qui a précédé et accompagné le redressement spectaculaire de l'entreprise.</p>
<div class="highlight-box">
<strong>La psychologie des couleurs en branding</strong> : Le rouge évoque l'urgence, l'appétit, la passion (Coca-Cola, McDonald's, YouTube). Le bleu évoque la confiance et le professionnalisme (Facebook, LinkedIn, PayPal). Le vert évoque la nature et la santé (Whole Foods, Starbucks, BP). Ces associations sont partiellement universelles et partiellement culturelles : le blanc est la couleur du deuil dans plusieurs cultures asiatiques, là où en Occident c'est le noir.
</div>"""

enrichments["publicite/ethique-publicitaire"] = """
<h3>Greenwashing et publicité trompeuse</h3>
<p class="resume-text">Le <strong>greenwashing</strong> désigne les pratiques de communication qui attribuent à un produit, une marque ou une entreprise des vertus environnementales qu'ils ne possèdent pas ou qu'ils ne possèdent que partiellement. Les termes "éco-responsable", "vert", "naturel", "durable" sont utilisés sans définition précise ni preuve vérifiable. Une marque de mode peut mettre en avant une collection "sustainable" représentant 2 % de sa production tout en maintenant un modèle fast fashion massif.</p>
<p class="resume-text">La lutte contre le greenwashing s'est intensifiée depuis 2020. La Commission européenne a proposé en 2022 une directive sur les "allégations vertes" (Green Claims Directive) qui interdirait les allégations environnementales non étayées par des preuves scientifiques vérifiables. En France, la loi Évin (alcool et tabac), la loi AGEC (plastique) et les recommandations de l'ARPP (Autorité de Régulation Professionnelle de la Publicité) ont créé un cadre réglementaire croissant. KIA, H&M, Volkswagen et de nombreux autres groupes ont été condamnés ou mis en demeure pour publicité environnementale trompeuse.</p>
<div class="highlight-box">
<strong>Le Dieselgate : la publicité trompeuse à grande échelle</strong> : Volkswagen a commercialisé ses véhicules diesel en mettant en avant leurs faibles émissions polluantes ("Think Blue" campaign). Il s'est avéré en 2015 que les moteurs étaient équipés d'un logiciel qui détectait les tests d'émissions et activait alors des dispositifs de dépollution inactifs en conditions normales. L'affaire a coûté à VW plus de 30 milliards de dollars d'amendes et de réparations — la plus grande fraude de l'histoire industrielle.
</div>

<h3>Publicité ciblée et éthique des données personnelles</h3>
<p class="resume-text">La publicité programmatique et ciblée repose sur la collecte massive de données personnelles. Cambridge Analytica a utilisé les données de 87 millions d'utilisateurs Facebook (obtenues sans consentement) pour créer des profils psychographiques et cibler des messages politiques ultra-personnalisés lors de la campagne Trump de 2016 et du référendum Brexit. L'affaire a révélé au grand public le degré de profilage permis par les données numériques.</p>
<p class="resume-text">Des formes de ciblage publicitaire posent des questions éthiques spécifiques : cibler des personnes en état de vulnérabilité (dépression, addiction, deuil) avec des messages exploitant cette vulnérabilité ; cibler des enfants avec des publicités pour des produits alimentaires ultra-transformés ; utiliser le ciblage pour faire de la <strong>discrimination</strong> — montrer des annonces d'emploi différemment selon le genre, ou des offres de crédit différemment selon l'origine ethnique supposée. Des études ont documenté ces pratiques sur Facebook et d'autres plateformes.</p>
<div class="highlight-box">
<strong>RGPD et publicité</strong> : Le RGPD a fondamentalement changé les règles de la publicité ciblée en Europe. La collecte de données à des fins publicitaires nécessite un consentement libre, spécifique, éclairé et univoque. Les sanctions pour non-respect sont sévères : Meta a reçu une amende de 1,2 milliard d'euros de la CNIL irlandaise en 2023 pour transfert illégal de données personnelles européennes vers les États-Unis.
</div>"""

enrichments["relations-publiques/fondements-rp"] = """
<h3>Les parties prenantes et la cartographie des publics</h3>
<p class="resume-text">La théorie des parties prenantes (stakeholder theory), développée par Edward Freeman en 1984, est fondamentale pour comprendre les RP. Une organisation n'existe pas dans le vide : elle est entourée de multiples groupes qui ont un intérêt (stake) dans ses activités — et dont elle dépend pour fonctionner. Actionnaires, employés, clients, fournisseurs, riverains, médias, régulateurs, ONG, élus locaux : chacun a des attentes légitimes, une influence variable sur l'organisation, et mérite une communication adaptée.</p>
<p class="resume-text">La <strong>cartographie des parties prenantes</strong> est l'outil fondamental des RP. Elle classe les acteurs selon deux axes : leur influence (pouvoir d'agir sur l'organisation) et leur intérêt (degré d'implication dans ses activités). Cette matrice permet de prioriser les relations : les acteurs à forte influence et fort intérêt méritent un engagement intense et permanent ; les acteurs à faible influence et faible intérêt peuvent être informés de manière ponctuelle.</p>
<div class="highlight-box">
<strong>Cas Danone et les actionnaires activistes</strong> : En 2021, Danone a connu une crise de gouvernance exemplaire. Des actionnaires institutionnels ont forcé le départ du PDG Emmanuel Faber, qui avait adopté le modèle "entreprise à mission" engageant Danone sur des objectifs sociaux et environnementaux. La tension entre vision à long terme (parties prenantes larges) et attentes de rentabilité à court terme (actionnaires) illustre les conflits que les RP doivent naviguer.
</div>

<h3>La communication corporate et la réputation d'entreprise</h3>
<p class="resume-text">La réputation d'entreprise est un actif immatériel qui peut valoir davantage que les actifs tangibles. L'Edelman Trust Barometer, publication annuelle de référence, mesure la confiance du public envers les institutions (gouvernements, médias, entreprises, ONG) dans 28 pays. En 2024, les entreprises restent les institutions les plus "compétentes" aux yeux du public, mais leur légitimité à "faire ce qui est juste" reste contestée.</p>
<p class="resume-text">La <strong>RSE</strong> (Responsabilité Sociale des Entreprises) est devenue un terrain central des RP corporate. Rapport RSE, bilan carbone, politique diversité-inclusion, mécénat culturel : les entreprises communiquent de plus en plus sur leurs actions sociétales pour répondre aux attentes d'un public et de collaborateurs soucieux de l'impact de leurs organisations. La loi PACTE (2019) a introduit en France la notion d'entreprise à mission, permettant d'inscrire des objectifs sociaux ou environnementaux dans les statuts.</p>
<div class="highlight-box">
<strong>Le Capital de réputation</strong> : Une étude de McKinsey (2020) estime que 70 % de la capitalisation boursière des entreprises du S&P 500 est constituée d'actifs immatériels (marque, réputation, brevets, données). La réputation est donc directement corrélée à la valeur boursière. Une crise de réputation mal gérée peut détruire des milliards en quelques jours — comme l'a illustré la chute de 96 % de l'action Theranos après les révélations du Wall Street Journal.
</div>"""

enrichments["relations-publiques/communication-crise"] = """
<h3>Typologies de crises et stratégies de réponse</h3>
<p class="resume-text">Timothy Coombs, professeur à l'Université de Cornell, a développé la <strong>SCCT</strong> (Situational Crisis Communication Theory) : la stratégie de communication de crise doit être adaptée au type de crise et à la responsabilité de l'organisation. Il distingue trois clusters : les crises "victime" où l'organisation subit (catastrophes naturelles, sabotage) — la stratégie adaptée est de se présenter comme victime ; les crises "accidentelles" où la responsabilité est limitée (défaillance technique involontaire) — la stratégie est d'exprimer compassion et corriger ; les crises "délibérées" où la responsabilité est directe (fraude, tromperie délibérée) — la stratégie est d'accepter la responsabilité et de prendre des mesures drastiques.</p>
<p class="resume-text">Le modèle des <strong>3R</strong> (Remords, Réparation, Réforme) est une autre grille d'analyse : une crise est bien gérée si l'organisation exprime des remords sincères (pas seulement "nous regrettons que vous ayez été dérangés"), propose une réparation concrète pour les victimes, et démontre une réforme structurelle pour que la crise ne se reproduise pas. Sans les trois éléments, la récupération réputationnelle reste incomplète.</p>
<div class="highlight-box">
<strong>Johnson & Johnson — le cas de référence</strong> : En 1982, sept personnes meurent après avoir ingéré du Tylenol empoisonné à Chicago. J&J retire immédiatement 31 millions de flacons du marché à 100 millions de dollars de coût, coopère avec les autorités et communique en total transparence. En moins d'un an, Tylenol regagne ses parts de marché. Ce cas est enseigné dans toutes les écoles de commerce comme exemple de gestion de crise exemplaire — même si les coûts à court terme ont été massifs.
</div>

<h3>Les crises en temps réel sur les réseaux sociaux</h3>
<p class="resume-text">Les réseaux sociaux ont radicalement changé la dynamique des crises. Avant Twitter (2006), une organisation avait des heures pour préparer sa réponse à un incident. Aujourd'hui, une vidéo compromettante peut devenir virale en 15 minutes et atteindre des millions de personnes en quelques heures — avant même que la direction de l'entreprise soit informée de l'incident. Les crises se déroulent désormais en temps réel, sous les yeux de tous, avec des millions de commentateurs qui façonnent le récit.</p>
<p class="resume-text">La compagnie aérienne United Airlines a subi en 2017 une crise emblématique. Une vidéo montrant un passager traîné hors d'un avion bondé a été vue 1,8 milliard de fois. La première réaction du PDG Oscar Munoz — défendre l'action de la compagnie et qualifier le passager d'"agaçant" — a aggravé la crise. L'action United a perdu 1,4 milliard de dollars de valeur boursière en deux jours. Munoz a dû s'excuser publiquement et changer de politique. L'affaire illustre comment une communication de crise mal calibrée peut transformer un incident manageable en catastrophe réputationnelle.</p>
<div class="highlight-box">
<strong>Règle d'or des 2 heures</strong> : Les experts en gestion de crise s'accordent sur le fait que les deux premières heures sont déterminantes pour la réputation. Une réaction rapide, même imparfaite et incomplète, signale la bonne foi de l'organisation. Le silence, lui, est interprété comme de la dissimulation. En 2024, les outils de "dark social listening" permettent aux grandes entreprises de détecter les signaux faibles sur WhatsApp et Discord avant qu'une crise n'éclate sur les réseaux publics.
</div>"""

enrichments["relations-publiques/relations-presse"] = """
<h3>Les relations presse à l'ère numérique</h3>
<p class="resume-text">Les relations presse ont été fondamentalement transformées par la révolution numérique. Le communiqué de presse traditionnel — envoyé par fax ou courrier, puis par email à des listes de médias — reste un outil, mais son efficacité s'est réduite face à la multiplication des sources d'information. Les journalistes reçoivent des centaines de communiqués par semaine : seuls ceux qui apportent une réelle valeur journalistique (exclusivité, angle original, données inédites) retiennent leur attention.</p>
<p class="resume-text">Le <strong>newsjacking</strong> — s'insérer dans une actualité chaude pour faire parler de sa marque ou organisation — est une technique contemporaine de relations presse. Oreo a tweeté "You can still dunk in the dark" lors de la panne de courant au Super Bowl 2013 en 15 minutes : la réactivité en communication de marque a une valeur médiatique propre. Les marques et organisations qui maîtrisent cette réactivité obtiennent une couverture médiatique impossible à acheter.</p>
<div class="highlight-box">
<strong>Les attachés de presse à l'ère des réseaux sociaux</strong> : Les journalistes passent désormais plus de temps sur Twitter/X, LinkedIn et Instagram qu'à lire les communiqués dans leur boîte mail. Les relations presse efficaces passent par l'engagement direct avec les journalistes sur les réseaux sociaux : commenter leurs articles, partager leurs publications, leur proposer des informations exclusives via DM. La relation personnelle reste au cœur du métier, mais elle se construit désormais aussi en ligne.
</div>

<h3>Médias owned, earned et paid : la stratégie POEM</h3>
<p class="resume-text">Le modèle <strong>POEM</strong> (Paid, Owned, Earned Media) structure la réflexion stratégique en relations presse et communication. Les médias payants (Paid) sont les espaces publicitaires achetés — contrôle total du message, mais crédibilité limitée car le public sait que c'est de la publicité. Les médias propriétaires (Owned) sont les canaux détenus par l'organisation : site web, blog, newsletter, réseaux sociaux officiels — contrôle total, crédibilité modérée. Les médias gagnés (Earned) sont les mentions dans les médias indépendants, les partages par les utilisateurs, les avis clients — pas de contrôle direct, mais crédibilité maximale.</p>
<p class="resume-text">L'objectif stratégique des relations presse est de maximiser les médias earned en entretenant des relations de qualité avec les journalistes, influenceurs et autres prescripteurs. Une couverture dans Le Monde, une mention par un journaliste influent, ou un article viral partagé par des utilisateurs a infiniment plus de valeur que la même superficie achetée en publicité — parce que le public lui accorde une crédibilité incomparablement supérieure. C'est pourquoi les RP professionnelles se concentrent sur la qualité du contenu et des relations plutôt que sur la quantité de communiqués envoyés.</p>
<div class="highlight-box">
<strong>Mesurer les relations presse</strong> : L'AVE (Advertising Value Equivalent) — mesurer la couverture presse en calculant ce que coûterait l'équivalent en publicité — est une métrique contestée par les professionnels car elle ignore la différence de crédibilité entre earned et paid media. Les métriques modernes incluent : taux de tonalité positive/négative, audience touchée, share of voice (part de voix vs concurrents), et impact sur la réputation et les intentions d'achat mesurés par sondage.
</div>"""

enrichments["relations-publiques/communication-interne"] = """
<h3>Les fonctions de la communication interne</h3>
<p class="resume-text">La communication interne remplit plusieurs fonctions simultanées dans une organisation. La fonction <strong>informationnelle</strong> : tenir les collaborateurs informés des décisions stratégiques, des résultats, des changements organisationnels. La fonction <strong>motivationnelle</strong> : donner du sens au travail de chacun en le reliant aux objectifs collectifs. La fonction <strong>identitaire</strong> : construire et entretenir une culture d'entreprise partagée, un sentiment d'appartenance. La fonction <strong>opérationnelle</strong> : faciliter la coordination entre équipes et la circulation de l'information nécessaire au travail quotidien.</p>
<p class="resume-text">Ces fonctions peuvent entrer en tension. Informer rapidement et honnêtement des difficultés (licenciements prévus, baisse des résultats) heurte parfois les objectifs motivationnels à court terme. Les études montrent cependant que la transparence génère davantage de confiance et d'engagement à moyen terme que les communications lissées qui masquent les difficultés. Les collaborateurs "lisent entre les lignes" des communications officielles et sont très sensibles à l'écart entre le discours et la réalité vécue.</p>
<div class="highlight-box">
<strong>L'engagement des collaborateurs</strong> : Selon Gallup, seulement 23 % des collaborateurs dans le monde sont activement engagés dans leur travail (2023). Le coût économique du désengagement est estimé à 8 500 milliards de dollars par an en perte de productivité mondiale. La communication interne de qualité est l'un des leviers les plus efficaces pour améliorer cet engagement — mais elle doit être accompagnée d'actions concrètes cohérentes avec le discours.
</div>

<h3>La communication en période de changement</h3>
<p class="resume-text">La conduite du changement (change management) est l'un des défis majeurs de la communication interne. John Kotter (Harvard Business School) propose un modèle en 8 étapes pour réussir les transformations organisationnelles. Les deux premières étapes — créer un sentiment d'urgence et constituer une coalition de leaders — sont cruciales et souvent bâclées. Sans compréhension des raisons du changement et sans exemplarité des dirigeants, toute communication de changement reste lettre morte.</p>
<p class="resume-text">La <strong>courbe du deuil</strong> de Kübler-Ross s'applique aux changements organisationnels : les collaborateurs passent par des phases prévisibles (déni, résistance, dépression, résignation, acceptation) face à toute transformation significative. La communication interne adaptée à chaque phase — donner de l'information factuelle dans la phase de déni, écouter les résistances dans la phase de résistance, valoriser les premières réussites dans la phase de résignation — accélère le passage à l'acceptation et à l'engagement positif.</p>
<div class="highlight-box">
<strong>Le digital workplace post-Covid</strong> : La généralisation du télétravail a profondément transformé la communication interne. L'intranet traditionnel a cédé la place aux plateformes collaboratives (Teams, Slack, Notion). La communication informelle — qui représentait avant le Covid une grande partie de la communication organisationnelle — s'est appauvrie avec la distance. Les entreprises les plus avancées créent des rituels de communication délibérés pour recréer cette richesse : cafés virtuels, réunions "sans agenda", espaces de discussion non-professionnelle.
</div>"""

enrichments["relations-publiques/communication-politique"] = """
<h3>La communication électorale : du meeting au micro-ciblage</h3>
<p class="resume-text">La communication électorale a radicalement évolué depuis les débats télévisés des années 1960 (Nixon vs Kennedy, 1960 : le premier débat télévisé où l'apparence physique a joué un rôle décisif) jusqu'au micro-ciblage algorithmique des années 2010. Joe Napolitan est considéré comme le père de la campagne politique professionnelle moderne : il conseille Hubert Humphrey en 1968 et introduit les sondages, le marketing direct et la stratégie médiatique comme outils centraux de la politique.</p>
<p class="resume-text">Le <strong>micro-ciblage</strong> (microtargeting) consiste à segmenter l'électorat en groupes très fins et à envoyer des messages différenciés à chaque segment. Obama a pionnerisé cette approche en 2008 et 2012 grâce à l'analyse massive de données électorales. La campagne Trump en 2016 et Cambridge Analytica ont poussé ce modèle à ses limites en utilisant les données psychographiques des réseaux sociaux pour cibler des messages ultra-personnalisés aux électeurs indécis dans des États clés.</p>
<div class="highlight-box">
<strong>La campagne Obama 2008 et le data politics</strong> : La campagne d'Obama a levé 750 millions de dollars, dont la grande majorité via des micro-dons en ligne. Elle a mobilisé 13 millions d'e-mails, formé 8 000 organisateurs de terrain et créé my.barackobama.com — un réseau social dédié qui permettait aux militants de s'organiser localement. Cette campagne a établi le template de la communication politique numérique utilisé depuis par toutes les campagnes sérieuses dans le monde.
</div>

<h3>Le spin doctoring et la communication gouvernementale</h3>
<p class="resume-text">Le terme <strong>"spin doctor"</strong> — littéralement "docteur en mise en valeur" — désigne les conseillers en communication politique dont le rôle est de contrôler le récit médiatique. Alastair Campbell, directeur de la communication de Tony Blair de 1994 à 2003, est l'archétype du spin doctor britannique. Il organisait quotidiennement les messages politiques du gouvernement, gérait les relations avec les journalistes politiques et intervenait directement dans la couverture médiatique.</p>
<p class="resume-text">La communication gouvernementale soulève des questions de démocratie fondamentales. L'accès privilégié des proches du pouvoir aux journalistes (briefings off-the-record, exclusivités accordées aux médias "amis") crée une relation de dépendance mutuelle qui peut compromettre l'indépendance de la presse. Le phénomène du <strong>"revolving door"</strong> — des conseillers en communication politique qui passent à la communication d'entreprise et réciproquement — brouille les frontières entre sphères publique, politique et marchande.</p>
<div class="highlight-box">
<strong>Communicants politiques et diplomatie publique</strong> : La diplomatie publique — communication d'un État vers les opinions publiques étrangères — est une forme institutionnalisée de RP politiques. La BBC World Service, Radio France International, Voice of America, Al-Jazeera ou CGTN (Chine) sont des instruments de diplomatie publique soft power. L'efficacité de ces médias dépend de leur crédibilité journalistique, qui est directement liée à leur degré d'indépendance vis-à-vis de l'État qui les finance.
</div>"""

count = 0
for key, html in enrichments.items():
    hub, slug = key.split('/', 1)
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

# Check lengths
short = [(k, len(v['content'])) for k, v in data['pages'].items() if v.get('type') in ('course', 'lesson')]
short.sort(key=lambda x: x[1])
print(f"COMM STATE: {sum(1 for _, l in short if l >= 15000)}/{len(short)} >= 15k, {sum(1 for _, l in short if l >= 14000)}/{len(short)} >= 14k")
for k, l in short:
    if l < 14000:
        print(f"  SHORT: {l} {k}")
