#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Pass 2 : enrichit les articles de litterature-fr encore sous 15000 chars."""

import json

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/litterature-fr.json'

ENRICHMENTS = {

    'classicisme/racine-corneille': """
        <h3>Le jansenisme et la tragedie racinienne</h3>
        <p>La formation de Racine a Port-Royal, centre intellectuel du <strong>jansenisme</strong>, est determinante pour comprendre son theatre. Le jansenisme soutient que l'homme est radicalement corrompu depuis le peche originel et que sa volonte est impuissante a resister a la concupiscence sans la grace divine. Cette vision sombre irrigue toute l'oeuvre racinienne : ses personnages sont prisonniers de passions que leur raison reconnait comme mauvaises mais qu'ils ne peuvent maitriser. Phedre sait que son amour est criminel, mais elle ne peut l'eteindre.</p>

        <h3>Berenice : la tragedie sans mort</h3>
        <p><em>Berenice</em> (1670) est une tragedie sans meurtre ni sang, fondee uniquement sur le dechirement de la separation. Titus, devenu empereur de Rome, doit renoncer a Berenice, reine de Judee qu'il aime, car Rome n'accepte pas qu'un roi epouse une etrangere. Elle fut creee la meme semaine qu'une <em>Berenice</em> de Corneille, donnant lieu a une celebre joute dramaturgique.</p>
        <div class="highlight-box">
          <p><strong>Le vocabulaire de l'aveu :</strong> Racine place au coeur de ses pieces le moment de l'aveu — le personnage revele sa passion malgre lui, dans une scene qui le condamne. L'aveu de Phedre a Hippolyte est l'exemple le plus celebre : quand Thesee revient, cette revelation devient une catastrophe irremediable.</p>
        </div>

        <h3>L'heritage classique et la posterite</h3>
        <p>Racine abandonne le theatre en 1677 apres la cabale montee contre <em>Phedre</em>. Il revient brievement au theatre avec <em>Esther</em> (1689) et <em>Athalie</em> (1691), deux tragedies bibliques ecrites pour les eleves de Saint-Cyr. Ces dernieres oeuvres sont considerees par certains critiques comme ses sommets.</p>
        <p>Corneille reste, avec Racine et Moliere, l'un des trois grands classiques du theatre francais. Voltaire, Stendhal, Peguy ont chacun repris la querelle Corneille-Racine a l'aune de leurs propres valeurs. Stendhal, dans <em>Racine et Shakespeare</em> (1823), defend Shakespeare contre Racine au nom du romantisme et de la verite psychologique — illustrant comment cette querelle traverse les siecles.</p>""",

    'moyen-age/poesie-medievale': """
        <h3>Francois Villon : la Ballade des pendus</h3>
        <p>La <em>Ballade des pendus</em> est le poeme le plus celebre du XVe siecle francais. Compose alors que Villon attendait d'etre pendu (il sera finalement banni), il demande aux passants de ne pas juger les corps des supplies au gibet. Le refrain — <em>Mais priez Dieu que tous nous veuille absoudre !</em> — frappe par sa violence et son realisme cru. La mort n'est plus ici un theme rhetorique ; elle est vecue, concrete, terrifiante.</p>

        <h3>Christine de Pizan : la premiere voix feministe</h3>
        <p><strong>Christine de Pizan</strong> (vers 1364-1430) est la premiere femme de lettres professionnelle de la litterature francaise. Veuve a 25 ans, elle subvient a ses besoins en ecrivant. Elle attaque le <em>Roman de la Rose</em> de Jean de Meun pour sa misogynie dans la <em>Querelle du Roman de la Rose</em> (1401-1402), premier grand debat litteraire feministe. Son oeuvre majeure, <em>La Cite des Dames</em> (1405), imagine une cite allegorique habitee par les femmes illustres de l'histoire.</p>
        <div class="highlight-box">
          <p><strong>La danse macabre :</strong> au XVe siecle, la conscience obsedante de la mort engendre un genre artistique et poetique specifique ou la Mort entraine dans sa ronde des personnages de toutes conditions sociales. Ce theme, illustre sur les murs des cimetieres et mis en vers, traduit l'angoisse collective nee des epidemies de peste et des guerres de la periode.</p>
        </div>

        <h3>La poesie lyrique et l'heritage provencal</h3>
        <p>L'influence des troubadours s'etend bien au-dela de la France meridionale. En Italie, leur poesie inspire le <em>dolce stil novo</em> (Dante, Cavalcanti, Petrarque) qui codifiera l'amour idealise pour des siecles. En Allemagne, les Minnesanger adaptent les themes courtois en moyen-haut-allemand. Cette diffusion europeenne de la poesie medievale francaise et occitane est l'un des grands phenomenes culturels du Moyen Age.</p>

        <h3>Du Moyen Age a la Renaissance</h3>
        <p>La poesie medievale ne meurt pas brusquement avec la Renaissance. Clement Marot (1496-1544) est l'exemple parfait du passage : il maitrise les formes fixes medievales (rondeaux, ballades) tout en s'ouvrant aux influences antiques et italiennes. La Pleiade (Du Bellay, Ronsard) pretend rompre avec le Moyen Age et imposer de nouvelles formes (le sonnet, l'ode), mais l'heritage medieval resurface regulierement dans la poesie francaise, chez Verlaine pour Villon, au XXe siecle dans la chanson.</p>""",

    'xixe/baudelaire': """
        <h3>Les Fleurs du mal et la beaute moderne</h3>
        <p><strong>Charles Baudelaire</strong> (1821-1867) publie <em>Les Fleurs du mal</em> en 1857. Le recueil est immediatement condamne pour offense a la morale publique : six pieces sont censurees. Ce scandale accentue la reputation de Baudelaire comme figure maudite. L'oeuvre organise sa matiere en cycles : Spleen et Ideal, Tableaux parisiens, Le Vin, Fleurs du Mal, Revolte, La Mort. Cette architecture revele un parcours spirituel, une tentative d'elever la laideur et la souffrance jusqu'a la beaute.</p>

        <h3>Le spleen et l'ideal</h3>
        <p>L'opposition fondamentale de l'univers baudelairien est celle du <strong>spleen</strong> (l'ennui, la melancolie, l'accablement existentiel) et de l'<strong>ideal</strong> (la beaute, l'aspiration vers le haut, l'elevation spirituelle). Le spleen baudelairien n'est pas la simple tristesse romantique : c'est une experience du temps comme prison, de la conscience comme fardeau. <em>Quand le ciel bas et lourd pese comme un couvercle</em> — l'image materialise une suffocation metaphysique.</p>
        <div class="highlight-box">
          <p><strong>La theorie des correspondances :</strong> dans le celebre poeme <em>Correspondances</em>, Baudelaire formule l'idee que la nature est une foret de symboles, que les sensations s'appellent et se repondent entre elles (les parfums, les couleurs, les sons). Cette synesthesie devient le programme du symbolisme : la poesie doit traduire les correspondances invisibles du monde sensible.</p>
        </div>

        <h3>La modernite et la ville</h3>
        <p>Baudelaire est le premier grand poete de la <strong>modernite urbaine</strong>. Dans les <em>Tableaux parisiens</em>, il fait de Paris — ses foules, ses ruelles, ses passantes, ses mendiants — la matiere meme de la poesie. Le poete est un <em>flaneur</em>, un observateur anonyme perdu dans la foule. La passante entrevue dans la rue (le poeme <em>A une passante</em>) devient le symbole de la beaute ephemere de la modernite, saisie dans l'instant d'une rencontre impossible.</p>

        <h3>L'heritage symboliste</h3>
        <p>Baudelaire est le maitre revendique de tous les symbolistes. Verlaine, Rimbaud, Mallarme le lisent et se forment a son contact. Rimbaud, dans sa celebre <em>Lettre du voyant</em> (1871), reconnait Baudelaire comme <em>le premier voyant, roi des poetes, un vrai Dieu.</em> Le symbolisme europeen — de Stefan George en Allemagne a Oscar Wilde en Angleterre — se reconnait dans l'heritage baudelairien. Ses <em>Petits poemes en prose</em> (posthumes, 1869) fondent par ailleurs le genre du poeme en prose, qui aura une longue descendance de Mallarme a Saint-John Perse.</p>""",

    'xixe/hugo': """
        <h3>Victor Hugo, poete avant tout</h3>
        <p><strong>Victor Hugo</strong> (1802-1885) est d'abord un poete d'une fertilite extraordinaire. Des <em>Odes et Ballades</em> (1822) aux <em>Contemplations</em> (1856), de <em>La Legende des siecles</em> (1859) a <em>L'Art d'etre grand-pere</em> (1877), son oeuvre poetique couvre pres de soixante ans. <em>Les Contemplations</em>, recueil du deuil apres la noyade de sa fille Leopoldine en 1843, est le sommet de sa poesie lyrique. Hugo y explore le rapport a la mort, a Dieu et a la nature dans des poemes d'une intensite bouleversante.</p>

        <h3>Victor Hugo romancier</h3>
        <p><em>Notre-Dame de Paris</em> (1831) ressuscite le Moyen Age et fait de la cathedrale gothique le personnage central d'un roman ou Quasimodo, Esmeralda et Frollo incarnent des forces contradictoires. <em>Les Miserables</em> (1862), ecrit en grande partie pendant l'exil, est l'un des romans les plus lus du monde. Jean Valjean, forcat repenti, est le symbole de la grace et de la redemption possible. L'oeuvre est aussi un document social extraordinaire sur la misere et l'injustice sous la monarchie de Juillet.</p>
        <div class="highlight-box">
          <p><strong>L'exil de Guernesey (1851-1870) :</strong> apres le coup d'etat de Napoleon III, Hugo s'exile volontairement pendant 19 ans. De Guernesey, il ecrit <em>Les Chatiments</em> (1853), pamphlet poetique contre le regime, et <em>Les Miserables</em>. Son retour triomphal en 1870 apres la chute du Second Empire confirme son statut de conscience morale de la France.</p>
        </div>

        <h3>Hugo dramaturge et theoricien</h3>
        <p>La preface de <em>Cromwell</em> (1827) est le manifeste du romantisme francais. Hugo y reclame la liberte contre les regles classiques et le melange du sublime et du grotesque. <em>Hernani</em> (1830) declenche la Bataille d'Hernani — affrontement entre classiques et romantiques dans la salle meme du Theatre-Francais. <em>Ruy Blas</em> (1838) est son chef-d'oeuvre dramatique, ou un laquais aime une reine dans une Espagne baroque et decadente.</p>

        <h3>La posterite hugolienne</h3>
        <p>Victor Hugo est le seul ecrivain francais a avoir eu des funerailles nationales (1885). Ses cendres sont transferees au Pantheon dans une ceremonie grandiose. Son oeuvre a ete adaptee dans toutes les formes artistiques : le musical <em>Les Miserables</em> (1980) de Boublil et Schonberg est l'un des spectacles les plus vus de l'histoire. Hugo reste le symbole de la litterature francaise engagee, humaniste et populaire, dont l'influence sur la culture mondiale est inegale parmi les ecrivains francais.</p>""",

    'xixe/flaubert-zola': """
        <h3>Gustave Flaubert et la question du style</h3>
        <p><strong>Gustave Flaubert</strong> (1821-1880) revolutionne la conception du roman par son obsession du <strong>style</strong>. Il peut passer des jours sur une seule phrase, cherchant le mot juste, la cadence parfaite. Ses lettres a Louise Colet, connues comme la <em>Correspondance</em>, sont un traite de poetique realiste : il y developpe la theorie du <em>style indirect libre</em>, technique narrative qui permet de fondre la voix du narrateur et celle du personnage sans guillemets ni verbe introducteur.</p>

        <h3>Madame Bovary et le bovarysme</h3>
        <p><em>Madame Bovary</em> (1857) est poursuivi pour outrage a la morale publique (comme <em>Les Fleurs du mal</em> la meme annee). Emma Bovary, femme de medecin de province consumee par les romans romantiques, est incapable de s'adapter au mediocre reel. Elle devient le symbole du <strong>bovarysme</strong> : la tendance a se percevoir autrement qu'on n'est, a fuir dans l'imaginaire pour combler l'insatisfaction du reel. Le mot entre dans le dictionnaire.</p>
        <div class="highlight-box">
          <p><strong>L'Education sentimentale (1869) :</strong> consideree par certains critiques comme le chef-d'oeuvre de Flaubert, cette oeuvre raconte l'echec d'une generation en suivant Frederic Moreau, jeune homme qui rate sa vie par inertie et illusions romantiques. Le roman saisit avec une precision clinique la mediocrite du Second Empire et la desillusion de 1848.</p>
        </div>

        <h3>Emile Zola et le roman-monde</h3>
        <p><strong>Emile Zola</strong> (1840-1902) construit les <em>Rougon-Macquart</em> (1871-1893), vingt romans qui retracent l'histoire naturelle et sociale d'une famille sous le Second Empire. Chaque roman explore un milieu specifique : les mines de charbon (<em>Germinal</em>, 1885), les grands magasins (<em>Au Bonheur des Dames</em>, 1883), le monde de la peinture (<em>L'Oeuvre</em>, 1886). Zola documente chaque roman par des enquetes de terrain rigoureuses — il descend dans les mines, visite les Halles, consulte des medecins.</p>

        <h3>L'affaire Dreyfus et le role de l'intellectuel</h3>
        <p>En 1898, Zola publie dans <em>L'Aurore</em> sa lettre <em>J'accuse !</em> au president de la Republique, denoncant la condamnation injuste du capitaine Dreyfus. Ce texte fonde le role moderne de l'intellectuel engage : un ecrivain connu utilise sa notoriete pour defendre une cause de justice. Zola est condamne pour diffamation et s'exile en Angleterre. La rehabilitation de Dreyfus en 1906 le justifie posthumement — Zola meurt en 1902, peut-etre assassine par un antidreyfusard.</p>""",

    'xxe/proust': """
        <h3>La Recherche : structure et projet</h3>
        <p><em>A la recherche du temps perdu</em> (1913-1927) est l'un des plus grands romans du XXe siecle mondial. L'oeuvre en sept volumes totalise plus de 3000 pages. Elle raconte, a la premiere personne, comment le narrateur remonte dans le temps a travers la memoire involontaire pour reconstituer sa vie passee et comprendre la nature du temps, de l'art et de l'identite. Le projet est a la fois autobiographique, philosophique et esthetique.</p>

        <h3>La memoire involontaire</h3>
        <p>Le motif fondateur de la <em>Recherche</em> est celui de la <strong>memoire involontaire</strong>. Au debut de <em>Du cote de chez Swann</em>, le narrateur adulte trempe une madeleine dans du the : le gout declenche une resurrection soudaine et totale du monde de son enfance a Combray. Cette distinction entre memoire volontaire (consciente, pauvre) et memoire involontaire (declenchee par une sensation, d'une richesse infinie) est l'une des contributions philosophiques majeures de Proust.</p>
        <div class="highlight-box">
          <p><strong>La phrase proustienne :</strong> Proust ecrit en phrases extremement longues, chargees de subordonnees et de parentheses, qui cherchent a rendre la simultaneite de la conscience. Une phrase peut occuper une page entiere, capturant non pas le fait, mais l'impression que le fait produit dans l'esprit du narrateur. Cette syntaxe est a la fois l'obstacle et la recompense de la lecture proustienne.</p>
        </div>

        <h3>Les personnages et la societe</h3>
        <p>La <em>Recherche</em> est aussi une comedie humaine du faubourg Saint-Germain et de la bourgeoisie parisienne de la Belle Epoque. Swann, le grand amateur d'art amoureux de la vulgaire Odette ; la duchesse de Guermantes, beaute aristocratique d'une mediocrite profonde ; Charlus, baron homosexuel d'une intelligence fulgurante — ces personnages sont parmi les plus memorables de la litterature francaise. Proust montre comment le snobisme social est une passion aussi puissante que l'amour.</p>

        <h3>Proust et l'art</h3>
        <p>Au coeur de la <em>Recherche</em> se trouve une meditation sur l'art comme seule forme de depassement du temps. Le peintre Elstir, le musicien Vinteuil, l'ecrivain Bergotte sont des figures d'artistes qui permettent au narrateur de comprendre que l'art seul peut fixer la realite perdue du temps. La conclusion du roman — <em>Le Temps retrouve</em> — est a la fois la resolution de la quete et le programme de l'oeuvre que le narrateur va maintenant ecrire : la <em>Recherche</em> elle-meme, dans un vertige autoreflexif remarquable.</p>""",

    'xxe/existentialisme': """
        <h3>Jean-Paul Sartre : l'existence precede l'essence</h3>
        <p><strong>Jean-Paul Sartre</strong> (1905-1980) formule la these centrale de l'existentialisme dans sa conference de 1945 : <em>l'existence precede l'essence.</em> Contrairement a un couteau (dont l'essence — la fonction — precede l'existence), l'homme n'a pas de nature predeterminee. Il est d'abord existence, puis se definit par ses choix. Cette these implique une liberte radicale et une responsabilite totale : l'homme est <em>condamne a etre libre.</em> Son roman <em>La Nausee</em> (1938) incarne cette philosophie : Roquentin decouvre l'absurdite de l'existence dans la contemplation d'une racine de marronnier.</p>

        <h3>Albert Camus et l'absurde</h3>
        <p><strong>Albert Camus</strong> (1913-1960) developpe une vision parallele mais distincte. Dans <em>Le Mythe de Sisyphe</em> (1942), il pose la question fondamentale : pourquoi ne pas se suicider dans un monde absurde ? Sa reponse est la revolte — maintenir la vie malgre et contre l'absurde. <em>L'Etranger</em> (1942), son roman le plus celebre, met en scene Meursault, homme incapable de simuler les emotions que la societe attend de lui. La rupture Sartre-Camus en 1952 sur la question du communisme est l'un des grands evenements intellectuels du XXe siecle.</p>
        <div class="highlight-box">
          <p><strong>Simone de Beauvoir et le feminisme existentialiste :</strong> <em>Le Deuxieme Sexe</em> (1949) applique les categories existentialistes a la condition feminine. La phrase celebre — <em>On ne nait pas femme : on le devient</em> — affirme que la feminite est une construction sociale, non une essence naturelle. Ce livre fonde le feminisme contemporain et reste un texte de reference mondial.</p>
        </div>

        <h3>Le theatre de l'absurde</h3>
        <p>Parallele a l'existentialisme, le <strong>theatre de l'absurde</strong> explore la condition humaine par la desintegration du langage et de la logique scenique. <strong>Samuel Beckett</strong> (1906-1989), irlandais d'expression francaise, ecrit <em>En attendant Godot</em> (1953) : deux clochards attendent indefiniment un Godot qui ne vient pas. Cette piece, sans intrigue traditionnelle, a revolutionne le theatre mondial. <strong>Eugene Ionesco</strong> (<em>La Cantatrice chauve</em>, 1950) montre le vide de la communication bourgeoise par des dialogues de non-sens.</p>

        <h3>L'engagement et ses limites</h3>
        <p>La notion sartrienne d'<strong>engagement</strong> — l'ecrivain doit prendre parti dans les luttes de son temps — domine la vie intellectuelle francaise des annees 1945-1970. Mais elle produit aussi des aveuglements : Sartre soutient le stalinisme trop longtemps, refuse le prix Nobel en 1964 pour rester libre. La generation suivante — les <em>nouveaux philosophes</em> (Glucksmann, Levy) — se construira precisement contre cet heritage en denoncant le totalitarisme au nom des droits de l'homme.</p>""",

    'xxe/nouveau-roman': """
        <h3>La contestation du roman traditionnel</h3>
        <p>Le <strong>Nouveau Roman</strong> est un mouvement litteraire francais des annees 1950-1970 qui conteste les conventions du roman balzacien : personnages psychologiquement constitues, narrateur omniscient, intrigue chronologique, illusion referentielle. Les nouveaux romanciers — <strong>Alain Robbe-Grillet</strong>, <strong>Nathalie Sarraute</strong>, <strong>Claude Simon</strong>, <strong>Michel Butor</strong>, <strong>Marguerite Duras</strong> — publient chez les Editions de Minuit. Robbe-Grillet theorise le mouvement dans <em>Pour un nouveau roman</em> (1963).</p>

        <h3>Robbe-Grillet et l'objectalisme</h3>
        <p><strong>Alain Robbe-Grillet</strong> (1922-2008) developpe dans <em>La Jalousie</em> (1957) une ecriture fondee sur la description minutieuse et neutre des objets, sans interpretation psychologique. Le narrateur n'est jamais nomme : c'est un mari jaloux dont la jalousie se manifeste uniquement dans la precision obsessionnelle de ses descriptions — la disposition des bananes dans un champ, les reflets sur un verre. L'intrigue amoureuse est deduite par le lecteur sans que le narrateur l'exprime jamais.</p>
        <div class="highlight-box">
          <p><strong>Nathalie Sarraute et les tropismes :</strong> Sarraute s'interesse aux micro-mouvements de la conscience — des impulsions infra-psychologiques qu'elle nomme <em>tropismes</em>, sur le modele de la biologie vegetale. Son oeuvre (<em>Tropismes</em>, 1939 ; <em>L'Ere du soupcon</em>, 1956) explore les dessous inconscients du dialogue social.</p>
        </div>

        <h3>Claude Simon et la memoire fragmentee</h3>
        <p><strong>Claude Simon</strong> (1913-2005), prix Nobel en 1985, ecrit des romans qui fragmentent la temporalite et melent les niveaux temporels dans un flux de conscience proche de Faulkner et Proust. <em>La Route des Flandres</em> (1960) reconstruit la debacle de mai 1940 a travers les fragments de memoire d'un cavalier. Le recit refuse la linearite : les images se superposent, les phrases s'enchevetrent sur plusieurs pages.</p>

        <h3>L'influence et la posterite</h3>
        <p>Le Nouveau Roman a profondement influence la litterature mondiale. En France, il ouvre la voie a l'OuLiPo (Perec, Queneau), au texte theorique de Tel Quel (Sollers, Kristeva). A l'etranger, il influence la fiction experimentale americaine (John Barth, Thomas Pynchon). Paradoxalement, des auteurs comme Marguerite Duras finissent par concilier innovation formelle et large public (<em>L'Amant</em>, prix Goncourt 1984). Le Nouveau Roman a change les regles du jeu romanesque, meme pour ceux qui n'y adheraient pas.</p>""",

    'xxe/contemporaine': """
        <h3>Patrick Modiano et la memoire trouee</h3>
        <p><strong>Patrick Modiano</strong> (ne en 1945, prix Nobel 2014) est l'ecrivain de la memoire fragmentee et de l'identite insaisissable. Ses romans se deroulent dans un Paris flottant entre l'Occupation et les annees 1970. Des personnages aux identites incertaines cherchent des personnes disparues ou tentent de reconstituer un passe trouble. <em>Dora Bruder</em> (1997) est son oeuvre la plus puissante : Modiano reconstitue la vie d'une adolescente juive disparue pendant la Shoah a partir d'une seule ligne d'annonce dans un journal de 1941.</p>

        <h3>Annie Ernaux et l'autosociobiographie</h3>
        <p><strong>Annie Ernaux</strong> (nee en 1940, prix Nobel 2022) pratique une ecriture qu'elle nomme elle-meme autosociobiographique : a travers son experience personnelle (origine ouvriere, ascension sociale, avortement clandestin, deuil d'un parent), elle analyse les determinismes sociaux et les rapports de classe. <em>La Place</em> (1983) raconte la vie de son pere ouvrier puis epicier. <em>Les Annees</em> (2008) est une autobiographie collective, racontee au <em>on</em>, qui retrace l'histoire de toute une generation francaise.</p>
        <div class="highlight-box">
          <p><strong>Michel Houellebecq et la societe liberale :</strong> Ses romans (<em>Les Particules elementaires</em>, 1998 ; <em>Soumission</em>, 2015) diagnostiquent avec une lucidite desabusee les pathologies du liberalisme : desocialisation, effondrement du desir, nihilisme consumériste. Son style plat et son pessimisme radical divisent la critique mais le placent au coeur des debats contemporains.</p>
        </div>

        <h3>L'autofiction et ses figures</h3>
        <p>L'<strong>autofiction</strong>, terme forge par Serge Doubrovsky en 1977, designe un recit ou l'auteur se prend lui-meme pour personnage de fiction. Ce genre hybride, entre autobiographie et roman, s'est impose comme la forme dominante de la litterature francaise contemporaine. <strong>Edouard Louis</strong> (<em>En finir avec Eddy Bellegueule</em>, 2014), <strong>Christine Angot</strong>, <strong>Camille Laurens</strong> — tous pratiquent cette ecriture qui efface la frontiere entre le vecu et la fiction, entre l'intime et le politique.</p>

        <h3>Les Prix litteraires et le champ litteraire</h3>
        <p>Le champ litteraire francais reste structure par un systeme de prix dont le <strong>prix Goncourt</strong> (cree en 1903) est le plus influence. Il assure a son laureat des ventes considerables et une visibilite internationale. Les autres prix majeurs — prix Femina, prix Medicis, prix Renaudot — participent d'un marche de la reconnaissance symbolique. Ce systeme est critique pour son parisianocentrisme, mais il constitue un element structurant unique de la vie culturelle francaise.</p>""",

    'xxe/francophone': """
        <h3>La negritude : Cesaire et Senghor</h3>
        <p>Le mouvement de la <strong>negritude</strong> nait a Paris dans les annees 1930 autour de trois etudiants : <strong>Aime Cesaire</strong> (Martinique), <strong>Leopold Sedar Senghor</strong> (Senegal) et <strong>Leon-Gontran Damas</strong> (Guyane). Face a l'assimilation coloniale qui nie la culture africaine, ils affirment la valeur et la beaute de la culture negro-africaine. Le <em>Cahier d'un retour au pays natal</em> de Cesaire (1939) est le manifeste poetique de ce mouvement : un long poeme en vers libres qui celebre la Martinique, la condition noire et la revolte contre le colonialisme.</p>

        <h3>Leopold Sedar Senghor, poete et philosophe</h3>
        <p><strong>Leopold Sedar Senghor</strong> (1906-2001) est la figure la plus complexe de la negritude. Poete (<em>Chants d'ombre</em>, 1945 ; <em>Ethiopiques</em>, 1956), il est aussi le premier president du Senegal independant (1960-1980) et le premier Africain elu a l'Academie francaise (1983). Sa conception de la negritude valorise une <em>raison intuitive</em> africaine, par opposition a la raison analytique europeenne. Cette vision, critiquee pour son essentialisme, reste une contribution majeure a la pensee africaine.</p>
        <div class="highlight-box">
          <p><strong>Frantz Fanon et la decolonisation :</strong> <em>Les Damnes de la terre</em> (1961), prefacee par Sartre, theorise la violence de la colonisation et la necessite de la violence de la decolonisation. Fanon, psychiatre martiniquais engage dans la guerre d'Algerie, analyse les traumatismes psychologiques du colonise. Ce texte devient la reference des mouvements de liberation du Tiers-Monde.</p>
        </div>

        <h3>La litterature du Maghreb</h3>
        <p>La litterature maghrebine de langue francaise connait son essor dans les annees 1950-1970, autour de la guerre d'Algerie. <strong>Mohammed Dib</strong> (<em>La Grande Maison</em>, 1952) et <strong>Mouloud Feraoun</strong> decrivent la vie des Algeriens pendant la colonisation. <strong>Assia Djebar</strong> (1936-2015), premiere Algerienne elue a l'Academie francaise (2005), explore la condition des femmes algeriennes entre tradition et modernite dans <em>L'Amour, la fantasia</em> (1985). <strong>Tahar Ben Jelloun</strong> (Maroc, prix Goncourt 1987 pour <em>La Nuit sacree</em>) est aujourd'hui la figure la plus connue de cette litterature a l'international.</p>

        <h3>Les litteratures francophones des Antilles et d'ailleurs</h3>
        <p>La <strong>Creolite</strong>, theorisee par <strong>Patrick Chamoiseau</strong>, <strong>Raphael Confiant</strong> et Jean Bernabe dans l'<em>Eloge de la creolite</em> (1989), succede a la negritude en affirmant la specificite culturelle antillaise — ni africaine, ni europeenne, mais creole. <em>Texaco</em> de Chamoiseau (prix Goncourt 1992) reconstruit l'histoire de la Martinique a travers la voix d'une vieille femme. Du Quebec (<strong>Gabrielle Roy</strong>) a la Belgique (<strong>Amelie Nothomb</strong>), la francophonie litteraire offre une diversite de voix qui enrichit et defie la litterature hexagonale.</p>""",

    'xixe/romantisme': """
        <h3>Le romantisme comme revolution esthetique</h3>
        <p>Le romantisme francais est d'abord une rebellion contre les regles classiques heritees du XVIIe siecle. La <strong>Bataille d'Hernani</strong> (1830) est le symbole de cette revolution : lors de la premiere d'<em>Hernani</em> de Hugo au Theatre-Francais, les partisans du classicisme sifflent, cependant que les romantiques enthousiastes (Theophile Gautier dans son celebre gilet rouge, Nerval, Berlioz) applaudissent. Cette joute theatrale illustre le choc entre deux conceptions du beau.</p>
        <div class="highlight-box">
          <p><strong>Le cenacle romantique :</strong> les romantiques se reunissent en cenacles — salons litteraires informels. Le premier cenacle, chez Hugo rue Notre-Dame-des-Champs, reunit Vigny, Sainte-Beuve, Lamartine, Musset. Ces reunions faconnent une generation litteraire solidaire qui se soutient mutuellement dans la presse et les theatres.</p>
        </div>

        <h3>La poesie romantique : Lamartine et Vigny</h3>
        <p><strong>Alphonse de Lamartine</strong> (1790-1869) inaugure la poesie romantique francaise avec les <em>Meditations poetiques</em> (1820). Le celebre poeme <em>Le Lac</em>, ecrit apres la mort de sa bien-aimee Julie Charles, fonde le lyrisme romantique du deuil et de la nature consolatrice. <strong>Alfred de Vigny</strong> (1797-1863) represente la veine philosophique du romantisme : <em>Les Destinees</em> (posthumes, 1864) developpent une meditation stoicienne sur le silence de Dieu et la grandeur solitaire du poete.</p>

        <h3>Musset et le mal du siecle</h3>
        <p><strong>Alfred de Musset</strong> (1810-1857) est le poete du <strong>mal du siecle</strong> par excellence. Sa <em>Confession d'un enfant du siecle</em> (1836) diagnostique l'etat d'une generation nee trop tard pour les epopees napoleoniennes. Les <em>Nuits</em> (1835-1837) — quatre poemes dialogues entre le Poete et la Muse — expriment la souffrance amoureuse apres la rupture avec George Sand avec une intensite lyrique rarement egalee.</p>

        <h3>Le romantisme et l'histoire</h3>
        <p>Le romantisme se passionne pour l'histoire, notamment le Moyen Age et la Renaissance, en reaction contre le rationalisme des Lumieres. Walter Scott en Angleterre (<em>Ivanhoe</em>, 1820) inspire les romanciers francais. Dumas (<em>Les Trois Mousquetaires</em>, 1844 ; <em>Le Comte de Monte-Cristo</em>, 1844) vulgarise l'histoire-spectacle avec un genie narratif sans equivalent. <strong>Theophile Gautier</strong>, Alfred de Vigny (<em>Cinq-Mars</em>, 1826) et Prosper Merimee (<em>Chronique du regne de Charles IX</em>, 1829) cultivent le roman historique avec une rigueur documentaire plus grande.</p>""",

    'xixe/realisme-naturalisme': """
        <h3>Stendhal et le roman psychologique</h3>
        <p><strong>Stendhal</strong> (Henri Beyle, 1783-1842) est le precurseur du realisme. <em>Le Rouge et le Noir</em> (1830) retrace l'ascension sociale et la chute de Julien Sorel, fils de charpentier brilliant mais ambitieux, dans une societe de la Restauration ou le talent ne suffit pas. Stendhal definit le roman comme <em>un miroir que l'on promene le long d'un chemin</em> : metaphore du realisme comme enregistrement fidele du monde social.</p>
        <div class="highlight-box">
          <p><strong>Balzac et La Comedie humaine :</strong> <strong>Honore de Balzac</strong> (1799-1850) construit une oeuvre colossale de 90 romans et nouvelles relies par des personnages recurrents. Ce projet encyclopedique, sous-titre <em>La Comedie humaine</em> en reference a Dante, ambitionne de couvrir l'ensemble de la societe francaise. Balzac peint avec une force inegalee l'argent comme passion dominante de la modernite.</p>
        </div>

        <h3>Guy de Maupassant, maitre de la nouvelle</h3>
        <p><strong>Guy de Maupassant</strong> (1850-1893), forme par Flaubert, excelle dans la <strong>nouvelle</strong> — forme breve, concentree, a effet de chute. Il publie pres de 300 nouvelles qui decrivent avec une precision clinique la societe normande, la guerre de 1870 (<em>Boule de suif</em>, 1880), la vie parisienne et la montee de la folie. <em>Bel-Ami</em> (1885) est son roman le plus accompli : un arriviste sans scrupules conquiert Paris par les femmes et la presse, dans une satire ferocee du journalisme et de la Troisieme Republique.</p>

        <h3>Le naturalisme apres Zola</h3>
        <p>Le naturalisme zolien genere une ecole : les freres Goncourt (<em>Germinie Lacerteux</em>, 1865), Alphonse Daudet (<em>Fromont et Risler</em>, 1874), Joris-Karl Huysmans (avant sa conversion au symbolisme). Mais le naturalisme se heurte a des limites : le determinisme biologique et social qu'il postule semble reducteur. Huysmans, auteur naturaliste, finit par ecrire <em>La-Bas</em> (1891), plonge dans le satanisme medievalisant — signe que le positivisme naturaliste ne suffit pas a combler toutes les aspirations de la fin du XIXe siecle.</p>""",
}


