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
        <p>L'acier est l'alliage fer-carbone contenant entre 0,02 % et 2,1 % de carbone. Plus la teneur en carbone est élevée, plus l'acier est dur et résistant — mais aussi plus fragile et difficile à souder. L'<strong>acier doux</strong> (0,1–0,3 % C) est ductile, soudable, idéal pour la ferronnerie et la construction métallique. L'<strong>acier mi-dur</strong> (0,3–0,6 % C) équilibre dureté et ductilité. L'<strong>acier dur</strong> (0,6–1,4 % C) sert pour les outils coupants, les ressorts et les lames de couteau.</p>
        <p>L'acier ordinaire rouille au contact de l'humidité : sans protection (huile, peinture, galvanisation, phosphatation), il s'oxyde rapidement. L'acier inoxydable (inox) contient au moins 10,5 % de chrome, qui forme spontanément une couche passive protectrice. Le 304 est l'inox de cuisine standard ; le 316 résiste aussi aux chlorures marins.</p>
        <div class="highlight-box">
          <p><strong>Lire la nuance acier :</strong> la norme européenne identifie l'acier par des codes. S235 = acier de structure, limite élastique 235 MPa. C45 = acier à 0,45 % de carbone. 304 ou 1.4301 = inox austénitique standard. Ces codes figurent sur les certificats matière fournis par les marchands de métaux et permettent de commander le bon produit.</p>
        </div>

        <h3>Le fer forgé : l'ancêtre de l'acier</h3>
        <p>Le fer forgé est du fer presque pur (moins de 0,08 % C) contenant des inclusions de laitier qui lui donnent une texture fibreuse caractéristique visible à la cassure. Il est moins dur que l'acier mais très résistant à la corrosion et extrêmement ductile : on peut le plier, le tordre, le souder à chaud sans qu'il casse. Sa surface, une fois travaillée et huilée, se couvre d'une couche noire d'oxyde protectrice (calamine).</p>
        <p>Aujourd'hui rare et cher car plus guère produit industriellement, le vrai fer forgé est remplacé dans la plupart des usages par l'acier doux, qui s'en approche. Les pièces de ferronnerie anciennes (grilles, portails, rampes) sont souvent en vrai fer forgé, plus résistant à la rouille que l'acier.</p>

        <h3>Le cuivre : conducteur et malléable</h3>
        <p>Le cuivre (Cu) est reconnaissable à sa couleur rouge-orangée caractéristique. C'est l'un des meilleurs conducteurs d'électricité (utilisé dans tous les câbles électriques) et de chaleur (chaudrons, échangeurs thermiques). Très malléable à froid comme à chaud, il se soude, se braze, se cisèle et se repousse facilement. Sa densité élevée (8,9 g/cm³) le rend lourd mais sa ductilité extrême permet la fabrication de feuilles très fines pour la dorure à la feuille ou le repoussé.</p>
        <p>Exposé à l'air et à l'humidité, le cuivre se couvre d'une patine verte (vert-de-gris, carbonate basique de cuivre) qui le protège de la corrosion profonde — c'est ce qui colore les toitures de cathédrales après quelques décennies. Cette patine est recherchée en art mais peut être évitée par un vernis. Le cuivre est bactériostatique : les surfaces en cuivre éliminent naturellement les bactéries, ce qui explique son usage historique pour les robinets et les plans de travail.</p>

        <h3>Le laiton : l'alliage polyvalent</h3>
        <p>Le laiton est un alliage cuivre-zinc (60–70 % Cu, 30–40 % Zn) à la couleur dorée caractéristique. Plus dur que le cuivre pur mais plus doux que l'acier, il se travaille bien en usinage, estampage et découpe à la presse. Sa bonne résistance à la corrosion en fait le métal de choix pour les robinetteries, les instruments de musique à vent, les accessoires décoratifs et la visserie de précision dans les environnements humides.</p>
        <p>Le laiton se soude difficilement à l'arc mais se braze facilement à l'argent ou au cuivre. Il ne faut pas le chauffer trop fort sans ventilation car le zinc se vaporise à 907 °C et ses fumées sont toxiques (fièvre des fondeurs). Il se polit brillamment et accepte bien l'électrodépôt (dorure, argenture, nickelage).</p>
        <div class="highlight-box">
          <p><strong>Laiton vs bronze :</strong> le laiton (cuivre + zinc) est doré et brillant, plus facile à usiner. Le bronze (cuivre + étain) est plus foncé, plus dur, plus résistant à l'usure et à la corrosion marine. Les cloches et les hélices de bateaux sont en bronze ; les instruments à vent (trompettes, trombones) sont en laiton. À l'oeil, le laiton est plus jaune vif, le bronze plus chaud et brun.</p>
        </div>

        <h3>Le bronze : dureté et histoire</h3>
        <p>Le bronze (Cu + Sn, 85–95 % cuivre, 5–15 % étain) est l'un des premiers alliages maîtrisés par l'humanité, il y a plus de 5000 ans. L'âge du Bronze (3300–1200 av. J.-C.) est ainsi nommé parce que cet alliage y était le matériau dominant pour les outils, armes et bijoux. Plus dur que le cuivre pur, il résiste remarquablement à l'usure et à la corrosion. Il se coule facilement et prend les détails des moules avec grande précision — d'où son usage millénaire pour la statuaire, les médailles et les monnaies.</p>
        <p>En artisanat contemporain, on le retrouve dans la fonderie artistique (sculptures coulées à la cire perdue), les bronzes de décoration, les coussinets autolubrifiants et les paliers mécaniques. Sa patine brun dorée avec nuances vertes est très recherchée pour les sculptures d'extérieur. Le bronze d'aluminium (cuivre + aluminium) est encore plus résistant et sert dans les applications marines exigeantes.</p>

        <h3>L'aluminium : léger et résistant</h3>
        <p>L'aluminium (Al) est le métal structurel le plus léger (2,7 g/cm³, trois fois moins dense que l'acier). Il ne rouille pas car il se couvre spontanément d'une couche d'oxyde (alumine) protectrice invisible. Bon conducteur thermique et électrique, il est facilement usinable, pliable et soudable (sous atmosphère inerte, procédé TIG ou MIG avec fil d'apport adapté).</p>
        <p>Ses alliages sont classés en séries : 1000 (quasi-pur, très malléable), 2000 (avec cuivre, très résistant, aéronautique), 3000 (avec manganèse, bonne formabilité), 5000 (avec magnésium, bonne résistance marine), 6000 (avec magnésium et silicium, le plus courant en profilés extrudés), 7000 (avec zinc, aussi résistant que des aciers, aéronautique haut de gamme). En artisanat, les séries 5000 et 6000 sont les plus faciles à travailler.</p>

        <h3>L'étain, le plomb et les métaux tendres</h3>
        <p>L'<strong>étain</strong> (Sn) est mou, brillant, avec un faible point de fusion (232 °C). Il sert pour l'étamage (revêtement anticorrosion des conserves), la soudure étain-argent et la vaisselle d'étain ou pewter. L'alliage étain-plomb classique (Sn60/Pb40) fond vers 183 °C — remplacé pour des raisons sanitaires par des alliages sans plomb (Sn-Ag-Cu, SAC305) qui fondent à 217 °C.</p>
        <p>Le <strong>plomb</strong> (Pb) est très dense (11,3 g/cm³), extrêmement mou et facilement formable à froid. Historiquement incontournable pour les tuyaux (d'où "plomberie"), les vitraux (réseau de plomb soudé) et les balles. Sa toxicité chronique bien documentée — il s'accumule dans les os et le cerveau — limite aujourd'hui son usage artisanal. Le <strong>zinc</strong> est plus souple : il sert pour la galvanisation de l'acier, la fonderie de petites pièces (zamak) et la toiture.</p>

        <h3>Choisir son métal : critères pratiques</h3>
        <p>Le choix du métal dépend de plusieurs facteurs combinés : résistance mécanique requise, exposition à la corrosion, méthode de mise en forme envisagée (forge, soudure, fonderie, usinage), budget et disponibilité. Un tableau de décision simple : <em>résistance maximale à faible coût</em> = acier ; <em>légèreté</em> = aluminium ; <em>sans entretien en extérieur</em> = inox ou laiton ; <em>statuaire coulée</em> = bronze ; <em>pièces dorées décoratives</em> = laiton ; <em>soudure fine</em> = alliage étain-argent.</p>
        <div class="highlight-box">
          <p><strong>Le coût des métaux :</strong> les prix varient fortement avec les marchés mondiaux. En règle générale, par ordre de coût croissant au kilo : fonte &lt; acier &lt; aluminium &lt; cuivre &lt; laiton &lt; bronze &lt; inox (variable selon nuance) &lt; argent &lt; or. L'acier est 5 à 10 fois moins cher que le cuivre, et 30 à 50 fois moins cher que l'argent. Pour les petits projets, la disponibilité et l'aptitude au travail comptent autant que le coût.</p>
        </div>

        <h3>Les traitements thermiques : changer les propriétés de l'acier</h3>
        <p>Les propriétés mécaniques de l'acier se modifient profondément par des cycles thermiques contrôlés. La <strong>trempe</strong> consiste à chauffer l'acier au-dessus de sa température critique (800–900 °C selon la nuance, le métal prend une couleur orange vif) puis à le refroidir très rapidement dans l'eau, l'huile ou l'air : la structure cristalline se fige en martensite, très dure mais fragile. Le <strong>revenu</strong> suit immédiatement la trempe — on chauffe à 150–600 °C pour transformer une partie de la martensite et redonner de la ténacité au métal. Les couleurs d'oxydation (bleu, violet, paille) indiquent la température atteinte lors du revenu.</p>
        <p>Le <strong>recuit</strong> (chauffage lent suivi d'un refroidissement très lent dans le four éteint) ramollit l'acier et détend les contraintes internes après usinage ou déformation à froid. La <strong>normalisation</strong> (chauffage puis refroidissement à l'air) homogénéise la structure sans ramollir autant que le recuit. Le cuivre et ses alliages, qui durcissent à froid (écrouissage), nécessitent un recuit régulier entre les séquences de repoussage ou de laminage.</p>

        <h3>Reconnaître les métaux sans équipement</h3>
        <p>L'identification rapide d'un métal inconnu repose sur des tests sensoriels simples. La <strong>couleur</strong> : rouge-orangé (cuivre), jaune doré (laiton), brun doré (bronze), blanc argenté (aluminium, inox, étain), gris terne (plomb, zinc, acier). La <strong>densité</strong> ressentie : l'aluminium est très léger, le cuivre et le laiton moyennement lourds, le plomb très lourd. Le <strong>magnétisme</strong> : acier ordinaire et fonte sont magnétiques ; aluminium, cuivre, laiton, bronze, inox 304/316 et plomb ne le sont pas. La <strong>dureté</strong> à l'ongle ou à la lime : plomb et étain s'éraflent à l'ongle, aluminium à la lime, laiton résiste mieux, acier davantage encore.</p>
        <p>Sur une meule, l'<strong>étincelle</strong> est révélatrice : acier doux = gerbe d'étincelles longues, ramifiées, blanc-jaune ; acier dur = plus ramifié ; fonte = court, orangé, éclaté ; inox = peu d'étincelles. Les métaux non ferreux (cuivre, aluminium) ne font pratiquement pas d'étincelles à la meule.</p>
        <div class="highlight-box">
          <p><strong>Prudence avant chauffage :</strong> ne jamais chauffer un métal inconnu sans l'avoir identifié. Le cadmium, parfois présent dans certains laitons anciens ou revêtements, dégage des fumées extrêmement toxiques même à basse température. Le galvanisé (acier + zinc) libère des fumées de zinc à souder. Règle de sécurité fondamentale : ventilation forte et masque filtrant lors de tout travail générant des fumées de métal.</p>
        </div>
      </div>
    </section>"""

print("metal/metaux len:", len(data['pages']['metal/metaux']['content']))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/artisanat.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("saved")
