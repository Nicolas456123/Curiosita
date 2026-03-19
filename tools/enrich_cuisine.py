import json, re, sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/cuisine.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# =====================================================================
# NEW CONTENU SECTIONS — course-content body only
# =====================================================================

new_contenu = {}

# -----------------------------------------------------------------------
# techniques/conservation
# -----------------------------------------------------------------------
new_contenu['techniques/conservation'] = """<h3>Pourquoi conserver les aliments ?</h3>
<p class="resume-text">La conservation des aliments répond à deux impératifs fondamentaux : la <strong>sécurité sanitaire</strong> (empêcher la prolifération des micro-organismes pathogènes) et la <strong>durabilité économique</strong> (limiter le gaspillage en prolongeant la vie des denrées). L'histoire de l'alimentation humaine est indissociable de l'histoire de la conservation : le séchage au soleil, le salage et la fermentation sont parmi les plus vieilles technologies de l'humanité.</p>
<div class="highlight-box"><p><strong>Principe clé :</strong> Tout procédé de conservation agit sur au moins l'un des quatre facteurs favorisant la prolifération microbienne : la <em>température</em>, l'<em>activité de l'eau</em> (aw), le <em>pH</em> et la <em>disponibilité en oxygène</em>.</p></div>

<h3>Le froid : réfrigération et congélation</h3>
<p>Le froid ralentit les réactions enzymatiques et la multiplication bactérienne sans les supprimer entièrement. La <strong>réfrigération</strong> (0 °C à 4 °C) conserve les aliments quelques jours à quelques semaines selon leur nature. La <strong>congélation</strong> (−18 °C ou moins) suspend pratiquement toute activité biologique, permettant une conservation de plusieurs mois voire années.</p>
<p>La qualité de la décongélation est aussi importante que la congélation elle-même : une décongélation rapide à température ambiante favorise la prolifération bactérienne. Le protocole recommandé est une décongélation lente au réfrigérateur (+ 4 °C), qui préserve la texture et minimise les risques sanitaires.</p>
<div class="highlight-box"><p><strong>Surgélation vs congélation :</strong> La surgélation industrielle descend très rapidement à −40 °C, formant de micro-cristaux de glace qui n'abîment pas les cellules. La congélation domestique, plus lente, crée de gros cristaux qui percent les membranes cellulaires et modifient la texture à la décongélation — phénomène particulièrement visible dans les légumes ou les fraises.</p></div>

<h3>La chaleur : stérilisation et pasteurisation</h3>
<p>La chaleur détruit les micro-organismes et inactive les enzymes. La <strong>pasteurisation</strong> (60 °C à 100 °C pendant un temps variable) élimine les agents pathogènes mais laisse subsister certains spores et bactéries thermorésistantes ; elle doit être associée à une chaîne du froid. La <strong>stérilisation</strong> (121 °C pendant 15 minutes minimum en autoclave) détruit l'ensemble des micro-organismes y compris les spores de <em>Clostridium botulinum</em>, permettant une conservation à température ambiante.</p>
<p>En cuisine domestique, la mise en conserve artisanale (bocaux stérilisés) repose sur ce principe. Une stérilisation insuffisante expose au botulisme, intoxication grave et parfois mortelle.</p>

<h3>La fermentation : une alliée millénaire</h3>
<p>La fermentation exploite des micro-organismes bénéfiques (bactéries lactiques, levures, moisissures) pour transformer les sucres et inhiber les pathogènes. Elle abaisse le pH (acidification lactique), consomme l'oxygène disponible et produit des métabolites antimicrobiens (acide lactique, alcool, bactériocines).</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🧀</div>
  <div class="concept-name">Fermentation lactique</div>
  <div class="concept-desc">Yaourt, choucroute, cornichons, fromages : les bactéries lactiques (Lactobacillus) produisent de l'acide lactique qui acidifie et conserve</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍷</div>
  <div class="concept-name">Fermentation alcoolique</div>
  <div class="concept-desc">Vin, bière, cidre : les levures (Saccharomyces) transforment les sucres en alcool éthylique et CO₂, milieu défavorable aux bactéries</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🫙</div>
  <div class="concept-name">Fermentation acétique</div>
  <div class="concept-desc">Vinaigre : des bactéries acétiques (Acetobacter) oxydent l'alcool en acide acétique, excellent conservateur naturel</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍣</div>
  <div class="concept-name">Fermentation mixte</div>
  <div class="concept-desc">Miso, sauce soja, charcuteries fermentées : multiples fermentations successives créant des profils aromatiques complexes</div>
</div>
</div>

<h3>Le séchage et la déshydratation</h3>
<p>Réduire l'<strong>activité de l'eau</strong> (aw) en dessous de 0,6 rend le milieu inhospitalier pour presque tous les micro-organismes. Le séchage traditionnel (soleil, air chaud) a conservé morues, viandes, herbes et fruits depuis des millénaires. La <strong>déshydratation industrielle</strong> utilise des fours à air chaud, des séchoirs à tambour ou la <strong>lyophilisation</strong> (sublimation de l'eau sous vide à basse température), qui préserve les nutriments, les arômes et la structure cellulaire.</p>
<p>En cuisine, les techniques de séchage incluent : le confitage (cuisson dans la graisse qui expulse l'eau et remplace la phase aqueuse), le fumage (combinaison séchage + dépôt de composés antimicrobiens), et le salage (sel osmotique qui extrait l'eau cellulaire).</p>

<h3>La conservation sous atmosphère modifiée et le sous-vide</h3>
<p>Le conditionnement sous vide (<strong>sous-vide</strong>) élimine l'oxygène, inhibant les bactéries aérobies et les processus d'oxydation (rancissement, brunissement enzymatique). Associé à une réfrigération, il multiplie par 2 à 5 la durée de conservation.</p>
<p>L'<strong>atmosphère contrôlée</strong> (MAP — Modified Atmosphere Packaging) remplace l'air par un mélange de CO₂, N₂ et parfois O₂ adapté au produit. Elle est omniprésente dans les emballages de salades prêtes à l'emploi, viandes fraîches et fruits de mer.</p>
<div class="highlight-box"><p><strong>Cuisson sous-vide :</strong> La technique de cuisson sous-vide à basse température (60–85 °C) combine conservation et cuisson de précision. Les aliments sont scellés sous vide dans des sachets, puis immergés dans un bain d'eau à température contrôlée. Le résultat est une cuisson homogène à cœur, idéale pour les viandes, poissons et légumes délicats.</p></div>

<h3>Les additifs conservateurs</h3>
<p>L'industrie alimentaire utilise des conservateurs chimiques homologués pour compléter les procédés physiques. Parmi les plus courants :</p>
<ul>
<li><strong>Sel (NaCl)</strong> : abaisse l'aw, inhibe les bactéries. Saumures, charcuteries, fromages.</li>
<li><strong>Sucre</strong> : même mécanisme osmotique. Confitures, sirops, fruits confits.</li>
<li><strong>Acide citrique et acide ascorbique</strong> : acidification + antioxydant. Conserves de fruits, jus.</li>
<li><strong>Nitrites (E249-E252)</strong> : inhibition du botulisme dans les charcuteries. Dose strictement réglementée.</li>
<li><strong>Anhydride sulfureux (E220)</strong> : antiseptique et antioxydant dans les vins et fruits secs.</li>
</ul>

<h3>Synthèse et bonnes pratiques</h3>
<p>Une bonne politique de conservation repose sur la <strong>chaîne du froid</strong> ininterrompue, le respect des DLC (Date Limite de Consommation) et des DLUO (Date Limite d'Utilisation Optimale), et la combinaison intelligente de plusieurs méthodes (ex. : sous-vide + réfrigération, fermentation + pasteurisation douce). La compréhension de ces mécanismes est indispensable aussi bien en cuisine professionnelle qu'à domicile pour concilier sécurité alimentaire et qualité gustative.</p>"""

# -----------------------------------------------------------------------
# patisserie/creative
# -----------------------------------------------------------------------
new_contenu['patisserie/creative'] = """<h3>La pâtisserie créative : art et technique réunis</h3>
<p class="resume-text">La pâtisserie contemporaine a connu une véritable révolution esthétique et technique au tournant du XXIe siècle. Des chefs comme <strong>Pierre Hermé</strong>, <strong>Cédric Grolet</strong> ou <strong>Cyril Lignac</strong> ont transformé le gâteau en objet d'art total, où la forme, la couleur, la texture et la saveur sont pensées comme un tout cohérent. La pâtisserie créative ne rejette pas la tradition — elle en maîtrise tous les fondamentaux avant de les transcender.</p>
<div class="highlight-box"><p><strong>Principe fondateur :</strong> La créativité en pâtisserie s'appuie toujours sur une maîtrise technique rigoureuse. Innover sans comprendre les réactions chimiques des ingrédients conduit à l'échec. La créativité est l'enfant de la technique, non son contraire.</p></div>

<h3>L'entremets : structure et composition</h3>
<p>L'entremets est l'expression la plus accomplie de la pâtisserie créative. Il se compose d'un empilement de couches aux textures contrastées, chaque élément jouant un rôle précis :</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🍰</div>
  <div class="concept-name">Biscuit</div>
  <div class="concept-desc">Base structurante : génoise, dacquoise, financier, brownie, croustillant feuilletine. Apporte mâche et contraste</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🫐</div>
  <div class="concept-name">Insert</div>
  <div class="concept-desc">Couche centrale surprenante : confit de fruit, gelée, crémeux, praliné coulant. Révélé à la découpe</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌊</div>
  <div class="concept-name">Mousse</div>
  <div class="concept-desc">Couche aérienne principale : mousse chocolat, bavaroise aux fruits, mousse au praliné. Légèreté et onctuosité</div>
</div>
<div class="concept-card">
  <div class="concept-icon">✨</div>
  <div class="concept-name">Glaçage</div>
  <div class="concept-desc">Finition visuelle : glaçage miroir, velours, spray coloré, flocage. Premier signal visuel qui crée le désir</div>
</div>
</div>
<p>La réussite d'un entremets tient à l'équilibre des saveurs (acidité/sucre/amertume/gras), des textures (croquant/fondant/crémeux/aérien) et des températures de dégustation. Chaque recette est une partition où chaque voix doit être audible sans écraser les autres.</p>

<h3>Les techniques de décoration avancées</h3>
<p>La pâtisserie créative puise dans un répertoire technique vaste pour créer des finitions spectaculaires :</p>
<p><strong>Le glaçage miroir</strong> est composé de sirop de glucose, lait concentré sucré, gélatine, chocolat et colorants. Sa préparation requiert un thermomètre de précision (utilisation entre 32 °C et 35 °C) et une surface parfaitement congelée pour un effet lisse et brillant. Les colorants liposolubles ou hydrosolubles permettent une palette chromatique infinie.</p>
<p><strong>Le veloutage ou flocage</strong> utilise un mélange beurre de cacao + chocolat blanc coloré, projeté avec un pistolet à peinture sur un entremets congelé. Le choc thermique cristallise instantanément le mélange en une surface veloutée aux allures de fruit exotique.</p>
<p><strong>La sculpture sur sucre</strong> (tirage, soufflage) et le <strong>travail du chocolat</strong> (tempérage, moulage, transfert) exigent des années de pratique et un équipement spécialisé, mais restent accessibles à l'amateur averti dans leurs formes simplifiées.</p>

<h3>La pâtisserie moléculaire et contemporaine</h3>
<p>Influencée par la cuisine moléculaire développée par <strong>Ferran Adrià</strong> (elBulli) et <strong>Heston Blumenthal</strong> (The Fat Duck), la pâtisserie contemporaine intègre des techniques d'avant-garde :</p>
<ul>
<li><strong>Sphérification</strong> (alginate de sodium + chlorure de calcium) : crée des sphères à membrane liquide qui éclatent en bouche</li>
<li><strong>Espumas et mousses à l'azote liquide</strong> : textures ultra-légères obtenues sans gélatine ni crème fouettée</li>
<li><strong>Gélifiants alternatifs</strong> : agar-agar (gel thermoréversible résistant à la chaleur), carraghénanes, xanthane (liant sans gluten)</li>
<li><strong>Encapsulation d'arômes</strong> : micro-billes contenant des huiles essentielles ou des jus concentrés, libérés à la mastication</li>
</ul>
<div class="highlight-box"><p><strong>Pierre Hermé et l'"Ispahan" :</strong> Né en 1997, l'Ispahan est devenu l'emblème de la pâtisserie créative moderne. Cette combinaison rose/framboise/litchi illustre parfaitement la démarche de Hermé : partir d'une association aromatique surprenante mais cohérente, puis construire une pâtisserie qui la révèle dans toute sa complexité.</p></div>

<h3>Les tendances contemporaines</h3>
<p>La pâtisserie du XXIe siècle se caractérise par plusieurs mouvements de fond : la <strong>réduction du sucre</strong> (palais affinés, prévalence du diabète), le <strong>retour aux saveurs terroir</strong> (miel de producteur, fruits oubliés, céréales anciennes), la <strong>pâtisserie végane</strong> (substituts d'œufs et de produits laitiers) et la <strong>miniaturisation</strong> (bouchées, verrines, desserts individuels qui facilitent la dégustation de multiples créations).</p>
<p>Les réseaux sociaux ont profondément transformé la pâtisserie créative : l'esthétique "instagrammable" est devenue un critère de succès commercial, poussant les pâtissiers à innover visuellement de façon permanente. Cette pression peut conduire à privilégier l'apparence sur la saveur — une dérive que les meilleurs créateurs refusent en maintenant la primauté du goût.</p>

<h3>Maîtriser la pâtisserie créative : méthode</h3>
<p>Le parcours d'apprentissage recommandé suit une progression logique : (1) maîtrise des <em>pâtes fondamentales</em>, (2) maîtrise des <em>crèmes et appareils</em>, (3) compréhension du tempérage du chocolat, (4) premières mousses et entremets simples, (5) exploration des glaçages, (6) innovation personnelle. Chaque niveau nourrit le suivant. Les erreurs sont des informations : un glaçage qui coule révèle une température trop élevée ou une teneur en gélatine insuffisante.</p>"""

