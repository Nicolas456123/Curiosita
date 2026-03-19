#!/usr/bin/env python3
"""Add rich lesson articles to litterature-monde.json"""
import json, os

BASE = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita"

with open(f"{BASE}/assets/content/litterature-monde.json", "r", encoding="utf-8") as f:
    data = json.load(f)

# ── LESSON 1 : Shakespeare et le théâtre élisabéthain ──────────────────────────
shakespeare_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>Shakespeare et le théâtre élisabéthain</h2>
      <p>Le génie dramatique qui a inventé l'anglais moderne</p>
    </div>
  </div>
  <p class="resume-text">William Shakespeare (1564-1616) est, de l'avis général, le plus grand écrivain de langue anglaise et l'un des dramaturges les plus importants de tous les temps. Né à Stratford-upon-Avon dans le Warwickshire, il monte à Londres vers 1590 et devient rapidement acteur, auteur et copropriétaire du Globe Theatre. Son œuvre — 37 pièces, 154 sonnets, plusieurs poèmes — constitue le socle de la littérature anglophone et a façonné la langue anglaise comme aucun autre auteur ne l'a fait.</p>
  <div class="highlight-box">
    <p><strong>Pourquoi Shakespeare est-il universel ?</strong> Ses pièces posent des questions qui traversent les siècles et les cultures : Qu'est-ce que le pouvoir ? Comment vivre avec la culpabilité ? Qu'est-ce que l'amour ? Qu'est-ce que la jalousie ? Faut-il obéir à sa conscience ou à l'ordre établi ? Ces questions sont universelles. Shakespeare les habille de poésie, d'humour et de violence, créant des personnages d'une profondeur psychologique stupéfiante — Hamlet, Iago, Lady Macbeth, Falstaff — qui semblent plus réels que des personnes réelles.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>L'œuvre de Shakespeare</h2>
      <p>Tragédies, comédies, histoires et sonnets</p>
    </div>
  </div>

  <h3>Le contexte élisabéthain</h3>
  <p class="resume-text">Le théâtre élisabéthain (sous le règne d'Élisabeth I, 1558-1603) est un phénomène culturel et social unique. Le théâtre est populaire — il attire aussi bien la reine que les artisans et les vendeurs de poissons. Le Globe Theatre (construit en 1599), circulaire et ouvert, peut accueillir 3 000 spectateurs. Les femmes ne jouent pas — leurs rôles sont tenus par de jeunes hommes —, ce qui crée des situations de travestissement que Shakespeare exploite avec génie dans ses comédies. La scène est presque dépourvue de décors : les mots doivent tout faire.</p>
  <p class="resume-text">Cette contrainte visuelle devient une liberté poétique absolue. Quand Hamlet dit à Horatio "Il y a plus de choses dans le ciel et sur la terre, Horatio, que n'en rêve ta philosophie", la puissance n'est pas dans un décor : elle est entière dans le langage. Shakespeare invente des mots, des métaphores, des structures rythmiques qui entrent directement dans la conscience du spectateur.</p>

  <h3>Les grandes tragédies</h3>
  <p class="resume-text">Les tragédies de Shakespeare sont au cœur de son œuvre et de sa réputation. Elles partagent une architecture commune : un héros aux qualités exceptionnelles possède un défaut fatal — l'ambition d'Hamlet qui se mue en paralysie, la jalousie d'Othello, l'ambition de Macbeth, la sénilité orgueilleuse du roi Lear — qui le conduit à sa perte et entraîne ceux qu'il aime dans sa chute.</p>
  <div class="highlight-box">
    <p><strong>Hamlet (1601) :</strong> Le prince de Danemark apprend de son père assassiné que son oncle Claudius est le meurtrier et a épousé sa mère. Mais Hamlet hésite, analyse, philosophe — "Être ou ne pas être, telle est la question" — au lieu d'agir. Cette hésitation est-elle lâcheté, prudence ou lucidité existentielle ? La pièce ne tranche pas. Hamlet est peut-être le personnage le plus analysé de la littérature mondiale. Freud y voit un Œdipe ; les existentialistes y lisent la condition humaine face à l'absurde.</p>
  </div>
  <div class="highlight-box">
    <p><strong>Macbeth (1606) :</strong> Le général Macbeth, poussé par les prophéties de trois sorcières et l'ambition dévorante de Lady Macbeth sa femme, assassine le roi Duncan pour s'emparer du trône d'Écosse. Il sombre dans une spirale de violence, de paranoïa et de culpabilité. Lady Macbeth, dont le fameux monologue du somnambulisme ("Out, damned spot!") exprime la dégradation psychologique sous le poids du crime, finit par se suicider. Macbeth est une méditation sur le pouvoir, l'ambition et leurs effets corrosifs sur l'âme humaine.</p>
  </div>
  <div class="highlight-box">
    <p><strong>Othello (1603) :</strong> Le général maure Othello est manipulé par Iago, son lieutenant jaloux, pour croire à la trahison de Desdémone, son épouse. Iago est l'un des grands méchants de la littérature — cynique, intelligent, dévoué à la destruction pure. Othello explore la jalousie, le racisme (Othello est un "Maure" dans une Venise blanche), la manipulation et la confiance. Coleridge décrivait Iago comme une "méchanceté sans motif" — ce qui en fait presque un personnage moderne.</p>
  </div>
  <div class="highlight-box">
    <p><strong>Le Roi Lear (1606) :</strong> Le vieux roi Lear divise son royaume entre ses filles selon leur capacité à le flatter. Les deux aînées, Goneril et Regan, le trahissent ; seule Cordelia, qui refuse de flatter, l'aimait vraiment. Lear sombre dans la folie. La pièce est considérée comme la plus sombre et la plus nihiliste de Shakespeare — Cordelia meurt dans la scène finale sans raison apparente, sans catharsis. Elle pose la question : le cosmos est-il juste ou indifférent à la souffrance humaine ?</p>
  </div>

  <h3>Les grandes comédies</h3>
  <p class="resume-text">Les comédies de Shakespeare ne sont pas simplement drôles — elles sont profondément philosophiques, explorant le désir, l'identité et les conventions sociales. Leur structure typique voit des personnages quitter le monde ordonné (la cité, la cour) pour entrer dans un espace magique et chaotique (la forêt, une île enchantée) où les identités se brouillent, avant de retrouver un ordre transformé.</p>
  <p class="resume-text"><strong>Le Songe d'une nuit d'été</strong> (vers 1595-1596) est la comédie la plus célèbre. Quatre jeunes Athéniens fuient dans la forêt et tombent sous l'emprise des elfes Oberon et Titania, dont les querelles et la magie créent une nuit de confusion amoureuse totale. Puck, le lutin espiègle, applique par erreur un filtre d'amour sur les mauvais personnages. La forêt est le lieu du désir et de l'inconscient ; le retour à Athènes, le retour à la raison et à la convention. Shakespeare joue constamment sur la frontière entre rêve et réalité, théâtre et vie.</p>
  <p class="resume-text"><strong>Beaucoup de bruit pour rien</strong> (1598-1599) explore le combat des sexes à travers la joute verbale électrisante entre Bénédict et Béatrice, deux esprits brillants qui prétendent se haïr avant de tomber amoureux. La pièce invente ce que le cinéma appellera la "screwball comedy" : deux personnages intelligents, fiers, égaux, qui se bagarrent pour se découvrir.</p>
  <p class="resume-text"><strong>La Tempête</strong> (1611), considérée comme la dernière grande pièce de Shakespeare, est une métaphore de la création artistique. Prospero, le mage-poète, contrôle une île enchantée, manipule les destinées avec son art, puis renonce à ses pouvoirs ("Je brise mon bâton, j'ensevelis mon livre"). Caliban, l'esclave indigène, est devenu dans les lectures postcoloniales le symbole du colonisé qui cherche sa voix.</p>

  <h3>Les pièces historiques</h3>
  <p class="resume-text">Les pièces historiques — les deux tétralogies sur l'histoire d'Angleterre — forment ensemble ce que certains critiques appellent "la plus grande épopée de la littérature anglaise". <strong>Richard III</strong> (1592-1593) donne voix à l'un des grands méchants de la scène : un roi bossu, machiavélique, qui séduit le public avec son cynisme brillant ("Je suis résolu à être un scélérat"). <strong>Henry V</strong> (1599) contient le discours de la Saint-Crépin, l'un des plus grands discours militaires de la littérature — "We few, we happy few, we band of brothers".</p>

  <h3>Les sonnets</h3>
  <p class="resume-text">Les 154 sonnets de Shakespeare (publiés en 1609) constituent l'un des sommets de la poésie en langue anglaise. Écrits en sonnet shakespearien (trois quatrains et un distique, schéma de rimes ABAB CDCD EFEF GG), ils explorent les thèmes du temps, de la beauté, de l'amour, de la trahison et de l'immortalité poétique. Le sonnet 18 est le plus célèbre : "Shall I compare thee to a summer's day?" — une déclaration d'amour qui affirme que la poésie rend immortel ce qu'elle célèbre. Les sonnets sont adressés à deux personnes mystérieuses : un "beau jeune homme" et une "dark lady". Leur identité n'a jamais été établie avec certitude.</p>

  <h3>L'héritage linguistique de Shakespeare</h3>
  <p class="resume-text">Shakespeare a introduit plus de 1 700 mots nouveaux dans la langue anglaise : "bedroom", "lonely", "generous", "gloomy", "obscene", "swagger"... Il a aussi inventé des expressions qui sont entrées dans l'usage courant : "break the ice", "wild-goose chase", "heart of gold", "in a pickle", "cold-blooded"... Son influence sur la langue anglaise est comparable à celle que Dante a eue sur l'italien ou Rabelais sur le français — à cette différence près que Shakespeare a eu 400 ans pour s'ancrer dans l'imaginaire mondial.</p>

  <h3>Shakespeare sur la scène mondiale</h3>
  <p class="resume-text">Aujourd'hui, les pièces de Shakespeare sont jouées sur tous les continents, traduites en plus de 80 langues. Chaque génération les réinterprète selon son propre regard : Hamlet devient un révolutionnaire dans la Russie soviétique ; La Tempête est lue à travers le prisme du colonialisme ; Othello devient une méditation sur le racisme contemporain. C'est la marque des grands textes : ils survivent à leurs contextes d'origine et continuent d'interroger le présent.</p>
  <p class="resume-text">Le cinéma a produit des adaptations mémorables — Orson Welles (Othello, 1952), Akira Kurosawa (Ran, adaptation de Lear, 1985), Kenneth Branagh (Henry V, 1989 ; Hamlet, 1996), Baz Luhrmann (Roméo + Juliette, 1996). Ces films montrent que les thèmes shakespeariens se déplacent sans perte dans n'importe quel contexte culturel ou historique.</p>

  <div class="highlight-box">
    <p><strong>La question de l'identité de Shakespeare :</strong> Une minorité de chercheurs (les "antistratfordiens") conteste que Shakespeare de Stratford ait écrit les pièces, proposant à la place Francis Bacon, Christopher Marlowe ou le comte d'Oxford. Ces théories ne sont pas acceptées par la grande majorité des spécialistes, qui s'appuient sur des archives solides — contrats, actes notariaux, témoignages de contemporains — pour attribuer l'œuvre à William Shakespeare.</p>
  </div>
</section>"""

# ── LESSON 2 : Le modernisme anglophone ────────────────────────────────────────
modernisme_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>Le modernisme anglophone</h2>
      <p>La révolution des formes narratives au XXe siècle</p>
    </div>
  </div>
  <p class="resume-text">Le modernisme littéraire (années 1900-1940 environ) est une révolution dans la façon d'écrire et de lire. Face aux bouleversements du monde moderne — industrialisation, Première Guerre mondiale, psychanalyse freudienne, relativité einsteinienne —, les écrivains modernistes remettent en question les conventions du roman du XIXe siècle : le narrateur omniscient, l'intrigue linéaire, le réalisme social. Ils explorent la subjectivité radicale, le temps psychologique et les structures fragmentées qui reflètent l'expérience moderne du monde.</p>
  <div class="highlight-box">
    <p><strong>La révolution moderniste en une formule :</strong> "On December 10, 1910, human character changed." — Virginia Woolf. Par cette boutade, Woolf désigne une rupture dans la conscience culturelle. La psychanalyse a révélé l'inconscient. Einstein a relativisé le temps et l'espace. La guerre a détruit les certitudes de la civilisation. Le roman doit changer pour refléter cette nouvelle réalité intérieure. Le monde extérieur n'est plus une donnée objective : il est filtré par la conscience subjective de chaque personnage.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>Les grandes figures du modernisme</h2>
      <p>Joyce, Woolf, Eliot, Faulkner</p>
    </div>
  </div>

  <h3>James Joyce : l'intérieur du langage</h3>
  <p class="resume-text">James Joyce (1882-1941) est né à Dublin et a passé la majeure partie de sa vie en exil volontaire — Trieste, Zurich, Paris. Son œuvre est une exploration radicale des possibilités du langage et de la conscience. <strong>Dubliners</strong> (1914) est un recueil de nouvelles d'une précision froide et douloureuse, qui décrit la paralysie morale et spirituelle de la société dublinoise. La dernière nouvelle, <em>Les Morts</em>, est considérée comme l'une des plus grandes nouvelles jamais écrites : la révélation finale — Gabriel comprend que sa femme a aimé un autre homme avant lui, un homme mort depuis longtemps — est d'une beauté dévastatrice.</p>
  <p class="resume-text"><strong>Ulysse</strong> (1922) est probablement le roman le plus influent du XXe siècle. Il narre une seule journée — le 16 juin 1904 à Dublin — à travers la conscience de trois personnages principaux : Stephen Dedalus (alter ego de Joyce), Leopold Bloom (commis publicitaire juif, figure d'Ulysse moderne) et Molly Bloom (sa femme, figure de Pénélope). Chaque chapitre utilise un style différent — parodie, catéchisme, chanson de music-hall, monologue intérieur pur — pour explorer les strates de l'expérience humaine. Le roman se termine par le long monologue de Molly, 45 pages sans ponctuation, flux de conscience pur.</p>
  <div class="highlight-box">
    <p><strong>Finnegans Wake (1939) :</strong> L'œuvre la plus expérimentale de Joyce, travaillée pendant 17 ans. Un roman entier composé dans une langue polyglotte inventée, mêlant anglais, français, latin, allemand, irlandais et des dizaines d'autres langues dans des mots-valises. Le titre lui-même joue sur "Finnegan's Wake" (veillée funèbre du personnage de la chanson populaire) et "wake" (réveil). Peu de lecteurs le lisent entièrement ; la plupart le lisent par fragments, comme une musique qui se comprend d'abord par l'oreille avant le sens.</p>
  </div>

  <h3>Virginia Woolf : le flux de conscience féminin</h3>
  <p class="resume-text">Virginia Woolf (1882-1941) est l'une des figures centrales du modernisme et l'une des plus grandes essayistes de la langue anglaise. Membre du Bloomsbury Group — cercle d'intellectuels qui comprenait E.M. Forster, John Maynard Keynes et Lytton Strachey — elle développe une technique narrative qui capture le flux des pensées, des sensations et des souvenirs à travers une prose d'une beauté musicale.</p>
  <p class="resume-text"><strong>Mrs Dalloway</strong> (1925) narre une seule journée dans la vie de Clarissa Dalloway, bourgeoise londonienne qui prépare une soirée, entrecoupée des pensées de Septimus Warren Smith, vétéran de la Grande Guerre souffrant de ce qu'on appellerait aujourd'hui un PTSD. Les deux personnages ne se rencontrent jamais, mais leurs consciences se répondent. Woolf explore la mémoire involontaire, le poids du temps, la fragilité de l'identité féminine dans une société patriarcale.</p>
  <p class="resume-text"><strong>Les Vagues</strong> (1931) pousse le modernisme à son extrême. Six personnages — Bernard, Susan, Rhoda, Neville, Jinny et Louis — s'expriment dans une série de monologues intérieurs qui suivent leur vie de l'enfance à la vieillesse. Il n'y a pas de narration externe, pas de dialogue : seulement le flux des consciences, entrecoupé de passages descriptifs sur la mer et la lumière changeante. C'est moins un roman qu'un poème en prose.</p>
  <div class="highlight-box">
    <p><strong>Une chambre à soi (1929) :</strong> Essai fondateur du féminisme littéraire. Woolf y affirme que pour écrire, une femme a besoin de 500 livres par an et d'une chambre à soi — c'est-à-dire d'une autonomie économique et d'un espace personnel que la société de l'époque refuse aux femmes. Elle imagine la vie qu'aurait eue "la sœur de Shakespeare" — une femme avec le même génie que Shakespeare, née dans les mêmes conditions — et montre comment le contexte social l'aurait détruite. L'essai reste une lecture fondamentale sur le lien entre les conditions matérielles et la création artistique.</p>
  </div>

  <h3>T.S. Eliot : la poésie de la fragmentation</h3>
  <p class="resume-text">Thomas Stearns Eliot (1888-1965), né à Saint-Louis (Missouri) mais naturalisé britannique, est le poète moderniste le plus influent de la langue anglaise. <strong>La Terre vaine</strong> (<em>The Waste Land</em>, 1922) est un poème long de 433 vers composé de fragments de discours, de langues multiples (anglais, français, allemand, sanskrit, latin, grec), de citations et d'allusions à une multitude de textes. Il exprime la désillusion de l'après-Première Guerre mondiale — une civilisation en ruines, incapable de trouver un sens ou une rédemption.</p>
  <p class="resume-text">Le poème s'ouvre sur "April is the cruellest month" — paradoxe moderniste par excellence, renversant la convention romantique du printemps joyeux. Il se structure en cinq parties et se conclut sur le mot sanscrit "Shantih" (la paix qui surpasse tout entendement), geste vers une spiritualité orientale qui pourrait offrir ce que la civilisation occidentale a perdu. Eliot accompagne son poème de notes de bas de page — à mi-chemin entre l'explication sincère et la parodie académique.</p>

  <h3>William Faulkner : le Sud américain et le temps brisé</h3>
  <p class="resume-text">William Faulkner (1897-1962, Nobel 1949) est le grand romancier du Sud américain. Son œuvre se déroule presque entièrement dans le comté fictif de Yoknapatawpha (inspiré du Mississippi), microcosme de la société sudiste avec ses dynasties en déclin, ses secrets de famille, son rapport au racisme et à la Guerre de Sécession. Faulkner pousse le modernisme américain vers ses limites : ses phrases peuvent faire une page entière, les perspectives narratives multipliées, les chronologies fragmentées.</p>
  <p class="resume-text"><strong>Le Bruit et la Fureur</strong> (1929) est son chef-d'œuvre. Le roman raconte la déchéance de la famille Compson en quatre sections qui racontent les mêmes événements depuis quatre perspectives différentes. La première section est narrée par Benjy, intellectuellement déficient, dont le récit mêle des temporalités différentes sans marquage clair — une expérience de lecture déconcertante et bouleversante. La phrase "The past is never dead. It's not even past." est devenue l'une des plus citées de la littérature américaine.</p>
  <p class="resume-text"><strong>Tandis que j'agonise</strong> (1930) narre le voyage d'une famille pauvre pour enterrer la mère morte, vu à travers 15 narrateurs différents en 59 sections courtes. <strong>Absalon, Absalon !</strong> (1936) reconstruit l'histoire de Thomas Sutpen à travers des récits multiples, partiels et contradictoires, explorant comment l'histoire est toujours une reconstruction incertaine.</p>

  <h3>Samuel Beckett : l'héritage du modernisme</h3>
  <p class="resume-text">Samuel Beckett (1906-1989, Nobel 1969) est l'héritier direct du modernisme joycien — il fut longtemps le secrétaire de Joyce à Paris. Mais son œuvre va plus loin : si Joyce épuise les possibilités du langage en le densifiant à l'extrême, Beckett choisit l'épuisement par soustraction. <strong>En attendant Godot</strong> (1952) réduit le théâtre à son essence : deux hommes qui attendent quelqu'un qui ne vient pas. Pas d'intrigue, pas de résolution, pas de sens donné. "Il faut continuer, je ne peux pas continuer, je vais continuer" — cette phrase finale de <em>L'Innommable</em> (1953) résume sa vision du monde : une persistance absurde mais indestructible de l'existence.</p>

  <h3>Le modernisme et la littérature contemporaine</h3>
  <p class="resume-text">Le modernisme nous a légué des outils de lecture et d'écriture qui semblent naturels aujourd'hui : le roman à la première personne non fiable, la focalisation interne, le temps non linéaire, les perspectives multiples. Des auteurs comme Toni Morrison, Kazuo Ishiguro, José Saramago ou W.G. Sebald héritent directement de Joyce, Woolf et Faulkner. La série télévisée, les jeux vidéo narratifs, le cinéma d'auteur — tous ont intégré les leçons formelles du modernisme. C'est peut-être le mouvement littéraire le plus influent du XXe siècle.</p>

  <div class="highlight-box">
    <p><strong>Le flux de conscience — technique clé :</strong> Le "stream of consciousness" (flux de conscience) est la technique narrative qui tente de reproduire le cours ininterrompu et associatif de la pensée humaine, sans la médiation d'un narrateur externe qui sélectionne et ordonne. Joyce, Woolf et Faulkner en sont les maîtres. Le monologue de Molly Bloom (Ulysse) — 45 pages sans ponctuation — en est l'exemple le plus radical. Cette technique a profondément transformé notre façon de lire et d'imaginer la vie intérieure des personnages.</p>
  </div>
</section>"""

# ── LESSON 3 : Dostoïevski — les abîmes ────────────────────────────────────────
dostoievski_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>Dostoïevski — les abîmes de la conscience</h2>
      <p>Crime et Châtiment, Les Frères Karamazov et les grandes questions morales</p>
    </div>
  </div>
  <p class="resume-text">Fiodor Mikhaïlovitch Dostoïevski (1821-1881) est l'un des romanciers les plus profonds et les plus dérangeants de l'histoire littéraire. Ses romans ne racontent pas simplement des histoires : ils descendent dans les abîmes de la conscience humaine, interrogent les fondements de la morale, de la foi et de la liberté, et mettent en scène des personnages qui poussent leurs idées jusqu'à leurs conséquences les plus extrêmes. Friedrich Nietzsche a dit de lui qu'il était "le seul psychologue qui m'ait appris quelque chose". Sigmund Freud a consacré un essai à <em>Les Frères Karamazov</em>, qu'il considérait comme "le plus grand roman jamais écrit".</p>
  <div class="highlight-box">
    <p><strong>Une vie marquée par le drame :</strong> En 1849, membre d'un cercle littéraire radical, Dostoïevski est arrêté, condamné à mort et conduit devant le peloton d'exécution — avant d'être gracié au dernier moment (mise en scène voulue par le tsar). Cette expérience de mort imminente le marque à jamais. Il passe ensuite quatre ans dans les camps sibériens, expérience qu'il transposera dans <em>Souvenirs de la maison des morts</em>. Sa vie entière est traversée par la maladie (épilepsie), les dettes de jeu et les deuils — mais aussi par une productivité créatrice extraordinaire.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>L'œuvre de Dostoïevski</h2>
      <p>Romans, idées et héritage mondial</p>
    </div>
  </div>

  <h3>Crime et Châtiment (1866)</h3>
  <p class="resume-text"><em>Crime et Châtiment</em> est le roman qui impose Dostoïevski sur la scène littéraire mondiale. Raskolnikov, étudiant pauvre à Saint-Pétersbourg, développe une théorie : certains hommes "extraordinaires" (Napoléon, par exemple) ont le droit de transgresser la morale ordinaire pour accomplir de grandes choses. Pour tester sa propre appartenance à cette catégorie supérieure, il assassine une vieille prêteuse sur gages — qu'il juge nuisible à la société — et sa demi-sœur, témoin inopportun. Il ne vole presque rien. Le crime est idéologique.</p>
  <p class="resume-text">Le roman suit alors la lente torture psychologique de Raskolnikov : non pas la peur d'être découvert, mais la désintégration interne d'un homme qui pensait être "au-dessus" de la culpabilité et découvre qu'il n'est que humain. Le personnage de Sonia — prostituée qui croit en Dieu avec une foi simple et indestructible — est l'antithèse de Raskolnikov. C'est elle qui lui relit le passage de l'Évangile sur la résurrection de Lazare, symbole de la rédemption possible.</p>
  <p class="resume-text">L'inspecteur Porphyre, l'un des premiers "détectives" de la littérature, sait que Raskolnikov est coupable dès le début et joue avec lui comme un chat avec une souris — sans aucune preuve directe. Son approche psychologique préfigure les techniques de l'interrogatoire moderne. Au final, Raskolnikov se rend de lui-même : non pas parce qu'il a été pris, mais parce qu'il ne peut pas vivre avec ce qu'il est devenu.</p>

  <h3>L'Idiot (1869)</h3>
  <p class="resume-text">Dostoïevski voulait créer "un homme positivement beau" — et il crée le prince Mychkine, épileptique, naïf, incapable de mensonge ou de cruauté, qui arrive à Saint-Pétersbourg depuis la Suisse. Sa beauté morale absolue — il est littéralement "idiot" au sens étymologique, différent — est inadaptée au monde réel, plein d'ambition, de cynisme et de violence. Le roman explore si l'innocence totale peut exister dans un monde corrompu — et quelle est son inévitable tragédie.</p>
  <p class="resume-text">Nastassia Filipovna, l'héroïne principale, est l'un des personnages les plus complexes de Dostoïevski : déchirée entre la rédemption et l'autodestruction, elle attire les hommes vers elle tout en les repoussant, incapable d'accepter l'amour qu'elle croit ne pas mériter. Sa fin tragique illustre le thème dostoïevskien fondamental : la souffrance comme destin choisi.</p>

  <h3>Les Démons (1872)</h3>
  <p class="resume-text"><em>Les Démons</em> (ou <em>Les Possédés</em>) est une satire féroce et prophétique du nihilisme révolutionnaire. Inspiré par un fait divers réel — le meurtre d'un étudiant par un groupe révolutionnaire dirigé par Sergueï Netchaïev —, le roman dépeint avec une précision terrifiante comment une idéologie radicale peut transformer des hommes normaux en assassins. Piotr Verkhovensky, l'organisateur du groupe, est le premier portrait du révolutionnaire totalitaire — manipulateur, cynique, dévoué à la destruction pour la destruction.</p>
  <div class="highlight-box">
    <p><strong>La prophétie des Démons :</strong> Dostoïevski écrit ce roman en 1871-1872, soit 45 ans avant la révolution bolchévique. Ses intuitions sur la façon dont le nihilisme idéologique peut conduire au totalitarisme ont frappé de nombreux lecteurs du XXe siècle — notamment Albert Camus, qui a adapté la pièce pour le théâtre en 1959, et Alexandre Soljenitsyne, qui a vu dans ce roman une préfiguration du stalinisme.</p>
  </div>

  <h3>Les Frères Karamazov (1879-1880)</h3>
  <p class="resume-text"><em>Les Frères Karamazov</em> est l'œuvre testamentaire de Dostoïevski, achevée quelques mois avant sa mort. Le roman tourne autour du meurtre du père Fiodor Karamazov — débauché, avare et méprisable — et de la question de savoir lequel de ses quatre fils est coupable ou moralement responsable. Chaque frère incarne une vision du monde : Dmitri, l'instinctif et passionné ; Ivan, l'intellectuel athée ; Aliocha, le croyant et l'amoureux ; et le bâtard Smerdiakov, le nihiliste du ressentiment.</p>
  <p class="resume-text">Le cœur philosophique du roman est le dialogue entre Ivan et Aliocha au livre V, connu sous le nom du "Grand Inquisiteur". Ivan raconte à son frère un poème en prose qu'il a imaginé : le Christ revient à Séville pendant l'Inquisition. Le Grand Inquisiteur le fait arrêter et lui explique pourquoi l'Église fait mieux que lui : les hommes ne veulent pas la liberté — ils veulent le miracle, le mystère, l'autorité. Le Christ écoute en silence et embrasse le vieil homme. C'est l'une des scènes philosophiques les plus célèbres de toute la littérature.</p>
  <p class="resume-text">La question centrale du roman — "Si Dieu n'existe pas, tout est-il permis ?" — hante Ivan Karamazov. Il croit que oui. Mais quand les conséquences de cette logique se réalisent — le meurtre du père —, il ne peut pas les assumer. Sa raison déraisonne, il sombre dans la folie. Dostoïevski ne réfute pas les arguments d'Ivan intellectuellement : il montre que vivre selon ces arguments est psychologiquement impossible pour un être humain.</p>

  <h3>La technique narrative : le roman polyphonique</h3>
  <p class="resume-text">Mikhaïl Bakhtine, le grand théoricien russe, a forgé le concept de "roman polyphonique" pour décrire l'œuvre de Dostoïevski. Dans un roman monologique classique, le narrateur impose sa vision du monde. Chez Dostoïevski, chaque personnage a une voix autonome, une vision du monde complète et cohérente — y compris les personnages qui défendent des positions que Dostoïevski réprouve. Ivan Karamazov est athée ; ses arguments contre Dieu sont présentés avec toute leur puissance, sans être ridiculisés ou réduits. C'est cette honnêteté intellectuelle qui rend ses romans si puissants.</p>
  <p class="resume-text">Dostoïevski utilise les techniques du roman feuilleton — suspense, coups de théâtre, scènes de confrontation — mais les met au service d'une exploration philosophique d'une profondeur exceptionnelle. Ses personnages sont souvent au bord de la crise : fièvre, épilepsie, alcool, folie — états limites qui révèlent leur vérité profonde. Les grandes scènes de ses romans sont des confrontations verbales où les idées s'affrontent avec la violence d'un combat physique.</p>

  <h3>L'influence de Dostoïevski</h3>
  <p class="resume-text">Nietzsche le cite comme une de ses grandes influences. Freud consacre un essai à <em>Les Frères Karamazov</em>. Camus dit que "les trois grands romans de la modernité sont ceux de Stendhal, Tolstoï et Dostoïevski". Kafka, Faulkner, Camus, Sartre, Bernanos — tous reconnaissent sa dette envers lui. En Occident, son influence est paradoxalement plus grande qu'en Russie, où les lecteurs du XIXe siècle lui préféraient Tolstoï. Aujourd'hui, ses romans sont parmi les plus lus au monde — particulièrement <em>Crime et Châtiment</em> et <em>Les Frères Karamazov</em>.</p>

  <div class="highlight-box">
    <p><strong>Dostoïevski et l'existentialisme :</strong> Les philosophes existentialistes du XXe siècle — Sartre, Camus, Heidegger — ont tous lu Dostoïevski avec intensité. Ses personnages incarnent avant la lettre les thèmes existentialistes : l'absurde (Raskolnikov face au meurtre inutile), la mauvaise foi (les Karamazov qui fuient leur liberté), l'engagement (Aliocha qui choisit l'amour). Sartre dit que Dostoïevski lui a appris que "l'existence précède l'essence" — les personnages ne sont pas ce qu'ils sont censés être selon leur nature, mais ce qu'ils choisissent à chaque instant.</p>
  </div>
