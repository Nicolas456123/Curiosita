import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# analytique/electrochimie - full rewrite
# ============================================================
pages['analytique/electrochimie']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>Chimie et electricite</p></div>
      </div>
      <p class="resume-text">L'<strong>electrochimie</strong> etudie les transformations entre energie chimique et energie electrique. Elle englobe les piles et accumulateurs (chimie &rarr; electricite) et l'electrolyse (electricite &rarr; chimie). Elle est au coeur de nos batteries, de la galvanisation des metaux, du traitement de l'eau et des capteurs electrochimiques.</p>
      <div class="highlight-box">
        <p><strong>Oxydation et reduction :</strong> Une reaction d'oxydo-reduction implique un transfert d'electrons. L'oxydation = perte d'electrons (le reducteur les donne). La reduction = gain d'electrons (l'oxydant les regoit). Moyen memoriel : LEO le lion dit GER (Loss of Electrons = Oxidation, Gain of Electrons = Reduction).</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Piles, potentiels et electrolyse</p></div>
      </div>
      <div class="course-content">
        <h3>Potentiels d'oxydo-reduction et serie des potentiels</h3>
        <p>Chaque couple oxydo-reducteur est caracterise par un <strong>potentiel standard d'electrode</strong> E&#176; (en volts), mesure par rapport a l'electrode standard d'hydrogene (ESH, E&#176; = 0,000 V).</p>
        <ul>
          <li>E&#176; eleve (>0 V) = oxydant fort. Ex : F&sub2;/F&#8315; (E&#176; = +2,87 V), MnO&sub4;&#8315;/Mn&sup2;+ (+1,51 V), Cl&sub2;/Cl&#8315; (+1,36 V)</li>
          <li>E&#176; bas (&lt;0 V) = reducteur fort. Ex : Li+/Li (E&#176; = -3,04 V), Na+/Na (-2,71 V), Zn&sup2;+/Zn (-0,76 V)</li>
          <li>Regle : l'oxydant du couple de E&#176; superieur oxyde le reducteur du couple de E&#176; inferieur</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Equation de Nernst :</strong> E = E&#176; - (RT/nF) x ln(Q<sub>r</sub>) = E&#176; - (0,059/n) x log(Q<sub>r</sub>) a 25 &#176;C. Elle donne le potentiel reel en fonction de la concentration des especes. Capitale pour comprendre les piles non standard et les cellules biologiques.</p>
        </div>

        <h3>La pile de Daniell et les piles electrochimiques</h3>
        <p>La <strong>pile de Daniell</strong> (1836) est le modele historique et pedagogique. Elle comprend :</p>
        <ul>
          <li><strong>Electrode negative (anode) :</strong> Zn(s) | ZnSO&sub4;(aq). Zn se dissout : Zn &rarr; Zn&sup2;+ + 2e&#8315;</li>
          <li><strong>Electrode positive (cathode) :</strong> Cu(s) | CuSO&sub4;(aq). Cu&sup2;+ se depose : Cu&sup2;+ + 2e&#8315; &rarr; Cu(s)</li>
          <li><strong>Pont salin :</strong> tube rempli de KCl en gel assurant la neutralite electronique des deux compartiments</li>
          <li>Reaction globale : Zn + Cu&sup2;+ &rarr; Zn&sup2;+ + Cu. Force electromotrices : E&#176;<sub>pile</sub> = E&#176;(cathode) - E&#176;(anode) = +0,34 - (-0,76) = 1,10 V</li>
        </ul>
        <p>La relation entre fmE et energie libre : &Delta;G&#176; = -nFE&#176; (F = 96 485 C/mol = constante de Faraday). Une pile spontanee a E&#176; > 0 et &Delta;G&#176; < 0.</p>

        <h3>Batteries et accumulateurs modernes</h3>
        <p>Un accumulateur est une pile rechargeable. L'electrochimie est au coeur de la transition energetique :</p>
        <ul>
          <li><strong>Batterie plomb-acide (1859) :</strong> encore utilisee pour demarrer les voitures. Pb / H&sub2;SO&sub4; / PbO&sub2;. Tension ~12 V (6 cellules x 2 V). Dense mais lourde (30 Wh/kg).</li>
          <li><strong>Batterie nickel-metal hydrure (NiMH) :</strong> vehicules hybrides (Toyota Prius). 60&mdash;120 Wh/kg. Recharge jusqu'a 500 cycles.</li>
          <li><strong>Batterie lithium-ion (Li-ion) :</strong> telephone, ordinateur, vehicule electrique. Anode en graphite intercalant Li+, cathode en LiCoO&sub2; ou LiFePO&sub4;. 150&mdash;300 Wh/kg, 500&mdash;1000 cycles. La revolution energetique des annees 1990-2020 (Nobel de chimie 2019 : Goodenough, Whittingham, Yoshino).</li>
          <li><strong>Piles a combustible :</strong> reaction directe H&sub2; + 1/2 O&sub2; &rarr; H&sub2;O avec production d'electricite. Rendement theorique ~83 %, pratique ~50&mdash;60 %. Utilisees dans les vehicules a hydrogene (Toyota Mirai).</li>
        </ul>

        <h3>L'electrolyse : forcer les reactions</h3>
        <p>L'<strong>electrolyse</strong> utilise une source de courant exterieure pour forcer une reaction chimique non spontanee (contrairement a la pile). La loi de Faraday lie la quantite de matiere depositee a la charge electrique :</p>
        <div class="highlight-box">
          <p><strong>Loi de Faraday :</strong> m = (M x I x t) / (n x F) ou m = masse depositee (g), M = masse molaire (g/mol), I = intensite (A), t = temps (s), n = nombre d'electrons, F = 96 485 C/mol.</p>
        </div>
        <p>Applications industrielles majeures de l'electrolyse :</p>
        <ul>
          <li><strong>Aluminium :</strong> le procede Hall-Heroult (1886) electrolyse l'alumine (Al&sub2;O&sub3;) fondue. Production mondiale : 65 millions de tonnes/an. Consomme 15 kWh par kg d'Al.</li>
          <li><strong>Chlore-soude (procede chlore-alcali) :</strong> electrolyse de NaCl(aq). Cathode : 2H&sub2;O + 2e&#8315; &rarr; H&sub2; + 2OH&#8315;. Anode : 2Cl&#8315; &rarr; Cl&sub2; + 2e&#8315;. Produit Cl&sub2;, NaOH et H&sub2; (matiere premiere pour PVC, papier, desinfectants).</li>
          <li><strong>Galvanoplastie :</strong> depot de metaux sur des surfaces (chromage, nickelage, argenture, dorure). L'objet a revetir est la cathode dans un bain contenant l'ion du metal.</li>
          <li><strong>Hydrolyse de l'eau :</strong> production de H&sub2; "vert" a partir d'eau et d'electricite renouvelable. 2H&sub2;O &rarr; 2H&sub2; + O&sub2;. Cle de la future economie de l'hydrogene.</li>
        </ul>

        <h3>Electrochimie analytique</h3>
        <p>L'electrochimie offre des methodes analytiques tres sensibles :</p>
        <ul>
          <li><strong>Potentiometrie :</strong> mesure du potentiel d'une electrode selective. L'electrode de verre mesure le pH ; les electrodes selectrices d'ions (ISE) dosent Na+, K+, Ca&sup2;+, F&#8315; dans les analyses sanguines et les eaux.</li>
          <li><strong>Voltammetrie :</strong> mesure du courant en fonction du potentiel applique. La voltammetrie cyclique (CV) caracterise les couples redox et les mecanismes d'electrode. La polarographie de Heyrovsky (Nobel 1959) fut pionniere.</li>
          <li><strong>Coulometrie :</strong> mesure de la charge electrique totale pour doser une espece. Tres precis pour les dosages absolus.</li>
          <li><strong>Capteurs electrochimiques :</strong> le glucometre (mesure de glycemie par electrochimie enzymatique sur bandelette) est l'un des instruments medicaux les plus utilises au monde.</li>
        </ul>

        <h3>Corrosion et protection</h3>
        <p>La corrosion est une reaction electrochimique spontanee qui detruit les metaux. Elle represente ~3,4 % du PIB mondial en couts directs :</p>
        <ul>
          <li>La rouille est une pile electrochimique microscopique : le fer (anode) s'oxyde, l'oxygene dissous (cathode) se reduit. Electrons transferes a travers le metal, ions a travers l'humidite.</li>
          <li><strong>Protection cathodique :</strong> relier le metal a proteger (ex : coque d'un navire) a un metal sacrificiel plus reducteur (Zn, Mg). Le metal sacrificiel s'oxyde, le fer est protege.</li>
          <li><strong>Revetements :</strong> peinture, galvanisation (depot de Zn), anodisation (couche d'alumine protectrice), passivation de l'acier inoxydable par la couche de Cr&sub2;O&sub3;.</li>
          <li><strong>Inhibiteurs :</strong> additifs qui s'adsorbent sur le metal et bloquent les sites actifs de corrosion.</li>
        </ul>
      </div>
    </section>

    <section class="content-section" id="quiz">
      <div class="section-header">
        <div class="section-num">03</div>
        <div class="section-info"><h2>Quiz</h2><p>Testez votre comprehension</p></div>
      </div>
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-title-text">Electrochimie &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">Dans une pile electrochimique, a quelle electrode se produit l'oxydation ?</p>
            <div class="options">
              <button class="option" data-correct="1">A l'anode (electrode negative)</button>
              <button class="option">A la cathode (electrode positive)</button>
              <button class="option">Dans le pont salin</button>
              <button class="option">En solution</button>
            </div>
            <div class="q-feedback">L'anode est le site d'oxydation (perte d'electrons). Dans la pile de Daniell : Zn &rarr; Zn&sup2;+ + 2e&#8315;. Les electrons circulent de l'anode vers la cathode dans le circuit exterieur.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">La force electromotrice (fmE) standard d'une pile est E&#176;<sub>pile</sub> = 1,10 V. Quelle est la valeur de &Delta;G&#176; (n=2) ?</p>
            <div class="options">
              <button class="option">+212 kJ/mol</button>
              <button class="option" data-correct="1">-212 kJ/mol</button>
              <button class="option">+1,10 kJ/mol</button>
              <button class="option">-1,10 kJ/mol</button>
            </div>
            <div class="q-feedback">&Delta;G&#176; = -nFE&#176; = -2 x 96485 x 1,10 = -212 267 J/mol &asymp; -212 kJ/mol. &Delta;G&#176; negatif : reaction spontanee, comme attendu pour une pile qui fonctionne.</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">Pourquoi l'aluminium ne se corrode-t-il pas rapidement malgre son E&#176;(Al&sup3;+/Al) = -1,66 V tres negatif ?</p>
            <div class="options">
              <button class="option">Il est naturellement noble</button>
              <button class="option" data-correct="1">Il se forme spontanement une couche d'alumine Al&sub2;O&sub3; protectrice en surface</button>
              <button class="option">Il a un potentiel positif</button>
              <button class="option">Il ne reagit pas avec l'O&sub2;</button>
            </div>
            <div class="q-feedback">L'aluminium s'oxyde tres vite, mais la couche d'oxyde Al&sub2;O&sub3; formee est adherente et impermeante, protegant le metal sous-jacent. C'est la passivation. L'anodisation artificialise et epaissit cette couche.</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">Dans l'electrolyse, a quelle electrode se produit la reduction ?</p>
            <div class="options">
              <button class="option">A l'anode</button>
              <button class="option" data-correct="1">A la cathode</button>
              <button class="option">Dans le bain electrolytique</button>
              <button class="option">Aux deux electrodes simultanement</button>
            </div>
            <div class="q-feedback">En electrolyse comme en pile, la cathode est le site de reduction. Dans la galvanoplastie cuivre : Cu&sup2;+ + 2e&#8315; &rarr; Cu(s) se depose a la cathode. L'objet a plaquer est donc la cathode.</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Quelle technologie de batterie a obtenu le prix Nobel de chimie 2019 ?</p>
            <div class="options">
              <button class="option">Batterie plomb-acide</button>
              <button class="option">Batterie nickel-cadmium</button>
              <button class="option" data-correct="1">Batterie lithium-ion</button>
              <button class="option">Pile a combustible</button>
            </div>
            <div class="q-feedback">Le prix Nobel de chimie 2019 fut attribue a John Goodenough, Stanley Whittingham et Akira Yoshino pour le developpement des batteries lithium-ion, qui ont revolutionne la technologie portable et la mobilite electrique.</div>
          </div>
        </div>
        <div class="quiz-result" id="quizResult">
          <div class="result-score-big" id="resultScore">0/5</div>
          <div class="result-msg" id="resultMsg"></div>
          <button class="btn-retry" onclick="resetQuiz()">&#8634; Recommencer</button>
        </div>
        <div class="quiz-nav">
          <button class="btn-quiz btn-prev" onclick="prevQ()" id="btnPrev" disabled="">&#8592; Precedent</button>
          <div class="q-dots" id="qDots"></div>
          <button class="btn-quiz btn-next" onclick="nextQ()" id="btnNext" disabled="">Suivant &#8594;</button>
        </div>
      </div>
    </section>

    <section class="content-section" id="exercices">
      <div class="section-header">
        <div class="section-num">04</div>
        <div class="section-info"><h2>Exercices</h2><p>Mettez en pratique</p></div>
      </div>
      <div class="course-content">
        <h3>Exercice 1 &mdash; fmE d'une pile</h3>
        <p>Calculer la fmE standard de la pile : Ag | Ag+ || Fe&sup3;+ | Fe (E&#176;(Ag+/Ag) = +0,80 V ; E&#176;(Fe&sup3;+/Fe&sup2;+) = +0,77 V). Indiquer quelle reaction est spontanee.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>E&#176;<sub>pile</sub> = E&#176;(cathode) - E&#176;(anode). L'oxydant le plus fort est Ag+/Ag (E&#176; plus eleve). Ag est reduit (cathode) ; Fe&sup2;+ est oxyde en Fe&sup3;+ (anode). E&#176; = +0,80 - 0,77 = <strong>+0,03 V</strong>. La pile est spontanee (&Delta;G&#176; = -nFE&#176; &lt; 0) mais de fmE faible.</p></div>
        </details>
        <h3>Exercice 2 &mdash; Loi de Faraday</h3>
        <p>On electrolyse une solution de CuSO&sub4; avec un courant de 2,0 A pendant 30 minutes. Calculer la masse de cuivre deposee (M(Cu) = 63,5 g/mol, n = 2).</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>m = (M x I x t) / (n x F) = (63,5 x 2,0 x 1800) / (2 x 96485) = 228 600 / 192 970 = <strong>1,18 g de Cu</strong>.</p></div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/analytique/chromatographie" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Chromatographie</span></a>
      <a class="next" data-cv="chimie/analytique/laboratoire" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">Laboratoire &#8594;</span></a>
    </div>"""

print(f"analytique/electrochimie: {len(pages['analytique/electrochimie']['content'])} chars")

# ============================================================
# analytique/laboratoire - full rewrite
# ============================================================
pages['analytique/laboratoire']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>L'art et la science du laboratoire</p></div>
      </div>
      <p class="resume-text">Le laboratoire de chimie est l'espace ou la theorie rencontre la pratique. Maitriser les techniques experimentales &mdash; du choix de la verrerie a la securite en passant par la precision des mesures &mdash; est indispensable pour obtenir des resultats fiables et reproductibles. La securite n'est jamais un a-cote : c'est la condition de travail fondamentale.</p>
      <div class="highlight-box">
        <p><strong>Les 3 regles d'or du laboratoire :</strong> 1) Toujours porter les EPI (equipements de protection individuelle : lunettes, blouse, gants). 2) Ne jamais travailler seul avec des produits dangereux. 3) Toujours lire la fiche de donnees de securite (FDS/SDS) avant de manipuler un reactif inconnu.</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Techniques, verrerie et bonnes pratiques</p></div>
      </div>
      <div class="course-content">
        <h3>La verrerie et les instruments de mesure</h3>
        <p>Le choix du bon materiel est crucial pour la precision. Chaque piece de verrerie a une tolerance et un usage specifique :</p>
        <ul>
          <li><strong>Eprouvette graduee :</strong> mesures volumiques rapides mais peu precises (±1 mL pour une eprouvette de 50 mL). Ne jamais peser sur une eprouvette.</li>
          <li><strong>Pipette jaugee (ou volumetrique) :</strong> delivre exactement un volume fixe (10,00 mL, 25,00 mL). Precision : ±0,02 mL. Requiert une poire d'aspiration.</li>
          <li><strong>Burette :</strong> tube gradue avec robinet pour les titrages. Lecture au menisque inferieur pour l'eau. Precision : ±0,05 mL pour une burette de 50 mL.</li>
          <li><strong>Fiole jaugee (ballon jauge) :</strong> prepare des solutions de concentration precise. Ne jamais la chauffer. Le trait de jauge est lu a l'horizontale, menisque a la hauteur du trait.</li>
          <li><strong>Becher, erlenmeyer :</strong> pour les reactions et melanges. Les volumes indiques sont approximatifs (±10 %).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Verre vs Plastique :</strong> Le verre borosilicate (Pyrex, Duran) resiste aux acides sauf HF. Le plastique (PE, PP) resiste mieux aux bases fortes. L'acide fluorhydrique (HF) attaque le verre : on le manipule en Teflon ou PTFE.</p>
        </div>

        <h3>Techniques de separation</h3>
        <p>Separer les constituants d'un melange est souvent la premiere etape d'une synthese ou d'une analyse :</p>
        <ul>
          <li><strong>Filtration :</strong> separation d'un solide d'un liquide. Sur papier filtre (qualitative) ou sur frittte en verre (quantitative). Filtration sous vide (Buchner) accelere la filtration de solides fins.</li>
          <li><strong>Decantation :</strong> separation de deux liquides non miscibles ou d'un solide lourd. Ampoule a decanter pour les extractions liquide-liquide.</li>
          <li><strong>Distillation :</strong> separation de liquides miscibles par leur point d'ebullition. La fraction qui bout en premier est la plus volatile. Montage basique : ballon + colonne de Vigreux + refrigerant + collecteur.</li>
          <li><strong>Extraction liquide-liquide :</strong> transfert d'un solute entre deux phases immiscibles selon sa partition (coefficient de partage). Exemple : extraction de la cafeine du the par dichloromethane.</li>
          <li><strong>Recristallisation :</strong> purification de solides en dissolvant dans un solvant chaud et refroidissant lentement pour faire cristalliser le produit pur.</li>
          <li><strong>Soxhlet :</strong> extraction continue d'un solide par un solvant. Utilise pour extraire les lipides d'un aliment (mesure du taux de matieres grasses).</li>
        </ul>

        <h3>Preparation de solutions</h3>
        <p>La preparation de solutions est une competence fondamentale. Deux cas :</p>
        <ul>
          <li><strong>A partir d'un solide :</strong> peser exactement la masse m = c x V x M. Dissoudre dans 2/3 du volume final. Transferer quantitativement dans la fiole jaugee. Completer au trait de jauge. Homogeniser.</li>
          <li><strong>A partir d'une solution concentree (dilution) :</strong> appliquer c&sub1;V&sub1; = c&sub2;V&sub2;. Pour H&sub2;SO&sub4; concentre : TOUJOURS verser l'acide dans l'eau (exotherme violent).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Tracabilite :</strong> Tout resultat experimental doit etre note dans un cahier de laboratoire : date, conditions, observations, masses pesees (a la 4e decimale pour une balance analytique). La traçabilite est une exigence BPL (Bonnes Pratiques de Laboratoire) indispensable en industrie et recherche.</p>
        </div>

        <h3>Securite chimique : pictogrammes et FDS</h3>
        <p>La reglementation europeenne CLP (Classification, Labelling and Packaging) impose 9 pictogrammes standardises :</p>
        <ul>
          <li><strong>Flamme :</strong> inflammable (acetone, ethanol)</li>
          <li><strong>Bombe explosive :</strong> explosif (perchlorate)</li>
          <li><strong>Tete de mort :</strong> toxique aigue (HCN, arsenic)</li>
          <li><strong>Corrosion :</strong> corrosif (HCl conc., NaOH conc.)</li>
          <li><strong>Exclamation :</strong> irritant ou nocif</li>
          <li><strong>Point d'exclamation (sante) :</strong> risques long terme (CMR : cancerigene, mutagen, reprotoxique)</li>
          <li><strong>Environnement :</strong> dangereux pour la faune aquatique</li>
          <li><strong>Cercle flamme :</strong> comburant (H&sub2;O&sub2; concentre, permanganate)</li>
          <li><strong>Bouteille gaz :</strong> gaz comprimes ou liquefies</li>
        </ul>
        <p>La fiche de donnees de securite (FDS, ou SDS) contient 16 rubriques obligatoires : identification, composition, premiers secours, lutte contre l'incendie, manipulation/stockage, EPI requis, proprietes physico-chimiques, stabilite, toxicologie, ecotoxicologie, elimination...</p>

        <h3>Traitements des dechets et ecochimie</h3>
        <p>La chimie moderne integre les principes de la <strong>chimie verte</strong> (12 principes de Anastas et Warner, 1998) :</p>
        <ul>
          <li>Prevenir la production de dechets plutot que de les traiter</li>
          <li>Choisir des solvants moins toxiques (eau, ethanol, 2-methyltetrahydrofurane)</li>
          <li>Maximiser l'economie d'atomes (tous les reactifs doivent se retrouver dans le produit)</li>
          <li>Utiliser des catalyseurs plutot que des reagents stoechiometriques</li>
          <li>Eviter les derives protecteurs superflus</li>
        </ul>
        <p>Les dechets chimiques sont collectes selectivement : acides, bases, halogenates, non-halogenates, solides, metaux lourds. Ils sont traites par des filières specialisees (neutralisation, incineration haute temperature, encapsulation pour les metaux lourds).</p>

        <h3>Incertitudes de mesure et chiffres significatifs</h3>
        <p>Toute mesure est entachee d'incertitude. Il est essentiel de l'evaluer et de la communiquer :</p>
        <ul>
          <li><strong>Erreur systematique :</strong> decalage constant du a un appareil mal calibre ou une methode biaisee. Eliminee par l'etalonnage.</li>
          <li><strong>Erreur aleatoire :</strong> fluctuations statistiques. Reduite par la repetition des mesures et le calcul de la moyenne et de l'ecart-type.</li>
          <li><strong>Chiffres significatifs :</strong> ne pas indiquer plus de chiffres significatifs que la precision de la mesure. Une balance analytique (±0,1 mg) donne 4 ou 5 chiffres sig. Une balance de cuisine (±1 g) donne 3 max.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Regles de propagation :</strong> Pour l'addition/soustraction, l'incertitude absolue s'additionne. Pour la multiplication/division, l'incertitude relative s'additionne. Une masse de 12,45 &#177; 0,01 g / un volume de 100,0 &#177; 0,1 mL donne une concentration avec une incertitude relative de &radic;((0,01/12,45)&sup2; + (0,1/100,0)&sup2;) &asymp; 0,1 %.</p>
        </div>
      </div>
    </section>

    <section class="content-section" id="quiz">
      <div class="section-header">
        <div class="section-num">03</div>
        <div class="section-info"><h2>Quiz</h2><p>Testez votre comprehension</p></div>
      </div>
      <div class="quiz-container">
        <div class="quiz-header">
          <span class="quiz-title-text">Laboratoire &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">Pour preparer une solution de concentration precise, quelle verrerie utiliser ?</p>
            <div class="options">
              <button class="option">Un becher gradue</button>
              <button class="option">Une eprouvette graduee</button>
              <button class="option" data-correct="1">Une fiole jaugee (ballon jauge)</button>
              <button class="option">Un erlenmeyer marque</button>
            </div>
            <div class="q-feedback">La fiole jaugee contient exactement le volume inscrit (ex : 250,00 mL &#177; 0,12 mL) quand le menisque est au trait de jauge. C'est la seule verrerie adaptee a la preparation de solutions de titre precis.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">En diluant de l'acide sulfurique concentre, que doit-on faire ?</p>
            <div class="options">
              <button class="option" data-correct="1">Verser l'acide dans l'eau (jamais l'inverse)</button>
              <button class="option">Verser l'eau dans l'acide</button>
              <button class="option">Melanger a parts egales et remuer vite</button>
              <button class="option">Refroidir l'acide avant de le diluer</button>
            </div>
            <div class="q-feedback">La dilution de H&sub2;SO&sub4; est tres exothermique. En versant l'acide dans l'eau, la chaleur est absorbee par la grande masse d'eau. En versant l'eau dans l'acide, la chaleur intense vaporise l'eau instantanement, projetant de l'acide concentre.</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">Quel pictogramme CLP indique qu'un produit est cancerigene ?</p>
            <div class="options">
              <button class="option">La tete de mort</button>
              <button class="option">La flamme</button>
              <button class="option" data-correct="1">L'exclamation sur fond de silhouette humaine (risque sante grave)</button>
              <button class="option">Le poisson mort (environnement)</button>
            </div>
            <div class="q-feedback">Le pictogramme "sante" (silhouette humaine avec exclamation) indique les CMR (cancerigenes, mutagenes, reprotoxiques) et les sensibilisants respiratoires. La tete de mort indique une toxicite aigue severe (mortelle ou tres toxique).</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">Quelle technique permet de separer deux solides miscibles de points de fusion differents ?</p>
            <div class="options">
              <button class="option">Filtration</button>
              <button class="option">Decantation</button>
              <button class="option">Distillation</button>
              <button class="option" data-correct="1">Recristallisation</button>
            </div>
            <div class="q-feedback">La recristallisation purifie un solide en le dissolvant dans un solvant chaud, puis en le recristallisant par refroidissement lent. Les impuretes restent en solution. On l'utilise aussi pour purifier la cafeine, l'aspirine, et de nombreux produits pharmaceutiques.</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Un premier principe de la chimie verte est :</p>
            <div class="options">
              <button class="option">Traiter tous les dechets par incineration</button>
              <button class="option" data-correct="1">Prevenir la production de dechets plutot que de les traiter apres</button>
              <button class="option">Utiliser toujours des solvants organiques purs</button>
              <button class="option">Maximiser la quantite de sous-produits</button>
            </div>
            <div class="q-feedback">Le 1er principe de la chimie verte (Anastas & Warner, 1998) est la prevention : il vaut mieux ne pas produire de dechet que de le traiter. C'est une revolution de perspective par rapport a la chimie traditionnelle qui s'occupait des dechets en fin de processus.</div>
          </div>
        </div>
        <div class="quiz-result" id="quizResult">
          <div class="result-score-big" id="resultScore">0/5</div>
          <div class="result-msg" id="resultMsg"></div>
          <button class="btn-retry" onclick="resetQuiz()">&#8634; Recommencer</button>
        </div>
        <div class="quiz-nav">
          <button class="btn-quiz btn-prev" onclick="prevQ()" id="btnPrev" disabled="">&#8592; Precedent</button>
          <div class="q-dots" id="qDots"></div>
          <button class="btn-quiz btn-next" onclick="nextQ()" id="btnNext" disabled="">Suivant &#8594;</button>
        </div>
      </div>
    </section>

    <section class="content-section" id="exercices">
      <div class="section-header">
        <div class="section-num">04</div>
        <div class="section-info"><h2>Exercices</h2><p>Mettez en pratique</p></div>
      </div>
      <div class="course-content">
        <h3>Exercice 1 &mdash; Preparation de solution</h3>
        <p>Preparer 250 mL de NaOH a 0,100 mol/L a partir de pastilles de NaOH solide (M = 40,00 g/mol). Decrire la procedure.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>m = c x V x M = 0,100 x 0,250 x 40,00 = <strong>1,000 g</strong>. Peser 1,000 g de NaOH sur papier glace (NaOH absorbe l'humidite). Dissoudre dans ~150 mL d'eau distillee dans un becher. Laisser refroidir. Transferer quantitativement dans une fiole jaugee de 250 mL. Rincer 3 fois le becher. Completer au trait de jauge. Homogeniser par retournement.</p></div>
        </details>
        <h3>Exercice 2 &mdash; Extraction</h3>
        <p>On veut extraire la cafeine (apolaire) d'une infusion de the (aqueuse) avec du dichloromethane (DCM). Expliquer la procedure et pourquoi le DCM est utilise.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>Le DCM (CH&sub2;Cl&sub2;) est non miscible avec l'eau et dissout bien la cafeine (polaire/apolaire intermediaire). Mettre l'infusion dans une ampoule a decanter, ajouter DCM, agiter, laisser se separer. DCM plus dense (d = 1,32) : phase inferieure. Recueillir la phase organique, evaporer le DCM sous vide &rarr; cafeine brute. Purifier par recristallisation dans l'ethanol/eau.</p></div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/analytique/electrochimie" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Electrochimie</span></a>
      <a class="next" data-cv="chimie/analytique/analyses" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">Methodes d'analyse &#8594;</span></a>
    </div>"""

print(f"analytique/laboratoire: {len(pages['analytique/laboratoire']['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Analytique part 2 done.")
