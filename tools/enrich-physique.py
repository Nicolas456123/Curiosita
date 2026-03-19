#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichit les articles mecanique/forces et thermodynamique/temperature dans physique.json."""

import json

FILEPATH = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/physique.json"

with open(FILEPATH, "r", encoding="utf-8") as f:
    data = json.load(f)

# ─── mecanique/forces ────────────────────────────────────────────────────────

NEW_FORCES_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Les lois de Newton et leurs applications</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Première loi de Newton : le principe d'inertie</h3>
        <p>Un corps au repos reste au repos, et un corps en mouvement rectiligne uniforme conserve sa vitesse, tant qu'aucune force extérieure nette ne s'exerce sur lui. L'<strong>inertie</strong> est la tendance naturelle d'un objet à résister aux changements de son état de mouvement. Plus un objet est massif, plus son inertie est grande.</p>
        <p>Cette loi s'applique dans un <strong>référentiel galiléen</strong> (inertiel), c'est-à-dire un référentiel en mouvement rectiligne uniforme par rapport aux étoiles lointaines. En pratique, le référentiel terrestre est une bonne approximation pour la plupart des situations du quotidien. En revanche, pour des phénomènes à grande échelle comme les vents ou les courants océaniques, la rotation de la Terre impose d'introduire des forces fictives (force de Coriolis, force centrifuge).</p>
        <p>Historiquement, Aristote pensait qu'un corps en mouvement nécessitait une force continue pour se maintenir en mouvement. C'est Galilée qui, au début du XVIIe siècle, renversa cette intuition en montrant qu'un corps glissant sur une surface de moins en moins rugueuse s'arrêtait de moins en moins vite — suggérant qu'en l'absence totale de friction, il continuerait indéfiniment. Newton généralisa cette idée dans ses <em>Principia Mathematica</em> (1687).</p>

        <h3>Deuxième loi de Newton : le principe fondamental de la dynamique</h3>
        <p>La somme vectorielle des forces appliquées à un corps est égale au produit de sa masse par son accélération : <strong>ΣF = ma</strong>. Cette loi est le cœur de la mécanique classique. Elle permet de prédire le mouvement de tout objet si l'on connaît les forces qui s'exercent sur lui.</p>
        <div class="highlight-box">
          <p><strong>Attention :</strong> F = ma est une équation vectorielle. Il faut la projeter sur chaque axe du repère choisi. Sur un plan incliné, on choisit généralement un axe parallèle à la pente et un axe perpendiculaire.</p>
        </div>
        <p>L'unité de force est le <strong>newton</strong> (N) : 1 N = 1 kg·m/s². Un newton correspond approximativement au poids d'une pomme (100 g × 9,81 m/s² ≈ 1 N). La formulation plus générale de Newton implique l'impulsion : ΣF = dp/dt, où p = mv est la quantité de mouvement. Cette formulation reste valide même si la masse varie (cas d'une fusée qui éjecte du propergol).</p>
        <p>La deuxième loi implique une relation entre <strong>masse et accélération</strong> : à force égale, un objet deux fois plus lourd accélère deux fois moins vite. Cette relation permet de calibrer des instruments de mesure — en pesant un objet dans une fusée en accélération, on peut remonter à la force exercée.</p>

        <h3>Troisième loi de Newton : action et réaction</h3>
        <p>Si un objet A exerce une force sur un objet B, alors B exerce sur A une force de même intensité, de même direction, mais de sens opposé. Ces deux forces s'exercent <strong>sur des objets différents</strong> — elles ne s'annulent donc jamais entre elles.</p>
        <p>Exemple : quand vous marchez, votre pied pousse le sol vers l'arrière (action). Le sol pousse votre pied vers l'avant (réaction), ce qui vous fait avancer. Sans cette réaction du sol, vous ne pourriez pas marcher — c'est pourquoi on glisse sur la glace.</p>
        <p>Les <strong>fusées</strong> sont l'illustration la plus spectaculaire du principe d'action-réaction : en éjectant des gaz à grande vitesse vers l'arrière, la fusée est propulsée vers l'avant. Contrairement à une idée reçue, la fusée n'a pas besoin de « s'appuyer » sur quoi que ce soit — elle fonctionne aussi bien dans le vide spatial, où les propulseurs à réaction sont les seuls moyens de locomotion.</p>

        <h3>Les principales forces</h3>
        <ul>
          <li><strong>Le poids (P = mg)</strong> — force gravitationnelle exercée par la Terre sur un objet. Toujours dirigée vers le bas (vers le centre de la Terre). g ≈ 9,81 m/s² à la surface de la Terre, mais varie légèrement avec la latitude et l'altitude.</li>
          <li><strong>La force normale (N)</strong> — force de contact perpendiculaire à la surface d'appui. Elle empêche les objets de traverser le sol. Sur une surface horizontale, N = mg. Sur un plan incliné d'angle θ, N = mg cos θ.</li>
          <li><strong>La friction (f)</strong> — force qui s'oppose au glissement. Friction statique : f_s ≤ μ_s·N. Friction cinétique : f_k = μ_k·N. Le coefficient de friction μ dépend des matériaux en contact et est toujours μ_k &lt; μ_s (il est plus difficile de démarrer que de maintenir un glissement).</li>
          <li><strong>La tension (T)</strong> — force exercée par un fil, une corde ou un câble tendu. Dirigée le long du fil, vers le point d'attache. Pour un fil idéal (massless), la tension est la même en tout point du fil.</li>
          <li><strong>La force de rappel élastique (F = −kx)</strong> — force exercée par un ressort, proportionnelle à son élongation (loi de Hooke). k est la constante de raideur du ressort (N/m). Valable tant que le ressort n'est pas dépassé sa limite élastique.</li>
          <li><strong>La poussée d'Archimède</strong> — force exercée par un fluide sur un objet immergé, égale au poids du fluide déplacé : F_A = ρ_fluide × V_immergé × g. Elle est dirigée vers le haut, s'opposant au poids.</li>
        </ul>

        <h3>Le diagramme de corps libre</h3>
        <p>Le diagramme de corps libre (ou bilan des forces) est l'outil fondamental pour résoudre tout problème de mécanique. La méthode est la suivante :</p>
        <ul>
          <li>Isoler le système (l'objet étudié)</li>
          <li>Identifier toutes les forces extérieures qui s'exercent sur lui</li>
          <li>Représenter chaque force par un vecteur (flèche) partant du centre de l'objet</li>
          <li>Choisir un système d'axes et projeter F = ma sur chaque axe</li>
          <li>Résoudre le système d'équations obtenu</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Erreur fréquente :</strong> ne pas confondre la masse (en kg) et le poids (en N). La masse est une propriété intrinsèque de l'objet (elle ne change pas sur la Lune). Le poids dépend de l'accélération gravitationnelle locale : P = mg. Sur la Lune (g_Lune ≈ 1,62 m/s²), un objet de 10 kg pèse seulement 16,2 N.</p>
        </div>

        <h3>La force centripète et le mouvement circulaire</h3>
        <p>Un objet se déplaçant en cercle à vitesse constante possède une accélération centripète dirigée vers le centre du cercle : <strong>a_c = v²/r</strong>, où v est la vitesse et r le rayon. La force centripète correspondante est <strong>F_c = mv²/r = mω²r</strong>, où ω est la vitesse angulaire.</p>
        <p>Cette force n'est pas une nouvelle force : elle est assurée par les forces déjà en jeu (tension, gravité, friction). Par exemple, pour une voiture dans un virage, la force centripète est fournie par la friction des pneus. Pour un satellite en orbite circulaire, c'est la gravité terrestre qui joue ce rôle. Pour une pierre attachée à une corde, c'est la tension.</p>
        <p>La <strong>force centrifuge</strong>, souvent évoquée dans la vie courante (« je suis plaqué contre la portière dans un virage »), est une force fictive apparaissant dans le référentiel tournant non galiléen. Dans un référentiel inertiel, c'est bien la force centripète (réelle) qui courbe la trajectoire.</p>

        <h3>Les limites de la mécanique classique</h3>
        <p>Les lois de Newton décrivent remarquablement bien le monde à l'échelle humaine. Elles permettent d'envoyer des sondes spatiales vers des planètes lointaines avec une précision millimétrique sur des trajectoires de milliards de kilomètres. Cependant, elles ont des limites bien identifiées :</p>
        <ul>
          <li><strong>À très grande vitesse</strong> (comparable à la vitesse de la lumière, c ≈ 3 × 10⁸ m/s) : la relativité restreinte d'Einstein remplace la mécanique newtonienne. La masse n'est plus constante : m = m₀ / √(1 − v²/c²).</li>
          <li><strong>À très petite échelle</strong> (atomes, électrons) : la mécanique quantique s'impose. Les particules n'ont pas de trajectoire définie, et leurs propriétés sont décrites par des fonctions d'onde probabilistes.</li>
          <li><strong>À très grande échelle gravitationnelle</strong> (étoiles à neutrons, trous noirs) : la relativité générale d'Einstein est nécessaire pour décrire la courbure de l'espace-temps.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Domaine de validité :</strong> la mécanique newtonienne reste l'outil de référence pour toutes les situations où v ≪ c, où les objets sont bien plus grands qu'un atome, et où les champs gravitationnels ne sont pas extrêmes. Pour l'ingénierie, les transports, les sports ou les sciences de la Terre, Newton suffit presque toujours.</p>
        </div>

        <h3>Impulsion et quantité de mouvement</h3>
        <p>La <strong>quantité de mouvement</strong> d'un objet est le produit de sa masse par sa vitesse : <strong>p = mv</strong> (kg·m/s). Elle est une grandeur vectorielle. Le <strong>théorème de l'impulsion</strong> relie la variation de quantité de mouvement à la force appliquée : ΣF = Δp/Δt.</p>
        <p>L'<strong>impulsion</strong> d'une force est son intégrale sur le temps : J = F × Δt. Elle est égale à la variation de quantité de mouvement : J = Δp. C'est pourquoi les airbags et les matériaux à énergie absorbante augmentent la durée d'une collision pour réduire la force de choc (même impulsion, durée plus longue → force plus faible).</p>
        <p>Le principe de <strong>conservation de la quantité de mouvement</strong> stipule que, dans un système isolé (sans force extérieure nette), la quantité de mouvement totale est conservée. Ce principe est fondamental pour l'analyse des collisions : lors d'un choc, quelle que soit la complexité des forces internes, p_total avant = p_total après.</p>
      </div>
    </section>"""

# ─── thermodynamique/temperature ─────────────────────────────────────────────

NEW_TEMP_CONTENU = """<section class="content-section" id="contenu">
      <div class="section-header"><div class="section-num">02</div><div class="section-info"><h2>En détail</h2><p>Température et chaleur</p></div></div>
      <div class="course-content">
        <h3>Les échelles de température</h3>
        <p>Trois échelles de température sont couramment utilisées en physique :</p>
        <p>L'échelle <strong>Celsius</strong> (°C) est définie par deux points de référence : la fusion de la glace (0 °C) et l'ébullition de l'eau (100 °C) sous pression atmosphérique normale. L'échelle <strong>Fahrenheit</strong> (°F) utilise 32 °F pour la fusion de la glace et 212 °F pour l'ébullition. La conversion est : <strong>T(°F) = 9/5 × T(°C) + 32</strong>.</p>
        <p>L'échelle <strong>Kelvin</strong> (K) est l'échelle absolue du SI. Le zéro absolu (0 K = −273,15 °C) correspond à l'arrêt théorique de toute agitation thermique. La relation est : <strong>T(K) = T(°C) + 273,15</strong>. Les intervalles d'un kelvin et d'un degré Celsius sont identiques. Le kelvin est l'unité de température fondamentale du Système international ; depuis 2019, il est défini par la valeur fixée de la constante de Boltzmann k_B = 1,380 649 × 10⁻²³ J/K.</p>

        <h3>Agitation thermique et énergie cinétique moyenne</h3>
        <p>La température est liée à l'énergie cinétique moyenne de translation des particules. Pour un gaz parfait monoatomique, la théorie cinétique donne : <strong>⟨Ec⟩ = 3/2 × k_B × T</strong>, où k_B = 1,381 × 10⁻²³ J/K est la constante de Boltzmann et T la température en kelvins.</p>
        <p>La vitesse quadratique moyenne des molécules d'un gaz de masse molaire M est : <strong>v_qm = √(3RT/M)</strong>, où R = 8,314 J/(mol·K) est la constante des gaz parfaits. À 20 °C, les molécules de N₂ se déplacent à environ 510 m/s, et celles de H₂ à environ 1 900 m/s (leur faible masse les rend beaucoup plus rapides).</p>
        <p>La distribution des vitesses dans un gaz est décrite par la <strong>distribution de Maxwell-Boltzmann</strong>, qui donne la fraction de molécules ayant une vitesse entre v et v + dv. Cette distribution est asymétrique : il y a toujours une petite fraction de molécules très rapides, capables de s'échapper de l'atmosphère — phénomène qui explique pourquoi la Terre a perdu l'hydrogène de son atmosphère primitive au fil des milliards d'années.</p>

        <h3>La capacité thermique</h3>
        <p>La capacité thermique (ou calorifique) mesure l'énergie nécessaire pour élever la température d'un corps. La <strong>capacité thermique massique</strong> c (en J/(kg·K)) est définie par : <strong>Q = m × c × ΔT</strong>, où Q est la chaleur échangée, m la masse et ΔT la variation de température.</p>
        <p>Quelques valeurs typiques : eau liquide c = 4 185 J/(kg·K) (exceptionnellement élevée, ce qui en fait un excellent régulateur thermique), fer c = 449 J/(kg·K), cuivre c = 385 J/(kg·K), air c_p = 1 005 J/(kg·K).</p>
        <p>La <strong>capacité thermique molaire</strong> C (en J/(mol·K)) est liée à c par C = M × c. Pour un gaz parfait monoatomique, C_v = 3/2 × R ≈ 12,5 J/(mol·K) et C_p = 5/2 × R ≈ 20,8 J/(mol·K), avec la relation de Mayer : <strong>C_p − C_v = R</strong>.</p>
        <p>La forte capacité thermique de l'eau explique le rôle régulateur des océans sur le climat : ils absorbent une quantité énorme de chaleur solaire en été et la restituent lentement en hiver, atténuant les extrêmes de température dans les régions côtières. C'est pourquoi Brest (façade atlantique) a un climat bien plus doux que Moscou à la même latitude.</p>

        <h3>Les modes de transfert de chaleur</h3>
        <p><strong>Conduction :</strong> transfert de proche en proche dans un milieu matériel sans déplacement de matière. La loi de Fourier donne le flux thermique : <strong>Φ = −λ × A × (dT/dx)</strong>, où λ est la conductivité thermique (W/(m·K)), A la surface et dT/dx le gradient de température. Les métaux (λ_Cu ≈ 390 W/(m·K)) sont de bons conducteurs ; les isolants (λ_laine de verre ≈ 0,04 W/(m·K)) sont de mauvais conducteurs thermiques.</p>
        <p><strong>Convection :</strong> transfert de chaleur par déplacement macroscopique de fluide. La convection peut être naturelle (poussée d'Archimède due aux différences de densité) ou forcée (ventilateur, pompe). La loi de Newton du refroidissement s'écrit : <strong>Φ = h × A × (T_s − T_∞)</strong>, où h est le coefficient de transfert convectif. La convection est le mécanisme dominant dans les fours à chaleur tournante, les échangeurs de chaleur industriels et le système de refroidissement du corps humain par sudation.</p>
        <p><strong>Rayonnement :</strong> transfert par ondes électromagnétiques, ne nécessitant aucun support matériel. Tout corps à température T émet un rayonnement selon la loi de Stefan-Boltzmann : <strong>P = ε × σ × A × T⁴</strong>, où σ = 5,67 × 10⁻⁸ W/(m²·K⁴) et ε est l'émissivité (0 ≤ ε ≤ 1). La loi de Wien précise la longueur d'onde du pic d'émission : λ_max × T = 2,898 × 10⁻³ m·K. À 6 000 K (surface du Soleil), le pic est dans le visible (≈ 480 nm). À 37 °C (corps humain), il est dans l'infrarouge (≈ 9,3 μm) — ce que détectent les caméras thermiques.</p>

        <h3>Calorimétrie</h3>
        <p>La calorimétrie étudie les échanges de chaleur dans un système isolé. Le principe fondamental est : <strong>ΣQ_i = 0</strong> (la somme algébrique des chaleurs échangées est nulle dans un calorimètre parfait). Si l'on met en contact un corps chaud (m₁, c₁, T₁) et un corps froid (m₂, c₂, T₂), la température d'équilibre T_eq est :</p>
        <p><strong>T_eq = (m₁c₁T₁ + m₂c₂T₂) / (m₁c₁ + m₂c₂)</strong></p>
        <p>En pratique, le calorimètre lui-même absorbe de la chaleur. On caractérise cette absorption par la <strong>capacité calorifique du calorimètre</strong> μ (aussi appelée « valeur en eau ») : Q_cal = μ × ΔT. La calorimétrie est utilisée en nutrition pour mesurer la valeur énergétique des aliments (la « calorie » alimentaire vaut en réalité 1 kcal = 4 185 J), et en chimie pour mesurer les chaleurs de réaction.</p>

        <h3>Dilatation thermique</h3>
        <p>L'augmentation de température provoque une dilatation des corps. Pour un solide, la dilatation linéaire s'écrit : <strong>ΔL = α × L₀ × ΔT</strong>, où α est le coefficient de dilatation linéaire. Pour l'acier, α ≈ 12 × 10⁻⁶ K⁻¹ ; pour l'aluminium, α ≈ 23 × 10⁻⁶ K⁻¹.</p>
        <p>La dilatation volumique suit : <strong>ΔV = β × V₀ × ΔT</strong>, avec β ≈ 3α pour les solides isotropes. L'eau présente une anomalie célèbre : elle atteint sa densité maximale à 4 °C, ce qui permet aux lacs de geler par la surface et de préserver la vie aquatique en hiver. Cette anomalie résulte de la structure des liaisons hydrogène dans l'eau liquide et dans la glace.</p>
        <p>La dilatation thermique a des applications pratiques essentielles : les ponts métalliques comportent des joints de dilatation pour accommoder les changements de longueur saisonniers ; le thermomètre à mercure (ou à alcool) fonctionne sur ce principe ; les lignes électriques sont légèrement plus lâches en été pour éviter la rupture par contraction en hiver.</p>

        <h3>Résistance thermique et isolation</h3>
        <p>Par analogie avec la résistance électrique, on définit la <strong>résistance thermique</strong> d'une paroi plane : <strong>R_th = e / (λ × A)</strong>, où e est l'épaisseur. Le flux thermique à travers la paroi est Φ = ΔT / R_th. Pour des couches en série, les résistances s'additionnent : R_total = R₁ + R₂ + ... Cette notion est essentielle en isolation thermique des bâtiments.</p>
        <div class="highlight-box"><p><strong>Application :</strong> le double vitrage fonctionne grâce à la lame d'air (λ_air ≈ 0,026 W/(m·K)) entre deux vitres. L'air immobile est un excellent isolant, ce qui réduit considérablement les pertes thermiques. Les fenêtres à triple vitrage, avec deux lames d'argon (λ_Ar ≈ 0,016 W/(m·K)), encore moins conducteur que l'air, atteignent des performances d'isolation remarquables.</p></div>

        <h3>Le principe zéro et l'équilibre thermique</h3>
        <p>Le <strong>principe zéro de la thermodynamique</strong> établit que si deux systèmes A et B sont chacun en équilibre thermique avec un troisième système C, alors A et B sont en équilibre thermique entre eux. Ce principe, bien qu'évident en apparence, est fondamental car il justifie le concept même de température comme grandeur physique mesurable.</p>
        <p>C'est ce principe qui permet l'utilisation d'un thermomètre : le thermomètre (système C) atteint l'équilibre thermique avec le corps étudié (A), et la lecture de sa température (définie par son état physique : hauteur du mercure, résistance électrique, etc.) donne la température de A. Le principe zéro garantit que cette mesure est indépendante de l'instrument utilisé, dans la limite de la précision de calibration.</p>
        <p>L'équilibre thermique est un état d'équilibre macroscopique : à l'échelle microscopique, les échanges d'énergie entre particules continuent en permanence, mais leur bilan statistique est nul. C'est un exemple d'<strong>équilibre dynamique</strong>, concept central en thermodynamique et en chimie.</p>
      </div>
    </section>"""

# ─── Apply patches ────────────────────────────────────────────────────────────

def replace_contenu_section(content, new_section):
    """Replace the id='contenu' section with new_section."""
    start_marker = '<section class="content-section" id="contenu">'
    # Find the end: next section after contenu
    start = content.find(start_marker)
    if start == -1:
        raise ValueError("contenu section not found")
    # Find next top-level section
    next_section = content.find('<section class="content-section"', start + len(start_marker))
    if next_section == -1:
        # Maybe it's followed by course-nav or end
        next_section = content.find('\n    <section class="content-section"', start + len(start_marker))
    if next_section == -1:
        raise ValueError("Could not find end of contenu section")
    return content[:start] + new_section + "\n\n    " + content[next_section:]

forces_content = data['pages']['mecanique/forces']['content']
data['pages']['mecanique/forces']['content'] = replace_contenu_section(forces_content, NEW_FORCES_CONTENU)

temp_content = data['pages']['thermodynamique/temperature']['content']
data['pages']['thermodynamique/temperature']['content'] = replace_contenu_section(temp_content, NEW_TEMP_CONTENU)

with open(FILEPATH, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Done. Lengths:")
print("  mecanique/forces:", len(data['pages']['mecanique/forces']['content']))
print("  thermodynamique/temperature:", len(data['pages']['thermodynamique/temperature']['content']))
