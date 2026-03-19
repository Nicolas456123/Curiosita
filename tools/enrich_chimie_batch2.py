#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('assets/content/chimie.json', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

enrichments = {}

enrichments['analytique/electrochimie'] = """
<h3>Piles et accumulateurs</h3>
<p class="resume-text">Les piles galvaniques convertissent l'énergie chimique en énergie électrique via des réactions d'oxydoréduction spontanées. Dans une pile Daniell, le zinc (anode) s'oxyde tandis que le cuivre (cathode) se réduit, générant une différence de potentiel de 1,1 V. La force électromotrice (f.é.m.) dépend des couples rédox mis en jeu et des concentrations des espèces selon l'équation de Nernst.</p>
<div class="highlight-box">
<p><strong>Équation de Nernst :</strong> E = E° - (RT/nF)·ln(Q) où E° est le potentiel standard, R la constante des gaz, T la température, n le nombre d'électrons échangés, F la constante de Faraday, et Q le quotient réactionnel. À 25°C : E = E° - (0,0592/n)·log(Q).</p>
</div>
<h3>Électrolyse et applications industrielles</h3>
<p class="resume-text">L'électrolyse force une réaction non spontanée en imposant un courant électrique externe. La loi de Faraday établit que la masse déposée m = (M·I·t)/(n·F) où M est la masse molaire, I le courant, t le temps. Applications : raffinage de l'aluminium (procédé Hall-Héroult), galvanoplastie, production de chlore et soude par électrolyse du chlorure de sodium, rechargement des batteries lithium-ion.</p>
<div class="highlight-box">
<p><strong>Surtension :</strong> En pratique, la tension appliquée lors d'une électrolyse dépasse le minimum théorique prévu par la thermodynamique. Cette surtension (ou overpotentiel) est due aux cinétiques d'électrode, à la résistance de l'électrolyte et aux phénomènes de diffusion. Elle est particulièrement élevée pour le dégagement d'hydrogène sur certaines électrodes.</p>
</div>
<h3>Corrosion et protection des métaux</h3>
<p class="resume-text">La corrosion est un processus électrochimique naturel qui dégrade les métaux. La rouille du fer implique une oxydation à l'anode (Fe → Fe²⁺ + 2e⁻) et une réduction de l'oxygène à la cathode. La protection cathodique, utilisée pour les pipelines et coques de navires, impose un courant ou connecte le métal à un métal sacrificiel (zinc, magnésium) qui s'oxyde préférentiellement.</p>
<div class="highlight-box">
<p><strong>Diagramme de Pourbaix :</strong> Représentation du domaine de stabilité des espèces d'un métal en fonction du potentiel E et du pH. Il délimite les zones de corrosion (dissolution), d'immunité (métal stable) et de passivation (formation d'un oxyde protecteur). Outil fondamental pour la prédiction du comportement des matériaux en milieu aqueux.</p>
</div>
"""

