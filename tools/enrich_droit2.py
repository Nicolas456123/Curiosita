import json, re, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

def replace_contenu(content, new_inner_html):
    pattern = r'(<section[^>]*id="contenu"[^>]*>.*?<div class="course-content">)(.*?)(</div>\s*</section>)'
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        print("  WARNING: pattern not found!")
        return content
    return content[:match.start(2)] + new_inner_html + content[match.end(2):]

# ==========================================
# constitutionnel/constitution
# ==========================================
pages['constitutionnel/constitution']['content'] = replace_contenu(pages['constitutionnel/constitution']['content'], """
        <h3>Le bloc de constitutionnalite</h3>
        <p>Le <strong>bloc de constitutionnalite</strong> designe l'ensemble des normes a valeur constitutionnelle. Il a ete progressivement constitue par le Conseil constitutionnel depuis sa decision du 16 juillet 1971 (liberte d'association). Il comprend :</p>
        <ul>
          <li><strong>La Constitution du 4 octobre 1958 :</strong> le texte principal (89 articles organises en 16 titres), comprenant l'organisation des pouvoirs, les rapports entre le Parlement et le gouvernement, les droits et libertes, les institutions de la Republique. Le preambule renvoie expressement aux autres normes constitutionnelles.</li>
          <li><strong>La Declaration des droits de l'homme et du citoyen de 1789 :</strong> les libertes individuelles fondamentales (liberte, propriete, surete, resistance a l'oppression, egalite, presomption d'innocence, liberte de presse).</li>
          <li><strong>Le Preambule de la Constitution de 1946 :</strong> les droits sociaux et economiques (droit au travail, a la protection sociale, a l'education, egalite des droits entre femmes et hommes, droit d'asile).</li>
          <li><strong>La Charte de l'environnement de 2004 :</strong> le droit a vivre dans un environnement equilibre, le principe de precaution, le devoir de prendre part a la preservation de l'environnement.</li>
          <li><strong>Les principes fondamentaux reconnus par les lois de la Republique (PFRLR) :</strong> degages par le Conseil constitutionnel depuis la DDHC (liberte d'association, independance des professeurs d'universite, droits de la defense, liberte d'enseignement, respect des droits acquis des fonctionnaires).</li>
          <li><strong>Les objectifs de valeur constitutionnelle (OVC) :</strong> normes de nature programmatique sans droit subjectif directement invocable (intelligibilite et accessibilite de la loi, possibilite pour tout individu de mener une vie familiale normale).</li>
        </ul>

        <h3>La hierarchie des normes</h3>
        <p>La <strong>pyramide de Kelsen</strong> (Hans Kelsen, 1881-1973) organise l'ordre juridique de maniere hierarchique : chaque norme tire sa validite de la norme superieure. En France :</p>
        <ul>
          <li><strong>Au sommet : le bloc de constitutionnalite</strong> — controle par le Conseil constitutionnel</li>
          <li><strong>Les traites internationaux et le droit de l'Union europeenne</strong> (art. 55 : superiorite sur les lois internes ; art. 88-1 : suprematie du droit de l'UE reconnue)</li>
          <li><strong>Les lois organiques</strong> (completent la Constitution sur des sujets qu'elle designe expressement, art. 46)</li>
          <li><strong>Les lois ordinaires</strong> (votees par le Parlement dans le domaine de l'art. 34 CC)</li>
          <li><strong>Les reglements autonomes</strong> (domaine propre de l'executif, art. 37) et <strong>reglements d'application</strong></li>
          <li><strong>Les actes administratifs individuels</strong> (arretes, decisions)</li>
        </ul>
        <p>Le <strong>controle de constitutionnalite</strong> est assure par le Conseil constitutionnel : controle a priori (art. 61 : avant la promulgation de la loi, saisi par le Président, le Premier ministre, les presidents des assemblees ou 60 parlementaires) et controle a posteriori depuis 2010 (QPC : question prioritaire de constitutionnalite, art. 61-1).</p>

        <h3>La Constitution de 1958 et son histoire</h3>
        <p>La Constitution du 4 octobre 1958, elaboree sous la direction de Michel Debre et inspiree par Charles de Gaulle, repond a la crise de la IVe Republique marquee par l'instabilite ministerielle. Elle instaure un regime semi-presidentiel (ou presidentiel-parlementaire) caracterise par un executif fort. Adoptee par referendum le 28 septembre 1958 (79,25 % de oui), elle a ete revisee 24 fois depuis lors. Les principales revisions : 1962 (election du Président au suffrage universel direct), 1974 (saisine du Conseil constitutionnel par 60 parlementaires), 1992 (Maastricht, citoyennete europeenne), 2000 (quinquennat), 2008 (reforme institutionnelle majeure).</p>
        <p>La procedure de revision est encadree par l'article 89 : initiative du Président (sur proposition du Premier ministre) ou des membres du Parlement. Le texte doit etre vote en termes identiques par les deux assemblees, puis soit approuve par referendum (voie classique), soit adopte par le Congres (reunion des deux chambres) a la majorite des 3/5 des suffrages exprimes. Certaines dispositions sont intangibles : la forme republicaine du gouvernement (art. 89 al. 5) ne peut etre remise en cause.</p>

        <h3>Le Conseil constitutionnel</h3>
        <p>Le <strong>Conseil constitutionnel</strong> (art. 56-63 CC) est la juridiction constitutionnelle francaise. Il est compose de 9 membres nommes pour 9 ans non renouvelables : 3 par le Président de la Republique, 3 par le president de l'Assemblee nationale et 3 par le president du Senat. Les anciens presidents de la Republique en sont membres de droit a vie. Ses missions sont multiples :</p>
        <ul>
          <li>Controle de constitutionnalite des lois (a priori et QPC)</li>
          <li>Controle de la regularite des elections presidentielles et des referendums</li>
          <li>Controle de la regularite des elections legislatives et senatoriales (en tant que juge electoral)</li>
          <li>Avis sur le recours a l'article 16 (pouvoirs exceptionnels du Président)</li>
          <li>Declaration d'empechement du Président de la Republique</li>
        </ul>
        <div class="highlight-box"><p><strong>La Question Prioritaire de Constitutionnalite (QPC) :</strong> introduite par la revision constitutionnelle du 23 juillet 2008 et en vigueur depuis le 1er mars 2010, la QPC permet a tout justiciable, lors d'un proces, de soulever l'inconstitutionnalite d'une disposition legislative applicable au litige. La question est filtree par le Conseil d'Etat ou la Cour de cassation avant renvoi eventuel au Conseil constitutionnel. En cas de declaration d'inconstitutionnalite, la disposition est abrogee. La QPC a considerablement renforce la protection des droits fondamentaux en droit interne.</p></div>

        <h3>La suprematie de la Constitution et ses implications</h3>
        <p>La suprematie de la Constitution implique que toute norme inferieure doit lui etre conforme. Les lois inconstitutionnelles sont annulees (avant promulgation) ou abrogees (via QPC). Le juge administratif (Conseil d'Etat) veille a la legalite des actes administratifs par rapport aux lois et a la Constitution. Le juge judiciaire peut egalement ecarter une loi contraire a un traite international (principe de conventionnalite, pose par la Cour de cassation depuis l'arret Jacques Vabres, 1975, et par le Conseil d'Etat depuis Nicolo, 1989).</p>
        <p>La <strong>suprematie du droit de l'Union europeenne</strong> sur le droit national, y compris constitutionnel selon la CJUE (arret Costa c/ ENEL, 1964), est acceptee par le Conseil d'Etat et la Cour de cassation pour le droit derive, mais limitee par les « identites constitutionnelles nationales » devant le Conseil constitutionnel — point de tension permanent entre ordre juridique national et europeen.</p>
""")