# -----------------------------------------------------------------------
# patisserie/pates
# -----------------------------------------------------------------------
new_contenu['patisserie/pates'] = """<h3>Les pâtes en pâtisserie : une taxonomie fondamentale</h3>
<p class="resume-text">Les pâtes constituent l'ossature de la pâtisserie. Avant même de parler de crèmes, de glaçages ou de décors, le pâtissier doit maîtriser les grandes familles de pâtes, comprendre leurs structures chimiques et biologiques, et développer le "tour de main" qui transforme des ingrédients en structures comestibles mémorables. Chaque pâte répond à une logique de construction différente.</p>
<div class="highlight-box"><p><strong>Le gluten, acteur central :</strong> La farine contient deux protéines (gluténine et gliadine) qui, mélangées avec de l'eau, forment le <em>gluten</em>, un réseau élastique et extensible. Plus on travaille une pâte, plus le réseau glutineux se développe — ce qui est souhaitable pour le pain mais nuisible pour la pâte sablée (qui doit rester friable).</p></div>

<h3>La pâte brisée</h3>
<p>La pâte brisée est la pâte à tarte de base, polyvalente, utilisée aussi bien pour les quiches salées que pour les tartes aux fruits. Sa composition : farine, beurre (sablage ou émiettement), sel, eau froide. La technique du <strong>sablage</strong> consiste à frotter rapidement le beurre froid dans la farine du bout des doigts pour enrober les grains d'amidon d'une pellicule grasse qui imperméabilise et limite le développement du gluten.</p>
<p>Deux erreurs classiques : trop travailler la pâte (gluten trop développé — pâte élastique qui rétrécit à la cuisson) et utiliser de l'eau trop chaude (beurre qui fond et perd sa fonction d'agent court). La pâte doit reposer au réfrigérateur au moins 30 minutes après son façonnage.</p>

<h3>La pâte feuilletée</h3>
<p>La pâte feuilletée est un prodige de la physique culinaire. Elle compte 729 couches (3⁶) dans sa version classique à 6 tours doubles, obtenues par un procédé de <strong>tourage</strong> : le beurre est enfermé dans la pâte de base (détrempe), puis le tout est étalé et plié répétitivement. À la cuisson, la vapeur d'eau produite par l'humidité du beurre soulève chaque couche en créant un feuilletage aérien.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🥐</div>
  <div class="concept-name">Feuilletée classique</div>
  <div class="concept-desc">6 tours simples ou 3 tours doubles. Utilisée pour les mille-feuilles, galettes des rois, vol-au-vent, palmiers</div>
</div>
<div class="concept-card">
  <div class="concept-icon">⚡</div>
  <div class="concept-name">Feuilletée rapide</div>
  <div class="concept-desc">Beurre en morceaux incorporé directement, sans tourage parfait. Feuilletage moins régulier mais acceptable pour usage domestique</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌿</div>
  <div class="concept-name">Feuilletée inversée</div>
  <div class="concept-desc">Détrempe de beurre enveloppant la pâte de farine. Feuilletage plus fragile et croustillant, prisé en haute pâtisserie</div>
</div>
<div class="concept-card">
  <div class="concept-icon">❄️</div>
  <div class="concept-name">Feuilletée levée</div>
  <div class="concept-desc">Croissant, pain au lait : détrempe enrichie en levure de boulangerie. Le tourage s'ajoute à la levée biologique</div>
</div>
</div>

<h3>La pâte sablée</h3>
<p>Plus riche en beurre et en sucre que la pâte brisée, la pâte sablée est caractérisée par sa texture friable et fondante. Le beurre pommade (ramolli) est crémé avec le sucre glace, puis l'œuf est ajouté avant la farine. Cette méthode dite <strong>crémeuse</strong> limite au maximum le développement du gluten en enrobant les particules de farine dès le début du mélange.</p>
<p>La pâte sucrée (variante avec plus de sucre et d'œuf) offre une texture plus fondante encore, idéale pour les tartelettes à garnir après cuisson à blanc. Le <em>fonçage</em> (tapissage du moule) et la <em>cuisson à blanc</em> (avec poids pour éviter que la pâte gonfle) sont des étapes techniques incontournables.</p>

<h3>La pâte à choux</h3>
<p>La pâte à choux est un cas unique : une pâte cuite deux fois. La première cuisson (eau + beurre + farine sur feu vif) gélatinise l'amidon de la farine (panade). Hors du feu, les œufs sont incorporés progressivement. À la cuisson au four, la vapeur d'eau contenue dans la pâte gonfle les choux en les creusant de l'intérieur.</p>
<div class="highlight-box"><p><strong>La consistance optimale :</strong> La pâte à choux doit former un "bec d'oiseau" (ruban qui tombe sans se casser) quand on soulève la spatule. Trop liquide : les choux s'étalent. Trop ferme : ils ne gonflent pas. La quantité d'œufs s'ajuste selon l'humidité de la panade.</p></div>
<p>Applications : éclairs, choux à la crème, profiteroles, religieuses, Paris-Brest, Saint-Honoré, croquembouche.</p>

<h3>La génoise et les biscuits battus</h3>
<p>La génoise est une pâte sans matière grasse incorporée, basée sur le foisonnement des œufs entiers chauffés avec le sucre (39-45 °C) puis fouettés longuement jusqu'au ruban. La farine est ensuite incorporée délicatement à la maryse pour ne pas faire retomber le foisonnement. Sa légèreté lui vient uniquement des bulles d'air emprisonnées lors du battage.</p>
<p>Variantes : <strong>biscuit cuillère</strong> (blancs et jaunes séparés, plus léger), <strong>biscuit Joconde</strong> (poudre d'amande, utilisé pour l'Opéra), <strong>biscuit dacquoise</strong> (poudre d'amande + meringue, sans farine, croustillant après refroidissement).</p>

<h3>Les pâtes levées : brioche et pain</h3>
<p>Les pâtes levées incorporent des levures biologiques (Saccharomyces cerevisiae) qui fermentent les sucres en produisant du CO₂ (gonflage) et de l'alcool (arômes). La <strong>brioche</strong> est une pâte levée enrichie en beurre (50 % du poids de farine) et en œufs, ce qui ralentit l'action des levures et nécessite un pointage lent au réfrigérateur. Son pétrissage intense développe un réseau glutineux solide capable de supporter la richesse en matière grasse.</p>"""