</section>"""

# ── LESSON 4 : Borges et la fiction métaphysique ───────────────────────────────
borges_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>Borges et la fiction métaphysique</h2>
      <p>Labyrinthes, miroirs et bibliothèques infinies</p>
    </div>
  </div>
  <p class="resume-text">Jorge Luis Borges (1899-1986) est l'un des écrivains les plus originaux et les plus influents du XXe siècle. Né à Buenos Aires dans une famille bilingue espagnol-anglais, il a grandi entouré de livres — son père possédait une grande bibliothèque anglaise — et a fait de la bibliothèque, du labyrinthe et du miroir les métaphores centrales de son œuvre. Ses nouvelles — publiées principalement dans <em>Fictions</em> (1944) et <em>L'Aleph</em> (1949) — sont des exercices de pensée philosophique déguisés en récits fantastiques. Elles inventent un genre nouveau : la fiction métaphysique, où la forme narrative elle-même devient une manière d'explorer des questions philosophiques sur l'infini, le temps, l'identité et la connaissance.</p>
  <div class="highlight-box">
    <p><strong>Un écrivain sans roman :</strong> Borges n'a jamais écrit de roman. Son œuvre principale tient dans deux ou trois recueils de nouvelles très courtes — souvent moins de dix pages — et des essais. C'est peut-être l'écrivain le plus influent du XXe siècle à ne pas avoir de roman majeur. Umberto Eco, Italo Calvino, John Barth, Thomas Pynchon, Paul Auster, Haruki Murakami — tous reconnaissent sa dette envers lui. Le mouvement du postmodernisme littéraire commence, pour beaucoup, avec Borges.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>L'univers de Borges</h2>
      <p>Nouvelles, thèmes et héritage</p>
    </div>
  </div>

  <h3>La Bibliothèque de Babel</h3>
  <p class="resume-text"><strong>La Bibliothèque de Babel</strong> (1941) imagine une bibliothèque infinie qui contient tous les livres possibles — toutes les combinaisons possibles de 25 symboles sur 410 pages. La plupart des livres sont du charabia pur. Quelques-uns ont un sens. Il en existe un qui est le catalogue de tous les autres. Des hommes ont consacré leur vie à trouver ce livre. La bibliothèque est une métaphore de l'univers, du langage, de la quête de sens dans un monde d'information infinie. La nouvelle est aussi une méditation sur la nature de Dieu : si tout existe dans la bibliothèque, y compris la réfutation de chaque idée, quel sens peut-il y avoir ?</p>
  <p class="resume-text">La Bibliothèque est construite de façon géométriquement précise — Borges décrit ses hexagones, ses couloirs, ses puits de ventilation — ce qui donne une impression étrange de réalité documentaire à ce qui est clairement une impossibilité logique. Ce réalisme documentaire appliqué à l'impossible est l'une des signatures stylistiques de Borges.</p>

  <h3>Le Jardin aux sentiers qui bifurquent</h3>
  <p class="resume-text"><strong>Le Jardin aux sentiers qui bifurquent</strong> (1941) est une nouvelle policière en surface — un espion chinois doit transmettre une information et dispose de peu de temps. Mais sous cette intrigue se cache une méditation sur le temps. Ts'ui Pên, ancêtre du personnage principal, a construit un labyrinthe et écrit un roman. Le roman est le labyrinthe : à chaque point de bifurcation, toutes les possibilités se réalisent simultanément. C'est une préfiguration narrative de ce que la physique quantique appellera l'interprétation des "many worlds" — l'idée que chaque décision crée une ramification de réalités parallèles.</p>

  <h3>L'Aleph</h3>
  <div class="highlight-box">
    <p><strong>L'Aleph (1945) :</strong> L'Aleph est un point de l'espace qui contient tous les autres points — depuis lequel on peut voir simultanément tout ce qui existe dans l'univers. Le narrateur — appelé "Borges" — le découvre dans la cave d'un poète médiocre. La description de ce qu'il voit depuis l'Aleph est l'un des plus grands morceaux de prose de la littérature hispanique : une énumération vertigineuse de tout ce qui existe. C'est aussi une métaphore du texte littéraire lui-même — un point d'où l'on peut tout voir, tout l'univers en même temps.</p>
  </div>

  <h3>Pierre Ménard, auteur du Quichotte</h3>
  <p class="resume-text"><strong>Pierre Ménard, auteur du Quichotte</strong> (1939) est peut-être la nouvelle la plus conceptuellement vertigineuse de Borges. Un écrivain du XXe siècle, Pierre Ménard, entreprend non pas de copier Don Quichotte mais d'écrire Don Quichotte — d'être Cervantès au point de produire spontanément les mêmes mots. Ménard y parvient pour quelques chapitres. Borges compare ensuite les deux textes — identiques mot pour mot — et montre que le texte de Ménard est infiniment plus riche que celui de Cervantès, parce que les mêmes mots, écrits à une autre époque par un autre homme, signifient nécessairement autre chose. C'est une réflexion sur l'intertextualité, la lecture et la façon dont le sens dépend du contexte.</p>

  <h3>Tlön, Uqbar, Orbis Tertius</h3>
  <p class="resume-text"><strong>Tlön, Uqbar, Orbis Tertius</strong> (1940) est peut-être la nouvelle la plus ambitieuse de Borges. Des encyclopédistes mystérieux ont inventé un monde fictif — Tlön — avec sa propre physique, sa propre philosophie, ses propres objets. Progressivement, des objets du monde fictif commencent à apparaître dans le monde réel. La nouvelle explore la puissance de la fiction à coloniser la réalité — comment une idée, une fois partagée et crue, devient plus réelle que le monde physique. C'est une métaphore de la religion, de l'idéologie, du mythe national.</p>

  <h3>Les thèmes borgesiens</h3>
  <p class="resume-text">L'œuvre de Borges tourne autour de quelques grandes obsessions. <strong>L'infini</strong> : la bibliothèque de Babel, l'Aleph, les miroirs qui se réfléchissent à l'infini, le nombre pi qui contient toutes les séquences possibles — Borges est fasciné par les paradoxes mathématiques de l'infini (Zénon, Cantor). <strong>Le temps</strong> : le jardin aux sentiers qui bifurquent, les réincarnations, les rêves qui révèlent d'autres niveaux de réalité — le temps chez Borges est labyrinthique, non linéaire, peut-être circulaire.</p>
  <p class="resume-text"><strong>L'identité</strong> : dans <em>Borges et moi</em> (1960), l'auteur réfléchit à la relation entre lui-même — l'homme qui marche dans Buenos Aires — et "Borges", le personnage public, l'écrivain célèbre. Les deux ne coïncident jamais. <strong>La métafiction</strong> : les personnages qui lisent le livre où ils vivent, les auteurs qui découvrent que leur vie est un rêve d'un autre auteur — Borges prépare les jeux postmodernes d'Italo Calvino et John Barth.</p>

  <h3>Le style Borges</h3>
  <p class="resume-text">Le style de Borges est d'une précision et d'une économie remarquables. Il écrit comme un essayiste — dense, référencé, sans ornement inutile — mais au service de fictions. Il invente des citations de livres qui n'existent pas, des biographies d'auteurs fictifs, des comptes rendus d'encyclopédies imaginaires. La frontière entre l'essai et la fiction, entre l'érudition réelle et l'érudition inventée, est constamment brouillée. On ne sait jamais si la référence que cite Borges est réelle ou inventée — et ce n'est peut-être pas important. Ce jeu avec la vérité est lui-même un argument philosophique : la distinction entre vrai et faux, réel et fictif, est peut-être moins solide qu'on le croit.</p>
  <p class="resume-text">Borges a passé une grande partie de sa vie comme directeur de la Bibliothèque nationale d'Argentine. Il a perdu progressivement la vue et est devenu aveugle dans les années 1950 — une ironie douloureuse pour un homme qui avait fait de la lecture et de la bibliothèque le centre de sa vie. Il écrivait alors de mémoire et dictait ses textes. La cécité ne l'a pas arrêté : il dit avoir reçu "deux dons à la fois : 800 000 volumes et l'obscurité".</p>

  <h3>L'héritage de Borges</h3>
  <p class="resume-text">L'influence de Borges sur la littérature mondiale est difficile à surestimer. Il a inventé le postmodernisme avant que le terme existe. Umberto Eco reconnaît sa dette directe pour <em>Le Nom de la rose</em> (1980). Italo Calvino aurait été un autre écrivain sans Borges. Gabriel García Márquez dit qu'il a découvert ce qu'il voulait faire en lisant Kafka — mais c'est Borges qui a ouvert la possibilité latinoaméricaine. Paul Auster, Don DeLillo, Haruki Murakami, Salman Rushdie — tous portent la trace de Borges dans leur manière d'utiliser la fiction comme espace de pensée philosophique.</p>
  <div class="highlight-box">
    <p><strong>Borges et le Nobel :</strong> Borges n'a jamais reçu le prix Nobel de littérature, ce qui est considéré par beaucoup comme l'une des grandes injustices de l'Académie suédoise. Il reste le plus grand écrivain sans Nobel du XXe siècle — ce qui lui a peut-être valu une forme d'immortalité plus durable. La formule borgésienne s'applique ici aussi : l'absence d'une reconnaissance officielle peut être plus signifiante que sa présence.</p>
  </div>
</section>"""

