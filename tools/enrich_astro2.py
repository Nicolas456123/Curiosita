import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# systeme-solaire/soleil
# ============================================================
pages['systeme-solaire/soleil']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Notre étoile : un réacteur nucléaire de 1,4 million de kilomètres</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>Soleil</strong> est l'étoile centrale de notre système solaire. Naine jaune de type spectral G2V, il représente 99,86 % de la masse totale du système solaire et fournit la quasi-totalité de l'énergie qui rend la vie possible sur Terre. Sa distance moyenne à la Terre — 150 millions de kilomètres, définie comme une <strong>unité astronomique</strong> (UA) — est telle que sa lumière met 8 minutes et 20 secondes pour nous parvenir.</p>
      <div class="highlight-box">
        <p><strong>Données fondamentales :</strong> masse = 1,989 × 10³⁰ kg (333 000 masses terrestres) ; rayon = 696 000 km (109 rayons terrestres) ; âge ≈ 4,6 milliards d'années ; durée de vie restante ≈ 5 milliards d'années ; température de surface ≈ 5 778 K ; luminosité = 3,828 × 10²⁶ W.</p>
      </div>
      <p class="resume-text">Le Soleil est au milieu de sa vie sur la séquence principale. Il fusionne environ 600 millions de tonnes d'hydrogène en hélium chaque seconde, convertissant 4 millions de tonnes en énergie pure selon E = mc². Cette énergie met environ 100 000 ans à traverser les couches internes du Soleil avant d'être émise en quelques minutes sous forme de lumière et de chaleur.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Structure interne, atmosphère et activité solaire</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Structure interne : du cœur à la surface</h3>
        <p>Le Soleil est une sphère de plasma stratifiée en plusieurs couches distinctes :</p>
        <ul>
          <li><strong>Le noyau (0–25 % du rayon) :</strong> température ≈ 15 millions de K, pression ≈ 250 milliards d'atmosphères. C'est là que se produit la <strong>fusion nucléaire</strong> — la chaîne proton-proton — qui convertit l'hydrogène en hélium. La densité y atteint 150 g/cm³, 12 fois plus dense que le plomb.</li>
          <li><strong>Zone radiative (25–70 % du rayon) :</strong> l'énergie se propage par rayonnement. Un photon peut mettre 100 000 à 200 000 ans pour traverser cette zone, tant il est absorbé et réémis continuellement par le plasma dense. Temperature : de 7 millions à 2 millions de K.</li>
          <li><strong>Zone convective (70–100 % du rayon) :</strong> l'énergie se propage par convection — des cellules de plasma chaud montent, refroidissent en surface, puis redescendent. Ce mouvement donne à la surface l'aspect de la granulation solaire.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La mission Parker Solar Probe :</strong> lancée en 2018, elle s'approche à moins de 10 rayons solaires de la surface pour étudier le vent solaire à sa source. En 2021, elle a « touché » le Soleil en traversant la couronne, franchissant pour la première fois l'<em>alfvén surface</em> — la limite où le plasma solaire ne peut plus revenir.</p>
        </div>

        <h3>L'atmosphère solaire</h3>
        <p>La partie visible et l'atmosphère du Soleil se composent de plusieurs couches :</p>
        <ul>
          <li><strong>La photosphère :</strong> couche « visible » du Soleil, épaisse d'environ 500 km. Température ≈ 5 778 K. Elle présente la <em>granulation</em> — un réseau de cellules convectives de 1 000 km de diamètre, visibles comme un motif de grain de riz. Les <strong>taches solaires</strong> sont des régions plus froides (3 500–4 500 K) là où les champs magnétiques localement intenses inhibent la convection.</li>
          <li><strong>La chromosphère :</strong> couche de 2 000 km d'épaisseur, visible lors des éclipses totales comme un halo rouge. Température : 4 000 à 20 000 K. Les <em>spicules</em> sont des jets de plasma qui jaillissent à 10 000 km/s dans cette couche.</li>
          <li><strong>La couronne :</strong> atmosphère externe extrêmement ténue s'étendant sur plusieurs millions de kilomètres. Sa température, paradoxalement, atteint 1 à 3 millions de K — bien plus que la photosphère. L'explication de ce <strong>problème du chauffage coronal</strong> reste l'un des grands mystères de la physique solaire ; les ondes d'Alfvén et les nanoflares sont les candidats les plus étudiés.</li>
        </ul>

        <h3>La fusion nucléaire : chaîne proton-proton</h3>
        <p>Dans le noyau solaire, la fusion procède principalement par la <strong>chaîne proton-proton (pp)</strong>. En simplifiant :</p>
        <ol>
          <li>Deux protons (noyaux d'hydrogène) fusionnent pour former un deutérium, en émettant un positron et un neutrino.</li>
          <li>Le deutérium fusionne avec un proton pour former l'hélium-3, en émettant un photon gamma.</li>
          <li>Deux noyaux d'hélium-3 fusionnent pour former l'hélium-4, en libérant deux protons.</li>
        </ol>
        <p>Le bilan net : 4 protons → 1 noyau d'hélium-4 + 2 positrons + 2 neutrinos + énergie. L'énergie libérée est la différence de masse (0,7 %) convertie selon E = mc². Les <strong>neutrinos solaires</strong>, presque insensibles à la matière, nous parviennent en 8 minutes et peuvent être détectés par des expériences spécialisées comme Super-Kamiokande ou SNO.</p>

        <h3>Le vent solaire</h3>
        <p>Le <strong>vent solaire</strong> est un flux continu de particules chargées (principalement protons et électrons) émis par la couronne à des vitesses de 300 à 800 km/s. Il remplit tout le système solaire jusqu'à l'<em>héliopause</em>, à environ 120 UA du Soleil, où il rencontre le milieu interstellaire. Les sondes Voyager 1 et 2 ont traversé cette limite en 2012 et 2018.</p>
        <p>L'interaction du vent solaire avec le champ magnétique terrestre est à l'origine des <strong>aurores boréales et australes</strong>. Les particules sont canalisées vers les pôles magnétiques et excitent les atomes de l'atmosphère, produisant les lumières colorées caractéristiques.</p>
        <div class="highlight-box">
          <p><strong>Éjections de masse coronale (EMC) :</strong> lors d'éruptions majeures, des milliards de tonnes de plasma peuvent être éjectées à des vitesses de 1 000 à 3 000 km/s. Si elles atteignent la Terre, elles peuvent provoquer des <em>tempêtes géomagnétiques</em> perturbant les satellites, les réseaux électriques et les communications radio. L'événement de Carrington (1859) reste la tempête géomagnétique la plus puissante jamais enregistrée.</p>
        </div>

        <h3>Les cycles solaires</h3>
        <p>L'activité du Soleil suit un cycle d'environ <strong>11 ans</strong>, marqué par la variation du nombre de taches solaires, de la fréquence des éruptions et de l'intensité du vent solaire. À l'intérieur de chaque cycle, les pôles magnétiques solaires s'inversent, de sorte que le cycle magnétique complet dure 22 ans.</p>
        <p>Pendant le <em>maximum solaire</em>, le Soleil est plus actif : plus de taches, plus d'éruptions, vent solaire plus dense. Pendant le <em>minimum solaire</em>, l'activité diminue. Certaines périodes historiques ont vu une activité très réduite : le <strong>minimum de Maunder</strong> (1645–1715) coïncide avec le « Petit Âge Glaciaire » en Europe, bien que la relation causale reste débattue.</p>

        <h3>Le destin du Soleil</h3>
        <p>Dans environ 5 milliards d'années, le Soleil aura épuisé son hydrogène central et se transformera en <strong>géante rouge</strong>, gonflant jusqu'à englober probablement l'orbite de la Terre. Il perdra ensuite ses couches externes pour former une <strong>nébuleuse planétaire</strong>, laissant un résidu dense : une <strong>naine blanche</strong> de la taille de la Terre mais de la masse du Soleil, qui refroidira lentement pendant des milliards d'années.</p>
        <div class="highlight-box">
          <p><strong>L'héliosphère :</strong> la « bulle » magnétique que le Soleil maintient autour du système solaire grâce au vent solaire nous protège d'une partie des rayons cosmiques galactiques. Sa taille varie avec le cycle solaire. Voyager 1, à 24 milliards de km du Soleil, se trouve désormais dans l'espace interstellaire, au-delà de cette bulle protectrice.</p>
        </div>
      </div>
    </section>"""

print('systeme-solaire/soleil done, len:', len(pages['systeme-solaire/soleil']['content']))

# ============================================================
# systeme-solaire/planetes-telluriques
# ============================================================
pages['systeme-solaire/planetes-telluriques']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les mondes rocheux : Mercure, Vénus, Terre et Mars</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>planètes telluriques</strong> — du latin <em>tellus</em>, la Terre — sont les quatre planètes rocheuses situées dans la partie interne du système solaire, entre le Soleil et la ceinture d'astéroïdes. Mercure, Vénus, la Terre et Mars partagent une composition similaire : un noyau métallique, un manteau rocheux et une croûte solide. Mais leurs histoires géologiques, atmosphériques et de potentiel habitabilité divergent radicalement.</p>
      <div class="highlight-box">
        <p><strong>Une diversité saisissante :</strong> à partir des mêmes matériaux primordiaux, l'évolution a conduit à un monde sans atmosphère (Mercure), un enfer de 460°C (Vénus), la seule planète abritant la vie connue (Terre), et un désert glacial rougeâtre (Mars). Comprendre ces divergences est central pour l'astrobiologie.</p>
      </div>
      <p class="resume-text">Les planètes telluriques se sont formées il y a environ 4,5 milliards d'années par <strong>accrétion</strong> — l'agglomération progressive de poussières et de roches dans le disque protoplanétaire autour du jeune Soleil. Leur composition en éléments lourds (fer, silicium, oxygène) reflète la condensation sélective des matériaux selon la température, plus élevée dans la zone interne du système solaire.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Mercure, Vénus, Terre et Mars : portraits comparés</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Mercure : le monde extrême le plus proche du Soleil</h3>
        <p>Mercure est la planète la plus petite (rayon = 2 440 km) et la plus proche du Soleil (0,387 UA). Sa surface est criblée de cratères, ressemblant à la Lune. Elle possède la plus grande plage thermique du système solaire : de −180°C la nuit à +430°C le jour, car elle n'a pratiquement pas d'atmosphère pour réguler les températures.</p>
        <p>Mercure tourne très lentement sur elle-même (un jour sidéral = 59 jours terrestres) et sa période orbitale est de 88 jours. Cette lente rotation et sa gravité trop faible pour retenir une atmosphère dense expliquent l'absence de cycle journalier thermique modéré. Son <strong>noyau de fer</strong> est disproportionnellement grand (85 % du rayon planétaire), peut-être résultat d'un impact géant précoce qui a arraché une grande partie de la croûte et du manteau.</p>
        <div class="highlight-box">
          <p><strong>Eau glacée sur Mercure :</strong> malgré les températures extrêmes, des radars ont détecté des dépôts de glace d'eau au fond de cratères polaires, dans des zones permanentes d'ombre. Ces dépôts ont probablement été apportés par des comètes et des astéroïdes au fil du temps.</p>
        </div>

        <h3>Vénus : la planète jumelle infernale</h3>
        <p>Vénus est souvent qualifiée de « jumelle » de la Terre en raison de sa taille similaire (rayon = 6 052 km contre 6 371 km pour la Terre) et de sa masse comparable. Pourtant, c'est la planète la plus hostile du système solaire. Sa surface atteint <strong>462°C en permanence</strong> — plus chaude que Mercure malgré son éloignement supérieur — en raison d'un <em>effet de serre runaway</em> extrême.</p>
        <p>L'atmosphère vénusienne est composée à 96,5 % de CO₂ avec des nuages d'acide sulfurique. La pression atmosphérique au sol est 92 fois celle de la Terre. La rotation de Vénus est rétrograde (sens inverse) et ultra-lente (un jour vénusien = 243 jours terrestres, plus long que son année de 225 jours). La surface est dominée par des plaines volcaniques et deux continents élevés (Ishtar Terra et Aphrodite Terra).</p>
        <p>Vénus est géologiquement jeune (surface estimée à 300–600 millions d'années) et probablement encore volcaniquement active. Des données récentes de la sonde Magellan, et surtout des mesures de phosphine controversées en 2020, ont relancé l'intérêt pour Vénus. Les missions DAVINCI+ et VERITAS (NASA) et EnVision (ESA) sont prévues pour les années 2030.</p>

        <h3>La Terre : le cas particulier habitable</h3>
        <p>La Terre est la seule planète connue abritant la vie. Plusieurs caractéristiques la distinguent :</p>
        <ul>
          <li><strong>L'eau liquide en surface :</strong> présente en abondance grâce à sa position dans la zone habitable du Soleil, à sa pression atmosphérique et à son effet de serre modéré.</li>
          <li><strong>La tectonique des plaques :</strong> unique dans le système solaire, ce mécanisme recycle le carbone (cycle carbonate-silicate) et maintient un effet de serre stable sur des milliards d'années.</li>
          <li><strong>Le champ magnétique :</strong> généré par la convection dans le noyau externe liquide de fer, il protège l'atmosphère du vent solaire.</li>
          <li><strong>La Lune :</strong> notre grand satellite stabilise l'axe de rotation terrestre (±1° autour de 23,5°), évitant les variations climatiques extrêmes qui se produisent sur Mars.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>L'impact géant et la formation de la Lune :</strong> il y a 4,5 milliards d'années, un corps de la taille de Mars (Théia) a percuté la proto-Terre. Les débris projetés en orbite se sont agglomérés pour former la Lune. Cet impact a aussi incliné l'axe terrestre, créant les saisons.</p>
        </div>

        <h3>Mars : le désert rougeâtre, candidat à la vie passée</h3>
        <p>Mars, avec un rayon de 3 390 km (moitié de la Terre), est la planète tellurique la plus explorée après la nôtre. Sa surface rouge est couverte d'oxyde de fer (rouille). Son atmosphère très ténue (0,6 % de la pression terrestre, 95 % CO₂) ne retient pas la chaleur : les températures varient de −125°C aux pôles en hiver à +20°C à l'équateur en été.</p>
        <p>Mars présente des indices d'un passé plus humide et plus chaud, il y a 3 à 4 milliards d'années :</p>
        <ul>
          <li>Des vallées fluviales et des deltas fossilisés (Jezero Crater, exploré par Perseverance)</li>
          <li>Des minéraux hydratés (argiles, sulfates) formés en présence d'eau</li>
          <li>Des canaux de sortie suggérant des inondations catastrophiques</li>
        </ul>
        <p>Mars abrite les structures géologiques les plus spectaculaires du système solaire : <strong>Olympus Mons</strong> (volcan de 26 km de haut, le plus grand du système solaire) et <strong>Valles Marineris</strong> (canyon de 4 000 km de long et 7 km de profondeur, 10 fois plus long que le Grand Canyon).</p>
        <p>La question de la <strong>vie martienne</strong> passée ou présente (sous forme microbienne dans le sous-sol humide) motive les missions Mars Science Laboratory (Curiosity, depuis 2012) et Mars 2020 (Perseverance + Ingenuity), qui collectent des échantillons destinés à être ramenés sur Terre dans les années 2030.</p>

        <h3>Géologie comparée des planètes telluriques</h3>
        <p>La géologie comparée révèle les trajectoires évolutives très différentes de ces quatre mondes :</p>
        <ul>
          <li><strong>Tectonique :</strong> seule la Terre possède une tectonique des plaques active. Mercure présente des falaises de compression (rupes) liées à son refroidissement et rétrécissement. Venus et Mars montrent du volcanisme bouclier mais pas de tectonique.</li>
          <li><strong>Cratérisation :</strong> Mercure est la plus cratérisée (pas d'érosion atmosphérique). Mars est modérément cratérisée. Vénus l'est peu (surface jeune). La Terre l'est très peu (érosion, tectonique).</li>
          <li><strong>Volcanisme :</strong> toutes ont été actives. Mercure semble éteinte. Mars possède des volcans géants mais probablement inactifs. Vénus pourrait encore être active. La Terre est activement volcanique.</li>
        </ul>
      </div>
    </section>"""

print('systeme-solaire/planetes-telluriques done, len:', len(pages['systeme-solaire/planetes-telluriques']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/astronomie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print('Batch 2 saved.')