# -----------------------------------------------------------------------
# patisserie/viennoiserie
# -----------------------------------------------------------------------
new_contenu['patisserie/viennoiserie'] = """<h3>La viennoiserie : entre boulangerie et pâtisserie</h3>
<p class="resume-text">La viennoiserie occupe une place singulière dans la gastronomie française : elle est à mi-chemin entre la boulangerie (pâtes levées, fermentation biologique) et la pâtisserie (richesse en beurre, feuilletage, formes travaillées). Le terme "viennoiserie" est lui-même un hommage à Vienne, d'où plusieurs techniques auraient été introduites en France au XIXe siècle, notamment par August Zang qui ouvrit une boulangerie viennoise à Paris en 1838.</p>
<div class="highlight-box"><p><strong>La pâte levée feuilletée :</strong> Le croissant et le pain au chocolat sont des merveilles d'équilibre biophysique — la levure assure le gonflage, le tourage crée les couches feuilletées, et le beurre apporte richesse et croustillant. Cette double action (levure + feuilletage) exige un timing précis et une température contrôlée tout au long du processus.</p></div>

<h3>Le croissant : technique et histoire</h3>
<p>Le croissant est la pièce maîtresse de la viennoiserie française. Sa fabrication requiert plusieurs étapes distinctes sur 12 à 24 heures :</p>
<ol>
<li><strong>La détrempe</strong> : pétrir farine, levure, sucre, sel, lait et une petite quantité de beurre. Mettre en forme de rectangle, filmer et réfrigérer 4 à 8 heures (pointage au froid).</li>
<li><strong>Le tourage</strong> : enfermer un beurre de tourage (82 % MG minimum, peu d'humidité) dans la détrempe, puis réaliser 3 tours simples avec des temps de repos au froid entre chaque tour.</li>
<li><strong>Le façonnage</strong> : découper des triangles isocèles dans la pâte étalée, les rouler de la base vers la pointe en étirant légèrement.</li>
<li><strong>L'apprêt</strong> (levée finale) : 2 à 3 heures à 25-27 °C. Les croissants doivent doubler de volume avec un aspect tremblotant quand on secoue la plaque.</li>
<li><strong>La cuisson</strong> : dorure à l'œuf battu, four à 175-180 °C pendant 15-18 minutes.</li>
</ol>
<p>Un croissant de qualité présente un feuilletage visible en coupe (alvéoles régulières), une mie filante légèrement humide et un extérieur croustillant et doré.</p>

<h3>La brioche : richesse et légèreté</h3>
<p>La brioche est l'expression la plus aboutie des pâtes levées enrichies. Sa teneur en beurre (de 30 % pour la brioche commune à 50 % pour la "brioche à tête" de Normandie) lui confère une mie dorée, filante et fondante.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">👑</div>
  <div class="concept-name">Brioche à tête (parisienne)</div>
  <div class="concept-desc">La forme classique avec sa petite tête posée dans l'alvéole centrale. Cuite en moule cannelé, c'est la reine des brioches françaises</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌀</div>
  <div class="concept-name">Brioche Nanterre</div>
  <div class="concept-desc">6 à 8 boules alignées dans un moule à cake. La plus simple à réaliser, idéale pour débuter</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍋</div>
  <div class="concept-name">Brioche vendéenne</div>
  <div class="concept-desc">Tressée, parfumée à la fleur d'oranger et au rhum. Conservée plus longtemps grâce à sa richesse en sucre et en matière grasse</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🥐</div>
  <div class="concept-name">Pain au lait</div>
  <div class="concept-desc">Moins riche que la brioche classique (30 % MG), cuit en petits formats individuels. Texture moelleuse très accessible</div>
</div>
</div>

<h3>Le pain au chocolat (chocolatine)</h3>
<p>Structurellement identique au croissant (même pâte levée feuilletée), le pain au chocolat enferme deux barres de chocolat lors du façonnage, avant d'être roulé en rectangle plutôt qu'en forme de croissant. Le débat français "pain au chocolat / chocolatine" est régional : "chocolatine" domine dans le Sud-Ouest (Occitanie, Nouvelle-Aquitaine) et au Québec, tandis que "pain au chocolat" est la dénomination parisienne et nationale officielle.</p>

<h3>Autres pièces canoniques de la viennoiserie</h3>
<ul>
<li><strong>Kouign-amann</strong> (Bretagne) : pâte à pain laminée avec beurre salé et sucre, caramélisé à la cuisson. Ultra-croustillant et caramélisé.</li>
<li><strong>Escargot aux raisins</strong> (pain aux raisins) : pâte levée feuilletée, crème pâtissière, raisins secs macérés au rhum, roulée en spirale.</li>
<li><strong>Chausson aux pommes</strong> : pâte feuilletée fourrée de compote de pommes. Simple et populaire.</li>
<li><strong>Tresse</strong> : brioche ou pâte levée façonnée en tresse à 3 ou 4 brins, symbole de partage (traditions alsaciennes et juives ashkénazes).</li>
</ul>
<div class="highlight-box"><p><strong>Le beurre de tourage :</strong> Pour un feuilletage optimal, le beurre doit avoir la même plasticité que la détrempe lors du tourage. Trop froid : il se brise et perce la pâte. Trop mou : il s'incorpore à la détrempe et le feuilletage disparaît. La température idéale est 15-17 °C. C'est pourquoi on travaille dans un local ou un laboratoire frais.</p></div>

<h3>La viennoiserie dans le monde</h3>
<p>Si la France a codifié la viennoiserie, de nombreuses traditions parallèles existent : le <em>Kipferl</em> autrichien ancêtre du croissant, les <em>Kanelbullar</em> suédois (petits pains à la cannelle), le <em>Babka</em> polonais (brioche torsadée au chocolat ou à la cannelle), les <em>Malasadas</em> portugaises (beignets levés), ou les <em>Conchas</em> mexicaines (pain doux recouvert d'un streusel sucré moulé). Chaque culture a développé sa propre version des pâtes levées enrichies, reflet des ressources locales et des goûts régionaux.</p>"""

# -----------------------------------------------------------------------
# nutrition/sante
# -----------------------------------------------------------------------
new_contenu['nutrition/sante'] = """<h3>Alimentation et santé : des liens complexes et fondamentaux</h3>
<p class="resume-text">L'alimentation est le premier déterminant de santé modifiable à notre disposition. L'OMS estime que les habitudes alimentaires inadaptées sont responsables de plus de 11 millions de décès prématurés annuels dans le monde, principalement par maladies cardiovasculaires, diabète de type 2 et certains cancers. À l'inverse, une alimentation de qualité est le levier préventif le plus puissant pour maintenir vitalité et longévité.</p>
<div class="highlight-box"><p><strong>Une équation à trois termes :</strong> La santé par l'alimentation dépend de la <em>qualité nutritionnelle</em> des aliments (densité en nutriments essentiels), de la <em>quantité</em> (adéquation calorique aux besoins réels) et du <em>mode de vie global</em> (activité physique, sommeil, stress). Aucun aliment miracle n'existe isolément — c'est la globalité des habitudes qui compte.</p></div>

<h3>Maladies cardiovasculaires et alimentation</h3>
<p>Les maladies cardiovasculaires restent la première cause de mortalité mondiale. L'alimentation y contribue via plusieurs mécanismes : l'excès de <strong>graisses saturées et trans</strong> augmente le LDL-cholestérol ("mauvais cholestérol") et favorise l'athérosclérose (dépôts lipidiques dans les artères). L'excès de <strong>sodium</strong> (sel) élève la pression artérielle. À l'inverse, les acides gras oméga-3 (poissons gras, noix, huile de lin), les fibres solubles (avoine, légumineuses) et les polyphénols (fruits, légumes, thé, huile d'olive) exercent des effets protecteurs documentés.</p>
<p>Le régime méditerranéen, riche en huile d'olive, légumes, légumineuses, céréales complètes et poisson, est le modèle alimentaire le plus étudié et le mieux validé pour la prévention cardiovasculaire (étude PREDIMED, 2013).</p>

<h3>Diabète de type 2</h3>
<p>Le diabète de type 2 est étroitement lié à l'obésité abdominale et à une alimentation hyperglycémiante. Les aliments à <strong>index glycémique élevé</strong> (sucres rapides, farines blanches, boissons sucrées) provoquent des pics d'insuline répétés, épuisant progressivement les cellules bêta du pancréas. La prévention repose sur la consommation d'aliments à index glycémique bas ou modéré, riches en fibres, et sur la réduction des sucres libres.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">📊</div>
  <div class="concept-name">Index glycémique (IG)</div>
  <div class="concept-desc">Mesure la vitesse à laquelle un aliment élève la glycémie. Bas : légumineuses, céréales complètes. Élevé : pain blanc, riz blanc, sucre</div>
</div>
<div class="concept-card">
  <div class="concept-icon">⚖️</div>
  <div class="concept-name">Charge glycémique (CG)</div>
  <div class="concept-desc">IG × quantité de glucides / 100. Plus pertinent que l'IG seul car tient compte des portions réelles consommées</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🦠</div>
  <div class="concept-name">Microbiome intestinal</div>
  <div class="concept-desc">Les fibres fermentescibles nourrissent un microbiome diversifié, associé à une meilleure sensibilité à l'insuline et à une réduction de l'inflammation</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🥗</div>
  <div class="concept-name">Régime DASH</div>
  <div class="concept-desc">Recommandé pour contrôler la glycémie et la tension artérielle : riche en légumes, fruits, céréales complètes, pauvre en sel et sucres ajoutés</div>
</div>
</div>

<h3>Cancer et alimentation</h3>
<p>Le World Cancer Research Fund estime que 30 à 40 % des cancers sont liés à des facteurs alimentaires et au mode de vie. Les associations les mieux documentées incluent : les <strong>charcuteries et viandes transformées</strong> (classées cancérogènes de groupe 1 par l'IARC pour le cancer colorectal), l'<strong>alcool</strong> (cancérogène groupe 1 pour 6 types de cancer), l'<strong>obésité</strong> (facteur de risque pour 13 types de cancer). À l'inverse, les légumes crucifères (brocolis, chou), les tomates (lycopène), les fibres alimentaires et certains polyphénols sont associés à une réduction du risque.</p>

<h3>Le microbiome intestinal : l'organe oublié</h3>
<p>Le microbiome intestinal humain comprend environ 100 000 milliards de bactéries, levures et virus — un "écosystème" dont la composition influence profondément la santé. Un microbiome diversifié est associé à une meilleure immunité, une santé mentale améliorée (axe intestin-cerveau via le nerf vague), une protection contre les maladies inflammatoires chroniques et même contre l'obésité.</p>
<p>Les aliments qui nourrissent favorablement le microbiome sont les <strong>prébiotiques</strong> (fibres fermentescibles : chicorée, ail, poireau, topinambour, avoine) et les <strong>probiotiques</strong> (aliments fermentés : yaourt, kéfir, kombucha, kimchi, miso). À l'inverse, les régimes ultra-transformés, riches en émulsifiants et en sucres raffinés, appauvrissent la diversité microbienne.</p>
<div class="highlight-box"><p><strong>L'axe intestin-cerveau :</strong> L'intestin produit 95 % de la sérotonine de l'organisme. Des études récentes montrent que la composition du microbiome influence l'anxiété, la dépression et même certains comportements. L'alimentation devient ainsi un outil de santé mentale, pas seulement physique.</p></div>

<h3>Les régimes thérapeutiques validés</h3>
<ul>
<li><strong>Régime cétogène</strong> : très faible en glucides (moins de 50 g/jour), riche en lipides. Validé pour l'épilepsie pharmaco-résistante, étudié pour certains cancers.</li>
<li><strong>Régime sans gluten</strong> : indispensable pour la maladie cœliaque (maladie auto-immune). Inutile sans diagnostic confirmé.</li>
<li><strong>Régime hyposodé</strong> (moins de 6 g de sel/jour) : recommandé en hypertension artérielle et insuffisance cardiaque.</li>
<li><strong>Régime FODMAP bas</strong> : réduction des glucides fermentescibles pour le syndrome de l'intestin irritable.</li>
</ul>

<h3>Prévention et bonnes pratiques</h3>
<p>Les recommandations des grandes agences de santé publique (OMS, ANSES, HAS) convergent vers quelques principes simples : consommer abondamment légumes et fruits (plus de 400 g/jour), privilégier les céréales complètes, limiter les viandes transformées et les boissons sucrées, ne pas dépasser 10 % de calories issues des sucres libres, et réduire les graisses saturées au profit des insaturées. L'alimentation la plus saine est celle qui est variée, peu transformée, et culturellement adaptée au contexte de vie de chacun.</p>"""

