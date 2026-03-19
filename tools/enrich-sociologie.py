#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('assets/content/sociologie.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ─── Helper: replace intro + contenu sections only ───────────────────────────
def replace_intro_contenu(old_content, new_intro_html, new_contenu_html):
    """Replace the introduction and contenu sections while keeping the rest."""
    # Replace introduction section
    old_content = re.sub(
        r'<section class="content-section" id="introduction">.*?</section>',
        new_intro_html,
        old_content,
        flags=re.DOTALL
    )
    # Replace contenu section
    old_content = re.sub(
        r'<section class="content-section" id="contenu">.*?</section>',
        new_contenu_html,
        old_content,
        flags=re.DOTALL
    )
    return old_content


# ═══════════════════════════════════════════════════════════════════════════════
# 1. fondements/naissance — Naissance de la sociologie
# ═══════════════════════════════════════════════════════════════════════════════

intro_naissance = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>L'émergence d'une science de la société</p>
        </div>
      </div>
      <p class="resume-text">La <strong>naissance de la sociologie</strong> désigne l'émergence, au XIXe siècle, d'une discipline scientifique autonome vouée à l'étude des faits sociaux. De Auguste Comte à Émile Durkheim, en passant par Karl Marx et Herbert Spencer, la sociologie se constitue progressivement comme une science distincte de la philosophie et de l'économie politique.</p>
      <div class="highlight-box">
        <p><strong>Enjeu fondateur :</strong> comment étudier la société humaine avec la même rigueur que les sciences naturelles ? Cette ambition positiviste, portée par Comte dès les années 1830, fonde le projet sociologique : observer, mesurer et expliquer les régularités de la vie sociale sans se contenter de spéculations philosophiques.</p>
      </div>
      <p class="resume-text">La sociologie naît dans un contexte de <strong>double révolution</strong> — industrielle et politique — qui bouleverse les sociétés européennes. Les transformations rapides du XIXe siècle (urbanisation, industrialisation, révolutions politiques) créent un besoin urgent de compréhension scientifique du social.</p>
    </section>'''

contenu_naissance = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>De la philosophie sociale à la science de la société</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Le contexte historique : la double révolution</h3>
        <p>La sociologie émerge dans une Europe profondément transformée par deux révolutions concomitantes. La <strong>Révolution industrielle</strong> (débutée en Angleterre vers 1760, puis en France au XIXe siècle) crée de nouvelles classes sociales — une bourgeoisie industrielle et un prolétariat urbain —, détruit les anciens liens communautaires ruraux et engendre de nouvelles formes de misère et de solidarité. La <strong>Révolution française</strong> et ses suites politiques posent la question de l'ordre social : comment une société peut-elle tenir ensemble sans les fondements religieux traditionnels ? Comment construire un ordre démocratique stable ?</p>
        <p>Ces bouleversements rendent les anciennes explications — philosophiques, théologiques, ou relevant du simple bon sens — insuffisantes. Il faut une <strong>science nouvelle</strong>, capable d'observer et d'expliquer les régularités sociales.</p>

        <h3>Auguste Comte et le positivisme</h3>
        <p>Auguste Comte (1798-1857) est généralement reconnu comme le fondateur de la sociologie, qu'il nomme d'abord « physique sociale » avant d'adopter le terme « sociologie » (du latin <em>socius</em> et du grec <em>logos</em>). Dans son <em>Cours de philosophie positive</em> (1830-1842), il développe la <strong>loi des trois états</strong> : toute connaissance passe successivement par un état théologique (explication par des puissances surnaturelles), un état métaphysique (explication par des abstractions) et un état <strong>positif</strong> (explication par des lois naturelles observables).</p>
        <div class="highlight-box">
          <p><strong>La loi des trois états (Comte) :</strong> Pour Comte, la sociologie doit accéder à l'état positif, c'est-à-dire étudier les faits sociaux avec les méthodes des sciences naturelles : observation, expérimentation (indirecte), comparaison et méthode historique. La société est un organisme dont les parties (statique sociale) évoluent selon des lois (dynamique sociale).</p>
        </div>
        <p>Comte distingue la <strong>statique sociale</strong> (l'étude de l'ordre social, des institutions qui maintiennent la cohésion) et la <strong>dynamique sociale</strong> (l'étude du progrès et du changement). Cette distinction préfigure l'opposition fonctionnalisme/théories du changement qui structurera la discipline au XXe siècle.</p>

        <h3>Herbert Spencer et le darwinisme social</h3>
        <p>L'Anglais Herbert Spencer (1820-1903) développe une sociologie évolutionniste inspirée de Darwin. Pour Spencer, les sociétés évoluent de formes simples et homogènes vers des formes complexes et différenciées, selon un processus analogue à celui des organismes biologiques. Il forge le concept de <strong>« survie du plus apte »</strong> appliqué aux sociétés — une formule que Darwin adoptera lui-même.</p>
        <p>Bien que le darwinisme social de Spencer ait été largement critiqué (notamment pour avoir légitimé des inégalités sociales comme « naturelles »), son œuvre contribue à poser la question de la <strong>différenciation sociale</strong> et de la division du travail, que Durkheim reprendra de manière critique.</p>

        <h3>Karl Marx : la sociologie comme critique</h3>
        <p>Karl Marx (1818-1883) n'est pas sociologuede formation, mais ses analyses constituent une contribution décisive à la discipline. Sa méthode, le <strong>matérialisme historique</strong>, pose que les conditions matérielles de production (l'économie) déterminent les structures sociales, politiques et idéologiques (la « superstructure »). L'histoire des sociétés est celle de la <strong>lutte des classes</strong> : entre maîtres et esclaves dans l'Antiquité, entre seigneurs et serfs au Moyen Âge, entre bourgeoisie et prolétariat dans le capitalisme industriel.</p>
        <div class="highlight-box">
          <p><strong>L'aliénation (Marx) :</strong> Dans le mode de production capitaliste, l'ouvrier est <em>aliéné</em> : séparé du produit de son travail (qu'il ne possède pas), du processus de production (répétitif et parcellisé), des autres hommes (concurrence) et de lui-même (le travail n'est plus une réalisation de soi). Ce concept articule analyse économique et critique philosophique de la condition ouvrière.</p>
        </div>
        <p>Si Marx n'est pas un « père fondateur » au sens où il n'a pas cherché à fonder une « sociologie », son influence sur la discipline est considérable : la question des <strong>classes sociales</strong>, des <strong>inégalités</strong> et du <strong>pouvoir</strong> est au cœur de la sociologie critique du XXe siècle.</p>

        <h3>Émile Durkheim et l'institutionnalisation</h3>
        <p>Émile Durkheim (1858-1917) est le fondateur de la sociologie française et celui qui réussit à <strong>institutionnaliser</strong> la discipline (premier poste de professeur de sociologie en France en 1887, création de <em>L'Année sociologique</em> en 1898). Dans <em>Les Règles de la méthode sociologique</em> (1895), il définit le programme de la discipline : étudier les <strong>faits sociaux</strong> comme des choses, extérieurs à l'individu et dotés d'une force contraignante.</p>
        <p>Son œuvre majeure, <em>Le Suicide</em> (1897), constitue le premier grand exemple de recherche sociologique empirique : en analysant statistiquement les taux de suicide dans différents groupes sociaux, Durkheim montre que ce geste apparemment individuel est déterminé par des facteurs <strong>sociaux</strong> (intégration et régulation du groupe). Cette démonstration fonde la légitimité de la sociologie comme science autonome.</p>

        <h3>Max Weber et la sociologie compréhensive</h3>
        <p>L'Allemand Max Weber (1864-1920) développe une approche différente de celle de Durkheim. Là où Durkheim cherche des lois causales, Weber préconise une sociologie <strong>compréhensive</strong> (<em>Verstehen</em>) : comprendre le <em>sens</em> que les acteurs donnent à leurs actions. Son concept central est l'<strong>action sociale</strong> : tout comportement humain orienté vers autrui et doté d'un sens subjectif.</p>
        <p>Weber s'intéresse à la <strong>rationalisation</strong> comme processus central de la modernité occidentale : l'extension progressive de la raison instrumentale à tous les domaines de la vie sociale (économie capitaliste, administration bureaucratique, droit formel, science). Cette analyse débouche sur la notion de « désenchantement du monde » : la modernité chasse le magique et le sacré au profit du calcul et de la maîtrise technique.</p>
        <div class="highlight-box">
          <p><strong>Les idéaux-types (Weber) :</strong> Weber développe la méthode des <em>idéaux-types</em> : des constructions conceptuelles abstraites (capitalisme, bureaucratie, charisma) qui n'existent pas à l'état pur dans la réalité mais servent d'outils de comparaison et d'analyse. Le sociologue construit ces modèles pour mieux comprendre les cas concrets par comparaison avec ce modèle idéal.</p>
        </div>

        <h3>L'institutionnalisation de la discipline</h3>
        <p>La sociologie devient une discipline académique reconnue à la fin du XIXe et au début du XXe siècle. En France, Durkheim crée la première chaire de sociologie (Bordeaux, 1887, puis Sorbonne, 1902). Aux États-Unis, l'École de Chicago (Robert Park, Ernest Burgess) développe dès les années 1910 une sociologie empirique des phénomènes urbains. En Allemagne, la <em>Deutsche Gesellschaft für Soziologie</em> est fondée en 1909.</p>
        <p>Cette institutionnalisation s'accompagne de débats fondateurs sur la méthode : la sociologie doit-elle s'inspirer des sciences naturelles (positivisme) ou développer des méthodes propres adaptées à la compréhension du sens (herméneutique) ? Ce débat entre explication et compréhension structure encore aujourd'hui les tensions épistémologiques de la discipline.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 2. fondements/fait-social — Le fait social
# ═══════════════════════════════════════════════════════════════════════════════

intro_fait_social = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Le concept fondateur de Durkheim</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>fait social</strong> est le concept central de la sociologie durkheimienne. Défini dans <em>Les Règles de la méthode sociologique</em> (1895), il désigne toute manière de faire, de penser ou de sentir qui est extérieure à l'individu et qui s'impose à lui avec une force contraignante. Ce concept fonde l'autonomie de la sociologie comme discipline : les faits sociaux constituent un niveau de réalité irréductible aux phénomènes psychologiques ou biologiques.</p>
      <div class="highlight-box">
        <p><strong>La définition canonique :</strong> « Est fait social toute manière de faire, fixée ou non, susceptible d'exercer sur l'individu une contrainte extérieure ; ou bien encore, qui est générale dans l'étendue d'une société donnée tout en ayant une existence propre, indépendante de ses manifestations individuelles. » (Durkheim, 1895)</p>
      </div>
      <p class="resume-text">Le fait social est à la fois <strong>extérieur</strong> à l'individu (il préexiste à sa naissance et lui survivra), <strong>contraignant</strong> (il s'impose sous peine de sanctions formelles ou informelles) et <strong>général</strong> (il est partagé par l'ensemble ou la majorité des membres d'une société).</p>
    </section>'''

