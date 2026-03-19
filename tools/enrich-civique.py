#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichit les articles de civique.json dont le contenu est insuffisant."""

import json, re, sys

SRC = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/civique.json"

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

# =====================================================================
# Nouvelles sections "contenu" encyclopédiques
# =====================================================================

new_contenu = {}

# =====================================================================
# republique/laicite
# =====================================================================
new_contenu['republique/laicite'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Loi de 1905, neutralité de l'État, liberté de conscience et débats contemporains</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Origines historiques : la querelle des deux France</h3>
        <p>La laïcité française est le fruit d'un long conflit entre l'Église catholique et un État cherchant à s'émanciper de la tutelle religieuse. Sous l'Ancien Régime, l'Église détient un quasi-monopole sur l'enseignement, l'état civil et l'assistance aux pauvres. La Révolution française inaugure la rupture : l'état civil est laïcisé en 1792, les congrégations religieuses sont supprimées.</p>
        <p>Le XIX<sup>e</sup> siècle voit se succéder périodes cléricales et offensives républicaines. La III<sup>e</sup> République achève la séparation par étapes :</p>
        <ul>
          <li><strong>1881-1882 :</strong> lois Jules Ferry — gratuité et laïcité de l'école publique, retrait des crucifix des salles de classe.</li>
          <li><strong>1884 :</strong> suppression des prières publiques à l'ouverture des sessions parlementaires.</li>
          <li><strong>1886 :</strong> loi Goblet — le personnel enseignant des écoles publiques doit être laïc.</li>
          <li><strong>1901 :</strong> loi sur les associations — les congrégations doivent être autorisées.</li>
          <li><strong>1904 :</strong> interdiction d'enseignement pour les congrégations religieuses.</li>
        </ul>

        <h3>La loi de 1905 : la grande séparation</h3>
        <p>La <strong>loi du 9 décembre 1905</strong> concernant la séparation des Églises et de l'État est le texte fondateur de la laïcité française. Elle repose sur deux articles cardinaux :</p>
        <div class="highlight-box">
          <p><strong>Article 1<sup>er</sup> :</strong> « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l'intérêt de l'ordre public. »</p>
          <p><strong>Article 2 :</strong> « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. »</p>
        </div>
        <p>Ces deux piliers définissent la laïcité comme <strong>double garantie</strong> : l'État protège la liberté de conscience (dimension positive) et s'abstient de toute implication dans les affaires religieuses (dimension négative). Les biens des établissements religieux sont transférés à des associations cultuelles.</p>

        <h3>Les trois dimensions de la laïcité</h3>
        <p>La laïcité française recouvre en réalité trois principes distincts qui se complètent :</p>
        <ul>
          <li><strong>La liberté de conscience :</strong> chacun est libre de croire ou de ne pas croire, de pratiquer ou non une religion. L'athéisme, l'agnosticisme et la pratique religieuse sont sur un pied d'égalité juridique.</li>
          <li><strong>La neutralité de l'État :</strong> les services publics, les agents de l'État et les institutions ne peuvent manifester de préférence religieuse. Les fonctionnaires sont soumis à une obligation stricte de neutralité.</li>
          <li><strong>L'égalité des citoyens :</strong> quelle que soit leur appartenance ou conviction religieuse, tous les citoyens ont les mêmes droits et devoirs devant la loi.</li>
        </ul>

        <h3>Laïcité à l'école : règles et enjeux</h3>
        <p>L'école publique est le terrain d'application le plus sensible de la laïcité. Les élèves bénéficient de la liberté de conscience, mais des règles encadrent l'expression religieuse :</p>
        <ul>
          <li><strong>Loi du 15 mars 2004 :</strong> interdit dans les écoles, collèges et lycées publics « les signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse ». Sont visés le voile islamique, la kippa, la grande croix chrétienne.</li>
          <li><strong>Charte de la laïcité à l'école (2013) :</strong> rappelle les droits et obligations de la communauté éducative.</li>
          <li><strong>2023 :</strong> interdiction de l'abaya dans les établissements scolaires (circulaire Attal, rentrée 2023).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>L'exception alsacienne-mosellane :</strong> la loi de 1905 ne s'applique pas en Alsace-Moselle, régions qui étaient allemandes lors de son adoption et ont conservé le régime concordataire de 1801. L'enseignement religieux reste prévu dans les écoles publiques de ces départements, et les ministres du culte y sont rémunérés par l'État.</p>
        </div>

        <h3>Les grands débats contemporains</h3>
        <p>La question laïque est au cœur de nombreuses tensions politiques et sociales depuis les années 1980 :</p>
        <ul>
          <li><strong>L'affaire des foulards (1989) :</strong> trois lycéennes de Creil renvoyées pour port du voile — point de départ de deux décennies de débat.</li>
          <li><strong>La Commission Stasi (2003) :</strong> rapport qui préconise la loi de 2004 et pose la distinction entre laïcité de service public et laïcité de l'espace public.</li>
          <li><strong>Les burkinis (2016) :</strong> arrêtés municipaux interdisant le burkini sur les plages, annulés par le Conseil d'État au nom de la liberté individuelle.</li>
          <li><strong>Le port du voile dans les entreprises privées :</strong> encadré par les règlements intérieurs depuis l'arrêt de la CJUE (2017).</li>
        </ul>
        <p>Deux lectures s'affrontent : une laïcité <strong>ouverte</strong> (protéger la liberté religieuse dans l'espace public) et une laïcité <strong>stricte</strong> (exclure le religieux de tous les espaces communs). Le droit positif se situe entre ces deux positions.</p>

        <h3>Laïcité et religions : un rapport apaisé ?</h3>
        <p>Contrairement à une idée reçue, la laïcité n'est pas anticléricale. L'État subventionne indirectement les religions via la déduction fiscale des dons, l'entretien des édifices cultuels antérieurs à 1905, et les aumôneries dans les prisons, hôpitaux et armées. Le <strong>Conseil français du culte musulman</strong> (CFCM, 2003) et le <strong>Forum de l'islam de France</strong> (FORIF, 2022) tentent d'organiser un interlocuteur officiel entre l'État et la communauté musulmane.</p>
        <p>Sur le plan européen, la France est souvent perçue comme le pays à la laïcité la plus stricte. La Cour européenne des droits de l'homme a généralement validé les restrictions françaises en matière de signes religieux, au nom de la marge d'appréciation nationale.</p>
      </div>
    </section>"""

# =====================================================================
# republique/medias
# =====================================================================
new_contenu['republique/medias'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Liberté de la presse, pluralisme, désinformation et rôle des médias en démocratie</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La liberté de la presse : un pilier démocratique</h3>
        <p>La liberté de la presse est garantie par la <strong>loi du 29 juillet 1881</strong>, texte fondateur du droit de la presse en France. Elle affirme que « l'imprimerie et la librairie sont libres » et encadre les délits de presse (diffamation, injure, provocation à la haine). Cette liberté est également protégée par l'article 11 de la DDHC de 1789 et l'article 10 de la Convention européenne des droits de l'homme.</p>
        <div class="highlight-box">
          <p><strong>Liberté de la presse dans le monde :</strong> selon Reporters sans frontières (RSF), la France se classe aux alentours de la 21<sup>e</sup> place mondiale en 2024. La Norvège, le Danemark et la Finlande dominent le classement. Des dizaines de journalistes sont emprisonnés ou tués chaque année à travers le monde (85 journalistes tués en 2022 selon RSF).</p>
        </div>

        <h3>Le paysage médiatique français</h3>
        <p>Les médias français se répartissent entre plusieurs acteurs :</p>
        <ul>
          <li><strong>L'audiovisuel public :</strong> France Télévisions, Radio France, France Médias Monde, Arte (franco-allemand), INA. Financé par une fraction de la TVA depuis la suppression de la redevance en 2022.</li>
          <li><strong>Les médias privés :</strong> TF1, M6, CNews, BFM TV pour la télévision ; Le Monde, Le Figaro, Libération, L'Obs pour la presse écrite.</li>
          <li><strong>Les pure players :</strong> Mediapart, Le Média, Blast — médias nés directement en ligne, souvent à abonnement.</li>
          <li><strong>Les agences de presse :</strong> l'AFP (Agence France-Presse) fournit informations et photos aux autres médias du monde entier.</li>
        </ul>

        <h3>La concentration des médias : un enjeu démocratique</h3>
        <p>Une tendance structurelle inquiète les observateurs : la concentration de la propriété des médias entre les mains de grands groupes industriels ou financiers :</p>
        <ul>
          <li><strong>Bolloré :</strong> CNews, C8, Canal+, Europe 1, JDD, Paris Match — groupe aux positions éditoriales marquées à droite.</li>
          <li><strong>Niel (Iliad) / Bergé / Pigasse :</strong> Le Monde, L'Obs, Télérama, Courrier International, L'Humanité (partiellement).</li>
          <li><strong>Altice (Patrick Drahi) :</strong> BFMTV, RMC, L'Express, Libération (participation).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Le problème :</strong> quand des intérêts économiques puissants possèdent les médias d'information, l'indépendance éditoriale peut être menacée. L'<strong>Arcom</strong> (Autorité de régulation de la communication audiovisuelle et numérique, ex-CSA) est chargée de veiller au pluralisme et peut sanctionner les chaînes qui y contreviennent.</p>
        </div>

        <h3>Les médias dans la démocratie : le « quatrième pouvoir »</h3>
        <p>Les médias sont souvent qualifiés de <strong>quatrième pouvoir</strong> car ils jouent un rôle d'information, de contrôle du pouvoir et de formation de l'opinion publique :</p>
        <ul>
          <li><strong>Chien de garde (watchdog) :</strong> enquêtes d'investigation, révélation de scandales (Watergate, affaire Cahuzac, Panama Papers, Pandora Papers).</li>
          <li><strong>Agenda-setting :</strong> les médias déterminent quels sujets sont perçus comme importants par le public — ils ne disent pas quoi penser, mais sur quoi penser.</li>
          <li><strong>Tribune publique :</strong> forum du débat démocratique, espace de confrontation des idées politiques et sociales.</li>
          <li><strong>Contre-pouvoir :</strong> exposé des abus de pouvoir, défense de l'intérêt général contre les intérêts particuliers.</li>
        </ul>

        <h3>La déontologie journalistique</h3>
        <p>Face aux pressions et aux dérives, la profession s'est dotée de règles déontologiques :</p>
        <ul>
          <li><strong>Charte de Munich (1971) :</strong> adoptée par les syndicats de journalistes européens, elle pose 10 devoirs (vérité, rectification des erreurs, confidentialité des sources...) et 5 droits (clause de conscience, secret professionnel).</li>
          <li><strong>Le Conseil de déontologie journalistique et de médiation (CDJM) :</strong> instance indépendante créée en 2019, elle examine les plaintes du public contre les médias.</li>
          <li><strong>Le secret des sources :</strong> protégé par la loi de 1881 (renforcée en 2010), un journaliste ne peut être contraint de révéler ses sources.</li>
        </ul>

        <h3>Désinformation, réseaux sociaux et nouveaux enjeux</h3>
        <p>L'ère numérique transforme le paysage médiatique et crée de nouveaux défis :</p>
        <ul>
          <li><strong>Les fake news :</strong> fausses informations diffusées délibérément, amplifiées par les algorithmes des réseaux sociaux (une étude MIT montre qu'elles se diffusent 6 fois plus vite que les vraies).</li>
          <li><strong>Les bulles de filtre :</strong> les algorithmes de recommandation enferment les utilisateurs dans des espaces idéologiques homogènes, renforçant la polarisation politique.</li>
          <li><strong>Loi anti-fake news (2018) :</strong> permet au juge des référés de faire retirer des « fausses informations » pendant les campagnes électorales — outil limité mais symbolique.</li>
          <li><strong>Digital Services Act (DSA, 2022) :</strong> impose aux très grandes plateformes une modération transparente des contenus illicites et des systèmes de recommandation.</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# republique/constitution
# =====================================================================
new_contenu['republique/constitution'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Le bloc de constitutionnalité, les institutions et le contrôle de constitutionnalité</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Qu'est-ce qu'une Constitution ?</h3>
        <p>Une <strong>Constitution</strong> est la loi fondamentale d'un État : elle définit l'organisation des pouvoirs publics, garantit les droits fondamentaux et fixe les règles du jeu politique. Toutes les autres lois doivent lui être conformes — c'est le principe de <strong>suprématie constitutionnelle</strong>. Il existe deux grandes formes :</p>
        <ul>
          <li><strong>Constitution écrite :</strong> texte formalisé, solennel, difficile à réviser (France, États-Unis, Allemagne).</li>
          <li><strong>Constitution coutumière :</strong> ensemble de pratiques et de textes non codifiés dans un document unique (Royaume-Uni, Israël, Nouvelle-Zélande).</li>
        </ul>

        <h3>Le bloc de constitutionnalité français</h3>
        <p>En France, la Constitution au sens large ne se résume pas au texte de 1958. Le <strong>bloc de constitutionnalité</strong>, dégagé par le Conseil constitutionnel dans sa décision du 16 juillet 1971, comprend :</p>
        <div class="highlight-box">
          <p><strong>Les quatre textes du bloc :</strong> (1) la Constitution du 4 octobre 1958 — organisation des institutions ; (2) la Déclaration des droits de l'homme et du citoyen de 1789 — libertés classiques ; (3) le Préambule de la Constitution de 1946 — droits sociaux et économiques ; (4) la Charte de l'environnement de 2004 — droit à un environnement sain et devoir de préservation.</p>
        </div>
        <p>Tout texte législatif doit respecter l'ensemble de ce bloc. Une loi peut donc être censurée parce qu'elle viole la DDHC de 1789 ou les droits sociaux reconnus en 1946, pas seulement le texte de 1958.</p>

        <h3>La Constitution de 1958 : structure et institutions</h3>
        <p>La V<sup>e</sup> République est instituée par la Constitution du 4 octobre 1958, rédigée sous l'impulsion de Charles de Gaulle et Michel Debré. Elle renforce l'exécutif par rapport aux régimes parlementaires précédents :</p>
        <ul>
          <li><strong>Titre I :</strong> De la souveraineté — article 3 : « La souveraineté nationale appartient au peuple. »</li>
          <li><strong>Titre II :</strong> Le Président de la République — élu au suffrage universel direct depuis 1962, garant des institutions.</li>
          <li><strong>Titre III :</strong> Le Gouvernement — nommé par le Président, responsable devant l'Assemblée nationale.</li>
          <li><strong>Titre IV :</strong> Le Parlement — Assemblée nationale (577 députés) et Sénat (348 sénateurs).</li>
          <li><strong>Titre VII :</strong> Le Conseil constitutionnel — garant de la conformité des lois à la Constitution.</li>
        </ul>

        <h3>La révision constitutionnelle : une procédure volontairement difficile</h3>
        <p>L'article 89 de la Constitution organise sa révision, délibérément exigeante pour protéger la loi fondamentale des majorités passagères :</p>
        <ul>
          <li>Initiative : Président de la République (sur proposition du Premier ministre) ou membres du Parlement.</li>
          <li>Vote des deux chambres en termes identiques.</li>
          <li>Ratification par référendum OU par Congrès réunissant les deux chambres à la majorité des 3/5.</li>
        </ul>
        <p>Certaines dispositions sont <strong>intangibles</strong> : selon l'article 89 alinéa 5, « la forme républicaine du gouvernement ne peut faire l'objet d'une révision ». La Constitution a été révisée 24 fois depuis 1958, notamment en 1962 (suffrage universel direct), 1974 (saisine du Conseil par 60 parlementaires), 1992 (traité de Maastricht), 2008 (réforme des institutions).</p>

        <h3>Le contrôle de constitutionnalité</h3>
        <p>Le <strong>Conseil constitutionnel</strong> (9 membres nommés pour 9 ans non renouvelables par le Président de la République, le président de l'Assemblée et le président du Sénat) veille à la conformité des lois :</p>
        <ul>
          <li><strong>Contrôle a priori (art. 61) :</strong> avant promulgation, saisi par le Président, les présidents des assemblées, ou 60 parlementaires. Les lois organiques et les règlements des assemblées lui sont obligatoirement soumis.</li>
          <li><strong>Question prioritaire de constitutionnalité (QPC, 2010) :</strong> réforme issue de la révision de 2008. Tout justiciable peut contester une loi en vigueur qu'il estime contraire aux droits et libertés constitutionnels lors d'un procès. Filtrée par la Cour de cassation ou le Conseil d'État.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Exemple de décision marquante :</strong> le Conseil constitutionnel a censuré en 2020 des dispositions de la loi Avia sur les contenus haineux en ligne, jugeant qu'elles portaient une atteinte disproportionnée à la liberté d'expression. Même adoptée par une majorité parlementaire, une loi peut être annulée si elle viole la Constitution.</p>
        </div>

        <h3>Constitutionnalisme comparé</h3>
        <p>La France n'est pas isolée : le constitutionnalisme est une tendance mondiale depuis 1945. Les grandes familles de systèmes constitutionnels :</p>
        <ul>
          <li><strong>Système américain :</strong> Cour suprême comme gardien de la Constitution ; contrôle diffus exercé par tous les juges (arrêt Marbury v. Madison, 1803).</li>
          <li><strong>Système européen (modèle kelsénien) :</strong> Cour constitutionnelle spécialisée — Allemagne (Bundesverfassungsgericht), Autriche, Espagne, Italie.</li>
          <li><strong>Systèmes de Westminster :</strong> Parlement souverain, pas de contrôle de constitutionnalité fort (Royaume-Uni) — la Human Rights Act de 1998 a introduit un contrôle plus souple.</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# republique/histoire
# =====================================================================
new_contenu['republique/histoire'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>De 1792 à nos jours : les cinq républiques françaises</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La I<sup>re</sup> République (1792–1804) : la naissance tumultueuse</h3>
        <p>La première République française est proclamée le <strong>21 septembre 1792</strong>, au lendemain de la victoire de Valmy contre les armées de la coalition. Elle est marquée par des ruptures profondes :</p>
        <ul>
          <li>La Convention nationale (1792-1795) et la Terreur jacobine sous Robespierre (1793-1794) — entre 16 000 et 40 000 exécutions.</li>
          <li>La Constitution de l'an I (1793), très démocratique (suffrage universel masculin, droit à l'insurrection) mais jamais appliquée en raison de la guerre.</li>
          <li>Le Directoire (1795-1799), régime instable, puis le Consulat (1799-1804) sous Napoléon Bonaparte.</li>
          <li><strong>Abolition de l'esclavage (1794) :</strong> rétabli par Napoléon en 1802.</li>
        </ul>

        <h3>La II<sup>e</sup> République (1848–1851) : le bref printemps démocratique</h3>
        <p>Issue de la Révolution de février 1848, la <strong>II<sup>e</sup> République</strong> instaure le suffrage universel masculin définitif (4 millions d'électeurs deviennent 9 millions). Ses apports fondamentaux :</p>
        <ul>
          <li><strong>Abolition définitive de l'esclavage</strong> (27 avril 1848, décret Schoelcher).</li>
          <li>Liberté de la presse et de réunion.</li>
          <li>Élection de Louis-Napoléon Bonaparte à la présidence en décembre 1848.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Le coup d'État du 2 décembre 1851 :</strong> Louis-Napoléon Bonaparte, dont le mandat présidentiel n'est pas renouvelable selon la Constitution, prend le pouvoir par la force. Il devient Napoléon III le 2 décembre 1852. La II<sup>e</sup> République n'aura duré que 3 ans.</p>
        </div>

        <h3>La III<sup>e</sup> République (1870–1940) : la République durable</h3>
        <p>Née de la défaite contre la Prusse (1870) et de la chute du Second Empire, la <strong>III<sup>e</sup> République</strong> est la plus longue des républiques françaises (70 ans). Ses réalisations fondatrices :</p>
        <ul>
          <li><strong>Lois constitutionnelles de 1875 :</strong> textes fondateurs, fruit d'un compromis entre républicains et monarchistes.</li>
          <li><strong>Lois Jules Ferry (1881-1882) :</strong> école gratuite, laïque et obligatoire — base de la méritocratie républicaine.</li>
          <li>Liberté de la presse (1881), liberté syndicale (1884), loi sur les associations (loi de 1901), séparation des Églises et de l'État (1905).</li>
          <li><strong>L'affaire Dreyfus (1894-1906) :</strong> crise politique et sociale qui divise la France et accélère la laïcisation.</li>
        </ul>
        <p>La III<sup>e</sup> République est fragilisée par les crises successives (Grande Dépression, montée du fascisme) avant de s'effondrer lors du vote des pleins pouvoirs à Pétain le 10 juillet 1940 (569 voix pour, 80 contre — les « 80 » de la démocratie).</p>

        <h3>La IV<sup>e</sup> République (1946–1958) : instabilité et modernisation</h3>
        <p>Fondée après la Libération, la <strong>IV<sup>e</sup> République</strong> apporte des avancées majeures malgré son instabilité gouvernementale chronique :</p>
        <ul>
          <li>Droit de vote des femmes (exercé pour la première fois en 1945).</li>
          <li>Préambule de 1946 reconnaissant les droits sociaux : éducation, santé, travail, égalité femmes-hommes.</li>
          <li>Construction européenne : CECA (1951), traité de Rome (1957).</li>
          <li>Plan Marshall et reconstruction économique (début des Trente Glorieuses).</li>
        </ul>
        <p>Mais elle souffre d'une instabilité gouvernementale chronique (24 gouvernements en 12 ans) et est emportée par la crise algérienne et la menace d'un coup d'État militaire. Charles de Gaulle est rappelé au pouvoir en juin 1958.</p>

        <h3>La V<sup>e</sup> République (1958–) : la République présidentielle</h3>
        <p>Instaurée le 4 octobre 1958 par Charles de Gaulle et Michel Debré, la <strong>V<sup>e</sup> République</strong> renforce considérablement le pouvoir exécutif face au Parlement :</p>
        <ul>
          <li>Président élu au suffrage universel direct depuis 1962 (réforme de Gaulle par référendum).</li>
          <li>Article 49-3 permettant d'engager la responsabilité du gouvernement sur un texte de loi — utilisé de nombreuses fois depuis.</li>
          <li>Quinquennat depuis 2002 (remplace le septennat) — alignement avec le mandat législatif, réduction du risque de cohabitation.</li>
          <li>Réforme constitutionnelle de 2008 : création de la QPC, limitation des mandats présidentiels, renforcement des droits du Parlement.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La cohabitation :</strong> phénomène apparu en 1986 lorsque la majorité parlementaire est d'une couleur politique différente du Président. Trois cohabitations connues : 1986-1988 (Mitterrand/Chirac), 1993-1995 (Mitterrand/Balladur), 1997-2002 (Chirac/Jospin). Le quinquennat a considérablement réduit ce risque en alignant les calendriers électoriaux.</p>
        </div>
      </div>
    </section>"""

