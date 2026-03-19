#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrich sciences-po.json — replace generic content with real encyclopedic text."""

import json

INPUT = "assets/content/sciences-po.json"

# ─── helpers ────────────────────────────────────────────────────────────────

def intro_section(num, h2, subtitle, resume1, highlight, resume2):
    return f"""<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">{num}</div>
        <div class="section-info">
          <h2>{h2}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <p class="resume-text">{resume1}</p>
      <div class="highlight-box">
        <p>{highlight}</p>
      </div>
      <p class="resume-text">{resume2}</p>
    </section>"""

def contenu_section(num, subtitle, body_html):
    return f"""<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">{num}</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div class="course-content">
{body_html}
      </div>
    </section>"""

# ─── new contents ────────────────────────────────────────────────────────────

PAGES = {}

# ── theorie/ideologies ───────────────────────────────────────────────────────
PAGES["theorie/ideologies"] = dict(
    intro=intro_section(
        "01", "Introduction", "Les grandes familles de pensée politique",
        "Une <strong>idéologie politique</strong> est un système cohérent de valeurs, de croyances et d'objectifs qui guide l'action collective. Libéralisme, socialisme, conservatisme, anarchisme : ces grandes familles structurent depuis deux siècles le débat politique mondial.",
        "<strong>Question clé :</strong> Une idéologie n'est pas seulement un programme électoral : c'est une vision du monde, de la nature humaine et du rôle légitime du pouvoir. Comprendre ces fondements permet de décrypter les discours, les réformes et les conflits politiques.",
        "Les idéologies émergent dans un contexte historique précis — la Révolution industrielle, les Lumières, les révolutions — et continuent d'évoluer. Aucune n'est figée : le libéralisme du XIXe siècle n'est pas celui du XXIe, et le socialisme recouvre des réalités très différentes selon les pays.",
    ),
    contenu=contenu_section(
        "02", "Idéologies politiques — panorama et dynamiques",
        """<h3>Le libéralisme : liberté individuelle et marché</h3>
<p class="resume-text">Le libéralisme est né au XVIIe siècle avec Locke, qui pose les droits naturels (vie, liberté, propriété) comme antérieurs à l'État. Kant y ajoute l'autonomie morale. Au XIXe siècle, Stuart Mill défend la liberté d'expression et la tolérance dans <em>De la liberté</em> (1859) : « La seule liberté digne de ce nom est celle de poursuivre notre bien à notre façon. »</p>
<div class="highlight-box"><p><strong>Libéralisme classique vs néolibéralisme :</strong> Le libéralisme classique défend les libertés politiques et civiles. Le néolibéralisme (Hayek, Friedman, années 1970–80) accentue le primat du marché et la réduction de l'État. Ces deux variantes coexistent dans les partis libéraux contemporains.</p></div>
<p>Le libéralisme politique se décline en <em>droits négatifs</em> (non-interférence de l'État) et, dans sa version sociale-libérale, en <em>droits positifs</em> (éducation, santé). John Rawls dans <em>Théorie de la justice</em> (1971) tente une synthèse : la liberté maximale est compatible avec des inégalités seulement si elles profitent aux moins favorisés (principe de différence).</p>

<h3>Le socialisme : égalité, collectif et émancipation</h3>
<p class="resume-text">Le socialisme naît en réaction aux inégalités de la Révolution industrielle. Il recouvre plusieurs courants : socialisme utopique (Saint-Simon, Fourier), marxisme (lutte des classes, dictature du prolétariat), social-démocratie (réformes graduelles dans le cadre parlementaire), anarchisme social.</p>
<div class="highlight-box"><p><strong>Marx et Engels :</strong> Dans <em>Le Manifeste du Parti communiste</em> (1848), Marx et Engels analysent l'histoire comme lutte des classes et prévoient le dépassement du capitalisme par le socialisme, puis le communisme (société sans État ni classes). Cette vision a inspiré les révolutions russe (1917), chinoise (1949) et cubaine (1959).</p></div>
<p>La social-démocratie, développée en Europe du Nord au XXe siècle, choisit la voie réformiste : négociation collective, État-providence, impôt progressif. Elle accepte le marché tout en le corrigeant par la redistribution. Ce modèle — souvent qualifié de « socialisme démocratique » — est incarné par des partis comme le SPD allemand ou les socialistes scandinaves.</p>

<h3>Le conservatisme : ordre, tradition et continuité</h3>
<p class="resume-text">Edmund Burke fonde le conservatisme moderne dans ses <em>Réflexions sur la Révolution en France</em> (1790) : il défend la transmission des institutions contre les abstractions révolutionnaires. L'ordre social résulte d'une accumulation de sagesse collective qu'on ne peut réformer brutalement sans risque de chaos.</p>
<p>Le conservatisme moderne n'est pas un refus du changement, mais une méfiance envers le changement rapide et artificiel. Il valorise la famille, la religion, la nation et les corps intermédiaires (associations, Église, communes). En économie, il rejoint souvent le libéralisme (Reagan, Thatcher), mais certains courants conservateurs défendent l'interventionnisme protectionniste.</p>
<div class="highlight-box"><p><strong>Conservatisme libéral vs conservatisme social :</strong> Le conservatisme libéral priorise la liberté économique ; le conservatisme social insiste sur les valeurs traditionnelles et l'ordre moral. Aux États-Unis, ces deux composantes coexistent au sein du Parti républicain avec des tensions croissantes (Tea Party, MAGA).</p></div>

<h3>L'anarchisme : refus de toute domination</h3>
<p class="resume-text">L'anarchisme refuse toute autorité non justifiée, qu'elle soit étatique, capitaliste ou patriarcale. Proudhon (« La propriété, c'est le vol »), Bakounine et Kropotkine défendent une société d'associations libres et de coopération volontaire. L'anarchisme se distingue du socialisme d'État : il rejette la dictature du prolétariat et toute centralisation.</p>
<p>Au XXe siècle, l'anarchisme influence les mouvements syndicalistes (anarcho-syndicalisme, CNT espagnole), féministes et écologistes. L'anarcho-capitalisme (Rothbard) est une variante libérale radicale qui supprime l'État au profit du marché — à distinguer de l'anarchisme social, qui supprime à la fois l'État et le capitalisme.</p>

<h3>Nationalisme, populisme et idéologies du XXe siècle</h3>
<p class="resume-text">Le nationalisme, né des révolutions de 1848, fait de la nation le cadre légitime de l'action politique. Il peut être civique (appartenance par les lois), ethnique (appartenance par le sang/la culture) ou colonial (résistance à l'occupation étrangère). Le fascisme (Mussolini) et le nazisme (Hitler) sont des nationalismes extrêmes couplés à l'anticommunisme, au racisme et au culte du chef.</p>
<div class="highlight-box"><p><strong>Le populisme :</strong> Le populisme n'est pas une idéologie au sens fort, mais une logique politique (Laclau, Mudde) qui oppose « le peuple pur » aux « élites corrompues ». Il peut être de gauche (Podemos, Sanders) ou de droite (Trump, Orbán). Sa montée depuis 2008 reflète la crise de confiance dans les institutions représentatives.</p></div>

<h3>Les idéologies contemporaines : écologisme, féminisme, transhumanisme</h3>
<p class="resume-text">De nouvelles familles idéologiques se sont constituées au XXe–XXIe siècles. L'<strong>écologisme politique</strong> (Verts, décroissance) affirme que la crise environnementale impose de repenser les fondements du libéralisme et du socialisme industriels. Le <strong>féminisme</strong>, du suffragisme à l'intersectionnalité, remet en question les structures de genre dans toutes les idéologies. Le <strong>transhumanisme</strong> prône l'amélioration technologique de l'humain et génère de nouvelles fractures politiques.</p>
<p>Ces nouvelles idéologies brouillent le clivage gauche/droite. La question écologique transcende les partis ; le féminisme divise au sein de la gauche comme de la droite. L'axe progressisme/conservatisme et l'axe libéralisme/étatisme dessinent un espace à deux dimensions plus pertinent que la seule ligne gauche-droite.</p>
<div class="highlight-box"><p><strong>Repère :</strong> Aucune idéologie n'existe à l'état pur dans la pratique politique. Les partis opèrent des synthèses, des compromis et des recompositions permanentes. L'analyse idéologique doit donc distinguer les principes fondateurs des réalisations historiques, souvent plus ambiguës.</p></div>"""
    )
)