enrichments['analytique/chromatographie'] = """
<h3>Chromatographie en phase liquide (HPLC)</h3>
<p class="resume-text">La HPLC (High Performance Liquid Chromatography) utilise une pression élevée pour forcer le solvant à travers une colonne remplie de particules très fines (3-5 µm). La phase stationnaire peut être apolaire (C18 greffé sur silice) pour la chromatographie en phase inverse, ou polaire pour la phase normale. La détection se fait par UV-visible, fluorescence ou spectrométrie de masse. Applications pharmaceutiques, environnementales et alimentaires.</p>
<div class="highlight-box">
<p><strong>Paramètres de rétention :</strong> Le facteur de rétention k = (tR - t0)/t0 quantifie l'interaction soluté-phase stationnaire. La résolution Rs = 2(tR2 - tR1)/(wb1 + wb2) mesure la séparation entre deux pics. Pour Rs > 1,5, la séparation est considérée comme complète. L'efficacité d'une colonne s'exprime en nombre de plateaux théoriques N = 16(tR/wb)².</p>
</div>
<h3>Chromatographie en phase gazeuse (GC)</h3>
<p class="resume-text">La GC sépare des composés volatils en les entraînant par un gaz vecteur inerte (He, N₂, H₂) à travers une colonne capillaire longue (30-100 m) enroulée dans un four thermostaté. La programmation de température permet de séparer des mélanges complexes. Le détecteur à ionisation de flamme (FID) est très sensible aux hydrocarbures ; le détecteur à capture d'électrons (ECD) est sélectif aux halogènes. Couplage GC-MS pour l'identification structurale.</p>
<div class="highlight-box">
<p><strong>Équation de Van Deemter :</strong> H = A + B/u + Cu décrit la hauteur équivalente à un plateau théorique en fonction de la vitesse linéaire u du gaz vecteur. Le terme A (diffusion turbulente), B (diffusion longitudinale) et C (résistance au transfert de masse) ont chacun un régime d'influence optimal. Il existe une vitesse optimale minimisant H et maximisant l'efficacité.</p>
</div>
<h3>Électrophorèse capillaire et spectrométrie de masse couplée</h3>
<p class="resume-text">L'électrophorèse capillaire (CE) sépare les ions selon leur rapport charge/taille dans un champ électrique appliqué dans un capillaire de silice fondue. Le flux électroosmotique transporte tous les solutés vers la cathode, permettant la séparation simultanée de cations et d'anions. Le couplage avec la spectrométrie de masse (LC-MS/MS) offre identification et quantification simultanées, utilisé en protéomique, métabolomique et contrôle antidopage.</p>
<div class="highlight-box">
<p><strong>Sources d'ionisation LC-MS :</strong> L'electrospray (ESI) ionise doucement les grandes molécules polaires en solution. La photoionisation à pression atmosphérique (APPI) convient aux molécules apolaires. La chimie de surface DESI permet l'analyse directe de surfaces biologiques. L'ionisation MALDI est privilégiée pour la protéomique par sa capacité à ioniser des protéines entières avec précision.</p>
</div>
"""

enrichments['analytique/laboratoire'] = """
<h3>Métrologie et incertitudes de mesure</h3>
<p class="resume-text">Toute mesure en laboratoire comporte une incertitude qui doit être quantifiée et rapportée. L'incertitude-type u(x) provient des erreurs aléatoires (répétabilité) et systématiques (étalonnage, biais). L'incertitude combinée uc s'obtient par propagation quadratique : uc² = Σ(∂f/∂xi)²·u(xi)². Le résultat s'exprime comme x ± U à un niveau de confiance défini (généralement 95%, k=2).</p>
<div class="highlight-box">
<p><strong>Chiffres significatifs :</strong> Le nombre de chiffres significatifs reflète la précision de la mesure. 2,540 g (4 chiffres significatifs) est plus précis que 2,5 g (2 chiffres). Dans les calculs, le résultat ne peut avoir plus de chiffres significatifs que la mesure la moins précise. Pour une addition/soustraction, c'est le nombre de décimales qui limite ; pour une multiplication/division, c'est le nombre de chiffres significatifs.</p>
</div>
<h3>Techniques de séparation et purification</h3>
<p class="resume-text">La recristallisation exploite la différence de solubilité avec la température : on dissout le solide impur dans un solvant chaud, puis on refroidit lentement pour faire cristalliser le produit pur. La distillation fractionnée sépare des liquides miscibles selon leurs points d'ébullition. L'extraction liquide-liquide transfère un soluté entre deux phases non miscibles selon le coefficient de partage K = [A]org/[A]aq. La chromatographie sur colonne purifies les composés selon leur affinité pour la phase stationnaire.</p>
<div class="highlight-box">
<p><strong>Choix du solvant d'extraction :</strong> Un bon solvant d'extraction doit être immiscible avec l'eau, avoir un point d'ébullition bas (évaporation facile), dissoudre bien le produit cible (règle : semblable dissout semblable), être chimiquement inerte, peu toxique et économique. L'éther diéthylique, l'acétate d'éthyle et le dichlorométhane sont couramment utilisés, chacun avec ses avantages et inconvénients sécuritaires.</p>
</div>
<h3>Spectroscopie RMN et identification de structures</h3>
<p class="resume-text">La Résonance Magnétique Nucléaire (RMN) est l'outil principal d'élucidation structurale en chimie organique. Le déplacement chimique δ (en ppm) indique l'environnement électronique de chaque noyau (¹H, ¹³C, ¹⁵N, ³¹P). Le couplage spin-spin entre protons voisins crée des multiplets (règle n+1 : n voisins donnent n+1 raies). La constante de couplage J (Hz) informe sur la géométrie et la stéréochimie de la molécule.</p>
<div class="highlight-box">
<p><strong>Déplacements chimiques ¹H typiques :</strong> TMS (référence) : 0 ppm ; CH₃ aliphatique : 0,9 ppm ; CH₂ : 1,2 ppm ; CH en α d'un carbonyle : 2-3 ppm ; OCH₃ : 3,3 ppm ; vinylique : 5-6 ppm ; aromatique : 7-8 ppm ; aldéhyde : 9-10 ppm ; acide carboxylique : 11-12 ppm. Ces valeurs permettent une première identification fonctionnelle.</p>
</div>
"""