# =====================================================================
# republique/separation-pouvoirs
# =====================================================================
new_contenu['republique/separation-pouvoirs'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Exécutif, législatif, judiciaire : équilibre et contrôle mutuel des pouvoirs</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La théorie de Montesquieu</h3>
        <p>La séparation des pouvoirs est théorisée par <strong>Montesquieu</strong> dans <em>De l'esprit des lois</em> (1748) : « Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrête le pouvoir. » Il distingue trois fonctions fondamentales de l'État :</p>
        <ul>
          <li><strong>Le pouvoir législatif :</strong> édicter les lois.</li>
          <li><strong>Le pouvoir exécutif :</strong> appliquer les lois, gouverner.</li>
          <li><strong>Le pouvoir judiciaire :</strong> trancher les litiges et sanctionner les violations de la loi.</li>
        </ul>
        <p>Montesquieu s'inspire du système anglais de son époque et conclut que ces trois pouvoirs doivent être détenus par des organes distincts et se contrôler mutuellement — c'est le principe des <em>checks and balances</em>, fondement de toute démocratie libérale.</p>

        <h3>Le pouvoir législatif en France</h3>
        <p>Le Parlement français est <strong>bicaméral</strong> : il comprend l'Assemblée nationale (577 députés élus pour 5 ans au suffrage universel direct) et le Sénat (348 sénateurs élus pour 6 ans au suffrage indirect par les grands électeurs). Ses missions principales :</p>
        <ul>
          <li>Voter les lois, y compris la loi de finances (budget de l'État) et la loi de financement de la Sécurité sociale.</li>
          <li>Contrôler l'action du gouvernement : questions orales hebdomadaires, commissions d'enquête, rapport annuel d'application des lois.</li>
          <li>Ratifier les traités internationaux et autoriser la déclaration de guerre (art. 35).</li>
          <li>Voter la motion de censure pour renverser le gouvernement (art. 49-3).</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Le domaine réglementaire vs légal :</strong> la V<sup>e</sup> République a limité le domaine de la loi (art. 34 de la Constitution). Tout ce qui n'est pas dans la liste de l'article 34 relève du pouvoir réglementaire du gouvernement — une innovation qui renforce l'exécutif par rapport aux régimes précédents.</p>
        </div>

        <h3>Le pouvoir exécutif en France</h3>
        <p>La France est un régime <strong>semi-présidentiel</strong> avec un exécutif bicéphale :</p>
        <ul>
          <li><strong>Le Président de la République :</strong> élu pour 5 ans au suffrage universel direct. Il nomme le Premier ministre, préside le Conseil des ministres, est chef des armées, dispose du droit de dissolution de l'Assemblée nationale (art. 12) et de l'article 16 (pouvoirs de crise).</li>
          <li><strong>Le Premier ministre :</strong> dirige le gouvernement, est responsable devant l'Assemblée nationale. Il dispose du pouvoir réglementaire général (art. 21). En cas de cohabitation, il dirige réellement le gouvernement.</li>
        </ul>

        <h3>Le pouvoir judiciaire</h3>
        <p>En France, le terme « pouvoir judiciaire » est controversé : la Constitution évoque plutôt l'<strong>autorité judiciaire</strong> (titre VIII), reflet d'une méfiance historique envers les juges héritée des Parlements d'Ancien Régime. La justice est organisée en deux ordres distincts :</p>
        <ul>
          <li><strong>Ordre judiciaire :</strong> juridictions civiles (litiges entre particuliers) et pénales (infractions à la loi) — avec la Cour de cassation au sommet.</li>
          <li><strong>Ordre administratif :</strong> litiges impliquant l'État et les administrations publiques — avec le Conseil d'État au sommet.</li>
        </ul>
        <p>L'indépendance des magistrats du siège est garantie par le <strong>Conseil supérieur de la magistrature</strong> (CSM), qui veille sur leur nomination, avancement et discipline.</p>

        <h3>Les mécanismes de contrôle mutuel</h3>
        <p>En France, les pouvoirs se contrôlent selon plusieurs mécanismes institutionnels :</p>
        <ul>
          <li><strong>Le Parlement contrôle le gouvernement :</strong> questions (hebdomadaires), commissions d'enquête, vote de la loi de règlement (exécution budgétaire), motion de censure.</li>
          <li><strong>Le gouvernement maîtrise l'ordre du jour :</strong> il peut limiter l'initiative parlementaire (art. 48) et accélérer la procédure législative.</li>
          <li><strong>Le Président peut dissoudre l'Assemblée</strong> (art. 12) — sauf dans le mois suivant des élections législatives.</li>
          <li><strong>Le Conseil constitutionnel</strong> veille à la constitutionnalité des lois (art. 61 et QPC depuis 2010).</li>
          <li><strong>Le Conseil d'État</strong> annule les actes administratifs illégaux et conseille le gouvernement sur ses projets de loi.</li>
        </ul>

        <h3>Comparaison avec d'autres régimes</h3>
        <p>La séparation des pouvoirs varie selon les systèmes politiques :</p>
        <ul>
          <li><strong>Régime présidentiel (États-Unis) :</strong> séparation stricte — le Président ne peut pas dissoudre le Congrès, le Congrès ne peut pas renverser le Président (sauf impeachment). Les trois pouvoirs sont réellement indépendants.</li>
          <li><strong>Régime parlementaire (Allemagne, Royaume-Uni) :</strong> fusion partielle — le chef du gouvernement (Chancelier, Premier ministre) est issu de la majorité parlementaire et peut être renversé.</li>
          <li><strong>Semi-présidentialisme (France, Finlande, Portugal) :</strong> mélange des deux — le Président a des pouvoirs propres, mais le gouvernement est aussi responsable devant le Parlement.</li>
          <li><strong>Régimes autoritaires :</strong> concentration des pouvoirs dans une seule main, sans contre-pouvoir effectif — à l'opposé de la théorie de Montesquieu.</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# enjeux/bioethique
# =====================================================================
new_contenu['enjeux/bioethique'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>PMA, fin de vie, génomique : les questions éthiques posées par les sciences du vivant</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Naissance de la bioéthique</h3>
        <p>Le terme <strong>bioéthique</strong> est forgé en 1971 par l'oncologue américain Van Rensselaer Potter pour désigner l'étude des dimensions éthiques des sciences de la vie. Cette discipline naît de la convergence de deux facteurs : les progrès fulgurants de la biologie médicale (réanimation, transplantation d'organes, génétique) et les scandales éthiques révélés après la Seconde Guerre mondiale (expériences nazies sur des détenus, affaire Tuskegee — où des Noirs américains atteints de syphilis ont été délibérément non soignés de 1932 à 1972).</p>
        <div class="highlight-box">
          <p><strong>Le Code de Nuremberg (1947) :</strong> premier texte international d'éthique médicale, il affirme l'exigence du <em>consentement éclairé</em> du patient ou du sujet de recherche. C'est la pierre fondatrice de la bioéthique moderne, rédigée en réponse aux crimes médicaux nazis.</p>
        </div>

        <h3>Le cadre législatif français : les lois de bioéthique</h3>
        <p>La France a adopté une approche législative de la bioéthique, avec des lois révisées régulièrement pour s'adapter aux avancées scientifiques :</p>
        <ul>
          <li><strong>Lois Veil de 1994 :</strong> premières lois françaises de bioéthique — encadrement du don d'organes, de la procréation médicalement assistée (PMA), et de la recherche sur l'embryon.</li>
          <li><strong>Révision de 2004 :</strong> confirmation du cadre, encadrement de la recherche sur les cellules souches embryonnaires.</li>
          <li><strong>Révision de 2011 :</strong> renforcement de l'autoconservation des gamètes, encadrement des tests génétiques prédictifs.</li>
          <li><strong>Loi du 2 août 2021 :</strong> ouverture de la PMA aux couples de femmes et aux femmes seules, autoconservation des ovocytes sans raison médicale, élargissement de la recherche sur l'embryon.</li>
        </ul>
        <p>Le <strong>Comité consultatif national d'éthique</strong> (CCNE), créé en 1983, est l'organe consultatif chargé de rendre des avis sur les questions éthiques posées par les avancées scientifiques. Ses avis sont rendus publics et influencent le législateur.</p>

        <h3>La procréation médicalement assistée (PMA)</h3>
        <p>La PMA (fécondation in vitro, insémination artificielle, don de gamètes) soulève plusieurs questions éthiques fondamentales :</p>
        <ul>
          <li><strong>Statut de l'embryon :</strong> est-il une personne, un être en devenir, ou du matériel biologique ? La loi française lui confère un statut intermédiaire de « personne humaine potentielle » — ni simple tissu biologique, ni personne au sens juridique.</li>
          <li><strong>Diagnostic préimplantatoire (DPI) :</strong> sélection d'embryons sains avant implantation — outil thérapeutique contre les maladies génétiques graves, mais risque glissant vers un eugénisme de fait.</li>
          <li><strong>Droit aux origines :</strong> la loi de 2021 ouvre aux personnes conçues par don de gamètes l'accès à l'identité du donneur à leur majorité.</li>
          <li><strong>Gestation pour autrui (GPA) :</strong> toujours interdite en France, sujet de vifs débats entre autonomie corporelle et risque d'exploitation commerciale des femmes.</li>
        </ul>

        <h3>La génomique et les tests génétiques</h3>
        <p>Le séquençage du génome humain (achevé en 2003) ouvre des possibilités thérapeutiques immenses mais aussi des risques considérables :</p>
        <ul>
          <li><strong>Médecine de précision :</strong> traitements personnalisés en fonction du profil génétique du patient, notamment en oncologie (identification des mutations tumorales) et en pharmacogénomique (adapter les médicaments au métabolisme individuel).</li>
          <li><strong>CRISPR-Cas9 :</strong> technique d'édition génomique révolutionnaire permettant de « couper-coller » l'ADN. En 2018, le scientifique chinois He Jiankui a créé les premiers bébés génétiquement modifiés — provoquant une condamnation internationale unanime.</li>
          <li><strong>Tests génétiques grand public :</strong> entreprises comme 23andMe ou Ancestry proposent des tests ADN aux particuliers — questions de confidentialité, de discrimination génétique à l'assurance ou à l'emploi.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La Convention d'Oviedo (1997) :</strong> premier traité international contraignant en bioéthique, adoptée par le Conseil de l'Europe. Elle interdit l'eugénisme, les interventions héréditaires sur le génome humain transmissibles à la descendance, le clonage reproductif, et la création d'embryons à des fins purement commerciales.</p>
        </div>

        <h3>La fin de vie : euthanasie, suicide assisté et soins palliatifs</h3>
        <p>La question de la fin de vie est l'une des plus controversées en bioéthique, mêlant droit, éthique médicale, religion et politique :</p>
        <ul>
          <li><strong>Euthanasie active :</strong> acte délibéré visant à provoquer la mort d'un patient souffrant à sa demande — légale aux Pays-Bas, en Belgique, au Luxembourg, en Espagne, au Canada.</li>
          <li><strong>Suicide assisté :</strong> fournir à un patient les moyens de mettre fin à sa vie — légal en Suisse (Dignitas), en Oregon (Death with Dignity Act, 1997), en Allemagne depuis 2020.</li>
          <li><strong>En France — loi Leonetti (2005) :</strong> autorise l'arrêt des traitements (euthanasie passive) et la sédation profonde et continue jusqu'au décès, mais interdit l'euthanasie active. Un débat national a été lancé en 2023 pour une possible évolution vers le « suicide assisté encadré ».</li>
          <li><strong>Soins palliatifs :</strong> accompagnement des patients en fin de vie pour soulager la douleur sans chercher à guérir — encore insuffisamment développés en France (moins de 50 % des patients qui en auraient besoin y ont accès).</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# enjeux/vivre-ensemble
# =====================================================================
new_contenu['enjeux/vivre-ensemble'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Diversité, discriminations, intégration : les défis de la cohésion sociale en France</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La société française : portrait d'une diversité</h3>
        <p>La France est une société plurielle : issue d'une longue histoire d'immigration (depuis la fin du XIX<sup>e</sup> siècle, notamment pour les besoins industriels), elle accueille des populations aux origines, religions et cultures variées. Selon l'INED, environ 7 millions de personnes immigrées vivent en France (soit ~10 % de la population), auxquelles s'ajoutent plusieurs millions de descendants d'immigrés. Cette diversité est une richesse culturelle et économique, mais aussi une source de tensions qui interrogent le modèle républicain d'intégration.</p>

        <h3>Le modèle français d'intégration</h3>
        <p>La France a choisi un modèle <strong>assimilationniste</strong> : les individus sont intégrés comme citoyens égaux, indépendamment de leurs origines culturelles ou religieuses. Ce modèle républicain s'oppose au <strong>multiculturalisme</strong> anglo-saxon qui reconnaît et valorise les différences culturelles dans l'espace public.</p>
        <div class="highlight-box">
          <p><strong>Le principe républicain :</strong> l'article 1<sup>er</sup> de la Constitution affirme que la France est une République « indivisible » qui « assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion ». Les statistiques ethniques sont interdites dans les recensements officiels — au nom de l'universalisme républicain.</p>
        </div>

        <h3>Discriminations et inégalités persistantes</h3>
        <p>Malgré le cadre républicain, les discriminations persistent et sont abondamment documentées :</p>
        <ul>
          <li><strong>Discrimination à l'emploi :</strong> les études par <em>testing</em> montrent qu'un CV avec un nom à consonance maghrébine reçoit significativement moins de réponses qu'un CV identique avec un nom français « typique ».</li>
          <li><strong>Ségrégation résidentielle :</strong> concentration des populations défavorisées et issues de l'immigration dans les banlieues (quartiers prioritaires de la politique de la ville — QPV).</li>
          <li><strong>Inégalités scolaires :</strong> orientation plus fréquente vers les filières professionnelles des élèves issus de milieux défavorisés ou de l'immigration, malgré les dispositifs d'éducation prioritaire.</li>
          <li><strong>Contrôles au faciès :</strong> documentés par le Défenseur des droits dans plusieurs études, ils alimentent un sentiment de discrimination dans les jeunes populations des banlieues.</li>
        </ul>

        <h3>Les politiques publiques de cohésion sociale</h3>
        <p>Plusieurs instruments publics visent à réduire les inégalités et favoriser la cohésion :</p>
        <ul>
          <li><strong>Politique de la ville :</strong> depuis les années 1980, programmes spécifiques pour les quartiers défavorisés (ZUS, puis QPV, et l'ANRU — Agence nationale pour la rénovation urbaine — qui a engagé des milliards d'euros de rénovation).</li>
          <li><strong>Éducation prioritaire :</strong> réseaux REP et REP+ concentrant ressources supplémentaires et enseignants expérimentés dans les zones difficiles.</li>
          <li><strong>Le Défenseur des droits :</strong> autorité constitutionnelle indépendante créée en 2011, chargée de lutter contre les discriminations et défendre les droits fondamentaux. Accessible gratuitement par tout citoyen.</li>
          <li><strong>La discrimination positive limitée :</strong> controversée en France au nom du principe d'égalité formelle, elle est pratiquée de façon prudente (Sciences Po, conventions ZEP dans certaines grandes écoles).</li>
        </ul>

        <h3>Racisme, antisémitisme et autres formes de haine</h3>
        <p>Les actes racistes et discriminatoires restent une réalité en France, régulièrement mesurée :</p>
        <ul>
          <li><strong>Statistiques :</strong> le SSMSI (Service statistique ministériel de la sécurité intérieure) enregistre chaque année des dizaines de milliers d'infractions à caractère raciste, antisémite ou islamophobe.</li>
          <li><strong>Le cadre juridique :</strong> loi Pleven de 1972 (incitation à la haine raciale), loi Gayssot de 1990 (négationnisme), loi de 2017 (aggravation des peines pour les crimes et délits à caractère raciste).</li>
          <li><strong>CNCDH :</strong> la Commission nationale consultative des droits de l'homme publie chaque année un rapport de référence sur l'état du racisme, de l'antisémitisme et de la xénophobie en France.</li>
        </ul>

        <h3>Les nouvelles dynamiques du vivre-ensemble</h3>
        <p>De nouvelles approches transforment la manière de penser la coexistence sociale :</p>
        <ul>
          <li><strong>L'interculturalité :</strong> approche qui valorise les échanges et l'enrichissement mutuel entre cultures, au-delà de la simple tolérance — elle reconnaît que les cultures se transforment au contact les unes des autres.</li>
          <li><strong>Les tiers-lieux :</strong> espaces de coworking, fab labs, jardins partagés, cafés associatifs qui créent du lien social en mélangeant les publics.</li>
          <li><strong>Les budgets participatifs :</strong> dispositifs de démocratie locale (Paris, Rennes, Grenoble) permettant aux citoyens de voter pour des projets dans leur quartier.</li>
          <li><strong>La loi « anti-séparatisme » (2021) :</strong> loi « confortant le respect des principes de la République », elle renforce les obligations des associations subventionnées par l'État et encadre l'enseignement à domicile pour lutter contre les dérives communautaristes.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La question des banlieues :</strong> les émeutes de 2005 (après la mort de Zyed Benna et Bouna Traoré à Clichy-sous-Bois) et de 2023 (après la mort de Nahel Merzouk à Nanterre) ont révélé la persistance d'un malaise profond dans les quartiers populaires, mêlant pauvreté, ségrégation, discrimination et déficit de représentation politique.</p>
        </div>
      </div>
    </section>"""

# =====================================================================
# enjeux/developpement-durable
# =====================================================================
new_contenu['enjeux/developpement-durable'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Écologie, transition énergétique, biodiversité : les défis environnementaux du XXIe siècle</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Définition et origines du développement durable</h3>
        <p>La notion de <strong>développement durable</strong> (<em>sustainable development</em>) est popularisée par le rapport Brundtland de 1987 (<em>Notre avenir commun</em>), publié par la Commission mondiale sur l'environnement et le développement de l'ONU. Sa définition fondatrice : « un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs ».</p>
        <p>Le développement durable repose sur trois piliers interdépendants, souvent représentés par trois cercles qui se recoupent :</p>
        <ul>
          <li><strong>Économique :</strong> croissance et développement économique viable à long terme.</li>
          <li><strong>Social :</strong> équité, réduction des inégalités, cohésion sociale, accès aux besoins fondamentaux.</li>
          <li><strong>Environnemental :</strong> préservation des ressources naturelles, des écosystèmes et du climat.</li>
        </ul>

        <h3>Le changement climatique : urgence planétaire</h3>
        <p>Le <strong>changement climatique</strong> est la manifestation la plus urgente de l'insoutenabilité du modèle de développement actuel. Le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat), créé en 1988, produit des rapports d'évaluation scientifique qui font autorité mondiale :</p>
        <div class="highlight-box">
          <p><strong>Rapport du GIEC (2021-2022) :</strong> il est désormais « sans équivoque » que l'influence humaine a réchauffé le système climatique. Le réchauffement moyen depuis l'ère préindustrielle dépasse déjà 1,1°C. Pour limiter le réchauffement à 1,5°C, les émissions mondiales doivent être réduites de 43 % d'ici 2030 et atteindre la neutralité carbone aux alentours de 2050.</p>
        </div>
        <p>Les conséquences documentées : montée des eaux (34 cm depuis 1900, accélération en cours), multiplication des événements extrêmes (canicules, ouragans, incendies), acidification des océans, fonte des glaciers et du permafrost, perturbation des écosystèmes marins et terrestres.</p>

        <h3>Les accords internationaux pour le climat</h3>
        <p>La gouvernance climatique mondiale s'appuie sur une série de négociations et d'accords :</p>
        <ul>
          <li><strong>Protocole de Kyoto (1997) :</strong> premier accord contraignant de réduction des émissions pour les pays développés. Les États-Unis ne l'ont jamais ratifié. Limité dans sa portée.</li>
          <li><strong>Accord de Paris (2015) :</strong> adopté par 196 parties lors de la COP21 à Paris, il vise à limiter le réchauffement à « bien en dessous de 2°C » et à poursuivre les efforts pour 1,5°C. Chaque pays présente des <em>Contributions déterminées au niveau national</em> (NDC) révisées tous les 5 ans.</li>
          <li><strong>COP27 (Charm el-Cheikh, 2022) :</strong> création d'un fonds « pertes et préjudices » pour les pays les plus vulnérables.</li>
          <li><strong>COP28 (Dubaï, 2023) :</strong> accord historique appelant à une « transition hors des combustibles fossiles » — premier texte à mentionner explicitement le pétrole, le gaz et le charbon.</li>
        </ul>

        <h3>La biodiversité : la sixième extinction de masse</h3>
        <p>Parallèlement au changement climatique, la biodiversité mondiale s'effondre à un rythme sans précédent depuis 65 millions d'années (extinction des dinosaures) :</p>
        <ul>
          <li>L'IPBES (Plateforme intergouvernementale sur la biodiversité et les services écosystémiques, équivalent du GIEC pour la biodiversité) estime qu'environ <strong>1 million d'espèces</strong> sont menacées d'extinction.</li>
          <li>Les principales causes : destruction et fragmentation des habitats (déforestation, urbanisation), surexploitation (surpêche, chasse), pollution (pesticides, plastiques), espèces invasives, et changement climatique.</li>
          <li><strong>Accord de Kunming-Montréal (COP15 biodiversité, 2022) :</strong> objectif dit « 30x30 » — protéger 30 % des terres et des océans d'ici 2030.</li>
        </ul>

        <h3>La transition énergétique</h3>
        <p>La décarbonation de l'économie passe par une transformation profonde des systèmes énergétiques :</p>
        <ul>
          <li><strong>Énergies renouvelables :</strong> solaire, éolien, hydraulique, géothermie — leur coût a chuté de 80 à 90 % en dix ans, les rendant désormais plus compétitives que les énergies fossiles dans de nombreux contextes.</li>
          <li><strong>En France :</strong> le nucléaire fournit ~70 % de l'électricité. Le débat sur la prolongation et le développement d'un nouveau parc nucléaire (6 EPR2 annoncés par E. Macron en 2022) est au cœur de la stratégie climatique nationale.</li>
          <li><strong>Rénovation thermique :</strong> les bâtiments représentent ~25 % des émissions en France. La rénovation des « passoires thermiques » (DPE G et F) est un enjeu social (précarité énergétique) et climatique.</li>
          <li><strong>Mobilité décarbonée :</strong> électrification des transports, développement des transports en commun, promotion du vélo, Plan vélo national (2019).</li>
        </ul>

        <h3>Les Objectifs de développement durable (ODD)</h3>
        <p>Adoptés par l'ONU en 2015 dans le cadre de l'Agenda 2030, les <strong>17 ODD</strong> constituent la feuille de route mondiale du développement durable. Ils couvrent la pauvreté, la faim, la santé, l'éducation, l'égalité des sexes, l'eau propre, l'énergie propre, l'emploi décent, les inégalités, les villes durables, la consommation responsable, le climat, les écosystèmes marins et terrestres, la paix et les partenariats.</p>
        <div class="highlight-box">
          <p><strong>L'empreinte carbone de la France :</strong> si l'on inclut les émissions des biens consommés en France mais produits à l'étranger (empreinte carbone), un Français émet environ 9 tonnes de CO₂ équivalent par an. L'objectif de la Stratégie nationale bas-carbone est de descendre à environ 2 tonnes par habitant d'ici 2050 — une réduction de plus de 75 % qui suppose une transformation profonde des modes de vie et de production.</p>
        </div>
      </div>
    </section>"""

# =====================================================================
# enjeux/numerique
# =====================================================================
new_contenu['enjeux/numerique'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Réseaux sociaux, intelligence artificielle, fracture numérique et citoyenneté en ligne</p>
        </div>
      </div>
      <div class="course-content">
        <h3>La révolution numérique : une transformation de société</h3>
        <p>La <strong>révolution numérique</strong>, amorcée dans les années 1990 avec la démocratisation d'Internet, a profondément transformé les sociétés contemporaines en quelques décennies. En France, 93 % des 12-39 ans utilisent Internet quotidiennement (Baromètre du numérique 2023). Le numérique transforme le travail (télétravail, plateformes, automatisation), les loisirs, les relations sociales, l'accès à l'information et les formes de participation citoyenne.</p>

        <h3>Les réseaux sociaux : espace public et enjeux démocratiques</h3>
        <p>Les plateformes numériques (Facebook/Meta, X/Twitter, TikTok, Instagram, YouTube) sont devenues des espaces centraux du débat public et de la formation de l'opinion :</p>
        <ul>
          <li><strong>Formation de l'opinion :</strong> les algorithmes de recommandation déterminent ce que les utilisateurs voient, avec des effets mesurés sur leurs opinions politiques et leurs comportements d'achat.</li>
          <li><strong>Mobilisation politique :</strong> le mouvement des Gilets jaunes (2018) s'est largement organisé via Facebook ; le Printemps arabe (2011) a utilisé Twitter et YouTube pour coordonner les contestations.</li>
          <li><strong>Bulles de filtre :</strong> théorisées par Eli Pariser (2011), elles désignent l'enfermement algorithmique dans des espaces idéologiques homogènes, renforçant la polarisation politique.</li>
          <li><strong>Désinformation virale :</strong> une étude du MIT (2018) montre que les fausses informations se diffusent 6 fois plus vite que les vraies sur Twitter/X.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La puissance des GAFAM :</strong> cinq entreprises américaines — Google (Alphabet), Amazon, Facebook (Meta), Apple, Microsoft — concentrent une puissance économique, informationnelle et infrastructurelle sans précédent. Leur valorisation boursière cumulée dépasse le PIB de la plupart des pays. Elles collectent des données personnelles à une échelle inégalée dans l'histoire.</p>
        </div>

        <h3>L'intelligence artificielle : enjeux citoyens</h3>
        <p>L'<strong>intelligence artificielle</strong> (IA) soulève des questions civiques et éthiques majeures qui dépassent largement la sphère technique :</p>
        <ul>
          <li><strong>Décisions algorithmiques :</strong> des algorithmes décident de l'attribution de crédits, du recrutement, de la modération des contenus, voire des peines judiciaires (<em>recidivism scoring</em> aux États-Unis — l'outil COMPAS a été accusé de biais raciaux).</li>
          <li><strong>Surveillance de masse :</strong> reconnaissance faciale dans les espaces publics (controversée en Europe), notation sociale expérimentée en Chine, analyse des comportements en ligne.</li>
          <li><strong>Deepfakes :</strong> vidéos et audios synthétiques ultra-réalistes générés par IA — menace croissante pour la vérité, les élections démocratiques et la vie privée des personnes.</li>
          <li><strong>IA Act (UE, 2024) :</strong> premier règlement mondial contraignant sur l'IA, classant les systèmes selon leur niveau de risque et imposant des obligations de transparence et de supervision humaine.</li>
        </ul>

        <h3>La fracture numérique</h3>
        <p>L'accès au numérique est inégal et crée de nouvelles formes d'exclusion sociale — paradoxalement, à l'heure de la dématérialisation des services publics :</p>
        <ul>
          <li><strong>Fracture d'accès :</strong> environ 13 millions de Français sont en difficulté avec le numérique (<em>illectronisme</em> — terme créé par analogie avec l'illettrisme, désignant l'incapacité à utiliser les outils numériques courants).</li>
          <li><strong>Fracture générationnelle :</strong> les personnes âgées sont les moins équipées et les moins à l'aise avec les outils numériques, malgré des progrès récents.</li>
          <li><strong>Fracture territoriale :</strong> les zones rurales ont un accès plus limité au très haut débit (le Plan France Très Haut Débit vise la couverture totale, mais l'objectif a été repoussé plusieurs fois).</li>
          <li><strong>Dématérialisation des services publics :</strong> la fermeture des guichets physiques au profit du tout-numérique crée des difficultés majeures pour les publics précaires, âgés ou peu alphabétisés.</li>
        </ul>

        <h3>La cybersécurité : enjeu de souveraineté nationale</h3>
        <p>La sécurité informatique est devenue un enjeu géopolitique et un risque civil majeur :</p>
        <ul>
          <li><strong>Cyberattaques :</strong> ransomwares (logiciels de rançon) ont paralysé des hôpitaux (CHU de Rouen, Corbeil-Essonnes), des collectivités locales, des entreprises stratégiques. L'ANSSI (Agence nationale de la sécurité des systèmes d'information) coordonne la cyberdéfense française.</li>
          <li><strong>Ingérence électorale :</strong> les opérations de manipulation de l'information lors des élections sont documentées (MacronLeaks pendant la présidentielle 2017, ingérences lors des élections américaines de 2016 et 2020).</li>
          <li><strong>Souveraineté numérique :</strong> la dépendance aux infrastructures et aux logiciels américains est un enjeu stratégique — développement du cloud souverain (HDS), promotion des logiciels libres dans l'administration, plans de stockage des données en Europe.</li>
        </ul>

        <h3>La citoyenneté numérique</h3>
        <p>La notion de <strong>citoyenneté numérique</strong> désigne l'ensemble des droits, devoirs et compétences qui permettent de participer à la vie sociale à l'ère numérique :</p>
        <ul>
          <li>Maîtriser les outils numériques essentiels (certification PIX pour les élèves et adultes en France).</li>
          <li>Exercer son droit à la vie privée et à la protection des données personnelles (droits RGPD).</li>
          <li>Distinguer information fiable, opinion, désinformation et propagande.</li>
          <li>Respecter les règles de courtoisie en ligne et s'opposer au cyberharcèlement (délit puni de 2 ans d'emprisonnement en France).</li>
          <li>Comprendre les enjeux de gouvernance d'Internet (ICANN, neutralité du net, gestion des noms de domaine).</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# enjeux/desinformation
# =====================================================================
new_contenu['enjeux/desinformation'] = """<section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Fake news, théories du complot, esprit critique et éducation aux médias</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Définitions : désinformation, mésinformation, malinformation</h3>
        <p>Le terme générique de « désinformation » recouvre plusieurs réalités distinctes, que la chercheuse Claire Wardle (First Draft) a contribué à préciser dans une taxonomie de référence :</p>
        <ul>
          <li><strong>Mésinformation (misinformation) :</strong> information fausse diffusée sans intention délibérée de nuire — une erreur de bonne foi, un malentendu non corrigé.</li>
          <li><strong>Désinformation (disinformation) :</strong> information fausse diffusée <em>intentionnellement</em> pour tromper ou manipuler — propagande, guerre de l'information.</li>
          <li><strong>Malinformation (malinformation) :</strong> information <em>vraie</em> utilisée pour nuire à une personne ou institution — révélation de vie privée sans intérêt public, diffusion sélective pour créer un faux contexte.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>L'expression « fake news » :</strong> popularisée pendant la campagne présidentielle américaine de 2016, elle est employée indifféremment pour désigner des contenus faux et pour disqualifier des médias qui déplaisent (usage politisé). Donald Trump a utilisé ce terme contre CNN et le New York Times. Les spécialistes préfèrent les termes « désinformation » ou « infox ».</p>
        </div>

        <h3>Les mécanismes de diffusion de la désinformation</h3>
        <p>Plusieurs facteurs amplifient la propagation des fausses informations à l'ère numérique :</p>
        <ul>
          <li><strong>Les algorithmes de recommandation :</strong> conçus pour maximiser l'engagement, ils favorisent les contenus émotionnellement forts (colère, peur, indignation) — qui sont aussi souvent les contenus les moins vérifiés.</li>
          <li><strong>Les biais cognitifs :</strong> biais de confirmation (on croit plus facilement ce qui confirme nos croyances préexistantes), biais d'illusion de vérité (la répétition crée un sentiment de véracité même pour les fausses informations).</li>
          <li><strong>La rapidité de partage :</strong> une étude du MIT publiée dans <em>Science</em> (2018) montre que les fausses informations se diffusent 6 fois plus vite que les vraies sur X/Twitter, et touchent une population 10 fois plus large.</li>
          <li><strong>Les groupes fermés :</strong> WhatsApp, Telegram et Snapchat permettent la diffusion massive dans des espaces peu modérés, hors du regard public.</li>
          <li><strong>Les deepfakes :</strong> vidéos ou audios synthétiques ultra-réalistes générés par IA — menace croissante pour la confiance dans les preuves visuelles et sonores.</li>
        </ul>

        <h3>Les théories du complot : mécanismes et diffusion</h3>
        <p>Les <strong>théories complotistes</strong> attribuent des événements à l'action secrète et délibérée d'une organisation cachée. Elles ne sont pas nouvelles (antisémitisme des <em>Protocoles des Sages de Sion</em> au XIX<sup>e</sup> siècle) mais se sont démultipliées avec Internet :</p>
        <ul>
          <li><strong>Caractéristiques communes :</strong> explication totalisante qui prétend dévoiler une « vérité cachée », invérifiabilité structurelle (les démentis sont interprétés comme des preuves supplémentaires), désignation d'un bouc émissaire, résistance aux faits.</li>
          <li><strong>Exemples contemporains :</strong> théories sur les origines du Covid-19, le « Grand Remplacement », la dangerosité de la 5G, les vaccins comme vecteur de puce électronique, QAnon (réseau de théories conspirationnistes autour de Trump).</li>
          <li><strong>L'écosystème complotiste :</strong> chaînes YouTube, groupes Telegram, sites alternatifs — construction d'une « contre-culture » de la méfiance systématique envers les institutions.</li>
        </ul>

        <h3>Le fact-checking : outils et méthodes</h3>
        <p>Le <strong>fact-checking</strong> (vérification des faits) est la réponse journalistique à la désinformation. En France, plusieurs médias ont développé des rubriques dédiées :</p>
        <ul>
          <li><strong>Les Décodeurs</strong> (Le Monde), <strong>CheckNews</strong> (Libération), <strong>AFP Factuel</strong>, <strong>20 Minutes</strong> Fake-off, <strong>Désintox</strong> (Arte/Libération).</li>
          <li><strong>Méthodes :</strong> vérification des sources primaires, recherche d'image inversée (TinEye, Google Images), analyse des métadonnées (InVid), consultation d'experts, remontée à la source originale.</li>
          <li><strong>Limites :</strong> le fact-checking ne suffit pas à enrayer la désinformation seul — il peut provoquer un « backfire effect » (les démentis renforcent parfois les croyances conspirationnistes), il manque d'audience comparé aux contenus viraux, et il peut être accusé de partialité idéologique.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>L'outil SIFT :</strong> développé par Mike Caulfield, il propose une méthode pratique en 4 étapes pour évaluer une information : <em>Stop</em> (s'arrêter avant de partager), <em>Investigate the source</em> (identifier qui est derrière l'info), <em>Find better coverage</em> (chercher d'autres sources indépendantes), <em>Trace the claims</em> (remonter à la source originale des données ou citations).</p>
        </div>

        <h3>Le cadre juridique et régulateur</h3>
        <p>Les États tentent de réguler la désinformation sans porter atteinte à la liberté d'expression, équilibre difficile :</p>
        <ul>
          <li><strong>Loi anti-fake news (France, 2018) :</strong> permet au juge des référés de faire retirer des « fausses informations » susceptibles d'altérer le résultat d'une élection. Limitée à la période électorale, elle a été peu utilisée.</li>
          <li><strong>Digital Services Act (DSA, UE, 2022) :</strong> impose aux très grandes plateformes (plus de 45 millions d'utilisateurs en Europe) des obligations de modération, de transparence des algorithmes, d'audit des risques systémiques liés à la désinformation.</li>
          <li><strong>Arcom :</strong> peut sanctionner les chaînes audiovisuelles diffusant des contenus manifestement faux ou portant atteinte au pluralisme.</li>
        </ul>

        <h3>L'éducation à l'esprit critique : la réponse de long terme</h3>
        <p>La réponse durable à la désinformation est éducative — former des citoyens capables de penser par eux-mêmes :</p>
        <ul>
          <li><strong>EMI (Éducation aux médias et à l'information) :</strong> intégrée aux programmes scolaires français depuis 2013, visant à former des lecteurs critiques et des producteurs responsables de contenus.</li>
          <li><strong>CLEMI :</strong> Centre pour l'Éducation aux Médias et à l'Information — forme les enseignants et coordonne les actions pédagogiques (Semaine de la presse à l'école, journaux scolaires).</li>
          <li><strong>La pensée critique en classe :</strong> apprendre à distinguer faits et opinions, à identifier les biais, à argumenter de façon structurée — compétences transversales indispensables à l'ère de l'infobésité.</li>
        </ul>
      </div>
    </section>"""

# =====================================================================
# Helper: replace contenu section in content HTML
# =====================================================================
def replace_contenu(html, new_section_html):
    """Replace the section id='contenu' block in the HTML."""
    # Find start of contenu section
    start_marker = '<section class="content-section" id="contenu">'
    start_idx = html.find(start_marker)
    if start_idx == -1:
        # try other variant
        start_marker = '<section class="content-section"  id="contenu">'
        start_idx = html.find(start_marker)
    if start_idx == -1:
        # Try without class
        m = re.search(r'<section[^>]+id="contenu"[^>]*>', html)
        if m:
            start_idx = m.start()
            start_marker = m.group(0)
        else:
            print("WARNING: could not find contenu section")
            return html

    # Find the closing </section> after start
    end_search_start = start_idx + len(start_marker)
    end_idx = html.find('</section>', end_search_start)
    if end_idx == -1:
        print("WARNING: could not find end of contenu section")
        return html
    end_idx += len('</section>')

    # Replace
    return html[:start_idx] + new_section_html + html[end_idx:]

# Apply replacements
updated = 0
for key, new_section in new_contenu.items():
    if key in data['pages']:
        old_content = data['pages'][key]['content']
        new_content = replace_contenu(old_content, new_section)
        if new_content != old_content:
            data['pages'][key]['content'] = new_content
            print(f"Updated {key}: {len(old_content)} -> {len(new_content)} chars")
            updated += 1
        else:
            print(f"WARNING: no change for {key}")
    else:
        print(f"WARNING: key not found: {key}")

print(f"\nTotal updated: {updated}")

# Write back
with open(SRC, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Done. File written.")
