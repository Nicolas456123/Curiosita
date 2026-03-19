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
# constitutionnel/separation — fix (too short by ~13 chars)
# ==========================================
pages['constitutionnel/separation']['content'] = replace_contenu(pages['constitutionnel/separation']['content'], """
        <h3>Le principe de separation des pouvoirs</h3>
        <p>La <strong>separation des pouvoirs</strong> est le principe fondateur de l'Etat de droit democratique theorise par Montesquieu dans L'Esprit des lois (1748) : « Pour qu'on ne puisse abuser du pouvoir, il faut que, par la disposition des choses, le pouvoir arrete le pouvoir. » Montesquieu distingue trois fonctions de l'Etat : legisler, executer les lois, juger. La confusion de ces fonctions entre les memes mains caracterise la tyrannie et l'arbitraire.</p>
        <p>Deux modeles de separation se distinguent dans le droit constitutionnel compare :</p>
        <ul>
          <li><strong>La separation rigide (regime presidentiel, USA) :</strong> les trois pouvoirs sont strictement separes, sans interdependance organique. Le President n'a pas d'initiative legislative directe, le Congres ne peut pas renverser le gouvernement par une motion de censure. L'equilibre repose sur des mecanismes de « checks and balances » : veto presidentiel, impeachment, controle judiciaire des lois (depuis Marbury v. Madison, 1803).</li>
          <li><strong>La separation souple (regime parlementaire) :</strong> les pouvoirs sont distincts mais interdependants. Le gouvernement est responsable devant le Parlement (motion de censure) et peut dissoudre le Parlement. La France de la Ve Republique est un regime semi-presidentiel qui combine ces deux logiques.</li>
        </ul>

        <h3>Le pouvoir executif sous la Ve Republique</h3>
        <p>L'executif est <strong>bicephale</strong> : partage entre le Président de la Republique et le Premier ministre. Le <strong>Président de la Republique</strong> est elu au suffrage universel direct pour 5 ans (depuis la revision de 2000). Chef de l'Etat, garant de l'independance nationale et du respect de la Constitution (art. 5). Ses pouvoirs propres (sans contreseing) : nomination du Premier ministre, dissolution de l'Assemblee nationale (art. 12), referendum legislatif (art. 11), pouvoirs exceptionnels (art. 16), saisine du Conseil constitutionnel, message aux assemblees. Ses pouvoirs partages (soumis au contreseing) : ordonnances, decrets, nominations aux emplois civils et militaires.</p>
        <p>Le <strong>Premier ministre</strong> dirige l'action du gouvernement, assure l'execution des lois et exerce le pouvoir reglementaire general (art. 21). En periode de <strong>cohabitation</strong> (Président et majorite parlementaire de partis opposes), le Premier ministre recupere l'essentiel du pouvoir executif tandis que le Président se cantonne a ses prerogatives propres. Trois periodes de cohabitation ont eu lieu : 1986-1988 (Mitterrand/Chirac), 1993-1995 (Mitterrand/Balladur), 1997-2002 (Chirac/Jospin).</p>

        <h3>Le pouvoir legislatif</h3>
        <p>Le Parlement est <strong>bicameral</strong> : il comprend l'Assemblee nationale (577 deputes, election au scrutin majoritaire uninominal a deux tours, mandat de 5 ans) et le Senat (348 senateurs, election au suffrage universel indirect par les grands electeurs, mandat de 6 ans, renouvele par moitie tous les 3 ans). Le Parlement vote la loi (art. 24 CC), consent a l'impot (loi de finances), controle l'action du gouvernement (questions, commissions d'enquete, motion de censure), ratifie les traites les plus importants (art. 53).</p>
        <p>Le domaine de la loi est limite par l'article 34 (droits civiques, crimes et delits, assiette de l'impot, principes fondamentaux du droit prive, du travail, de l'education). Les matieres non reservees relevent du pouvoir reglementaire (art. 37). Cette « rationalisation du parlementarisme » de la Ve Republique encadre strictement le travail legislatif. Le gouvernement fixe en priorite l'ordre du jour (sauf une semaine sur quatre reservee a l'opposition), peut utiliser la procedure acceleree, le vote bloque (art. 44 al. 3) ou engager sa responsabilite sur un texte (art. 49-3).</p>

        <h3>L'autorite judiciaire et l'independance de la justice</h3>
        <p>La Constitution de 1958 parle d'« autorite judiciaire » (art. 64-66) et non de « pouvoir judiciaire », traduisant une mefiance historique de la tradition republicaine envers le gouvernement des juges. L'article 64 garantit l'independance de l'autorite judiciaire, dont le Président de la Republique est le garant avec l'assistance du <strong>Conseil superieur de la magistrature</strong> (CSM). Le CSM emet des avis contraignants sur la nomination des magistrats du siege (inamovibles, art. 64 al. 4) et des propositions pour les magistrats du parquet.</p>
        <p>La France connait une <strong>dualite de juridictions</strong> originale :</p>
        <ul>
          <li><strong>L'ordre judiciaire</strong> (juridictions civiles et penales), coiffe par la <strong>Cour de cassation</strong>, chargee d'assurer l'uniformite de l'interpretation du droit prive et penal sur l'ensemble du territoire.</li>
          <li><strong>L'ordre administratif</strong> (juridictions administratives : tribunaux administratifs, cours administratives d'appel), coiffe par le <strong>Conseil d'Etat</strong>, chargee du contentieux de l'administration et du controle de legalite des actes administratifs.</li>
        </ul>
        <p>Le <strong>Tribunal des conflits</strong> regle les conflits de competence entre les deux ordres lorsqu'une juridiction s'est declaree incompetente ou lorsque deux decisions contradictoires ont ete rendues.</p>
        <div class="highlight-box"><p><strong>Les mecanismes de responsabilite du gouvernement :</strong> l'article 49 CC est le noeud de la responsabilite gouvernementale. L'art. 49-1 : le Premier ministre engage la responsabilite sur le programme gouvernemental. L'art. 49-2 : l'Assemblee nationale adopte une motion de censure a la majorite absolue de ses membres. L'art. 49-3 : le gouvernement engage sa responsabilite sur un texte financier ou un projet de loi par session. Le texte est adopte sauf si une motion de censure est deposee et adoptee dans les 24 heures. L'art. 49-3 a ete utilise pres de 90 fois sous la Ve Republique, illustrant la tension permanente entre efficacite gouvernementale et controle democratique.</p></div>

        <h3>Les equilibres institutionnels et leurs evolutions</h3>
        <p>La Ve Republique a profondement transforme les equilibres entre les pouvoirs par rapport aux regimes precedents. La rationalisation du parlementarisme a longtemps ete perçue comme une mise sous tutelle du Parlement. La reforme constitutionnelle de 2008 a reequilibre cet equilibre : reservation de semaines pour l'initiative parlementaire, droit de resolutions, ratification parlementaire des nominations presidentielles importantes (art. 13), renforcement des droits des commissions permanentes, creation de la QPC. Malgre ces reformes, le fait majoritaire — l'alignement de la majorite parlementaire sur la volonte presidentielle — reste le determinant essentiel des equilibres institutionnels en France.</p>
""")

