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
# civil/personnes
# ==========================================
pages['civil/personnes']['content'] = replace_contenu(pages['civil/personnes']['content'], """
        <h3>La personnalite juridique</h3>
        <p>La <strong>personnalite juridique</strong> est l'aptitude a etre sujet de droit, c'est-a-dire titulaire de droits et d'obligations. Elle confere a la personne deux capacites fondamentales : la <strong>capacite de jouissance</strong> (avoir des droits : posseder un bien, heriter, conclure un contrat) et la <strong>capacite d'exercice</strong> (exercer soi-meme ses droits, sans intermediaire).</p>
        <p>Pour les personnes physiques, la personnalite juridique debute a la naissance, a condition que l'enfant naisse vivant et viable. Toutefois, le droit applique la maxime romaine « infans conceptus pro nato habetur quotiens de commodis ejus agitur » : l'enfant concu est repute ne chaque fois que c'est dans son interet (heritage, assurance-vie, reparation d'un prejudice pre-natal). La personnalite juridique s'eteint au <strong>deces</strong>, constate par un medecin et declare a l'officier d'etat civil dans les 24 heures. En cas de disparition sans corps retrouve, un jugement declaratif de deces peut etre prononce par le tribunal judiciaire apres un delai de 10 ans (ou 1 an en cas de catastrophe).</p>
        <div class="highlight-box"><p><strong>Les personnes morales :</strong> les societes, associations, syndicats, collectivites territoriales et l'Etat sont des personnes morales dotees de la personnalite juridique. Elles peuvent ester en justice, posseder des biens, conclure des contrats. La personnalite morale est acquise lors de la formation (associations : depot en prefecture) ou de l'immatriculation (societes : inscription au registre du commerce et des societes).</p></div>

        <h3>La capacite juridique</h3>
        <p>La <strong>capacite de jouissance</strong> est en principe totale pour toute personne physique. Certaines incapacites de jouissance existent a titre exceptionnel et sont toujours speciales (interdiction pour un tuteur d'acquerir les biens de son pupille, art. 509 CC).</p>
        <p>La <strong>capacite d'exercice</strong> est plus variable. Le <strong>mineur non emancipe</strong> est juridiquement incapable d'exercice : il ne peut pas, en principe, conclure seul des actes juridiques importants. Certains actes lui restent accessibles : actes de la vie courante (achats quotidiens, art. 1148 CC), actes strictement personnels (reconnaissance d'un enfant, testament des 16 ans), actes pour lesquels la loi lui confere une capacite speciale (ouverture d'un livret d'epargne, contrat de travail des 16 ans avec autorisation parentale). L'<strong>emancipation</strong>, prononcee par le juge des tutelles a partir de 16 ans, confere au mineur la pleine capacite juridique et la qualite de commercant.</p>
        <p>Le droit distingue les actes selon leur nature : actes de conservation (tres urgents, accessibles a tous), actes d'administration (gestion ordinaire, mineurs capables avec representation), actes de disposition (alienation, engagement lourd, toujours soumis a autorisation).</p>

        <h3>La protection des majeurs vulnerables</h3>
        <p>La loi du 5 mars 2007 a profondement reforme la protection des majeurs dont les facultes mentales ou corporelles sont alterees. Elle pose le principe de necessite et de proportionnalite : la mesure doit etre la moins restrictive possible pour la personne. Trois regimes coexistent :</p>
        <ul>
          <li><strong>La sauvegarde de justice (art. 433 CC) :</strong> mesure provisoire et rapide (1 an renouvelable). Le majeur conserve la capacite d'exercice mais ses actes lesionnaires peuvent etre rescindés ou reduits en justice. Elle convient aux situations transitoires (hospitalisation, crise passagere).</li>
          <li><strong>La curatelle (art. 440 CC) :</strong> mesure d'assistance. Le majeur agit seul pour les actes d'administration (encaisser ses revenus, souscrire une assurance courante) mais doit etre assiste de son curateur pour les actes de disposition (vendre un immeuble, contracter un emprunt). La curatelle renforcee permet au curateur de percevoir directement les revenus du majeur et de regler ses depenses.</li>
          <li><strong>La tutelle (art. 440 CC) :</strong> mesure de representation totale pour les majeurs hors d'etat d'exprimer leur volonte. Le tuteur agit au nom et pour le compte du majeur. Il peut accomplir seul les actes conservatoires et d'administration courante, mais necessite l'autorisation du juge des tutelles ou du conseil de famille pour les actes de disposition importants (vente d'immeuble, placement financier).</li>
        </ul>
        <p>Le <strong>mandat de protection future</strong> (art. 477 CC), introduit par la loi de 2007, permet a toute personne d'organiser a l'avance sa propre protection en designant un mandataire qui la representera lorsque ses facultes seront alterees. Par acte notarie (mandat etendu) ou sous seing prive contresigne par un avocat (mandat limite), il respecte l'autonomie de la personne et offre une anticipation sereine, sans passage obligatoire devant un juge.</p>

        <h3>L'etat civil et l'identite juridique</h3>
        <p>L'<strong>etat civil</strong> est l'ensemble des elements qui identifient une personne dans la vie juridique et sociale : nom de famille, prenom, date et lieu de naissance, nationalite, sexe, etat matrimonial, filiation. Ces elements sont enregistres dans des actes d'etat civil tenus par les maires. Le <strong>nom de famille</strong> est attribue selon les regles de l'article 311-21 CC : les parents choisissent librement le nom (pere, mere, ou double-nom dans la limite d'un nom pour chacun) lors de la declaration de naissance.</p>
        <p>Le <strong>domicile</strong> (art. 102 CC) est le lieu du principal etablissement de la personne. Il determine la competence territoriale des tribunaux et la loi applicable a certaines situations juridiques. La <strong>nationalite</strong> est le lien juridique rattachant un individu a un Etat. En France, elle s'acquiert par le droit du sang (jus sanguinis), le droit du sol (jus soli en cas de naissance en France de parents nes en France), la naturalisation ou le mariage.</p>

        <h3>Les droits de la personnalite</h3>
        <p>Les <strong>droits de la personnalite</strong> sont des droits extrapatrimoniaux, incessibles, imprescriptibles et opposables a tous, qui protegent les attributs fondamentaux de la personne humaine :</p>
        <ul>
          <li><strong>Le droit au respect de la vie privee (art. 9 CC) :</strong> nul ne peut s'immiscer dans la vie privee, familiale, sentimentale ou professionnelle d'autrui. La violation permet d'obtenir des dommages et interets et des mesures d'urgence (retrait de publication, art. 9 al. 2).</li>
          <li><strong>Le droit a l'image :</strong> chaque personne dispose d'un droit exclusif sur son image et peut s'opposer a sa diffusion non consentie — y compris par les algorithmes de reconnaissance faciale.</li>
          <li><strong>Le droit a la dignite :</strong> reconnu par le Conseil constitutionnel (decision du 27 juillet 1994), il interdit les traitements inhumains ou degradants et fonde la protection contre les spectacles humiliants.</li>
          <li><strong>Le droit a l'integrite physique :</strong> nul ne peut etre contraint a des soins medicaux sans son consentement eclaire (art. 16-3 CC). La loi Leonetti-Claeys de 2016 encadre la fin de vie : droit au refus de traitement, directives anticipees, sedation profonde et continue.</li>
        </ul>
        <div class="highlight-box"><p><strong>La protection des donnees personnelles :</strong> le Reglement general sur la protection des donnees (RGPD, 2018) et la loi Informatique et Libertes de 1978 modifiee conferent a chaque personne physique des droits sur ses donnees : droit d'acces, de rectification, d'effacement (« droit a l'oubli »), de portabilite et d'opposition. La CNIL veille au respect de ces droits en France. Les violations graves peuvent donner lieu a des sanctions jusqu'a 4 % du chiffre d'affaires mondial de l'entreprise.</p></div>
""")

