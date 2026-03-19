import json, sys, re

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# generale/liaisons - add more content
# ============================================================
liaisons_extra = """
        <h3>Theorie des orbitales moleculaires (OM)</h3>
        <p>La theorie de Lewis et VSEPR decrit bien la geometrie, mais la <strong>theorie des orbitales moleculaires (OM)</strong> explique des proprietes comme la couleur, le magnetisme et la reactivite. Les orbitales atomiques se combinent pour former des orbitales moleculaires liantes (energie inferieure) et antiliantes (energie superieure, notees *) :</p>
        <ul>
          <li><strong>H&sub2; :</strong> 2 electrons dans l'OM liante &sigma;1s &mdash; molecule stable, ordre de liaison = 1</li>
          <li><strong>He&sub2; :</strong> 2 electrons dans &sigma;1s + 2 dans &sigma;*1s &mdash; ordre de liaison = 0, molecule instable (n'existe pas)</li>
          <li><strong>O&sub2; :</strong> 2 electrons dans deux OM antiliantes &pi;*2p &mdash; molecule <em>paramagnetique</em> (attire par un aimant), ce qu'un schema de Lewis simple ne predit pas</li>
          <li><strong>NO :</strong> 1 electron celibataire &mdash; radical libre, signal de vasodilatation en biologie</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Ordre de liaison :</strong> OL = (electrons liants - electrons antiliants) / 2. Un OL de 1 = liaison simple, 2 = double, 3 = triple. Si OL = 0, la molecule est instable et n'existe pas a l'etat libre.</p>
        </div>

        <h3>Polarite moleculaire et moments dipolaires</h3>
        <p>Une liaison est polaire si les deux atomes ont des electronegativites differentes. Mais une <strong>molecule</strong> peut etre apolaire meme si ses liaisons sont polaires, si les moments dipolaires se compensent par symetrie :</p>
        <ul>
          <li><strong>CO&sub2; :</strong> lineaire (O=C=O), les deux moments dipolaires C=O sont opposes et s'annulent &rarr; molecule apolaire</li>
          <li><strong>H&sub2;O :</strong> coudee (104,5°), les moments dipolaires O-H ne s'annulent pas &rarr; molecule polaire (&mu; = 1,85 D)</li>
          <li><strong>NH&sub3; :</strong> pyramidale, dipole resultant pointe vers N &rarr; polaire (&mu; = 1,47 D)</li>
          <li><strong>CCl&sub4; :</strong> tetraedrique regulier, les 4 dipoles C-Cl s'annulent &rarr; apolaire</li>
        </ul>
        <p>La polarite determine la solubilite (<em>similis similibus solvuntur</em> &mdash; le semblable dissout le semblable) et les interactions intermoleculaires.</p>

        <h3>Liaisons en chimie du solide</h3>
        <p>Dans les materiaux solides, la nature des liaisons determine entierement les proprietes macroscopiques :</p>
        <ul>
          <li><strong>Solides ioniques</strong> (NaCl, CaF&sub2;) : hauts points de fusion, durs mais fragiles, conducteurs en solution ou fondu, isolants a l'etat solide</li>
          <li><strong>Solides covalents reticules</strong> (diamant, SiO&sub2;) : tres durs, points de fusion tres eleves, mauvais conducteurs. Le diamant (toutes liaisons C-C covalentes) est le materiau naturel le plus dur.</li>
          <li><strong>Solides moleculaires</strong> (glace, naphtalene) : tenus par des forces de Van der Waals ou des liaisons H faibles &mdash; fondent facilement, peu solubles dans l'eau (sauf si polaires)</li>
          <li><strong>Metaux</strong> (Fe, Cu, Al) : bons conducteurs, malleables, brillants &mdash; la mer d'electrons absorbe les chocs mecaniques (ductilite) et transporte la chaleur et l'electricite</li>
        </ul>

        <h3>Resonance et delocalisations electroniques</h3>
        <p>Certaines molecules ne peuvent pas etre decrites par un seul schema de Lewis. Le <strong>benzene</strong> (C&sub6;H&sub6;) en est l'exemple classique : les 6 electrons &pi; sont delocalises sur le cycle entier, formant un nuage electronique au-dessus et en dessous du plan. On represente cela par deux structures de resonance ou un cercle dans le cycle.</p>
        <ul>
          <li>Les liaisons C-C du benzene ont toutes la meme longueur (139 pm) &mdash; intermediaire entre simple (154 pm) et double (134 pm)</li>
          <li>L'ion nitrate NO&sub3;&minus; a 3 liaisons equivalentes (delocalisees) : une charge negative est repartie sur 3 oxygenes</li>
          <li>Le CO&sub3;&sup2;&minus; (carbonate) a 3 structures de resonance equivalentes avec une charge -2/3 sur chaque oxygene</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Aromaticite :</strong> Un cycle est aromatique s'il satisfait la regle de Huckel : 4n+2 electrons &pi; (n = 0, 1, 2...). Benzene (6 e&minus; &pi;, n=1), naphtalene (10 e&minus; &pi;, n=2), cyclopentadienyle anion (6 e&minus; &pi;). L'aromaticite confere une stabilite exceptionnelle.</p>
        </div>

        <h3>Applications : materiaux et pharmacologie</h3>
        <p>La comprehension des liaisons chimiques est la base de la conception de materiaux et de medicaments :</p>
        <ul>
          <li><strong>Polymeres :</strong> le polyethylene (chaine de C-C covalentes) est souple et isolant ; le nylon exploite des liaisons amide ; le kevlar utilise des liaisons hydrogene entre chaines rigides pour sa resistance</li>
          <li><strong>Pharmacologie :</strong> les medicaments se lient a leurs recepteurs par des interactions specifiques (liaisons H, interactions hydrophobes, ioniques). La morphine se lie aux recepteurs opiacides par 3 liaisons H et des interactions aromatiques.</li>
          <li><strong>Nanotechnologie :</strong> les liaisons covalentes dans les nanotubes de carbone (graphene enroule) donnent une resistance mecanique 100x superieure a l'acier</li>
          <li><strong>ADN :</strong> la double helice est maintenue par des liaisons hydrogene (A-T : 2 liaisons H ; G-C : 3 liaisons H) &mdash; assez fortes pour la stabilite, assez faibles pour la replication</li>
        </ul>
"""