def insert_before_quiz(content, new_html):
    patterns = [
        '</div>\n    </section>\n\n    <section class="content-section" id="quiz">',
        '</div>\n    </section>\n    <section class="content-section" id="quiz">',
        '</div>\n      </section>\n      <section class="content-section" id="quiz">',
    ]
    for pat in patterns:
        idx = content.find(pat)
        if idx != -1:
            return content[:idx] + new_html + '\n' + content[idx:]

    quiz_idx = content.find('<section class="content-section" id="quiz">')
    if quiz_idx != -1:
        close_section = content.rfind('</section>', 0, quiz_idx)
        if close_section != -1:
            return content[:close_section] + new_html + '\n    </section>\n    ' + content[quiz_idx:]

    return content


def main():
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    enriched_count = 0
    for page_key, new_html in ENRICHMENTS.items():
        if page_key in data['pages']:
            page = data['pages'][page_key]
            if page.get('type') == 'lesson':
                old_len = len(page['content'])
                if old_len >= 15000:
                    print(f"SKIP {page_key}: already {old_len} chars")
                    continue
                new_content = insert_before_quiz(page['content'], new_html)
                new_len = len(new_content)
                if new_len > old_len:
                    page['content'] = new_content
                    print(f"Enriched {page_key}: {old_len} -> {new_len} chars (+{new_len-old_len})")
                    enriched_count += 1
                else:
                    print(f"WARNING: no insertion found for {page_key}")
        else:
            print(f"WARNING: page not found: {page_key}")

    with open(INPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"\nDone: {enriched_count} pages enriched.")


if __name__ == '__main__':
    main()