# ==========================================
# civil/contrats
# ==========================================
pages['civil/contrats']['content'] = replace_contenu(pages['civil/contrats']['content'], """
        <h3>La formation du contrat</h3>
        <p>La formation du contrat suppose la reunion de trois conditions de validite posees par l'article 1128 du Code civil : le <strong>consentement</strong> des parties, leur <strong>capacite</strong> de contracter, et un <strong>contenu licite et certain</strong>. La reforme de 2016 a supprime la notion de « cause » comme condition autonome, l'integrant dans la licite et la certitude du contenu.</p>
        <p>Le consentement doit etre libre et eclaire. Il peut etre vicie par l'<strong>erreur</strong> (art. 1132 : erreur sur les qualites essentielles de la prestation), le <strong>dol</strong> (art. 1137 : manoeuvres trompeuses ou dissimulation intentionnelle d'une information determinante) ou la <strong>violence</strong> (art. 1140 : contrainte physique ou morale, y compris l'abus d'etat de dependance depuis 2016). Le vice du consentement entraine la nullite relative du contrat, ouverte dans un delai de 5 ans a compter de la decouverte du vice.</p>
        <p>La negociation contractuelle est encadree par la bonne foi (art. 1112) : une rupture abusive des pourparlers peut engager la responsabilite extracontractuelle de l'auteur. L'offre est une proposition ferme et precise qui lie son auteur pendant le delai fixe. L'acceptation doit etre pure et simple : toute modification constitute une contre-offre. Les contrats conclus electroniquement sont soumis a des obligations d'information renforcees (art. 1127-1 CC).</p>
        <div class="highlight-box"><p><strong>Les contrats d'adhesion (art. 1110 CC) :</strong> dans les contrats dont les conditions generales sont fixees a l'avance par l'une des parties (operateurs telephoniques, plateformes numeriques, banques), les clauses non negociables creant un desequilibre significatif sont reputees non ecrites. Cette protection, introduite par la reforme de 2016, complemente le droit de la consommation qui protege le consommateur contre les clauses abusives (art. L.212-1 du Code de la consommation).</p></div>

        <h3>Classifications des contrats</h3>
        <p>Le droit francais distingue de nombreuses categories de contrats aux consequences juridiques differentes :</p>
        <ul>
          <li><strong>Synallagmatique / unilateral :</strong> le contrat synallagmatique cree des obligations reciproques et interdependantes (vente : le vendeur livre, l'acheteur paie). Le contrat unilateral n'engage qu'une seule partie (donation, cautionnement).</li>
          <li><strong>A titre onereux / a titre gratuit :</strong> la vente est a titre onereux (chaque partie attend une contrepartie) ; la donation est a titre gratuit (intention liberale).</li>
          <li><strong>Commutatif / aleatoire :</strong> les prestations sont determinees et equivalentes a l'avance (bail) ou dependent d'un alea (assurance, rente viagere).</li>
          <li><strong>Consensuel / solennel / reel :</strong> forme par le seul echange des consentements (vente mobiliere), par un acte notarie obligatoire (vente immobiliere, donation), ou par la remise de la chose (pret, depot).</li>
          <li><strong>D'adhesion / de gre a gre :</strong> selon que les conditions sont imposees par une partie ou negociees librement.</li>
          <li><strong>A execution instantanee / successive :</strong> execution en une fois (vente) ou echelonnee dans le temps (bail, contrat de travail). Cette distinction importe pour la resolution (resiliation pour l'avenir en cas de contrat a execution successive).</li>
        </ul>

        <h3>L'execution du contrat</h3>
        <p>Le contrat doit etre execute de <strong>bonne foi</strong> (art. 1104 CC, disposition d'ordre public). Les parties doivent respecter non seulement la lettre du contrat mais aussi ses suites que l'equite, l'usage ou la loi donnent a l'obligation. La bonne foi impose une obligation de loyaute : ne pas se placer volontairement dans une situation d'inexecution, informer le cocontractant des evenements pertinents, cooperer a l'execution.</p>
        <p>En cas de changement de circonstances imprevisible lors de la conclusion du contrat rendant l'execution excessivement onereuse pour une partie qui n'avait pas accepte ce risque, le mecanisme de l'<strong>imprevision</strong> (art. 1195 CC) permet de demander une renegociation. Ce mecanisme, inspire de la theorie administrative de l'imprevisibilite (arret Gaz de Bordeaux, 1916) et longtemps refuse en droit civil (arret Canal de Craponne, 1876), constitue une innovation majeure de la reforme 2016. En cas d'echec des negociations, le juge peut reviser le contrat ou y mettre fin a la date et aux conditions qu'il fixe.</p>

        <h3>L'inexecution du contrat et les remedes</h3>
        <p>Lorsqu'une partie n'execute pas ses obligations, l'autre dispose d'une palette de remedes articules par l'article 1217 du Code civil :</p>
        <ul>
          <li><strong>L'exception d'inexecution (art. 1219-1220) :</strong> suspendre l'execution de sa propre obligation si l'autre n'execute pas (art. 1219) ou si son inexecution future est manifeste (art. 1220). Mesure defensive et temporaire — le contrat subsiste.</li>
          <li><strong>L'execution forcee en nature (art. 1221) :</strong> contraindre le debiteur a executer, sauf impossibilite ou cout manifestement disproportionne. L'astreinte (condamnation pecuniaire par jour de retard, art. L.131-1 CPCE) est l'outil courant du juge pour inciter a l'execution.</li>
          <li><strong>La reduction du prix (art. 1223) :</strong> en cas d'execution imparfaite, le creancier peut accepter une execution incomplete et obtenir une reduction proportionnelle du prix.</li>
          <li><strong>La resolution du contrat (art. 1224-1230) :</strong> par clause resolutoire (jouant automatiquement apres mise en demeure), par notification unilaterale (en cas d'inexecution suffisamment grave, art. 1226) ou par decision judiciaire. La resolution entraine l'aneantissement retroactif du contrat et les restitutions reciproques. Pour les contrats a execution successive, on parle de resiliation (effets pour l'avenir seulement).</li>
          <li><strong>Les dommages et interets (art. 1231 et suivants) :</strong> compensent le prejudice previsible lors de la conclusion (previsibilite caracteristique du droit contractuel, par opposition au droit extracontractuel). En cas de dol ou de faute lourde, tous les prejugices, meme imprevisibles, sont reparables.</li>
        </ul>

        <h3>Les quasi-contrats</h3>
        <p>Les quasi-contrats sont des faits volontaires licites qui engendrent des obligations sans accord de volontes. Le Code civil en reconnait trois :</p>
        <ul>
          <li><strong>La gestion d'affaires (art. 1301) :</strong> une personne (le gerant) gere spontanement les affaires d'une autre (le gere) sans mandat. Le gerant doit continuer la gestion et en rendre compte. Le gere doit rembourser les depenses utiles et les engagements necessaires.</li>
          <li><strong>Le paiement de l'indu (art. 1302) :</strong> celui qui a paye une somme non due (par erreur ou sans cause juridique) peut en reclamer la restitution. L'action en repeter se prescrit par 5 ans.</li>
          <li><strong>L'enrichissement injustifie (art. 1303) :</strong> celui qui s'est enrichi sans cause au detriment d'autrui doit l'indemniser dans la mesure de son enrichissement (ou de l'appauvrissement si celui-ci est moindre). Action subsidiaire, exclue lorsqu'une autre action est ouverte.</li>
        </ul>
        <div class="highlight-box"><p><strong>La force obligatoire et ses limites :</strong> l'article 1103 CC pose que « Les contrats legalement formes tiennent lieu de loi a ceux qui les ont faits ». Mais ce principe connait des limites importantes : le juge peut reduire une clause penale manifestement excessive (art. 1231-5), les clauses abusives dans les contrats de consommation sont reputees non ecrites, la lesion ouvre la rescision dans certains cas (vente immobiliere, partage). La reforme de 2016 a equilibre liberte contractuelle et protection des parties faibles.</p></div>
""")

