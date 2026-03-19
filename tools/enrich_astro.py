import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# etoiles/galaxies
# ============================================================
pages['etoiles/galaxies']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les îles-univers : architectures de milliards d'étoiles</p>
        </div>
      </div>
      <p class="resume-text">Une <strong>galaxie</strong> est un système gravitationnellement lié regroupant des étoiles, du gaz, de la poussière, de la matière noire et des objets compacts. Notre propre Voie lactée contient environ 200 à 400 milliards d'étoiles et s'étend sur plus de 100 000 années-lumière. À l'échelle cosmique, les galaxies sont les briques fondamentales de la structure de l'univers.</p>
      <div class="highlight-box">
        <p><strong>L'essentiel :</strong> l'univers observable contient environ 2 000 milliards de galaxies. Chacune est un univers en miniature, avec sa propre histoire de formation stellaire, ses interactions gravitationnelles et son trou noir central supermassif.</p>
      </div>
      <p class="resume-text">La classification des galaxies, établie par Edwin Hubble dans les années 1920–1930, distingue trois grandes familles morphologiques : les galaxies <strong>spirales</strong>, les galaxies <strong>elliptiques</strong> et les galaxies <strong>irrégulières</strong>. Chaque type reflète une histoire évolutive différente, marquée par la formation d'étoiles, les fusions galactiques et les interactions gravitationnelles.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Structure, classification et évolution des galaxies</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La classification de Hubble</h3>
        <p>En 1926, Edwin Hubble propose une classification morphologique des galaxies encore utilisée aujourd'hui, souvent représentée sous la forme d'une « fourchette de Hubble ». Cette séquence distingue :</p>
        <ul>
          <li><strong>Galaxies elliptiques (E0 à E7) :</strong> formes sphériques à très aplaties, peu de gaz, peu de formation stellaire récente, dominées par de vieilles étoiles rouges.</li>
          <li><strong>Galaxies lenticulaires (S0) :</strong> intermédiaires entre elliptiques et spirales, avec un bulbe central et un disque mais sans bras spiraux bien définis.</li>
          <li><strong>Galaxies spirales (Sa à Sd) :</strong> bulbe central, disque plat avec bras spiraux, riches en gaz et en jeunes étoiles bleues. Les spirales barrées (SBa–SBd) présentent une structure rectiligne traversant le noyau.</li>
          <li><strong>Galaxies irrégulières (Irr) :</strong> sans structure symétrique claire, souvent résultat d'interactions ou de fusions galactiques.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Attention :</strong> la séquence de Hubble n'est pas une séquence évolutive. Ces types reflètent des conditions de formation et d'environnement différentes, pas une progression temporelle.</p>
        </div>

        <h3>Structure interne d'une galaxie spirale</h3>
        <p>Les galaxies spirales présentent plusieurs composantes structurelles distinctes :</p>
        <ul>
          <li><strong>Le noyau (bulbe) :</strong> région centrale dense, dominée par de vieilles étoiles et souvent un trou noir supermassif. Le bulbe de la Voie lactée mesure environ 10 000 années-lumière de diamètre.</li>
          <li><strong>Le disque :</strong> plan d'épaisseur de quelques milliers d'années-lumière où se concentrent gaz, poussières et étoiles jeunes. C'est là que se trouvent les bras spiraux.</li>
          <li><strong>Les bras spiraux :</strong> régions de densité accrue qui agissent comme des ondes de densité se propageant dans le disque, déclenchant la formation d'étoiles. Ils ne sont pas des structures rigides mais des zones où la matière s'accumule temporairement.</li>
          <li><strong>Le halo :</strong> sphère diffuse entourant le disque, peuplée d'amas globulaires et de vieilles étoiles.</li>
          <li><strong>Le halo de matière noire :</strong> enveloppe invisible mais massive, responsable de la rotation « anormale » du disque galactique. Elle représente environ 85 % de la masse totale de la galaxie.</li>
        </ul>

        <h3>Galaxies elliptiques : les géantes silencieuses</h3>
        <p>Les galaxies elliptiques sont les plus massives de l'univers. La galaxie M87 (Virgo A), à 55 millions d'années-lumière, contient plusieurs milliers de milliards d'étoiles et un trou noir supermassif de 6,5 milliards de masses solaires — le premier trou noir jamais photographié directement (Event Horizon Telescope, 2019). Les elliptiques sont pauvres en gaz et en formation stellaire : leurs étoiles sont vieilles et rouges. On les trouve surtout au cœur des amas de galaxies, où les fusions répétées ont absorbé de nombreuses galaxies plus petites.</p>
        <div class="highlight-box">
          <p><strong>Cannibalisme galactique :</strong> les grandes galaxies elliptiques grossissent en absorbant leurs voisines plus petites. Ce processus est un mécanisme majeur de croissance des galaxies massives au fil des milliards d'années.</p>
        </div>

        <h3>Formation et évolution des galaxies</h3>
        <p>Le scénario dominant, dit de <strong>formation hiérarchique</strong>, prédit que les petites structures se forment en premier puis fusionnent pour créer des structures de plus en plus grandes :</p>
        <ol>
          <li>Les premières proto-galaxies apparaissent 200–400 millions d'années après le Big Bang.</li>
          <li>Ces petites proto-galaxies fusionnent progressivement sous l'effet de la gravité pour former des galaxies de taille croissante.</li>
          <li>Les fusions majeures peuvent transformer des spirales en elliptiques et déclenchent des épisodes intenses de formation stellaire (<strong>starburst</strong>).</li>
          <li>L'activité des noyaux actifs de galaxies régule la formation stellaire en injectant de l'énergie dans le gaz environnant.</li>
        </ol>

        <h3>Noyaux actifs de galaxies (AGN)</h3>
        <p>La plupart des galaxies massives abritent un <strong>trou noir supermassif</strong> en leur centre. Lorsque ce trou noir accrète activement de la matière, il émet des quantités colossales d'énergie sous forme de rayonnement et de jets relativistes : on parle de <strong>noyau actif de galaxie</strong> (AGN). Les quasars, extrêmement lumineux, sont observés préférentiellement à grand décalage vers le rouge (z > 1), témoignant d'une époque où ce phénomène était bien plus fréquent. Le quasar le plus lumineux connu, J0529-4351, émet l'équivalent de 500 000 milliards de soleils.</p>

        <h3>La toile cosmique</h3>
        <p>Les galaxies ne sont pas distribuées aléatoirement dans l'espace : elles se regroupent en <strong>groupes</strong> (quelques dizaines de galaxies), en <strong>amas</strong> (des centaines à des milliers) et en <strong>superamas</strong>. Notre Voie lactée appartient au Groupe Local, lui-même inclus dans le superamas Laniakea, qui s'étend sur 520 millions d'années-lumière et contient environ 100 000 galaxies. À grande échelle, les galaxies forment une structure en filets et filaments séparés par d'immenses vides cosmiques : c'est la <strong>toile cosmique</strong>.</p>

        <h3>Collision future : la naissance de Milkomeda</h3>
        <p>La <strong>galaxie d'Andromède</strong> (M31), à 2,5 millions d'années-lumière, s'approche de la Voie lactée à environ 110 km/s. Dans environ 4,5 milliards d'années, les deux galaxies entreront en collision et fusionneront pour former une grande galaxie elliptique surnommée <strong>Milkomeda</strong>. Cette collision n'implique pratiquement aucun choc entre étoiles — trop espacées — mais restructurera radicalement les deux galaxies et déclenchera un intense épisode de formation stellaire.</p>
        <div class="highlight-box">
          <p><strong>Hubble Deep Field (1995) :</strong> en pointant pendant 10 jours sur un minuscule carré de ciel apparemment vide, le télescope Hubble a révélé environ 3 000 galaxies, dont certaines vieilles de plus de 12 milliards d'années — une image fondatrice pour la cosmologie moderne.</p>
        </div>
      </div>
    </section>"""

print('etoiles/galaxies done, len:', len(pages['etoiles/galaxies']['content']))

# ============================================================
# etoiles/voie-lactee
# ============================================================
pages['etoiles/voie-lactee']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Notre galaxie : une spirale barrée de 200 milliards d'étoiles</p>
        </div>
      </div>
      <p class="resume-text">La <strong>Voie lactée</strong> est la galaxie qui contient notre système solaire. Spirale barrée d'environ 100 000 années-lumière de diamètre, elle abrite entre 200 et 400 milliards d'étoiles ainsi qu'une quantité considérable de gaz, de poussières et de matière noire. Son nom vient de la bande lumineuse qu'elle forme dans le ciel nocturne, visible depuis un site non pollué par la lumière artificielle.</p>
      <div class="highlight-box">
        <p><strong>Notre place dans la galaxie :</strong> le Soleil se trouve à environ 26 000 années-lumière du centre galactique, dans un bras spirale intermédiaire appelé le Bras d'Orion. Il met environ 225 millions d'années pour accomplir une révolution complète autour du centre — ce laps de temps est appelé l'<em>année galactique</em>.</p>
      </div>
      <p class="resume-text">Longtemps confondu avec l'univers tout entier, le statut de galaxie de la Voie lactée ne fut établi qu'en 1924, lorsque Edwin Hubble mesura la distance de la nébuleuse d'Andromède et prouva qu'elle se trouvait bien au-delà des limites de notre propre système stellaire.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Bras spiraux, centre galactique et voisinage local</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Structure de la Voie lactée</h3>
        <p>La Voie lactée est classée comme une <strong>galaxie spirale barrée</strong> (type SBbc dans la classification de Hubble). Ses principales composantes sont :</p>
        <ul>
          <li><strong>Le bulbe central :</strong> renflé, d'environ 10 000 années-lumière de diamètre, dominé par de vieilles étoiles rouges et jaunes. Il contient un trou noir supermassif en son centre.</li>
          <li><strong>La barre centrale :</strong> structure rectiligne d'étoiles qui traverse le centre galactique, longue d'environ 27 000 années-lumière. C'est elle qui confère à notre galaxie son statut de spirale « barrée ».</li>
          <li><strong>Le disque :</strong> fin (environ 1 000 années-lumière d'épaisseur) et étendu (100 000 années-lumière de diamètre), il concentre l'essentiel du gaz, des poussières et des étoiles jeunes.</li>
          <li><strong>Les bras spiraux :</strong> quatre bras principaux partent de la barre — le Bras de Persée, le Bras du Sagittaire, le Bras du Centaure et le Bras de la Croix du Cygne. Notre Soleil se trouve dans un bras secondaire, le Bras d'Orion.</li>
          <li><strong>Le halo stellaire :</strong> enveloppe sphérique contenant des étoiles isolées très vieilles et une centaine d'amas globulaires.</li>
          <li><strong>Le halo de matière noire :</strong> enveloppe invisible représentant environ 85 % de la masse totale de la galaxie, s'étendant jusqu'à 600 000 années-lumière.</li>
        </ul>

        <h3>Sagittarius A* : le trou noir central</h3>
        <p>Au cœur de la Voie lactée se trouve <strong>Sagittarius A*</strong> (Sgr A*), un trou noir supermassif de 4 millions de masses solaires. Sa présence fut longtemps suspectée grâce aux orbites des étoiles proches du centre galactique, observées par Reinhard Genzel et Andrea Ghez (Prix Nobel de physique 2020 partagé avec Roger Penrose).</p>
        <p>En mai 2022, la collaboration Event Horizon Telescope (EHT) a produit la première image directe de Sgr A*, révélant un anneau lumineux de plasma en orbite autour de l'horizon des événements. Ce trou noir est actuellement relativement peu actif, contrairement à certains noyaux actifs de galaxies.</p>
        <div class="highlight-box">
          <p><strong>Orbites stellaires :</strong> l'étoile S2, qui orbite à seulement 17 heures-lumière de Sgr A*, atteint une vitesse de 7 650 km/s — soit 2,5 % de la vitesse de la lumière — lors de son passage au périastre. Son observation sur 30 ans a permis de peser Sgr A* avec précision.</p>
        </div>

        <h3>La formation stellaire dans le disque</h3>
        <p>La Voie lactée forme encore environ 1 à 3 étoiles nouvelles par an. Les régions de formation stellaire les plus actives se trouvent dans les bras spiraux, notamment dans des nébuleuses géantes comme Orion, Carina ou Eagle. Ces nébuleuses contiennent du gaz moléculaire dense qui s'effondre sous l'effet de sa propre gravité pour former de nouvelles étoiles.</p>
        <p>Le taux de formation stellaire de notre galaxie est modéré comparé à certaines galaxies starburst qui peuvent former des centaines d'étoiles par an. Ce rythme modéré est en partie régulé par les vents stellaires, les supernovae et l'activité passée du noyau galactique.</p>

        <h3>Les amas globulaires : fossiles vivants</h3>
        <p>La Voie lactée possède environ 150 <strong>amas globulaires</strong> — des sphères denses de 100 000 à un million d'étoiles très vieilles (10 à 13 milliards d'années). Ces amas se trouvent principalement dans le halo stellaire et orbitent le centre galactique sur des trajectoires allongées.</p>
        <p>Les amas globulaires sont des témoins de la formation initiale de la galaxie. L'étude de leur composition chimique révèle qu'ils contiennent très peu d'éléments lourds (métaux, au sens astronomique), confirmant leur grande antiquité. L'amas globulaire Oméga Centauri, avec 10 millions d'étoiles, est le plus massif et serait peut-être le noyau d'une ancienne galaxie naine absorbée.</p>

        <h3>Le voisinage local : satellites et groupe</h3>
        <p>La Voie lactée est accompagnée d'une vingtaine de galaxies satellites gravitant autour d'elle :</p>
        <ul>
          <li><strong>Grand Nuage de Magellan (GNM) :</strong> à 163 000 années-lumière, galaxie irrégulière de 30 milliards d'étoiles, contenant la Nébuleuse de la Tarentule, région de formation stellaire la plus active du Groupe Local.</li>
          <li><strong>Petit Nuage de Magellan (PNM) :</strong> à 200 000 années-lumière, plus petite que le GNM. Les deux nuages sont liés par un pont de gaz appelé <em>Courant de Magellan</em>.</li>
          <li><strong>Galaxie naine du Sagittaire :</strong> à seulement 70 000 années-lumière, est actuellement en train d'être déchirée et absorbée par la Voie lactée.</li>
        </ul>
        <p>Notre galaxie et Andromède dominent le <strong>Groupe Local</strong>, qui contient en tout une cinquantaine de galaxies réparties dans une région d'environ 10 millions d'années-lumière de diamètre.</p>

        <h3>Cartographier la galaxie depuis l'intérieur</h3>
        <p>Observer et cartographier notre propre galaxie est un défi particulier : nous sommes dedans, et le disque galactique est opaque aux longueurs d'onde visibles en raison de la poussière interstellaire. Les astronomes utilisent d'autres fenêtres du spectre électromagnétique :</p>
        <ul>
          <li><strong>Radio (raie à 21 cm) :</strong> émise par l'hydrogène neutre, elle traverse la poussière et permet de cartographier la distribution du gaz dans les bras spiraux.</li>
          <li><strong>Infrarouge :</strong> pénètre partiellement la poussière et révèle les étoiles du bulbe et les régions de formation stellaire.</li>
          <li><strong>Rayons X et gamma :</strong> tracent les sources de haute énergie, comme les restes de supernovae et le voisinage de Sgr A*.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Mission Gaia (ESA) :</strong> lancée en 2013, la mission Gaia a mesuré avec une précision sans précédent la position, la parallaxe et le mouvement propre de plus d'un milliard d'étoiles, révolutionnant notre cartographie tridimensionnelle de la Voie lactée et permettant de retracer son histoire d'assemblage par fusions successives.</p>
        </div>

        <h3>L'histoire de la Voie lactée</h3>
        <p>La Voie lactée s'est formée il y a environ 13,5 milliards d'années à partir de l'effondrement d'un nuage de gaz primordial. Elle a depuis lors grandi en absorbant de petites galaxies satellites — processus appelé <em>accrétion hiérarchique</em>. Les données Gaia ont permis d'identifier plusieurs événements de fusion majeurs, dont la collision avec la galaxie <strong>Gaia-Encelade</strong> il y a 10 milliards d'années, qui a fortement structuré le halo interne de notre galaxie.</p>
      </div>
    </section>"""