old_liaisons = pages['generale/liaisons']['content']
marker = '      </div>\n    </section>\n    <section class="content-section" id="quiz">'
if marker in old_liaisons:
    new_liaisons = old_liaisons.replace(marker, liaisons_extra + '\n      </div>\n    </section>\n    <section class="content-section" id="quiz">', 1)
    pages['generale/liaisons']['content'] = new_liaisons
    print(f"generale/liaisons: {len(old_liaisons)} -> {len(new_liaisons)} chars")
else:
    print("MARKER NOT FOUND for liaisons")
    idx = old_liaisons.find('id="quiz"')
    print(repr(old_liaisons[idx-200:idx+50]))

# ============================================================
# generale/stoechiometrie - add more content
# ============================================================
stoech_extra = """
        <h3>Rendement et purification</h3>
        <p>En pratique, la quantite de produit effectivement obtenue est presque toujours inferieure a la quantite theorique calculee. Le <strong>rendement</strong> (ou taux de transformation) est :</p>
        <div class="highlight-box">
          <p><strong>Rendement (%) = (masse obtenue / masse theorique) x 100</strong>. Un rendement de 100 % est ideal ; en laboratoire 70-90 % est correct ; en industrie, on optimise pour des rendements >95 % pour des raisons economiques.</p>
        </div>
        <p>Les pertes sont dues a : des reactions secondaires, des pertes lors des transferts, un equilibre chimique incomplet, ou une purification. En synthese organique, le <strong>rendement global</strong> d'une synthese en plusieurs etapes est le produit des rendements individuels : trois etapes a 80 % donnent 80%³ = 51 % de rendement global.</p>

        <h3>Concentrations et solutions</h3>
        <p>La stoechiometrie s'applique aussi aux reactions en solution. Plusieurs expressions de concentration sont utilisees :</p>
        <ul>
          <li><strong>Concentration molaire (molarite, M ou mol/L) :</strong> c = n/V. C'est la plus courante. Exemple : une solution HCl 0,1 M contient 0,1 mol de HCl par litre.</li>
          <li><strong>Titre massique (g/L) :</strong> t = m/V = c x M<sub>molaire</sub></li>
          <li><strong>Fraction molaire (x) :</strong> x<sub>A</sub> = n<sub>A</sub> / n<sub>total</sub>. Utilisee en thermodynamique des melanges.</li>
          <li><strong>Pourcentage massique :</strong> % m/m = (m<sub>solute</sub>/m<sub>solution</sub>) x 100</li>
        </ul>
        <p>Pour les reactions en solution : n = c x V. Le calcul stoechiometrique se fait de la meme maniere qu'avec des masses solides.</p>

        <h3>Calcul des volumes de gaz (conditions normales)</h3>
        <p>Pour les gaz, la loi des gaz parfaits relie quantite, pression, volume et temperature : <strong>PV = nRT</strong> (R = 8,314 J/mol/K). Aux conditions normales de temperature et pression (0 °C, 1 atm = 101,325 kPa), 1 mole de gaz parfait occupe <strong>22,4 L</strong> (volume molaire normal).</p>
        <ul>
          <li>A 25 °C (298 K) et 1 atm : V<sub>m</sub> = RT/P = 24,5 L/mol</li>
          <li><strong>Exemple :</strong> Combien de litres de CO&sub2; produit la combustion de 100 g de propane C&sub3;H&sub8; a 25 °C, 1 atm ?</li>
          <li>C&sub3;H&sub8; + 5O&sub2; &rarr; 3CO&sub2; + 4H&sub2;O</li>
          <li>n(C&sub3;H&sub8;) = 100/44 = 2,27 mol &rarr; n(CO&sub2;) = 3 x 2,27 = 6,82 mol &rarr; V = 6,82 x 24,5 = 167 L</li>
        </ul>

        <h3>Analyse et formules chimiques</h3>
        <p>La stoechiometrie permet de determiner la composition d'un compose inconnu :</p>
        <ul>
          <li><strong>Formule empirique :</strong> rapport le plus simple des atomes. On part de pourcentages massiques : diviser par la masse molaire de chaque element pour obtenir les moles, puis diviser par la plus petite valeur.</li>
          <li><strong>Formule moleculaire :</strong> multiple entier de la formule empirique. On a besoin de la masse molaire (determinee par spectrometrie de masse ou par cryoscopie).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Exemple :</strong> Un compose contient 40,0 % C, 6,7 % H, 53,3 % O. Moles : C = 40,0/12 = 3,33 ; H = 6,7/1 = 6,7 ; O = 53,3/16 = 3,33. Rapport : 1 : 2 : 1 &rarr; formule empirique CH&sub2;O (glucose, formaldehyde, acide acetique ont tous cette formule empirique).</p>
        </div>

        <h3>Titrage et analyse volumetrique</h3>
        <p>Le <strong>titrage</strong> est une technique experimentale qui utilise la stoechiometrie pour determiner la concentration d'une espece inconnue (analyte). On ajoute une solution de concentration connue (titrant) jusqu'au point d'equivalence :</p>
        <ul>
          <li><strong>Titrage acide-base :</strong> HCl + NaOH &rarr; NaCl + H&sub2;O. A l'equivalence : n(HCl) = n(NaOH), soit c&sub1;V&sub1; = c&sub2;V&sub2;.</li>
          <li><strong>Titrage d'oxydo-reduction :</strong> permanganate de potassium (KMnO&sub4;) oxyde le fer(II) en fer(III). Le point d'equivalence est detecte par la persistance de la couleur violette.</li>
          <li><strong>Indicateurs :</strong> phenomenolphtaleine (incolore en acide, rose en base), bleu de bromothymol, ou pH-metre electronique pour plus de precision.</li>
        </ul>
        <p>Le titrage est la base de nombreuses analyses industrielles et pharmaceutiques : dosage de l'alcool dans le vin, controle de la purete des medicaments, suivi de la qualite de l'eau.</p>
"""

