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
# penal/infractions
# ==========================================
pages['penal/infractions']['content'] = replace_contenu(pages['penal/infractions']['content'], """
        <h3>La classification tripartite des infractions</h3>
        <p>Le Code penal francais classe les infractions en trois categories selon leur gravite, determinant le tribunal competent et les peines encourues (art. 111-1 CP) :</p>
        <ul>
          <li><strong>Les crimes :</strong> les infractions les plus graves. Exemples : meurtre (15 ans de reclusion), viol (15 ans, 20 ans avec circonstances aggravantes), genocide (reclusion criminelle a perpetuite), crime de guerre. Juges par la cour d'assises (magistrats professionnels et jury de citoyens). Les peines criminelles vont de 15 ans a la reclusion a perpetuite. Les crimes se prescrivent en 20 ans (30 ans pour certains crimes graves commis sur mineurs).</li>
          <li><strong>Les delits :</strong> infractions de gravite intermediaire. Exemples : vol simple (3 ans, 45 000 euros), escroquerie (5 ans), abus de confiance (3 ans), conduite en etat d'ivresse (2 ans), violence ayant entraine une ITT de plus de 8 jours (3 ans). Juges par le tribunal correctionnel. Peines : emprisonnement jusqu'a 10 ans, amendes, peines alternatives (travail d'interet general, jours-amende, stage de citoyennete). Prescription : 6 ans (20 ans pour certains delits graves sur mineurs).</li>
          <li><strong>Les contraventions :</strong> infractions les moins graves. Cinq classes, de la 1re (38 euros max) a la 5e (1 500 euros max, 3 000 euros en recidive). Exemples : infraction au code de la route, tapage nocturne, mendicite agressive. Jugees par le tribunal de police. Prescription : 1 an.</li>
        </ul>
        <div class="highlight-box"><p><strong>La « correctionnalisation » :</strong> en pratique, les parquets retiennent souvent des qualifications correctionnelles pour des faits pouvant caracteriser un crime, afin d'eviter la lourdeur et la lenteur de la procedure criminelle. Cette pratique — formellement interdite mais tolere — est critiquee : elle prive les victimes du jury populaire et conduit a des peines plus legeres que celles qu'aurait prononcees une cour d'assises.</p></div>

        <h3>Les elements constitutifs de l'infraction</h3>
        <p>Toute infraction penale suppose la reunion de plusieurs elements constitutifs :</p>
        <ul>
          <li><strong>L'element legal :</strong> « Nul ne peut etre puni pour un crime ou un delit dont les elements ne sont pas definis par la loi, ou pour une contravention dont les elements ne sont pas definis par la loi ou le reglement » (art. 111-3 CP — principe de legalite). La loi penale est d'interpretation stricte (art. 111-4) : le juge ne peut pas creer d'infractions par analogie.</li>
          <li><strong>L'element materiel :</strong> la commission ou la tentative de l'acte incrimine. L'infraction peut etre de commission (acte positif : tuer) ou d'omission (abstention : non-assistance a personne en danger, art. 223-6 CP). La tentative est punissable pour les crimes et, si la loi le prevoit expressement, pour les delits (art. 121-4 CP).</li>
          <li><strong>L'element moral (ou intentionnel) :</strong> la culpabilite penale. L'article 121-3 CP distingue les infractions <strong>intentionnelles</strong> (volonte de commettre l'acte et d'en produire le resultat — dol general et dol special), <strong>par imprudence</strong> (faute d'imprudence, de negligence, de mise en danger deliberee) et les <strong>contraventions</strong> (imputabilite suffisante, sans exigence d'intention).</li>
        </ul>

        <h3>La responsabilite penale : auteurs et complices</h3>
        <p>La responsabilite penale peut etre engagee a titre d'<strong>auteur</strong> (art. 121-4 : celui qui commet les faits constitutifs de l'infraction ou tente de les commettre), de <strong>coauteur</strong> (participation conjointe a la commission) ou de <strong>complice</strong> (art. 121-7 : celui qui, par aide ou assistance, facilite la preparation ou la consommation de l'infraction ; ou celui qui provoque a l'infraction ou en donne des instructions). Le complice est puni comme l'auteur principal.</p>
        <p>Depuis 1994, les <strong>personnes morales</strong> (societes, associations, collectivites) peuvent etre penalement responsables des infractions commises pour leur compte par leurs organes ou representants (art. 121-2 CP). Les peines applicables aux personnes morales : amende (quintuplée par rapport a celle prevue pour les personnes physiques), dissolution, interdiction d'exercer, fermeture d'etablissement, exclusion des marches publics. Cette disposition a ete tres utilisee dans le domaine de la securite des travailleurs et des atteintes a l'environnement.</p>

        <h3>Les causes d'irresponsabilite et d'attenuation</h3>
        <p>Certaines circonstances peuvent supprimer ou attenuer la responsabilite penale :</p>
        <ul>
          <li><strong>Le trouble mental (art. 122-1 CP) :</strong> l'auteur atteint au moment des faits d'un trouble mental ayant aboli son discernement est irresponsable penalement. S'il n'a qu'altere son discernement, la peine peut etre reduite d'un tiers. L'irresponsabilite penale n'exclut pas la responsabilite civile.</li>
          <li><strong>La contrainte (art. 122-2) :</strong> physique (resistible) ou morale (force majeure). L'auteur n'etait pas libre d'agir autrement.</li>
          <li><strong>L'erreur de droit (art. 122-3) :</strong> si l'auteur justifie avoir cru, par une erreur sur le droit qu'il n'etait pas en mesure d'eviter, que son acte etait legitime.</li>
          <li><strong>La legitime defense (art. 122-5) :</strong> est justifie l'acte commande par la necessite de la defense de soi-meme ou d'autrui face a une atteinte injustifiee, a condition que la defense soit simultanee, necessaire et proportionnee a l'attaque. La presomption de legitime defense a ete elargie par la loi de 2017 pour les policiers et gendarmes (controversee).</li>
          <li><strong>L'etat de necessite (art. 122-7) :</strong> commettre un acte normalement interdit pour eviter un danger actuel ou imminent, si les moyens employes sont proportionnes a la gravite de la menace. Exemple : voler de la nourriture pour eviter de mourir de faim.</li>
          <li><strong>La minorite (art. 122-8) :</strong> les mineurs sont penalement responsables mais font l'objet d'une procedure speciale (tribunal pour enfants) avec des mesures educatives prioritaires sur les sanctions repressives.</li>
        </ul>

        <h3>Les circonstances aggravantes et attenuantes</h3>
        <p>Le legislateur prevoit de nombreuses <strong>circonstances aggravantes</strong> permettant au juge d'augmenter les peines : premeditaiton (element constitutif du meurtre aggrave), recidive (legal recidivism : doublement du quantum de la peine pour les crimes en recidive), vulnerabilite de la victime (age, handicap, grossesse), motif discriminatoire (racisme, homophobie), pluralite d'auteurs, utilisation d'une arme, abus d'autorite.</p>
        <p>Les <strong>circonstances attenuantes</strong> ne sont plus codifiees comme telles mais le juge tient compte de la personnalite du prevenu, de sa situation, de ses efforts de reinsertion, du contexte de l'infraction pour individualiser la peine (principe d'individualisation, art. 132-24 CP). Le sursis, le sursis avec mise a l'epreuve (et son successeur le sursis probatoire depuis 2020), la semi-liberte, le placement sous surveillance electronique (bracelet) sont des modulations de l'execution de la peine.</p>
""")