# -----------------------------------------------------------------------
# techniques/coupes
# -----------------------------------------------------------------------
new_contenu['techniques/coupes'] = """<h3>L'art des coupes : précision, régularité, efficacité</h3>
<p class="resume-text">Couper les aliments ne se limite pas à les réduire en morceaux : c'est une opération technique qui détermine le temps de cuisson, la texture finale, la présentation et même la saveur (plus la surface de coupe est grande, plus les échanges avec la chaleur et les liquides sont importants). La maîtrise du couteau est la compétence fondamentale du cuisinier professionnel — elle s'acquiert par la répétition et une posture correcte.</p>
<div class="highlight-box"><p><strong>La règle des deux doigts :</strong> La main qui tient l'aliment (main "guide") doit former une griffe — les bouts des doigts repliés sous les phalanges, les jointures servant de guide au plat de la lame. Cette posture protège les doigts et assure des coupes régulières. Le couteau ne doit jamais quitter la planche lors du mouvement en balancier.</p></div>

<h3>Les couteaux fondamentaux</h3>
<ul>
<li><strong>Couteau de chef</strong> (20-25 cm) : polyvalent, taille, émincer, hacher. La lame légèrement incurvée permet le mouvement de bascule.</li>
<li><strong>Couteau d'office</strong> (8-12 cm) : éplucher, façonner les légumes, coupes délicates en main.</li>
<li><strong>Couteau à pain</strong> (crantée) : trancher sans écraser les miches, génoises, tomates.</li>
<li><strong>Couteau filet de sole</strong> (flexible, 18-20 cm) : lever les filets de poisson en suivant les arêtes.</li>
<li><strong>Couteau à désosser</strong> (rigide ou semi-flexible) : détacher la viande des os.</li>
<li><strong>Mandoline</strong> : tranches très fines et régulières (moins de 1 mm), indispensable pour les gratins, les chips ou les carpaccios de légumes.</li>
</ul>

<h3>Les coupes classiques en légumerie</h3>
<p>La brigade de cuisine utilise un vocabulaire précis pour désigner les tailles de coupe, permettant une harmonisation visuelle des plats :</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🟫</div>
  <div class="concept-name">Brunoise</div>
  <div class="concept-desc">Dés de 2 mm de côté. La plus fine des coupes en dés. Base de nombreuses garnitures aromatiques et sauces fines</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟧</div>
  <div class="concept-name">Macédoine</div>
  <div class="concept-desc">Dés de 5 mm de côté. Légumes de base pour les salades composées et les garnitures de hors-d'œuvre</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟨</div>
  <div class="concept-name">Jardinière</div>
  <div class="concept-desc">Bâtonnets de 4 mm × 4 mm × 2,5 cm. Légumes d'accompagnement cuits à l'eau ou sautés, présentés en garniture</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟩</div>
  <div class="concept-name">Julienne</div>
  <div class="concept-desc">Filaments de 1-2 mm × 4-6 cm. Légumes pour garnitures délicates, soupes et consommés raffinés</div>
</div>
</div>
<p>Les étapes d'une coupe en dés réguliers : (1) tailler des tranches d'épaisseur uniforme, (2) empiler et tailler des bâtonnets, (3) retourner à 90° et tailler les dés. La régularité assure une cuisson homogène.</p>

<h3>Les coupes spécifiques aux légumes à feuilles et herbes</h3>
<p>Le <strong>chiffonnade</strong> désigne les herbes ou feuilles (basilic, oseille, salade) roulées en cigare puis émincées finement, produisant de fines lanières. Cette technique limite le brunissement des herbes fragiles causé par l'oxydation lors d'un hachage ordinaire.</p>
<p>Le <strong>ciseler</strong> (oignon, échalote) consiste à inciser transversalement puis verticalement sans couper jusqu'à la racine (qui maintient les couches ensemble), puis à émincer perpendiculairement pour obtenir une brunoise très fine et régulière. C'est l'une des premières techniques enseignées en CAP cuisine.</p>

<h3>Préparer et tourner les légumes</h3>
<p>Le <strong>tournage</strong> est la taille d'un légume (carotte, navet, pomme de terre, artichaut) en forme ovoïde à 7 facettes régulières. Cette coupe très technique appartient à la cuisine classique française — elle illustre la maîtrise du couteau d'office et confère une élégance visuelle aux garnitures.</p>
<div class="highlight-box"><p><strong>Éplucher un artichaut :</strong> L'artichaut est l'un des légumes les plus techniques à préparer : casser les feuilles extérieures, tourner à mi-hauteur avec un couteau d'office pour retirer les feuilles dures, creuser le fond et retirer le foin (poils) à la cuillère, citronner immédiatement pour éviter l'oxydation. Un artichaut "tourné" prêt à cuire est une belle illustration de la légumerie professionnelle.</p></div>

<h3>Les préparations préliminaires</h3>
<ul>
<li><strong>Monder et peler</strong> : ébouillanter brièvement les tomates, pêches ou amandes pour détacher la peau facilement.</li>
<li><strong>Concasser</strong> : couper grossièrement sans régularité de forme — technique rapide pour les tomates, les aromates.</li>
<li><strong>Hacher</strong> : couper en très petits morceaux irréguliers — ail, persil, oignons pour les farces et marinades.</li>
<li><strong>Lever les filets</strong> : détacher les chairs d'un poisson plat (sole, turbot) ou rond (dorade, loup) de l'arête centrale.</li>
<li><strong>Désosser</strong> : retirer les os d'une viande tout en maintenant la structure musculaire (désosser une volaille à plat pour une ballotine).</li>
</ul>

<h3>L'entretien des couteaux</h3>
<p>Un couteau bien affûté est plus sûr qu'un couteau émoussé (qui glisse sur l'aliment et force la main). L'affûtage régulier se fait à la pierre à eau (grains 1000 puis 3000) en maintenant un angle constant de 15-20° selon la lame. Le fusil d'acier redresse le fil entre deux affûtages mais ne remplace pas la pierre. Les couteaux de qualité sont en acier inoxydable à haute teneur en carbone (52-58 HRC) — jamais au lave-vaisselle (dilatation thermique, produits agressifs).</p>"""

# -----------------------------------------------------------------------
# techniques/cuissons
# -----------------------------------------------------------------------
new_contenu['techniques/cuissons'] = """<h3>Les modes de cuisson : physique et chimie au service de la saveur</h3>
<p class="resume-text">La cuisson est une transformation irréversible des aliments par l'énergie thermique. Elle modifie la structure des protéines (dénaturation, coagulation), des glucides (gélatinisation de l'amidon, caramélisation des sucres) et des lipides (fusion, polymérisation), tout en développant des arômes complexes via la <strong>réaction de Maillard</strong>. Comprendre ces mécanismes permet au cuisinier de maîtriser textures, couleurs et saveurs plutôt que de s'en remettre au hasard.</p>
<div class="highlight-box"><p><strong>La réaction de Maillard :</strong> Découverte en 1912 par le chimiste Louis-Camille Maillard, cette réaction entre acides aminés et sucres réducteurs produit des centaines de molécules aromatiques (pyrazines, furannes, thiophènes...) responsables des arômes de pain grillé, de croûte de viande rôtie, de café torréfié. Elle se déclenche autour de 140 °C et nécessite une surface sèche — l'eau la bloque en abaissant la température à 100 °C.</p></div>

<h3>Les cuissons par concentration</h3>
<p>Les cuissons par concentration visent à retenir les sucs et saveurs à l'intérieur de l'aliment en saisissant sa surface à feu vif.</p>
<p><strong>Le rôtissage</strong> : cuisson au four dans la chaleur rayonnante et convective (180-250 °C). Idéal pour les volailles entières, rôtis de bœuf, gigots. L'arrosage régulier avec les sucs de cuisson maintient l'humidité de surface et favorise le développement de la croûte.</p>
<p><strong>Le sauté/poêlé</strong> : cuisson à la poêle dans une matière grasse chaude. La saisie initiale à feu très vif (180-200 °C) déclenche la réaction de Maillard et forme la croûte dorée. La cuisson se poursuit à feu modéré pour cuire à cœur.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🥩</div>
  <div class="concept-name">Bleu</div>
  <div class="concept-desc">Cœur à 45-50 °C. Fibres musculaires à peine contractées. Couleur rouge vif, consistance molle. Déconseillé pour le porc et la volaille</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🩸</div>
  <div class="concept-name">Saignant</div>
  <div class="concept-desc">Cœur à 52-55 °C. Légère résistance à la pression. Couleur rouge rosé. Cuisson idéale pour beaucoup de steaks de bœuf</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌸</div>
  <div class="concept-name">À point</div>
  <div class="concept-desc">Cœur à 60-65 °C. Centre rose mais ferme. Le jus est rosé. Compromis populaire entre moelleux et sécurité</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟫</div>
  <div class="concept-name">Bien cuit</div>
  <div class="concept-desc">Cœur supérieur à 70 °C. Fibres très contractées, jus clair. Adapté au porc, à la volaille et aux hamburgers</div>
</div>
</div>

<h3>Les cuissons par expansion</h3>
<p>Les cuissons par expansion extraient les saveurs de l'aliment dans le liquide de cuisson, enrichissant celui-ci. L'aliment et le bouillon se constituent simultanément.</p>
<p><strong>Le bouillon et le pot-au-feu</strong> : les viandes et légumes sont plongés dans de l'eau froide ou chaude selon l'objectif. Eau froide — extraction maximale des sucs (bon bouillon, viande moins savoureuse). Eau bouillante — les protéines de surface coagulent rapidement et retiennent mieux les jus dans la viande.</p>
<p><strong>Le braisage et l'étouffée</strong> : cuisson longue à chaleur humide, idéale pour les pièces dures (joue de bœuf, jarret, épaule d'agneau). L'environnement humide hydrolyse le collagène en gélatine, transformant les morceaux fibreux en préparations fondantes et savoureuses.</p>
<div class="highlight-box"><p><strong>Le collagène et la gélatine :</strong> Le collagène est une protéine structurale abondante dans les morceaux de viande de deuxième catégorie (jarret, joue, paleron). Sous l'effet de la chaleur humide prolongée (plus de 70 °C), il se transforme en gélatine, qui lie le jus de cuisson et donne une texture fondante incomparable. C'est pourquoi le pot-au-feu ou le bourguignon sont incompatibles avec les cuissons rapides.</p></div>

<h3>La cuisson vapeur</h3>
<p>La cuisson vapeur (100 °C ou sous pression jusqu'à 120 °C) est la plus respectueuse des vitamines hydrosolubles (C et B) et des structures cellulaires délicates. Elle ne nécessite aucune matière grasse et préserve les couleurs des légumes verts (en les plongeant immédiatement dans de l'eau glacée après cuisson — procédé de "rafraîchissement"). La cuisine asiatique en fait un usage systématique pour les dim sum, poissons et légumes.</p>

<h3>La cuisson sous-vide à basse température</h3>
<p>La cuisson sous-vide (thermoplongeur + sachets hermétiques, 55-85 °C) offre une précision inégalée : chaque degré de température produit une texture différente (un œuf cuit à 63 °C a un blanc coagulé et un jaune coulant crémeux ; à 65 °C, le jaune est mi-pris). Cette technique est utilisée massivement en restauration gastronomique et se démocratise dans les cuisines domestiques équipées.</p>

<h3>La friture</h3>
<p>La friture (160-190 °C dans un bain d'huile) combine plusieurs phénomènes simultanés : évaporation rapide de l'eau superficielle (crépitement caractéristique), formation d'une croûte Maillard et gélatinisation de l'amidon enrobant (panure, pâte à frire). La qualité de l'huile est déterminante : point de fumée élevé (huile d'arachide, tournesol oléique), filtration régulière, changement avant qu'elle ne devienne sombre ou visqueuse.</p>"""

