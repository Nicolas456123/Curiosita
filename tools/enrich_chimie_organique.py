import json, re

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ============================================================
# organique/fonctions - add more content
# ============================================================
fonctions_extra = """
        <h3>Reactions d'esterification et de saponification</h3>
        <p>L'<strong>esterification</strong> est la reaction entre un acide carboxylique et un alcool pour former un ester et de l'eau. C'est une reaction lente, reversible (equilibree) et necessitant un catalyseur acide :</p>
        <div class="highlight-box">
          <p><strong>R-COOH + R'-OH &lt;=&gt; R-COO-R' + H&sub2;O</strong> (catalyse par H&sub2;SO&sub4; ou HCl). La constante d'equilibre est souvent voisine de 4 pour les alcools primaires. On peut deplacer l'equilibre en eliminant l'eau ou en utilisant un exces de reactif.</p>
        </div>
        <p>La <strong>saponification</strong> est l'hydrolyse d'un ester en base forte (NaOH) de maniere irreversible, produisant un carboxylate de sodium (savon) et un alcool. Base industrielle de la fabrication du savon a partir de graisses + NaOH.</p>

        <h3>Reactions d'addition sur les carbonyles</h3>
        <p>Le groupe carbonyle C=O est polaire (O plus electronegative), ce qui le rend electrophile. Il subit des reactions d'addition nucleophile :</p>
        <ul>
          <li><strong>Addition d'alcool :</strong> aldehyde + alcool &rarr; hemiacetal, puis acetal (+ alcool, perte d'eau). Les sucres cycliques sont des hemiacetals intramoleculaires.</li>
          <li><strong>Reduction :</strong> aldehyde &rarr; alcool primaire (NaBH&sub4; ou LiAlH&sub4;) ; cetone &rarr; alcool secondaire.</li>
          <li><strong>Condensation aldolique :</strong> formation de liaison C-C entre deux carbonyles en milieu basique. Fondamentale en biosynthese (aldolase dans la glycolyse).</li>
        </ul>

        <h3>Amines : bases faibles et applications pharmaceutiques</h3>
        <p>Les amines sont des bases faibles car le doublet non liant de N se protonise en milieu aqueux. Les amines aliphatiques (pKb ~ 4) sont plus basiques que les amines aromatiques (pKb ~ 9, doublet delocalis dans le cycle) :</p>
        <ul>
          <li>Les acides amines ont a la fois une amine et un acide carboxylique : ils existent sous forme zwitterionique a leur point isoelectrique.</li>
          <li>La majorite des medicaments contient une amine (morphine, metformine, lidocaine). La protonation en milieu acide controle leur absorption.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La regle de Lipinski (drug-like) :</strong> Un medicament oral doit idealement avoir : MW &lt; 500 g/mol, log P &lt; 5, pas plus de 5 donneurs de liaison H (OH, NH), pas plus de 10 accepteurs (O, N). Ces criteres guident le design de nouveaux medicaments.</p>
        </div>

        <h3>Nomenclature systematique IUPAC des fonctions</h3>
        <p>La nomenclature IUPAC donne la priorite aux fonctions de la facon suivante (du suffixe prioritaire au moins prioritaire, qui devient prefixe) :</p>
        <ul>
          <li>Acide carboxylique (&mdash;oique) &gt; Ester (&mdash;oate) &gt; Amide (&mdash;amide) &gt; Aldehyde (&mdash;al) &gt; Cetone (&mdash;one) &gt; Alcool (&mdash;ol) &gt; Amine (&mdash;amine)</li>
        </ul>
        <p>Exemple : CH&sub3;-CH(OH)-COOH = acide 2-hydroxypropanoique (acide lactique). La fonction acide donne le suffixe ; OH est cite comme prefixe &laquo; hydroxy- &raquo; avec le locant 2.</p>
"""

old_fonctions = pages['organique/fonctions']['content']
# Insert before course-nav div
marker_fn = '\n\n    <div class="course-nav">'
if marker_fn in old_fonctions:
    new_fonctions = old_fonctions.replace(
        '\n      </div>\n    </section>\n\n    <div class="course-nav">',
        fonctions_extra + '\n      </div>\n    </section>\n\n    <div class="course-nav">',
        1
    )
    pages['organique/fonctions']['content'] = new_fonctions
    print(f"organique/fonctions: {len(old_fonctions)} -> {len(new_fonctions)} chars")
else:
    print("MARKER NOT FOUND for fonctions")
    print(repr(old_fonctions[-300:]))