# ── theorie/contrat-social ───────────────────────────────────────────────────
PAGES["theorie/contrat-social"] = dict(
    intro=intro_section(
        "01", "Introduction", "Pourquoi obéit-on à l'État ?",
        "Le <strong>contrat social</strong> désigne la théorie selon laquelle l'autorité politique légitime repose sur un accord — réel ou fictif — entre les individus qui renoncent à une partie de leur liberté naturelle pour bénéficier de la sécurité et des avantages de la vie en société.",
        "<strong>Question fondatrice :</strong> Hobbes, Locke et Rousseau partent tous du même problème — la justification du pouvoir — mais aboutissent à des réponses radicalement différentes selon leur conception de la nature humaine et de la liberté.",
        "La théorie du contrat social révolutionne la pensée politique des XVIIe–XVIIIe siècles en substituant au fondement divin du pouvoir (droit divin des rois) un fondement rationnel et humain. Elle reste l'une des matrices intellectuelles les plus fécondes de la démocratie libérale.",
    ),
    contenu=contenu_section(
        "02", "Hobbes, Locke, Rousseau — trois contrats, trois visions",
        """<h3>L'état de nature : point de départ commun</h3>
<p class="resume-text">Tous les théoriciens du contrat social commencent par une fiction heuristique : qu'arriverait-il si les hommes vivaient sans État, sans lois, sans société organisée ? Cette expérience de pensée — l'<strong>état de nature</strong> — permet de déduire pourquoi et comment les hommes consentent à se soumettre à une autorité commune.</p>
<div class="highlight-box"><p><strong>Attention :</strong> L'état de nature n'est pas un récit historique. Ni Hobbes ni Locke ni Rousseau ne prétendent décrire une époque réelle. C'est un outil analytique pour identifier les fondements rationnels du pouvoir politique.</p></div>

<h3>Thomas Hobbes : la sécurité contre la liberté</h3>
<p class="resume-text">Dans le <em>Léviathan</em> (1651), Hobbes décrit l'état de nature comme une « guerre de tous contre tous » (<em>bellum omnium contra omnes</em>) où la vie est « solitaire, pauvre, mauvaise, brutale et courte ». La nature humaine est fondamentalement animée par la peur de la mort et le désir de puissance.</p>
<p>Pour sortir de cet état de violence, les individus concluent un pacte : ils transfèrent <em>toute</em> leur puissance à un souverain absolu (le Léviathan). En échange, celui-ci garantit la paix et la sécurité. Ce contrat est irrévocable : les sujets ne peuvent reprendre leur liberté naturelle une fois le souverain institué, sauf si celui-ci ne peut plus les protéger.</p>
<div class="highlight-box"><p><strong>Portée politique :</strong> La philosophie de Hobbes justifie l'absolutisme éclairé et influence les théories de l'État fort. Elle implique qu'aucune rébellion n'est légitime tant que le souverain remplit sa fonction première : maintenir la paix civile.</p></div>

<h3>John Locke : la propriété et les droits naturels</h3>
<p class="resume-text">Dans les <em>Deux traités du gouvernement civil</em> (1689), Locke propose une vision bien plus optimiste de l'état de nature : les hommes y vivent selon la loi naturelle (raison), jouissent de droits inaliénables (vie, liberté, propriété). Le problème n'est pas la guerre, mais l'absence d'arbitre impartial pour régler les conflits.</p>
<p>Le contrat lockéen est donc limité : les individus délèguent à l'État le pouvoir de protéger leurs droits naturels, mais ne les lui transfèrent pas. Si le gouvernement viole ces droits, le peuple a le <em>droit de résistance</em> — voire de révolution. Cette idée influencera directement la Glorieuse Révolution (1688), la Déclaration d'indépendance américaine (1776) et la DDHC (1789).</p>
<div class="highlight-box"><p><strong>Locke et la démocratie libérale :</strong> La pensée de Locke fonde le constitutionnalisme, la séparation des pouvoirs et la protection des droits individuels. Elle reste l'une des sources intellectuelles majeures du libéralisme politique occidental.</p></div>

<h3>Jean-Jacques Rousseau : la volonté générale</h3>
<p class="resume-text">Rousseau renverse la vision hobbesienne : l'homme est naturellement bon, c'est la société qui le corrompt (<em>Discours sur l'inégalité</em>, 1755). Dans <em>Du contrat social</em> (1762), il propose un modèle de légitimité radicalement démocratique : la souveraineté appartient au peuple et ne peut être aliénée ni représentée.</p>
<p>La clé est la notion de <strong>volonté générale</strong> : distincte de la somme des volontés particulières, elle vise le bien commun. La loi légitime est celle que chaque citoyen se donne à lui-même en tant que membre du corps politique. L'obéissance à la loi est donc « obéissance à soi-même » — condition de la liberté véritable.</p>
<div class="highlight-box"><p><strong>Tension dans Rousseau :</strong> La volonté générale peut être « forcée » selon Rousseau — ce qui a été interprété comme une justification possible du despotisme révolutionnaire. Tocqueville et Berlin y voient le germe de la « liberté des Anciens » (participation collective) au détriment de la « liberté des Modernes » (droits individuels).</p></div>

<h3>Héritage et critiques contemporaines</h3>
<p class="resume-text">La théorie du contrat social a connu un renouveau au XXe siècle avec John Rawls (<em>Théorie de la justice</em>, 1971). Rawls imagine un « voile d'ignorance » : les principes de justice sont ceux que des individus rationnels choisiraient sans connaître leur place dans la société. Il aboutit à deux principes : égale liberté pour tous, et tolérance des inégalités seulement si elles profitent aux plus défavorisés.</p>
<p>Robert Nozick répond avec <em>Anarchie, État et Utopie</em> (1974) : tout État redistribuant les richesses viole les droits de propriété. Seul un État minimal (protection et contrats) est légitime. Ce débat Rawls/Nozick structure encore la philosophie politique libérale contemporaine.</p>
<div class="highlight-box"><p><strong>Critiques féministes et communautariennes :</strong> Carol Pateman (<em>Le Contrat sexuel</em>, 1988) montre que le contrat social classique est en réalité un contrat entre hommes qui exclut les femmes de la sphère publique. Les communautariens (MacIntyre, Sandel) critiquent le « moi non encombré » des théories libérales : les individus ne sont pas des atomes abstraits, mais des êtres enracinés dans des communautés qui forment leur identité.</p></div>"""
    )
)

# ── theorie/antiquite ────────────────────────────────────────────────────────
PAGES["theorie/antiquite"] = dict(
    intro=intro_section(
        "01", "Introduction", "Les fondateurs de la réflexion politique",
        "La <strong>pensée politique antique</strong> pose les questions fondamentales qui animent encore la philosophie politique contemporaine : Qu'est-ce qu'une cité juste ? Qui doit gouverner ? Quel est le meilleur régime ? Platon, Aristote et Cicéron en sont les figures majeures.",
        "<strong>Originalité de l'Antiquité :</strong> Les Grecs inventent la politique comme discipline autonome — distincte de la religion et de la cosmologie. La cité (polis) devient le cadre de la réflexion éthique et politique, car c'est en elle que l'homme accomplit sa nature.",
        "Cette pensée n'est pas un simple héritage muséal : les débats sur la démocratie, l'oligarchie, la tyrannie et la justice chez Platon et Aristote résonnent avec les crises démocratiques contemporaines. La pensée romaine, avec Cicéron, enrichit cette tradition en insistant sur la loi naturelle et la res publica.",
    ),
    contenu=contenu_section(
        "02", "Platon, Aristote, Cicéron — aux origines de la philosophie politique",
        """<h3>Le contexte : la polis grecque et l'invention de la politique</h3>
<p class="resume-text">La pensée politique antique naît dans les cités-États grecques (Ve–IVe siècles av. J.-C.), notamment Athènes. La démocratie athénienne — limitée aux citoyens mâles libres, excluant femmes, esclaves et métèques — est le premier laboratoire de gouvernement populaire. La crise de la démocratie athénienne (procès et mort de Socrate en 399 av. J.-C., défaites militaires) pousse Platon à une critique radicale du régime démocratique.</p>
<div class="highlight-box"><p><strong>La polis selon Aristote :</strong> « L'homme est par nature un animal politique » (<em>zoon politikon</em>). La cité n'est pas un simple contrat utilitaire : elle est la condition de l'épanouissement humain. Vivre hors de la cité, c'est être une bête ou un dieu.</p></div>

<h3>Platon : philosophes-rois et cité idéale</h3>
<p class="resume-text">Dans <em>La République</em> (vers 380 av. J.-C.), Platon expose sa vision de la cité juste. La justice dans la cité est l'harmonie entre trois classes : les gardiens-philosophes (raison), les guerriers (courage) et les artisans-producteurs (tempérance). Chacun doit accomplir sa fonction propre.</p>
<p>Platon condamne la démocratie : en laissant gouverner des ignorants animés par leurs désirs, elle engendre la démagogie, puis la tyrannie. Seul le philosophe, qui a contemplé les Idées (dont l'Idée du Bien), est apte à gouverner. Cette utopie aristocratique repose sur la théorie des Formes et le mythe de la caverne.</p>
<div class="highlight-box"><p><strong>La dégénérescence des régimes :</strong> Platon décrit une séquence de dégradation : aristocratie → timocratie (pouvoir des guerriers) → oligarchie (pouvoir des riches) → démocratie → tyrannie. La démocratie, en libérant tous les désirs, prépare le terrain pour le tyran qui promet l'ordre.</p></div>
<p>Dans les <em>Lois</em> (dernier dialogue), Platon tempère son idéalisme et accepte un régime mixte où la loi prime sur les hommes — vision plus proche de la réalité politique.</p>

<h3>Aristote : empirisme politique et régimes mixtes</h3>
<p class="resume-text">Aristote adopte une méthode empirique : il étudie 158 constitutions de cités pour en tirer des lois générales (<em>Politique</em>, <em>Constitution d'Athènes</em>). Sa classification des régimes repose sur deux critères : le nombre de gouvernants (un, peu, beaucoup) et leur orientation (bien commun ou intérêt particulier).</p>
<table style="width:100%;border-collapse:collapse;margin:1rem 0">
<tr style="background:rgba(255,255,255,0.07)"><th style="padding:8px;text-align:left">Nb. gouvernants</th><th style="padding:8px;text-align:left">Bien commun</th><th style="padding:8px;text-align:left">Intérêt particulier</th></tr>
<tr><td style="padding:8px">Un</td><td style="padding:8px"><strong>Royauté</strong></td><td style="padding:8px">Tyrannie</td></tr>
<tr style="background:rgba(255,255,255,0.04)"><td style="padding:8px">Quelques-uns</td><td style="padding:8px"><strong>Aristocratie</strong></td><td style="padding:8px">Oligarchie</td></tr>
<tr><td style="padding:8px">Beaucoup</td><td style="padding:8px"><strong>Politeia</strong> (régime mixte)</td><td style="padding:8px">Démocratie</td></tr>
</table>
<p>Aristote préfère la <em>politeia</em> — régime mixte combinant éléments oligarchiques et démocratiques — gouverné par une classe moyenne nombreuse. Il est moins hostile à la démocratie que Platon, mais méfiant envers les extrêmes : trop de richesses ou trop de pauvreté engendrent instabilité et démagogie.</p>
<div class="highlight-box"><p><strong>L'amitié civique (philia) :</strong> Pour Aristote, la cité n'est pas maintenue par la seule loi ou la force, mais par un sentiment de communauté et d'amitié civique. La justice distributive — donner à chacun selon son mérite — est le fondement de l'ordre politique légitime.</p></div>

<h3>Cicéron et la pensée romaine : droit naturel et res publica</h3>
<p class="resume-text">Cicéron (106–43 av. J.-C.) adapte la philosophie grecque au contexte romain dans <em>De la République</em> et <em>Des lois</em>. Il définit la <em>res publica</em> (chose publique) comme « l'affaire du peuple » — mais le peuple est compris comme une communauté unie par le droit et l'intérêt commun.</p>
<p>Cicéron développe la notion de <strong>droit naturel</strong> : une loi universelle, fondée sur la raison, qui transcende les lois positives de chaque cité. Cette idée, transmise au Moyen Âge par Thomas d'Aquin, sera le fondement du droit international moderne (Grotius, Pufendorf).</p>
<div class="highlight-box"><p><strong>Héritage de la pensée antique :</strong> La distinction aristotélicienne entre régimes justes et déviants, l'idée platonicienne que le gouvernement doit servir le bien commun, et la notion cicéronienne de droit naturel forment le socle sur lequel se construira la pensée médiévale, puis moderne. Machiavel, Montesquieu et même Rawls dialoguent avec cet héritage.</p></div>"""
    )
)

