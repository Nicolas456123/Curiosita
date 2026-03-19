import json, sys, re

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# generale/atome - add more content to contenu section
# ============================================================
atome_extra = """
        <h3>Taille et masse de l'atome</h3>
        <p>L'atome est d'une petitesse remarquable. Le rayon d'un atome d'hydrogene est d'environ <strong>53 pm</strong> (picometres, soit 53 x 10<sup>-12</sup> m). Si l'on agrandissait un atome a la taille d'un stade de football, le noyau serait grand comme une bille de 1 mm posee au centre. L'essentiel de l'atome est vide.</p>
        <ul>
          <li>Taille typique d'un atome : 0,1 a 0,5 nm</li>
          <li>Taille du noyau : 1 a 10 fm (10<sup>-15</sup> m), soit 100 000 fois plus petit</li>
          <li>Masse d'un proton : 1,6726 x 10<sup>-27</sup> kg</li>
          <li>Masse d'un electron : 9,109 x 10<sup>-31</sup> kg (1836 fois plus legere)</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Densite du noyau :</strong> Le noyau concentre presque toute la masse dans un volume infime. La densite nucleaire est d'environ 2 x 10<sup>17</sup> kg/m&#179; &mdash; une cuillere a cafe de matiere nucleaire peserait un milliard de tonnes.</p>
        </div>

        <h3>Energie d'ionisation et affinite electronique</h3>
        <p>L'<strong>energie d'ionisation</strong> (Ei) est l'energie minimale pour arracher un electron a un atome gazeux a l'etat fondamental. Elle augmente vers le haut et vers la droite du tableau periodique :</p>
        <ul>
          <li>H : 1312 kJ/mol</li>
          <li>He : 2372 kJ/mol (le plus eleve &mdash; couche complete)</li>
          <li>Li : 520 kJ/mol (1 seul electron de valence facilement perdu)</li>
          <li>F : 1681 kJ/mol</li>
        </ul>
        <p>L'<strong>affinite electronique</strong> est l'energie liberee quand un atome capte un electron. Les halogenes ont les affinites electroniques les plus elevees, d'ou leur forte tendance a former des anions.</p>
        <div class="highlight-box">
          <p><strong>Successions d'ionisations :</strong> L'energie d'ionisation successive augmente considerablement apres la couche de valence. Pour le sodium (Na) : Ei1 = 496 kJ/mol (electron 3s), Ei2 = 4562 kJ/mol (electron 2p &mdash; couche complete). Ce saut enorme confirme la structure en couches.</p>
        </div>

        <h3>Spectres atomiques et niveaux d'energie</h3>
        <p>Quand un atome absorbe de l'energie (lumiere, chaleur), ses electrons montent vers des niveaux d'energie superieurs (<em>etat excite</em>). En revenant a leur niveau fondamental, ils emettent des photons de longueurs d'onde precises &mdash; c'est le <strong>spectre d'emission</strong>, signature unique de chaque element.</p>
        <p>Pour l'hydrogene, les transitions vers le niveau n=2 donnent la <strong>serie de Balmer</strong> (lumiere visible). La raie rouge (656 nm) correspond a la transition n=3 vers n=2, la verte-bleue (486 nm) a n=4 vers n=2.</p>
        <div class="highlight-box">
          <p><strong>Energie d'un niveau de Bohr :</strong> E<sub>n</sub> = -13,6 / n&sup2; eV. La raie rouge de l'hydrogene (656 nm) correspond a la transition n=3 &rarr; n=2 : &Delta;E = 13,6 x (1/4 - 1/9) = 1,89 eV = hc/&lambda;, d'ou &lambda; = 656 nm.</p>
        </div>
        <p>Cette propriete est exploitee en <strong>spectroscopie</strong> : chaque element possede un spectre caracteristique qui permet de l'identifier, meme a des distances astronomiques. L'analyse de la lumiere des etoiles revele leur composition chimique.</p>

        <h3>L'atome dans l'univers : abondances cosmiques</h3>
        <p>Les atomes ne sont pas egalement abondants dans l'univers. L'<strong>hydrogene</strong> (Z=1) represente ~75 % de la masse de l'univers observable, l'<strong>helium</strong> (Z=2) environ 24 %. Tous les elements plus lourds ont ete synthetises dans les etoiles ou lors de collisions d'etoiles a neutrons :</p>
        <ul>
          <li><strong>Fusion stellaire :</strong> H &rarr; He (sequence principale), puis He &rarr; C, N, O dans les etoiles massives</li>
          <li><strong>Explosion de supernova :</strong> synthese des elements jusqu'au fer (Z=26) et au-dela</li>
          <li><strong>Collisions d'etoiles a neutrons :</strong> synthese des elements lourds (or, platine, uranium) par capture rapide de neutrons</li>
        </ul>
        <p>Sur Terre, les elements les plus abondants dans la croute terrestre sont l'oxygene (46 %), le silicium (28 %), l'aluminium (8 %) et le fer (5 %). Le corps humain est compose principalement d'oxygene (65 %), carbone (18 %), hydrogene (10 %) et azote (3 %).</p>

        <h3>Applications modernes : de l'atome aux technologies</h3>
        <p>La comprehension de la structure atomique a revolutionne la technologie moderne :</p>
        <ul>
          <li><strong>Energie nucleaire :</strong> fission de l'U-235 libere ~200 MeV par atome, soit 50 millions de fois plus que la combustion du charbon</li>
          <li><strong>IRM medicale :</strong> exploite le spin des noyaux d'hydrogene dans un champ magnetique (resonance magnetique nucleaire)</li>
          <li><strong>Microscopie a effet tunnel (STM) :</strong> permet d'imager des atomes individuels. En 1989, des chercheurs d'IBM ont ecrit &laquo;IBM&raquo; en deplacant des atomes de xenon.</li>
          <li><strong>Datation au carbone-14 :</strong> utilise la desintegration radioactive (T&frac12; = 5730 ans) pour dater les matieres organiques jusqu'a ~50 000 ans</li>
          <li><strong>Semi-conducteurs :</strong> le dopage du silicium (ajout d'atomes de P ou B en proportion d'un pour un million) controle ses proprietes electroniques</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Quantique et informatique :</strong> Les ordinateurs quantiques exploitent les proprietes quantiques des atomes (superposition d'etats, intrication). Un qubit encode sur un atome peut etre dans une superposition de 0 et 1 simultanement &mdash; une revolution en calcul en cours de deploiement.</p>
        </div>
"""

