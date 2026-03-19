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
# international/mer
# ==========================================
pages['international/mer']['content'] = replace_contenu(pages['international/mer']['content'], """
        <h3>La Convention des Nations Unies sur le droit de la mer (UNCLOS)</h3>
        <p>La <strong>Convention des Nations Unies sur le droit de la mer</strong> (UNCLOS, Montego Bay, 10 decembre 1982, en vigueur 1994) est l'instrument fondateur du droit international de la mer. Surnommee la « Constitution des oceans », elle definit les droits et obligations des Etats dans les espaces maritimes, fixe les regimes juridiques des differentes zones, encadre l'exploitation des ressources et organise la resolution des differends. Ratifiee par 168 Etats, elle est consideree comme un instrument de droit coutumier meme pour les non-parties (USA).</p>
        <div class="highlight-box"><p><strong>L'histoire du droit de la mer :</strong> avant l'UNCLOS, les regles etaient fragmentees. La these du « mare liberum » (mer libre) de Grotius (1609) s'opposait a la revendication d'une mer territoriale. Les Conventions de Geneve de 1958 (droit de la mer) ont constitue une premiere codification. L'UNCLOS III (1973-1982) a abouti a un compromis global en creant notamment la Zone economique exclusive et l'Autorite internationale des fonds marins.</p></div>

        <h3>Les zones maritimes et leurs regimes</h3>
        <p>L'UNCLOS etablit une serie de zones maritimes definies a partir de la ligne de base (en general la laisse de basse mer) :</p>
        <ul>
          <li><strong>Les eaux interieures :</strong> en deca de la ligne de base — souverainete complete de l'Etat cotier. Aucun droit de passage inoffensif pour les navires etrangers.</li>
          <li><strong>La mer territoriale (art. 2-32 UNCLOS) :</strong> jusqu'a 12 milles nautiques. Souverainete de l'Etat cotier, sous reserve du droit de passage inoffensif des navires etrangers (art. 17 : passage continu, rapide, non prejudiciable a la paix ou a la securite).</li>
          <li><strong>La zone contigue (art. 33) :</strong> 12 a 24 milles. L'Etat cotier peut exercer des controles pour prevenir ou punir les violations de ses lois douanieres, fiscales, sanitaires ou d'immigration.</li>
          <li><strong>La zone economique exclusive - ZEE (art. 55-75) :</strong> jusqu'a 200 milles. L'Etat cotier dispose de droits souverains sur les ressources biologiques et minerales (peche, hydrocarbures, energie maremotrice) et de droits de juridiction (installations, recherche scientifique, protection de l'environnement). Les autres Etats conservent la liberte de navigation et de survol.</li>
          <li><strong>Le plateau continental (art. 76-85) :</strong> prolongement naturel du territoire terrestre jusqu'a 200 milles (ou au-dela si prolongement physique demonstre). Droits souverains exclusifs sur les ressources du sol et du sous-sol (hydrocarbures, minerais).</li>
          <li><strong>La haute mer (art. 86-120) :</strong> au-dela des zones nationales. Liberte de navigation, de survol, de pose de cables, de pehe, de recherche scientifique. Aucun Etat ne peut revendiquer de souverainete.</li>
          <li><strong>La Zone internationale des fonds marins (art. 133 et suivants) :</strong> le fond marin au-dela des juridictions nationales (« la Zone »). Patrimoine commun de l'humanite, gere par l'Autorite internationale des fonds marins (Kingston, Jamaique). Ses ressources ne peuvent etre exploitees qu'avec son autorisation.</li>
        </ul>

        <h3>La navigation maritime et les libertes de la mer</h3>
        <p>La haute mer est regie par la <strong>liberte de navigation</strong> (art. 87 UNCLOS). Chaque navire est soumis a la loi de son Etat du pavillon (juridiction et controle exclusifs, art. 92). Le principe du navire « en lieu flottant » fait du navire un territoire de l'Etat du pavillon. Les exceptions a la juridiction exclusive incluent : le droit de poursuite (art. 111), l'exercice de la juridiction universelle sur la piraterie (art. 101-105), la lutte contre le trafic de drogues (art. 108) et la traite de personnes.</p>
        <p>Le <strong>droit de passage en transit</strong> dans les detroits internationaux (Gibraltar, Bab el-Mandeb, Ormuz, Malacca) permet le passage continu des navires et aeronefs en haute mer a haute mer, meme par des eaux territoriales. Le <strong>passage dans les voies maritimes archipelagiques</strong> s'applique aux archipels (Philippines, Indonesie).</p>

        <h3>L'exploitation des ressources maritimes et la protection de l'environnement</h3>
        <p>L'UNCLOS encadre l'exploitation durable des ressources marines. Dans la ZEE, l'Etat cotier fixe le volume admissible des captures et permet aux navires etrangers de pecher dans la limite du « surplus ». La surpeche est un probleme mondial : selon la FAO, environ 35 % des stocks mondiaux sont exploites a des niveaux non durables. Les accords de peerche, l'Accord des Nations Unies sur les stocks chevauchants (1995) et les mesures des organisations regionales de gestion des peches (ORGP) tentent d'y remedier.</p>
        <p>L'article 192 UNCLOS oblige les Etats a proteger et a preserver le milieu marin. En 2023, un accord historique a ete adopte : le Traite en haute mer (BBNJ — Biodiversite au-dela des juridictions nationales), qui cree des aires marines protegeecs en haute mer et encadre l'utilisation des ressources genetiques marines. Premier instrument international specifiquement dedie a la conservation en haute mer, il constitue une avancee majeure pour la gouvernance oceanaire.</p>

        <h3>Le reglement des differends maritimes</h3>
        <p>L'UNCLOS dispose d'un systeme de reglement obligatoire des differends (Partie XV) :</p>
        <ul>
          <li><strong>Le Tribunal international du droit de la mer (TIDM, Hambourg) :</strong> juridiction permanente competente pour les differends relatifs a l'UNCLOS. Peut emettre des mesures conservatoires urgentes, notamment pour la prompte liberation des navires arraisonnes.</li>
          <li><strong>La Cour internationale de justice (CIJ) :</strong> competente si les parties en conviennent.</li>
          <li><strong>L'arbitrage (Annexe VII UNCLOS) :</strong> procedure par defaut si les parties ne s'accordent pas sur un autre mecanisme. A ete utilise dans des affaires importantes (Philippines c. Chine, 2016 : la Cour d'arbitrage a rejete les revendications chinoises en mer de Chine meridionale, decision ignoree par Pekin).</li>
        </ul>
""")