enrichments['analytique/analyses'] = """
<h3>Analyse quantitative par titrimétrie</h3>
<p class="resume-text">Les méthodes titriques permettent de déterminer la concentration d'un analyte par réaction stœchiométrique avec un réactif étalon. Le titrage acide-base suit l'évolution du pH, détecté par indicateur coloré ou pH-mètre. Le titrage complexométrique à l'EDTA dose les cations métalliques avec précision. Le titrage redox (permanganate, dichromate) exploite les variations de potentiel. Le titrage par précipitation (Volhard, Mohr) dose les halogénures.</p>
<div class="highlight-box">
<p><strong>Courbe de titrage et point d'équivalence :</strong> Le point d'équivalence correspond à l'égalité entre moles d'analyte et moles de titrant. Sur la courbe de titrage pH = f(V), il se traduit par un point d'inflexion. Le choix de l'indicateur doit être adapté : le rouge de méthyle vire à pH 4-6, la phénolphtaléine à pH 8-10. Pour un dosage précis, l'indicateur doit changer de couleur au voisinage du point d'équivalence.</p>
</div>
<h3>Méthodes séparatives et couplages analytiques</h3>
<p class="resume-text">L'analyse multi-composants exige souvent de séparer les espèces avant la détection. La HPLC couplée à la spectrométrie de masse (HPLC-MS) combine séparation chromatographique et identification par masse exacte. La GC-MS est standard pour les composés volatils. L'ICP-MS (plasma à couplage inductif - spectrométrie de masse) dose simultanément 70 éléments à des concentrations sub-nanogrammiques. Ces hyphenated techniques dominent les laboratoires d'analyse moderne.</p>
<div class="highlight-box">
<p><strong>Validation analytique :</strong> Une méthode analytique doit être validée selon plusieurs critères : la linéarité (corrélation dans la gamme de concentrations), la justesse (biais par rapport à une référence certifiée), la fidélité (répétabilité et reproductibilité), la limite de détection (LOD = 3σ/S) et la limite de quantification (LOQ = 10σ/S, où σ est le bruit de fond et S la sensibilité). La validation suit les guides ICH pour les médicaments.</p>
</div>
<h3>Analyse élémentaire et spectrométrie d'émission</h3>
<p class="resume-text">La spectrométrie d'émission atomique (ICP-OES) utilise un plasma d'argon à 7000-8000°C pour atomiser et exciter les échantillons. Chaque élément émet des longueurs d'onde caractéristiques détectées par un réseau de diffraction et un détecteur CCD. La spectrométrie d'absorption atomique (AAS) mesure l'absorption de la lumière d'une lampe à cathode creuse par les atomes en phase gazeuse. Ces techniques dosent les métaux dans les eaux, aliments et matériaux biologiques.</p>
<div class="highlight-box">
<p><strong>Analyse CHN :</strong> L'analyse élémentaire automatisée brûle complètement l'échantillon dans un flux d'oxygène pur. Les produits de combustion (CO₂, H₂O, N₂) sont séparés par chromatographie en phase gazeuse et quantifiés par catharomètre. Cette technique fournit les pourcentages massiques de C, H, N (et S) permettant de calculer la formule brute d'un composé inconnu et de vérifier la pureté d'un synthétisé.</p>
</div>
"""

