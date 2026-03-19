#!/usr/bin/env python3
"""Correction : remplacement complet du contenu .course-content pour spectacle."""
import json, re, sys, os

sys.stdout.reconfigure(encoding='utf-8')
BASE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content'

# Même contenu que le script précédent
ENRICHMENTS = {

"theatre/tragedie-grecque": """<h3>Aux origines : le dithyrambe et Dionysos</h3>
<p>La tragédie grecque naît au Ve siècle avant J.-C. à Athènes, lors des <strong>Grandes Dionysies</strong>, fêtes religieuses en l'honneur du dieu Dionysos. Selon la tradition, Thespis est le premier à séparer un acteur du chœur pour lui faire jouer un rôle (vers 534 av. J.-C.) — geste fondateur qui définit l'art dramatique occidental. Les représentations se tenaient dans le théâtre de Dionysos sur le versant sud de l'Acropole, devant des dizaines de milliers de spectateurs.</p>
<p>Le <strong>dithyrambe</strong>, hymne choral en l'honneur de Dionysos, est la forme primitive dont émerge la tragédie. Le chœur, formé de quinze choreutes dirigés par le coryphée, chante, danse et commente l'action. Cette dimension chorale distingue fondamentalement la tragédie grecque du théâtre ultérieur et explique son lien indissoluble avec la musique et la danse.</p>
<div class="highlight-box"><p>Les représentations des Grandes Dionysies duraient quatre jours : trois journées de trilogies tragiques, une journée de comédies. Chaque auteur proposait une trilogie suivie d'un drame satyrique comique. La trilogie d'Eschyle sur Oreste — l'<em>Orestie</em> — est la seule trilogie complète conservée.</p></div>
<h3>Les trois grands tragiques</h3>
<p><strong>Eschyle</strong> (526-456 av. J.-C.) est le fondateur du genre. Il introduit un second acteur (permettant le véritable dialogue), réduit l'importance du chœur et développe des thèmes grandioses sur la justice divine, la souveraineté et la transgression. <em>Les Perses</em>, <em>Prométhée enchaîné</em> et l'<em>Orestie</em> constituent ses chefs-d'œuvre conservés.</p>
<p><strong>Sophocle</strong> (496-406 av. J.-C.) introduit un troisième acteur et approfondit la psychologie des personnages. Ses héros — Œdipe, Antigone, Électre — sont confrontés à des conflits moraux déchirants entre devoir humain et loi divine. La <strong>reconnaissance</strong> (<em>anagnorisis</em>) — le moment où le héros découvre une vérité qui le détruit — est au cœur de ses constructions dramatiques.</p>
<p><strong>Euripide</strong> (480-406 av. J.-C.) déplace la tragédie vers la psychologie et les passions humaines. Ses personnages féminins — Médée, Phèdre, Hécube — atteignent une complexité psychologique inégalée dans l'Antiquité. Sa remise en question des dieux et sa sympathie pour les marginaux (esclaves, femmes, barbares) lui valurent des critiques contemporaines mais une immense postérité.</p>
<div class="highlight-box"><p>Aristote, dans la <em>Poétique</em> (IVe siècle av. J.-C.), définit la tragédie comme « l'imitation d'une action noble, complète et d'une certaine étendue, dans un langage agréable, et qui, en suscitant pitié et terreur, opère la <strong>catharsis</strong> de ces émotions ». Cette définition a structuré toute la théorie dramatique occidentale jusqu'au XXe siècle.</p></div>
<h3>La catharsis et la fonction sociale de la tragédie</h3>
<p>Le concept aristotélicien de <strong>catharsis</strong> — purification des émotions que le spectateur ressent en voyant souffrir les personnages — définit la finalité thérapeutique et sociale de la tragédie. En assistant à la chute d'Œdipe ou à la folie de Médée, le spectateur éprouve pitié et terreur de façon sécurisée, purgeant ainsi ces émotions potentiellement déstabilisatrices.</p>
<p>La tragédie remplit aussi une fonction civique : elle met en scène les conflits entre loi humaine et loi divine (<em>Antigone</em>), entre vengeance et justice (<em>Orestie</em>), entre ambition et légitimité. Dans la démocratie athénienne naissante, ces pièces étaient des espaces de délibération collective sur les valeurs fondamentales de la cité.</p>
<p>L'héritage de la tragédie grecque traverse toute la culture occidentale : Shakespeare, Racine, Corneille, et jusqu'aux dramaturges du XXe siècle (Anouilh, Brecht, Beckett) ont dialogué avec ses formes et ses thèmes. Au XXIe siècle, des metteurs en scène comme Peter Stein, Antoine Vitez ou Ivo van Hove continuent de monter les tragédies grecques, révélant leur inépuisable contemporanéité.</p>""",

"theatre/mise-en-scene": """<h3>La naissance du metteur en scène moderne</h3>
<p>Le rôle du <strong>metteur en scène</strong> comme figure centrale du théâtre est une invention relativement récente. Au XVIIe et XVIIIe siècles, les acteurs-directeurs de troupe géraient les productions collectivement. C'est le duc de Saxe-Meiningen qui, dans les années 1870, impose le premier une conception unitaire du spectacle : décors historiquement précis, jeu d'ensemble homogène, mise en scène pensée globalement par une seule intelligence créatrice.</p>
<p>Konstantin Stanislavski (1863-1938), fondateur du Théâtre d'Art de Moscou, développe la première méthode de mise en scène systématique. Son système — basé sur la recherche de la vérité psychologique, la mémoire émotionnelle et les <em>actions physiques</em> — révolutionne la direction d'acteurs et reste la référence pédagogique fondamentale du théâtre occidental. Le Théâtre d'Art de Moscou crée des productions qui intègrent texte, jeu, décor et lumière dans une vision cohérente.</p>
<div class="highlight-box"><p>Adolphe Appia (1862-1928) et Edward Gordon Craig (1872-1966) théorisent simultanément une mise en scène symboliste qui abandonne le décor réaliste au profit d'espaces scéniques abstraits, de lumières expressives et d'une poétique purement théâtrale. Leurs écrits influencent profondément les scénographes et metteurs en scène du XXe siècle.</p></div>
<h3>Les grandes révolutions scéniques du XXe siècle</h3>
<p><strong>Bertolt Brecht</strong> (1898-1956) développe le <em>Verfremdungseffekt</em> (effet de distanciation) : briser l'illusion théâtrale pour que le spectateur réfléchisse plutôt que de s'identifier émotionnellement. Ses procédés — panneaux de texte, éclairage visible, jeu brechtien — créent un théâtre politique fondé sur la conscience critique. Le Berliner Ensemble qu'il dirige de 1949 à sa mort est une référence mondiale.</p>
<p><strong>Jerzy Grotowski</strong> (1933-1999) pousse l'expérience à son extrême dans le « théâtre pauvre » : éliminer tout ce qui n'est pas le rapport direct acteur-spectateur. Ses productions polonaises des années 1960, avec des acteurs soumis à un entraînement physique et vocal extrême, influencent Peter Brook, le Living Theatre et tout le théâtre physique contemporain.</p>
<p>En France, la génération de <strong>Vilar, Planchon, Chéreau</strong> invente un théâtre populaire et politique dans les années 1950-80. Jean Vilar crée le Festival d'Avignon (1947) et le TNP (Théâtre National Populaire), rendant le grand répertoire accessible hors de Paris. Patrice Chéreau réinterprète le répertoire classique avec une modernité radicale.</p>
<div class="highlight-box"><p>Peter Brook, dans <em>L'Espace vide</em> (1968), distingue quatre types de théâtre : mort, sacré, grossier et immédiat. Ce livre-manifeste reste l'une des réflexions les plus lucides sur les enjeux de la mise en scène contemporaine.</p></div>
<h3>La scénographie contemporaine : l'espace comme dramaturgie</h3>
<p>La <strong>scénographie contemporaine</strong> conçoit l'espace scénique comme un acteur à part entière. Des scénographes comme Richard Peduzzi, Josef Svoboda ou Yannis Kokkos ont développé des langages visuels autonomes qui construisent le sens autant que le texte.</p>
<p>La <strong>mise en scène postdramatique</strong>, théorisée par Hans-Thies Lehmann dans les années 1990, désigne des pratiques qui s'émancipent du texte dramatique : performances, happenings, théâtre de geste, théâtre danse. Des compagnies comme La Fura dels Baus, le Needcompany de Jan Lauwers ou la Socìetas Raffaello Sanzio de Romeo Castellucci créent des spectacles où image, corps et son valent autant que le discours verbal.</p>""",

"theatre/theatre-moderne": """<h3>L'expressionnisme et les avant-gardes européennes</h3>
<p>Le <strong>théâtre expressionniste</strong> allemand (1910-1925) réagit au naturalisme en stylisant à l'extrême : décors anguleux, éclairages dramatiques, personnages archétypaux, cris et silences. Georg Kaiser, Ernst Toller et Ernst Barlach expriment l'aliénation de l'individu dans la société industrielle. Cette esthétique influence directement le cinéma expressionniste et traverse le théâtre européen du XXe siècle.</p>
<p>Antonin Artaud, avec son <em>Théâtre de la Cruauté</em> (1938), rêve d'un théâtre total qui agresse physiquement et psychologiquement le spectateur pour le sortir de sa torpeur bourgeoise. Bien qu'Artaud n'ait réalisé que peu de ses projets, son influence théorique sur le théâtre expérimental du XXe siècle est immense.</p>
<div class="highlight-box"><p>Antonin Artaud, dans <em>Le Théâtre et son Double</em> (1938), écrit : « Je propose de revenir au théâtre à cette idée élémentaire magique, reprise par la psychanalyse moderne, qui consiste pour obtenir une guérison à faire prendre au malade l'attitude extérieure de l'état auquel on voudrait le ramener. » Cette vision d'un théâtre chamanique a marqué plusieurs générations.</p></div>
<h3>L'absurde et la crise du sens</h3>
<p>Le <strong>théâtre de l'absurde</strong> — terme forgé par Martin Esslin en 1961 pour désigner Ionesco, Beckett, Adamov et Genet — traduit l'angoisse existentielle de l'après-guerre dans des formes dramatiques radicalement nouvelles. Samuel Beckett (<em>En attendant Godot</em>, 1953 ; <em>Fin de partie</em>, 1957) pousse l'écriture à son degré zéro : deux clochards attendent un Godot qui ne vient pas, dans un espace vide et un temps indéfini.</p>
<p>Eugène Ionesco (<em>La Cantatrice chauve</em>, 1950 ; <em>Rhinocéros</em>, 1959) détruit le langage de l'intérieur : les personnages parlent par clichés vides, les objets prolifèrent, la logique s'effondre. Jean Genet (<em>Les Bonnes</em>, 1947 ; <em>Le Balcon</em>, 1956) explore le pouvoir, la violence et l'identité dans des cérémonies rituelles qui brouillent réalité et représentation.</p>
<div class="highlight-box"><p>La première d'<em>En attendant Godot</em> au Théâtre de Babylone à Paris le 5 janvier 1953 est considérée comme l'un des moments fondateurs du théâtre contemporain. Jean Anouilh écrit dans <em>Le Figaro</em> : « Les Pensées de Pascal joué par les Fratellini. »</p></div>
<h3>Le théâtre contemporain : pluralité des formes</h3>
<p>Le théâtre contemporain se caractérise par une pluralité de formes et d'intentions. Le <strong>théâtre documentaire</strong> (Milo Rau, Rimini Protokoll) utilise des témoignages réels et des non-professionnels pour questionner l'histoire et le politique. Le <strong>théâtre physique</strong> (DV8, Pina Bausch) place le corps en avant. Le <strong>théâtre numérique</strong> intègre vidéo, données et interaction.</p>
<p>En France, des metteurs en scène comme Joël Pommerat, Wajdi Mouawad, Ostermeier ou Angélica Liddell renouvellent sans cesse les rapports entre texte, corps et espace. La question de la place du spectateur — observateur, participant, complice — reste au cœur des explorations les plus vives du théâtre d'aujourd'hui.</p>""",

"theatre/commedia-dell-arte": """<h3>Les origines et les caractéristiques de la Commedia dell'arte</h3>
<p>La <strong>Commedia dell'arte</strong> naît en Italie dans le deuxième tiers du XVIe siècle, vers 1545, date de la formation de la première compagnie professionnelle connue. Le terme désigne littéralement « comédie du métier » — un théâtre joué par des acteurs professionnels, par opposition à la <em>commedia erudita</em> jouée par des amateurs cultivés. C'est la première forme de théâtre professionnel de l'histoire occidentale.</p>
<p>La technique fondamentale est l'<strong>improvisation sur canevas</strong> : les acteurs connaissent l'intrigue générale et leurs rôles (<em>zibaldoni</em> — carnets de lazzi, répliques et situations), mais inventent le dialogue sur le moment, en fonction du public et des circonstances. Cette liberté créatrice exige un entraînement technique intense : les acteurs de la commedia sont des virtuoses du geste, de la voix et de l'acrobatie.</p>
<div class="highlight-box"><p>Les <strong>lazzi</strong> sont des improvisations comiques codifiées — gags, jeux de scène, situations récurrentes — que les acteurs insèrent dans le canevas. Le lazzo du chat, le lazzo du vol de nourriture, le lazzo de la mouche : autant de routines hilarantes perfectionnées pendant des décennies et transmises dans les compagnies.</p></div>
<h3>Les types fixes et leurs caractères</h3>
<p>La Commedia dell'arte repose sur des <strong>types fixes</strong> (ou masques), chacun incarnant un caractère social reconnaissable. Les <em>Zanni</em> — valets rusés et maladroits — incluent <strong>Arlecchino</strong> (le bigarré, acrobatique et naïf), <strong>Brighella</strong> (le fourbe calculateur), <strong>Pulcinella</strong> (le bossu napolitain, ancêtre de Polichinelle et de Mr. Punch). Ces types populaires sont portés par des comédiens issus des classes modestes.</p>
<p>Les vieillards — <strong>Pantalone</strong> (le vieux marchand vénitien avare) et le <strong>Dottore</strong> (le pédant bolonais) — incarnent le pouvoir établi et sa ridicule vanité. Les <em>Innamorati</em> (amoureux) ne portent pas de masque et s'expriment dans un langage poétique raffiné, contrastant avec la grossièreté des valets.</p>
<h3>Influence et postérité mondiale</h3>
<p>La Commedia dell'arte a diffusé son influence dans toute l'Europe via les troupes itinérantes italiennes. En France, elle influence directement Molière (Scapin doit tout à Brighella, Harpagon à Pantalone), puis Marivaux et la tradition du vaudeville. En Angleterre, Pulcinella devient Punch, ancêtre du théâtre de marionnettes populaire.</p>
<p>Au XXe siècle, des pédagogues comme Lecoq et Copeau ont remis la Commedia au centre de la formation de l'acteur, valorisant son enseignement du corps, du masque et de l'improvisation. Le <em>mimo</em> de Dario Fo — Prix Nobel de Littérature 1997 — est directement héritier de la tradition de la commedia. Aujourd'hui, des compagnies internationales perpétuent un art qui reste d'une vitalité exceptionnelle.</p>""",

"theatre/classique-francais": """<h3>La doctrine classique et les règles du théâtre</h3>
<p>Le théâtre classique français du XVIIe siècle est codifié par une <strong>doctrine esthétique rigoureuse</strong> élaborée par les doctes et endorsée par l'Académie française fondée par Richelieu en 1635. Cette doctrine s'inspire de la <em>Poétique</em> d'Aristote et impose des règles strictes que Corneille, Molière et Racine respecteront diversement.</p>
<p>Les <strong>trois unités</strong> — unité de temps (l'action ne dépasse pas 24 heures), unité de lieu (un seul lieu), unité d'action (une intrigue principale) — visent à maintenir la vraisemblance et la concentration dramatique. La règle des <em>bienséances</em> interdit de représenter la violence et la mort sur scène. Ces contraintes génèrent des solutions dramatiques d'une grande ingéniosité.</p>
<div class="highlight-box"><p>La <em>querelle du Cid</em> (1637-1638), déclenchée par le succès de la tragi-comédie de Corneille, est le premier grand débat esthétique de l'histoire littéraire française. L'Académie française, à la demande de Richelieu, rend un jugement mitigé qui marque le début de l'institutionnalisation du goût littéraire en France.</p></div>
<h3>Corneille, Molière, Racine : trois visions du théâtre</h3>
<p><strong>Pierre Corneille</strong> (1606-1684) domine la première moitié du siècle. Son théâtre met en scène des héros confrontés à des dilemmes entre le devoir et la passion (<em>Le Cid</em>, 1637 ; <em>Horace</em>, 1641 ; <em>Cinna</em>, 1641). L'éthique cornélienne valorise la <em>gloire</em> et le dépassement de soi dans une tension constante entre grandeur morale et fragilité humaine.</p>
<p><strong>Molière</strong> (1622-1673) est à la fois auteur, directeur de troupe et acteur principal. Ses comédies — <em>Tartuffe</em>, <em>Dom Juan</em>, <em>Le Misanthrope</em>, <em>L'Avare</em> — conjuguent la farce populaire héritée de la commedia dell'arte, la comédie de caractère et une critique sociale mordante. Sa relation avec Louis XIV, qui le protège contre les dévots, illustre les tensions entre liberté artistique et pouvoir politique.</p>
<p><strong>Jean Racine</strong> (1639-1699) domine la seconde moitié du siècle. Sa tragédie — <em>Andromaque</em>, <em>Britannicus</em>, <em>Bérénice</em>, <em>Phèdre</em> — explore les passions destructrices avec une économie de moyens et une musicalité du vers alexandrin inégalées. Son psychologisme anticipe Freud : Phèdre est souvent analysée comme le premier grand portrait clinique de la culpabilité et du désir.</p>
<h3>L'héritage et la postérité</h3>
<p>Le théâtre classique français a exercé une influence considérable sur toute l'Europe du XVIIIe siècle. La réaction romantique (Hugo, <em>Préface de Cromwell</em>, 1827) s'est précisément définie contre les règles classiques, réaffirmant ainsi paradoxalement leur importance.</p>
<p>Aujourd'hui, les pièces de Molière sont les plus jouées dans le monde après Shakespeare. La Comédie-Française, fondée en 1680 par lettre de cachet de Louis XIV, perpétue la tradition classique tout en l'ouvrant aux metteurs en scène les plus contemporains.</p>""",

"opera/histoire-opera": """<h3>Naissance et premiers développements</h3>
<p>L'<strong>opéra</strong> naît à Florence vers 1600 dans les milieux humanistes des <em>Camerata fiorentina</em>, cercle d'intellectuels réunis autour du comte Bardi. Ces lettrés cherchent à ressusciter la tragédie grecque antique : une déclamation chantée qui respecte les inflexions naturelles de la parole. Jacopo Peri compose <em>L'Euridice</em> (1600), première œuvre lyrique complète conservée, sur un livret d'Ottavio Rinuccini.</p>
<p>Claudio <strong>Monteverdi</strong> (1567-1643) porte le nouvel art à sa maturité dès <em>L'Orfeo</em> (1607). Son génie est d'intégrer les affects — les émotions humaines — dans une dramaturgie musicale d'une richesse sans précédent. Avec <em>L'incoronazione di Poppea</em> (1643), il crée le premier opéra sur un sujet historique et profane.</p>
<div class="highlight-box"><p>Le premier opéra public ouvre à Venise en 1637 — le Teatro San Cassiano — marquant la transition d'un spectacle de cour réservé à l'élite vers un divertissement commercial ouvert à tout public payant. Cette ouverture commerciale engendre la demande de nouveautés et la professionnalisation des chanteurs.</p></div>
<h3>L'âge d'or baroque et le bel canto</h3>
<p>Le XVIIe et le début du XVIIIe siècle voient le triomphe de l'<em>opera seria</em> : des drames mythologiques ou historiques structurés autour de l'<em>aria da capo</em>. Le <strong>castrat</strong>, chanteur castré avant la puberté pour conserver une voix aiguë, domine cette période. Farinelli, Senesino et Caffarelli sont les superstars de leur temps.</p>
<p>Wolfgang Amadeus <strong>Mozart</strong> (1756-1791) révolutionne l'opéra en introduisant la psychologie individuelle dans des formes musicales raffinées. <em>Les Noces de Figaro</em> (1786), <em>Don Giovanni</em> (1787) et <em>La Flûte enchantée</em> (1791) allient l'exigence musicale la plus haute à une comédie sociale subversive. Ses opéras restent parmi les plus joués du répertoire mondial.</p>
<h3>Verdi, Wagner, Puccini : le grand opéra du XIXe siècle</h3>
<p><strong>Giuseppe Verdi</strong> (1813-1901) domine l'opéra romantique italien. De <em>Nabucco</em> (1842) à <em>Falstaff</em> (1893), son œuvre embrasse l'histoire, la politique et la psychologie des passions dans une musique d'une vitalité mélodique inégalée. Ses opéras deviennent le symbole du <em>Risorgimento</em> — le mouvement d'unification nationale italienne.</p>
<p><strong>Richard Wagner</strong> (1813-1883) conçoit l'opéra comme <em>Gesamtkunstwerk</em> (œuvre d'art totale) unifiant musique, poésie, geste et scénographie. Son <em>Anneau du Nibelung</em> (cycle de quatre opéras) et <em>Tristan et Isolde</em> (1865) révolutionnent l'harmonie musicale occidentale. Son théâtre de Bayreuth (1876), conçu pour ses seules œuvres, reste un lieu de pèlerinage unique dans le monde musical.</p>""",

"opera/comedie-musicale": """<h3>Les origines américaines : de l'opérette au musical</h3>
<p>La <strong>comédie musicale</strong> américaine naît au tournant du XXe siècle de la rencontre entre plusieurs traditions : l'<em>opérette</em> européenne, le <em>vaudeville</em> américain et la revue de music-hall. Le 22 décembre 1927 marque une date fondatrice : la première de <em>Show Boat</em> de Jerome Kern et Oscar Hammerstein II, premier musical à traiter sérieusement un sujet social (le racisme dans le Sud américain). Ce spectacle établit le principe d'une dramaturgie musicale cohérente où les chansons font avancer l'action.</p>
<p>L'<strong>âge d'or</strong> du musical de Broadway (1943-1965) est dominé par le partenariat Rodgers & Hammerstein (<em>Oklahoma!</em>, 1943 ; <em>South Pacific</em>, 1949 ; <em>The Sound of Music</em>, 1959). Leurs innovations sont fondamentales : intégration totale de la musique au drame, chorégraphie narrative, personnages psychologiquement développés. Le musical devient une forme artistique adulte.</p>
<div class="highlight-box"><p><em>West Side Story</em> (1957), avec une musique de Leonard Bernstein, des paroles de Stephen Sondheim et une chorégraphie de Jerome Robbins, est souvent considéré comme le plus grand chef-d'œuvre du musical américain. Sa transposition de <em>Roméo et Juliette</em> dans les gangs new-yorkais allie danse, musique et drame social avec une intensité inégalée.</p></div>
<h3>Stephen Sondheim et la révolution du musical contemporain</h3>
<p>Stephen <strong>Sondheim</strong> (1930-2021) est le génie protéiforme qui a renouvelé le musical américain. Ses œuvres — <em>Company</em> (1970), <em>Sweeney Todd</em> (1979), <em>Into the Woods</em> (1987), <em>Sunday in the Park with George</em> (1984) — se distinguent par leurs paroles d'une sophistication littéraire exceptionnelle, leurs harmonies musicales complexes et leurs sujets inattendus.</p>
<p>Le <strong>mega-musical</strong> des années 1980-1990 — <em>Les Misérables</em>, <em>Le Fantôme de l'Opéra</em>, <em>Cats</em> — conquiert les publics mondiaux avec des productions spectaculaires. Ces shows ont popularisé le genre à une échelle sans précédent.</p>
<h3>Le musical au cinéma et ses nouvelles formes</h3>
<p>L'<strong>âge d'or du film musical hollywoodien</strong> (1929-1960) produit des chefs-d'œuvre comme <em>Singin' in the Rain</em> (1952) et les films de Fred Astaire et Ginger Rogers. Vincente Minnelli, Stanley Donen et Busby Berkeley inventent une grammaire visuelle propre au musical cinématographique.</p>
<p>En France, la renaissance du musical depuis les années 2000 (<em>Notre-Dame de Paris</em>, <em>Le Roi Soleil</em>, <em>Mozart l'Opéra Rock</em>) a créé un genre hybride entre musical américain et spectacle de variété française, touchant des millions de spectateurs au-delà du public traditionnel des théâtres.</p>""",

"opera/grands-compositeurs": """<h3>Les piliers du répertoire baroque</h3>
<p>Johann Sebastian <strong>Bach</strong> (1685-1750), bien qu'il n'ait pas composé d'opéras, a posé les fondements harmoniques et contrapuntiques sur lesquels tout le répertoire lyrique repose. Ses cantates, passions et oratorios — notamment la <em>Passion selon saint Matthieu</em> (1727) — sont des drames musicaux religieux d'une profondeur spirituelle insurpassable.</p>
<p>Georg Friedrich <strong>Haendel</strong> (1685-1759) porte l'opéra baroque à son apogée. Ses quarante opéras (<em>Giulio Cesare</em>, 1724 ; <em>Alcina</em>, 1735) et ses oratorios (<em>Messie</em>, 1741) conjuguent une invention mélodique inépuisable et une dramaturgie vocale sans égale. Le renouveau haendelien depuis les années 1960, porté par des chefs comme William Christie et Marc Minkowski, a révélé la modernité de cette musique.</p>
<div class="highlight-box"><p>Le <em>Messie</em> de Haendel (1741) est l'œuvre orchestrale et chorale la plus jouée de toute l'histoire de la musique occidentale. La tradition de se lever lors du <em>Hallelujah</em> remonterait au roi George II lui-même, debout d'émotion lors de la première londonienne.</p></div>
<h3>Romantisme et nationalisme : les grandes voix du XIXe siècle</h3>
<p>Le XIXe siècle voit l'émergence des <strong>écoles nationales</strong> qui s'émancipent de la domination germano-italienne. Bedřich <strong>Smetana</strong> et Antonín <strong>Dvořák</strong> créent une musique tchèque à partir du folklore et des paysages de Bohême. Edvard <strong>Grieg</strong> fait de même pour la Norvège. En Russie, le groupe des <em>Cinq</em> (Balakirev, Borodine, Cui, Moussorgski, Rimski-Korsakov) développe un langage musical russe spécifique.</p>
<p>Modest <strong>Moussorgski</strong> (1839-1881) est le génie le plus original du groupe. Son opéra <em>Boris Godounov</em> (1874), basé sur Pouchkine, est une fresque historique d'une puissance dramatique exceptionnelle, avec un chœur populaire en premier rôle. Son cycle pianistique <em>Tableaux d'une exposition</em> (1874), orchestré par Ravel en 1922, reste l'une des œuvres les plus jouées du répertoire symphonique.</p>
<h3>Les révolutionnaires du XXe siècle</h3>
<p>Arnold <strong>Schoenberg</strong> (1874-1951) invente la <strong>musique dodécaphonique</strong> (1921), dans laquelle les douze sons de la gamme chromatique sont utilisés de façon équivalente, abolissant la hiérarchie tonal-atonal. Alban Berg applique cette technique avec une expressivité déchirante dans ses opéras <em>Wozzeck</em> (1925) et <em>Lulu</em> (inachevé).</p>
<p>Igor <strong>Stravinski</strong> (1882-1971) et Béla <strong>Bartók</strong> (1881-1945) explorent une autre voie : l'intégration des musiques folkloriques dans une écriture moderniste. Les ballets de Stravinski pour Diaghilev (<em>L'Oiseau de feu</em>, 1910 ; <em>Le Sacre du Printemps</em>, 1913) révolutionnent l'orchestre. La première du <em>Sacre</em> provoque l'un des plus célèbres scandales de l'histoire musicale.</p>""",

"opera/voix-technique": """<h3>La classification des voix et la tessiture</h3>
<p>Les voix lyriques sont classifiées selon leur <strong>tessiture</strong> (étendue des notes confortablement chantables), leur timbre (couleur vocale) et leur puissance. Pour les voix de femmes : la <em>soprano</em> (voix la plus aiguë), la <em>mezzo-soprano</em> (intermédiaire), le <em>contralto</em> (le plus grave). Pour les hommes : le <em>ténor</em> (le plus aigu et le plus valorisé dans le répertoire romantique), le <em>baryton</em> (intermédiaire) et la <em>basse</em> (la plus grave).</p>
<p>Ces catégories se subdivisent encore : la soprano <em>lyrique</em> (voix chaude et ample, adaptée à Verdi et Puccini), la soprano <em>colorature</em> (très agile dans les ornements, adaptée à Mozart et Donizetti), la soprano <em>dramatique</em> (voix puissante pour Wagner). Ces distinctions sont fondamentales pour le casting operatique.</p>
<div class="highlight-box"><p>Le <em>La</em> de référence internationalement fixé à 440 Hz depuis 1939 n'a pas toujours eu cette fréquence : au XVIIIe siècle, le diapason était souvent plus bas (415 Hz), ce qui explique que certaines œuvres baroques paraissent plus accessibles aux voix modernes dans leurs versions historiquement informées.</p></div>
<h3>La technique vocale : souffle, résonance et projection</h3>
<p>Le chant lyrique repose sur une technique de <strong>soutien du souffle</strong> (<em>appoggio</em>) qui permet de projeter la voix sans effort apparent dans de grandes salles sans amplification. L'appui diaphragmatique — la gestion du flux d'air entre le diaphragme et les muscles abdominaux — est la base sur laquelle tout le reste s'édifie. Cette technique, perfectionnée pendant des siècles, permet des performances de deux à trois heures sans fatigue vocale excessive.</p>
<p>Les <strong>résonateurs</strong> — les cavités du crâne, de la gorge et de la poitrine — amplifient et colorent naturellement la voix. La technique du <em>voce di testa</em> (voix de tête) et du <em>voce di petto</em> (voix de poitrine) permet au chanteur de naviguer dans toute sa tessiture en maintenant une couleur homogène.</p>
<h3>Grandes voix et interprétations légendaires</h3>
<p>Maria <strong>Callas</strong> (1923-1977) a révolutionné la soprano dramatique colorature par la profondeur de son engagement scénique et la puissance expressive de ses interprétations de Bellini, Donizetti et Verdi. Elle a réinventé ce que le chant pouvait dire et faire ressentir.</p>
<p>Luciano <strong>Pavarotti</strong> (1935-2007) est le ténor lyrique par excellence : son <em>do</em> suraigu d'une clarté cristalline dans <em>La fille du régiment</em> de Donizetti est devenu légendaire. Avec Plácido Domingo et José Carreras, il forme les <em>Trois ténors</em>, dont le concert lors de la Coupe du monde 1990 à Rome atteint un public mondial sans précédent, popularisant l'opéra bien au-delà de son public traditionnel.</p>""",

"opera/opera-contemporain": """<h3>Les ruptures du XXe siècle et les nouvelles formes</h3>
<p>L'opéra du XXe siècle est traversé par des tensions entre modernisation et tradition. Alban <strong>Berg</strong> (<em>Wozzeck</em>, 1925) applique la technique dodécaphonique à un théâtre musical d'une expressivité saisissante. Benjamin <strong>Britten</strong> (1913-1976) renouvelle l'opéra anglais avec <em>Peter Grimes</em> (1945), <em>Billy Budd</em> (1951) et <em>Le Songe d'une nuit d'été</em> (1960). Francis <strong>Poulenc</strong> crée l'opéra religieux le plus important du siècle avec <em>Les Dialogues des Carmélites</em> (1957).</p>
<p>La <strong>seconde avant-garde</strong> (Boulez, Stockhausen, Nono, Berio) impose des langages musicaux sériels et électroniques qui mettent à l'épreuve les limites du public. Luigi <strong>Nono</strong> (<em>Intolleranza</em>, 1961) et Luciano <strong>Berio</strong> (<em>Un re in ascolto</em>, 1984) explorent un théâtre musical post-opératique qui brouille les frontières entre concert et spectacle.</p>
<div class="highlight-box"><p>La <strong>création mondiale</strong> d'un opéra reste un événement médiatique majeur dans le monde lyrique. <em>Nixon in China</em> de John Adams (1987), <em>Written on Skin</em> de George Benjamin (2012) ont établi de nouvelles œuvres au répertoire mondial en quelques années — preuve que l'opéra reste un art vivant.</p></div>
<h3>Philip Glass, John Adams et le minimalisme américain</h3>
<p>Philip <strong>Glass</strong> (né en 1937) révolutionne l'opéra avec sa trilogie du portrait : <em>Einstein on the Beach</em> (1976, avec Bob Wilson), <em>Satyagraha</em> (1980) et <em>Akhnaten</em> (1984). Sa technique minimaliste — répétitions hypnotiques, évolution lente, libretto réduit au minimum — crée un théâtre musical de pure sensation.</p>
<p>John <strong>Adams</strong> (né en 1947) allie l'héritage minimaliste à une dramaturgie plus classique. <em>Nixon in China</em> (libretto de Alice Goodman, mise en scène de Peter Sellars) traite d'un événement historique récent avec une ironie poétique sophistiquée. <em>The Death of Klinghoffer</em> (1991) affronte le terrorisme, soulevant des controverses qui témoignent de la puissance politique que peut encore avoir l'opéra.</p>
<h3>La mise en scène contemporaine et le débat Regie-Theater</h3>
<p>Le <strong>Regie-Theater</strong>, développé en Allemagne et en Autriche depuis les années 1970, soumet le répertoire classique à des relectures radicalement décontextualisées : <em>La Traviata</em> dans un hôpital psychiatrique, <em>Le Ring</em> dans une centrale nucléaire. Ces productions suscitent régulièrement des débats passionnés entre partisans de l'innovation et défenseurs de la fidélité aux intentions du compositeur.</p>
<p>Des metteurs en scène comme Romeo Castellucci, Christoph Marthaler, Peter Sellars et William Kentridge ont renouvelé profondément l'esthétique de l'opéra, l'ouvrant à des influences visuelles (arts plastiques, vidéo, danse) et à des lectures politiques qui déplacent l'expérience du spectateur.</p>""",
}