# ==========================================
# constitutionnel/controle
# ==========================================
pages['constitutionnel/controle']['content'] = replace_contenu(pages['constitutionnel/controle']['content'], """
        <h3>Le controle de constitutionnalite : principes generaux</h3>
        <p>Le <strong>controle de constitutionnalite</strong> est le mecanisme par lequel un organe juridictionnel verifie la conformite des lois et des actes gouvernementaux a la Constitution. Il repond a l'idee que la Constitution est la norme supreme et que toute violation doit pouvoir etre sanctionnee. Deux grands modeles existent dans le monde :</p>
        <ul>
          <li><strong>Le modele americain (diffus) :</strong> tout juge, a l'occasion d'un litige, peut ecarter l'application d'une loi inconstitutionnelle. Cree par la Cour Supreme (Marbury v. Madison, 1803). Le controle est concret et decentralise.</li>
          <li><strong>Le modele europeen (concentre, dit « kelsenien ») :</strong> une Cour constitutionnelle speciale detient le monopole du controle, qui peut etre abstrait (sans litige concret) ou actionne par des organes politiques ou des juges. Ce modele, mis en place par Kelsen en Autriche (1920), est celui adopte par la France.</li>
        </ul>

        <h3>Le controle a priori (art. 61 CC)</h3>
        <p>Le <strong>controle a priori</strong> intervient avant la promulgation de la loi, sur saisine du Président de la Republique, du Premier ministre, du president de l'Assemblee nationale, du president du Senat, ou de 60 deputes ou 60 senateurs. Ce controle est <strong>obligatoire</strong> pour les lois organiques et les reglements des assemblees, <strong>facultatif</strong> pour les lois ordinaires et les traites internationaux. Si le Conseil constitutionnel declare une disposition contraire a la Constitution, elle ne peut etre promulguee. La decision a l'autorite absolue de chose jugee : elle s'impose a toutes les juridictions.</p>
        <p>La reforme de 1974 (loi constitutionnelle du 29 octobre) a ouvert la saisine a 60 deputes ou 60 senateurs, permettant a l'opposition parlementaire de saisir le Conseil constitutionnel. Cette reforme a constitutionnalise de nombreux droits fondamentaux par la voie jurisprudentielle : liberte de presse (1984), droit au logement (1995), egalite devant la justice (1977).</p>

        <h3>La Question Prioritaire de Constitutionnalite (QPC)</h3>
        <p>La <strong>QPC</strong>, introduite par la revision constitutionnelle du 23 juillet 2008 (art. 61-1) et en vigueur depuis le 1er mars 2010, est une voie de droit permettant a tout justiciable, lors d'un litige en cours, de soulever l'inconstitutionnalite d'une disposition legislative applicable au litige et attentatoire aux droits et libertes que la Constitution garantit.</p>
        <p>La procedure obeit a un triple filtre :</p>
        <ul>
          <li><strong>Premier filtre :</strong> le juge du fond verifie si la question est « nouvelle » ou « serieuse » (non deja declaree constitutionnelle dans des circonstances identiques par le Conseil constitutionnel).</li>
          <li><strong>Deuxieme filtre :</strong> si le premier filtre est franchi, la question est transmise a la Cour de cassation ou au Conseil d'Etat, qui verifient a nouveau le caractere serieux ou nouveau.</li>
          <li><strong>Troisieme filtre :</strong> si transmise, le Conseil constitutionnel dispose de 3 mois pour statuer. En cas d'inconstitutionnalite, la disposition est abrogee, avec eventuelle modulation des effets dans le temps.</li>
        </ul>
        <div class="highlight-box"><p><strong>Bilan de la QPC :</strong> depuis son instauration, plus de 1000 QPC ont ete transmises au Conseil constitutionnel, dont environ 30 % ont abouti a une declaration d'inconstitutionnalite. Parmi les decisions importantes : l'inconstitutionnalite de la garde a vue (2010), la censure partielle de la loi sur le renseignement (2015), l'abrogation de dispositions du Code du travail, du Code de procedure penale. La QPC a radicalement transforme la culture juridique francaise en donnant aux justiciables un outil direct de protection constitutionnelle.</p></div>

        <h3>Le controle de conventionnalite</h3>
        <p>Distinct du controle de constitutionnalite, le <strong>controle de conventionnalite</strong> verifie la conformite des lois aux traites internationaux ratifies par la France. Depuis l'arret <strong>Cour de cassation, Jacques Vabres (1975)</strong>, les juridictions judiciaires ecartent l'application d'une loi contraire a un traite. Depuis l'arret <strong>Conseil d'Etat, Nicolo (1989)</strong>, les juridictions administratives font de meme. Ce controle s'applique notamment a la Convention europeenne des droits de l'homme (CEDH) et au droit de l'Union europeenne.</p>
        <p>La <strong>Cour europeenne des droits de l'homme</strong> (CEDH, Strasbourg) peut etre saisie par tout ressortissant d'un Etat membre du Conseil de l'Europe apres epuisement des voies de recours internes. Ses arrets sont declaratoires mais contraignants : l'Etat doit modifier sa legislation ou indemniser la victime. La France a ete condamnee de nombreuses fois : en matiere de garde a vue, de detention provisoire, de liberte de la presse, de droits des detenus.</p>

        <h3>Le controle juridictionnel de l'administration</h3>
        <p>Le <strong>Conseil d'Etat</strong>, juridiction administrative supreme, exerce le controle de legalite des actes administratifs. Par le recours pour exces de pouvoir (REP), tout administre peut demander l'annulation d'un acte administratif illegal (incompetence, vice de forme, violation de la loi, detournement de pouvoir). Le juge administratif verifie egalement le respect des droits fondamentaux proteges par la Constitution et les conventions internationales.</p>
        <p>Le <strong>Defenseurt des droits</strong> (anciennement Mediateur de la Republique, reconnu constitutionnellement en 2008, art. 71-1 CC) peut etre saisi par tout citoyen s'estimant lese par le fonctionnement d'une administration ou d'une personne prive assurant une mission de service public. Il formule des recommandations non contraignantes mais dispose d'une forte autorite morale.</p>
""")