# ==========================================
# international/sources
# ==========================================
pages['international/sources']['content'] = replace_contenu(pages['international/sources']['content'], """
        <h3>La hierarchie des sources du droit international</h3>
        <p>Le droit international public est un ordre juridique sui generis, distinct des ordres internes. Ses sources sont enumerees par l'article 38 du Statut de la Cour internationale de justice (CIJ) :</p>
        <ul>
          <li><strong>Les conventions internationales :</strong> traites, pactes, accords, chartes — instruments ecrits conclus entre Etats ou entre Etats et organisations internationales. Ils sont contraignants par le principe <em>pacta sunt servanda</em> (art. 26 Convention de Vienne, 1969 : « Tout traite en vigueur lie les parties et doit etre execute par elles de bonne foi »).</li>
          <li><strong>La coutume internationale :</strong> pratique generale acceptee comme etant le droit (opinio juris). Elle requiert deux elements : une pratique constante et representative des Etats (element materiel) et la conviction que cette pratique est juridiquement obligatoire (element psychologique). La coutume lie tous les Etats, meme ceux qui n'ont pas participe a son elaboration, sauf l'objecteur persistant.</li>
          <li><strong>Les principes generaux de droit :</strong> reconnus par les nations civilisees — principes communs aux grands systemes juridiques (bonne foi, res judicata, nemo judex in causa sua, responsabilite pour faute). Source subsidiaire.</li>
          <li><strong>Les decisions judiciaires et la doctrine :</strong> sources auxiliaires (art. 38 §1d) — jurisprudence de la CIJ, sentences arbitrales, doctrine des publicistes eminents. Non contraignantes en theorie mais tres influentes en pratique.</li>
        </ul>
        <div class="highlight-box"><p><strong>Le jus cogens :</strong> certaines normes de droit international constituent des « normes imperatives » (art. 53 Convention de Vienne) acceptees et reconnues par la communaute internationale des Etats dans son ensemble, auxquelles aucune derogation n'est permise. Ces normes — interdiction du genocide, de l'esclavage, de la torture, de la piraterie, droit a l'autodetermination des peuples — ont une valeur superieure a tout autre traite. Tout traite qui contrevient au jus cogens est nul.</p></div>

        <h3>Les traites internationaux : conclusion et effets</h3>
        <p>La conclusion d'un traite obeit a une procedure en plusieurs etapes encadree par la Convention de Vienne sur le droit des traites de 1969 :</p>
        <ul>
          <li><strong>La negociation :</strong> conduite par les plénipotentiaires designes par les Etats.</li>
          <li><strong>L'adoption du texte :</strong> a l'unanimite dans les negociations bilaterales, aux deux tiers dans les conferences multilatérales.</li>
          <li><strong>L'authentication :</strong> signature du texte qui l'authentifie mais n'engage pas encore l'Etat.</li>
          <li><strong>La ratification :</strong> acte par lequel l'Etat exprime son consentement definitif a etre lie. En France, les traites les plus importants (paix, commerce, droits de l'homme, modification legislative) doivent etre autorises par une loi (art. 53 CC). Le Président ratifie (art. 52 CC).</li>
          <li><strong>L'entree en vigueur :</strong> selon les conditions prevues dans le traite (souvent un nombre minimum de ratifications).</li>
        </ul>
        <p>Les traites peuvent etre modifies (amendements) ou denonces (retrait unilateral, soumis aux conditions du traite ou, pour les traites sans clause de denonciation, apres preavis raisonnable). Les reservations permettent a un Etat d'exclure ou de modifier certaines dispositions dans leur application a son egard (interdites pour les traites de jus cogens).</p>

        <h3>La coutume internationale</h3>
        <p>La <strong>coutume internationale</strong> est la source la plus ancienne du droit international. Elle se forme par la repetition d'actes etatiques (lois, decisions judiciaires, actes diplomatiques, comportements militaires) accompagnes de l'opinio juris — la conviction d'agir en vertu d'une obligation juridique. La CIJ a frequemment recours a la coutume dans ses arrêts : arret Plateau continental de la mer du Nord (1969) sur les elements constitutifs de la coutume, arret Nicaragua (1986) sur le droit coutumier relatif au non-recours a la force.</p>
        <p>La coutume peut etre <strong>universelle</strong> (liant tous les Etats), <strong>regionale</strong> (propre a une region geographique, comme certains principes du droit inter-americain) ou <strong>bilaterale</strong> (entre deux Etats). La persistance active dans le rejet d'une pratique coutumiere en voie de formation (statut d'objecteur persistant) permet a un Etat de s'affranchir de la coutume naissante, mais non de la coutume etablie.</p>

        <h3>Les actes des organisations internationales</h3>
        <p>Les organisations internationales (OI) peuvent adopter des actes normatifs dont la portee depend de leur charte constitutive :</p>
        <ul>
          <li><strong>Actes contraignants :</strong> les resolutions du Conseil de securite de l'ONU adoptees en vertu du chapitre VII (paix et securite internationales) sont obligatoires pour tous les membres (art. 25 Charte ONU). Les reglements de l'Union europeenne sont directement applicables dans tous les Etats membres sans transposition.</li>
          <li><strong>Actes non contraignants (soft law) :</strong> resolutions de l'Assemblee generale de l'ONU (declaratoires), recommandations de l'OCDE, codes de conduite, lignes directrices. Ces instruments n'ont pas force obligatoire mais exercent une influence normative significative et peuvent etre le germe d'une coutume future.</li>
        </ul>
        <p>Le <strong>droit derive de l'UE</strong> constitue un ordre juridique autonome : les directives (objectifs a atteindre, transposition necessaire en droit interne dans un delai fixe) et les reglements (applicables directement) sont les principales sources. Le droit de l'UE jouit de la primauté sur le droit national (CJUE, Costa c/ ENEL, 1964) et de l'effet direct (CJUE, Van Gend en Loos, 1963).</p>

        <h3>La responsabilite des Etats en droit international</h3>
        <p>Tout fait internationalement illicite d'un Etat engage sa <strong>responsabilite internationale</strong>. Les Articles de la CDI (Commission du droit international) sur la responsabilite de l'Etat (2001) codifient le droit coutumier : le fait illicite consiste en une action ou une omission imputable a l'Etat et violant une obligation internationale. Les consequences : obligation de cesser le comportement, de donner des garanties de non-repetition, de reparer (restitution, indemnisation, satisfaction). La reparation integrale est le principe directeur. Les contre-mesures (mesures non militaires en reponse a un fait illicite) sont encadrees : proportionnalite, notification prealable, cessation des mesures lors de la resolution du differend.</p>
""")