# ── LESSON 5 : García Márquez et le réalisme magique ──────────────────────────
garcia_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>García Márquez et le réalisme magique</h2>
      <p>Cent ans de solitude et la naissance d'un continent littéraire</p>
    </div>
  </div>
  <p class="resume-text">Gabriel García Márquez (1927-2014), surnommé "Gabo", est le plus célèbre des écrivains latino-américains et l'un des romanciers les plus lus du XXe siècle. Né à Aracataca, un petit village de la côte caraïbe colombienne, il est élevé par ses grands-parents maternels dans une maison pleine de fantômes, de légendes et de raconteurs d'histoires. Cette enfance dans la culture orale caraïbe, où les morts revenaient visiter les vivants et où les coïncidences stupéfiantes étaient acceptées comme des faits normaux, nourrit directement son esthétique du réalisme magique.</p>
  <div class="highlight-box">
    <p><strong>La révélation de Kafka :</strong> García Márquez raconte que la révélation littéraire de sa vie a eu lieu à 17 ans en lisant l'ouverture de <em>La Métamorphose</em> de Kafka — "Quand Grégoire Samsa s'éveilla un matin après des rêves agités, il se retrouva dans son lit changé en un monstrueux insecte." "Je ne savais pas qu'on avait le droit d'écrire ainsi", dit-il. Il comprend alors que la fiction peut dire ce que la réalité refuse de dire — et que le merveilleux peut être raconté avec le même ton neutre, factuel, que l'ordinaire.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>L'œuvre de García Márquez</h2>
      <p>Macondo, le réalisme magique et au-delà</p>
    </div>
  </div>

  <h3>Cent ans de solitude (1967)</h3>
  <p class="resume-text"><em>Cent ans de solitude</em> est le roman fondateur du réalisme magique et l'un des romans les plus vendus et les plus traduits de l'histoire (plus de 50 millions d'exemplaires, traduit en 46 langues). Il narre l'histoire de six générations de la famille Buendía dans le village fictif de Macondo, depuis sa fondation par José Arcadio Buendía jusqu'à sa destruction finale par un ouragan. Le roman est à la fois une saga familiale, une allégorie de l'histoire de la Colombie et de l'Amérique latine, et un conte mythologique qui mêle le quotidien et le merveilleux sans la moindre transition.</p>
  <p class="resume-text">La célèbre phrase d'ouverture — "Bien des années plus tard, face au peloton d'exécution, le colonel Aureliano Buendía devait se rappeler cet après-midi lointain où son père l'avait emmené découvrir la glace" — est souvent citée comme la meilleure première phrase de l'histoire du roman. Elle installe d'emblée plusieurs temporalités, un personnage, une tension narrative, et un détail magiquement banal (la découverte de la glace comme miracle).</p>
  <p class="resume-text">Macondo est à la fois un lieu géographique précis et une métaphore de l'Amérique latine tout entière : fondé par des idéalistes, contaminé par la modernité (la compagnie bananière, métaphore du colonialisme économique), traversé par des guerres civiles répétitives et absurdes, et finalement condamné par la répétition infinie de ses propres erreurs. Les Buendía répètent les mêmes prénoms — Aureliano, José Arcadio — et les mêmes fautes de génération en génération.</p>
  <div class="highlight-box">
    <p><strong>Le réalisme magique en pratique :</strong> Dans le roman, il pleut des fleurs jaunes quand Aureliano meurt. Une femme monte au ciel en faisant sa lessive. Le sang d'un homme tué coule dans les rues jusqu'à la maison de sa mère pour lui annoncer sa mort. Personne dans le roman ne s'étonne de ces événements — ils sont racontés avec la même précision factuelle que les prix du marché ou les événements politiques. C'est cet équilibre de ton — l'extraordinaire traité comme ordinaire — qui définit le réalisme magique.</p>
  </div>

  <h3>L'Amour aux temps du choléra (1985)</h3>
  <p class="resume-text"><em>L'Amour aux temps du choléra</em> est le roman le plus romantique de García Márquez. Florentino Ariza attend Fermina Daza pendant 51 ans, 9 mois et 4 jours. Quand le mari de Fermina meurt enfin, Florentino lui déclare son amour — et elle, qui ne l'a jamais aimé, commence par le rejeter. Le roman est une méditation sur la persistance du désir, la différence entre l'amour romantique et l'amour vrai, et la vieillesse comme territoire de l'expérience. García Márquez dit avoir inspiré ce roman de la romance de ses propres parents.</p>

  <h3>Le Colonel n'a personne à qui écrire (1961)</h3>
  <p class="resume-text">Ce roman court est peut-être le plus pur et le plus dépouillé de García Márquez. Un vieux colonel attend depuis quinze ans une lettre qui lui accordera sa pension militaire. Elle ne vient jamais. Chaque vendredi, il va au bureau de poste. Chaque vendredi, il repart les mains vides. Sa femme malade est désespérée ; ils n'ont rien à manger. La dernière phrase — quand la femme demande ce qu'ils vont manger, le colonel répond : "De la merde" — est l'une des plus puissantes clausules de la littérature hispanique. La résistance absurde du colonel à la résignation est à la fois comique, tragique et héroïque.</p>

  <h3>Les origines du réalisme magique</h3>
  <p class="resume-text">Le réalisme magique n'a pas été inventé par García Márquez seul. Ses précurseurs immédiats sont <strong>Juan Rulfo</strong> (Mexique), dont <em>Pedro Páramo</em> (1955) — un homme qui arrive dans un village fantôme pour chercher son père, et se retrouve parmi les morts — est la source directe que García Márquez cite ; <strong>Alejo Carpentier</strong> (Cuba), qui forge la notion de "merveilleux réel" ("lo real maravilloso") ; et <strong>Miguel Ángel Asturias</strong> (Guatemala, Nobel 1967), qui mêle mythologie maya et réalité politique.</p>
  <p class="resume-text">Au-delà de l'Amérique latine, le réalisme magique a des précédents dans la tradition orale africaine, les contes folkloriques européens et le surréalisme. Ce qui est spécifique au réalisme magique latinoaméricain, c'est son ancrage dans une réalité historique et politique précise — il ne s'agit pas d'échapper à la réalité, mais de la dire autrement, avec les outils de la culture populaire et des traditions orales.</p>

  <h3>L'influence mondiale du réalisme magique</h3>
  <p class="resume-text"><strong>Salman Rushdie</strong> (<em>Les Enfants de minuit</em>, 1981) applique le réalisme magique à l'histoire de l'Inde indépendante. <strong>Toni Morrison</strong> (<em>Beloved</em>, 1987) introduit le surnaturel dans le récit de l'esclavage américain. <strong>Isabel Allende</strong> (<em>La Maison aux esprits</em>, 1982) est souvent appelée "la García Márquez féminine". <strong>Haruki Murakami</strong> crée un réalisme magique japonais, plus urbain et mélancolique. <strong>Ben Okri</strong> (<em>La Route de la faim</em>, 1991, Booker Prize) apporte la tradition yoruba nigériane dans le réalisme magique.</p>

  <h3>García Márquez et le journalisme</h3>
  <p class="resume-text">García Márquez a été journaliste toute sa vie — il considérait le journalisme et la littérature comme deux formes du même art. Son reportage <em>Récit d'un naufragé</em> (1955) est un chef-d'œuvre de narrative non-fiction. Il a contribué à inventer le "nouveau journalisme" en Amérique latine — un journalisme littéraire où le récit prime sur la neutralité froide des faits.</p>
  <p class="resume-text">Cette formation journalistique explique la précision quasi-documentaire avec laquelle il décrit les événements les plus fantastiques dans ses romans : il ne décrit pas la magie d'une façon vague et brumeuse, mais avec des détails précis, concrets, presque bureaucratiques. "La beauté de ce procédé, disait-il, c'est que plus c'est invraisemblable, plus ça doit être dit avec un visage de pierre."</p>

  <div class="highlight-box">
    <p><strong>Le Nobel et l'engagement politique :</strong> García Márquez reçoit le prix Nobel de littérature en 1982. Dans son discours de réception, "La Solitude de l'Amérique latine", il évoque les tragédies politiques du continent — dictatures, disparitions, pauvreté — et appelle à un droit égal pour l'Amérique latine de "définir sa propre réalité". Il était ami proche de Fidel Castro, position controversée qui lui valut des critiques, mais aussi de nombreux dirigeants progressistes latino-américains. Son engagement politique était inséparable de son œuvre littéraire.</p>
  </div>
</section>"""

# ── LESSON 6 : Littérature japonaise classique ─────────────────────────────────
japon_content = """<section class="content-section" id="introduction">
  <div class="section-header">
    <div class="section-num">01</div>
    <div class="section-info">
      <h2>Littérature japonaise classique</h2>
      <p>Du Dit du Genji aux haïkus de Bashō — mille ans d'esthétique de l'éphémère</p>
    </div>
  </div>
  <p class="resume-text">La littérature japonaise classique est l'une des plus raffinées et des plus influentes du monde. Elle s'étend sur plus d'un millénaire — des premières anthologies poétiques du VIIIe siècle au roman de cour de l'époque Heian, du théâtre Nō médiéval aux haïkus du XVIIe siècle — et développe des esthétiques d'une originalité absolue. Trois concepts fondamentaux traversent cette tradition : <em>mono no aware</em> (la sensibilité émouvante des choses éphémères), <em>wabi-sabi</em> (la beauté de l'imperfection et de l'impermanence) et <em>ma</em> (l'espace vide chargé de sens).</p>
  <div class="highlight-box">
    <p><strong>Une esthétique du silence et de l'éphémère :</strong> Là où la littérature occidentale classique valorise souvent la grandeur, la permanence et la clarté, la tradition japonaise cultive la suggestion, l'ombre, le transitoire. Bashō, le maître du haïku, dit que son art est "l'art de transformer les dix mille choses en un seul instant". Un poème de 17 syllabes contient tout l'univers — non pas en le décrivant, mais en laissant le lecteur le compléter avec sa propre sensibilité.</p>
  </div>
