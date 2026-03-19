import json

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# analytique/analyses - full rewrite (was placeholder)
# ============================================================
pages['analytique/analyses']['content'] = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>Connaitre la composition de la matiere</p></div>
      </div>
      <p class="resume-text">Les <strong>methodes d'analyse chimique</strong> permettent de determiner la nature et la quantite des especes presentes dans un echantillon. L'analyse qualitative repond &laquo; quoi ? &raquo;, l'analyse quantitative repond &laquo; combien ? &raquo;. Ces techniques sont au coeur du controle qualite industriel, de la medecine, de l'environnement et de la recherche.</p>
      <div class="highlight-box">
        <p><strong>Deux grands types d'analyse :</strong> L'analyse <strong>qualitative</strong> identifie les especes presentes (tests de flamme, reactions de precipitation, spectroscopie). L'analyse <strong>quantitative</strong> mesure leur concentration (volumetrie, gravimetrie, spectrometrie). La plupart des methodes modernes font les deux simultanement.</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Methodes classiques et instrumentales</p></div>
      </div>
      <div class="course-content">
        <h3>Analyse qualitative classique : tests et reactions caracteristiques</h3>
        <p>Avant l'instrumentation moderne, les chimistes utilisaient des reactions colorees ou des precipitations pour identifier les ions :</p>
        <ul>
          <li><strong>Test de flamme :</strong> couleur caracteristique des ions metalliques dans la flamme d'un bec Bunsen. Li+ : rouge ecarlate ; Na+ : jaune intense ; K+ : violet ; Ca&sup2;+ : rouge-orange ; Sr&sup2;+ : rouge cerise ; Ba&sup2;+ : vert.</li>
          <li><strong>Reactions de precipitation :</strong> Cl&#8315; + Ag+ &rarr; AgCl(s) blanc. SO&sub4;&sup2;&#8315; + Ba&sup2;+ &rarr; BaSO&sub4;(s) blanc insoluble dans HCl. CO&sub3;&sup2;&#8315; + 2H+ &rarr; H&sub2;O + CO&sub2; (effervescence).</li>
          <li><strong>Tests fonctionnels :</strong> reactif de Fehling (aldehyde &rarr; precipite rouge brique Cu&sub2;O) ; reactif de Tollens (aldehyde &rarr; miroir d'argent) ; bleu de bromothymol (indicateur pH) ; FeCl&sub3; (phenols &rarr; coloration violette).</li>
          <li><strong>Test de Beilstein :</strong> fil de cuivre chauffe puis plonge dans l'echantillon : flamme verte = halogene present.</li>
        </ul>

        <h3>Analyse volumetrique (titrage)</h3>
        <p>Le titrage est la technique quantitative classique la plus repandue. On ajoute une solution etalon (titrant, concentration connue c&sub1;) a une solution d'analyte (concentration inconnue c&sub2;) jusqu'au point d'equivalence :</p>
        <div class="highlight-box">
          <p><strong>Relation a l'equivalence :</strong> n(titrant) x stochiometrie = n(analyte). Pour une reaction 1:1 : c&sub1;V&sub1; = c&sub2;V&sub2;. Point d'equivalence detecte par indicateur colore ou pH-metre.</p>
        </div>
        <p>Types de titrages :</p>
        <ul>
          <li><strong>Titrage acido-basique :</strong> HCl + NaOH &rarr; NaCl + H&sub2;O. Indicateurs : phenolphtaleine (incolore/rose, pH 8,2&mdash;10), rouge de methyle (rouge/jaune, pH 4,4&mdash;6,2).</li>
          <li><strong>Titrage d'oxydo-reduction :</strong> permanganato-metrie (KMnO&sub4;, auto-indicateur), iodometrie (I&sub2;/S&sub2;O&sub3;&sup2;&#8315;), dichromato-metrie. Utilises pour doser le fer, le glucose, les antioxydants.</li>
          <li><strong>Complexometrie (EDTA) :</strong> l'EDTA forme des complexes 1:1 avec la plupart des cations metalliques. Permet de doser la durete totale de l'eau (Ca&sup2;+ + Mg&sup2;+). Indicateur : noir d'eriochrome T.</li>
          <li><strong>Precipitation (argentimetrie) :</strong> Mohr, Volhard, Fajans pour les halogenures. Dosage du Cl&#8315; dans les eaux.</li>
        </ul>

        <h3>Analyse gravimetrique</h3>
        <p>La gravimetrie dose une espece en la transformant en un precipite de composition connue, que l'on seche et pese avec precision. C'est la methode la plus precise en termes absolus (±0,01 %) mais aussi la plus longue :</p>
        <ul>
          <li><strong>Exemple :</strong> dosage de SO&sub4;&sup2;&#8315; par precipitation en BaSO&sub4;. Masse BaSO&sub4; mesure &rarr; n(SO&sub4;&sup2;&#8315;) = n(BaSO&sub4;) &rarr; concentration.</li>
          <li>Facteur de precipitation F = M(analyte) / M(precipite)</li>
          <li>Utilise en tracabilite metrolologique pour etalonner d'autres methodes</li>
        </ul>

        <h3>Spectrometrie d'emission atomique (AES/ICP-OES)</h3>
        <p>La spectrometrie d'emission atomique excite les atomes (par flamme, arc, ou plasma ICP) qui emettent des raies caracteristiques. La technique ICP-OES (plasma couple par induction) est la methode de reference pour l'analyse des metaux :</p>
        <ul>
          <li>Analyse simultanee de 70 elements metalliques</li>
          <li>Limites de detection : 0,1&mdash;100 &micro;g/L selon l'element</li>
          <li>Applications : analyse des eaux, sols, aliments, materiaux</li>
          <li>ICP-MS (avec spectrometrie de masse) : encore plus sensible (&micro;g/L a ng/L), permet l'analyse isotopique</li>
        </ul>

        <h3>Spectrometrie d'absorption atomique (SAA)</h3>
        <p>La SAA mesure l'absorption de la lumiere par des atomes libres. Une lampe a cathode creuse specifique emet la raie de resonance de l'element a doser :</p>
        <ul>
          <li>La flamme (air/acetylene ou N&sub2;O/acetylene) atomise l'echantillon</li>
          <li>La sensibilite est tres haute pour les metaux alcalins et de transition</li>
          <li>Fourneau graphite (SAA-ETA) : encore plus sensible (nanogrammes)</li>
          <li>Applications : dosage du plomb dans le sang, du mercure dans l'environnement, des metaux dans les aliments</li>
        </ul>

        <h3>Analyse elementaire et analyse thermique</h3>
        <p>Deux techniques complementaires pour caracteriser les substances :</p>
        <ul>
          <li><strong>Analyse elementaire CHNS :</strong> combustion complete de l'echantillon. Les gaz formes (CO&sub2;, H&sub2;O, N&sub2;, SO&sub2;) sont analyses pour determiner les pourcentages en C, H, N, S. Precision : ±0,3 %. Fondamentale pour confirmer une formule brute en synthese organique.</li>
          <li><strong>Analyse thermogravimetrique (ATG) :</strong> mesure la variation de masse en fonction de la temperature (sous N&sub2; ou air). Detecte la deshydratation, la decomposition, l'oxydation. Permet de determiner la composition de melanges (ex : teneur en charge minerale d'un polymere).</li>
          <li><strong>Calorimetrie differentielle a balayage (DSC) :</strong> mesure les flux de chaleur. Detecte les transitions de phase (fusion, cristallisation, transition vitreuse), les reactions exo/endothermiques. Essentielle pour les polymeres et les formulations pharmaceutiques.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Validation analytique :</strong> Toute methode analytique doit etre validee avant usage. Les criteres ICH (International Council for Harmonisation) en pharmacie imposent de verifier : specificite, linearite, precision (repetabilite + reproductibilite), exactitude, limite de detection, limite de quantification, robustesse.</p>
        </div>

        <h3>Analyse en ligne et capteurs</h3>
        <p>La chimie moderne va vers l'analyse en temps reel, sans prelevement d'echantillon :</p>
        <ul>
          <li><strong>Capteurs electrochimiques :</strong> pH-metre, electrode selective d'ions (ISE), capteurs de glucose, d'O&sub2; dissous (oxymetre)</li>
          <li><strong>Spectroscopie proche IR (NIR) :</strong> analyse en ligne de la qualite du grain, de la farine, des medicaments sur la chaine de production &mdash; sans preparation d'echantillon</li>
          <li><strong>Raman portatif :</strong> identification de substances en terrain (douanes, securite, forensique) en quelques secondes sans contact</li>
          <li><strong>Nez electronique (e-nose) :</strong> reseau de capteurs chimiques mimant l'olfaction. Utilise pour le controle qualite des aliments, la detection de gaz toxiques</li>
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
          <span class="quiz-title-text">Methodes d'analyse &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">Quelle couleur de flamme indique la presence de sodium ?</p>
            <div class="options">
              <button class="option">Rouge ecarlate</button>
              <button class="option" data-correct="1">Jaune intense</button>
              <button class="option">Violet</button>
              <button class="option">Vert</button>
            </div>
            <div class="q-feedback">Les ions sodium (Na+) colorent la flamme en jaune intense caracteristique (raie D a 589 nm). Cette couleur est si forte que meme des traces de NaCl en contamination masquent les autres couleurs &mdash; d'ou l'utilisation d'un verre cobalt pour observer le potassium violet.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">L'EDTA est utilise en complexometrie pour doser :</p>
            <div class="options">
              <button class="option">Les anions chlorure</button>
              <button class="option">Les acides carboxyliques</button>
              <button class="option" data-correct="1">Les cations metalliques (durete de l'eau, Ca&sup2;+, Mg&sup2;+)</button>
              <button class="option">Les proteines</button>
            </div>
            <div class="q-feedback">L'EDTA (acide ethylenediaminetetraacetique) est un ligand hexadentate qui forme des complexes 1:1 stables avec presque tous les cations metalliques. La complexometrie a l'EDTA est la methode standard pour mesurer la durete de l'eau (TH).</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">Quelle technique est la plus appropriee pour doser simultanement 20 elements metalliques dans de l'eau potable ?</p>
            <div class="options">
              <button class="option">Spectrometrie d'absorption atomique (SAA) en flamme</button>
              <button class="option" data-correct="1">ICP-OES (plasma couple par induction - emission optique)</button>
              <button class="option">Titrage volumetrique</button>
              <button class="option">Analyse gravimetrique</button>
            </div>
            <div class="q-feedback">L'ICP-OES permet l'analyse simultanee de 70 elements en quelques minutes. La SAA ne dose qu'un element a la fois. C'est la technique de reference pour les analyses multi-elements en surveillance des eaux (norme ISO 11885).</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">Qu'est-ce que la validation analytique selon ICH verifie en particulier ?</p>
            <div class="options">
              <button class="option">La couleur de l'echantillon</button>
              <button class="option" data-correct="1">La specificite, la linearite, la precision, l'exactitude et les limites de detection</button>
              <button class="option">Le prix de l'appareil</button>
              <button class="option">La duree de l'analyse</button>
            </div>
            <div class="q-feedback">La validation ICH (Q2R1) exige de prouver que la methode mesure ce qu'elle est censee mesurer (specificite), avec une reponse proportionnelle (linearite), reproductible (precision), correcte (exactitude), et sensible aux bas niveaux (LOD, LOQ).</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Quel reactif revele specifiquement la presence de groupes aldehydes ?</p>
            <div class="options">
              <button class="option">Le nitrate d'argent (sans NH&sub3;)</button>
              <button class="option" data-correct="1">Le reactif de Fehling (ou de Tollens)</button>
              <button class="option">Le chlorure de fer(III) FeCl&sub3;</button>
              <button class="option">L'EDTA</button>
            </div>
            <div class="q-feedback">Le reactif de Fehling (Cu&sup2;+ en milieu basique) est reduit par les aldehydes en Cu&sub2;O (precipite rouge brique). Le reactif de Tollens (ion diamminoargent [Ag(NH&sub3;)&sub2;]+) donne un miroir d'argent. FeCl&sub3; revele les phenols (coloration violette).</div>
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
        <h3>Exercice 1 &mdash; Titrage acide-base</h3>
        <p>On titre 20,00 mL de HCl de concentration inconnue par NaOH a 0,100 mol/L. A l'equivalence, on a verse 18,40 mL de NaOH. Calculer la concentration en HCl.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>HCl + NaOH &rarr; NaCl + H&sub2;O (reaction 1:1). A l'equivalence : n(HCl) = n(NaOH). c(HCl) x 0,0200 = 0,100 x 0,01840. c(HCl) = 1,840 x 10&#8315;&sup3; / 0,0200 = <strong>0,0920 mol/L</strong>.</p></div>
        </details>
        <h3>Exercice 2 &mdash; Analyse gravimetrique</h3>
        <p>On precipite les ions sulfate d'un echantillon de 250 mL par exces de BaCl&sub2;. Apres filtration, sechage et pesee, on obtient 0,4835 g de BaSO&sub4; (M = 233,4 g/mol). Calculer la concentration en SO&sub4;&sup2;&#8315; (M = 96,06 g/mol).</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box"><p>n(BaSO&sub4;) = 0,4835/233,4 = 2,072 x 10&#8315;&sup3; mol = n(SO&sub4;&sup2;&#8315;). c(SO&sub4;&sup2;&#8315;) = 2,072 x 10&#8315;&sup3; / 0,250 = <strong>8,29 x 10&#8315;&sup3; mol/L</strong> = 8,29 mmol/L (= 796 mg/L, superieur a la limite de 250 mg/L de l'eau potable).</p></div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/analytique/laboratoire" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Laboratoire</span></a>
      <a class="next" data-cv="chimie/analytique/spectroscopie" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">Spectroscopie &#8594;</span></a>
    </div>"""

print(f"analytique/analyses: {len(pages['analytique/analyses']['content'])} chars")

# ============================================================
# organique/fonctions - add more content (was 14831)
# ============================================================
fonctions_extra = """
        <h3>Reactivite des fonctions : reactions d'esterification et de saponification</h3>
        <p>L'<strong>esterification</strong> est la reaction entre un acide carboxylique et un alcool pour former un ester et de l'eau. C'est une reaction lente, reversible (equilibree) et necessitant un catalyseur acide :</p>
        <div class="highlight-box">
          <p><strong>R-COOH + R'-OH &#8652; R-COO-R' + H&sub2;O</strong> (catalyse par H&sup2;SO&sub4; ou HCl). La constante d'equilibre est souvent voisine de 4 pour les alcools primaires. On peut deplacer l'equilibre en eliminant l'eau ou en utilisant un exces de reactif.</p>
        </div>
        <p>La <strong>saponification</strong> est l'ester hydrolyse en base forte (NaOH) de maniere irreversible, produisant un carboxylate de sodium (savon) et un alcool. Base industrielle de la fabrication du savon (graisses + NaOH).</p>

        <h3>Reactions d'addition sur les carbonyles</h3>
        <p>Le groupe carbonyle C=O est polaire (O plus electronegative), ce qui le rend electrophile. Il subit des reactions d'addition nucleophile :</p>
        <ul>
          <li><strong>Addition d'alcool :</strong> aldehyde + alcool &rarr; hemiacetal, puis acetal (+ alcool, perte d'eau). Les sucres cycliques sont des hemiacetals intramoleculaires.</li>
          <li><strong>Addition de cyanure :</strong> RCHO + HCN &rarr; RCH(OH)(CN), une cyanohydrine. Permet d'allonger la chaine carbonee.</li>
          <li><strong>Reduction :</strong> aldehyde &rarr; alcool primaire (NaBH&sub4; ou LiAlH&sub4;) ; cetone &rarr; alcool secondaire.</li>
          <li><strong>Condensation aldolique :</strong> formation de liaison C-C entre deux carbonyles en milieu basique. Fondamentale en biosynthese (aldolase dans la glycolyse).</li>
        </ul>

        <h3>Amines : bases faibles et applications pharmaceutiques</h3>
        <p>Les amines sont des bases faibles (pK<sub>b</sub> ~ 4 pour les amines aliphatiques) car le doublet non liant de N se protonise en milieu aqueux :</p>
        <p>R-NH&sub2; + H&sub2;O &#8652; R-NH&sub3;+ + OH&#8315;</p>
        <ul>
          <li>Les amines aromatiques (aniline, C&sub6;H&sub5;-NH&sub2;) sont beaucoup moins basiques (pK<sub>b</sub> ~ 9) car le doublet de N est delocalis dans le cycle aromatique.</li>
          <li>Les acides amines ont a la fois une amine et un acide carboxylique : ils existent sous forme zwitterionique a leur pHi (point isoelectrique).</li>
          <li>La majorite des medicaments contient une amine (morphine, amphetamine, metformine, lidocaine). La protonation en milieu acide (estomac, pH 2) ou neutre (sang, pH 7,4) controle leur absorption.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La regle de Lipinski :</strong> Un medicament oral doit idealement avoir : MW &lt; 500 g/mol, log P &lt; 5, pas plus de 5 donneurs de liaison H (OH, NH), pas plus de 10 accepteurs (O, N). Ces criteres guident le drug design moderne.</p>
        </div>

        <h3>Nomenclature systematique IUPAC des fonctions</h3>
        <p>La nomenclature IUPAC donne la priorite de la facon suivante (de plus haute a plus basse) pour le choix du suffixe :</p>
        <ul>
          <li>Acide carboxylique (&mdash;oique) &gt; Anhydride &gt; Ester (&mdash;oate) &gt; Amide (&mdash;amide) &gt; Nitrile (&mdash;nitrile)</li>
          <li>Aldehyde (&mdash;al) &gt; Cetone (&mdash;one) &gt; Alcool (&mdash;ol) &gt; Phenol (&mdash;ol)</li>
          <li>Amine (&mdash;amine) &gt; Ether (&mdash;oxy) &gt; Halogeno (&mdash;o)</li>
        </ul>
        <p>Exemple de nomenclature complexe : CH&sub3;-CH(OH)-COOH = acide 2-hydroxypropanoique = acide lactique. La fonction de plus haute priorite (acide) donne le suffixe ; la fonction OH est citee comme prefixe (hydroxy-).</p>