# ==========================================
# penal/crimes
# ==========================================
pages['penal/crimes']['content'] = replace_contenu(pages['penal/crimes']['content'], """
        <h3>Les crimes contre les personnes</h3>
        <p>Le Livre II du Code penal est consacre aux crimes et delits contre les personnes. Les atteintes a la vie et a l'integrite physique en constituent le coeur :</p>
        <ul>
          <li><strong>Le meurtre (art. 221-1 CP) :</strong> le fait de donner volontairement la mort a autrui — 15 ans de reclusion criminelle. La <strong>premeditaton</strong> le qualifie en <strong>assassinat</strong> (art. 221-3 : reclusion a perpetuite). Les circonstances aggravantes du meurtre : victime mineure, qualite de fonctionnaire, motif raciste, commis en bande organisee — peines portees a la perpetuite.</li>
          <li><strong>Les violences (art. 222-1 et suivants) :</strong> les actes de violence sont classes selon leurs consequences : actes de torture et barbarie (15 ans), violences ayant entraine la mort sans intention de la donner (15 ans), violences avec mutilation ou infirmite permanente (10 ans), violences ayant entraine une ITT de plus de 8 jours (3 ans), violences legeres (contravention de 5e classe si ITT inferieure a 8 jours).</li>
          <li><strong>Le viol et les agressions sexuelles (art. 222-22 et suivants) :</strong> le viol est tout acte de penetration sexuelle de quelque nature qu'il soit commis sur la personne d'autrui ou sur la personne de l'auteur par violence, contrainte, menace ou surprise — 15 ans. Les lois recentes (2018, 2021) ont renforce la protection contre les violences sexuelles et sexistes (notion de consentement, prescription allongee, harcèlement en ligne).</li>
        </ul>
        <div class="highlight-box"><p><strong>Les feminicides :</strong> la France, confrontee a la problematique des violences conjugales (en 2022, 118 femmes tuees par leur conjoint ou ex-conjoint), a renforce son arsenal juridique : loi du 28 decembre 2019 (bracelet anti-rapprochement), Grenelle contre les violences conjugales (2019), renforcement des ordonnances de protection, creation de la mention « feminicide » dans les statistiques officielles, bien que le terme ne soit pas une qualification penale specifique.</p></div>

        <h3>Les crimes contre la nation et l'humanite</h3>
        <p>Le Code penal classe en Livre IV les <strong>crimes contre la nation, l'Etat et la paix publique</strong> et integre, depuis la loi du 2 janvier 1995, les <strong>crimes contre l'humanite</strong> (imprescriptibles, art. 211-1 et suivants) :</p>
        <ul>
          <li><strong>Le genocide (art. 211-1 CP) :</strong> le fait de commettre des actes portant atteinte volontairement a la vie d'un groupe determine de personnes dans l'intention de detruire ce groupe en tout ou en partie — reclusion criminelle a perpetuite. S'applique aux groupes determines par leur nationalite, ethnicite, race ou religion.</li>
          <li><strong>Les autres crimes contre l'humanite (art. 212-1) :</strong> deportation, esclavage, disparition forcee, torture, persecutions, apartheid, commis dans le cadre d'une attaque generalisee ou systematique contre une population civile.</li>
          <li><strong>Les crimes de guerre (art. 461-1 et suivants, introduits en 2010) :</strong> infractions graves aux Conventions de Geneve et aux lois et coutumes de la guerre commises en lien avec un conflit arme.</li>
          <li><strong>La trahison et l'espionnage (art. 411-1 et suivants) :</strong> actes portant atteinte aux interets fondamentaux de la nation — perpetuite. Inclut la livraison d'informations a une puissance etrangere, la desorganisation des forces armees, l'intelligence avec une puissance ennemie.</li>
        </ul>

        <h3>Les crimes contre les biens</h3>
        <p>Les atteintes aux biens recouvrent un large eventail d'infractions :</p>
        <ul>
          <li><strong>Le vol (art. 311-1 CP) :</strong> la soustraction frauduleuse de la chose d'autrui — 3 ans (delit). Les circonstances aggravantes le qualifient en crime : vol avec violences ayant entraine la mort (30 ans), avec arme (20 ans), en reunion organisee.</li>
          <li><strong>L'extorsion (art. 312-1) :</strong> le fait d'obtenir par violence, menace ou contrainte une signature, un engagement ou des fonds — 7 ans. Le racket en est la forme courante chez les mineurs.</li>
          <li><strong>L'escroquerie (art. 313-1) :</strong> le fait, par manoeuvres frauduleuses, de tromper une personne pour la determiner a remettre des fonds ou a fournir un service — 5 ans. La fraude en ligne (phishing, fausse boutique) constitue une aggravante.</li>
          <li><strong>L'abus de confiance (art. 314-1) :</strong> le fait de detourner des fonds, valeurs ou biens remis a titre precaire (mandat, depot, pret) — 3 ans. Frequent dans les detournements par des employes ou des dirigeants de societe.</li>
          <li><strong>Le recel (art. 321-1) :</strong> le fait de dissimuler, detenir ou transmettre une chose en sachant qu'elle provient d'un crime ou delit — 5 ans. L'acheteur d'un bien vole peut etre condamne pour recel.</li>
        </ul>

        <h3>La recidive et la politique criminelle</h3>
        <p>La <strong>recidive legale</strong> (art. 132-8 et suivants CP) est la commission d'une nouvelle infraction apres une condamnation definitive pour une infraction precedente. Elle entraine le doublement des peines encourues pour les crimes et certains delits. La recidive presuppose une identite ou similitude d'infractions (recidive speciale) ou, pour certaines infractions graves, s'applique quelle que soit la nature de la nouvelle infraction (recidive generale).</p>
        <p>La politique criminelle francaise cherche un equilibre entre la <strong>prevention</strong> (programmes sociaux, traitement des addictions, accompagnement socio-educatif), la <strong>repression</strong> (peines d'emprisonnement ferme, surete renforcee pour les recidivistes) et la <strong>reinsertion</strong> (aménagement des peines, travail en prison, preparation a la sortie). Le taux de recidive en France (55 % de recidive au sens large dans les 5 ans suivant la liberation) illustre la difficulte de cet equilibre. Le debat politique oscille entre approches securitaires (peines planchers, supprimees en 2014) et approches therapeutiques et educatives.</p>
""")