# ── theorie/contemporaine ────────────────────────────────────────────────────
PAGES["theorie/contemporaine"] = dict(
    intro=intro_section(
        "01", "Introduction", "La philosophie politique au XXe–XXIe siècles",
        "La <strong>théorie politique contemporaine</strong> reprend les questions classiques — justice, liberté, égalité, légitimité — en les confrontant aux réalités du XXe siècle : totalitarismes, État-providence, mondialisation, multiculturalisme. Rawls, Nozick, Habermas, Sen en sont les figures centrales.",
        "<strong>Enjeu :</strong> Après les catastrophes du XXe siècle (nazisme, stalinisme, colonialisme), les philosophes politiques cherchent des fondements solides pour la démocratie libérale — sans dogmatisme, en intégrant le pluralisme des valeurs.",
        "Ces débats ne sont pas purement académiques : les principes rawlsiens inspirent des politiques d'égalité des chances ; l'approche par les capabilités de Sen influence les indicateurs de développement humain (IDH) ; la théorie délibérative de Habermas nourrit les réformes de la démocratie participative.",
    ),
    contenu=contenu_section(
        "02", "Rawls, Nozick, Habermas, Sen — les grands débats",
        """<h3>John Rawls : la justice comme équité</h3>
<p class="resume-text"><em>A Theory of Justice</em> (1971) de Rawls est l'œuvre la plus influente de la philosophie politique du XXe siècle. Rawls cherche des principes de justice que des individus rationnels choisiraient derrière un « voile d'ignorance » — sans connaître leur position sociale, leurs talents, leur sexe, leur religion.</p>
<div class="highlight-box"><p><strong>Les deux principes de Rawls :</strong><br>
1. <em>Principe d'égale liberté :</em> chaque personne doit avoir les libertés fondamentales les plus étendues compatibles avec les mêmes libertés pour tous.<br>
2. <em>Principe de différence :</em> les inégalités économiques et sociales sont acceptables seulement si elles bénéficient aux membres les moins favorisés de la société (maximin).</p></div>
<p>Rawls distingue la « structure de base » de la société (institutions fondamentales : constitution, marché, famille) des décisions individuelles. La justice porte principalement sur la structure de base, pas sur les choix privés. Dans <em>Libéralisme politique</em> (1993), il reformule sa théorie pour la rendre compatible avec le pluralisme des conceptions du bien dans les démocraties modernes.</p>

<h3>Robert Nozick : l'État minimal et les droits de propriété</h3>
<p class="resume-text">En réponse directe à Rawls, Nozick publie <em>Anarchie, État et Utopie</em> (1974). Sa thèse : les individus ont des droits inaliénables (vie, liberté, propriété) qui ne peuvent être violés même pour améliorer le sort des plus défavorisés. Tout État redistributif viole ces droits.</p>
<p>Nozick défend une théorie <em>historique</em> de la justice : une distribution est juste si elle résulte d'acquisitions et de transferts légitimes (principe d'intégrité des transferts). La redistribution fiscale est assimilée à du « travail forcé » car elle prive les individus du fruit de leur travail.</p>
<div class="highlight-box"><p><strong>Rawls vs Nozick :</strong> Ce débat fonde l'opposition entre libéralisme égalitaire (gauche libérale) et libéralisme libertarien (droite libérale). Rawls justifie l'État-providence ; Nozick le condamne. Ce clivage structure encore les débats fiscaux, sociaux et sanitaires dans les démocraties contemporaines.</p></div>

<h3>Jürgen Habermas : démocratie délibérative et raison communicationnelle</h3>
<p class="resume-text">Habermas développe la théorie de l'<strong>agir communicationnel</strong> (<em>Théorie de l'agir communicationnel</em>, 1981) : la rationalité ne se réduit pas à l'utilité individuelle, elle inclut la rationalité communicationnelle — la capacité à se mettre d'accord par le dialogue.</p>
<p>Sur le plan politique, cela donne la <strong>démocratie délibérative</strong> (<em>Droit et démocratie</em>, 1992) : la légitimité des décisions politiques dépend de la qualité des délibérations publiques qui les ont produites. Une loi est légitime si elle aurait pu être acceptée par tous les citoyens dans un espace public de discussion libre et rationnel.</p>
<div class="highlight-box"><p><strong>L'espace public :</strong> Habermas analyse la montée en puissance de l'espace public bourgeois au XVIIIe siècle (cafés, presse, parlements) dans <em>L'espace public</em> (1962). Sa colonisation par les médias de masse et les intérêts économiques menace la démocratie délibérative. La réforme démocratique passe par la revitalisation d'un débat public authentique.</p></div>

<h3>Amartya Sen : l'approche par les capabilités</h3>
<p class="resume-text">Sen propose une alternative aux théories de la justice centrées sur les ressources ou les utilités : l'<strong>approche par les capabilités</strong> (ou capacités). Ce qui compte pour la justice, ce ne sont pas les biens primaires (Rawls) ni le bonheur subjectif (utilitarisme), mais les <em>capabilités réelles</em> des individus — ce qu'ils sont effectivement capables de faire et d'être.</p>
<p>Avec Martha Nussbaum, Sen identifie une liste de capabilités centrales (vie, santé, intégrité physique, sens, émotions, raison pratique, affiliation, espèces vivantes, jeu, contrôle politique). Cette approche fonde l'<strong>Indice de Développement Humain</strong> (IDH) du PNUD (1990) — alternative au PIB par habitant.</p>
<div class="highlight-box"><p><strong>Sen et la démocratie :</strong> Dans <em>La Démocratie des autres</em> (2005), Sen défend que la démocratie n'est pas une invention occidentale mais une valeur universelle. Il montre également qu'aucune grande famine n'a jamais eu lieu dans une démocratie fonctionnelle : la liberté de presse et les élections créent des incitations pour les gouvernants à agir.</p></div>

<h3>Autres figures : Arendt, Foucault, Young</h3>
<p class="resume-text">Hannah Arendt (<em>Les Origines du totalitarisme</em>, 1951 ; <em>La Condition de l'homme moderne</em>, 1958) distingue le travail, l'œuvre et l'action — et fait de l'action politique (espace public, pluralité) la condition de la liberté véritable. Elle analyse le totalitarisme comme destruction de l'espace politique par l'idéologie et la terreur.</p>
<p>Michel Foucault (<em>Surveiller et punir</em>, 1975 ; <em>Histoire de la sexualité</em>) analyse le pouvoir non comme une chose possédée mais comme un réseau de relations traversant toutes les institutions. La <em>biopolitique</em> désigne le gouvernement des corps et des populations (normes sanitaires, discipline scolaire, régulation de la sexualité) — concept central pour comprendre les politiques contemporaines de santé publique et de sécurité.</p>
<div class="highlight-box"><p><strong>Iris Marion Young :</strong> Dans <em>Justice and the Politics of Difference</em> (1990), Young critique les théories universalistes (Rawls, Habermas) pour leur ignorance des différences de genre, de race et de classe. Elle plaide pour une politique de la présence — représentation des groupes opprimés dans les institutions — et une conception délibérative attentive aux asymétries de pouvoir.</p></div>"""
    )
)

# ── theorie/critiques ────────────────────────────────────────────────────────
PAGES["theorie/critiques"] = dict(
    intro=intro_section(
        "01", "Introduction", "Les pensées qui contestent l'ordre établi",
        "Les <strong>critiques du pouvoir</strong> constituent un courant intellectuel qui remet en question les fondements de l'ordre politique, économique et social. Marx, Foucault, Arendt et le féminisme politique offrent des grilles de lecture alternatives pour comprendre les dominations.",
        "<strong>Enjeu :</strong> Ces pensées ne sont pas de simples critiques marginales — elles ont transformé les sciences sociales, inspiré des mouvements politiques majeurs et enrichi la démocratie en révélant les angles morts des théories libérales dominantes.",
        "Comprendre les critiques du pouvoir permet d'affiner l'analyse politique en dépassant le seul formalisme institutionnel. Elles posent des questions essentielles : Qui bénéficie vraiment de l'ordre établi ? Quelles dominations sont invisibilisées ? Comment le pouvoir se reproduit-il en dehors des seules institutions officielles ?",
    ),
    contenu=contenu_section(
        "02", "Marx, Foucault, Arendt, féminisme — les grandes critiques",
        """<h3>Karl Marx : la critique de l'économie politique</h3>
<p class="resume-text">Marx (1818–1883) propose une théorie critique globale de la société capitaliste. Dans <em>Le Capital</em> (1867), il analyse la <strong>plus-value</strong> : les capitalistes s'approprient le travail non payé des ouvriers, fondement de l'exploitation. Le salaire cache cette relation en faisant apparaître le travail comme une marchandise librement échangée.</p>
<div class="highlight-box"><p><strong>L'idéologie selon Marx :</strong> « Les idées dominantes d'une époque sont les idées de la classe dominante ». Les institutions politiques, juridiques et culturelles servent à légitimer et reproduire les rapports de production. L'État n'est pas neutre : il est l'instrument de la classe dominante.</p></div>
<p>Marx distingue <em>infrastructure</em> (rapports économiques de production) et <em>superstructure</em> (droit, politique, religion, culture). L'infrastructure détermine en dernière instance la superstructure — mais sans déterminisme mécaniste : les luttes politiques et idéologiques ont une efficacité propre.</p>
<p>L'héritage de Marx est immense et contesté : révolutions communistes du XXe siècle (URSS, Chine, Cuba), mais aussi réformisme social-démocrate, syndicalisme, études culturelles (École de Francfort), postcolonialisme. Le marxisme analytique (Cohen, Elster) et le néo-marxisme (Gramsci, Althusser) renouvellent constamment cet héritage.</p>

<h3>Antonio Gramsci : hégémonie et intellectuels organiques</h3>
<p class="resume-text">Dans ses <em>Cahiers de prison</em> (1929–1935), Gramsci développe la notion d'<strong>hégémonie culturelle</strong> : la domination de classe ne s'exerce pas seulement par la force (État coercitif) mais par le <em>consentement</em> — à travers les institutions culturelles (école, église, médias) qui diffusent les valeurs des classes dominantes.</p>
<div class="highlight-box"><p><strong>Les intellectuels organiques :</strong> Gramsci distingue les intellectuels traditionnels (gardiens de la culture dominante) et les intellectuels organiques (liés à une classe sociale, qui expriment ses intérêts et sa vision du monde). Tout groupe social produit ses propres intellectuels organiques — y compris la classe ouvrière. La contre-hégémonie culturelle est un préalable à la transformation politique.</p></div>

<h3>Michel Foucault : généalogie du pouvoir et biopolitique</h3>
<p class="resume-text">Foucault (<em>Surveiller et punir</em>, 1975 ; <em>Histoire de la folie</em>, 1961) opère un renversement : le pouvoir n'est pas une chose possédée par une classe ou un État, mais un réseau de relations et de pratiques disséminées dans tout le corps social. Il s'exerce à travers les normes, les discours, les institutions (hôpital, prison, école).</p>
<p>La notion de <strong>discipline</strong> désigne les techniques de surveillance et de normalisation des corps (Panoptique de Bentham comme modèle). La <strong>biopolitique</strong> étend ce gouvernement aux populations : contrôle de la natalité, santé publique, gestion des migrations. Foucault analyse ainsi comment les États modernes « gouvernent » les vivants.</p>
<div class="highlight-box"><p><strong>Gouvernementalité :</strong> Dans ses cours au Collège de France, Foucault analyse la « gouvernementalité libérale » — comment le néolibéralisme produit des sujets gouvernés non par la contrainte mais par l'intériorisation de normes de performance, de responsabilité individuelle et de compétition. Ce concept alimente les critiques contemporaines du management, de l'entrepreneuriat de soi et des politiques d'activation.</p></div>

<h3>Hannah Arendt : totalitarisme et condition humaine</h3>
<p class="resume-text">Arendt (<em>Les Origines du totalitarisme</em>, 1951) analyse le nazisme et le stalinisme comme des phénomènes politiques radicalement nouveaux, irréductibles à la tyrannie classique. Le totalitarisme vise l'annihilation de la pluralité humaine et de l'espace politique par l'idéologie et la terreur systématique.</p>
<p>Dans <em>La Condition de l'homme moderne</em> (1958), elle distingue trois activités humaines fondamentales : le travail (reproduction biologique), l'œuvre (fabrication du monde durable) et l'<strong>action</strong> (parole et acte dans l'espace public). L'action politique est la forme suprême de la liberté humaine — elle est radicalement imprévisible et plurielle.</p>
<div class="highlight-box"><p><strong>La banalité du mal :</strong> Dans <em>Eichmann à Jérusalem</em> (1963), Arendt introduit ce concept : les grands crimes ne sont pas toujours commis par des monstres, mais par des individus ordinaires qui ont cessé de penser. La responsabilité politique et morale exige un exercice actif du jugement — refus de se soumettre à l'ordre sans réflexion.</p></div>

<h3>Le féminisme politique : de la suffragette à l'intersectionnalité</h3>
<p class="resume-text">Le féminisme politique ne se réduit pas à une revendication d'égalité formelle. Il critique les structures de domination de genre inscrites dans le droit, les institutions et les représentations culturelles. Simone de Beauvoir (<em>Le Deuxième Sexe</em>, 1949) pose la formule fondatrice : « On ne naît pas femme, on le devient. » Le genre est une construction sociale et politique.</p>
<p>Le féminisme de la deuxième vague (années 1960–70) thématise le <em>patriarcat</em>, les violences conjugales et le travail domestique non rémunéré (« le privé est politique »). La troisième vague et le féminisme postcolonial (hooks, Spivak, Collins) introduisent l'<strong>intersectionnalité</strong> (Crenshaw, 1989) : les dominations de genre, de race et de classe se croisent et se renforcent.</p>
<div class="highlight-box"><p><strong>Apports et tensions :</strong> Le féminisme politique a transformé le droit (parité, lutte contre les violences), la représentation politique et les théories de la justice. Il génère aussi des débats internes : féminisme libéral vs féminisme radical, rapport au travail du sexe, inclusion des femmes trans, universalisme vs particularisme culturel.</p></div>"""
    )
)

