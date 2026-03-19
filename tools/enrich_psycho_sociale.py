"""Enrichissement des 3 articles sociale/* du fichier psychologie.json"""
import json, re

PATH = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/psychologie.json'

with open(PATH, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

# ------------------------------------------------------------------ #
#  Helper
# ------------------------------------------------------------------ #

def replace_sections(html, new_intro, new_contenu):
    html = re.sub(
        r'<section class="content-section" id="introduction">.*?</section>',
        new_intro, html, count=1, flags=re.DOTALL)
    html = re.sub(
        r'<section class="content-section" id="contenu">.*?</section>',
        new_contenu, html, count=1, flags=re.DOTALL)
    return html

# ================================================================== #
#  1. sociale/communication
# ================================================================== #

COMM_INTRO = '''\
<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Pourquoi ce sujet est essentiel</p>
        </div>
      </div>
      <p class="resume-text">La <strong>communication interpersonnelle</strong> est le processus par lequel deux individus ou plus échangent des informations, des émotions et du sens au moyen de signes verbaux, para-verbaux et non verbaux. Elle constitue le tissu même de la vie sociale.</p>
      <div class="highlight-box">
        <p><strong>Essentiel&nbsp;:</strong> Comprendre la communication interpersonnelle, c'est comprendre comment les malentendus naissent, comment la confiance se construit et comment les relations humaines fonctionnent ou échouent. Cette connaissance est directement applicable dans la vie professionnelle, familiale et citoyenne.</p>
      </div>
      <p class="resume-text">Ce champ d'étude croise la psychologie sociale, la linguistique pragmatique, la sociologie interactionniste et les sciences de la communication. Il éclaire aussi bien la conversation quotidienne que la négociation diplomatique.</p>
    </section>'''

COMM_CONTENU = '''\
<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Communication interpersonnelle &mdash; fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Les composantes du processus communicatif</h3>
<p>Le modèle fondateur de Shannon et Weaver (1949) décrit la communication comme une transmission d'un <strong>émetteur</strong> vers un <strong>récepteur</strong> via un <strong>canal</strong>, perturbée par du <strong>bruit</strong>. Ce modèle linéaire a été enrichi par Roman Jakobson, qui distingue six fonctions du langage (expressive, conative, référentielle, phatique, métalinguistique, poétique), puis par Paul Watzlawick et l'école de Palo Alto, qui insistent sur la nature <em>circulaire</em> et <em>interactive</em> de la communication.</p>
<div class="highlight-box"><p><strong>Axiome de Watzlawick&nbsp;:</strong> &laquo;&nbsp;On ne peut pas ne pas communiquer.&nbsp;&raquo; Même le silence, l'immobilité ou l'absence de réponse constituent un message pour autrui. Toute conduite est communication dès lors qu'elle est perçue par un autre.</p></div>

<h3>Communication verbale et para-verbale</h3>
<p>La communication <strong>verbale</strong> porte sur le contenu linguistique&nbsp;: le choix des mots, la syntaxe, le registre de langue. Elle est régie par des règles pragmatiques&nbsp;: les <em>maximes conversationnelles</em> de Grice (quantité, qualité, relation, manière) décrivent les normes implicites qui rendent un échange coopératif.</p>
<p>La communication <strong>para-verbale</strong> englobe les éléments vocaux qui accompagnent les mots sans en faire partie&nbsp;: le débit, le rythme, l'intonation, le volume, les pauses. Ces indices para-verbaux modifient profondément le sens d'un énoncé. Une même phrase — &laquo;&nbsp;C'est vraiment intéressant&nbsp;&raquo; — peut exprimer l'enthousiasme ou l'ironie selon l'intonation. Des recherches d'Albert Mehrabian (souvent citées, mais à nuancer) suggèrent que dans les messages d'attitude, la voix compte davantage que les mots eux-mêmes.</p>

<h3>Communication non verbale</h3>
<p>La communication <strong>non verbale</strong> regroupe tous les canaux hors parole&nbsp;: expressions faciales, gestes, postures, contact visuel, proxémique (gestion de l'espace), toucher et apparence vestimentaire. Paul Ekman a identifié six expressions faciales dites <em>universelles</em> (joie, tristesse, colère, peur, dégoût, surprise), présentes dans toutes les cultures étudiées, bien que leur expression et leur lecture soient modulées par des <em>display rules</em> culturelles.</p>
<p>La <strong>proxémique</strong>, théorisée par Edward T. Hall, distingue quatre zones d'interaction&nbsp;: intime (0&ndash;45 cm), personnelle (45 cm&ndash;1,2 m), sociale (1,2&ndash;3,6 m) et publique (au-delà de 3,6 m). Violer la distance attendue crée un malaise social, car cela signale une intrusion ou, à l'inverse, une froideur inappropriée.</p>
<div class="highlight-box"><p><strong>Congruence non verbale&nbsp;:</strong> Quand le verbal et le non verbal sont contradictoires (dire &laquo;&nbsp;je vais bien&nbsp;&raquo; en fuyant le regard, les épaules affaissées), l'interlocuteur tend à croire le non verbal. La <em>fuite du regard</em> est ainsi interprétée comme signe de malaise ou de dissimulation, même si d'autres explications sont possibles.</p></div>

<h3>L'écoute active</h3>
<p>L'<strong>écoute active</strong>, conceptualisée par Carl Rogers dans le cadre de la psychothérapie centrée sur la personne, désigne une posture d'attention totale à l'interlocuteur&nbsp;: reformulation (paraphrase du sens), reflet (écho du ressenti), clarification (questions ouvertes) et validation émotionnelle. L'écoute active se distingue de l'écoute passive (entendre sans traiter) et de l'écoute sélective (ne retenir que ce qui confirme ses propres attentes).</p>
<p>Des études en contexte médical montrent que les médecins coupent en moyenne leurs patients après 11 à 23 secondes. Or les patients à qui on laisse exprimer leurs préoccupations sans interruption livrent des informations diagnostiques plus complètes et expriment une plus grande satisfaction des soins. L'écoute active est donc à la fois un outil relationnel et un levier d'efficacité pratique.</p>

<h3>La théorie de l'attribution</h3>
<p>La <strong>théorie de l'attribution</strong> (Heider, 1958&nbsp;; Jones &amp; Davis, 1965&nbsp;; Kelley, 1967) étudie comment les individus expliquent les comportements d'autrui. On distingue les attributions <em>internes</em> (le comportement est dû à des traits stables de la personne) et <em>externes</em> (il est dû à la situation). L'<strong>erreur fondamentale d'attribution</strong> est le biais consistant à sur-attribuer les comportements à des dispositions personnelles, en négligeant le poids du contexte situationnel.</p>
<p>En communication, ce biais est omniprésent&nbsp;: si un collègue répond sèchement, on conclut spontanément qu'il est &laquo;&nbsp;de mauvaise humeur&nbsp;&raquo; ou &laquo;&nbsp;asocial&nbsp;&raquo;, sans considérer qu'il vient peut-être d'apprendre une mauvaise nouvelle. Cette tendance génère des malentendus persistants et des jugements injustes.</p>
<div class="highlight-box"><p><strong>Biais acteur-observateur&nbsp;:</strong> Complémentaire de l'erreur fondamentale d'attribution, ce biais montre que nous attribuons nos propres comportements à la situation (&laquo;&nbsp;j'étais stressé&nbsp;&raquo;) mais ceux d'autrui à leurs traits (&laquo;&nbsp;il est agressif par nature&nbsp;&raquo;). Cette asymétrie alimente les conflits interpersonnels.</p></div>

<h3>La dissonance cognitive dans la communication</h3>
<p>Léon Festinger (1957) a montré que les individus ressentent un inconfort psychologique — la <strong>dissonance cognitive</strong> — lorsqu'ils détiennent deux cognitions incompatibles (croyances, attitudes, comportements). Dans un échange communicatif, la dissonance surgit quand un message reçu contredit une conviction forte. Pour réduire cet inconfort, on peut&nbsp;: changer son attitude, dévaluer la source du message ou rechercher des informations qui confirment sa vision initiale.</p>
<p>Ce phénomène explique pourquoi le simple fait de présenter des arguments rationnels ne suffit pas à changer une opinion profondément ancrée. Il éclaire aussi la <em>chambre d'écho</em> des réseaux sociaux&nbsp;: exposés à une information dissonante, les individus la filtrent ou la rejettent plutôt que de réviser leurs croyances.</p>

<h3>Styles de communication et contextes culturels</h3>
<p>Edward T. Hall a distingué les cultures à <strong>contexte élevé</strong> (où beaucoup d'information est transmise implicitement, par le contexte, les non-dits, les relations — Japon, pays arabes, Afrique de l'Ouest) des cultures à <strong>contexte faible</strong> (où le message explicite prime — pays germaniques, États-Unis, Scandinavie). Ces différences génèrent des malentendus interculturels fréquents&nbsp;: ce qu'une culture lit comme une &laquo;&nbsp;politesse&nbsp;&raquo; peut être perçu par une autre comme de l'ambiguïté ou de la dissimulation.</p>
<p>Deborah Tannen (1990) a, par ailleurs, mis en évidence des différences de style communicatif liées au genre&nbsp;: les femmes tendraient davantage vers un langage &laquo;&nbsp;rapport&nbsp;&raquo; (maintien des relations, affiliation), les hommes vers un langage &laquo;&nbsp;rapport de statut&nbsp;&raquo; (affirmation, information). Ces tendances statistiques, souvent surinterpretées, doivent être nuancées par les variations individuelles et culturelles.</p>
<div class="highlight-box"><p><strong>Compétence communicative interculturelle&nbsp;:</strong> Développée par Dell Hymes, la notion de compétence communicative va au-delà de la grammaire pour inclure la connaissance des règles sociales, des registres, des genres discursifs et des conventions non verbales propres à chaque contexte culturel.</p></div>

<h3>Communication numérique et nouveaux enjeux</h3>
<p>La communication médiatisée par ordinateur (CMO) — emails, messageries instantanées, visioconférences, réseaux sociaux — transforme les dynamiques interpersonnelles. L'absence d'indices non verbaux dans les échanges textuels accroît le risque de malentendu. L'usage des émojis compense partiellement cette perte en signalant le ton émotionnel. Les études sur la <em>CMC hyperpersonnelle</em> (Walther, 1996) montrent cependant que les interlocuteurs peuvent idéaliser leur partenaire faute d'informations contradictoires, créant des attentes irréalistes.</p>
<p>Les environnements de travail hybrides (présentiel/distanciel) posent aussi des défis spécifiques&nbsp;: la <em>fatigue Zoom</em>, documentée depuis 2020, résulte de la charge cognitive accrue due au traitement continu des indices non verbaux via écran, au maintien du contact visuel artificiel et à la réduction des micro-pauses naturelles de la conversation en face à face.</p>

<h3>Synthèse et perspectives</h3>
<p>La communication interpersonnelle est un processus multidimensionnel où verbal, para-verbal et non verbal s'articulent pour construire du sens. Les biais cognitifs (attribution, dissonance) et les différences culturelles constituent des obstacles structurels à la compréhension mutuelle. La maîtrise de l'écoute active, de la reformulation et de la conscience de ses propres biais constitue un programme de formation à la fois individuel et institutionnel. À l'ère numérique, ces compétences doivent être réinventées pour les nouveaux canaux de communication.</p>
      </div>
    </section>'''

# ================================================================== #
#  2. sociale/dynamique-groupes
# ================================================================== #

DYN_INTRO = '''\
<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Pourquoi ce sujet est essentiel</p>
        </div>
      </div>
      <p class="resume-text">La <strong>dynamique des groupes</strong> étudie comment les individus pensent, se comportent et prennent des décisions lorsqu'ils sont réunis en collectif. Elle éclaire des phénomènes aussi divers que la réunion d'équipe, le jury d'assises, la foule en manifestation ou le conseil d'administration.</p>
      <div class="highlight-box">
        <p><strong>Essentiel&nbsp;:</strong> Les groupes ne sont pas la somme de leurs membres&nbsp;: ils produisent des effets émergents — polarisation, pensée de groupe, facilitation ou inhibition sociale — qui peuvent amplifier l'intelligence collective ou la dégrader. Comprendre ces mécanismes est décisif pour tout rôle de coordination, de management ou de citoyenneté active.</p>
      </div>
      <p class="resume-text">Ce champ, fondé par Kurt Lewin dans les années 1940, articule sociologie, psychologie sociale et sciences des organisations. Ses résultats ont des applications directes en entreprise, en politique et en pédagogie.</p>
    </section>'''

DYN_CONTENU = '''\
<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Dynamique des groupes &mdash; fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Qu'est-ce qu'un groupe&nbsp;? Définitions et typologies</h3>
<p>Un <strong>groupe</strong> n'est pas une simple agrégation d'individus. Pour qu'on parle de groupe au sens psychosocial, plusieurs conditions sont généralement requises&nbsp;: une conscience d'appartenance mutuelle, une interdépendance (les membres se perçoivent liés par un sort commun ou un objectif partagé), et une durée minimale d'interaction. Henri Tajfel distingue le <em>groupe minimal</em> — même une catégorisation arbitraire suffit à déclencher des comportements de favoritisme endogroupe — du groupe constitué par une histoire commune et des normes partagées.</p>
<p>On distingue classiquement les <strong>groupes primaires</strong> (famille, amis proches — liens affectifs forts, petite taille) des <strong>groupes secondaires</strong> (entreprise, association — liens fonctionnels, grande taille), et les groupes formels (structure officielle, rôles définis) des groupes informels (émergence spontanée).</p>
<div class="highlight-box"><p><strong>Paradigme du groupe minimal (Tajfel, 1971)&nbsp;:</strong> Des adolescents répartis aléatoirement en deux groupes (sur la base de préférences artistiques fictives) favorisaient systématiquement leur propre groupe dans la distribution de ressources, même sans enjeu réel. Cela montre que la simple catégorisation suffit à engendrer un biais de favoritisme endogroupe, base de nombreux préjugés intergroupes.</p></div>

<h3>Facilitation et inhibition sociales</h3>
<p>Robert Zajonc (1965) a résolu une contradiction apparente dans la littérature&nbsp;: la présence d'autrui améliore parfois les performances (facilitation sociale) et les dégrade d'autres fois (inhibition sociale). Sa synthèse&nbsp;: la présence d'autrui augmente l'<em>activation physiologique</em>, ce qui renforce les réponses dominantes. Si la réponse dominante est correcte (tâche bien maîtrisée), les performances s'améliorent&nbsp;; si elle est incorrecte (tâche nouvelle ou complexe), elles se dégradent.</p>
<p>Cela explique pourquoi un pianiste expert joue mieux en concert qu'en répétition solitaire, tandis qu'un débutant joue moins bien face à un public. Ce phénomène a des implications directes pour la conception des espaces de travail en open space&nbsp;: selon la nature des tâches, la présence de collègues est un atout ou une nuisance.</p>

<h3>La paresse sociale</h3>
<p>Bibb Latané et collaborateurs (1979) ont documenté le phénomène de <strong>paresse sociale</strong> (<em>social loafing</em>)&nbsp;: dans un groupe, les individus fournissent moins d'effort que lorsqu'ils travaillent seuls, car la contribution individuelle devient moins identifiable et évaluable. L'effort moyen par personne décroît à mesure que la taille du groupe augmente.</p>
<p>Les facteurs aggravants incluent&nbsp;: l'anonymat, la faible cohésion du groupe, la perception que les autres ne font pas leur part, et la faible implication personnelle dans la tâche. Les facteurs atténuants&nbsp;: rendre les contributions individuelles visibles, augmenter la cohésion et l'identification au groupe, et choisir des tâches perçues comme importantes et stimulantes.</p>
<div class="highlight-box"><p><strong>Ringelmann (1913)&nbsp;:</strong> Dans une expérience de tir à la corde, chaque personne supplémentaire dans l'équipe fournissait un effort proportionnellement moindre. Un individu seul fournissait 100&nbsp;% de son effort maximal&nbsp;; dans un groupe de huit, il n'en produisait plus qu'environ 49&nbsp;%. C'est la première démonstration empirique de la paresse sociale.</p></div>

<h3>La polarisation de groupe</h3>
<p>La <strong>polarisation de groupe</strong> désigne le phénomène par lequel la discussion en groupe conduit les membres à adopter des positions plus extrêmes que leurs opinions individuelles initiales. Si les membres penchent initialement pour une option risquée, la discussion les pousse vers encore plus de prise de risque (<em>risky shift</em>). Si au contraire ils penchent pour la prudence, la discussion amplifie cette prudence.</p>
<p>Deux mécanismes complémentaires expliquent ce phénomène. La <em>persuasion informative</em>&nbsp;: lors de la discussion, les arguments qui circulent sont majoritairement dans le sens de la tendance initiale (les membres les connaissent déjà), ce qui renforce la position dominante. La <em>comparaison sociale</em>&nbsp;: chaque membre, voulant paraître au moins aussi &laquo;&nbsp;courageux&nbsp;&raquo; ou &laquo;&nbsp;prudent&nbsp;&raquo; que la norme du groupe, surenchérit légèrement, créant un effet cumulatif d'amplification.</p>

<h3>La pensée de groupe (<em>groupthink</em>)</h3>
<p>Irving Janis (1972) a forgé le concept de <strong>pensée de groupe</strong> (<em>groupthink</em>) pour décrire un mode de pensée collectif défectueux qui survient dans des groupes très cohésifs, sous pression, cherchant le consensus au détriment de l'évaluation critique. Les symptômes incluent&nbsp;: l'illusion d'invulnérabilité, la rationalisation collective, la pression vers l'uniformité, l'autocensure et la présence de &laquo;&nbsp;gardiens de la pensée&nbsp;&raquo; qui filtrent les informations discordantes.</p>
<p>Janis a appliqué ce modèle à des fiascos politiques majeurs&nbsp;: la baie des Cochons (1961), la décision d'escalade au Vietnam. Des décisions d'entreprise catastrophiques (Enron, la crise financière de 2008) y ont aussi été rattachées. Les remèdes proposés&nbsp;: nommer un &laquo;&nbsp;avocat du diable&nbsp;&raquo;, consulter des experts extérieurs, segmenter les discussions en sous-groupes, et encourager explicitement la dissidence.</p>
<div class="highlight-box"><p><strong>Distinction polarisation / groupthink&nbsp;:</strong> La polarisation amplifie une tendance initiale&nbsp;; le groupthink supprime la délibération critique. Ces deux phénomènes peuvent coexister, mais ils ont des mécanismes et des remèdes distincts. La polarisation se combat en diversifiant les points de vue introduits dans la discussion&nbsp;; le groupthink se combat en institutionnalisant la dissidence.</p></div>

<h3>Leadership et styles d'autorité</h3>
<p>Kurt Lewin, Ronald Lippitt et Ralph White (1939) ont comparé expérimentalement trois styles de leadership sur des groupes d'enfants&nbsp;: <strong>autoritaire</strong> (décisions imposées), <strong>démocratique</strong> (participation collective aux décisions) et <strong>laissez-faire</strong> (liberté totale, absence d'orientation). Le groupe démocratique produisait des résultats de qualité similaire au groupe autoritaire en présence du leader, mais bien supérieurs en son absence, avec une meilleure cohésion et un moindre niveau d'agressivité.</p>
<p>Les théories du leadership ont ensuite évolué vers des modèles situationnels (Fiedler, Hersey et Blanchard) qui insistent sur l'adéquation du style au contexte, puis vers le leadership transformationnel (Bass, 1985), qui met l'accent sur l'inspiration, la vision partagée et le développement des membres.</p>

<h3>Normes de groupe et conformisme</h3>
<p>Muzafer Sherif (1935) a montré, à travers l'effet autocinétique, que des individus exposés à un stimulus ambigu convergent vers une norme de groupe partagée. Ces normes persistent même en l'absence de pression explicite. Solomon Asch (1951&ndash;1956) a complété ce tableau en montrant que des individus conforment publiquement leurs réponses perceptuelles à celles d'une majorité — même manifestement erronée —, sous l'effet de la pression sociale.</p>
<p>Ces résultats illustrent la force des normes de groupe sur le comportement individuel. Ils ont aussi une lecture normative&nbsp;: les normes de groupe peuvent être des ressources (régulation sociale, coordination) ou des obstacles (résistance au changement, exclusion des déviants).</p>
<div class="highlight-box"><p><strong>Déviance fonctionnelle&nbsp;:</strong> Serge Moscovici a montré qu'une minorité cohérente et consistante peut, à terme, infléchir les opinions de la majorité. L'innovation sociale passe souvent par des individus qui résistent aux normes dominantes. La déviance n'est pas seulement un problème pour le groupe&nbsp;; elle peut en être le moteur d'évolution.</p></div>

<h3>Décision collective et intelligence collective</h3>
<p>Les groupes prennent souvent de meilleures décisions que les individus isolés — à condition que certaines conditions soient réunies&nbsp;: diversité des points de vue, indépendance des jugements, mécanisme d'agrégation efficace. James Surowiecki (<em>La sagesse des foules</em>, 2004) a popularisé cette idée. Mais l'effet inverse (folie des foules, bulles spéculatives) est tout aussi documenté quand ces conditions font défaut.</p>
<p>Les techniques de facilitation de la décision collective — brainstorming structuré, méthode Delphi, débat contradictoire, vote préférentiel — visent à exploiter la diversité cognitive du groupe tout en limitant les effets de conformisme et de polarisation.</p>

<h3>Synthèse et perspectives</h3>
<p>La dynamique des groupes révèle que le comportement individuel est profondément modulé par le contexte collectif. Facilitation, paresse sociale, polarisation, pensée de groupe et normes de conformité sont des forces structurelles, non des accidents. Comprendre ces mécanismes permet de concevoir de meilleures organisations, de meilleures procédures de décision, et des espaces de délibération qui favorisent l'intelligence collective plutôt que ses pathologies.</p>
      </div>
    </section>'''

# ================================================================== #
#  3. sociale/prejudices
# ================================================================== #

PREJ_INTRO = '''\
<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Pourquoi ce sujet est essentiel</p>
        </div>
      </div>
      <p class="resume-text">Les <strong>préjugés et la discrimination</strong> sont des phénomènes psychologiques et sociaux à la fois universels et persistants. Ils désignent les attitudes négatives (préjugés) et les comportements inéquitables (discriminations) dirigés contre des individus en raison de leur appartenance à un groupe social.</p>
      <div class="highlight-box">
        <p><strong>Essentiel&nbsp;:</strong> Comprendre les mécanismes cognitifs et sociaux à l'origine des préjugés permet de mieux lutter contre leurs effets, qu'il s'agisse de discrimination à l'embauche, de violences motivées par la haine ou de &laquo;&nbsp;menace du stéréotype&nbsp;&raquo; qui dégrade les performances scolaires des groupes stigmatisés. Cette connaissance est fondamentale pour penser l'égalité en démocratie.</p>
      </div>
      <p class="resume-text">Ce champ croise la psychologie sociale cognitive, la sociologie des inégalités et les études critiques sur les systèmes de domination. Il s'appuie sur des méthodes allant des expériences de laboratoire aux analyses des données de terrain.</p>
    </section>'''

PREJ_CONTENU = '''\
<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Préjugés et discrimination &mdash; fondamentaux et approfondissements</p>
        </div>
      </div>
      <div class="course-content">
<h3>Définitions&nbsp;: stéréotypes, préjugés, discrimination</h3>
<p>Ces trois notions, souvent confondues, désignent des phénomènes distincts qui s'articulent néanmoins étroitement. Un <strong>stéréotype</strong> est une croyance généralisée et simplifiée sur les caractéristiques d'un groupe social (composante <em>cognitive</em>). Un <strong>préjugé</strong> est une attitude émotionnellement chargée, généralement négative, à l'égard d'un groupe ou de ses membres (composante <em>affective</em>). La <strong>discrimination</strong> désigne le traitement différentiel et inéquitable appliqué à une personne du fait de son appartenance groupale (composante <em>comportementale</em>).</p>
<p>Ces trois éléments forment le &laquo;&nbsp;triptyque&nbsp;&raquo; classique de Gordon Allport (<em>The Nature of Prejudice</em>, 1954), ouvrage fondateur de ce champ. Allport établissait que les stéréotypes alimentent les préjugés, qui peuvent déboucher sur la discrimination, mais que ces liens ne sont ni automatiques ni inévitables.</p>
<div class="highlight-box"><p><strong>Distinction importante&nbsp;:</strong> On peut détenir des stéréotypes sans être discriminant (si l'on n'agit pas sur eux)&nbsp;; on peut aussi discriminer sans stéréotypie consciente (via des procédures institutionnelles biaisées). La <em>discrimination systémique</em> ou <em>structurelle</em> renvoie à des pratiques et institutions qui produisent des inégalités indépendamment des intentions individuelles.</p></div>

<h3>La catégorisation sociale&nbsp;: un processus cognitif universel</h3>
<p>Henri Tajfel a montré que la <strong>catégorisation sociale</strong> — le classement des individus en groupes (&laquo;&nbsp;nous&nbsp;&raquo; vs &laquo;&nbsp;eux&nbsp;&raquo;) — est un processus cognitif fondamental et économique. Le cerveau humain traite en permanence une quantité massive d'informations&nbsp;; la catégorisation réduit cette complexité en regroupant les stimuli sous des étiquettes génériques. Ce processus est adaptatif mais génère un coût&nbsp;: l'accentuation des similarités intragroupe et des différences intergroupe (même quand elles sont minimes), et le biais de favoritisme endogroupe documenté par le paradigme du groupe minimal.</p>
<p>La théorie de l'identité sociale (Tajfel &amp; Turner, 1979) ajoute une dimension motivationnelle&nbsp;: les individus cherchent à appartenir à des groupes socialement valorisés, car cela contribue à leur estime de soi. Cela pousse à la <em>différenciation favorable</em> de son propre groupe au détriment des exogroupes, phénomène à la base de nombreuses formes de discrimination.</p>

<h3>La menace du stéréotype</h3>
<p>Claude Steele et Joshua Aronson (1995) ont découvert un phénomène remarquable&nbsp;: le simple fait de rendre saillante une appartenance à un groupe stigmatisé au moment d'une évaluation suffit à dégrader les performances des membres de ce groupe. C'est la <strong>menace du stéréotype</strong> (<em>stereotype threat</em>).</p>
<p>Dans leurs expériences fondatrices, des étudiants afro-américains à Stanford, soumis à un test de raisonnement verbal, obtenaient de moins bons résultats lorsqu'on leur signalait que le test &laquo;&nbsp;mesurait les capacités intellectuelles&nbsp;&raquo; (activant le stéréotype sur les performances scolaires des Noirs) que lorsqu'il était présenté comme un exercice de résolution de problèmes sans valeur diagnostique. Cet effet a depuis été répliqué pour de nombreux groupes et domaines&nbsp;: femmes en mathématiques, personnes âgées en mémoire, étudiants de classes populaires en intelligence académique.</p>
<div class="highlight-box"><p><strong>Mécanisme&nbsp;:</strong> La menace du stéréotype mobilise des ressources cognitives (surveillance, inquiétude) au détriment des ressources disponibles pour la tâche. Elle peut aussi déclencher une &laquo;&nbsp;désidentification&nbsp;&raquo; protectrice&nbsp;: renoncer à se définir par le domaine menacé pour préserver son estime de soi, au prix d'un moindre investissement dans ce domaine.</p></div>

<h3>Les biais implicites</h3>
<p>Anthony Greenwald et Mahzarin Banaji ont développé le <strong>Test d'Association Implicite</strong> (IAT, 1998), outil mesurant la force des associations automatiques entre concepts (par ex.&nbsp;: &laquo;&nbsp;Blanc&nbsp;&raquo;/&laquo;&nbsp;Noir&nbsp;&raquo; et &laquo;&nbsp;bon&nbsp;&raquo;/&laquo;&nbsp;mauvais&nbsp;&raquo;). Le TAI révèle des biais implicites chez des individus qui se déclarent et se croient sincèrement égalitaires. Ces biais implicites influencent des comportements subtils (durée du contact visuel, ton de voix, décisions d'embauche à compétences égales) sans en avoir conscience.</p>
<p>L'existence des biais implicites a des implications importantes&nbsp;: les bonnes intentions ne suffisent pas à garantir l'équité des comportements. Des approches institutionnelles sont nécessaires — recrutement anonymisé, grilles d'évaluation structurées, audits de diversité — pour corriger les biais que les individus ne peuvent contrôler seuls.</p>

<h3>Les formes modernes de préjugés</h3>
<p>Les formes ouvertes et déclarées de racisme ou de sexisme ont décliné dans les sociétés occidentales depuis les années 1960. Mais les psychologues sociaux ont identifié des formes plus subtiles et diffuses. Le <strong>racisme aversif</strong> (Gaertner &amp; Dovidio, 1986) caractérise des individus qui se croient exempts de préjugés mais présentent des réponses discriminatoires dans des situations ambiguës où le comportement peut être justifié par des raisons autres que la race. Le <strong>sexisme bienveillant</strong> (Glick &amp; Fiske, 1996) englobe des attitudes ostensiblement positives envers les femmes (les protéger, les idéaliser) qui les confinent néanmoins à des rôles subordonnés et les pénalisent lorsqu'elles transgressent ces attentes.</p>
<p>Ces formes subtiles sont plus difficiles à détecter et à combattre que les préjugés déclarés, car elles ne se reconnaissent pas elles-mêmes comme telles et bénéficient d'une certaine acceptabilité sociale.</p>
<div class="highlight-box"><p><strong>Microagressions&nbsp;:</strong> Chester Pierce a forgé ce terme dans les années 1970 pour désigner des communications verbales, comportementales ou environnementales brèves et banales qui transmettent des messages hostiles, dérogatoires ou négatifs à des personnes membres de groupes marginalisés. Chaque microagression isolée peut sembler anodine&nbsp;; leur accumulation constitue un fardeau psychologique documenté (stress chronique, impact sur la santé mentale et les performances).</p></div>

<h3>Du préjugé à la discrimination&nbsp;: le continuum d'Allport</h3>
<p>Gordon Allport proposait un <strong>continuum de l'hostilité</strong> à cinq niveaux, allant de la moins grave à la plus grave expression des préjugés&nbsp;: (1) <em>anti-locution</em> (propos discriminatoires privés ou publics), (2) <em>évitement</em> (refus de contact avec l'exogroupe), (3) <em>discrimination</em> active (refus d'emploi, de logement, etc.), (4) <em>violence physique</em>, (5) <em>extermination</em> (cas extrêmes, génocides). Ce modèle rappelle que les discours de haine ne sont pas anodins&nbsp;: ils normalisent l'hostilité et préparent le terrain aux actes.</p>
<p>Des recherches contemporaines confirment que l'exposition répétée à des contenus stéréotypants ou dépréciateurs (médias, réseaux sociaux) augmente l'acceptation des préjugés et peut faciliter le passage à l'acte discriminatoire dans les contextes favorables.</p>

<h3>La théorie du contact intergroupe</h3>
<p>Gordon Allport a également formulé la <strong>théorie du contact</strong>&nbsp;: le contact entre membres de groupes différents peut réduire les préjugés, mais seulement si certaines conditions sont réunies — égalité de statut entre les groupes dans la situation de contact, objectifs communs, coopération interdépendante, soutien institutionnel et légitimation sociale. Sans ces conditions, le contact peut au contraire renforcer les préjugés.</p>
<p>Des méta-analyses portant sur plus de 500 études (Pettigrew &amp; Tropp, 2006) confirment l'efficacité du contact intergroupe de qualité pour réduire les préjugés. Ces résultats fondent des politiques de mixité scolaire, de déségrégation résidentielle et de programmes d'échange interculturel.</p>
<div class="highlight-box"><p><strong>Contact imaginé&nbsp;:</strong> Des recherches récentes montrent qu'imaginer une interaction positive avec un membre de l'exogroupe peut déjà réduire les préjugés — effet modéré mais robuste, particulièrement utile dans des contextes où le contact direct est difficile ou rare.</p></div>

<h3>Du racisme systémique à l'intersectionnalité</h3>
<p>Au-delà des préjugés individuels, les sciences sociales insistent sur le <strong>racisme systémique</strong>&nbsp;: des structures institutionnelles, des politiques et des pratiques qui produisent des inégalités raciales, souvent indépendamment des intentions des individus. Les inégalités documentées en matière d'accès au logement, à l'emploi, à la santé et à la justice pénale s'expliquent partiellement par des dynamiques structurelles qui transcendent les attitudes individuelles.</p>
<p>Le concept d'<strong>intersectionnalité</strong>, forgé par Kimberlé Crenshaw (1989), désigne l'articulation de plusieurs systèmes de domination (race, genre, classe, sexualité…) qui se combinent pour créer des formes spécifiques de discrimination. Une femme noire n'est pas simplement &laquo;&nbsp;femme&nbsp;&raquo; + &laquo;&nbsp;noire&nbsp;&raquo;&nbsp;: elle fait l'objet de discriminations qui ne s'additionnent pas mais se croisent de façon unique et ne sont pas saisies par les politiques ciblant séparément chaque dimension.</p>

<h3>Synthèse et perspectives</h3>
<p>Les préjugés et la discrimination trouvent leurs racines dans des mécanismes cognitifs universels (catégorisation, heuristiques, favoritisme endogroupe) amplifiés par des dynamiques sociales, institutionnelles et historiques. Leur réduction requiert des interventions à plusieurs niveaux&nbsp;: individuel (formation à la conscience des biais, pratique de l'écoute et du contact), institutionnel (procédures anonymisées, audits, représentation) et structurel (lutte contre les inégalités économiques et politiques qui alimentent la hiérarchisation des groupes). La psychologie sociale fournit des outils puissants d'analyse et d'action, mais elle ne peut à elle seule épuiser un problème qui est fondamentalement politique et éthique.</p>
      </div>
    </section>'''

# ------------------------------------------------------------------ #
#  Apply changes
# ------------------------------------------------------------------ #

pages['sociale/communication']['content'] = replace_sections(
    pages['sociale/communication']['content'], COMM_INTRO, COMM_CONTENU)

pages['sociale/dynamique-groupes']['content'] = replace_sections(
    pages['sociale/dynamique-groupes']['content'], DYN_INTRO, DYN_CONTENU)

pages['sociale/prejudices']['content'] = replace_sections(
    pages['sociale/prejudices']['content'], PREJ_INTRO, PREJ_CONTENU)

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

for k in ['sociale/communication', 'sociale/dynamique-groupes', 'sociale/prejudices']:
    print(f"{k}: {len(pages[k]['content'])} chars")

print("OK")