# ==========================================
# constitutionnel/droits
# ==========================================
pages['constitutionnel/droits']['content'] = replace_contenu(pages['constitutionnel/droits']['content'], """
        <h3>Les generations de droits fondamentaux</h3>
        <p>La theorie des <strong>trois generations de droits</strong> (Karel Vasak, 1977) classe les droits fondamentaux selon leur histoire et leur nature :</p>
        <ul>
          <li><strong>Premiere generation — droits civils et politiques :</strong> droits negatifs (libertes contre l'Etat) issus des revolutions americaine et francaise. Liberte individuelle, propriete, surete, egalite devant la loi, liberte d'expression, droit de vote, acces a la justice. Consacres par la DDHC de 1789 et le Pacte international des droits civils et politiques (1966).</li>
          <li><strong>Deuxieme generation — droits economiques, sociaux et culturels :</strong> droits positifs (creances sur l'Etat) issus des mouvements ouvriers et des Etats-providence. Droit au travail, a la securite sociale, a l'education, a la sante, au logement. Consacres par le Preambule de 1946 et le Pacte international des droits economiques, sociaux et culturels (1966).</li>
          <li><strong>Troisieme generation — droits collectifs et de solidarite :</strong> droits emergeants relatifs a la paix, au developpement, a un environnement sain, au patrimoine commun de l'humanite. Consacres notamment par la Charte de l'environnement de 2004 et les instruments internationaux recents.</li>
        </ul>

        <h3>Les droits fondamentaux en droit constitutionnel francais</h3>
        <p>En France, les droits fondamentaux sont proteges par le <strong>bloc de constitutionnalite</strong> (DDHC 1789, Preambule 1946, Charte de l'environnement 2004) et par les engagements internationaux (CEDH, Charte des droits fondamentaux de l'UE). Parmi les plus importants :</p>
        <ul>
          <li><strong>La liberte individuelle (art. 66 CC) :</strong> nul ne peut etre arbitrairement detenu. L'autorite judiciaire est gardienne de la liberte individuelle. La garde a vue, la detention provisoire, les hospitalisations sous contrainte sont strictement encadrees.</li>
          <li><strong>L'egalite (art. 1er CC, art. 1er DDHC) :</strong> « La loi est la meme pour tous, soit qu'elle protege, soit qu'elle punisse. » L'egalite est formelle (pas de discrimination juridique) mais aussi materielle (mesures d'action positive pour compenser des inegalites de fait). L'egalite femmes-hommes est un principe constitutionnel depuis 2008 (art. 1er al. 2).</li>
          <li><strong>La liberte d'expression et de la presse (loi du 29 juillet 1881, art. 11 DDHC) :</strong> fondamentale en democratie. Elle connait des limites : abus (diffamation, injure, incitation a la haine) sont reprimees penalement.</li>
          <li><strong>Le principe de legalite des peines (art. 8 DDHC) :</strong> nul ne peut etre puni qu'en vertu d'une loi anterieure. Fonde les regles de non-retroactivite de la loi penale plus severe et de retroactivite de la loi penale plus douce.</li>
          <li><strong>La presomption d'innocence (art. 9 DDHC) :</strong> tout accuse est presume innocent jusqu'a ce que sa culpabilite soit etablie. Elle encadre la communication judiciaire et fonde les regles sur la detention provisoire.</li>
        </ul>

        <h3>La protection europeenne des droits fondamentaux</h3>
        <p>La <strong>Convention europeenne des droits de l'homme</strong> (CEDH, Conseil de l'Europe, 1950, ratifiee par la France en 1974) garantit un socle minimal de droits fondamentaux dans les 46 Etats membres. Les plus importants : art. 2 (droit a la vie), art. 3 (interdiction de la torture et des traitements inhumains), art. 5 (droit a la liberte et a la surete), art. 6 (droit a un proces equitable), art. 8 (droit au respect de la vie privee et familiale), art. 10 (liberte d'expression), art. 11 (liberte d'association).</p>
        <p>La <strong>Cour europeenne des droits de l'homme</strong> (CEDH, Strasbourg) peut etre saisie apres epuisement des voies de recours internes. Ses arrets sont contraignants et peuvent obliger l'Etat a modifier sa legislation, indemniser la victime ou prendre des mesures generales. La France a ete condamnee en matiere de droit a un proces equitable, de liberte de la presse, de conditions de detention, de droit au respect de la vie privee (ecoutes, données).</p>
        <div class="highlight-box"><p><strong>La Charte des droits fondamentaux de l'Union europeenne (2000, force contraignante en 2009) :</strong> reprend les droits de la CEDH et y ajoute des droits propres au contexte de l'UE (interdiction du clonage reproductif, transparence des institutions, acces aux documents, non-discrimination fondee sur le handicap, la religion, l'age, l'orientation sexuelle). Elle s'applique aux Etats membres quand ils mettent en oeuvre le droit de l'UE.</p></div>

        <h3>Les restrictions aux droits fondamentaux</h3>
        <p>Les droits fondamentaux ne sont pas absolus. Ils peuvent etre limites a condition que les restrictions soient <strong>prevues par la loi</strong>, <strong>necessaires dans une societe democratique</strong> et <strong>proportionnees</strong> au but poursuivi (criteres de la CEDH, art. 8-11). Le Conseil constitutionnel controle ce principe de proportionnalite : une restriction injustifiee ou disproportionnee est inconstitutionnelle.</p>
        <p>L'<strong>etat d'urgence</strong> permet au gouvernement de prendre des mesures derogatoires au droit commun (perquisitions administratives, assignations a residence, interdictions de manifestations) sans controle judiciaire prealable. En France, son cadre legal (loi du 3 avril 1955 modifiee) a ete plusieurs fois active : apres les attentats de novembre 2015 et lors de la crise sanitaire COVID-19 (etat d'urgence sanitaire, loi du 23 mars 2020). Le controle juridictionnel a posteriori et le controle parlementaire encadrent ces pouvoirs exceptionnels.</p>
""")