# ── systemes/democratie ──────────────────────────────────────────────────────
PAGES["systemes/democratie"] = dict(
    intro=intro_section(
        "01", "Introduction", "Principes, formes et défis de la démocratie",
        "La <strong>démocratie</strong> — du grec <em>demos</em> (peuple) et <em>kratos</em> (pouvoir) — désigne un régime politique dans lequel la souveraineté appartient au peuple. Démocratie directe, représentative, participative, délibérative : ces variantes reflètent des conceptions différentes de la participation et de la légitimité.",
        "<strong>Paradoxe démocratique :</strong> La démocratie est à la fois le régime le plus exigeant (elle suppose un peuple informé, actif et pluraliste) et le plus fragile (elle peut se défaire de l'intérieur par la démagogie, la corruption ou le désengagement civique). Churchill : « La démocratie est le pire régime, à l'exception de tous les autres. »",
        "La démocratie n'est pas un état stable mais un processus permanent. Les crises démocratiques contemporaines — montée du populisme, crise de représentation, désinformation — invitent à réexaminer ses fondements et à en repenser les formes.",
    ),
    contenu=contenu_section(
        "02", "Démocratie — principes, variantes et défis contemporains",
        """<h3>Les fondements de la démocratie moderne</h3>
<p class="resume-text">La démocratie moderne repose sur plusieurs principes fondamentaux : la <strong>souveraineté populaire</strong> (le pouvoir émane du peuple), la <strong>séparation des pouvoirs</strong> (Montesquieu), la <strong>règle de la majorité</strong> assortie de la protection des minorités, et la <strong>garantie des droits fondamentaux</strong>.</p>
<div class="highlight-box"><p><strong>Démocratie libérale :</strong> La démocratie contemporaine est libérale au sens où elle combine suffrage universel et protection des libertés individuelles (presse, association, culte). Ces deux composantes peuvent être en tension : une majorité peut vouloir réduire les droits d'une minorité. Les constitutions et les cours constitutionnelles servent à protéger ces droits contre la volonté majoritaire.</p></div>

<h3>Démocratie directe et démocratie représentative</h3>
<p class="resume-text">La <strong>démocratie directe</strong> athénienne (Ve siècle av. J.-C.) implique que les citoyens délibèrent et décident eux-mêmes, sans intermédiaire (assemblée, tirage au sort). Pratiquée à petite échelle, elle reste un idéal ou un complément (référendum, initiative populaire) dans les démocraties modernes.</p>
<p>La <strong>démocratie représentative</strong> confie l'exercice du pouvoir à des représentants élus. Elle résout le problème d'échelle mais génère un <em>principal-agent problem</em> : les élus peuvent diverger des préférences de leurs mandants. Les mécanismes de contrôle (élections, presse libre, opposition, Parlement) visent à limiter cette dérive.</p>
<div class="highlight-box"><p><strong>Le mandat :</strong> Le mandat représentatif (France, Royaume-Uni) distingue le représentant qui vote selon sa conscience du délégué (mandat impératif) lié à des instructions précises. Rousseau rejetait la représentation comme aliénation de la souveraineté ; Burke défendait le mandat représentatif : le député représente la nation, pas sa circonscription.</p></div>

<h3>Les régimes électoraux et leurs effets</h3>
<p class="resume-text">Le mode de scrutin structure profondément la vie politique. Le scrutin majoritaire à un tour (Royaume-Uni) favorise le bipartisme et la stabilité gouvernementale. Le scrutin proportionnel (Pays-Bas, Israël) assure une représentation fidèle mais produit souvent des coalitions fragiles. Le scrutin majoritaire à deux tours (France) combine les deux logiques.</p>
<p>La loi de Duverger (1951) énonce que le scrutin majoritaire à un tour tend vers le bipartisme, le scrutin proportionnel vers le multipartisme. Des études comparées ont nuancé cette loi : le contexte institutionnel et historique compte autant que le mode de scrutin.</p>
<div class="highlight-box"><p><strong>Démocratie et participation :</strong> L'abstention croissante dans les démocraties occidentales (50–60 % aux législatives françaises 2022) témoigne d'une crise de la démocratie représentative. Les réponses incluent : vote obligatoire (Belgique, Australie), tirage au sort (conventions citoyennes), démocratie délibérative, démocratie liquide (délégation de vote flexible).</p></div>

<h3>Les vagues de démocratisation</h3>
<p class="resume-text">Samuel Huntington (<em>The Third Wave</em>, 1991) identifie trois grandes vagues de démocratisation :<br>
– <strong>Première vague</strong> (1828–1926) : États-Unis, Europe occidentale<br>
– <strong>Deuxième vague</strong> (1943–1962) : décolonisation, défaite de l'Axe<br>
– <strong>Troisième vague</strong> (1974– ) : Portugal, Espagne, Amérique latine, Europe de l'Est, Afrique</p>
<p>Chaque vague est suivie d'un reflux partiel. Depuis 2006 (Freedom House), le monde connaît une <strong>récession démocratique</strong> : recul des libertés civiles, montée des régimes hybrides (démocraties illibérales, autocraties électorales). Hongrie, Turquie, Inde, Brésil (2018–2022) illustrent cette tendance.</p>
<div class="highlight-box"><p><strong>Démocraties illibérales :</strong> Concept popularisé par Fareed Zakaria (1997) et revendiqué par Viktor Orbán : un régime peut organiser des élections régulières tout en réduisant la liberté de presse, l'indépendance judiciaire et les droits des minorités. Ce paradoxe illustre la tension entre démocratie électorale (règle de la majorité) et démocratie libérale (protection des droits).</p></div>

<h3>Les défis contemporains de la démocratie</h3>
<p class="resume-text">La démocratie contemporaine fait face à plusieurs défis structurels :<br>
– <strong>Désinformation et réseaux sociaux</strong> : les plateformes numériques favorisent les chambres d'écho et amplifient les fausses informations, menaçant la qualité du débat public.<br>
– <strong>Financement de la politique</strong> : la dépendance aux grands donateurs privés (Citizens United, 2010 aux États-Unis) crée des risques de capture de l'État par les élites économiques.<br>
– <strong>Crise de représentation</strong> : les partis traditionnels ne parviennent plus à agréger les intérêts diversifiés d'une société fragmentée, ouvrant la voie au populisme.<br>
– <strong>Délégation technique</strong> : la complexité des politiques publiques (budget, santé, environnement) pousse à déléguer aux experts et aux agences indépendantes, au détriment du contrôle démocratique.</p>
<div class="highlight-box"><p><strong>Pistes de renouveau démocratique :</strong> Les conventions citoyennes (tirage au sort), la démocratie délibérative (Habermas), le fédéralisme comme subsidiarité, la transparence algorithmique, la régulation des plateformes numériques constituent des pistes explorées pour revitaliser la démocratie au XXIe siècle.</p></div>"""
    )
)