"""

old_fonctions = pages['organique/fonctions']['content']
# Find the right insertion point (before quiz or exercices)
marker = '    </section>\n    <section class="content-section" id="quiz">'
marker2 = '    </section>\n    <section class="content-section" id="exercices">'
if marker in old_fonctions:
    new_fonctions = old_fonctions.replace(
        '      </div>\n    </section>\n    <section class="content-section" id="quiz">',
        fonctions_extra + '\n      </div>\n    </section>\n    <section class="content-section" id="quiz">',
        1
    )
    pages['organique/fonctions']['content'] = new_fonctions
    print(f"organique/fonctions: {len(old_fonctions)} -> {len(new_fonctions)} chars")
elif marker2 in old_fonctions:
    new_fonctions = old_fonctions.replace(
        '      </div>\n    </section>\n    <section class="content-section" id="exercices">',
        fonctions_extra + '\n      </div>\n    </section>\n    <section class="content-section" id="exercices">',
        1
    )
    pages['organique/fonctions']['content'] = new_fonctions
    print(f"organique/fonctions: {len(old_fonctions)} -> {len(new_fonctions)} chars")
else:
    print("MARKER NOT FOUND for fonctions")
    # Find what comes after course-content
    idx = old_fonctions.rfind('</div>\n    </section>')
    print(repr(old_fonctions[idx-100:idx+200]))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done.")