# ==========================================
# constitutionnel/separation
# ==========================================
pages['constitutionnel/separation']['content'] = replace_contenu(pages['constitutionnel/separation']['content'], """
        <h3>Le principe de separation des pouvoirs</h3>
        <p>La <strong>separation des pouvoirs</strong> est le principe fondateur de l'Etat de droit democratique theorise par Montesquieu dans L'Esprit des lois (1748) : « Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrete le pouvoir. » Montesquieu distingue trois fonctions de l'Etat : legisler, executer les lois, juger. La confusion de ces fonctions entre les memes mains caracterise la tyrannie.</p>
        <p>Deux modeles de separation se distinguent :</p>
        <ul>
          <li><strong>La separation rigide (regime presidentiel, USA) :</strong> les trois pouvoirs sont strictement separes, sans interdependance organique. Le President n'a pas d'initiative legislative directe, le Congres ne peut pas renverser le gouvernement.</li>
          <li><strong>La separation souple (regime parlementaire) :</strong> les pouvoirs sont distincts mais interdependants. Le gouvernement est responsable devant le Parlement (motion de censure) et peut dissoudre le Parlement. La France de la Ve Republique est un regime semi-presidentiel combinant les deux logiques.</li>
        </ul>

        <h3>Le pouvoir executif sous la Ve Republique</h3>
        <p>L'executif est <strong>bicephale</strong> : il est partage entre le Président de la Republique et le Premier ministre. Le <strong>Président de la Republique</strong> est elu au suffrage universel direct pour 5 ans (depuis la revision de 2000 qui a raccourci le mandat de 7 a 5 ans). Il est chef de l'Etat, garant de l'independance nationale et du respect de la Constitution (art. 5). Ses pouvoirs propres (sans contreseing) : nomination du Premier ministre, dissolution de l'Assemblee nationale (art. 12), referendum legislatif (art. 11), pouvoirs exceptionnels (art. 16), saisine du Conseil constitutionnel, saisine du Conseil superieur de la magistrature, message aux assemblees. Ses pouvoirs partages (soumis au contreseing ministeriel) : ordonnances, decrets, nominations aux emplois civils et militaires.</p>
        <p>Le <strong>Premier ministre</strong> dirige l'action du gouvernement, assure l'execution des lois et exerce le pouvoir reglementaire general (art. 21). En periode de <strong>cohabitation</strong> (President et majorite parlementaire de partis opposes), le Premier ministre recupere l'essentiel du pouvoir executif tandis que le President se cantonne a ses pouvoirs propres. Trois periodes de cohabitation ont eu lieu : 1986-1988 (Mitterrand/Chirac), 1993-1995 (Mitterrand/Balladur), 1997-2002 (Chirac/Jospin).</p>

        <h3>Le pouvoir legislatif</h3>
        <p>Le Parlement est <strong>bicameral</strong> : il comprend l'Assemblee nationale (577 deputes, election au scrutin majoritaire uninominal a deux tours, mandat de 5 ans) et le Senat (348 senateurs, election au suffrage universel indirect par les grands electeurs, mandat de 6 ans, renouvele par moitie tous les 3 ans). Le Parlement vote la loi (art. 24 CC), consent a l'impot (loi de finances), controle l'action du gouvernement (questions, commissions d'enquete, motion de censure).</p>
        <p>Le domaine de la loi est delimite par l'article 34 (droits civiques, nationalite, crimes et delits, assiette de l'impot, regles du droit prive, principes fondamentaux du droit du travail, etc.) ; les matieres non reservees a la loi relevent du pouvoir reglementaire (art. 37). Cette « rationalisation du parlementarisme » caracteristique de la Ve Republique encadre strictement le travail legislatif. Le gouvernement dispose du <strong>monopole du programme legislatif</strong> : il fixe l'ordre du jour des assemblees (sauf une semaine sur quatre reservee a l'opposition), peut mettre en jeu sa responsabilite sur un texte (art. 49-3), utiliser la procedure acceleree ou le vote bloque.</p>

        <h3>L'autorite judiciaire et l'independance de la justice</h3>
        <p>La Constitution de 1958 parle d'« autorite judiciaire » (art. 64-66) et non de « pouvoir judiciaire », traduisant une mefiance historique de la tradition republicaine francaise envers le gouvernement des juges. L'article 64 garantit l'independance de l'autorite judiciaire, dont le Président de la Republique est le garant avec l'assistance du <strong>Conseil superieur de la magistrature</strong> (CSM). Le CSM emet des avis contraignants sur la nomination des magistrats du siege (inamovibles) et des propositions pour les magistrats du parquet (procureurs).</p>
        <p>La France connaît une <strong>dualite de juridictions</strong> propre a son systeme :</p>
        <ul>
          <li><strong>L'ordre judiciaire</strong> (juridictions civiles et penales) coiffe par la Cour de cassation, chargee de l'uniformite de l'interpretation du droit prive et penal.</li>
          <li><strong>L'ordre administratif</strong> (jurisdictions administratives) coiffe par le Conseil d'Etat, chargee du contentieux de l'administration.</li>
        </ul>
        <p>Le <strong>Tribunal des conflits</strong> regle les conflits de competence entre les deux ordres. Le <strong>Conseil constitutionnel</strong> n'est pas formellement une juridiction mais exerce une fonction juridictionnelle. Depuis 2016, la Cour de justice de la Republique (CJR) juge les membres du gouvernement pour les crimes et delits commis dans l'exercice de leurs fonctions.</p>
        <div class="highlight-box"><p><strong>Les mecanismes de responsabilite du gouvernement :</strong> l'article 49 CC est le noeud de la responsabilite gouvernementale. L'art. 49 al. 1 permet au Premier ministre d'engager la responsabilite du gouvernement sur son programme. L'art. 49 al. 2 permet a l'Assemblee nationale d'adopter une motion de censure (majorite absolue des membres). L'art. 49 al. 3, tres utilise, permet au gouvernement d'engager sa responsabilite sur un texte financier ou un projet de loi par session : le texte est adopte sans vote sauf si une motion de censure est deposee et adoptee dans les 24 heures.</p></div>
""")

