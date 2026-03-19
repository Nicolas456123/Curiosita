#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Enrichit les 6 articles restants de civique.json par ajout de sections."""

import json, re

SRC = "C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/civique.json"

with open(SRC, "r", encoding="utf-8") as f:
    data = json.load(f)

# =====================================================================
# Additional content blocks to APPEND before the closing </div></section>
# of the contenu div.course-content
# =====================================================================

additions = {}

# =====================================================================
# droits/numeriques — add 3 more rich sections
# =====================================================================
additions['droits/numeriques'] = """
        <h3>La cybersurveillance et le droit à la vie privée</h3>
        <p>Les révélations d'Edward Snowden (2013) ont montré l'ampleur de la surveillance numérique étatique (programme PRISM de la NSA américaine, coopération des services de renseignement). En France, la <strong>loi sur le renseignement de 2015</strong> encadre les techniques de surveillance (interceptions, algorithmes de détection de menaces) tout en les légalisant. Le <strong>Conseil constitutionnel</strong> et la <strong>CEDH</strong> ont posé des garde-fous : nécessité, proportionnalité, contrôle indépendant.</p>
        <ul>
          <li><strong>Commission nationale de contrôle des techniques de renseignement (CNCTR) :</strong> autorité administrative indépendante qui émet des avis préalables sur les demandes de surveillance des services de renseignement.</li>
          <li><strong>Cookies et traceurs :</strong> la CNIL a précisé que les sites doivent obtenir un consentement libre, éclairé et positif avant de déposer des cookies non essentiels — et peut sanctionner les contrevenants.</li>
        </ul>

        <h3>Les droits numériques fondamentaux</h3>
        <p>De nouveaux droits numériques sont progressivement reconnus :</p>
        <ul>
          <li><strong>Droit d'accès à Internet :</strong> le Conseil constitutionnel français (2009) a qualifié l'accès à Internet de composante de la liberté d'expression et de communication. La CEDH reconnaît implicitement un tel droit.</li>
          <li><strong>Neutralité du net :</strong> principe selon lequel les opérateurs de réseau doivent traiter tous les flux de données de manière égale, sans discrimination selon leur source, leur destination ou leur contenu. Protégée par le règlement européen de 2015.</li>
          <li><strong>Droit à la déconnexion :</strong> introduit dans le Code du travail en 2017 (loi El Khomri), il permet aux salariés de ne pas répondre aux sollicitations professionnelles en dehors des heures de travail.</li>
          <li><strong>Droit à la portabilité des données :</strong> prévu par le RGPD, il permet à un utilisateur de récupérer ses données personnelles pour les transférer à un autre service.</li>
        </ul>

        <h3>Cyberharcèlement et violences numériques</h3>
        <p>Les violences numériques constituent un phénomène croissant, notamment chez les jeunes :</p>
        <ul>
          <li><strong>Cyberharcèlement :</strong> harcèlement par voie électronique, puni de 2 ans d'emprisonnement et 30 000 € d'amende — aggravé s'il vise un mineur ou cause une incapacité de travail.</li>
          <li><strong>Non-consentement à la diffusion d'images intimes (revenge porn) :</strong> délit introduit en 2016, puni de 2 ans d'emprisonnement et 60 000 € d'amende.</li>
          <li><strong>Usurpation d'identité numérique :</strong> délit pénal prévu par la loi depuis 2011.</li>
          <li><strong>Signalement :</strong> la plateforme PHAROS permet aux internautes de signaler les contenus illicites en ligne.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Chiffre clé :</strong> selon le baromètre du numérique 2023, 18 % des adolescents français déclarent avoir été victimes de cyberharcèlement. Les filles sont plus touchées que les garçons. Le cyberharcèlement peut avoir des conséquences graves sur la santé mentale et, dans les cas extrêmes, conduire au suicide.</p>
        </div>"""