contenu_fait_social = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Le fait social : un concept fondateur en profondeur</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Définition et caractères essentiels</h3>
        <p>Durkheim identifie trois propriétés constitutives du fait social. L'<strong>extériorité</strong> signifie que les faits sociaux existent indépendamment des individus : la langue française, le droit pénal, les pratiques religieuses existaient avant ma naissance et existeront après ma mort. La <strong>contrainte</strong> désigne la pression que les faits sociaux exercent sur les individus : résister à la langue de son milieu, aux normes vestimentaires ou aux règles juridiques entraîne des sanctions (moqueries, rejet, amendes, emprisonnement). La <strong>généralité</strong> (ou « collectivité ») implique que ces faits sont partagés, non pas la simple somme d'états individuels, mais une réalité collective sui generis (d'un genre particulier, irréductible aux parties).</p>
        <div class="highlight-box">
          <p><strong>Traiter les faits sociaux comme des choses :</strong> La règle méthodologique fondamentale de Durkheim est d'aborder les faits sociaux « comme des choses » — non pas qu'ils soient matériels, mais qu'ils s'offrent à l'observation comme des réalités extérieures que le chercheur doit découvrir plutôt que construire a priori. Il faut <em>écarter systématiquement les prénotions</em>, ces idées communes que nous avons sur le social, pour observer les faits tels qu'ils sont.</p>
        </div>

        <h3>Les types de faits sociaux</h3>
        <p>Durkheim distingue principalement deux grands types de faits sociaux. Les <strong>faits sociaux matériels</strong> sont directement observables : le droit (corpus de règles codifiées), l'architecture (les formes bâties façonnent les comportements), les voies de communication (qui structurent les échanges). Les <strong>faits sociaux immatériels</strong> — les plus importants pour Durkheim — sont moins tangibles mais tout aussi contraignants : les normes morales, les représentations collectives, les courants d'opinion, les pratiques religieuses.</p>
        <p>Cette distinction débouche sur une <strong>sociologie des représentations collectives</strong> : l'ensemble des croyances, des valeurs et des idées partagées par une société constitue le ciment de la vie collective. Les représentations collectives (la conception du sacré, les idées morales, les croyances nationales) ne se réduisent pas aux représentations individuelles : elles les dépassent et les conditionnent.</p>

        <h3>La preuve par le suicide</h3>
        <p>Dans <em>Le Suicide</em> (1897), Durkheim opérationnalise son concept en démontrant que le suicide — acte apparemment le plus individuel qui soit — est un fait social. En analysant les statistiques de suicide de différents pays et groupes, il montre que les taux varient de façon régulière selon des facteurs sociaux, non biologiques ou psychologiques.</p>
        <p>Il distingue quatre types de suicide. Le <strong>suicide égoïste</strong> résulte d'un déficit d'intégration sociale (les protestants, moins intégrés que les catholiques, se suicident davantage). Le <strong>suicide altruiste</strong> est produit par un excès d'intégration (le militaire qui se sacrifie pour son groupe). Le <strong>suicide anomique</strong> résulte d'une régulation insuffisante (en période de crise économique ou de divorce). Le <strong>suicide fataliste</strong> est dû à une régulation excessive (l'esclave, l'épouse très jeune).</p>
        <div class="highlight-box">
          <p><strong>La leçon méthodologique du Suicide :</strong> En reliant statistiquement les taux de suicide à des variables sociales (confession religieuse, situation matrimoniale, appartenance professionnelle), Durkheim démontre que la sociologie peut produire des <em>explications causales</em> de phénomènes sociaux, au même titre que les sciences naturelles. Le social s'explique par le social.</p>
        </div>

        <h3>Solidarité mécanique et solidarité organique</h3>
        <p>Dans <em>De la division du travail social</em> (1893), Durkheim distingue deux formes de cohésion sociale. La <strong>solidarité mécanique</strong> caractérise les sociétés traditionnelles : les individus se ressemblent (même croyances, même mode de vie), et c'est cette similitude qui les unit. La conscience collective absorbe les consciences individuelles. La <strong>solidarité organique</strong> caractérise les sociétés modernes : la division du travail crée des individus différenciés, spécialisés, qui ont besoin les uns des autres — comme les organes d'un corps. C'est la complémentarité, non la similitude, qui assure la cohésion.</p>
        <p>Cette distinction explique comment les sociétés modernes peuvent tenir ensemble malgré — ou grâce à — leur différenciation croissante. L'anomie (absence de règles) survient quand la division du travail s'accélère sans que les normes sociales aient eu le temps de s'adapter.</p>

        <h3>Critiques et prolongements</h3>
        <p>La notion de fait social a suscité de nombreuses critiques. Gabriel Tarde reproche à Durkheim de réifier (chosifier) la société, en lui accordant une existence autonome illusoire : seuls les individus et leurs interactions existent réellement. La sociologie de l'<strong>interactionnisme symbolique</strong> (Blumer, Goffman) insiste sur le rôle actif des individus dans la construction du social. Anthony Giddens, dans sa <strong>théorie de la structuration</strong>, propose un dépassement : les structures sociales (contraignantes) ne préexistent pas aux pratiques individuelles, elles sont constamment reproduites par elles. Le couple structure/action remplace l'opposition externe/interne.</p>
        <p>Malgré ces critiques, le concept de fait social reste un outil analytique incontournable : il invite à ne pas réduire les phénomènes collectifs à des sommes de comportements individuels, à chercher les déterminants sociaux des pratiques que nous croyons librement choisies.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 3. fondements/action-sociale — L'action sociale
# ═══════════════════════════════════════════════════════════════════════════════

intro_action_sociale = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Weber et le sens de l'agir humain</p>
        </div>
      </div>
      <p class="resume-text">L'<strong>action sociale</strong> est le concept central de la sociologie compréhensive de Max Weber. Il désigne tout comportement humain auquel l'acteur attache un sens subjectif et qui est orienté vers le comportement d'autrui. Ce double critère — <em>sens subjectif</em> et <em>orientation vers autrui</em> — distingue l'action sociale d'un simple comportement réactif ou purement individuel.</p>
      <div class="highlight-box">
        <p><strong>La définition de Weber :</strong> « Nous appelons 'action' le comportement humain (peu importe qu'il s'agisse d'un acte extérieur ou intime, d'une omission ou d'une tolérance) quand et pour autant que l'agent ou les agents lui attachent un sens subjectif. Et 'action sociale', l'action qui, d'après son sens visé par l'agent ou les agents, se rapporte au comportement d'autrui. » (<em>Économie et Société</em>, 1921)</p>
      </div>
      <p class="resume-text">Là où Durkheim cherche à expliquer les comportements par des forces sociales extérieures à l'individu, Weber insiste sur la nécessité de <strong>comprendre</strong> (<em>Verstehen</em>) le sens que les acteurs donnent à leurs actions. Comprendre pour expliquer : la sociologie doit saisir les motivations subjectives avant de chercher des régularités causales.</p>
    </section>'''

contenu_action_sociale = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Comprendre l'action : types, sens et rationalisation</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La sociologie compréhensive : expliquer par la compréhension</h3>
        <p>Weber s'inscrit dans la tradition néo-kantienne allemande qui distingue les sciences de la nature (qui <em>expliquent</em> par des lois causales) et les sciences de la culture (qui <em>comprennent</em> le sens des phénomènes humains). Pour Weber, la sociologie doit combiner les deux démarches : elle comprend le sens subjectif des actions pour mieux les expliquer causalement. La méthode de la <strong>compréhension</strong> (<em>Verstehen</em>) peut être directe (saisir le sens d'un geste) ou explicative (saisir la motivation rationnelle ou émotionnelle qui anime l'acteur).</p>
        <p>Cette épistémologie implique un postulat d'individualisme méthodologique : pour Weber, seuls les individus agissent réellement. Les collectifs (l'État, la classe sociale, la nation) ne sont que des constructions analytiques désignant des régularités d'actions individuelles. Cette position s'oppose à l'holisme de Durkheim qui accorde une réalité propre aux faits collectifs.</p>

        <h3>Les quatre types idéaux d'action sociale</h3>
        <p>Weber construit une <strong>typologie</strong> des actions sociales selon leur mode de détermination, c'est-à-dire selon ce qui guide l'acteur.</p>
        <p>L'<strong>action rationnelle en finalité</strong> (<em>Zweckrationalität</em>) est celle de l'acteur qui choisit les moyens les mieux adaptés à une fin clairement définie, en évaluant les conséquences prévisibles de son action. L'entrepreneur qui maximise son profit, le joueur d'échecs qui calcule ses coups en constituent des exemples archétypaux.</p>
        <p>L'<strong>action rationnelle en valeur</strong> (<em>Wertrationalität</em>) est guidée par la croyance inconditionnelle en une valeur (honneur, devoir religieux, principe éthique) indépendamment des conséquences. Le soldat qui préfère mourir plutôt que de trahir ses camarades agit selon ce type.</p>
        <div class="highlight-box">
          <p><strong>Action affectuelle et action traditionnelle :</strong> L'<em>action affectuelle</em> est déterminée par les émotions et les états sentimentaux immédiats (la colère, l'amour, la peur). L'<em>action traditionnelle</em> est dictée par les habitudes et les coutumes intégrées de longue date : on agit ainsi parce qu'on a toujours agi ainsi. Ces deux types s'opposent aux deux premiers par leur moindre degré de conscience réflexive.</p>
        </div>
        <p>Ces quatre types sont des <strong>idéaux-types</strong> : dans la réalité, les actions concrètes combinent souvent plusieurs types. Aller voter peut relever à la fois de la tradition (je vote comme mes parents), de la valeur (la démocratie comme engagement) et du calcul rationnel (je soutiens le parti dont le programme me semble le plus efficace).</p>

        <h3>La rationalisation comme processus historique</h3>
        <p>Pour Weber, la modernité occidentale se caractérise par un processus de <strong>rationalisation</strong> progressive : l'extension de la rationalité en finalité à tous les domaines de la vie sociale (économie, droit, administration, science, musique même). Ce processus est lié à l'essor du <strong>capitalisme</strong>, lui-même issu, paradoxalement, de l'éthique protestante et de sa vision du travail comme vocation.</p>
        <p>Dans <em>L'Éthique protestante et l'esprit du capitalisme</em> (1905), Weber montre comment le calvinisme, en valorisant le travail rigoureux et l'accumulation comme signes de la grâce divine, a favorisé l'émergence d'un esprit capitaliste fondé sur la rationalité, l'épargne et l'investissement — non par calcul hédoniste, mais par vocation éthique.</p>

        <h3>Domination et légitimité</h3>
        <p>La théorie de l'action sociale articule avec celle de la domination. Pour Weber, toute domination implique que les dominés reconnaissent la légitimité de ceux qui commandent. Il distingue trois types purs de domination légitime. La domination <strong>légale-rationnelle</strong> (fondée sur des règles impersonnelles — l'État moderne, la bureaucratie). La domination <strong>traditionnelle</strong> (fondée sur la coutume et le respect des anciens — la monarchie patriarcale). La domination <strong>charismatique</strong> (fondée sur les qualités personnelles extraordinaires reconnues au chef — le prophète, le tribun révolutionnaire).</p>
        <div class="highlight-box">
          <p><strong>La cage d'acier :</strong> Weber redoute que la rationalisation généralisée aboutisse à une « cage d'acier » bureaucratique où l'homme moderne, libéré des tutelles traditionnelles et religieuses, serait emprisonné dans un système rationnel mais vide de sens — le « désenchantement du monde ». Cette analyse préfigure les critiques de la rationalité instrumentale développées par l'École de Francfort (Horkheimer, Adorno).</p>
        </div>

        <h3>Héritages et débats contemporains</h3>
        <p>La sociologie de Weber a nourri de nombreux courants. La <strong>sociologie de l'acteur rationnel</strong> (Raymond Boudon, James Coleman) reprend l'individualisme méthodologique wébérien et la rationalité en finalité pour expliquer les phénomènes collectifs à partir d'agrégats de choix individuels. La <strong>sociologie des organisations</strong> s'appuie sur l'analyse wébérienne de la bureaucratie. La <strong>sociologie des religions</strong> (analyse comparée des grandes religions du monde) constitue le chantier empirique majeur de son œuvre tardive.</p>
        <p>Les critiques soulignent les limites du modèle : la rationalité supposée des acteurs est souvent limitée (Herbert Simon parle de « rationalité limitée »), les acteurs n'ont pas toujours conscience des déterminants sociaux de leurs actions (Bourdieu). La tension entre approche compréhensive (centrée sur le sens) et approche explicative (centrée sur les causes) reste au cœur des débats épistémologiques de la sociologie contemporaine.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 4. fondements/methodes — Méthodes sociologiques
# ═══════════════════════════════════════════════════════════════════════════════

intro_methodes = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Comment la sociologie produit ses connaissances</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>méthodes sociologiques</strong> désignent l'ensemble des outils et des procédures par lesquels la sociologie produit des connaissances scientifiques sur la société. Enquêtes par questionnaire, entretiens, observation participante, analyse statistique, ethnographie : la diversité méthodologique de la sociologie reflète la complexité de son objet — le social — et les débats épistémologiques qui traversent la discipline.</p>
      <div class="highlight-box">
        <p><strong>Méthodes quantitatives et qualitatives :</strong> La sociologie mobilise deux grandes familles de méthodes. Les méthodes <em>quantitatives</em> (statistiques, enquêtes par questionnaire) visent à mesurer des phénomènes et à en dégager des régularités sur de grands échantillons. Les méthodes <em>qualitatives</em> (entretiens, observation, ethnographie) cherchent à comprendre en profondeur le sens des pratiques et des représentations. Ces deux approches sont complémentaires et sont souvent articulées dans une même recherche.</p>
      </div>
      <p class="resume-text">La question des méthodes est indissociable de la question de l'<strong>épistémologie</strong> : qu'est-ce que la connaissance sociologique ? Quelles sont ses conditions de validité ? Comment le sociologue peut-il produire des résultats objectifs sur une réalité sociale dont il fait lui-même partie ?</p>
    </section>'''

contenu_methodes = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Les outils du sociologue : de l'enquête à l'ethnographie</p>
        </div>
      </div>
      <div class="course-content">
        <h3>L'enquête par questionnaire</h3>
        <p>L'enquête par questionnaire (ou <strong>sondage sociologique</strong>) consiste à recueillir, sur un échantillon représentatif d'une population, des réponses standardisées à des questions fermées ou ouvertes. Elle permet de mesurer des attitudes, des pratiques et des opinions à grande échelle, et d'établir des corrélations statistiques entre variables.</p>
        <p>La construction du questionnaire est une opération délicate : le choix des mots, l'ordre des questions, les modalités de réponse influencent les résultats. La technique de l'<strong>échantillonnage</strong> est cruciale : un échantillon aléatoire ou stratifié représentatif de la population étudiée est nécessaire pour généraliser les résultats. Les grandes enquêtes nationales (INSEE, enquêtes européennes) mobilisent des milliers de répondants et permettent des analyses statistiques sophistiquées.</p>
        <div class="highlight-box">
          <p><strong>La Distinction de Bourdieu (1979) :</strong> L'enquête sur les goûts et pratiques culturelles menée par Pierre Bourdieu et son équipe est l'une des grandes enquêtes par questionnaire de la sociologie française. En croisant les goûts musicaux, les pratiques sportives ou les préférences artistiques avec la position sociale, Bourdieu montre que les « goûts » — supposément individuels et libres — sont fortement déterminés par l'appartenance de classe et le capital culturel.</p>
        </div>

        <h3>L'entretien sociologique</h3>
        <p>L'entretien est une méthode qualitative fondée sur une interaction directe entre le chercheur et un ou plusieurs enquêtés. On distingue plusieurs types. L'<strong>entretien directif</strong> suit un questionnaire rigide (proche du questionnaire oral). L'<strong>entretien semi-directif</strong> s'organise autour d'un guide de thèmes, laissant à l'enquêté la liberté de développer ses réponses. L'<strong>entretien non directif</strong> (ou centré sur la personne, inspiré de Rogers) donne l'initiative à l'enquêté avec une relance minimale du chercheur.</p>
        <p>L'entretien permet d'accéder aux <strong>représentations</strong>, aux <strong>trajectoires biographiques</strong> et aux <strong>logiques d'action</strong> des acteurs. Son analyse implique la transcription et le codage des verbatims. La <strong>saturation théorique</strong> (Glaser et Strauss) désigne le moment où de nouveaux entretiens n'apportent plus d'informations nouvelles : c'est le critère d'arrêt de la collecte.</p>

        <h3>L'observation et l'ethnographie</h3>
        <p>L'observation directe consiste à observer des situations sociales sans y participer activement. L'<strong>observation participante</strong> implique que le chercheur s'intègre au groupe étudié, partage ses activités et s'efforce de comprendre de l'intérieur les pratiques et les significations du groupe. Cette méthode, développée par l'anthropologie (Malinowski) et l'École de Chicago (Nels Anderson, William Foote Whyte), est au cœur de l'<strong>ethnographie</strong> sociologique.</p>
        <p>L'ethnographie implique un séjour prolongé sur le terrain, une immersion dans le groupe étudié, la tenue d'un journal de terrain et une attention aux détails de la vie quotidienne. Des travaux classiques comme <em>Street Corner Society</em> de Whyte (1943) ou, en France, les enquêtes de terrain de Pierre Bourdieu en Algérie ou de Michel de Certeau sur les pratiques ordinaires ont marqué cette tradition.</p>
        <div class="highlight-box">
          <p><strong>Le problème de la réflexivité :</strong> Tout sociologue occupe une position sociale qui influence son regard. La <em>réflexivité</em> (Bourdieu, Giddens) désigne l'exigence de prendre conscience de cette position et de ses effets sur la recherche. Comment observer « objectivement » un milieu dans lequel on est immergé ? Comment éviter que les préjugés du chercheur n'infléchissent l'interprétation des données ? Ces questions traversent l'ensemble de la démarche ethnographique.</p>
        </div>

        <h3>Les méthodes statistiques et l'analyse des données</h3>
        <p>La sociologie quantitative mobilise un large arsenal statistique. L'<strong>analyse uni-variée</strong> décrit la distribution d'une variable (fréquences, moyennes, médianes). L'<strong>analyse bi-variée</strong> étudie les relations entre deux variables (tableaux de contingence, corrélations). L'<strong>analyse multi-variée</strong> (régression, analyse factorielle, analyse de correspondances multiples) permet de contrôler simultanément l'effet de plusieurs variables et d'identifier les facteurs les plus déterminants.</p>
        <p>L'<strong>Analyse des Correspondances Multiples</strong> (ACM), popularisée par Bourdieu dans <em>La Distinction</em>, permet de représenter graphiquement les relations entre de nombreuses variables catégorielles et de dégager des « espaces sociaux » structurés par des oppositions fondamentales (capital économique vs capital culturel).</p>

        <h3>Épistémologie : objectivité et réflexivité</h3>
        <p>La question de l'objectivité en sociologie est un enjeu épistémologique majeur. Pour Weber, la sociologie peut et doit viser l'objectivité, mais elle part nécessairement de <strong>choix de valeurs</strong> qui orientent la sélection des objets d'étude (le <em>rapport aux valeurs</em> ou <em>Wertbeziehung</em>). Une fois l'objet choisi, l'analyse doit être conduite avec une rigueur excluant les jugements de valeur personnels (la <em>neutralité axiologique</em> ou <em>Wertfreiheit</em>).</p>
        <p>Bourdieu va plus loin avec son concept de <strong>réflexivité</strong> : le sociologue doit soumettre sa propre pratique scientifique à l'analyse sociologique, en identifiant les dispositions (habitus) et les positions (dans le champ académique) qui influencent son travail. Cette démarche réflexive n'est pas un aveu d'incapacité à l'objectivité, mais la condition même d'une objectivité plus rigoureuse.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 5. fondements/socialisation — La socialisation
# ═══════════════════════════════════════════════════════════════════════════════

intro_socialisation = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Comment nous devenons membres d'une société</p>
        </div>
      </div>
      <p class="resume-text">La <strong>socialisation</strong> désigne le processus par lequel un individu intériorise les normes, les valeurs, les croyances et les pratiques de sa société, et acquiert ainsi les compétences sociales qui lui permettent d'interagir avec autrui. Ce processus, qui commence dès la naissance et se poursuit tout au long de la vie, est au cœur de la question sociologique fondamentale : comment des individus biologiquement distincts deviennent-ils des êtres sociaux capables de vivre ensemble ?</p>
      <div class="highlight-box">
        <p><strong>Deux conceptions de la socialisation :</strong> La tradition durkheimienne insiste sur la dimension <em>contraignante</em> de la socialisation : la société « façonne » l'individu selon ses normes. La tradition interactionniste (Mead, Goffman) souligne davantage la dimension <em>active</em> du sujet qui, dans ses interactions avec autrui, construit son identité. Ces deux perspectives ne s'excluent pas mais mettent l'accent sur des dimensions complémentaires du même processus.</p>
      </div>
      <p class="resume-text">La sociologie de la socialisation permet de comprendre la <strong>reproduction sociale</strong> (comment les inégalités et les cultures se transmettent de génération en génération) mais aussi les phénomènes de <strong>changement</strong> et d'<strong>innovation</strong> sociale (comment de nouveaux modèles culturels émergent et se diffusent).</p>
    </section>'''

contenu_socialisation = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Les mécanismes et les instances de socialisation</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Socialisation primaire et secondaire</h3>
        <p>Peter Berger et Thomas Luckmann (<em>La Construction sociale de la réalité</em>, 1966) distinguent deux phases de la socialisation. La <strong>socialisation primaire</strong> est celle de l'enfance : l'individu y intériorise son premier « monde » (langue maternelle, valeurs familiales, premières catégories de pensée) à travers ses relations avec ses proches, chargées d'un fort investissement affectif. Ce premier monde est perçu comme la réalité « évidente » et naturelle. La <strong>socialisation secondaire</strong> se déroule à l'adolescence et à l'âge adulte : intériorisation de « sous-mondes institutionnels » (l'école, le monde professionnel, les institutions religieuses, les groupes de pairs). Elle est moins totale et moins affectivement investie que la socialisation primaire.</p>
        <p>Cette distinction éclaire les phénomènes de <strong>resocialisation</strong> : quand un individu passe d'un monde social à un autre très différent (conversion religieuse, migration, entrée en prison), il doit désapprendre une partie de ses dispositions premières et en acquérir de nouvelles.</p>

        <h3>Les instances de socialisation</h3>
        <p>La <strong>famille</strong> est l'instance de socialisation primaire par excellence. Elle transmet langue, valeurs, normes de comportement, goûts culturels et, chez Bourdieu, une partie du <strong>capital culturel</strong>. Les styles éducatifs familiaux varient selon la classe sociale : Annette Lareau distingue le <em>façonnement concerté</em> des classes moyennes supérieures (activités organisées, dialogue, développement de compétences) et la <em>croissance naturelle</em> des classes populaires (plus d'autonomie, moins de stimulation explicite).</p>
        <p>L'<strong>école</strong> est la grande instance de socialisation secondaire des sociétés modernes. Au-delà de la transmission de savoirs, elle inculque des normes de comportement, une culture légitime et un rapport au monde (Bourdieu et Passeron parlent de « violence symbolique » pour décrire l'imposition de la culture dominante). Les <strong>groupes de pairs</strong> — particulièrement importants à l'adolescence — constituent une instance de socialisation horizontale qui peut renforcer ou contredire les socialisations familiale et scolaire.</p>
        <div class="highlight-box">
          <p><strong>Les médias et la socialisation numérique :</strong> Les médias de masse, puis les réseaux sociaux numériques, constituent une instance de socialisation croissante. L'exposition prolongée à des modèles culturels, des représentations de genre, des normes de beauté ou des visions du monde transmises par les écrans contribue à façonner les identités, les goûts et les valeurs — particulièrement chez les jeunes générations.</p>
        </div>

        <h3>La socialisation selon Bourdieu : l'habitus</h3>
        <p>Pour Bourdieu, la socialisation produit un <strong>habitus</strong> : un système de dispositions durables et transposables — façons de voir, de penser, d'agir, de sentir — intériorisées au cours de la socialisation primaire et ajustées en permanence par les expériences ultérieures. L'habitus est « structuré » (il porte la marque des conditions sociales dans lesquelles il s'est formé) et « structurant » (il génère des pratiques adaptées à ces conditions sans délibération consciente).</p>
        <p>L'habitus explique la <strong>reproduction sociale</strong> : les enfants de milieux favorisés intériorisent des dispositions (aisance avec la culture légitime, rapport au temps, à l'avenir) qui leur donnent un avantage dans les champs scolaire et professionnel. Les enfants de milieux populaires intériorisent des dispositions différentes qui, sans être inférieures, sont moins valorisées par les institutions dominantes.</p>

        <h3>L'identité sociale et la socialisation selon Mead</h3>
        <p>George Herbert Mead (<em>Mind, Self and Society</em>, 1934) développe une conception interactionniste de la socialisation. Pour Mead, le <strong>soi</strong> (<em>self</em>) ne préexiste pas aux interactions sociales : il se construit dans le jeu avec autrui. L'enfant passe d'un stade de <em>play</em> (imitation de rôles spécifiques — jouer à la maman) à un stade de <em>game</em> (intériorisation de la perspective de l'ensemble des participants — le jeu d'équipe) pour finalement intérioriser la perspective de l'<strong>autrui généralisé</strong> : les attentes générales de la société.</p>
        <p>Mead distingue le <em>I</em> (la dimension spontanée, créative, imprévisible du soi) et le <em>me</em> (la dimension socialisée, intériorisée des attentes d'autrui). La tension entre ces deux pôles constitue la dynamique du sujet social : ni pur conformisme, ni pur individualisme, mais articulation permanente entre contrainte sociale intériorisée et initiatives individuelles.</p>

        <h3>Socialisation et inégalités de genre</h3>
        <p>La socialisation est un mécanisme central de reproduction des inégalités de genre. Dès la petite enfance, les garçons et les filles sont socialisés différemment : choix des jouets, des couleurs, des activités, des modèles de comportement valorisés diffèrent selon le sexe. Ces différences, présentées comme « naturelles », sont en réalité des constructions sociales qui reproduisent une division genrée des rôles, des émotions légitimes et des aspirations.</p>
        <p>Les travaux de Judith Butler sur la <strong>performativité du genre</strong> montrent que le genre n'est pas une essence fixe mais une performance répétée et socialement normée : nous « faisons » notre genre (we do gender) dans chaque interaction quotidienne, en conformité avec les normes attendues. La socialisation de genre peut être remise en cause, mais cette remise en cause implique des coûts sociaux (stigmatisation, rejet).</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 6. structures/classes-sociales — Classes sociales
# ═══════════════════════════════════════════════════════════════════════════════

intro_classes = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Analyser la stratification sociale</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>classes sociales</strong> désignent des groupements d'individus partageant une position similaire dans la structure sociale, définie par des conditions d'existence communes (niveau de revenus, type d'emploi, niveau d'éducation) et, souvent, par des pratiques culturelles, des valeurs et des intérêts convergents. La question des classes sociales est centrale depuis les origines de la sociologie, opposant deux grandes traditions : marxiste (les classes comme groupes définis par leur rapport aux moyens de production) et wébérienne (les classes comme groupes définis par leurs chances de vie sur le marché).</p>
      <div class="highlight-box">
        <p><strong>Classes « en soi » et classes « pour soi » :</strong> Marx distingue la classe <em>en soi</em> (un groupement objectif de personnes partageant la même position économique) et la classe <em>pour soi</em> (un acteur collectif conscient de ses intérêts et capable d'action politique). L'enjeu n'est pas seulement analytique mais politique : quand les ouvriers prennent conscience de leur condition commune, la classe devient un sujet historique.</p>
      </div>
      <p class="resume-text">Les débats contemporains portent sur la <strong>persistance ou le déclin</strong> des classes sociales : la montée des classes moyennes, la diversification des modes de vie et l'individualisation des trajectoires ont-elles fait disparaître les anciennes frontières de classe, ou celles-ci se sont-elles simplement transformées et déplacées ?</p>
    </section>'''

contenu_classes = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>De Marx à Bourdieu : théories et évolutions des classes sociales</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La conception marxiste : classes et rapports de production</h3>
        <p>Pour Marx, les classes sociales sont définies par les <strong>rapports de production</strong> : la relation qu'entretiennent les individus avec les moyens de production (terre, machines, capitaux). Dans le mode de production capitaliste, deux classes fondamentales s'affrontent : la <strong>bourgeoisie</strong> (qui possède les moyens de production) et le <strong>prolétariat</strong> (qui ne possède que sa force de travail qu'il est contraint de vendre). Cette relation est fondamentalement antagoniste : la plus-value extraite du travail ouvrier constitue le profit capitaliste.</p>
        <p>Marx reconnaît l'existence d'autres groupes (paysans, petite-bourgeoisie, lumpen-prolétariat), mais les considère comme des résidus des modes de production antérieurs ou des fractions instables appelées à se résorber. L'histoire est celle de la polarisation croissante entre les deux classes fondamentales, conduisant à la révolution prolétarienne.</p>
        <div class="highlight-box">
          <p><strong>La conscience de classe :</strong> Pour Marx, la classe en soi devient classe pour soi quand les membres d'une classe prennent conscience de leurs intérêts communs et s'organisent collectivement pour les défendre. Cette conscience n'est pas automatique : elle peut être retardée par l'<em>idéologie</em> (les représentations que la classe dominante impose comme « naturelles » pour masquer les rapports d'exploitation) ou par la <em>fausse conscience</em> (l'adhésion des dominés aux valeurs des dominants).</p>
        </div>

        <h3>La conception wébérienne : classe, statut et parti</h3>
        <p>Weber raffine l'analyse marxiste en distinguant trois dimensions de la stratification sociale. La <strong>classe</strong> désigne la situation de marché : les chances de vie que confèrent la possession de biens et la qualification professionnelle sur le marché du travail et des marchandises. Le <strong>statut social</strong> (<em>Stand</em>) désigne l'honneur social, la considération accordée à un groupe indépendamment de sa position économique (les nobles peuvent être pauvres mais jouir d'un prestige élevé). Le <strong>parti</strong> désigne l'organisation collective en vue de la conquête du pouvoir.</p>
        <p>Ces trois dimensions peuvent se combiner de manières diverses et ne coïncident pas nécessairement. Un professeur d'université jouit d'un statut élevé mais perçoit un revenu modeste. Un nouveau riche possède un capital économique important mais n'a pas encore acquis le capital culturel correspondant. Cette multidimensionnalité est reprise et développée par Bourdieu.</p>

        <h3>Bourdieu et l'espace social</h3>
        <p>Pierre Bourdieu propose dans <em>La Distinction</em> (1979) une théorie tridimensionnelle des classes. L'espace social est structuré par le <strong>volume global de capital</strong> (plus ou moins riche en ressources valorisées), la <strong>structure du capital</strong> (dominance du capital économique vs capital culturel) et la <strong>trajectoire sociale</strong> (ascendante ou descendante). Les classes ne sont pas des groupes réels mais des positions dans cet espace, réunissant des individus qui ont de fortes chances d'avoir des conditions d'existence et des dispositions similaires.</p>
        <p>Bourdieu distingue la <strong>bourgeoisie</strong> (riche en capital économique — patrons, banquiers) des <strong>fractions intellectuelles</strong> (riches en capital culturel — professeurs, artistes), et les <strong>classes moyennes</strong> (en ascension, cherchant à convertir leurs ressources) des <strong>classes populaires</strong> (faibles en capital économique et culturel). Les goûts, les pratiques culturelles et les modes de vie reflètent et renforcent ces positions : c'est la <strong>distinction</strong> — le mécanisme par lequel les classes se différencient symboliquement.</p>

        <h3>Les classes sociales aujourd'hui : persistance ou déclin ?</h3>
        <p>À partir des années 1980, plusieurs sociologues ont annoncé « la mort des classes sociales » (Clark, Pakulski, Waters). L'individualisation des modes de vie, la montée des classes moyennes, la fragmentation des identités collectives rendraient obsolète le concept de classe. Les nouvelles lignes de fracture seraient le genre, la race, le territoire, les modes de vie — pas la position économique.</p>
        <p>Mais d'autres analyses montrent la <strong>persistance des inégalités de classe</strong>. En France, les travaux de Louis Chauvel sur le « destin des générations » montrent que la mobilité sociale s'est ralentie depuis les années 1980. Les travaux d'Éric Maurin sur la ségrégation résidentielle montrent que les catégories sociales restent fortement entre elles. Thomas Piketty, dans <em>Le Capital au XXIe siècle</em> (2013), documente le retour des inégalités patrimoniales à des niveaux du début du XXe siècle.</p>
        <div class="highlight-box">
          <p><strong>Les nouvelles fractures de classe :</strong> Les travaux récents (Christophe Guilluy, Didier Eribon, Édouard Louis) mettent en lumière une fracture entre les gagnants et les perdants de la mondialisation — entre métropoles aisées et périphéries déclassées. La « France périphérique » ou les « oubliés de la République » désignent ces fractions des classes populaires dont les conditions de vie se sont dégradées et qui se sentent abandonnées par les élites politiques et culturelles.</p>
        </div>

        <h3>Genre, race et classe : les intersections</h3>
        <p>La théorie de l'<strong>intersectionnalité</strong> (Kimberlé Crenshaw, 1989) souligne que les inégalités de classe, de genre et de race ne s'additionnent pas simplement mais s'articulent de manière complexe. Une femme noire des classes populaires ne vit pas une triple discrimination séparée, mais une expérience spécifique produite par l'intersection de ces trois positions. Cette perspective enrichit l'analyse des classes sociales en montrant que les positions de classe sont toujours vécues à travers le prisme du genre et de la race.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 7. structures/inegalites — Inégalités
# ═══════════════════════════════════════════════════════════════════════════════

intro_inegalites = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les formes et mécanismes des inégalités sociales</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>inégalités sociales</strong> désignent les différences entre individus ou groupes sociaux qui confèrent des avantages ou des désavantages dans l'accès aux ressources valorisées (revenus, patrimoine, éducation, santé, prestige). Ces différences sont <em>sociales</em> — c'est-à-dire produites et reproduites par des mécanismes sociaux — et non simplement naturelles ou individuelles. La sociologie s'attache à décrire, mesurer et expliquer ces inégalités, ainsi qu'à analyser leurs effets sur les trajectoires individuelles et la cohésion sociale.</p>
      <div class="highlight-box">
        <p><strong>Inégalités économiques et inégalités culturelles :</strong> Les inégalités ne se réduisent pas aux écarts de revenus ou de patrimoine. Bourdieu montre que les inégalités de <em>capital culturel</em> (diplômes, savoirs, rapport à la culture légitime) sont aussi décisives que les inégalités économiques dans la reproduction des positions sociales. Les inégalités de santé, territoriales, de genre et raciales constituent d'autres dimensions irréductibles à la seule dimension économique.</p>
      </div>
      <p class="resume-text">Les inégalités soulèvent une question normative fondamentale : lesquelles sont <strong>justes</strong> ou acceptables ? Rawls, Walzer, Dubet débattent des principes de justice sociale qui permettraient de distinguer inégalités légitimes et injustices à corriger.</p>
    </section>'''

contenu_inegalites = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Mesurer, expliquer et contester les inégalités</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Les dimensions des inégalités</h3>
        <p>Les inégalités économiques sont les plus mesurées. L'<strong>indice de Gini</strong> mesure l'inégalité de distribution des revenus ou des patrimoines : 0 signifie l'égalité parfaite, 1 la concentration totale. En France, le Gini des revenus est d'environ 0,29, celui des patrimoines dépasse 0,65. Thomas Piketty (<em>Le Capital au XXIe siècle</em>, 2013) montre que les inégalités patrimoniales atteignent des niveaux proches de la Belle Époque dans de nombreux pays développés, alimentés par un rendement du capital supérieur à la croissance économique.</p>
        <p>Les <strong>inégalités d'éducation</strong> sont fortement corrélées aux inégalités économiques : l'origine sociale prédit le niveau d'études atteint. En France, 80 % des enfants de cadres obtiennent le bac, contre 40 % des enfants d'ouvriers (données INSEE). Les <strong>inégalités de santé</strong> sont frappantes : l'espérance de vie à 35 ans d'un cadre est supérieure de 6 à 7 ans à celle d'un ouvrier. Les <strong>inégalités territoriales</strong> opposent centres métropolitains et périphéries rurales ou banlieues défavorisées.</p>
        <div class="highlight-box">
          <p><strong>La courbe de Kuznets et le débat sur la convergence :</strong> L'économiste Simon Kuznets proposait en 1955 une courbe en U inversé : au cours du développement économique, les inégalités augmentent d'abord puis diminuent. Cette théorie optimiste (le développement réduit les inégalités) a été largement infirmée par les données empiriques des dernières décennies, qui montrent une augmentation des inégalités y compris dans les pays riches.</p>
        </div>

        <h3>Les mécanismes de reproduction des inégalités</h3>
        <p>La sociologie cherche à expliquer comment les inégalités se <strong>reproduisent</strong> d'une génération à l'autre. Bourdieu et Passeron (<em>La Reproduction</em>, 1970) montrent que l'école, loin d'être une institution méritocratique, reproduit les inégalités sociales en valorisant le capital culturel des classes dominantes. La <strong>violence symbolique</strong> désigne l'imposition de ce biais comme légitime et naturel : les élèves de milieux favorisés réussissent mieux, non parce qu'ils sont plus intelligents, mais parce que leur culture familiale est plus proche de la culture scolaire valorisée.</p>
        <p>Raymond Boudon propose une explication concurrente fondée sur des <strong>choix rationnels</strong> (théorie des effets de composition) : les inégalités scolaires s'expliquent par des calculs coûts/bénéfices différents selon la position sociale. Pour un enfant de milieu populaire, les études longues représentent un risque plus grand et un bénéfice relatif moindre que pour un enfant de cadre qui risque le déclassement en n'étudiant pas. Ces effets « primaires » (différences de niveau) et « secondaires » (différences de choix à niveau égal) se cumulent.</p>

        <h3>Inégalités de genre</h3>
        <p>Les inégalités entre femmes et hommes constituent une dimension fondamentale de la stratification sociale. Le <strong>plafond de verre</strong> désigne les obstacles invisibles qui freinent l'accès des femmes aux postes de direction. L'<strong>écart salarial de genre</strong> (gender pay gap) reste significatif : en France, les femmes gagnent en moyenne 17 % de moins que les hommes à temps plein, et 24 % de moins toutes durées confondues. Ces écarts s'expliquent par la ségrégation sectorielle (les femmes sont surreprésentées dans des secteurs moins bien rémunérés), le temps partiel subi, les interruptions de carrière liées aux enfants et une discrimination directe.</p>
        <p>Le concept de <strong>care</strong> (sollicitude, soin) développé par Joan Tronto met en lumière une forme d'inégalité souvent invisible : le travail domestique et le soin aux personnes dépendantes, massivement assurés par les femmes et largement non rémunérés, constituent une contribution économique considérable que les indicateurs standard ne mesurent pas.</p>

        <h3>Discrimination et inégalités ethniques</h3>
        <p>Les inégalités liées à l'appartenance à des groupes ethniques ou racisés constituent une dimension majeure des inégalités contemporaines. En France, les <strong>discriminations à l'embauche</strong> ont été documentées par des méthodes de testing (CV identiques avec des noms à consonance différente) : les candidats portant des noms d'origine maghrébine ou africaine sont significativement moins souvent convoqués en entretien. Ces discriminations ne s'expliquent pas seulement par des différences de capital humain mais par des mécanismes de stéréotypage et de préjugé institutionnalisés.</p>
        <div class="highlight-box">
          <p><strong>La ségrégation résidentielle :</strong> Éric Maurin (<em>Le Ghetto français</em>, 2004) montre que la France connaît une forte ségrégation résidentielle selon l'origine sociale et ethnique. La concentration spatiale des ménages pauvres et des populations immigrées dans certaines zones urbaines (les « quartiers sensibles ») reproduit et amplifie les inégalités initiales : mauvaises écoles, accès réduit aux réseaux professionnels, effets de stigmatisation territoriale.</p>
        </div>

        <h3>Justice sociale et inégalités acceptables</h3>
        <p>La question normative — quelles inégalités sont justes ? — est au cœur des théories de la justice sociale. John Rawls (<em>Théorie de la justice</em>, 1971) propose le <strong>principe de différence</strong> : les seules inégalités justifiables sont celles qui améliorent la situation des plus défavorisés. François Dubet (<em>Les Places et les chances</em>, 2010) distingue deux conceptions de la justice : l'<strong>égalité des places</strong> (réduire les écarts entre les positions sociales) et l'<strong>égalité des chances</strong> (assurer que chacun puisse accéder à toutes les positions selon son mérite). Ces deux idéaux ne sont pas synonymes et peuvent même entrer en tension.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 8. structures/institutions — Institutions
# ═══════════════════════════════════════════════════════════════════════════════

intro_institutions = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Les cadres stables qui structurent la vie sociale</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>institutions sociales</strong> désignent les structures stables et durables qui organisent la vie collective : la famille, l'école, l'État, la religion, le marché, la justice. Elles définissent des rôles, des normes et des attentes qui guident les comportements individuels et assurent la coordination des actions sociales. Sans institutions, pas de société durable : elles constituent le squelette de l'ordre social.</p>
      <div class="highlight-box">
        <p><strong>Institutions et normes :</strong> Une institution sociale ne se réduit pas à un bâtiment ou à une organisation formelle. C'est un ensemble de règles, de rôles et de normes partagées qui encadrent un domaine de la vie sociale. La famille est une institution même si chaque famille concrète est unique. Le mariage est une institution même si ses formes varient selon les cultures et les époques.</p>
      </div>
      <p class="resume-text">Les institutions sont à la fois <strong>contraignantes</strong> (elles s'imposent aux individus) et <strong>habilitantes</strong> (elles leur donnent les ressources pour agir). Leur analyse soulève la question du <strong>changement institutionnel</strong> : comment des structures aussi stables évoluent-elles ? Comment émergent de nouvelles institutions ?</p>
    </section>'''

contenu_institutions = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Famille, école, État, religion : les grandes institutions en sociologie</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Qu'est-ce qu'une institution ?</h3>
        <p>La notion d'institution est polysémique. Dans un sens large, Émile Durkheim appelle institution « toutes les croyances et tous les modes de conduite institués par la collectivité ». Dans un sens plus restreint, les institutions désignent des organisations formalisées (l'École nationale d'administration, l'Église catholique). Pour les néo-institutionnalistes (DiMaggio, Powell), les institutions sont des « règles du jeu » largement partagées qui structurent les interactions — formelles (lois, règlements) ou informelles (normes de politesse, conventions).</p>
        <p>Berger et Luckmann (<em>La Construction sociale de la réalité</em>, 1966) montrent comment les institutions émergent : par l'<strong>habitualisation</strong> (la répétition de pratiques qui se routinisent), puis la <strong>typification</strong> (les acteurs se définissent mutuellement des types de comportements attendus), puis l'<strong>objectivation</strong> (ces pratiques typifiées prennent une réalité objective qui s'impose aux générations suivantes comme allant de soi). Cette genèse montre que les institutions sont des constructions sociales, même si elles s'imposent aux individus comme des réalités extérieures.</p>
        <div class="highlight-box">
          <p><strong>Isomorphisme institutionnel (DiMaggio et Powell) :</strong> Les organisations tendent à se ressembler non par souci d'efficacité mais par conformité aux normes institutionnelles dominantes. L'isomorphisme <em>coercitif</em> résulte de pressions réglementaires, l'isomorphisme <em>mimétique</em> de l'imitation des « meilleures pratiques », l'isomorphisme <em>normatif</em> de la professionnalisation des acteurs. Ce cadre explique pourquoi les organisations d'un même secteur convergent vers des formes similaires.</p>
        </div>

        <h3>La famille : une institution en transformation</h3>
        <p>La famille est une institution universelle mais dont les formes varient considérablement selon les cultures et les époques. En Europe occidentale, le modèle dominant a longtemps été la <strong>famille nucléaire</strong> (couple marié avec enfants), fondée sur le mariage religieux et la division genrée des rôles (homme pourvoyeur, femme au foyer). Depuis les années 1960-1970, les transformations sont profondes : montée du divorce et des familles monoparentales, développement des unions libres et du PACS, légalisation du mariage homosexuel, baisse de la fécondité, multiplication des familles recomposées.</p>
        <p>Ces transformations témoignent d'un processus d'<strong>individualisation</strong> (Anthony Giddens parle de « relation pure », fondée sur l'épanouissement mutuel plutôt que sur l'obligation traditionnelle) mais aussi de persistance des inégalités de genre au sein des familles (répartition inégale du travail domestique et parental).</p>

        <h3>L'école : reproduction et émancipation</h3>
        <p>L'institution scolaire remplit plusieurs fonctions sociales. Selon Durkheim, elle <strong>intègre</strong> les individus à la société en transmettant les valeurs communes. Selon les fonctionnalistes américains (Parsons), elle <strong>sélectionne</strong> et <strong>alloue</strong> les individus aux positions sociales selon leurs mérites. Pour Bourdieu, elle <strong>reproduit</strong> les inégalités sociales en les légitimant comme méritocratiques.</p>
        <p>L'analyse de Bourdieu et Passeron (<em>Les Héritiers</em>, 1964 ; <em>La Reproduction</em>, 1970) montre que l'école favorise structurellement les enfants des classes cultivées en valorisant un rapport au savoir, un style linguistique et des dispositions qui sont ceux de la culture bourgeoise. La <strong>violence symbolique</strong> — l'imposition de cet arbitraire culturel comme culture légitime universelle — est d'autant plus efficace qu'elle est méconnue comme telle.</p>

        <h3>L'État et ses institutions</h3>
        <p>L'État est l'institution politique centrale des sociétés modernes. Weber le définit par le <strong>monopole de la violence physique légitime</strong> : seul l'État peut légitimement exercer la contrainte physique sur son territoire. Les institutions étatiques (justice, police, armée, administrations) assurent l'ordre social et la mise en œuvre des politiques publiques.</p>
        <p>La sociologie de l'État examine les formes de domination qu'il incarne, ses rapports avec d'autres champs sociaux (économique, religieux, culturel) et ses modes de légitimation. Foucault analyse les institutions étatiques comme des dispositifs de <strong>pouvoir disciplinaire</strong> : l'école, la prison, l'hôpital psychiatrique constituent des espaces de normalisation des comportements qui produisent des sujets dociles et productifs.</p>
        <div class="highlight-box">
          <p><strong>L'État et le welfare state :</strong> L'État-providence (<em>welfare state</em>) désigne l'ensemble des politiques sociales (assurance maladie, retraites, allocations chômage, aides familiales) par lesquelles l'État protège les individus contre les risques sociaux majeurs. Gøsta Esping-Andersen (<em>The Three Worlds of Welfare Capitalism</em>, 1990) distingue trois régimes d'État-providence : libéral (États-Unis), conservateur-corporatiste (Allemagne, France) et social-démocrate (pays scandinaves).</p>
        </div>

        <h3>Religion et sécularisation</h3>
        <p>La religion constitue une institution fondamentale dans l'analyse de Durkheim (<em>Les Formes élémentaires de la vie religieuse</em>, 1912) : elle produit du sacré, de la cohésion collective et des représentations du monde partagées. Weber s'intéresse aux <strong>éthiques économiques des religions mondiales</strong> : comment les valeurs religieuses influencent-elles les comportements économiques ?</p>
        <p>La sécularisation — le recul de l'influence sociale des religions dans les sociétés modernes — a longtemps été considérée comme un processus irréversible lié à la modernité. Cette thèse est aujourd'hui nuancée : si la pratique religieuse traditionnelle décline en Europe occidentale, les recompositions du croire (spiritualité diffuse, syncrétisme) et les phénomènes de revivalisme religieux (évangélisme aux États-Unis, islam politique) montrent que la religion reste une force sociale majeure.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 9. structures/mobilite-sociale — Mobilité sociale
# ═══════════════════════════════════════════════════════════════════════════════

intro_mobilite = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Peut-on changer de position sociale ?</p>
        </div>
      </div>
      <p class="resume-text">La <strong>mobilité sociale</strong> désigne le changement de position d'un individu ou d'un groupe dans la hiérarchie sociale, soit au cours de sa propre vie (<strong>mobilité intra-générationnelle</strong>), soit d'une génération à l'autre (<strong>mobilité inter-générationnelle</strong>). Mesurer la mobilité sociale, c'est évaluer dans quelle mesure une société est <strong>ouverte</strong> — permettant aux individus de s'élever ou de descendre dans la hiérarchie sociale indépendamment de leur origine — ou <strong>fermée</strong> — reproduisant les positions sociales d'une génération à l'autre.</p>
      <div class="highlight-box">
        <p><strong>Mobilité nette et mobilité structurelle :</strong> Une part de la mobilité sociale est <em>structurelle</em> : elle résulte de la transformation de la structure des emplois (développement des professions intermédiaires et des cadres, déclin de l'agriculture et de l'industrie). Cette mobilité « forcée » se distingue de la mobilité <em>nette</em> (ou échange), qui reflète la fluidité sociale réelle — la capacité d'individus de condition différente à échanger leurs positions.</p>
      </div>
      <p class="resume-text">La mesure de la mobilité sociale soulève des enjeux politiques et normatifs : une société méritocratique suppose une mobilité sociale élevée. Les données empiriques montrent une tension entre cet idéal méritocratique et la réalité de la reproduction sociale.</p>
    </section>'''

contenu_mobilite = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Mesurer et comprendre la mobilité sociale</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Les outils de mesure : tables de mobilité et odds ratios</h3>
        <p>La mobilité sociale inter-générationnelle est principalement mesurée par les <strong>tables de mobilité</strong> (ou matrices de mobilité) : elles croisent la catégorie socioprofessionnelle (CSP) du père et celle du fils (ou de la fille). En France, l'enquête « Formation et Qualification Professionnelle » de l'INSEE fournit les données de référence. On calcule des taux de <strong>recrutement</strong> (d'où viennent les membres d'une catégorie ?) et des taux de <strong>destinée</strong> (où vont les enfants issus d'une catégorie ?).</p>
        <p>Pour mesurer la fluidité sociale indépendamment des effets de structure, les sociologues utilisent les <strong>odds ratios</strong> (rapports de chances). Un odds ratio de 1 entre deux origines signifie une égalité des chances ; supérieur à 1, il indique un avantage pour l'origine plus élevée. Le modèle <strong>log-linéaire</strong> permet de comparer la fluidité sociale entre pays ou entre périodes en contrôlant les changements de structure.</p>
        <div class="highlight-box">
          <p><strong>Les travaux de Erikson, Goldthorpe et Portocarero (EGP) :</strong> Le schéma de classes EGP, développé dans les années 1970-1980, est devenu le standard international pour comparer les structures sociales et la mobilité entre pays. En comparant 11 pays européens, Erikson et Goldthorpe (<em>The Constant Flux</em>, 1992) montrent que les schémas de fluidité sociale sont remarquablement stables entre les pays et dans le temps — ce qui invalide l'idée d'une tendance générale à l'ouverture des sociétés modernes.</p>
        </div>

        <h3>Les tendances de la mobilité sociale en France</h3>
        <p>En France, les grandes enquêtes INSEE montrent que la mobilité sociale a <strong>progressé</strong> au cours des Trente Glorieuses (1945-1975), principalement grâce à la mobilité structurelle (développement du secteur tertiaire, expansion scolaire). Mais depuis les années 1980, la fluidité sociale s'est stabilisée, voire réduite selon certains indicateurs.</p>
        <p>Louis Chauvel (<em>Le Destin des générations</em>, 1998) montre que les cohortes nées après 1960 ont connu des conditions d'accès au marché du travail et au logement significativement plus difficiles que leurs aînés, malgré des niveaux de diplôme plus élevés. Ce phénomène de <strong>dévaluation des diplômes</strong> produit une mobilité descendante relative : les jeunes diplômés des classes moyennes et populaires accèdent à des positions sociales inférieures à celles qu'auraient occupé leurs parents avec un niveau d'éducation équivalent.</p>

        <h3>Les mécanismes de la reproduction sociale</h3>
        <p>La sociologie a identifié plusieurs mécanismes qui freinent la mobilité sociale ascendante et renforcent la reproduction. Le <strong>capital social</strong> (Bourdieu, Coleman) désigne les ressources liées au réseau de relations sociales : les individus des classes favorisées ont accès à des réseaux plus denses et plus utiles (contacts professionnels, recommandations, accès à l'information). Le <strong>capital culturel</strong> transmis par la famille favorise la réussite scolaire des enfants de milieux cultivés.</p>
        <p>Les <strong>effets de quartier</strong> (neighborhood effects) désignent l'influence négative de la résidence dans des zones défavorisées sur les trajectoires individuelles, indépendamment des caractéristiques individuelles : mauvaise réputation des établissements scolaires, faiblesse des réseaux professionnels locaux, effets de pair négatifs. La ségrégation résidentielle amplifie ainsi les inégalités initiales.</p>

        <h3>Mobilité descendante et déclassement</h3>
        <p>Le <strong>déclassement</strong> — la mobilité sociale descendante par rapport à la position des parents ou à ses propres aspirations — est devenu un enjeu sociologique et politique majeur depuis les années 2000. Camille Peugny (<em>Le Déclassement</em>, 2009) montre qu'environ un tiers des Français occupent une position sociale inférieure à celle de leur père.</p>
        <p>Le déclassement produit un sentiment d'injustice et de frustration relative particulièrement aigu : les déclassés ont intériorisé les aspir-ations et les standards de vie de leur milieu d'origine sans avoir les ressources pour les maintenir. Ce phénomène est analysé comme l'un des facteurs alimentant la montée du populisme et du mécontentement politique dans les sociétés occidentales.</p>
        <div class="highlight-box">
          <p><strong>La mobilité sociale des femmes :</strong> Longtemps mesurée à travers la position du père et du mari, la mobilité sociale des femmes est devenue un enjeu spécifique. L'expansion de l'enseignement supérieur et la féminisation du marché du travail ont produit une mobilité ascendante importante pour les femmes des classes populaires et moyennes. Mais des plafonds de verre persistent aux plus hauts niveaux de la hiérarchie professionnelle et institutionnelle.</p>
        </div>

        <h3>Comparaisons internationales</h3>
        <p>Les comparaisons internationales montrent des différences significatives de fluidité sociale. Les pays nordiques (Danemark, Norvège, Suède) présentent les plus forts niveaux de mobilité sociale, grâce à des systèmes éducatifs peu sélectifs, des États-providence généreux et une compression des inégalités salariales. Les États-Unis, souvent décrits comme la terre de l'American Dream, présentent paradoxalement une fluidité sociale inférieure à de nombreux pays européens (Miles Corak, 2013). Cette corrélation entre inégalités et faible mobilité sociale est connue sous le nom de <strong>courbe du Grand Gatsby</strong>.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 10. structures/pouvoir-domination — Pouvoir et domination
# ═══════════════════════════════════════════════════════════════════════════════

intro_pouvoir = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Analyser les mécanismes du pouvoir</p>
        </div>
      </div>
      <p class="resume-text">Le <strong>pouvoir</strong> et la <strong>domination</strong> sont des concepts centraux de la sociologie politique et de la sociologie générale. Le pouvoir désigne la capacité d'un acteur à obtenir d'autres acteurs des comportements conformes à sa volonté, y compris contre leur propre résistance. La domination désigne une relation de pouvoir stabilisée, institutionnalisée et reconnue comme légitime — au moins partiellement — par ceux qui la subissent.</p>
      <div class="highlight-box">
        <p><strong>Pouvoir sur et pouvoir de :</strong> La notion de pouvoir est ambivalente. Le pouvoir <em>sur</em> (power over) désigne la capacité de contraindre autrui, souvent analysé comme domination. Le pouvoir <em>de</em> (power to, empowerment) désigne la capacité d'agir, de réaliser des projets — une ressource plutôt qu'une relation de subordination. Ces deux dimensions sont souvent articulées : les groupes dominants monopolisent le pouvoir de pour exercer le pouvoir sur.</p>
      </div>
      <p class="resume-text">L'analyse du pouvoir traverse toute la sociologie — des théories de l'État (Weber, Bourdieu) aux analyses des interactions quotidiennes (Goffman), en passant par les théories féministes et postcoloniales. Elle soulève la question de la <strong>légitimité</strong> : qu'est-ce qui fait qu'un pouvoir est accepté, obéi, reproduit plutôt que contesté ?</p>
    </section>'''

contenu_pouvoir = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Weber, Bourdieu, Foucault : théories du pouvoir et de la domination</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Weber : domination et légitimité</h3>
        <p>Max Weber fournit la théorie classique de la domination. Il définit la <strong>domination</strong> comme « la chance pour des ordres spécifiques (ou pour tous les autres) de trouver obéissance de la part d'un groupe déterminé d'individus ». La domination ne repose pas sur la seule contrainte physique : elle implique une forme de <strong>légitimité</strong>, c'est-à-dire une croyance des dominés dans le bien-fondé du pouvoir de ceux qui commandent.</p>
        <p>Weber distingue trois types idéaux de domination légitime. La domination <strong>légale-rationnelle</strong> repose sur des règles abstraites impersonnelles : on obéit non à une personne mais à un statut. Elle engendre la bureaucratie moderne. La domination <strong>traditionnelle</strong> repose sur la coutume et le respect des anciens ordres : on obéit parce qu'il en a toujours été ainsi. La domination <strong>charismatique</strong> repose sur les qualités personnelles extraordinaires attribuées au chef (prophète, héros, tribun) : on obéit par dévotion personnelle.</p>
        <div class="highlight-box">
          <p><strong>La bureaucratie wébérienne :</strong> Pour Weber, la domination légale-rationnelle s'incarne dans la bureaucratie : organisation fondée sur des règles fixes, une hiérarchie clairement définie, une séparation entre la fonction et la personne, et des fonctionnaires sélectionnés sur compétence. La bureaucratie est l'instrument de domination techniquement le plus supérieur — mais aussi la menace d'une « cage d'acier » dans laquelle la rationalité formelle étouffe la liberté et le sens.</p>
        </div>

        <h3>Bourdieu : violence symbolique et capital</h3>
        <p>Pierre Bourdieu développe une théorie du pouvoir fondée sur les concepts de <strong>champ</strong>, de <strong>capital</strong> et de <strong>violence symbolique</strong>. Un champ est un espace social de concurrence structuré par des enjeux spécifiques (le champ économique, le champ académique, le champ artistique). Les acteurs y luttent pour s'approprier du capital (économique, culturel, social, symbolique) et pour imposer leur vision du monde.</p>
        <p>La <strong>violence symbolique</strong> est la forme de domination la plus efficace car elle est méconnue comme telle : les dominés contribuent à leur propre domination en intériorisant les catégories de perception et d'appréciation des dominants. La femme qui s'autocensure professionnellement, l'enfant de milieu populaire qui s'exclut des grandes écoles avant même de tenter d'y entrer — voilà des exemples de violence symbolique. Elle ne s'exerce pas par la force mais par l'adhésion des dominés aux schèmes de pensée qui légitiment leur domination.</p>

        <h3>Foucault : le pouvoir disciplinaire et biopolitique</h3>
        <p>Michel Foucault propose une analyse du pouvoir radicalement différente. Contrairement à Weber ou Marx, il refuse de localiser le pouvoir dans des instances centrales (l'État, la classe dominante) : le pouvoir est <strong>diffus</strong>, il circule dans tous les rapports sociaux. Il est moins possession que relation, moins substance que exercice.</p>
        <p>Dans <em>Surveiller et punir</em> (1975), Foucault analyse le passage, au XVIIIe-XIXe siècle, d'un pouvoir fondé sur le <strong>supplice</strong> (spectacle public de la punition corporelle) à un pouvoir <strong>disciplinaire</strong> fondé sur la surveillance, la normalisation et l'examen. Le <strong>panoptique</strong> de Bentham — une prison circulaire où les détenus sont constamment visibles sans voir leurs gardiens — devient la métaphore d'une société disciplinaire où les individus intériorisent la surveillance et s'autodisciplinent.</p>
        <p>Dans ses cours au Collège de France, Foucault développe le concept de <strong>biopolitique</strong> : à partir du XVIIIe siècle, le pouvoir ne vise plus seulement les individus (discipline des corps) mais les <em>populations</em> — leur fécondité, leur santé, leur mortalité. Les politiques de santé publique, de natalité, d'hygiène constituent des formes de gouvernement de la vie (biopouvoir).</p>
        <div class="highlight-box">
          <p><strong>Gouvernementalité (Foucault) :</strong> Le concept de <em>gouvernementalité</em> désigne l'ensemble des techniques et des savoirs qui permettent de « conduire la conduite » des individus — non par la contrainte directe mais par la production de sujets qui se gouvernent eux-mêmes selon des normes intériorisées. Le néolibéralisme, analysé comme forme de gouvernementalité, produit des sujets « entrepreneurs d'eux-mêmes » qui gèrent leur capital humain selon une logique marchande.</p>
        </div>

        <h3>Domination, résistance et contestation</h3>
        <p>Si la domination est omniprésente, elle n'est jamais totale. Les dominés développent des formes de <strong>résistance</strong> variées. James Scott (<em>La Domination et les arts de la résistance</em>, 1990) distingue le <strong>discours public</strong> (ce que les dominés disent devant les dominants) du <strong>discours caché</strong> (les critiques, les moqueries, les révoltes exprimées en coulisse, hors de portée du pouvoir). Les résistances ordinaires (travail au ralenti, absentéisme, rumeurs, détournement des règles) constituent une forme de lutte quotidienne peu visible.</p>
        <p>La <strong>théorie des mouvements sociaux</strong> analyse les formes d'action collective organisée contre la domination : syndicats, mouvements féministes, antiracistes, écologistes. Ces mouvements transforment les résistances individuelles en contestations collectives capables de peser sur les rapports de pouvoir institutionnalisés.</p>

        <h3>Intersectionnalité et multiples dominations</h3>
        <p>Les théories contemporaines soulignent que la domination ne s'exerce pas selon un seul axe. Le concept d'<strong>intersectionnalité</strong> (Kimberlé Crenshaw) montre que classe, genre, race et autres axes de domination s'articulent de manière spécifique, produisant des formes d'oppression irréductibles à leurs composantes séparées. Cette perspective renouvelle l'analyse du pouvoir en montrant sa complexité et sa multidimensionnalité : on peut être dominant sur un axe (classe) et dominé sur un autre (genre ou race), ces positions se combinant de manière non additive.</p>
      </div>
    </section>'''

# ═══════════════════════════════════════════════════════════════════════════════
# 11. culture/medias-opinion — Médias et opinion
# ═══════════════════════════════════════════════════════════════════════════════

intro_medias = '''<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Influence des médias et formation de l'opinion publique</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>médias</strong> (presse, radio, télévision, internet, réseaux sociaux) et l'<strong>opinion publique</strong> entretiennent une relation complexe et réciproque au cœur de la sociologie de la communication. Les médias ne se contentent pas de refléter l'état de l'opinion : ils contribuent à la <strong>construire</strong>, en sélectionnant les sujets dignes d'attention, en orientant les cadres d'interprétation, en amplifiant certaines voix et en en marginalisant d'autres.</p>
      <div class="highlight-box">
        <p><strong>L'agenda-setting :</strong> Maxwell McCombs et Donald Shaw (1972) montrent que les médias ne nous disent pas quoi penser, mais <em>à quoi</em> penser. En sélectionnant les sujets couverts et en leur accordant plus ou moins de place, ils fixent l'agenda de la discussion publique. Cette théorie de l'<em>agenda-setting</em> illustre le pouvoir indirect des médias : ils ne dictent pas des opinions, mais définissent les objets sur lesquels les opinions se forment.</p>
      </div>
      <p class="resume-text">L'essor du numérique et des réseaux sociaux bouleverse les rapports entre médias et opinion : démultiplication des sources d'information, désintermédiation (chacun peut produire et diffuser), phénomènes de <strong>chambres d'écho</strong> et de <strong>désinformation</strong>. Ces transformations renouvellent les questions classiques de la sociologie des médias.</p>
    </section>'''

contenu_medias = '''<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Théories des médias, opinion publique et ère numérique</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Qu'est-ce que l'opinion publique ?</h3>
        <p>La notion d'<strong>opinion publique</strong> est ambiguë. Elle peut désigner l'ensemble des opinions exprimées par les citoyens sur les affaires communes (la « voix du peuple »), les résultats de sondages agrégés, ou une fiction politique invoquée par les acteurs pour légitimer leurs positions (« l'opinion publique exige que... »). Pierre Bourdieu, dans son article célèbre « L'opinion publique n'existe pas » (1973), critique le sondage d'opinion comme instrument de légitimation : il présuppose que tous les individus ont une opinion sur tous les sujets, que toutes les opinions se valent, et que les questions posées sont neutres — trois présupposés erronés.</p>
        <p>Walter Lippmann (<em>Public Opinion</em>, 1922) avait déjà montré que les individus ne perçoivent pas le monde directement mais à travers des <strong>stéréotypes</strong> — des représentations simplifiées qui pré-filtrent et structurent leur rapport à la réalité. Les médias jouent un rôle central dans la formation et la diffusion de ces stéréotypes.</p>

        <h3>Les théories classiques des effets des médias</h3>
        <p>La recherche sur les effets des médias a connu plusieurs phases. La théorie de la <strong>seringue hypodermique</strong> (ou « balle magique »), dominante dans les années 1920-1930, suppose un effet direct et puissant : les médias injectent des messages qui sont passivement absorbés par un public atomisé. Les travaux de Paul Lazarsfeld (<em>The People's Choice</em>, 1944) sur les élections américaines réfutent cette vision : les médias ont des <strong>effets limités</strong>, médiatisés par les groupes primaires et les leaders d'opinion.</p>
        <p>La théorie de l'<strong>agenda-setting</strong> (McCombs et Shaw, 1972) réhabilite le pouvoir médiatique à un autre niveau : non pas celui de changer les opinions, mais celui de définir les sujets qui comptent. La théorie du <strong>cadrage</strong> (<em>framing</em>, Goffman, Entman) affine cette analyse : les médias ne se contentent pas de sélectionner les sujets, ils proposent des cadres interprétatifs qui orientent la compréhension des événements (présenter un phénomène comme un problème de sécurité ou comme un problème de santé publique oriente très différemment les réponses politiques attendues).</p>
        <div class="highlight-box">
          <p><strong>La théorie de la spirale du silence (Noelle-Neumann) :</strong> Elisabeth Noelle-Neumann (1974) montre que les individus ont tendance à taire leurs opinions quand ils les perçoivent comme minoritaires, par crainte de l'isolement social. Les médias influencent cette perception de la distribution des opinions dans la société. Une opinion que les médias présentent comme dominante tend à se renforcer, une opinion marginalisée tend à se taire — produisant une spirale qui amplifie les effets médiatiques sur la formation de l'opinion.</p>
        </div>

        <h3>Les médias comme champ</h3>
        <p>Bourdieu (<em>Sur la télévision</em>, 1996) analyse le champ journalistique et médiatique comme un espace de concurrence structuré par des enjeux spécifiques (audience, notoriété, distinction journalistique). La logique du champ médiatique — dominée par la recherche de l'audience et la pression du temps — produit des effets systématiques sur les contenus : privilège du sensationnel, de l'événement sur la structure, du conflit sur la nuance, de la personnalité sur les idées.</p>
        <p>Le concept de <strong>champ</strong> permet de comprendre pourquoi les médias produisent certains contenus indépendamment des intentions individuelles des journalistes : c'est la logique du champ qui s'impose à eux, non leurs préférences personnelles. La concentration des médias dans les mains de quelques grands groupes industriels renforce ces tendances en soumettant davantage le champ journalistique aux impératifs économiques.</p>

        <h3>Propagande, manipulation et pensée critique</h3>
        <p>L'analyse de la <strong>propagande</strong> — la manipulation délibérée des représentations et des opinions — est ancienne (Lasswell, 1927) mais particulièrement urgente à l'ère numérique. Edward Bernays, neveu de Freud et père des relations publiques modernes (<em>Propaganda</em>, 1928), a théorisé l'utilisation de la psychologie des foules pour façonner l'opinion publique au service d'intérêts économiques et politiques.</p>
        <p>Noam Chomsky et Edward Herman (<em>La Fabrication du consentement</em>, 1988) proposent un <strong>modèle de propagande</strong> pour analyser les médias américains : les filtres structurels (propriété, publicité, sources, flak, idéologie anticommuniste) sélectionnent les informations de manière à servir les intérêts des élites économiques et politiques — non pas par conspiration, mais par le jeu de contraintes systémiques.</p>

        <h3>Ère numérique : désintermédiation et désinformation</h3>
        <p>L'essor d'internet et des réseaux sociaux transforme radicalement le paysage médiatique. La <strong>désintermédiation</strong> (chacun peut produire et diffuser de l'information sans passer par un éditeur ou une rédaction) démultiplie les sources mais fragilise les gardes-fous traditionnels (vérification des faits, déontologie journalistique). Les <strong>fake news</strong> et la <strong>désinformation</strong> se diffusent plus vite que les démentis, exploitant les biais cognitifs des utilisateurs.</p>
        <p>Les <strong>chambres d'écho</strong> (<em>echo chambers</em>) désignent les espaces numériques où les individus ne sont exposés qu'aux opinions similaires aux leurs, renforcées par les algorithmes de recommandation personnalisée. Eli Pariser (<em>The Filter Bubble</em>, 2011) parle de « bulle de filtre » : les algorithmes nous enferment dans une vision du monde confirmant nos préjugés, réduisant l'exposition aux points de vue divergents et fragilisant le débat démocratique.</p>
        <div class="highlight-box">
          <p><strong>La littératie médiatique :</strong> Face à la multiplication des sources et des manipulations, la <em>littératie médiatique</em> — la capacité à lire, analyser et évaluer de façon critique les médias et leurs contenus — devient une compétence civique fondamentale. Elle implique de distinguer faits et opinions, d'identifier les sources, de comprendre les logiques économiques et politiques qui structurent les médias, et de développer une pensée critique face aux contenus numériques.</p>
        </div>
      </div>
    </section>'''

# ─── Now update all pages ────────────────────────────────────────────────────

updates = {
    'fondements/naissance': (intro_naissance, contenu_naissance),
    'fondements/fait-social': (intro_fait_social, contenu_fait_social),
    'fondements/action-sociale': (intro_action_sociale, contenu_action_sociale),
    'fondements/methodes': (intro_methodes, contenu_methodes),
    'fondements/socialisation': (intro_socialisation, contenu_socialisation),
    'structures/classes-sociales': (intro_classes, contenu_classes),
    'structures/inegalites': (intro_inegalites, contenu_inegalites),
    'structures/institutions': (intro_institutions, contenu_institutions),
    'structures/mobilite-sociale': (intro_mobilite, contenu_mobilite),
    'structures/pouvoir-domination': (intro_pouvoir, contenu_pouvoir),
    'culture/medias-opinion': (intro_medias, contenu_medias),
}

for key, (new_intro, new_contenu) in updates.items():
    old = pages[key]['content']
    pages[key]['content'] = replace_intro_contenu(old, new_intro, new_contenu)
    new_len = len(pages[key]['content'])
    print(f'{key}: {new_len} chars')

with open('assets/content/sociologie.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print('\nDone. File written.')
