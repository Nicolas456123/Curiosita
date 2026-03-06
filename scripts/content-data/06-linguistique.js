// Discipline definition: Linguistique
// 6 hubs, 30 lessons — all content in French

module.exports = {
  slug: 'linguistique',
  title: 'Linguistique',
  description: 'Explorez la science du langage : phonétique, morphologie, syntaxe, sémantique et sociolinguistique.',
  icon: '🗣️',
  cat: 'Linguistique',
  themeSlug: 'sciences-humaines',
  accent: '#8b7ae0',
  accent2: '#a99ced',
  accentDim: 'rgba(139,122,224,0.1)',
  accentHero: 'rgba(139,122,224,0.08)',
  introTitle: 'Qu\'est-ce que la linguistique ?',
  introText: 'La linguistique est l\'étude scientifique du langage humain. Elle analyse les structures, les règles et les mécanismes qui permettent aux êtres humains de produire et de comprendre un nombre infini d\'énoncés à partir d\'un ensemble fini de sons et de règles. Depuis les premières grammaires de l\'Antiquité jusqu\'aux modèles formels contemporains, la linguistique cherche à décrire ce qui fait de la langue un système à la fois universel et infiniment variable. Elle se distingue de l\'apprentissage des langues en ce qu\'elle ne vise pas à maîtriser un idiome particulier, mais à comprendre les principes fondamentaux qui sous-tendent toutes les langues du monde.',
  introHighlight: 'La linguistique révèle que toutes les langues humaines, malgré leur diversité apparente, partagent des principes structurels communs qui reflètent les capacités cognitives de notre espèce.',
  articleLow: 'la',
  hubs: [
    {
      slug: 'phonetique',
      title: 'Phonétique et phonologie',
      description: 'L\'étude des sons du langage : leur production, leur perception et leur organisation dans les systèmes linguistiques.',
      introText: 'La phonétique étudie les sons du langage dans leur réalité physique, tandis que la phonologie analyse la façon dont ces sons s\'organisent pour former des systèmes distinctifs propres à chaque langue. Ensemble, ces deux disciplines constituent le socle de l\'analyse linguistique, car le son est le matériau premier de toute communication verbale.',
      introHighlight: 'La phonétique décrit comment les sons sont produits et perçus, tandis que la phonologie révèle quels sons font la différence de sens dans une langue donnée.',
      lessons: [
        {
          slug: 'appareil-phonatoire',
          title: 'L\'appareil phonatoire',
          description: 'Les organes de la parole et les mécanismes de production des sons du langage humain.',
          intro: 'Parler est un acte physiologique complexe qui mobilise l\'appareil respiratoire, le larynx et les cavités supraglottiques. L\'appareil phonatoire transforme un flux d\'air pulmonaire en sons articulés porteurs de sens.',
          introHighlight: 'L\'appareil phonatoire humain n\'a pas été conçu pour la parole : il détourne des organes dédiés à la respiration et à l\'alimentation, ce qui témoigne du caractère fondamentalement adaptatif du langage.',
          sections: [
            {
              title: 'Le mécanisme de la phonation',
              paragraphs: ['La production de la parole commence par l\'expulsion de l\'air des poumons. Ce flux aérien remonte par la trachée jusqu\'au larynx, où se trouvent les cordes vocales (ou plis vocaux). Lorsque celles-ci se rapprochent et vibrent sous la pression de l\'air, elles produisent un son voisé. Lorsqu\'elles restent écartées, le son est non voisé (sourd). La fréquence de vibration des cordes vocales détermine la hauteur de la voix.', 'Le larynx joue donc le rôle d\'un vibrateur contrôlable. La tension des cordes vocales, régulée par les muscles du larynx, permet de moduler la fréquence fondamentale (F0) de la voix. C\'est cette modulation qui produit l\'intonation et les tons dans les langues tonales comme le mandarin ou le yoruba.'],
              highlight: 'Les cordes vocales vibrent entre 100 et 300 fois par seconde lors de la parole normale, créant la fréquence fondamentale qui caractérise chaque voix humaine.'
            },
            {
              title: 'Les cavités de résonance',
              paragraphs: ['Le son produit par le larynx est un bourdonnement brut qui doit être modelé par les cavités supraglottiques : le pharynx, la cavité buccale et la cavité nasale. Ces cavités agissent comme des résonateurs dont la forme peut être modifiée par les mouvements de la langue, des lèvres, du voile du palais et de la mâchoire.', 'Chaque configuration articulatoire amplifie certaines fréquences (les formants) et en atténue d\'autres, produisant ainsi des timbres distincts. Les voyelles se différencient principalement par la position des deux premiers formants (F1 et F2), qui dépendent de l\'ouverture de la bouche et de la position de la langue dans l\'axe antéropostérieur.'],
              highlight: 'Les formants sont les fréquences de résonance des cavités vocales. Les deux premiers formants suffisent à distinguer la plupart des voyelles d\'une langue.'
            },
            {
              title: 'Classification des sons',
              paragraphs: ['Les sons du langage se divisent en deux grandes catégories : les voyelles, produites avec un flux d\'air libre dans le conduit vocal, et les consonnes, qui impliquent une obstruction partielle ou totale du passage de l\'air. Les voyelles se classent selon trois paramètres : l\'aperture (ouverture de la bouche), le lieu d\'articulation (position de la langue) et l\'arrondissement des lèvres.', 'Les consonnes se classent selon le mode d\'articulation (occlusif, fricatif, nasal, latéral, vibrant), le lieu d\'articulation (bilabial, labiodental, alvéolaire, palatal, vélaire, uvulaire, glottal) et le voisement. L\'Alphabet Phonétique International (API) fournit un symbole unique pour chaque son distinctif attesté dans les langues du monde.'],
              highlight: 'L\'Alphabet Phonétique International (API) recense plus de 100 symboles pour transcrire les sons de toutes les langues humaines connues.'
            }
          ],
          quiz: [
            {
              q: 'Quel organe est responsable du voisement des sons ?',
              opts: ['La langue', 'Les cordes vocales', 'Le voile du palais', 'Les lèvres'],
              correct: 1,
              explanation: 'Les cordes vocales (ou plis vocaux), situées dans le larynx, produisent le voisement en vibrant sous la pression de l\'air pulmonaire.'
            },
            {
              q: 'Que sont les formants en phonétique acoustique ?',
              opts: ['Des muscles du larynx', 'Des fréquences de résonance des cavités vocales', 'Des types de consonnes', 'Des règles de prononciation'],
              correct: 1,
              explanation: 'Les formants sont les fréquences de résonance amplifiées par les cavités supraglottiques. Leur position distingue les différents timbres vocaliques.'
            },
            {
              q: 'Quel système permet de transcrire les sons de toutes les langues ?',
              opts: ['L\'alphabet latin', 'L\'alphabet cyrillique', 'L\'Alphabet Phonétique International', 'L\'alphabet grec'],
              correct: 2,
              explanation: 'L\'Alphabet Phonétique International (API), créé en 1888, attribue un symbole unique à chaque son distinctif attesté dans les langues du monde.'
            }
          ],
          definitions: [
            {
              term: 'Voisement',
              def: 'Vibration des cordes vocales lors de la production d\'un son. Un son voisé (comme [b]) implique une vibration, un son sourd (comme [p]) n\'en implique pas.'
            },
            {
              term: 'Formant',
              def: 'Fréquence de résonance amplifiée par les cavités supraglottiques. Les deux premiers formants (F1 et F2) permettent de distinguer les voyelles entre elles.'
            },
            {
              term: 'Larynx',
              def: 'Organe situé dans la gorge contenant les cordes vocales. Il constitue la source sonore primaire de la parole humaine.'
            },
            {
              term: 'API (Alphabet Phonétique International)',
              def: 'Système de transcription phonétique universel créé en 1888 par l\'Association phonétique internationale, attribuant un symbole unique à chaque son distinctif.'
            },
            {
              term: 'Cavité supraglottique',
              def: 'Ensemble des cavités situées au-dessus du larynx (pharynx, bouche, nez) qui modèlent le son brut en sons articulés par un effet de résonance.'
            }
          ],
          memos: [
            {
              front: 'Date clé : API',
              back: 'L\'Alphabet Phonétique International a été créé en 1888 par l\'Association phonétique internationale, fondée à Paris par Paul Passy.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La voix humaine peut produire environ 600 sons distincts, mais aucune langue n\'en utilise plus de 150. Le français en compte environ 36.'
            },
            {
              front: 'Nombre clé : F0',
              back: 'La fréquence fondamentale moyenne est de 120 Hz pour une voix masculine adulte et de 220 Hz pour une voix féminine adulte.'
            }
          ]
        },
        {
          slug: 'voyelles-consonnes',
          title: 'Voyelles et consonnes',
          description: 'Les deux grandes classes de sons du langage et leurs critères de classification.',
          intro: 'La distinction entre voyelles et consonnes est fondamentale en phonétique. Les voyelles, sons ouverts produits par la vibration libre de l\'air, constituent le noyau de chaque syllabe. Les consonnes, caractérisées par une obstruction du flux d\'air, en délimitent les frontières.',
          introHighlight: 'Toutes les langues du monde possèdent des voyelles et des consonnes, mais leur nombre et leur organisation varient considérablement d\'une langue à l\'autre.',
          sections: [
            {
              title: 'Le système vocalique',
              paragraphs: ['Les voyelles se classent selon trois paramètres articulatoires : le degré d\'aperture (ouverte comme [a], mi-ouverte comme [ɛ], mi-fermée comme [e], fermée comme [i]), la position de la langue sur l\'axe antéropostérieur (antérieure comme [i], centrale comme [ə], postérieure comme [u]) et l\'arrondissement des lèvres (arrondie comme [y], non arrondie comme [i]).', 'Le triangle vocalique représente graphiquement l\'espace articulatoire des voyelles. Les voyelles cardinales, définies par Daniel Jones au début du XXe siècle, servent de points de référence universels. Le français possède un système vocalique riche avec 12 à 16 voyelles orales et 4 voyelles nasales, ce qui le distingue de langues comme l\'espagnol (5 voyelles) ou l\'arabe (3 voyelles).'],
              highlight: 'Le nombre de voyelles varie de 3 (arabe classique) à plus de 20 (certaines langues germaniques). Le français, avec ses voyelles nasales et arrondies antérieures, possède l\'un des systèmes les plus complexes.'
            },
            {
              title: 'Le système consonantique',
              paragraphs: ['Les consonnes se caractérisent par une obstruction partielle ou totale du flux d\'air. On les classe selon trois critères : le mode d\'articulation (comment l\'air est obstrué), le lieu d\'articulation (où se produit l\'obstruction) et le voisement (avec ou sans vibration des cordes vocales).', 'Les occlusives ([p], [t], [k]) impliquent un blocage complet puis un relâchement brusque. Les fricatives ([f], [s], [ʃ]) résultent d\'un resserrement produisant un bruit de friction. Les nasales ([m], [n], [ɲ]) combinent une occlusion buccale et un passage de l\'air par le nez. Les latérales ([l]) et les vibrantes ([r]) appartiennent à la classe des liquides.'],
              highlight: 'Les occlusives sourdes [p], [t], [k] et leurs homologues voisées [b], [d], [g] forment des paires minimales dans la plupart des langues du monde.'
            },
            {
              title: 'Les phénomènes coarticulatoires',
              paragraphs: ['Dans la parole continue, les sons ne sont jamais produits de manière isolée. Chaque son est influencé par ses voisins, un phénomène appelé coarticulation. Par exemple, la voyelle [u] arrondit les lèvres avant même que la consonne précédente ne soit terminée. Ce chevauchement articulatoire est essentiel pour la fluidité de la parole.', 'L\'assimilation est un cas particulier de coarticulation où un son acquiert les caractéristiques d\'un son voisin. En français, le [n] de « impossible » devient [m] devant [p], car le lieu d\'articulation s\'adapte à la consonne suivante. Ces processus sont réguliers et prévisibles dans chaque langue.'],
              highlight: 'La coarticulation explique pourquoi il est impossible de découper un signal de parole en segments discrets : les sons se chevauchent et s\'influencent mutuellement.'
            }
          ],
          quiz: [
            {
              q: 'Combien de voyelles nasales le français standard possède-t-il ?',
              opts: ['2', '3', '4', '5'],
              correct: 2,
              explanation: 'Le français standard compte 4 voyelles nasales : [ɑ̃] (an), [ɛ̃] (in), [ɔ̃] (on) et [œ̃] (un), bien que cette dernière tende à se confondre avec [ɛ̃] dans de nombreuses variétés.'
            },
            {
              q: 'Quel est le mode d\'articulation d\'une consonne comme [f] ?',
              opts: ['Occlusif', 'Fricatif', 'Nasal', 'Latéral'],
              correct: 1,
              explanation: 'Les fricatives comme [f] sont produites par un resserrement du conduit vocal qui crée un bruit de friction, sans blocage complet du flux d\'air.'
            },
            {
              q: 'Qu\'est-ce que la coarticulation ?',
              opts: ['L\'ajout d\'un son entre deux mots', 'L\'influence réciproque entre sons adjacents', 'La suppression d\'une voyelle', 'La fusion de deux consonnes'],
              correct: 1,
              explanation: 'La coarticulation est le chevauchement articulatoire entre sons adjacents : chaque son est influencé par ceux qui le précèdent et le suivent.'
            }
          ],
          definitions: [
            {
              term: 'Aperture',
              def: 'Degré d\'ouverture de la bouche lors de la production d\'une voyelle. On distingue les voyelles ouvertes ([a]), mi-ouvertes ([ɛ]), mi-fermées ([e]) et fermées ([i]).'
            },
            {
              term: 'Occlusive',
              def: 'Consonne produite par un blocage complet du flux d\'air suivi d\'un relâchement brusque. Exemples : [p], [t], [k] (sourdes) et [b], [d], [g] (voisées).'
            },
            {
              term: 'Fricative',
              def: 'Consonne produite par un resserrement du conduit vocal engendrant un bruit de friction continu. Exemples : [f], [s], [ʃ], [v], [z], [ʒ].'
            },
            {
              term: 'Coarticulation',
              def: 'Phénomène par lequel les gestes articulatoires de sons adjacents se chevauchent dans le temps, chaque son étant influencé par son contexte phonétique.'
            },
            {
              term: 'Voyelle cardinale',
              def: 'Point de référence dans l\'espace vocalique défini par Daniel Jones, servant d\'étalon universel pour décrire les voyelles de toutes les langues.'
            }
          ],
          memos: [
            {
              front: 'Nombre clé : voyelles du français',
              back: 'Le français compte entre 12 et 16 voyelles orales selon les variétés, plus 4 voyelles nasales. C\'est l\'un des systèmes vocaliques les plus riches au monde.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La langue rotokas de Papouasie-Nouvelle-Guinée ne possède que 6 consonnes, tandis que certaines langues khoïsan d\'Afrique australe en comptent plus de 100, incluant les fameux clics.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Pour retenir les lieux d\'articulation des consonnes, partez des lèvres vers la gorge : bilabial → labiodental → alvéolaire → palatal → vélaire → uvulaire → glottal.'
            }
          ]
        },
        {
          slug: 'phonemes-allophones',
          title: 'Phonèmes et allophones',
          description: 'La distinction entre sons fonctionnels et variantes de réalisation dans une langue.',
          intro: 'La phonologie distingue les phonèmes, unités sonores qui permettent de différencier les mots, des allophones, variantes de prononciation d\'un même phonème. Cette distinction est au coeur de l\'organisation sonore de chaque langue.',
          introHighlight: 'Un phonème est une unité abstraite de la langue ; un allophone est sa réalisation concrète dans la parole. Deux sons identiques physiquement peuvent être deux phonèmes distincts dans une langue et deux allophones d\'un même phonème dans une autre.',
          sections: [
            {
              title: 'La notion de phonème',
              paragraphs: ['Un phonème est la plus petite unité sonore capable de distinguer deux mots dans une langue. En français, /p/ et /b/ sont deux phonèmes distincts car ils permettent d\'opposer des paires minimales comme « pas » /pa/ et « bas » /ba/. Le remplacement d\'un phonème par un autre change le sens du mot.', 'Le nombre de phonèmes varie considérablement d\'une langue à l\'autre. Le hawaiien en possède environ 13, le français environ 36, et certaines langues khoïsan plus de 100. Chaque langue découpe l\'espace sonore à sa manière, sélectionnant parmi les centaines de sons possibles ceux qui seront fonctionnels dans son système.'],
              highlight: 'Le test de la paire minimale est l\'outil fondamental de la phonologie : si le remplacement d\'un son par un autre dans un contexte identique change le sens, ces sons sont des phonèmes distincts.'
            },
            {
              title: 'Les allophones et la distribution complémentaire',
              paragraphs: ['Les allophones sont les différentes réalisations concrètes d\'un même phonème. En français, le /r/ peut être réalisé comme une fricative uvulaire [ʁ], un r roulé [r] ou un r grasseyé, sans que cela change le sens des mots. Ces variantes sont des allophones du phonème /r/.', 'Certains allophones sont en distribution complémentaire : ils apparaissent dans des contextes mutuellement exclusifs. En anglais, le [p] aspiré [pʰ] apparaît en début de mot (pin [pʰɪn]) et le [p] non aspiré en position post-consonantique (spin [spɪn]). Un locuteur anglophone ne perçoit pas cette différence, car elle n\'est pas fonctionnelle dans sa langue, contrairement au hindi où l\'aspiration est distinctive.'],
              highlight: 'La distribution complémentaire est le critère clé pour identifier les allophones : deux sons en distribution complémentaire ne s\'opposent jamais et sont des variantes d\'un même phonème.'
            },
            {
              title: 'Les traits distinctifs',
              paragraphs: ['Roman Jakobson et Morris Halle ont proposé de décomposer les phonèmes en traits distinctifs binaires : [+voisé] / [-voisé], [+nasal] / [-nasal], [+continu] / [-continu], etc. Chaque phonème est défini par une combinaison unique de traits. Cette approche permet de formaliser les oppositions phonologiques et de décrire les processus phonologiques de manière élégante.', 'Par exemple, en français, /b/ et /p/ ne diffèrent que par le trait [±voisé] : /b/ est [+voisé] et /p/ est [-voisé]. Les autres traits (bilabial, occlusif) sont identiques. Les traits distinctifs permettent aussi de formuler des règles phonologiques générales, comme « les occlusives se dévoisent en position finale » dans certaines langues.'],
              highlight: 'Les traits distinctifs réduisent la complexité apparente des systèmes phonologiques en montrant que les oppositions entre phonèmes reposent sur un petit nombre de propriétés binaires.'
            }
          ],
          quiz: [
            {
              q: 'Comment identifie-t-on deux phonèmes distincts dans une langue ?',
              opts: ['Par l\'analyse acoustique', 'Par le test de la paire minimale', 'Par l\'étymologie', 'Par la fréquence d\'utilisation'],
              correct: 1,
              explanation: 'Le test de la paire minimale consiste à trouver deux mots qui ne diffèrent que par un seul son et ont des sens différents (ex. : « pas » / « bas »).'
            },
            {
              q: 'Que sont les allophones ?',
              opts: ['Des phonèmes empruntés à d\'autres langues', 'Des variantes de réalisation d\'un même phonème', 'Des sons qui n\'existent pas dans la langue', 'Des consonnes doubles'],
              correct: 1,
              explanation: 'Les allophones sont les différentes réalisations concrètes d\'un même phonème. Ils ne créent pas de distinction de sens dans la langue considérée.'
            },
            {
              q: 'Qui a développé la théorie des traits distinctifs ?',
              opts: ['Ferdinand de Saussure', 'Noam Chomsky', 'Roman Jakobson', 'Leonard Bloomfield'],
              correct: 2,
              explanation: 'Roman Jakobson, avec Morris Halle, a proposé dans les années 1950 de décomposer les phonèmes en traits distinctifs binaires.'
            }
          ],
          definitions: [
            {
              term: 'Phonème',
              def: 'Plus petite unité sonore distinctive d\'une langue, capable de différencier deux mots. On le note entre barres obliques : /p/, /b/.'
            },
            {
              term: 'Allophone',
              def: 'Variante de réalisation concrète d\'un phonème, conditionnée par le contexte phonétique ou par des facteurs sociolinguistiques. On le note entre crochets : [pʰ], [p].'
            },
            {
              term: 'Paire minimale',
              def: 'Deux mots qui ne diffèrent que par un seul son et ont des sens différents (ex. : « pain » /pɛ̃/ vs « bain » /bɛ̃/), prouvant que les sons en question sont des phonèmes distincts.'
            },
            {
              term: 'Distribution complémentaire',
              def: 'Relation entre deux sons qui n\'apparaissent jamais dans le même contexte phonétique, indiquant qu\'ils sont des allophones d\'un même phonème.'
            },
            {
              term: 'Trait distinctif',
              def: 'Propriété phonologique binaire (ex. : [±voisé], [±nasal]) permettant de décomposer les phonèmes et de décrire les oppositions au sein d\'un système phonologique.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Troubetzkoy',
              back: 'En 1939, Nikolaï Troubetzkoy publie les Principes de phonologie, oeuvre fondatrice qui distingue rigoureusement phonétique et phonologie et formalise la notion de phonème.'
            },
            {
              front: 'Nombre clé : phonèmes du français',
              back: 'Le français standard compte environ 36 phonèmes : 16 voyelles (dont 4 nasales) et 20 consonnes (dont 3 semi-consonnes).'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Phonème = entre /barres obliques/ (abstrait, dans la langue). Allophone = entre [crochets] (concret, dans la parole). Pensez : /Phonème/ est le Plan, [allophone] est l\'Action.'
            }
          ]
        },
        {
          slug: 'prosodie',
          title: 'La prosodie',
          description: 'L\'étude de l\'intonation, du rythme, de l\'accent et des tons dans les langues du monde.',
          intro: 'La prosodie englobe les phénomènes sonores qui dépassent le segment individuel : l\'intonation, le rythme, l\'accent et les tons. Ces paramètres suprasegmentaux structurent la parole en unités significatives et véhiculent des informations essentielles sur le sens et l\'intention du locuteur.',
          introHighlight: 'La prosodie est la musique de la langue : elle permet de distinguer une question d\'une affirmation, de signaler l\'ironie ou l\'émotion, et de hiérarchiser l\'information dans le discours.',
          sections: [
            {
              title: 'L\'accent et le rythme',
              paragraphs: ['L\'accent est une proéminence portée sur une syllabe par rapport aux syllabes voisines. Il peut être réalisé par une augmentation de la durée, de l\'intensité ou de la hauteur. En français, l\'accent est fixe et tombe sur la dernière syllabe du groupe rythmique. En anglais ou en russe, l\'accent est libre et peut distinguer des mots (« import » nom vs « import » verbe en anglais).', 'Le rythme de la parole dépend de l\'organisation temporelle des syllabes et des accents. On distingue traditionnellement les langues isoaccentuelles (anglais, allemand), où les accents sont régulièrement espacés, et les langues isosyllabiques (français, espagnol), où les syllabes ont des durées plus régulières. Cette typologie, bien que simplificatrice, capture des tendances réelles.'],
              highlight: 'L\'accent français est remarquable par sa régularité : il frappe toujours la dernière syllabe du groupe rythmique, ce qui donne au français son rythme caractéristique.'
            },
            {
              title: 'L\'intonation',
              paragraphs: ['L\'intonation désigne la variation mélodique de la voix au cours d\'un énoncé. En français, une intonation montante en fin de phrase signale une question (« Tu viens ? »), tandis qu\'une intonation descendante marque l\'assertion (« Tu viens. »). L\'intonation peut aussi exprimer la surprise, le doute, l\'ironie ou l\'insistance.', 'L\'analyse de l\'intonation repose sur le modèle autosegmental-métrique, qui décompose la mélodie en tons hauts (H) et bas (L) associés à des positions accentuelles. Ce modèle, développé par Janet Pierrehumbert dans les années 1980, permet de formaliser les contours intonatifs de manière systématique et de comparer les systèmes prosodiques de différentes langues.'],
              highlight: 'L\'intonation est le premier indice prosodique acquis par le nourrisson : dès la naissance, les bébés distinguent les langues par leur mélodie caractéristique.'
            },
            {
              title: 'Les langues tonales',
              paragraphs: ['Dans les langues tonales, la hauteur mélodique fait partie intégrante de la structure lexicale : un même enchaînement de consonnes et de voyelles peut désigner des mots différents selon le ton employé. Le mandarin possède quatre tons (haut plat, montant, descendant-montant, descendant) plus un ton neutre. Le cantonais en distingue six, et certaines langues africaines encore davantage.', 'Les langues à tons ne se limitent pas à l\'Asie. Le yoruba (Nigeria) distingue trois tons, le zulu (Afrique du Sud) est tonal, et même certaines langues amérindiennes et européennes présentent des phénomènes tonaux. Le suédois et le norvégien, par exemple, possèdent un accent de mot à composante tonale qui distingue des paires minimales.'],
              highlight: 'Plus de la moitié des langues du monde sont tonales. Les tons sont particulièrement répandus en Afrique subsaharienne, en Asie du Sud-Est et en Mésoamérique.'
            }
          ],
          quiz: [
            {
              q: 'Sur quelle syllabe tombe l\'accent en français ?',
              opts: ['La première syllabe', 'L\'avant-dernière syllabe', 'La dernière syllabe du groupe rythmique', 'La syllabe la plus longue'],
              correct: 2,
              explanation: 'En français, l\'accent est fixe et frappe la dernière syllabe du groupe rythmique, contrairement à l\'anglais ou au russe où il est libre.'
            },
            {
              q: 'Combien de tons le mandarin standard possède-t-il ?',
              opts: ['2', '3', '4', '6'],
              correct: 2,
              explanation: 'Le mandarin standard possède quatre tons lexicaux (haut plat, montant, descendant-montant, descendant) plus un ton neutre non accentué.'
            },
            {
              q: 'Qui a développé le modèle autosegmental-métrique de l\'intonation ?',
              opts: ['Roman Jakobson', 'Janet Pierrehumbert', 'Noam Chomsky', 'André Martinet'],
              correct: 1,
              explanation: 'Janet Pierrehumbert a formalisé le modèle autosegmental-métrique dans sa thèse de 1980 au MIT, permettant une description systématique de l\'intonation.'
            }
          ],
          definitions: [
            {
              term: 'Prosodie',
              def: 'Ensemble des phénomènes phoniques qui dépassent le segment individuel : accent, rythme, intonation, tons. On parle aussi de traits suprasegmentaux.'
            },
            {
              term: 'Accent',
              def: 'Mise en relief d\'une syllabe par rapport aux autres, réalisée par la durée, l\'intensité ou la hauteur. Il peut être fixe (français) ou libre (anglais).'
            },
            {
              term: 'Intonation',
              def: 'Variation mélodique de la voix au cours d\'un énoncé, véhiculant des informations sur le type de phrase (question, assertion) et l\'attitude du locuteur.'
            },
            {
              term: 'Langue tonale',
              def: 'Langue dans laquelle la hauteur mélodique (le ton) fait partie de la structure lexicale et permet de distinguer des mots qui ont les mêmes segments consonantiques et vocaliques.'
            },
            {
              term: 'Isosyllabique',
              def: 'Type de rythme linguistique où les syllabes ont des durées relativement égales (français, espagnol), par opposition aux langues isoaccentuelles (anglais, allemand).'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'En mandarin, « mā » (ton haut) signifie « mère », « má » (ton montant) signifie « chanvre », « mǎ » (ton descendant-montant) signifie « cheval » et « mà » (ton descendant) signifie « insulter ».'
            },
            {
              front: 'Nombre clé : langues tonales',
              back: 'Plus de 50 % des langues du monde sont tonales. Le record revient à certaines langues hmong et otomangues avec jusqu\'à 8 ou 9 tons distincts.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'SUPRAsegmental = ce qui est AU-DESSUS des segments individuels. La prosodie est la mélodie qui surplombe les sons comme une partition musicale surplombe les notes.'
            }
          ]
        },
        {
          slug: 'phonologie-processus',
          title: 'Les processus phonologiques',
          description: 'Les règles et transformations systématiques qui modifient les sons dans la parole continue.',
          intro: 'Les processus phonologiques sont des modifications régulières et prévisibles que subissent les sons dans certains contextes. L\'assimilation, l\'élision, l\'épenthèse et la métathèse sont autant de mécanismes qui façonnent la prononciation réelle des mots dans la parole continue.',
          introHighlight: 'Les processus phonologiques révèlent que la prononciation d\'un mot n\'est pas une simple concaténation de sons isolés, mais le résultat d\'un système de règles actives qui optimisent l\'articulation.',
          sections: [
            {
              title: 'L\'assimilation',
              paragraphs: ['L\'assimilation est un processus par lequel un son acquiert un ou plusieurs traits d\'un son voisin. Elle peut être progressive (le son influence celui qui suit) ou régressive (le son est influencé par celui qui suit). En français, le préfixe « in- » se transforme en « im- » devant une bilabiale (« impossible »), en « il- » devant /l/ (« illégal ») et en « ir- » devant /r/ (« irréel »).', 'L\'assimilation de voisement est très courante en français parlé. Dans « médecin » [mɛtsɛ̃], le /d/ se dévoise au contact du /s/ sourd qui suit. Dans « absurde » [apsyrd], le /b/ tend à se dévoiser devant /s/. Ces phénomènes, souvent inconscients, témoignent de la tendance naturelle à minimiser les contrastes articulatoires entre sons adjacents.'],
              highlight: 'L\'assimilation est le processus phonologique le plus universel : on le retrouve dans toutes les langues du monde, car il résulte de la tendance naturelle à économiser l\'effort articulatoire.'
            },
            {
              title: 'L\'élision et la liaison',
              paragraphs: ['L\'élision est la suppression d\'un son, généralement une voyelle, au contact d\'un autre son vocalique. En français, elle est grammaticalisée dans l\'écriture (« l\'arbre » pour « le arbre »), mais elle se produit aussi dans la parole courante sans être notée (« j\'sais pas » pour « je ne sais pas »).', 'La liaison est un phénomène propre au français par lequel une consonne finale muette se prononce devant un mot commençant par une voyelle : « les amis » [lezami], « un enfant » [ɛ̃nɑ̃fɑ̃]. La liaison est obligatoire dans certains contextes (déterminant + nom), facultative dans d\'autres (verbe + complément) et interdite dans certains cas (après « et », devant « h aspiré »).'],
              highlight: 'La liaison française est un vestige de la prononciation médiévale, quand les consonnes finales se prononçaient systématiquement. Elle crée un phénomène de resyllabation qui brouille les frontières de mots.'
            },
            {
              title: 'L\'épenthèse et la métathèse',
              paragraphs: ['L\'épenthèse est l\'insertion d\'un son dans un mot pour faciliter la prononciation. En français, un [t] épenthétique apparaît dans « va-t-il » ou « a-t-on ». En espagnol, un [e] est ajouté devant les groupes consonantiques initiaux (« escuela » du latin « schola »). L\'épenthèse est souvent motivée par des contraintes phonotactiques propres à chaque langue.', 'La métathèse est la permutation de deux sons dans un mot. Ce phénomène explique l\'évolution de nombreux mots : le latin « formaticum » est devenu « fromage » par métathèse du /r/. En parole spontanée, les lapsus de type métathétique sont fréquents (« aréoport » pour « aéroport »). La métathèse est un moteur important du changement linguistique.'],
              highlight: 'L\'épenthèse et la métathèse illustrent la tension permanente entre la forme sous-jacente des mots et les contraintes articulatoires qui les remodèlent dans la parole.'
            }
          ],
          quiz: [
            {
              q: 'Comment appelle-t-on le processus par lequel « in- » devient « im- » devant « possible » ?',
              opts: ['Élision', 'Métathèse', 'Assimilation', 'Épenthèse'],
              correct: 2,
              explanation: 'C\'est une assimilation de lieu : le /n/ alvéolaire prend le lieu d\'articulation bilabial du /p/ qui suit, devenant [m].'
            },
            {
              q: 'Quel phénomène explique le passage du latin « formaticum » au français « fromage » ?',
              opts: ['L\'assimilation', 'L\'épenthèse', 'La liaison', 'La métathèse'],
              correct: 3,
              explanation: 'La métathèse est la permutation de deux sons. Le /r/ a changé de position dans le mot au cours de l\'évolution du latin au français.'
            },
            {
              q: 'Dans « les amis » [lezami], quel phénomène se produit ?',
              opts: ['L\'élision', 'La liaison', 'L\'épenthèse', 'L\'assimilation'],
              correct: 1,
              explanation: 'La liaison est la prononciation d\'une consonne finale normalement muette devant un mot commençant par une voyelle.'
            }
          ],
          definitions: [
            {
              term: 'Assimilation',
              def: 'Processus par lequel un son acquiert un ou plusieurs traits articulatoires d\'un son voisin, rendant les sons adjacents plus semblables.'
            },
            {
              term: 'Élision',
              def: 'Suppression d\'un son (généralement une voyelle atone) au contact d\'un autre son. En français : « l\'ami » pour « le ami ».'
            },
            {
              term: 'Liaison',
              def: 'Phénomène propre au français où une consonne finale muette se prononce devant un mot à initiale vocalique (« les amis » → [lezami]).'
            },
            {
              term: 'Épenthèse',
              def: 'Insertion d\'un son non étymologique dans un mot pour faciliter la prononciation ou respecter les contraintes phonotactiques de la langue.'
            },
            {
              term: 'Métathèse',
              def: 'Permutation de deux sons à l\'intérieur d\'un mot, souvent observée dans l\'évolution historique des langues (latin « formaticum » → français « fromage »).'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot « brebis » vient du latin « berbex » (variante de « vervex ») par métathèse du /r/. De même, « moustique » vient de l\'espagnol « mosquito » avec épenthèse du /t/.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'ALEM : Assimilation (un son COPIE son voisin), Liaison (une consonne REVIENT), Épenthèse (un son S\'AJOUTE), Métathèse (deux sons ÉCHANGENT leurs places).'
            },
            {
              front: 'Nombre clé : liaisons',
              back: 'On dénombre environ 80 contextes de liaison en français. La liaison est obligatoire dans une trentaine de cas, facultative dans une quarantaine, et interdite dans les autres.'
            }
          ]
        }
      ]
    },
    {
      slug: 'morphologie',
      title: 'Morphologie',
      description: 'L\'étude de la structure interne des mots : morphèmes, affixes, flexion et dérivation.',
      introText: 'La morphologie est la branche de la linguistique qui étudie la forme des mots et les règles de leur formation. Elle analyse les unités minimales de sens (les morphèmes) et les processus qui permettent de créer de nouveaux mots ou de modifier leur forme grammaticale.',
      introHighlight: 'La morphologie révèle que les mots ne sont pas des unités atomiques : ils sont composés de briques élémentaires (les morphèmes) qui se combinent selon des règles précises propres à chaque langue.',
      lessons: [
        {
          slug: 'morphemes',
          title: 'Les morphèmes',
          description: 'Les unités minimales de sens qui composent les mots.',
          intro: 'Le morphème est la plus petite unité linguistique porteuse de sens. Le mot « inutilisables » contient quatre morphèmes : « in- » (négation), « utilis- » (racine), « -able » (possibilité) et « -s » (pluriel). L\'analyse morphémique décompose les mots pour en révéler la structure interne.',
          introHighlight: 'Alors que le phonème est la plus petite unité distinctive du son, le morphème est la plus petite unité distinctive du sens. C\'est la brique élémentaire de la grammaire.',
          sections: [
            {
              title: 'Morphèmes libres et liés',
              paragraphs: ['Un morphème libre peut fonctionner seul comme un mot autonome : « chat », « bleu », « vite » sont des morphèmes libres. Un morphème lié ne peut apparaître qu\'attaché à un autre morphème : « -ment » (adverbialisateur), « re- » (répétition), « -s » (pluriel) sont des morphèmes liés. La distinction entre morphèmes libres et liés varie selon les langues.', 'En français, la plupart des racines lexicales sont des morphèmes libres, tandis que les affixes (préfixes et suffixes) sont des morphèmes liés. En turc ou en swahili, langues fortement agglutinantes, un seul mot peut contenir de nombreux morphèmes liés, exprimant en un seul mot ce qui nécessiterait une phrase entière en français.'],
              highlight: 'La distinction morphème libre / morphème lié est fondamentale : elle détermine si une unité de sens peut exister de manière autonome ou si elle doit obligatoirement s\'attacher à une autre.'
            },
            {
              title: 'Racines, bases et affixes',
              paragraphs: ['La racine est le noyau sémantique irréductible du mot, porteur du sens lexical principal. Dans « défaire », « refaire », « faisable », la racine est « fai- » (variante de « faire »). La base est la forme à laquelle s\'ajoutent les affixes : elle peut être identique à la racine ou inclure déjà un ou plusieurs affixes.', 'Les affixes se divisent en préfixes (placés avant la base : « re-faire », « dé-faire »), suffixes (placés après : « fais-able », « fais-eur ») et, dans certaines langues, infixes (insérés dans la base) et circumfixes (entourant la base). En français, les préfixes modifient généralement le sens sans changer la catégorie grammaticale, tandis que les suffixes changent souvent la catégorie (« utile » adjectif → « utiliser » verbe → « utilisation » nom).'],
              highlight: 'Les préfixes français modifient le sens (faire → défaire), les suffixes changent la catégorie grammaticale (utile → utiliser → utilisation). Cette asymétrie est une propriété fondamentale de la morphologie du français.'
            },
            {
              title: 'L\'allomorphie',
              paragraphs: ['Un morphème peut avoir plusieurs réalisations phonologiques, appelées allomorphes. En français, le morphème de négation « in- » a trois allomorphes : [in] devant voyelle (« inactif »), [im] devant bilabiale (« impossible »), [il] devant /l/ (« illégal »), [ir] devant /r/ (« irréel »). Le choix de l\'allomorphe dépend du contexte phonologique.', 'L\'allomorphie peut aussi être morphologiquement conditionnée. En français, le pluriel se marque par « -s » à l\'écrit dans la plupart des cas, mais par « -x » pour certains mots (« chevaux ») ou par un changement de la racine (« oeil » → « yeux »). Ces irrégularités sont souvent des vestiges d\'états antérieurs de la langue.'],
              highlight: 'L\'allomorphie est au morphème ce que l\'allophonie est au phonème : un même morphème peut se réaliser sous des formes différentes selon le contexte, sans que le sens change.'
            }
          ],
          quiz: [
            {
              q: 'Combien de morphèmes contient le mot « inutilisables » ?',
              opts: ['2', '3', '4', '5'],
              correct: 2,
              explanation: '« Inutilisables » contient 4 morphèmes : « in- » (négation) + « utilis- » (racine) + « -able » (possibilité) + « -s » (pluriel).'
            },
            {
              q: 'Qu\'est-ce qu\'un morphème lié ?',
              opts: ['Un mot autonome', 'Un morphème qui ne peut exister qu\'attaché à un autre', 'Un morphème emprunté', 'Un morphème archaïque'],
              correct: 1,
              explanation: 'Un morphème lié ne peut pas fonctionner seul comme mot. Les affixes comme « -ment », « re- » ou « -s » sont des morphèmes liés.'
            },
            {
              q: 'Comment appelle-t-on les différentes réalisations d\'un même morphème ?',
              opts: ['Des allophones', 'Des synonymes', 'Des allomorphes', 'Des homonymes'],
              correct: 2,
              explanation: 'Les allomorphes sont les variantes de réalisation d\'un même morphème selon le contexte (ex. : « in- » / « im- » / « il- » / « ir- »).'
            }
          ],
          definitions: [
            {
              term: 'Morphème',
              def: 'Plus petite unité linguistique porteuse de sens. Unité de base de l\'analyse morphologique, elle ne peut être décomposée en unités significatives plus petites.'
            },
            {
              term: 'Morphème libre',
              def: 'Morphème pouvant fonctionner seul comme un mot autonome (ex. : « chat », « bleu »). Il s\'oppose au morphème lié.'
            },
            {
              term: 'Morphème lié',
              def: 'Morphème qui ne peut apparaître qu\'attaché à un autre morphème (ex. : « -ment », « re- », « -s »). Les affixes sont des morphèmes liés.'
            },
            {
              term: 'Allomorphe',
              def: 'Variante de réalisation d\'un morphème selon le contexte phonologique ou morphologique (ex. : « in- » → « im- » devant [p]).'
            },
            {
              term: 'Affixe',
              def: 'Morphème lié qui s\'ajoute à une base pour en modifier le sens ou la catégorie grammaticale. Comprend les préfixes, les suffixes, les infixes et les circumfixes.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Baudouin de Courtenay',
              back: 'Le concept de morphème a été formalisé par le linguiste polonais Jan Baudouin de Courtenay dans les années 1880, avant d\'être popularisé par Leonard Bloomfield dans les années 1930.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot turc « evlerinizden » (« de vos maisons ») contient 4 morphèmes liés après la racine « ev » (maison) : -ler (pluriel) + -iniz (votre) + -den (provenance).'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Morphème = Minimum de Meaning. Le morphème est la plus petite unité de SENS, tout comme le phonème est la plus petite unité de SON.'
            }
          ]
        },
        {
          slug: 'flexion',
          title: 'La flexion',
          description: 'Les modifications grammaticales des mots : conjugaison, déclinaison, accord.',
          intro: 'La flexion est le processus morphologique qui modifie la forme d\'un mot pour exprimer des catégories grammaticales comme le nombre, le genre, la personne, le temps ou le cas. Contrairement à la dérivation, la flexion ne change ni le sens lexical ni la catégorie grammaticale du mot.',
          introHighlight: 'La flexion est la morphologie de la grammaire : elle adapte les mots à leur fonction dans la phrase sans en modifier le sens fondamental.',
          sections: [
            {
              title: 'Les catégories flexionnelles',
              paragraphs: ['Les langues du monde expriment par la flexion des catégories variées. Le nombre (singulier, pluriel, duel) affecte les noms et les pronoms. Le genre (masculin, féminin, neutre) caractérise les noms et conditionne l\'accord des adjectifs et des déterminants. La personne (1re, 2e, 3e) et le nombre s\'expriment dans la conjugaison verbale.', 'Le temps (passé, présent, futur), l\'aspect (accompli, inaccompli) et le mode (indicatif, subjonctif, impératif) structurent le système verbal. Le cas (nominatif, accusatif, datif, génitif, etc.) marque la fonction syntaxique des noms dans les langues à déclinaisons comme le latin, l\'allemand ou le russe. Le français a perdu la déclinaison nominale mais la conserve dans les pronoms (je/me/moi).'],
              highlight: 'Le français conserve une flexion verbale riche (environ 50 formes par verbe) mais a considérablement réduit sa flexion nominale par rapport au latin, qui distinguait six cas.'
            },
            {
              title: 'La conjugaison française',
              paragraphs: ['Le système de conjugaison français distingue trois groupes de verbes selon la terminaison de l\'infinitif et le modèle de conjugaison. Le premier groupe (verbes en « -er ») est le plus productif et le plus régulier. Le deuxième groupe (verbes en « -ir » avec participe en « -issant ») est semi-productif. Le troisième groupe rassemble les verbes irréguliers.', 'La conjugaison française exprime le temps (présent, passé, futur), l\'aspect (accompli par les temps composés, inaccompli par les temps simples), le mode (indicatif, subjonctif, conditionnel, impératif) et la personne (six formes : trois au singulier, trois au pluriel). À l\'oral, de nombreuses distinctions s\'effacent : « je chante », « tu chantes », « il chante » et « ils chantent » se prononcent de manière identique.'],
              highlight: 'La conjugaison française présente un paradoxe : très riche à l\'écrit (environ 50 formes distinctes par verbe), elle est fortement réduite à l\'oral, où de nombreuses personnes se confondent.'
            },
            {
              title: 'La supplétion et les paradigmes irréguliers',
              paragraphs: ['La supplétion est un phénomène flexionnel où les formes d\'un même paradigme proviennent de racines différentes. En français, « aller » présente une supplétion remarquable : « je vais » (base « va- »), « nous allons » (base « all- »), « j\'irai » (base « ir- »). Le verbe « être » est encore plus supplétif : « suis », « es », « est », « sommes », « êtes », « sont », « étais », « fus », « serai ».', 'Les paradigmes irréguliers sont souvent les vestiges de systèmes flexionnels anciens. Les verbes les plus fréquents tendent à être les plus irréguliers, car leur usage constant les protège de la régularisation analogique. C\'est pourquoi « être », « avoir », « aller » et « faire » sont les verbes les plus irréguliers du français.'],
              highlight: 'La supplétion du verbe « aller » (vais / allons / irai) reflète la fusion de trois verbes latins distincts : « vadere », « ambulare » et « ire ».'
            }
          ],
          quiz: [
            {
              q: 'Combien de cas le latin distinguait-il pour les noms ?',
              opts: ['3', '4', '6', '8'],
              correct: 2,
              explanation: 'Le latin possédait six cas : nominatif, vocatif, accusatif, génitif, datif et ablatif, chacun marquant une fonction syntaxique différente.'
            },
            {
              q: 'Quel phénomène flexionnel illustre le verbe « aller » (vais / allons / irai) ?',
              opts: ['L\'allomorphie', 'La supplétion', 'La dérivation', 'L\'agglutination'],
              correct: 1,
              explanation: 'La supplétion se produit quand les formes d\'un paradigme proviennent de racines différentes. « Aller » combine trois racines latines distinctes.'
            },
            {
              q: 'Combien de groupes de conjugaison distingue-t-on traditionnellement en français ?',
              opts: ['2', '3', '4', '5'],
              correct: 1,
              explanation: 'Le français distingue trois groupes : les verbes en « -er » (1er), les verbes en « -ir/-issant » (2e) et les verbes irréguliers (3e).'
            }
          ],
          definitions: [
            {
              term: 'Flexion',
              def: 'Modification de la forme d\'un mot pour exprimer des catégories grammaticales (nombre, genre, temps, personne, cas) sans changer son sens lexical ni sa catégorie.'
            },
            {
              term: 'Déclinaison',
              def: 'Flexion des noms, adjectifs et pronoms selon le cas grammatical. Le français l\'a perdue pour les noms mais la conserve dans les pronoms (je/me/moi).'
            },
            {
              term: 'Conjugaison',
              def: 'Flexion des verbes selon la personne, le nombre, le temps, l\'aspect et le mode. Le français possède un système de conjugaison particulièrement riche.'
            },
            {
              term: 'Supplétion',
              def: 'Phénomène où les formes d\'un même paradigme flexionnel proviennent de racines étymologiquement différentes (ex. : « aller » → vais / allons / irai).'
            },
            {
              term: 'Paradigme',
              def: 'Ensemble des formes fléchies d\'un même mot. Le paradigme de « chat » comprend : chat, chats, chatte, chattes.'
            }
          ],
          memos: [
            {
              front: 'Nombre clé : formes verbales',
              back: 'Un verbe français régulier du 1er groupe possède environ 50 formes fléchies distinctes à l\'écrit (6 personnes × 8 temps simples + participes + infinitif).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le hongrois possède environ 18 cas grammaticaux, le finnois 15, et le tsez (langue du Caucase) plus de 60. Le français a réduit les 6 cas du latin à 0 pour les noms.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Flexion = Forme qui Fléchit selon la grammaire. Dérivation = Dérive vers un nouveau mot. La flexion change la forme, la dérivation change le mot.'
            }
          ]
        },
        {
          slug: 'derivation',
          title: 'La dérivation',
          description: 'La formation de nouveaux mots par l\'ajout d\'affixes à une base existante.',
          intro: 'La dérivation est le processus morphologique qui crée de nouveaux mots à partir de mots existants en ajoutant des affixes. Contrairement à la flexion, la dérivation modifie le sens lexical ou la catégorie grammaticale du mot de base. C\'est le mécanisme le plus productif d\'enrichissement du vocabulaire.',
          introHighlight: 'La dérivation est le moteur principal de la création lexicale en français : elle permet de produire des milliers de mots nouveaux à partir d\'un stock limité de racines et d\'affixes.',
          sections: [
            {
              title: 'La préfixation',
              paragraphs: ['La préfixation consiste à ajouter un préfixe devant la base d\'un mot. En français, les préfixes modifient le sens sans changer la catégorie grammaticale : « faire » (verbe) → « défaire » (verbe), « heureux » (adjectif) → « malheureux » (adjectif). Les préfixes les plus productifs incluent « re- » (répétition), « dé-/des- » (inversion), « in-/im- » (négation), « pré- » (antériorité), « sur- » (excès).', 'Certains préfixes sont d\'origine latine (« pré- », « post- », « inter- », « trans- »), d\'autres d\'origine grecque (« anti- », « hyper- », « hypo- », « méta- »). Les préfixes grecs sont particulièrement productifs dans le vocabulaire scientifique et technique. La préfixation est un processus transparent : le sens du mot dérivé se déduit généralement du sens du préfixe et de celui de la base.'],
              highlight: 'La préfixation française est remarquablement transparente : connaître le sens d\'un préfixe et celui de la base suffit presque toujours à comprendre le mot dérivé.'
            },
            {
              title: 'La suffixation',
              paragraphs: ['La suffixation ajoute un suffixe après la base et, contrairement à la préfixation, change souvent la catégorie grammaticale du mot. Les suffixes nominalisateurs transforment un verbe ou un adjectif en nom : « -tion » (informer → information), « -ment » (changer → changement), « -eur » (chanter → chanteur). Les suffixes adjectivaux créent des adjectifs : « -able » (manger → mangeable), « -eux » (danger → dangereux).', 'Les suffixes verbalisateurs transforment un nom ou un adjectif en verbe : « -iser » (moderne → moderniser), « -ifier » (simple → simplifier). Les suffixes adverbiaux sont limités en français : « -ment » est le seul suffixe productif pour former des adverbes à partir d\'adjectifs (« lente → lentement »). La suffixation est plus opaque que la préfixation car elle modifie davantage la forme de la base.'],
              highlight: 'La suffixation est le processus dérivationnel le plus productif en français. Le suffixe « -tion » a généré à lui seul des milliers de noms d\'action dans le vocabulaire français.'
            },
            {
              title: 'La parasynthèse et la conversion',
              paragraphs: ['La parasynthèse combine simultanément un préfixe et un suffixe autour d\'une base : « em-poison-ner », « en-sol-eill-er », « a-terr-ir ». Le mot parasynthétique ne peut exister sans les deux affixes à la fois : il n\'existe ni *« empoisonne » (sans -er) ni *« poisonner » (sans em-). Ce processus est très productif en français pour former des verbes à partir de noms ou d\'adjectifs.', 'La conversion (ou dérivation impropre) change la catégorie grammaticale d\'un mot sans aucune modification formelle : « le dîner » (nom) vient de « dîner » (verbe), « le rouge » (nom) vient de « rouge » (adjectif). La conversion est fréquente en anglais (« to walk » → « a walk ») et en français, bien que moins visible car masquée par les déterminants.'],
              highlight: 'La parasynthèse illustre la complexité de la morphologie française : l\'ajout simultané de deux affixes crée un sens que ni le préfixe ni le suffixe ne pourraient produire seuls.'
            }
          ],
          quiz: [
            {
              q: 'Quelle est la principale différence entre préfixation et suffixation en français ?',
              opts: ['La préfixation est plus fréquente', 'La suffixation change souvent la catégorie grammaticale', 'La préfixation change le genre', 'La suffixation est plus ancienne'],
              correct: 1,
              explanation: 'En français, les préfixes modifient le sens sans changer la catégorie (faire → défaire), tandis que les suffixes changent souvent la catégorie (utile → utiliser → utilisation).'
            },
            {
              q: 'Qu\'est-ce que la parasynthèse ?',
              opts: ['L\'ajout d\'un suffixe seul', 'L\'ajout simultané d\'un préfixe et d\'un suffixe', 'La suppression d\'un affixe', 'Le changement de catégorie sans modification'],
              correct: 1,
              explanation: 'La parasynthèse ajoute simultanément un préfixe et un suffixe (em-barqu-er, en-sol-eill-er). Le mot ne peut exister sans les deux affixes.'
            },
            {
              q: 'Comment appelle-t-on le passage de « dîner » (verbe) à « le dîner » (nom) ?',
              opts: ['La suffixation', 'La parasynthèse', 'La conversion', 'La composition'],
              correct: 2,
              explanation: 'La conversion (ou dérivation impropre) change la catégorie grammaticale d\'un mot sans modification formelle.'
            }
          ],
          definitions: [
            {
              term: 'Dérivation',
              def: 'Processus morphologique créant un nouveau mot par ajout d\'un ou plusieurs affixes à une base, modifiant le sens et/ou la catégorie grammaticale.'
            },
            {
              term: 'Préfixation',
              def: 'Ajout d\'un morphème (préfixe) avant la base d\'un mot. En français, elle modifie le sens sans changer la catégorie grammaticale (faire → refaire).'
            },
            {
              term: 'Suffixation',
              def: 'Ajout d\'un morphème (suffixe) après la base d\'un mot. En français, elle change souvent la catégorie grammaticale (utile → utiliser → utilisation).'
            },
            {
              term: 'Parasynthèse',
              def: 'Formation d\'un mot par ajout simultané d\'un préfixe et d\'un suffixe à une base, les deux affixes étant indissociables (em-barqu-er, en-sol-eill-er).'
            },
            {
              term: 'Conversion',
              def: 'Changement de catégorie grammaticale d\'un mot sans modification de sa forme (« dîner » verbe → « le dîner » nom). Aussi appelée dérivation impropre.'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le français possède environ 80 préfixes et 200 suffixes productifs. Le suffixe « -tion » est le plus productif : il a généré plus de 5 000 noms dans le vocabulaire courant.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'PRÉfixe = AVANT la base (pré = avant en latin). SUFfixe = SOUS la base, c\'est-à-dire APRÈS (sub = sous en latin, car les Romains écrivaient de gauche à droite).'
            },
            {
              front: 'Nombre clé : productivité',
              back: 'En français, le 1er groupe de verbes (-er) est le modèle le plus productif : 90% des verbes nouveaux suivent ce patron (« googler », « tweeter », « liker »).'
            }
          ]
        },
        {
          slug: 'composition',
          title: 'La composition',
          description: 'La formation de mots nouveaux par combinaison de mots existants.',
          intro: 'La composition est un processus morphologique qui crée un mot nouveau en combinant deux ou plusieurs mots existants. Le mot composé désigne un concept unitaire qui ne se réduit pas à la simple addition de ses composants.',
          introHighlight: 'La composition est, avec la dérivation, le principal mécanisme d\'enrichissement du vocabulaire. Elle reflète la capacité de la langue à nommer de nouvelles réalités en combinant des concepts connus.',
          sections: [
            {
              title: 'Les types de composition',
              paragraphs: ['La composition populaire combine des mots du fonds français selon la syntaxe de la langue : « porte-monnaie » (verbe + nom), « coffre-fort » (nom + adjectif), « pomme de terre » (nom + préposition + nom). Ces composés suivent les règles syntaxiques du français, notamment l\'ordre déterminé-déterminant (le nom principal précède le complément).', 'La composition savante combine des éléments d\'origine grecque ou latine : « anthropologie » (anthrôpos « homme » + logos « discours »), « télévision » (têle « loin » + visio « vision »), « automobile » (autos « soi-même » + mobilis « mobile »). Ces composés sont particulièrement productifs dans le vocabulaire scientifique et technique. Contrairement à la composition populaire, l\'ordre est souvent déterminant-déterminé.'],
              highlight: 'La composition savante gréco-latine est le principal moteur de la terminologie scientifique internationale : « biologie », « géographie », « philosophie » sont des composés transparents pour qui connaît les racines.'
            },
            {
              title: 'Propriétés des mots composés',
              paragraphs: ['Un mot composé se distingue d\'une simple combinaison de mots par plusieurs critères. Son sens est unitaire et souvent non compositionnel : un « rouge-gorge » n\'est pas simplement quelque chose de rouge avec une gorge, mais un oiseau spécifique. Son référent est unique et stable. On ne peut généralement pas insérer un élément entre les composants ni les modifier individuellement.', 'Le pluriel des mots composés suit des règles complexes en français. Les noms et adjectifs prennent la marque du pluriel (« des coffres-forts »), mais les verbes et les prépositions restent invariables (« des porte-monnaie »). La réforme orthographique de 1990 a simplifié certaines règles, autorisant « des porte-monnaies » avec un -s au second élément.'],
              highlight: 'Le sens d\'un mot composé est souvent non compositionnel : un « arc-en-ciel » n\'est pas un arc dans un ciel, et un « gratte-ciel » ne gratte pas le ciel. Le sens global est plus que la somme des parties.'
            },
            {
              title: 'Les néologismes et la créativité lexicale',
              paragraphs: ['La composition est un procédé vivant qui continue de produire des mots nouveaux. Le français contemporain crée régulièrement des composés pour nommer de nouvelles réalités : « autoroute », « grille-pain », « lave-vaisselle ». Les emprunts à l\'anglais enrichissent aussi le stock de composés : « week-end », « fast-food », « smartphone ».', 'D\'autres procédés de création lexicale complètent la dérivation et la composition. La troncation raccourcit les mots (« télévision » → « télé », « métropolitain » → « métro »). L\'acronymie forme des mots à partir d\'initiales (« SIDA », « ONU », « OTAN »). Le mot-valise fusionne deux mots (« franglais » = français + anglais, « courriel » = courrier + électronique).'],
              highlight: 'Le français contemporain puise dans tous les procédés de formation pour nommer les réalités nouvelles : composition (« smartphone »), troncation (« appli »), siglaison (« SMS »), mot-valise (« courriel »).'
            }
          ],
          quiz: [
            {
              q: 'De quel type de composition relève le mot « anthropologie » ?',
              opts: ['Composition populaire', 'Composition savante', 'Parasynthèse', 'Conversion'],
              correct: 1,
              explanation: '« Anthropologie » est une composition savante combinant deux éléments grecs : anthrôpos (« homme ») et logos (« discours, étude »).'
            },
            {
              q: 'Pourquoi « rouge-gorge » est-il un mot composé et non une simple combinaison ?',
              opts: ['Parce qu\'il a un trait d\'union', 'Parce que son sens est unitaire et non compositionnel', 'Parce qu\'il est ancien', 'Parce qu\'il est intraduisible'],
              correct: 1,
              explanation: 'Un mot composé a un sens unitaire : « rouge-gorge » désigne un oiseau spécifique, pas simplement une gorge rouge. Le sens global dépasse la somme des parties.'
            },
            {
              q: 'Comment appelle-t-on la fusion de deux mots comme « franglais » (français + anglais) ?',
              opts: ['Un acronyme', 'Un mot-valise', 'Un emprunt', 'Une troncation'],
              correct: 1,
              explanation: 'Un mot-valise fusionne des fragments de deux mots pour créer un mot nouveau : « franglais » = français + anglais, « courriel » = courrier + électronique.'
            }
          ],
          definitions: [
            {
              term: 'Composition',
              def: 'Processus morphologique créant un mot nouveau par combinaison de deux ou plusieurs mots existants formant un concept unitaire (ex. : « porte-monnaie », « arc-en-ciel »).'
            },
            {
              term: 'Composition savante',
              def: 'Formation de mots par combinaison d\'éléments d\'origine grecque ou latine, particulièrement productive dans le vocabulaire scientifique (ex. : « biologie », « télévision »).'
            },
            {
              term: 'Mot-valise',
              def: 'Mot créé par la fusion de fragments de deux mots existants (ex. : « courriel » = courrier + électronique, « franglais » = français + anglais).'
            },
            {
              term: 'Troncation',
              def: 'Raccourcissement d\'un mot par suppression d\'une ou plusieurs syllabes (ex. : « télévision » → « télé », « métropolitain » → « métro »).'
            },
            {
              term: 'Acronyme',
              def: 'Mot formé à partir des initiales d\'un groupe de mots, prononcé comme un mot ordinaire (ex. : « SIDA » = Syndrome d\'Immunodéficience Acquise).'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot « ordinateur » a été proposé en 1955 par le latiniste Jacques Perret à la demande d\'IBM. Il vient du latin « ordinator » (celui qui met en ordre). C\'est un rare exemple de néologisme savant adopté par le grand public.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Composition POPULAIRE = mots FRANÇAIS combinés (porte-monnaie). Composition SAVANTE = racines GRECQUES ou LATINES combinées (anthropologie). Populaire = syntaxe française, Savante = syntaxe gréco-latine.'
            },
            {
              front: 'Nombre clé : éléments savants',
              back: 'Le français utilise environ 300 éléments grecs et 200 éléments latins pour la composition savante. Connaître ces racines permet de comprendre des milliers de termes techniques.'
            }
          ]
        },
        {
          slug: 'typologie-morphologique',
          title: 'Typologie morphologique',
          description: 'La classification des langues selon leur organisation morphologique : isolantes, agglutinantes, flexionnelles.',
          intro: 'La typologie morphologique classe les langues selon la manière dont elles organisent les morphèmes au sein des mots. Cette classification révèle la diversité des stratégies que les langues humaines emploient pour encoder les relations grammaticales.',
          introHighlight: 'Aucune langue n\'est purement isolante, agglutinante ou flexionnelle : ces types sont des pôles d\'un continuum sur lequel chaque langue occupe une position unique.',
          sections: [
            {
              title: 'Les langues isolantes',
              paragraphs: ['Les langues isolantes (ou analytiques) tendent à n\'avoir qu\'un seul morphème par mot. Les relations grammaticales s\'expriment par l\'ordre des mots, les particules et les mots-outils plutôt que par des modifications morphologiques. Le mandarin en est l\'exemple classique : « wǒ » (je) ne change jamais de forme, quelle que soit sa fonction dans la phrase.', 'Le vietnamien est une autre langue fortement isolante : les mots sont invariables et les catégories grammaticales (temps, aspect, nombre) s\'expriment par des mots séparés. L\'anglais, bien que classé comme langue flexionnelle, présente une tendance analytique marquée : la plupart des noms ne se fléchissent qu\'au pluriel, et le verbe ne porte que quelques marques flexionnelles.'],
              highlight: 'Dans une langue isolante, la grammaire se fait par la position, non par la forme : l\'ordre des mots est la principale stratégie pour exprimer les relations syntaxiques.'
            },
            {
              title: 'Les langues agglutinantes',
              paragraphs: ['Les langues agglutinantes construisent des mots complexes en enchaînant des morphèmes distincts, chacun portant un sens grammatical unique. Le turc est un exemple paradigmatique : « evlerinizden » se décompose en ev (maison) + ler (pluriel) + iniz (votre) + den (provenance) = « de vos maisons ». Chaque morphème est clairement identifiable et a un sens unique.', 'Le japonais, le swahili, le hongrois et le finnois sont également des langues agglutinantes. En swahili, « nitakupenda » signifie « je t\'aimerai » : ni- (je) + ta- (futur) + ku- (toi) + penda (aimer). L\'avantage de ce système est sa régularité : les règles de combinaison sont prévisibles et les formes irrégulières rares.'],
              highlight: 'Les langues agglutinantes sont d\'une régularité remarquable : chaque morphème a un sens unique et les combinaisons sont prévisibles, ce qui facilite l\'apprentissage de la grammaire.'
            },
            {
              title: 'Les langues flexionnelles et polysynthétiques',
              paragraphs: ['Les langues flexionnelles (ou fusionnelles) expriment plusieurs catégories grammaticales par un seul morphème. En latin, la terminaison « -ō » de « amō » (j\'aime) exprime simultanément la personne (1re), le nombre (singulier), le temps (présent), le mode (indicatif) et la voix (active). Ces catégories ne peuvent pas être séparées en morphèmes distincts.', 'Les langues polysynthétiques poussent la complexité morphologique à l\'extrême. En inuktitut (langue inuite), un seul mot peut constituer une phrase entière : « tusaatsiarunnanngittualuujunga » signifie « je n\'arrive pas à bien entendre ». Le mohawk et d\'autres langues amérindiennes incorporent le nom objet dans le verbe, créant des mots-phrases d\'une grande complexité.'],
              highlight: 'Les langues polysynthétiques défient la notion même de mot : un seul mot peut exprimer ce qui nécessiterait une phrase entière dans une langue analytique comme le français.'
            }
          ],
          quiz: [
            {
              q: 'Quel type morphologique caractérise une langue où chaque mot tend à ne contenir qu\'un seul morphème ?',
              opts: ['Agglutinant', 'Flexionnel', 'Polysynthétique', 'Isolant'],
              correct: 3,
              explanation: 'Les langues isolantes (ou analytiques) tendent à n\'avoir qu\'un morphème par mot. Le mandarin et le vietnamien en sont des exemples classiques.'
            },
            {
              q: 'Quelle propriété distingue les langues agglutinantes des langues flexionnelles ?',
              opts: ['Le nombre de mots par phrase', 'La correspondance un morphème = un sens', 'L\'absence de voyelles', 'L\'ordre des mots libre'],
              correct: 1,
              explanation: 'Dans les langues agglutinantes, chaque morphème porte un sens grammatical unique, tandis que dans les langues flexionnelles, un seul morphème peut fusionner plusieurs catégories.'
            },
            {
              q: 'À quel type morphologique appartient le turc ?',
              opts: ['Isolant', 'Flexionnel', 'Agglutinant', 'Polysynthétique'],
              correct: 2,
              explanation: 'Le turc est l\'exemple classique d\'une langue agglutinante : les mots se construisent par enchaînement de morphèmes distincts et réguliers.'
            }
          ],
          definitions: [
            {
              term: 'Langue isolante',
              def: 'Langue où les mots tendent à ne contenir qu\'un seul morphème, les relations grammaticales s\'exprimant par l\'ordre des mots et les particules (ex. : mandarin, vietnamien).'
            },
            {
              term: 'Langue agglutinante',
              def: 'Langue où les mots se construisent par enchaînement de morphèmes distincts, chacun portant un sens unique et clairement identifiable (ex. : turc, swahili, japonais).'
            },
            {
              term: 'Langue flexionnelle',
              def: 'Langue où un seul morphème peut exprimer simultanément plusieurs catégories grammaticales fusionnées (ex. : latin, russe, arabe).'
            },
            {
              term: 'Langue polysynthétique',
              def: 'Langue à morphologie extrêmement complexe où un seul mot peut constituer une phrase entière par incorporation et agglutination massive (ex. : inuktitut, mohawk).'
            },
            {
              term: 'Incorporation nominale',
              def: 'Processus morphologique des langues polysynthétiques où le nom objet s\'intègre dans le complexe verbal pour former un mot unique (ex. : mohawk, nahuatl).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Wilhelm von Humboldt',
              back: 'Au début du XIXe siècle, Wilhelm von Humboldt a proposé la première classification typologique des langues en langues isolantes, agglutinantes et flexionnelles, posant les bases de la linguistique typologique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot inuktitut le plus long attesté, « tusaatsiarunnanngittualuujunga », contient 10 morphèmes en un seul mot et signifie « je n\'arrive pas à bien entendre ».'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Isolante = mots ISOLÉS (1 morphème). Agglutinante = morphèmes AGGLUTINÉS (collés) mais séparables. Flexionnelle = morphèmes FUSIONNÉS (inséparables). Polysynthétique = TOUT en un seul mot.'
            }
          ]
        }
      ]
    },
    {
      slug: 'syntaxe',
      title: 'Syntaxe',
      description: 'L\'étude de la structure des phrases : constituants, fonctions, ordre des mots et grammaire générative.',
      introText: 'La syntaxe étudie les règles qui régissent la combinaison des mots en phrases. Elle analyse la structure hiérarchique des énoncés, les relations entre les constituants et les principes universels qui sous-tendent l\'organisation grammaticale de toutes les langues humaines.',
      introHighlight: 'La syntaxe révèle que la phrase n\'est pas une simple séquence linéaire de mots, mais une structure hiérarchique arborescente où chaque constituant occupe une position précise.',
      lessons: [
        {
          slug: 'constituants-syntagmes',
          title: 'Constituants et syntagmes',
          description: 'L\'organisation hiérarchique de la phrase en groupes de mots emboîtés.',
          intro: 'La phrase se compose de constituants emboîtés les uns dans les autres selon une hiérarchie stricte. Chaque constituant, ou syntagme, est un groupe de mots organisé autour d\'un noyau (tête) qui détermine les propriétés de l\'ensemble.',
          introHighlight: 'La notion de constituant est la clé de voûte de l\'analyse syntaxique : elle montre que les mots ne se combinent pas de manière linéaire, mais forment des groupes structurés.',
          sections: [
            {
              title: 'La notion de constituant',
              paragraphs: ['Un constituant est un groupe de mots qui fonctionne comme une unité syntaxique. Plusieurs tests permettent d\'identifier les constituants : la substitution (un constituant peut être remplacé par un seul mot : « le petit chat noir » → « il »), le déplacement (un constituant peut être déplacé en bloc : « demain, je pars » → « je pars demain »), et l\'encadrement par « c\'est...que/qui ».', 'La phrase « Le jeune étudiant lit un livre passionnant dans la bibliothèque » se décompose en constituants emboîtés : [Le jeune étudiant] [lit [un livre passionnant] [dans [la bibliothèque]]]. Chaque crochet délimite un syntagme, et l\'ensemble forme une structure arborescente (un arbre syntaxique) où les constituants les plus petits sont enchâssés dans des constituants plus grands.'],
              highlight: 'Les tests de constituance (substitution, déplacement, encadrement) sont les outils empiriques de la syntaxe : ils permettent de démontrer que les mots forment des groupes hiérarchiques.'
            },
            {
              title: 'Les types de syntagmes',
              paragraphs: ['Chaque syntagme est défini par sa tête, le mot principal qui détermine sa catégorie et ses propriétés. Le syntagme nominal (SN) a pour tête un nom : « le petit chat ». Le syntagme verbal (SV) a pour tête un verbe : « mange une souris ». Le syntagme adjectival (SA) a pour tête un adjectif : « très content de toi ». Le syntagme prépositionnel (SP) est introduit par une préposition : « dans la maison ».', 'La tête du syntagme sélectionne ses compléments et projette ses propriétés sur l\'ensemble du groupe. Un verbe transitif comme « manger » exige un complément d\'objet (« mange une pomme »), tandis qu\'un verbe intransitif comme « dormir » n\'en prend pas. Cette sélection est appelée sous-catégorisation : elle détermine la structure interne du syntagme verbal.'],
              highlight: 'La tête du syntagme est le mot qui commande : elle détermine la catégorie du groupe, sélectionne les compléments et impose les accords.'
            },
            {
              title: 'L\'ambiguïté structurale',
              paragraphs: ['Certaines phrases admettent plusieurs analyses syntaxiques, créant une ambiguïté structurale. La phrase « J\'ai vu l\'homme avec le télescope » peut signifier soit que j\'ai utilisé un télescope pour voir l\'homme (le SP « avec le télescope » modifie le verbe), soit que l\'homme portait un télescope (le SP modifie le nom « homme »). L\'arbre syntaxique est différent dans chaque interprétation.', 'L\'ambiguïté structurale démontre que le sens d\'une phrase dépend de sa structure, pas seulement des mots qui la composent. C\'est un argument puissant en faveur de l\'analyse hiérarchique de la phrase : si la syntaxe n\'était qu\'une séquence linéaire, ces ambiguïtés seraient inexplicables.'],
              highlight: 'L\'ambiguïté structurale prouve que la syntaxe est hiérarchique : une même séquence de mots peut recevoir plusieurs structures arborescentes et donc plusieurs interprétations.'
            }
          ],
          quiz: [
            {
              q: 'Quel test permet de vérifier qu\'un groupe de mots est un constituant ?',
              opts: ['Le test de fréquence', 'Le test de substitution', 'Le test étymologique', 'Le test de longueur'],
              correct: 1,
              explanation: 'Le test de substitution vérifie qu\'un groupe de mots peut être remplacé par un seul mot (pronom, adverbe), prouvant qu\'il forme une unité syntaxique.'
            },
            {
              q: 'Quel mot est la tête du syntagme nominal « le petit chat noir » ?',
              opts: ['le', 'petit', 'chat', 'noir'],
              correct: 2,
              explanation: 'La tête du syntagme nominal est le nom « chat ». C\'est lui qui détermine la catégorie du groupe et conditionne les accords (masculin singulier).'
            },
            {
              q: 'Pourquoi « J\'ai vu l\'homme avec le télescope » est-elle ambiguë ?',
              opts: ['Parce que « télescope » a deux sens', 'Parce que le SP peut se rattacher au verbe ou au nom', 'Parce que le sujet est ambigu', 'Parce que le temps verbal est incorrect'],
              correct: 1,
              explanation: 'Le syntagme prépositionnel « avec le télescope » peut modifier le verbe (j\'ai utilisé un télescope) ou le nom (l\'homme avait un télescope), créant deux structures différentes.'
            }
          ],
          definitions: [
            {
              term: 'Constituant',
              def: 'Groupe de mots qui fonctionne comme une unité syntaxique, identifiable par des tests comme la substitution, le déplacement ou l\'encadrement.'
            },
            {
              term: 'Syntagme',
              def: 'Groupe de mots organisé autour d\'une tête qui en détermine la catégorie : syntagme nominal (SN), verbal (SV), adjectival (SA), prépositionnel (SP).'
            },
            {
              term: 'Tête (syntaxique)',
              def: 'Mot principal d\'un syntagme qui détermine sa catégorie, sélectionne ses compléments et projette ses propriétés sur l\'ensemble du groupe.'
            },
            {
              term: 'Sous-catégorisation',
              def: 'Propriété d\'un mot (surtout le verbe) qui détermine quels types de compléments il exige. Un verbe transitif sous-catégorise un objet direct.'
            },
            {
              term: 'Ambiguïté structurale',
              def: 'Propriété d\'une phrase qui admet plusieurs analyses syntaxiques (arbres différents), conduisant à des interprétations sémantiques distinctes.'
            }
          ],
          memos: [
            {
              front: 'Astuce mnémotechnique',
              back: 'Pour identifier un constituant, pensez SDE : Substitution (peut-on le remplacer par un mot ?), Déplacement (peut-on le bouger ?), Encadrement (peut-on dire « c\'est... que/qui » ?).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'ambiguïté « J\'ai vu l\'homme avec le télescope » est si célèbre en linguistique qu\'elle est citée dans pratiquement tous les manuels d\'introduction à la syntaxe depuis les années 1960.'
            },
            {
              front: 'Nombre clé : syntagmes',
              back: 'On distingue principalement 5 types de syntagmes : nominal (SN), verbal (SV), adjectival (SA), prépositionnel (SP) et adverbial (SAdv). Chacun est défini par la catégorie de sa tête.'
            }
          ]
        },
        {
          slug: 'fonctions-syntaxiques',
          title: 'Les fonctions syntaxiques',
          description: 'Les rôles grammaticaux des constituants dans la phrase : sujet, objet, complément.',
          intro: 'Les fonctions syntaxiques désignent les rôles que jouent les constituants dans la phrase. Le sujet, l\'objet direct, l\'objet indirect, les compléments circonstanciels et l\'attribut sont les fonctions fondamentales de la syntaxe française.',
          introHighlight: 'La fonction syntaxique d\'un constituant est définie par sa relation avec les autres constituants, et non par sa nature : un même syntagme nominal peut être sujet, objet ou attribut selon sa position dans la phrase.',
          sections: [
            {
              title: 'Le sujet et le prédicat',
              paragraphs: ['La phrase canonique se divise en deux grands constituants : le sujet et le prédicat. Le sujet est le constituant dont le verbe s\'accorde en personne et en nombre. Le prédicat est ce qui est dit à propos du sujet, constitué du verbe et de ses compléments. En français, l\'ordre canonique est Sujet-Verbe-Objet (SVO) : « Le chat (sujet) mange (verbe) la souris (objet) ».', 'Le sujet peut être un syntagme nominal (« le chat mange »), un pronom (« il mange »), un infinitif (« manger est nécessaire ») ou une proposition subordonnée (« que tu viennes me fait plaisir »). Le sujet inversé apparaît dans les questions (« Viens-tu ? »), après certains adverbes (« Peut-être viendra-t-il ») et dans les incises (« dit-il »).'],
              highlight: 'L\'ordre SVO (Sujet-Verbe-Objet) est l\'ordre canonique du français, mais il n\'est pas universel : le japonais et le turc utilisent l\'ordre SOV, l\'arabe classique l\'ordre VSO.'
            },
            {
              title: 'Les compléments du verbe',
              paragraphs: ['Le complément d\'objet direct (COD) est le constituant qui complète le verbe transitif directement, sans préposition : « je lis un livre ». Le complément d\'objet indirect (COI) est introduit par une préposition : « je pense à toi », « je parle de linguistique ». Certains verbes sont ditransitifs et prennent à la fois un COD et un COI : « je donne un livre à Marie ».', 'L\'attribut du sujet est un constituant relié au sujet par un verbe d\'état (être, sembler, devenir) : « Marie est intelligente ». Les compléments circonstanciels expriment les circonstances de l\'action (lieu, temps, manière, cause, but) : « je travaille dans la bibliothèque (lieu) le matin (temps) avec concentration (manière) ». Contrairement aux compléments d\'objet, ils sont généralement facultatifs et déplaçables.'],
              highlight: 'La distinction entre complément d\'objet et complément circonstanciel est fondamentale : l\'objet est sélectionné par le verbe (obligatoire), le circonstanciel modifie l\'ensemble de la proposition (facultatif).'
            },
            {
              title: 'Les rôles thématiques',
              paragraphs: ['Au-delà des fonctions syntaxiques, les constituants jouent des rôles sémantiques (ou thématiques) dans la phrase. L\'agent est l\'entité qui accomplit l\'action (« Marie ouvre la porte »). Le patient est l\'entité affectée par l\'action (« la porte est ouverte »). Le thème est l\'entité déplacée ou localisée (« le livre est sur la table »). L\'expérienceur ressent un état (« Marie craint les araignées »).', 'Un même rôle thématique peut correspondre à différentes fonctions syntaxiques. L\'agent est sujet à la voix active (« Marie ouvre la porte ») mais complément d\'agent à la voix passive (« la porte est ouverte par Marie »). La théorie thêta de Chomsky formalise l\'attribution des rôles thématiques en posant qu\'un argument ne peut recevoir qu\'un seul rôle et qu\'un rôle ne peut être attribué qu\'à un seul argument.'],
              highlight: 'Les rôles thématiques révèlent que « qui fait quoi à qui » dans la phrase est une question sémantique, distincte de la question syntaxique « quel constituant occupe quelle position ».'
            }
          ],
          quiz: [
            {
              q: 'Quel est l\'ordre canonique des mots en français ?',
              opts: ['SOV (Sujet-Objet-Verbe)', 'SVO (Sujet-Verbe-Objet)', 'VSO (Verbe-Sujet-Objet)', 'OVS (Objet-Verbe-Sujet)'],
              correct: 1,
              explanation: 'Le français suit l\'ordre SVO (Sujet-Verbe-Objet) : « Le chat mange la souris ». C\'est l\'ordre le plus fréquent dans les langues du monde.'
            },
            {
              q: 'Quelle est la fonction de « à Marie » dans « je donne un livre à Marie » ?',
              opts: ['Complément d\'objet direct', 'Complément d\'objet indirect', 'Complément circonstanciel', 'Attribut du sujet'],
              correct: 1,
              explanation: '« À Marie » est le complément d\'objet indirect (COI) du verbe ditransitif « donner », introduit par la préposition « à ».'
            },
            {
              q: 'Quel rôle thématique joue « Marie » dans « Marie craint les araignées » ?',
              opts: ['Agent', 'Patient', 'Expérienceur', 'Thème'],
              correct: 2,
              explanation: 'Marie est l\'expérienceur : elle ressent un état psychologique (la crainte). Elle ne fait pas d\'action (agent) et n\'est pas affectée physiquement (patient).'
            }
          ],
          definitions: [
            {
              term: 'Sujet',
              def: 'Constituant avec lequel le verbe s\'accorde en personne et en nombre. Il désigne généralement ce dont on parle dans la phrase.'
            },
            {
              term: 'Complément d\'objet direct (COD)',
              def: 'Constituant qui complète le verbe transitif directement, sans préposition. Il répond à la question « quoi ? » ou « qui ? » (ex. : « je lis un livre »).'
            },
            {
              term: 'Complément d\'objet indirect (COI)',
              def: 'Constituant relié au verbe par une préposition (à, de). Il répond à la question « à qui ? », « de quoi ? » (ex. : « je pense à toi »).'
            },
            {
              term: 'Rôle thématique',
              def: 'Rôle sémantique d\'un constituant par rapport au verbe : agent (qui agit), patient (qui subit), thème (qui est déplacé/localisé), expérienceur (qui ressent).'
            },
            {
              term: 'Voix passive',
              def: 'Construction syntaxique où le patient devient sujet et l\'agent devient complément d\'agent (« La porte est ouverte par Marie »), inversant la correspondance fonction/rôle.'
            }
          ],
          memos: [
            {
              front: 'Nombre clé : ordres des mots',
              back: 'Sur les 6 ordres possibles (SVO, SOV, VSO, VOS, OVS, OSV), l\'ordre SOV est le plus fréquent (45% des langues), suivi de SVO (42%). Les ordres commençant par O sont très rares.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le latin n\'a pas d\'ordre des mots fixe grâce à ses déclinaisons : « Petrus amat Paulum » et « Paulum amat Petrus » signifient tous deux « Pierre aime Paul », car les terminaisons marquent les fonctions.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'APET : Agent (fait l\'action), Patient (subit l\'action), Expérienceur (ressent un état), Thème (est déplacé/localisé). Ce sont les 4 rôles thématiques de base.'
            }
          ]
        },
        {
          slug: 'grammaire-generative',
          title: 'La grammaire générative',
          description: 'Le modèle chomskyen de la syntaxe et la notion de grammaire universelle.',
          intro: 'La grammaire générative, fondée par Noam Chomsky dans les années 1950, est le paradigme dominant de la syntaxe contemporaine. Elle postule que tout locuteur possède une compétence linguistique innée, une grammaire universelle, qui lui permet de produire et de comprendre un nombre infini de phrases.',
          introHighlight: 'La révolution chomskyenne a transformé la linguistique en science cognitive : la syntaxe n\'est plus seulement la description des phrases, mais l\'étude de la faculté mentale qui les engendre.',
          sections: [
            {
              title: 'Les fondements de la grammaire générative',
              paragraphs: ['En 1957, Noam Chomsky publie Structures syntaxiques, ouvrage qui révolutionne la linguistique. Il y propose que la compétence linguistique d\'un locuteur est un système de règles formelles (une grammaire) capable de générer toutes les phrases grammaticales d\'une langue et seulement celles-ci. Cette grammaire est finie, mais elle engendre un ensemble infini de phrases grâce à la récursivité.', 'Chomsky distingue la compétence (la connaissance implicite de la grammaire) de la performance (l\'usage réel de la langue, avec ses erreurs et ses hésitations). La linguistique, selon lui, doit modéliser la compétence. Il oppose également la structure de surface (l\'ordre linéaire des mots) et la structure profonde (les relations syntaxiques abstraites), reliées par des transformations.'],
              highlight: 'La récursivité est la propriété fondamentale de la syntaxe : une phrase peut contenir une phrase qui contient une phrase, sans limite théorique (« Marie sait que Pierre pense que Jean est parti »).'
            },
            {
              title: 'La Grammaire Universelle et le programme minimaliste',
              paragraphs: ['La Grammaire Universelle (GU) est l\'ensemble des principes innés communs à toutes les langues humaines. Selon Chomsky, l\'enfant naît avec cette GU et l\'expose aux données de sa langue maternelle pour fixer les paramètres spécifiques. Le paramètre de la tête, par exemple, détermine si les compléments précèdent ou suivent la tête dans les syntagmes (tête-initiale en français, tête-finale en japonais).', 'Le Programme Minimaliste (1995) simplifie radicalement le modèle en posant que la syntaxe n\'est que l\'application optimale de deux opérations : Merge (combinaison de deux éléments en un constituant) et Move (déplacement d\'un constituant vers une position plus haute). Cette économie formelle cherche à expliquer pourquoi la faculté du langage a pu émerger par l\'évolution biologique.'],
              highlight: 'Le Programme Minimaliste réduit la syntaxe à sa forme la plus élémentaire : l\'opération Merge, qui combine deux éléments en un constituant, est peut-être le seul mécanisme spécifiquement linguistique du cerveau humain.'
            },
            {
              title: 'Les critiques et les alternatives',
              paragraphs: ['La grammaire générative a suscité de nombreuses critiques et des modèles alternatifs. Les linguistiques fonctionnalistes (Givón, Halliday) reprochent à Chomsky de négliger la fonction communicative du langage et le rôle du contexte. Pour eux, la structure syntaxique est motivée par les besoins de la communication, pas par une grammaire autonome.', 'Les grammaires de construction (Goldberg, Croft) proposent que l\'unité de base de la syntaxe n\'est pas la règle abstraite mais la construction, un appariement forme-sens mémorisé par le locuteur. La linguistique cognitive (Langacker, Lakoff) ancre la syntaxe dans les processus cognitifs généraux : la catégorisation, la conceptualisation spatiale et la métaphore. Ces approches enrichissent le débat sans avoir supplanté le modèle génératif.'],
              highlight: 'Le débat entre innéisme (Chomsky) et usage (constructivisme) reste l\'un des plus féconds de la linguistique contemporaine : la syntaxe est-elle un module inné ou une construction fondée sur l\'expérience ?'
            }
          ],
          quiz: [
            {
              q: 'En quelle année Chomsky a-t-il publié Structures syntaxiques ?',
              opts: ['1947', '1957', '1967', '1977'],
              correct: 1,
              explanation: 'Structures syntaxiques a été publié en 1957 et est considéré comme l\'acte de naissance de la grammaire générative.'
            },
            {
              q: 'Qu\'est-ce que la Grammaire Universelle selon Chomsky ?',
              opts: ['Une grammaire enseignée dans toutes les écoles', 'Un ensemble de principes innés communs à toutes les langues', 'Un dictionnaire universel', 'Une méthode d\'apprentissage des langues'],
              correct: 1,
              explanation: 'La Grammaire Universelle est l\'ensemble des principes linguistiques innés que tout être humain possède à la naissance et qui contraignent les grammaires possibles.'
            },
            {
              q: 'Quelle est l\'opération fondamentale du Programme Minimaliste ?',
              opts: ['Transform', 'Merge', 'Parse', 'Delete'],
              correct: 1,
              explanation: 'Merge est l\'opération qui combine deux éléments en un constituant syntaxique. C\'est l\'opération fondamentale du Programme Minimaliste de Chomsky (1995).'
            }
          ],
          definitions: [
            {
              term: 'Grammaire générative',
              def: 'Modèle formel de la syntaxe, fondé par Chomsky en 1957, qui vise à expliciter le système de règles permettant de générer toutes les phrases grammaticales d\'une langue.'
            },
            {
              term: 'Compétence linguistique',
              def: 'Connaissance implicite et inconsciente de la grammaire que possède tout locuteur natif, par opposition à la performance (l\'usage réel de la langue).'
            },
            {
              term: 'Grammaire Universelle (GU)',
              def: 'Ensemble des principes innés communs à toutes les langues humaines, constituant la dotation biologique de la faculté du langage selon Chomsky.'
            },
            {
              term: 'Récursivité',
              def: 'Propriété de la syntaxe permettant d\'enchâsser indéfiniment des structures dans d\'autres structures du même type, engendrant un ensemble infini de phrases.'
            },
            {
              term: 'Merge',
              def: 'Opération syntaxique fondamentale du Programme Minimaliste qui combine deux éléments pour former un constituant. Seule opération combinatoire de la syntaxe dans ce modèle.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Structures syntaxiques',
              back: 'En 1957, Noam Chomsky publie Structures syntaxiques (Syntactic Structures), qui fonde la grammaire générative et révolutionne la linguistique en la rapprochant des sciences cognitives.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La phrase « Colorless green ideas sleep furiously » (Chomsky, 1957) est grammaticalement correcte mais sémantiquement absurde, prouvant que la syntaxe est un système autonome, indépendant du sens.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'COMPÉTENCE = ce que je CONNAIS de ma langue (grammaire interne). PERFORMANCE = ce que je PRODUIS réellement (parole, avec erreurs). Chomsky étudie la compétence, pas la performance.'
            }
          ]
        },
        {
          slug: 'subordination-coordination',
          title: 'Subordination et coordination',
          description: 'Les mécanismes qui relient les propositions entre elles dans la phrase complexe.',
          intro: 'La phrase complexe se forme par la combinaison de plusieurs propositions reliées par coordination (lien d\'égalité) ou subordination (lien de dépendance). Ces mécanismes permettent d\'exprimer des relations logiques, temporelles et causales complexes en une seule phrase.',
          introHighlight: 'La subordination est la manifestation la plus visible de la récursivité syntaxique : une phrase peut contenir des phrases enchâssées sans limite théorique.',
          sections: [
            {
              title: 'La coordination',
              paragraphs: ['La coordination relie deux ou plusieurs éléments de même nature et de même fonction par une conjonction de coordination (et, ou, mais, car, ni, or, donc). Les éléments coordonnés sont syntaxiquement indépendants et jouent le même rôle dans la phrase : « Marie chante et Pierre danse », « un chat noir et blanc ».', 'La coordination peut relier des mots (« Pierre et Marie »), des syntagmes (« dans la maison et sur le toit ») ou des propositions entières (« il pleut mais je sors »). Le principe de parallélisme exige que les éléments coordonnés soient de même catégorie : on ne coordonne pas normalement un nom et un adjectif (*« un chat et joli »).'],
              highlight: 'La coordination exige un parallélisme strict : seuls des éléments de même catégorie et de même fonction peuvent être coordonnés, ce qui en fait un test syntaxique utile.'
            },
            {
              title: 'La subordination complétive et relative',
              paragraphs: ['Les subordonnées complétives sont introduites par « que » et fonctionnent comme un syntagme nominal : elles peuvent être sujet (« Que tu viennes me réjouit »), COD (« Je sais que tu viens ») ou attribut (« L\'essentiel est que tu viennes »). Elles sont sélectionnées par certains verbes (savoir, croire, penser, dire) et occupent une position argumentale.', 'Les subordonnées relatives modifient un nom (l\'antécédent) et sont introduites par un pronom relatif (qui, que, dont, où, lequel). La relative restrictive délimite le référent (« Les étudiants qui travaillent réussissent ») tandis que la relative appositive ajoute une information accessoire (« Marie, qui est linguiste, parle cinq langues »). Cette distinction, marquée par la virgule à l\'écrit, modifie considérablement le sens.'],
              highlight: 'La distinction entre relative restrictive et relative appositive illustre comment la syntaxe modifie le sens : « Les étudiants qui travaillent réussissent » ne signifie pas la même chose que « Les étudiants, qui travaillent, réussissent ».'
            },
            {
              title: 'La subordination circonstancielle',
              paragraphs: ['Les subordonnées circonstancielles expriment les circonstances de l\'action principale. Elles sont classées selon leur valeur sémantique : temporelle (« quand il pleut, je reste »), causale (« parce que tu insistes »), finale (« pour que tu comprennes »), concessive (« bien qu\'il pleuve »), conditionnelle (« si tu viens ») et comparative (« comme je l\'avais prévu »).', 'Le mode verbal dans la subordonnée est souvent contraint par la conjonction : l\'indicatif après « parce que » (certitude), le subjonctif après « bien que » (concession) et « pour que » (but), le conditionnel dans l\'apodose d\'une conditionnelle irréelle (« si j\'étais riche, j\'achèterais... »). La concordance des modes et des temps est l\'un des aspects les plus complexes de la grammaire française.'],
              highlight: 'Le choix du mode dans les subordonnées (indicatif, subjonctif, conditionnel) n\'est pas arbitraire : il reflète la relation sémantique entre la proposition principale et la subordonnée.'
            }
          ],
          quiz: [
            {
              q: 'Combien de conjonctions de coordination existe-t-il traditionnellement en français ?',
              opts: ['5', '6', '7', '8'],
              correct: 2,
              explanation: 'Le français compte 7 conjonctions de coordination, retenues par le moyen mnémotechnique « Mais où est donc Ornicar ? » : mais, ou, et, donc, or, ni, car.'
            },
            {
              q: 'Quel mode emploie-t-on après « bien que » ?',
              opts: ['L\'indicatif', 'Le subjonctif', 'Le conditionnel', 'L\'impératif'],
              correct: 1,
              explanation: '« Bien que » exprime la concession et exige le subjonctif : « Bien qu\'il pleuve, je sors. » Le subjonctif marque le caractère non factuel de la proposition.'
            },
            {
              q: 'Quelle est la différence entre « Les étudiants qui travaillent réussissent » et « Les étudiants, qui travaillent, réussissent » ?',
              opts: ['Aucune différence', 'La première est restrictive, la seconde est appositive', 'La première est fausse, la seconde est vraie', 'La première est formelle, la seconde est familière'],
              correct: 1,
              explanation: 'La relative restrictive (sans virgule) limite le groupe aux étudiants travailleurs. La relative appositive (avec virgules) implique que tous les étudiants travaillent.'
            }
          ],
          definitions: [
            {
              term: 'Coordination',
              def: 'Liaison de deux éléments de même nature et de même fonction par une conjonction (et, ou, mais, car, ni, or, donc), sans relation de dépendance.'
            },
            {
              term: 'Subordination',
              def: 'Intégration d\'une proposition dépendante dans une proposition principale, créant une relation hiérarchique entre les deux.'
            },
            {
              term: 'Complétive',
              def: 'Subordonnée introduite par « que » qui fonctionne comme un syntagme nominal (sujet, COD, attribut) et est sélectionnée par le verbe principal.'
            },
            {
              term: 'Relative restrictive',
              def: 'Subordonnée relative qui délimite le référent de l\'antécédent (« Les gens qui rient sont heureux » = seulement ceux qui rient).'
            },
            {
              term: 'Relative appositive',
              def: 'Subordonnée relative qui ajoute une information accessoire à l\'antécédent, séparée par des virgules (« Marie, qui est linguiste, parle cinq langues »).'
            }
          ],
          memos: [
            {
              front: 'Astuce mnémotechnique',
              back: '« Mais où est donc Ornicar ? » : Mais, Ou, Et, Donc, Or, Ni, Car. Les 7 conjonctions de coordination du français, enseignées à tous les écoliers.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'En français, on peut théoriquement enchâsser des relatives indéfiniment : « Le chat que le chien que le garçon que je connais a poursuivi a griffé miaule. » Cette phrase est grammaticale mais cognitivement inaccessible.'
            },
            {
              front: 'Nombre clé : subordination',
              back: 'Le français possède environ 60 conjonctions de subordination différentes, classées selon leur valeur sémantique (temps, cause, but, concession, condition, comparaison).'
            }
          ]
        },
        {
          slug: 'ordre-mots-universaux',
          title: 'L\'ordre des mots et les universaux',
          description: 'Les typologies de l\'ordre des mots dans les langues du monde et les universaux de Greenberg.',
          intro: 'L\'ordre des mots est l\'un des paramètres les plus étudiés en linguistique typologique. Joseph Greenberg a montré en 1963 que les langues ne disposent pas les mots de manière aléatoire : certains ordres sont beaucoup plus fréquents que d\'autres et des corrélations systématiques existent entre l\'ordre des constituants majeurs et d\'autres propriétés syntaxiques.',
          introHighlight: 'Les universaux de Greenberg montrent que la diversité syntaxique des langues n\'est pas chaotique : des principes réguliers gouvernent l\'organisation de la phrase dans toutes les langues humaines.',
          sections: [
            {
              title: 'Les ordres de base',
              paragraphs: ['L\'ordre des trois constituants majeurs de la phrase (Sujet, Verbe, Objet) définit six types logiques. Deux dominent largement : SOV (turc, japonais, hindi, latin — environ 45 % des langues) et SVO (français, anglais, chinois, swahili — environ 42 %). VSO (arabe classique, gaélique, tagalog) représente environ 9 %. Les ordres VOS, OVS et OSV sont extrêmement rares.', 'Joseph Greenberg, dans son article fondateur de 1963, a montré que l\'ordre de base corrèle avec d\'autres propriétés syntaxiques. Les langues SVO tendent à placer les prépositions avant le nom (« dans la maison ») et l\'adjectif après le nom (en français). Les langues SOV tendent à utiliser des postpositions (le nom précède la marque casuelle) et à placer le génitif avant le nom.'],
              highlight: 'Les langues où l\'objet précède le sujet (OVS, OSV) représentent moins de 1 % des langues du monde, ce qui suggère une préférence cognitive universelle pour que le sujet précède l\'objet.'
            },
            {
              title: 'Les universaux implicationnels',
              paragraphs: ['Les universaux de Greenberg sont des généralisations statistiques sur les propriétés partagées par les langues du monde. Certains sont absolus (« toutes les langues ont des voyelles »), mais la plupart sont implicationnels : « si une langue a la propriété A, elle tend à avoir la propriété B ». Par exemple, si une langue a un ordre Verbe-Objet, elle tend à avoir des prépositions plutôt que des postpositions.', 'Ces corrélations s\'expliquent par un principe de consistance de la tête (head-consistency) : dans chaque langue, la tête tend à occuper la même position par rapport à ses compléments dans tous les types de syntagmes. Les langues « tête-initiale » (français, anglais) placent la tête avant le complément (verbe avant objet, préposition avant nom, nom avant génitif). Les langues « tête-finale » (japonais, turc) font l\'inverse.'],
              highlight: 'Le principe de consistance de la tête unifie les universaux de Greenberg : une langue tend à placer la tête avant ou après le complément de manière cohérente dans tous ses syntagmes.'
            },
            {
              title: 'L\'ordre des mots et la pragmatique',
              paragraphs: ['L\'ordre des mots ne dépend pas seulement de la syntaxe : il est aussi influencé par la pragmatique, c\'est-à-dire la gestion de l\'information dans le discours. Le thème (ce dont on parle, l\'information connue) tend à précéder le rhème (ce qu\'on en dit, l\'information nouvelle). En français, les constructions disloquées (« ce livre, je l\'ai lu ») et les clivées (« c\'est Marie qui a gagné ») réorganisent l\'information sans changer le contenu propositionnel.', 'Certaines langues, comme le japonais ou le hongrois, possèdent une position syntaxique dédiée au focus (l\'élément informationnellement le plus saillant). En hongrois, le constituant focalisé se place immédiatement avant le verbe. Cette interaction entre syntaxe et pragmatique montre que l\'ordre des mots est un compromis entre les exigences grammaticales et les besoins communicatifs.'],
              highlight: 'L\'ordre des mots est un compromis entre la syntaxe (grammaire de la langue) et la pragmatique (gestion de l\'information dans le discours). Aucune langue n\'est entièrement gouvernée par l\'un ou l\'autre.'
            }
          ],
          quiz: [
            {
              q: 'Quel est l\'ordre des mots le plus fréquent dans les langues du monde ?',
              opts: ['SVO', 'SOV', 'VSO', 'VOS'],
              correct: 1,
              explanation: 'L\'ordre SOV (Sujet-Objet-Verbe) est le plus fréquent (environ 45% des langues), suivi de SVO (environ 42%). Le japonais, le turc et le hindi sont SOV.'
            },
            {
              q: 'Selon les universaux de Greenberg, une langue SVO tend à utiliser :',
              opts: ['Des postpositions', 'Des prépositions', 'Des infixes', 'Des circumfixes'],
              correct: 1,
              explanation: 'Les langues SVO, comme le français, tendent à être tête-initiale et à utiliser des prépositions (la tête de la relation spatiale précède son complément).'
            },
            {
              q: 'Comment appelle-t-on l\'information nouvelle dans une phrase, par opposition au thème ?',
              opts: ['Le sujet', 'Le prédicat', 'Le rhème', 'Le complément'],
              correct: 2,
              explanation: 'Le rhème (ou focus) est la partie de la phrase qui apporte l\'information nouvelle, par opposition au thème (information connue).'
            }
          ],
          definitions: [
            {
              term: 'Ordre de base',
              def: 'Disposition canonique des constituants majeurs (Sujet, Verbe, Objet) dans une phrase déclarative neutre. Les six combinaisons théoriques ne sont pas également fréquentes.'
            },
            {
              term: 'Universel implicationnel',
              def: 'Généralisation du type « si une langue a la propriété A, elle tend à avoir la propriété B » (ex. : si VO, alors prépositions). Concept central de la typologie de Greenberg.'
            },
            {
              term: 'Consistance de la tête',
              def: 'Principe typologique selon lequel une langue tend à placer la tête dans la même position (initiale ou finale) par rapport à ses compléments dans tous les types de syntagmes.'
            },
            {
              term: 'Thème (pragmatique)',
              def: 'Partie de la phrase qui présente l\'information connue, ce dont on parle. Le thème tend à occuper la position initiale dans la plupart des langues.'
            },
            {
              term: 'Rhème',
              def: 'Partie de la phrase qui apporte l\'information nouvelle, ce qu\'on dit à propos du thème. Aussi appelé focus ou commentaire.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Greenberg 1963',
              back: 'En 1963, Joseph Greenberg publie « Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements », article fondateur de la linguistique typologique moderne.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'ordre OSV (Objet-Sujet-Verbe) est le plus rare au monde. On le trouve dans quelques langues amazoniennes comme le nadëb et le warao, parlées par quelques milliers de locuteurs.'
            },
            {
              front: 'Nombre clé : ordres des mots',
              back: 'Sur les 6 ordres logiques, SOV (45%) et SVO (42%) dominent. VSO (9%) est minoritaire. VOS, OVS et OSV totalisent moins de 4% des langues du monde.'
            }
          ]
        }
      ]
    },
    {
      slug: 'semantique',
      title: 'Sémantique',
      description: 'L\'étude du sens linguistique : signification des mots, des phrases et relations sémantiques.',
      introText: 'La sémantique est la branche de la linguistique consacrée à l\'étude du sens. Elle analyse comment les mots, les phrases et les textes véhiculent des significations, et comment les locuteurs interprètent les énoncés. Du sens des mots individuels à la logique des propositions, la sémantique explore les mécanismes fondamentaux de la signification humaine.',
      introHighlight: 'La sémantique répond à la question la plus fondamentale de la linguistique : comment des séquences de sons ou de signes arbitraires peuvent-elles véhiculer du sens ?',
      lessons: [
        {
          slug: 'sens-reference',
          title: 'Sens et référence',
          description: 'La distinction entre la signification linguistique et le rapport au monde réel.',
          intro: 'La sémantique distingue le sens (la signification linguistique d\'une expression) de la référence (l\'objet du monde réel auquel elle renvoie). Cette distinction, formalisée par le philosophe Gottlob Frege en 1892, est au fondement de toute théorie sémantique.',
          introHighlight: 'Frege a montré que « l\'étoile du matin » et « l\'étoile du soir » ont le même référent (la planète Vénus) mais des sens différents, prouvant que le sens ne se réduit pas à la référence.',
          sections: [
            {
              title: 'La distinction sens/référence de Frege',
              paragraphs: ['En 1892, Gottlob Frege publie Über Sinn und Bedeutung (Sens et dénotation), article fondateur de la sémantique moderne. Il y distingue le Sinn (sens, mode de présentation) et la Bedeutung (référence, dénotation). L\'expression « l\'étoile du matin » et « l\'étoile du soir » ont la même référence (Vénus) mais des sens différents : l\'une présente Vénus comme l\'astre visible à l\'aube, l\'autre comme l\'astre visible au crépuscule.', 'Cette distinction explique pourquoi l\'énoncé « L\'étoile du matin est l\'étoile du soir » est informatif, alors que « L\'étoile du matin est l\'étoile du matin » est trivial. Les deux ont la même valeur de vérité, mais le premier apporte une connaissance nouvelle. Le sens d\'une expression détermine sa référence, mais la référence ne détermine pas le sens.'],
              highlight: 'La distinction de Frege entre sens et référence a fondé la sémantique moderne en montrant que la signification linguistique ne se réduit pas au rapport entre les mots et les choses.'
            },
            {
              title: 'La théorie du signe de Saussure',
              paragraphs: ['Ferdinand de Saussure, dans son Cours de linguistique générale (1916), propose une conception du sens centrée sur le signe linguistique. Le signe est l\'union indissociable d\'un signifiant (l\'image acoustique, la forme sonore) et d\'un signifié (le concept). Le lien entre les deux est arbitraire : rien dans le son [ʃa] ne ressemble à un chat.', 'Pour Saussure, le sens d\'un mot ne réside pas dans sa relation avec le monde, mais dans ses relations avec les autres mots du système. Le mot « chien » tire son sens non pas de sa ressemblance avec un chien réel, mais de son opposition avec « chat », « loup », « animal ». C\'est le principe de valeur : le sens est différentiel et relationnel, pas référentiel.'],
              highlight: 'Le principe saussurien de l\'arbitraire du signe est la clé de voûte de la linguistique structurale : si le lien entre son et sens était motivé, il n\'y aurait qu\'une seule langue au monde.'
            },
            {
              title: 'La dénotation et la connotation',
              paragraphs: ['La dénotation est le sens objectif et stable d\'un mot, celui qu\'on trouve dans le dictionnaire. Le mot « rouge » dénote une couleur du spectre visible. La connotation englobe les associations subjectives, affectives et culturelles liées au mot. « Rouge » connote le danger, la passion, le communisme ou la chance selon les contextes culturels.', 'La distinction dénotation/connotation est cruciale pour l\'analyse du discours, de la littérature et de la publicité. Un texte publicitaire joue systématiquement sur les connotations : « voiture » dénote un véhicule, mais « berline » connote le luxe, « citadine » la praticité. Les connotations varient selon les cultures, les époques et les registres de langue.'],
              highlight: 'La connotation est le terrain de jeu de la rhétorique et de la publicité : deux mots ayant la même dénotation (« mourir » et « s\'éteindre ») diffèrent radicalement par leurs connotations.'
            }
          ],
          quiz: [
            {
              q: 'Qui a formalisé la distinction entre sens et référence en 1892 ?',
              opts: ['Ferdinand de Saussure', 'Gottlob Frege', 'Noam Chomsky', 'Ludwig Wittgenstein'],
              correct: 1,
              explanation: 'Gottlob Frege a publié Über Sinn und Bedeutung en 1892, distinguant le sens (mode de présentation) de la référence (objet désigné).'
            },
            {
              q: 'Comment Saussure appelle-t-il la forme sonore du signe linguistique ?',
              opts: ['Le signifié', 'Le référent', 'Le signifiant', 'Le dénoté'],
              correct: 2,
              explanation: 'Le signifiant est l\'image acoustique (la forme sonore) du signe linguistique. Il est inséparable du signifié (le concept) dans la théorie saussurienne.'
            },
            {
              q: 'Quelle est la différence entre dénotation et connotation ?',
              opts: ['La dénotation est écrite, la connotation est orale', 'La dénotation est le sens objectif, la connotation les associations subjectives', 'La dénotation est ancienne, la connotation est moderne', 'Aucune différence significative'],
              correct: 1,
              explanation: 'La dénotation est le sens stable et objectif d\'un mot (sens du dictionnaire), tandis que la connotation englobe les associations affectives, culturelles et subjectives.'
            }
          ],
          definitions: [
            {
              term: 'Sens (Sinn)',
              def: 'Mode de présentation d\'un référent dans une expression linguistique. Le sens détermine la référence mais ne s\'y réduit pas (Frege, 1892).'
            },
            {
              term: 'Référence (Bedeutung)',
              def: 'Objet du monde réel (ou possible) désigné par une expression linguistique. « L\'étoile du matin » et « l\'étoile du soir » ont la même référence (Vénus).'
            },
            {
              term: 'Signifiant',
              def: 'Aspect matériel du signe linguistique : l\'image acoustique ou la forme sonore. Uni au signifié par un lien arbitraire (Saussure).'
            },
            {
              term: 'Signifié',
              def: 'Aspect conceptuel du signe linguistique : le concept associé au signifiant. Le signifié de [ʃa] est le concept de chat (Saussure).'
            },
            {
              term: 'Connotation',
              def: 'Ensemble des associations subjectives, affectives et culturelles liées à un mot, au-delà de son sens dénotatif objectif.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Saussure',
              back: 'Le Cours de linguistique générale de Ferdinand de Saussure est publié en 1916 (à titre posthume, par ses étudiants). Il fonde la linguistique structurale et introduit les concepts de signifiant, signifié, arbitraire du signe et valeur.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'L\'onomatopée semble contredire l\'arbitraire du signe (le coq fait « cocorico » en français, « cock-a-doodle-doo » en anglais, « kikeriki » en allemand), mais ces variations prouvent justement que même l\'imitation du réel est filtrée par le système de la langue.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Signifiant = la FORME (ce qu\'on entend). Signifié = le FOND (ce qu\'on comprend). Référent = la CHOSE (ce qui existe). Trois niveaux : son → concept → réalité.'
            }
          ]
        },
        {
          slug: 'relations-lexicales',
          title: 'Les relations lexicales',
          description: 'Synonymie, antonymie, hyponymie et autres relations de sens entre les mots.',
          intro: 'Les mots d\'une langue ne sont pas des unités isolées : ils entretiennent entre eux des relations de sens systématiques. La synonymie, l\'antonymie, l\'hyponymie et la polysémie organisent le vocabulaire en réseaux sémantiques structurés.',
          introHighlight: 'Les relations lexicales révèlent que le vocabulaire n\'est pas un simple inventaire de mots, mais un réseau organisé où chaque mot tire une partie de son sens de ses relations avec les autres.',
          sections: [
            {
              title: 'La synonymie et l\'antonymie',
              paragraphs: ['La synonymie est la relation entre deux mots de même sens ou de sens très proche : « rapide » et « véloce », « commencer » et « débuter ». La synonymie absolue (identité totale de sens dans tous les contextes) est extrêmement rare. La plupart des synonymes diffèrent par le registre (« voiture » / « bagnole »), la connotation (« mourir » / « décéder ») ou la distribution (« grand » s\'applique à la taille et à l\'importance, « vaste » seulement à l\'étendue).', 'L\'antonymie est la relation d\'opposition de sens. On distingue les antonymes gradables (« chaud » / « froid », qui admettent des degrés), les antonymes complémentaires (« vivant » / « mort », sans intermédiaire) et les antonymes réciproques (« acheter » / « vendre », qui impliquent l\'existence l\'un de l\'autre). Ces distinctions montrent que l\'opposition sémantique prend des formes variées.'],
              highlight: 'La synonymie absolue n\'existe pratiquement pas : deux mots considérés comme synonymes diffèrent toujours par le registre, la connotation ou la distribution contextuelle.'
            },
            {
              title: 'L\'hyponymie et la méronymie',
              paragraphs: ['L\'hyponymie est la relation d\'inclusion entre un terme spécifique (hyponyme) et un terme générique (hyperonyme). « Rose » est hyponyme de « fleur », qui est hyponyme de « plante », qui est hyponyme de « être vivant ». Cette relation organise le vocabulaire en hiérarchies taxonomiques. L\'hyperonyme peut toujours remplacer l\'hyponyme sans contradiction (« j\'ai cueilli une rose » → « j\'ai cueilli une fleur »), mais pas l\'inverse.', 'La méronymie est la relation partie-tout : « doigt » est méronyme de « main », « roue » est méronyme de « voiture ». Contrairement à l\'hyponymie, la méronymie n\'est pas toujours transitive : le « doigt » est partie de la « main » et la « main » est partie du « corps », mais on dit rarement que le « doigt » est partie du « corps » (bien que ce soit logiquement vrai).'],
              highlight: 'L\'hyponymie organise le vocabulaire en arbres taxonomiques (rose → fleur → plante), tandis que la méronymie organise les relations partie-tout (doigt → main → bras).'
            },
            {
              title: 'La polysémie et l\'homonymie',
              paragraphs: ['La polysémie est la propriété d\'un mot d\'avoir plusieurs sens liés. Le mot « feuille » désigne à la fois l\'organe végétal, la feuille de papier et la feuille d\'un tableau. Ces sens sont reliés par des extensions métaphoriques ou métonymiques à partir d\'un sens premier. La polysémie est la norme, non l\'exception : les mots les plus fréquents sont aussi les plus polysémiques.', 'L\'homonymie est la coïncidence formelle entre deux mots de sens différents et sans lien étymologique : « son » (bruit) et « son » (céréale), « verre » (matériau) et « vers » (poésie). La frontière entre polysémie et homonymie est parfois floue : « grève » (plage) et « grève » (arrêt de travail) sont-ils un mot polysémique ou deux homonymes ? L\'étymologie tranche (les grévistes se réunissaient sur la place de Grève à Paris), mais le locuteur moyen ne perçoit plus le lien.'],
              highlight: 'La polysémie est le moteur de l\'évolution sémantique : les sens nouveaux naissent par extension métaphorique ou métonymique à partir de sens existants, créant des réseaux de signification ramifiés.'
            }
          ],
          quiz: [
            {
              q: 'Quel type d\'antonymie illustre la paire « vivant » / « mort » ?',
              opts: ['Gradable', 'Complémentaire', 'Réciproque', 'Directionnelle'],
              correct: 1,
              explanation: 'Les antonymes complémentaires n\'admettent pas de degrés intermédiaires : on est vivant ou mort, sans état intermédiaire. Contrairement à « chaud » / « froid » (gradables).'
            },
            {
              q: 'Comment appelle-t-on la relation entre « rose » et « fleur » ?',
              opts: ['Synonymie', 'Antonymie', 'Hyponymie', 'Méronymie'],
              correct: 2,
              explanation: '« Rose » est hyponyme de « fleur » (relation d\'inclusion) : une rose est un type de fleur. « Fleur » est l\'hyperonyme.'
            },
            {
              q: 'Quelle est la différence entre polysémie et homonymie ?',
              opts: ['Il n\'y a aucune différence', 'La polysémie implique des sens liés, l\'homonymie des sens sans rapport', 'La polysémie est écrite, l\'homonymie est orale', 'La polysémie est ancienne, l\'homonymie est récente'],
              correct: 1,
              explanation: 'En polysémie, les sens multiples d\'un mot sont historiquement et sémantiquement liés. En homonymie, des mots identiques par la forme ont des sens sans rapport étymologique.'
            }
          ],
          definitions: [
            {
              term: 'Synonymie',
              def: 'Relation entre deux mots de sens identique ou très proche (ex. : « rapide » / « véloce »). La synonymie absolue est très rare en langue naturelle.'
            },
            {
              term: 'Antonymie',
              def: 'Relation d\'opposition de sens entre deux mots. Elle peut être gradable (chaud/froid), complémentaire (vivant/mort) ou réciproque (acheter/vendre).'
            },
            {
              term: 'Hyponymie',
              def: 'Relation d\'inclusion sémantique entre un terme spécifique (hyponyme : « rose ») et un terme générique (hyperonyme : « fleur »).'
            },
            {
              term: 'Méronymie',
              def: 'Relation partie-tout entre deux mots (ex. : « doigt » est méronyme de « main »). Différente de l\'hyponymie, qui est une relation de type (type-de vs partie-de).'
            },
            {
              term: 'Polysémie',
              def: 'Propriété d\'un mot d\'avoir plusieurs sens liés entre eux par des extensions métaphoriques ou métonymiques (ex. : « feuille » d\'arbre / de papier).'
            }
          ],
          memos: [
            {
              front: 'Le saviez-vous ?',
              back: 'Le mot anglais « set » est l\'un des plus polysémiques au monde : l\'Oxford English Dictionary lui attribue plus de 430 sens différents, couvrant 60 000 mots de définitions.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'HYPOnyme = en dessous (hypo = sous). HYPERonyme = au-dessus (hyper = sur). La rose est SOUS la fleur dans la hiérarchie : rose est hyponyme de fleur.'
            },
            {
              front: 'Nombre clé : polysémie',
              back: 'Les 100 mots les plus fréquents d\'une langue ont en moyenne 10 à 20 sens distincts. La polysémie est corrélée à la fréquence : plus un mot est utilisé, plus il acquiert de sens.'
            }
          ]
        },
        {
          slug: 'semantique-phrase',
          title: 'La sémantique de la phrase',
          description: 'Le sens compositionnel, les conditions de vérité et la logique propositionnelle.',
          intro: 'La sémantique de la phrase étudie comment le sens d\'une phrase se construit à partir du sens de ses parties et de la manière dont elles sont combinées. Le principe de compositionnalité, attribué à Frege, est au coeur de cette approche.',
          introHighlight: 'Le principe de compositionnalité affirme que le sens d\'une phrase est fonction du sens de ses parties et de leur mode de combinaison : connaître les mots et la syntaxe suffit en théorie à calculer le sens.',
          sections: [
            {
              title: 'Le principe de compositionnalité',
              paragraphs: ['Le principe de compositionnalité, formulé par Frege, pose que le sens d\'une expression complexe est déterminé par le sens de ses constituants et par les règles syntaxiques qui les combinent. Ainsi, le sens de « Le chat mange la souris » est calculable à partir du sens de « chat », « mange », « souris » et de leur agencement syntaxique (SVO).', 'Ce principe explique la productivité du langage : un locuteur peut comprendre et produire des phrases qu\'il n\'a jamais entendues, à condition de connaître les mots et les règles de combinaison. Cependant, des phénomènes comme les expressions idiomatiques (« casser sa pipe » = mourir) ou les métaphores vives (« le temps est de l\'argent ») échappent partiellement à la compositionnalité.'],
              highlight: 'Le principe de compositionnalité est le fondement de la sémantique formelle : il permet de calculer le sens de phrases jamais entendues à partir du sens des mots et de la structure syntaxique.'
            },
            {
              title: 'Les conditions de vérité',
              paragraphs: ['La sémantique vériconditionnelle, inspirée des travaux de Tarski et Davidson, définit le sens d\'une phrase par ses conditions de vérité : savoir ce que signifie « La neige est blanche », c\'est savoir dans quelles conditions cette phrase est vraie (quand la neige est effectivement blanche). Cette approche traduit le sens linguistique en termes logiques.', 'Les connecteurs logiques structurent les conditions de vérité des phrases complexes. La conjonction (« et ») est vraie si les deux propositions sont vraies. La disjonction (« ou ») est vraie si au moins une proposition est vraie. La négation (« ne...pas ») inverse la valeur de vérité. L\'implication (« si...alors ») est fausse seulement quand l\'antécédent est vrai et le conséquent faux.'],
              highlight: 'Connaître le sens d\'une phrase, c\'est savoir ce que le monde devrait être pour que cette phrase soit vraie : le sens se réduit aux conditions de vérité dans la sémantique formelle.'
            },
            {
              title: 'L\'implicature et le sens non littéral',
              paragraphs: ['Le sens communiqué dépasse souvent le sens littéral des mots. Paul Grice (1975) a montré que les locuteurs communiquent des informations implicites (implicatures) en exploitant les principes de la conversation. Si on demande « As-tu aimé le film ? » et qu\'on répond « La musique était jolie », l\'implicature est qu\'on n\'a pas aimé le film dans son ensemble.', 'Grice formule le Principe de Coopération et ses quatre maximes : Quantité (dire assez, pas trop), Qualité (dire le vrai), Relation (être pertinent) et Manière (être clair). Le locuteur qui semble violer une maxime invite l\'auditeur à chercher une interprétation alternative (implicature). L\'ironie, la métaphore, la litote et l\'hyperbole reposent sur ce mécanisme.'],
              highlight: 'Les maximes de Grice montrent que la communication humaine repose autant sur ce qui n\'est pas dit que sur ce qui est dit : le sens implicite est souvent plus important que le sens littéral.'
            }
          ],
          quiz: [
            {
              q: 'Quel principe affirme que le sens d\'une phrase dépend du sens de ses parties et de leur combinaison ?',
              opts: ['Le principe d\'arbitraire', 'Le principe de compositionnalité', 'Le principe de coopération', 'Le principe de pertinence'],
              correct: 1,
              explanation: 'Le principe de compositionnalité (Frege) pose que le sens d\'une expression complexe est déterminé par le sens de ses constituants et par les règles syntaxiques qui les combinent.'
            },
            {
              q: 'Qui a formulé le Principe de Coopération et les maximes conversationnelles ?',
              opts: ['Frege', 'Saussure', 'Paul Grice', 'Chomsky'],
              correct: 2,
              explanation: 'Paul Grice a formulé en 1975 le Principe de Coopération et ses quatre maximes (Quantité, Qualité, Relation, Manière) qui régissent l\'échange conversationnel.'
            },
            {
              q: 'Qu\'est-ce qu\'une implicature conversationnelle ?',
              opts: ['Le sens littéral d\'une phrase', 'Un sens implicite dérivé du contexte et des attentes conversationnelles', 'Une erreur grammaticale', 'Un synonyme'],
              correct: 1,
              explanation: 'L\'implicature est un sens communiqué implicitement, dérivé non du sens littéral mais des principes de la conversation (maximes de Grice).'
            }
          ],
          definitions: [
            {
              term: 'Compositionnalité',
              def: 'Principe selon lequel le sens d\'une expression complexe est déterminé par le sens de ses parties et par les règles syntaxiques de leur combinaison (Frege).'
            },
            {
              term: 'Conditions de vérité',
              def: 'Ensemble des conditions sous lesquelles une phrase est vraie. Connaître le sens d\'une phrase, c\'est connaître ses conditions de vérité (sémantique vériconditionnelle).'
            },
            {
              term: 'Implicature',
              def: 'Sens communiqué implicitement par un locuteur, dérivé du contexte et des attentes conversationnelles, au-delà du sens littéral (Grice, 1975).'
            },
            {
              term: 'Maximes de Grice',
              def: 'Quatre principes régissant la conversation coopérative : Quantité (informativité), Qualité (véracité), Relation (pertinence) et Manière (clarté).'
            },
            {
              term: 'Expression idiomatique',
              def: 'Expression figée dont le sens global ne se déduit pas du sens de ses composants (ex. : « casser sa pipe » = mourir). Exception au principe de compositionnalité.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Grice 1975',
              back: 'Paul Grice publie « Logic and Conversation » en 1975, introduisant le Principe de Coopération et les maximes conversationnelles. Ce texte fonde la pragmatique moderne.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le français compte environ 10 000 expressions idiomatiques courantes. Leur sens non compositionnel les rend particulièrement difficiles à apprendre pour les locuteurs non natifs et à traiter par les systèmes d\'intelligence artificielle.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Les 4 maximes de Grice = QQRM : Quantité (ni trop ni trop peu), Qualité (vrai), Relation (pertinent), Manière (clair). Pensez « QQ Relation Mieux » : Chaque échange de Qualité et Quantité Relie Mieux les interlocuteurs.'
            }
          ]
        },
        {
          slug: 'metaphore-metonymie',
          title: 'Métaphore et métonymie',
          description: 'Les figures de sens fondamentales et leur rôle dans la cognition et le langage quotidien.',
          intro: 'La métaphore et la métonymie ne sont pas de simples ornements littéraires : ce sont des mécanismes cognitifs fondamentaux qui structurent notre pensée et notre langage quotidien. La linguistique cognitive a montré que ces figures sont omniprésentes dans le langage ordinaire.',
          introHighlight: 'Lakoff et Johnson (1980) ont révolutionné notre compréhension de la métaphore en montrant qu\'elle n\'est pas un écart par rapport au langage normal, mais le mode fondamental de la pensée humaine.',
          sections: [
            {
              title: 'La métaphore conceptuelle',
              paragraphs: ['George Lakoff et Mark Johnson, dans Les Métaphores dans la vie quotidienne (1980), montrent que la métaphore n\'est pas un simple procédé rhétorique mais un mécanisme cognitif fondamental. Nous comprenons des concepts abstraits en les structurant à partir de domaines d\'expérience concrets. La métaphore conceptuelle LE TEMPS EST DE L\'ARGENT génère des dizaines d\'expressions : « perdre du temps », « investir son temps », « économiser du temps », « dépenser du temps ».', 'La métaphore conceptuelle LA VIE EST UN VOYAGE produit : « être à un carrefour », « faire son chemin », « parcours de vie », « être au bout du chemin ». Ces métaphores ne sont pas de simples façons de parler : elles structurent notre manière de penser et d\'agir. Concevoir le temps comme de l\'argent nous conduit à le gérer, le budgéter et à culpabiliser quand nous le « gaspillons ».'],
              highlight: 'Les métaphores conceptuelles ne sont pas des ornements du langage : elles structurent notre pensée. Changer de métaphore, c\'est changer de vision du monde.'
            },
            {
              title: 'La métonymie',
              paragraphs: ['La métonymie est un transfert de sens fondé sur une relation de contiguïté (proximité) plutôt que de ressemblance. « Boire un verre » (le contenant pour le contenu), « lire Zola » (l\'auteur pour l\'oeuvre), « Bruxelles a décidé » (le lieu pour l\'institution) sont des métonymies. Le transfert s\'opère au sein d\'un même domaine conceptuel, contrairement à la métaphore qui relie deux domaines différents.', 'La synecdoque, souvent considérée comme un sous-type de métonymie, établit un rapport entre la partie et le tout : « une voile à l\'horizon » (la voile pour le navire), « les planches » (les planches de la scène pour le théâtre). La métonymie est un processus cognitif essentiel car elle permet de désigner un concept par un aspect saillant, facilitant l\'accès mental au référent.'],
              highlight: 'Métaphore = transfert entre deux domaines différents (le temps EST de l\'argent). Métonymie = transfert au sein d\'un même domaine (le CONTENANT pour le contenu, l\'AUTEUR pour l\'oeuvre).'
            },
            {
              title: 'Le changement sémantique',
              paragraphs: ['La métaphore et la métonymie sont les deux moteurs principaux du changement sémantique historique. Le mot « bureau » désignait à l\'origine un tissu grossier (la bure), puis le meuble recouvert de ce tissu, puis la pièce contenant ce meuble, puis l\'institution qui y travaille : chaque étape est une métonymie (contiguïté spatiale). Le mot « souris » (informatique) est une métaphore de forme.', 'D\'autres processus de changement sémantique incluent l\'élargissement (« panier » : de « récipient à pain » à tout récipient tressé), le rétrécissement (« viande » : de toute nourriture en ancien français à la seule chair animale), l\'amélioration (« maréchal » : de « valet d\'écurie » à « plus haut grade militaire ») et la détérioration (« vilain » : de « paysan » à « méchant »).'],
              highlight: 'Le changement sémantique montre que le vocabulaire est un système vivant en perpétuelle évolution : les mots changent de sens par métaphore, métonymie, élargissement ou rétrécissement.'
            }
          ],
          quiz: [
            {
              q: 'Quelle métaphore conceptuelle sous-tend l\'expression « perdre du temps » ?',
              opts: ['LA VIE EST UN VOYAGE', 'LE TEMPS EST DE L\'ARGENT', 'L\'ESPRIT EST UN RÉCIPIENT', 'LES IDÉES SONT DES ALIMENTS'],
              correct: 1,
              explanation: 'La métaphore conceptuelle LE TEMPS EST DE L\'ARGENT génère des expressions comme « perdre du temps », « investir son temps », « économiser du temps ».'
            },
            {
              q: 'Quel est le procédé dans « Boire un verre » ?',
              opts: ['Métaphore', 'Métonymie', 'Synonymie', 'Hyponymie'],
              correct: 1,
              explanation: 'C\'est une métonymie (contenant pour contenu) : on désigne le contenu (la boisson) par le contenant (le verre), par relation de contiguïté.'
            },
            {
              q: 'Comment le mot « bureau » a-t-il évolué de « tissu » à « institution » ?',
              opts: ['Par métaphore', 'Par une série de métonymies', 'Par emprunt', 'Par composition'],
              correct: 1,
              explanation: 'Le mot « bureau » a subi une chaîne de métonymies : tissu → meuble recouvert de ce tissu → pièce contenant ce meuble → institution. Chaque étape est un transfert de contiguïté.'
            }
          ],
          definitions: [
            {
              term: 'Métaphore conceptuelle',
              def: 'Mécanisme cognitif structurant un domaine abstrait en termes d\'un domaine concret (ex. : LE TEMPS EST DE L\'ARGENT). Théorie développée par Lakoff et Johnson (1980).'
            },
            {
              term: 'Métonymie',
              def: 'Transfert de sens fondé sur une relation de contiguïté (proximité) au sein d\'un même domaine conceptuel (ex. : « boire un verre » = contenant pour contenu).'
            },
            {
              term: 'Synecdoque',
              def: 'Figure de sens établissant un rapport partie-tout (ex. : « une voile à l\'horizon » = la voile pour le navire). Souvent considérée comme un sous-type de métonymie.'
            },
            {
              term: 'Élargissement sémantique',
              def: 'Processus par lequel un mot acquiert un sens plus large au cours du temps (ex. : « panier » de « récipient à pain » à tout récipient tressé).'
            },
            {
              term: 'Rétrécissement sémantique',
              def: 'Processus par lequel un mot acquiert un sens plus restreint au cours du temps (ex. : « viande » de « toute nourriture » à « chair animale »).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Lakoff & Johnson',
              back: 'En 1980, George Lakoff et Mark Johnson publient Metaphors We Live By (Les Métaphores dans la vie quotidienne), montrant que la métaphore est un mécanisme cognitif fondamental, pas un simple ornement rhétorique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'On estime qu\'un locuteur utilise en moyenne 6 métaphores par minute dans la conversation quotidienne. Les métaphores ne sont pas l\'exception mais la norme du langage ordinaire.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'MÉTAPHORE = transfert entre DEUX domaines (ressemblance). MÉTONYMIE = transfert dans UN MÊME domaine (contiguïté). Méta-phore = porter AU-DELÀ. Méto-nymie = changer de NOM.'
            }
          ]
        },
        {
          slug: 'pragmatique',
          title: 'La pragmatique',
          description: 'L\'étude du sens en contexte : actes de langage, deixis et présuppositions.',
          intro: 'La pragmatique étudie le sens en contexte : comment les locuteurs utilisent la langue pour agir, comment le contexte influence l\'interprétation et comment l\'implicite complète le dit. Elle dépasse la sémantique en intégrant le locuteur, l\'auditeur et la situation de communication.',
          introHighlight: 'La pragmatique montre que parler, ce n\'est pas seulement transmettre de l\'information : c\'est agir sur le monde. Promettre, ordonner, s\'excuser, déclarer sont des actes accomplis par le seul fait de les énoncer.',
          sections: [
            {
              title: 'Les actes de langage',
              paragraphs: ['John Austin, dans Quand dire c\'est faire (1962), montre que certains énoncés ne décrivent pas la réalité mais la modifient. Dire « je vous déclare mari et femme », « je promets de venir » ou « la séance est ouverte » accomplit un acte par le seul fait de l\'énoncer. Austin appelle ces énoncés des performatifs, par opposition aux constatifs qui décrivent un état de choses.', 'John Searle (1969) systématise la théorie d\'Austin en distinguant cinq types d\'actes de langage : les assertifs (affirmer, décrire), les directifs (ordonner, demander), les commissifs (promettre, s\'engager), les expressifs (remercier, s\'excuser) et les déclaratifs (baptiser, condamner, déclarer). Tout énoncé accomplit un acte locutoire (dire quelque chose), illocutoire (faire quelque chose en le disant) et perlocutoire (produire un effet sur l\'auditeur).'],
              highlight: 'La théorie des actes de langage a montré que le langage n\'est pas seulement un outil de description : c\'est un outil d\'action. Parler, c\'est toujours faire quelque chose.'
            },
            {
              title: 'La deixis',
              paragraphs: ['La deixis désigne les expressions dont le sens dépend du contexte d\'énonciation. Les pronoms personnels (« je », « tu »), les démonstratifs (« ceci », « cela »), les adverbes de lieu et de temps (« ici », « là-bas », « maintenant », « hier ») et les temps verbaux sont des déictiques : leur référence change à chaque situation de communication.', 'La deixis est la preuve la plus directe que le sens linguistique est contextuel. La phrase « je serai là demain » ne peut être interprétée qu\'en sachant qui parle (« je »), où est « là » et quand est « demain ». Le philosophe Karl Bühler (1934) a identifié l\'origo déictique comme le point de référence de toute communication : le locuteur (« je »), le moment (« maintenant ») et le lieu (« ici ») de l\'énonciation.'],
              highlight: 'La deixis montre que la langue n\'est pas un code abstrait : elle est ancrée dans la situation concrète de communication. Sans contexte, les déictiques sont vides de sens.'
            },
            {
              title: 'Présuppositions et implicites',
              paragraphs: ['La présupposition est une information implicitement tenue pour vraie dans un énoncé. La phrase « Marie a cessé de fumer » présuppose que Marie fumait auparavant. La question « Quand as-tu arrêté de tricher ? » présuppose que l\'interlocuteur trichait. Les présuppositions survivent à la négation : « Marie n\'a pas cessé de fumer » présuppose toujours que Marie fumait.', 'Le sous-entendu (ou implicature) est un sens implicite que le locuteur laisse entendre sans l\'affirmer directement. Dire « il fait froid ici » peut sous-entendre « ferme la fenêtre ». Contrairement à la présupposition, le sous-entendu est annulable : le locuteur peut le nier (« je ne voulais pas dire que tu devais fermer la fenêtre »). La distinction entre dire, présupposer et sous-entendre est fondamentale pour l\'analyse du discours.'],
              highlight: 'Les présuppositions sont des informations que le locuteur présente comme allant de soi, et qui survivent à la négation : nier « Pierre a cessé de fumer » ne nie pas que Pierre fumait.'
            }
          ],
          quiz: [
            {
              q: 'Qui a développé la théorie des actes de langage ?',
              opts: ['Saussure et Jakobson', 'Austin et Searle', 'Chomsky et Halle', 'Grice et Sperber'],
              correct: 1,
              explanation: 'John Austin (Quand dire c\'est faire, 1962) a fondé la théorie des actes de langage, systématisée ensuite par John Searle (1969) en cinq types d\'actes.'
            },
            {
              q: 'Que présuppose la phrase « Marie a cessé de fumer » ?',
              opts: ['Marie ne fume plus', 'Marie fumait auparavant', 'Marie est malade', 'Marie a décidé d\'arrêter'],
              correct: 1,
              explanation: 'La phrase présuppose que Marie fumait auparavant. Cette présupposition survit à la négation (« Marie n\'a pas cessé de fumer » implique toujours qu\'elle fumait).'
            },
            {
              q: 'Qu\'est-ce qu\'un déictique ?',
              opts: ['Un mot invariable', 'Une expression dont le sens dépend du contexte d\'énonciation', 'Un verbe performatif', 'Un connecteur logique'],
              correct: 1,
              explanation: 'Un déictique est une expression dont le référent change selon le contexte : « je » désigne celui qui parle, « ici » le lieu de l\'énonciation, « maintenant » le moment de l\'énonciation.'
            }
          ],
          definitions: [
            {
              term: 'Acte de langage',
              def: 'Action accomplie par le seul fait de prononcer un énoncé : affirmer, ordonner, promettre, remercier, déclarer (Austin, 1962 ; Searle, 1969).'
            },
            {
              term: 'Performatif',
              def: 'Énoncé qui accomplit l\'action qu\'il décrit par le seul fait d\'être prononcé (ex. : « je promets », « je vous déclare mari et femme »). Opposé à constatif.'
            },
            {
              term: 'Deixis',
              def: 'Propriété des expressions linguistiques dont le référent dépend du contexte d\'énonciation : « je », « ici », « maintenant », « demain », « ceci ».'
            },
            {
              term: 'Présupposition',
              def: 'Information implicitement tenue pour vraie dans un énoncé, qui survit à la négation (ex. : « cesser de fumer » présuppose que l\'on fumait).'
            },
            {
              term: 'Acte illocutoire',
              def: 'Ce qu\'on fait en disant quelque chose : affirmer, promettre, ordonner. L\'acte illocutoire est le coeur de la théorie des actes de langage (distingué de l\'acte locutoire et perlocutoire).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Austin 1962',
              back: 'John Austin publie How to Do Things with Words (Quand dire c\'est faire) en 1962, fondant la théorie des actes de langage qui révolutionne la philosophie du langage et la pragmatique linguistique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les questions piégées exploitent les présuppositions : « Avez-vous cessé de battre votre femme ? » présuppose que vous la battiez. Que vous répondiez oui ou non, la présupposition reste intacte.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Les 5 actes de Searle = ADCED : Assertifs (je dis), Directifs (je commande), Commissifs (je m\'engage), Expressifs (je ressens), Déclaratifs (je change le monde).'
            }
          ]
        }
      ]
    },
    {
      slug: 'sociolinguistique',
      title: 'Sociolinguistique',
      description: 'L\'étude des rapports entre langue et société : variation, contact des langues et politique linguistique.',
      introText: 'La sociolinguistique étudie les relations entre la langue et la société. Elle analyse comment les facteurs sociaux (classe, âge, genre, origine géographique) influencent les pratiques linguistiques, comment les langues entrent en contact et comment les politiques linguistiques façonnent le destin des langues.',
      introHighlight: 'La sociolinguistique montre qu\'une langue n\'est jamais homogène : elle varie dans l\'espace, dans le temps, selon les groupes sociaux et selon les situations de communication.',
      lessons: [
        {
          slug: 'variation-linguistique',
          title: 'La variation linguistique',
          description: 'Les différentes formes de variation au sein d\'une même langue : dialectes, registres, sociolectes.',
          intro: 'Aucune langue n\'est un bloc monolithique : elle varie selon le lieu (variation diatopique), le groupe social (variation diastratique), la situation de communication (variation diaphasique) et l\'époque (variation diachronique). La sociolinguistique décrit et explique ces variations.',
          introHighlight: 'La variation n\'est pas un défaut de la langue mais sa propriété fondamentale : c\'est par la variation que la langue s\'adapte aux besoins de communication de sociétés diverses.',
          sections: [
            {
              title: 'La variation diatopique',
              paragraphs: ['La variation diatopique (géographique) est la plus visible : une même langue se parle différemment selon les régions. En français, les différences entre le français de France, du Québec, de Belgique, de Suisse et d\'Afrique concernent la prononciation (le /r/ uvulaire en France vs roulé au Québec), le vocabulaire (« déjeuner » = repas du matin en Belgique, du midi en France) et certaines constructions syntaxiques.', 'La dialectologie, discipline ancêtre de la sociolinguistique, cartographie ces variations dans des atlas linguistiques. L\'Atlas linguistique de la France (ALF), réalisé par Gilliéron et Edmont entre 1902 et 1910, est un monument de la recherche. Il montre que les frontières linguistiques sont rarement nettes : les traits varient graduellement, formant un continuum dialectal.'],
              highlight: 'Les frontières linguistiques ne coïncident jamais exactement avec les frontières politiques : la langue varie de village en village, formant un continuum que seules les normes institutionnelles découpent en « langues » distinctes.'
            },
            {
              title: 'La variation diastratique',
              paragraphs: ['La variation diastratique concerne les différences linguistiques liées aux groupes sociaux : classe sociale, âge, genre, profession, ethnie. William Labov, fondateur de la sociolinguistique variationniste, a montré dans son étude pionnière à New York (1966) que la prononciation du /r/ postvocalique (dans « car », « floor ») était corrélée au statut social : plus le locuteur appartenait à une classe élevée, plus il prononçait ce /r/.', 'Les sociolectes sont les variétés de langue propres à un groupe social. L\'argot, le verlan, le langage des jeunes ou le jargon professionnel sont des sociolectes. Ils servent de marqueurs identitaires : parler comme son groupe, c\'est affirmer son appartenance. La notion d\'insécurité linguistique décrit le malaise des locuteurs qui perçoivent un écart entre leur usage et la norme prestigieuse.'],
              highlight: 'Labov a démontré que la variation linguistique n\'est pas aléatoire : elle est systématiquement corrélée à des facteurs sociaux (classe, âge, genre), ce qui en fait un objet d\'étude scientifique.'
            },
            {
              title: 'La variation diaphasique et les registres',
              paragraphs: ['La variation diaphasique (ou stylistique) concerne les changements linguistiques liés à la situation de communication. Un même locuteur adapte son langage selon l\'interlocuteur, le cadre et le sujet : il ne parle pas de la même manière à un ami, à un collègue ou à un juge. Les registres de langue (soutenu, courant, familier, vulgaire) sont des catégories pratiques pour décrire cette variation.', 'Le concept de répertoire verbal, introduit par John Gumperz, désigne l\'ensemble des variétés et des registres dont dispose un locuteur. Plus le répertoire est riche, plus le locuteur est capable de s\'adapter à des situations diverses. L\'alternance codique (code-switching) est le passage d\'une langue ou d\'une variété à une autre au sein d\'une même conversation, phénomène courant chez les locuteurs bilingues.'],
              highlight: 'Tout locuteur est un caméléon linguistique : il adapte sa façon de parler à chaque situation, navigant entre registres et variétés selon les exigences sociales du moment.'
            }
          ],
          quiz: [
            {
              q: 'Comment appelle-t-on la variation linguistique liée à la géographie ?',
              opts: ['Diastratique', 'Diaphasique', 'Diatopique', 'Diachronique'],
              correct: 2,
              explanation: 'La variation diatopique (du grec topos = lieu) concerne les différences linguistiques liées à l\'espace géographique : dialectes, accents régionaux.'
            },
            {
              q: 'Qui est considéré comme le fondateur de la sociolinguistique variationniste ?',
              opts: ['Ferdinand de Saussure', 'Noam Chomsky', 'William Labov', 'Roman Jakobson'],
              correct: 2,
              explanation: 'William Labov a fondé la sociolinguistique variationniste avec son étude pionnière sur la stratification sociale du /r/ à New York (1966).'
            },
            {
              q: 'Qu\'est-ce que l\'alternance codique (code-switching) ?',
              opts: ['La traduction simultanée', 'Le passage d\'une langue ou variété à une autre dans une même conversation', 'L\'apprentissage d\'une nouvelle langue', 'Le changement de registre à l\'écrit'],
              correct: 1,
              explanation: 'L\'alternance codique est le passage d\'une langue ou d\'une variété linguistique à une autre au cours d\'une même conversation, phénomène fréquent chez les bilingues.'
            }
          ],
          definitions: [
            {
              term: 'Variation diatopique',
              def: 'Variation linguistique liée à l\'espace géographique : dialectes régionaux, accents, différences lexicales entre régions ou pays francophones.'
            },
            {
              term: 'Variation diastratique',
              def: 'Variation linguistique liée aux groupes sociaux : classe, âge, genre, profession. Les sociolectes en sont la manifestation.'
            },
            {
              term: 'Variation diaphasique',
              def: 'Variation liée à la situation de communication : un même locuteur adapte son registre (soutenu, courant, familier) selon l\'interlocuteur et le contexte.'
            },
            {
              term: 'Sociolecte',
              def: 'Variété de langue propre à un groupe social défini par l\'âge, la classe, la profession ou l\'appartenance ethnique (ex. : argot, verlan, jargon professionnel).'
            },
            {
              term: 'Alternance codique',
              def: 'Passage d\'une langue ou d\'une variété linguistique à une autre au cours d\'une même conversation, phénomène courant chez les locuteurs bi- ou plurilingues.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Labov 1966',
              back: 'En 1966, William Labov publie The Social Stratification of English in New York City, étude fondatrice de la sociolinguistique variationniste montrant la corrélation systématique entre variation linguistique et stratification sociale.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le verlan (inversion des syllabes : « femme » → « meuf », « louche » → « chelou ») est un sociolecte français qui a émergé dans les banlieues dans les années 1970 et a intégré le français courant.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Les 4 types de variation = 4 dia- : diaTOPique (TOPOS = lieu), diaSTRATique (STRATUM = couche sociale), diaPHASique (PHASE = situation), diaCHRONique (CHRONOS = temps).'
            }
          ]
        },
        {
          slug: 'contact-langues',
          title: 'Le contact des langues',
          description: 'Les phénomènes liés au bilinguisme, aux emprunts et à la créolisation.',
          intro: 'Lorsque des communautés linguistiques entrent en contact, leurs langues s\'influencent mutuellement. Le bilinguisme, les emprunts lexicaux, les pidgins et les créoles sont autant de manifestations de ce contact, qui a façonné la plupart des langues du monde.',
          introHighlight: 'Le contact des langues est la norme historique de l\'humanité, non l\'exception : la majorité des sociétés humaines ont toujours été multilingues.',
          sections: [
            {
              title: 'Le bilinguisme et le multilinguisme',
              paragraphs: ['Le bilinguisme est la capacité d\'un individu à utiliser deux langues dans la communication quotidienne. Le multilinguisme étend cette capacité à trois langues ou plus. Contrairement à un préjugé répandu, le bilinguisme n\'est pas l\'exception mais la norme mondiale : plus de la moitié de la population mondiale utilise quotidiennement deux langues ou plus.', 'Le bilinguisme peut être précoce (acquis dès l\'enfance) ou tardif (acquis à l\'âge adulte), simultané (deux langues acquises en même temps) ou séquentiel (une langue après l\'autre). Les recherches montrent que le cerveau bilingue n\'est pas deux cerveaux monolingues : les deux langues sont constamment actives et s\'influencent mutuellement, ce qui confère des avantages cognitifs mesurables.'],
              highlight: 'Le monolinguisme est une exception historique et géographique : plus de la moitié de la population mondiale est bilingue ou multilingue.'
            },
            {
              title: 'Les emprunts et les interférences',
              paragraphs: ['L\'emprunt lexical est l\'adoption d\'un mot d\'une langue par une autre. Le français a massivement emprunté à l\'arabe (« algèbre », « algorithme », « zéro », « café »), à l\'italien (« banque », « concert », « balcon »), à l\'anglais (« week-end », « sport », « internet ») et à bien d\'autres langues. Les emprunts témoignent des contacts culturels et commerciaux entre les peuples.', 'Les interférences sont des influences involontaires d\'une langue sur l\'autre chez un locuteur bilingue. Elles peuvent être phonétiques (accent étranger), lexicales (faux amis), syntaxiques (calque de construction) ou pragmatiques (conventions de politesse transférées). Le franglais, mélange de français et d\'anglais, illustre l\'interférence massive de l\'anglais sur le français contemporain.'],
              highlight: 'Les emprunts linguistiques sont la trace des contacts culturels : le vocabulaire scientifique français vient du grec et du latin, les termes culinaires de l\'italien, les termes de navigation du néerlandais.'
            },
            {
              title: 'Les pidgins et les créoles',
              paragraphs: ['Un pidgin est une langue de contact simplifiée, née du besoin de communication entre groupes parlant des langues mutuellement inintelligibles. Les pidgins ont un vocabulaire réduit, une grammaire simplifiée et ne sont la langue maternelle de personne. Ils apparaissent dans des contextes de commerce, de plantation ou de colonisation.', 'Un créole est un pidgin qui est devenu la langue maternelle d\'une communauté. La créolisation s\'accompagne d\'une expansion grammaticale considérable : le créole développe un système verbal complexe, une morphologie productive et un vocabulaire enrichi. Le créole haïtien, le créole réunionnais et le tok pisin de Papouasie-Nouvelle-Guinée sont des créoles à base française ou anglaise parlés par des millions de personnes.'],
              highlight: 'La créolisation est un laboratoire vivant de la création linguistique : en une ou deux générations, un pidgin rudimentaire se transforme en une langue complète avec toute la complexité structurelle d\'une langue naturelle.'
            }
          ],
          quiz: [
            {
              q: 'Quelle proportion de la population mondiale est estimée bilingue ou multilingue ?',
              opts: ['Environ 10%', 'Environ 25%', 'Plus de 50%', 'Environ 90%'],
              correct: 2,
              explanation: 'Plus de la moitié de la population mondiale utilise quotidiennement deux langues ou plus. Le monolinguisme est l\'exception, pas la norme.'
            },
            {
              q: 'Quelle est la différence entre un pidgin et un créole ?',
              opts: ['Aucune différence', 'Le pidgin est écrit, le créole est oral', 'Le créole est la langue maternelle d\'une communauté, pas le pidgin', 'Le pidgin est ancien, le créole est moderne'],
              correct: 2,
              explanation: 'Un pidgin est une langue de contact qui n\'est la langue maternelle de personne. Un créole est un pidgin devenu la langue maternelle d\'une communauté, avec une complexité grammaticale accrue.'
            },
            {
              q: 'De quelle langue le français a-t-il emprunté les mots « algèbre » et « algorithme » ?',
              opts: ['Le grec', 'Le latin', 'L\'arabe', 'Le persan'],
              correct: 2,
              explanation: '« Algèbre » vient de l\'arabe « al-jabr » et « algorithme » du nom du mathématicien persan al-Khwârizmî, transmis par l\'arabe. Ces emprunts témoignent de la transmission du savoir mathématique arabe à l\'Europe médiévale.'
            }
          ],
          definitions: [
            {
              term: 'Bilinguisme',
              def: 'Capacité d\'un individu à utiliser deux langues dans la communication quotidienne. Plus de la moitié de la population mondiale est bilingue.'
            },
            {
              term: 'Emprunt lexical',
              def: 'Adoption d\'un mot d\'une langue par une autre, témoignant de contacts culturels (ex. : « algèbre » de l\'arabe, « week-end » de l\'anglais).'
            },
            {
              term: 'Interférence',
              def: 'Influence involontaire d\'une langue sur une autre chez un locuteur bilingue, pouvant affecter la prononciation, le vocabulaire ou la syntaxe.'
            },
            {
              term: 'Pidgin',
              def: 'Langue de contact simplifiée née du besoin de communication entre groupes linguistiquement différents. Un pidgin n\'est la langue maternelle de personne.'
            },
            {
              term: 'Créole',
              def: 'Langue née de la nativisation d\'un pidgin : devenue la langue maternelle d\'une communauté, elle acquiert une complexité grammaticale comparable à toute langue naturelle.'
            }
          ],
          memos: [
            {
              front: 'Nombre clé : emprunts arabes',
              back: 'Le français compte environ 500 mots d\'origine arabe, dont « algèbre », « algorithme », « zéro », « café », « magasin », « hasard », « coton », « sirop » et « azur ».'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le tok pisin, créole à base anglaise de Papouasie-Nouvelle-Guinée, est l\'une des langues officielles du pays. « Tok » vient de l\'anglais « talk » et « pisin » de « pidgin ». Il est parlé par environ 4 millions de personnes.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Pidgin = Personne ne l\'a comme langue Maternelle. Créole = une Communauté l\'a comme Langue Maternelle. Le créole est un pidgin qui a « grandi » en devenant langue première.'
            }
          ]
        },
        {
          slug: 'politique-linguistique',
          title: 'Politique linguistique',
          description: 'Les interventions des États sur les langues : normalisation, planification et droits linguistiques.',
          intro: 'La politique linguistique désigne l\'ensemble des décisions prises par les États, les institutions ou les communautés pour influencer le statut, la forme ou l\'usage des langues. De l\'Académie française à la francophonie internationale, la gestion politique des langues a des conséquences profondes sur les sociétés.',
          introHighlight: 'Les langues ne sont pas seulement des outils de communication : elles sont des enjeux de pouvoir. Choisir une langue officielle, standardiser une orthographe ou interdire un dialecte sont des actes politiques aux conséquences sociales considérables.',
          sections: [
            {
              title: 'La normalisation linguistique',
              paragraphs: ['La normalisation est le processus par lequel une variété de langue est sélectionnée, codifiée et promue comme standard. En France, l\'ordonnance de Villers-Cotterêts (1539) a imposé le français (c\'est-à-dire le dialecte de l\'Île-de-France) comme langue de l\'administration, au détriment du latin et des langues régionales. L\'Académie française, fondée en 1635, a codifié la grammaire et le vocabulaire.', 'La normalisation implique quatre étapes : la sélection d\'une variété (souvent celle du groupe dominant), la codification (fixation de la grammaire, du vocabulaire et de l\'orthographe dans des dictionnaires et grammaires), l\'élaboration (extension de la langue à de nouveaux domaines comme la science et la technique) et la diffusion (par l\'éducation, les médias et l\'administration).'],
              highlight: 'Une langue standard n\'est pas linguistiquement supérieure aux dialectes : c\'est un dialecte qui a réussi politiquement. Le français standard est le dialecte de l\'Île-de-France promu par le pouvoir royal.'
            },
            {
              title: 'La diglossie et les langues minoritaires',
              paragraphs: ['La diglossie, concept formalisé par Charles Ferguson (1959), désigne la coexistence au sein d\'une communauté de deux variétés de langue fonctionnellement différenciées : une variété haute (H), utilisée dans les contextes formels (éducation, religion, administration), et une variété basse (L), utilisée dans la vie quotidienne. L\'arabe (classique vs dialectal), le grec (katharévoussa vs démotique) et le créole haïtien vs le français en Haïti illustrent cette situation.', 'Les langues minoritaires ou régionales sont souvent en position de variété basse dans une situation diglossique. En France, le breton, le basque, l\'occitan, l\'alsacien et le corse ont longtemps été stigmatisés et combattus par la politique d\'unification linguistique. La Charte européenne des langues régionales ou minoritaires (1992) vise à protéger ces langues, mais la France ne l\'a pas ratifiée, invoquant le principe constitutionnel d\'unité linguistique.'],
              highlight: 'La diglossie n\'est pas un simple bilinguisme : c\'est une hiérarchie sociale entre deux variétés, où la variété haute confère prestige et pouvoir tandis que la variété basse est cantonnée à la sphère privée.'
            },
            {
              title: 'La francophonie et les enjeux contemporains',
              paragraphs: ['La francophonie désigne l\'ensemble des locuteurs du français dans le monde, estimé à environ 321 millions de personnes en 2024. L\'Organisation internationale de la Francophonie (OIF) regroupe 88 États et gouvernements. Le français est langue officielle dans 29 pays et langue de travail dans de nombreuses organisations internationales (ONU, UE, UA).', 'Les enjeux contemporains de la politique linguistique sont multiples. La mondialisation favorise l\'anglais comme lingua franca, menaçant la diversité linguistique. L\'écriture inclusive suscite des débats sur le rapport entre langue et genre. Le numérique crée de nouveaux espaces linguistiques (réseaux sociaux, intelligence artificielle) où la représentation des langues est inégale. La mort des langues est un enjeu majeur : on estime que la moitié des 7 000 langues actuelles pourrait disparaître d\'ici la fin du siècle.'],
              highlight: 'On estime que la moitié des 7 000 langues parlées aujourd\'hui pourrait disparaître d\'ici 2100. Avec chaque langue disparue, c\'est un système unique de connaissance et de vision du monde qui s\'éteint.'
            }
          ],
          quiz: [
            {
              q: 'Quelle ordonnance a imposé le français comme langue de l\'administration en France ?',
              opts: ['L\'édit de Nantes (1598)', 'L\'ordonnance de Villers-Cotterêts (1539)', 'La loi Toubon (1994)', 'Le traité de Verdun (843)'],
              correct: 1,
              explanation: 'L\'ordonnance de Villers-Cotterêts, signée par François Ier en 1539, impose le français (au lieu du latin) dans tous les actes administratifs et juridiques du royaume.'
            },
            {
              q: 'Qu\'est-ce que la diglossie ?',
              opts: ['Le bilinguisme individuel', 'La coexistence de deux variétés fonctionnellement différenciées', 'L\'incapacité à parler deux langues', 'La traduction automatique'],
              correct: 1,
              explanation: 'La diglossie (Ferguson, 1959) est la coexistence de deux variétés de langue dans une communauté avec des fonctions sociales différentes : haute (formelle) et basse (quotidienne).'
            },
            {
              q: 'Combien de langues sont parlées dans le monde aujourd\'hui ?',
              opts: ['Environ 200', 'Environ 2 000', 'Environ 7 000', 'Environ 15 000'],
              correct: 2,
              explanation: 'On recense environ 7 000 langues dans le monde aujourd\'hui, mais la moitié d\'entre elles pourrait disparaître d\'ici la fin du XXIe siècle.'
            }
          ],
          definitions: [
            {
              term: 'Politique linguistique',
              def: 'Ensemble des décisions et actions visant à influencer le statut, la forme ou l\'usage des langues au sein d\'une société (choix de langue officielle, normalisation, etc.).'
            },
            {
              term: 'Normalisation',
              def: 'Processus de sélection, codification, élaboration et diffusion d\'une variété de langue comme standard. L\'Académie française est un agent de normalisation du français.'
            },
            {
              term: 'Diglossie',
              def: 'Coexistence au sein d\'une communauté de deux variétés de langue hiérarchisées : une variété haute (formelle) et une variété basse (quotidienne). Concept de Ferguson (1959).'
            },
            {
              term: 'Langue minoritaire',
              def: 'Langue parlée par une minorité de la population d\'un État, souvent en position de variété basse dans une situation diglossique (ex. : breton, basque, occitan en France).'
            },
            {
              term: 'Francophonie',
              def: 'Ensemble des locuteurs du français dans le monde (environ 321 millions) et des institutions qui promeuvent la langue française (OIF : 88 États membres).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Villers-Cotterêts',
              back: 'L\'ordonnance de Villers-Cotterêts (1539) de François Ier impose le français comme langue de l\'administration, remplaçant le latin. C\'est l\'acte fondateur de la politique linguistique française.'
            },
            {
              front: 'Nombre clé : langues en danger',
              back: 'Sur les ~7 000 langues parlées aujourd\'hui, environ 3 000 sont menacées d\'extinction. Une langue meurt en moyenne toutes les deux semaines. 96% des langues sont parlées par seulement 4% de la population mondiale.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'La Papouasie-Nouvelle-Guinée est le pays le plus linguistiquement divers au monde avec environ 840 langues pour 9 millions d\'habitants, soit une langue pour environ 10 000 personnes.'
            }
          ]
        },
        {
          slug: 'langue-identite',
          title: 'Langue et identité',
          description: 'Comment la langue construit et exprime les identités sociales, ethniques et nationales.',
          intro: 'La langue est bien plus qu\'un outil de communication : elle est un marqueur d\'identité fondamental. L\'accent, le vocabulaire, le registre et le choix de langue signalent l\'appartenance sociale, régionale, ethnique et nationale du locuteur.',
          introHighlight: 'La langue est la carte d\'identité la plus intime : en quelques mots, un locuteur révèle son origine géographique, sa classe sociale et son groupe d\'appartenance.',
          sections: [
            {
              title: 'La langue comme marqueur social',
              paragraphs: ['Pierre Bourdieu, dans Ce que parler veut dire (1982), analyse la langue comme un capital symbolique. Les variétés linguistiques prestigieuses (le français standard, la prononciation « neutre ») fonctionnent comme un capital social qui ouvre des portes dans l\'éducation, l\'emploi et la vie sociale. Les locuteurs de variétés stigmatisées (accents régionaux, sociolectes populaires) subissent une discrimination linguistique réelle.', 'Les attitudes linguistiques sont les jugements que les locuteurs portent sur les variétés de langue. Les études montrent que les locuteurs associent systématiquement certains accents à des traits de personnalité : un accent perçu comme « cultivé » est associé à l\'intelligence et à la compétence, un accent « populaire » à la chaleur mais aussi à un manque d\'éducation. Ces préjugés linguistiques sont des préjugés sociaux déguisés.'],
              highlight: 'La discrimination linguistique (glottophobie) est la dernière forme de discrimination socialement acceptable : juger quelqu\'un sur son accent, c\'est juger sa classe sociale sous couvert de linguistique.'
            },
            {
              title: 'Langue et genre',
              paragraphs: ['La sociolinguistique du genre étudie les différences entre les pratiques linguistiques des hommes et des femmes et la manière dont la langue reflète et perpétue les rapports de genre. Robin Lakoff, dans Language and Woman\'s Place (1975), a identifié des traits « typiquement féminins » comme l\'usage de questions tags, l\'hésitation et le vocabulaire affectif. Ces analyses, critiquées pour leur essentialisme, ont ouvert un champ de recherche fécond.', 'Le débat sur l\'écriture inclusive (féminisation des titres, point médian, doublets) illustre l\'intersection entre langue, genre et politique. En français, le masculin « l\'emporte » grammaticalement sur le féminin (« les étudiants et les étudiantes sont partis »). L\'écriture inclusive propose des alternatives (« les étudiant·e·s ») qui divisent linguistes, institutions et opinion publique.'],
              highlight: 'Le débat sur l\'écriture inclusive montre que la grammaire n\'est jamais neutre : les règles grammaticales reflètent et perpétuent des rapports de pouvoir qui peuvent être contestés et modifiés.'
            },
            {
              title: 'Langue et nation',
              paragraphs: ['Le lien entre langue et nation est une construction historique, forgée principalement au XIXe siècle par le nationalisme romantique. L\'idée « une nation = une langue = un peuple » a motivé la standardisation linguistique, la création de littératures nationales et parfois la répression des langues minoritaires. En France, la IIIe République (1870-1940) a systématiquement combattu les langues régionales au profit du français standard.', 'Cependant, le lien langue-nation n\'est pas universel : la Suisse est quadrilingue, la Belgique trilingue, et de nombreuses nations africaines comptent des dizaines de langues. Inversement, l\'anglais, l\'espagnol et l\'arabe sont partagés par de nombreuses nations distinctes. L\'identité linguistique est donc toujours le résultat d\'une construction sociale et politique, jamais un fait naturel.'],
              highlight: 'L\'équation « une nation = une langue » est un mythe politique, non une réalité linguistique. La plupart des nations sont multilingues et la plupart des langues traversent les frontières nationales.'
            }
          ],
          quiz: [
            {
              q: 'Quel sociologue a analysé la langue comme un « capital symbolique » ?',
              opts: ['Émile Durkheim', 'Pierre Bourdieu', 'Max Weber', 'Michel Foucault'],
              correct: 1,
              explanation: 'Pierre Bourdieu, dans Ce que parler veut dire (1982), analyse la langue comme un capital symbolique dont la valeur dépend du marché linguistique.'
            },
            {
              q: 'Qui a publié Language and Woman\'s Place en 1975 ?',
              opts: ['Deborah Tannen', 'Robin Lakoff', 'Judith Butler', 'Penelope Eckert'],
              correct: 1,
              explanation: 'Robin Lakoff a publié Language and Woman\'s Place en 1975, ouvrage pionnier de la sociolinguistique du genre qui a ouvert tout un champ de recherche.'
            },
            {
              q: 'Quelle République française a systématiquement combattu les langues régionales ?',
              opts: ['La Ire République', 'La IIe République', 'La IIIe République', 'La Ve République'],
              correct: 2,
              explanation: 'La IIIe République (1870-1940) a mené une politique d\'unification linguistique systématique par l\'école publique obligatoire, combattant les « patois » au profit du français standard.'
            }
          ],
          definitions: [
            {
              term: 'Capital linguistique',
              def: 'Concept de Bourdieu : la maîtrise de la variété linguistique prestigieuse fonctionne comme un capital social donnant accès au pouvoir, à l\'éducation et à l\'emploi.'
            },
            {
              term: 'Attitude linguistique',
              def: 'Jugement de valeur porté par un locuteur sur une variété de langue, un accent ou une pratique linguistique. Les attitudes linguistiques reflètent souvent des préjugés sociaux.'
            },
            {
              term: 'Glottophobie',
              def: 'Discrimination fondée sur la langue ou l\'accent d\'un locuteur. Terme proposé par le linguiste Philippe Blanchet pour désigner une forme de discrimination souvent invisibilisée.'
            },
            {
              term: 'Écriture inclusive',
              def: 'Ensemble de pratiques rédactionnelles visant à rendre visible le féminin dans la langue française : féminisation des titres, doublets, point médian (« étudiant·e·s »).'
            },
            {
              term: 'Insécurité linguistique',
              def: 'Malaise ressenti par un locuteur qui perçoit un écart entre sa propre pratique linguistique et la norme prestigieuse, le conduisant à dévaloriser sa façon de parler.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Bourdieu 1982',
              back: 'Pierre Bourdieu publie Ce que parler veut dire en 1982, analysant la langue comme un marché où les variétés prestigieuses fonctionnent comme du capital symbolique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'En 2020, le linguiste Philippe Blanchet a fait reconnaître le terme « glottophobie » pour désigner la discrimination fondée sur la langue ou l\'accent. Des études montrent que l\'accent influence les décisions d\'embauche, de logement et même de justice.'
            },
            {
              front: 'Nombre clé : langues en France',
              back: 'Outre le français, on recense environ 75 langues régionales en France métropolitaine et ultramarine : breton, basque, occitan, alsacien, corse, catalan, créoles, langues kanak, etc.'
            }
          ]
        },
        {
          slug: 'changement-linguistique',
          title: 'Le changement linguistique',
          description: 'Comment et pourquoi les langues changent au fil du temps.',
          intro: 'Les langues changent sans cesse : la prononciation, le vocabulaire, la grammaire et le sens des mots évoluent d\'une génération à l\'autre. La linguistique historique et la sociolinguistique étudient les mécanismes et les causes de ces transformations.',
          introHighlight: 'Le changement linguistique est inévitable et universel : aucune langue vivante ne reste identique à elle-même sur plus de quelques générations.',
          sections: [
            {
              title: 'Les mécanismes du changement phonétique',
              paragraphs: ['Le changement phonétique est le moteur le plus constant de l\'évolution linguistique. Les lois phonétiques, découvertes par les néogrammairiens au XIXe siècle, décrivent des transformations régulières et systématiques. La loi de Grimm décrit le décalage consonantique entre l\'indo-européen et le germanique : le *p indo-européen est devenu f en germanique (latin « pater », anglais « father »).', 'En français, l\'évolution du latin au français illustre des changements phonétiques massifs et réguliers : la chute des voyelles atones (« tabulam » → « table »), la palatalisation des consonnes devant voyelle antérieure (« centum » [kentum] → « cent » [sɑ̃]), la nasalisation des voyelles devant consonne nasale (« bonum » → « bon » [bɔ̃]). Ces changements sont aveugles au sens : ils affectent tous les mots contenant le même son dans le même contexte.'],
              highlight: 'Les lois phonétiques sont « aveugles » : elles s\'appliquent mécaniquement à tous les mots sans exception, indépendamment du sens. C\'est cette régularité qui a permis de reconstruire les langues disparues.'
            },
            {
              title: 'Le changement grammatical et lexical',
              paragraphs: ['La grammaticalisation est le processus par lequel un mot lexical (porteur de sens) devient un mot grammatical (outil de grammaire). En français, le pronom « pas » (qui signifiait « un pas ») est devenu une particule de négation (« je ne marche pas » → « je marche pas »). Le futur simple (« chanterai ») vient de la périphrase latine « cantare habeo » (j\'ai à chanter), où l\'auxiliaire « habeo » s\'est soudé à l\'infinitif.', 'Le changement lexical est le plus visible et le plus rapide. Les mots se créent (néologismes), disparaissent (archaïsmes), changent de sens (évolution sémantique) et s\'empruntent entre langues. Le français perd et gagne environ 500 mots par décennie. Les dictionnaires enregistrent ces changements avec un décalage : un mot nouveau met en moyenne 10 à 20 ans avant d\'entrer dans le dictionnaire.'],
              highlight: 'La grammaticalisation est un processus unidirectionnel : les mots évoluent du concret vers l\'abstrait, du lexical vers le grammatical, jamais l\'inverse.'
            },
            {
              title: 'Les causes du changement linguistique',
              paragraphs: ['Le changement linguistique a des causes multiples. Les facteurs internes incluent l\'économie articulatoire (simplification des sons difficiles), l\'analogie (régularisation des formes irrégulières), et la tendance à l\'expressivité (renouvellement des métaphores usées). Les facteurs externes incluent le contact des langues (emprunts, interférences), les changements sociaux (urbanisation, scolarisation, médias) et les attitudes linguistiques.', 'William Labov a montré que le changement linguistique en cours peut être observé en temps réel. Les innovations linguistiques naissent souvent dans des groupes sociaux spécifiques (jeunes, femmes, classes moyennes) et se diffusent progressivement à l\'ensemble de la communauté. Le changement linguistique est donc un phénomène social autant que structurel.'],
              highlight: 'Labov a démontré que le changement linguistique n\'est pas aléatoire : il naît dans des groupes sociaux identifiables et se diffuse selon des trajectoires prévisibles, comme une innovation sociale.'
            }
          ],
          quiz: [
            {
              q: 'Que décrit la loi de Grimm ?',
              opts: ['La naissance des contes populaires', 'Le décalage consonantique entre l\'indo-européen et le germanique', 'L\'évolution du latin au français', 'La simplification des voyelles'],
              correct: 1,
              explanation: 'La loi de Grimm (1822) décrit le décalage systématique des consonnes entre l\'indo-européen et les langues germaniques (ex. : *p → f, latin « pater » → anglais « father »).'
            },
            {
              q: 'Qu\'est-ce que la grammaticalisation ?',
              opts: ['L\'apprentissage de la grammaire', 'La transformation d\'un mot lexical en mot grammatical', 'La création de règles grammaticales', 'La correction des erreurs'],
              correct: 1,
              explanation: 'La grammaticalisation est le processus par lequel un mot plein (lexical) devient un mot-outil (grammatical). Ex. : « pas » (un pas) → particule de négation.'
            },
            {
              q: 'Dans quel groupe social les innovations linguistiques naissent-elles souvent, selon Labov ?',
              opts: ['Les personnes âgées', 'Les hommes de classe supérieure', 'Les jeunes et les femmes des classes moyennes', 'Les locuteurs ruraux'],
              correct: 2,
              explanation: 'Labov a montré que les innovations linguistiques naissent souvent chez les jeunes adultes et les femmes des classes moyennes, avant de se diffuser à l\'ensemble de la communauté.'
            }
          ],
          definitions: [
            {
              term: 'Loi phonétique',
              def: 'Transformation sonore régulière et systématique affectant tous les mots d\'une langue contenant le même son dans le même contexte (ex. : loi de Grimm).'
            },
            {
              term: 'Grammaticalisation',
              def: 'Processus par lequel un mot lexical (plein de sens) devient un mot grammatical (outil de grammaire). Processus unidirectionnel du concret vers l\'abstrait.'
            },
            {
              term: 'Analogie',
              def: 'Processus de régularisation par lequel des formes irrégulières s\'alignent sur des modèles réguliers (ex. : les enfants disent « je sontais » par analogie avec « je chantais »).'
            },
            {
              term: 'Néogrammairiens',
              def: 'École linguistique allemande du XIXe siècle (Brugmann, Osthoff) qui a posé le principe de la régularité sans exception des lois phonétiques.'
            },
            {
              term: 'Changement en temps apparent',
              def: 'Méthode de Labov consistant à comparer les usages linguistiques de différentes tranches d\'âge à un moment donné pour observer le changement en cours.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Loi de Grimm',
              back: 'En 1822, Jacob Grimm (l\'un des frères Grimm, aussi connus pour leurs contes) formule la loi du décalage consonantique germanique, fondement de la linguistique historique comparative.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le futur simple français (« je chanterai ») est né de la soudure de l\'infinitif latin « cantare » et du verbe « avoir » : « cantare habeo » (j\'ai à chanter) → « chanterai ». C\'est un cas classique de grammaticalisation.'
            },
            {
              front: 'Nombre clé : rythme du changement',
              back: 'Le français perd et gagne environ 500 mots par décennie. Le Petit Robert ajoute environ 150 mots nouveaux par an et en retire une cinquantaine.'
            }
          ]
        }
      ]
    },
    {
      slug: 'acquisition-langage',
      title: 'Acquisition du langage',
      description: 'Comment les enfants acquièrent leur langue maternelle et les théories de l\'apprentissage linguistique.',
      introText: 'L\'acquisition du langage est l\'un des phénomènes les plus remarquables du développement humain. En quelques années, sans enseignement explicite, tout enfant normalement constitué maîtrise un système linguistique d\'une complexité considérable. Comment cela est-il possible ? Les théories nativistes, behavioristes et interactionnistes proposent des réponses différentes.',
      introHighlight: 'L\'acquisition du langage est si rapide, si universelle et si résistante aux variations de l\'environnement qu\'elle suggère l\'existence d\'une prédisposition biologique spécifique à l\'espèce humaine.',
      lessons: [
        {
          slug: 'etapes-acquisition',
          title: 'Les étapes de l\'acquisition',
          description: 'Le développement linguistique de l\'enfant, du babillage aux premières phrases complexes.',
          intro: 'L\'acquisition du langage suit des étapes remarquablement régulières à travers les cultures et les langues. Du babillage des premiers mois aux phrases complexes de l\'âge scolaire, chaque stade prépare le suivant dans un processus continu et cumulatif.',
          introHighlight: 'Tous les enfants du monde traversent les mêmes étapes dans le même ordre, quelle que soit la langue acquise : cette universalité suggère une base biologique commune.',
          sections: [
            {
              title: 'La période prélinguistique (0-12 mois)',
              paragraphs: ['Dès la naissance, le nourrisson est sensible aux propriétés de la parole humaine. Les nouveau-nés préfèrent la voix de leur mère, qu\'ils ont entendue in utero, et distinguent leur langue maternelle d\'une langue étrangère par ses propriétés prosodiques. Vers 2 mois, les gazouillis (sons vocaliques) apparaissent. Vers 6-7 mois, le babillage canonique émerge : l\'enfant produit des syllabes redupliquées (« bababa », « mamama »).', 'Une découverte majeure de la recherche est que les nourrissons naissent « citoyens du monde phonétique » : à 6 mois, ils discriminent les contrastes phonétiques de toutes les langues. Vers 10-12 mois, cette capacité se spécialise : l\'enfant perd la capacité de distinguer les contrastes non pertinents dans sa langue maternelle. Cette « surdité acquise » est le signe d\'un apprentissage en cours : le cerveau se spécialise pour les sons de sa langue.'],
              highlight: 'La spécialisation phonétique entre 6 et 12 mois est une fenêtre critique : le nourrisson passe de la perception universelle de tous les contrastes sonores à la perception sélective des seuls contrastes de sa langue maternelle.'
            },
            {
              title: 'Les premiers mots et le lexique précoce (12-24 mois)',
              paragraphs: ['Le premier mot apparaît en moyenne vers 12 mois. Il s\'agit généralement de mots fréquents, concrets et liés au contexte immédiat : « maman », « papa », « dodo », « eau ». L\'enfant produit d\'abord des holophrases, mots isolés qui fonctionnent comme des phrases entières (« eau ! » peut signifier « je veux de l\'eau » ou « c\'est de l\'eau »).', 'Vers 18-24 mois se produit l\'explosion lexicale : le vocabulaire passe brutalement de 50 à 200 mots en quelques semaines. L\'enfant apprend alors 5 à 10 mots nouveaux par jour. Cette accélération coïncide avec la découverte que tout a un nom (le « naming insight »). À 2 ans, le vocabulaire actif est d\'environ 200-300 mots, et le vocabulaire passif (compris) est deux à trois fois plus important.'],
              highlight: 'L\'explosion lexicale vers 18 mois est l\'un des phénomènes les plus frappants du développement : l\'enfant passe soudain de l\'apprentissage mot par mot à l\'acquisition rapide de dizaines de mots par semaine.'
            },
            {
              title: 'La grammaire émergente (2-5 ans)',
              paragraphs: ['Vers 18-24 mois, l\'enfant commence à combiner deux mots : « papa parti », « encore gâteau », « pas dodo ». Ces énoncés télégraphiques (sans articles, prépositions ni conjugaisons) expriment déjà des relations sémantiques : agent-action, action-objet, possesseur-possédé. La longueur moyenne des énoncés (MLU : Mean Length of Utterance) augmente régulièrement.', 'Entre 3 et 5 ans, la grammaire se complexifie rapidement. L\'enfant maîtrise la conjugaison (avec des sur-régularisations créatives : « je sontais », « il a prendu »), les subordonnées (« le monsieur qui est grand »), les questions et les négations. Vers 5-6 ans, les structures fondamentales de la langue sont en place. L\'acquisition du vocabulaire, elle, se poursuit tout au long de la vie.'],
              highlight: 'Les erreurs des enfants (« il a prendu », « des chevals ») ne sont pas des fautes mais des preuves d\'apprentissage : elles montrent que l\'enfant a extrait la règle générale et l\'applique de manière productive.'
            }
          ],
          quiz: [
            {
              q: 'À quel âge apparaît en moyenne le premier mot ?',
              opts: ['6 mois', '12 mois', '18 mois', '24 mois'],
              correct: 1,
              explanation: 'Le premier mot apparaît en moyenne vers 12 mois, bien que la compréhension des mots commence plus tôt (vers 8-10 mois).'
            },
            {
              q: 'Qu\'est-ce que l\'explosion lexicale ?',
              opts: ['Un trouble du langage', 'L\'accélération soudaine de l\'acquisition du vocabulaire vers 18 mois', 'La perte de vocabulaire chez l\'adulte', 'L\'apprentissage de la lecture'],
              correct: 1,
              explanation: 'L\'explosion lexicale est l\'accélération brutale de l\'acquisition du vocabulaire vers 18-24 mois, quand l\'enfant passe de 50 à 200 mots en quelques semaines.'
            },
            {
              q: 'Pourquoi les erreurs comme « il a prendu » sont-elles significatives ?',
              opts: ['Elles montrent un retard de développement', 'Elles prouvent que l\'enfant a extrait et applique la règle générale', 'Elles sont dues à l\'imitation des parents', 'Elles indiquent un problème auditif'],
              correct: 1,
              explanation: 'Les sur-régularisations montrent que l\'enfant a dégagé la règle productive (participe en « -u ») et l\'applique de manière créative, même aux verbes irréguliers.'
            }
          ],
          definitions: [
            {
              term: 'Babillage canonique',
              def: 'Production de syllabes redupliquées par le nourrisson vers 6-7 mois (« bababa », « mamama »), première étape de la production de sons structurés.'
            },
            {
              term: 'Holophrase',
              def: 'Mot isolé utilisé par l\'enfant comme un énoncé complet. « Eau ! » peut signifier « je veux de l\'eau » ou « c\'est de l\'eau » selon le contexte.'
            },
            {
              term: 'Explosion lexicale',
              def: 'Accélération brutale de l\'acquisition du vocabulaire vers 18-24 mois, quand l\'enfant commence à apprendre 5 à 10 mots nouveaux par jour.'
            },
            {
              term: 'Sur-régularisation',
              def: 'Application de la règle grammaticale régulière à une forme irrégulière (ex. : « il a prendu » au lieu de « il a pris »). Preuve de la maîtrise productive de la règle.'
            },
            {
              term: 'MLU (Mean Length of Utterance)',
              def: 'Longueur moyenne des énoncés en morphèmes, indice utilisé pour mesurer le développement grammatical de l\'enfant. Elle augmente régulièrement de 1 (holophrases) à 4-5 (phrases complexes).'
            }
          ],
          memos: [
            {
              front: 'Nombre clé : vocabulaire à 2 ans',
              back: 'À 2 ans, le vocabulaire actif d\'un enfant est d\'environ 200-300 mots. À 6 ans, il atteint environ 14 000 mots. Un adulte cultivé connaît entre 50 000 et 100 000 mots.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les nourrissons de 6 mois discriminent les contrastes phonétiques de TOUTES les langues, y compris celles qu\'ils n\'ont jamais entendues. Cette capacité se perd vers 10-12 mois, quand le cerveau se spécialise pour la langue maternelle.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Les étapes : 2 mois = gazouille, 6 mois = babille, 12 mois = 1er mot, 18 mois = explosion, 24 mois = 2 mots combinés, 36 mois = phrases. Chaque semestre apporte une avancée majeure.'
            }
          ]
        },
        {
          slug: 'theories-acquisition',
          title: 'Les théories de l\'acquisition',
          description: 'Innéisme, behaviorisme et interactionnisme : les débats sur l\'apprentissage du langage.',
          intro: 'Comment l\'enfant acquiert-il une langue aussi complexe en si peu de temps ? Trois grandes familles de théories s\'affrontent : l\'innéisme (le langage est une capacité biologique innée), le behaviorisme (le langage s\'acquiert par imitation et renforcement) et l\'interactionnisme (le langage émerge de l\'interaction sociale et cognitive).',
          introHighlight: 'Le débat inné/acquis en acquisition du langage est l\'un des plus anciens et des plus féconds de la science : il interroge la nature même de l\'esprit humain et de ses capacités.',
          sections: [
            {
              title: 'Le behaviorisme linguistique',
              paragraphs: ['B.F. Skinner, dans Verbal Behavior (1957), propose que l\'enfant acquiert le langage par les mêmes mécanismes que tout autre apprentissage : l\'imitation, le conditionnement opérant et le renforcement. L\'enfant imite les sons et les mots des adultes ; quand ses productions sont comprises et récompensées (par l\'attention, l\'approbation), elles sont renforcées et se stabilisent.', 'Le behaviorisme explique certains aspects de l\'acquisition, notamment le vocabulaire et les expressions idiomatiques, qui s\'acquièrent effectivement par exposition et pratique. Cependant, la théorie a été vivement critiquée par Chomsky dans sa célèbre recension de 1959. Chomsky montre que les enfants produisent des phrases qu\'ils n\'ont jamais entendues et commettent des erreurs systématiques (« il a prendu ») qui ne peuvent résulter de l\'imitation.'],
              highlight: 'La critique de Chomsky (1959) a porté un coup décisif au behaviorisme linguistique : l\'enfant ne se contente pas d\'imiter, il crée des phrases et des formes grammaticales qu\'il n\'a jamais entendues.'
            },
            {
              title: 'L\'innéisme et l\'argument de la pauvreté du stimulus',
              paragraphs: ['Noam Chomsky soutient que la faculté du langage est innée et biologiquement programmée. Son argument central est la pauvreté du stimulus : les données linguistiques auxquelles l\'enfant est exposé sont insuffisantes (bruitées, incomplètes, dépourvues de corrections explicites) pour permettre l\'acquisition d\'une grammaire aussi complexe par les seuls mécanismes d\'apprentissage général. Il faut donc postuler une Grammaire Universelle innée.', 'La théorie des Principes et Paramètres (1981) propose que l\'enfant naît avec un ensemble de principes universels et de paramètres binaires. L\'exposition à la langue maternelle permet de fixer les paramètres (ex. : tête-initiale ou tête-finale). L\'acquisition est donc un processus de maturation guidée plutôt qu\'un apprentissage au sens classique. Les preuves incluent l\'universalité des étapes d\'acquisition, la période critique et la créolisation spontanée par les enfants.'],
              highlight: 'L\'argument de la pauvreté du stimulus est le pilier de l\'innéisme : si l\'enfant ne reçoit pas assez de données pour apprendre la grammaire, c\'est qu\'il possède déjà une part de cette grammaire à la naissance.'
            },
            {
              title: 'L\'interactionnisme et les approches fonctionnelles',
              paragraphs: ['Les approches interactionnistes, inspirées de Vygotski et Bruner, soutiennent que le langage émerge de l\'interaction sociale. Jerome Bruner (1983) propose le concept de LASS (Language Acquisition Support System), système de soutien à l\'acquisition fourni par l\'entourage de l\'enfant. Le langage adressé à l\'enfant (LAE ou « motherese ») est simplifié, répétitif et mélodique, facilitant l\'apprentissage.', 'Les théories basées sur l\'usage (Tomasello, 2003) proposent que l\'enfant construit sa grammaire progressivement à partir des régularités statistiques de l\'input. L\'enfant commence par mémoriser des constructions entières (« qu\'est-ce que c\'est ? ») avant d\'en extraire des schémas abstraits. Cette approche, appuyée par des modèles computationnels, montre que les mécanismes d\'apprentissage général (statistique, analogie) peuvent rendre compte d\'une part importante de l\'acquisition.'],
              highlight: 'Le débat inné/acquis se nuance : les approches modernes reconnaissent à la fois des prédispositions biologiques et le rôle crucial de l\'interaction sociale et de l\'input linguistique dans l\'acquisition.'
            }
          ],
          quiz: [
            {
              q: 'Qui a proposé que le langage s\'acquiert par conditionnement opérant ?',
              opts: ['Chomsky', 'Skinner', 'Piaget', 'Vygotski'],
              correct: 1,
              explanation: 'B.F. Skinner a proposé dans Verbal Behavior (1957) que le langage s\'acquiert par imitation, conditionnement opérant et renforcement, comme tout autre comportement.'
            },
            {
              q: 'Qu\'est-ce que l\'argument de la pauvreté du stimulus ?',
              opts: ['Les enfants ne reçoivent pas assez de données pour apprendre par les seuls mécanismes généraux', 'Les enfants sont privés de stimulation linguistique', 'Les adultes parlent trop simplement aux enfants', 'Les enfants n\'entendent qu\'une seule langue'],
              correct: 0,
              explanation: 'L\'argument de la pauvreté du stimulus (Chomsky) soutient que les données linguistiques sont insuffisantes pour permettre l\'acquisition d\'une grammaire complexe sans postuler une connaissance innée.'
            },
            {
              q: 'Que désigne le LASS de Jerome Bruner ?',
              opts: ['Un test de langage', 'Un système de soutien à l\'acquisition du langage', 'Un logiciel d\'apprentissage', 'Une grammaire universelle'],
              correct: 1,
              explanation: 'Le LASS (Language Acquisition Support System) est le système de soutien social à l\'acquisition du langage : les interactions adulte-enfant qui facilitent l\'apprentissage linguistique.'
            }
          ],
          definitions: [
            {
              term: 'Behaviorisme linguistique',
              def: 'Théorie (Skinner, 1957) selon laquelle le langage s\'acquiert par imitation et renforcement, comme tout autre comportement appris.'
            },
            {
              term: 'Pauvreté du stimulus',
              def: 'Argument de Chomsky : les données linguistiques auxquelles l\'enfant est exposé sont insuffisantes pour expliquer l\'acquisition sans postuler une connaissance innée.'
            },
            {
              term: 'Grammaire Universelle (acquisition)',
              def: 'Ensemble des principes linguistiques innés que l\'enfant possède à la naissance et qui guident l\'acquisition de sa langue maternelle (Chomsky).'
            },
            {
              term: 'LASS',
              def: 'Language Acquisition Support System (Bruner, 1983) : système de soutien social à l\'acquisition du langage fourni par l\'entourage de l\'enfant (interactions, jeux, routines).'
            },
            {
              term: 'Langage adressé à l\'enfant (LAE)',
              def: 'Registre de parole simplifié, répétitif et mélodique utilisé par les adultes avec les jeunes enfants (aussi appelé motherese ou baby talk). Il facilite l\'acquisition.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Chomsky vs Skinner',
              back: 'En 1959, Chomsky publie sa célèbre recension de Verbal Behavior de Skinner, critiquant le behaviorisme linguistique et posant les bases de l\'innéisme. C\'est un tournant majeur de la linguistique et de la psychologie.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Les enfants sourds de naissance exposés à la langue des signes traversent exactement les mêmes étapes d\'acquisition que les enfants entendants : babillage manuel, premiers signes vers 12 mois, combinaisons vers 18 mois.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Les 3 théories : BEHAVIORISME = on IMITE. INNÉISME = c\'est INNÉ. INTERACTIONNISME = on INTERAGIT. Skinner imite, Chomsky naît avec, Bruner interagit.'
            }
          ]
        },
        {
          slug: 'periode-critique',
          title: 'La période critique',
          description: 'La fenêtre temporelle optimale pour l\'acquisition du langage et ses implications.',
          intro: 'L\'hypothèse de la période critique, formulée par Eric Lenneberg en 1967, postule qu\'il existe une fenêtre temporelle optimale pour l\'acquisition du langage, approximativement entre la naissance et la puberté. Passé ce délai, l\'acquisition d\'une langue devient considérablement plus difficile.',
          introHighlight: 'La période critique pose une question fascinante : pourquoi les enfants apprennent-ils les langues si facilement et les adultes si difficilement ? La réponse semble résider dans la plasticité déclinante du cerveau.',
          sections: [
            {
              title: 'L\'hypothèse de Lenneberg',
              paragraphs: ['Eric Lenneberg, dans Biological Foundations of Language (1967), propose que l\'acquisition du langage est soumise à une période critique liée à la maturation du cerveau. Avant la puberté, le cerveau possède une plasticité suffisante pour acquérir une langue naturellement. Après la puberté, la latéralisation cérébrale est achevée et les mécanismes d\'acquisition linguistique perdent leur efficacité.', 'Les preuves proviennent de plusieurs sources. Les cas d\'enfants sauvages (Genie, découverte en 1970 après 13 ans d\'isolement) montrent que l\'acquisition du langage après la puberté est sévèrement compromise. Les enfants sourds qui reçoivent un implant cochléaire avant 3 ans développent un langage oral nettement meilleur que ceux implantés après 7 ans. L\'apprentissage d\'une langue seconde est également affecté par l\'âge.'],
              highlight: 'Le cas de Genie (1970) est le plus étudié : après 13 ans d\'isolement total, elle n\'a jamais acquis une grammaire complète malgré des années de rééducation, confirmant l\'hypothèse de la période critique.'
            },
            {
              title: 'La période critique et l\'apprentissage des langues secondes',
              paragraphs: ['L\'étude classique de Johnson et Newport (1989) montre une corrélation forte entre l\'âge d\'arrivée aux États-Unis et la maîtrise grammaticale de l\'anglais chez les immigrés coréens et chinois. Ceux arrivés avant 7 ans atteignent un niveau quasi natif, ceux arrivés entre 7 et 15 ans montrent un déclin progressif, et ceux arrivés après 17 ans plafonnent à un niveau variable mais rarement natif.', 'La phonologie est le domaine le plus sensible à l\'âge : acquérir une prononciation native après la puberté est extrêmement difficile. Le vocabulaire, en revanche, continue de s\'acquérir efficacement tout au long de la vie. La syntaxe et la morphologie occupent une position intermédiaire. Ces différences suggèrent que la période critique n\'est pas un phénomène unitaire mais affecte les composantes linguistiques de manière différenciée.'],
              highlight: 'La période critique n\'est pas un interrupteur mais un gradateur : la sensibilité linguistique décline progressivement, et les différentes composantes (phonologie, syntaxe, vocabulaire) ne sont pas affectées au même rythme.'
            },
            {
              title: 'Les bases neuronales de la période critique',
              paragraphs: ['La neurolinguistique explique la période critique par la maturation cérébrale. La densité synaptique atteint un pic vers 2-3 ans (environ 50% de plus que chez l\'adulte), puis décline par un processus d\'élagage synaptique (synaptic pruning). Cette surabondance de connexions rend le cerveau de l\'enfant particulièrement plastique et réceptif aux régularités linguistiques.', 'La myélinisation des aires du langage (Broca, Wernicke) se poursuit jusqu\'à la puberté. La latéralisation du langage dans l\'hémisphère gauche se renforce avec l\'âge. Chez l\'adulte, l\'apprentissage d\'une langue seconde active des réseaux neuronaux partiellement différents de ceux de la langue maternelle, ce qui pourrait expliquer les différences qualitatives entre acquisition précoce et apprentissage tardif.'],
              highlight: 'Le cerveau de l\'enfant est un supercalculateur linguistique : sa surabondance de synapses et sa plasticité en font une machine à extraire les régularités de la langue, capacité qui décline avec la maturation cérébrale.'
            }
          ],
          quiz: [
            {
              q: 'Qui a formulé l\'hypothèse de la période critique pour le langage ?',
              opts: ['Noam Chomsky', 'Eric Lenneberg', 'Jean Piaget', 'B.F. Skinner'],
              correct: 1,
              explanation: 'Eric Lenneberg a formulé l\'hypothèse de la période critique dans Biological Foundations of Language (1967), la liant à la maturation cérébrale.'
            },
            {
              q: 'Quel aspect de la langue est le plus sensible à l\'âge d\'acquisition ?',
              opts: ['Le vocabulaire', 'La pragmatique', 'La phonologie', 'La lecture'],
              correct: 2,
              explanation: 'La phonologie (prononciation) est le domaine le plus sensible à l\'âge : acquérir une prononciation native après la puberté est extrêmement difficile.'
            },
            {
              q: 'Que se passe-t-il au niveau neuronal pendant la période critique ?',
              opts: ['Le cerveau perd des neurones', 'La densité synaptique est maximale puis décline', 'Les aires du langage ne sont pas encore formées', 'Le cerveau double de volume'],
              correct: 1,
              explanation: 'La densité synaptique atteint un pic vers 2-3 ans (50% de plus que chez l\'adulte), offrant une plasticité maximale, puis décline par élagage synaptique.'
            }
          ],
          definitions: [
            {
              term: 'Période critique',
              def: 'Fenêtre temporelle (naissance → puberté) pendant laquelle le cerveau est optimalement disposé à acquérir une langue. Après cette période, l\'acquisition devient beaucoup plus difficile (Lenneberg, 1967).'
            },
            {
              term: 'Élagage synaptique',
              def: 'Processus de maturation cérébrale par lequel les connexions synaptiques non utilisées sont éliminées, réduisant la plasticité du cerveau mais renforçant les circuits les plus sollicités.'
            },
            {
              term: 'Latéralisation',
              def: 'Spécialisation progressive des hémisphères cérébraux pour différentes fonctions. Le langage se latéralise principalement dans l\'hémisphère gauche au cours du développement.'
            },
            {
              term: 'Aire de Broca',
              def: 'Région du lobe frontal gauche impliquée dans la production du langage et le traitement grammatical. Son lésion provoque une aphasie de Broca (parole laborieuse, agrammatique).'
            },
            {
              term: 'Aire de Wernicke',
              def: 'Région du lobe temporal gauche impliquée dans la compréhension du langage. Son lésion provoque une aphasie de Wernicke (parole fluide mais incohérente).'
            }
          ],
          memos: [
            {
              front: 'Date clé : Lenneberg 1967',
              back: 'Eric Lenneberg publie Biological Foundations of Language en 1967, proposant l\'hypothèse de la période critique et ancrant l\'étude du langage dans la biologie.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Genie, découverte en 1970 à Los Angeles après 13 ans d\'isolement, a acquis un vocabulaire considérable mais n\'a jamais maîtrisé la syntaxe. Son cas reste la preuve la plus frappante de la période critique.'
            },
            {
              front: 'Nombre clé : synapses',
              back: 'À 2-3 ans, le cerveau d\'un enfant possède environ 1 000 billions de synapses, soit 50% de plus qu\'un cerveau adulte. Cette surabondance explique la plasticité linguistique exceptionnelle de l\'enfant.'
            }
          ]
        },
        {
          slug: 'troubles-langage',
          title: 'Les troubles du langage',
          description: 'Les principaux troubles développementaux et acquis du langage : dyslexie, aphasie, TSL.',
          intro: 'Les troubles du langage affectent une part significative de la population. Qu\'ils soient développementaux (présents dès l\'enfance) ou acquis (consécutifs à une lésion cérébrale), ils éclairent par leur diversité les mécanismes normaux du langage.',
          introHighlight: 'L\'étude des troubles du langage est une fenêtre sur le fonctionnement normal du cerveau linguistique : chaque trouble révèle une composante spécifique du système en montrant ce qui se passe quand elle dysfonctionne.',
          sections: [
            {
              title: 'Le trouble spécifique du langage (TSL)',
              paragraphs: ['Le trouble spécifique du langage (TSL), aussi appelé trouble développemental du langage (TDL) ou dysphasie, affecte environ 7% des enfants. Il se caractérise par un retard significatif dans l\'acquisition du langage en l\'absence de déficience intellectuelle, de perte auditive ou de troubles neurologiques. Les enfants TSL produisent des phrases plus courtes, commettent plus d\'erreurs grammaticales et ont un vocabulaire plus restreint que leurs pairs.', 'Le TSL touche préférentiellement la morphologie et la syntaxe. Les enfants TSL éprouvent des difficultés particulières avec les marques flexionnelles (accord, conjugaison), les pronoms et les phrases complexes. La composante génétique est forte : le TSL est héréditaire dans environ 50% des cas. Le gène FOXP2, découvert en 2001, a été le premier gène associé à un trouble spécifique du langage.'],
              highlight: 'La découverte du gène FOXP2 en 2001 a constitué une avancée majeure : c\'est le premier gène identifié comme impliqué dans un trouble spécifique des capacités linguistiques.'
            },
            {
              title: 'La dyslexie',
              paragraphs: ['La dyslexie est un trouble spécifique de l\'apprentissage de la lecture, affectant environ 5 à 10% de la population. Elle se manifeste par des difficultés persistantes dans le décodage des mots écrits, malgré une intelligence normale et un enseignement adapté. La théorie phonologique dominante attribue la dyslexie à un déficit dans le traitement des sons du langage, qui compromet la correspondance graphème-phonème.', 'Les recherches en neuroimagerie montrent que les dyslexiques présentent une activation réduite des régions temporo-pariétales gauches impliquées dans le traitement phonologique, et une activation accrue des régions frontales et de l\'hémisphère droit, interprétées comme des mécanismes compensatoires. La dyslexie a une forte composante génétique : elle est héréditaire dans environ 40% des cas.'],
              highlight: 'La dyslexie n\'est pas un problème visuel ni un manque d\'intelligence : c\'est un trouble neurologique du traitement des sons du langage qui compromet l\'apprentissage du code écrit.'
            },
            {
              title: 'Les aphasies',
              paragraphs: ['Les aphasies sont des troubles du langage acquis, consécutifs à une lésion cérébrale (accident vasculaire cérébral, traumatisme crânien, tumeur). L\'aphasie de Broca, causée par une lésion du lobe frontal gauche, se caractérise par une parole laborieuse, télégraphique et agrammatique, avec une compréhension relativement préservée. L\'aphasie de Wernicke, causée par une lésion du lobe temporal gauche, produit une parole fluide mais incohérente, avec une compréhension sévèrement atteinte.', 'La double dissociation entre aphasie de Broca (production altérée, compréhension préservée) et aphasie de Wernicke (production fluide, compréhension altérée) a été un argument majeur pour la modularité du langage : la production et la compréhension reposent sur des circuits neuronaux partiellement indépendants. Les progrès de la neuroimagerie ont affiné ce modèle en révélant un réseau linguistique distribué et interconnecté.'],
              highlight: 'Les aphasies ont révélé que le langage n\'est pas localisé en un seul point du cerveau : il repose sur un réseau distribué dont les différentes composantes (production, compréhension, mémoire) peuvent être atteintes sélectivement.'
            }
          ],
          quiz: [
            {
              q: 'Quel pourcentage d\'enfants est affecté par le trouble spécifique du langage (TSL) ?',
              opts: ['Environ 1%', 'Environ 7%', 'Environ 15%', 'Environ 25%'],
              correct: 1,
              explanation: 'Le TSL affecte environ 7% des enfants, ce qui en fait l\'un des troubles développementaux les plus fréquents.'
            },
            {
              q: 'Quelle est la théorie dominante pour expliquer la dyslexie ?',
              opts: ['Un déficit visuel', 'Un manque de motivation', 'Un déficit du traitement phonologique', 'Un retard intellectuel'],
              correct: 2,
              explanation: 'La théorie phonologique attribue la dyslexie à un déficit dans le traitement des sons du langage, compromettant la correspondance entre lettres et sons.'
            },
            {
              q: 'Quelle aphasie se caractérise par une parole fluide mais incohérente ?',
              opts: ['L\'aphasie de Broca', 'L\'aphasie de Wernicke', 'L\'aphasie globale', 'L\'aphasie de conduction'],
              correct: 1,
              explanation: 'L\'aphasie de Wernicke, causée par une lésion du lobe temporal gauche, produit une parole fluide mais incohérente, avec une compréhension sévèrement atteinte.'
            }
          ],
          definitions: [
            {
              term: 'Trouble spécifique du langage (TSL)',
              def: 'Trouble développemental affectant l\'acquisition du langage en l\'absence de déficience intellectuelle ou sensorielle. Touche environ 7% des enfants.'
            },
            {
              term: 'Dyslexie',
              def: 'Trouble spécifique de l\'apprentissage de la lecture caractérisé par des difficultés de décodage des mots écrits, lié à un déficit du traitement phonologique.'
            },
            {
              term: 'Aphasie de Broca',
              def: 'Trouble acquis du langage causé par une lésion frontale gauche : parole laborieuse et agrammatique, compréhension relativement préservée.'
            },
            {
              term: 'Aphasie de Wernicke',
              def: 'Trouble acquis du langage causé par une lésion temporale gauche : parole fluide mais incohérente, compréhension sévèrement atteinte.'
            },
            {
              term: 'FOXP2',
              def: 'Premier gène identifié comme impliqué dans un trouble spécifique du langage (2001). Sa mutation cause des difficultés articulatoires et grammaticales sévères.'
            }
          ],
          memos: [
            {
              front: 'Date clé : FOXP2',
              back: 'En 2001, l\'équipe de Simon Fisher identifie le gène FOXP2 comme le premier gène lié à un trouble spécifique du langage, étudié dans la famille KE (trois générations de troubles articulatoires et grammaticaux).'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Paul Broca a localisé l\'aire du langage dans le lobe frontal gauche en 1861 grâce à son patient « Tan » (Leborgne), qui ne pouvait plus prononcer que la syllabe « tan ». C\'est la naissance de la neurolinguistique.'
            },
            {
              front: 'Nombre clé : dyslexie',
              back: 'La dyslexie affecte 5 à 10% de la population. Elle est plus fréquente chez les locuteurs de langues à orthographe opaque (anglais, français) que transparente (italien, finnois).'
            }
          ]
        },
        {
          slug: 'langage-cerveau',
          title: 'Langage et cerveau',
          description: 'Les bases neuronales du langage : aires cérébrales, latéralisation et neuroimagerie.',
          intro: 'La neurolinguistique étudie les bases cérébrales du langage. Depuis la découverte de l\'aire de Broca en 1861, notre compréhension des réseaux neuronaux du langage s\'est considérablement enrichie grâce aux techniques de neuroimagerie modernes.',
          introHighlight: 'Le langage mobilise un réseau cérébral étendu et distribué, principalement latéralisé à gauche, qui coordonne la perception des sons, la compréhension du sens, la planification grammaticale et la production articulatoire.',
          sections: [
            {
              title: 'Les aires classiques du langage',
              paragraphs: ['L\'aire de Broca, située dans le gyrus frontal inférieur gauche (aires de Brodmann 44 et 45), est impliquée dans la production du langage et le traitement grammatical. Sa découverte par Paul Broca en 1861, à partir du patient « Tan » (Louis Victor Leborgne), marque la naissance de la neurolinguistique. L\'aire de Wernicke, identifiée par Carl Wernicke en 1874 dans le gyrus temporal supérieur gauche, est impliquée dans la compréhension du langage.', 'Le faisceau arqué, un faisceau de fibres nerveuses, relie les aires de Broca et de Wernicke. Le modèle classique (Geschwind, 1965) postule un circuit : la parole perçue est traitée par Wernicke (compréhension), transmise par le faisceau arqué à Broca (programmation articulatoire), puis envoyée au cortex moteur pour la production. Ce modèle, bien que simplifié, reste un cadre de référence.'],
              highlight: 'Le modèle classique Broca-Wernicke-Geschwind a dominé la neurolinguistique pendant un siècle. La neuroimagerie moderne l\'a enrichi en révélant un réseau beaucoup plus complexe et distribué.'
            },
            {
              title: 'La neuroimagerie et les réseaux du langage',
              paragraphs: ['L\'IRM fonctionnelle (IRMf), la magnétoencéphalographie (MEG) et l\'électroencéphalographie (EEG) ont révolutionné notre compréhension des bases neuronales du langage. Ces techniques montrent que le langage mobilise un réseau distribué impliquant bien plus que les aires de Broca et de Wernicke : le cortex temporal moyen (accès lexical), le gyrus angulaire (interface sémantique-phonologique), le cortex préfrontal (mémoire de travail) et même le cervelet (timing articulatoire).', 'Les potentiels évoqués (ERP) ont identifié des signatures électriques spécifiques au traitement linguistique. La N400 est une onde négative survenant 400 ms après un mot sémantiquement incongru (« Le chat mange du béton »). La P600 est une onde positive survenant 600 ms après une violation syntaxique (« Le chat mange sont »). Ces signatures montrent que le cerveau traite le sens et la grammaire par des mécanismes partiellement distincts.'],
              highlight: 'La N400 et la P600 sont les signatures cérébrales du sens et de la grammaire : le cerveau détecte une anomalie sémantique en 400 ms et une anomalie syntaxique en 600 ms.'
            },
            {
              title: 'La latéralisation et la plasticité',
              paragraphs: ['Le langage est principalement latéralisé dans l\'hémisphère gauche chez environ 95% des droitiers et 70% des gauchers. Cette latéralisation n\'est cependant pas absolue : l\'hémisphère droit contribue au traitement de la prosodie, de l\'humour, de l\'ironie et du discours. Les lésions de l\'hémisphère droit causent des troubles de la communication sans être des aphasies au sens classique.', 'La plasticité cérébrale permet une réorganisation remarquable des fonctions linguistiques, surtout chez l\'enfant. Des enfants ayant subi une hémisphérectomie gauche (ablation de tout l\'hémisphère gauche) avant 5 ans peuvent développer un langage quasi normal dans l\'hémisphère droit. Cette plasticité décline avec l\'âge, confirmant l\'hypothèse de la période critique. Chez l\'adulte, la récupération après aphasie est possible mais plus limitée.'],
              highlight: 'La plasticité cérébrale de l\'enfant est spectaculaire : même après l\'ablation de tout l\'hémisphère gauche, un enfant peut développer un langage quasi normal si l\'opération a lieu avant 5 ans.'
            }
          ],
          quiz: [
            {
              q: 'En quelle année Paul Broca a-t-il localisé l\'aire du langage dans le lobe frontal gauche ?',
              opts: ['1841', '1861', '1881', '1901'],
              correct: 1,
              explanation: 'Paul Broca a présenté le cas de son patient « Tan » en 1861, localisant la production du langage dans le gyrus frontal inférieur gauche.'
            },
            {
              q: 'Que signale la composante N400 en potentiels évoqués ?',
              opts: ['Une violation syntaxique', 'Une anomalie sémantique', 'Un bruit ambiant', 'Un mouvement oculaire'],
              correct: 1,
              explanation: 'La N400 est une onde cérébrale négative survenant 400 ms après un mot sémantiquement incongru, signalant que le cerveau a détecté une anomalie de sens.'
            },
            {
              q: 'Chez quel pourcentage de droitiers le langage est-il latéralisé à gauche ?',
              opts: ['50%', '70%', '85%', '95%'],
              correct: 3,
              explanation: 'Environ 95% des droitiers ont le langage latéralisé dans l\'hémisphère gauche. Chez les gauchers, ce pourcentage descend à environ 70%.'
            }
          ],
          definitions: [
            {
              term: 'Neurolinguistique',
              def: 'Discipline étudiant les bases cérébrales du langage : les aires impliquées, les réseaux neuronaux, les troubles acquis et les signatures électriques du traitement linguistique.'
            },
            {
              term: 'Faisceau arqué',
              def: 'Faisceau de fibres nerveuses reliant les aires de Broca (production) et de Wernicke (compréhension), constituant la voie dorsale du traitement linguistique.'
            },
            {
              term: 'N400',
              def: 'Potentiel évoqué négatif survenant 400 ms après un mot sémantiquement incongru. Signature cérébrale du traitement sémantique et de la détection d\'anomalies de sens.'
            },
            {
              term: 'P600',
              def: 'Potentiel évoqué positif survenant 600 ms après une violation grammaticale. Signature cérébrale du traitement syntaxique et de la réanalyse structurelle.'
            },
            {
              term: 'Plasticité cérébrale',
              def: 'Capacité du cerveau à se réorganiser après une lésion ou en réponse à l\'apprentissage. Particulièrement importante chez l\'enfant pour la récupération des fonctions linguistiques.'
            }
          ],
          memos: [
            {
              front: 'Date clé : Broca 1861',
              back: 'En 1861, Paul Broca présente le cas de « Tan » (Leborgne) à la Société d\'Anthropologie de Paris, localisant la production du langage dans le lobe frontal gauche. C\'est la naissance de la neurolinguistique.'
            },
            {
              front: 'Le saviez-vous ?',
              back: 'Le patient H.M. (Henry Molaison), opéré en 1953 pour son épilepsie, a perdu la capacité de former de nouveaux souvenirs mais conservait son langage intact. Son cas a prouvé que la mémoire et le langage reposent sur des systèmes cérébraux distincts.'
            },
            {
              front: 'Astuce mnémotechnique',
              back: 'Broca = en Bas (frontal) = Production (Broca/Bouche). Wernicke = en W-arrière (temporal) = Compréhension (Wernicke/Words). N400 = anomalie de Nom (sens). P600 = problème de Phrase (syntaxe).'
            }
          ]
        }
      ]
    },
  ]
};
