import json, re, sys

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/communication.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

pages = data['pages']

def enrich_contenu(content, new_blocks):
    marker = '<section class="content-section" id="quiz">'
    idx = content.find(marker)
    if idx == -1:
        idx = content.rfind('</section>')
    return content[:idx] + new_blocks + content[idx:]

# ===== theorie-communication/modeles-fondateurs =====
k = 'theorie-communication/modeles-fondateurs'
extra = (
    '<h3>Les modeles interactifs et transactionnels</h3>'
    '<p class="resume-text">Au-dela des modeles lineaires, les <strong>modeles interactifs</strong> comme celui de Wilbur Schramm (1954) introduisent la notion de feedback : le recepteur repond a l\'emetteur, qui devient a son tour recepteur. La communication n\'est plus un flux a sens unique mais un echange bidirectionnel. Schramm souligne egalement l\'importance du <strong>champ d\'experience</strong> : la comprehension d\'un message depend des experiences passees, des valeurs et de la culture de chaque interlocuteur. Plus les champs d\'experience se recoupent, plus la communication est efficace.</p>'
    '<p class="resume-text">Le <strong>modele transactionnel</strong> (Dean Barnlund, 1970) va plus loin : emetteur et recepteur creent du sens simultanement, dans une relation de co-construction. Chaque participant encode et decode en meme temps, dans un contexte social et culturel partage. Ce modele est aujourd\'hui dominant en communication interpersonnelle et organisationnelle, car il reflete la complexite des interactions humaines reelles — conversations, negociations, therapies — ou les roles d\'emetteur et de recepteur s\'alternent en permanence.</p>'
    '<div class="highlight-box"><p>Le modele transactionnel de Barnlund capture l\'essentiel de la communication humaine : les deux interlocuteurs construisent simultanement le sens, dans un contexte toujours dynamique.</p></div>'
    '<h3>La communication organisationnelle et ses reseaux</h3>'
    '<p class="resume-text">Dans les organisations, la communication emprunte des <strong>reseaux formels</strong> (hierarchiques, definis par l\'organigramme) et <strong>informels</strong> (reseaux de rumeurs, conversations de couloir). Les etudes de Harold Leavitt (1951) sur les reseaux de communication en groupe ont montre que la structure du reseau influe sur l\'efficacite, la satisfaction et l\'emergence de leaders. Un reseau centralise (en etoile) est efficace pour les taches simples ; un reseau decentralise (tous canaux) est plus performant pour les problemes complexes.</p>'
    '<p class="resume-text">Karl Weick a propose le concept d\'<strong>enactment</strong> : les organisations ne decouvrent pas leur environnement, elles le construisent activement par leurs propres communications. La communication organisationnelle produit l\'organisation elle-meme. Cette perspective, developpee par l\'Ecole de Montreal (James Taylor), remet en cause la vision instrumentale de la communication comme simple outil au service d\'objectifs preetablis.</p>'
    '<div class="highlight-box"><p>Karl Weick : les organisations ne communiquent pas pour exister — elles existent parce qu\'elles communiquent. La communication constitue l\'organisation.</p></div>'
    '<h3>Limites et critiques des modeles fondateurs</h3>'
    '<p class="resume-text">Les modeles fondateurs ont ete critiques pour leur <strong>ethnocentrisme</strong> : concus dans un contexte occidental, ils supposent des normes communicatives (clarte, directivite, linearite) qui ne sont pas universelles. Edward Hall a montre que les cultures a contexte eleve (Japon, pays arabes) communiquent implicitement, en s\'appuyant sur le contexte et le non-dit, tandis que les cultures a faible contexte (Etats-Unis, Allemagne) privilegient l\'explicite et le direct.</p>'
    '<p class="resume-text">Par ailleurs, les modeles lineaires ignorent les <strong>dimensions de pouvoir</strong> dans la communication. Stuart Hall (Encoding/Decoding, 1980) a montre que les recepteurs ne decodent pas passivement les messages : ils peuvent les accepter (lecture dominante), les negocier ou les resister (lecture oppositionnelle). Cette approche a fonde les Cultural Studies britanniques, qui etudient la communication dans ses rapports avec l\'ideologie, la classe sociale, le genre et l\'ethnicite.</p>'
    '<div class="highlight-box"><p>Stuart Hall : le recepteur n\'est pas passif. Il peut adopter une lecture dominante, negociee ou oppositionnelle d\'un meme message mediatique.</p></div>'
)
pages[k]['content'] = enrich_contenu(pages[k]['content'], extra)
print(f"{k}: {len(pages[k]['content'])} chars")