# ── systemes/autoritarisme ───────────────────────────────────────────────────
PAGES["systemes/autoritarisme"] = dict(
    intro=intro_section(
        "01", "Introduction", "Mécanismes et formes du pouvoir non démocratique",
        "L'<strong>autoritarisme</strong> désigne un régime politique dans lequel le pouvoir est concentré entre les mains d'un individu ou d'un groupe restreint, sans contrôle démocratique réel. Le <strong>totalitarisme</strong> en est la forme la plus extrême : il vise à contrôler l'ensemble de la vie sociale, y compris la sphère privée.",
        "<strong>Distinction fondamentale :</strong> Juan Linz différencie l'autoritarisme (pluralisme limité, mobilisation faible, pas d'idéologie directrice unique) du totalitarisme (idéologie unique, mobilisation massive, parti unique, terreur). La distinction permet de ne pas confondre Pinochet et Hitler, Franco et Staline.",
        "Comprendre l'autoritarisme est essentiel pour plusieurs raisons : il concerne encore la majorité des régimes politiques mondiaux, il peut surgir dans des démocraties (érosion démocratique), et ses mécanismes de maintien au pouvoir éclairent les dynamiques de résistance et de transition.",
    ),
    contenu=contenu_section(
        "02", "Autoritarisme, totalitarisme, régimes hybrides",
        """<h3>La classification des régimes non démocratiques</h3>
<p class="resume-text">Juan Linz (<em>Totalitarian and Authoritarian Regimes</em>, 1975) propose la classification la plus influente des régimes non démocratiques. Il identifie trois types :<br>
– <strong>Totalitarisme</strong> : idéologie exclusive, parti de masse, chef charismatique, terreur systématique (URSS stalinienne, Allemagne nazie, Corée du Nord)<br>
– <strong>Autoritarisme</strong> : pluralisme politique limité, pas de mobilisation intensive, pas d'idéologie élaborée (Espagne franquiste, Chili Pinochet)<br>
– <strong>Sultanism</strong> : personnalisation extrême du pouvoir, clientélisme, pas d'idéologie (Somoza au Nicaragua, Trujillo en République dominicaine)</p>
<div class="highlight-box"><p><strong>Arendt sur le totalitarisme :</strong> Hannah Arendt (<em>Les Origines du totalitarisme</em>, 1951) analyse le nazisme et le stalinisme comme des phénomènes nouveaux, irréductibles à la tyrannie classique. Le totalitarisme vise non seulement à contrôler les comportements mais à transformer la nature humaine, à détruire la pluralité et la spontanéité.</p></div>

<h3>Les mécanismes de maintien du pouvoir autoritaire</h3>
<p class="resume-text">Les régimes autoritaires ne reposent pas sur la seule terreur. Ils combinent plusieurs mécanismes :<br>
– <strong>Coercition</strong> : police secrète, emprisonnement des opposants, censure (NKVD soviétique, Stasi est-allemande)<br>
– <strong>Cooptation</strong> : intégration des élites économiques, militaires et religieuses dans le régime par des avantages matériels<br>
– <strong>Légitimation</strong> : référendums, élections sans enjeu, nationalisme, religion d'État<br>
– <strong>Institutionnalisation</strong> : parti unique, armée politisée, justice aux ordres</p>
<p>Gandhi et Przeworski montrent que les régimes autoritaires qui institutionnalisent des règles de succession et des mécanismes de partage du pouvoir sont plus stables que les sultanismes personnalisés.</p>
<div class="highlight-box"><p><strong>Le paradoxe du dictateur :</strong> Pour rester au pouvoir, un dictateur doit surveiller ses propres collaborateurs (qui pourraient le renverser) autant que l'opposition. Les purges staliniennes illustrent cette logique : Staline éliminait périodiquement ses proches pour prévenir tout défi à son autorité, créant une terreur permanente même au sein de l'élite.</p></div>

<h3>Les régimes hybrides : entre démocratie et autoritarisme</h3>
<p class="resume-text">La politologie contemporaine a développé plusieurs concepts pour décrire les régimes qui combinent des éléments démocratiques et autoritaires :<br>
– <strong>Démocratie illibérale</strong> (Zakaria) : élections compétitives mais restriction des libertés fondamentales (Hongrie, Turquie)<br>
– <strong>Autocratie électorale</strong> (V-Dem) : élections organisées mais conditions de compétition biaisées (Russie, Venezuela)<br>
– <strong>Régime hybride</strong> (Diamond) : combine institutions formellement démocratiques et pratiques autoritaires</p>
<div class="highlight-box"><p><strong>L'érosion démocratique :</strong> Steven Levitsky et Daniel Ziblatt (<em>Comment meurent les démocraties</em>, 2018) montrent que les démocraties contemporaines s'effondrent rarement par coup d'État militaire, mais par une érosion lente : un dirigeant élu utiliseles institutions pour concentrer le pouvoir, museler l'opposition et manipuler les élections. Trump (2016–2020), Orbán (depuis 2010), Modi (depuis 2014) illustrent cette tendance.</p></div>

<h3>Fascisme et nazisme : les totalitarismes de droite</h3>
<p class="resume-text">Le <strong>fascisme</strong> (Italie, 1922–1945) et le <strong>nazisme</strong> (Allemagne, 1933–1945) sont les deux grandes formes historiques du totalitarisme de droite. Ils partagent : nationalisme exacerbé, culte du chef, parti unique, violence politique institutionnalisée, anticommunisme, rejet de la démocratie libérale.</p>
<p>Le nazisme s'en distingue par le racisme biologique au cœur de son idéologie (antisémitisme, hiérarchie raciale, eugénisme) et l'ambition génocidaire. La Shoah — extermination de six millions de Juifs et millions d'autres victimes — est l'aboutissement logique de cette idéologie.</p>
<div class="highlight-box"><p><strong>Interprétations historiographiques :</strong> Les historiens débattent des causes du nazisme et de la Shoah. L'intentionnalisme (Bracher, Jackel) voit une planification délibérée de Hitler dès ses origines. Le fonctionnalisme (Mommsen, Broszat) insiste sur les dynamiques bureaucratiques et la radicalisation progressive. La synthèse de Ian Kershaw (<em>Hitler</em>, 1998–2000) combine les deux approches.</p></div>

<h3>Transitions démocratiques et consolidation</h3>
<p class="resume-text">La transitologie (O'Donnell, Schmitter, Linz) étudie les conditions du passage du régime autoritaire à la démocratie. Elle identifie plusieurs voies : transition négociée (pacte élites-opposition, Espagne 1977), effondrement du régime (Argentine 1983 après la guerre des Malouines), révolution populaire (Roumanie 1989).</p>
<p>La consolidation démocratique — institutionnalisation durable de la démocratie — requiert : consensus des élites sur les règles du jeu, indépendance judiciaire, société civile active, culture politique démocratique. Les transitions des années 1990 en Europe de l'Est ont montré que la consolidation peut prendre des décennies et rester inachevée (Pologne, Hongrie depuis 2010–2015).</p>"""
    )
)

# ── systemes/comparee ────────────────────────────────────────────────────────
PAGES["systemes/comparee"] = dict(
    intro=intro_section(
        "01", "Introduction", "Comparer les systèmes politiques dans le monde",
        "La <strong>politique comparée</strong> est la sous-discipline de la science politique qui étudie les systèmes politiques en les mettant en relation les uns avec les autres. Elle cherche à identifier des régularités, des différences et des causes : pourquoi certains pays sont-ils démocratiques et d'autres non ? Pourquoi les systèmes électoraux varient-ils ?",
        "<strong>Enjeu méthodologique :</strong> Comparer, c'est contrôler. En comparant des cas similaires sur la plupart des critères mais différents sur une variable d'intérêt (most similar systems design) ou inversement (most different), on peut isoler les facteurs explicatifs. La comparaison est l'équivalent de l'expérimentation dans les sciences naturelles.",
        "La politique comparée nourrit à la fois la théorie politique (qu'est-ce qui rend un régime stable ? légitime ?) et les politiques publiques (quelles réformes électorales, institutionnelles, fédérales marchent ?) Elle repose sur des méthodes quantitatives (indices V-Dem, Freedom House) et qualitatives (études de cas approfondies).",
    ),
    contenu=contenu_section(
        "02", "Méthodes, indicateurs et grandes classifications",
        """<h3>Les méthodes de la politique comparée</h3>
<p class="resume-text">La politique comparée dispose de trois grandes stratégies méthodologiques :<br>
– <strong>Most Similar Systems Design</strong> (MSSD) : comparer des pays similaires sur la plupart des variables pour identifier ce qui diffère. Ex. : comparer les pays nordiques pour expliquer les différences de modèle social.<br>
– <strong>Most Different Systems Design</strong> (MDSD) : comparer des pays très différents qui partagent un phénomène commun. Ex. : révolutions en contextes très différents (France 1789, Russie 1917, Iran 1979).<br>
– <strong>Études de cas</strong> : analyse approfondie d'un pays ou d'un événement pour générer ou tester des théories.</p>
<div class="highlight-box"><p><strong>Problème de Galton :</strong> En politique comparée, les unités d'analyse (États) ne sont pas indépendantes — elles s'influencent mutuellement (diffusion, contagion, pression internationale). Cela complique l'inférence causale. Les méthodes de régression avec effets fixes ou les approches qualitatives comparatives (QCA) cherchent à y répondre.</p></div>

<h3>Classifier les régimes politiques</h3>
<p class="resume-text">La classification des régimes est l'un des enjeux centraux de la politique comparée. Les principaux instruments :<br>
– <strong>Freedom House</strong> (depuis 1973) : évalue les libertés politiques et civiles (1–7), classe en « libre », « partiellement libre », « non libre »<br>
– <strong>V-Dem</strong> (Varieties of Democracy, Gothenburg) : mesure multidimensionnelle de la démocratie (électorale, libérale, participative, délibérative, égalitaire)<br>
– <strong>Polity IV/V</strong> : score d'autorité (-10 à +10) mesurant les contraintes sur l'exécutif</p>
<div class="highlight-box"><p><strong>Limites des indicateurs :</strong> Ces indices reflètent des choix théoriques : quelle définition de la démocratie retenir ? Qui juge ? Freedom House est critiquée pour ses biais pro-occidentaux. V-Dem est plus sophistiqué mais sa fiabilité dépend de la qualité des experts locaux. Aucun indice ne capture la totalité de la réalité politique d'un pays.</p></div>

<h3>Les systèmes de partis</h3>
<p class="resume-text">Sartori (<em>Parties and Party Systems</em>, 1976) propose une classification des systèmes de partis selon le nombre de partis compétitifs et la distance idéologique entre eux :<br>
– <strong>Bipartisme</strong> : deux partis dominants (États-Unis, Royaume-Uni) — stabilité, alternance nette<br>
– <strong>Multipartisme modéré</strong> : 3–5 partis avec faible distance idéologique (Allemagne, Pays-Bas) — coalitions, compromis<br>
– <strong>Multipartisme polarisé</strong> : nombreux partis, forte distance idéologique, partis antisystème (Italie de la Première République) — instabilité</p>
<p>Duverger (1951) relie le système de partis au mode de scrutin (loi de Duverger). Mais le système de partis dépend aussi de l'histoire (clivages sociaux fondateurs), des institutions (fédéralisme, présidentialisme) et de l'évolution de l'électorat.</p>

<h3>Présidentialisme vs parlementarisme</h3>
<p class="resume-text">Linz (<em>The Perils of Presidentialism</em>, 1990) oppose les régimes présidentiels (États-Unis, Mexique, Brésil) aux régimes parlementaires (Royaume-Uni, Allemagne, Japon). Dans le présidentialisme, l'exécutif est élu séparément du législatif, ce qui peut produire des blocages (<em>gridlock</em>) en cas de cohabitation. Dans le parlementarisme, le gouvernement est responsable devant le Parlement — la cohérence législative est plus facile mais l'instabilité gouvernementale possible.</p>
<div class="highlight-box"><p><strong>Les semi-présidentialismes :</strong> Duverger (1978) identifie un troisième type : le régime semi-présidentiel (France, Finlande, Portugal), où un président élu au suffrage universel coexiste avec un Premier ministre responsable devant le Parlement. Ce régime hybride peut fonctionner différemment selon que la majorité présidentielle et parlementaire coïncident ou non (cohabitation en France).</p></div>

<h3>Clivages sociaux et systèmes politiques</h3>
<p class="resume-text">Rokkan et Lipset (<em>Party Systems and Voter Alignments</em>, 1967) identifient quatre clivages fondateurs des systèmes de partis ouest-européens :<br>
– <strong>Centre/périphérie</strong> : nations contre régions (nationalisme, fédéralisme)<br>
– <strong>État/Église</strong> : partis laïcs contre partis confessionnels<br>
– <strong>Ville/campagne</strong> : intérêts industriels contre intérêts agraires<br>
– <strong>Capital/travail</strong> : partis conservateurs/libéraux contre partis socialistes</p>
<p>Ces clivages « gelés » structurent encore les systèmes de partis européens, mais de nouveaux clivages émergent : post-matérialiste (Inglehart), éducation/autoritarisme (Piketty), ville/périphérie (Guilluy).</p>
<div class="highlight-box"><p><strong>Politique comparée quantitative :</strong> L'essor des données comparatives (World Values Survey, CSES, VDEM) a transformé la politique comparée en une discipline empirique sophistiquée. Les méthodes de régression, les expériences naturelles et la QCA (Ragin) permettent de tester des hypothèses causales avec rigueur — mais la validité externe des résultats reste un défi constant.</p></div>"""
    )
)