# =====================================================================
# droits/egalite — add 3 rich sections
# =====================================================================
additions['droits/egalite'] = """
        <h3>L'égalité économique et sociale</h3>
        <p>Au-delà de l'égalité formelle devant la loi, l'égalité réelle exige des mesures concrètes pour réduire les inégalités économiques et sociales :</p>
        <ul>
          <li><strong>Le SMIC (Salaire minimum interprofessionnel de croissance) :</strong> créé en 1970, il garantit un revenu minimum à tous les salariés et est réévalué annuellement.</li>
          <li><strong>La progressivité de l'impôt :</strong> les revenus plus élevés sont taxés à des taux plus importants — instrument de redistribution pour réduire les inégalités.</li>
          <li><strong>Les prestations sociales :</strong> RSA, AAH, allocations familiales, aides au logement — filet de sécurité pour les plus vulnérables.</li>
          <li><strong>Le coefficient de Gini :</strong> indicateur d'inégalité allant de 0 (égalité parfaite) à 1 (inégalité totale). La France affiche un Gini de ~0,30 après redistribution, parmi les plus faibles en Europe.</li>
        </ul>

        <h3>L'égalité réelle versus l'égalité formelle</h3>
        <p>La distinction entre <strong>égalité formelle</strong> (même traitement pour tous) et <strong>égalité réelle</strong> (résultats équitables) est au cœur des débats sur la justice sociale :</p>
        <div class="highlight-box">
          <p><strong>Illustration :</strong> « L'égalité formelle, c'est donner à chacun la même taille de chaussures. L'égalité réelle, c'est donner à chacun des chaussures à sa pointure. » Les politiques de <em>discrimination positive</em> (affirmative action) visent à corriger des inégalités historiques par des mesures temporaires favorisant les groupes désavantagés — débat vif en France où le principe d'universalité républicaine s'y oppose.</p>
        </div>

        <h3>Le Défenseur des droits et les institutions de lutte contre les discriminations</h3>
        <p>Plusieurs institutions veillent à l'effectivité de l'égalité en France :</p>
        <ul>
          <li><strong>Le Défenseur des droits :</strong> autorité constitutionnelle indépendante (depuis 2011), saisie gratuitement par tout citoyen victime de discrimination. Il peut émettre des recommandations, proposer des médiations et saisir les tribunaux.</li>
          <li><strong>L'ARJEL / ANJ :</strong> veille à l'égalité dans les jeux d'argent.</li>
          <li><strong>Le réseau européen des organismes de promotion de l'égalité (EQUINET) :</strong> coordonne les autorités nationales de lutte contre les discriminations dans l'UE.</li>
          <li><strong>La Cour européenne des droits de l'homme (CEDH) :</strong> peut condamner un État membre du Conseil de l'Europe pour discrimination contraire à l'article 14 de la CEDH.</li>
        </ul>

        <h3>L'égalité de genre : bilan et défis contemporains</h3>
        <p>Malgré 80 ans de droits formellement égaux, les inégalités de genre persistent en France :</p>
        <ul>
          <li><strong>Écart salarial :</strong> les femmes gagnent en moyenne ~16 % de moins que les hommes à poste et temps de travail comparables (INSEE, 2023). L'écart global atteint ~22 % en incluant les différences de poste et de durée du travail.</li>
          <li><strong>Plafond de verre :</strong> sous-représentation des femmes aux postes de direction (PDG, ministres, grands patrons), malgré la loi Copé-Zimmermann (2011) imposant 40 % de femmes dans les conseils d'administration des grandes entreprises.</li>
          <li><strong>Violences sexistes et sexuelles :</strong> le mouvement #MeToo (2017) a libéré la parole et conduit à des réformes législatives (allongement de la prescription pour les crimes sexuels, nouvelle définition du viol intégrant le consentement).</li>
          <li><strong>L'Index de l'égalité professionnelle :</strong> obligatoire depuis 2019 pour les entreprises de plus de 50 salariés, il mesure et publie l'écart de rémunération entre hommes et femmes.</li>
        </ul>"""