enrichments['organique/hydrocarbures'] = """
<h3>Mécanismes de réaction des alcènes</h3>
<p class="resume-text">Les alcènes subissent des additions électrophiles sur leur double liaison C=C. L'hydrohalogénation suit la règle de Markovnikov : l'électrophile H⁺ s'additionne sur le carbone le plus substitué (moins riche en hydrogène), formant le carbocation le plus stable. L'hydratation acide-catalysée (H₂SO₄/H₂O) et l'addition d'halogènes (Br₂ dans CCl₄) suivent des mécanismes ioniques via des intermédiaires carbocation ou pont bromonium.</p>
<div class="highlight-box">
<p><strong>Stéréochimie des additions :</strong> L'addition de Br₂ via un ion bromonium conduit à une addition anti (trans) stéréospécifique : les deux atomes de brome se placent de part et d'autre du plan de la double liaison. L'hydrogénation catalytique (H₂/Pt) donne une addition syn. L'oxydation par OsO₄ produit un diol via un ester cyclique intermédiaire : addition syn de deux groupes OH. La distinction syn/anti est fondamentale en stéréochimie.</p>
</div>
<h3>Aromaticité et réaction de substitution électrophile aromatique</h3>
<p class="resume-text">Le benzène, archétype des aromatiques, possède 6 électrons π délocalisés satisfaisant la règle de Hückel (4n+2, n=1). Sa stabilité exceptionnelle (énergie de résonance ~150 kJ/mol) le rend résistant à l'addition mais réactif par substitution électrophile aromatique (SEAr). La nitration (HNO₃/H₂SO₄ concentrés) forme le nitrobenzène via le cation nitronium NO₂⁺. L'halogénation (Cl₂/AlCl₃) et l'alkylation de Friedel-Crafts (R-Cl/AlCl₃) suivent le même mécanisme général.</p>
<div class="highlight-box">
<p><strong>Effets des substituants :</strong> Les substituants existants orientent et activent/désactivent la SEAr. Les groupes donneurs d'électrons (OH, NH₂, OCH₃) activent le noyau et dirigent en ortho/para. Les groupes attracteurs (NO₂, COOH, CN) désactivent et dirigent en méta. Le mécanisme implique un complexe σ (ion arénonium) comme intermédiaire, dont la stabilité est maximisée par l'orientation ortho/para pour les groupes donneurs.</p>
</div>
<h3>Hydrocarbures polycycliques et pétrochimie</h3>
<p class="resume-text">Les hydrocarbures aromatiques polycycliques (HAP) comme le naphtalène, l'anthracène et le pyrène ont des propriétés électroniques remarquables liées à la fusion des cycles aromatiques. Le pétrole brut est un mélange complexe d'hydrocarbures (alcanes, cycloalcanes, aromatiques) séparés par distillation fractionnée. Le craquage catalytique transforme les chaînes longues en fractions plus légères (essence). Le reformage catalytique convertit les alcanes en aromatiques pour augmenter l'indice d'octane des carburants.</p>
<div class="highlight-box">
<p><strong>Indice d'octane :</strong> L'indice d'octane mesure la résistance à l'auto-inflammation (cliquetis) d'un carburant. L'isooctane (2,2,4-triméthylpentane) est la référence 100, le n-heptane est 0. Les alcanes ramifiés, les cycloalcanes et les aromatiques ont des indices élevés. Les additifs anti-cliquetis (jadis le plomb tétraéthyle, maintenant MTBE ou éthanol) augmentent l'indice d'octane sans modification de la structure moléculaire des hydrocarbures.</p>
</div>
"""