# -----------------------------------------------------------------------
# techniques/sauces
# -----------------------------------------------------------------------
new_contenu['techniques/sauces'] = """<h3>Les sauces fondamentales : l'identité de la cuisine française</h3>
<p class="resume-text">Auguste Escoffier, le grand codificateur de la cuisine française classique (fin XIXe - début XXe siècle), a organisé les sauces en grandes familles selon leurs bases et leurs techniques de liaison. Ce système pyramidal reste la référence de l'enseignement culinaire mondial. Une sauce ne se résume pas à un assaisonnement : c'est un condensé de saveurs, une liaison entre textures, un élément qui révèle ou amplifie le plat qu'elle accompagne.</p>
<div class="highlight-box"><p><strong>Définition d'Escoffier :</strong> "La sauce est au cuisinier ce que la grammaire est à l'écrivain." Les cinq sauces mères (béchamel, velouté, espagnole, tomate, hollandaise) sont les matrices dont dérivent des centaines de sauces secondaires.</p></div>

<h3>Les fonds : bases indispensables</h3>
<p>Les sauces classiques se construisent sur des <strong>fonds</strong> — liquides de cuisson concentrés en gélatine et en arômes, obtenus par cuisson longue d'os, carcasses et légumes aromatiques.</p>
<ul>
<li><strong>Fond blanc de veau</strong> : os de veau blanchis, oignon clouté, bouquet garni, 4-6 heures de cuisson. Base des veloutés et sauces blanches.</li>
<li><strong>Fond brun de veau</strong> : os et garniture aromatique rôtis au four avant cuisson. Base de la sauce espagnole et du jus lié.</li>
<li><strong>Fumet de poisson</strong> : arêtes et têtes de poissons blancs, vin blanc, aromates, 20 minutes maximum (au-delà, amertume).</li>
<li><strong>Fond de volaille</strong> : carcasses de poulet, légumes, bouquet garni, 2-3 heures. Plus léger que le fond de veau.</li>
</ul>

<h3>Les sauces mères et leurs dérivées</h3>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🥛</div>
  <div class="concept-name">Béchamel</div>
  <div class="concept-desc">Roux blanc + lait. Dérivées : Mornay (+ gruyère), Nantua (+ bisque d'écrevisses), crème (+ crème fraîche)</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟡</div>
  <div class="concept-name">Velouté</div>
  <div class="concept-desc">Roux blanc + fond blanc ou fumet. Dérivées : sauce suprême (velouté de volaille + crème), sauce vin blanc (fumet + vin blanc)</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟤</div>
  <div class="concept-name">Espagnole</div>
  <div class="concept-desc">Roux brun + fond brun + tomate + mirepoix. Dérivées : demi-glace, sauce bordelaise, sauce périgueux (+ foie gras et truffes)</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🧈</div>
  <div class="concept-name">Hollandaise</div>
  <div class="concept-desc">Émulsion chaude de jaunes d'œufs + beurre clarifié + citron. Dérivées : béarnaise (+ estragon), maltaise (+ orange sanguine)</div>
</div>
</div>

<h3>Le roux : agent liant universel</h3>
<p>Le roux est le liant de base des sauces classiques. Il est composé de quantités égales de beurre et de farine, cuits ensemble jusqu'à la couleur souhaitée :</p>
<ul>
<li><strong>Roux blanc</strong> : 1-2 minutes de cuisson, couleur paille. Base des sauces blanches (béchamel, velouté).</li>
<li><strong>Roux blond</strong> : 4-5 minutes, légèrement coloré. Arôme noisette doux.</li>
<li><strong>Roux brun</strong> : 8-12 minutes, couleur acajou. Pouvoir liant diminué de moitié, saveur prononcée. Base de la sauce espagnole.</li>
</ul>
<p>La règle cruciale : incorporer le <strong>liquide chaud dans le roux chaud</strong> (ou froid dans froid) en fouettant énergiquement. Un contraste de température trop fort crée des grumeaux.</p>

<h3>Les émulsions : hollandaise et béarnaise</h3>
<p>La sauce hollandaise est une émulsion chaude instable. La technique : réduire du vinaigre et des échalotes, monter les jaunes d'œufs au bain-marie (55-65 °C, jamais plus) jusqu'au "ruban", incorporer le beurre clarifié fondu goutte à goutte puis en filet en fouettant sans arrêt. La température critique est entre 60 et 70 °C : en dessous les jaunes ne coagulent pas (pas de structure), au-dessus ils brouillent (sauce granuleuse).</p>
<div class="highlight-box"><p><strong>Rattraper une sauce hollandaise tournée :</strong> Si la sauce se sépare (granulée ou huileuse), verser 1 cuillère à soupe d'eau froide dans un bol propre, puis incorporer progressivement la sauce tournée en fouettant. Dans 80 % des cas, l'émulsion se reconstitue. En dernier recours, recommencer avec deux nouveaux jaunes et incorporer la sauce tournée comme si c'était du beurre.</p></div>

<h3>Les sauces contemporaines : jus, nages et vinaigrettes chaudes</h3>
<p>La nouvelle cuisine des années 1970 (Bocuse, Guérard, Chapel) a allégé les sauces en abandonnant les roux au profit des réductions, des jus naturels et de la crème. Cette révolution a conduit aux techniques modernes :</p>
<p><strong>Le jus réduit</strong> : extraire au maximum les sucs de rôtissage (déglaçage), réduire jusqu'à texture nappante, monter au beurre froid pour brillance et onctuosité. Zéro farine, maximum de concentré de saveurs.</p>
<p><strong>La nage</strong> : court-bouillon aromatique léger, servi comme sauce autour du poisson ou des crustacés. Légèreté et fraîcheur des arômes.</p>
<p><strong>La vinaigrette chaude</strong> : huile, vinaigre, échalotes et herbes, tiédie et servie sur poissons ou légumes rôtis. Apporte acidité et fraîcheur sans la lourdeur des sauces classiques.</p>"""

# -----------------------------------------------------------------------
# patisserie/cremes
# -----------------------------------------------------------------------
new_contenu['patisserie/cremes'] = """<h3>Les crèmes en pâtisserie : structures et rôles</h3>
<p class="resume-text">Les crèmes constituent le cœur battant de la pâtisserie. Elles assurent les fonctions de garniture, de liaison, de légèreté et d'arôme. Comprendre les mécanismes physico-chimiques qui les structurent — coagulation des protéines de l'œuf, émulsification des corps gras, foisonnement des blancs ou de la crème — est la clé pour diagnostiquer les échecs et innover en toute confiance.</p>
<div class="highlight-box"><p><strong>Le jaune d'œuf, acteur universel :</strong> Grâce à sa lécithine (émulsifiant naturel) et à ses protéines (ovalbumine, conalbumine), le jaune d'œuf est l'ingrédient fonctionnel le plus polyvalent de la pâtisserie. Il lie, épaissit, émulsionne et apporte une richesse aromatique et colorante incomparable.</p></div>

<h3>La crème pâtissière</h3>
<p>La crème pâtissière est la préparation de base de la pâtisserie, fondement d'un grand nombre de crèmes dérivées. Sa recette canonique : lait, jaunes d'œufs, sucre, farine (ou fécule de maïs), vanille. Le mécanisme de prise repose sur la <strong>gélatinisation de l'amidon</strong> à 82-85 °C et la <strong>coagulation partielle des jaunes d'œufs</strong>.</p>
<p>Technique critique : verser le lait bouillant en filet sur le mélange blanchi jaunes-sucre-amidon tout en fouettant, puis remettre sur feu et cuire en fouettant constamment jusqu'à ébullition et épaississement. L'ébullition doit être maintenue 1-2 minutes pour détruire l'amylase présente dans les jaunes.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🍮</div>
  <div class="concept-name">Crème mousseline</div>
  <div class="concept-desc">Crème pâtissière + beurre pommade incorporé au fouet. Plus légère et aérée. Base du fraisier et de nombreux entremets</div>
</div>
<div class="concept-card">
  <div class="concept-icon">☁️</div>
  <div class="concept-name">Crème diplomate</div>
  <div class="concept-desc">Crème pâtissière + gélatine + crème fouettée. Ultra-légère. Parfaite pour garnir les tartes fraîches et les choux</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🧁</div>
  <div class="concept-name">Crème chiboust</div>
  <div class="concept-desc">Crème pâtissière + gélatine + meringue italienne. Légèreté maximale. Utilisée dans le Saint-Honoré traditionnel</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍋</div>
  <div class="concept-name">Crème légère</div>
  <div class="concept-desc">Crème pâtissière + crème fouettée sans gélatine. La plus simple des crèmes légères, pour garnir rapidement</div>
</div>
</div>

<h3>La crème anglaise et ses dérivées</h3>
<p>La crème anglaise est une crème à base de lait, jaunes d'œufs et sucre, cuite à 82-84 °C (jamais au-delà pour éviter la coagulation en œufs brouillés). Elle nape la cuillère. Sa texture fluide la destine aux coulis, aux bases de glace et à l'accompagnement de desserts.</p>
<p>La <strong>crème brûlée</strong> est une crème anglaise enrichie en crème et cuite au four au bain-marie — la coagulation lente des jaunes à 80-85 °C produit une texture tremblotante sous une surface de sucre caramélisé au chalumeau. La <strong>crème bavaroise</strong> ajoute gélatine et crème fouettée à la crème anglaise, créant une structure moulable légère, base des charlottes et des bavarois.</p>

<h3>La crème au beurre</h3>
<p>La crème au beurre classique (beurre pommade + sirop de sucre cuit + jaunes ou blancs d'œufs) est riche, stable et facile à dresser en décoration. Elle existe en plusieurs versions :</p>
<ul>
<li><strong>Crème au beurre à la meringue suisse</strong> : blancs + sucre chauffés au bain-marie, montés en meringue, puis beurre incorporé progressivement. Légère, satinée, moins sucrée que la version américaine.</li>
<li><strong>Crème au beurre à la meringue italienne</strong> : meringue italienne + beurre. La plus stable des crèmes au beurre, résiste à la chaleur.</li>
<li><strong>Crème au beurre à la crème anglaise</strong> : beurre pommade + crème anglaise. La plus fondante, saveur la plus complexe.</li>
</ul>

<h3>La ganache : mariage chocolat-crème</h3>
<p>La ganache est une émulsion de chocolat dans de la crème chaude. La proportion chocolat/crème détermine la texture finale : 1/1 pour une ganache coulante (nappage, fondue), 2/1 pour une ganache ferme (truffes, fourrages), 3/1 pour une ganache très ferme (enrobage). La crème est portée à ébullition, versée en trois fois sur le chocolat haché en fouettant depuis le centre vers l'extérieur.</p>
<div class="highlight-box"><p><strong>Ganache montée :</strong> En refroidissant et en fouettant, la ganache s'aère et triple de volume. Cette texture crémeuse et légère est utilisée en garniture d'entremets, en décoration à la poche à douille, ou en tartelettes. Elle doit être préparée 12 heures à l'avance et fouettée froide pour obtenir une tenue optimale.</p></div>

<h3>La meringue : trois variantes</h3>
<ul>
<li><strong>Meringue française</strong> : blancs fouettés + sucre ajouté progressivement. Texture légère, instable. Utilisée en décoration ou séchée au four.</li>
<li><strong>Meringue suisse</strong> : blancs + sucre chauffés au bain-marie à 55 °C avant de fouetter. Plus brillante et stable. Décors résistants, pavlova.</li>
<li><strong>Meringue italienne</strong> : sirop bouillant (121 °C) versé en filet dans les blancs en cours de foisonnement. La plus stable de toutes. Bombe glacée, macarons, crèmes légères.</li>
</ul>"""