# =====================================================================
# droits/declarations — add 3 rich sections
# =====================================================================
additions['droits/declarations'] = """
        <h3>Les pactes internationaux de 1966</h3>
        <p>La DUDH de 1948 n'étant pas juridiquement contraignante, deux <strong>pactes internationaux</strong> ont été adoptés en 1966 pour lui donner force de droit :</p>
        <ul>
          <li><strong>Pacte international relatif aux droits civils et politiques (PIDCP) :</strong> couvre le droit à la vie, l'interdiction de la torture, la liberté d'expression, les droits des minorités, le droit à un procès équitable. Ratifié par 173 États.</li>
          <li><strong>Pacte international relatif aux droits économiques, sociaux et culturels (PIDESC) :</strong> couvre le droit au travail, à l'éducation, à la santé, à un niveau de vie suffisant. Ratifié par 171 États.</li>
        </ul>
        <p>Ces deux pactes, avec la DUDH, forment la <strong>Charte internationale des droits de l'homme</strong> — socle du droit international des droits de l'homme.</p>

        <h3>Les traités régionaux des droits de l'homme</h3>
        <p>Au niveau régional, plusieurs instruments complémentaires ont été adoptés :</p>
        <ul>
          <li><strong>Convention européenne des droits de l'homme (CEDH, 1950) :</strong> la plus efficace au monde grâce à la Cour EDH, qui peut condamner les États membres du Conseil de l'Europe (47 membres). La France a été condamnée plusieurs centaines de fois, notamment pour délais de procédure excessifs ou conditions de détention.</li>
          <li><strong>Convention américaine relative aux droits de l'homme (1969) :</strong> dans le cadre de l'OEA, avec la Cour interaméricaine des droits de l'homme.</li>
          <li><strong>Charte africaine des droits de l'homme et des peuples (1981) :</strong> particularité africaine — elle inclut des droits des peuples (autodétermination, développement) en plus des droits individuels.</li>
          <li><strong>Charte des droits fondamentaux de l'UE (2000, force contraignante depuis 2009) :</strong> s'impose aux institutions de l'UE et aux États membres lorsqu'ils appliquent le droit de l'Union.</li>
        </ul>

        <h3>Les mécanismes de protection internationale des droits humains</h3>
        <p>Pour rendre les droits effectifs, des mécanismes de contrôle international ont été mis en place :</p>
        <ul>
          <li><strong>Conseil des droits de l'homme de l'ONU (CDH) :</strong> organe politique composé de 47 États membres, il conduit des « examens périodiques universels » de tous les États membres de l'ONU.</li>
          <li><strong>Haut-Commissariat des Nations Unies aux droits de l'homme (HCDH) :</strong> coordonne l'action de l'ONU dans ce domaine, publie des rapports et peut envoyer des missions spéciales.</li>
          <li><strong>La Cour pénale internationale (CPI, 2002) :</strong> juge les individus responsables de génocide, crimes contre l'humanité et crimes de guerre — complémentaire aux juridictions nationales.</li>
          <li><strong>Les procédures spéciales :</strong> rapporteurs spéciaux nommés par l'ONU pour surveiller des droits spécifiques (liberté d'expression, torture, droits des femmes, etc.) ou des situations nationales.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La tension entre souveraineté et droits humains :</strong> les États défendent leur souveraineté nationale face aux ingérences internationales au nom des droits humains. La notion d'ingérence humanitaire, puis de « Responsabilité de protéger » (R2P, adoptée à l'ONU en 2005), tente d'articuler ces deux impératifs : la communauté internationale peut intervenir si un État n'assure pas la protection de sa population contre des violations graves des droits.</p>
        </div>"""

# =====================================================================
# citoyennete/participation — add 3 rich sections
# =====================================================================
additions['citoyennete/participation'] = """
        <h3>La démocratie numérique</h3>
        <p>Le numérique ouvre de nouvelles formes de participation citoyenne :</p>
        <ul>
          <li><strong>Les consultations en ligne :</strong> le gouvernement a lancé plusieurs plateformes de consultation (Grand Débat national de 2019 après la crise des Gilets jaunes, consultation sur la fin de vie en 2023).</li>
          <li><strong>Les pétitions numériques :</strong> le site de l'Assemblée nationale héberge des pétitions officielles ; des plateformes comme Change.org mobilisent des millions de signatures, mais sans valeur juridique contraignante.</li>
          <li><strong>Les réseaux sociaux :</strong> espaces de mobilisation et de débat politique, avec les risques associés (désinformation, bulles de filtre, cyberharcèlement des élus).</li>
          <li><strong>Le vote électronique :</strong> utilisé pour les Français de l'étranger depuis 2003, mais controversé pour les risques de sécurité informatique — la France reste réticente à l'étendre aux élections nationales.</li>
        </ul>

        <h3>L'abstention : une forme de participation ?</h3>
        <p>L'abstention électorale est un phénomène croissant qui interroge la vitalité démocratique :</p>
        <ul>
          <li><strong>Chiffres :</strong> aux législatives de 2022, l'abstention a atteint 53,7 % au second tour — un record historique. Les présidentielles maintiennent une participation plus élevée (~73 %).</li>
          <li><strong>Profil des abstentionnistes :</strong> plus jeunes, moins diplômés, revenus plus faibles — l'abstention reflète souvent un sentiment de déclassement et de distance avec les élites politiques.</li>
          <li><strong>Interprétations :</strong> pour certains, l'abstention est une forme de rejet actif du système (vote protestataire) ; pour d'autres, elle reflète une indifférence ou un désintérêt.</li>
          <li><strong>Remèdes proposés :</strong> vote obligatoire (comme en Belgique ou Australie), vote blanc reconnu, proportionnelle, vote par Internet, abaissement de l'âge du vote à 16 ans.</li>
        </ul>

        <h3>Les nouvelles formes d'engagement politique</h3>
        <p>Si les formes traditionnelles de participation (vote, adhésion à un parti) reculent, de nouvelles modalités d'engagement politique émergent :</p>
        <ul>
          <li><strong>Le militantisme associatif :</strong> nombreux citoyens s'engagent dans des associations de défense de causes (environnement, droits humains, féminisme) plutôt que dans des partis politiques.</li>
          <li><strong>Les mobilisations citoyennes :</strong> Gilets jaunes (2018), grèves pour le climat (Fridays for Future, 2019-2020), mobilisations contre la réforme des retraites (2023).</li>
          <li><strong>La désobéissance civile :</strong> refus délibéré et non violent de respecter une loi jugée injuste, pour attirer l'attention sur une cause (actions des faucheurs volontaires d'OGM, Extinction Rebellion, Les Soulèvements de la Terre).</li>
          <li><strong>Le tirage au sort :</strong> mécanisme de participation démocratique utilisé dans les conventions citoyennes — des citoyens tirés au sort représentent la diversité de la population et délibèrent sur des questions complexes.</li>
        </ul>
        <div class="highlight-box">
          <p><strong>La Convention citoyenne pour le climat (2019-2020) :</strong> 150 citoyens tirés au sort ont formulé 149 propositions pour réduire les émissions de gaz à effet de serre d'au moins 40 % d'ici 2030. Certaines ont été intégrées dans la loi Climat et résilience de 2021. Cette expérience a renouvelé l'intérêt pour les assemblées citoyennes délibératives comme outil de participation démocratique.</p>
        </div>"""