# ==========================================
# civil/famille
# ==========================================
pages['civil/famille']['content'] = replace_contenu(pages['civil/famille']['content'], """
        <h3>Le mariage : conditions et effets</h3>
        <p>Le mariage est un acte juridique solennel par lequel deux personnes etablissent une union dont la loi civile regle les conditions, les effets et la dissolution. Les <strong>conditions de fond</strong> sont : le consentement libre et eclaire des epoux (vice de consentement = nullite absolue), l'age minimum de 18 ans (la loi du 21 mars 2022 a supprime la possibilite de dispense pour les mineurs de 16 ans, rendant le mariage des mineurs impossible), l'absence d'empechements (bigamie punie penalement, inceste, defaut de dissolution d'un mariage precedent). Les <strong>conditions de forme</strong> exigent une publication des bans (14 jours avant), une celebration publique devant l'officier d'etat civil, en presence de deux a quatre temoins.</p>
        <p>Les <strong>effets personnels</strong> du mariage : devoir de fidelite, de cohabitation, d'assistance et de respect (art. 212-215 CC). Les <strong>effets patrimoniaux</strong> dependent du regime matrimonial choisi. En l'absence de contrat de mariage, le regime legal est la <strong>communaute reduite aux acquets</strong> : les biens acquis pendant le mariage sont communs (partages a parts egales), ceux anterieurs ou recus par heritage ou donation restent propres. D'autres regimes sont disponibles par contrat de mariage devant notaire : separation de biens (chacun garde ses biens), participation aux acquets (liquidation differee), communaute universelle (tous les biens sont communs).</p>
        <div class="highlight-box"><p><strong>La loi du 17 mai 2013 :</strong> le mariage a ete ouvert aux couples de meme sexe, modifiant l'article 143 du Code civil. Cette loi a egalement ouvert l'adoption conjointe aux couples maries homosexuels, donnant acces a une pleine filiation adoptive et a tous les droits successoraux du conjoint. La France est le 14e pays a legaliser le mariage entre personnes de meme sexe.</p></div>

        <h3>Le PACS et le concubinage</h3>
        <p>Le <strong>pacte civil de solidarite</strong> (PACS), instaure par la loi du 15 novembre 1999, est un contrat conclu entre deux personnes majeures pour organiser leur vie commune. Depuis 2017, il se conclut par declaration conjointe devant l'officier d'etat civil (et non plus devant le greffe du tribunal). Le PACS impose une aide materielle reciproque proportionnelle aux facultes, une solidarite pour les dettes de la vie courante, une imposition commune et des avantages fiscaux en matiere de succession (exoneration totale depuis 2007). Le PACS se dissout par declaration conjointe, declaration unilaterale (avec preavis), mariage ou deces.</p>
        <p>Le <strong>concubinage</strong> (art. 515-8 CC) est une union de fait, stable et continue entre deux personnes vivant en couple, sans formalites juridiques. Il ne cree en principe ni droits ni obligations : pas de pension alimentaire, pas de droits successoraux legaux, droits de succession tres lourds (60 %) si designation par testament. La jurisprudence reconnait une obligation naturelle d'assistance et, dans certains cas, un enrichissement injustifie ou une societe de fait.</p>

        <h3>Le divorce</h3>
        <p>Le droit francais reconnait quatre cas de divorce depuis la reforme de 2004 (art. 229 et suivants CC) :</p>
        <ul>
          <li><strong>Divorce par consentement mutuel (art. 230) :</strong> les epoux s'accordent sur le principe et toutes les consequences (partage des biens, garde des enfants, prestation compensatoire). Depuis la loi du 18 novembre 2016, il peut etre prononce sans juge par acte sous signature privee contresigne par les avocats de chaque epoux, depose chez un notaire pour depot et conservation. Exception : si un enfant mineur demande a etre auditionne par le juge, la procedure judiciaire s'impose.</li>
          <li><strong>Divorce accepte (art. 233) :</strong> les epoux s'accordent sur le principe de la rupture mais confient les consequences au juge. Acte formel devant le juge aux affaires familiales.</li>
          <li><strong>Divorce pour alteration definitive du lien conjugal (art. 237) :</strong> possible apres un an de separation de fait, meme si l'autre epoux s'y oppose.</li>
          <li><strong>Divorce pour faute (art. 242) :</strong> violation grave ou renouvelee des devoirs du mariage rendant intolerable le maintien de la vie commune (adultere, violence conjugale, abandon). Le juge aux affaires familiales apprécie souverainement la faute.</li>
        </ul>
        <p>Le divorce entraine la <strong>prestation compensatoire</strong> (art. 270 CC) — capital verse pour compenser la disparite creee par la rupture dans les niveaux de vie — et la <strong>liquidation du regime matrimonial</strong> (partage des biens communs ou liquider les creances entre epoux).</p>

        <h3>La filiation</h3>
        <p>La filiation est le lien juridique entre un parent et son enfant. Elle peut etre etablie par :</p>
        <ul>
          <li><strong>L'effet de la loi :</strong> la <strong>presomption de paternite</strong> (art. 312 CC) — l'enfant concu ou ne pendant le mariage a pour pere le mari. Peut etre combattue par une action en desaveu ou en contestation de paternite (expertise genetique).</li>
          <li><strong>La reconnaissance volontaire :</strong> le pere reconnait son enfant avant ou apres la naissance par acte d'etat civil. La reconnaissance est irrevocable mais contestable.</li>
          <li><strong>La possession d'etat :</strong> comportement continu d'une personne se conduisant comme le parent d'un enfant, constate par acte de notoriete signe par trois temoins et un notaire.</li>
          <li><strong>Judiciairement :</strong> en cas de contestation, le tribunal peut ordonner une expertise genetique ou apprécier l'ensemble des elements de preuve.</li>
        </ul>
        <p>La <strong>filiation adoptive</strong> : l'adoption pleniere cree un lien irrevocable qui substitue une nouvelle filiation a la filiation d'origine — l'adopte acquiert le nom de l'adoptant et ses droits successoraux. L'adoption simple est revocable et laisse subsister la filiation d'origine — l'adopte conserve des droits dans les deux familles. La loi du 21 fevrier 2022 a simplifie et elargi les conditions d'adoption.</p>

        <h3>L'autorite parentale et la protection de l'enfant</h3>
        <p>L'<strong>autorite parentale</strong> (art. 371-1 CC) est un ensemble de droits et de devoirs — garde, surveillance, education, entretien — exerces dans l'interet de l'enfant. Elle est exercee conjointement par les deux parents, qu'ils soient maries, pacses ou concubins, meme apres separation. En cas de desaccord, le <strong>juge aux affaires familiales</strong> (JAF) statue en privilegiant l'interet superieur de l'enfant (principe d'origine conventionnelle : art. 3 de la Convention internationale des droits de l'enfant de 1989).</p>
        <p>Apres separation, le JAF peut fixer la residence de l'enfant chez l'un des parents (avec droit de visite et d'hebergement) ou en <strong>residence alternee</strong>. La <strong>pension alimentaire</strong> est fixee selon le barème indicatif du ministere de la Justice, tenant compte des ressources de chaque parent et des besoins de l'enfant. Le non-paiement delibere constitue le delit d'abandon de famille (art. 227-3 CP, 2 ans d'emprisonnement et 15 000 euros d'amende).</p>
        <div class="highlight-box"><p><strong>La protection de l'enfance :</strong> la loi du 5 mars 2007 reformant la protection de l'enfance renforce la prevention et la detection des situations de danger. Lorsque la sante, la securite, la moralite ou l'education de l'enfant sont en danger, le juge des enfants peut ordonner des mesures d'assistance educative (aide educative a domicile, placement, enquete sociale). L'Aide sociale a l'enfance (ASE) des departements coordonne ces mesures. Le signalement de situations de danger est facilite par le 119 (Allo Enfance en Danger).</p></div>
""")

