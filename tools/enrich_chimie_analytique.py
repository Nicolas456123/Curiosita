import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# analytique/spectroscopie - full rewrite (was placeholder)
# ============================================================
spectroscopie_nav = pages['analytique/spectroscopie'].get('nav', {})
spectroscopie_meta = {k: v for k, v in pages['analytique/spectroscopie'].items() if k not in ('content',)}

pages['analytique/spectroscopie']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>Identifier la matiere par sa lumiere</p></div>
      </div>
      <p class="resume-text">La <strong>spectroscopie</strong> est l'etude de l'interaction entre la matiere et le rayonnement electromagnetique. Elle permet d'identifier des molecules, de determiner des structures, de mesurer des concentrations &mdash; sans detruire l'echantillon. C'est l'outil analytique le plus puissant de la chimie moderne.</p>
      <div class="highlight-box">
        <p><strong>Le spectre electromagnetique :</strong> radiofrequences (RMN) &rarr; micro-ondes &rarr; infrarouge (IR) &rarr; visible (UV-Vis) &rarr; ultraviolet &rarr; rayons X (diffraction) &rarr; rayons gamma. Chaque region interagit avec un type different de transition moleculaire.</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Les grandes techniques spectroscopiques</p></div>
      </div>
      <div class="course-content">
        <h3>Spectroscopie UV-visible et loi de Beer-Lambert</h3>
        <p>La spectroscopie UV-visible mesure l'absorption de la lumiere entre 200 et 800 nm. Quand un photon est absorbe, un electron passe d'un etat fondamental a un etat excite (transition &pi; &rarr; &pi;* ou n &rarr; &pi;* dans les molecules organiques).</p>
        <p>La <strong>loi de Beer-Lambert</strong> relie l'absorbance a la concentration :</p>
        <div class="highlight-box">
          <p><strong>A = &epsilon; &times; l &times; c</strong> ou A = absorbance (sans unite), &epsilon; = coefficient d'extinction molaire (L/mol/cm), l = longueur du trajet optique (cm), c = concentration (mol/L). Valide pour A &lt; 1 (solutions diluees).</p>
        </div>
        <ul>
          <li>Applications : dosage de proteines (&lambda; = 280 nm), de l'ADN (&lambda; = 260 nm), de l'hemoglobine (&lambda; = 540 nm)</li>
          <li>Le permanganate de potassium (KMnO&sub4;) absorbe fortement a 545 nm (couleur violette) : &epsilon; ~ 2400 L/mol/cm</li>
          <li>Les molecules aromatiques et les systemes conjugues absorbent dans l'UV</li>
        </ul>

        <h3>Spectroscopie infrarouge (IR)</h3>
        <p>Le rayonnement IR (2,5 &mdash; 25 &micro;m) provoque des vibrations de liaisons chimiques : etirement (stretching) et deformation (bending). Chaque type de liaison a une frequence de vibration caracteristique.</p>
        <p>Zones diagnostiques cles dans un spectre IR :</p>
        <ul>
          <li><strong>3200&mdash;3600 cm<sup>-1</sup> large :</strong> OH d'alcool ou acide carboxylique</li>
          <li><strong>2850&mdash;2960 cm<sup>-1</sup> :</strong> C-H aliphatique</li>
          <li><strong>1700&mdash;1750 cm<sup>-1</sup> fort :</strong> C=O de cetone, ester, acide (carbonyle)</li>
          <li><strong>1500&mdash;1600 cm<sup>-1</sup> :</strong> C=C aromatique</li>
          <li><strong>3300 cm<sup>-1</sup> fin :</strong> N-H d'amine</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Region des empreintes digitales :</strong> En dessous de 1500 cm<sup>-1</sup>, le spectre est tres complexe et unique a chaque molecule &mdash; comme une empreinte digitale. Comparer cette region avec une base de donnees permet d'identifier un compose inconnu.</p>
        </div>

        <h3>Resonance magnetique nucleaire (RMN)</h3>
        <p>La <strong>RMN</strong> est la technique d'identification structurale la plus puissante. Elle exploite le spin magnetique de certains noyaux (¹H, ¹&sup3;C, ¹&#8309;N...) places dans un champ magnetique intense. Quand on irradie a la frequence de resonance, le noyau absorbe puis remettra un signal caracteristique de son environnement chimique.</p>
        <ul>
          <li><strong>Deplacement chimique (&delta;, en ppm) :</strong> indique l'environnement de l'hydrogene. TMS (tetramethylsilane) = 0 ppm comme reference.</li>
          <li><strong>TMS = 0 ppm ;</strong> CH&sub3; aliphatique ~ 0,9 ppm ; CH&sub2; ~ 1,3 ppm ; H aromatique ~ 7&mdash;8 ppm ; CHO (aldehyde) ~ 9&mdash;10 ppm ; COOH ~ 10&mdash;12 ppm</li>
          <li><strong>Constante de couplage (J) :</strong> les H adjacents se couplent selon la regle n+1 (un H avec n voisins donne un signal en n+1 raies)</li>
          <li><strong>Integration :</strong> l'aire sous un pic est proportionnelle au nombre de H equivalents</li>
        </ul>
        <p>Exemple : l'ethanol (CH&sub3;-CH&sub2;-OH) montre 3 signaux : CH&sub3; (triplet, ~1,2 ppm), CH&sub2; (quartet, ~3,7 ppm), OH (singlet, ~2&mdash;5 ppm variable).</p>

        <h3>Spectrometrie de masse (MS)</h3>
        <p>La spectrometrie de masse n'est pas une spectroscopie au sens strict (elle utilise des ions, pas des photons), mais elle est complementaire. La molecule est ionisee, fragmentee, et les fragments sont separes par leur rapport masse/charge (m/z) :</p>
        <ul>
          <li><strong>Ion moleculaire M&bull;+ :</strong> donne la masse molaire exacte de la molecule</li>
          <li><strong>Fragmentation caracteristique :</strong> chaque famille fonctionnelle fragmente selon des mecanismes previsibles (perte de CH&sub3;, de CO, de 18 Da = H&sub2;O...)</li>
          <li><strong>HR-MS (haute resolution) :</strong> donne la formule brute exacte (ex : C&sub6;H&sub1;&sub2;O&sub6; a m/z = 180,0634)</li>
          <li>Couplage GC-MS : identification en temps reel des melanges complexes (controle antidrogue, analyse alimentaire, forensique)</li>
        </ul>

        <h3>Spectroscopie de fluorescence</h3>
        <p>Certaines molecules (fluorophores) absorbent de la lumiere UV et re-emettent de la lumiere visible a plus grande longueur d'onde (decalage de Stokes). La fluorescence est beaucoup plus sensible que l'UV-visible :</p>
        <ul>
          <li>Detection jusqu'a 10<sup>-12</sup> mol/L pour des fluorophores intensement fluorescents</li>
          <li><strong>GFP</strong> (Green Fluorescent Protein) : proteine fluorescente verte utilisee en biologie cellulaire pour marquer des proteines in vivo</li>
          <li>Immunofluorescence : anticorps marques par des fluorophores permettent de localiser des antigenes dans des tissus</li>
          <li>Sequencage de l'ADN : les 4 bases sont marquees par 4 fluorophores differents de couleur</li>
        </ul>

        <h3>Couplage de techniques : spectroscopie multidimensionnelle</h3>
        <p>Les spectroscopies sont souvent combinees pour l'elucidation structurale complete :</p>
        <ul>
          <li><strong>IR + RMN + MS :</strong> identification complete d'un produit de synthese organique</li>
          <li><strong>RMN 2D (COSY, HSQC, HMBC) :</strong> cartographier les correlations entre atomes voisins, essentiel pour les molecules complexes</li>
          <li><strong>RMN en biologie :</strong> determiner la structure de proteines en solution (jusqu'a ~50 kDa) &mdash; complement de la cristallographie RX</li>
          <li><strong>IRTF (transformee de Fourier) :</strong> enregistrer un spectre IR complet en quelques secondes au lieu de minutes, permettant des analyses en temps reel</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Spectroscopie astronomique :</strong> L'analyse spectrale de la lumiere des etoiles permet de connaitre leur temperature (loi de Wien), leur vitesse (effet Doppler), et leur composition chimique (raies d'absorption). C'est ainsi qu'on a decouvert l'helium en 1868 dans le spectre solaire avant de le trouver sur Terre.</p>
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
          <span class="quiz-title-text">Spectroscopie &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">La loi de Beer-Lambert s'ecrit A = &epsilon;&times;l&times;c. Que represente &epsilon; ?</p>
            <div class="options">
              <button class="option">L'absorbance de la solution</button>
              <button class="option" data-correct="1">Le coefficient d'extinction molaire, caracteristique du compose a cette longueur d'onde</button>
              <button class="option">La longueur du trajet optique</button>
              <button class="option">La concentration en mol/L</button>
            </div>
            <div class="q-feedback">&epsilon; (epsilon) est le coefficient d'extinction molaire en L/mol/cm. Il est caracteristique du compose et de la longueur d'onde choisie. Pour la chlorophylle a 660 nm, &epsilon; ~ 90 000 L/mol/cm.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">Quelle technique spectroscopique donne directement la masse molaire d'une molecule ?</p>
            <div class="options">
              <button class="option">Spectroscopie IR</button>
              <button class="option">Spectroscopie UV-visible</button>
              <button class="option">Spectroscopie de fluorescence</button>
              <button class="option" data-correct="1">Spectrometrie de masse</button>
            </div>
            <div class="q-feedback">La spectrometrie de masse donne l'ion moleculaire M&bull;+ dont le rapport m/z (avec z=1) correspond a la masse molaire. La MS haute resolution permet meme de determiner la formule brute exacte.</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">Un pic fort a 1715 cm<sup>-1</sup> dans un spectre IR indique la presence de :</p>
            <div class="options">
              <button class="option">Une liaison O-H</button>
              <button class="option">Une liaison C-H</button>
              <button class="option" data-correct="1">Un groupe carbonyle (C=O)</button>
              <button class="option">Une liaison triple C&equiv;C</button>
            </div>
            <div class="q-feedback">La liaison C=O (carbonyle) absorbe fortement entre 1700 et 1750 cm<sup>-1</sup>. La position precise indique le type : acide carboxylique (~1710), cetone (~1715), ester (~1735), amide (~1680).</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">En RMN ¹H, un proton aromatique apparait typiquement a :</p>
            <div class="options">
              <button class="option">0,9 ppm</button>
              <button class="option">2 ppm</button>
              <button class="option">4 ppm</button>
              <button class="option" data-correct="1">7&mdash;8 ppm</button>
            </div>
            <div class="q-feedback">Les H aromatiques resonnent a 7&mdash;8 ppm en raison du courant de cycle du systeme aromatique (anisotropie magnetique) qui deshblinde ces protons. C'est une signature distinctive des molecules aromatiques.</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Quelle spectroscopie est la plus sensible (detection aux concentrations les plus basses) ?</p>
            <div class="options">
              <button class="option">UV-visible</button>
              <button class="option">IR</button>
              <button class="option" data-correct="1">Fluorescence</button>
              <button class="option">RMN</button>
            </div>
            <div class="q-feedback">La fluorescence peut detecter des concentrations de 10<sup>-12</sup> mol/L pour des fluorophores efficaces, contre 10<sup>-6</sup>&mdash;10<sup>-8</sup> mol/L pour l'UV-visible. La RMN est la moins sensible (typiquement 10<sup>-3</sup>&mdash;10<sup>-4</sup> mol/L).</div>
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
        <h3>Exercice 1 &mdash; Loi de Beer-Lambert</h3>
        <p>Une solution de permanganate de potassium a &lambda; = 545 nm donne une absorbance A = 0,62 dans une cuve de 1 cm. Sachant que &epsilon; = 2400 L/mol/cm, calculer la concentration.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>c = A / (&epsilon; &times; l) = 0,62 / (2400 &times; 1) = <strong>2,58 x 10<sup>-4</sup> mol/L</strong></p></div>
        </details>
        <h3>Exercice 2 &mdash; Interpretation IR</h3>
        <p>Un compose inconnu montre les bandes IR suivantes : 3300 cm<sup>-1</sup> (large), 1715 cm<sup>-1</sup> (fort). Quelle est la nature fonctionnelle probable de ce compose ?</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>3300 cm<sup>-1</sup> large : OH d'acide carboxylique ou alcool. 1715 cm<sup>-1</sup> fort : C=O. La combinaison OH + C=O suggere un <strong>acide carboxylique (-COOH)</strong>. La bande OH d'acide est typiquement tres large (2500&mdash;3300 cm<sup>-1</sup>).</p></div>
        </details>
        <h3>Exercice 3 &mdash; RMN</h3>
        <p>Le spectre RMN ¹H d'un compose de formule C&sub4;H&sub8;O montre : 1 triplet a 1,0 ppm (3H), 1 quartet a 2,4 ppm (2H), et 1 singlet a 2,1 ppm (3H). Identifier le compose.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>Triplet 3H + quartet 2H = ethyle (CH&sub3;-CH&sub2;-). Singlet 3H = CH&sub3; isole. A 2,4 ppm (alpha d'un carbonyle). C&sub4;H&sub8;O avec ces signaux : <strong>butanone (methyl ethyl cetone, CH&sub3;-CO-CH&sub2;-CH&sub3;)</strong>. Le CH&sub3; du C=O est a 2,1 ppm (singlet) et l'ethyle adjacent au C=O donne triplet + quartet.</p></div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/analytique/laboratoire" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Techniques de laboratoire</span></a>
      <a class="next" data-cv="chimie/analytique/chromatographie" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">Chromatographie &#8594;</span></a>
    </div>"""

print(f"analytique/spectroscopie: {len(pages['analytique/spectroscopie']['content'])} chars")

# ============================================================
# analytique/chromatographie - full rewrite
# ============================================================
pages['analytique/chromatographie']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>Separer pour identifier</p></div>
      </div>
      <p class="resume-text">La <strong>chromatographie</strong> est l'ensemble des techniques de separation basees sur la distribution differente des constituants d'un melange entre une <strong>phase stationnaire</strong> (fixe) et une <strong>phase mobile</strong> (liquide ou gazeuse). Elle permet de separer, identifier et quantifier les composants d'un melange, meme tres complexe.</p>
      <div class="highlight-box">
        <p><strong>Principe fondamental :</strong> Chaque molecule interagit differemment avec la phase stationnaire. Plus une molecule est "retenue", plus elle migre lentement. La difference de vitesse de migration permet la separation. L'efficacite est exprimee par le nombre de plateaux theoriques N.</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Les grandes techniques chromatographiques</p></div>
      </div>
      <div class="course-content">
        <h3>Chromatographie sur couche mince (CCM)</h3>
        <p>La CCM est la technique qualitative la plus simple et la plus rapide. La phase stationnaire est une couche mince de silice (polaire) sur une plaque d'aluminium ou de verre. L'echantillon est depose en bas, la plaque est placee dans un solvant (phase mobile), qui monte par capillarite.</p>
        <ul>
          <li><strong>Facteur de retention Rf = distance migree par le compose / distance migree par le solvant</strong></li>
          <li>0 &lt; Rf &lt; 1 ; un compose tres polaire (fortement retenu par la silice) a un Rf bas ; un compose peu polaire a un Rf eleve</li>
          <li>Revelation : UV 254 nm (spots sombres), solution de permanganate, iode, ninhydrine (acides amines)</li>
          <li>Applications : suivi de reactions, controle de purete, choix des conditions de colonnes</li>
        </ul>

        <h3>Chromatographie liquide haute performance (HPLC)</h3>
        <p>L'HPLC est la technique de reference pour l'analyse quantitative en chimie et pharmacie. La phase mobile (solvant) est poussee a haute pression (50&mdash;400 bar) a travers une colonne remplie de particules fines (1,7&mdash;5 &micro;m). Deux modes principaux :</p>
        <ul>
          <li><strong>Phase normale :</strong> phase stationnaire polaire (silice), phase mobile apolaire. Utilise pour les molecules hydrophiles.</li>
          <li><strong>Phase inverse (RP-HPLC) :</strong> phase stationnaire apolaire (C18 = chaines octadecyle greffees sur silice), phase mobile aqueuse/organique. Le plus courant (>80 % des analyses). Les molecules apolaires sont les plus retenues.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Exemple pharmaceutique :</strong> L'HPLC est indispensable pour le controle qualite des medicaments. Elle permet de verifier la purete (>99,5 % requis pour une substance active), de doser les impuretes, et de tester la stabilite.</p>
        </div>
        <p>Detection : UV-Vis (le plus courant), fluorescence (haute sensibilite), MS (identification structurale).</p>

        <h3>Chromatographie en phase gazeuse (GC / CPG)</h3>
        <p>La GC separe des molecules volatiles ou volatilisables en les vaporisant et en les transportant par un gaz vecteur inerte (He, N&sub2;) a travers une colonne capillaire chauffee (150&mdash;350 °C). La separation repose sur les differences de point d'ebullition et d'interaction avec la phase stationnaire (liquide ou solide).</p>
        <ul>
          <li>Colonne capillaire typique : 30 m x 0,25 mm, garnie d'une phase stationnaire liquide (polysiloxane)</li>
          <li>Detecteur FID (ionisation de flamme) : universel pour les composes carbones, tres sensible (10<sup>-12</sup> g)</li>
          <li>Couplage GC-MS : identification formelle par le spectre de masse de chaque pic</li>
          <li>Applications : analyse des parfums et aromes, controle de la qualite du vin, detection de stupefiants, analyses environmentales (pesticides)</li>
        </ul>

        <h3>Chromatographie d'exclusion et echangeurs d'ions</h3>
        <p>D'autres types de chromatographies exploitent des proprietes specifiques :</p>
        <ul>
          <li><strong>Chromatographie d'exclusion stereoique (SEC / GPC) :</strong> separation par taille moleculaire. Les molecules traversent des pores ; les grosses moleculess sont exclues et sortent en premier. Utilisee pour mesurer la distribution de masse molaire des polymeres.</li>
          <li><strong>Echangeurs d'ions (CI) :</strong> phase stationnaire chargee. Les cations sont retenus par un echangeur cationique (chargee negativement), les anions par un echangeur anionique. Utilisee pour l'analyse des ions en eau (fluorures, nitrates, metaux).</li>
          <li><strong>Chromatographie d'affinite :</strong> basee sur des interactions biologiques specifiques (enzyme-substrat, anticorps-antigene). Permet une purification tres selective de proteines.</li>
        </ul>

        <h3>Electrophorese : separation par migration dans un champ electrique</h3>
        <p>Bien que distincte, l'electrophorese est souvent consideree avec la chromatographie en analyse. Les molecules chargees migrent sous l'effet d'un champ electrique :</p>
        <ul>
          <li><strong>Electrophorese sur gel d'agarose :</strong> separeration de l'ADN et de l'ARN par taille. L'ADN migre vers l'anode (charge negative) ; les fragments plus petits migrent plus vite dans les pores du gel.</li>
          <li><strong>SDS-PAGE :</strong> electrophorese de proteines en gel de polyacrylamide + SDS (detergent qui charge uniformement les proteines). Separation par masse moleculaire. Indispensable en biologie moleculaire.</li>
          <li><strong>Electrophorese capillaire (CE) :</strong> haute efficacite, faibles volumes d'echantillon, utilisee pour sequencer l'ADN.</li>
        </ul>

        <h3>Criteres de qualite chromatographique</h3>
        <p>L'efficacite d'une separation est evaluee par plusieurs parametres :</p>
        <ul>
          <li><strong>Resolution R<sub>s</sub> = (&Delta;t<sub>R</sub>) / (4 &sigma;) :</strong> mesure la separation de deux pics. R<sub>s</sub> &gt; 1,5 = separation complete.</li>
          <li><strong>Nombre de plateaux theoriques N = 16(t<sub>R</sub>/W)&sup2; :</strong> mesure de l'efficacite de la colonne. Une colonne HPLC moderne a N = 10 000&mdash;100 000 plateaux/m.</li>
          <li><strong>Symetrie du pic (facteur de trainee) :</strong> un pic ideal est gaussien. Les pics asymetriques indiquent une saturation de la phase stationnaire ou des interactions non specifiques.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Limite de detection vs limite de quantification :</strong> La LOD (Limit of Detection) est la plus petite quantite detectable (rapport signal/bruit = 3). La LOQ (Limit of Quantification) est la plus petite quantite dosable avec precision (S/N = 10). Ces criteres sont exiges par les pharmacopees et normes environnementales.</p>
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
          <span class="quiz-title-text">Chromatographie &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">En CCM sur silice, un compose tres polaire aura un Rf :</p>
            <div class="options">
              <button class="option" data-correct="1">Proche de 0 (fortement retenu par la silice polaire)</button>
              <button class="option">Proche de 1</button>
              <button class="option">Superieur a 1</button>
              <button class="option">Ca depend de la couleur du compose</button>
            </div>
            <div class="q-feedback">En chromatographie de phase normale (silice polaire), les composes polaires interagissent fortement avec la phase stationnaire et migrent peu : Rf proche de 0. Pour augmenter leur Rf, on utilise un solvant plus polaire.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">Quelle est la caracteristique distinctive de la GC par rapport a l'HPLC ?</p>
            <div class="options">
              <button class="option">Elle utilise de la silice comme phase stationnaire</button>
              <button class="option" data-correct="1">La phase mobile est un gaz inerte, et les composes doivent etre volatils ou volatilisables</button>
              <button class="option">Elle ne peut analyser que les ions</button>
              <button class="option">Elle ne peut pas etre couplee a la spectrometrie de masse</button>
            </div>
            <div class="q-feedback">En GC, la phase mobile est un gaz vecteur (He, N&sub2;, Ar). Les composes doivent etre volatils (point d'ebullition accessible) ou derivatisables. L'HPLC utilise un solvant liquide et convient aux composes non volatils, polaires, thermosensibles.</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">En RP-HPLC (phase inverse, colonne C18), quel compose sort en premier ?</p>
            <div class="options">
              <button class="option">Le compose le plus apolaire</button>
              <button class="option" data-correct="1">Le compose le plus polaire (le moins retenu par la phase C18 apolaire)</button>
              <button class="option">Le compose le plus lourd</button>
              <button class="option">Le compose le plus volatile</button>
            </div>
            <div class="q-feedback">En phase inverse, la colonne C18 est hydrophobe. Les composes polaires sont peu retenus et sortent en premiers (temps de retention court). Les composes apolaires s'adsorbent sur la chaine C18 et sortent en dernier.</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">L'electrophorese sur gel d'agarose separe l'ADN en fonction :</p>
            <div class="options">
              <button class="option">De sa charge (tous les fragments ADN ont la meme charge)</button>
              <button class="option">De sa composition en bases</button>
              <button class="option" data-correct="1">De sa taille (les petits fragments migrent plus vite dans les pores du gel)</button>
              <button class="option">De sa structure secondaire</button>
            </div>
            <div class="q-feedback">L'ADN est uniformement charge negativement (groupes phosphate). Tous les fragments migrent vers l'anode, mais les plus petits se faufilent plus facilement dans les pores du gel et migrent plus vite. Un marqueur de taille (DNA ladder) permet la lecture.</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Qu'est-ce que le couplage GC-MS permet que la GC seule ne peut pas faire ?</p>
            <div class="options">
              <button class="option">Separer les composes plus rapidement</button>
              <button class="option">Analyser des composes non volatils</button>
              <button class="option" data-correct="1">Identifier formellement chaque pic par son spectre de masse</button>
              <button class="option">Mesurer la concentration absolue sans etalon</button>
            </div>
            <div class="q-feedback">La GC seule donne un temps de retention, pas une identite certaine. Coupler avec la MS fournit un spectre de fragmentation unique pour chaque compose, permettant l'identification formelle. C'est la methode de reference en forensique et en controle alimentaire.</div>
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
        <h3>Exercice 1 &mdash; Calcul de Rf</h3>
        <p>En CCM, un compose migre de 4,2 cm et le front du solvant de 7,0 cm. Calculer le Rf et dire si le compose est plutot polaire ou apolaire (phase stationnaire = silice).</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>Rf = 4,2 / 7,0 = <strong>0,60</strong>. Rf moderement eleve sur silice : le compose est <strong>moderement apolaire</strong> (peu retenu par la silice polaire). Pour augmenter le Rf, on pourrait utiliser un solvant plus polaire comme eluant.</p></div>
        </details>
        <h3>Exercice 2 &mdash; Choix de technique</h3>
        <p>Pour chacune des analyses suivantes, quelle technique chromatographique est la plus adaptee ? (a) Dosage d'un medicament dans le plasma sanguin (non volatile, polaire). (b) Analyse des aromes d'un vin rouge. (c) Mesure de la distribution de masse molaire d'un polymere.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>(a) <strong>HPLC-UV ou HPLC-MS</strong> : le medicament est non volatile et present en faible concentration dans une matrice complexe. (b) <strong>GC-MS</strong> : les aromes sont volatils, la GC les separe excellemment et la MS identifie chaque molecule. (c) <strong>GPC/SEC</strong> : technique specifique pour mesurer les distributions de masse molaire des polymeres par exclusion sterique.</p></div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/analytique/spectroscopie" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Spectroscopie</span></a>
      <a class="next" data-cv="chimie/analytique/analyses" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">Methodes d'analyse &#8594;</span></a>
    </div>"""

print(f"analytique/chromatographie: {len(pages['analytique/chromatographie']['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Analytique part 1 done.")