# ==========================================
# constitutionnel/ve-republique
# ==========================================
pages['constitutionnel/ve-republique']['content'] = replace_contenu(pages['constitutionnel/ve-republique']['content'], """
        <h3>La naissance de la Ve Republique</h3>
        <p>La <strong>Ve Republique</strong> est fondee par la Constitution du 4 octobre 1958, adoptee a la suite de la crise algérienne et de l'instabilite de la IVe Republique (24 gouvernements en 12 ans). Rappele au pouvoir le 1er juin 1958, Charles de Gaulle confie la redaction de la nouvelle Constitution a Michel Debre et a une equipe de juristes. Adoptee par referendum le 28 septembre 1958 (79,25 % de oui), la Constitution rompt avec le parlementarisme classique en renforçant considerablement l'executif, notamment le Président de la Republique.</p>
        <p>La constitutionnalisation de l'election presidentielle au suffrage universel direct (revision de 1962, obtenue par referendum malgre l'opposition du Parlement) renforce encore la legitimite et les pouvoirs du Président. Ce passage symbolise le basculement vers un regime que certains qualifient de « monarchie republicaine ».</p>

        <h3>Les institutions de la Ve Republique</h3>
        <p>La Ve Republique repose sur un equilibre institutionnel entre plusieurs acteurs :</p>
        <ul>
          <li><strong>Le Président de la Republique :</strong> elu pour 5 ans au suffrage universel direct (depuis 2000). Chef des armees, arbitre institutionnel, garant de l'independance nationale. Ses pouvoirs propres (sans contreseing) lui conferent une position centrale : nomination du Premier ministre, dissolution de l'Assemblee, art. 16, referendum, saisine du Conseil constitutionnel. En pratique, il dirige la politique nationale lorsque sa majorite coincide avec celle de l'Assemblee.</li>
          <li><strong>Le gouvernement :</strong> dirige par le Premier ministre (art. 20-21), il determine et conduit la politique de la Nation, dispose de l'administration et des forces armees. Il est responsable devant l'Assemblee nationale (art. 49).</li>
          <li><strong>Le Parlement :</strong> Assemblee nationale (577 deputes, 5 ans) et Senat (348 senateurs, 6 ans par moitie). Vote la loi, controle le gouvernement, ratifie les traites. L'Assemblee a le dernier mot legislatif.</li>
          <li><strong>Le Conseil constitutionnel :</strong> gardien de la Constitution, juge electoral, garant des droits fondamentaux via la QPC.</li>
          <li><strong>Le Conseil d'Etat :</strong> juridiction administrative supreme et conseiller juridique du gouvernement (avis obligatoire sur les projets de loi et d'ordonnance).</li>
          <li><strong>La Cour de cassation :</strong> juridiction supreme de l'ordre judiciaire, assure l'uniformite de l'interpretation du droit.</li>
        </ul>

        <h3>L'evolution de la Ve Republique</h3>
        <p>La Ve Republique a ete profondement transformee par les revisions constitutionnelles successives :</p>
        <ul>
          <li><strong>1962 :</strong> election presidentielle au suffrage universel direct — basculement vers le presidentalisme.</li>
          <li><strong>1974 :</strong> saisine du Conseil constitutionnel elargie a 60 parlementaires — renforcement de la protection des droits fondamentaux.</li>
          <li><strong>1992 :</strong> traite de Maastricht — integration europeenne dans la Constitution (art. 88-1 a 88-4).</li>
          <li><strong>2000 :</strong> quinquennat — reduction du mandat presidentiel de 7 a 5 ans par referendum. Limite les periodes de cohabitation.</li>
          <li><strong>2008 :</strong> reforme constitutionnelle majeure (loi constitutionnelle du 23 juillet) — creation de la QPC, renforcement des droits du Parlement (ordre du jour partage, resolutions, ratification des nominations presidentielles importantes), creation du Defenseur des droits, limitation du cumul des mandats dans le temps.</li>
        </ul>
        <div class="highlight-box"><p><strong>La pratique presidentielle du pouvoir :</strong> la doctrine qualifie souvent le regime de la Ve Republique de « presidentaliste » — le President exerce un pouvoir bien superieur a ce que preoit la Constitution grace a sa legitimite populaire et a sa maitrise du fait majoritaire. Le Parlement, rationalize par la Constitution (art. 34, 44, 49-3), a longtemps ete reduit a un role de chambre d'enregistrement. La reforme de 2008 a reequilibre les pouvoirs en renforçant sensiblement les droits du Parlement et de l'opposition.</p></div>

        <h3>Les defis contemporains de la Ve Republique</h3>
        <p>La Ve Republique fait face a plusieurs defis institutionnels majeurs :</p>
        <ul>
          <li><strong>La crise de la representation :</strong> abstention croissante (plus de 50 % aux legislatives de 2022), desaffection vis-a-vis des partis traditionnels, montee des mouvements protestataires (Gilets jaunes, 2018-2019). Des propositions de reforme institutionnelle emergent : proportionnelle, conventions citoyennes, referendum d'initiative citoyenne.</li>
          <li><strong>Le role du Parlement :</strong> malgre les reformes de 2008, le Parlement reste subordonne a l'executif. La majorite relative issue des legislatives de 2022 a revarise cette question : sans majorite absolue, le gouvernement a du negocier et recourir massivement a l'art. 49-3.</li>
          <li><strong>La decentralisation :</strong> les lois de decentralisation (1982, 2003) ont transfere des competences aux collectivites territoriales (regions, departements, communes). La revision de 2003 (art. 1er : « France... organisation decentralisee ») a constitutionnalise ce mouvement.</li>
          <li><strong>L'integration europeenne :</strong> la primauté du droit europeen limite progressivement la souverainete nationale. Les relations entre le Conseil constitutionnel et la CJUE (Cour de justice de l'Union europeenne) restent une tension permanente entre ordre constitutionnel national et ordre juridique europeen.</li>
        </ul>

        <h3>Le systeme electoral francais</h3>
        <p>La France utilise plusieurs modes de scrutin selon les elections :</p>
        <ul>
          <li><strong>Scrutin majoritaire uninominal a deux tours :</strong> elections presidentielles (un seul elu au niveau national, seuls les deux premiers du premier tour s'affrontent au second) et legislatives (candidats ayant obtenu 12,5 % des inscrits au premier tour participent au second).</li>
          <li><strong>Scrutin mixte :</strong> europeennes (proportionnel de liste), regionales (systeme mixte majorite/proportionnel), municipales (proportionnel de liste).</li>
          <li><strong>Suffrage universel indirect :</strong> elections senatoriales (grands electeurs : deputes, conseillers regionaux, departementaux, maires, conseillers municipaux).</li>
        </ul>
        <p>Le systeme majoritaire a deux tours favorise la formation de coalitions (ni proportionnel pur ni bipartisme strictement anglophone) et le dialogue des partis entre les deux tours. Il tend a sous-representer les forces politiques n'appartenant pas aux grands blocs, ce qui alimente le debat sur l'introduction d'une dose de proportionnelle.</p>
""")

# Check lengths
for key in ['constitutionnel/constitution', 'constitutionnel/controle', 'constitutionnel/droits', 'constitutionnel/separation', 'constitutionnel/ve-republique']:
    print(f"{key}: {len(pages[key]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK - batch 2 (constitutionnel)")