# ==========================================
# international/humanitaire
# ==========================================
pages['international/humanitaire']['content'] = replace_contenu(pages['international/humanitaire']['content'], """
        <h3>Les fondements du droit international humanitaire</h3>
        <p>Le <strong>droit international humanitaire</strong> (DIH), aussi appele droit de la guerre ou droit des conflits armes, est l'ensemble des regles qui, en temps de conflit arme, visent a limiter les effets de la guerre pour des raisons humanitaires. Il protege les personnes qui ne participent pas ou ne participent plus aux hostilites, et limite les methodes et moyens de guerre. Le DIH s'applique independamment de la licite ou de l'illicite du recours a la force (jus ad bellum) : il ne dit pas qui a le droit de faire la guerre, mais comment elle doit etre conduite (jus in bello).</p>
        <p>Les deux grandes branches du DIH sont le <strong>droit de Geneve</strong> (protection des victimes : blessés, prisonniers, civils) et le <strong>droit de La Haye</strong> (limitation des methodes et moyens de combat : armes interdites, conduite des hostilites). Ces branches sont aujourd'hui largement fusionnees dans les Protocoles additionnels de 1977.</p>
        <div class="highlight-box"><p><strong>La contribution d'Henry Dunant :</strong> en 1859, Henry Dunant, temoin de la bataille de Solferino, organise les soins aux blesses de toutes les parties. Son livre « Un souvenir de Solferino » (1862) inspire la creation du Comite international de la Croix-Rouge (CICR, 1863) et la premiere Convention de Geneve (1864), qui fonde le DIH moderne. Henry Dunant recoit le premier prix Nobel de la paix (1901).</p></div>

        <h3>Les Conventions de Geneve de 1949</h3>
        <p>Les quatre Conventions de Geneve de 1949 constituent la pierre angulaire du DIH. Elles sont ratifiees par 196 Etats — universellement ratifiees :</p>
        <ul>
          <li><strong>CG I :</strong> protection des blesses et malades dans les forces armees en campagne.</li>
          <li><strong>CG II :</strong> protection des blesses, malades et naufrages des forces armees sur mer.</li>
          <li><strong>CG III :</strong> traitement des prisonniers de guerre (POW) — droit de ne pas etre torture, de communiquer avec le CICR, de recevoir des colis, de ne donner que ses nom, grade, date de naissance et numero de matricule.</li>
          <li><strong>CG IV :</strong> protection des personnes civiles en temps de guerre — interdiction des deportations, des prises d'otages, des punitions collectives, des traitements inhumains.</li>
        </ul>
        <p>L'article 3 commun aux quatre conventions — parfois qualifie de « mini-convention » — s'applique aux conflits armes non internationaux (guerres civiles) et constitue le standard minimum : interdiction des executions sommaires, de la torture, des traitements humiliants, exigence d'un jugement par un tribunal regulier.</p>

        <h3>Les Protocoles additionnels de 1977 et le droit contemporain</h3>
        <p>Deux <strong>Protocoles additionnels</strong> ont ete adoptes en 1977 pour renforcer la protection dans les conflits modernes :</p>
        <ul>
          <li><strong>Protocole additionnel I (PAI) :</strong> relatif aux conflits armes internationaux. Renforce la protection des civils (principe de distinction, de proportionnalite, de precaution), reconnait comme combattants les mouvements de liberation nationale.</li>
          <li><strong>Protocole additionnel II (PAII) :</strong> relatif aux conflits armes non internationaux. Complementaire de l'article 3 commun — plus de protections mais champ d'application plus restrictif.</li>
        </ul>
        <p>Le droit humanitaire contemporain interdit certaines armes specifiques : armes chimiques (Convention de 1993, 193 Etats parties), armes biologiques (1975), mines antipersonnel (Traite d'Ottawa, 1997), bombes a sous-munitions (Convention d'Oslo, 2008), armes a laser aveuglantes. Le debat sur l'interdiction des « systemes d'armes autonomes letaux » (robots tueurs) est au coeur des negociations actuelles.</p>

        <h3>Les principes fondamentaux du DIH</h3>
        <p>Le DIH repose sur quatre principes coutumiers fondamentaux :</p>
        <ul>
          <li><strong>Le principe de distinction :</strong> les parties au conflit doivent en tout temps distinguer entre civils et combattants, entre biens civils et objectifs militaires. Les attaques doivent etre dirigees uniquement contre des objectifs militaires.</li>
          <li><strong>Le principe de proportionnalite :</strong> il est interdit de lancer une attaque causant des pertes civiles incidentes excessives par rapport a l'avantage militaire concret et direct attendu.</li>
          <li><strong>Le principe de precaution :</strong> les parties doivent prendre des precautions pour eviter ou minimiser les pertes civiles (choix des armes, horaires, avertissements).</li>
          <li><strong>L'interdiction de causer des maux superflus :</strong> les methodes et moyens de guerre qui causent des souffrances inutiles ou des maux superflus sont interdits (balles dum-dum, torture).</li>
        </ul>

        <h3>Le Comite international de la Croix-Rouge (CICR) et l'application du DIH</h3>
        <p>Le <strong>CICR</strong> est le gardien du DIH. Organisation neutre, independante et impartiale basee a Geneve, il visite les prisonniers de guerre et les detenus civils, organise les secours aux victimes des conflits, retrouve les personnes disparues et sensibilise les forces armees au respect du DIH. Son mandat specifique est confere par les Conventions de Geneve.</p>
        <p>L'application du DIH est complexe : violations frequentes (bombardements de civils, torture, armes chimiques), impunite persistante. Les mecanismes de mise en oeuvre incluent : la responsabilite penale individuelle des auteurs de crimes de guerre (devant les tribunaux nationaux ou internationaux), la responsabilite des Etats, les commissions d'enquete, la pression diplomatique et le rôle documentaire des ONG (Amnesty International, Human Rights Watch). La Cour penale internationale (CPI) est competente pour juger les crimes de guerre.</p>
""")