# ===== theorie-communication/semiologie-et-signes =====
k = 'theorie-communication/semiologie-et-signes'
extra = (
    '<h3>Roland Barthes et la mythologie du quotidien</h3>'
    '<p class="resume-text">Roland <strong>Barthes</strong> (Mythologies, 1957 ; Elements de semiologie, 1964) appliqua la semiologie a la culture de masse. Il distingua deux niveaux de signification : la <strong>denotation</strong> (le sens litteral, premier) et la <strong>connotation</strong> (les sens associes, culturels, ideologiques). Barthes nomme <strong>mythe</strong> ce second niveau : une signification qui se donne comme naturelle alors qu\'elle est culturellement construite. Une publicite pour une voiture de sport ne vend pas seulement un vehicule ; elle vend un style de vie, une masculinite, une liberte — autant de constructions ideologiques presentees comme evidentes.</p>'
    '<p class="resume-text">Dans <em>La Chambre claire</em> (1980), Barthes analyse la photographie avec deux concepts : le <strong>studium</strong> (ce qui est culturellement code, comprehensible, attendu dans une image) et le <strong>punctum</strong> (ce qui pointe le spectateur, l\'emeut personnellement, le detail qui happe le regard). Cette distinction entre sens culturel partage et experience subjective reste une reference en communication visuelle, en photojournalisme et en histoire de l\'art.</p>'
    '<div class="highlight-box"><p>Barthes : le mythe est une parole depolitisee — il transforme en nature ce qui est en realite culture et histoire, rendant l\'ideologie invisible.</p></div>'
    '<h3>Semiologie des medias et de la publicite</h3>'
    '<p class="resume-text">La <strong>semiologie de la publicite</strong> analyse comment les images, les mots et les sons interagissent pour produire du sens. Judith Williamson (<em>Decoding Advertisements</em>, 1978) montra que la publicite cree des systemes de signification en associant des produits a des valeurs (liberte, seduction, nature) par transfert semiotique. Le produit devient porteur de sens culturels sans lien intrinseque avec ses qualites fonctionnelles. En semiotique du cinema, Christian Metz a identifie les codes specifiques du langage cinematographique (montage, cadrage, champ-contrechamp) qui construisent la narration.</p>'
    '<p class="resume-text">Umberto Eco a generalise la semiotique a l\'ensemble de la culture : tout phenomene culturel (mode, gastronomie, architecture, sport) peut etre etudie comme un systeme de signes. Son concept de <strong>lecteur modele</strong> designe le type de lecteur implicitement construit par le texte. Dans <em>Lector in fabula</em> (1979), il montre que tout texte requiert une cooperation interpretative de la part du lecteur, qui doit mobiliser des competences encyclopediques pour en construire le sens.</p>'
    '<div class="highlight-box"><p>Umberto Eco : tout texte requiert un lecteur modele capable de remplir ses espaces blancs. La communication n\'est jamais complete sans la cooperation du recepteur.</p></div>'
    '<h3>Semiologie contemporaine et multimodalite</h3>'
    '<p class="resume-text">La <strong>semiotique multimodale</strong> (Gunther Kress, Theo van Leeuwen) etudie la facon dont differents modes semiotiques — texte, image, son, geste, couleur, typographie — cooperent pour produire du sens dans un meme artefact communicationnel. Dans un site web, une affiche ou une presentation, chaque mode contribue differemment au sens global : la mise en page organise l\'attention, les couleurs vehiculent des emotions, la typographie connote des valeurs (tradition, modernite, urgence).</p>'
    '<p class="resume-text">Le <strong>tournant iconique</strong> (W.J.T. Mitchell) souligne la domination croissante de l\'image sur le texte dans la communication contemporaine. Les reseaux sociaux (Instagram, TikTok, Pinterest) sont des espaces essentiellement visuels ou les codes semiotiques evoluent rapidement. Les emojis forment un systeme de signes a part entiere, les memes internet fonctionnent comme des unites semiotiques partagees dont le sens se construit par intertextualite et contexte culturel commun.</p>'
    '<div class="highlight-box"><p>Les memes internet sont des unites semiotiques parfaites : image iconique + texte variable = sens construit par une communaute interpretative qui partage les references culturelles.</p></div>'
)
pages[k]['content'] = enrich_contenu(pages[k]['content'], extra)
print(f"{k}: {len(pages[k]['content'])} chars")

