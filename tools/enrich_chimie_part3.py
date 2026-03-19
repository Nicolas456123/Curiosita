import json, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# biochimie/metabolisme - complete rewrite (was a placeholder)
# ============================================================
metabolisme_content = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info"><h2>Introduction</h2><p>L'energie de la vie</p></div>
      </div>
      <p class="resume-text">Le <strong>metabolisme</strong> designe l'ensemble des reactions chimiques qui se deroulent dans les cellules vivantes pour maintenir la vie. Il se divise en deux grandes categories : le <strong>catabolisme</strong> (degradation de molecules complexes en molecules simples avec liberation d'energie) et l'<strong>anabolisme</strong> (synthese de molecules complexes a partir de molecules simples, consommatrice d'energie). L'ATP (adenosine triphosphate) est la monnaie energetique universelle de la cellule.</p>
      <div class="highlight-box">
        <p><strong>Bilan global de la respiration cellulaire :</strong> C&sub6;H&sub1;&sub2;O&sub6; + 6O&sub2; &rarr; 6CO&sub2; + 6H&sub2;O + 30-32 ATP. Le glucose est entierement oxyde en CO&sub2; et H&sub2;O, liberant ~2870 kJ/mol captes sous forme d'ATP.</p>
      </div>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info"><h2>En detail</h2><p>Glycolyse, cycle de Krebs et chaine respiratoire</p></div>
      </div>
      <div class="course-content">
        <h3>L'ATP : la monnaie energetique cellulaire</h3>
        <p>L'<strong>ATP</strong> (adenosine triphosphate) est la molecule qui stocke et transporte l'energie dans toutes les cellules vivantes. L'hydrolyse de l'ATP en ADP libere environ <strong>30,5 kJ/mol</strong> :</p>
        <p>ATP + H&sub2;O &rarr; ADP + P&sub1; + 30,5 kJ/mol</p>
        <ul>
          <li>Un humain au repos produit et consomme environ 40 kg d'ATP par jour (la meme molecule est recyclee ~500 fois)</li>
          <li>Les muscles en effort intense peuvent produire jusqu'a 0,5 kg d'ATP par minute</li>
          <li>L'ATP est synthetise principalement par l'ATP synthase mitochondriale (enzyme rotative unique en biologie)</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Couplage energetique :</strong> Les reactions endergoniques (defavorables thermodynamiquement) sont couplees a l'hydrolyse de l'ATP pour les rendre spontanees. La contraction musculaire, la synthese proteique, le transport actif d'ions &mdash; tous sont alimentes par l'ATP.</p>
        </div>

        <h3>La glycolyse : premiere etape de la degradation du glucose</h3>
        <p>La <strong>glycolyse</strong> (du grec <em>glykos</em> = sucre, <em>lysis</em> = dissolution) est la voie metabolique fondamentale, presente dans toutes les cellules vivantes. Elle se deroule dans le cytoplasme en 10 etapes enzymatiques et transforme 1 molecule de glucose (6C) en 2 molecules de pyruvate (3C) :</p>
        <ul>
          <li><strong>Phase d'investissement</strong> (etapes 1-5) : consomme 2 ATP pour phosphoryler et cliver le glucose en 2 glyceraldehyde-3-phosphate (G3P)</li>
          <li><strong>Phase de gain</strong> (etapes 6-10) : produit 4 ATP + 2 NADH + 2 pyruvate</li>
          <li><strong>Bilan net :</strong> 1 glucose &rarr; 2 pyruvates + 2 ATP + 2 NADH + 2 H&sub2;O</li>
        </ul>
        <p>Enzymes cles : hexokinase (etape 1), phosphofructokinase-1 ou PFK-1 (etape 3, point de regulation majeur), pyruvate kinase (etape 10).</p>

        <h3>Devenir du pyruvate : aerobiose vs anaerobiose</h3>
        <p>Le sort du pyruvate depend de la disponibilite en oxygene :</p>
        <ul>
          <li><strong>En aerobiose (O&sub2; present) :</strong> le pyruvate entre dans la mitochondrie, est decarboxyle en acetyl-CoA par le complexe pyruvate deshydrogenase, puis entre dans le cycle de Krebs. C'est la voie la plus efficace energetiquement.</li>
          <li><strong>En anaerobiose chez les animaux :</strong> le pyruvate est reduit en <strong>lactate</strong> par la lactate deshydrogenase (LDH), regenerant le NAD+ necessaire a la poursuite de la glycolyse. C'est la <em>fermentation lactique</em>. C'est ce qui provoque la sensation de brulure dans les muscles en effort intense.</li>
          <li><strong>En anaerobiose chez les levures :</strong> fermentation alcoolique : pyruvate &rarr; acetaldehyde &rarr; ethanol + CO&sub2;. Base de la brasserie et de la vinification.</li>
        </ul>

        <h3>Le cycle de Krebs (cycle de l'acide citrique)</h3>
        <p>Le <strong>cycle de Krebs</strong> (decouvert par Hans Krebs en 1937, prix Nobel 1953) se deroule dans la matrice mitochondriale. Il oxyde completement l'acetyl-CoA (2C) en CO&sub2;, produisant des equivalents reduits (NADH, FADH&sub2;) et de l'ATP :</p>
        <ul>
          <li>L'acetyl-CoA (2C) se condense avec l'oxaloacetate (4C) pour former le citrate (6C)</li>
          <li>Au cours d'un tour, le cycle perd 2 CO&sub2;, produit 3 NADH + 1 FADH&sub2; + 1 GTP (= ATP)</li>
          <li><strong>Bilan par glucose :</strong> 2 tours x (3 NADH + 1 FADH&sub2; + 1 GTP) = 6 NADH + 2 FADH&sub2; + 2 GTP</li>
        </ul>
        <p>Les intermediaires du cycle (succinate, fumarate, malate, oxaloacetate) servent aussi de precurseurs a la biosynthese d'acides amines et de porphyrines (hemoglobine).</p>
        <div class="highlight-box">
          <p><strong>Anaplerosis :</strong> Quand les intermediaires du cycle sont prelevs pour la biosynthese, ils doivent etre reintegres. La pyruvate carboxylase synthetise de l'oxaloacetate a partir du pyruvate + CO&sub2;, maintenant le flux du cycle.</p>
        </div>

        <h3>Chaine de transport des electrons et phosphorylation oxydative</h3>
        <p>C'est l'etape qui produit le plus d'ATP (~26-28 sur ~30-32 au total). La chaine respiratoire est situee dans la membrane interne des mitochondries et comprend 4 complexes proteiques :</p>
        <ul>
          <li><strong>Complexe I</strong> (NADH deshydrogenase) : oxyde le NADH, pompe 4 H+ vers l'espace intermembranaire</li>
          <li><strong>Complexe II</strong> (succinate deshydrogenase) : oxyde le FADH&sub2;, ne pompe pas de H+</li>
          <li><strong>Complexe III</strong> (cytochrome bc1) : transfert d'electrons via ubiquinone, pompe 4 H+</li>
          <li><strong>Complexe IV</strong> (cytochrome c oxydase) : reduit l'O&sub2; en H&sub2;O, pompe 2 H+</li>
        </ul>
        <p>Le <strong>gradient de protons</strong> (force protomotrice) cree de part et d'autre de la membrane interne est exploite par l'<strong>ATP synthase</strong> (complexe V) : le flux de H+ de retour dans la matrice entraine la rotation d'une sous-unite proteique qui catalyse la synthese d'ATP a partir d'ADP + Pi (principe du rotor moleculaire, Nobel de chimie 1997).</p>
        <p>Ratio : 1 NADH &rarr; ~2,5 ATP ; 1 FADH&sub2; &rarr; ~1,5 ATP.</p>

        <h3>Regulation du metabolisme</h3>
        <p>Le metabolisme est finement regule pour repondre aux besoins energetiques de la cellule. Trois mecanismes principaux :</p>
        <ul>
          <li><strong>Regulation allosterique :</strong> les enzymes cles (PFK-1, pyruvate kinase, isocitrate deshydrogenase) sont activees par l'AMP/ADP (signe d'epuisement energetique) et inhibees par l'ATP/citrate (signe d'abondance).</li>
          <li><strong>Regulation hormonale :</strong> l'insuline (secretee apres un repas) active la glycolyse et la synthese de glycogene ; le glucagon (en jeune) active la glycogenolyse et la gluconeogenese.</li>
          <li><strong>Regulation covalente :</strong> la phosphorylation/dephosphorylation des enzymes par des kinases/phosphatases modifie rapidement leur activite en reponse a des signaux hormonaux.</li>
        </ul>

        <h3>Metabolisme des lipides et des proteines</h3>
        <p>Les glucides ne sont pas seuls a fournir de l'energie :</p>
        <ul>
          <li><strong>Beta-oxydation des acides gras :</strong> les acides gras sont degrades 2 carbones a la fois dans la mitochondrie, produisant de l'acetyl-CoA + NADH + FADH&sub2;. Un acide gras C16 (palmitate) produit 106 ATP, contre 32 pour le glucose (a masse egale, les graisses sont bien plus energetiques).</li>
          <li><strong>Catabolisme des acides amines :</strong> les acides amines en exces sont desamines (elimination du groupement NH&sub2; &rarr; ammoniac &rarr; uree par le cycle de l'uree) et leurs squelettes carbonees entrent dans le cycle de Krebs ou la neoglucogenese.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Valeurs energetiques comparees :</strong> glucides = 4 kcal/g, proteines = 4 kcal/g, lipides = 9 kcal/g, alcool = 7 kcal/g. Les lipides sont la forme de stockage energetique la plus dense car leur squelette carbonee est hautement reduit (peu d'oxygene).</p>
        </div>

        <h3>Applications medicales et sportives</h3>
        <p>La connaissance du metabolisme a des applications directes :</p>
        <ul>
          <li><strong>Diabete :</strong> en l'absence d'insuline (type 1) ou en cas d'insulino-resistance (type 2), le glucose ne peut entrer dans les cellules &mdash; hyperglycemie chronique, corps cetoniques, acidocetose</li>
          <li><strong>Regime cetogene :</strong> tres peu de glucides force l'organisme a utiliser les corps cetoniques (derives de la beta-oxydation) comme carburant cerebral</li>
          <li><strong>Dopage :</strong> l'EPO stimule la production de globules rouges, augmentant le transport d'O&sub2; vers les muscles et donc la capacite d'oxydation</li>
          <li><strong>Metformine :</strong> medicament antidiabetique qui active l'AMPK (le "capteur energetique" cellulaire) et inhibe la gluconeogenese hepatique</li>
          <li><strong>Cyanure :</strong> inhibe le complexe IV de la chaine respiratoire, bloquant completement la phosphorylation oxydative &mdash; mort cellulaire rapide par manque d'ATP</li>
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
          <span class="quiz-title-text">Metabolisme &mdash; Quiz</span>
          <span class="quiz-score">Score : <span id="scoreDisplay">0</span> / <span id="totalDisplay">5</span></span>
        </div>
        <div class="quiz-body" id="quizBody">
          <div class="question-block active" data-q="0">
            <p class="q-num">Question 1 / 5</p>
            <p class="q-text">Combien d'ATP net produit la glycolyse a partir d'une molecule de glucose ?</p>
            <div class="options">
              <button class="option">4 ATP</button>
              <button class="option" data-correct="1">2 ATP</button>
              <button class="option">32 ATP</button>
              <button class="option">0 ATP</button>
            </div>
            <div class="q-feedback">La glycolyse consomme 2 ATP (phase d'investissement) et en produit 4 (phase de gain), soit un gain net de 2 ATP + 2 NADH.</div>
          </div>
          <div class="question-block" data-q="1">
            <p class="q-num">Question 2 / 5</p>
            <p class="q-text">Ou se deroule le cycle de Krebs ?</p>
            <div class="options">
              <button class="option">Dans le cytoplasme</button>
              <button class="option">Dans la membrane mitochondriale externe</button>
              <button class="option" data-correct="1">Dans la matrice mitochondriale</button>
              <button class="option">Dans le noyau</button>
            </div>
            <div class="q-feedback">Le cycle de Krebs se deroule dans la matrice mitochondriale. Les enzymes du cycle sont solubles dans ce compartiment, sauf la succinate deshydrogenase (complexe II) qui est membranaire.</div>
          </div>
          <div class="question-block" data-q="2">
            <p class="q-num">Question 3 / 5</p>
            <p class="q-text">Quel est le role de l'oxygene dans la respiration cellulaire ?</p>
            <div class="options">
              <button class="option">Il active la glycolyse</button>
              <button class="option">Il est produit par le cycle de Krebs</button>
              <button class="option" data-correct="1">Il est l'accepteur final des electrons de la chaine respiratoire</button>
              <button class="option">Il phosphoryle l'ADP</button>
            </div>
            <div class="q-feedback">L'O&sub2; est reduit en H&sub2;O au niveau du complexe IV (cytochrome c oxydase). C'est l'accepteur final des electrons. Sans O&sub2;, la chaine respiratoire s'arrete et la cellule passe en anaerobiose.</div>
          </div>
          <div class="question-block" data-q="3">
            <p class="q-num">Question 4 / 5</p>
            <p class="q-text">Pourquoi les graisses ont-elles une valeur energetique deux fois plus elevee que les glucides (par gramme) ?</p>
            <div class="options">
              <button class="option">Parce qu'elles contiennent plus de carbone</button>
              <button class="option" data-correct="1">Parce que leur squelette carbonee est tres reduit (peu d'oxygene), il peut donc ceder plus d'electrons</button>
              <button class="option">Parce qu'elles liberent directement de l'ATP</button>
              <button class="option">Parce qu'elles n'ont pas besoin d'ATP pour etre activees</button>
            </div>
            <div class="q-feedback">Les lipides ont un rapport H/C eleve et peu d'oxygene. L'oxydation complete d'un CH&sub2; d'une chaine d'acide gras produit ~6,3 kJ/g contre ~3,7 kJ/g pour un CH&sub2;O glucidique.</div>
          </div>
          <div class="question-block" data-q="4">
            <p class="q-num">Question 5 / 5</p>
            <p class="q-text">Qu'est-ce que la fermentation lactique produit, et pourquoi est-elle utile ?</p>
            <div class="options">
              <button class="option">De l'ethanol — utile pour faire du vin</button>
              <button class="option" data-correct="1">Du lactate — regenere le NAD+ pour maintenir la glycolyse en anaerobiose</button>
              <button class="option">De l'acetyl-CoA — pour alimenter le cycle de Krebs</button>
              <button class="option">De l'ATP supplementaire</button>
            </div>
            <div class="q-feedback">La fermentation lactique regenere le NAD+ (consomme pendant la glycolyse) en reduisant le pyruvate en lactate. Cela permet de continuer a produire de l'ATP par glycolyse quand l'O&sub2; manque (efforts intenses).</div>
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
        <h3>Exercice 1 &mdash; Bilan energetique</h3>
        <p>Calculer le nombre total d'ATP produit par l'oxydation complete d'une molecule de glucose en utilisant les valeurs : 1 NADH &rarr; 2,5 ATP ; 1 FADH&sub2; &rarr; 1,5 ATP.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box">
            <p><strong>Glycolyse :</strong> 2 ATP + 2 NADH (= 5 ATP) = 7 ATP. <strong>Pyruvate deshydrogenase :</strong> 2 NADH = 5 ATP. <strong>Cycle de Krebs (x2) :</strong> 2 GTP + 6 NADH + 2 FADH&sub2; = 2 + 15 + 3 = 20 ATP. <strong>Total :</strong> 7 + 5 + 20 = <strong>32 ATP</strong> (estimation moderne, contre l'ancienne valeur de 38 ATP).</p>
          </div>
        </details>
        <h3>Exercice 2 &mdash; Fermentation</h3>
        <p>Expliquer pourquoi un sportif dont les muscles manquent d'O&sub2; ressent une sensation de brulure, et comment l'organisme s'y adapte.</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box">
            <p>Le lactate s'accumule dans le muscle (pH diminue &rarr; douleur). Le lactate est transporte par le sang vers le foie, ou il est reconverti en glucose par la neoglucogenese (cycle de Cori). Avec l'entrainement, le seuil lactate s'eleve (adaptation des mitochondries et de la vascularisation).</p>
          </div>
        </details>
        <h3>Exercice 3 &mdash; Regulation</h3>
        <p>Pourquoi la phosphofructokinase-1 (PFK-1) est-elle un point de regulation majeur de la glycolyse ? Quels metabolites l'activent ou l'inhibent ?</p>
        <details><summary>Voir la solution</summary>
          <div class="highlight-box">
            <p>PFK-1 catalyse la premiere reaction irreversible engageant le fructose-6-phosphate dans la glycolyse &mdash; c'est la valve de controle. <strong>Activateurs :</strong> AMP, ADP (signe de manque d'energie), fructose-2,6-bisphosphate (signal insulinique). <strong>Inhibiteurs :</strong> ATP (signe d'abondance energetique), citrate (signe d'abondance du cycle de Krebs).</p>
          </div>
        </details>
      </div>
    </section>

    <div class="course-nav">
      <a class="prev" data-cv="chimie/biochimie/proteines" href="#"><span class="course-nav-label">Cours precedent</span><span class="course-nav-title">&#8592; Proteines</span></a>
      <a class="next" data-cv="chimie/biochimie/adn-arn" href="#"><span class="course-nav-label">Cours suivant</span><span class="course-nav-title">ADN et ARN &#8594;</span></a>
    </div>"""

pages['biochimie/metabolisme']['content'] = metabolisme_content
print(f"biochimie/metabolisme: {len(metabolisme_content)} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Part 3 done.")
