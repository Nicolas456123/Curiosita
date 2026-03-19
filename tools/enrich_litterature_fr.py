#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Enrichit les articles courts de litterature-fr.json.
Ces articles ont une structure différente : section contenu avec <div class="course-content">
"""

import json
import re

INPUT_FILE = 'C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/litterature-fr.json'

# On insère du contenu dans la div class="course-content" juste avant </div>\n    </section>
# Pattern : </div>\n    </section>\n    <section class="content-section" id="quiz">

ENRICHMENTS = {
    'moyen-age/chanson-geste': """
        <h3>La transmission et les jongleurs</h3>
        <p>Les chansons de geste naissent dans une culture essentiellement orale. Les <strong>jongleurs</strong> (ou <em>joglars</em>) les interprètent lors de pèlerinages, de foires et dans les cours seigneuriales. Leur performance mêle chant, récitation et jeu instrumental (viole, harpe). La transmission orale explique les variantes entre manuscrits : chaque jongleur adapte, abrège ou amplifie selon son public.</p>
        <p>La mise par écrit (XIIe-XIIIe siècles) cristallise des textes qui étaient vivants et mouvants. Les scribes des abbayes ont souvent christianisé ou moralisé des récits initialement plus brutaux. Certaines chansons de geste, comme le <em>Pèlerinage de Charlemagne</em>, combinent l'épique et le comique dans une veine parodique qui annonce Rabelais.</p>
        <h3>L'héritage épique européen</h3>
        <p>La chanson de geste française est l'une des grandes épopées médiévales européennes, avec le <em>Nibelungenlied</em> allemand (vers 1200) et le <em>Cantar de Mío Cid</em> espagnol (vers 1200). Ces œuvres partagent des thèmes communs — la loyauté vassalique, la vengeance, la trahison — mais reflètent des valeurs nationales distinctes. Le héros castillan Rodrigo Díaz de Vivar est pragmatique et réaliste là où Roland est idéalisé et sacrificiel.</p>
        <div class="highlight-box">
          <p><strong>Postérité :</strong> La chanson de geste a nourri la littérature européenne pendant des siècles. Arioste puise dans les récits carolingiens pour son <em>Roland furieux</em> (1516). Au XIXe siècle, les romantiques redécouvrent ce patrimoine médiéval avec enthousiasme. La <em>Légende des siècles</em> de Victor Hugo (1859) s'inscrit dans la continuité de l'épopée nationale.</p>
        </div>""",

    'classicisme/la-fontaine': """
        <h3>Les sources des Fables</h3>
        <p>La Fontaine ne crée pas ex nihilo : il adapte un héritage fabulistique millénaire. <strong>Ésope</strong> (VIe siècle av. J.-C.), auteur grec d'apologues en prose, et <strong>Phèdre</strong> (Ier siècle ap. J.-C.), versificateur latin de ces récits, sont ses sources principales. La Fontaine indique lui-même ses dettes dans ses préfaces, tout en revendiquant la transformation créatrice : il amplifie, psychologise, ironise là où ses modèles étaient schématiques.</p>
        <p>Le <em>Panchatantra</em> indien (traduit en latin au Moyen Âge sous le titre <em>Directorium Humanae Vitae</em>) fournit des récits d'animaux d'une grande sophistication morale. La Fontaine puise aussi dans les <em>Cent Nouvelles nouvelles</em>, Boccace, Machiavel et les fabliers médiévaux. Cette érudition discrète est au service d'une langue ciselée d'une légèreté incomparable.</p>
        <h3>La Fontaine et la cour de Louis XIV</h3>
        <p>Protégé du surintendant Fouquet, La Fontaine reste dans la disgrâce après l'arrestation de son mécène en 1661. Il ne sera jamais en faveur auprès de Louis XIV. Pourtant, ses Fables, dédiées au Dauphin, circulent dans tout Versailles. Leur critique voilée du pouvoir, de la flatterie et de l'injustice s'abrite derrière le masque animalier : « Selon que vous serez puissant ou misérable, / Les jugements de cour vous rendront blanc ou noir. »</p>
        <div class="highlight-box">
          <p><strong>La morale en question :</strong> Les fables de La Fontaine sont souvent moralement ambiguës. Le renard rusé triomphe du corbeau naïf — mais est-ce le triomphe de l'intelligence ou de la malhonnêteté ? La Fontaine décrit le monde tel qu'il est, non tel qu'il devrait être, ce qui lui donne une saveur réaliste bien éloignée de la naïveté qu'on lui prête souvent.</p>
        </div>""",

    'classicisme/moliere': """
        <h3>Le génie de la comédie de caractère</h3>
        <p>L'innovation majeure de Molière est de subordonner l'intrigue comique au portrait psychologique. L'<strong>Avare</strong>, le <strong>Misanthrope</strong>, le <strong>Bourgeois gentilhomme</strong> : chaque pièce est construite autour d'une passion dominante (l'avarice, la franchise absolue, la vanité sociale) qui déforme la vision du monde du personnage et le rend à la fois ridicule et tragique. Cette concentration sur le caractère ouvre la voie à la comédie psychologique moderne.</p>
        <p>Le comique moliéresque est pluriel : <strong>comique de mots</strong> (calembours, répétitions, quiproquos), <strong>comique de gestes</strong> (scènes de tabourets, de bâton), <strong>comique de situation</strong> (déguisements, reconnaissances), <strong>comique de caractère</strong> (l'obsession qui aveugle). Cette diversité assure le succès de ses pièces auprès de publics très différents, de la cour au peuple.</p>
        <h3>Molière et ses ennemis</h3>
        <p>Le <em>Tartuffe</em> (1664) déclenche une polémique féroce : la Compagnie du Saint-Sacrement, organisation dévote influente, obtient l'interdiction de représentation pendant cinq ans. Molière doit adapter son texte à trois reprises avant de le faire jouer en 1669. Dans <em>Dom Juan</em>, le héros libertin prononce un éloge de l'hypocrisie sociale qui scandalise autant qu'il fascine.</p>
        <div class="highlight-box">
          <p><strong>Le comédien-auteur :</strong> Molière dirige sa troupe, joue les premiers rôles (Harpagon, Alceste, Argan), et écrit à la demande du roi. Cette triple fonction de gestionnaire, acteur et dramaturge est exceptionnelle. La mort sur scène en jouant le Malade imaginaire — il s'effondre lors de la quatrième représentation, le 17 février 1673 — lui confère une aura légendaire.</p>
        </div>""",

    'xixe/romantisme': """
        <h3>Le moi romantique et la figure du poète maudit</h3>
        <p>Le romantisme élève le <strong>moi</strong> — ses émotions, ses contradictions, sa souffrance — au rang de sujet littéraire légitime. Le <em>mal du siècle</em> (désillusion post-révolutionnaire, inadaptation de l'individu sensible au monde bourgeois) nourrit une littérature de l'exil intérieur. René de Chateaubriand (1802) et Adolphe de Benjamin Constant (1816) inaugurent le roman de l'individu en proie à l'ennui et à l'incapacité d'agir.</p>
        <p>La figure du <strong>poète maudit</strong> — génie incompris, rejeté par la société, consumé par son art — est une invention romantique qui aura une longue postérité. Musset, Nerval, puis Baudelaire, Verlaine, Rimbaud incarneront cette figure. L'alcool, la drogue, la folie, le suicide deviennent des signes paradoxaux de l'élection poétique.</p>
        <h3>Victor Hugo, monument du romantisme</h3>
        <p>Victor Hugo est la figure dominante et incontestée du romantisme français. Sa préface de <em>Cromwell</em> (1827) est le manifeste théorique du mouvement : elle réclame la liberté contre les règles classiques, le mélange du sublime et du grotesque, l'aspiration à la vérité historique. <em>Hernani</em> (1830) déclenche la <strong>Bataille d'Hernani</strong> — un affrontement entre classiques siffleurs et romantiques enthousiastes dans la salle même du Théâtre-Français.</p>
        <div class="highlight-box">
          <p><strong>Romantisme et engagement politique :</strong> Contrairement à l'image d'un romantisme replié sur le moi, Hugo, Michelet, Lamartine conjuguent lyrisme personnel et engagement civique. Le romantisme français est républicain et social : il célèbre les nations opprimées (Grèce, Pologne), dénonce la misère (<em>Les Misérables</em>), défend l'abolition de la peine de mort (<em>Le Dernier Jour d'un condamné</em>).</p>
        </div>""",

    'moyen-age/roman-courtois': """
        <h3>L'amour courtois : une révolution des valeurs</h3>
        <p>La <em>fin'amor</em> (amour parfait) des troubadours occitans opère une révolution dans les valeurs aristocratiques : elle féminise le rapport au pouvoir (le chevalier se soumet à sa dame comme le vassal à son seigneur), valorise la souffrance amoureuse comme signe de raffinement et introduit la notion d'intériorité dans une culture guerrière. L'amour devient une école de perfectionnement éthique et social.</p>
        <p>Le roman courtois met en scène des personnages déchirés entre amour et devoir, entre désir et honneur. Lancelot aime Guenièvre, l'épouse du roi Arthur son seigneur : cette transgression fondamentale de la loyauté vassalique est au cœur du cycle arthurien. Tristan aime Iseut la femme du roi Marc : l'amour-passion est ici lié à un philtre — il est subi, irrésistible, destructeur.</p>
        <h3>Le cycle arthurien et la Matière de Bretagne</h3>
        <p>La <strong>Matière de Bretagne</strong> (légendes celtiques) fournit le cadre mythique du roman courtois : la cour du roi Arthur, la Table Ronde, la quête du Graal. Chrétien de Troyes (XIIe siècle) est le grand romancier arthurien : <em>Lancelot</em>, <em>Perceval</em>, <em>Yvain</em> imposent les codes du genre. Ces récits circulent dans tout l'Occident médiéval et connaissent des adaptations en allemand (<em>Parzival</em> de Wolfram von Eschenbach), en anglais (cycle de Malory), en italien.</p>
        <div class="highlight-box">
          <p><strong>La quête du Graal :</strong> symbole chrétien (le vase de la Cène) et celtique (chaudron d'abondance), le Graal devient l'objet d'une quête spirituelle qui transpose l'aventure chevaleresque en itinéraire mystique. Perceval/Parsifal, chevalier pur et naïf, est le seul à pouvoir accomplir la quête — illustration de la supériorité de la grâce spirituelle sur la prouesse guerrière.</p>
        </div>""",

    'xixe/realisme-naturalisme': """
        <h3>Le naturalisme : Zola et la méthode expérimentale</h3>
        <p>Émile Zola théorise le <strong>naturalisme</strong> dans <em>Le Roman expérimental</em> (1880), s'inspirant de la méthode du médecin Claude Bernard. Le romancier naturaliste est un expérimentateur : il place ses personnages dans des conditions déterminées et observe comment l'hérédité et le milieu social déterminent leurs comportements. Le roman devient une science de l'homme en société.</p>
        <p>Les <em>Rougon-Macquart</em> (1871-1893), vingt romans retraçant l'histoire d'une famille sous le Second Empire, constituent l'application la plus ambitieuse de ce programme. Chaque roman explore un milieu social spécifique : les Halles (<em>Le Ventre de Paris</em>), les mines de charbon (<em>Germinal</em>), la Bourse (<em>L'Argent</em>), les grands magasins (<em>Au Bonheur des Dames</em>). Zola documente ses romans par des enquêtes de terrain rigoureuses.</p>
        <h3>Réalisme et représentation du corps social</h3>
        <p>Le réalisme (Stendhal, Balzac, Flaubert) et le naturalisme (Zola, Maupassant) partagent l'ambition de rendre compte de la totalité du corps social, y compris ses aspects les plus sordides. <em>La Comédie humaine</em> de Balzac (90 romans et nouvelles) est la première tentative systématique de représenter l'ensemble de la société française. Balzac crée le principe des personnages récurrents — les mêmes individus traversent différents romans — pour simuler la densité du tissu social.</p>
        <div class="highlight-box">
          <p><strong>Le scandale naturaliste :</strong> <em>Nana</em> (1880) et <em>La Terre</em> (1887) déclenchent des polémiques violentes. Cinq romanciers naturalistes publient le <em>Manifeste des Cinq</em> (1887) pour se désolidariser de la brutalité de <em>La Terre</em>. La presse conservatrice accuse Zola de pornographie et de démagogie socialiste. Ces scandales assurent paradoxalement la diffusion des œuvres.</p>
        </div>""",

    'classicisme/voltaire-rousseau': """
        <h3>Voltaire : l'ironie comme arme philosophique</h3>
        <p>Voltaire est l'écrivain des Lumières le plus combatif. Son arme principale est l'<strong>ironie</strong> : une ironie légère, dévastatrice, qui rend les positions adverses ridicules sans jamais sembler sérieuse. <em>Candide</em> (1759) détruit l'optimisme leibnizien (« tout est pour le mieux dans le meilleur des mondes possibles ») non par des arguments philosophiques, mais en promenant son héros naïf dans un monde où les catastrophes s'enchaînent.</p>
        <p>Le <em>Dictionnaire philosophique</em> (1764) est un arsenal de munitions anticlérciales : des articles brefs, vifs, argumentés, sur des sujets comme la tolérance, la guerre, la superstition. Voltaire se bat pour des causes concrètes : l'affaire Calas (1762), où un protestant est faussement condamné à mort pour le meurtre de son fils, est l'occasion d'un plaidoyer retentissant pour la tolérance religieuse.</p>
        <h3>Rousseau : la critique de la civilisation et le contrat social</h3>
        <p>Rousseau renverse le schéma optimiste du progrès : dans le <em>Discours sur l'origine de l'inégalité</em> (1755), il affirme que la civilisation a corrompu l'homme naturellement bon. La propriété privée et l'inégalité sociale sont des inventions humaines qui ont aliéné l'homme de sa liberté originelle. Cette critique radicale annonce le romantisme et le socialisme.</p>
        <div class="highlight-box">
          <p><strong>Voltaire et Rousseau : une inimitié célèbre :</strong> Les deux géants des Lumières se détestaient cordialement. Voltaire, aristocrate voltairien attaché au luxe et à la civilisation, méprisait l'idéalisation rousseauiste de la nature. Rousseau, bourgeois genevois aux origines modestes, reprochait à Voltaire sa superficialité et son immoralité privée. Leur querelle annonce les divisions de la pensée progressiste européenne.</p>
        </div>""",

    'classicisme/lumieres': """
        <h3>L'Encyclopédie : le projet encyclopédique des Lumières</h3>
        <p>L'<em>Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers</em> (1751-1772) est l'œuvre collective la plus ambitieuse du XVIIIe siècle. Diderot et d'Alembert en sont les directeurs ; plus de 150 collaborateurs (Voltaire, Rousseau, Montesquieu, Turgot) rédigent les articles. L'objectif est double : rassembler les connaissances humaines et répandre l'esprit critique contre l'obscurantisme religieux et politique.</p>
        <p>L'Encyclopédie subvertit par sa structure même l'ordre du savoir traditionnel : en plaçant les arts mécaniques (métiers, artisanat, techniques) au même rang que les arts libéraux, elle valorise le travail manuel et le progrès technique. Les renvois entre articles permettent des subversions silencieuses : l'article « Anthropophagie » renvoie à « Eucharistie » — ironie anticléricale que la censure ne peut pas facilement sanctionner.</p>
        <h3>Le despotisme éclairé et les limites des Lumières</h3>
        <p>Les philosophes des Lumières ne sont pas tous démocrates. Voltaire espère une réforme venue d'en haut, par des monarques éclairés (Frédéric II de Prusse, Catherine II de Russie). Montesquieu préfère la monarchie constitutionnelle anglaise à la démocratie directe. Seul Rousseau développe une théorie véritablement démocratique de la souveraineté populaire dans le <em>Contrat social</em> (1762).</p>
        <div class="highlight-box">
          <p><strong>Lumières et esclavage :</strong> Le paradoxe des Lumières est visible dans leur rapport à l'esclavage. La traite négrière fait la fortune des villes portuaires françaises (Nantes, Bordeaux) et la philosophie universaliste des Lumières coexiste avec une acceptation souvent tacite du système colonial. L'abbé Raynal, dans son <em>Histoire des deux Indes</em> (1770), est l'un des rares à condamner explicitement l'esclavage et à prédire une révolte des esclaves.</p>
        </div>""",

    'moyen-age/montaigne': """
        <h3>L'essai : un genre inventé par Montaigne</h3>
        <p>Le mot « essai » est forgé par Montaigne lui-même pour désigner ses textes : des tentatives (<em>essais</em>) de penser librement, sans plan rigide, en suivant le fil de la réflexion. Ce genre nouveau rompt avec les formes savantes de la scolastique et avec la rhétorique cicéronienne : Montaigne écrit en français, à la première personne, en mixant citations latines et réflexions personnelles dans un mouvement naturel.</p>
        <p>Les <em>Essais</em> connaissent trois strates rédactionnelles (livres I et II, 1580 ; livre III, 1588 ; additions manuscrites jusqu'à la mort de Montaigne en 1592). L'œuvre évolue vers une plus grande liberté formelle et une pensée plus radicale : le livre III est le plus audacieux, avec des chapitres comme « De l'expérience » ou « Sur des vers de Virgile » où Montaigne aborde franchement la vieillesse, la sexualité et la mort.</p>
        <h3>Le scepticisme de Montaigne</h3>
        <p>Montaigne est profondément marqué par le scepticisme pyrrhonien (réactivé par la redécouverte des textes de Sextus Empiricus au XVIe siècle). Sa devise « <strong>Que sais-je ?</strong> » ne signifie pas un relativisme total mais une suspension du jugement face aux certitudes dogmatiques. Cette posture intellectuelle lui permet de relativiser les usages de son temps (« les lois de la conscience que nous disons naître de la nature, naissent de la coutume ») et de regarder avec curiosité les cannibales du Nouveau Monde.</p>
        <div class="highlight-box">
          <p><strong>Montaigne et l'altérité :</strong> Le chapitre « Des cannibales » (I, 31) est l'un des premiers textes du relativisme culturel. Montaigne y montre que ce que nous appelons « barbarie » dépend de notre point de vue : les Amérindiens sont « barbares » selon nos critères, mais leurs pratiques guerrières (manger les ennemis morts) sont plus honnêtes que nos tortures « civilisées ». Cette pensée annonce Montesquieu (<em>Lettres persanes</em>) et Lévi-Strauss.</p>
        </div>""",

    'moyen-age/rabelais': """
        <h3>Le rire rabelaisien et la philosophie du corps</h3>
        <p>Rabelais est le grand écrivain du corps dans la littérature française. Ses romans (Gargantua, Pantagruel) célèbrent l'appétit, la boisson, les fonctions corporelles avec une exubérance carnavalesque. Mikhaïl Bakhtine, dans <em>L'Œuvre de François Rabelais</em> (1965), théorise ce « réalisme grotesque » : le corps rabelaisien est un corps ouvert, en perpétuel échange avec le monde, qui bascule les hiérarchies sociales et symboliques.</p>
        <p>Ce grotesque n'est pas nihiliste : il est au service d'une philosophie de la vie et de la nature. L'abbaye de Thélème, utopie rabelaisienne, n'a qu'une règle — « <strong>Fais ce que voudras</strong> » — parce que des individus bien éduqués et libres ont naturellement des instincts nobles. Cette confiance dans la nature humaine rappelle Erasme et anticipe Rousseau.</p>
        <h3>L'humanisme érasmien de Rabelais</h3>
        <p>Rabelais est moine, médecin et humaniste : il incarne la synthèse renaissante du savoir. Ses romans multiplient les références savantes (grecques, latines, médicales) tout en les subvertissant par le comique. La lettre de Gargantua à Pantagruel dans <em>Pantagruel</em> (chapitre VIII) est un programme d'éducation humaniste : maîtrise des langues anciennes, des sciences naturelles, de la musique, de la médecine — et surtout, conscience que « <strong>science sans conscience n'est que ruine de l'âme</strong> ».</p>
        <div class="highlight-box">
          <p><strong>Rabelais et la censure :</strong> La Sorbonne condamne <em>Pantagruel</em> (1532) et <em>Gargantua</em> (1534) comme livres obscènes. Rabelais publie sous des pseudonymes et joue de la protection royale (François Ier, puis Henri II). Il navigue habilement entre liberté d'expression et précautions rhétoriques, inventant le « rire sérieux » où l'obscénité sert de couverture à la critique religieuse et politique.</p>
        </div>""",
}

def insert_into_course_content(content, new_html):
    """Insère new_html juste avant la fermeture de div.course-content (avant </div>\n    </section>\n    <section...id="quiz">)."""
    # Pattern: find the closing div of course-content before the quiz section
    quiz_section_pattern = '</div>\n    </section>\n    <section class="content-section" id="quiz">'
    idx = content.find(quiz_section_pattern)
    if idx != -1:
        return content[:idx] + new_html + '\n' + content[idx:]

    # Fallback: try with different whitespace
    patterns = [
        '</div>\n      </section>\n      <section class="content-section" id="quiz">',
        '</div>\n</section>\n<section class="content-section" id="quiz">',
        '</div>\n    </section>\n    <section',
    ]
    for pat in patterns:
        idx = content.find(pat)
        if idx != -1:
            return content[:idx] + new_html + '\n' + content[idx:]

    # Last resort: insert before quiz section
    quiz_fallback = '<section class="content-section" id="quiz">'
    idx = content.find(quiz_fallback)
    if idx != -1:
        # Find the </section> before quiz
        close_idx = content.rfind('</section>', 0, idx)
        if close_idx != -1:
            return content[:close_idx] + new_html + '\n      </div>\n    </section>\n    ' + content[idx:]

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
                new_content = insert_into_course_content(page['content'], new_html)
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