# =====================================================================
# citoyennete/nationalite — add 2-3 rich sections
# =====================================================================
additions['citoyennete/nationalite'] = """
        <h3>La perte et la déchéance de nationalité</h3>
        <p>La nationalité française peut être perdue ou retirée dans des cas précis :</p>
        <ul>
          <li><strong>Perte volontaire :</strong> un Français majeur peut renoncer à la nationalité française (notamment pour acquérir une nationalité étrangère dans un pays n'admettant pas la double nationalité).</li>
          <li><strong>Déchéance de nationalité :</strong> prévue par l'article 25 du Code civil, elle peut frapper un Français naturalisé ayant commis certains crimes (atteinte aux intérêts fondamentaux de l'État, terrorisme, manquements graves aux obligations des fonctionnaires). La proposition d'étendre la déchéance aux binationaux nés français a été très débattue après les attentats de 2015 — elle n'a finalement pas été adoptée.</li>
        </ul>

        <h3>La double nationalité</h3>
        <p>La France admet la <strong>double nationalité</strong> (ou plurinationalité) sans restriction depuis 1973. Un Français peut donc détenir simultanément la nationalité d'un autre pays. Environ 3,3 millions de Français détiendraient ainsi une double nationalité.</p>
        <div class="highlight-box">
          <p><strong>Enjeux pratiques :</strong> la double nationalité pose des questions de service militaire (accord bilatéraux pour éviter la double obligation), d'accès à certains postes sensibles dans la fonction publique ou les armées, et de fiscalité internationale (les États-Unis imposent leurs ressortissants sur leurs revenus mondiaux, quel que soit leur lieu de résidence). La convention de La Haye de 1930 reconnaît le droit pour chaque État de déterminer ses propres règles de nationalité.</p>
        </div>

        <h3>Nationalité et identité nationale : une relation complexe</h3>
        <p>La nationalité est un statut juridique, mais elle s'articule avec des enjeux identitaires complexes :</p>
        <ul>
          <li><strong>La citoyenneté comme appartenance :</strong> au-delà du passeport, être français implique une adhésion à des valeurs (liberté, égalité, fraternité, laïcité) et une participation à la vie de la cité.</li>
          <li><strong>Identité nationale et pluralisme culturel :</strong> le débat sur « l'identité nationale » (relancé par le gouvernement Fillon en 2009) interroge la place des cultures d'origine dans la construction d'une identité française plurielle.</li>
          <li><strong>Les Français de l'étranger :</strong> environ 2,5 millions de Français sont inscrits dans les registres consulaires — une communauté dispersée dans le monde qui conserve ses droits civiques (11 circonscriptions législatives spécifiques depuis 2012).</li>
          <li><strong>La démocratie et la nationalité :</strong> le droit de vote est traditionnellement réservé aux nationaux, mais certains pays accordent le droit de vote local aux résidents étrangers (Pays-Bas, Suède). En France, le débat sur le vote des étrangers non européens aux élections locales reste vif.</li>
        </ul>"""