# ── systemes/federalisme ─────────────────────────────────────────────────────
PAGES["systemes/federalisme"] = dict(
    intro=intro_section(
        "01", "Introduction", "Comment le territoire structure le pouvoir",
        "Le <strong>fédéralisme</strong> est un principe d'organisation politique qui distribue les compétences entre un gouvernement central et des entités sub-nationales (États, provinces, Länder) disposant d'une autonomie garantie par la constitution. Il répond à la question : comment gouverner de grands territoires divers ?",
        "<strong>Enjeu :</strong> Le fédéralisme n'est pas une simple technique administrative. Il reflète une philosophie politique : comment concilier unité nationale et diversité régionale ? Comment protéger les minorités sans déchirer la nation ? Les États fédéraux représentent 40 % de la population mondiale.",
        "La tension entre centralisation et décentralisation est permanente dans tous les États modernes, qu'ils soient formellement fédéraux ou unitaires. Comprendre le fédéralisme, c'est comprendre comment s'organisent les relations entre les différents niveaux de gouvernement qui affectent la vie quotidienne des citoyens.",
    ),
    contenu=contenu_section(
        "02", "Fédéralisme, États unitaires et confédérations",
        """<h3>Les formes d'organisation territoriale</h3>
<p class="resume-text">On distingue trois formes principales d'organisation territoriale de l'État :<br>
– <strong>État unitaire</strong> : un seul centre de décision politique, les collectivités locales exercent des compétences déléguées par l'État central (France, Japon, Chine). Peut être centralisé ou décentralisé.<br>
– <strong>État fédéral</strong> : deux niveaux de gouvernement constitutionnellement garantis, chacun souverain dans son domaine de compétence (États-Unis, Allemagne, Suisse, Canada, Brésil)<br>
– <strong>Confédération</strong> : association d'États souverains qui délèguent certaines compétences à un organe commun (ancienne Confédération helvétique, Union européenne dans certaines dimensions)</p>
<div class="highlight-box"><p><strong>Critères du fédéralisme :</strong> K.C. Wheare identifie deux conditions essentielles : (1) la division constitutionnelle des compétences entre niveaux de gouvernement, (2) l'indépendance de chaque niveau dans sa sphère. Sans ces deux conditions, on parle de décentralisation administrative, pas de fédéralisme.</p></div>

<h3>Le fédéralisme américain : modèle fondateur</h3>
<p class="resume-text">Les Pères fondateurs américains inventent le fédéralisme moderne avec la Constitution de 1787. Madison, Hamilton et Jay l'expliquent dans <em>The Federalist Papers</em> (1788) : le fédéralisme protège la liberté en divisant le pouvoir verticalement (entre États et fédération) et horizontalement (séparation des pouvoirs). La fédération est fondée sur un « pacte » entre États souverains qui délèguent des compétences précisément listées au gouvernement fédéral (compétences résiduelles aux États — 10e amendement).</p>
<p>L'histoire américaine est marquée par les tensions entre fédéralisme dual (sphères séparées, « États' rights ») et fédéralisme coopératif (enchevêtrement des compétences, programmes fédéraux conditionnels). La Guerre de Sécession (1861–1865) tranche la question de la primauté fédérale. Le New Deal rooseveltien (1933–1938) et la Grande Société johnsonienne (1964–1968) étendent considérablement les compétences fédérales.</p>
<div class="highlight-box"><p><strong>Fédéralisme fiscal :</strong> Aux États-Unis, les États disposent de larges compétences fiscales (impôt sur le revenu, taxe de vente). Cette compétition fiscale inter-états peut mener à un « nivellement par le bas » (attractivité fiscale) ou stimuler l'innovation politique (les États comme « laboratoires de la démocratie »). La question de l'équité inter-états reste centrale.</p></div>

<h3>Le fédéralisme allemand : coopération et solidarité</h3>
<p class="resume-text">Le modèle allemand (<em>Bundesstaat</em>) diffère du modèle américain : les Länder ont moins de compétences législatives exclusives mais jouent un rôle crucial dans l'exécution des lois fédérales. Le Bundesrat (chambre haute) représente les gouvernements des Länder et peut bloquer une large partie de la législation fédérale.</p>
<p>La péréquation financière (<em>Länderfinanzausgleich</em>) redistribue les ressources fiscales entre Länder riches (Bavière, Bade-Wurtemberg) et Länder pauvres (Berlin, Brême) — mécanisme de solidarité fiscale sans équivalent aux États-Unis. Le fédéralisme allemand est dit « coopératif » : les niveaux de gouvernement s'imbriquent plutôt que de fonctionner en sphères séparées.</p>

<h3>La décentralisation dans les États unitaires</h3>
<p class="resume-text">La décentralisation est le transfert de compétences de l'État central vers des collectivités territoriales disposant d'une autonomie (conseil élu, budget propre). Elle peut être administrative (déconcentration : représentants de l'État) ou politique (décentralisation : élus locaux responsables).</p>
<p>La France a longtemps été le modèle de l'État unitaire centralisé (jacobinisme). Les lois de décentralisation de 1982–1983 (Defferre) transforment profondément ce modèle en créant des régions dotées de compétences propres. Les réformes de 2003 (régions, départements) et 2015 (fusion des régions) approfondissent ce mouvement, tout en maintenant l'État unitaire.</p>
<div class="highlight-box"><p><strong>Subsidiarité :</strong> Le principe de subsidiarité (Traité de Maastricht, 1992 ; doctrine sociale catholique) stipule que les décisions doivent être prises au niveau le plus proche des citoyens possible, en ne remontant aux niveaux supérieurs que ce qui ne peut être fait efficacement au niveau inférieur. Il guide l'architecture institutionnelle de l'UE et des États fédéraux.</p></div>

<h3>Fédéralisme et gestion de la diversité</h3>
<p class="resume-text">Le fédéralisme est souvent adopté pour gérer des diversités profondes (linguistique, religieuse, ethnique). La Suisse fédère quatre communautés linguistiques (allemand, français, italien, romanche) avec 26 cantons disposant de larges autonomies. Le Canada gère la question québécoise par un fédéralisme asymétrique (plus de pouvoirs à certaines provinces).</p>
<p>La Belgique illustre un fédéralisme particulier : créé en 1993 pour gérer le conflit linguistique flamand-wallon, il combine communautés (compétences culturelles) et régions (compétences économiques) dans un système complexe. Le fédéralisme peut aussi être un facteur de désintégration quand les identités régionales sont très fortes (sécession de la Slovaquie en 1993, menace sécessionniste en Écosse, Catalogne).</p>
<div class="highlight-box"><p><strong>Fédéralisme et Union européenne :</strong> L'UE est une entité <em>sui generis</em> — ni État fédéral ni simple organisation internationale. Elle combine des éléments fédéraux (Cour de justice, monnaie unique, règlements directement applicables) et intergouvernementaux (unanimité au Conseil, primauté des traités sur la constitution). Le débat sur l'approfondissement fédéral de l'UE reste ouvert.</p></div>"""
    )
)