old_atome = pages['generale/atome']['content']
marker = '      </div>\n    </section>\n\n    <section class="content-section" id="quiz">'
if marker in old_atome:
    new_atome = old_atome.replace(marker, atome_extra + '\n      </div>\n    </section>\n\n    <section class="content-section" id="quiz">', 1)
    pages['generale/atome']['content'] = new_atome
    print(f"generale/atome: {len(old_atome)} -> {len(new_atome)} chars")
else:
    print("MARKER NOT FOUND for atome, trying alternative...")
    print(repr(old_atome[-500:]))

# ============================================================
# generale/tableau-periodique - add more content
# ============================================================
tableau_extra = """
        <h3>Histoire du tableau periodique</h3>
        <p>La quete d'ordre parmi les elements a occupe les chimistes du XIXe siecle. En 1864, John Newlands observe sa <em>loi des octaves</em> : les proprietes se repetent tous les 8 elements. En 1869, <strong>Dmitri Mendeleiev</strong> (Russie) et Julius Lothar Meyer (Allemagne) publient independamment un classement par masse atomique croissante. Le genie de Mendeleiev fut de laisser des cases vides pour des elements alors inconnus :</p>
        <ul>
          <li><strong>Eka-aluminium</strong> &rarr; Gallium (Ga), decouvert en 1875 : Mendeleiev avait predit densite ~5,9, realite 5,91 g/cm&#179;</li>
          <li><strong>Eka-bore</strong> &rarr; Scandium (Sc), 1879 : masse molaire predite 44, reelle 44,96 g/mol</li>
          <li><strong>Eka-silicium</strong> &rarr; Germanium (Ge), 1886 : proprietes predites avec une precision remarquable</li>
        </ul>
        <p>En 1913, Henry Moseley montre que l'ordre naturel est le <strong>numero atomique Z</strong> (nombre de protons), non la masse &mdash; corrigeant quelques anomalies (Ar/K, Co/Ni, Te/I).</p>

        <h3>Familles chimiques remarquables</h3>
        <p>Chaque colonne (groupe) du tableau constitue une famille d'elements aux comportements chimiques proches :</p>
        <ul>
          <li><strong>Metaux alcalins (Gr. 1) :</strong> Li, Na, K, Rb, Cs, Fr &mdash; reagissent violemment avec l'eau (2Na + 2H&sub2;O &rarr; 2NaOH + H&sub2;). Reactivite croissante en descendant : le cesium s'enflamme spontanement a l'air humide.</li>
          <li><strong>Alcalino-terreux (Gr. 2) :</strong> Be, Mg, Ca, Sr, Ba &mdash; moins reactifs que les alcalins. Le calcium forme la craie (CaCO&sub3;) et les os (Ca&sub3;(PO&sub4;)&sub2;).</li>
          <li><strong>Halogenes (Gr. 17) :</strong> F&sub2; (gaz jaune pale, tres toxique), Cl&sub2; (gaz vert-jaune, desinfectant), Br&sub2; (liquide rouge-brun), I&sub2; (solide noir-violet). Tous forment des acides forts avec H.</li>
          <li><strong>Gaz nobles (Gr. 18) :</strong> He (ballons, cryogenie), Ne (enseignes lumineuses), Ar (soudage inerte), Kr et Xe (ampoules haute performance). La couche de valence complete les rend chimiquement inertes.</li>
          <li><strong>Metaux de transition :</strong> Fe, Cu, Ni, Cr, Mn &mdash; catalyseurs essentiels, alliages, pigments. Forment des ions colores (Cu&sup2;+ bleu, Fe&sup3;+ orange, Cr&sup3;+ vert).</li>
        </ul>

        <h3>Charge nucleaire effective et tendances detaillees</h3>
        <p>La <strong>charge nucleaire effective</strong> (Z*) est la charge ressentie par un electron de valence, apres effet ecran des electrons interieurs. Z* = Z - &sigma; (&sigma; = constante d'ecran de Slater). Cette grandeur explique les tendances :</p>
        <div class="highlight-box">
          <p><strong>Exemple :</strong> Na (Z=11) : electron 3s avec Z* &asymp; 11 - 10 = 1. Cl (Z=17) : electrons 3p avec Z* &asymp; 17 - 10 = 7. D'ou le chlore est bien plus electronegative, de rayon atomique plus petit, et d'energie d'ionisation plus elevee que le sodium dans la meme periode.</p>
        </div>

        <h3>Elements synthetiques et superheavy elements</h3>
        <p>Les elements de Z=93 a Z=118 sont tous <strong>synthetiques</strong>, produits en laboratoire par bombardement de noyaux lourds avec des ions acceleres. Leur duree de vie est tres courte :</p>
        <ul>
          <li><strong>Plutonium (Z=94) :</strong> produit dans les reacteurs nucleaires a partir de l'U-238. Le Pu-239 (T&frac12; = 24 110 ans) est utilise comme combustible nucleaire.</li>
          <li><strong>Curium (Z=96) :</strong> nomme en l'honneur de Marie et Pierre Curie. Utilise comme source d'energie dans les sondes spatiales (Curiosity sur Mars).</li>
          <li><strong>Oganesson (Z=118) :</strong> element le plus lourd connu, nomme d'apres le physicien Yuri Oganessian. Decouvert en 2002, seulement ~5 atomes produits, T&frac12; ~ 0,89 ms.</li>
        </ul>

        <h3>Isotopes radioactifs et applications medicales</h3>
        <p>Sur les 118 elements, seuls 80 ont au moins un isotope stable. La ceinture de stabilite suit N &asymp; Z pour les elements legers, puis N &gt; Z pour les plus lourds. Les isotopes radioactifs ont de nombreuses applications :</p>
        <ul>
          <li><strong>Medecine nucleaire :</strong> Tc-99m (rayons &gamma;, T&frac12; = 6h) pour l'imagerie scintigraphique ; I-131 pour traiter le cancer de la thyroide ; F-18 en tomographie par emission de positons (TEP)</li>
          <li><strong>Datation scientifique :</strong> C-14 (T&frac12; = 5730 ans) pour les matieres organiques ; U-238/Pb-206 pour les roches (milliards d'annees)</li>
          <li><strong>Industrie :</strong> Am-241 dans les detecteurs de fumee ; Co-60 pour la sterilisation alimentaire par rayonnement &gamma;</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La puissance predictive du tableau :</strong> En 1962, Neil Bartlett synthetise XeF&sub2; en exploitant les tendances periodiques, prouvant que les gaz nobles peuvent reagir. Le tableau periodique reste un outil predictif d'une puissance inegalee en sciences.</p>
        </div>
"""

old_tableau = pages['generale/tableau-periodique']['content']
marker2 = '      </div>\n    </section>\n    <section class="content-section" id="quiz">'
if marker2 in old_tableau:
    new_tableau = old_tableau.replace(marker2, tableau_extra + '\n      </div>\n    </section>\n    <section class="content-section" id="quiz">', 1)
    pages['generale/tableau-periodique']['content'] = new_tableau
    print(f"generale/tableau-periodique: {len(old_tableau)} -> {len(new_tableau)} chars")
else:
    print("MARKER NOT FOUND for tableau, trying to find it...")
    idx = old_tableau.find('id="quiz"')
    print(repr(old_tableau[idx-200:idx+50]))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Part 1 done.")