# =====================================================================
# citoyennete/engagement — add 2-3 rich sections
# =====================================================================
additions['citoyennete/engagement'] = """
        <h3>L'engagement dans la réserve et la sécurité civile</h3>
        <p>L'engagement citoyen s'étend à des formes plus institutionnelles de participation à la sécurité collective :</p>
        <ul>
          <li><strong>La réserve opérationnelle militaire :</strong> des citoyens s'engagent bénévolement ou à faible rémunération aux côtés des forces armées lors de crises ou pour des missions spécifiques.</li>
          <li><strong>La réserve citoyenne :</strong> ouverte à tous, elle permet de contribuer aux missions de la Défense nationale sans engagement opérationnel (sensibilisation, formation, représentation).</li>
          <li><strong>Les sapeurs-pompiers volontaires :</strong> 80 % des effectifs des pompiers en France sont des volontaires (198 000 pompiers volontaires contre 42 000 professionnels). Un modèle de solidarité civique unique en Europe.</li>
          <li><strong>La protection civile :</strong> associations agréées formant aux premiers secours (PSC1) et participant aux dispositifs de gestion des catastrophes.</li>
        </ul>

        <h3>L'engagement citoyen des jeunes</h3>
        <p>Les nouvelles générations développent de nouvelles formes d'engagement, différentes des modèles traditionnels (partis, syndicats) :</p>
        <ul>
          <li><strong>L'engagement environnemental :</strong> Fridays for Future, Youth for Climate — mobilisations mondiales initiées par Greta Thunberg (2018). En France, des milliers de lycéens et étudiants ont manifesté pour le climat.</li>
          <li><strong>Le volontariat international :</strong> programmes de volontariat à l'étranger (VSI — Volontariat de Solidarité Internationale), service civique à l'international.</li>
          <li><strong>L'entrepreneuriat social :</strong> entreprises à mission, coopératives, structures de l'ESS (Économie sociale et solidaire) — créer de la valeur sociale tout en exerçant une activité économique.</li>
          <li><strong>Le hacking civique (civic tech) :</strong> utiliser les compétences numériques pour améliorer les services publics, faciliter la participation citoyenne ou lutter contre la corruption.</li>
        </ul>

        <h3>Mesurer l'engagement : indicateurs et tendances</h3>
        <p>L'engagement citoyen est un phénomène difficile à mesurer mais des indicateurs permettent d'en suivre les tendances :</p>
        <div class="highlight-box">
          <p><strong>En France (données 2023) :</strong> 13 millions de bénévoles associatifs, 150 000 jeunes en service civique par an, 198 000 pompiers volontaires, 1,5 million d'associations actives. Le secteur de l'économie sociale et solidaire (ESS) représente 10 % de l'emploi total. L'engagement associatif est en légère hausse chez les jeunes mais en baisse chez les seniors.</p>
        </div>
        <ul>
          <li><strong>Tendances :</strong> recul des formes d'engagement traditionnelles (syndicats, partis) au profit d'engagements plus souples, intermittents, thématiques et numériques.</li>
          <li><strong>Le « slacktivisme » :</strong> terme péjoratif désignant un engagement superficiel en ligne (liker une page, partager une pétition) sans action concrète — critiqué mais aussi défendu comme premier pas vers un engagement plus profond.</li>
          <li><strong>Les inégalités d'engagement :</strong> le bénévolat et l'engagement associatif restent sur-représentés chez les diplômés et les classes moyennes-supérieures. Les quartiers populaires développent néanmoins des formes d'entraide et de solidarité spécifiques.</li>
        </ul>"""

# =====================================================================
# Helper: append content before the last </div></section> in contenu
# =====================================================================
def append_to_contenu(html, addition):
    """Find contenu section and append content before the closing </div></section>."""
    # Find start of contenu section
    m = re.search(r'<section[^>]+id="contenu"[^>]*>', html)
    if not m:
        print("WARNING: could not find contenu section")
        return html

    start_idx = m.start()

    # Find the end of this section
    end_idx = html.find('</section>', start_idx)
    if end_idx == -1:
        print("WARNING: could not find end of contenu section")
        return html

    # The structure is: ... <div class="course-content"> ... </div>\n    </section>
    # We want to insert before the last </div> before </section>
    section_content = html[start_idx:end_idx]

    # Find the last </div> in this section
    last_div_idx = section_content.rfind('</div>')
    if last_div_idx == -1:
        print("WARNING: could not find closing div in contenu section")
        return html

    insert_point = start_idx + last_div_idx

    return html[:insert_point] + addition + '\n      ' + html[insert_point:]

# Apply additions
updated = 0
for key, addition in additions.items():
    if key in data['pages']:
        old_content = data['pages'][key]['content']
        new_content = append_to_contenu(old_content, addition)
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