# -----------------------------------------------------------------------
# patisserie/chocolat
# -----------------------------------------------------------------------
new_contenu['patisserie/chocolat'] = """<h3>Le chocolat : de la fève à la tablette</h3>
<p class="resume-text">Le chocolat est l'un des produits alimentaires les plus complexes : il contient plus de 600 composés aromatiques volatils et ses propriétés physiques (fusion, cristallisation du beurre de cacao) exigent une compréhension précise pour être maîtrisées. De la cabosse du cacaoyer aux tablettes du confiseur, le chocolat est le fruit d'une longue chaîne de transformations physiques et chimiques.</p>
<div class="highlight-box"><p><strong>Origine :</strong> Le cacao (<em>Theobroma cacao</em>, "nourriture des dieux") est originaire d'Amérique tropicale. Les Olmèques, Mayas et Aztèques le consommaient comme boisson amère et épicée. Les Espagnols le rapportèrent en Europe au XVIe siècle. La tablette de chocolat solide n'existe que depuis 1847 (Fry and Sons, Bristol).</p></div>

<h3>De la fève au chocolat : la chaîne de fabrication</h3>
<ol>
<li><strong>Fermentation</strong> (4-7 jours) : les pulpes sucrées entourant les fèves fermentent spontanément. Cette étape développe les précurseurs aromatiques par réactions enzymatiques et chimiques.</li>
<li><strong>Séchage</strong> : ramène l'humidité à 7-8 %. Arrête la fermentation et stabilise les fèves.</li>
<li><strong>Torréfaction</strong> (100-150 °C, 30-60 min) : c'est l'étape Maillard du chocolat. Les précurseurs de fermentation réagissent pour former les arômes caractéristiques (pyrazines, furannes).</li>
<li><strong>Concassage et vannage</strong> : brisure des fèves et séparation de la coque. On obtient les <em>nibs</em> (éclats de cacao pur).</li>
<li><strong>Broyage</strong> : les nibs sont broyés jusqu'à l'obtention de la <em>pâte de cacao</em> — du chocolat 100 % sous forme liquide.</li>
<li><strong>Conchage</strong> (plusieurs heures à plusieurs jours) : brassage à chaud (50-80 °C) qui affine la texture, élimine les acides volatils indésirables et développe les arômes finaux.</li>
</ol>

<h3>Le tempérage : une cristallographie culinaire</h3>
<p>Le beurre de cacao peut cristalliser sous 6 formes polymorphes (I à VI). Seule la forme V (bêta) présente les propriétés recherchées : contraction au refroidissement (démoulage), brillance, cassant propre, point de fusion à 32-34 °C.</p>
<p>La courbe de tempérage classique pour un chocolat noir :</p>
<ul>
<li><strong>Fonte</strong> : 50-55 °C (détruire tous les cristaux existants)</li>
<li><strong>Refroidissement</strong> : 27-28 °C (formation des formes IV et V)</li>
<li><strong>Réchauffage</strong> : 31-32 °C (fonte des formes instables, seule la forme V subsiste)</li>
</ul>
<div class="highlight-box"><p><strong>Méthodes de tempérage :</strong> (1) Tablage : verser 2/3 du chocolat fondu sur un marbre froid, travailler à la spatule jusqu'à 27 °C, réincorporer au 1/3 restant. (2) Ensemencement : ajouter des pistoles de chocolat tempéré (20 % du poids) au chocolat fondu à 50 °C et mélanger jusqu'à 31 °C. Le thermomètre de précision est indispensable.</p></div>

<h3>Les grands types de chocolat</h3>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🍫</div>
  <div class="concept-name">Chocolat noir</div>
  <div class="concept-desc">Minimum 35 % de cacao (loi française), les bons chocolats de couverture en contiennent 55-75 %. Pas de lait. Amertume et complexité aromatique</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🤍</div>
  <div class="concept-name">Chocolat au lait</div>
  <div class="concept-desc">25-45 % de cacao + poudre de lait. Plus sucré, plus onctueux. Point de tempérage légèrement différent (30 °C pour la forme V)</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍦</div>
  <div class="concept-name">Chocolat blanc</div>
  <div class="concept-desc">Uniquement beurre de cacao (20 % min) + sucre + lait. Pas de masse de cacao. Techniquement du chocolat, même si le débat persiste</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌸</div>
  <div class="concept-name">Chocolat Ruby</div>
  <div class="concept-desc">Quatrième type lancé en 2017 par Barry Callebaut. Couleur rose naturelle due à des composés de la fève peu fermentée. Saveur fruitée et acide</div>
</div>
</div>

<h3>La confiserie au chocolat</h3>
<p>La confiserie englobe les truffes, bonbons de chocolat, pralinés, ganaches enrobées et tablettes fourrées. Elle requiert une maîtrise du tempérage et des mélanges de textures (croustillant de la coque, fondant de la ganache intérieure, acidité d'une gelée de fruit).</p>
<p>Le <strong>praliné</strong> est un mélange caramélisé de fruits secs (amandes, noisettes) et de sucre, broyé finement. C'est l'âme du Paris-Brest, des rochers et de nombreux fourrages. Le <strong>gianduja</strong>, spécialité piémontaise, associe praliné de noisettes et chocolat au lait — inventé pour contourner la pénurie de cacao pendant les guerres napoléoniennes.</p>

<h3>Accords chocolat-saveurs</h3>
<p>Pierre Hermé a théorisé les associations d'arômes en pâtisserie : le chocolat noir se marie avec les fruits rouges (framboise, fraise), les agrumes (orange, yuzu), les épices (cardamome, piment d'Espelette), le caramel beurre salé, la vanille et le café. Le chocolat au lait appelle le praliné, la passion, la banane et le caramel. Ces associations reposent sur des familles de composés aromatiques communs (molécules de fruit, notes torréfiées, vanilline).</p>"""

# -----------------------------------------------------------------------
# techniques/emulsions
# -----------------------------------------------------------------------
new_contenu['techniques/emulsions'] = """<h3>Émulsions et liaisons : la physico-chimie de la cuisine</h3>
<p class="resume-text">La compréhension des émulsions, des gels et des mousses est au cœur de la cuisine moderne. Ces "états de la matière alimentaire" permettent de créer des textures impossibles à obtenir par simple mélange d'ingrédients, et expliquent la réussite ou l'échec de préparations aussi courantes que la mayonnaise, la sauce hollandaise, la vinaigrette, le beurre blanc ou la ganache.</p>
<div class="highlight-box"><p><strong>Définition :</strong> Une émulsion est un mélange stable de deux liquides non miscibles (eau et huile) rendu possible par un <em>émulsifiant</em> — une molécule à tête hydrophile (aime l'eau) et queue hydrophobe (aime l'huile), qui s'interpose à l'interface des deux phases et empêche leur séparation.</p></div>

<h3>Les émulsifiants naturels en cuisine</h3>
<ul>
<li><strong>Lécithine de jaune d'œuf</strong> : l'émulsifiant le plus puissant et polyvalent. 1 jaune d'œuf peut émulsionner jusqu'à 750 ml d'huile dans une mayonnaise réussie.</li>
<li><strong>Caséines du lait</strong> : protéines amphiphiles qui stabilisent les émulsions dans les sauces à base de crème ou de beurre.</li>
<li><strong>Moutarde</strong> : contient des mucilages (polysaccharides) qui agissent comme émulsifiants secondaires dans la vinaigrette ou la mayonnaise.</li>
<li><strong>Monoglycérides et diglycérides naturels</strong> : présents dans de nombreux corps gras, facilitent leur incorporation dans les phases aqueuses.</li>
</ul>

<h3>La mayonnaise : modèle pédagogique de l'émulsion</h3>
<p>La mayonnaise est une émulsion huile-dans-eau (H/E) : des gouttelettes d'huile dispersées dans une phase continue aqueuse (vinaigre, eau du jaune). Un jaune d'œuf (20 g) peut émulsionner 300-500 ml d'huile si on l'incorpore progressivement en fouettant — le temps d'incorporation permet aux molécules de lécithine de former une couche protectrice autour de chaque gouttelette d'huile avant qu'elle ne soit rejointe par la suivante.</p>
<p>Erreurs classiques : huile trop froide (cristallisation des lipides, rupture d'émulsion), ajout d'huile trop rapide (lécithine saturée), température trop élevée (dénaturation de la lécithine).</p>
<div class="highlight-box"><p><strong>Rattraper une mayonnaise tournée :</strong> Verser une cuillerée à café d'eau froide dans un bol propre. Incorporer la mayonnaise tournée très progressivement en fouettant depuis le centre, comme si on montait une nouvelle mayonnaise. L'eau froide crée un nouveau point de nucléation pour l'émulsion.</p></div>

<h3>Le beurre blanc et les émulsions instables</h3>
<p>Le beurre blanc est une émulsion instable de matière grasse laitière dans une réduction de vinaigre et d'échalotes. Contrairement à la mayonnaise, il ne contient pas d'émulsifiant puissant — la stabilité est assurée par les caséines du beurre en cours de fusion (à 30-35 °C) et par la tension de surface créée par le fouettage continu. Si la température dépasse 55 °C, le beurre se clarifie et l'émulsion casse irrémédiablement.</p>

<h3>Les agents liants et épaississants</h3>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🌊</div>
  <div class="concept-name">Amidon (farine, fécule)</div>
  <div class="concept-desc">Gélatinise à 82-85 °C par absorption d'eau et gonflement des granules. Classique dans les sauces liées au roux ou au beurre manié</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🟡</div>
  <div class="concept-name">Gélatine</div>
  <div class="concept-desc">Protéine animale (collagène hydrolysé). Gélifie en refroidissant (moins de 15 °C), fond en chauffant (plus de 35 °C). Thermoréversible. Bavarois, aspics, panna cotta</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌿</div>
  <div class="concept-name">Agar-agar</div>
  <div class="concept-desc">Algue rouge séchée. Gélifie à 35-45 °C, fond à 80-85 °C. Résiste aux environnements acides et aux températures élevées. Très utilisé en cuisine végane</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🫐</div>
  <div class="concept-name">Pectine</div>
  <div class="concept-desc">Polysaccharide végétal extrait des agrumes et pommes. Gélifie en présence de sucre et d'acidité. Base des confitures et gelées de fruits</div>
</div>
</div>

<h3>Les mousses culinaires</h3>
<p>Une mousse alimentaire est une dispersion de bulles de gaz (air, CO₂, N₂) dans un liquide ou un solide. La stabilité d'une mousse dépend de la viscosité de la phase continue et de la présence de tensioactifs (protéines de blanc d'œuf, caséines, saponines).</p>
<p>Le <strong>foisonnement de la crème liquide entière</strong> repose sur l'emprisonnement des bulles d'air dans un réseau de cristaux de matière grasse laitière semi-solide (40-45 % de MG, refroidie à + 4 °C). Une crème trop chaude ou trop pauvre en matière grasse ne monte pas.</p>
<p>Le <strong>foisonnement des blancs d'œufs</strong> est assuré par la dénaturation des protéines (ovalbumine, conalbumine) à l'interface air-eau. Les blancs montent mieux à température ambiante et en l'absence de toute trace de jaune (lipides) qui déstabilisent la mousse.</p>

<h3>Applications en cuisine moléculaire</h3>
<ul>
<li><strong>Xanthane</strong> (E415) : 0,1-0,3 % suffisent pour donner une texture veloutée et un comportement rhéofluidifiant. Idéal pour les vinaigrettes stables et les sauces légères.</li>
<li><strong>Lécithine de soja en poudre</strong> : permet de monter des émulsions à très faible teneur en matière grasse (espumas légères) avec un simple mixeur plongeant.</li>
<li><strong>Méthylcellulose</strong> : gélifie à la chaleur (inverser les conventions : se solidifie en chauffant, se liquéfie en refroidissant). Produit des effets spectaculaires dans la cuisine d'avant-garde.</li>
</ul>"""

