import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/artisanat.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

data['pages']['metal/metaux']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Connaître les métaux pour mieux les travailler</p>
        </div>
      </div>
      <p class="resume-text">Avant de forger, souder ou couler un métal, il faut comprendre ce qu'il est. Chaque métal a sa personnalité : dureté, ductilité, point de fusion, résistance à la corrosion. Choisir le bon métal pour un projet n'est pas une question de goût mais de physique et de chimie appliquées.</p>
      <div class="highlight-box">
        <p><strong>Métal pur vs alliage :</strong> un métal pur (fer, cuivre, aluminium) est un élément chimique. Un alliage est un mélange de deux métaux ou plus : l'acier = fer + carbone, le laiton = cuivre + zinc, le bronze = cuivre + étain. Les alliages combinent les qualités de leurs constituants et dépassent souvent leurs limites individuelles.</p>
      </div>
      <p class="resume-text">Ce cours présente les métaux les plus courants en artisanat — acier, fer forgé, cuivre, laiton, bronze, aluminium, étain — leurs propriétés, leurs usages et les critères de choix selon le projet.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Propriétés et usages des métaux courants</p>
        </div>
      </div>
      <div class="course-content">
        <h3>L'acier : le métal de structure</h3>
        <p>L'acier est l'alliage fer-carbone contenant entre 0,02 % et 2,1 % de carbone. Plus la teneur en carbone est élevée, plus l'acier est dur et résistant — mais aussi plus fragile et difficile à souder. L'<strong>acier doux</strong> (0,1–0,3 % C) est ductile, soudable, idéal pour la ferronnerie et la construction. L'<strong>acier mi-dur</strong> (0,3–0,6 % C) équilibre dureté et ductilité. L'<strong>acier dur</strong> (0,6–1,4 % C) sert pour les outils, les ressorts, les lames.</p>
        <p>L'acier se reconnaît à son aspect gris brillant, sa densité (environ 7,8 g/cm³) et sa forte réponse magnétique. Il rouille au contact de l'humidité : sans protection (huile, peinture, galvanisation), il s'oxyde rapidement en formant de la rouille.</p>
        <div class="highlight-box">
          <p><strong>Lire la nuance :</strong> la norme européenne identifie l'acier par une lettre et des chiffres. S235 = acier de structure, limite élastique 235 MPa. C45 = acier à 0,45 % de carbone. Ces codes figurent sur les certificats matière fournis par le marchand de métaux.</p>
        </div>

        <h3>Le fer forgé : l'ancêtre de l'acier</h3>
        <p>Le fer forgé est du fer presque pur (moins de 0,08 % C) contenant des inclusions de laitier qui lui donnent une texture fibreuse caractéristique. Il est moins dur que l'acier mais très résistant à la corrosion et extrêmement ductile. On le travaille facilement à chaud. Aujourd'hui rare, il est remplacé par l'acier doux dans la plupart des usages courants de ferronnerie.</p>

        <h3>Le cuivre : conducteur et malléable</h3>
        <p>Le cuivre (Cu) est reconnaissable à sa couleur rouge-orangée. Excellent conducteur d'électricité et de chaleur, très malléable à froid comme à chaud, il se soude, se braze, se cisèle et se repousse facilement. Sa densité élevée (8,9 g/cm³) le rend lourd mais sa ductilité extrême permet la fabrication de feuilles très fines.</p>
        <p>Exposé à l'air et à l'humidité, le cuivre se couvre d'une patine verte (vert-de-gris, carbonate de cuivre) qui le protège de la corrosion profonde — c'est ce qui colore les toitures anciennes des cathédrales. En artisanat, il sert pour la chaudronnerie, la bijouterie, la lutherie et les circuits électriques.</p>

        <h3>Le laiton : l'alliage polyvalent</h3>
        <p>Le laiton est un alliage cuivre-zinc (60–70 % Cu, 30–40 % Zn) à la couleur dorée caractéristique. Plus dur que le cuivre pur, il se travaille bien en usinage, estampage et découpe. Sa bonne résistance à la corrosion en fait le métal de choix pour les robinetteries, les instruments de musique à vent, les accessoires décoratifs et la visserie de précision.</p>
        <div class="highlight-box">
          <p><strong>Laiton vs bronze :</strong> le laiton (cuivre + zinc) est doré et brillant, plus facile à usiner. Le bronze (cuivre + étain) est plus foncé, plus dur, plus résistant à l'usure et à la corrosion marine. Les cloches et les hélices de bateaux sont en bronze ; les instruments à vent sont en laiton.</p>
        </div>

        <h3>Le bronze : dureté et histoire</h3>
        <p>Le bronze (Cu + Sn, 85–95 % cuivre, 5–15 % étain) est l'un des premiers alliages maîtrisés par l'humanité, il y a plus de 5000 ans. Plus dur que le cuivre pur, il résiste remarquablement à l'usure et à la corrosion. Il se coule facilement et prend les détails des moules avec précision — d'où son usage millénaire pour la statuaire et la monnaie.</p>
        <p>En artisanat contemporain, on le retrouve dans la fonderie artistique, les bronzes de décoration, les coussinets et paliers mécaniques. Sa patine brun doré est très recherchée en sculpture d'art.</p>

        <h3>L'aluminium : léger et résistant</h3>
        <p>L'aluminium (Al) est le métal structurel le plus léger (2,7 g/cm³, trois fois moins dense que l'acier). Il ne rouille pas car il se couvre spontanément d'une couche d'oxyde protectrice invisible. Bon conducteur thermique et électrique, il est facilement usinable, pliable et soudable (sous atmosphère inerte, procédé TIG ou MIG).</p>
        <p>Ses alliages (séries 1000 à 7000) varient de l'aluminium quasi-pur au 7075 aéronautique, aussi résistant que certains aciers. En artisanat, on l'utilise pour les pièces légères, les cadres, les boîtiers décoratifs et les structures.</p>

        <h3>L'étain et les métaux tendres</h3>
        <p>L'<strong>étain</strong> (Sn) est mou, brillant, avec un faible point de fusion (232 °C). Il sert pour l'étamage (protection anticorrosion), la soudure et la vaisselle d'étain (pewter). L'alliage étain-plomb classique de soudure fond vers 183 °C — désormais remplacé par des alliages sans plomb (étain-argent-cuivre) pour des raisons sanitaires.</p>
        <p>Le <strong>plomb</strong> (Pb) est très dense (11,3 g/cm³), mou, facilement formable à froid. Historiquement utilisé pour les tuyaux, les vitraux (réseau de plomb) et les balles. Sa toxicité bien documentée limite aujourd'hui son usage artisanal.</p>

        <h3>Choisir son métal : critères pratiques</h3>
        <p>Le choix du métal dépend de plusieurs facteurs combinés : résistance mécanique requise, exposition à la corrosion, méthode de mise en forme envisagée (forge, soudure, fonderie, usinage), budget et disponibilité.</p>
        <div class="highlight-box">
          <p><strong>Guide de choix simplifié :</strong> ferronnerie décorative extérieure → acier traité ou inox ; pièces exposées sans entretien → laiton ou bronze ; statuaire coulée → bronze ; pièces légères → aluminium ; soudure fine et électronique → alliage d'étain. Le coût croît généralement dans cet ordre : acier &lt; aluminium &lt; cuivre &lt; laiton &lt; bronze.</p>
        </div>

        <h3>Les traitements thermiques : modifier les propriétés</h3>
        <p>Les propriétés mécaniques de l'acier se modifient par la chaleur. La <strong>trempe</strong> consiste à chauffer l'acier à haute température (800–900 °C) puis à le refroidir rapidement dans l'eau ou l'huile : il devient très dur mais fragile. Le <strong>revenu</strong> suit la trempe — on chauffe à 150–600 °C pour redonner de la ténacité. Le <strong>recuit</strong> (chauffage suivi d'un refroidissement lent) ramollit l'acier et détend les contraintes internes.</p>
        <p>Le cuivre et ses alliages subissent le <strong>recuit de restauration</strong> : après un travail à froid intense qui durcit le métal par écrouissage, on le chauffe à 400–600 °C et on le refroidit lentement pour retrouver sa malléabilité initiale.</p>

        <h3>Reconnaître les métaux sans équipement</h3>
        <p>L'identification rapide des métaux inconnus repose sur des tests simples. La couleur oriente : rouge-orangé (cuivre), jaune doré (laiton), blanc argenté (aluminium ou inox). La densité : l'aluminium est très léger, le plomb très lourd. Le magnétisme : l'acier ordinaire est magnétique, l'aluminium, le cuivre et l'inox austénitique ne le sont pas. L'étincelle produite sur une meule est révélatrice : acier = étincelles longues et ramifiées, fonte = courtes et orangées, acier inox = peu d'étincelles.</p>
        <div class="highlight-box">
          <p><strong>Méthode visuelle fiable :</strong> comparer couleur, poids et réponse à un aimant permet d'identifier la grande majorité des métaux courants en atelier sans équipement spécialisé. En cas de doute sur un métal inconnu avant soudure ou chauffage (risque de dégagement toxique), faire analyser l'échantillon ou l'écarter.</p>
        </div>
      </div>
    </section>"""

print("metal/metaux len:", len(data['pages']['metal/metaux']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/artisanat.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("saved")