enrichments['organique/fonctions'] = """
<h3>Réactivité des carbonyles : aldéhydes et cétones</h3>
<p class="resume-text">Le groupe carbonyle C=O est l'un des groupes fonctionnels les plus réactifs en chimie organique. Le carbone carbonylique, appauvri en électrons (δ+), est sujet aux additions nucléophiles. Les réactifs de Grignard (R-MgX), les cyanures (CN⁻) et les hydrures (NaBH₄, LiAlH₄) s'additionnent pour donner des alcools. La réaction aldolique entre deux aldéhydes (ou cétones) conduit à un β-hydroxyaldéhyde, précurseur d'énone par déshydratation.</p>
<div class="highlight-box">
<p><strong>Distinction aldéhyde/cétone :</strong> Les aldéhydes sont plus réactifs que les cétones car moins encombrés et le carbone carbonylique est moins riche en électrons. Test de Tollens (miroir d'argent) : oxyde les aldéhydes en acides carboxyliques, pas les cétones. Test de Fehling (précipité rouge Cu₂O) : oxyde les aldéhydes aliphatiques. La réaction de Baeyer-Villiger oxyde les cétones en esters avec un peracide. Ces tests permettent de distinguer les deux fonctions.</p>
</div>
<h3>Chimie des acides carboxyliques et dérivés</h3>
<p class="resume-text">Les acides carboxyliques (RCOOH) et leurs dérivés (chlorures d'acyle, anhydrides, esters, amides) forment une famille réactive interconnectée par des réactions de substitution nucléophile acylique (SN Ac). La réactivité décroît dans l'ordre : chlorures d'acyle > anhydrides > esters > amides. La saponification des esters en milieu basique libère le carboxylate et l'alcool. La formation de peptides par liaison amide entre acides aminés est la base de la chimie des protéines.</p>
<div class="highlight-box">
<p><strong>Transestérification :</strong> La transestérification échange l'alcool d'un ester avec un autre alcool, catalysée par un acide ou une base. Elle est à la base de la production du biodiesel (EMAG : esters méthyliques d'acides gras) par réaction d'huiles végétales avec le méthanol en présence de KOH. La réaction est réversible et on utilise un excès d'alcool pour déplacer l'équilibre vers les produits. Elle sert aussi à synthétiser des polyesters (PET, polycarbonates).</p>
</div>
<h3>Amines et composés azotés</h3>
<p class="resume-text">Les amines (primaires R-NH₂, secondaires R₂NH, tertiaires R₃N) sont des bases de Lewis grâce au doublet libre de l'azote. Leur basicité dépend de la densité électronique sur N : les amines aliphatiques (pKaH ≈ 10) sont plus basiques que les amines aromatiques (pKaH ≈ 4,6 pour l'aniline) car le doublet de N est délocalisé dans le cycle. Les sels de diazonium (ArN₂⁺), obtenus par diazotation à froid, sont des électrophiles puissants permettant des couplages azoïques pour synthétiser des colorants azoïques.</p>
<div class="highlight-box">
<p><strong>Acides aminés et stéréochimie :</strong> Les 20 acides aminés protéinogènes possèdent tous un carbone α stéréogène (sauf la glycine). Ils sont tous de configuration L (équivalente à S sauf pour la cystéine). Le pKa de la fonction acide (≈2), de l'amine (≈9) et des chaînes latérales ionisables varie selon l'acide aminé. Au pH isoélectrique (pI), l'acide aminé est sous forme zwitterionique neutre. Ces propriétés dictent le comportement des protéines en solution.</p>
</div>
"""