# ==========================================
# international/organisations
# ==========================================
pages['international/organisations']['content'] = replace_contenu(pages['international/organisations']['content'], """
        <h3>La notion d'organisation internationale</h3>
        <p>Une <strong>organisation internationale (OI)</strong> est une association d'Etats creee par traite, dotee d'une charte constitutive, de organes permanents et d'une personnalite juridique internationale distincte de celle de ses membres. Elle differe de la conference diplomatique (reunions ponctuelles) et de l'Etat federal (pas de souverainete propre). Les OI se distinguent par leur composition (universelles comme l'ONU, regionales comme l'UE), par leur objet (politique et securitaire, economique, humanitaire, technique) et par le degre d'integration de leurs membres.</p>
        <p>La personnalite juridique des OI a ete reconnue par la CIJ dans l'avis consultatif de 1949 (Reparation des dommages subis au service des Nations Unies) : l'ONU est un sujet de droit international, distinct de ses membres, capable d'agir sur la scene internationale et d'engager sa responsabilite.</p>
        <div class="highlight-box"><p><strong>Proliferation des organisations internationales :</strong> on denombre aujourd'hui plus de 300 organisations intergouvernementales internationales universelles ou regionales, auxquelles s'ajoutent des milliers d'ONG (organisations non gouvernementales). Cette multiplication, si elle reflete l'interdependance mondiale, cree des problemes de coherence, de chevauchement de mandats et de coordination. La question de la reforme des organisations universelles — notamment de l'ONU — est recurrente.</p></div>

        <h3>L'Organisation des Nations Unies (ONU)</h3>
        <p>L'<strong>ONU</strong> (fondee le 24 octobre 1945, 193 membres) est l'organisation internationale universelle par excellence. Ses buts (art. 1 Charte ONU) : maintenir la paix et la securite internationales, developper des relations amicales entre nations, realiser la cooperation internationale et etre un centre d'harmonisation des actions. Ses organes principaux :</p>
        <ul>
          <li><strong>L'Assemblee generale :</strong> tous les Etats membres (une voix chacun), debat et adopte des resolutions sur toutes les questions relevant de la Charte. Non contraignantes mais politiquement importantes. Vote a la majorite simple (questions ordinaires) ou des deux tiers (questions importantes).</li>
          <li><strong>Le Conseil de securite :</strong> 15 membres dont 5 permanents avec droit de veto (USA, Russie, Chine, France, UK). Principal responsable du maintien de la paix. Ses resolutions sous Chapitre VII (menace a la paix, rupture de la paix, acte d'agression) sont contraignantes pour tous les membres. L'usage du veto (notamment par la Russie et la Chine) a souvent paralyse l'action du CS, notamment en Syrie et en Ukraine.</li>
          <li><strong>Le Secretariat :</strong> dirige par le Secretaire general (actuellement Antonio Guterres, depuis 2017), il assure la gestion administrative et joue un role de « bon office » diplomatique.</li>
          <li><strong>La CIJ :</strong> organe judiciaire principal.</li>
          <li><strong>Le Conseil economique et social (ECOSOC) :</strong> coordonne les travaux des agences specialisees.</li>
        </ul>

        <h3>L'Union europeenne : organisation d'integration</h3>
        <p>L'<strong>Union europeenne</strong> est une organisation d'integration regionale unique en son genre, fondee sur les traites de Rome (1957 : CEE et EURATOM), de Maastricht (1992 : UE), d'Amsterdam (1997), de Nice (2001) et de Lisbonne (2007). Elle est dotee d'une personnalite juridique propre depuis Lisbonne. Ses institutions principales :</p>
        <ul>
          <li><strong>Le Conseil europeen :</strong> reunions des chefs d'Etat et de gouvernement — oriente les politiques generales. Depuis Lisbonne, il a un President permanent (actuellement Antonio Costa).</li>
          <li><strong>Le Conseil de l'UE :</strong> representants des gouvernements nationaux, vote les actes legislatifs (avec le Parlement europeen), coordonne les politiques nationales.</li>
          <li><strong>Le Parlement europeen :</strong> 705 deputes elus au suffrage universel direct pour 5 ans. Co-legislateur (codecision) sur la majorite des sujets. Controle la Commission (motion de censure, vote du budget).</li>
          <li><strong>La Commission europeenne :</strong> gardienne des traites, monopole de l'initiative legislative, organe executif. 27 commissaires (un par Etat membre). Independante des gouvernements.</li>
          <li><strong>La Cour de justice de l'UE (CJUE) :</strong> assure l'interpretation uniforme du droit de l'UE, statue sur les manquements des Etats et les recours en annulation. Sa jurisprudence a profondement facon le droit europeen (primauté, effet direct).</li>
        </ul>

        <h3>Les organisations regionales de securite collective</h3>
        <p>Plusieurs organisations regionales participent a la securite collective :</p>
        <ul>
          <li><strong>L'OTAN (Organisation du Traite de l'Atlantique Nord, 1949, 32 membres) :</strong> alliance de defense collective (art. 5 du traite : l'attaque contre un membre est une attaque contre tous). Fondee pendant la Guerre froide pour contrebalancer l'URSS, elle a survécu et s'est elargie vers l'Est depuis 1991 — point de friction majeur avec la Russie (invasion de l'Ukraine, 2022).</li>
          <li><strong>L'Union africaine (UA, 2002, 55 membres) :</strong> succede a l'Organisation de l'unite africaine (OUA). Ambitionne de s'approcher du modele europeen avec un Parlement africain, une Cour africaine de justice, un Conseil de paix et de securite. Intervient militairement dans des conflits (Mali, Somalie).</li>
          <li><strong>L'Organisation des Etats americains (OEA, 1948, 35 membres) :</strong> favorise la democratie et les droits de l'homme dans les Ameriques. Systeme interamericain de protection des droits de l'homme (Cour interamericaine, Commission).</li>
          <li><strong>L'Organisation de Shanghai pour la cooperation (OCS, 2001) :</strong> Chine, Russie, Inde, Pakistan, Iran et autres. Organisation de securite et de cooperation en Asie centrale.</li>
        </ul>

        <h3>Les organisations economiques et financieres internationales</h3>
        <p>L'architecture economique internationale est dominee par les institutions de <strong>Bretton Woods</strong> (accords de 1944) :</p>
        <ul>
          <li><strong>Le Fonds monetaire international (FMI) :</strong> surveillance macroeconomique, assistance financiere aux pays en difficulte de balance des paiements (conditionnellement a des reformes structurelles). Gere les crises de change (crise asiatique 1997, crise europeenne 2010-2015).</li>
          <li><strong>La Banque mondiale :</strong> financement du developpement et lutte contre la pauvrete. Comprend plusieurs institutions (BIRD, IDA, IFC, MIGA).</li>
          <li><strong>L'Organisation mondiale du commerce (OMC, 1995, 164 membres) :</strong> succede au GATT (1947). Encadre les echanges commerciaux mondiaux, negocie les reductions tarifaires et non tarifaires, dispose d'un organe de reglement des differends commerciaux (ORD) — l'un des mecanismes les plus actifs de la justice internationale.</li>
        </ul>
""")

# Check lengths
for key in ['international/mer', 'international/organisations']:
    print(f"{key}: {len(pages[key]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/droit.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved OK - batch 4 (international continued)")
