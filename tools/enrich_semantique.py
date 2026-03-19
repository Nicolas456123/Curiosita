import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/langues.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

new_content = """<section class="content-section" id="introduction">
      <div class="section-header">
        <div class="section-num">01</div>
        <div class="section-info">
          <h2>Introduction</h2>
          <p>Comment les mots portent du sens</p>
        </div>
      </div>
      <p class="resume-text">La <strong>sémantique</strong> est l'étude du sens dans le langage. Comment un assemblage de sons ou de lettres peut-il signifier quelque chose ? Comment savons-nous que « chien » et « dog » désignent le même animal malgré des formes totalement différentes ? La sémantique cherche à répondre à ces questions fondamentales en analysant les relations entre les signes linguistiques et les concepts qu'ils représentent.</p>
      <div class="highlight-box">
        <p><strong>Sémantique vs Pragmatique :</strong> La sémantique étudie le sens des mots et des phrases hors contexte (le sens littéral). La pragmatique étudie le sens en contexte (l'intention du locuteur). « Il fait froid ici » signifie littéralement une observation de température (sémantique), mais peut être une demande implicite de fermer la fenêtre (pragmatique).</p>
      </div>
      <p class="resume-text">Ce cours explore les <strong>relations de sens</strong> entre les mots (synonymie, antonymie, hyponymie), les phénomènes de <strong>polysémie</strong> et d'<strong>homonymie</strong>, le rôle de la <strong>métaphore</strong> dans la pensée quotidienne, ainsi que les enjeux interculturels du sens et ses applications dans l'apprentissage des langues.</p>
    </section>

    <section class="content-section" id="contenu">
      <div class="section-header">
        <div class="section-num">02</div>
        <div class="section-info">
          <h2>En détail</h2>
          <p>Relations lexicales, sens figuré et enjeux interculturels</p>
        </div>
      </div>
      <div class="course-content">
        <h3>Les relations lexicales fondamentales</h3>
        <p>Les mots entretiennent entre eux des <strong>relations de sens</strong> systématiques qui structurent le lexique d'une langue comme un vaste réseau :</p>
        <p><strong>Synonymie</strong> — Deux mots de sens proche s'emploient dans des contextes similaires :</p>
        <ul>
          <li>rapide / vite / prompt / alerte / véloce</li>
          <li>maison / demeure / logis / habitation / foyer</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Important :</strong> La synonymie parfaite n'existe quasiment pas. Deux synonymes diffèrent toujours par le registre (« mourir » vs « décéder »), la connotation (« mince » vs « maigre ») ou le contexte d'emploi (« voiture » vs « véhicule »). C'est cette subtile différenciation qui donne à la langue sa richesse expressive.</p>
        </div>
        <p><strong>Antonymie</strong> — Deux mots de sens opposé, avec plusieurs types distincts :</p>
        <ul>
          <li><em>Antonymie graduable</em> : chaud / froid (il existe des intermédiaires : tiède, frais)</li>
          <li><em>Antonymie complémentaire</em> : vivant / mort (pas d'intermédiaire logique possible)</li>
          <li><em>Antonymie conversive</em> : acheter / vendre, prêter / emprunter (même relation vue de deux perspectives)</li>
          <li><em>Antonymie directionnelle</em> : monter / descendre, entrer / sortir</li>
        </ul>
        <p><strong>Hyponymie et Hyperonymie</strong> — Relation d'inclusion sémantique hiérarchique :</p>
        <ul>
          <li>« Rose » est un hyponyme de « fleur » : c'est un cas particulier inclus dans la catégorie</li>
          <li>« Fleur » est un hyperonyme de « rose » : c'est la catégorie générale</li>
          <li>« Rose », « tulipe » et « marguerite » sont des co-hyponymes : ils partagent le même hyperonyme</li>
          <li>La relation est hiérarchique : « animal » est hyperonyme de « mammifère », lui-même hyperonyme de « chien »</li>
        </ul>

        <h3>Polysémie et homonymie</h3>
        <p>La <strong>polysémie</strong> est le fait qu'un même mot ait plusieurs sens liés par une relation historique ou analogique :</p>
        <ul>
          <li>« Feuille » : feuille d'arbre, feuille de papier, feuille de calcul (extension métaphorique à partir de la forme plate)</li>
          <li>« Pied » : pied du corps, pied de table, pied de montagne, pied de vers (extension par analogie fonctionnelle)</li>
          <li>« Opération » : opération chirurgicale, opération militaire, opération mathématique (extension sémantique du concept d'action organisée)</li>
        </ul>
        <p>L'<strong>homonymie</strong> est le fait que deux mots d'étymologies distinctes aient la même forme sonore ou écrite, sans lien sémantique :</p>
        <ul>
          <li>« Avocat » : le fruit (de l'aztèque <em>ahuacatl</em>) / le juriste (du latin <em>advocatus</em>)</li>
          <li>« Son » : bruit / céréale / déterminant possessif (trois mots distincts qui se sont rejoints par coïncidence phonétique)</li>
          <li>« Louer » : prendre en location / couvrir d'éloges (deux verbes d'étymologie entièrement différente)</li>
        </ul>
        <div class="highlight-box">
          <p><strong>Polysémie vs Homonymie :</strong> La distinction est souvent une question de degré. Si les dictionnaires regroupent les sens sous une même entrée, c'est de la polysémie (les sens sont historiquement et conceptuellement liés). S'ils créent deux entrées distinctes, c'est de l'homonymie (les sens sont indépendants). La frontière n'est pas toujours nette et varie selon les dictionnaires.</p>
        </div>

        <h3>La métaphore conceptuelle</h3>
        <p>La métaphore n'est pas qu'une figure de style littéraire : elle structure notre <strong>pensée quotidienne</strong>. Les linguistes George Lakoff et Mark Johnson ont montré, dans leur ouvrage fondateur <em>Les Métaphores dans la vie quotidienne</em> (1980), que nos concepts abstraits sont systématiquement compris à travers des métaphores concrètes issues de l'expérience corporelle :</p>
        <ul>
          <li><strong>LE TEMPS EST DE L'ARGENT :</strong> « gagner du temps », « perdre du temps », « investir son temps », « dépenser son énergie »</li>
          <li><strong>LA VIE EST UN VOYAGE :</strong> « être à un carrefour », « tracer sa route », « faire fausse route », « arriver au bout du chemin »</li>
          <li><strong>LES IDÉES SONT DES OBJETS :</strong> « saisir une idée », « construire un argument », « démolir une théorie », « emballer une idée »</li>
          <li><strong>LA COLÈRE EST UN LIQUIDE CHAUD :</strong> « bouillir de colère », « déborder de rage », « exploser », « laisser échapper sa vapeur »</li>
          <li><strong>LES DISCUSSIONS SONT DES COMBATS :</strong> « défendre une position », « attaquer un argument », « démolir une thèse », « capituler »</li>
        </ul>
        <p>Ces métaphores ne sont pas arbitraires : elles s'ancrent dans notre expérience corporelle et sensorielle du monde — c'est le principe de la <em>cognition incarnée</em>. Comprendre l'abstraction via le concret serait un mécanisme cognitif universel, même si son expression varie d'une langue et d'une culture à l'autre.</p>

        <h3>Dénotation et connotation</h3>
        <p>Tout mot possède un sens <strong>dénotatif</strong> (la définition objective du dictionnaire) et un sens <strong>connotatif</strong> (les associations, jugements et émotions qu'il évoque culturellement) :</p>
        <ul>
          <li>« Maison » et « foyer » dénotent le même lieu, mais « foyer » connote la chaleur familiale, la sécurité et l'appartenance.</li>
          <li>« Manger », « se nourrir », « bouffer », « se sustenter » et « festoyer » dénotent la même action mais évoquent des registres sociaux et des attitudes très différentes.</li>
          <li>« Propagande » et « communication institutionnelle » désignent une même activité : l'une connote la manipulation, l'autre revendique la neutralité.</li>
          <li>« Migrant », « réfugié » et « expatrié » décrivent la même réalité de déplacement avec des connotations sociales et politiques radicalement différentes.</li>
        </ul>
        <p>Les connotations sont <strong>culturellement situées</strong> : un même mot peut avoir des associations opposées selon les communautés linguistiques et les époques. L'analyse des connotations est centrale en rhétorique, en analyse du discours politique et en marketing.</p>

        <h3>La sémantique cognitive et la théorie des prototypes</h3>
        <p>La théorie des <strong>prototypes</strong> (Eleanor Rosch, années 1970) révolutionne la sémantique en montrant que les catégories naturelles ne sont pas définies par des conditions nécessaires et suffisantes — comme le proposait la sémantique componentielle classique — mais organisées autour d'exemplaires typiques appelés prototypes.</p>
        <p>Un rouge-gorge est un oiseau plus « typique » qu'une autruche ou qu'un manchot. Pourtant, les trois sont biologiquement des oiseaux. Les frontières catégorielles sont floues (<em>fuzzy boundaries</em>), et les membres d'une catégorie ne sont pas tous égaux : certains sont plus centraux (typiques), d'autres plus périphériques (atypiques).</p>
        <ul>
          <li><strong>Effets de typicalité :</strong> les sujets jugent un rouge-gorge comme un meilleur exemple d'oiseau qu'un pingouin — même si les deux satisfont aux critères biologiques.</li>
          <li><strong>Attributs saillants :</strong> le prototype d'« oiseau » inclut « vole », « chante », « est petit » — des attributs qui ne s'appliquent pas à tous les oiseaux.</li>
          <li><strong>Ressemblances de famille :</strong> Wittgenstein avait anticipé cette idée : les membres d'une catégorie partagent un réseau de ressemblances partielles, sans qu'aucun trait commun ne soit partagé par absolument tous.</li>
        </ul>
        <p>Cette approche explique pourquoi les métaphores fonctionnent en exploitant les propriétés saillantes des prototypes, pourquoi l'acquisition du vocabulaire procède par exemplaires typiques avant de s'étendre aux cas périphériques. La théorie des prototypes est devenue un outil central en didactique des langues et en terminologie.</p>

        <h3>Isotopie et cohérence sémantique des textes</h3>
        <p>Le concept d'<strong>isotopie</strong> (Algirdas Julien Greimas, 1966) désigne la récurrence d'un sème — un trait sémantique élémentaire — dans un texte, créant une cohérence de sens qui dépasse celle de chaque phrase individuelle.</p>
        <p>Dans un texte sur la mer, les isotopies de l'eau, du mouvement, de l'infini et du danger se renforcent mutuellement et construisent un univers sémantique cohérent. L'analyse sémiotique des textes repose sur l'identification de ces réseaux isotopiques qui structurent la signification globale d'un discours.</p>
        <p>En littérature, les isotopies permettent de détecter des <strong>niveaux de sens multiples</strong> superposés : un texte peut comporter une isotopie littérale (la chasse) et une isotopie symbolique (la quête amoureuse) fonctionnant simultanément — c'est le principe de l'allégorie et de la polysémie textuelle.</p>
        <div class="highlight-box">
          <p><strong>La sémantique dans le traitement automatique du langage (TALN) :</strong> Les modèles de langue comme Word2Vec ou BERT représentent les mots comme des vecteurs dans un espace multidimensionnel, capturant les relations sémantiques par la proximité géométrique. L'analogie célèbre : « Roi » - « Homme » + « Femme » ≈ « Reine ». Ces modèles permettent de calculer automatiquement similarités, analogies et désambiguïsations — avec des performances qui rivalisent parfois avec les jugements humains pour certaines tâches.</p>
        </div>

        <h3>Pragmatique et actes de langage</h3>
        <p>La <strong>pragmatique</strong>, développée par J.L. Austin (<em>Quand dire c'est faire</em>, 1962) et John Searle, étudie comment les énoncés réalisent des <strong>actions dans le monde</strong> : promettre, ordonner, questionner, remercier, menacer, féliciter. Ces <em>actes de langage</em> ont trois dimensions complémentaires :</p>
        <ul>
          <li><strong>Dimension locutoire :</strong> ce qui est littéralement dit, le contenu propositionnel de l'énoncé</li>
          <li><strong>Dimension illocutoire :</strong> l'intention communicative (promettre, ordonner, demander, avertir…)</li>
          <li><strong>Dimension perlocutoire :</strong> l'effet produit sur l'interlocuteur (convaincre, effrayer, rassurer, motiver…)</li>
        </ul>
        <p>Maîtriser les conventions pragmatiques d'une langue — savoir quand une question est en réalité une requête, quand un compliment appelle une réfutation modeste, comment formuler un refus sans blesser — est une composante essentielle de la compétence communicative, souvent plus difficile à acquérir que la syntaxe ou le vocabulaire.</p>
        <div class="highlight-box">
          <p><strong>Implicature conversationnelle (Grice, 1975) :</strong> La communication efficace repose sur des maximes coopératives : quantité (dire assez, pas trop), qualité (dire la vérité), relation (être pertinent), manière (être clair). Leur violation délibérée crée des <em>implicatures</em> : « As-tu aimé le film ? — Il y avait de beaux costumes. » implique que le film était décevant dans l'ensemble, sans le dire explicitement. Reconnaître ces implicatures requiert une compétence pragmatique qui varie selon les cultures et les individus.</p>
        </div>

        <h3>Sémantique lexicale et apprentissage des langues</h3>
        <p>L'apprentissage du vocabulaire en langue étrangère ne se réduit pas à mémoriser des paires mot-traduction. La sémantique lexicale enseigne que chaque mot s'inscrit dans un réseau de relations (synonymes, antonymes, hyperonymes, collocations) qui définit son sens <strong>en opposition aux mots voisins</strong>.</p>
        <p>Le mot anglais <em>home</em> ne traduit pas exactement « maison » ni « foyer » : il occupe une position sémantique spécifique dans le réseau lexical anglais, incluant une dimension affective d'appartenance que ni <em>house</em> ni aucun équivalent français ne reproduit exactement. Les méthodes d'apprentissage du vocabulaire les plus efficaces — apprentissage en contexte, exploitation des champs sémantiques, méthode des associations — s'appuient sur ces réseaux relationnels plutôt que sur des associations isolées.</p>
        <p>La notion de <strong>collocation</strong> est cruciale en linguistique appliquée : certains mots vont naturellement ensemble dans une langue. En anglais, on dit <em>strong tea</em> (thé fort) mais <em>powerful car</em> (voiture puissante) — les deux adjectifs ne sont pas interchangeables même s'ils sont synonymes dans d'autres contextes. Maîtriser les collocations distingue un locuteur avancé d'un locuteur intermédiaire.</p>

        <h3>Faux-amis, intraduisibles et relativité sémantique</h3>
        <p>Les <strong>faux-amis</strong> (<em>false friends</em>) entre langues proches sont le piège sémantique classique de l'apprenant. Ces coïncidences formelles trompeuses résultent souvent d'une étymologie commune dont les deux langues ont divergé sémantiquement au fil du temps :</p>
        <ul>
          <li>Espagnol <em>embarazada</em> : enceinte, non pas embarrassée</li>
          <li>Anglais <em>library</em> : bibliothèque, non pas librairie</li>
          <li>Anglais <em>eventually</em> : finalement, non pas éventuellement</li>
          <li>Italien <em>parente</em> : membre de la famille, non pas parent (père ou mère)</li>
          <li>Allemand <em>Gift</em> : poison, non pas cadeau</li>
        </ul>
        <p>À l'autre extrême, certains concepts sont <strong>intraduisibles</strong> : aucun mot équivalent n'existe dans la langue cible, révélant une expérience, une valeur ou un mode d'être que la culture source a cristallisé en concept nommable :</p>
        <ul>
          <li>Portugais <em>saudade</em> : nostalgie mélancolique d'une chose absente aimée, mêlée d'espoir vague</li>
          <li>Danois/Norvégien <em>hygge</em> : confort douillet et convivialité intime autour d'un feu ou d'une table</li>
          <li>Japonais <em>wabi-sabi</em> : beauté de l'imperfection, de l'inachèvement et de l'éphémère</li>
          <li>Allemand <em>Schadenfreude</em> : plaisir ressenti face au malheur d'autrui</li>
          <li>Finlandais <em>sisu</em> : détermination obstinée face à l'adversité, résilience stoïque</li>
          <li>Japonais <em>ikigai</em> : raison d'être, ce qui donne sens à la vie quotidienne</li>
        </ul>
        <p>Étudier ces intraduisibles, c'est pénétrer au cœur des singularités culturelles d'une civilisation. Ils confirment l'hypothèse de <em>relativité linguistique</em> de Sapir-Whorf dans sa version modérée : les langues ne sont pas de simples codes interchangeables pour une réalité commune, mais des grilles de lecture du monde qui en découpent l'expérience différemment.</p>

        <h3>Sémantique et discours : le pouvoir des mots</h3>
        <p>Le choix des mots n'est jamais neutre : il oriente la perception et le raisonnement. Ce phénomène, appelé <strong>effet de cadrage</strong> (<em>framing effect</em>), montre que la manière dont on nomme une réalité influence les jugements qu'on porte sur elle :</p>
        <ul>
          <li>« 90 % de survie » vs « 10 % de mortalité » : même réalité statistique, mais la première formulation est perçue systématiquement plus positivement (Tversky et Kahneman).</li>
          <li>« Réduction des impôts » vs « suppression des services publics » : deux façons de décrire la même politique budgétaire selon le cadre idéologique adopté.</li>
          <li>« Combattant de la liberté » vs « terroriste » : la même personne vue de deux perspectives opposées — le langage construit la réalité autant qu'il la reflète.</li>
          <li>« Licencier » vs « optimiser les effectifs » vs « dégraissage » : les euphémismes révèlent des stratégies rhétoriques de distanciation ou d'atténuation.</li>
        </ul>
        <p>La sémantique se révèle ainsi un outil d'analyse critique indispensable pour décoder les discours politiques, publicitaires et médiatiques. Comprendre comment les mots construisent la réalité plutôt qu'ils ne la reflètent passivement est une compétence citoyenne fondamentale dans une société saturée d'informations et de narrations concurrentes.</p>
      </div>
    </section>"""

data['pages']['linguistique/semantique']['content'] = new_content
print(f"New semantique content length: {len(new_content)}")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/langues.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("File saved successfully.")
