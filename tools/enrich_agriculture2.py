#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichissement des 6 articles restants - Agriculture."""

import json, re

FILE = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/agriculture.json"

ENRICHMENTS = {
"permaculture/design-permaculturel": """
<h3>La méthode OBREDIM : observer avant d'agir</h3>
<p class="resume-text">Le design permaculturel suit une méthodologie rigoureuse résumée par l'acronyme OBREDIM : Observer (observer le site dans le temps avant d'intervenir), Boundaries (limites — comprendre les contraintes légales, physiques et sociales), Resources (identifier les ressources disponibles — eau, soleil, sol, végétation existante), Evaluation (évaluer les besoins et objectifs), Design (concevoir le système), Implement (mettre en œuvre progressivement) et Maintain (maintenir et adapter). La phase d'observation est souvent négligée mais est la plus critique : Mollison recommandait de vivre sur un terrain au moins un an avant de commencer à l'aménager, pour observer toutes les saisons.</p>
<p class="resume-text">Les outils d'analyse du design comprennent les cartes de site (topographie, ensoleillement, vents dominants, zones humides), l'analyse SWOT (Forces, Faiblesses, Opportunités, Menaces) appliquée au site, et les "cartes de désir" qui identifient les besoins et aspirations des habitants. La carte des ombres portées selon les saisons est particulièrement utile : une maison peut projeter une ombre longue en hiver qui occulte une zone de jardin potentiel.</p>
<div class="highlight-box"><p>Le design permaculturel est une compétence qui s'apprend et se pratique : le Certificat de Design en Permaculture (PDC), cours standardisé de 72 heures, a été suivi par plus d'un million de personnes dans le monde depuis sa création dans les années 1980. Ce cours transmet à la fois les concepts théoriques et la pratique du design sur des sites réels.</p></div>

<h3>Les secteurs et zones : organiser l'espace par fréquence d'usage et énergie</h3>
<p class="resume-text">L'analyse sectorielle identifie les énergies qui traversent le site depuis l'extérieur : ensoleillement (secteur solaire d'été et d'hiver), vents dominants froids ou chauds, zones d'écoulement des eaux de pluie, vues agréables ou désagréables, bruits, risques d'incendie. Le design cherche à bloquer les éléments négatifs (haie brise-vent, végétation comme barrière au bruit) et à canaliser les éléments positifs (orientation de la maison vers le soleil d'hiver, captage des eaux de pluie dans les creux).</p>
<p class="resume-text">La zonation organise le site en concentriques selon la fréquence d'utilisation et les besoins d'entretien. La zone 0 (la maison) est le centre. La zone 1 (jardin de cuisine, herbes aromatiques, poulailler) nécessite des visites quotidiennes. La zone 2 (verger, potager principal, animaux de basse-cour) nécessite des soins plusieurs fois par semaine. La zone 3 (cultures de grande taille, pâtures) nécessite une attention hebdomadaire. La zone 4 (forêt gérée, pâture extensive) nécessite une gestion saisonnière. La zone 5 (sauvage, non géré) est laissée à l'évolution naturelle. Cette organisation réduit les déplacements et l'énergie nécessaire à la gestion du système.</p>
<div class="highlight-box"><p>Le design permaculturel s'applique à toutes les échelles : une fenêtre d'appartement peut être conçue en zones (zone 1 = herbes aromatiques dans des pots à portée de main, zone 2 = tomates sur le balcon). Des quartiers entiers et des villages ont été redessinés en permaculture, optimisant les flux d'eau, d'énergie et de matières à l'échelle communautaire.</p></div>
""",

"elevage/elevage-bovin": """
<h3>Génétique bovine : races laitières, allaitantes et mixtes</h3>
<p class="resume-text">Les bovins domestiques (Bos taurus pour les races européennes, Bos indicus pour les zébus) présentent une diversité génétique remarquable, fruit de millénaires de sélection par l'homme. Les races laitières hautement spécialisées, comme la Holstein (Prim'Holstein en France), sont sélectionnées depuis le XIXe siècle pour une production maximale de lait au détriment de la robustesse et de l'efficacité sur pâture. La Normande et la Montbéliarde, races françaises "mixtes" à double usage lait-viande, offrent un compromis entre production et aptitude fromagère (taux butyreux et protéique élevés). Les races allaitantes comme la Charolaise, la Limousine et la Blonde d'Aquitaine sont sélectionnées pour leur conformation musculaire et leur efficacité de conversion alimentaire.</p>
<p class="resume-text">La sélection génomique a révolutionné l'amélioration génétique bovine depuis 2009 : en analysant des centaines de milliers de marqueurs ADN sur une simple biopsie, on peut prédire la valeur génétique d'un taureau dès sa naissance, sans attendre l'évaluation de sa descendance (qui prenait 5 à 7 ans avec les méthodes classiques). Les taureaux génomiques d'élite peuvent diffuser leur génétique via la semence congelée à des millions d'animaux à travers le monde, accélérant le progrès génétique mais réduisant aussi la diversité génétique des populations.</p>
<div class="highlight-box"><p>Un taureau Holstein d'élite peut avoir plus de 500 000 descendants dans le monde grâce à l'insémination artificielle avec semence congelée. Cette concentration du matériel génétique présente des risques : si une maladie attaque une lignée génétique surreprésentée, ou si un gène délétère se propage, les conséquences peuvent être massives. La conservation des races locales est donc un enjeu de biosécurité autant que de patrimoine culturel.</p></div>
""",

"elevage/aviculture": """
<h3>L'aviculture moderne : des systèmes très diversifiés</h3>
<p class="resume-text">L'aviculture (élevage de volailles) est le secteur le plus intensif et le plus mondialisé de la production animale. Le poulet de chair est l'animal d'élevage le plus produit au monde : 70 milliards sont abattus chaque année, soit 133 000 par minute. Concentrée dans quelques grandes entreprises intégrées (Tyson, JBS, Cargill aux États-Unis ; LDC, Doux en France), la filière avicole industrielle transforme des poussins d'un jour en volailles prêtes à abattre en 6 semaines dans des bâtiments hermétiques climatisés à alimentation automatique.</p>
<p class="resume-text">Les systèmes alternatifs se développent en réponse à la demande de qualité et de bien-être animal. Le Label Rouge français, créé en 1965, impose des critères stricts : élevage en plein air avec accès à des parcours enherbés dès 9 semaines, densité maximale de 11 poulets/m², âge d'abattage de 81 jours minimum (contre 42 pour le conventionnel), alimentation sans antibiotiques de croissance. Ces volailles, plus lentes à croître, développent des chairs plus fermes et plus savoureuses. Le marché du bio et du plein air connaît une croissance soutenue depuis les années 2010.</p>
<div class="highlight-box"><p>L'influenza aviaire (grippe aviaire), causée par des virus Influenza A de sous-types H5 et H7, est devenue une menace permanente pour l'aviculture mondiale. L'épizootie H5N1 de 2021-2023 a conduit à l'abattage préventif de plus de 200 millions de volailles en Europe et en Amérique du Nord, avec des pertes économiques de plusieurs milliards de dollars. La densité des élevages industriels facilite la propagation rapide du virus.</p></div>

<h3>Poules pondeuses : révolution du bien-être</h3>
<p class="resume-text">La production d'œufs a connu une transformation radicale dans les dernières décennies. Les cages en batterie traditionnelles (430 cm² par poule, soit moins qu'une feuille A4), utilisées dans 80 % de la production mondiale dans les années 2000, ont été interdites dans l'Union européenne en 2012, remplacées par des cages "enrichies" (750 cm²) ou des systèmes alternatifs (au sol, plein air, biologique). La France ambitionne de sortir totalement des cages d'ici 2025, sous pression des distributeurs et des consommateurs.</p>
<p class="resume-text">Les poules pondeuses modernes (souches Hy-Line, Isa Brown, Lohmann Brown) sont des hybrides ultra-productifs capables de pondre plus de 300 œufs par an, contre 100 à 150 pour une poule de basse-cour. Cette productivité extrême est obtenue par la sélection sur la taille des follicules ovariens et le cycle de ponte. L'éclairage artificiel prolongé (16 heures de lumière par jour) simule les longues journées d'été et maintient la production à haut niveau toute l'année. Les poules sont généralement réformées à 72 semaines, bien avant leur durée de vie naturelle (8-10 ans).</p>
<div class="highlight-box"><p>En France, le code de couleur sur les œufs indique le mode d'élevage : 0 = biologique, 1 = plein air, 2 = au sol, 3 = cages enrichies. Les deux premiers chiffres qui suivent indiquent le pays de production (FR = France). Cette traçabilité permet aux consommateurs de connaître exactement les conditions d'élevage des poules qui ont pondu leurs œufs.</p></div>
""",

"elevage/apiculture": """
<h3>La biologie de la colonie : une superorganisme complexe</h3>
<p class="resume-text">La colonie d'abeilles mellifères (Apis mellifera) est souvent décrite comme un "superorganisme" : un ensemble d'individus (20 000 à 80 000 ouvrières, quelques centaines de faux-bourdons, une reine) dont les comportements collectifs assurent la survie et la reproduction du groupe bien au-delà des capacités de chaque individu isolé. La reine, seule femelle sexuellement développée, peut pondre jusqu'à 2 000 œufs par jour au pic de saison. Sa durée de vie (3-5 ans) contraste avec celle des ouvrières d'été (6 semaines) et des abeilles d'hiver (6 mois).</p>
<p class="resume-text">La communication par la danse frétillante (waggle dance), décrite par Karl von Frisch (Prix Nobel 1973), est l'un des systèmes de communication animale les plus sophistiqués : une abeille rentrée d'une source de nectar encode dans la durée et l'orientation de sa danse en huit la direction (par rapport au soleil) et la distance (de 100 m à plusieurs km) de la source. D'autres abeilles "décodent" ce message et rejoignent directement la source. La thermorégulation collective est une autre performance : en hiver, les abeilles forment une grappe compacte et font vibrer leurs muscles thoraciques pour maintenir le centre de la grappe à 35 °C malgré des températures extérieures négatives.</p>
<div class="highlight-box"><p>L'abeille mellifère peut distinguer les visages humains, selon une étude de 2010 publiée dans The Journal of Experimental Biology. Bien que les abeilles utilisent naturellement cette capacité pour discriminer les fleurs, leur aptitude à reconnaître des configurations complexes révèle des capacités cognitives insoupçonnées chez des insectes au cerveau d'un millimètre cube.</p></div>

<h3>Maladies et parasites : Varroa et les crises de l'apiculture moderne</h3>
<p class="resume-text">L'apiculture mondiale fait face à une crise sanitaire majeure depuis l'introduction en Europe de Varroa destructor, un acarien parasite originaire de l'abeille asiatique Apis cerana, auquel il est adapté. Introduit en Europe dans les années 1970, Varroa est aujourd'hui présent dans la quasi-totalité des ruchers mondiaux (sauf l'Australie, qui reste indemne). Il se reproduit dans les cellules de couvain operculées, se nourrit de l'hémolymphe des larves et adultes, et transmet de nombreux virus (dont le virus des ailes déformées, DWV). Sans traitement, une colonie infestée s'effondre en 2 à 3 ans.</p>
<p class="resume-text">Le syndrome d'effondrement des colonies (Colony Collapse Disorder, CCD), apparu aux États-Unis en 2006-2007 puis en Europe, a décimé des millions de colonies : les ouvrières disparaissaient en laissant la reine et le couvain, sans cadavres dans la ruche. Les causes du CCD sont multifactorielles : Varroa et les virus associés, les pesticides (notamment les néonicotinoïdes), la dénutrition liée à l'appauvrissement en plantes mellifères, le stress du nomadisme et les parasites intestinaux (Nosema ceranae). Ces facteurs combinés affaiblissent les systèmes immunitaires des abeilles et compromettent leur orientation.</p>
<div class="highlight-box"><p>La recherche de génotypes d'abeilles résistants à Varroa est un enjeu majeur de l'apiculture durable. Des populations d'"abeilles hygiéniques" qui détectent et suppriment le couvain infesté de Varroa avant l'éclosion des parasites ont été sélectionnées en Europe et en Amérique du Nord. Les "abeilles VSH" (Varroa Sensitive Hygiene) semblent capables de contrôler naturellement la population de Varroa sans traitement chimique — un Graal pour une apiculture sans intrants.</p></div>
""",

"viticulture/vinification": """
<h3>La chimie de la fermentation alcoolique</h3>
<p class="resume-text">La fermentation alcoolique est une réaction anaérobie (sans oxygène) réalisée par les levures, principalement Saccharomyces cerevisiae. Ces champignons unicellulaires convertissent les sucres du raisin (glucose et fructose) en alcool éthylique (éthanol) et en dioxyde de carbone selon la réaction : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂. En pratique, 17 g de sucre produit approximativement 1 % vol d'alcool dans le vin. La fermentation est exothermique (elle produit de la chaleur) et s'auto-régule : au-dessus d'environ 35 °C, les levures meurent et la fermentation s'arrête, d'où l'importance du contrôle thermique en vinification moderne.</p>
<p class="resume-text">Les levures indigènes, naturellement présentes sur les baies de raisin et dans la cave, peuvent assurer la fermentation de façon spontanée — c'est la vinification en "levures indigènes" ou "levures naturelles" recherchée dans les vins nature et biodynamiques. Elle offre une complexité aromatique plus grande mais aussi plus d'imprévisibilité et de risques de déviations (fermentations lentes, acescence). Les levures sèches actives (LSA) de souches sélectionnées sont inoculées dans la plupart des caves conventionnelles pour garantir une fermentation maîtrisée et répétable d'une année à l'autre.</p>
<div class="highlight-box"><p>La fermentation malolactique (FML), réalisée par des bactéries lactiques (principalement Oenococcus oeni) après la fermentation alcoolique, convertit l'acide malique (dur, acide vert) en acide lactique (doux, acide laiteux). Cette transformation est systématique dans les vins rouges et dans beaucoup de vins blancs de garde (Bourgogne, Bordeaux blanc). Elle est parfois bloquée dans les vins blancs vifs (Muscadet sur lie, Loire) pour conserver la fraîcheur et la minéralité acide.</p></div>

<h3>Vinification en rouge : macération, extraction et élevage</h3>
<p class="resume-text">La vinification en rouge se distingue fondamentalement de la vinification en blanc par la macération : les raisins sont éraflés (séparés des rafles) et foulés, puis la fermentation se déroule en présence des pellicules, des pépins et parfois des rafles. Cette macération permet l'extraction des anthocyanes (pigments rouges), des tannins (issus des pellicules et pépins, qui donnent la structure et l'aptitude au vieillissement) et des composés aromatiques. La durée de macération (de quelques jours pour les vins primeurs à plusieurs semaines pour les grands vins de garde) et les techniques de remontage (pompage du jus sur le chapeau de marc) ou pigeage (enfoncement manuel du chapeau) déterminent l'intensité de l'extraction.</p>
<p class="resume-text">L'élevage en barrique de chêne, pratiqué pour les vins de grande garde, apporte oxygénation progressive, complexité aromatique (vanilline, lactones, eugenol issues du bois) et stabilisation de la couleur. Les fûts neufs de 225 litres (barrique bordelaise) ou 228 litres (pièce bourguignonne) transmettent plus de bois que les fûts usagés. La durée d'élevage (6 à 30 mois) et le degré de chauffe de la barrique (légère, moyenne, forte) sont des choix déterminants dans le profil du vin final. Le béton et les amphores en terre cuite connaissent un renouveau comme alternatives à la barrique, offrant une micro-oxygénation sans apport de goût boisé.</p>
<div class="highlight-box"><p>Le vin de Bordeaux est l'un des rares produits alimentaires qui peut se valoriser sur des décennies, voire des siècles : des bouteilles de Château Pétrus 1961 ou de Château d'Yquem 1847 se négocient à des dizaines de milliers d'euros à l'unité. Cette capacité de vieillissement tient à l'équilibre entre acidité, tannins, alcool et sucres résiduels (pour les liquoreux), ainsi qu'à la faible quantité de sulfites qui protège sans étouffer l'évolution.</p></div>
""",

"jardinage/bases-du-potager": """
<h3>Préparer et améliorer son sol de potager</h3>
<p class="resume-text">La préparation du sol est l'investissement fondamental du potager. Un sol de potager idéal est "meuble, profond, riche, frais et bien drainé" — un équilibre entre structure physique (ni trop argileux qui colle et engorgent, ni trop sableux qui se dessèche vite), fertilité chimique (richesse en nutriments disponibles) et activité biologique (micro-organismes, vers de terre). Un test simple pour évaluer la structure : prendre une poignée de sol, le serrer dans la main, puis ouvrir : un sol correctement structuré se tient en motte sans se liquéfier (trop argileux) ni s'émietter complètement (trop sableux).</p>
<p class="resume-text">L'amendement organique — apport de compost mûr, de fumier composté, de terreau, de BRF (Bois Raméal Fragmenté) — est la base de la fertilité du potager. Le compost apporte de la matière organique qui nourrit les micro-organismes, améliore la structure, augmente la CEC (Capacité d'Échange Cationique) qui retient les nutriments disponibles, et améliore la rétention en eau. Un apport de 3 à 5 kg de compost mûr par m² chaque année maintient et améliore progressivement un sol moyen. Les fumiers frais (non compostés) ne doivent pas être incorporés juste avant semis : ils peuvent brûler les racines et favoriser les maladies.</p>
<div class="highlight-box"><p>La technique des "buttes permanentes" consiste à créer des buttes de culture surélevées, travaillées uniquement à la fourche-bêche (sans retourner les horizons), jamais piétinées et constamment enrichies en surface avec du compost. Après quelques années, ces buttes développent une structure de sol exceptionnelle, très riche en vie biologique, qui maintient une fertilité croissante avec un investissement en travail décroissant — une capitalisation progressive de l'infrastructure agricole de base.</p></div>

<h3>Planifier les cultures : succession, espace et diversité</h3>
<p class="resume-text">La planification du potager optimise l'utilisation de l'espace et du temps. Le principe de succession des cultures consiste à ne jamais laisser un espace de sol nu après récolte d'une culture : semis d'engrais vert (moutarde, phacélie) ou plantation d'une culture d'automne. La "double-culture" (deux cultures par saison sur le même espace) est possible pour les légumes à cycle court : salade en mai-juin, puis haricot en juin-juillet, puis épinard en août-septembre. Des tableaux de succession culturale, prenant en compte les délais entre cultures d'une même famille (rotations), les besoins en chaleur et les dates de gelées, sont des outils de planification précieux.</p>
<p class="resume-text">L'espacement entre les plantes détermine la concurrence pour la lumière, l'eau et les nutriments. Des espacements trop denses favorisent les maladies cryptogamiques (mauvaise aération) et réduisent les calibres ; trop larges, ils gaspillent l'espace et favorisent les adventices. La méthode du "jardinage en carrés" (Square Foot Gardening), popularisée par Mel Bartholomew dans les années 1970, divise les buttes en carrés d'un pied et optimise les densités de plantation pour maximiser le rendement sur petite surface — une approche simple et efficace pour les débutants.</p>
<div class="highlight-box"><p>Les légumes "coupez-et-récoltez" (cut-and-come-again) comme la laitue à couper, le basilic, la roquette, le cerfeuil et les épinards permettent de récolter plusieurs fois sur la même plante en coupant les feuilles extérieures ou en taillant à quelques centimètres du sol. Cette technique multiplie la productivité d'un même espace de potager sur une longue saison de production.</p></div>
"""
}

def inject_before_quiz(content, new_text):
    pattern = r'(</section>\s*\n\n<section[^>]*id="quiz")'
    result = re.sub(pattern, new_text + r'\1', content)
    if result == content:
        pattern2 = r'(</section>\s*<section[^>]*id="quiz")'
        result = re.sub(pattern2, new_text + r'\1', content)
    return result

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

modified = 0
for key, enrichment in ENRICHMENTS.items():
    if key in data['pages']:
        page = data['pages'][key]
        if page.get('type') in ('course', 'lesson'):
            orig_len = len(page['content'])
            page['content'] = inject_before_quiz(page['content'], enrichment)
            new_len = len(page['content'])
            print(f"  {key}: {orig_len} -> {new_len} (+{new_len-orig_len})")
            modified += 1

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nDone. {modified} pages modified.")

with open(FILE, 'r', encoding='utf-8') as f:
    check = json.load(f)
pages = check['pages']
course_pages = [(k, len(pages[k].get('content',''))) for k in pages if pages[k].get('type') in ('course','lesson')]
short = [(k,l) for k,l in course_pages if l < 10000]
print(f"Pages still < 10000 chars: {len(short)}")
for k,l in short:
    print(f"  {l:6d} | {k}")
print("JSON validation: OK")