# -----------------------------------------------------------------------
# nutrition/sport
# -----------------------------------------------------------------------
new_contenu['nutrition/sport'] = """<h3>Nutrition et sport : alimenter la performance</h3>
<p class="resume-text">La nutrition sportive est une discipline scientifique qui étudie comment l'alimentation influence la performance physique, la récupération et la composition corporelle. Si les athlètes de haut niveau travaillent avec des diététiciens-nutritionnistes spécialisés, les principes de base s'appliquent à tous ceux qui pratiquent une activité physique régulière — du joggeur du dimanche au triathlète amateur.</p>
<div class="highlight-box"><p><strong>Postulat fondamental :</strong> Il n'existe pas de "superaliment" qui transforme une alimentation médiocre en carburant de champion. La nutrition sportive est avant tout une optimisation des <em>quantités</em> (apport calorique adapté à la dépense), de la <em>répartition</em> des macronutriments et du <em>timing</em> des repas par rapport à l'entraînement.</p></div>

<h3>Les besoins énergétiques du sportif</h3>
<p>La dépense énergétique d'un sportif comprend le <strong>métabolisme de base</strong> (60-70 % des dépenses totales), la <strong>thermogenèse alimentaire</strong> (environ 10 %) et la <strong>dépense liée à l'activité physique</strong> (20-30 % pour une personne sédentaire, jusqu'à 50-60 % pour un athlète d'endurance en phase intense).</p>
<p>Un coureur de fond parcourant 80 km par semaine peut dépenser 3500 à 4500 kcal/jour. Un haltérophile de haut niveau peut atteindre 5000-7000 kcal/jour en phase de prise de masse. Ces chiffres illustrent l'importance d'adapter l'alimentation non seulement au sport pratiqué mais aussi à la phase d'entraînement (préparation, compétition, récupération).</p>

<h3>Les glucides : carburant premier de l'effort</h3>
<p>Les glucides sont le substrat énergétique préférentiel lors d'efforts intenses. Ils sont stockés sous forme de <strong>glycogène</strong> dans le foie (100-120 g) et les muscles (300-600 g selon la masse musculaire). Ce stock glycogénique est la ressource principale lors des efforts à plus de 60-70 % de la VO₂max.</p>
<p>La stratégie de <strong>surcompensation glycogénique</strong> (carboloading) consiste à vider les réserves par un entraînement intense 3-4 jours avant une compétition, puis à les reconstituer en consommant abondamment des glucides complexes. Elle est pratiquée par les marathoniens et triathlètes avant les épreuves longues.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">⚡</div>
  <div class="concept-name">Avant l'effort</div>
  <div class="concept-desc">Repas riche en glucides complexes 3h avant (riz, pâtes, pain complet). Éviter les fibres et les graisses (digestion lente). Collation légère 30-60 min avant si nécessaire</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🏃</div>
  <div class="concept-name">Pendant l'effort</div>
  <div class="concept-desc">Au-delà de 60-90 min : 30-60 g de glucides/heure sous forme de gels, boissons isotoniques ou fruits secs. Eau : 500-750 ml/heure selon transpiration</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🔄</div>
  <div class="concept-name">Fenêtre anabolique</div>
  <div class="concept-desc">Dans les 30-60 min après l'effort : combinaison glucides (1-1,2 g/kg) + protéines (20-25 g) pour reconstituer le glycogène et initier la synthèse protéique</div>
</div>
<div class="concept-card">
  <div class="concept-icon">😴</div>
  <div class="concept-name">Récupération nocturne</div>
  <div class="concept-desc">Caséine (protéine à digestion lente) avant le coucher : yaourt grec, fromage blanc, lait. Soutient la synthèse protéique pendant le sommeil</div>
</div>
</div>

<h3>Les protéines : construction et réparation musculaire</h3>
<p>Les protéines alimentaires fournissent les acides aminés nécessaires à la synthèse de nouvelles fibres musculaires (anabolisme) et à la réparation des dommages causés par l'entraînement. Les recommandations actuelles pour les sportifs de force sont de 1,6 à 2,2 g/kg de poids corporel/jour (contre 0,83 g/kg pour la population générale).</p>
<p>La <strong>qualité protéique</strong> (teneur en acides aminés essentiels, digestibilité) est aussi importante que la quantité. Les protéines animales (whey, viande, poisson, œuf, produits laitiers) ont un score DIAAS généralement supérieur aux protéines végétales, qui peuvent être combinées pour obtenir un profil complet (céréales + légumineuses).</p>
<div class="highlight-box"><p><strong>La leucine, déclencheur de l'anabolisme :</strong> La leucine est l'acide aminé le plus anabolisant — elle active directement la voie mTOR, responsable de la synthèse des protéines musculaires. Une dose de 2-3 g de leucine par repas (équivalent à 25-30 g de protéines complètes) est considérée comme le seuil optimal pour déclencher la synthèse protéique post-exercice.</p></div>

<h3>Les lipides et l'hydratation</h3>
<p>Les lipides sont le substrat principal lors des efforts d'intensité modérée (moins de 60 % VO₂max) et de longue durée. Les acides gras oméga-3 (EPA, DHA) exercent des effets anti-inflammatoires documentés qui améliorent la récupération et peuvent réduire les douleurs musculaires d'apparition tardive (DOMS).</p>
<p>L'<strong>hydratation</strong> est le facteur nutritionnel dont l'effet sur la performance est le plus immédiat. Une déshydratation de 2 % du poids corporel réduit la performance aérobie de 10-20 %. Boire 500 ml d'eau dans les 2h précédant l'effort, puis maintenir un apport régulier pendant l'effort et récupérer 150 % du poids perdu dans les heures suivantes.</p>

<h3>Suppléments : ce qui fonctionne</h3>
<ul>
<li><strong>Créatine monohydrate</strong> : améliore la performance dans les efforts courts et intenses, accélère la synthèse de phosphocréatine. Efficacité démontrée, sécurité bien établie (3-5 g/jour).</li>
<li><strong>Caféine</strong> (3-6 mg/kg, 30-60 min avant l'effort) : réduit la perception de l'effort, améliore l'endurance et les performances de force. L'une des aides ergogéniques les plus efficaces et les mieux documentées.</li>
<li><strong>Bêta-alanine</strong> : tamponne l'acidose musculaire lors d'efforts de 1-4 minutes. Efficace pour les coureurs de demi-fond et les nageurs.</li>
<li><strong>Nitrates (jus de betterave)</strong> : améliore l'utilisation de l'oxygène lors d'efforts sous-maximaux. Effet modeste mais documenté.</li>
</ul>"""