# ── systemes/monarchies ──────────────────────────────────────────────────────
PAGES["systemes/monarchies"] = dict(
    intro=intro_section(
        "01", "Introduction", "Des monarchies absolues aux transitions démocratiques",
        "La <strong>monarchie</strong> est un régime dans lequel le chef de l'État est une personne unique qui occupe sa position à vie, généralement par hérédité. De l'absolutisme de Louis XIV aux monarchies parlementaires scandinaves, la monarchie a connu des transformations radicales et reste présente dans 44 États contemporains.",
        "<strong>Paradoxe monarchique :</strong> Comment des régimes fondés sur l'hérédité et non l'élection peuvent-ils être parmi les démocraties les plus avancées du monde ? Les monarchies constitutionnelles nordiques (Suède, Norvège, Danemark) combinent institutions parlementaires, État de droit et symbole dynastique.",
        "Comprendre les monarchies, c'est aussi comprendre les processus de transition politique : comment des monarchies absolues deviennent-elles des démocraties constitutionnelles (Espagne, Maroc), et pourquoi certaines restent-elles absolues (Arabie saoudite) ou périclitent-elles (monarchies renversées du XXe siècle) ?",
    ),
    contenu=contenu_section(
        "02", "Monarchies — histoire, formes et transitions",
        """<h3>La monarchie absolue : apogée et critique</h3>
<p class="resume-text">La monarchie absolue atteint son apogée en Europe aux XVIIe–XVIIIe siècles. Louis XIV incarne ce modèle : « L'État, c'est moi » (apocryphe), le roi tient son pouvoir de Dieu (droit divin), gouverne sans assemblée représentative permanente, unifie le droit et l'administration. Versailles est le symbole de cette centralisation et de la mise en scène du pouvoir royal.</p>
<div class="highlight-box"><p><strong>Absolutisme éclairé :</strong> Au XVIIIe siècle, certains monarques s'inspirent des Lumières sans renoncer à l'absolutisme : Frédéric II de Prusse, Catherine II de Russie, Joseph II d'Autriche. Ils réforment l'administration, la justice, l'Église — mais refusent toute limitation de leur pouvoir. Voltaire rêve d'un « despote éclairé » ; les révolutions américaine et française montrent les limites de ce modèle.</p></div>
<p>Les théoriciens de l'absolutisme (Bodin, Bossuet, Hobbes) justifient la souveraineté monarchique absolue par des arguments divers : nécessité de l'ordre (Hobbes), droit divin (Bossuet), théorie de la souveraineté (Bodin). Locke et Montesquieu leurs opposent le droit de résistance et la séparation des pouvoirs.</p>

<h3>La monarchie constitutionnelle : le modèle britannique</h3>
<p class="resume-text">La Glorieuse Révolution de 1688 crée le modèle de la monarchie constitutionnelle : le roi accepte le <em>Bill of Rights</em>, les droits du Parlement sont garantis, la succession protestante assurée. Le roi règne mais ne gouverne plus — formule attribuée à Thiers. Le cabinet est responsable devant le Parlement, non devant le souverain.</p>
<p>Le modèle britannique influence toutes les monarchies constitutionnelles contemporaines. Le Parlement est souverain (souveraineté parlementaire), la Constitution est non-écrite (conventions constitutionnelles, lois fondamentales), le Common Law s'impose à tous. Ce modèle inspire les réformes constitutionnelles en Europe au XIXe siècle (Belgique 1830, Japon 1889).</p>
<div class="highlight-box"><p><strong>Monarchies parlementaires aujourd'hui :</strong> Les monarchies parlementaires (Suède, Norvège, Danemark, Pays-Bas, Belgique, Espagne, Japon) sont parmi les démocraties les plus stables et avancées. Le monarque joue un rôle symbolique et cérémoniaire : représentation nationale, discours d'ouverture du Parlement, désignation formelle du Premier ministre. Sa légitimité repose sur la continuité historique et l'identification nationale, non sur une élection.</p></div>

<h3>La transition espagnole : un modèle de démocratisation monarchique</h3>
<p class="resume-text">La <em>Transición española</em> (1975–1982) est souvent citée comme modèle de transition démocratique pacifique. À la mort de Franco (1975), Juan Carlos Ier — désigné successeur par Franco lui-même — choisit la démocratie contre toute attente. Il nomme Adolfo Suárez Premier ministre (1976), qui négocie avec toutes les forces politiques (y compris le PCE légalisé) la Constitution de 1978.</p>
<p>Juan Carlos résiste au coup d'État militaire du 23-F (1981), apparaissant à la télévision en uniforme pour défendre la démocratie. Cette transition « par le haut » (pactada) montre qu'une monarchie peut être un acteur de la démocratisation — à condition que le roi joue le rôle d'arbitre et non de souverain absolu.</p>
<div class="highlight-box"><p><strong>Monarchies du Golfe :</strong> Les monarchies du Golfe (Arabie saoudite, Émirats arabes unis, Qatar, Oman, Bahreïn, Koweït) sont des monarchies absolues ou semi-constitutionnelles. Elles combinent légitimité dynastique, islam politique (Arabie saoudite : famille royale + ulemas), rente pétrolière (redistribution sociale qui achète le consentement) et absence de démocratie. Le Maroc et la Jordanie représentent des cas intermédiaires avec des assemblées élues mais un roi puissant.</p></div>

<h3>Les monarchies renversées du XXe siècle</h3>
<p class="resume-text">Le XXe siècle a vu la chute de nombreuses monarchies :<br>
– Russie (1917) : Nicolas II renversé par la révolution bolchévique<br>
– Allemagne, Autriche-Hongrie, Ottomans (1918) : effondrement des empires après la Première Guerre mondiale<br>
– Italie (1946) : référendum républicain après le fascisme<br>
– Égypte (1952), Irak (1958), Iran (1979), Éthiopie (1974) : révolutions nationalistes ou islamistes</p>
<p>Ces chutes témoignent de la fragilité des monarchies face aux pressions nationalistes, républicaines ou révolutionnaires. La survie des monarchies européennes tient largement à leur capacité d'adaptation constitutionnelle précoce (Angleterre XVIIe, Pays-Bas XVIIIe, monarchies nordiques XIXe).</p>
<div class="highlight-box"><p><strong>Monarchies et opinion publique :</strong> Les monarchies contemporaines font l'objet d'un soutien populaire généralement élevé dans les pays concernés (>60 % au Royaume-Uni, Suède, Pays-Bas) mais fluctuant selon l'actualité dynastique (scandales, comportements des membres de la famille royale). Les mouvements républicains restent minoritaires dans la plupart des monarchies constitutionnelles.</p></div>"""
    )
)

# ── relations/mondialisation ─────────────────────────────────────────────────
PAGES["relations/mondialisation"] = dict(
    intro=intro_section(
        "01", "Introduction", "Intégration économique et gouvernance mondiale",
        "La <strong>mondialisation</strong> désigne l'intensification des flux transnationaux — marchandises, capitaux, personnes, informations, idées. Processus pluriséculaire, elle connaît une accélération sans précédent depuis les années 1980 avec la libéralisation commerciale, la révolution numérique et l'effondrement du bloc soviétique.",
        "<strong>Tension fondamentale :</strong> La mondialisation crée des interdépendances économiques bénéfiques (réduction de la pauvreté, baisse des prix) mais génère aussi des inégalités, des délocalisations et des pertes de souveraineté. Ce double visage alimente les débats entre libre-échangistes, altermondialistes et nationalistes économiques.",
        "Comprendre la mondialisation, c'est comprendre les règles du jeu de l'économie mondiale (OMC, FMI, Banque mondiale), les acteurs qui en profitent, ceux qui en pâtissent, et les possibilités de la réguler différemment. C'est aussi comprendre pourquoi elle est devenue l'un des principaux terrains de conflit politique du XXIe siècle.",
    ),
    contenu=contenu_section(
        "02", "Commerce, finance, migrations et gouvernance mondiale",
        """<h3>Histoire de la mondialisation</h3>
<p class="resume-text">La mondialisation n'est pas un phénomène nouveau. Economistes distinguent plusieurs phases :<br>
– <strong>Première mondialisation</strong> (1870–1914) : baisse des coûts de transport (chemins de fer, vapeur), libéralisation commerciale (étalon-or, traités de libre-échange), migrations massives (Europe→Amériques). Interrompue par la Première Guerre mondiale.<br>
– <strong>Repli protectionniste</strong> (1914–1945) : droits de douane (Smoot-Hawley 1930), crises, guerres.<br>
– <strong>Mondialisation institutionnalisée</strong> (1945–1973) : Bretton Woods, GATT, Plan Marshall — libéralisation contrôlée sous hégémonie américaine.<br>
– <strong>Hypermondialisation</strong> (1980– ) : libéralisation financière, chaînes de valeur mondiales, accords de libre-échange, révolution numérique.</p>
<div class="highlight-box"><p><strong>Le consensus de Washington :</strong> Ensemble de politiques économiques préconisées par le FMI et la Banque mondiale pour les pays en développement dans les années 1980–90 : austérité budgétaire, privatisation, libéralisation des marchés. Ce consensus a été critiqué pour ses effets sociaux (crises asiatique 1997, argentine 2001) et remis en question depuis les années 2000.</p></div>

<h3>Le commerce international et l'OMC</h3>
<p class="resume-text">L'<strong>Organisation mondiale du commerce</strong> (OMC, 1995, succède au GATT) est la principale institution de régulation du commerce mondial. Elle négocie des réductions tarifaires, définit des règles sur les subventions et les barrières non-tarifaires, et dispose d'un mécanisme de règlement des différends.</p>
<p>Les <strong>accords préférentiels</strong> (bilatéraux, régionaux) se sont multipliés depuis l'échec du cycle de Doha (2001–2015) : ALENA/USMCA, CETA, RCEP. Ces accords créent des zones de libre-échange mais fragmentent aussi le système commercial multilatéral.</p>
<div class="highlight-box"><p><strong>Théorie de l'avantage comparatif :</strong> Ricardo (1817) montre que le libre-échange est bénéfique même si un pays est absolument moins efficace dans tout — car chacun se spécialise là où il est relativement le plus efficace. Mais cet argument ignore la distribution des gains : certains secteurs et travailleurs perdent, même si le gain global est positif. C'est l'enjeu politique central du libre-échange.</p></div>

<h3>La finance mondiale : interdépendances et crises</h3>
<p class="resume-text">La libéralisation financière des années 1980 (fin du contrôle des capitaux, déréglementation bancaire) a créé un système financier mondial intégré. Les capitaux circulent librement : les flux quotidiens sur le marché des changes dépassent 6 000 milliards de dollars. Cette intégration accélère la croissance mais amplifie aussi les crises.</p>
<p>La crise financière de 2008 illustre cette fragilité systémique : la faillite de Lehman Brothers provoque une crise mondiale en quelques semaines. Les <em>too big to fail</em> (institutions financières dont la faillite serait catastrophique pour le système) posent un problème d'aléa moral : elles prennent des risques excessifs en comptant sur le sauvetage public.</p>
<div class="highlight-box"><p><strong>Paradoxe de Mundell :</strong> Le « triangle d'incompatibilité » de Mundell montre qu'un pays ne peut avoir simultanément libre circulation des capitaux, taux de change fixe et politique monétaire autonome. Les crises des années 1990 (Mexique, Asie) et la zone euro illustrent les tensions entre ces trois objectifs.</p></div>

<h3>Migrations et mobilité humaine</h3>
<p class="resume-text">Les migrations internationales concernent environ 280 millions de personnes (3,6 % de la population mondiale, 2020). Elles se divisent en migrations économiques (recherche d'emploi et de meilleures conditions de vie), migrations forcées (réfugiés, demandeurs d'asile — 110 millions en 2022 selon le HCR) et migrations d'élites (expatriés, étudiants, talents).</p>
<p>Les migrations génèrent des transferts de fonds massifs vers les pays d'origine : 647 milliards de dollars en 2022 (contre 185 milliards d'aide publique au développement). Ces remises constituent une source vitale de revenus pour de nombreux pays (Philippines, Mexique, Maroc).</p>
<div class="highlight-box"><p><strong>Politiques migratoires :</strong> Les États gèrent les migrations à travers des politiques nationales (quotas, points systems, regroupement familial) et des accords bilatéraux ou multilatéraux. La tension entre droits des migrants, besoins économiques et réactions politiques nationales rend la gouvernance mondiale des migrations particulièrement difficile.</p></div>

<h3>La gouvernance économique mondiale</h3>
<p class="resume-text">La gouvernance économique mondiale repose sur un réseau d'institutions créées après 1945 :<br>
– <strong>FMI</strong> : surveillance macroéconomique, prêteur en dernier ressort<br>
– <strong>Banque mondiale</strong> : financement du développement<br>
– <strong>OMC</strong> : règles du commerce<br>
– <strong>G7/G20</strong> : coordination informelle des grandes économies<br>
– <strong>BRI</strong> : régulation bancaire (accords de Bâle)</p>
<p>Ces institutions sont critiquées pour leur manque de légitimité démocratique (gouvernance technocratique) et leur sous-représentation des pays du Sud. Les BRICS (Brésil, Russie, Inde, Chine, Afrique du Sud) cherchent à créer des institutions alternatives (Nouvelle Banque de développement).</p>
<div class="highlight-box"><p><strong>Déglobalisation ?</strong> Depuis 2018 (guerre commerciale sino-américaine), le COVID-19 (2020) et la guerre en Ukraine (2022), on observe des tendances à la fragmentation des chaînes de valeur mondiales (reshoring, friendshoring, nearshoring), à la réactivation des barrières commerciales et au découplage technologique. Cela ne signifie pas la fin de la mondialisation, mais une reconfiguration géopolitique des échanges mondiaux.</p></div>"""
    )
)