enrichments['biochimie/adn-arn'] = """
<h3>Réplication de l'ADN : fidélité et mécanismes</h3>
<p class="resume-text">La réplication semi-conservative de l'ADN est initiée à des origines de réplication (oriC chez E. coli, multiples chez les eucaryotes). L'hélicase déroule la double hélice, la SSB stabilise les brins simples, la primase synthétise les amorces ARN. L'ADN polymérase III (procaryotes) ou les polymérases δ et ε (eucaryotes) synthétisent le nouveau brin en 5'→3'. Le brin retardé est synthétisé par fragments d'Okazaki (100-200 nt chez eucaryotes, 1000-2000 nt chez procaryotes), ligaturés par l'ADN ligase.</p>
<div class="highlight-box">
<p><strong>Fidélité de la réplication :</strong> Le taux d'erreur intrinsèque de l'ADN polymérase est de 10⁻⁵ par nucléotide incorporé. L'activité exonucléase 3'→5' (proofreading) réduit ce taux à 10⁻⁷. Les systèmes de réparation des mésappariements (MMR - MutS/MutL/MutH chez E. coli) abaissent encore à 10⁻⁹ à 10⁻¹⁰. Cette fidélité exceptionnelle est essentielle : le génome humain contient 3×10⁹ paires de bases, soit environ 1 erreur par 10⁹ nucléotides copiés en une génération.</p>
</div>
<h3>Transcription et régulation de l'expression génique</h3>
<p class="resume-text">La transcription produit des ARN à partir d'un brin matrice d'ADN. L'ARN polymérase II (eucaryotes) reconnaît le promoteur via des facteurs de transcription généraux (TFIID, TFIIH) assemblés en complexe de pré-initiation. Les activateurs et répresseurs modulent la transcription en interagissant avec des séquences enhancers ou silencers, parfois distantes de milliers de paires de bases du gène. La chromatine (nucléosomes, histones) régule l'accessibilité de l'ADN via des modifications épigénétiques (méthylation, acétylation).</p>
<div class="highlight-box">
<p><strong>ARN non codants :</strong> Le génome humain est principalement transcrit en ARN non codants : microARN (miRNA, 22 nt) régulent la traduction de milliers d'ARNm en s'y appariant imparfaitement. Les lncRNA (long non-coding RNA, >200 nt) ont des rôles structuraux et de régulation. Les piRNA protègent le génome germinal contre les transposons. Ces ARN représentent une couche de régulation immense, impliquée dans le développement, le cancer et les maladies complexes.</p>
</div>
<h3>Traduction et code génétique</h3>
<p class="resume-text">La traduction décode la séquence d'ARNm en séquence d'acides aminés. Le ribosome (70S procaryote : 30S + 50S ; 80S eucaryote : 40S + 60S) possède trois sites : A (aminoacyl), P (peptidyl), E (exit). Le tRNA aminoacylé reconnaît le codon par son anticodon via la complémentarité de Watson-Crick. La peptidyl transférase (ARN ribosomal 23S/28S, ribozyme) catalyse la formation de la liaison peptidique. Les facteurs d'élongation EF-Tu (procaryotes) ou eEF1A (eucaryotes) apportent les aminoacyl-tRNA au ribosome.</p>
<div class="highlight-box">
<p><strong>Modifications post-traductionnelles :</strong> La protéine nouvellement synthétisée subit souvent des modifications covalentes : phosphorylation (Ser, Thr, Tyr par kinases), glycosylation (N- et O-linked dans le RE et Golgi), ubiquitination (marquage pour la dégradation par le protéasome), acylation (myristoylation, palmitoylation pour ancrage membranaire), clivage protéolytique (activation des zymogènes, prohormones). Ces modifications contrôlent l'activité, la localisation et la stabilité des protéines.</p>
</div>
"""

def insert_before_quiz(content, extra):
    quiz_start = content.find('<section class="content-section" id="quiz">')
    if quiz_start != -1:
        return content[:quiz_start] + extra + content[quiz_start:]
    else:
        idx = content.rfind('</section>')
        if idx != -1:
            return content[:idx] + extra + content[idx:]
        return content + extra

for key, extra in enrichments.items():
    if key in pages:
        old_len = len(pages[key]['content'])
        pages[key]['content'] = insert_before_quiz(pages[key]['content'], extra)
        new_len = len(pages[key]['content'])
        print(f"  {key}: {old_len} -> {new_len}")
    else:
        print(f"  WARNING: {key} not found in pages")

# Validate JSON
json.dumps(data)
print("\nJSON valid.")

with open('assets/content/chimie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done: 7 articles enriched.")