def replace_course_content(content_html, new_content_html):
    """Truly replace all content inside .course-content div in the contenu section."""
    start_marker = '<div class="course-content">'
    end_marker_quiz = '<section class="content-section" id="quiz">'

    start_idx = content_html.find(start_marker)
    if start_idx == -1:
        return content_html

    quiz_idx = content_html.find(end_marker_quiz)
    if quiz_idx == -1:
        return content_html

    # Find the last </div> before quiz — this closes .course-content
    closing_div_idx = content_html.rfind('</div>', 0, quiz_idx)
    if closing_div_idx == -1:
        return content_html

    # Replace everything from after start_marker to closing_div_idx
    content_start = start_idx + len(start_marker)

    new_content = (content_html[:content_start] + '\n' +
                   new_content_html + '\n      ' +
                   content_html[closing_div_idx:])
    return new_content


path = os.path.join(BASE, 'spectacle.json')
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']
modified = 0

for key, new_content_html in ENRICHMENTS.items():
    if key not in pages:
        print(f'MISSING: {key}')
        continue
    page = pages[key]
    old_len = len(page['content'])
    page['content'] = replace_course_content(page['content'], new_content_html)
    new_len = len(page['content'])
    print(f'  {key}: {old_len} → {new_len} ({new_len-old_len:+d})')
    modified += 1

print(f'\nTotal modifié : {modified}')

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('Fichier sauvegardé.')