# ===== theorie-communication/communication-de-masse =====
k = 'theorie-communication/communication-de-masse'
extra = (
    '<h3>Agenda setting, priming et framing</h3>'
    '<p class="resume-text">Maxwell <strong>McCombs</strong> et Donald Shaw (1972) developperent la theorie de l\'<strong>agenda setting</strong> : les medias ne disent pas aux gens quoi penser, mais sur quoi penser. En amplifiant certains sujets et en ignorant d\'autres, les medias hierarchisent l\'attention publique et construisent l\'agenda des preoccupations citoyennes. Lors de l\'election presidentielle americaine de 1968, ils montrerent que les preoccupations des electeurs correspondaient aux themes couverts par la presse locale.</p>'
    '<p class="resume-text">Le <strong>priming</strong> (amorcage) est l\'effet par lequel l\'agenda mediatique influence les criteres utilises par le public pour evaluer des personnalites politiques. Le <strong>framing</strong> (cadrage), developpe par Robert Entman, designe le fait que la facon dont une information est presentee influence profondement son interpretation. Un meme evenement presente comme conflit ou comme negociation, comme crise ou comme defi, genere des perceptions et des reactions radicalement differentes chez le public.</p>'
    '<div class="highlight-box"><p>L\'agenda setting ne dit pas aux citoyens quoi penser, mais sur quoi penser. Les medias hierarchisent l\'attention publique — et cette hierarchie facon directement les debats democratiques.</p></div>'
    '<h3>La theorie critique de l\'Ecole de Francfort</h3>'
    '<p class="resume-text">L\'<strong>Ecole de Francfort</strong> (Theodor Adorno, Max Horkheimer, Herbert Marcuse) developpa une critique radicale des medias de masse. Dans La Dialectique de la raison (1947), Adorno et Horkheimer forgerent le concept d\'<strong>industrie culturelle</strong> : les medias et les produits culturels (cinema, radio, musique populaire) sont devenus des industries qui standardisent et homogeneisent la culture pour favoriser la passivite et la conformite sociale. La diversite apparente masque une profonde uniformisation ideologique.</p>'
    '<p class="resume-text">Jurgen <strong>Habermas</strong> (L\'Espace public, 1962) analysa la transformation de la sphere publique bourgeoise — espace de discussion rationnelle entre citoyens — en espace de consommation culturelle pilote par les interets commerciaux. Sa theorie de l\'<strong>agir communicationnel</strong> (1981) oppose la rationalite strategique (qui cherche a manipuler l\'autre) a la rationalite communicationnelle (qui cherche la comprehension mutuelle par le dialogue), fondant une ethique democratique de la communication.</p>'
    '<div class="highlight-box"><p>Habermas : la democratie requiert un espace public de deliberation rationnelle. Les medias commerciaux menacent cet espace en transformant les citoyens en consommateurs passifs.</p></div>'
    '<h3>Reception et resistance des publics</h3>'
    '<p class="resume-text">Les <strong>Cultural Studies</strong> (Centre d\'etudes culturelles contemporaines de Birmingham, CCCS) ont renverse la vision d\'un public passif. Stuart Hall (Encoding/Decoding, 1980) distingua trois positions de lecture : la position dominante-hegemonique (le spectateur accepte le sens preferentiel encode par le producteur), la position negociee (il l\'adapte partiellement) et la position oppositionnelle (il le rejette totalement). Des etudes empiriques (David Morley sur les audiences de Nationwide) confirmerent ces positions selon la classe sociale, le genre et l\'ethnicite.</p>'
    '<p class="resume-text">La <strong>theorie des usages et gratifications</strong> (Katz, Blumler, Gurevitch, 1974) retourna la question classique : non plus ce que font les medias aux gens, mais ce que font les gens des medias. Les individus choisissent les medias pour satisfaire des besoins : information, identite personnelle, integration sociale et divertissement. Cette approche active a ete confirmee par les etudes sur Internet et les reseaux sociaux, ou les utilisateurs jouent un role actif dans la selection, la production et le partage de contenus.</p>'
    '<div class="highlight-box"><p>La theorie des usages et gratifications : les citoyens choisissent activement les medias pour satisfaire des besoins precis. Comprendre ces besoins, c\'est comprendre l\'usage social des medias.</p></div>'
)
pages[k]['content'] = enrich_contenu(pages[k]['content'], extra)
print(f"{k}: {len(pages[k]['content'])} chars")

with open('C:/Users/nicol/Desktop/Projets/Divers/Curiosita/assets/content/communication.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
print("Saved batch 1 (3 articles)")