print('etoiles/voie-lactee done, len:', len(pages['etoiles/voie-lactee']['content']))

# ============================================================
# etoiles/types
# ============================================================
pages['etoiles/types']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Classification stellaire : de O à M, une diversité spectaculaire</p>
        </div>
      </div>
      <p class="resume-text">Les étoiles ne sont pas toutes semblables. Elles varient considérablement en masse, taille, température, luminosité et durée de vie. Pour mettre de l'ordre dans cette diversité, les astronomes ont développé un système de <strong>classification spectrale</strong> — la séquence O-B-A-F-G-K-M — qui organise les étoiles selon leur température de surface, révélée par la couleur de leur lumière et les raies d'absorption de leurs spectres.</p>
      <div class="highlight-box">
        <p><strong>Moyen mnémotechnique :</strong> la séquence O-B-A-F-G-K-M se retient avec la phrase « Oh Be A Fine Girl/Guy, Kiss Me ». Le Soleil est une étoile de type G2, avec une température de surface d'environ 5 778 K.</p>
      </div>
      <p class="resume-text">Cette classification, combinée au <strong>diagramme de Hertzsprung-Russell</strong> (HR), est l'outil central de l'astrophysique stellaire. Il relie luminosité et température de surface, révélant les grandes étapes de la vie des étoiles et permettant d'estimer leur masse, leur âge et leur évolution future.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Classification spectrale, diagramme HR et propriétés physiques</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La classification spectrale MKK</h3>
        <p>La classification spectrale moderne (système MKK, de Morgan-Keenan-Kellman, 1943) organise les étoiles en <strong>classes spectrales</strong> selon leur température de surface. Chaque classe est subdivisée de 0 (plus chaud) à 9 (plus froid) :</p>
        <ul>
          <li><strong>O (30 000–100 000 K) :</strong> étoiles bleues très massives (20–150 M☉), extrêmement lumineuses mais rares et à courte durée de vie (&lt; 10 millions d'années). Exemples : Mintaka (Orion), étoiles du Trapèze dans M42.</li>
          <li><strong>B (10 000–30 000 K) :</strong> étoiles bleu-blanc, massives (3–20 M☉). Exemples : Rigel (B8, 120 000 L☉), Spica. Durée de vie : 10–100 millions d'années.</li>
          <li><strong>A (7 500–10 000 K) :</strong> étoiles blanches, 1,5–3 M☉. Exemples : Sirius (A1, l'étoile la plus brillante du ciel), Véga, Altaïr. Caractérisées par de fortes raies de l'hydrogène.</li>
          <li><strong>F (6 000–7 500 K) :</strong> étoiles blanc-jaune, 1–1,5 M☉. Exemples : Procyon, Canope. Raies de métaux commencent à apparaître.</li>
          <li><strong>G (5 000–6 000 K) :</strong> étoiles jaunes, 0,8–1,2 M☉. Exemple : le Soleil (G2, 1 L☉), Alpha Centauri A. Durée de vie ~10 milliards d'années.</li>
          <li><strong>K (3 500–5 000 K) :</strong> étoiles orange, 0,5–0,8 M☉. Exemples : Arcturus, Aldébaran. Très abondantes et longévives (15–30 milliards d'années).</li>
          <li><strong>M (&lt; 3 500 K) :</strong> étoiles rouges, 0,1–0,5 M☉. Exemples : Proxima Centauri, Bételgeuse (supergéante M). Les naines rouges sont les étoiles les plus abondantes de la galaxie (~75 % du total). Durée de vie potentiellement &gt; 100 milliards d'années.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Classes additionnelles :</strong> des classes étendues complètent la séquence : <strong>L</strong>, <strong>T</strong> et <strong>Y</strong> pour les naines brunes (objets substellaires trop peu massifs pour fusionner l'hydrogène), et <strong>W</strong> pour les étoiles Wolf-Rayet (supermassives avec des vents stellaires extrêmes).</p>
        </div>

        <h3>Le diagramme de Hertzsprung-Russell</h3>
        <p>Proposé indépendamment par Ejnar Hertzsprung (1909) et Henry Norris Russell (1913), le <strong>diagramme HR</strong> représente les étoiles dans un espace à deux dimensions : luminosité (en ordonnée) et température de surface ou type spectral (en abscisse). La plupart des étoiles se regroupent dans des régions distinctes :</p>
        <ul>
          <li><strong>La séquence principale :</strong> bande diagonale principale où se trouvent toutes les étoiles en train de fusionner l'hydrogène en hélium dans leur noyau. Le Soleil s'y trouve. La position sur cette séquence est déterminée par la masse : les étoiles massives sont plus lumineuses et plus chaudes, en haut à gauche.</li>
          <li><strong>Les géantes et supergéantes :</strong> en haut à droite, grandes et lumineuses mais plus froides. Elles ont quitté la séquence principale et fusionnent l'hélium ou des éléments plus lourds dans leur noyau.</li>
          <li><strong>Les naines blanches :</strong> en bas à gauche, très chaudes mais peu lumineuses car de petite taille. Ce sont les restes d'étoiles de faible et moyenne masse après l'expulsion de leurs couches externes.</li>
          <li><strong>Les naines brunes :</strong> encore plus bas à droite, objets substellaires qui n'ont jamais amorcé la fusion de l'hydrogène de façon soutenue.</li>
        </ul>

        <h3>La luminosité et la classe de luminosité</h3>
        <p>La classification MKK ajoute une <strong>classe de luminosité</strong> en chiffres romains pour distinguer les étoiles de même température mais de taille différente :</p>
        <ul>
          <li><strong>Ia / Ib :</strong> supergéantes lumineuses et moins lumineuses (Bételgeuse : M2Ia, Rigel : B8Ia)</li>
          <li><strong>II :</strong> géantes lumineuses</li>
          <li><strong>III :</strong> géantes normales (Arcturus : K1III)</li>
          <li><strong>IV :</strong> sous-géantes</li>
          <li><strong>V :</strong> naines (séquence principale) — le Soleil : G2V</li>
          <li><strong>VI / sd :</strong> sous-naines</li>
          <li><strong>D :</strong> naines blanches</li>
        </ul>

        <h3>Étoiles remarquables : les extrêmes</h3>
        <p>La diversité stellaire produit des objets aux propriétés extrêmes :</p>
        <ul>
          <li><strong>Étoile la plus massive :</strong> R136a1 (type O), dans le Grand Nuage de Magellan, avec environ 215 masses solaires et une luminosité 8 millions de fois celle du Soleil. Elle a perdu une grande partie de sa masse initiale par vents stellaires.</li>
          <li><strong>Étoile la plus grande :</strong> UY Scuti, supergéante rouge avec un rayon d'environ 1 700 R☉ — si elle remplaçait le Soleil, sa surface atteindrait l'orbite de Jupiter.</li>
          <li><strong>Étoile la plus proche :</strong> Proxima Centauri, naine rouge à 4,24 années-lumière, faiblement lumineuse (0,00005 L☉) mais longévive (durée de vie estimée > 4 000 milliards d'années).</li>
          <li><strong>Naines blanches :</strong> les plus denses parmi les étoiles visibles — une cuillère à café de matière d'une naine blanche pèserait plusieurs tonnes sur Terre.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Étoiles variables :</strong> certaines étoiles varient en luminosité de façon périodique — les <strong>Céphéides</strong> pulsent avec une période liée à leur luminosité intrinsèque, ce qui en fait des chandelles standard pour mesurer les distances dans l'univers. C'est grâce à la Céphéide de la nébuleuse d'Andromède qu'Edwin Hubble a pu établir que cette nébuleuse était une galaxie extérieure en 1924.</p>
        </div>

        <h3>La relation masse-luminosité</h3>
        <p>Sur la séquence principale, la luminosité d'une étoile est approximativement proportionnelle à sa masse élevée à la puissance 4 : L ∝ M⁴. Cela signifie qu'une étoile deux fois plus massive que le Soleil sera environ 16 fois plus lumineuse — et consommera son carburant bien plus vite. Une étoile de 10 masses solaires vit environ 10 fois moins longtemps qu'une étoile d'une masse solaire, soit une centaine de millions d'années contre 10 milliards.</p>
      </div>
    </section>"""

print('etoiles/types done, len:', len(pages['etoiles/types']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print('Batch 1 saved.')