# ── relations/enjeux ─────────────────────────────────────────────────────────
PAGES["relations/enjeux"] = dict(
    intro=intro_section(
        "01", "Introduction", "Les défis du XXIe siècle pour l'ordre international",
        "Les <strong>enjeux contemporains</strong> des relations internationales redéfinissent profondément l'ordre mondial du XXIe siècle. La rivalité sino-américaine, le changement climatique, la cybersécurité et les nouvelles formes de puissance constituent les principaux défis auxquels font face les États et les organisations internationales.",
        "<strong>Rupture :</strong> L'ordre libéral international bâti après 1945 (démocratie, libre-échange, multilatéralisme, droit international) est contesté de l'intérieur (montée du populisme) comme de l'extérieur (Chine, Russie). Les enjeux contemporains reflètent une transition de pouvoir sans équivalent depuis la fin de la Guerre froide.",
        "Ces enjeux sont interconnectés : la transition énergétique exige des minéraux critiques dont la Chine contrôle les chaînes de valeur ; la cybersécurité conditionne la stabilité économique et militaire ; les migrations sont amplifiées par le changement climatique. Comprendre ces interdépendances est la condition d'une analyse géopolitique rigoureuse.",
    ),
    contenu=contenu_section(
        "02", "Rivalité sino-américaine, climat, cyber et nouvelles puissances",
        """<h3>La rivalité sino-américaine : un nouveau monde bipolaire ?</h3>
<p class="resume-text">La montée en puissance de la Chine est le fait géopolitique majeur du début du XXIe siècle. La Chine est devenue la deuxième économie mondiale (2010), le premier émetteur de CO₂ (2006), le premier détenteur de brevets (2020). Elle développe une marine de haute mer, des bases militaires en mer de Chine méridionale et en Afrique, et une influence technologique mondiale (Huawei, TikTok, BRI).</p>
<div class="highlight-box"><p><strong>Le piège de Thucydide :</strong> Graham Allison (2017) analyse 16 cas historiques de transition de puissance : dans 12 cas sur 16, la montée d'une nouvelle puissance face à une puissance établie a conduit à la guerre. La rivalité sino-américaine présente des analogies avec la rivalité athéno-spartiate (Thucydide) ou germano-britannique (1914). Mais les interdépendances économiques et nucléaires créent des freins inédits.</p></div>
<p>La rivalité sino-américaine se joue sur plusieurs terrains : technologique (5G, semi-conducteurs, IA), militaire (Taïwan, mer de Chine), économique (droits de douane, découplage), normatif (modèle de gouvernance). Elle génère une fragmentation de l'ordre international en deux sphères d'influence croissantes.</p>

<h3>Le changement climatique : enjeu géopolitique majeur</h3>
<p class="resume-text">Le changement climatique est désormais reconnu comme un <em>multiplicateur de menaces</em> par les stratèges militaires. Il amplifie les conflits existants (sécheresses, compétition pour l'eau en Afrique subsaharienne et Moyen-Orient), génère des migrations forcées et menace la sécurité alimentaire mondiale.</p>
<p>La gouvernance climatique mondiale est structurée par les Accords de Paris (2015) : engagement volontaire des États à limiter le réchauffement à 1,5°–2°C. Ce système de « pledges » sans mécanisme contraignant est critiqué pour son inefficacité — les engagements actuels mèneraient à +2,7°C. Les négociations annuelles (COP) illustrent les difficultés de la coopération dans un système d'États souverains.</p>
<div class="highlight-box"><p><strong>Justice climatique :</strong> Les pays les plus vulnérables au changement climatique (Bangladesh, îles du Pacifique, pays sahéliens) sont souvent ceux qui y ont le moins contribué. La question de la responsabilité historique des pays industrialisés et des compensations financières aux pays en développement (fonds Loss & Damage, COP27 2022) est au cœur des négociations climatiques.</p></div>

<h3>La cybersécurité : un nouveau domaine de conflictualité</h3>
<p class="resume-text">Le cyberespace est devenu un cinquième domaine de conflictualité, aux côtés de la terre, de la mer, de l'air et de l'espace. Les cyberattaques permettent des actions coercitives sous le seuil de la guerre armée : sabotage d'infrastructures (Stuxnet contre l'Iran, 2010), déstabilisation politique (ingérence électorale russe de 2016), espionnage économique et industriel.</p>
<p>L'<strong>attribution</strong> des cyberattaques est politiquement et techniquement difficile — les États peuvent nier leur implication, utiliser des mandataires (hackers criminels). Cela complique la dissuasion et la légitime défense en droit international. Le droit de Tallinn (manuel d'experts, 2013–2017) tente d'appliquer le droit international existant au cyberespace, mais sans force contraignante.</p>
<div class="highlight-box"><p><strong>Souveraineté numérique :</strong> Face à la domination américaine et chinoise des infrastructures numériques (cloud, câbles sous-marins, semi-conducteurs), l'UE cherche une « souveraineté numérique » : RGPD, réglementation des plateformes (DSA/DMA), projet GAIA-X pour un cloud européen. Cette quête de souveraineté technologique reflète la dimension géopolitique de la gouvernance numérique.</p></div>

<h3>Les nouvelles formes de puissance au XXIe siècle</h3>
<p class="resume-text">Joseph Nye distingue le <em>hard power</em> (puissance militaire et économique) du <em>soft power</em> (attractivité culturelle, normative, idéologique) et du <em>smart power</em> (combinaison des deux). Au XXIe siècle, de nouvelles formes de puissance émergent :<br>
– <strong>Puissance technologique</strong> : contrôle des plateformes, de l'IA, des semi-conducteurs<br>
– <strong>Puissance financière</strong> : dollar comme monnaie de réserve mondiale, sanctions financières (SWIFT)<br>
– <strong>Puissance normative</strong> : capacité à définir les règles internationales (RGPD européen, normes de l'OMC)<br>
– <strong>Puissance climatique</strong> : contrôle des minéraux critiques (lithium, cobalt, terres rares) pour la transition énergétique</p>
<div class="highlight-box"><p><strong>Puissance et dépendance :</strong> Keohane et Nye (1977) montrent que l'interdépendance n'est pas symétrique : celui qui dépend le moins de la relation dispose d'une puissance sur l'autre. La dépendance européenne au gaz russe (avant 2022) illustre comment une dépendance économique peut créer une vulnérabilité géopolitique — et comment sa réduction peut constituer un acte de politique de puissance.</p></div>

<h3>Terrorisme, prolifération et sécurité humaine</h3>
<p class="resume-text">Le terrorisme transnational (Al-Qaïda, Daech) a transformé les agendas sécuritaires depuis le 11 septembre 2001. Les réponses militaires (Afghanistan, Irak) ont montré leurs limites face à des acteurs non-étatiques insérés dans des conflits politiques locaux. La lutte contre le terrorisme pose des questions fondamentales sur l'équilibre entre sécurité et libertés civiles.</p>
<p>La prolifération nucléaire reste une menace majeure : Corée du Nord (tests en 2006, 2009, 2013, 2016, 2017), Iran (programme nucléaire, accord JCPOA 2015–2018). Le Traité de Non-Prolifération (TNP, 1968) est sous pression. La notion de <strong>sécurité humaine</strong> (PNUD, 1994) élargit le concept de sécurité aux dimensions sanitaires, alimentaires et environnementales — au-delà de la seule sécurité des États.</p>"""
    )
)

# ─── load existing file and patch ─────────────────────────────────────────────

with open(INPUT, 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

def replace_section(content_html, section_id, new_section_html):
    """Replace a content section in full HTML."""
    import re
    # Find the section with given id and replace until next <section or end of string
    pattern = r'<section[^>]*\bid="' + re.escape(section_id) + r'"[^>]*>.*?</section>'
    new_html, n = re.subn(pattern, new_section_html, content_html, flags=re.DOTALL)
    if n == 0:
        print(f"WARNING: section id={section_id} not found!")
    return new_html

for key, parts in PAGES.items():
    if key not in pages:
        print(f"WARNING: key {key} not found in pages!")
        continue
    content = pages[key]['content']
    if 'intro' in parts:
        content = replace_section(content, 'introduction', parts['intro'])
    if 'contenu' in parts:
        content = replace_section(content, 'contenu', parts['contenu'])
    pages[key]['content'] = content
    print(f"Updated {key}: {len(content)} chars")

output = json.dumps(data, ensure_ascii=False, indent=2)
# Write via binary to avoid any surrogate issues on Windows
with open(INPUT, 'wb') as f:
    f.write(output.encode('utf-8', errors='replace'))

print("\nDone.")