old_stoech = pages['generale/stoechiometrie']['content']
# Try to find marker in stoechiometrie
marker3 = '      </div>\n    </section>\n    <section class="content-section" id="quiz">'
if marker3 in old_stoech:
    new_stoech = old_stoech.replace(marker3, stoech_extra + '\n      </div>\n    </section>\n    <section class="content-section" id="quiz">', 1)
    pages['generale/stoechiometrie']['content'] = new_stoech
    print(f"generale/stoechiometrie: {len(old_stoech)} -> {len(new_stoech)} chars")
else:
    # try another pattern
    marker3b = '    </section>\n\n    <section class="content-section" id="quiz">'
    if marker3b in old_stoech:
        new_stoech = old_stoech.replace(
            '      </div>\n    </section>\n\n    <section class="content-section" id="quiz">',
            stoech_extra + '\n      </div>\n    </section>\n\n    <section class="content-section" id="quiz">',
            1
        )
        pages['generale/stoechiometrie']['content'] = new_stoech
        print(f"generale/stoechiometrie: {len(old_stoech)} -> {len(new_stoech)} chars")
    else:
        print("MARKER NOT FOUND for stoechiometrie")
        idx = old_stoech.find('id="quiz"')
        print(repr(old_stoech[idx-300:idx+50]))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Part 2 done.")