# ==========================================
# international/justice
# ==========================================
pages['international/justice']['content'] = replace_contenu(pages['international/justice']['content'], """
        <h3>La justice internationale : vue d'ensemble</h3>
        <p>La <strong>justice internationale</strong> designe l'ensemble des mecanismes juridictionnels internationaux permettant de regler les differends entre Etats, de juger les individus pour des crimes internationaux graves, ou de proteger les droits de l'homme. Son developpement est recent : avant le XXe siecle, le droit international ne reconnaissait guere que l'arbitrage pour regler les differends interétatiques. Le XXe siecle a vu l'emergence de juridictions permanentes et la notion de responsabilite penale individuelle pour crimes internationaux.</p>
        <p>Les juridictions internationales se distinguent par leur objet (differends interétatiques, droits de l'homme, droit penal international), leur composition et leur portee geographique (universelle, regionale). Le consentement des Etats demeure, en principe, le fondement de la juridiction internationale — ce qui en est la principale limite.</p>

        <h3>La Cour internationale de justice (CIJ)</h3>
        <p>La <strong>CIJ</strong> (La Haye, creee en 1945) est l'organe judiciaire principal des Nations Unies. Elle est composee de 15 juges elus pour 9 ans par l'Assemblee generale et le Conseil de securite de l'ONU, renouvelables. Elle a deux fonctions :</p>
        <ul>
          <li><strong>Competence contentieuse :</strong> regle les differends entre Etats consentants — clause compromissoire dans un traite, declaration d'acceptation de la juridiction obligatoire (art. 36 §2 Statut : clause facultative), ou accord special. Ses arrets sont definitifs, obligatoires et sans appel. L'execution peut etre demandee au Conseil de securite (art. 94 Charte ONU).</li>
          <li><strong>Competence consultative :</strong> donne des avis juridiques non contraignants a la demande d'organes de l'ONU et d'agences specialisees. Tres influents en pratique (avis sur la construction du mur en Palestine, 2004 ; sur la declaration d'independance du Kosovo, 2010).</li>
        </ul>
        <div class="highlight-box"><p><strong>Limites de la CIJ :</strong> la CIJ ne peut intervenir qu'avec le consentement des Etats parties — les grandes puissances refusent souvent sa juridiction sur des questions sensibles. L'execution de ses arrets depend de la bonne volonte des Etats et du Conseil de securite (paralysable par le veto). Malgre ces limites, elle a joue un role important dans le developpement du droit international : delimitation de frontieres maritimes, responsabilite des Etats, interpretation des traites.</p></div>

        <h3>La Cour penale internationale (CPI)</h3>
        <p>La <strong>CPI</strong> (La Haye, Statut de Rome 1998, en vigueur 2002) est la premiere juridiction penale internationale permanente. Elle est competente pour juger les individus — et non les Etats — pour les crimes les plus graves : genocide, crimes contre l'humanite, crimes de guerre, et crime d'agression (depuis 2018). Elle est composee de 18 juges elus pour 9 ans par les Etats parties.</p>
        <p>Le <strong>principe de complementarite</strong> est fondamental : la CPI n'intervient que si les Etats sont incapables ou n'ont pas la volonte de poursuivre genuinement (par opposition au principe de substitution). Elle a ete saisie principalement pour des situations africaines (Congo, Ouganda, Soudan, Lybie), ce qui lui a valu des critiques de biais anti-africain. Le retrait de certains Etats africains et le non-adherence des USA, de la Russie, de la Chine ou de l'Inde limitent sa portee. Ses mandats d'arret incluent des chefs d'Etat en exercice (Omar el-Bachir du Soudan, Poutine en 2023).</p>

        <h3>Les tribunaux penaux internationaux ad hoc</h3>
        <p>Avant la CPI, des <strong>tribunaux ad hoc</strong> ont ete crees par le Conseil de securite de l'ONU pour juger les auteurs de crimes commis dans des conflits specifiques :</p>
        <ul>
          <li><strong>TPIY (1993) :</strong> Tribunal penal international pour l'ex-Yougoslavie (La Haye). A juge les crimes commis lors des guerres des annees 1990 (Bosnie, Kosovo, Croatie). Parmi les condamnes : Radovan Karadzic (genocide de Srebrenica), Ratko Mladic. Termine ses travaux en 2017, remplace par le Mecanisme international residuel (IRMCT).</li>
          <li><strong>TPIR (1994) :</strong> Tribunal penal international pour le Rwanda (Arusha). A juge les auteurs du genocide de 1994 (environ 800 000 victimes en 100 jours). Parmi les condamnes : Jean-Paul Akayesu (premier jugement pour genocide par un tribunal international). Clos en 2015.</li>
          <li><strong>TSSL (2002) :</strong> Tribunal special pour la Sierra Leone (hybride, droit international et droit sierra-leonais). A condamne Charles Taylor, ancien president du Liberia, pour crimes contre l'humanite — premier chef d'Etat condamne par une juridiction internationale depuis Nuremberg.</li>
        </ul>

        <h3>Les juridictions regionales de droits de l'homme</h3>
        <p>Plusieurs systemes regionaux de protection des droits de l'homme disposent de juridictions specifiques :</p>
        <ul>
          <li><strong>Cour europeenne des droits de l'homme (CEDH, Strasbourg) :</strong> competente pour les 46 Etats membres du Conseil de l'Europe. Peut etre saisie par tout ressortissant apres epuisement des voies internes. Ses arrets sont contraignants. Plus de 100 000 requetes pendantes — victime de son succes.</li>
          <li><strong>Cour interamericaine des droits de l'homme (San Jose, Costa Rica) :</strong> protege les droits garantis par la Convention americaine des droits de l'homme (1969). Competence contentieuse (Etats) et consultative.</li>
          <li><strong>Cour africaine des droits de l'homme et des peuples (Arusha, Tanzanie) :</strong> fondee sur la Charte africaine des droits de l'homme et des peuples (1981). Juridiction plus recente (operationnelle depuis 2004), moins utilisee.</li>
        </ul>
        <p>Ces juridictions regionales jouent un role capital dans l'effectivite des droits fondamentaux et contribuent au developpement progressif du droit international des droits de l'homme par leur jurisprudence.</p>
""")

# Check lengths
for key in ['constitutionnel/separation', 'international/sources', 'international/humanitaire', 'international/justice']:
    print(f"{key}: {len(pages[key]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK - batch 3")
