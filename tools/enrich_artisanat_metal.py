import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/artisanat.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# ==================== metal/metaux ====================
data['pages']['metal/metaux']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Connaître les métaux pour mieux les travailler</p>
        </div>
      </div>
      <p class="resume-text">Avant de forger, souder ou couler un métal, il faut comprendre ce qu'il est. Chaque métal a sa personnalité : dureté, ductilité, point de fusion, résistance à la corrosion. Choisir le bon métal pour un projet n'est pas une question de goût mais de physique et de chimie appliquées. Le matronyme "métal" regroupe en réalité des matériaux aux comportements radicalement différents : l'aluminium plie sans casser là où la fonte explose sous le choc ; le cuivre se martèle à froid pendant des heures alors que l'acier durcit et se fissure s'il n'est pas recuit.</p>
      <div class="highlight-box">
        <p><strong>Métal pur vs alliage :</strong> un métal pur (fer, cuivre, aluminium) est un élément chimique isolé. Un alliage est un mélange de deux métaux ou plus, obtenu par fusion conjointe. L'acier = fer + carbone (0,02 à 2,1 %), le laiton = cuivre + zinc, le bronze = cuivre + étain. Les alliages combinent les qualités de leurs constituants et dépassent souvent leurs limites individuelles — l'acier est 200 fois plus résistant que le fer pur, le bronze plus dur que chacun de ses composants pris séparément.</p>
      </div>
      <p class="resume-text">Ce cours présente les métaux les plus courants en artisanat — acier, fer forgé, cuivre, laiton, bronze, aluminium, étain — leurs propriétés physiques, leurs usages traditionnels et contemporains, et les critères concrets de choix selon le projet et la technique envisagée.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Propriétés, usages et choix des métaux</p>
        </div>
      </div>
      <div class="course-content">
        <h3>L'acier : le métal de structure universel</h3>
        <p>L'acier est l'alliage fer-carbone contenant entre 0,02 % et 2,1 % de carbone. C'est le métal le plus produit et le plus utilisé au monde, pour de bonnes raisons : résistant, soudable, usinable, abordable. Plus la teneur en carbone est élevée, plus l'acier est dur et résistant à l'usure — mais aussi plus fragile sous choc et plus difficile à souder sans préchauffage.</p>
        <p>L'<strong>acier doux</strong> (0,1–0,3 % C, aussi appelé acier de construction ou S235/S275/S355) est ductile, soudable sans précaution particulière, idéal pour la ferronnerie, les structures et les pièces formées à froid. L'<strong>acier mi-dur</strong> (0,3–0,6 % C, nuances C35, C45) équilibre dureté et ductilité, adapté aux pièces mécaniques. L'<strong>acier dur</strong> (0,6–1,4 % C, nuances C70, C100) sert pour les outils coupants, les ressorts et les lames de couteau — il peut être trempé pour atteindre des duretés extrêmes (jusqu'à 65 HRC).</p>
        <p>L'acier ordinaire rouille rapidement au contact de l'humidité sans protection. Les solutions : peinture antirouille, huile de protection, galvanisation (revêtement de zinc par immersion à chaud), phosphatation ou brunissage. L'<strong>acier inoxydable</strong> contient au moins 10,5 % de chrome, qui forme spontanément une couche passive d'oxyde de chrome protectrice. Le 304 est l'inox de cuisine standard ; le 316 (avec molybdène) résiste aussi aux chlorures marins. L'inox est plus difficile à souder et à usiner que l'acier ordinaire.</p>
        <div class="highlight-box">
          <p><strong>Lire les nuances :</strong> S235 = acier de structure, limite élastique 235 MPa ; C45 = acier à 0,45 % de carbone ; 304 ou 1.4301 = inox austénitique standard. Ces codes figurent sur les certificats matière et permettent de commander exactement le bon produit. Sur les chantiers et en atelier, l'acier vient souvent en profilés normalisés : plats, carrés, ronds, tubes, cornières, UPN, IPE.</p>
        </div>

        <h3>Le fer forgé : l'ancêtre illustre</h3>
        <p>Le fer forgé est du fer presque pur (moins de 0,08 % C) contenant des inclusions de laitier siliceux qui lui donnent une texture fibreuse caractéristique, visible à la cassure. Il est moins dur que l'acier mais très résistant à la corrosion et extrêmement ductile : on peut le plier, le tordre, le souder à chaud (soudure à la forge) sans qu'il casse. Chauffé au rouge vif, il se soude à lui-même par simple martelage — la technique du soudage à la forge utilisée pendant des millénaires avant l'invention de la soudure électrique.</p>
        <p>Aujourd'hui très rare et cher car quasi plus produit industriellement, le vrai fer forgé est remplacé dans la plupart des usages par l'acier doux. Les pièces de ferronnerie anciennes (grilles de châteaux, portails Renaissance, rampes d'escaliers du XVIIIe) sont souvent en vrai fer forgé, plus résistant à la rouille et plus facile à travailler à chaud que l'acier moderne. Certains artisans producteurs subsistent en Espagne et en Suède.</p>

        <h3>Le cuivre : conducteur et malléable par excellence</h3>
        <p>Le cuivre (Cu, numéro atomique 29) est reconnaissable à sa couleur rouge-orangée unique. C'est le deuxième meilleur conducteur électrique après l'argent — et le premier en termes de rapport qualité/prix, d'où son omniprésence dans les câbles électriques. Excellent conducteur de chaleur également, il est utilisé depuis l'Antiquité pour les chaudrons, marmites et échangeurs thermiques. Sa malléabilité exceptionnelle permet la réalisation de feuilles épaisses de quelques microns pour la feuille d'or cuivre en bijouterie ou en dorure.</p>
        <p>Exposé à l'air humide, le cuivre se couvre d'une patine verte (vert-de-gris, mélange de carbonates et sulfates basiques de cuivre) qui le protège de la corrosion profonde — c'est cette patine qui colore les toitures de cathédrales après plusieurs décennies. La patine est recherchée en sculpture et peut être accélérée par des traitements chimiques. Le cuivre est naturellement bactériostatique : les surfaces en cuivre massif éliminent naturellement les bactéries en quelques heures, propriété hygiénique reconnue dans les hôpitaux.</p>

        <h3>Le laiton et le bronze : les alliages du cuivre</h3>
        <p>Le <strong>laiton</strong> (cuivre + zinc, 60–70 % Cu) est reconnaissable à sa couleur jaune dorée vive. Plus dur que le cuivre pur, il se travaille très bien en usinage, estampage et découpe à la presse. Résistant à la corrosion en atmosphère intérieure, il est le métal de choix pour la robinetterie, les serrures, les instruments de musique à vent (trompettes, trombones, tubas), les accessoires décoratifs et la visserie de précision. Il se polit brillamment et accepte bien l'électrodépôt (dorure, argenture). Attention : chauffé au-dessus de 400 °C sans ventilation, le zinc se vaporise et ses fumées causent la fièvre des fondeurs.</p>
        <p>Le <strong>bronze</strong> (cuivre + étain, 85–95 % Cu) est plus foncé et plus chaud en couleur. Plus dur et plus résistant à l'usure que le laiton, il est l'alliage de la statuaire depuis 5000 ans : il coule facilement, prend les détails des moules avec fidélité et développe avec le temps une patine brun verdâtre très recherchée. Les cloches, les hélices de bateaux, les coussinets de paliers mécaniques et les bronzes artistiques sont en bronze. Le bronze d'aluminium (cuivre + aluminium + fer) est encore plus résistant pour les applications marines.</p>
        <div class="highlight-box">
          <p><strong>Les distinguer à l'oeil :</strong> le laiton est jaune vif (couleur or claire) ; le bronze est plus doré-brun, légèrement plus terne. À chaud, le laiton émet des fumées de zinc blanches ; le bronze est moins volatil. Pour la statuaire extérieure, toujours préférer le bronze : il résiste mieux aux cycles gel/dégel et à l'humidité que le laiton.</p>
        </div>

        <h3>L'aluminium : le métal moderne léger</h3>
        <p>L'aluminium (Al) est le métal structurel le plus léger (2,7 g/cm³, environ trois fois moins dense que l'acier à résistance comparable). Troisième élément le plus abondant de la croûte terrestre, il ne se trouve jamais pur dans la nature (toujours sous forme d'oxydes) et nécessite une électrolyse très énergivore pour être extrait — d'où l'importance du recyclage (recycler l'aluminium consomme 95 % moins d'énergie que le produire).</p>
        <p>Il ne rouille pas car sa surface se couvre spontanément d'une couche d'alumine (Al₂O₃) invisible mais très dure et adhérente. L'anodisation artificielle épaissit cette couche et permet la coloration. Ses alliages couvrent un spectre large : série 1000 (quasi-pur, très formable, toitures), 3000 (canettes de boisson), 5000 (marine, formabilité), 6061 et 6082 (profilés extrudés universels, bonne soudabilité), 7075 (aéronautique haute résistance). La soudure se fait au TIG ou MIG avec fil d'apport 4043 ou 5356 sous protection argon.</p>

        <h3>L'étain, le plomb, le zinc : les métaux tendres</h3>
        <p>L'<strong>étain</strong> (Sn, point de fusion 232 °C) est mou, brillant, sans toxicité significative. Il sert pour l'étamage (revêtement des conserves alimentaires), la soudure (alliages Sn-Ag-Cu sans plomb), la vaisselle d'étain (pewter, alliage Sn + Cu + Sb) et le vitrail (soudure à l'étain des résilles de plomb). Curiosité : l'étain "crie" quand on le plie rapidement, un grincement caractéristique dû au glissement des plans cristallins.</p>
        <p>Le <strong>plomb</strong> (Pb, densité 11,3 g/cm³) est si mou qu'on le raye à l'ongle. Historiquement omniprésent (tuyaux, vitraux, balles, poids de pêche, batteries), sa toxicité chronique bien documentée — il s'accumule dans les os et le système nerveux — a conduit à son remplacement progressif. Le <strong>zinc</strong> est intermédiaire : léger, fondant à 419 °C, il sert pour la galvanisation (protection de l'acier), les toitures (zinc naturel vieillissant bien), la fonderie sous pression de petites pièces (zamak) et les anodes sacrificielles marines.</p>

        <h3>Les traitements thermiques : transformer les propriétés</h3>
        <p>La chaleur permet de modifier profondément les propriétés mécaniques des métaux. Pour l'acier : la <strong>trempe</strong> (chauffage à 800–900 °C jusqu'à couleur orange vif, puis refroidissement brutal dans l'eau ou l'huile) forme une structure martensitique très dure mais fragile. Le <strong>revenu</strong> qui suit (chauffage à 150–600 °C selon la dureté voulue, reconnaissable aux couleurs d'oxydation : paille 220 °C, violet 280 °C, bleu 300 °C) réduit la fragilité en sacrifiant un peu de dureté. Le <strong>recuit</strong> (chauffage puis refroidissement très lent dans le four) ramollit et homogénéise l'acier.</p>
        <p>Pour le cuivre et ses alliages, l'écrouissage (durcissement par déformation à froid) est inévitable lors du repoussage ou du laminage intensif. Le <strong>recuit de restauration</strong> (cuivre : 400–600 °C, laiton : 450–600 °C, refroidissement lent ou à l'eau) restitue la malléabilité initiale. Après recuit, le cuivre se noircit en surface — il suffit de le décaper à l'acide citrique ou à l'acide sulfurique dilué pour retrouver la couleur rouge caractéristique.</p>

        <h3>Reconnaître les métaux en atelier</h3>
        <p>Sans équipement analytique, plusieurs tests permettent d'identifier un métal inconnu. La <strong>couleur</strong> oriente : rouge (cuivre), jaune vif (laiton), brun doré (bronze), blanc argenté brillant (aluminium poli, étain), gris mat (plomb, zinc, acier), gris brillant (inox). La <strong>densité ressentie</strong> : aluminium très léger, cuivre et laiton nettement plus lourds, plomb extrêmement lourd. Le <strong>magnétisme</strong> : acier ordinaire et fonte attirés fortement ; aluminium, cuivre, laiton, bronze, inox austénitique (304/316), plomb et zinc ne réagissent pas à l'aimant. La <strong>dureté</strong> : plomb et étain s'éraflent à l'ongle, aluminium se raye facilement, cuivre et laiton résistent à l'ongle mais pas à la lime, acier doux à la lime douce.</p>
        <div class="highlight-box">
          <p><strong>Sécurité fondamentale :</strong> ne jamais chauffer, meuler ou souder un métal inconnu sans l'avoir identifié. Le cadmium (présent dans certains laitons anciens et revêtements décoratifs) est extrêmement toxique par inhalation même à basse température. L'acier galvanisé libère des fumées de zinc toxiques à souder. La règle d'or : ventilation maximale et masque filtrant adapté (P3 + vapeurs organiques) pour tout travail générant des fumées de métal, quelles qu'elles soient.</p>
        </div>
      </div>
    </section>"""

print("metal/metaux len:", len(data['pages']['metal/metaux']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/artisanat.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("saved")