# ==========================================
# penal/procedure
# ==========================================
pages['penal/procedure']['content'] = replace_contenu(pages['penal/procedure']['content'], """
        <h3>Les phases de la procedure penale</h3>
        <p>La procedure penale francaise s'articule en trois grandes phases : la <strong>phase pre-juridictionnelle</strong> (enquete et instruction), la <strong>phase juridictionnelle</strong> (jugement) et la <strong>phase d'execution</strong> (application des peines). Elle cherche un equilibre entre l'efficacite repressive, la protection des droits fondamentaux et la recherche de la verite.</p>
        <p>Le systeme francais est traditionnellement <strong>inquisitoire</strong> (le juge instruit d'office), par opposition au systeme accusatoire anglo-americain (les parties conduisent la procedure). Mais les reformes successives l'ont rendu de plus en plus « mixte » : role accru des parties, droits de la defense etendus, principe du contradictoire renforce.</p>

        <h3>L'enquete de police : la phase pre-juridictionnelle</h3>
        <p>L'enquete est conduite par la police judiciaire (officiers de police judiciaire, OPJ) sous l'autorite du procureur de la Republique. Deux regimes coexistent :</p>
        <ul>
          <li><strong>L'enquete de flagrance (art. 53 CPP) :</strong> pour les crimes ou delits en train d'etre commis ou venant de l'etre. Elle autorise des pouvoirs etendus : perquisitions sans autorisation judiciaire, garde a vue, saisies, arrestation sans mandat. Duree limitee : 8 jours.</li>
          <li><strong>L'enquete preliminaire (art. 75 CPP) :</strong> enquete de droit commun, en l'absence de flagrance. Les mesures coercitives (perquisition, garde a vue) necessitent le consentement de la personne ou une autorisation judiciaire (juge des libertes et de la detention, JLD).</li>
        </ul>
        <p>La <strong>garde a vue</strong> (art. 62-2 CPP) permet de retenir une personne a l'issue d'une audition si les conditions sont reunies (indices laissant presumer une infraction, necessitee par les besoins de l'enquete). Sa duree est de 24 heures, prolongeable a 48 heures avec autorisation du procureur, voire 96 heures pour le terrorisme et le crime organise. La personne gardee a vue a le droit d'etre assistee d'un avocat des le debut (reforme apres la condemnation par la CEDH, 2010).</p>
        <div class="highlight-box"><p><strong>La reforme de la garde a vue (2011) :</strong> suite a l'arret CEDH Salduz c. Turquie (2008) et aux decisions du Conseil constitutionnel (2010) declarant l'ancien regime de la garde a vue contraire a la Constitution, la loi du 14 avril 2011 a reforme profondement la garde a vue : droit a un avocat des le debut, entretien confidentiel de 30 minutes, droit de se taire, notification des droits, interdiction d'utiliser les declarations faites sans avocat avant notification de ses droits.</p></div>

        <h3>L'instruction judiciaire</h3>
        <p>Pour les affaires complexes ou les crimes, le <strong>juge d'instruction</strong> (magistrat du siege, independant du parquet) conduit une enquete approfondie. Il est saisi par un requisitoire introductif du procureur ou une plainte avec constitution de partie civile. Ses pouvoirs sont etendus : auditions de temoins, confrontations, perquisitions, ecoutes telephoniques, commission rogatoire (delegation de pouvoirs aux OPJ), placement en detention provisoire (avec autorisation du JLD).</p>
        <p>Le <strong>juge des libertes et de la detention (JLD)</strong> est un juge distinct du juge d'instruction, saisi par ce dernier pour les decisions privatives de liberte : placement en detention provisoire (duree initiale : 4 mois, renouvelable), controle judiciaire (mesures de surveillance sans detention). La detention provisoire est critiquee : environ 20 % de la population carcerale est en preventive, dont certains seront ulterieurement acquittes.</p>
        <p>L'instruction se conclut par une ordonnance de <strong>non-lieu</strong> (charges insuffisantes — affaire classee sans suite judiciaire) ou de <strong>renvoi</strong> devant le tribunal correctionnel (delits) ou mise en examen pour renvoi devant la chambre d'accusation (crimes). La <strong>mise en examen</strong> (ancien inculpation) necessite des « indices graves ou concordants » — niveau inferieur a la condamnation, mais deja stigmatisant pour la personne mise en cause.</p>

        <h3>Le jugement et les voies de recours</h3>
        <p>Le <strong>tribunal correctionnel</strong> juge les delits : 3 juges professionnels (ou juge unique pour les delits mineurs), audience publique, debat contradictoire, delibere a huis clos. Le <strong>tribunal de police</strong> juge les contraventions. La <strong>cour d'assises</strong> juge les crimes : 3 magistrats professionnels (president et 2 assesseurs) et 6 jures citoyens tires au sort (9 en appel). Les jures delibèrent avec les magistrats, a la majorite qualifiee des 2/3 pour la culpabilite et la peine. La defense peut recuser 5 jures, le parquet 4.</p>
        <p>Les voies de recours : <strong>l'appel</strong> (contre les jugements correctionnels : cour d'appel dans les 10 jours ; contre les arrets d'assises : cour d'assises d'appel avec 6 + 3 jures — juridiction de droit commun en France depuis 2000) ; le <strong>pourvoi en cassation</strong> (Cour de cassation : controle de la legalite, pas du fait) ; et en dernier recours, la <strong>CEDH</strong> (apres epuisement des voies internes).</p>

        <h3>L'execution des peines et le droit penitentiaire</h3>
        <p>L'execution des peines est supervisee par le <strong>juge de l'application des peines (JAP)</strong>. Il peut amenager les peines d'emprisonnement : liberation conditionnelle (art. 729 CPP), semi-liberte, placement a l'exterieur, placement sous surveillance electronique (bracelet electronique, port oblige si la peine est inferieure a 2 ans et le condamne donne son accord). La Loi penitentiaire de 2009 a affirme que « l'emprisonnement est une mesure de dernier recours » pour les courtes peines.</p>
        <p>La <strong>condition carcerale</strong> en France est critiquee : surpopulation (190 % de taux d'occupation dans certains etablissements en 2023), conditions sanitaires insuffisantes, acces inegal aux soins et a la formation. Le Contrôleur general des lieux de privation de liberte (CGLPL) surveille les conditions de detention et formule des recommandations. La France a ete condamnee par la CEDH pour des conditions de detention inhumaines (arret JMB et autres c. France, 2020).</p>
""")

# Check lengths
for key in ['penal/infractions', 'penal/crimes', 'penal/procedure']:
    print(f"{key}: {len(pages[key]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK - batch 5 (penal 1)")