# ============================================================
# organique/hydrocarbures - add more content (was 14646)
# ============================================================
hydro_extra = """
        <h3>Reactions caracteristiques des hydrocarbures</h3>
        <p>Chaque famille reagit selon des mecanismes previsibles :</p>
        <ul>
          <li><strong>Alcanes &mdash; Substitution radicalaire (SR) :</strong> sous UV ou a haute temperature, les halogenes (Cl&sub2;, Br&sub2;) substituent un H par un halogene. Initiation : Cl&sub2; &rarr; 2 Cl&bull; (radicaux). Propagation : CH&sub4; + Cl&bull; &rarr; CH&sub3;&bull; + HCl, puis CH&sub3;&bull; + Cl&sub2; &rarr; CH&sub3;Cl + Cl&bull;. Melange de produits (peu selectif).</li>
          <li><strong>Alcenes &mdash; Addition electrophile (AE) :</strong> les halogenes (Br&sub2;) ou HX s'ajoutent sur la double liaison. Regle de Markovnikov : l'hydrogene va sur le carbone le plus hydrogene. Br&sub2;/CCl&sub4; : test diagnostique (decoloration du brome brun = alcene ou alcyne present).</li>
          <li><strong>Alcynes &mdash; Double addition :</strong> peuvent subir deux additions successives de HX ou X&sub2; pour donner d'abord un vinyle halogenure, puis un gem-dihalogenure.</li>
          <li><strong>Aromatiques &mdash; Substitution electrophile aromatique (SEAr) :</strong> nitration (HNO&sub3;/H&sub2;SO&sub4; &rarr; ArNO&sub2;), halogenation (Cl&sub2;/FeCl&sub3; &rarr; ArCl), sulfonation, alkylation de Friedel-Crafts. Mecanisme en deux etapes : attaque de l'electrophile E+, puis perte de H+ pour restaurer l'aromaticite.</li>
        </ul>

        <h3>Orientation en substitution aromatique electrophile</h3>
        <p>Le substituant deja present sur le benzene oriente le suivant :</p>
        <ul>
          <li><strong>Groupes activants, orienteurs o/p :</strong> OH, NH&sub2;, OCH&sub3;, R. Ils donnent des electrons au cycle par effet mesomere (+M). La substitution se fait en ortho et para (positions les plus enrichies).</li>
          <li><strong>Groupes desactivants, orienteurs m :</strong> NO&sub2;, COOH, CHO, CN, SO&sub3;H. Retirent des electrons (-I et -M). La substitution se fait en meta (la moins appauvrie).</li>
          <li><strong>Groupes desactivants, orienteurs o/p :</strong> halogenes (Cl, Br). Desactivants par -I mais orienteurs o/p par +M (doublet de l'halogene).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Exemple industriel :</strong> La synthese du TNT (trinitrotoluene) nitore le toluene (groupe methyle activant) en 3 etapes successives de nitration. Le methyle oriente les groupes NO&sub2; en positions 2, 4, 6 (ortho et para). Base de la chimie des explosifs et des colorants.</p>
        </div>

        <h3>Petrochimie et origine des hydrocarbures</h3>
        <p>Le petrole brut est un melange complexe d'hydrocarbures forme sur des millions d'annees par la transformation thermique et biologique de matieres organiques marines :</p>
        <ul>
          <li><strong>Distillation fractionnee :</strong> separation par point d'ebullition. Gaz de raffinerie (C1-C4, &lt; 40 &#176;C), essence (C5-C12, 40&mdash;180 &#176;C), kerosene (C11-C16, 150&mdash;250 &#176;C), gazole (C15-C20, 250&mdash;350 &#176;C), huiles lourdes et bitume (C20+)</li>
          <li><strong>Craquage catalytique :</strong> chaine longues &rarr; chaines courtes pour augmenter la production d'essence</li>
          <li><strong>Reformage catalytique :</strong> conversion des alcanes en aromatiques (benzene, toluene) pour augmenter l'indice d'octane</li>
          <li><strong>Indice d'octane :</strong> mesure la resistance au cliquetis. Isooctane (2,2,4-trimethylpentane) = 100 ; n-heptane = 0. Les ramifications et les aromatiques ont un indice eleve.</li>
        </ul>

        <h3>Hydrocarbures et transition energetique</h3>
        <p>La combustion des hydrocarbures (CₓHᵧ + O&sub2; &rarr; CO&sub2; + H&sub2;O) fournit l'essentiel de l'energie mondiale mais produit du CO&sub2;. Des alternatives sont en developpement :</p>
        <ul>
          <li><strong>Gaz naturel (methane, CH&sub4;) :</strong> le moins emetteur des combustibles fossiles (rapport H/C eleve). Transition vers les energies renouvelables.</li>
          <li><strong>E-fuels :</strong> synthese d'hydrocarbures a partir de CO&sub2; capture et H&sub2; vert (procede Fischer-Tropsch modifie). Carburants de synthese neutres en carbone.</li>
          <li><strong>Hydrogene vert :</strong> electrolyseur &agrave; partir d'electricite renouvelable. Utilisation directe en pile a combustible ou reconversion en NH&sub3; (Haber-Bosch).</li>
          <li><strong>Biocarburants :</strong> ethanol (fermentation de la canne a sucre), biodiesel (transesterification d'huiles vegetales). Debat sur la concurrence avec l'usage alimentaire.</li>
        </ul>
"""

old_hydro = pages['organique/hydrocarbures']['content']
if '\n\n    <div class="course-nav">' in old_hydro:
    new_hydro = old_hydro.replace(
        '\n      </div>\n    </section>\n\n    <div class="course-nav">',
        hydro_extra + '\n      </div>\n    </section>\n\n    <div class="course-nav">',
        1
    )
    pages['organique/hydrocarbures']['content'] = new_hydro
    print(f"organique/hydrocarbures: {len(old_hydro)} -> {len(new_hydro)} chars")
else:
    print("MARKER NOT FOUND for hydrocarbures")
    print(repr(old_hydro[-400:]))

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Organique enrichment done.")