# -----------------------------------------------------------------------
# nutrition/equilibre
# -----------------------------------------------------------------------
new_contenu['nutrition/equilibre'] = """<h3>L'équilibre alimentaire : définition et enjeux</h3>
<p class="resume-text">L'équilibre alimentaire n'est pas un régime ni une contrainte ponctuelle — c'est un mode de vie alimentaire qui assure à l'organisme tous les nutriments dont il a besoin, dans les proportions adéquates, au fil des jours et des semaines. Il ne s'agit pas de manger "sainement" à chaque repas, mais d'atteindre un équilibre global sur la durée. Cette vision dynamique libère des injonctions culpabilisantes et replace l'alimentation dans son contexte de plaisir et de convivialité.</p>
<div class="highlight-box"><p><strong>La règle des 80/20 :</strong> Manger équilibré 80 % du temps laisse 20 % de liberté pour les plaisirs occasionnels (repas de fête, restaurant, envies sucrées) sans aucun impact négatif sur la santé globale. Le perfectionnisme alimentaire (orthorexie) est lui-même un trouble du comportement alimentaire.</p></div>

<h3>Les groupes alimentaires et leurs rôles</h3>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🥦</div>
  <div class="concept-name">Légumes et fruits</div>
  <div class="concept-desc">Vitamines, minéraux, fibres, antioxydants, eau. OMS : plus de 400 g/jour. À consommer à chaque repas, en variant les couleurs pour diversifier les micronutriments</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌾</div>
  <div class="concept-name">Céréales et féculents</div>
  <div class="concept-desc">Source d'énergie durable (glucides complexes), fibres (version complète), vitamines B. Base à chaque repas, en privilégiant les versions peu raffinées</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🥩</div>
  <div class="concept-name">Protéines</div>
  <div class="concept-desc">Viandes, poissons, œufs, légumineuses, produits laitiers. 1 à 2 portions/jour. Les légumineuses + céréales forment une protéine complète (végétarisme)</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🧈</div>
  <div class="concept-name">Matières grasses</div>
  <div class="concept-desc">Huiles végétales (olive, colza), beurre, fruits oléagineux. Indispensables pour les vitamines liposolubles et les acides gras essentiels. Qualité avant quantité</div>
</div>
</div>

<h3>Les nutriments essentiels à ne pas négliger</h3>
<p><strong>Vitamine D :</strong> synthétisée par la peau sous l'effet des UV, rarement couverte par l'alimentation seule en régions peu ensoleillées. Rôle dans l'immunité, la santé osseuse et la prévention de nombreuses maladies chroniques. Une supplémentation est souvent recommandée en hiver en France (800-2000 UI/jour).</p>
<p><strong>Fer :</strong> les femmes en âge de procréer et les sportifs d'endurance sont particulièrement exposés aux carences. Le fer héminique (viandes rouges, abats) est beaucoup mieux absorbé que le fer non héminique (légumineuses, légumes verts). La vitamine C consommée au même repas améliore l'absorption du fer végétal.</p>
<p><strong>Calcium :</strong> au-delà des produits laitiers, les légumes verts à feuilles (épinards, brocolis), les amandes et les eaux calciques (plus de 150 mg/L) sont de bonnes sources. La vitamine D et l'exercice physique sont indispensables à la fixation du calcium osseux.</p>
<p><strong>Oméga-3 (EPA et DHA) :</strong> poissons gras (sardine, maquereau, saumon, hareng) 2 fois par semaine, ou supplémentation en huile de poisson ou d'algues. Réduisent l'inflammation, protègent le système cardiovasculaire et le cerveau.</p>

<h3>Les rythmes alimentaires : quand et comment manger</h3>
<p>La chronobiologie nutritionnelle montre que le <em>timing</em> des repas influence le métabolisme. Le principe général : les repas du matin et du midi sont mieux métabolisés que ceux du soir. La séquence des aliments dans un repas (légumes et protéines avant les glucides) modère la réponse glycémique.</p>
<p>Le modèle français des <strong>3 repas structurés</strong> (petit-déjeuner, déjeuner, dîner) avec peu ou pas de grignotage est un des régimes alimentaires les mieux associés au maintien d'un poids sain dans les études épidémiologiques, notamment par son effet sur la satiété et la régulation hormonale de la faim (ghréline, leptine).</p>
<div class="highlight-box"><p><strong>L'alimentation intuitive :</strong> Approche qui consiste à écouter ses signaux de faim et satiété plutôt que de suivre des règles externes strictes. Elle réduit les comportements restrictifs et les épisodes de compulsions alimentaires, et est associée à une meilleure relation à l'alimentation sur le long terme, particulièrement chez les personnes ayant un passé de régimes répétés.</p></div>

<h3>Les pièges de l'alimentation contemporaine</h3>
<p>L'alimentation occidentale contemporaine est caractérisée par une proportion croissante d'<strong>aliments ultra-transformés</strong> (AUT) : produits industriels contenant des additifs (émulsifiants, arômes artificiels, agents de texture) qui ne se trouvent pas dans la cuisine domestique. L'étude NutriNet (Inserm, France) a montré qu'une augmentation de 10 % de la proportion d'AUT dans l'alimentation est associée à une augmentation de 12 % du risque de cancer et à des risques accrus de maladies cardiovasculaires, de diabète et de dépression.</p>
<p>La classification NOVA des aliments (1 : aliments non transformés, 2 : ingrédients culinaires, 3 : aliments transformés, 4 : ultra-transformés) permet d'orienter ses choix sans diaboliser aucun aliment. L'objectif : réduire la part des aliments de groupe 4 et cuisiner davantage à partir d'ingrédients de groupes 1 et 2.</p>

<h3>Construire une assiette équilibrée au quotidien</h3>
<p>La méthode "assiette Harvard" propose une répartition visuelle simple : la moitié de l'assiette occupée par des légumes et fruits (en privilégiant les légumes), un quart par des protéines de qualité, un quart par des féculents complets, avec de l'eau comme boisson principale et une source de bonnes graisses (huile d'olive, noix). Ce modèle est simple, mémorisable et culturellement adaptable sans sacrifier le plaisir gastronomique.</p>"""

# -----------------------------------------------------------------------
# monde/italienne
# -----------------------------------------------------------------------
new_contenu['monde/italienne'] = """<h3>La cuisine italienne : diversité régionale et vérité des ingrédients</h3>
<p class="resume-text">La cuisine italienne est souvent réduite à la pizza et aux pâtes — une caricature qui occulte l'extraordinaire diversité d'une gastronomie régionale sans équivalent en Europe. L'Italie n'a été unifiée qu'en 1861, et ses régions ont développé pendant des siècles des identités culinaires distinctes, façonnées par le climat, la géographie, les dominations étrangères et les ressources locales. Du risotto lombard aux arancini siciliens, de la bistecca fiorentine à la porchetta romaine, chaque région est un monde gastronomique à part entière.</p>
<div class="highlight-box"><p><strong>Le dogme de la qualité :</strong> La philosophie culinaire italienne repose sur un principe simple mais exigeant : de bons ingrédients préparés simplement valent infiniment mieux que des ingrédients médiocres sophistiqués. L'Italie est championne mondiale de la qualité des matières premières : tomates San Marzano, parmigiano reggiano AOP, prosciutto di Parma, huile d'olive extra-vierge toscane. La technique est au service de l'ingrédient, jamais son contraire.</p></div>

<h3>Les pâtes : un patrimoine vivant</h3>
<p>L'Italie compte plus de 350 formes de pâtes différentes, chacune conçue pour s'associer à une sauce spécifique selon un principe simple : les sauces légères et fines (huile d'olive, beurre, fruits de mer) appellent des pâtes longues et fines (spaghetti, linguine, vermicelles) ; les sauces épaisses et riches (ragù, béchamel, légumes en morceaux) se marient avec des formes larges ou creuses (rigatoni, paccheri, pappardelle).</p>
<p>La grande distinction entre <strong>pâtes fraîches</strong> (pasta fresca, à base d'œufs et de farine 00, tendres et légèrement élastiques) et <strong>pâtes sèches</strong> (pasta secca, semoule de blé dur et eau, alvéolée par l'extrusion en bronze, idéale pour absorber les sauces) structure l'usage quotidien.</p>
<div class="concepts-grid">
<div class="concept-card">
  <div class="concept-icon">🍝</div>
  <div class="concept-name">Amatriciana (Latium)</div>
  <div class="concept-desc">Guanciale (joue de porc cured), tomates San Marzano, pecorino romano, peperoncino. La puriste refuse l'ail, l'oignon et l'huile d'olive dans la recette</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🌿</div>
  <div class="concept-name">Carbonara (Latium)</div>
  <div class="concept-desc">Guanciale, œufs entiers + jaunes, pecorino romano, poivre noir. Pas de crème. La liaison crémeuse vient de l'émulsion œuf-fromage-eau de cuisson</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🍖</div>
  <div class="concept-name">Ragù bolognese (Émilie-Romagne)</div>
  <div class="concept-desc">Bœuf haché + porc, lait, vin blanc, tomate en quantité modeste, cuisson longue 3-4h. La recette officielle est déposée à la Chambre de commerce de Bologne depuis 1982</div>
</div>
<div class="concept-card">
  <div class="concept-icon">🎨</div>
  <div class="concept-name">Pesto alla genovese (Ligurie)</div>
  <div class="concept-desc">Basilic de Gênes, huile d'olive ligure, parmesan + pecorino, pignons de pin, ail. Le vrai pesto se prépare au mortier — le robot chauffe et oxyde les feuilles</div>
</div>
</div>

<h3>Le risotto : la technique du mantecato</h3>
<p>Le risotto est un des plats techniques les plus exigeants de la cuisine italienne. Son secret réside dans le choix du riz (Carnaroli, Vialone Nano ou Arborio — riches en amidon de surface) et dans le <strong>mantecato</strong> final : incorporation hors du feu de beurre froid et de parmesan en fouettant énergiquement pour créer une texture crémeuse et liée ("all'onda" — ondulante).</p>
<p>Le risotto commence par un <em>soffritto</em> (oignon + beurre ou huile), suivi du <em>tostatura</em> (nacrer le riz dans la matière grasse), du <em>sfumatura</em> (déglacer au vin blanc), puis de l'addition progressive du bouillon chaud louche par louche en remuant constamment.</p>

<h3>La pizza : art et technique napolitaines</h3>
<p>La pizza napolitaine est classée au patrimoine immatériel de l'UNESCO depuis 2017. L'association <em>Associazione Verace Pizza Napoletana</em> (AVPN) en définit les règles strictes : farine 0 ou 00, levure fraîche, fermentation longue (8-24 h à température ambiante), étalage exclusivement à la main (pas de rouleau), bords épais et aérés (le "cornicione"), cuisson en four à bois à 450-485 °C pendant 60-90 secondes.</p>

<h3>Les fromages italiens : une culture de la transformation</h3>
<p>L'Italie compte plus de 450 fromages identifiés, dont 50 bénéficient d'une protection AOP/IGP européenne. Quelques emblèmes :</p>
<ul>
<li><strong>Parmigiano Reggiano</strong> : fromage à pâte pressée cuite, affiné 12 à 36 mois minimum. Produit exclusivement dans une zone délimitée. Granuleux, umami intense, cristaux de tyrosine.</li>
<li><strong>Grana Padano</strong> : similaire au parmesan mais zone plus large, affinage plus court (9 mois minimum). Goût plus doux.</li>
<li><strong>Mozzarella di Bufala Campana AOP</strong> : lait de bufflonne, texture filante, goût légèrement acidulé. À distinguer de la "fior di latte" (lait de vache).</li>
<li><strong>Pecorino Romano</strong> : brebis, très salé, utilisé râpé dans la carbonara et l'amatriciana. Beaucoup plus puissant que le parmesan.</li>
</ul>

<h3>La dolce vita culinaire : desserts italiens</h3>
<p>La pâtisserie italienne est moins sophistiquée formellement que la française mais d'une saveur incomparable : <strong>tiramisu</strong> (mascarpone, œufs, biscuits savoiardi, café, cacao — inventé dans les années 1960 à Trévise), <strong>panna cotta</strong> (crème, gélatine, vanille — simplicité absolue), <strong>cannoli siciliens</strong> (tubes frits fourrés de ricotta sucrée aux fruits confits et pistaches), <strong>gelato</strong> (moins de crème que la glace française, plus de lait, moins d'air, servi plus chaud — texture plus dense et plus intense en saveur).</p>"""

# =====================================================================
# Apply the new contenu sections
# =====================================================================

def replace_course_content(old_content, new_body):
    """Replace the <div class="course-content">...</div> block inside section#contenu"""
    pattern = r'(<section[^>]*id="contenu"[^>]*>.*?<div class="course-content">)(.*?)(</div>\s*</section>)'
    replacement = r'\g<1>' + new_body + r'\3'
    new_content, n = re.subn(pattern, replacement, old_content, flags=re.DOTALL)
    if n == 0:
        print(f"WARNING: pattern not found for this article!")
    return new_content

for key, new_body in new_contenu.items():
    old = pages[key]['content']
    pages[key]['content'] = replace_course_content(old, new_body)
    new_len = len(pages[key]['content'])
    print(f"{key}: {new_len} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/cuisine.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("\nDone. cuisine.json updated.")