# ==========================================
# civil/propriete
# ==========================================
pages['civil/propriete']['content'] = replace_contenu(pages['civil/propriete']['content'], """
        <h3>Les attributs du droit de propriete</h3>
        <p>Le <strong>droit de propriete</strong> est un droit reel fondamental, protege par l'article 544 du Code civil et par l'article 17 de la Declaration des droits de l'homme de 1789 (« la propriete etant un droit inviolable et sacre »). Il se decompose en trois attributs classiques issus du droit romain :</p>
        <ul>
          <li><strong>L'usus :</strong> le droit d'utiliser la chose (habiter sa maison, conduire sa voiture). Le proprietaire choisit librement l'usage de son bien.</li>
          <li><strong>Le fructus :</strong> le droit de percevoir les fruits : naturels (recoltes d'un verger), industriels (produits d'une exploitation agricole) ou civils (loyers d'un immeuble).</li>
          <li><strong>L'abusus :</strong> le droit de disposer de la chose : la vendre, la donner, la modifier, la detruire. C'est l'attribut le plus caracteristique de la propriete.</li>
        </ul>
        <p>Le droit de propriete presente trois caracteristiques : il est <strong>absolu</strong> (le proprietaire peut faire ce qu'il veut de sa chose, dans les limites des lois), <strong>exclusif</strong> (il peut exclure autrui et agir en revendication) et <strong>perpetuel</strong> (il ne s'eteint pas par le non-usage). Ces caracteres sont de plus en plus encadres : le droit de l'environnement, les servitudes legales, l'expropriation et les obligations de mise en location encadrent la liberte du proprietaire.</p>
        <div class="highlight-box"><p><strong>L'expropriation pour cause d'utilite publique :</strong> l'article 17 DDHC autorise de priver un proprietaire de son bien pour une utilite publique reconnue (route, ligne ferroviaire, hopital), a condition d'une procedure formelle (declaration d'utilite publique par decret en Conseil d'Etat, enquete parcellaire contradictoire) et d'une juste et prealable indemnite couvrant l'integralite du prejudice direct, materiel et certain. Le juge de l'expropriation (tribunal judiciaire) fixe l'indemnite en cas de desaccord.</p></div>

        <h3>La distinction meubles / immeubles</h3>
        <p>Le Code civil classe les biens en deux grandes categories aux consequences juridiques importantes :</p>
        <ul>
          <li><strong>Les immeubles</strong> ne peuvent pas etre deplaces. On distingue : les immeubles par nature (terrains, batiments, arbres avant coupe), par destination (machines d'exploitation agricole attachees au fonds), et par l'objet auquel ils s'appliquent (usufruit d'un immeuble). Les transactions immobilieres sont soumises a la publicite fonciere obligatoire (service de la publicite fonciere) et a l'acte authentique notarie.</li>
          <li><strong>Les meubles</strong> sont susceptibles de deplacement : meubles corporels (voiture, bijou, stock) et incorporels (creances, parts sociales, brevets, fonds de commerce, valeurs mobilieres). Pour les meubles corporels, la regle « en fait de meubles, la possession vaut titre » (art. 2276 CC) protege l'acquereur de bonne foi contre les revendications du veritable proprietaire.</li>
        </ul>

        <h3>La possession et l'usucapion</h3>
        <p>La <strong>possession</strong> est le fait d'exercer sur une chose un pouvoir de fait correspondant a l'exercice d'un droit reel. Elle requiert deux elements : le <strong>corpus</strong> (la maitrise materielle, les actes materiels d'usage) et l'<strong>animus</strong> (la volonte de se comporter comme titulaire du droit). La possession doit etre continue, paisible, publique et non equivoque (art. 2261 CC) pour etre « utile » et produire des effets juridiques.</p>
        <p>L'<strong>usucapion</strong> (ou prescription acquisitive) permet d'acquerir la propriete par une possession prolongee : 30 ans pour la possession ordinaire (art. 2272 CC) ou 10 ans si le possesseur est de bonne foi (il se croyait veritablement proprietaire) et dispose d'un juste titre (un acte translatif nul ou insuffisant). Ce mecanisme stabilise les situations de fait et protege les tiers. En matiere immobiliere, l'usucapion est formalise devant le tribunal judiciaire pour permettre la publicite fonciere.</p>
        <p>La <strong>protection possessoire</strong> permet au possesseur (meme non proprietaire) de defendre sa possession contre les troubles : complainte (trouble actuel), denonce de nouvel oeuvre (trouble imminent), reintegrance (depossession violente). Ces actions ne portent pas sur le fond du droit de propriete.</p>

        <h3>Les droits reels demembres</h3>
        <p>Le proprietaire peut demembrer son droit en conferant a un tiers certains de ses attributs :</p>
        <ul>
          <li><strong>L'usufruit (art. 578 CC) :</strong> droit de se servir de la chose (usus) et d'en percevoir les fruits (fructus) appartenant a autrui (le nu-proprietaire). L'usufruitier doit conserver la substance de la chose. L'usufruit est temporaire (souvent viager) et s'eteint par le deces de l'usufruitier, l'ecoulement du delai ou la consolidation. Frequent dans les successions : le conjoint survivant peut opter pour un usufruit sur la totalite des biens de la succession (art. 757 CC).</li>
          <li><strong>Les servitudes (art. 637 CC) :</strong> charge imposee sur un fonds (fonds servant) au profit d'un autre fonds (fonds dominant). Elles sont perpetuelles et suivent les fonds. Exemples : servitude de passage (permettre a un fonds enclave de rejoindre la voie publique), servitude de vue, de ne pas construire. Elles sont etablies par la loi, le titre ou la prescription.</li>
          <li><strong>L'emphyteose et le bail a construction :</strong> droits reels accordes au preneur pour une longue duree (18 a 99 ans) avec obligation de construire ou d'ameliorer le fonds. Utilises notamment par les collectivites pour valoriser leur patrimoine foncier.</li>
        </ul>

        <h3>La copropriete et les modes d'accession a la propriete</h3>
        <p>La <strong>copropriete</strong> (loi du 10 juillet 1965) est le regime juridique des immeubles divises en lots comprenant une partie privative et une quote-part des parties communes. Elle est gouvernee par un syndicat de coproprietaires (personne morale), un syndic professionnel ou benevole (gestionnaire et representant) et un conseil syndical. Les decisions majeures (travaux, budget) sont votees en assemblée generale selon des quotas de voix. La reforme de 2019 (ordonnance du 30 octobre) a simplifie la prise de decisions et renforce la protection contre les syndics defaillants.</p>
        <p>La propriete peut etre acquise par <strong>contrat</strong> (vente, donation, echange), par <strong>succession</strong>, par <strong>usucapion</strong> ou par <strong>accession</strong> (art. 546 CC : ce qui est produit par la chose ou qui s'y incorpore appartient au proprietaire). L'accession peut etre naturelle (alluvions, ile formee dans un cours d'eau non domanial) ou artificielle (construction sur le terrain d'autrui — le proprietaire du sol devient proprietaire des constructions, sous reserve d'indemnisation).</p>
        <div class="highlight-box"><p><strong>La propriete intellectuelle :</strong> le droit d'auteur (Code de la propriete intellectuelle, loi de 1957 modifiee) protege les oeuvres de l'esprit des leur creation, sans formalite. Les droits patrimoniaux durent 70 ans apres le deces de l'auteur. Les droits moraux sont perpetuels, incessibles et imprescriptibles (droit de divulgation, d'integrite, de paternite, de retrait et de repentir). Le brevet (20 ans), la marque (10 ans renouvelables), le dessin et modele (5 ans renouvelables) sont proteges par depôt aupres de l'INPI ou de l'EUIPO au niveau europeen.</p></div>
""")