</section>

<section class="content-section" id="contenu">
  <div class="section-header">
    <div class="section-num">02</div>
    <div class="section-info">
      <h2>Les grandes œuvres classiques</h2>
      <p>Poésie de cour, roman Heian, théâtre Nō et haïku</p>
    </div>
  </div>

  <h3>Les premières anthologies poétiques</h3>
  <p class="resume-text">La plus ancienne anthologie poétique japonaise est le <strong>Man'yōshū</strong> ("Recueil des dix mille feuilles", vers 759), qui rassemble 4 516 poèmes en japonais ancien. Contrairement aux textes chinois qui dominaient la culture lettrée de l'époque, le Man'yōshū est entièrement en japonais, et ses poèmes — élégies, poèmes d'amour, chants de voyage — expriment une sensibilité directe et sincère. Poètes de toutes classes sociales y figurent, de l'empereur aux gardes-frontières, ce qui en fait un document social remarquable autant qu'un monument littéraire.</p>
  <p class="resume-text">Le <strong>Kokinshū</strong> ("Recueil des poèmes anciens et modernes", 905), première anthologie impériale, codifie les conventions du <em>waka</em> — poème de 31 syllabes (5-7-5-7-7) — et impose une esthétique de la suggestion, de la saison et de l'émotion délicate qui dominera la poésie japonaise pendant des siècles. Le <em>mono no aware</em> — la mélancolie douce devant la beauté des choses passagères, typiquement les fleurs de cerisier qui tombent — est le sentiment dominant.</p>

  <h3>Le Dit du Genji — le premier roman du monde</h3>
  <p class="resume-text"><em>Le Dit du Genji</em> (Genji monogatari, vers 1008-1010) est considéré comme le premier roman psychologique de l'histoire mondiale. Écrit par <strong>Murasaki Shikibu</strong>, dame de compagnie à la cour impériale de Heian (actuel Kyoto), il raconte la vie, les amours et les aventures du prince Hikaru Genji — "Genji le Brillant" — fils illégitime de l'Empereur, dont la beauté et le talent sont incomparables mais dont la naissance l'exclut de la succession au trône.</p>
  <p class="resume-text">Le roman est d'abord une exploration psychologique d'une finesse extraordinaire. Murasaki Shikibu décrit les états intérieurs de ses personnages — leurs hésitations, leurs contradictions, leurs non-dits — avec une précision et une nuance que le roman européen n'atteindra pas avant plusieurs siècles. La relation de Genji avec les différentes femmes de sa vie est d'une complexité psychologique moderne : la Lady Rokujo dont l'esprit jaloux sort de son corps pour hanter ses rivales ; la jeune Murasaki qu'il élève pour en faire la femme parfaite ; la Troisième Princesse dont le mariage avec Genji dans sa vieillesse révèle sa fragilité.</p>
  <div class="highlight-box">
    <p><strong>La structure du Genji :</strong> Le roman compte 54 chapitres et environ 1 000 pages dans les traductions modernes. Les 33 premiers chapitres narrent la vie de Genji à l'apogée de sa beauté et de sa gloire. Les chapitres 34 à 41 décrivent son déclin et sa mort (qui n'est pas décrite directement — le chapitre s'appelle simplement "Vide"). Les 13 derniers chapitres suivent la génération suivante, dans une atmosphère plus sombre et plus austère. Ce triptyque temporal — gloire, déclin, vide — incarne le <em>mono no aware</em> à l'échelle d'une vie entière.</p>
  </div>

  <h3>Notes de chevet — Sei Shōnagon</h3>
  <p class="resume-text">Contemporaine de Murasaki Shikibu, <strong>Sei Shōnagon</strong> est l'autre grande voix littéraire de l'époque Heian. Ses <em>Notes de chevet</em> (Makura no Sōshi, vers 1002) sont un journal intime ou essai personnel — un genre qu'elle invente en japonais — mêlant observations de la vie à la cour, listes poétiques ("choses qui font battre le cœur", "choses embarrassantes", "choses élégantes"), réflexions et anecdotes. Son style est vif, ironique et direct, à l'opposé de la mélancolie de Murasaki. Les <em>Notes de chevet</em> créent le genre du <em>zuihitsu</em> (prose d'idées vagabondes) qui perdurera dans la littérature japonaise.</p>

  <h3>Le théâtre Nō</h3>
  <p class="resume-text">Le théâtre <strong>Nō</strong> (ou Noh) est une forme théâtrale développée au XIVe siècle par <strong>Zeami Motokiyo</strong> (1363-1443) sous le patronage du shogun Ashikaga Yoshimitsu. C'est un théâtre de la suggestion et du ralentissement : les mouvements sont lents et codifiés, les masques expressifs dans leur immobilité, la musique ponctuée de silences. Les pièces de Nō racontent souvent l'histoire d'un voyageur qui rencontre un fantôme — un esprit qui ne peut pas quitter ce monde parce qu'il est attaché à une passion trop forte (jalousie, amour, orgueil).</p>
  <p class="resume-text">Le concept central du Nō est le <em>yūgen</em> — une beauté mystérieuse et sombre, l'émotion qui se cache sous la surface des choses et qu'on ne peut qu'entrevoir, jamais saisir complètement. Zeami définit le <em>yūgen</em> comme "l'impression que laisse un vol de cygnes blancs qui disparaissent derrière des nuages lointains". Le Nō est aussi un théâtre de la mémoire : les fantômes rejouent les moments qui les ont enchaînés à ce monde, cherchant à comprendre et à se libérer.</p>

  <h3>Le haïku et Matsuo Bashō</h3>
  <p class="resume-text">Le <strong>haïku</strong> est la forme poétique la plus universellement connue de la tradition japonaise. Né de la tradition du <em>haïkaï no renga</em> (poésie enchaînée comique), il se cristallise au XVIIe siècle avec <strong>Matsuo Bashō</strong> (1644-1694) en une forme autonome de 17 syllabes (5-7-5) qui capte un instant d'expérience sensorielle, souvent lié à la nature et aux saisons, créant une image qui déclenche une résonance émotionnelle et philosophique chez le lecteur.</p>
  <p class="resume-text">Le haïku le plus célèbre de Bashō — "Le vieux vivier — / Une grenouille plonge / Bruit de l'eau" — illustre les principes fondamentaux de la forme : la <em>kigo</em> (le mot de saison : ici "grenouille", saison de printemps), le <em>kireji</em> (la coupe : ici le "ya" après "vivier"), et le contraste entre le silence éternel du vieux vivier et le bruit fugace de la grenouille qui crée et dissout ce silence. Le haïku ne dit pas que le monde est silencieux : il crée le silence en le rompant.</p>
  <p class="resume-text"><em>La Sente étroite du bout du monde</em> (Oku no Hosomichi, 1694) est le chef-d'œuvre en prose de Bashō — un journal de voyage dans le nord du Japon, alternant prose poétique et haïkus. Bashō y développe le concept de <em>sabi</em> — une beauté solitaire, mélancolique, qui naît de l'isolement et du temps qui passe. Le voyage lui-même est une métaphore de la vie et de la mort : "Chaque jour est un voyage, et le voyage lui-même est demeure."</p>

  <h3>Les autres maîtres du haïku</h3>
  <p class="resume-text">Les autres grands maîtres du haïku après Bashō sont <strong>Yosa Buson</strong> (1716-1784), peintre-poète dont les haïkus ont une qualité visuelle et picturale prononcée, et <strong>Kobayashi Issa</strong> (1763-1828), dont les haïkus expriment une tendresse et une compassion particulières envers les petites créatures et les humbles. Issa, dont la vie fut marquée par les deuils (plusieurs enfants morts en bas âge, deux femmes), a laissé un journal intime d'une humanité bouleversante. Son haïku le plus célèbre : "Ce monde de rosée / N'est qu'un monde de rosée — / Et pourtant... et pourtant..."</p>
  <p class="resume-text">Au XIXe et début du XXe siècle, <strong>Masaoka Shiki</strong> (1867-1902) réforme le haïku — il forge d'ailleurs le mot "haïku" pour distinguer la forme autonome du haïkaï lié — et l'ouvre à des thèmes plus modernes et à une plus grande liberté thématique. Shiki, mort de la tuberculose à 34 ans, laisse aussi une œuvre poétique considérable en <em>tanka</em> (poème de 31 syllabes).</p>

  <h3>L'héritage de la tradition classique</h3>
  <p class="resume-text">Les concepts esthétiques de la tradition classique — <em>mono no aware</em>, <em>wabi-sabi</em>, <em>yūgen</em>, <em>ma</em> — continuent de structurer la sensibilité japonaise contemporaine. Kawabata, Mishima, Murakami héritent tous, à des degrés divers, de cette esthétique de l'éphémère, du non-dit et de la suggestion. La forme du haïku a influencé Ezra Pound et l'Imagisme (le poème "In a Station of the Metro" est un haïku anglais), les poètes Beat américains (Kerouac), et continue d'être pratiquée par des millions de personnes dans le monde entier.</p>

  <div class="highlight-box">
    <p><strong>Wabi-sabi — l'esthétique de l'imperfection :</strong> Le <em>wabi-sabi</em> est l'esthétique japonaise qui célèbre l'imperfection, l'impermanence et l'inachèvement. Un bol de thé avec une fissure est plus beau qu'un bol parfait, parce qu'il porte la trace du temps et de l'usage. Une branche cassée dans un jardin zen a plus de présence qu'une branche intacte. Cette esthétique est l'opposé direct de la perfection formelle classique occidentale — et elle a profondément influencé l'architecture, le design, la cuisine et les arts visuels bien au-delà du Japon.</p>
  </div>
</section>"""

# Add all lessons to the data
lessons = {
    "anglophone/shakespeare": {
        "type": "course",
        "title": "Shakespeare et le théâtre élisabéthain",
        "content": shakespeare_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "Shakespeare et le théâtre élisabéthain",
                "contenu": "L'œuvre de Shakespeare"
            },
            "siblings": [
                {"slug": "litterature-monde/anglophone", "title": "← Littérature anglophone"},
                {"slug": "litterature-monde/anglophone/modernisme", "title": "Le modernisme anglophone"}
            ]
        },
        "description": "Hamlet, Macbeth, Le Songe d'une nuit d'été — le génie dramatique qui a inventé l'anglais moderne et posé les bases du théâtre occidental.",
        "domain": "📖 Littérature mondiale",
        "level": "Débutant → Intermédiaire",
        "time": "⏱ ~30 min",
        "heroDesc": "De Hamlet à Macbeth, des sonnets à La Tempête — l'œuvre de Shakespeare, son contexte élisabéthain et son héritage universel.",
        "heroVariant": "course",
        "heroH1": "<em>Shakespeare</em> et le théâtre élisabéthain",
        "accentHero": "rgba(155,122,232,0.07)"
    },
    "anglophone/modernisme": {
        "type": "course",
        "title": "Le modernisme anglophone",
        "content": modernisme_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "Le modernisme anglophone",
                "contenu": "Les grandes figures du modernisme"
            },
            "siblings": [
                {"slug": "litterature-monde/anglophone", "title": "← Littérature anglophone"},
                {"slug": "litterature-monde/anglophone/shakespeare", "title": "Shakespeare"}
            ]
        },
        "description": "Joyce, Woolf, Eliot, Faulkner — la révolution du flux de conscience, de la fragmentation narrative et du temps psychologique au début du XXe siècle.",
        "domain": "📖 Littérature mondiale",
        "level": "Intermédiaire → Avancé",
        "time": "⏱ ~35 min",
        "heroDesc": "Joyce, Woolf, Eliot, Faulkner — la révolution des formes narratives au XXe siècle : flux de conscience, fragmentation et modernité.",
        "heroVariant": "course",
        "heroH1": "Le <em>modernisme</em> anglophone",
        "accentHero": "rgba(155,122,232,0.07)"
    },
    "russe/dostoievski": {
        "type": "course",
        "title": "Dostoïevski — les abîmes de la conscience",
        "content": dostoievski_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "Dostoïevski — les abîmes",
                "contenu": "L'œuvre de Dostoïevski"
            },
            "siblings": [
                {"slug": "litterature-monde/russe", "title": "← Littérature russe"}
            ]
        },
        "description": "Crime et Châtiment, Les Frères Karamazov — la descente dans les abîmes de la conscience humaine et les grandes questions morales de l'existence.",
        "domain": "📖 Littérature mondiale",
        "level": "Intermédiaire → Avancé",
        "time": "⏱ ~35 min",
        "heroDesc": "Crime et Châtiment, L'Idiot, Les Frères Karamazov — Dostoïevski et son exploration sans équivalent des abîmes de la conscience humaine.",
        "heroVariant": "course",
        "heroH1": "<em>Dostoïevski</em> — les abîmes",
        "accentHero": "rgba(155,122,232,0.07)"
    },
    "latino-americaine/borges": {
        "type": "course",
        "title": "Borges et la fiction métaphysique",
        "content": borges_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "Borges et la fiction métaphysique",
                "contenu": "L'univers de Borges"
            },
            "siblings": [
                {"slug": "litterature-monde/latino-americaine", "title": "← Littérature latino-américaine"},
                {"slug": "litterature-monde/latino-americaine/garcia-marquez", "title": "García Márquez"}
            ]
        },
        "description": "Fictions, L'Aleph, La Bibliothèque de Babel — les labyrinthes, les miroirs et les bibliothèques infinies du génie argentin qui a inventé le postmodernisme.",
        "domain": "📖 Littérature mondiale",
        "level": "Intermédiaire → Avancé",
        "time": "⏱ ~30 min",
        "heroDesc": "Fictions, L'Aleph, le Jardin aux sentiers qui bifurquent — Borges et l'invention d'une fiction métaphysique qui a transformé la littérature mondiale.",
        "heroVariant": "course",
        "heroH1": "<em>Borges</em> et la fiction métaphysique",
        "accentHero": "rgba(155,122,232,0.07)"
    },
    "latino-americaine/garcia-marquez": {
        "type": "course",
        "title": "García Márquez et le réalisme magique",
        "content": garcia_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "García Márquez et le réalisme magique",
                "contenu": "L'œuvre de García Márquez"
            },
            "siblings": [
                {"slug": "litterature-monde/latino-americaine", "title": "← Littérature latino-américaine"},
                {"slug": "litterature-monde/latino-americaine/borges", "title": "Borges"}
            ]
        },
        "description": "Cent ans de solitude, L'Amour aux temps du choléra — García Márquez et la naissance du réalisme magique latino-américain qui a conquis le monde.",
        "domain": "📖 Littérature mondiale",
        "level": "Débutant → Intermédiaire",
        "time": "⏱ ~30 min",
        "heroDesc": "Cent ans de solitude, L'Amour aux temps du choléra — García Márquez, Macondo et le réalisme magique qui a transformé la littérature mondiale.",
        "heroVariant": "course",
        "heroH1": "<em>García Márquez</em> et le réalisme magique",
        "accentHero": "rgba(155,122,232,0.07)"
    },
    "asiatique/japon-classique": {
        "type": "course",
        "title": "Littérature japonaise classique",
        "content": japon_content,
        "nav": {
            "sections": ["introduction", "contenu"],
            "sectionTitles": {
                "introduction": "Littérature japonaise classique",
                "contenu": "Les grandes œuvres classiques"
            },
            "siblings": [
                {"slug": "litterature-monde/asiatique", "title": "← Littérature asiatique"}
            ]
        },
        "description": "Le Dit du Genji, les haïkus de Bashō, le théâtre Nō — l'esthétique japonaise du mono no aware, du wabi-sabi et de la beauté de l'éphémère.",
        "domain": "📖 Littérature mondiale",
        "level": "Débutant → Intermédiaire",
        "time": "⏱ ~30 min",
        "heroDesc": "Le Dit du Genji, les haïkus de Bashō, le théâtre Nō — l'esthétique japonaise de l'éphémère et de la suggestion sur un millénaire.",
        "heroVariant": "course",
        "heroH1": "Littérature japonaise <em>classique</em>",
        "accentHero": "rgba(155,122,232,0.07)"
    }
}

for key, value in lessons.items():
    data["pages"][key] = value

with open(f"{BASE}/assets/content/litterature-monde.json", "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done. Pages added:")
for key, val in lessons.items():
    print(f"  {key}: {len(val['content'])} chars")