# ==========================================
# civil/responsabilite
# ==========================================
pages['civil/responsabilite']['content'] = replace_contenu(pages['civil/responsabilite']['content'], """
        <h3>Les trois conditions de la responsabilite</h3>
        <p>Toute action en responsabilite civile exige la reunion cumulative de trois elements :</p>
        <ul>
          <li><strong>Un fait generateur :</strong> une faute (art. 1240-1241), le fait d'une chose (art. 1242 al. 1), le fait d'autrui (art. 1242 al. 4 et suivants), ou un regime special (loi Badinter, responsabilite du producteur).</li>
          <li><strong>Un dommage reparable :</strong> le prejudice doit etre certain (pas purement eventuel), personnel et porter sur un interet legitime. Il peut etre materiel (perte financiere, destruction d'un bien), corporel (atteinte physique, incapacite de travail), moral (souffrance psychologique, atteinte a l'honneur, prejudice d'affection) ou ecologique (prejudice cause a l'environnement non assez rattachable a une personne, art. 1246 CC depuis 2016).</li>
          <li><strong>Un lien de causalite :</strong> le fait generateur doit etre la cause directe et certaine du dommage. La jurisprudence oscille entre la theorie de l'equivalence des conditions (toute condition sans laquelle le dommage ne serait pas survenu) et la causalite adequate (seule la cause ordinairement apte a produire le dommage engage la responsabilite). La perte de chance — prejudice certain consistant en une probabilite perdue — est autonomement indemnisable.</li>
        </ul>

        <h3>La responsabilite pour faute (art. 1240-1241)</h3>
        <p>La responsabilite pour faute est le regime de droit commun. La <strong>faute</strong> est un manquement a une obligation preexistante : violation d'une regle legale, d'un usage professionnel ou du devoir general de prudence et de diligence. Elle s'apprecie in abstracto : par reference au comportement d'une personne raisonnable placee dans les memes circonstances. Toute faute, meme legere, engage la responsabilite de son auteur.</p>
        <p>Depuis les arrets <strong>Derguini et Lemaire de 1984</strong> (Assemblee pleniere), l'absence de discernement (enfant en bas age, personne souffrant de troubles mentaux) n'exclut plus la faute civile — ce qui protege la victime. La faute peut etre de commission (acte positif dommageable), d'omission (abstention fautive) ou de mise en danger (non-assistance a personne en danger, art. 223-6 CP).</p>
        <div class="highlight-box"><p><strong>La responsabilite medicale :</strong> la loi du 4 mars 2002 (loi Kouchner) a codifie la responsabilite medicale. Le medecin est tenu d'une obligation d'information eclairee sur les risques et de moyens (pas de resultat sauf obligations speciales). En cas de defaut d'information, la victime peut obtenir reparation de la perte de chance de refuser l'acte. L'Office national d'indemnisation des accidents medicaux (ONIAM) indemnise les accidents medicaux non fautifs graves.</p></div>

        <h3>La responsabilite du fait des choses (art. 1242 al. 1)</h3>
        <p>L'arret <strong>Jand'heur de 1930</strong> (Chambres reunies) a fonde une responsabilite de plein droit du gardien d'une chose pour les dommages qu'elle cause, sans necessite de prouver une faute. La victime doit seulement prouver l'intervention de la chose dans la realisation du dommage. La <strong>garde</strong> est definie par l'usage, la direction et le controle de la chose ; elle peut etre transferee (locataire d'une voiture) ou usurpee (voleur). Le gardien peut s'exonerer en prouvant la faute de la victime, le fait d'un tiers presentant les caracteres de la force majeure, ou la force majeure.</p>
        <p>Des regimes speciaux coexistent avec ce droit commun :</p>
        <ul>
          <li><strong>La loi Badinter du 5 juillet 1985</strong> sur les accidents de la circulation : responsabilite objective du conducteur ou gardien d'un vehicule terrestre a moteur implique dans un accident. La faute de la victime non conductrice ne peut reduire l'indemnisation que si elle est inexcusable et constitue la cause exclusive du dommage (protection renforcee des pietons et cyclistes).</li>
          <li><strong>La responsabilite du producteur (loi du 19 mai 1998)</strong> transposant la directive CE de 1985 : le producteur est responsable de plein droit des dommages causes par un defaut de securite de son produit, independamment de toute relation contractuelle.</li>
        </ul>

        <h3>La responsabilite du fait d'autrui</h3>
        <p>Le Code civil prevoit plusieurs cas de responsabilite pour le fait d'un tiers :</p>
        <ul>
          <li><strong>Responsabilite des parents (art. 1242 al. 4) :</strong> les parents exercant l'autorite parentale sont responsables de plein droit des dommages causes par leur enfant mineur habitant avec eux. Exoneration uniquement par la force majeure ou la faute exclusive de la victime — la bonne surveillance ne suffit pas (arret Bertrand, 1997).</li>
          <li><strong>Responsabilite des commettants (art. 1242 al. 5) :</strong> l'employeur est responsable des dommages causes par ses employes dans l'exercice de leurs fonctions. L'arret Costedoat (Assemblee pleniere, 2000) a pose que le prepose n'engage pas sa responsabilite envers les tiers s'il a agi dans les limites de sa mission et sans faute personnelle. Responsabilite de plein droit, sans exoneration possible pour l'employeur.</li>
          <li><strong>Responsabilite des clubs sportifs (art. 1242 al. 1) :</strong> les associations sportives sont responsables des dommages causes par leurs membres lors des competitions qu'elles organisent (arret Fullenwarth, 1984).</li>
        </ul>

        <h3>L'evaluation du prejudice et la reparation integrale</h3>
        <p>Le principe cardinal de la responsabilite civile est la <strong>reparation integrale</strong> : la victime doit etre replacee dans la situation ou elle se serait trouvee si le dommage ne s'etait pas produit — ni plus, ni moins. La reparation peut etre en nature (destruction de l'oeuvre litigieuse, publication d'un dement) ou par equivalent pecuniaire (dommages et interets).</p>
        <p>La nomenclature <strong>Dintilhac</strong> (2005), adoptee par les juridictions civiles, catalogue les postes de prejudice corporel : deficit fonctionnel temporaire et permanent (incapacite pendant la guerison et sequelles definitives), pretium doloris (souffrances endurees, de 1 a 7), prejudice esthetique, prejudice d'etablissement (perte de chance de fonder une famille), prejudice sexuel, prejudices professionnels (perte de revenus, incidence sur la carriere).</p>
        <p>Les <strong>causes d'exoneration</strong> : force majeure (evenement exterieur, imprevisible, irresistible), faute de la victime (partage ou exoneration totale), fait d'un tiers. Les clauses limitatives de responsabilite sont nulles en matiere extracontractuelle. En matiere contractuelle, elles sont valides sauf en cas de faute lourde ou dolosive, et nulles si elles vident le contrat de toute substance.</p>
""")

# Check lengths
for key in ['civil/personnes', 'civil/contrats', 'civil/famille', 'civil/propriete', 'civil/responsabilite']:
    print(f"{key}: {len(pages[key]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK - batch 1 (civil)")
